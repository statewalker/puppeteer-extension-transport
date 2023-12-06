import {CdpBrowser} from 'puppeteer-core/lib/cjs/puppeteer/cdp/Browser.js';
import type {
  BrowserCloseCallback,
  IsPageTargetCallback,
  TargetFilterCallback,
} from 'puppeteer-core/lib/cjs/puppeteer/api/Browser.js';
import {Page} from 'puppeteer-core/lib/cjs/puppeteer/api/Page.js';
import {Connection} from 'puppeteer-core/lib/cjs/puppeteer/cdp/Connection.js';
import type {Viewport} from 'puppeteer-core/lib/cjs/puppeteer/common/Viewport.js';
import {ConnectionTransport} from 'puppeteer-core/lib/cjs/puppeteer/common/ConnectionTransport.js';
import {CDPSession} from 'puppeteer-core/lib/cjs/puppeteer/api/CDPSession.js';

export {ConnectionTransport};
const DEFAULT_VIEWPORT = Object.freeze({width: 800, height: 600});

class BrowserInBrowser extends CdpBrowser {
  constructor({
    product,
    connection,
    contextIds,
    ignoreHTTPSErrors = false,
    defaultViewport = DEFAULT_VIEWPORT,
    closeCallback,
    targetFilterCallback,
    isPageTargetCallback,
    waitForInitiallyDiscoveredTargets = true,
  }: {
    product: 'firefox' | 'chrome' | undefined;
    connection: Connection;
    contextIds: string[];
    ignoreHTTPSErrors: boolean;
    defaultViewport?: Viewport | null;
    closeCallback?: BrowserCloseCallback;
    targetFilterCallback?: TargetFilterCallback;
    isPageTargetCallback?: IsPageTargetCallback;
    waitForInitiallyDiscoveredTargets: boolean;
  }) {
    super(
      product,
      connection,
      contextIds,
      ignoreHTTPSErrors,
      defaultViewport,
      undefined, // process
      closeCallback,
      targetFilterCallback,
      isPageTargetCallback,
      waitForInitiallyDiscoveredTargets
    );
  }

  async attach() {
    super._attach();
  }

  override async _createPageInContext(contextId?: string): Promise<Page> {
    const page = await super._createPageInContext(contextId);
    (page as any).pdf = async function (options = {}) {
      // client.send("Performance.enable");
      const {
        landscape,
        displayHeaderFooter,
        headerTemplate,
        footerTemplate,
        printBackground,
        scale,
        width: paperWidth,
        height: paperHeight,
        margin,
        pageRanges,
        preferCSSPageSize,
        // omitBackground,
        // timeout: ms,
        tagged: generateTaggedPDF,
      } = this._getPDFOptions(options);
      // if (omitBackground) {
      //   await this.#emulationManager.setTransparentBackgroundColor();
      // }
      const client = (page as any)._client as CDPSession;
      const printCommandPromise = client.send('Page.printToPDF', {
        // transferMode: 'ReturnAsStream',
        landscape,
        displayHeaderFooter,
        headerTemplate,
        footerTemplate,
        printBackground,
        scale,
        paperWidth,
        paperHeight,
        marginTop: margin.top,
        marginBottom: margin.bottom,
        marginLeft: margin.left,
        marginRight: margin.right,
        pageRanges,
        preferCSSPageSize,
        generateTaggedPDF,
      });
      const {data} = await printCommandPromise;
      return atob(data);
    };
    return page;
  }
}

export async function puppeteerConnect({
  transport,
  ignoreHTTPSErrors = false,
  defaultViewport = null,
  closeCallback,
  targetFilterCallback,
  isPageTargetCallback,
  waitForInitiallyDiscoveredTargets = true,
  slowMo = 0,
  protocolTimeout,
}: {
  slowMo?: number;
  protocolTimeout?: number;
  transport: ConnectionTransport;
  // product: 'firefox' | 'chrome' | undefined;
  ignoreHTTPSErrors?: boolean;
  defaultViewport?: Viewport | null;
  closeCallback?: BrowserCloseCallback;
  targetFilterCallback?: TargetFilterCallback;
  isPageTargetCallback?: IsPageTargetCallback;
  waitForInitiallyDiscoveredTargets?: boolean;
}) {
  const connection = new Connection('', transport, slowMo, protocolTimeout);

  const version = await connection.send('Browser.getVersion');
  const product = version.product.toLowerCase().includes('firefox')
    ? 'firefox'
    : 'chrome';
  const {browserContextIds} = await connection.send(
    'Target.getBrowserContexts'
  );
  const browser = new BrowserInBrowser({
    product: product || 'chrome',
    connection,
    contextIds: browserContextIds,
    ignoreHTTPSErrors,
    defaultViewport,
    closeCallback,
    targetFilterCallback,
    isPageTargetCallback,
    waitForInitiallyDiscoveredTargets,
  });
  await browser.attach();
  return browser;
}
