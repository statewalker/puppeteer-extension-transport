(function(global2, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.api = {}));
})(this, function(exports2) {
  "use strict";var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateIn = (member, obj) => {
  if (Object(obj) !== obj)
    throw TypeError('Cannot use the "in" operator on this value');
  return member.has(obj);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};

  var _emitter, _handlers, _target, _type, _handler, _functionName, _siteString, _code, _originalMessage, _isResolved, _isRejected, _value, _resolver, _taskPromise, _timeoutId, _timeoutError, _finish, finish_fn, _callbacks, _idGenerator, _id, _error, _deferred, _timer, _label, _sessionId, _targetType, _callbacks2, _connection, _parentSessionId, _target2, _type2, _text, _args, _stackTraceLocations, _element, _multiple, _handled, _client, _richlyEditable, _editable, _focusable, _hidden, _name, _role, _ignored, _cachedHasFocusableChild, _isPlainTextField, isPlainTextField_fn, _isTextOnlyObject, isTextOnlyObject_fn, _hasFocusableChild, hasFocusableChild_fn, _mutex, _a, _locked, _acquirers, _name2, _fn, _url, _transport, _delay, _timeout, _sessions, _closed, _manuallyAttached, _callbacks3, _onClose, onClose_fn, _jsCoverage, _cssCoverage, _client2, _enabled, _scriptURLs, _scriptSources, _subscriptions, _resetOnNavigation, _reportAnonymousScripts, _includeRawScriptCoverage, _onExecutionContextsCleared, onExecutionContextsCleared_fn, _onScriptParsed, onScriptParsed_fn, _client3, _enabled2, _stylesheetURLs, _stylesheetSources, _eventListeners, _resetOnNavigation2, _onExecutionContextsCleared2, onExecutionContextsCleared_fn2, _onStyleSheet, onStyleSheet_fn, _type3, _message, _defaultValue, _handled2, _client4, _state, _clientProvider, _updater, _get, _updated, _amendments, _update, update_fn, _get2, get_fn, _disposed, _remoteObject, _world, _bindingsInstalled, _puppeteerUtil, _installGlobalBinding, installGlobalBinding_fn, _evaluate, evaluate_fn, _connection2, _discoveredTargetsByTargetId, _availableTargetsByTargetId, _availableTargetsBySessionId, _ignoredTargets, _targetFilterCallback, _targetFactory, _attachedToTargetListenersBySession, _initializeDeferred, _targetsIdsForInit, _onSessionDetached, _onTargetCreated, _onTargetDestroyed, _onAttachedToTarget, _finishInitializationIfReady, finishInitializationIfReady_fn, _client5, _timeoutSettings, _id2, _handled3, _updateDevicesHandle, _waitForDevicePromises, _updateDevices, updateDevices_fn, _client6, _timeoutSettings2, _deviceRequestPrompDeferreds, _onDeviceRequestPrompted, onDeviceRequestPrompted_fn, _world2, _polling, _root, _fn2, _args2, _timeout2, _timeoutError2, _result, _poller, _signal, _reruns, _tasks, _disposed2, _context, _contextBindings, _bindings, _frameOrWorker, _executionContext, executionContext_fn, _mutex2, _onBindingCalled, _expectedLifecycle, _frame, _timeout3, _navigationRequest, _subscriptions2, _initialLoaderId, _terminationDeferred, _sameDocumentNavigationDeferred, _lifecycleDeferred, _newDocumentNavigationDeferred, _hasSameDocumentNavigation, _swapped, _navigationResponseReceived, _onRequest, onRequest_fn, _onRequestFailed, onRequestFailed_fn, _onResponse, onResponse_fn, _onFrameDetached, onFrameDetached_fn, _navigatedWithinDocument, navigatedWithinDocument_fn, _navigated, navigated_fn, _frameSwapped, frameSwapped_fn, _checkLifecycleComplete, checkLifecycleComplete_fn, _frames, _parentIds, _childIds, _mainFrame, _waitRequests, _client7, _isNavigationRequest, _allowInterception, _interceptionHandled, _url2, _resourceType, _method, _postData, _headers, _frame2, _continueRequestOverrides, _responseForRequest, _abortErrorReason, _interceptResolutionState, _interceptHandlers, _initiator, _continue, continue_fn, _respond, respond_fn, _abort, abort_fn, _client8, _request, _contentPromise, _bodyLoadedDeferred, _remoteAddress, _status, _statusText, _url3, _fromDiskCache, _fromServiceWorker, _headers2, _securityDetails, _timing, _parseStatusTextFromExtraInfo, parseStatusTextFromExtraInfo_fn, _requestWillBeSentMap, _requestPausedMap, _httpRequestsMap, _responseReceivedExtraInfoMap, _queuedRedirectInfoMap, _queuedEventGroupMap, _ignoreHTTPSErrors, _frameManager, _networkEventManager, _extraHTTPHeaders, _credentials, _attemptedAuthentications, _userRequestInterceptionEnabled, _protocolRequestInterceptionEnabled, _userCacheDisabled, _emulatedNetworkConditions, _userAgent, _userAgentMetadata, _handlers2, _clients, _removeClient, removeClient_fn, _applyExtraHTTPHeaders, applyExtraHTTPHeaders_fn, _applyToAllClients, applyToAllClients_fn, _applyNetworkConditions, applyNetworkConditions_fn, _applyUserAgent, applyUserAgent_fn, _applyProtocolRequestInterception, applyProtocolRequestInterception_fn, _applyProtocolCacheDisabled, applyProtocolCacheDisabled_fn, _onRequestWillBeSent, onRequestWillBeSent_fn, _onAuthRequired, onAuthRequired_fn, _onRequestPaused, onRequestPaused_fn, _patchRequestEventHeaders, patchRequestEventHeaders_fn, _onRequestWithoutNetworkInstrumentation, onRequestWithoutNetworkInstrumentation_fn, _onRequest2, onRequest_fn2, _onRequestServedFromCache, onRequestServedFromCache_fn, _handleRequestRedirect, handleRequestRedirect_fn, _emitResponseEvent, emitResponseEvent_fn, _onResponseReceived, onResponseReceived_fn, _onResponseReceivedExtraInfo, onResponseReceivedExtraInfo_fn, _forgetRequest, forgetRequest_fn, _onLoadingFinished, onLoadingFinished_fn, _emitLoadingFinished, emitLoadingFinished_fn, _onLoadingFailed, onLoadingFailed_fn, _emitLoadingFailed, emitLoadingFailed_fn, _page, _networkManager, _timeoutSettings3, _contextIdToContext, _isolatedWorlds, _client9, _frameNavigatedReceived, _deviceRequestPromptManagerMap, _frameTreeHandled, _onClientDisconnect, onClientDisconnect_fn, _onLifecycleEvent, onLifecycleEvent_fn, _onFrameStartedLoading, onFrameStartedLoading_fn, _onFrameStoppedLoading, onFrameStoppedLoading_fn, _handleFrameTree, handleFrameTree_fn, _onFrameAttached, onFrameAttached_fn, _onFrameNavigated, onFrameNavigated_fn, _createIsolatedWorld, createIsolatedWorld_fn, _onFrameNavigatedWithinDocument, onFrameNavigatedWithinDocument_fn, _onFrameDetached2, onFrameDetached_fn2, _onExecutionContextCreated, onExecutionContextCreated_fn, _onExecutionContextDestroyed, onExecutionContextDestroyed_fn, _onExecutionContextsCleared3, onExecutionContextsCleared_fn3, _removeFramesRecursively, removeFramesRecursively_fn, _client10, _pressedKeys, _modifierBit, modifierBit_fn, _keyDescriptionForString, keyDescriptionForString_fn, _client11, _keyboard, __state, _state2, state_get, _transactions, _createTransaction, createTransaction_fn, _withTransaction, withTransaction_fn, _client12, _keyboard2, _client13, _recording, _path, _defaultTimeout, _defaultNavigationTimeout, _world3, _client14, _url4, _closed2, _targetManager, _primaryTargetClient, _primaryTarget, _tabTargetClient, _tabTarget, _keyboard3, _mouse, _touchscreen, _accessibility, _frameManager2, _emulationManager, _tracing, _bindings2, _exposedFunctions, _coverage, _viewport, _workers, _fileChooserDeferreds, _sessionCloseDeferred, _serviceWorkerBypassed, _userDragInterceptionEnabled, _frameManagerHandlers, _networkManagerHandlers, _sessionHandlers, _onActivation, onActivation_fn, _onSecondaryTarget, onSecondaryTarget_fn, _setupPrimaryTargetListeners, setupPrimaryTargetListeners_fn, _onDetachedFromTarget, _onAttachedToTarget2, _initialize, initialize_fn, _onFileChooser, onFileChooser_fn, _onTargetCrashed, onTargetCrashed_fn, _onLogEntryAdded, onLogEntryAdded_fn, _emitMetrics, emitMetrics_fn, _buildMetricsObject, buildMetricsObject_fn, _handleException, handleException_fn, _onConsoleAPI, onConsoleAPI_fn, _onBindingCalled2, onBindingCalled_fn, _addConsoleMessage, addConsoleMessage_fn, _onDialog, onDialog_fn, _go, go_fn, _browserContext, _session, _targetInfo, _targetManager2, _sessionFactory, _defaultViewport, _ignoreHTTPSErrors2, _workerPromise, _connection3, _discoveredTargetsByTargetId2, _attachedTargetsByTargetId, _attachedTargetsBySessionId, _ignoredTargets2, _targetFilterCallback2, _targetFactory2, _attachedToTargetListenersBySession2, _detachedFromTargetListenersBySession, _initializeDeferred2, _targetsIdsForInit2, _waitForInitiallyDiscoveredTargets, _discoveryFilter, _storeExistingTargetsForInit, _setupAttachmentListeners, setupAttachmentListeners_fn, _removeAttachmentListeners, removeAttachmentListeners_fn, _onSessionDetached2, _onTargetCreated2, _onTargetDestroyed2, _onTargetInfoChanged, _onAttachedToTarget3, _finishInitializationIfReady2, finishInitializationIfReady_fn2, _onDetachedFromTarget2, _ignoreHTTPSErrors3, _defaultViewport2, _process, _connection4, _closeCallback, _targetFilterCallback3, _isPageTargetCallback, _defaultContext, _contexts, _targetManager3, _emitDisconnected, _setIsPageTargetCallback, setIsPageTargetCallback_fn, _createTarget, _onAttachedToTarget4, _onDetachedFromTarget3, _onTargetChanged, _onTargetDiscovered, _getVersion, getVersion_fn, _connection5, _browser, _id3;
  var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
  function getDefaultExportFromCjs(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
  }
  function getAugmentedNamespace(n) {
    if (n.__esModule)
      return n;
    var f = n.default;
    if (typeof f == "function") {
      var a = function a2() {
        if (this instanceof a2) {
          return Reflect.construct(f, arguments, this.constructor);
        }
        return f.apply(this, arguments);
      };
      a.prototype = f.prototype;
    } else
      a = {};
    Object.defineProperty(a, "__esModule", { value: true });
    Object.keys(n).forEach(function(k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(a, k, d.get ? d : {
        enumerable: true,
        get: function() {
          return n[k];
        }
      });
    });
    return a;
  }
  var Browser$2 = {};
  var Browser$1 = {};
  var rxjs = {};
  (function(exports3) {
    var s = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
    var j = s((xr) => {
      Object.defineProperty(xr, "__esModule", { value: true });
      xr.isFunction = void 0;
      function xs(r) {
        return typeof r == "function";
      }
      xr.isFunction = xs;
    });
    var H = s((kr) => {
      Object.defineProperty(kr, "__esModule", { value: true });
      kr.createErrorClass = void 0;
      function ks(r) {
        var t = function(n) {
          Error.call(n), n.stack = new Error().stack;
        }, e = r(t);
        return e.prototype = Object.create(Error.prototype), e.prototype.constructor = e, e;
      }
      kr.createErrorClass = ks;
    });
    var Bi = s((Cr) => {
      Object.defineProperty(Cr, "__esModule", { value: true });
      Cr.UnsubscriptionError = void 0;
      var Cs = H();
      Cr.UnsubscriptionError = Cs.createErrorClass(function(r) {
        return function(e) {
          r(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(n, i2) {
            return i2 + 1 + ") " + n.toString();
          }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e;
        };
      });
    });
    var K = s((Rr) => {
      Object.defineProperty(Rr, "__esModule", { value: true });
      Rr.arrRemove = void 0;
      function Rs(r, t) {
        if (r) {
          var e = r.indexOf(t);
          0 <= e && r.splice(e, 1);
        }
      }
      Rr.arrRemove = Rs;
    });
    var C = s((T) => {
      var uo = T && T.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }, oo = T && T.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, ao = T && T.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(T, "__esModule", { value: true });
      T.isSubscription = T.EMPTY_SUBSCRIPTION = T.Subscription = void 0;
      var hr = j(), Di = Bi(), co = K(), Ki = function() {
        function r(t) {
          this.initialTeardown = t, this.closed = false, this._parentage = null, this._finalizers = null;
        }
        return r.prototype.unsubscribe = function() {
          var t, e, n, i2, u;
          if (!this.closed) {
            this.closed = true;
            var o = this._parentage;
            if (o)
              if (this._parentage = null, Array.isArray(o))
                try {
                  for (var c = uo(o), f = c.next(); !f.done; f = c.next()) {
                    var l = f.value;
                    l.remove(this);
                  }
                } catch (_) {
                  t = { error: _ };
                } finally {
                  try {
                    f && !f.done && (e = c.return) && e.call(c);
                  } finally {
                    if (t)
                      throw t.error;
                  }
                }
              else
                o.remove(this);
            var v = this.initialTeardown;
            if (hr.isFunction(v))
              try {
                v();
              } catch (_) {
                u = _ instanceof Di.UnsubscriptionError ? _.errors : [_];
              }
            var d = this._finalizers;
            if (d) {
              this._finalizers = null;
              try {
                for (var p = uo(d), y = p.next(); !y.done; y = p.next()) {
                  var h = y.value;
                  try {
                    lo(h);
                  } catch (_) {
                    u = u ?? [], _ instanceof Di.UnsubscriptionError ? u = ao(ao([], oo(u)), oo(_.errors)) : u.push(_);
                  }
                }
              } catch (_) {
                n = { error: _ };
              } finally {
                try {
                  y && !y.done && (i2 = p.return) && i2.call(p);
                } finally {
                  if (n)
                    throw n.error;
                }
              }
            }
            if (u)
              throw new Di.UnsubscriptionError(u);
          }
        }, r.prototype.add = function(t) {
          var e;
          if (t && t !== this)
            if (this.closed)
              lo(t);
            else {
              if (t instanceof r) {
                if (t.closed || t._hasParent(this))
                  return;
                t._addParent(this);
              }
              (this._finalizers = (e = this._finalizers) !== null && e !== void 0 ? e : []).push(t);
            }
        }, r.prototype._hasParent = function(t) {
          var e = this._parentage;
          return e === t || Array.isArray(e) && e.includes(t);
        }, r.prototype._addParent = function(t) {
          var e = this._parentage;
          this._parentage = Array.isArray(e) ? (e.push(t), e) : e ? [e, t] : t;
        }, r.prototype._removeParent = function(t) {
          var e = this._parentage;
          e === t ? this._parentage = null : Array.isArray(e) && co.arrRemove(e, t);
        }, r.prototype.remove = function(t) {
          var e = this._finalizers;
          e && co.arrRemove(e, t), t instanceof r && t._removeParent(this);
        }, r.EMPTY = function() {
          var t = new r();
          return t.closed = true, t;
        }(), r;
      }();
      T.Subscription = Ki;
      T.EMPTY_SUBSCRIPTION = Ki.EMPTY;
      function Ws(r) {
        return r instanceof Ki || r && "closed" in r && hr.isFunction(r.remove) && hr.isFunction(r.add) && hr.isFunction(r.unsubscribe);
      }
      T.isSubscription = Ws;
      function lo(r) {
        hr.isFunction(r) ? r() : r.unsubscribe();
      }
    });
    var ke = s((Wr) => {
      Object.defineProperty(Wr, "__esModule", { value: true });
      Wr.config = void 0;
      Wr.config = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: false, useDeprecatedNextContext: false };
    });
    var Gi = s((V) => {
      var so = V && V.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, fo = V && V.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(V, "__esModule", { value: true });
      V.timeoutProvider = void 0;
      V.timeoutProvider = { setTimeout: function(r, t) {
        for (var e = [], n = 2; n < arguments.length; n++)
          e[n - 2] = arguments[n];
        var i2 = V.timeoutProvider.delegate;
        return i2 != null && i2.setTimeout ? i2.setTimeout.apply(i2, fo([r, t], so(e))) : setTimeout.apply(void 0, fo([r, t], so(e)));
      }, clearTimeout: function(r) {
        var t = V.timeoutProvider.delegate;
        return ((t == null ? void 0 : t.clearTimeout) || clearTimeout)(r);
      }, delegate: void 0 };
    });
    var Qi = s((Lr) => {
      Object.defineProperty(Lr, "__esModule", { value: true });
      Lr.reportUnhandledError = void 0;
      var Ls = ke(), Ns = Gi();
      function Vs(r) {
        Ns.timeoutProvider.setTimeout(function() {
          var t = Ls.config.onUnhandledError;
          if (t)
            t(r);
          else
            throw r;
        });
      }
      Lr.reportUnhandledError = Vs;
    });
    var E = s((Nr) => {
      Object.defineProperty(Nr, "__esModule", { value: true });
      Nr.noop = void 0;
      function Us() {
      }
      Nr.noop = Us;
    });
    var vo = s((U) => {
      Object.defineProperty(U, "__esModule", { value: true });
      U.createNotification = U.nextNotification = U.errorNotification = U.COMPLETE_NOTIFICATION = void 0;
      U.COMPLETE_NOTIFICATION = function() {
        return Vr("C", void 0, void 0);
      }();
      function zs(r) {
        return Vr("E", void 0, r);
      }
      U.errorNotification = zs;
      function Ys(r) {
        return Vr("N", r, void 0);
      }
      U.nextNotification = Ys;
      function Vr(r, t, e) {
        return { kind: r, value: t, error: e };
      }
      U.createNotification = Vr;
    });
    var Ur = s((Ce) => {
      Object.defineProperty(Ce, "__esModule", { value: true });
      Ce.captureError = Ce.errorContext = void 0;
      var po = ke(), Se = null;
      function Bs(r) {
        if (po.config.useDeprecatedSynchronousErrorHandling) {
          var t = !Se;
          if (t && (Se = { errorThrown: false, error: null }), r(), t) {
            var e = Se, n = e.errorThrown, i2 = e.error;
            if (Se = null, n)
              throw i2;
          }
        } else
          r();
      }
      Ce.errorContext = Bs;
      function Ds(r) {
        po.config.useDeprecatedSynchronousErrorHandling && Se && (Se.errorThrown = true, Se.error = r);
      }
      Ce.captureError = Ds;
    });
    var Re = s((W) => {
      var ho = W && W.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(W, "__esModule", { value: true });
      W.EMPTY_OBSERVER = W.SafeSubscriber = W.Subscriber = void 0;
      var Ks = j(), bo = C(), Hi = ke(), Gs = Qi(), _o = E(), Ji = vo(), Qs = Gi(), Js = Ur(), yo = function(r) {
        ho(t, r);
        function t(e) {
          var n = r.call(this) || this;
          return n.isStopped = false, e ? (n.destination = e, bo.isSubscription(e) && e.add(n)) : n.destination = W.EMPTY_OBSERVER, n;
        }
        return t.create = function(e, n, i2) {
          return new mo(e, n, i2);
        }, t.prototype.next = function(e) {
          this.isStopped ? $i(Ji.nextNotification(e), this) : this._next(e);
        }, t.prototype.error = function(e) {
          this.isStopped ? $i(Ji.errorNotification(e), this) : (this.isStopped = true, this._error(e));
        }, t.prototype.complete = function() {
          this.isStopped ? $i(Ji.COMPLETE_NOTIFICATION, this) : (this.isStopped = true, this._complete());
        }, t.prototype.unsubscribe = function() {
          this.closed || (this.isStopped = true, r.prototype.unsubscribe.call(this), this.destination = null);
        }, t.prototype._next = function(e) {
          this.destination.next(e);
        }, t.prototype._error = function(e) {
          try {
            this.destination.error(e);
          } finally {
            this.unsubscribe();
          }
        }, t.prototype._complete = function() {
          try {
            this.destination.complete();
          } finally {
            this.unsubscribe();
          }
        }, t;
      }(bo.Subscription);
      W.Subscriber = yo;
      var Zs = Function.prototype.bind;
      function Zi(r, t) {
        return Zs.call(r, t);
      }
      var $s = function() {
        function r(t) {
          this.partialObserver = t;
        }
        return r.prototype.next = function(t) {
          var e = this.partialObserver;
          if (e.next)
            try {
              e.next(t);
            } catch (n) {
              zr(n);
            }
        }, r.prototype.error = function(t) {
          var e = this.partialObserver;
          if (e.error)
            try {
              e.error(t);
            } catch (n) {
              zr(n);
            }
          else
            zr(t);
        }, r.prototype.complete = function() {
          var t = this.partialObserver;
          if (t.complete)
            try {
              t.complete();
            } catch (e) {
              zr(e);
            }
        }, r;
      }(), mo = function(r) {
        ho(t, r);
        function t(e, n, i2) {
          var u = r.call(this) || this, o;
          if (Ks.isFunction(e) || !e)
            o = { next: e ?? void 0, error: n ?? void 0, complete: i2 ?? void 0 };
          else {
            var c;
            u && Hi.config.useDeprecatedNextContext ? (c = Object.create(e), c.unsubscribe = function() {
              return u.unsubscribe();
            }, o = { next: e.next && Zi(e.next, c), error: e.error && Zi(e.error, c), complete: e.complete && Zi(e.complete, c) }) : o = e;
          }
          return u.destination = new $s(o), u;
        }
        return t;
      }(yo);
      W.SafeSubscriber = mo;
      function zr(r) {
        Hi.config.useDeprecatedSynchronousErrorHandling ? Js.captureError(r) : Gs.reportUnhandledError(r);
      }
      function Hs(r) {
        throw r;
      }
      function $i(r, t) {
        var e = Hi.config.onStoppedNotification;
        e && Qs.timeoutProvider.setTimeout(function() {
          return e(r, t);
        });
      }
      W.EMPTY_OBSERVER = { closed: true, next: _o.noop, error: Hs, complete: _o.noop };
    });
    var yr = s((Yr) => {
      Object.defineProperty(Yr, "__esModule", { value: true });
      Yr.observable = void 0;
      Yr.observable = function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable";
      }();
    });
    var M = s((Br) => {
      Object.defineProperty(Br, "__esModule", { value: true });
      Br.identity = void 0;
      function Xs(r) {
        return r;
      }
      Br.identity = Xs;
    });
    var mr = s((We) => {
      Object.defineProperty(We, "__esModule", { value: true });
      We.pipeFromArray = We.pipe = void 0;
      var ef = M();
      function rf() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return Oo(r);
      }
      We.pipe = rf;
      function Oo(r) {
        return r.length === 0 ? ef.identity : r.length === 1 ? r[0] : function(e) {
          return r.reduce(function(n, i2) {
            return i2(n);
          }, e);
        };
      }
      We.pipeFromArray = Oo;
    });
    var P = s((Dr) => {
      Object.defineProperty(Dr, "__esModule", { value: true });
      Dr.Observable = void 0;
      var eu = Re(), tf = C(), nf = yr(), uf = mr(), of = ke(), Xi = j(), af = Ur(), cf = function() {
        function r(t) {
          t && (this._subscribe = t);
        }
        return r.prototype.lift = function(t) {
          var e = new r();
          return e.source = this, e.operator = t, e;
        }, r.prototype.subscribe = function(t, e, n) {
          var i2 = this, u = sf(t) ? t : new eu.SafeSubscriber(t, e, n);
          return af.errorContext(function() {
            var o = i2, c = o.operator, f = o.source;
            u.add(c ? c.call(u, f) : f ? i2._subscribe(u) : i2._trySubscribe(u));
          }), u;
        }, r.prototype._trySubscribe = function(t) {
          try {
            return this._subscribe(t);
          } catch (e) {
            t.error(e);
          }
        }, r.prototype.forEach = function(t, e) {
          var n = this;
          return e = go(e), new e(function(i2, u) {
            var o = new eu.SafeSubscriber({ next: function(c) {
              try {
                t(c);
              } catch (f) {
                u(f), o.unsubscribe();
              }
            }, error: u, complete: i2 });
            n.subscribe(o);
          });
        }, r.prototype._subscribe = function(t) {
          var e;
          return (e = this.source) === null || e === void 0 ? void 0 : e.subscribe(t);
        }, r.prototype[nf.observable] = function() {
          return this;
        }, r.prototype.pipe = function() {
          for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
          return uf.pipeFromArray(t)(this);
        }, r.prototype.toPromise = function(t) {
          var e = this;
          return t = go(t), new t(function(n, i2) {
            var u;
            e.subscribe(function(o) {
              return u = o;
            }, function(o) {
              return i2(o);
            }, function() {
              return n(u);
            });
          });
        }, r.create = function(t) {
          return new r(t);
        }, r;
      }();
      Dr.Observable = cf;
      function go(r) {
        var t;
        return (t = r ?? of.config.Promise) !== null && t !== void 0 ? t : Promise;
      }
      function lf(r) {
        return r && Xi.isFunction(r.next) && Xi.isFunction(r.error) && Xi.isFunction(r.complete);
      }
      function sf(r) {
        return r && r instanceof eu.Subscriber || lf(r) && tf.isSubscription(r);
      }
    });
    var b = s((Le) => {
      Object.defineProperty(Le, "__esModule", { value: true });
      Le.operate = Le.hasLift = void 0;
      var ff = j();
      function qo(r) {
        return ff.isFunction(r == null ? void 0 : r.lift);
      }
      Le.hasLift = qo;
      function vf(r) {
        return function(t) {
          if (qo(t))
            return t.lift(function(e) {
              try {
                return r(e, this);
              } catch (n) {
                this.error(n);
              }
            });
          throw new TypeError("Unable to lift unknown Observable type");
        };
      }
      Le.operate = vf;
    });
    var O = s((X) => {
      var df = X && X.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(X, "__esModule", { value: true });
      X.OperatorSubscriber = X.createOperatorSubscriber = void 0;
      var pf = Re();
      function bf(r, t, e, n, i2) {
        return new So(r, t, e, n, i2);
      }
      X.createOperatorSubscriber = bf;
      var So = function(r) {
        df(t, r);
        function t(e, n, i2, u, o, c) {
          var f = r.call(this, e) || this;
          return f.onFinalize = o, f.shouldUnsubscribe = c, f._next = n ? function(l) {
            try {
              n(l);
            } catch (v) {
              e.error(v);
            }
          } : r.prototype._next, f._error = u ? function(l) {
            try {
              u(l);
            } catch (v) {
              e.error(v);
            } finally {
              this.unsubscribe();
            }
          } : r.prototype._error, f._complete = i2 ? function() {
            try {
              i2();
            } catch (l) {
              e.error(l);
            } finally {
              this.unsubscribe();
            }
          } : r.prototype._complete, f;
        }
        return t.prototype.unsubscribe = function() {
          var e;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var n = this.closed;
            r.prototype.unsubscribe.call(this), !n && ((e = this.onFinalize) === null || e === void 0 || e.call(this));
          }
        }, t;
      }(pf.Subscriber);
      X.OperatorSubscriber = So;
    });
    var ru = s((Kr) => {
      Object.defineProperty(Kr, "__esModule", { value: true });
      Kr.refCount = void 0;
      var _f = b(), hf = O();
      function yf() {
        return _f.operate(function(r, t) {
          var e = null;
          r._refCount++;
          var n = hf.createOperatorSubscriber(t, void 0, void 0, void 0, function() {
            if (!r || r._refCount <= 0 || 0 < --r._refCount) {
              e = null;
              return;
            }
            var i2 = r._connection, u = e;
            e = null, i2 && (!u || i2 === u) && i2.unsubscribe(), t.unsubscribe();
          });
          r.subscribe(n), n.closed || (e = r.connect());
        });
      }
      Kr.refCount = yf;
    });
    var Or = s((Ne) => {
      var mf = Ne && Ne.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Ne, "__esModule", { value: true });
      Ne.ConnectableObservable = void 0;
      var Of = P(), jo = C(), gf = ru(), qf = O(), Sf = b(), jf = function(r) {
        mf(t, r);
        function t(e, n) {
          var i2 = r.call(this) || this;
          return i2.source = e, i2.subjectFactory = n, i2._subject = null, i2._refCount = 0, i2._connection = null, Sf.hasLift(e) && (i2.lift = e.lift), i2;
        }
        return t.prototype._subscribe = function(e) {
          return this.getSubject().subscribe(e);
        }, t.prototype.getSubject = function() {
          var e = this._subject;
          return (!e || e.isStopped) && (this._subject = this.subjectFactory()), this._subject;
        }, t.prototype._teardown = function() {
          this._refCount = 0;
          var e = this._connection;
          this._subject = this._connection = null, e == null || e.unsubscribe();
        }, t.prototype.connect = function() {
          var e = this, n = this._connection;
          if (!n) {
            n = this._connection = new jo.Subscription();
            var i2 = this.getSubject();
            n.add(this.source.subscribe(qf.createOperatorSubscriber(i2, void 0, function() {
              e._teardown(), i2.complete();
            }, function(u) {
              e._teardown(), i2.error(u);
            }, function() {
              return e._teardown();
            }))), n.closed && (this._connection = null, n = jo.Subscription.EMPTY);
          }
          return n;
        }, t.prototype.refCount = function() {
          return gf.refCount()(this);
        }, t;
      }(Of.Observable);
      Ne.ConnectableObservable = jf;
    });
    var Po = s((gr) => {
      Object.defineProperty(gr, "__esModule", { value: true });
      gr.performanceTimestampProvider = void 0;
      gr.performanceTimestampProvider = { now: function() {
        return (gr.performanceTimestampProvider.delegate || performance).now();
      }, delegate: void 0 };
    });
    var tu = s((L) => {
      var wo = L && L.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Ao = L && L.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(L, "__esModule", { value: true });
      L.animationFrameProvider = void 0;
      var Pf = C();
      L.animationFrameProvider = { schedule: function(r) {
        var t = requestAnimationFrame, e = cancelAnimationFrame, n = L.animationFrameProvider.delegate;
        n && (t = n.requestAnimationFrame, e = n.cancelAnimationFrame);
        var i2 = t(function(u) {
          e = void 0, r(u);
        });
        return new Pf.Subscription(function() {
          return e == null ? void 0 : e(i2);
        });
      }, requestAnimationFrame: function() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = L.animationFrameProvider.delegate;
        return ((e == null ? void 0 : e.requestAnimationFrame) || requestAnimationFrame).apply(void 0, Ao([], wo(r)));
      }, cancelAnimationFrame: function() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = L.animationFrameProvider.delegate;
        return ((e == null ? void 0 : e.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, Ao([], wo(r)));
      }, delegate: void 0 };
    });
    var Fo = s((Gr) => {
      Object.defineProperty(Gr, "__esModule", { value: true });
      Gr.animationFrames = void 0;
      var wf = P(), Af = Po(), Eo = tu();
      function Ef(r) {
        return r ? Mo(r) : Mf;
      }
      Gr.animationFrames = Ef;
      function Mo(r) {
        return new wf.Observable(function(t) {
          var e = r || Af.performanceTimestampProvider, n = e.now(), i2 = 0, u = function() {
            t.closed || (i2 = Eo.animationFrameProvider.requestAnimationFrame(function(o) {
              i2 = 0;
              var c = e.now();
              t.next({ timestamp: r ? c : o, elapsed: c - n }), u();
            }));
          };
          return u(), function() {
            i2 && Eo.animationFrameProvider.cancelAnimationFrame(i2);
          };
        });
      }
      var Mf = Mo();
    });
    var nu = s((Qr) => {
      Object.defineProperty(Qr, "__esModule", { value: true });
      Qr.ObjectUnsubscribedError = void 0;
      var Ff = H();
      Qr.ObjectUnsubscribedError = Ff.createErrorClass(function(r) {
        return function() {
          r(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
        };
      });
    });
    var F = s((z) => {
      var To = z && z.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }(), If = z && z.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(z, "__esModule", { value: true });
      z.AnonymousSubject = z.Subject = void 0;
      var Io = P(), uu = C(), Tf = nu(), xf = K(), iu = Ur(), xo = function(r) {
        To(t, r);
        function t() {
          var e = r.call(this) || this;
          return e.closed = false, e.currentObservers = null, e.observers = [], e.isStopped = false, e.hasError = false, e.thrownError = null, e;
        }
        return t.prototype.lift = function(e) {
          var n = new ou(this, this);
          return n.operator = e, n;
        }, t.prototype._throwIfClosed = function() {
          if (this.closed)
            throw new Tf.ObjectUnsubscribedError();
        }, t.prototype.next = function(e) {
          var n = this;
          iu.errorContext(function() {
            var i2, u;
            if (n._throwIfClosed(), !n.isStopped) {
              n.currentObservers || (n.currentObservers = Array.from(n.observers));
              try {
                for (var o = If(n.currentObservers), c = o.next(); !c.done; c = o.next()) {
                  var f = c.value;
                  f.next(e);
                }
              } catch (l) {
                i2 = { error: l };
              } finally {
                try {
                  c && !c.done && (u = o.return) && u.call(o);
                } finally {
                  if (i2)
                    throw i2.error;
                }
              }
            }
          });
        }, t.prototype.error = function(e) {
          var n = this;
          iu.errorContext(function() {
            if (n._throwIfClosed(), !n.isStopped) {
              n.hasError = n.isStopped = true, n.thrownError = e;
              for (var i2 = n.observers; i2.length; )
                i2.shift().error(e);
            }
          });
        }, t.prototype.complete = function() {
          var e = this;
          iu.errorContext(function() {
            if (e._throwIfClosed(), !e.isStopped) {
              e.isStopped = true;
              for (var n = e.observers; n.length; )
                n.shift().complete();
            }
          });
        }, t.prototype.unsubscribe = function() {
          this.isStopped = this.closed = true, this.observers = this.currentObservers = null;
        }, Object.defineProperty(t.prototype, "observed", { get: function() {
          var e;
          return ((e = this.observers) === null || e === void 0 ? void 0 : e.length) > 0;
        }, enumerable: false, configurable: true }), t.prototype._trySubscribe = function(e) {
          return this._throwIfClosed(), r.prototype._trySubscribe.call(this, e);
        }, t.prototype._subscribe = function(e) {
          return this._throwIfClosed(), this._checkFinalizedStatuses(e), this._innerSubscribe(e);
        }, t.prototype._innerSubscribe = function(e) {
          var n = this, i2 = this, u = i2.hasError, o = i2.isStopped, c = i2.observers;
          return u || o ? uu.EMPTY_SUBSCRIPTION : (this.currentObservers = null, c.push(e), new uu.Subscription(function() {
            n.currentObservers = null, xf.arrRemove(c, e);
          }));
        }, t.prototype._checkFinalizedStatuses = function(e) {
          var n = this, i2 = n.hasError, u = n.thrownError, o = n.isStopped;
          i2 ? e.error(u) : o && e.complete();
        }, t.prototype.asObservable = function() {
          var e = new Io.Observable();
          return e.source = this, e;
        }, t.create = function(e, n) {
          return new ou(e, n);
        }, t;
      }(Io.Observable);
      z.Subject = xo;
      var ou = function(r) {
        To(t, r);
        function t(e, n) {
          var i2 = r.call(this) || this;
          return i2.destination = e, i2.source = n, i2;
        }
        return t.prototype.next = function(e) {
          var n, i2;
          (i2 = (n = this.destination) === null || n === void 0 ? void 0 : n.next) === null || i2 === void 0 || i2.call(n, e);
        }, t.prototype.error = function(e) {
          var n, i2;
          (i2 = (n = this.destination) === null || n === void 0 ? void 0 : n.error) === null || i2 === void 0 || i2.call(n, e);
        }, t.prototype.complete = function() {
          var e, n;
          (n = (e = this.destination) === null || e === void 0 ? void 0 : e.complete) === null || n === void 0 || n.call(e);
        }, t.prototype._subscribe = function(e) {
          var n, i2;
          return (i2 = (n = this.source) === null || n === void 0 ? void 0 : n.subscribe(e)) !== null && i2 !== void 0 ? i2 : uu.EMPTY_SUBSCRIPTION;
        }, t;
      }(xo);
      z.AnonymousSubject = ou;
    });
    var au = s((Ve) => {
      var kf = Ve && Ve.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Ve, "__esModule", { value: true });
      Ve.BehaviorSubject = void 0;
      var Cf = F(), Rf = function(r) {
        kf(t, r);
        function t(e) {
          var n = r.call(this) || this;
          return n._value = e, n;
        }
        return Object.defineProperty(t.prototype, "value", { get: function() {
          return this.getValue();
        }, enumerable: false, configurable: true }), t.prototype._subscribe = function(e) {
          var n = r.prototype._subscribe.call(this, e);
          return !n.closed && e.next(this._value), n;
        }, t.prototype.getValue = function() {
          var e = this, n = e.hasError, i2 = e.thrownError, u = e._value;
          if (n)
            throw i2;
          return this._throwIfClosed(), u;
        }, t.prototype.next = function(e) {
          r.prototype.next.call(this, this._value = e);
        }, t;
      }(Cf.Subject);
      Ve.BehaviorSubject = Rf;
    });
    var Jr = s((qr) => {
      Object.defineProperty(qr, "__esModule", { value: true });
      qr.dateTimestampProvider = void 0;
      qr.dateTimestampProvider = { now: function() {
        return (qr.dateTimestampProvider.delegate || Date).now();
      }, delegate: void 0 };
    });
    var Zr = s((Ue) => {
      var Wf = Ue && Ue.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Ue, "__esModule", { value: true });
      Ue.ReplaySubject = void 0;
      var Lf = F(), Nf = Jr(), Vf = function(r) {
        Wf(t, r);
        function t(e, n, i2) {
          e === void 0 && (e = 1 / 0), n === void 0 && (n = 1 / 0), i2 === void 0 && (i2 = Nf.dateTimestampProvider);
          var u = r.call(this) || this;
          return u._bufferSize = e, u._windowTime = n, u._timestampProvider = i2, u._buffer = [], u._infiniteTimeWindow = true, u._infiniteTimeWindow = n === 1 / 0, u._bufferSize = Math.max(1, e), u._windowTime = Math.max(1, n), u;
        }
        return t.prototype.next = function(e) {
          var n = this, i2 = n.isStopped, u = n._buffer, o = n._infiniteTimeWindow, c = n._timestampProvider, f = n._windowTime;
          i2 || (u.push(e), !o && u.push(c.now() + f)), this._trimBuffer(), r.prototype.next.call(this, e);
        }, t.prototype._subscribe = function(e) {
          this._throwIfClosed(), this._trimBuffer();
          for (var n = this._innerSubscribe(e), i2 = this, u = i2._infiniteTimeWindow, o = i2._buffer, c = o.slice(), f = 0; f < c.length && !e.closed; f += u ? 1 : 2)
            e.next(c[f]);
          return this._checkFinalizedStatuses(e), n;
        }, t.prototype._trimBuffer = function() {
          var e = this, n = e._bufferSize, i2 = e._timestampProvider, u = e._buffer, o = e._infiniteTimeWindow, c = (o ? 1 : 2) * n;
          if (n < 1 / 0 && c < u.length && u.splice(0, u.length - c), !o) {
            for (var f = i2.now(), l = 0, v = 1; v < u.length && u[v] <= f; v += 2)
              l = v;
            l && u.splice(0, l + 1);
          }
        }, t;
      }(Lf.Subject);
      Ue.ReplaySubject = Vf;
    });
    var $r = s((ze) => {
      var Uf = ze && ze.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(ze, "__esModule", { value: true });
      ze.AsyncSubject = void 0;
      var zf = F(), Yf = function(r) {
        Uf(t, r);
        function t() {
          var e = r !== null && r.apply(this, arguments) || this;
          return e._value = null, e._hasValue = false, e._isComplete = false, e;
        }
        return t.prototype._checkFinalizedStatuses = function(e) {
          var n = this, i2 = n.hasError, u = n._hasValue, o = n._value, c = n.thrownError, f = n.isStopped, l = n._isComplete;
          i2 ? e.error(c) : (f || l) && (u && e.next(o), e.complete());
        }, t.prototype.next = function(e) {
          this.isStopped || (this._value = e, this._hasValue = true);
        }, t.prototype.complete = function() {
          var e = this, n = e._hasValue, i2 = e._value, u = e._isComplete;
          u || (this._isComplete = true, n && r.prototype.next.call(this, i2), r.prototype.complete.call(this));
        }, t;
      }(zf.Subject);
      ze.AsyncSubject = Yf;
    });
    var ko = s((Ye) => {
      var Bf = Ye && Ye.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Ye, "__esModule", { value: true });
      Ye.Action = void 0;
      var Df = C(), Kf = function(r) {
        Bf(t, r);
        function t(e, n) {
          return r.call(this) || this;
        }
        return t.prototype.schedule = function(e, n) {
          return this;
        }, t;
      }(Df.Subscription);
      Ye.Action = Kf;
    });
    var Wo = s((Y) => {
      var Co = Y && Y.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Ro = Y && Y.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(Y, "__esModule", { value: true });
      Y.intervalProvider = void 0;
      Y.intervalProvider = { setInterval: function(r, t) {
        for (var e = [], n = 2; n < arguments.length; n++)
          e[n - 2] = arguments[n];
        var i2 = Y.intervalProvider.delegate;
        return i2 != null && i2.setInterval ? i2.setInterval.apply(i2, Ro([r, t], Co(e))) : setInterval.apply(void 0, Ro([r, t], Co(e)));
      }, clearInterval: function(r) {
        var t = Y.intervalProvider.delegate;
        return ((t == null ? void 0 : t.clearInterval) || clearInterval)(r);
      }, delegate: void 0 };
    });
    var De = s((Be) => {
      var Gf = Be && Be.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Be, "__esModule", { value: true });
      Be.AsyncAction = void 0;
      var Qf = ko(), Lo = Wo(), Jf = K(), Zf = function(r) {
        Gf(t, r);
        function t(e, n) {
          var i2 = r.call(this, e, n) || this;
          return i2.scheduler = e, i2.work = n, i2.pending = false, i2;
        }
        return t.prototype.schedule = function(e, n) {
          var i2;
          if (n === void 0 && (n = 0), this.closed)
            return this;
          this.state = e;
          var u = this.id, o = this.scheduler;
          return u != null && (this.id = this.recycleAsyncId(o, u, n)), this.pending = true, this.delay = n, this.id = (i2 = this.id) !== null && i2 !== void 0 ? i2 : this.requestAsyncId(o, this.id, n), this;
        }, t.prototype.requestAsyncId = function(e, n, i2) {
          return i2 === void 0 && (i2 = 0), Lo.intervalProvider.setInterval(e.flush.bind(e, this), i2);
        }, t.prototype.recycleAsyncId = function(e, n, i2) {
          if (i2 === void 0 && (i2 = 0), i2 != null && this.delay === i2 && this.pending === false)
            return n;
          n != null && Lo.intervalProvider.clearInterval(n);
        }, t.prototype.execute = function(e, n) {
          if (this.closed)
            return new Error("executing a cancelled action");
          this.pending = false;
          var i2 = this._execute(e, n);
          if (i2)
            return i2;
          this.pending === false && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }, t.prototype._execute = function(e, n) {
          var i2 = false, u;
          try {
            this.work(e);
          } catch (o) {
            i2 = true, u = o || new Error("Scheduled action threw falsy error");
          }
          if (i2)
            return this.unsubscribe(), u;
        }, t.prototype.unsubscribe = function() {
          if (!this.closed) {
            var e = this, n = e.id, i2 = e.scheduler, u = i2.actions;
            this.work = this.state = this.scheduler = null, this.pending = false, Jf.arrRemove(u, this), n != null && (this.id = this.recycleAsyncId(i2, n, null)), this.delay = null, r.prototype.unsubscribe.call(this);
          }
        }, t;
      }(Qf.Action);
      Be.AsyncAction = Zf;
    });
    var Vo = s((Ke) => {
      Object.defineProperty(Ke, "__esModule", { value: true });
      Ke.TestTools = Ke.Immediate = void 0;
      var $f = 1, cu, Hr = {};
      function No(r) {
        return r in Hr ? (delete Hr[r], true) : false;
      }
      Ke.Immediate = { setImmediate: function(r) {
        var t = $f++;
        return Hr[t] = true, cu || (cu = Promise.resolve()), cu.then(function() {
          return No(t) && r();
        }), t;
      }, clearImmediate: function(r) {
        No(r);
      } };
      Ke.TestTools = { pending: function() {
        return Object.keys(Hr).length;
      } };
    });
    var zo = s((B) => {
      var Hf = B && B.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Xf = B && B.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(B, "__esModule", { value: true });
      B.immediateProvider = void 0;
      var Uo = Vo(), ev = Uo.Immediate.setImmediate, rv = Uo.Immediate.clearImmediate;
      B.immediateProvider = { setImmediate: function() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = B.immediateProvider.delegate;
        return ((e == null ? void 0 : e.setImmediate) || ev).apply(void 0, Xf([], Hf(r)));
      }, clearImmediate: function(r) {
        var t = B.immediateProvider.delegate;
        return ((t == null ? void 0 : t.clearImmediate) || rv)(r);
      }, delegate: void 0 };
    });
    var Bo = s((Ge) => {
      var tv = Ge && Ge.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Ge, "__esModule", { value: true });
      Ge.AsapAction = void 0;
      var nv = De(), Yo = zo(), iv = function(r) {
        tv(t, r);
        function t(e, n) {
          var i2 = r.call(this, e, n) || this;
          return i2.scheduler = e, i2.work = n, i2;
        }
        return t.prototype.requestAsyncId = function(e, n, i2) {
          return i2 === void 0 && (i2 = 0), i2 !== null && i2 > 0 ? r.prototype.requestAsyncId.call(this, e, n, i2) : (e.actions.push(this), e._scheduled || (e._scheduled = Yo.immediateProvider.setImmediate(e.flush.bind(e, void 0))));
        }, t.prototype.recycleAsyncId = function(e, n, i2) {
          var u;
          if (i2 === void 0 && (i2 = 0), i2 != null ? i2 > 0 : this.delay > 0)
            return r.prototype.recycleAsyncId.call(this, e, n, i2);
          var o = e.actions;
          n != null && ((u = o[o.length - 1]) === null || u === void 0 ? void 0 : u.id) !== n && (Yo.immediateProvider.clearImmediate(n), e._scheduled === n && (e._scheduled = void 0));
        }, t;
      }(nv.AsyncAction);
      Ge.AsapAction = iv;
    });
    var lu = s((Xr) => {
      Object.defineProperty(Xr, "__esModule", { value: true });
      Xr.Scheduler = void 0;
      var uv = Jr(), ov = function() {
        function r(t, e) {
          e === void 0 && (e = r.now), this.schedulerActionCtor = t, this.now = e;
        }
        return r.prototype.schedule = function(t, e, n) {
          return e === void 0 && (e = 0), new this.schedulerActionCtor(this, t).schedule(n, e);
        }, r.now = uv.dateTimestampProvider.now, r;
      }();
      Xr.Scheduler = ov;
    });
    var Je = s((Qe) => {
      var av = Qe && Qe.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Qe, "__esModule", { value: true });
      Qe.AsyncScheduler = void 0;
      var Do = lu(), cv = function(r) {
        av(t, r);
        function t(e, n) {
          n === void 0 && (n = Do.Scheduler.now);
          var i2 = r.call(this, e, n) || this;
          return i2.actions = [], i2._active = false, i2;
        }
        return t.prototype.flush = function(e) {
          var n = this.actions;
          if (this._active) {
            n.push(e);
            return;
          }
          var i2;
          this._active = true;
          do
            if (i2 = e.execute(e.state, e.delay))
              break;
          while (e = n.shift());
          if (this._active = false, i2) {
            for (; e = n.shift(); )
              e.unsubscribe();
            throw i2;
          }
        }, t;
      }(Do.Scheduler);
      Qe.AsyncScheduler = cv;
    });
    var Ko = s((Ze) => {
      var lv = Ze && Ze.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Ze, "__esModule", { value: true });
      Ze.AsapScheduler = void 0;
      var sv = Je(), fv = function(r) {
        lv(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.flush = function(e) {
          this._active = true;
          var n = this._scheduled;
          this._scheduled = void 0;
          var i2 = this.actions, u;
          e = e || i2.shift();
          do
            if (u = e.execute(e.state, e.delay))
              break;
          while ((e = i2[0]) && e.id === n && i2.shift());
          if (this._active = false, u) {
            for (; (e = i2[0]) && e.id === n && i2.shift(); )
              e.unsubscribe();
            throw u;
          }
        }, t;
      }(sv.AsyncScheduler);
      Ze.AsapScheduler = fv;
    });
    var Go = s((je) => {
      Object.defineProperty(je, "__esModule", { value: true });
      je.asap = je.asapScheduler = void 0;
      var vv = Bo(), dv = Ko();
      je.asapScheduler = new dv.AsapScheduler(vv.AsapAction);
      je.asap = je.asapScheduler;
    });
    var x = s((Pe) => {
      Object.defineProperty(Pe, "__esModule", { value: true });
      Pe.async = Pe.asyncScheduler = void 0;
      var pv = De(), bv = Je();
      Pe.asyncScheduler = new bv.AsyncScheduler(pv.AsyncAction);
      Pe.async = Pe.asyncScheduler;
    });
    var Qo = s(($e) => {
      var _v = $e && $e.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty($e, "__esModule", { value: true });
      $e.QueueAction = void 0;
      var hv = De(), yv = function(r) {
        _v(t, r);
        function t(e, n) {
          var i2 = r.call(this, e, n) || this;
          return i2.scheduler = e, i2.work = n, i2;
        }
        return t.prototype.schedule = function(e, n) {
          return n === void 0 && (n = 0), n > 0 ? r.prototype.schedule.call(this, e, n) : (this.delay = n, this.state = e, this.scheduler.flush(this), this);
        }, t.prototype.execute = function(e, n) {
          return n > 0 || this.closed ? r.prototype.execute.call(this, e, n) : this._execute(e, n);
        }, t.prototype.requestAsyncId = function(e, n, i2) {
          return i2 === void 0 && (i2 = 0), i2 != null && i2 > 0 || i2 == null && this.delay > 0 ? r.prototype.requestAsyncId.call(this, e, n, i2) : (e.flush(this), 0);
        }, t;
      }(hv.AsyncAction);
      $e.QueueAction = yv;
    });
    var Jo = s((He) => {
      var mv = He && He.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(He, "__esModule", { value: true });
      He.QueueScheduler = void 0;
      var Ov = Je(), gv = function(r) {
        mv(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t;
      }(Ov.AsyncScheduler);
      He.QueueScheduler = gv;
    });
    var Zo = s((we) => {
      Object.defineProperty(we, "__esModule", { value: true });
      we.queue = we.queueScheduler = void 0;
      var qv = Qo(), Sv = Jo();
      we.queueScheduler = new Sv.QueueScheduler(qv.QueueAction);
      we.queue = we.queueScheduler;
    });
    var Ho = s((Xe) => {
      var jv = Xe && Xe.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(Xe, "__esModule", { value: true });
      Xe.AnimationFrameAction = void 0;
      var Pv = De(), $o = tu(), wv = function(r) {
        jv(t, r);
        function t(e, n) {
          var i2 = r.call(this, e, n) || this;
          return i2.scheduler = e, i2.work = n, i2;
        }
        return t.prototype.requestAsyncId = function(e, n, i2) {
          return i2 === void 0 && (i2 = 0), i2 !== null && i2 > 0 ? r.prototype.requestAsyncId.call(this, e, n, i2) : (e.actions.push(this), e._scheduled || (e._scheduled = $o.animationFrameProvider.requestAnimationFrame(function() {
            return e.flush(void 0);
          })));
        }, t.prototype.recycleAsyncId = function(e, n, i2) {
          var u;
          if (i2 === void 0 && (i2 = 0), i2 != null ? i2 > 0 : this.delay > 0)
            return r.prototype.recycleAsyncId.call(this, e, n, i2);
          var o = e.actions;
          n != null && ((u = o[o.length - 1]) === null || u === void 0 ? void 0 : u.id) !== n && ($o.animationFrameProvider.cancelAnimationFrame(n), e._scheduled = void 0);
        }, t;
      }(Pv.AsyncAction);
      Xe.AnimationFrameAction = wv;
    });
    var Xo = s((er) => {
      var Av = er && er.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(er, "__esModule", { value: true });
      er.AnimationFrameScheduler = void 0;
      var Ev = Je(), Mv = function(r) {
        Av(t, r);
        function t() {
          return r !== null && r.apply(this, arguments) || this;
        }
        return t.prototype.flush = function(e) {
          this._active = true;
          var n = this._scheduled;
          this._scheduled = void 0;
          var i2 = this.actions, u;
          e = e || i2.shift();
          do
            if (u = e.execute(e.state, e.delay))
              break;
          while ((e = i2[0]) && e.id === n && i2.shift());
          if (this._active = false, u) {
            for (; (e = i2[0]) && e.id === n && i2.shift(); )
              e.unsubscribe();
            throw u;
          }
        }, t;
      }(Ev.AsyncScheduler);
      er.AnimationFrameScheduler = Mv;
    });
    var ea = s((Ae) => {
      Object.defineProperty(Ae, "__esModule", { value: true });
      Ae.animationFrame = Ae.animationFrameScheduler = void 0;
      var Fv = Ho(), Iv = Xo();
      Ae.animationFrameScheduler = new Iv.AnimationFrameScheduler(Fv.AnimationFrameAction);
      Ae.animationFrame = Ae.animationFrameScheduler;
    });
    var na = s((ee) => {
      var ra = ee && ee.__extends || /* @__PURE__ */ function() {
        var r = function(t, e) {
          return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i2) {
            n.__proto__ = i2;
          } || function(n, i2) {
            for (var u in i2)
              Object.prototype.hasOwnProperty.call(i2, u) && (n[u] = i2[u]);
          }, r(t, e);
        };
        return function(t, e) {
          if (typeof e != "function" && e !== null)
            throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
          r(t, e);
          function n() {
            this.constructor = t;
          }
          t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
        };
      }();
      Object.defineProperty(ee, "__esModule", { value: true });
      ee.VirtualAction = ee.VirtualTimeScheduler = void 0;
      var Tv = De(), xv = C(), kv = Je(), Cv = function(r) {
        ra(t, r);
        function t(e, n) {
          e === void 0 && (e = ta), n === void 0 && (n = 1 / 0);
          var i2 = r.call(this, e, function() {
            return i2.frame;
          }) || this;
          return i2.maxFrames = n, i2.frame = 0, i2.index = -1, i2;
        }
        return t.prototype.flush = function() {
          for (var e = this, n = e.actions, i2 = e.maxFrames, u, o; (o = n[0]) && o.delay <= i2 && (n.shift(), this.frame = o.delay, !(u = o.execute(o.state, o.delay))); )
            ;
          if (u) {
            for (; o = n.shift(); )
              o.unsubscribe();
            throw u;
          }
        }, t.frameTimeFactor = 10, t;
      }(kv.AsyncScheduler);
      ee.VirtualTimeScheduler = Cv;
      var ta = function(r) {
        ra(t, r);
        function t(e, n, i2) {
          i2 === void 0 && (i2 = e.index += 1);
          var u = r.call(this, e, n) || this;
          return u.scheduler = e, u.work = n, u.index = i2, u.active = true, u.index = e.index = i2, u;
        }
        return t.prototype.schedule = function(e, n) {
          if (n === void 0 && (n = 0), Number.isFinite(n)) {
            if (!this.id)
              return r.prototype.schedule.call(this, e, n);
            this.active = false;
            var i2 = new t(this.scheduler, this.work);
            return this.add(i2), i2.schedule(e, n);
          } else
            return xv.Subscription.EMPTY;
        }, t.prototype.requestAsyncId = function(e, n, i2) {
          i2 === void 0 && (i2 = 0), this.delay = e.frame + i2;
          var u = e.actions;
          return u.push(this), u.sort(t.sortActions), 1;
        }, t.prototype.recycleAsyncId = function(e, n, i2) {
        }, t.prototype._execute = function(e, n) {
          if (this.active === true)
            return r.prototype._execute.call(this, e, n);
        }, t.sortActions = function(e, n) {
          return e.delay === n.delay ? e.index === n.index ? 0 : e.index > n.index ? 1 : -1 : e.delay > n.delay ? 1 : -1;
        }, t;
      }(Tv.AsyncAction);
      ee.VirtualAction = ta;
    });
    var N = s((Ee) => {
      Object.defineProperty(Ee, "__esModule", { value: true });
      Ee.empty = Ee.EMPTY = void 0;
      var ia = P();
      Ee.EMPTY = new ia.Observable(function(r) {
        return r.complete();
      });
      function Rv(r) {
        return r ? Wv(r) : Ee.EMPTY;
      }
      Ee.empty = Rv;
      function Wv(r) {
        return new ia.Observable(function(t) {
          return r.schedule(function() {
            return t.complete();
          });
        });
      }
    });
    var Sr = s((et) => {
      Object.defineProperty(et, "__esModule", { value: true });
      et.isScheduler = void 0;
      var Lv = j();
      function Nv(r) {
        return r && Lv.isFunction(r.schedule);
      }
      et.isScheduler = Nv;
    });
    var k = s((re) => {
      Object.defineProperty(re, "__esModule", { value: true });
      re.popNumber = re.popScheduler = re.popResultSelector = void 0;
      var Vv = j(), Uv = Sr();
      function su(r) {
        return r[r.length - 1];
      }
      function zv(r) {
        return Vv.isFunction(su(r)) ? r.pop() : void 0;
      }
      re.popResultSelector = zv;
      function Yv(r) {
        return Uv.isScheduler(su(r)) ? r.pop() : void 0;
      }
      re.popScheduler = Yv;
      function Bv(r, t) {
        return typeof su(r) == "number" ? r.pop() : t;
      }
      re.popNumber = Bv;
    });
    var tt = s((rt) => {
      Object.defineProperty(rt, "__esModule", { value: true });
      rt.isArrayLike = void 0;
      rt.isArrayLike = function(r) {
        return r && typeof r.length == "number" && typeof r != "function";
      };
    });
    var fu = s((nt) => {
      Object.defineProperty(nt, "__esModule", { value: true });
      nt.isPromise = void 0;
      var Dv = j();
      function Kv(r) {
        return Dv.isFunction(r == null ? void 0 : r.then);
      }
      nt.isPromise = Kv;
    });
    var vu = s((it) => {
      Object.defineProperty(it, "__esModule", { value: true });
      it.isInteropObservable = void 0;
      var Gv = yr(), Qv = j();
      function Jv(r) {
        return Qv.isFunction(r[Gv.observable]);
      }
      it.isInteropObservable = Jv;
    });
    var du = s((ut) => {
      Object.defineProperty(ut, "__esModule", { value: true });
      ut.isAsyncIterable = void 0;
      var Zv = j();
      function $v(r) {
        return Symbol.asyncIterator && Zv.isFunction(r == null ? void 0 : r[Symbol.asyncIterator]);
      }
      ut.isAsyncIterable = $v;
    });
    var pu = s((ot) => {
      Object.defineProperty(ot, "__esModule", { value: true });
      ot.createInvalidObservableTypeError = void 0;
      function Hv(r) {
        return new TypeError("You provided " + (r !== null && typeof r == "object" ? "an invalid object" : "'" + r + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
      }
      ot.createInvalidObservableTypeError = Hv;
    });
    var bu = s((rr) => {
      Object.defineProperty(rr, "__esModule", { value: true });
      rr.iterator = rr.getSymbolIterator = void 0;
      function ua() {
        return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
      }
      rr.getSymbolIterator = ua;
      rr.iterator = ua();
    });
    var _u = s((at) => {
      Object.defineProperty(at, "__esModule", { value: true });
      at.isIterable = void 0;
      var Xv = bu(), ed = j();
      function rd(r) {
        return ed.isFunction(r == null ? void 0 : r[Xv.iterator]);
      }
      at.isIterable = rd;
    });
    var ct = s((R) => {
      var td = R && R.__generator || function(r, t) {
        var e = { label: 0, sent: function() {
          if (u[0] & 1)
            throw u[1];
          return u[1];
        }, trys: [], ops: [] }, n, i2, u, o;
        return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
          return this;
        }), o;
        function c(l) {
          return function(v) {
            return f([l, v]);
          };
        }
        function f(l) {
          if (n)
            throw new TypeError("Generator is already executing.");
          for (; e; )
            try {
              if (n = 1, i2 && (u = l[0] & 2 ? i2.return : l[0] ? i2.throw || ((u = i2.return) && u.call(i2), 0) : i2.next) && !(u = u.call(i2, l[1])).done)
                return u;
              switch (i2 = 0, u && (l = [l[0] & 2, u.value]), l[0]) {
                case 0:
                case 1:
                  u = l;
                  break;
                case 4:
                  return e.label++, { value: l[1], done: false };
                case 5:
                  e.label++, i2 = l[1], l = [0];
                  continue;
                case 7:
                  l = e.ops.pop(), e.trys.pop();
                  continue;
                default:
                  if (u = e.trys, !(u = u.length > 0 && u[u.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                    e = 0;
                    continue;
                  }
                  if (l[0] === 3 && (!u || l[1] > u[0] && l[1] < u[3])) {
                    e.label = l[1];
                    break;
                  }
                  if (l[0] === 6 && e.label < u[1]) {
                    e.label = u[1], u = l;
                    break;
                  }
                  if (u && e.label < u[2]) {
                    e.label = u[2], e.ops.push(l);
                    break;
                  }
                  u[2] && e.ops.pop(), e.trys.pop();
                  continue;
              }
              l = t.call(r, e);
            } catch (v) {
              l = [6, v], i2 = 0;
            } finally {
              n = u = 0;
            }
          if (l[0] & 5)
            throw l[1];
          return { value: l[0] ? l[1] : void 0, done: true };
        }
      }, tr = R && R.__await || function(r) {
        return this instanceof tr ? (this.v = r, this) : new tr(r);
      }, nd = R && R.__asyncGenerator || function(r, t, e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n = e.apply(r, t || []), i2, u = [];
        return i2 = {}, o("next"), o("throw"), o("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function o(p) {
          n[p] && (i2[p] = function(y) {
            return new Promise(function(h, _) {
              u.push([p, y, h, _]) > 1 || c(p, y);
            });
          });
        }
        function c(p, y) {
          try {
            f(n[p](y));
          } catch (h) {
            d(u[0][3], h);
          }
        }
        function f(p) {
          p.value instanceof tr ? Promise.resolve(p.value.v).then(l, v) : d(u[0][2], p);
        }
        function l(p) {
          c("next", p);
        }
        function v(p) {
          c("throw", p);
        }
        function d(p, y) {
          p(y), u.shift(), u.length && c(u[0][0], u[0][1]);
        }
      };
      Object.defineProperty(R, "__esModule", { value: true });
      R.isReadableStreamLike = R.readableStreamLikeToAsyncGenerator = void 0;
      var id = j();
      function ud(r) {
        return nd(this, arguments, function() {
          var e, n, i2, u;
          return td(this, function(o) {
            switch (o.label) {
              case 0:
                e = r.getReader(), o.label = 1;
              case 1:
                o.trys.push([1, , 9, 10]), o.label = 2;
              case 2:
                return [4, tr(e.read())];
              case 3:
                return n = o.sent(), i2 = n.value, u = n.done, u ? [4, tr(void 0)] : [3, 5];
              case 4:
                return [2, o.sent()];
              case 5:
                return [4, tr(i2)];
              case 6:
                return [4, o.sent()];
              case 7:
                return o.sent(), [3, 2];
              case 8:
                return [3, 10];
              case 9:
                return e.releaseLock(), [7];
              case 10:
                return [2];
            }
          });
        });
      }
      R.readableStreamLikeToAsyncGenerator = ud;
      function od(r) {
        return id.isFunction(r == null ? void 0 : r.getReader);
      }
      R.isReadableStreamLike = od;
    });
    var q = s((A) => {
      var ad = A && A.__awaiter || function(r, t, e, n) {
        function i2(u) {
          return u instanceof e ? u : new e(function(o) {
            o(u);
          });
        }
        return new (e || (e = Promise))(function(u, o) {
          function c(v) {
            try {
              l(n.next(v));
            } catch (d) {
              o(d);
            }
          }
          function f(v) {
            try {
              l(n.throw(v));
            } catch (d) {
              o(d);
            }
          }
          function l(v) {
            v.done ? u(v.value) : i2(v.value).then(c, f);
          }
          l((n = n.apply(r, t || [])).next());
        });
      }, cd = A && A.__generator || function(r, t) {
        var e = { label: 0, sent: function() {
          if (u[0] & 1)
            throw u[1];
          return u[1];
        }, trys: [], ops: [] }, n, i2, u, o;
        return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
          return this;
        }), o;
        function c(l) {
          return function(v) {
            return f([l, v]);
          };
        }
        function f(l) {
          if (n)
            throw new TypeError("Generator is already executing.");
          for (; e; )
            try {
              if (n = 1, i2 && (u = l[0] & 2 ? i2.return : l[0] ? i2.throw || ((u = i2.return) && u.call(i2), 0) : i2.next) && !(u = u.call(i2, l[1])).done)
                return u;
              switch (i2 = 0, u && (l = [l[0] & 2, u.value]), l[0]) {
                case 0:
                case 1:
                  u = l;
                  break;
                case 4:
                  return e.label++, { value: l[1], done: false };
                case 5:
                  e.label++, i2 = l[1], l = [0];
                  continue;
                case 7:
                  l = e.ops.pop(), e.trys.pop();
                  continue;
                default:
                  if (u = e.trys, !(u = u.length > 0 && u[u.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                    e = 0;
                    continue;
                  }
                  if (l[0] === 3 && (!u || l[1] > u[0] && l[1] < u[3])) {
                    e.label = l[1];
                    break;
                  }
                  if (l[0] === 6 && e.label < u[1]) {
                    e.label = u[1], u = l;
                    break;
                  }
                  if (u && e.label < u[2]) {
                    e.label = u[2], e.ops.push(l);
                    break;
                  }
                  u[2] && e.ops.pop(), e.trys.pop();
                  continue;
              }
              l = t.call(r, e);
            } catch (v) {
              l = [6, v], i2 = 0;
            } finally {
              n = u = 0;
            }
          if (l[0] & 5)
            throw l[1];
          return { value: l[0] ? l[1] : void 0, done: true };
        }
      }, ld = A && A.__asyncValues || function(r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t = r[Symbol.asyncIterator], e;
        return t ? t.call(r) : (r = typeof hu == "function" ? hu(r) : r[Symbol.iterator](), e = {}, n("next"), n("throw"), n("return"), e[Symbol.asyncIterator] = function() {
          return this;
        }, e);
        function n(u) {
          e[u] = r[u] && function(o) {
            return new Promise(function(c, f) {
              o = r[u](o), i2(c, f, o.done, o.value);
            });
          };
        }
        function i2(u, o, c, f) {
          Promise.resolve(f).then(function(l) {
            u({ value: l, done: c });
          }, o);
        }
      }, hu = A && A.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(A, "__esModule", { value: true });
      A.fromReadableStreamLike = A.fromAsyncIterable = A.fromIterable = A.fromPromise = A.fromArrayLike = A.fromInteropObservable = A.innerFrom = void 0;
      var sd = tt(), fd = fu(), nr = P(), vd = vu(), dd = du(), pd = pu(), bd = _u(), oa = ct(), _d = j(), hd = Qi(), yd = yr();
      function md(r) {
        if (r instanceof nr.Observable)
          return r;
        if (r != null) {
          if (vd.isInteropObservable(r))
            return aa(r);
          if (sd.isArrayLike(r))
            return ca(r);
          if (fd.isPromise(r))
            return la(r);
          if (dd.isAsyncIterable(r))
            return yu(r);
          if (bd.isIterable(r))
            return sa(r);
          if (oa.isReadableStreamLike(r))
            return fa(r);
        }
        throw pd.createInvalidObservableTypeError(r);
      }
      A.innerFrom = md;
      function aa(r) {
        return new nr.Observable(function(t) {
          var e = r[yd.observable]();
          if (_d.isFunction(e.subscribe))
            return e.subscribe(t);
          throw new TypeError("Provided object does not correctly implement Symbol.observable");
        });
      }
      A.fromInteropObservable = aa;
      function ca(r) {
        return new nr.Observable(function(t) {
          for (var e = 0; e < r.length && !t.closed; e++)
            t.next(r[e]);
          t.complete();
        });
      }
      A.fromArrayLike = ca;
      function la(r) {
        return new nr.Observable(function(t) {
          r.then(function(e) {
            t.closed || (t.next(e), t.complete());
          }, function(e) {
            return t.error(e);
          }).then(null, hd.reportUnhandledError);
        });
      }
      A.fromPromise = la;
      function sa(r) {
        return new nr.Observable(function(t) {
          var e, n;
          try {
            for (var i2 = hu(r), u = i2.next(); !u.done; u = i2.next()) {
              var o = u.value;
              if (t.next(o), t.closed)
                return;
            }
          } catch (c) {
            e = { error: c };
          } finally {
            try {
              u && !u.done && (n = i2.return) && n.call(i2);
            } finally {
              if (e)
                throw e.error;
            }
          }
          t.complete();
        });
      }
      A.fromIterable = sa;
      function yu(r) {
        return new nr.Observable(function(t) {
          Od(r, t).catch(function(e) {
            return t.error(e);
          });
        });
      }
      A.fromAsyncIterable = yu;
      function fa(r) {
        return yu(oa.readableStreamLikeToAsyncGenerator(r));
      }
      A.fromReadableStreamLike = fa;
      function Od(r, t) {
        var e, n, i2, u;
        return ad(this, void 0, void 0, function() {
          var o, c;
          return cd(this, function(f) {
            switch (f.label) {
              case 0:
                f.trys.push([0, 5, 6, 11]), e = ld(r), f.label = 1;
              case 1:
                return [4, e.next()];
              case 2:
                if (n = f.sent(), !!n.done)
                  return [3, 4];
                if (o = n.value, t.next(o), t.closed)
                  return [2];
                f.label = 3;
              case 3:
                return [3, 1];
              case 4:
                return [3, 11];
              case 5:
                return c = f.sent(), i2 = { error: c }, [3, 11];
              case 6:
                return f.trys.push([6, , 9, 10]), n && !n.done && (u = e.return) ? [4, u.call(e)] : [3, 8];
              case 7:
                f.sent(), f.label = 8;
              case 8:
                return [3, 10];
              case 9:
                if (i2)
                  throw i2.error;
                return [7];
              case 10:
                return [7];
              case 11:
                return t.complete(), [2];
            }
          });
        });
      }
    });
    var G = s((lt) => {
      Object.defineProperty(lt, "__esModule", { value: true });
      lt.executeSchedule = void 0;
      function gd(r, t, e, n, i2) {
        n === void 0 && (n = 0), i2 === void 0 && (i2 = false);
        var u = t.schedule(function() {
          e(), i2 ? r.add(this.schedule(null, n)) : this.unsubscribe();
        }, n);
        if (r.add(u), !i2)
          return u;
      }
      lt.executeSchedule = gd;
    });
    var jr = s((st) => {
      Object.defineProperty(st, "__esModule", { value: true });
      st.observeOn = void 0;
      var mu = G(), qd = b(), Sd = O();
      function jd(r, t) {
        return t === void 0 && (t = 0), qd.operate(function(e, n) {
          e.subscribe(Sd.createOperatorSubscriber(n, function(i2) {
            return mu.executeSchedule(n, r, function() {
              return n.next(i2);
            }, t);
          }, function() {
            return mu.executeSchedule(n, r, function() {
              return n.complete();
            }, t);
          }, function(i2) {
            return mu.executeSchedule(n, r, function() {
              return n.error(i2);
            }, t);
          }));
        });
      }
      st.observeOn = jd;
    });
    var Pr = s((ft) => {
      Object.defineProperty(ft, "__esModule", { value: true });
      ft.subscribeOn = void 0;
      var Pd = b();
      function wd(r, t) {
        return t === void 0 && (t = 0), Pd.operate(function(e, n) {
          n.add(r.schedule(function() {
            return e.subscribe(n);
          }, t));
        });
      }
      ft.subscribeOn = wd;
    });
    var va = s((vt) => {
      Object.defineProperty(vt, "__esModule", { value: true });
      vt.scheduleObservable = void 0;
      var Ad = q(), Ed = jr(), Md = Pr();
      function Fd(r, t) {
        return Ad.innerFrom(r).pipe(Md.subscribeOn(t), Ed.observeOn(t));
      }
      vt.scheduleObservable = Fd;
    });
    var da = s((dt) => {
      Object.defineProperty(dt, "__esModule", { value: true });
      dt.schedulePromise = void 0;
      var Id = q(), Td = jr(), xd = Pr();
      function kd(r, t) {
        return Id.innerFrom(r).pipe(xd.subscribeOn(t), Td.observeOn(t));
      }
      dt.schedulePromise = kd;
    });
    var pa = s((pt) => {
      Object.defineProperty(pt, "__esModule", { value: true });
      pt.scheduleArray = void 0;
      var Cd = P();
      function Rd(r, t) {
        return new Cd.Observable(function(e) {
          var n = 0;
          return t.schedule(function() {
            n === r.length ? e.complete() : (e.next(r[n++]), e.closed || this.schedule());
          });
        });
      }
      pt.scheduleArray = Rd;
    });
    var Ou = s((bt) => {
      Object.defineProperty(bt, "__esModule", { value: true });
      bt.scheduleIterable = void 0;
      var Wd = P(), Ld = bu(), Nd = j(), ba = G();
      function Vd(r, t) {
        return new Wd.Observable(function(e) {
          var n;
          return ba.executeSchedule(e, t, function() {
            n = r[Ld.iterator](), ba.executeSchedule(e, t, function() {
              var i2, u, o;
              try {
                i2 = n.next(), u = i2.value, o = i2.done;
              } catch (c) {
                e.error(c);
                return;
              }
              o ? e.complete() : e.next(u);
            }, 0, true);
          }), function() {
            return Nd.isFunction(n == null ? void 0 : n.return) && n.return();
          };
        });
      }
      bt.scheduleIterable = Vd;
    });
    var gu = s((_t) => {
      Object.defineProperty(_t, "__esModule", { value: true });
      _t.scheduleAsyncIterable = void 0;
      var Ud = P(), _a2 = G();
      function zd(r, t) {
        if (!r)
          throw new Error("Iterable cannot be null");
        return new Ud.Observable(function(e) {
          _a2.executeSchedule(e, t, function() {
            var n = r[Symbol.asyncIterator]();
            _a2.executeSchedule(e, t, function() {
              n.next().then(function(i2) {
                i2.done ? e.complete() : e.next(i2.value);
              });
            }, 0, true);
          });
        });
      }
      _t.scheduleAsyncIterable = zd;
    });
    var ha = s((ht) => {
      Object.defineProperty(ht, "__esModule", { value: true });
      ht.scheduleReadableStreamLike = void 0;
      var Yd = gu(), Bd = ct();
      function Dd(r, t) {
        return Yd.scheduleAsyncIterable(Bd.readableStreamLikeToAsyncGenerator(r), t);
      }
      ht.scheduleReadableStreamLike = Dd;
    });
    var qu = s((yt) => {
      Object.defineProperty(yt, "__esModule", { value: true });
      yt.scheduled = void 0;
      var Kd = va(), Gd = da(), Qd = pa(), Jd = Ou(), Zd = gu(), $d = vu(), Hd = fu(), Xd = tt(), ep = _u(), rp = du(), tp = pu(), np = ct(), ip = ha();
      function up(r, t) {
        if (r != null) {
          if ($d.isInteropObservable(r))
            return Kd.scheduleObservable(r, t);
          if (Xd.isArrayLike(r))
            return Qd.scheduleArray(r, t);
          if (Hd.isPromise(r))
            return Gd.schedulePromise(r, t);
          if (rp.isAsyncIterable(r))
            return Zd.scheduleAsyncIterable(r, t);
          if (ep.isIterable(r))
            return Jd.scheduleIterable(r, t);
          if (np.isReadableStreamLike(r))
            return ip.scheduleReadableStreamLike(r, t);
        }
        throw tp.createInvalidObservableTypeError(r);
      }
      yt.scheduled = up;
    });
    var Q = s((mt) => {
      Object.defineProperty(mt, "__esModule", { value: true });
      mt.from = void 0;
      var op = qu(), ap = q();
      function cp(r, t) {
        return t ? op.scheduled(r, t) : ap.innerFrom(r);
      }
      mt.from = cp;
    });
    var gt = s((Ot) => {
      Object.defineProperty(Ot, "__esModule", { value: true });
      Ot.of = void 0;
      var lp = k(), sp = Q();
      function fp() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = lp.popScheduler(r);
        return sp.from(r, e);
      }
      Ot.of = fp;
    });
    var Su = s((qt) => {
      Object.defineProperty(qt, "__esModule", { value: true });
      qt.throwError = void 0;
      var vp = P(), dp = j();
      function pp(r, t) {
        var e = dp.isFunction(r) ? r : function() {
          return r;
        }, n = function(i2) {
          return i2.error(e());
        };
        return new vp.Observable(t ? function(i2) {
          return t.schedule(n, 0, i2);
        } : n);
      }
      qt.throwError = pp;
    });
    var St = s((J) => {
      Object.defineProperty(J, "__esModule", { value: true });
      J.observeNotification = J.Notification = J.NotificationKind = void 0;
      var bp = N(), _p = gt(), hp = Su(), yp = j();
      (function(r) {
        r.NEXT = "N", r.ERROR = "E", r.COMPLETE = "C";
      })(J.NotificationKind || (J.NotificationKind = {}));
      var Op = function() {
        function r(t, e, n) {
          this.kind = t, this.value = e, this.error = n, this.hasValue = t === "N";
        }
        return r.prototype.observe = function(t) {
          return ya(this, t);
        }, r.prototype.do = function(t, e, n) {
          var i2 = this, u = i2.kind, o = i2.value, c = i2.error;
          return u === "N" ? t == null ? void 0 : t(o) : u === "E" ? e == null ? void 0 : e(c) : n == null ? void 0 : n();
        }, r.prototype.accept = function(t, e, n) {
          var i2;
          return yp.isFunction((i2 = t) === null || i2 === void 0 ? void 0 : i2.next) ? this.observe(t) : this.do(t, e, n);
        }, r.prototype.toObservable = function() {
          var t = this, e = t.kind, n = t.value, i2 = t.error, u = e === "N" ? _p.of(n) : e === "E" ? hp.throwError(function() {
            return i2;
          }) : e === "C" ? bp.EMPTY : 0;
          if (!u)
            throw new TypeError("Unexpected notification kind " + e);
          return u;
        }, r.createNext = function(t) {
          return new r("N", t);
        }, r.createError = function(t) {
          return new r("E", void 0, t);
        }, r.createComplete = function() {
          return r.completeNotification;
        }, r.completeNotification = new r("C"), r;
      }();
      J.Notification = Op;
      function ya(r, t) {
        var e, n, i2, u = r, o = u.kind, c = u.value, f = u.error;
        if (typeof o != "string")
          throw new TypeError('Invalid notification, missing "kind"');
        o === "N" ? (e = t.next) === null || e === void 0 || e.call(t, c) : o === "E" ? (n = t.error) === null || n === void 0 || n.call(t, f) : (i2 = t.complete) === null || i2 === void 0 || i2.call(t);
      }
      J.observeNotification = ya;
    });
    var Oa = s((jt) => {
      Object.defineProperty(jt, "__esModule", { value: true });
      jt.isObservable = void 0;
      var gp = P(), ma = j();
      function qp(r) {
        return !!r && (r instanceof gp.Observable || ma.isFunction(r.lift) && ma.isFunction(r.subscribe));
      }
      jt.isObservable = qp;
    });
    var te = s((Pt) => {
      Object.defineProperty(Pt, "__esModule", { value: true });
      Pt.EmptyError = void 0;
      var Sp = H();
      Pt.EmptyError = Sp.createErrorClass(function(r) {
        return function() {
          r(this), this.name = "EmptyError", this.message = "no elements in sequence";
        };
      });
    });
    var ga = s((wt) => {
      Object.defineProperty(wt, "__esModule", { value: true });
      wt.lastValueFrom = void 0;
      var jp = te();
      function Pp(r, t) {
        var e = typeof t == "object";
        return new Promise(function(n, i2) {
          var u = false, o;
          r.subscribe({ next: function(c) {
            o = c, u = true;
          }, error: i2, complete: function() {
            u ? n(o) : e ? n(t.defaultValue) : i2(new jp.EmptyError());
          } });
        });
      }
      wt.lastValueFrom = Pp;
    });
    var qa = s((At) => {
      Object.defineProperty(At, "__esModule", { value: true });
      At.firstValueFrom = void 0;
      var wp = te(), Ap = Re();
      function Ep(r, t) {
        var e = typeof t == "object";
        return new Promise(function(n, i2) {
          var u = new Ap.SafeSubscriber({ next: function(o) {
            n(o), u.unsubscribe();
          }, error: i2, complete: function() {
            e ? n(t.defaultValue) : i2(new wp.EmptyError());
          } });
          r.subscribe(u);
        });
      }
      At.firstValueFrom = Ep;
    });
    var ju = s((Et) => {
      Object.defineProperty(Et, "__esModule", { value: true });
      Et.ArgumentOutOfRangeError = void 0;
      var Mp = H();
      Et.ArgumentOutOfRangeError = Mp.createErrorClass(function(r) {
        return function() {
          r(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
        };
      });
    });
    var Pu = s((Mt) => {
      Object.defineProperty(Mt, "__esModule", { value: true });
      Mt.NotFoundError = void 0;
      var Fp = H();
      Mt.NotFoundError = Fp.createErrorClass(function(r) {
        return function(e) {
          r(this), this.name = "NotFoundError", this.message = e;
        };
      });
    });
    var wu = s((Ft) => {
      Object.defineProperty(Ft, "__esModule", { value: true });
      Ft.SequenceError = void 0;
      var Ip = H();
      Ft.SequenceError = Ip.createErrorClass(function(r) {
        return function(e) {
          r(this), this.name = "SequenceError", this.message = e;
        };
      });
    });
    var Tt = s((It) => {
      Object.defineProperty(It, "__esModule", { value: true });
      It.isValidDate = void 0;
      function Tp(r) {
        return r instanceof Date && !isNaN(r);
      }
      It.isValidDate = Tp;
    });
    var xt = s((Me) => {
      Object.defineProperty(Me, "__esModule", { value: true });
      Me.timeout = Me.TimeoutError = void 0;
      var xp = x(), kp = Tt(), Cp = b(), Rp = q(), Wp = H(), Lp = O(), Np = G();
      Me.TimeoutError = Wp.createErrorClass(function(r) {
        return function(e) {
          e === void 0 && (e = null), r(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = e;
        };
      });
      function Vp(r, t) {
        var e = kp.isValidDate(r) ? { first: r } : typeof r == "number" ? { each: r } : r, n = e.first, i2 = e.each, u = e.with, o = u === void 0 ? Up : u, c = e.scheduler, f = c === void 0 ? t ?? xp.asyncScheduler : c, l = e.meta, v = l === void 0 ? null : l;
        if (n == null && i2 == null)
          throw new TypeError("No timeout provided.");
        return Cp.operate(function(d, p) {
          var y, h, _ = null, m = 0, g = function(w) {
            h = Np.executeSchedule(p, f, function() {
              try {
                y.unsubscribe(), Rp.innerFrom(o({ meta: v, lastValue: _, seen: m })).subscribe(p);
              } catch (I) {
                p.error(I);
              }
            }, w);
          };
          y = d.subscribe(Lp.createOperatorSubscriber(p, function(w) {
            h == null || h.unsubscribe(), m++, p.next(_ = w), i2 > 0 && g(i2);
          }, void 0, void 0, function() {
            h != null && h.closed || h == null || h.unsubscribe(), _ = null;
          })), !m && g(n != null ? typeof n == "number" ? n : +n - f.now() : i2);
        });
      }
      Me.timeout = Vp;
      function Up(r) {
        throw new Me.TimeoutError(r);
      }
    });
    var ne = s((kt) => {
      Object.defineProperty(kt, "__esModule", { value: true });
      kt.map = void 0;
      var zp = b(), Yp = O();
      function Bp(r, t) {
        return zp.operate(function(e, n) {
          var i2 = 0;
          e.subscribe(Yp.createOperatorSubscriber(n, function(u) {
            n.next(r.call(t, u, i2++));
          }));
        });
      }
      kt.map = Bp;
    });
    var ue = s((ie) => {
      var Dp = ie && ie.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Kp = ie && ie.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(ie, "__esModule", { value: true });
      ie.mapOneOrManyArgs = void 0;
      var Gp = ne(), Qp = Array.isArray;
      function Jp(r, t) {
        return Qp(t) ? r.apply(void 0, Kp([], Dp(t))) : r(t);
      }
      function Zp(r) {
        return Gp.map(function(t) {
          return Jp(r, t);
        });
      }
      ie.mapOneOrManyArgs = Zp;
    });
    var Eu = s((oe) => {
      var $p = oe && oe.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Sa = oe && oe.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(oe, "__esModule", { value: true });
      oe.bindCallbackInternals = void 0;
      var Hp = Sr(), Xp = P(), eb = Pr(), rb = ue(), tb = jr(), nb = $r();
      function Au(r, t, e, n) {
        if (e)
          if (Hp.isScheduler(e))
            n = e;
          else
            return function() {
              for (var i2 = [], u = 0; u < arguments.length; u++)
                i2[u] = arguments[u];
              return Au(r, t, n).apply(this, i2).pipe(rb.mapOneOrManyArgs(e));
            };
        return n ? function() {
          for (var i2 = [], u = 0; u < arguments.length; u++)
            i2[u] = arguments[u];
          return Au(r, t).apply(this, i2).pipe(eb.subscribeOn(n), tb.observeOn(n));
        } : function() {
          for (var i2 = this, u = [], o = 0; o < arguments.length; o++)
            u[o] = arguments[o];
          var c = new nb.AsyncSubject(), f = true;
          return new Xp.Observable(function(l) {
            var v = c.subscribe(l);
            if (f) {
              f = false;
              var d = false, p = false;
              t.apply(i2, Sa(Sa([], $p(u)), [function() {
                for (var y = [], h = 0; h < arguments.length; h++)
                  y[h] = arguments[h];
                if (r) {
                  var _ = y.shift();
                  if (_ != null) {
                    c.error(_);
                    return;
                  }
                }
                c.next(1 < y.length ? y : y[0]), p = true, d && c.complete();
              }])), p && c.complete(), d = true;
            }
            return v;
          });
        };
      }
      oe.bindCallbackInternals = Au;
    });
    var ja = s((Ct) => {
      Object.defineProperty(Ct, "__esModule", { value: true });
      Ct.bindCallback = void 0;
      var ib = Eu();
      function ub(r, t, e) {
        return ib.bindCallbackInternals(false, r, t, e);
      }
      Ct.bindCallback = ub;
    });
    var Pa = s((Rt) => {
      Object.defineProperty(Rt, "__esModule", { value: true });
      Rt.bindNodeCallback = void 0;
      var ob = Eu();
      function ab(r, t, e) {
        return ob.bindCallbackInternals(true, r, t, e);
      }
      Rt.bindNodeCallback = ab;
    });
    var Mu = s((Wt) => {
      Object.defineProperty(Wt, "__esModule", { value: true });
      Wt.argsArgArrayOrObject = void 0;
      var cb = Array.isArray, lb = Object.getPrototypeOf, sb = Object.prototype, fb = Object.keys;
      function vb(r) {
        if (r.length === 1) {
          var t = r[0];
          if (cb(t))
            return { args: t, keys: null };
          if (db(t)) {
            var e = fb(t);
            return { args: e.map(function(n) {
              return t[n];
            }), keys: e };
          }
        }
        return { args: r, keys: null };
      }
      Wt.argsArgArrayOrObject = vb;
      function db(r) {
        return r && typeof r == "object" && lb(r) === sb;
      }
    });
    var Fu = s((Lt) => {
      Object.defineProperty(Lt, "__esModule", { value: true });
      Lt.createObject = void 0;
      function pb(r, t) {
        return r.reduce(function(e, n, i2) {
          return e[n] = t[i2], e;
        }, {});
      }
      Lt.createObject = pb;
    });
    var Nt = s((ir) => {
      Object.defineProperty(ir, "__esModule", { value: true });
      ir.combineLatestInit = ir.combineLatest = void 0;
      var bb = P(), _b = Mu(), Ea = Q(), Ma = M(), hb = ue(), wa = k(), yb = Fu(), mb = O(), Ob = G();
      function gb() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = wa.popScheduler(r), n = wa.popResultSelector(r), i2 = _b.argsArgArrayOrObject(r), u = i2.args, o = i2.keys;
        if (u.length === 0)
          return Ea.from([], e);
        var c = new bb.Observable(Fa(u, e, o ? function(f) {
          return yb.createObject(o, f);
        } : Ma.identity));
        return n ? c.pipe(hb.mapOneOrManyArgs(n)) : c;
      }
      ir.combineLatest = gb;
      function Fa(r, t, e) {
        return e === void 0 && (e = Ma.identity), function(n) {
          Aa(t, function() {
            for (var i2 = r.length, u = new Array(i2), o = i2, c = i2, f = function(v) {
              Aa(t, function() {
                var d = Ea.from(r[v], t), p = false;
                d.subscribe(mb.createOperatorSubscriber(n, function(y) {
                  u[v] = y, p || (p = true, c--), c || n.next(e(u.slice()));
                }, function() {
                  --o || n.complete();
                }));
              }, n);
            }, l = 0; l < i2; l++)
              f(l);
          }, n);
        };
      }
      ir.combineLatestInit = Fa;
      function Aa(r, t, e) {
        r ? Ob.executeSchedule(e, r, t) : t();
      }
    });
    var Ut = s((Vt) => {
      Object.defineProperty(Vt, "__esModule", { value: true });
      Vt.mergeInternals = void 0;
      var qb = q(), Sb = G(), Ia = O();
      function jb(r, t, e, n, i2, u, o, c) {
        var f = [], l = 0, v = 0, d = false, p = function() {
          d && !f.length && !l && t.complete();
        }, y = function(_) {
          return l < n ? h(_) : f.push(_);
        }, h = function(_) {
          u && t.next(_), l++;
          var m = false;
          qb.innerFrom(e(_, v++)).subscribe(Ia.createOperatorSubscriber(t, function(g) {
            i2 == null || i2(g), u ? y(g) : t.next(g);
          }, function() {
            m = true;
          }, void 0, function() {
            if (m)
              try {
                l--;
                for (var g = function() {
                  var w = f.shift();
                  o ? Sb.executeSchedule(t, o, function() {
                    return h(w);
                  }) : h(w);
                }; f.length && l < n; )
                  g();
                p();
              } catch (w) {
                t.error(w);
              }
          }));
        };
        return r.subscribe(Ia.createOperatorSubscriber(t, y, function() {
          d = true, p();
        })), function() {
          c == null || c();
        };
      }
      Vt.mergeInternals = jb;
    });
    var Z = s((zt) => {
      Object.defineProperty(zt, "__esModule", { value: true });
      zt.mergeMap = void 0;
      var Pb = ne(), wb = q(), Ab = b(), Eb = Ut(), Mb = j();
      function Ta(r, t, e) {
        return e === void 0 && (e = 1 / 0), Mb.isFunction(t) ? Ta(function(n, i2) {
          return Pb.map(function(u, o) {
            return t(n, u, i2, o);
          })(wb.innerFrom(r(n, i2)));
        }, e) : (typeof t == "number" && (e = t), Ab.operate(function(n, i2) {
          return Eb.mergeInternals(n, i2, r, e);
        }));
      }
      zt.mergeMap = Ta;
    });
    var wr = s((Yt) => {
      Object.defineProperty(Yt, "__esModule", { value: true });
      Yt.mergeAll = void 0;
      var Fb = Z(), Ib = M();
      function Tb(r) {
        return r === void 0 && (r = 1 / 0), Fb.mergeMap(Ib.identity, r);
      }
      Yt.mergeAll = Tb;
    });
    var Dt = s((Bt) => {
      Object.defineProperty(Bt, "__esModule", { value: true });
      Bt.concatAll = void 0;
      var xb = wr();
      function kb() {
        return xb.mergeAll(1);
      }
      Bt.concatAll = kb;
    });
    var Ar = s((Kt) => {
      Object.defineProperty(Kt, "__esModule", { value: true });
      Kt.concat = void 0;
      var Cb = Dt(), Rb = k(), Wb = Q();
      function Lb() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return Cb.concatAll()(Wb.from(r, Rb.popScheduler(r)));
      }
      Kt.concat = Lb;
    });
    var Er = s((Gt) => {
      Object.defineProperty(Gt, "__esModule", { value: true });
      Gt.defer = void 0;
      var Nb = P(), Vb = q();
      function Ub(r) {
        return new Nb.Observable(function(t) {
          Vb.innerFrom(r()).subscribe(t);
        });
      }
      Gt.defer = Ub;
    });
    var xa = s((Qt) => {
      Object.defineProperty(Qt, "__esModule", { value: true });
      Qt.connectable = void 0;
      var zb = F(), Yb = P(), Bb = Er(), Db = { connector: function() {
        return new zb.Subject();
      }, resetOnDisconnect: true };
      function Kb(r, t) {
        t === void 0 && (t = Db);
        var e = null, n = t.connector, i2 = t.resetOnDisconnect, u = i2 === void 0 ? true : i2, o = n(), c = new Yb.Observable(function(f) {
          return o.subscribe(f);
        });
        return c.connect = function() {
          return (!e || e.closed) && (e = Bb.defer(function() {
            return r;
          }).subscribe(o), u && e.add(function() {
            return o = n();
          })), e;
        }, c;
      }
      Qt.connectable = Kb;
    });
    var ka = s((Jt) => {
      Object.defineProperty(Jt, "__esModule", { value: true });
      Jt.forkJoin = void 0;
      var Gb = P(), Qb = Mu(), Jb = q(), Zb = k(), $b = O(), Hb = ue(), Xb = Fu();
      function e_() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = Zb.popResultSelector(r), n = Qb.argsArgArrayOrObject(r), i2 = n.args, u = n.keys, o = new Gb.Observable(function(c) {
          var f = i2.length;
          if (!f) {
            c.complete();
            return;
          }
          for (var l = new Array(f), v = f, d = f, p = function(h) {
            var _ = false;
            Jb.innerFrom(i2[h]).subscribe($b.createOperatorSubscriber(c, function(m) {
              _ || (_ = true, d--), l[h] = m;
            }, function() {
              return v--;
            }, void 0, function() {
              (!v || !_) && (d || c.next(u ? Xb.createObject(u, l) : l), c.complete());
            }));
          }, y = 0; y < f; y++)
            p(y);
        });
        return e ? o.pipe(Hb.mapOneOrManyArgs(e)) : o;
      }
      Jt.forkJoin = e_;
    });
    var Ra = s((ur) => {
      var r_ = ur && ur.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      };
      Object.defineProperty(ur, "__esModule", { value: true });
      ur.fromEvent = void 0;
      var t_ = q(), n_ = P(), i_ = Z(), u_ = tt(), Fe = j(), o_ = ue(), a_ = ["addListener", "removeListener"], c_ = ["addEventListener", "removeEventListener"], l_ = ["on", "off"];
      function Iu(r, t, e, n) {
        if (Fe.isFunction(e) && (n = e, e = void 0), n)
          return Iu(r, t, e).pipe(o_.mapOneOrManyArgs(n));
        var i2 = r_(v_(r) ? c_.map(function(c) {
          return function(f) {
            return r[c](t, f, e);
          };
        }) : s_(r) ? a_.map(Ca(r, t)) : f_(r) ? l_.map(Ca(r, t)) : [], 2), u = i2[0], o = i2[1];
        if (!u && u_.isArrayLike(r))
          return i_.mergeMap(function(c) {
            return Iu(c, t, e);
          })(t_.innerFrom(r));
        if (!u)
          throw new TypeError("Invalid event target");
        return new n_.Observable(function(c) {
          var f = function() {
            for (var l = [], v = 0; v < arguments.length; v++)
              l[v] = arguments[v];
            return c.next(1 < l.length ? l : l[0]);
          };
          return u(f), function() {
            return o(f);
          };
        });
      }
      ur.fromEvent = Iu;
      function Ca(r, t) {
        return function(e) {
          return function(n) {
            return r[e](t, n);
          };
        };
      }
      function s_(r) {
        return Fe.isFunction(r.addListener) && Fe.isFunction(r.removeListener);
      }
      function f_(r) {
        return Fe.isFunction(r.on) && Fe.isFunction(r.off);
      }
      function v_(r) {
        return Fe.isFunction(r.addEventListener) && Fe.isFunction(r.removeEventListener);
      }
    });
    var La = s((Zt) => {
      Object.defineProperty(Zt, "__esModule", { value: true });
      Zt.fromEventPattern = void 0;
      var d_ = P(), p_ = j(), b_ = ue();
      function Wa(r, t, e) {
        return e ? Wa(r, t).pipe(b_.mapOneOrManyArgs(e)) : new d_.Observable(function(n) {
          var i2 = function() {
            for (var o = [], c = 0; c < arguments.length; c++)
              o[c] = arguments[c];
            return n.next(o.length === 1 ? o[0] : o);
          }, u = r(i2);
          return p_.isFunction(t) ? function() {
            return t(i2, u);
          } : void 0;
        });
      }
      Zt.fromEventPattern = Wa;
    });
    var Va = s((or) => {
      var __ = or && or.__generator || function(r, t) {
        var e = { label: 0, sent: function() {
          if (u[0] & 1)
            throw u[1];
          return u[1];
        }, trys: [], ops: [] }, n, i2, u, o;
        return o = { next: c(0), throw: c(1), return: c(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
          return this;
        }), o;
        function c(l) {
          return function(v) {
            return f([l, v]);
          };
        }
        function f(l) {
          if (n)
            throw new TypeError("Generator is already executing.");
          for (; e; )
            try {
              if (n = 1, i2 && (u = l[0] & 2 ? i2.return : l[0] ? i2.throw || ((u = i2.return) && u.call(i2), 0) : i2.next) && !(u = u.call(i2, l[1])).done)
                return u;
              switch (i2 = 0, u && (l = [l[0] & 2, u.value]), l[0]) {
                case 0:
                case 1:
                  u = l;
                  break;
                case 4:
                  return e.label++, { value: l[1], done: false };
                case 5:
                  e.label++, i2 = l[1], l = [0];
                  continue;
                case 7:
                  l = e.ops.pop(), e.trys.pop();
                  continue;
                default:
                  if (u = e.trys, !(u = u.length > 0 && u[u.length - 1]) && (l[0] === 6 || l[0] === 2)) {
                    e = 0;
                    continue;
                  }
                  if (l[0] === 3 && (!u || l[1] > u[0] && l[1] < u[3])) {
                    e.label = l[1];
                    break;
                  }
                  if (l[0] === 6 && e.label < u[1]) {
                    e.label = u[1], u = l;
                    break;
                  }
                  if (u && e.label < u[2]) {
                    e.label = u[2], e.ops.push(l);
                    break;
                  }
                  u[2] && e.ops.pop(), e.trys.pop();
                  continue;
              }
              l = t.call(r, e);
            } catch (v) {
              l = [6, v], i2 = 0;
            } finally {
              n = u = 0;
            }
          if (l[0] & 5)
            throw l[1];
          return { value: l[0] ? l[1] : void 0, done: true };
        }
      };
      Object.defineProperty(or, "__esModule", { value: true });
      or.generate = void 0;
      var Na = M(), h_ = Sr(), y_ = Er(), m_ = Ou();
      function O_(r, t, e, n, i2) {
        var u, o, c, f;
        arguments.length === 1 ? (u = r, f = u.initialState, t = u.condition, e = u.iterate, o = u.resultSelector, c = o === void 0 ? Na.identity : o, i2 = u.scheduler) : (f = r, !n || h_.isScheduler(n) ? (c = Na.identity, i2 = n) : c = n);
        function l() {
          var v;
          return __(this, function(d) {
            switch (d.label) {
              case 0:
                v = f, d.label = 1;
              case 1:
                return !t || t(v) ? [4, c(v)] : [3, 4];
              case 2:
                d.sent(), d.label = 3;
              case 3:
                return v = e(v), [3, 1];
              case 4:
                return [2];
            }
          });
        }
        return y_.defer(i2 ? function() {
          return m_.scheduleIterable(l(), i2);
        } : l);
      }
      or.generate = O_;
    });
    var Ua = s(($t) => {
      Object.defineProperty($t, "__esModule", { value: true });
      $t.iif = void 0;
      var g_ = Er();
      function q_(r, t, e) {
        return g_.defer(function() {
          return r() ? t : e;
        });
      }
      $t.iif = q_;
    });
    var ae = s((Ht) => {
      Object.defineProperty(Ht, "__esModule", { value: true });
      Ht.timer = void 0;
      var S_ = P(), j_ = x(), P_ = Sr(), w_ = Tt();
      function A_(r, t, e) {
        r === void 0 && (r = 0), e === void 0 && (e = j_.async);
        var n = -1;
        return t != null && (P_.isScheduler(t) ? e = t : n = t), new S_.Observable(function(i2) {
          var u = w_.isValidDate(r) ? +r - e.now() : r;
          u < 0 && (u = 0);
          var o = 0;
          return e.schedule(function() {
            i2.closed || (i2.next(o++), 0 <= n ? this.schedule(void 0, n) : i2.complete());
          }, u);
        });
      }
      Ht.timer = A_;
    });
    var Tu = s((Xt) => {
      Object.defineProperty(Xt, "__esModule", { value: true });
      Xt.interval = void 0;
      var E_ = x(), M_ = ae();
      function F_(r, t) {
        return r === void 0 && (r = 0), t === void 0 && (t = E_.asyncScheduler), r < 0 && (r = 0), M_.timer(r, r, t);
      }
      Xt.interval = F_;
    });
    var Ya = s((en) => {
      Object.defineProperty(en, "__esModule", { value: true });
      en.merge = void 0;
      var I_ = wr(), T_ = q(), x_ = N(), za = k(), k_ = Q();
      function C_() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = za.popScheduler(r), n = za.popNumber(r, 1 / 0), i2 = r;
        return i2.length ? i2.length === 1 ? T_.innerFrom(i2[0]) : I_.mergeAll(n)(k_.from(i2, e)) : x_.EMPTY;
      }
      en.merge = C_;
    });
    var xu = s((Ie) => {
      Object.defineProperty(Ie, "__esModule", { value: true });
      Ie.never = Ie.NEVER = void 0;
      var R_ = P(), W_ = E();
      Ie.NEVER = new R_.Observable(W_.noop);
      function L_() {
        return Ie.NEVER;
      }
      Ie.never = L_;
    });
    var Te = s((rn) => {
      Object.defineProperty(rn, "__esModule", { value: true });
      rn.argsOrArgArray = void 0;
      var N_ = Array.isArray;
      function V_(r) {
        return r.length === 1 && N_(r[0]) ? r[0] : r;
      }
      rn.argsOrArgArray = V_;
    });
    var ku = s((tn) => {
      Object.defineProperty(tn, "__esModule", { value: true });
      tn.onErrorResumeNext = void 0;
      var U_ = P(), z_ = Te(), Y_ = O(), Ba = E(), B_ = q();
      function D_() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = z_.argsOrArgArray(r);
        return new U_.Observable(function(n) {
          var i2 = 0, u = function() {
            if (i2 < e.length) {
              var o = void 0;
              try {
                o = B_.innerFrom(e[i2++]);
              } catch {
                u();
                return;
              }
              var c = new Y_.OperatorSubscriber(n, void 0, Ba.noop, Ba.noop);
              o.subscribe(c), c.add(u);
            } else
              n.complete();
          };
          u();
        });
      }
      tn.onErrorResumeNext = D_;
    });
    var Da = s((nn) => {
      Object.defineProperty(nn, "__esModule", { value: true });
      nn.pairs = void 0;
      var K_ = Q();
      function G_(r, t) {
        return K_.from(Object.entries(r), t);
      }
      nn.pairs = G_;
    });
    var Ka = s((un) => {
      Object.defineProperty(un, "__esModule", { value: true });
      un.not = void 0;
      function Q_(r, t) {
        return function(e, n) {
          return !r.call(t, e, n);
        };
      }
      un.not = Q_;
    });
    var xe = s((on) => {
      Object.defineProperty(on, "__esModule", { value: true });
      on.filter = void 0;
      var J_ = b(), Z_ = O();
      function $_(r, t) {
        return J_.operate(function(e, n) {
          var i2 = 0;
          e.subscribe(Z_.createOperatorSubscriber(n, function(u) {
            return r.call(t, u, i2++) && n.next(u);
          }));
        });
      }
      on.filter = $_;
    });
    var Ja = s((an) => {
      Object.defineProperty(an, "__esModule", { value: true });
      an.partition = void 0;
      var H_ = Ka(), Ga = xe(), Qa = q();
      function X_(r, t, e) {
        return [Ga.filter(t, e)(Qa.innerFrom(r)), Ga.filter(H_.not(t, e))(Qa.innerFrom(r))];
      }
      an.partition = X_;
    });
    var Cu = s((ar) => {
      Object.defineProperty(ar, "__esModule", { value: true });
      ar.raceInit = ar.race = void 0;
      var eh = P(), Za = q(), rh = Te(), th = O();
      function nh() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return r = rh.argsOrArgArray(r), r.length === 1 ? Za.innerFrom(r[0]) : new eh.Observable($a(r));
      }
      ar.race = nh;
      function $a(r) {
        return function(t) {
          for (var e = [], n = function(u) {
            e.push(Za.innerFrom(r[u]).subscribe(th.createOperatorSubscriber(t, function(o) {
              if (e) {
                for (var c = 0; c < e.length; c++)
                  c !== u && e[c].unsubscribe();
                e = null;
              }
              t.next(o);
            })));
          }, i2 = 0; e && !t.closed && i2 < r.length; i2++)
            n(i2);
        };
      }
      ar.raceInit = $a;
    });
    var Ha = s((cn) => {
      Object.defineProperty(cn, "__esModule", { value: true });
      cn.range = void 0;
      var ih = P(), uh = N();
      function oh(r, t, e) {
        if (t == null && (t = r, r = 0), t <= 0)
          return uh.EMPTY;
        var n = t + r;
        return new ih.Observable(e ? function(i2) {
          var u = r;
          return e.schedule(function() {
            u < n ? (i2.next(u++), this.schedule()) : i2.complete();
          });
        } : function(i2) {
          for (var u = r; u < n && !i2.closed; )
            i2.next(u++);
          i2.complete();
        });
      }
      cn.range = oh;
    });
    var Xa = s((ln) => {
      Object.defineProperty(ln, "__esModule", { value: true });
      ln.using = void 0;
      var ah = P(), ch = q(), lh = N();
      function sh(r, t) {
        return new ah.Observable(function(e) {
          var n = r(), i2 = t(n), u = i2 ? ch.innerFrom(i2) : lh.EMPTY;
          return u.subscribe(e), function() {
            n && n.unsubscribe();
          };
        });
      }
      ln.using = sh;
    });
    var sn = s((ce) => {
      var fh = ce && ce.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, vh = ce && ce.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(ce, "__esModule", { value: true });
      ce.zip = void 0;
      var dh = P(), ph = q(), bh = Te(), _h = N(), hh = O(), yh = k();
      function mh() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = yh.popResultSelector(r), n = bh.argsOrArgArray(r);
        return n.length ? new dh.Observable(function(i2) {
          var u = n.map(function() {
            return [];
          }), o = n.map(function() {
            return false;
          });
          i2.add(function() {
            u = o = null;
          });
          for (var c = function(l) {
            ph.innerFrom(n[l]).subscribe(hh.createOperatorSubscriber(i2, function(v) {
              if (u[l].push(v), u.every(function(p) {
                return p.length;
              })) {
                var d = u.map(function(p) {
                  return p.shift();
                });
                i2.next(e ? e.apply(void 0, vh([], fh(d))) : d), u.some(function(p, y) {
                  return !p.length && o[y];
                }) && i2.complete();
              }
            }, function() {
              o[l] = true, !u[l].length && i2.complete();
            }));
          }, f = 0; !i2.closed && f < n.length; f++)
            c(f);
          return function() {
            u = o = null;
          };
        }) : _h.EMPTY;
      }
      ce.zip = mh;
    });
    var rc = s((ec) => {
      Object.defineProperty(ec, "__esModule", { value: true });
    });
    var Ru = s((fn) => {
      Object.defineProperty(fn, "__esModule", { value: true });
      fn.audit = void 0;
      var Oh = b(), gh = q(), tc = O();
      function qh(r) {
        return Oh.operate(function(t, e) {
          var n = false, i2 = null, u = null, o = false, c = function() {
            if (u == null || u.unsubscribe(), u = null, n) {
              n = false;
              var l = i2;
              i2 = null, e.next(l);
            }
            o && e.complete();
          }, f = function() {
            u = null, o && e.complete();
          };
          t.subscribe(tc.createOperatorSubscriber(e, function(l) {
            n = true, i2 = l, u || gh.innerFrom(r(l)).subscribe(u = tc.createOperatorSubscriber(e, c, f));
          }, function() {
            o = true, (!n || !u || u.closed) && e.complete();
          }));
        });
      }
      fn.audit = qh;
    });
    var nc = s((vn) => {
      Object.defineProperty(vn, "__esModule", { value: true });
      vn.auditTime = void 0;
      var Sh = x(), jh = Ru(), Ph = ae();
      function wh(r, t) {
        return t === void 0 && (t = Sh.asyncScheduler), jh.audit(function() {
          return Ph.timer(r, t);
        });
      }
      vn.auditTime = wh;
    });
    var uc = s((dn) => {
      Object.defineProperty(dn, "__esModule", { value: true });
      dn.buffer = void 0;
      var Ah = b(), Eh = E(), ic = O(), Mh = q();
      function Fh(r) {
        return Ah.operate(function(t, e) {
          var n = [];
          return t.subscribe(ic.createOperatorSubscriber(e, function(i2) {
            return n.push(i2);
          }, function() {
            e.next(n), e.complete();
          })), Mh.innerFrom(r).subscribe(ic.createOperatorSubscriber(e, function() {
            var i2 = n;
            n = [], e.next(i2);
          }, Eh.noop)), function() {
            n = null;
          };
        });
      }
      dn.buffer = Fh;
    });
    var oc = s((cr) => {
      var Wu = cr && cr.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(cr, "__esModule", { value: true });
      cr.bufferCount = void 0;
      var Ih = b(), Th = O(), xh = K();
      function kh(r, t) {
        return t === void 0 && (t = null), t = t ?? r, Ih.operate(function(e, n) {
          var i2 = [], u = 0;
          e.subscribe(Th.createOperatorSubscriber(n, function(o) {
            var c, f, l, v, d = null;
            u++ % t === 0 && i2.push([]);
            try {
              for (var p = Wu(i2), y = p.next(); !y.done; y = p.next()) {
                var h = y.value;
                h.push(o), r <= h.length && (d = d ?? [], d.push(h));
              }
            } catch (g) {
              c = { error: g };
            } finally {
              try {
                y && !y.done && (f = p.return) && f.call(p);
              } finally {
                if (c)
                  throw c.error;
              }
            }
            if (d)
              try {
                for (var _ = Wu(d), m = _.next(); !m.done; m = _.next()) {
                  var h = m.value;
                  xh.arrRemove(i2, h), n.next(h);
                }
              } catch (g) {
                l = { error: g };
              } finally {
                try {
                  m && !m.done && (v = _.return) && v.call(_);
                } finally {
                  if (l)
                    throw l.error;
                }
              }
          }, function() {
            var o, c;
            try {
              for (var f = Wu(i2), l = f.next(); !l.done; l = f.next()) {
                var v = l.value;
                n.next(v);
              }
            } catch (d) {
              o = { error: d };
            } finally {
              try {
                l && !l.done && (c = f.return) && c.call(f);
              } finally {
                if (o)
                  throw o.error;
              }
            }
            n.complete();
          }, void 0, function() {
            i2 = null;
          }));
        });
      }
      cr.bufferCount = kh;
    });
    var cc = s((lr) => {
      var Ch = lr && lr.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(lr, "__esModule", { value: true });
      lr.bufferTime = void 0;
      var Rh = C(), Wh = b(), Lh = O(), Nh = K(), Vh = x(), Uh = k(), ac = G();
      function zh(r) {
        for (var t, e, n = [], i2 = 1; i2 < arguments.length; i2++)
          n[i2 - 1] = arguments[i2];
        var u = (t = Uh.popScheduler(n)) !== null && t !== void 0 ? t : Vh.asyncScheduler, o = (e = n[0]) !== null && e !== void 0 ? e : null, c = n[1] || 1 / 0;
        return Wh.operate(function(f, l) {
          var v = [], d = false, p = function(_) {
            var m = _.buffer, g = _.subs;
            g.unsubscribe(), Nh.arrRemove(v, _), l.next(m), d && y();
          }, y = function() {
            if (v) {
              var _ = new Rh.Subscription();
              l.add(_);
              var m = [], g = { buffer: m, subs: _ };
              v.push(g), ac.executeSchedule(_, u, function() {
                return p(g);
              }, r);
            }
          };
          o !== null && o >= 0 ? ac.executeSchedule(l, u, y, o, true) : d = true, y();
          var h = Lh.createOperatorSubscriber(l, function(_) {
            var m, g, w = v.slice();
            try {
              for (var I = Ch(w), $ = I.next(); !$.done; $ = I.next()) {
                var ge = $.value, qe = ge.buffer;
                qe.push(_), c <= qe.length && p(ge);
              }
            } catch (Ts) {
              m = { error: Ts };
            } finally {
              try {
                $ && !$.done && (g = I.return) && g.call(I);
              } finally {
                if (m)
                  throw m.error;
              }
            }
          }, function() {
            for (; v != null && v.length; )
              l.next(v.shift().buffer);
            h == null || h.unsubscribe(), l.complete(), l.unsubscribe();
          }, void 0, function() {
            return v = null;
          });
          f.subscribe(h);
        });
      }
      lr.bufferTime = zh;
    });
    var fc = s((sr) => {
      var Yh = sr && sr.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(sr, "__esModule", { value: true });
      sr.bufferToggle = void 0;
      var Bh = C(), Dh = b(), lc = q(), Lu = O(), sc = E(), Kh = K();
      function Gh(r, t) {
        return Dh.operate(function(e, n) {
          var i2 = [];
          lc.innerFrom(r).subscribe(Lu.createOperatorSubscriber(n, function(u) {
            var o = [];
            i2.push(o);
            var c = new Bh.Subscription(), f = function() {
              Kh.arrRemove(i2, o), n.next(o), c.unsubscribe();
            };
            c.add(lc.innerFrom(t(u)).subscribe(Lu.createOperatorSubscriber(n, f, sc.noop)));
          }, sc.noop)), e.subscribe(Lu.createOperatorSubscriber(n, function(u) {
            var o, c;
            try {
              for (var f = Yh(i2), l = f.next(); !l.done; l = f.next()) {
                var v = l.value;
                v.push(u);
              }
            } catch (d) {
              o = { error: d };
            } finally {
              try {
                l && !l.done && (c = f.return) && c.call(f);
              } finally {
                if (o)
                  throw o.error;
              }
            }
          }, function() {
            for (; i2.length > 0; )
              n.next(i2.shift());
            n.complete();
          }));
        });
      }
      sr.bufferToggle = Gh;
    });
    var dc = s((pn) => {
      Object.defineProperty(pn, "__esModule", { value: true });
      pn.bufferWhen = void 0;
      var Qh = b(), Jh = E(), vc = O(), Zh = q();
      function $h(r) {
        return Qh.operate(function(t, e) {
          var n = null, i2 = null, u = function() {
            i2 == null || i2.unsubscribe();
            var o = n;
            n = [], o && e.next(o), Zh.innerFrom(r()).subscribe(i2 = vc.createOperatorSubscriber(e, u, Jh.noop));
          };
          u(), t.subscribe(vc.createOperatorSubscriber(e, function(o) {
            return n == null ? void 0 : n.push(o);
          }, function() {
            n && e.next(n), e.complete();
          }, void 0, function() {
            return n = i2 = null;
          }));
        });
      }
      pn.bufferWhen = $h;
    });
    var bc = s((bn) => {
      Object.defineProperty(bn, "__esModule", { value: true });
      bn.catchError = void 0;
      var Hh = q(), Xh = O(), ey = b();
      function pc(r) {
        return ey.operate(function(t, e) {
          var n = null, i2 = false, u;
          n = t.subscribe(Xh.createOperatorSubscriber(e, void 0, void 0, function(o) {
            u = Hh.innerFrom(r(o, pc(r)(t))), n ? (n.unsubscribe(), n = null, u.subscribe(e)) : i2 = true;
          })), i2 && (n.unsubscribe(), n = null, u.subscribe(e));
        });
      }
      bn.catchError = pc;
    });
    var Nu = s((_n) => {
      Object.defineProperty(_n, "__esModule", { value: true });
      _n.scanInternals = void 0;
      var ry = O();
      function ty(r, t, e, n, i2) {
        return function(u, o) {
          var c = e, f = t, l = 0;
          u.subscribe(ry.createOperatorSubscriber(o, function(v) {
            var d = l++;
            f = c ? r(f, v, d) : (c = true, v), n && o.next(f);
          }, i2 && function() {
            c && o.next(f), o.complete();
          }));
        };
      }
      _n.scanInternals = ty;
    });
    var fr = s((hn) => {
      Object.defineProperty(hn, "__esModule", { value: true });
      hn.reduce = void 0;
      var ny = Nu(), iy = b();
      function uy(r, t) {
        return iy.operate(ny.scanInternals(r, t, arguments.length >= 2, false, true));
      }
      hn.reduce = uy;
    });
    var Vu = s((yn) => {
      Object.defineProperty(yn, "__esModule", { value: true });
      yn.toArray = void 0;
      var oy = fr(), ay = b(), cy = function(r, t) {
        return r.push(t), r;
      };
      function ly() {
        return ay.operate(function(r, t) {
          oy.reduce(cy, [])(r).subscribe(t);
        });
      }
      yn.toArray = ly;
    });
    var Uu = s((mn) => {
      Object.defineProperty(mn, "__esModule", { value: true });
      mn.joinAllInternals = void 0;
      var sy = M(), fy = ue(), vy = mr(), dy = Z(), py = Vu();
      function by(r, t) {
        return vy.pipe(py.toArray(), dy.mergeMap(function(e) {
          return r(e);
        }), t ? fy.mapOneOrManyArgs(t) : sy.identity);
      }
      mn.joinAllInternals = by;
    });
    var zu = s((On) => {
      Object.defineProperty(On, "__esModule", { value: true });
      On.combineLatestAll = void 0;
      var _y = Nt(), hy = Uu();
      function yy(r) {
        return hy.joinAllInternals(_y.combineLatest, r);
      }
      On.combineLatestAll = yy;
    });
    var _c = s((gn) => {
      Object.defineProperty(gn, "__esModule", { value: true });
      gn.combineAll = void 0;
      var my = zu();
      gn.combineAll = my.combineLatestAll;
    });
    var Oc = s((le) => {
      var hc = le && le.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, yc = le && le.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(le, "__esModule", { value: true });
      le.combineLatest = void 0;
      var Oy = Nt(), gy = b(), qy = Te(), Sy = ue(), jy = mr(), Py = k();
      function mc() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = Py.popResultSelector(r);
        return e ? jy.pipe(mc.apply(void 0, yc([], hc(r))), Sy.mapOneOrManyArgs(e)) : gy.operate(function(n, i2) {
          Oy.combineLatestInit(yc([n], hc(qy.argsOrArgArray(r))))(i2);
        });
      }
      le.combineLatest = mc;
    });
    var gc = s((se) => {
      var wy = se && se.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Ay = se && se.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(se, "__esModule", { value: true });
      se.combineLatestWith = void 0;
      var Ey = Oc();
      function My() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return Ey.combineLatest.apply(void 0, Ay([], wy(r)));
      }
      se.combineLatestWith = My;
    });
    var Yu = s((qn) => {
      Object.defineProperty(qn, "__esModule", { value: true });
      qn.concatMap = void 0;
      var qc = Z(), Fy = j();
      function Iy(r, t) {
        return Fy.isFunction(t) ? qc.mergeMap(r, t, 1) : qc.mergeMap(r, 1);
      }
      qn.concatMap = Iy;
    });
    var jc = s((Sn) => {
      Object.defineProperty(Sn, "__esModule", { value: true });
      Sn.concatMapTo = void 0;
      var Sc = Yu(), Ty = j();
      function xy(r, t) {
        return Ty.isFunction(t) ? Sc.concatMap(function() {
          return r;
        }, t) : Sc.concatMap(function() {
          return r;
        });
      }
      Sn.concatMapTo = xy;
    });
    var Pc = s((fe) => {
      var ky = fe && fe.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Cy = fe && fe.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(fe, "__esModule", { value: true });
      fe.concat = void 0;
      var Ry = b(), Wy = Dt(), Ly = k(), Ny = Q();
      function Vy() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = Ly.popScheduler(r);
        return Ry.operate(function(n, i2) {
          Wy.concatAll()(Ny.from(Cy([n], ky(r)), e)).subscribe(i2);
        });
      }
      fe.concat = Vy;
    });
    var wc = s((ve) => {
      var Uy = ve && ve.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, zy = ve && ve.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(ve, "__esModule", { value: true });
      ve.concatWith = void 0;
      var Yy = Pc();
      function By() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return Yy.concat.apply(void 0, zy([], Uy(r)));
      }
      ve.concatWith = By;
    });
    var Ac = s((jn) => {
      Object.defineProperty(jn, "__esModule", { value: true });
      jn.fromSubscribable = void 0;
      var Dy = P();
      function Ky(r) {
        return new Dy.Observable(function(t) {
          return r.subscribe(t);
        });
      }
      jn.fromSubscribable = Ky;
    });
    var wn = s((Pn) => {
      Object.defineProperty(Pn, "__esModule", { value: true });
      Pn.connect = void 0;
      var Gy = F(), Qy = q(), Jy = b(), Zy = Ac(), $y = { connector: function() {
        return new Gy.Subject();
      } };
      function Hy(r, t) {
        t === void 0 && (t = $y);
        var e = t.connector;
        return Jy.operate(function(n, i2) {
          var u = e();
          Qy.innerFrom(r(Zy.fromSubscribable(u))).subscribe(i2), i2.add(n.subscribe(u));
        });
      }
      Pn.connect = Hy;
    });
    var Ec = s((An) => {
      Object.defineProperty(An, "__esModule", { value: true });
      An.count = void 0;
      var Xy = fr();
      function em(r) {
        return Xy.reduce(function(t, e, n) {
          return !r || r(e, n) ? t + 1 : t;
        }, 0);
      }
      An.count = em;
    });
    var Fc = s((En) => {
      Object.defineProperty(En, "__esModule", { value: true });
      En.debounce = void 0;
      var rm = b(), tm = E(), Mc = O(), nm = q();
      function im(r) {
        return rm.operate(function(t, e) {
          var n = false, i2 = null, u = null, o = function() {
            if (u == null || u.unsubscribe(), u = null, n) {
              n = false;
              var c = i2;
              i2 = null, e.next(c);
            }
          };
          t.subscribe(Mc.createOperatorSubscriber(e, function(c) {
            u == null || u.unsubscribe(), n = true, i2 = c, u = Mc.createOperatorSubscriber(e, o, tm.noop), nm.innerFrom(r(c)).subscribe(u);
          }, function() {
            o(), e.complete();
          }, void 0, function() {
            i2 = u = null;
          }));
        });
      }
      En.debounce = im;
    });
    var Ic = s((Mn) => {
      Object.defineProperty(Mn, "__esModule", { value: true });
      Mn.debounceTime = void 0;
      var um = x(), om = b(), am = O();
      function cm(r, t) {
        return t === void 0 && (t = um.asyncScheduler), om.operate(function(e, n) {
          var i2 = null, u = null, o = null, c = function() {
            if (i2) {
              i2.unsubscribe(), i2 = null;
              var l = u;
              u = null, n.next(l);
            }
          };
          function f() {
            var l = o + r, v = t.now();
            if (v < l) {
              i2 = this.schedule(void 0, l - v), n.add(i2);
              return;
            }
            c();
          }
          e.subscribe(am.createOperatorSubscriber(n, function(l) {
            u = l, o = t.now(), i2 || (i2 = t.schedule(f, r), n.add(i2));
          }, function() {
            c(), n.complete();
          }, void 0, function() {
            u = i2 = null;
          }));
        });
      }
      Mn.debounceTime = cm;
    });
    var Mr = s((Fn) => {
      Object.defineProperty(Fn, "__esModule", { value: true });
      Fn.defaultIfEmpty = void 0;
      var lm = b(), sm = O();
      function fm(r) {
        return lm.operate(function(t, e) {
          var n = false;
          t.subscribe(sm.createOperatorSubscriber(e, function(i2) {
            n = true, e.next(i2);
          }, function() {
            n || e.next(r), e.complete();
          }));
        });
      }
      Fn.defaultIfEmpty = fm;
    });
    var Fr = s((In) => {
      Object.defineProperty(In, "__esModule", { value: true });
      In.take = void 0;
      var vm = N(), dm = b(), pm = O();
      function bm(r) {
        return r <= 0 ? function() {
          return vm.EMPTY;
        } : dm.operate(function(t, e) {
          var n = 0;
          t.subscribe(pm.createOperatorSubscriber(e, function(i2) {
            ++n <= r && (e.next(i2), r <= n && e.complete());
          }));
        });
      }
      In.take = bm;
    });
    var Bu = s((Tn) => {
      Object.defineProperty(Tn, "__esModule", { value: true });
      Tn.ignoreElements = void 0;
      var _m = b(), hm = O(), ym = E();
      function mm() {
        return _m.operate(function(r, t) {
          r.subscribe(hm.createOperatorSubscriber(t, ym.noop));
        });
      }
      Tn.ignoreElements = mm;
    });
    var Du = s((xn) => {
      Object.defineProperty(xn, "__esModule", { value: true });
      xn.mapTo = void 0;
      var Om = ne();
      function gm(r) {
        return Om.map(function() {
          return r;
        });
      }
      xn.mapTo = gm;
    });
    var Ku = s((kn) => {
      Object.defineProperty(kn, "__esModule", { value: true });
      kn.delayWhen = void 0;
      var qm = Ar(), Tc = Fr(), Sm = Bu(), jm = Du(), Pm = Z(), wm = q();
      function xc(r, t) {
        return t ? function(e) {
          return qm.concat(t.pipe(Tc.take(1), Sm.ignoreElements()), e.pipe(xc(r)));
        } : Pm.mergeMap(function(e, n) {
          return wm.innerFrom(r(e, n)).pipe(Tc.take(1), jm.mapTo(e));
        });
      }
      kn.delayWhen = xc;
    });
    var kc = s((Cn) => {
      Object.defineProperty(Cn, "__esModule", { value: true });
      Cn.delay = void 0;
      var Am = x(), Em = Ku(), Mm = ae();
      function Fm(r, t) {
        t === void 0 && (t = Am.asyncScheduler);
        var e = Mm.timer(r, t);
        return Em.delayWhen(function() {
          return e;
        });
      }
      Cn.delay = Fm;
    });
    var Cc = s((Rn) => {
      Object.defineProperty(Rn, "__esModule", { value: true });
      Rn.dematerialize = void 0;
      var Im = St(), Tm = b(), xm = O();
      function km() {
        return Tm.operate(function(r, t) {
          r.subscribe(xm.createOperatorSubscriber(t, function(e) {
            return Im.observeNotification(e, t);
          }));
        });
      }
      Rn.dematerialize = km;
    });
    var Wc = s((Wn) => {
      Object.defineProperty(Wn, "__esModule", { value: true });
      Wn.distinct = void 0;
      var Cm = b(), Rc = O(), Rm = E(), Wm = q();
      function Lm(r, t) {
        return Cm.operate(function(e, n) {
          var i2 = /* @__PURE__ */ new Set();
          e.subscribe(Rc.createOperatorSubscriber(n, function(u) {
            var o = r ? r(u) : u;
            i2.has(o) || (i2.add(o), n.next(u));
          })), t && Wm.innerFrom(t).subscribe(Rc.createOperatorSubscriber(n, function() {
            return i2.clear();
          }, Rm.noop));
        });
      }
      Wn.distinct = Lm;
    });
    var Gu = s((Ln) => {
      Object.defineProperty(Ln, "__esModule", { value: true });
      Ln.distinctUntilChanged = void 0;
      var Nm = M(), Vm = b(), Um = O();
      function zm(r, t) {
        return t === void 0 && (t = Nm.identity), r = r ?? Ym, Vm.operate(function(e, n) {
          var i2, u = true;
          e.subscribe(Um.createOperatorSubscriber(n, function(o) {
            var c = t(o);
            (u || !r(i2, c)) && (u = false, i2 = c, n.next(o));
          }));
        });
      }
      Ln.distinctUntilChanged = zm;
      function Ym(r, t) {
        return r === t;
      }
    });
    var Lc = s((Nn) => {
      Object.defineProperty(Nn, "__esModule", { value: true });
      Nn.distinctUntilKeyChanged = void 0;
      var Bm = Gu();
      function Dm(r, t) {
        return Bm.distinctUntilChanged(function(e, n) {
          return t ? t(e[r], n[r]) : e[r] === n[r];
        });
      }
      Nn.distinctUntilKeyChanged = Dm;
    });
    var Ir = s((Vn) => {
      Object.defineProperty(Vn, "__esModule", { value: true });
      Vn.throwIfEmpty = void 0;
      var Km = te(), Gm = b(), Qm = O();
      function Jm(r) {
        return r === void 0 && (r = Zm), Gm.operate(function(t, e) {
          var n = false;
          t.subscribe(Qm.createOperatorSubscriber(e, function(i2) {
            n = true, e.next(i2);
          }, function() {
            return n ? e.complete() : e.error(r());
          }));
        });
      }
      Vn.throwIfEmpty = Jm;
      function Zm() {
        return new Km.EmptyError();
      }
    });
    var Vc = s((Un) => {
      Object.defineProperty(Un, "__esModule", { value: true });
      Un.elementAt = void 0;
      var Nc = ju(), $m = xe(), Hm = Ir(), Xm = Mr(), eO = Fr();
      function rO(r, t) {
        if (r < 0)
          throw new Nc.ArgumentOutOfRangeError();
        var e = arguments.length >= 2;
        return function(n) {
          return n.pipe($m.filter(function(i2, u) {
            return u === r;
          }), eO.take(1), e ? Xm.defaultIfEmpty(t) : Hm.throwIfEmpty(function() {
            return new Nc.ArgumentOutOfRangeError();
          }));
        };
      }
      Un.elementAt = rO;
    });
    var Uc = s((de) => {
      var tO = de && de.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, nO = de && de.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(de, "__esModule", { value: true });
      de.endWith = void 0;
      var iO = Ar(), uO = gt();
      function oO() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return function(e) {
          return iO.concat(e, uO.of.apply(void 0, nO([], tO(r))));
        };
      }
      de.endWith = oO;
    });
    var zc = s((zn) => {
      Object.defineProperty(zn, "__esModule", { value: true });
      zn.every = void 0;
      var aO = b(), cO = O();
      function lO(r, t) {
        return aO.operate(function(e, n) {
          var i2 = 0;
          e.subscribe(cO.createOperatorSubscriber(n, function(u) {
            r.call(t, u, i2++, e) || (n.next(false), n.complete());
          }, function() {
            n.next(true), n.complete();
          }));
        });
      }
      zn.every = lO;
    });
    var Qu = s((Yn) => {
      Object.defineProperty(Yn, "__esModule", { value: true });
      Yn.exhaustMap = void 0;
      var sO = ne(), Yc = q(), fO = b(), Bc = O();
      function Dc(r, t) {
        return t ? function(e) {
          return e.pipe(Dc(function(n, i2) {
            return Yc.innerFrom(r(n, i2)).pipe(sO.map(function(u, o) {
              return t(n, u, i2, o);
            }));
          }));
        } : fO.operate(function(e, n) {
          var i2 = 0, u = null, o = false;
          e.subscribe(Bc.createOperatorSubscriber(n, function(c) {
            u || (u = Bc.createOperatorSubscriber(n, void 0, function() {
              u = null, o && n.complete();
            }), Yc.innerFrom(r(c, i2++)).subscribe(u));
          }, function() {
            o = true, !u && n.complete();
          }));
        });
      }
      Yn.exhaustMap = Dc;
    });
    var Ju = s((Bn) => {
      Object.defineProperty(Bn, "__esModule", { value: true });
      Bn.exhaustAll = void 0;
      var vO = Qu(), dO = M();
      function pO() {
        return vO.exhaustMap(dO.identity);
      }
      Bn.exhaustAll = pO;
    });
    var Kc = s((Dn) => {
      Object.defineProperty(Dn, "__esModule", { value: true });
      Dn.exhaust = void 0;
      var bO = Ju();
      Dn.exhaust = bO.exhaustAll;
    });
    var Gc = s((Kn) => {
      Object.defineProperty(Kn, "__esModule", { value: true });
      Kn.expand = void 0;
      var _O = b(), hO = Ut();
      function yO(r, t, e) {
        return t === void 0 && (t = 1 / 0), t = (t || 0) < 1 ? 1 / 0 : t, _O.operate(function(n, i2) {
          return hO.mergeInternals(n, i2, r, t, void 0, true, e);
        });
      }
      Kn.expand = yO;
    });
    var Qc = s((Gn) => {
      Object.defineProperty(Gn, "__esModule", { value: true });
      Gn.finalize = void 0;
      var mO = b();
      function OO(r) {
        return mO.operate(function(t, e) {
          try {
            t.subscribe(e);
          } finally {
            e.add(r);
          }
        });
      }
      Gn.finalize = OO;
    });
    var Zu = s((vr) => {
      Object.defineProperty(vr, "__esModule", { value: true });
      vr.createFind = vr.find = void 0;
      var gO = b(), qO = O();
      function SO(r, t) {
        return gO.operate(Jc(r, t, "value"));
      }
      vr.find = SO;
      function Jc(r, t, e) {
        var n = e === "index";
        return function(i2, u) {
          var o = 0;
          i2.subscribe(qO.createOperatorSubscriber(u, function(c) {
            var f = o++;
            r.call(t, c, f, i2) && (u.next(n ? f : c), u.complete());
          }, function() {
            u.next(n ? -1 : void 0), u.complete();
          }));
        };
      }
      vr.createFind = Jc;
    });
    var Zc = s((Qn) => {
      Object.defineProperty(Qn, "__esModule", { value: true });
      Qn.findIndex = void 0;
      var jO = b(), PO = Zu();
      function wO(r, t) {
        return jO.operate(PO.createFind(r, t, "index"));
      }
      Qn.findIndex = wO;
    });
    var $c = s((Jn) => {
      Object.defineProperty(Jn, "__esModule", { value: true });
      Jn.first = void 0;
      var AO = te(), EO = xe(), MO = Fr(), FO = Mr(), IO = Ir(), TO = M();
      function xO(r, t) {
        var e = arguments.length >= 2;
        return function(n) {
          return n.pipe(r ? EO.filter(function(i2, u) {
            return r(i2, u, n);
          }) : TO.identity, MO.take(1), e ? FO.defaultIfEmpty(t) : IO.throwIfEmpty(function() {
            return new AO.EmptyError();
          }));
        };
      }
      Jn.first = xO;
    });
    var Xc = s((Zn) => {
      Object.defineProperty(Zn, "__esModule", { value: true });
      Zn.groupBy = void 0;
      var kO = P(), CO = q(), RO = F(), WO = b(), Hc = O();
      function LO(r, t, e, n) {
        return WO.operate(function(i2, u) {
          var o;
          !t || typeof t == "function" ? o = t : (e = t.duration, o = t.element, n = t.connector);
          var c = /* @__PURE__ */ new Map(), f = function(h) {
            c.forEach(h), h(u);
          }, l = function(h) {
            return f(function(_) {
              return _.error(h);
            });
          }, v = 0, d = false, p = new Hc.OperatorSubscriber(u, function(h) {
            try {
              var _ = r(h), m = c.get(_);
              if (!m) {
                c.set(_, m = n ? n() : new RO.Subject());
                var g = y(_, m);
                if (u.next(g), e) {
                  var w = Hc.createOperatorSubscriber(m, function() {
                    m.complete(), w == null || w.unsubscribe();
                  }, void 0, void 0, function() {
                    return c.delete(_);
                  });
                  p.add(CO.innerFrom(e(g)).subscribe(w));
                }
              }
              m.next(o ? o(h) : h);
            } catch (I) {
              l(I);
            }
          }, function() {
            return f(function(h) {
              return h.complete();
            });
          }, l, function() {
            return c.clear();
          }, function() {
            return d = true, v === 0;
          });
          i2.subscribe(p);
          function y(h, _) {
            var m = new kO.Observable(function(g) {
              v++;
              var w = _.subscribe(g);
              return function() {
                w.unsubscribe(), --v === 0 && d && p.unsubscribe();
              };
            });
            return m.key = h, m;
          }
        });
      }
      Zn.groupBy = LO;
    });
    var el = s(($n) => {
      Object.defineProperty($n, "__esModule", { value: true });
      $n.isEmpty = void 0;
      var NO = b(), VO = O();
      function UO() {
        return NO.operate(function(r, t) {
          r.subscribe(VO.createOperatorSubscriber(t, function() {
            t.next(false), t.complete();
          }, function() {
            t.next(true), t.complete();
          }));
        });
      }
      $n.isEmpty = UO;
    });
    var $u = s((dr) => {
      var zO = dr && dr.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(dr, "__esModule", { value: true });
      dr.takeLast = void 0;
      var YO = N(), BO = b(), DO = O();
      function KO(r) {
        return r <= 0 ? function() {
          return YO.EMPTY;
        } : BO.operate(function(t, e) {
          var n = [];
          t.subscribe(DO.createOperatorSubscriber(e, function(i2) {
            n.push(i2), r < n.length && n.shift();
          }, function() {
            var i2, u;
            try {
              for (var o = zO(n), c = o.next(); !c.done; c = o.next()) {
                var f = c.value;
                e.next(f);
              }
            } catch (l) {
              i2 = { error: l };
            } finally {
              try {
                c && !c.done && (u = o.return) && u.call(o);
              } finally {
                if (i2)
                  throw i2.error;
              }
            }
            e.complete();
          }, void 0, function() {
            n = null;
          }));
        });
      }
      dr.takeLast = KO;
    });
    var rl = s((Hn) => {
      Object.defineProperty(Hn, "__esModule", { value: true });
      Hn.last = void 0;
      var GO = te(), QO = xe(), JO = $u(), ZO = Ir(), $O = Mr(), HO = M();
      function XO(r, t) {
        var e = arguments.length >= 2;
        return function(n) {
          return n.pipe(r ? QO.filter(function(i2, u) {
            return r(i2, u, n);
          }) : HO.identity, JO.takeLast(1), e ? $O.defaultIfEmpty(t) : ZO.throwIfEmpty(function() {
            return new GO.EmptyError();
          }));
        };
      }
      Hn.last = XO;
    });
    var tl = s((Xn) => {
      Object.defineProperty(Xn, "__esModule", { value: true });
      Xn.materialize = void 0;
      var Hu = St(), eg = b(), rg = O();
      function tg() {
        return eg.operate(function(r, t) {
          r.subscribe(rg.createOperatorSubscriber(t, function(e) {
            t.next(Hu.Notification.createNext(e));
          }, function() {
            t.next(Hu.Notification.createComplete()), t.complete();
          }, function(e) {
            t.next(Hu.Notification.createError(e)), t.complete();
          }));
        });
      }
      Xn.materialize = tg;
    });
    var nl = s((ei) => {
      Object.defineProperty(ei, "__esModule", { value: true });
      ei.max = void 0;
      var ng = fr(), ig = j();
      function ug(r) {
        return ng.reduce(ig.isFunction(r) ? function(t, e) {
          return r(t, e) > 0 ? t : e;
        } : function(t, e) {
          return t > e ? t : e;
        });
      }
      ei.max = ug;
    });
    var il = s((ri) => {
      Object.defineProperty(ri, "__esModule", { value: true });
      ri.flatMap = void 0;
      var og = Z();
      ri.flatMap = og.mergeMap;
    });
    var ol = s((ti) => {
      Object.defineProperty(ti, "__esModule", { value: true });
      ti.mergeMapTo = void 0;
      var ul = Z(), ag = j();
      function cg(r, t, e) {
        return e === void 0 && (e = 1 / 0), ag.isFunction(t) ? ul.mergeMap(function() {
          return r;
        }, t, e) : (typeof t == "number" && (e = t), ul.mergeMap(function() {
          return r;
        }, e));
      }
      ti.mergeMapTo = cg;
    });
    var al = s((ni) => {
      Object.defineProperty(ni, "__esModule", { value: true });
      ni.mergeScan = void 0;
      var lg = b(), sg = Ut();
      function fg(r, t, e) {
        return e === void 0 && (e = 1 / 0), lg.operate(function(n, i2) {
          var u = t;
          return sg.mergeInternals(n, i2, function(o, c) {
            return r(u, o, c);
          }, e, function(o) {
            u = o;
          }, false, void 0, function() {
            return u = null;
          });
        });
      }
      ni.mergeScan = fg;
    });
    var ll = s((pe) => {
      var vg = pe && pe.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, dg = pe && pe.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(pe, "__esModule", { value: true });
      pe.merge = void 0;
      var pg = b(), bg = Te(), _g = wr(), cl = k(), hg = Q();
      function yg() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = cl.popScheduler(r), n = cl.popNumber(r, 1 / 0);
        return r = bg.argsOrArgArray(r), pg.operate(function(i2, u) {
          _g.mergeAll(n)(hg.from(dg([i2], vg(r)), e)).subscribe(u);
        });
      }
      pe.merge = yg;
    });
    var sl = s((be) => {
      var mg = be && be.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Og = be && be.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(be, "__esModule", { value: true });
      be.mergeWith = void 0;
      var gg = ll();
      function qg() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return gg.merge.apply(void 0, Og([], mg(r)));
      }
      be.mergeWith = qg;
    });
    var fl = s((ii) => {
      Object.defineProperty(ii, "__esModule", { value: true });
      ii.min = void 0;
      var Sg = fr(), jg = j();
      function Pg(r) {
        return Sg.reduce(jg.isFunction(r) ? function(t, e) {
          return r(t, e) < 0 ? t : e;
        } : function(t, e) {
          return t < e ? t : e;
        });
      }
      ii.min = Pg;
    });
    var oi = s((ui) => {
      Object.defineProperty(ui, "__esModule", { value: true });
      ui.multicast = void 0;
      var wg = Or(), vl = j(), Ag = wn();
      function Eg(r, t) {
        var e = vl.isFunction(r) ? r : function() {
          return r;
        };
        return vl.isFunction(t) ? Ag.connect(t, { connector: e }) : function(n) {
          return new wg.ConnectableObservable(n, e);
        };
      }
      ui.multicast = Eg;
    });
    var pl = s((D) => {
      var Mg = D && D.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Fg = D && D.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(D, "__esModule", { value: true });
      D.onErrorResumeNext = D.onErrorResumeNextWith = void 0;
      var Ig = Te(), Tg = ku();
      function dl() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = Ig.argsOrArgArray(r);
        return function(n) {
          return Tg.onErrorResumeNext.apply(void 0, Fg([n], Mg(e)));
        };
      }
      D.onErrorResumeNextWith = dl;
      D.onErrorResumeNext = dl;
    });
    var bl = s((ai) => {
      Object.defineProperty(ai, "__esModule", { value: true });
      ai.pairwise = void 0;
      var xg = b(), kg = O();
      function Cg() {
        return xg.operate(function(r, t) {
          var e, n = false;
          r.subscribe(kg.createOperatorSubscriber(t, function(i2) {
            var u = e;
            e = i2, n && t.next([u, i2]), n = true;
          }));
        });
      }
      ai.pairwise = Cg;
    });
    var _l = s((ci) => {
      Object.defineProperty(ci, "__esModule", { value: true });
      ci.pluck = void 0;
      var Rg = ne();
      function Wg() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = r.length;
        if (e === 0)
          throw new Error("list of properties cannot be empty.");
        return Rg.map(function(n) {
          for (var i2 = n, u = 0; u < e; u++) {
            var o = i2 == null ? void 0 : i2[r[u]];
            if (typeof o < "u")
              i2 = o;
            else
              return;
          }
          return i2;
        });
      }
      ci.pluck = Wg;
    });
    var hl = s((li) => {
      Object.defineProperty(li, "__esModule", { value: true });
      li.publish = void 0;
      var Lg = F(), Ng = oi(), Vg = wn();
      function Ug(r) {
        return r ? function(t) {
          return Vg.connect(r)(t);
        } : function(t) {
          return Ng.multicast(new Lg.Subject())(t);
        };
      }
      li.publish = Ug;
    });
    var yl = s((si) => {
      Object.defineProperty(si, "__esModule", { value: true });
      si.publishBehavior = void 0;
      var zg = au(), Yg = Or();
      function Bg(r) {
        return function(t) {
          var e = new zg.BehaviorSubject(r);
          return new Yg.ConnectableObservable(t, function() {
            return e;
          });
        };
      }
      si.publishBehavior = Bg;
    });
    var ml = s((fi) => {
      Object.defineProperty(fi, "__esModule", { value: true });
      fi.publishLast = void 0;
      var Dg = $r(), Kg = Or();
      function Gg() {
        return function(r) {
          var t = new Dg.AsyncSubject();
          return new Kg.ConnectableObservable(r, function() {
            return t;
          });
        };
      }
      fi.publishLast = Gg;
    });
    var gl = s((vi) => {
      Object.defineProperty(vi, "__esModule", { value: true });
      vi.publishReplay = void 0;
      var Qg = Zr(), Jg = oi(), Ol = j();
      function Zg(r, t, e, n) {
        e && !Ol.isFunction(e) && (n = e);
        var i2 = Ol.isFunction(e) ? e : void 0;
        return function(u) {
          return Jg.multicast(new Qg.ReplaySubject(r, t, n), i2)(u);
        };
      }
      vi.publishReplay = Zg;
    });
    var ql = s((_e) => {
      var $g = _e && _e.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Hg = _e && _e.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(_e, "__esModule", { value: true });
      _e.raceWith = void 0;
      var Xg = Cu(), e0 = b(), r0 = M();
      function t0() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return r.length ? e0.operate(function(e, n) {
          Xg.raceInit(Hg([e], $g(r)))(n);
        }) : r0.identity;
      }
      _e.raceWith = t0;
    });
    var jl = s((di) => {
      Object.defineProperty(di, "__esModule", { value: true });
      di.repeat = void 0;
      var n0 = N(), i0 = b(), Sl = O(), u0 = q(), o0 = ae();
      function a0(r) {
        var t, e = 1 / 0, n;
        return r != null && (typeof r == "object" ? (t = r.count, e = t === void 0 ? 1 / 0 : t, n = r.delay) : e = r), e <= 0 ? function() {
          return n0.EMPTY;
        } : i0.operate(function(i2, u) {
          var o = 0, c, f = function() {
            if (c == null || c.unsubscribe(), c = null, n != null) {
              var v = typeof n == "number" ? o0.timer(n) : u0.innerFrom(n(o)), d = Sl.createOperatorSubscriber(u, function() {
                d.unsubscribe(), l();
              });
              v.subscribe(d);
            } else
              l();
          }, l = function() {
            var v = false;
            c = i2.subscribe(Sl.createOperatorSubscriber(u, void 0, function() {
              ++o < e ? c ? f() : v = true : u.complete();
            })), v && f();
          };
          l();
        });
      }
      di.repeat = a0;
    });
    var wl = s((pi) => {
      Object.defineProperty(pi, "__esModule", { value: true });
      pi.repeatWhen = void 0;
      var c0 = q(), l0 = F(), s0 = b(), Pl = O();
      function f0(r) {
        return s0.operate(function(t, e) {
          var n, i2 = false, u, o = false, c = false, f = function() {
            return c && o && (e.complete(), true);
          }, l = function() {
            return u || (u = new l0.Subject(), c0.innerFrom(r(u)).subscribe(Pl.createOperatorSubscriber(e, function() {
              n ? v() : i2 = true;
            }, function() {
              o = true, f();
            }))), u;
          }, v = function() {
            c = false, n = t.subscribe(Pl.createOperatorSubscriber(e, void 0, function() {
              c = true, !f() && l().next();
            })), i2 && (n.unsubscribe(), n = null, i2 = false, v());
          };
          v();
        });
      }
      pi.repeatWhen = f0;
    });
    var El = s((bi) => {
      Object.defineProperty(bi, "__esModule", { value: true });
      bi.retry = void 0;
      var v0 = b(), Al = O(), d0 = M(), p0 = ae(), b0 = q();
      function _0(r) {
        r === void 0 && (r = 1 / 0);
        var t;
        r && typeof r == "object" ? t = r : t = { count: r };
        var e = t.count, n = e === void 0 ? 1 / 0 : e, i2 = t.delay, u = t.resetOnSuccess, o = u === void 0 ? false : u;
        return n <= 0 ? d0.identity : v0.operate(function(c, f) {
          var l = 0, v, d = function() {
            var p = false;
            v = c.subscribe(Al.createOperatorSubscriber(f, function(y) {
              o && (l = 0), f.next(y);
            }, void 0, function(y) {
              if (l++ < n) {
                var h = function() {
                  v ? (v.unsubscribe(), v = null, d()) : p = true;
                };
                if (i2 != null) {
                  var _ = typeof i2 == "number" ? p0.timer(i2) : b0.innerFrom(i2(y, l)), m = Al.createOperatorSubscriber(f, function() {
                    m.unsubscribe(), h();
                  }, function() {
                    f.complete();
                  });
                  _.subscribe(m);
                } else
                  h();
              } else
                f.error(y);
            })), p && (v.unsubscribe(), v = null, d());
          };
          d();
        });
      }
      bi.retry = _0;
    });
    var Fl = s((_i) => {
      Object.defineProperty(_i, "__esModule", { value: true });
      _i.retryWhen = void 0;
      var h0 = q(), y0 = F(), m0 = b(), Ml = O();
      function O0(r) {
        return m0.operate(function(t, e) {
          var n, i2 = false, u, o = function() {
            n = t.subscribe(Ml.createOperatorSubscriber(e, void 0, void 0, function(c) {
              u || (u = new y0.Subject(), h0.innerFrom(r(u)).subscribe(Ml.createOperatorSubscriber(e, function() {
                return n ? o() : i2 = true;
              }))), u && u.next(c);
            })), i2 && (n.unsubscribe(), n = null, i2 = false, o());
          };
          o();
        });
      }
      _i.retryWhen = O0;
    });
    var Xu = s((hi) => {
      Object.defineProperty(hi, "__esModule", { value: true });
      hi.sample = void 0;
      var g0 = q(), q0 = b(), S0 = E(), Il = O();
      function j0(r) {
        return q0.operate(function(t, e) {
          var n = false, i2 = null;
          t.subscribe(Il.createOperatorSubscriber(e, function(u) {
            n = true, i2 = u;
          })), g0.innerFrom(r).subscribe(Il.createOperatorSubscriber(e, function() {
            if (n) {
              n = false;
              var u = i2;
              i2 = null, e.next(u);
            }
          }, S0.noop));
        });
      }
      hi.sample = j0;
    });
    var Tl = s((yi) => {
      Object.defineProperty(yi, "__esModule", { value: true });
      yi.sampleTime = void 0;
      var P0 = x(), w0 = Xu(), A0 = Tu();
      function E0(r, t) {
        return t === void 0 && (t = P0.asyncScheduler), w0.sample(A0.interval(r, t));
      }
      yi.sampleTime = E0;
    });
    var xl = s((mi) => {
      Object.defineProperty(mi, "__esModule", { value: true });
      mi.scan = void 0;
      var M0 = b(), F0 = Nu();
      function I0(r, t) {
        return M0.operate(F0.scanInternals(r, t, arguments.length >= 2, true));
      }
      mi.scan = I0;
    });
    var Cl = s((Oi) => {
      Object.defineProperty(Oi, "__esModule", { value: true });
      Oi.sequenceEqual = void 0;
      var T0 = b(), x0 = O(), k0 = q();
      function C0(r, t) {
        return t === void 0 && (t = function(e, n) {
          return e === n;
        }), T0.operate(function(e, n) {
          var i2 = kl(), u = kl(), o = function(f) {
            n.next(f), n.complete();
          }, c = function(f, l) {
            var v = x0.createOperatorSubscriber(n, function(d) {
              var p = l.buffer, y = l.complete;
              p.length === 0 ? y ? o(false) : f.buffer.push(d) : !t(d, p.shift()) && o(false);
            }, function() {
              f.complete = true;
              var d = l.complete, p = l.buffer;
              d && o(p.length === 0), v == null || v.unsubscribe();
            });
            return v;
          };
          e.subscribe(c(i2, u)), k0.innerFrom(r).subscribe(c(u, i2));
        });
      }
      Oi.sequenceEqual = C0;
      function kl() {
        return { buffer: [], complete: false };
      }
    });
    var ro = s((he) => {
      var R0 = he && he.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, W0 = he && he.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(he, "__esModule", { value: true });
      he.share = void 0;
      var Rl = q(), L0 = F(), Wl = Re(), N0 = b();
      function V0(r) {
        r === void 0 && (r = {});
        var t = r.connector, e = t === void 0 ? function() {
          return new L0.Subject();
        } : t, n = r.resetOnError, i2 = n === void 0 ? true : n, u = r.resetOnComplete, o = u === void 0 ? true : u, c = r.resetOnRefCountZero, f = c === void 0 ? true : c;
        return function(l) {
          var v, d, p, y = 0, h = false, _ = false, m = function() {
            d == null || d.unsubscribe(), d = void 0;
          }, g = function() {
            m(), v = p = void 0, h = _ = false;
          }, w = function() {
            var I = v;
            g(), I == null || I.unsubscribe();
          };
          return N0.operate(function(I, $) {
            y++, !_ && !h && m();
            var ge = p = p ?? e();
            $.add(function() {
              y--, y === 0 && !_ && !h && (d = eo(w, f));
            }), ge.subscribe($), !v && y > 0 && (v = new Wl.SafeSubscriber({ next: function(qe) {
              return ge.next(qe);
            }, error: function(qe) {
              _ = true, m(), d = eo(g, i2, qe), ge.error(qe);
            }, complete: function() {
              h = true, m(), d = eo(g, o), ge.complete();
            } }), Rl.innerFrom(I).subscribe(v));
          })(l);
        };
      }
      he.share = V0;
      function eo(r, t) {
        for (var e = [], n = 2; n < arguments.length; n++)
          e[n - 2] = arguments[n];
        if (t === true) {
          r();
          return;
        }
        if (t !== false) {
          var i2 = new Wl.SafeSubscriber({ next: function() {
            i2.unsubscribe(), r();
          } });
          return Rl.innerFrom(t.apply(void 0, W0([], R0(e)))).subscribe(i2);
        }
      }
    });
    var Ll = s((gi) => {
      Object.defineProperty(gi, "__esModule", { value: true });
      gi.shareReplay = void 0;
      var U0 = Zr(), z0 = ro();
      function Y0(r, t, e) {
        var n, i2, u, o, c = false;
        return r && typeof r == "object" ? (n = r.bufferSize, o = n === void 0 ? 1 / 0 : n, i2 = r.windowTime, t = i2 === void 0 ? 1 / 0 : i2, u = r.refCount, c = u === void 0 ? false : u, e = r.scheduler) : o = r ?? 1 / 0, z0.share({ connector: function() {
          return new U0.ReplaySubject(o, t, e);
        }, resetOnError: true, resetOnComplete: false, resetOnRefCountZero: c });
      }
      gi.shareReplay = Y0;
    });
    var Nl = s((qi) => {
      Object.defineProperty(qi, "__esModule", { value: true });
      qi.single = void 0;
      var B0 = te(), D0 = wu(), K0 = Pu(), G0 = b(), Q0 = O();
      function J0(r) {
        return G0.operate(function(t, e) {
          var n = false, i2, u = false, o = 0;
          t.subscribe(Q0.createOperatorSubscriber(e, function(c) {
            u = true, (!r || r(c, o++, t)) && (n && e.error(new D0.SequenceError("Too many matching values")), n = true, i2 = c);
          }, function() {
            n ? (e.next(i2), e.complete()) : e.error(u ? new K0.NotFoundError("No matching values") : new B0.EmptyError());
          }));
        });
      }
      qi.single = J0;
    });
    var Vl = s((Si) => {
      Object.defineProperty(Si, "__esModule", { value: true });
      Si.skip = void 0;
      var Z0 = xe();
      function $0(r) {
        return Z0.filter(function(t, e) {
          return r <= e;
        });
      }
      Si.skip = $0;
    });
    var Ul = s((ji) => {
      Object.defineProperty(ji, "__esModule", { value: true });
      ji.skipLast = void 0;
      var H0 = M(), X0 = b(), eq = O();
      function rq(r) {
        return r <= 0 ? H0.identity : X0.operate(function(t, e) {
          var n = new Array(r), i2 = 0;
          return t.subscribe(eq.createOperatorSubscriber(e, function(u) {
            var o = i2++;
            if (o < r)
              n[o] = u;
            else {
              var c = o % r, f = n[c];
              n[c] = u, e.next(f);
            }
          })), function() {
            n = null;
          };
        });
      }
      ji.skipLast = rq;
    });
    var Yl = s((Pi) => {
      Object.defineProperty(Pi, "__esModule", { value: true });
      Pi.skipUntil = void 0;
      var tq = b(), zl = O(), nq = q(), iq = E();
      function uq(r) {
        return tq.operate(function(t, e) {
          var n = false, i2 = zl.createOperatorSubscriber(e, function() {
            i2 == null || i2.unsubscribe(), n = true;
          }, iq.noop);
          nq.innerFrom(r).subscribe(i2), t.subscribe(zl.createOperatorSubscriber(e, function(u) {
            return n && e.next(u);
          }));
        });
      }
      Pi.skipUntil = uq;
    });
    var Bl = s((wi) => {
      Object.defineProperty(wi, "__esModule", { value: true });
      wi.skipWhile = void 0;
      var oq = b(), aq = O();
      function cq(r) {
        return oq.operate(function(t, e) {
          var n = false, i2 = 0;
          t.subscribe(aq.createOperatorSubscriber(e, function(u) {
            return (n || (n = !r(u, i2++))) && e.next(u);
          }));
        });
      }
      wi.skipWhile = cq;
    });
    var Kl = s((Ai) => {
      Object.defineProperty(Ai, "__esModule", { value: true });
      Ai.startWith = void 0;
      var Dl = Ar(), lq = k(), sq = b();
      function fq() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = lq.popScheduler(r);
        return sq.operate(function(n, i2) {
          (e ? Dl.concat(r, n, e) : Dl.concat(r, n)).subscribe(i2);
        });
      }
      Ai.startWith = fq;
    });
    var Tr = s((Ei) => {
      Object.defineProperty(Ei, "__esModule", { value: true });
      Ei.switchMap = void 0;
      var vq = q(), dq = b(), Gl = O();
      function pq(r, t) {
        return dq.operate(function(e, n) {
          var i2 = null, u = 0, o = false, c = function() {
            return o && !i2 && n.complete();
          };
          e.subscribe(Gl.createOperatorSubscriber(n, function(f) {
            i2 == null || i2.unsubscribe();
            var l = 0, v = u++;
            vq.innerFrom(r(f, v)).subscribe(i2 = Gl.createOperatorSubscriber(n, function(d) {
              return n.next(t ? t(f, d, v, l++) : d);
            }, function() {
              i2 = null, c();
            }));
          }, function() {
            o = true, c();
          }));
        });
      }
      Ei.switchMap = pq;
    });
    var Ql = s((Mi) => {
      Object.defineProperty(Mi, "__esModule", { value: true });
      Mi.switchAll = void 0;
      var bq = Tr(), _q = M();
      function hq() {
        return bq.switchMap(_q.identity);
      }
      Mi.switchAll = hq;
    });
    var Zl = s((Fi) => {
      Object.defineProperty(Fi, "__esModule", { value: true });
      Fi.switchMapTo = void 0;
      var Jl = Tr(), yq = j();
      function mq(r, t) {
        return yq.isFunction(t) ? Jl.switchMap(function() {
          return r;
        }, t) : Jl.switchMap(function() {
          return r;
        });
      }
      Fi.switchMapTo = mq;
    });
    var $l = s((Ii) => {
      Object.defineProperty(Ii, "__esModule", { value: true });
      Ii.switchScan = void 0;
      var Oq = Tr(), gq = b();
      function qq(r, t) {
        return gq.operate(function(e, n) {
          var i2 = t;
          return Oq.switchMap(function(u, o) {
            return r(i2, u, o);
          }, function(u, o) {
            return i2 = o, o;
          })(e).subscribe(n), function() {
            i2 = null;
          };
        });
      }
      Ii.switchScan = qq;
    });
    var Hl = s((Ti) => {
      Object.defineProperty(Ti, "__esModule", { value: true });
      Ti.takeUntil = void 0;
      var Sq = b(), jq = O(), Pq = q(), wq = E();
      function Aq(r) {
        return Sq.operate(function(t, e) {
          Pq.innerFrom(r).subscribe(jq.createOperatorSubscriber(e, function() {
            return e.complete();
          }, wq.noop)), !e.closed && t.subscribe(e);
        });
      }
      Ti.takeUntil = Aq;
    });
    var Xl = s((xi) => {
      Object.defineProperty(xi, "__esModule", { value: true });
      xi.takeWhile = void 0;
      var Eq = b(), Mq = O();
      function Fq(r, t) {
        return t === void 0 && (t = false), Eq.operate(function(e, n) {
          var i2 = 0;
          e.subscribe(Mq.createOperatorSubscriber(n, function(u) {
            var o = r(u, i2++);
            (o || t) && n.next(u), !o && n.complete();
          }));
        });
      }
      xi.takeWhile = Fq;
    });
    var es = s((ki) => {
      Object.defineProperty(ki, "__esModule", { value: true });
      ki.tap = void 0;
      var Iq = j(), Tq = b(), xq = O(), kq = M();
      function Cq(r, t, e) {
        var n = Iq.isFunction(r) || t || e ? { next: r, error: t, complete: e } : r;
        return n ? Tq.operate(function(i2, u) {
          var o;
          (o = n.subscribe) === null || o === void 0 || o.call(n);
          var c = true;
          i2.subscribe(xq.createOperatorSubscriber(u, function(f) {
            var l;
            (l = n.next) === null || l === void 0 || l.call(n, f), u.next(f);
          }, function() {
            var f;
            c = false, (f = n.complete) === null || f === void 0 || f.call(n), u.complete();
          }, function(f) {
            var l;
            c = false, (l = n.error) === null || l === void 0 || l.call(n, f), u.error(f);
          }, function() {
            var f, l;
            c && ((f = n.unsubscribe) === null || f === void 0 || f.call(n)), (l = n.finalize) === null || l === void 0 || l.call(n);
          }));
        }) : kq.identity;
      }
      ki.tap = Cq;
    });
    var to = s((Ci) => {
      Object.defineProperty(Ci, "__esModule", { value: true });
      Ci.throttle = void 0;
      var Rq = b(), rs = O(), Wq = q();
      function Lq(r, t) {
        return Rq.operate(function(e, n) {
          var i2 = t ?? {}, u = i2.leading, o = u === void 0 ? true : u, c = i2.trailing, f = c === void 0 ? false : c, l = false, v = null, d = null, p = false, y = function() {
            d == null || d.unsubscribe(), d = null, f && (m(), p && n.complete());
          }, h = function() {
            d = null, p && n.complete();
          }, _ = function(g) {
            return d = Wq.innerFrom(r(g)).subscribe(rs.createOperatorSubscriber(n, y, h));
          }, m = function() {
            if (l) {
              l = false;
              var g = v;
              v = null, n.next(g), !p && _(g);
            }
          };
          e.subscribe(rs.createOperatorSubscriber(n, function(g) {
            l = true, v = g, !(d && !d.closed) && (o ? m() : _(g));
          }, function() {
            p = true, !(f && l && d && !d.closed) && n.complete();
          }));
        });
      }
      Ci.throttle = Lq;
    });
    var ts = s((Ri) => {
      Object.defineProperty(Ri, "__esModule", { value: true });
      Ri.throttleTime = void 0;
      var Nq = x(), Vq = to(), Uq = ae();
      function zq(r, t, e) {
        t === void 0 && (t = Nq.asyncScheduler);
        var n = Uq.timer(r, t);
        return Vq.throttle(function() {
          return n;
        }, e);
      }
      Ri.throttleTime = zq;
    });
    var is = s((pr) => {
      Object.defineProperty(pr, "__esModule", { value: true });
      pr.TimeInterval = pr.timeInterval = void 0;
      var Yq = x(), Bq = b(), Dq = O();
      function Kq(r) {
        return r === void 0 && (r = Yq.asyncScheduler), Bq.operate(function(t, e) {
          var n = r.now();
          t.subscribe(Dq.createOperatorSubscriber(e, function(i2) {
            var u = r.now(), o = u - n;
            n = u, e.next(new ns(i2, o));
          }));
        });
      }
      pr.timeInterval = Kq;
      var ns = /* @__PURE__ */ function() {
        function r(t, e) {
          this.value = t, this.interval = e;
        }
        return r;
      }();
      pr.TimeInterval = ns;
    });
    var us = s((Wi) => {
      Object.defineProperty(Wi, "__esModule", { value: true });
      Wi.timeoutWith = void 0;
      var Gq = x(), Qq = Tt(), Jq = xt();
      function Zq(r, t, e) {
        var n, i2, u;
        if (e = e ?? Gq.async, Qq.isValidDate(r) ? n = r : typeof r == "number" && (i2 = r), t)
          u = function() {
            return t;
          };
        else
          throw new TypeError("No observable provided to switch to");
        if (n == null && i2 == null)
          throw new TypeError("No timeout provided.");
        return Jq.timeout({ first: n, each: i2, scheduler: e, with: u });
      }
      Wi.timeoutWith = Zq;
    });
    var os = s((Li) => {
      Object.defineProperty(Li, "__esModule", { value: true });
      Li.timestamp = void 0;
      var $q = Jr(), Hq = ne();
      function Xq(r) {
        return r === void 0 && (r = $q.dateTimestampProvider), Hq.map(function(t) {
          return { value: t, timestamp: r.now() };
        });
      }
      Li.timestamp = Xq;
    });
    var ls = s((Ni) => {
      Object.defineProperty(Ni, "__esModule", { value: true });
      Ni.window = void 0;
      var as = F(), e1 = b(), cs = O(), r1 = E(), t1 = q();
      function n1(r) {
        return e1.operate(function(t, e) {
          var n = new as.Subject();
          e.next(n.asObservable());
          var i2 = function(u) {
            n.error(u), e.error(u);
          };
          return t.subscribe(cs.createOperatorSubscriber(e, function(u) {
            return n == null ? void 0 : n.next(u);
          }, function() {
            n.complete(), e.complete();
          }, i2)), t1.innerFrom(r).subscribe(cs.createOperatorSubscriber(e, function() {
            n.complete(), e.next(n = new as.Subject());
          }, r1.noop, i2)), function() {
            n == null || n.unsubscribe(), n = null;
          };
        });
      }
      Ni.window = n1;
    });
    var fs2 = s((br) => {
      var i1 = br && br.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(br, "__esModule", { value: true });
      br.windowCount = void 0;
      var ss = F(), u1 = b(), o1 = O();
      function a1(r, t) {
        t === void 0 && (t = 0);
        var e = t > 0 ? t : r;
        return u1.operate(function(n, i2) {
          var u = [new ss.Subject()], c = 0;
          i2.next(u[0].asObservable()), n.subscribe(o1.createOperatorSubscriber(i2, function(f) {
            var l, v;
            try {
              for (var d = i1(u), p = d.next(); !p.done; p = d.next()) {
                var y = p.value;
                y.next(f);
              }
            } catch (m) {
              l = { error: m };
            } finally {
              try {
                p && !p.done && (v = d.return) && v.call(d);
              } finally {
                if (l)
                  throw l.error;
              }
            }
            var h = c - r + 1;
            if (h >= 0 && h % e === 0 && u.shift().complete(), ++c % e === 0) {
              var _ = new ss.Subject();
              u.push(_), i2.next(_.asObservable());
            }
          }, function() {
            for (; u.length > 0; )
              u.shift().complete();
            i2.complete();
          }, function(f) {
            for (; u.length > 0; )
              u.shift().error(f);
            i2.error(f);
          }, function() {
            u = null;
          }));
        });
      }
      br.windowCount = a1;
    });
    var ds = s((Vi) => {
      Object.defineProperty(Vi, "__esModule", { value: true });
      Vi.windowTime = void 0;
      var c1 = F(), l1 = x(), s1 = C(), f1 = b(), v1 = O(), d1 = K(), p1 = k(), vs = G();
      function b1(r) {
        for (var t, e, n = [], i2 = 1; i2 < arguments.length; i2++)
          n[i2 - 1] = arguments[i2];
        var u = (t = p1.popScheduler(n)) !== null && t !== void 0 ? t : l1.asyncScheduler, o = (e = n[0]) !== null && e !== void 0 ? e : null, c = n[1] || 1 / 0;
        return f1.operate(function(f, l) {
          var v = [], d = false, p = function(m) {
            var g = m.window, w = m.subs;
            g.complete(), w.unsubscribe(), d1.arrRemove(v, m), d && y();
          }, y = function() {
            if (v) {
              var m = new s1.Subscription();
              l.add(m);
              var g = new c1.Subject(), w = { window: g, subs: m, seen: 0 };
              v.push(w), l.next(g.asObservable()), vs.executeSchedule(m, u, function() {
                return p(w);
              }, r);
            }
          };
          o !== null && o >= 0 ? vs.executeSchedule(l, u, y, o, true) : d = true, y();
          var h = function(m) {
            return v.slice().forEach(m);
          }, _ = function(m) {
            h(function(g) {
              var w = g.window;
              return m(w);
            }), m(l), l.unsubscribe();
          };
          return f.subscribe(v1.createOperatorSubscriber(l, function(m) {
            h(function(g) {
              g.window.next(m), c <= ++g.seen && p(g);
            });
          }, function() {
            return _(function(m) {
              return m.complete();
            });
          }, function(m) {
            return _(function(g) {
              return g.error(m);
            });
          })), function() {
            v = null;
          };
        });
      }
      Vi.windowTime = b1;
    });
    var _s = s((_r) => {
      var _1 = _r && _r.__values || function(r) {
        var t = typeof Symbol == "function" && Symbol.iterator, e = t && r[t], n = 0;
        if (e)
          return e.call(r);
        if (r && typeof r.length == "number")
          return { next: function() {
            return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
          } };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(_r, "__esModule", { value: true });
      _r.windowToggle = void 0;
      var h1 = F(), y1 = C(), m1 = b(), ps = q(), no = O(), bs = E(), O1 = K();
      function g1(r, t) {
        return m1.operate(function(e, n) {
          var i2 = [], u = function(o) {
            for (; 0 < i2.length; )
              i2.shift().error(o);
            n.error(o);
          };
          ps.innerFrom(r).subscribe(no.createOperatorSubscriber(n, function(o) {
            var c = new h1.Subject();
            i2.push(c);
            var f = new y1.Subscription(), l = function() {
              O1.arrRemove(i2, c), c.complete(), f.unsubscribe();
            }, v;
            try {
              v = ps.innerFrom(t(o));
            } catch (d) {
              u(d);
              return;
            }
            n.next(c.asObservable()), f.add(v.subscribe(no.createOperatorSubscriber(n, l, bs.noop, u)));
          }, bs.noop)), e.subscribe(no.createOperatorSubscriber(n, function(o) {
            var c, f, l = i2.slice();
            try {
              for (var v = _1(l), d = v.next(); !d.done; d = v.next()) {
                var p = d.value;
                p.next(o);
              }
            } catch (y) {
              c = { error: y };
            } finally {
              try {
                d && !d.done && (f = v.return) && f.call(v);
              } finally {
                if (c)
                  throw c.error;
              }
            }
          }, function() {
            for (; 0 < i2.length; )
              i2.shift().complete();
            n.complete();
          }, u, function() {
            for (; 0 < i2.length; )
              i2.shift().unsubscribe();
          }));
        });
      }
      _r.windowToggle = g1;
    });
    var ys = s((Ui) => {
      Object.defineProperty(Ui, "__esModule", { value: true });
      Ui.windowWhen = void 0;
      var q1 = F(), S1 = b(), hs = O(), j1 = q();
      function P1(r) {
        return S1.operate(function(t, e) {
          var n, i2, u = function(c) {
            n.error(c), e.error(c);
          }, o = function() {
            i2 == null || i2.unsubscribe(), n == null || n.complete(), n = new q1.Subject(), e.next(n.asObservable());
            var c;
            try {
              c = j1.innerFrom(r());
            } catch (f) {
              u(f);
              return;
            }
            c.subscribe(i2 = hs.createOperatorSubscriber(e, o, o, u));
          };
          o(), t.subscribe(hs.createOperatorSubscriber(e, function(c) {
            return n.next(c);
          }, function() {
            n.complete(), e.complete();
          }, u, function() {
            i2 == null || i2.unsubscribe(), n = null;
          }));
        });
      }
      Ui.windowWhen = P1;
    });
    var qs = s((ye) => {
      var ms = ye && ye.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, Os = ye && ye.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(ye, "__esModule", { value: true });
      ye.withLatestFrom = void 0;
      var w1 = b(), gs = O(), A1 = q(), E1 = M(), M1 = E(), F1 = k();
      function I1() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        var e = F1.popResultSelector(r);
        return w1.operate(function(n, i2) {
          for (var u = r.length, o = new Array(u), c = r.map(function() {
            return false;
          }), f = false, l = function(d) {
            A1.innerFrom(r[d]).subscribe(gs.createOperatorSubscriber(i2, function(p) {
              o[d] = p, !f && !c[d] && (c[d] = true, (f = c.every(E1.identity)) && (c = null));
            }, M1.noop));
          }, v = 0; v < u; v++)
            l(v);
          n.subscribe(gs.createOperatorSubscriber(i2, function(d) {
            if (f) {
              var p = Os([d], ms(o));
              i2.next(e ? e.apply(void 0, Os([], ms(p))) : p);
            }
          }));
        });
      }
      ye.withLatestFrom = I1;
    });
    var Ss = s((zi) => {
      Object.defineProperty(zi, "__esModule", { value: true });
      zi.zipAll = void 0;
      var T1 = sn(), x1 = Uu();
      function k1(r) {
        return x1.joinAllInternals(T1.zip, r);
      }
      zi.zipAll = k1;
    });
    var js = s((me) => {
      var C1 = me && me.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, R1 = me && me.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(me, "__esModule", { value: true });
      me.zip = void 0;
      var W1 = sn(), L1 = b();
      function N1() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return L1.operate(function(e, n) {
          W1.zip.apply(void 0, R1([e], C1(r))).subscribe(n);
        });
      }
      me.zip = N1;
    });
    var Ps = s((Oe) => {
      var V1 = Oe && Oe.__read || function(r, t) {
        var e = typeof Symbol == "function" && r[Symbol.iterator];
        if (!e)
          return r;
        var n = e.call(r), i2, u = [], o;
        try {
          for (; (t === void 0 || t-- > 0) && !(i2 = n.next()).done; )
            u.push(i2.value);
        } catch (c) {
          o = { error: c };
        } finally {
          try {
            i2 && !i2.done && (e = n.return) && e.call(n);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }, U1 = Oe && Oe.__spreadArray || function(r, t) {
        for (var e = 0, n = t.length, i2 = r.length; e < n; e++, i2++)
          r[i2] = t[e];
        return r;
      };
      Object.defineProperty(Oe, "__esModule", { value: true });
      Oe.zipWith = void 0;
      var z1 = js();
      function Y1() {
        for (var r = [], t = 0; t < arguments.length; t++)
          r[t] = arguments[t];
        return z1.zip.apply(void 0, U1([], V1(r)));
      }
      Oe.zipWith = Y1;
    });
    var io = s((a) => {
      var B1 = a && a.__createBinding || (Object.create ? function(r, t, e, n) {
        n === void 0 && (n = e), Object.defineProperty(r, n, { enumerable: true, get: function() {
          return t[e];
        } });
      } : function(r, t, e, n) {
        n === void 0 && (n = e), r[n] = t[e];
      }), D1 = a && a.__exportStar || function(r, t) {
        for (var e in r)
          e !== "default" && !Object.prototype.hasOwnProperty.call(t, e) && B1(t, r, e);
      };
      Object.defineProperty(a, "__esModule", { value: true });
      a.interval = a.iif = a.generate = a.fromEventPattern = a.fromEvent = a.from = a.forkJoin = a.empty = a.defer = a.connectable = a.concat = a.combineLatest = a.bindNodeCallback = a.bindCallback = a.UnsubscriptionError = a.TimeoutError = a.SequenceError = a.ObjectUnsubscribedError = a.NotFoundError = a.EmptyError = a.ArgumentOutOfRangeError = a.firstValueFrom = a.lastValueFrom = a.isObservable = a.identity = a.noop = a.pipe = a.NotificationKind = a.Notification = a.Subscriber = a.Subscription = a.Scheduler = a.VirtualAction = a.VirtualTimeScheduler = a.animationFrameScheduler = a.animationFrame = a.queueScheduler = a.queue = a.asyncScheduler = a.async = a.asapScheduler = a.asap = a.AsyncSubject = a.ReplaySubject = a.BehaviorSubject = a.Subject = a.animationFrames = a.observable = a.ConnectableObservable = a.Observable = void 0;
      a.filter = a.expand = a.exhaustMap = a.exhaustAll = a.exhaust = a.every = a.endWith = a.elementAt = a.distinctUntilKeyChanged = a.distinctUntilChanged = a.distinct = a.dematerialize = a.delayWhen = a.delay = a.defaultIfEmpty = a.debounceTime = a.debounce = a.count = a.connect = a.concatWith = a.concatMapTo = a.concatMap = a.concatAll = a.combineLatestWith = a.combineLatestAll = a.combineAll = a.catchError = a.bufferWhen = a.bufferToggle = a.bufferTime = a.bufferCount = a.buffer = a.auditTime = a.audit = a.config = a.NEVER = a.EMPTY = a.scheduled = a.zip = a.using = a.timer = a.throwError = a.range = a.race = a.partition = a.pairs = a.onErrorResumeNext = a.of = a.never = a.merge = void 0;
      a.switchMap = a.switchAll = a.subscribeOn = a.startWith = a.skipWhile = a.skipUntil = a.skipLast = a.skip = a.single = a.shareReplay = a.share = a.sequenceEqual = a.scan = a.sampleTime = a.sample = a.refCount = a.retryWhen = a.retry = a.repeatWhen = a.repeat = a.reduce = a.raceWith = a.publishReplay = a.publishLast = a.publishBehavior = a.publish = a.pluck = a.pairwise = a.onErrorResumeNextWith = a.observeOn = a.multicast = a.min = a.mergeWith = a.mergeScan = a.mergeMapTo = a.mergeMap = a.flatMap = a.mergeAll = a.max = a.materialize = a.mapTo = a.map = a.last = a.isEmpty = a.ignoreElements = a.groupBy = a.first = a.findIndex = a.find = a.finalize = void 0;
      a.zipWith = a.zipAll = a.withLatestFrom = a.windowWhen = a.windowToggle = a.windowTime = a.windowCount = a.window = a.toArray = a.timestamp = a.timeoutWith = a.timeout = a.timeInterval = a.throwIfEmpty = a.throttleTime = a.throttle = a.tap = a.takeWhile = a.takeUntil = a.takeLast = a.take = a.switchScan = a.switchMapTo = void 0;
      var K1 = P();
      Object.defineProperty(a, "Observable", { enumerable: true, get: function() {
        return K1.Observable;
      } });
      var G1 = Or();
      Object.defineProperty(a, "ConnectableObservable", { enumerable: true, get: function() {
        return G1.ConnectableObservable;
      } });
      var Q1 = yr();
      Object.defineProperty(a, "observable", { enumerable: true, get: function() {
        return Q1.observable;
      } });
      var J1 = Fo();
      Object.defineProperty(a, "animationFrames", { enumerable: true, get: function() {
        return J1.animationFrames;
      } });
      var Z1 = F();
      Object.defineProperty(a, "Subject", { enumerable: true, get: function() {
        return Z1.Subject;
      } });
      var $1 = au();
      Object.defineProperty(a, "BehaviorSubject", { enumerable: true, get: function() {
        return $1.BehaviorSubject;
      } });
      var H1 = Zr();
      Object.defineProperty(a, "ReplaySubject", { enumerable: true, get: function() {
        return H1.ReplaySubject;
      } });
      var X1 = $r();
      Object.defineProperty(a, "AsyncSubject", { enumerable: true, get: function() {
        return X1.AsyncSubject;
      } });
      var ws = Go();
      Object.defineProperty(a, "asap", { enumerable: true, get: function() {
        return ws.asap;
      } });
      Object.defineProperty(a, "asapScheduler", { enumerable: true, get: function() {
        return ws.asapScheduler;
      } });
      var As = x();
      Object.defineProperty(a, "async", { enumerable: true, get: function() {
        return As.async;
      } });
      Object.defineProperty(a, "asyncScheduler", { enumerable: true, get: function() {
        return As.asyncScheduler;
      } });
      var Es = Zo();
      Object.defineProperty(a, "queue", { enumerable: true, get: function() {
        return Es.queue;
      } });
      Object.defineProperty(a, "queueScheduler", { enumerable: true, get: function() {
        return Es.queueScheduler;
      } });
      var Ms = ea();
      Object.defineProperty(a, "animationFrame", { enumerable: true, get: function() {
        return Ms.animationFrame;
      } });
      Object.defineProperty(a, "animationFrameScheduler", { enumerable: true, get: function() {
        return Ms.animationFrameScheduler;
      } });
      var Fs = na();
      Object.defineProperty(a, "VirtualTimeScheduler", { enumerable: true, get: function() {
        return Fs.VirtualTimeScheduler;
      } });
      Object.defineProperty(a, "VirtualAction", { enumerable: true, get: function() {
        return Fs.VirtualAction;
      } });
      var eS = lu();
      Object.defineProperty(a, "Scheduler", { enumerable: true, get: function() {
        return eS.Scheduler;
      } });
      var rS = C();
      Object.defineProperty(a, "Subscription", { enumerable: true, get: function() {
        return rS.Subscription;
      } });
      var tS = Re();
      Object.defineProperty(a, "Subscriber", { enumerable: true, get: function() {
        return tS.Subscriber;
      } });
      var Is = St();
      Object.defineProperty(a, "Notification", { enumerable: true, get: function() {
        return Is.Notification;
      } });
      Object.defineProperty(a, "NotificationKind", { enumerable: true, get: function() {
        return Is.NotificationKind;
      } });
      var nS = mr();
      Object.defineProperty(a, "pipe", { enumerable: true, get: function() {
        return nS.pipe;
      } });
      var iS = E();
      Object.defineProperty(a, "noop", { enumerable: true, get: function() {
        return iS.noop;
      } });
      var uS = M();
      Object.defineProperty(a, "identity", { enumerable: true, get: function() {
        return uS.identity;
      } });
      var oS = Oa();
      Object.defineProperty(a, "isObservable", { enumerable: true, get: function() {
        return oS.isObservable;
      } });
      var aS = ga();
      Object.defineProperty(a, "lastValueFrom", { enumerable: true, get: function() {
        return aS.lastValueFrom;
      } });
      var cS = qa();
      Object.defineProperty(a, "firstValueFrom", { enumerable: true, get: function() {
        return cS.firstValueFrom;
      } });
      var lS = ju();
      Object.defineProperty(a, "ArgumentOutOfRangeError", { enumerable: true, get: function() {
        return lS.ArgumentOutOfRangeError;
      } });
      var sS = te();
      Object.defineProperty(a, "EmptyError", { enumerable: true, get: function() {
        return sS.EmptyError;
      } });
      var fS = Pu();
      Object.defineProperty(a, "NotFoundError", { enumerable: true, get: function() {
        return fS.NotFoundError;
      } });
      var vS = nu();
      Object.defineProperty(a, "ObjectUnsubscribedError", { enumerable: true, get: function() {
        return vS.ObjectUnsubscribedError;
      } });
      var dS = wu();
      Object.defineProperty(a, "SequenceError", { enumerable: true, get: function() {
        return dS.SequenceError;
      } });
      var pS = xt();
      Object.defineProperty(a, "TimeoutError", { enumerable: true, get: function() {
        return pS.TimeoutError;
      } });
      var bS = Bi();
      Object.defineProperty(a, "UnsubscriptionError", { enumerable: true, get: function() {
        return bS.UnsubscriptionError;
      } });
      var _S = ja();
      Object.defineProperty(a, "bindCallback", { enumerable: true, get: function() {
        return _S.bindCallback;
      } });
      var hS = Pa();
      Object.defineProperty(a, "bindNodeCallback", { enumerable: true, get: function() {
        return hS.bindNodeCallback;
      } });
      var yS = Nt();
      Object.defineProperty(a, "combineLatest", { enumerable: true, get: function() {
        return yS.combineLatest;
      } });
      var mS = Ar();
      Object.defineProperty(a, "concat", { enumerable: true, get: function() {
        return mS.concat;
      } });
      var OS = xa();
      Object.defineProperty(a, "connectable", { enumerable: true, get: function() {
        return OS.connectable;
      } });
      var gS = Er();
      Object.defineProperty(a, "defer", { enumerable: true, get: function() {
        return gS.defer;
      } });
      var qS = N();
      Object.defineProperty(a, "empty", { enumerable: true, get: function() {
        return qS.empty;
      } });
      var SS = ka();
      Object.defineProperty(a, "forkJoin", { enumerable: true, get: function() {
        return SS.forkJoin;
      } });
      var jS = Q();
      Object.defineProperty(a, "from", { enumerable: true, get: function() {
        return jS.from;
      } });
      var PS = Ra();
      Object.defineProperty(a, "fromEvent", { enumerable: true, get: function() {
        return PS.fromEvent;
      } });
      var wS = La();
      Object.defineProperty(a, "fromEventPattern", { enumerable: true, get: function() {
        return wS.fromEventPattern;
      } });
      var AS = Va();
      Object.defineProperty(a, "generate", { enumerable: true, get: function() {
        return AS.generate;
      } });
      var ES = Ua();
      Object.defineProperty(a, "iif", { enumerable: true, get: function() {
        return ES.iif;
      } });
      var MS = Tu();
      Object.defineProperty(a, "interval", { enumerable: true, get: function() {
        return MS.interval;
      } });
      var FS = Ya();
      Object.defineProperty(a, "merge", { enumerable: true, get: function() {
        return FS.merge;
      } });
      var IS = xu();
      Object.defineProperty(a, "never", { enumerable: true, get: function() {
        return IS.never;
      } });
      var TS = gt();
      Object.defineProperty(a, "of", { enumerable: true, get: function() {
        return TS.of;
      } });
      var xS = ku();
      Object.defineProperty(a, "onErrorResumeNext", { enumerable: true, get: function() {
        return xS.onErrorResumeNext;
      } });
      var kS = Da();
      Object.defineProperty(a, "pairs", { enumerable: true, get: function() {
        return kS.pairs;
      } });
      var CS = Ja();
      Object.defineProperty(a, "partition", { enumerable: true, get: function() {
        return CS.partition;
      } });
      var RS = Cu();
      Object.defineProperty(a, "race", { enumerable: true, get: function() {
        return RS.race;
      } });
      var WS = Ha();
      Object.defineProperty(a, "range", { enumerable: true, get: function() {
        return WS.range;
      } });
      var LS = Su();
      Object.defineProperty(a, "throwError", { enumerable: true, get: function() {
        return LS.throwError;
      } });
      var NS = ae();
      Object.defineProperty(a, "timer", { enumerable: true, get: function() {
        return NS.timer;
      } });
      var VS = Xa();
      Object.defineProperty(a, "using", { enumerable: true, get: function() {
        return VS.using;
      } });
      var US = sn();
      Object.defineProperty(a, "zip", { enumerable: true, get: function() {
        return US.zip;
      } });
      var zS = qu();
      Object.defineProperty(a, "scheduled", { enumerable: true, get: function() {
        return zS.scheduled;
      } });
      var YS = N();
      Object.defineProperty(a, "EMPTY", { enumerable: true, get: function() {
        return YS.EMPTY;
      } });
      var BS = xu();
      Object.defineProperty(a, "NEVER", { enumerable: true, get: function() {
        return BS.NEVER;
      } });
      D1(rc(), a);
      var DS = ke();
      Object.defineProperty(a, "config", { enumerable: true, get: function() {
        return DS.config;
      } });
      var KS = Ru();
      Object.defineProperty(a, "audit", { enumerable: true, get: function() {
        return KS.audit;
      } });
      var GS = nc();
      Object.defineProperty(a, "auditTime", { enumerable: true, get: function() {
        return GS.auditTime;
      } });
      var QS = uc();
      Object.defineProperty(a, "buffer", { enumerable: true, get: function() {
        return QS.buffer;
      } });
      var JS = oc();
      Object.defineProperty(a, "bufferCount", { enumerable: true, get: function() {
        return JS.bufferCount;
      } });
      var ZS = cc();
      Object.defineProperty(a, "bufferTime", { enumerable: true, get: function() {
        return ZS.bufferTime;
      } });
      var $S = fc();
      Object.defineProperty(a, "bufferToggle", { enumerable: true, get: function() {
        return $S.bufferToggle;
      } });
      var HS = dc();
      Object.defineProperty(a, "bufferWhen", { enumerable: true, get: function() {
        return HS.bufferWhen;
      } });
      var XS = bc();
      Object.defineProperty(a, "catchError", { enumerable: true, get: function() {
        return XS.catchError;
      } });
      var ej = _c();
      Object.defineProperty(a, "combineAll", { enumerable: true, get: function() {
        return ej.combineAll;
      } });
      var rj = zu();
      Object.defineProperty(a, "combineLatestAll", { enumerable: true, get: function() {
        return rj.combineLatestAll;
      } });
      var tj = gc();
      Object.defineProperty(a, "combineLatestWith", { enumerable: true, get: function() {
        return tj.combineLatestWith;
      } });
      var nj = Dt();
      Object.defineProperty(a, "concatAll", { enumerable: true, get: function() {
        return nj.concatAll;
      } });
      var ij = Yu();
      Object.defineProperty(a, "concatMap", { enumerable: true, get: function() {
        return ij.concatMap;
      } });
      var uj = jc();
      Object.defineProperty(a, "concatMapTo", { enumerable: true, get: function() {
        return uj.concatMapTo;
      } });
      var oj = wc();
      Object.defineProperty(a, "concatWith", { enumerable: true, get: function() {
        return oj.concatWith;
      } });
      var aj = wn();
      Object.defineProperty(a, "connect", { enumerable: true, get: function() {
        return aj.connect;
      } });
      var cj = Ec();
      Object.defineProperty(a, "count", { enumerable: true, get: function() {
        return cj.count;
      } });
      var lj = Fc();
      Object.defineProperty(a, "debounce", { enumerable: true, get: function() {
        return lj.debounce;
      } });
      var sj = Ic();
      Object.defineProperty(a, "debounceTime", { enumerable: true, get: function() {
        return sj.debounceTime;
      } });
      var fj = Mr();
      Object.defineProperty(a, "defaultIfEmpty", { enumerable: true, get: function() {
        return fj.defaultIfEmpty;
      } });
      var vj = kc();
      Object.defineProperty(a, "delay", { enumerable: true, get: function() {
        return vj.delay;
      } });
      var dj = Ku();
      Object.defineProperty(a, "delayWhen", { enumerable: true, get: function() {
        return dj.delayWhen;
      } });
      var pj = Cc();
      Object.defineProperty(a, "dematerialize", { enumerable: true, get: function() {
        return pj.dematerialize;
      } });
      var bj = Wc();
      Object.defineProperty(a, "distinct", { enumerable: true, get: function() {
        return bj.distinct;
      } });
      var _j = Gu();
      Object.defineProperty(a, "distinctUntilChanged", { enumerable: true, get: function() {
        return _j.distinctUntilChanged;
      } });
      var hj = Lc();
      Object.defineProperty(a, "distinctUntilKeyChanged", { enumerable: true, get: function() {
        return hj.distinctUntilKeyChanged;
      } });
      var yj = Vc();
      Object.defineProperty(a, "elementAt", { enumerable: true, get: function() {
        return yj.elementAt;
      } });
      var mj = Uc();
      Object.defineProperty(a, "endWith", { enumerable: true, get: function() {
        return mj.endWith;
      } });
      var Oj = zc();
      Object.defineProperty(a, "every", { enumerable: true, get: function() {
        return Oj.every;
      } });
      var gj = Kc();
      Object.defineProperty(a, "exhaust", { enumerable: true, get: function() {
        return gj.exhaust;
      } });
      var qj = Ju();
      Object.defineProperty(a, "exhaustAll", { enumerable: true, get: function() {
        return qj.exhaustAll;
      } });
      var Sj = Qu();
      Object.defineProperty(a, "exhaustMap", { enumerable: true, get: function() {
        return Sj.exhaustMap;
      } });
      var jj = Gc();
      Object.defineProperty(a, "expand", { enumerable: true, get: function() {
        return jj.expand;
      } });
      var Pj = xe();
      Object.defineProperty(a, "filter", { enumerable: true, get: function() {
        return Pj.filter;
      } });
      var wj = Qc();
      Object.defineProperty(a, "finalize", { enumerable: true, get: function() {
        return wj.finalize;
      } });
      var Aj = Zu();
      Object.defineProperty(a, "find", { enumerable: true, get: function() {
        return Aj.find;
      } });
      var Ej = Zc();
      Object.defineProperty(a, "findIndex", { enumerable: true, get: function() {
        return Ej.findIndex;
      } });
      var Mj = $c();
      Object.defineProperty(a, "first", { enumerable: true, get: function() {
        return Mj.first;
      } });
      var Fj = Xc();
      Object.defineProperty(a, "groupBy", { enumerable: true, get: function() {
        return Fj.groupBy;
      } });
      var Ij = Bu();
      Object.defineProperty(a, "ignoreElements", { enumerable: true, get: function() {
        return Ij.ignoreElements;
      } });
      var Tj = el();
      Object.defineProperty(a, "isEmpty", { enumerable: true, get: function() {
        return Tj.isEmpty;
      } });
      var xj = rl();
      Object.defineProperty(a, "last", { enumerable: true, get: function() {
        return xj.last;
      } });
      var kj = ne();
      Object.defineProperty(a, "map", { enumerable: true, get: function() {
        return kj.map;
      } });
      var Cj = Du();
      Object.defineProperty(a, "mapTo", { enumerable: true, get: function() {
        return Cj.mapTo;
      } });
      var Rj = tl();
      Object.defineProperty(a, "materialize", { enumerable: true, get: function() {
        return Rj.materialize;
      } });
      var Wj = nl();
      Object.defineProperty(a, "max", { enumerable: true, get: function() {
        return Wj.max;
      } });
      var Lj = wr();
      Object.defineProperty(a, "mergeAll", { enumerable: true, get: function() {
        return Lj.mergeAll;
      } });
      var Nj = il();
      Object.defineProperty(a, "flatMap", { enumerable: true, get: function() {
        return Nj.flatMap;
      } });
      var Vj = Z();
      Object.defineProperty(a, "mergeMap", { enumerable: true, get: function() {
        return Vj.mergeMap;
      } });
      var Uj = ol();
      Object.defineProperty(a, "mergeMapTo", { enumerable: true, get: function() {
        return Uj.mergeMapTo;
      } });
      var zj = al();
      Object.defineProperty(a, "mergeScan", { enumerable: true, get: function() {
        return zj.mergeScan;
      } });
      var Yj = sl();
      Object.defineProperty(a, "mergeWith", { enumerable: true, get: function() {
        return Yj.mergeWith;
      } });
      var Bj = fl();
      Object.defineProperty(a, "min", { enumerable: true, get: function() {
        return Bj.min;
      } });
      var Dj = oi();
      Object.defineProperty(a, "multicast", { enumerable: true, get: function() {
        return Dj.multicast;
      } });
      var Kj = jr();
      Object.defineProperty(a, "observeOn", { enumerable: true, get: function() {
        return Kj.observeOn;
      } });
      var Gj = pl();
      Object.defineProperty(a, "onErrorResumeNextWith", { enumerable: true, get: function() {
        return Gj.onErrorResumeNextWith;
      } });
      var Qj = bl();
      Object.defineProperty(a, "pairwise", { enumerable: true, get: function() {
        return Qj.pairwise;
      } });
      var Jj = _l();
      Object.defineProperty(a, "pluck", { enumerable: true, get: function() {
        return Jj.pluck;
      } });
      var Zj = hl();
      Object.defineProperty(a, "publish", { enumerable: true, get: function() {
        return Zj.publish;
      } });
      var $j = yl();
      Object.defineProperty(a, "publishBehavior", { enumerable: true, get: function() {
        return $j.publishBehavior;
      } });
      var Hj = ml();
      Object.defineProperty(a, "publishLast", { enumerable: true, get: function() {
        return Hj.publishLast;
      } });
      var Xj = gl();
      Object.defineProperty(a, "publishReplay", { enumerable: true, get: function() {
        return Xj.publishReplay;
      } });
      var eP = ql();
      Object.defineProperty(a, "raceWith", { enumerable: true, get: function() {
        return eP.raceWith;
      } });
      var rP = fr();
      Object.defineProperty(a, "reduce", { enumerable: true, get: function() {
        return rP.reduce;
      } });
      var tP = jl();
      Object.defineProperty(a, "repeat", { enumerable: true, get: function() {
        return tP.repeat;
      } });
      var nP = wl();
      Object.defineProperty(a, "repeatWhen", { enumerable: true, get: function() {
        return nP.repeatWhen;
      } });
      var iP = El();
      Object.defineProperty(a, "retry", { enumerable: true, get: function() {
        return iP.retry;
      } });
      var uP = Fl();
      Object.defineProperty(a, "retryWhen", { enumerable: true, get: function() {
        return uP.retryWhen;
      } });
      var oP = ru();
      Object.defineProperty(a, "refCount", { enumerable: true, get: function() {
        return oP.refCount;
      } });
      var aP = Xu();
      Object.defineProperty(a, "sample", { enumerable: true, get: function() {
        return aP.sample;
      } });
      var cP = Tl();
      Object.defineProperty(a, "sampleTime", { enumerable: true, get: function() {
        return cP.sampleTime;
      } });
      var lP = xl();
      Object.defineProperty(a, "scan", { enumerable: true, get: function() {
        return lP.scan;
      } });
      var sP = Cl();
      Object.defineProperty(a, "sequenceEqual", { enumerable: true, get: function() {
        return sP.sequenceEqual;
      } });
      var fP = ro();
      Object.defineProperty(a, "share", { enumerable: true, get: function() {
        return fP.share;
      } });
      var vP = Ll();
      Object.defineProperty(a, "shareReplay", { enumerable: true, get: function() {
        return vP.shareReplay;
      } });
      var dP = Nl();
      Object.defineProperty(a, "single", { enumerable: true, get: function() {
        return dP.single;
      } });
      var pP = Vl();
      Object.defineProperty(a, "skip", { enumerable: true, get: function() {
        return pP.skip;
      } });
      var bP = Ul();
      Object.defineProperty(a, "skipLast", { enumerable: true, get: function() {
        return bP.skipLast;
      } });
      var _P = Yl();
      Object.defineProperty(a, "skipUntil", { enumerable: true, get: function() {
        return _P.skipUntil;
      } });
      var hP = Bl();
      Object.defineProperty(a, "skipWhile", { enumerable: true, get: function() {
        return hP.skipWhile;
      } });
      var yP = Kl();
      Object.defineProperty(a, "startWith", { enumerable: true, get: function() {
        return yP.startWith;
      } });
      var mP = Pr();
      Object.defineProperty(a, "subscribeOn", { enumerable: true, get: function() {
        return mP.subscribeOn;
      } });
      var OP = Ql();
      Object.defineProperty(a, "switchAll", { enumerable: true, get: function() {
        return OP.switchAll;
      } });
      var gP = Tr();
      Object.defineProperty(a, "switchMap", { enumerable: true, get: function() {
        return gP.switchMap;
      } });
      var qP = Zl();
      Object.defineProperty(a, "switchMapTo", { enumerable: true, get: function() {
        return qP.switchMapTo;
      } });
      var SP = $l();
      Object.defineProperty(a, "switchScan", { enumerable: true, get: function() {
        return SP.switchScan;
      } });
      var jP = Fr();
      Object.defineProperty(a, "take", { enumerable: true, get: function() {
        return jP.take;
      } });
      var PP = $u();
      Object.defineProperty(a, "takeLast", { enumerable: true, get: function() {
        return PP.takeLast;
      } });
      var wP = Hl();
      Object.defineProperty(a, "takeUntil", { enumerable: true, get: function() {
        return wP.takeUntil;
      } });
      var AP = Xl();
      Object.defineProperty(a, "takeWhile", { enumerable: true, get: function() {
        return AP.takeWhile;
      } });
      var EP = es();
      Object.defineProperty(a, "tap", { enumerable: true, get: function() {
        return EP.tap;
      } });
      var MP = to();
      Object.defineProperty(a, "throttle", { enumerable: true, get: function() {
        return MP.throttle;
      } });
      var FP = ts();
      Object.defineProperty(a, "throttleTime", { enumerable: true, get: function() {
        return FP.throttleTime;
      } });
      var IP = Ir();
      Object.defineProperty(a, "throwIfEmpty", { enumerable: true, get: function() {
        return IP.throwIfEmpty;
      } });
      var TP = is();
      Object.defineProperty(a, "timeInterval", { enumerable: true, get: function() {
        return TP.timeInterval;
      } });
      var xP = xt();
      Object.defineProperty(a, "timeout", { enumerable: true, get: function() {
        return xP.timeout;
      } });
      var kP = us();
      Object.defineProperty(a, "timeoutWith", { enumerable: true, get: function() {
        return kP.timeoutWith;
      } });
      var CP = os();
      Object.defineProperty(a, "timestamp", { enumerable: true, get: function() {
        return CP.timestamp;
      } });
      var RP = Vu();
      Object.defineProperty(a, "toArray", { enumerable: true, get: function() {
        return RP.toArray;
      } });
      var WP = ls();
      Object.defineProperty(a, "window", { enumerable: true, get: function() {
        return WP.window;
      } });
      var LP = fs2();
      Object.defineProperty(a, "windowCount", { enumerable: true, get: function() {
        return LP.windowCount;
      } });
      var NP = ds();
      Object.defineProperty(a, "windowTime", { enumerable: true, get: function() {
        return NP.windowTime;
      } });
      var VP = _s();
      Object.defineProperty(a, "windowToggle", { enumerable: true, get: function() {
        return VP.windowToggle;
      } });
      var UP = ys();
      Object.defineProperty(a, "windowWhen", { enumerable: true, get: function() {
        return UP.windowWhen;
      } });
      var zP = qs();
      Object.defineProperty(a, "withLatestFrom", { enumerable: true, get: function() {
        return zP.withLatestFrom;
      } });
      var YP = Ss();
      Object.defineProperty(a, "zipAll", { enumerable: true, get: function() {
        return YP.zipAll;
      } });
      var BP = Ps();
      Object.defineProperty(a, "zipWith", { enumerable: true, get: function() {
        return BP.zipWith;
      } });
    });
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.filterAsync = exports3.timer = exports3.throwIfEmpty = exports3.tap = exports3.takeUntil = exports3.switchMap = exports3.startWith = exports3.retry = exports3.raceWith = exports3.race = exports3.pipe = exports3.of = exports3.noop = exports3.NEVER = exports3.mergeMap = exports3.merge = exports3.map = exports3.lastValueFrom = exports3.ignoreElements = exports3.identity = exports3.fromEvent = exports3.from = exports3.forkJoin = exports3.firstValueFrom = exports3.first = exports3.filter = exports3.EMPTY = exports3.delay = exports3.defer = exports3.defaultIfEmpty = exports3.concatMap = exports3.catchError = exports3.bufferCount = void 0;
    var S = io();
    Object.defineProperty(exports3, "bufferCount", { enumerable: true, get: function() {
      return S.bufferCount;
    } });
    Object.defineProperty(exports3, "catchError", { enumerable: true, get: function() {
      return S.catchError;
    } });
    Object.defineProperty(exports3, "concatMap", { enumerable: true, get: function() {
      return S.concatMap;
    } });
    Object.defineProperty(exports3, "defaultIfEmpty", { enumerable: true, get: function() {
      return S.defaultIfEmpty;
    } });
    Object.defineProperty(exports3, "defer", { enumerable: true, get: function() {
      return S.defer;
    } });
    Object.defineProperty(exports3, "delay", { enumerable: true, get: function() {
      return S.delay;
    } });
    Object.defineProperty(exports3, "EMPTY", { enumerable: true, get: function() {
      return S.EMPTY;
    } });
    Object.defineProperty(exports3, "filter", { enumerable: true, get: function() {
      return S.filter;
    } });
    Object.defineProperty(exports3, "first", { enumerable: true, get: function() {
      return S.first;
    } });
    Object.defineProperty(exports3, "firstValueFrom", { enumerable: true, get: function() {
      return S.firstValueFrom;
    } });
    Object.defineProperty(exports3, "forkJoin", { enumerable: true, get: function() {
      return S.forkJoin;
    } });
    Object.defineProperty(exports3, "from", { enumerable: true, get: function() {
      return S.from;
    } });
    Object.defineProperty(exports3, "fromEvent", { enumerable: true, get: function() {
      return S.fromEvent;
    } });
    Object.defineProperty(exports3, "identity", { enumerable: true, get: function() {
      return S.identity;
    } });
    Object.defineProperty(exports3, "ignoreElements", { enumerable: true, get: function() {
      return S.ignoreElements;
    } });
    Object.defineProperty(exports3, "lastValueFrom", { enumerable: true, get: function() {
      return S.lastValueFrom;
    } });
    Object.defineProperty(exports3, "map", { enumerable: true, get: function() {
      return S.map;
    } });
    Object.defineProperty(exports3, "merge", { enumerable: true, get: function() {
      return S.merge;
    } });
    Object.defineProperty(exports3, "mergeMap", { enumerable: true, get: function() {
      return S.mergeMap;
    } });
    Object.defineProperty(exports3, "NEVER", { enumerable: true, get: function() {
      return S.NEVER;
    } });
    Object.defineProperty(exports3, "noop", { enumerable: true, get: function() {
      return S.noop;
    } });
    Object.defineProperty(exports3, "of", { enumerable: true, get: function() {
      return S.of;
    } });
    Object.defineProperty(exports3, "pipe", { enumerable: true, get: function() {
      return S.pipe;
    } });
    Object.defineProperty(exports3, "race", { enumerable: true, get: function() {
      return S.race;
    } });
    Object.defineProperty(exports3, "raceWith", { enumerable: true, get: function() {
      return S.raceWith;
    } });
    Object.defineProperty(exports3, "retry", { enumerable: true, get: function() {
      return S.retry;
    } });
    Object.defineProperty(exports3, "startWith", { enumerable: true, get: function() {
      return S.startWith;
    } });
    Object.defineProperty(exports3, "switchMap", { enumerable: true, get: function() {
      return S.switchMap;
    } });
    Object.defineProperty(exports3, "takeUntil", { enumerable: true, get: function() {
      return S.takeUntil;
    } });
    Object.defineProperty(exports3, "tap", { enumerable: true, get: function() {
      return S.tap;
    } });
    Object.defineProperty(exports3, "throwIfEmpty", { enumerable: true, get: function() {
      return S.throwIfEmpty;
    } });
    Object.defineProperty(exports3, "timer", { enumerable: true, get: function() {
      return S.timer;
    } });
    var Yi = io();
    function DP(r) {
      return (0, Yi.mergeMap)((t) => (0, Yi.from)(Promise.resolve(r(t))).pipe((0, Yi.filter)((e) => e), (0, Yi.map)(() => t)));
    }
    exports3.filterAsync = DP;
  })(rxjs);
  var EventEmitter$1 = {};
  var mitt = {};
  (function(exports3) {
    var u = Object.defineProperty;
    var l = Object.getOwnPropertyDescriptor;
    var o = Object.getOwnPropertyNames;
    var _ = Object.prototype.hasOwnProperty;
    var d = (e, t) => () => (e && (t = e(e = 0)), t);
    var s = (e, t) => {
      for (var i2 in t)
        u(e, i2, { get: t[i2], enumerable: true });
    }, g = (e, t, i2, r) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let n of o(t))
          !_.call(e, n) && n !== i2 && u(e, n, { get: () => t[n], enumerable: !(r = l(t, n)) || r.enumerable });
      return e;
    };
    var c = (e) => g(u({}, "__esModule", { value: true }), e);
    var f = {};
    s(f, { default: () => v });
    function v(e) {
      return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, i2) {
        var r = e.get(t);
        r ? r.push(i2) : e.set(t, [i2]);
      }, off: function(t, i2) {
        var r = e.get(t);
        r && (i2 ? r.splice(r.indexOf(i2) >>> 0, 1) : e.set(t, []));
      }, emit: function(t, i2) {
        var r = e.get(t);
        r && r.slice().map(function(n) {
          n(i2);
        }), (r = e.get("*")) && r.slice().map(function(n) {
          n(t, i2);
        });
      } };
    }
    var a = d(() => {
    });
    var b = exports3 && exports3.__createBinding || (Object.create ? function(e, t, i2, r) {
      r === void 0 && (r = i2);
      var n = Object.getOwnPropertyDescriptor(t, i2);
      (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: true, get: function() {
        return t[i2];
      } }), Object.defineProperty(e, r, n);
    } : function(e, t, i2, r) {
      r === void 0 && (r = i2), e[r] = t[i2];
    }), p = exports3 && exports3.__exportStar || function(e, t) {
      for (var i2 in e)
        i2 !== "default" && !Object.prototype.hasOwnProperty.call(t, i2) && b(t, e, i2);
    }, O = exports3 && exports3.__importDefault || function(e) {
      return e && e.__esModule ? e : { default: e };
    };
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.default = void 0;
    p((a(), c(f)), exports3);
    var h = (a(), c(f));
    Object.defineProperty(exports3, "default", { enumerable: true, get: function() {
      return O(h).default;
    } });
  })(mitt);
  var disposable = {};
  (function(exports3) {
    var _disposed3, _stack, _a2, _b, _disposed4, _stack2, _c, _d;
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.AsyncDisposableStack = exports3.DisposableStack = exports3.asyncDisposeSymbol = exports3.disposeSymbol = void 0;
    Symbol.dispose ?? (Symbol.dispose = Symbol("dispose"));
    Symbol.asyncDispose ?? (Symbol.asyncDispose = Symbol("asyncDispose"));
    exports3.disposeSymbol = Symbol.dispose;
    exports3.asyncDisposeSymbol = Symbol.asyncDispose;
    const _DisposableStack = class _DisposableStack {
      constructor() {
        __privateAdd(this, _disposed3, false);
        __privateAdd(this, _stack, []);
        __publicField(this, _a2, this.dispose);
        __publicField(this, _b, "DisposableStack");
      }
      /**
       * Returns a value indicating whether this stack has been disposed.
       */
      get disposed() {
        return __privateGet(this, _disposed3);
      }
      /**
       * Disposes each resource in the stack in the reverse order that they were added.
       */
      dispose() {
        if (__privateGet(this, _disposed3)) {
          return;
        }
        __privateSet(this, _disposed3, true);
        for (const resource of __privateGet(this, _stack).reverse()) {
          resource[exports3.disposeSymbol]();
        }
      }
      /**
       * Adds a disposable resource to the stack, returning the resource.
       *
       * @param value - The resource to add. `null` and `undefined` will not be added,
       * but will be returned.
       * @returns The provided `value`.
       */
      use(value) {
        if (value) {
          __privateGet(this, _stack).push(value);
        }
        return value;
      }
      /**
       * Adds a value and associated disposal callback as a resource to the stack.
       *
       * @param value - The value to add.
       * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
       * method. Will be invoked with `value` as the first parameter.
       * @returns The provided `value`.
       */
      adopt(value, onDispose) {
        __privateGet(this, _stack).push({
          [exports3.disposeSymbol]() {
            onDispose(value);
          }
        });
        return value;
      }
      /**
       * Adds a callback to be invoked when the stack is disposed.
       */
      defer(onDispose) {
        __privateGet(this, _stack).push({
          [exports3.disposeSymbol]() {
            onDispose();
          }
        });
      }
      /**
       * Move all resources out of this stack and into a new `DisposableStack`, and
       * marks this stack as disposed.
       *
       * @example
       *
       * ```ts
       * class C {
       *   #res1: Disposable;
       *   #res2: Disposable;
       *   #disposables: DisposableStack;
       *   constructor() {
       *     // stack will be disposed when exiting constructor for any reason
       *     using stack = new DisposableStack();
       *
       *     // get first resource
       *     this.#res1 = stack.use(getResource1());
       *
       *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
       *     this.#res2 = stack.use(getResource2());
       *
       *     // all operations succeeded, move resources out of `stack` so that
       *     // they aren't disposed when constructor exits
       *     this.#disposables = stack.move();
       *   }
       *
       *   [disposeSymbol]() {
       *     this.#disposables.dispose();
       *   }
       * }
       * ```
       */
      move() {
        if (__privateGet(this, _disposed3)) {
          throw new ReferenceError("a disposed stack can not use anything new");
        }
        const stack = new _DisposableStack();
        __privateSet(stack, _stack, __privateGet(this, _stack));
        __privateSet(this, _disposed3, true);
        return stack;
      }
    };
    _a2 = exports3.disposeSymbol, _b = Symbol.toStringTag;
    _disposed3 = new WeakMap();
    _stack = new WeakMap();
    let DisposableStack = _DisposableStack;
    exports3.DisposableStack = DisposableStack;
    const _AsyncDisposableStack = class _AsyncDisposableStack {
      constructor() {
        __privateAdd(this, _disposed4, false);
        __privateAdd(this, _stack2, []);
        __publicField(this, _c, this.dispose);
        __publicField(this, _d, "AsyncDisposableStack");
      }
      /**
       * Returns a value indicating whether this stack has been disposed.
       */
      get disposed() {
        return __privateGet(this, _disposed4);
      }
      /**
       * Disposes each resource in the stack in the reverse order that they were added.
       */
      async dispose() {
        if (__privateGet(this, _disposed4)) {
          return;
        }
        __privateSet(this, _disposed4, true);
        for (const resource of __privateGet(this, _stack2).reverse()) {
          await resource[exports3.asyncDisposeSymbol]();
        }
      }
      /**
       * Adds a disposable resource to the stack, returning the resource.
       *
       * @param value - The resource to add. `null` and `undefined` will not be added,
       * but will be returned.
       * @returns The provided {@link value}.
       */
      use(value) {
        if (value) {
          __privateGet(this, _stack2).push(value);
        }
        return value;
      }
      /**
       * Adds a value and associated disposal callback as a resource to the stack.
       *
       * @param value - The value to add.
       * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
       * method. Will be invoked with `value` as the first parameter.
       * @returns The provided {@link value}.
       */
      adopt(value, onDispose) {
        __privateGet(this, _stack2).push({
          [exports3.asyncDisposeSymbol]() {
            return onDispose(value);
          }
        });
        return value;
      }
      /**
       * Adds a callback to be invoked when the stack is disposed.
       */
      defer(onDispose) {
        __privateGet(this, _stack2).push({
          [exports3.asyncDisposeSymbol]() {
            return onDispose();
          }
        });
      }
      /**
       * Move all resources out of this stack and into a new `DisposableStack`, and
       * marks this stack as disposed.
       *
       * @example
       *
       * ```ts
       * class C {
       *   #res1: Disposable;
       *   #res2: Disposable;
       *   #disposables: DisposableStack;
       *   constructor() {
       *     // stack will be disposed when exiting constructor for any reason
       *     using stack = new DisposableStack();
       *
       *     // get first resource
       *     this.#res1 = stack.use(getResource1());
       *
       *     // get second resource. If this fails, both `stack` and `#res1` will be disposed.
       *     this.#res2 = stack.use(getResource2());
       *
       *     // all operations succeeded, move resources out of `stack` so that
       *     // they aren't disposed when constructor exits
       *     this.#disposables = stack.move();
       *   }
       *
       *   [disposeSymbol]() {
       *     this.#disposables.dispose();
       *   }
       * }
       * ```
       */
      move() {
        if (__privateGet(this, _disposed4)) {
          throw new ReferenceError("a disposed stack can not use anything new");
        }
        const stack = new _AsyncDisposableStack();
        __privateSet(stack, _stack2, __privateGet(this, _stack2));
        __privateSet(this, _disposed4, true);
        return stack;
      }
    };
    _c = exports3.asyncDisposeSymbol, _d = Symbol.toStringTag;
    _disposed4 = new WeakMap();
    _stack2 = new WeakMap();
    let AsyncDisposableStack = _AsyncDisposableStack;
    exports3.AsyncDisposableStack = AsyncDisposableStack;
  })(disposable);
  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(EventEmitter$1, "__esModule", { value: true });
  EventEmitter$1.EventSubscription = EventEmitter$1.EventEmitter = void 0;
  const mitt_js_1 = __importDefault(mitt);
  const disposable_js_1$g = disposable;
  class EventEmitter {
    /**
     * @internal
     */
    constructor() {
      __privateAdd(this, _emitter, void 0);
      __privateAdd(this, _handlers, /* @__PURE__ */ new Map());
      __privateSet(this, _emitter, (0, mitt_js_1.default)(__privateGet(this, _handlers)));
    }
    /**
     * Bind an event listener to fire when an event occurs.
     * @param type - the event type you'd like to listen to. Can be a string or symbol.
     * @param handler - the function to be called when the event occurs.
     * @returns `this` to enable you to chain method calls.
     */
    on(type, handler) {
      __privateGet(this, _emitter).on(type, handler);
      return this;
    }
    /**
     * Remove an event listener from firing.
     * @param type - the event type you'd like to stop listening to.
     * @param handler - the function that should be removed.
     * @returns `this` to enable you to chain method calls.
     */
    off(type, handler) {
      __privateGet(this, _emitter).off(type, handler);
      return this;
    }
    /**
     * Remove an event listener.
     *
     * @deprecated please use {@link EventEmitter.off} instead.
     */
    removeListener(type, handler) {
      this.off(type, handler);
      return this;
    }
    /**
     * Add an event listener.
     *
     * @deprecated please use {@link EventEmitter.on} instead.
     */
    addListener(type, handler) {
      this.on(type, handler);
      return this;
    }
    /**
     * Emit an event and call any associated listeners.
     *
     * @param type - the event you'd like to emit
     * @param eventData - any data you'd like to emit with the event
     * @returns `true` if there are any listeners, `false` if there are not.
     */
    emit(type, event) {
      __privateGet(this, _emitter).emit(type, event);
      return this.listenerCount(type) > 0;
    }
    /**
     * Like `on` but the listener will only be fired once and then it will be removed.
     * @param type - the event you'd like to listen to
     * @param handler - the handler function to run when the event occurs
     * @returns `this` to enable you to chain method calls.
     */
    once(type, handler) {
      const onceHandler = (eventData) => {
        handler(eventData);
        this.off(type, onceHandler);
      };
      return this.on(type, onceHandler);
    }
    /**
     * Gets the number of listeners for a given event.
     *
     * @param type - the event to get the listener count for
     * @returns the number of listeners bound to the given event
     */
    listenerCount(type) {
      var _a2;
      return ((_a2 = __privateGet(this, _handlers).get(type)) == null ? void 0 : _a2.length) || 0;
    }
    /**
     * Removes all listeners. If given an event argument, it will remove only
     * listeners for that event.
     *
     * @param type - the event to remove listeners for.
     * @returns `this` to enable you to chain method calls.
     */
    removeAllListeners(type) {
      if (type === void 0 || type === "*") {
        __privateGet(this, _handlers).clear();
      } else {
        __privateGet(this, _handlers).delete(type);
      }
      return this;
    }
  }
  _emitter = new WeakMap();
  _handlers = new WeakMap();
  EventEmitter$1.EventEmitter = EventEmitter;
  class EventSubscription {
    constructor(target, type, handler) {
      __privateAdd(this, _target, void 0);
      __privateAdd(this, _type, void 0);
      __privateAdd(this, _handler, void 0);
      __privateSet(this, _target, target);
      __privateSet(this, _type, type);
      __privateSet(this, _handler, handler);
      __privateGet(this, _target).on(__privateGet(this, _type), __privateGet(this, _handler));
    }
    [disposable_js_1$g.disposeSymbol]() {
      __privateGet(this, _target).off(__privateGet(this, _type), __privateGet(this, _handler));
    }
  }
  _target = new WeakMap();
  _type = new WeakMap();
  _handler = new WeakMap();
  EventEmitter$1.EventSubscription = EventSubscription;
  var buffer = {};
  var base64Js = {};
  base64Js.byteLength = byteLength;
  base64Js.toByteArray = toByteArray;
  base64Js.fromByteArray = fromByteArray;
  var lookup = [];
  var revLookup = [];
  var Arr = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
  var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (var i = 0, len = code.length; i < len; ++i) {
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
  }
  revLookup["-".charCodeAt(0)] = 62;
  revLookup["_".charCodeAt(0)] = 63;
  function getLens(b64) {
    var len2 = b64.length;
    if (len2 % 4 > 0) {
      throw new Error("Invalid string. Length must be a multiple of 4");
    }
    var validLen = b64.indexOf("=");
    if (validLen === -1)
      validLen = len2;
    var placeHoldersLen = validLen === len2 ? 0 : 4 - validLen % 4;
    return [validLen, placeHoldersLen];
  }
  function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
  }
  function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    var len2 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i2;
    for (i2 = 0; i2 < len2; i2 += 4) {
      tmp = revLookup[b64.charCodeAt(i2)] << 18 | revLookup[b64.charCodeAt(i2 + 1)] << 12 | revLookup[b64.charCodeAt(i2 + 2)] << 6 | revLookup[b64.charCodeAt(i2 + 3)];
      arr[curByte++] = tmp >> 16 & 255;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
      tmp = revLookup[b64.charCodeAt(i2)] << 2 | revLookup[b64.charCodeAt(i2 + 1)] >> 4;
      arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
      tmp = revLookup[b64.charCodeAt(i2)] << 10 | revLookup[b64.charCodeAt(i2 + 1)] << 4 | revLookup[b64.charCodeAt(i2 + 2)] >> 2;
      arr[curByte++] = tmp >> 8 & 255;
      arr[curByte++] = tmp & 255;
    }
    return arr;
  }
  function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
  }
  function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i2 = start; i2 < end; i2 += 3) {
      tmp = (uint8[i2] << 16 & 16711680) + (uint8[i2 + 1] << 8 & 65280) + (uint8[i2 + 2] & 255);
      output.push(tripletToBase64(tmp));
    }
    return output.join("");
  }
  function fromByteArray(uint8) {
    var tmp;
    var len2 = uint8.length;
    var extraBytes = len2 % 3;
    var parts = [];
    var maxChunkLength = 16383;
    for (var i2 = 0, len22 = len2 - extraBytes; i2 < len22; i2 += maxChunkLength) {
      parts.push(encodeChunk(uint8, i2, i2 + maxChunkLength > len22 ? len22 : i2 + maxChunkLength));
    }
    if (extraBytes === 1) {
      tmp = uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 2] + lookup[tmp << 4 & 63] + "=="
      );
    } else if (extraBytes === 2) {
      tmp = (uint8[len2 - 2] << 8) + uint8[len2 - 1];
      parts.push(
        lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + "="
      );
    }
    return parts.join("");
  }
  var ieee754 = {};
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  ieee754.read = function(buffer2, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i2 = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer2[offset + i2];
    i2 += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
    }
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer2[offset + i2], i2 += d, nBits -= 8) {
    }
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
  };
  ieee754.write = function(buffer2, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i2 = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer2[offset + i2] = m & 255, i2 += d, m /= 256, mLen -= 8) {
    }
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer2[offset + i2] = e & 255, i2 += d, e /= 256, eLen -= 8) {
    }
    buffer2[offset + i2 - d] |= s * 128;
  };
  /*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */
  (function(exports3) {
    var base64 = base64Js;
    var ieee754$1 = ieee754;
    exports3.Buffer = Buffer2;
    exports3.SlowBuffer = SlowBuffer;
    exports3.INSPECT_MAX_BYTES = 50;
    var K_MAX_LENGTH = 2147483647;
    exports3.kMaxLength = K_MAX_LENGTH;
    Buffer2.TYPED_ARRAY_SUPPORT = typedArraySupport();
    if (!Buffer2.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
      console.error(
        "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
      );
    }
    function typedArraySupport() {
      try {
        var arr = new Uint8Array(1);
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } };
        return arr.foo() === 42;
      } catch (e) {
        return false;
      }
    }
    Object.defineProperty(Buffer2.prototype, "parent", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.buffer;
      }
    });
    Object.defineProperty(Buffer2.prototype, "offset", {
      enumerable: true,
      get: function() {
        if (!Buffer2.isBuffer(this))
          return void 0;
        return this.byteOffset;
      }
    });
    function createBuffer(length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"');
      }
      var buf = new Uint8Array(length);
      buf.__proto__ = Buffer2.prototype;
      return buf;
    }
    function Buffer2(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        if (typeof encodingOrOffset === "string") {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          );
        }
        return allocUnsafe(arg);
      }
      return from(arg, encodingOrOffset, length);
    }
    if (typeof Symbol !== "undefined" && Symbol.species != null && Buffer2[Symbol.species] === Buffer2) {
      Object.defineProperty(Buffer2, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
      });
    }
    Buffer2.poolSize = 8192;
    function from(value, encodingOrOffset, length) {
      if (typeof value === "string") {
        return fromString(value, encodingOrOffset);
      }
      if (ArrayBuffer.isView(value)) {
        return fromArrayLike(value);
      }
      if (value == null) {
        throw TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
        );
      }
      if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) {
        return fromArrayBuffer(value, encodingOrOffset, length);
      }
      if (typeof value === "number") {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        );
      }
      var valueOf = value.valueOf && value.valueOf();
      if (valueOf != null && valueOf !== value) {
        return Buffer2.from(valueOf, encodingOrOffset, length);
      }
      var b = fromObject(value);
      if (b)
        return b;
      if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === "function") {
        return Buffer2.from(
          value[Symbol.toPrimitive]("string"),
          encodingOrOffset,
          length
        );
      }
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value
      );
    }
    Buffer2.from = function(value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length);
    };
    Buffer2.prototype.__proto__ = Uint8Array.prototype;
    Buffer2.__proto__ = Uint8Array;
    function assertSize(size) {
      if (typeof size !== "number") {
        throw new TypeError('"size" argument must be of type number');
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"');
      }
    }
    function alloc(size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(size);
      }
      if (fill !== void 0) {
        return typeof encoding === "string" ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
      }
      return createBuffer(size);
    }
    Buffer2.alloc = function(size, fill, encoding) {
      return alloc(size, fill, encoding);
    };
    function allocUnsafe(size) {
      assertSize(size);
      return createBuffer(size < 0 ? 0 : checked(size) | 0);
    }
    Buffer2.allocUnsafe = function(size) {
      return allocUnsafe(size);
    };
    Buffer2.allocUnsafeSlow = function(size) {
      return allocUnsafe(size);
    };
    function fromString(string, encoding) {
      if (typeof encoding !== "string" || encoding === "") {
        encoding = "utf8";
      }
      if (!Buffer2.isEncoding(encoding)) {
        throw new TypeError("Unknown encoding: " + encoding);
      }
      var length = byteLength2(string, encoding) | 0;
      var buf = createBuffer(length);
      var actual = buf.write(string, encoding);
      if (actual !== length) {
        buf = buf.slice(0, actual);
      }
      return buf;
    }
    function fromArrayLike(array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      var buf = createBuffer(length);
      for (var i2 = 0; i2 < length; i2 += 1) {
        buf[i2] = array[i2] & 255;
      }
      return buf;
    }
    function fromArrayBuffer(array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds');
      }
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds');
      }
      var buf;
      if (byteOffset === void 0 && length === void 0) {
        buf = new Uint8Array(array);
      } else if (length === void 0) {
        buf = new Uint8Array(array, byteOffset);
      } else {
        buf = new Uint8Array(array, byteOffset, length);
      }
      buf.__proto__ = Buffer2.prototype;
      return buf;
    }
    function fromObject(obj) {
      if (Buffer2.isBuffer(obj)) {
        var len2 = checked(obj.length) | 0;
        var buf = createBuffer(len2);
        if (buf.length === 0) {
          return buf;
        }
        obj.copy(buf, 0, 0, len2);
        return buf;
      }
      if (obj.length !== void 0) {
        if (typeof obj.length !== "number" || numberIsNaN(obj.length)) {
          return createBuffer(0);
        }
        return fromArrayLike(obj);
      }
      if (obj.type === "Buffer" && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data);
      }
    }
    function checked(length) {
      if (length >= K_MAX_LENGTH) {
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + " bytes");
      }
      return length | 0;
    }
    function SlowBuffer(length) {
      if (+length != length) {
        length = 0;
      }
      return Buffer2.alloc(+length);
    }
    Buffer2.isBuffer = function isBuffer(b) {
      return b != null && b._isBuffer === true && b !== Buffer2.prototype;
    };
    Buffer2.compare = function compare(a, b) {
      if (isInstance(a, Uint8Array))
        a = Buffer2.from(a, a.offset, a.byteLength);
      if (isInstance(b, Uint8Array))
        b = Buffer2.from(b, b.offset, b.byteLength);
      if (!Buffer2.isBuffer(a) || !Buffer2.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      }
      if (a === b)
        return 0;
      var x = a.length;
      var y = b.length;
      for (var i2 = 0, len2 = Math.min(x, y); i2 < len2; ++i2) {
        if (a[i2] !== b[i2]) {
          x = a[i2];
          y = b[i2];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    Buffer2.isEncoding = function isEncoding(encoding) {
      switch (String(encoding).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return true;
        default:
          return false;
      }
    };
    Buffer2.concat = function concat(list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
      }
      if (list.length === 0) {
        return Buffer2.alloc(0);
      }
      var i2;
      if (length === void 0) {
        length = 0;
        for (i2 = 0; i2 < list.length; ++i2) {
          length += list[i2].length;
        }
      }
      var buffer2 = Buffer2.allocUnsafe(length);
      var pos = 0;
      for (i2 = 0; i2 < list.length; ++i2) {
        var buf = list[i2];
        if (isInstance(buf, Uint8Array)) {
          buf = Buffer2.from(buf);
        }
        if (!Buffer2.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer2, pos);
        pos += buf.length;
      }
      return buffer2;
    };
    function byteLength2(string, encoding) {
      if (Buffer2.isBuffer(string)) {
        return string.length;
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength;
      }
      if (typeof string !== "string") {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof string
        );
      }
      var len2 = string.length;
      var mustMatch = arguments.length > 2 && arguments[2] === true;
      if (!mustMatch && len2 === 0)
        return 0;
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "ascii":
          case "latin1":
          case "binary":
            return len2;
          case "utf8":
          case "utf-8":
            return utf8ToBytes(string).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return len2 * 2;
          case "hex":
            return len2 >>> 1;
          case "base64":
            return base64ToBytes(string).length;
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length;
            }
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.byteLength = byteLength2;
    function slowToString(encoding, start, end) {
      var loweredCase = false;
      if (start === void 0 || start < 0) {
        start = 0;
      }
      if (start > this.length) {
        return "";
      }
      if (end === void 0 || end > this.length) {
        end = this.length;
      }
      if (end <= 0) {
        return "";
      }
      end >>>= 0;
      start >>>= 0;
      if (end <= start) {
        return "";
      }
      if (!encoding)
        encoding = "utf8";
      while (true) {
        switch (encoding) {
          case "hex":
            return hexSlice(this, start, end);
          case "utf8":
          case "utf-8":
            return utf8Slice(this, start, end);
          case "ascii":
            return asciiSlice(this, start, end);
          case "latin1":
          case "binary":
            return latin1Slice(this, start, end);
          case "base64":
            return base64Slice(this, start, end);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return utf16leSlice(this, start, end);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = (encoding + "").toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer2.prototype._isBuffer = true;
    function swap(b, n, m) {
      var i2 = b[n];
      b[n] = b[m];
      b[m] = i2;
    }
    Buffer2.prototype.swap16 = function swap16() {
      var len2 = this.length;
      if (len2 % 2 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      }
      for (var i2 = 0; i2 < len2; i2 += 2) {
        swap(this, i2, i2 + 1);
      }
      return this;
    };
    Buffer2.prototype.swap32 = function swap32() {
      var len2 = this.length;
      if (len2 % 4 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      }
      for (var i2 = 0; i2 < len2; i2 += 4) {
        swap(this, i2, i2 + 3);
        swap(this, i2 + 1, i2 + 2);
      }
      return this;
    };
    Buffer2.prototype.swap64 = function swap64() {
      var len2 = this.length;
      if (len2 % 8 !== 0) {
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      }
      for (var i2 = 0; i2 < len2; i2 += 8) {
        swap(this, i2, i2 + 7);
        swap(this, i2 + 1, i2 + 6);
        swap(this, i2 + 2, i2 + 5);
        swap(this, i2 + 3, i2 + 4);
      }
      return this;
    };
    Buffer2.prototype.toString = function toString() {
      var length = this.length;
      if (length === 0)
        return "";
      if (arguments.length === 0)
        return utf8Slice(this, 0, length);
      return slowToString.apply(this, arguments);
    };
    Buffer2.prototype.toLocaleString = Buffer2.prototype.toString;
    Buffer2.prototype.equals = function equals(b) {
      if (!Buffer2.isBuffer(b))
        throw new TypeError("Argument must be a Buffer");
      if (this === b)
        return true;
      return Buffer2.compare(this, b) === 0;
    };
    Buffer2.prototype.inspect = function inspect() {
      var str = "";
      var max = exports3.INSPECT_MAX_BYTES;
      str = this.toString("hex", 0, max).replace(/(.{2})/g, "$1 ").trim();
      if (this.length > max)
        str += " ... ";
      return "<Buffer " + str + ">";
    };
    Buffer2.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer2.from(target, target.offset, target.byteLength);
      }
      if (!Buffer2.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof target
        );
      }
      if (start === void 0) {
        start = 0;
      }
      if (end === void 0) {
        end = target ? target.length : 0;
      }
      if (thisStart === void 0) {
        thisStart = 0;
      }
      if (thisEnd === void 0) {
        thisEnd = this.length;
      }
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError("out of range index");
      }
      if (thisStart >= thisEnd && start >= end) {
        return 0;
      }
      if (thisStart >= thisEnd) {
        return -1;
      }
      if (start >= end) {
        return 1;
      }
      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;
      if (this === target)
        return 0;
      var x = thisEnd - thisStart;
      var y = end - start;
      var len2 = Math.min(x, y);
      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);
      for (var i2 = 0; i2 < len2; ++i2) {
        if (thisCopy[i2] !== targetCopy[i2]) {
          x = thisCopy[i2];
          y = targetCopy[i2];
          break;
        }
      }
      if (x < y)
        return -1;
      if (y < x)
        return 1;
      return 0;
    };
    function bidirectionalIndexOf(buffer2, val, byteOffset, encoding, dir) {
      if (buffer2.length === 0)
        return -1;
      if (typeof byteOffset === "string") {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 2147483647) {
        byteOffset = 2147483647;
      } else if (byteOffset < -2147483648) {
        byteOffset = -2147483648;
      }
      byteOffset = +byteOffset;
      if (numberIsNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer2.length - 1;
      }
      if (byteOffset < 0)
        byteOffset = buffer2.length + byteOffset;
      if (byteOffset >= buffer2.length) {
        if (dir)
          return -1;
        else
          byteOffset = buffer2.length - 1;
      } else if (byteOffset < 0) {
        if (dir)
          byteOffset = 0;
        else
          return -1;
      }
      if (typeof val === "string") {
        val = Buffer2.from(val, encoding);
      }
      if (Buffer2.isBuffer(val)) {
        if (val.length === 0) {
          return -1;
        }
        return arrayIndexOf(buffer2, val, byteOffset, encoding, dir);
      } else if (typeof val === "number") {
        val = val & 255;
        if (typeof Uint8Array.prototype.indexOf === "function") {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer2, val, byteOffset);
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer2, val, byteOffset);
          }
        }
        return arrayIndexOf(buffer2, [val], byteOffset, encoding, dir);
      }
      throw new TypeError("val must be string, number or Buffer");
    }
    function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;
      if (encoding !== void 0) {
        encoding = String(encoding).toLowerCase();
        if (encoding === "ucs2" || encoding === "ucs-2" || encoding === "utf16le" || encoding === "utf-16le") {
          if (arr.length < 2 || val.length < 2) {
            return -1;
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }
      function read(buf, i3) {
        if (indexSize === 1) {
          return buf[i3];
        } else {
          return buf.readUInt16BE(i3 * indexSize);
        }
      }
      var i2;
      if (dir) {
        var foundIndex = -1;
        for (i2 = byteOffset; i2 < arrLength; i2++) {
          if (read(arr, i2) === read(val, foundIndex === -1 ? 0 : i2 - foundIndex)) {
            if (foundIndex === -1)
              foundIndex = i2;
            if (i2 - foundIndex + 1 === valLength)
              return foundIndex * indexSize;
          } else {
            if (foundIndex !== -1)
              i2 -= i2 - foundIndex;
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength)
          byteOffset = arrLength - valLength;
        for (i2 = byteOffset; i2 >= 0; i2--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i2 + j) !== read(val, j)) {
              found = false;
              break;
            }
          }
          if (found)
            return i2;
        }
      }
      return -1;
    }
    Buffer2.prototype.includes = function includes(val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1;
    };
    Buffer2.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
    };
    Buffer2.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
    };
    function hexWrite(buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }
      var strLen = string.length;
      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i2 = 0; i2 < length; ++i2) {
        var parsed = parseInt(string.substr(i2 * 2, 2), 16);
        if (numberIsNaN(parsed))
          return i2;
        buf[offset + i2] = parsed;
      }
      return i2;
    }
    function utf8Write(buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
    }
    function asciiWrite(buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length);
    }
    function latin1Write(buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length);
    }
    function base64Write(buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length);
    }
    function ucs2Write(buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
    }
    Buffer2.prototype.write = function write(string, offset, length, encoding) {
      if (offset === void 0) {
        encoding = "utf8";
        length = this.length;
        offset = 0;
      } else if (length === void 0 && typeof offset === "string") {
        encoding = offset;
        length = this.length;
        offset = 0;
      } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
          length = length >>> 0;
          if (encoding === void 0)
            encoding = "utf8";
        } else {
          encoding = length;
          length = void 0;
        }
      } else {
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      }
      var remaining = this.length - offset;
      if (length === void 0 || length > remaining)
        length = remaining;
      if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
        throw new RangeError("Attempt to write outside buffer bounds");
      }
      if (!encoding)
        encoding = "utf8";
      var loweredCase = false;
      for (; ; ) {
        switch (encoding) {
          case "hex":
            return hexWrite(this, string, offset, length);
          case "utf8":
          case "utf-8":
            return utf8Write(this, string, offset, length);
          case "ascii":
            return asciiWrite(this, string, offset, length);
          case "latin1":
          case "binary":
            return latin1Write(this, string, offset, length);
          case "base64":
            return base64Write(this, string, offset, length);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ucs2Write(this, string, offset, length);
          default:
            if (loweredCase)
              throw new TypeError("Unknown encoding: " + encoding);
            encoding = ("" + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };
    Buffer2.prototype.toJSON = function toJSON() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function base64Slice(buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf);
      } else {
        return base64.fromByteArray(buf.slice(start, end));
      }
    }
    function utf8Slice(buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];
      var i2 = start;
      while (i2 < end) {
        var firstByte = buf[i2];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i2 + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 128) {
                codePoint = firstByte;
              }
              break;
            case 2:
              secondByte = buf[i2 + 1];
              if ((secondByte & 192) === 128) {
                tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                if (tempCodePoint > 127) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 3:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
                  codePoint = tempCodePoint;
                }
              }
              break;
            case 4:
              secondByte = buf[i2 + 1];
              thirdByte = buf[i2 + 2];
              fourthByte = buf[i2 + 3];
              if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }
        if (codePoint === null) {
          codePoint = 65533;
          bytesPerSequence = 1;
        } else if (codePoint > 65535) {
          codePoint -= 65536;
          res.push(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i2 += bytesPerSequence;
      }
      return decodeCodePointsArray(res);
    }
    var MAX_ARGUMENTS_LENGTH = 4096;
    function decodeCodePointsArray(codePoints) {
      var len2 = codePoints.length;
      if (len2 <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
      }
      var res = "";
      var i2 = 0;
      while (i2 < len2) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i2, i2 += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res;
    }
    function asciiSlice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2] & 127);
      }
      return ret;
    }
    function latin1Slice(buf, start, end) {
      var ret = "";
      end = Math.min(buf.length, end);
      for (var i2 = start; i2 < end; ++i2) {
        ret += String.fromCharCode(buf[i2]);
      }
      return ret;
    }
    function hexSlice(buf, start, end) {
      var len2 = buf.length;
      if (!start || start < 0)
        start = 0;
      if (!end || end < 0 || end > len2)
        end = len2;
      var out = "";
      for (var i2 = start; i2 < end; ++i2) {
        out += toHex(buf[i2]);
      }
      return out;
    }
    function utf16leSlice(buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = "";
      for (var i2 = 0; i2 < bytes.length; i2 += 2) {
        res += String.fromCharCode(bytes[i2] + bytes[i2 + 1] * 256);
      }
      return res;
    }
    Buffer2.prototype.slice = function slice(start, end) {
      var len2 = this.length;
      start = ~~start;
      end = end === void 0 ? len2 : ~~end;
      if (start < 0) {
        start += len2;
        if (start < 0)
          start = 0;
      } else if (start > len2) {
        start = len2;
      }
      if (end < 0) {
        end += len2;
        if (end < 0)
          end = 0;
      } else if (end > len2) {
        end = len2;
      }
      if (end < start)
        end = start;
      var newBuf = this.subarray(start, end);
      newBuf.__proto__ = Buffer2.prototype;
      return newBuf;
    };
    function checkOffset(offset, ext, length) {
      if (offset % 1 !== 0 || offset < 0)
        throw new RangeError("offset is not uint");
      if (offset + ext > length)
        throw new RangeError("Trying to access beyond buffer length");
    }
    Buffer2.prototype.readUIntLE = function readUIntLE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength3, this.length);
      var val = this[offset];
      var mul = 1;
      var i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUIntBE = function readUIntBE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        checkOffset(offset, byteLength3, this.length);
      }
      var val = this[offset + --byteLength3];
      var mul = 1;
      while (byteLength3 > 0 && (mul *= 256)) {
        val += this[offset + --byteLength3] * mul;
      }
      return val;
    };
    Buffer2.prototype.readUInt8 = function readUInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      return this[offset];
    };
    Buffer2.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] | this[offset + 1] << 8;
    };
    Buffer2.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      return this[offset] << 8 | this[offset + 1];
    };
    Buffer2.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
    };
    Buffer2.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
    };
    Buffer2.prototype.readIntLE = function readIntLE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength3, this.length);
      var val = this[offset];
      var mul = 1;
      var i2 = 0;
      while (++i2 < byteLength3 && (mul *= 256)) {
        val += this[offset + i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer2.prototype.readIntBE = function readIntBE(offset, byteLength3, noAssert) {
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert)
        checkOffset(offset, byteLength3, this.length);
      var i2 = byteLength3;
      var mul = 1;
      var val = this[offset + --i2];
      while (i2 > 0 && (mul *= 256)) {
        val += this[offset + --i2] * mul;
      }
      mul *= 128;
      if (val >= mul)
        val -= Math.pow(2, 8 * byteLength3);
      return val;
    };
    Buffer2.prototype.readInt8 = function readInt8(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 1, this.length);
      if (!(this[offset] & 128))
        return this[offset];
      return (255 - this[offset] + 1) * -1;
    };
    Buffer2.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset] | this[offset + 1] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 2, this.length);
      var val = this[offset + 1] | this[offset] << 8;
      return val & 32768 ? val | 4294901760 : val;
    };
    Buffer2.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
    };
    Buffer2.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
    };
    Buffer2.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754$1.read(this, offset, true, 23, 4);
    };
    Buffer2.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 4, this.length);
      return ieee754$1.read(this, offset, false, 23, 4);
    };
    Buffer2.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754$1.read(this, offset, true, 52, 8);
    };
    Buffer2.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
      offset = offset >>> 0;
      if (!noAssert)
        checkOffset(offset, 8, this.length);
      return ieee754$1.read(this, offset, false, 52, 8);
    };
    function checkInt(buf, value, offset, ext, max, min) {
      if (!Buffer2.isBuffer(buf))
        throw new TypeError('"buffer" argument must be a Buffer instance');
      if (value > max || value < min)
        throw new RangeError('"value" argument is out of bounds');
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
    }
    Buffer2.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      var mul = 1;
      var i2 = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      byteLength3 = byteLength3 >>> 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength3) - 1;
        checkInt(this, value, offset, byteLength3, maxBytes, 0);
      }
      var i2 = byteLength3 - 1;
      var mul = 1;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        this[offset + i2] = value / mul & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 255, 0);
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 65535, 0);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset + 3] = value >>> 24;
      this[offset + 2] = value >>> 16;
      this[offset + 1] = value >>> 8;
      this[offset] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 4294967295, 0);
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    Buffer2.prototype.writeIntLE = function writeIntLE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i2 = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 255;
      while (++i2 < byteLength3 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 - 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeIntBE = function writeIntBE(value, offset, byteLength3, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength3 - 1);
        checkInt(this, value, offset, byteLength3, limit - 1, -limit);
      }
      var i2 = byteLength3 - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i2] = value & 255;
      while (--i2 >= 0 && (mul *= 256)) {
        if (value < 0 && sub === 0 && this[offset + i2 + 1] !== 0) {
          sub = 1;
        }
        this[offset + i2] = (value / mul >> 0) - sub & 255;
      }
      return offset + byteLength3;
    };
    Buffer2.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 1, 127, -128);
      if (value < 0)
        value = 255 + value + 1;
      this[offset] = value & 255;
      return offset + 1;
    };
    Buffer2.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      return offset + 2;
    };
    Buffer2.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 2, 32767, -32768);
      this[offset] = value >>> 8;
      this[offset + 1] = value & 255;
      return offset + 2;
    };
    Buffer2.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      this[offset] = value & 255;
      this[offset + 1] = value >>> 8;
      this[offset + 2] = value >>> 16;
      this[offset + 3] = value >>> 24;
      return offset + 4;
    };
    Buffer2.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert)
        checkInt(this, value, offset, 4, 2147483647, -2147483648);
      if (value < 0)
        value = 4294967295 + value + 1;
      this[offset] = value >>> 24;
      this[offset + 1] = value >>> 16;
      this[offset + 2] = value >>> 8;
      this[offset + 3] = value & 255;
      return offset + 4;
    };
    function checkIEEE754(buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length)
        throw new RangeError("Index out of range");
      if (offset < 0)
        throw new RangeError("Index out of range");
    }
    function writeFloat(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      ieee754$1.write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4;
    }
    Buffer2.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert);
    };
    function writeDouble(buf, value, offset, littleEndian, noAssert) {
      value = +value;
      offset = offset >>> 0;
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      ieee754$1.write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8;
    }
    Buffer2.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert);
    };
    Buffer2.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert);
    };
    Buffer2.prototype.copy = function copy(target, targetStart, start, end) {
      if (!Buffer2.isBuffer(target))
        throw new TypeError("argument should be a Buffer");
      if (!start)
        start = 0;
      if (!end && end !== 0)
        end = this.length;
      if (targetStart >= target.length)
        targetStart = target.length;
      if (!targetStart)
        targetStart = 0;
      if (end > 0 && end < start)
        end = start;
      if (end === start)
        return 0;
      if (target.length === 0 || this.length === 0)
        return 0;
      if (targetStart < 0) {
        throw new RangeError("targetStart out of bounds");
      }
      if (start < 0 || start >= this.length)
        throw new RangeError("Index out of range");
      if (end < 0)
        throw new RangeError("sourceEnd out of bounds");
      if (end > this.length)
        end = this.length;
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }
      var len2 = end - start;
      if (this === target && typeof Uint8Array.prototype.copyWithin === "function") {
        this.copyWithin(targetStart, start, end);
      } else if (this === target && start < targetStart && targetStart < end) {
        for (var i2 = len2 - 1; i2 >= 0; --i2) {
          target[i2 + targetStart] = this[i2 + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        );
      }
      return len2;
    };
    Buffer2.prototype.fill = function fill(val, start, end, encoding) {
      if (typeof val === "string") {
        if (typeof start === "string") {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === "string") {
          encoding = end;
          end = this.length;
        }
        if (encoding !== void 0 && typeof encoding !== "string") {
          throw new TypeError("encoding must be a string");
        }
        if (typeof encoding === "string" && !Buffer2.isEncoding(encoding)) {
          throw new TypeError("Unknown encoding: " + encoding);
        }
        if (val.length === 1) {
          var code2 = val.charCodeAt(0);
          if (encoding === "utf8" && code2 < 128 || encoding === "latin1") {
            val = code2;
          }
        }
      } else if (typeof val === "number") {
        val = val & 255;
      }
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError("Out of range index");
      }
      if (end <= start) {
        return this;
      }
      start = start >>> 0;
      end = end === void 0 ? this.length : end >>> 0;
      if (!val)
        val = 0;
      var i2;
      if (typeof val === "number") {
        for (i2 = start; i2 < end; ++i2) {
          this[i2] = val;
        }
      } else {
        var bytes = Buffer2.isBuffer(val) ? val : Buffer2.from(val, encoding);
        var len2 = bytes.length;
        if (len2 === 0) {
          throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        }
        for (i2 = 0; i2 < end - start; ++i2) {
          this[i2 + start] = bytes[i2 % len2];
        }
      }
      return this;
    };
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
    function base64clean(str) {
      str = str.split("=")[0];
      str = str.trim().replace(INVALID_BASE64_RE, "");
      if (str.length < 2)
        return "";
      while (str.length % 4 !== 0) {
        str = str + "=";
      }
      return str;
    }
    function toHex(n) {
      if (n < 16)
        return "0" + n.toString(16);
      return n.toString(16);
    }
    function utf8ToBytes(string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];
      for (var i2 = 0; i2 < length; ++i2) {
        codePoint = string.charCodeAt(i2);
        if (codePoint > 55295 && codePoint < 57344) {
          if (!leadSurrogate) {
            if (codePoint > 56319) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            } else if (i2 + 1 === length) {
              if ((units -= 3) > -1)
                bytes.push(239, 191, 189);
              continue;
            }
            leadSurrogate = codePoint;
            continue;
          }
          if (codePoint < 56320) {
            if ((units -= 3) > -1)
              bytes.push(239, 191, 189);
            leadSurrogate = codePoint;
            continue;
          }
          codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        if (codePoint < 128) {
          if ((units -= 1) < 0)
            break;
          bytes.push(codePoint);
        } else if (codePoint < 2048) {
          if ((units -= 2) < 0)
            break;
          bytes.push(
            codePoint >> 6 | 192,
            codePoint & 63 | 128
          );
        } else if (codePoint < 65536) {
          if ((units -= 3) < 0)
            break;
          bytes.push(
            codePoint >> 12 | 224,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else if (codePoint < 1114112) {
          if ((units -= 4) < 0)
            break;
          bytes.push(
            codePoint >> 18 | 240,
            codePoint >> 12 & 63 | 128,
            codePoint >> 6 & 63 | 128,
            codePoint & 63 | 128
          );
        } else {
          throw new Error("Invalid code point");
        }
      }
      return bytes;
    }
    function asciiToBytes(str) {
      var byteArray = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        byteArray.push(str.charCodeAt(i2) & 255);
      }
      return byteArray;
    }
    function utf16leToBytes(str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i2 = 0; i2 < str.length; ++i2) {
        if ((units -= 2) < 0)
          break;
        c = str.charCodeAt(i2);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }
      return byteArray;
    }
    function base64ToBytes(str) {
      return base64.toByteArray(base64clean(str));
    }
    function blitBuffer(src, dst, offset, length) {
      for (var i2 = 0; i2 < length; ++i2) {
        if (i2 + offset >= dst.length || i2 >= src.length)
          break;
        dst[i2 + offset] = src[i2];
      }
      return i2;
    }
    function isInstance(obj, type) {
      return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
    }
    function numberIsNaN(obj) {
      return obj !== obj;
    }
  })(buffer);
  var __createBinding$3 = Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  };
  var __setModuleDefault$3 = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  };
  var __importStar$3 = function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding$3(result, mod, k);
    }
    __setModuleDefault$3(result, mod);
    return result;
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.NETWORK_IDLE_TIME = exports2.waitForHTTP = exports2.getSourceUrlComment = exports2.SOURCE_URL_REGEX = exports2.UTILITY_WORLD_NAME = exports2.timeout = exports2.validateDialogType = exports2.getPageContent = exports2.setPageContent = exports2.getReadableFromProtocolStream = exports2.getReadableAsBuffer = exports2.importFSPromises = exports2.pageBindingInitString = exports2.addPageBinding = exports2.evaluationString = exports2.isDate = exports2.isRegExp = exports2.isPlainObject = exports2.isNumber = exports2.isString = exports2.valueFromRemoteObject = exports2.getSourcePuppeteerURLIfAvailable = exports2.withSourcePuppeteerURLIfNone = exports2.PuppeteerURL = exports2.createClientError = exports2.createEvaluationError = exports2.debugError = void 0;
  const rxjs_js_1$3 = require("../../third_party/rxjs/rxjs.js");
  const environment_js_1$1 = require("../environment.js");
  const assert_js_1$k = require("../util/assert.js");
  const ErrorLike_js_1$b = require("../util/ErrorLike.js");
  const Debug_js_1$1 = require("./Debug.js");
  const Errors_js_1$9 = require("./Errors.js");
  exports2.debugError = (0, Debug_js_1$1.debug)("puppeteer:error");
  function createEvaluationError(details) {
    let name;
    let message;
    if (!details.exception) {
      name = "Error";
      message = details.text;
    } else if ((details.exception.type !== "object" || details.exception.subtype !== "error") && !details.exception.objectId) {
      return valueFromRemoteObject(details.exception);
    } else {
      const detail = getErrorDetails(details);
      name = detail.name;
      message = detail.message;
    }
    const messageHeight = message.split("\n").length;
    const error = new Error(message);
    error.name = name;
    const stackLines = error.stack.split("\n");
    const messageLines = stackLines.splice(0, messageHeight);
    stackLines.shift();
    if (details.stackTrace && stackLines.length < Error.stackTraceLimit) {
      for (const frame of details.stackTrace.callFrames.reverse()) {
        if (PuppeteerURL.isPuppeteerURL(frame.url) && frame.url !== PuppeteerURL.INTERNAL_URL) {
          const url = PuppeteerURL.parse(frame.url);
          stackLines.unshift(`    at ${frame.functionName || url.functionName} (${url.functionName} at ${url.siteString}, <anonymous>:${frame.lineNumber}:${frame.columnNumber})`);
        } else {
          stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber}:${frame.columnNumber})`);
        }
        if (stackLines.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    error.stack = [...messageLines, ...stackLines].join("\n");
    return error;
  }
  exports2.createEvaluationError = createEvaluationError;
  function createClientError(details) {
    let name;
    let message;
    if (!details.exception) {
      name = "Error";
      message = details.text;
    } else if ((details.exception.type !== "object" || details.exception.subtype !== "error") && !details.exception.objectId) {
      return valueFromRemoteObject(details.exception);
    } else {
      const detail = getErrorDetails(details);
      name = detail.name;
      message = detail.message;
    }
    const error = new Error(message);
    error.name = name;
    const messageHeight = error.message.split("\n").length;
    const messageLines = error.stack.split("\n").splice(0, messageHeight);
    const stackLines = [];
    if (details.stackTrace) {
      for (const frame of details.stackTrace.callFrames) {
        stackLines.push(`    at ${frame.functionName || "<anonymous>"} (${frame.url}:${frame.lineNumber + 1}:${frame.columnNumber + 1})`);
        if (stackLines.length >= Error.stackTraceLimit) {
          break;
        }
      }
    }
    error.stack = [...messageLines, ...stackLines].join("\n");
    return error;
  }
  exports2.createClientError = createClientError;
  const getErrorDetails = (details) => {
    var _a2, _b, _c, _d;
    let name = "";
    let message;
    const lines = ((_b = (_a2 = details.exception) == null ? void 0 : _a2.description) == null ? void 0 : _b.split("\n    at ")) ?? [];
    const size = Math.min(((_c = details.stackTrace) == null ? void 0 : _c.callFrames.length) ?? 0, lines.length - 1);
    lines.splice(-size, size);
    if ((_d = details.exception) == null ? void 0 : _d.className) {
      name = details.exception.className;
    }
    message = lines.join("\n");
    if (name && message.startsWith(`${name}: `)) {
      message = message.slice(name.length + 2);
    }
    return { message, name };
  };
  const SOURCE_URL = Symbol("Source URL for Puppeteer evaluation scripts");
  const _PuppeteerURL = class _PuppeteerURL {
    constructor() {
      __privateAdd(this, _functionName, void 0);
      __privateAdd(this, _siteString, void 0);
    }
    static fromCallSite(functionName, site) {
      const url = new _PuppeteerURL();
      __privateSet(url, _functionName, functionName);
      __privateSet(url, _siteString, site.toString());
      return url;
    }
    get functionName() {
      return __privateGet(this, _functionName);
    }
    get siteString() {
      return __privateGet(this, _siteString);
    }
    toString() {
      return `pptr:${[
        __privateGet(this, _functionName),
        encodeURIComponent(__privateGet(this, _siteString))
      ].join(";")}`;
    }
  };
  _functionName = new WeakMap();
  _siteString = new WeakMap();
  __publicField(_PuppeteerURL, "INTERNAL_URL", "pptr:internal");
  __publicField(_PuppeteerURL, "parse", (url) => {
    url = url.slice("pptr:".length);
    const [functionName = "", siteString = ""] = url.split(";");
    const puppeteerUrl = new _PuppeteerURL();
    __privateSet(puppeteerUrl, _functionName, functionName);
    __privateSet(puppeteerUrl, _siteString, decodeURIComponent(siteString));
    return puppeteerUrl;
  });
  __publicField(_PuppeteerURL, "isPuppeteerURL", (url) => {
    return url.startsWith("pptr:");
  });
  let PuppeteerURL = _PuppeteerURL;
  exports2.PuppeteerURL = PuppeteerURL;
  const withSourcePuppeteerURLIfNone = (functionName, object) => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
      return object;
    }
    const original = Error.prepareStackTrace;
    Error.prepareStackTrace = (_, stack) => {
      return stack[2];
    };
    const site = new Error().stack;
    Error.prepareStackTrace = original;
    return Object.assign(object, {
      [SOURCE_URL]: PuppeteerURL.fromCallSite(functionName, site)
    });
  };
  exports2.withSourcePuppeteerURLIfNone = withSourcePuppeteerURLIfNone;
  const getSourcePuppeteerURLIfAvailable = (object) => {
    if (Object.prototype.hasOwnProperty.call(object, SOURCE_URL)) {
      return object[SOURCE_URL];
    }
    return void 0;
  };
  exports2.getSourcePuppeteerURLIfAvailable = getSourcePuppeteerURLIfAvailable;
  function valueFromRemoteObject(remoteObject) {
    (0, assert_js_1$k.assert)(!remoteObject.objectId, "Cannot extract value when objectId is given");
    if (remoteObject.unserializableValue) {
      if (remoteObject.type === "bigint") {
        return BigInt(remoteObject.unserializableValue.replace("n", ""));
      }
      switch (remoteObject.unserializableValue) {
        case "-0":
          return -0;
        case "NaN":
          return NaN;
        case "Infinity":
          return Infinity;
        case "-Infinity":
          return -Infinity;
        default:
          throw new Error("Unsupported unserializable value: " + remoteObject.unserializableValue);
      }
    }
    return remoteObject.value;
  }
  exports2.valueFromRemoteObject = valueFromRemoteObject;
  const isString = (obj) => {
    return typeof obj === "string" || obj instanceof String;
  };
  exports2.isString = isString;
  const isNumber = (obj) => {
    return typeof obj === "number" || obj instanceof Number;
  };
  exports2.isNumber = isNumber;
  const isPlainObject = (obj) => {
    return typeof obj === "object" && (obj == null ? void 0 : obj.constructor) === Object;
  };
  exports2.isPlainObject = isPlainObject;
  const isRegExp = (obj) => {
    return typeof obj === "object" && (obj == null ? void 0 : obj.constructor) === RegExp;
  };
  exports2.isRegExp = isRegExp;
  const isDate = (obj) => {
    return typeof obj === "object" && (obj == null ? void 0 : obj.constructor) === Date;
  };
  exports2.isDate = isDate;
  function evaluationString(fun, ...args) {
    if ((0, exports2.isString)(fun)) {
      (0, assert_js_1$k.assert)(args.length === 0, "Cannot evaluate a string with arguments");
      return fun;
    }
    function serializeArgument(arg) {
      if (Object.is(arg, void 0)) {
        return "undefined";
      }
      return JSON.stringify(arg);
    }
    return `(${fun})(${args.map(serializeArgument).join(",")})`;
  }
  exports2.evaluationString = evaluationString;
  function addPageBinding(type, name) {
    const callCdp = globalThis[name];
    Object.assign(globalThis, {
      [name](...args) {
        const callPuppeteer = globalThis[name];
        callPuppeteer.args ?? (callPuppeteer.args = /* @__PURE__ */ new Map());
        callPuppeteer.callbacks ?? (callPuppeteer.callbacks = /* @__PURE__ */ new Map());
        const seq = (callPuppeteer.lastSeq ?? 0) + 1;
        callPuppeteer.lastSeq = seq;
        callPuppeteer.args.set(seq, args);
        callCdp(JSON.stringify({
          type,
          name,
          seq,
          args,
          isTrivial: !args.some((value) => {
            return value instanceof Node;
          })
        }));
        return new Promise((resolve, reject) => {
          callPuppeteer.callbacks.set(seq, {
            resolve(value) {
              callPuppeteer.args.delete(seq);
              resolve(value);
            },
            reject(value) {
              callPuppeteer.args.delete(seq);
              reject(value);
            }
          });
        });
      }
    });
  }
  exports2.addPageBinding = addPageBinding;
  function pageBindingInitString(type, name) {
    return evaluationString(addPageBinding, type, name);
  }
  exports2.pageBindingInitString = pageBindingInitString;
  let fs = null;
  async function importFSPromises() {
    if (!fs) {
      try {
        fs = await Promise.resolve().then(() => __importStar$3(require("fs/promises")));
      } catch (error) {
        if (error instanceof TypeError) {
          throw new Error("Cannot write to a path outside of a Node-like environment.");
        }
        throw error;
      }
    }
    return fs;
  }
  exports2.importFSPromises = importFSPromises;
  async function getReadableAsBuffer(readable, path) {
    const buffers = [];
    if (path) {
      const fs2 = await importFSPromises();
      const fileHandle = await fs2.open(path, "w+");
      try {
        for await (const chunk of readable) {
          buffers.push(chunk);
          await fileHandle.writeFile(chunk);
        }
      } finally {
        await fileHandle.close();
      }
    } else {
      for await (const chunk of readable) {
        buffers.push(chunk);
      }
    }
    try {
      return buffer.Buffer.concat(buffers);
    } catch (error) {
      return null;
    }
  }
  exports2.getReadableAsBuffer = getReadableAsBuffer;
  async function getReadableFromProtocolStream(client, handle) {
    if (!environment_js_1$1.isNode) {
      throw new Error("Cannot create a stream outside of Node.js environment.");
    }
    const { Readable } = await Promise.resolve().then(() => __importStar$3(require("stream")));
    let eof = false;
    return new Readable({
      async read(size) {
        if (eof) {
          return;
        }
        try {
          const response = await client.send("IO.read", { handle, size });
          this.push(response.data, response.base64Encoded ? "base64" : void 0);
          if (response.eof) {
            eof = true;
            await client.send("IO.close", { handle });
            this.push(null);
          }
        } catch (error) {
          if ((0, ErrorLike_js_1$b.isErrorLike)(error)) {
            this.destroy(error);
            return;
          }
          throw error;
        }
      }
    });
  }
  exports2.getReadableFromProtocolStream = getReadableFromProtocolStream;
  async function setPageContent(page, content) {
    return await page.evaluate((html) => {
      document.open();
      document.write(html);
      document.close();
    }, content);
  }
  exports2.setPageContent = setPageContent;
  function getPageContent() {
    let content = "";
    for (const node of document.childNodes) {
      switch (node) {
        case document.documentElement:
          content += document.documentElement.outerHTML;
          break;
        default:
          content += new XMLSerializer().serializeToString(node);
          break;
      }
    }
    return content;
  }
  exports2.getPageContent = getPageContent;
  function validateDialogType(type) {
    let dialogType = null;
    const validDialogTypes = /* @__PURE__ */ new Set([
      "alert",
      "confirm",
      "prompt",
      "beforeunload"
    ]);
    if (validDialogTypes.has(type)) {
      dialogType = type;
    }
    (0, assert_js_1$k.assert)(dialogType, `Unknown javascript dialog type: ${type}`);
    return dialogType;
  }
  exports2.validateDialogType = validateDialogType;
  function timeout(ms) {
    return ms === 0 ? rxjs_js_1$3.NEVER : (0, rxjs_js_1$3.timer)(ms).pipe((0, rxjs_js_1$3.map)(() => {
      throw new Errors_js_1$9.TimeoutError(`Timed out after waiting ${ms}ms`);
    }));
  }
  exports2.timeout = timeout;
  exports2.UTILITY_WORLD_NAME = "__puppeteer_utility_world__";
  exports2.SOURCE_URL_REGEX = /^[\040\t]*\/\/[@#] sourceURL=\s*(\S*?)\s*$/m;
  function getSourceUrlComment(url) {
    return `//# sourceURL=${url}`;
  }
  exports2.getSourceUrlComment = getSourceUrlComment;
  async function waitForHTTP(networkManager, eventName, urlOrPredicate, ms, cancelation) {
    return await (0, rxjs_js_1$3.firstValueFrom)((0, rxjs_js_1$3.fromEvent)(networkManager, eventName).pipe((0, rxjs_js_1$3.filterAsync)(async (http) => {
      if ((0, exports2.isString)(urlOrPredicate)) {
        return urlOrPredicate === http.url();
      }
      if (typeof urlOrPredicate === "function") {
        return !!await urlOrPredicate(http);
      }
      return false;
    }), (0, rxjs_js_1$3.raceWith)(timeout(ms), (0, rxjs_js_1$3.from)(cancelation.valueOrThrow()))));
  }
  exports2.waitForHTTP = waitForHTTP;
  exports2.NETWORK_IDLE_TIME = 500;
  const util = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$2$1 = /* @__PURE__ */ getAugmentedNamespace(util);
  Object.defineProperty(Browser$1, "__esModule", { value: true });
  Browser$1.Browser = Browser$1.WEB_PERMISSION_TO_PROTOCOL_PERMISSION = void 0;
  const rxjs_js_1$2 = rxjs;
  const EventEmitter_js_1$b = EventEmitter$1;
  const util_js_1$l = require$$2$1;
  const util_js_2 = require$$2$1;
  const disposable_js_1$f = disposable;
  Browser$1.WEB_PERMISSION_TO_PROTOCOL_PERMISSION = /* @__PURE__ */ new Map([
    ["geolocation", "geolocation"],
    ["midi", "midi"],
    ["notifications", "notifications"],
    // TODO: push isn't a valid type?
    // ['push', 'push'],
    ["camera", "videoCapture"],
    ["microphone", "audioCapture"],
    ["background-sync", "backgroundSync"],
    ["ambient-light-sensor", "sensors"],
    ["accelerometer", "sensors"],
    ["gyroscope", "sensors"],
    ["magnetometer", "sensors"],
    ["accessibility-events", "accessibilityEvents"],
    ["clipboard-read", "clipboardReadWrite"],
    ["clipboard-write", "clipboardReadWrite"],
    ["clipboard-sanitized-write", "clipboardSanitizedWrite"],
    ["payment-handler", "paymentHandler"],
    ["persistent-storage", "durableStorage"],
    ["idle-detection", "idleDetection"],
    // chrome-specific permissions we have.
    ["midi-sysex", "midiSysex"]
  ]);
  class Browser extends EventEmitter_js_1$b.EventEmitter {
    /**
     * @internal
     */
    constructor() {
      super();
    }
    /**
     * Waits until a {@link Target | target} matching the given `predicate`
     * appears and returns it.
     *
     * This will look all open {@link BrowserContext | browser contexts}.
     *
     * @example Finding a target for a page opened via `window.open`:
     *
     * ```ts
     * await page.evaluate(() => window.open('https://www.example.com/'));
     * const newWindowTarget = await browser.waitForTarget(
     *   target => target.url() === 'https://www.example.com/'
     * );
     * ```
     */
    async waitForTarget(predicate, options = {}) {
      const { timeout: ms = 3e4 } = options;
      return await (0, rxjs_js_1$2.firstValueFrom)((0, rxjs_js_1$2.merge)((0, rxjs_js_1$2.fromEvent)(
        this,
        "targetcreated"
        /* BrowserEvent.TargetCreated */
      ), (0, rxjs_js_1$2.fromEvent)(
        this,
        "targetchanged"
        /* BrowserEvent.TargetChanged */
      ), (0, rxjs_js_1$2.from)(this.targets())).pipe((0, rxjs_js_1$2.filterAsync)(predicate), (0, rxjs_js_1$2.raceWith)((0, util_js_2.timeout)(ms))));
    }
    /**
     * Gets a list of all open {@link Page | pages} inside this {@link Browser}.
     *
     * If there ar multiple {@link BrowserContext | browser contexts}, this
     * returns all {@link Page | pages} in all
     * {@link BrowserContext | browser contexts}.
     *
     * @remarks Non-visible {@link Page | pages}, such as `"background_page"`,
     * will not be listed here. You can find them using {@link Target.page}.
     */
    async pages() {
      const contextPages = await Promise.all(this.browserContexts().map((context) => {
        return context.pages();
      }));
      return contextPages.reduce((acc, x) => {
        return acc.concat(x);
      }, []);
    }
    /**
     * Whether Puppeteer is connected to this {@link Browser | browser}.
     *
     * @deprecated Use {@link Browser.connected}.
     */
    isConnected() {
      return this.connected;
    }
    /** @internal */
    [disposable_js_1$f.disposeSymbol]() {
      return void this.close().catch(util_js_1$l.debugError);
    }
    /** @internal */
    [disposable_js_1$f.asyncDisposeSymbol]() {
      return this.close();
    }
  }
  Browser$1.Browser = Browser;
  var BrowserContext$1 = {};
  Object.defineProperty(BrowserContext$1, "__esModule", { value: true });
  BrowserContext$1.BrowserContext = void 0;
  const EventEmitter_js_1$a = EventEmitter$1;
  const util_js_1$k = require$$2$1;
  const disposable_js_1$e = disposable;
  class BrowserContext extends EventEmitter_js_1$a.EventEmitter {
    /**
     * @internal
     */
    constructor() {
      super();
    }
    /**
     * Whether this {@link BrowserContext | browser context} is closed.
     */
    get closed() {
      return !this.browser().browserContexts().includes(this);
    }
    /**
     * Identifier for this {@link BrowserContext | browser context}.
     */
    get id() {
      return void 0;
    }
    /** @internal */
    [disposable_js_1$e.disposeSymbol]() {
      return void this.close().catch(util_js_1$k.debugError);
    }
    /** @internal */
    [disposable_js_1$e.asyncDisposeSymbol]() {
      return this.close();
    }
  }
  BrowserContext$1.BrowserContext = BrowserContext;
  var CDPSession$2 = {};
  Object.defineProperty(CDPSession$2, "__esModule", { value: true });
  CDPSession$2.CDPSession = CDPSession$2.CDPSessionEvent = void 0;
  const EventEmitter_js_1$9 = EventEmitter$1;
  var CDPSessionEvent;
  (function(CDPSessionEvent2) {
    CDPSessionEvent2.Disconnected = Symbol("CDPSession.Disconnected");
    CDPSessionEvent2.Swapped = Symbol("CDPSession.Swapped");
    CDPSessionEvent2.Ready = Symbol("CDPSession.Ready");
    CDPSessionEvent2.SessionAttached = "sessionattached";
    CDPSessionEvent2.SessionDetached = "sessiondetached";
  })(CDPSessionEvent || (CDPSession$2.CDPSessionEvent = CDPSessionEvent = {}));
  let CDPSession$1 = class CDPSession extends EventEmitter_js_1$9.EventEmitter {
    /**
     * @internal
     */
    constructor() {
      super();
    }
    /**
     * Parent session in terms of CDP's auto-attach mechanism.
     *
     * @internal
     */
    parentSession() {
      return void 0;
    }
  };
  CDPSession$2.CDPSession = CDPSession$1;
  var assert$1 = {};
  Object.defineProperty(assert$1, "__esModule", { value: true });
  assert$1.assert = void 0;
  const assert = (value, message) => {
    if (!value) {
      throw new Error(message);
    }
  };
  assert$1.assert = assert;
  var ChromeTargetManager$1 = {};
  var Deferred$1 = {};
  var Errors = {};
  Object.defineProperty(Errors, "__esModule", { value: true });
  Errors.errors = Errors.TargetCloseError = Errors.UnsupportedOperation = Errors.ProtocolError = Errors.TimeoutError = Errors.CustomError = void 0;
  class CustomError extends Error {
    /**
     * @internal
     */
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
    /**
     * @internal
     */
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
  }
  Errors.CustomError = CustomError;
  class TimeoutError extends CustomError {
  }
  Errors.TimeoutError = TimeoutError;
  class ProtocolError extends CustomError {
    constructor() {
      super(...arguments);
      __privateAdd(this, _code, void 0);
      __privateAdd(this, _originalMessage, "");
    }
    set code(code2) {
      __privateSet(this, _code, code2);
    }
    /**
     * @readonly
     * @public
     */
    get code() {
      return __privateGet(this, _code);
    }
    set originalMessage(originalMessage) {
      __privateSet(this, _originalMessage, originalMessage);
    }
    /**
     * @readonly
     * @public
     */
    get originalMessage() {
      return __privateGet(this, _originalMessage);
    }
  }
  _code = new WeakMap();
  _originalMessage = new WeakMap();
  Errors.ProtocolError = ProtocolError;
  class UnsupportedOperation extends CustomError {
  }
  Errors.UnsupportedOperation = UnsupportedOperation;
  class TargetCloseError extends ProtocolError {
  }
  Errors.TargetCloseError = TargetCloseError;
  Errors.errors = Object.freeze({
    TimeoutError,
    ProtocolError
  });
  Object.defineProperty(Deferred$1, "__esModule", { value: true });
  Deferred$1.Deferred = void 0;
  const Errors_js_1$8 = Errors;
  const _Deferred = class _Deferred {
    constructor(opts) {
      __privateAdd(this, _finish);
      __privateAdd(this, _isResolved, false);
      __privateAdd(this, _isRejected, false);
      __privateAdd(this, _value, void 0);
      __privateAdd(this, _resolver, () => {
      });
      __privateAdd(this, _taskPromise, new Promise((resolve) => {
        __privateSet(this, _resolver, resolve);
      }));
      __privateAdd(this, _timeoutId, void 0);
      __privateAdd(this, _timeoutError, void 0);
      if (opts && opts.timeout > 0) {
        __privateSet(this, _timeoutError, new Errors_js_1$8.TimeoutError(opts.message));
        __privateSet(this, _timeoutId, setTimeout(() => {
          this.reject(__privateGet(this, _timeoutError));
        }, opts.timeout));
      }
    }
    resolve(value) {
      if (__privateGet(this, _isRejected) || __privateGet(this, _isResolved)) {
        return;
      }
      __privateSet(this, _isResolved, true);
      __privateMethod(this, _finish, finish_fn).call(this, value);
    }
    reject(error) {
      if (__privateGet(this, _isRejected) || __privateGet(this, _isResolved)) {
        return;
      }
      __privateSet(this, _isRejected, true);
      __privateMethod(this, _finish, finish_fn).call(this, error);
    }
    resolved() {
      return __privateGet(this, _isResolved);
    }
    finished() {
      return __privateGet(this, _isResolved) || __privateGet(this, _isRejected);
    }
    value() {
      return __privateGet(this, _value);
    }
    async valueOrThrow() {
      await __privateGet(this, _taskPromise);
      if (__privateGet(this, _isRejected)) {
        throw __privateGet(this, _value);
      }
      return __privateGet(this, _value);
    }
    static create(opts) {
      return new _Deferred(opts);
    }
    static async race(awaitables) {
      const deferredWithTimeout = /* @__PURE__ */ new Set();
      try {
        const promises = awaitables.map((value) => {
          if (value instanceof _Deferred) {
            if (__privateGet(value, _timeoutId)) {
              deferredWithTimeout.add(value);
            }
            return value.valueOrThrow();
          }
          return value;
        });
        return await Promise.race(promises);
      } finally {
        for (const deferred of deferredWithTimeout) {
          deferred.reject(new Error("Timeout cleared"));
        }
      }
    }
  };
  _isResolved = new WeakMap();
  _isRejected = new WeakMap();
  _value = new WeakMap();
  _resolver = new WeakMap();
  _taskPromise = new WeakMap();
  _timeoutId = new WeakMap();
  _timeoutError = new WeakMap();
  _finish = new WeakSet();
  finish_fn = function(value) {
    clearTimeout(__privateGet(this, _timeoutId));
    __privateSet(this, _value, value);
    __privateGet(this, _resolver).call(this);
  };
  let Deferred = _Deferred;
  Deferred$1.Deferred = Deferred;
  var Target$2 = {};
  var Target$1 = {};
  Object.defineProperty(Target$1, "__esModule", { value: true });
  Target$1.Target = Target$1.TargetType = void 0;
  var TargetType;
  (function(TargetType2) {
    TargetType2["PAGE"] = "page";
    TargetType2["BACKGROUND_PAGE"] = "background_page";
    TargetType2["SERVICE_WORKER"] = "service_worker";
    TargetType2["SHARED_WORKER"] = "shared_worker";
    TargetType2["BROWSER"] = "browser";
    TargetType2["WEBVIEW"] = "webview";
    TargetType2["OTHER"] = "other";
    TargetType2["TAB"] = "tab";
  })(TargetType || (Target$1.TargetType = TargetType = {}));
  class Target {
    /**
     * @internal
     */
    constructor() {
    }
    /**
     * If the target is not of type `"service_worker"` or `"shared_worker"`, returns `null`.
     */
    async worker() {
      return null;
    }
    /**
     * If the target is not of type `"page"`, `"webview"` or `"background_page"`,
     * returns `null`.
     */
    async page() {
      return null;
    }
  }
  Target$1.Target = Target;
  var CDPSession = {};
  var CallbackRegistry$1 = {};
  var ErrorLike = {};
  Object.defineProperty(ErrorLike, "__esModule", { value: true });
  ErrorLike.createProtocolErrorMessage = ErrorLike.rewriteError = ErrorLike.isErrnoException = ErrorLike.isErrorLike = void 0;
  function isErrorLike(obj) {
    return typeof obj === "object" && obj !== null && "name" in obj && "message" in obj;
  }
  ErrorLike.isErrorLike = isErrorLike;
  function isErrnoException(obj) {
    return isErrorLike(obj) && ("errno" in obj || "code" in obj || "path" in obj || "syscall" in obj);
  }
  ErrorLike.isErrnoException = isErrnoException;
  function rewriteError$1(error, message, originalMessage) {
    error.message = message;
    error.originalMessage = originalMessage ?? error.originalMessage;
    return error;
  }
  ErrorLike.rewriteError = rewriteError$1;
  function createProtocolErrorMessage(object) {
    let message = `${object.error.message}`;
    if (object.error && typeof object.error === "object" && "data" in object.error) {
      message += ` ${object.error.data}`;
    }
    return message;
  }
  ErrorLike.createProtocolErrorMessage = createProtocolErrorMessage;
  Object.defineProperty(CallbackRegistry$1, "__esModule", { value: true });
  CallbackRegistry$1.createIncrementalIdGenerator = CallbackRegistry$1.Callback = CallbackRegistry$1.CallbackRegistry = void 0;
  const Deferred_js_1$e = Deferred$1;
  const ErrorLike_js_1$a = ErrorLike;
  const Errors_js_1$7 = Errors;
  const util_js_1$j = require$$2$1;
  class CallbackRegistry {
    constructor() {
      __privateAdd(this, _callbacks, /* @__PURE__ */ new Map());
      __privateAdd(this, _idGenerator, createIncrementalIdGenerator());
    }
    create(label, timeout2, request) {
      const callback = new Callback(__privateGet(this, _idGenerator).call(this), label, timeout2);
      __privateGet(this, _callbacks).set(callback.id, callback);
      try {
        request(callback.id);
      } catch (error) {
        callback.promise.valueOrThrow().catch(util_js_1$j.debugError).finally(() => {
          __privateGet(this, _callbacks).delete(callback.id);
        });
        callback.reject(error);
        throw error;
      }
      return callback.promise.valueOrThrow().finally(() => {
        __privateGet(this, _callbacks).delete(callback.id);
      });
    }
    reject(id, message, originalMessage) {
      const callback = __privateGet(this, _callbacks).get(id);
      if (!callback) {
        return;
      }
      this._reject(callback, message, originalMessage);
    }
    _reject(callback, errorMessage, originalMessage) {
      let error;
      let message;
      if (errorMessage instanceof Errors_js_1$7.ProtocolError) {
        error = errorMessage;
        error.cause = callback.error;
        message = errorMessage.message;
      } else {
        error = callback.error;
        message = errorMessage;
      }
      callback.reject((0, ErrorLike_js_1$a.rewriteError)(error, `Protocol error (${callback.label}): ${message}`, originalMessage));
    }
    resolve(id, value) {
      const callback = __privateGet(this, _callbacks).get(id);
      if (!callback) {
        return;
      }
      callback.resolve(value);
    }
    clear() {
      for (const callback of __privateGet(this, _callbacks).values()) {
        this._reject(callback, new Errors_js_1$7.TargetCloseError("Target closed"));
      }
      __privateGet(this, _callbacks).clear();
    }
  }
  _callbacks = new WeakMap();
  _idGenerator = new WeakMap();
  CallbackRegistry$1.CallbackRegistry = CallbackRegistry;
  class Callback {
    constructor(id, label, timeout2) {
      __privateAdd(this, _id, void 0);
      __privateAdd(this, _error, new Errors_js_1$7.ProtocolError());
      __privateAdd(this, _deferred, Deferred_js_1$e.Deferred.create());
      __privateAdd(this, _timer, void 0);
      __privateAdd(this, _label, void 0);
      __privateSet(this, _id, id);
      __privateSet(this, _label, label);
      if (timeout2) {
        __privateSet(this, _timer, setTimeout(() => {
          __privateGet(this, _deferred).reject((0, ErrorLike_js_1$a.rewriteError)(__privateGet(this, _error), `${label} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
        }, timeout2));
      }
    }
    resolve(value) {
      clearTimeout(__privateGet(this, _timer));
      __privateGet(this, _deferred).resolve(value);
    }
    reject(error) {
      clearTimeout(__privateGet(this, _timer));
      __privateGet(this, _deferred).reject(error);
    }
    get id() {
      return __privateGet(this, _id);
    }
    get promise() {
      return __privateGet(this, _deferred);
    }
    get error() {
      return __privateGet(this, _error);
    }
    get label() {
      return __privateGet(this, _label);
    }
  }
  _id = new WeakMap();
  _error = new WeakMap();
  _deferred = new WeakMap();
  _timer = new WeakMap();
  _label = new WeakMap();
  CallbackRegistry$1.Callback = Callback;
  function createIncrementalIdGenerator() {
    let id = 0;
    return () => {
      return ++id;
    };
  }
  CallbackRegistry$1.createIncrementalIdGenerator = createIncrementalIdGenerator;
  Object.defineProperty(CDPSession, "__esModule", { value: true });
  CDPSession.CdpCDPSession = void 0;
  const CDPSession_js_1$9 = CDPSession$2;
  const CallbackRegistry_js_1$1 = CallbackRegistry$1;
  const Errors_js_1$6 = Errors;
  const assert_js_1$j = assert$1;
  const ErrorLike_js_1$9 = ErrorLike;
  class CdpCDPSession extends CDPSession_js_1$9.CDPSession {
    /**
     * @internal
     */
    constructor(connection, targetType, sessionId, parentSessionId) {
      super();
      __privateAdd(this, _sessionId, void 0);
      __privateAdd(this, _targetType, void 0);
      __privateAdd(this, _callbacks2, new CallbackRegistry_js_1$1.CallbackRegistry());
      __privateAdd(this, _connection, void 0);
      __privateAdd(this, _parentSessionId, void 0);
      __privateAdd(this, _target2, void 0);
      __privateSet(this, _connection, connection);
      __privateSet(this, _targetType, targetType);
      __privateSet(this, _sessionId, sessionId);
      __privateSet(this, _parentSessionId, parentSessionId);
    }
    /**
     * Sets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    _setTarget(target) {
      __privateSet(this, _target2, target);
    }
    /**
     * Gets the {@link CdpTarget} associated with the session instance.
     *
     * @internal
     */
    _target() {
      (0, assert_js_1$j.assert)(__privateGet(this, _target2), "Target must exist");
      return __privateGet(this, _target2);
    }
    connection() {
      return __privateGet(this, _connection);
    }
    parentSession() {
      var _a2;
      if (!__privateGet(this, _parentSessionId)) {
        return this;
      }
      const parent = (_a2 = __privateGet(this, _connection)) == null ? void 0 : _a2.session(__privateGet(this, _parentSessionId));
      return parent ?? void 0;
    }
    send(method, ...paramArgs) {
      if (!__privateGet(this, _connection)) {
        return Promise.reject(new Errors_js_1$6.TargetCloseError(`Protocol error (${method}): Session closed. Most likely the ${__privateGet(this, _targetType)} has been closed.`));
      }
      const params = paramArgs.length ? paramArgs[0] : void 0;
      return __privateGet(this, _connection)._rawSend(__privateGet(this, _callbacks2), method, params, __privateGet(this, _sessionId));
    }
    /**
     * @internal
     */
    _onMessage(object) {
      if (object.id) {
        if (object.error) {
          __privateGet(this, _callbacks2).reject(object.id, (0, ErrorLike_js_1$9.createProtocolErrorMessage)(object), object.error.message);
        } else {
          __privateGet(this, _callbacks2).resolve(object.id, object.result);
        }
      } else {
        (0, assert_js_1$j.assert)(!object.id);
        this.emit(object.method, object.params);
      }
    }
    /**
     * Detaches the cdpSession from the target. Once detached, the cdpSession object
     * won't emit any events and can't be used to send messages.
     */
    async detach() {
      if (!__privateGet(this, _connection)) {
        throw new Error(`Session already detached. Most likely the ${__privateGet(this, _targetType)} has been closed.`);
      }
      await __privateGet(this, _connection).send("Target.detachFromTarget", {
        sessionId: __privateGet(this, _sessionId)
      });
    }
    /**
     * @internal
     */
    _onClosed() {
      __privateGet(this, _callbacks2).clear();
      __privateSet(this, _connection, void 0);
      this.emit(CDPSession_js_1$9.CDPSessionEvent.Disconnected, void 0);
    }
    /**
     * Returns the session's id.
     */
    id() {
      return __privateGet(this, _sessionId);
    }
  }
  _sessionId = new WeakMap();
  _targetType = new WeakMap();
  _callbacks2 = new WeakMap();
  _connection = new WeakMap();
  _parentSessionId = new WeakMap();
  _target2 = new WeakMap();
  CDPSession.CdpCDPSession = CdpCDPSession;
  var Page$2 = {};
  var __createBinding$2 = Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  };
  var __setModuleDefault$2 = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  };
  var __runInitializers$5 = function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$5 = function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __importStar$2 = function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding$2(result, mod, k);
    }
    __setModuleDefault$2(result, mod);
    return result;
  };
  var __addDisposableResource$8 = function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$8 = /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.unitToPixels = exports2.supportedMetrics = exports2.Page = exports2.setDefaultScreenshotOptions = void 0;
  const rxjs_js_1$1 = require("../../third_party/rxjs/rxjs.js");
  const Errors_js_1$5 = require("../common/Errors.js");
  const EventEmitter_js_1$8 = require("../common/EventEmitter.js");
  const NetworkManagerEvents_js_1$3 = require("../common/NetworkManagerEvents.js");
  const PDFOptions_js_1 = require("../common/PDFOptions.js");
  const TimeoutSettings_js_1$1 = require("../common/TimeoutSettings.js");
  const util_js_1$i = require("../common/util.js");
  const assert_js_1$i = require("../util/assert.js");
  const decorators_js_1$4 = require("../util/decorators.js");
  const disposable_js_1$d = require("../util/disposable.js");
  const locators_js_1 = require("./locators/locators.js");
  function setDefaultScreenshotOptions(options) {
    options.optimizeForSpeed ?? (options.optimizeForSpeed = false);
    options.type ?? (options.type = "png");
    options.fromSurface ?? (options.fromSurface = true);
    options.fullPage ?? (options.fullPage = false);
    options.omitBackground ?? (options.omitBackground = false);
    options.encoding ?? (options.encoding = "binary");
    options.captureBeyondViewport ?? (options.captureBeyondViewport = true);
    options.allowViewportExpansion ?? (options.allowViewportExpansion = options.captureBeyondViewport);
  }
  exports2.setDefaultScreenshotOptions = setDefaultScreenshotOptions;
  let Page = (() => {
    var _requestHandlers, _screencastSessionCount, _startScreencastPromise, _getNativePixelDimensions, getNativePixelDimensions_fn, _a2;
    let _classSuper = EventEmitter_js_1$8.EventEmitter;
    let _instanceExtraInitializers = [];
    let _screenshot_decorators;
    return _a2 = class extends _classSuper {
      /**
       * @internal
       */
      constructor() {
        super();
        /**
         * Gets the native, non-emulated dimensions of the viewport.
         */
        __privateAdd(this, _getNativePixelDimensions);
        /**
         * @internal
         */
        __publicField(this, "_isDragging", (__runInitializers$5(this, _instanceExtraInitializers), false));
        /**
         * @internal
         */
        __publicField(this, "_timeoutSettings", new TimeoutSettings_js_1$1.TimeoutSettings());
        __privateAdd(this, _requestHandlers, /* @__PURE__ */ new WeakMap());
        __privateAdd(this, _screencastSessionCount, 0);
        __privateAdd(this, _startScreencastPromise, void 0);
      }
      /**
       * Listen to page events.
       *
       * @remarks
       * This method exists to define event typings and handle proper wireup of
       * cooperative request interception. Actual event listening and dispatching is
       * delegated to {@link EventEmitter}.
       *
       * @internal
       */
      on(type, handler) {
        if (type !== "request") {
          return super.on(type, handler);
        }
        let wrapper = __privateGet(this, _requestHandlers).get(handler);
        if (wrapper === void 0) {
          wrapper = (event) => {
            event.enqueueInterceptAction(() => {
              return handler(event);
            });
          };
          __privateGet(this, _requestHandlers).set(handler, wrapper);
        }
        return super.on(type, wrapper);
      }
      /**
       * @internal
       */
      off(type, handler) {
        if (type === "request") {
          handler = __privateGet(this, _requestHandlers).get(handler) || handler;
        }
        return super.off(type, handler);
      }
      locator(selectorOrFunc) {
        if (typeof selectorOrFunc === "string") {
          return locators_js_1.NodeLocator.create(this, selectorOrFunc);
        } else {
          return locators_js_1.FunctionLocator.create(this, selectorOrFunc);
        }
      }
      /**
       * A shortcut for {@link Locator.race} that does not require static imports.
       *
       * @internal
       */
      locatorRace(locators2) {
        return locators_js_1.Locator.race(locators2);
      }
      /**
       * Runs `document.querySelector` within the page. If no element matches the
       * selector, the return value resolves to `null`.
       *
       * @param selector - A `selector` to query page for
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * to query page for.
       */
      async $(selector) {
        return await this.mainFrame().$(selector);
      }
      /**
       * The method runs `document.querySelectorAll` within the page. If no elements
       * match the selector, the return value resolves to `[]`.
       * @remarks
       * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
       * @param selector - A `selector` to query page for
       */
      async $$(selector) {
        return await this.mainFrame().$$(selector);
      }
      /**
       * @remarks
       *
       * The only difference between {@link Page.evaluate | page.evaluate} and
       * `page.evaluateHandle` is that `evaluateHandle` will return the value
       * wrapped in an in-page object.
       *
       * If the function passed to `page.evaluateHandle` returns a Promise, the
       * function will wait for the promise to resolve and return its value.
       *
       * You can pass a string instead of a function (although functions are
       * recommended as they are easier to debug and use with TypeScript):
       *
       * @example
       *
       * ```ts
       * const aHandle = await page.evaluateHandle('document');
       * ```
       *
       * @example
       * {@link JSHandle} instances can be passed as arguments to the `pageFunction`:
       *
       * ```ts
       * const aHandle = await page.evaluateHandle(() => document.body);
       * const resultHandle = await page.evaluateHandle(
       *   body => body.innerHTML,
       *   aHandle
       * );
       * console.log(await resultHandle.jsonValue());
       * await resultHandle.dispose();
       * ```
       *
       * Most of the time this function returns a {@link JSHandle},
       * but if `pageFunction` returns a reference to an element,
       * you instead get an {@link ElementHandle} back:
       *
       * @example
       *
       * ```ts
       * const button = await page.evaluateHandle(() =>
       *   document.querySelector('button')
       * );
       * // can call `click` because `button` is an `ElementHandle`
       * await button.click();
       * ```
       *
       * The TypeScript definitions assume that `evaluateHandle` returns
       * a `JSHandle`, but if you know it's going to return an
       * `ElementHandle`, pass it as the generic argument:
       *
       * ```ts
       * const button = await page.evaluateHandle<ElementHandle>(...);
       * ```
       *
       * @param pageFunction - a function that is run within the page
       * @param args - arguments to be passed to the pageFunction
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = (0, util_js_1$i.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
        return await this.mainFrame().evaluateHandle(pageFunction, ...args);
      }
      /**
       * This method runs `document.querySelector` within the page and passes the
       * result as the first argument to the `pageFunction`.
       *
       * @remarks
       *
       * If no element is found matching `selector`, the method will throw an error.
       *
       * If `pageFunction` returns a promise `$eval` will wait for the promise to
       * resolve and then return its value.
       *
       * @example
       *
       * ```ts
       * const searchValue = await page.$eval('#search', el => el.value);
       * const preloadHref = await page.$eval('link[rel=preload]', el => el.href);
       * const html = await page.$eval('.main-container', el => el.outerHTML);
       * ```
       *
       * If you are using TypeScript, you may have to provide an explicit type to the
       * first argument of the `pageFunction`.
       * By default it is typed as `Element`, but you may need to provide a more
       * specific sub-type:
       *
       * @example
       *
       * ```ts
       * // if you don't provide HTMLInputElement here, TS will error
       * // as `value` is not on `Element`
       * const searchValue = await page.$eval(
       *   '#search',
       *   (el: HTMLInputElement) => el.value
       * );
       * ```
       *
       * The compiler should be able to infer the return type
       * from the `pageFunction` you provide. If it is unable to, you can use the generic
       * type to tell the compiler what return type you expect from `$eval`:
       *
       * @example
       *
       * ```ts
       * // The compiler can infer the return type in this case, but if it can't
       * // or if you want to be more explicit, provide it as the generic type.
       * const searchValue = await page.$eval<string>(
       *   '#search',
       *   (el: HTMLInputElement) => el.value
       * );
       * ```
       *
       * @param selector - the
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * to query for
       * @param pageFunction - the function to be evaluated in the page context.
       * Will be passed the result of `document.querySelector(selector)` as its
       * first argument.
       * @param args - any additional arguments to pass through to `pageFunction`.
       *
       * @returns The result of calling `pageFunction`. If it returns an element it
       * is wrapped in an {@link ElementHandle}, else the raw value itself is
       * returned.
       */
      async $eval(selector, pageFunction, ...args) {
        pageFunction = (0, util_js_1$i.withSourcePuppeteerURLIfNone)(this.$eval.name, pageFunction);
        return await this.mainFrame().$eval(selector, pageFunction, ...args);
      }
      /**
       * This method runs `Array.from(document.querySelectorAll(selector))` within
       * the page and passes the result as the first argument to the `pageFunction`.
       *
       * @remarks
       * If `pageFunction` returns a promise `$$eval` will wait for the promise to
       * resolve and then return its value.
       *
       * @example
       *
       * ```ts
       * // get the amount of divs on the page
       * const divCount = await page.$$eval('div', divs => divs.length);
       *
       * // get the text content of all the `.options` elements:
       * const options = await page.$$eval('div > span.options', options => {
       *   return options.map(option => option.textContent);
       * });
       * ```
       *
       * If you are using TypeScript, you may have to provide an explicit type to the
       * first argument of the `pageFunction`.
       * By default it is typed as `Element[]`, but you may need to provide a more
       * specific sub-type:
       *
       * @example
       *
       * ```ts
       * // if you don't provide HTMLInputElement here, TS will error
       * // as `value` is not on `Element`
       * await page.$$eval('input', (elements: HTMLInputElement[]) => {
       *   return elements.map(e => e.value);
       * });
       * ```
       *
       * The compiler should be able to infer the return type
       * from the `pageFunction` you provide. If it is unable to, you can use the generic
       * type to tell the compiler what return type you expect from `$$eval`:
       *
       * @example
       *
       * ```ts
       * // The compiler can infer the return type in this case, but if it can't
       * // or if you want to be more explicit, provide it as the generic type.
       * const allInputValues = await page.$$eval<string[]>(
       *   'input',
       *   (elements: HTMLInputElement[]) => elements.map(e => e.textContent)
       * );
       * ```
       *
       * @param selector - the
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * to query for
       * @param pageFunction - the function to be evaluated in the page context.
       * Will be passed the result of
       * `Array.from(document.querySelectorAll(selector))` as its first argument.
       * @param args - any additional arguments to pass through to `pageFunction`.
       *
       * @returns The result of calling `pageFunction`. If it returns an element it
       * is wrapped in an {@link ElementHandle}, else the raw value itself is
       * returned.
       */
      async $$eval(selector, pageFunction, ...args) {
        pageFunction = (0, util_js_1$i.withSourcePuppeteerURLIfNone)(this.$$eval.name, pageFunction);
        return await this.mainFrame().$$eval(selector, pageFunction, ...args);
      }
      /**
       * The method evaluates the XPath expression relative to the page document as
       * its context node. If there are no such elements, the method resolves to an
       * empty array.
       *
       * @remarks
       * Shortcut for {@link Frame.$x | Page.mainFrame().$x(expression) }.
       *
       * @param expression - Expression to evaluate
       */
      async $x(expression) {
        return await this.mainFrame().$x(expression);
      }
      /**
       * Adds a `<script>` tag into the page with the desired URL or content.
       *
       * @remarks
       * Shortcut for
       * {@link Frame.addScriptTag | page.mainFrame().addScriptTag(options)}.
       *
       * @param options - Options for the script.
       * @returns An {@link ElementHandle | element handle} to the injected
       * `<script>` element.
       */
      async addScriptTag(options) {
        return await this.mainFrame().addScriptTag(options);
      }
      async addStyleTag(options) {
        return await this.mainFrame().addStyleTag(options);
      }
      /**
       * The page's URL.
       * @remarks Shortcut for
       * {@link Frame.url | page.mainFrame().url()}.
       */
      url() {
        return this.mainFrame().url();
      }
      /**
       * The full HTML contents of the page, including the DOCTYPE.
       */
      async content() {
        return await this.mainFrame().content();
      }
      /**
       * Set the content of the page.
       *
       * @param html - HTML markup to assign to the page.
       * @param options - Parameters that has some properties.
       * @remarks
       * The parameter `options` might have the following options.
       *
       * - `timeout` : Maximum time in milliseconds for resources to load, defaults
       *   to 30 seconds, pass `0` to disable timeout. The default value can be
       *   changed by using the {@link Page.setDefaultNavigationTimeout} or
       *   {@link Page.setDefaultTimeout} methods.
       *
       * - `waitUntil`: When to consider setting markup succeeded, defaults to
       *   `load`. Given an array of event strings, setting content is considered
       *   to be successful after all events have been fired. Events can be
       *   either:<br/>
       * - `load` : consider setting content to be finished when the `load` event
       *   is fired.<br/>
       * - `domcontentloaded` : consider setting content to be finished when the
       *   `DOMContentLoaded` event is fired.<br/>
       * - `networkidle0` : consider setting content to be finished when there are
       *   no more than 0 network connections for at least `500` ms.<br/>
       * - `networkidle2` : consider setting content to be finished when there are
       *   no more than 2 network connections for at least `500` ms.
       */
      async setContent(html, options) {
        await this.mainFrame().setContent(html, options);
      }
      /**
       * Navigates the page to the given `url`.
       *
       * @remarks
       * Navigation to `about:blank` or navigation to the same URL with a different
       * hash will succeed and return `null`.
       *
       * :::warning
       *
       * Headless mode doesn't support navigation to a PDF document. See the {@link
       * https://bugs.chromium.org/p/chromium/issues/detail?id=761295 | upstream
       * issue}.
       *
       * :::
       *
       * Shortcut for {@link Frame.goto | page.mainFrame().goto(url, options)}.
       *
       * @param url - URL to navigate page to. The URL should include scheme, e.g.
       * `https://`
       * @param options - Options to configure waiting behavior.
       * @returns A promise which resolves to the main resource response. In case of
       * multiple redirects, the navigation will resolve with the response of the
       * last redirect.
       * @throws If:
       *
       * - there's an SSL error (e.g. in case of self-signed certificates).
       * - target URL is invalid.
       * - the timeout is exceeded during navigation.
       * - the remote server does not respond or is unreachable.
       * - the main resource failed to load.
       *
       * This method will not throw an error when any valid HTTP status code is
       * returned by the remote server, including 404 "Not Found" and 500 "Internal
       * Server Error". The status code for such responses can be retrieved by
       * calling {@link HTTPResponse.status}.
       */
      async goto(url, options) {
        return await this.mainFrame().goto(url, options);
      }
      /**
       * Waits for the page to navigate to a new URL or to reload. It is useful when
       * you run code that will indirectly cause the page to navigate.
       *
       * @example
       *
       * ```ts
       * const [response] = await Promise.all([
       *   page.waitForNavigation(), // The promise resolves after navigation has finished
       *   page.click('a.my-link'), // Clicking the link will indirectly cause a navigation
       * ]);
       * ```
       *
       * @remarks
       * Usage of the
       * {@link https://developer.mozilla.org/en-US/docs/Web/API/History_API | History API}
       * to change the URL is considered a navigation.
       *
       * @param options - Navigation parameters which might have the following
       * properties:
       * @returns A `Promise` which resolves to the main resource response.
       *
       * - In case of multiple redirects, the navigation will resolve with the
       *   response of the last redirect.
       * - In case of navigation to a different anchor or navigation due to History
       *   API usage, the navigation will resolve with `null`.
       */
      async waitForNavigation(options = {}) {
        return await this.mainFrame().waitForNavigation(options);
      }
      /**
       * @internal
       */
      _waitForNetworkIdle(networkManager, idleTime, requestsInFlight = 0) {
        return (0, rxjs_js_1$1.merge)((0, rxjs_js_1$1.fromEvent)(networkManager, NetworkManagerEvents_js_1$3.NetworkManagerEvent.Request), (0, rxjs_js_1$1.fromEvent)(networkManager, NetworkManagerEvents_js_1$3.NetworkManagerEvent.Response), (0, rxjs_js_1$1.fromEvent)(networkManager, NetworkManagerEvents_js_1$3.NetworkManagerEvent.RequestFailed)).pipe((0, rxjs_js_1$1.startWith)(void 0), (0, rxjs_js_1$1.filter)(() => {
          return networkManager.inFlightRequestsCount() <= requestsInFlight;
        }), (0, rxjs_js_1$1.switchMap)((v) => {
          return (0, rxjs_js_1$1.of)(v).pipe((0, rxjs_js_1$1.delay)(idleTime));
        }));
      }
      /**
       * Waits for a frame matching the given conditions to appear.
       *
       * @example
       *
       * ```ts
       * const frame = await page.waitForFrame(async frame => {
       *   return frame.name() === 'Test';
       * });
       * ```
       */
      async waitForFrame(urlOrPredicate, options = {}) {
        const { timeout: ms = this.getDefaultTimeout() } = options;
        if ((0, util_js_1$i.isString)(urlOrPredicate)) {
          urlOrPredicate = (frame) => {
            return urlOrPredicate === frame.url();
          };
        }
        return await (0, rxjs_js_1$1.firstValueFrom)((0, rxjs_js_1$1.merge)((0, rxjs_js_1$1.fromEvent)(
          this,
          "frameattached"
          /* PageEvent.FrameAttached */
        ), (0, rxjs_js_1$1.fromEvent)(
          this,
          "framenavigated"
          /* PageEvent.FrameNavigated */
        ), (0, rxjs_js_1$1.from)(this.frames())).pipe((0, rxjs_js_1$1.filterAsync)(urlOrPredicate), (0, rxjs_js_1$1.first)(), (0, rxjs_js_1$1.raceWith)((0, util_js_1$i.timeout)(ms), (0, rxjs_js_1$1.fromEvent)(
          this,
          "close"
          /* PageEvent.Close */
        ).pipe((0, rxjs_js_1$1.map)(() => {
          throw new Errors_js_1$5.TargetCloseError("Page closed.");
        })))));
      }
      /**
       * Emulates a given device's metrics and user agent.
       *
       * To aid emulation, Puppeteer provides a list of known devices that can be
       * via {@link KnownDevices}.
       *
       * @remarks
       * This method is a shortcut for calling two methods:
       * {@link Page.setUserAgent} and {@link Page.setViewport}.
       *
       * @remarks
       * This method will resize the page. A lot of websites don't expect phones to
       * change size, so you should emulate before navigating to the page.
       *
       * @example
       *
       * ```ts
       * import {KnownDevices} from 'puppeteer';
       * const iPhone = KnownDevices['iPhone 6'];
       *
       * (async () => {
       *   const browser = await puppeteer.launch();
       *   const page = await browser.newPage();
       *   await page.emulate(iPhone);
       *   await page.goto('https://www.google.com');
       *   // other actions...
       *   await browser.close();
       * })();
       * ```
       */
      async emulate(device) {
        await Promise.all([
          this.setUserAgent(device.userAgent),
          this.setViewport(device.viewport)
        ]);
      }
      /**
       * Evaluates a function in the page's context and returns the result.
       *
       * If the function passed to `page.evaluate` returns a Promise, the
       * function will wait for the promise to resolve and return its value.
       *
       * @example
       *
       * ```ts
       * const result = await frame.evaluate(() => {
       *   return Promise.resolve(8 * 7);
       * });
       * console.log(result); // prints "56"
       * ```
       *
       * You can pass a string instead of a function (although functions are
       * recommended as they are easier to debug and use with TypeScript):
       *
       * @example
       *
       * ```ts
       * const aHandle = await page.evaluate('1 + 2');
       * ```
       *
       * To get the best TypeScript experience, you should pass in as the
       * generic the type of `pageFunction`:
       *
       * ```ts
       * const aHandle = await page.evaluate(() => 2);
       * ```
       *
       * @example
       *
       * {@link ElementHandle} instances (including {@link JSHandle}s) can be passed
       * as arguments to the `pageFunction`:
       *
       * ```ts
       * const bodyHandle = await page.$('body');
       * const html = await page.evaluate(body => body.innerHTML, bodyHandle);
       * await bodyHandle.dispose();
       * ```
       *
       * @param pageFunction - a function that is run within the page
       * @param args - arguments to be passed to the pageFunction
       *
       * @returns the return value of `pageFunction`.
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = (0, util_js_1$i.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
        return await this.mainFrame().evaluate(pageFunction, ...args);
      }
      /**
       * @internal
       */
      async _maybeWriteBufferToFile(path, buffer2) {
        if (!path) {
          return;
        }
        const fs2 = await (0, util_js_1$i.importFSPromises)();
        await fs2.writeFile(path, buffer2);
      }
      /**
       * Captures a screencast of this {@link Page | page}.
       *
       * @remarks
       *
       * All recordings will be {@link https://www.webmproject.org/ | WebM} format using
       * the {@link https://www.webmproject.org/vp9/ | VP9} video codec. The FPS is 30.
       *
       * You must have {@link https://ffmpeg.org/ | ffmpeg} installed on your system.
       *
       * @example
       * Recording a {@link Page | page}:
       *
       * ```
       * import puppeteer from 'puppeteer';
       *
       * // Launch a browser
       * const browser = await puppeteer.launch();
       *
       * // Create a new page
       * const page = await browser.newPage();
       *
       * // Go to your site.
       * await page.goto("https://www.example.com");
       *
       * // Start recording.
       * const recorder = await page.screencast({path: 'recording.webm'});
       *
       * // Do something.
       *
       * // Stop recording.
       * await recorder.stop();
       *
       * browser.close();
       * ```
       *
       * @param options - Configures screencast behavior.
       *
       * @experimental
       */
      async screencast(options = {}) {
        const [{ ScreenRecorder }, [width, height, devicePixelRatio]] = await Promise.all([
          Promise.resolve().then(() => __importStar$2(require("../node/ScreenRecorder.js"))),
          __privateMethod(this, _getNativePixelDimensions, getNativePixelDimensions_fn).call(this)
        ]);
        let crop;
        if (options.crop) {
          const { x, y, width: cropWidth, height: cropHeight } = roundRectangle(normalizeRectangle(options.crop));
          if (x < 0 || y < 0) {
            throw new Error(`\`crop.x\` and \`crop.y\` must be greater than or equal to 0.`);
          }
          if (cropWidth <= 0 || cropHeight <= 0) {
            throw new Error(`\`crop.height\` and \`crop.width\` must be greater than or equal to 0.`);
          }
          const viewportWidth = width / devicePixelRatio;
          const viewportHeight = width / devicePixelRatio;
          if (x + cropWidth > viewportWidth) {
            throw new Error(`\`crop.width\` cannot be larger than the viewport width (${viewportWidth}).`);
          }
          if (y + cropHeight > viewportHeight) {
            throw new Error(`\`crop.height\` cannot be larger than the viewport height (${viewportHeight}).`);
          }
          crop = {
            x: x * devicePixelRatio,
            y: y * devicePixelRatio,
            width: cropWidth * devicePixelRatio,
            height: cropHeight * devicePixelRatio
          };
        }
        if (options.speed !== void 0 && options.speed <= 0) {
          throw new Error(`\`speed\` must be greater than 0.`);
        }
        if (options.scale !== void 0 && options.scale <= 0) {
          throw new Error(`\`scale\` must be greater than 0.`);
        }
        const recorder = new ScreenRecorder(this, width, height, {
          ...options,
          path: options.ffmpegPath,
          crop
        });
        try {
          await this._startScreencast();
        } catch (error) {
          void recorder.stop();
          throw error;
        }
        if (options.path) {
          const { createWriteStream } = await Promise.resolve().then(() => __importStar$2(require("fs")));
          const stream = createWriteStream(options.path, "binary");
          recorder.pipe(stream);
        }
        return recorder;
      }
      /**
       * @internal
       */
      async _startScreencast() {
        ++__privateWrapper(this, _screencastSessionCount)._;
        if (!__privateGet(this, _startScreencastPromise)) {
          __privateSet(this, _startScreencastPromise, this.mainFrame().client.send("Page.startScreencast", { format: "png" }).then(() => {
            return new Promise((resolve) => {
              return this.mainFrame().client.once("Page.screencastFrame", () => {
                return resolve();
              });
            });
          }));
        }
        await __privateGet(this, _startScreencastPromise);
      }
      /**
       * @internal
       */
      async _stopScreencast() {
        --__privateWrapper(this, _screencastSessionCount)._;
        if (!__privateGet(this, _startScreencastPromise)) {
          return;
        }
        __privateSet(this, _startScreencastPromise, void 0);
        if (__privateGet(this, _screencastSessionCount) === 0) {
          await this.mainFrame().client.send("Page.stopScreencast");
        }
      }
      async screenshot(userOptions = {}) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
          await this.bringToFront();
          const options = {
            ...userOptions,
            clip: userOptions.clip ? {
              ...userOptions.clip
            } : void 0
          };
          if (options.type === void 0 && options.path !== void 0) {
            const filePath = options.path;
            const extension = filePath.slice(filePath.lastIndexOf(".") + 1).toLowerCase();
            switch (extension) {
              case "png":
                options.type = "png";
                break;
              case "jpeg":
              case "jpg":
                options.type = "jpeg";
                break;
              case "webp":
                options.type = "webp";
                break;
            }
          }
          if (options.quality !== void 0) {
            if (options.quality < 0 && options.quality > 100) {
              throw new Error(`Expected 'quality' (${options.quality}) to be between 0 and 100, inclusive.`);
            }
            if (options.type === void 0 || !["jpeg", "webp"].includes(options.type)) {
              throw new Error(`${options.type ?? "png"} screenshots do not support 'quality'.`);
            }
          }
          (0, assert_js_1$i.assert)(!options.clip || !options.fullPage, "'clip' and 'fullPage' are exclusive");
          if (options.clip) {
            if (options.clip.width <= 0) {
              throw new Error("'width' in 'clip' must be positive.");
            }
            if (options.clip.height <= 0) {
              throw new Error("'height' in 'clip' must be positive.");
            }
          }
          setDefaultScreenshotOptions(options);
          options.clip = options.clip && roundRectangle(normalizeRectangle(options.clip));
          const stack = __addDisposableResource$8(env_2, new disposable_js_1$d.AsyncDisposableStack(), true);
          if (options.allowViewportExpansion || options.captureBeyondViewport) {
            if (options.fullPage) {
              const dimensions = await this.mainFrame().isolatedRealm().evaluate(() => {
                const { scrollHeight, scrollWidth } = document.documentElement;
                const { height: viewportHeight, width: viewportWidth } = window.visualViewport;
                return {
                  height: Math.max(scrollHeight, viewportHeight),
                  width: Math.max(scrollWidth, viewportWidth)
                };
              });
              options.clip = { ...dimensions, x: 0, y: 0 };
              stack.use(await this._createTemporaryViewportContainingBox(options.clip));
            } else if (options.clip && !options.captureBeyondViewport) {
              stack.use(options.clip && await this._createTemporaryViewportContainingBox(options.clip));
            } else if (!options.clip) {
              options.captureBeyondViewport = false;
            }
          }
          const data = await this._screenshot(options);
          if (options.encoding === "base64") {
            return data;
          }
          const buffer$1 = buffer.Buffer.from(data, "base64");
          await this._maybeWriteBufferToFile(options.path, buffer$1);
          return buffer$1;
        } catch (e_2) {
          env_2.error = e_2;
          env_2.hasError = true;
        } finally {
          const result_1 = __disposeResources$8(env_2);
          if (result_1)
            await result_1;
        }
      }
      /**
       * @internal
       */
      async _createTemporaryViewportContainingBox(clip) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
          const viewport = await this.mainFrame().isolatedRealm().evaluate(() => {
            return {
              pageLeft: window.visualViewport.pageLeft,
              pageTop: window.visualViewport.pageTop,
              width: window.visualViewport.width,
              height: window.visualViewport.height
            };
          });
          const stack = __addDisposableResource$8(env_3, new disposable_js_1$d.AsyncDisposableStack(), true);
          if (clip.x < viewport.pageLeft || clip.y < viewport.pageTop) {
            await this.evaluate((left, top) => {
              window.scroll({ left, top, behavior: "instant" });
            }, Math.floor(clip.x), Math.floor(clip.y));
            stack.defer(async () => {
              await this.evaluate((left, top) => {
                window.scroll({ left, top, behavior: "instant" });
              }, viewport.pageLeft, viewport.pageTop).catch(util_js_1$i.debugError);
            });
          }
          if (clip.width + clip.x > viewport.width || clip.height + clip.y > viewport.height) {
            const originalViewport = this.viewport() ?? {
              width: 0,
              height: 0
            };
            await this.setViewport({
              width: Math.max(viewport.width, Math.ceil(clip.width + clip.x)),
              height: Math.max(viewport.height, Math.ceil(clip.height + clip.y))
            });
            stack.defer(async () => {
              await this.setViewport(originalViewport).catch(util_js_1$i.debugError);
            });
          }
          return stack.move();
        } catch (e_3) {
          env_3.error = e_3;
          env_3.hasError = true;
        } finally {
          const result_2 = __disposeResources$8(env_3);
          if (result_2)
            await result_2;
        }
      }
      /**
       * @internal
       */
      _getPDFOptions(options = {}, lengthUnit = "in") {
        var _a3, _b, _c, _d;
        const defaults = {
          scale: 1,
          displayHeaderFooter: false,
          headerTemplate: "",
          footerTemplate: "",
          printBackground: false,
          landscape: false,
          pageRanges: "",
          preferCSSPageSize: false,
          omitBackground: false,
          timeout: 3e4,
          tagged: false
        };
        let width = 8.5;
        let height = 11;
        if (options.format) {
          const format = PDFOptions_js_1.paperFormats[options.format.toLowerCase()];
          (0, assert_js_1$i.assert)(format, "Unknown paper format: " + options.format);
          width = format.width;
          height = format.height;
        } else {
          width = convertPrintParameterToInches(options.width, lengthUnit) ?? width;
          height = convertPrintParameterToInches(options.height, lengthUnit) ?? height;
        }
        const margin = {
          top: convertPrintParameterToInches((_a3 = options.margin) == null ? void 0 : _a3.top, lengthUnit) || 0,
          left: convertPrintParameterToInches((_b = options.margin) == null ? void 0 : _b.left, lengthUnit) || 0,
          bottom: convertPrintParameterToInches((_c = options.margin) == null ? void 0 : _c.bottom, lengthUnit) || 0,
          right: convertPrintParameterToInches((_d = options.margin) == null ? void 0 : _d.right, lengthUnit) || 0
        };
        return {
          ...defaults,
          ...options,
          width,
          height,
          margin
        };
      }
      /**
       * The page's title
       *
       * @remarks
       * Shortcut for {@link Frame.title | page.mainFrame().title()}.
       */
      async title() {
        return await this.mainFrame().title();
      }
      /**
       * This method fetches an element with `selector`, scrolls it into view if
       * needed, and then uses {@link Page | Page.mouse} to click in the center of the
       * element. If there's no element matching `selector`, the method throws an
       * error.
       * @remarks Bear in mind that if `click()` triggers a navigation event and
       * there's a separate `page.waitForNavigation()` promise to be resolved, you
       * may end up with a race condition that yields unexpected results. The
       * correct pattern for click and wait for navigation is the following:
       *
       * ```ts
       * const [response] = await Promise.all([
       *   page.waitForNavigation(waitOptions),
       *   page.click(selector, clickOptions),
       * ]);
       * ```
       *
       * Shortcut for {@link Frame.click | page.mainFrame().click(selector[, options]) }.
       * @param selector - A `selector` to search for element to click. If there are
       * multiple elements satisfying the `selector`, the first will be clicked
       * @param options - `Object`
       * @returns Promise which resolves when the element matching `selector` is
       * successfully clicked. The Promise will be rejected if there is no element
       * matching `selector`.
       */
      click(selector, options) {
        return this.mainFrame().click(selector, options);
      }
      /**
       * This method fetches an element with `selector` and focuses it. If there's no
       * element matching `selector`, the method throws an error.
       * @param selector - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector }
       * of an element to focus. If there are multiple elements satisfying the
       * selector, the first will be focused.
       * @returns Promise which resolves when the element matching selector is
       * successfully focused. The promise will be rejected if there is no element
       * matching selector.
       * @remarks
       * Shortcut for {@link Frame.focus | page.mainFrame().focus(selector)}.
       */
      focus(selector) {
        return this.mainFrame().focus(selector);
      }
      /**
       * This method fetches an element with `selector`, scrolls it into view if
       * needed, and then uses {@link Page | Page.mouse}
       * to hover over the center of the element.
       * If there's no element matching `selector`, the method throws an error.
       * @param selector - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * to search for element to hover. If there are multiple elements satisfying
       * the selector, the first will be hovered.
       * @returns Promise which resolves when the element matching `selector` is
       * successfully hovered. Promise gets rejected if there's no element matching
       * `selector`.
       * @remarks
       * Shortcut for {@link Page.hover | page.mainFrame().hover(selector)}.
       */
      hover(selector) {
        return this.mainFrame().hover(selector);
      }
      /**
       * Triggers a `change` and `input` event once all the provided options have been
       * selected. If there's no `<select>` element matching `selector`, the method
       * throws an error.
       *
       * @example
       *
       * ```ts
       * page.select('select#colors', 'blue'); // single selection
       * page.select('select#colors', 'red', 'green', 'blue'); // multiple selections
       * ```
       *
       * @param selector - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | Selector}
       * to query the page for
       * @param values - Values of options to select. If the `<select>` has the
       * `multiple` attribute, all values are considered, otherwise only the first one
       * is taken into account.
       * @returns
       *
       * @remarks
       * Shortcut for {@link Frame.select | page.mainFrame().select()}
       */
      select(selector, ...values) {
        return this.mainFrame().select(selector, ...values);
      }
      /**
       * This method fetches an element with `selector`, scrolls it into view if
       * needed, and then uses {@link Page | Page.touchscreen}
       * to tap in the center of the element.
       * If there's no element matching `selector`, the method throws an error.
       * @param selector - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | Selector}
       * to search for element to tap. If there are multiple elements satisfying the
       * selector, the first will be tapped.
       * @returns
       * @remarks
       * Shortcut for {@link Frame.tap | page.mainFrame().tap(selector)}.
       */
      tap(selector) {
        return this.mainFrame().tap(selector);
      }
      /**
       * Sends a `keydown`, `keypress/input`, and `keyup` event for each character
       * in the text.
       *
       * To press a special key, like `Control` or `ArrowDown`, use {@link Keyboard.press}.
       * @example
       *
       * ```ts
       * await page.type('#mytextarea', 'Hello');
       * // Types instantly
       * await page.type('#mytextarea', 'World', {delay: 100});
       * // Types slower, like a user
       * ```
       *
       * @param selector - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * of an element to type into. If there are multiple elements satisfying the
       * selector, the first will be used.
       * @param text - A text to type into a focused element.
       * @param options - have property `delay` which is the Time to wait between
       * key presses in milliseconds. Defaults to `0`.
       * @returns
       * @remarks
       */
      type(selector, text, options) {
        return this.mainFrame().type(selector, text, options);
      }
      /**
       * @deprecated Replace with `new Promise(r => setTimeout(r, milliseconds));`.
       *
       * Causes your script to wait for the given number of milliseconds.
       *
       * @remarks
       * It's generally recommended to not wait for a number of seconds, but instead
       * use {@link Frame.waitForSelector}, {@link Frame.waitForXPath} or
       * {@link Frame.waitForFunction} to wait for exactly the conditions you want.
       *
       * @example
       *
       * Wait for 1 second:
       *
       * ```ts
       * await page.waitForTimeout(1000);
       * ```
       *
       * @param milliseconds - the number of milliseconds to wait.
       */
      waitForTimeout(milliseconds) {
        return this.mainFrame().waitForTimeout(milliseconds);
      }
      /**
       * Wait for the `selector` to appear in page. If at the moment of calling the
       * method the `selector` already exists, the method will return immediately. If
       * the `selector` doesn't appear after the `timeout` milliseconds of waiting, the
       * function will throw.
       *
       * @example
       * This method works across navigations:
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       * (async () => {
       *   const browser = await puppeteer.launch();
       *   const page = await browser.newPage();
       *   let currentURL;
       *   page
       *     .waitForSelector('img')
       *     .then(() => console.log('First URL with image: ' + currentURL));
       *   for (currentURL of [
       *     'https://example.com',
       *     'https://google.com',
       *     'https://bbc.com',
       *   ]) {
       *     await page.goto(currentURL);
       *   }
       *   await browser.close();
       * })();
       * ```
       *
       * @param selector - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * of an element to wait for
       * @param options - Optional waiting parameters
       * @returns Promise which resolves when element specified by selector string
       * is added to DOM. Resolves to `null` if waiting for hidden: `true` and
       * selector is not found in DOM.
       * @remarks
       * The optional Parameter in Arguments `options` are:
       *
       * - `visible`: A boolean wait for element to be present in DOM and to be
       *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
       *   properties. Defaults to `false`.
       *
       * - `hidden`: Wait for element to not be found in the DOM or to be hidden,
       *   i.e. have `display: none` or `visibility: hidden` CSS properties. Defaults to
       *   `false`.
       *
       * - `timeout`: maximum time to wait for in milliseconds. Defaults to `30000`
       *   (30 seconds). Pass `0` to disable timeout. The default value can be changed
       *   by using the {@link Page.setDefaultTimeout} method.
       */
      async waitForSelector(selector, options = {}) {
        return await this.mainFrame().waitForSelector(selector, options);
      }
      /**
       * Wait for the `xpath` to appear in page. If at the moment of calling the
       * method the `xpath` already exists, the method will return immediately. If
       * the `xpath` doesn't appear after the `timeout` milliseconds of waiting, the
       * function will throw.
       *
       * @example
       * This method works across navigation
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       * (async () => {
       *   const browser = await puppeteer.launch();
       *   const page = await browser.newPage();
       *   let currentURL;
       *   page
       *     .waitForXPath('//img')
       *     .then(() => console.log('First URL with image: ' + currentURL));
       *   for (currentURL of [
       *     'https://example.com',
       *     'https://google.com',
       *     'https://bbc.com',
       *   ]) {
       *     await page.goto(currentURL);
       *   }
       *   await browser.close();
       * })();
       * ```
       *
       * @param xpath - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/XPath | xpath} of an
       * element to wait for
       * @param options - Optional waiting parameters
       * @returns Promise which resolves when element specified by xpath string is
       * added to DOM. Resolves to `null` if waiting for `hidden: true` and xpath is
       * not found in DOM, otherwise resolves to `ElementHandle`.
       * @remarks
       * The optional Argument `options` have properties:
       *
       * - `visible`: A boolean to wait for element to be present in DOM and to be
       *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
       *   properties. Defaults to `false`.
       *
       * - `hidden`: A boolean wait for element to not be found in the DOM or to be
       *   hidden, i.e. have `display: none` or `visibility: hidden` CSS properties.
       *   Defaults to `false`.
       *
       * - `timeout`: A number which is maximum time to wait for in milliseconds.
       *   Defaults to `30000` (30 seconds). Pass `0` to disable timeout. The default
       *   value can be changed by using the {@link Page.setDefaultTimeout} method.
       */
      waitForXPath(xpath, options) {
        return this.mainFrame().waitForXPath(xpath, options);
      }
      /**
       * Waits for a function to finish evaluating in the page's context.
       *
       * @example
       * The {@link Page.waitForFunction} can be used to observe viewport size change:
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       * (async () => {
       *   const browser = await puppeteer.launch();
       *   const page = await browser.newPage();
       *   const watchDog = page.waitForFunction('window.innerWidth < 100');
       *   await page.setViewport({width: 50, height: 50});
       *   await watchDog;
       *   await browser.close();
       * })();
       * ```
       *
       * @example
       * To pass arguments from node.js to the predicate of
       * {@link Page.waitForFunction} function:
       *
       * ```ts
       * const selector = '.foo';
       * await page.waitForFunction(
       *   selector => !!document.querySelector(selector),
       *   {},
       *   selector
       * );
       * ```
       *
       * @example
       * The predicate of {@link Page.waitForFunction} can be asynchronous too:
       *
       * ```ts
       * const username = 'github-username';
       * await page.waitForFunction(
       *   async username => {
       *     const githubResponse = await fetch(
       *       `https://api.github.com/users/${username}`
       *     );
       *     const githubUser = await githubResponse.json();
       *     // show the avatar
       *     const img = document.createElement('img');
       *     img.src = githubUser.avatar_url;
       *     // wait 3 seconds
       *     await new Promise((resolve, reject) => setTimeout(resolve, 3000));
       *     img.remove();
       *   },
       *   {},
       *   username
       * );
       * ```
       *
       * @param pageFunction - Function to be evaluated in browser context
       * @param options - Options for configuring waiting behavior.
       */
      waitForFunction(pageFunction, options, ...args) {
        return this.mainFrame().waitForFunction(pageFunction, options, ...args);
      }
      /** @internal */
      [(_screenshot_decorators = [(0, decorators_js_1$4.guarded)(function() {
        return this.browser();
      })], disposable_js_1$d.disposeSymbol)]() {
        return void this.close().catch(util_js_1$i.debugError);
      }
      /** @internal */
      [disposable_js_1$d.asyncDisposeSymbol]() {
        return this.close();
      }
    }, _requestHandlers = new WeakMap(), _screencastSessionCount = new WeakMap(), _startScreencastPromise = new WeakMap(), _getNativePixelDimensions = new WeakSet(), getNativePixelDimensions_fn = async function() {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const viewport = this.viewport();
        const stack = __addDisposableResource$8(env_1, new disposable_js_1$d.DisposableStack(), false);
        if (viewport && viewport.deviceScaleFactor !== 0) {
          await this.setViewport({ ...viewport, deviceScaleFactor: 0 });
          stack.defer(() => {
            void this.setViewport(viewport).catch(util_js_1$i.debugError);
          });
        }
        return await this.mainFrame().isolatedRealm().evaluate(() => {
          return [
            window.visualViewport.width * window.devicePixelRatio,
            window.visualViewport.height * window.devicePixelRatio,
            window.devicePixelRatio
          ];
        });
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$8(env_1);
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate$5(_a2, null, _screenshot_decorators, { kind: "method", name: "screenshot", static: false, private: false, access: { has: (obj) => "screenshot" in obj, get: (obj) => obj.screenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })(), _a2;
  })();
  exports2.Page = Page;
  exports2.supportedMetrics = /* @__PURE__ */ new Set([
    "Timestamp",
    "Documents",
    "Frames",
    "JSEventListeners",
    "Nodes",
    "LayoutCount",
    "RecalcStyleCount",
    "LayoutDuration",
    "RecalcStyleDuration",
    "ScriptDuration",
    "TaskDuration",
    "JSHeapUsedSize",
    "JSHeapTotalSize"
  ]);
  exports2.unitToPixels = {
    px: 1,
    in: 96,
    cm: 37.8,
    mm: 3.78
  };
  function convertPrintParameterToInches(parameter, lengthUnit = "in") {
    if (typeof parameter === "undefined") {
      return void 0;
    }
    let pixels;
    if ((0, util_js_1$i.isNumber)(parameter)) {
      pixels = parameter;
    } else if ((0, util_js_1$i.isString)(parameter)) {
      const text = parameter;
      let unit = text.substring(text.length - 2).toLowerCase();
      let valueText = "";
      if (unit in exports2.unitToPixels) {
        valueText = text.substring(0, text.length - 2);
      } else {
        unit = "px";
        valueText = text;
      }
      const value = Number(valueText);
      (0, assert_js_1$i.assert)(!isNaN(value), "Failed to parse parameter value: " + text);
      pixels = value * exports2.unitToPixels[unit];
    } else {
      throw new Error("page.pdf() Cannot handle parameter type: " + typeof parameter);
    }
    return pixels / exports2.unitToPixels[lengthUnit];
  }
  function normalizeRectangle(clip) {
    return {
      ...clip,
      ...clip.width < 0 ? {
        x: clip.x + clip.width,
        width: -clip.width
      } : {
        x: clip.x,
        width: clip.width
      },
      ...clip.height < 0 ? {
        y: clip.y + clip.height,
        height: -clip.height
      } : {
        y: clip.y,
        height: clip.height
      }
    };
  }
  function roundRectangle(clip) {
    const x = Math.round(clip.x);
    const y = Math.round(clip.y);
    const width = Math.round(clip.width + clip.x - x);
    const height = Math.round(clip.height + clip.y - y);
    return { ...clip, x, y, width, height };
  }
  const Page$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$2 = /* @__PURE__ */ getAugmentedNamespace(Page$1);
  var ConsoleMessage$1 = {};
  Object.defineProperty(ConsoleMessage$1, "__esModule", { value: true });
  ConsoleMessage$1.ConsoleMessage = void 0;
  class ConsoleMessage {
    /**
     * @public
     */
    constructor(type, text, args, stackTraceLocations) {
      __privateAdd(this, _type2, void 0);
      __privateAdd(this, _text, void 0);
      __privateAdd(this, _args, void 0);
      __privateAdd(this, _stackTraceLocations, void 0);
      __privateSet(this, _type2, type);
      __privateSet(this, _text, text);
      __privateSet(this, _args, args);
      __privateSet(this, _stackTraceLocations, stackTraceLocations);
    }
    /**
     * The type of the console message.
     */
    type() {
      return __privateGet(this, _type2);
    }
    /**
     * The text of the console message.
     */
    text() {
      return __privateGet(this, _text);
    }
    /**
     * An array of arguments passed to the console.
     */
    args() {
      return __privateGet(this, _args);
    }
    /**
     * The location of the console message.
     */
    location() {
      return __privateGet(this, _stackTraceLocations)[0] ?? {};
    }
    /**
     * The array of locations on the stack of the console message.
     */
    stackTrace() {
      return __privateGet(this, _stackTraceLocations);
    }
  }
  _type2 = new WeakMap();
  _text = new WeakMap();
  _args = new WeakMap();
  _stackTraceLocations = new WeakMap();
  ConsoleMessage$1.ConsoleMessage = ConsoleMessage;
  var FileChooser$1 = {};
  Object.defineProperty(FileChooser$1, "__esModule", { value: true });
  FileChooser$1.FileChooser = void 0;
  const assert_js_1$h = assert$1;
  class FileChooser {
    /**
     * @internal
     */
    constructor(element, event) {
      __privateAdd(this, _element, void 0);
      __privateAdd(this, _multiple, void 0);
      __privateAdd(this, _handled, false);
      __privateSet(this, _element, element);
      __privateSet(this, _multiple, event.mode !== "selectSingle");
    }
    /**
     * Whether file chooser allow for
     * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
     * file selection.
     */
    isMultiple() {
      return __privateGet(this, _multiple);
    }
    /**
     * Accept the file chooser request with the given file paths.
     *
     * @remarks This will not validate whether the file paths exists. Also, if a
     * path is relative, then it is resolved against the
     * {@link https://nodejs.org/api/process.html#process_process_cwd | current working directory}.
     * For locals script connecting to remote chrome environments, paths must be
     * absolute.
     */
    async accept(paths) {
      (0, assert_js_1$h.assert)(!__privateGet(this, _handled), "Cannot accept FileChooser which is already handled!");
      __privateSet(this, _handled, true);
      await __privateGet(this, _element).uploadFile(...paths);
    }
    /**
     * Closes the file chooser without selecting any files.
     */
    async cancel() {
      (0, assert_js_1$h.assert)(!__privateGet(this, _handled), "Cannot cancel FileChooser which is already handled!");
      __privateSet(this, _handled, true);
      await __privateGet(this, _element).evaluate((element) => {
        element.dispatchEvent(new Event("cancel", { bubbles: true }));
      });
    }
  }
  _element = new WeakMap();
  _multiple = new WeakMap();
  _handled = new WeakMap();
  FileChooser$1.FileChooser = FileChooser;
  var NetworkManagerEvents = {};
  Object.defineProperty(NetworkManagerEvents, "__esModule", { value: true });
  NetworkManagerEvents.NetworkManagerEvent = void 0;
  var NetworkManagerEvent;
  (function(NetworkManagerEvent2) {
    NetworkManagerEvent2.Request = Symbol("NetworkManager.Request");
    NetworkManagerEvent2.RequestServedFromCache = Symbol("NetworkManager.RequestServedFromCache");
    NetworkManagerEvent2.Response = Symbol("NetworkManager.Response");
    NetworkManagerEvent2.RequestFailed = Symbol("NetworkManager.RequestFailed");
    NetworkManagerEvent2.RequestFinished = Symbol("NetworkManager.RequestFinished");
  })(NetworkManagerEvent || (NetworkManagerEvents.NetworkManagerEvent = NetworkManagerEvent = {}));
  var Accessibility$1 = {};
  Object.defineProperty(Accessibility$1, "__esModule", { value: true });
  Accessibility$1.Accessibility = void 0;
  class Accessibility {
    /**
     * @internal
     */
    constructor(client) {
      __privateAdd(this, _client, void 0);
      __privateSet(this, _client, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      __privateSet(this, _client, client);
    }
    /**
     * Captures the current state of the accessibility tree.
     * The returned object represents the root accessible node of the page.
     *
     * @remarks
     *
     * **NOTE** The Chrome accessibility tree contains nodes that go unused on
     * most platforms and by most screen readers. Puppeteer will discard them as
     * well for an easier to process tree, unless `interestingOnly` is set to
     * `false`.
     *
     * @example
     * An example of dumping the entire accessibility tree:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * console.log(snapshot);
     * ```
     *
     * @example
     * An example of logging the focused node's name:
     *
     * ```ts
     * const snapshot = await page.accessibility.snapshot();
     * const node = findFocusedNode(snapshot);
     * console.log(node && node.name);
     *
     * function findFocusedNode(node) {
     *   if (node.focused) return node;
     *   for (const child of node.children || []) {
     *     const foundNode = findFocusedNode(child);
     *     return foundNode;
     *   }
     *   return null;
     * }
     * ```
     *
     * @returns An AXNode object representing the snapshot.
     */
    async snapshot(options = {}) {
      const { interestingOnly = true, root = null } = options;
      const { nodes } = await __privateGet(this, _client).send("Accessibility.getFullAXTree");
      let backendNodeId;
      if (root) {
        const { node } = await __privateGet(this, _client).send("DOM.describeNode", {
          objectId: root.id
        });
        backendNodeId = node.backendNodeId;
      }
      const defaultRoot = AXNode.createTree(nodes);
      let needle = defaultRoot;
      if (backendNodeId) {
        needle = defaultRoot.find((node) => {
          return node.payload.backendDOMNodeId === backendNodeId;
        });
        if (!needle) {
          return null;
        }
      }
      if (!interestingOnly) {
        return this.serializeTree(needle)[0] ?? null;
      }
      const interestingNodes = /* @__PURE__ */ new Set();
      this.collectInterestingNodes(interestingNodes, defaultRoot, false);
      if (!interestingNodes.has(needle)) {
        return null;
      }
      return this.serializeTree(needle, interestingNodes)[0] ?? null;
    }
    serializeTree(node, interestingNodes) {
      const children = [];
      for (const child of node.children) {
        children.push(...this.serializeTree(child, interestingNodes));
      }
      if (interestingNodes && !interestingNodes.has(node)) {
        return children;
      }
      const serializedNode = node.serialize();
      if (children.length) {
        serializedNode.children = children;
      }
      return [serializedNode];
    }
    collectInterestingNodes(collection, node, insideControl) {
      if (node.isInteresting(insideControl)) {
        collection.add(node);
      }
      if (node.isLeafNode()) {
        return;
      }
      insideControl = insideControl || node.isControl();
      for (const child of node.children) {
        this.collectInterestingNodes(collection, child, insideControl);
      }
    }
  }
  _client = new WeakMap();
  Accessibility$1.Accessibility = Accessibility;
  const _AXNode = class _AXNode {
    constructor(payload) {
      __privateAdd(this, _isPlainTextField);
      __privateAdd(this, _isTextOnlyObject);
      __privateAdd(this, _hasFocusableChild);
      __publicField(this, "payload");
      __publicField(this, "children", []);
      __privateAdd(this, _richlyEditable, false);
      __privateAdd(this, _editable, false);
      __privateAdd(this, _focusable, false);
      __privateAdd(this, _hidden, false);
      __privateAdd(this, _name, void 0);
      __privateAdd(this, _role, void 0);
      __privateAdd(this, _ignored, void 0);
      __privateAdd(this, _cachedHasFocusableChild, void 0);
      this.payload = payload;
      __privateSet(this, _name, this.payload.name ? this.payload.name.value : "");
      __privateSet(this, _role, this.payload.role ? this.payload.role.value : "Unknown");
      __privateSet(this, _ignored, this.payload.ignored);
      for (const property of this.payload.properties || []) {
        if (property.name === "editable") {
          __privateSet(this, _richlyEditable, property.value.value === "richtext");
          __privateSet(this, _editable, true);
        }
        if (property.name === "focusable") {
          __privateSet(this, _focusable, property.value.value);
        }
        if (property.name === "hidden") {
          __privateSet(this, _hidden, property.value.value);
        }
      }
    }
    find(predicate) {
      if (predicate(this)) {
        return this;
      }
      for (const child of this.children) {
        const result = child.find(predicate);
        if (result) {
          return result;
        }
      }
      return null;
    }
    isLeafNode() {
      if (!this.children.length) {
        return true;
      }
      if (__privateMethod(this, _isPlainTextField, isPlainTextField_fn).call(this) || __privateMethod(this, _isTextOnlyObject, isTextOnlyObject_fn).call(this)) {
        return true;
      }
      switch (__privateGet(this, _role)) {
        case "doc-cover":
        case "graphics-symbol":
        case "img":
        case "image":
        case "Meter":
        case "scrollbar":
        case "slider":
        case "separator":
        case "progressbar":
          return true;
      }
      if (__privateMethod(this, _hasFocusableChild, hasFocusableChild_fn).call(this)) {
        return false;
      }
      if (__privateGet(this, _focusable) && __privateGet(this, _name)) {
        return true;
      }
      if (__privateGet(this, _role) === "heading" && __privateGet(this, _name)) {
        return true;
      }
      return false;
    }
    isControl() {
      switch (__privateGet(this, _role)) {
        case "button":
        case "checkbox":
        case "ColorWell":
        case "combobox":
        case "DisclosureTriangle":
        case "listbox":
        case "menu":
        case "menubar":
        case "menuitem":
        case "menuitemcheckbox":
        case "menuitemradio":
        case "radio":
        case "scrollbar":
        case "searchbox":
        case "slider":
        case "spinbutton":
        case "switch":
        case "tab":
        case "textbox":
        case "tree":
        case "treeitem":
          return true;
        default:
          return false;
      }
    }
    isInteresting(insideControl) {
      const role = __privateGet(this, _role);
      if (role === "Ignored" || __privateGet(this, _hidden) || __privateGet(this, _ignored)) {
        return false;
      }
      if (__privateGet(this, _focusable) || __privateGet(this, _richlyEditable)) {
        return true;
      }
      if (this.isControl()) {
        return true;
      }
      if (insideControl) {
        return false;
      }
      return this.isLeafNode() && !!__privateGet(this, _name);
    }
    serialize() {
      const properties = /* @__PURE__ */ new Map();
      for (const property of this.payload.properties || []) {
        properties.set(property.name.toLowerCase(), property.value.value);
      }
      if (this.payload.name) {
        properties.set("name", this.payload.name.value);
      }
      if (this.payload.value) {
        properties.set("value", this.payload.value.value);
      }
      if (this.payload.description) {
        properties.set("description", this.payload.description.value);
      }
      const node = {
        role: __privateGet(this, _role)
      };
      const userStringProperties = [
        "name",
        "value",
        "description",
        "keyshortcuts",
        "roledescription",
        "valuetext"
      ];
      const getUserStringPropertyValue = (key) => {
        return properties.get(key);
      };
      for (const userStringProperty of userStringProperties) {
        if (!properties.has(userStringProperty)) {
          continue;
        }
        node[userStringProperty] = getUserStringPropertyValue(userStringProperty);
      }
      const booleanProperties = [
        "disabled",
        "expanded",
        "focused",
        "modal",
        "multiline",
        "multiselectable",
        "readonly",
        "required",
        "selected"
      ];
      const getBooleanPropertyValue = (key) => {
        return properties.get(key);
      };
      for (const booleanProperty of booleanProperties) {
        if (booleanProperty === "focused" && __privateGet(this, _role) === "RootWebArea") {
          continue;
        }
        const value = getBooleanPropertyValue(booleanProperty);
        if (!value) {
          continue;
        }
        node[booleanProperty] = getBooleanPropertyValue(booleanProperty);
      }
      const tristateProperties = ["checked", "pressed"];
      for (const tristateProperty of tristateProperties) {
        if (!properties.has(tristateProperty)) {
          continue;
        }
        const value = properties.get(tristateProperty);
        node[tristateProperty] = value === "mixed" ? "mixed" : value === "true" ? true : false;
      }
      const numericalProperties = [
        "level",
        "valuemax",
        "valuemin"
      ];
      const getNumericalPropertyValue = (key) => {
        return properties.get(key);
      };
      for (const numericalProperty of numericalProperties) {
        if (!properties.has(numericalProperty)) {
          continue;
        }
        node[numericalProperty] = getNumericalPropertyValue(numericalProperty);
      }
      const tokenProperties = [
        "autocomplete",
        "haspopup",
        "invalid",
        "orientation"
      ];
      const getTokenPropertyValue = (key) => {
        return properties.get(key);
      };
      for (const tokenProperty of tokenProperties) {
        const value = getTokenPropertyValue(tokenProperty);
        if (!value || value === "false") {
          continue;
        }
        node[tokenProperty] = getTokenPropertyValue(tokenProperty);
      }
      return node;
    }
    static createTree(payloads) {
      const nodeById = /* @__PURE__ */ new Map();
      for (const payload of payloads) {
        nodeById.set(payload.nodeId, new _AXNode(payload));
      }
      for (const node of nodeById.values()) {
        for (const childId of node.payload.childIds || []) {
          const child = nodeById.get(childId);
          if (child) {
            node.children.push(child);
          }
        }
      }
      return nodeById.values().next().value;
    }
  };
  _richlyEditable = new WeakMap();
  _editable = new WeakMap();
  _focusable = new WeakMap();
  _hidden = new WeakMap();
  _name = new WeakMap();
  _role = new WeakMap();
  _ignored = new WeakMap();
  _cachedHasFocusableChild = new WeakMap();
  _isPlainTextField = new WeakSet();
  isPlainTextField_fn = function() {
    if (__privateGet(this, _richlyEditable)) {
      return false;
    }
    if (__privateGet(this, _editable)) {
      return true;
    }
    return __privateGet(this, _role) === "textbox" || __privateGet(this, _role) === "searchbox";
  };
  _isTextOnlyObject = new WeakSet();
  isTextOnlyObject_fn = function() {
    const role = __privateGet(this, _role);
    return role === "LineBreak" || role === "text" || role === "InlineTextBox" || role === "StaticText";
  };
  _hasFocusableChild = new WeakSet();
  hasFocusableChild_fn = function() {
    var _a2;
    if (__privateGet(this, _cachedHasFocusableChild) === void 0) {
      __privateSet(this, _cachedHasFocusableChild, false);
      for (const child of this.children) {
        if (__privateGet(child, _focusable) || __privateMethod(_a2 = child, _hasFocusableChild, hasFocusableChild_fn).call(_a2)) {
          __privateSet(this, _cachedHasFocusableChild, true);
          break;
        }
      }
    }
    return __privateGet(this, _cachedHasFocusableChild);
  };
  let AXNode = _AXNode;
  var Binding$1 = {};
  var JSHandle$2 = {};
  var decorators = {};
  var Mutex$1 = {};
  Object.defineProperty(Mutex$1, "__esModule", { value: true });
  Mutex$1.Mutex = void 0;
  const Deferred_js_1$d = Deferred$1;
  const disposable_js_1$c = disposable;
  const _Mutex = class _Mutex {
    constructor() {
      __privateAdd(this, _locked, false);
      __privateAdd(this, _acquirers, []);
    }
    // This is FIFO.
    async acquire() {
      if (!__privateGet(this, _locked)) {
        __privateSet(this, _locked, true);
        return new _Mutex.Guard(this);
      }
      const deferred = Deferred_js_1$d.Deferred.create();
      __privateGet(this, _acquirers).push(deferred.resolve.bind(deferred));
      await deferred.valueOrThrow();
      return new _Mutex.Guard(this);
    }
    release() {
      const resolve = __privateGet(this, _acquirers).shift();
      if (!resolve) {
        __privateSet(this, _locked, false);
        return;
      }
      resolve();
    }
  };
  _locked = new WeakMap();
  _acquirers = new WeakMap();
  __publicField(_Mutex, "Guard", (_a = class {
    constructor(mutex) {
      __privateAdd(this, _mutex, void 0);
      __privateSet(this, _mutex, mutex);
    }
    [disposable_js_1$c.disposeSymbol]() {
      return __privateGet(this, _mutex).release();
    }
  }, _mutex = new WeakMap(), _a));
  let Mutex = _Mutex;
  Mutex$1.Mutex = Mutex;
  var __addDisposableResource$7 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$7 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(decorators, "__esModule", { value: true });
  decorators.guarded = decorators.invokeAtMostOnceForArguments = decorators.throwIfDisposed = decorators.moveable = void 0;
  const disposable_js_1$b = disposable;
  const Mutex_js_1$1 = Mutex$1;
  const instances = /* @__PURE__ */ new WeakSet();
  function moveable(Class, _) {
    let hasDispose = false;
    if (Class.prototype[disposable_js_1$b.disposeSymbol]) {
      const dispose = Class.prototype[disposable_js_1$b.disposeSymbol];
      Class.prototype[disposable_js_1$b.disposeSymbol] = function() {
        if (instances.has(this)) {
          instances.delete(this);
          return;
        }
        return dispose.call(this);
      };
      hasDispose = true;
    }
    if (Class.prototype[disposable_js_1$b.asyncDisposeSymbol]) {
      const asyncDispose = Class.prototype[disposable_js_1$b.asyncDisposeSymbol];
      Class.prototype[disposable_js_1$b.asyncDisposeSymbol] = function() {
        if (instances.has(this)) {
          instances.delete(this);
          return;
        }
        return asyncDispose.call(this);
      };
      hasDispose = true;
    }
    if (hasDispose) {
      Class.prototype.move = function() {
        instances.add(this);
        return this;
      };
    }
    return Class;
  }
  decorators.moveable = moveable;
  function throwIfDisposed(message = (value) => {
    return `Attempted to use disposed ${value.constructor.name}.`;
  }) {
    return (target, _) => {
      return function(...args) {
        if (this.disposed) {
          throw new Error(message(this));
        }
        return target.call(this, ...args);
      };
    };
  }
  decorators.throwIfDisposed = throwIfDisposed;
  function invokeAtMostOnceForArguments(target, _) {
    const cache = /* @__PURE__ */ new WeakMap();
    let cacheDepth = -1;
    return function(...args) {
      if (cacheDepth === -1) {
        cacheDepth = args.length;
      }
      if (cacheDepth !== args.length) {
        throw new Error("Memoized method was called with the wrong number of arguments");
      }
      let freshArguments = false;
      let cacheIterator = cache;
      for (const arg of args) {
        if (cacheIterator.has(arg)) {
          cacheIterator = cacheIterator.get(arg);
        } else {
          freshArguments = true;
          cacheIterator.set(arg, /* @__PURE__ */ new WeakMap());
          cacheIterator = cacheIterator.get(arg);
        }
      }
      if (!freshArguments) {
        return;
      }
      return target.call(this, ...args);
    };
  }
  decorators.invokeAtMostOnceForArguments = invokeAtMostOnceForArguments;
  function guarded(getKey = function() {
    return this;
  }) {
    return (target, _) => {
      const mutexes = /* @__PURE__ */ new WeakMap();
      return async function(...args) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
          const key = getKey.call(this);
          let mutex = mutexes.get(key);
          if (!mutex) {
            mutex = new Mutex_js_1$1.Mutex();
            mutexes.set(key, mutex);
          }
          const _2 = __addDisposableResource$7(env_1, await mutex.acquire(), true);
          return await target.call(this, ...args);
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          const result_1 = __disposeResources$7(env_1);
          if (result_1)
            await result_1;
        }
      };
    };
  }
  decorators.guarded = guarded;
  var __runInitializers$4 = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$4 = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __addDisposableResource$6 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$6 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(JSHandle$2, "__esModule", { value: true });
  JSHandle$2.JSHandle = void 0;
  const util_js_1$h = require$$2$1;
  const decorators_js_1$3 = decorators;
  const disposable_js_1$a = disposable;
  let JSHandle$1 = (() => {
    var _a2;
    let _classDecorators = [decorators_js_1$3.moveable];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    _a2 = class {
      /**
       * @internal
       */
      constructor() {
        __runInitializers$4(this, _instanceExtraInitializers);
      }
      /**
       * Evaluates the given function with the current handle as its first argument.
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = (0, util_js_1$h.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
        return await this.realm.evaluate(pageFunction, this, ...args);
      }
      /**
       * Evaluates the given function with the current handle as its first argument.
       *
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = (0, util_js_1$h.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
        return await this.realm.evaluateHandle(pageFunction, this, ...args);
      }
      /**
       * @internal
       */
      async getProperty(propertyName) {
        return await this.evaluateHandle((object, propertyName2) => {
          return object[propertyName2];
        }, propertyName);
      }
      /**
       * Gets a map of handles representing the properties of the current handle.
       *
       * @example
       *
       * ```ts
       * const listHandle = await page.evaluateHandle(() => document.body.children);
       * const properties = await listHandle.getProperties();
       * const children = [];
       * for (const property of properties.values()) {
       *   const element = property.asElement();
       *   if (element) {
       *     children.push(element);
       *   }
       * }
       * children; // holds elementHandles to all children of document.body
       * ```
       */
      async getProperties() {
        const propertyNames = await this.evaluate((object) => {
          var _a3;
          const enumerableProperties = [];
          const descriptors = Object.getOwnPropertyDescriptors(object);
          for (const propertyName in descriptors) {
            if ((_a3 = descriptors[propertyName]) == null ? void 0 : _a3.enumerable) {
              enumerableProperties.push(propertyName);
            }
          }
          return enumerableProperties;
        });
        const map = /* @__PURE__ */ new Map();
        const results = await Promise.all(propertyNames.map((key) => {
          return this.getProperty(key);
        }));
        for (const [key, value] of Object.entries(propertyNames)) {
          const env_1 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource$6(env_1, results[key], false);
            if (handle) {
              map.set(value, handle.move());
            }
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources$6(env_1);
          }
        }
        return map;
      }
      /** @internal */
      [(_getProperty_decorators = [(0, decorators_js_1$3.throwIfDisposed)()], _getProperties_decorators = [(0, decorators_js_1$3.throwIfDisposed)()], disposable_js_1$a.disposeSymbol)]() {
        return void this.dispose().catch(util_js_1$h.debugError);
      }
      /** @internal */
      [disposable_js_1$a.asyncDisposeSymbol]() {
        return this.dispose();
      }
    }, _classThis = _a2, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      __esDecorate$4(_a2, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: (obj) => "getProperty" in obj, get: (obj) => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$4(_a2, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: (obj) => "getProperties" in obj, get: (obj) => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$4(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
      _classThis = _classDescriptor.value;
      if (_metadata)
        Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      __runInitializers$4(_classThis, _classExtraInitializers);
    })(), _a2;
    return _classThis;
  })();
  JSHandle$2.JSHandle = JSHandle$1;
  var __addDisposableResource$5 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$5 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(Binding$1, "__esModule", { value: true });
  Binding$1.Binding = void 0;
  const JSHandle_js_1$6 = JSHandle$2;
  const util_js_1$g = require$$2$1;
  const disposable_js_1$9 = disposable;
  const ErrorLike_js_1$8 = ErrorLike;
  class Binding {
    constructor(name, fn) {
      __privateAdd(this, _name2, void 0);
      __privateAdd(this, _fn, void 0);
      __privateSet(this, _name2, name);
      __privateSet(this, _fn, fn);
    }
    get name() {
      return __privateGet(this, _name2);
    }
    /**
     * @param context - Context to run the binding in; the context should have
     * the binding added to it beforehand.
     * @param id - ID of the call. This should come from the CDP
     * `onBindingCalled` response.
     * @param args - Plain arguments from CDP.
     */
    async run(context, id, args, isTrivial) {
      const stack = new disposable_js_1$9.DisposableStack();
      try {
        if (!isTrivial) {
          const env_1 = { stack: [], error: void 0, hasError: false };
          try {
            const handles = __addDisposableResource$5(env_1, await context.evaluateHandle((name, seq) => {
              return globalThis[name].args.get(seq);
            }, __privateGet(this, _name2), id), false);
            const properties = await handles.getProperties();
            for (const [index, handle] of properties) {
              if (index in args) {
                switch (handle.remoteObject().subtype) {
                  case "node":
                    args[+index] = handle;
                    break;
                  default:
                    stack.use(handle);
                }
              } else {
                stack.use(handle);
              }
            }
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources$5(env_1);
          }
        }
        await context.evaluate((name, seq, result) => {
          const callbacks = globalThis[name].callbacks;
          callbacks.get(seq).resolve(result);
          callbacks.delete(seq);
        }, __privateGet(this, _name2), id, await __privateGet(this, _fn).call(this, ...args));
        for (const arg of args) {
          if (arg instanceof JSHandle_js_1$6.JSHandle) {
            stack.use(arg);
          }
        }
      } catch (error) {
        if ((0, ErrorLike_js_1$8.isErrorLike)(error)) {
          await context.evaluate((name, seq, message, stack2) => {
            const error2 = new Error(message);
            error2.stack = stack2;
            const callbacks = globalThis[name].callbacks;
            callbacks.get(seq).reject(error2);
            callbacks.delete(seq);
          }, __privateGet(this, _name2), id, error.message, error.stack).catch(util_js_1$g.debugError);
        } else {
          await context.evaluate((name, seq, error2) => {
            const callbacks = globalThis[name].callbacks;
            callbacks.get(seq).reject(error2);
            callbacks.delete(seq);
          }, __privateGet(this, _name2), id, error).catch(util_js_1$g.debugError);
        }
      }
    }
  }
  _name2 = new WeakMap();
  _fn = new WeakMap();
  Binding$1.Binding = Binding;
  var Connection$1 = {};
  var Debug = {};
  var browser$1 = { exports: {} };
  var process = browser$1.exports = {};
  var cachedSetTimeout;
  var cachedClearTimeout;
  function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
  }
  function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
  }
  (function() {
    try {
      if (typeof setTimeout === "function") {
        cachedSetTimeout = setTimeout;
      } else {
        cachedSetTimeout = defaultSetTimout;
      }
    } catch (e) {
      cachedSetTimeout = defaultSetTimout;
    }
    try {
      if (typeof clearTimeout === "function") {
        cachedClearTimeout = clearTimeout;
      } else {
        cachedClearTimeout = defaultClearTimeout;
      }
    } catch (e) {
      cachedClearTimeout = defaultClearTimeout;
    }
  })();
  function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
      return setTimeout(fun, 0);
    }
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
      cachedSetTimeout = setTimeout;
      return setTimeout(fun, 0);
    }
    try {
      return cachedSetTimeout(fun, 0);
    } catch (e) {
      try {
        return cachedSetTimeout.call(null, fun, 0);
      } catch (e2) {
        return cachedSetTimeout.call(this, fun, 0);
      }
    }
  }
  function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
      return clearTimeout(marker);
    }
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
      cachedClearTimeout = clearTimeout;
      return clearTimeout(marker);
    }
    try {
      return cachedClearTimeout(marker);
    } catch (e) {
      try {
        return cachedClearTimeout.call(null, marker);
      } catch (e2) {
        return cachedClearTimeout.call(this, marker);
      }
    }
  }
  var queue = [];
  var draining = false;
  var currentQueue;
  var queueIndex = -1;
  function cleanUpNextTick() {
    if (!draining || !currentQueue) {
      return;
    }
    draining = false;
    if (currentQueue.length) {
      queue = currentQueue.concat(queue);
    } else {
      queueIndex = -1;
    }
    if (queue.length) {
      drainQueue();
    }
  }
  function drainQueue() {
    if (draining) {
      return;
    }
    var timeout2 = runTimeout(cleanUpNextTick);
    draining = true;
    var len2 = queue.length;
    while (len2) {
      currentQueue = queue;
      queue = [];
      while (++queueIndex < len2) {
        if (currentQueue) {
          currentQueue[queueIndex].run();
        }
      }
      queueIndex = -1;
      len2 = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout2);
  }
  process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        args[i2 - 1] = arguments[i2];
      }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
      runTimeout(drainQueue);
    }
  };
  function Item(fun, array) {
    this.fun = fun;
    this.array = array;
  }
  Item.prototype.run = function() {
    this.fun.apply(null, this.array);
  };
  process.title = "browser";
  process.browser = true;
  process.env = {};
  process.argv = [];
  process.version = "";
  process.versions = {};
  function noop() {
  }
  process.on = noop;
  process.addListener = noop;
  process.once = noop;
  process.off = noop;
  process.removeListener = noop;
  process.removeAllListeners = noop;
  process.emit = noop;
  process.prependListener = noop;
  process.prependOnceListener = noop;
  process.listeners = function(name) {
    return [];
  };
  process.binding = function(name) {
    throw new Error("process.binding is not supported");
  };
  process.cwd = function() {
    return "/";
  };
  process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
  };
  process.umask = function() {
    return 0;
  };
  var browserExports = browser$1.exports;
  const process$1 = /* @__PURE__ */ getDefaultExportFromCjs(browserExports);
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.DEFERRED_PROMISE_DEBUG_TIMEOUT = exports2.isNode = void 0;
  exports2.isNode = !!(typeof process$1 !== "undefined" && process$1.version);
  exports2.DEFERRED_PROMISE_DEBUG_TIMEOUT = typeof process$1 !== "undefined" && typeof process$1.env["PUPPETEER_DEFERRED_PROMISE_DEBUG_TIMEOUT"] !== "undefined" ? Number(process$1.env["PUPPETEER_DEFERRED_PROMISE_DEBUG_TIMEOUT"]) : -1;
  const environment = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$0 = /* @__PURE__ */ getAugmentedNamespace(environment);
  exports2.formatArgs = formatArgs;
  exports2.save = save;
  exports2.load = load;
  exports2.useColors = useColors;
  exports2.storage = localstorage();
  exports2.destroy = /* @__PURE__ */ (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports2.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match) => {
      if (match === "%%") {
        return;
      }
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  exports2.log = console.debug || console.log || (() => {
  });
  function save(namespaces) {
    try {
      if (namespaces) {
        exports2.storage.setItem("debug", namespaces);
      } else {
        exports2.storage.removeItem("debug");
      }
    } catch (error) {
    }
  }
  function load() {
    let r;
    try {
      r = exports2.storage.getItem("debug");
    } catch (error) {
    }
    if (!r && typeof process$1 !== "undefined" && "env" in process$1) {
      r = process$1.env.DEBUG;
    }
    return r;
  }
  function localstorage() {
    try {
      return localStorage;
    } catch (error) {
    }
  }
  module.exports = require("./common")(exports2);
  const { formatters } = module.exports;
  formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
  const browser = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$1 = /* @__PURE__ */ getAugmentedNamespace(browser);
  var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding$1(result, mod, k);
    }
    __setModuleDefault$1(result, mod);
    return result;
  };
  Object.defineProperty(Debug, "__esModule", { value: true });
  Debug.getCapturedLogs = Debug.setLogCapture = Debug.debug = Debug.importDebug = void 0;
  const environment_js_1 = require$$0;
  let debugModule = null;
  async function importDebug() {
    if (!debugModule) {
      debugModule = (await Promise.resolve().then(() => __importStar$1(require$$1))).default;
    }
    return debugModule;
  }
  Debug.importDebug = importDebug;
  const debug = (prefix) => {
    if (environment_js_1.isNode) {
      return async (...logArgs) => {
        if (captureLogs) {
          capturedLogs.push(prefix + logArgs);
        }
        (await importDebug())(prefix)(logArgs);
      };
    }
    return (...logArgs) => {
      const debugLevel = globalThis.__PUPPETEER_DEBUG;
      if (!debugLevel) {
        return;
      }
      const everythingShouldBeLogged = debugLevel === "*";
      const prefixMatchesDebugLevel = everythingShouldBeLogged || /**
       * If the debug level is `foo*`, that means we match any prefix that
       * starts with `foo`. If the level is `foo`, we match only the prefix
       * `foo`.
       */
      (debugLevel.endsWith("*") ? prefix.startsWith(debugLevel) : prefix === debugLevel);
      if (!prefixMatchesDebugLevel) {
        return;
      }
      console.log(`${prefix}:`, ...logArgs);
    };
  };
  Debug.debug = debug;
  let capturedLogs = [];
  let captureLogs = false;
  function setLogCapture(value) {
    capturedLogs = [];
    captureLogs = value;
  }
  Debug.setLogCapture = setLogCapture;
  function getCapturedLogs() {
    return capturedLogs;
  }
  Debug.getCapturedLogs = getCapturedLogs;
  Object.defineProperty(Connection$1, "__esModule", { value: true });
  Connection$1.isTargetClosedError = Connection_2 = Connection$1.Connection = void 0;
  const CDPSession_js_1$8 = CDPSession$2;
  const CallbackRegistry_js_1 = CallbackRegistry$1;
  const Debug_js_1 = Debug;
  const Errors_js_1$4 = Errors;
  const EventEmitter_js_1$7 = EventEmitter$1;
  const ErrorLike_js_1$7 = ErrorLike;
  const CDPSession_js_2$2 = CDPSession;
  const debugProtocolSend = (0, Debug_js_1.debug)("puppeteer:protocol:SEND ►");
  const debugProtocolReceive = (0, Debug_js_1.debug)("puppeteer:protocol:RECV ◀");
  class Connection extends EventEmitter_js_1$7.EventEmitter {
    constructor(url, transport, delay = 0, timeout2) {
      super();
      __privateAdd(this, _onClose);
      __privateAdd(this, _url, void 0);
      __privateAdd(this, _transport, void 0);
      __privateAdd(this, _delay, void 0);
      __privateAdd(this, _timeout, void 0);
      __privateAdd(this, _sessions, /* @__PURE__ */ new Map());
      __privateAdd(this, _closed, false);
      __privateAdd(this, _manuallyAttached, /* @__PURE__ */ new Set());
      __privateAdd(this, _callbacks3, new CallbackRegistry_js_1.CallbackRegistry());
      __privateSet(this, _url, url);
      __privateSet(this, _delay, delay);
      __privateSet(this, _timeout, timeout2 ?? 18e4);
      __privateSet(this, _transport, transport);
      __privateGet(this, _transport).onmessage = this.onMessage.bind(this);
      __privateGet(this, _transport).onclose = __privateMethod(this, _onClose, onClose_fn).bind(this);
    }
    static fromSession(session) {
      return session.connection();
    }
    get timeout() {
      return __privateGet(this, _timeout);
    }
    /**
     * @internal
     */
    get _closed() {
      return __privateGet(this, _closed);
    }
    /**
     * @internal
     */
    get _sessions() {
      return __privateGet(this, _sessions);
    }
    /**
     * @param sessionId - The session id
     * @returns The current CDP session if it exists
     */
    session(sessionId) {
      return __privateGet(this, _sessions).get(sessionId) || null;
    }
    url() {
      return __privateGet(this, _url);
    }
    send(method, ...paramArgs) {
      const params = paramArgs.length ? paramArgs[0] : void 0;
      return this._rawSend(__privateGet(this, _callbacks3), method, params);
    }
    /**
     * @internal
     */
    _rawSend(callbacks, method, params, sessionId) {
      return callbacks.create(method, __privateGet(this, _timeout), (id) => {
        const stringifiedMessage = JSON.stringify({
          method,
          params,
          id,
          sessionId
        });
        debugProtocolSend(stringifiedMessage);
        __privateGet(this, _transport).send(stringifiedMessage);
      });
    }
    /**
     * @internal
     */
    async closeBrowser() {
      await this.send("Browser.close");
    }
    /**
     * @internal
     */
    async onMessage(message) {
      if (__privateGet(this, _delay)) {
        await new Promise((r) => {
          return setTimeout(r, __privateGet(this, _delay));
        });
      }
      debugProtocolReceive(message);
      const object = JSON.parse(message);
      if (object.method === "Target.attachedToTarget") {
        const sessionId = object.params.sessionId;
        const session = new CDPSession_js_2$2.CdpCDPSession(this, object.params.targetInfo.type, sessionId, object.sessionId);
        __privateGet(this, _sessions).set(sessionId, session);
        this.emit(CDPSession_js_1$8.CDPSessionEvent.SessionAttached, session);
        const parentSession = __privateGet(this, _sessions).get(object.sessionId);
        if (parentSession) {
          parentSession.emit(CDPSession_js_1$8.CDPSessionEvent.SessionAttached, session);
        }
      } else if (object.method === "Target.detachedFromTarget") {
        const session = __privateGet(this, _sessions).get(object.params.sessionId);
        if (session) {
          session._onClosed();
          __privateGet(this, _sessions).delete(object.params.sessionId);
          this.emit(CDPSession_js_1$8.CDPSessionEvent.SessionDetached, session);
          const parentSession = __privateGet(this, _sessions).get(object.sessionId);
          if (parentSession) {
            parentSession.emit(CDPSession_js_1$8.CDPSessionEvent.SessionDetached, session);
          }
        }
      }
      if (object.sessionId) {
        const session = __privateGet(this, _sessions).get(object.sessionId);
        if (session) {
          session._onMessage(object);
        }
      } else if (object.id) {
        if (object.error) {
          __privateGet(this, _callbacks3).reject(object.id, (0, ErrorLike_js_1$7.createProtocolErrorMessage)(object), object.error.message);
        } else {
          __privateGet(this, _callbacks3).resolve(object.id, object.result);
        }
      } else {
        this.emit(object.method, object.params);
      }
    }
    dispose() {
      __privateMethod(this, _onClose, onClose_fn).call(this);
      __privateGet(this, _transport).close();
    }
    /**
     * @internal
     */
    isAutoAttached(targetId) {
      return !__privateGet(this, _manuallyAttached).has(targetId);
    }
    /**
     * @internal
     */
    async _createSession(targetInfo, isAutoAttachEmulated = true) {
      if (!isAutoAttachEmulated) {
        __privateGet(this, _manuallyAttached).add(targetInfo.targetId);
      }
      const { sessionId } = await this.send("Target.attachToTarget", {
        targetId: targetInfo.targetId,
        flatten: true
      });
      __privateGet(this, _manuallyAttached).delete(targetInfo.targetId);
      const session = __privateGet(this, _sessions).get(sessionId);
      if (!session) {
        throw new Error("CDPSession creation failed.");
      }
      return session;
    }
    /**
     * @param targetInfo - The target info
     * @returns The CDP session that is created
     */
    async createSession(targetInfo) {
      return await this._createSession(targetInfo, false);
    }
  }
  _url = new WeakMap();
  _transport = new WeakMap();
  _delay = new WeakMap();
  _timeout = new WeakMap();
  _sessions = new WeakMap();
  _closed = new WeakMap();
  _manuallyAttached = new WeakMap();
  _callbacks3 = new WeakMap();
  _onClose = new WeakSet();
  onClose_fn = function() {
    if (__privateGet(this, _closed)) {
      return;
    }
    __privateSet(this, _closed, true);
    __privateGet(this, _transport).onmessage = void 0;
    __privateGet(this, _transport).onclose = void 0;
    __privateGet(this, _callbacks3).clear();
    for (const session of __privateGet(this, _sessions).values()) {
      session._onClosed();
    }
    __privateGet(this, _sessions).clear();
    this.emit(CDPSession_js_1$8.CDPSessionEvent.Disconnected, void 0);
  };
  var Connection_2 = Connection$1.Connection = Connection;
  function isTargetClosedError(error) {
    return error instanceof Errors_js_1$4.TargetCloseError;
  }
  Connection$1.isTargetClosedError = isTargetClosedError;
  var Coverage$1 = {};
  Object.defineProperty(Coverage$1, "__esModule", { value: true });
  Coverage$1.CSSCoverage = Coverage$1.JSCoverage = Coverage$1.Coverage = void 0;
  const EventEmitter_js_1$6 = EventEmitter$1;
  const util_js_1$f = require$$2$1;
  const assert_js_1$g = assert$1;
  const disposable_js_1$8 = disposable;
  class Coverage {
    constructor(client) {
      __privateAdd(this, _jsCoverage, void 0);
      __privateAdd(this, _cssCoverage, void 0);
      __privateSet(this, _jsCoverage, new JSCoverage(client));
      __privateSet(this, _cssCoverage, new CSSCoverage(client));
    }
    /**
     * @internal
     */
    updateClient(client) {
      __privateGet(this, _jsCoverage).updateClient(client);
      __privateGet(this, _cssCoverage).updateClient(client);
    }
    /**
     * @param options - Set of configurable options for coverage defaults to
     * `resetOnNavigation : true, reportAnonymousScripts : false,`
     * `includeRawScriptCoverage : false, useBlockCoverage : true`
     * @returns Promise that resolves when coverage is started.
     *
     * @remarks
     * Anonymous scripts are ones that don't have an associated url. These are
     * scripts that are dynamically created on the page using `eval` or
     * `new Function`. If `reportAnonymousScripts` is set to `true`, anonymous
     * scripts URL will start with `debugger://VM` (unless a magic //# sourceURL
     * comment is present, in which case that will the be URL).
     */
    async startJSCoverage(options = {}) {
      return await __privateGet(this, _jsCoverage).start(options);
    }
    /**
     * Promise that resolves to the array of coverage reports for
     * all scripts.
     *
     * @remarks
     * JavaScript Coverage doesn't include anonymous scripts by default.
     * However, scripts with sourceURLs are reported.
     */
    async stopJSCoverage() {
      return await __privateGet(this, _jsCoverage).stop();
    }
    /**
     * @param options - Set of configurable options for coverage, defaults to
     * `resetOnNavigation : true`
     * @returns Promise that resolves when coverage is started.
     */
    async startCSSCoverage(options = {}) {
      return await __privateGet(this, _cssCoverage).start(options);
    }
    /**
     * Promise that resolves to the array of coverage reports
     * for all stylesheets.
     *
     * @remarks
     * CSS Coverage doesn't include dynamically injected style tags
     * without sourceURLs.
     */
    async stopCSSCoverage() {
      return await __privateGet(this, _cssCoverage).stop();
    }
  }
  _jsCoverage = new WeakMap();
  _cssCoverage = new WeakMap();
  Coverage$1.Coverage = Coverage;
  class JSCoverage {
    constructor(client) {
      __privateAdd(this, _onExecutionContextsCleared);
      __privateAdd(this, _onScriptParsed);
      __privateAdd(this, _client2, void 0);
      __privateAdd(this, _enabled, false);
      __privateAdd(this, _scriptURLs, /* @__PURE__ */ new Map());
      __privateAdd(this, _scriptSources, /* @__PURE__ */ new Map());
      __privateAdd(this, _subscriptions, void 0);
      __privateAdd(this, _resetOnNavigation, false);
      __privateAdd(this, _reportAnonymousScripts, false);
      __privateAdd(this, _includeRawScriptCoverage, false);
      __privateSet(this, _client2, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      __privateSet(this, _client2, client);
    }
    async start(options = {}) {
      (0, assert_js_1$g.assert)(!__privateGet(this, _enabled), "JSCoverage is already enabled");
      const { resetOnNavigation = true, reportAnonymousScripts = false, includeRawScriptCoverage = false, useBlockCoverage = true } = options;
      __privateSet(this, _resetOnNavigation, resetOnNavigation);
      __privateSet(this, _reportAnonymousScripts, reportAnonymousScripts);
      __privateSet(this, _includeRawScriptCoverage, includeRawScriptCoverage);
      __privateSet(this, _enabled, true);
      __privateGet(this, _scriptURLs).clear();
      __privateGet(this, _scriptSources).clear();
      __privateSet(this, _subscriptions, new disposable_js_1$8.DisposableStack());
      __privateGet(this, _subscriptions).use(new EventEmitter_js_1$6.EventSubscription(__privateGet(this, _client2), "Debugger.scriptParsed", __privateMethod(this, _onScriptParsed, onScriptParsed_fn).bind(this)));
      __privateGet(this, _subscriptions).use(new EventEmitter_js_1$6.EventSubscription(__privateGet(this, _client2), "Runtime.executionContextsCleared", __privateMethod(this, _onExecutionContextsCleared, onExecutionContextsCleared_fn).bind(this)));
      await Promise.all([
        __privateGet(this, _client2).send("Profiler.enable"),
        __privateGet(this, _client2).send("Profiler.startPreciseCoverage", {
          callCount: __privateGet(this, _includeRawScriptCoverage),
          detailed: useBlockCoverage
        }),
        __privateGet(this, _client2).send("Debugger.enable"),
        __privateGet(this, _client2).send("Debugger.setSkipAllPauses", { skip: true })
      ]);
    }
    async stop() {
      var _a2;
      (0, assert_js_1$g.assert)(__privateGet(this, _enabled), "JSCoverage is not enabled");
      __privateSet(this, _enabled, false);
      const result = await Promise.all([
        __privateGet(this, _client2).send("Profiler.takePreciseCoverage"),
        __privateGet(this, _client2).send("Profiler.stopPreciseCoverage"),
        __privateGet(this, _client2).send("Profiler.disable"),
        __privateGet(this, _client2).send("Debugger.disable")
      ]);
      (_a2 = __privateGet(this, _subscriptions)) == null ? void 0 : _a2.dispose();
      const coverage = [];
      const profileResponse = result[0];
      for (const entry of profileResponse.result) {
        let url = __privateGet(this, _scriptURLs).get(entry.scriptId);
        if (!url && __privateGet(this, _reportAnonymousScripts)) {
          url = "debugger://VM" + entry.scriptId;
        }
        const text = __privateGet(this, _scriptSources).get(entry.scriptId);
        if (text === void 0 || url === void 0) {
          continue;
        }
        const flattenRanges = [];
        for (const func of entry.functions) {
          flattenRanges.push(...func.ranges);
        }
        const ranges = convertToDisjointRanges(flattenRanges);
        if (!__privateGet(this, _includeRawScriptCoverage)) {
          coverage.push({ url, ranges, text });
        } else {
          coverage.push({ url, ranges, text, rawScriptCoverage: entry });
        }
      }
      return coverage;
    }
  }
  _client2 = new WeakMap();
  _enabled = new WeakMap();
  _scriptURLs = new WeakMap();
  _scriptSources = new WeakMap();
  _subscriptions = new WeakMap();
  _resetOnNavigation = new WeakMap();
  _reportAnonymousScripts = new WeakMap();
  _includeRawScriptCoverage = new WeakMap();
  _onExecutionContextsCleared = new WeakSet();
  onExecutionContextsCleared_fn = function() {
    if (!__privateGet(this, _resetOnNavigation)) {
      return;
    }
    __privateGet(this, _scriptURLs).clear();
    __privateGet(this, _scriptSources).clear();
  };
  _onScriptParsed = new WeakSet();
  onScriptParsed_fn = async function(event) {
    if (util_js_1$f.PuppeteerURL.isPuppeteerURL(event.url)) {
      return;
    }
    if (!event.url && !__privateGet(this, _reportAnonymousScripts)) {
      return;
    }
    try {
      const response = await __privateGet(this, _client2).send("Debugger.getScriptSource", {
        scriptId: event.scriptId
      });
      __privateGet(this, _scriptURLs).set(event.scriptId, event.url);
      __privateGet(this, _scriptSources).set(event.scriptId, response.scriptSource);
    } catch (error) {
      (0, util_js_1$f.debugError)(error);
    }
  };
  Coverage$1.JSCoverage = JSCoverage;
  class CSSCoverage {
    constructor(client) {
      __privateAdd(this, _onExecutionContextsCleared2);
      __privateAdd(this, _onStyleSheet);
      __privateAdd(this, _client3, void 0);
      __privateAdd(this, _enabled2, false);
      __privateAdd(this, _stylesheetURLs, /* @__PURE__ */ new Map());
      __privateAdd(this, _stylesheetSources, /* @__PURE__ */ new Map());
      __privateAdd(this, _eventListeners, void 0);
      __privateAdd(this, _resetOnNavigation2, false);
      __privateSet(this, _client3, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      __privateSet(this, _client3, client);
    }
    async start(options = {}) {
      (0, assert_js_1$g.assert)(!__privateGet(this, _enabled2), "CSSCoverage is already enabled");
      const { resetOnNavigation = true } = options;
      __privateSet(this, _resetOnNavigation2, resetOnNavigation);
      __privateSet(this, _enabled2, true);
      __privateGet(this, _stylesheetURLs).clear();
      __privateGet(this, _stylesheetSources).clear();
      __privateSet(this, _eventListeners, new disposable_js_1$8.DisposableStack());
      __privateGet(this, _eventListeners).use(new EventEmitter_js_1$6.EventSubscription(__privateGet(this, _client3), "CSS.styleSheetAdded", __privateMethod(this, _onStyleSheet, onStyleSheet_fn).bind(this)));
      __privateGet(this, _eventListeners).use(new EventEmitter_js_1$6.EventSubscription(__privateGet(this, _client3), "Runtime.executionContextsCleared", __privateMethod(this, _onExecutionContextsCleared2, onExecutionContextsCleared_fn2).bind(this)));
      await Promise.all([
        __privateGet(this, _client3).send("DOM.enable"),
        __privateGet(this, _client3).send("CSS.enable"),
        __privateGet(this, _client3).send("CSS.startRuleUsageTracking")
      ]);
    }
    async stop() {
      var _a2;
      (0, assert_js_1$g.assert)(__privateGet(this, _enabled2), "CSSCoverage is not enabled");
      __privateSet(this, _enabled2, false);
      const ruleTrackingResponse = await __privateGet(this, _client3).send("CSS.stopRuleUsageTracking");
      await Promise.all([
        __privateGet(this, _client3).send("CSS.disable"),
        __privateGet(this, _client3).send("DOM.disable")
      ]);
      (_a2 = __privateGet(this, _eventListeners)) == null ? void 0 : _a2.dispose();
      const styleSheetIdToCoverage = /* @__PURE__ */ new Map();
      for (const entry of ruleTrackingResponse.ruleUsage) {
        let ranges = styleSheetIdToCoverage.get(entry.styleSheetId);
        if (!ranges) {
          ranges = [];
          styleSheetIdToCoverage.set(entry.styleSheetId, ranges);
        }
        ranges.push({
          startOffset: entry.startOffset,
          endOffset: entry.endOffset,
          count: entry.used ? 1 : 0
        });
      }
      const coverage = [];
      for (const styleSheetId of __privateGet(this, _stylesheetURLs).keys()) {
        const url = __privateGet(this, _stylesheetURLs).get(styleSheetId);
        (0, assert_js_1$g.assert)(typeof url !== "undefined", `Stylesheet URL is undefined (styleSheetId=${styleSheetId})`);
        const text = __privateGet(this, _stylesheetSources).get(styleSheetId);
        (0, assert_js_1$g.assert)(typeof text !== "undefined", `Stylesheet text is undefined (styleSheetId=${styleSheetId})`);
        const ranges = convertToDisjointRanges(styleSheetIdToCoverage.get(styleSheetId) || []);
        coverage.push({ url, ranges, text });
      }
      return coverage;
    }
  }
  _client3 = new WeakMap();
  _enabled2 = new WeakMap();
  _stylesheetURLs = new WeakMap();
  _stylesheetSources = new WeakMap();
  _eventListeners = new WeakMap();
  _resetOnNavigation2 = new WeakMap();
  _onExecutionContextsCleared2 = new WeakSet();
  onExecutionContextsCleared_fn2 = function() {
    if (!__privateGet(this, _resetOnNavigation2)) {
      return;
    }
    __privateGet(this, _stylesheetURLs).clear();
    __privateGet(this, _stylesheetSources).clear();
  };
  _onStyleSheet = new WeakSet();
  onStyleSheet_fn = async function(event) {
    const header = event.header;
    if (!header.sourceURL) {
      return;
    }
    try {
      const response = await __privateGet(this, _client3).send("CSS.getStyleSheetText", {
        styleSheetId: header.styleSheetId
      });
      __privateGet(this, _stylesheetURLs).set(header.styleSheetId, header.sourceURL);
      __privateGet(this, _stylesheetSources).set(header.styleSheetId, response.text);
    } catch (error) {
      (0, util_js_1$f.debugError)(error);
    }
  };
  Coverage$1.CSSCoverage = CSSCoverage;
  function convertToDisjointRanges(nestedRanges) {
    const points = [];
    for (const range of nestedRanges) {
      points.push({ offset: range.startOffset, type: 0, range });
      points.push({ offset: range.endOffset, type: 1, range });
    }
    points.sort((a, b) => {
      if (a.offset !== b.offset) {
        return a.offset - b.offset;
      }
      if (a.type !== b.type) {
        return b.type - a.type;
      }
      const aLength = a.range.endOffset - a.range.startOffset;
      const bLength = b.range.endOffset - b.range.startOffset;
      if (a.type === 0) {
        return bLength - aLength;
      }
      return aLength - bLength;
    });
    const hitCountStack = [];
    const results = [];
    let lastOffset = 0;
    for (const point of points) {
      if (hitCountStack.length && lastOffset < point.offset && hitCountStack[hitCountStack.length - 1] > 0) {
        const lastResult = results[results.length - 1];
        if (lastResult && lastResult.end === lastOffset) {
          lastResult.end = point.offset;
        } else {
          results.push({ start: lastOffset, end: point.offset });
        }
      }
      lastOffset = point.offset;
      if (point.type === 0) {
        hitCountStack.push(point.range.count);
      } else {
        hitCountStack.pop();
      }
    }
    return results.filter((range) => {
      return range.end - range.start > 0;
    });
  }
  var Dialog$2 = {};
  var Dialog$1 = {};
  Object.defineProperty(Dialog$1, "__esModule", { value: true });
  Dialog$1.Dialog = void 0;
  const assert_js_1$f = assert$1;
  class Dialog {
    /**
     * @internal
     */
    constructor(type, message, defaultValue = "") {
      __privateAdd(this, _type3, void 0);
      __privateAdd(this, _message, void 0);
      __privateAdd(this, _defaultValue, void 0);
      __privateAdd(this, _handled2, false);
      __privateSet(this, _type3, type);
      __privateSet(this, _message, message);
      __privateSet(this, _defaultValue, defaultValue);
    }
    /**
     * The type of the dialog.
     */
    type() {
      return __privateGet(this, _type3);
    }
    /**
     * The message displayed in the dialog.
     */
    message() {
      return __privateGet(this, _message);
    }
    /**
     * The default value of the prompt, or an empty string if the dialog
     * is not a `prompt`.
     */
    defaultValue() {
      return __privateGet(this, _defaultValue);
    }
    /**
     * A promise that resolves when the dialog has been accepted.
     *
     * @param promptText - optional text that will be entered in the dialog
     * prompt. Has no effect if the dialog's type is not `prompt`.
     *
     */
    async accept(promptText) {
      (0, assert_js_1$f.assert)(!__privateGet(this, _handled2), "Cannot accept dialog which is already handled!");
      __privateSet(this, _handled2, true);
      await this.sendCommand({
        accept: true,
        text: promptText
      });
    }
    /**
     * A promise which will resolve once the dialog has been dismissed
     */
    async dismiss() {
      (0, assert_js_1$f.assert)(!__privateGet(this, _handled2), "Cannot dismiss dialog which is already handled!");
      __privateSet(this, _handled2, true);
      await this.sendCommand({
        accept: false
      });
    }
  }
  _type3 = new WeakMap();
  _message = new WeakMap();
  _defaultValue = new WeakMap();
  _handled2 = new WeakMap();
  Dialog$1.Dialog = Dialog;
  Object.defineProperty(Dialog$2, "__esModule", { value: true });
  Dialog$2.CdpDialog = void 0;
  const Dialog_js_1$1 = Dialog$1;
  class CdpDialog extends Dialog_js_1$1.Dialog {
    constructor(client, type, message, defaultValue = "") {
      super(type, message, defaultValue);
      __privateAdd(this, _client4, void 0);
      __privateSet(this, _client4, client);
    }
    async sendCommand(options) {
      await __privateGet(this, _client4).send("Page.handleJavaScriptDialog", {
        accept: options.accept,
        promptText: options.text
      });
    }
  }
  _client4 = new WeakMap();
  Dialog$2.CdpDialog = CdpDialog;
  var EmulationManager$1 = {};
  var __runInitializers$3 = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$3 = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __setFunctionName = commonjsGlobal && commonjsGlobal.__setFunctionName || function(f, name, prefix) {
    if (typeof name === "symbol")
      name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
  };
  Object.defineProperty(EmulationManager$1, "__esModule", { value: true });
  EmulationManager$1.EmulationManager = EmulationManager$1.EmulatedState = void 0;
  const CDPSession_js_1$7 = CDPSession$2;
  const util_js_1$e = require$$2$1;
  const assert_js_1$e = assert$1;
  const decorators_js_1$2 = decorators;
  const ErrorLike_js_1$6 = ErrorLike;
  class EmulatedState {
    constructor(initialState, clientProvider, updater) {
      __privateAdd(this, _state, void 0);
      __privateAdd(this, _clientProvider, void 0);
      __privateAdd(this, _updater, void 0);
      __privateSet(this, _state, initialState);
      __privateSet(this, _clientProvider, clientProvider);
      __privateSet(this, _updater, updater);
      __privateGet(this, _clientProvider).registerState(this);
    }
    async setState(state) {
      __privateSet(this, _state, state);
      await this.sync();
    }
    get state() {
      return __privateGet(this, _state);
    }
    async sync() {
      await Promise.all(__privateGet(this, _clientProvider).clients().map((client) => {
        return __privateGet(this, _updater).call(this, client, __privateGet(this, _state));
      }));
    }
  }
  _state = new WeakMap();
  _clientProvider = new WeakMap();
  _updater = new WeakMap();
  EmulationManager$1.EmulatedState = EmulatedState;
  let EmulationManager = (() => {
    var _client15, _emulatingMobile, _hasTouch, _states, _viewportState, _idleOverridesState, _timezoneState, _visionDeficiencyState, _cpuThrottlingState, _mediaFeaturesState, _mediaTypeState, _geoLocationState, _defaultBackgroundColorState, _javascriptEnabledState, _secondaryClients, _applyViewport, applyViewport_get, _emulateIdleState, emulateIdleState_get, _emulateTimezone, emulateTimezone_get, _emulateVisionDeficiency, emulateVisionDeficiency_get, _emulateCpuThrottling, emulateCpuThrottling_get, _emulateMediaFeatures, emulateMediaFeatures_get, _emulateMediaType, emulateMediaType_get, _setGeolocation, setGeolocation_get, _setDefaultBackgroundColor, setDefaultBackgroundColor_get, _setJavaScriptEnabled, setJavaScriptEnabled_get, _a2;
    let _instanceExtraInitializers = [];
    let _private_applyViewport_decorators;
    let _private_applyViewport_descriptor;
    let _private_emulateIdleState_decorators;
    let _private_emulateIdleState_descriptor;
    let _private_emulateTimezone_decorators;
    let _private_emulateTimezone_descriptor;
    let _private_emulateVisionDeficiency_decorators;
    let _private_emulateVisionDeficiency_descriptor;
    let _private_emulateCpuThrottling_decorators;
    let _private_emulateCpuThrottling_descriptor;
    let _private_emulateMediaFeatures_decorators;
    let _private_emulateMediaFeatures_descriptor;
    let _private_emulateMediaType_decorators;
    let _private_emulateMediaType_descriptor;
    let _private_setGeolocation_decorators;
    let _private_setGeolocation_descriptor;
    let _private_setDefaultBackgroundColor_decorators;
    let _private_setDefaultBackgroundColor_descriptor;
    let _private_setJavaScriptEnabled_decorators;
    let _private_setJavaScriptEnabled_descriptor;
    return _a2 = class {
      constructor(client) {
        __privateAdd(this, _applyViewport);
        __privateAdd(this, _emulateIdleState);
        __privateAdd(this, _emulateTimezone);
        __privateAdd(this, _emulateVisionDeficiency);
        __privateAdd(this, _emulateCpuThrottling);
        __privateAdd(this, _emulateMediaFeatures);
        __privateAdd(this, _emulateMediaType);
        __privateAdd(this, _setGeolocation);
        __privateAdd(this, _setDefaultBackgroundColor);
        __privateAdd(this, _setJavaScriptEnabled);
        __privateAdd(this, _client15, (__runInitializers$3(this, _instanceExtraInitializers), void 0));
        __privateAdd(this, _emulatingMobile, false);
        __privateAdd(this, _hasTouch, false);
        __privateAdd(this, _states, []);
        __privateAdd(this, _viewportState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _applyViewport, applyViewport_get)));
        __privateAdd(this, _idleOverridesState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _emulateIdleState, emulateIdleState_get)));
        __privateAdd(this, _timezoneState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _emulateTimezone, emulateTimezone_get)));
        __privateAdd(this, _visionDeficiencyState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _emulateVisionDeficiency, emulateVisionDeficiency_get)));
        __privateAdd(this, _cpuThrottlingState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _emulateCpuThrottling, emulateCpuThrottling_get)));
        __privateAdd(this, _mediaFeaturesState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _emulateMediaFeatures, emulateMediaFeatures_get)));
        __privateAdd(this, _mediaTypeState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _emulateMediaType, emulateMediaType_get)));
        __privateAdd(this, _geoLocationState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _setGeolocation, setGeolocation_get)));
        __privateAdd(this, _defaultBackgroundColorState, new EmulatedState({
          active: false
        }, this, __privateGet(this, _setDefaultBackgroundColor, setDefaultBackgroundColor_get)));
        __privateAdd(this, _javascriptEnabledState, new EmulatedState({
          javaScriptEnabled: true,
          active: false
        }, this, __privateGet(this, _setJavaScriptEnabled, setJavaScriptEnabled_get)));
        __privateAdd(this, _secondaryClients, /* @__PURE__ */ new Set());
        __privateSet(this, _client15, client);
      }
      updateClient(client) {
        __privateSet(this, _client15, client);
        __privateGet(this, _secondaryClients).delete(client);
      }
      registerState(state) {
        __privateGet(this, _states).push(state);
      }
      clients() {
        return [__privateGet(this, _client15), ...Array.from(__privateGet(this, _secondaryClients))];
      }
      async registerSpeculativeSession(client) {
        __privateGet(this, _secondaryClients).add(client);
        client.once(CDPSession_js_1$7.CDPSessionEvent.Disconnected, () => {
          __privateGet(this, _secondaryClients).delete(client);
        });
        void Promise.all(__privateGet(this, _states).map((s) => {
          return s.sync().catch(util_js_1$e.debugError);
        }));
      }
      get javascriptEnabled() {
        return __privateGet(this, _javascriptEnabledState).state.javaScriptEnabled;
      }
      async emulateViewport(viewport) {
        await __privateGet(this, _viewportState).setState({
          viewport,
          active: true
        });
        const mobile = viewport.isMobile || false;
        const hasTouch = viewport.hasTouch || false;
        const reloadNeeded = __privateGet(this, _emulatingMobile) !== mobile || __privateGet(this, _hasTouch) !== hasTouch;
        __privateSet(this, _emulatingMobile, mobile);
        __privateSet(this, _hasTouch, hasTouch);
        return reloadNeeded;
      }
      async emulateIdleState(overrides) {
        await __privateGet(this, _idleOverridesState).setState({
          active: true,
          overrides
        });
      }
      async emulateTimezone(timezoneId) {
        await __privateGet(this, _timezoneState).setState({
          timezoneId,
          active: true
        });
      }
      async emulateVisionDeficiency(type) {
        const visionDeficiencies = /* @__PURE__ */ new Set([
          "none",
          "achromatopsia",
          "blurredVision",
          "deuteranopia",
          "protanopia",
          "tritanopia"
        ]);
        (0, assert_js_1$e.assert)(!type || visionDeficiencies.has(type), `Unsupported vision deficiency: ${type}`);
        await __privateGet(this, _visionDeficiencyState).setState({
          active: true,
          visionDeficiency: type
        });
      }
      async emulateCPUThrottling(factor) {
        (0, assert_js_1$e.assert)(factor === null || factor >= 1, "Throttling rate should be greater or equal to 1");
        await __privateGet(this, _cpuThrottlingState).setState({
          active: true,
          factor: factor ?? void 0
        });
      }
      async emulateMediaFeatures(features) {
        if (Array.isArray(features)) {
          for (const mediaFeature of features) {
            const name = mediaFeature.name;
            (0, assert_js_1$e.assert)(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(name), "Unsupported media feature: " + name);
          }
        }
        await __privateGet(this, _mediaFeaturesState).setState({
          active: true,
          mediaFeatures: features
        });
      }
      async emulateMediaType(type) {
        (0, assert_js_1$e.assert)(type === "screen" || type === "print" || (type ?? void 0) === void 0, "Unsupported media type: " + type);
        await __privateGet(this, _mediaTypeState).setState({
          type,
          active: true
        });
      }
      async setGeolocation(options) {
        const { longitude, latitude, accuracy = 0 } = options;
        if (longitude < -180 || longitude > 180) {
          throw new Error(`Invalid longitude "${longitude}": precondition -180 <= LONGITUDE <= 180 failed.`);
        }
        if (latitude < -90 || latitude > 90) {
          throw new Error(`Invalid latitude "${latitude}": precondition -90 <= LATITUDE <= 90 failed.`);
        }
        if (accuracy < 0) {
          throw new Error(`Invalid accuracy "${accuracy}": precondition 0 <= ACCURACY failed.`);
        }
        await __privateGet(this, _geoLocationState).setState({
          active: true,
          geoLocation: {
            longitude,
            latitude,
            accuracy
          }
        });
      }
      /**
       * Resets default white background
       */
      async resetDefaultBackgroundColor() {
        await __privateGet(this, _defaultBackgroundColorState).setState({
          active: true,
          color: void 0
        });
      }
      /**
       * Hides default white background
       */
      async setTransparentBackgroundColor() {
        await __privateGet(this, _defaultBackgroundColorState).setState({
          active: true,
          color: { r: 0, g: 0, b: 0, a: 0 }
        });
      }
      async setJavaScriptEnabled(enabled) {
        await __privateGet(this, _javascriptEnabledState).setState({
          active: true,
          javaScriptEnabled: enabled
        });
      }
    }, _client15 = new WeakMap(), _emulatingMobile = new WeakMap(), _hasTouch = new WeakMap(), _states = new WeakMap(), _viewportState = new WeakMap(), _idleOverridesState = new WeakMap(), _timezoneState = new WeakMap(), _visionDeficiencyState = new WeakMap(), _cpuThrottlingState = new WeakMap(), _mediaFeaturesState = new WeakMap(), _mediaTypeState = new WeakMap(), _geoLocationState = new WeakMap(), _defaultBackgroundColorState = new WeakMap(), _javascriptEnabledState = new WeakMap(), _secondaryClients = new WeakMap(), _applyViewport = new WeakSet(), applyViewport_get = function() {
      return _private_applyViewport_descriptor.value;
    }, _emulateIdleState = new WeakSet(), emulateIdleState_get = function() {
      return _private_emulateIdleState_descriptor.value;
    }, _emulateTimezone = new WeakSet(), emulateTimezone_get = function() {
      return _private_emulateTimezone_descriptor.value;
    }, _emulateVisionDeficiency = new WeakSet(), emulateVisionDeficiency_get = function() {
      return _private_emulateVisionDeficiency_descriptor.value;
    }, _emulateCpuThrottling = new WeakSet(), emulateCpuThrottling_get = function() {
      return _private_emulateCpuThrottling_descriptor.value;
    }, _emulateMediaFeatures = new WeakSet(), emulateMediaFeatures_get = function() {
      return _private_emulateMediaFeatures_descriptor.value;
    }, _emulateMediaType = new WeakSet(), emulateMediaType_get = function() {
      return _private_emulateMediaType_descriptor.value;
    }, _setGeolocation = new WeakSet(), setGeolocation_get = function() {
      return _private_setGeolocation_descriptor.value;
    }, _setDefaultBackgroundColor = new WeakSet(), setDefaultBackgroundColor_get = function() {
      return _private_setDefaultBackgroundColor_descriptor.value;
    }, _setJavaScriptEnabled = new WeakSet(), setJavaScriptEnabled_get = function() {
      return _private_setJavaScriptEnabled_descriptor.value;
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
      _private_applyViewport_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_emulateIdleState_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_emulateTimezone_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_emulateVisionDeficiency_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_emulateCpuThrottling_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_emulateMediaFeatures_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_emulateMediaType_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_setGeolocation_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_setDefaultBackgroundColor_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      _private_setJavaScriptEnabled_decorators = [decorators_js_1$2.invokeAtMostOnceForArguments];
      __esDecorate$3(_a2, _private_applyViewport_descriptor = { value: __setFunctionName(async function(client, viewportState) {
        if (!viewportState.viewport) {
          return;
        }
        const { viewport } = viewportState;
        const mobile = viewport.isMobile || false;
        const width = viewport.width;
        const height = viewport.height;
        const deviceScaleFactor = viewport.deviceScaleFactor ?? 1;
        const screenOrientation = viewport.isLandscape ? { angle: 90, type: "landscapePrimary" } : { angle: 0, type: "portraitPrimary" };
        const hasTouch = viewport.hasTouch || false;
        await Promise.all([
          client.send("Emulation.setDeviceMetricsOverride", {
            mobile,
            width,
            height,
            deviceScaleFactor,
            screenOrientation
          }),
          client.send("Emulation.setTouchEmulationEnabled", {
            enabled: hasTouch
          })
        ]);
      }, "#applyViewport") }, _private_applyViewport_decorators, { kind: "method", name: "#applyViewport", static: false, private: true, access: { has: (obj) => __privateIn(_applyViewport, obj), get: (obj) => __privateGet(obj, _applyViewport, applyViewport_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_emulateIdleState_descriptor = { value: __setFunctionName(async function(client, idleStateState) {
        if (!idleStateState.active) {
          return;
        }
        if (idleStateState.overrides) {
          await client.send("Emulation.setIdleOverride", {
            isUserActive: idleStateState.overrides.isUserActive,
            isScreenUnlocked: idleStateState.overrides.isScreenUnlocked
          });
        } else {
          await client.send("Emulation.clearIdleOverride");
        }
      }, "#emulateIdleState") }, _private_emulateIdleState_decorators, { kind: "method", name: "#emulateIdleState", static: false, private: true, access: { has: (obj) => __privateIn(_emulateIdleState, obj), get: (obj) => __privateGet(obj, _emulateIdleState, emulateIdleState_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_emulateTimezone_descriptor = { value: __setFunctionName(async function(client, timezoneState) {
        if (!timezoneState.active) {
          return;
        }
        try {
          await client.send("Emulation.setTimezoneOverride", {
            timezoneId: timezoneState.timezoneId || ""
          });
        } catch (error) {
          if ((0, ErrorLike_js_1$6.isErrorLike)(error) && error.message.includes("Invalid timezone")) {
            throw new Error(`Invalid timezone ID: ${timezoneState.timezoneId}`);
          }
          throw error;
        }
      }, "#emulateTimezone") }, _private_emulateTimezone_decorators, { kind: "method", name: "#emulateTimezone", static: false, private: true, access: { has: (obj) => __privateIn(_emulateTimezone, obj), get: (obj) => __privateGet(obj, _emulateTimezone, emulateTimezone_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_emulateVisionDeficiency_descriptor = { value: __setFunctionName(async function(client, visionDeficiency) {
        if (!visionDeficiency.active) {
          return;
        }
        await client.send("Emulation.setEmulatedVisionDeficiency", {
          type: visionDeficiency.visionDeficiency || "none"
        });
      }, "#emulateVisionDeficiency") }, _private_emulateVisionDeficiency_decorators, { kind: "method", name: "#emulateVisionDeficiency", static: false, private: true, access: { has: (obj) => __privateIn(_emulateVisionDeficiency, obj), get: (obj) => __privateGet(obj, _emulateVisionDeficiency, emulateVisionDeficiency_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_emulateCpuThrottling_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setCPUThrottlingRate", {
          rate: state.factor ?? 1
        });
      }, "#emulateCpuThrottling") }, _private_emulateCpuThrottling_decorators, { kind: "method", name: "#emulateCpuThrottling", static: false, private: true, access: { has: (obj) => __privateIn(_emulateCpuThrottling, obj), get: (obj) => __privateGet(obj, _emulateCpuThrottling, emulateCpuThrottling_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_emulateMediaFeatures_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setEmulatedMedia", {
          features: state.mediaFeatures
        });
      }, "#emulateMediaFeatures") }, _private_emulateMediaFeatures_decorators, { kind: "method", name: "#emulateMediaFeatures", static: false, private: true, access: { has: (obj) => __privateIn(_emulateMediaFeatures, obj), get: (obj) => __privateGet(obj, _emulateMediaFeatures, emulateMediaFeatures_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_emulateMediaType_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setEmulatedMedia", {
          media: state.type || ""
        });
      }, "#emulateMediaType") }, _private_emulateMediaType_decorators, { kind: "method", name: "#emulateMediaType", static: false, private: true, access: { has: (obj) => __privateIn(_emulateMediaType, obj), get: (obj) => __privateGet(obj, _emulateMediaType, emulateMediaType_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_setGeolocation_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setGeolocationOverride", state.geoLocation ? {
          longitude: state.geoLocation.longitude,
          latitude: state.geoLocation.latitude,
          accuracy: state.geoLocation.accuracy
        } : void 0);
      }, "#setGeolocation") }, _private_setGeolocation_decorators, { kind: "method", name: "#setGeolocation", static: false, private: true, access: { has: (obj) => __privateIn(_setGeolocation, obj), get: (obj) => __privateGet(obj, _setGeolocation, setGeolocation_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_setDefaultBackgroundColor_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setDefaultBackgroundColorOverride", {
          color: state.color
        });
      }, "#setDefaultBackgroundColor") }, _private_setDefaultBackgroundColor_decorators, { kind: "method", name: "#setDefaultBackgroundColor", static: false, private: true, access: { has: (obj) => __privateIn(_setDefaultBackgroundColor, obj), get: (obj) => __privateGet(obj, _setDefaultBackgroundColor, setDefaultBackgroundColor_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$3(_a2, _private_setJavaScriptEnabled_descriptor = { value: __setFunctionName(async function(client, state) {
        if (!state.active) {
          return;
        }
        await client.send("Emulation.setScriptExecutionDisabled", {
          value: !state.javaScriptEnabled
        });
      }, "#setJavaScriptEnabled") }, _private_setJavaScriptEnabled_decorators, { kind: "method", name: "#setJavaScriptEnabled", static: false, private: true, access: { has: (obj) => __privateIn(_setJavaScriptEnabled, obj), get: (obj) => __privateGet(obj, _setJavaScriptEnabled, setJavaScriptEnabled_get) }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })(), _a2;
  })();
  EmulationManager$1.EmulationManager = EmulationManager;
  var ExecutionContext$1 = {};
  var LazyArg$1 = {};
  Object.defineProperty(LazyArg$1, "__esModule", { value: true });
  LazyArg$1.LazyArg = void 0;
  const _LazyArg = class _LazyArg {
    constructor(get) {
      __privateAdd(this, _get, void 0);
      __privateSet(this, _get, get);
    }
    async get(context) {
      return await __privateGet(this, _get).call(this, context);
    }
  };
  _get = new WeakMap();
  __publicField(_LazyArg, "create", (get) => {
    return new _LazyArg(get);
  });
  let LazyArg = _LazyArg;
  LazyArg$1.LazyArg = LazyArg;
  var ScriptInjector$1 = {};
  var injected = {};
  Object.defineProperty(injected, "__esModule", { value: true });
  injected.source = void 0;
  injected.source = '"use strict";var C=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var se=Object.prototype.hasOwnProperty;var u=(t,e)=>{for(var n in e)C(t,n,{get:e[n],enumerable:!0})},ie=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of oe(e))!se.call(t,o)&&o!==n&&C(t,o,{get:()=>e[o],enumerable:!(r=ne(e,o))||r.enumerable});return t};var le=t=>ie(C({},"__esModule",{value:!0}),t);var Oe={};u(Oe,{default:()=>Re});module.exports=le(Oe);var T=class extends Error{constructor(e){super(e),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}},S=class extends T{},I=class extends T{#e;#t="";set code(e){this.#e=e}get code(){return this.#e}set originalMessage(e){this.#t=e}get originalMessage(){return this.#t}};var qe=Object.freeze({TimeoutError:S,ProtocolError:I});var f=class t{#e=!1;#t=!1;#n;#r=()=>{};#o=new Promise(e=>{this.#r=e});#s;#i;constructor(e){e&&e.timeout>0&&(this.#i=new S(e.message),this.#s=setTimeout(()=>{this.reject(this.#i)},e.timeout))}#l(e){clearTimeout(this.#s),this.#n=e,this.#r()}resolve(e){this.#t||this.#e||(this.#e=!0,this.#l(e))}reject(e){this.#t||this.#e||(this.#t=!0,this.#l(e))}resolved(){return this.#e}finished(){return this.#e||this.#t}value(){return this.#n}async valueOrThrow(){if(await this.#o,this.#t)throw this.#n;return this.#n}static create(e){return new t(e)}static async race(e){let n=new Set;try{let r=e.map(o=>o instanceof t?(o.#s&&n.add(o),o.valueOrThrow()):o);return await Promise.race(r)}finally{for(let r of n)r.reject(new Error("Timeout cleared"))}}};var X=new Map,G=t=>{let e=X.get(t);return e||(e=new Function(`return ${t}`)(),X.set(t,e),e)};var R={};u(R,{ariaQuerySelector:()=>ae,ariaQuerySelectorAll:()=>k});var ae=(t,e)=>window.__ariaQuerySelector(t,e),k=async function*(t,e){yield*await window.__ariaQuerySelectorAll(t,e)};var q={};u(q,{customQuerySelectors:()=>M});var O=class{#e=new Map;register(e,n){if(!n.queryOne&&n.queryAll){let r=n.queryAll;n.queryOne=(o,i)=>{for(let s of r(o,i))return s;return null}}else if(n.queryOne&&!n.queryAll){let r=n.queryOne;n.queryAll=(o,i)=>{let s=r(o,i);return s?[s]:[]}}else if(!n.queryOne||!n.queryAll)throw new Error("At least one query method must be defined.");this.#e.set(e,{querySelector:n.queryOne,querySelectorAll:n.queryAll})}unregister(e){this.#e.delete(e)}get(e){return this.#e.get(e)}clear(){this.#e.clear()}},M=new O;var D={};u(D,{pierceQuerySelector:()=>ce,pierceQuerySelectorAll:()=>ue});var ce=(t,e)=>{let n=null,r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&!n&&s.matches(e)&&(n=s)}while(!n&&i.nextNode())};return t instanceof Document&&(t=t.documentElement),r(t),n},ue=(t,e)=>{let n=[],r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&s.matches(e)&&n.push(s)}while(i.nextNode())};return t instanceof Document&&(t=t.documentElement),r(t),n};var m=(t,e)=>{if(!t)throw new Error(e)};var E=class{#e;#t;#n;#r;constructor(e,n){this.#e=e,this.#t=n}async start(){let e=this.#r=f.create(),n=await this.#e();if(n){e.resolve(n);return}this.#n=new MutationObserver(async()=>{let r=await this.#e();r&&(e.resolve(r),await this.stop())}),this.#n.observe(this.#t,{childList:!0,subtree:!0,attributes:!0})}async stop(){m(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped")),this.#n&&(this.#n.disconnect(),this.#n=void 0)}result(){return m(this.#r,"Polling never started."),this.#r.valueOrThrow()}},P=class{#e;#t;constructor(e){this.#e=e}async start(){let e=this.#t=f.create(),n=await this.#e();if(n){e.resolve(n);return}let r=async()=>{if(e.finished())return;let o=await this.#e();if(!o){window.requestAnimationFrame(r);return}e.resolve(o),await this.stop()};window.requestAnimationFrame(r)}async stop(){m(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped"))}result(){return m(this.#t,"Polling never started."),this.#t.valueOrThrow()}},x=class{#e;#t;#n;#r;constructor(e,n){this.#e=e,this.#t=n}async start(){let e=this.#r=f.create(),n=await this.#e();if(n){e.resolve(n);return}this.#n=setInterval(async()=>{let r=await this.#e();r&&(e.resolve(r),await this.stop())},this.#t)}async stop(){m(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped")),this.#n&&(clearInterval(this.#n),this.#n=void 0)}result(){return m(this.#r,"Polling never started."),this.#r.valueOrThrow()}};var W={};u(W,{pQuerySelector:()=>Ie,pQuerySelectorAll:()=>re});var c=class{static async*map(e,n){for await(let r of e)yield await n(r)}static async*flatMap(e,n){for await(let r of e)yield*n(r)}static async collect(e){let n=[];for await(let r of e)n.push(r);return n}static async first(e){for await(let n of e)return n}};var p={attribute:/\\[\\s*(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)\\s*(?:(?<operator>\\W?=)\\s*(?<value>.+?)\\s*(\\s(?<caseSensitive>[iIsS]))?\\s*)?\\]/gu,id:/#(?<name>[-\\w\\P{ASCII}]+)/gu,class:/\\.(?<name>[-\\w\\P{ASCII}]+)/gu,comma:/\\s*,\\s*/g,combinator:/\\s*[\\s>+~]\\s*/g,"pseudo-element":/::(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>¶*)\\))?/gu,"pseudo-class":/:(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>¶*)\\))?/gu,universal:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?\\*/gu,type:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)/gu},fe=new Set(["combinator","comma"]);var de=t=>{switch(t){case"pseudo-element":case"pseudo-class":return new RegExp(p[t].source.replace("(?<argument>\\xB6*)","(?<argument>.*)"),"gu");default:return p[t]}};function me(t,e){let n=0,r="";for(;e<t.length;e++){let o=t[e];switch(o){case"(":++n;break;case")":--n;break}if(r+=o,n===0)return r}return r}function he(t,e=p){if(!t)return[];let n=[t];for(let[o,i]of Object.entries(e))for(let s=0;s<n.length;s++){let l=n[s];if(typeof l!="string")continue;i.lastIndex=0;let a=i.exec(l);if(!a)continue;let h=a.index-1,d=[],H=a[0],B=l.slice(0,h+1);B&&d.push(B),d.push({...a.groups,type:o,content:H});let z=l.slice(h+H.length+1);z&&d.push(z),n.splice(s,1,...d)}let r=0;for(let o of n)switch(typeof o){case"string":throw new Error(`Unexpected sequence ${o} found at index ${r}`);case"object":r+=o.content.length,o.pos=[r-o.content.length,r],fe.has(o.type)&&(o.content=o.content.trim()||" ");break}return n}var pe=/([\'"])([^\\\\\\n]+?)\\1/g,ye=/\\\\./g;function K(t,e=p){if(t=t.trim(),t==="")return[];let n=[];t=t.replace(ye,(i,s)=>(n.push({value:i,offset:s}),"\\uE000".repeat(i.length))),t=t.replace(pe,(i,s,l,a)=>(n.push({value:i,offset:a}),`${s}${"\\uE001".repeat(l.length)}${s}`));{let i=0,s;for(;(s=t.indexOf("(",i))>-1;){let l=me(t,s);n.push({value:l,offset:s}),t=`${t.substring(0,s)}(${"\\xB6".repeat(l.length-2)})${t.substring(s+l.length)}`,i=s+l.length}}let r=he(t,e),o=new Set;for(let i of n.reverse())for(let s of r){let{offset:l,value:a}=i;if(!(s.pos[0]<=l&&l+a.length<=s.pos[1]))continue;let{content:h}=s,d=l-s.pos[0];s.content=h.slice(0,d)+a+h.slice(d+a.length),s.content!==h&&o.add(s)}for(let i of o){let s=de(i.type);if(!s)throw new Error(`Unknown token type: ${i.type}`);s.lastIndex=0;let l=s.exec(i.content);if(!l)throw new Error(`Unable to parse content for ${i.type}: ${i.content}`);Object.assign(i,l.groups)}return r}function*N(t,e){switch(t.type){case"list":for(let n of t.list)yield*N(n,t);break;case"complex":yield*N(t.left,t),yield*N(t.right,t);break;case"compound":yield*t.list.map(n=>[n,t]);break;default:yield[t,e]}}function y(t){let e;return Array.isArray(t)?e=t:e=[...N(t)].map(([n])=>n),e.map(n=>n.content).join("")}p.combinator=/\\s*(>>>>?|[\\s>+~])\\s*/g;var ge=/\\\\[\\s\\S]/g,we=t=>t.length<=1?t:((t[0]===\'"\'||t[0]==="\'")&&t.endsWith(t[0])&&(t=t.slice(1,-1)),t.replace(ge,e=>e[1]));function Y(t){let e=!0,n=K(t);if(n.length===0)return[[],e];let r=[],o=[r],i=[o],s=[];for(let l of n){switch(l.type){case"combinator":switch(l.content){case">>>":e=!1,s.length&&(r.push(y(s)),s.splice(0)),r=[],o.push(">>>"),o.push(r);continue;case">>>>":e=!1,s.length&&(r.push(y(s)),s.splice(0)),r=[],o.push(">>>>"),o.push(r);continue}break;case"pseudo-element":if(!l.name.startsWith("-p-"))break;e=!1,s.length&&(r.push(y(s)),s.splice(0)),r.push({name:l.name.slice(3),value:we(l.argument??"")});continue;case"comma":s.length&&(r.push(y(s)),s.splice(0)),r=[],o=[r],i.push(o);continue}s.push(l)}return s.length&&r.push(y(s)),[i,e]}var Q={};u(Q,{textQuerySelectorAll:()=>b});var Se=new Set(["checkbox","image","radio"]),be=t=>t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&!Se.has(t.type),Te=new Set(["SCRIPT","STYLE"]),w=t=>!Te.has(t.nodeName)&&!document.head?.contains(t),_=new WeakMap,Z=t=>{for(;t;)_.delete(t),t instanceof ShadowRoot?t=t.host:t=t.parentNode},J=new WeakSet,Ee=new MutationObserver(t=>{for(let e of t)Z(e.target)}),g=t=>{let e=_.get(t);if(e||(e={full:"",immediate:[]},!w(t)))return e;let n="";if(be(t))e.full=t.value,e.immediate.push(t.value),t.addEventListener("input",r=>{Z(r.target)},{once:!0,capture:!0});else{for(let r=t.firstChild;r;r=r.nextSibling){if(r.nodeType===Node.TEXT_NODE){e.full+=r.nodeValue??"",n+=r.nodeValue??"";continue}n&&e.immediate.push(n),n="",r.nodeType===Node.ELEMENT_NODE&&(e.full+=g(r).full)}n&&e.immediate.push(n),t instanceof Element&&t.shadowRoot&&(e.full+=g(t.shadowRoot).full),J.has(t)||(Ee.observe(t,{childList:!0,characterData:!0,subtree:!0}),J.add(t))}return _.set(t,e),e};var b=function*(t,e){let n=!1;for(let r of t.childNodes)if(r instanceof Element&&w(r)){let o;r.shadowRoot?o=b(r.shadowRoot,e):o=b(r,e);for(let i of o)yield i,n=!0}n||t instanceof Element&&w(t)&&g(t).full.includes(e)&&(yield t)};var $={};u($,{checkVisibility:()=>xe,pierce:()=>A,pierceAll:()=>L});var Pe=["hidden","collapse"],xe=(t,e)=>{if(!t)return e===!1;if(e===void 0)return t;let n=t.nodeType===Node.TEXT_NODE?t.parentElement:t,r=window.getComputedStyle(n),o=r&&!Pe.includes(r.visibility)&&!Ne(n);return e===o?t:!1};function Ne(t){let e=t.getBoundingClientRect();return e.width===0||e.height===0}var Ae=t=>"shadowRoot"in t&&t.shadowRoot instanceof ShadowRoot;function*A(t){Ae(t)?yield t.shadowRoot:yield t}function*L(t){t=A(t).next().value,yield t;let e=[document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT)];for(let n of e){let r;for(;r=n.nextNode();)r.shadowRoot&&(yield r.shadowRoot,e.push(document.createTreeWalker(r.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var U={};u(U,{xpathQuerySelectorAll:()=>j});var j=function*(t,e,n=-1){let o=(t.ownerDocument||document).evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),i=[],s;for(;(s=o.iterateNext())&&(i.push(s),!(n&&i.length===n)););for(let l=0;l<i.length;l++)s=i[l],yield s,delete i[l]};var ve=/[-\\w\\P{ASCII}*]/,ee=t=>"querySelectorAll"in t,v=class extends Error{constructor(e,n){super(`${e} is not a valid selector: ${n}`)}},F=class{#e;#t;#n=[];#r=void 0;elements;constructor(e,n,r){this.elements=[e],this.#e=n,this.#t=r,this.#o()}async run(){if(typeof this.#r=="string")switch(this.#r.trimStart()){case":scope":this.#o();break}for(;this.#r!==void 0;this.#o()){let e=this.#r,n=this.#e;typeof e=="string"?e[0]&&ve.test(e[0])?this.elements=c.flatMap(this.elements,async function*(r){ee(r)&&(yield*r.querySelectorAll(e))}):this.elements=c.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!ee(r))return;yield*r.querySelectorAll(e);return}let o=0;for(let i of r.parentElement.children)if(++o,i===r)break;yield*r.parentElement.querySelectorAll(`:scope>:nth-child(${o})${e}`)}):this.elements=c.flatMap(this.elements,async function*(r){switch(e.name){case"text":yield*b(r,e.value);break;case"xpath":yield*j(r,e.value);break;case"aria":yield*k(r,e.value);break;default:let o=M.get(e.name);if(!o)throw new v(n,`Unknown selector type: ${e.name}`);yield*o.querySelectorAll(r,e.value)}})}}#o(){if(this.#n.length!==0){this.#r=this.#n.shift();return}if(this.#t.length===0){this.#r=void 0;return}let e=this.#t.shift();switch(e){case">>>>":{this.elements=c.flatMap(this.elements,A),this.#o();break}case">>>":{this.elements=c.flatMap(this.elements,L),this.#o();break}default:this.#n=e,this.#o();break}}},V=class{#e=new WeakMap;calculate(e,n=[]){if(e===null)return n;e instanceof ShadowRoot&&(e=e.host);let r=this.#e.get(e);if(r)return[...r,...n];let o=0;for(let s=e.previousSibling;s;s=s.previousSibling)++o;let i=this.calculate(e.parentNode,[o]);return this.#e.set(e,i),[...i,...n]}},te=(t,e)=>{if(t.length+e.length===0)return 0;let[n=-1,...r]=t,[o=-1,...i]=e;return n===o?te(r,i):n<o?-1:1},Ce=async function*(t){let e=new Set;for await(let r of t)e.add(r);let n=new V;yield*[...e.values()].map(r=>[r,n.calculate(r)]).sort(([,r],[,o])=>te(r,o)).map(([r])=>r)},re=function(t,e){let n,r;try{[n,r]=Y(e)}catch{return t.querySelectorAll(e)}if(r)return t.querySelectorAll(e);if(n.some(o=>{let i=0;return o.some(s=>(typeof s=="string"?++i:i=0,i>1))}))throw new v(e,"Multiple deep combinators found in sequence.");return Ce(c.flatMap(n,o=>{let i=new F(t,e,o);return i.run(),i.elements}))},Ie=async function(t,e){for await(let n of re(t,e))return n;return null};var ke=Object.freeze({...R,...q,...D,...W,...Q,...$,...U,Deferred:f,createFunction:G,createTextContent:g,IntervalPoller:x,isSuitableNodeForTextMatching:w,MutationPoller:E,RAFPoller:P}),Re=ke;\n';
  Object.defineProperty(ScriptInjector$1, "__esModule", { value: true });
  ScriptInjector$1.scriptInjector = ScriptInjector$1.ScriptInjector = void 0;
  const injected_js_1 = injected;
  class ScriptInjector {
    constructor() {
      __privateAdd(this, _update);
      __privateAdd(this, _get2);
      __privateAdd(this, _updated, false);
      __privateAdd(this, _amendments, /* @__PURE__ */ new Set());
    }
    // Appends a statement of the form `(PuppeteerUtil) => {...}`.
    append(statement) {
      __privateMethod(this, _update, update_fn).call(this, () => {
        __privateGet(this, _amendments).add(statement);
      });
    }
    pop(statement) {
      __privateMethod(this, _update, update_fn).call(this, () => {
        __privateGet(this, _amendments).delete(statement);
      });
    }
    inject(inject, force = false) {
      if (__privateGet(this, _updated) || force) {
        inject(__privateMethod(this, _get2, get_fn).call(this));
      }
      __privateSet(this, _updated, false);
    }
  }
  _updated = new WeakMap();
  _amendments = new WeakMap();
  _update = new WeakSet();
  update_fn = function(callback) {
    callback();
    __privateSet(this, _updated, true);
  };
  _get2 = new WeakSet();
  get_fn = function() {
    return `(() => {
      const module = {};
      ${injected_js_1.source}
      ${[...__privateGet(this, _amendments)].map((statement) => {
      return `(${statement})(module.exports.default);`;
    }).join("")}
      return module.exports.default;
    })()`;
  };
  ScriptInjector$1.ScriptInjector = ScriptInjector;
  ScriptInjector$1.scriptInjector = new ScriptInjector();
  var AsyncIterableUtil$1 = {};
  Object.defineProperty(AsyncIterableUtil$1, "__esModule", { value: true });
  AsyncIterableUtil$1.AsyncIterableUtil = void 0;
  class AsyncIterableUtil {
    static async *map(iterable, map) {
      for await (const value of iterable) {
        yield await map(value);
      }
    }
    static async *flatMap(iterable, map) {
      for await (const value of iterable) {
        yield* map(value);
      }
    }
    static async collect(iterable) {
      const result = [];
      for await (const value of iterable) {
        result.push(value);
      }
      return result;
    }
    static async first(iterable) {
      for await (const value of iterable) {
        return value;
      }
      return;
    }
  }
  AsyncIterableUtil$1.AsyncIterableUtil = AsyncIterableUtil;
  var _Function = {};
  (function(exports3) {
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.interpolateFunction = exports3.stringifyFunction = exports3.createFunction = void 0;
    const createdFunctions = /* @__PURE__ */ new Map();
    const createFunction = (functionValue) => {
      let fn = createdFunctions.get(functionValue);
      if (fn) {
        return fn;
      }
      fn = new Function(`return ${functionValue}`)();
      createdFunctions.set(functionValue, fn);
      return fn;
    };
    exports3.createFunction = createFunction;
    function stringifyFunction(fn) {
      let value = fn.toString();
      try {
        new Function(`(${value})`);
      } catch {
        let prefix = "function ";
        if (value.startsWith("async ")) {
          prefix = `async ${prefix}`;
          value = value.substring("async ".length);
        }
        value = `${prefix}${value}`;
        try {
          new Function(`(${value})`);
        } catch {
          throw new Error("Passed function cannot be serialized!");
        }
      }
      return value;
    }
    exports3.stringifyFunction = stringifyFunction;
    const interpolateFunction = (fn, replacements) => {
      let value = stringifyFunction(fn);
      for (const [name, jsValue] of Object.entries(replacements)) {
        value = value.replace(
          new RegExp(`PLACEHOLDER\\(\\s*(?:'${name}'|"${name}")\\s*\\)`, "g"),
          // Wrapping this ensures tersers that accidently inline PLACEHOLDER calls
          // are still valid. Without, we may get calls like ()=>{...}() which is
          // not valid.
          `(${jsValue})`
        );
      }
      return (0, exports3.createFunction)(value);
    };
    exports3.interpolateFunction = interpolateFunction;
  })(_Function);
  var AriaQueryHandler = {};
  var QueryHandler$1 = {};
  var ElementHandleSymbol = {};
  Object.defineProperty(ElementHandleSymbol, "__esModule", { value: true });
  ElementHandleSymbol._isElementHandle = void 0;
  ElementHandleSymbol._isElementHandle = Symbol("_isElementHandle");
  var HandleIterator = {};
  var __addDisposableResource$4 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$4 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(HandleIterator, "__esModule", { value: true });
  HandleIterator.transposeIterableHandle = void 0;
  const disposable_js_1$7 = disposable;
  const DEFAULT_BATCH_SIZE = 20;
  async function* fastTransposeIteratorHandle(iterator, size) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      const array = __addDisposableResource$4(env_1, await iterator.evaluateHandle(async (iterator2, size2) => {
        const results = [];
        while (results.length < size2) {
          const result = await iterator2.next();
          if (result.done) {
            break;
          }
          results.push(result.value);
        }
        return results;
      }, size), false);
      const properties = await array.getProperties();
      const handles = properties.values();
      const stack = __addDisposableResource$4(env_1, new disposable_js_1$7.DisposableStack(), false);
      stack.defer(() => {
        for (const handle_1 of handles) {
          const env_2 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource$4(env_2, handle_1, false);
            handle[disposable_js_1$7.disposeSymbol]();
          } catch (e_2) {
            env_2.error = e_2;
            env_2.hasError = true;
          } finally {
            __disposeResources$4(env_2);
          }
        }
      });
      yield* handles;
      return properties.size === 0;
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources$4(env_1);
    }
  }
  async function* transposeIteratorHandle(iterator) {
    let size = DEFAULT_BATCH_SIZE;
    while (!(yield* fastTransposeIteratorHandle(iterator, size))) {
      size <<= 1;
    }
  }
  async function* transposeIterableHandle(handle) {
    const env_3 = { stack: [], error: void 0, hasError: false };
    try {
      const generatorHandle = __addDisposableResource$4(env_3, await handle.evaluateHandle((iterable) => {
        return async function* () {
          yield* iterable;
        }();
      }), false);
      yield* transposeIteratorHandle(generatorHandle);
    } catch (e_3) {
      env_3.error = e_3;
      env_3.hasError = true;
    } finally {
      __disposeResources$4(env_3);
    }
  }
  HandleIterator.transposeIterableHandle = transposeIterableHandle;
  var __addDisposableResource$3 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$3 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(QueryHandler$1, "__esModule", { value: true });
  QueryHandler$1.QueryHandler = void 0;
  const ElementHandleSymbol_js_1$1 = ElementHandleSymbol;
  const ErrorLike_js_1$5 = ErrorLike;
  const Function_js_1$2 = _Function;
  const HandleIterator_js_1 = HandleIterator;
  const LazyArg_js_1$3 = LazyArg$1;
  class QueryHandler {
    static get _querySelector() {
      if (this.querySelector) {
        return this.querySelector;
      }
      if (!this.querySelectorAll) {
        throw new Error("Cannot create default `querySelector`.");
      }
      return this.querySelector = (0, Function_js_1$2.interpolateFunction)(async (node, selector, PuppeteerUtil) => {
        const querySelectorAll = PLACEHOLDER("querySelectorAll");
        const results = querySelectorAll(node, selector, PuppeteerUtil);
        for await (const result of results) {
          return result;
        }
        return null;
      }, {
        querySelectorAll: (0, Function_js_1$2.stringifyFunction)(this.querySelectorAll)
      });
    }
    static get _querySelectorAll() {
      if (this.querySelectorAll) {
        return this.querySelectorAll;
      }
      if (!this.querySelector) {
        throw new Error("Cannot create default `querySelectorAll`.");
      }
      return this.querySelectorAll = (0, Function_js_1$2.interpolateFunction)(async function* (node, selector, PuppeteerUtil) {
        const querySelector = PLACEHOLDER("querySelector");
        const result = await querySelector(node, selector, PuppeteerUtil);
        if (result) {
          yield result;
        }
      }, {
        querySelector: (0, Function_js_1$2.stringifyFunction)(this.querySelector)
      });
    }
    /**
     * Queries for multiple nodes given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
     */
    static async *queryAll(element, selector) {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        const handle = __addDisposableResource$3(env_1, await element.evaluateHandle(this._querySelectorAll, selector, LazyArg_js_1$3.LazyArg.create((context) => {
          return context.puppeteerUtil;
        })), false);
        yield* (0, HandleIterator_js_1.transposeIterableHandle)(handle);
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$3(env_1);
      }
    }
    /**
     * Queries for a single node given a selector and {@link ElementHandle}.
     *
     * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
     */
    static async queryOne(element, selector) {
      const env_2 = { stack: [], error: void 0, hasError: false };
      try {
        const result = __addDisposableResource$3(env_2, await element.evaluateHandle(this._querySelector, selector, LazyArg_js_1$3.LazyArg.create((context) => {
          return context.puppeteerUtil;
        })), false);
        if (!(ElementHandleSymbol_js_1$1._isElementHandle in result)) {
          return null;
        }
        return result.move();
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        __disposeResources$3(env_2);
      }
    }
    /**
     * Waits until a single node appears for a given selector and
     * {@link ElementHandle}.
     *
     * This will always query the handle in the Puppeteer world and migrate the
     * result to the main world.
     */
    static async waitFor(elementOrFrame, selector, options) {
      const env_3 = { stack: [], error: void 0, hasError: false };
      try {
        let frame;
        const element = __addDisposableResource$3(env_3, await (async () => {
          if (!(ElementHandleSymbol_js_1$1._isElementHandle in elementOrFrame)) {
            frame = elementOrFrame;
            return;
          }
          frame = elementOrFrame.frame;
          return await frame.isolatedRealm().adoptHandle(elementOrFrame);
        })(), false);
        const { visible = false, hidden = false, timeout: timeout2, signal } = options;
        try {
          const env_4 = { stack: [], error: void 0, hasError: false };
          try {
            signal == null ? void 0 : signal.throwIfAborted();
            const handle = __addDisposableResource$3(env_4, await frame.isolatedRealm().waitForFunction(async (PuppeteerUtil, query, selector2, root, visible2) => {
              const querySelector = PuppeteerUtil.createFunction(query);
              const node = await querySelector(root ?? document, selector2, PuppeteerUtil);
              return PuppeteerUtil.checkVisibility(node, visible2);
            }, {
              polling: visible || hidden ? "raf" : "mutation",
              root: element,
              timeout: timeout2,
              signal
            }, LazyArg_js_1$3.LazyArg.create((context) => {
              return context.puppeteerUtil;
            }), (0, Function_js_1$2.stringifyFunction)(this._querySelector), selector, element, visible ? true : hidden ? false : void 0), false);
            if (signal == null ? void 0 : signal.aborted) {
              throw signal.reason;
            }
            if (!(ElementHandleSymbol_js_1$1._isElementHandle in handle)) {
              return null;
            }
            return await frame.mainRealm().transferHandle(handle);
          } catch (e_3) {
            env_4.error = e_3;
            env_4.hasError = true;
          } finally {
            __disposeResources$3(env_4);
          }
        } catch (error) {
          if (!(0, ErrorLike_js_1$5.isErrorLike)(error)) {
            throw error;
          }
          if (error.name === "AbortError") {
            throw error;
          }
          error.message = `Waiting for selector \`${selector}\` failed: ${error.message}`;
          throw error;
        }
      } catch (e_4) {
        env_3.error = e_4;
        env_3.hasError = true;
      } finally {
        __disposeResources$3(env_3);
      }
    }
  }
  // Either one of these may be implemented, but at least one must be.
  __publicField(QueryHandler, "querySelectorAll");
  __publicField(QueryHandler, "querySelector");
  QueryHandler$1.QueryHandler = QueryHandler;
  Object.defineProperty(AriaQueryHandler, "__esModule", { value: true });
  AriaQueryHandler.ARIAQueryHandler = void 0;
  const QueryHandler_js_1$4 = QueryHandler$1;
  const assert_js_1$d = assert$1;
  const AsyncIterableUtil_js_1$2 = AsyncIterableUtil$1;
  const NON_ELEMENT_NODE_ROLES = /* @__PURE__ */ new Set(["StaticText", "InlineTextBox"]);
  const queryAXTree = async (client, element, accessibleName, role) => {
    const { nodes } = await client.send("Accessibility.queryAXTree", {
      objectId: element.id,
      accessibleName,
      role
    });
    return nodes.filter((node) => {
      return !node.role || !NON_ELEMENT_NODE_ROLES.has(node.role.value);
    });
  };
  const isKnownAttribute = (attribute) => {
    return ["name", "role"].includes(attribute);
  };
  const normalizeValue = (value) => {
    return value.replace(/ +/g, " ").trim();
  };
  const ATTRIBUTE_REGEXP = /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g;
  const parseARIASelector = (selector) => {
    const queryOptions = {};
    const defaultName = selector.replace(ATTRIBUTE_REGEXP, (_, attribute, __, value) => {
      attribute = attribute.trim();
      (0, assert_js_1$d.assert)(isKnownAttribute(attribute), `Unknown aria attribute "${attribute}" in selector`);
      queryOptions[attribute] = normalizeValue(value);
      return "";
    });
    if (defaultName && !queryOptions.name) {
      queryOptions.name = normalizeValue(defaultName);
    }
    return queryOptions;
  };
  const _ARIAQueryHandler = class _ARIAQueryHandler extends QueryHandler_js_1$4.QueryHandler {
    static async *queryAll(element, selector) {
      const { name, role } = parseARIASelector(selector);
      const results = await queryAXTree(element.realm.environment.client, element, name, role);
      yield* AsyncIterableUtil_js_1$2.AsyncIterableUtil.map(results, (node) => {
        return element.realm.adoptBackendNode(node.backendDOMNodeId);
      });
    }
  };
  __publicField(_ARIAQueryHandler, "querySelector", async (node, selector, { ariaQuerySelector }) => {
    return await ariaQuerySelector(node, selector);
  });
  __publicField(_ARIAQueryHandler, "queryOne", async (element, selector) => {
    return await AsyncIterableUtil_js_1$2.AsyncIterableUtil.first(_ARIAQueryHandler.queryAll(element, selector)) ?? null;
  });
  let ARIAQueryHandler = _ARIAQueryHandler;
  AriaQueryHandler.ARIAQueryHandler = ARIAQueryHandler;
  var ElementHandle$2 = {};
  var ElementHandle$1 = {};
  var GetQueryHandler = {};
  var CustomQueryHandler = {};
  (function(exports3) {
    var _handlers3;
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.clearCustomQueryHandlers = exports3.customQueryHandlerNames = exports3.unregisterCustomQueryHandler = exports3.registerCustomQueryHandler = exports3.customQueryHandlers = exports3.CustomQueryHandlerRegistry = void 0;
    const assert_js_12 = assert$1;
    const Function_js_12 = _Function;
    const QueryHandler_js_12 = QueryHandler$1;
    const ScriptInjector_js_12 = ScriptInjector$1;
    class CustomQueryHandlerRegistry {
      constructor() {
        __privateAdd(this, _handlers3, /* @__PURE__ */ new Map());
      }
      get(name) {
        const handler = __privateGet(this, _handlers3).get(name);
        return handler ? handler[1] : void 0;
      }
      /**
       * Registers a {@link CustomQueryHandler | custom query handler}.
       *
       * @remarks
       * After registration, the handler can be used everywhere where a selector is
       * expected by prepending the selection string with `<name>/`. The name is
       * only allowed to consist of lower- and upper case latin letters.
       *
       * @example
       *
       * ```ts
       * Puppeteer.customQueryHandlers.register('lit', { … });
       * const aHandle = await page.$('lit/…');
       * ```
       *
       * @param name - Name to register under.
       * @param queryHandler - {@link CustomQueryHandler | Custom query handler} to
       * register.
       */
      register(name, handler) {
        var _a2;
        (0, assert_js_12.assert)(!__privateGet(this, _handlers3).has(name), `Cannot register over existing handler: ${name}`);
        (0, assert_js_12.assert)(/^[a-zA-Z]+$/.test(name), `Custom query handler names may only contain [a-zA-Z]`);
        (0, assert_js_12.assert)(handler.queryAll || handler.queryOne, `At least one query method must be implemented.`);
        const Handler = (_a2 = class extends QueryHandler_js_12.QueryHandler {
        }, __publicField(_a2, "querySelectorAll", (0, Function_js_12.interpolateFunction)((node, selector, PuppeteerUtil) => {
          return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER("name")).querySelectorAll(node, selector);
        }, { name: JSON.stringify(name) })), __publicField(_a2, "querySelector", (0, Function_js_12.interpolateFunction)((node, selector, PuppeteerUtil) => {
          return PuppeteerUtil.customQuerySelectors.get(PLACEHOLDER("name")).querySelector(node, selector);
        }, { name: JSON.stringify(name) })), _a2);
        const registerScript = (0, Function_js_12.interpolateFunction)((PuppeteerUtil) => {
          PuppeteerUtil.customQuerySelectors.register(PLACEHOLDER("name"), {
            queryAll: PLACEHOLDER("queryAll"),
            queryOne: PLACEHOLDER("queryOne")
          });
        }, {
          name: JSON.stringify(name),
          queryAll: handler.queryAll ? (0, Function_js_12.stringifyFunction)(handler.queryAll) : String(void 0),
          queryOne: handler.queryOne ? (0, Function_js_12.stringifyFunction)(handler.queryOne) : String(void 0)
        }).toString();
        __privateGet(this, _handlers3).set(name, [registerScript, Handler]);
        ScriptInjector_js_12.scriptInjector.append(registerScript);
      }
      /**
       * Unregisters the {@link CustomQueryHandler | custom query handler} for the
       * given name.
       *
       * @throws `Error` if there is no handler under the given name.
       */
      unregister(name) {
        const handler = __privateGet(this, _handlers3).get(name);
        if (!handler) {
          throw new Error(`Cannot unregister unknown handler: ${name}`);
        }
        ScriptInjector_js_12.scriptInjector.pop(handler[0]);
        __privateGet(this, _handlers3).delete(name);
      }
      /**
       * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
       */
      names() {
        return [...__privateGet(this, _handlers3).keys()];
      }
      /**
       * Unregisters all custom query handlers.
       */
      clear() {
        for (const [registerScript] of __privateGet(this, _handlers3)) {
          ScriptInjector_js_12.scriptInjector.pop(registerScript);
        }
        __privateGet(this, _handlers3).clear();
      }
    }
    _handlers3 = new WeakMap();
    exports3.CustomQueryHandlerRegistry = CustomQueryHandlerRegistry;
    exports3.customQueryHandlers = new CustomQueryHandlerRegistry();
    function registerCustomQueryHandler(name, handler) {
      exports3.customQueryHandlers.register(name, handler);
    }
    exports3.registerCustomQueryHandler = registerCustomQueryHandler;
    function unregisterCustomQueryHandler(name) {
      exports3.customQueryHandlers.unregister(name);
    }
    exports3.unregisterCustomQueryHandler = unregisterCustomQueryHandler;
    function customQueryHandlerNames() {
      return exports3.customQueryHandlers.names();
    }
    exports3.customQueryHandlerNames = customQueryHandlerNames;
    function clearCustomQueryHandlers() {
      exports3.customQueryHandlers.clear();
    }
    exports3.clearCustomQueryHandlers = clearCustomQueryHandlers;
  })(CustomQueryHandler);
  var PierceQueryHandler$1 = {};
  Object.defineProperty(PierceQueryHandler$1, "__esModule", { value: true });
  PierceQueryHandler$1.PierceQueryHandler = void 0;
  const QueryHandler_js_1$3 = QueryHandler$1;
  class PierceQueryHandler extends QueryHandler_js_1$3.QueryHandler {
  }
  __publicField(PierceQueryHandler, "querySelector", (element, selector, { pierceQuerySelector }) => {
    return pierceQuerySelector(element, selector);
  });
  __publicField(PierceQueryHandler, "querySelectorAll", (element, selector, { pierceQuerySelectorAll }) => {
    return pierceQuerySelectorAll(element, selector);
  });
  PierceQueryHandler$1.PierceQueryHandler = PierceQueryHandler;
  var PQueryHandler$1 = {};
  Object.defineProperty(PQueryHandler$1, "__esModule", { value: true });
  PQueryHandler$1.PQueryHandler = void 0;
  const QueryHandler_js_1$2 = QueryHandler$1;
  class PQueryHandler extends QueryHandler_js_1$2.QueryHandler {
  }
  __publicField(PQueryHandler, "querySelectorAll", (element, selector, { pQuerySelectorAll }) => {
    return pQuerySelectorAll(element, selector);
  });
  __publicField(PQueryHandler, "querySelector", (element, selector, { pQuerySelector }) => {
    return pQuerySelector(element, selector);
  });
  PQueryHandler$1.PQueryHandler = PQueryHandler;
  var TextQueryHandler$1 = {};
  Object.defineProperty(TextQueryHandler$1, "__esModule", { value: true });
  TextQueryHandler$1.TextQueryHandler = void 0;
  const QueryHandler_js_1$1 = QueryHandler$1;
  class TextQueryHandler extends QueryHandler_js_1$1.QueryHandler {
  }
  __publicField(TextQueryHandler, "querySelectorAll", (element, selector, { textQuerySelectorAll }) => {
    return textQuerySelectorAll(element, selector);
  });
  TextQueryHandler$1.TextQueryHandler = TextQueryHandler;
  var XPathQueryHandler$1 = {};
  Object.defineProperty(XPathQueryHandler$1, "__esModule", { value: true });
  XPathQueryHandler$1.XPathQueryHandler = void 0;
  const QueryHandler_js_1 = QueryHandler$1;
  class XPathQueryHandler extends QueryHandler_js_1.QueryHandler {
  }
  __publicField(XPathQueryHandler, "querySelectorAll", (element, selector, { xpathQuerySelectorAll }) => {
    return xpathQuerySelectorAll(element, selector);
  });
  __publicField(XPathQueryHandler, "querySelector", (element, selector, { xpathQuerySelectorAll }) => {
    for (const result of xpathQuerySelectorAll(element, selector, 1)) {
      return result;
    }
    return null;
  });
  XPathQueryHandler$1.XPathQueryHandler = XPathQueryHandler;
  Object.defineProperty(GetQueryHandler, "__esModule", { value: true });
  GetQueryHandler.getQueryHandlerAndSelector = void 0;
  const AriaQueryHandler_js_1$1 = AriaQueryHandler;
  const CustomQueryHandler_js_1 = CustomQueryHandler;
  const PierceQueryHandler_js_1 = PierceQueryHandler$1;
  const PQueryHandler_js_1 = PQueryHandler$1;
  const TextQueryHandler_js_1 = TextQueryHandler$1;
  const XPathQueryHandler_js_1 = XPathQueryHandler$1;
  const BUILTIN_QUERY_HANDLERS = {
    aria: AriaQueryHandler_js_1$1.ARIAQueryHandler,
    pierce: PierceQueryHandler_js_1.PierceQueryHandler,
    xpath: XPathQueryHandler_js_1.XPathQueryHandler,
    text: TextQueryHandler_js_1.TextQueryHandler
  };
  const QUERY_SEPARATORS = ["=", "/"];
  function getQueryHandlerAndSelector(selector) {
    for (const handlerMap of [
      CustomQueryHandler_js_1.customQueryHandlers.names().map((name) => {
        return [name, CustomQueryHandler_js_1.customQueryHandlers.get(name)];
      }),
      Object.entries(BUILTIN_QUERY_HANDLERS)
    ]) {
      for (const [name, QueryHandler2] of handlerMap) {
        for (const separator of QUERY_SEPARATORS) {
          const prefix = `${name}${separator}`;
          if (selector.startsWith(prefix)) {
            selector = selector.slice(prefix.length);
            return { updatedSelector: selector, QueryHandler: QueryHandler2 };
          }
        }
      }
    }
    return { updatedSelector: selector, QueryHandler: PQueryHandler_js_1.PQueryHandler };
  }
  GetQueryHandler.getQueryHandlerAndSelector = getQueryHandlerAndSelector;
  var __runInitializers$2 = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$2 = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __addDisposableResource$2 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$2 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(ElementHandle$1, "__esModule", { value: true });
  ElementHandle$1.ElementHandle = void 0;
  const GetQueryHandler_js_1 = GetQueryHandler;
  const LazyArg_js_1$2 = LazyArg$1;
  const util_js_1$d = require$$2$1;
  const assert_js_1$c = assert$1;
  const AsyncIterableUtil_js_1$1 = AsyncIterableUtil$1;
  const decorators_js_1$1 = decorators;
  const ElementHandleSymbol_js_1 = ElementHandleSymbol;
  const JSHandle_js_1$5 = JSHandle$2;
  let ElementHandle = (() => {
    var _checkVisibility, checkVisibility_fn, _clickableBox, clickableBox_fn, _intersectBoundingBoxesWithFrame, intersectBoundingBoxesWithFrame_fn, _getTopLeftCornerOfFrame, getTopLeftCornerOfFrame_fn, _nonEmptyVisibleBoundingBox, nonEmptyVisibleBoundingBox_fn, _asSVGElementHandle, asSVGElementHandle_fn, _getOwnerSVGElement, getOwnerSVGElement_fn, _a3;
    var _a2, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
    let _classSuper = JSHandle_js_1$5.JSHandle;
    let _instanceExtraInitializers = [];
    let _getProperty_decorators;
    let _getProperties_decorators;
    let _jsonValue_decorators;
    let _$_decorators;
    let _$$_decorators;
    let _$x_decorators;
    let _waitForSelector_decorators;
    let _isVisible_decorators;
    let _isHidden_decorators;
    let _waitForXPath_decorators;
    let _toElement_decorators;
    let _clickablePoint_decorators;
    let _hover_decorators;
    let _click_decorators;
    let _drag_decorators;
    let _dragEnter_decorators;
    let _dragOver_decorators;
    let _drop_decorators;
    let _dragAndDrop_decorators;
    let _select_decorators;
    let _tap_decorators;
    let _touchStart_decorators;
    let _touchMove_decorators;
    let _touchEnd_decorators;
    let _focus_decorators;
    let _type_decorators;
    let _press_decorators;
    let _boundingBox_decorators;
    let _boxModel_decorators;
    let _screenshot_decorators;
    let _isIntersectingViewport_decorators;
    let _scrollIntoView_decorators;
    return _a3 = class extends _classSuper {
      /**
       * @internal
       */
      constructor(handle) {
        super();
        __privateAdd(this, _checkVisibility);
        __privateAdd(this, _clickableBox);
        __privateAdd(this, _intersectBoundingBoxesWithFrame);
        __privateAdd(this, _getTopLeftCornerOfFrame);
        __privateAdd(this, _nonEmptyVisibleBoundingBox);
        /**
         * Returns true if an element is an SVGElement (included svg, path, rect
         * etc.).
         */
        __privateAdd(this, _asSVGElementHandle);
        __privateAdd(this, _getOwnerSVGElement);
        /**
         * @internal
         */
        __publicField(this, "handle", (__runInitializers$2(this, _instanceExtraInitializers), void 0));
        this.handle = handle;
        this[ElementHandleSymbol_js_1._isElementHandle] = true;
      }
      /**
       * A given method will have it's `this` replaced with an isolated version of
       * `this` when decorated with this decorator.
       *
       * All changes of isolated `this` are reflected on the actual `this`.
       *
       * @internal
       */
      static bindIsolatedHandle(target, _) {
        return async function(...args) {
          const env_1 = { stack: [], error: void 0, hasError: false };
          try {
            if (this.realm === this.frame.isolatedRealm()) {
              return await target.call(this, ...args);
            }
            const adoptedThis = __addDisposableResource$2(env_1, await this.frame.isolatedRealm().adoptHandle(this), false);
            const result = await target.call(adoptedThis, ...args);
            if (result === adoptedThis) {
              return this;
            }
            if (result instanceof JSHandle_js_1$5.JSHandle) {
              return await this.realm.transferHandle(result);
            }
            if (Array.isArray(result)) {
              await Promise.all(result.map(async (item, index, result2) => {
                if (item instanceof JSHandle_js_1$5.JSHandle) {
                  result2[index] = await this.realm.transferHandle(item);
                }
              }));
            }
            if (result instanceof Map) {
              await Promise.all([...result.entries()].map(async ([key, value]) => {
                if (value instanceof JSHandle_js_1$5.JSHandle) {
                  result.set(key, await this.realm.transferHandle(value));
                }
              }));
            }
            return result;
          } catch (e_1) {
            env_1.error = e_1;
            env_1.hasError = true;
          } finally {
            __disposeResources$2(env_1);
          }
        };
      }
      /**
       * @internal
       */
      get id() {
        return this.handle.id;
      }
      /**
       * @internal
       */
      get disposed() {
        return this.handle.disposed;
      }
      /**
       * @internal
       */
      async getProperty(propertyName) {
        return await this.handle.getProperty(propertyName);
      }
      /**
       * @internal
       */
      async getProperties() {
        return await this.handle.getProperties();
      }
      /**
       * @internal
       */
      async evaluate(pageFunction, ...args) {
        pageFunction = (0, util_js_1$d.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
        return await this.handle.evaluate(pageFunction, ...args);
      }
      /**
       * @internal
       */
      async evaluateHandle(pageFunction, ...args) {
        pageFunction = (0, util_js_1$d.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
        return await this.handle.evaluateHandle(pageFunction, ...args);
      }
      /**
       * @internal
       */
      async jsonValue() {
        return await this.handle.jsonValue();
      }
      /**
       * @internal
       */
      toString() {
        return this.handle.toString();
      }
      /**
       * @internal
       */
      remoteObject() {
        return this.handle.remoteObject();
      }
      /**
       * @internal
       */
      dispose() {
        return this.handle.dispose();
      }
      /**
       * @internal
       */
      asElement() {
        return this;
      }
      /**
       * Queries the current element for an element matching the given selector.
       *
       * @param selector - The selector to query for.
       * @returns A {@link ElementHandle | element handle} to the first element
       * matching the given selector. Otherwise, `null`.
       */
      async $(selector) {
        const { updatedSelector, QueryHandler: QueryHandler2 } = (0, GetQueryHandler_js_1.getQueryHandlerAndSelector)(selector);
        return await QueryHandler2.queryOne(this, updatedSelector);
      }
      /**
       * Queries the current element for all elements matching the given selector.
       *
       * @param selector - The selector to query for.
       * @returns An array of {@link ElementHandle | element handles} that point to
       * elements matching the given selector.
       */
      async $$(selector) {
        const { updatedSelector, QueryHandler: QueryHandler2 } = (0, GetQueryHandler_js_1.getQueryHandlerAndSelector)(selector);
        return await AsyncIterableUtil_js_1$1.AsyncIterableUtil.collect(QueryHandler2.queryAll(this, updatedSelector));
      }
      /**
       * Runs the given function on the first element matching the given selector in
       * the current element.
       *
       * If the given function returns a promise, then this method will wait till
       * the promise resolves.
       *
       * @example
       *
       * ```ts
       * const tweetHandle = await page.$('.tweet');
       * expect(await tweetHandle.$eval('.like', node => node.innerText)).toBe(
       *   '100'
       * );
       * expect(await tweetHandle.$eval('.retweets', node => node.innerText)).toBe(
       *   '10'
       * );
       * ```
       *
       * @param selector - The selector to query for.
       * @param pageFunction - The function to be evaluated in this element's page's
       * context. The first element matching the selector will be passed in as the
       * first argument.
       * @param args - Additional arguments to pass to `pageFunction`.
       * @returns A promise to the result of the function.
       */
      async $eval(selector, pageFunction, ...args) {
        const env_2 = { stack: [], error: void 0, hasError: false };
        try {
          pageFunction = (0, util_js_1$d.withSourcePuppeteerURLIfNone)(this.$eval.name, pageFunction);
          const elementHandle = __addDisposableResource$2(env_2, await this.$(selector), false);
          if (!elementHandle) {
            throw new Error(`Error: failed to find element matching selector "${selector}"`);
          }
          return await elementHandle.evaluate(pageFunction, ...args);
        } catch (e_2) {
          env_2.error = e_2;
          env_2.hasError = true;
        } finally {
          __disposeResources$2(env_2);
        }
      }
      /**
       * Runs the given function on an array of elements matching the given selector
       * in the current element.
       *
       * If the given function returns a promise, then this method will wait till
       * the promise resolves.
       *
       * @example
       * HTML:
       *
       * ```html
       * <div class="feed">
       *   <div class="tweet">Hello!</div>
       *   <div class="tweet">Hi!</div>
       * </div>
       * ```
       *
       * JavaScript:
       *
       * ```ts
       * const feedHandle = await page.$('.feed');
       * expect(
       *   await feedHandle.$$eval('.tweet', nodes => nodes.map(n => n.innerText))
       * ).toEqual(['Hello!', 'Hi!']);
       * ```
       *
       * @param selector - The selector to query for.
       * @param pageFunction - The function to be evaluated in the element's page's
       * context. An array of elements matching the given selector will be passed to
       * the function as its first argument.
       * @param args - Additional arguments to pass to `pageFunction`.
       * @returns A promise to the result of the function.
       */
      async $$eval(selector, pageFunction, ...args) {
        const env_3 = { stack: [], error: void 0, hasError: false };
        try {
          pageFunction = (0, util_js_1$d.withSourcePuppeteerURLIfNone)(this.$$eval.name, pageFunction);
          const results = await this.$$(selector);
          const elements = __addDisposableResource$2(env_3, await this.evaluateHandle((_, ...elements2) => {
            return elements2;
          }, ...results), false);
          const [result] = await Promise.all([
            elements.evaluate(pageFunction, ...args),
            ...results.map((results2) => {
              return results2.dispose();
            })
          ]);
          return result;
        } catch (e_3) {
          env_3.error = e_3;
          env_3.hasError = true;
        } finally {
          __disposeResources$2(env_3);
        }
      }
      /**
       * @deprecated Use {@link ElementHandle.$$} with the `xpath` prefix.
       *
       * Example: `await elementHandle.$$('xpath/' + xpathExpression)`
       *
       * The method evaluates the XPath expression relative to the elementHandle.
       * If `xpath` starts with `//` instead of `.//`, the dot will be appended
       * automatically.
       *
       * If there are no such elements, the method will resolve to an empty array.
       * @param expression - Expression to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate | evaluate}
       */
      async $x(expression) {
        if (expression.startsWith("//")) {
          expression = `.${expression}`;
        }
        return await this.$$(`xpath/${expression}`);
      }
      /**
       * Wait for an element matching the given selector to appear in the current
       * element.
       *
       * Unlike {@link Frame.waitForSelector}, this method does not work across
       * navigations or if the element is detached from DOM.
       *
       * @example
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       *
       * (async () => {
       *   const browser = await puppeteer.launch();
       *   const page = await browser.newPage();
       *   let currentURL;
       *   page
       *     .mainFrame()
       *     .waitForSelector('img')
       *     .then(() => console.log('First URL with image: ' + currentURL));
       *
       *   for (currentURL of [
       *     'https://example.com',
       *     'https://google.com',
       *     'https://bbc.com',
       *   ]) {
       *     await page.goto(currentURL);
       *   }
       *   await browser.close();
       * })();
       * ```
       *
       * @param selector - The selector to query and wait for.
       * @param options - Options for customizing waiting behavior.
       * @returns An element matching the given selector.
       * @throws Throws if an element matching the given selector doesn't appear.
       */
      async waitForSelector(selector, options = {}) {
        const { updatedSelector, QueryHandler: QueryHandler2 } = (0, GetQueryHandler_js_1.getQueryHandlerAndSelector)(selector);
        return await QueryHandler2.waitFor(this, updatedSelector, options);
      }
      /**
       * Checks if an element is visible using the same mechanism as
       * {@link ElementHandle.waitForSelector}.
       */
      async isVisible() {
        return await __privateMethod(this, _checkVisibility, checkVisibility_fn).call(this, true);
      }
      /**
       * Checks if an element is hidden using the same mechanism as
       * {@link ElementHandle.waitForSelector}.
       */
      async isHidden() {
        return await __privateMethod(this, _checkVisibility, checkVisibility_fn).call(this, false);
      }
      /**
       * @deprecated Use {@link ElementHandle.waitForSelector} with the `xpath`
       * prefix.
       *
       * Example: `await elementHandle.waitForSelector('xpath/' + xpathExpression)`
       *
       * The method evaluates the XPath expression relative to the elementHandle.
       *
       * Wait for the `xpath` within the element. If at the moment of calling the
       * method the `xpath` already exists, the method will return immediately. If
       * the `xpath` doesn't appear after the `timeout` milliseconds of waiting, the
       * function will throw.
       *
       * If `xpath` starts with `//` instead of `.//`, the dot will be appended
       * automatically.
       *
       * @example
       * This method works across navigation.
       *
       * ```ts
       * import puppeteer from 'puppeteer';
       * (async () => {
       *   const browser = await puppeteer.launch();
       *   const page = await browser.newPage();
       *   let currentURL;
       *   page
       *     .waitForXPath('//img')
       *     .then(() => console.log('First URL with image: ' + currentURL));
       *   for (currentURL of [
       *     'https://example.com',
       *     'https://google.com',
       *     'https://bbc.com',
       *   ]) {
       *     await page.goto(currentURL);
       *   }
       *   await browser.close();
       * })();
       * ```
       *
       * @param xpath - A
       * {@link https://developer.mozilla.org/en-US/docs/Web/XPath | xpath} of an
       * element to wait for
       * @param options - Optional waiting parameters
       * @returns Promise which resolves when element specified by xpath string is
       * added to DOM. Resolves to `null` if waiting for `hidden: true` and xpath is
       * not found in DOM, otherwise resolves to `ElementHandle`.
       * @remarks
       * The optional Argument `options` have properties:
       *
       * - `visible`: A boolean to wait for element to be present in DOM and to be
       *   visible, i.e. to not have `display: none` or `visibility: hidden` CSS
       *   properties. Defaults to `false`.
       *
       * - `hidden`: A boolean wait for element to not be found in the DOM or to be
       *   hidden, i.e. have `display: none` or `visibility: hidden` CSS properties.
       *   Defaults to `false`.
       *
       * - `timeout`: A number which is maximum time to wait for in milliseconds.
       *   Defaults to `30000` (30 seconds). Pass `0` to disable timeout. The
       *   default value can be changed by using the {@link Page.setDefaultTimeout}
       *   method.
       */
      async waitForXPath(xpath, options = {}) {
        if (xpath.startsWith("//")) {
          xpath = `.${xpath}`;
        }
        return await this.waitForSelector(`xpath/${xpath}`, options);
      }
      /**
       * Converts the current handle to the given element type.
       *
       * @example
       *
       * ```ts
       * const element: ElementHandle<Element> = await page.$(
       *   '.class-name-of-anchor'
       * );
       * // DO NOT DISPOSE `element`, this will be always be the same handle.
       * const anchor: ElementHandle<HTMLAnchorElement> =
       *   await element.toElement('a');
       * ```
       *
       * @param tagName - The tag name of the desired element type.
       * @throws An error if the handle does not match. **The handle will not be
       * automatically disposed.**
       */
      async toElement(tagName) {
        const isMatchingTagName = await this.evaluate((node, tagName2) => {
          return node.nodeName === tagName2.toUpperCase();
        }, tagName);
        if (!isMatchingTagName) {
          throw new Error(`Element is not a(n) \`${tagName}\` element`);
        }
        return this;
      }
      /**
       * Returns the middle point within an element unless a specific offset is provided.
       */
      async clickablePoint(offset) {
        const box = await __privateMethod(this, _clickableBox, clickableBox_fn).call(this);
        if (!box) {
          throw new Error("Node is either not clickable or not an Element");
        }
        if (offset !== void 0) {
          return {
            x: box.x + offset.x,
            y: box.y + offset.y
          };
        }
        return {
          x: box.x + box.width / 2,
          y: box.y + box.height / 2
        };
      }
      /**
       * This method scrolls element into view if needed, and then
       * uses {@link Page} to hover over the center of the element.
       * If the element is detached from DOM, the method throws an error.
       */
      async hover() {
        await this.scrollIntoViewIfNeeded();
        const { x, y } = await this.clickablePoint();
        await this.frame.page().mouse.move(x, y);
      }
      /**
       * This method scrolls element into view if needed, and then
       * uses {@link Page | Page.mouse} to click in the center of the element.
       * If the element is detached from DOM, the method throws an error.
       */
      async click(options = {}) {
        await this.scrollIntoViewIfNeeded();
        const { x, y } = await this.clickablePoint(options.offset);
        await this.frame.page().mouse.click(x, y, options);
      }
      /**
       * Drags an element over the given element or point.
       *
       * @returns DEPRECATED. When drag interception is enabled, the drag payload is
       * returned.
       */
      async drag(target) {
        await this.scrollIntoViewIfNeeded();
        const page = this.frame.page();
        if (page.isDragInterceptionEnabled()) {
          const source = await this.clickablePoint();
          if (target instanceof _a3) {
            target = await target.clickablePoint();
          }
          return await page.mouse.drag(source, target);
        }
        try {
          if (!page._isDragging) {
            page._isDragging = true;
            await this.hover();
            await page.mouse.down();
          }
          if (target instanceof _a3) {
            await target.hover();
          } else {
            await page.mouse.move(target.x, target.y);
          }
        } catch (error) {
          page._isDragging = false;
          throw error;
        }
      }
      /**
       * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
       */
      async dragEnter(data = { items: [], dragOperationsMask: 1 }) {
        const page = this.frame.page();
        await this.scrollIntoViewIfNeeded();
        const target = await this.clickablePoint();
        await page.mouse.dragEnter(target, data);
      }
      /**
       * @deprecated Do not use. `dragover` will automatically be performed during dragging.
       */
      async dragOver(data = { items: [], dragOperationsMask: 1 }) {
        const page = this.frame.page();
        await this.scrollIntoViewIfNeeded();
        const target = await this.clickablePoint();
        await page.mouse.dragOver(target, data);
      }
      /**
       * @internal
       */
      async drop(dataOrElement = {
        items: [],
        dragOperationsMask: 1
      }) {
        const page = this.frame.page();
        if ("items" in dataOrElement) {
          await this.scrollIntoViewIfNeeded();
          const destination = await this.clickablePoint();
          await page.mouse.drop(destination, dataOrElement);
        } else {
          await dataOrElement.drag(this);
          page._isDragging = false;
          await page.mouse.up();
        }
      }
      /**
       * @deprecated Use `ElementHandle.drop` instead.
       */
      async dragAndDrop(target, options) {
        const page = this.frame.page();
        (0, assert_js_1$c.assert)(page.isDragInterceptionEnabled(), "Drag Interception is not enabled!");
        await this.scrollIntoViewIfNeeded();
        const startPoint = await this.clickablePoint();
        const targetPoint = await target.clickablePoint();
        await page.mouse.dragAndDrop(startPoint, targetPoint, options);
      }
      /**
       * Triggers a `change` and `input` event once all the provided options have been
       * selected. If there's no `<select>` element matching `selector`, the method
       * throws an error.
       *
       * @example
       *
       * ```ts
       * handle.select('blue'); // single selection
       * handle.select('red', 'green', 'blue'); // multiple selections
       * ```
       *
       * @param values - Values of options to select. If the `<select>` has the
       * `multiple` attribute, all values are considered, otherwise only the first
       * one is taken into account.
       */
      async select(...values) {
        for (const value of values) {
          (0, assert_js_1$c.assert)((0, util_js_1$d.isString)(value), 'Values must be strings. Found value "' + value + '" of type "' + typeof value + '"');
        }
        return await this.evaluate((element, vals) => {
          const values2 = new Set(vals);
          if (!(element instanceof HTMLSelectElement)) {
            throw new Error("Element is not a <select> element.");
          }
          const selectedValues = /* @__PURE__ */ new Set();
          if (!element.multiple) {
            for (const option of element.options) {
              option.selected = false;
            }
            for (const option of element.options) {
              if (values2.has(option.value)) {
                option.selected = true;
                selectedValues.add(option.value);
                break;
              }
            }
          } else {
            for (const option of element.options) {
              option.selected = values2.has(option.value);
              if (option.selected) {
                selectedValues.add(option.value);
              }
            }
          }
          element.dispatchEvent(new Event("input", { bubbles: true }));
          element.dispatchEvent(new Event("change", { bubbles: true }));
          return [...selectedValues.values()];
        }, values);
      }
      /**
       * This method scrolls element into view if needed, and then uses
       * {@link Touchscreen.tap} to tap in the center of the element.
       * If the element is detached from DOM, the method throws an error.
       */
      async tap() {
        await this.scrollIntoViewIfNeeded();
        const { x, y } = await this.clickablePoint();
        await this.frame.page().touchscreen.tap(x, y);
      }
      async touchStart() {
        await this.scrollIntoViewIfNeeded();
        const { x, y } = await this.clickablePoint();
        await this.frame.page().touchscreen.touchStart(x, y);
      }
      async touchMove() {
        await this.scrollIntoViewIfNeeded();
        const { x, y } = await this.clickablePoint();
        await this.frame.page().touchscreen.touchMove(x, y);
      }
      async touchEnd() {
        await this.scrollIntoViewIfNeeded();
        await this.frame.page().touchscreen.touchEnd();
      }
      /**
       * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
       */
      async focus() {
        await this.evaluate((element) => {
          if (!(element instanceof HTMLElement)) {
            throw new Error("Cannot focus non-HTMLElement");
          }
          return element.focus();
        });
      }
      /**
       * Focuses the element, and then sends a `keydown`, `keypress`/`input`, and
       * `keyup` event for each character in the text.
       *
       * To press a special key, like `Control` or `ArrowDown`,
       * use {@link ElementHandle.press}.
       *
       * @example
       *
       * ```ts
       * await elementHandle.type('Hello'); // Types instantly
       * await elementHandle.type('World', {delay: 100}); // Types slower, like a user
       * ```
       *
       * @example
       * An example of typing into a text field and then submitting the form:
       *
       * ```ts
       * const elementHandle = await page.$('input');
       * await elementHandle.type('some text');
       * await elementHandle.press('Enter');
       * ```
       *
       * @param options - Delay in milliseconds. Defaults to 0.
       */
      async type(text, options) {
        await this.focus();
        await this.frame.page().keyboard.type(text, options);
      }
      /**
       * Focuses the element, and then uses {@link Keyboard.down} and {@link Keyboard.up}.
       *
       * @remarks
       * If `key` is a single character and no modifier keys besides `Shift`
       * are being held down, a `keypress`/`input` event will also be generated.
       * The `text` option can be specified to force an input event to be generated.
       *
       * **NOTE** Modifier keys DO affect `elementHandle.press`. Holding down `Shift`
       * will type the text in upper case.
       *
       * @param key - Name of key to press, such as `ArrowLeft`.
       * See {@link KeyInput} for a list of all key names.
       */
      async press(key, options) {
        await this.focus();
        await this.frame.page().keyboard.press(key, options);
      }
      /**
       * This method returns the bounding box of the element (relative to the main frame),
       * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
       * (example: `display: none`).
       */
      async boundingBox() {
        const box = await this.evaluate((element) => {
          if (!(element instanceof Element)) {
            return null;
          }
          if (element.getClientRects().length === 0) {
            return null;
          }
          const rect = element.getBoundingClientRect();
          return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
        });
        if (!box) {
          return null;
        }
        const offset = await __privateMethod(this, _getTopLeftCornerOfFrame, getTopLeftCornerOfFrame_fn).call(this);
        if (!offset) {
          return null;
        }
        return {
          x: box.x + offset.x,
          y: box.y + offset.y,
          height: box.height,
          width: box.width
        };
      }
      /**
       * This method returns boxes of the element,
       * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
       * (example: `display: none`).
       *
       * @remarks
       *
       * Boxes are represented as an array of points;
       * Each Point is an object `{x, y}`. Box points are sorted clock-wise.
       */
      async boxModel() {
        const model = await this.evaluate((element) => {
          if (!(element instanceof Element)) {
            return null;
          }
          if (element.getClientRects().length === 0) {
            return null;
          }
          const rect = element.getBoundingClientRect();
          const style = window.getComputedStyle(element);
          const offsets = {
            padding: {
              left: parseInt(style.paddingLeft, 10),
              top: parseInt(style.paddingTop, 10),
              right: parseInt(style.paddingRight, 10),
              bottom: parseInt(style.paddingBottom, 10)
            },
            margin: {
              left: -parseInt(style.marginLeft, 10),
              top: -parseInt(style.marginTop, 10),
              right: -parseInt(style.marginRight, 10),
              bottom: -parseInt(style.marginBottom, 10)
            },
            border: {
              left: parseInt(style.borderLeft, 10),
              top: parseInt(style.borderTop, 10),
              right: parseInt(style.borderRight, 10),
              bottom: parseInt(style.borderBottom, 10)
            }
          };
          const border = [
            { x: rect.left, y: rect.top },
            { x: rect.left + rect.width, y: rect.top },
            { x: rect.left + rect.width, y: rect.top + rect.bottom },
            { x: rect.left, y: rect.top + rect.bottom }
          ];
          const padding = transformQuadWithOffsets(border, offsets.border);
          const content = transformQuadWithOffsets(padding, offsets.padding);
          const margin = transformQuadWithOffsets(border, offsets.margin);
          return {
            content,
            padding,
            border,
            margin,
            width: rect.width,
            height: rect.height
          };
          function transformQuadWithOffsets(quad, offsets2) {
            return [
              {
                x: quad[0].x + offsets2.left,
                y: quad[0].y + offsets2.top
              },
              {
                x: quad[1].x - offsets2.right,
                y: quad[1].y + offsets2.top
              },
              {
                x: quad[2].x - offsets2.right,
                y: quad[2].y - offsets2.bottom
              },
              {
                x: quad[3].x + offsets2.left,
                y: quad[3].y - offsets2.bottom
              }
            ];
          }
        });
        if (!model) {
          return null;
        }
        const offset = await __privateMethod(this, _getTopLeftCornerOfFrame, getTopLeftCornerOfFrame_fn).call(this);
        if (!offset) {
          return null;
        }
        for (const attribute of [
          "content",
          "padding",
          "border",
          "margin"
        ]) {
          for (const point of model[attribute]) {
            point.x += offset.x;
            point.y += offset.y;
          }
        }
        return model;
      }
      async screenshot(options = {}) {
        const env_6 = { stack: [], error: void 0, hasError: false };
        try {
          const { scrollIntoView = true, captureBeyondViewport = true, allowViewportExpansion = captureBeyondViewport } = options;
          let clip = await __privateMethod(this, _nonEmptyVisibleBoundingBox, nonEmptyVisibleBoundingBox_fn).call(this);
          const page = this.frame.page();
          const _ = __addDisposableResource$2(env_6, allowViewportExpansion && clip ? await page._createTemporaryViewportContainingBox(clip) : null, true);
          if (scrollIntoView) {
            await this.scrollIntoViewIfNeeded();
            clip = await __privateMethod(this, _nonEmptyVisibleBoundingBox, nonEmptyVisibleBoundingBox_fn).call(this);
          }
          const [pageLeft, pageTop] = await this.evaluate(() => {
            if (!window.visualViewport) {
              throw new Error("window.visualViewport is not supported.");
            }
            return [
              window.visualViewport.pageLeft,
              window.visualViewport.pageTop
            ];
          });
          clip.x += pageLeft;
          clip.y += pageTop;
          return await page.screenshot({
            ...options,
            captureBeyondViewport: false,
            clip
          });
        } catch (e_6) {
          env_6.error = e_6;
          env_6.hasError = true;
        } finally {
          const result_1 = __disposeResources$2(env_6);
          if (result_1)
            await result_1;
        }
      }
      /**
       * @internal
       */
      async assertConnectedElement() {
        const error = await this.evaluate(async (element) => {
          if (!element.isConnected) {
            return "Node is detached from document";
          }
          if (element.nodeType !== Node.ELEMENT_NODE) {
            return "Node is not of type HTMLElement";
          }
          return;
        });
        if (error) {
          throw new Error(error);
        }
      }
      /**
       * @internal
       */
      async scrollIntoViewIfNeeded() {
        if (await this.isIntersectingViewport({
          threshold: 1
        })) {
          return;
        }
        await this.scrollIntoView();
      }
      /**
       * Resolves to true if the element is visible in the current viewport. If an
       * element is an SVG, we check if the svg owner element is in the viewport
       * instead. See https://crbug.com/963246.
       *
       * @param options - Threshold for the intersection between 0 (no intersection) and 1
       * (full intersection). Defaults to 1.
       */
      async isIntersectingViewport(options = {}) {
        var _a4;
        const env_7 = { stack: [], error: void 0, hasError: false };
        try {
          await this.assertConnectedElement();
          const handle = await __privateMethod(this, _asSVGElementHandle, asSVGElementHandle_fn).call(this);
          const target = __addDisposableResource$2(env_7, handle && await __privateMethod(_a4 = handle, _getOwnerSVGElement, getOwnerSVGElement_fn).call(_a4), false);
          return await (target ?? this).evaluate(async (element, threshold) => {
            const visibleRatio = await new Promise((resolve) => {
              const observer = new IntersectionObserver((entries) => {
                resolve(entries[0].intersectionRatio);
                observer.disconnect();
              });
              observer.observe(element);
            });
            return threshold === 1 ? visibleRatio === 1 : visibleRatio > threshold;
          }, options.threshold ?? 0);
        } catch (e_7) {
          env_7.error = e_7;
          env_7.hasError = true;
        } finally {
          __disposeResources$2(env_7);
        }
      }
      /**
       * Scrolls the element into view using either the automation protocol client
       * or by calling element.scrollIntoView.
       */
      async scrollIntoView() {
        await this.assertConnectedElement();
        await this.evaluate(async (element) => {
          element.scrollIntoView({
            block: "center",
            inline: "center",
            behavior: "instant"
          });
        });
      }
    }, _checkVisibility = new WeakSet(), checkVisibility_fn = async function(visibility) {
      return await this.evaluate(async (element, PuppeteerUtil, visibility2) => {
        return Boolean(PuppeteerUtil.checkVisibility(element, visibility2));
      }, LazyArg_js_1$2.LazyArg.create((context) => {
        return context.puppeteerUtil;
      }), visibility);
    }, _clickableBox = new WeakSet(), clickableBox_fn = async function() {
      var _a4;
      const boxes = await this.evaluate((element) => {
        if (!(element instanceof Element)) {
          return null;
        }
        return [...element.getClientRects()].map((rect) => {
          return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
        });
      });
      if (!(boxes == null ? void 0 : boxes.length)) {
        return null;
      }
      await __privateMethod(this, _intersectBoundingBoxesWithFrame, intersectBoundingBoxesWithFrame_fn).call(this, boxes);
      let frame = this.frame;
      let parentFrame;
      while (parentFrame = frame == null ? void 0 : frame.parentFrame()) {
        const env_4 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource$2(env_4, await frame.frameElement(), false);
          if (!handle) {
            throw new Error("Unsupported frame type");
          }
          const parentBox = await handle.evaluate((element) => {
            if (element.getClientRects().length === 0) {
              return null;
            }
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return {
              left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
              top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
            };
          });
          if (!parentBox) {
            return null;
          }
          for (const box2 of boxes) {
            box2.x += parentBox.left;
            box2.y += parentBox.top;
          }
          await __privateMethod(_a4 = handle, _intersectBoundingBoxesWithFrame, intersectBoundingBoxesWithFrame_fn).call(_a4, boxes);
          frame = parentFrame;
        } catch (e_4) {
          env_4.error = e_4;
          env_4.hasError = true;
        } finally {
          __disposeResources$2(env_4);
        }
      }
      const box = boxes.find((box2) => {
        return box2.width >= 1 && box2.height >= 1;
      });
      if (!box) {
        return null;
      }
      return {
        x: box.x,
        y: box.y,
        height: box.height,
        width: box.width
      };
    }, _intersectBoundingBoxesWithFrame = new WeakSet(), intersectBoundingBoxesWithFrame_fn = async function(boxes) {
      const { documentWidth, documentHeight } = await this.frame.isolatedRealm().evaluate(() => {
        return {
          documentWidth: document.documentElement.clientWidth,
          documentHeight: document.documentElement.clientHeight
        };
      });
      for (const box of boxes) {
        intersectBoundingBox(box, documentWidth, documentHeight);
      }
    }, _getTopLeftCornerOfFrame = new WeakSet(), getTopLeftCornerOfFrame_fn = async function() {
      const point = { x: 0, y: 0 };
      let frame = this.frame;
      let parentFrame;
      while (parentFrame = frame == null ? void 0 : frame.parentFrame()) {
        const env_5 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource$2(env_5, await frame.frameElement(), false);
          if (!handle) {
            throw new Error("Unsupported frame type");
          }
          const parentBox = await handle.evaluate((element) => {
            if (element.getClientRects().length === 0) {
              return null;
            }
            const rect = element.getBoundingClientRect();
            const style = window.getComputedStyle(element);
            return {
              left: rect.left + parseInt(style.paddingLeft, 10) + parseInt(style.borderLeftWidth, 10),
              top: rect.top + parseInt(style.paddingTop, 10) + parseInt(style.borderTopWidth, 10)
            };
          });
          if (!parentBox) {
            return null;
          }
          point.x += parentBox.left;
          point.y += parentBox.top;
          frame = parentFrame;
        } catch (e_5) {
          env_5.error = e_5;
          env_5.hasError = true;
        } finally {
          __disposeResources$2(env_5);
        }
      }
      return point;
    }, _nonEmptyVisibleBoundingBox = new WeakSet(), nonEmptyVisibleBoundingBox_fn = async function() {
      const box = await this.boundingBox();
      (0, assert_js_1$c.assert)(box, "Node is either not visible or not an HTMLElement");
      (0, assert_js_1$c.assert)(box.width !== 0, "Node has 0 width.");
      (0, assert_js_1$c.assert)(box.height !== 0, "Node has 0 height.");
      return box;
    }, _asSVGElementHandle = new WeakSet(), asSVGElementHandle_fn = async function() {
      if (await this.evaluate((element) => {
        return element instanceof SVGElement;
      })) {
        return this;
      } else {
        return null;
      }
    }, _getOwnerSVGElement = new WeakSet(), getOwnerSVGElement_fn = async function() {
      return await this.evaluateHandle((element) => {
        if (element instanceof SVGSVGElement) {
          return element;
        }
        return element.ownerSVGElement;
      });
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _getProperty_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_a2 = _a3).bindIsolatedHandle.bind(_a2)];
      _getProperties_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_b = _a3).bindIsolatedHandle.bind(_b)];
      _jsonValue_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_c = _a3).bindIsolatedHandle.bind(_c)];
      _$_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_d = _a3).bindIsolatedHandle.bind(_d)];
      _$$_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_e = _a3).bindIsolatedHandle.bind(_e)];
      _$x_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_f = _a3).bindIsolatedHandle.bind(_f)];
      _waitForSelector_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_g = _a3).bindIsolatedHandle.bind(_g)];
      _isVisible_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_h = _a3).bindIsolatedHandle.bind(_h)];
      _isHidden_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_j = _a3).bindIsolatedHandle.bind(_j)];
      _waitForXPath_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_k = _a3).bindIsolatedHandle.bind(_k)];
      _toElement_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_l = _a3).bindIsolatedHandle.bind(_l)];
      _clickablePoint_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_m = _a3).bindIsolatedHandle.bind(_m)];
      _hover_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_o = _a3).bindIsolatedHandle.bind(_o)];
      _click_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_p = _a3).bindIsolatedHandle.bind(_p)];
      _drag_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_q = _a3).bindIsolatedHandle.bind(_q)];
      _dragEnter_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_r = _a3).bindIsolatedHandle.bind(_r)];
      _dragOver_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_s = _a3).bindIsolatedHandle.bind(_s)];
      _drop_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_t = _a3).bindIsolatedHandle.bind(_t)];
      _dragAndDrop_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_u = _a3).bindIsolatedHandle.bind(_u)];
      _select_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_v = _a3).bindIsolatedHandle.bind(_v)];
      _tap_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_w = _a3).bindIsolatedHandle.bind(_w)];
      _touchStart_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_x = _a3).bindIsolatedHandle.bind(_x)];
      _touchMove_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_y = _a3).bindIsolatedHandle.bind(_y)];
      _touchEnd_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_z = _a3).bindIsolatedHandle.bind(_z)];
      _focus_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_0 = _a3).bindIsolatedHandle.bind(_0)];
      _type_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_1 = _a3).bindIsolatedHandle.bind(_1)];
      _press_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_2 = _a3).bindIsolatedHandle.bind(_2)];
      _boundingBox_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_3 = _a3).bindIsolatedHandle.bind(_3)];
      _boxModel_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_4 = _a3).bindIsolatedHandle.bind(_4)];
      _screenshot_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_5 = _a3).bindIsolatedHandle.bind(_5)];
      _isIntersectingViewport_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_6 = _a3).bindIsolatedHandle.bind(_6)];
      _scrollIntoView_decorators = [(0, decorators_js_1$1.throwIfDisposed)(), (_7 = _a3).bindIsolatedHandle.bind(_7)];
      __esDecorate$2(_a3, null, _getProperty_decorators, { kind: "method", name: "getProperty", static: false, private: false, access: { has: (obj) => "getProperty" in obj, get: (obj) => obj.getProperty }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _getProperties_decorators, { kind: "method", name: "getProperties", static: false, private: false, access: { has: (obj) => "getProperties" in obj, get: (obj) => obj.getProperties }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _jsonValue_decorators, { kind: "method", name: "jsonValue", static: false, private: false, access: { has: (obj) => "jsonValue" in obj, get: (obj) => obj.jsonValue }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _$_decorators, { kind: "method", name: "$", static: false, private: false, access: { has: (obj) => "$" in obj, get: (obj) => obj.$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _$$_decorators, { kind: "method", name: "$$", static: false, private: false, access: { has: (obj) => "$$" in obj, get: (obj) => obj.$$ }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _$x_decorators, { kind: "method", name: "$x", static: false, private: false, access: { has: (obj) => "$x" in obj, get: (obj) => obj.$x }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _waitForSelector_decorators, { kind: "method", name: "waitForSelector", static: false, private: false, access: { has: (obj) => "waitForSelector" in obj, get: (obj) => obj.waitForSelector }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _isVisible_decorators, { kind: "method", name: "isVisible", static: false, private: false, access: { has: (obj) => "isVisible" in obj, get: (obj) => obj.isVisible }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _isHidden_decorators, { kind: "method", name: "isHidden", static: false, private: false, access: { has: (obj) => "isHidden" in obj, get: (obj) => obj.isHidden }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _waitForXPath_decorators, { kind: "method", name: "waitForXPath", static: false, private: false, access: { has: (obj) => "waitForXPath" in obj, get: (obj) => obj.waitForXPath }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _toElement_decorators, { kind: "method", name: "toElement", static: false, private: false, access: { has: (obj) => "toElement" in obj, get: (obj) => obj.toElement }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _clickablePoint_decorators, { kind: "method", name: "clickablePoint", static: false, private: false, access: { has: (obj) => "clickablePoint" in obj, get: (obj) => obj.clickablePoint }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _hover_decorators, { kind: "method", name: "hover", static: false, private: false, access: { has: (obj) => "hover" in obj, get: (obj) => obj.hover }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _click_decorators, { kind: "method", name: "click", static: false, private: false, access: { has: (obj) => "click" in obj, get: (obj) => obj.click }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _drag_decorators, { kind: "method", name: "drag", static: false, private: false, access: { has: (obj) => "drag" in obj, get: (obj) => obj.drag }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _dragEnter_decorators, { kind: "method", name: "dragEnter", static: false, private: false, access: { has: (obj) => "dragEnter" in obj, get: (obj) => obj.dragEnter }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _dragOver_decorators, { kind: "method", name: "dragOver", static: false, private: false, access: { has: (obj) => "dragOver" in obj, get: (obj) => obj.dragOver }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _drop_decorators, { kind: "method", name: "drop", static: false, private: false, access: { has: (obj) => "drop" in obj, get: (obj) => obj.drop }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _dragAndDrop_decorators, { kind: "method", name: "dragAndDrop", static: false, private: false, access: { has: (obj) => "dragAndDrop" in obj, get: (obj) => obj.dragAndDrop }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _select_decorators, { kind: "method", name: "select", static: false, private: false, access: { has: (obj) => "select" in obj, get: (obj) => obj.select }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _tap_decorators, { kind: "method", name: "tap", static: false, private: false, access: { has: (obj) => "tap" in obj, get: (obj) => obj.tap }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _touchStart_decorators, { kind: "method", name: "touchStart", static: false, private: false, access: { has: (obj) => "touchStart" in obj, get: (obj) => obj.touchStart }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _touchMove_decorators, { kind: "method", name: "touchMove", static: false, private: false, access: { has: (obj) => "touchMove" in obj, get: (obj) => obj.touchMove }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _touchEnd_decorators, { kind: "method", name: "touchEnd", static: false, private: false, access: { has: (obj) => "touchEnd" in obj, get: (obj) => obj.touchEnd }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _focus_decorators, { kind: "method", name: "focus", static: false, private: false, access: { has: (obj) => "focus" in obj, get: (obj) => obj.focus }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _type_decorators, { kind: "method", name: "type", static: false, private: false, access: { has: (obj) => "type" in obj, get: (obj) => obj.type }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _press_decorators, { kind: "method", name: "press", static: false, private: false, access: { has: (obj) => "press" in obj, get: (obj) => obj.press }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _boundingBox_decorators, { kind: "method", name: "boundingBox", static: false, private: false, access: { has: (obj) => "boundingBox" in obj, get: (obj) => obj.boundingBox }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _boxModel_decorators, { kind: "method", name: "boxModel", static: false, private: false, access: { has: (obj) => "boxModel" in obj, get: (obj) => obj.boxModel }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _screenshot_decorators, { kind: "method", name: "screenshot", static: false, private: false, access: { has: (obj) => "screenshot" in obj, get: (obj) => obj.screenshot }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _isIntersectingViewport_decorators, { kind: "method", name: "isIntersectingViewport", static: false, private: false, access: { has: (obj) => "isIntersectingViewport" in obj, get: (obj) => obj.isIntersectingViewport }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$2(_a3, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: (obj) => "scrollIntoView" in obj, get: (obj) => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })(), _a3;
  })();
  ElementHandle$1.ElementHandle = ElementHandle;
  function intersectBoundingBox(box, width, height) {
    box.width = Math.max(box.x >= 0 ? Math.min(width - box.x, box.width) : Math.min(width, box.width + box.x), 0);
    box.height = Math.max(box.y >= 0 ? Math.min(height - box.y, box.height) : Math.min(height, box.height + box.y), 0);
  }
  var JSHandle = {};
  Object.defineProperty(JSHandle, "__esModule", { value: true });
  JSHandle.releaseObject = JSHandle.CdpJSHandle = void 0;
  const JSHandle_js_1$4 = JSHandle$2;
  const util_js_1$c = require$$2$1;
  class CdpJSHandle extends JSHandle_js_1$4.JSHandle {
    constructor(world, remoteObject) {
      super();
      __privateAdd(this, _disposed, false);
      __privateAdd(this, _remoteObject, void 0);
      __privateAdd(this, _world, void 0);
      __privateSet(this, _world, world);
      __privateSet(this, _remoteObject, remoteObject);
    }
    get disposed() {
      return __privateGet(this, _disposed);
    }
    get realm() {
      return __privateGet(this, _world);
    }
    get client() {
      return this.realm.environment.client;
    }
    async jsonValue() {
      if (!__privateGet(this, _remoteObject).objectId) {
        return (0, util_js_1$c.valueFromRemoteObject)(__privateGet(this, _remoteObject));
      }
      const value = await this.evaluate((object) => {
        return object;
      });
      if (value === void 0) {
        throw new Error("Could not serialize referenced object");
      }
      return value;
    }
    /**
     * Either `null` or the handle itself if the handle is an
     * instance of {@link ElementHandle}.
     */
    asElement() {
      return null;
    }
    async dispose() {
      if (__privateGet(this, _disposed)) {
        return;
      }
      __privateSet(this, _disposed, true);
      await releaseObject(this.client, __privateGet(this, _remoteObject));
    }
    toString() {
      if (!__privateGet(this, _remoteObject).objectId) {
        return "JSHandle:" + (0, util_js_1$c.valueFromRemoteObject)(__privateGet(this, _remoteObject));
      }
      const type = __privateGet(this, _remoteObject).subtype || __privateGet(this, _remoteObject).type;
      return "JSHandle@" + type;
    }
    get id() {
      return __privateGet(this, _remoteObject).objectId;
    }
    remoteObject() {
      return __privateGet(this, _remoteObject);
    }
  }
  _disposed = new WeakMap();
  _remoteObject = new WeakMap();
  _world = new WeakMap();
  JSHandle.CdpJSHandle = CdpJSHandle;
  async function releaseObject(client, remoteObject) {
    if (!remoteObject.objectId) {
      return;
    }
    await client.send("Runtime.releaseObject", { objectId: remoteObject.objectId }).catch((error) => {
      (0, util_js_1$c.debugError)(error);
    });
  }
  JSHandle.releaseObject = releaseObject;
  const __viteBrowserExternal = {};
  const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: __viteBrowserExternal
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$5 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
  var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __runInitializers$1 = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate$1 = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule)
      return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
  };
  Object.defineProperty(ElementHandle$2, "__esModule", { value: true });
  ElementHandle$2.CdpElementHandle = void 0;
  const ElementHandle_js_1$1 = ElementHandle$1;
  const util_js_1$b = require$$2$1;
  const assert_js_1$b = assert$1;
  const decorators_js_1 = decorators;
  const JSHandle_js_1$3 = JSHandle;
  let CdpElementHandle = (() => {
    var _frameManager3, frameManager_get, _a3;
    var _a2, _b;
    let _classSuper = ElementHandle_js_1$1.ElementHandle;
    let _instanceExtraInitializers = [];
    let _contentFrame_decorators;
    let _scrollIntoView_decorators;
    let _uploadFile_decorators;
    let _autofill_decorators;
    return _a3 = class extends _classSuper {
      constructor(world, remoteObject) {
        super(new JSHandle_js_1$3.CdpJSHandle(world, remoteObject));
        __privateAdd(this, _frameManager3);
        __runInitializers$1(this, _instanceExtraInitializers);
      }
      get realm() {
        return this.handle.realm;
      }
      get client() {
        return this.handle.client;
      }
      remoteObject() {
        return this.handle.remoteObject();
      }
      get frame() {
        return this.realm.environment;
      }
      async contentFrame() {
        const nodeInfo = await this.client.send("DOM.describeNode", {
          objectId: this.id
        });
        if (typeof nodeInfo.node.frameId !== "string") {
          return null;
        }
        return __privateGet(this, _frameManager3, frameManager_get).frame(nodeInfo.node.frameId);
      }
      async scrollIntoView() {
        await this.assertConnectedElement();
        try {
          await this.client.send("DOM.scrollIntoViewIfNeeded", {
            objectId: this.id
          });
        } catch (error) {
          (0, util_js_1$b.debugError)(error);
          await super.scrollIntoView();
        }
      }
      async uploadFile(...filePaths) {
        const isMultiple = await this.evaluate((element) => {
          return element.multiple;
        });
        (0, assert_js_1$b.assert)(filePaths.length <= 1 || isMultiple, "Multiple file uploads only work with <input type=file multiple>");
        let path;
        try {
          path = await Promise.resolve().then(() => __importStar(require$$5));
        } catch (error) {
          if (error instanceof TypeError) {
            throw new Error(`JSHandle#uploadFile can only be used in Node-like environments.`);
          }
          throw error;
        }
        const files = filePaths.map((filePath) => {
          if (path.win32.isAbsolute(filePath) || path.posix.isAbsolute(filePath)) {
            return filePath;
          } else {
            return path.resolve(filePath);
          }
        });
        if (files.length === 0) {
          await this.evaluate((element) => {
            element.files = new DataTransfer().files;
            element.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
            element.dispatchEvent(new Event("change", { bubbles: true }));
          });
          return;
        }
        const { node: { backendNodeId } } = await this.client.send("DOM.describeNode", {
          objectId: this.id
        });
        await this.client.send("DOM.setFileInputFiles", {
          objectId: this.id,
          files,
          backendNodeId
        });
      }
      async autofill(data) {
        const nodeInfo = await this.client.send("DOM.describeNode", {
          objectId: this.handle.id
        });
        const fieldId = nodeInfo.node.backendNodeId;
        const frameId = this.frame._id;
        await this.client.send("Autofill.trigger", {
          fieldId,
          frameId,
          card: data.creditCard
        });
      }
    }, _frameManager3 = new WeakSet(), frameManager_get = function() {
      return this.frame._frameManager;
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      _contentFrame_decorators = [(0, decorators_js_1.throwIfDisposed)()];
      _scrollIntoView_decorators = [(0, decorators_js_1.throwIfDisposed)(), (_a2 = ElementHandle_js_1$1.ElementHandle).bindIsolatedHandle.bind(_a2)];
      _uploadFile_decorators = [(0, decorators_js_1.throwIfDisposed)(), (_b = ElementHandle_js_1$1.ElementHandle).bindIsolatedHandle.bind(_b)];
      _autofill_decorators = [(0, decorators_js_1.throwIfDisposed)()];
      __esDecorate$1(_a3, null, _contentFrame_decorators, { kind: "method", name: "contentFrame", static: false, private: false, access: { has: (obj) => "contentFrame" in obj, get: (obj) => obj.contentFrame }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$1(_a3, null, _scrollIntoView_decorators, { kind: "method", name: "scrollIntoView", static: false, private: false, access: { has: (obj) => "scrollIntoView" in obj, get: (obj) => obj.scrollIntoView }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$1(_a3, null, _uploadFile_decorators, { kind: "method", name: "uploadFile", static: false, private: false, access: { has: (obj) => "uploadFile" in obj, get: (obj) => obj.uploadFile }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate$1(_a3, null, _autofill_decorators, { kind: "method", name: "autofill", static: false, private: false, access: { has: (obj) => "autofill" in obj, get: (obj) => obj.autofill }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(_a3, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })(), _a3;
  })();
  ElementHandle$2.CdpElementHandle = CdpElementHandle;
  Object.defineProperty(ExecutionContext$1, "__esModule", { value: true });
  ExecutionContext$1.createCdpHandle = ExecutionContext$1.ExecutionContext = void 0;
  const LazyArg_js_1$1 = LazyArg$1;
  const ScriptInjector_js_1 = ScriptInjector$1;
  const util_js_1$a = require$$2$1;
  const AsyncIterableUtil_js_1 = AsyncIterableUtil$1;
  const Function_js_1$1 = _Function;
  const AriaQueryHandler_js_1 = AriaQueryHandler;
  const Binding_js_1$1 = Binding$1;
  const ElementHandle_js_1 = ElementHandle$2;
  const JSHandle_js_1$2 = JSHandle;
  class ExecutionContext {
    constructor(client, contextPayload, world) {
      __privateAdd(this, _installGlobalBinding);
      __privateAdd(this, _evaluate);
      __publicField(this, "_client");
      __publicField(this, "_world");
      __publicField(this, "_contextId");
      __publicField(this, "_contextName");
      __privateAdd(this, _bindingsInstalled, false);
      __privateAdd(this, _puppeteerUtil, void 0);
      this._client = client;
      this._world = world;
      this._contextId = contextPayload.id;
      if (contextPayload.name) {
        this._contextName = contextPayload.name;
      }
    }
    get puppeteerUtil() {
      let promise = Promise.resolve();
      if (!__privateGet(this, _bindingsInstalled)) {
        promise = Promise.all([
          __privateMethod(this, _installGlobalBinding, installGlobalBinding_fn).call(this, new Binding_js_1$1.Binding("__ariaQuerySelector", AriaQueryHandler_js_1.ARIAQueryHandler.queryOne)),
          __privateMethod(this, _installGlobalBinding, installGlobalBinding_fn).call(this, new Binding_js_1$1.Binding("__ariaQuerySelectorAll", async (element, selector) => {
            const results = AriaQueryHandler_js_1.ARIAQueryHandler.queryAll(element, selector);
            return await element.realm.evaluateHandle((...elements) => {
              return elements;
            }, ...await AsyncIterableUtil_js_1.AsyncIterableUtil.collect(results));
          }))
        ]);
        __privateSet(this, _bindingsInstalled, true);
      }
      ScriptInjector_js_1.scriptInjector.inject((script) => {
        if (__privateGet(this, _puppeteerUtil)) {
          void __privateGet(this, _puppeteerUtil).then((handle) => {
            void handle.dispose();
          });
        }
        __privateSet(this, _puppeteerUtil, promise.then(() => {
          return this.evaluateHandle(script);
        }));
      }, !__privateGet(this, _puppeteerUtil));
      return __privateGet(this, _puppeteerUtil);
    }
    /**
     * Evaluates the given function.
     *
     * @example
     *
     * ```ts
     * const executionContext = await page.mainFrame().executionContext();
     * const result = await executionContext.evaluate(() => Promise.resolve(8 * 7))* ;
     * console.log(result); // prints "56"
     * ```
     *
     * @example
     * A string can also be passed in instead of a function:
     *
     * ```ts
     * console.log(await executionContext.evaluate('1 + 2')); // prints "3"
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const oneHandle = await executionContext.evaluateHandle(() => 1);
     * const twoHandle = await executionContext.evaluateHandle(() => 2);
     * const result = await executionContext.evaluate(
     *   (a, b) => a + b,
     *   oneHandle,
     *   twoHandle
     * );
     * await oneHandle.dispose();
     * await twoHandle.dispose();
     * console.log(result); // prints '3'.
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns The result of evaluating the function. If the result is an object,
     * a vanilla object containing the serializable properties of the result is
     * returned.
     */
    async evaluate(pageFunction, ...args) {
      return await __privateMethod(this, _evaluate, evaluate_fn).call(this, true, pageFunction, ...args);
    }
    /**
     * Evaluates the given function.
     *
     * Unlike {@link ExecutionContext.evaluate | evaluate}, this method returns a
     * handle to the result of the function.
     *
     * This method may be better suited if the object cannot be serialized (e.g.
     * `Map`) and requires further manipulation.
     *
     * @example
     *
     * ```ts
     * const context = await page.mainFrame().executionContext();
     * const handle: JSHandle<typeof globalThis> = await context.evaluateHandle(
     *   () => Promise.resolve(self)
     * );
     * ```
     *
     * @example
     * A string can also be passed in instead of a function.
     *
     * ```ts
     * const handle: JSHandle<number> = await context.evaluateHandle('1 + 2');
     * ```
     *
     * @example
     * Handles can also be passed as `args`. They resolve to their referenced object:
     *
     * ```ts
     * const bodyHandle: ElementHandle<HTMLBodyElement> =
     *   await context.evaluateHandle(() => {
     *     return document.body;
     *   });
     * const stringHandle: JSHandle<string> = await context.evaluateHandle(
     *   body => body.innerHTML,
     *   body
     * );
     * console.log(await stringHandle.jsonValue()); // prints body's innerHTML
     * // Always dispose your garbage! :)
     * await bodyHandle.dispose();
     * await stringHandle.dispose();
     * ```
     *
     * @param pageFunction - The function to evaluate.
     * @param args - Additional arguments to pass into the function.
     * @returns A {@link JSHandle | handle} to the result of evaluating the
     * function. If the result is a `Node`, then this will return an
     * {@link ElementHandle | element handle}.
     */
    async evaluateHandle(pageFunction, ...args) {
      return await __privateMethod(this, _evaluate, evaluate_fn).call(this, false, pageFunction, ...args);
    }
  }
  _bindingsInstalled = new WeakMap();
  _puppeteerUtil = new WeakMap();
  _installGlobalBinding = new WeakSet();
  installGlobalBinding_fn = async function(binding) {
    try {
      if (this._world) {
        this._world._bindings.set(binding.name, binding);
        await this._world._addBindingToContext(this, binding.name);
      }
    } catch {
    }
  };
  _evaluate = new WeakSet();
  evaluate_fn = async function(returnByValue, pageFunction, ...args) {
    var _a2;
    const sourceUrlComment = (0, util_js_1$a.getSourceUrlComment)(((_a2 = (0, util_js_1$a.getSourcePuppeteerURLIfAvailable)(pageFunction)) == null ? void 0 : _a2.toString()) ?? util_js_1$a.PuppeteerURL.INTERNAL_URL);
    if ((0, util_js_1$a.isString)(pageFunction)) {
      const contextId = this._contextId;
      const expression = pageFunction;
      const expressionWithSourceUrl = util_js_1$a.SOURCE_URL_REGEX.test(expression) ? expression : `${expression}
${sourceUrlComment}
`;
      const { exceptionDetails: exceptionDetails2, result: remoteObject2 } = await this._client.send("Runtime.evaluate", {
        expression: expressionWithSourceUrl,
        contextId,
        returnByValue,
        awaitPromise: true,
        userGesture: true
      }).catch(rewriteError);
      if (exceptionDetails2) {
        throw (0, util_js_1$a.createEvaluationError)(exceptionDetails2);
      }
      return returnByValue ? (0, util_js_1$a.valueFromRemoteObject)(remoteObject2) : createCdpHandle(this._world, remoteObject2);
    }
    const functionDeclaration = (0, Function_js_1$1.stringifyFunction)(pageFunction);
    const functionDeclarationWithSourceUrl = util_js_1$a.SOURCE_URL_REGEX.test(functionDeclaration) ? functionDeclaration : `${functionDeclaration}
${sourceUrlComment}
`;
    let callFunctionOnPromise;
    try {
      callFunctionOnPromise = this._client.send("Runtime.callFunctionOn", {
        functionDeclaration: functionDeclarationWithSourceUrl,
        executionContextId: this._contextId,
        arguments: await Promise.all(args.map(convertArgument.bind(this))),
        returnByValue,
        awaitPromise: true,
        userGesture: true
      });
    } catch (error) {
      if (error instanceof TypeError && error.message.startsWith("Converting circular structure to JSON")) {
        error.message += " Recursive objects are not allowed.";
      }
      throw error;
    }
    const { exceptionDetails, result: remoteObject } = await callFunctionOnPromise.catch(rewriteError);
    if (exceptionDetails) {
      throw (0, util_js_1$a.createEvaluationError)(exceptionDetails);
    }
    return returnByValue ? (0, util_js_1$a.valueFromRemoteObject)(remoteObject) : createCdpHandle(this._world, remoteObject);
    async function convertArgument(arg) {
      if (arg instanceof LazyArg_js_1$1.LazyArg) {
        arg = await arg.get(this);
      }
      if (typeof arg === "bigint") {
        return { unserializableValue: `${arg.toString()}n` };
      }
      if (Object.is(arg, -0)) {
        return { unserializableValue: "-0" };
      }
      if (Object.is(arg, Infinity)) {
        return { unserializableValue: "Infinity" };
      }
      if (Object.is(arg, -Infinity)) {
        return { unserializableValue: "-Infinity" };
      }
      if (Object.is(arg, NaN)) {
        return { unserializableValue: "NaN" };
      }
      const objectHandle = arg && (arg instanceof JSHandle_js_1$2.CdpJSHandle || arg instanceof ElementHandle_js_1.CdpElementHandle) ? arg : null;
      if (objectHandle) {
        if (objectHandle.realm !== this._world) {
          throw new Error("JSHandles can be evaluated only in the context they were created!");
        }
        if (objectHandle.disposed) {
          throw new Error("JSHandle is disposed!");
        }
        if (objectHandle.remoteObject().unserializableValue) {
          return {
            unserializableValue: objectHandle.remoteObject().unserializableValue
          };
        }
        if (!objectHandle.remoteObject().objectId) {
          return { value: objectHandle.remoteObject().value };
        }
        return { objectId: objectHandle.remoteObject().objectId };
      }
      return { value: arg };
    }
  };
  ExecutionContext$1.ExecutionContext = ExecutionContext;
  const rewriteError = (error) => {
    if (error.message.includes("Object reference chain is too long")) {
      return { result: { type: "undefined" } };
    }
    if (error.message.includes("Object couldn't be returned by value")) {
      return { result: { type: "undefined" } };
    }
    if (error.message.endsWith("Cannot find context with specified id") || error.message.endsWith("Inspected target navigated or closed")) {
      throw new Error("Execution context was destroyed, most likely because of a navigation.");
    }
    throw error;
  };
  function createCdpHandle(realm, remoteObject) {
    if (remoteObject.subtype === "node") {
      return new ElementHandle_js_1.CdpElementHandle(realm, remoteObject);
    }
    return new JSHandle_js_1$2.CdpJSHandle(realm, remoteObject);
  }
  ExecutionContext$1.createCdpHandle = createCdpHandle;
  var FirefoxTargetManager$1 = {};
  Object.defineProperty(FirefoxTargetManager$1, "__esModule", { value: true });
  FirefoxTargetManager$1.FirefoxTargetManager = void 0;
  const CDPSession_js_1$6 = CDPSession$2;
  const EventEmitter_js_1$5 = EventEmitter$1;
  const assert_js_1$a = assert$1;
  const Deferred_js_1$c = Deferred$1;
  class FirefoxTargetManager extends EventEmitter_js_1$5.EventEmitter {
    constructor(connection, targetFactory, targetFilterCallback) {
      super();
      __privateAdd(this, _finishInitializationIfReady);
      __privateAdd(this, _connection2, void 0);
      /**
       * Keeps track of the following events: 'Target.targetCreated',
       * 'Target.targetDestroyed'.
       *
       * A target becomes discovered when 'Target.targetCreated' is received.
       * A target is removed from this map once 'Target.targetDestroyed' is
       * received.
       *
       * `targetFilterCallback` has no effect on this map.
       */
      __privateAdd(this, _discoveredTargetsByTargetId, /* @__PURE__ */ new Map());
      /**
       * Keeps track of targets that were created via 'Target.targetCreated'
       * and which one are not filtered out by `targetFilterCallback`.
       *
       * The target is removed from here once it's been destroyed.
       */
      __privateAdd(this, _availableTargetsByTargetId, /* @__PURE__ */ new Map());
      /**
       * Tracks which sessions attach to which target.
       */
      __privateAdd(this, _availableTargetsBySessionId, /* @__PURE__ */ new Map());
      /**
       * If a target was filtered out by `targetFilterCallback`, we still receive
       * events about it from CDP, but we don't forward them to the rest of Puppeteer.
       */
      __privateAdd(this, _ignoredTargets, /* @__PURE__ */ new Set());
      __privateAdd(this, _targetFilterCallback, void 0);
      __privateAdd(this, _targetFactory, void 0);
      __privateAdd(this, _attachedToTargetListenersBySession, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _initializeDeferred, Deferred_js_1$c.Deferred.create());
      __privateAdd(this, _targetsIdsForInit, /* @__PURE__ */ new Set());
      __privateAdd(this, _onSessionDetached, (session) => {
        this.removeSessionListeners(session);
        __privateGet(this, _availableTargetsBySessionId).delete(session.id());
      });
      __privateAdd(this, _onTargetCreated, async (event) => {
        if (__privateGet(this, _discoveredTargetsByTargetId).has(event.targetInfo.targetId)) {
          return;
        }
        __privateGet(this, _discoveredTargetsByTargetId).set(event.targetInfo.targetId, event.targetInfo);
        if (event.targetInfo.type === "browser" && event.targetInfo.attached) {
          const target2 = __privateGet(this, _targetFactory).call(this, event.targetInfo, void 0);
          target2._initialize();
          __privateGet(this, _availableTargetsByTargetId).set(event.targetInfo.targetId, target2);
          __privateMethod(this, _finishInitializationIfReady, finishInitializationIfReady_fn).call(this, target2._targetId);
          return;
        }
        const target = __privateGet(this, _targetFactory).call(this, event.targetInfo, void 0);
        if (__privateGet(this, _targetFilterCallback) && !__privateGet(this, _targetFilterCallback).call(this, target)) {
          __privateGet(this, _ignoredTargets).add(event.targetInfo.targetId);
          __privateMethod(this, _finishInitializationIfReady, finishInitializationIfReady_fn).call(this, event.targetInfo.targetId);
          return;
        }
        target._initialize();
        __privateGet(this, _availableTargetsByTargetId).set(event.targetInfo.targetId, target);
        this.emit("targetAvailable", target);
        __privateMethod(this, _finishInitializationIfReady, finishInitializationIfReady_fn).call(this, target._targetId);
      });
      __privateAdd(this, _onTargetDestroyed, (event) => {
        __privateGet(this, _discoveredTargetsByTargetId).delete(event.targetId);
        __privateMethod(this, _finishInitializationIfReady, finishInitializationIfReady_fn).call(this, event.targetId);
        const target = __privateGet(this, _availableTargetsByTargetId).get(event.targetId);
        if (target) {
          this.emit("targetGone", target);
          __privateGet(this, _availableTargetsByTargetId).delete(event.targetId);
        }
      });
      __privateAdd(this, _onAttachedToTarget, async (parentSession, event) => {
        const targetInfo = event.targetInfo;
        const session = __privateGet(this, _connection2).session(event.sessionId);
        if (!session) {
          throw new Error(`Session ${event.sessionId} was not created.`);
        }
        const target = __privateGet(this, _availableTargetsByTargetId).get(targetInfo.targetId);
        (0, assert_js_1$a.assert)(target, `Target ${targetInfo.targetId} is missing`);
        session._setTarget(target);
        this.setupAttachmentListeners(session);
        __privateGet(this, _availableTargetsBySessionId).set(session.id(), __privateGet(this, _availableTargetsByTargetId).get(targetInfo.targetId));
        parentSession.emit(CDPSession_js_1$6.CDPSessionEvent.Ready, session);
      });
      __privateSet(this, _connection2, connection);
      __privateSet(this, _targetFilterCallback, targetFilterCallback);
      __privateSet(this, _targetFactory, targetFactory);
      __privateGet(this, _connection2).on("Target.targetCreated", __privateGet(this, _onTargetCreated));
      __privateGet(this, _connection2).on("Target.targetDestroyed", __privateGet(this, _onTargetDestroyed));
      __privateGet(this, _connection2).on(CDPSession_js_1$6.CDPSessionEvent.SessionDetached, __privateGet(this, _onSessionDetached));
      this.setupAttachmentListeners(__privateGet(this, _connection2));
    }
    setupAttachmentListeners(session) {
      const listener = (event) => {
        return __privateGet(this, _onAttachedToTarget).call(this, session, event);
      };
      (0, assert_js_1$a.assert)(!__privateGet(this, _attachedToTargetListenersBySession).has(session));
      __privateGet(this, _attachedToTargetListenersBySession).set(session, listener);
      session.on("Target.attachedToTarget", listener);
    }
    removeSessionListeners(session) {
      if (__privateGet(this, _attachedToTargetListenersBySession).has(session)) {
        session.off("Target.attachedToTarget", __privateGet(this, _attachedToTargetListenersBySession).get(session));
        __privateGet(this, _attachedToTargetListenersBySession).delete(session);
      }
    }
    getAvailableTargets() {
      return __privateGet(this, _availableTargetsByTargetId);
    }
    dispose() {
      __privateGet(this, _connection2).off("Target.targetCreated", __privateGet(this, _onTargetCreated));
      __privateGet(this, _connection2).off("Target.targetDestroyed", __privateGet(this, _onTargetDestroyed));
    }
    async initialize() {
      await __privateGet(this, _connection2).send("Target.setDiscoverTargets", {
        discover: true,
        filter: [{}]
      });
      __privateSet(this, _targetsIdsForInit, new Set(__privateGet(this, _discoveredTargetsByTargetId).keys()));
      await __privateGet(this, _initializeDeferred).valueOrThrow();
    }
  }
  _connection2 = new WeakMap();
  _discoveredTargetsByTargetId = new WeakMap();
  _availableTargetsByTargetId = new WeakMap();
  _availableTargetsBySessionId = new WeakMap();
  _ignoredTargets = new WeakMap();
  _targetFilterCallback = new WeakMap();
  _targetFactory = new WeakMap();
  _attachedToTargetListenersBySession = new WeakMap();
  _initializeDeferred = new WeakMap();
  _targetsIdsForInit = new WeakMap();
  _onSessionDetached = new WeakMap();
  _onTargetCreated = new WeakMap();
  _onTargetDestroyed = new WeakMap();
  _onAttachedToTarget = new WeakMap();
  _finishInitializationIfReady = new WeakSet();
  finishInitializationIfReady_fn = function(targetId) {
    __privateGet(this, _targetsIdsForInit).delete(targetId);
    if (__privateGet(this, _targetsIdsForInit).size === 0) {
      __privateGet(this, _initializeDeferred).resolve();
    }
  };
  FirefoxTargetManager$1.FirefoxTargetManager = FirefoxTargetManager;
  var FrameManager$1 = {};
  var Frame$1 = {};
  var locators = {};
  (function(exports3) {
    var _ensureElementIsInTheViewport, _waitForEnabled, _waitForStableBoundingBox, _waitForEnabledIfNeeded, _waitForStableBoundingBoxIfNeeded, _ensureElementIsInTheViewportIfNeeded, _click, click_fn, _fill, fill_fn, _hover, hover_fn, _scroll, scroll_fn, _pageOrFrame, _func, _delegate, _predicate, _mapper, _pageOrFrame2, _selector, _waitForVisibilityIfNeeded, _locators;
    var __addDisposableResource2 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
      if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var __disposeResources2 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
      return function(env) {
        function fail(e) {
          env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
        }
        function next() {
          while (env.stack.length) {
            var rec = env.stack.pop();
            try {
              var result = rec.dispose && rec.dispose.call(rec.value);
              if (rec.async)
                return Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } catch (e) {
              fail(e);
            }
          }
          if (env.hasError)
            throw env.error;
        }
        return next();
      };
    }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    });
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.RETRY_DELAY = exports3.RaceLocator = exports3.NodeLocator = exports3.MappedLocator = exports3.FilteredLocator = exports3.DelegatedLocator = exports3.FunctionLocator = exports3.Locator = exports3.LocatorEmittedEvents = exports3.LocatorEvent = void 0;
    const rxjs_js_12 = rxjs;
    const EventEmitter_js_12 = EventEmitter$1;
    const util_js_12 = require$$2$1;
    var LocatorEvent;
    (function(LocatorEvent2) {
      LocatorEvent2["Action"] = "action";
    })(LocatorEvent || (exports3.LocatorEmittedEvents = exports3.LocatorEvent = LocatorEvent = {}));
    class Locator extends EventEmitter_js_12.EventEmitter {
      constructor() {
        super(...arguments);
        __privateAdd(this, _click);
        __privateAdd(this, _fill);
        __privateAdd(this, _hover);
        __privateAdd(this, _scroll);
        /**
         * @internal
         */
        __publicField(this, "visibility", null);
        /**
         * @internal
         */
        __publicField(this, "_timeout", 3e4);
        __privateAdd(this, _ensureElementIsInTheViewport, true);
        __privateAdd(this, _waitForEnabled, true);
        __privateAdd(this, _waitForStableBoundingBox, true);
        /**
         * @internal
         */
        __publicField(this, "operators", {
          conditions: (conditions, signal) => {
            return (0, rxjs_js_12.mergeMap)((handle) => {
              return (0, rxjs_js_12.merge)(...conditions.map((condition) => {
                return condition(handle, signal);
              })).pipe((0, rxjs_js_12.defaultIfEmpty)(handle));
            });
          },
          retryAndRaceWithSignalAndTimer: (signal) => {
            const candidates = [];
            if (signal) {
              candidates.push((0, rxjs_js_12.fromEvent)(signal, "abort").pipe((0, rxjs_js_12.map)(() => {
                throw signal.reason;
              })));
            }
            candidates.push((0, util_js_12.timeout)(this._timeout));
            return (0, rxjs_js_12.pipe)((0, rxjs_js_12.retry)({ delay: exports3.RETRY_DELAY }), (0, rxjs_js_12.raceWith)(...candidates));
          }
        });
        /**
         * If the element has a "disabled" property, wait for the element to be
         * enabled.
         */
        __privateAdd(this, _waitForEnabledIfNeeded, (handle, signal) => {
          if (!__privateGet(this, _waitForEnabled)) {
            return rxjs_js_12.EMPTY;
          }
          return (0, rxjs_js_12.from)(handle.frame.waitForFunction((element) => {
            if (!(element instanceof HTMLElement)) {
              return true;
            }
            const isNativeFormControl = [
              "BUTTON",
              "INPUT",
              "SELECT",
              "TEXTAREA",
              "OPTION",
              "OPTGROUP"
            ].includes(element.nodeName);
            return !isNativeFormControl || !element.hasAttribute("disabled");
          }, {
            timeout: this._timeout,
            signal
          }, handle)).pipe((0, rxjs_js_12.ignoreElements)());
        });
        /**
         * Compares the bounding box of the element for two consecutive animation
         * frames and waits till they are the same.
         */
        __privateAdd(this, _waitForStableBoundingBoxIfNeeded, (handle) => {
          if (!__privateGet(this, _waitForStableBoundingBox)) {
            return rxjs_js_12.EMPTY;
          }
          return (0, rxjs_js_12.defer)(() => {
            return (0, rxjs_js_12.from)(handle.evaluate((element) => {
              return new Promise((resolve) => {
                window.requestAnimationFrame(() => {
                  const rect1 = element.getBoundingClientRect();
                  window.requestAnimationFrame(() => {
                    const rect2 = element.getBoundingClientRect();
                    resolve([
                      {
                        x: rect1.x,
                        y: rect1.y,
                        width: rect1.width,
                        height: rect1.height
                      },
                      {
                        x: rect2.x,
                        y: rect2.y,
                        width: rect2.width,
                        height: rect2.height
                      }
                    ]);
                  });
                });
              });
            }));
          }).pipe((0, rxjs_js_12.first)(([rect1, rect2]) => {
            return rect1.x === rect2.x && rect1.y === rect2.y && rect1.width === rect2.width && rect1.height === rect2.height;
          }), (0, rxjs_js_12.retry)({ delay: exports3.RETRY_DELAY }), (0, rxjs_js_12.ignoreElements)());
        });
        /**
         * Checks if the element is in the viewport and auto-scrolls it if it is not.
         */
        __privateAdd(this, _ensureElementIsInTheViewportIfNeeded, (handle) => {
          if (!__privateGet(this, _ensureElementIsInTheViewport)) {
            return rxjs_js_12.EMPTY;
          }
          return (0, rxjs_js_12.from)(handle.isIntersectingViewport({ threshold: 0 })).pipe((0, rxjs_js_12.filter)((isIntersectingViewport) => {
            return !isIntersectingViewport;
          }), (0, rxjs_js_12.mergeMap)(() => {
            return (0, rxjs_js_12.from)(handle.scrollIntoView());
          }), (0, rxjs_js_12.mergeMap)(() => {
            return (0, rxjs_js_12.defer)(() => {
              return (0, rxjs_js_12.from)(handle.isIntersectingViewport({ threshold: 0 }));
            }).pipe((0, rxjs_js_12.first)(rxjs_js_12.identity), (0, rxjs_js_12.retry)({ delay: exports3.RETRY_DELAY }), (0, rxjs_js_12.ignoreElements)());
          }));
        });
      }
      /**
       * Creates a race between multiple locators but ensures that only a single one
       * acts.
       *
       * @public
       */
      static race(locators2) {
        return RaceLocator.create(locators2);
      }
      // Determines when the locator will timeout for actions.
      get timeout() {
        return this._timeout;
      }
      setTimeout(timeout2) {
        const locator = this._clone();
        locator._timeout = timeout2;
        return locator;
      }
      setVisibility(visibility) {
        const locator = this._clone();
        locator.visibility = visibility;
        return locator;
      }
      setWaitForEnabled(value) {
        const locator = this._clone();
        __privateSet(locator, _waitForEnabled, value);
        return locator;
      }
      setEnsureElementIsInTheViewport(value) {
        const locator = this._clone();
        __privateSet(locator, _ensureElementIsInTheViewport, value);
        return locator;
      }
      setWaitForStableBoundingBox(value) {
        const locator = this._clone();
        __privateSet(locator, _waitForStableBoundingBox, value);
        return locator;
      }
      /**
       * @internal
       */
      copyOptions(locator) {
        this._timeout = locator._timeout;
        this.visibility = locator.visibility;
        __privateSet(this, _waitForEnabled, __privateGet(locator, _waitForEnabled));
        __privateSet(this, _ensureElementIsInTheViewport, __privateGet(locator, _ensureElementIsInTheViewport));
        __privateSet(this, _waitForStableBoundingBox, __privateGet(locator, _waitForStableBoundingBox));
        return this;
      }
      /**
       * Clones the locator.
       */
      clone() {
        return this._clone();
      }
      /**
       * Waits for the locator to get a handle from the page.
       *
       * @public
       */
      async waitHandle(options) {
        return await (0, rxjs_js_12.firstValueFrom)(this._wait(options).pipe(this.operators.retryAndRaceWithSignalAndTimer(options == null ? void 0 : options.signal)));
      }
      /**
       * Waits for the locator to get the serialized value from the page.
       *
       * Note this requires the value to be JSON-serializable.
       *
       * @public
       */
      async wait(options) {
        const env_1 = { stack: [], error: void 0, hasError: false };
        try {
          const handle = __addDisposableResource2(env_1, await this.waitHandle(options), false);
          return await handle.jsonValue();
        } catch (e_1) {
          env_1.error = e_1;
          env_1.hasError = true;
        } finally {
          __disposeResources2(env_1);
        }
      }
      /**
       * Maps the locator using the provided mapper.
       *
       * @public
       */
      map(mapper) {
        return new MappedLocator(this._clone(), (handle) => {
          return handle.evaluateHandle(mapper);
        });
      }
      /**
       * Creates an expectation that is evaluated against located values.
       *
       * If the expectations do not match, then the locator will retry.
       *
       * @public
       */
      filter(predicate) {
        return new FilteredLocator(this._clone(), async (handle, signal) => {
          await handle.frame.waitForFunction(predicate, { signal, timeout: this._timeout }, handle);
          return true;
        });
      }
      /**
       * Creates an expectation that is evaluated against located handles.
       *
       * If the expectations do not match, then the locator will retry.
       *
       * @internal
       */
      filterHandle(predicate) {
        return new FilteredLocator(this._clone(), predicate);
      }
      /**
       * Maps the locator using the provided mapper.
       *
       * @internal
       */
      mapHandle(mapper) {
        return new MappedLocator(this._clone(), mapper);
      }
      click(options) {
        return (0, rxjs_js_12.firstValueFrom)(__privateMethod(this, _click, click_fn).call(this, options));
      }
      /**
       * Fills out the input identified by the locator using the provided value. The
       * type of the input is determined at runtime and the appropriate fill-out
       * method is chosen based on the type. contenteditable, selector, inputs are
       * supported.
       */
      fill(value, options) {
        return (0, rxjs_js_12.firstValueFrom)(__privateMethod(this, _fill, fill_fn).call(this, value, options));
      }
      hover(options) {
        return (0, rxjs_js_12.firstValueFrom)(__privateMethod(this, _hover, hover_fn).call(this, options));
      }
      scroll(options) {
        return (0, rxjs_js_12.firstValueFrom)(__privateMethod(this, _scroll, scroll_fn).call(this, options));
      }
    }
    _ensureElementIsInTheViewport = new WeakMap();
    _waitForEnabled = new WeakMap();
    _waitForStableBoundingBox = new WeakMap();
    _waitForEnabledIfNeeded = new WeakMap();
    _waitForStableBoundingBoxIfNeeded = new WeakMap();
    _ensureElementIsInTheViewportIfNeeded = new WeakMap();
    _click = new WeakSet();
    click_fn = function(options) {
      const signal = options == null ? void 0 : options.signal;
      return this._wait(options).pipe(this.operators.conditions([
        __privateGet(this, _ensureElementIsInTheViewportIfNeeded),
        __privateGet(this, _waitForStableBoundingBoxIfNeeded),
        __privateGet(this, _waitForEnabledIfNeeded)
      ], signal), (0, rxjs_js_12.tap)(() => {
        return this.emit(LocatorEvent.Action, void 0);
      }), (0, rxjs_js_12.mergeMap)((handle) => {
        return (0, rxjs_js_12.from)(handle.click(options)).pipe((0, rxjs_js_12.catchError)((err) => {
          void handle.dispose().catch(util_js_12.debugError);
          throw err;
        }));
      }), this.operators.retryAndRaceWithSignalAndTimer(signal));
    };
    _fill = new WeakSet();
    fill_fn = function(value, options) {
      const signal = options == null ? void 0 : options.signal;
      return this._wait(options).pipe(this.operators.conditions([
        __privateGet(this, _ensureElementIsInTheViewportIfNeeded),
        __privateGet(this, _waitForStableBoundingBoxIfNeeded),
        __privateGet(this, _waitForEnabledIfNeeded)
      ], signal), (0, rxjs_js_12.tap)(() => {
        return this.emit(LocatorEvent.Action, void 0);
      }), (0, rxjs_js_12.mergeMap)((handle) => {
        return (0, rxjs_js_12.from)(handle.evaluate((el) => {
          if (el instanceof HTMLSelectElement) {
            return "select";
          }
          if (el instanceof HTMLTextAreaElement) {
            return "typeable-input";
          }
          if (el instanceof HTMLInputElement) {
            if ((/* @__PURE__ */ new Set([
              "textarea",
              "text",
              "url",
              "tel",
              "search",
              "password",
              "number",
              "email"
            ])).has(el.type)) {
              return "typeable-input";
            } else {
              return "other-input";
            }
          }
          if (el.isContentEditable) {
            return "contenteditable";
          }
          return "unknown";
        })).pipe((0, rxjs_js_12.mergeMap)((inputType) => {
          switch (inputType) {
            case "select":
              return (0, rxjs_js_12.from)(handle.select(value).then(rxjs_js_12.noop));
            case "contenteditable":
            case "typeable-input":
              return (0, rxjs_js_12.from)(handle.evaluate((input, newValue) => {
                const currentValue = input.isContentEditable ? input.innerText : input.value;
                if (newValue.length <= currentValue.length || !newValue.startsWith(input.value)) {
                  if (input.isContentEditable) {
                    input.innerText = "";
                  } else {
                    input.value = "";
                  }
                  return newValue;
                }
                const originalValue = input.isContentEditable ? input.innerText : input.value;
                if (input.isContentEditable) {
                  input.innerText = "";
                  input.innerText = originalValue;
                } else {
                  input.value = "";
                  input.value = originalValue;
                }
                return newValue.substring(originalValue.length);
              }, value)).pipe((0, rxjs_js_12.mergeMap)((textToType) => {
                return (0, rxjs_js_12.from)(handle.type(textToType));
              }));
            case "other-input":
              return (0, rxjs_js_12.from)(handle.focus()).pipe((0, rxjs_js_12.mergeMap)(() => {
                return (0, rxjs_js_12.from)(handle.evaluate((input, value2) => {
                  input.value = value2;
                  input.dispatchEvent(new Event("input", { bubbles: true }));
                  input.dispatchEvent(new Event("change", { bubbles: true }));
                }, value));
              }));
            case "unknown":
              throw new Error(`Element cannot be filled out.`);
          }
        })).pipe((0, rxjs_js_12.catchError)((err) => {
          void handle.dispose().catch(util_js_12.debugError);
          throw err;
        }));
      }), this.operators.retryAndRaceWithSignalAndTimer(signal));
    };
    _hover = new WeakSet();
    hover_fn = function(options) {
      const signal = options == null ? void 0 : options.signal;
      return this._wait(options).pipe(this.operators.conditions([
        __privateGet(this, _ensureElementIsInTheViewportIfNeeded),
        __privateGet(this, _waitForStableBoundingBoxIfNeeded)
      ], signal), (0, rxjs_js_12.tap)(() => {
        return this.emit(LocatorEvent.Action, void 0);
      }), (0, rxjs_js_12.mergeMap)((handle) => {
        return (0, rxjs_js_12.from)(handle.hover()).pipe((0, rxjs_js_12.catchError)((err) => {
          void handle.dispose().catch(util_js_12.debugError);
          throw err;
        }));
      }), this.operators.retryAndRaceWithSignalAndTimer(signal));
    };
    _scroll = new WeakSet();
    scroll_fn = function(options) {
      const signal = options == null ? void 0 : options.signal;
      return this._wait(options).pipe(this.operators.conditions([
        __privateGet(this, _ensureElementIsInTheViewportIfNeeded),
        __privateGet(this, _waitForStableBoundingBoxIfNeeded)
      ], signal), (0, rxjs_js_12.tap)(() => {
        return this.emit(LocatorEvent.Action, void 0);
      }), (0, rxjs_js_12.mergeMap)((handle) => {
        return (0, rxjs_js_12.from)(handle.evaluate((el, scrollTop, scrollLeft) => {
          if (scrollTop !== void 0) {
            el.scrollTop = scrollTop;
          }
          if (scrollLeft !== void 0) {
            el.scrollLeft = scrollLeft;
          }
        }, options == null ? void 0 : options.scrollTop, options == null ? void 0 : options.scrollLeft)).pipe((0, rxjs_js_12.catchError)((err) => {
          void handle.dispose().catch(util_js_12.debugError);
          throw err;
        }));
      }), this.operators.retryAndRaceWithSignalAndTimer(signal));
    };
    exports3.Locator = Locator;
    const _FunctionLocator = class _FunctionLocator extends Locator {
      constructor(pageOrFrame, func) {
        super();
        __privateAdd(this, _pageOrFrame, void 0);
        __privateAdd(this, _func, void 0);
        __privateSet(this, _pageOrFrame, pageOrFrame);
        __privateSet(this, _func, func);
      }
      static create(pageOrFrame, func) {
        return new _FunctionLocator(pageOrFrame, func).setTimeout("getDefaultTimeout" in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
      }
      _clone() {
        return new _FunctionLocator(__privateGet(this, _pageOrFrame), __privateGet(this, _func));
      }
      _wait(options) {
        const signal = options == null ? void 0 : options.signal;
        return (0, rxjs_js_12.defer)(() => {
          return (0, rxjs_js_12.from)(__privateGet(this, _pageOrFrame).waitForFunction(__privateGet(this, _func), {
            timeout: this.timeout,
            signal
          }));
        }).pipe((0, rxjs_js_12.throwIfEmpty)());
      }
    };
    _pageOrFrame = new WeakMap();
    _func = new WeakMap();
    let FunctionLocator = _FunctionLocator;
    exports3.FunctionLocator = FunctionLocator;
    class DelegatedLocator extends Locator {
      constructor(delegate) {
        super();
        __privateAdd(this, _delegate, void 0);
        __privateSet(this, _delegate, delegate);
        this.copyOptions(__privateGet(this, _delegate));
      }
      get delegate() {
        return __privateGet(this, _delegate);
      }
      setTimeout(timeout2) {
        const locator = super.setTimeout(timeout2);
        __privateSet(locator, _delegate, __privateGet(this, _delegate).setTimeout(timeout2));
        return locator;
      }
      setVisibility(visibility) {
        const locator = super.setVisibility(visibility);
        __privateSet(locator, _delegate, __privateGet(locator, _delegate).setVisibility(visibility));
        return locator;
      }
      setWaitForEnabled(value) {
        const locator = super.setWaitForEnabled(value);
        __privateSet(locator, _delegate, __privateGet(this, _delegate).setWaitForEnabled(value));
        return locator;
      }
      setEnsureElementIsInTheViewport(value) {
        const locator = super.setEnsureElementIsInTheViewport(value);
        __privateSet(locator, _delegate, __privateGet(this, _delegate).setEnsureElementIsInTheViewport(value));
        return locator;
      }
      setWaitForStableBoundingBox(value) {
        const locator = super.setWaitForStableBoundingBox(value);
        __privateSet(locator, _delegate, __privateGet(this, _delegate).setWaitForStableBoundingBox(value));
        return locator;
      }
    }
    _delegate = new WeakMap();
    exports3.DelegatedLocator = DelegatedLocator;
    const _FilteredLocator = class _FilteredLocator extends DelegatedLocator {
      constructor(base, predicate) {
        super(base);
        __privateAdd(this, _predicate, void 0);
        __privateSet(this, _predicate, predicate);
      }
      _clone() {
        return new _FilteredLocator(this.delegate.clone(), __privateGet(this, _predicate)).copyOptions(this);
      }
      _wait(options) {
        return this.delegate._wait(options).pipe((0, rxjs_js_12.mergeMap)((handle) => {
          return (0, rxjs_js_12.from)(Promise.resolve(__privateGet(this, _predicate).call(this, handle, options == null ? void 0 : options.signal))).pipe((0, rxjs_js_12.filter)((value) => {
            return value;
          }), (0, rxjs_js_12.map)(() => {
            return handle;
          }));
        }), (0, rxjs_js_12.throwIfEmpty)());
      }
    };
    _predicate = new WeakMap();
    let FilteredLocator = _FilteredLocator;
    exports3.FilteredLocator = FilteredLocator;
    const _MappedLocator = class _MappedLocator extends DelegatedLocator {
      constructor(base, mapper) {
        super(base);
        __privateAdd(this, _mapper, void 0);
        __privateSet(this, _mapper, mapper);
      }
      _clone() {
        return new _MappedLocator(this.delegate.clone(), __privateGet(this, _mapper)).copyOptions(this);
      }
      _wait(options) {
        return this.delegate._wait(options).pipe((0, rxjs_js_12.mergeMap)((handle) => {
          return (0, rxjs_js_12.from)(Promise.resolve(__privateGet(this, _mapper).call(this, handle, options == null ? void 0 : options.signal)));
        }));
      }
    };
    _mapper = new WeakMap();
    let MappedLocator = _MappedLocator;
    exports3.MappedLocator = MappedLocator;
    const _NodeLocator = class _NodeLocator extends Locator {
      constructor(pageOrFrame, selector) {
        super();
        __privateAdd(this, _pageOrFrame2, void 0);
        __privateAdd(this, _selector, void 0);
        /**
         * Waits for the element to become visible or hidden. visibility === 'visible'
         * means that the element has a computed style, the visibility property other
         * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
         * 'hidden' means the opposite of that.
         */
        __privateAdd(this, _waitForVisibilityIfNeeded, (handle) => {
          if (!this.visibility) {
            return rxjs_js_12.EMPTY;
          }
          return (() => {
            switch (this.visibility) {
              case "hidden":
                return (0, rxjs_js_12.defer)(() => {
                  return (0, rxjs_js_12.from)(handle.isHidden());
                });
              case "visible":
                return (0, rxjs_js_12.defer)(() => {
                  return (0, rxjs_js_12.from)(handle.isVisible());
                });
            }
          })().pipe((0, rxjs_js_12.first)(rxjs_js_12.identity), (0, rxjs_js_12.retry)({ delay: exports3.RETRY_DELAY }), (0, rxjs_js_12.ignoreElements)());
        });
        __privateSet(this, _pageOrFrame2, pageOrFrame);
        __privateSet(this, _selector, selector);
      }
      static create(pageOrFrame, selector) {
        return new _NodeLocator(pageOrFrame, selector).setTimeout("getDefaultTimeout" in pageOrFrame ? pageOrFrame.getDefaultTimeout() : pageOrFrame.page().getDefaultTimeout());
      }
      _clone() {
        return new _NodeLocator(__privateGet(this, _pageOrFrame2), __privateGet(this, _selector)).copyOptions(this);
      }
      _wait(options) {
        const signal = options == null ? void 0 : options.signal;
        return (0, rxjs_js_12.defer)(() => {
          return (0, rxjs_js_12.from)(__privateGet(this, _pageOrFrame2).waitForSelector(__privateGet(this, _selector), {
            visible: false,
            timeout: this._timeout,
            signal
          }));
        }).pipe((0, rxjs_js_12.filter)((value) => {
          return value !== null;
        }), (0, rxjs_js_12.throwIfEmpty)(), this.operators.conditions([__privateGet(this, _waitForVisibilityIfNeeded)], signal));
      }
    };
    _pageOrFrame2 = new WeakMap();
    _selector = new WeakMap();
    _waitForVisibilityIfNeeded = new WeakMap();
    let NodeLocator = _NodeLocator;
    exports3.NodeLocator = NodeLocator;
    function checkLocatorArray(locators2) {
      for (const locator of locators2) {
        if (!(locator instanceof Locator)) {
          throw new Error("Unknown locator for race candidate");
        }
      }
      return locators2;
    }
    const _RaceLocator = class _RaceLocator extends Locator {
      constructor(locators2) {
        super();
        __privateAdd(this, _locators, void 0);
        __privateSet(this, _locators, locators2);
      }
      static create(locators2) {
        const array = checkLocatorArray(locators2);
        return new _RaceLocator(array);
      }
      _clone() {
        return new _RaceLocator(__privateGet(this, _locators).map((locator) => {
          return locator.clone();
        })).copyOptions(this);
      }
      _wait(options) {
        return (0, rxjs_js_12.race)(...__privateGet(this, _locators).map((locator) => {
          return locator._wait(options);
        }));
      }
    };
    _locators = new WeakMap();
    let RaceLocator = _RaceLocator;
    exports3.RaceLocator = RaceLocator;
    exports3.RETRY_DELAY = 100;
  })(locators);
  (function(exports3) {
    var __runInitializers2 = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
      var useValue = arguments.length > 2;
      for (var i2 = 0; i2 < initializers.length; i2++) {
        value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
      }
      return useValue ? value : void 0;
    };
    var __esDecorate2 = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
      function accept(f) {
        if (f !== void 0 && typeof f !== "function")
          throw new TypeError("Function expected");
        return f;
      }
      var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
      var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
      var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
      var _, done = false;
      for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
        var context = {};
        for (var p in contextIn)
          context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access)
          context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
          if (done)
            throw new TypeError("Cannot add initializers after decoration has completed");
          extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
          if (result === void 0)
            continue;
          if (result === null || typeof result !== "object")
            throw new TypeError("Object expected");
          if (_ = accept(result.get))
            descriptor.get = _;
          if (_ = accept(result.set))
            descriptor.set = _;
          if (_ = accept(result.init))
            initializers.unshift(_);
        } else if (_ = accept(result)) {
          if (kind === "field")
            initializers.unshift(_);
          else
            descriptor[key] = _;
        }
      }
      if (target)
        Object.defineProperty(target, contextIn.name, descriptor);
      done = true;
    };
    var __addDisposableResource2 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
      if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function")
          throw new TypeError("Object expected.");
        var dispose;
        if (async) {
          if (!Symbol.asyncDispose)
            throw new TypeError("Symbol.asyncDispose is not defined.");
          dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
          if (!Symbol.dispose)
            throw new TypeError("Symbol.dispose is not defined.");
          dispose = value[Symbol.dispose];
        }
        if (typeof dispose !== "function")
          throw new TypeError("Object not disposable.");
        env.stack.push({ value, dispose, async });
      } else if (async) {
        env.stack.push({ async: true });
      }
      return value;
    };
    var __disposeResources2 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
      return function(env) {
        function fail(e) {
          env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
          env.hasError = true;
        }
        function next() {
          while (env.stack.length) {
            var rec = env.stack.pop();
            try {
              var result = rec.dispose && rec.dispose.call(rec.value);
              if (rec.async)
                return Promise.resolve(result).then(next, function(e) {
                  fail(e);
                  return next();
                });
            } catch (e) {
              fail(e);
            }
          }
          if (env.hasError)
            throw env.error;
        }
        return next();
      };
    }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    });
    Object.defineProperty(exports3, "__esModule", { value: true });
    exports3.Frame = exports3.throwIfDetached = exports3.FrameEvent = void 0;
    const EventEmitter_js_12 = EventEmitter$1;
    const GetQueryHandler_js_12 = GetQueryHandler;
    const HandleIterator_js_12 = HandleIterator;
    const LazyArg_js_12 = LazyArg$1;
    const util_js_12 = require$$2$1;
    const assert_js_12 = assert$1;
    const decorators_js_12 = decorators;
    const locators_js_12 = locators;
    var FrameEvent;
    (function(FrameEvent2) {
      FrameEvent2.FrameNavigated = Symbol("Frame.FrameNavigated");
      FrameEvent2.FrameSwapped = Symbol("Frame.FrameSwapped");
      FrameEvent2.LifecycleEvent = Symbol("Frame.LifecycleEvent");
      FrameEvent2.FrameNavigatedWithinDocument = Symbol("Frame.FrameNavigatedWithinDocument");
      FrameEvent2.FrameDetached = Symbol("Frame.FrameDetached");
      FrameEvent2.FrameSwappedByActivation = Symbol("Frame.FrameSwappedByActivation");
    })(FrameEvent || (exports3.FrameEvent = FrameEvent = {}));
    exports3.throwIfDetached = (0, decorators_js_12.throwIfDisposed)((frame) => {
      return `Attempted to use detached Frame '${frame._id}'.`;
    });
    let Frame2 = (() => {
      var __document, _document, document_fn, _a2;
      let _classSuper = EventEmitter_js_12.EventEmitter;
      let _instanceExtraInitializers = [];
      let _frameElement_decorators;
      let _evaluateHandle_decorators;
      let _evaluate_decorators;
      let _locator_decorators;
      let _$_decorators;
      let _$$_decorators;
      let _$eval_decorators;
      let _$$eval_decorators;
      let _$x_decorators;
      let _waitForSelector_decorators;
      let _waitForXPath_decorators;
      let _waitForFunction_decorators;
      let _content_decorators;
      let _addScriptTag_decorators;
      let _addStyleTag_decorators;
      let _click_decorators;
      let _focus_decorators;
      let _hover_decorators;
      let _select_decorators;
      let _tap_decorators;
      let _type_decorators;
      let _title_decorators;
      return _a2 = class extends _classSuper {
        /**
         * @internal
         */
        constructor() {
          super();
          /**
           * @internal
           */
          __privateAdd(this, _document);
          /**
           * @internal
           */
          __publicField(this, "_id", (__runInitializers2(this, _instanceExtraInitializers), void 0));
          /**
           * @internal
           */
          __publicField(this, "_parentId");
          /**
           * @internal
           */
          __publicField(this, "worlds");
          /**
           * @internal
           */
          __publicField(this, "_name");
          /**
           * @internal
           */
          __publicField(this, "_hasStartedLoading", false);
          __privateAdd(this, __document, void 0);
        }
        /**
         * Used to clear the document handle that has been destroyed.
         *
         * @internal
         */
        clearDocumentHandle() {
          __privateSet(this, __document, void 0);
        }
        /**
         * @internal
         */
        async frameElement() {
          const env_1 = { stack: [], error: void 0, hasError: false };
          try {
            const parentFrame = this.parentFrame();
            if (!parentFrame) {
              return null;
            }
            const list = __addDisposableResource2(env_1, await parentFrame.isolatedRealm().evaluateHandle(() => {
              return document.querySelectorAll("iframe");
            }), false);
            for await (const iframe_1 of (0, HandleIterator_js_12.transposeIterableHandle)(list)) {
              const env_2 = { stack: [], error: void 0, hasError: false };
              try {
                const iframe = __addDisposableResource2(env_2, iframe_1, false);
                const frame = await iframe.contentFrame();
                if (frame._id === this._id) {
                  return iframe.move();
                }
              } catch (e_1) {
                env_2.error = e_1;
                env_2.hasError = true;
              } finally {
                __disposeResources2(env_2);
              }
            }
            return null;
          } catch (e_2) {
            env_1.error = e_2;
            env_1.hasError = true;
          } finally {
            __disposeResources2(env_1);
          }
        }
        /**
         * Behaves identically to {@link Page.evaluateHandle} except it's run within
         * the context of this frame.
         *
         * @see {@link Page.evaluateHandle} for details.
         */
        async evaluateHandle(pageFunction, ...args) {
          pageFunction = (0, util_js_12.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
          return await this.mainRealm().evaluateHandle(pageFunction, ...args);
        }
        /**
         * Behaves identically to {@link Page.evaluate} except it's run within the
         * the context of this frame.
         *
         * @see {@link Page.evaluate} for details.
         */
        async evaluate(pageFunction, ...args) {
          pageFunction = (0, util_js_12.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
          return await this.mainRealm().evaluate(pageFunction, ...args);
        }
        /**
         * @internal
         */
        locator(selectorOrFunc) {
          if (typeof selectorOrFunc === "string") {
            return locators_js_12.NodeLocator.create(this, selectorOrFunc);
          } else {
            return locators_js_12.FunctionLocator.create(this, selectorOrFunc);
          }
        }
        /**
         * Queries the frame for an element matching the given selector.
         *
         * @param selector - The selector to query for.
         * @returns A {@link ElementHandle | element handle} to the first element
         * matching the given selector. Otherwise, `null`.
         */
        async $(selector) {
          const document2 = await __privateMethod(this, _document, document_fn).call(this);
          return await document2.$(selector);
        }
        /**
         * Queries the frame for all elements matching the given selector.
         *
         * @param selector - The selector to query for.
         * @returns An array of {@link ElementHandle | element handles} that point to
         * elements matching the given selector.
         */
        async $$(selector) {
          const document2 = await __privateMethod(this, _document, document_fn).call(this);
          return await document2.$$(selector);
        }
        /**
         * Runs the given function on the first element matching the given selector in
         * the frame.
         *
         * If the given function returns a promise, then this method will wait till
         * the promise resolves.
         *
         * @example
         *
         * ```ts
         * const searchValue = await frame.$eval('#search', el => el.value);
         * ```
         *
         * @param selector - The selector to query for.
         * @param pageFunction - The function to be evaluated in the frame's context.
         * The first element matching the selector will be passed to the function as
         * its first argument.
         * @param args - Additional arguments to pass to `pageFunction`.
         * @returns A promise to the result of the function.
         */
        async $eval(selector, pageFunction, ...args) {
          pageFunction = (0, util_js_12.withSourcePuppeteerURLIfNone)(this.$eval.name, pageFunction);
          const document2 = await __privateMethod(this, _document, document_fn).call(this);
          return await document2.$eval(selector, pageFunction, ...args);
        }
        /**
         * Runs the given function on an array of elements matching the given selector
         * in the frame.
         *
         * If the given function returns a promise, then this method will wait till
         * the promise resolves.
         *
         * @example
         *
         * ```ts
         * const divsCounts = await frame.$$eval('div', divs => divs.length);
         * ```
         *
         * @param selector - The selector to query for.
         * @param pageFunction - The function to be evaluated in the frame's context.
         * An array of elements matching the given selector will be passed to the
         * function as its first argument.
         * @param args - Additional arguments to pass to `pageFunction`.
         * @returns A promise to the result of the function.
         */
        async $$eval(selector, pageFunction, ...args) {
          pageFunction = (0, util_js_12.withSourcePuppeteerURLIfNone)(this.$$eval.name, pageFunction);
          const document2 = await __privateMethod(this, _document, document_fn).call(this);
          return await document2.$$eval(selector, pageFunction, ...args);
        }
        /**
         * @deprecated Use {@link Frame.$$} with the `xpath` prefix.
         *
         * Example: `await frame.$$('xpath/' + xpathExpression)`
         *
         * This method evaluates the given XPath expression and returns the results.
         * If `xpath` starts with `//` instead of `.//`, the dot will be appended
         * automatically.
         * @param expression - the XPath expression to evaluate.
         */
        async $x(expression) {
          const document2 = await __privateMethod(this, _document, document_fn).call(this);
          return await document2.$x(expression);
        }
        /**
         * Waits for an element matching the given selector to appear in the frame.
         *
         * This method works across navigations.
         *
         * @example
         *
         * ```ts
         * import puppeteer from 'puppeteer';
         *
         * (async () => {
         *   const browser = await puppeteer.launch();
         *   const page = await browser.newPage();
         *   let currentURL;
         *   page
         *     .mainFrame()
         *     .waitForSelector('img')
         *     .then(() => console.log('First URL with image: ' + currentURL));
         *
         *   for (currentURL of [
         *     'https://example.com',
         *     'https://google.com',
         *     'https://bbc.com',
         *   ]) {
         *     await page.goto(currentURL);
         *   }
         *   await browser.close();
         * })();
         * ```
         *
         * @param selector - The selector to query and wait for.
         * @param options - Options for customizing waiting behavior.
         * @returns An element matching the given selector.
         * @throws Throws if an element matching the given selector doesn't appear.
         */
        async waitForSelector(selector, options = {}) {
          const { updatedSelector, QueryHandler: QueryHandler2 } = (0, GetQueryHandler_js_12.getQueryHandlerAndSelector)(selector);
          return await QueryHandler2.waitFor(this, updatedSelector, options);
        }
        /**
         * @deprecated Use {@link Frame.waitForSelector} with the `xpath` prefix.
         *
         * Example: `await frame.waitForSelector('xpath/' + xpathExpression)`
         *
         * The method evaluates the XPath expression relative to the Frame.
         * If `xpath` starts with `//` instead of `.//`, the dot will be appended
         * automatically.
         *
         * Wait for the `xpath` to appear in page. If at the moment of calling the
         * method the `xpath` already exists, the method will return immediately. If
         * the xpath doesn't appear after the `timeout` milliseconds of waiting, the
         * function will throw.
         *
         * For a code example, see the example for {@link Frame.waitForSelector}. That
         * function behaves identically other than taking a CSS selector rather than
         * an XPath.
         *
         * @param xpath - the XPath expression to wait for.
         * @param options - options to configure the visibility of the element and how
         * long to wait before timing out.
         */
        async waitForXPath(xpath, options = {}) {
          if (xpath.startsWith("//")) {
            xpath = `.${xpath}`;
          }
          return await this.waitForSelector(`xpath/${xpath}`, options);
        }
        /**
         * @example
         * The `waitForFunction` can be used to observe viewport size change:
         *
         * ```ts
         * import puppeteer from 'puppeteer';
         *
         * (async () => {
         * .  const browser = await puppeteer.launch();
         * .  const page = await browser.newPage();
         * .  const watchDog = page.mainFrame().waitForFunction('window.innerWidth < 100');
         * .  page.setViewport({width: 50, height: 50});
         * .  await watchDog;
         * .  await browser.close();
         * })();
         * ```
         *
         * To pass arguments from Node.js to the predicate of `page.waitForFunction` function:
         *
         * ```ts
         * const selector = '.foo';
         * await frame.waitForFunction(
         *   selector => !!document.querySelector(selector),
         *   {}, // empty options object
         *   selector
         * );
         * ```
         *
         * @param pageFunction - the function to evaluate in the frame context.
         * @param options - options to configure the polling method and timeout.
         * @param args - arguments to pass to the `pageFunction`.
         * @returns the promise which resolve when the `pageFunction` returns a truthy value.
         */
        async waitForFunction(pageFunction, options = {}, ...args) {
          return await this.mainRealm().waitForFunction(pageFunction, options, ...args);
        }
        /**
         * The full HTML contents of the frame, including the DOCTYPE.
         */
        async content() {
          return await this.evaluate(util_js_12.getPageContent);
        }
        /**
         * The frame's `name` attribute as specified in the tag.
         *
         * @remarks
         * If the name is empty, it returns the `id` attribute instead.
         *
         * @remarks
         * This value is calculated once when the frame is created, and will not
         * update if the attribute is changed later.
         */
        name() {
          return this._name || "";
        }
        /**
         * Is`true` if the frame has been detached. Otherwise, `false`.
         *
         * @deprecated Use the `detached` getter.
         */
        isDetached() {
          return this.detached;
        }
        /**
         * @internal
         */
        get disposed() {
          return this.detached;
        }
        /**
         * Adds a `<script>` tag into the page with the desired url or content.
         *
         * @param options - Options for the script.
         * @returns An {@link ElementHandle | element handle} to the injected
         * `<script>` element.
         */
        async addScriptTag(options) {
          let { content = "", type } = options;
          const { path } = options;
          if (+!!options.url + +!!path + +!!content !== 1) {
            throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");
          }
          if (path) {
            const fs2 = await (0, util_js_12.importFSPromises)();
            content = await fs2.readFile(path, "utf8");
            content += `//# sourceURL=${path.replace(/\n/g, "")}`;
          }
          type = type ?? "text/javascript";
          return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({ Deferred: Deferred2 }, { url, id, type: type2, content: content2 }) => {
            const deferred = Deferred2.create();
            const script = document.createElement("script");
            script.type = type2;
            script.text = content2;
            if (url) {
              script.src = url;
              script.addEventListener("load", () => {
                return deferred.resolve();
              }, { once: true });
              script.addEventListener("error", (event) => {
                deferred.reject(new Error(event.message ?? "Could not load script"));
              }, { once: true });
            } else {
              deferred.resolve();
            }
            if (id) {
              script.id = id;
            }
            document.head.appendChild(script);
            await deferred.valueOrThrow();
            return script;
          }, LazyArg_js_12.LazyArg.create((context) => {
            return context.puppeteerUtil;
          }), { ...options, type, content }));
        }
        /**
         * @internal
         */
        async addStyleTag(options) {
          let { content = "" } = options;
          const { path } = options;
          if (+!!options.url + +!!path + +!!content !== 1) {
            throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");
          }
          if (path) {
            const fs2 = await (0, util_js_12.importFSPromises)();
            content = await fs2.readFile(path, "utf8");
            content += "/*# sourceURL=" + path.replace(/\n/g, "") + "*/";
            options.content = content;
          }
          return await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({ Deferred: Deferred2 }, { url, content: content2 }) => {
            const deferred = Deferred2.create();
            let element;
            if (!url) {
              element = document.createElement("style");
              element.appendChild(document.createTextNode(content2));
            } else {
              const link = document.createElement("link");
              link.rel = "stylesheet";
              link.href = url;
              element = link;
            }
            element.addEventListener("load", () => {
              deferred.resolve();
            }, { once: true });
            element.addEventListener("error", (event) => {
              deferred.reject(new Error(event.message ?? "Could not load style"));
            }, { once: true });
            document.head.appendChild(element);
            await deferred.valueOrThrow();
            return element;
          }, LazyArg_js_12.LazyArg.create((context) => {
            return context.puppeteerUtil;
          }), options));
        }
        /**
         * Clicks the first element found that matches `selector`.
         *
         * @remarks
         * If `click()` triggers a navigation event and there's a separate
         * `page.waitForNavigation()` promise to be resolved, you may end up with a
         * race condition that yields unexpected results. The correct pattern for
         * click and wait for navigation is the following:
         *
         * ```ts
         * const [response] = await Promise.all([
         *   page.waitForNavigation(waitOptions),
         *   frame.click(selector, clickOptions),
         * ]);
         * ```
         *
         * @param selector - The selector to query for.
         */
        async click(selector, options = {}) {
          const env_3 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource2(env_3, await this.$(selector), false);
            (0, assert_js_12.assert)(handle, `No element found for selector: ${selector}`);
            await handle.click(options);
            await handle.dispose();
          } catch (e_3) {
            env_3.error = e_3;
            env_3.hasError = true;
          } finally {
            __disposeResources2(env_3);
          }
        }
        /**
         * Focuses the first element that matches the `selector`.
         *
         * @param selector - The selector to query for.
         * @throws Throws if there's no element matching `selector`.
         */
        async focus(selector) {
          const env_4 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource2(env_4, await this.$(selector), false);
            (0, assert_js_12.assert)(handle, `No element found for selector: ${selector}`);
            await handle.focus();
          } catch (e_4) {
            env_4.error = e_4;
            env_4.hasError = true;
          } finally {
            __disposeResources2(env_4);
          }
        }
        /**
         * Hovers the pointer over the center of the first element that matches the
         * `selector`.
         *
         * @param selector - The selector to query for.
         * @throws Throws if there's no element matching `selector`.
         */
        async hover(selector) {
          const env_5 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource2(env_5, await this.$(selector), false);
            (0, assert_js_12.assert)(handle, `No element found for selector: ${selector}`);
            await handle.hover();
          } catch (e_5) {
            env_5.error = e_5;
            env_5.hasError = true;
          } finally {
            __disposeResources2(env_5);
          }
        }
        /**
         * Selects a set of value on the first `<select>` element that matches the
         * `selector`.
         *
         * @example
         *
         * ```ts
         * frame.select('select#colors', 'blue'); // single selection
         * frame.select('select#colors', 'red', 'green', 'blue'); // multiple selections
         * ```
         *
         * @param selector - The selector to query for.
         * @param values - The array of values to select. If the `<select>` has the
         * `multiple` attribute, all values are considered, otherwise only the first
         * one is taken into account.
         * @returns the list of values that were successfully selected.
         * @throws Throws if there's no `<select>` matching `selector`.
         */
        async select(selector, ...values) {
          const env_6 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource2(env_6, await this.$(selector), false);
            (0, assert_js_12.assert)(handle, `No element found for selector: ${selector}`);
            return await handle.select(...values);
          } catch (e_6) {
            env_6.error = e_6;
            env_6.hasError = true;
          } finally {
            __disposeResources2(env_6);
          }
        }
        /**
         * Taps the first element that matches the `selector`.
         *
         * @param selector - The selector to query for.
         * @throws Throws if there's no element matching `selector`.
         */
        async tap(selector) {
          const env_7 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource2(env_7, await this.$(selector), false);
            (0, assert_js_12.assert)(handle, `No element found for selector: ${selector}`);
            await handle.tap();
          } catch (e_7) {
            env_7.error = e_7;
            env_7.hasError = true;
          } finally {
            __disposeResources2(env_7);
          }
        }
        /**
         * Sends a `keydown`, `keypress`/`input`, and `keyup` event for each character
         * in the text.
         *
         * @remarks
         * To press a special key, like `Control` or `ArrowDown`, use
         * {@link Keyboard.press}.
         *
         * @example
         *
         * ```ts
         * await frame.type('#mytextarea', 'Hello'); // Types instantly
         * await frame.type('#mytextarea', 'World', {delay: 100}); // Types slower, like a user
         * ```
         *
         * @param selector - the selector for the element to type into. If there are
         * multiple the first will be used.
         * @param text - text to type into the element
         * @param options - takes one option, `delay`, which sets the time to wait
         * between key presses in milliseconds. Defaults to `0`.
         */
        async type(selector, text, options) {
          const env_8 = { stack: [], error: void 0, hasError: false };
          try {
            const handle = __addDisposableResource2(env_8, await this.$(selector), false);
            (0, assert_js_12.assert)(handle, `No element found for selector: ${selector}`);
            await handle.type(text, options);
          } catch (e_8) {
            env_8.error = e_8;
            env_8.hasError = true;
          } finally {
            __disposeResources2(env_8);
          }
        }
        /**
         * @deprecated Replace with `new Promise(r => setTimeout(r, milliseconds));`.
         *
         * Causes your script to wait for the given number of milliseconds.
         *
         * @remarks
         * It's generally recommended to not wait for a number of seconds, but instead
         * use {@link Frame.waitForSelector}, {@link Frame.waitForXPath} or
         * {@link Frame.waitForFunction} to wait for exactly the conditions you want.
         *
         * @example
         *
         * Wait for 1 second:
         *
         * ```ts
         * await frame.waitForTimeout(1000);
         * ```
         *
         * @param milliseconds - the number of milliseconds to wait.
         */
        async waitForTimeout(milliseconds) {
          return await new Promise((resolve) => {
            setTimeout(resolve, milliseconds);
          });
        }
        /**
         * The frame's title.
         */
        async title() {
          return await this.isolatedRealm().evaluate(() => {
            return document.title;
          });
        }
      }, __document = new WeakMap(), _document = new WeakSet(), document_fn = function() {
        if (!__privateGet(this, __document)) {
          __privateSet(this, __document, this.isolatedRealm().evaluateHandle(() => {
            return document;
          }).then((handle) => {
            return this.mainRealm().transferHandle(handle);
          }));
        }
        return __privateGet(this, __document);
      }, (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
        _frameElement_decorators = [exports3.throwIfDetached];
        _evaluateHandle_decorators = [exports3.throwIfDetached];
        _evaluate_decorators = [exports3.throwIfDetached];
        _locator_decorators = [exports3.throwIfDetached];
        _$_decorators = [exports3.throwIfDetached];
        _$$_decorators = [exports3.throwIfDetached];
        _$eval_decorators = [exports3.throwIfDetached];
        _$$eval_decorators = [exports3.throwIfDetached];
        _$x_decorators = [exports3.throwIfDetached];
        _waitForSelector_decorators = [exports3.throwIfDetached];
        _waitForXPath_decorators = [exports3.throwIfDetached];
        _waitForFunction_decorators = [exports3.throwIfDetached];
        _content_decorators = [exports3.throwIfDetached];
        _addScriptTag_decorators = [exports3.throwIfDetached];
        _addStyleTag_decorators = [exports3.throwIfDetached];
        _click_decorators = [exports3.throwIfDetached];
        _focus_decorators = [exports3.throwIfDetached];
        _hover_decorators = [exports3.throwIfDetached];
        _select_decorators = [exports3.throwIfDetached];
        _tap_decorators = [exports3.throwIfDetached];
        _type_decorators = [exports3.throwIfDetached];
        _title_decorators = [exports3.throwIfDetached];
        __esDecorate2(_a2, null, _frameElement_decorators, { kind: "method", name: "frameElement", static: false, private: false, access: { has: (obj) => "frameElement" in obj, get: (obj) => obj.frameElement }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _evaluateHandle_decorators, { kind: "method", name: "evaluateHandle", static: false, private: false, access: { has: (obj) => "evaluateHandle" in obj, get: (obj) => obj.evaluateHandle }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: (obj) => "evaluate" in obj, get: (obj) => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _locator_decorators, { kind: "method", name: "locator", static: false, private: false, access: { has: (obj) => "locator" in obj, get: (obj) => obj.locator }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _$_decorators, { kind: "method", name: "$", static: false, private: false, access: { has: (obj) => "$" in obj, get: (obj) => obj.$ }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _$$_decorators, { kind: "method", name: "$$", static: false, private: false, access: { has: (obj) => "$$" in obj, get: (obj) => obj.$$ }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _$eval_decorators, { kind: "method", name: "$eval", static: false, private: false, access: { has: (obj) => "$eval" in obj, get: (obj) => obj.$eval }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _$$eval_decorators, { kind: "method", name: "$$eval", static: false, private: false, access: { has: (obj) => "$$eval" in obj, get: (obj) => obj.$$eval }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _$x_decorators, { kind: "method", name: "$x", static: false, private: false, access: { has: (obj) => "$x" in obj, get: (obj) => obj.$x }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _waitForSelector_decorators, { kind: "method", name: "waitForSelector", static: false, private: false, access: { has: (obj) => "waitForSelector" in obj, get: (obj) => obj.waitForSelector }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _waitForXPath_decorators, { kind: "method", name: "waitForXPath", static: false, private: false, access: { has: (obj) => "waitForXPath" in obj, get: (obj) => obj.waitForXPath }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _waitForFunction_decorators, { kind: "method", name: "waitForFunction", static: false, private: false, access: { has: (obj) => "waitForFunction" in obj, get: (obj) => obj.waitForFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _content_decorators, { kind: "method", name: "content", static: false, private: false, access: { has: (obj) => "content" in obj, get: (obj) => obj.content }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _addScriptTag_decorators, { kind: "method", name: "addScriptTag", static: false, private: false, access: { has: (obj) => "addScriptTag" in obj, get: (obj) => obj.addScriptTag }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _addStyleTag_decorators, { kind: "method", name: "addStyleTag", static: false, private: false, access: { has: (obj) => "addStyleTag" in obj, get: (obj) => obj.addStyleTag }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _click_decorators, { kind: "method", name: "click", static: false, private: false, access: { has: (obj) => "click" in obj, get: (obj) => obj.click }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _focus_decorators, { kind: "method", name: "focus", static: false, private: false, access: { has: (obj) => "focus" in obj, get: (obj) => obj.focus }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _hover_decorators, { kind: "method", name: "hover", static: false, private: false, access: { has: (obj) => "hover" in obj, get: (obj) => obj.hover }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _select_decorators, { kind: "method", name: "select", static: false, private: false, access: { has: (obj) => "select" in obj, get: (obj) => obj.select }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _tap_decorators, { kind: "method", name: "tap", static: false, private: false, access: { has: (obj) => "tap" in obj, get: (obj) => obj.tap }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _type_decorators, { kind: "method", name: "type", static: false, private: false, access: { has: (obj) => "type" in obj, get: (obj) => obj.type }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate2(_a2, null, _title_decorators, { kind: "method", name: "title", static: false, private: false, access: { has: (obj) => "title" in obj, get: (obj) => obj.title }, metadata: _metadata }, null, _instanceExtraInitializers);
        if (_metadata)
          Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
      })(), _a2;
    })();
    exports3.Frame = Frame2;
  })(Frame$1);
  var DeviceRequestPrompt$1 = {};
  Object.defineProperty(DeviceRequestPrompt$1, "__esModule", { value: true });
  DeviceRequestPrompt$1.DeviceRequestPromptManager = DeviceRequestPrompt$1.DeviceRequestPrompt = DeviceRequestPrompt$1.DeviceRequestPromptDevice = void 0;
  const assert_js_1$9 = assert$1;
  const Deferred_js_1$b = Deferred$1;
  class DeviceRequestPromptDevice {
    /**
     * @internal
     */
    constructor(id, name) {
      /**
       * Device id during a prompt.
       */
      __publicField(this, "id");
      /**
       * Device name as it appears in a prompt.
       */
      __publicField(this, "name");
      this.id = id;
      this.name = name;
    }
  }
  DeviceRequestPrompt$1.DeviceRequestPromptDevice = DeviceRequestPromptDevice;
  class DeviceRequestPrompt {
    /**
     * @internal
     */
    constructor(client, timeoutSettings, firstEvent) {
      __privateAdd(this, _updateDevices);
      __privateAdd(this, _client5, void 0);
      __privateAdd(this, _timeoutSettings, void 0);
      __privateAdd(this, _id2, void 0);
      __privateAdd(this, _handled3, false);
      __privateAdd(this, _updateDevicesHandle, __privateMethod(this, _updateDevices, updateDevices_fn).bind(this));
      __privateAdd(this, _waitForDevicePromises, /* @__PURE__ */ new Set());
      /**
       * Current list of selectable devices.
       */
      __publicField(this, "devices", []);
      __privateSet(this, _client5, client);
      __privateSet(this, _timeoutSettings, timeoutSettings);
      __privateSet(this, _id2, firstEvent.id);
      __privateGet(this, _client5).on("DeviceAccess.deviceRequestPrompted", __privateGet(this, _updateDevicesHandle));
      __privateGet(this, _client5).on("Target.detachedFromTarget", () => {
        __privateSet(this, _client5, null);
      });
      __privateMethod(this, _updateDevices, updateDevices_fn).call(this, firstEvent);
    }
    /**
     * Resolve to the first device in the prompt matching a filter.
     */
    async waitForDevice(filter, options = {}) {
      for (const device of this.devices) {
        if (filter(device)) {
          return device;
        }
      }
      const { timeout: timeout2 = __privateGet(this, _timeoutSettings).timeout() } = options;
      const deferred = Deferred_js_1$b.Deferred.create({
        message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${timeout2}ms exceeded`,
        timeout: timeout2
      });
      const handle = { filter, promise: deferred };
      __privateGet(this, _waitForDevicePromises).add(handle);
      try {
        return await deferred.valueOrThrow();
      } finally {
        __privateGet(this, _waitForDevicePromises).delete(handle);
      }
    }
    /**
     * Select a device in the prompt's list.
     */
    async select(device) {
      (0, assert_js_1$9.assert)(__privateGet(this, _client5) !== null, "Cannot select device through detached session!");
      (0, assert_js_1$9.assert)(this.devices.includes(device), "Cannot select unknown device!");
      (0, assert_js_1$9.assert)(!__privateGet(this, _handled3), "Cannot select DeviceRequestPrompt which is already handled!");
      __privateGet(this, _client5).off("DeviceAccess.deviceRequestPrompted", __privateGet(this, _updateDevicesHandle));
      __privateSet(this, _handled3, true);
      return await __privateGet(this, _client5).send("DeviceAccess.selectPrompt", {
        id: __privateGet(this, _id2),
        deviceId: device.id
      });
    }
    /**
     * Cancel the prompt.
     */
    async cancel() {
      (0, assert_js_1$9.assert)(__privateGet(this, _client5) !== null, "Cannot cancel prompt through detached session!");
      (0, assert_js_1$9.assert)(!__privateGet(this, _handled3), "Cannot cancel DeviceRequestPrompt which is already handled!");
      __privateGet(this, _client5).off("DeviceAccess.deviceRequestPrompted", __privateGet(this, _updateDevicesHandle));
      __privateSet(this, _handled3, true);
      return await __privateGet(this, _client5).send("DeviceAccess.cancelPrompt", { id: __privateGet(this, _id2) });
    }
  }
  _client5 = new WeakMap();
  _timeoutSettings = new WeakMap();
  _id2 = new WeakMap();
  _handled3 = new WeakMap();
  _updateDevicesHandle = new WeakMap();
  _waitForDevicePromises = new WeakMap();
  _updateDevices = new WeakSet();
  updateDevices_fn = function(event) {
    if (event.id !== __privateGet(this, _id2)) {
      return;
    }
    for (const rawDevice of event.devices) {
      if (this.devices.some((device) => {
        return device.id === rawDevice.id;
      })) {
        continue;
      }
      const newDevice = new DeviceRequestPromptDevice(rawDevice.id, rawDevice.name);
      this.devices.push(newDevice);
      for (const waitForDevicePromise of __privateGet(this, _waitForDevicePromises)) {
        if (waitForDevicePromise.filter(newDevice)) {
          waitForDevicePromise.promise.resolve(newDevice);
        }
      }
    }
  };
  DeviceRequestPrompt$1.DeviceRequestPrompt = DeviceRequestPrompt;
  class DeviceRequestPromptManager {
    /**
     * @internal
     */
    constructor(client, timeoutSettings) {
      /**
       * @internal
       */
      __privateAdd(this, _onDeviceRequestPrompted);
      __privateAdd(this, _client6, void 0);
      __privateAdd(this, _timeoutSettings2, void 0);
      __privateAdd(this, _deviceRequestPrompDeferreds, /* @__PURE__ */ new Set());
      __privateSet(this, _client6, client);
      __privateSet(this, _timeoutSettings2, timeoutSettings);
      __privateGet(this, _client6).on("DeviceAccess.deviceRequestPrompted", (event) => {
        __privateMethod(this, _onDeviceRequestPrompted, onDeviceRequestPrompted_fn).call(this, event);
      });
      __privateGet(this, _client6).on("Target.detachedFromTarget", () => {
        __privateSet(this, _client6, null);
      });
    }
    /**
     * Wait for device prompt created by an action like calling WebBluetooth's
     * requestDevice.
     */
    async waitForDevicePrompt(options = {}) {
      (0, assert_js_1$9.assert)(__privateGet(this, _client6) !== null, "Cannot wait for device prompt through detached session!");
      const needsEnable = __privateGet(this, _deviceRequestPrompDeferreds).size === 0;
      let enablePromise;
      if (needsEnable) {
        enablePromise = __privateGet(this, _client6).send("DeviceAccess.enable");
      }
      const { timeout: timeout2 = __privateGet(this, _timeoutSettings2).timeout() } = options;
      const deferred = Deferred_js_1$b.Deferred.create({
        message: `Waiting for \`DeviceRequestPrompt\` failed: ${timeout2}ms exceeded`,
        timeout: timeout2
      });
      __privateGet(this, _deviceRequestPrompDeferreds).add(deferred);
      try {
        const [result] = await Promise.all([
          deferred.valueOrThrow(),
          enablePromise
        ]);
        return result;
      } finally {
        __privateGet(this, _deviceRequestPrompDeferreds).delete(deferred);
      }
    }
  }
  _client6 = new WeakMap();
  _timeoutSettings2 = new WeakMap();
  _deviceRequestPrompDeferreds = new WeakMap();
  _onDeviceRequestPrompted = new WeakSet();
  onDeviceRequestPrompted_fn = function(event) {
    if (!__privateGet(this, _deviceRequestPrompDeferreds).size) {
      return;
    }
    (0, assert_js_1$9.assert)(__privateGet(this, _client6) !== null);
    const devicePrompt = new DeviceRequestPrompt(__privateGet(this, _client6), __privateGet(this, _timeoutSettings2), event);
    for (const promise of __privateGet(this, _deviceRequestPrompDeferreds)) {
      promise.resolve(devicePrompt);
    }
    __privateGet(this, _deviceRequestPrompDeferreds).clear();
  };
  DeviceRequestPrompt$1.DeviceRequestPromptManager = DeviceRequestPromptManager;
  var Frame = {};
  var IsolatedWorld$1 = {};
  var Realm$1 = {};
  var WaitTask$1 = {};
  Object.defineProperty(WaitTask$1, "__esModule", { value: true });
  WaitTask$1.TaskManager = WaitTask$1.WaitTask = void 0;
  const Deferred_js_1$a = Deferred$1;
  const ErrorLike_js_1$4 = ErrorLike;
  const Function_js_1 = _Function;
  const Errors_js_1$3 = Errors;
  const LazyArg_js_1 = LazyArg$1;
  class WaitTask {
    constructor(world, options, fn, ...args) {
      __privateAdd(this, _world2, void 0);
      __privateAdd(this, _polling, void 0);
      __privateAdd(this, _root, void 0);
      __privateAdd(this, _fn2, void 0);
      __privateAdd(this, _args2, void 0);
      __privateAdd(this, _timeout2, void 0);
      __privateAdd(this, _timeoutError2, void 0);
      __privateAdd(this, _result, Deferred_js_1$a.Deferred.create());
      __privateAdd(this, _poller, void 0);
      __privateAdd(this, _signal, void 0);
      __privateAdd(this, _reruns, []);
      var _a2;
      __privateSet(this, _world2, world);
      __privateSet(this, _polling, options.polling);
      __privateSet(this, _root, options.root);
      __privateSet(this, _signal, options.signal);
      (_a2 = __privateGet(this, _signal)) == null ? void 0 : _a2.addEventListener("abort", () => {
        var _a3;
        void this.terminate((_a3 = __privateGet(this, _signal)) == null ? void 0 : _a3.reason);
      }, {
        once: true
      });
      switch (typeof fn) {
        case "string":
          __privateSet(this, _fn2, `() => {return (${fn});}`);
          break;
        default:
          __privateSet(this, _fn2, (0, Function_js_1.stringifyFunction)(fn));
          break;
      }
      __privateSet(this, _args2, args);
      __privateGet(this, _world2).taskManager.add(this);
      if (options.timeout) {
        __privateSet(this, _timeoutError2, new Errors_js_1$3.TimeoutError(`Waiting failed: ${options.timeout}ms exceeded`));
        __privateSet(this, _timeout2, setTimeout(() => {
          void this.terminate(__privateGet(this, _timeoutError2));
        }, options.timeout));
      }
      void this.rerun();
    }
    get result() {
      return __privateGet(this, _result).valueOrThrow();
    }
    async rerun() {
      for (const prev of __privateGet(this, _reruns)) {
        prev.abort();
      }
      __privateGet(this, _reruns).length = 0;
      const controller = new AbortController();
      __privateGet(this, _reruns).push(controller);
      try {
        switch (__privateGet(this, _polling)) {
          case "raf":
            __privateSet(this, _poller, await __privateGet(this, _world2).evaluateHandle(({ RAFPoller, createFunction }, fn, ...args) => {
              const fun = createFunction(fn);
              return new RAFPoller(() => {
                return fun(...args);
              });
            }, LazyArg_js_1.LazyArg.create((context) => {
              return context.puppeteerUtil;
            }), __privateGet(this, _fn2), ...__privateGet(this, _args2)));
            break;
          case "mutation":
            __privateSet(this, _poller, await __privateGet(this, _world2).evaluateHandle(({ MutationPoller, createFunction }, root, fn, ...args) => {
              const fun = createFunction(fn);
              return new MutationPoller(() => {
                return fun(...args);
              }, root || document);
            }, LazyArg_js_1.LazyArg.create((context) => {
              return context.puppeteerUtil;
            }), __privateGet(this, _root), __privateGet(this, _fn2), ...__privateGet(this, _args2)));
            break;
          default:
            __privateSet(this, _poller, await __privateGet(this, _world2).evaluateHandle(({ IntervalPoller, createFunction }, ms, fn, ...args) => {
              const fun = createFunction(fn);
              return new IntervalPoller(() => {
                return fun(...args);
              }, ms);
            }, LazyArg_js_1.LazyArg.create((context) => {
              return context.puppeteerUtil;
            }), __privateGet(this, _polling), __privateGet(this, _fn2), ...__privateGet(this, _args2)));
            break;
        }
        await __privateGet(this, _poller).evaluate((poller) => {
          void poller.start();
        });
        const result = await __privateGet(this, _poller).evaluateHandle((poller) => {
          return poller.result();
        });
        __privateGet(this, _result).resolve(result);
        await this.terminate();
      } catch (error) {
        if (controller.signal.aborted) {
          return;
        }
        const badError = this.getBadError(error);
        if (badError) {
          await this.terminate(badError);
        }
      }
    }
    async terminate(error) {
      __privateGet(this, _world2).taskManager.delete(this);
      clearTimeout(__privateGet(this, _timeout2));
      if (error && !__privateGet(this, _result).finished()) {
        __privateGet(this, _result).reject(error);
      }
      if (__privateGet(this, _poller)) {
        try {
          await __privateGet(this, _poller).evaluateHandle(async (poller) => {
            await poller.stop();
          });
          if (__privateGet(this, _poller)) {
            await __privateGet(this, _poller).dispose();
            __privateSet(this, _poller, void 0);
          }
        } catch {
        }
      }
    }
    /**
     * Not all errors lead to termination. They usually imply we need to rerun the task.
     */
    getBadError(error) {
      if ((0, ErrorLike_js_1$4.isErrorLike)(error)) {
        if (error.message.includes("Execution context is not available in detached frame")) {
          return new Error("Waiting failed: Frame detached");
        }
        if (error.message.includes("Execution context was destroyed")) {
          return;
        }
        if (error.message.includes("Cannot find context with specified id")) {
          return;
        }
        if (error.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed")) {
          return;
        }
        return error;
      }
      return new Error("WaitTask failed with an error", {
        cause: error
      });
    }
  }
  _world2 = new WeakMap();
  _polling = new WeakMap();
  _root = new WeakMap();
  _fn2 = new WeakMap();
  _args2 = new WeakMap();
  _timeout2 = new WeakMap();
  _timeoutError2 = new WeakMap();
  _result = new WeakMap();
  _poller = new WeakMap();
  _signal = new WeakMap();
  _reruns = new WeakMap();
  WaitTask$1.WaitTask = WaitTask;
  class TaskManager {
    constructor() {
      __privateAdd(this, _tasks, /* @__PURE__ */ new Set());
    }
    add(task) {
      __privateGet(this, _tasks).add(task);
    }
    delete(task) {
      __privateGet(this, _tasks).delete(task);
    }
    terminateAll(error) {
      for (const task of __privateGet(this, _tasks)) {
        void task.terminate(error);
      }
      __privateGet(this, _tasks).clear();
    }
    async rerunAll() {
      await Promise.all([...__privateGet(this, _tasks)].map((task) => {
        return task.rerun();
      }));
    }
  }
  _tasks = new WeakMap();
  WaitTask$1.TaskManager = TaskManager;
  Object.defineProperty(Realm$1, "__esModule", { value: true });
  Realm$1.Realm = void 0;
  const WaitTask_js_1 = WaitTask$1;
  const disposable_js_1$6 = disposable;
  class Realm {
    constructor(timeoutSettings) {
      __publicField(this, "timeoutSettings");
      __publicField(this, "taskManager", new WaitTask_js_1.TaskManager());
      __privateAdd(this, _disposed2, false);
      this.timeoutSettings = timeoutSettings;
    }
    async waitForFunction(pageFunction, options = {}, ...args) {
      const { polling = "raf", timeout: timeout2 = this.timeoutSettings.timeout(), root, signal } = options;
      if (typeof polling === "number" && polling < 0) {
        throw new Error("Cannot poll with non-positive interval");
      }
      const waitTask = new WaitTask_js_1.WaitTask(this, {
        polling,
        root,
        timeout: timeout2,
        signal
      }, pageFunction, ...args);
      return await waitTask.result;
    }
    get disposed() {
      return __privateGet(this, _disposed2);
    }
    /** @internal */
    [disposable_js_1$6.disposeSymbol]() {
      __privateSet(this, _disposed2, true);
      this.taskManager.terminateAll(new Error("waitForFunction failed: frame got detached."));
    }
  }
  _disposed2 = new WeakMap();
  Realm$1.Realm = Realm;
  var __addDisposableResource$1 = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources$1 = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(IsolatedWorld$1, "__esModule", { value: true });
  IsolatedWorld$1.IsolatedWorld = void 0;
  const Realm_js_1 = Realm$1;
  const util_js_1$9 = require$$2$1;
  const Deferred_js_1$9 = Deferred$1;
  const disposable_js_1$5 = disposable;
  const Mutex_js_1 = Mutex$1;
  const ExecutionContext_js_1$3 = ExecutionContext$1;
  class IsolatedWorld extends Realm_js_1.Realm {
    constructor(frameOrWorker, timeoutSettings) {
      super(timeoutSettings);
      __privateAdd(this, _executionContext);
      __privateAdd(this, _context, Deferred_js_1$9.Deferred.create());
      // Set of bindings that have been registered in the current context.
      __privateAdd(this, _contextBindings, /* @__PURE__ */ new Set());
      // Contains mapping from functions that should be bound to Puppeteer functions.
      __privateAdd(this, _bindings, /* @__PURE__ */ new Map());
      __privateAdd(this, _frameOrWorker, void 0);
      // If multiple waitFor are set up asynchronously, we need to wait for the
      // first one to set up the binding in the page before running the others.
      __privateAdd(this, _mutex2, new Mutex_js_1.Mutex());
      __privateAdd(this, _onBindingCalled, async (event) => {
        let payload;
        try {
          payload = JSON.parse(event.payload);
        } catch {
          return;
        }
        const { type, name, seq, args, isTrivial } = payload;
        if (type !== "internal") {
          return;
        }
        if (!__privateGet(this, _contextBindings).has(name)) {
          return;
        }
        try {
          const context = await __privateGet(this, _context).valueOrThrow();
          if (event.executionContextId !== context._contextId) {
            return;
          }
          const binding = this._bindings.get(name);
          await (binding == null ? void 0 : binding.run(context, seq, args, isTrivial));
        } catch (err) {
          (0, util_js_1$9.debugError)(err);
        }
      });
      __privateSet(this, _frameOrWorker, frameOrWorker);
      this.frameUpdated();
    }
    get _bindings() {
      return __privateGet(this, _bindings);
    }
    get environment() {
      return __privateGet(this, _frameOrWorker);
    }
    frameUpdated() {
      this.client.on("Runtime.bindingCalled", __privateGet(this, _onBindingCalled));
    }
    get client() {
      return __privateGet(this, _frameOrWorker).client;
    }
    clearContext() {
      __privateSet(this, _context, Deferred_js_1$9.Deferred.create());
      if ("clearDocumentHandle" in __privateGet(this, _frameOrWorker)) {
        __privateGet(this, _frameOrWorker).clearDocumentHandle();
      }
    }
    setContext(context) {
      __privateGet(this, _contextBindings).clear();
      __privateGet(this, _context).resolve(context);
      void this.taskManager.rerunAll();
    }
    hasContext() {
      return __privateGet(this, _context).resolved();
    }
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = (0, util_js_1$9.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
      const context = await __privateMethod(this, _executionContext, executionContext_fn).call(this);
      return await context.evaluateHandle(pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
      pageFunction = (0, util_js_1$9.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
      const context = await __privateMethod(this, _executionContext, executionContext_fn).call(this);
      return await context.evaluate(pageFunction, ...args);
    }
    async _addBindingToContext(context, name) {
      const env_1 = { stack: [], error: void 0, hasError: false };
      try {
        if (__privateGet(this, _contextBindings).has(name)) {
          return;
        }
        const _ = __addDisposableResource$1(env_1, await __privateGet(this, _mutex2).acquire(), false);
        try {
          await context._client.send("Runtime.addBinding", context._contextName ? {
            name,
            executionContextName: context._contextName
          } : {
            name,
            executionContextId: context._contextId
          });
          await context.evaluate(util_js_1$9.addPageBinding, "internal", name);
          __privateGet(this, _contextBindings).add(name);
        } catch (error) {
          if (error instanceof Error) {
            if (error.message.includes("Execution context was destroyed")) {
              return;
            }
            if (error.message.includes("Cannot find context with specified id")) {
              return;
            }
          }
          (0, util_js_1$9.debugError)(error);
        }
      } catch (e_1) {
        env_1.error = e_1;
        env_1.hasError = true;
      } finally {
        __disposeResources$1(env_1);
      }
    }
    async adoptBackendNode(backendNodeId) {
      const executionContext = await __privateMethod(this, _executionContext, executionContext_fn).call(this);
      const { object } = await this.client.send("DOM.resolveNode", {
        backendNodeId,
        executionContextId: executionContext._contextId
      });
      return (0, ExecutionContext_js_1$3.createCdpHandle)(this, object);
    }
    async adoptHandle(handle) {
      if (handle.realm === this) {
        return await handle.evaluateHandle((value) => {
          return value;
        });
      }
      const nodeInfo = await this.client.send("DOM.describeNode", {
        objectId: handle.id
      });
      return await this.adoptBackendNode(nodeInfo.node.backendNodeId);
    }
    async transferHandle(handle) {
      if (handle.realm === this) {
        return handle;
      }
      if (handle.remoteObject().objectId === void 0) {
        return handle;
      }
      const info = await this.client.send("DOM.describeNode", {
        objectId: handle.remoteObject().objectId
      });
      const newHandle = await this.adoptBackendNode(info.node.backendNodeId);
      await handle.dispose();
      return newHandle;
    }
    [disposable_js_1$5.disposeSymbol]() {
      super[disposable_js_1$5.disposeSymbol]();
      this.client.off("Runtime.bindingCalled", __privateGet(this, _onBindingCalled));
    }
  }
  _context = new WeakMap();
  _contextBindings = new WeakMap();
  _bindings = new WeakMap();
  _frameOrWorker = new WeakMap();
  _executionContext = new WeakSet();
  executionContext_fn = function() {
    if (this.disposed) {
      throw new Error(`Execution context is not available in detached frame "${this.environment.url()}" (are you trying to evaluate?)`);
    }
    if (__privateGet(this, _context) === null) {
      throw new Error(`Execution content promise is missing`);
    }
    return __privateGet(this, _context).valueOrThrow();
  };
  _mutex2 = new WeakMap();
  _onBindingCalled = new WeakMap();
  IsolatedWorld$1.IsolatedWorld = IsolatedWorld;
  var IsolatedWorlds = {};
  Object.defineProperty(IsolatedWorlds, "__esModule", { value: true });
  IsolatedWorlds.PUPPETEER_WORLD = IsolatedWorlds.MAIN_WORLD = void 0;
  IsolatedWorlds.MAIN_WORLD = Symbol("mainWorld");
  IsolatedWorlds.PUPPETEER_WORLD = Symbol("puppeteerWorld");
  var LifecycleWatcher$1 = {};
  var FrameManagerEvents = {};
  Object.defineProperty(FrameManagerEvents, "__esModule", { value: true });
  FrameManagerEvents.FrameManagerEvent = void 0;
  var FrameManagerEvent;
  (function(FrameManagerEvent2) {
    FrameManagerEvent2.FrameAttached = Symbol("FrameManager.FrameAttached");
    FrameManagerEvent2.FrameNavigated = Symbol("FrameManager.FrameNavigated");
    FrameManagerEvent2.FrameDetached = Symbol("FrameManager.FrameDetached");
    FrameManagerEvent2.FrameSwapped = Symbol("FrameManager.FrameSwapped");
    FrameManagerEvent2.LifecycleEvent = Symbol("FrameManager.LifecycleEvent");
    FrameManagerEvent2.FrameNavigatedWithinDocument = Symbol("FrameManager.FrameNavigatedWithinDocument");
  })(FrameManagerEvent || (FrameManagerEvents.FrameManagerEvent = FrameManagerEvent = {}));
  Object.defineProperty(LifecycleWatcher$1, "__esModule", { value: true });
  LifecycleWatcher$1.LifecycleWatcher = void 0;
  const Frame_js_1$2 = Frame$1;
  const EventEmitter_js_1$4 = EventEmitter$1;
  const NetworkManagerEvents_js_1$2 = NetworkManagerEvents;
  const assert_js_1$8 = assert$1;
  const Deferred_js_1$8 = Deferred$1;
  const disposable_js_1$4 = disposable;
  const FrameManagerEvents_js_1$2 = FrameManagerEvents;
  const puppeteerToProtocolLifecycle = /* @__PURE__ */ new Map([
    ["load", "load"],
    ["domcontentloaded", "DOMContentLoaded"],
    ["networkidle0", "networkIdle"],
    ["networkidle2", "networkAlmostIdle"]
  ]);
  class LifecycleWatcher {
    constructor(networkManager, frame, waitUntil, timeout2) {
      __privateAdd(this, _onRequest);
      __privateAdd(this, _onRequestFailed);
      __privateAdd(this, _onResponse);
      __privateAdd(this, _onFrameDetached);
      __privateAdd(this, _navigatedWithinDocument);
      __privateAdd(this, _navigated);
      __privateAdd(this, _frameSwapped);
      __privateAdd(this, _checkLifecycleComplete);
      __privateAdd(this, _expectedLifecycle, void 0);
      __privateAdd(this, _frame, void 0);
      __privateAdd(this, _timeout3, void 0);
      __privateAdd(this, _navigationRequest, null);
      __privateAdd(this, _subscriptions2, new disposable_js_1$4.DisposableStack());
      __privateAdd(this, _initialLoaderId, void 0);
      __privateAdd(this, _terminationDeferred, void 0);
      __privateAdd(this, _sameDocumentNavigationDeferred, Deferred_js_1$8.Deferred.create());
      __privateAdd(this, _lifecycleDeferred, Deferred_js_1$8.Deferred.create());
      __privateAdd(this, _newDocumentNavigationDeferred, Deferred_js_1$8.Deferred.create());
      __privateAdd(this, _hasSameDocumentNavigation, void 0);
      __privateAdd(this, _swapped, void 0);
      __privateAdd(this, _navigationResponseReceived, void 0);
      if (Array.isArray(waitUntil)) {
        waitUntil = waitUntil.slice();
      } else if (typeof waitUntil === "string") {
        waitUntil = [waitUntil];
      }
      __privateSet(this, _initialLoaderId, frame._loaderId);
      __privateSet(this, _expectedLifecycle, waitUntil.map((value) => {
        const protocolEvent = puppeteerToProtocolLifecycle.get(value);
        (0, assert_js_1$8.assert)(protocolEvent, "Unknown value for options.waitUntil: " + value);
        return protocolEvent;
      }));
      __privateSet(this, _frame, frame);
      __privateSet(this, _timeout3, timeout2);
      __privateGet(this, _subscriptions2).use(
        // Revert if TODO #1 is done
        new EventEmitter_js_1$4.EventSubscription(frame._frameManager, FrameManagerEvents_js_1$2.FrameManagerEvent.LifecycleEvent, __privateMethod(this, _checkLifecycleComplete, checkLifecycleComplete_fn).bind(this))
      );
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(frame, Frame_js_1$2.FrameEvent.FrameNavigatedWithinDocument, __privateMethod(this, _navigatedWithinDocument, navigatedWithinDocument_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(frame, Frame_js_1$2.FrameEvent.FrameNavigated, __privateMethod(this, _navigated, navigated_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(frame, Frame_js_1$2.FrameEvent.FrameSwapped, __privateMethod(this, _frameSwapped, frameSwapped_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(frame, Frame_js_1$2.FrameEvent.FrameSwappedByActivation, __privateMethod(this, _frameSwapped, frameSwapped_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(frame, Frame_js_1$2.FrameEvent.FrameDetached, __privateMethod(this, _onFrameDetached, onFrameDetached_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(networkManager, NetworkManagerEvents_js_1$2.NetworkManagerEvent.Request, __privateMethod(this, _onRequest, onRequest_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(networkManager, NetworkManagerEvents_js_1$2.NetworkManagerEvent.Response, __privateMethod(this, _onResponse, onResponse_fn).bind(this)));
      __privateGet(this, _subscriptions2).use(new EventEmitter_js_1$4.EventSubscription(networkManager, NetworkManagerEvents_js_1$2.NetworkManagerEvent.RequestFailed, __privateMethod(this, _onRequestFailed, onRequestFailed_fn).bind(this)));
      __privateSet(this, _terminationDeferred, Deferred_js_1$8.Deferred.create({
        timeout: __privateGet(this, _timeout3),
        message: `Navigation timeout of ${__privateGet(this, _timeout3)} ms exceeded`
      }));
      __privateMethod(this, _checkLifecycleComplete, checkLifecycleComplete_fn).call(this);
    }
    async navigationResponse() {
      var _a2;
      await ((_a2 = __privateGet(this, _navigationResponseReceived)) == null ? void 0 : _a2.valueOrThrow());
      return __privateGet(this, _navigationRequest) ? __privateGet(this, _navigationRequest).response() : null;
    }
    sameDocumentNavigationPromise() {
      return __privateGet(this, _sameDocumentNavigationDeferred).valueOrThrow();
    }
    newDocumentNavigationPromise() {
      return __privateGet(this, _newDocumentNavigationDeferred).valueOrThrow();
    }
    lifecyclePromise() {
      return __privateGet(this, _lifecycleDeferred).valueOrThrow();
    }
    terminationPromise() {
      return __privateGet(this, _terminationDeferred).valueOrThrow();
    }
    dispose() {
      __privateGet(this, _subscriptions2).dispose();
      __privateGet(this, _terminationDeferred).resolve(new Error("LifecycleWatcher disposed"));
    }
  }
  _expectedLifecycle = new WeakMap();
  _frame = new WeakMap();
  _timeout3 = new WeakMap();
  _navigationRequest = new WeakMap();
  _subscriptions2 = new WeakMap();
  _initialLoaderId = new WeakMap();
  _terminationDeferred = new WeakMap();
  _sameDocumentNavigationDeferred = new WeakMap();
  _lifecycleDeferred = new WeakMap();
  _newDocumentNavigationDeferred = new WeakMap();
  _hasSameDocumentNavigation = new WeakMap();
  _swapped = new WeakMap();
  _navigationResponseReceived = new WeakMap();
  _onRequest = new WeakSet();
  onRequest_fn = function(request) {
    var _a2, _b;
    if (request.frame() !== __privateGet(this, _frame) || !request.isNavigationRequest()) {
      return;
    }
    __privateSet(this, _navigationRequest, request);
    (_a2 = __privateGet(this, _navigationResponseReceived)) == null ? void 0 : _a2.resolve();
    __privateSet(this, _navigationResponseReceived, Deferred_js_1$8.Deferred.create());
    if (request.response() !== null) {
      (_b = __privateGet(this, _navigationResponseReceived)) == null ? void 0 : _b.resolve();
    }
  };
  _onRequestFailed = new WeakSet();
  onRequestFailed_fn = function(request) {
    var _a2, _b;
    if (((_a2 = __privateGet(this, _navigationRequest)) == null ? void 0 : _a2._requestId) !== request._requestId) {
      return;
    }
    (_b = __privateGet(this, _navigationResponseReceived)) == null ? void 0 : _b.resolve();
  };
  _onResponse = new WeakSet();
  onResponse_fn = function(response) {
    var _a2, _b;
    if (((_a2 = __privateGet(this, _navigationRequest)) == null ? void 0 : _a2._requestId) !== response.request()._requestId) {
      return;
    }
    (_b = __privateGet(this, _navigationResponseReceived)) == null ? void 0 : _b.resolve();
  };
  _onFrameDetached = new WeakSet();
  onFrameDetached_fn = function(frame) {
    if (__privateGet(this, _frame) === frame) {
      __privateGet(this, _terminationDeferred).resolve(new Error("Navigating frame was detached"));
      return;
    }
    __privateMethod(this, _checkLifecycleComplete, checkLifecycleComplete_fn).call(this);
  };
  _navigatedWithinDocument = new WeakSet();
  navigatedWithinDocument_fn = function() {
    __privateSet(this, _hasSameDocumentNavigation, true);
    __privateMethod(this, _checkLifecycleComplete, checkLifecycleComplete_fn).call(this);
  };
  _navigated = new WeakSet();
  navigated_fn = function(navigationType) {
    if (navigationType === "BackForwardCacheRestore") {
      return __privateMethod(this, _frameSwapped, frameSwapped_fn).call(this);
    }
    __privateMethod(this, _checkLifecycleComplete, checkLifecycleComplete_fn).call(this);
  };
  _frameSwapped = new WeakSet();
  frameSwapped_fn = function() {
    __privateSet(this, _swapped, true);
    __privateMethod(this, _checkLifecycleComplete, checkLifecycleComplete_fn).call(this);
  };
  _checkLifecycleComplete = new WeakSet();
  checkLifecycleComplete_fn = function() {
    if (!checkLifecycle(__privateGet(this, _frame), __privateGet(this, _expectedLifecycle))) {
      return;
    }
    __privateGet(this, _lifecycleDeferred).resolve();
    if (__privateGet(this, _hasSameDocumentNavigation)) {
      __privateGet(this, _sameDocumentNavigationDeferred).resolve(void 0);
    }
    if (__privateGet(this, _swapped) || __privateGet(this, _frame)._loaderId !== __privateGet(this, _initialLoaderId)) {
      __privateGet(this, _newDocumentNavigationDeferred).resolve(void 0);
    }
    function checkLifecycle(frame, expectedLifecycle) {
      for (const event of expectedLifecycle) {
        if (!frame._lifecycleEvents.has(event)) {
          return false;
        }
      }
      for (const child of frame.childFrames()) {
        if (child._hasStartedLoading && !checkLifecycle(child, expectedLifecycle)) {
          return false;
        }
      }
      return true;
    }
  };
  LifecycleWatcher$1.LifecycleWatcher = LifecycleWatcher;
  var __runInitializers = commonjsGlobal && commonjsGlobal.__runInitializers || function(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i2 = 0; i2 < initializers.length; i2++) {
      value = useValue ? initializers[i2].call(thisArg, value) : initializers[i2].call(thisArg);
    }
    return useValue ? value : void 0;
  };
  var __esDecorate = commonjsGlobal && commonjsGlobal.__esDecorate || function(ctor, descriptorIn, decorators2, contextIn, initializers, extraInitializers) {
    function accept(f) {
      if (f !== void 0 && typeof f !== "function")
        throw new TypeError("Function expected");
      return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i2 = decorators2.length - 1; i2 >= 0; i2--) {
      var context = {};
      for (var p in contextIn)
        context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access)
        context.access[p] = contextIn.access[p];
      context.addInitializer = function(f) {
        if (done)
          throw new TypeError("Cannot add initializers after decoration has completed");
        extraInitializers.push(accept(f || null));
      };
      var result = (0, decorators2[i2])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
        if (result === void 0)
          continue;
        if (result === null || typeof result !== "object")
          throw new TypeError("Object expected");
        if (_ = accept(result.get))
          descriptor.get = _;
        if (_ = accept(result.set))
          descriptor.set = _;
        if (_ = accept(result.init))
          initializers.unshift(_);
      } else if (_ = accept(result)) {
        if (kind === "field")
          initializers.unshift(_);
        else
          descriptor[key] = _;
      }
    }
    if (target)
      Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
  };
  Object.defineProperty(Frame, "__esModule", { value: true });
  Frame.CdpFrame = void 0;
  const Frame_js_1$1 = Frame$1;
  const Errors_js_1$2 = Errors;
  const util_js_1$8 = require$$2$1;
  const Deferred_js_1$7 = Deferred$1;
  const disposable_js_1$3 = disposable;
  const ErrorLike_js_1$3 = ErrorLike;
  const IsolatedWorld_js_1$1 = IsolatedWorld$1;
  const IsolatedWorlds_js_1$2 = IsolatedWorlds;
  const LifecycleWatcher_js_1 = LifecycleWatcher$1;
  let CdpFrame = (() => {
    var _url5, _detached, _client15, _deviceRequestPromptManager, deviceRequestPromptManager_fn, _a2;
    let _classSuper = Frame_js_1$1.Frame;
    let _instanceExtraInitializers = [];
    let _goto_decorators;
    let _waitForNavigation_decorators;
    let _setContent_decorators;
    let _waitForDevicePrompt_decorators;
    return _a2 = class extends _classSuper {
      constructor(frameManager, frameId, parentFrameId, client) {
        super();
        __privateAdd(this, _deviceRequestPromptManager);
        __privateAdd(this, _url5, (__runInitializers(this, _instanceExtraInitializers), ""));
        __privateAdd(this, _detached, false);
        __privateAdd(this, _client15, void 0);
        __publicField(this, "_frameManager");
        __publicField(this, "_id");
        __publicField(this, "_loaderId", "");
        __publicField(this, "_lifecycleEvents", /* @__PURE__ */ new Set());
        __publicField(this, "_parentId");
        this._frameManager = frameManager;
        __privateSet(this, _url5, "");
        this._id = frameId;
        this._parentId = parentFrameId;
        __privateSet(this, _detached, false);
        this._loaderId = "";
        this.updateClient(client);
        this.on(Frame_js_1$1.FrameEvent.FrameSwappedByActivation, () => {
          this._onLoadingStarted();
          this._onLoadingStopped();
        });
      }
      /**
       * This is used internally in DevTools.
       *
       * @internal
       */
      _client() {
        return __privateGet(this, _client15);
      }
      /**
       * Updates the frame ID with the new ID. This happens when the main frame is
       * replaced by a different frame.
       */
      updateId(id) {
        this._id = id;
      }
      updateClient(client, keepWorlds = false) {
        __privateSet(this, _client15, client);
        if (!keepWorlds) {
          this.worlds = {
            [IsolatedWorlds_js_1$2.MAIN_WORLD]: new IsolatedWorld_js_1$1.IsolatedWorld(this, this._frameManager.timeoutSettings),
            [IsolatedWorlds_js_1$2.PUPPETEER_WORLD]: new IsolatedWorld_js_1$1.IsolatedWorld(this, this._frameManager.timeoutSettings)
          };
        } else {
          this.worlds[IsolatedWorlds_js_1$2.MAIN_WORLD].frameUpdated();
          this.worlds[IsolatedWorlds_js_1$2.PUPPETEER_WORLD].frameUpdated();
        }
      }
      page() {
        return this._frameManager.page();
      }
      isOOPFrame() {
        return __privateGet(this, _client15) !== this._frameManager.client;
      }
      async goto(url, options = {}) {
        const { referer = this._frameManager.networkManager.extraHTTPHeaders()["referer"], referrerPolicy = this._frameManager.networkManager.extraHTTPHeaders()["referer-policy"], waitUntil = ["load"], timeout: timeout2 = this._frameManager.timeoutSettings.navigationTimeout() } = options;
        let ensureNewDocumentNavigation = false;
        const watcher = new LifecycleWatcher_js_1.LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout2);
        let error = await Deferred_js_1$7.Deferred.race([
          navigate(__privateGet(this, _client15), url, referer, referrerPolicy, this._id),
          watcher.terminationPromise()
        ]);
        if (!error) {
          error = await Deferred_js_1$7.Deferred.race([
            watcher.terminationPromise(),
            ensureNewDocumentNavigation ? watcher.newDocumentNavigationPromise() : watcher.sameDocumentNavigationPromise()
          ]);
        }
        try {
          if (error) {
            throw error;
          }
          return await watcher.navigationResponse();
        } finally {
          watcher.dispose();
        }
        async function navigate(client, url2, referrer, referrerPolicy2, frameId) {
          try {
            const response = await client.send("Page.navigate", {
              url: url2,
              referrer,
              frameId,
              referrerPolicy: referrerPolicy2
            });
            ensureNewDocumentNavigation = !!response.loaderId;
            if (response.errorText === "net::ERR_HTTP_RESPONSE_CODE_FAILURE") {
              return null;
            }
            return response.errorText ? new Error(`${response.errorText} at ${url2}`) : null;
          } catch (error2) {
            if ((0, ErrorLike_js_1$3.isErrorLike)(error2)) {
              return error2;
            }
            throw error2;
          }
        }
      }
      async waitForNavigation(options = {}) {
        const { waitUntil = ["load"], timeout: timeout2 = this._frameManager.timeoutSettings.navigationTimeout() } = options;
        const watcher = new LifecycleWatcher_js_1.LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout2);
        const error = await Deferred_js_1$7.Deferred.race([
          watcher.terminationPromise(),
          watcher.sameDocumentNavigationPromise(),
          watcher.newDocumentNavigationPromise()
        ]);
        try {
          if (error) {
            throw error;
          }
          return await watcher.navigationResponse();
        } finally {
          watcher.dispose();
        }
      }
      get client() {
        return __privateGet(this, _client15);
      }
      mainRealm() {
        return this.worlds[IsolatedWorlds_js_1$2.MAIN_WORLD];
      }
      isolatedRealm() {
        return this.worlds[IsolatedWorlds_js_1$2.PUPPETEER_WORLD];
      }
      async setContent(html, options = {}) {
        const { waitUntil = ["load"], timeout: timeout2 = this._frameManager.timeoutSettings.navigationTimeout() } = options;
        await (0, util_js_1$8.setPageContent)(this.isolatedRealm(), html);
        const watcher = new LifecycleWatcher_js_1.LifecycleWatcher(this._frameManager.networkManager, this, waitUntil, timeout2);
        const error = await Deferred_js_1$7.Deferred.race([
          watcher.terminationPromise(),
          watcher.lifecyclePromise()
        ]);
        watcher.dispose();
        if (error) {
          throw error;
        }
      }
      url() {
        return __privateGet(this, _url5);
      }
      parentFrame() {
        return this._frameManager._frameTree.parentFrame(this._id) || null;
      }
      childFrames() {
        return this._frameManager._frameTree.childFrames(this._id);
      }
      async waitForDevicePrompt(options = {}) {
        return await __privateMethod(this, _deviceRequestPromptManager, deviceRequestPromptManager_fn).call(this).waitForDevicePrompt(options);
      }
      _navigated(framePayload) {
        this._name = framePayload.name;
        __privateSet(this, _url5, `${framePayload.url}${framePayload.urlFragment || ""}`);
      }
      _navigatedWithinDocument(url) {
        __privateSet(this, _url5, url);
      }
      _onLifecycleEvent(loaderId, name) {
        if (name === "init") {
          this._loaderId = loaderId;
          this._lifecycleEvents.clear();
        }
        this._lifecycleEvents.add(name);
      }
      _onLoadingStopped() {
        this._lifecycleEvents.add("DOMContentLoaded");
        this._lifecycleEvents.add("load");
      }
      _onLoadingStarted() {
        this._hasStartedLoading = true;
      }
      get detached() {
        return __privateGet(this, _detached);
      }
      [(_goto_decorators = [Frame_js_1$1.throwIfDetached], _waitForNavigation_decorators = [Frame_js_1$1.throwIfDetached], _setContent_decorators = [Frame_js_1$1.throwIfDetached], _waitForDevicePrompt_decorators = [Frame_js_1$1.throwIfDetached], disposable_js_1$3.disposeSymbol)]() {
        if (__privateGet(this, _detached)) {
          return;
        }
        __privateSet(this, _detached, true);
        this.worlds[IsolatedWorlds_js_1$2.MAIN_WORLD][disposable_js_1$3.disposeSymbol]();
        this.worlds[IsolatedWorlds_js_1$2.PUPPETEER_WORLD][disposable_js_1$3.disposeSymbol]();
      }
      exposeFunction() {
        throw new Errors_js_1$2.UnsupportedOperation();
      }
    }, _url5 = new WeakMap(), _detached = new WeakMap(), _client15 = new WeakMap(), _deviceRequestPromptManager = new WeakSet(), deviceRequestPromptManager_fn = function() {
      const rootFrame = this.page().mainFrame();
      if (this.isOOPFrame() || rootFrame === null) {
        return this._frameManager._deviceRequestPromptManager(__privateGet(this, _client15));
      } else {
        return rootFrame._frameManager._deviceRequestPromptManager(__privateGet(this, _client15));
      }
    }, (() => {
      const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
      __esDecorate(_a2, null, _goto_decorators, { kind: "method", name: "goto", static: false, private: false, access: { has: (obj) => "goto" in obj, get: (obj) => obj.goto }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate(_a2, null, _waitForNavigation_decorators, { kind: "method", name: "waitForNavigation", static: false, private: false, access: { has: (obj) => "waitForNavigation" in obj, get: (obj) => obj.waitForNavigation }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate(_a2, null, _setContent_decorators, { kind: "method", name: "setContent", static: false, private: false, access: { has: (obj) => "setContent" in obj, get: (obj) => obj.setContent }, metadata: _metadata }, null, _instanceExtraInitializers);
      __esDecorate(_a2, null, _waitForDevicePrompt_decorators, { kind: "method", name: "waitForDevicePrompt", static: false, private: false, access: { has: (obj) => "waitForDevicePrompt" in obj, get: (obj) => obj.waitForDevicePrompt }, metadata: _metadata }, null, _instanceExtraInitializers);
      if (_metadata)
        Object.defineProperty(_a2, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
    })(), _a2;
  })();
  Frame.CdpFrame = CdpFrame;
  var FrameTree$1 = {};
  Object.defineProperty(FrameTree$1, "__esModule", { value: true });
  FrameTree$1.FrameTree = void 0;
  const Deferred_js_1$6 = Deferred$1;
  class FrameTree {
    constructor() {
      __privateAdd(this, _frames, /* @__PURE__ */ new Map());
      // frameID -> parentFrameID
      __privateAdd(this, _parentIds, /* @__PURE__ */ new Map());
      // frameID -> childFrameIDs
      __privateAdd(this, _childIds, /* @__PURE__ */ new Map());
      __privateAdd(this, _mainFrame, void 0);
      __privateAdd(this, _waitRequests, /* @__PURE__ */ new Map());
    }
    getMainFrame() {
      return __privateGet(this, _mainFrame);
    }
    getById(frameId) {
      return __privateGet(this, _frames).get(frameId);
    }
    /**
     * Returns a promise that is resolved once the frame with
     * the given ID is added to the tree.
     */
    waitForFrame(frameId) {
      const frame = this.getById(frameId);
      if (frame) {
        return Promise.resolve(frame);
      }
      const deferred = Deferred_js_1$6.Deferred.create();
      const callbacks = __privateGet(this, _waitRequests).get(frameId) || /* @__PURE__ */ new Set();
      callbacks.add(deferred);
      return deferred.valueOrThrow();
    }
    frames() {
      return Array.from(__privateGet(this, _frames).values());
    }
    addFrame(frame) {
      var _a2;
      __privateGet(this, _frames).set(frame._id, frame);
      if (frame._parentId) {
        __privateGet(this, _parentIds).set(frame._id, frame._parentId);
        if (!__privateGet(this, _childIds).has(frame._parentId)) {
          __privateGet(this, _childIds).set(frame._parentId, /* @__PURE__ */ new Set());
        }
        __privateGet(this, _childIds).get(frame._parentId).add(frame._id);
      } else if (!__privateGet(this, _mainFrame)) {
        __privateSet(this, _mainFrame, frame);
      }
      (_a2 = __privateGet(this, _waitRequests).get(frame._id)) == null ? void 0 : _a2.forEach((request) => {
        return request.resolve(frame);
      });
    }
    removeFrame(frame) {
      var _a2;
      __privateGet(this, _frames).delete(frame._id);
      __privateGet(this, _parentIds).delete(frame._id);
      if (frame._parentId) {
        (_a2 = __privateGet(this, _childIds).get(frame._parentId)) == null ? void 0 : _a2.delete(frame._id);
      } else {
        __privateSet(this, _mainFrame, void 0);
      }
    }
    childFrames(frameId) {
      const childIds = __privateGet(this, _childIds).get(frameId);
      if (!childIds) {
        return [];
      }
      return Array.from(childIds).map((id) => {
        return this.getById(id);
      }).filter((frame) => {
        return frame !== void 0;
      });
    }
    parentFrame(frameId) {
      const parentId = __privateGet(this, _parentIds).get(frameId);
      return parentId ? this.getById(parentId) : void 0;
    }
  }
  _frames = new WeakMap();
  _parentIds = new WeakMap();
  _childIds = new WeakMap();
  _mainFrame = new WeakMap();
  _waitRequests = new WeakMap();
  FrameTree$1.FrameTree = FrameTree;
  var NetworkManager$1 = {};
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CdpHTTPRequest = void 0;
  const HTTPRequest_js_1$1 = require("../api/HTTPRequest.js");
  const util_js_1$7 = require("../common/util.js");
  const assert_js_1$7 = require("../util/assert.js");
  class CdpHTTPRequest extends HTTPRequest_js_1$1.HTTPRequest {
    constructor(client, frame, interceptionId, allowInterception, data, redirectChain) {
      super();
      __privateAdd(this, _continue);
      __privateAdd(this, _respond);
      __privateAdd(this, _abort);
      __privateAdd(this, _client7, void 0);
      __privateAdd(this, _isNavigationRequest, void 0);
      __privateAdd(this, _allowInterception, void 0);
      __privateAdd(this, _interceptionHandled, false);
      __privateAdd(this, _url2, void 0);
      __privateAdd(this, _resourceType, void 0);
      __privateAdd(this, _method, void 0);
      __privateAdd(this, _postData, void 0);
      __privateAdd(this, _headers, {});
      __privateAdd(this, _frame2, void 0);
      __privateAdd(this, _continueRequestOverrides, void 0);
      __privateAdd(this, _responseForRequest, null);
      __privateAdd(this, _abortErrorReason, null);
      __privateAdd(this, _interceptResolutionState, {
        action: HTTPRequest_js_1$1.InterceptResolutionAction.None
      });
      __privateAdd(this, _interceptHandlers, void 0);
      __privateAdd(this, _initiator, void 0);
      __privateSet(this, _client7, client);
      this._requestId = data.requestId;
      __privateSet(this, _isNavigationRequest, data.requestId === data.loaderId && data.type === "Document");
      this._interceptionId = interceptionId;
      __privateSet(this, _allowInterception, allowInterception);
      __privateSet(this, _url2, data.request.url);
      __privateSet(this, _resourceType, (data.type || "other").toLowerCase());
      __privateSet(this, _method, data.request.method);
      __privateSet(this, _postData, data.request.postData);
      __privateSet(this, _frame2, frame);
      this._redirectChain = redirectChain;
      __privateSet(this, _continueRequestOverrides, {});
      __privateSet(this, _interceptHandlers, []);
      __privateSet(this, _initiator, data.initiator);
      for (const [key, value] of Object.entries(data.request.headers)) {
        __privateGet(this, _headers)[key.toLowerCase()] = value;
      }
    }
    get client() {
      return __privateGet(this, _client7);
    }
    url() {
      return __privateGet(this, _url2);
    }
    continueRequestOverrides() {
      (0, assert_js_1$7.assert)(__privateGet(this, _allowInterception), "Request Interception is not enabled!");
      return __privateGet(this, _continueRequestOverrides);
    }
    responseForRequest() {
      (0, assert_js_1$7.assert)(__privateGet(this, _allowInterception), "Request Interception is not enabled!");
      return __privateGet(this, _responseForRequest);
    }
    abortErrorReason() {
      (0, assert_js_1$7.assert)(__privateGet(this, _allowInterception), "Request Interception is not enabled!");
      return __privateGet(this, _abortErrorReason);
    }
    interceptResolutionState() {
      if (!__privateGet(this, _allowInterception)) {
        return { action: HTTPRequest_js_1$1.InterceptResolutionAction.Disabled };
      }
      if (__privateGet(this, _interceptionHandled)) {
        return { action: HTTPRequest_js_1$1.InterceptResolutionAction.AlreadyHandled };
      }
      return { ...__privateGet(this, _interceptResolutionState) };
    }
    isInterceptResolutionHandled() {
      return __privateGet(this, _interceptionHandled);
    }
    enqueueInterceptAction(pendingHandler) {
      __privateGet(this, _interceptHandlers).push(pendingHandler);
    }
    async finalizeInterceptions() {
      await __privateGet(this, _interceptHandlers).reduce((promiseChain, interceptAction) => {
        return promiseChain.then(interceptAction);
      }, Promise.resolve());
      const { action } = this.interceptResolutionState();
      switch (action) {
        case "abort":
          return await __privateMethod(this, _abort, abort_fn).call(this, __privateGet(this, _abortErrorReason));
        case "respond":
          if (__privateGet(this, _responseForRequest) === null) {
            throw new Error("Response is missing for the interception");
          }
          return await __privateMethod(this, _respond, respond_fn).call(this, __privateGet(this, _responseForRequest));
        case "continue":
          return await __privateMethod(this, _continue, continue_fn).call(this, __privateGet(this, _continueRequestOverrides));
      }
    }
    resourceType() {
      return __privateGet(this, _resourceType);
    }
    method() {
      return __privateGet(this, _method);
    }
    postData() {
      return __privateGet(this, _postData);
    }
    headers() {
      return __privateGet(this, _headers);
    }
    response() {
      return this._response;
    }
    frame() {
      return __privateGet(this, _frame2);
    }
    isNavigationRequest() {
      return __privateGet(this, _isNavigationRequest);
    }
    initiator() {
      return __privateGet(this, _initiator);
    }
    redirectChain() {
      return this._redirectChain.slice();
    }
    failure() {
      if (!this._failureText) {
        return null;
      }
      return {
        errorText: this._failureText
      };
    }
    async continue(overrides = {}, priority) {
      if (__privateGet(this, _url2).startsWith("data:")) {
        return;
      }
      (0, assert_js_1$7.assert)(__privateGet(this, _allowInterception), "Request Interception is not enabled!");
      (0, assert_js_1$7.assert)(!__privateGet(this, _interceptionHandled), "Request is already handled!");
      if (priority === void 0) {
        return await __privateMethod(this, _continue, continue_fn).call(this, overrides);
      }
      __privateSet(this, _continueRequestOverrides, overrides);
      if (__privateGet(this, _interceptResolutionState).priority === void 0 || priority > __privateGet(this, _interceptResolutionState).priority) {
        __privateSet(this, _interceptResolutionState, {
          action: HTTPRequest_js_1$1.InterceptResolutionAction.Continue,
          priority
        });
        return;
      }
      if (priority === __privateGet(this, _interceptResolutionState).priority) {
        if (__privateGet(this, _interceptResolutionState).action === "abort" || __privateGet(this, _interceptResolutionState).action === "respond") {
          return;
        }
        __privateGet(this, _interceptResolutionState).action = HTTPRequest_js_1$1.InterceptResolutionAction.Continue;
      }
      return;
    }
    async respond(response, priority) {
      if (__privateGet(this, _url2).startsWith("data:")) {
        return;
      }
      (0, assert_js_1$7.assert)(__privateGet(this, _allowInterception), "Request Interception is not enabled!");
      (0, assert_js_1$7.assert)(!__privateGet(this, _interceptionHandled), "Request is already handled!");
      if (priority === void 0) {
        return await __privateMethod(this, _respond, respond_fn).call(this, response);
      }
      __privateSet(this, _responseForRequest, response);
      if (__privateGet(this, _interceptResolutionState).priority === void 0 || priority > __privateGet(this, _interceptResolutionState).priority) {
        __privateSet(this, _interceptResolutionState, {
          action: HTTPRequest_js_1$1.InterceptResolutionAction.Respond,
          priority
        });
        return;
      }
      if (priority === __privateGet(this, _interceptResolutionState).priority) {
        if (__privateGet(this, _interceptResolutionState).action === "abort") {
          return;
        }
        __privateGet(this, _interceptResolutionState).action = HTTPRequest_js_1$1.InterceptResolutionAction.Respond;
      }
    }
    async abort(errorCode = "failed", priority) {
      if (__privateGet(this, _url2).startsWith("data:")) {
        return;
      }
      const errorReason = errorReasons[errorCode];
      (0, assert_js_1$7.assert)(errorReason, "Unknown error code: " + errorCode);
      (0, assert_js_1$7.assert)(__privateGet(this, _allowInterception), "Request Interception is not enabled!");
      (0, assert_js_1$7.assert)(!__privateGet(this, _interceptionHandled), "Request is already handled!");
      if (priority === void 0) {
        return await __privateMethod(this, _abort, abort_fn).call(this, errorReason);
      }
      __privateSet(this, _abortErrorReason, errorReason);
      if (__privateGet(this, _interceptResolutionState).priority === void 0 || priority >= __privateGet(this, _interceptResolutionState).priority) {
        __privateSet(this, _interceptResolutionState, {
          action: HTTPRequest_js_1$1.InterceptResolutionAction.Abort,
          priority
        });
        return;
      }
    }
  }
  _client7 = new WeakMap();
  _isNavigationRequest = new WeakMap();
  _allowInterception = new WeakMap();
  _interceptionHandled = new WeakMap();
  _url2 = new WeakMap();
  _resourceType = new WeakMap();
  _method = new WeakMap();
  _postData = new WeakMap();
  _headers = new WeakMap();
  _frame2 = new WeakMap();
  _continueRequestOverrides = new WeakMap();
  _responseForRequest = new WeakMap();
  _abortErrorReason = new WeakMap();
  _interceptResolutionState = new WeakMap();
  _interceptHandlers = new WeakMap();
  _initiator = new WeakMap();
  _continue = new WeakSet();
  continue_fn = async function(overrides = {}) {
    const { url, method, postData, headers } = overrides;
    __privateSet(this, _interceptionHandled, true);
    const postDataBinaryBase64 = postData ? buffer.Buffer.from(postData).toString("base64") : void 0;
    if (this._interceptionId === void 0) {
      throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.continueRequest");
    }
    await __privateGet(this, _client7).send("Fetch.continueRequest", {
      requestId: this._interceptionId,
      url,
      method,
      postData: postDataBinaryBase64,
      headers: headers ? (0, HTTPRequest_js_1$1.headersArray)(headers) : void 0
    }).catch((error) => {
      __privateSet(this, _interceptionHandled, false);
      return handleError(error);
    });
  };
  _respond = new WeakSet();
  respond_fn = async function(response) {
    __privateSet(this, _interceptionHandled, true);
    const responseBody = response.body && (0, util_js_1$7.isString)(response.body) ? buffer.Buffer.from(response.body) : response.body || null;
    const responseHeaders = {};
    if (response.headers) {
      for (const header of Object.keys(response.headers)) {
        const value = response.headers[header];
        responseHeaders[header.toLowerCase()] = Array.isArray(value) ? value.map((item) => {
          return String(item);
        }) : String(value);
      }
    }
    if (response.contentType) {
      responseHeaders["content-type"] = response.contentType;
    }
    if (responseBody && !("content-length" in responseHeaders)) {
      responseHeaders["content-length"] = String(buffer.Buffer.byteLength(responseBody));
    }
    const status = response.status || 200;
    if (this._interceptionId === void 0) {
      throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest");
    }
    await __privateGet(this, _client7).send("Fetch.fulfillRequest", {
      requestId: this._interceptionId,
      responseCode: status,
      responsePhrase: HTTPRequest_js_1$1.STATUS_TEXTS[status],
      responseHeaders: (0, HTTPRequest_js_1$1.headersArray)(responseHeaders),
      body: responseBody ? responseBody.toString("base64") : void 0
    }).catch((error) => {
      __privateSet(this, _interceptionHandled, false);
      return handleError(error);
    });
  };
  _abort = new WeakSet();
  abort_fn = async function(errorReason) {
    __privateSet(this, _interceptionHandled, true);
    if (this._interceptionId === void 0) {
      throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.failRequest");
    }
    await __privateGet(this, _client7).send("Fetch.failRequest", {
      requestId: this._interceptionId,
      errorReason: errorReason || "Failed"
    }).catch(handleError);
  };
  exports2.CdpHTTPRequest = CdpHTTPRequest;
  const errorReasons = {
    aborted: "Aborted",
    accessdenied: "AccessDenied",
    addressunreachable: "AddressUnreachable",
    blockedbyclient: "BlockedByClient",
    blockedbyresponse: "BlockedByResponse",
    connectionaborted: "ConnectionAborted",
    connectionclosed: "ConnectionClosed",
    connectionfailed: "ConnectionFailed",
    connectionrefused: "ConnectionRefused",
    connectionreset: "ConnectionReset",
    internetdisconnected: "InternetDisconnected",
    namenotresolved: "NameNotResolved",
    timedout: "TimedOut",
    failed: "Failed"
  };
  async function handleError(error) {
    if (["Invalid header"].includes(error.originalMessage)) {
      throw error;
    }
    (0, util_js_1$7.debugError)(error);
  }
  const HTTPRequest = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$6 = /* @__PURE__ */ getAugmentedNamespace(HTTPRequest);
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.CdpHTTPResponse = void 0;
  const HTTPResponse_js_1$1 = require("../api/HTTPResponse.js");
  const Errors_js_1$1 = require("../common/Errors.js");
  const SecurityDetails_js_1 = require("../common/SecurityDetails.js");
  const Deferred_js_1$5 = require("../util/Deferred.js");
  class CdpHTTPResponse extends HTTPResponse_js_1$1.HTTPResponse {
    constructor(client, request, responsePayload, extraInfo) {
      super();
      __privateAdd(this, _parseStatusTextFromExtraInfo);
      __privateAdd(this, _client8, void 0);
      __privateAdd(this, _request, void 0);
      __privateAdd(this, _contentPromise, null);
      __privateAdd(this, _bodyLoadedDeferred, Deferred_js_1$5.Deferred.create());
      __privateAdd(this, _remoteAddress, void 0);
      __privateAdd(this, _status, void 0);
      __privateAdd(this, _statusText, void 0);
      __privateAdd(this, _url3, void 0);
      __privateAdd(this, _fromDiskCache, void 0);
      __privateAdd(this, _fromServiceWorker, void 0);
      __privateAdd(this, _headers2, {});
      __privateAdd(this, _securityDetails, void 0);
      __privateAdd(this, _timing, void 0);
      __privateSet(this, _client8, client);
      __privateSet(this, _request, request);
      __privateSet(this, _remoteAddress, {
        ip: responsePayload.remoteIPAddress,
        port: responsePayload.remotePort
      });
      __privateSet(this, _statusText, __privateMethod(this, _parseStatusTextFromExtraInfo, parseStatusTextFromExtraInfo_fn).call(this, extraInfo) || responsePayload.statusText);
      __privateSet(this, _url3, request.url());
      __privateSet(this, _fromDiskCache, !!responsePayload.fromDiskCache);
      __privateSet(this, _fromServiceWorker, !!responsePayload.fromServiceWorker);
      __privateSet(this, _status, extraInfo ? extraInfo.statusCode : responsePayload.status);
      const headers = extraInfo ? extraInfo.headers : responsePayload.headers;
      for (const [key, value] of Object.entries(headers)) {
        __privateGet(this, _headers2)[key.toLowerCase()] = value;
      }
      __privateSet(this, _securityDetails, responsePayload.securityDetails ? new SecurityDetails_js_1.SecurityDetails(responsePayload.securityDetails) : null);
      __privateSet(this, _timing, responsePayload.timing || null);
    }
    _resolveBody(err) {
      if (err) {
        return __privateGet(this, _bodyLoadedDeferred).reject(err);
      }
      return __privateGet(this, _bodyLoadedDeferred).resolve();
    }
    remoteAddress() {
      return __privateGet(this, _remoteAddress);
    }
    url() {
      return __privateGet(this, _url3);
    }
    status() {
      return __privateGet(this, _status);
    }
    statusText() {
      return __privateGet(this, _statusText);
    }
    headers() {
      return __privateGet(this, _headers2);
    }
    securityDetails() {
      return __privateGet(this, _securityDetails);
    }
    timing() {
      return __privateGet(this, _timing);
    }
    buffer() {
      if (!__privateGet(this, _contentPromise)) {
        __privateSet(this, _contentPromise, __privateGet(this, _bodyLoadedDeferred).valueOrThrow().then(async () => {
          try {
            const response = await __privateGet(this, _client8).send("Network.getResponseBody", {
              requestId: __privateGet(this, _request)._requestId
            });
            return buffer.Buffer.from(response.body, response.base64Encoded ? "base64" : "utf8");
          } catch (error) {
            if (error instanceof Errors_js_1$1.ProtocolError && error.originalMessage === "No resource with given identifier found") {
              throw new Errors_js_1$1.ProtocolError("Could not load body for this request. This might happen if the request is a preflight request.");
            }
            throw error;
          }
        }));
      }
      return __privateGet(this, _contentPromise);
    }
    request() {
      return __privateGet(this, _request);
    }
    fromCache() {
      return __privateGet(this, _fromDiskCache) || __privateGet(this, _request)._fromMemoryCache;
    }
    fromServiceWorker() {
      return __privateGet(this, _fromServiceWorker);
    }
    frame() {
      return __privateGet(this, _request).frame();
    }
  }
  _client8 = new WeakMap();
  _request = new WeakMap();
  _contentPromise = new WeakMap();
  _bodyLoadedDeferred = new WeakMap();
  _remoteAddress = new WeakMap();
  _status = new WeakMap();
  _statusText = new WeakMap();
  _url3 = new WeakMap();
  _fromDiskCache = new WeakMap();
  _fromServiceWorker = new WeakMap();
  _headers2 = new WeakMap();
  _securityDetails = new WeakMap();
  _timing = new WeakMap();
  _parseStatusTextFromExtraInfo = new WeakSet();
  parseStatusTextFromExtraInfo_fn = function(extraInfo) {
    if (!extraInfo || !extraInfo.headersText) {
      return;
    }
    const firstLine = extraInfo.headersText.split("\r", 1)[0];
    if (!firstLine) {
      return;
    }
    const match = firstLine.match(/[^ ]* [^ ]* (.*)/);
    if (!match) {
      return;
    }
    const statusText = match[1];
    if (!statusText) {
      return;
    }
    return statusText;
  };
  exports2.CdpHTTPResponse = CdpHTTPResponse;
  const HTTPResponse = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null
  }, Symbol.toStringTag, { value: "Module" }));
  const require$$7 = /* @__PURE__ */ getAugmentedNamespace(HTTPResponse);
  var NetworkEventManager$1 = {};
  Object.defineProperty(NetworkEventManager$1, "__esModule", { value: true });
  NetworkEventManager$1.NetworkEventManager = void 0;
  class NetworkEventManager {
    constructor() {
      /**
       * There are four possible orders of events:
       * A. `_onRequestWillBeSent`
       * B. `_onRequestWillBeSent`, `_onRequestPaused`
       * C. `_onRequestPaused`, `_onRequestWillBeSent`
       * D. `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`
       * (see crbug.com/1196004)
       *
       * For `_onRequest` we need the event from `_onRequestWillBeSent` and
       * optionally the `interceptionId` from `_onRequestPaused`.
       *
       * If request interception is disabled, call `_onRequest` once per call to
       * `_onRequestWillBeSent`.
       * If request interception is enabled, call `_onRequest` once per call to
       * `_onRequestPaused` (once per `interceptionId`).
       *
       * Events are stored to allow for subsequent events to call `_onRequest`.
       *
       * Note that (chains of) redirect requests have the same `requestId` (!) as
       * the original request. We have to anticipate series of events like these:
       * A. `_onRequestWillBeSent`,
       * `_onRequestWillBeSent`, ...
       * B. `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestWillBeSent`, `_onRequestPaused`, ...
       * C. `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestPaused`, `_onRequestWillBeSent`, ...
       * D. `_onRequestPaused`, `_onRequestWillBeSent`,
       * `_onRequestPaused`, `_onRequestWillBeSent`, `_onRequestPaused`,
       * `_onRequestWillBeSent`, `_onRequestPaused`, `_onRequestPaused`, ...
       * (see crbug.com/1196004)
       */
      __privateAdd(this, _requestWillBeSentMap, /* @__PURE__ */ new Map());
      __privateAdd(this, _requestPausedMap, /* @__PURE__ */ new Map());
      __privateAdd(this, _httpRequestsMap, /* @__PURE__ */ new Map());
      /*
       * The below maps are used to reconcile Network.responseReceivedExtraInfo
       * events with their corresponding request. Each response and redirect
       * response gets an ExtraInfo event, and we don't know which will come first.
       * This means that we have to store a Response or an ExtraInfo for each
       * response, and emit the event when we get both of them. In addition, to
       * handle redirects, we have to make them Arrays to represent the chain of
       * events.
       */
      __privateAdd(this, _responseReceivedExtraInfoMap, /* @__PURE__ */ new Map());
      __privateAdd(this, _queuedRedirectInfoMap, /* @__PURE__ */ new Map());
      __privateAdd(this, _queuedEventGroupMap, /* @__PURE__ */ new Map());
    }
    forget(networkRequestId) {
      __privateGet(this, _requestWillBeSentMap).delete(networkRequestId);
      __privateGet(this, _requestPausedMap).delete(networkRequestId);
      __privateGet(this, _queuedEventGroupMap).delete(networkRequestId);
      __privateGet(this, _queuedRedirectInfoMap).delete(networkRequestId);
      __privateGet(this, _responseReceivedExtraInfoMap).delete(networkRequestId);
    }
    responseExtraInfo(networkRequestId) {
      if (!__privateGet(this, _responseReceivedExtraInfoMap).has(networkRequestId)) {
        __privateGet(this, _responseReceivedExtraInfoMap).set(networkRequestId, []);
      }
      return __privateGet(this, _responseReceivedExtraInfoMap).get(networkRequestId);
    }
    queuedRedirectInfo(fetchRequestId) {
      if (!__privateGet(this, _queuedRedirectInfoMap).has(fetchRequestId)) {
        __privateGet(this, _queuedRedirectInfoMap).set(fetchRequestId, []);
      }
      return __privateGet(this, _queuedRedirectInfoMap).get(fetchRequestId);
    }
    queueRedirectInfo(fetchRequestId, redirectInfo) {
      this.queuedRedirectInfo(fetchRequestId).push(redirectInfo);
    }
    takeQueuedRedirectInfo(fetchRequestId) {
      return this.queuedRedirectInfo(fetchRequestId).shift();
    }
    inFlightRequestsCount() {
      let inFlightRequestCounter = 0;
      for (const request of __privateGet(this, _httpRequestsMap).values()) {
        if (!request.response()) {
          inFlightRequestCounter++;
        }
      }
      return inFlightRequestCounter;
    }
    storeRequestWillBeSent(networkRequestId, event) {
      __privateGet(this, _requestWillBeSentMap).set(networkRequestId, event);
    }
    getRequestWillBeSent(networkRequestId) {
      return __privateGet(this, _requestWillBeSentMap).get(networkRequestId);
    }
    forgetRequestWillBeSent(networkRequestId) {
      __privateGet(this, _requestWillBeSentMap).delete(networkRequestId);
    }
    getRequestPaused(networkRequestId) {
      return __privateGet(this, _requestPausedMap).get(networkRequestId);
    }
    forgetRequestPaused(networkRequestId) {
      __privateGet(this, _requestPausedMap).delete(networkRequestId);
    }
    storeRequestPaused(networkRequestId, event) {
      __privateGet(this, _requestPausedMap).set(networkRequestId, event);
    }
    getRequest(networkRequestId) {
      return __privateGet(this, _httpRequestsMap).get(networkRequestId);
    }
    storeRequest(networkRequestId, request) {
      __privateGet(this, _httpRequestsMap).set(networkRequestId, request);
    }
    forgetRequest(networkRequestId) {
      __privateGet(this, _httpRequestsMap).delete(networkRequestId);
    }
    getQueuedEventGroup(networkRequestId) {
      return __privateGet(this, _queuedEventGroupMap).get(networkRequestId);
    }
    queueEventGroup(networkRequestId, event) {
      __privateGet(this, _queuedEventGroupMap).set(networkRequestId, event);
    }
    forgetQueuedEventGroup(networkRequestId) {
      __privateGet(this, _queuedEventGroupMap).delete(networkRequestId);
    }
  }
  _requestWillBeSentMap = new WeakMap();
  _requestPausedMap = new WeakMap();
  _httpRequestsMap = new WeakMap();
  _responseReceivedExtraInfoMap = new WeakMap();
  _queuedRedirectInfoMap = new WeakMap();
  _queuedEventGroupMap = new WeakMap();
  NetworkEventManager$1.NetworkEventManager = NetworkEventManager;
  Object.defineProperty(NetworkManager$1, "__esModule", { value: true });
  NetworkManager$1.NetworkManager = void 0;
  const CDPSession_js_1$5 = CDPSession$2;
  const EventEmitter_js_1$3 = EventEmitter$1;
  const NetworkManagerEvents_js_1$1 = NetworkManagerEvents;
  const util_js_1$6 = require$$2$1;
  const assert_js_1$6 = assert$1;
  const disposable_js_1$2 = disposable;
  const HTTPRequest_js_1 = require$$6;
  const HTTPResponse_js_1 = require$$7;
  const NetworkEventManager_js_1 = NetworkEventManager$1;
  class NetworkManager extends EventEmitter_js_1$3.EventEmitter {
    constructor(ignoreHTTPSErrors, frameManager) {
      super();
      __privateAdd(this, _removeClient);
      __privateAdd(this, _applyExtraHTTPHeaders);
      __privateAdd(this, _applyToAllClients);
      __privateAdd(this, _applyNetworkConditions);
      __privateAdd(this, _applyUserAgent);
      __privateAdd(this, _applyProtocolRequestInterception);
      __privateAdd(this, _applyProtocolCacheDisabled);
      __privateAdd(this, _onRequestWillBeSent);
      __privateAdd(this, _onAuthRequired);
      /**
       * CDP may send a Fetch.requestPaused without or before a
       * Network.requestWillBeSent
       *
       * CDP may send multiple Fetch.requestPaused
       * for the same Network.requestWillBeSent.
       */
      __privateAdd(this, _onRequestPaused);
      __privateAdd(this, _patchRequestEventHeaders);
      __privateAdd(this, _onRequestWithoutNetworkInstrumentation);
      __privateAdd(this, _onRequest2);
      __privateAdd(this, _onRequestServedFromCache);
      __privateAdd(this, _handleRequestRedirect);
      __privateAdd(this, _emitResponseEvent);
      __privateAdd(this, _onResponseReceived);
      __privateAdd(this, _onResponseReceivedExtraInfo);
      __privateAdd(this, _forgetRequest);
      __privateAdd(this, _onLoadingFinished);
      __privateAdd(this, _emitLoadingFinished);
      __privateAdd(this, _onLoadingFailed);
      __privateAdd(this, _emitLoadingFailed);
      __privateAdd(this, _ignoreHTTPSErrors, void 0);
      __privateAdd(this, _frameManager, void 0);
      __privateAdd(this, _networkEventManager, new NetworkEventManager_js_1.NetworkEventManager());
      __privateAdd(this, _extraHTTPHeaders, void 0);
      __privateAdd(this, _credentials, void 0);
      __privateAdd(this, _attemptedAuthentications, /* @__PURE__ */ new Set());
      __privateAdd(this, _userRequestInterceptionEnabled, false);
      __privateAdd(this, _protocolRequestInterceptionEnabled, false);
      __privateAdd(this, _userCacheDisabled, void 0);
      __privateAdd(this, _emulatedNetworkConditions, void 0);
      __privateAdd(this, _userAgent, void 0);
      __privateAdd(this, _userAgentMetadata, void 0);
      __privateAdd(this, _handlers2, [
        ["Fetch.requestPaused", __privateMethod(this, _onRequestPaused, onRequestPaused_fn)],
        ["Fetch.authRequired", __privateMethod(this, _onAuthRequired, onAuthRequired_fn)],
        ["Network.requestWillBeSent", __privateMethod(this, _onRequestWillBeSent, onRequestWillBeSent_fn)],
        ["Network.requestServedFromCache", __privateMethod(this, _onRequestServedFromCache, onRequestServedFromCache_fn)],
        ["Network.responseReceived", __privateMethod(this, _onResponseReceived, onResponseReceived_fn)],
        ["Network.loadingFinished", __privateMethod(this, _onLoadingFinished, onLoadingFinished_fn)],
        ["Network.loadingFailed", __privateMethod(this, _onLoadingFailed, onLoadingFailed_fn)],
        ["Network.responseReceivedExtraInfo", __privateMethod(this, _onResponseReceivedExtraInfo, onResponseReceivedExtraInfo_fn)],
        [CDPSession_js_1$5.CDPSessionEvent.Disconnected, __privateMethod(this, _removeClient, removeClient_fn)]
      ]);
      __privateAdd(this, _clients, /* @__PURE__ */ new Map());
      __privateSet(this, _ignoreHTTPSErrors, ignoreHTTPSErrors);
      __privateSet(this, _frameManager, frameManager);
    }
    async addClient(client) {
      if (__privateGet(this, _clients).has(client)) {
        return;
      }
      const subscriptions = new disposable_js_1$2.DisposableStack();
      __privateGet(this, _clients).set(client, subscriptions);
      for (const [event, handler] of __privateGet(this, _handlers2)) {
        subscriptions.use(
          // TODO: Remove any here.
          new EventEmitter_js_1$3.EventSubscription(client, event, (arg) => {
            return handler.bind(this)(client, arg);
          })
        );
      }
      await Promise.all([
        __privateGet(this, _ignoreHTTPSErrors) ? client.send("Security.setIgnoreCertificateErrors", {
          ignore: true
        }) : null,
        client.send("Network.enable"),
        __privateMethod(this, _applyExtraHTTPHeaders, applyExtraHTTPHeaders_fn).call(this, client),
        __privateMethod(this, _applyNetworkConditions, applyNetworkConditions_fn).call(this, client),
        __privateMethod(this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled_fn).call(this, client),
        __privateMethod(this, _applyProtocolRequestInterception, applyProtocolRequestInterception_fn).call(this, client),
        __privateMethod(this, _applyUserAgent, applyUserAgent_fn).call(this, client)
      ]);
    }
    async authenticate(credentials) {
      __privateSet(this, _credentials, credentials);
      const enabled = __privateGet(this, _userRequestInterceptionEnabled) || !!__privateGet(this, _credentials);
      if (enabled === __privateGet(this, _protocolRequestInterceptionEnabled)) {
        return;
      }
      __privateSet(this, _protocolRequestInterceptionEnabled, enabled);
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyProtocolRequestInterception, applyProtocolRequestInterception_fn).bind(this));
    }
    async setExtraHTTPHeaders(extraHTTPHeaders) {
      __privateSet(this, _extraHTTPHeaders, {});
      for (const key of Object.keys(extraHTTPHeaders)) {
        const value = extraHTTPHeaders[key];
        (0, assert_js_1$6.assert)((0, util_js_1$6.isString)(value), `Expected value of header "${key}" to be String, but "${typeof value}" is found.`);
        __privateGet(this, _extraHTTPHeaders)[key.toLowerCase()] = value;
      }
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyExtraHTTPHeaders, applyExtraHTTPHeaders_fn).bind(this));
    }
    extraHTTPHeaders() {
      return Object.assign({}, __privateGet(this, _extraHTTPHeaders));
    }
    inFlightRequestsCount() {
      return __privateGet(this, _networkEventManager).inFlightRequestsCount();
    }
    async setOfflineMode(value) {
      if (!__privateGet(this, _emulatedNetworkConditions)) {
        __privateSet(this, _emulatedNetworkConditions, {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        });
      }
      __privateGet(this, _emulatedNetworkConditions).offline = value;
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyNetworkConditions, applyNetworkConditions_fn).bind(this));
    }
    async emulateNetworkConditions(networkConditions) {
      if (!__privateGet(this, _emulatedNetworkConditions)) {
        __privateSet(this, _emulatedNetworkConditions, {
          offline: false,
          upload: -1,
          download: -1,
          latency: 0
        });
      }
      __privateGet(this, _emulatedNetworkConditions).upload = networkConditions ? networkConditions.upload : -1;
      __privateGet(this, _emulatedNetworkConditions).download = networkConditions ? networkConditions.download : -1;
      __privateGet(this, _emulatedNetworkConditions).latency = networkConditions ? networkConditions.latency : 0;
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyNetworkConditions, applyNetworkConditions_fn).bind(this));
    }
    async setUserAgent(userAgent, userAgentMetadata) {
      __privateSet(this, _userAgent, userAgent);
      __privateSet(this, _userAgentMetadata, userAgentMetadata);
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyUserAgent, applyUserAgent_fn).bind(this));
    }
    async setCacheEnabled(enabled) {
      __privateSet(this, _userCacheDisabled, !enabled);
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled_fn).bind(this));
    }
    async setRequestInterception(value) {
      __privateSet(this, _userRequestInterceptionEnabled, value);
      const enabled = __privateGet(this, _userRequestInterceptionEnabled) || !!__privateGet(this, _credentials);
      if (enabled === __privateGet(this, _protocolRequestInterceptionEnabled)) {
        return;
      }
      __privateSet(this, _protocolRequestInterceptionEnabled, enabled);
      await __privateMethod(this, _applyToAllClients, applyToAllClients_fn).call(this, __privateMethod(this, _applyProtocolRequestInterception, applyProtocolRequestInterception_fn).bind(this));
    }
  }
  _ignoreHTTPSErrors = new WeakMap();
  _frameManager = new WeakMap();
  _networkEventManager = new WeakMap();
  _extraHTTPHeaders = new WeakMap();
  _credentials = new WeakMap();
  _attemptedAuthentications = new WeakMap();
  _userRequestInterceptionEnabled = new WeakMap();
  _protocolRequestInterceptionEnabled = new WeakMap();
  _userCacheDisabled = new WeakMap();
  _emulatedNetworkConditions = new WeakMap();
  _userAgent = new WeakMap();
  _userAgentMetadata = new WeakMap();
  _handlers2 = new WeakMap();
  _clients = new WeakMap();
  _removeClient = new WeakSet();
  removeClient_fn = async function(client) {
    var _a2;
    (_a2 = __privateGet(this, _clients).get(client)) == null ? void 0 : _a2.dispose();
    __privateGet(this, _clients).delete(client);
  };
  _applyExtraHTTPHeaders = new WeakSet();
  applyExtraHTTPHeaders_fn = async function(client) {
    if (__privateGet(this, _extraHTTPHeaders) === void 0) {
      return;
    }
    await client.send("Network.setExtraHTTPHeaders", {
      headers: __privateGet(this, _extraHTTPHeaders)
    });
  };
  _applyToAllClients = new WeakSet();
  applyToAllClients_fn = async function(fn) {
    await Promise.all(Array.from(__privateGet(this, _clients).keys()).map((client) => {
      return fn(client);
    }));
  };
  _applyNetworkConditions = new WeakSet();
  applyNetworkConditions_fn = async function(client) {
    if (__privateGet(this, _emulatedNetworkConditions) === void 0) {
      return;
    }
    await client.send("Network.emulateNetworkConditions", {
      offline: __privateGet(this, _emulatedNetworkConditions).offline,
      latency: __privateGet(this, _emulatedNetworkConditions).latency,
      uploadThroughput: __privateGet(this, _emulatedNetworkConditions).upload,
      downloadThroughput: __privateGet(this, _emulatedNetworkConditions).download
    });
  };
  _applyUserAgent = new WeakSet();
  applyUserAgent_fn = async function(client) {
    if (__privateGet(this, _userAgent) === void 0) {
      return;
    }
    await client.send("Network.setUserAgentOverride", {
      userAgent: __privateGet(this, _userAgent),
      userAgentMetadata: __privateGet(this, _userAgentMetadata)
    });
  };
  _applyProtocolRequestInterception = new WeakSet();
  applyProtocolRequestInterception_fn = async function(client) {
    if (__privateGet(this, _userCacheDisabled) === void 0) {
      __privateSet(this, _userCacheDisabled, false);
    }
    if (__privateGet(this, _protocolRequestInterceptionEnabled)) {
      await Promise.all([
        __privateMethod(this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled_fn).call(this, client),
        client.send("Fetch.enable", {
          handleAuthRequests: true,
          patterns: [{ urlPattern: "*" }]
        })
      ]);
    } else {
      await Promise.all([
        __privateMethod(this, _applyProtocolCacheDisabled, applyProtocolCacheDisabled_fn).call(this, client),
        client.send("Fetch.disable")
      ]);
    }
  };
  _applyProtocolCacheDisabled = new WeakSet();
  applyProtocolCacheDisabled_fn = async function(client) {
    if (__privateGet(this, _userCacheDisabled) === void 0) {
      return;
    }
    await client.send("Network.setCacheDisabled", {
      cacheDisabled: __privateGet(this, _userCacheDisabled)
    });
  };
  _onRequestWillBeSent = new WeakSet();
  onRequestWillBeSent_fn = function(client, event) {
    if (__privateGet(this, _userRequestInterceptionEnabled) && !event.request.url.startsWith("data:")) {
      const { requestId: networkRequestId } = event;
      __privateGet(this, _networkEventManager).storeRequestWillBeSent(networkRequestId, event);
      const requestPausedEvent = __privateGet(this, _networkEventManager).getRequestPaused(networkRequestId);
      if (requestPausedEvent) {
        const { requestId: fetchRequestId } = requestPausedEvent;
        __privateMethod(this, _patchRequestEventHeaders, patchRequestEventHeaders_fn).call(this, event, requestPausedEvent);
        __privateMethod(this, _onRequest2, onRequest_fn2).call(this, client, event, fetchRequestId);
        __privateGet(this, _networkEventManager).forgetRequestPaused(networkRequestId);
      }
      return;
    }
    __privateMethod(this, _onRequest2, onRequest_fn2).call(this, client, event, void 0);
  };
  _onAuthRequired = new WeakSet();
  onAuthRequired_fn = function(client, event) {
    let response = "Default";
    if (__privateGet(this, _attemptedAuthentications).has(event.requestId)) {
      response = "CancelAuth";
    } else if (__privateGet(this, _credentials)) {
      response = "ProvideCredentials";
      __privateGet(this, _attemptedAuthentications).add(event.requestId);
    }
    const { username, password } = __privateGet(this, _credentials) || {
      username: void 0,
      password: void 0
    };
    client.send("Fetch.continueWithAuth", {
      requestId: event.requestId,
      authChallengeResponse: { response, username, password }
    }).catch(util_js_1$6.debugError);
  };
  _onRequestPaused = new WeakSet();
  onRequestPaused_fn = function(client, event) {
    if (!__privateGet(this, _userRequestInterceptionEnabled) && __privateGet(this, _protocolRequestInterceptionEnabled)) {
      client.send("Fetch.continueRequest", {
        requestId: event.requestId
      }).catch(util_js_1$6.debugError);
    }
    const { networkId: networkRequestId, requestId: fetchRequestId } = event;
    if (!networkRequestId) {
      __privateMethod(this, _onRequestWithoutNetworkInstrumentation, onRequestWithoutNetworkInstrumentation_fn).call(this, client, event);
      return;
    }
    const requestWillBeSentEvent = (() => {
      const requestWillBeSentEvent2 = __privateGet(this, _networkEventManager).getRequestWillBeSent(networkRequestId);
      if (requestWillBeSentEvent2 && (requestWillBeSentEvent2.request.url !== event.request.url || requestWillBeSentEvent2.request.method !== event.request.method)) {
        __privateGet(this, _networkEventManager).forgetRequestWillBeSent(networkRequestId);
        return;
      }
      return requestWillBeSentEvent2;
    })();
    if (requestWillBeSentEvent) {
      __privateMethod(this, _patchRequestEventHeaders, patchRequestEventHeaders_fn).call(this, requestWillBeSentEvent, event);
      __privateMethod(this, _onRequest2, onRequest_fn2).call(this, client, requestWillBeSentEvent, fetchRequestId);
    } else {
      __privateGet(this, _networkEventManager).storeRequestPaused(networkRequestId, event);
    }
  };
  _patchRequestEventHeaders = new WeakSet();
  patchRequestEventHeaders_fn = function(requestWillBeSentEvent, requestPausedEvent) {
    requestWillBeSentEvent.request.headers = {
      ...requestWillBeSentEvent.request.headers,
      // includes extra headers, like: Accept, Origin
      ...requestPausedEvent.request.headers
    };
  };
  _onRequestWithoutNetworkInstrumentation = new WeakSet();
  onRequestWithoutNetworkInstrumentation_fn = function(client, event) {
    const frame = event.frameId ? __privateGet(this, _frameManager).frame(event.frameId) : null;
    const request = new HTTPRequest_js_1.CdpHTTPRequest(client, frame, event.requestId, __privateGet(this, _userRequestInterceptionEnabled), event, []);
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
  };
  _onRequest2 = new WeakSet();
  onRequest_fn2 = function(client, event, fetchRequestId) {
    let redirectChain = [];
    if (event.redirectResponse) {
      let redirectResponseExtraInfo = null;
      if (event.redirectHasExtraInfo) {
        redirectResponseExtraInfo = __privateGet(this, _networkEventManager).responseExtraInfo(event.requestId).shift();
        if (!redirectResponseExtraInfo) {
          __privateGet(this, _networkEventManager).queueRedirectInfo(event.requestId, {
            event,
            fetchRequestId
          });
          return;
        }
      }
      const request2 = __privateGet(this, _networkEventManager).getRequest(event.requestId);
      if (request2) {
        __privateMethod(this, _handleRequestRedirect, handleRequestRedirect_fn).call(this, client, request2, event.redirectResponse, redirectResponseExtraInfo);
        redirectChain = request2._redirectChain;
      }
    }
    const frame = event.frameId ? __privateGet(this, _frameManager).frame(event.frameId) : null;
    const request = new HTTPRequest_js_1.CdpHTTPRequest(client, frame, fetchRequestId, __privateGet(this, _userRequestInterceptionEnabled), event, redirectChain);
    __privateGet(this, _networkEventManager).storeRequest(event.requestId, request);
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.Request, request);
    void request.finalizeInterceptions();
  };
  _onRequestServedFromCache = new WeakSet();
  onRequestServedFromCache_fn = function(_client15, event) {
    const request = __privateGet(this, _networkEventManager).getRequest(event.requestId);
    if (request) {
      request._fromMemoryCache = true;
    }
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.RequestServedFromCache, request);
  };
  _handleRequestRedirect = new WeakSet();
  handleRequestRedirect_fn = function(client, request, responsePayload, extraInfo) {
    const response = new HTTPResponse_js_1.CdpHTTPResponse(client, request, responsePayload, extraInfo);
    request._response = response;
    request._redirectChain.push(request);
    response._resolveBody(new Error("Response body is unavailable for redirect responses"));
    __privateMethod(this, _forgetRequest, forgetRequest_fn).call(this, request, false);
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.Response, response);
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.RequestFinished, request);
  };
  _emitResponseEvent = new WeakSet();
  emitResponseEvent_fn = function(client, responseReceived, extraInfo) {
    const request = __privateGet(this, _networkEventManager).getRequest(responseReceived.requestId);
    if (!request) {
      return;
    }
    const extraInfos = __privateGet(this, _networkEventManager).responseExtraInfo(responseReceived.requestId);
    if (extraInfos.length) {
      (0, util_js_1$6.debugError)(new Error("Unexpected extraInfo events for request " + responseReceived.requestId));
    }
    if (responseReceived.response.fromDiskCache) {
      extraInfo = null;
    }
    const response = new HTTPResponse_js_1.CdpHTTPResponse(client, request, responseReceived.response, extraInfo);
    request._response = response;
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.Response, response);
  };
  _onResponseReceived = new WeakSet();
  onResponseReceived_fn = function(client, event) {
    const request = __privateGet(this, _networkEventManager).getRequest(event.requestId);
    let extraInfo = null;
    if (request && !request._fromMemoryCache && event.hasExtraInfo) {
      extraInfo = __privateGet(this, _networkEventManager).responseExtraInfo(event.requestId).shift();
      if (!extraInfo) {
        __privateGet(this, _networkEventManager).queueEventGroup(event.requestId, {
          responseReceivedEvent: event
        });
        return;
      }
    }
    __privateMethod(this, _emitResponseEvent, emitResponseEvent_fn).call(this, client, event, extraInfo);
  };
  _onResponseReceivedExtraInfo = new WeakSet();
  onResponseReceivedExtraInfo_fn = function(client, event) {
    const redirectInfo = __privateGet(this, _networkEventManager).takeQueuedRedirectInfo(event.requestId);
    if (redirectInfo) {
      __privateGet(this, _networkEventManager).responseExtraInfo(event.requestId).push(event);
      __privateMethod(this, _onRequest2, onRequest_fn2).call(this, client, redirectInfo.event, redirectInfo.fetchRequestId);
      return;
    }
    const queuedEvents = __privateGet(this, _networkEventManager).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      __privateGet(this, _networkEventManager).forgetQueuedEventGroup(event.requestId);
      __privateMethod(this, _emitResponseEvent, emitResponseEvent_fn).call(this, client, queuedEvents.responseReceivedEvent, event);
      if (queuedEvents.loadingFinishedEvent) {
        __privateMethod(this, _emitLoadingFinished, emitLoadingFinished_fn).call(this, queuedEvents.loadingFinishedEvent);
      }
      if (queuedEvents.loadingFailedEvent) {
        __privateMethod(this, _emitLoadingFailed, emitLoadingFailed_fn).call(this, queuedEvents.loadingFailedEvent);
      }
      return;
    }
    __privateGet(this, _networkEventManager).responseExtraInfo(event.requestId).push(event);
  };
  _forgetRequest = new WeakSet();
  forgetRequest_fn = function(request, events) {
    const requestId = request._requestId;
    const interceptionId = request._interceptionId;
    __privateGet(this, _networkEventManager).forgetRequest(requestId);
    interceptionId !== void 0 && __privateGet(this, _attemptedAuthentications).delete(interceptionId);
    if (events) {
      __privateGet(this, _networkEventManager).forget(requestId);
    }
  };
  _onLoadingFinished = new WeakSet();
  onLoadingFinished_fn = function(_client15, event) {
    const queuedEvents = __privateGet(this, _networkEventManager).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      queuedEvents.loadingFinishedEvent = event;
    } else {
      __privateMethod(this, _emitLoadingFinished, emitLoadingFinished_fn).call(this, event);
    }
  };
  _emitLoadingFinished = new WeakSet();
  emitLoadingFinished_fn = function(event) {
    var _a2;
    const request = __privateGet(this, _networkEventManager).getRequest(event.requestId);
    if (!request) {
      return;
    }
    if (request.response()) {
      (_a2 = request.response()) == null ? void 0 : _a2._resolveBody();
    }
    __privateMethod(this, _forgetRequest, forgetRequest_fn).call(this, request, true);
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.RequestFinished, request);
  };
  _onLoadingFailed = new WeakSet();
  onLoadingFailed_fn = function(_client15, event) {
    const queuedEvents = __privateGet(this, _networkEventManager).getQueuedEventGroup(event.requestId);
    if (queuedEvents) {
      queuedEvents.loadingFailedEvent = event;
    } else {
      __privateMethod(this, _emitLoadingFailed, emitLoadingFailed_fn).call(this, event);
    }
  };
  _emitLoadingFailed = new WeakSet();
  emitLoadingFailed_fn = function(event) {
    const request = __privateGet(this, _networkEventManager).getRequest(event.requestId);
    if (!request) {
      return;
    }
    request._failureText = event.errorText;
    const response = request.response();
    if (response) {
      response._resolveBody();
    }
    __privateMethod(this, _forgetRequest, forgetRequest_fn).call(this, request, true);
    this.emit(NetworkManagerEvents_js_1$1.NetworkManagerEvent.RequestFailed, request);
  };
  NetworkManager$1.NetworkManager = NetworkManager;
  Object.defineProperty(FrameManager$1, "__esModule", { value: true });
  FrameManager$1.FrameManager = void 0;
  const CDPSession_js_1$4 = CDPSession$2;
  const Frame_js_1 = Frame$1;
  const EventEmitter_js_1$2 = EventEmitter$1;
  const util_js_1$5 = require$$2$1;
  const assert_js_1$5 = assert$1;
  const Deferred_js_1$4 = Deferred$1;
  const disposable_js_1$1 = disposable;
  const ErrorLike_js_1$2 = ErrorLike;
  const CDPSession_js_2$1 = CDPSession;
  const Connection_js_1$1 = Connection$1;
  const DeviceRequestPrompt_js_1 = DeviceRequestPrompt$1;
  const ExecutionContext_js_1$2 = ExecutionContext$1;
  const Frame_js_2 = Frame;
  const FrameManagerEvents_js_1$1 = FrameManagerEvents;
  const FrameTree_js_1 = FrameTree$1;
  const IsolatedWorlds_js_1$1 = IsolatedWorlds;
  const NetworkManager_js_1 = NetworkManager$1;
  const TIME_FOR_WAITING_FOR_SWAP = 100;
  class FrameManager extends EventEmitter_js_1$2.EventEmitter {
    constructor(client, page, ignoreHTTPSErrors, timeoutSettings) {
      super();
      /**
       * Called when the frame's client is disconnected. We don't know if the
       * disconnect means that the frame is removed or if it will be replaced by a
       * new frame. Therefore, we wait for a swap event.
       */
      __privateAdd(this, _onClientDisconnect);
      __privateAdd(this, _onLifecycleEvent);
      __privateAdd(this, _onFrameStartedLoading);
      __privateAdd(this, _onFrameStoppedLoading);
      __privateAdd(this, _handleFrameTree);
      __privateAdd(this, _onFrameAttached);
      __privateAdd(this, _onFrameNavigated);
      __privateAdd(this, _createIsolatedWorld);
      __privateAdd(this, _onFrameNavigatedWithinDocument);
      __privateAdd(this, _onFrameDetached2);
      __privateAdd(this, _onExecutionContextCreated);
      __privateAdd(this, _onExecutionContextDestroyed);
      __privateAdd(this, _onExecutionContextsCleared3);
      __privateAdd(this, _removeFramesRecursively);
      __privateAdd(this, _page, void 0);
      __privateAdd(this, _networkManager, void 0);
      __privateAdd(this, _timeoutSettings3, void 0);
      __privateAdd(this, _contextIdToContext, /* @__PURE__ */ new Map());
      __privateAdd(this, _isolatedWorlds, /* @__PURE__ */ new Set());
      __privateAdd(this, _client9, void 0);
      __publicField(this, "_frameTree", new FrameTree_js_1.FrameTree());
      /**
       * Set of frame IDs stored to indicate if a frame has received a
       * frameNavigated event so that frame tree responses could be ignored as the
       * frameNavigated event usually contains the latest information.
       */
      __privateAdd(this, _frameNavigatedReceived, /* @__PURE__ */ new Set());
      __privateAdd(this, _deviceRequestPromptManagerMap, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _frameTreeHandled, void 0);
      __privateSet(this, _client9, client);
      __privateSet(this, _page, page);
      __privateSet(this, _networkManager, new NetworkManager_js_1.NetworkManager(ignoreHTTPSErrors, this));
      __privateSet(this, _timeoutSettings3, timeoutSettings);
      this.setupEventListeners(__privateGet(this, _client9));
      client.once(CDPSession_js_1$4.CDPSessionEvent.Disconnected, () => {
        __privateMethod(this, _onClientDisconnect, onClientDisconnect_fn).call(this).catch(util_js_1$5.debugError);
      });
    }
    get timeoutSettings() {
      return __privateGet(this, _timeoutSettings3);
    }
    get networkManager() {
      return __privateGet(this, _networkManager);
    }
    get client() {
      return __privateGet(this, _client9);
    }
    /**
     * When the main frame is replaced by another main frame,
     * we maintain the main frame object identity while updating
     * its frame tree and ID.
     */
    async swapFrameTree(client) {
      __privateMethod(this, _onExecutionContextsCleared3, onExecutionContextsCleared_fn3).call(this, __privateGet(this, _client9));
      __privateSet(this, _client9, client);
      (0, assert_js_1$5.assert)(__privateGet(this, _client9) instanceof CDPSession_js_2$1.CdpCDPSession, "CDPSession is not an instance of CDPSessionImpl.");
      const frame = this._frameTree.getMainFrame();
      if (frame) {
        __privateGet(this, _frameNavigatedReceived).add(__privateGet(this, _client9)._target()._targetId);
        this._frameTree.removeFrame(frame);
        frame.updateId(__privateGet(this, _client9)._target()._targetId);
        frame.mainRealm().clearContext();
        frame.isolatedRealm().clearContext();
        this._frameTree.addFrame(frame);
        frame.updateClient(client, true);
      }
      this.setupEventListeners(client);
      client.once(CDPSession_js_1$4.CDPSessionEvent.Disconnected, () => {
        __privateMethod(this, _onClientDisconnect, onClientDisconnect_fn).call(this).catch(util_js_1$5.debugError);
      });
      await this.initialize(client);
      await __privateGet(this, _networkManager).addClient(client);
      if (frame) {
        frame.emit(Frame_js_1.FrameEvent.FrameSwappedByActivation, void 0);
      }
    }
    async registerSpeculativeSession(client) {
      await __privateGet(this, _networkManager).addClient(client);
    }
    setupEventListeners(session) {
      session.on("Page.frameAttached", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onFrameAttached, onFrameAttached_fn).call(this, session, event.frameId, event.parentFrameId);
      });
      session.on("Page.frameNavigated", async (event) => {
        var _a2;
        __privateGet(this, _frameNavigatedReceived).add(event.frame.id);
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        void __privateMethod(this, _onFrameNavigated, onFrameNavigated_fn).call(this, event.frame, event.type);
      });
      session.on("Page.navigatedWithinDocument", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onFrameNavigatedWithinDocument, onFrameNavigatedWithinDocument_fn).call(this, event.frameId, event.url);
      });
      session.on("Page.frameDetached", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onFrameDetached2, onFrameDetached_fn2).call(this, event.frameId, event.reason);
      });
      session.on("Page.frameStartedLoading", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onFrameStartedLoading, onFrameStartedLoading_fn).call(this, event.frameId);
      });
      session.on("Page.frameStoppedLoading", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onFrameStoppedLoading, onFrameStoppedLoading_fn).call(this, event.frameId);
      });
      session.on("Runtime.executionContextCreated", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onExecutionContextCreated, onExecutionContextCreated_fn).call(this, event.context, session);
      });
      session.on("Runtime.executionContextDestroyed", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onExecutionContextDestroyed, onExecutionContextDestroyed_fn).call(this, event.executionContextId, session);
      });
      session.on("Runtime.executionContextsCleared", async () => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onExecutionContextsCleared3, onExecutionContextsCleared_fn3).call(this, session);
      });
      session.on("Page.lifecycleEvent", async (event) => {
        var _a2;
        await ((_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.valueOrThrow());
        __privateMethod(this, _onLifecycleEvent, onLifecycleEvent_fn).call(this, event);
      });
    }
    async initialize(client) {
      var _a2, _b;
      try {
        (_a2 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a2.resolve();
        __privateSet(this, _frameTreeHandled, Deferred_js_1$4.Deferred.create());
        await Promise.all([
          __privateGet(this, _networkManager).addClient(client),
          client.send("Page.enable"),
          client.send("Page.getFrameTree").then(({ frameTree }) => {
            var _a3;
            __privateMethod(this, _handleFrameTree, handleFrameTree_fn).call(this, client, frameTree);
            (_a3 = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _a3.resolve();
          }),
          client.send("Page.setLifecycleEventsEnabled", { enabled: true }),
          client.send("Runtime.enable").then(() => {
            return __privateMethod(this, _createIsolatedWorld, createIsolatedWorld_fn).call(this, client, util_js_1$5.UTILITY_WORLD_NAME);
          })
        ]);
      } catch (error) {
        (_b = __privateGet(this, _frameTreeHandled)) == null ? void 0 : _b.resolve();
        if ((0, ErrorLike_js_1$2.isErrorLike)(error) && (0, Connection_js_1$1.isTargetClosedError)(error)) {
          return;
        }
        throw error;
      }
    }
    executionContextById(contextId, session = __privateGet(this, _client9)) {
      const context = this.getExecutionContextById(contextId, session);
      (0, assert_js_1$5.assert)(context, "INTERNAL ERROR: missing context with id = " + contextId);
      return context;
    }
    getExecutionContextById(contextId, session = __privateGet(this, _client9)) {
      return __privateGet(this, _contextIdToContext).get(`${session.id()}:${contextId}`);
    }
    page() {
      return __privateGet(this, _page);
    }
    mainFrame() {
      const mainFrame = this._frameTree.getMainFrame();
      (0, assert_js_1$5.assert)(mainFrame, "Requesting main frame too early!");
      return mainFrame;
    }
    frames() {
      return Array.from(this._frameTree.frames());
    }
    frame(frameId) {
      return this._frameTree.getById(frameId) || null;
    }
    onAttachedToTarget(target) {
      if (target._getTargetInfo().type !== "iframe") {
        return;
      }
      const frame = this.frame(target._getTargetInfo().targetId);
      if (frame) {
        frame.updateClient(target._session());
      }
      this.setupEventListeners(target._session());
      void this.initialize(target._session());
    }
    _deviceRequestPromptManager(client) {
      let manager = __privateGet(this, _deviceRequestPromptManagerMap).get(client);
      if (manager === void 0) {
        manager = new DeviceRequestPrompt_js_1.DeviceRequestPromptManager(client, __privateGet(this, _timeoutSettings3));
        __privateGet(this, _deviceRequestPromptManagerMap).set(client, manager);
      }
      return manager;
    }
  }
  _page = new WeakMap();
  _networkManager = new WeakMap();
  _timeoutSettings3 = new WeakMap();
  _contextIdToContext = new WeakMap();
  _isolatedWorlds = new WeakMap();
  _client9 = new WeakMap();
  _frameNavigatedReceived = new WeakMap();
  _deviceRequestPromptManagerMap = new WeakMap();
  _frameTreeHandled = new WeakMap();
  _onClientDisconnect = new WeakSet();
  onClientDisconnect_fn = async function() {
    const mainFrame = this._frameTree.getMainFrame();
    if (!mainFrame) {
      return;
    }
    for (const child of mainFrame.childFrames()) {
      __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, child);
    }
    const swapped = Deferred_js_1$4.Deferred.create({
      timeout: TIME_FOR_WAITING_FOR_SWAP,
      message: "Frame was not swapped"
    });
    mainFrame.once(Frame_js_1.FrameEvent.FrameSwappedByActivation, () => {
      swapped.resolve();
    });
    try {
      await swapped.valueOrThrow();
    } catch (err) {
      __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, mainFrame);
    }
  };
  _onLifecycleEvent = new WeakSet();
  onLifecycleEvent_fn = function(event) {
    const frame = this.frame(event.frameId);
    if (!frame) {
      return;
    }
    frame._onLifecycleEvent(event.loaderId, event.name);
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(Frame_js_1.FrameEvent.LifecycleEvent, void 0);
  };
  _onFrameStartedLoading = new WeakSet();
  onFrameStartedLoading_fn = function(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStarted();
  };
  _onFrameStoppedLoading = new WeakSet();
  onFrameStoppedLoading_fn = function(frameId) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._onLoadingStopped();
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.LifecycleEvent, frame);
    frame.emit(Frame_js_1.FrameEvent.LifecycleEvent, void 0);
  };
  _handleFrameTree = new WeakSet();
  handleFrameTree_fn = function(session, frameTree) {
    if (frameTree.frame.parentId) {
      __privateMethod(this, _onFrameAttached, onFrameAttached_fn).call(this, session, frameTree.frame.id, frameTree.frame.parentId);
    }
    if (!__privateGet(this, _frameNavigatedReceived).has(frameTree.frame.id)) {
      void __privateMethod(this, _onFrameNavigated, onFrameNavigated_fn).call(this, frameTree.frame, "Navigation");
    } else {
      __privateGet(this, _frameNavigatedReceived).delete(frameTree.frame.id);
    }
    if (!frameTree.childFrames) {
      return;
    }
    for (const child of frameTree.childFrames) {
      __privateMethod(this, _handleFrameTree, handleFrameTree_fn).call(this, session, child);
    }
  };
  _onFrameAttached = new WeakSet();
  onFrameAttached_fn = function(session, frameId, parentFrameId) {
    let frame = this.frame(frameId);
    if (frame) {
      if (session && frame.isOOPFrame()) {
        frame.updateClient(session);
      }
      return;
    }
    frame = new Frame_js_2.CdpFrame(this, frameId, parentFrameId, session);
    this._frameTree.addFrame(frame);
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.FrameAttached, frame);
  };
  _onFrameNavigated = new WeakSet();
  onFrameNavigated_fn = async function(framePayload, navigationType) {
    const frameId = framePayload.id;
    const isMainFrame = !framePayload.parentId;
    let frame = this._frameTree.getById(frameId);
    if (frame) {
      for (const child of frame.childFrames()) {
        __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, child);
      }
    }
    if (isMainFrame) {
      if (frame) {
        this._frameTree.removeFrame(frame);
        frame._id = frameId;
      } else {
        frame = new Frame_js_2.CdpFrame(this, frameId, void 0, __privateGet(this, _client9));
      }
      this._frameTree.addFrame(frame);
    }
    frame = await this._frameTree.waitForFrame(frameId);
    frame._navigated(framePayload);
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(Frame_js_1.FrameEvent.FrameNavigated, navigationType);
  };
  _createIsolatedWorld = new WeakSet();
  createIsolatedWorld_fn = async function(session, name) {
    const key = `${session.id()}:${name}`;
    if (__privateGet(this, _isolatedWorlds).has(key)) {
      return;
    }
    await session.send("Page.addScriptToEvaluateOnNewDocument", {
      source: `//# sourceURL=${util_js_1$5.PuppeteerURL.INTERNAL_URL}`,
      worldName: name
    });
    await Promise.all(this.frames().filter((frame) => {
      return frame.client === session;
    }).map((frame) => {
      return session.send("Page.createIsolatedWorld", {
        frameId: frame._id,
        worldName: name,
        grantUniveralAccess: true
      }).catch(util_js_1$5.debugError);
    }));
    __privateGet(this, _isolatedWorlds).add(key);
  };
  _onFrameNavigatedWithinDocument = new WeakSet();
  onFrameNavigatedWithinDocument_fn = function(frameId, url) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    frame._navigatedWithinDocument(url);
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.FrameNavigatedWithinDocument, frame);
    frame.emit(Frame_js_1.FrameEvent.FrameNavigatedWithinDocument, void 0);
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.FrameNavigated, frame);
    frame.emit(Frame_js_1.FrameEvent.FrameNavigated, "Navigation");
  };
  _onFrameDetached2 = new WeakSet();
  onFrameDetached_fn2 = function(frameId, reason) {
    const frame = this.frame(frameId);
    if (!frame) {
      return;
    }
    switch (reason) {
      case "remove":
        __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, frame);
        break;
      case "swap":
        this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.FrameSwapped, frame);
        frame.emit(Frame_js_1.FrameEvent.FrameSwapped, void 0);
        break;
    }
  };
  _onExecutionContextCreated = new WeakSet();
  onExecutionContextCreated_fn = function(contextPayload, session) {
    const auxData = contextPayload.auxData;
    const frameId = auxData && auxData.frameId;
    const frame = typeof frameId === "string" ? this.frame(frameId) : void 0;
    let world;
    if (frame) {
      if (frame.client !== session) {
        return;
      }
      if (contextPayload.auxData && contextPayload.auxData["isDefault"]) {
        world = frame.worlds[IsolatedWorlds_js_1$1.MAIN_WORLD];
      } else if (contextPayload.name === util_js_1$5.UTILITY_WORLD_NAME && !frame.worlds[IsolatedWorlds_js_1$1.PUPPETEER_WORLD].hasContext()) {
        world = frame.worlds[IsolatedWorlds_js_1$1.PUPPETEER_WORLD];
      }
    }
    if (!world) {
      return;
    }
    const context = new ExecutionContext_js_1$2.ExecutionContext((frame == null ? void 0 : frame.client) || __privateGet(this, _client9), contextPayload, world);
    if (world) {
      world.setContext(context);
    }
    const key = `${session.id()}:${contextPayload.id}`;
    __privateGet(this, _contextIdToContext).set(key, context);
  };
  _onExecutionContextDestroyed = new WeakSet();
  onExecutionContextDestroyed_fn = function(executionContextId, session) {
    const key = `${session.id()}:${executionContextId}`;
    const context = __privateGet(this, _contextIdToContext).get(key);
    if (!context) {
      return;
    }
    __privateGet(this, _contextIdToContext).delete(key);
    if (context._world) {
      context._world.clearContext();
    }
  };
  _onExecutionContextsCleared3 = new WeakSet();
  onExecutionContextsCleared_fn3 = function(session) {
    for (const [key, context] of __privateGet(this, _contextIdToContext).entries()) {
      if (context._client !== session) {
        continue;
      }
      if (context._world) {
        context._world.clearContext();
      }
      __privateGet(this, _contextIdToContext).delete(key);
    }
  };
  _removeFramesRecursively = new WeakSet();
  removeFramesRecursively_fn = function(frame) {
    for (const child of frame.childFrames()) {
      __privateMethod(this, _removeFramesRecursively, removeFramesRecursively_fn).call(this, child);
    }
    frame[disposable_js_1$1.disposeSymbol]();
    this._frameTree.removeFrame(frame);
    this.emit(FrameManagerEvents_js_1$1.FrameManagerEvent.FrameDetached, frame);
    frame.emit(Frame_js_1.FrameEvent.FrameDetached, frame);
  };
  FrameManager$1.FrameManager = FrameManager;
  var Input$1 = {};
  var Input = {};
  Object.defineProperty(Input, "__esModule", { value: true });
  Input.Touchscreen = Input.Mouse = Input.MouseButton = Input.Keyboard = void 0;
  class Keyboard {
    /**
     * @internal
     */
    constructor() {
    }
  }
  Input.Keyboard = Keyboard;
  Input.MouseButton = Object.freeze({
    Left: "left",
    Right: "right",
    Middle: "middle",
    Back: "back",
    Forward: "forward"
  });
  class Mouse {
    /**
     * @internal
     */
    constructor() {
    }
  }
  Input.Mouse = Mouse;
  class Touchscreen {
    /**
     * @internal
     */
    constructor() {
    }
    /**
     * Dispatches a `touchstart` and `touchend` event.
     * @param x - Horizontal position of the tap.
     * @param y - Vertical position of the tap.
     */
    async tap(x, y) {
      await this.touchStart(x, y);
      await this.touchEnd();
    }
  }
  Input.Touchscreen = Touchscreen;
  var USKeyboardLayout = {};
  Object.defineProperty(USKeyboardLayout, "__esModule", { value: true });
  USKeyboardLayout._keyDefinitions = void 0;
  USKeyboardLayout._keyDefinitions = {
    "0": { keyCode: 48, key: "0", code: "Digit0" },
    "1": { keyCode: 49, key: "1", code: "Digit1" },
    "2": { keyCode: 50, key: "2", code: "Digit2" },
    "3": { keyCode: 51, key: "3", code: "Digit3" },
    "4": { keyCode: 52, key: "4", code: "Digit4" },
    "5": { keyCode: 53, key: "5", code: "Digit5" },
    "6": { keyCode: 54, key: "6", code: "Digit6" },
    "7": { keyCode: 55, key: "7", code: "Digit7" },
    "8": { keyCode: 56, key: "8", code: "Digit8" },
    "9": { keyCode: 57, key: "9", code: "Digit9" },
    Power: { key: "Power", code: "Power" },
    Eject: { key: "Eject", code: "Eject" },
    Abort: { keyCode: 3, code: "Abort", key: "Cancel" },
    Help: { keyCode: 6, code: "Help", key: "Help" },
    Backspace: { keyCode: 8, code: "Backspace", key: "Backspace" },
    Tab: { keyCode: 9, code: "Tab", key: "Tab" },
    Numpad5: {
      keyCode: 12,
      shiftKeyCode: 101,
      key: "Clear",
      code: "Numpad5",
      shiftKey: "5",
      location: 3
    },
    NumpadEnter: {
      keyCode: 13,
      code: "NumpadEnter",
      key: "Enter",
      text: "\r",
      location: 3
    },
    Enter: { keyCode: 13, code: "Enter", key: "Enter", text: "\r" },
    "\r": { keyCode: 13, code: "Enter", key: "Enter", text: "\r" },
    "\n": { keyCode: 13, code: "Enter", key: "Enter", text: "\r" },
    ShiftLeft: { keyCode: 16, code: "ShiftLeft", key: "Shift", location: 1 },
    ShiftRight: { keyCode: 16, code: "ShiftRight", key: "Shift", location: 2 },
    ControlLeft: {
      keyCode: 17,
      code: "ControlLeft",
      key: "Control",
      location: 1
    },
    ControlRight: {
      keyCode: 17,
      code: "ControlRight",
      key: "Control",
      location: 2
    },
    AltLeft: { keyCode: 18, code: "AltLeft", key: "Alt", location: 1 },
    AltRight: { keyCode: 18, code: "AltRight", key: "Alt", location: 2 },
    Pause: { keyCode: 19, code: "Pause", key: "Pause" },
    CapsLock: { keyCode: 20, code: "CapsLock", key: "CapsLock" },
    Escape: { keyCode: 27, code: "Escape", key: "Escape" },
    Convert: { keyCode: 28, code: "Convert", key: "Convert" },
    NonConvert: { keyCode: 29, code: "NonConvert", key: "NonConvert" },
    Space: { keyCode: 32, code: "Space", key: " " },
    Numpad9: {
      keyCode: 33,
      shiftKeyCode: 105,
      key: "PageUp",
      code: "Numpad9",
      shiftKey: "9",
      location: 3
    },
    PageUp: { keyCode: 33, code: "PageUp", key: "PageUp" },
    Numpad3: {
      keyCode: 34,
      shiftKeyCode: 99,
      key: "PageDown",
      code: "Numpad3",
      shiftKey: "3",
      location: 3
    },
    PageDown: { keyCode: 34, code: "PageDown", key: "PageDown" },
    End: { keyCode: 35, code: "End", key: "End" },
    Numpad1: {
      keyCode: 35,
      shiftKeyCode: 97,
      key: "End",
      code: "Numpad1",
      shiftKey: "1",
      location: 3
    },
    Home: { keyCode: 36, code: "Home", key: "Home" },
    Numpad7: {
      keyCode: 36,
      shiftKeyCode: 103,
      key: "Home",
      code: "Numpad7",
      shiftKey: "7",
      location: 3
    },
    ArrowLeft: { keyCode: 37, code: "ArrowLeft", key: "ArrowLeft" },
    Numpad4: {
      keyCode: 37,
      shiftKeyCode: 100,
      key: "ArrowLeft",
      code: "Numpad4",
      shiftKey: "4",
      location: 3
    },
    Numpad8: {
      keyCode: 38,
      shiftKeyCode: 104,
      key: "ArrowUp",
      code: "Numpad8",
      shiftKey: "8",
      location: 3
    },
    ArrowUp: { keyCode: 38, code: "ArrowUp", key: "ArrowUp" },
    ArrowRight: { keyCode: 39, code: "ArrowRight", key: "ArrowRight" },
    Numpad6: {
      keyCode: 39,
      shiftKeyCode: 102,
      key: "ArrowRight",
      code: "Numpad6",
      shiftKey: "6",
      location: 3
    },
    Numpad2: {
      keyCode: 40,
      shiftKeyCode: 98,
      key: "ArrowDown",
      code: "Numpad2",
      shiftKey: "2",
      location: 3
    },
    ArrowDown: { keyCode: 40, code: "ArrowDown", key: "ArrowDown" },
    Select: { keyCode: 41, code: "Select", key: "Select" },
    Open: { keyCode: 43, code: "Open", key: "Execute" },
    PrintScreen: { keyCode: 44, code: "PrintScreen", key: "PrintScreen" },
    Insert: { keyCode: 45, code: "Insert", key: "Insert" },
    Numpad0: {
      keyCode: 45,
      shiftKeyCode: 96,
      key: "Insert",
      code: "Numpad0",
      shiftKey: "0",
      location: 3
    },
    Delete: { keyCode: 46, code: "Delete", key: "Delete" },
    NumpadDecimal: {
      keyCode: 46,
      shiftKeyCode: 110,
      code: "NumpadDecimal",
      key: "\0",
      shiftKey: ".",
      location: 3
    },
    Digit0: { keyCode: 48, code: "Digit0", shiftKey: ")", key: "0" },
    Digit1: { keyCode: 49, code: "Digit1", shiftKey: "!", key: "1" },
    Digit2: { keyCode: 50, code: "Digit2", shiftKey: "@", key: "2" },
    Digit3: { keyCode: 51, code: "Digit3", shiftKey: "#", key: "3" },
    Digit4: { keyCode: 52, code: "Digit4", shiftKey: "$", key: "4" },
    Digit5: { keyCode: 53, code: "Digit5", shiftKey: "%", key: "5" },
    Digit6: { keyCode: 54, code: "Digit6", shiftKey: "^", key: "6" },
    Digit7: { keyCode: 55, code: "Digit7", shiftKey: "&", key: "7" },
    Digit8: { keyCode: 56, code: "Digit8", shiftKey: "*", key: "8" },
    Digit9: { keyCode: 57, code: "Digit9", shiftKey: "(", key: "9" },
    KeyA: { keyCode: 65, code: "KeyA", shiftKey: "A", key: "a" },
    KeyB: { keyCode: 66, code: "KeyB", shiftKey: "B", key: "b" },
    KeyC: { keyCode: 67, code: "KeyC", shiftKey: "C", key: "c" },
    KeyD: { keyCode: 68, code: "KeyD", shiftKey: "D", key: "d" },
    KeyE: { keyCode: 69, code: "KeyE", shiftKey: "E", key: "e" },
    KeyF: { keyCode: 70, code: "KeyF", shiftKey: "F", key: "f" },
    KeyG: { keyCode: 71, code: "KeyG", shiftKey: "G", key: "g" },
    KeyH: { keyCode: 72, code: "KeyH", shiftKey: "H", key: "h" },
    KeyI: { keyCode: 73, code: "KeyI", shiftKey: "I", key: "i" },
    KeyJ: { keyCode: 74, code: "KeyJ", shiftKey: "J", key: "j" },
    KeyK: { keyCode: 75, code: "KeyK", shiftKey: "K", key: "k" },
    KeyL: { keyCode: 76, code: "KeyL", shiftKey: "L", key: "l" },
    KeyM: { keyCode: 77, code: "KeyM", shiftKey: "M", key: "m" },
    KeyN: { keyCode: 78, code: "KeyN", shiftKey: "N", key: "n" },
    KeyO: { keyCode: 79, code: "KeyO", shiftKey: "O", key: "o" },
    KeyP: { keyCode: 80, code: "KeyP", shiftKey: "P", key: "p" },
    KeyQ: { keyCode: 81, code: "KeyQ", shiftKey: "Q", key: "q" },
    KeyR: { keyCode: 82, code: "KeyR", shiftKey: "R", key: "r" },
    KeyS: { keyCode: 83, code: "KeyS", shiftKey: "S", key: "s" },
    KeyT: { keyCode: 84, code: "KeyT", shiftKey: "T", key: "t" },
    KeyU: { keyCode: 85, code: "KeyU", shiftKey: "U", key: "u" },
    KeyV: { keyCode: 86, code: "KeyV", shiftKey: "V", key: "v" },
    KeyW: { keyCode: 87, code: "KeyW", shiftKey: "W", key: "w" },
    KeyX: { keyCode: 88, code: "KeyX", shiftKey: "X", key: "x" },
    KeyY: { keyCode: 89, code: "KeyY", shiftKey: "Y", key: "y" },
    KeyZ: { keyCode: 90, code: "KeyZ", shiftKey: "Z", key: "z" },
    MetaLeft: { keyCode: 91, code: "MetaLeft", key: "Meta", location: 1 },
    MetaRight: { keyCode: 92, code: "MetaRight", key: "Meta", location: 2 },
    ContextMenu: { keyCode: 93, code: "ContextMenu", key: "ContextMenu" },
    NumpadMultiply: {
      keyCode: 106,
      code: "NumpadMultiply",
      key: "*",
      location: 3
    },
    NumpadAdd: { keyCode: 107, code: "NumpadAdd", key: "+", location: 3 },
    NumpadSubtract: {
      keyCode: 109,
      code: "NumpadSubtract",
      key: "-",
      location: 3
    },
    NumpadDivide: { keyCode: 111, code: "NumpadDivide", key: "/", location: 3 },
    F1: { keyCode: 112, code: "F1", key: "F1" },
    F2: { keyCode: 113, code: "F2", key: "F2" },
    F3: { keyCode: 114, code: "F3", key: "F3" },
    F4: { keyCode: 115, code: "F4", key: "F4" },
    F5: { keyCode: 116, code: "F5", key: "F5" },
    F6: { keyCode: 117, code: "F6", key: "F6" },
    F7: { keyCode: 118, code: "F7", key: "F7" },
    F8: { keyCode: 119, code: "F8", key: "F8" },
    F9: { keyCode: 120, code: "F9", key: "F9" },
    F10: { keyCode: 121, code: "F10", key: "F10" },
    F11: { keyCode: 122, code: "F11", key: "F11" },
    F12: { keyCode: 123, code: "F12", key: "F12" },
    F13: { keyCode: 124, code: "F13", key: "F13" },
    F14: { keyCode: 125, code: "F14", key: "F14" },
    F15: { keyCode: 126, code: "F15", key: "F15" },
    F16: { keyCode: 127, code: "F16", key: "F16" },
    F17: { keyCode: 128, code: "F17", key: "F17" },
    F18: { keyCode: 129, code: "F18", key: "F18" },
    F19: { keyCode: 130, code: "F19", key: "F19" },
    F20: { keyCode: 131, code: "F20", key: "F20" },
    F21: { keyCode: 132, code: "F21", key: "F21" },
    F22: { keyCode: 133, code: "F22", key: "F22" },
    F23: { keyCode: 134, code: "F23", key: "F23" },
    F24: { keyCode: 135, code: "F24", key: "F24" },
    NumLock: { keyCode: 144, code: "NumLock", key: "NumLock" },
    ScrollLock: { keyCode: 145, code: "ScrollLock", key: "ScrollLock" },
    AudioVolumeMute: {
      keyCode: 173,
      code: "AudioVolumeMute",
      key: "AudioVolumeMute"
    },
    AudioVolumeDown: {
      keyCode: 174,
      code: "AudioVolumeDown",
      key: "AudioVolumeDown"
    },
    AudioVolumeUp: { keyCode: 175, code: "AudioVolumeUp", key: "AudioVolumeUp" },
    MediaTrackNext: {
      keyCode: 176,
      code: "MediaTrackNext",
      key: "MediaTrackNext"
    },
    MediaTrackPrevious: {
      keyCode: 177,
      code: "MediaTrackPrevious",
      key: "MediaTrackPrevious"
    },
    MediaStop: { keyCode: 178, code: "MediaStop", key: "MediaStop" },
    MediaPlayPause: {
      keyCode: 179,
      code: "MediaPlayPause",
      key: "MediaPlayPause"
    },
    Semicolon: { keyCode: 186, code: "Semicolon", shiftKey: ":", key: ";" },
    Equal: { keyCode: 187, code: "Equal", shiftKey: "+", key: "=" },
    NumpadEqual: { keyCode: 187, code: "NumpadEqual", key: "=", location: 3 },
    Comma: { keyCode: 188, code: "Comma", shiftKey: "<", key: "," },
    Minus: { keyCode: 189, code: "Minus", shiftKey: "_", key: "-" },
    Period: { keyCode: 190, code: "Period", shiftKey: ">", key: "." },
    Slash: { keyCode: 191, code: "Slash", shiftKey: "?", key: "/" },
    Backquote: { keyCode: 192, code: "Backquote", shiftKey: "~", key: "`" },
    BracketLeft: { keyCode: 219, code: "BracketLeft", shiftKey: "{", key: "[" },
    Backslash: { keyCode: 220, code: "Backslash", shiftKey: "|", key: "\\" },
    BracketRight: { keyCode: 221, code: "BracketRight", shiftKey: "}", key: "]" },
    Quote: { keyCode: 222, code: "Quote", shiftKey: '"', key: "'" },
    AltGraph: { keyCode: 225, code: "AltGraph", key: "AltGraph" },
    Props: { keyCode: 247, code: "Props", key: "CrSel" },
    Cancel: { keyCode: 3, key: "Cancel", code: "Abort" },
    Clear: { keyCode: 12, key: "Clear", code: "Numpad5", location: 3 },
    Shift: { keyCode: 16, key: "Shift", code: "ShiftLeft", location: 1 },
    Control: { keyCode: 17, key: "Control", code: "ControlLeft", location: 1 },
    Alt: { keyCode: 18, key: "Alt", code: "AltLeft", location: 1 },
    Accept: { keyCode: 30, key: "Accept" },
    ModeChange: { keyCode: 31, key: "ModeChange" },
    " ": { keyCode: 32, key: " ", code: "Space" },
    Print: { keyCode: 42, key: "Print" },
    Execute: { keyCode: 43, key: "Execute", code: "Open" },
    "\0": { keyCode: 46, key: "\0", code: "NumpadDecimal", location: 3 },
    a: { keyCode: 65, key: "a", code: "KeyA" },
    b: { keyCode: 66, key: "b", code: "KeyB" },
    c: { keyCode: 67, key: "c", code: "KeyC" },
    d: { keyCode: 68, key: "d", code: "KeyD" },
    e: { keyCode: 69, key: "e", code: "KeyE" },
    f: { keyCode: 70, key: "f", code: "KeyF" },
    g: { keyCode: 71, key: "g", code: "KeyG" },
    h: { keyCode: 72, key: "h", code: "KeyH" },
    i: { keyCode: 73, key: "i", code: "KeyI" },
    j: { keyCode: 74, key: "j", code: "KeyJ" },
    k: { keyCode: 75, key: "k", code: "KeyK" },
    l: { keyCode: 76, key: "l", code: "KeyL" },
    m: { keyCode: 77, key: "m", code: "KeyM" },
    n: { keyCode: 78, key: "n", code: "KeyN" },
    o: { keyCode: 79, key: "o", code: "KeyO" },
    p: { keyCode: 80, key: "p", code: "KeyP" },
    q: { keyCode: 81, key: "q", code: "KeyQ" },
    r: { keyCode: 82, key: "r", code: "KeyR" },
    s: { keyCode: 83, key: "s", code: "KeyS" },
    t: { keyCode: 84, key: "t", code: "KeyT" },
    u: { keyCode: 85, key: "u", code: "KeyU" },
    v: { keyCode: 86, key: "v", code: "KeyV" },
    w: { keyCode: 87, key: "w", code: "KeyW" },
    x: { keyCode: 88, key: "x", code: "KeyX" },
    y: { keyCode: 89, key: "y", code: "KeyY" },
    z: { keyCode: 90, key: "z", code: "KeyZ" },
    Meta: { keyCode: 91, key: "Meta", code: "MetaLeft", location: 1 },
    "*": { keyCode: 106, key: "*", code: "NumpadMultiply", location: 3 },
    "+": { keyCode: 107, key: "+", code: "NumpadAdd", location: 3 },
    "-": { keyCode: 109, key: "-", code: "NumpadSubtract", location: 3 },
    "/": { keyCode: 111, key: "/", code: "NumpadDivide", location: 3 },
    ";": { keyCode: 186, key: ";", code: "Semicolon" },
    "=": { keyCode: 187, key: "=", code: "Equal" },
    ",": { keyCode: 188, key: ",", code: "Comma" },
    ".": { keyCode: 190, key: ".", code: "Period" },
    "`": { keyCode: 192, key: "`", code: "Backquote" },
    "[": { keyCode: 219, key: "[", code: "BracketLeft" },
    "\\": { keyCode: 220, key: "\\", code: "Backslash" },
    "]": { keyCode: 221, key: "]", code: "BracketRight" },
    "'": { keyCode: 222, key: "'", code: "Quote" },
    Attn: { keyCode: 246, key: "Attn" },
    CrSel: { keyCode: 247, key: "CrSel", code: "Props" },
    ExSel: { keyCode: 248, key: "ExSel" },
    EraseEof: { keyCode: 249, key: "EraseEof" },
    Play: { keyCode: 250, key: "Play" },
    ZoomOut: { keyCode: 251, key: "ZoomOut" },
    ")": { keyCode: 48, key: ")", code: "Digit0" },
    "!": { keyCode: 49, key: "!", code: "Digit1" },
    "@": { keyCode: 50, key: "@", code: "Digit2" },
    "#": { keyCode: 51, key: "#", code: "Digit3" },
    $: { keyCode: 52, key: "$", code: "Digit4" },
    "%": { keyCode: 53, key: "%", code: "Digit5" },
    "^": { keyCode: 54, key: "^", code: "Digit6" },
    "&": { keyCode: 55, key: "&", code: "Digit7" },
    "(": { keyCode: 57, key: "(", code: "Digit9" },
    A: { keyCode: 65, key: "A", code: "KeyA" },
    B: { keyCode: 66, key: "B", code: "KeyB" },
    C: { keyCode: 67, key: "C", code: "KeyC" },
    D: { keyCode: 68, key: "D", code: "KeyD" },
    E: { keyCode: 69, key: "E", code: "KeyE" },
    F: { keyCode: 70, key: "F", code: "KeyF" },
    G: { keyCode: 71, key: "G", code: "KeyG" },
    H: { keyCode: 72, key: "H", code: "KeyH" },
    I: { keyCode: 73, key: "I", code: "KeyI" },
    J: { keyCode: 74, key: "J", code: "KeyJ" },
    K: { keyCode: 75, key: "K", code: "KeyK" },
    L: { keyCode: 76, key: "L", code: "KeyL" },
    M: { keyCode: 77, key: "M", code: "KeyM" },
    N: { keyCode: 78, key: "N", code: "KeyN" },
    O: { keyCode: 79, key: "O", code: "KeyO" },
    P: { keyCode: 80, key: "P", code: "KeyP" },
    Q: { keyCode: 81, key: "Q", code: "KeyQ" },
    R: { keyCode: 82, key: "R", code: "KeyR" },
    S: { keyCode: 83, key: "S", code: "KeyS" },
    T: { keyCode: 84, key: "T", code: "KeyT" },
    U: { keyCode: 85, key: "U", code: "KeyU" },
    V: { keyCode: 86, key: "V", code: "KeyV" },
    W: { keyCode: 87, key: "W", code: "KeyW" },
    X: { keyCode: 88, key: "X", code: "KeyX" },
    Y: { keyCode: 89, key: "Y", code: "KeyY" },
    Z: { keyCode: 90, key: "Z", code: "KeyZ" },
    ":": { keyCode: 186, key: ":", code: "Semicolon" },
    "<": { keyCode: 188, key: "<", code: "Comma" },
    _: { keyCode: 189, key: "_", code: "Minus" },
    ">": { keyCode: 190, key: ">", code: "Period" },
    "?": { keyCode: 191, key: "?", code: "Slash" },
    "~": { keyCode: 192, key: "~", code: "Backquote" },
    "{": { keyCode: 219, key: "{", code: "BracketLeft" },
    "|": { keyCode: 220, key: "|", code: "Backslash" },
    "}": { keyCode: 221, key: "}", code: "BracketRight" },
    '"': { keyCode: 222, key: '"', code: "Quote" },
    SoftLeft: { key: "SoftLeft", code: "SoftLeft", location: 4 },
    SoftRight: { key: "SoftRight", code: "SoftRight", location: 4 },
    Camera: { keyCode: 44, key: "Camera", code: "Camera", location: 4 },
    Call: { key: "Call", code: "Call", location: 4 },
    EndCall: { keyCode: 95, key: "EndCall", code: "EndCall", location: 4 },
    VolumeDown: {
      keyCode: 182,
      key: "VolumeDown",
      code: "VolumeDown",
      location: 4
    },
    VolumeUp: { keyCode: 183, key: "VolumeUp", code: "VolumeUp", location: 4 }
  };
  Object.defineProperty(Input$1, "__esModule", { value: true });
  Input$1.CdpTouchscreen = Input$1.CdpMouse = Input$1.CdpKeyboard = void 0;
  const Input_js_1$1 = Input;
  const USKeyboardLayout_js_1 = USKeyboardLayout;
  const assert_js_1$4 = assert$1;
  class CdpKeyboard extends Input_js_1$1.Keyboard {
    constructor(client) {
      super();
      __privateAdd(this, _modifierBit);
      __privateAdd(this, _keyDescriptionForString);
      __privateAdd(this, _client10, void 0);
      __privateAdd(this, _pressedKeys, /* @__PURE__ */ new Set());
      __publicField(this, "_modifiers", 0);
      __privateSet(this, _client10, client);
    }
    updateClient(client) {
      __privateSet(this, _client10, client);
    }
    async down(key, options = {
      text: void 0,
      commands: []
    }) {
      const description = __privateMethod(this, _keyDescriptionForString, keyDescriptionForString_fn).call(this, key);
      const autoRepeat = __privateGet(this, _pressedKeys).has(description.code);
      __privateGet(this, _pressedKeys).add(description.code);
      this._modifiers |= __privateMethod(this, _modifierBit, modifierBit_fn).call(this, description.key);
      const text = options.text === void 0 ? description.text : options.text;
      await __privateGet(this, _client10).send("Input.dispatchKeyEvent", {
        type: text ? "keyDown" : "rawKeyDown",
        modifiers: this._modifiers,
        windowsVirtualKeyCode: description.keyCode,
        code: description.code,
        key: description.key,
        text,
        unmodifiedText: text,
        autoRepeat,
        location: description.location,
        isKeypad: description.location === 3,
        commands: options.commands
      });
    }
    async up(key) {
      const description = __privateMethod(this, _keyDescriptionForString, keyDescriptionForString_fn).call(this, key);
      this._modifiers &= ~__privateMethod(this, _modifierBit, modifierBit_fn).call(this, description.key);
      __privateGet(this, _pressedKeys).delete(description.code);
      await __privateGet(this, _client10).send("Input.dispatchKeyEvent", {
        type: "keyUp",
        modifiers: this._modifiers,
        key: description.key,
        windowsVirtualKeyCode: description.keyCode,
        code: description.code,
        location: description.location
      });
    }
    async sendCharacter(char) {
      await __privateGet(this, _client10).send("Input.insertText", { text: char });
    }
    charIsKey(char) {
      return !!USKeyboardLayout_js_1._keyDefinitions[char];
    }
    async type(text, options = {}) {
      const delay = options.delay || void 0;
      for (const char of text) {
        if (this.charIsKey(char)) {
          await this.press(char, { delay });
        } else {
          if (delay) {
            await new Promise((f) => {
              return setTimeout(f, delay);
            });
          }
          await this.sendCharacter(char);
        }
      }
    }
    async press(key, options = {}) {
      const { delay = null } = options;
      await this.down(key, options);
      if (delay) {
        await new Promise((f) => {
          return setTimeout(f, options.delay);
        });
      }
      await this.up(key);
    }
  }
  _client10 = new WeakMap();
  _pressedKeys = new WeakMap();
  _modifierBit = new WeakSet();
  modifierBit_fn = function(key) {
    if (key === "Alt") {
      return 1;
    }
    if (key === "Control") {
      return 2;
    }
    if (key === "Meta") {
      return 4;
    }
    if (key === "Shift") {
      return 8;
    }
    return 0;
  };
  _keyDescriptionForString = new WeakSet();
  keyDescriptionForString_fn = function(keyString) {
    const shift = this._modifiers & 8;
    const description = {
      key: "",
      keyCode: 0,
      code: "",
      text: "",
      location: 0
    };
    const definition = USKeyboardLayout_js_1._keyDefinitions[keyString];
    (0, assert_js_1$4.assert)(definition, `Unknown key: "${keyString}"`);
    if (definition.key) {
      description.key = definition.key;
    }
    if (shift && definition.shiftKey) {
      description.key = definition.shiftKey;
    }
    if (definition.keyCode) {
      description.keyCode = definition.keyCode;
    }
    if (shift && definition.shiftKeyCode) {
      description.keyCode = definition.shiftKeyCode;
    }
    if (definition.code) {
      description.code = definition.code;
    }
    if (definition.location) {
      description.location = definition.location;
    }
    if (description.key.length === 1) {
      description.text = description.key;
    }
    if (definition.text) {
      description.text = definition.text;
    }
    if (shift && definition.shiftText) {
      description.text = definition.shiftText;
    }
    if (this._modifiers & ~8) {
      description.text = "";
    }
    return description;
  };
  Input$1.CdpKeyboard = CdpKeyboard;
  const getFlag = (button) => {
    switch (button) {
      case Input_js_1$1.MouseButton.Left:
        return 1;
      case Input_js_1$1.MouseButton.Right:
        return 2;
      case Input_js_1$1.MouseButton.Middle:
        return 4;
      case Input_js_1$1.MouseButton.Back:
        return 8;
      case Input_js_1$1.MouseButton.Forward:
        return 16;
    }
  };
  const getButtonFromPressedButtons = (buttons) => {
    if (buttons & 1) {
      return Input_js_1$1.MouseButton.Left;
    } else if (buttons & 2) {
      return Input_js_1$1.MouseButton.Right;
    } else if (buttons & 4) {
      return Input_js_1$1.MouseButton.Middle;
    } else if (buttons & 8) {
      return Input_js_1$1.MouseButton.Back;
    } else if (buttons & 16) {
      return Input_js_1$1.MouseButton.Forward;
    }
    return "none";
  };
  class CdpMouse extends Input_js_1$1.Mouse {
    constructor(client, keyboard) {
      super();
      __privateAdd(this, _state2);
      __privateAdd(this, _createTransaction);
      /**
       * This is a shortcut for a typical update, commit/rollback lifecycle based on
       * the error of the action.
       */
      __privateAdd(this, _withTransaction);
      __privateAdd(this, _client11, void 0);
      __privateAdd(this, _keyboard, void 0);
      __privateAdd(this, __state, {
        position: { x: 0, y: 0 },
        buttons: 0
      });
      // Transactions can run in parallel, so we store each of thme in this array.
      __privateAdd(this, _transactions, []);
      __privateSet(this, _client11, client);
      __privateSet(this, _keyboard, keyboard);
    }
    updateClient(client) {
      __privateSet(this, _client11, client);
    }
    async reset() {
      const actions = [];
      for (const [flag, button] of [
        [1, Input_js_1$1.MouseButton.Left],
        [4, Input_js_1$1.MouseButton.Middle],
        [2, Input_js_1$1.MouseButton.Right],
        [16, Input_js_1$1.MouseButton.Forward],
        [8, Input_js_1$1.MouseButton.Back]
      ]) {
        if (__privateGet(this, _state2, state_get).buttons & flag) {
          actions.push(this.up({ button }));
        }
      }
      if (__privateGet(this, _state2, state_get).position.x !== 0 || __privateGet(this, _state2, state_get).position.y !== 0) {
        actions.push(this.move(0, 0));
      }
      await Promise.all(actions);
    }
    async move(x, y, options = {}) {
      const { steps = 1 } = options;
      const from = __privateGet(this, _state2, state_get).position;
      const to = { x, y };
      for (let i2 = 1; i2 <= steps; i2++) {
        await __privateMethod(this, _withTransaction, withTransaction_fn).call(this, (updateState) => {
          updateState({
            position: {
              x: from.x + (to.x - from.x) * (i2 / steps),
              y: from.y + (to.y - from.y) * (i2 / steps)
            }
          });
          const { buttons, position } = __privateGet(this, _state2, state_get);
          return __privateGet(this, _client11).send("Input.dispatchMouseEvent", {
            type: "mouseMoved",
            modifiers: __privateGet(this, _keyboard)._modifiers,
            buttons,
            button: getButtonFromPressedButtons(buttons),
            ...position
          });
        });
      }
    }
    async down(options = {}) {
      const { button = Input_js_1$1.MouseButton.Left, clickCount = 1 } = options;
      const flag = getFlag(button);
      if (!flag) {
        throw new Error(`Unsupported mouse button: ${button}`);
      }
      if (__privateGet(this, _state2, state_get).buttons & flag) {
        throw new Error(`'${button}' is already pressed.`);
      }
      await __privateMethod(this, _withTransaction, withTransaction_fn).call(this, (updateState) => {
        updateState({
          buttons: __privateGet(this, _state2, state_get).buttons | flag
        });
        const { buttons, position } = __privateGet(this, _state2, state_get);
        return __privateGet(this, _client11).send("Input.dispatchMouseEvent", {
          type: "mousePressed",
          modifiers: __privateGet(this, _keyboard)._modifiers,
          clickCount,
          buttons,
          button,
          ...position
        });
      });
    }
    async up(options = {}) {
      const { button = Input_js_1$1.MouseButton.Left, clickCount = 1 } = options;
      const flag = getFlag(button);
      if (!flag) {
        throw new Error(`Unsupported mouse button: ${button}`);
      }
      if (!(__privateGet(this, _state2, state_get).buttons & flag)) {
        throw new Error(`'${button}' is not pressed.`);
      }
      await __privateMethod(this, _withTransaction, withTransaction_fn).call(this, (updateState) => {
        updateState({
          buttons: __privateGet(this, _state2, state_get).buttons & ~flag
        });
        const { buttons, position } = __privateGet(this, _state2, state_get);
        return __privateGet(this, _client11).send("Input.dispatchMouseEvent", {
          type: "mouseReleased",
          modifiers: __privateGet(this, _keyboard)._modifiers,
          clickCount,
          buttons,
          button,
          ...position
        });
      });
    }
    async click(x, y, options = {}) {
      const { delay, count = 1, clickCount = count } = options;
      if (count < 1) {
        throw new Error("Click must occur a positive number of times.");
      }
      const actions = [this.move(x, y)];
      if (clickCount === count) {
        for (let i2 = 1; i2 < count; ++i2) {
          actions.push(this.down({ ...options, clickCount: i2 }), this.up({ ...options, clickCount: i2 }));
        }
      }
      actions.push(this.down({ ...options, clickCount }));
      if (typeof delay === "number") {
        await Promise.all(actions);
        actions.length = 0;
        await new Promise((resolve) => {
          setTimeout(resolve, delay);
        });
      }
      actions.push(this.up({ ...options, clickCount }));
      await Promise.all(actions);
    }
    async wheel(options = {}) {
      const { deltaX = 0, deltaY = 0 } = options;
      const { position, buttons } = __privateGet(this, _state2, state_get);
      await __privateGet(this, _client11).send("Input.dispatchMouseEvent", {
        type: "mouseWheel",
        pointerType: "mouse",
        modifiers: __privateGet(this, _keyboard)._modifiers,
        deltaY,
        deltaX,
        buttons,
        ...position
      });
    }
    async drag(start, target) {
      const promise = new Promise((resolve) => {
        __privateGet(this, _client11).once("Input.dragIntercepted", (event) => {
          return resolve(event.data);
        });
      });
      await this.move(start.x, start.y);
      await this.down();
      await this.move(target.x, target.y);
      return await promise;
    }
    async dragEnter(target, data) {
      await __privateGet(this, _client11).send("Input.dispatchDragEvent", {
        type: "dragEnter",
        x: target.x,
        y: target.y,
        modifiers: __privateGet(this, _keyboard)._modifiers,
        data
      });
    }
    async dragOver(target, data) {
      await __privateGet(this, _client11).send("Input.dispatchDragEvent", {
        type: "dragOver",
        x: target.x,
        y: target.y,
        modifiers: __privateGet(this, _keyboard)._modifiers,
        data
      });
    }
    async drop(target, data) {
      await __privateGet(this, _client11).send("Input.dispatchDragEvent", {
        type: "drop",
        x: target.x,
        y: target.y,
        modifiers: __privateGet(this, _keyboard)._modifiers,
        data
      });
    }
    async dragAndDrop(start, target, options = {}) {
      const { delay = null } = options;
      const data = await this.drag(start, target);
      await this.dragEnter(target, data);
      await this.dragOver(target, data);
      if (delay) {
        await new Promise((resolve) => {
          return setTimeout(resolve, delay);
        });
      }
      await this.drop(target, data);
      await this.up();
    }
  }
  _client11 = new WeakMap();
  _keyboard = new WeakMap();
  __state = new WeakMap();
  _state2 = new WeakSet();
  state_get = function() {
    return Object.assign({ ...__privateGet(this, __state) }, ...__privateGet(this, _transactions));
  };
  _transactions = new WeakMap();
  _createTransaction = new WeakSet();
  createTransaction_fn = function() {
    const transaction = {};
    __privateGet(this, _transactions).push(transaction);
    const popTransaction = () => {
      __privateGet(this, _transactions).splice(__privateGet(this, _transactions).indexOf(transaction), 1);
    };
    return {
      update: (updates) => {
        Object.assign(transaction, updates);
      },
      commit: () => {
        __privateSet(this, __state, { ...__privateGet(this, __state), ...transaction });
        popTransaction();
      },
      rollback: popTransaction
    };
  };
  _withTransaction = new WeakSet();
  withTransaction_fn = async function(action) {
    const { update, commit, rollback } = __privateMethod(this, _createTransaction, createTransaction_fn).call(this);
    try {
      await action(update);
      commit();
    } catch (error) {
      rollback();
      throw error;
    }
  };
  Input$1.CdpMouse = CdpMouse;
  class CdpTouchscreen extends Input_js_1$1.Touchscreen {
    constructor(client, keyboard) {
      super();
      __privateAdd(this, _client12, void 0);
      __privateAdd(this, _keyboard2, void 0);
      __privateSet(this, _client12, client);
      __privateSet(this, _keyboard2, keyboard);
    }
    updateClient(client) {
      __privateSet(this, _client12, client);
    }
    async touchStart(x, y) {
      await __privateGet(this, _client12).send("Input.dispatchTouchEvent", {
        type: "touchStart",
        touchPoints: [
          {
            x: Math.round(x),
            y: Math.round(y),
            radiusX: 0.5,
            radiusY: 0.5
          }
        ],
        modifiers: __privateGet(this, _keyboard2)._modifiers
      });
    }
    async touchMove(x, y) {
      await __privateGet(this, _client12).send("Input.dispatchTouchEvent", {
        type: "touchMove",
        touchPoints: [
          {
            x: Math.round(x),
            y: Math.round(y),
            radiusX: 0.5,
            radiusY: 0.5
          }
        ],
        modifiers: __privateGet(this, _keyboard2)._modifiers
      });
    }
    async touchEnd() {
      await __privateGet(this, _client12).send("Input.dispatchTouchEvent", {
        type: "touchEnd",
        touchPoints: [],
        modifiers: __privateGet(this, _keyboard2)._modifiers
      });
    }
  }
  _client12 = new WeakMap();
  _keyboard2 = new WeakMap();
  Input$1.CdpTouchscreen = CdpTouchscreen;
  var Tracing$1 = {};
  Object.defineProperty(Tracing$1, "__esModule", { value: true });
  Tracing$1.Tracing = void 0;
  const util_js_1$4 = require$$2$1;
  const assert_js_1$3 = assert$1;
  const Deferred_js_1$3 = Deferred$1;
  const ErrorLike_js_1$1 = ErrorLike;
  class Tracing {
    /**
     * @internal
     */
    constructor(client) {
      __privateAdd(this, _client13, void 0);
      __privateAdd(this, _recording, false);
      __privateAdd(this, _path, void 0);
      __privateSet(this, _client13, client);
    }
    /**
     * @internal
     */
    updateClient(client) {
      __privateSet(this, _client13, client);
    }
    /**
     * Starts a trace for the current page.
     * @remarks
     * Only one trace can be active at a time per browser.
     *
     * @param options - Optional `TracingOptions`.
     */
    async start(options = {}) {
      (0, assert_js_1$3.assert)(!__privateGet(this, _recording), "Cannot start recording trace while already recording trace.");
      const defaultCategories = [
        "-*",
        "devtools.timeline",
        "v8.execute",
        "disabled-by-default-devtools.timeline",
        "disabled-by-default-devtools.timeline.frame",
        "toplevel",
        "blink.console",
        "blink.user_timing",
        "latencyInfo",
        "disabled-by-default-devtools.timeline.stack",
        "disabled-by-default-v8.cpu_profiler"
      ];
      const { path, screenshots = false, categories = defaultCategories } = options;
      if (screenshots) {
        categories.push("disabled-by-default-devtools.screenshot");
      }
      const excludedCategories = categories.filter((cat) => {
        return cat.startsWith("-");
      }).map((cat) => {
        return cat.slice(1);
      });
      const includedCategories = categories.filter((cat) => {
        return !cat.startsWith("-");
      });
      __privateSet(this, _path, path);
      __privateSet(this, _recording, true);
      await __privateGet(this, _client13).send("Tracing.start", {
        transferMode: "ReturnAsStream",
        traceConfig: {
          excludedCategories,
          includedCategories
        }
      });
    }
    /**
     * Stops a trace started with the `start` method.
     * @returns Promise which resolves to buffer with trace data.
     */
    async stop() {
      const contentDeferred = Deferred_js_1$3.Deferred.create();
      __privateGet(this, _client13).once("Tracing.tracingComplete", async (event) => {
        try {
          (0, assert_js_1$3.assert)(event.stream, 'Missing "stream"');
          const readable = await (0, util_js_1$4.getReadableFromProtocolStream)(__privateGet(this, _client13), event.stream);
          const buffer2 = await (0, util_js_1$4.getReadableAsBuffer)(readable, __privateGet(this, _path));
          contentDeferred.resolve(buffer2 ?? void 0);
        } catch (error) {
          if ((0, ErrorLike_js_1$1.isErrorLike)(error)) {
            contentDeferred.reject(error);
          } else {
            contentDeferred.reject(new Error(`Unknown error: ${error}`));
          }
        }
      });
      await __privateGet(this, _client13).send("Tracing.end");
      __privateSet(this, _recording, false);
      return await contentDeferred.valueOrThrow();
    }
  }
  _client13 = new WeakMap();
  _recording = new WeakMap();
  _path = new WeakMap();
  Tracing$1.Tracing = Tracing;
  var WebWorker$1 = {};
  var TimeoutSettings$1 = {};
  Object.defineProperty(TimeoutSettings$1, "__esModule", { value: true });
  TimeoutSettings$1.TimeoutSettings = void 0;
  const DEFAULT_TIMEOUT = 3e4;
  class TimeoutSettings {
    constructor() {
      __privateAdd(this, _defaultTimeout, void 0);
      __privateAdd(this, _defaultNavigationTimeout, void 0);
      __privateSet(this, _defaultTimeout, null);
      __privateSet(this, _defaultNavigationTimeout, null);
    }
    setDefaultTimeout(timeout2) {
      __privateSet(this, _defaultTimeout, timeout2);
    }
    setDefaultNavigationTimeout(timeout2) {
      __privateSet(this, _defaultNavigationTimeout, timeout2);
    }
    navigationTimeout() {
      if (__privateGet(this, _defaultNavigationTimeout) !== null) {
        return __privateGet(this, _defaultNavigationTimeout);
      }
      if (__privateGet(this, _defaultTimeout) !== null) {
        return __privateGet(this, _defaultTimeout);
      }
      return DEFAULT_TIMEOUT;
    }
    timeout() {
      if (__privateGet(this, _defaultTimeout) !== null) {
        return __privateGet(this, _defaultTimeout);
      }
      return DEFAULT_TIMEOUT;
    }
  }
  _defaultTimeout = new WeakMap();
  _defaultNavigationTimeout = new WeakMap();
  TimeoutSettings$1.TimeoutSettings = TimeoutSettings;
  Object.defineProperty(WebWorker$1, "__esModule", { value: true });
  WebWorker$1.WebWorker = void 0;
  const EventEmitter_js_1$1 = EventEmitter$1;
  const TimeoutSettings_js_1 = TimeoutSettings$1;
  const util_js_1$3 = require$$2$1;
  const ExecutionContext_js_1$1 = ExecutionContext$1;
  const IsolatedWorld_js_1 = IsolatedWorld$1;
  const JSHandle_js_1$1 = JSHandle;
  class WebWorker extends EventEmitter_js_1$1.EventEmitter {
    /**
     * @internal
     */
    constructor(client, url, consoleAPICalled, exceptionThrown) {
      super();
      /**
       * @internal
       */
      __publicField(this, "timeoutSettings", new TimeoutSettings_js_1.TimeoutSettings());
      __privateAdd(this, _world3, void 0);
      __privateAdd(this, _client14, void 0);
      __privateAdd(this, _url4, void 0);
      __privateSet(this, _client14, client);
      __privateSet(this, _url4, url);
      __privateSet(this, _world3, new IsolatedWorld_js_1.IsolatedWorld(this, new TimeoutSettings_js_1.TimeoutSettings()));
      __privateGet(this, _client14).once("Runtime.executionContextCreated", async (event) => {
        __privateGet(this, _world3).setContext(new ExecutionContext_js_1$1.ExecutionContext(client, event.context, __privateGet(this, _world3)));
      });
      __privateGet(this, _client14).on("Runtime.consoleAPICalled", async (event) => {
        try {
          return consoleAPICalled(event.type, event.args.map((object) => {
            return new JSHandle_js_1$1.CdpJSHandle(__privateGet(this, _world3), object);
          }), event.stackTrace);
        } catch (err) {
          (0, util_js_1$3.debugError)(err);
        }
      });
      __privateGet(this, _client14).on("Runtime.exceptionThrown", exceptionThrown);
      __privateGet(this, _client14).send("Runtime.enable").catch(util_js_1$3.debugError);
    }
    /**
     * @internal
     */
    mainRealm() {
      return __privateGet(this, _world3);
    }
    /**
     * The URL of this web worker.
     */
    url() {
      return __privateGet(this, _url4);
    }
    /**
     * The CDP session client the WebWorker belongs to.
     */
    get client() {
      return __privateGet(this, _client14);
    }
    /**
     * If the function passed to the `worker.evaluate` returns a Promise, then
     * `worker.evaluate` would wait for the promise to resolve and return its
     * value. If the function passed to the `worker.evaluate` returns a
     * non-serializable value, then `worker.evaluate` resolves to `undefined`.
     * DevTools Protocol also supports transferring some additional values that
     * are not serializable by `JSON`: `-0`, `NaN`, `Infinity`, `-Infinity`, and
     * bigint literals.
     * Shortcut for `await worker.executionContext()).evaluate(pageFunction, ...args)`.
     *
     * @param pageFunction - Function to be evaluated in the worker context.
     * @param args - Arguments to pass to `pageFunction`.
     * @returns Promise which resolves to the return value of `pageFunction`.
     */
    async evaluate(pageFunction, ...args) {
      pageFunction = (0, util_js_1$3.withSourcePuppeteerURLIfNone)(this.evaluate.name, pageFunction);
      return await this.mainRealm().evaluate(pageFunction, ...args);
    }
    /**
     * The only difference between `worker.evaluate` and `worker.evaluateHandle`
     * is that `worker.evaluateHandle` returns in-page object (JSHandle). If the
     * function passed to the `worker.evaluateHandle` returns a `Promise`, then
     * `worker.evaluateHandle` would wait for the promise to resolve and return
     * its value. Shortcut for
     * `await worker.executionContext()).evaluateHandle(pageFunction, ...args)`
     *
     * @param pageFunction - Function to be evaluated in the page context.
     * @param args - Arguments to pass to `pageFunction`.
     * @returns Promise which resolves to the return value of `pageFunction`.
     */
    async evaluateHandle(pageFunction, ...args) {
      pageFunction = (0, util_js_1$3.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, pageFunction);
      return await this.mainRealm().evaluateHandle(pageFunction, ...args);
    }
  }
  _world3 = new WeakMap();
  _client14 = new WeakMap();
  _url4 = new WeakMap();
  WebWorker$1.WebWorker = WebWorker;
  var __addDisposableResource = commonjsGlobal && commonjsGlobal.__addDisposableResource || function(env, value, async) {
    if (value !== null && value !== void 0) {
      if (typeof value !== "object" && typeof value !== "function")
        throw new TypeError("Object expected.");
      var dispose;
      if (async) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
      }
      if (dispose === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
      }
      if (typeof dispose !== "function")
        throw new TypeError("Object not disposable.");
      env.stack.push({ value, dispose, async });
    } else if (async) {
      env.stack.push({ async: true });
    }
    return value;
  };
  var __disposeResources = commonjsGlobal && commonjsGlobal.__disposeResources || /* @__PURE__ */ function(SuppressedError2) {
    return function(env) {
      function fail(e) {
        env.error = env.hasError ? new SuppressedError2(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
      }
      function next() {
        while (env.stack.length) {
          var rec = env.stack.pop();
          try {
            var result = rec.dispose && rec.dispose.call(rec.value);
            if (rec.async)
              return Promise.resolve(result).then(next, function(e) {
                fail(e);
                return next();
              });
          } catch (e) {
            fail(e);
          }
        }
        if (env.hasError)
          throw env.error;
      }
      return next();
    };
  }(typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  });
  Object.defineProperty(Page$2, "__esModule", { value: true });
  Page$2.CdpPage = void 0;
  const rxjs_js_1 = rxjs;
  const CDPSession_js_1$3 = CDPSession$2;
  const Page_js_1$1 = require$$2;
  const ConsoleMessage_js_1 = ConsoleMessage$1;
  const Errors_js_1 = Errors;
  const FileChooser_js_1 = FileChooser$1;
  const NetworkManagerEvents_js_1 = NetworkManagerEvents;
  const util_js_1$2 = require$$2$1;
  const assert_js_1$2 = assert$1;
  const Deferred_js_1$2 = Deferred$1;
  const disposable_js_1 = disposable;
  const ErrorLike_js_1 = ErrorLike;
  const Accessibility_js_1 = Accessibility$1;
  const Binding_js_1 = Binding$1;
  const CDPSession_js_2 = CDPSession;
  const Connection_js_1 = Connection$1;
  const Coverage_js_1 = Coverage$1;
  const Dialog_js_1 = Dialog$2;
  const EmulationManager_js_1 = EmulationManager$1;
  const ExecutionContext_js_1 = ExecutionContext$1;
  const FirefoxTargetManager_js_1$1 = FirefoxTargetManager$1;
  const FrameManager_js_1 = FrameManager$1;
  const FrameManagerEvents_js_1 = FrameManagerEvents;
  const Input_js_1 = Input$1;
  const IsolatedWorlds_js_1 = IsolatedWorlds;
  const JSHandle_js_1 = JSHandle;
  const Tracing_js_1 = Tracing$1;
  const WebWorker_js_1$1 = WebWorker$1;
  const _CdpPage = class _CdpPage extends Page_js_1$1.Page {
    constructor(client, target, ignoreHTTPSErrors) {
      super();
      __privateAdd(this, _onActivation);
      __privateAdd(this, _onSecondaryTarget);
      /**
       * Sets up listeners for the primary target. The primary target can change
       * during a navigation to a prerended page.
       */
      __privateAdd(this, _setupPrimaryTargetListeners);
      __privateAdd(this, _initialize);
      __privateAdd(this, _onFileChooser);
      __privateAdd(this, _onTargetCrashed);
      __privateAdd(this, _onLogEntryAdded);
      __privateAdd(this, _emitMetrics);
      __privateAdd(this, _buildMetricsObject);
      __privateAdd(this, _handleException);
      __privateAdd(this, _onConsoleAPI);
      __privateAdd(this, _onBindingCalled2);
      __privateAdd(this, _addConsoleMessage);
      __privateAdd(this, _onDialog);
      __privateAdd(this, _go);
      __privateAdd(this, _closed2, false);
      __privateAdd(this, _targetManager, void 0);
      __privateAdd(this, _primaryTargetClient, void 0);
      __privateAdd(this, _primaryTarget, void 0);
      __privateAdd(this, _tabTargetClient, void 0);
      __privateAdd(this, _tabTarget, void 0);
      __privateAdd(this, _keyboard3, void 0);
      __privateAdd(this, _mouse, void 0);
      __privateAdd(this, _touchscreen, void 0);
      __privateAdd(this, _accessibility, void 0);
      __privateAdd(this, _frameManager2, void 0);
      __privateAdd(this, _emulationManager, void 0);
      __privateAdd(this, _tracing, void 0);
      __privateAdd(this, _bindings2, /* @__PURE__ */ new Map());
      __privateAdd(this, _exposedFunctions, /* @__PURE__ */ new Map());
      __privateAdd(this, _coverage, void 0);
      __privateAdd(this, _viewport, void 0);
      __privateAdd(this, _workers, /* @__PURE__ */ new Map());
      __privateAdd(this, _fileChooserDeferreds, /* @__PURE__ */ new Set());
      __privateAdd(this, _sessionCloseDeferred, Deferred_js_1$2.Deferred.create());
      __privateAdd(this, _serviceWorkerBypassed, false);
      __privateAdd(this, _userDragInterceptionEnabled, false);
      __privateAdd(this, _frameManagerHandlers, [
        [
          FrameManagerEvents_js_1.FrameManagerEvent.FrameAttached,
          (frame) => {
            this.emit("frameattached", frame);
          }
        ],
        [
          FrameManagerEvents_js_1.FrameManagerEvent.FrameDetached,
          (frame) => {
            this.emit("framedetached", frame);
          }
        ],
        [
          FrameManagerEvents_js_1.FrameManagerEvent.FrameNavigated,
          (frame) => {
            this.emit("framenavigated", frame);
          }
        ]
      ]);
      __privateAdd(this, _networkManagerHandlers, [
        [
          NetworkManagerEvents_js_1.NetworkManagerEvent.Request,
          (request) => {
            this.emit("request", request);
          }
        ],
        [
          NetworkManagerEvents_js_1.NetworkManagerEvent.RequestServedFromCache,
          (request) => {
            this.emit("requestservedfromcache", request);
          }
        ],
        [
          NetworkManagerEvents_js_1.NetworkManagerEvent.Response,
          (response) => {
            this.emit("response", response);
          }
        ],
        [
          NetworkManagerEvents_js_1.NetworkManagerEvent.RequestFailed,
          (request) => {
            this.emit("requestfailed", request);
          }
        ],
        [
          NetworkManagerEvents_js_1.NetworkManagerEvent.RequestFinished,
          (request) => {
            this.emit("requestfinished", request);
          }
        ]
      ]);
      __privateAdd(this, _sessionHandlers, [
        [
          CDPSession_js_1$3.CDPSessionEvent.Disconnected,
          () => {
            __privateGet(this, _sessionCloseDeferred).reject(new Errors_js_1.TargetCloseError("Target closed"));
          }
        ],
        [
          "Page.domContentEventFired",
          () => {
            return this.emit("domcontentloaded", void 0);
          }
        ],
        [
          "Page.loadEventFired",
          () => {
            return this.emit("load", void 0);
          }
        ],
        ["Runtime.consoleAPICalled", __privateMethod(this, _onConsoleAPI, onConsoleAPI_fn).bind(this)],
        ["Runtime.bindingCalled", __privateMethod(this, _onBindingCalled2, onBindingCalled_fn).bind(this)],
        ["Page.javascriptDialogOpening", __privateMethod(this, _onDialog, onDialog_fn).bind(this)],
        ["Runtime.exceptionThrown", __privateMethod(this, _handleException, handleException_fn).bind(this)],
        ["Inspector.targetCrashed", __privateMethod(this, _onTargetCrashed, onTargetCrashed_fn).bind(this)],
        ["Performance.metrics", __privateMethod(this, _emitMetrics, emitMetrics_fn).bind(this)],
        ["Log.entryAdded", __privateMethod(this, _onLogEntryAdded, onLogEntryAdded_fn).bind(this)],
        ["Page.fileChooserOpened", __privateMethod(this, _onFileChooser, onFileChooser_fn).bind(this)]
      ]);
      __privateAdd(this, _onDetachedFromTarget, (target) => {
        var _a2;
        const sessionId = (_a2 = target._session()) == null ? void 0 : _a2.id();
        const worker = __privateGet(this, _workers).get(sessionId);
        if (!worker) {
          return;
        }
        __privateGet(this, _workers).delete(sessionId);
        this.emit("workerdestroyed", worker);
      });
      __privateAdd(this, _onAttachedToTarget2, (session) => {
        (0, assert_js_1$2.assert)(session instanceof CDPSession_js_2.CdpCDPSession);
        __privateGet(this, _frameManager2).onAttachedToTarget(session._target());
        if (session._target()._getTargetInfo().type === "worker") {
          const worker = new WebWorker_js_1$1.WebWorker(session, session._target().url(), __privateMethod(this, _addConsoleMessage, addConsoleMessage_fn).bind(this), __privateMethod(this, _handleException, handleException_fn).bind(this));
          __privateGet(this, _workers).set(session.id(), worker);
          this.emit("workercreated", worker);
        }
        session.on(CDPSession_js_1$3.CDPSessionEvent.Ready, __privateGet(this, _onAttachedToTarget2));
      });
      __privateSet(this, _primaryTargetClient, client);
      __privateSet(this, _tabTargetClient, client.parentSession());
      (0, assert_js_1$2.assert)(__privateGet(this, _tabTargetClient), "Tab target session is not defined.");
      __privateSet(this, _tabTarget, __privateGet(this, _tabTargetClient)._target());
      (0, assert_js_1$2.assert)(__privateGet(this, _tabTarget), "Tab target is not defined.");
      __privateSet(this, _primaryTarget, target);
      __privateSet(this, _targetManager, target._targetManager());
      __privateSet(this, _keyboard3, new Input_js_1.CdpKeyboard(client));
      __privateSet(this, _mouse, new Input_js_1.CdpMouse(client, __privateGet(this, _keyboard3)));
      __privateSet(this, _touchscreen, new Input_js_1.CdpTouchscreen(client, __privateGet(this, _keyboard3)));
      __privateSet(this, _accessibility, new Accessibility_js_1.Accessibility(client));
      __privateSet(this, _frameManager2, new FrameManager_js_1.FrameManager(client, this, ignoreHTTPSErrors, this._timeoutSettings));
      __privateSet(this, _emulationManager, new EmulationManager_js_1.EmulationManager(client));
      __privateSet(this, _tracing, new Tracing_js_1.Tracing(client));
      __privateSet(this, _coverage, new Coverage_js_1.Coverage(client));
      __privateSet(this, _viewport, null);
      for (const [eventName, handler] of __privateGet(this, _frameManagerHandlers)) {
        __privateGet(this, _frameManager2).on(eventName, handler);
      }
      for (const [eventName, handler] of __privateGet(this, _networkManagerHandlers)) {
        __privateGet(this, _frameManager2).networkManager.on(eventName, handler);
      }
      __privateGet(this, _tabTargetClient).on(CDPSession_js_1$3.CDPSessionEvent.Swapped, __privateMethod(this, _onActivation, onActivation_fn).bind(this));
      __privateGet(this, _tabTargetClient).on(CDPSession_js_1$3.CDPSessionEvent.Ready, __privateMethod(this, _onSecondaryTarget, onSecondaryTarget_fn).bind(this));
      __privateGet(this, _targetManager).on("targetGone", __privateGet(this, _onDetachedFromTarget));
      __privateGet(this, _tabTarget)._isClosedDeferred.valueOrThrow().then(() => {
        __privateGet(this, _targetManager).off("targetGone", __privateGet(this, _onDetachedFromTarget));
        this.emit("close", void 0);
        __privateSet(this, _closed2, true);
      }).catch(util_js_1$2.debugError);
      __privateMethod(this, _setupPrimaryTargetListeners, setupPrimaryTargetListeners_fn).call(this);
    }
    static async _create(client, target, ignoreHTTPSErrors, defaultViewport) {
      var _a2;
      const page = new _CdpPage(client, target, ignoreHTTPSErrors);
      await __privateMethod(_a2 = page, _initialize, initialize_fn).call(_a2);
      if (defaultViewport) {
        try {
          await page.setViewport(defaultViewport);
        } catch (err) {
          if ((0, ErrorLike_js_1.isErrorLike)(err) && (0, Connection_js_1.isTargetClosedError)(err)) {
            (0, util_js_1$2.debugError)(err);
          } else {
            throw err;
          }
        }
      }
      return page;
    }
    _client() {
      return __privateGet(this, _primaryTargetClient);
    }
    isServiceWorkerBypassed() {
      return __privateGet(this, _serviceWorkerBypassed);
    }
    isDragInterceptionEnabled() {
      return __privateGet(this, _userDragInterceptionEnabled);
    }
    isJavaScriptEnabled() {
      return __privateGet(this, _emulationManager).javascriptEnabled;
    }
    async waitForFileChooser(options = {}) {
      const needsEnable = __privateGet(this, _fileChooserDeferreds).size === 0;
      const { timeout: timeout2 = this._timeoutSettings.timeout() } = options;
      const deferred = Deferred_js_1$2.Deferred.create({
        message: `Waiting for \`FileChooser\` failed: ${timeout2}ms exceeded`,
        timeout: timeout2
      });
      __privateGet(this, _fileChooserDeferreds).add(deferred);
      let enablePromise;
      if (needsEnable) {
        enablePromise = __privateGet(this, _primaryTargetClient).send("Page.setInterceptFileChooserDialog", {
          enabled: true
        });
      }
      try {
        const [result] = await Promise.all([
          deferred.valueOrThrow(),
          enablePromise
        ]);
        return result;
      } catch (error) {
        __privateGet(this, _fileChooserDeferreds).delete(deferred);
        throw error;
      }
    }
    async setGeolocation(options) {
      return await __privateGet(this, _emulationManager).setGeolocation(options);
    }
    target() {
      return __privateGet(this, _primaryTarget);
    }
    browser() {
      return __privateGet(this, _primaryTarget).browser();
    }
    browserContext() {
      return __privateGet(this, _primaryTarget).browserContext();
    }
    mainFrame() {
      return __privateGet(this, _frameManager2).mainFrame();
    }
    get keyboard() {
      return __privateGet(this, _keyboard3);
    }
    get touchscreen() {
      return __privateGet(this, _touchscreen);
    }
    get coverage() {
      return __privateGet(this, _coverage);
    }
    get tracing() {
      return __privateGet(this, _tracing);
    }
    get accessibility() {
      return __privateGet(this, _accessibility);
    }
    frames() {
      return __privateGet(this, _frameManager2).frames();
    }
    workers() {
      return Array.from(__privateGet(this, _workers).values());
    }
    async setRequestInterception(value) {
      return await __privateGet(this, _frameManager2).networkManager.setRequestInterception(value);
    }
    async setBypassServiceWorker(bypass) {
      __privateSet(this, _serviceWorkerBypassed, bypass);
      return await __privateGet(this, _primaryTargetClient).send("Network.setBypassServiceWorker", { bypass });
    }
    async setDragInterception(enabled) {
      __privateSet(this, _userDragInterceptionEnabled, enabled);
      return await __privateGet(this, _primaryTargetClient).send("Input.setInterceptDrags", {
        enabled
      });
    }
    async setOfflineMode(enabled) {
      return await __privateGet(this, _frameManager2).networkManager.setOfflineMode(enabled);
    }
    async emulateNetworkConditions(networkConditions) {
      return await __privateGet(this, _frameManager2).networkManager.emulateNetworkConditions(networkConditions);
    }
    setDefaultNavigationTimeout(timeout2) {
      this._timeoutSettings.setDefaultNavigationTimeout(timeout2);
    }
    setDefaultTimeout(timeout2) {
      this._timeoutSettings.setDefaultTimeout(timeout2);
    }
    getDefaultTimeout() {
      return this._timeoutSettings.timeout();
    }
    async queryObjects(prototypeHandle) {
      (0, assert_js_1$2.assert)(!prototypeHandle.disposed, "Prototype JSHandle is disposed!");
      (0, assert_js_1$2.assert)(prototypeHandle.id, "Prototype JSHandle must not be referencing primitive value");
      const response = await this.mainFrame().client.send("Runtime.queryObjects", {
        prototypeObjectId: prototypeHandle.id
      });
      return (0, ExecutionContext_js_1.createCdpHandle)(this.mainFrame().mainRealm(), response.objects);
    }
    async cookies(...urls) {
      const originalCookies = (await __privateGet(this, _primaryTargetClient).send("Network.getCookies", {
        urls: urls.length ? urls : [this.url()]
      })).cookies;
      const unsupportedCookieAttributes = ["priority"];
      const filterUnsupportedAttributes = (cookie) => {
        for (const attr of unsupportedCookieAttributes) {
          delete cookie[attr];
        }
        return cookie;
      };
      return originalCookies.map(filterUnsupportedAttributes);
    }
    async deleteCookie(...cookies) {
      const pageURL = this.url();
      for (const cookie of cookies) {
        const item = Object.assign({}, cookie);
        if (!cookie.url && pageURL.startsWith("http")) {
          item.url = pageURL;
        }
        await __privateGet(this, _primaryTargetClient).send("Network.deleteCookies", item);
      }
    }
    async setCookie(...cookies) {
      const pageURL = this.url();
      const startsWithHTTP = pageURL.startsWith("http");
      const items = cookies.map((cookie) => {
        const item = Object.assign({}, cookie);
        if (!item.url && startsWithHTTP) {
          item.url = pageURL;
        }
        (0, assert_js_1$2.assert)(item.url !== "about:blank", `Blank page can not have cookie "${item.name}"`);
        (0, assert_js_1$2.assert)(!String.prototype.startsWith.call(item.url || "", "data:"), `Data URL page can not have cookie "${item.name}"`);
        return item;
      });
      await this.deleteCookie(...items);
      if (items.length) {
        await __privateGet(this, _primaryTargetClient).send("Network.setCookies", {
          cookies: items
        });
      }
    }
    async exposeFunction(name, pptrFunction) {
      if (__privateGet(this, _bindings2).has(name)) {
        throw new Error(`Failed to add page binding with name ${name}: window['${name}'] already exists!`);
      }
      let binding;
      switch (typeof pptrFunction) {
        case "function":
          binding = new Binding_js_1.Binding(name, pptrFunction);
          break;
        default:
          binding = new Binding_js_1.Binding(name, pptrFunction.default);
          break;
      }
      __privateGet(this, _bindings2).set(name, binding);
      const expression = (0, util_js_1$2.pageBindingInitString)("exposedFun", name);
      await __privateGet(this, _primaryTargetClient).send("Runtime.addBinding", { name });
      const { identifier } = await __privateGet(this, _primaryTargetClient).send("Page.addScriptToEvaluateOnNewDocument", {
        source: expression
      });
      __privateGet(this, _exposedFunctions).set(name, identifier);
      await Promise.all(this.frames().map((frame) => {
        return frame.evaluate(expression).catch(util_js_1$2.debugError);
      }));
    }
    async removeExposedFunction(name) {
      const exposedFun = __privateGet(this, _exposedFunctions).get(name);
      if (!exposedFun) {
        throw new Error(`Failed to remove page binding with name ${name}: window['${name}'] does not exists!`);
      }
      await __privateGet(this, _primaryTargetClient).send("Runtime.removeBinding", { name });
      await this.removeScriptToEvaluateOnNewDocument(exposedFun);
      await Promise.all(this.frames().map((frame) => {
        return frame.evaluate((name2) => {
          globalThis[name2] = void 0;
        }, name).catch(util_js_1$2.debugError);
      }));
      __privateGet(this, _exposedFunctions).delete(name);
      __privateGet(this, _bindings2).delete(name);
    }
    async authenticate(credentials) {
      return await __privateGet(this, _frameManager2).networkManager.authenticate(credentials);
    }
    async setExtraHTTPHeaders(headers) {
      return await __privateGet(this, _frameManager2).networkManager.setExtraHTTPHeaders(headers);
    }
    async setUserAgent(userAgent, userAgentMetadata) {
      return await __privateGet(this, _frameManager2).networkManager.setUserAgent(userAgent, userAgentMetadata);
    }
    async metrics() {
      const response = await __privateGet(this, _primaryTargetClient).send("Performance.getMetrics");
      return __privateMethod(this, _buildMetricsObject, buildMetricsObject_fn).call(this, response.metrics);
    }
    async reload(options) {
      const [result] = await Promise.all([
        this.waitForNavigation(options),
        __privateGet(this, _primaryTargetClient).send("Page.reload")
      ]);
      return result;
    }
    async createCDPSession() {
      return await this.target().createCDPSession();
    }
    async waitForRequest(urlOrPredicate, options = {}) {
      const { timeout: timeout2 = this._timeoutSettings.timeout() } = options;
      return await (0, util_js_1$2.waitForHTTP)(__privateGet(this, _frameManager2).networkManager, NetworkManagerEvents_js_1.NetworkManagerEvent.Request, urlOrPredicate, timeout2, __privateGet(this, _sessionCloseDeferred));
    }
    async waitForResponse(urlOrPredicate, options = {}) {
      const { timeout: timeout2 = this._timeoutSettings.timeout() } = options;
      return await (0, util_js_1$2.waitForHTTP)(__privateGet(this, _frameManager2).networkManager, NetworkManagerEvents_js_1.NetworkManagerEvent.Response, urlOrPredicate, timeout2, __privateGet(this, _sessionCloseDeferred));
    }
    async waitForNetworkIdle(options = {}) {
      const { idleTime = util_js_1$2.NETWORK_IDLE_TIME, timeout: ms = this._timeoutSettings.timeout() } = options;
      await (0, rxjs_js_1.firstValueFrom)(this._waitForNetworkIdle(__privateGet(this, _frameManager2).networkManager, idleTime).pipe((0, rxjs_js_1.raceWith)((0, util_js_1$2.timeout)(ms), (0, rxjs_js_1.from)(__privateGet(this, _sessionCloseDeferred).valueOrThrow()))));
    }
    async goBack(options = {}) {
      return await __privateMethod(this, _go, go_fn).call(this, -1, options);
    }
    async goForward(options = {}) {
      return await __privateMethod(this, _go, go_fn).call(this, 1, options);
    }
    async bringToFront() {
      await __privateGet(this, _primaryTargetClient).send("Page.bringToFront");
    }
    async setJavaScriptEnabled(enabled) {
      return await __privateGet(this, _emulationManager).setJavaScriptEnabled(enabled);
    }
    async setBypassCSP(enabled) {
      await __privateGet(this, _primaryTargetClient).send("Page.setBypassCSP", { enabled });
    }
    async emulateMediaType(type) {
      return await __privateGet(this, _emulationManager).emulateMediaType(type);
    }
    async emulateCPUThrottling(factor) {
      return await __privateGet(this, _emulationManager).emulateCPUThrottling(factor);
    }
    async emulateMediaFeatures(features) {
      return await __privateGet(this, _emulationManager).emulateMediaFeatures(features);
    }
    async emulateTimezone(timezoneId) {
      return await __privateGet(this, _emulationManager).emulateTimezone(timezoneId);
    }
    async emulateIdleState(overrides) {
      return await __privateGet(this, _emulationManager).emulateIdleState(overrides);
    }
    async emulateVisionDeficiency(type) {
      return await __privateGet(this, _emulationManager).emulateVisionDeficiency(type);
    }
    async setViewport(viewport) {
      const needsReload = await __privateGet(this, _emulationManager).emulateViewport(viewport);
      __privateSet(this, _viewport, viewport);
      if (needsReload) {
        await this.reload();
      }
    }
    viewport() {
      return __privateGet(this, _viewport);
    }
    async evaluateOnNewDocument(pageFunction, ...args) {
      const source = (0, util_js_1$2.evaluationString)(pageFunction, ...args);
      const { identifier } = await __privateGet(this, _primaryTargetClient).send("Page.addScriptToEvaluateOnNewDocument", {
        source
      });
      return { identifier };
    }
    async removeScriptToEvaluateOnNewDocument(identifier) {
      await __privateGet(this, _primaryTargetClient).send("Page.removeScriptToEvaluateOnNewDocument", {
        identifier
      });
    }
    async setCacheEnabled(enabled = true) {
      await __privateGet(this, _frameManager2).networkManager.setCacheEnabled(enabled);
    }
    async _screenshot(options) {
      const env_2 = { stack: [], error: void 0, hasError: false };
      try {
        const { fromSurface, omitBackground, optimizeForSpeed, quality, clip: userClip, type, captureBeyondViewport } = options;
        const isFirefox = this.target()._targetManager() instanceof FirefoxTargetManager_js_1$1.FirefoxTargetManager;
        const stack = __addDisposableResource(env_2, new disposable_js_1.AsyncDisposableStack(), true);
        if (!isFirefox && omitBackground && (type === "png" || type === "webp")) {
          await __privateGet(this, _emulationManager).setTransparentBackgroundColor();
          stack.defer(async () => {
            await __privateGet(this, _emulationManager).resetDefaultBackgroundColor().catch(util_js_1$2.debugError);
          });
        }
        let clip = userClip;
        if (clip && !captureBeyondViewport) {
          const viewport = await this.mainFrame().isolatedRealm().evaluate(() => {
            const { height, pageLeft: x, pageTop: y, width } = window.visualViewport;
            return { x, y, height, width };
          });
          clip = getIntersectionRect(clip, viewport);
        }
        const { data } = await __privateGet(this, _primaryTargetClient).send("Page.captureScreenshot", {
          format: type,
          ...optimizeForSpeed ? { optimizeForSpeed } : {},
          ...quality !== void 0 ? { quality: Math.round(quality) } : {},
          clip: clip && {
            ...clip,
            scale: clip.scale ?? 1
          },
          ...!fromSurface ? { fromSurface } : {},
          captureBeyondViewport
        });
        return data;
      } catch (e_2) {
        env_2.error = e_2;
        env_2.hasError = true;
      } finally {
        const result_1 = __disposeResources(env_2);
        if (result_1)
          await result_1;
      }
    }
    async createPDFStream(options = {}) {
      const { landscape, displayHeaderFooter, headerTemplate, footerTemplate, printBackground, scale, width: paperWidth, height: paperHeight, margin, pageRanges, preferCSSPageSize, omitBackground, timeout: ms, tagged: generateTaggedPDF } = this._getPDFOptions(options);
      if (omitBackground) {
        await __privateGet(this, _emulationManager).setTransparentBackgroundColor();
      }
      const printCommandPromise = __privateGet(this, _primaryTargetClient).send("Page.printToPDF", {
        transferMode: "ReturnAsStream",
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
        generateTaggedPDF
      });
      const result = await (0, rxjs_js_1.firstValueFrom)((0, rxjs_js_1.from)(printCommandPromise).pipe((0, rxjs_js_1.raceWith)((0, util_js_1$2.timeout)(ms))));
      if (omitBackground) {
        await __privateGet(this, _emulationManager).resetDefaultBackgroundColor();
      }
      (0, assert_js_1$2.assert)(result.stream, "`stream` is missing from `Page.printToPDF");
      return await (0, util_js_1$2.getReadableFromProtocolStream)(__privateGet(this, _primaryTargetClient), result.stream);
    }
    async pdf(options = {}) {
      const { path = void 0 } = options;
      const readable = await this.createPDFStream(options);
      const buffer2 = await (0, util_js_1$2.getReadableAsBuffer)(readable, path);
      (0, assert_js_1$2.assert)(buffer2, "Could not create buffer");
      return buffer2;
    }
    async close(options = { runBeforeUnload: void 0 }) {
      const connection = __privateGet(this, _primaryTargetClient).connection();
      (0, assert_js_1$2.assert)(connection, "Protocol error: Connection closed. Most likely the page has been closed.");
      const runBeforeUnload = !!options.runBeforeUnload;
      if (runBeforeUnload) {
        await __privateGet(this, _primaryTargetClient).send("Page.close");
      } else {
        await connection.send("Target.closeTarget", {
          targetId: __privateGet(this, _primaryTarget)._targetId
        });
        await __privateGet(this, _tabTarget)._isClosedDeferred.valueOrThrow();
      }
    }
    isClosed() {
      return __privateGet(this, _closed2);
    }
    get mouse() {
      return __privateGet(this, _mouse);
    }
    /**
     * This method is typically coupled with an action that triggers a device
     * request from an api such as WebBluetooth.
     *
     * :::caution
     *
     * This must be called before the device request is made. It will not return a
     * currently active device prompt.
     *
     * :::
     *
     * @example
     *
     * ```ts
     * const [devicePrompt] = Promise.all([
     *   page.waitForDevicePrompt(),
     *   page.click('#connect-bluetooth'),
     * ]);
     * await devicePrompt.select(
     *   await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))
     * );
     * ```
     */
    async waitForDevicePrompt(options = {}) {
      return await this.mainFrame().waitForDevicePrompt(options);
    }
  };
  _closed2 = new WeakMap();
  _targetManager = new WeakMap();
  _primaryTargetClient = new WeakMap();
  _primaryTarget = new WeakMap();
  _tabTargetClient = new WeakMap();
  _tabTarget = new WeakMap();
  _keyboard3 = new WeakMap();
  _mouse = new WeakMap();
  _touchscreen = new WeakMap();
  _accessibility = new WeakMap();
  _frameManager2 = new WeakMap();
  _emulationManager = new WeakMap();
  _tracing = new WeakMap();
  _bindings2 = new WeakMap();
  _exposedFunctions = new WeakMap();
  _coverage = new WeakMap();
  _viewport = new WeakMap();
  _workers = new WeakMap();
  _fileChooserDeferreds = new WeakMap();
  _sessionCloseDeferred = new WeakMap();
  _serviceWorkerBypassed = new WeakMap();
  _userDragInterceptionEnabled = new WeakMap();
  _frameManagerHandlers = new WeakMap();
  _networkManagerHandlers = new WeakMap();
  _sessionHandlers = new WeakMap();
  _onActivation = new WeakSet();
  onActivation_fn = async function(newSession) {
    __privateSet(this, _primaryTargetClient, newSession);
    (0, assert_js_1$2.assert)(__privateGet(this, _primaryTargetClient) instanceof CDPSession_js_2.CdpCDPSession, "CDPSession is not instance of CDPSessionImpl");
    __privateSet(this, _primaryTarget, __privateGet(this, _primaryTargetClient)._target());
    (0, assert_js_1$2.assert)(__privateGet(this, _primaryTarget), "Missing target on swap");
    __privateGet(this, _keyboard3).updateClient(newSession);
    __privateGet(this, _mouse).updateClient(newSession);
    __privateGet(this, _touchscreen).updateClient(newSession);
    __privateGet(this, _accessibility).updateClient(newSession);
    __privateGet(this, _emulationManager).updateClient(newSession);
    __privateGet(this, _tracing).updateClient(newSession);
    __privateGet(this, _coverage).updateClient(newSession);
    await __privateGet(this, _frameManager2).swapFrameTree(newSession);
    __privateMethod(this, _setupPrimaryTargetListeners, setupPrimaryTargetListeners_fn).call(this);
  };
  _onSecondaryTarget = new WeakSet();
  onSecondaryTarget_fn = async function(session) {
    (0, assert_js_1$2.assert)(session instanceof CDPSession_js_2.CdpCDPSession);
    if (session._target()._subtype() !== "prerender") {
      return;
    }
    __privateGet(this, _frameManager2).registerSpeculativeSession(session).catch(util_js_1$2.debugError);
    __privateGet(this, _emulationManager).registerSpeculativeSession(session).catch(util_js_1$2.debugError);
  };
  _setupPrimaryTargetListeners = new WeakSet();
  setupPrimaryTargetListeners_fn = function() {
    __privateGet(this, _primaryTargetClient).on(CDPSession_js_1$3.CDPSessionEvent.Ready, __privateGet(this, _onAttachedToTarget2));
    for (const [eventName, handler] of __privateGet(this, _sessionHandlers)) {
      __privateGet(this, _primaryTargetClient).on(eventName, handler);
    }
  };
  _onDetachedFromTarget = new WeakMap();
  _onAttachedToTarget2 = new WeakMap();
  _initialize = new WeakSet();
  initialize_fn = async function() {
    try {
      await Promise.all([
        __privateGet(this, _frameManager2).initialize(__privateGet(this, _primaryTargetClient)),
        __privateGet(this, _primaryTargetClient).send("Performance.enable"),
        __privateGet(this, _primaryTargetClient).send("Log.enable")
      ]);
    } catch (err) {
      if ((0, ErrorLike_js_1.isErrorLike)(err) && (0, Connection_js_1.isTargetClosedError)(err)) {
        (0, util_js_1$2.debugError)(err);
      } else {
        throw err;
      }
    }
  };
  _onFileChooser = new WeakSet();
  onFileChooser_fn = async function(event) {
    const env_1 = { stack: [], error: void 0, hasError: false };
    try {
      if (!__privateGet(this, _fileChooserDeferreds).size) {
        return;
      }
      const frame = __privateGet(this, _frameManager2).frame(event.frameId);
      (0, assert_js_1$2.assert)(frame, "This should never happen.");
      const handle = __addDisposableResource(env_1, await frame.worlds[IsolatedWorlds_js_1.MAIN_WORLD].adoptBackendNode(event.backendNodeId), false);
      const fileChooser = new FileChooser_js_1.FileChooser(handle.move(), event);
      for (const promise of __privateGet(this, _fileChooserDeferreds)) {
        promise.resolve(fileChooser);
      }
      __privateGet(this, _fileChooserDeferreds).clear();
    } catch (e_1) {
      env_1.error = e_1;
      env_1.hasError = true;
    } finally {
      __disposeResources(env_1);
    }
  };
  _onTargetCrashed = new WeakSet();
  onTargetCrashed_fn = function() {
    this.emit("error", new Error("Page crashed!"));
  };
  _onLogEntryAdded = new WeakSet();
  onLogEntryAdded_fn = function(event) {
    const { level, text, args, source, url, lineNumber } = event.entry;
    if (args) {
      args.map((arg) => {
        return (0, JSHandle_js_1.releaseObject)(__privateGet(this, _primaryTargetClient), arg);
      });
    }
    if (source !== "worker") {
      this.emit("console", new ConsoleMessage_js_1.ConsoleMessage(level, text, [], [{ url, lineNumber }]));
    }
  };
  _emitMetrics = new WeakSet();
  emitMetrics_fn = function(event) {
    this.emit("metrics", {
      title: event.title,
      metrics: __privateMethod(this, _buildMetricsObject, buildMetricsObject_fn).call(this, event.metrics)
    });
  };
  _buildMetricsObject = new WeakSet();
  buildMetricsObject_fn = function(metrics) {
    const result = {};
    for (const metric of metrics || []) {
      if (supportedMetrics.has(metric.name)) {
        result[metric.name] = metric.value;
      }
    }
    return result;
  };
  _handleException = new WeakSet();
  handleException_fn = function(exception) {
    this.emit("pageerror", (0, util_js_1$2.createClientError)(exception.exceptionDetails));
  };
  _onConsoleAPI = new WeakSet();
  onConsoleAPI_fn = async function(event) {
    if (event.executionContextId === 0) {
      return;
    }
    const context = __privateGet(this, _frameManager2).getExecutionContextById(event.executionContextId, __privateGet(this, _primaryTargetClient));
    if (!context) {
      (0, util_js_1$2.debugError)(new Error(`ExecutionContext not found for a console message: ${JSON.stringify(event)}`));
      return;
    }
    const values = event.args.map((arg) => {
      return (0, ExecutionContext_js_1.createCdpHandle)(context._world, arg);
    });
    __privateMethod(this, _addConsoleMessage, addConsoleMessage_fn).call(this, event.type, values, event.stackTrace);
  };
  _onBindingCalled2 = new WeakSet();
  onBindingCalled_fn = async function(event) {
    let payload;
    try {
      payload = JSON.parse(event.payload);
    } catch {
      return;
    }
    const { type, name, seq, args, isTrivial } = payload;
    if (type !== "exposedFun") {
      return;
    }
    const context = __privateGet(this, _frameManager2).executionContextById(event.executionContextId, __privateGet(this, _primaryTargetClient));
    if (!context) {
      return;
    }
    const binding = __privateGet(this, _bindings2).get(name);
    await (binding == null ? void 0 : binding.run(context, seq, args, isTrivial));
  };
  _addConsoleMessage = new WeakSet();
  addConsoleMessage_fn = function(eventType, args, stackTrace) {
    if (!this.listenerCount(
      "console"
      /* PageEvent.Console */
    )) {
      args.forEach((arg) => {
        return arg.dispose();
      });
      return;
    }
    const textTokens = [];
    for (const arg of args) {
      const remoteObject = arg.remoteObject();
      if (remoteObject.objectId) {
        textTokens.push(arg.toString());
      } else {
        textTokens.push((0, util_js_1$2.valueFromRemoteObject)(remoteObject));
      }
    }
    const stackTraceLocations = [];
    if (stackTrace) {
      for (const callFrame of stackTrace.callFrames) {
        stackTraceLocations.push({
          url: callFrame.url,
          lineNumber: callFrame.lineNumber,
          columnNumber: callFrame.columnNumber
        });
      }
    }
    const message = new ConsoleMessage_js_1.ConsoleMessage(eventType, textTokens.join(" "), args, stackTraceLocations);
    this.emit("console", message);
  };
  _onDialog = new WeakSet();
  onDialog_fn = function(event) {
    const type = (0, util_js_1$2.validateDialogType)(event.type);
    const dialog = new Dialog_js_1.CdpDialog(__privateGet(this, _primaryTargetClient), type, event.message, event.defaultPrompt);
    this.emit("dialog", dialog);
  };
  _go = new WeakSet();
  go_fn = async function(delta, options) {
    const history = await __privateGet(this, _primaryTargetClient).send("Page.getNavigationHistory");
    const entry = history.entries[history.currentIndex + delta];
    if (!entry) {
      return null;
    }
    const result = await Promise.all([
      this.waitForNavigation(options),
      __privateGet(this, _primaryTargetClient).send("Page.navigateToHistoryEntry", {
        entryId: entry.id
      })
    ]);
    return result[0];
  };
  let CdpPage = _CdpPage;
  Page$2.CdpPage = CdpPage;
  const supportedMetrics = /* @__PURE__ */ new Set([
    "Timestamp",
    "Documents",
    "Frames",
    "JSEventListeners",
    "Nodes",
    "LayoutCount",
    "RecalcStyleCount",
    "LayoutDuration",
    "RecalcStyleDuration",
    "ScriptDuration",
    "TaskDuration",
    "JSHeapUsedSize",
    "JSHeapTotalSize"
  ]);
  function getIntersectionRect(clip, viewport) {
    const x = Math.max(clip.x, viewport.x);
    const y = Math.max(clip.y, viewport.y);
    return {
      x,
      y,
      width: Math.max(Math.min(clip.x + clip.width, viewport.x + viewport.width) - x, 0),
      height: Math.max(Math.min(clip.y + clip.height, viewport.y + viewport.height) - y, 0)
    };
  }
  Object.defineProperty(Target$2, "__esModule", { value: true });
  Target$2.OtherTarget = Target$2.WorkerTarget = Target$2.DevToolsTarget = Target$2.PageTarget = Target$2.CdpTarget = Target$2.InitializationStatus = void 0;
  const Target_js_1$2 = Target$1;
  const util_js_1$1 = require$$2$1;
  const Deferred_js_1$1 = Deferred$1;
  const CDPSession_js_1$2 = CDPSession;
  const Page_js_1 = Page$2;
  const WebWorker_js_1 = WebWorker$1;
  var InitializationStatus;
  (function(InitializationStatus2) {
    InitializationStatus2["SUCCESS"] = "success";
    InitializationStatus2["ABORTED"] = "aborted";
  })(InitializationStatus || (Target$2.InitializationStatus = InitializationStatus = {}));
  class CdpTarget extends Target_js_1$2.Target {
    /**
     * To initialize the target for use, call initialize.
     *
     * @internal
     */
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory) {
      super();
      __privateAdd(this, _browserContext, void 0);
      __privateAdd(this, _session, void 0);
      __privateAdd(this, _targetInfo, void 0);
      __privateAdd(this, _targetManager2, void 0);
      __privateAdd(this, _sessionFactory, void 0);
      __publicField(this, "_initializedDeferred", Deferred_js_1$1.Deferred.create());
      __publicField(this, "_isClosedDeferred", Deferred_js_1$1.Deferred.create());
      __publicField(this, "_targetId");
      __privateSet(this, _session, session);
      __privateSet(this, _targetManager2, targetManager);
      __privateSet(this, _targetInfo, targetInfo);
      __privateSet(this, _browserContext, browserContext);
      this._targetId = targetInfo.targetId;
      __privateSet(this, _sessionFactory, sessionFactory);
      if (__privateGet(this, _session) && __privateGet(this, _session) instanceof CDPSession_js_1$2.CdpCDPSession) {
        __privateGet(this, _session)._setTarget(this);
      }
    }
    _subtype() {
      return __privateGet(this, _targetInfo).subtype;
    }
    _session() {
      return __privateGet(this, _session);
    }
    _sessionFactory() {
      if (!__privateGet(this, _sessionFactory)) {
        throw new Error("sessionFactory is not initialized");
      }
      return __privateGet(this, _sessionFactory);
    }
    createCDPSession() {
      if (!__privateGet(this, _sessionFactory)) {
        throw new Error("sessionFactory is not initialized");
      }
      return __privateGet(this, _sessionFactory).call(this, false).then((session) => {
        session._setTarget(this);
        return session;
      });
    }
    url() {
      return __privateGet(this, _targetInfo).url;
    }
    type() {
      const type = __privateGet(this, _targetInfo).type;
      switch (type) {
        case "page":
          return Target_js_1$2.TargetType.PAGE;
        case "background_page":
          return Target_js_1$2.TargetType.BACKGROUND_PAGE;
        case "service_worker":
          return Target_js_1$2.TargetType.SERVICE_WORKER;
        case "shared_worker":
          return Target_js_1$2.TargetType.SHARED_WORKER;
        case "browser":
          return Target_js_1$2.TargetType.BROWSER;
        case "webview":
          return Target_js_1$2.TargetType.WEBVIEW;
        case "tab":
          return Target_js_1$2.TargetType.TAB;
        default:
          return Target_js_1$2.TargetType.OTHER;
      }
    }
    _targetManager() {
      if (!__privateGet(this, _targetManager2)) {
        throw new Error("targetManager is not initialized");
      }
      return __privateGet(this, _targetManager2);
    }
    _getTargetInfo() {
      return __privateGet(this, _targetInfo);
    }
    browser() {
      if (!__privateGet(this, _browserContext)) {
        throw new Error("browserContext is not initialised");
      }
      return __privateGet(this, _browserContext).browser();
    }
    browserContext() {
      if (!__privateGet(this, _browserContext)) {
        throw new Error("browserContext is not initialised");
      }
      return __privateGet(this, _browserContext);
    }
    opener() {
      const { openerId } = __privateGet(this, _targetInfo);
      if (!openerId) {
        return;
      }
      return this.browser().targets().find((target) => {
        return target._targetId === openerId;
      });
    }
    _targetInfoChanged(targetInfo) {
      __privateSet(this, _targetInfo, targetInfo);
      this._checkIfInitialized();
    }
    _initialize() {
      this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
    }
    _isTargetExposed() {
      return this.type() !== Target_js_1$2.TargetType.TAB && !this._subtype();
    }
    _checkIfInitialized() {
      if (!this._initializedDeferred.resolved()) {
        this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
      }
    }
  }
  _browserContext = new WeakMap();
  _session = new WeakMap();
  _targetInfo = new WeakMap();
  _targetManager2 = new WeakMap();
  _sessionFactory = new WeakMap();
  Target$2.CdpTarget = CdpTarget;
  const _PageTarget = class _PageTarget extends CdpTarget {
    constructor(targetInfo, session, browserContext, targetManager, sessionFactory, ignoreHTTPSErrors, defaultViewport) {
      super(targetInfo, session, browserContext, targetManager, sessionFactory);
      __privateAdd(this, _defaultViewport, void 0);
      __publicField(this, "pagePromise");
      __privateAdd(this, _ignoreHTTPSErrors2, void 0);
      __privateSet(this, _ignoreHTTPSErrors2, ignoreHTTPSErrors);
      __privateSet(this, _defaultViewport, defaultViewport ?? void 0);
    }
    _initialize() {
      this._initializedDeferred.valueOrThrow().then(async (result) => {
        if (result === InitializationStatus.ABORTED) {
          return;
        }
        const opener = this.opener();
        if (!(opener instanceof _PageTarget)) {
          return;
        }
        if (!opener || !opener.pagePromise || this.type() !== "page") {
          return true;
        }
        const openerPage = await opener.pagePromise;
        if (!openerPage.listenerCount(
          "popup"
          /* PageEvent.Popup */
        )) {
          return true;
        }
        const popupPage = await this.page();
        openerPage.emit("popup", popupPage);
        return true;
      }).catch(util_js_1$1.debugError);
      this._checkIfInitialized();
    }
    async page() {
      if (!this.pagePromise) {
        const session = this._session();
        this.pagePromise = (session ? Promise.resolve(session) : this._sessionFactory()(
          /* isAutoAttachEmulated=*/
          false
        )).then((client) => {
          return Page_js_1.CdpPage._create(client, this, __privateGet(this, _ignoreHTTPSErrors2), __privateGet(this, _defaultViewport) ?? null);
        });
      }
      return await this.pagePromise ?? null;
    }
    _checkIfInitialized() {
      if (this._initializedDeferred.resolved()) {
        return;
      }
      if (this._getTargetInfo().url !== "") {
        this._initializedDeferred.resolve(InitializationStatus.SUCCESS);
      }
    }
  };
  _defaultViewport = new WeakMap();
  _ignoreHTTPSErrors2 = new WeakMap();
  let PageTarget = _PageTarget;
  Target$2.PageTarget = PageTarget;
  class DevToolsTarget extends PageTarget {
  }
  Target$2.DevToolsTarget = DevToolsTarget;
  class WorkerTarget extends CdpTarget {
    constructor() {
      super(...arguments);
      __privateAdd(this, _workerPromise, void 0);
    }
    async worker() {
      if (!__privateGet(this, _workerPromise)) {
        const session = this._session();
        __privateSet(this, _workerPromise, (session ? Promise.resolve(session) : this._sessionFactory()(
          /* isAutoAttachEmulated=*/
          false
        )).then((client) => {
          return new WebWorker_js_1.WebWorker(
            client,
            this._getTargetInfo().url,
            () => {
            },
            () => {
            }
            /* exceptionThrown */
          );
        }));
      }
      return await __privateGet(this, _workerPromise);
    }
  }
  _workerPromise = new WeakMap();
  Target$2.WorkerTarget = WorkerTarget;
  class OtherTarget extends CdpTarget {
  }
  Target$2.OtherTarget = OtherTarget;
  Object.defineProperty(ChromeTargetManager$1, "__esModule", { value: true });
  ChromeTargetManager$1.ChromeTargetManager = void 0;
  const CDPSession_js_1$1 = CDPSession$2;
  const EventEmitter_js_1 = EventEmitter$1;
  const util_js_1 = require$$2$1;
  const assert_js_1$1 = assert$1;
  const Deferred_js_1 = Deferred$1;
  const Target_js_1$1 = Target$2;
  function isPageTargetBecomingPrimary(target, newTargetInfo) {
    return Boolean(target._subtype()) && !newTargetInfo.subtype;
  }
  class ChromeTargetManager extends EventEmitter_js_1.EventEmitter {
    constructor(connection, targetFactory, targetFilterCallback, waitForInitiallyDiscoveredTargets = true) {
      super();
      __privateAdd(this, _setupAttachmentListeners);
      __privateAdd(this, _removeAttachmentListeners);
      __privateAdd(this, _finishInitializationIfReady2);
      __privateAdd(this, _connection3, void 0);
      /**
       * Keeps track of the following events: 'Target.targetCreated',
       * 'Target.targetDestroyed', 'Target.targetInfoChanged'.
       *
       * A target becomes discovered when 'Target.targetCreated' is received.
       * A target is removed from this map once 'Target.targetDestroyed' is
       * received.
       *
       * `targetFilterCallback` has no effect on this map.
       */
      __privateAdd(this, _discoveredTargetsByTargetId2, /* @__PURE__ */ new Map());
      /**
       * A target is added to this map once ChromeTargetManager has created
       * a Target and attached at least once to it.
       */
      __privateAdd(this, _attachedTargetsByTargetId, /* @__PURE__ */ new Map());
      /**
       * Tracks which sessions attach to which target.
       */
      __privateAdd(this, _attachedTargetsBySessionId, /* @__PURE__ */ new Map());
      /**
       * If a target was filtered out by `targetFilterCallback`, we still receive
       * events about it from CDP, but we don't forward them to the rest of Puppeteer.
       */
      __privateAdd(this, _ignoredTargets2, /* @__PURE__ */ new Set());
      __privateAdd(this, _targetFilterCallback2, void 0);
      __privateAdd(this, _targetFactory2, void 0);
      __privateAdd(this, _attachedToTargetListenersBySession2, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _detachedFromTargetListenersBySession, /* @__PURE__ */ new WeakMap());
      __privateAdd(this, _initializeDeferred2, Deferred_js_1.Deferred.create());
      __privateAdd(this, _targetsIdsForInit2, /* @__PURE__ */ new Set());
      __privateAdd(this, _waitForInitiallyDiscoveredTargets, true);
      __privateAdd(this, _discoveryFilter, [{}]);
      __privateAdd(this, _storeExistingTargetsForInit, () => {
        if (!__privateGet(this, _waitForInitiallyDiscoveredTargets)) {
          return;
        }
        for (const [targetId, targetInfo] of __privateGet(this, _discoveredTargetsByTargetId2).entries()) {
          const targetForFilter = new Target_js_1$1.CdpTarget(targetInfo, void 0, void 0, this, void 0);
          if ((!__privateGet(this, _targetFilterCallback2) || __privateGet(this, _targetFilterCallback2).call(this, targetForFilter)) && targetInfo.type !== "browser") {
            __privateGet(this, _targetsIdsForInit2).add(targetId);
          }
        }
      });
      __privateAdd(this, _onSessionDetached2, (session) => {
        __privateMethod(this, _removeAttachmentListeners, removeAttachmentListeners_fn).call(this, session);
      });
      __privateAdd(this, _onTargetCreated2, async (event) => {
        __privateGet(this, _discoveredTargetsByTargetId2).set(event.targetInfo.targetId, event.targetInfo);
        this.emit("targetDiscovered", event.targetInfo);
        if (event.targetInfo.type === "browser" && event.targetInfo.attached) {
          if (__privateGet(this, _attachedTargetsByTargetId).has(event.targetInfo.targetId)) {
            return;
          }
          const target = __privateGet(this, _targetFactory2).call(this, event.targetInfo, void 0);
          target._initialize();
          __privateGet(this, _attachedTargetsByTargetId).set(event.targetInfo.targetId, target);
        }
      });
      __privateAdd(this, _onTargetDestroyed2, (event) => {
        const targetInfo = __privateGet(this, _discoveredTargetsByTargetId2).get(event.targetId);
        __privateGet(this, _discoveredTargetsByTargetId2).delete(event.targetId);
        __privateMethod(this, _finishInitializationIfReady2, finishInitializationIfReady_fn2).call(this, event.targetId);
        if ((targetInfo == null ? void 0 : targetInfo.type) === "service_worker" && __privateGet(this, _attachedTargetsByTargetId).has(event.targetId)) {
          const target = __privateGet(this, _attachedTargetsByTargetId).get(event.targetId);
          if (target) {
            this.emit("targetGone", target);
            __privateGet(this, _attachedTargetsByTargetId).delete(event.targetId);
          }
        }
      });
      __privateAdd(this, _onTargetInfoChanged, (event) => {
        var _a2;
        __privateGet(this, _discoveredTargetsByTargetId2).set(event.targetInfo.targetId, event.targetInfo);
        if (__privateGet(this, _ignoredTargets2).has(event.targetInfo.targetId) || !__privateGet(this, _attachedTargetsByTargetId).has(event.targetInfo.targetId) || !event.targetInfo.attached) {
          return;
        }
        const target = __privateGet(this, _attachedTargetsByTargetId).get(event.targetInfo.targetId);
        if (!target) {
          return;
        }
        const previousURL = target.url();
        const wasInitialized = target._initializedDeferred.value() === Target_js_1$1.InitializationStatus.SUCCESS;
        if (isPageTargetBecomingPrimary(target, event.targetInfo)) {
          const session = target == null ? void 0 : target._session();
          (0, assert_js_1$1.assert)(session, "Target that is being activated is missing a CDPSession.");
          (_a2 = session.parentSession()) == null ? void 0 : _a2.emit(CDPSession_js_1$1.CDPSessionEvent.Swapped, session);
        }
        target._targetInfoChanged(event.targetInfo);
        if (wasInitialized && previousURL !== target.url()) {
          this.emit("targetChanged", {
            target,
            wasInitialized,
            previousURL
          });
        }
      });
      __privateAdd(this, _onAttachedToTarget3, async (parentSession, event) => {
        const targetInfo = event.targetInfo;
        const session = __privateGet(this, _connection3).session(event.sessionId);
        if (!session) {
          throw new Error(`Session ${event.sessionId} was not created.`);
        }
        const silentDetach = async () => {
          await session.send("Runtime.runIfWaitingForDebugger").catch(util_js_1.debugError);
          await parentSession.send("Target.detachFromTarget", {
            sessionId: session.id()
          }).catch(util_js_1.debugError);
        };
        if (!__privateGet(this, _connection3).isAutoAttached(targetInfo.targetId)) {
          return;
        }
        if (targetInfo.type === "service_worker") {
          __privateMethod(this, _finishInitializationIfReady2, finishInitializationIfReady_fn2).call(this, targetInfo.targetId);
          await silentDetach();
          if (__privateGet(this, _attachedTargetsByTargetId).has(targetInfo.targetId)) {
            return;
          }
          const target2 = __privateGet(this, _targetFactory2).call(this, targetInfo);
          target2._initialize();
          __privateGet(this, _attachedTargetsByTargetId).set(targetInfo.targetId, target2);
          this.emit("targetAvailable", target2);
          return;
        }
        const isExistingTarget = __privateGet(this, _attachedTargetsByTargetId).has(targetInfo.targetId);
        const target = isExistingTarget ? __privateGet(this, _attachedTargetsByTargetId).get(targetInfo.targetId) : __privateGet(this, _targetFactory2).call(this, targetInfo, session, parentSession instanceof CDPSession_js_1$1.CDPSession ? parentSession : void 0);
        if (__privateGet(this, _targetFilterCallback2) && !__privateGet(this, _targetFilterCallback2).call(this, target)) {
          __privateGet(this, _ignoredTargets2).add(targetInfo.targetId);
          __privateMethod(this, _finishInitializationIfReady2, finishInitializationIfReady_fn2).call(this, targetInfo.targetId);
          await silentDetach();
          return;
        }
        __privateMethod(this, _setupAttachmentListeners, setupAttachmentListeners_fn).call(this, session);
        if (isExistingTarget) {
          session._setTarget(target);
          __privateGet(this, _attachedTargetsBySessionId).set(session.id(), __privateGet(this, _attachedTargetsByTargetId).get(targetInfo.targetId));
        } else {
          target._initialize();
          __privateGet(this, _attachedTargetsByTargetId).set(targetInfo.targetId, target);
          __privateGet(this, _attachedTargetsBySessionId).set(session.id(), target);
        }
        if (parentSession instanceof CDPSession_js_1$1.CDPSession) {
          parentSession.emit(CDPSession_js_1$1.CDPSessionEvent.Ready, session);
        } else {
          parentSession.emit(CDPSession_js_1$1.CDPSessionEvent.Ready, session);
        }
        __privateGet(this, _targetsIdsForInit2).delete(target._targetId);
        if (!isExistingTarget) {
          this.emit("targetAvailable", target);
        }
        __privateMethod(this, _finishInitializationIfReady2, finishInitializationIfReady_fn2).call(this);
        await Promise.all([
          session.send("Target.setAutoAttach", {
            waitForDebuggerOnStart: true,
            flatten: true,
            autoAttach: true,
            filter: __privateGet(this, _discoveryFilter)
          }),
          session.send("Runtime.runIfWaitingForDebugger")
        ]).catch(util_js_1.debugError);
      });
      __privateAdd(this, _onDetachedFromTarget2, (_parentSession, event) => {
        const target = __privateGet(this, _attachedTargetsBySessionId).get(event.sessionId);
        __privateGet(this, _attachedTargetsBySessionId).delete(event.sessionId);
        if (!target) {
          return;
        }
        __privateGet(this, _attachedTargetsByTargetId).delete(target._targetId);
        this.emit("targetGone", target);
      });
      __privateSet(this, _connection3, connection);
      __privateSet(this, _targetFilterCallback2, targetFilterCallback);
      __privateSet(this, _targetFactory2, targetFactory);
      __privateSet(this, _waitForInitiallyDiscoveredTargets, waitForInitiallyDiscoveredTargets);
      __privateGet(this, _connection3).on("Target.targetCreated", __privateGet(this, _onTargetCreated2));
      __privateGet(this, _connection3).on("Target.targetDestroyed", __privateGet(this, _onTargetDestroyed2));
      __privateGet(this, _connection3).on("Target.targetInfoChanged", __privateGet(this, _onTargetInfoChanged));
      __privateGet(this, _connection3).on(CDPSession_js_1$1.CDPSessionEvent.SessionDetached, __privateGet(this, _onSessionDetached2));
      __privateMethod(this, _setupAttachmentListeners, setupAttachmentListeners_fn).call(this, __privateGet(this, _connection3));
    }
    async initialize() {
      await __privateGet(this, _connection3).send("Target.setDiscoverTargets", {
        discover: true,
        filter: __privateGet(this, _discoveryFilter)
      });
      __privateGet(this, _storeExistingTargetsForInit).call(this);
      await __privateGet(this, _connection3).send("Target.setAutoAttach", {
        waitForDebuggerOnStart: true,
        flatten: true,
        autoAttach: true,
        filter: [
          {
            type: "page",
            exclude: true
          },
          ...__privateGet(this, _discoveryFilter)
        ]
      });
      __privateMethod(this, _finishInitializationIfReady2, finishInitializationIfReady_fn2).call(this);
      await __privateGet(this, _initializeDeferred2).valueOrThrow();
    }
    dispose() {
      __privateGet(this, _connection3).off("Target.targetCreated", __privateGet(this, _onTargetCreated2));
      __privateGet(this, _connection3).off("Target.targetDestroyed", __privateGet(this, _onTargetDestroyed2));
      __privateGet(this, _connection3).off("Target.targetInfoChanged", __privateGet(this, _onTargetInfoChanged));
      __privateGet(this, _connection3).off(CDPSession_js_1$1.CDPSessionEvent.SessionDetached, __privateGet(this, _onSessionDetached2));
      __privateMethod(this, _removeAttachmentListeners, removeAttachmentListeners_fn).call(this, __privateGet(this, _connection3));
    }
    getAvailableTargets() {
      return __privateGet(this, _attachedTargetsByTargetId);
    }
  }
  _connection3 = new WeakMap();
  _discoveredTargetsByTargetId2 = new WeakMap();
  _attachedTargetsByTargetId = new WeakMap();
  _attachedTargetsBySessionId = new WeakMap();
  _ignoredTargets2 = new WeakMap();
  _targetFilterCallback2 = new WeakMap();
  _targetFactory2 = new WeakMap();
  _attachedToTargetListenersBySession2 = new WeakMap();
  _detachedFromTargetListenersBySession = new WeakMap();
  _initializeDeferred2 = new WeakMap();
  _targetsIdsForInit2 = new WeakMap();
  _waitForInitiallyDiscoveredTargets = new WeakMap();
  _discoveryFilter = new WeakMap();
  _storeExistingTargetsForInit = new WeakMap();
  _setupAttachmentListeners = new WeakSet();
  setupAttachmentListeners_fn = function(session) {
    const listener = (event) => {
      void __privateGet(this, _onAttachedToTarget3).call(this, session, event);
    };
    (0, assert_js_1$1.assert)(!__privateGet(this, _attachedToTargetListenersBySession2).has(session));
    __privateGet(this, _attachedToTargetListenersBySession2).set(session, listener);
    session.on("Target.attachedToTarget", listener);
    const detachedListener = (event) => {
      return __privateGet(this, _onDetachedFromTarget2).call(this, session, event);
    };
    (0, assert_js_1$1.assert)(!__privateGet(this, _detachedFromTargetListenersBySession).has(session));
    __privateGet(this, _detachedFromTargetListenersBySession).set(session, detachedListener);
    session.on("Target.detachedFromTarget", detachedListener);
  };
  _removeAttachmentListeners = new WeakSet();
  removeAttachmentListeners_fn = function(session) {
    const listener = __privateGet(this, _attachedToTargetListenersBySession2).get(session);
    if (listener) {
      session.off("Target.attachedToTarget", listener);
      __privateGet(this, _attachedToTargetListenersBySession2).delete(session);
    }
    if (__privateGet(this, _detachedFromTargetListenersBySession).has(session)) {
      session.off("Target.detachedFromTarget", __privateGet(this, _detachedFromTargetListenersBySession).get(session));
      __privateGet(this, _detachedFromTargetListenersBySession).delete(session);
    }
  };
  _onSessionDetached2 = new WeakMap();
  _onTargetCreated2 = new WeakMap();
  _onTargetDestroyed2 = new WeakMap();
  _onTargetInfoChanged = new WeakMap();
  _onAttachedToTarget3 = new WeakMap();
  _finishInitializationIfReady2 = new WeakSet();
  finishInitializationIfReady_fn2 = function(targetId) {
    targetId !== void 0 && __privateGet(this, _targetsIdsForInit2).delete(targetId);
    if (__privateGet(this, _targetsIdsForInit2).size === 0) {
      __privateGet(this, _initializeDeferred2).resolve();
    }
  };
  _onDetachedFromTarget2 = new WeakMap();
  ChromeTargetManager$1.ChromeTargetManager = ChromeTargetManager;
  Object.defineProperty(Browser$2, "__esModule", { value: true });
  Browser$2.CdpBrowserContext = CdpBrowser_1 = Browser$2.CdpBrowser = void 0;
  const Browser_js_1 = Browser$1;
  const BrowserContext_js_1 = BrowserContext$1;
  const CDPSession_js_1 = CDPSession$2;
  const assert_js_1 = assert$1;
  const ChromeTargetManager_js_1 = ChromeTargetManager$1;
  const FirefoxTargetManager_js_1 = FirefoxTargetManager$1;
  const Target_js_1 = Target$2;
  const _CdpBrowser = class _CdpBrowser extends Browser_js_1.Browser {
    constructor(product, connection, contextIds, ignoreHTTPSErrors, defaultViewport, process2, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true) {
      super();
      __privateAdd(this, _setIsPageTargetCallback);
      __privateAdd(this, _getVersion);
      __publicField(this, "protocol", "cdp");
      __privateAdd(this, _ignoreHTTPSErrors3, void 0);
      __privateAdd(this, _defaultViewport2, void 0);
      __privateAdd(this, _process, void 0);
      __privateAdd(this, _connection4, void 0);
      __privateAdd(this, _closeCallback, void 0);
      __privateAdd(this, _targetFilterCallback3, void 0);
      __privateAdd(this, _isPageTargetCallback, void 0);
      __privateAdd(this, _defaultContext, void 0);
      __privateAdd(this, _contexts, /* @__PURE__ */ new Map());
      __privateAdd(this, _targetManager3, void 0);
      __privateAdd(this, _emitDisconnected, () => {
        this.emit("disconnected", void 0);
      });
      __privateAdd(this, _createTarget, (targetInfo, session) => {
        var _a2;
        const { browserContextId } = targetInfo;
        const context = browserContextId && __privateGet(this, _contexts).has(browserContextId) ? __privateGet(this, _contexts).get(browserContextId) : __privateGet(this, _defaultContext);
        if (!context) {
          throw new Error("Missing browser context");
        }
        const createSession = (isAutoAttachEmulated) => {
          return __privateGet(this, _connection4)._createSession(targetInfo, isAutoAttachEmulated);
        };
        const otherTarget = new Target_js_1.OtherTarget(targetInfo, session, context, __privateGet(this, _targetManager3), createSession);
        if ((_a2 = targetInfo.url) == null ? void 0 : _a2.startsWith("devtools://")) {
          return new Target_js_1.DevToolsTarget(targetInfo, session, context, __privateGet(this, _targetManager3), createSession, __privateGet(this, _ignoreHTTPSErrors3), __privateGet(this, _defaultViewport2) ?? null);
        }
        if (__privateGet(this, _isPageTargetCallback).call(this, otherTarget)) {
          return new Target_js_1.PageTarget(targetInfo, session, context, __privateGet(this, _targetManager3), createSession, __privateGet(this, _ignoreHTTPSErrors3), __privateGet(this, _defaultViewport2) ?? null);
        }
        if (targetInfo.type === "service_worker" || targetInfo.type === "shared_worker") {
          return new Target_js_1.WorkerTarget(targetInfo, session, context, __privateGet(this, _targetManager3), createSession);
        }
        return otherTarget;
      });
      __privateAdd(this, _onAttachedToTarget4, async (target) => {
        if (target._isTargetExposed() && await target._initializedDeferred.valueOrThrow() === Target_js_1.InitializationStatus.SUCCESS) {
          this.emit("targetcreated", target);
          target.browserContext().emit("targetcreated", target);
        }
      });
      __privateAdd(this, _onDetachedFromTarget3, async (target) => {
        target._initializedDeferred.resolve(Target_js_1.InitializationStatus.ABORTED);
        target._isClosedDeferred.resolve();
        if (target._isTargetExposed() && await target._initializedDeferred.valueOrThrow() === Target_js_1.InitializationStatus.SUCCESS) {
          this.emit("targetdestroyed", target);
          target.browserContext().emit("targetdestroyed", target);
        }
      });
      __privateAdd(this, _onTargetChanged, ({ target }) => {
        this.emit("targetchanged", target);
        target.browserContext().emit("targetchanged", target);
      });
      __privateAdd(this, _onTargetDiscovered, (targetInfo) => {
        this.emit("targetdiscovered", targetInfo);
      });
      product = product || "chrome";
      __privateSet(this, _ignoreHTTPSErrors3, ignoreHTTPSErrors);
      __privateSet(this, _defaultViewport2, defaultViewport);
      __privateSet(this, _process, process2);
      __privateSet(this, _connection4, connection);
      __privateSet(this, _closeCallback, closeCallback || function() {
      });
      __privateSet(this, _targetFilterCallback3, targetFilterCallback || (() => {
        return true;
      }));
      __privateMethod(this, _setIsPageTargetCallback, setIsPageTargetCallback_fn).call(this, isPageTargetCallback);
      if (product === "firefox") {
        __privateSet(this, _targetManager3, new FirefoxTargetManager_js_1.FirefoxTargetManager(connection, __privateGet(this, _createTarget), __privateGet(this, _targetFilterCallback3)));
      } else {
        __privateSet(this, _targetManager3, new ChromeTargetManager_js_1.ChromeTargetManager(connection, __privateGet(this, _createTarget), __privateGet(this, _targetFilterCallback3), waitForInitiallyDiscoveredTargets));
      }
      __privateSet(this, _defaultContext, new CdpBrowserContext(__privateGet(this, _connection4), this));
      for (const contextId of contextIds) {
        __privateGet(this, _contexts).set(contextId, new CdpBrowserContext(__privateGet(this, _connection4), this, contextId));
      }
    }
    static async _create(product, connection, contextIds, ignoreHTTPSErrors, defaultViewport, process2, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets = true) {
      const browser2 = new _CdpBrowser(product, connection, contextIds, ignoreHTTPSErrors, defaultViewport, process2, closeCallback, targetFilterCallback, isPageTargetCallback, waitForInitiallyDiscoveredTargets);
      await browser2._attach();
      return browser2;
    }
    async _attach() {
      __privateGet(this, _connection4).on(CDPSession_js_1.CDPSessionEvent.Disconnected, __privateGet(this, _emitDisconnected));
      __privateGet(this, _targetManager3).on("targetAvailable", __privateGet(this, _onAttachedToTarget4));
      __privateGet(this, _targetManager3).on("targetGone", __privateGet(this, _onDetachedFromTarget3));
      __privateGet(this, _targetManager3).on("targetChanged", __privateGet(this, _onTargetChanged));
      __privateGet(this, _targetManager3).on("targetDiscovered", __privateGet(this, _onTargetDiscovered));
      await __privateGet(this, _targetManager3).initialize();
    }
    _detach() {
      __privateGet(this, _connection4).off(CDPSession_js_1.CDPSessionEvent.Disconnected, __privateGet(this, _emitDisconnected));
      __privateGet(this, _targetManager3).off("targetAvailable", __privateGet(this, _onAttachedToTarget4));
      __privateGet(this, _targetManager3).off("targetGone", __privateGet(this, _onDetachedFromTarget3));
      __privateGet(this, _targetManager3).off("targetChanged", __privateGet(this, _onTargetChanged));
      __privateGet(this, _targetManager3).off("targetDiscovered", __privateGet(this, _onTargetDiscovered));
    }
    process() {
      return __privateGet(this, _process) ?? null;
    }
    _targetManager() {
      return __privateGet(this, _targetManager3);
    }
    _getIsPageTargetCallback() {
      return __privateGet(this, _isPageTargetCallback);
    }
    async createIncognitoBrowserContext(options = {}) {
      const { proxyServer, proxyBypassList } = options;
      const { browserContextId } = await __privateGet(this, _connection4).send("Target.createBrowserContext", {
        proxyServer,
        proxyBypassList: proxyBypassList && proxyBypassList.join(",")
      });
      const context = new CdpBrowserContext(__privateGet(this, _connection4), this, browserContextId);
      __privateGet(this, _contexts).set(browserContextId, context);
      return context;
    }
    browserContexts() {
      return [__privateGet(this, _defaultContext), ...Array.from(__privateGet(this, _contexts).values())];
    }
    defaultBrowserContext() {
      return __privateGet(this, _defaultContext);
    }
    async _disposeContext(contextId) {
      if (!contextId) {
        return;
      }
      await __privateGet(this, _connection4).send("Target.disposeBrowserContext", {
        browserContextId: contextId
      });
      __privateGet(this, _contexts).delete(contextId);
    }
    wsEndpoint() {
      return __privateGet(this, _connection4).url();
    }
    async newPage() {
      return await __privateGet(this, _defaultContext).newPage();
    }
    async _createPageInContext(contextId) {
      const { targetId } = await __privateGet(this, _connection4).send("Target.createTarget", {
        url: "about:blank",
        browserContextId: contextId || void 0
      });
      const target = await this.waitForTarget((t) => {
        return t._targetId === targetId;
      });
      if (!target) {
        throw new Error(`Missing target for page (id = ${targetId})`);
      }
      const initialized = await target._initializedDeferred.valueOrThrow() === Target_js_1.InitializationStatus.SUCCESS;
      if (!initialized) {
        throw new Error(`Failed to create target for page (id = ${targetId})`);
      }
      const page = await target.page();
      if (!page) {
        throw new Error(`Failed to create a page for context (id = ${contextId})`);
      }
      return page;
    }
    targets() {
      return Array.from(__privateGet(this, _targetManager3).getAvailableTargets().values()).filter((target) => {
        return target._isTargetExposed() && target._initializedDeferred.value() === Target_js_1.InitializationStatus.SUCCESS;
      });
    }
    target() {
      const browserTarget = this.targets().find((target) => {
        return target.type() === "browser";
      });
      if (!browserTarget) {
        throw new Error("Browser target is not found");
      }
      return browserTarget;
    }
    async version() {
      const version = await __privateMethod(this, _getVersion, getVersion_fn).call(this);
      return version.product;
    }
    async userAgent() {
      const version = await __privateMethod(this, _getVersion, getVersion_fn).call(this);
      return version.userAgent;
    }
    async close() {
      await __privateGet(this, _closeCallback).call(null);
      this.disconnect();
    }
    disconnect() {
      __privateGet(this, _targetManager3).dispose();
      __privateGet(this, _connection4).dispose();
      this._detach();
    }
    get connected() {
      return !__privateGet(this, _connection4)._closed;
    }
  };
  _ignoreHTTPSErrors3 = new WeakMap();
  _defaultViewport2 = new WeakMap();
  _process = new WeakMap();
  _connection4 = new WeakMap();
  _closeCallback = new WeakMap();
  _targetFilterCallback3 = new WeakMap();
  _isPageTargetCallback = new WeakMap();
  _defaultContext = new WeakMap();
  _contexts = new WeakMap();
  _targetManager3 = new WeakMap();
  _emitDisconnected = new WeakMap();
  _setIsPageTargetCallback = new WeakSet();
  setIsPageTargetCallback_fn = function(isPageTargetCallback) {
    __privateSet(this, _isPageTargetCallback, isPageTargetCallback || ((target) => {
      return target.type() === "page" || target.type() === "background_page" || target.type() === "webview";
    }));
  };
  _createTarget = new WeakMap();
  _onAttachedToTarget4 = new WeakMap();
  _onDetachedFromTarget3 = new WeakMap();
  _onTargetChanged = new WeakMap();
  _onTargetDiscovered = new WeakMap();
  _getVersion = new WeakSet();
  getVersion_fn = function() {
    return __privateGet(this, _connection4).send("Browser.getVersion");
  };
  let CdpBrowser = _CdpBrowser;
  var CdpBrowser_1 = Browser$2.CdpBrowser = CdpBrowser;
  class CdpBrowserContext extends BrowserContext_js_1.BrowserContext {
    constructor(connection, browser2, contextId) {
      super();
      __privateAdd(this, _connection5, void 0);
      __privateAdd(this, _browser, void 0);
      __privateAdd(this, _id3, void 0);
      __privateSet(this, _connection5, connection);
      __privateSet(this, _browser, browser2);
      __privateSet(this, _id3, contextId);
    }
    get id() {
      return __privateGet(this, _id3);
    }
    targets() {
      return __privateGet(this, _browser).targets().filter((target) => {
        return target.browserContext() === this;
      });
    }
    waitForTarget(predicate, options = {}) {
      return __privateGet(this, _browser).waitForTarget((target) => {
        return target.browserContext() === this && predicate(target);
      }, options);
    }
    async pages() {
      const pages = await Promise.all(this.targets().filter((target) => {
        var _a2;
        return target.type() === "page" || target.type() === "other" && ((_a2 = __privateGet(this, _browser)._getIsPageTargetCallback()) == null ? void 0 : _a2(target));
      }).map((target) => {
        return target.page();
      }));
      return pages.filter((page) => {
        return !!page;
      });
    }
    isIncognito() {
      return !!__privateGet(this, _id3);
    }
    async overridePermissions(origin, permissions) {
      const protocolPermissions = permissions.map((permission) => {
        const protocolPermission = Browser_js_1.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(permission);
        if (!protocolPermission) {
          throw new Error("Unknown permission: " + permission);
        }
        return protocolPermission;
      });
      await __privateGet(this, _connection5).send("Browser.grantPermissions", {
        origin,
        browserContextId: __privateGet(this, _id3) || void 0,
        permissions: protocolPermissions
      });
    }
    async clearPermissionOverrides() {
      await __privateGet(this, _connection5).send("Browser.resetPermissions", {
        browserContextId: __privateGet(this, _id3) || void 0
      });
    }
    newPage() {
      return __privateGet(this, _browser)._createPageInContext(__privateGet(this, _id3));
    }
    browser() {
      return __privateGet(this, _browser);
    }
    async close() {
      (0, assert_js_1.assert)(__privateGet(this, _id3), "Non-incognito profiles cannot be closed!");
      await __privateGet(this, _browser)._disposeContext(__privateGet(this, _id3));
    }
  }
  _connection5 = new WeakMap();
  _browser = new WeakMap();
  _id3 = new WeakMap();
  Browser$2.CdpBrowserContext = CdpBrowserContext;
  var ConnectionTransport = {};
  Object.defineProperty(ConnectionTransport, "__esModule", { value: true });
  const DEFAULT_VIEWPORT = Object.freeze({ width: 800, height: 600 });
  class BrowserInBrowser extends CdpBrowser_1 {
    constructor({
      product,
      connection,
      contextIds,
      ignoreHTTPSErrors = false,
      defaultViewport = DEFAULT_VIEWPORT,
      closeCallback,
      targetFilterCallback,
      isPageTargetCallback,
      waitForInitiallyDiscoveredTargets = true
    }) {
      super(
        product,
        connection,
        contextIds,
        ignoreHTTPSErrors,
        defaultViewport,
        void 0,
        // process
        closeCallback,
        targetFilterCallback,
        isPageTargetCallback,
        waitForInitiallyDiscoveredTargets
      );
    }
    async attach() {
      super._attach();
    }
    async _createPageInContext(contextId) {
      const page = await super._createPageInContext(contextId);
      page.pdf = async function(options = {}) {
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
          tagged: generateTaggedPDF
        } = this._getPDFOptions(options);
        const client = page._client;
        const printCommandPromise = client.send("Page.printToPDF", {
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
          generateTaggedPDF
        });
        const { data } = await printCommandPromise;
        return atob(data);
      };
      return page;
    }
  }
  async function puppeteerConnect({
    transport,
    ignoreHTTPSErrors = false,
    defaultViewport = null,
    closeCallback,
    targetFilterCallback,
    isPageTargetCallback,
    waitForInitiallyDiscoveredTargets = true,
    slowMo = 0,
    protocolTimeout
  }) {
    const connection = new Connection_2("", transport, slowMo, protocolTimeout);
    const version = await connection.send("Browser.getVersion");
    const product = version.product.toLowerCase().includes("firefox") ? "firefox" : "chrome";
    const { browserContextIds } = await connection.send(
      "Target.getBrowserContexts"
    );
    const browser2 = new BrowserInBrowser({
      product: product || "chrome",
      connection,
      contextIds: browserContextIds,
      ignoreHTTPSErrors,
      defaultViewport,
      closeCallback,
      targetFilterCallback,
      isPageTargetCallback,
      waitForInitiallyDiscoveredTargets
    });
    await browser2.attach();
    return browser2;
  }
  class ExtensionDebuggerTransport {
    constructor(target) {
      this.delay = 0.04 * 1e3;
      this.target = target;
      this._sessionId = target.id;
      this.debugee = {
        tabId: target.tabId
      };
      chrome.debugger.onEvent.addListener((source, method, params) => {
        const event = {
          method,
          params,
          sessionId: this._sessionId
        };
        source.tabId === this.target.tabId ? this._emit(event) : null;
      });
      chrome.debugger.onDetach.addListener((source) => {
        source.tabId === this.target.tabId ? this._closeTarget() : null;
      });
    }
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
    static create(tabId, functionSerializer) {
      if (chrome.debugger) {
        const debugee = {
          tabId
        };
        return new Promise((resolve, reject) => {
          chrome.debugger.attach(debugee, "1.3", async () => {
            const error = chrome.runtime.lastError;
            if (!error) {
              const target = await this._getTargetInfo(debugee);
              const transport = new ExtensionDebuggerTransport(target);
              transport._initialize(functionSerializer);
              resolve(transport);
            } else {
              reject(error);
            }
          });
        });
      } else {
        throw new Error("no debugger permission");
      }
    }
    /** @internal */
    send(message) {
      const command = JSON.parse(message);
      const targetCommands = [
        "Target.getBrowserContexts",
        "Target.setDiscoverTargets",
        "Target.attachToTarget",
        "Target.activateTarget",
        "Target.closeTarget"
      ];
      if (targetCommands.includes(command.method)) {
        this._handleTargetCommand(command);
      } else {
        chrome.debugger.sendCommand(
          this.debugee,
          command.method,
          command.params,
          (result) => this._handleCommandResponse(command, result)
        );
      }
    }
    /** @internal */
    close() {
      chrome.debugger.detach(this.debugee, () => this._closeTarget());
    }
    static _getTargetInfo(debugee) {
      return new Promise((resolve, reject) => {
        chrome.debugger.getTargets((targets) => {
          const target = targets.filter((target2) => target2.attached && target2.tabId === debugee.tabId).map((target2) => {
            return {
              ...target2,
              targetId: target2.id,
              canAccessOpener: false
            };
          });
          target[0] ? resolve(target[0]) : reject(new Error("target not found"));
        });
      });
    }
    _initialize(functionSerializer) {
      if (functionSerializer) {
        Function = functionSerializer;
      } else {
        try {
          new Function();
        } catch (e) {
          Function = function() {
            return () => {
            };
          };
        }
      }
    }
    _handleCommandResponse(command, result) {
      const error = chrome.runtime.lastError;
      const response = {
        ...command,
        error,
        result
      };
      this._delaySend(response);
    }
    _handleTargetCommand(command) {
      const response = {
        ...command,
        error: void 0,
        result: {}
      };
      switch (command.method) {
        case "Target.getBrowserContexts":
          response.result = {
            browserContextIds: []
          };
          break;
        case "Target.setDiscoverTargets":
          response.result = null;
          this._emitTargetCreated();
          break;
        case "Target.attachToTarget":
          response.result = {
            sessionId: this._sessionId
          };
          this._emitTargetAttached();
          break;
        case "Target.activateTarget":
          response.result = null;
          break;
        case "Target.closeTarget":
          response.result = {
            success: true
          };
          setTimeout(() => this.close(), this.delay);
          break;
      }
      this._delaySend(response);
    }
    _emitTargetCreated() {
      const event = {
        method: "Target.targetCreated",
        params: {
          targetInfo: this.target
        }
      };
      this._emit(event);
    }
    _emitTargetAttached() {
      const event = {
        method: "Target.attachedToTarget",
        params: {
          targetInfo: this.target,
          sessionId: this._sessionId,
          waitingForDebugger: false
        }
      };
      this._emit(event);
    }
    _emitTargetDetached() {
      const event = {
        method: "Target.detachedFromTarget",
        params: {
          targetId: this.target.id,
          sessionId: this._sessionId
        }
      };
      this._emit(event);
    }
    _closeTarget() {
      var _a2;
      this._emitTargetDetached();
      (_a2 = this.onclose) == null ? void 0 : _a2.call(null);
    }
    _emit(event) {
      var _a2;
      (_a2 = this == null ? void 0 : this.onmessage) == null ? void 0 : _a2.call(null, JSON.stringify(event));
    }
    _delaySend(response) {
      setTimeout(() => {
        var _a2;
        (_a2 = this == null ? void 0 : this.onmessage) == null ? void 0 : _a2.call(null, JSON.stringify(response));
      }, this.delay);
    }
  }
  exports2.ConnectionTransport = ConnectionTransport.ConnectionTransport;
  exports2.ExtensionDebuggerTransport = ExtensionDebuggerTransport;
  exports2.puppeteerConnect = puppeteerConnect;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
//# sourceMappingURL=connectToCdbBrowser.js.map
