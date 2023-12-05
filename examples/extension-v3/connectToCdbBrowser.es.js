var c_ = Object.defineProperty;
var u_ = (l, i, t) => i in l ? c_(l, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : l[i] = t;
var Oe = (l, i, t) => (u_(l, typeof i != "symbol" ? i + "" : i, t), t), tf = (l, i, t) => {
  if (!i.has(l))
    throw TypeError("Cannot " + t);
}, Jt = (l, i) => {
  if (Object(i) !== i)
    throw TypeError('Cannot use the "in" operator on this value');
  return l.has(i);
}, n = (l, i, t) => (tf(l, i, "read from private field"), t ? t.call(l) : i.get(l)), g = (l, i, t) => {
  if (i.has(l))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(l) : i.set(l, t);
}, O = (l, i, t, r) => (tf(l, i, "write to private field"), r ? r.call(l, t) : i.set(l, t), t);
var rf = (l, i, t, r) => ({
  set _(s) {
    O(l, i, s, t);
  },
  get _() {
    return n(l, i, r);
  }
}), L = (l, i, t) => (tf(l, i, "access private method"), t);
var re = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function l_(l) {
  if (l.__esModule)
    return l;
  var i = l.default;
  if (typeof i == "function") {
    var t = function r() {
      return this instanceof r ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    t.prototype = i.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(l).forEach(function(r) {
    var s = Object.getOwnPropertyDescriptor(l, r);
    Object.defineProperty(t, r, s.get ? s : {
      enumerable: !0,
      get: function() {
        return l[r];
      }
    });
  }), t;
}
var rs = {}, Ta = {}, Xi = {};
(function(l) {
  var i = (e, v) => () => (v || e((v = { exports: {} }).exports, v), v.exports), t = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isFunction = void 0;
    function v(w) {
      return typeof w == "function";
    }
    e.isFunction = v;
  }), r = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createErrorClass = void 0;
    function v(w) {
      var b = function(f) {
        Error.call(f), f.stack = new Error().stack;
      }, p = w(b);
      return p.prototype = Object.create(Error.prototype), p.prototype.constructor = p, p;
    }
    e.createErrorClass = v;
  }), s = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.UnsubscriptionError = void 0;
    var v = r();
    e.UnsubscriptionError = v.createErrorClass(function(w) {
      return function(b) {
        w(this), this.message = b ? b.length + ` errors occurred during unsubscription:
` + b.map(function(p, f) {
          return f + 1 + ") " + p.toString();
        }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = b;
      };
    });
  }), m = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.arrRemove = void 0;
    function v(w, b) {
      if (w) {
        var p = w.indexOf(b);
        0 <= p && w.splice(p, 1);
      }
    }
    e.arrRemove = v;
  }), _ = i((e) => {
    var v = e && e.__values || function(d) {
      var y = typeof Symbol == "function" && Symbol.iterator, h = y && d[y], S = 0;
      if (h)
        return h.call(d);
      if (d && typeof d.length == "number")
        return { next: function() {
          return d && S >= d.length && (d = void 0), { value: d && d[S++], done: !d };
        } };
      throw new TypeError(y ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }, w = e && e.__read || function(d, y) {
      var h = typeof Symbol == "function" && d[Symbol.iterator];
      if (!h)
        return d;
      var S = h.call(d), E, M = [], T;
      try {
        for (; (y === void 0 || y-- > 0) && !(E = S.next()).done; )
          M.push(E.value);
      } catch (U) {
        T = { error: U };
      } finally {
        try {
          E && !E.done && (h = S.return) && h.call(S);
        } finally {
          if (T)
            throw T.error;
        }
      }
      return M;
    }, b = e && e.__spreadArray || function(d, y) {
      for (var h = 0, S = y.length, E = d.length; h < S; h++, E++)
        d[E] = y[h];
      return d;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isSubscription = e.EMPTY_SUBSCRIPTION = e.Subscription = void 0;
    var p = t(), f = s(), o = m(), a = function() {
      function d(y) {
        this.initialTeardown = y, this.closed = !1, this._parentage = null, this._finalizers = null;
      }
      return d.prototype.unsubscribe = function() {
        var y, h, S, E, M;
        if (!this.closed) {
          this.closed = !0;
          var T = this._parentage;
          if (T)
            if (this._parentage = null, Array.isArray(T))
              try {
                for (var U = v(T), G = U.next(); !G.done; G = U.next()) {
                  var J = G.value;
                  J.remove(this);
                }
              } catch (de) {
                y = { error: de };
              } finally {
                try {
                  G && !G.done && (h = U.return) && h.call(U);
                } finally {
                  if (y)
                    throw y.error;
                }
              }
            else
              T.remove(this);
          var K = this.initialTeardown;
          if (p.isFunction(K))
            try {
              K();
            } catch (de) {
              M = de instanceof f.UnsubscriptionError ? de.errors : [de];
            }
          var te = this._finalizers;
          if (te) {
            this._finalizers = null;
            try {
              for (var ae = v(te), ve = ae.next(); !ve.done; ve = ae.next()) {
                var oe = ve.value;
                try {
                  c(oe);
                } catch (de) {
                  M = M ?? [], de instanceof f.UnsubscriptionError ? M = b(b([], w(M)), w(de.errors)) : M.push(de);
                }
              }
            } catch (de) {
              S = { error: de };
            } finally {
              try {
                ve && !ve.done && (E = ae.return) && E.call(ae);
              } finally {
                if (S)
                  throw S.error;
              }
            }
          }
          if (M)
            throw new f.UnsubscriptionError(M);
        }
      }, d.prototype.add = function(y) {
        var h;
        if (y && y !== this)
          if (this.closed)
            c(y);
          else {
            if (y instanceof d) {
              if (y.closed || y._hasParent(this))
                return;
              y._addParent(this);
            }
            (this._finalizers = (h = this._finalizers) !== null && h !== void 0 ? h : []).push(y);
          }
      }, d.prototype._hasParent = function(y) {
        var h = this._parentage;
        return h === y || Array.isArray(h) && h.includes(y);
      }, d.prototype._addParent = function(y) {
        var h = this._parentage;
        this._parentage = Array.isArray(h) ? (h.push(y), h) : h ? [h, y] : y;
      }, d.prototype._removeParent = function(y) {
        var h = this._parentage;
        h === y ? this._parentage = null : Array.isArray(h) && o.arrRemove(h, y);
      }, d.prototype.remove = function(y) {
        var h = this._finalizers;
        h && o.arrRemove(h, y), y instanceof d && y._removeParent(this);
      }, d.EMPTY = function() {
        var y = new d();
        return y.closed = !0, y;
      }(), d;
    }();
    e.Subscription = a, e.EMPTY_SUBSCRIPTION = a.EMPTY;
    function u(d) {
      return d instanceof a || d && "closed" in d && p.isFunction(d.remove) && p.isFunction(d.add) && p.isFunction(d.unsubscribe);
    }
    e.isSubscription = u;
    function c(d) {
      p.isFunction(d) ? d() : d.unsubscribe();
    }
  }), k = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.config = void 0, e.config = { onUnhandledError: null, onStoppedNotification: null, Promise: void 0, useDeprecatedSynchronousErrorHandling: !1, useDeprecatedNextContext: !1 };
  }), I = i((e) => {
    var v = e && e.__read || function(b, p) {
      var f = typeof Symbol == "function" && b[Symbol.iterator];
      if (!f)
        return b;
      var o = f.call(b), a, u = [], c;
      try {
        for (; (p === void 0 || p-- > 0) && !(a = o.next()).done; )
          u.push(a.value);
      } catch (d) {
        c = { error: d };
      } finally {
        try {
          a && !a.done && (f = o.return) && f.call(o);
        } finally {
          if (c)
            throw c.error;
        }
      }
      return u;
    }, w = e && e.__spreadArray || function(b, p) {
      for (var f = 0, o = p.length, a = b.length; f < o; f++, a++)
        b[a] = p[f];
      return b;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.timeoutProvider = void 0, e.timeoutProvider = { setTimeout: function(b, p) {
      for (var f = [], o = 2; o < arguments.length; o++)
        f[o - 2] = arguments[o];
      var a = e.timeoutProvider.delegate;
      return a != null && a.setTimeout ? a.setTimeout.apply(a, w([b, p], v(f))) : setTimeout.apply(void 0, w([b, p], v(f)));
    }, clearTimeout: function(b) {
      var p = e.timeoutProvider.delegate;
      return ((p == null ? void 0 : p.clearTimeout) || clearTimeout)(b);
    }, delegate: void 0 };
  }), x = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.reportUnhandledError = void 0;
    var v = k(), w = I();
    function b(p) {
      w.timeoutProvider.setTimeout(function() {
        var f = v.config.onUnhandledError;
        if (f)
          f(p);
        else
          throw p;
      });
    }
    e.reportUnhandledError = b;
  }), F = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.noop = void 0;
    function v() {
    }
    e.noop = v;
  }), R = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createNotification = e.nextNotification = e.errorNotification = e.COMPLETE_NOTIFICATION = void 0, e.COMPLETE_NOTIFICATION = function() {
      return b("C", void 0, void 0);
    }();
    function v(p) {
      return b("E", void 0, p);
    }
    e.errorNotification = v;
    function w(p) {
      return b("N", p, void 0);
    }
    e.nextNotification = w;
    function b(p, f, o) {
      return { kind: p, value: f, error: o };
    }
    e.createNotification = b;
  }), N = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.captureError = e.errorContext = void 0;
    var v = k(), w = null;
    function b(f) {
      if (v.config.useDeprecatedSynchronousErrorHandling) {
        var o = !w;
        if (o && (w = { errorThrown: !1, error: null }), f(), o) {
          var a = w, u = a.errorThrown, c = a.error;
          if (w = null, u)
            throw c;
        }
      } else
        f();
    }
    e.errorContext = b;
    function p(f) {
      v.config.useDeprecatedSynchronousErrorHandling && w && (w.errorThrown = !0, w.error = f);
    }
    e.captureError = p;
  }), Q = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var G = function(J, K) {
        return G = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(te, ae) {
          te.__proto__ = ae;
        } || function(te, ae) {
          for (var ve in ae)
            Object.prototype.hasOwnProperty.call(ae, ve) && (te[ve] = ae[ve]);
        }, G(J, K);
      };
      return function(J, K) {
        if (typeof K != "function" && K !== null)
          throw new TypeError("Class extends value " + String(K) + " is not a constructor or null");
        G(J, K);
        function te() {
          this.constructor = J;
        }
        J.prototype = K === null ? Object.create(K) : (te.prototype = K.prototype, new te());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.EMPTY_OBSERVER = e.SafeSubscriber = e.Subscriber = void 0;
    var w = t(), b = _(), p = k(), f = x(), o = F(), a = R(), u = I(), c = N(), d = function(G) {
      v(J, G);
      function J(K) {
        var te = G.call(this) || this;
        return te.isStopped = !1, K ? (te.destination = K, b.isSubscription(K) && K.add(te)) : te.destination = e.EMPTY_OBSERVER, te;
      }
      return J.create = function(K, te, ae) {
        return new E(K, te, ae);
      }, J.prototype.next = function(K) {
        this.isStopped ? U(a.nextNotification(K), this) : this._next(K);
      }, J.prototype.error = function(K) {
        this.isStopped ? U(a.errorNotification(K), this) : (this.isStopped = !0, this._error(K));
      }, J.prototype.complete = function() {
        this.isStopped ? U(a.COMPLETE_NOTIFICATION, this) : (this.isStopped = !0, this._complete());
      }, J.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0, G.prototype.unsubscribe.call(this), this.destination = null);
      }, J.prototype._next = function(K) {
        this.destination.next(K);
      }, J.prototype._error = function(K) {
        try {
          this.destination.error(K);
        } finally {
          this.unsubscribe();
        }
      }, J.prototype._complete = function() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      }, J;
    }(b.Subscription);
    e.Subscriber = d;
    var y = Function.prototype.bind;
    function h(G, J) {
      return y.call(G, J);
    }
    var S = function() {
      function G(J) {
        this.partialObserver = J;
      }
      return G.prototype.next = function(J) {
        var K = this.partialObserver;
        if (K.next)
          try {
            K.next(J);
          } catch (te) {
            M(te);
          }
      }, G.prototype.error = function(J) {
        var K = this.partialObserver;
        if (K.error)
          try {
            K.error(J);
          } catch (te) {
            M(te);
          }
        else
          M(J);
      }, G.prototype.complete = function() {
        var J = this.partialObserver;
        if (J.complete)
          try {
            J.complete();
          } catch (K) {
            M(K);
          }
      }, G;
    }(), E = function(G) {
      v(J, G);
      function J(K, te, ae) {
        var ve = G.call(this) || this, oe;
        if (w.isFunction(K) || !K)
          oe = { next: K ?? void 0, error: te ?? void 0, complete: ae ?? void 0 };
        else {
          var de;
          ve && p.config.useDeprecatedNextContext ? (de = Object.create(K), de.unsubscribe = function() {
            return ve.unsubscribe();
          }, oe = { next: K.next && h(K.next, de), error: K.error && h(K.error, de), complete: K.complete && h(K.complete, de) }) : oe = K;
        }
        return ve.destination = new S(oe), ve;
      }
      return J;
    }(d);
    e.SafeSubscriber = E;
    function M(G) {
      p.config.useDeprecatedSynchronousErrorHandling ? c.captureError(G) : f.reportUnhandledError(G);
    }
    function T(G) {
      throw G;
    }
    function U(G, J) {
      var K = p.config.onStoppedNotification;
      K && u.timeoutProvider.setTimeout(function() {
        return K(G, J);
      });
    }
    e.EMPTY_OBSERVER = { closed: !0, next: o.noop, error: T, complete: o.noop };
  }), q = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observable = void 0, e.observable = function() {
      return typeof Symbol == "function" && Symbol.observable || "@@observable";
    }();
  }), B = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.identity = void 0;
    function v(w) {
      return w;
    }
    e.identity = v;
  }), D = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.pipeFromArray = e.pipe = void 0;
    var v = B();
    function w() {
      for (var p = [], f = 0; f < arguments.length; f++)
        p[f] = arguments[f];
      return b(p);
    }
    e.pipe = w;
    function b(p) {
      return p.length === 0 ? v.identity : p.length === 1 ? p[0] : function(f) {
        return p.reduce(function(o, a) {
          return a(o);
        }, f);
      };
    }
    e.pipeFromArray = b;
  }), $ = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Observable = void 0;
    var v = Q(), w = _(), b = q(), p = D(), f = k(), o = t(), a = N(), u = function() {
      function h(S) {
        S && (this._subscribe = S);
      }
      return h.prototype.lift = function(S) {
        var E = new h();
        return E.source = this, E.operator = S, E;
      }, h.prototype.subscribe = function(S, E, M) {
        var T = this, U = y(S) ? S : new v.SafeSubscriber(S, E, M);
        return a.errorContext(function() {
          var G = T, J = G.operator, K = G.source;
          U.add(J ? J.call(U, K) : K ? T._subscribe(U) : T._trySubscribe(U));
        }), U;
      }, h.prototype._trySubscribe = function(S) {
        try {
          return this._subscribe(S);
        } catch (E) {
          S.error(E);
        }
      }, h.prototype.forEach = function(S, E) {
        var M = this;
        return E = c(E), new E(function(T, U) {
          var G = new v.SafeSubscriber({ next: function(J) {
            try {
              S(J);
            } catch (K) {
              U(K), G.unsubscribe();
            }
          }, error: U, complete: T });
          M.subscribe(G);
        });
      }, h.prototype._subscribe = function(S) {
        var E;
        return (E = this.source) === null || E === void 0 ? void 0 : E.subscribe(S);
      }, h.prototype[b.observable] = function() {
        return this;
      }, h.prototype.pipe = function() {
        for (var S = [], E = 0; E < arguments.length; E++)
          S[E] = arguments[E];
        return p.pipeFromArray(S)(this);
      }, h.prototype.toPromise = function(S) {
        var E = this;
        return S = c(S), new S(function(M, T) {
          var U;
          E.subscribe(function(G) {
            return U = G;
          }, function(G) {
            return T(G);
          }, function() {
            return M(U);
          });
        });
      }, h.create = function(S) {
        return new h(S);
      }, h;
    }();
    e.Observable = u;
    function c(h) {
      var S;
      return (S = h ?? f.config.Promise) !== null && S !== void 0 ? S : Promise;
    }
    function d(h) {
      return h && o.isFunction(h.next) && o.isFunction(h.error) && o.isFunction(h.complete);
    }
    function y(h) {
      return h && h instanceof v.Subscriber || d(h) && w.isSubscription(h);
    }
  }), A = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.operate = e.hasLift = void 0;
    var v = t();
    function w(p) {
      return v.isFunction(p == null ? void 0 : p.lift);
    }
    e.hasLift = w;
    function b(p) {
      return function(f) {
        if (w(f))
          return f.lift(function(o) {
            try {
              return p(o, this);
            } catch (a) {
              this.error(a);
            }
          });
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }
    e.operate = b;
  }), z = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var f = function(o, a) {
        return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, c) {
          u.__proto__ = c;
        } || function(u, c) {
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
        }, f(o, a);
      };
      return function(o, a) {
        if (typeof a != "function" && a !== null)
          throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
        f(o, a);
        function u() {
          this.constructor = o;
        }
        o.prototype = a === null ? Object.create(a) : (u.prototype = a.prototype, new u());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.OperatorSubscriber = e.createOperatorSubscriber = void 0;
    var w = Q();
    function b(f, o, a, u, c) {
      return new p(f, o, a, u, c);
    }
    e.createOperatorSubscriber = b;
    var p = function(f) {
      v(o, f);
      function o(a, u, c, d, y, h) {
        var S = f.call(this, a) || this;
        return S.onFinalize = y, S.shouldUnsubscribe = h, S._next = u ? function(E) {
          try {
            u(E);
          } catch (M) {
            a.error(M);
          }
        } : f.prototype._next, S._error = d ? function(E) {
          try {
            d(E);
          } catch (M) {
            a.error(M);
          } finally {
            this.unsubscribe();
          }
        } : f.prototype._error, S._complete = c ? function() {
          try {
            c();
          } catch (E) {
            a.error(E);
          } finally {
            this.unsubscribe();
          }
        } : f.prototype._complete, S;
      }
      return o.prototype.unsubscribe = function() {
        var a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var u = this.closed;
          f.prototype.unsubscribe.call(this), !u && ((a = this.onFinalize) === null || a === void 0 || a.call(this));
        }
      }, o;
    }(w.Subscriber);
    e.OperatorSubscriber = p;
  }), Ie = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.refCount = void 0;
    var v = A(), w = z();
    function b() {
      return v.operate(function(p, f) {
        var o = null;
        p._refCount++;
        var a = w.createOperatorSubscriber(f, void 0, void 0, void 0, function() {
          if (!p || p._refCount <= 0 || 0 < --p._refCount) {
            o = null;
            return;
          }
          var u = p._connection, c = o;
          o = null, u && (!c || u === c) && u.unsubscribe(), f.unsubscribe();
        });
        p.subscribe(a), a.closed || (o = p.connect());
      });
    }
    e.refCount = b;
  }), ke = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var u = function(c, d) {
        return u = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(y, h) {
          y.__proto__ = h;
        } || function(y, h) {
          for (var S in h)
            Object.prototype.hasOwnProperty.call(h, S) && (y[S] = h[S]);
        }, u(c, d);
      };
      return function(c, d) {
        if (typeof d != "function" && d !== null)
          throw new TypeError("Class extends value " + String(d) + " is not a constructor or null");
        u(c, d);
        function y() {
          this.constructor = c;
        }
        c.prototype = d === null ? Object.create(d) : (y.prototype = d.prototype, new y());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ConnectableObservable = void 0;
    var w = $(), b = _(), p = Ie(), f = z(), o = A(), a = function(u) {
      v(c, u);
      function c(d, y) {
        var h = u.call(this) || this;
        return h.source = d, h.subjectFactory = y, h._subject = null, h._refCount = 0, h._connection = null, o.hasLift(d) && (h.lift = d.lift), h;
      }
      return c.prototype._subscribe = function(d) {
        return this.getSubject().subscribe(d);
      }, c.prototype.getSubject = function() {
        var d = this._subject;
        return (!d || d.isStopped) && (this._subject = this.subjectFactory()), this._subject;
      }, c.prototype._teardown = function() {
        this._refCount = 0;
        var d = this._connection;
        this._subject = this._connection = null, d == null || d.unsubscribe();
      }, c.prototype.connect = function() {
        var d = this, y = this._connection;
        if (!y) {
          y = this._connection = new b.Subscription();
          var h = this.getSubject();
          y.add(this.source.subscribe(f.createOperatorSubscriber(h, void 0, function() {
            d._teardown(), h.complete();
          }, function(S) {
            d._teardown(), h.error(S);
          }, function() {
            return d._teardown();
          }))), y.closed && (this._connection = null, y = b.Subscription.EMPTY);
        }
        return y;
      }, c.prototype.refCount = function() {
        return p.refCount()(this);
      }, c;
    }(w.Observable);
    e.ConnectableObservable = a;
  }), $e = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.performanceTimestampProvider = void 0, e.performanceTimestampProvider = { now: function() {
      return (e.performanceTimestampProvider.delegate || performance).now();
    }, delegate: void 0 };
  }), Ne = i((e) => {
    var v = e && e.__read || function(p, f) {
      var o = typeof Symbol == "function" && p[Symbol.iterator];
      if (!o)
        return p;
      var a = o.call(p), u, c = [], d;
      try {
        for (; (f === void 0 || f-- > 0) && !(u = a.next()).done; )
          c.push(u.value);
      } catch (y) {
        d = { error: y };
      } finally {
        try {
          u && !u.done && (o = a.return) && o.call(a);
        } finally {
          if (d)
            throw d.error;
        }
      }
      return c;
    }, w = e && e.__spreadArray || function(p, f) {
      for (var o = 0, a = f.length, u = p.length; o < a; o++, u++)
        p[u] = f[o];
      return p;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrameProvider = void 0;
    var b = _();
    e.animationFrameProvider = { schedule: function(p) {
      var f = requestAnimationFrame, o = cancelAnimationFrame, a = e.animationFrameProvider.delegate;
      a && (f = a.requestAnimationFrame, o = a.cancelAnimationFrame);
      var u = f(function(c) {
        o = void 0, p(c);
      });
      return new b.Subscription(function() {
        return o == null ? void 0 : o(u);
      });
    }, requestAnimationFrame: function() {
      for (var p = [], f = 0; f < arguments.length; f++)
        p[f] = arguments[f];
      var o = e.animationFrameProvider.delegate;
      return ((o == null ? void 0 : o.requestAnimationFrame) || requestAnimationFrame).apply(void 0, w([], v(p)));
    }, cancelAnimationFrame: function() {
      for (var p = [], f = 0; f < arguments.length; f++)
        p[f] = arguments[f];
      var o = e.animationFrameProvider.delegate;
      return ((o == null ? void 0 : o.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, w([], v(p)));
    }, delegate: void 0 };
  }), Y = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrames = void 0;
    var v = $(), w = $e(), b = Ne();
    function p(a) {
      return a ? f(a) : o;
    }
    e.animationFrames = p;
    function f(a) {
      return new v.Observable(function(u) {
        var c = a || w.performanceTimestampProvider, d = c.now(), y = 0, h = function() {
          u.closed || (y = b.animationFrameProvider.requestAnimationFrame(function(S) {
            y = 0;
            var E = c.now();
            u.next({ timestamp: a ? E : S, elapsed: E - d }), h();
          }));
        };
        return h(), function() {
          y && b.animationFrameProvider.cancelAnimationFrame(y);
        };
      });
    }
    var o = f();
  }), le = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ObjectUnsubscribedError = void 0;
    var v = r();
    e.ObjectUnsubscribedError = v.createErrorClass(function(w) {
      return function() {
        w(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed";
      };
    });
  }), he = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var d = function(y, h) {
        return d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(S, E) {
          S.__proto__ = E;
        } || function(S, E) {
          for (var M in E)
            Object.prototype.hasOwnProperty.call(E, M) && (S[M] = E[M]);
        }, d(y, h);
      };
      return function(y, h) {
        if (typeof h != "function" && h !== null)
          throw new TypeError("Class extends value " + String(h) + " is not a constructor or null");
        d(y, h);
        function S() {
          this.constructor = y;
        }
        y.prototype = h === null ? Object.create(h) : (S.prototype = h.prototype, new S());
      };
    }(), w = e && e.__values || function(d) {
      var y = typeof Symbol == "function" && Symbol.iterator, h = y && d[y], S = 0;
      if (h)
        return h.call(d);
      if (d && typeof d.length == "number")
        return { next: function() {
          return d && S >= d.length && (d = void 0), { value: d && d[S++], done: !d };
        } };
      throw new TypeError(y ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AnonymousSubject = e.Subject = void 0;
    var b = $(), p = _(), f = le(), o = m(), a = N(), u = function(d) {
      v(y, d);
      function y() {
        var h = d.call(this) || this;
        return h.closed = !1, h.currentObservers = null, h.observers = [], h.isStopped = !1, h.hasError = !1, h.thrownError = null, h;
      }
      return y.prototype.lift = function(h) {
        var S = new c(this, this);
        return S.operator = h, S;
      }, y.prototype._throwIfClosed = function() {
        if (this.closed)
          throw new f.ObjectUnsubscribedError();
      }, y.prototype.next = function(h) {
        var S = this;
        a.errorContext(function() {
          var E, M;
          if (S._throwIfClosed(), !S.isStopped) {
            S.currentObservers || (S.currentObservers = Array.from(S.observers));
            try {
              for (var T = w(S.currentObservers), U = T.next(); !U.done; U = T.next()) {
                var G = U.value;
                G.next(h);
              }
            } catch (J) {
              E = { error: J };
            } finally {
              try {
                U && !U.done && (M = T.return) && M.call(T);
              } finally {
                if (E)
                  throw E.error;
              }
            }
          }
        });
      }, y.prototype.error = function(h) {
        var S = this;
        a.errorContext(function() {
          if (S._throwIfClosed(), !S.isStopped) {
            S.hasError = S.isStopped = !0, S.thrownError = h;
            for (var E = S.observers; E.length; )
              E.shift().error(h);
          }
        });
      }, y.prototype.complete = function() {
        var h = this;
        a.errorContext(function() {
          if (h._throwIfClosed(), !h.isStopped) {
            h.isStopped = !0;
            for (var S = h.observers; S.length; )
              S.shift().complete();
          }
        });
      }, y.prototype.unsubscribe = function() {
        this.isStopped = this.closed = !0, this.observers = this.currentObservers = null;
      }, Object.defineProperty(y.prototype, "observed", { get: function() {
        var h;
        return ((h = this.observers) === null || h === void 0 ? void 0 : h.length) > 0;
      }, enumerable: !1, configurable: !0 }), y.prototype._trySubscribe = function(h) {
        return this._throwIfClosed(), d.prototype._trySubscribe.call(this, h);
      }, y.prototype._subscribe = function(h) {
        return this._throwIfClosed(), this._checkFinalizedStatuses(h), this._innerSubscribe(h);
      }, y.prototype._innerSubscribe = function(h) {
        var S = this, E = this, M = E.hasError, T = E.isStopped, U = E.observers;
        return M || T ? p.EMPTY_SUBSCRIPTION : (this.currentObservers = null, U.push(h), new p.Subscription(function() {
          S.currentObservers = null, o.arrRemove(U, h);
        }));
      }, y.prototype._checkFinalizedStatuses = function(h) {
        var S = this, E = S.hasError, M = S.thrownError, T = S.isStopped;
        E ? h.error(M) : T && h.complete();
      }, y.prototype.asObservable = function() {
        var h = new b.Observable();
        return h.source = this, h;
      }, y.create = function(h, S) {
        return new c(h, S);
      }, y;
    }(b.Observable);
    e.Subject = u;
    var c = function(d) {
      v(y, d);
      function y(h, S) {
        var E = d.call(this) || this;
        return E.destination = h, E.source = S, E;
      }
      return y.prototype.next = function(h) {
        var S, E;
        (E = (S = this.destination) === null || S === void 0 ? void 0 : S.next) === null || E === void 0 || E.call(S, h);
      }, y.prototype.error = function(h) {
        var S, E;
        (E = (S = this.destination) === null || S === void 0 ? void 0 : S.error) === null || E === void 0 || E.call(S, h);
      }, y.prototype.complete = function() {
        var h, S;
        (S = (h = this.destination) === null || h === void 0 ? void 0 : h.complete) === null || S === void 0 || S.call(h);
      }, y.prototype._subscribe = function(h) {
        var S, E;
        return (E = (S = this.source) === null || S === void 0 ? void 0 : S.subscribe(h)) !== null && E !== void 0 ? E : p.EMPTY_SUBSCRIPTION;
      }, y;
    }(u);
    e.AnonymousSubject = c;
  }), ce = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.BehaviorSubject = void 0;
    var w = he(), b = function(p) {
      v(f, p);
      function f(o) {
        var a = p.call(this) || this;
        return a._value = o, a;
      }
      return Object.defineProperty(f.prototype, "value", { get: function() {
        return this.getValue();
      }, enumerable: !1, configurable: !0 }), f.prototype._subscribe = function(o) {
        var a = p.prototype._subscribe.call(this, o);
        return !a.closed && o.next(this._value), a;
      }, f.prototype.getValue = function() {
        var o = this, a = o.hasError, u = o.thrownError, c = o._value;
        if (a)
          throw u;
        return this._throwIfClosed(), c;
      }, f.prototype.next = function(o) {
        p.prototype.next.call(this, this._value = o);
      }, f;
    }(w.Subject);
    e.BehaviorSubject = b;
  }), Ce = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.dateTimestampProvider = void 0, e.dateTimestampProvider = { now: function() {
      return (e.dateTimestampProvider.delegate || Date).now();
    }, delegate: void 0 };
  }), Ee = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var f = function(o, a) {
        return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, c) {
          u.__proto__ = c;
        } || function(u, c) {
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
        }, f(o, a);
      };
      return function(o, a) {
        if (typeof a != "function" && a !== null)
          throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
        f(o, a);
        function u() {
          this.constructor = o;
        }
        o.prototype = a === null ? Object.create(a) : (u.prototype = a.prototype, new u());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ReplaySubject = void 0;
    var w = he(), b = Ce(), p = function(f) {
      v(o, f);
      function o(a, u, c) {
        a === void 0 && (a = 1 / 0), u === void 0 && (u = 1 / 0), c === void 0 && (c = b.dateTimestampProvider);
        var d = f.call(this) || this;
        return d._bufferSize = a, d._windowTime = u, d._timestampProvider = c, d._buffer = [], d._infiniteTimeWindow = !0, d._infiniteTimeWindow = u === 1 / 0, d._bufferSize = Math.max(1, a), d._windowTime = Math.max(1, u), d;
      }
      return o.prototype.next = function(a) {
        var u = this, c = u.isStopped, d = u._buffer, y = u._infiniteTimeWindow, h = u._timestampProvider, S = u._windowTime;
        c || (d.push(a), !y && d.push(h.now() + S)), this._trimBuffer(), f.prototype.next.call(this, a);
      }, o.prototype._subscribe = function(a) {
        this._throwIfClosed(), this._trimBuffer();
        for (var u = this._innerSubscribe(a), c = this, d = c._infiniteTimeWindow, y = c._buffer, h = y.slice(), S = 0; S < h.length && !a.closed; S += d ? 1 : 2)
          a.next(h[S]);
        return this._checkFinalizedStatuses(a), u;
      }, o.prototype._trimBuffer = function() {
        var a = this, u = a._bufferSize, c = a._timestampProvider, d = a._buffer, y = a._infiniteTimeWindow, h = (y ? 1 : 2) * u;
        if (u < 1 / 0 && h < d.length && d.splice(0, d.length - h), !y) {
          for (var S = c.now(), E = 0, M = 1; M < d.length && d[M] <= S; M += 2)
            E = M;
          E && d.splice(0, E + 1);
        }
      }, o;
    }(w.Subject);
    e.ReplaySubject = p;
  }), Fe = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AsyncSubject = void 0;
    var w = he(), b = function(p) {
      v(f, p);
      function f() {
        var o = p !== null && p.apply(this, arguments) || this;
        return o._value = null, o._hasValue = !1, o._isComplete = !1, o;
      }
      return f.prototype._checkFinalizedStatuses = function(o) {
        var a = this, u = a.hasError, c = a._hasValue, d = a._value, y = a.thrownError, h = a.isStopped, S = a._isComplete;
        u ? o.error(y) : (h || S) && (c && o.next(d), o.complete());
      }, f.prototype.next = function(o) {
        this.isStopped || (this._value = o, this._hasValue = !0);
      }, f.prototype.complete = function() {
        var o = this, a = o._hasValue, u = o._value, c = o._isComplete;
        c || (this._isComplete = !0, a && p.prototype.next.call(this, u), p.prototype.complete.call(this));
      }, f;
    }(w.Subject);
    e.AsyncSubject = b;
  }), He = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Action = void 0;
    var w = _(), b = function(p) {
      v(f, p);
      function f(o, a) {
        return p.call(this) || this;
      }
      return f.prototype.schedule = function(o, a) {
        return this;
      }, f;
    }(w.Subscription);
    e.Action = b;
  }), Pe = i((e) => {
    var v = e && e.__read || function(b, p) {
      var f = typeof Symbol == "function" && b[Symbol.iterator];
      if (!f)
        return b;
      var o = f.call(b), a, u = [], c;
      try {
        for (; (p === void 0 || p-- > 0) && !(a = o.next()).done; )
          u.push(a.value);
      } catch (d) {
        c = { error: d };
      } finally {
        try {
          a && !a.done && (f = o.return) && f.call(o);
        } finally {
          if (c)
            throw c.error;
        }
      }
      return u;
    }, w = e && e.__spreadArray || function(b, p) {
      for (var f = 0, o = p.length, a = b.length; f < o; f++, a++)
        b[a] = p[f];
      return b;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.intervalProvider = void 0, e.intervalProvider = { setInterval: function(b, p) {
      for (var f = [], o = 2; o < arguments.length; o++)
        f[o - 2] = arguments[o];
      var a = e.intervalProvider.delegate;
      return a != null && a.setInterval ? a.setInterval.apply(a, w([b, p], v(f))) : setInterval.apply(void 0, w([b, p], v(f)));
    }, clearInterval: function(b) {
      var p = e.intervalProvider.delegate;
      return ((p == null ? void 0 : p.clearInterval) || clearInterval)(b);
    }, delegate: void 0 };
  }), ye = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var o = function(a, u) {
        return o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(c, d) {
          c.__proto__ = d;
        } || function(c, d) {
          for (var y in d)
            Object.prototype.hasOwnProperty.call(d, y) && (c[y] = d[y]);
        }, o(a, u);
      };
      return function(a, u) {
        if (typeof u != "function" && u !== null)
          throw new TypeError("Class extends value " + String(u) + " is not a constructor or null");
        o(a, u);
        function c() {
          this.constructor = a;
        }
        a.prototype = u === null ? Object.create(u) : (c.prototype = u.prototype, new c());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AsyncAction = void 0;
    var w = He(), b = Pe(), p = m(), f = function(o) {
      v(a, o);
      function a(u, c) {
        var d = o.call(this, u, c) || this;
        return d.scheduler = u, d.work = c, d.pending = !1, d;
      }
      return a.prototype.schedule = function(u, c) {
        var d;
        if (c === void 0 && (c = 0), this.closed)
          return this;
        this.state = u;
        var y = this.id, h = this.scheduler;
        return y != null && (this.id = this.recycleAsyncId(h, y, c)), this.pending = !0, this.delay = c, this.id = (d = this.id) !== null && d !== void 0 ? d : this.requestAsyncId(h, this.id, c), this;
      }, a.prototype.requestAsyncId = function(u, c, d) {
        return d === void 0 && (d = 0), b.intervalProvider.setInterval(u.flush.bind(u, this), d);
      }, a.prototype.recycleAsyncId = function(u, c, d) {
        if (d === void 0 && (d = 0), d != null && this.delay === d && this.pending === !1)
          return c;
        c != null && b.intervalProvider.clearInterval(c);
      }, a.prototype.execute = function(u, c) {
        if (this.closed)
          return new Error("executing a cancelled action");
        this.pending = !1;
        var d = this._execute(u, c);
        if (d)
          return d;
        this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }, a.prototype._execute = function(u, c) {
        var d = !1, y;
        try {
          this.work(u);
        } catch (h) {
          d = !0, y = h || new Error("Scheduled action threw falsy error");
        }
        if (d)
          return this.unsubscribe(), y;
      }, a.prototype.unsubscribe = function() {
        if (!this.closed) {
          var u = this, c = u.id, d = u.scheduler, y = d.actions;
          this.work = this.state = this.scheduler = null, this.pending = !1, p.arrRemove(y, this), c != null && (this.id = this.recycleAsyncId(d, c, null)), this.delay = null, o.prototype.unsubscribe.call(this);
        }
      }, a;
    }(w.Action);
    e.AsyncAction = f;
  }), Ue = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TestTools = e.Immediate = void 0;
    var v = 1, w, b = {};
    function p(f) {
      return f in b ? (delete b[f], !0) : !1;
    }
    e.Immediate = { setImmediate: function(f) {
      var o = v++;
      return b[o] = !0, w || (w = Promise.resolve()), w.then(function() {
        return p(o) && f();
      }), o;
    }, clearImmediate: function(f) {
      p(f);
    } }, e.TestTools = { pending: function() {
      return Object.keys(b).length;
    } };
  }), W = i((e) => {
    var v = e && e.__read || function(o, a) {
      var u = typeof Symbol == "function" && o[Symbol.iterator];
      if (!u)
        return o;
      var c = u.call(o), d, y = [], h;
      try {
        for (; (a === void 0 || a-- > 0) && !(d = c.next()).done; )
          y.push(d.value);
      } catch (S) {
        h = { error: S };
      } finally {
        try {
          d && !d.done && (u = c.return) && u.call(c);
        } finally {
          if (h)
            throw h.error;
        }
      }
      return y;
    }, w = e && e.__spreadArray || function(o, a) {
      for (var u = 0, c = a.length, d = o.length; u < c; u++, d++)
        o[d] = a[u];
      return o;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.immediateProvider = void 0;
    var b = Ue(), p = b.Immediate.setImmediate, f = b.Immediate.clearImmediate;
    e.immediateProvider = { setImmediate: function() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      var u = e.immediateProvider.delegate;
      return ((u == null ? void 0 : u.setImmediate) || p).apply(void 0, w([], v(o)));
    }, clearImmediate: function(o) {
      var a = e.immediateProvider.delegate;
      return ((a == null ? void 0 : a.clearImmediate) || f)(o);
    }, delegate: void 0 };
  }), ie = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var f = function(o, a) {
        return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, c) {
          u.__proto__ = c;
        } || function(u, c) {
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
        }, f(o, a);
      };
      return function(o, a) {
        if (typeof a != "function" && a !== null)
          throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
        f(o, a);
        function u() {
          this.constructor = o;
        }
        o.prototype = a === null ? Object.create(a) : (u.prototype = a.prototype, new u());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AsapAction = void 0;
    var w = ye(), b = W(), p = function(f) {
      v(o, f);
      function o(a, u) {
        var c = f.call(this, a, u) || this;
        return c.scheduler = a, c.work = u, c;
      }
      return o.prototype.requestAsyncId = function(a, u, c) {
        return c === void 0 && (c = 0), c !== null && c > 0 ? f.prototype.requestAsyncId.call(this, a, u, c) : (a.actions.push(this), a._scheduled || (a._scheduled = b.immediateProvider.setImmediate(a.flush.bind(a, void 0))));
      }, o.prototype.recycleAsyncId = function(a, u, c) {
        var d;
        if (c === void 0 && (c = 0), c != null ? c > 0 : this.delay > 0)
          return f.prototype.recycleAsyncId.call(this, a, u, c);
        var y = a.actions;
        u != null && ((d = y[y.length - 1]) === null || d === void 0 ? void 0 : d.id) !== u && (b.immediateProvider.clearImmediate(u), a._scheduled === u && (a._scheduled = void 0));
      }, o;
    }(w.AsyncAction);
    e.AsapAction = p;
  }), Z = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.Scheduler = void 0;
    var v = Ce(), w = function() {
      function b(p, f) {
        f === void 0 && (f = b.now), this.schedulerActionCtor = p, this.now = f;
      }
      return b.prototype.schedule = function(p, f, o) {
        return f === void 0 && (f = 0), new this.schedulerActionCtor(this, p).schedule(o, f);
      }, b.now = v.dateTimestampProvider.now, b;
    }();
    e.Scheduler = w;
  }), je = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AsyncScheduler = void 0;
    var w = Z(), b = function(p) {
      v(f, p);
      function f(o, a) {
        a === void 0 && (a = w.Scheduler.now);
        var u = p.call(this, o, a) || this;
        return u.actions = [], u._active = !1, u;
      }
      return f.prototype.flush = function(o) {
        var a = this.actions;
        if (this._active) {
          a.push(o);
          return;
        }
        var u;
        this._active = !0;
        do
          if (u = o.execute(o.state, o.delay))
            break;
        while (o = a.shift());
        if (this._active = !1, u) {
          for (; o = a.shift(); )
            o.unsubscribe();
          throw u;
        }
      }, f;
    }(w.Scheduler);
    e.AsyncScheduler = b;
  }), V = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AsapScheduler = void 0;
    var w = je(), b = function(p) {
      v(f, p);
      function f() {
        return p !== null && p.apply(this, arguments) || this;
      }
      return f.prototype.flush = function(o) {
        this._active = !0;
        var a = this._scheduled;
        this._scheduled = void 0;
        var u = this.actions, c;
        o = o || u.shift();
        do
          if (c = o.execute(o.state, o.delay))
            break;
        while ((o = u[0]) && o.id === a && u.shift());
        if (this._active = !1, c) {
          for (; (o = u[0]) && o.id === a && u.shift(); )
            o.unsubscribe();
          throw c;
        }
      }, f;
    }(w.AsyncScheduler);
    e.AsapScheduler = b;
  }), ee = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.asap = e.asapScheduler = void 0;
    var v = ie(), w = V();
    e.asapScheduler = new w.AsapScheduler(v.AsapAction), e.asap = e.asapScheduler;
  }), ue = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.async = e.asyncScheduler = void 0;
    var v = ye(), w = je();
    e.asyncScheduler = new w.AsyncScheduler(v.AsyncAction), e.async = e.asyncScheduler;
  }), X = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QueueAction = void 0;
    var w = ye(), b = function(p) {
      v(f, p);
      function f(o, a) {
        var u = p.call(this, o, a) || this;
        return u.scheduler = o, u.work = a, u;
      }
      return f.prototype.schedule = function(o, a) {
        return a === void 0 && (a = 0), a > 0 ? p.prototype.schedule.call(this, o, a) : (this.delay = a, this.state = o, this.scheduler.flush(this), this);
      }, f.prototype.execute = function(o, a) {
        return a > 0 || this.closed ? p.prototype.execute.call(this, o, a) : this._execute(o, a);
      }, f.prototype.requestAsyncId = function(o, a, u) {
        return u === void 0 && (u = 0), u != null && u > 0 || u == null && this.delay > 0 ? p.prototype.requestAsyncId.call(this, o, a, u) : (o.flush(this), 0);
      }, f;
    }(w.AsyncAction);
    e.QueueAction = b;
  }), ge = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.QueueScheduler = void 0;
    var w = je(), b = function(p) {
      v(f, p);
      function f() {
        return p !== null && p.apply(this, arguments) || this;
      }
      return f;
    }(w.AsyncScheduler);
    e.QueueScheduler = b;
  }), pe = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.queue = e.queueScheduler = void 0;
    var v = X(), w = ge();
    e.queueScheduler = new w.QueueScheduler(v.QueueAction), e.queue = e.queueScheduler;
  }), C = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var f = function(o, a) {
        return f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, c) {
          u.__proto__ = c;
        } || function(u, c) {
          for (var d in c)
            Object.prototype.hasOwnProperty.call(c, d) && (u[d] = c[d]);
        }, f(o, a);
      };
      return function(o, a) {
        if (typeof a != "function" && a !== null)
          throw new TypeError("Class extends value " + String(a) + " is not a constructor or null");
        f(o, a);
        function u() {
          this.constructor = o;
        }
        o.prototype = a === null ? Object.create(a) : (u.prototype = a.prototype, new u());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AnimationFrameAction = void 0;
    var w = ye(), b = Ne(), p = function(f) {
      v(o, f);
      function o(a, u) {
        var c = f.call(this, a, u) || this;
        return c.scheduler = a, c.work = u, c;
      }
      return o.prototype.requestAsyncId = function(a, u, c) {
        return c === void 0 && (c = 0), c !== null && c > 0 ? f.prototype.requestAsyncId.call(this, a, u, c) : (a.actions.push(this), a._scheduled || (a._scheduled = b.animationFrameProvider.requestAnimationFrame(function() {
          return a.flush(void 0);
        })));
      }, o.prototype.recycleAsyncId = function(a, u, c) {
        var d;
        if (c === void 0 && (c = 0), c != null ? c > 0 : this.delay > 0)
          return f.prototype.recycleAsyncId.call(this, a, u, c);
        var y = a.actions;
        u != null && ((d = y[y.length - 1]) === null || d === void 0 ? void 0 : d.id) !== u && (b.animationFrameProvider.cancelAnimationFrame(u), a._scheduled = void 0);
      }, o;
    }(w.AsyncAction);
    e.AnimationFrameAction = p;
  }), P = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var p = function(f, o) {
        return p = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(a, u) {
          a.__proto__ = u;
        } || function(a, u) {
          for (var c in u)
            Object.prototype.hasOwnProperty.call(u, c) && (a[c] = u[c]);
        }, p(f, o);
      };
      return function(f, o) {
        if (typeof o != "function" && o !== null)
          throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
        p(f, o);
        function a() {
          this.constructor = f;
        }
        f.prototype = o === null ? Object.create(o) : (a.prototype = o.prototype, new a());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.AnimationFrameScheduler = void 0;
    var w = je(), b = function(p) {
      v(f, p);
      function f() {
        return p !== null && p.apply(this, arguments) || this;
      }
      return f.prototype.flush = function(o) {
        this._active = !0;
        var a = this._scheduled;
        this._scheduled = void 0;
        var u = this.actions, c;
        o = o || u.shift();
        do
          if (c = o.execute(o.state, o.delay))
            break;
        while ((o = u[0]) && o.id === a && u.shift());
        if (this._active = !1, c) {
          for (; (o = u[0]) && o.id === a && u.shift(); )
            o.unsubscribe();
          throw c;
        }
      }, f;
    }(w.AsyncScheduler);
    e.AnimationFrameScheduler = b;
  }), ne = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.animationFrame = e.animationFrameScheduler = void 0;
    var v = C(), w = P();
    e.animationFrameScheduler = new w.AnimationFrameScheduler(v.AnimationFrameAction), e.animationFrame = e.animationFrameScheduler;
  }), _e = i((e) => {
    var v = e && e.__extends || /* @__PURE__ */ function() {
      var a = function(u, c) {
        return a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, y) {
          d.__proto__ = y;
        } || function(d, y) {
          for (var h in y)
            Object.prototype.hasOwnProperty.call(y, h) && (d[h] = y[h]);
        }, a(u, c);
      };
      return function(u, c) {
        if (typeof c != "function" && c !== null)
          throw new TypeError("Class extends value " + String(c) + " is not a constructor or null");
        a(u, c);
        function d() {
          this.constructor = u;
        }
        u.prototype = c === null ? Object.create(c) : (d.prototype = c.prototype, new d());
      };
    }();
    Object.defineProperty(e, "__esModule", { value: !0 }), e.VirtualAction = e.VirtualTimeScheduler = void 0;
    var w = ye(), b = _(), p = je(), f = function(a) {
      v(u, a);
      function u(c, d) {
        c === void 0 && (c = o), d === void 0 && (d = 1 / 0);
        var y = a.call(this, c, function() {
          return y.frame;
        }) || this;
        return y.maxFrames = d, y.frame = 0, y.index = -1, y;
      }
      return u.prototype.flush = function() {
        for (var c = this, d = c.actions, y = c.maxFrames, h, S; (S = d[0]) && S.delay <= y && (d.shift(), this.frame = S.delay, !(h = S.execute(S.state, S.delay))); )
          ;
        if (h) {
          for (; S = d.shift(); )
            S.unsubscribe();
          throw h;
        }
      }, u.frameTimeFactor = 10, u;
    }(p.AsyncScheduler);
    e.VirtualTimeScheduler = f;
    var o = function(a) {
      v(u, a);
      function u(c, d, y) {
        y === void 0 && (y = c.index += 1);
        var h = a.call(this, c, d) || this;
        return h.scheduler = c, h.work = d, h.index = y, h.active = !0, h.index = c.index = y, h;
      }
      return u.prototype.schedule = function(c, d) {
        if (d === void 0 && (d = 0), Number.isFinite(d)) {
          if (!this.id)
            return a.prototype.schedule.call(this, c, d);
          this.active = !1;
          var y = new u(this.scheduler, this.work);
          return this.add(y), y.schedule(c, d);
        } else
          return b.Subscription.EMPTY;
      }, u.prototype.requestAsyncId = function(c, d, y) {
        y === void 0 && (y = 0), this.delay = c.frame + y;
        var h = c.actions;
        return h.push(this), h.sort(u.sortActions), 1;
      }, u.prototype.recycleAsyncId = function(c, d, y) {
      }, u.prototype._execute = function(c, d) {
        if (this.active === !0)
          return a.prototype._execute.call(this, c, d);
      }, u.sortActions = function(c, d) {
        return c.delay === d.delay ? c.index === d.index ? 0 : c.index > d.index ? 1 : -1 : c.delay > d.delay ? 1 : -1;
      }, u;
    }(w.AsyncAction);
    e.VirtualAction = o;
  }), De = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.empty = e.EMPTY = void 0;
    var v = $();
    e.EMPTY = new v.Observable(function(p) {
      return p.complete();
    });
    function w(p) {
      return p ? b(p) : e.EMPTY;
    }
    e.empty = w;
    function b(p) {
      return new v.Observable(function(f) {
        return p.schedule(function() {
          return f.complete();
        });
      });
    }
  }), xe = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isScheduler = void 0;
    var v = t();
    function w(b) {
      return b && v.isFunction(b.schedule);
    }
    e.isScheduler = w;
  }), Ge = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.popNumber = e.popScheduler = e.popResultSelector = void 0;
    var v = t(), w = xe();
    function b(a) {
      return a[a.length - 1];
    }
    function p(a) {
      return v.isFunction(b(a)) ? a.pop() : void 0;
    }
    e.popResultSelector = p;
    function f(a) {
      return w.isScheduler(b(a)) ? a.pop() : void 0;
    }
    e.popScheduler = f;
    function o(a, u) {
      return typeof b(a) == "number" ? a.pop() : u;
    }
    e.popNumber = o;
  }), tt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isArrayLike = void 0, e.isArrayLike = function(v) {
      return v && typeof v.length == "number" && typeof v != "function";
    };
  }), _t = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isPromise = void 0;
    var v = t();
    function w(b) {
      return v.isFunction(b == null ? void 0 : b.then);
    }
    e.isPromise = w;
  }), St = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isInteropObservable = void 0;
    var v = q(), w = t();
    function b(p) {
      return w.isFunction(p[v.observable]);
    }
    e.isInteropObservable = b;
  }), Ft = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isAsyncIterable = void 0;
    var v = t();
    function w(b) {
      return Symbol.asyncIterator && v.isFunction(b == null ? void 0 : b[Symbol.asyncIterator]);
    }
    e.isAsyncIterable = w;
  }), at = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createInvalidObservableTypeError = void 0;
    function v(w) {
      return new TypeError("You provided " + (w !== null && typeof w == "object" ? "an invalid object" : "'" + w + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    e.createInvalidObservableTypeError = v;
  }), $a = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.iterator = e.getSymbolIterator = void 0;
    function v() {
      return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
    }
    e.getSymbolIterator = v, e.iterator = v();
  }), Me = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isIterable = void 0;
    var v = $a(), w = t();
    function b(p) {
      return w.isFunction(p == null ? void 0 : p[v.iterator]);
    }
    e.isIterable = b;
  }), me = i((e) => {
    var v = e && e.__generator || function(a, u) {
      var c = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, d, y, h, S;
      return S = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
        return this;
      }), S;
      function E(T) {
        return function(U) {
          return M([T, U]);
        };
      }
      function M(T) {
        if (d)
          throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (d = 1, y && (h = T[0] & 2 ? y.return : T[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, T[1])).done)
              return h;
            switch (y = 0, h && (T = [T[0] & 2, h.value]), T[0]) {
              case 0:
              case 1:
                h = T;
                break;
              case 4:
                return c.label++, { value: T[1], done: !1 };
              case 5:
                c.label++, y = T[1], T = [0];
                continue;
              case 7:
                T = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (h = c.trys, !(h = h.length > 0 && h[h.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                  c = 0;
                  continue;
                }
                if (T[0] === 3 && (!h || T[1] > h[0] && T[1] < h[3])) {
                  c.label = T[1];
                  break;
                }
                if (T[0] === 6 && c.label < h[1]) {
                  c.label = h[1], h = T;
                  break;
                }
                if (h && c.label < h[2]) {
                  c.label = h[2], c.ops.push(T);
                  break;
                }
                h[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            T = u.call(a, c);
          } catch (U) {
            T = [6, U], y = 0;
          } finally {
            d = h = 0;
          }
        if (T[0] & 5)
          throw T[1];
        return { value: T[0] ? T[1] : void 0, done: !0 };
      }
    }, w = e && e.__await || function(a) {
      return this instanceof w ? (this.v = a, this) : new w(a);
    }, b = e && e.__asyncGenerator || function(a, u, c) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var d = c.apply(a, u || []), y, h = [];
      return y = {}, S("next"), S("throw"), S("return"), y[Symbol.asyncIterator] = function() {
        return this;
      }, y;
      function S(J) {
        d[J] && (y[J] = function(K) {
          return new Promise(function(te, ae) {
            h.push([J, K, te, ae]) > 1 || E(J, K);
          });
        });
      }
      function E(J, K) {
        try {
          M(d[J](K));
        } catch (te) {
          G(h[0][3], te);
        }
      }
      function M(J) {
        J.value instanceof w ? Promise.resolve(J.value.v).then(T, U) : G(h[0][2], J);
      }
      function T(J) {
        E("next", J);
      }
      function U(J) {
        E("throw", J);
      }
      function G(J, K) {
        J(K), h.shift(), h.length && E(h[0][0], h[0][1]);
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isReadableStreamLike = e.readableStreamLikeToAsyncGenerator = void 0;
    var p = t();
    function f(a) {
      return b(this, arguments, function() {
        var u, c, d, y;
        return v(this, function(h) {
          switch (h.label) {
            case 0:
              u = a.getReader(), h.label = 1;
            case 1:
              h.trys.push([1, , 9, 10]), h.label = 2;
            case 2:
              return [4, w(u.read())];
            case 3:
              return c = h.sent(), d = c.value, y = c.done, y ? [4, w(void 0)] : [3, 5];
            case 4:
              return [2, h.sent()];
            case 5:
              return [4, w(d)];
            case 6:
              return [4, h.sent()];
            case 7:
              return h.sent(), [3, 2];
            case 8:
              return [3, 10];
            case 9:
              return u.releaseLock(), [7];
            case 10:
              return [2];
          }
        });
      });
    }
    e.readableStreamLikeToAsyncGenerator = f;
    function o(a) {
      return p.isFunction(a == null ? void 0 : a.getReader);
    }
    e.isReadableStreamLike = o;
  }), fe = i((e) => {
    var v = e && e.__awaiter || function(oe, de, se, Ae) {
      function qe(Te) {
        return Te instanceof se ? Te : new se(function(Ke) {
          Ke(Te);
        });
      }
      return new (se || (se = Promise))(function(Te, Ke) {
        function ot($t) {
          try {
            We(Ae.next($t));
          } catch (qa) {
            Ke(qa);
          }
        }
        function ct($t) {
          try {
            We(Ae.throw($t));
          } catch (qa) {
            Ke(qa);
          }
        }
        function We($t) {
          $t.done ? Te($t.value) : qe($t.value).then(ot, ct);
        }
        We((Ae = Ae.apply(oe, de || [])).next());
      });
    }, w = e && e.__generator || function(oe, de) {
      var se = { label: 0, sent: function() {
        if (Te[0] & 1)
          throw Te[1];
        return Te[1];
      }, trys: [], ops: [] }, Ae, qe, Te, Ke;
      return Ke = { next: ot(0), throw: ot(1), return: ot(2) }, typeof Symbol == "function" && (Ke[Symbol.iterator] = function() {
        return this;
      }), Ke;
      function ot(We) {
        return function($t) {
          return ct([We, $t]);
        };
      }
      function ct(We) {
        if (Ae)
          throw new TypeError("Generator is already executing.");
        for (; se; )
          try {
            if (Ae = 1, qe && (Te = We[0] & 2 ? qe.return : We[0] ? qe.throw || ((Te = qe.return) && Te.call(qe), 0) : qe.next) && !(Te = Te.call(qe, We[1])).done)
              return Te;
            switch (qe = 0, Te && (We = [We[0] & 2, Te.value]), We[0]) {
              case 0:
              case 1:
                Te = We;
                break;
              case 4:
                return se.label++, { value: We[1], done: !1 };
              case 5:
                se.label++, qe = We[1], We = [0];
                continue;
              case 7:
                We = se.ops.pop(), se.trys.pop();
                continue;
              default:
                if (Te = se.trys, !(Te = Te.length > 0 && Te[Te.length - 1]) && (We[0] === 6 || We[0] === 2)) {
                  se = 0;
                  continue;
                }
                if (We[0] === 3 && (!Te || We[1] > Te[0] && We[1] < Te[3])) {
                  se.label = We[1];
                  break;
                }
                if (We[0] === 6 && se.label < Te[1]) {
                  se.label = Te[1], Te = We;
                  break;
                }
                if (Te && se.label < Te[2]) {
                  se.label = Te[2], se.ops.push(We);
                  break;
                }
                Te[2] && se.ops.pop(), se.trys.pop();
                continue;
            }
            We = de.call(oe, se);
          } catch ($t) {
            We = [6, $t], qe = 0;
          } finally {
            Ae = Te = 0;
          }
        if (We[0] & 5)
          throw We[1];
        return { value: We[0] ? We[1] : void 0, done: !0 };
      }
    }, b = e && e.__asyncValues || function(oe) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var de = oe[Symbol.asyncIterator], se;
      return de ? de.call(oe) : (oe = typeof p == "function" ? p(oe) : oe[Symbol.iterator](), se = {}, Ae("next"), Ae("throw"), Ae("return"), se[Symbol.asyncIterator] = function() {
        return this;
      }, se);
      function Ae(Te) {
        se[Te] = oe[Te] && function(Ke) {
          return new Promise(function(ot, ct) {
            Ke = oe[Te](Ke), qe(ot, ct, Ke.done, Ke.value);
          });
        };
      }
      function qe(Te, Ke, ot, ct) {
        Promise.resolve(ct).then(function(We) {
          Te({ value: We, done: ot });
        }, Ke);
      }
    }, p = e && e.__values || function(oe) {
      var de = typeof Symbol == "function" && Symbol.iterator, se = de && oe[de], Ae = 0;
      if (se)
        return se.call(oe);
      if (oe && typeof oe.length == "number")
        return { next: function() {
          return oe && Ae >= oe.length && (oe = void 0), { value: oe && oe[Ae++], done: !oe };
        } };
      throw new TypeError(de ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fromReadableStreamLike = e.fromAsyncIterable = e.fromIterable = e.fromPromise = e.fromArrayLike = e.fromInteropObservable = e.innerFrom = void 0;
    var f = tt(), o = _t(), a = $(), u = St(), c = Ft(), d = at(), y = Me(), h = me(), S = t(), E = x(), M = q();
    function T(oe) {
      if (oe instanceof a.Observable)
        return oe;
      if (oe != null) {
        if (u.isInteropObservable(oe))
          return U(oe);
        if (f.isArrayLike(oe))
          return G(oe);
        if (o.isPromise(oe))
          return J(oe);
        if (c.isAsyncIterable(oe))
          return te(oe);
        if (y.isIterable(oe))
          return K(oe);
        if (h.isReadableStreamLike(oe))
          return ae(oe);
      }
      throw d.createInvalidObservableTypeError(oe);
    }
    e.innerFrom = T;
    function U(oe) {
      return new a.Observable(function(de) {
        var se = oe[M.observable]();
        if (S.isFunction(se.subscribe))
          return se.subscribe(de);
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      });
    }
    e.fromInteropObservable = U;
    function G(oe) {
      return new a.Observable(function(de) {
        for (var se = 0; se < oe.length && !de.closed; se++)
          de.next(oe[se]);
        de.complete();
      });
    }
    e.fromArrayLike = G;
    function J(oe) {
      return new a.Observable(function(de) {
        oe.then(function(se) {
          de.closed || (de.next(se), de.complete());
        }, function(se) {
          return de.error(se);
        }).then(null, E.reportUnhandledError);
      });
    }
    e.fromPromise = J;
    function K(oe) {
      return new a.Observable(function(de) {
        var se, Ae;
        try {
          for (var qe = p(oe), Te = qe.next(); !Te.done; Te = qe.next()) {
            var Ke = Te.value;
            if (de.next(Ke), de.closed)
              return;
          }
        } catch (ot) {
          se = { error: ot };
        } finally {
          try {
            Te && !Te.done && (Ae = qe.return) && Ae.call(qe);
          } finally {
            if (se)
              throw se.error;
          }
        }
        de.complete();
      });
    }
    e.fromIterable = K;
    function te(oe) {
      return new a.Observable(function(de) {
        ve(oe, de).catch(function(se) {
          return de.error(se);
        });
      });
    }
    e.fromAsyncIterable = te;
    function ae(oe) {
      return te(h.readableStreamLikeToAsyncGenerator(oe));
    }
    e.fromReadableStreamLike = ae;
    function ve(oe, de) {
      var se, Ae, qe, Te;
      return v(this, void 0, void 0, function() {
        var Ke, ot;
        return w(this, function(ct) {
          switch (ct.label) {
            case 0:
              ct.trys.push([0, 5, 6, 11]), se = b(oe), ct.label = 1;
            case 1:
              return [4, se.next()];
            case 2:
              if (Ae = ct.sent(), !!Ae.done)
                return [3, 4];
              if (Ke = Ae.value, de.next(Ke), de.closed)
                return [2];
              ct.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              return ot = ct.sent(), qe = { error: ot }, [3, 11];
            case 6:
              return ct.trys.push([6, , 9, 10]), Ae && !Ae.done && (Te = se.return) ? [4, Te.call(se)] : [3, 8];
            case 7:
              ct.sent(), ct.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (qe)
                throw qe.error;
              return [7];
            case 10:
              return [7];
            case 11:
              return de.complete(), [2];
          }
        });
      });
    }
  }), Xe = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.executeSchedule = void 0;
    function v(w, b, p, f, o) {
      f === void 0 && (f = 0), o === void 0 && (o = !1);
      var a = b.schedule(function() {
        p(), o ? w.add(this.schedule(null, f)) : this.unsubscribe();
      }, f);
      if (w.add(a), !o)
        return a;
    }
    e.executeSchedule = v;
  }), _r = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observeOn = void 0;
    var v = Xe(), w = A(), b = z();
    function p(f, o) {
      return o === void 0 && (o = 0), w.operate(function(a, u) {
        a.subscribe(b.createOperatorSubscriber(u, function(c) {
          return v.executeSchedule(u, f, function() {
            return u.next(c);
          }, o);
        }, function() {
          return v.executeSchedule(u, f, function() {
            return u.complete();
          }, o);
        }, function(c) {
          return v.executeSchedule(u, f, function() {
            return u.error(c);
          }, o);
        }));
      });
    }
    e.observeOn = p;
  }), Sr = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.subscribeOn = void 0;
    var v = A();
    function w(b, p) {
      return p === void 0 && (p = 0), v.operate(function(f, o) {
        o.add(b.schedule(function() {
          return f.subscribe(o);
        }, p));
      });
    }
    e.subscribeOn = w;
  }), to = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scheduleObservable = void 0;
    var v = fe(), w = _r(), b = Sr();
    function p(f, o) {
      return v.innerFrom(f).pipe(b.subscribeOn(o), w.observeOn(o));
    }
    e.scheduleObservable = p;
  }), ro = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.schedulePromise = void 0;
    var v = fe(), w = _r(), b = Sr();
    function p(f, o) {
      return v.innerFrom(f).pipe(b.subscribeOn(o), w.observeOn(o));
    }
    e.schedulePromise = p;
  }), Er = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scheduleArray = void 0;
    var v = $();
    function w(b, p) {
      return new v.Observable(function(f) {
        var o = 0;
        return p.schedule(function() {
          o === b.length ? f.complete() : (f.next(b[o++]), f.closed || this.schedule());
        });
      });
    }
    e.scheduleArray = w;
  }), Au = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scheduleIterable = void 0;
    var v = $(), w = $a(), b = t(), p = Xe();
    function f(o, a) {
      return new v.Observable(function(u) {
        var c;
        return p.executeSchedule(u, a, function() {
          c = o[w.iterator](), p.executeSchedule(u, a, function() {
            var d, y, h;
            try {
              d = c.next(), y = d.value, h = d.done;
            } catch (S) {
              u.error(S);
              return;
            }
            h ? u.complete() : u.next(y);
          }, 0, !0);
        }), function() {
          return b.isFunction(c == null ? void 0 : c.return) && c.return();
        };
      });
    }
    e.scheduleIterable = f;
  }), $n = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scheduleAsyncIterable = void 0;
    var v = $(), w = Xe();
    function b(p, f) {
      if (!p)
        throw new Error("Iterable cannot be null");
      return new v.Observable(function(o) {
        w.executeSchedule(o, f, function() {
          var a = p[Symbol.asyncIterator]();
          w.executeSchedule(o, f, function() {
            a.next().then(function(u) {
              u.done ? o.complete() : o.next(u.value);
            });
          }, 0, !0);
        });
      });
    }
    e.scheduleAsyncIterable = b;
  }), Km = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scheduleReadableStreamLike = void 0;
    var v = $n(), w = me();
    function b(p, f) {
      return v.scheduleAsyncIterable(w.readableStreamLikeToAsyncGenerator(p), f);
    }
    e.scheduleReadableStreamLike = b;
  }), zr = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scheduled = void 0;
    var v = to(), w = ro(), b = Er(), p = Au(), f = $n(), o = St(), a = _t(), u = tt(), c = Me(), d = Ft(), y = at(), h = me(), S = Km();
    function E(M, T) {
      if (M != null) {
        if (o.isInteropObservable(M))
          return v.scheduleObservable(M, T);
        if (u.isArrayLike(M))
          return b.scheduleArray(M, T);
        if (a.isPromise(M))
          return w.schedulePromise(M, T);
        if (d.isAsyncIterable(M))
          return f.scheduleAsyncIterable(M, T);
        if (c.isIterable(M))
          return p.scheduleIterable(M, T);
        if (h.isReadableStreamLike(M))
          return S.scheduleReadableStreamLike(M, T);
      }
      throw y.createInvalidObservableTypeError(M);
    }
    e.scheduled = E;
  }), Qr = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.from = void 0;
    var v = zr(), w = fe();
    function b(p, f) {
      return f ? v.scheduled(p, f) : w.innerFrom(p);
    }
    e.from = b;
  }), Pr = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.of = void 0;
    var v = Ge(), w = Qr();
    function b() {
      for (var p = [], f = 0; f < arguments.length; f++)
        p[f] = arguments[f];
      var o = v.popScheduler(p);
      return w.from(p, o);
    }
    e.of = b;
  }), qh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.throwError = void 0;
    var v = $(), w = t();
    function b(p, f) {
      var o = w.isFunction(p) ? p : function() {
        return p;
      }, a = function(u) {
        return u.error(o());
      };
      return new v.Observable(f ? function(u) {
        return f.schedule(a, 0, u);
      } : a);
    }
    e.throwError = b;
  }), Or = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.observeNotification = e.Notification = e.NotificationKind = void 0;
    var v = De(), w = Pr(), b = qh(), p = t();
    (function(a) {
      a.NEXT = "N", a.ERROR = "E", a.COMPLETE = "C";
    })(e.NotificationKind || (e.NotificationKind = {}));
    var f = function() {
      function a(u, c, d) {
        this.kind = u, this.value = c, this.error = d, this.hasValue = u === "N";
      }
      return a.prototype.observe = function(u) {
        return o(this, u);
      }, a.prototype.do = function(u, c, d) {
        var y = this, h = y.kind, S = y.value, E = y.error;
        return h === "N" ? u == null ? void 0 : u(S) : h === "E" ? c == null ? void 0 : c(E) : d == null ? void 0 : d();
      }, a.prototype.accept = function(u, c, d) {
        var y;
        return p.isFunction((y = u) === null || y === void 0 ? void 0 : y.next) ? this.observe(u) : this.do(u, c, d);
      }, a.prototype.toObservable = function() {
        var u = this, c = u.kind, d = u.value, y = u.error, h = c === "N" ? w.of(d) : c === "E" ? b.throwError(function() {
          return y;
        }) : c === "C" ? v.EMPTY : 0;
        if (!h)
          throw new TypeError("Unexpected notification kind " + c);
        return h;
      }, a.createNext = function(u) {
        return new a("N", u);
      }, a.createError = function(u) {
        return new a("E", void 0, u);
      }, a.createComplete = function() {
        return a.completeNotification;
      }, a.completeNotification = new a("C"), a;
    }();
    e.Notification = f;
    function o(a, u) {
      var c, d, y, h = a, S = h.kind, E = h.value, M = h.error;
      if (typeof S != "string")
        throw new TypeError('Invalid notification, missing "kind"');
      S === "N" ? (c = u.next) === null || c === void 0 || c.call(u, E) : S === "E" ? (d = u.error) === null || d === void 0 || d.call(u, M) : (y = u.complete) === null || y === void 0 || y.call(u);
    }
    e.observeNotification = o;
  }), zm = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isObservable = void 0;
    var v = $(), w = t();
    function b(p) {
      return !!p && (p instanceof v.Observable || w.isFunction(p.lift) && w.isFunction(p.subscribe));
    }
    e.isObservable = b;
  }), zt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.EmptyError = void 0;
    var v = r();
    e.EmptyError = v.createErrorClass(function(w) {
      return function() {
        w(this), this.name = "EmptyError", this.message = "no elements in sequence";
      };
    });
  }), Qm = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.lastValueFrom = void 0;
    var v = zt();
    function w(b, p) {
      var f = typeof p == "object";
      return new Promise(function(o, a) {
        var u = !1, c;
        b.subscribe({ next: function(d) {
          c = d, u = !0;
        }, error: a, complete: function() {
          u ? o(c) : f ? o(p.defaultValue) : a(new v.EmptyError());
        } });
      });
    }
    e.lastValueFrom = w;
  }), no = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.firstValueFrom = void 0;
    var v = zt(), w = Q();
    function b(p, f) {
      var o = typeof f == "object";
      return new Promise(function(a, u) {
        var c = new w.SafeSubscriber({ next: function(d) {
          a(d), c.unsubscribe();
        }, error: u, complete: function() {
          o ? a(f.defaultValue) : u(new v.EmptyError());
        } });
        p.subscribe(c);
      });
    }
    e.firstValueFrom = b;
  }), Hh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ArgumentOutOfRangeError = void 0;
    var v = r();
    e.ArgumentOutOfRangeError = v.createErrorClass(function(w) {
      return function() {
        w(this), this.name = "ArgumentOutOfRangeError", this.message = "argument out of range";
      };
    });
  }), be = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.NotFoundError = void 0;
    var v = r();
    e.NotFoundError = v.createErrorClass(function(w) {
      return function(b) {
        w(this), this.name = "NotFoundError", this.message = b;
      };
    });
  }), Bh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.SequenceError = void 0;
    var v = r();
    e.SequenceError = v.createErrorClass(function(w) {
      return function(b) {
        w(this), this.name = "SequenceError", this.message = b;
      };
    });
  }), xu = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isValidDate = void 0;
    function v(w) {
      return w instanceof Date && !isNaN(w);
    }
    e.isValidDate = v;
  }), H = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.timeout = e.TimeoutError = void 0;
    var v = ue(), w = xu(), b = A(), p = fe(), f = r(), o = z(), a = Xe();
    e.TimeoutError = f.createErrorClass(function(d) {
      return function(y) {
        y === void 0 && (y = null), d(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = y;
      };
    });
    function u(d, y) {
      var h = w.isValidDate(d) ? { first: d } : typeof d == "number" ? { each: d } : d, S = h.first, E = h.each, M = h.with, T = M === void 0 ? c : M, U = h.scheduler, G = U === void 0 ? y ?? v.asyncScheduler : U, J = h.meta, K = J === void 0 ? null : J;
      if (S == null && E == null)
        throw new TypeError("No timeout provided.");
      return b.operate(function(te, ae) {
        var ve, oe, de = null, se = 0, Ae = function(qe) {
          oe = a.executeSchedule(ae, G, function() {
            try {
              ve.unsubscribe(), p.innerFrom(T({ meta: K, lastValue: de, seen: se })).subscribe(ae);
            } catch (Te) {
              ae.error(Te);
            }
          }, qe);
        };
        ve = te.subscribe(o.createOperatorSubscriber(ae, function(qe) {
          oe == null || oe.unsubscribe(), se++, ae.next(de = qe), E > 0 && Ae(E);
        }, void 0, void 0, function() {
          oe != null && oe.closed || oe == null || oe.unsubscribe(), de = null;
        })), !se && Ae(S != null ? typeof S == "number" ? S : +S - G.now() : E);
      });
    }
    e.timeout = u;
    function c(d) {
      throw new e.TimeoutError(d);
    }
  }), j = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.map = void 0;
    var v = A(), w = z();
    function b(p, f) {
      return v.operate(function(o, a) {
        var u = 0;
        o.subscribe(w.createOperatorSubscriber(a, function(c) {
          a.next(p.call(f, c, u++));
        }));
      });
    }
    e.map = b;
  }), Se = i((e) => {
    var v = e && e.__read || function(a, u) {
      var c = typeof Symbol == "function" && a[Symbol.iterator];
      if (!c)
        return a;
      var d = c.call(a), y, h = [], S;
      try {
        for (; (u === void 0 || u-- > 0) && !(y = d.next()).done; )
          h.push(y.value);
      } catch (E) {
        S = { error: E };
      } finally {
        try {
          y && !y.done && (c = d.return) && c.call(d);
        } finally {
          if (S)
            throw S.error;
        }
      }
      return h;
    }, w = e && e.__spreadArray || function(a, u) {
      for (var c = 0, d = u.length, y = a.length; c < d; c++, y++)
        a[y] = u[c];
      return a;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mapOneOrManyArgs = void 0;
    var b = j(), p = Array.isArray;
    function f(a, u) {
      return p(u) ? a.apply(void 0, w([], v(u))) : a(u);
    }
    function o(a) {
      return b.map(function(u) {
        return f(a, u);
      });
    }
    e.mapOneOrManyArgs = o;
  }), we = i((e) => {
    var v = e && e.__read || function(d, y) {
      var h = typeof Symbol == "function" && d[Symbol.iterator];
      if (!h)
        return d;
      var S = h.call(d), E, M = [], T;
      try {
        for (; (y === void 0 || y-- > 0) && !(E = S.next()).done; )
          M.push(E.value);
      } catch (U) {
        T = { error: U };
      } finally {
        try {
          E && !E.done && (h = S.return) && h.call(S);
        } finally {
          if (T)
            throw T.error;
        }
      }
      return M;
    }, w = e && e.__spreadArray || function(d, y) {
      for (var h = 0, S = y.length, E = d.length; h < S; h++, E++)
        d[E] = y[h];
      return d;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindCallbackInternals = void 0;
    var b = xe(), p = $(), f = Sr(), o = Se(), a = _r(), u = Fe();
    function c(d, y, h, S) {
      if (h)
        if (b.isScheduler(h))
          S = h;
        else
          return function() {
            for (var E = [], M = 0; M < arguments.length; M++)
              E[M] = arguments[M];
            return c(d, y, S).apply(this, E).pipe(o.mapOneOrManyArgs(h));
          };
      return S ? function() {
        for (var E = [], M = 0; M < arguments.length; M++)
          E[M] = arguments[M];
        return c(d, y).apply(this, E).pipe(f.subscribeOn(S), a.observeOn(S));
      } : function() {
        for (var E = this, M = [], T = 0; T < arguments.length; T++)
          M[T] = arguments[T];
        var U = new u.AsyncSubject(), G = !0;
        return new p.Observable(function(J) {
          var K = U.subscribe(J);
          if (G) {
            G = !1;
            var te = !1, ae = !1;
            y.apply(E, w(w([], v(M)), [function() {
              for (var ve = [], oe = 0; oe < arguments.length; oe++)
                ve[oe] = arguments[oe];
              if (d) {
                var de = ve.shift();
                if (de != null) {
                  U.error(de);
                  return;
                }
              }
              U.next(1 < ve.length ? ve : ve[0]), ae = !0, te && U.complete();
            }])), ae && U.complete(), te = !0;
          }
          return K;
        });
      };
    }
    e.bindCallbackInternals = c;
  }), Le = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindCallback = void 0;
    var v = we();
    function w(b, p, f) {
      return v.bindCallbackInternals(!1, b, p, f);
    }
    e.bindCallback = w;
  }), Re = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bindNodeCallback = void 0;
    var v = we();
    function w(b, p, f) {
      return v.bindCallbackInternals(!0, b, p, f);
    }
    e.bindNodeCallback = w;
  }), Ve = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.argsArgArrayOrObject = void 0;
    var v = Array.isArray, w = Object.getPrototypeOf, b = Object.prototype, p = Object.keys;
    function f(a) {
      if (a.length === 1) {
        var u = a[0];
        if (v(u))
          return { args: u, keys: null };
        if (o(u)) {
          var c = p(u);
          return { args: c.map(function(d) {
            return u[d];
          }), keys: c };
        }
      }
      return { args: a, keys: null };
    }
    e.argsArgArrayOrObject = f;
    function o(a) {
      return a && typeof a == "object" && w(a) === b;
    }
  }), it = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createObject = void 0;
    function v(w, b) {
      return w.reduce(function(p, f, o) {
        return p[f] = b[o], p;
      }, {});
    }
    e.createObject = v;
  }), rt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.combineLatestInit = e.combineLatest = void 0;
    var v = $(), w = Ve(), b = Qr(), p = B(), f = Se(), o = Ge(), a = it(), u = z(), c = Xe();
    function d() {
      for (var S = [], E = 0; E < arguments.length; E++)
        S[E] = arguments[E];
      var M = o.popScheduler(S), T = o.popResultSelector(S), U = w.argsArgArrayOrObject(S), G = U.args, J = U.keys;
      if (G.length === 0)
        return b.from([], M);
      var K = new v.Observable(y(G, M, J ? function(te) {
        return a.createObject(J, te);
      } : p.identity));
      return T ? K.pipe(f.mapOneOrManyArgs(T)) : K;
    }
    e.combineLatest = d;
    function y(S, E, M) {
      return M === void 0 && (M = p.identity), function(T) {
        h(E, function() {
          for (var U = S.length, G = new Array(U), J = U, K = U, te = function(ve) {
            h(E, function() {
              var oe = b.from(S[ve], E), de = !1;
              oe.subscribe(u.createOperatorSubscriber(T, function(se) {
                G[ve] = se, de || (de = !0, K--), K || T.next(M(G.slice()));
              }, function() {
                --J || T.complete();
              }));
            }, T);
          }, ae = 0; ae < U; ae++)
            te(ae);
        }, T);
      };
    }
    e.combineLatestInit = y;
    function h(S, E, M) {
      S ? c.executeSchedule(M, S, E) : E();
    }
  }), xt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeInternals = void 0;
    var v = fe(), w = Xe(), b = z();
    function p(f, o, a, u, c, d, y, h) {
      var S = [], E = 0, M = 0, T = !1, U = function() {
        T && !S.length && !E && o.complete();
      }, G = function(K) {
        return E < u ? J(K) : S.push(K);
      }, J = function(K) {
        d && o.next(K), E++;
        var te = !1;
        v.innerFrom(a(K, M++)).subscribe(b.createOperatorSubscriber(o, function(ae) {
          c == null || c(ae), d ? G(ae) : o.next(ae);
        }, function() {
          te = !0;
        }, void 0, function() {
          if (te)
            try {
              E--;
              for (var ae = function() {
                var ve = S.shift();
                y ? w.executeSchedule(o, y, function() {
                  return J(ve);
                }) : J(ve);
              }; S.length && E < u; )
                ae();
              U();
            } catch (ve) {
              o.error(ve);
            }
        }));
      };
      return f.subscribe(b.createOperatorSubscriber(o, G, function() {
        T = !0, U();
      })), function() {
        h == null || h();
      };
    }
    e.mergeInternals = p;
  }), yt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeMap = void 0;
    var v = j(), w = fe(), b = A(), p = xt(), f = t();
    function o(a, u, c) {
      return c === void 0 && (c = 1 / 0), f.isFunction(u) ? o(function(d, y) {
        return v.map(function(h, S) {
          return u(d, h, y, S);
        })(w.innerFrom(a(d, y)));
      }, c) : (typeof u == "number" && (c = u), b.operate(function(d, y) {
        return p.mergeInternals(d, y, a, c);
      }));
    }
    e.mergeMap = o;
  }), Nt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeAll = void 0;
    var v = yt(), w = B();
    function b(p) {
      return p === void 0 && (p = 1 / 0), v.mergeMap(w.identity, p);
    }
    e.mergeAll = b;
  }), Qt = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.concatAll = void 0;
    var v = Nt();
    function w() {
      return v.mergeAll(1);
    }
    e.concatAll = w;
  }), Nu = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.concat = void 0;
    var v = Qt(), w = Ge(), b = Qr();
    function p() {
      for (var f = [], o = 0; o < arguments.length; o++)
        f[o] = arguments[o];
      return v.concatAll()(b.from(f, w.popScheduler(f)));
    }
    e.concat = p;
  }), $u = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.defer = void 0;
    var v = $(), w = fe();
    function b(p) {
      return new v.Observable(function(f) {
        w.innerFrom(p()).subscribe(f);
      });
    }
    e.defer = b;
  }), Jm = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.connectable = void 0;
    var v = he(), w = $(), b = $u(), p = { connector: function() {
      return new v.Subject();
    }, resetOnDisconnect: !0 };
    function f(o, a) {
      a === void 0 && (a = p);
      var u = null, c = a.connector, d = a.resetOnDisconnect, y = d === void 0 ? !0 : d, h = c(), S = new w.Observable(function(E) {
        return h.subscribe(E);
      });
      return S.connect = function() {
        return (!u || u.closed) && (u = b.defer(function() {
          return o;
        }).subscribe(h), y && u.add(function() {
          return h = c();
        })), u;
      }, S;
    }
    e.connectable = f;
  }), Gm = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.forkJoin = void 0;
    var v = $(), w = Ve(), b = fe(), p = Ge(), f = z(), o = Se(), a = it();
    function u() {
      for (var c = [], d = 0; d < arguments.length; d++)
        c[d] = arguments[d];
      var y = p.popResultSelector(c), h = w.argsArgArrayOrObject(c), S = h.args, E = h.keys, M = new v.Observable(function(T) {
        var U = S.length;
        if (!U) {
          T.complete();
          return;
        }
        for (var G = new Array(U), J = U, K = U, te = function(ve) {
          var oe = !1;
          b.innerFrom(S[ve]).subscribe(f.createOperatorSubscriber(T, function(de) {
            oe || (oe = !0, K--), G[ve] = de;
          }, function() {
            return J--;
          }, void 0, function() {
            (!J || !oe) && (K || T.next(E ? a.createObject(E, G) : G), T.complete());
          }));
        }, ae = 0; ae < U; ae++)
          te(ae);
      });
      return y ? M.pipe(o.mapOneOrManyArgs(y)) : M;
    }
    e.forkJoin = u;
  }), Ym = i((e) => {
    var v = e && e.__read || function(T, U) {
      var G = typeof Symbol == "function" && T[Symbol.iterator];
      if (!G)
        return T;
      var J = G.call(T), K, te = [], ae;
      try {
        for (; (U === void 0 || U-- > 0) && !(K = J.next()).done; )
          te.push(K.value);
      } catch (ve) {
        ae = { error: ve };
      } finally {
        try {
          K && !K.done && (G = J.return) && G.call(J);
        } finally {
          if (ae)
            throw ae.error;
        }
      }
      return te;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fromEvent = void 0;
    var w = fe(), b = $(), p = yt(), f = tt(), o = t(), a = Se(), u = ["addListener", "removeListener"], c = ["addEventListener", "removeEventListener"], d = ["on", "off"];
    function y(T, U, G, J) {
      if (o.isFunction(G) && (J = G, G = void 0), J)
        return y(T, U, G).pipe(a.mapOneOrManyArgs(J));
      var K = v(M(T) ? c.map(function(ve) {
        return function(oe) {
          return T[ve](U, oe, G);
        };
      }) : S(T) ? u.map(h(T, U)) : E(T) ? d.map(h(T, U)) : [], 2), te = K[0], ae = K[1];
      if (!te && f.isArrayLike(T))
        return p.mergeMap(function(ve) {
          return y(ve, U, G);
        })(w.innerFrom(T));
      if (!te)
        throw new TypeError("Invalid event target");
      return new b.Observable(function(ve) {
        var oe = function() {
          for (var de = [], se = 0; se < arguments.length; se++)
            de[se] = arguments[se];
          return ve.next(1 < de.length ? de : de[0]);
        };
        return te(oe), function() {
          return ae(oe);
        };
      });
    }
    e.fromEvent = y;
    function h(T, U) {
      return function(G) {
        return function(J) {
          return T[G](U, J);
        };
      };
    }
    function S(T) {
      return o.isFunction(T.addListener) && o.isFunction(T.removeListener);
    }
    function E(T) {
      return o.isFunction(T.on) && o.isFunction(T.off);
    }
    function M(T) {
      return o.isFunction(T.addEventListener) && o.isFunction(T.removeEventListener);
    }
  }), Xm = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fromEventPattern = void 0;
    var v = $(), w = t(), b = Se();
    function p(f, o, a) {
      return a ? p(f, o).pipe(b.mapOneOrManyArgs(a)) : new v.Observable(function(u) {
        var c = function() {
          for (var y = [], h = 0; h < arguments.length; h++)
            y[h] = arguments[h];
          return u.next(y.length === 1 ? y[0] : y);
        }, d = f(c);
        return w.isFunction(o) ? function() {
          return o(c, d);
        } : void 0;
      });
    }
    e.fromEventPattern = p;
  }), Zm = i((e) => {
    var v = e && e.__generator || function(a, u) {
      var c = { label: 0, sent: function() {
        if (h[0] & 1)
          throw h[1];
        return h[1];
      }, trys: [], ops: [] }, d, y, h, S;
      return S = { next: E(0), throw: E(1), return: E(2) }, typeof Symbol == "function" && (S[Symbol.iterator] = function() {
        return this;
      }), S;
      function E(T) {
        return function(U) {
          return M([T, U]);
        };
      }
      function M(T) {
        if (d)
          throw new TypeError("Generator is already executing.");
        for (; c; )
          try {
            if (d = 1, y && (h = T[0] & 2 ? y.return : T[0] ? y.throw || ((h = y.return) && h.call(y), 0) : y.next) && !(h = h.call(y, T[1])).done)
              return h;
            switch (y = 0, h && (T = [T[0] & 2, h.value]), T[0]) {
              case 0:
              case 1:
                h = T;
                break;
              case 4:
                return c.label++, { value: T[1], done: !1 };
              case 5:
                c.label++, y = T[1], T = [0];
                continue;
              case 7:
                T = c.ops.pop(), c.trys.pop();
                continue;
              default:
                if (h = c.trys, !(h = h.length > 0 && h[h.length - 1]) && (T[0] === 6 || T[0] === 2)) {
                  c = 0;
                  continue;
                }
                if (T[0] === 3 && (!h || T[1] > h[0] && T[1] < h[3])) {
                  c.label = T[1];
                  break;
                }
                if (T[0] === 6 && c.label < h[1]) {
                  c.label = h[1], h = T;
                  break;
                }
                if (h && c.label < h[2]) {
                  c.label = h[2], c.ops.push(T);
                  break;
                }
                h[2] && c.ops.pop(), c.trys.pop();
                continue;
            }
            T = u.call(a, c);
          } catch (U) {
            T = [6, U], y = 0;
          } finally {
            d = h = 0;
          }
        if (T[0] & 5)
          throw T[1];
        return { value: T[0] ? T[1] : void 0, done: !0 };
      }
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.generate = void 0;
    var w = B(), b = xe(), p = $u(), f = Au();
    function o(a, u, c, d, y) {
      var h, S, E, M;
      arguments.length === 1 ? (h = a, M = h.initialState, u = h.condition, c = h.iterate, S = h.resultSelector, E = S === void 0 ? w.identity : S, y = h.scheduler) : (M = a, !d || b.isScheduler(d) ? (E = w.identity, y = d) : E = d);
      function T() {
        var U;
        return v(this, function(G) {
          switch (G.label) {
            case 0:
              U = M, G.label = 1;
            case 1:
              return !u || u(U) ? [4, E(U)] : [3, 4];
            case 2:
              G.sent(), G.label = 3;
            case 3:
              return U = c(U), [3, 1];
            case 4:
              return [2];
          }
        });
      }
      return p.defer(y ? function() {
        return f.scheduleIterable(T(), y);
      } : T);
    }
    e.generate = o;
  }), ev = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.iif = void 0;
    var v = $u();
    function w(b, p, f) {
      return v.defer(function() {
        return b() ? p : f;
      });
    }
    e.iif = w;
  }), Ln = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.timer = void 0;
    var v = $(), w = ue(), b = xe(), p = xu();
    function f(o, a, u) {
      o === void 0 && (o = 0), u === void 0 && (u = w.async);
      var c = -1;
      return a != null && (b.isScheduler(a) ? u = a : c = a), new v.Observable(function(d) {
        var y = p.isValidDate(o) ? +o - u.now() : o;
        y < 0 && (y = 0);
        var h = 0;
        return u.schedule(function() {
          d.closed || (d.next(h++), 0 <= c ? this.schedule(void 0, c) : d.complete());
        }, y);
      });
    }
    e.timer = f;
  }), Wh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.interval = void 0;
    var v = ue(), w = Ln();
    function b(p, f) {
      return p === void 0 && (p = 0), f === void 0 && (f = v.asyncScheduler), p < 0 && (p = 0), w.timer(p, p, f);
    }
    e.interval = b;
  }), tv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.merge = void 0;
    var v = Nt(), w = fe(), b = De(), p = Ge(), f = Qr();
    function o() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      var c = p.popScheduler(a), d = p.popNumber(a, 1 / 0), y = a;
      return y.length ? y.length === 1 ? w.innerFrom(y[0]) : v.mergeAll(d)(f.from(y, c)) : b.EMPTY;
    }
    e.merge = o;
  }), Uh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.never = e.NEVER = void 0;
    var v = $(), w = F();
    e.NEVER = new v.Observable(w.noop);
    function b() {
      return e.NEVER;
    }
    e.never = b;
  }), io = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.argsOrArgArray = void 0;
    var v = Array.isArray;
    function w(b) {
      return b.length === 1 && v(b[0]) ? b[0] : b;
    }
    e.argsOrArgArray = w;
  }), Vh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.onErrorResumeNext = void 0;
    var v = $(), w = io(), b = z(), p = F(), f = fe();
    function o() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      var c = w.argsOrArgArray(a);
      return new v.Observable(function(d) {
        var y = 0, h = function() {
          if (y < c.length) {
            var S = void 0;
            try {
              S = f.innerFrom(c[y++]);
            } catch {
              h();
              return;
            }
            var E = new b.OperatorSubscriber(d, void 0, p.noop, p.noop);
            S.subscribe(E), E.add(h);
          } else
            d.complete();
        };
        h();
      });
    }
    e.onErrorResumeNext = o;
  }), rv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.pairs = void 0;
    var v = Qr();
    function w(b, p) {
      return v.from(Object.entries(b), p);
    }
    e.pairs = w;
  }), nv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.not = void 0;
    function v(w, b) {
      return function(p, f) {
        return !w.call(b, p, f);
      };
    }
    e.not = v;
  }), oo = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.filter = void 0;
    var v = A(), w = z();
    function b(p, f) {
      return v.operate(function(o, a) {
        var u = 0;
        o.subscribe(w.createOperatorSubscriber(a, function(c) {
          return p.call(f, c, u++) && a.next(c);
        }));
      });
    }
    e.filter = b;
  }), iv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.partition = void 0;
    var v = nv(), w = oo(), b = fe();
    function p(f, o, a) {
      return [w.filter(o, a)(b.innerFrom(f)), w.filter(v.not(o, a))(b.innerFrom(f))];
    }
    e.partition = p;
  }), Kh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.raceInit = e.race = void 0;
    var v = $(), w = fe(), b = io(), p = z();
    function f() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return a = b.argsOrArgArray(a), a.length === 1 ? w.innerFrom(a[0]) : new v.Observable(o(a));
    }
    e.race = f;
    function o(a) {
      return function(u) {
        for (var c = [], d = function(h) {
          c.push(w.innerFrom(a[h]).subscribe(p.createOperatorSubscriber(u, function(S) {
            if (c) {
              for (var E = 0; E < c.length; E++)
                E !== h && c[E].unsubscribe();
              c = null;
            }
            u.next(S);
          })));
        }, y = 0; c && !u.closed && y < a.length; y++)
          d(y);
      };
    }
    e.raceInit = o;
  }), ov = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.range = void 0;
    var v = $(), w = De();
    function b(p, f, o) {
      if (f == null && (f = p, p = 0), f <= 0)
        return w.EMPTY;
      var a = f + p;
      return new v.Observable(o ? function(u) {
        var c = p;
        return o.schedule(function() {
          c < a ? (u.next(c++), this.schedule()) : u.complete();
        });
      } : function(u) {
        for (var c = p; c < a && !u.closed; )
          u.next(c++);
        u.complete();
      });
    }
    e.range = b;
  }), av = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.using = void 0;
    var v = $(), w = fe(), b = De();
    function p(f, o) {
      return new v.Observable(function(a) {
        var u = f(), c = o(u), d = c ? w.innerFrom(c) : b.EMPTY;
        return d.subscribe(a), function() {
          u && u.unsubscribe();
        };
      });
    }
    e.using = p;
  }), Xd = i((e) => {
    var v = e && e.__read || function(d, y) {
      var h = typeof Symbol == "function" && d[Symbol.iterator];
      if (!h)
        return d;
      var S = h.call(d), E, M = [], T;
      try {
        for (; (y === void 0 || y-- > 0) && !(E = S.next()).done; )
          M.push(E.value);
      } catch (U) {
        T = { error: U };
      } finally {
        try {
          E && !E.done && (h = S.return) && h.call(S);
        } finally {
          if (T)
            throw T.error;
        }
      }
      return M;
    }, w = e && e.__spreadArray || function(d, y) {
      for (var h = 0, S = y.length, E = d.length; h < S; h++, E++)
        d[E] = y[h];
      return d;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.zip = void 0;
    var b = $(), p = fe(), f = io(), o = De(), a = z(), u = Ge();
    function c() {
      for (var d = [], y = 0; y < arguments.length; y++)
        d[y] = arguments[y];
      var h = u.popResultSelector(d), S = f.argsOrArgArray(d);
      return S.length ? new b.Observable(function(E) {
        var M = S.map(function() {
          return [];
        }), T = S.map(function() {
          return !1;
        });
        E.add(function() {
          M = T = null;
        });
        for (var U = function(J) {
          p.innerFrom(S[J]).subscribe(a.createOperatorSubscriber(E, function(K) {
            if (M[J].push(K), M.every(function(ae) {
              return ae.length;
            })) {
              var te = M.map(function(ae) {
                return ae.shift();
              });
              E.next(h ? h.apply(void 0, w([], v(te))) : te), M.some(function(ae, ve) {
                return !ae.length && T[ve];
              }) && E.complete();
            }
          }, function() {
            T[J] = !0, !M[J].length && E.complete();
          }));
        }, G = 0; !E.closed && G < S.length; G++)
          U(G);
        return function() {
          M = T = null;
        };
      }) : o.EMPTY;
    }
    e.zip = c;
  }), sv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }), zh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.audit = void 0;
    var v = A(), w = fe(), b = z();
    function p(f) {
      return v.operate(function(o, a) {
        var u = !1, c = null, d = null, y = !1, h = function() {
          if (d == null || d.unsubscribe(), d = null, u) {
            u = !1;
            var E = c;
            c = null, a.next(E);
          }
          y && a.complete();
        }, S = function() {
          d = null, y && a.complete();
        };
        o.subscribe(b.createOperatorSubscriber(a, function(E) {
          u = !0, c = E, d || w.innerFrom(f(E)).subscribe(d = b.createOperatorSubscriber(a, h, S));
        }, function() {
          y = !0, (!u || !d || d.closed) && a.complete();
        }));
      });
    }
    e.audit = p;
  }), cv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.auditTime = void 0;
    var v = ue(), w = zh(), b = Ln();
    function p(f, o) {
      return o === void 0 && (o = v.asyncScheduler), w.audit(function() {
        return b.timer(f, o);
      });
    }
    e.auditTime = p;
  }), uv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.buffer = void 0;
    var v = A(), w = F(), b = z(), p = fe();
    function f(o) {
      return v.operate(function(a, u) {
        var c = [];
        return a.subscribe(b.createOperatorSubscriber(u, function(d) {
          return c.push(d);
        }, function() {
          u.next(c), u.complete();
        })), p.innerFrom(o).subscribe(b.createOperatorSubscriber(u, function() {
          var d = c;
          c = [], u.next(d);
        }, w.noop)), function() {
          c = null;
        };
      });
    }
    e.buffer = f;
  }), lv = i((e) => {
    var v = e && e.__values || function(o) {
      var a = typeof Symbol == "function" && Symbol.iterator, u = a && o[a], c = 0;
      if (u)
        return u.call(o);
      if (o && typeof o.length == "number")
        return { next: function() {
          return o && c >= o.length && (o = void 0), { value: o && o[c++], done: !o };
        } };
      throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bufferCount = void 0;
    var w = A(), b = z(), p = m();
    function f(o, a) {
      return a === void 0 && (a = null), a = a ?? o, w.operate(function(u, c) {
        var d = [], y = 0;
        u.subscribe(b.createOperatorSubscriber(c, function(h) {
          var S, E, M, T, U = null;
          y++ % a === 0 && d.push([]);
          try {
            for (var G = v(d), J = G.next(); !J.done; J = G.next()) {
              var K = J.value;
              K.push(h), o <= K.length && (U = U ?? [], U.push(K));
            }
          } catch (ve) {
            S = { error: ve };
          } finally {
            try {
              J && !J.done && (E = G.return) && E.call(G);
            } finally {
              if (S)
                throw S.error;
            }
          }
          if (U)
            try {
              for (var te = v(U), ae = te.next(); !ae.done; ae = te.next()) {
                var K = ae.value;
                p.arrRemove(d, K), c.next(K);
              }
            } catch (ve) {
              M = { error: ve };
            } finally {
              try {
                ae && !ae.done && (T = te.return) && T.call(te);
              } finally {
                if (M)
                  throw M.error;
              }
            }
        }, function() {
          var h, S;
          try {
            for (var E = v(d), M = E.next(); !M.done; M = E.next()) {
              var T = M.value;
              c.next(T);
            }
          } catch (U) {
            h = { error: U };
          } finally {
            try {
              M && !M.done && (S = E.return) && S.call(E);
            } finally {
              if (h)
                throw h.error;
            }
          }
          c.complete();
        }, void 0, function() {
          d = null;
        }));
      });
    }
    e.bufferCount = f;
  }), dv = i((e) => {
    var v = e && e.__values || function(d) {
      var y = typeof Symbol == "function" && Symbol.iterator, h = y && d[y], S = 0;
      if (h)
        return h.call(d);
      if (d && typeof d.length == "number")
        return { next: function() {
          return d && S >= d.length && (d = void 0), { value: d && d[S++], done: !d };
        } };
      throw new TypeError(y ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bufferTime = void 0;
    var w = _(), b = A(), p = z(), f = m(), o = ue(), a = Ge(), u = Xe();
    function c(d) {
      for (var y, h, S = [], E = 1; E < arguments.length; E++)
        S[E - 1] = arguments[E];
      var M = (y = a.popScheduler(S)) !== null && y !== void 0 ? y : o.asyncScheduler, T = (h = S[0]) !== null && h !== void 0 ? h : null, U = S[1] || 1 / 0;
      return b.operate(function(G, J) {
        var K = [], te = !1, ae = function(de) {
          var se = de.buffer, Ae = de.subs;
          Ae.unsubscribe(), f.arrRemove(K, de), J.next(se), te && ve();
        }, ve = function() {
          if (K) {
            var de = new w.Subscription();
            J.add(de);
            var se = [], Ae = { buffer: se, subs: de };
            K.push(Ae), u.executeSchedule(de, M, function() {
              return ae(Ae);
            }, d);
          }
        };
        T !== null && T >= 0 ? u.executeSchedule(J, M, ve, T, !0) : te = !0, ve();
        var oe = p.createOperatorSubscriber(J, function(de) {
          var se, Ae, qe = K.slice();
          try {
            for (var Te = v(qe), Ke = Te.next(); !Ke.done; Ke = Te.next()) {
              var ot = Ke.value, ct = ot.buffer;
              ct.push(de), U <= ct.length && ae(ot);
            }
          } catch (We) {
            se = { error: We };
          } finally {
            try {
              Ke && !Ke.done && (Ae = Te.return) && Ae.call(Te);
            } finally {
              if (se)
                throw se.error;
            }
          }
        }, function() {
          for (; K != null && K.length; )
            J.next(K.shift().buffer);
          oe == null || oe.unsubscribe(), J.complete(), J.unsubscribe();
        }, void 0, function() {
          return K = null;
        });
        G.subscribe(oe);
      });
    }
    e.bufferTime = c;
  }), fv = i((e) => {
    var v = e && e.__values || function(c) {
      var d = typeof Symbol == "function" && Symbol.iterator, y = d && c[d], h = 0;
      if (y)
        return y.call(c);
      if (c && typeof c.length == "number")
        return { next: function() {
          return c && h >= c.length && (c = void 0), { value: c && c[h++], done: !c };
        } };
      throw new TypeError(d ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bufferToggle = void 0;
    var w = _(), b = A(), p = fe(), f = z(), o = F(), a = m();
    function u(c, d) {
      return b.operate(function(y, h) {
        var S = [];
        p.innerFrom(c).subscribe(f.createOperatorSubscriber(h, function(E) {
          var M = [];
          S.push(M);
          var T = new w.Subscription(), U = function() {
            a.arrRemove(S, M), h.next(M), T.unsubscribe();
          };
          T.add(p.innerFrom(d(E)).subscribe(f.createOperatorSubscriber(h, U, o.noop)));
        }, o.noop)), y.subscribe(f.createOperatorSubscriber(h, function(E) {
          var M, T;
          try {
            for (var U = v(S), G = U.next(); !G.done; G = U.next()) {
              var J = G.value;
              J.push(E);
            }
          } catch (K) {
            M = { error: K };
          } finally {
            try {
              G && !G.done && (T = U.return) && T.call(U);
            } finally {
              if (M)
                throw M.error;
            }
          }
        }, function() {
          for (; S.length > 0; )
            h.next(S.shift());
          h.complete();
        }));
      });
    }
    e.bufferToggle = u;
  }), hv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.bufferWhen = void 0;
    var v = A(), w = F(), b = z(), p = fe();
    function f(o) {
      return v.operate(function(a, u) {
        var c = null, d = null, y = function() {
          d == null || d.unsubscribe();
          var h = c;
          c = [], h && u.next(h), p.innerFrom(o()).subscribe(d = b.createOperatorSubscriber(u, y, w.noop));
        };
        y(), a.subscribe(b.createOperatorSubscriber(u, function(h) {
          return c == null ? void 0 : c.push(h);
        }, function() {
          c && u.next(c), u.complete();
        }, void 0, function() {
          return c = d = null;
        }));
      });
    }
    e.bufferWhen = f;
  }), pv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.catchError = void 0;
    var v = fe(), w = z(), b = A();
    function p(f) {
      return b.operate(function(o, a) {
        var u = null, c = !1, d;
        u = o.subscribe(w.createOperatorSubscriber(a, void 0, void 0, function(y) {
          d = v.innerFrom(f(y, p(f)(o))), u ? (u.unsubscribe(), u = null, d.subscribe(a)) : c = !0;
        })), c && (u.unsubscribe(), u = null, d.subscribe(a));
      });
    }
    e.catchError = p;
  }), Qh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scanInternals = void 0;
    var v = z();
    function w(b, p, f, o, a) {
      return function(u, c) {
        var d = f, y = p, h = 0;
        u.subscribe(v.createOperatorSubscriber(c, function(S) {
          var E = h++;
          y = d ? b(y, S, E) : (d = !0, S), o && c.next(y);
        }, a && function() {
          d && c.next(y), c.complete();
        }));
      };
    }
    e.scanInternals = w;
  }), La = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.reduce = void 0;
    var v = Qh(), w = A();
    function b(p, f) {
      return w.operate(v.scanInternals(p, f, arguments.length >= 2, !1, !0));
    }
    e.reduce = b;
  }), Jh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.toArray = void 0;
    var v = La(), w = A(), b = function(f, o) {
      return f.push(o), f;
    };
    function p() {
      return w.operate(function(f, o) {
        v.reduce(b, [])(f).subscribe(o);
      });
    }
    e.toArray = p;
  }), Gh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.joinAllInternals = void 0;
    var v = B(), w = Se(), b = D(), p = yt(), f = Jh();
    function o(a, u) {
      return b.pipe(f.toArray(), p.mergeMap(function(c) {
        return a(c);
      }), u ? w.mapOneOrManyArgs(u) : v.identity);
    }
    e.joinAllInternals = o;
  }), Yh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.combineLatestAll = void 0;
    var v = rt(), w = Gh();
    function b(p) {
      return w.joinAllInternals(v.combineLatest, p);
    }
    e.combineLatestAll = b;
  }), yv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.combineAll = void 0;
    var v = Yh();
    e.combineAll = v.combineLatestAll;
  }), mv = i((e) => {
    var v = e && e.__read || function(d, y) {
      var h = typeof Symbol == "function" && d[Symbol.iterator];
      if (!h)
        return d;
      var S = h.call(d), E, M = [], T;
      try {
        for (; (y === void 0 || y-- > 0) && !(E = S.next()).done; )
          M.push(E.value);
      } catch (U) {
        T = { error: U };
      } finally {
        try {
          E && !E.done && (h = S.return) && h.call(S);
        } finally {
          if (T)
            throw T.error;
        }
      }
      return M;
    }, w = e && e.__spreadArray || function(d, y) {
      for (var h = 0, S = y.length, E = d.length; h < S; h++, E++)
        d[E] = y[h];
      return d;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.combineLatest = void 0;
    var b = rt(), p = A(), f = io(), o = Se(), a = D(), u = Ge();
    function c() {
      for (var d = [], y = 0; y < arguments.length; y++)
        d[y] = arguments[y];
      var h = u.popResultSelector(d);
      return h ? a.pipe(c.apply(void 0, w([], v(d))), o.mapOneOrManyArgs(h)) : p.operate(function(S, E) {
        b.combineLatestInit(w([S], v(f.argsOrArgArray(d))))(E);
      });
    }
    e.combineLatest = c;
  }), vv = i((e) => {
    var v = e && e.__read || function(f, o) {
      var a = typeof Symbol == "function" && f[Symbol.iterator];
      if (!a)
        return f;
      var u = a.call(f), c, d = [], y;
      try {
        for (; (o === void 0 || o-- > 0) && !(c = u.next()).done; )
          d.push(c.value);
      } catch (h) {
        y = { error: h };
      } finally {
        try {
          c && !c.done && (a = u.return) && a.call(u);
        } finally {
          if (y)
            throw y.error;
        }
      }
      return d;
    }, w = e && e.__spreadArray || function(f, o) {
      for (var a = 0, u = o.length, c = f.length; a < u; a++, c++)
        f[c] = o[a];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.combineLatestWith = void 0;
    var b = mv();
    function p() {
      for (var f = [], o = 0; o < arguments.length; o++)
        f[o] = arguments[o];
      return b.combineLatest.apply(void 0, w([], v(f)));
    }
    e.combineLatestWith = p;
  }), Xh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.concatMap = void 0;
    var v = yt(), w = t();
    function b(p, f) {
      return w.isFunction(f) ? v.mergeMap(p, f, 1) : v.mergeMap(p, 1);
    }
    e.concatMap = b;
  }), bv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.concatMapTo = void 0;
    var v = Xh(), w = t();
    function b(p, f) {
      return w.isFunction(f) ? v.concatMap(function() {
        return p;
      }, f) : v.concatMap(function() {
        return p;
      });
    }
    e.concatMapTo = b;
  }), gv = i((e) => {
    var v = e && e.__read || function(u, c) {
      var d = typeof Symbol == "function" && u[Symbol.iterator];
      if (!d)
        return u;
      var y = d.call(u), h, S = [], E;
      try {
        for (; (c === void 0 || c-- > 0) && !(h = y.next()).done; )
          S.push(h.value);
      } catch (M) {
        E = { error: M };
      } finally {
        try {
          h && !h.done && (d = y.return) && d.call(y);
        } finally {
          if (E)
            throw E.error;
        }
      }
      return S;
    }, w = e && e.__spreadArray || function(u, c) {
      for (var d = 0, y = c.length, h = u.length; d < y; d++, h++)
        u[h] = c[d];
      return u;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.concat = void 0;
    var b = A(), p = Qt(), f = Ge(), o = Qr();
    function a() {
      for (var u = [], c = 0; c < arguments.length; c++)
        u[c] = arguments[c];
      var d = f.popScheduler(u);
      return b.operate(function(y, h) {
        p.concatAll()(o.from(w([y], v(u)), d)).subscribe(h);
      });
    }
    e.concat = a;
  }), wv = i((e) => {
    var v = e && e.__read || function(f, o) {
      var a = typeof Symbol == "function" && f[Symbol.iterator];
      if (!a)
        return f;
      var u = a.call(f), c, d = [], y;
      try {
        for (; (o === void 0 || o-- > 0) && !(c = u.next()).done; )
          d.push(c.value);
      } catch (h) {
        y = { error: h };
      } finally {
        try {
          c && !c.done && (a = u.return) && a.call(u);
        } finally {
          if (y)
            throw y.error;
        }
      }
      return d;
    }, w = e && e.__spreadArray || function(f, o) {
      for (var a = 0, u = o.length, c = f.length; a < u; a++, c++)
        f[c] = o[a];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.concatWith = void 0;
    var b = gv();
    function p() {
      for (var f = [], o = 0; o < arguments.length; o++)
        f[o] = arguments[o];
      return b.concat.apply(void 0, w([], v(f)));
    }
    e.concatWith = p;
  }), _v = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.fromSubscribable = void 0;
    var v = $();
    function w(b) {
      return new v.Observable(function(p) {
        return b.subscribe(p);
      });
    }
    e.fromSubscribable = w;
  }), Zd = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.connect = void 0;
    var v = he(), w = fe(), b = A(), p = _v(), f = { connector: function() {
      return new v.Subject();
    } };
    function o(a, u) {
      u === void 0 && (u = f);
      var c = u.connector;
      return b.operate(function(d, y) {
        var h = c();
        w.innerFrom(a(p.fromSubscribable(h))).subscribe(y), y.add(d.subscribe(h));
      });
    }
    e.connect = o;
  }), Sv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.count = void 0;
    var v = La();
    function w(b) {
      return v.reduce(function(p, f, o) {
        return !b || b(f, o) ? p + 1 : p;
      }, 0);
    }
    e.count = w;
  }), Ev = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.debounce = void 0;
    var v = A(), w = F(), b = z(), p = fe();
    function f(o) {
      return v.operate(function(a, u) {
        var c = !1, d = null, y = null, h = function() {
          if (y == null || y.unsubscribe(), y = null, c) {
            c = !1;
            var S = d;
            d = null, u.next(S);
          }
        };
        a.subscribe(b.createOperatorSubscriber(u, function(S) {
          y == null || y.unsubscribe(), c = !0, d = S, y = b.createOperatorSubscriber(u, h, w.noop), p.innerFrom(o(S)).subscribe(y);
        }, function() {
          h(), u.complete();
        }, void 0, function() {
          d = y = null;
        }));
      });
    }
    e.debounce = f;
  }), Pv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.debounceTime = void 0;
    var v = ue(), w = A(), b = z();
    function p(f, o) {
      return o === void 0 && (o = v.asyncScheduler), w.operate(function(a, u) {
        var c = null, d = null, y = null, h = function() {
          if (c) {
            c.unsubscribe(), c = null;
            var E = d;
            d = null, u.next(E);
          }
        };
        function S() {
          var E = y + f, M = o.now();
          if (M < E) {
            c = this.schedule(void 0, E - M), u.add(c);
            return;
          }
          h();
        }
        a.subscribe(b.createOperatorSubscriber(u, function(E) {
          d = E, y = o.now(), c || (c = o.schedule(S, f), u.add(c));
        }, function() {
          h(), u.complete();
        }, void 0, function() {
          d = c = null;
        }));
      });
    }
    e.debounceTime = p;
  }), Lu = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultIfEmpty = void 0;
    var v = A(), w = z();
    function b(p) {
      return v.operate(function(f, o) {
        var a = !1;
        f.subscribe(w.createOperatorSubscriber(o, function(u) {
          a = !0, o.next(u);
        }, function() {
          a || o.next(p), o.complete();
        }));
      });
    }
    e.defaultIfEmpty = b;
  }), qu = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.take = void 0;
    var v = De(), w = A(), b = z();
    function p(f) {
      return f <= 0 ? function() {
        return v.EMPTY;
      } : w.operate(function(o, a) {
        var u = 0;
        o.subscribe(b.createOperatorSubscriber(a, function(c) {
          ++u <= f && (a.next(c), f <= u && a.complete());
        }));
      });
    }
    e.take = p;
  }), Zh = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ignoreElements = void 0;
    var v = A(), w = z(), b = F();
    function p() {
      return v.operate(function(f, o) {
        f.subscribe(w.createOperatorSubscriber(o, b.noop));
      });
    }
    e.ignoreElements = p;
  }), ep = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mapTo = void 0;
    var v = j();
    function w(b) {
      return v.map(function() {
        return b;
      });
    }
    e.mapTo = w;
  }), tp = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.delayWhen = void 0;
    var v = Nu(), w = qu(), b = Zh(), p = ep(), f = yt(), o = fe();
    function a(u, c) {
      return c ? function(d) {
        return v.concat(c.pipe(w.take(1), b.ignoreElements()), d.pipe(a(u)));
      } : f.mergeMap(function(d, y) {
        return o.innerFrom(u(d, y)).pipe(w.take(1), p.mapTo(d));
      });
    }
    e.delayWhen = a;
  }), Ov = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.delay = void 0;
    var v = ue(), w = tp(), b = Ln();
    function p(f, o) {
      o === void 0 && (o = v.asyncScheduler);
      var a = b.timer(f, o);
      return w.delayWhen(function() {
        return a;
      });
    }
    e.delay = p;
  }), kv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.dematerialize = void 0;
    var v = Or(), w = A(), b = z();
    function p() {
      return w.operate(function(f, o) {
        f.subscribe(b.createOperatorSubscriber(o, function(a) {
          return v.observeNotification(a, o);
        }));
      });
    }
    e.dematerialize = p;
  }), Cv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.distinct = void 0;
    var v = A(), w = z(), b = F(), p = fe();
    function f(o, a) {
      return v.operate(function(u, c) {
        var d = /* @__PURE__ */ new Set();
        u.subscribe(w.createOperatorSubscriber(c, function(y) {
          var h = o ? o(y) : y;
          d.has(h) || (d.add(h), c.next(y));
        })), a && p.innerFrom(a).subscribe(w.createOperatorSubscriber(c, function() {
          return d.clear();
        }, b.noop));
      });
    }
    e.distinct = f;
  }), rp = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.distinctUntilChanged = void 0;
    var v = B(), w = A(), b = z();
    function p(o, a) {
      return a === void 0 && (a = v.identity), o = o ?? f, w.operate(function(u, c) {
        var d, y = !0;
        u.subscribe(b.createOperatorSubscriber(c, function(h) {
          var S = a(h);
          (y || !o(d, S)) && (y = !1, d = S, c.next(h));
        }));
      });
    }
    e.distinctUntilChanged = p;
    function f(o, a) {
      return o === a;
    }
  }), jv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.distinctUntilKeyChanged = void 0;
    var v = rp();
    function w(b, p) {
      return v.distinctUntilChanged(function(f, o) {
        return p ? p(f[b], o[b]) : f[b] === o[b];
      });
    }
    e.distinctUntilKeyChanged = w;
  }), Hu = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.throwIfEmpty = void 0;
    var v = zt(), w = A(), b = z();
    function p(o) {
      return o === void 0 && (o = f), w.operate(function(a, u) {
        var c = !1;
        a.subscribe(b.createOperatorSubscriber(u, function(d) {
          c = !0, u.next(d);
        }, function() {
          return c ? u.complete() : u.error(o());
        }));
      });
    }
    e.throwIfEmpty = p;
    function f() {
      return new v.EmptyError();
    }
  }), Tv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.elementAt = void 0;
    var v = Hh(), w = oo(), b = Hu(), p = Lu(), f = qu();
    function o(a, u) {
      if (a < 0)
        throw new v.ArgumentOutOfRangeError();
      var c = arguments.length >= 2;
      return function(d) {
        return d.pipe(w.filter(function(y, h) {
          return h === a;
        }), f.take(1), c ? p.defaultIfEmpty(u) : b.throwIfEmpty(function() {
          return new v.ArgumentOutOfRangeError();
        }));
      };
    }
    e.elementAt = o;
  }), Iv = i((e) => {
    var v = e && e.__read || function(o, a) {
      var u = typeof Symbol == "function" && o[Symbol.iterator];
      if (!u)
        return o;
      var c = u.call(o), d, y = [], h;
      try {
        for (; (a === void 0 || a-- > 0) && !(d = c.next()).done; )
          y.push(d.value);
      } catch (S) {
        h = { error: S };
      } finally {
        try {
          d && !d.done && (u = c.return) && u.call(c);
        } finally {
          if (h)
            throw h.error;
        }
      }
      return y;
    }, w = e && e.__spreadArray || function(o, a) {
      for (var u = 0, c = a.length, d = o.length; u < c; u++, d++)
        o[d] = a[u];
      return o;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.endWith = void 0;
    var b = Nu(), p = Pr();
    function f() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      return function(u) {
        return b.concat(u, p.of.apply(void 0, w([], v(o))));
      };
    }
    e.endWith = f;
  }), Mv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.every = void 0;
    var v = A(), w = z();
    function b(p, f) {
      return v.operate(function(o, a) {
        var u = 0;
        o.subscribe(w.createOperatorSubscriber(a, function(c) {
          p.call(f, c, u++, o) || (a.next(!1), a.complete());
        }, function() {
          a.next(!0), a.complete();
        }));
      });
    }
    e.every = b;
  }), np = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.exhaustMap = void 0;
    var v = j(), w = fe(), b = A(), p = z();
    function f(o, a) {
      return a ? function(u) {
        return u.pipe(f(function(c, d) {
          return w.innerFrom(o(c, d)).pipe(v.map(function(y, h) {
            return a(c, y, d, h);
          }));
        }));
      } : b.operate(function(u, c) {
        var d = 0, y = null, h = !1;
        u.subscribe(p.createOperatorSubscriber(c, function(S) {
          y || (y = p.createOperatorSubscriber(c, void 0, function() {
            y = null, h && c.complete();
          }), w.innerFrom(o(S, d++)).subscribe(y));
        }, function() {
          h = !0, !y && c.complete();
        }));
      });
    }
    e.exhaustMap = f;
  }), ip = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.exhaustAll = void 0;
    var v = np(), w = B();
    function b() {
      return v.exhaustMap(w.identity);
    }
    e.exhaustAll = b;
  }), Fv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.exhaust = void 0;
    var v = ip();
    e.exhaust = v.exhaustAll;
  }), Dv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.expand = void 0;
    var v = A(), w = xt();
    function b(p, f, o) {
      return f === void 0 && (f = 1 / 0), f = (f || 0) < 1 ? 1 / 0 : f, v.operate(function(a, u) {
        return w.mergeInternals(a, u, p, f, void 0, !0, o);
      });
    }
    e.expand = b;
  }), Rv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.finalize = void 0;
    var v = A();
    function w(b) {
      return v.operate(function(p, f) {
        try {
          p.subscribe(f);
        } finally {
          f.add(b);
        }
      });
    }
    e.finalize = w;
  }), op = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.createFind = e.find = void 0;
    var v = A(), w = z();
    function b(f, o) {
      return v.operate(p(f, o, "value"));
    }
    e.find = b;
    function p(f, o, a) {
      var u = a === "index";
      return function(c, d) {
        var y = 0;
        c.subscribe(w.createOperatorSubscriber(d, function(h) {
          var S = y++;
          f.call(o, h, S, c) && (d.next(u ? S : h), d.complete());
        }, function() {
          d.next(u ? -1 : void 0), d.complete();
        }));
      };
    }
    e.createFind = p;
  }), Av = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.findIndex = void 0;
    var v = A(), w = op();
    function b(p, f) {
      return v.operate(w.createFind(p, f, "index"));
    }
    e.findIndex = b;
  }), xv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.first = void 0;
    var v = zt(), w = oo(), b = qu(), p = Lu(), f = Hu(), o = B();
    function a(u, c) {
      var d = arguments.length >= 2;
      return function(y) {
        return y.pipe(u ? w.filter(function(h, S) {
          return u(h, S, y);
        }) : o.identity, b.take(1), d ? p.defaultIfEmpty(c) : f.throwIfEmpty(function() {
          return new v.EmptyError();
        }));
      };
    }
    e.first = a;
  }), Nv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.groupBy = void 0;
    var v = $(), w = fe(), b = he(), p = A(), f = z();
    function o(a, u, c, d) {
      return p.operate(function(y, h) {
        var S;
        !u || typeof u == "function" ? S = u : (c = u.duration, S = u.element, d = u.connector);
        var E = /* @__PURE__ */ new Map(), M = function(te) {
          E.forEach(te), te(h);
        }, T = function(te) {
          return M(function(ae) {
            return ae.error(te);
          });
        }, U = 0, G = !1, J = new f.OperatorSubscriber(h, function(te) {
          try {
            var ae = a(te), ve = E.get(ae);
            if (!ve) {
              E.set(ae, ve = d ? d() : new b.Subject());
              var oe = K(ae, ve);
              if (h.next(oe), c) {
                var de = f.createOperatorSubscriber(ve, function() {
                  ve.complete(), de == null || de.unsubscribe();
                }, void 0, void 0, function() {
                  return E.delete(ae);
                });
                J.add(w.innerFrom(c(oe)).subscribe(de));
              }
            }
            ve.next(S ? S(te) : te);
          } catch (se) {
            T(se);
          }
        }, function() {
          return M(function(te) {
            return te.complete();
          });
        }, T, function() {
          return E.clear();
        }, function() {
          return G = !0, U === 0;
        });
        y.subscribe(J);
        function K(te, ae) {
          var ve = new v.Observable(function(oe) {
            U++;
            var de = ae.subscribe(oe);
            return function() {
              de.unsubscribe(), --U === 0 && G && J.unsubscribe();
            };
          });
          return ve.key = te, ve;
        }
      });
    }
    e.groupBy = o;
  }), $v = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.isEmpty = void 0;
    var v = A(), w = z();
    function b() {
      return v.operate(function(p, f) {
        p.subscribe(w.createOperatorSubscriber(f, function() {
          f.next(!1), f.complete();
        }, function() {
          f.next(!0), f.complete();
        }));
      });
    }
    e.isEmpty = b;
  }), ap = i((e) => {
    var v = e && e.__values || function(o) {
      var a = typeof Symbol == "function" && Symbol.iterator, u = a && o[a], c = 0;
      if (u)
        return u.call(o);
      if (o && typeof o.length == "number")
        return { next: function() {
          return o && c >= o.length && (o = void 0), { value: o && o[c++], done: !o };
        } };
      throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.takeLast = void 0;
    var w = De(), b = A(), p = z();
    function f(o) {
      return o <= 0 ? function() {
        return w.EMPTY;
      } : b.operate(function(a, u) {
        var c = [];
        a.subscribe(p.createOperatorSubscriber(u, function(d) {
          c.push(d), o < c.length && c.shift();
        }, function() {
          var d, y;
          try {
            for (var h = v(c), S = h.next(); !S.done; S = h.next()) {
              var E = S.value;
              u.next(E);
            }
          } catch (M) {
            d = { error: M };
          } finally {
            try {
              S && !S.done && (y = h.return) && y.call(h);
            } finally {
              if (d)
                throw d.error;
            }
          }
          u.complete();
        }, void 0, function() {
          c = null;
        }));
      });
    }
    e.takeLast = f;
  }), Lv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.last = void 0;
    var v = zt(), w = oo(), b = ap(), p = Hu(), f = Lu(), o = B();
    function a(u, c) {
      var d = arguments.length >= 2;
      return function(y) {
        return y.pipe(u ? w.filter(function(h, S) {
          return u(h, S, y);
        }) : o.identity, b.takeLast(1), d ? f.defaultIfEmpty(c) : p.throwIfEmpty(function() {
          return new v.EmptyError();
        }));
      };
    }
    e.last = a;
  }), qv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.materialize = void 0;
    var v = Or(), w = A(), b = z();
    function p() {
      return w.operate(function(f, o) {
        f.subscribe(b.createOperatorSubscriber(o, function(a) {
          o.next(v.Notification.createNext(a));
        }, function() {
          o.next(v.Notification.createComplete()), o.complete();
        }, function(a) {
          o.next(v.Notification.createError(a)), o.complete();
        }));
      });
    }
    e.materialize = p;
  }), Hv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.max = void 0;
    var v = La(), w = t();
    function b(p) {
      return v.reduce(w.isFunction(p) ? function(f, o) {
        return p(f, o) > 0 ? f : o;
      } : function(f, o) {
        return f > o ? f : o;
      });
    }
    e.max = b;
  }), Bv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.flatMap = void 0;
    var v = yt();
    e.flatMap = v.mergeMap;
  }), Wv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeMapTo = void 0;
    var v = yt(), w = t();
    function b(p, f, o) {
      return o === void 0 && (o = 1 / 0), w.isFunction(f) ? v.mergeMap(function() {
        return p;
      }, f, o) : (typeof f == "number" && (o = f), v.mergeMap(function() {
        return p;
      }, o));
    }
    e.mergeMapTo = b;
  }), Uv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeScan = void 0;
    var v = A(), w = xt();
    function b(p, f, o) {
      return o === void 0 && (o = 1 / 0), v.operate(function(a, u) {
        var c = f;
        return w.mergeInternals(a, u, function(d, y) {
          return p(c, d, y);
        }, o, function(d) {
          c = d;
        }, !1, void 0, function() {
          return c = null;
        });
      });
    }
    e.mergeScan = b;
  }), Vv = i((e) => {
    var v = e && e.__read || function(c, d) {
      var y = typeof Symbol == "function" && c[Symbol.iterator];
      if (!y)
        return c;
      var h = y.call(c), S, E = [], M;
      try {
        for (; (d === void 0 || d-- > 0) && !(S = h.next()).done; )
          E.push(S.value);
      } catch (T) {
        M = { error: T };
      } finally {
        try {
          S && !S.done && (y = h.return) && y.call(h);
        } finally {
          if (M)
            throw M.error;
        }
      }
      return E;
    }, w = e && e.__spreadArray || function(c, d) {
      for (var y = 0, h = d.length, S = c.length; y < h; y++, S++)
        c[S] = d[y];
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.merge = void 0;
    var b = A(), p = io(), f = Nt(), o = Ge(), a = Qr();
    function u() {
      for (var c = [], d = 0; d < arguments.length; d++)
        c[d] = arguments[d];
      var y = o.popScheduler(c), h = o.popNumber(c, 1 / 0);
      return c = p.argsOrArgArray(c), b.operate(function(S, E) {
        f.mergeAll(h)(a.from(w([S], v(c)), y)).subscribe(E);
      });
    }
    e.merge = u;
  }), Kv = i((e) => {
    var v = e && e.__read || function(f, o) {
      var a = typeof Symbol == "function" && f[Symbol.iterator];
      if (!a)
        return f;
      var u = a.call(f), c, d = [], y;
      try {
        for (; (o === void 0 || o-- > 0) && !(c = u.next()).done; )
          d.push(c.value);
      } catch (h) {
        y = { error: h };
      } finally {
        try {
          c && !c.done && (a = u.return) && a.call(u);
        } finally {
          if (y)
            throw y.error;
        }
      }
      return d;
    }, w = e && e.__spreadArray || function(f, o) {
      for (var a = 0, u = o.length, c = f.length; a < u; a++, c++)
        f[c] = o[a];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.mergeWith = void 0;
    var b = Vv();
    function p() {
      for (var f = [], o = 0; o < arguments.length; o++)
        f[o] = arguments[o];
      return b.merge.apply(void 0, w([], v(f)));
    }
    e.mergeWith = p;
  }), zv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.min = void 0;
    var v = La(), w = t();
    function b(p) {
      return v.reduce(w.isFunction(p) ? function(f, o) {
        return p(f, o) < 0 ? f : o;
      } : function(f, o) {
        return f < o ? f : o;
      });
    }
    e.min = b;
  }), ef = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.multicast = void 0;
    var v = ke(), w = t(), b = Zd();
    function p(f, o) {
      var a = w.isFunction(f) ? f : function() {
        return f;
      };
      return w.isFunction(o) ? b.connect(o, { connector: a }) : function(u) {
        return new v.ConnectableObservable(u, a);
      };
    }
    e.multicast = p;
  }), Qv = i((e) => {
    var v = e && e.__read || function(o, a) {
      var u = typeof Symbol == "function" && o[Symbol.iterator];
      if (!u)
        return o;
      var c = u.call(o), d, y = [], h;
      try {
        for (; (a === void 0 || a-- > 0) && !(d = c.next()).done; )
          y.push(d.value);
      } catch (S) {
        h = { error: S };
      } finally {
        try {
          d && !d.done && (u = c.return) && u.call(c);
        } finally {
          if (h)
            throw h.error;
        }
      }
      return y;
    }, w = e && e.__spreadArray || function(o, a) {
      for (var u = 0, c = a.length, d = o.length; u < c; u++, d++)
        o[d] = a[u];
      return o;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.onErrorResumeNext = e.onErrorResumeNextWith = void 0;
    var b = io(), p = Vh();
    function f() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      var u = b.argsOrArgArray(o);
      return function(c) {
        return p.onErrorResumeNext.apply(void 0, w([c], v(u)));
      };
    }
    e.onErrorResumeNextWith = f, e.onErrorResumeNext = f;
  }), Jv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.pairwise = void 0;
    var v = A(), w = z();
    function b() {
      return v.operate(function(p, f) {
        var o, a = !1;
        p.subscribe(w.createOperatorSubscriber(f, function(u) {
          var c = o;
          o = u, a && f.next([c, u]), a = !0;
        }));
      });
    }
    e.pairwise = b;
  }), Gv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.pluck = void 0;
    var v = j();
    function w() {
      for (var b = [], p = 0; p < arguments.length; p++)
        b[p] = arguments[p];
      var f = b.length;
      if (f === 0)
        throw new Error("list of properties cannot be empty.");
      return v.map(function(o) {
        for (var a = o, u = 0; u < f; u++) {
          var c = a == null ? void 0 : a[b[u]];
          if (typeof c < "u")
            a = c;
          else
            return;
        }
        return a;
      });
    }
    e.pluck = w;
  }), Yv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.publish = void 0;
    var v = he(), w = ef(), b = Zd();
    function p(f) {
      return f ? function(o) {
        return b.connect(f)(o);
      } : function(o) {
        return w.multicast(new v.Subject())(o);
      };
    }
    e.publish = p;
  }), Xv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.publishBehavior = void 0;
    var v = ce(), w = ke();
    function b(p) {
      return function(f) {
        var o = new v.BehaviorSubject(p);
        return new w.ConnectableObservable(f, function() {
          return o;
        });
      };
    }
    e.publishBehavior = b;
  }), Zv = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.publishLast = void 0;
    var v = Fe(), w = ke();
    function b() {
      return function(p) {
        var f = new v.AsyncSubject();
        return new w.ConnectableObservable(p, function() {
          return f;
        });
      };
    }
    e.publishLast = b;
  }), eb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.publishReplay = void 0;
    var v = Ee(), w = ef(), b = t();
    function p(f, o, a, u) {
      a && !b.isFunction(a) && (u = a);
      var c = b.isFunction(a) ? a : void 0;
      return function(d) {
        return w.multicast(new v.ReplaySubject(f, o, u), c)(d);
      };
    }
    e.publishReplay = p;
  }), tb = i((e) => {
    var v = e && e.__read || function(a, u) {
      var c = typeof Symbol == "function" && a[Symbol.iterator];
      if (!c)
        return a;
      var d = c.call(a), y, h = [], S;
      try {
        for (; (u === void 0 || u-- > 0) && !(y = d.next()).done; )
          h.push(y.value);
      } catch (E) {
        S = { error: E };
      } finally {
        try {
          y && !y.done && (c = d.return) && c.call(d);
        } finally {
          if (S)
            throw S.error;
        }
      }
      return h;
    }, w = e && e.__spreadArray || function(a, u) {
      for (var c = 0, d = u.length, y = a.length; c < d; c++, y++)
        a[y] = u[c];
      return a;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.raceWith = void 0;
    var b = Kh(), p = A(), f = B();
    function o() {
      for (var a = [], u = 0; u < arguments.length; u++)
        a[u] = arguments[u];
      return a.length ? p.operate(function(c, d) {
        b.raceInit(w([c], v(a)))(d);
      }) : f.identity;
    }
    e.raceWith = o;
  }), rb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.repeat = void 0;
    var v = De(), w = A(), b = z(), p = fe(), f = Ln();
    function o(a) {
      var u, c = 1 / 0, d;
      return a != null && (typeof a == "object" ? (u = a.count, c = u === void 0 ? 1 / 0 : u, d = a.delay) : c = a), c <= 0 ? function() {
        return v.EMPTY;
      } : w.operate(function(y, h) {
        var S = 0, E, M = function() {
          if (E == null || E.unsubscribe(), E = null, d != null) {
            var U = typeof d == "number" ? f.timer(d) : p.innerFrom(d(S)), G = b.createOperatorSubscriber(h, function() {
              G.unsubscribe(), T();
            });
            U.subscribe(G);
          } else
            T();
        }, T = function() {
          var U = !1;
          E = y.subscribe(b.createOperatorSubscriber(h, void 0, function() {
            ++S < c ? E ? M() : U = !0 : h.complete();
          })), U && M();
        };
        T();
      });
    }
    e.repeat = o;
  }), nb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.repeatWhen = void 0;
    var v = fe(), w = he(), b = A(), p = z();
    function f(o) {
      return b.operate(function(a, u) {
        var c, d = !1, y, h = !1, S = !1, E = function() {
          return S && h && (u.complete(), !0);
        }, M = function() {
          return y || (y = new w.Subject(), v.innerFrom(o(y)).subscribe(p.createOperatorSubscriber(u, function() {
            c ? T() : d = !0;
          }, function() {
            h = !0, E();
          }))), y;
        }, T = function() {
          S = !1, c = a.subscribe(p.createOperatorSubscriber(u, void 0, function() {
            S = !0, !E() && M().next();
          })), d && (c.unsubscribe(), c = null, d = !1, T());
        };
        T();
      });
    }
    e.repeatWhen = f;
  }), ib = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.retry = void 0;
    var v = A(), w = z(), b = B(), p = Ln(), f = fe();
    function o(a) {
      a === void 0 && (a = 1 / 0);
      var u;
      a && typeof a == "object" ? u = a : u = { count: a };
      var c = u.count, d = c === void 0 ? 1 / 0 : c, y = u.delay, h = u.resetOnSuccess, S = h === void 0 ? !1 : h;
      return d <= 0 ? b.identity : v.operate(function(E, M) {
        var T = 0, U, G = function() {
          var J = !1;
          U = E.subscribe(w.createOperatorSubscriber(M, function(K) {
            S && (T = 0), M.next(K);
          }, void 0, function(K) {
            if (T++ < d) {
              var te = function() {
                U ? (U.unsubscribe(), U = null, G()) : J = !0;
              };
              if (y != null) {
                var ae = typeof y == "number" ? p.timer(y) : f.innerFrom(y(K, T)), ve = w.createOperatorSubscriber(M, function() {
                  ve.unsubscribe(), te();
                }, function() {
                  M.complete();
                });
                ae.subscribe(ve);
              } else
                te();
            } else
              M.error(K);
          })), J && (U.unsubscribe(), U = null, G());
        };
        G();
      });
    }
    e.retry = o;
  }), ob = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.retryWhen = void 0;
    var v = fe(), w = he(), b = A(), p = z();
    function f(o) {
      return b.operate(function(a, u) {
        var c, d = !1, y, h = function() {
          c = a.subscribe(p.createOperatorSubscriber(u, void 0, void 0, function(S) {
            y || (y = new w.Subject(), v.innerFrom(o(y)).subscribe(p.createOperatorSubscriber(u, function() {
              return c ? h() : d = !0;
            }))), y && y.next(S);
          })), d && (c.unsubscribe(), c = null, d = !1, h());
        };
        h();
      });
    }
    e.retryWhen = f;
  }), sp = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sample = void 0;
    var v = fe(), w = A(), b = F(), p = z();
    function f(o) {
      return w.operate(function(a, u) {
        var c = !1, d = null;
        a.subscribe(p.createOperatorSubscriber(u, function(y) {
          c = !0, d = y;
        })), v.innerFrom(o).subscribe(p.createOperatorSubscriber(u, function() {
          if (c) {
            c = !1;
            var y = d;
            d = null, u.next(y);
          }
        }, b.noop));
      });
    }
    e.sample = f;
  }), ab = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sampleTime = void 0;
    var v = ue(), w = sp(), b = Wh();
    function p(f, o) {
      return o === void 0 && (o = v.asyncScheduler), w.sample(b.interval(f, o));
    }
    e.sampleTime = p;
  }), sb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.scan = void 0;
    var v = A(), w = Qh();
    function b(p, f) {
      return v.operate(w.scanInternals(p, f, arguments.length >= 2, !0));
    }
    e.scan = b;
  }), cb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.sequenceEqual = void 0;
    var v = A(), w = z(), b = fe();
    function p(o, a) {
      return a === void 0 && (a = function(u, c) {
        return u === c;
      }), v.operate(function(u, c) {
        var d = f(), y = f(), h = function(E) {
          c.next(E), c.complete();
        }, S = function(E, M) {
          var T = w.createOperatorSubscriber(c, function(U) {
            var G = M.buffer, J = M.complete;
            G.length === 0 ? J ? h(!1) : E.buffer.push(U) : !a(U, G.shift()) && h(!1);
          }, function() {
            E.complete = !0;
            var U = M.complete, G = M.buffer;
            U && h(G.length === 0), T == null || T.unsubscribe();
          });
          return T;
        };
        u.subscribe(S(d, y)), b.innerFrom(o).subscribe(S(y, d));
      });
    }
    e.sequenceEqual = p;
    function f() {
      return { buffer: [], complete: !1 };
    }
  }), cp = i((e) => {
    var v = e && e.__read || function(c, d) {
      var y = typeof Symbol == "function" && c[Symbol.iterator];
      if (!y)
        return c;
      var h = y.call(c), S, E = [], M;
      try {
        for (; (d === void 0 || d-- > 0) && !(S = h.next()).done; )
          E.push(S.value);
      } catch (T) {
        M = { error: T };
      } finally {
        try {
          S && !S.done && (y = h.return) && y.call(h);
        } finally {
          if (M)
            throw M.error;
        }
      }
      return E;
    }, w = e && e.__spreadArray || function(c, d) {
      for (var y = 0, h = d.length, S = c.length; y < h; y++, S++)
        c[S] = d[y];
      return c;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.share = void 0;
    var b = fe(), p = he(), f = Q(), o = A();
    function a(c) {
      c === void 0 && (c = {});
      var d = c.connector, y = d === void 0 ? function() {
        return new p.Subject();
      } : d, h = c.resetOnError, S = h === void 0 ? !0 : h, E = c.resetOnComplete, M = E === void 0 ? !0 : E, T = c.resetOnRefCountZero, U = T === void 0 ? !0 : T;
      return function(G) {
        var J, K, te, ae = 0, ve = !1, oe = !1, de = function() {
          K == null || K.unsubscribe(), K = void 0;
        }, se = function() {
          de(), J = te = void 0, ve = oe = !1;
        }, Ae = function() {
          var qe = J;
          se(), qe == null || qe.unsubscribe();
        };
        return o.operate(function(qe, Te) {
          ae++, !oe && !ve && de();
          var Ke = te = te ?? y();
          Te.add(function() {
            ae--, ae === 0 && !oe && !ve && (K = u(Ae, U));
          }), Ke.subscribe(Te), !J && ae > 0 && (J = new f.SafeSubscriber({ next: function(ot) {
            return Ke.next(ot);
          }, error: function(ot) {
            oe = !0, de(), K = u(se, S, ot), Ke.error(ot);
          }, complete: function() {
            ve = !0, de(), K = u(se, M), Ke.complete();
          } }), b.innerFrom(qe).subscribe(J));
        })(G);
      };
    }
    e.share = a;
    function u(c, d) {
      for (var y = [], h = 2; h < arguments.length; h++)
        y[h - 2] = arguments[h];
      if (d === !0) {
        c();
        return;
      }
      if (d !== !1) {
        var S = new f.SafeSubscriber({ next: function() {
          S.unsubscribe(), c();
        } });
        return b.innerFrom(d.apply(void 0, w([], v(y)))).subscribe(S);
      }
    }
  }), ub = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.shareReplay = void 0;
    var v = Ee(), w = cp();
    function b(p, f, o) {
      var a, u, c, d, y = !1;
      return p && typeof p == "object" ? (a = p.bufferSize, d = a === void 0 ? 1 / 0 : a, u = p.windowTime, f = u === void 0 ? 1 / 0 : u, c = p.refCount, y = c === void 0 ? !1 : c, o = p.scheduler) : d = p ?? 1 / 0, w.share({ connector: function() {
        return new v.ReplaySubject(d, f, o);
      }, resetOnError: !0, resetOnComplete: !1, resetOnRefCountZero: y });
    }
    e.shareReplay = b;
  }), lb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.single = void 0;
    var v = zt(), w = Bh(), b = be(), p = A(), f = z();
    function o(a) {
      return p.operate(function(u, c) {
        var d = !1, y, h = !1, S = 0;
        u.subscribe(f.createOperatorSubscriber(c, function(E) {
          h = !0, (!a || a(E, S++, u)) && (d && c.error(new w.SequenceError("Too many matching values")), d = !0, y = E);
        }, function() {
          d ? (c.next(y), c.complete()) : c.error(h ? new b.NotFoundError("No matching values") : new v.EmptyError());
        }));
      });
    }
    e.single = o;
  }), db = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.skip = void 0;
    var v = oo();
    function w(b) {
      return v.filter(function(p, f) {
        return b <= f;
      });
    }
    e.skip = w;
  }), fb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.skipLast = void 0;
    var v = B(), w = A(), b = z();
    function p(f) {
      return f <= 0 ? v.identity : w.operate(function(o, a) {
        var u = new Array(f), c = 0;
        return o.subscribe(b.createOperatorSubscriber(a, function(d) {
          var y = c++;
          if (y < f)
            u[y] = d;
          else {
            var h = y % f, S = u[h];
            u[h] = d, a.next(S);
          }
        })), function() {
          u = null;
        };
      });
    }
    e.skipLast = p;
  }), hb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.skipUntil = void 0;
    var v = A(), w = z(), b = fe(), p = F();
    function f(o) {
      return v.operate(function(a, u) {
        var c = !1, d = w.createOperatorSubscriber(u, function() {
          d == null || d.unsubscribe(), c = !0;
        }, p.noop);
        b.innerFrom(o).subscribe(d), a.subscribe(w.createOperatorSubscriber(u, function(y) {
          return c && u.next(y);
        }));
      });
    }
    e.skipUntil = f;
  }), pb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.skipWhile = void 0;
    var v = A(), w = z();
    function b(p) {
      return v.operate(function(f, o) {
        var a = !1, u = 0;
        f.subscribe(w.createOperatorSubscriber(o, function(c) {
          return (a || (a = !p(c, u++))) && o.next(c);
        }));
      });
    }
    e.skipWhile = b;
  }), yb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.startWith = void 0;
    var v = Nu(), w = Ge(), b = A();
    function p() {
      for (var f = [], o = 0; o < arguments.length; o++)
        f[o] = arguments[o];
      var a = w.popScheduler(f);
      return b.operate(function(u, c) {
        (a ? v.concat(f, u, a) : v.concat(f, u)).subscribe(c);
      });
    }
    e.startWith = p;
  }), Bu = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.switchMap = void 0;
    var v = fe(), w = A(), b = z();
    function p(f, o) {
      return w.operate(function(a, u) {
        var c = null, d = 0, y = !1, h = function() {
          return y && !c && u.complete();
        };
        a.subscribe(b.createOperatorSubscriber(u, function(S) {
          c == null || c.unsubscribe();
          var E = 0, M = d++;
          v.innerFrom(f(S, M)).subscribe(c = b.createOperatorSubscriber(u, function(T) {
            return u.next(o ? o(S, T, M, E++) : T);
          }, function() {
            c = null, h();
          }));
        }, function() {
          y = !0, h();
        }));
      });
    }
    e.switchMap = p;
  }), mb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.switchAll = void 0;
    var v = Bu(), w = B();
    function b() {
      return v.switchMap(w.identity);
    }
    e.switchAll = b;
  }), vb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.switchMapTo = void 0;
    var v = Bu(), w = t();
    function b(p, f) {
      return w.isFunction(f) ? v.switchMap(function() {
        return p;
      }, f) : v.switchMap(function() {
        return p;
      });
    }
    e.switchMapTo = b;
  }), bb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.switchScan = void 0;
    var v = Bu(), w = A();
    function b(p, f) {
      return w.operate(function(o, a) {
        var u = f;
        return v.switchMap(function(c, d) {
          return p(u, c, d);
        }, function(c, d) {
          return u = d, d;
        })(o).subscribe(a), function() {
          u = null;
        };
      });
    }
    e.switchScan = b;
  }), gb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.takeUntil = void 0;
    var v = A(), w = z(), b = fe(), p = F();
    function f(o) {
      return v.operate(function(a, u) {
        b.innerFrom(o).subscribe(w.createOperatorSubscriber(u, function() {
          return u.complete();
        }, p.noop)), !u.closed && a.subscribe(u);
      });
    }
    e.takeUntil = f;
  }), wb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.takeWhile = void 0;
    var v = A(), w = z();
    function b(p, f) {
      return f === void 0 && (f = !1), v.operate(function(o, a) {
        var u = 0;
        o.subscribe(w.createOperatorSubscriber(a, function(c) {
          var d = p(c, u++);
          (d || f) && a.next(c), !d && a.complete();
        }));
      });
    }
    e.takeWhile = b;
  }), _b = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.tap = void 0;
    var v = t(), w = A(), b = z(), p = B();
    function f(o, a, u) {
      var c = v.isFunction(o) || a || u ? { next: o, error: a, complete: u } : o;
      return c ? w.operate(function(d, y) {
        var h;
        (h = c.subscribe) === null || h === void 0 || h.call(c);
        var S = !0;
        d.subscribe(b.createOperatorSubscriber(y, function(E) {
          var M;
          (M = c.next) === null || M === void 0 || M.call(c, E), y.next(E);
        }, function() {
          var E;
          S = !1, (E = c.complete) === null || E === void 0 || E.call(c), y.complete();
        }, function(E) {
          var M;
          S = !1, (M = c.error) === null || M === void 0 || M.call(c, E), y.error(E);
        }, function() {
          var E, M;
          S && ((E = c.unsubscribe) === null || E === void 0 || E.call(c)), (M = c.finalize) === null || M === void 0 || M.call(c);
        }));
      }) : p.identity;
    }
    e.tap = f;
  }), up = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.throttle = void 0;
    var v = A(), w = z(), b = fe();
    function p(f, o) {
      return v.operate(function(a, u) {
        var c = o ?? {}, d = c.leading, y = d === void 0 ? !0 : d, h = c.trailing, S = h === void 0 ? !1 : h, E = !1, M = null, T = null, U = !1, G = function() {
          T == null || T.unsubscribe(), T = null, S && (te(), U && u.complete());
        }, J = function() {
          T = null, U && u.complete();
        }, K = function(ae) {
          return T = b.innerFrom(f(ae)).subscribe(w.createOperatorSubscriber(u, G, J));
        }, te = function() {
          if (E) {
            E = !1;
            var ae = M;
            M = null, u.next(ae), !U && K(ae);
          }
        };
        a.subscribe(w.createOperatorSubscriber(u, function(ae) {
          E = !0, M = ae, !(T && !T.closed) && (y ? te() : K(ae));
        }, function() {
          U = !0, !(S && E && T && !T.closed) && u.complete();
        }));
      });
    }
    e.throttle = p;
  }), Sb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.throttleTime = void 0;
    var v = ue(), w = up(), b = Ln();
    function p(f, o, a) {
      o === void 0 && (o = v.asyncScheduler);
      var u = b.timer(f, o);
      return w.throttle(function() {
        return u;
      }, a);
    }
    e.throttleTime = p;
  }), Eb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.TimeInterval = e.timeInterval = void 0;
    var v = ue(), w = A(), b = z();
    function p(o) {
      return o === void 0 && (o = v.asyncScheduler), w.operate(function(a, u) {
        var c = o.now();
        a.subscribe(b.createOperatorSubscriber(u, function(d) {
          var y = o.now(), h = y - c;
          c = y, u.next(new f(d, h));
        }));
      });
    }
    e.timeInterval = p;
    var f = /* @__PURE__ */ function() {
      function o(a, u) {
        this.value = a, this.interval = u;
      }
      return o;
    }();
    e.TimeInterval = f;
  }), Pb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.timeoutWith = void 0;
    var v = ue(), w = xu(), b = H();
    function p(f, o, a) {
      var u, c, d;
      if (a = a ?? v.async, w.isValidDate(f) ? u = f : typeof f == "number" && (c = f), o)
        d = function() {
          return o;
        };
      else
        throw new TypeError("No observable provided to switch to");
      if (u == null && c == null)
        throw new TypeError("No timeout provided.");
      return b.timeout({ first: u, each: c, scheduler: a, with: d });
    }
    e.timeoutWith = p;
  }), Ob = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.timestamp = void 0;
    var v = Ce(), w = j();
    function b(p) {
      return p === void 0 && (p = v.dateTimestampProvider), w.map(function(f) {
        return { value: f, timestamp: p.now() };
      });
    }
    e.timestamp = b;
  }), kb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.window = void 0;
    var v = he(), w = A(), b = z(), p = F(), f = fe();
    function o(a) {
      return w.operate(function(u, c) {
        var d = new v.Subject();
        c.next(d.asObservable());
        var y = function(h) {
          d.error(h), c.error(h);
        };
        return u.subscribe(b.createOperatorSubscriber(c, function(h) {
          return d == null ? void 0 : d.next(h);
        }, function() {
          d.complete(), c.complete();
        }, y)), f.innerFrom(a).subscribe(b.createOperatorSubscriber(c, function() {
          d.complete(), c.next(d = new v.Subject());
        }, p.noop, y)), function() {
          d == null || d.unsubscribe(), d = null;
        };
      });
    }
    e.window = o;
  }), Cb = i((e) => {
    var v = e && e.__values || function(o) {
      var a = typeof Symbol == "function" && Symbol.iterator, u = a && o[a], c = 0;
      if (u)
        return u.call(o);
      if (o && typeof o.length == "number")
        return { next: function() {
          return o && c >= o.length && (o = void 0), { value: o && o[c++], done: !o };
        } };
      throw new TypeError(a ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.windowCount = void 0;
    var w = he(), b = A(), p = z();
    function f(o, a) {
      a === void 0 && (a = 0);
      var u = a > 0 ? a : o;
      return b.operate(function(c, d) {
        var y = [new w.Subject()], h = 0;
        d.next(y[0].asObservable()), c.subscribe(p.createOperatorSubscriber(d, function(S) {
          var E, M;
          try {
            for (var T = v(y), U = T.next(); !U.done; U = T.next()) {
              var G = U.value;
              G.next(S);
            }
          } catch (te) {
            E = { error: te };
          } finally {
            try {
              U && !U.done && (M = T.return) && M.call(T);
            } finally {
              if (E)
                throw E.error;
            }
          }
          var J = h - o + 1;
          if (J >= 0 && J % u === 0 && y.shift().complete(), ++h % u === 0) {
            var K = new w.Subject();
            y.push(K), d.next(K.asObservable());
          }
        }, function() {
          for (; y.length > 0; )
            y.shift().complete();
          d.complete();
        }, function(S) {
          for (; y.length > 0; )
            y.shift().error(S);
          d.error(S);
        }, function() {
          y = null;
        }));
      });
    }
    e.windowCount = f;
  }), jb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.windowTime = void 0;
    var v = he(), w = ue(), b = _(), p = A(), f = z(), o = m(), a = Ge(), u = Xe();
    function c(d) {
      for (var y, h, S = [], E = 1; E < arguments.length; E++)
        S[E - 1] = arguments[E];
      var M = (y = a.popScheduler(S)) !== null && y !== void 0 ? y : w.asyncScheduler, T = (h = S[0]) !== null && h !== void 0 ? h : null, U = S[1] || 1 / 0;
      return p.operate(function(G, J) {
        var K = [], te = !1, ae = function(se) {
          var Ae = se.window, qe = se.subs;
          Ae.complete(), qe.unsubscribe(), o.arrRemove(K, se), te && ve();
        }, ve = function() {
          if (K) {
            var se = new b.Subscription();
            J.add(se);
            var Ae = new v.Subject(), qe = { window: Ae, subs: se, seen: 0 };
            K.push(qe), J.next(Ae.asObservable()), u.executeSchedule(se, M, function() {
              return ae(qe);
            }, d);
          }
        };
        T !== null && T >= 0 ? u.executeSchedule(J, M, ve, T, !0) : te = !0, ve();
        var oe = function(se) {
          return K.slice().forEach(se);
        }, de = function(se) {
          oe(function(Ae) {
            var qe = Ae.window;
            return se(qe);
          }), se(J), J.unsubscribe();
        };
        return G.subscribe(f.createOperatorSubscriber(J, function(se) {
          oe(function(Ae) {
            Ae.window.next(se), U <= ++Ae.seen && ae(Ae);
          });
        }, function() {
          return de(function(se) {
            return se.complete();
          });
        }, function(se) {
          return de(function(Ae) {
            return Ae.error(se);
          });
        })), function() {
          K = null;
        };
      });
    }
    e.windowTime = c;
  }), Tb = i((e) => {
    var v = e && e.__values || function(d) {
      var y = typeof Symbol == "function" && Symbol.iterator, h = y && d[y], S = 0;
      if (h)
        return h.call(d);
      if (d && typeof d.length == "number")
        return { next: function() {
          return d && S >= d.length && (d = void 0), { value: d && d[S++], done: !d };
        } };
      throw new TypeError(y ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.windowToggle = void 0;
    var w = he(), b = _(), p = A(), f = fe(), o = z(), a = F(), u = m();
    function c(d, y) {
      return p.operate(function(h, S) {
        var E = [], M = function(T) {
          for (; 0 < E.length; )
            E.shift().error(T);
          S.error(T);
        };
        f.innerFrom(d).subscribe(o.createOperatorSubscriber(S, function(T) {
          var U = new w.Subject();
          E.push(U);
          var G = new b.Subscription(), J = function() {
            u.arrRemove(E, U), U.complete(), G.unsubscribe();
          }, K;
          try {
            K = f.innerFrom(y(T));
          } catch (te) {
            M(te);
            return;
          }
          S.next(U.asObservable()), G.add(K.subscribe(o.createOperatorSubscriber(S, J, a.noop, M)));
        }, a.noop)), h.subscribe(o.createOperatorSubscriber(S, function(T) {
          var U, G, J = E.slice();
          try {
            for (var K = v(J), te = K.next(); !te.done; te = K.next()) {
              var ae = te.value;
              ae.next(T);
            }
          } catch (ve) {
            U = { error: ve };
          } finally {
            try {
              te && !te.done && (G = K.return) && G.call(K);
            } finally {
              if (U)
                throw U.error;
            }
          }
        }, function() {
          for (; 0 < E.length; )
            E.shift().complete();
          S.complete();
        }, M, function() {
          for (; 0 < E.length; )
            E.shift().unsubscribe();
        }));
      });
    }
    e.windowToggle = c;
  }), Ib = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.windowWhen = void 0;
    var v = he(), w = A(), b = z(), p = fe();
    function f(o) {
      return w.operate(function(a, u) {
        var c, d, y = function(S) {
          c.error(S), u.error(S);
        }, h = function() {
          d == null || d.unsubscribe(), c == null || c.complete(), c = new v.Subject(), u.next(c.asObservable());
          var S;
          try {
            S = p.innerFrom(o());
          } catch (E) {
            y(E);
            return;
          }
          S.subscribe(d = b.createOperatorSubscriber(u, h, h, y));
        };
        h(), a.subscribe(b.createOperatorSubscriber(u, function(S) {
          return c.next(S);
        }, function() {
          c.complete(), u.complete();
        }, y, function() {
          d == null || d.unsubscribe(), c = null;
        }));
      });
    }
    e.windowWhen = f;
  }), Mb = i((e) => {
    var v = e && e.__read || function(d, y) {
      var h = typeof Symbol == "function" && d[Symbol.iterator];
      if (!h)
        return d;
      var S = h.call(d), E, M = [], T;
      try {
        for (; (y === void 0 || y-- > 0) && !(E = S.next()).done; )
          M.push(E.value);
      } catch (U) {
        T = { error: U };
      } finally {
        try {
          E && !E.done && (h = S.return) && h.call(S);
        } finally {
          if (T)
            throw T.error;
        }
      }
      return M;
    }, w = e && e.__spreadArray || function(d, y) {
      for (var h = 0, S = y.length, E = d.length; h < S; h++, E++)
        d[E] = y[h];
      return d;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.withLatestFrom = void 0;
    var b = A(), p = z(), f = fe(), o = B(), a = F(), u = Ge();
    function c() {
      for (var d = [], y = 0; y < arguments.length; y++)
        d[y] = arguments[y];
      var h = u.popResultSelector(d);
      return b.operate(function(S, E) {
        for (var M = d.length, T = new Array(M), U = d.map(function() {
          return !1;
        }), G = !1, J = function(te) {
          f.innerFrom(d[te]).subscribe(p.createOperatorSubscriber(E, function(ae) {
            T[te] = ae, !G && !U[te] && (U[te] = !0, (G = U.every(o.identity)) && (U = null));
          }, a.noop));
        }, K = 0; K < M; K++)
          J(K);
        S.subscribe(p.createOperatorSubscriber(E, function(te) {
          if (G) {
            var ae = w([te], v(T));
            E.next(h ? h.apply(void 0, w([], v(ae))) : ae);
          }
        }));
      });
    }
    e.withLatestFrom = c;
  }), Fb = i((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.zipAll = void 0;
    var v = Xd(), w = Gh();
    function b(p) {
      return w.joinAllInternals(v.zip, p);
    }
    e.zipAll = b;
  }), Db = i((e) => {
    var v = e && e.__read || function(o, a) {
      var u = typeof Symbol == "function" && o[Symbol.iterator];
      if (!u)
        return o;
      var c = u.call(o), d, y = [], h;
      try {
        for (; (a === void 0 || a-- > 0) && !(d = c.next()).done; )
          y.push(d.value);
      } catch (S) {
        h = { error: S };
      } finally {
        try {
          d && !d.done && (u = c.return) && u.call(c);
        } finally {
          if (h)
            throw h.error;
        }
      }
      return y;
    }, w = e && e.__spreadArray || function(o, a) {
      for (var u = 0, c = a.length, d = o.length; u < c; u++, d++)
        o[d] = a[u];
      return o;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.zip = void 0;
    var b = Xd(), p = A();
    function f() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      return p.operate(function(u, c) {
        b.zip.apply(void 0, w([u], v(o))).subscribe(c);
      });
    }
    e.zip = f;
  }), Rb = i((e) => {
    var v = e && e.__read || function(f, o) {
      var a = typeof Symbol == "function" && f[Symbol.iterator];
      if (!a)
        return f;
      var u = a.call(f), c, d = [], y;
      try {
        for (; (o === void 0 || o-- > 0) && !(c = u.next()).done; )
          d.push(c.value);
      } catch (h) {
        y = { error: h };
      } finally {
        try {
          c && !c.done && (a = u.return) && a.call(u);
        } finally {
          if (y)
            throw y.error;
        }
      }
      return d;
    }, w = e && e.__spreadArray || function(f, o) {
      for (var a = 0, u = o.length, c = f.length; a < u; a++, c++)
        f[c] = o[a];
      return f;
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.zipWith = void 0;
    var b = Db();
    function p() {
      for (var f = [], o = 0; o < arguments.length; o++)
        f[o] = arguments[o];
      return b.zip.apply(void 0, w([], v(f)));
    }
    e.zipWith = p;
  }), lp = i((e) => {
    var v = e && e.__createBinding || (Object.create ? function(ao, so, kr, qn) {
      qn === void 0 && (qn = kr), Object.defineProperty(ao, qn, { enumerable: !0, get: function() {
        return so[kr];
      } });
    } : function(ao, so, kr, qn) {
      qn === void 0 && (qn = kr), ao[qn] = so[kr];
    }), w = e && e.__exportStar || function(ao, so) {
      for (var kr in ao)
        kr !== "default" && !Object.prototype.hasOwnProperty.call(so, kr) && v(so, ao, kr);
    };
    Object.defineProperty(e, "__esModule", { value: !0 }), e.interval = e.iif = e.generate = e.fromEventPattern = e.fromEvent = e.from = e.forkJoin = e.empty = e.defer = e.connectable = e.concat = e.combineLatest = e.bindNodeCallback = e.bindCallback = e.UnsubscriptionError = e.TimeoutError = e.SequenceError = e.ObjectUnsubscribedError = e.NotFoundError = e.EmptyError = e.ArgumentOutOfRangeError = e.firstValueFrom = e.lastValueFrom = e.isObservable = e.identity = e.noop = e.pipe = e.NotificationKind = e.Notification = e.Subscriber = e.Subscription = e.Scheduler = e.VirtualAction = e.VirtualTimeScheduler = e.animationFrameScheduler = e.animationFrame = e.queueScheduler = e.queue = e.asyncScheduler = e.async = e.asapScheduler = e.asap = e.AsyncSubject = e.ReplaySubject = e.BehaviorSubject = e.Subject = e.animationFrames = e.observable = e.ConnectableObservable = e.Observable = void 0, e.filter = e.expand = e.exhaustMap = e.exhaustAll = e.exhaust = e.every = e.endWith = e.elementAt = e.distinctUntilKeyChanged = e.distinctUntilChanged = e.distinct = e.dematerialize = e.delayWhen = e.delay = e.defaultIfEmpty = e.debounceTime = e.debounce = e.count = e.connect = e.concatWith = e.concatMapTo = e.concatMap = e.concatAll = e.combineLatestWith = e.combineLatestAll = e.combineAll = e.catchError = e.bufferWhen = e.bufferToggle = e.bufferTime = e.bufferCount = e.buffer = e.auditTime = e.audit = e.config = e.NEVER = e.EMPTY = e.scheduled = e.zip = e.using = e.timer = e.throwError = e.range = e.race = e.partition = e.pairs = e.onErrorResumeNext = e.of = e.never = e.merge = void 0, e.switchMap = e.switchAll = e.subscribeOn = e.startWith = e.skipWhile = e.skipUntil = e.skipLast = e.skip = e.single = e.shareReplay = e.share = e.sequenceEqual = e.scan = e.sampleTime = e.sample = e.refCount = e.retryWhen = e.retry = e.repeatWhen = e.repeat = e.reduce = e.raceWith = e.publishReplay = e.publishLast = e.publishBehavior = e.publish = e.pluck = e.pairwise = e.onErrorResumeNextWith = e.observeOn = e.multicast = e.min = e.mergeWith = e.mergeScan = e.mergeMapTo = e.mergeMap = e.flatMap = e.mergeAll = e.max = e.materialize = e.mapTo = e.map = e.last = e.isEmpty = e.ignoreElements = e.groupBy = e.first = e.findIndex = e.find = e.finalize = void 0, e.zipWith = e.zipAll = e.withLatestFrom = e.windowWhen = e.windowToggle = e.windowTime = e.windowCount = e.window = e.toArray = e.timestamp = e.timeoutWith = e.timeout = e.timeInterval = e.throwIfEmpty = e.throttleTime = e.throttle = e.tap = e.takeWhile = e.takeUntil = e.takeLast = e.take = e.switchScan = e.switchMapTo = void 0;
    var b = $();
    Object.defineProperty(e, "Observable", { enumerable: !0, get: function() {
      return b.Observable;
    } });
    var p = ke();
    Object.defineProperty(e, "ConnectableObservable", { enumerable: !0, get: function() {
      return p.ConnectableObservable;
    } });
    var f = q();
    Object.defineProperty(e, "observable", { enumerable: !0, get: function() {
      return f.observable;
    } });
    var o = Y();
    Object.defineProperty(e, "animationFrames", { enumerable: !0, get: function() {
      return o.animationFrames;
    } });
    var a = he();
    Object.defineProperty(e, "Subject", { enumerable: !0, get: function() {
      return a.Subject;
    } });
    var u = ce();
    Object.defineProperty(e, "BehaviorSubject", { enumerable: !0, get: function() {
      return u.BehaviorSubject;
    } });
    var c = Ee();
    Object.defineProperty(e, "ReplaySubject", { enumerable: !0, get: function() {
      return c.ReplaySubject;
    } });
    var d = Fe();
    Object.defineProperty(e, "AsyncSubject", { enumerable: !0, get: function() {
      return d.AsyncSubject;
    } });
    var y = ee();
    Object.defineProperty(e, "asap", { enumerable: !0, get: function() {
      return y.asap;
    } }), Object.defineProperty(e, "asapScheduler", { enumerable: !0, get: function() {
      return y.asapScheduler;
    } });
    var h = ue();
    Object.defineProperty(e, "async", { enumerable: !0, get: function() {
      return h.async;
    } }), Object.defineProperty(e, "asyncScheduler", { enumerable: !0, get: function() {
      return h.asyncScheduler;
    } });
    var S = pe();
    Object.defineProperty(e, "queue", { enumerable: !0, get: function() {
      return S.queue;
    } }), Object.defineProperty(e, "queueScheduler", { enumerable: !0, get: function() {
      return S.queueScheduler;
    } });
    var E = ne();
    Object.defineProperty(e, "animationFrame", { enumerable: !0, get: function() {
      return E.animationFrame;
    } }), Object.defineProperty(e, "animationFrameScheduler", { enumerable: !0, get: function() {
      return E.animationFrameScheduler;
    } });
    var M = _e();
    Object.defineProperty(e, "VirtualTimeScheduler", { enumerable: !0, get: function() {
      return M.VirtualTimeScheduler;
    } }), Object.defineProperty(e, "VirtualAction", { enumerable: !0, get: function() {
      return M.VirtualAction;
    } });
    var T = Z();
    Object.defineProperty(e, "Scheduler", { enumerable: !0, get: function() {
      return T.Scheduler;
    } });
    var U = _();
    Object.defineProperty(e, "Subscription", { enumerable: !0, get: function() {
      return U.Subscription;
    } });
    var G = Q();
    Object.defineProperty(e, "Subscriber", { enumerable: !0, get: function() {
      return G.Subscriber;
    } });
    var J = Or();
    Object.defineProperty(e, "Notification", { enumerable: !0, get: function() {
      return J.Notification;
    } }), Object.defineProperty(e, "NotificationKind", { enumerable: !0, get: function() {
      return J.NotificationKind;
    } });
    var K = D();
    Object.defineProperty(e, "pipe", { enumerable: !0, get: function() {
      return K.pipe;
    } });
    var te = F();
    Object.defineProperty(e, "noop", { enumerable: !0, get: function() {
      return te.noop;
    } });
    var ae = B();
    Object.defineProperty(e, "identity", { enumerable: !0, get: function() {
      return ae.identity;
    } });
    var ve = zm();
    Object.defineProperty(e, "isObservable", { enumerable: !0, get: function() {
      return ve.isObservable;
    } });
    var oe = Qm();
    Object.defineProperty(e, "lastValueFrom", { enumerable: !0, get: function() {
      return oe.lastValueFrom;
    } });
    var de = no();
    Object.defineProperty(e, "firstValueFrom", { enumerable: !0, get: function() {
      return de.firstValueFrom;
    } });
    var se = Hh();
    Object.defineProperty(e, "ArgumentOutOfRangeError", { enumerable: !0, get: function() {
      return se.ArgumentOutOfRangeError;
    } });
    var Ae = zt();
    Object.defineProperty(e, "EmptyError", { enumerable: !0, get: function() {
      return Ae.EmptyError;
    } });
    var qe = be();
    Object.defineProperty(e, "NotFoundError", { enumerable: !0, get: function() {
      return qe.NotFoundError;
    } });
    var Te = le();
    Object.defineProperty(e, "ObjectUnsubscribedError", { enumerable: !0, get: function() {
      return Te.ObjectUnsubscribedError;
    } });
    var Ke = Bh();
    Object.defineProperty(e, "SequenceError", { enumerable: !0, get: function() {
      return Ke.SequenceError;
    } });
    var ot = H();
    Object.defineProperty(e, "TimeoutError", { enumerable: !0, get: function() {
      return ot.TimeoutError;
    } });
    var ct = s();
    Object.defineProperty(e, "UnsubscriptionError", { enumerable: !0, get: function() {
      return ct.UnsubscriptionError;
    } });
    var We = Le();
    Object.defineProperty(e, "bindCallback", { enumerable: !0, get: function() {
      return We.bindCallback;
    } });
    var $t = Re();
    Object.defineProperty(e, "bindNodeCallback", { enumerable: !0, get: function() {
      return $t.bindNodeCallback;
    } });
    var qa = rt();
    Object.defineProperty(e, "combineLatest", { enumerable: !0, get: function() {
      return qa.combineLatest;
    } });
    var xb = Nu();
    Object.defineProperty(e, "concat", { enumerable: !0, get: function() {
      return xb.concat;
    } });
    var Nb = Jm();
    Object.defineProperty(e, "connectable", { enumerable: !0, get: function() {
      return Nb.connectable;
    } });
    var $b = $u();
    Object.defineProperty(e, "defer", { enumerable: !0, get: function() {
      return $b.defer;
    } });
    var Lb = De();
    Object.defineProperty(e, "empty", { enumerable: !0, get: function() {
      return Lb.empty;
    } });
    var qb = Gm();
    Object.defineProperty(e, "forkJoin", { enumerable: !0, get: function() {
      return qb.forkJoin;
    } });
    var Hb = Qr();
    Object.defineProperty(e, "from", { enumerable: !0, get: function() {
      return Hb.from;
    } });
    var Bb = Ym();
    Object.defineProperty(e, "fromEvent", { enumerable: !0, get: function() {
      return Bb.fromEvent;
    } });
    var Wb = Xm();
    Object.defineProperty(e, "fromEventPattern", { enumerable: !0, get: function() {
      return Wb.fromEventPattern;
    } });
    var Ub = Zm();
    Object.defineProperty(e, "generate", { enumerable: !0, get: function() {
      return Ub.generate;
    } });
    var Vb = ev();
    Object.defineProperty(e, "iif", { enumerable: !0, get: function() {
      return Vb.iif;
    } });
    var Kb = Wh();
    Object.defineProperty(e, "interval", { enumerable: !0, get: function() {
      return Kb.interval;
    } });
    var zb = tv();
    Object.defineProperty(e, "merge", { enumerable: !0, get: function() {
      return zb.merge;
    } });
    var Qb = Uh();
    Object.defineProperty(e, "never", { enumerable: !0, get: function() {
      return Qb.never;
    } });
    var Jb = Pr();
    Object.defineProperty(e, "of", { enumerable: !0, get: function() {
      return Jb.of;
    } });
    var Gb = Vh();
    Object.defineProperty(e, "onErrorResumeNext", { enumerable: !0, get: function() {
      return Gb.onErrorResumeNext;
    } });
    var Yb = rv();
    Object.defineProperty(e, "pairs", { enumerable: !0, get: function() {
      return Yb.pairs;
    } });
    var Xb = iv();
    Object.defineProperty(e, "partition", { enumerable: !0, get: function() {
      return Xb.partition;
    } });
    var Zb = Kh();
    Object.defineProperty(e, "race", { enumerable: !0, get: function() {
      return Zb.race;
    } });
    var eg = ov();
    Object.defineProperty(e, "range", { enumerable: !0, get: function() {
      return eg.range;
    } });
    var tg = qh();
    Object.defineProperty(e, "throwError", { enumerable: !0, get: function() {
      return tg.throwError;
    } });
    var rg = Ln();
    Object.defineProperty(e, "timer", { enumerable: !0, get: function() {
      return rg.timer;
    } });
    var ng = av();
    Object.defineProperty(e, "using", { enumerable: !0, get: function() {
      return ng.using;
    } });
    var ig = Xd();
    Object.defineProperty(e, "zip", { enumerable: !0, get: function() {
      return ig.zip;
    } });
    var og = zr();
    Object.defineProperty(e, "scheduled", { enumerable: !0, get: function() {
      return og.scheduled;
    } });
    var ag = De();
    Object.defineProperty(e, "EMPTY", { enumerable: !0, get: function() {
      return ag.EMPTY;
    } });
    var sg = Uh();
    Object.defineProperty(e, "NEVER", { enumerable: !0, get: function() {
      return sg.NEVER;
    } }), w(sv(), e);
    var cg = k();
    Object.defineProperty(e, "config", { enumerable: !0, get: function() {
      return cg.config;
    } });
    var ug = zh();
    Object.defineProperty(e, "audit", { enumerable: !0, get: function() {
      return ug.audit;
    } });
    var lg = cv();
    Object.defineProperty(e, "auditTime", { enumerable: !0, get: function() {
      return lg.auditTime;
    } });
    var dg = uv();
    Object.defineProperty(e, "buffer", { enumerable: !0, get: function() {
      return dg.buffer;
    } });
    var fg = lv();
    Object.defineProperty(e, "bufferCount", { enumerable: !0, get: function() {
      return fg.bufferCount;
    } });
    var hg = dv();
    Object.defineProperty(e, "bufferTime", { enumerable: !0, get: function() {
      return hg.bufferTime;
    } });
    var pg = fv();
    Object.defineProperty(e, "bufferToggle", { enumerable: !0, get: function() {
      return pg.bufferToggle;
    } });
    var yg = hv();
    Object.defineProperty(e, "bufferWhen", { enumerable: !0, get: function() {
      return yg.bufferWhen;
    } });
    var mg = pv();
    Object.defineProperty(e, "catchError", { enumerable: !0, get: function() {
      return mg.catchError;
    } });
    var vg = yv();
    Object.defineProperty(e, "combineAll", { enumerable: !0, get: function() {
      return vg.combineAll;
    } });
    var bg = Yh();
    Object.defineProperty(e, "combineLatestAll", { enumerable: !0, get: function() {
      return bg.combineLatestAll;
    } });
    var gg = vv();
    Object.defineProperty(e, "combineLatestWith", { enumerable: !0, get: function() {
      return gg.combineLatestWith;
    } });
    var wg = Qt();
    Object.defineProperty(e, "concatAll", { enumerable: !0, get: function() {
      return wg.concatAll;
    } });
    var _g = Xh();
    Object.defineProperty(e, "concatMap", { enumerable: !0, get: function() {
      return _g.concatMap;
    } });
    var Sg = bv();
    Object.defineProperty(e, "concatMapTo", { enumerable: !0, get: function() {
      return Sg.concatMapTo;
    } });
    var Eg = wv();
    Object.defineProperty(e, "concatWith", { enumerable: !0, get: function() {
      return Eg.concatWith;
    } });
    var Pg = Zd();
    Object.defineProperty(e, "connect", { enumerable: !0, get: function() {
      return Pg.connect;
    } });
    var Og = Sv();
    Object.defineProperty(e, "count", { enumerable: !0, get: function() {
      return Og.count;
    } });
    var kg = Ev();
    Object.defineProperty(e, "debounce", { enumerable: !0, get: function() {
      return kg.debounce;
    } });
    var Cg = Pv();
    Object.defineProperty(e, "debounceTime", { enumerable: !0, get: function() {
      return Cg.debounceTime;
    } });
    var jg = Lu();
    Object.defineProperty(e, "defaultIfEmpty", { enumerable: !0, get: function() {
      return jg.defaultIfEmpty;
    } });
    var Tg = Ov();
    Object.defineProperty(e, "delay", { enumerable: !0, get: function() {
      return Tg.delay;
    } });
    var Ig = tp();
    Object.defineProperty(e, "delayWhen", { enumerable: !0, get: function() {
      return Ig.delayWhen;
    } });
    var Mg = kv();
    Object.defineProperty(e, "dematerialize", { enumerable: !0, get: function() {
      return Mg.dematerialize;
    } });
    var Fg = Cv();
    Object.defineProperty(e, "distinct", { enumerable: !0, get: function() {
      return Fg.distinct;
    } });
    var Dg = rp();
    Object.defineProperty(e, "distinctUntilChanged", { enumerable: !0, get: function() {
      return Dg.distinctUntilChanged;
    } });
    var Rg = jv();
    Object.defineProperty(e, "distinctUntilKeyChanged", { enumerable: !0, get: function() {
      return Rg.distinctUntilKeyChanged;
    } });
    var Ag = Tv();
    Object.defineProperty(e, "elementAt", { enumerable: !0, get: function() {
      return Ag.elementAt;
    } });
    var xg = Iv();
    Object.defineProperty(e, "endWith", { enumerable: !0, get: function() {
      return xg.endWith;
    } });
    var Ng = Mv();
    Object.defineProperty(e, "every", { enumerable: !0, get: function() {
      return Ng.every;
    } });
    var $g = Fv();
    Object.defineProperty(e, "exhaust", { enumerable: !0, get: function() {
      return $g.exhaust;
    } });
    var Lg = ip();
    Object.defineProperty(e, "exhaustAll", { enumerable: !0, get: function() {
      return Lg.exhaustAll;
    } });
    var qg = np();
    Object.defineProperty(e, "exhaustMap", { enumerable: !0, get: function() {
      return qg.exhaustMap;
    } });
    var Hg = Dv();
    Object.defineProperty(e, "expand", { enumerable: !0, get: function() {
      return Hg.expand;
    } });
    var Bg = oo();
    Object.defineProperty(e, "filter", { enumerable: !0, get: function() {
      return Bg.filter;
    } });
    var Wg = Rv();
    Object.defineProperty(e, "finalize", { enumerable: !0, get: function() {
      return Wg.finalize;
    } });
    var Ug = op();
    Object.defineProperty(e, "find", { enumerable: !0, get: function() {
      return Ug.find;
    } });
    var Vg = Av();
    Object.defineProperty(e, "findIndex", { enumerable: !0, get: function() {
      return Vg.findIndex;
    } });
    var Kg = xv();
    Object.defineProperty(e, "first", { enumerable: !0, get: function() {
      return Kg.first;
    } });
    var zg = Nv();
    Object.defineProperty(e, "groupBy", { enumerable: !0, get: function() {
      return zg.groupBy;
    } });
    var Qg = Zh();
    Object.defineProperty(e, "ignoreElements", { enumerable: !0, get: function() {
      return Qg.ignoreElements;
    } });
    var Jg = $v();
    Object.defineProperty(e, "isEmpty", { enumerable: !0, get: function() {
      return Jg.isEmpty;
    } });
    var Gg = Lv();
    Object.defineProperty(e, "last", { enumerable: !0, get: function() {
      return Gg.last;
    } });
    var Yg = j();
    Object.defineProperty(e, "map", { enumerable: !0, get: function() {
      return Yg.map;
    } });
    var Xg = ep();
    Object.defineProperty(e, "mapTo", { enumerable: !0, get: function() {
      return Xg.mapTo;
    } });
    var Zg = qv();
    Object.defineProperty(e, "materialize", { enumerable: !0, get: function() {
      return Zg.materialize;
    } });
    var ew = Hv();
    Object.defineProperty(e, "max", { enumerable: !0, get: function() {
      return ew.max;
    } });
    var tw = Nt();
    Object.defineProperty(e, "mergeAll", { enumerable: !0, get: function() {
      return tw.mergeAll;
    } });
    var rw = Bv();
    Object.defineProperty(e, "flatMap", { enumerable: !0, get: function() {
      return rw.flatMap;
    } });
    var nw = yt();
    Object.defineProperty(e, "mergeMap", { enumerable: !0, get: function() {
      return nw.mergeMap;
    } });
    var iw = Wv();
    Object.defineProperty(e, "mergeMapTo", { enumerable: !0, get: function() {
      return iw.mergeMapTo;
    } });
    var ow = Uv();
    Object.defineProperty(e, "mergeScan", { enumerable: !0, get: function() {
      return ow.mergeScan;
    } });
    var aw = Kv();
    Object.defineProperty(e, "mergeWith", { enumerable: !0, get: function() {
      return aw.mergeWith;
    } });
    var sw = zv();
    Object.defineProperty(e, "min", { enumerable: !0, get: function() {
      return sw.min;
    } });
    var cw = ef();
    Object.defineProperty(e, "multicast", { enumerable: !0, get: function() {
      return cw.multicast;
    } });
    var uw = _r();
    Object.defineProperty(e, "observeOn", { enumerable: !0, get: function() {
      return uw.observeOn;
    } });
    var lw = Qv();
    Object.defineProperty(e, "onErrorResumeNextWith", { enumerable: !0, get: function() {
      return lw.onErrorResumeNextWith;
    } });
    var dw = Jv();
    Object.defineProperty(e, "pairwise", { enumerable: !0, get: function() {
      return dw.pairwise;
    } });
    var fw = Gv();
    Object.defineProperty(e, "pluck", { enumerable: !0, get: function() {
      return fw.pluck;
    } });
    var hw = Yv();
    Object.defineProperty(e, "publish", { enumerable: !0, get: function() {
      return hw.publish;
    } });
    var pw = Xv();
    Object.defineProperty(e, "publishBehavior", { enumerable: !0, get: function() {
      return pw.publishBehavior;
    } });
    var yw = Zv();
    Object.defineProperty(e, "publishLast", { enumerable: !0, get: function() {
      return yw.publishLast;
    } });
    var mw = eb();
    Object.defineProperty(e, "publishReplay", { enumerable: !0, get: function() {
      return mw.publishReplay;
    } });
    var vw = tb();
    Object.defineProperty(e, "raceWith", { enumerable: !0, get: function() {
      return vw.raceWith;
    } });
    var bw = La();
    Object.defineProperty(e, "reduce", { enumerable: !0, get: function() {
      return bw.reduce;
    } });
    var gw = rb();
    Object.defineProperty(e, "repeat", { enumerable: !0, get: function() {
      return gw.repeat;
    } });
    var ww = nb();
    Object.defineProperty(e, "repeatWhen", { enumerable: !0, get: function() {
      return ww.repeatWhen;
    } });
    var _w = ib();
    Object.defineProperty(e, "retry", { enumerable: !0, get: function() {
      return _w.retry;
    } });
    var Sw = ob();
    Object.defineProperty(e, "retryWhen", { enumerable: !0, get: function() {
      return Sw.retryWhen;
    } });
    var Ew = Ie();
    Object.defineProperty(e, "refCount", { enumerable: !0, get: function() {
      return Ew.refCount;
    } });
    var Pw = sp();
    Object.defineProperty(e, "sample", { enumerable: !0, get: function() {
      return Pw.sample;
    } });
    var Ow = ab();
    Object.defineProperty(e, "sampleTime", { enumerable: !0, get: function() {
      return Ow.sampleTime;
    } });
    var kw = sb();
    Object.defineProperty(e, "scan", { enumerable: !0, get: function() {
      return kw.scan;
    } });
    var Cw = cb();
    Object.defineProperty(e, "sequenceEqual", { enumerable: !0, get: function() {
      return Cw.sequenceEqual;
    } });
    var jw = cp();
    Object.defineProperty(e, "share", { enumerable: !0, get: function() {
      return jw.share;
    } });
    var Tw = ub();
    Object.defineProperty(e, "shareReplay", { enumerable: !0, get: function() {
      return Tw.shareReplay;
    } });
    var Iw = lb();
    Object.defineProperty(e, "single", { enumerable: !0, get: function() {
      return Iw.single;
    } });
    var Mw = db();
    Object.defineProperty(e, "skip", { enumerable: !0, get: function() {
      return Mw.skip;
    } });
    var Fw = fb();
    Object.defineProperty(e, "skipLast", { enumerable: !0, get: function() {
      return Fw.skipLast;
    } });
    var Dw = hb();
    Object.defineProperty(e, "skipUntil", { enumerable: !0, get: function() {
      return Dw.skipUntil;
    } });
    var Rw = pb();
    Object.defineProperty(e, "skipWhile", { enumerable: !0, get: function() {
      return Rw.skipWhile;
    } });
    var Aw = yb();
    Object.defineProperty(e, "startWith", { enumerable: !0, get: function() {
      return Aw.startWith;
    } });
    var xw = Sr();
    Object.defineProperty(e, "subscribeOn", { enumerable: !0, get: function() {
      return xw.subscribeOn;
    } });
    var Nw = mb();
    Object.defineProperty(e, "switchAll", { enumerable: !0, get: function() {
      return Nw.switchAll;
    } });
    var $w = Bu();
    Object.defineProperty(e, "switchMap", { enumerable: !0, get: function() {
      return $w.switchMap;
    } });
    var Lw = vb();
    Object.defineProperty(e, "switchMapTo", { enumerable: !0, get: function() {
      return Lw.switchMapTo;
    } });
    var qw = bb();
    Object.defineProperty(e, "switchScan", { enumerable: !0, get: function() {
      return qw.switchScan;
    } });
    var Hw = qu();
    Object.defineProperty(e, "take", { enumerable: !0, get: function() {
      return Hw.take;
    } });
    var Bw = ap();
    Object.defineProperty(e, "takeLast", { enumerable: !0, get: function() {
      return Bw.takeLast;
    } });
    var Ww = gb();
    Object.defineProperty(e, "takeUntil", { enumerable: !0, get: function() {
      return Ww.takeUntil;
    } });
    var Uw = wb();
    Object.defineProperty(e, "takeWhile", { enumerable: !0, get: function() {
      return Uw.takeWhile;
    } });
    var Vw = _b();
    Object.defineProperty(e, "tap", { enumerable: !0, get: function() {
      return Vw.tap;
    } });
    var Kw = up();
    Object.defineProperty(e, "throttle", { enumerable: !0, get: function() {
      return Kw.throttle;
    } });
    var zw = Sb();
    Object.defineProperty(e, "throttleTime", { enumerable: !0, get: function() {
      return zw.throttleTime;
    } });
    var Qw = Hu();
    Object.defineProperty(e, "throwIfEmpty", { enumerable: !0, get: function() {
      return Qw.throwIfEmpty;
    } });
    var Jw = Eb();
    Object.defineProperty(e, "timeInterval", { enumerable: !0, get: function() {
      return Jw.timeInterval;
    } });
    var Gw = H();
    Object.defineProperty(e, "timeout", { enumerable: !0, get: function() {
      return Gw.timeout;
    } });
    var Yw = Pb();
    Object.defineProperty(e, "timeoutWith", { enumerable: !0, get: function() {
      return Yw.timeoutWith;
    } });
    var Xw = Ob();
    Object.defineProperty(e, "timestamp", { enumerable: !0, get: function() {
      return Xw.timestamp;
    } });
    var Zw = Jh();
    Object.defineProperty(e, "toArray", { enumerable: !0, get: function() {
      return Zw.toArray;
    } });
    var e_ = kb();
    Object.defineProperty(e, "window", { enumerable: !0, get: function() {
      return e_.window;
    } });
    var t_ = Cb();
    Object.defineProperty(e, "windowCount", { enumerable: !0, get: function() {
      return t_.windowCount;
    } });
    var r_ = jb();
    Object.defineProperty(e, "windowTime", { enumerable: !0, get: function() {
      return r_.windowTime;
    } });
    var n_ = Tb();
    Object.defineProperty(e, "windowToggle", { enumerable: !0, get: function() {
      return n_.windowToggle;
    } });
    var i_ = Ib();
    Object.defineProperty(e, "windowWhen", { enumerable: !0, get: function() {
      return i_.windowWhen;
    } });
    var o_ = Mb();
    Object.defineProperty(e, "withLatestFrom", { enumerable: !0, get: function() {
      return o_.withLatestFrom;
    } });
    var a_ = Fb();
    Object.defineProperty(e, "zipAll", { enumerable: !0, get: function() {
      return a_.zipAll;
    } });
    var s_ = Rb();
    Object.defineProperty(e, "zipWith", { enumerable: !0, get: function() {
      return s_.zipWith;
    } });
  });
  Object.defineProperty(l, "__esModule", { value: !0 }), l.filterAsync = l.timer = l.throwIfEmpty = l.tap = l.takeUntil = l.switchMap = l.startWith = l.retry = l.raceWith = l.race = l.pipe = l.of = l.noop = l.NEVER = l.mergeMap = l.merge = l.map = l.lastValueFrom = l.ignoreElements = l.identity = l.fromEvent = l.from = l.forkJoin = l.firstValueFrom = l.first = l.filter = l.EMPTY = l.delay = l.defer = l.defaultIfEmpty = l.concatMap = l.catchError = l.bufferCount = void 0;
  var ze = lp();
  Object.defineProperty(l, "bufferCount", { enumerable: !0, get: function() {
    return ze.bufferCount;
  } }), Object.defineProperty(l, "catchError", { enumerable: !0, get: function() {
    return ze.catchError;
  } }), Object.defineProperty(l, "concatMap", { enumerable: !0, get: function() {
    return ze.concatMap;
  } }), Object.defineProperty(l, "defaultIfEmpty", { enumerable: !0, get: function() {
    return ze.defaultIfEmpty;
  } }), Object.defineProperty(l, "defer", { enumerable: !0, get: function() {
    return ze.defer;
  } }), Object.defineProperty(l, "delay", { enumerable: !0, get: function() {
    return ze.delay;
  } }), Object.defineProperty(l, "EMPTY", { enumerable: !0, get: function() {
    return ze.EMPTY;
  } }), Object.defineProperty(l, "filter", { enumerable: !0, get: function() {
    return ze.filter;
  } }), Object.defineProperty(l, "first", { enumerable: !0, get: function() {
    return ze.first;
  } }), Object.defineProperty(l, "firstValueFrom", { enumerable: !0, get: function() {
    return ze.firstValueFrom;
  } }), Object.defineProperty(l, "forkJoin", { enumerable: !0, get: function() {
    return ze.forkJoin;
  } }), Object.defineProperty(l, "from", { enumerable: !0, get: function() {
    return ze.from;
  } }), Object.defineProperty(l, "fromEvent", { enumerable: !0, get: function() {
    return ze.fromEvent;
  } }), Object.defineProperty(l, "identity", { enumerable: !0, get: function() {
    return ze.identity;
  } }), Object.defineProperty(l, "ignoreElements", { enumerable: !0, get: function() {
    return ze.ignoreElements;
  } }), Object.defineProperty(l, "lastValueFrom", { enumerable: !0, get: function() {
    return ze.lastValueFrom;
  } }), Object.defineProperty(l, "map", { enumerable: !0, get: function() {
    return ze.map;
  } }), Object.defineProperty(l, "merge", { enumerable: !0, get: function() {
    return ze.merge;
  } }), Object.defineProperty(l, "mergeMap", { enumerable: !0, get: function() {
    return ze.mergeMap;
  } }), Object.defineProperty(l, "NEVER", { enumerable: !0, get: function() {
    return ze.NEVER;
  } }), Object.defineProperty(l, "noop", { enumerable: !0, get: function() {
    return ze.noop;
  } }), Object.defineProperty(l, "of", { enumerable: !0, get: function() {
    return ze.of;
  } }), Object.defineProperty(l, "pipe", { enumerable: !0, get: function() {
    return ze.pipe;
  } }), Object.defineProperty(l, "race", { enumerable: !0, get: function() {
    return ze.race;
  } }), Object.defineProperty(l, "raceWith", { enumerable: !0, get: function() {
    return ze.raceWith;
  } }), Object.defineProperty(l, "retry", { enumerable: !0, get: function() {
    return ze.retry;
  } }), Object.defineProperty(l, "startWith", { enumerable: !0, get: function() {
    return ze.startWith;
  } }), Object.defineProperty(l, "switchMap", { enumerable: !0, get: function() {
    return ze.switchMap;
  } }), Object.defineProperty(l, "takeUntil", { enumerable: !0, get: function() {
    return ze.takeUntil;
  } }), Object.defineProperty(l, "tap", { enumerable: !0, get: function() {
    return ze.tap;
  } }), Object.defineProperty(l, "throwIfEmpty", { enumerable: !0, get: function() {
    return ze.throwIfEmpty;
  } }), Object.defineProperty(l, "timer", { enumerable: !0, get: function() {
    return ze.timer;
  } });
  var Wu = lp();
  function Ab(e) {
    return (0, Wu.mergeMap)((v) => (0, Wu.from)(Promise.resolve(e(v))).pipe((0, Wu.filter)((w) => w), (0, Wu.map)(() => v)));
  }
  l.filterAsync = Ab;
})(Xi);
var mt = {}, hy = {};
(function(l) {
  var i = Object.defineProperty, t = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, s = Object.prototype.hasOwnProperty, m = (D, $) => () => (D && ($ = D(D = 0)), $), _ = (D, $) => {
    for (var A in $)
      i(D, A, { get: $[A], enumerable: !0 });
  }, k = (D, $, A, z) => {
    if ($ && typeof $ == "object" || typeof $ == "function")
      for (let Ie of r($))
        !s.call(D, Ie) && Ie !== A && i(D, Ie, { get: () => $[Ie], enumerable: !(z = t($, Ie)) || z.enumerable });
    return D;
  }, I = (D) => k(i({}, "__esModule", { value: !0 }), D), x = {};
  _(x, { default: () => F });
  function F(D) {
    return { all: D = D || /* @__PURE__ */ new Map(), on: function($, A) {
      var z = D.get($);
      z ? z.push(A) : D.set($, [A]);
    }, off: function($, A) {
      var z = D.get($);
      z && (A ? z.splice(z.indexOf(A) >>> 0, 1) : D.set($, []));
    }, emit: function($, A) {
      var z = D.get($);
      z && z.slice().map(function(Ie) {
        Ie(A);
      }), (z = D.get("*")) && z.slice().map(function(Ie) {
        Ie($, A);
      });
    } };
  }
  var R = m(() => {
  }), N = l && l.__createBinding || (Object.create ? function(D, $, A, z) {
    z === void 0 && (z = A);
    var Ie = Object.getOwnPropertyDescriptor($, A);
    (!Ie || ("get" in Ie ? !$.__esModule : Ie.writable || Ie.configurable)) && (Ie = { enumerable: !0, get: function() {
      return $[A];
    } }), Object.defineProperty(D, z, Ie);
  } : function(D, $, A, z) {
    z === void 0 && (z = A), D[z] = $[A];
  }), Q = l && l.__exportStar || function(D, $) {
    for (var A in D)
      A !== "default" && !Object.prototype.hasOwnProperty.call($, A) && N($, D, A);
  }, q = l && l.__importDefault || function(D) {
    return D && D.__esModule ? D : { default: D };
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.default = void 0, Q((R(), I(x)), l);
  var B = (R(), I(x));
  Object.defineProperty(l, "default", { enumerable: !0, get: function() {
    return q(B).default;
  } });
})(hy);
var vt = {};
(function(l) {
  var r, s, m, _, I, x, F, R;
  Object.defineProperty(l, "__esModule", { value: !0 }), l.AsyncDisposableStack = l.DisposableStack = l.asyncDisposeSymbol = l.disposeSymbol = void 0, Symbol.dispose ?? (Symbol.dispose = Symbol("dispose")), Symbol.asyncDispose ?? (Symbol.asyncDispose = Symbol("asyncDispose")), l.disposeSymbol = Symbol.dispose, l.asyncDisposeSymbol = Symbol.asyncDispose;
  const k = class k {
    constructor() {
      g(this, r, !1);
      g(this, s, []);
      Oe(this, m, this.dispose);
      Oe(this, _, "DisposableStack");
    }
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
      return n(this, r);
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    dispose() {
      if (!n(this, r)) {
        O(this, r, !0);
        for (const q of n(this, s).reverse())
          q[l.disposeSymbol]();
      }
    }
    /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided `value`.
     */
    use(q) {
      return q && n(this, s).push(q), q;
    }
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided `value`.
     */
    adopt(q, B) {
      return n(this, s).push({
        [l.disposeSymbol]() {
          B(q);
        }
      }), q;
    }
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(q) {
      n(this, s).push({
        [l.disposeSymbol]() {
          q();
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
      if (n(this, r))
        throw new ReferenceError("a disposed stack can not use anything new");
      const q = new k();
      return O(q, s, n(this, s)), O(this, r, !0), q;
    }
  };
  m = l.disposeSymbol, _ = Symbol.toStringTag, r = new WeakMap(), s = new WeakMap();
  let i = k;
  l.DisposableStack = i;
  const N = class N {
    constructor() {
      g(this, I, !1);
      g(this, x, []);
      Oe(this, F, this.dispose);
      Oe(this, R, "AsyncDisposableStack");
    }
    /**
     * Returns a value indicating whether this stack has been disposed.
     */
    get disposed() {
      return n(this, I);
    }
    /**
     * Disposes each resource in the stack in the reverse order that they were added.
     */
    async dispose() {
      if (!n(this, I)) {
        O(this, I, !0);
        for (const q of n(this, x).reverse())
          await q[l.asyncDisposeSymbol]();
      }
    }
    /**
     * Adds a disposable resource to the stack, returning the resource.
     *
     * @param value - The resource to add. `null` and `undefined` will not be added,
     * but will be returned.
     * @returns The provided {@link value}.
     */
    use(q) {
      return q && n(this, x).push(q), q;
    }
    /**
     * Adds a value and associated disposal callback as a resource to the stack.
     *
     * @param value - The value to add.
     * @param onDispose - The callback to use in place of a `[disposeSymbol]()`
     * method. Will be invoked with `value` as the first parameter.
     * @returns The provided {@link value}.
     */
    adopt(q, B) {
      return n(this, x).push({
        [l.asyncDisposeSymbol]() {
          return B(q);
        }
      }), q;
    }
    /**
     * Adds a callback to be invoked when the stack is disposed.
     */
    defer(q) {
      n(this, x).push({
        [l.asyncDisposeSymbol]() {
          return q();
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
      if (n(this, I))
        throw new ReferenceError("a disposed stack can not use anything new");
      const q = new N();
      return O(q, x, n(this, x)), O(this, I, !0), q;
    }
  };
  F = l.asyncDisposeSymbol, R = Symbol.toStringTag, I = new WeakMap(), x = new WeakMap();
  let t = N;
  l.AsyncDisposableStack = t;
})(vt);
var d_ = re && re.__importDefault || function(l) {
  return l && l.__esModule ? l : { default: l };
};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.EventSubscription = mt.EventEmitter = void 0;
const f_ = d_(hy), h_ = vt;
var Qn, Jn;
class p_ {
  /**
   * @internal
   */
  constructor() {
    g(this, Qn, void 0);
    g(this, Jn, /* @__PURE__ */ new Map());
    O(this, Qn, (0, f_.default)(n(this, Jn)));
  }
  /**
   * Bind an event listener to fire when an event occurs.
   * @param type - the event type you'd like to listen to. Can be a string or symbol.
   * @param handler - the function to be called when the event occurs.
   * @returns `this` to enable you to chain method calls.
   */
  on(i, t) {
    return n(this, Qn).on(i, t), this;
  }
  /**
   * Remove an event listener from firing.
   * @param type - the event type you'd like to stop listening to.
   * @param handler - the function that should be removed.
   * @returns `this` to enable you to chain method calls.
   */
  off(i, t) {
    return n(this, Qn).off(i, t), this;
  }
  /**
   * Remove an event listener.
   *
   * @deprecated please use {@link EventEmitter.off} instead.
   */
  removeListener(i, t) {
    return this.off(i, t), this;
  }
  /**
   * Add an event listener.
   *
   * @deprecated please use {@link EventEmitter.on} instead.
   */
  addListener(i, t) {
    return this.on(i, t), this;
  }
  /**
   * Emit an event and call any associated listeners.
   *
   * @param type - the event you'd like to emit
   * @param eventData - any data you'd like to emit with the event
   * @returns `true` if there are any listeners, `false` if there are not.
   */
  emit(i, t) {
    return n(this, Qn).emit(i, t), this.listenerCount(i) > 0;
  }
  /**
   * Like `on` but the listener will only be fired once and then it will be removed.
   * @param type - the event you'd like to listen to
   * @param handler - the handler function to run when the event occurs
   * @returns `this` to enable you to chain method calls.
   */
  once(i, t) {
    const r = (s) => {
      t(s), this.off(i, r);
    };
    return this.on(i, r);
  }
  /**
   * Gets the number of listeners for a given event.
   *
   * @param type - the event to get the listener count for
   * @returns the number of listeners bound to the given event
   */
  listenerCount(i) {
    var t;
    return ((t = n(this, Jn).get(i)) == null ? void 0 : t.length) || 0;
  }
  /**
   * Removes all listeners. If given an event argument, it will remove only
   * listeners for that event.
   *
   * @param type - the event to remove listeners for.
   * @returns `this` to enable you to chain method calls.
   */
  removeAllListeners(i) {
    return i === void 0 || i === "*" ? n(this, Jn).clear() : n(this, Jn).delete(i), this;
  }
}
Qn = new WeakMap(), Jn = new WeakMap();
mt.EventEmitter = p_;
var vo, bo, go;
class y_ {
  constructor(i, t, r) {
    g(this, vo, void 0);
    g(this, bo, void 0);
    g(this, go, void 0);
    O(this, vo, i), O(this, bo, t), O(this, go, r), n(this, vo).on(n(this, bo), n(this, go));
  }
  [h_.disposeSymbol]() {
    n(this, vo).off(n(this, bo), n(this, go));
  }
}
vo = new WeakMap(), bo = new WeakMap(), go = new WeakMap();
mt.EventSubscription = y_;
var Ze = {}, Ji = {};
Object.defineProperty(Ji, "__esModule", { value: !0 });
Ji.DEFERRED_PROMISE_DEBUG_TIMEOUT = Ji.isNode = void 0;
Ji.isNode = !!(typeof process < "u" && process.version);
Ji.DEFERRED_PROMISE_DEBUG_TIMEOUT = typeof process < "u" && typeof process.env.PUPPETEER_DEFERRED_PROMISE_DEBUG_TIMEOUT < "u" ? Number(process.env.PUPPETEER_DEFERRED_PROMISE_DEBUG_TIMEOUT) : -1;
var et = {};
Object.defineProperty(et, "__esModule", { value: !0 });
et.assert = void 0;
const m_ = (l, i) => {
  if (!l)
    throw new Error(i);
};
et.assert = m_;
var dt = {};
Object.defineProperty(dt, "__esModule", { value: !0 });
dt.createProtocolErrorMessage = dt.rewriteError = dt.isErrnoException = dt.isErrorLike = void 0;
function py(l) {
  return typeof l == "object" && l !== null && "name" in l && "message" in l;
}
dt.isErrorLike = py;
function v_(l) {
  return py(l) && ("errno" in l || "code" in l || "path" in l || "syscall" in l);
}
dt.isErrnoException = v_;
function b_(l, i, t) {
  return l.message = i, l.originalMessage = t ?? l.originalMessage, l;
}
dt.rewriteError = b_;
function g_(l) {
  let i = `${l.error.message}`;
  return l.error && typeof l.error == "object" && "data" in l.error && (i += ` ${l.error.data}`), i;
}
dt.createProtocolErrorMessage = g_;
var or = {}, Uu = { exports: {} }, nf, dp;
function w_() {
  if (dp)
    return nf;
  dp = 1;
  var l = 1e3, i = l * 60, t = i * 60, r = t * 24, s = r * 7, m = r * 365.25;
  nf = function(F, R) {
    R = R || {};
    var N = typeof F;
    if (N === "string" && F.length > 0)
      return _(F);
    if (N === "number" && isFinite(F))
      return R.long ? I(F) : k(F);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(F)
    );
  };
  function _(F) {
    if (F = String(F), !(F.length > 100)) {
      var R = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        F
      );
      if (R) {
        var N = parseFloat(R[1]), Q = (R[2] || "ms").toLowerCase();
        switch (Q) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return N * m;
          case "weeks":
          case "week":
          case "w":
            return N * s;
          case "days":
          case "day":
          case "d":
            return N * r;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return N * t;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return N * i;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return N * l;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return N;
          default:
            return;
        }
      }
    }
  }
  function k(F) {
    var R = Math.abs(F);
    return R >= r ? Math.round(F / r) + "d" : R >= t ? Math.round(F / t) + "h" : R >= i ? Math.round(F / i) + "m" : R >= l ? Math.round(F / l) + "s" : F + "ms";
  }
  function I(F) {
    var R = Math.abs(F);
    return R >= r ? x(F, R, r, "day") : R >= t ? x(F, R, t, "hour") : R >= i ? x(F, R, i, "minute") : R >= l ? x(F, R, l, "second") : F + " ms";
  }
  function x(F, R, N, Q) {
    var q = R >= N * 1.5;
    return Math.round(F / N) + " " + Q + (q ? "s" : "");
  }
  return nf;
}
var of, fp;
function __() {
  if (fp)
    return of;
  fp = 1;
  function l(i) {
    r.debug = r, r.default = r, r.coerce = x, r.disable = _, r.enable = m, r.enabled = k, r.humanize = w_(), r.destroy = F, Object.keys(i).forEach((R) => {
      r[R] = i[R];
    }), r.names = [], r.skips = [], r.formatters = {};
    function t(R) {
      let N = 0;
      for (let Q = 0; Q < R.length; Q++)
        N = (N << 5) - N + R.charCodeAt(Q), N |= 0;
      return r.colors[Math.abs(N) % r.colors.length];
    }
    r.selectColor = t;
    function r(R) {
      let N, Q = null, q, B;
      function D(...$) {
        if (!D.enabled)
          return;
        const A = D, z = Number(/* @__PURE__ */ new Date()), Ie = z - (N || z);
        A.diff = Ie, A.prev = N, A.curr = z, N = z, $[0] = r.coerce($[0]), typeof $[0] != "string" && $.unshift("%O");
        let ke = 0;
        $[0] = $[0].replace(/%([a-zA-Z%])/g, (Ne, Y) => {
          if (Ne === "%%")
            return "%";
          ke++;
          const le = r.formatters[Y];
          if (typeof le == "function") {
            const he = $[ke];
            Ne = le.call(A, he), $.splice(ke, 1), ke--;
          }
          return Ne;
        }), r.formatArgs.call(A, $), (A.log || r.log).apply(A, $);
      }
      return D.namespace = R, D.useColors = r.useColors(), D.color = r.selectColor(R), D.extend = s, D.destroy = r.destroy, Object.defineProperty(D, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => Q !== null ? Q : (q !== r.namespaces && (q = r.namespaces, B = r.enabled(R)), B),
        set: ($) => {
          Q = $;
        }
      }), typeof r.init == "function" && r.init(D), D;
    }
    function s(R, N) {
      const Q = r(this.namespace + (typeof N > "u" ? ":" : N) + R);
      return Q.log = this.log, Q;
    }
    function m(R) {
      r.save(R), r.namespaces = R, r.names = [], r.skips = [];
      let N;
      const Q = (typeof R == "string" ? R : "").split(/[\s,]+/), q = Q.length;
      for (N = 0; N < q; N++)
        Q[N] && (R = Q[N].replace(/\*/g, ".*?"), R[0] === "-" ? r.skips.push(new RegExp("^" + R.slice(1) + "$")) : r.names.push(new RegExp("^" + R + "$")));
    }
    function _() {
      const R = [
        ...r.names.map(I),
        ...r.skips.map(I).map((N) => "-" + N)
      ].join(",");
      return r.enable(""), R;
    }
    function k(R) {
      if (R[R.length - 1] === "*")
        return !0;
      let N, Q;
      for (N = 0, Q = r.skips.length; N < Q; N++)
        if (r.skips[N].test(R))
          return !1;
      for (N = 0, Q = r.names.length; N < Q; N++)
        if (r.names[N].test(R))
          return !0;
      return !1;
    }
    function I(R) {
      return R.toString().substring(2, R.toString().length - 2).replace(/\.\*\?$/, "*");
    }
    function x(R) {
      return R instanceof Error ? R.stack || R.message : R;
    }
    function F() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return r.enable(r.load()), r;
  }
  return of = l, of;
}
var hp;
function yy() {
  return hp || (hp = 1, function(l, i) {
    i.formatArgs = r, i.save = s, i.load = m, i.useColors = t, i.storage = _(), i.destroy = /* @__PURE__ */ (() => {
      let I = !1;
      return () => {
        I || (I = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), i.colors = [
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
    function t() {
      return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function r(I) {
      if (I[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + I[0] + (this.useColors ? "%c " : " ") + "+" + l.exports.humanize(this.diff), !this.useColors)
        return;
      const x = "color: " + this.color;
      I.splice(1, 0, x, "color: inherit");
      let F = 0, R = 0;
      I[0].replace(/%[a-zA-Z%]/g, (N) => {
        N !== "%%" && (F++, N === "%c" && (R = F));
      }), I.splice(R, 0, x);
    }
    i.log = console.debug || console.log || (() => {
    });
    function s(I) {
      try {
        I ? i.storage.setItem("debug", I) : i.storage.removeItem("debug");
      } catch {
      }
    }
    function m() {
      let I;
      try {
        I = i.storage.getItem("debug");
      } catch {
      }
      return !I && typeof process < "u" && "env" in process && (I = process.env.DEBUG), I;
    }
    function _() {
      try {
        return localStorage;
      } catch {
      }
    }
    l.exports = __()(i);
    const { formatters: k } = l.exports;
    k.j = function(I) {
      try {
        return JSON.stringify(I);
      } catch (x) {
        return "[UnexpectedJSONParseError]: " + x.message;
      }
    };
  }(Uu, Uu.exports)), Uu.exports;
}
var S_ = re && re.__createBinding || (Object.create ? function(l, i, t, r) {
  r === void 0 && (r = t);
  var s = Object.getOwnPropertyDescriptor(i, t);
  (!s || ("get" in s ? !i.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return i[t];
  } }), Object.defineProperty(l, r, s);
} : function(l, i, t, r) {
  r === void 0 && (r = t), l[r] = i[t];
}), E_ = re && re.__setModuleDefault || (Object.create ? function(l, i) {
  Object.defineProperty(l, "default", { enumerable: !0, value: i });
} : function(l, i) {
  l.default = i;
}), P_ = re && re.__importStar || function(l) {
  if (l && l.__esModule)
    return l;
  var i = {};
  if (l != null)
    for (var t in l)
      t !== "default" && Object.prototype.hasOwnProperty.call(l, t) && S_(i, l, t);
  return E_(i, l), i;
};
Object.defineProperty(or, "__esModule", { value: !0 });
or.getCapturedLogs = or.setLogCapture = or.debug = or.importDebug = void 0;
const O_ = Ji;
let af = null;
async function my() {
  return af || (af = (await Promise.resolve().then(() => P_(yy()))).default), af;
}
or.importDebug = my;
const k_ = (l) => O_.isNode ? async (...i) => {
  vy && Dh.push(l + i), (await my())(l)(i);
} : (...i) => {
  const t = globalThis.__PUPPETEER_DEBUG;
  !t || !(t === "*" || /**
   * If the debug level is `foo*`, that means we match any prefix that
   * starts with `foo`. If the level is `foo`, we match only the prefix
   * `foo`.
   */
  (t.endsWith("*") ? l.startsWith(t) : l === t)) || console.log(`${l}:`, ...i);
};
or.debug = k_;
let Dh = [], vy = !1;
function C_(l) {
  Dh = [], vy = l;
}
or.setLogCapture = C_;
function j_() {
  return Dh;
}
or.getCapturedLogs = j_;
var st = {};
Object.defineProperty(st, "__esModule", { value: !0 });
st.errors = st.TargetCloseError = st.UnsupportedOperation = st.ProtocolError = st.TimeoutError = st.CustomError = void 0;
class wd extends Error {
  /**
   * @internal
   */
  constructor(i) {
    super(i), this.name = this.constructor.name;
  }
  /**
   * @internal
   */
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
}
st.CustomError = wd;
class by extends wd {
}
st.TimeoutError = by;
var ns, is;
class Rh extends wd {
  constructor() {
    super(...arguments);
    g(this, ns, void 0);
    g(this, is, "");
  }
  set code(t) {
    O(this, ns, t);
  }
  /**
   * @readonly
   * @public
   */
  get code() {
    return n(this, ns);
  }
  set originalMessage(t) {
    O(this, is, t);
  }
  /**
   * @readonly
   * @public
   */
  get originalMessage() {
    return n(this, is);
  }
}
ns = new WeakMap(), is = new WeakMap();
st.ProtocolError = Rh;
class T_ extends wd {
}
st.UnsupportedOperation = T_;
class I_ extends Rh {
}
st.TargetCloseError = I_;
st.errors = Object.freeze({
  TimeoutError: by,
  ProtocolError: Rh
});
const M_ = {}, F_ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: M_
}, Symbol.toStringTag, { value: "Module" })), Ia = /* @__PURE__ */ l_(F_);
(function(l) {
  var ie, Z;
  var i = re && re.__createBinding || (Object.create ? function(V, ee, ue, X) {
    X === void 0 && (X = ue);
    var ge = Object.getOwnPropertyDescriptor(ee, ue);
    (!ge || ("get" in ge ? !ee.__esModule : ge.writable || ge.configurable)) && (ge = { enumerable: !0, get: function() {
      return ee[ue];
    } }), Object.defineProperty(V, X, ge);
  } : function(V, ee, ue, X) {
    X === void 0 && (X = ue), V[X] = ee[ue];
  }), t = re && re.__setModuleDefault || (Object.create ? function(V, ee) {
    Object.defineProperty(V, "default", { enumerable: !0, value: ee });
  } : function(V, ee) {
    V.default = ee;
  }), r = re && re.__importStar || function(V) {
    if (V && V.__esModule)
      return V;
    var ee = {};
    if (V != null)
      for (var ue in V)
        ue !== "default" && Object.prototype.hasOwnProperty.call(V, ue) && i(ee, V, ue);
    return t(ee, V), ee;
  };
  Object.defineProperty(l, "__esModule", { value: !0 }), l.NETWORK_IDLE_TIME = l.waitForHTTP = l.getSourceUrlComment = l.SOURCE_URL_REGEX = l.UTILITY_WORLD_NAME = l.timeout = l.validateDialogType = l.getPageContent = l.setPageContent = l.getReadableFromProtocolStream = l.getReadableAsBuffer = l.importFSPromises = l.pageBindingInitString = l.addPageBinding = l.evaluationString = l.isDate = l.isRegExp = l.isPlainObject = l.isNumber = l.isString = l.valueFromRemoteObject = l.getSourcePuppeteerURLIfAvailable = l.withSourcePuppeteerURLIfNone = l.PuppeteerURL = l.createClientError = l.createEvaluationError = l.debugError = void 0;
  const s = Xi, m = Ji, _ = et, k = dt, I = or, x = st;
  l.debugError = (0, I.debug)("puppeteer:error");
  function F(V) {
    let ee, ue;
    if (!V.exception)
      ee = "Error", ue = V.text;
    else {
      if ((V.exception.type !== "object" || V.exception.subtype !== "error") && !V.exception.objectId)
        return $(V.exception);
      {
        const P = N(V);
        ee = P.name, ue = P.message;
      }
    }
    const X = ue.split(`
`).length, ge = new Error(ue);
    ge.name = ee;
    const pe = ge.stack.split(`
`), C = pe.splice(0, X);
    if (pe.shift(), V.stackTrace && pe.length < Error.stackTraceLimit)
      for (const P of V.stackTrace.callFrames.reverse()) {
        if (q.isPuppeteerURL(P.url) && P.url !== q.INTERNAL_URL) {
          const ne = q.parse(P.url);
          pe.unshift(`    at ${P.functionName || ne.functionName} (${ne.functionName} at ${ne.siteString}, <anonymous>:${P.lineNumber}:${P.columnNumber})`);
        } else
          pe.push(`    at ${P.functionName || "<anonymous>"} (${P.url}:${P.lineNumber}:${P.columnNumber})`);
        if (pe.length >= Error.stackTraceLimit)
          break;
      }
    return ge.stack = [...C, ...pe].join(`
`), ge;
  }
  l.createEvaluationError = F;
  function R(V) {
    let ee, ue;
    if (!V.exception)
      ee = "Error", ue = V.text;
    else {
      if ((V.exception.type !== "object" || V.exception.subtype !== "error") && !V.exception.objectId)
        return $(V.exception);
      {
        const P = N(V);
        ee = P.name, ue = P.message;
      }
    }
    const X = new Error(ue);
    X.name = ee;
    const ge = X.message.split(`
`).length, pe = X.stack.split(`
`).splice(0, ge), C = [];
    if (V.stackTrace) {
      for (const P of V.stackTrace.callFrames)
        if (C.push(`    at ${P.functionName || "<anonymous>"} (${P.url}:${P.lineNumber + 1}:${P.columnNumber + 1})`), C.length >= Error.stackTraceLimit)
          break;
    }
    return X.stack = [...pe, ...C].join(`
`), X;
  }
  l.createClientError = R;
  const N = (V) => {
    var pe, C, P, ne;
    let ee = "", ue;
    const X = ((C = (pe = V.exception) == null ? void 0 : pe.description) == null ? void 0 : C.split(`
    at `)) ?? [], ge = Math.min(((P = V.stackTrace) == null ? void 0 : P.callFrames.length) ?? 0, X.length - 1);
    return X.splice(-ge, ge), (ne = V.exception) != null && ne.className && (ee = V.exception.className), ue = X.join(`
`), ee && ue.startsWith(`${ee}: `) && (ue = ue.slice(ee.length + 2)), { message: ue, name: ee };
  }, Q = Symbol("Source URL for Puppeteer evaluation scripts"), je = class je {
    constructor() {
      g(this, ie, void 0);
      g(this, Z, void 0);
    }
    static fromCallSite(ee, ue) {
      const X = new je();
      return O(X, ie, ee), O(X, Z, ue.toString()), X;
    }
    get functionName() {
      return n(this, ie);
    }
    get siteString() {
      return n(this, Z);
    }
    toString() {
      return `pptr:${[
        n(this, ie),
        encodeURIComponent(n(this, Z))
      ].join(";")}`;
    }
  };
  ie = new WeakMap(), Z = new WeakMap(), Oe(je, "INTERNAL_URL", "pptr:internal"), Oe(je, "parse", (ee) => {
    ee = ee.slice(5);
    const [ue = "", X = ""] = ee.split(";"), ge = new je();
    return O(ge, ie, ue), O(ge, Z, decodeURIComponent(X)), ge;
  }), Oe(je, "isPuppeteerURL", (ee) => ee.startsWith("pptr:"));
  let q = je;
  l.PuppeteerURL = q;
  const B = (V, ee) => {
    if (Object.prototype.hasOwnProperty.call(ee, Q))
      return ee;
    const ue = Error.prepareStackTrace;
    Error.prepareStackTrace = (ge, pe) => pe[2];
    const X = new Error().stack;
    return Error.prepareStackTrace = ue, Object.assign(ee, {
      [Q]: q.fromCallSite(V, X)
    });
  };
  l.withSourcePuppeteerURLIfNone = B;
  const D = (V) => {
    if (Object.prototype.hasOwnProperty.call(V, Q))
      return V[Q];
  };
  l.getSourcePuppeteerURLIfAvailable = D;
  function $(V) {
    if ((0, _.assert)(!V.objectId, "Cannot extract value when objectId is given"), V.unserializableValue) {
      if (V.type === "bigint")
        return BigInt(V.unserializableValue.replace("n", ""));
      switch (V.unserializableValue) {
        case "-0":
          return -0;
        case "NaN":
          return NaN;
        case "Infinity":
          return 1 / 0;
        case "-Infinity":
          return -1 / 0;
        default:
          throw new Error("Unsupported unserializable value: " + V.unserializableValue);
      }
    }
    return V.value;
  }
  l.valueFromRemoteObject = $;
  const A = (V) => typeof V == "string" || V instanceof String;
  l.isString = A;
  const z = (V) => typeof V == "number" || V instanceof Number;
  l.isNumber = z;
  const Ie = (V) => typeof V == "object" && (V == null ? void 0 : V.constructor) === Object;
  l.isPlainObject = Ie;
  const ke = (V) => typeof V == "object" && (V == null ? void 0 : V.constructor) === RegExp;
  l.isRegExp = ke;
  const $e = (V) => typeof V == "object" && (V == null ? void 0 : V.constructor) === Date;
  l.isDate = $e;
  function Ne(V, ...ee) {
    if ((0, l.isString)(V))
      return (0, _.assert)(ee.length === 0, "Cannot evaluate a string with arguments"), V;
    function ue(X) {
      return Object.is(X, void 0) ? "undefined" : JSON.stringify(X);
    }
    return `(${V})(${ee.map(ue).join(",")})`;
  }
  l.evaluationString = Ne;
  function Y(V, ee) {
    const ue = globalThis[ee];
    Object.assign(globalThis, {
      [ee](...X) {
        const ge = globalThis[ee];
        ge.args ?? (ge.args = /* @__PURE__ */ new Map()), ge.callbacks ?? (ge.callbacks = /* @__PURE__ */ new Map());
        const pe = (ge.lastSeq ?? 0) + 1;
        return ge.lastSeq = pe, ge.args.set(pe, X), ue(JSON.stringify({
          type: V,
          name: ee,
          seq: pe,
          args: X,
          isTrivial: !X.some((C) => C instanceof Node)
        })), new Promise((C, P) => {
          ge.callbacks.set(pe, {
            resolve(ne) {
              ge.args.delete(pe), C(ne);
            },
            reject(ne) {
              ge.args.delete(pe), P(ne);
            }
          });
        });
      }
    });
  }
  l.addPageBinding = Y;
  function le(V, ee) {
    return Ne(Y, V, ee);
  }
  l.pageBindingInitString = le;
  let he = null;
  async function ce() {
    if (!he)
      try {
        he = await Promise.resolve().then(() => r(Ia));
      } catch (V) {
        throw V instanceof TypeError ? new Error("Cannot write to a path outside of a Node-like environment.") : V;
      }
    return he;
  }
  l.importFSPromises = ce;
  async function Ce(V, ee) {
    const ue = [];
    if (ee) {
      const ge = await (await ce()).open(ee, "w+");
      try {
        for await (const pe of V)
          ue.push(pe), await ge.writeFile(pe);
      } finally {
        await ge.close();
      }
    } else
      for await (const X of V)
        ue.push(X);
    try {
      return Buffer.concat(ue);
    } catch {
      return null;
    }
  }
  l.getReadableAsBuffer = Ce;
  async function Ee(V, ee) {
    if (!m.isNode)
      throw new Error("Cannot create a stream outside of Node.js environment.");
    const { Readable: ue } = await Promise.resolve().then(() => r(Ia));
    let X = !1;
    return new ue({
      async read(ge) {
        if (!X)
          try {
            const pe = await V.send("IO.read", { handle: ee, size: ge });
            this.push(pe.data, pe.base64Encoded ? "base64" : void 0), pe.eof && (X = !0, await V.send("IO.close", { handle: ee }), this.push(null));
          } catch (pe) {
            if ((0, k.isErrorLike)(pe)) {
              this.destroy(pe);
              return;
            }
            throw pe;
          }
      }
    });
  }
  l.getReadableFromProtocolStream = Ee;
  async function Fe(V, ee) {
    return await V.evaluate((ue) => {
      document.open(), document.write(ue), document.close();
    }, ee);
  }
  l.setPageContent = Fe;
  function He() {
    let V = "";
    for (const ee of document.childNodes)
      switch (ee) {
        case document.documentElement:
          V += document.documentElement.outerHTML;
          break;
        default:
          V += new XMLSerializer().serializeToString(ee);
          break;
      }
    return V;
  }
  l.getPageContent = He;
  function Pe(V) {
    let ee = null;
    return (/* @__PURE__ */ new Set([
      "alert",
      "confirm",
      "prompt",
      "beforeunload"
    ])).has(V) && (ee = V), (0, _.assert)(ee, `Unknown javascript dialog type: ${V}`), ee;
  }
  l.validateDialogType = Pe;
  function ye(V) {
    return V === 0 ? s.NEVER : (0, s.timer)(V).pipe((0, s.map)(() => {
      throw new x.TimeoutError(`Timed out after waiting ${V}ms`);
    }));
  }
  l.timeout = ye, l.UTILITY_WORLD_NAME = "__puppeteer_utility_world__", l.SOURCE_URL_REGEX = /^[\040\t]*\/\/[@#] sourceURL=\s*(\S*?)\s*$/m;
  function Ue(V) {
    return `//# sourceURL=${V}`;
  }
  l.getSourceUrlComment = Ue;
  async function W(V, ee, ue, X, ge) {
    return await (0, s.firstValueFrom)((0, s.fromEvent)(V, ee).pipe((0, s.filterAsync)(async (pe) => (0, l.isString)(ue) ? ue === pe.url() : typeof ue == "function" ? !!await ue(pe) : !1), (0, s.raceWith)(ye(X), (0, s.from)(ge.valueOrThrow()))));
  }
  l.waitForHTTP = W, l.NETWORK_IDLE_TIME = 500;
})(Ze);
Object.defineProperty(Ta, "__esModule", { value: !0 });
Ta.Browser = Ta.WEB_PERMISSION_TO_PROTOCOL_PERMISSION = void 0;
const Hn = Xi, D_ = mt, R_ = Ze, A_ = Ze, pp = vt;
Ta.WEB_PERMISSION_TO_PROTOCOL_PERMISSION = /* @__PURE__ */ new Map([
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
class x_ extends D_.EventEmitter {
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
  async waitForTarget(i, t = {}) {
    const { timeout: r = 3e4 } = t;
    return await (0, Hn.firstValueFrom)((0, Hn.merge)((0, Hn.fromEvent)(
      this,
      "targetcreated"
      /* BrowserEvent.TargetCreated */
    ), (0, Hn.fromEvent)(
      this,
      "targetchanged"
      /* BrowserEvent.TargetChanged */
    ), (0, Hn.from)(this.targets())).pipe((0, Hn.filterAsync)(i), (0, Hn.raceWith)((0, A_.timeout)(r))));
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
    return (await Promise.all(this.browserContexts().map((t) => t.pages()))).reduce((t, r) => t.concat(r), []);
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
  [pp.disposeSymbol]() {
    return void this.close().catch(R_.debugError);
  }
  /** @internal */
  [pp.asyncDisposeSymbol]() {
    return this.close();
  }
}
Ta.Browser = x_;
var _d = {};
Object.defineProperty(_d, "__esModule", { value: !0 });
_d.BrowserContext = void 0;
const N_ = mt, $_ = Ze, yp = vt;
class L_ extends N_.EventEmitter {
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
  }
  /** @internal */
  [yp.disposeSymbol]() {
    return void this.close().catch($_.debugError);
  }
  /** @internal */
  [yp.asyncDisposeSymbol]() {
    return this.close();
  }
}
_d.BrowserContext = L_;
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.CDPSession = Mt.CDPSessionEvent = void 0;
const q_ = mt;
var mp;
(function(l) {
  l.Disconnected = Symbol("CDPSession.Disconnected"), l.Swapped = Symbol("CDPSession.Swapped"), l.Ready = Symbol("CDPSession.Ready"), l.SessionAttached = "sessionattached", l.SessionDetached = "sessiondetached";
})(mp || (Mt.CDPSessionEvent = mp = {}));
let H_ = class extends q_.EventEmitter {
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
  }
};
Mt.CDPSession = H_;
var Sd = {}, wt = {};
Object.defineProperty(wt, "__esModule", { value: !0 });
wt.Deferred = void 0;
const B_ = st;
var Zr, en, Gn, os, fl, wo, as, ss, Cf;
const hl = class hl {
  constructor(i) {
    g(this, ss);
    g(this, Zr, !1);
    g(this, en, !1);
    g(this, Gn, void 0);
    g(this, os, () => {
    });
    g(this, fl, new Promise((i) => {
      O(this, os, i);
    }));
    g(this, wo, void 0);
    g(this, as, void 0);
    i && i.timeout > 0 && (O(this, as, new B_.TimeoutError(i.message)), O(this, wo, setTimeout(() => {
      this.reject(n(this, as));
    }, i.timeout)));
  }
  resolve(i) {
    n(this, en) || n(this, Zr) || (O(this, Zr, !0), L(this, ss, Cf).call(this, i));
  }
  reject(i) {
    n(this, en) || n(this, Zr) || (O(this, en, !0), L(this, ss, Cf).call(this, i));
  }
  resolved() {
    return n(this, Zr);
  }
  finished() {
    return n(this, Zr) || n(this, en);
  }
  value() {
    return n(this, Gn);
  }
  async valueOrThrow() {
    if (await n(this, fl), n(this, en))
      throw n(this, Gn);
    return n(this, Gn);
  }
  static create(i) {
    return new hl(i);
  }
  static async race(i) {
    const t = /* @__PURE__ */ new Set();
    try {
      const r = i.map((s) => s instanceof hl ? (n(s, wo) && t.add(s), s.valueOrThrow()) : s);
      return await Promise.race(r);
    } finally {
      for (const r of t)
        r.reject(new Error("Timeout cleared"));
    }
  }
};
Zr = new WeakMap(), en = new WeakMap(), Gn = new WeakMap(), os = new WeakMap(), fl = new WeakMap(), wo = new WeakMap(), as = new WeakMap(), ss = new WeakSet(), Cf = function(i) {
  clearTimeout(n(this, wo)), O(this, Gn, i), n(this, os).call(this);
};
let kf = hl;
wt.Deferred = kf;
var It = {}, Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.Target = Ma.TargetType = void 0;
var vp;
(function(l) {
  l.PAGE = "page", l.BACKGROUND_PAGE = "background_page", l.SERVICE_WORKER = "service_worker", l.SHARED_WORKER = "shared_worker", l.BROWSER = "browser", l.WEBVIEW = "webview", l.OTHER = "other", l.TAB = "tab";
})(vp || (Ma.TargetType = vp = {}));
class W_ {
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
Ma.Target = W_;
var Zi = {}, Wr = {};
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.createIncrementalIdGenerator = Wr.Callback = Wr.CallbackRegistry = void 0;
const U_ = wt, gy = dt, jf = st, V_ = Ze;
var fr, pl;
class K_ {
  constructor() {
    g(this, fr, /* @__PURE__ */ new Map());
    g(this, pl, _y());
  }
  create(i, t, r) {
    const s = new wy(n(this, pl).call(this), i, t);
    n(this, fr).set(s.id, s);
    try {
      r(s.id);
    } catch (m) {
      throw s.promise.valueOrThrow().catch(V_.debugError).finally(() => {
        n(this, fr).delete(s.id);
      }), s.reject(m), m;
    }
    return s.promise.valueOrThrow().finally(() => {
      n(this, fr).delete(s.id);
    });
  }
  reject(i, t, r) {
    const s = n(this, fr).get(i);
    s && this._reject(s, t, r);
  }
  _reject(i, t, r) {
    let s, m;
    t instanceof jf.ProtocolError ? (s = t, s.cause = i.error, m = t.message) : (s = i.error, m = t), i.reject((0, gy.rewriteError)(s, `Protocol error (${i.label}): ${m}`, r));
  }
  resolve(i, t) {
    const r = n(this, fr).get(i);
    r && r.resolve(t);
  }
  clear() {
    for (const i of n(this, fr).values())
      this._reject(i, new jf.TargetCloseError("Target closed"));
    n(this, fr).clear();
  }
}
fr = new WeakMap(), pl = new WeakMap();
Wr.CallbackRegistry = K_;
var cs, us, Yn, _o, ls;
class wy {
  constructor(i, t, r) {
    g(this, cs, void 0);
    g(this, us, new jf.ProtocolError());
    g(this, Yn, U_.Deferred.create());
    g(this, _o, void 0);
    g(this, ls, void 0);
    O(this, cs, i), O(this, ls, t), r && O(this, _o, setTimeout(() => {
      n(this, Yn).reject((0, gy.rewriteError)(n(this, us), `${t} timed out. Increase the 'protocolTimeout' setting in launch/connect calls for a higher timeout if needed.`));
    }, r));
  }
  resolve(i) {
    clearTimeout(n(this, _o)), n(this, Yn).resolve(i);
  }
  reject(i) {
    clearTimeout(n(this, _o)), n(this, Yn).reject(i);
  }
  get id() {
    return n(this, cs);
  }
  get promise() {
    return n(this, Yn);
  }
  get error() {
    return n(this, us);
  }
  get label() {
    return n(this, ls);
  }
}
cs = new WeakMap(), us = new WeakMap(), Yn = new WeakMap(), _o = new WeakMap(), ls = new WeakMap();
Wr.Callback = wy;
function _y() {
  let l = 0;
  return () => ++l;
}
Wr.createIncrementalIdGenerator = _y;
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.CdpCDPSession = void 0;
const bp = Mt, z_ = Wr, Q_ = st, gp = et, J_ = dt;
var Xn, So, Zn, er, Eo, Po;
class G_ extends bp.CDPSession {
  /**
   * @internal
   */
  constructor(t, r, s, m) {
    super();
    g(this, Xn, void 0);
    g(this, So, void 0);
    g(this, Zn, new z_.CallbackRegistry());
    g(this, er, void 0);
    g(this, Eo, void 0);
    g(this, Po, void 0);
    O(this, er, t), O(this, So, r), O(this, Xn, s), O(this, Eo, m);
  }
  /**
   * Sets the {@link CdpTarget} associated with the session instance.
   *
   * @internal
   */
  _setTarget(t) {
    O(this, Po, t);
  }
  /**
   * Gets the {@link CdpTarget} associated with the session instance.
   *
   * @internal
   */
  _target() {
    return (0, gp.assert)(n(this, Po), "Target must exist"), n(this, Po);
  }
  connection() {
    return n(this, er);
  }
  parentSession() {
    var r;
    return n(this, Eo) ? ((r = n(this, er)) == null ? void 0 : r.session(n(this, Eo))) ?? void 0 : this;
  }
  send(t, ...r) {
    if (!n(this, er))
      return Promise.reject(new Q_.TargetCloseError(`Protocol error (${t}): Session closed. Most likely the ${n(this, So)} has been closed.`));
    const s = r.length ? r[0] : void 0;
    return n(this, er)._rawSend(n(this, Zn), t, s, n(this, Xn));
  }
  /**
   * @internal
   */
  _onMessage(t) {
    t.id ? t.error ? n(this, Zn).reject(t.id, (0, J_.createProtocolErrorMessage)(t), t.error.message) : n(this, Zn).resolve(t.id, t.result) : ((0, gp.assert)(!t.id), this.emit(t.method, t.params));
  }
  /**
   * Detaches the cdpSession from the target. Once detached, the cdpSession object
   * won't emit any events and can't be used to send messages.
   */
  async detach() {
    if (!n(this, er))
      throw new Error(`Session already detached. Most likely the ${n(this, So)} has been closed.`);
    await n(this, er).send("Target.detachFromTarget", {
      sessionId: n(this, Xn)
    });
  }
  /**
   * @internal
   */
  _onClosed() {
    n(this, Zn).clear(), O(this, er, void 0), this.emit(bp.CDPSessionEvent.Disconnected, void 0);
  }
  /**
   * Returns the session's id.
   */
  id() {
    return n(this, Xn);
  }
}
Xn = new WeakMap(), So = new WeakMap(), Zn = new WeakMap(), er = new WeakMap(), Eo = new WeakMap(), Po = new WeakMap();
Zi.CdpCDPSession = G_;
var Ed = {}, Sy = {}, eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.NetworkManagerEvent = void 0;
var wp;
(function(l) {
  l.Request = Symbol("NetworkManager.Request"), l.RequestServedFromCache = Symbol("NetworkManager.RequestServedFromCache"), l.Response = Symbol("NetworkManager.Response"), l.RequestFailed = Symbol("NetworkManager.RequestFailed"), l.RequestFinished = Symbol("NetworkManager.RequestFinished");
})(wp || (eo.NetworkManagerEvent = wp = {}));
var Pd = {};
Object.defineProperty(Pd, "__esModule", { value: !0 });
Pd.paperFormats = void 0;
Pd.paperFormats = {
  letter: { width: 8.5, height: 11 },
  legal: { width: 8.5, height: 14 },
  tabloid: { width: 11, height: 17 },
  ledger: { width: 17, height: 11 },
  a0: { width: 33.1, height: 46.8 },
  a1: { width: 23.4, height: 33.1 },
  a2: { width: 16.54, height: 23.4 },
  a3: { width: 11.7, height: 16.54 },
  a4: { width: 8.27, height: 11.7 },
  a5: { width: 5.83, height: 8.27 },
  a6: { width: 4.13, height: 5.83 }
};
var Pu = {};
Object.defineProperty(Pu, "__esModule", { value: !0 });
Pu.TimeoutSettings = void 0;
const _p = 3e4;
var Ir, ei;
class Y_ {
  constructor() {
    g(this, Ir, void 0);
    g(this, ei, void 0);
    O(this, Ir, null), O(this, ei, null);
  }
  setDefaultTimeout(i) {
    O(this, Ir, i);
  }
  setDefaultNavigationTimeout(i) {
    O(this, ei, i);
  }
  navigationTimeout() {
    return n(this, ei) !== null ? n(this, ei) : n(this, Ir) !== null ? n(this, Ir) : _p;
  }
  timeout() {
    return n(this, Ir) !== null ? n(this, Ir) : _p;
  }
}
Ir = new WeakMap(), ei = new WeakMap();
Pu.TimeoutSettings = Y_;
var Ct = {}, Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
Ou.Mutex = void 0;
const X_ = wt, Z_ = vt;
var ds, fy, Oo, fs;
const es = class es {
  constructor() {
    g(this, Oo, !1);
    g(this, fs, []);
  }
  // This is FIFO.
  async acquire() {
    if (!n(this, Oo))
      return O(this, Oo, !0), new es.Guard(this);
    const i = X_.Deferred.create();
    return n(this, fs).push(i.resolve.bind(i)), await i.valueOrThrow(), new es.Guard(this);
  }
  release() {
    const i = n(this, fs).shift();
    if (!i) {
      O(this, Oo, !1);
      return;
    }
    i();
  }
};
Oo = new WeakMap(), fs = new WeakMap(), Oe(es, "Guard", (fy = class {
  constructor(t) {
    g(this, ds, void 0);
    O(this, ds, t);
  }
  [Z_.disposeSymbol]() {
    return n(this, ds).release();
  }
}, ds = new WeakMap(), fy));
let Tf = es;
Ou.Mutex = Tf;
var e0 = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, t0 = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Ct, "__esModule", { value: !0 });
Ct.guarded = Ct.invokeAtMostOnceForArguments = Ct.throwIfDisposed = Ct.moveable = void 0;
const co = vt, r0 = Ou, Ha = /* @__PURE__ */ new WeakSet();
function n0(l, i) {
  let t = !1;
  if (l.prototype[co.disposeSymbol]) {
    const r = l.prototype[co.disposeSymbol];
    l.prototype[co.disposeSymbol] = function() {
      if (Ha.has(this)) {
        Ha.delete(this);
        return;
      }
      return r.call(this);
    }, t = !0;
  }
  if (l.prototype[co.asyncDisposeSymbol]) {
    const r = l.prototype[co.asyncDisposeSymbol];
    l.prototype[co.asyncDisposeSymbol] = function() {
      if (Ha.has(this)) {
        Ha.delete(this);
        return;
      }
      return r.call(this);
    }, t = !0;
  }
  return t && (l.prototype.move = function() {
    return Ha.add(this), this;
  }), l;
}
Ct.moveable = n0;
function i0(l = (i) => `Attempted to use disposed ${i.constructor.name}.`) {
  return (i, t) => function(...r) {
    if (this.disposed)
      throw new Error(l(this));
    return i.call(this, ...r);
  };
}
Ct.throwIfDisposed = i0;
function o0(l, i) {
  const t = /* @__PURE__ */ new WeakMap();
  let r = -1;
  return function(...s) {
    if (r === -1 && (r = s.length), r !== s.length)
      throw new Error("Memoized method was called with the wrong number of arguments");
    let m = !1, _ = t;
    for (const k of s)
      _.has(k) || (m = !0, _.set(k, /* @__PURE__ */ new WeakMap())), _ = _.get(k);
    if (m)
      return l.call(this, ...s);
  };
}
Ct.invokeAtMostOnceForArguments = o0;
function a0(l = function() {
  return this;
}) {
  return (i, t) => {
    const r = /* @__PURE__ */ new WeakMap();
    return async function(...s) {
      const m = { stack: [], error: void 0, hasError: !1 };
      try {
        const _ = l.call(this);
        let k = r.get(_);
        k || (k = new r0.Mutex(), r.set(_, k));
        const I = e0(m, await k.acquire(), !0);
        return await i.call(this, ...s);
      } catch (_) {
        m.error = _, m.hasError = !0;
      } finally {
        const _ = t0(m);
        _ && await _;
      }
    };
  };
}
Ct.guarded = a0;
var Ah = {};
(function(l) {
  var B, D, $, A, z, Ie, ke, Ey, Ne, Py, le, Oy, ce, ky, Ee, Fe, Pe, ye, W, Z, je, V, ue;
  var i = re && re.__addDisposableResource || function(ge, pe, C) {
    if (pe != null) {
      if (typeof pe != "object" && typeof pe != "function")
        throw new TypeError("Object expected.");
      var P;
      if (C) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        P = pe[Symbol.asyncDispose];
      }
      if (P === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        P = pe[Symbol.dispose];
      }
      if (typeof P != "function")
        throw new TypeError("Object not disposable.");
      ge.stack.push({ value: pe, dispose: P, async: C });
    } else
      C && ge.stack.push({ async: !0 });
    return pe;
  }, t = re && re.__disposeResources || /* @__PURE__ */ function(ge) {
    return function(pe) {
      function C(ne) {
        pe.error = pe.hasError ? new ge(ne, pe.error, "An error was suppressed during disposal.") : ne, pe.hasError = !0;
      }
      function P() {
        for (; pe.stack.length; ) {
          var ne = pe.stack.pop();
          try {
            var _e = ne.dispose && ne.dispose.call(ne.value);
            if (ne.async)
              return Promise.resolve(_e).then(P, function(De) {
                return C(De), P();
              });
          } catch (De) {
            C(De);
          }
        }
        if (pe.hasError)
          throw pe.error;
      }
      return P();
    };
  }(typeof SuppressedError == "function" ? SuppressedError : function(ge, pe, C) {
    var P = new Error(C);
    return P.name = "SuppressedError", P.error = ge, P.suppressed = pe, P;
  });
  Object.defineProperty(l, "__esModule", { value: !0 }), l.RETRY_DELAY = l.RaceLocator = l.NodeLocator = l.MappedLocator = l.FilteredLocator = l.DelegatedLocator = l.FunctionLocator = l.Locator = l.LocatorEmittedEvents = l.LocatorEvent = void 0;
  const r = Xi, s = mt, m = Ze;
  var _;
  (function(ge) {
    ge.Action = "action";
  })(_ || (l.LocatorEmittedEvents = l.LocatorEvent = _ = {}));
  class k extends s.EventEmitter {
    constructor() {
      super(...arguments);
      g(this, ke);
      g(this, Ne);
      g(this, le);
      g(this, ce);
      /**
       * @internal
       */
      Oe(this, "visibility", null);
      /**
       * @internal
       */
      Oe(this, "_timeout", 3e4);
      g(this, B, !0);
      g(this, D, !0);
      g(this, $, !0);
      /**
       * @internal
       */
      Oe(this, "operators", {
        conditions: (C, P) => (0, r.mergeMap)((ne) => (0, r.merge)(...C.map((_e) => _e(ne, P))).pipe((0, r.defaultIfEmpty)(ne))),
        retryAndRaceWithSignalAndTimer: (C) => {
          const P = [];
          return C && P.push((0, r.fromEvent)(C, "abort").pipe((0, r.map)(() => {
            throw C.reason;
          }))), P.push((0, m.timeout)(this._timeout)), (0, r.pipe)((0, r.retry)({ delay: l.RETRY_DELAY }), (0, r.raceWith)(...P));
        }
      });
      /**
       * If the element has a "disabled" property, wait for the element to be
       * enabled.
       */
      g(this, A, (C, P) => n(this, D) ? (0, r.from)(C.frame.waitForFunction((ne) => ne instanceof HTMLElement ? ![
        "BUTTON",
        "INPUT",
        "SELECT",
        "TEXTAREA",
        "OPTION",
        "OPTGROUP"
      ].includes(ne.nodeName) || !ne.hasAttribute("disabled") : !0, {
        timeout: this._timeout,
        signal: P
      }, C)).pipe((0, r.ignoreElements)()) : r.EMPTY);
      /**
       * Compares the bounding box of the element for two consecutive animation
       * frames and waits till they are the same.
       */
      g(this, z, (C) => n(this, $) ? (0, r.defer)(() => (0, r.from)(C.evaluate((P) => new Promise((ne) => {
        window.requestAnimationFrame(() => {
          const _e = P.getBoundingClientRect();
          window.requestAnimationFrame(() => {
            const De = P.getBoundingClientRect();
            ne([
              {
                x: _e.x,
                y: _e.y,
                width: _e.width,
                height: _e.height
              },
              {
                x: De.x,
                y: De.y,
                width: De.width,
                height: De.height
              }
            ]);
          });
        });
      })))).pipe((0, r.first)(([P, ne]) => P.x === ne.x && P.y === ne.y && P.width === ne.width && P.height === ne.height), (0, r.retry)({ delay: l.RETRY_DELAY }), (0, r.ignoreElements)()) : r.EMPTY);
      /**
       * Checks if the element is in the viewport and auto-scrolls it if it is not.
       */
      g(this, Ie, (C) => n(this, B) ? (0, r.from)(C.isIntersectingViewport({ threshold: 0 })).pipe((0, r.filter)((P) => !P), (0, r.mergeMap)(() => (0, r.from)(C.scrollIntoView())), (0, r.mergeMap)(() => (0, r.defer)(() => (0, r.from)(C.isIntersectingViewport({ threshold: 0 }))).pipe((0, r.first)(r.identity), (0, r.retry)({ delay: l.RETRY_DELAY }), (0, r.ignoreElements)()))) : r.EMPTY);
    }
    /**
     * Creates a race between multiple locators but ensures that only a single one
     * acts.
     *
     * @public
     */
    static race(C) {
      return q.create(C);
    }
    // Determines when the locator will timeout for actions.
    get timeout() {
      return this._timeout;
    }
    setTimeout(C) {
      const P = this._clone();
      return P._timeout = C, P;
    }
    setVisibility(C) {
      const P = this._clone();
      return P.visibility = C, P;
    }
    setWaitForEnabled(C) {
      const P = this._clone();
      return O(P, D, C), P;
    }
    setEnsureElementIsInTheViewport(C) {
      const P = this._clone();
      return O(P, B, C), P;
    }
    setWaitForStableBoundingBox(C) {
      const P = this._clone();
      return O(P, $, C), P;
    }
    /**
     * @internal
     */
    copyOptions(C) {
      return this._timeout = C._timeout, this.visibility = C.visibility, O(this, D, n(C, D)), O(this, B, n(C, B)), O(this, $, n(C, $)), this;
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
    async waitHandle(C) {
      return await (0, r.firstValueFrom)(this._wait(C).pipe(this.operators.retryAndRaceWithSignalAndTimer(C == null ? void 0 : C.signal)));
    }
    /**
     * Waits for the locator to get the serialized value from the page.
     *
     * Note this requires the value to be JSON-serializable.
     *
     * @public
     */
    async wait(C) {
      const P = { stack: [], error: void 0, hasError: !1 };
      try {
        return await i(P, await this.waitHandle(C), !1).jsonValue();
      } catch (ne) {
        P.error = ne, P.hasError = !0;
      } finally {
        t(P);
      }
    }
    /**
     * Maps the locator using the provided mapper.
     *
     * @public
     */
    map(C) {
      return new R(this._clone(), (P) => P.evaluateHandle(C));
    }
    /**
     * Creates an expectation that is evaluated against located values.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @public
     */
    filter(C) {
      return new F(this._clone(), async (P, ne) => (await P.frame.waitForFunction(C, { signal: ne, timeout: this._timeout }, P), !0));
    }
    /**
     * Creates an expectation that is evaluated against located handles.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @internal
     */
    filterHandle(C) {
      return new F(this._clone(), C);
    }
    /**
     * Maps the locator using the provided mapper.
     *
     * @internal
     */
    mapHandle(C) {
      return new R(this._clone(), C);
    }
    click(C) {
      return (0, r.firstValueFrom)(L(this, ke, Ey).call(this, C));
    }
    /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. contenteditable, selector, inputs are
     * supported.
     */
    fill(C, P) {
      return (0, r.firstValueFrom)(L(this, Ne, Py).call(this, C, P));
    }
    hover(C) {
      return (0, r.firstValueFrom)(L(this, le, Oy).call(this, C));
    }
    scroll(C) {
      return (0, r.firstValueFrom)(L(this, ce, ky).call(this, C));
    }
  }
  B = new WeakMap(), D = new WeakMap(), $ = new WeakMap(), A = new WeakMap(), z = new WeakMap(), Ie = new WeakMap(), ke = new WeakSet(), Ey = function(C) {
    const P = C == null ? void 0 : C.signal;
    return this._wait(C).pipe(this.operators.conditions([
      n(this, Ie),
      n(this, z),
      n(this, A)
    ], P), (0, r.tap)(() => this.emit(_.Action, void 0)), (0, r.mergeMap)((ne) => (0, r.from)(ne.click(C)).pipe((0, r.catchError)((_e) => {
      throw ne.dispose().catch(m.debugError), _e;
    }))), this.operators.retryAndRaceWithSignalAndTimer(P));
  }, Ne = new WeakSet(), Py = function(C, P) {
    const ne = P == null ? void 0 : P.signal;
    return this._wait(P).pipe(this.operators.conditions([
      n(this, Ie),
      n(this, z),
      n(this, A)
    ], ne), (0, r.tap)(() => this.emit(_.Action, void 0)), (0, r.mergeMap)((_e) => (0, r.from)(_e.evaluate((De) => De instanceof HTMLSelectElement ? "select" : De instanceof HTMLTextAreaElement ? "typeable-input" : De instanceof HTMLInputElement ? (/* @__PURE__ */ new Set([
      "textarea",
      "text",
      "url",
      "tel",
      "search",
      "password",
      "number",
      "email"
    ])).has(De.type) ? "typeable-input" : "other-input" : De.isContentEditable ? "contenteditable" : "unknown")).pipe((0, r.mergeMap)((De) => {
      switch (De) {
        case "select":
          return (0, r.from)(_e.select(C).then(r.noop));
        case "contenteditable":
        case "typeable-input":
          return (0, r.from)(_e.evaluate((xe, Ge) => {
            const tt = xe.isContentEditable ? xe.innerText : xe.value;
            if (Ge.length <= tt.length || !Ge.startsWith(xe.value))
              return xe.isContentEditable ? xe.innerText = "" : xe.value = "", Ge;
            const _t = xe.isContentEditable ? xe.innerText : xe.value;
            return xe.isContentEditable ? (xe.innerText = "", xe.innerText = _t) : (xe.value = "", xe.value = _t), Ge.substring(_t.length);
          }, C)).pipe((0, r.mergeMap)((xe) => (0, r.from)(_e.type(xe))));
        case "other-input":
          return (0, r.from)(_e.focus()).pipe((0, r.mergeMap)(() => (0, r.from)(_e.evaluate((xe, Ge) => {
            xe.value = Ge, xe.dispatchEvent(new Event("input", { bubbles: !0 })), xe.dispatchEvent(new Event("change", { bubbles: !0 }));
          }, C))));
        case "unknown":
          throw new Error("Element cannot be filled out.");
      }
    })).pipe((0, r.catchError)((De) => {
      throw _e.dispose().catch(m.debugError), De;
    }))), this.operators.retryAndRaceWithSignalAndTimer(ne));
  }, le = new WeakSet(), Oy = function(C) {
    const P = C == null ? void 0 : C.signal;
    return this._wait(C).pipe(this.operators.conditions([
      n(this, Ie),
      n(this, z)
    ], P), (0, r.tap)(() => this.emit(_.Action, void 0)), (0, r.mergeMap)((ne) => (0, r.from)(ne.hover()).pipe((0, r.catchError)((_e) => {
      throw ne.dispose().catch(m.debugError), _e;
    }))), this.operators.retryAndRaceWithSignalAndTimer(P));
  }, ce = new WeakSet(), ky = function(C) {
    const P = C == null ? void 0 : C.signal;
    return this._wait(C).pipe(this.operators.conditions([
      n(this, Ie),
      n(this, z)
    ], P), (0, r.tap)(() => this.emit(_.Action, void 0)), (0, r.mergeMap)((ne) => (0, r.from)(ne.evaluate((_e, De, xe) => {
      De !== void 0 && (_e.scrollTop = De), xe !== void 0 && (_e.scrollLeft = xe);
    }, C == null ? void 0 : C.scrollTop, C == null ? void 0 : C.scrollLeft)).pipe((0, r.catchError)((_e) => {
      throw ne.dispose().catch(m.debugError), _e;
    }))), this.operators.retryAndRaceWithSignalAndTimer(P));
  }, l.Locator = k;
  const He = class He extends k {
    constructor(C, P) {
      super();
      g(this, Ee, void 0);
      g(this, Fe, void 0);
      O(this, Ee, C), O(this, Fe, P);
    }
    static create(C, P) {
      return new He(C, P).setTimeout("getDefaultTimeout" in C ? C.getDefaultTimeout() : C.page().getDefaultTimeout());
    }
    _clone() {
      return new He(n(this, Ee), n(this, Fe));
    }
    _wait(C) {
      const P = C == null ? void 0 : C.signal;
      return (0, r.defer)(() => (0, r.from)(n(this, Ee).waitForFunction(n(this, Fe), {
        timeout: this.timeout,
        signal: P
      }))).pipe((0, r.throwIfEmpty)());
    }
  };
  Ee = new WeakMap(), Fe = new WeakMap();
  let I = He;
  l.FunctionLocator = I;
  class x extends k {
    constructor(C) {
      super();
      g(this, Pe, void 0);
      O(this, Pe, C), this.copyOptions(n(this, Pe));
    }
    get delegate() {
      return n(this, Pe);
    }
    setTimeout(C) {
      const P = super.setTimeout(C);
      return O(P, Pe, n(this, Pe).setTimeout(C)), P;
    }
    setVisibility(C) {
      const P = super.setVisibility(C);
      return O(P, Pe, n(P, Pe).setVisibility(C)), P;
    }
    setWaitForEnabled(C) {
      const P = super.setWaitForEnabled(C);
      return O(P, Pe, n(this, Pe).setWaitForEnabled(C)), P;
    }
    setEnsureElementIsInTheViewport(C) {
      const P = super.setEnsureElementIsInTheViewport(C);
      return O(P, Pe, n(this, Pe).setEnsureElementIsInTheViewport(C)), P;
    }
    setWaitForStableBoundingBox(C) {
      const P = super.setWaitForStableBoundingBox(C);
      return O(P, Pe, n(this, Pe).setWaitForStableBoundingBox(C)), P;
    }
  }
  Pe = new WeakMap(), l.DelegatedLocator = x;
  const Ue = class Ue extends x {
    constructor(C, P) {
      super(C);
      g(this, ye, void 0);
      O(this, ye, P);
    }
    _clone() {
      return new Ue(this.delegate.clone(), n(this, ye)).copyOptions(this);
    }
    _wait(C) {
      return this.delegate._wait(C).pipe((0, r.mergeMap)((P) => (0, r.from)(Promise.resolve(n(this, ye).call(this, P, C == null ? void 0 : C.signal))).pipe((0, r.filter)((ne) => ne), (0, r.map)(() => P))), (0, r.throwIfEmpty)());
    }
  };
  ye = new WeakMap();
  let F = Ue;
  l.FilteredLocator = F;
  const ie = class ie extends x {
    constructor(C, P) {
      super(C);
      g(this, W, void 0);
      O(this, W, P);
    }
    _clone() {
      return new ie(this.delegate.clone(), n(this, W)).copyOptions(this);
    }
    _wait(C) {
      return this.delegate._wait(C).pipe((0, r.mergeMap)((P) => (0, r.from)(Promise.resolve(n(this, W).call(this, P, C == null ? void 0 : C.signal)))));
    }
  };
  W = new WeakMap();
  let R = ie;
  l.MappedLocator = R;
  const ee = class ee extends k {
    constructor(C, P) {
      super();
      g(this, Z, void 0);
      g(this, je, void 0);
      /**
       * Waits for the element to become visible or hidden. visibility === 'visible'
       * means that the element has a computed style, the visibility property other
       * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
       * 'hidden' means the opposite of that.
       */
      g(this, V, (C) => this.visibility ? (() => {
        switch (this.visibility) {
          case "hidden":
            return (0, r.defer)(() => (0, r.from)(C.isHidden()));
          case "visible":
            return (0, r.defer)(() => (0, r.from)(C.isVisible()));
        }
      })().pipe((0, r.first)(r.identity), (0, r.retry)({ delay: l.RETRY_DELAY }), (0, r.ignoreElements)()) : r.EMPTY);
      O(this, Z, C), O(this, je, P);
    }
    static create(C, P) {
      return new ee(C, P).setTimeout("getDefaultTimeout" in C ? C.getDefaultTimeout() : C.page().getDefaultTimeout());
    }
    _clone() {
      return new ee(n(this, Z), n(this, je)).copyOptions(this);
    }
    _wait(C) {
      const P = C == null ? void 0 : C.signal;
      return (0, r.defer)(() => (0, r.from)(n(this, Z).waitForSelector(n(this, je), {
        visible: !1,
        timeout: this._timeout,
        signal: P
      }))).pipe((0, r.filter)((ne) => ne !== null), (0, r.throwIfEmpty)(), this.operators.conditions([n(this, V)], P));
    }
  };
  Z = new WeakMap(), je = new WeakMap(), V = new WeakMap();
  let N = ee;
  l.NodeLocator = N;
  function Q(ge) {
    for (const pe of ge)
      if (!(pe instanceof k))
        throw new Error("Unknown locator for race candidate");
    return ge;
  }
  const X = class X extends k {
    constructor(C) {
      super();
      g(this, ue, void 0);
      O(this, ue, C);
    }
    static create(C) {
      const P = Q(C);
      return new X(P);
    }
    _clone() {
      return new X(n(this, ue).map((C) => C.clone())).copyOptions(this);
    }
    _wait(C) {
      return (0, r.race)(...n(this, ue).map((P) => P._wait(C)));
    }
  };
  ue = new WeakMap();
  let q = X;
  l.RaceLocator = q, l.RETRY_DELAY = 100;
})(Ah);
var Ba = {}, Sp;
function s0() {
  if (Sp)
    return Ba;
  Sp = 1;
  var l = re && re.__runInitializers || function(D, $, A) {
    for (var z = arguments.length > 2, Ie = 0; Ie < $.length; Ie++)
      A = z ? $[Ie].call(D, A) : $[Ie].call(D);
    return z ? A : void 0;
  }, i = re && re.__esDecorate || function(D, $, A, z, Ie, ke) {
    function $e(ye) {
      if (ye !== void 0 && typeof ye != "function")
        throw new TypeError("Function expected");
      return ye;
    }
    for (var Ne = z.kind, Y = Ne === "getter" ? "get" : Ne === "setter" ? "set" : "value", le = !$ && D ? z.static ? D : D.prototype : null, he = $ || (le ? Object.getOwnPropertyDescriptor(le, z.name) : {}), ce, Ce = !1, Ee = A.length - 1; Ee >= 0; Ee--) {
      var Fe = {};
      for (var He in z)
        Fe[He] = He === "access" ? {} : z[He];
      for (var He in z.access)
        Fe.access[He] = z.access[He];
      Fe.addInitializer = function(ye) {
        if (Ce)
          throw new TypeError("Cannot add initializers after decoration has completed");
        ke.push($e(ye || null));
      };
      var Pe = (0, A[Ee])(Ne === "accessor" ? { get: he.get, set: he.set } : he[Y], Fe);
      if (Ne === "accessor") {
        if (Pe === void 0)
          continue;
        if (Pe === null || typeof Pe != "object")
          throw new TypeError("Object expected");
        (ce = $e(Pe.get)) && (he.get = ce), (ce = $e(Pe.set)) && (he.set = ce), (ce = $e(Pe.init)) && Ie.unshift(ce);
      } else
        (ce = $e(Pe)) && (Ne === "field" ? Ie.unshift(ce) : he[Y] = ce);
    }
    le && Object.defineProperty(le, z.name, he), Ce = !0;
  }, t = re && re.__setFunctionName || function(D, $, A) {
    return typeof $ == "symbol" && ($ = $.description ? "[".concat($.description, "]") : ""), Object.defineProperty(D, "name", { configurable: !0, value: A ? "".concat(A, " ", $) : $ });
  }, r = re && re.__importDefault || function(D) {
    return D && D.__esModule ? D : { default: D };
  };
  Object.defineProperty(Ba, "__esModule", { value: !0 }), Ba.ScreenRecorder = void 0;
  const s = Ia, m = Ia, _ = r(yy()), k = Xi, I = Mt, x = Ze, F = Ct, R = vt, N = 30, Q = 30, q = (0, _.default)("puppeteer:ffmpeg");
  let B = (() => {
    var ke, $e, Ne, Y, le, Cy, ce, tl, Ee;
    let D = m.PassThrough, $ = [], A, z, Ie;
    return Ee = class extends D {
      /**
       * @internal
       */
      constructor(Pe, ye, Ue, { speed: W, scale: ie, crop: Z, format: je, path: V } = {}) {
        super({ allowHalfOpen: !1 });
        g(this, le);
        g(this, ce);
        g(this, ke, (l(this, $), void 0));
        g(this, $e, void 0);
        g(this, Ne, new AbortController());
        g(this, Y, void 0);
        V ?? (V = "ffmpeg");
        const { error: ee } = (0, s.spawnSync)(V);
        if (ee)
          throw ee;
        O(this, $e, (0, s.spawn)(
          V,
          // See https://trac.ffmpeg.org/wiki/Encode/VP9 for more information on flags.
          [
            ["-loglevel", "error"],
            // Reduces general buffering.
            ["-avioflags", "direct"],
            // Reduces initial buffering while analyzing input fps and other stats.
            [
              "-fpsprobesize",
              "0",
              "-probesize",
              "32",
              "-analyzeduration",
              "0",
              "-fflags",
              "nobuffer"
            ],
            // Forces input to be read from standard input, and forces png input
            // image format.
            ["-f", "image2pipe", "-c:v", "png", "-i", "pipe:0"],
            // Overwrite output and no audio.
            ["-y", "-an"],
            // This drastically reduces stalling when cpu is overbooked. By default
            // VP9 tries to use all available threads?
            ["-threads", "1"],
            // Specifies the frame rate we are giving ffmpeg.
            ["-framerate", `${Q}`],
            // Specifies the encoding and format we are using.
            L(this, le, Cy).call(this, je ?? "webm"),
            // Disable bitrate.
            ["-b:v", "0"],
            // Filters to ensure the images are piped correctly.
            [
              "-vf",
              `${W ? `setpts=${1 / W}*PTS,` : ""}crop='min(${ye},iw):min(${Ue},ih):0:0',pad=${ye}:${Ue}:0:0${Z ? `,crop=${Z.width}:${Z.height}:${Z.x}:${Z.y}` : ""}${ie ? `,scale=iw*${ie}:-1` : ""}`
            ],
            "pipe:1"
          ].flat(),
          { stdio: ["pipe", "pipe", "pipe"] }
        )), n(this, $e).stdout.pipe(this), n(this, $e).stderr.on("data", (X) => {
          q(X.toString("utf8"));
        }), O(this, ke, Pe);
        const { client: ue } = n(this, ke).mainFrame();
        ue.once(I.CDPSessionEvent.Disconnected, () => {
          this.stop().catch(x.debugError);
        }), O(this, Y, (0, k.lastValueFrom)((0, k.fromEvent)(ue, "Page.screencastFrame").pipe((0, k.tap)((X) => {
          ue.send("Page.screencastFrameAck", {
            sessionId: X.sessionId
          });
        }), (0, k.filter)((X) => X.metadata.timestamp !== void 0), (0, k.map)((X) => ({
          buffer: Buffer.from(X.data, "base64"),
          timestamp: X.metadata.timestamp
        })), (0, k.bufferCount)(2, 1), (0, k.concatMap)(([{ timestamp: X, buffer: ge }, { timestamp: pe }]) => (0, k.from)(Array(Math.round(Q * Math.max(pe - X, 0))).fill(ge))), (0, k.map)((X) => (n(this, ce, tl).call(this, X), [X, performance.now()])), (0, k.takeUntil)((0, k.fromEvent)(n(this, Ne).signal, "abort"))), { defaultValue: [Buffer.from([]), performance.now()] }));
      }
      /**
       * Stops the recorder.
       *
       * @public
       */
      async stop() {
        if (n(this, Ne).signal.aborted)
          return;
        await n(this, ke)._stopScreencast().catch(x.debugError), n(this, Ne).abort();
        const [Pe, ye] = await n(this, Y);
        await Promise.all(Array(Math.max(1, Math.round(Q * (performance.now() - ye) / 1e3))).fill(Pe).map(n(this, ce, tl).bind(this))), n(this, $e).stdin.end(), await new Promise((Ue) => {
          n(this, $e).once("close", Ue);
        });
      }
      /**
       * @internal
       */
      async [(A = [(0, F.guarded)()], Ie = [(0, F.guarded)()], R.asyncDisposeSymbol)]() {
        await this.stop();
      }
    }, ke = new WeakMap(), $e = new WeakMap(), Ne = new WeakMap(), Y = new WeakMap(), le = new WeakSet(), Cy = function(Pe) {
      switch (Pe) {
        case "webm":
          return [
            // Sets the codec to use.
            ["-c:v", "vp9"],
            // Sets the format
            ["-f", "webm"],
            // Sets the quality. Lower the better.
            ["-crf", `${N}`],
            // Sets the quality and how efficient the compression will be.
            ["-deadline", "realtime", "-cpu-used", "8"]
          ].flat();
        case "gif":
          return [
            // Sets the frame rate and uses a custom palette generated from the
            // input.
            [
              "-vf",
              "fps=5,split[s0][s1];[s0]palettegen=stats_mode=diff[p];[s1][p]paletteuse"
            ],
            // Sets the format
            ["-f", "gif"]
          ].flat();
      }
    }, ce = new WeakSet(), tl = function() {
      return z.value;
    }, (() => {
      const Pe = typeof Symbol == "function" && Symbol.metadata ? Object.create(D[Symbol.metadata] ?? null) : void 0;
      i(Ee, z = { value: t(async function(ye) {
        const Ue = await new Promise((W) => {
          n(this, $e).stdin.write(ye, W);
        });
        Ue && console.log(`ffmpeg failed to write: ${Ue.message}.`);
      }, "#writeFrame") }, A, { kind: "method", name: "#writeFrame", static: !1, private: !0, access: { has: (ye) => Jt(ce, ye), get: (ye) => n(ye, ce, tl) }, metadata: Pe }, null, $), i(Ee, null, Ie, { kind: "method", name: "stop", static: !1, private: !1, access: { has: (ye) => "stop" in ye, get: (ye) => ye.stop }, metadata: Pe }, null, $), Pe && Object.defineProperty(Ee, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: Pe });
    })(), Ee;
  })();
  return Ba.ScreenRecorder = B, Ba;
}
(function(l) {
  var i = re && re.__createBinding || (Object.create ? function(Y, le, he, ce) {
    ce === void 0 && (ce = he);
    var Ce = Object.getOwnPropertyDescriptor(le, he);
    (!Ce || ("get" in Ce ? !le.__esModule : Ce.writable || Ce.configurable)) && (Ce = { enumerable: !0, get: function() {
      return le[he];
    } }), Object.defineProperty(Y, ce, Ce);
  } : function(Y, le, he, ce) {
    ce === void 0 && (ce = he), Y[ce] = le[he];
  }), t = re && re.__setModuleDefault || (Object.create ? function(Y, le) {
    Object.defineProperty(Y, "default", { enumerable: !0, value: le });
  } : function(Y, le) {
    Y.default = le;
  }), r = re && re.__runInitializers || function(Y, le, he) {
    for (var ce = arguments.length > 2, Ce = 0; Ce < le.length; Ce++)
      he = ce ? le[Ce].call(Y, he) : le[Ce].call(Y);
    return ce ? he : void 0;
  }, s = re && re.__esDecorate || function(Y, le, he, ce, Ce, Ee) {
    function Fe(ue) {
      if (ue !== void 0 && typeof ue != "function")
        throw new TypeError("Function expected");
      return ue;
    }
    for (var He = ce.kind, Pe = He === "getter" ? "get" : He === "setter" ? "set" : "value", ye = !le && Y ? ce.static ? Y : Y.prototype : null, Ue = le || (ye ? Object.getOwnPropertyDescriptor(ye, ce.name) : {}), W, ie = !1, Z = he.length - 1; Z >= 0; Z--) {
      var je = {};
      for (var V in ce)
        je[V] = V === "access" ? {} : ce[V];
      for (var V in ce.access)
        je.access[V] = ce.access[V];
      je.addInitializer = function(ue) {
        if (ie)
          throw new TypeError("Cannot add initializers after decoration has completed");
        Ee.push(Fe(ue || null));
      };
      var ee = (0, he[Z])(He === "accessor" ? { get: Ue.get, set: Ue.set } : Ue[Pe], je);
      if (He === "accessor") {
        if (ee === void 0)
          continue;
        if (ee === null || typeof ee != "object")
          throw new TypeError("Object expected");
        (W = Fe(ee.get)) && (Ue.get = W), (W = Fe(ee.set)) && (Ue.set = W), (W = Fe(ee.init)) && Ce.unshift(W);
      } else
        (W = Fe(ee)) && (He === "field" ? Ce.unshift(W) : Ue[Pe] = W);
    }
    ye && Object.defineProperty(ye, ce.name, Ue), ie = !0;
  }, m = re && re.__importStar || function(Y) {
    if (Y && Y.__esModule)
      return Y;
    var le = {};
    if (Y != null)
      for (var he in Y)
        he !== "default" && Object.prototype.hasOwnProperty.call(Y, he) && i(le, Y, he);
    return t(le, Y), le;
  }, _ = re && re.__addDisposableResource || function(Y, le, he) {
    if (le != null) {
      if (typeof le != "object" && typeof le != "function")
        throw new TypeError("Object expected.");
      var ce;
      if (he) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        ce = le[Symbol.asyncDispose];
      }
      if (ce === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        ce = le[Symbol.dispose];
      }
      if (typeof ce != "function")
        throw new TypeError("Object not disposable.");
      Y.stack.push({ value: le, dispose: ce, async: he });
    } else
      he && Y.stack.push({ async: !0 });
    return le;
  }, k = re && re.__disposeResources || /* @__PURE__ */ function(Y) {
    return function(le) {
      function he(Ce) {
        le.error = le.hasError ? new Y(Ce, le.error, "An error was suppressed during disposal.") : Ce, le.hasError = !0;
      }
      function ce() {
        for (; le.stack.length; ) {
          var Ce = le.stack.pop();
          try {
            var Ee = Ce.dispose && Ce.dispose.call(Ce.value);
            if (Ce.async)
              return Promise.resolve(Ee).then(ce, function(Fe) {
                return he(Fe), ce();
              });
          } catch (Fe) {
            he(Fe);
          }
        }
        if (le.hasError)
          throw le.error;
      }
      return ce();
    };
  }(typeof SuppressedError == "function" ? SuppressedError : function(Y, le, he) {
    var ce = new Error(he);
    return ce.name = "SuppressedError", ce.error = Y, ce.suppressed = le, ce;
  });
  Object.defineProperty(l, "__esModule", { value: !0 }), l.unitToPixels = l.supportedMetrics = l.Page = l.setDefaultScreenshotOptions = void 0;
  const I = Xi, x = st, F = mt, R = eo, N = Pd, Q = Pu, q = Ze, B = et, D = Ct, $ = vt, A = Ah;
  function z(Y) {
    Y.optimizeForSpeed ?? (Y.optimizeForSpeed = !1), Y.type ?? (Y.type = "png"), Y.fromSurface ?? (Y.fromSurface = !0), Y.fullPage ?? (Y.fullPage = !1), Y.omitBackground ?? (Y.omitBackground = !1), Y.encoding ?? (Y.encoding = "binary"), Y.captureBeyondViewport ?? (Y.captureBeyondViewport = !0), Y.allowViewportExpansion ?? (Y.allowViewportExpansion = Y.captureBeyondViewport);
  }
  l.setDefaultScreenshotOptions = z;
  let Ie = (() => {
    var ce, Ce, Ee, Fe, jy, Pe;
    let Y = F.EventEmitter, le = [], he;
    return Pe = class extends Y {
      /**
       * @internal
       */
      constructor() {
        super();
        /**
         * Gets the native, non-emulated dimensions of the viewport.
         */
        g(this, Fe);
        /**
         * @internal
         */
        Oe(this, "_isDragging", (r(this, le), !1));
        /**
         * @internal
         */
        Oe(this, "_timeoutSettings", new Q.TimeoutSettings());
        g(this, ce, /* @__PURE__ */ new WeakMap());
        g(this, Ce, 0);
        g(this, Ee, void 0);
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
      on(W, ie) {
        if (W !== "request")
          return super.on(W, ie);
        let Z = n(this, ce).get(ie);
        return Z === void 0 && (Z = (je) => {
          je.enqueueInterceptAction(() => ie(je));
        }, n(this, ce).set(ie, Z)), super.on(W, Z);
      }
      /**
       * @internal
       */
      off(W, ie) {
        return W === "request" && (ie = n(this, ce).get(ie) || ie), super.off(W, ie);
      }
      locator(W) {
        return typeof W == "string" ? A.NodeLocator.create(this, W) : A.FunctionLocator.create(this, W);
      }
      /**
       * A shortcut for {@link Locator.race} that does not require static imports.
       *
       * @internal
       */
      locatorRace(W) {
        return A.Locator.race(W);
      }
      /**
       * Runs `document.querySelector` within the page. If no element matches the
       * selector, the return value resolves to `null`.
       *
       * @param selector - A `selector` to query page for
       * {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | selector}
       * to query page for.
       */
      async $(W) {
        return await this.mainFrame().$(W);
      }
      /**
       * The method runs `document.querySelectorAll` within the page. If no elements
       * match the selector, the return value resolves to `[]`.
       * @remarks
       * Shortcut for {@link Frame.$$ | Page.mainFrame().$$(selector) }.
       * @param selector - A `selector` to query page for
       */
      async $$(W) {
        return await this.mainFrame().$$(W);
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
      async evaluateHandle(W, ...ie) {
        return W = (0, q.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, W), await this.mainFrame().evaluateHandle(W, ...ie);
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
      async $eval(W, ie, ...Z) {
        return ie = (0, q.withSourcePuppeteerURLIfNone)(this.$eval.name, ie), await this.mainFrame().$eval(W, ie, ...Z);
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
      async $$eval(W, ie, ...Z) {
        return ie = (0, q.withSourcePuppeteerURLIfNone)(this.$$eval.name, ie), await this.mainFrame().$$eval(W, ie, ...Z);
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
      async $x(W) {
        return await this.mainFrame().$x(W);
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
      async addScriptTag(W) {
        return await this.mainFrame().addScriptTag(W);
      }
      async addStyleTag(W) {
        return await this.mainFrame().addStyleTag(W);
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
      async setContent(W, ie) {
        await this.mainFrame().setContent(W, ie);
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
      async goto(W, ie) {
        return await this.mainFrame().goto(W, ie);
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
      async waitForNavigation(W = {}) {
        return await this.mainFrame().waitForNavigation(W);
      }
      /**
       * @internal
       */
      _waitForNetworkIdle(W, ie, Z = 0) {
        return (0, I.merge)((0, I.fromEvent)(W, R.NetworkManagerEvent.Request), (0, I.fromEvent)(W, R.NetworkManagerEvent.Response), (0, I.fromEvent)(W, R.NetworkManagerEvent.RequestFailed)).pipe((0, I.startWith)(void 0), (0, I.filter)(() => W.inFlightRequestsCount() <= Z), (0, I.switchMap)((je) => (0, I.of)(je).pipe((0, I.delay)(ie))));
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
      async waitForFrame(W, ie = {}) {
        const { timeout: Z = this.getDefaultTimeout() } = ie;
        return (0, q.isString)(W) && (W = (je) => W === je.url()), await (0, I.firstValueFrom)((0, I.merge)((0, I.fromEvent)(
          this,
          "frameattached"
          /* PageEvent.FrameAttached */
        ), (0, I.fromEvent)(
          this,
          "framenavigated"
          /* PageEvent.FrameNavigated */
        ), (0, I.from)(this.frames())).pipe((0, I.filterAsync)(W), (0, I.first)(), (0, I.raceWith)((0, q.timeout)(Z), (0, I.fromEvent)(
          this,
          "close"
          /* PageEvent.Close */
        ).pipe((0, I.map)(() => {
          throw new x.TargetCloseError("Page closed.");
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
      async emulate(W) {
        await Promise.all([
          this.setUserAgent(W.userAgent),
          this.setViewport(W.viewport)
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
      async evaluate(W, ...ie) {
        return W = (0, q.withSourcePuppeteerURLIfNone)(this.evaluate.name, W), await this.mainFrame().evaluate(W, ...ie);
      }
      /**
       * @internal
       */
      async _maybeWriteBufferToFile(W, ie) {
        if (!W)
          return;
        await (await (0, q.importFSPromises)()).writeFile(W, ie);
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
      async screencast(W = {}) {
        const [{ ScreenRecorder: ie }, [Z, je, V]] = await Promise.all([
          Promise.resolve().then(() => m(s0())),
          L(this, Fe, jy).call(this)
        ]);
        let ee;
        if (W.crop) {
          const { x: X, y: ge, width: pe, height: C } = Ne($e(W.crop));
          if (X < 0 || ge < 0)
            throw new Error("`crop.x` and `crop.y` must be greater than or equal to 0.");
          if (pe <= 0 || C <= 0)
            throw new Error("`crop.height` and `crop.width` must be greater than or equal to 0.");
          const P = Z / V, ne = Z / V;
          if (X + pe > P)
            throw new Error(`\`crop.width\` cannot be larger than the viewport width (${P}).`);
          if (ge + C > ne)
            throw new Error(`\`crop.height\` cannot be larger than the viewport height (${ne}).`);
          ee = {
            x: X * V,
            y: ge * V,
            width: pe * V,
            height: C * V
          };
        }
        if (W.speed !== void 0 && W.speed <= 0)
          throw new Error("`speed` must be greater than 0.");
        if (W.scale !== void 0 && W.scale <= 0)
          throw new Error("`scale` must be greater than 0.");
        const ue = new ie(this, Z, je, {
          ...W,
          path: W.ffmpegPath,
          crop: ee
        });
        try {
          await this._startScreencast();
        } catch (X) {
          throw ue.stop(), X;
        }
        if (W.path) {
          const { createWriteStream: X } = await Promise.resolve().then(() => m(Ia)), ge = X(W.path, "binary");
          ue.pipe(ge);
        }
        return ue;
      }
      /**
       * @internal
       */
      async _startScreencast() {
        ++rf(this, Ce)._, n(this, Ee) || O(this, Ee, this.mainFrame().client.send("Page.startScreencast", { format: "png" }).then(() => new Promise((W) => this.mainFrame().client.once("Page.screencastFrame", () => W())))), await n(this, Ee);
      }
      /**
       * @internal
       */
      async _stopScreencast() {
        --rf(this, Ce)._, n(this, Ee) && (O(this, Ee, void 0), n(this, Ce) === 0 && await this.mainFrame().client.send("Page.stopScreencast"));
      }
      async screenshot(W = {}) {
        const ie = { stack: [], error: void 0, hasError: !1 };
        try {
          await this.bringToFront();
          const Z = {
            ...W,
            clip: W.clip ? {
              ...W.clip
            } : void 0
          };
          if (Z.type === void 0 && Z.path !== void 0) {
            const ue = Z.path;
            switch (ue.slice(ue.lastIndexOf(".") + 1).toLowerCase()) {
              case "png":
                Z.type = "png";
                break;
              case "jpeg":
              case "jpg":
                Z.type = "jpeg";
                break;
              case "webp":
                Z.type = "webp";
                break;
            }
          }
          if (Z.quality !== void 0) {
            if (Z.quality < 0 && Z.quality > 100)
              throw new Error(`Expected 'quality' (${Z.quality}) to be between 0 and 100, inclusive.`);
            if (Z.type === void 0 || !["jpeg", "webp"].includes(Z.type))
              throw new Error(`${Z.type ?? "png"} screenshots do not support 'quality'.`);
          }
          if ((0, B.assert)(!Z.clip || !Z.fullPage, "'clip' and 'fullPage' are exclusive"), Z.clip) {
            if (Z.clip.width <= 0)
              throw new Error("'width' in 'clip' must be positive.");
            if (Z.clip.height <= 0)
              throw new Error("'height' in 'clip' must be positive.");
          }
          z(Z), Z.clip = Z.clip && Ne($e(Z.clip));
          const je = _(ie, new $.AsyncDisposableStack(), !0);
          if (Z.allowViewportExpansion || Z.captureBeyondViewport)
            if (Z.fullPage) {
              const ue = await this.mainFrame().isolatedRealm().evaluate(() => {
                const { scrollHeight: X, scrollWidth: ge } = document.documentElement, { height: pe, width: C } = window.visualViewport;
                return {
                  height: Math.max(X, pe),
                  width: Math.max(ge, C)
                };
              });
              Z.clip = { ...ue, x: 0, y: 0 }, je.use(await this._createTemporaryViewportContainingBox(Z.clip));
            } else
              Z.clip && !Z.captureBeyondViewport ? je.use(Z.clip && await this._createTemporaryViewportContainingBox(Z.clip)) : Z.clip || (Z.captureBeyondViewport = !1);
          const V = await this._screenshot(Z);
          if (Z.encoding === "base64")
            return V;
          const ee = Buffer.from(V, "base64");
          return await this._maybeWriteBufferToFile(Z.path, ee), ee;
        } catch (Z) {
          ie.error = Z, ie.hasError = !0;
        } finally {
          const Z = k(ie);
          Z && await Z;
        }
      }
      /**
       * @internal
       */
      async _createTemporaryViewportContainingBox(W) {
        const ie = { stack: [], error: void 0, hasError: !1 };
        try {
          const Z = await this.mainFrame().isolatedRealm().evaluate(() => ({
            pageLeft: window.visualViewport.pageLeft,
            pageTop: window.visualViewport.pageTop,
            width: window.visualViewport.width,
            height: window.visualViewport.height
          })), je = _(ie, new $.AsyncDisposableStack(), !0);
          if ((W.x < Z.pageLeft || W.y < Z.pageTop) && (await this.evaluate((V, ee) => {
            window.scroll({ left: V, top: ee, behavior: "instant" });
          }, Math.floor(W.x), Math.floor(W.y)), je.defer(async () => {
            await this.evaluate((V, ee) => {
              window.scroll({ left: V, top: ee, behavior: "instant" });
            }, Z.pageLeft, Z.pageTop).catch(q.debugError);
          })), W.width + W.x > Z.width || W.height + W.y > Z.height) {
            const V = this.viewport() ?? {
              width: 0,
              height: 0
            };
            await this.setViewport({
              width: Math.max(Z.width, Math.ceil(W.width + W.x)),
              height: Math.max(Z.height, Math.ceil(W.height + W.y))
            }), je.defer(async () => {
              await this.setViewport(V).catch(q.debugError);
            });
          }
          return je.move();
        } catch (Z) {
          ie.error = Z, ie.hasError = !0;
        } finally {
          const Z = k(ie);
          Z && await Z;
        }
      }
      /**
       * @internal
       */
      _getPDFOptions(W = {}, ie = "in") {
        var ue, X, ge, pe;
        const Z = {
          scale: 1,
          displayHeaderFooter: !1,
          headerTemplate: "",
          footerTemplate: "",
          printBackground: !1,
          landscape: !1,
          pageRanges: "",
          preferCSSPageSize: !1,
          omitBackground: !1,
          timeout: 3e4,
          tagged: !1
        };
        let je = 8.5, V = 11;
        if (W.format) {
          const C = N.paperFormats[W.format.toLowerCase()];
          (0, B.assert)(C, "Unknown paper format: " + W.format), je = C.width, V = C.height;
        } else
          je = ke(W.width, ie) ?? je, V = ke(W.height, ie) ?? V;
        const ee = {
          top: ke((ue = W.margin) == null ? void 0 : ue.top, ie) || 0,
          left: ke((X = W.margin) == null ? void 0 : X.left, ie) || 0,
          bottom: ke((ge = W.margin) == null ? void 0 : ge.bottom, ie) || 0,
          right: ke((pe = W.margin) == null ? void 0 : pe.right, ie) || 0
        };
        return {
          ...Z,
          ...W,
          width: je,
          height: V,
          margin: ee
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
      click(W, ie) {
        return this.mainFrame().click(W, ie);
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
      focus(W) {
        return this.mainFrame().focus(W);
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
      hover(W) {
        return this.mainFrame().hover(W);
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
      select(W, ...ie) {
        return this.mainFrame().select(W, ...ie);
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
      tap(W) {
        return this.mainFrame().tap(W);
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
      type(W, ie, Z) {
        return this.mainFrame().type(W, ie, Z);
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
      waitForTimeout(W) {
        return this.mainFrame().waitForTimeout(W);
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
      async waitForSelector(W, ie = {}) {
        return await this.mainFrame().waitForSelector(W, ie);
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
      waitForXPath(W, ie) {
        return this.mainFrame().waitForXPath(W, ie);
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
      waitForFunction(W, ie, ...Z) {
        return this.mainFrame().waitForFunction(W, ie, ...Z);
      }
      /** @internal */
      [(he = [(0, D.guarded)(function() {
        return this.browser();
      })], $.disposeSymbol)]() {
        return void this.close().catch(q.debugError);
      }
      /** @internal */
      [$.asyncDisposeSymbol]() {
        return this.close();
      }
    }, ce = new WeakMap(), Ce = new WeakMap(), Ee = new WeakMap(), Fe = new WeakSet(), jy = async function() {
      const W = { stack: [], error: void 0, hasError: !1 };
      try {
        const ie = this.viewport(), Z = _(W, new $.DisposableStack(), !1);
        return ie && ie.deviceScaleFactor !== 0 && (await this.setViewport({ ...ie, deviceScaleFactor: 0 }), Z.defer(() => {
          this.setViewport(ie).catch(q.debugError);
        })), await this.mainFrame().isolatedRealm().evaluate(() => [
          window.visualViewport.width * window.devicePixelRatio,
          window.visualViewport.height * window.devicePixelRatio,
          window.devicePixelRatio
        ]);
      } catch (ie) {
        W.error = ie, W.hasError = !0;
      } finally {
        k(W);
      }
    }, (() => {
      const W = typeof Symbol == "function" && Symbol.metadata ? Object.create(Y[Symbol.metadata] ?? null) : void 0;
      s(Pe, null, he, { kind: "method", name: "screenshot", static: !1, private: !1, access: { has: (ie) => "screenshot" in ie, get: (ie) => ie.screenshot }, metadata: W }, null, le), W && Object.defineProperty(Pe, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: W });
    })(), Pe;
  })();
  l.Page = Ie, l.supportedMetrics = /* @__PURE__ */ new Set([
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
  ]), l.unitToPixels = {
    px: 1,
    in: 96,
    cm: 37.8,
    mm: 3.78
  };
  function ke(Y, le = "in") {
    if (typeof Y > "u")
      return;
    let he;
    if ((0, q.isNumber)(Y))
      he = Y;
    else if ((0, q.isString)(Y)) {
      const ce = Y;
      let Ce = ce.substring(ce.length - 2).toLowerCase(), Ee = "";
      Ce in l.unitToPixels ? Ee = ce.substring(0, ce.length - 2) : (Ce = "px", Ee = ce);
      const Fe = Number(Ee);
      (0, B.assert)(!isNaN(Fe), "Failed to parse parameter value: " + ce), he = Fe * l.unitToPixels[Ce];
    } else
      throw new Error("page.pdf() Cannot handle parameter type: " + typeof Y);
    return he / l.unitToPixels[le];
  }
  function $e(Y) {
    return {
      ...Y,
      ...Y.width < 0 ? {
        x: Y.x + Y.width,
        width: -Y.width
      } : {
        x: Y.x,
        width: Y.width
      },
      ...Y.height < 0 ? {
        y: Y.y + Y.height,
        height: -Y.height
      } : {
        y: Y.y,
        height: Y.height
      }
    };
  }
  function Ne(Y) {
    const le = Math.round(Y.x), he = Math.round(Y.y), ce = Math.round(Y.width + Y.x - le), Ce = Math.round(Y.height + Y.y - he);
    return { ...Y, x: le, y: he, width: ce, height: Ce };
  }
})(Sy);
var Od = {};
Object.defineProperty(Od, "__esModule", { value: !0 });
Od.ConsoleMessage = void 0;
var hs, ps, ys, ko;
class c0 {
  /**
   * @public
   */
  constructor(i, t, r, s) {
    g(this, hs, void 0);
    g(this, ps, void 0);
    g(this, ys, void 0);
    g(this, ko, void 0);
    O(this, hs, i), O(this, ps, t), O(this, ys, r), O(this, ko, s);
  }
  /**
   * The type of the console message.
   */
  type() {
    return n(this, hs);
  }
  /**
   * The text of the console message.
   */
  text() {
    return n(this, ps);
  }
  /**
   * An array of arguments passed to the console.
   */
  args() {
    return n(this, ys);
  }
  /**
   * The location of the console message.
   */
  location() {
    return n(this, ko)[0] ?? {};
  }
  /**
   * The array of locations on the stack of the console message.
   */
  stackTrace() {
    return n(this, ko);
  }
}
hs = new WeakMap(), ps = new WeakMap(), ys = new WeakMap(), ko = new WeakMap();
Od.ConsoleMessage = c0;
var kd = {};
Object.defineProperty(kd, "__esModule", { value: !0 });
kd.FileChooser = void 0;
const Ep = et;
var Co, ms, ti;
class u0 {
  /**
   * @internal
   */
  constructor(i, t) {
    g(this, Co, void 0);
    g(this, ms, void 0);
    g(this, ti, !1);
    O(this, Co, i), O(this, ms, t.mode !== "selectSingle");
  }
  /**
   * Whether file chooser allow for
   * {@link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#attr-multiple | multiple}
   * file selection.
   */
  isMultiple() {
    return n(this, ms);
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
  async accept(i) {
    (0, Ep.assert)(!n(this, ti), "Cannot accept FileChooser which is already handled!"), O(this, ti, !0), await n(this, Co).uploadFile(...i);
  }
  /**
   * Closes the file chooser without selecting any files.
   */
  async cancel() {
    (0, Ep.assert)(!n(this, ti), "Cannot cancel FileChooser which is already handled!"), O(this, ti, !0), await n(this, Co).evaluate((i) => {
      i.dispatchEvent(new Event("cancel", { bubbles: !0 }));
    });
  }
}
Co = new WeakMap(), ms = new WeakMap(), ti = new WeakMap();
kd.FileChooser = u0;
var Cd = {};
Object.defineProperty(Cd, "__esModule", { value: !0 });
Cd.Accessibility = void 0;
var ri;
class l0 {
  /**
   * @internal
   */
  constructor(i) {
    g(this, ri, void 0);
    O(this, ri, i);
  }
  /**
   * @internal
   */
  updateClient(i) {
    O(this, ri, i);
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
  async snapshot(i = {}) {
    const { interestingOnly: t = !0, root: r = null } = i, { nodes: s } = await n(this, ri).send("Accessibility.getFullAXTree");
    let m;
    if (r) {
      const { node: x } = await n(this, ri).send("DOM.describeNode", {
        objectId: r.id
      });
      m = x.backendNodeId;
    }
    const _ = If.createTree(s);
    let k = _;
    if (m && (k = _.find((x) => x.payload.backendDOMNodeId === m), !k))
      return null;
    if (!t)
      return this.serializeTree(k)[0] ?? null;
    const I = /* @__PURE__ */ new Set();
    return this.collectInterestingNodes(I, _, !1), I.has(k) ? this.serializeTree(k, I)[0] ?? null : null;
  }
  serializeTree(i, t) {
    const r = [];
    for (const m of i.children)
      r.push(...this.serializeTree(m, t));
    if (t && !t.has(i))
      return r;
    const s = i.serialize();
    return r.length && (s.children = r), [s];
  }
  collectInterestingNodes(i, t, r) {
    if (t.isInteresting(r) && i.add(t), !t.isLeafNode()) {
      r = r || t.isControl();
      for (const s of t.children)
        this.collectInterestingNodes(i, s, r);
    }
  }
}
ri = new WeakMap();
Cd.Accessibility = l0;
var jo, vs, ni, bs, ii, qt, gs, oi, yl, Ty, ml, Iy, ws, Mf;
const xh = class xh {
  constructor(i) {
    g(this, yl);
    g(this, ml);
    g(this, ws);
    Oe(this, "payload");
    Oe(this, "children", []);
    g(this, jo, !1);
    g(this, vs, !1);
    g(this, ni, !1);
    g(this, bs, !1);
    g(this, ii, void 0);
    g(this, qt, void 0);
    g(this, gs, void 0);
    g(this, oi, void 0);
    this.payload = i, O(this, ii, this.payload.name ? this.payload.name.value : ""), O(this, qt, this.payload.role ? this.payload.role.value : "Unknown"), O(this, gs, this.payload.ignored);
    for (const t of this.payload.properties || [])
      t.name === "editable" && (O(this, jo, t.value.value === "richtext"), O(this, vs, !0)), t.name === "focusable" && O(this, ni, t.value.value), t.name === "hidden" && O(this, bs, t.value.value);
  }
  find(i) {
    if (i(this))
      return this;
    for (const t of this.children) {
      const r = t.find(i);
      if (r)
        return r;
    }
    return null;
  }
  isLeafNode() {
    if (!this.children.length || L(this, yl, Ty).call(this) || L(this, ml, Iy).call(this))
      return !0;
    switch (n(this, qt)) {
      case "doc-cover":
      case "graphics-symbol":
      case "img":
      case "image":
      case "Meter":
      case "scrollbar":
      case "slider":
      case "separator":
      case "progressbar":
        return !0;
    }
    return L(this, ws, Mf).call(this) ? !1 : !!(n(this, ni) && n(this, ii) || n(this, qt) === "heading" && n(this, ii));
  }
  isControl() {
    switch (n(this, qt)) {
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
        return !0;
      default:
        return !1;
    }
  }
  isInteresting(i) {
    return n(this, qt) === "Ignored" || n(this, bs) || n(this, gs) ? !1 : n(this, ni) || n(this, jo) || this.isControl() ? !0 : i ? !1 : this.isLeafNode() && !!n(this, ii);
  }
  serialize() {
    const i = /* @__PURE__ */ new Map();
    for (const N of this.payload.properties || [])
      i.set(N.name.toLowerCase(), N.value.value);
    this.payload.name && i.set("name", this.payload.name.value), this.payload.value && i.set("value", this.payload.value.value), this.payload.description && i.set("description", this.payload.description.value);
    const t = {
      role: n(this, qt)
    }, r = [
      "name",
      "value",
      "description",
      "keyshortcuts",
      "roledescription",
      "valuetext"
    ], s = (N) => i.get(N);
    for (const N of r)
      i.has(N) && (t[N] = s(N));
    const m = [
      "disabled",
      "expanded",
      "focused",
      "modal",
      "multiline",
      "multiselectable",
      "readonly",
      "required",
      "selected"
    ], _ = (N) => i.get(N);
    for (const N of m)
      N === "focused" && n(this, qt) === "RootWebArea" || !_(N) || (t[N] = _(N));
    const k = ["checked", "pressed"];
    for (const N of k) {
      if (!i.has(N))
        continue;
      const Q = i.get(N);
      t[N] = Q === "mixed" ? "mixed" : Q === "true";
    }
    const I = [
      "level",
      "valuemax",
      "valuemin"
    ], x = (N) => i.get(N);
    for (const N of I)
      i.has(N) && (t[N] = x(N));
    const F = [
      "autocomplete",
      "haspopup",
      "invalid",
      "orientation"
    ], R = (N) => i.get(N);
    for (const N of F) {
      const Q = R(N);
      !Q || Q === "false" || (t[N] = R(N));
    }
    return t;
  }
  static createTree(i) {
    const t = /* @__PURE__ */ new Map();
    for (const r of i)
      t.set(r.nodeId, new xh(r));
    for (const r of t.values())
      for (const s of r.payload.childIds || []) {
        const m = t.get(s);
        m && r.children.push(m);
      }
    return t.values().next().value;
  }
};
jo = new WeakMap(), vs = new WeakMap(), ni = new WeakMap(), bs = new WeakMap(), ii = new WeakMap(), qt = new WeakMap(), gs = new WeakMap(), oi = new WeakMap(), yl = new WeakSet(), Ty = function() {
  return n(this, jo) ? !1 : n(this, vs) ? !0 : n(this, qt) === "textbox" || n(this, qt) === "searchbox";
}, ml = new WeakSet(), Iy = function() {
  const i = n(this, qt);
  return i === "LineBreak" || i === "text" || i === "InlineTextBox" || i === "StaticText";
}, ws = new WeakSet(), Mf = function() {
  var i;
  if (n(this, oi) === void 0) {
    O(this, oi, !1);
    for (const t of this.children)
      if (n(t, ni) || L(i = t, ws, Mf).call(i)) {
        O(this, oi, !0);
        break;
      }
  }
  return n(this, oi);
};
let If = xh;
var ku = {}, Aa = {}, Pp = re && re.__runInitializers || function(l, i, t) {
  for (var r = arguments.length > 2, s = 0; s < i.length; s++)
    t = r ? i[s].call(l, t) : i[s].call(l);
  return r ? t : void 0;
}, sf = re && re.__esDecorate || function(l, i, t, r, s, m) {
  function _($) {
    if ($ !== void 0 && typeof $ != "function")
      throw new TypeError("Function expected");
    return $;
  }
  for (var k = r.kind, I = k === "getter" ? "get" : k === "setter" ? "set" : "value", x = !i && l ? r.static ? l : l.prototype : null, F = i || (x ? Object.getOwnPropertyDescriptor(x, r.name) : {}), R, N = !1, Q = t.length - 1; Q >= 0; Q--) {
    var q = {};
    for (var B in r)
      q[B] = B === "access" ? {} : r[B];
    for (var B in r.access)
      q.access[B] = r.access[B];
    q.addInitializer = function($) {
      if (N)
        throw new TypeError("Cannot add initializers after decoration has completed");
      m.push(_($ || null));
    };
    var D = (0, t[Q])(k === "accessor" ? { get: F.get, set: F.set } : F[I], q);
    if (k === "accessor") {
      if (D === void 0)
        continue;
      if (D === null || typeof D != "object")
        throw new TypeError("Object expected");
      (R = _(D.get)) && (F.get = R), (R = _(D.set)) && (F.set = R), (R = _(D.init)) && s.unshift(R);
    } else
      (R = _(D)) && (k === "field" ? s.unshift(R) : F[I] = R);
  }
  x && Object.defineProperty(x, r.name, F), N = !0;
}, d0 = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, f0 = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Aa, "__esModule", { value: !0 });
Aa.JSHandle = void 0;
const cf = Ze, uf = Ct, Op = vt;
let h0 = (() => {
  var k;
  let l = [uf.moveable], i, t = [], r, s = [], m, _;
  return k = class {
    /**
     * @internal
     */
    constructor() {
      Pp(this, s);
    }
    /**
     * Evaluates the given function with the current handle as its first argument.
     */
    async evaluate(x, ...F) {
      return x = (0, cf.withSourcePuppeteerURLIfNone)(this.evaluate.name, x), await this.realm.evaluate(x, this, ...F);
    }
    /**
     * Evaluates the given function with the current handle as its first argument.
     *
     */
    async evaluateHandle(x, ...F) {
      return x = (0, cf.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, x), await this.realm.evaluateHandle(x, this, ...F);
    }
    /**
     * @internal
     */
    async getProperty(x) {
      return await this.evaluateHandle((F, R) => F[R], x);
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
      const x = await this.evaluate((N) => {
        var B;
        const Q = [], q = Object.getOwnPropertyDescriptors(N);
        for (const D in q)
          (B = q[D]) != null && B.enumerable && Q.push(D);
        return Q;
      }), F = /* @__PURE__ */ new Map(), R = await Promise.all(x.map((N) => this.getProperty(N)));
      for (const [N, Q] of Object.entries(x)) {
        const q = { stack: [], error: void 0, hasError: !1 };
        try {
          const B = d0(q, R[N], !1);
          B && F.set(Q, B.move());
        } catch (B) {
          q.error = B, q.hasError = !0;
        } finally {
          f0(q);
        }
      }
      return F;
    }
    /** @internal */
    [(m = [(0, uf.throwIfDisposed)()], _ = [(0, uf.throwIfDisposed)()], Op.disposeSymbol)]() {
      return void this.dispose().catch(cf.debugError);
    }
    /** @internal */
    [Op.asyncDisposeSymbol]() {
      return this.dispose();
    }
  }, r = k, (() => {
    const x = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    sf(k, null, m, { kind: "method", name: "getProperty", static: !1, private: !1, access: { has: (F) => "getProperty" in F, get: (F) => F.getProperty }, metadata: x }, null, s), sf(k, null, _, { kind: "method", name: "getProperties", static: !1, private: !1, access: { has: (F) => "getProperties" in F, get: (F) => F.getProperties }, metadata: x }, null, s), sf(null, i = { value: r }, l, { kind: "class", name: r.name, metadata: x }, null, t), r = i.value, x && Object.defineProperty(r, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: x }), Pp(r, t);
  })(), r;
})();
Aa.JSHandle = h0;
var p0 = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, y0 = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(ku, "__esModule", { value: !0 });
ku.Binding = void 0;
const m0 = Aa, kp = Ze, v0 = vt, b0 = dt;
var Mr, _s;
class g0 {
  constructor(i, t) {
    g(this, Mr, void 0);
    g(this, _s, void 0);
    O(this, Mr, i), O(this, _s, t);
  }
  get name() {
    return n(this, Mr);
  }
  /**
   * @param context - Context to run the binding in; the context should have
   * the binding added to it beforehand.
   * @param id - ID of the call. This should come from the CDP
   * `onBindingCalled` response.
   * @param args - Plain arguments from CDP.
   */
  async run(i, t, r, s) {
    const m = new v0.DisposableStack();
    try {
      if (!s) {
        const _ = { stack: [], error: void 0, hasError: !1 };
        try {
          const I = await p0(_, await i.evaluateHandle((x, F) => globalThis[x].args.get(F), n(this, Mr), t), !1).getProperties();
          for (const [x, F] of I)
            if (x in r)
              switch (F.remoteObject().subtype) {
                case "node":
                  r[+x] = F;
                  break;
                default:
                  m.use(F);
              }
            else
              m.use(F);
        } catch (k) {
          _.error = k, _.hasError = !0;
        } finally {
          y0(_);
        }
      }
      await i.evaluate((_, k, I) => {
        const x = globalThis[_].callbacks;
        x.get(k).resolve(I), x.delete(k);
      }, n(this, Mr), t, await n(this, _s).call(this, ...r));
      for (const _ of r)
        _ instanceof m0.JSHandle && m.use(_);
    } catch (_) {
      (0, b0.isErrorLike)(_) ? await i.evaluate((k, I, x, F) => {
        const R = new Error(x);
        R.stack = F;
        const N = globalThis[k].callbacks;
        N.get(I).reject(R), N.delete(I);
      }, n(this, Mr), t, _.message, _.stack).catch(kp.debugError) : await i.evaluate((k, I, x) => {
        const F = globalThis[k].callbacks;
        F.get(I).reject(x), F.delete(I);
      }, n(this, Mr), t, _).catch(kp.debugError);
    }
  }
}
Mr = new WeakMap(), _s = new WeakMap();
ku.Binding = g0;
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.isTargetClosedError = Fy = Gi.Connection = void 0;
const Wa = Mt, w0 = Wr, My = or, _0 = st, S0 = mt, E0 = dt, P0 = Zi, O0 = (0, My.debug)("puppeteer:protocol:SEND ►"), k0 = (0, My.debug)("puppeteer:protocol:RECV ◀");
var Ss, hr, To, Io, Rt, Mo, Fo, ai, Es, Ff;
class C0 extends S0.EventEmitter {
  constructor(t, r, s = 0, m) {
    super();
    g(this, Es);
    g(this, Ss, void 0);
    g(this, hr, void 0);
    g(this, To, void 0);
    g(this, Io, void 0);
    g(this, Rt, /* @__PURE__ */ new Map());
    g(this, Mo, !1);
    g(this, Fo, /* @__PURE__ */ new Set());
    g(this, ai, new w0.CallbackRegistry());
    O(this, Ss, t), O(this, To, s), O(this, Io, m ?? 18e4), O(this, hr, r), n(this, hr).onmessage = this.onMessage.bind(this), n(this, hr).onclose = L(this, Es, Ff).bind(this);
  }
  static fromSession(t) {
    return t.connection();
  }
  get timeout() {
    return n(this, Io);
  }
  /**
   * @internal
   */
  get _closed() {
    return n(this, Mo);
  }
  /**
   * @internal
   */
  get _sessions() {
    return n(this, Rt);
  }
  /**
   * @param sessionId - The session id
   * @returns The current CDP session if it exists
   */
  session(t) {
    return n(this, Rt).get(t) || null;
  }
  url() {
    return n(this, Ss);
  }
  send(t, ...r) {
    const s = r.length ? r[0] : void 0;
    return this._rawSend(n(this, ai), t, s);
  }
  /**
   * @internal
   */
  _rawSend(t, r, s, m) {
    return t.create(r, n(this, Io), (_) => {
      const k = JSON.stringify({
        method: r,
        params: s,
        id: _,
        sessionId: m
      });
      O0(k), n(this, hr).send(k);
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
  async onMessage(t) {
    n(this, To) && await new Promise((s) => setTimeout(s, n(this, To))), k0(t);
    const r = JSON.parse(t);
    if (r.method === "Target.attachedToTarget") {
      const s = r.params.sessionId, m = new P0.CdpCDPSession(this, r.params.targetInfo.type, s, r.sessionId);
      n(this, Rt).set(s, m), this.emit(Wa.CDPSessionEvent.SessionAttached, m);
      const _ = n(this, Rt).get(r.sessionId);
      _ && _.emit(Wa.CDPSessionEvent.SessionAttached, m);
    } else if (r.method === "Target.detachedFromTarget") {
      const s = n(this, Rt).get(r.params.sessionId);
      if (s) {
        s._onClosed(), n(this, Rt).delete(r.params.sessionId), this.emit(Wa.CDPSessionEvent.SessionDetached, s);
        const m = n(this, Rt).get(r.sessionId);
        m && m.emit(Wa.CDPSessionEvent.SessionDetached, s);
      }
    }
    if (r.sessionId) {
      const s = n(this, Rt).get(r.sessionId);
      s && s._onMessage(r);
    } else
      r.id ? r.error ? n(this, ai).reject(r.id, (0, E0.createProtocolErrorMessage)(r), r.error.message) : n(this, ai).resolve(r.id, r.result) : this.emit(r.method, r.params);
  }
  dispose() {
    L(this, Es, Ff).call(this), n(this, hr).close();
  }
  /**
   * @internal
   */
  isAutoAttached(t) {
    return !n(this, Fo).has(t);
  }
  /**
   * @internal
   */
  async _createSession(t, r = !0) {
    r || n(this, Fo).add(t.targetId);
    const { sessionId: s } = await this.send("Target.attachToTarget", {
      targetId: t.targetId,
      flatten: !0
    });
    n(this, Fo).delete(t.targetId);
    const m = n(this, Rt).get(s);
    if (!m)
      throw new Error("CDPSession creation failed.");
    return m;
  }
  /**
   * @param targetInfo - The target info
   * @returns The CDP session that is created
   */
  async createSession(t) {
    return await this._createSession(t, !1);
  }
}
Ss = new WeakMap(), hr = new WeakMap(), To = new WeakMap(), Io = new WeakMap(), Rt = new WeakMap(), Mo = new WeakMap(), Fo = new WeakMap(), ai = new WeakMap(), Es = new WeakSet(), Ff = function() {
  if (!n(this, Mo)) {
    O(this, Mo, !0), n(this, hr).onmessage = void 0, n(this, hr).onclose = void 0, n(this, ai).clear();
    for (const t of n(this, Rt).values())
      t._onClosed();
    n(this, Rt).clear(), this.emit(Wa.CDPSessionEvent.Disconnected, void 0);
  }
};
var Fy = Gi.Connection = C0;
function j0(l) {
  return l instanceof _0.TargetCloseError;
}
Gi.isTargetClosedError = j0;
var Dn = {};
Object.defineProperty(Dn, "__esModule", { value: !0 });
Dn.CSSCoverage = Dn.JSCoverage = Dn.Coverage = void 0;
const ll = mt, Df = Ze, mo = et, Dy = vt;
var si, ci;
class T0 {
  constructor(i) {
    g(this, si, void 0);
    g(this, ci, void 0);
    O(this, si, new Ry(i)), O(this, ci, new Ny(i));
  }
  /**
   * @internal
   */
  updateClient(i) {
    n(this, si).updateClient(i), n(this, ci).updateClient(i);
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
  async startJSCoverage(i = {}) {
    return await n(this, si).start(i);
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
    return await n(this, si).stop();
  }
  /**
   * @param options - Set of configurable options for coverage, defaults to
   * `resetOnNavigation : true`
   * @returns Promise that resolves when coverage is started.
   */
  async startCSSCoverage(i = {}) {
    return await n(this, ci).start(i);
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
    return await n(this, ci).stop();
  }
}
si = new WeakMap(), ci = new WeakMap();
Dn.Coverage = T0;
var Ot, ui, li, di, fi, Ps, Do, Ro, vl, Ay, bl, xy;
class Ry {
  constructor(i) {
    g(this, vl);
    g(this, bl);
    g(this, Ot, void 0);
    g(this, ui, !1);
    g(this, li, /* @__PURE__ */ new Map());
    g(this, di, /* @__PURE__ */ new Map());
    g(this, fi, void 0);
    g(this, Ps, !1);
    g(this, Do, !1);
    g(this, Ro, !1);
    O(this, Ot, i);
  }
  /**
   * @internal
   */
  updateClient(i) {
    O(this, Ot, i);
  }
  async start(i = {}) {
    (0, mo.assert)(!n(this, ui), "JSCoverage is already enabled");
    const { resetOnNavigation: t = !0, reportAnonymousScripts: r = !1, includeRawScriptCoverage: s = !1, useBlockCoverage: m = !0 } = i;
    O(this, Ps, t), O(this, Do, r), O(this, Ro, s), O(this, ui, !0), n(this, li).clear(), n(this, di).clear(), O(this, fi, new Dy.DisposableStack()), n(this, fi).use(new ll.EventSubscription(n(this, Ot), "Debugger.scriptParsed", L(this, bl, xy).bind(this))), n(this, fi).use(new ll.EventSubscription(n(this, Ot), "Runtime.executionContextsCleared", L(this, vl, Ay).bind(this))), await Promise.all([
      n(this, Ot).send("Profiler.enable"),
      n(this, Ot).send("Profiler.startPreciseCoverage", {
        callCount: n(this, Ro),
        detailed: m
      }),
      n(this, Ot).send("Debugger.enable"),
      n(this, Ot).send("Debugger.setSkipAllPauses", { skip: !0 })
    ]);
  }
  async stop() {
    var s;
    (0, mo.assert)(n(this, ui), "JSCoverage is not enabled"), O(this, ui, !1);
    const i = await Promise.all([
      n(this, Ot).send("Profiler.takePreciseCoverage"),
      n(this, Ot).send("Profiler.stopPreciseCoverage"),
      n(this, Ot).send("Profiler.disable"),
      n(this, Ot).send("Debugger.disable")
    ]);
    (s = n(this, fi)) == null || s.dispose();
    const t = [], r = i[0];
    for (const m of r.result) {
      let _ = n(this, li).get(m.scriptId);
      !_ && n(this, Do) && (_ = "debugger://VM" + m.scriptId);
      const k = n(this, di).get(m.scriptId);
      if (k === void 0 || _ === void 0)
        continue;
      const I = [];
      for (const F of m.functions)
        I.push(...F.ranges);
      const x = qy(I);
      n(this, Ro) ? t.push({ url: _, ranges: x, text: k, rawScriptCoverage: m }) : t.push({ url: _, ranges: x, text: k });
    }
    return t;
  }
}
Ot = new WeakMap(), ui = new WeakMap(), li = new WeakMap(), di = new WeakMap(), fi = new WeakMap(), Ps = new WeakMap(), Do = new WeakMap(), Ro = new WeakMap(), vl = new WeakSet(), Ay = function() {
  n(this, Ps) && (n(this, li).clear(), n(this, di).clear());
}, bl = new WeakSet(), xy = async function(i) {
  if (!Df.PuppeteerURL.isPuppeteerURL(i.url) && !(!i.url && !n(this, Do)))
    try {
      const t = await n(this, Ot).send("Debugger.getScriptSource", {
        scriptId: i.scriptId
      });
      n(this, li).set(i.scriptId, i.url), n(this, di).set(i.scriptId, t.scriptSource);
    } catch (t) {
      (0, Df.debugError)(t);
    }
};
Dn.JSCoverage = Ry;
var At, hi, tn, pi, yi, Os, gl, $y, wl, Ly;
class Ny {
  constructor(i) {
    g(this, gl);
    g(this, wl);
    g(this, At, void 0);
    g(this, hi, !1);
    g(this, tn, /* @__PURE__ */ new Map());
    g(this, pi, /* @__PURE__ */ new Map());
    g(this, yi, void 0);
    g(this, Os, !1);
    O(this, At, i);
  }
  /**
   * @internal
   */
  updateClient(i) {
    O(this, At, i);
  }
  async start(i = {}) {
    (0, mo.assert)(!n(this, hi), "CSSCoverage is already enabled");
    const { resetOnNavigation: t = !0 } = i;
    O(this, Os, t), O(this, hi, !0), n(this, tn).clear(), n(this, pi).clear(), O(this, yi, new Dy.DisposableStack()), n(this, yi).use(new ll.EventSubscription(n(this, At), "CSS.styleSheetAdded", L(this, wl, Ly).bind(this))), n(this, yi).use(new ll.EventSubscription(n(this, At), "Runtime.executionContextsCleared", L(this, gl, $y).bind(this))), await Promise.all([
      n(this, At).send("DOM.enable"),
      n(this, At).send("CSS.enable"),
      n(this, At).send("CSS.startRuleUsageTracking")
    ]);
  }
  async stop() {
    var s;
    (0, mo.assert)(n(this, hi), "CSSCoverage is not enabled"), O(this, hi, !1);
    const i = await n(this, At).send("CSS.stopRuleUsageTracking");
    await Promise.all([
      n(this, At).send("CSS.disable"),
      n(this, At).send("DOM.disable")
    ]), (s = n(this, yi)) == null || s.dispose();
    const t = /* @__PURE__ */ new Map();
    for (const m of i.ruleUsage) {
      let _ = t.get(m.styleSheetId);
      _ || (_ = [], t.set(m.styleSheetId, _)), _.push({
        startOffset: m.startOffset,
        endOffset: m.endOffset,
        count: m.used ? 1 : 0
      });
    }
    const r = [];
    for (const m of n(this, tn).keys()) {
      const _ = n(this, tn).get(m);
      (0, mo.assert)(typeof _ < "u", `Stylesheet URL is undefined (styleSheetId=${m})`);
      const k = n(this, pi).get(m);
      (0, mo.assert)(typeof k < "u", `Stylesheet text is undefined (styleSheetId=${m})`);
      const I = qy(t.get(m) || []);
      r.push({ url: _, ranges: I, text: k });
    }
    return r;
  }
}
At = new WeakMap(), hi = new WeakMap(), tn = new WeakMap(), pi = new WeakMap(), yi = new WeakMap(), Os = new WeakMap(), gl = new WeakSet(), $y = function() {
  n(this, Os) && (n(this, tn).clear(), n(this, pi).clear());
}, wl = new WeakSet(), Ly = async function(i) {
  const t = i.header;
  if (t.sourceURL)
    try {
      const r = await n(this, At).send("CSS.getStyleSheetText", {
        styleSheetId: t.styleSheetId
      });
      n(this, tn).set(t.styleSheetId, t.sourceURL), n(this, pi).set(t.styleSheetId, r.text);
    } catch (r) {
      (0, Df.debugError)(r);
    }
};
Dn.CSSCoverage = Ny;
function qy(l) {
  const i = [];
  for (const m of l)
    i.push({ offset: m.startOffset, type: 0, range: m }), i.push({ offset: m.endOffset, type: 1, range: m });
  i.sort((m, _) => {
    if (m.offset !== _.offset)
      return m.offset - _.offset;
    if (m.type !== _.type)
      return _.type - m.type;
    const k = m.range.endOffset - m.range.startOffset, I = _.range.endOffset - _.range.startOffset;
    return m.type === 0 ? I - k : k - I;
  });
  const t = [], r = [];
  let s = 0;
  for (const m of i) {
    if (t.length && s < m.offset && t[t.length - 1] > 0) {
      const _ = r[r.length - 1];
      _ && _.end === s ? _.end = m.offset : r.push({ start: s, end: m.offset });
    }
    s = m.offset, m.type === 0 ? t.push(m.range.count) : t.pop();
  }
  return r.filter((m) => m.end - m.start > 0);
}
var jd = {}, Td = {};
Object.defineProperty(Td, "__esModule", { value: !0 });
Td.Dialog = void 0;
const Cp = et;
var ks, Cs, js, mi;
class I0 {
  /**
   * @internal
   */
  constructor(i, t, r = "") {
    g(this, ks, void 0);
    g(this, Cs, void 0);
    g(this, js, void 0);
    g(this, mi, !1);
    O(this, ks, i), O(this, Cs, t), O(this, js, r);
  }
  /**
   * The type of the dialog.
   */
  type() {
    return n(this, ks);
  }
  /**
   * The message displayed in the dialog.
   */
  message() {
    return n(this, Cs);
  }
  /**
   * The default value of the prompt, or an empty string if the dialog
   * is not a `prompt`.
   */
  defaultValue() {
    return n(this, js);
  }
  /**
   * A promise that resolves when the dialog has been accepted.
   *
   * @param promptText - optional text that will be entered in the dialog
   * prompt. Has no effect if the dialog's type is not `prompt`.
   *
   */
  async accept(i) {
    (0, Cp.assert)(!n(this, mi), "Cannot accept dialog which is already handled!"), O(this, mi, !0), await this.sendCommand({
      accept: !0,
      text: i
    });
  }
  /**
   * A promise which will resolve once the dialog has been dismissed
   */
  async dismiss() {
    (0, Cp.assert)(!n(this, mi), "Cannot dismiss dialog which is already handled!"), O(this, mi, !0), await this.sendCommand({
      accept: !1
    });
  }
}
ks = new WeakMap(), Cs = new WeakMap(), js = new WeakMap(), mi = new WeakMap();
Td.Dialog = I0;
Object.defineProperty(jd, "__esModule", { value: !0 });
jd.CdpDialog = void 0;
const M0 = Td;
var Ts;
class F0 extends M0.Dialog {
  constructor(t, r, s, m = "") {
    super(r, s, m);
    g(this, Ts, void 0);
    O(this, Ts, t);
  }
  async sendCommand(t) {
    await n(this, Ts).send("Page.handleJavaScriptDialog", {
      accept: t.accept,
      promptText: t.text
    });
  }
}
Ts = new WeakMap();
jd.CdpDialog = F0;
var Fa = {}, D0 = re && re.__runInitializers || function(l, i, t) {
  for (var r = arguments.length > 2, s = 0; s < i.length; s++)
    t = r ? i[s].call(l, t) : i[s].call(l);
  return r ? t : void 0;
}, ar = re && re.__esDecorate || function(l, i, t, r, s, m) {
  function _($) {
    if ($ !== void 0 && typeof $ != "function")
      throw new TypeError("Function expected");
    return $;
  }
  for (var k = r.kind, I = k === "getter" ? "get" : k === "setter" ? "set" : "value", x = !i && l ? r.static ? l : l.prototype : null, F = i || (x ? Object.getOwnPropertyDescriptor(x, r.name) : {}), R, N = !1, Q = t.length - 1; Q >= 0; Q--) {
    var q = {};
    for (var B in r)
      q[B] = B === "access" ? {} : r[B];
    for (var B in r.access)
      q.access[B] = r.access[B];
    q.addInitializer = function($) {
      if (N)
        throw new TypeError("Cannot add initializers after decoration has completed");
      m.push(_($ || null));
    };
    var D = (0, t[Q])(k === "accessor" ? { get: F.get, set: F.set } : F[I], q);
    if (k === "accessor") {
      if (D === void 0)
        continue;
      if (D === null || typeof D != "object")
        throw new TypeError("Object expected");
      (R = _(D.get)) && (F.get = R), (R = _(D.set)) && (F.set = R), (R = _(D.init)) && s.unshift(R);
    } else
      (R = _(D)) && (k === "field" ? s.unshift(R) : F[I] = R);
  }
  x && Object.defineProperty(x, r.name, F), N = !0;
}, sr = re && re.__setFunctionName || function(l, i, t) {
  return typeof i == "symbol" && (i = i.description ? "[".concat(i.description, "]") : ""), Object.defineProperty(l, "name", { configurable: !0, value: t ? "".concat(t, " ", i) : i });
};
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.EmulationManager = Fa.EmulatedState = void 0;
const R0 = Mt, A0 = Ze, Vu = et, cr = Ct, x0 = dt;
var vi, Ao, Is;
class Zt {
  constructor(i, t, r) {
    g(this, vi, void 0);
    g(this, Ao, void 0);
    g(this, Is, void 0);
    O(this, vi, i), O(this, Ao, t), O(this, Is, r), n(this, Ao).registerState(this);
  }
  async setState(i) {
    O(this, vi, i), await this.sync();
  }
  get state() {
    return n(this, vi);
  }
  async sync() {
    await Promise.all(n(this, Ao).clients().map((i) => n(this, Is).call(this, i, n(this, vi))));
  }
}
vi = new WeakMap(), Ao = new WeakMap(), Is = new WeakMap();
Fa.EmulatedState = Zt;
let N0 = (() => {
  var ke, $e, Ne, Y, le, he, ce, Ce, Ee, Fe, He, Pe, ye, Ue, W, ie, Rf, je, Af, ee, xf, X, Nf, pe, $f, P, Lf, _e, qf, xe, Hf, tt, Bf, St, Wf, at;
  let l = [], i, t, r, s, m, _, k, I, x, F, R, N, Q, q, B, D, $, A, z, Ie;
  return at = class {
    constructor(Me) {
      g(this, ie);
      g(this, je);
      g(this, ee);
      g(this, X);
      g(this, pe);
      g(this, P);
      g(this, _e);
      g(this, xe);
      g(this, tt);
      g(this, St);
      g(this, ke, (D0(this, l), void 0));
      g(this, $e, !1);
      g(this, Ne, !1);
      g(this, Y, []);
      g(this, le, new Zt({
        active: !1
      }, this, n(this, ie, Rf)));
      g(this, he, new Zt({
        active: !1
      }, this, n(this, je, Af)));
      g(this, ce, new Zt({
        active: !1
      }, this, n(this, ee, xf)));
      g(this, Ce, new Zt({
        active: !1
      }, this, n(this, X, Nf)));
      g(this, Ee, new Zt({
        active: !1
      }, this, n(this, pe, $f)));
      g(this, Fe, new Zt({
        active: !1
      }, this, n(this, P, Lf)));
      g(this, He, new Zt({
        active: !1
      }, this, n(this, _e, qf)));
      g(this, Pe, new Zt({
        active: !1
      }, this, n(this, xe, Hf)));
      g(this, ye, new Zt({
        active: !1
      }, this, n(this, tt, Bf)));
      g(this, Ue, new Zt({
        javaScriptEnabled: !0,
        active: !1
      }, this, n(this, St, Wf)));
      g(this, W, /* @__PURE__ */ new Set());
      O(this, ke, Me);
    }
    updateClient(Me) {
      O(this, ke, Me), n(this, W).delete(Me);
    }
    registerState(Me) {
      n(this, Y).push(Me);
    }
    clients() {
      return [n(this, ke), ...Array.from(n(this, W))];
    }
    async registerSpeculativeSession(Me) {
      n(this, W).add(Me), Me.once(R0.CDPSessionEvent.Disconnected, () => {
        n(this, W).delete(Me);
      }), Promise.all(n(this, Y).map((me) => me.sync().catch(A0.debugError)));
    }
    get javascriptEnabled() {
      return n(this, Ue).state.javaScriptEnabled;
    }
    async emulateViewport(Me) {
      await n(this, le).setState({
        viewport: Me,
        active: !0
      });
      const me = Me.isMobile || !1, fe = Me.hasTouch || !1, Xe = n(this, $e) !== me || n(this, Ne) !== fe;
      return O(this, $e, me), O(this, Ne, fe), Xe;
    }
    async emulateIdleState(Me) {
      await n(this, he).setState({
        active: !0,
        overrides: Me
      });
    }
    async emulateTimezone(Me) {
      await n(this, ce).setState({
        timezoneId: Me,
        active: !0
      });
    }
    async emulateVisionDeficiency(Me) {
      const me = /* @__PURE__ */ new Set([
        "none",
        "achromatopsia",
        "blurredVision",
        "deuteranopia",
        "protanopia",
        "tritanopia"
      ]);
      (0, Vu.assert)(!Me || me.has(Me), `Unsupported vision deficiency: ${Me}`), await n(this, Ce).setState({
        active: !0,
        visionDeficiency: Me
      });
    }
    async emulateCPUThrottling(Me) {
      (0, Vu.assert)(Me === null || Me >= 1, "Throttling rate should be greater or equal to 1"), await n(this, Ee).setState({
        active: !0,
        factor: Me ?? void 0
      });
    }
    async emulateMediaFeatures(Me) {
      if (Array.isArray(Me))
        for (const me of Me) {
          const fe = me.name;
          (0, Vu.assert)(/^(?:prefers-(?:color-scheme|reduced-motion)|color-gamut)$/.test(fe), "Unsupported media feature: " + fe);
        }
      await n(this, Fe).setState({
        active: !0,
        mediaFeatures: Me
      });
    }
    async emulateMediaType(Me) {
      (0, Vu.assert)(Me === "screen" || Me === "print" || (Me ?? void 0) === void 0, "Unsupported media type: " + Me), await n(this, He).setState({
        type: Me,
        active: !0
      });
    }
    async setGeolocation(Me) {
      const { longitude: me, latitude: fe, accuracy: Xe = 0 } = Me;
      if (me < -180 || me > 180)
        throw new Error(`Invalid longitude "${me}": precondition -180 <= LONGITUDE <= 180 failed.`);
      if (fe < -90 || fe > 90)
        throw new Error(`Invalid latitude "${fe}": precondition -90 <= LATITUDE <= 90 failed.`);
      if (Xe < 0)
        throw new Error(`Invalid accuracy "${Xe}": precondition 0 <= ACCURACY failed.`);
      await n(this, Pe).setState({
        active: !0,
        geoLocation: {
          longitude: me,
          latitude: fe,
          accuracy: Xe
        }
      });
    }
    /**
     * Resets default white background
     */
    async resetDefaultBackgroundColor() {
      await n(this, ye).setState({
        active: !0,
        color: void 0
      });
    }
    /**
     * Hides default white background
     */
    async setTransparentBackgroundColor() {
      await n(this, ye).setState({
        active: !0,
        color: { r: 0, g: 0, b: 0, a: 0 }
      });
    }
    async setJavaScriptEnabled(Me) {
      await n(this, Ue).setState({
        active: !0,
        javaScriptEnabled: Me
      });
    }
  }, ke = new WeakMap(), $e = new WeakMap(), Ne = new WeakMap(), Y = new WeakMap(), le = new WeakMap(), he = new WeakMap(), ce = new WeakMap(), Ce = new WeakMap(), Ee = new WeakMap(), Fe = new WeakMap(), He = new WeakMap(), Pe = new WeakMap(), ye = new WeakMap(), Ue = new WeakMap(), W = new WeakMap(), ie = new WeakSet(), Rf = function() {
    return t.value;
  }, je = new WeakSet(), Af = function() {
    return s.value;
  }, ee = new WeakSet(), xf = function() {
    return _.value;
  }, X = new WeakSet(), Nf = function() {
    return I.value;
  }, pe = new WeakSet(), $f = function() {
    return F.value;
  }, P = new WeakSet(), Lf = function() {
    return N.value;
  }, _e = new WeakSet(), qf = function() {
    return q.value;
  }, xe = new WeakSet(), Hf = function() {
    return D.value;
  }, tt = new WeakSet(), Bf = function() {
    return A.value;
  }, St = new WeakSet(), Wf = function() {
    return Ie.value;
  }, (() => {
    const Me = typeof Symbol == "function" && Symbol.metadata ? /* @__PURE__ */ Object.create(null) : void 0;
    i = [cr.invokeAtMostOnceForArguments], r = [cr.invokeAtMostOnceForArguments], m = [cr.invokeAtMostOnceForArguments], k = [cr.invokeAtMostOnceForArguments], x = [cr.invokeAtMostOnceForArguments], R = [cr.invokeAtMostOnceForArguments], Q = [cr.invokeAtMostOnceForArguments], B = [cr.invokeAtMostOnceForArguments], $ = [cr.invokeAtMostOnceForArguments], z = [cr.invokeAtMostOnceForArguments], ar(at, t = { value: sr(async function(me, fe) {
      if (!fe.viewport)
        return;
      const { viewport: Xe } = fe, _r = Xe.isMobile || !1, Sr = Xe.width, to = Xe.height, ro = Xe.deviceScaleFactor ?? 1, Er = Xe.isLandscape ? { angle: 90, type: "landscapePrimary" } : { angle: 0, type: "portraitPrimary" }, Au = Xe.hasTouch || !1;
      await Promise.all([
        me.send("Emulation.setDeviceMetricsOverride", {
          mobile: _r,
          width: Sr,
          height: to,
          deviceScaleFactor: ro,
          screenOrientation: Er
        }),
        me.send("Emulation.setTouchEmulationEnabled", {
          enabled: Au
        })
      ]);
    }, "#applyViewport") }, i, { kind: "method", name: "#applyViewport", static: !1, private: !0, access: { has: (me) => Jt(ie, me), get: (me) => n(me, ie, Rf) }, metadata: Me }, null, l), ar(at, s = { value: sr(async function(me, fe) {
      fe.active && (fe.overrides ? await me.send("Emulation.setIdleOverride", {
        isUserActive: fe.overrides.isUserActive,
        isScreenUnlocked: fe.overrides.isScreenUnlocked
      }) : await me.send("Emulation.clearIdleOverride"));
    }, "#emulateIdleState") }, r, { kind: "method", name: "#emulateIdleState", static: !1, private: !0, access: { has: (me) => Jt(je, me), get: (me) => n(me, je, Af) }, metadata: Me }, null, l), ar(at, _ = { value: sr(async function(me, fe) {
      if (fe.active)
        try {
          await me.send("Emulation.setTimezoneOverride", {
            timezoneId: fe.timezoneId || ""
          });
        } catch (Xe) {
          throw (0, x0.isErrorLike)(Xe) && Xe.message.includes("Invalid timezone") ? new Error(`Invalid timezone ID: ${fe.timezoneId}`) : Xe;
        }
    }, "#emulateTimezone") }, m, { kind: "method", name: "#emulateTimezone", static: !1, private: !0, access: { has: (me) => Jt(ee, me), get: (me) => n(me, ee, xf) }, metadata: Me }, null, l), ar(at, I = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setEmulatedVisionDeficiency", {
        type: fe.visionDeficiency || "none"
      });
    }, "#emulateVisionDeficiency") }, k, { kind: "method", name: "#emulateVisionDeficiency", static: !1, private: !0, access: { has: (me) => Jt(X, me), get: (me) => n(me, X, Nf) }, metadata: Me }, null, l), ar(at, F = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setCPUThrottlingRate", {
        rate: fe.factor ?? 1
      });
    }, "#emulateCpuThrottling") }, x, { kind: "method", name: "#emulateCpuThrottling", static: !1, private: !0, access: { has: (me) => Jt(pe, me), get: (me) => n(me, pe, $f) }, metadata: Me }, null, l), ar(at, N = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setEmulatedMedia", {
        features: fe.mediaFeatures
      });
    }, "#emulateMediaFeatures") }, R, { kind: "method", name: "#emulateMediaFeatures", static: !1, private: !0, access: { has: (me) => Jt(P, me), get: (me) => n(me, P, Lf) }, metadata: Me }, null, l), ar(at, q = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setEmulatedMedia", {
        media: fe.type || ""
      });
    }, "#emulateMediaType") }, Q, { kind: "method", name: "#emulateMediaType", static: !1, private: !0, access: { has: (me) => Jt(_e, me), get: (me) => n(me, _e, qf) }, metadata: Me }, null, l), ar(at, D = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setGeolocationOverride", fe.geoLocation ? {
        longitude: fe.geoLocation.longitude,
        latitude: fe.geoLocation.latitude,
        accuracy: fe.geoLocation.accuracy
      } : void 0);
    }, "#setGeolocation") }, B, { kind: "method", name: "#setGeolocation", static: !1, private: !0, access: { has: (me) => Jt(xe, me), get: (me) => n(me, xe, Hf) }, metadata: Me }, null, l), ar(at, A = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setDefaultBackgroundColorOverride", {
        color: fe.color
      });
    }, "#setDefaultBackgroundColor") }, $, { kind: "method", name: "#setDefaultBackgroundColor", static: !1, private: !0, access: { has: (me) => Jt(tt, me), get: (me) => n(me, tt, Bf) }, metadata: Me }, null, l), ar(at, Ie = { value: sr(async function(me, fe) {
      fe.active && await me.send("Emulation.setScriptExecutionDisabled", {
        value: !fe.javaScriptEnabled
      });
    }, "#setJavaScriptEnabled") }, z, { kind: "method", name: "#setJavaScriptEnabled", static: !1, private: !0, access: { has: (me) => Jt(St, me), get: (me) => n(me, St, Wf) }, metadata: Me }, null, l), Me && Object.defineProperty(at, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: Me });
  })(), at;
})();
Fa.EmulationManager = N0;
var Ur = {}, Nn = {};
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.LazyArg = void 0;
var Ms;
const _l = class _l {
  constructor(i) {
    g(this, Ms, void 0);
    O(this, Ms, i);
  }
  async get(i) {
    return await n(this, Ms).call(this, i);
  }
};
Ms = new WeakMap(), Oe(_l, "create", (i) => new _l(i));
let Uf = _l;
Nn.LazyArg = Uf;
var Yi = {}, Id = {};
Object.defineProperty(Id, "__esModule", { value: !0 });
Id.source = void 0;
Id.source = '"use strict";var C=Object.defineProperty;var ne=Object.getOwnPropertyDescriptor;var oe=Object.getOwnPropertyNames;var se=Object.prototype.hasOwnProperty;var u=(t,e)=>{for(var n in e)C(t,n,{get:e[n],enumerable:!0})},ie=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of oe(e))!se.call(t,o)&&o!==n&&C(t,o,{get:()=>e[o],enumerable:!(r=ne(e,o))||r.enumerable});return t};var le=t=>ie(C({},"__esModule",{value:!0}),t);var Oe={};u(Oe,{default:()=>Re});module.exports=le(Oe);var T=class extends Error{constructor(e){super(e),this.name=this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}},S=class extends T{},I=class extends T{#e;#t="";set code(e){this.#e=e}get code(){return this.#e}set originalMessage(e){this.#t=e}get originalMessage(){return this.#t}};var qe=Object.freeze({TimeoutError:S,ProtocolError:I});var f=class t{#e=!1;#t=!1;#n;#r=()=>{};#o=new Promise(e=>{this.#r=e});#s;#i;constructor(e){e&&e.timeout>0&&(this.#i=new S(e.message),this.#s=setTimeout(()=>{this.reject(this.#i)},e.timeout))}#l(e){clearTimeout(this.#s),this.#n=e,this.#r()}resolve(e){this.#t||this.#e||(this.#e=!0,this.#l(e))}reject(e){this.#t||this.#e||(this.#t=!0,this.#l(e))}resolved(){return this.#e}finished(){return this.#e||this.#t}value(){return this.#n}async valueOrThrow(){if(await this.#o,this.#t)throw this.#n;return this.#n}static create(e){return new t(e)}static async race(e){let n=new Set;try{let r=e.map(o=>o instanceof t?(o.#s&&n.add(o),o.valueOrThrow()):o);return await Promise.race(r)}finally{for(let r of n)r.reject(new Error("Timeout cleared"))}}};var X=new Map,G=t=>{let e=X.get(t);return e||(e=new Function(`return ${t}`)(),X.set(t,e),e)};var R={};u(R,{ariaQuerySelector:()=>ae,ariaQuerySelectorAll:()=>k});var ae=(t,e)=>window.__ariaQuerySelector(t,e),k=async function*(t,e){yield*await window.__ariaQuerySelectorAll(t,e)};var q={};u(q,{customQuerySelectors:()=>M});var O=class{#e=new Map;register(e,n){if(!n.queryOne&&n.queryAll){let r=n.queryAll;n.queryOne=(o,i)=>{for(let s of r(o,i))return s;return null}}else if(n.queryOne&&!n.queryAll){let r=n.queryOne;n.queryAll=(o,i)=>{let s=r(o,i);return s?[s]:[]}}else if(!n.queryOne||!n.queryAll)throw new Error("At least one query method must be defined.");this.#e.set(e,{querySelector:n.queryOne,querySelectorAll:n.queryAll})}unregister(e){this.#e.delete(e)}get(e){return this.#e.get(e)}clear(){this.#e.clear()}},M=new O;var D={};u(D,{pierceQuerySelector:()=>ce,pierceQuerySelectorAll:()=>ue});var ce=(t,e)=>{let n=null,r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&!n&&s.matches(e)&&(n=s)}while(!n&&i.nextNode())};return t instanceof Document&&(t=t.documentElement),r(t),n},ue=(t,e)=>{let n=[],r=o=>{let i=document.createTreeWalker(o,NodeFilter.SHOW_ELEMENT);do{let s=i.currentNode;s.shadowRoot&&r(s.shadowRoot),!(s instanceof ShadowRoot)&&s!==o&&s.matches(e)&&n.push(s)}while(i.nextNode())};return t instanceof Document&&(t=t.documentElement),r(t),n};var m=(t,e)=>{if(!t)throw new Error(e)};var E=class{#e;#t;#n;#r;constructor(e,n){this.#e=e,this.#t=n}async start(){let e=this.#r=f.create(),n=await this.#e();if(n){e.resolve(n);return}this.#n=new MutationObserver(async()=>{let r=await this.#e();r&&(e.resolve(r),await this.stop())}),this.#n.observe(this.#t,{childList:!0,subtree:!0,attributes:!0})}async stop(){m(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped")),this.#n&&(this.#n.disconnect(),this.#n=void 0)}result(){return m(this.#r,"Polling never started."),this.#r.valueOrThrow()}},P=class{#e;#t;constructor(e){this.#e=e}async start(){let e=this.#t=f.create(),n=await this.#e();if(n){e.resolve(n);return}let r=async()=>{if(e.finished())return;let o=await this.#e();if(!o){window.requestAnimationFrame(r);return}e.resolve(o),await this.stop()};window.requestAnimationFrame(r)}async stop(){m(this.#t,"Polling never started."),this.#t.finished()||this.#t.reject(new Error("Polling stopped"))}result(){return m(this.#t,"Polling never started."),this.#t.valueOrThrow()}},x=class{#e;#t;#n;#r;constructor(e,n){this.#e=e,this.#t=n}async start(){let e=this.#r=f.create(),n=await this.#e();if(n){e.resolve(n);return}this.#n=setInterval(async()=>{let r=await this.#e();r&&(e.resolve(r),await this.stop())},this.#t)}async stop(){m(this.#r,"Polling never started."),this.#r.finished()||this.#r.reject(new Error("Polling stopped")),this.#n&&(clearInterval(this.#n),this.#n=void 0)}result(){return m(this.#r,"Polling never started."),this.#r.valueOrThrow()}};var W={};u(W,{pQuerySelector:()=>Ie,pQuerySelectorAll:()=>re});var c=class{static async*map(e,n){for await(let r of e)yield await n(r)}static async*flatMap(e,n){for await(let r of e)yield*n(r)}static async collect(e){let n=[];for await(let r of e)n.push(r);return n}static async first(e){for await(let n of e)return n}};var p={attribute:/\\[\\s*(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)\\s*(?:(?<operator>\\W?=)\\s*(?<value>.+?)\\s*(\\s(?<caseSensitive>[iIsS]))?\\s*)?\\]/gu,id:/#(?<name>[-\\w\\P{ASCII}]+)/gu,class:/\\.(?<name>[-\\w\\P{ASCII}]+)/gu,comma:/\\s*,\\s*/g,combinator:/\\s*[\\s>+~]\\s*/g,"pseudo-element":/::(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>¶*)\\))?/gu,"pseudo-class":/:(?<name>[-\\w\\P{ASCII}]+)(?:\\((?<argument>¶*)\\))?/gu,universal:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?\\*/gu,type:/(?:(?<namespace>\\*|[-\\w\\P{ASCII}]*)\\|)?(?<name>[-\\w\\P{ASCII}]+)/gu},fe=new Set(["combinator","comma"]);var de=t=>{switch(t){case"pseudo-element":case"pseudo-class":return new RegExp(p[t].source.replace("(?<argument>\\xB6*)","(?<argument>.*)"),"gu");default:return p[t]}};function me(t,e){let n=0,r="";for(;e<t.length;e++){let o=t[e];switch(o){case"(":++n;break;case")":--n;break}if(r+=o,n===0)return r}return r}function he(t,e=p){if(!t)return[];let n=[t];for(let[o,i]of Object.entries(e))for(let s=0;s<n.length;s++){let l=n[s];if(typeof l!="string")continue;i.lastIndex=0;let a=i.exec(l);if(!a)continue;let h=a.index-1,d=[],H=a[0],B=l.slice(0,h+1);B&&d.push(B),d.push({...a.groups,type:o,content:H});let z=l.slice(h+H.length+1);z&&d.push(z),n.splice(s,1,...d)}let r=0;for(let o of n)switch(typeof o){case"string":throw new Error(`Unexpected sequence ${o} found at index ${r}`);case"object":r+=o.content.length,o.pos=[r-o.content.length,r],fe.has(o.type)&&(o.content=o.content.trim()||" ");break}return n}var pe=/([\'"])([^\\\\\\n]+?)\\1/g,ye=/\\\\./g;function K(t,e=p){if(t=t.trim(),t==="")return[];let n=[];t=t.replace(ye,(i,s)=>(n.push({value:i,offset:s}),"\\uE000".repeat(i.length))),t=t.replace(pe,(i,s,l,a)=>(n.push({value:i,offset:a}),`${s}${"\\uE001".repeat(l.length)}${s}`));{let i=0,s;for(;(s=t.indexOf("(",i))>-1;){let l=me(t,s);n.push({value:l,offset:s}),t=`${t.substring(0,s)}(${"\\xB6".repeat(l.length-2)})${t.substring(s+l.length)}`,i=s+l.length}}let r=he(t,e),o=new Set;for(let i of n.reverse())for(let s of r){let{offset:l,value:a}=i;if(!(s.pos[0]<=l&&l+a.length<=s.pos[1]))continue;let{content:h}=s,d=l-s.pos[0];s.content=h.slice(0,d)+a+h.slice(d+a.length),s.content!==h&&o.add(s)}for(let i of o){let s=de(i.type);if(!s)throw new Error(`Unknown token type: ${i.type}`);s.lastIndex=0;let l=s.exec(i.content);if(!l)throw new Error(`Unable to parse content for ${i.type}: ${i.content}`);Object.assign(i,l.groups)}return r}function*N(t,e){switch(t.type){case"list":for(let n of t.list)yield*N(n,t);break;case"complex":yield*N(t.left,t),yield*N(t.right,t);break;case"compound":yield*t.list.map(n=>[n,t]);break;default:yield[t,e]}}function y(t){let e;return Array.isArray(t)?e=t:e=[...N(t)].map(([n])=>n),e.map(n=>n.content).join("")}p.combinator=/\\s*(>>>>?|[\\s>+~])\\s*/g;var ge=/\\\\[\\s\\S]/g,we=t=>t.length<=1?t:((t[0]===\'"\'||t[0]==="\'")&&t.endsWith(t[0])&&(t=t.slice(1,-1)),t.replace(ge,e=>e[1]));function Y(t){let e=!0,n=K(t);if(n.length===0)return[[],e];let r=[],o=[r],i=[o],s=[];for(let l of n){switch(l.type){case"combinator":switch(l.content){case">>>":e=!1,s.length&&(r.push(y(s)),s.splice(0)),r=[],o.push(">>>"),o.push(r);continue;case">>>>":e=!1,s.length&&(r.push(y(s)),s.splice(0)),r=[],o.push(">>>>"),o.push(r);continue}break;case"pseudo-element":if(!l.name.startsWith("-p-"))break;e=!1,s.length&&(r.push(y(s)),s.splice(0)),r.push({name:l.name.slice(3),value:we(l.argument??"")});continue;case"comma":s.length&&(r.push(y(s)),s.splice(0)),r=[],o=[r],i.push(o);continue}s.push(l)}return s.length&&r.push(y(s)),[i,e]}var Q={};u(Q,{textQuerySelectorAll:()=>b});var Se=new Set(["checkbox","image","radio"]),be=t=>t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement||t instanceof HTMLInputElement&&!Se.has(t.type),Te=new Set(["SCRIPT","STYLE"]),w=t=>!Te.has(t.nodeName)&&!document.head?.contains(t),_=new WeakMap,Z=t=>{for(;t;)_.delete(t),t instanceof ShadowRoot?t=t.host:t=t.parentNode},J=new WeakSet,Ee=new MutationObserver(t=>{for(let e of t)Z(e.target)}),g=t=>{let e=_.get(t);if(e||(e={full:"",immediate:[]},!w(t)))return e;let n="";if(be(t))e.full=t.value,e.immediate.push(t.value),t.addEventListener("input",r=>{Z(r.target)},{once:!0,capture:!0});else{for(let r=t.firstChild;r;r=r.nextSibling){if(r.nodeType===Node.TEXT_NODE){e.full+=r.nodeValue??"",n+=r.nodeValue??"";continue}n&&e.immediate.push(n),n="",r.nodeType===Node.ELEMENT_NODE&&(e.full+=g(r).full)}n&&e.immediate.push(n),t instanceof Element&&t.shadowRoot&&(e.full+=g(t.shadowRoot).full),J.has(t)||(Ee.observe(t,{childList:!0,characterData:!0,subtree:!0}),J.add(t))}return _.set(t,e),e};var b=function*(t,e){let n=!1;for(let r of t.childNodes)if(r instanceof Element&&w(r)){let o;r.shadowRoot?o=b(r.shadowRoot,e):o=b(r,e);for(let i of o)yield i,n=!0}n||t instanceof Element&&w(t)&&g(t).full.includes(e)&&(yield t)};var $={};u($,{checkVisibility:()=>xe,pierce:()=>A,pierceAll:()=>L});var Pe=["hidden","collapse"],xe=(t,e)=>{if(!t)return e===!1;if(e===void 0)return t;let n=t.nodeType===Node.TEXT_NODE?t.parentElement:t,r=window.getComputedStyle(n),o=r&&!Pe.includes(r.visibility)&&!Ne(n);return e===o?t:!1};function Ne(t){let e=t.getBoundingClientRect();return e.width===0||e.height===0}var Ae=t=>"shadowRoot"in t&&t.shadowRoot instanceof ShadowRoot;function*A(t){Ae(t)?yield t.shadowRoot:yield t}function*L(t){t=A(t).next().value,yield t;let e=[document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT)];for(let n of e){let r;for(;r=n.nextNode();)r.shadowRoot&&(yield r.shadowRoot,e.push(document.createTreeWalker(r.shadowRoot,NodeFilter.SHOW_ELEMENT)))}}var U={};u(U,{xpathQuerySelectorAll:()=>j});var j=function*(t,e,n=-1){let o=(t.ownerDocument||document).evaluate(e,t,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE),i=[],s;for(;(s=o.iterateNext())&&(i.push(s),!(n&&i.length===n)););for(let l=0;l<i.length;l++)s=i[l],yield s,delete i[l]};var ve=/[-\\w\\P{ASCII}*]/,ee=t=>"querySelectorAll"in t,v=class extends Error{constructor(e,n){super(`${e} is not a valid selector: ${n}`)}},F=class{#e;#t;#n=[];#r=void 0;elements;constructor(e,n,r){this.elements=[e],this.#e=n,this.#t=r,this.#o()}async run(){if(typeof this.#r=="string")switch(this.#r.trimStart()){case":scope":this.#o();break}for(;this.#r!==void 0;this.#o()){let e=this.#r,n=this.#e;typeof e=="string"?e[0]&&ve.test(e[0])?this.elements=c.flatMap(this.elements,async function*(r){ee(r)&&(yield*r.querySelectorAll(e))}):this.elements=c.flatMap(this.elements,async function*(r){if(!r.parentElement){if(!ee(r))return;yield*r.querySelectorAll(e);return}let o=0;for(let i of r.parentElement.children)if(++o,i===r)break;yield*r.parentElement.querySelectorAll(`:scope>:nth-child(${o})${e}`)}):this.elements=c.flatMap(this.elements,async function*(r){switch(e.name){case"text":yield*b(r,e.value);break;case"xpath":yield*j(r,e.value);break;case"aria":yield*k(r,e.value);break;default:let o=M.get(e.name);if(!o)throw new v(n,`Unknown selector type: ${e.name}`);yield*o.querySelectorAll(r,e.value)}})}}#o(){if(this.#n.length!==0){this.#r=this.#n.shift();return}if(this.#t.length===0){this.#r=void 0;return}let e=this.#t.shift();switch(e){case">>>>":{this.elements=c.flatMap(this.elements,A),this.#o();break}case">>>":{this.elements=c.flatMap(this.elements,L),this.#o();break}default:this.#n=e,this.#o();break}}},V=class{#e=new WeakMap;calculate(e,n=[]){if(e===null)return n;e instanceof ShadowRoot&&(e=e.host);let r=this.#e.get(e);if(r)return[...r,...n];let o=0;for(let s=e.previousSibling;s;s=s.previousSibling)++o;let i=this.calculate(e.parentNode,[o]);return this.#e.set(e,i),[...i,...n]}},te=(t,e)=>{if(t.length+e.length===0)return 0;let[n=-1,...r]=t,[o=-1,...i]=e;return n===o?te(r,i):n<o?-1:1},Ce=async function*(t){let e=new Set;for await(let r of t)e.add(r);let n=new V;yield*[...e.values()].map(r=>[r,n.calculate(r)]).sort(([,r],[,o])=>te(r,o)).map(([r])=>r)},re=function(t,e){let n,r;try{[n,r]=Y(e)}catch{return t.querySelectorAll(e)}if(r)return t.querySelectorAll(e);if(n.some(o=>{let i=0;return o.some(s=>(typeof s=="string"?++i:i=0,i>1))}))throw new v(e,"Multiple deep combinators found in sequence.");return Ce(c.flatMap(n,o=>{let i=new F(t,e,o);return i.run(),i.elements}))},Ie=async function(t,e){for await(let n of re(t,e))return n;return null};var ke=Object.freeze({...R,...q,...D,...W,...Q,...$,...U,Deferred:f,createFunction:G,createTextContent:g,IntervalPoller:x,isSuitableNodeForTextMatching:w,MutationPoller:E,RAFPoller:P}),Re=ke;\n';
Object.defineProperty(Yi, "__esModule", { value: !0 });
Yi.scriptInjector = Yi.ScriptInjector = void 0;
const $0 = Id;
var xo, No, Fs, Vf, Sl, By;
class Hy {
  constructor() {
    g(this, Fs);
    g(this, Sl);
    g(this, xo, !1);
    g(this, No, /* @__PURE__ */ new Set());
  }
  // Appends a statement of the form `(PuppeteerUtil) => {...}`.
  append(i) {
    L(this, Fs, Vf).call(this, () => {
      n(this, No).add(i);
    });
  }
  pop(i) {
    L(this, Fs, Vf).call(this, () => {
      n(this, No).delete(i);
    });
  }
  inject(i, t = !1) {
    (n(this, xo) || t) && i(L(this, Sl, By).call(this)), O(this, xo, !1);
  }
}
xo = new WeakMap(), No = new WeakMap(), Fs = new WeakSet(), Vf = function(i) {
  i(), O(this, xo, !0);
}, Sl = new WeakSet(), By = function() {
  return `(() => {
      const module = {};
      ${$0.source}
      ${[...n(this, No)].map((i) => `(${i})(module.exports.default);`).join("")}
      return module.exports.default;
    })()`;
};
Yi.ScriptInjector = Hy;
Yi.scriptInjector = new Hy();
var xa = {};
Object.defineProperty(xa, "__esModule", { value: !0 });
xa.AsyncIterableUtil = void 0;
class L0 {
  static async *map(i, t) {
    for await (const r of i)
      yield await t(r);
  }
  static async *flatMap(i, t) {
    for await (const r of i)
      yield* t(r);
  }
  static async collect(i) {
    const t = [];
    for await (const r of i)
      t.push(r);
    return t;
  }
  static async first(i) {
    for await (const t of i)
      return t;
  }
}
xa.AsyncIterableUtil = L0;
var Cu = {};
(function(l) {
  Object.defineProperty(l, "__esModule", { value: !0 }), l.interpolateFunction = l.stringifyFunction = l.createFunction = void 0;
  const i = /* @__PURE__ */ new Map(), t = (m) => {
    let _ = i.get(m);
    return _ || (_ = new Function(`return ${m}`)(), i.set(m, _), _);
  };
  l.createFunction = t;
  function r(m) {
    let _ = m.toString();
    try {
      new Function(`(${_})`);
    } catch {
      let k = "function ";
      _.startsWith("async ") && (k = `async ${k}`, _ = _.substring(6)), _ = `${k}${_}`;
      try {
        new Function(`(${_})`);
      } catch {
        throw new Error("Passed function cannot be serialized!");
      }
    }
    return _;
  }
  l.stringifyFunction = r;
  const s = (m, _) => {
    let k = r(m);
    for (const [I, x] of Object.entries(_))
      k = k.replace(
        new RegExp(`PLACEHOLDER\\(\\s*(?:'${I}'|"${I}")\\s*\\)`, "g"),
        // Wrapping this ensures tersers that accidently inline PLACEHOLDER calls
        // are still valid. Without, we may get calls like ()=>{...}() which is
        // not valid.
        `(${x})`
      );
    return (0, l.createFunction)(k);
  };
  l.interpolateFunction = s;
})(Cu);
var ju = {}, Kr = {}, Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu._isElementHandle = void 0;
Tu._isElementHandle = Symbol("_isElementHandle");
var Iu = {}, rl = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, Kf = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Iu, "__esModule", { value: !0 });
Iu.transposeIterableHandle = void 0;
const jp = vt, q0 = 20;
async function* H0(l, i) {
  const t = { stack: [], error: void 0, hasError: !1 };
  try {
    const s = await rl(t, await l.evaluateHandle(async (k, I) => {
      const x = [];
      for (; x.length < I; ) {
        const F = await k.next();
        if (F.done)
          break;
        x.push(F.value);
      }
      return x;
    }, i), !1).getProperties(), m = s.values();
    return rl(t, new jp.DisposableStack(), !1).defer(() => {
      for (const k of m) {
        const I = { stack: [], error: void 0, hasError: !1 };
        try {
          rl(I, k, !1)[jp.disposeSymbol]();
        } catch (x) {
          I.error = x, I.hasError = !0;
        } finally {
          Kf(I);
        }
      }
    }), yield* m, s.size === 0;
  } catch (r) {
    t.error = r, t.hasError = !0;
  } finally {
    Kf(t);
  }
}
async function* B0(l) {
  let i = q0;
  for (; !(yield* H0(l, i)); )
    i <<= 1;
}
async function* W0(l) {
  const i = { stack: [], error: void 0, hasError: !1 };
  try {
    const t = rl(i, await l.evaluateHandle((r) => async function* () {
      yield* r;
    }()), !1);
    yield* B0(t);
  } catch (t) {
    i.error = t, i.hasError = !0;
  } finally {
    Kf(i);
  }
}
Iu.transposeIterableHandle = W0;
var Ku = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, zu = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Kr, "__esModule", { value: !0 });
Kr.QueryHandler = void 0;
const lf = Tu, U0 = dt, Ua = Cu, V0 = Iu, df = Nn;
class zf {
  static get _querySelector() {
    if (this.querySelector)
      return this.querySelector;
    if (!this.querySelectorAll)
      throw new Error("Cannot create default `querySelector`.");
    return this.querySelector = (0, Ua.interpolateFunction)(async (i, t, r) => {
      const m = PLACEHOLDER("querySelectorAll")(i, t, r);
      for await (const _ of m)
        return _;
      return null;
    }, {
      querySelectorAll: (0, Ua.stringifyFunction)(this.querySelectorAll)
    });
  }
  static get _querySelectorAll() {
    if (this.querySelectorAll)
      return this.querySelectorAll;
    if (!this.querySelector)
      throw new Error("Cannot create default `querySelectorAll`.");
    return this.querySelectorAll = (0, Ua.interpolateFunction)(async function* (i, t, r) {
      const m = await PLACEHOLDER("querySelector")(i, t, r);
      m && (yield m);
    }, {
      querySelector: (0, Ua.stringifyFunction)(this.querySelector)
    });
  }
  /**
   * Queries for multiple nodes given a selector and {@link ElementHandle}.
   *
   * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll | Document.querySelectorAll()}.
   */
  static async *queryAll(i, t) {
    const r = { stack: [], error: void 0, hasError: !1 };
    try {
      const s = Ku(r, await i.evaluateHandle(this._querySelectorAll, t, df.LazyArg.create((m) => m.puppeteerUtil)), !1);
      yield* (0, V0.transposeIterableHandle)(s);
    } catch (s) {
      r.error = s, r.hasError = !0;
    } finally {
      zu(r);
    }
  }
  /**
   * Queries for a single node given a selector and {@link ElementHandle}.
   *
   * Akin to {@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector}.
   */
  static async queryOne(i, t) {
    const r = { stack: [], error: void 0, hasError: !1 };
    try {
      const s = Ku(r, await i.evaluateHandle(this._querySelector, t, df.LazyArg.create((m) => m.puppeteerUtil)), !1);
      return lf._isElementHandle in s ? s.move() : null;
    } catch (s) {
      r.error = s, r.hasError = !0;
    } finally {
      zu(r);
    }
  }
  /**
   * Waits until a single node appears for a given selector and
   * {@link ElementHandle}.
   *
   * This will always query the handle in the Puppeteer world and migrate the
   * result to the main world.
   */
  static async waitFor(i, t, r) {
    const s = { stack: [], error: void 0, hasError: !1 };
    try {
      let m;
      const _ = Ku(s, await (async () => {
        if (!(lf._isElementHandle in i)) {
          m = i;
          return;
        }
        return m = i.frame, await m.isolatedRealm().adoptHandle(i);
      })(), !1), { visible: k = !1, hidden: I = !1, timeout: x, signal: F } = r;
      try {
        const R = { stack: [], error: void 0, hasError: !1 };
        try {
          F == null || F.throwIfAborted();
          const N = Ku(R, await m.isolatedRealm().waitForFunction(async (Q, q, B, D, $) => {
            const z = await Q.createFunction(q)(D ?? document, B, Q);
            return Q.checkVisibility(z, $);
          }, {
            polling: k || I ? "raf" : "mutation",
            root: _,
            timeout: x,
            signal: F
          }, df.LazyArg.create((Q) => Q.puppeteerUtil), (0, Ua.stringifyFunction)(this._querySelector), t, _, k ? !0 : I ? !1 : void 0), !1);
          if (F != null && F.aborted)
            throw F.reason;
          return lf._isElementHandle in N ? await m.mainRealm().transferHandle(N) : null;
        } catch (N) {
          R.error = N, R.hasError = !0;
        } finally {
          zu(R);
        }
      } catch (R) {
        throw !(0, U0.isErrorLike)(R) || R.name === "AbortError" || (R.message = `Waiting for selector \`${t}\` failed: ${R.message}`), R;
      }
    } catch (m) {
      s.error = m, s.hasError = !0;
    } finally {
      zu(s);
    }
  }
}
// Either one of these may be implemented, but at least one must be.
Oe(zf, "querySelectorAll"), Oe(zf, "querySelector");
Kr.QueryHandler = zf;
Object.defineProperty(ju, "__esModule", { value: !0 });
ju.ARIAQueryHandler = void 0;
const K0 = Kr, z0 = et, Tp = xa, Q0 = /* @__PURE__ */ new Set(["StaticText", "InlineTextBox"]), J0 = async (l, i, t, r) => {
  const { nodes: s } = await l.send("Accessibility.queryAXTree", {
    objectId: i.id,
    accessibleName: t,
    role: r
  });
  return s.filter((m) => !m.role || !Q0.has(m.role.value));
}, G0 = (l) => ["name", "role"].includes(l), Ip = (l) => l.replace(/ +/g, " ").trim(), Y0 = /\[\s*(?<attribute>\w+)\s*=\s*(?<quote>"|')(?<value>\\.|.*?(?=\k<quote>))\k<quote>\s*\]/g, X0 = (l) => {
  const i = {}, t = l.replace(Y0, (r, s, m, _) => (s = s.trim(), (0, z0.assert)(G0(s), `Unknown aria attribute "${s}" in selector`), i[s] = Ip(_), ""));
  return t && !i.name && (i.name = Ip(t)), i;
}, ts = class ts extends K0.QueryHandler {
  static async *queryAll(i, t) {
    const { name: r, role: s } = X0(t), m = await J0(i.realm.environment.client, i, r, s);
    yield* Tp.AsyncIterableUtil.map(m, (_) => i.realm.adoptBackendNode(_.backendDOMNodeId));
  }
};
Oe(ts, "querySelector", async (i, t, { ariaQuerySelector: r }) => await r(i, t)), Oe(ts, "queryOne", async (i, t) => await Tp.AsyncIterableUtil.first(ts.queryAll(i, t)) ?? null);
let Qf = ts;
ju.ARIAQueryHandler = Qf;
var Md = {}, Fd = {}, Mu = {}, Wy = {};
(function(l) {
  var F;
  Object.defineProperty(l, "__esModule", { value: !0 }), l.clearCustomQueryHandlers = l.customQueryHandlerNames = l.unregisterCustomQueryHandler = l.registerCustomQueryHandler = l.customQueryHandlers = l.CustomQueryHandlerRegistry = void 0;
  const i = et, t = Cu, r = Kr, s = Yi;
  class m {
    constructor() {
      g(this, F, /* @__PURE__ */ new Map());
    }
    get(N) {
      const Q = n(this, F).get(N);
      return Q ? Q[1] : void 0;
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
    register(N, Q) {
      var D;
      (0, i.assert)(!n(this, F).has(N), `Cannot register over existing handler: ${N}`), (0, i.assert)(/^[a-zA-Z]+$/.test(N), "Custom query handler names may only contain [a-zA-Z]"), (0, i.assert)(Q.queryAll || Q.queryOne, "At least one query method must be implemented.");
      const q = (D = class extends r.QueryHandler {
      }, Oe(D, "querySelectorAll", (0, t.interpolateFunction)(($, A, z) => z.customQuerySelectors.get(PLACEHOLDER("name")).querySelectorAll($, A), { name: JSON.stringify(N) })), Oe(D, "querySelector", (0, t.interpolateFunction)(($, A, z) => z.customQuerySelectors.get(PLACEHOLDER("name")).querySelector($, A), { name: JSON.stringify(N) })), D), B = (0, t.interpolateFunction)(($) => {
        $.customQuerySelectors.register(PLACEHOLDER("name"), {
          queryAll: PLACEHOLDER("queryAll"),
          queryOne: PLACEHOLDER("queryOne")
        });
      }, {
        name: JSON.stringify(N),
        queryAll: Q.queryAll ? (0, t.stringifyFunction)(Q.queryAll) : String(void 0),
        queryOne: Q.queryOne ? (0, t.stringifyFunction)(Q.queryOne) : String(void 0)
      }).toString();
      n(this, F).set(N, [B, q]), s.scriptInjector.append(B);
    }
    /**
     * Unregisters the {@link CustomQueryHandler | custom query handler} for the
     * given name.
     *
     * @throws `Error` if there is no handler under the given name.
     */
    unregister(N) {
      const Q = n(this, F).get(N);
      if (!Q)
        throw new Error(`Cannot unregister unknown handler: ${N}`);
      s.scriptInjector.pop(Q[0]), n(this, F).delete(N);
    }
    /**
     * Gets the names of all {@link CustomQueryHandler | custom query handlers}.
     */
    names() {
      return [...n(this, F).keys()];
    }
    /**
     * Unregisters all custom query handlers.
     */
    clear() {
      for (const [N] of n(this, F))
        s.scriptInjector.pop(N);
      n(this, F).clear();
    }
  }
  F = new WeakMap(), l.CustomQueryHandlerRegistry = m, l.customQueryHandlers = new m();
  function _(R, N) {
    l.customQueryHandlers.register(R, N);
  }
  l.registerCustomQueryHandler = _;
  function k(R) {
    l.customQueryHandlers.unregister(R);
  }
  l.unregisterCustomQueryHandler = k;
  function I() {
    return l.customQueryHandlers.names();
  }
  l.customQueryHandlerNames = I;
  function x() {
    l.customQueryHandlers.clear();
  }
  l.clearCustomQueryHandlers = x;
})(Wy);
var Dd = {};
Object.defineProperty(Dd, "__esModule", { value: !0 });
Dd.PierceQueryHandler = void 0;
const Z0 = Kr;
class Jf extends Z0.QueryHandler {
}
Oe(Jf, "querySelector", (i, t, { pierceQuerySelector: r }) => r(i, t)), Oe(Jf, "querySelectorAll", (i, t, { pierceQuerySelectorAll: r }) => r(i, t));
Dd.PierceQueryHandler = Jf;
var Rd = {};
Object.defineProperty(Rd, "__esModule", { value: !0 });
Rd.PQueryHandler = void 0;
const eS = Kr;
class Gf extends eS.QueryHandler {
}
Oe(Gf, "querySelectorAll", (i, t, { pQuerySelectorAll: r }) => r(i, t)), Oe(Gf, "querySelector", (i, t, { pQuerySelector: r }) => r(i, t));
Rd.PQueryHandler = Gf;
var Ad = {};
Object.defineProperty(Ad, "__esModule", { value: !0 });
Ad.TextQueryHandler = void 0;
const tS = Kr;
class Uy extends tS.QueryHandler {
}
Oe(Uy, "querySelectorAll", (i, t, { textQuerySelectorAll: r }) => r(i, t));
Ad.TextQueryHandler = Uy;
var xd = {};
Object.defineProperty(xd, "__esModule", { value: !0 });
xd.XPathQueryHandler = void 0;
const rS = Kr;
class Yf extends rS.QueryHandler {
}
Oe(Yf, "querySelectorAll", (i, t, { xpathQuerySelectorAll: r }) => r(i, t)), Oe(Yf, "querySelector", (i, t, { xpathQuerySelectorAll: r }) => {
  for (const s of r(i, t, 1))
    return s;
  return null;
});
xd.XPathQueryHandler = Yf;
Object.defineProperty(Mu, "__esModule", { value: !0 });
Mu.getQueryHandlerAndSelector = void 0;
const nS = ju, Mp = Wy, iS = Dd, oS = Rd, aS = Ad, sS = xd, cS = {
  aria: nS.ARIAQueryHandler,
  pierce: iS.PierceQueryHandler,
  xpath: sS.XPathQueryHandler,
  text: aS.TextQueryHandler
}, uS = ["=", "/"];
function lS(l) {
  for (const i of [
    Mp.customQueryHandlers.names().map((t) => [t, Mp.customQueryHandlers.get(t)]),
    Object.entries(cS)
  ])
    for (const [t, r] of i)
      for (const s of uS) {
        const m = `${t}${s}`;
        if (l.startsWith(m))
          return l = l.slice(m.length), { updatedSelector: l, QueryHandler: r };
      }
  return { updatedSelector: l, QueryHandler: oS.PQueryHandler };
}
Mu.getQueryHandlerAndSelector = lS;
var dS = re && re.__runInitializers || function(l, i, t) {
  for (var r = arguments.length > 2, s = 0; s < i.length; s++)
    t = r ? i[s].call(l, t) : i[s].call(l);
  return r ? t : void 0;
}, Qe = re && re.__esDecorate || function(l, i, t, r, s, m) {
  function _($) {
    if ($ !== void 0 && typeof $ != "function")
      throw new TypeError("Function expected");
    return $;
  }
  for (var k = r.kind, I = k === "getter" ? "get" : k === "setter" ? "set" : "value", x = !i && l ? r.static ? l : l.prototype : null, F = i || (x ? Object.getOwnPropertyDescriptor(x, r.name) : {}), R, N = !1, Q = t.length - 1; Q >= 0; Q--) {
    var q = {};
    for (var B in r)
      q[B] = B === "access" ? {} : r[B];
    for (var B in r.access)
      q.access[B] = r.access[B];
    q.addInitializer = function($) {
      if (N)
        throw new TypeError("Cannot add initializers after decoration has completed");
      m.push(_($ || null));
    };
    var D = (0, t[Q])(k === "accessor" ? { get: F.get, set: F.set } : F[I], q);
    if (k === "accessor") {
      if (D === void 0)
        continue;
      if (D === null || typeof D != "object")
        throw new TypeError("Object expected");
      (R = _(D.get)) && (F.get = R), (R = _(D.set)) && (F.set = R), (R = _(D.init)) && s.unshift(R);
    } else
      (R = _(D)) && (k === "field" ? s.unshift(R) : F[I] = R);
  }
  x && Object.defineProperty(x, r.name, F), N = !0;
}, Bn = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, Wn = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Fd, "__esModule", { value: !0 });
Fd.ElementHandle = void 0;
const ff = Mu, fS = Nn, Va = Ze, Ka = et, hS = xa, Je = Ct, pS = Tu, Qu = Aa;
let yS = (() => {
  var Er, Xf, $n, Vy, zr, Zf, Pr, eh, Or, th, zt, Ky, no, zy, be;
  var l, i, t, r, s, m, _, k, I, x, F, R, N, Q, q, B, D, $, A, z, Ie, ke, $e, Ne, Y, le, he, ce, Ce, Ee, Fe, He;
  let Pe = Qu.JSHandle, ye = [], Ue, W, ie, Z, je, V, ee, ue, X, ge, pe, C, P, ne, _e, De, xe, Ge, tt, _t, St, Ft, at, $a, Me, me, fe, Xe, _r, Sr, to, ro;
  return be = class extends Pe {
    /**
     * @internal
     */
    constructor(H) {
      super();
      g(this, Er);
      g(this, $n);
      g(this, zr);
      g(this, Pr);
      g(this, Or);
      /**
       * Returns true if an element is an SVGElement (included svg, path, rect
       * etc.).
       */
      g(this, zt);
      g(this, no);
      /**
       * @internal
       */
      Oe(this, "handle", (dS(this, ye), void 0));
      this.handle = H, this[pS._isElementHandle] = !0;
    }
    /**
     * A given method will have it's `this` replaced with an isolated version of
     * `this` when decorated with this decorator.
     *
     * All changes of isolated `this` are reflected on the actual `this`.
     *
     * @internal
     */
    static bindIsolatedHandle(H, j) {
      return async function(...Se) {
        const we = { stack: [], error: void 0, hasError: !1 };
        try {
          if (this.realm === this.frame.isolatedRealm())
            return await H.call(this, ...Se);
          const Le = Bn(we, await this.frame.isolatedRealm().adoptHandle(this), !1), Re = await H.call(Le, ...Se);
          return Re === Le ? this : Re instanceof Qu.JSHandle ? await this.realm.transferHandle(Re) : (Array.isArray(Re) && await Promise.all(Re.map(async (Ve, it, rt) => {
            Ve instanceof Qu.JSHandle && (rt[it] = await this.realm.transferHandle(Ve));
          })), Re instanceof Map && await Promise.all([...Re.entries()].map(async ([Ve, it]) => {
            it instanceof Qu.JSHandle && Re.set(Ve, await this.realm.transferHandle(it));
          })), Re);
        } catch (Le) {
          we.error = Le, we.hasError = !0;
        } finally {
          Wn(we);
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
    async getProperty(H) {
      return await this.handle.getProperty(H);
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
    async evaluate(H, ...j) {
      return H = (0, Va.withSourcePuppeteerURLIfNone)(this.evaluate.name, H), await this.handle.evaluate(H, ...j);
    }
    /**
     * @internal
     */
    async evaluateHandle(H, ...j) {
      return H = (0, Va.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, H), await this.handle.evaluateHandle(H, ...j);
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
    async $(H) {
      const { updatedSelector: j, QueryHandler: Se } = (0, ff.getQueryHandlerAndSelector)(H);
      return await Se.queryOne(this, j);
    }
    /**
     * Queries the current element for all elements matching the given selector.
     *
     * @param selector - The selector to query for.
     * @returns An array of {@link ElementHandle | element handles} that point to
     * elements matching the given selector.
     */
    async $$(H) {
      const { updatedSelector: j, QueryHandler: Se } = (0, ff.getQueryHandlerAndSelector)(H);
      return await hS.AsyncIterableUtil.collect(Se.queryAll(this, j));
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
    async $eval(H, j, ...Se) {
      const we = { stack: [], error: void 0, hasError: !1 };
      try {
        j = (0, Va.withSourcePuppeteerURLIfNone)(this.$eval.name, j);
        const Le = Bn(we, await this.$(H), !1);
        if (!Le)
          throw new Error(`Error: failed to find element matching selector "${H}"`);
        return await Le.evaluate(j, ...Se);
      } catch (Le) {
        we.error = Le, we.hasError = !0;
      } finally {
        Wn(we);
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
    async $$eval(H, j, ...Se) {
      const we = { stack: [], error: void 0, hasError: !1 };
      try {
        j = (0, Va.withSourcePuppeteerURLIfNone)(this.$$eval.name, j);
        const Le = await this.$$(H), Re = Bn(we, await this.evaluateHandle((it, ...rt) => rt, ...Le), !1), [Ve] = await Promise.all([
          Re.evaluate(j, ...Se),
          ...Le.map((it) => it.dispose())
        ]);
        return Ve;
      } catch (Le) {
        we.error = Le, we.hasError = !0;
      } finally {
        Wn(we);
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
    async $x(H) {
      return H.startsWith("//") && (H = `.${H}`), await this.$$(`xpath/${H}`);
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
    async waitForSelector(H, j = {}) {
      const { updatedSelector: Se, QueryHandler: we } = (0, ff.getQueryHandlerAndSelector)(H);
      return await we.waitFor(this, Se, j);
    }
    /**
     * Checks if an element is visible using the same mechanism as
     * {@link ElementHandle.waitForSelector}.
     */
    async isVisible() {
      return await L(this, Er, Xf).call(this, !0);
    }
    /**
     * Checks if an element is hidden using the same mechanism as
     * {@link ElementHandle.waitForSelector}.
     */
    async isHidden() {
      return await L(this, Er, Xf).call(this, !1);
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
    async waitForXPath(H, j = {}) {
      return H.startsWith("//") && (H = `.${H}`), await this.waitForSelector(`xpath/${H}`, j);
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
    async toElement(H) {
      if (!await this.evaluate((Se, we) => Se.nodeName === we.toUpperCase(), H))
        throw new Error(`Element is not a(n) \`${H}\` element`);
      return this;
    }
    /**
     * Returns the middle point within an element unless a specific offset is provided.
     */
    async clickablePoint(H) {
      const j = await L(this, $n, Vy).call(this);
      if (!j)
        throw new Error("Node is either not clickable or not an Element");
      return H !== void 0 ? {
        x: j.x + H.x,
        y: j.y + H.y
      } : {
        x: j.x + j.width / 2,
        y: j.y + j.height / 2
      };
    }
    /**
     * This method scrolls element into view if needed, and then
     * uses {@link Page} to hover over the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    async hover() {
      await this.scrollIntoViewIfNeeded();
      const { x: H, y: j } = await this.clickablePoint();
      await this.frame.page().mouse.move(H, j);
    }
    /**
     * This method scrolls element into view if needed, and then
     * uses {@link Page | Page.mouse} to click in the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    async click(H = {}) {
      await this.scrollIntoViewIfNeeded();
      const { x: j, y: Se } = await this.clickablePoint(H.offset);
      await this.frame.page().mouse.click(j, Se, H);
    }
    /**
     * Drags an element over the given element or point.
     *
     * @returns DEPRECATED. When drag interception is enabled, the drag payload is
     * returned.
     */
    async drag(H) {
      await this.scrollIntoViewIfNeeded();
      const j = this.frame.page();
      if (j.isDragInterceptionEnabled()) {
        const Se = await this.clickablePoint();
        return H instanceof be && (H = await H.clickablePoint()), await j.mouse.drag(Se, H);
      }
      try {
        j._isDragging || (j._isDragging = !0, await this.hover(), await j.mouse.down()), H instanceof be ? await H.hover() : await j.mouse.move(H.x, H.y);
      } catch (Se) {
        throw j._isDragging = !1, Se;
      }
    }
    /**
     * @deprecated Do not use. `dragenter` will automatically be performed during dragging.
     */
    async dragEnter(H = { items: [], dragOperationsMask: 1 }) {
      const j = this.frame.page();
      await this.scrollIntoViewIfNeeded();
      const Se = await this.clickablePoint();
      await j.mouse.dragEnter(Se, H);
    }
    /**
     * @deprecated Do not use. `dragover` will automatically be performed during dragging.
     */
    async dragOver(H = { items: [], dragOperationsMask: 1 }) {
      const j = this.frame.page();
      await this.scrollIntoViewIfNeeded();
      const Se = await this.clickablePoint();
      await j.mouse.dragOver(Se, H);
    }
    /**
     * @internal
     */
    async drop(H = {
      items: [],
      dragOperationsMask: 1
    }) {
      const j = this.frame.page();
      if ("items" in H) {
        await this.scrollIntoViewIfNeeded();
        const Se = await this.clickablePoint();
        await j.mouse.drop(Se, H);
      } else
        await H.drag(this), j._isDragging = !1, await j.mouse.up();
    }
    /**
     * @deprecated Use `ElementHandle.drop` instead.
     */
    async dragAndDrop(H, j) {
      const Se = this.frame.page();
      (0, Ka.assert)(Se.isDragInterceptionEnabled(), "Drag Interception is not enabled!"), await this.scrollIntoViewIfNeeded();
      const we = await this.clickablePoint(), Le = await H.clickablePoint();
      await Se.mouse.dragAndDrop(we, Le, j);
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
    async select(...H) {
      for (const j of H)
        (0, Ka.assert)((0, Va.isString)(j), 'Values must be strings. Found value "' + j + '" of type "' + typeof j + '"');
      return await this.evaluate((j, Se) => {
        const we = new Set(Se);
        if (!(j instanceof HTMLSelectElement))
          throw new Error("Element is not a <select> element.");
        const Le = /* @__PURE__ */ new Set();
        if (j.multiple)
          for (const Re of j.options)
            Re.selected = we.has(Re.value), Re.selected && Le.add(Re.value);
        else {
          for (const Re of j.options)
            Re.selected = !1;
          for (const Re of j.options)
            if (we.has(Re.value)) {
              Re.selected = !0, Le.add(Re.value);
              break;
            }
        }
        return j.dispatchEvent(new Event("input", { bubbles: !0 })), j.dispatchEvent(new Event("change", { bubbles: !0 })), [...Le.values()];
      }, H);
    }
    /**
     * This method scrolls element into view if needed, and then uses
     * {@link Touchscreen.tap} to tap in the center of the element.
     * If the element is detached from DOM, the method throws an error.
     */
    async tap() {
      await this.scrollIntoViewIfNeeded();
      const { x: H, y: j } = await this.clickablePoint();
      await this.frame.page().touchscreen.tap(H, j);
    }
    async touchStart() {
      await this.scrollIntoViewIfNeeded();
      const { x: H, y: j } = await this.clickablePoint();
      await this.frame.page().touchscreen.touchStart(H, j);
    }
    async touchMove() {
      await this.scrollIntoViewIfNeeded();
      const { x: H, y: j } = await this.clickablePoint();
      await this.frame.page().touchscreen.touchMove(H, j);
    }
    async touchEnd() {
      await this.scrollIntoViewIfNeeded(), await this.frame.page().touchscreen.touchEnd();
    }
    /**
     * Calls {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus | focus} on the element.
     */
    async focus() {
      await this.evaluate((H) => {
        if (!(H instanceof HTMLElement))
          throw new Error("Cannot focus non-HTMLElement");
        return H.focus();
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
    async type(H, j) {
      await this.focus(), await this.frame.page().keyboard.type(H, j);
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
    async press(H, j) {
      await this.focus(), await this.frame.page().keyboard.press(H, j);
    }
    /**
     * This method returns the bounding box of the element (relative to the main frame),
     * or `null` if the element is {@link https://drafts.csswg.org/css-display-4/#box-generation | not part of the layout}
     * (example: `display: none`).
     */
    async boundingBox() {
      const H = await this.evaluate((Se) => {
        if (!(Se instanceof Element) || Se.getClientRects().length === 0)
          return null;
        const we = Se.getBoundingClientRect();
        return { x: we.x, y: we.y, width: we.width, height: we.height };
      });
      if (!H)
        return null;
      const j = await L(this, Pr, eh).call(this);
      return j ? {
        x: H.x + j.x,
        y: H.y + j.y,
        height: H.height,
        width: H.width
      } : null;
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
      const H = await this.evaluate((Se) => {
        if (!(Se instanceof Element) || Se.getClientRects().length === 0)
          return null;
        const we = Se.getBoundingClientRect(), Le = window.getComputedStyle(Se), Re = {
          padding: {
            left: parseInt(Le.paddingLeft, 10),
            top: parseInt(Le.paddingTop, 10),
            right: parseInt(Le.paddingRight, 10),
            bottom: parseInt(Le.paddingBottom, 10)
          },
          margin: {
            left: -parseInt(Le.marginLeft, 10),
            top: -parseInt(Le.marginTop, 10),
            right: -parseInt(Le.marginRight, 10),
            bottom: -parseInt(Le.marginBottom, 10)
          },
          border: {
            left: parseInt(Le.borderLeft, 10),
            top: parseInt(Le.borderTop, 10),
            right: parseInt(Le.borderRight, 10),
            bottom: parseInt(Le.borderBottom, 10)
          }
        }, Ve = [
          { x: we.left, y: we.top },
          { x: we.left + we.width, y: we.top },
          { x: we.left + we.width, y: we.top + we.bottom },
          { x: we.left, y: we.top + we.bottom }
        ], it = yt(Ve, Re.border), rt = yt(it, Re.padding), xt = yt(Ve, Re.margin);
        return {
          content: rt,
          padding: it,
          border: Ve,
          margin: xt,
          width: we.width,
          height: we.height
        };
        function yt(Nt, Qt) {
          return [
            {
              x: Nt[0].x + Qt.left,
              y: Nt[0].y + Qt.top
            },
            {
              x: Nt[1].x - Qt.right,
              y: Nt[1].y + Qt.top
            },
            {
              x: Nt[2].x - Qt.right,
              y: Nt[2].y - Qt.bottom
            },
            {
              x: Nt[3].x + Qt.left,
              y: Nt[3].y - Qt.bottom
            }
          ];
        }
      });
      if (!H)
        return null;
      const j = await L(this, Pr, eh).call(this);
      if (!j)
        return null;
      for (const Se of [
        "content",
        "padding",
        "border",
        "margin"
      ])
        for (const we of H[Se])
          we.x += j.x, we.y += j.y;
      return H;
    }
    async screenshot(H = {}) {
      const j = { stack: [], error: void 0, hasError: !1 };
      try {
        const { scrollIntoView: Se = !0, captureBeyondViewport: we = !0, allowViewportExpansion: Le = we } = H;
        let Re = await L(this, Or, th).call(this);
        const Ve = this.frame.page(), it = Bn(j, Le && Re ? await Ve._createTemporaryViewportContainingBox(Re) : null, !0);
        Se && (await this.scrollIntoViewIfNeeded(), Re = await L(this, Or, th).call(this));
        const [rt, xt] = await this.evaluate(() => {
          if (!window.visualViewport)
            throw new Error("window.visualViewport is not supported.");
          return [
            window.visualViewport.pageLeft,
            window.visualViewport.pageTop
          ];
        });
        return Re.x += rt, Re.y += xt, await Ve.screenshot({
          ...H,
          captureBeyondViewport: !1,
          clip: Re
        });
      } catch (Se) {
        j.error = Se, j.hasError = !0;
      } finally {
        const Se = Wn(j);
        Se && await Se;
      }
    }
    /**
     * @internal
     */
    async assertConnectedElement() {
      const H = await this.evaluate(async (j) => {
        if (!j.isConnected)
          return "Node is detached from document";
        if (j.nodeType !== Node.ELEMENT_NODE)
          return "Node is not of type HTMLElement";
      });
      if (H)
        throw new Error(H);
    }
    /**
     * @internal
     */
    async scrollIntoViewIfNeeded() {
      await this.isIntersectingViewport({
        threshold: 1
      }) || await this.scrollIntoView();
    }
    /**
     * Resolves to true if the element is visible in the current viewport. If an
     * element is an SVG, we check if the svg owner element is in the viewport
     * instead. See https://crbug.com/963246.
     *
     * @param options - Threshold for the intersection between 0 (no intersection) and 1
     * (full intersection). Defaults to 1.
     */
    async isIntersectingViewport(H = {}) {
      var Se;
      const j = { stack: [], error: void 0, hasError: !1 };
      try {
        await this.assertConnectedElement();
        const we = await L(this, zt, Ky).call(this);
        return await (Bn(j, we && await L(Se = we, no, zy).call(Se), !1) ?? this).evaluate(async (Re, Ve) => {
          const it = await new Promise((rt) => {
            const xt = new IntersectionObserver((yt) => {
              rt(yt[0].intersectionRatio), xt.disconnect();
            });
            xt.observe(Re);
          });
          return Ve === 1 ? it === 1 : it > Ve;
        }, H.threshold ?? 0);
      } catch (we) {
        j.error = we, j.hasError = !0;
      } finally {
        Wn(j);
      }
    }
    /**
     * Scrolls the element into view using either the automation protocol client
     * or by calling element.scrollIntoView.
     */
    async scrollIntoView() {
      await this.assertConnectedElement(), await this.evaluate(async (H) => {
        H.scrollIntoView({
          block: "center",
          inline: "center",
          behavior: "instant"
        });
      });
    }
  }, Er = new WeakSet(), Xf = async function(H) {
    return await this.evaluate(async (j, Se, we) => !!Se.checkVisibility(j, we), fS.LazyArg.create((j) => j.puppeteerUtil), H);
  }, $n = new WeakSet(), Vy = async function() {
    var Le;
    const H = await this.evaluate((Re) => Re instanceof Element ? [...Re.getClientRects()].map((Ve) => ({ x: Ve.x, y: Ve.y, width: Ve.width, height: Ve.height })) : null);
    if (!(H != null && H.length))
      return null;
    await L(this, zr, Zf).call(this, H);
    let j = this.frame, Se;
    for (; Se = j == null ? void 0 : j.parentFrame(); ) {
      const Re = { stack: [], error: void 0, hasError: !1 };
      try {
        const Ve = Bn(Re, await j.frameElement(), !1);
        if (!Ve)
          throw new Error("Unsupported frame type");
        const it = await Ve.evaluate((rt) => {
          if (rt.getClientRects().length === 0)
            return null;
          const xt = rt.getBoundingClientRect(), yt = window.getComputedStyle(rt);
          return {
            left: xt.left + parseInt(yt.paddingLeft, 10) + parseInt(yt.borderLeftWidth, 10),
            top: xt.top + parseInt(yt.paddingTop, 10) + parseInt(yt.borderTopWidth, 10)
          };
        });
        if (!it)
          return null;
        for (const rt of H)
          rt.x += it.left, rt.y += it.top;
        await L(Le = Ve, zr, Zf).call(Le, H), j = Se;
      } catch (Ve) {
        Re.error = Ve, Re.hasError = !0;
      } finally {
        Wn(Re);
      }
    }
    const we = H.find((Re) => Re.width >= 1 && Re.height >= 1);
    return we ? {
      x: we.x,
      y: we.y,
      height: we.height,
      width: we.width
    } : null;
  }, zr = new WeakSet(), Zf = async function(H) {
    const { documentWidth: j, documentHeight: Se } = await this.frame.isolatedRealm().evaluate(() => ({
      documentWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.clientHeight
    }));
    for (const we of H)
      mS(we, j, Se);
  }, Pr = new WeakSet(), eh = async function() {
    const H = { x: 0, y: 0 };
    let j = this.frame, Se;
    for (; Se = j == null ? void 0 : j.parentFrame(); ) {
      const we = { stack: [], error: void 0, hasError: !1 };
      try {
        const Le = Bn(we, await j.frameElement(), !1);
        if (!Le)
          throw new Error("Unsupported frame type");
        const Re = await Le.evaluate((Ve) => {
          if (Ve.getClientRects().length === 0)
            return null;
          const it = Ve.getBoundingClientRect(), rt = window.getComputedStyle(Ve);
          return {
            left: it.left + parseInt(rt.paddingLeft, 10) + parseInt(rt.borderLeftWidth, 10),
            top: it.top + parseInt(rt.paddingTop, 10) + parseInt(rt.borderTopWidth, 10)
          };
        });
        if (!Re)
          return null;
        H.x += Re.left, H.y += Re.top, j = Se;
      } catch (Le) {
        we.error = Le, we.hasError = !0;
      } finally {
        Wn(we);
      }
    }
    return H;
  }, Or = new WeakSet(), th = async function() {
    const H = await this.boundingBox();
    return (0, Ka.assert)(H, "Node is either not visible or not an HTMLElement"), (0, Ka.assert)(H.width !== 0, "Node has 0 width."), (0, Ka.assert)(H.height !== 0, "Node has 0 height."), H;
  }, zt = new WeakSet(), Ky = async function() {
    return await this.evaluate((H) => H instanceof SVGElement) ? this : null;
  }, no = new WeakSet(), zy = async function() {
    return await this.evaluateHandle((H) => H instanceof SVGSVGElement ? H : H.ownerSVGElement);
  }, (() => {
    const H = typeof Symbol == "function" && Symbol.metadata ? Object.create(Pe[Symbol.metadata] ?? null) : void 0;
    Ue = [(0, Je.throwIfDisposed)(), (l = be).bindIsolatedHandle.bind(l)], W = [(0, Je.throwIfDisposed)(), (i = be).bindIsolatedHandle.bind(i)], ie = [(0, Je.throwIfDisposed)(), (t = be).bindIsolatedHandle.bind(t)], Z = [(0, Je.throwIfDisposed)(), (r = be).bindIsolatedHandle.bind(r)], je = [(0, Je.throwIfDisposed)(), (s = be).bindIsolatedHandle.bind(s)], V = [(0, Je.throwIfDisposed)(), (m = be).bindIsolatedHandle.bind(m)], ee = [(0, Je.throwIfDisposed)(), (_ = be).bindIsolatedHandle.bind(_)], ue = [(0, Je.throwIfDisposed)(), (k = be).bindIsolatedHandle.bind(k)], X = [(0, Je.throwIfDisposed)(), (I = be).bindIsolatedHandle.bind(I)], ge = [(0, Je.throwIfDisposed)(), (x = be).bindIsolatedHandle.bind(x)], pe = [(0, Je.throwIfDisposed)(), (F = be).bindIsolatedHandle.bind(F)], C = [(0, Je.throwIfDisposed)(), (R = be).bindIsolatedHandle.bind(R)], P = [(0, Je.throwIfDisposed)(), (N = be).bindIsolatedHandle.bind(N)], ne = [(0, Je.throwIfDisposed)(), (Q = be).bindIsolatedHandle.bind(Q)], _e = [(0, Je.throwIfDisposed)(), (q = be).bindIsolatedHandle.bind(q)], De = [(0, Je.throwIfDisposed)(), (B = be).bindIsolatedHandle.bind(B)], xe = [(0, Je.throwIfDisposed)(), (D = be).bindIsolatedHandle.bind(D)], Ge = [(0, Je.throwIfDisposed)(), ($ = be).bindIsolatedHandle.bind($)], tt = [(0, Je.throwIfDisposed)(), (A = be).bindIsolatedHandle.bind(A)], _t = [(0, Je.throwIfDisposed)(), (z = be).bindIsolatedHandle.bind(z)], St = [(0, Je.throwIfDisposed)(), (Ie = be).bindIsolatedHandle.bind(Ie)], Ft = [(0, Je.throwIfDisposed)(), (ke = be).bindIsolatedHandle.bind(ke)], at = [(0, Je.throwIfDisposed)(), ($e = be).bindIsolatedHandle.bind($e)], $a = [(0, Je.throwIfDisposed)(), (Ne = be).bindIsolatedHandle.bind(Ne)], Me = [(0, Je.throwIfDisposed)(), (Y = be).bindIsolatedHandle.bind(Y)], me = [(0, Je.throwIfDisposed)(), (le = be).bindIsolatedHandle.bind(le)], fe = [(0, Je.throwIfDisposed)(), (he = be).bindIsolatedHandle.bind(he)], Xe = [(0, Je.throwIfDisposed)(), (ce = be).bindIsolatedHandle.bind(ce)], _r = [(0, Je.throwIfDisposed)(), (Ce = be).bindIsolatedHandle.bind(Ce)], Sr = [(0, Je.throwIfDisposed)(), (Ee = be).bindIsolatedHandle.bind(Ee)], to = [(0, Je.throwIfDisposed)(), (Fe = be).bindIsolatedHandle.bind(Fe)], ro = [(0, Je.throwIfDisposed)(), (He = be).bindIsolatedHandle.bind(He)], Qe(be, null, Ue, { kind: "method", name: "getProperty", static: !1, private: !1, access: { has: (j) => "getProperty" in j, get: (j) => j.getProperty }, metadata: H }, null, ye), Qe(be, null, W, { kind: "method", name: "getProperties", static: !1, private: !1, access: { has: (j) => "getProperties" in j, get: (j) => j.getProperties }, metadata: H }, null, ye), Qe(be, null, ie, { kind: "method", name: "jsonValue", static: !1, private: !1, access: { has: (j) => "jsonValue" in j, get: (j) => j.jsonValue }, metadata: H }, null, ye), Qe(be, null, Z, { kind: "method", name: "$", static: !1, private: !1, access: { has: (j) => "$" in j, get: (j) => j.$ }, metadata: H }, null, ye), Qe(be, null, je, { kind: "method", name: "$$", static: !1, private: !1, access: { has: (j) => "$$" in j, get: (j) => j.$$ }, metadata: H }, null, ye), Qe(be, null, V, { kind: "method", name: "$x", static: !1, private: !1, access: { has: (j) => "$x" in j, get: (j) => j.$x }, metadata: H }, null, ye), Qe(be, null, ee, { kind: "method", name: "waitForSelector", static: !1, private: !1, access: { has: (j) => "waitForSelector" in j, get: (j) => j.waitForSelector }, metadata: H }, null, ye), Qe(be, null, ue, { kind: "method", name: "isVisible", static: !1, private: !1, access: { has: (j) => "isVisible" in j, get: (j) => j.isVisible }, metadata: H }, null, ye), Qe(be, null, X, { kind: "method", name: "isHidden", static: !1, private: !1, access: { has: (j) => "isHidden" in j, get: (j) => j.isHidden }, metadata: H }, null, ye), Qe(be, null, ge, { kind: "method", name: "waitForXPath", static: !1, private: !1, access: { has: (j) => "waitForXPath" in j, get: (j) => j.waitForXPath }, metadata: H }, null, ye), Qe(be, null, pe, { kind: "method", name: "toElement", static: !1, private: !1, access: { has: (j) => "toElement" in j, get: (j) => j.toElement }, metadata: H }, null, ye), Qe(be, null, C, { kind: "method", name: "clickablePoint", static: !1, private: !1, access: { has: (j) => "clickablePoint" in j, get: (j) => j.clickablePoint }, metadata: H }, null, ye), Qe(be, null, P, { kind: "method", name: "hover", static: !1, private: !1, access: { has: (j) => "hover" in j, get: (j) => j.hover }, metadata: H }, null, ye), Qe(be, null, ne, { kind: "method", name: "click", static: !1, private: !1, access: { has: (j) => "click" in j, get: (j) => j.click }, metadata: H }, null, ye), Qe(be, null, _e, { kind: "method", name: "drag", static: !1, private: !1, access: { has: (j) => "drag" in j, get: (j) => j.drag }, metadata: H }, null, ye), Qe(be, null, De, { kind: "method", name: "dragEnter", static: !1, private: !1, access: { has: (j) => "dragEnter" in j, get: (j) => j.dragEnter }, metadata: H }, null, ye), Qe(be, null, xe, { kind: "method", name: "dragOver", static: !1, private: !1, access: { has: (j) => "dragOver" in j, get: (j) => j.dragOver }, metadata: H }, null, ye), Qe(be, null, Ge, { kind: "method", name: "drop", static: !1, private: !1, access: { has: (j) => "drop" in j, get: (j) => j.drop }, metadata: H }, null, ye), Qe(be, null, tt, { kind: "method", name: "dragAndDrop", static: !1, private: !1, access: { has: (j) => "dragAndDrop" in j, get: (j) => j.dragAndDrop }, metadata: H }, null, ye), Qe(be, null, _t, { kind: "method", name: "select", static: !1, private: !1, access: { has: (j) => "select" in j, get: (j) => j.select }, metadata: H }, null, ye), Qe(be, null, St, { kind: "method", name: "tap", static: !1, private: !1, access: { has: (j) => "tap" in j, get: (j) => j.tap }, metadata: H }, null, ye), Qe(be, null, Ft, { kind: "method", name: "touchStart", static: !1, private: !1, access: { has: (j) => "touchStart" in j, get: (j) => j.touchStart }, metadata: H }, null, ye), Qe(be, null, at, { kind: "method", name: "touchMove", static: !1, private: !1, access: { has: (j) => "touchMove" in j, get: (j) => j.touchMove }, metadata: H }, null, ye), Qe(be, null, $a, { kind: "method", name: "touchEnd", static: !1, private: !1, access: { has: (j) => "touchEnd" in j, get: (j) => j.touchEnd }, metadata: H }, null, ye), Qe(be, null, Me, { kind: "method", name: "focus", static: !1, private: !1, access: { has: (j) => "focus" in j, get: (j) => j.focus }, metadata: H }, null, ye), Qe(be, null, me, { kind: "method", name: "type", static: !1, private: !1, access: { has: (j) => "type" in j, get: (j) => j.type }, metadata: H }, null, ye), Qe(be, null, fe, { kind: "method", name: "press", static: !1, private: !1, access: { has: (j) => "press" in j, get: (j) => j.press }, metadata: H }, null, ye), Qe(be, null, Xe, { kind: "method", name: "boundingBox", static: !1, private: !1, access: { has: (j) => "boundingBox" in j, get: (j) => j.boundingBox }, metadata: H }, null, ye), Qe(be, null, _r, { kind: "method", name: "boxModel", static: !1, private: !1, access: { has: (j) => "boxModel" in j, get: (j) => j.boxModel }, metadata: H }, null, ye), Qe(be, null, Sr, { kind: "method", name: "screenshot", static: !1, private: !1, access: { has: (j) => "screenshot" in j, get: (j) => j.screenshot }, metadata: H }, null, ye), Qe(be, null, to, { kind: "method", name: "isIntersectingViewport", static: !1, private: !1, access: { has: (j) => "isIntersectingViewport" in j, get: (j) => j.isIntersectingViewport }, metadata: H }, null, ye), Qe(be, null, ro, { kind: "method", name: "scrollIntoView", static: !1, private: !1, access: { has: (j) => "scrollIntoView" in j, get: (j) => j.scrollIntoView }, metadata: H }, null, ye), H && Object.defineProperty(be, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: H });
  })(), be;
})();
Fd.ElementHandle = yS;
function mS(l, i, t) {
  l.width = Math.max(l.x >= 0 ? Math.min(i - l.x, l.width) : Math.min(i, l.width + l.x), 0), l.height = Math.max(l.y >= 0 ? Math.min(t - l.y, l.height) : Math.min(t, l.height + l.y), 0);
}
var Vr = {};
Object.defineProperty(Vr, "__esModule", { value: !0 });
Vr.releaseObject = Vr.CdpJSHandle = void 0;
const vS = Aa, rh = Ze;
var $o, Ht, Ds;
class bS extends vS.JSHandle {
  constructor(t, r) {
    super();
    g(this, $o, !1);
    g(this, Ht, void 0);
    g(this, Ds, void 0);
    O(this, Ds, t), O(this, Ht, r);
  }
  get disposed() {
    return n(this, $o);
  }
  get realm() {
    return n(this, Ds);
  }
  get client() {
    return this.realm.environment.client;
  }
  async jsonValue() {
    if (!n(this, Ht).objectId)
      return (0, rh.valueFromRemoteObject)(n(this, Ht));
    const t = await this.evaluate((r) => r);
    if (t === void 0)
      throw new Error("Could not serialize referenced object");
    return t;
  }
  /**
   * Either `null` or the handle itself if the handle is an
   * instance of {@link ElementHandle}.
   */
  asElement() {
    return null;
  }
  async dispose() {
    n(this, $o) || (O(this, $o, !0), await Qy(this.client, n(this, Ht)));
  }
  toString() {
    return n(this, Ht).objectId ? "JSHandle@" + (n(this, Ht).subtype || n(this, Ht).type) : "JSHandle:" + (0, rh.valueFromRemoteObject)(n(this, Ht));
  }
  get id() {
    return n(this, Ht).objectId;
  }
  remoteObject() {
    return n(this, Ht);
  }
}
$o = new WeakMap(), Ht = new WeakMap(), Ds = new WeakMap();
Vr.CdpJSHandle = bS;
async function Qy(l, i) {
  i.objectId && await l.send("Runtime.releaseObject", { objectId: i.objectId }).catch((t) => {
    (0, rh.debugError)(t);
  });
}
Vr.releaseObject = Qy;
var gS = re && re.__createBinding || (Object.create ? function(l, i, t, r) {
  r === void 0 && (r = t);
  var s = Object.getOwnPropertyDescriptor(i, t);
  (!s || ("get" in s ? !i.__esModule : s.writable || s.configurable)) && (s = { enumerable: !0, get: function() {
    return i[t];
  } }), Object.defineProperty(l, r, s);
} : function(l, i, t, r) {
  r === void 0 && (r = t), l[r] = i[t];
}), wS = re && re.__setModuleDefault || (Object.create ? function(l, i) {
  Object.defineProperty(l, "default", { enumerable: !0, value: i });
} : function(l, i) {
  l.default = i;
}), _S = re && re.__runInitializers || function(l, i, t) {
  for (var r = arguments.length > 2, s = 0; s < i.length; s++)
    t = r ? i[s].call(l, t) : i[s].call(l);
  return r ? t : void 0;
}, Ju = re && re.__esDecorate || function(l, i, t, r, s, m) {
  function _($) {
    if ($ !== void 0 && typeof $ != "function")
      throw new TypeError("Function expected");
    return $;
  }
  for (var k = r.kind, I = k === "getter" ? "get" : k === "setter" ? "set" : "value", x = !i && l ? r.static ? l : l.prototype : null, F = i || (x ? Object.getOwnPropertyDescriptor(x, r.name) : {}), R, N = !1, Q = t.length - 1; Q >= 0; Q--) {
    var q = {};
    for (var B in r)
      q[B] = B === "access" ? {} : r[B];
    for (var B in r.access)
      q.access[B] = r.access[B];
    q.addInitializer = function($) {
      if (N)
        throw new TypeError("Cannot add initializers after decoration has completed");
      m.push(_($ || null));
    };
    var D = (0, t[Q])(k === "accessor" ? { get: F.get, set: F.set } : F[I], q);
    if (k === "accessor") {
      if (D === void 0)
        continue;
      if (D === null || typeof D != "object")
        throw new TypeError("Object expected");
      (R = _(D.get)) && (F.get = R), (R = _(D.set)) && (F.set = R), (R = _(D.init)) && s.unshift(R);
    } else
      (R = _(D)) && (k === "field" ? s.unshift(R) : F[I] = R);
  }
  x && Object.defineProperty(x, r.name, F), N = !0;
}, SS = re && re.__importStar || function(l) {
  if (l && l.__esModule)
    return l;
  var i = {};
  if (l != null)
    for (var t in l)
      t !== "default" && Object.prototype.hasOwnProperty.call(l, t) && gS(i, l, t);
  return wS(i, l), i;
};
Object.defineProperty(Md, "__esModule", { value: !0 });
Md.CdpElementHandle = void 0;
const hf = Fd, ES = Ze, PS = et, Gu = Ct, OS = Vr;
let kS = (() => {
  var I, Jy, F;
  var l, i;
  let t = hf.ElementHandle, r = [], s, m, _, k;
  return F = class extends t {
    constructor(Q, q) {
      super(new OS.CdpJSHandle(Q, q));
      g(this, I);
      _S(this, r);
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
      const Q = await this.client.send("DOM.describeNode", {
        objectId: this.id
      });
      return typeof Q.node.frameId != "string" ? null : n(this, I, Jy).frame(Q.node.frameId);
    }
    async scrollIntoView() {
      await this.assertConnectedElement();
      try {
        await this.client.send("DOM.scrollIntoViewIfNeeded", {
          objectId: this.id
        });
      } catch (Q) {
        (0, ES.debugError)(Q), await super.scrollIntoView();
      }
    }
    async uploadFile(...Q) {
      const q = await this.evaluate((A) => A.multiple);
      (0, PS.assert)(Q.length <= 1 || q, "Multiple file uploads only work with <input type=file multiple>");
      let B;
      try {
        B = await Promise.resolve().then(() => SS(Ia));
      } catch (A) {
        throw A instanceof TypeError ? new Error("JSHandle#uploadFile can only be used in Node-like environments.") : A;
      }
      const D = Q.map((A) => B.win32.isAbsolute(A) || B.posix.isAbsolute(A) ? A : B.resolve(A));
      if (D.length === 0) {
        await this.evaluate((A) => {
          A.files = new DataTransfer().files, A.dispatchEvent(new Event("input", { bubbles: !0, composed: !0 })), A.dispatchEvent(new Event("change", { bubbles: !0 }));
        });
        return;
      }
      const { node: { backendNodeId: $ } } = await this.client.send("DOM.describeNode", {
        objectId: this.id
      });
      await this.client.send("DOM.setFileInputFiles", {
        objectId: this.id,
        files: D,
        backendNodeId: $
      });
    }
    async autofill(Q) {
      const B = (await this.client.send("DOM.describeNode", {
        objectId: this.handle.id
      })).node.backendNodeId, D = this.frame._id;
      await this.client.send("Autofill.trigger", {
        fieldId: B,
        frameId: D,
        card: Q.creditCard
      });
    }
  }, I = new WeakSet(), Jy = function() {
    return this.frame._frameManager;
  }, (() => {
    const Q = typeof Symbol == "function" && Symbol.metadata ? Object.create(t[Symbol.metadata] ?? null) : void 0;
    s = [(0, Gu.throwIfDisposed)()], m = [(0, Gu.throwIfDisposed)(), (l = hf.ElementHandle).bindIsolatedHandle.bind(l)], _ = [(0, Gu.throwIfDisposed)(), (i = hf.ElementHandle).bindIsolatedHandle.bind(i)], k = [(0, Gu.throwIfDisposed)()], Ju(F, null, s, { kind: "method", name: "contentFrame", static: !1, private: !1, access: { has: (q) => "contentFrame" in q, get: (q) => q.contentFrame }, metadata: Q }, null, r), Ju(F, null, m, { kind: "method", name: "scrollIntoView", static: !1, private: !1, access: { has: (q) => "scrollIntoView" in q, get: (q) => q.scrollIntoView }, metadata: Q }, null, r), Ju(F, null, _, { kind: "method", name: "uploadFile", static: !1, private: !1, access: { has: (q) => "uploadFile" in q, get: (q) => q.uploadFile }, metadata: Q }, null, r), Ju(F, null, k, { kind: "method", name: "autofill", static: !1, private: !1, access: { has: (q) => "autofill" in q, get: (q) => q.autofill }, metadata: Q }, null, r), Q && Object.defineProperty(F, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: Q });
  })(), F;
})();
Md.CdpElementHandle = kS;
Object.defineProperty(Ur, "__esModule", { value: !0 });
Ur.createCdpHandle = Ur.ExecutionContext = void 0;
const CS = Nn, jS = Yi, ur = Ze, TS = xa, IS = Cu, Fp = ju, Dp = ku, Gy = Md, Yy = Vr;
var Rs, rn, As, nh, xs, ih;
class MS {
  constructor(i, t, r) {
    g(this, As);
    g(this, xs);
    Oe(this, "_client");
    Oe(this, "_world");
    Oe(this, "_contextId");
    Oe(this, "_contextName");
    g(this, Rs, !1);
    g(this, rn, void 0);
    this._client = i, this._world = r, this._contextId = t.id, t.name && (this._contextName = t.name);
  }
  get puppeteerUtil() {
    let i = Promise.resolve();
    return n(this, Rs) || (i = Promise.all([
      L(this, As, nh).call(this, new Dp.Binding("__ariaQuerySelector", Fp.ARIAQueryHandler.queryOne)),
      L(this, As, nh).call(this, new Dp.Binding("__ariaQuerySelectorAll", async (t, r) => {
        const s = Fp.ARIAQueryHandler.queryAll(t, r);
        return await t.realm.evaluateHandle((...m) => m, ...await TS.AsyncIterableUtil.collect(s));
      }))
    ]), O(this, Rs, !0)), jS.scriptInjector.inject((t) => {
      n(this, rn) && n(this, rn).then((r) => {
        r.dispose();
      }), O(this, rn, i.then(() => this.evaluateHandle(t)));
    }, !n(this, rn)), n(this, rn);
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
  async evaluate(i, ...t) {
    return await L(this, xs, ih).call(this, !0, i, ...t);
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
  async evaluateHandle(i, ...t) {
    return await L(this, xs, ih).call(this, !1, i, ...t);
  }
}
Rs = new WeakMap(), rn = new WeakMap(), As = new WeakSet(), nh = async function(i) {
  try {
    this._world && (this._world._bindings.set(i.name, i), await this._world._addBindingToContext(this, i.name));
  } catch {
  }
}, xs = new WeakSet(), ih = async function(i, t, ...r) {
  var R;
  const s = (0, ur.getSourceUrlComment)(((R = (0, ur.getSourcePuppeteerURLIfAvailable)(t)) == null ? void 0 : R.toString()) ?? ur.PuppeteerURL.INTERNAL_URL);
  if ((0, ur.isString)(t)) {
    const N = this._contextId, Q = t, q = ur.SOURCE_URL_REGEX.test(Q) ? Q : `${Q}
${s}
`, { exceptionDetails: B, result: D } = await this._client.send("Runtime.evaluate", {
      expression: q,
      contextId: N,
      returnByValue: i,
      awaitPromise: !0,
      userGesture: !0
    }).catch(Rp);
    if (B)
      throw (0, ur.createEvaluationError)(B);
    return i ? (0, ur.valueFromRemoteObject)(D) : oh(this._world, D);
  }
  const m = (0, IS.stringifyFunction)(t), _ = ur.SOURCE_URL_REGEX.test(m) ? m : `${m}
${s}
`;
  let k;
  try {
    k = this._client.send("Runtime.callFunctionOn", {
      functionDeclaration: _,
      executionContextId: this._contextId,
      arguments: await Promise.all(r.map(F.bind(this))),
      returnByValue: i,
      awaitPromise: !0,
      userGesture: !0
    });
  } catch (N) {
    throw N instanceof TypeError && N.message.startsWith("Converting circular structure to JSON") && (N.message += " Recursive objects are not allowed."), N;
  }
  const { exceptionDetails: I, result: x } = await k.catch(Rp);
  if (I)
    throw (0, ur.createEvaluationError)(I);
  return i ? (0, ur.valueFromRemoteObject)(x) : oh(this._world, x);
  async function F(N) {
    if (N instanceof CS.LazyArg && (N = await N.get(this)), typeof N == "bigint")
      return { unserializableValue: `${N.toString()}n` };
    if (Object.is(N, -0))
      return { unserializableValue: "-0" };
    if (Object.is(N, 1 / 0))
      return { unserializableValue: "Infinity" };
    if (Object.is(N, -1 / 0))
      return { unserializableValue: "-Infinity" };
    if (Object.is(N, NaN))
      return { unserializableValue: "NaN" };
    const Q = N && (N instanceof Yy.CdpJSHandle || N instanceof Gy.CdpElementHandle) ? N : null;
    if (Q) {
      if (Q.realm !== this._world)
        throw new Error("JSHandles can be evaluated only in the context they were created!");
      if (Q.disposed)
        throw new Error("JSHandle is disposed!");
      return Q.remoteObject().unserializableValue ? {
        unserializableValue: Q.remoteObject().unserializableValue
      } : Q.remoteObject().objectId ? { objectId: Q.remoteObject().objectId } : { value: Q.remoteObject().value };
    }
    return { value: N };
  }
};
Ur.ExecutionContext = MS;
const Rp = (l) => {
  if (l.message.includes("Object reference chain is too long"))
    return { result: { type: "undefined" } };
  if (l.message.includes("Object couldn't be returned by value"))
    return { result: { type: "undefined" } };
  throw l.message.endsWith("Cannot find context with specified id") || l.message.endsWith("Inspected target navigated or closed") ? new Error("Execution context was destroyed, most likely because of a navigation.") : l;
};
function oh(l, i) {
  return i.subtype === "node" ? new Gy.CdpElementHandle(l, i) : new Yy.CdpJSHandle(l, i);
}
Ur.createCdpHandle = oh;
var Fu = {};
Object.defineProperty(Fu, "__esModule", { value: !0 });
Fu.FirefoxTargetManager = void 0;
const Ap = Mt, FS = mt, xp = et, DS = wt;
var Yt, bi, pr, Ns, El, Lo, qo, nn, $s, Ho, Pl, Ls, qs, Ol, gi, Ya;
class RS extends FS.EventEmitter {
  constructor(t, r, s) {
    super();
    g(this, gi);
    g(this, Yt, void 0);
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
    g(this, bi, /* @__PURE__ */ new Map());
    /**
     * Keeps track of targets that were created via 'Target.targetCreated'
     * and which one are not filtered out by `targetFilterCallback`.
     *
     * The target is removed from here once it's been destroyed.
     */
    g(this, pr, /* @__PURE__ */ new Map());
    /**
     * Tracks which sessions attach to which target.
     */
    g(this, Ns, /* @__PURE__ */ new Map());
    /**
     * If a target was filtered out by `targetFilterCallback`, we still receive
     * events about it from CDP, but we don't forward them to the rest of Puppeteer.
     */
    g(this, El, /* @__PURE__ */ new Set());
    g(this, Lo, void 0);
    g(this, qo, void 0);
    g(this, nn, /* @__PURE__ */ new WeakMap());
    g(this, $s, DS.Deferred.create());
    g(this, Ho, /* @__PURE__ */ new Set());
    g(this, Pl, (t) => {
      this.removeSessionListeners(t), n(this, Ns).delete(t.id());
    });
    g(this, Ls, async (t) => {
      if (n(this, bi).has(t.targetInfo.targetId))
        return;
      if (n(this, bi).set(t.targetInfo.targetId, t.targetInfo), t.targetInfo.type === "browser" && t.targetInfo.attached) {
        const s = n(this, qo).call(this, t.targetInfo, void 0);
        s._initialize(), n(this, pr).set(t.targetInfo.targetId, s), L(this, gi, Ya).call(this, s._targetId);
        return;
      }
      const r = n(this, qo).call(this, t.targetInfo, void 0);
      if (n(this, Lo) && !n(this, Lo).call(this, r)) {
        n(this, El).add(t.targetInfo.targetId), L(this, gi, Ya).call(this, t.targetInfo.targetId);
        return;
      }
      r._initialize(), n(this, pr).set(t.targetInfo.targetId, r), this.emit("targetAvailable", r), L(this, gi, Ya).call(this, r._targetId);
    });
    g(this, qs, (t) => {
      n(this, bi).delete(t.targetId), L(this, gi, Ya).call(this, t.targetId);
      const r = n(this, pr).get(t.targetId);
      r && (this.emit("targetGone", r), n(this, pr).delete(t.targetId));
    });
    g(this, Ol, async (t, r) => {
      const s = r.targetInfo, m = n(this, Yt).session(r.sessionId);
      if (!m)
        throw new Error(`Session ${r.sessionId} was not created.`);
      const _ = n(this, pr).get(s.targetId);
      (0, xp.assert)(_, `Target ${s.targetId} is missing`), m._setTarget(_), this.setupAttachmentListeners(m), n(this, Ns).set(m.id(), n(this, pr).get(s.targetId)), t.emit(Ap.CDPSessionEvent.Ready, m);
    });
    O(this, Yt, t), O(this, Lo, s), O(this, qo, r), n(this, Yt).on("Target.targetCreated", n(this, Ls)), n(this, Yt).on("Target.targetDestroyed", n(this, qs)), n(this, Yt).on(Ap.CDPSessionEvent.SessionDetached, n(this, Pl)), this.setupAttachmentListeners(n(this, Yt));
  }
  setupAttachmentListeners(t) {
    const r = (s) => n(this, Ol).call(this, t, s);
    (0, xp.assert)(!n(this, nn).has(t)), n(this, nn).set(t, r), t.on("Target.attachedToTarget", r);
  }
  removeSessionListeners(t) {
    n(this, nn).has(t) && (t.off("Target.attachedToTarget", n(this, nn).get(t)), n(this, nn).delete(t));
  }
  getAvailableTargets() {
    return n(this, pr);
  }
  dispose() {
    n(this, Yt).off("Target.targetCreated", n(this, Ls)), n(this, Yt).off("Target.targetDestroyed", n(this, qs));
  }
  async initialize() {
    await n(this, Yt).send("Target.setDiscoverTargets", {
      discover: !0,
      filter: [{}]
    }), O(this, Ho, new Set(n(this, bi).keys())), await n(this, $s).valueOrThrow();
  }
}
Yt = new WeakMap(), bi = new WeakMap(), pr = new WeakMap(), Ns = new WeakMap(), El = new WeakMap(), Lo = new WeakMap(), qo = new WeakMap(), nn = new WeakMap(), $s = new WeakMap(), Ho = new WeakMap(), Pl = new WeakMap(), Ls = new WeakMap(), qs = new WeakMap(), Ol = new WeakMap(), gi = new WeakSet(), Ya = function(t) {
  n(this, Ho).delete(t), n(this, Ho).size === 0 && n(this, $s).resolve();
};
Fu.FirefoxTargetManager = RS;
var Nd = {}, $d = {};
(function(l) {
  var i = re && re.__runInitializers || function(B, D, $) {
    for (var A = arguments.length > 2, z = 0; z < D.length; z++)
      $ = A ? D[z].call(B, $) : D[z].call(B);
    return A ? $ : void 0;
  }, t = re && re.__esDecorate || function(B, D, $, A, z, Ie) {
    function ke(Pe) {
      if (Pe !== void 0 && typeof Pe != "function")
        throw new TypeError("Function expected");
      return Pe;
    }
    for (var $e = A.kind, Ne = $e === "getter" ? "get" : $e === "setter" ? "set" : "value", Y = !D && B ? A.static ? B : B.prototype : null, le = D || (Y ? Object.getOwnPropertyDescriptor(Y, A.name) : {}), he, ce = !1, Ce = $.length - 1; Ce >= 0; Ce--) {
      var Ee = {};
      for (var Fe in A)
        Ee[Fe] = Fe === "access" ? {} : A[Fe];
      for (var Fe in A.access)
        Ee.access[Fe] = A.access[Fe];
      Ee.addInitializer = function(Pe) {
        if (ce)
          throw new TypeError("Cannot add initializers after decoration has completed");
        Ie.push(ke(Pe || null));
      };
      var He = (0, $[Ce])($e === "accessor" ? { get: le.get, set: le.set } : le[Ne], Ee);
      if ($e === "accessor") {
        if (He === void 0)
          continue;
        if (He === null || typeof He != "object")
          throw new TypeError("Object expected");
        (he = ke(He.get)) && (le.get = he), (he = ke(He.set)) && (le.set = he), (he = ke(He.init)) && z.unshift(he);
      } else
        (he = ke(He)) && ($e === "field" ? z.unshift(he) : le[Ne] = he);
    }
    Y && Object.defineProperty(Y, A.name, le), ce = !0;
  }, r = re && re.__addDisposableResource || function(B, D, $) {
    if (D != null) {
      if (typeof D != "object" && typeof D != "function")
        throw new TypeError("Object expected.");
      var A;
      if ($) {
        if (!Symbol.asyncDispose)
          throw new TypeError("Symbol.asyncDispose is not defined.");
        A = D[Symbol.asyncDispose];
      }
      if (A === void 0) {
        if (!Symbol.dispose)
          throw new TypeError("Symbol.dispose is not defined.");
        A = D[Symbol.dispose];
      }
      if (typeof A != "function")
        throw new TypeError("Object not disposable.");
      B.stack.push({ value: D, dispose: A, async: $ });
    } else
      $ && B.stack.push({ async: !0 });
    return D;
  }, s = re && re.__disposeResources || /* @__PURE__ */ function(B) {
    return function(D) {
      function $(z) {
        D.error = D.hasError ? new B(z, D.error, "An error was suppressed during disposal.") : z, D.hasError = !0;
      }
      function A() {
        for (; D.stack.length; ) {
          var z = D.stack.pop();
          try {
            var Ie = z.dispose && z.dispose.call(z.value);
            if (z.async)
              return Promise.resolve(Ie).then(A, function(ke) {
                return $(ke), A();
              });
          } catch (ke) {
            $(ke);
          }
        }
        if (D.hasError)
          throw D.error;
      }
      return A();
    };
  }(typeof SuppressedError == "function" ? SuppressedError : function(B, D, $) {
    var A = new Error($);
    return A.name = "SuppressedError", A.error = B, A.suppressed = D, A;
  });
  Object.defineProperty(l, "__esModule", { value: !0 }), l.Frame = l.throwIfDetached = l.FrameEvent = void 0;
  const m = mt, _ = Mu, k = Iu, I = Nn, x = Ze, F = et, R = Ct, N = Ah;
  var Q;
  (function(B) {
    B.FrameNavigated = Symbol("Frame.FrameNavigated"), B.FrameSwapped = Symbol("Frame.FrameSwapped"), B.LifecycleEvent = Symbol("Frame.LifecycleEvent"), B.FrameNavigatedWithinDocument = Symbol("Frame.FrameNavigatedWithinDocument"), B.FrameDetached = Symbol("Frame.FrameDetached"), B.FrameSwappedByActivation = Symbol("Frame.FrameSwappedByActivation");
  })(Q || (l.FrameEvent = Q = {})), l.throwIfDetached = (0, R.throwIfDisposed)((B) => `Attempted to use detached Frame '${B._id}'.`);
  let q = (() => {
    var V, ee, ho, X;
    let B = m.EventEmitter, D = [], $, A, z, Ie, ke, $e, Ne, Y, le, he, ce, Ce, Ee, Fe, He, Pe, ye, Ue, W, ie, Z, je;
    return X = class extends B {
      /**
       * @internal
       */
      constructor() {
        super();
        /**
         * @internal
         */
        g(this, ee);
        /**
         * @internal
         */
        Oe(this, "_id", (i(this, D), void 0));
        /**
         * @internal
         */
        Oe(this, "_parentId");
        /**
         * @internal
         */
        Oe(this, "worlds");
        /**
         * @internal
         */
        Oe(this, "_name");
        /**
         * @internal
         */
        Oe(this, "_hasStartedLoading", !1);
        g(this, V, void 0);
      }
      /**
       * Used to clear the document handle that has been destroyed.
       *
       * @internal
       */
      clearDocumentHandle() {
        O(this, V, void 0);
      }
      /**
       * @internal
       */
      async frameElement() {
        const C = { stack: [], error: void 0, hasError: !1 };
        try {
          const P = this.parentFrame();
          if (!P)
            return null;
          const ne = r(C, await P.isolatedRealm().evaluateHandle(() => document.querySelectorAll("iframe")), !1);
          for await (const _e of (0, k.transposeIterableHandle)(ne)) {
            const De = { stack: [], error: void 0, hasError: !1 };
            try {
              const xe = r(De, _e, !1);
              if ((await xe.contentFrame())._id === this._id)
                return xe.move();
            } catch (xe) {
              De.error = xe, De.hasError = !0;
            } finally {
              s(De);
            }
          }
          return null;
        } catch (P) {
          C.error = P, C.hasError = !0;
        } finally {
          s(C);
        }
      }
      /**
       * Behaves identically to {@link Page.evaluateHandle} except it's run within
       * the context of this frame.
       *
       * @see {@link Page.evaluateHandle} for details.
       */
      async evaluateHandle(C, ...P) {
        return C = (0, x.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, C), await this.mainRealm().evaluateHandle(C, ...P);
      }
      /**
       * Behaves identically to {@link Page.evaluate} except it's run within the
       * the context of this frame.
       *
       * @see {@link Page.evaluate} for details.
       */
      async evaluate(C, ...P) {
        return C = (0, x.withSourcePuppeteerURLIfNone)(this.evaluate.name, C), await this.mainRealm().evaluate(C, ...P);
      }
      /**
       * @internal
       */
      locator(C) {
        return typeof C == "string" ? N.NodeLocator.create(this, C) : N.FunctionLocator.create(this, C);
      }
      /**
       * Queries the frame for an element matching the given selector.
       *
       * @param selector - The selector to query for.
       * @returns A {@link ElementHandle | element handle} to the first element
       * matching the given selector. Otherwise, `null`.
       */
      async $(C) {
        return await (await L(this, ee, ho).call(this)).$(C);
      }
      /**
       * Queries the frame for all elements matching the given selector.
       *
       * @param selector - The selector to query for.
       * @returns An array of {@link ElementHandle | element handles} that point to
       * elements matching the given selector.
       */
      async $$(C) {
        return await (await L(this, ee, ho).call(this)).$$(C);
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
      async $eval(C, P, ...ne) {
        return P = (0, x.withSourcePuppeteerURLIfNone)(this.$eval.name, P), await (await L(this, ee, ho).call(this)).$eval(C, P, ...ne);
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
      async $$eval(C, P, ...ne) {
        return P = (0, x.withSourcePuppeteerURLIfNone)(this.$$eval.name, P), await (await L(this, ee, ho).call(this)).$$eval(C, P, ...ne);
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
      async $x(C) {
        return await (await L(this, ee, ho).call(this)).$x(C);
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
      async waitForSelector(C, P = {}) {
        const { updatedSelector: ne, QueryHandler: _e } = (0, _.getQueryHandlerAndSelector)(C);
        return await _e.waitFor(this, ne, P);
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
      async waitForXPath(C, P = {}) {
        return C.startsWith("//") && (C = `.${C}`), await this.waitForSelector(`xpath/${C}`, P);
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
      async waitForFunction(C, P = {}, ...ne) {
        return await this.mainRealm().waitForFunction(C, P, ...ne);
      }
      /**
       * The full HTML contents of the frame, including the DOCTYPE.
       */
      async content() {
        return await this.evaluate(x.getPageContent);
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
      async addScriptTag(C) {
        let { content: P = "", type: ne } = C;
        const { path: _e } = C;
        if (+!!C.url + +!!_e + +!!P != 1)
          throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");
        return _e && (P = await (await (0, x.importFSPromises)()).readFile(_e, "utf8"), P += `//# sourceURL=${_e.replace(/\n/g, "")}`), ne = ne ?? "text/javascript", await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({ Deferred: De }, { url: xe, id: Ge, type: tt, content: _t }) => {
          const St = De.create(), Ft = document.createElement("script");
          return Ft.type = tt, Ft.text = _t, xe ? (Ft.src = xe, Ft.addEventListener("load", () => St.resolve(), { once: !0 }), Ft.addEventListener("error", (at) => {
            St.reject(new Error(at.message ?? "Could not load script"));
          }, { once: !0 })) : St.resolve(), Ge && (Ft.id = Ge), document.head.appendChild(Ft), await St.valueOrThrow(), Ft;
        }, I.LazyArg.create((De) => De.puppeteerUtil), { ...C, type: ne, content: P }));
      }
      /**
       * @internal
       */
      async addStyleTag(C) {
        let { content: P = "" } = C;
        const { path: ne } = C;
        if (+!!C.url + +!!ne + +!!P != 1)
          throw new Error("Exactly one of `url`, `path`, or `content` must be specified.");
        return ne && (P = await (await (0, x.importFSPromises)()).readFile(ne, "utf8"), P += "/*# sourceURL=" + ne.replace(/\n/g, "") + "*/", C.content = P), await this.mainRealm().transferHandle(await this.isolatedRealm().evaluateHandle(async ({ Deferred: _e }, { url: De, content: xe }) => {
          const Ge = _e.create();
          let tt;
          if (!De)
            tt = document.createElement("style"), tt.appendChild(document.createTextNode(xe));
          else {
            const _t = document.createElement("link");
            _t.rel = "stylesheet", _t.href = De, tt = _t;
          }
          return tt.addEventListener("load", () => {
            Ge.resolve();
          }, { once: !0 }), tt.addEventListener("error", (_t) => {
            Ge.reject(new Error(_t.message ?? "Could not load style"));
          }, { once: !0 }), document.head.appendChild(tt), await Ge.valueOrThrow(), tt;
        }, I.LazyArg.create((_e) => _e.puppeteerUtil), C));
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
      async click(C, P = {}) {
        const ne = { stack: [], error: void 0, hasError: !1 };
        try {
          const _e = r(ne, await this.$(C), !1);
          (0, F.assert)(_e, `No element found for selector: ${C}`), await _e.click(P), await _e.dispose();
        } catch (_e) {
          ne.error = _e, ne.hasError = !0;
        } finally {
          s(ne);
        }
      }
      /**
       * Focuses the first element that matches the `selector`.
       *
       * @param selector - The selector to query for.
       * @throws Throws if there's no element matching `selector`.
       */
      async focus(C) {
        const P = { stack: [], error: void 0, hasError: !1 };
        try {
          const ne = r(P, await this.$(C), !1);
          (0, F.assert)(ne, `No element found for selector: ${C}`), await ne.focus();
        } catch (ne) {
          P.error = ne, P.hasError = !0;
        } finally {
          s(P);
        }
      }
      /**
       * Hovers the pointer over the center of the first element that matches the
       * `selector`.
       *
       * @param selector - The selector to query for.
       * @throws Throws if there's no element matching `selector`.
       */
      async hover(C) {
        const P = { stack: [], error: void 0, hasError: !1 };
        try {
          const ne = r(P, await this.$(C), !1);
          (0, F.assert)(ne, `No element found for selector: ${C}`), await ne.hover();
        } catch (ne) {
          P.error = ne, P.hasError = !0;
        } finally {
          s(P);
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
      async select(C, ...P) {
        const ne = { stack: [], error: void 0, hasError: !1 };
        try {
          const _e = r(ne, await this.$(C), !1);
          return (0, F.assert)(_e, `No element found for selector: ${C}`), await _e.select(...P);
        } catch (_e) {
          ne.error = _e, ne.hasError = !0;
        } finally {
          s(ne);
        }
      }
      /**
       * Taps the first element that matches the `selector`.
       *
       * @param selector - The selector to query for.
       * @throws Throws if there's no element matching `selector`.
       */
      async tap(C) {
        const P = { stack: [], error: void 0, hasError: !1 };
        try {
          const ne = r(P, await this.$(C), !1);
          (0, F.assert)(ne, `No element found for selector: ${C}`), await ne.tap();
        } catch (ne) {
          P.error = ne, P.hasError = !0;
        } finally {
          s(P);
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
      async type(C, P, ne) {
        const _e = { stack: [], error: void 0, hasError: !1 };
        try {
          const De = r(_e, await this.$(C), !1);
          (0, F.assert)(De, `No element found for selector: ${C}`), await De.type(P, ne);
        } catch (De) {
          _e.error = De, _e.hasError = !0;
        } finally {
          s(_e);
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
      async waitForTimeout(C) {
        return await new Promise((P) => {
          setTimeout(P, C);
        });
      }
      /**
       * The frame's title.
       */
      async title() {
        return await this.isolatedRealm().evaluate(() => document.title);
      }
    }, V = new WeakMap(), ee = new WeakSet(), ho = function() {
      return n(this, V) || O(this, V, this.isolatedRealm().evaluateHandle(() => document).then((C) => this.mainRealm().transferHandle(C))), n(this, V);
    }, (() => {
      const C = typeof Symbol == "function" && Symbol.metadata ? Object.create(B[Symbol.metadata] ?? null) : void 0;
      $ = [l.throwIfDetached], A = [l.throwIfDetached], z = [l.throwIfDetached], Ie = [l.throwIfDetached], ke = [l.throwIfDetached], $e = [l.throwIfDetached], Ne = [l.throwIfDetached], Y = [l.throwIfDetached], le = [l.throwIfDetached], he = [l.throwIfDetached], ce = [l.throwIfDetached], Ce = [l.throwIfDetached], Ee = [l.throwIfDetached], Fe = [l.throwIfDetached], He = [l.throwIfDetached], Pe = [l.throwIfDetached], ye = [l.throwIfDetached], Ue = [l.throwIfDetached], W = [l.throwIfDetached], ie = [l.throwIfDetached], Z = [l.throwIfDetached], je = [l.throwIfDetached], t(X, null, $, { kind: "method", name: "frameElement", static: !1, private: !1, access: { has: (P) => "frameElement" in P, get: (P) => P.frameElement }, metadata: C }, null, D), t(X, null, A, { kind: "method", name: "evaluateHandle", static: !1, private: !1, access: { has: (P) => "evaluateHandle" in P, get: (P) => P.evaluateHandle }, metadata: C }, null, D), t(X, null, z, { kind: "method", name: "evaluate", static: !1, private: !1, access: { has: (P) => "evaluate" in P, get: (P) => P.evaluate }, metadata: C }, null, D), t(X, null, Ie, { kind: "method", name: "locator", static: !1, private: !1, access: { has: (P) => "locator" in P, get: (P) => P.locator }, metadata: C }, null, D), t(X, null, ke, { kind: "method", name: "$", static: !1, private: !1, access: { has: (P) => "$" in P, get: (P) => P.$ }, metadata: C }, null, D), t(X, null, $e, { kind: "method", name: "$$", static: !1, private: !1, access: { has: (P) => "$$" in P, get: (P) => P.$$ }, metadata: C }, null, D), t(X, null, Ne, { kind: "method", name: "$eval", static: !1, private: !1, access: { has: (P) => "$eval" in P, get: (P) => P.$eval }, metadata: C }, null, D), t(X, null, Y, { kind: "method", name: "$$eval", static: !1, private: !1, access: { has: (P) => "$$eval" in P, get: (P) => P.$$eval }, metadata: C }, null, D), t(X, null, le, { kind: "method", name: "$x", static: !1, private: !1, access: { has: (P) => "$x" in P, get: (P) => P.$x }, metadata: C }, null, D), t(X, null, he, { kind: "method", name: "waitForSelector", static: !1, private: !1, access: { has: (P) => "waitForSelector" in P, get: (P) => P.waitForSelector }, metadata: C }, null, D), t(X, null, ce, { kind: "method", name: "waitForXPath", static: !1, private: !1, access: { has: (P) => "waitForXPath" in P, get: (P) => P.waitForXPath }, metadata: C }, null, D), t(X, null, Ce, { kind: "method", name: "waitForFunction", static: !1, private: !1, access: { has: (P) => "waitForFunction" in P, get: (P) => P.waitForFunction }, metadata: C }, null, D), t(X, null, Ee, { kind: "method", name: "content", static: !1, private: !1, access: { has: (P) => "content" in P, get: (P) => P.content }, metadata: C }, null, D), t(X, null, Fe, { kind: "method", name: "addScriptTag", static: !1, private: !1, access: { has: (P) => "addScriptTag" in P, get: (P) => P.addScriptTag }, metadata: C }, null, D), t(X, null, He, { kind: "method", name: "addStyleTag", static: !1, private: !1, access: { has: (P) => "addStyleTag" in P, get: (P) => P.addStyleTag }, metadata: C }, null, D), t(X, null, Pe, { kind: "method", name: "click", static: !1, private: !1, access: { has: (P) => "click" in P, get: (P) => P.click }, metadata: C }, null, D), t(X, null, ye, { kind: "method", name: "focus", static: !1, private: !1, access: { has: (P) => "focus" in P, get: (P) => P.focus }, metadata: C }, null, D), t(X, null, Ue, { kind: "method", name: "hover", static: !1, private: !1, access: { has: (P) => "hover" in P, get: (P) => P.hover }, metadata: C }, null, D), t(X, null, W, { kind: "method", name: "select", static: !1, private: !1, access: { has: (P) => "select" in P, get: (P) => P.select }, metadata: C }, null, D), t(X, null, ie, { kind: "method", name: "tap", static: !1, private: !1, access: { has: (P) => "tap" in P, get: (P) => P.tap }, metadata: C }, null, D), t(X, null, Z, { kind: "method", name: "type", static: !1, private: !1, access: { has: (P) => "type" in P, get: (P) => P.type }, metadata: C }, null, D), t(X, null, je, { kind: "method", name: "title", static: !1, private: !1, access: { has: (P) => "title" in P, get: (P) => P.title }, metadata: C }, null, D), C && Object.defineProperty(X, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: C });
    })(), X;
  })();
  l.Frame = q;
})($d);
var Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.DeviceRequestPromptManager = Rn.DeviceRequestPrompt = Rn.DeviceRequestPromptDevice = void 0;
const zn = et, Xy = wt;
class Zy {
  /**
   * @internal
   */
  constructor(i, t) {
    /**
     * Device id during a prompt.
     */
    Oe(this, "id");
    /**
     * Device name as it appears in a prompt.
     */
    Oe(this, "name");
    this.id = i, this.name = t;
  }
}
Rn.DeviceRequestPromptDevice = Zy;
var Bt, Hs, wi, _i, Bo, Wo, Bs, ah;
class em {
  /**
   * @internal
   */
  constructor(i, t, r) {
    g(this, Bs);
    g(this, Bt, void 0);
    g(this, Hs, void 0);
    g(this, wi, void 0);
    g(this, _i, !1);
    g(this, Bo, L(this, Bs, ah).bind(this));
    g(this, Wo, /* @__PURE__ */ new Set());
    /**
     * Current list of selectable devices.
     */
    Oe(this, "devices", []);
    O(this, Bt, i), O(this, Hs, t), O(this, wi, r.id), n(this, Bt).on("DeviceAccess.deviceRequestPrompted", n(this, Bo)), n(this, Bt).on("Target.detachedFromTarget", () => {
      O(this, Bt, null);
    }), L(this, Bs, ah).call(this, r);
  }
  /**
   * Resolve to the first device in the prompt matching a filter.
   */
  async waitForDevice(i, t = {}) {
    for (const _ of this.devices)
      if (i(_))
        return _;
    const { timeout: r = n(this, Hs).timeout() } = t, s = Xy.Deferred.create({
      message: `Waiting for \`DeviceRequestPromptDevice\` failed: ${r}ms exceeded`,
      timeout: r
    }), m = { filter: i, promise: s };
    n(this, Wo).add(m);
    try {
      return await s.valueOrThrow();
    } finally {
      n(this, Wo).delete(m);
    }
  }
  /**
   * Select a device in the prompt's list.
   */
  async select(i) {
    return (0, zn.assert)(n(this, Bt) !== null, "Cannot select device through detached session!"), (0, zn.assert)(this.devices.includes(i), "Cannot select unknown device!"), (0, zn.assert)(!n(this, _i), "Cannot select DeviceRequestPrompt which is already handled!"), n(this, Bt).off("DeviceAccess.deviceRequestPrompted", n(this, Bo)), O(this, _i, !0), await n(this, Bt).send("DeviceAccess.selectPrompt", {
      id: n(this, wi),
      deviceId: i.id
    });
  }
  /**
   * Cancel the prompt.
   */
  async cancel() {
    return (0, zn.assert)(n(this, Bt) !== null, "Cannot cancel prompt through detached session!"), (0, zn.assert)(!n(this, _i), "Cannot cancel DeviceRequestPrompt which is already handled!"), n(this, Bt).off("DeviceAccess.deviceRequestPrompted", n(this, Bo)), O(this, _i, !0), await n(this, Bt).send("DeviceAccess.cancelPrompt", { id: n(this, wi) });
  }
}
Bt = new WeakMap(), Hs = new WeakMap(), wi = new WeakMap(), _i = new WeakMap(), Bo = new WeakMap(), Wo = new WeakMap(), Bs = new WeakSet(), ah = function(i) {
  if (i.id === n(this, wi))
    for (const t of i.devices) {
      if (this.devices.some((s) => s.id === t.id))
        continue;
      const r = new Zy(t.id, t.name);
      this.devices.push(r);
      for (const s of n(this, Wo))
        s.filter(r) && s.promise.resolve(r);
    }
};
Rn.DeviceRequestPrompt = em;
var tr, Uo, Fr, kl, tm;
class AS {
  /**
   * @internal
   */
  constructor(i, t) {
    /**
     * @internal
     */
    g(this, kl);
    g(this, tr, void 0);
    g(this, Uo, void 0);
    g(this, Fr, /* @__PURE__ */ new Set());
    O(this, tr, i), O(this, Uo, t), n(this, tr).on("DeviceAccess.deviceRequestPrompted", (r) => {
      L(this, kl, tm).call(this, r);
    }), n(this, tr).on("Target.detachedFromTarget", () => {
      O(this, tr, null);
    });
  }
  /**
   * Wait for device prompt created by an action like calling WebBluetooth's
   * requestDevice.
   */
  async waitForDevicePrompt(i = {}) {
    (0, zn.assert)(n(this, tr) !== null, "Cannot wait for device prompt through detached session!");
    const t = n(this, Fr).size === 0;
    let r;
    t && (r = n(this, tr).send("DeviceAccess.enable"));
    const { timeout: s = n(this, Uo).timeout() } = i, m = Xy.Deferred.create({
      message: `Waiting for \`DeviceRequestPrompt\` failed: ${s}ms exceeded`,
      timeout: s
    });
    n(this, Fr).add(m);
    try {
      const [_] = await Promise.all([
        m.valueOrThrow(),
        r
      ]);
      return _;
    } finally {
      n(this, Fr).delete(m);
    }
  }
}
tr = new WeakMap(), Uo = new WeakMap(), Fr = new WeakMap(), kl = new WeakSet(), tm = function(i) {
  if (!n(this, Fr).size)
    return;
  (0, zn.assert)(n(this, tr) !== null);
  const t = new em(n(this, tr), n(this, Uo), i);
  for (const r of n(this, Fr))
    r.resolve(t);
  n(this, Fr).clear();
};
Rn.DeviceRequestPromptManager = AS;
var Ld = {}, Du = {}, qd = {}, Da = {};
Object.defineProperty(Da, "__esModule", { value: !0 });
Da.TaskManager = Da.WaitTask = void 0;
const xS = wt, NS = dt, $S = Cu, LS = st, pf = Nn;
var Dr, Vo, Ws, on, Si, Us, Vs, Ei, Wt, Ko, zo;
class qS {
  constructor(i, t, r, ...s) {
    g(this, Dr, void 0);
    g(this, Vo, void 0);
    g(this, Ws, void 0);
    g(this, on, void 0);
    g(this, Si, void 0);
    g(this, Us, void 0);
    g(this, Vs, void 0);
    g(this, Ei, xS.Deferred.create());
    g(this, Wt, void 0);
    g(this, Ko, void 0);
    g(this, zo, []);
    var m;
    switch (O(this, Dr, i), O(this, Vo, t.polling), O(this, Ws, t.root), O(this, Ko, t.signal), (m = n(this, Ko)) == null || m.addEventListener("abort", () => {
      var _;
      this.terminate((_ = n(this, Ko)) == null ? void 0 : _.reason);
    }, {
      once: !0
    }), typeof r) {
      case "string":
        O(this, on, `() => {return (${r});}`);
        break;
      default:
        O(this, on, (0, $S.stringifyFunction)(r));
        break;
    }
    O(this, Si, s), n(this, Dr).taskManager.add(this), t.timeout && (O(this, Vs, new LS.TimeoutError(`Waiting failed: ${t.timeout}ms exceeded`)), O(this, Us, setTimeout(() => {
      this.terminate(n(this, Vs));
    }, t.timeout))), this.rerun();
  }
  get result() {
    return n(this, Ei).valueOrThrow();
  }
  async rerun() {
    for (const t of n(this, zo))
      t.abort();
    n(this, zo).length = 0;
    const i = new AbortController();
    n(this, zo).push(i);
    try {
      switch (n(this, Vo)) {
        case "raf":
          O(this, Wt, await n(this, Dr).evaluateHandle(({ RAFPoller: r, createFunction: s }, m, ..._) => {
            const k = s(m);
            return new r(() => k(..._));
          }, pf.LazyArg.create((r) => r.puppeteerUtil), n(this, on), ...n(this, Si)));
          break;
        case "mutation":
          O(this, Wt, await n(this, Dr).evaluateHandle(({ MutationPoller: r, createFunction: s }, m, _, ...k) => {
            const I = s(_);
            return new r(() => I(...k), m || document);
          }, pf.LazyArg.create((r) => r.puppeteerUtil), n(this, Ws), n(this, on), ...n(this, Si)));
          break;
        default:
          O(this, Wt, await n(this, Dr).evaluateHandle(({ IntervalPoller: r, createFunction: s }, m, _, ...k) => {
            const I = s(_);
            return new r(() => I(...k), m);
          }, pf.LazyArg.create((r) => r.puppeteerUtil), n(this, Vo), n(this, on), ...n(this, Si)));
          break;
      }
      await n(this, Wt).evaluate((r) => {
        r.start();
      });
      const t = await n(this, Wt).evaluateHandle((r) => r.result());
      n(this, Ei).resolve(t), await this.terminate();
    } catch (t) {
      if (i.signal.aborted)
        return;
      const r = this.getBadError(t);
      r && await this.terminate(r);
    }
  }
  async terminate(i) {
    if (n(this, Dr).taskManager.delete(this), clearTimeout(n(this, Us)), i && !n(this, Ei).finished() && n(this, Ei).reject(i), n(this, Wt))
      try {
        await n(this, Wt).evaluateHandle(async (t) => {
          await t.stop();
        }), n(this, Wt) && (await n(this, Wt).dispose(), O(this, Wt, void 0));
      } catch {
      }
  }
  /**
   * Not all errors lead to termination. They usually imply we need to rerun the task.
   */
  getBadError(i) {
    return (0, NS.isErrorLike)(i) ? i.message.includes("Execution context is not available in detached frame") ? new Error("Waiting failed: Frame detached") : i.message.includes("Execution context was destroyed") || i.message.includes("Cannot find context with specified id") || i.message.includes("AbortError: Actor 'MessageHandlerFrame' destroyed") ? void 0 : i : new Error("WaitTask failed with an error", {
      cause: i
    });
  }
}
Dr = new WeakMap(), Vo = new WeakMap(), Ws = new WeakMap(), on = new WeakMap(), Si = new WeakMap(), Us = new WeakMap(), Vs = new WeakMap(), Ei = new WeakMap(), Wt = new WeakMap(), Ko = new WeakMap(), zo = new WeakMap();
Da.WaitTask = qS;
var an;
class HS {
  constructor() {
    g(this, an, /* @__PURE__ */ new Set());
  }
  add(i) {
    n(this, an).add(i);
  }
  delete(i) {
    n(this, an).delete(i);
  }
  terminateAll(i) {
    for (const t of n(this, an))
      t.terminate(i);
    n(this, an).clear();
  }
  async rerunAll() {
    await Promise.all([...n(this, an)].map((i) => i.rerun()));
  }
}
an = new WeakMap();
Da.TaskManager = HS;
Object.defineProperty(qd, "__esModule", { value: !0 });
qd.Realm = void 0;
const Np = Da, BS = vt;
var Ks;
class WS {
  constructor(i) {
    Oe(this, "timeoutSettings");
    Oe(this, "taskManager", new Np.TaskManager());
    g(this, Ks, !1);
    this.timeoutSettings = i;
  }
  async waitForFunction(i, t = {}, ...r) {
    const { polling: s = "raf", timeout: m = this.timeoutSettings.timeout(), root: _, signal: k } = t;
    if (typeof s == "number" && s < 0)
      throw new Error("Cannot poll with non-positive interval");
    return await new Np.WaitTask(this, {
      polling: s,
      root: _,
      timeout: m,
      signal: k
    }, i, ...r).result;
  }
  get disposed() {
    return n(this, Ks);
  }
  /** @internal */
  [BS.disposeSymbol]() {
    O(this, Ks, !0), this.taskManager.terminateAll(new Error("waitForFunction failed: frame got detached."));
  }
}
Ks = new WeakMap();
qd.Realm = WS;
var US = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, VS = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Du, "__esModule", { value: !0 });
Du.IsolatedWorld = void 0;
const KS = qd, za = Ze, $p = wt, Lp = vt, zS = Ou, QS = Ur;
var Rr, Pi, Cl, sn, Qo, nl, jl, zs;
class JS extends KS.Realm {
  constructor(t, r) {
    super(r);
    g(this, Qo);
    g(this, Rr, $p.Deferred.create());
    // Set of bindings that have been registered in the current context.
    g(this, Pi, /* @__PURE__ */ new Set());
    // Contains mapping from functions that should be bound to Puppeteer functions.
    g(this, Cl, /* @__PURE__ */ new Map());
    g(this, sn, void 0);
    // If multiple waitFor are set up asynchronously, we need to wait for the
    // first one to set up the binding in the page before running the others.
    g(this, jl, new zS.Mutex());
    g(this, zs, async (t) => {
      let r;
      try {
        r = JSON.parse(t.payload);
      } catch {
        return;
      }
      const { type: s, name: m, seq: _, args: k, isTrivial: I } = r;
      if (s === "internal" && n(this, Pi).has(m))
        try {
          const x = await n(this, Rr).valueOrThrow();
          if (t.executionContextId !== x._contextId)
            return;
          const F = this._bindings.get(m);
          await (F == null ? void 0 : F.run(x, _, k, I));
        } catch (x) {
          (0, za.debugError)(x);
        }
    });
    O(this, sn, t), this.frameUpdated();
  }
  get _bindings() {
    return n(this, Cl);
  }
  get environment() {
    return n(this, sn);
  }
  frameUpdated() {
    this.client.on("Runtime.bindingCalled", n(this, zs));
  }
  get client() {
    return n(this, sn).client;
  }
  clearContext() {
    O(this, Rr, $p.Deferred.create()), "clearDocumentHandle" in n(this, sn) && n(this, sn).clearDocumentHandle();
  }
  setContext(t) {
    n(this, Pi).clear(), n(this, Rr).resolve(t), this.taskManager.rerunAll();
  }
  hasContext() {
    return n(this, Rr).resolved();
  }
  async evaluateHandle(t, ...r) {
    return t = (0, za.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, t), await (await L(this, Qo, nl).call(this)).evaluateHandle(t, ...r);
  }
  async evaluate(t, ...r) {
    return t = (0, za.withSourcePuppeteerURLIfNone)(this.evaluate.name, t), await (await L(this, Qo, nl).call(this)).evaluate(t, ...r);
  }
  async _addBindingToContext(t, r) {
    const s = { stack: [], error: void 0, hasError: !1 };
    try {
      if (n(this, Pi).has(r))
        return;
      const m = US(s, await n(this, jl).acquire(), !1);
      try {
        await t._client.send("Runtime.addBinding", t._contextName ? {
          name: r,
          executionContextName: t._contextName
        } : {
          name: r,
          executionContextId: t._contextId
        }), await t.evaluate(za.addPageBinding, "internal", r), n(this, Pi).add(r);
      } catch (_) {
        if (_ instanceof Error && (_.message.includes("Execution context was destroyed") || _.message.includes("Cannot find context with specified id")))
          return;
        (0, za.debugError)(_);
      }
    } catch (m) {
      s.error = m, s.hasError = !0;
    } finally {
      VS(s);
    }
  }
  async adoptBackendNode(t) {
    const r = await L(this, Qo, nl).call(this), { object: s } = await this.client.send("DOM.resolveNode", {
      backendNodeId: t,
      executionContextId: r._contextId
    });
    return (0, QS.createCdpHandle)(this, s);
  }
  async adoptHandle(t) {
    if (t.realm === this)
      return await t.evaluateHandle((s) => s);
    const r = await this.client.send("DOM.describeNode", {
      objectId: t.id
    });
    return await this.adoptBackendNode(r.node.backendNodeId);
  }
  async transferHandle(t) {
    if (t.realm === this || t.remoteObject().objectId === void 0)
      return t;
    const r = await this.client.send("DOM.describeNode", {
      objectId: t.remoteObject().objectId
    }), s = await this.adoptBackendNode(r.node.backendNodeId);
    return await t.dispose(), s;
  }
  [Lp.disposeSymbol]() {
    super[Lp.disposeSymbol](), this.client.off("Runtime.bindingCalled", n(this, zs));
  }
}
Rr = new WeakMap(), Pi = new WeakMap(), Cl = new WeakMap(), sn = new WeakMap(), Qo = new WeakSet(), nl = function() {
  if (this.disposed)
    throw new Error(`Execution context is not available in detached frame "${this.environment.url()}" (are you trying to evaluate?)`);
  if (n(this, Rr) === null)
    throw new Error("Execution content promise is missing");
  return n(this, Rr).valueOrThrow();
}, jl = new WeakMap(), zs = new WeakMap();
Du.IsolatedWorld = JS;
var xn = {};
Object.defineProperty(xn, "__esModule", { value: !0 });
xn.PUPPETEER_WORLD = xn.MAIN_WORLD = void 0;
xn.MAIN_WORLD = Symbol("mainWorld");
xn.PUPPETEER_WORLD = Symbol("puppeteerWorld");
var Hd = {}, Na = {};
Object.defineProperty(Na, "__esModule", { value: !0 });
Na.FrameManagerEvent = void 0;
var qp;
(function(l) {
  l.FrameAttached = Symbol("FrameManager.FrameAttached"), l.FrameNavigated = Symbol("FrameManager.FrameNavigated"), l.FrameDetached = Symbol("FrameManager.FrameDetached"), l.FrameSwapped = Symbol("FrameManager.FrameSwapped"), l.LifecycleEvent = Symbol("FrameManager.LifecycleEvent"), l.FrameNavigatedWithinDocument = Symbol("FrameManager.FrameNavigatedWithinDocument");
})(qp || (Na.FrameManagerEvent = qp = {}));
Object.defineProperty(Hd, "__esModule", { value: !0 });
Hd.LifecycleWatcher = void 0;
const Qa = $d, Cr = mt, yf = eo, GS = et, Ja = wt, YS = vt, XS = Na, ZS = /* @__PURE__ */ new Map([
  ["load", "load"],
  ["domcontentloaded", "DOMContentLoaded"],
  ["networkidle0", "networkIdle"],
  ["networkidle2", "networkAlmostIdle"]
]);
var Qs, cn, Jo, un, Ut, Js, Oi, Gs, Ys, Xs, Zs, ec, Ar, Tl, rm, Il, nm, Ml, im, Fl, om, Dl, am, Rl, sm, Go, il, xr, Kn;
class eE {
  constructor(i, t, r, s) {
    g(this, Tl);
    g(this, Il);
    g(this, Ml);
    g(this, Fl);
    g(this, Dl);
    g(this, Rl);
    g(this, Go);
    g(this, xr);
    g(this, Qs, void 0);
    g(this, cn, void 0);
    g(this, Jo, void 0);
    g(this, un, null);
    g(this, Ut, new YS.DisposableStack());
    g(this, Js, void 0);
    g(this, Oi, void 0);
    g(this, Gs, Ja.Deferred.create());
    g(this, Ys, Ja.Deferred.create());
    g(this, Xs, Ja.Deferred.create());
    g(this, Zs, void 0);
    g(this, ec, void 0);
    g(this, Ar, void 0);
    Array.isArray(r) ? r = r.slice() : typeof r == "string" && (r = [r]), O(this, Js, t._loaderId), O(this, Qs, r.map((m) => {
      const _ = ZS.get(m);
      return (0, GS.assert)(_, "Unknown value for options.waitUntil: " + m), _;
    })), O(this, cn, t), O(this, Jo, s), n(this, Ut).use(
      // Revert if TODO #1 is done
      new Cr.EventSubscription(t._frameManager, XS.FrameManagerEvent.LifecycleEvent, L(this, xr, Kn).bind(this))
    ), n(this, Ut).use(new Cr.EventSubscription(t, Qa.FrameEvent.FrameNavigatedWithinDocument, L(this, Dl, am).bind(this))), n(this, Ut).use(new Cr.EventSubscription(t, Qa.FrameEvent.FrameNavigated, L(this, Rl, sm).bind(this))), n(this, Ut).use(new Cr.EventSubscription(t, Qa.FrameEvent.FrameSwapped, L(this, Go, il).bind(this))), n(this, Ut).use(new Cr.EventSubscription(t, Qa.FrameEvent.FrameSwappedByActivation, L(this, Go, il).bind(this))), n(this, Ut).use(new Cr.EventSubscription(t, Qa.FrameEvent.FrameDetached, L(this, Fl, om).bind(this))), n(this, Ut).use(new Cr.EventSubscription(i, yf.NetworkManagerEvent.Request, L(this, Tl, rm).bind(this))), n(this, Ut).use(new Cr.EventSubscription(i, yf.NetworkManagerEvent.Response, L(this, Ml, im).bind(this))), n(this, Ut).use(new Cr.EventSubscription(i, yf.NetworkManagerEvent.RequestFailed, L(this, Il, nm).bind(this))), O(this, Oi, Ja.Deferred.create({
      timeout: n(this, Jo),
      message: `Navigation timeout of ${n(this, Jo)} ms exceeded`
    })), L(this, xr, Kn).call(this);
  }
  async navigationResponse() {
    var i;
    return await ((i = n(this, Ar)) == null ? void 0 : i.valueOrThrow()), n(this, un) ? n(this, un).response() : null;
  }
  sameDocumentNavigationPromise() {
    return n(this, Gs).valueOrThrow();
  }
  newDocumentNavigationPromise() {
    return n(this, Xs).valueOrThrow();
  }
  lifecyclePromise() {
    return n(this, Ys).valueOrThrow();
  }
  terminationPromise() {
    return n(this, Oi).valueOrThrow();
  }
  dispose() {
    n(this, Ut).dispose(), n(this, Oi).resolve(new Error("LifecycleWatcher disposed"));
  }
}
Qs = new WeakMap(), cn = new WeakMap(), Jo = new WeakMap(), un = new WeakMap(), Ut = new WeakMap(), Js = new WeakMap(), Oi = new WeakMap(), Gs = new WeakMap(), Ys = new WeakMap(), Xs = new WeakMap(), Zs = new WeakMap(), ec = new WeakMap(), Ar = new WeakMap(), Tl = new WeakSet(), rm = function(i) {
  var t, r;
  i.frame() !== n(this, cn) || !i.isNavigationRequest() || (O(this, un, i), (t = n(this, Ar)) == null || t.resolve(), O(this, Ar, Ja.Deferred.create()), i.response() !== null && ((r = n(this, Ar)) == null || r.resolve()));
}, Il = new WeakSet(), nm = function(i) {
  var t, r;
  ((t = n(this, un)) == null ? void 0 : t._requestId) === i._requestId && ((r = n(this, Ar)) == null || r.resolve());
}, Ml = new WeakSet(), im = function(i) {
  var t, r;
  ((t = n(this, un)) == null ? void 0 : t._requestId) === i.request()._requestId && ((r = n(this, Ar)) == null || r.resolve());
}, Fl = new WeakSet(), om = function(i) {
  if (n(this, cn) === i) {
    n(this, Oi).resolve(new Error("Navigating frame was detached"));
    return;
  }
  L(this, xr, Kn).call(this);
}, Dl = new WeakSet(), am = function() {
  O(this, Zs, !0), L(this, xr, Kn).call(this);
}, Rl = new WeakSet(), sm = function(i) {
  if (i === "BackForwardCacheRestore")
    return L(this, Go, il).call(this);
  L(this, xr, Kn).call(this);
}, Go = new WeakSet(), il = function() {
  O(this, ec, !0), L(this, xr, Kn).call(this);
}, xr = new WeakSet(), Kn = function() {
  if (!i(n(this, cn), n(this, Qs)))
    return;
  n(this, Ys).resolve(), n(this, Zs) && n(this, Gs).resolve(void 0), (n(this, ec) || n(this, cn)._loaderId !== n(this, Js)) && n(this, Xs).resolve(void 0);
  function i(t, r) {
    for (const s of r)
      if (!t._lifecycleEvents.has(s))
        return !1;
    for (const s of t.childFrames())
      if (s._hasStartedLoading && !i(s, r))
        return !1;
    return !0;
  }
};
Hd.LifecycleWatcher = eE;
var tE = re && re.__runInitializers || function(l, i, t) {
  for (var r = arguments.length > 2, s = 0; s < i.length; s++)
    t = r ? i[s].call(l, t) : i[s].call(l);
  return r ? t : void 0;
}, Yu = re && re.__esDecorate || function(l, i, t, r, s, m) {
  function _($) {
    if ($ !== void 0 && typeof $ != "function")
      throw new TypeError("Function expected");
    return $;
  }
  for (var k = r.kind, I = k === "getter" ? "get" : k === "setter" ? "set" : "value", x = !i && l ? r.static ? l : l.prototype : null, F = i || (x ? Object.getOwnPropertyDescriptor(x, r.name) : {}), R, N = !1, Q = t.length - 1; Q >= 0; Q--) {
    var q = {};
    for (var B in r)
      q[B] = B === "access" ? {} : r[B];
    for (var B in r.access)
      q.access[B] = r.access[B];
    q.addInitializer = function($) {
      if (N)
        throw new TypeError("Cannot add initializers after decoration has completed");
      m.push(_($ || null));
    };
    var D = (0, t[Q])(k === "accessor" ? { get: F.get, set: F.set } : F[I], q);
    if (k === "accessor") {
      if (D === void 0)
        continue;
      if (D === null || typeof D != "object")
        throw new TypeError("Object expected");
      (R = _(D.get)) && (F.get = R), (R = _(D.set)) && (F.set = R), (R = _(D.init)) && s.unshift(R);
    } else
      (R = _(D)) && (k === "field" ? s.unshift(R) : F[I] = R);
  }
  x && Object.defineProperty(x, r.name, F), N = !0;
};
Object.defineProperty(Ld, "__esModule", { value: !0 });
Ld.CdpFrame = void 0;
const uo = $d, rE = st, nE = Ze, Xu = wt, mf = vt, iE = dt, Hp = Du, Jr = xn, vf = Hd;
let oE = (() => {
  var _, k, I, x, cm, R;
  let l = uo.Frame, i = [], t, r, s, m;
  return R = class extends l {
    constructor(q, B, D, $) {
      super();
      g(this, x);
      g(this, _, (tE(this, i), ""));
      g(this, k, !1);
      g(this, I, void 0);
      Oe(this, "_frameManager");
      Oe(this, "_id");
      Oe(this, "_loaderId", "");
      Oe(this, "_lifecycleEvents", /* @__PURE__ */ new Set());
      Oe(this, "_parentId");
      this._frameManager = q, O(this, _, ""), this._id = B, this._parentId = D, O(this, k, !1), this._loaderId = "", this.updateClient($), this.on(uo.FrameEvent.FrameSwappedByActivation, () => {
        this._onLoadingStarted(), this._onLoadingStopped();
      });
    }
    /**
     * This is used internally in DevTools.
     *
     * @internal
     */
    _client() {
      return n(this, I);
    }
    /**
     * Updates the frame ID with the new ID. This happens when the main frame is
     * replaced by a different frame.
     */
    updateId(q) {
      this._id = q;
    }
    updateClient(q, B = !1) {
      O(this, I, q), B ? (this.worlds[Jr.MAIN_WORLD].frameUpdated(), this.worlds[Jr.PUPPETEER_WORLD].frameUpdated()) : this.worlds = {
        [Jr.MAIN_WORLD]: new Hp.IsolatedWorld(this, this._frameManager.timeoutSettings),
        [Jr.PUPPETEER_WORLD]: new Hp.IsolatedWorld(this, this._frameManager.timeoutSettings)
      };
    }
    page() {
      return this._frameManager.page();
    }
    isOOPFrame() {
      return n(this, I) !== this._frameManager.client;
    }
    async goto(q, B = {}) {
      const { referer: D = this._frameManager.networkManager.extraHTTPHeaders().referer, referrerPolicy: $ = this._frameManager.networkManager.extraHTTPHeaders()["referer-policy"], waitUntil: A = ["load"], timeout: z = this._frameManager.timeoutSettings.navigationTimeout() } = B;
      let Ie = !1;
      const ke = new vf.LifecycleWatcher(this._frameManager.networkManager, this, A, z);
      let $e = await Xu.Deferred.race([
        Ne(n(this, I), q, D, $, this._id),
        ke.terminationPromise()
      ]);
      $e || ($e = await Xu.Deferred.race([
        ke.terminationPromise(),
        Ie ? ke.newDocumentNavigationPromise() : ke.sameDocumentNavigationPromise()
      ]));
      try {
        if ($e)
          throw $e;
        return await ke.navigationResponse();
      } finally {
        ke.dispose();
      }
      async function Ne(Y, le, he, ce, Ce) {
        try {
          const Ee = await Y.send("Page.navigate", {
            url: le,
            referrer: he,
            frameId: Ce,
            referrerPolicy: ce
          });
          return Ie = !!Ee.loaderId, Ee.errorText === "net::ERR_HTTP_RESPONSE_CODE_FAILURE" ? null : Ee.errorText ? new Error(`${Ee.errorText} at ${le}`) : null;
        } catch (Ee) {
          if ((0, iE.isErrorLike)(Ee))
            return Ee;
          throw Ee;
        }
      }
    }
    async waitForNavigation(q = {}) {
      const { waitUntil: B = ["load"], timeout: D = this._frameManager.timeoutSettings.navigationTimeout() } = q, $ = new vf.LifecycleWatcher(this._frameManager.networkManager, this, B, D), A = await Xu.Deferred.race([
        $.terminationPromise(),
        $.sameDocumentNavigationPromise(),
        $.newDocumentNavigationPromise()
      ]);
      try {
        if (A)
          throw A;
        return await $.navigationResponse();
      } finally {
        $.dispose();
      }
    }
    get client() {
      return n(this, I);
    }
    mainRealm() {
      return this.worlds[Jr.MAIN_WORLD];
    }
    isolatedRealm() {
      return this.worlds[Jr.PUPPETEER_WORLD];
    }
    async setContent(q, B = {}) {
      const { waitUntil: D = ["load"], timeout: $ = this._frameManager.timeoutSettings.navigationTimeout() } = B;
      await (0, nE.setPageContent)(this.isolatedRealm(), q);
      const A = new vf.LifecycleWatcher(this._frameManager.networkManager, this, D, $), z = await Xu.Deferred.race([
        A.terminationPromise(),
        A.lifecyclePromise()
      ]);
      if (A.dispose(), z)
        throw z;
    }
    url() {
      return n(this, _);
    }
    parentFrame() {
      return this._frameManager._frameTree.parentFrame(this._id) || null;
    }
    childFrames() {
      return this._frameManager._frameTree.childFrames(this._id);
    }
    async waitForDevicePrompt(q = {}) {
      return await L(this, x, cm).call(this).waitForDevicePrompt(q);
    }
    _navigated(q) {
      this._name = q.name, O(this, _, `${q.url}${q.urlFragment || ""}`);
    }
    _navigatedWithinDocument(q) {
      O(this, _, q);
    }
    _onLifecycleEvent(q, B) {
      B === "init" && (this._loaderId = q, this._lifecycleEvents.clear()), this._lifecycleEvents.add(B);
    }
    _onLoadingStopped() {
      this._lifecycleEvents.add("DOMContentLoaded"), this._lifecycleEvents.add("load");
    }
    _onLoadingStarted() {
      this._hasStartedLoading = !0;
    }
    get detached() {
      return n(this, k);
    }
    [(t = [uo.throwIfDetached], r = [uo.throwIfDetached], s = [uo.throwIfDetached], m = [uo.throwIfDetached], mf.disposeSymbol)]() {
      n(this, k) || (O(this, k, !0), this.worlds[Jr.MAIN_WORLD][mf.disposeSymbol](), this.worlds[Jr.PUPPETEER_WORLD][mf.disposeSymbol]());
    }
    exposeFunction() {
      throw new rE.UnsupportedOperation();
    }
  }, _ = new WeakMap(), k = new WeakMap(), I = new WeakMap(), x = new WeakSet(), cm = function() {
    const q = this.page().mainFrame();
    return this.isOOPFrame() || q === null ? this._frameManager._deviceRequestPromptManager(n(this, I)) : q._frameManager._deviceRequestPromptManager(n(this, I));
  }, (() => {
    const q = typeof Symbol == "function" && Symbol.metadata ? Object.create(l[Symbol.metadata] ?? null) : void 0;
    Yu(R, null, t, { kind: "method", name: "goto", static: !1, private: !1, access: { has: (B) => "goto" in B, get: (B) => B.goto }, metadata: q }, null, i), Yu(R, null, r, { kind: "method", name: "waitForNavigation", static: !1, private: !1, access: { has: (B) => "waitForNavigation" in B, get: (B) => B.waitForNavigation }, metadata: q }, null, i), Yu(R, null, s, { kind: "method", name: "setContent", static: !1, private: !1, access: { has: (B) => "setContent" in B, get: (B) => B.setContent }, metadata: q }, null, i), Yu(R, null, m, { kind: "method", name: "waitForDevicePrompt", static: !1, private: !1, access: { has: (B) => "waitForDevicePrompt" in B, get: (B) => B.waitForDevicePrompt }, metadata: q }, null, i), q && Object.defineProperty(R, Symbol.metadata, { enumerable: !0, configurable: !0, writable: !0, value: q });
  })(), R;
})();
Ld.CdpFrame = oE;
var Bd = {};
Object.defineProperty(Bd, "__esModule", { value: !0 });
Bd.FrameTree = void 0;
const aE = wt;
var ki, Yo, ln, Ci, tc;
class sE {
  constructor() {
    g(this, ki, /* @__PURE__ */ new Map());
    // frameID -> parentFrameID
    g(this, Yo, /* @__PURE__ */ new Map());
    // frameID -> childFrameIDs
    g(this, ln, /* @__PURE__ */ new Map());
    g(this, Ci, void 0);
    g(this, tc, /* @__PURE__ */ new Map());
  }
  getMainFrame() {
    return n(this, Ci);
  }
  getById(i) {
    return n(this, ki).get(i);
  }
  /**
   * Returns a promise that is resolved once the frame with
   * the given ID is added to the tree.
   */
  waitForFrame(i) {
    const t = this.getById(i);
    if (t)
      return Promise.resolve(t);
    const r = aE.Deferred.create();
    return (n(this, tc).get(i) || /* @__PURE__ */ new Set()).add(r), r.valueOrThrow();
  }
  frames() {
    return Array.from(n(this, ki).values());
  }
  addFrame(i) {
    var t;
    n(this, ki).set(i._id, i), i._parentId ? (n(this, Yo).set(i._id, i._parentId), n(this, ln).has(i._parentId) || n(this, ln).set(i._parentId, /* @__PURE__ */ new Set()), n(this, ln).get(i._parentId).add(i._id)) : n(this, Ci) || O(this, Ci, i), (t = n(this, tc).get(i._id)) == null || t.forEach((r) => r.resolve(i));
  }
  removeFrame(i) {
    var t;
    n(this, ki).delete(i._id), n(this, Yo).delete(i._id), i._parentId ? (t = n(this, ln).get(i._parentId)) == null || t.delete(i._id) : O(this, Ci, void 0);
  }
  childFrames(i) {
    const t = n(this, ln).get(i);
    return t ? Array.from(t).map((r) => this.getById(r)).filter((r) => r !== void 0) : [];
  }
  parentFrame(i) {
    const t = n(this, Yo).get(i);
    return t ? this.getById(t) : void 0;
  }
}
ki = new WeakMap(), Yo = new WeakMap(), ln = new WeakMap(), Ci = new WeakMap(), tc = new WeakMap();
Bd.FrameTree = sE;
var Wd = {}, Ud = {}, Xt = {};
Object.defineProperty(Xt, "__esModule", { value: !0 });
Xt.STATUS_TEXTS = Xt.headersArray = Xt.InterceptResolutionAction = Xt.HTTPRequest = Xt.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = void 0;
Xt.DEFAULT_INTERCEPT_RESOLUTION_PRIORITY = 0;
class cE {
  /**
   * @internal
   */
  constructor() {
    /**
     * @internal
     */
    Oe(this, "_requestId", "");
    /**
     * @internal
     */
    Oe(this, "_interceptionId");
    /**
     * @internal
     */
    Oe(this, "_failureText", null);
    /**
     * @internal
     */
    Oe(this, "_response", null);
    /**
     * @internal
     */
    Oe(this, "_fromMemoryCache", !1);
    /**
     * @internal
     */
    Oe(this, "_redirectChain", []);
  }
}
Xt.HTTPRequest = cE;
var Bp;
(function(l) {
  l.Abort = "abort", l.Respond = "respond", l.Continue = "continue", l.Disabled = "disabled", l.None = "none", l.AlreadyHandled = "already-handled";
})(Bp || (Xt.InterceptResolutionAction = Bp = {}));
function uE(l) {
  const i = [];
  for (const t in l) {
    const r = l[t];
    if (!Object.is(r, void 0)) {
      const s = Array.isArray(r) ? r : [r];
      i.push(...s.map((m) => ({ name: t, value: m + "" })));
    }
  }
  return i;
}
Xt.headersArray = uE;
Xt.STATUS_TEXTS = {
  100: "Continue",
  101: "Switching Protocols",
  102: "Processing",
  103: "Early Hints",
  200: "OK",
  201: "Created",
  202: "Accepted",
  203: "Non-Authoritative Information",
  204: "No Content",
  205: "Reset Content",
  206: "Partial Content",
  207: "Multi-Status",
  208: "Already Reported",
  226: "IM Used",
  300: "Multiple Choices",
  301: "Moved Permanently",
  302: "Found",
  303: "See Other",
  304: "Not Modified",
  305: "Use Proxy",
  306: "Switch Proxy",
  307: "Temporary Redirect",
  308: "Permanent Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden",
  404: "Not Found",
  405: "Method Not Allowed",
  406: "Not Acceptable",
  407: "Proxy Authentication Required",
  408: "Request Timeout",
  409: "Conflict",
  410: "Gone",
  411: "Length Required",
  412: "Precondition Failed",
  413: "Payload Too Large",
  414: "URI Too Long",
  415: "Unsupported Media Type",
  416: "Range Not Satisfiable",
  417: "Expectation Failed",
  418: "I'm a teapot",
  421: "Misdirected Request",
  422: "Unprocessable Entity",
  423: "Locked",
  424: "Failed Dependency",
  425: "Too Early",
  426: "Upgrade Required",
  428: "Precondition Required",
  429: "Too Many Requests",
  431: "Request Header Fields Too Large",
  451: "Unavailable For Legal Reasons",
  500: "Internal Server Error",
  501: "Not Implemented",
  502: "Bad Gateway",
  503: "Service Unavailable",
  504: "Gateway Timeout",
  505: "HTTP Version Not Supported",
  506: "Variant Also Negotiates",
  507: "Insufficient Storage",
  508: "Loop Detected",
  510: "Not Extended",
  511: "Network Authentication Required"
};
Object.defineProperty(Ud, "__esModule", { value: !0 });
Ud.CdpHTTPRequest = void 0;
const Gt = Xt, um = Ze, lr = et;
var dn, rc, rr, Vt, fn, nc, ic, oc, ac, sc, ji, Ti, Xo, ft, Zo, cc, uc, sh, lc, ch, dc, uh;
class lE extends Gt.HTTPRequest {
  constructor(t, r, s, m, _, k) {
    super();
    g(this, uc);
    g(this, lc);
    g(this, dc);
    g(this, dn, void 0);
    g(this, rc, void 0);
    g(this, rr, void 0);
    g(this, Vt, !1);
    g(this, fn, void 0);
    g(this, nc, void 0);
    g(this, ic, void 0);
    g(this, oc, void 0);
    g(this, ac, {});
    g(this, sc, void 0);
    g(this, ji, void 0);
    g(this, Ti, null);
    g(this, Xo, null);
    g(this, ft, {
      action: Gt.InterceptResolutionAction.None
    });
    g(this, Zo, void 0);
    g(this, cc, void 0);
    O(this, dn, t), this._requestId = _.requestId, O(this, rc, _.requestId === _.loaderId && _.type === "Document"), this._interceptionId = s, O(this, rr, m), O(this, fn, _.request.url), O(this, nc, (_.type || "other").toLowerCase()), O(this, ic, _.request.method), O(this, oc, _.request.postData), O(this, sc, r), this._redirectChain = k, O(this, ji, {}), O(this, Zo, []), O(this, cc, _.initiator);
    for (const [I, x] of Object.entries(_.request.headers))
      n(this, ac)[I.toLowerCase()] = x;
  }
  get client() {
    return n(this, dn);
  }
  url() {
    return n(this, fn);
  }
  continueRequestOverrides() {
    return (0, lr.assert)(n(this, rr), "Request Interception is not enabled!"), n(this, ji);
  }
  responseForRequest() {
    return (0, lr.assert)(n(this, rr), "Request Interception is not enabled!"), n(this, Ti);
  }
  abortErrorReason() {
    return (0, lr.assert)(n(this, rr), "Request Interception is not enabled!"), n(this, Xo);
  }
  interceptResolutionState() {
    return n(this, rr) ? n(this, Vt) ? { action: Gt.InterceptResolutionAction.AlreadyHandled } : { ...n(this, ft) } : { action: Gt.InterceptResolutionAction.Disabled };
  }
  isInterceptResolutionHandled() {
    return n(this, Vt);
  }
  enqueueInterceptAction(t) {
    n(this, Zo).push(t);
  }
  async finalizeInterceptions() {
    await n(this, Zo).reduce((r, s) => r.then(s), Promise.resolve());
    const { action: t } = this.interceptResolutionState();
    switch (t) {
      case "abort":
        return await L(this, dc, uh).call(this, n(this, Xo));
      case "respond":
        if (n(this, Ti) === null)
          throw new Error("Response is missing for the interception");
        return await L(this, lc, ch).call(this, n(this, Ti));
      case "continue":
        return await L(this, uc, sh).call(this, n(this, ji));
    }
  }
  resourceType() {
    return n(this, nc);
  }
  method() {
    return n(this, ic);
  }
  postData() {
    return n(this, oc);
  }
  headers() {
    return n(this, ac);
  }
  response() {
    return this._response;
  }
  frame() {
    return n(this, sc);
  }
  isNavigationRequest() {
    return n(this, rc);
  }
  initiator() {
    return n(this, cc);
  }
  redirectChain() {
    return this._redirectChain.slice();
  }
  failure() {
    return this._failureText ? {
      errorText: this._failureText
    } : null;
  }
  async continue(t = {}, r) {
    if (!n(this, fn).startsWith("data:")) {
      if ((0, lr.assert)(n(this, rr), "Request Interception is not enabled!"), (0, lr.assert)(!n(this, Vt), "Request is already handled!"), r === void 0)
        return await L(this, uc, sh).call(this, t);
      if (O(this, ji, t), n(this, ft).priority === void 0 || r > n(this, ft).priority) {
        O(this, ft, {
          action: Gt.InterceptResolutionAction.Continue,
          priority: r
        });
        return;
      }
      if (r === n(this, ft).priority) {
        if (n(this, ft).action === "abort" || n(this, ft).action === "respond")
          return;
        n(this, ft).action = Gt.InterceptResolutionAction.Continue;
      }
    }
  }
  async respond(t, r) {
    if (!n(this, fn).startsWith("data:")) {
      if ((0, lr.assert)(n(this, rr), "Request Interception is not enabled!"), (0, lr.assert)(!n(this, Vt), "Request is already handled!"), r === void 0)
        return await L(this, lc, ch).call(this, t);
      if (O(this, Ti, t), n(this, ft).priority === void 0 || r > n(this, ft).priority) {
        O(this, ft, {
          action: Gt.InterceptResolutionAction.Respond,
          priority: r
        });
        return;
      }
      if (r === n(this, ft).priority) {
        if (n(this, ft).action === "abort")
          return;
        n(this, ft).action = Gt.InterceptResolutionAction.Respond;
      }
    }
  }
  async abort(t = "failed", r) {
    if (n(this, fn).startsWith("data:"))
      return;
    const s = dE[t];
    if ((0, lr.assert)(s, "Unknown error code: " + t), (0, lr.assert)(n(this, rr), "Request Interception is not enabled!"), (0, lr.assert)(!n(this, Vt), "Request is already handled!"), r === void 0)
      return await L(this, dc, uh).call(this, s);
    if (O(this, Xo, s), n(this, ft).priority === void 0 || r >= n(this, ft).priority) {
      O(this, ft, {
        action: Gt.InterceptResolutionAction.Abort,
        priority: r
      });
      return;
    }
  }
}
dn = new WeakMap(), rc = new WeakMap(), rr = new WeakMap(), Vt = new WeakMap(), fn = new WeakMap(), nc = new WeakMap(), ic = new WeakMap(), oc = new WeakMap(), ac = new WeakMap(), sc = new WeakMap(), ji = new WeakMap(), Ti = new WeakMap(), Xo = new WeakMap(), ft = new WeakMap(), Zo = new WeakMap(), cc = new WeakMap(), uc = new WeakSet(), sh = async function(t = {}) {
  const { url: r, method: s, postData: m, headers: _ } = t;
  O(this, Vt, !0);
  const k = m ? Buffer.from(m).toString("base64") : void 0;
  if (this._interceptionId === void 0)
    throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.continueRequest");
  await n(this, dn).send("Fetch.continueRequest", {
    requestId: this._interceptionId,
    url: r,
    method: s,
    postData: k,
    headers: _ ? (0, Gt.headersArray)(_) : void 0
  }).catch((I) => (O(this, Vt, !1), bf(I)));
}, lc = new WeakSet(), ch = async function(t) {
  O(this, Vt, !0);
  const r = t.body && (0, um.isString)(t.body) ? Buffer.from(t.body) : t.body || null, s = {};
  if (t.headers)
    for (const _ of Object.keys(t.headers)) {
      const k = t.headers[_];
      s[_.toLowerCase()] = Array.isArray(k) ? k.map((I) => String(I)) : String(k);
    }
  t.contentType && (s["content-type"] = t.contentType), r && !("content-length" in s) && (s["content-length"] = String(Buffer.byteLength(r)));
  const m = t.status || 200;
  if (this._interceptionId === void 0)
    throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.fulfillRequest");
  await n(this, dn).send("Fetch.fulfillRequest", {
    requestId: this._interceptionId,
    responseCode: m,
    responsePhrase: Gt.STATUS_TEXTS[m],
    responseHeaders: (0, Gt.headersArray)(s),
    body: r ? r.toString("base64") : void 0
  }).catch((_) => (O(this, Vt, !1), bf(_)));
}, dc = new WeakSet(), uh = async function(t) {
  if (O(this, Vt, !0), this._interceptionId === void 0)
    throw new Error("HTTPRequest is missing _interceptionId needed for Fetch.failRequest");
  await n(this, dn).send("Fetch.failRequest", {
    requestId: this._interceptionId,
    errorReason: t || "Failed"
  }).catch(bf);
};
Ud.CdpHTTPRequest = lE;
const dE = {
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
async function bf(l) {
  if (["Invalid header"].includes(l.originalMessage))
    throw l;
  (0, um.debugError)(l);
}
var Vd = {}, Kd = {};
Object.defineProperty(Kd, "__esModule", { value: !0 });
Kd.HTTPResponse = void 0;
class fE {
  /**
   * @internal
   */
  constructor() {
  }
  /**
   * True if the response was successful (status in the range 200-299).
   */
  ok() {
    const i = this.status();
    return i === 0 || i >= 200 && i <= 299;
  }
  /**
   * Promise which resolves to a text representation of response body.
   */
  async text() {
    return (await this.buffer()).toString("utf8");
  }
  /**
   * Promise which resolves to a JSON representation of response body.
   *
   * @remarks
   *
   * This method will throw if the response body is not parsable via
   * `JSON.parse`.
   */
  async json() {
    const i = await this.text();
    return JSON.parse(i);
  }
}
Kd.HTTPResponse = fE;
var zd = {};
Object.defineProperty(zd, "__esModule", { value: !0 });
zd.SecurityDetails = void 0;
var fc, hc, pc, yc, mc, vc;
class hE {
  /**
   * @internal
   */
  constructor(i) {
    g(this, fc, void 0);
    g(this, hc, void 0);
    g(this, pc, void 0);
    g(this, yc, void 0);
    g(this, mc, void 0);
    g(this, vc, void 0);
    O(this, fc, i.subjectName), O(this, hc, i.issuer), O(this, pc, i.validFrom), O(this, yc, i.validTo), O(this, mc, i.protocol), O(this, vc, i.sanList);
  }
  /**
   * The name of the issuer of the certificate.
   */
  issuer() {
    return n(this, hc);
  }
  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the start of the certificate's validity.
   */
  validFrom() {
    return n(this, pc);
  }
  /**
   * {@link https://en.wikipedia.org/wiki/Unix_time | Unix timestamp}
   * marking the end of the certificate's validity.
   */
  validTo() {
    return n(this, yc);
  }
  /**
   * The security protocol being used, e.g. "TLS 1.2".
   */
  protocol() {
    return n(this, mc);
  }
  /**
   * The name of the subject to which the certificate was issued.
   */
  subjectName() {
    return n(this, fc);
  }
  /**
   * The list of {@link https://en.wikipedia.org/wiki/Subject_Alternative_Name | subject alternative names (SANs)} of the certificate.
   */
  subjectAlternativeNames() {
    return n(this, vc);
  }
}
fc = new WeakMap(), hc = new WeakMap(), pc = new WeakMap(), yc = new WeakMap(), mc = new WeakMap(), vc = new WeakMap();
zd.SecurityDetails = hE;
Object.defineProperty(Vd, "__esModule", { value: !0 });
Vd.CdpHTTPResponse = void 0;
const pE = Kd, Wp = st, yE = zd, mE = wt;
var bc, hn, ea, ta, gc, wc, _c, Sc, Ec, Pc, Oc, kc, Cc, Al, lm;
class vE extends pE.HTTPResponse {
  constructor(t, r, s, m) {
    super();
    g(this, Al);
    g(this, bc, void 0);
    g(this, hn, void 0);
    g(this, ea, null);
    g(this, ta, mE.Deferred.create());
    g(this, gc, void 0);
    g(this, wc, void 0);
    g(this, _c, void 0);
    g(this, Sc, void 0);
    g(this, Ec, void 0);
    g(this, Pc, void 0);
    g(this, Oc, {});
    g(this, kc, void 0);
    g(this, Cc, void 0);
    O(this, bc, t), O(this, hn, r), O(this, gc, {
      ip: s.remoteIPAddress,
      port: s.remotePort
    }), O(this, _c, L(this, Al, lm).call(this, m) || s.statusText), O(this, Sc, r.url()), O(this, Ec, !!s.fromDiskCache), O(this, Pc, !!s.fromServiceWorker), O(this, wc, m ? m.statusCode : s.status);
    const _ = m ? m.headers : s.headers;
    for (const [k, I] of Object.entries(_))
      n(this, Oc)[k.toLowerCase()] = I;
    O(this, kc, s.securityDetails ? new yE.SecurityDetails(s.securityDetails) : null), O(this, Cc, s.timing || null);
  }
  _resolveBody(t) {
    return t ? n(this, ta).reject(t) : n(this, ta).resolve();
  }
  remoteAddress() {
    return n(this, gc);
  }
  url() {
    return n(this, Sc);
  }
  status() {
    return n(this, wc);
  }
  statusText() {
    return n(this, _c);
  }
  headers() {
    return n(this, Oc);
  }
  securityDetails() {
    return n(this, kc);
  }
  timing() {
    return n(this, Cc);
  }
  buffer() {
    return n(this, ea) || O(this, ea, n(this, ta).valueOrThrow().then(async () => {
      try {
        const t = await n(this, bc).send("Network.getResponseBody", {
          requestId: n(this, hn)._requestId
        });
        return Buffer.from(t.body, t.base64Encoded ? "base64" : "utf8");
      } catch (t) {
        throw t instanceof Wp.ProtocolError && t.originalMessage === "No resource with given identifier found" ? new Wp.ProtocolError("Could not load body for this request. This might happen if the request is a preflight request.") : t;
      }
    })), n(this, ea);
  }
  request() {
    return n(this, hn);
  }
  fromCache() {
    return n(this, Ec) || n(this, hn)._fromMemoryCache;
  }
  fromServiceWorker() {
    return n(this, Pc);
  }
  frame() {
    return n(this, hn).frame();
  }
}
bc = new WeakMap(), hn = new WeakMap(), ea = new WeakMap(), ta = new WeakMap(), gc = new WeakMap(), wc = new WeakMap(), _c = new WeakMap(), Sc = new WeakMap(), Ec = new WeakMap(), Pc = new WeakMap(), Oc = new WeakMap(), kc = new WeakMap(), Cc = new WeakMap(), Al = new WeakSet(), lm = function(t) {
  if (!t || !t.headersText)
    return;
  const r = t.headersText.split("\r", 1)[0];
  if (!r)
    return;
  const s = r.match(/[^ ]* [^ ]* (.*)/);
  if (!s)
    return;
  const m = s[1];
  if (m)
    return m;
};
Vd.CdpHTTPResponse = vE;
var Qd = {};
Object.defineProperty(Qd, "__esModule", { value: !0 });
Qd.NetworkEventManager = void 0;
var Ii, Mi, Fi, Di, Ri, Ai;
class bE {
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
    g(this, Ii, /* @__PURE__ */ new Map());
    g(this, Mi, /* @__PURE__ */ new Map());
    g(this, Fi, /* @__PURE__ */ new Map());
    /*
     * The below maps are used to reconcile Network.responseReceivedExtraInfo
     * events with their corresponding request. Each response and redirect
     * response gets an ExtraInfo event, and we don't know which will come first.
     * This means that we have to store a Response or an ExtraInfo for each
     * response, and emit the event when we get both of them. In addition, to
     * handle redirects, we have to make them Arrays to represent the chain of
     * events.
     */
    g(this, Di, /* @__PURE__ */ new Map());
    g(this, Ri, /* @__PURE__ */ new Map());
    g(this, Ai, /* @__PURE__ */ new Map());
  }
  forget(i) {
    n(this, Ii).delete(i), n(this, Mi).delete(i), n(this, Ai).delete(i), n(this, Ri).delete(i), n(this, Di).delete(i);
  }
  responseExtraInfo(i) {
    return n(this, Di).has(i) || n(this, Di).set(i, []), n(this, Di).get(i);
  }
  queuedRedirectInfo(i) {
    return n(this, Ri).has(i) || n(this, Ri).set(i, []), n(this, Ri).get(i);
  }
  queueRedirectInfo(i, t) {
    this.queuedRedirectInfo(i).push(t);
  }
  takeQueuedRedirectInfo(i) {
    return this.queuedRedirectInfo(i).shift();
  }
  inFlightRequestsCount() {
    let i = 0;
    for (const t of n(this, Fi).values())
      t.response() || i++;
    return i;
  }
  storeRequestWillBeSent(i, t) {
    n(this, Ii).set(i, t);
  }
  getRequestWillBeSent(i) {
    return n(this, Ii).get(i);
  }
  forgetRequestWillBeSent(i) {
    n(this, Ii).delete(i);
  }
  getRequestPaused(i) {
    return n(this, Mi).get(i);
  }
  forgetRequestPaused(i) {
    n(this, Mi).delete(i);
  }
  storeRequestPaused(i, t) {
    n(this, Mi).set(i, t);
  }
  getRequest(i) {
    return n(this, Fi).get(i);
  }
  storeRequest(i, t) {
    n(this, Fi).set(i, t);
  }
  forgetRequest(i) {
    n(this, Fi).delete(i);
  }
  getQueuedEventGroup(i) {
    return n(this, Ai).get(i);
  }
  queueEventGroup(i, t) {
    n(this, Ai).set(i, t);
  }
  forgetQueuedEventGroup(i) {
    n(this, Ai).delete(i);
  }
}
Ii = new WeakMap(), Mi = new WeakMap(), Fi = new WeakMap(), Di = new WeakMap(), Ri = new WeakMap(), Ai = new WeakMap();
Qd.NetworkEventManager = bE;
Object.defineProperty(Wd, "__esModule", { value: !0 });
Wd.NetworkManager = void 0;
const gE = Mt, Up = mt, Gr = eo, Zu = Ze, wE = et, _E = vt, Vp = Ud, Kp = Vd, SE = Qd;
var jc, ra, Ye, pn, yn, na, yr, Nr, mn, kt, ia, Tc, xl, vn, Nl, dm, Ic, lh, mr, Xr, oa, ol, Mc, dh, aa, al, xi, Xa, $l, fm, Ll, hm, ql, pm, Fc, fh, Hl, ym, Ni, Za, Bl, mm, Wl, vm, Dc, hh, Ul, bm, Vl, gm, sa, sl, Kl, wm, Rc, ph, zl, _m, Ac, yh;
class EE extends Up.EventEmitter {
  constructor(t, r) {
    super();
    g(this, Nl);
    g(this, Ic);
    g(this, mr);
    g(this, oa);
    g(this, Mc);
    g(this, aa);
    g(this, xi);
    g(this, $l);
    g(this, Ll);
    /**
     * CDP may send a Fetch.requestPaused without or before a
     * Network.requestWillBeSent
     *
     * CDP may send multiple Fetch.requestPaused
     * for the same Network.requestWillBeSent.
     */
    g(this, ql);
    g(this, Fc);
    g(this, Hl);
    g(this, Ni);
    g(this, Bl);
    g(this, Wl);
    g(this, Dc);
    g(this, Ul);
    g(this, Vl);
    g(this, sa);
    g(this, Kl);
    g(this, Rc);
    g(this, zl);
    g(this, Ac);
    g(this, jc, void 0);
    g(this, ra, void 0);
    g(this, Ye, new SE.NetworkEventManager());
    g(this, pn, void 0);
    g(this, yn, void 0);
    g(this, na, /* @__PURE__ */ new Set());
    g(this, yr, !1);
    g(this, Nr, !1);
    g(this, mn, void 0);
    g(this, kt, void 0);
    g(this, ia, void 0);
    g(this, Tc, void 0);
    g(this, xl, [
      ["Fetch.requestPaused", L(this, ql, pm)],
      ["Fetch.authRequired", L(this, Ll, hm)],
      ["Network.requestWillBeSent", L(this, $l, fm)],
      ["Network.requestServedFromCache", L(this, Bl, mm)],
      ["Network.responseReceived", L(this, Ul, bm)],
      ["Network.loadingFinished", L(this, Kl, wm)],
      ["Network.loadingFailed", L(this, zl, _m)],
      ["Network.responseReceivedExtraInfo", L(this, Vl, gm)],
      [gE.CDPSessionEvent.Disconnected, L(this, Nl, dm)]
    ]);
    g(this, vn, /* @__PURE__ */ new Map());
    O(this, jc, t), O(this, ra, r);
  }
  async addClient(t) {
    if (n(this, vn).has(t))
      return;
    const r = new _E.DisposableStack();
    n(this, vn).set(t, r);
    for (const [s, m] of n(this, xl))
      r.use(
        // TODO: Remove any here.
        new Up.EventSubscription(t, s, (_) => m.bind(this)(t, _))
      );
    await Promise.all([
      n(this, jc) ? t.send("Security.setIgnoreCertificateErrors", {
        ignore: !0
      }) : null,
      t.send("Network.enable"),
      L(this, Ic, lh).call(this, t),
      L(this, oa, ol).call(this, t),
      L(this, xi, Xa).call(this, t),
      L(this, aa, al).call(this, t),
      L(this, Mc, dh).call(this, t)
    ]);
  }
  async authenticate(t) {
    O(this, yn, t);
    const r = n(this, yr) || !!n(this, yn);
    r !== n(this, Nr) && (O(this, Nr, r), await L(this, mr, Xr).call(this, L(this, aa, al).bind(this)));
  }
  async setExtraHTTPHeaders(t) {
    O(this, pn, {});
    for (const r of Object.keys(t)) {
      const s = t[r];
      (0, wE.assert)((0, Zu.isString)(s), `Expected value of header "${r}" to be String, but "${typeof s}" is found.`), n(this, pn)[r.toLowerCase()] = s;
    }
    await L(this, mr, Xr).call(this, L(this, Ic, lh).bind(this));
  }
  extraHTTPHeaders() {
    return Object.assign({}, n(this, pn));
  }
  inFlightRequestsCount() {
    return n(this, Ye).inFlightRequestsCount();
  }
  async setOfflineMode(t) {
    n(this, kt) || O(this, kt, {
      offline: !1,
      upload: -1,
      download: -1,
      latency: 0
    }), n(this, kt).offline = t, await L(this, mr, Xr).call(this, L(this, oa, ol).bind(this));
  }
  async emulateNetworkConditions(t) {
    n(this, kt) || O(this, kt, {
      offline: !1,
      upload: -1,
      download: -1,
      latency: 0
    }), n(this, kt).upload = t ? t.upload : -1, n(this, kt).download = t ? t.download : -1, n(this, kt).latency = t ? t.latency : 0, await L(this, mr, Xr).call(this, L(this, oa, ol).bind(this));
  }
  async setUserAgent(t, r) {
    O(this, ia, t), O(this, Tc, r), await L(this, mr, Xr).call(this, L(this, Mc, dh).bind(this));
  }
  async setCacheEnabled(t) {
    O(this, mn, !t), await L(this, mr, Xr).call(this, L(this, xi, Xa).bind(this));
  }
  async setRequestInterception(t) {
    O(this, yr, t);
    const r = n(this, yr) || !!n(this, yn);
    r !== n(this, Nr) && (O(this, Nr, r), await L(this, mr, Xr).call(this, L(this, aa, al).bind(this)));
  }
}
jc = new WeakMap(), ra = new WeakMap(), Ye = new WeakMap(), pn = new WeakMap(), yn = new WeakMap(), na = new WeakMap(), yr = new WeakMap(), Nr = new WeakMap(), mn = new WeakMap(), kt = new WeakMap(), ia = new WeakMap(), Tc = new WeakMap(), xl = new WeakMap(), vn = new WeakMap(), Nl = new WeakSet(), dm = async function(t) {
  var r;
  (r = n(this, vn).get(t)) == null || r.dispose(), n(this, vn).delete(t);
}, Ic = new WeakSet(), lh = async function(t) {
  n(this, pn) !== void 0 && await t.send("Network.setExtraHTTPHeaders", {
    headers: n(this, pn)
  });
}, mr = new WeakSet(), Xr = async function(t) {
  await Promise.all(Array.from(n(this, vn).keys()).map((r) => t(r)));
}, oa = new WeakSet(), ol = async function(t) {
  n(this, kt) !== void 0 && await t.send("Network.emulateNetworkConditions", {
    offline: n(this, kt).offline,
    latency: n(this, kt).latency,
    uploadThroughput: n(this, kt).upload,
    downloadThroughput: n(this, kt).download
  });
}, Mc = new WeakSet(), dh = async function(t) {
  n(this, ia) !== void 0 && await t.send("Network.setUserAgentOverride", {
    userAgent: n(this, ia),
    userAgentMetadata: n(this, Tc)
  });
}, aa = new WeakSet(), al = async function(t) {
  n(this, mn) === void 0 && O(this, mn, !1), n(this, Nr) ? await Promise.all([
    L(this, xi, Xa).call(this, t),
    t.send("Fetch.enable", {
      handleAuthRequests: !0,
      patterns: [{ urlPattern: "*" }]
    })
  ]) : await Promise.all([
    L(this, xi, Xa).call(this, t),
    t.send("Fetch.disable")
  ]);
}, xi = new WeakSet(), Xa = async function(t) {
  n(this, mn) !== void 0 && await t.send("Network.setCacheDisabled", {
    cacheDisabled: n(this, mn)
  });
}, $l = new WeakSet(), fm = function(t, r) {
  if (n(this, yr) && !r.request.url.startsWith("data:")) {
    const { requestId: s } = r;
    n(this, Ye).storeRequestWillBeSent(s, r);
    const m = n(this, Ye).getRequestPaused(s);
    if (m) {
      const { requestId: _ } = m;
      L(this, Fc, fh).call(this, r, m), L(this, Ni, Za).call(this, t, r, _), n(this, Ye).forgetRequestPaused(s);
    }
    return;
  }
  L(this, Ni, Za).call(this, t, r, void 0);
}, Ll = new WeakSet(), hm = function(t, r) {
  let s = "Default";
  n(this, na).has(r.requestId) ? s = "CancelAuth" : n(this, yn) && (s = "ProvideCredentials", n(this, na).add(r.requestId));
  const { username: m, password: _ } = n(this, yn) || {
    username: void 0,
    password: void 0
  };
  t.send("Fetch.continueWithAuth", {
    requestId: r.requestId,
    authChallengeResponse: { response: s, username: m, password: _ }
  }).catch(Zu.debugError);
}, ql = new WeakSet(), pm = function(t, r) {
  !n(this, yr) && n(this, Nr) && t.send("Fetch.continueRequest", {
    requestId: r.requestId
  }).catch(Zu.debugError);
  const { networkId: s, requestId: m } = r;
  if (!s) {
    L(this, Hl, ym).call(this, t, r);
    return;
  }
  const _ = (() => {
    const k = n(this, Ye).getRequestWillBeSent(s);
    if (k && (k.request.url !== r.request.url || k.request.method !== r.request.method)) {
      n(this, Ye).forgetRequestWillBeSent(s);
      return;
    }
    return k;
  })();
  _ ? (L(this, Fc, fh).call(this, _, r), L(this, Ni, Za).call(this, t, _, m)) : n(this, Ye).storeRequestPaused(s, r);
}, Fc = new WeakSet(), fh = function(t, r) {
  t.request.headers = {
    ...t.request.headers,
    // includes extra headers, like: Accept, Origin
    ...r.request.headers
  };
}, Hl = new WeakSet(), ym = function(t, r) {
  const s = r.frameId ? n(this, ra).frame(r.frameId) : null, m = new Vp.CdpHTTPRequest(t, s, r.requestId, n(this, yr), r, []);
  this.emit(Gr.NetworkManagerEvent.Request, m), m.finalizeInterceptions();
}, Ni = new WeakSet(), Za = function(t, r, s) {
  let m = [];
  if (r.redirectResponse) {
    let I = null;
    if (r.redirectHasExtraInfo && (I = n(this, Ye).responseExtraInfo(r.requestId).shift(), !I)) {
      n(this, Ye).queueRedirectInfo(r.requestId, {
        event: r,
        fetchRequestId: s
      });
      return;
    }
    const x = n(this, Ye).getRequest(r.requestId);
    x && (L(this, Wl, vm).call(this, t, x, r.redirectResponse, I), m = x._redirectChain);
  }
  const _ = r.frameId ? n(this, ra).frame(r.frameId) : null, k = new Vp.CdpHTTPRequest(t, _, s, n(this, yr), r, m);
  n(this, Ye).storeRequest(r.requestId, k), this.emit(Gr.NetworkManagerEvent.Request, k), k.finalizeInterceptions();
}, Bl = new WeakSet(), mm = function(t, r) {
  const s = n(this, Ye).getRequest(r.requestId);
  s && (s._fromMemoryCache = !0), this.emit(Gr.NetworkManagerEvent.RequestServedFromCache, s);
}, Wl = new WeakSet(), vm = function(t, r, s, m) {
  const _ = new Kp.CdpHTTPResponse(t, r, s, m);
  r._response = _, r._redirectChain.push(r), _._resolveBody(new Error("Response body is unavailable for redirect responses")), L(this, sa, sl).call(this, r, !1), this.emit(Gr.NetworkManagerEvent.Response, _), this.emit(Gr.NetworkManagerEvent.RequestFinished, r);
}, Dc = new WeakSet(), hh = function(t, r, s) {
  const m = n(this, Ye).getRequest(r.requestId);
  if (!m)
    return;
  n(this, Ye).responseExtraInfo(r.requestId).length && (0, Zu.debugError)(new Error("Unexpected extraInfo events for request " + r.requestId)), r.response.fromDiskCache && (s = null);
  const k = new Kp.CdpHTTPResponse(t, m, r.response, s);
  m._response = k, this.emit(Gr.NetworkManagerEvent.Response, k);
}, Ul = new WeakSet(), bm = function(t, r) {
  const s = n(this, Ye).getRequest(r.requestId);
  let m = null;
  if (s && !s._fromMemoryCache && r.hasExtraInfo && (m = n(this, Ye).responseExtraInfo(r.requestId).shift(), !m)) {
    n(this, Ye).queueEventGroup(r.requestId, {
      responseReceivedEvent: r
    });
    return;
  }
  L(this, Dc, hh).call(this, t, r, m);
}, Vl = new WeakSet(), gm = function(t, r) {
  const s = n(this, Ye).takeQueuedRedirectInfo(r.requestId);
  if (s) {
    n(this, Ye).responseExtraInfo(r.requestId).push(r), L(this, Ni, Za).call(this, t, s.event, s.fetchRequestId);
    return;
  }
  const m = n(this, Ye).getQueuedEventGroup(r.requestId);
  if (m) {
    n(this, Ye).forgetQueuedEventGroup(r.requestId), L(this, Dc, hh).call(this, t, m.responseReceivedEvent, r), m.loadingFinishedEvent && L(this, Rc, ph).call(this, m.loadingFinishedEvent), m.loadingFailedEvent && L(this, Ac, yh).call(this, m.loadingFailedEvent);
    return;
  }
  n(this, Ye).responseExtraInfo(r.requestId).push(r);
}, sa = new WeakSet(), sl = function(t, r) {
  const s = t._requestId, m = t._interceptionId;
  n(this, Ye).forgetRequest(s), m !== void 0 && n(this, na).delete(m), r && n(this, Ye).forget(s);
}, Kl = new WeakSet(), wm = function(t, r) {
  const s = n(this, Ye).getQueuedEventGroup(r.requestId);
  s ? s.loadingFinishedEvent = r : L(this, Rc, ph).call(this, r);
}, Rc = new WeakSet(), ph = function(t) {
  var s;
  const r = n(this, Ye).getRequest(t.requestId);
  r && (r.response() && ((s = r.response()) == null || s._resolveBody()), L(this, sa, sl).call(this, r, !0), this.emit(Gr.NetworkManagerEvent.RequestFinished, r));
}, zl = new WeakSet(), _m = function(t, r) {
  const s = n(this, Ye).getQueuedEventGroup(r.requestId);
  s ? s.loadingFailedEvent = r : L(this, Ac, yh).call(this, r);
}, Ac = new WeakSet(), yh = function(t) {
  const r = n(this, Ye).getRequest(t.requestId);
  if (!r)
    return;
  r._failureText = t.errorText;
  const s = r.response();
  s && s._resolveBody(), L(this, sa, sl).call(this, r, !0), this.emit(Gr.NetworkManagerEvent.RequestFailed, r);
};
Wd.NetworkManager = EE;
Object.defineProperty(Nd, "__esModule", { value: !0 });
Nd.FrameManager = void 0;
const zp = Mt, jr = $d, PE = mt, lo = Ze, gf = et, Qp = wt, OE = vt, kE = dt, CE = Zi, jE = Gi, TE = Rn, IE = Ur, Jp = Ld, Yr = Na, ME = Bd, wf = xn, FE = Wd, DE = 100;
var xc, bn, ca, $r, Nc, jt, $i, $c, Et, Lc, mh, Ql, Sm, Jl, Em, Gl, Pm, qc, vh, Hc, bh, Bc, gh, Yl, Om, Xl, km, Zl, Cm, ed, jm, td, Tm, Wc, wh, gn, po;
class RE extends PE.EventEmitter {
  constructor(t, r, s, m) {
    super();
    /**
     * Called when the frame's client is disconnected. We don't know if the
     * disconnect means that the frame is removed or if it will be replaced by a
     * new frame. Therefore, we wait for a swap event.
     */
    g(this, Lc);
    g(this, Ql);
    g(this, Jl);
    g(this, Gl);
    g(this, qc);
    g(this, Hc);
    g(this, Bc);
    g(this, Yl);
    g(this, Xl);
    g(this, Zl);
    g(this, ed);
    g(this, td);
    g(this, Wc);
    g(this, gn);
    g(this, xc, void 0);
    g(this, bn, void 0);
    g(this, ca, void 0);
    g(this, $r, /* @__PURE__ */ new Map());
    g(this, Nc, /* @__PURE__ */ new Set());
    g(this, jt, void 0);
    Oe(this, "_frameTree", new ME.FrameTree());
    /**
     * Set of frame IDs stored to indicate if a frame has received a
     * frameNavigated event so that frame tree responses could be ignored as the
     * frameNavigated event usually contains the latest information.
     */
    g(this, $i, /* @__PURE__ */ new Set());
    g(this, $c, /* @__PURE__ */ new WeakMap());
    g(this, Et, void 0);
    O(this, jt, t), O(this, xc, r), O(this, bn, new FE.NetworkManager(s, this)), O(this, ca, m), this.setupEventListeners(n(this, jt)), t.once(zp.CDPSessionEvent.Disconnected, () => {
      L(this, Lc, mh).call(this).catch(lo.debugError);
    });
  }
  get timeoutSettings() {
    return n(this, ca);
  }
  get networkManager() {
    return n(this, bn);
  }
  get client() {
    return n(this, jt);
  }
  /**
   * When the main frame is replaced by another main frame,
   * we maintain the main frame object identity while updating
   * its frame tree and ID.
   */
  async swapFrameTree(t) {
    L(this, Wc, wh).call(this, n(this, jt)), O(this, jt, t), (0, gf.assert)(n(this, jt) instanceof CE.CdpCDPSession, "CDPSession is not an instance of CDPSessionImpl.");
    const r = this._frameTree.getMainFrame();
    r && (n(this, $i).add(n(this, jt)._target()._targetId), this._frameTree.removeFrame(r), r.updateId(n(this, jt)._target()._targetId), r.mainRealm().clearContext(), r.isolatedRealm().clearContext(), this._frameTree.addFrame(r), r.updateClient(t, !0)), this.setupEventListeners(t), t.once(zp.CDPSessionEvent.Disconnected, () => {
      L(this, Lc, mh).call(this).catch(lo.debugError);
    }), await this.initialize(t), await n(this, bn).addClient(t), r && r.emit(jr.FrameEvent.FrameSwappedByActivation, void 0);
  }
  async registerSpeculativeSession(t) {
    await n(this, bn).addClient(t);
  }
  setupEventListeners(t) {
    t.on("Page.frameAttached", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Hc, bh).call(this, t, r.frameId, r.parentFrameId);
    }), t.on("Page.frameNavigated", async (r) => {
      var s;
      n(this, $i).add(r.frame.id), await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Bc, gh).call(this, r.frame, r.type);
    }), t.on("Page.navigatedWithinDocument", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Xl, km).call(this, r.frameId, r.url);
    }), t.on("Page.frameDetached", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Zl, Cm).call(this, r.frameId, r.reason);
    }), t.on("Page.frameStartedLoading", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Jl, Em).call(this, r.frameId);
    }), t.on("Page.frameStoppedLoading", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Gl, Pm).call(this, r.frameId);
    }), t.on("Runtime.executionContextCreated", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, ed, jm).call(this, r.context, t);
    }), t.on("Runtime.executionContextDestroyed", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, td, Tm).call(this, r.executionContextId, t);
    }), t.on("Runtime.executionContextsCleared", async () => {
      var r;
      await ((r = n(this, Et)) == null ? void 0 : r.valueOrThrow()), L(this, Wc, wh).call(this, t);
    }), t.on("Page.lifecycleEvent", async (r) => {
      var s;
      await ((s = n(this, Et)) == null ? void 0 : s.valueOrThrow()), L(this, Ql, Sm).call(this, r);
    });
  }
  async initialize(t) {
    var r, s;
    try {
      (r = n(this, Et)) == null || r.resolve(), O(this, Et, Qp.Deferred.create()), await Promise.all([
        n(this, bn).addClient(t),
        t.send("Page.enable"),
        t.send("Page.getFrameTree").then(({ frameTree: m }) => {
          var _;
          L(this, qc, vh).call(this, t, m), (_ = n(this, Et)) == null || _.resolve();
        }),
        t.send("Page.setLifecycleEventsEnabled", { enabled: !0 }),
        t.send("Runtime.enable").then(() => L(this, Yl, Om).call(this, t, lo.UTILITY_WORLD_NAME))
      ]);
    } catch (m) {
      if ((s = n(this, Et)) == null || s.resolve(), (0, kE.isErrorLike)(m) && (0, jE.isTargetClosedError)(m))
        return;
      throw m;
    }
  }
  executionContextById(t, r = n(this, jt)) {
    const s = this.getExecutionContextById(t, r);
    return (0, gf.assert)(s, "INTERNAL ERROR: missing context with id = " + t), s;
  }
  getExecutionContextById(t, r = n(this, jt)) {
    return n(this, $r).get(`${r.id()}:${t}`);
  }
  page() {
    return n(this, xc);
  }
  mainFrame() {
    const t = this._frameTree.getMainFrame();
    return (0, gf.assert)(t, "Requesting main frame too early!"), t;
  }
  frames() {
    return Array.from(this._frameTree.frames());
  }
  frame(t) {
    return this._frameTree.getById(t) || null;
  }
  onAttachedToTarget(t) {
    if (t._getTargetInfo().type !== "iframe")
      return;
    const r = this.frame(t._getTargetInfo().targetId);
    r && r.updateClient(t._session()), this.setupEventListeners(t._session()), this.initialize(t._session());
  }
  _deviceRequestPromptManager(t) {
    let r = n(this, $c).get(t);
    return r === void 0 && (r = new TE.DeviceRequestPromptManager(t, n(this, ca)), n(this, $c).set(t, r)), r;
  }
}
xc = new WeakMap(), bn = new WeakMap(), ca = new WeakMap(), $r = new WeakMap(), Nc = new WeakMap(), jt = new WeakMap(), $i = new WeakMap(), $c = new WeakMap(), Et = new WeakMap(), Lc = new WeakSet(), mh = async function() {
  const t = this._frameTree.getMainFrame();
  if (!t)
    return;
  for (const s of t.childFrames())
    L(this, gn, po).call(this, s);
  const r = Qp.Deferred.create({
    timeout: DE,
    message: "Frame was not swapped"
  });
  t.once(jr.FrameEvent.FrameSwappedByActivation, () => {
    r.resolve();
  });
  try {
    await r.valueOrThrow();
  } catch {
    L(this, gn, po).call(this, t);
  }
}, Ql = new WeakSet(), Sm = function(t) {
  const r = this.frame(t.frameId);
  r && (r._onLifecycleEvent(t.loaderId, t.name), this.emit(Yr.FrameManagerEvent.LifecycleEvent, r), r.emit(jr.FrameEvent.LifecycleEvent, void 0));
}, Jl = new WeakSet(), Em = function(t) {
  const r = this.frame(t);
  r && r._onLoadingStarted();
}, Gl = new WeakSet(), Pm = function(t) {
  const r = this.frame(t);
  r && (r._onLoadingStopped(), this.emit(Yr.FrameManagerEvent.LifecycleEvent, r), r.emit(jr.FrameEvent.LifecycleEvent, void 0));
}, qc = new WeakSet(), vh = function(t, r) {
  if (r.frame.parentId && L(this, Hc, bh).call(this, t, r.frame.id, r.frame.parentId), n(this, $i).has(r.frame.id) ? n(this, $i).delete(r.frame.id) : L(this, Bc, gh).call(this, r.frame, "Navigation"), !!r.childFrames)
    for (const s of r.childFrames)
      L(this, qc, vh).call(this, t, s);
}, Hc = new WeakSet(), bh = function(t, r, s) {
  let m = this.frame(r);
  if (m) {
    t && m.isOOPFrame() && m.updateClient(t);
    return;
  }
  m = new Jp.CdpFrame(this, r, s, t), this._frameTree.addFrame(m), this.emit(Yr.FrameManagerEvent.FrameAttached, m);
}, Bc = new WeakSet(), gh = async function(t, r) {
  const s = t.id, m = !t.parentId;
  let _ = this._frameTree.getById(s);
  if (_)
    for (const k of _.childFrames())
      L(this, gn, po).call(this, k);
  m && (_ ? (this._frameTree.removeFrame(_), _._id = s) : _ = new Jp.CdpFrame(this, s, void 0, n(this, jt)), this._frameTree.addFrame(_)), _ = await this._frameTree.waitForFrame(s), _._navigated(t), this.emit(Yr.FrameManagerEvent.FrameNavigated, _), _.emit(jr.FrameEvent.FrameNavigated, r);
}, Yl = new WeakSet(), Om = async function(t, r) {
  const s = `${t.id()}:${r}`;
  n(this, Nc).has(s) || (await t.send("Page.addScriptToEvaluateOnNewDocument", {
    source: `//# sourceURL=${lo.PuppeteerURL.INTERNAL_URL}`,
    worldName: r
  }), await Promise.all(this.frames().filter((m) => m.client === t).map((m) => t.send("Page.createIsolatedWorld", {
    frameId: m._id,
    worldName: r,
    grantUniveralAccess: !0
  }).catch(lo.debugError))), n(this, Nc).add(s));
}, Xl = new WeakSet(), km = function(t, r) {
  const s = this.frame(t);
  s && (s._navigatedWithinDocument(r), this.emit(Yr.FrameManagerEvent.FrameNavigatedWithinDocument, s), s.emit(jr.FrameEvent.FrameNavigatedWithinDocument, void 0), this.emit(Yr.FrameManagerEvent.FrameNavigated, s), s.emit(jr.FrameEvent.FrameNavigated, "Navigation"));
}, Zl = new WeakSet(), Cm = function(t, r) {
  const s = this.frame(t);
  if (s)
    switch (r) {
      case "remove":
        L(this, gn, po).call(this, s);
        break;
      case "swap":
        this.emit(Yr.FrameManagerEvent.FrameSwapped, s), s.emit(jr.FrameEvent.FrameSwapped, void 0);
        break;
    }
}, ed = new WeakSet(), jm = function(t, r) {
  const s = t.auxData, m = s && s.frameId, _ = typeof m == "string" ? this.frame(m) : void 0;
  let k;
  if (_) {
    if (_.client !== r)
      return;
    t.auxData && t.auxData.isDefault ? k = _.worlds[wf.MAIN_WORLD] : t.name === lo.UTILITY_WORLD_NAME && !_.worlds[wf.PUPPETEER_WORLD].hasContext() && (k = _.worlds[wf.PUPPETEER_WORLD]);
  }
  if (!k)
    return;
  const I = new IE.ExecutionContext((_ == null ? void 0 : _.client) || n(this, jt), t, k);
  k && k.setContext(I);
  const x = `${r.id()}:${t.id}`;
  n(this, $r).set(x, I);
}, td = new WeakSet(), Tm = function(t, r) {
  const s = `${r.id()}:${t}`, m = n(this, $r).get(s);
  m && (n(this, $r).delete(s), m._world && m._world.clearContext());
}, Wc = new WeakSet(), wh = function(t) {
  for (const [r, s] of n(this, $r).entries())
    s._client === t && (s._world && s._world.clearContext(), n(this, $r).delete(r));
}, gn = new WeakSet(), po = function(t) {
  for (const r of t.childFrames())
    L(this, gn, po).call(this, r);
  t[OE.disposeSymbol](), this._frameTree.removeFrame(t), this.emit(Yr.FrameManagerEvent.FrameDetached, t), t.emit(jr.FrameEvent.FrameDetached, t);
};
Nd.FrameManager = RE;
var An = {}, wr = {};
Object.defineProperty(wr, "__esModule", { value: !0 });
wr.Touchscreen = wr.Mouse = wr.MouseButton = wr.Keyboard = void 0;
class AE {
  /**
   * @internal
   */
  constructor() {
  }
}
wr.Keyboard = AE;
wr.MouseButton = Object.freeze({
  Left: "left",
  Right: "right",
  Middle: "middle",
  Back: "back",
  Forward: "forward"
});
class xE {
  /**
   * @internal
   */
  constructor() {
  }
}
wr.Mouse = xE;
class NE {
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
  async tap(i, t) {
    await this.touchStart(i, t), await this.touchEnd();
  }
}
wr.Touchscreen = NE;
var Jd = {};
Object.defineProperty(Jd, "__esModule", { value: !0 });
Jd._keyDefinitions = void 0;
Jd._keyDefinitions = {
  0: { keyCode: 48, key: "0", code: "Digit0" },
  1: { keyCode: 49, key: "1", code: "Digit1" },
  2: { keyCode: 50, key: "2", code: "Digit2" },
  3: { keyCode: 51, key: "3", code: "Digit3" },
  4: { keyCode: 52, key: "4", code: "Digit4" },
  5: { keyCode: 53, key: "5", code: "Digit5" },
  6: { keyCode: 54, key: "6", code: "Digit6" },
  7: { keyCode: 55, key: "7", code: "Digit7" },
  8: { keyCode: 56, key: "8", code: "Digit8" },
  9: { keyCode: 57, key: "9", code: "Digit9" },
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
Object.defineProperty(An, "__esModule", { value: !0 });
An.CdpTouchscreen = An.CdpMouse = An.CdpKeyboard = void 0;
const pt = wr, Gp = Jd, $E = et;
var wn, ua, Uc, _h, Vc, Sh;
class LE extends pt.Keyboard {
  constructor(t) {
    super();
    g(this, Uc);
    g(this, Vc);
    g(this, wn, void 0);
    g(this, ua, /* @__PURE__ */ new Set());
    Oe(this, "_modifiers", 0);
    O(this, wn, t);
  }
  updateClient(t) {
    O(this, wn, t);
  }
  async down(t, r = {
    text: void 0,
    commands: []
  }) {
    const s = L(this, Vc, Sh).call(this, t), m = n(this, ua).has(s.code);
    n(this, ua).add(s.code), this._modifiers |= L(this, Uc, _h).call(this, s.key);
    const _ = r.text === void 0 ? s.text : r.text;
    await n(this, wn).send("Input.dispatchKeyEvent", {
      type: _ ? "keyDown" : "rawKeyDown",
      modifiers: this._modifiers,
      windowsVirtualKeyCode: s.keyCode,
      code: s.code,
      key: s.key,
      text: _,
      unmodifiedText: _,
      autoRepeat: m,
      location: s.location,
      isKeypad: s.location === 3,
      commands: r.commands
    });
  }
  async up(t) {
    const r = L(this, Vc, Sh).call(this, t);
    this._modifiers &= ~L(this, Uc, _h).call(this, r.key), n(this, ua).delete(r.code), await n(this, wn).send("Input.dispatchKeyEvent", {
      type: "keyUp",
      modifiers: this._modifiers,
      key: r.key,
      windowsVirtualKeyCode: r.keyCode,
      code: r.code,
      location: r.location
    });
  }
  async sendCharacter(t) {
    await n(this, wn).send("Input.insertText", { text: t });
  }
  charIsKey(t) {
    return !!Gp._keyDefinitions[t];
  }
  async type(t, r = {}) {
    const s = r.delay || void 0;
    for (const m of t)
      this.charIsKey(m) ? await this.press(m, { delay: s }) : (s && await new Promise((_) => setTimeout(_, s)), await this.sendCharacter(m));
  }
  async press(t, r = {}) {
    const { delay: s = null } = r;
    await this.down(t, r), s && await new Promise((m) => setTimeout(m, r.delay)), await this.up(t);
  }
}
wn = new WeakMap(), ua = new WeakMap(), Uc = new WeakSet(), _h = function(t) {
  return t === "Alt" ? 1 : t === "Control" ? 2 : t === "Meta" ? 4 : t === "Shift" ? 8 : 0;
}, Vc = new WeakSet(), Sh = function(t) {
  const r = this._modifiers & 8, s = {
    key: "",
    keyCode: 0,
    code: "",
    text: "",
    location: 0
  }, m = Gp._keyDefinitions[t];
  return (0, $E.assert)(m, `Unknown key: "${t}"`), m.key && (s.key = m.key), r && m.shiftKey && (s.key = m.shiftKey), m.keyCode && (s.keyCode = m.keyCode), r && m.shiftKeyCode && (s.keyCode = m.shiftKeyCode), m.code && (s.code = m.code), m.location && (s.location = m.location), s.key.length === 1 && (s.text = s.key), m.text && (s.text = m.text), r && m.shiftText && (s.text = m.shiftText), this._modifiers & -9 && (s.text = ""), s;
};
An.CdpKeyboard = LE;
const Yp = (l) => {
  switch (l) {
    case pt.MouseButton.Left:
      return 1;
    case pt.MouseButton.Right:
      return 2;
    case pt.MouseButton.Middle:
      return 4;
    case pt.MouseButton.Back:
      return 8;
    case pt.MouseButton.Forward:
      return 16;
  }
}, qE = (l) => l & 1 ? pt.MouseButton.Left : l & 2 ? pt.MouseButton.Right : l & 4 ? pt.MouseButton.Middle : l & 8 ? pt.MouseButton.Back : l & 16 ? pt.MouseButton.Forward : "none";
var Kt, nr, la, Tt, Lt, Li, rd, Im, da, cl;
class HE extends pt.Mouse {
  constructor(t, r) {
    super();
    g(this, Tt);
    g(this, rd);
    /**
     * This is a shortcut for a typical update, commit/rollback lifecycle based on
     * the error of the action.
     */
    g(this, da);
    g(this, Kt, void 0);
    g(this, nr, void 0);
    g(this, la, {
      position: { x: 0, y: 0 },
      buttons: 0
    });
    // Transactions can run in parallel, so we store each of thme in this array.
    g(this, Li, []);
    O(this, Kt, t), O(this, nr, r);
  }
  updateClient(t) {
    O(this, Kt, t);
  }
  async reset() {
    const t = [];
    for (const [r, s] of [
      [1, pt.MouseButton.Left],
      [4, pt.MouseButton.Middle],
      [2, pt.MouseButton.Right],
      [16, pt.MouseButton.Forward],
      [8, pt.MouseButton.Back]
    ])
      n(this, Tt, Lt).buttons & r && t.push(this.up({ button: s }));
    (n(this, Tt, Lt).position.x !== 0 || n(this, Tt, Lt).position.y !== 0) && t.push(this.move(0, 0)), await Promise.all(t);
  }
  async move(t, r, s = {}) {
    const { steps: m = 1 } = s, _ = n(this, Tt, Lt).position, k = { x: t, y: r };
    for (let I = 1; I <= m; I++)
      await L(this, da, cl).call(this, (x) => {
        x({
          position: {
            x: _.x + (k.x - _.x) * (I / m),
            y: _.y + (k.y - _.y) * (I / m)
          }
        });
        const { buttons: F, position: R } = n(this, Tt, Lt);
        return n(this, Kt).send("Input.dispatchMouseEvent", {
          type: "mouseMoved",
          modifiers: n(this, nr)._modifiers,
          buttons: F,
          button: qE(F),
          ...R
        });
      });
  }
  async down(t = {}) {
    const { button: r = pt.MouseButton.Left, clickCount: s = 1 } = t, m = Yp(r);
    if (!m)
      throw new Error(`Unsupported mouse button: ${r}`);
    if (n(this, Tt, Lt).buttons & m)
      throw new Error(`'${r}' is already pressed.`);
    await L(this, da, cl).call(this, (_) => {
      _({
        buttons: n(this, Tt, Lt).buttons | m
      });
      const { buttons: k, position: I } = n(this, Tt, Lt);
      return n(this, Kt).send("Input.dispatchMouseEvent", {
        type: "mousePressed",
        modifiers: n(this, nr)._modifiers,
        clickCount: s,
        buttons: k,
        button: r,
        ...I
      });
    });
  }
  async up(t = {}) {
    const { button: r = pt.MouseButton.Left, clickCount: s = 1 } = t, m = Yp(r);
    if (!m)
      throw new Error(`Unsupported mouse button: ${r}`);
    if (!(n(this, Tt, Lt).buttons & m))
      throw new Error(`'${r}' is not pressed.`);
    await L(this, da, cl).call(this, (_) => {
      _({
        buttons: n(this, Tt, Lt).buttons & ~m
      });
      const { buttons: k, position: I } = n(this, Tt, Lt);
      return n(this, Kt).send("Input.dispatchMouseEvent", {
        type: "mouseReleased",
        modifiers: n(this, nr)._modifiers,
        clickCount: s,
        buttons: k,
        button: r,
        ...I
      });
    });
  }
  async click(t, r, s = {}) {
    const { delay: m, count: _ = 1, clickCount: k = _ } = s;
    if (_ < 1)
      throw new Error("Click must occur a positive number of times.");
    const I = [this.move(t, r)];
    if (k === _)
      for (let x = 1; x < _; ++x)
        I.push(this.down({ ...s, clickCount: x }), this.up({ ...s, clickCount: x }));
    I.push(this.down({ ...s, clickCount: k })), typeof m == "number" && (await Promise.all(I), I.length = 0, await new Promise((x) => {
      setTimeout(x, m);
    })), I.push(this.up({ ...s, clickCount: k })), await Promise.all(I);
  }
  async wheel(t = {}) {
    const { deltaX: r = 0, deltaY: s = 0 } = t, { position: m, buttons: _ } = n(this, Tt, Lt);
    await n(this, Kt).send("Input.dispatchMouseEvent", {
      type: "mouseWheel",
      pointerType: "mouse",
      modifiers: n(this, nr)._modifiers,
      deltaY: s,
      deltaX: r,
      buttons: _,
      ...m
    });
  }
  async drag(t, r) {
    const s = new Promise((m) => {
      n(this, Kt).once("Input.dragIntercepted", (_) => m(_.data));
    });
    return await this.move(t.x, t.y), await this.down(), await this.move(r.x, r.y), await s;
  }
  async dragEnter(t, r) {
    await n(this, Kt).send("Input.dispatchDragEvent", {
      type: "dragEnter",
      x: t.x,
      y: t.y,
      modifiers: n(this, nr)._modifiers,
      data: r
    });
  }
  async dragOver(t, r) {
    await n(this, Kt).send("Input.dispatchDragEvent", {
      type: "dragOver",
      x: t.x,
      y: t.y,
      modifiers: n(this, nr)._modifiers,
      data: r
    });
  }
  async drop(t, r) {
    await n(this, Kt).send("Input.dispatchDragEvent", {
      type: "drop",
      x: t.x,
      y: t.y,
      modifiers: n(this, nr)._modifiers,
      data: r
    });
  }
  async dragAndDrop(t, r, s = {}) {
    const { delay: m = null } = s, _ = await this.drag(t, r);
    await this.dragEnter(r, _), await this.dragOver(r, _), m && await new Promise((k) => setTimeout(k, m)), await this.drop(r, _), await this.up();
  }
}
Kt = new WeakMap(), nr = new WeakMap(), la = new WeakMap(), Tt = new WeakSet(), Lt = function() {
  return Object.assign({ ...n(this, la) }, ...n(this, Li));
}, Li = new WeakMap(), rd = new WeakSet(), Im = function() {
  const t = {};
  n(this, Li).push(t);
  const r = () => {
    n(this, Li).splice(n(this, Li).indexOf(t), 1);
  };
  return {
    update: (s) => {
      Object.assign(t, s);
    },
    commit: () => {
      O(this, la, { ...n(this, la), ...t }), r();
    },
    rollback: r
  };
}, da = new WeakSet(), cl = async function(t) {
  const { update: r, commit: s, rollback: m } = L(this, rd, Im).call(this);
  try {
    await t(r), s();
  } catch (_) {
    throw m(), _;
  }
};
An.CdpMouse = HE;
var _n, qi;
class BE extends pt.Touchscreen {
  constructor(t, r) {
    super();
    g(this, _n, void 0);
    g(this, qi, void 0);
    O(this, _n, t), O(this, qi, r);
  }
  updateClient(t) {
    O(this, _n, t);
  }
  async touchStart(t, r) {
    await n(this, _n).send("Input.dispatchTouchEvent", {
      type: "touchStart",
      touchPoints: [
        {
          x: Math.round(t),
          y: Math.round(r),
          radiusX: 0.5,
          radiusY: 0.5
        }
      ],
      modifiers: n(this, qi)._modifiers
    });
  }
  async touchMove(t, r) {
    await n(this, _n).send("Input.dispatchTouchEvent", {
      type: "touchMove",
      touchPoints: [
        {
          x: Math.round(t),
          y: Math.round(r),
          radiusX: 0.5,
          radiusY: 0.5
        }
      ],
      modifiers: n(this, qi)._modifiers
    });
  }
  async touchEnd() {
    await n(this, _n).send("Input.dispatchTouchEvent", {
      type: "touchEnd",
      touchPoints: [],
      modifiers: n(this, qi)._modifiers
    });
  }
}
_n = new WeakMap(), qi = new WeakMap();
An.CdpTouchscreen = BE;
var Gd = {};
Object.defineProperty(Gd, "__esModule", { value: !0 });
Gd.Tracing = void 0;
const Xp = Ze, Zp = et, WE = wt, UE = dt;
var Lr, fa, Kc;
class VE {
  /**
   * @internal
   */
  constructor(i) {
    g(this, Lr, void 0);
    g(this, fa, !1);
    g(this, Kc, void 0);
    O(this, Lr, i);
  }
  /**
   * @internal
   */
  updateClient(i) {
    O(this, Lr, i);
  }
  /**
   * Starts a trace for the current page.
   * @remarks
   * Only one trace can be active at a time per browser.
   *
   * @param options - Optional `TracingOptions`.
   */
  async start(i = {}) {
    (0, Zp.assert)(!n(this, fa), "Cannot start recording trace while already recording trace.");
    const t = [
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
    ], { path: r, screenshots: s = !1, categories: m = t } = i;
    s && m.push("disabled-by-default-devtools.screenshot");
    const _ = m.filter((I) => I.startsWith("-")).map((I) => I.slice(1)), k = m.filter((I) => !I.startsWith("-"));
    O(this, Kc, r), O(this, fa, !0), await n(this, Lr).send("Tracing.start", {
      transferMode: "ReturnAsStream",
      traceConfig: {
        excludedCategories: _,
        includedCategories: k
      }
    });
  }
  /**
   * Stops a trace started with the `start` method.
   * @returns Promise which resolves to buffer with trace data.
   */
  async stop() {
    const i = WE.Deferred.create();
    return n(this, Lr).once("Tracing.tracingComplete", async (t) => {
      try {
        (0, Zp.assert)(t.stream, 'Missing "stream"');
        const r = await (0, Xp.getReadableFromProtocolStream)(n(this, Lr), t.stream), s = await (0, Xp.getReadableAsBuffer)(r, n(this, Kc));
        i.resolve(s ?? void 0);
      } catch (r) {
        (0, UE.isErrorLike)(r) ? i.reject(r) : i.reject(new Error(`Unknown error: ${r}`));
      }
    }), await n(this, Lr).send("Tracing.end"), O(this, fa, !1), await i.valueOrThrow();
  }
}
Lr = new WeakMap(), fa = new WeakMap(), Kc = new WeakMap();
Gd.Tracing = VE;
var Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
Ru.WebWorker = void 0;
const KE = mt, ey = Pu, el = Ze, zE = Ur, QE = Du, JE = Vr;
var Sn, qr, zc;
class GE extends KE.EventEmitter {
  /**
   * @internal
   */
  constructor(t, r, s, m) {
    super();
    /**
     * @internal
     */
    Oe(this, "timeoutSettings", new ey.TimeoutSettings());
    g(this, Sn, void 0);
    g(this, qr, void 0);
    g(this, zc, void 0);
    O(this, qr, t), O(this, zc, r), O(this, Sn, new QE.IsolatedWorld(this, new ey.TimeoutSettings())), n(this, qr).once("Runtime.executionContextCreated", async (_) => {
      n(this, Sn).setContext(new zE.ExecutionContext(t, _.context, n(this, Sn)));
    }), n(this, qr).on("Runtime.consoleAPICalled", async (_) => {
      try {
        return s(_.type, _.args.map((k) => new JE.CdpJSHandle(n(this, Sn), k)), _.stackTrace);
      } catch (k) {
        (0, el.debugError)(k);
      }
    }), n(this, qr).on("Runtime.exceptionThrown", m), n(this, qr).send("Runtime.enable").catch(el.debugError);
  }
  /**
   * @internal
   */
  mainRealm() {
    return n(this, Sn);
  }
  /**
   * The URL of this web worker.
   */
  url() {
    return n(this, zc);
  }
  /**
   * The CDP session client the WebWorker belongs to.
   */
  get client() {
    return n(this, qr);
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
  async evaluate(t, ...r) {
    return t = (0, el.withSourcePuppeteerURLIfNone)(this.evaluate.name, t), await this.mainRealm().evaluate(t, ...r);
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
  async evaluateHandle(t, ...r) {
    return t = (0, el.withSourcePuppeteerURLIfNone)(this.evaluateHandle.name, t), await this.mainRealm().evaluateHandle(t, ...r);
  }
}
Sn = new WeakMap(), qr = new WeakMap(), zc = new WeakMap();
Ru.WebWorker = GE;
var ty = re && re.__addDisposableResource || function(l, i, t) {
  if (i != null) {
    if (typeof i != "object" && typeof i != "function")
      throw new TypeError("Object expected.");
    var r;
    if (t) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      r = i[Symbol.asyncDispose];
    }
    if (r === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      r = i[Symbol.dispose];
    }
    if (typeof r != "function")
      throw new TypeError("Object not disposable.");
    l.stack.push({ value: i, dispose: r, async: t });
  } else
    t && l.stack.push({ async: !0 });
  return i;
}, ry = re && re.__disposeResources || /* @__PURE__ */ function(l) {
  return function(i) {
    function t(s) {
      i.error = i.hasError ? new l(s, i.error, "An error was suppressed during disposal.") : s, i.hasError = !0;
    }
    function r() {
      for (; i.stack.length; ) {
        var s = i.stack.pop();
        try {
          var m = s.dispose && s.dispose.call(s.value);
          if (s.async)
            return Promise.resolve(m).then(r, function(_) {
              return t(_), r();
            });
        } catch (_) {
          t(_);
        }
      }
      if (i.hasError)
        throw i.error;
    }
    return r();
  };
}(typeof SuppressedError == "function" ? SuppressedError : function(l, i, t) {
  var r = new Error(t);
  return r.name = "SuppressedError", r.error = l, r.suppressed = i, r;
});
Object.defineProperty(Ed, "__esModule", { value: !0 });
Ed.CdpPage = void 0;
const fo = Xi, Ga = Mt, YE = Sy, ny = Od, XE = st, ZE = kd, Un = eo, ut = Ze, Dt = et, iy = wt, eP = vt, oy = dt, tP = Cd, ay = ku, _f = Zi, sy = Gi, rP = Dn, nP = jd, iP = Fa, cy = Ur, oP = Fu, aP = Nd, Sf = Na, Ef = An, sP = xn, cP = Vr, uP = Gd, lP = Ru;
var Qc, ha, Be, vr, En, Hi, Pn, pa, ya, ma, nt, ht, va, Bi, ba, ga, wa, Wi, Hr, Ui, Jc, Gc, nd, id, od, ad, Mm, sd, Fm, Yc, Ph, Xc, Zc, cd, Dm, ud, Rm, ld, Am, dd, xm, fd, Nm, eu, Oh, tu, kh, hd, $m, pd, Lm, ru, Ch, yd, qm, nu, jh;
const Nh = class Nh extends YE.Page {
  constructor(t, r, s) {
    super();
    g(this, ad);
    g(this, sd);
    /**
     * Sets up listeners for the primary target. The primary target can change
     * during a navigation to a prerended page.
     */
    g(this, Yc);
    g(this, cd);
    g(this, ud);
    g(this, ld);
    g(this, dd);
    g(this, fd);
    g(this, eu);
    g(this, tu);
    g(this, hd);
    g(this, pd);
    g(this, ru);
    g(this, yd);
    g(this, nu);
    g(this, Qc, !1);
    g(this, ha, void 0);
    g(this, Be, void 0);
    g(this, vr, void 0);
    g(this, En, void 0);
    g(this, Hi, void 0);
    g(this, Pn, void 0);
    g(this, pa, void 0);
    g(this, ya, void 0);
    g(this, ma, void 0);
    g(this, nt, void 0);
    g(this, ht, void 0);
    g(this, va, void 0);
    g(this, Bi, /* @__PURE__ */ new Map());
    g(this, ba, /* @__PURE__ */ new Map());
    g(this, ga, void 0);
    g(this, wa, void 0);
    g(this, Wi, /* @__PURE__ */ new Map());
    g(this, Hr, /* @__PURE__ */ new Set());
    g(this, Ui, iy.Deferred.create());
    g(this, Jc, !1);
    g(this, Gc, !1);
    g(this, nd, [
      [
        Sf.FrameManagerEvent.FrameAttached,
        (t) => {
          this.emit("frameattached", t);
        }
      ],
      [
        Sf.FrameManagerEvent.FrameDetached,
        (t) => {
          this.emit("framedetached", t);
        }
      ],
      [
        Sf.FrameManagerEvent.FrameNavigated,
        (t) => {
          this.emit("framenavigated", t);
        }
      ]
    ]);
    g(this, id, [
      [
        Un.NetworkManagerEvent.Request,
        (t) => {
          this.emit("request", t);
        }
      ],
      [
        Un.NetworkManagerEvent.RequestServedFromCache,
        (t) => {
          this.emit("requestservedfromcache", t);
        }
      ],
      [
        Un.NetworkManagerEvent.Response,
        (t) => {
          this.emit("response", t);
        }
      ],
      [
        Un.NetworkManagerEvent.RequestFailed,
        (t) => {
          this.emit("requestfailed", t);
        }
      ],
      [
        Un.NetworkManagerEvent.RequestFinished,
        (t) => {
          this.emit("requestfinished", t);
        }
      ]
    ]);
    g(this, od, [
      [
        Ga.CDPSessionEvent.Disconnected,
        () => {
          n(this, Ui).reject(new XE.TargetCloseError("Target closed"));
        }
      ],
      [
        "Page.domContentEventFired",
        () => this.emit("domcontentloaded", void 0)
      ],
      [
        "Page.loadEventFired",
        () => this.emit("load", void 0)
      ],
      ["Runtime.consoleAPICalled", L(this, hd, $m).bind(this)],
      ["Runtime.bindingCalled", L(this, pd, Lm).bind(this)],
      ["Page.javascriptDialogOpening", L(this, yd, qm).bind(this)],
      ["Runtime.exceptionThrown", L(this, tu, kh).bind(this)],
      ["Inspector.targetCrashed", L(this, ld, Am).bind(this)],
      ["Performance.metrics", L(this, fd, Nm).bind(this)],
      ["Log.entryAdded", L(this, dd, xm).bind(this)],
      ["Page.fileChooserOpened", L(this, ud, Rm).bind(this)]
    ]);
    g(this, Xc, (t) => {
      var m;
      const r = (m = t._session()) == null ? void 0 : m.id(), s = n(this, Wi).get(r);
      s && (n(this, Wi).delete(r), this.emit("workerdestroyed", s));
    });
    g(this, Zc, (t) => {
      if ((0, Dt.assert)(t instanceof _f.CdpCDPSession), n(this, nt).onAttachedToTarget(t._target()), t._target()._getTargetInfo().type === "worker") {
        const r = new lP.WebWorker(t, t._target().url(), L(this, ru, Ch).bind(this), L(this, tu, kh).bind(this));
        n(this, Wi).set(t.id(), r), this.emit("workercreated", r);
      }
      t.on(Ga.CDPSessionEvent.Ready, n(this, Zc));
    });
    O(this, Be, t), O(this, En, t.parentSession()), (0, Dt.assert)(n(this, En), "Tab target session is not defined."), O(this, Hi, n(this, En)._target()), (0, Dt.assert)(n(this, Hi), "Tab target is not defined."), O(this, vr, r), O(this, ha, r._targetManager()), O(this, Pn, new Ef.CdpKeyboard(t)), O(this, pa, new Ef.CdpMouse(t, n(this, Pn))), O(this, ya, new Ef.CdpTouchscreen(t, n(this, Pn))), O(this, ma, new tP.Accessibility(t)), O(this, nt, new aP.FrameManager(t, this, s, this._timeoutSettings)), O(this, ht, new iP.EmulationManager(t)), O(this, va, new uP.Tracing(t)), O(this, ga, new rP.Coverage(t)), O(this, wa, null);
    for (const [m, _] of n(this, nd))
      n(this, nt).on(m, _);
    for (const [m, _] of n(this, id))
      n(this, nt).networkManager.on(m, _);
    n(this, En).on(Ga.CDPSessionEvent.Swapped, L(this, ad, Mm).bind(this)), n(this, En).on(Ga.CDPSessionEvent.Ready, L(this, sd, Fm).bind(this)), n(this, ha).on("targetGone", n(this, Xc)), n(this, Hi)._isClosedDeferred.valueOrThrow().then(() => {
      n(this, ha).off("targetGone", n(this, Xc)), this.emit("close", void 0), O(this, Qc, !0);
    }).catch(ut.debugError), L(this, Yc, Ph).call(this);
  }
  static async _create(t, r, s, m) {
    var k;
    const _ = new Nh(t, r, s);
    if (await L(k = _, cd, Dm).call(k), m)
      try {
        await _.setViewport(m);
      } catch (I) {
        if ((0, oy.isErrorLike)(I) && (0, sy.isTargetClosedError)(I))
          (0, ut.debugError)(I);
        else
          throw I;
      }
    return _;
  }
  _client() {
    return n(this, Be);
  }
  isServiceWorkerBypassed() {
    return n(this, Jc);
  }
  isDragInterceptionEnabled() {
    return n(this, Gc);
  }
  isJavaScriptEnabled() {
    return n(this, ht).javascriptEnabled;
  }
  async waitForFileChooser(t = {}) {
    const r = n(this, Hr).size === 0, { timeout: s = this._timeoutSettings.timeout() } = t, m = iy.Deferred.create({
      message: `Waiting for \`FileChooser\` failed: ${s}ms exceeded`,
      timeout: s
    });
    n(this, Hr).add(m);
    let _;
    r && (_ = n(this, Be).send("Page.setInterceptFileChooserDialog", {
      enabled: !0
    }));
    try {
      const [k] = await Promise.all([
        m.valueOrThrow(),
        _
      ]);
      return k;
    } catch (k) {
      throw n(this, Hr).delete(m), k;
    }
  }
  async setGeolocation(t) {
    return await n(this, ht).setGeolocation(t);
  }
  target() {
    return n(this, vr);
  }
  browser() {
    return n(this, vr).browser();
  }
  browserContext() {
    return n(this, vr).browserContext();
  }
  mainFrame() {
    return n(this, nt).mainFrame();
  }
  get keyboard() {
    return n(this, Pn);
  }
  get touchscreen() {
    return n(this, ya);
  }
  get coverage() {
    return n(this, ga);
  }
  get tracing() {
    return n(this, va);
  }
  get accessibility() {
    return n(this, ma);
  }
  frames() {
    return n(this, nt).frames();
  }
  workers() {
    return Array.from(n(this, Wi).values());
  }
  async setRequestInterception(t) {
    return await n(this, nt).networkManager.setRequestInterception(t);
  }
  async setBypassServiceWorker(t) {
    return O(this, Jc, t), await n(this, Be).send("Network.setBypassServiceWorker", { bypass: t });
  }
  async setDragInterception(t) {
    return O(this, Gc, t), await n(this, Be).send("Input.setInterceptDrags", {
      enabled: t
    });
  }
  async setOfflineMode(t) {
    return await n(this, nt).networkManager.setOfflineMode(t);
  }
  async emulateNetworkConditions(t) {
    return await n(this, nt).networkManager.emulateNetworkConditions(t);
  }
  setDefaultNavigationTimeout(t) {
    this._timeoutSettings.setDefaultNavigationTimeout(t);
  }
  setDefaultTimeout(t) {
    this._timeoutSettings.setDefaultTimeout(t);
  }
  getDefaultTimeout() {
    return this._timeoutSettings.timeout();
  }
  async queryObjects(t) {
    (0, Dt.assert)(!t.disposed, "Prototype JSHandle is disposed!"), (0, Dt.assert)(t.id, "Prototype JSHandle must not be referencing primitive value");
    const r = await this.mainFrame().client.send("Runtime.queryObjects", {
      prototypeObjectId: t.id
    });
    return (0, cy.createCdpHandle)(this.mainFrame().mainRealm(), r.objects);
  }
  async cookies(...t) {
    const r = (await n(this, Be).send("Network.getCookies", {
      urls: t.length ? t : [this.url()]
    })).cookies, s = ["priority"], m = (_) => {
      for (const k of s)
        delete _[k];
      return _;
    };
    return r.map(m);
  }
  async deleteCookie(...t) {
    const r = this.url();
    for (const s of t) {
      const m = Object.assign({}, s);
      !s.url && r.startsWith("http") && (m.url = r), await n(this, Be).send("Network.deleteCookies", m);
    }
  }
  async setCookie(...t) {
    const r = this.url(), s = r.startsWith("http"), m = t.map((_) => {
      const k = Object.assign({}, _);
      return !k.url && s && (k.url = r), (0, Dt.assert)(k.url !== "about:blank", `Blank page can not have cookie "${k.name}"`), (0, Dt.assert)(!String.prototype.startsWith.call(k.url || "", "data:"), `Data URL page can not have cookie "${k.name}"`), k;
    });
    await this.deleteCookie(...m), m.length && await n(this, Be).send("Network.setCookies", {
      cookies: m
    });
  }
  async exposeFunction(t, r) {
    if (n(this, Bi).has(t))
      throw new Error(`Failed to add page binding with name ${t}: window['${t}'] already exists!`);
    let s;
    switch (typeof r) {
      case "function":
        s = new ay.Binding(t, r);
        break;
      default:
        s = new ay.Binding(t, r.default);
        break;
    }
    n(this, Bi).set(t, s);
    const m = (0, ut.pageBindingInitString)("exposedFun", t);
    await n(this, Be).send("Runtime.addBinding", { name: t });
    const { identifier: _ } = await n(this, Be).send("Page.addScriptToEvaluateOnNewDocument", {
      source: m
    });
    n(this, ba).set(t, _), await Promise.all(this.frames().map((k) => k.evaluate(m).catch(ut.debugError)));
  }
  async removeExposedFunction(t) {
    const r = n(this, ba).get(t);
    if (!r)
      throw new Error(`Failed to remove page binding with name ${t}: window['${t}'] does not exists!`);
    await n(this, Be).send("Runtime.removeBinding", { name: t }), await this.removeScriptToEvaluateOnNewDocument(r), await Promise.all(this.frames().map((s) => s.evaluate((m) => {
      globalThis[m] = void 0;
    }, t).catch(ut.debugError))), n(this, ba).delete(t), n(this, Bi).delete(t);
  }
  async authenticate(t) {
    return await n(this, nt).networkManager.authenticate(t);
  }
  async setExtraHTTPHeaders(t) {
    return await n(this, nt).networkManager.setExtraHTTPHeaders(t);
  }
  async setUserAgent(t, r) {
    return await n(this, nt).networkManager.setUserAgent(t, r);
  }
  async metrics() {
    const t = await n(this, Be).send("Performance.getMetrics");
    return L(this, eu, Oh).call(this, t.metrics);
  }
  async reload(t) {
    const [r] = await Promise.all([
      this.waitForNavigation(t),
      n(this, Be).send("Page.reload")
    ]);
    return r;
  }
  async createCDPSession() {
    return await this.target().createCDPSession();
  }
  async waitForRequest(t, r = {}) {
    const { timeout: s = this._timeoutSettings.timeout() } = r;
    return await (0, ut.waitForHTTP)(n(this, nt).networkManager, Un.NetworkManagerEvent.Request, t, s, n(this, Ui));
  }
  async waitForResponse(t, r = {}) {
    const { timeout: s = this._timeoutSettings.timeout() } = r;
    return await (0, ut.waitForHTTP)(n(this, nt).networkManager, Un.NetworkManagerEvent.Response, t, s, n(this, Ui));
  }
  async waitForNetworkIdle(t = {}) {
    const { idleTime: r = ut.NETWORK_IDLE_TIME, timeout: s = this._timeoutSettings.timeout() } = t;
    await (0, fo.firstValueFrom)(this._waitForNetworkIdle(n(this, nt).networkManager, r).pipe((0, fo.raceWith)((0, ut.timeout)(s), (0, fo.from)(n(this, Ui).valueOrThrow()))));
  }
  async goBack(t = {}) {
    return await L(this, nu, jh).call(this, -1, t);
  }
  async goForward(t = {}) {
    return await L(this, nu, jh).call(this, 1, t);
  }
  async bringToFront() {
    await n(this, Be).send("Page.bringToFront");
  }
  async setJavaScriptEnabled(t) {
    return await n(this, ht).setJavaScriptEnabled(t);
  }
  async setBypassCSP(t) {
    await n(this, Be).send("Page.setBypassCSP", { enabled: t });
  }
  async emulateMediaType(t) {
    return await n(this, ht).emulateMediaType(t);
  }
  async emulateCPUThrottling(t) {
    return await n(this, ht).emulateCPUThrottling(t);
  }
  async emulateMediaFeatures(t) {
    return await n(this, ht).emulateMediaFeatures(t);
  }
  async emulateTimezone(t) {
    return await n(this, ht).emulateTimezone(t);
  }
  async emulateIdleState(t) {
    return await n(this, ht).emulateIdleState(t);
  }
  async emulateVisionDeficiency(t) {
    return await n(this, ht).emulateVisionDeficiency(t);
  }
  async setViewport(t) {
    const r = await n(this, ht).emulateViewport(t);
    O(this, wa, t), r && await this.reload();
  }
  viewport() {
    return n(this, wa);
  }
  async evaluateOnNewDocument(t, ...r) {
    const s = (0, ut.evaluationString)(t, ...r), { identifier: m } = await n(this, Be).send("Page.addScriptToEvaluateOnNewDocument", {
      source: s
    });
    return { identifier: m };
  }
  async removeScriptToEvaluateOnNewDocument(t) {
    await n(this, Be).send("Page.removeScriptToEvaluateOnNewDocument", {
      identifier: t
    });
  }
  async setCacheEnabled(t = !0) {
    await n(this, nt).networkManager.setCacheEnabled(t);
  }
  async _screenshot(t) {
    const r = { stack: [], error: void 0, hasError: !1 };
    try {
      const { fromSurface: s, omitBackground: m, optimizeForSpeed: _, quality: k, clip: I, type: x, captureBeyondViewport: F } = t, R = this.target()._targetManager() instanceof oP.FirefoxTargetManager, N = ty(r, new eP.AsyncDisposableStack(), !0);
      !R && m && (x === "png" || x === "webp") && (await n(this, ht).setTransparentBackgroundColor(), N.defer(async () => {
        await n(this, ht).resetDefaultBackgroundColor().catch(ut.debugError);
      }));
      let Q = I;
      if (Q && !F) {
        const B = await this.mainFrame().isolatedRealm().evaluate(() => {
          const { height: D, pageLeft: $, pageTop: A, width: z } = window.visualViewport;
          return { x: $, y: A, height: D, width: z };
        });
        Q = fP(Q, B);
      }
      const { data: q } = await n(this, Be).send("Page.captureScreenshot", {
        format: x,
        ..._ ? { optimizeForSpeed: _ } : {},
        ...k !== void 0 ? { quality: Math.round(k) } : {},
        clip: Q && {
          ...Q,
          scale: Q.scale ?? 1
        },
        ...s ? {} : { fromSurface: s },
        captureBeyondViewport: F
      });
      return q;
    } catch (s) {
      r.error = s, r.hasError = !0;
    } finally {
      const s = ry(r);
      s && await s;
    }
  }
  async createPDFStream(t = {}) {
    const { landscape: r, displayHeaderFooter: s, headerTemplate: m, footerTemplate: _, printBackground: k, scale: I, width: x, height: F, margin: R, pageRanges: N, preferCSSPageSize: Q, omitBackground: q, timeout: B, tagged: D } = this._getPDFOptions(t);
    q && await n(this, ht).setTransparentBackgroundColor();
    const $ = n(this, Be).send("Page.printToPDF", {
      transferMode: "ReturnAsStream",
      landscape: r,
      displayHeaderFooter: s,
      headerTemplate: m,
      footerTemplate: _,
      printBackground: k,
      scale: I,
      paperWidth: x,
      paperHeight: F,
      marginTop: R.top,
      marginBottom: R.bottom,
      marginLeft: R.left,
      marginRight: R.right,
      pageRanges: N,
      preferCSSPageSize: Q,
      generateTaggedPDF: D
    }), A = await (0, fo.firstValueFrom)((0, fo.from)($).pipe((0, fo.raceWith)((0, ut.timeout)(B))));
    return q && await n(this, ht).resetDefaultBackgroundColor(), (0, Dt.assert)(A.stream, "`stream` is missing from `Page.printToPDF"), await (0, ut.getReadableFromProtocolStream)(n(this, Be), A.stream);
  }
  async pdf(t = {}) {
    const { path: r = void 0 } = t, s = await this.createPDFStream(t), m = await (0, ut.getReadableAsBuffer)(s, r);
    return (0, Dt.assert)(m, "Could not create buffer"), m;
  }
  async close(t = { runBeforeUnload: void 0 }) {
    const r = n(this, Be).connection();
    (0, Dt.assert)(r, "Protocol error: Connection closed. Most likely the page has been closed."), !!t.runBeforeUnload ? await n(this, Be).send("Page.close") : (await r.send("Target.closeTarget", {
      targetId: n(this, vr)._targetId
    }), await n(this, Hi)._isClosedDeferred.valueOrThrow());
  }
  isClosed() {
    return n(this, Qc);
  }
  get mouse() {
    return n(this, pa);
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
  async waitForDevicePrompt(t = {}) {
    return await this.mainFrame().waitForDevicePrompt(t);
  }
};
Qc = new WeakMap(), ha = new WeakMap(), Be = new WeakMap(), vr = new WeakMap(), En = new WeakMap(), Hi = new WeakMap(), Pn = new WeakMap(), pa = new WeakMap(), ya = new WeakMap(), ma = new WeakMap(), nt = new WeakMap(), ht = new WeakMap(), va = new WeakMap(), Bi = new WeakMap(), ba = new WeakMap(), ga = new WeakMap(), wa = new WeakMap(), Wi = new WeakMap(), Hr = new WeakMap(), Ui = new WeakMap(), Jc = new WeakMap(), Gc = new WeakMap(), nd = new WeakMap(), id = new WeakMap(), od = new WeakMap(), ad = new WeakSet(), Mm = async function(t) {
  O(this, Be, t), (0, Dt.assert)(n(this, Be) instanceof _f.CdpCDPSession, "CDPSession is not instance of CDPSessionImpl"), O(this, vr, n(this, Be)._target()), (0, Dt.assert)(n(this, vr), "Missing target on swap"), n(this, Pn).updateClient(t), n(this, pa).updateClient(t), n(this, ya).updateClient(t), n(this, ma).updateClient(t), n(this, ht).updateClient(t), n(this, va).updateClient(t), n(this, ga).updateClient(t), await n(this, nt).swapFrameTree(t), L(this, Yc, Ph).call(this);
}, sd = new WeakSet(), Fm = async function(t) {
  (0, Dt.assert)(t instanceof _f.CdpCDPSession), t._target()._subtype() === "prerender" && (n(this, nt).registerSpeculativeSession(t).catch(ut.debugError), n(this, ht).registerSpeculativeSession(t).catch(ut.debugError));
}, Yc = new WeakSet(), Ph = function() {
  n(this, Be).on(Ga.CDPSessionEvent.Ready, n(this, Zc));
  for (const [t, r] of n(this, od))
    n(this, Be).on(t, r);
}, Xc = new WeakMap(), Zc = new WeakMap(), cd = new WeakSet(), Dm = async function() {
  try {
    await Promise.all([
      n(this, nt).initialize(n(this, Be)),
      n(this, Be).send("Performance.enable"),
      n(this, Be).send("Log.enable")
    ]);
  } catch (t) {
    if ((0, oy.isErrorLike)(t) && (0, sy.isTargetClosedError)(t))
      (0, ut.debugError)(t);
    else
      throw t;
  }
}, ud = new WeakSet(), Rm = async function(t) {
  const r = { stack: [], error: void 0, hasError: !1 };
  try {
    if (!n(this, Hr).size)
      return;
    const s = n(this, nt).frame(t.frameId);
    (0, Dt.assert)(s, "This should never happen.");
    const m = ty(r, await s.worlds[sP.MAIN_WORLD].adoptBackendNode(t.backendNodeId), !1), _ = new ZE.FileChooser(m.move(), t);
    for (const k of n(this, Hr))
      k.resolve(_);
    n(this, Hr).clear();
  } catch (s) {
    r.error = s, r.hasError = !0;
  } finally {
    ry(r);
  }
}, ld = new WeakSet(), Am = function() {
  this.emit("error", new Error("Page crashed!"));
}, dd = new WeakSet(), xm = function(t) {
  const { level: r, text: s, args: m, source: _, url: k, lineNumber: I } = t.entry;
  m && m.map((x) => (0, cP.releaseObject)(n(this, Be), x)), _ !== "worker" && this.emit("console", new ny.ConsoleMessage(r, s, [], [{ url: k, lineNumber: I }]));
}, fd = new WeakSet(), Nm = function(t) {
  this.emit("metrics", {
    title: t.title,
    metrics: L(this, eu, Oh).call(this, t.metrics)
  });
}, eu = new WeakSet(), Oh = function(t) {
  const r = {};
  for (const s of t || [])
    dP.has(s.name) && (r[s.name] = s.value);
  return r;
}, tu = new WeakSet(), kh = function(t) {
  this.emit("pageerror", (0, ut.createClientError)(t.exceptionDetails));
}, hd = new WeakSet(), $m = async function(t) {
  if (t.executionContextId === 0)
    return;
  const r = n(this, nt).getExecutionContextById(t.executionContextId, n(this, Be));
  if (!r) {
    (0, ut.debugError)(new Error(`ExecutionContext not found for a console message: ${JSON.stringify(t)}`));
    return;
  }
  const s = t.args.map((m) => (0, cy.createCdpHandle)(r._world, m));
  L(this, ru, Ch).call(this, t.type, s, t.stackTrace);
}, pd = new WeakSet(), Lm = async function(t) {
  let r;
  try {
    r = JSON.parse(t.payload);
  } catch {
    return;
  }
  const { type: s, name: m, seq: _, args: k, isTrivial: I } = r;
  if (s !== "exposedFun")
    return;
  const x = n(this, nt).executionContextById(t.executionContextId, n(this, Be));
  if (!x)
    return;
  const F = n(this, Bi).get(m);
  await (F == null ? void 0 : F.run(x, _, k, I));
}, ru = new WeakSet(), Ch = function(t, r, s) {
  if (!this.listenerCount(
    "console"
    /* PageEvent.Console */
  )) {
    r.forEach((I) => I.dispose());
    return;
  }
  const m = [];
  for (const I of r) {
    const x = I.remoteObject();
    x.objectId ? m.push(I.toString()) : m.push((0, ut.valueFromRemoteObject)(x));
  }
  const _ = [];
  if (s)
    for (const I of s.callFrames)
      _.push({
        url: I.url,
        lineNumber: I.lineNumber,
        columnNumber: I.columnNumber
      });
  const k = new ny.ConsoleMessage(t, m.join(" "), r, _);
  this.emit("console", k);
}, yd = new WeakSet(), qm = function(t) {
  const r = (0, ut.validateDialogType)(t.type), s = new nP.CdpDialog(n(this, Be), r, t.message, t.defaultPrompt);
  this.emit("dialog", s);
}, nu = new WeakSet(), jh = async function(t, r) {
  const s = await n(this, Be).send("Page.getNavigationHistory"), m = s.entries[s.currentIndex + t];
  return m ? (await Promise.all([
    this.waitForNavigation(r),
    n(this, Be).send("Page.navigateToHistoryEntry", {
      entryId: m.id
    })
  ]))[0] : null;
};
let Eh = Nh;
Ed.CdpPage = Eh;
const dP = /* @__PURE__ */ new Set([
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
function fP(l, i) {
  const t = Math.max(l.x, i.x), r = Math.max(l.y, i.y);
  return {
    x: t,
    y: r,
    width: Math.max(Math.min(l.x + l.width, i.x + i.width) - t, 0),
    height: Math.max(Math.min(l.y + l.height, i.y + i.height) - r, 0)
  };
}
Object.defineProperty(It, "__esModule", { value: !0 });
It.OtherTarget = It.WorkerTarget = It.DevToolsTarget = It.PageTarget = It.CdpTarget = It.InitializationStatus = void 0;
const dr = Ma, hP = Ze, uy = wt, pP = Zi, yP = Ed, mP = Ru;
var Ra;
(function(l) {
  l.SUCCESS = "success", l.ABORTED = "aborted";
})(Ra || (It.InitializationStatus = Ra = {}));
var On, kn, br, _a, Cn;
class Yd extends dr.Target {
  /**
   * To initialize the target for use, call initialize.
   *
   * @internal
   */
  constructor(t, r, s, m, _) {
    super();
    g(this, On, void 0);
    g(this, kn, void 0);
    g(this, br, void 0);
    g(this, _a, void 0);
    g(this, Cn, void 0);
    Oe(this, "_initializedDeferred", uy.Deferred.create());
    Oe(this, "_isClosedDeferred", uy.Deferred.create());
    Oe(this, "_targetId");
    O(this, kn, r), O(this, _a, m), O(this, br, t), O(this, On, s), this._targetId = t.targetId, O(this, Cn, _), n(this, kn) && n(this, kn) instanceof pP.CdpCDPSession && n(this, kn)._setTarget(this);
  }
  _subtype() {
    return n(this, br).subtype;
  }
  _session() {
    return n(this, kn);
  }
  _sessionFactory() {
    if (!n(this, Cn))
      throw new Error("sessionFactory is not initialized");
    return n(this, Cn);
  }
  createCDPSession() {
    if (!n(this, Cn))
      throw new Error("sessionFactory is not initialized");
    return n(this, Cn).call(this, !1).then((t) => (t._setTarget(this), t));
  }
  url() {
    return n(this, br).url;
  }
  type() {
    switch (n(this, br).type) {
      case "page":
        return dr.TargetType.PAGE;
      case "background_page":
        return dr.TargetType.BACKGROUND_PAGE;
      case "service_worker":
        return dr.TargetType.SERVICE_WORKER;
      case "shared_worker":
        return dr.TargetType.SHARED_WORKER;
      case "browser":
        return dr.TargetType.BROWSER;
      case "webview":
        return dr.TargetType.WEBVIEW;
      case "tab":
        return dr.TargetType.TAB;
      default:
        return dr.TargetType.OTHER;
    }
  }
  _targetManager() {
    if (!n(this, _a))
      throw new Error("targetManager is not initialized");
    return n(this, _a);
  }
  _getTargetInfo() {
    return n(this, br);
  }
  browser() {
    if (!n(this, On))
      throw new Error("browserContext is not initialised");
    return n(this, On).browser();
  }
  browserContext() {
    if (!n(this, On))
      throw new Error("browserContext is not initialised");
    return n(this, On);
  }
  opener() {
    const { openerId: t } = n(this, br);
    if (t)
      return this.browser().targets().find((r) => r._targetId === t);
  }
  _targetInfoChanged(t) {
    O(this, br, t), this._checkIfInitialized();
  }
  _initialize() {
    this._initializedDeferred.resolve(Ra.SUCCESS);
  }
  _isTargetExposed() {
    return this.type() !== dr.TargetType.TAB && !this._subtype();
  }
  _checkIfInitialized() {
    this._initializedDeferred.resolved() || this._initializedDeferred.resolve(Ra.SUCCESS);
  }
}
On = new WeakMap(), kn = new WeakMap(), br = new WeakMap(), _a = new WeakMap(), Cn = new WeakMap();
It.CdpTarget = Yd;
var iu, ou;
const $h = class $h extends Yd {
  constructor(t, r, s, m, _, k, I) {
    super(t, r, s, m, _);
    g(this, iu, void 0);
    Oe(this, "pagePromise");
    g(this, ou, void 0);
    O(this, ou, k), O(this, iu, I ?? void 0);
  }
  _initialize() {
    this._initializedDeferred.valueOrThrow().then(async (t) => {
      if (t === Ra.ABORTED)
        return;
      const r = this.opener();
      if (!(r instanceof $h))
        return;
      if (!r || !r.pagePromise || this.type() !== "page")
        return !0;
      const s = await r.pagePromise;
      if (!s.listenerCount(
        "popup"
        /* PageEvent.Popup */
      ))
        return !0;
      const m = await this.page();
      return s.emit("popup", m), !0;
    }).catch(hP.debugError), this._checkIfInitialized();
  }
  async page() {
    if (!this.pagePromise) {
      const t = this._session();
      this.pagePromise = (t ? Promise.resolve(t) : this._sessionFactory()(
        /* isAutoAttachEmulated=*/
        !1
      )).then((r) => yP.CdpPage._create(r, this, n(this, ou), n(this, iu) ?? null));
    }
    return await this.pagePromise ?? null;
  }
  _checkIfInitialized() {
    this._initializedDeferred.resolved() || this._getTargetInfo().url !== "" && this._initializedDeferred.resolve(Ra.SUCCESS);
  }
};
iu = new WeakMap(), ou = new WeakMap();
let dl = $h;
It.PageTarget = dl;
class vP extends dl {
}
It.DevToolsTarget = vP;
var Sa;
class bP extends Yd {
  constructor() {
    super(...arguments);
    g(this, Sa, void 0);
  }
  async worker() {
    if (!n(this, Sa)) {
      const t = this._session();
      O(this, Sa, (t ? Promise.resolve(t) : this._sessionFactory()(
        /* isAutoAttachEmulated=*/
        !1
      )).then((r) => new mP.WebWorker(
        r,
        this._getTargetInfo().url,
        () => {
        },
        () => {
        }
        /* exceptionThrown */
      )));
    }
    return await n(this, Sa);
  }
}
Sa = new WeakMap();
It.WorkerTarget = bP;
class gP extends Yd {
}
It.OtherTarget = gP;
Object.defineProperty(Sd, "__esModule", { value: !0 });
Sd.ChromeTargetManager = void 0;
const Vn = Mt, wP = mt, Pf = Ze, Of = et, _P = wt, ly = It;
function SP(l, i) {
  return !!l._subtype() && !i.subtype;
}
var bt, jn, gt, Vi, au, Tn, Ki, zi, In, su, Qi, cu, Ea, md, uu, Th, lu, Ih, du, fu, hu, pu, vd, Mn, yo, bd;
class EP extends wP.EventEmitter {
  constructor(t, r, s, m = !0) {
    super();
    g(this, uu);
    g(this, lu);
    g(this, Mn);
    g(this, bt, void 0);
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
    g(this, jn, /* @__PURE__ */ new Map());
    /**
     * A target is added to this map once ChromeTargetManager has created
     * a Target and attached at least once to it.
     */
    g(this, gt, /* @__PURE__ */ new Map());
    /**
     * Tracks which sessions attach to which target.
     */
    g(this, Vi, /* @__PURE__ */ new Map());
    /**
     * If a target was filtered out by `targetFilterCallback`, we still receive
     * events about it from CDP, but we don't forward them to the rest of Puppeteer.
     */
    g(this, au, /* @__PURE__ */ new Set());
    g(this, Tn, void 0);
    g(this, Ki, void 0);
    g(this, zi, /* @__PURE__ */ new WeakMap());
    g(this, In, /* @__PURE__ */ new WeakMap());
    g(this, su, _P.Deferred.create());
    g(this, Qi, /* @__PURE__ */ new Set());
    g(this, cu, !0);
    g(this, Ea, [{}]);
    g(this, md, () => {
      if (n(this, cu))
        for (const [t, r] of n(this, jn).entries()) {
          const s = new ly.CdpTarget(r, void 0, void 0, this, void 0);
          (!n(this, Tn) || n(this, Tn).call(this, s)) && r.type !== "browser" && n(this, Qi).add(t);
        }
    });
    g(this, du, (t) => {
      L(this, lu, Ih).call(this, t);
    });
    g(this, fu, async (t) => {
      if (n(this, jn).set(t.targetInfo.targetId, t.targetInfo), this.emit("targetDiscovered", t.targetInfo), t.targetInfo.type === "browser" && t.targetInfo.attached) {
        if (n(this, gt).has(t.targetInfo.targetId))
          return;
        const r = n(this, Ki).call(this, t.targetInfo, void 0);
        r._initialize(), n(this, gt).set(t.targetInfo.targetId, r);
      }
    });
    g(this, hu, (t) => {
      const r = n(this, jn).get(t.targetId);
      if (n(this, jn).delete(t.targetId), L(this, Mn, yo).call(this, t.targetId), (r == null ? void 0 : r.type) === "service_worker" && n(this, gt).has(t.targetId)) {
        const s = n(this, gt).get(t.targetId);
        s && (this.emit("targetGone", s), n(this, gt).delete(t.targetId));
      }
    });
    g(this, pu, (t) => {
      var _;
      if (n(this, jn).set(t.targetInfo.targetId, t.targetInfo), n(this, au).has(t.targetInfo.targetId) || !n(this, gt).has(t.targetInfo.targetId) || !t.targetInfo.attached)
        return;
      const r = n(this, gt).get(t.targetInfo.targetId);
      if (!r)
        return;
      const s = r.url(), m = r._initializedDeferred.value() === ly.InitializationStatus.SUCCESS;
      if (SP(r, t.targetInfo)) {
        const k = r == null ? void 0 : r._session();
        (0, Of.assert)(k, "Target that is being activated is missing a CDPSession."), (_ = k.parentSession()) == null || _.emit(Vn.CDPSessionEvent.Swapped, k);
      }
      r._targetInfoChanged(t.targetInfo), m && s !== r.url() && this.emit("targetChanged", {
        target: r,
        wasInitialized: m,
        previousURL: s
      });
    });
    g(this, vd, async (t, r) => {
      const s = r.targetInfo, m = n(this, bt).session(r.sessionId);
      if (!m)
        throw new Error(`Session ${r.sessionId} was not created.`);
      const _ = async () => {
        await m.send("Runtime.runIfWaitingForDebugger").catch(Pf.debugError), await t.send("Target.detachFromTarget", {
          sessionId: m.id()
        }).catch(Pf.debugError);
      };
      if (!n(this, bt).isAutoAttached(s.targetId))
        return;
      if (s.type === "service_worker") {
        if (L(this, Mn, yo).call(this, s.targetId), await _(), n(this, gt).has(s.targetId))
          return;
        const x = n(this, Ki).call(this, s);
        x._initialize(), n(this, gt).set(s.targetId, x), this.emit("targetAvailable", x);
        return;
      }
      const k = n(this, gt).has(s.targetId), I = k ? n(this, gt).get(s.targetId) : n(this, Ki).call(this, s, m, t instanceof Vn.CDPSession ? t : void 0);
      if (n(this, Tn) && !n(this, Tn).call(this, I)) {
        n(this, au).add(s.targetId), L(this, Mn, yo).call(this, s.targetId), await _();
        return;
      }
      L(this, uu, Th).call(this, m), k ? (m._setTarget(I), n(this, Vi).set(m.id(), n(this, gt).get(s.targetId))) : (I._initialize(), n(this, gt).set(s.targetId, I), n(this, Vi).set(m.id(), I)), t instanceof Vn.CDPSession, t.emit(Vn.CDPSessionEvent.Ready, m), n(this, Qi).delete(I._targetId), k || this.emit("targetAvailable", I), L(this, Mn, yo).call(this), await Promise.all([
        m.send("Target.setAutoAttach", {
          waitForDebuggerOnStart: !0,
          flatten: !0,
          autoAttach: !0,
          filter: n(this, Ea)
        }),
        m.send("Runtime.runIfWaitingForDebugger")
      ]).catch(Pf.debugError);
    });
    g(this, bd, (t, r) => {
      const s = n(this, Vi).get(r.sessionId);
      n(this, Vi).delete(r.sessionId), s && (n(this, gt).delete(s._targetId), this.emit("targetGone", s));
    });
    O(this, bt, t), O(this, Tn, s), O(this, Ki, r), O(this, cu, m), n(this, bt).on("Target.targetCreated", n(this, fu)), n(this, bt).on("Target.targetDestroyed", n(this, hu)), n(this, bt).on("Target.targetInfoChanged", n(this, pu)), n(this, bt).on(Vn.CDPSessionEvent.SessionDetached, n(this, du)), L(this, uu, Th).call(this, n(this, bt));
  }
  async initialize() {
    await n(this, bt).send("Target.setDiscoverTargets", {
      discover: !0,
      filter: n(this, Ea)
    }), n(this, md).call(this), await n(this, bt).send("Target.setAutoAttach", {
      waitForDebuggerOnStart: !0,
      flatten: !0,
      autoAttach: !0,
      filter: [
        {
          type: "page",
          exclude: !0
        },
        ...n(this, Ea)
      ]
    }), L(this, Mn, yo).call(this), await n(this, su).valueOrThrow();
  }
  dispose() {
    n(this, bt).off("Target.targetCreated", n(this, fu)), n(this, bt).off("Target.targetDestroyed", n(this, hu)), n(this, bt).off("Target.targetInfoChanged", n(this, pu)), n(this, bt).off(Vn.CDPSessionEvent.SessionDetached, n(this, du)), L(this, lu, Ih).call(this, n(this, bt));
  }
  getAvailableTargets() {
    return n(this, gt);
  }
}
bt = new WeakMap(), jn = new WeakMap(), gt = new WeakMap(), Vi = new WeakMap(), au = new WeakMap(), Tn = new WeakMap(), Ki = new WeakMap(), zi = new WeakMap(), In = new WeakMap(), su = new WeakMap(), Qi = new WeakMap(), cu = new WeakMap(), Ea = new WeakMap(), md = new WeakMap(), uu = new WeakSet(), Th = function(t) {
  const r = (m) => {
    n(this, vd).call(this, t, m);
  };
  (0, Of.assert)(!n(this, zi).has(t)), n(this, zi).set(t, r), t.on("Target.attachedToTarget", r);
  const s = (m) => n(this, bd).call(this, t, m);
  (0, Of.assert)(!n(this, In).has(t)), n(this, In).set(t, s), t.on("Target.detachedFromTarget", s);
}, lu = new WeakSet(), Ih = function(t) {
  const r = n(this, zi).get(t);
  r && (t.off("Target.attachedToTarget", r), n(this, zi).delete(t)), n(this, In).has(t) && (t.off("Target.detachedFromTarget", n(this, In).get(t)), n(this, In).delete(t));
}, du = new WeakMap(), fu = new WeakMap(), hu = new WeakMap(), pu = new WeakMap(), vd = new WeakMap(), Mn = new WeakSet(), yo = function(t) {
  t !== void 0 && n(this, Qi).delete(t), n(this, Qi).size === 0 && n(this, su).resolve();
}, bd = new WeakMap();
Sd.ChromeTargetManager = EP;
Object.defineProperty(rs, "__esModule", { value: !0 });
rs.CdpBrowserContext = Wm = rs.CdpBrowser = void 0;
const Hm = Ta, PP = _d, dy = Mt, OP = et, kP = Sd, CP = Fu, Tr = It;
var Pa, Oa, yu, Pt, mu, ka, Ca, Fn, Br, lt, vu, gd, Bm, bu, gu, wu, _u, Su, Eu, Fh;
const Lh = class Lh extends Hm.Browser {
  constructor(t, r, s, m, _, k, I, x, F, R = !0) {
    super();
    g(this, gd);
    g(this, Eu);
    Oe(this, "protocol", "cdp");
    g(this, Pa, void 0);
    g(this, Oa, void 0);
    g(this, yu, void 0);
    g(this, Pt, void 0);
    g(this, mu, void 0);
    g(this, ka, void 0);
    g(this, Ca, void 0);
    g(this, Fn, void 0);
    g(this, Br, /* @__PURE__ */ new Map());
    g(this, lt, void 0);
    g(this, vu, () => {
      this.emit("disconnected", void 0);
    });
    g(this, bu, (t, r) => {
      var I;
      const { browserContextId: s } = t, m = s && n(this, Br).has(s) ? n(this, Br).get(s) : n(this, Fn);
      if (!m)
        throw new Error("Missing browser context");
      const _ = (x) => n(this, Pt)._createSession(t, x), k = new Tr.OtherTarget(t, r, m, n(this, lt), _);
      return (I = t.url) != null && I.startsWith("devtools://") ? new Tr.DevToolsTarget(t, r, m, n(this, lt), _, n(this, Pa), n(this, Oa) ?? null) : n(this, Ca).call(this, k) ? new Tr.PageTarget(t, r, m, n(this, lt), _, n(this, Pa), n(this, Oa) ?? null) : t.type === "service_worker" || t.type === "shared_worker" ? new Tr.WorkerTarget(t, r, m, n(this, lt), _) : k;
    });
    g(this, gu, async (t) => {
      t._isTargetExposed() && await t._initializedDeferred.valueOrThrow() === Tr.InitializationStatus.SUCCESS && (this.emit("targetcreated", t), t.browserContext().emit("targetcreated", t));
    });
    g(this, wu, async (t) => {
      t._initializedDeferred.resolve(Tr.InitializationStatus.ABORTED), t._isClosedDeferred.resolve(), t._isTargetExposed() && await t._initializedDeferred.valueOrThrow() === Tr.InitializationStatus.SUCCESS && (this.emit("targetdestroyed", t), t.browserContext().emit("targetdestroyed", t));
    });
    g(this, _u, ({ target: t }) => {
      this.emit("targetchanged", t), t.browserContext().emit("targetchanged", t);
    });
    g(this, Su, (t) => {
      this.emit("targetdiscovered", t);
    });
    t = t || "chrome", O(this, Pa, m), O(this, Oa, _), O(this, yu, k), O(this, Pt, r), O(this, mu, I || function() {
    }), O(this, ka, x || (() => !0)), L(this, gd, Bm).call(this, F), t === "firefox" ? O(this, lt, new CP.FirefoxTargetManager(r, n(this, bu), n(this, ka))) : O(this, lt, new kP.ChromeTargetManager(r, n(this, bu), n(this, ka), R)), O(this, Fn, new ul(n(this, Pt), this));
    for (const N of s)
      n(this, Br).set(N, new ul(n(this, Pt), this, N));
  }
  static async _create(t, r, s, m, _, k, I, x, F, R = !0) {
    const N = new Lh(t, r, s, m, _, k, I, x, F, R);
    return await N._attach(), N;
  }
  async _attach() {
    n(this, Pt).on(dy.CDPSessionEvent.Disconnected, n(this, vu)), n(this, lt).on("targetAvailable", n(this, gu)), n(this, lt).on("targetGone", n(this, wu)), n(this, lt).on("targetChanged", n(this, _u)), n(this, lt).on("targetDiscovered", n(this, Su)), await n(this, lt).initialize();
  }
  _detach() {
    n(this, Pt).off(dy.CDPSessionEvent.Disconnected, n(this, vu)), n(this, lt).off("targetAvailable", n(this, gu)), n(this, lt).off("targetGone", n(this, wu)), n(this, lt).off("targetChanged", n(this, _u)), n(this, lt).off("targetDiscovered", n(this, Su));
  }
  process() {
    return n(this, yu) ?? null;
  }
  _targetManager() {
    return n(this, lt);
  }
  _getIsPageTargetCallback() {
    return n(this, Ca);
  }
  async createIncognitoBrowserContext(t = {}) {
    const { proxyServer: r, proxyBypassList: s } = t, { browserContextId: m } = await n(this, Pt).send("Target.createBrowserContext", {
      proxyServer: r,
      proxyBypassList: s && s.join(",")
    }), _ = new ul(n(this, Pt), this, m);
    return n(this, Br).set(m, _), _;
  }
  browserContexts() {
    return [n(this, Fn), ...Array.from(n(this, Br).values())];
  }
  defaultBrowserContext() {
    return n(this, Fn);
  }
  async _disposeContext(t) {
    t && (await n(this, Pt).send("Target.disposeBrowserContext", {
      browserContextId: t
    }), n(this, Br).delete(t));
  }
  wsEndpoint() {
    return n(this, Pt).url();
  }
  async newPage() {
    return await n(this, Fn).newPage();
  }
  async _createPageInContext(t) {
    const { targetId: r } = await n(this, Pt).send("Target.createTarget", {
      url: "about:blank",
      browserContextId: t || void 0
    }), s = await this.waitForTarget((k) => k._targetId === r);
    if (!s)
      throw new Error(`Missing target for page (id = ${r})`);
    if (!(await s._initializedDeferred.valueOrThrow() === Tr.InitializationStatus.SUCCESS))
      throw new Error(`Failed to create target for page (id = ${r})`);
    const _ = await s.page();
    if (!_)
      throw new Error(`Failed to create a page for context (id = ${t})`);
    return _;
  }
  targets() {
    return Array.from(n(this, lt).getAvailableTargets().values()).filter((t) => t._isTargetExposed() && t._initializedDeferred.value() === Tr.InitializationStatus.SUCCESS);
  }
  target() {
    const t = this.targets().find((r) => r.type() === "browser");
    if (!t)
      throw new Error("Browser target is not found");
    return t;
  }
  async version() {
    return (await L(this, Eu, Fh).call(this)).product;
  }
  async userAgent() {
    return (await L(this, Eu, Fh).call(this)).userAgent;
  }
  async close() {
    await n(this, mu).call(null), this.disconnect();
  }
  disconnect() {
    n(this, lt).dispose(), n(this, Pt).dispose(), this._detach();
  }
  get connected() {
    return !n(this, Pt)._closed;
  }
};
Pa = new WeakMap(), Oa = new WeakMap(), yu = new WeakMap(), Pt = new WeakMap(), mu = new WeakMap(), ka = new WeakMap(), Ca = new WeakMap(), Fn = new WeakMap(), Br = new WeakMap(), lt = new WeakMap(), vu = new WeakMap(), gd = new WeakSet(), Bm = function(t) {
  O(this, Ca, t || ((r) => r.type() === "page" || r.type() === "background_page" || r.type() === "webview"));
}, bu = new WeakMap(), gu = new WeakMap(), wu = new WeakMap(), _u = new WeakMap(), Su = new WeakMap(), Eu = new WeakSet(), Fh = function() {
  return n(this, Pt).send("Browser.getVersion");
};
let Mh = Lh;
var Wm = rs.CdpBrowser = Mh, ja, gr, ir;
class ul extends PP.BrowserContext {
  constructor(t, r, s) {
    super();
    g(this, ja, void 0);
    g(this, gr, void 0);
    g(this, ir, void 0);
    O(this, ja, t), O(this, gr, r), O(this, ir, s);
  }
  get id() {
    return n(this, ir);
  }
  targets() {
    return n(this, gr).targets().filter((t) => t.browserContext() === this);
  }
  waitForTarget(t, r = {}) {
    return n(this, gr).waitForTarget((s) => s.browserContext() === this && t(s), r);
  }
  async pages() {
    return (await Promise.all(this.targets().filter((r) => {
      var s;
      return r.type() === "page" || r.type() === "other" && ((s = n(this, gr)._getIsPageTargetCallback()) == null ? void 0 : s(r));
    }).map((r) => r.page()))).filter((r) => !!r);
  }
  isIncognito() {
    return !!n(this, ir);
  }
  async overridePermissions(t, r) {
    const s = r.map((m) => {
      const _ = Hm.WEB_PERMISSION_TO_PROTOCOL_PERMISSION.get(m);
      if (!_)
        throw new Error("Unknown permission: " + m);
      return _;
    });
    await n(this, ja).send("Browser.grantPermissions", {
      origin: t,
      browserContextId: n(this, ir) || void 0,
      permissions: s
    });
  }
  async clearPermissionOverrides() {
    await n(this, ja).send("Browser.resetPermissions", {
      browserContextId: n(this, ir) || void 0
    });
  }
  newPage() {
    return n(this, gr)._createPageInContext(n(this, ir));
  }
  browser() {
    return n(this, gr);
  }
  async close() {
    (0, OP.assert)(n(this, ir), "Non-incognito profiles cannot be closed!"), await n(this, gr)._disposeContext(n(this, ir));
  }
}
ja = new WeakMap(), gr = new WeakMap(), ir = new WeakMap();
rs.CdpBrowserContext = ul;
var Um = {};
Object.defineProperty(Um, "__esModule", { value: !0 });
const jP = Object.freeze({ width: 800, height: 600 });
class TP extends Wm {
  constructor({
    product: i,
    connection: t,
    contextIds: r,
    ignoreHTTPSErrors: s = !1,
    defaultViewport: m = jP,
    closeCallback: _,
    targetFilterCallback: k,
    isPageTargetCallback: I,
    waitForInitiallyDiscoveredTargets: x = !0
  }) {
    super(
      i,
      t,
      r,
      s,
      m,
      void 0,
      // process
      _,
      k,
      I,
      x
    );
  }
  async attach() {
    super._attach();
  }
  async _createPageInContext(i) {
    const t = await super._createPageInContext(i);
    return t.pdf = async function(r = {}) {
      const {
        landscape: s,
        displayHeaderFooter: m,
        headerTemplate: _,
        footerTemplate: k,
        printBackground: I,
        scale: x,
        width: F,
        height: R,
        margin: N,
        pageRanges: Q,
        preferCSSPageSize: q,
        // omitBackground,
        // timeout: ms,
        tagged: B
      } = this._getPDFOptions(r), $ = t._client.send("Page.printToPDF", {
        // transferMode: 'ReturnAsStream',
        landscape: s,
        displayHeaderFooter: m,
        headerTemplate: _,
        footerTemplate: k,
        printBackground: I,
        scale: x,
        paperWidth: F,
        paperHeight: R,
        marginTop: N.top,
        marginBottom: N.bottom,
        marginLeft: N.left,
        marginRight: N.right,
        pageRanges: Q,
        preferCSSPageSize: q,
        generateTaggedPDF: B
      }), { data: A } = await $;
      return atob(A);
    }, t;
  }
}
async function DP({
  transport: l,
  ignoreHTTPSErrors: i = !1,
  defaultViewport: t = null,
  closeCallback: r,
  targetFilterCallback: s,
  isPageTargetCallback: m,
  waitForInitiallyDiscoveredTargets: _ = !0,
  slowMo: k = 0,
  protocolTimeout: I
}) {
  const x = new Fy("", l, k, I), R = (await x.send("Browser.getVersion")).product.toLowerCase().includes("firefox") ? "firefox" : "chrome", { browserContextIds: N } = await x.send(
    "Target.getBrowserContexts"
  ), Q = new TP({
    product: R || "chrome",
    connection: x,
    contextIds: N,
    ignoreHTTPSErrors: i,
    defaultViewport: t,
    closeCallback: r,
    targetFilterCallback: s,
    isPageTargetCallback: m,
    waitForInitiallyDiscoveredTargets: _
  });
  return await Q.attach(), Q;
}
class Vm {
  constructor(i) {
    this.delay = 0.04 * 1e3, this.target = i, this._sessionId = i.id, this.debugee = {
      tabId: i.tabId
    }, chrome.debugger.onEvent.addListener((t, r, s) => {
      const m = {
        method: r,
        params: s,
        sessionId: this._sessionId
      };
      t.tabId === this.target.tabId && this._emit(m);
    }), chrome.debugger.onDetach.addListener((t) => {
      t.tabId === this.target.tabId && this._closeTarget();
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
  static create(i, t) {
    if (chrome.debugger) {
      const r = {
        tabId: i
      };
      return new Promise((s, m) => {
        chrome.debugger.attach(r, "1.3", async () => {
          const _ = chrome.runtime.lastError;
          if (_)
            m(_);
          else {
            const k = await this._getTargetInfo(r), I = new Vm(k);
            I._initialize(t), s(I);
          }
        });
      });
    } else
      throw new Error("no debugger permission");
  }
  /** @internal */
  send(i) {
    const t = JSON.parse(i);
    [
      "Target.getBrowserContexts",
      "Target.setDiscoverTargets",
      "Target.attachToTarget",
      "Target.activateTarget",
      "Target.closeTarget"
    ].includes(t.method) ? this._handleTargetCommand(t) : chrome.debugger.sendCommand(
      this.debugee,
      t.method,
      t.params,
      (s) => this._handleCommandResponse(t, s)
    );
  }
  /** @internal */
  close() {
    chrome.debugger.detach(this.debugee, () => this._closeTarget());
  }
  static _getTargetInfo(i) {
    return new Promise((t, r) => {
      chrome.debugger.getTargets((s) => {
        const m = s.filter((_) => _.attached && _.tabId === i.tabId).map((_) => ({
          ..._,
          targetId: _.id,
          canAccessOpener: !1
        }));
        m[0] ? t(m[0]) : r(new Error("target not found"));
      });
    });
  }
  _initialize(i) {
    if (i)
      Function = i;
    else
      try {
        new Function();
      } catch {
        Function = function() {
          return () => {
          };
        };
      }
  }
  _handleCommandResponse(i, t) {
    const r = chrome.runtime.lastError, s = {
      ...i,
      error: r,
      result: t
    };
    this._delaySend(s);
  }
  _handleTargetCommand(i) {
    const t = {
      ...i,
      error: void 0,
      result: {}
    };
    switch (i.method) {
      case "Target.getBrowserContexts":
        t.result = {
          browserContextIds: []
        };
        break;
      case "Target.setDiscoverTargets":
        t.result = null, this._emitTargetCreated();
        break;
      case "Target.attachToTarget":
        t.result = {
          sessionId: this._sessionId
        }, this._emitTargetAttached();
        break;
      case "Target.activateTarget":
        t.result = null;
        break;
      case "Target.closeTarget":
        t.result = {
          success: !0
        }, setTimeout(() => this.close(), this.delay);
        break;
    }
    this._delaySend(t);
  }
  _emitTargetCreated() {
    const i = {
      method: "Target.targetCreated",
      params: {
        targetInfo: this.target
      }
    };
    this._emit(i);
  }
  _emitTargetAttached() {
    const i = {
      method: "Target.attachedToTarget",
      params: {
        targetInfo: this.target,
        sessionId: this._sessionId,
        waitingForDebugger: !1
      }
    };
    this._emit(i);
  }
  _emitTargetDetached() {
    const i = {
      method: "Target.detachedFromTarget",
      params: {
        targetId: this.target.id,
        sessionId: this._sessionId
      }
    };
    this._emit(i);
  }
  _closeTarget() {
    var i;
    this._emitTargetDetached(), (i = this.onclose) == null || i.call(null);
  }
  _emit(i) {
    var t;
    (t = this == null ? void 0 : this.onmessage) == null || t.call(null, JSON.stringify(i));
  }
  _delaySend(i) {
    setTimeout(() => {
      var t;
      (t = this == null ? void 0 : this.onmessage) == null || t.call(null, JSON.stringify(i));
    }, this.delay);
  }
}
const RP = Um.ConnectionTransport;
export {
  RP as ConnectionTransport,
  Vm as ExtensionDebuggerTransport,
  DP as puppeteerConnect
};
