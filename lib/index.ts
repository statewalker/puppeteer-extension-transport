import {ConnectionTransport} from 'puppeteer-core';
import puppeteer from 'puppeteer-core/lib/cjs/puppeteer/web';

export {puppeteer};

interface CDPCommand {
  id: number;
  method: string;
  params: any;
  sessionId?: string;
}

interface CDPCommandResponse extends CDPCommand {
  error?: {
    message?: string;
  };
  result?: any;
}

interface CDPEvent {
  method: string;
  params: any;
  sessionId?: string;
}

type DebuggerApi = {
  debugger: {
    /**
     * Attaches debugger to the given target.
     * @param target Debugging target to which you want to attach.
     * @param requiredVersion Required debugging protocol version ("0.1"). One can only attach to the debuggee with matching major version and greater or equal minor version. List of the protocol versions can be obtained in the documentation pages.
     * @return The `attach` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    attach : (target: chrome.debugger.Debuggee, requiredVersion: string) => Promise<void>;

    /**
     * Detaches debugger from the given target.
     * @param target Debugging target from which you want to detach.
     * @return The `detach` method provides its result via callback or returned as a `Promise` (MV3 only). It has no parameters.
     */
    detach: (target: chrome.debugger.Debuggee) => Promise<void>;

    /**
     * Sends given command to the debugging target.
     * @param target Debugging target to which you want to send the command.
     * @param method Method name. Should be one of the methods defined by the remote debugging protocol.
     * @param commandParams Since Chrome 22.
     * JSON object with request parameters. This object must conform to the remote debugging params scheme for given method.
     * @return The `sendCommand` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
  sendCommand: (
        target: chrome.debugger.Debuggee,
        method: string,
        commandParams?: Object,
    ) => Promise<Object>;

    /**
     * Since Chrome 28.
     * Returns the list of available debug targets.
     * @return The `getTargets` method provides its result via callback or returned as a `Promise` (MV3 only).
     */
    getTargets : () => Promise<chrome.debugger.TargetInfo[]>;

    /** Fired when browser terminates debugging session for the tab. This happens when either the tab is being closed or Chrome DevTools is being invoked for the attached tab. */
    onDetach : chrome.debugger.DebuggerDetachedEvent;

    /** Fired whenever debugging target issues instrumentation event. */
    onEvent: chrome.debugger.DebuggerEventEvent;
  }
}

/**
 * A puppeteer connection transport for extension.
 */
export class ExtensionDebuggerTransport implements ConnectionTransport {
  private target: chrome.debugger.TargetInfo;
  private debugee: chrome.debugger.Debuggee;

  /**
   * If required, adjust this value to increase or decrese delay in ms between subsequent commands.
   * > Note :- decreasing it too much can give issues
   *
   * @default 0.04 * 1000
   */
  delay = 0.04 * 1000;

  private _sessionId: string;

  /** @internal */
  onmessage?: (message: string) => void;

  /** @internal */
  onclose?: () => void;

  /**
   * Returns a puppeteer connection transport instance for extension.
   * @example
   * How to use it:
   * ```javascript
   * const extensionTransport = await ExtensionDebuggerTransport.create(tabId)
   * const browser = await puppeteer.connect({
   *  transport: extensionTransport,
   *  defaultViewport: null
   * })
   *
   * // use first page from pages instead of using browser.newPage()
   * const [page] = await browser.pages()
   * await page.goto('https://wikipedia.org')
   * ```
   *
   * @param tabId - The id of tab to target. You can get this using chrome.tabs api
   * @param functionSerializer - Optional function serializer. If not specified and
   * if extension's manifest.json contains `unsafe_eval` then defaults to `new Function()`
   * else defaults to `() => {}`
   * @returns - The instance of {@link ExtensionDebuggerTransport}
   *
   * @throws Error
   * If debugger permission not given to extension
   */
  static async create(
    api : DebuggerApi,
    tabId: number,
    functionSerializer?: FunctionConstructor
  ): Promise<ExtensionDebuggerTransport> {
    const debugee: chrome.debugger.Debuggee = {
      tabId: tabId,
    };
    await api.debugger.attach(debugee, '1.3');
    const target = await this._getTargetInfo(api, debugee);
    const transport = new ExtensionDebuggerTransport(api, target);
    transport._initialize(functionSerializer);
    return transport;
  }

  api : DebuggerApi;

  constructor(api : DebuggerApi, target: chrome.debugger.TargetInfo) {
    this.api = api;
    this.target = target;
    this._sessionId = target.id;
    this.debugee = {
      tabId: target.tabId,
    };

    this.api.debugger.onEvent.addListener((source, method, params) => {
      const event: CDPEvent = {
        method: method,
        params: params,
        sessionId: this._sessionId,
      };
      source.tabId === this.target.tabId ? this._emit(event) : null;
    });

    this.api.debugger.onDetach.addListener(source => {
      source.tabId === this.target.tabId ? this._closeTarget() : null;
    });
  }

  /** @internal */
  async send(message: string): Promise<void> {
    const command: CDPCommand = JSON.parse(message);
    const targetCommands = [
      'Target.getBrowserContexts',
      'Target.setDiscoverTargets',
      'Target.attachToTarget',
      'Target.activateTarget',
      'Target.closeTarget',
    ];
    if (targetCommands.includes(command.method)) {
      this._handleTargetCommand(command);
    } else {
      try {
      const result = await this.api.debugger.sendCommand(
        this.debugee,
        command.method,
        command.params);
        this._delaySend({
          ...command,
          error: undefined,
          result: result,
        });
      } catch (error) {
        this._delaySend({
          ...command,
          error: {
            message: (error as any)?.message
          }
        });
      }
    }
  }

  /** @internal */
  async close(): Promise<void> {
    await this.api.debugger.detach(this.debugee);
    this._closeTarget();
  }

  static async _getTargetInfo(
    api : DebuggerApi,
    debugee: chrome.debugger.Debuggee
  ): Promise<chrome.debugger.TargetInfo> {
    let targets = await api.debugger.getTargets();
    const target = targets
          .filter(target => target.attached && target.tabId === debugee.tabId)
          .map(target => {
            return {
              ...target,
              targetId: target.id,
              canAccessOpener: false,
            };
          });
    if (!target[0]) throw new Error('target not found');
    return target[0];
  }

  private _initialize(functionSerializer?: FunctionConstructor) {
    if (functionSerializer) {
      Function = functionSerializer;
    } else {
      try {
        new Function();
      } catch (e) {
        Function = function () {
          return () => {};
        } as any as FunctionConstructor;
      }
    }
  }


  private _handleTargetCommand(command: CDPCommand) {
    const response: CDPCommandResponse = {
      ...command,
      error: undefined,
      result: {},
    };
    switch (command.method) {
      case 'Target.getBrowserContexts':
        response.result = {
          browserContextIds: [],
        };
        break;

      case 'Target.setDiscoverTargets':
        response.result = null;
        this._emitTargetCreated();
        break;

      case 'Target.attachToTarget':
        response.result = {
          sessionId: this._sessionId,
        };
        this._emitTargetAttached();
        break;

      case 'Target.activateTarget':
        response.result = null;
        break;

      case 'Target.closeTarget':
        response.result = {
          success: true,
        };
        setTimeout(() => this.close(), this.delay);
        break;
    }
    this._delaySend(response);
  }

  private _emitTargetCreated() {
    const event: CDPEvent = {
      method: 'Target.targetCreated',
      params: {
        targetInfo: this.target,
      },
    };
    this._emit(event);
  }

  private _emitTargetAttached() {
    const event: CDPEvent = {
      method: 'Target.attachedToTarget',
      params: {
        targetInfo: this.target,
        sessionId: this._sessionId,
        waitingForDebugger: false,
      },
    };
    this._emit(event);
  }

  private _emitTargetDetached() {
    const event: CDPEvent = {
      method: 'Target.detachedFromTarget',
      params: {
        targetId: this.target.id,
        sessionId: this._sessionId,
      },
    };
    this._emit(event);
  }

  private _closeTarget() {
    this._emitTargetDetached();
    this.onclose?.call(null);
  }

  private _emit(event: CDPEvent) {
    this?.onmessage?.call(null, JSON.stringify(event));
  }

  private _delaySend(response: CDPCommandResponse) {
    setTimeout(() => {
      this?.onmessage?.call(null, JSON.stringify(response));
    }, this.delay);
  }
}
