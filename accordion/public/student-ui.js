function Po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ua = { exports: {} }, dr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Nu = Object.getOwnPropertySymbols, Tc = Object.prototype.hasOwnProperty, jc = Object.prototype.propertyIsEnumerable;
function Nc(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Rc() {
  try {
    if (!Object.assign)
      return !1;
    var e = new String("abc");
    if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5")
      return !1;
    for (var t = {}, n = 0; n < 10; n++)
      t["_" + String.fromCharCode(n)] = n;
    var r = Object.getOwnPropertyNames(t).map(function(i) {
      return t[i];
    });
    if (r.join("") !== "0123456789")
      return !1;
    var o = {};
    return "abcdefghijklmnopqrst".split("").forEach(function(i) {
      o[i] = i;
    }), Object.keys(Object.assign({}, o)).join("") === "abcdefghijklmnopqrst";
  } catch {
    return !1;
  }
}
var sa = Rc() ? Object.assign : function(e, t) {
  for (var n, r = Nc(e), o, i = 1; i < arguments.length; i++) {
    n = Object(arguments[i]);
    for (var l in n)
      Tc.call(n, l) && (r[l] = n[l]);
    if (Nu) {
      o = Nu(n);
      for (var u = 0; u < o.length; u++)
        jc.call(n, o[u]) && (r[o[u]] = n[o[u]]);
    }
  }
  return r;
}, aa = { exports: {} }, M = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wl = sa, ln = 60103, fa = 60106;
M.Fragment = 60107;
M.StrictMode = 60108;
M.Profiler = 60114;
var ca = 60109, da = 60110, pa = 60112;
M.Suspense = 60113;
var ma = 60115, ha = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var we = Symbol.for;
  ln = we("react.element"), fa = we("react.portal"), M.Fragment = we("react.fragment"), M.StrictMode = we("react.strict_mode"), M.Profiler = we("react.profiler"), ca = we("react.provider"), da = we("react.context"), pa = we("react.forward_ref"), M.Suspense = we("react.suspense"), ma = we("react.memo"), ha = we("react.lazy");
}
var Ru = typeof Symbol == "function" && Symbol.iterator;
function Dc(e) {
  return e === null || typeof e != "object" ? null : (e = Ru && e[Ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
function pr(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var va = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ya = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = ya, this.updater = n || va;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(pr(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function ga() {
}
ga.prototype = un.prototype;
function El(e, t, n) {
  this.props = e, this.context = t, this.refs = ya, this.updater = n || va;
}
var Sl = El.prototype = new ga();
Sl.constructor = El;
wl(Sl, un.prototype);
Sl.isPureReactComponent = !0;
var Ol = { current: null }, wa = Object.prototype.hasOwnProperty, Ea = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sa(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) wa.call(t, r) && !Ea.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: ln, type: e, key: i, ref: l, props: o, _owner: Ol.current };
}
function Lc(e, t) {
  return { $$typeof: ln, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function xl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ln;
}
function $c(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Du = /\/+/g;
function Ko(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? $c("" + e.key) : t.toString(36);
}
function $r(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else switch (i) {
    case "string":
    case "number":
      l = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case ln:
        case fa:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + Ko(l, 0) : r, Array.isArray(o) ? (n = "", e != null && (n = e.replace(Du, "$&/") + "/"), $r(o, t, n, "", function(a) {
    return a;
  })) : o != null && (xl(o) && (o = Lc(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(Du, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ko(i, u);
    l += $r(i, t, n, s, o);
  }
  else if (s = Dc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ko(i, u++), l += $r(i, t, n, s, o);
  else if (i === "object") throw t = "" + e, Error(pr(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
  return l;
}
function Er(e, t, n) {
  if (e == null) return e;
  var r = [], o = 0;
  return $r(e, r, "", "", function(i) {
    return t.call(n, i, o++);
  }), r;
}
function Mc(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), e._status = 0, e._result = t, t.then(function(n) {
      e._status === 0 && (n = n.default, e._status = 1, e._result = n);
    }, function(n) {
      e._status === 0 && (e._status = 2, e._result = n);
    });
  }
  if (e._status === 1) return e._result;
  throw e._result;
}
var Oa = { current: null };
function ze() {
  var e = Oa.current;
  if (e === null) throw Error(pr(321));
  return e;
}
var zc = { ReactCurrentDispatcher: Oa, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: Ol, IsSomeRendererActing: { current: !1 }, assign: wl };
M.Children = { map: Er, forEach: function(e, t, n) {
  Er(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Er(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Er(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!xl(e)) throw Error(pr(143));
  return e;
} };
M.Component = un;
M.PureComponent = El;
M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
M.cloneElement = function(e, t, n) {
  if (e == null) throw Error(pr(267, e));
  var r = wl({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = Ol.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) wa.call(t, s) && !Ea.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return {
    $$typeof: ln,
    type: e.type,
    key: o,
    ref: i,
    props: r,
    _owner: l
  };
};
M.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: da, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: ca, _context: e }, e.Consumer = e;
};
M.createElement = Sa;
M.createFactory = function(e) {
  var t = Sa.bind(null, e);
  return t.type = e, t;
};
M.createRef = function() {
  return { current: null };
};
M.forwardRef = function(e) {
  return { $$typeof: pa, render: e };
};
M.isValidElement = xl;
M.lazy = function(e) {
  return { $$typeof: ha, _payload: { _status: -1, _result: e }, _init: Mc };
};
M.memo = function(e, t) {
  return { $$typeof: ma, type: e, compare: t === void 0 ? null : t };
};
M.useCallback = function(e, t) {
  return ze().useCallback(e, t);
};
M.useContext = function(e, t) {
  return ze().useContext(e, t);
};
M.useDebugValue = function() {
};
M.useEffect = function(e, t) {
  return ze().useEffect(e, t);
};
M.useImperativeHandle = function(e, t, n) {
  return ze().useImperativeHandle(e, t, n);
};
M.useLayoutEffect = function(e, t) {
  return ze().useLayoutEffect(e, t);
};
M.useMemo = function(e, t) {
  return ze().useMemo(e, t);
};
M.useReducer = function(e, t, n) {
  return ze().useReducer(e, t, n);
};
M.useRef = function(e) {
  return ze().useRef(e);
};
M.useState = function(e) {
  return ze().useState(e);
};
M.version = "17.0.2";
aa.exports = M;
var $ = aa.exports;
const P = /* @__PURE__ */ Po($);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ic = $, xa = 60103;
dr.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var Lu = Symbol.for;
  xa = Lu("react.element"), dr.Fragment = Lu("react.fragment");
}
var bc = Ic.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fc = Object.prototype.hasOwnProperty, Uc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ca(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Fc.call(t, r) && !Uc.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: xa, type: e, key: i, ref: l, props: o, _owner: bc.current };
}
dr.jsx = Ca;
dr.jsxs = Ca;
ua.exports = dr;
var q = ua.exports, _a = { exports: {} }, ge = {}, Pa = { exports: {} }, ka = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  var t, n, r, o;
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var l = Date, u = l.now();
    e.unstable_now = function() {
      return l.now() - u;
    };
  }
  if (typeof window > "u" || typeof MessageChannel != "function") {
    var s = null, a = null, p = function() {
      if (s !== null) try {
        var O = e.unstable_now();
        s(!0, O), s = null;
      } catch (R) {
        throw setTimeout(p, 0), R;
      }
    };
    t = function(O) {
      s !== null ? setTimeout(t, 0, O) : (s = O, setTimeout(p, 0));
    }, n = function(O, R) {
      a = setTimeout(O, R);
    }, r = function() {
      clearTimeout(a);
    }, e.unstable_shouldYield = function() {
      return !1;
    }, o = e.unstable_forceFrameRate = function() {
    };
  } else {
    var w = window.setTimeout, m = window.clearTimeout;
    if (typeof console < "u") {
      var E = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof E != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
    }
    var x = !1, _ = null, c = -1, f = 5, d = 0;
    e.unstable_shouldYield = function() {
      return e.unstable_now() >= d;
    }, o = function() {
    }, e.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : f = 0 < O ? Math.floor(1e3 / O) : 5;
    };
    var v = new MessageChannel(), h = v.port2;
    v.port1.onmessage = function() {
      if (_ !== null) {
        var O = e.unstable_now();
        d = O + f;
        try {
          _(!0, O) ? h.postMessage(null) : (x = !1, _ = null);
        } catch (R) {
          throw h.postMessage(null), R;
        }
      } else x = !1;
    }, t = function(O) {
      _ = O, x || (x = !0, h.postMessage(null));
    }, n = function(O, R) {
      c = w(function() {
        O(e.unstable_now());
      }, R);
    }, r = function() {
      m(c), c = -1;
    };
  }
  function T(O, R) {
    var L = O.length;
    O.push(R);
    e: for (; ; ) {
      var B = L - 1 >>> 1, Y = O[B];
      if (Y !== void 0 && 0 < D(Y, R)) O[B] = R, O[L] = Y, L = B;
      else break e;
    }
  }
  function S(O) {
    return O = O[0], O === void 0 ? null : O;
  }
  function j(O) {
    var R = O[0];
    if (R !== void 0) {
      var L = O.pop();
      if (L !== R) {
        O[0] = L;
        e: for (var B = 0, Y = O.length; B < Y; ) {
          var st = 2 * (B + 1) - 1, at = O[st], mn = st + 1, Tt = O[mn];
          if (at !== void 0 && 0 > D(at, L)) Tt !== void 0 && 0 > D(Tt, at) ? (O[B] = Tt, O[mn] = L, B = mn) : (O[B] = at, O[st] = L, B = st);
          else if (Tt !== void 0 && 0 > D(Tt, L)) O[B] = Tt, O[mn] = L, B = mn;
          else break e;
        }
      }
      return R;
    }
    return null;
  }
  function D(O, R) {
    var L = O.sortIndex - R.sortIndex;
    return L !== 0 ? L : O.id - R.id;
  }
  var k = [], Q = [], Bo = 1, de = null, J = 3, wr = !1, ut = !1, pn = !1;
  function Vo(O) {
    for (var R = S(Q); R !== null; ) {
      if (R.callback === null) j(Q);
      else if (R.startTime <= O) j(Q), R.sortIndex = R.expirationTime, T(k, R);
      else break;
      R = S(Q);
    }
  }
  function Wo(O) {
    if (pn = !1, Vo(O), !ut) if (S(k) !== null) ut = !0, t(Ho);
    else {
      var R = S(Q);
      R !== null && n(Wo, R.startTime - O);
    }
  }
  function Ho(O, R) {
    ut = !1, pn && (pn = !1, r()), wr = !0;
    var L = J;
    try {
      for (Vo(R), de = S(k); de !== null && (!(de.expirationTime > R) || O && !e.unstable_shouldYield()); ) {
        var B = de.callback;
        if (typeof B == "function") {
          de.callback = null, J = de.priorityLevel;
          var Y = B(de.expirationTime <= R);
          R = e.unstable_now(), typeof Y == "function" ? de.callback = Y : de === S(k) && j(k), Vo(R);
        } else j(k);
        de = S(k);
      }
      if (de !== null) var st = !0;
      else {
        var at = S(Q);
        at !== null && n(Wo, at.startTime - R), st = !1;
      }
      return st;
    } finally {
      de = null, J = L, wr = !1;
    }
  }
  var kc = o;
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(O) {
    O.callback = null;
  }, e.unstable_continueExecution = function() {
    ut || wr || (ut = !0, t(Ho));
  }, e.unstable_getCurrentPriorityLevel = function() {
    return J;
  }, e.unstable_getFirstCallbackNode = function() {
    return S(k);
  }, e.unstable_next = function(O) {
    switch (J) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = J;
    }
    var L = J;
    J = R;
    try {
      return O();
    } finally {
      J = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = kc, e.unstable_runWithPriority = function(O, R) {
    switch (O) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        O = 3;
    }
    var L = J;
    J = O;
    try {
      return R();
    } finally {
      J = L;
    }
  }, e.unstable_scheduleCallback = function(O, R, L) {
    var B = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? B + L : B) : L = B, O) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = L + Y, O = { id: Bo++, callback: R, priorityLevel: O, startTime: L, expirationTime: Y, sortIndex: -1 }, L > B ? (O.sortIndex = L, T(Q, O), S(k) === null && O === S(Q) && (pn ? r() : pn = !0, n(Wo, L - B))) : (O.sortIndex = Y, T(k, O), ut || wr || (ut = !0, t(Ho))), O;
  }, e.unstable_wrapCallback = function(O) {
    var R = J;
    return function() {
      var L = J;
      J = R;
      try {
        return O.apply(this, arguments);
      } finally {
        J = L;
      }
    };
  };
})(ka);
Pa.exports = ka;
var Ac = Pa.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko = $, F = sa, K = Ac;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!ko) throw Error(y(227));
var Ta = /* @__PURE__ */ new Set(), Kn = {};
function Ct(e, t) {
  Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Ta.add(t[e]);
}
var Me = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $u = Object.prototype.hasOwnProperty, Mu = {}, zu = {};
function Vc(e) {
  return $u.call(zu, e) ? !0 : $u.call(Mu, e) ? !1 : Bc.test(e) ? zu[e] = !0 : (Mu[e] = !0, !1);
}
function Wc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Hc(e, t, n, r) {
  if (t === null || typeof t > "u" || Wc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ie(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Z[e] = new ie(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Z[t] = new ie(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Z[e] = new ie(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Z[e] = new ie(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Z[e] = new ie(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Z[e] = new ie(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Z[e] = new ie(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Z[e] = new ie(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Z[e] = new ie(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Cl = /[\-:]([a-z])/g;
function _l(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Cl,
    _l
  );
  Z[t] = new ie(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Cl, _l);
  Z[t] = new ie(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Cl, _l);
  Z[t] = new ie(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Z[e] = new ie(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Z.xlinkHref = new ie("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Z[e] = new ie(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Pl(e, t, n, r) {
  var o = Z.hasOwnProperty(t) ? Z[t] : null, i = o !== null ? o.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  i || (Hc(t, n, o, r) && (n = null), r || o === null ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = ko.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kn = 60103, pt = 60106, Ae = 60107, kl = 60108, $n = 60114, Tl = 60109, jl = 60110, To = 60112, Mn = 60113, Kr = 60120, jo = 60115, Nl = 60116, Rl = 60121, Dl = 60128, ja = 60129, Ll = 60130, Ei = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var H = Symbol.for;
  kn = H("react.element"), pt = H("react.portal"), Ae = H("react.fragment"), kl = H("react.strict_mode"), $n = H("react.profiler"), Tl = H("react.provider"), jl = H("react.context"), To = H("react.forward_ref"), Mn = H("react.suspense"), Kr = H("react.suspense_list"), jo = H("react.memo"), Nl = H("react.lazy"), Rl = H("react.block"), H("react.scope"), Dl = H("react.opaque.id"), ja = H("react.debug_trace_mode"), Ll = H("react.offscreen"), Ei = H("react.legacy_hidden");
}
var Iu = typeof Symbol == "function" && Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Iu && e[Iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Qo;
function Tn(e) {
  if (Qo === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Qo = t && t[1] || "";
  }
  return `
` + Qo + e;
}
var Yo = !1;
function Sr(e, t) {
  if (!e || Yo) return "";
  Yo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (s) {
        var r = s;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (s) {
        r = s;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (var o = s.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, u = i.length - 1; 1 <= l && 0 <= u && o[l] !== i[u]; ) u--;
      for (; 1 <= l && 0 <= u; l--, u--) if (o[l] !== i[u]) {
        if (l !== 1 || u !== 1)
          do
            if (l--, u--, 0 > u || o[l] !== i[u]) return `
` + o[l].replace(" at new ", " at ");
          while (1 <= l && 0 <= u);
        break;
      }
    }
  } finally {
    Yo = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Tn(e) : "";
}
function Kc(e) {
  switch (e.tag) {
    case 5:
      return Tn(e.type);
    case 16:
      return Tn("Lazy");
    case 13:
      return Tn("Suspense");
    case 19:
      return Tn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Sr(e.type, !1), e;
    case 11:
      return e = Sr(e.type.render, !1), e;
    case 22:
      return e = Sr(e.type._render, !1), e;
    case 1:
      return e = Sr(e.type, !0), e;
    default:
      return "";
  }
}
function At(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ae:
      return "Fragment";
    case pt:
      return "Portal";
    case $n:
      return "Profiler";
    case kl:
      return "StrictMode";
    case Mn:
      return "Suspense";
    case Kr:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case jl:
      return (e.displayName || "Context") + ".Consumer";
    case Tl:
      return (e._context.displayName || "Context") + ".Provider";
    case To:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case jo:
      return At(e.type);
    case Rl:
      return At(e._render);
    case Nl:
      t = e._payload, e = e._init;
      try {
        return At(e(t));
      } catch {
      }
  }
  return null;
}
function qe(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return e;
    default:
      return "";
  }
}
function Na(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Qc(e) {
  var t = Na(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return o.call(this);
    }, set: function(l) {
      r = "" + l, i.call(this, l);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(l) {
      r = "" + l;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function Or(e) {
  e._valueTracker || (e._valueTracker = Qc(e));
}
function Ra(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Na(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Si(e, t) {
  var n = t.checked;
  return F({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Da(e, t) {
  t = t.checked, t != null && Pl(e, "checked", t, !1);
}
function Oi(e, t) {
  Da(e, t);
  var n = qe(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && xi(e, t.type, qe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function xi(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
function Yc(e) {
  var t = "";
  return ko.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Ci(e, t) {
  return e = F({ children: void 0 }, t), (t = Yc(t.children)) && (e.children = t), e;
}
function Bt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + qe(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        e[o].selected = !0, r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return F({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Uu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(y(92));
      if (Array.isArray(n)) {
        if (!(1 >= n.length)) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: qe(n) };
}
function La(e, t) {
  var n = qe(t.value), r = qe(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function Au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Pi = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function $a(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? $a(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, Ma = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, o);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== Pi.svg || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Qn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
  animationIterationCount: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, Xc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
  Xc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e];
  });
});
function za(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px";
}
function Ia(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = za(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Gc = F({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ti(e, t) {
  if (t) {
    if (Gc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function ji(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
function $l(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ni = null, Vt = null, Wt = null;
function Bu(e) {
  if (e = hr(e)) {
    if (typeof Ni != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = Mo(t), Ni(e.stateNode, e.type, t));
  }
}
function ba(e) {
  Vt ? Wt ? Wt.push(e) : Wt = [e] : Vt = e;
}
function Fa() {
  if (Vt) {
    var e = Vt, t = Wt;
    if (Wt = Vt = null, Bu(e), t) for (e = 0; e < t.length; e++) Bu(t[e]);
  }
}
function Ml(e, t) {
  return e(t);
}
function Ua(e, t, n, r, o) {
  return e(t, n, r, o);
}
function zl() {
}
var Aa = Ml, mt = !1, Xo = !1;
function Il() {
  (Vt !== null || Wt !== null) && (zl(), Fa());
}
function Zc(e, t, n) {
  if (Xo) return e(t, n);
  Xo = !0;
  try {
    return Aa(e, t, n);
  } finally {
    Xo = !1, Il();
  }
}
function Yn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var Ri = !1;
if (Me) try {
  var vn = {};
  Object.defineProperty(vn, "passive", { get: function() {
    Ri = !0;
  } }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn);
} catch {
  Ri = !1;
}
function Jc(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var In = !1, Yr = null, Xr = !1, Di = null, qc = { onError: function(e) {
  In = !0, Yr = e;
} };
function ed(e, t, n, r, o, i, l, u, s) {
  In = !1, Yr = null, Jc.apply(qc, arguments);
}
function td(e, t, n, r, o, i, l, u, s) {
  if (ed.apply(this, arguments), In) {
    if (In) {
      var a = Yr;
      In = !1, Yr = null;
    } else throw Error(y(198));
    Xr || (Xr = !0, Di = a);
  }
}
function Pt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 1026 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ba(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Vu(e) {
  if (Pt(e) !== e) throw Error(y(188));
}
function nd(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Pt(e), t === null) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (r = o.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return Vu(o), e;
        if (i === r) return Vu(o), t;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) n = o, r = i;
    else {
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          l = !0, n = o, r = i;
          break;
        }
        if (u === r) {
          l = !0, r = o, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            l = !0, n = i, r = o;
            break;
          }
          if (u === r) {
            l = !0, r = i, n = o;
            break;
          }
          u = u.sibling;
        }
        if (!l) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Va(e) {
  if (e = nd(e), !e) return null;
  for (var t = e; ; ) {
    if (t.tag === 5 || t.tag === 6) return t;
    if (t.child) t.child.return = t, t = t.child;
    else {
      if (t === e) break;
      for (; !t.sibling; ) {
        if (!t.return || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return null;
}
function Wu(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var Wa, bl, Ha, Ka, Li = !1, xe = [], He = null, Ke = null, Qe = null, Xn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), yn = [], Hu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $i(e, t, n, r, o) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: o, targetContainers: [r] };
}
function Ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      He = null;
      break;
    case "dragenter":
    case "dragleave":
      Ke = null;
      break;
    case "mouseover":
    case "mouseout":
      Qe = null;
      break;
    case "pointerover":
    case "pointerout":
      Xn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Gn.delete(t.pointerId);
  }
}
function gn(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i ? (e = $i(t, n, r, o, i), t !== null && (t = hr(t), t !== null && bl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function rd(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return He = gn(He, e, t, n, r, o), !0;
    case "dragenter":
      return Ke = gn(Ke, e, t, n, r, o), !0;
    case "mouseover":
      return Qe = gn(Qe, e, t, n, r, o), !0;
    case "pointerover":
      var i = o.pointerId;
      return Xn.set(i, gn(Xn.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return i = o.pointerId, Gn.set(i, gn(Gn.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function od(e) {
  var t = ht(e.target);
  if (t !== null) {
    var n = Pt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ba(n), t !== null) {
          e.blockedOn = t, Ka(e.lanePriority, function() {
            K.unstable_runWithPriority(e.priority, function() {
              Ha(n);
            });
          });
          return;
        }
      } else if (t === 3 && n.stateNode.hydrate) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = hr(n), t !== null && bl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Qu(e, t, n) {
  Mr(e) && n.delete(t);
}
function id() {
  for (Li = !1; 0 < xe.length; ) {
    var e = xe[0];
    if (e.blockedOn !== null) {
      e = hr(e.blockedOn), e !== null && Wa(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Bl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && xe.shift();
  }
  He !== null && Mr(He) && (He = null), Ke !== null && Mr(Ke) && (Ke = null), Qe !== null && Mr(Qe) && (Qe = null), Xn.forEach(Qu), Gn.forEach(Qu);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Li || (Li = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, id)));
}
function Qa(e) {
  function t(o) {
    return wn(o, e);
  }
  if (0 < xe.length) {
    wn(xe[0], e);
    for (var n = 1; n < xe.length; n++) {
      var r = xe[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (He !== null && wn(He, e), Ke !== null && wn(Ke, e), Qe !== null && wn(Qe, e), Xn.forEach(t), Gn.forEach(t), n = 0; n < yn.length; n++) r = yn[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < yn.length && (n = yn[0], n.blockedOn === null); ) od(n), n.blockedOn === null && yn.shift();
}
function Cr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Mt = { animationend: Cr("Animation", "AnimationEnd"), animationiteration: Cr("Animation", "AnimationIteration"), animationstart: Cr("Animation", "AnimationStart"), transitionend: Cr("Transition", "TransitionEnd") }, Go = {}, Ya = {};
Me && (Ya = document.createElement("div").style, "AnimationEvent" in window || (delete Mt.animationend.animation, delete Mt.animationiteration.animation, delete Mt.animationstart.animation), "TransitionEvent" in window || delete Mt.transitionend.transition);
function No(e) {
  if (Go[e]) return Go[e];
  if (!Mt[e]) return e;
  var t = Mt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ya) return Go[e] = t[n];
  return e;
}
var Xa = No("animationend"), Ga = No("animationiteration"), Za = No("animationstart"), Ja = No("transitionend"), qa = /* @__PURE__ */ new Map(), Fl = /* @__PURE__ */ new Map(), ld = [
  "abort",
  "abort",
  Xa,
  "animationEnd",
  Ga,
  "animationIteration",
  Za,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  Ja,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Ul(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], o = e[n + 1];
    o = "on" + (o[0].toUpperCase() + o.slice(1)), Fl.set(r, t), qa.set(r, o), Ct(o, [r]);
  }
}
var ud = K.unstable_now;
ud();
var z = 8;
function Dt(e) {
  if (1 & e) return z = 15, 1;
  if (2 & e) return z = 14, 2;
  if (4 & e) return z = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (z = 12, t) : e & 32 ? (z = 11, 32) : (t = 192 & e, t !== 0 ? (z = 10, t) : e & 256 ? (z = 9, 256) : (t = 3584 & e, t !== 0 ? (z = 8, t) : e & 4096 ? (z = 7, 4096) : (t = 4186112 & e, t !== 0 ? (z = 6, t) : (t = 62914560 & e, t !== 0 ? (z = 5, t) : e & 67108864 ? (z = 4, 67108864) : e & 134217728 ? (z = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (z = 2, t) : 1073741824 & e ? (z = 1, 1073741824) : (z = 8, e))))));
}
function sd(e) {
  switch (e) {
    case 99:
      return 15;
    case 98:
      return 10;
    case 97:
    case 96:
      return 8;
    case 95:
      return 2;
    default:
      return 0;
  }
}
function ad(e) {
  switch (e) {
    case 15:
    case 14:
      return 99;
    case 13:
    case 12:
    case 11:
    case 10:
      return 98;
    case 9:
    case 8:
    case 7:
    case 6:
    case 4:
    case 5:
      return 97;
    case 3:
    case 2:
    case 1:
      return 95;
    case 0:
      return 90;
    default:
      throw Error(y(358, e));
  }
}
function Zn(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return z = 0;
  var r = 0, o = 0, i = e.expiredLanes, l = e.suspendedLanes, u = e.pingedLanes;
  if (i !== 0) r = i, o = z = 15;
  else if (i = n & 134217727, i !== 0) {
    var s = i & ~l;
    s !== 0 ? (r = Dt(s), o = z) : (u &= i, u !== 0 && (r = Dt(u), o = z));
  } else i = n & ~l, i !== 0 ? (r = Dt(i), o = z) : u !== 0 && (r = Dt(u), o = z);
  if (r === 0) return 0;
  if (r = 31 - et(r), r = n & ((0 > r ? 0 : 1 << r) << 1) - 1, t !== 0 && t !== r && !(t & l)) {
    if (Dt(t), o <= z) return t;
    z = o;
  }
  if (t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - et(t), o = 1 << n, r |= e[n], t &= ~o;
  return r;
}
function ef(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Gr(e, t) {
  switch (e) {
    case 15:
      return 1;
    case 14:
      return 2;
    case 12:
      return e = Lt(24 & ~t), e === 0 ? Gr(10, t) : e;
    case 10:
      return e = Lt(192 & ~t), e === 0 ? Gr(8, t) : e;
    case 8:
      return e = Lt(3584 & ~t), e === 0 && (e = Lt(4186112 & ~t), e === 0 && (e = 512)), e;
    case 2:
      return t = Lt(805306368 & ~t), t === 0 && (t = 268435456), t;
  }
  throw Error(y(358, e));
}
function Lt(e) {
  return e & -e;
}
function Zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ro(e, t, n) {
  e.pendingLanes |= t;
  var r = t - 1;
  e.suspendedLanes &= r, e.pingedLanes &= r, e = e.eventTimes, t = 31 - et(t), e[t] = n;
}
var et = Math.clz32 ? Math.clz32 : dd, fd = Math.log, cd = Math.LN2;
function dd(e) {
  return e === 0 ? 32 : 31 - (fd(e) / cd | 0) | 0;
}
var pd = K.unstable_UserBlockingPriority, md = K.unstable_runWithPriority, zr = !0;
function hd(e, t, n, r) {
  mt || zl();
  var o = Al, i = mt;
  mt = !0;
  try {
    Ua(o, e, t, n, r);
  } finally {
    (mt = i) || Il();
  }
}
function vd(e, t, n, r) {
  md(pd, Al.bind(null, e, t, n, r));
}
function Al(e, t, n, r) {
  if (zr) {
    var o;
    if ((o = (t & 4) === 0) && 0 < xe.length && -1 < Hu.indexOf(e)) e = $i(null, e, t, n, r), xe.push(e);
    else {
      var i = Bl(e, t, n, r);
      if (i === null) o && Ku(e, r);
      else {
        if (o) {
          if (-1 < Hu.indexOf(e)) {
            e = $i(i, e, t, n, r), xe.push(e);
            return;
          }
          if (rd(i, e, t, n, r)) return;
          Ku(e, r);
        }
        pf(e, t, r, null, n);
      }
    }
  }
}
function Bl(e, t, n, r) {
  var o = $l(r);
  if (o = ht(o), o !== null) {
    var i = Pt(o);
    if (i === null) o = null;
    else {
      var l = i.tag;
      if (l === 13) {
        if (o = Ba(i), o !== null) return o;
        o = null;
      } else if (l === 3) {
        if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
        o = null;
      } else i !== o && (o = null);
    }
  }
  return pf(e, t, r, o, n), null;
}
var Be = null, Vl = null, Ir = null;
function tf() {
  if (Ir) return Ir;
  var e, t = Vl, n = t.length, r, o = "value" in Be ? Be.value : Be.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Ir = o.slice(e, 1 < r ? 1 - r : void 0);
}
function br(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _r() {
  return !0;
}
function Yu() {
  return !1;
}
function ce(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _r : Yu, this.isPropagationStopped = Yu, this;
  }
  return F(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = _r);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = _r);
  }, persist: function() {
  }, isPersistent: _r }), t;
}
var sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Wl = ce(sn), mr = F({}, sn, { view: 0, detail: 0 }), yd = ce(mr), Jo, qo, En, Do = F({}, mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Hl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Jo = e.screenX - En.screenX, qo = e.screenY - En.screenY) : qo = Jo = 0, En = e), Jo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qo;
} }), Xu = ce(Do), gd = F({}, Do, { dataTransfer: 0 }), wd = ce(gd), Ed = F({}, mr, { relatedTarget: 0 }), ei = ce(Ed), Sd = F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Od = ce(Sd), xd = F({}, sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Cd = ce(xd), _d = F({}, sn, { data: 0 }), Gu = ce(_d), Pd = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, kd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Td = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Td[e]) ? !!t[e] : !1;
}
function Hl() {
  return jd;
}
var Nd = F({}, mr, { key: function(e) {
  if (e.key) {
    var t = Pd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kd[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Hl, charCode: function(e) {
  return e.type === "keypress" ? br(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rd = ce(Nd), Dd = F({}, Do, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Zu = ce(Dd), Ld = F({}, mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Hl }), $d = ce(Ld), Md = F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), zd = ce(Md), Id = F({}, Do, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bd = ce(Id), Fd = [9, 13, 27, 32], Kl = Me && "CompositionEvent" in window, bn = null;
Me && "documentMode" in document && (bn = document.documentMode);
var Ud = Me && "TextEvent" in window && !bn, nf = Me && (!Kl || bn && 8 < bn && 11 >= bn), Ju = " ", qu = !1;
function rf(e, t) {
  switch (e) {
    case "keyup":
      return Fd.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function of(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zt = !1;
function Ad(e, t) {
  switch (e) {
    case "compositionend":
      return of(t);
    case "keypress":
      return t.which !== 32 ? null : (qu = !0, Ju);
    case "textInput":
      return e = t.data, e === Ju && qu ? null : e;
    default:
      return null;
  }
}
function Bd(e, t) {
  if (zt) return e === "compositionend" || !Kl && rf(e, t) ? (e = tf(), Ir = Vl = Be = null, zt = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return nf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function es(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vd[e.type] : t === "textarea";
}
function lf(e, t, n, r) {
  ba(r), t = Zr(t, "onChange"), 0 < t.length && (n = new Wl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Fn = null, Jn = null;
function Wd(e) {
  ff(e, 0);
}
function Lo(e) {
  var t = bt(e);
  if (Ra(t)) return e;
}
function Hd(e, t) {
  if (e === "change") return t;
}
var uf = !1;
if (Me) {
  var ti;
  if (Me) {
    var ni = "oninput" in document;
    if (!ni) {
      var ts = document.createElement("div");
      ts.setAttribute("oninput", "return;"), ni = typeof ts.oninput == "function";
    }
    ti = ni;
  } else ti = !1;
  uf = ti && (!document.documentMode || 9 < document.documentMode);
}
function ns() {
  Fn && (Fn.detachEvent("onpropertychange", sf), Jn = Fn = null);
}
function sf(e) {
  if (e.propertyName === "value" && Lo(Jn)) {
    var t = [];
    if (lf(t, Jn, e, $l(e)), e = Wd, mt) e(t);
    else {
      mt = !0;
      try {
        Ml(e, t);
      } finally {
        mt = !1, Il();
      }
    }
  }
}
function Kd(e, t, n) {
  e === "focusin" ? (ns(), Fn = t, Jn = n, Fn.attachEvent("onpropertychange", sf)) : e === "focusout" && ns();
}
function Qd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Lo(Jn);
}
function Yd(e, t) {
  if (e === "click") return Lo(t);
}
function Xd(e, t) {
  if (e === "input" || e === "change") return Lo(t);
}
function Gd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pe = typeof Object.is == "function" ? Object.is : Gd, Zd = Object.prototype.hasOwnProperty;
function qn(e, t) {
  if (pe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!Zd.call(t, n[r]) || !pe(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function rs(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function os(e, t) {
  var n = rs(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = rs(n);
  }
}
function af(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? af(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function is() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function Mi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
var Jd = Me && "documentMode" in document && 11 >= document.documentMode, It = null, zi = null, Un = null, Ii = !1;
function ls(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii || It == null || It !== Qr(r) || (r = It, "selectionStart" in r && Mi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Un && qn(Un, r) || (Un = r, r = Zr(zi, "onSelect"), 0 < r.length && (t = new Wl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = It)));
}
Ul(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Ul("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Ul(ld, 2);
for (var us = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ri = 0; ri < us.length; ri++) Fl.set(us[ri], 0);
Zt("onMouseEnter", ["mouseout", "mouseover"]);
Zt("onMouseLeave", ["mouseout", "mouseover"]);
Zt("onPointerEnter", ["pointerout", "pointerover"]);
Zt("onPointerLeave", ["pointerout", "pointerover"]);
Ct("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ct("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ct("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ct("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ct("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ct("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), qd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function ss(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, td(r, t, void 0, e), e.currentTarget = null;
}
function ff(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        ss(o, u, a), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        ss(o, u, a), i = s;
      }
    }
  }
  if (Xr) throw e = Di, Xr = !1, Di = null, e;
}
function I(e, t) {
  var n = hf(t), r = e + "__bubble";
  n.has(r) || (df(t, e, 2, !1), n.add(r));
}
var as = "_reactListening" + Math.random().toString(36).slice(2);
function cf(e) {
  e[as] || (e[as] = !0, Ta.forEach(function(t) {
    qd.has(t) || fs(t, !1, e, null), fs(t, !0, e, null);
  }));
}
function fs(e, t, n, r) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = n;
  e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument);
  var l = hf(i), u = e + "__" + (t ? "capture" : "bubble");
  l.has(u) || (t && (o |= 4), df(i, e, o, t), l.add(u));
}
function df(e, t, n, r) {
  var o = Fl.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = hd;
      break;
    case 1:
      o = vd;
      break;
    default:
      o = Al;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function pf(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var l = r.tag;
    if (l === 3 || l === 4) {
      var u = r.stateNode.containerInfo;
      if (u === o || u.nodeType === 8 && u.parentNode === o) break;
      if (l === 4) for (l = r.return; l !== null; ) {
        var s = l.tag;
        if ((s === 3 || s === 4) && (s = l.stateNode.containerInfo, s === o || s.nodeType === 8 && s.parentNode === o)) return;
        l = l.return;
      }
      for (; u !== null; ) {
        if (l = ht(u), l === null) return;
        if (s = l.tag, s === 5 || s === 6) {
          r = i = l;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Zc(function() {
    var a = i, p = $l(n), w = [];
    e: {
      var m = qa.get(e);
      if (m !== void 0) {
        var E = Wl, x = e;
        switch (e) {
          case "keypress":
            if (br(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Rd;
            break;
          case "focusin":
            x = "focus", E = ei;
            break;
          case "focusout":
            x = "blur", E = ei;
            break;
          case "beforeblur":
          case "afterblur":
            E = ei;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = wd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = $d;
            break;
          case Xa:
          case Ga:
          case Za:
            E = Od;
            break;
          case Ja:
            E = zd;
            break;
          case "scroll":
            E = yd;
            break;
          case "wheel":
            E = bd;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Cd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Zu;
        }
        var _ = (t & 4) !== 0, c = !_ && e === "scroll", f = _ ? m !== null ? m + "Capture" : null : m;
        _ = [];
        for (var d = a, v; d !== null; ) {
          v = d;
          var h = v.stateNode;
          if (v.tag === 5 && h !== null && (v = h, f !== null && (h = Yn(d, f), h != null && _.push(er(d, h, v)))), c) break;
          d = d.return;
        }
        0 < _.length && (m = new E(m, x, null, n, p), w.push({ event: m, listeners: _ }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (m = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", m && !(t & 16) && (x = n.relatedTarget || n.fromElement) && (ht(x) || x[an])) break e;
        if ((E || m) && (m = p.window === p ? p : (m = p.ownerDocument) ? m.defaultView || m.parentWindow : window, E ? (x = n.relatedTarget || n.toElement, E = a, x = x ? ht(x) : null, x !== null && (c = Pt(x), x !== c || x.tag !== 5 && x.tag !== 6) && (x = null)) : (E = null, x = a), E !== x)) {
          if (_ = Xu, h = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Zu, h = "onPointerLeave", f = "onPointerEnter", d = "pointer"), c = E == null ? m : bt(E), v = x == null ? m : bt(x), m = new _(h, d + "leave", E, n, p), m.target = c, m.relatedTarget = v, h = null, ht(p) === a && (_ = new _(f, d + "enter", x, n, p), _.target = v, _.relatedTarget = c, h = _), c = h, E && x) t: {
            for (_ = E, f = x, d = 0, v = _; v; v = jt(v)) d++;
            for (v = 0, h = f; h; h = jt(h)) v++;
            for (; 0 < d - v; ) _ = jt(_), d--;
            for (; 0 < v - d; ) f = jt(f), v--;
            for (; d--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = jt(_), f = jt(f);
            }
            _ = null;
          }
          else _ = null;
          E !== null && cs(w, m, E, _, !1), x !== null && c !== null && cs(w, c, x, _, !0);
        }
      }
      e: {
        if (m = a ? bt(a) : window, E = m.nodeName && m.nodeName.toLowerCase(), E === "select" || E === "input" && m.type === "file") var T = Hd;
        else if (es(m)) if (uf) T = Xd;
        else {
          T = Qd;
          var S = Kd;
        }
        else (E = m.nodeName) && E.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (T = Yd);
        if (T && (T = T(e, a))) {
          lf(w, T, n, p);
          break e;
        }
        S && S(e, m, a), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && xi(m, "number", m.value);
      }
      switch (S = a ? bt(a) : window, e) {
        case "focusin":
          (es(S) || S.contentEditable === "true") && (It = S, zi = a, Un = null);
          break;
        case "focusout":
          Un = zi = It = null;
          break;
        case "mousedown":
          Ii = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ii = !1, ls(w, n, p);
          break;
        case "selectionchange":
          if (Jd) break;
        case "keydown":
        case "keyup":
          ls(w, n, p);
      }
      var j;
      if (Kl) e: {
        switch (e) {
          case "compositionstart":
            var D = "onCompositionStart";
            break e;
          case "compositionend":
            D = "onCompositionEnd";
            break e;
          case "compositionupdate":
            D = "onCompositionUpdate";
            break e;
        }
        D = void 0;
      }
      else zt ? rf(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D && (nf && n.locale !== "ko" && (zt || D !== "onCompositionStart" ? D === "onCompositionEnd" && zt && (j = tf()) : (Be = p, Vl = "value" in Be ? Be.value : Be.textContent, zt = !0)), S = Zr(a, D), 0 < S.length && (D = new Gu(D, e, null, n, p), w.push({ event: D, listeners: S }), j ? D.data = j : (j = of(n), j !== null && (D.data = j)))), (j = Ud ? Ad(e, n) : Bd(e, n)) && (a = Zr(a, "onBeforeInput"), 0 < a.length && (p = new Gu(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        p
      ), w.push({ event: p, listeners: a }), p.data = j));
    }
    ff(w, t);
  });
}
function er(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e, i = o.stateNode;
    o.tag === 5 && i !== null && (o = i, i = Yn(e, n), i != null && r.unshift(er(e, i, o)), i = Yn(e, t), i != null && r.push(er(e, i, o))), e = e.return;
  }
  return r;
}
function jt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cs(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && a !== null && (u = a, o ? (s = Yn(n, i), s != null && l.unshift(er(n, s, u))) : o || (s = Yn(n, i), s != null && l.push(er(n, s, u)))), n = n.return;
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
function Jr() {
}
var oi = null, ii = null;
function mf(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function bi(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var ds = typeof setTimeout == "function" ? setTimeout : void 0, ep = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Ql(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function ps(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var li = 0;
function tp(e) {
  return { $$typeof: Dl, toString: e, valueOf: e };
}
var $o = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + $o, qr = "__reactProps$" + $o, an = "__reactContainer$" + $o, ms = "__reactEvents$" + $o;
function ht(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[an] || n[Ve]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ps(e); e !== null; ) {
        if (n = e[Ve]) return n;
        e = ps(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function hr(e) {
  return e = e[Ve] || e[an], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function bt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Mo(e) {
  return e[qr] || null;
}
function hf(e) {
  var t = e[ms];
  return t === void 0 && (t = e[ms] = /* @__PURE__ */ new Set()), t;
}
var Fi = [], Ft = -1;
function ot(e) {
  return { current: e };
}
function b(e) {
  0 > Ft || (e.current = Fi[Ft], Fi[Ft] = null, Ft--);
}
function A(e, t) {
  Ft++, Fi[Ft] = e.current, e.current = t;
}
var tt = {}, re = ot(tt), se = ot(!1), St = tt;
function Jt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {}, i;
  for (i in n) o[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
}
function ae(e) {
  return e = e.childContextTypes, e != null;
}
function eo() {
  b(se), b(re);
}
function hs(e, t, n) {
  if (re.current !== tt) throw Error(y(168));
  A(re, t), A(se, n);
}
function vf(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(y(108, At(t) || "Unknown", o));
  return F({}, n, r);
}
function Fr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tt, St = re.current, A(re, e), A(se, se.current), !0;
}
function vs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = vf(e, t, St), r.__reactInternalMemoizedMergedChildContext = e, b(se), b(re), A(re, e)) : b(se), A(se, n);
}
var Yl = null, Et = null, np = K.unstable_runWithPriority, Xl = K.unstable_scheduleCallback, Ui = K.unstable_cancelCallback, rp = K.unstable_shouldYield, ys = K.unstable_requestPaint, Ai = K.unstable_now, op = K.unstable_getCurrentPriorityLevel, zo = K.unstable_ImmediatePriority, yf = K.unstable_UserBlockingPriority, gf = K.unstable_NormalPriority, wf = K.unstable_LowPriority, Ef = K.unstable_IdlePriority, ui = {}, ip = ys !== void 0 ? ys : function() {
}, Ne = null, Ur = null, si = !1, gs = Ai(), te = 1e4 > gs ? Ai : function() {
  return Ai() - gs;
};
function qt() {
  switch (op()) {
    case zo:
      return 99;
    case yf:
      return 98;
    case gf:
      return 97;
    case wf:
      return 96;
    case Ef:
      return 95;
    default:
      throw Error(y(332));
  }
}
function Sf(e) {
  switch (e) {
    case 99:
      return zo;
    case 98:
      return yf;
    case 97:
      return gf;
    case 96:
      return wf;
    case 95:
      return Ef;
    default:
      throw Error(y(332));
  }
}
function Ot(e, t) {
  return e = Sf(e), np(e, t);
}
function tr(e, t, n) {
  return e = Sf(e), Xl(e, t, n);
}
function je() {
  if (Ur !== null) {
    var e = Ur;
    Ur = null, Ui(e);
  }
  Of();
}
function Of() {
  if (!si && Ne !== null) {
    si = !0;
    var e = 0;
    try {
      var t = Ne;
      Ot(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), Ne = null;
    } catch (n) {
      throw Ne !== null && (Ne = Ne.slice(e + 1)), Xl(zo, je), n;
    } finally {
      si = !1;
    }
  }
}
var lp = _t.ReactCurrentBatchConfig;
function Ee(e, t) {
  if (e && e.defaultProps) {
    t = F({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var to = ot(null), no = null, Ut = null, ro = null;
function Gl() {
  ro = Ut = no = null;
}
function Zl(e) {
  var t = to.current;
  b(to), e.type._context._currentValue = t;
}
function xf(e, t) {
  for (; e !== null; ) {
    var n = e.alternate;
    if ((e.childLanes & t) === t) {
      if (n === null || (n.childLanes & t) === t) break;
      n.childLanes |= t;
    } else e.childLanes |= t, n !== null && (n.childLanes |= t);
    e = e.return;
  }
}
function Kt(e, t) {
  no = e, ro = Ut = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Se = !0), e.firstContext = null);
}
function ve(e, t) {
  if (ro !== e && t !== !1 && t !== 0)
    if ((typeof t != "number" || t === 1073741823) && (ro = e, t = 1073741823), t = { context: e, observedBits: t, next: null }, Ut === null) {
      if (no === null) throw Error(y(308));
      Ut = t, no.dependencies = { lanes: 0, firstContext: t, responders: null };
    } else Ut = Ut.next = t;
  return e._currentValue;
}
var be = !1;
function Jl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function Cf(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ye(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Xe(e, t) {
  if (e = e.updateQueue, e !== null) {
    e = e.shared;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
}
function ws(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var o = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var l = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? o = i = l : i = i.next = l, n = n.next;
      } while (n !== null);
      i === null ? o = i = t : i = i.next = t;
    } else o = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function nr(e, t, n, r) {
  var o = e.updateQueue;
  be = !1;
  var i = o.firstBaseUpdate, l = o.lastBaseUpdate, u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u, a = s.next;
    s.next = null, l === null ? i = a : l.next = a, l = s;
    var p = e.alternate;
    if (p !== null) {
      p = p.updateQueue;
      var w = p.lastBaseUpdate;
      w !== l && (w === null ? p.firstBaseUpdate = a : w.next = a, p.lastBaseUpdate = s);
    }
  }
  if (i !== null) {
    w = o.baseState, l = 0, p = a = s = null;
    do {
      u = i.lane;
      var m = i.eventTime;
      if ((r & u) === u) {
        p !== null && (p = p.next = {
          eventTime: m,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var E = e, x = i;
          switch (u = t, m = n, x.tag) {
            case 1:
              if (E = x.payload, typeof E == "function") {
                w = E.call(m, w, u);
                break e;
              }
              w = E;
              break e;
            case 3:
              E.flags = E.flags & -4097 | 64;
            case 0:
              if (E = x.payload, u = typeof E == "function" ? E.call(m, w, u) : E, u == null) break e;
              w = F({}, w, u);
              break e;
            case 2:
              be = !0;
          }
        }
        i.callback !== null && (e.flags |= 32, u = o.effects, u === null ? o.effects = [i] : u.push(i));
      } else m = { eventTime: m, lane: u, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, p === null ? (a = p = m, s = w) : p = p.next = m, l |= u;
      if (i = i.next, i === null) {
        if (u = o.shared.pending, u === null) break;
        i = u.next, u.next = null, o.lastBaseUpdate = u, o.shared.pending = null;
      }
    } while (!0);
    p === null && (s = w), o.baseState = s, o.firstBaseUpdate = a, o.lastBaseUpdate = p, yr |= l, e.lanes = l, e.memoizedState = w;
  }
}
function Es(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(y(191, o));
      o.call(r);
    }
  }
}
var _f = new ko.Component().refs;
function oo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : F({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Io = { isMounted: function(e) {
  return (e = e._reactInternals) ? Pt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), o = Ge(e), i = Ye(r, o);
  i.payload = t, n != null && (i.callback = n), Xe(e, i), Ze(e, o, r);
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), o = Ge(e), i = Ye(r, o);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), Xe(e, i), Ze(e, o, r);
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = fe(), r = Ge(e), o = Ye(n, r);
  o.tag = 2, t != null && (o.callback = t), Xe(e, o), Ze(e, r, n);
} };
function Ss(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(o, i) : !0;
}
function Pf(e, t, n) {
  var r = !1, o = tt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ve(i) : (o = ae(t) ? St : re.current, r = t.contextTypes, i = (r = r != null) ? Jt(e, o) : tt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Os(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = _f, Jl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ve(i) : (i = ae(t) ? St : re.current, o.context = Jt(e, i)), nr(e, n, o, r), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (oo(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Io.enqueueReplaceState(o, o.state, null), nr(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4);
}
var Pr = Array.isArray;
function Sn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var l = r.refs;
        l === _f && (l = r.refs = {}), i === null ? delete l[o] : l[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function kr(e, t) {
  if (e.type !== "textarea") throw Error(y(31, Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t));
}
function kf(e) {
  function t(c, f) {
    if (e) {
      var d = c.lastEffect;
      d !== null ? (d.nextEffect = f, c.lastEffect = f) : c.firstEffect = c.lastEffect = f, f.nextEffect = null, f.flags = 8;
    }
  }
  function n(c, f) {
    if (!e) return null;
    for (; f !== null; ) t(c, f), f = f.sibling;
    return null;
  }
  function r(c, f) {
    for (c = /* @__PURE__ */ new Map(); f !== null; ) f.key !== null ? c.set(f.key, f) : c.set(f.index, f), f = f.sibling;
    return c;
  }
  function o(c, f) {
    return c = rt(c, f), c.index = 0, c.sibling = null, c;
  }
  function i(c, f, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < f ? (c.flags = 2, f) : d) : (c.flags = 2, f)) : f;
  }
  function l(c) {
    return e && c.alternate === null && (c.flags = 2), c;
  }
  function u(c, f, d, v) {
    return f === null || f.tag !== 6 ? (f = pi(d, c.mode, v), f.return = c, f) : (f = o(f, d), f.return = c, f);
  }
  function s(c, f, d, v) {
    return f !== null && f.elementType === d.type ? (v = o(f, d.props), v.ref = Sn(c, f, d), v.return = c, v) : (v = Wr(d.type, d.key, d.props, null, c.mode, v), v.ref = Sn(c, f, d), v.return = c, v);
  }
  function a(c, f, d, v) {
    return f === null || f.tag !== 4 || f.stateNode.containerInfo !== d.containerInfo || f.stateNode.implementation !== d.implementation ? (f = mi(d, c.mode, v), f.return = c, f) : (f = o(f, d.children || []), f.return = c, f);
  }
  function p(c, f, d, v, h) {
    return f === null || f.tag !== 7 ? (f = Gt(d, c.mode, v, h), f.return = c, f) : (f = o(f, d), f.return = c, f);
  }
  function w(c, f, d) {
    if (typeof f == "string" || typeof f == "number") return f = pi("" + f, c.mode, d), f.return = c, f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kn:
          return d = Wr(f.type, f.key, f.props, null, c.mode, d), d.ref = Sn(c, null, f), d.return = c, d;
        case pt:
          return f = mi(f, c.mode, d), f.return = c, f;
      }
      if (Pr(f) || hn(f)) return f = Gt(
        f,
        c.mode,
        d,
        null
      ), f.return = c, f;
      kr(c, f);
    }
    return null;
  }
  function m(c, f, d, v) {
    var h = f !== null ? f.key : null;
    if (typeof d == "string" || typeof d == "number") return h !== null ? null : u(c, f, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case kn:
          return d.key === h ? d.type === Ae ? p(c, f, d.props.children, v, h) : s(c, f, d, v) : null;
        case pt:
          return d.key === h ? a(c, f, d, v) : null;
      }
      if (Pr(d) || hn(d)) return h !== null ? null : p(c, f, d, v, null);
      kr(c, d);
    }
    return null;
  }
  function E(c, f, d, v, h) {
    if (typeof v == "string" || typeof v == "number") return c = c.get(d) || null, u(f, c, "" + v, h);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case kn:
          return c = c.get(v.key === null ? d : v.key) || null, v.type === Ae ? p(f, c, v.props.children, h, v.key) : s(f, c, v, h);
        case pt:
          return c = c.get(v.key === null ? d : v.key) || null, a(f, c, v, h);
      }
      if (Pr(v) || hn(v)) return c = c.get(d) || null, p(f, c, v, h, null);
      kr(f, v);
    }
    return null;
  }
  function x(c, f, d, v) {
    for (var h = null, T = null, S = f, j = f = 0, D = null; S !== null && j < d.length; j++) {
      S.index > j ? (D = S, S = null) : D = S.sibling;
      var k = m(c, S, d[j], v);
      if (k === null) {
        S === null && (S = D);
        break;
      }
      e && S && k.alternate === null && t(c, S), f = i(k, f, j), T === null ? h = k : T.sibling = k, T = k, S = D;
    }
    if (j === d.length) return n(c, S), h;
    if (S === null) {
      for (; j < d.length; j++) S = w(c, d[j], v), S !== null && (f = i(S, f, j), T === null ? h = S : T.sibling = S, T = S);
      return h;
    }
    for (S = r(c, S); j < d.length; j++) D = E(S, c, j, d[j], v), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? j : D.key), f = i(D, f, j), T === null ? h = D : T.sibling = D, T = D);
    return e && S.forEach(function(Q) {
      return t(c, Q);
    }), h;
  }
  function _(c, f, d, v) {
    var h = hn(d);
    if (typeof h != "function") throw Error(y(150));
    if (d = h.call(d), d == null) throw Error(y(151));
    for (var T = h = null, S = f, j = f = 0, D = null, k = d.next(); S !== null && !k.done; j++, k = d.next()) {
      S.index > j ? (D = S, S = null) : D = S.sibling;
      var Q = m(c, S, k.value, v);
      if (Q === null) {
        S === null && (S = D);
        break;
      }
      e && S && Q.alternate === null && t(c, S), f = i(Q, f, j), T === null ? h = Q : T.sibling = Q, T = Q, S = D;
    }
    if (k.done) return n(c, S), h;
    if (S === null) {
      for (; !k.done; j++, k = d.next()) k = w(c, k.value, v), k !== null && (f = i(k, f, j), T === null ? h = k : T.sibling = k, T = k);
      return h;
    }
    for (S = r(c, S); !k.done; j++, k = d.next()) k = E(S, c, j, k.value, v), k !== null && (e && k.alternate !== null && S.delete(k.key === null ? j : k.key), f = i(k, f, j), T === null ? h = k : T.sibling = k, T = k);
    return e && S.forEach(function(Bo) {
      return t(c, Bo);
    }), h;
  }
  return function(c, f, d, v) {
    var h = typeof d == "object" && d !== null && d.type === Ae && d.key === null;
    h && (d = d.props.children);
    var T = typeof d == "object" && d !== null;
    if (T) switch (d.$$typeof) {
      case kn:
        e: {
          for (T = d.key, h = f; h !== null; ) {
            if (h.key === T) {
              switch (h.tag) {
                case 7:
                  if (d.type === Ae) {
                    n(c, h.sibling), f = o(h, d.props.children), f.return = c, c = f;
                    break e;
                  }
                  break;
                default:
                  if (h.elementType === d.type) {
                    n(c, h.sibling), f = o(h, d.props), f.ref = Sn(c, h, d), f.return = c, c = f;
                    break e;
                  }
              }
              n(c, h);
              break;
            } else t(c, h);
            h = h.sibling;
          }
          d.type === Ae ? (f = Gt(d.props.children, c.mode, v, d.key), f.return = c, c = f) : (v = Wr(d.type, d.key, d.props, null, c.mode, v), v.ref = Sn(c, f, d), v.return = c, c = v);
        }
        return l(c);
      case pt:
        e: {
          for (h = d.key; f !== null; ) {
            if (f.key === h) if (f.tag === 4 && f.stateNode.containerInfo === d.containerInfo && f.stateNode.implementation === d.implementation) {
              n(c, f.sibling), f = o(f, d.children || []), f.return = c, c = f;
              break e;
            } else {
              n(c, f);
              break;
            }
            else t(c, f);
            f = f.sibling;
          }
          f = mi(d, c.mode, v), f.return = c, c = f;
        }
        return l(c);
    }
    if (typeof d == "string" || typeof d == "number") return d = "" + d, f !== null && f.tag === 6 ? (n(c, f.sibling), f = o(f, d), f.return = c, c = f) : (n(c, f), f = pi(d, c.mode, v), f.return = c, c = f), l(c);
    if (Pr(d)) return x(c, f, d, v);
    if (hn(d)) return _(c, f, d, v);
    if (T && kr(c, d), typeof d > "u" && !h) switch (c.tag) {
      case 1:
      case 22:
      case 0:
      case 11:
      case 15:
        throw Error(y(152, At(c.type) || "Component"));
    }
    return n(c, f);
  };
}
var io = kf(!0), Tf = kf(!1), vr = {}, Pe = ot(vr), rr = ot(vr), or = ot(vr);
function vt(e) {
  if (e === vr) throw Error(y(174));
  return e;
}
function Vi(e, t) {
  switch (A(or, t), A(rr, e), A(Pe, vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e);
  }
  b(Pe), A(Pe, t);
}
function en() {
  b(Pe), b(rr), b(or);
}
function xs(e) {
  vt(or.current);
  var t = vt(Pe.current), n = ki(t, e.type);
  t !== n && (A(rr, e), A(Pe, n));
}
function ql(e) {
  rr.current === e && (b(Pe), b(rr));
}
var U = ot(0);
function lo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 64) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var De = null, We = null, ke = !1;
function jf(e, t) {
  var n = me(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function Cs(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, !0) : !1;
    case 13:
      return !1;
    default:
      return !1;
  }
}
function Wi(e) {
  if (ke) {
    var t = We;
    if (t) {
      var n = t;
      if (!Cs(e, t)) {
        if (t = Ht(n.nextSibling), !t || !Cs(e, t)) {
          e.flags = e.flags & -1025 | 2, ke = !1, De = e;
          return;
        }
        jf(De, n);
      }
      De = e, We = Ht(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, ke = !1, De = e;
  }
}
function _s(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Tr(e) {
  if (e !== De) return !1;
  if (!ke) return _s(e), ke = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !bi(t, e.memoizedProps)) for (t = We; t; ) jf(e, t), t = Ht(t.nextSibling);
  if (_s(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = De ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function ai() {
  We = De = null, ke = !1;
}
var Qt = [];
function eu() {
  for (var e = 0; e < Qt.length; e++) Qt[e]._workInProgressVersionPrimary = null;
  Qt.length = 0;
}
var An = _t.ReactCurrentDispatcher, he = _t.ReactCurrentBatchConfig, ir = 0, V = null, ee = null, X = null, uo = !1, Bn = !1;
function le() {
  throw Error(y(321));
}
function tu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pe(e[n], t[n])) return !1;
  return !0;
}
function nu(e, t, n, r, o, i) {
  if (ir = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, An.current = e === null || e.memoizedState === null ? sp : ap, e = n(r, o), Bn) {
    i = 0;
    do {
      if (Bn = !1, !(25 > i)) throw Error(y(301));
      i += 1, X = ee = null, t.updateQueue = null, An.current = fp, e = n(r, o);
    } while (Bn);
  }
  if (An.current = co, t = ee !== null && ee.next !== null, ir = 0, X = ee = V = null, uo = !1, t) throw Error(y(300));
  return e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? V.memoizedState = X = e : X = X.next = e, X;
}
function kt() {
  if (ee === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ee.next;
  var t = X === null ? V.memoizedState : X.next;
  if (t !== null) X = t, ee = e;
  else {
    if (e === null) throw Error(y(310));
    ee = e, e = { memoizedState: ee.memoizedState, baseState: ee.baseState, baseQueue: ee.baseQueue, queue: ee.queue, next: null }, X === null ? V.memoizedState = X = e : X = X.next = e;
  }
  return X;
}
function Ce(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function On(e) {
  var t = kt(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = ee, o = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      o.next = i.next, i.next = l;
    }
    r.baseQueue = o = i, n.pending = null;
  }
  if (o !== null) {
    o = o.next, r = r.baseState;
    var u = l = i = null, s = o;
    do {
      var a = s.lane;
      if ((ir & a) === a) u !== null && (u = u.next = { lane: 0, action: s.action, eagerReducer: s.eagerReducer, eagerState: s.eagerState, next: null }), r = s.eagerReducer === e ? s.eagerState : e(r, s.action);
      else {
        var p = {
          lane: a,
          action: s.action,
          eagerReducer: s.eagerReducer,
          eagerState: s.eagerState,
          next: null
        };
        u === null ? (l = u = p, i = r) : u = u.next = p, V.lanes |= a, yr |= a;
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? i = r : u.next = l, pe(r, t.memoizedState) || (Se = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = u, n.lastRenderedState = r;
  }
  return [t.memoizedState, n.dispatch];
}
function xn(e) {
  var t = kt(), n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, o = n.pending, i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = o = o.next;
    do
      i = e(i, l.action), l = l.next;
    while (l !== o);
    pe(i, t.memoizedState) || (Se = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ps(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var o = t._workInProgressVersionPrimary;
  if (o !== null ? e = o === r : (e = e.mutableReadLanes, (e = (ir & e) === e) && (t._workInProgressVersionPrimary = r, Qt.push(t))), e) return n(t._source);
  throw Qt.push(t), Error(y(350));
}
function Nf(e, t, n, r) {
  var o = oe;
  if (o === null) throw Error(y(349));
  var i = t._getVersion, l = i(t._source), u = An.current, s = u.useState(function() {
    return Ps(o, t, n);
  }), a = s[1], p = s[0];
  s = X;
  var w = e.memoizedState, m = w.refs, E = m.getSnapshot, x = w.source;
  w = w.subscribe;
  var _ = V;
  return e.memoizedState = { refs: m, source: t, subscribe: r }, u.useEffect(function() {
    m.getSnapshot = n, m.setSnapshot = a;
    var c = i(t._source);
    if (!pe(l, c)) {
      c = n(t._source), pe(p, c) || (a(c), c = Ge(_), o.mutableReadLanes |= c & o.pendingLanes), c = o.mutableReadLanes, o.entangledLanes |= c;
      for (var f = o.entanglements, d = c; 0 < d; ) {
        var v = 31 - et(d), h = 1 << v;
        f[v] |= c, d &= ~h;
      }
    }
  }, [n, t, r]), u.useEffect(function() {
    return r(t._source, function() {
      var c = m.getSnapshot, f = m.setSnapshot;
      try {
        f(c(t._source));
        var d = Ge(_);
        o.mutableReadLanes |= d & o.pendingLanes;
      } catch (v) {
        f(function() {
          throw v;
        });
      }
    });
  }, [t, r]), pe(E, n) && pe(x, t) && pe(w, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: Ce, lastRenderedState: p }, e.dispatch = a = iu.bind(null, V, e), s.queue = e, s.baseQueue = null, p = Ps(o, t, n), s.memoizedState = s.baseState = p), p;
}
function Rf(e, t, n) {
  var r = kt();
  return Nf(r, e, t, n);
}
function Cn(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Ce, lastRenderedState: e }, e = e.dispatch = iu.bind(null, V, e), [t.memoizedState, e];
}
function so(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function ks(e) {
  var t = yt();
  return e = { current: e }, t.memoizedState = e;
}
function ao() {
  return kt().memoizedState;
}
function Hi(e, t, n, r) {
  var o = yt();
  V.flags |= e, o.memoizedState = so(1 | t, n, void 0, r === void 0 ? null : r);
}
function ru(e, t, n, r) {
  var o = kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ee !== null) {
    var l = ee.memoizedState;
    if (i = l.destroy, r !== null && tu(r, l.deps)) {
      so(t, n, i, r);
      return;
    }
  }
  V.flags |= e, o.memoizedState = so(1 | t, n, i, r);
}
function Ts(e, t) {
  return Hi(516, 4, e, t);
}
function fo(e, t) {
  return ru(516, 4, e, t);
}
function Df(e, t) {
  return ru(4, 2, e, t);
}
function Lf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function $f(e, t, n) {
  return n = n != null ? n.concat([e]) : null, ru(4, 2, Lf.bind(null, t, e), n);
}
function ou() {
}
function Mf(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function zf(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && tu(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function up(e, t) {
  var n = qt();
  Ot(98 > n ? 98 : n, function() {
    e(!0);
  }), Ot(97 < n ? 97 : n, function() {
    var r = he.transition;
    he.transition = 1;
    try {
      e(!1), t();
    } finally {
      he.transition = r;
    }
  });
}
function iu(e, t, n) {
  var r = fe(), o = Ge(e), i = { lane: o, action: n, eagerReducer: null, eagerState: null, next: null }, l = t.pending;
  if (l === null ? i.next = i : (i.next = l.next, l.next = i), t.pending = i, l = e.alternate, e === V || l !== null && l === V) Bn = uo = !0;
  else {
    if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
      var u = t.lastRenderedState, s = l(u, n);
      if (i.eagerReducer = l, i.eagerState = s, pe(s, u)) return;
    } catch {
    } finally {
    }
    Ze(e, o, r);
  }
}
var co = { readContext: ve, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useOpaqueIdentifier: le, unstable_isNewReconciler: !1 }, sp = { readContext: ve, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ve, useEffect: Ts, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hi(4, 2, Lf.bind(
    null,
    t,
    e
  ), n);
}, useLayoutEffect: function(e, t) {
  return Hi(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = yt();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = yt();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = iu.bind(null, V, e), [r.memoizedState, e];
}, useRef: ks, useState: Cn, useDebugValue: ou, useDeferredValue: function(e) {
  var t = Cn(e), n = t[0], r = t[1];
  return Ts(function() {
    var o = he.transition;
    he.transition = 1;
    try {
      r(e);
    } finally {
      he.transition = o;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = Cn(!1), t = e[0];
  return e = up.bind(null, e[1]), ks(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = yt();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, Nf(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (ke) {
    var e = !1, t = tp(function() {
      throw e || (e = !0, n("r:" + (li++).toString(36))), Error(y(355));
    }), n = Cn(t)[1];
    return !(V.mode & 2) && (V.flags |= 516, so(
      5,
      function() {
        n("r:" + (li++).toString(36));
      },
      void 0,
      null
    )), t;
  }
  return t = "r:" + (li++).toString(36), Cn(t), t;
}, unstable_isNewReconciler: !1 }, ap = { readContext: ve, useCallback: Mf, useContext: ve, useEffect: fo, useImperativeHandle: $f, useLayoutEffect: Df, useMemo: zf, useReducer: On, useRef: ao, useState: function() {
  return On(Ce);
}, useDebugValue: ou, useDeferredValue: function(e) {
  var t = On(Ce), n = t[0], r = t[1];
  return fo(function() {
    var o = he.transition;
    he.transition = 1;
    try {
      r(e);
    } finally {
      he.transition = o;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = On(Ce)[0];
  return [
    ao().current,
    e
  ];
}, useMutableSource: Rf, useOpaqueIdentifier: function() {
  return On(Ce)[0];
}, unstable_isNewReconciler: !1 }, fp = { readContext: ve, useCallback: Mf, useContext: ve, useEffect: fo, useImperativeHandle: $f, useLayoutEffect: Df, useMemo: zf, useReducer: xn, useRef: ao, useState: function() {
  return xn(Ce);
}, useDebugValue: ou, useDeferredValue: function(e) {
  var t = xn(Ce), n = t[0], r = t[1];
  return fo(function() {
    var o = he.transition;
    he.transition = 1;
    try {
      r(e);
    } finally {
      he.transition = o;
    }
  }, [e]), n;
}, useTransition: function() {
  var e = xn(Ce)[0];
  return [
    ao().current,
    e
  ];
}, useMutableSource: Rf, useOpaqueIdentifier: function() {
  return xn(Ce)[0];
}, unstable_isNewReconciler: !1 }, cp = _t.ReactCurrentOwner, Se = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Tf(t, null, n, r) : io(t, e.child, n, r);
}
function js(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Kt(t, o), r = nu(e, t, n, r, i, o), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Le(e, t, o)) : (t.flags |= 1, ue(e, t, r, o), t.child);
}
function Ns(e, t, n, r, o, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !cu(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, If(e, t, l, r, o, i)) : (e = Wr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  return l = e.child, !(o & i) && (o = l.memoizedProps, n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref) ? Le(e, t, i) : (t.flags |= 1, e = rt(l, r), e.ref = t.ref, e.return = t, t.child = e);
}
function If(e, t, n, r, o, i) {
  if (e !== null && qn(e.memoizedProps, r) && e.ref === t.ref) if (Se = !1, (i & o) !== 0) e.flags & 16384 && (Se = !0);
  else return t.lanes = e.lanes, Le(e, t, i);
  return Ki(e, t, n, r, i);
}
function fi(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, Nr(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, Nr(t, i !== null ? i.baseLanes : n);
  else return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, Nr(t, e), null;
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, Nr(t, r);
  return ue(e, t, o, n), t.child;
}
function bf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function Ki(e, t, n, r, o) {
  var i = ae(n) ? St : re.current;
  return i = Jt(t, i), Kt(t, o), n = nu(e, t, n, r, i, o), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Le(e, t, o)) : (t.flags |= 1, ue(e, t, n, o), t.child);
}
function Rs(e, t, n, r, o) {
  if (ae(n)) {
    var i = !0;
    Fr(t);
  } else i = !1;
  if (Kt(t, o), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Pf(t, n, r), Bi(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ve(a) : (a = ae(n) ? St : re.current, a = Jt(t, a));
    var p = n.getDerivedStateFromProps, w = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    w || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && Os(t, l, r, a), be = !1;
    var m = t.memoizedState;
    l.state = m, nr(t, r, l, o), s = t.memoizedState, u !== r || m !== s || se.current || be ? (typeof p == "function" && (oo(t, n, p, r), s = t.memoizedState), (u = be || Ss(t, n, u, r, m, s, a)) ? (w || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4)) : (typeof l.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    l = t.stateNode, Cf(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ee(t.type, u), l.props = a, w = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = ve(s) : (s = ae(n) ? St : re.current, s = Jt(t, s));
    var E = n.getDerivedStateFromProps;
    (p = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== w || m !== s) && Os(t, l, r, s), be = !1, m = t.memoizedState, l.state = m, nr(t, r, l, o);
    var x = t.memoizedState;
    u !== w || m !== x || se.current || be ? (typeof E == "function" && (oo(t, n, E, r), x = t.memoizedState), (a = be || Ss(t, n, a, r, m, x, s)) ? (p || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(
      r,
      x,
      s
    ), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, x, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = x), l.props = r, l.state = x, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return Qi(e, t, n, r, i, o);
}
function Qi(e, t, n, r, o, i) {
  bf(e, t);
  var l = (t.flags & 64) !== 0;
  if (!r && !l) return o && vs(t, n, !1), Le(e, t, i);
  r = t.stateNode, cp.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = io(t, e.child, null, i), t.child = io(t, null, u, i)) : ue(e, t, u, i), t.memoizedState = r.state, o && vs(t, n, !0), t.child;
}
function Ds(e) {
  var t = e.stateNode;
  t.pendingContext ? hs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && hs(e, t.context, !1), Vi(e, t.containerInfo);
}
var jr = { dehydrated: null, retryLane: 0 };
function Ls(e, t, n) {
  var r = t.pendingProps, o = U.current, i = !1, l;
  return (l = (t.flags & 64) !== 0) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (o |= 1), A(U, o & 1), e === null ? (r.fallback !== void 0 && Wi(t), e = r.children, o = r.fallback, i ? (e = $s(t, e, o, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = jr, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = $s(t, e, o, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = jr, t.lanes = 33554432, e) : (n = du({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? i ? (r = zs(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = jr, r) : (n = Ms(e, t, r.children, n), t.memoizedState = null, n) : i ? (r = zs(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = jr, r) : (n = Ms(e, t, r.children, n), t.memoizedState = null, n);
}
function $s(e, t, n, r) {
  var o = e.mode, i = e.child;
  return t = { mode: "hidden", children: t }, !(o & 2) && i !== null ? (i.childLanes = 0, i.pendingProps = t) : i = du(t, o, 0, null), n = Gt(n, o, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n;
}
function Ms(e, t, n, r) {
  var o = e.child;
  return e = o.sibling, n = rt(o, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function zs(e, t, n, r, o) {
  var i = t.mode, l = e.child;
  e = l.sibling;
  var u = { mode: "hidden", children: n };
  return !(i & 2) && t.child !== l ? (n = t.child, n.childLanes = 0, n.pendingProps = u, l = n.lastEffect, l !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = l, l.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = rt(l, u), e !== null ? r = rt(e, r) : (r = Gt(r, i, o, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function Is(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), xf(e.return, t);
}
function ci(e, t, n, r, o, i) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o, lastEffect: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o, l.lastEffect = i);
}
function bs(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ue(e, t, r.children, n), r = U.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Is(e, n);
      else if (e.tag === 19) Is(e, n);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (A(U, r), !(t.mode & 2)) t.memoizedState = null;
  else switch (o) {
    case "forwards":
      for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && lo(e) === null && (o = n), n = n.sibling;
      n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ci(t, !1, o, n, i, t.lastEffect);
      break;
    case "backwards":
      for (n = null, o = t.child, t.child = null; o !== null; ) {
        if (e = o.alternate, e !== null && lo(e) === null) {
          t.child = o;
          break;
        }
        e = o.sibling, o.sibling = n, n = o, o = e;
      }
      ci(t, !0, n, null, i, t.lastEffect);
      break;
    case "together":
      ci(t, !1, null, null, void 0, t.lastEffect);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Le(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), yr |= t.lanes, n & t.childLanes) {
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
      for (e = t.child, n = rt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = rt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  return null;
}
var Ff, Yi, Uf, Af;
Ff = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Yi = function() {
};
Uf = function(e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    e = t.stateNode, vt(Pe.current);
    var i = null;
    switch (n) {
      case "input":
        o = Si(e, o), r = Si(e, r), i = [];
        break;
      case "option":
        o = Ci(e, o), r = Ci(e, r), i = [];
        break;
      case "select":
        o = F({}, o, { value: void 0 }), r = F({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        o = _i(e, o), r = _i(e, r), i = [];
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
    }
    Ti(n, r);
    var l;
    n = null;
    for (a in o) if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null) if (a === "style") {
      var u = o[a];
      for (l in u) u.hasOwnProperty(l) && (n || (n = {}), n[l] = "");
    } else a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Kn.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (u = o != null ? o[a] : void 0, r.hasOwnProperty(a) && s !== u && (s != null || u != null)) if (a === "style") if (u) {
        for (l in u) !u.hasOwnProperty(l) || s && s.hasOwnProperty(l) || (n || (n = {}), n[l] = "");
        for (l in s) s.hasOwnProperty(l) && u[l] !== s[l] && (n || (n = {}), n[l] = s[l]);
      } else n || (i || (i = []), i.push(a, n)), n = s;
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Kn.hasOwnProperty(a) ? (s != null && a === "onScroll" && I("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === Dl ? s.toString() : (i = i || []).push(a, s));
    }
    n && (i = i || []).push(
      "style",
      n
    );
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Af = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
  if (!ke) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function dp(e, t, n) {
  var r = t.pendingProps;
  switch (t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return null;
    case 1:
      return ae(t.type) && eo(), null;
    case 3:
      return en(), b(se), b(re), eu(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), Yi(t), null;
    case 5:
      ql(t);
      var o = vt(or.current);
      if (n = t.type, e !== null && t.stateNode != null) Uf(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return null;
        }
        if (e = vt(Pe.current), Tr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ve] = t, r[qr] = i, n) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (e = 0; e < jn.length; e++) I(jn[e], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I("error", r), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              bu(r, i), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, I("invalid", r);
              break;
            case "textarea":
              Uu(r, i), I("invalid", r);
          }
          Ti(n, i), e = null;
          for (var l in i) i.hasOwnProperty(l) && (o = i[l], l === "children" ? typeof o == "string" ? r.textContent !== o && (e = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (e = ["children", "" + o]) : Kn.hasOwnProperty(l) && o != null && l === "onScroll" && I("scroll", r));
          switch (n) {
            case "input":
              Or(r), Fu(r, i, !0);
              break;
            case "textarea":
              Or(r), Au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (l = o.nodeType === 9 ? o : o.ownerDocument, e === Pi.html && (e = $a(n)), e === Pi.html ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Ve] = t, e[qr] = r, Ff(e, t, !1, !1), t.stateNode = e, l = ji(n, r), n) {
            case "dialog":
              I("cancel", e), I("close", e), o = r;
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", e), o = r;
              break;
            case "video":
            case "audio":
              for (o = 0; o < jn.length; o++) I(jn[o], e);
              o = r;
              break;
            case "source":
              I("error", e), o = r;
              break;
            case "img":
            case "image":
            case "link":
              I("error", e), I("load", e), o = r;
              break;
            case "details":
              I("toggle", e), o = r;
              break;
            case "input":
              bu(e, r), o = Si(e, r), I("invalid", e);
              break;
            case "option":
              o = Ci(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, o = F({}, r, { value: void 0 }), I("invalid", e);
              break;
            case "textarea":
              Uu(e, r), o = _i(e, r), I("invalid", e);
              break;
            default:
              o = r;
          }
          Ti(n, o);
          var u = o;
          for (i in u) if (u.hasOwnProperty(i)) {
            var s = u[i];
            i === "style" ? Ia(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ma(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kn.hasOwnProperty(i) ? s != null && i === "onScroll" && I("scroll", e) : s != null && Pl(e, i, s, l));
          }
          switch (n) {
            case "input":
              Or(e), Fu(e, r, !1);
              break;
            case "textarea":
              Or(e), Au(e);
              break;
            case "option":
              r.value != null && e.setAttribute("value", "" + qe(r.value));
              break;
            case "select":
              e.multiple = !!r.multiple, i = r.value, i != null ? Bt(e, !!r.multiple, i, !1) : r.defaultValue != null && Bt(e, !!r.multiple, r.defaultValue, !0);
              break;
            default:
              typeof o.onClick == "function" && (e.onclick = Jr);
          }
          mf(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) Af(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        n = vt(or.current), vt(Pe.current), Tr(t) ? (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return b(U), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && Tr(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || U.current & 1 ? G === 0 && (G = 3) : ((G === 0 || G === 3) && (G = 4), oe === null || !(yr & 134217727) && !(cn & 134217727) || Yt(oe, ne))), (r || n) && (t.flags |= 4), null);
    case 4:
      return en(), Yi(t), e === null && cf(t.stateNode.containerInfo), null;
    case 10:
      return Zl(t), null;
    case 17:
      return ae(t.type) && eo(), null;
    case 19:
      if (b(U), r = t.memoizedState, r === null) return null;
      if (i = (t.flags & 64) !== 0, l = r.rendering, l === null) if (i) _n(r, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (l = lo(e), l !== null) {
            for (t.flags |= 64, _n(r, !1), i = l.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return A(U, U.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && te() > el && (t.flags |= 64, i = !0, _n(r, !1), t.lanes = 33554432);
      }
      else {
        if (!i) if (e = lo(l), e !== null) {
          if (t.flags |= 64, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(r, !0), r.tail === null && r.tailMode === "hidden" && !l.alternate && !ke) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * te() - r.renderingStartTime > el && n !== 1073741824 && (t.flags |= 64, i = !0, _n(r, !1), t.lanes = 33554432);
        r.isBackwards ? (l.sibling = t.child, t.child = l) : (n = r.last, n !== null ? n.sibling = l : t.child = l, r.last = l);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = te(), n.sibling = null, t = U.current, A(U, i ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return fu(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(y(156, t.tag));
}
function pp(e) {
  switch (e.tag) {
    case 1:
      ae(e.type) && eo();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (en(), b(se), b(re), eu(), t = e.flags, t & 64) throw Error(y(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return ql(e), null;
    case 13:
      return b(U), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return b(U), null;
    case 4:
      return en(), null;
    case 10:
      return Zl(e), null;
    case 23:
    case 24:
      return fu(), null;
    default:
      return null;
  }
}
function lu(e, t) {
  try {
    var n = "", r = t;
    do
      n += Kc(r), r = r.return;
    while (r);
    var o = n;
  } catch (i) {
    o = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: o };
}
function Xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var mp = typeof WeakMap == "function" ? WeakMap : Map;
function Bf(e, t, n) {
  n = Ye(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    mo || (mo = !0, tl = r), Xi(e, t);
  }, n;
}
function Vf(e, t, n) {
  n = Ye(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    n.payload = function() {
      return Xi(e, t), r(o);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    typeof r != "function" && (_e === null ? _e = /* @__PURE__ */ new Set([this]) : _e.add(this), Xi(e, t));
    var l = t.stack;
    this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
  }), n;
}
var hp = typeof WeakSet == "function" ? WeakSet : Set;
function Fs(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Je(e, n);
  }
  else t.current = null;
}
function vp(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (t.flags & 256 && e !== null) {
        var n = e.memoizedProps, r = e.memoizedState;
        e = t.stateNode, t = e.getSnapshotBeforeUpdate(t.elementType === t.type ? n : Ee(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t;
      }
      return;
    case 3:
      t.flags & 256 && Ql(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function yp(e, t, n) {
  switch (n.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        e = t = t.next;
        do {
          if ((e.tag & 3) === 3) {
            var r = e.create;
            e.destroy = r();
          }
          e = e.next;
        } while (e !== t);
      }
      if (t = n.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        e = t = t.next;
        do {
          var o = e;
          r = o.next, o = o.tag, o & 4 && o & 1 && (Jf(n, e), _p(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Ee(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && Es(n, t, e);
      return;
    case 3:
      if (t = n.updateQueue, t !== null) {
        if (e = null, n.child !== null) switch (n.child.tag) {
          case 5:
            e = n.child.stateNode;
            break;
          case 1:
            e = n.child.stateNode;
        }
        Es(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && mf(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && Qa(n))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
    case 23:
    case 24:
      return;
  }
  throw Error(y(163));
}
function Us(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var o = n.memoizedProps.style;
        o = o != null && o.hasOwnProperty("display") ? o.display : null, r.style.display = za("display", o);
      }
    } else if (n.tag === 6) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
    else if ((n.tag !== 23 && n.tag !== 24 || n.memoizedState === null || n === e) && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}
function As(e, t) {
  if (Et && typeof Et.onCommitFiberUnmount == "function") try {
    Et.onCommitFiberUnmount(Yl, t);
  } catch {
  }
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      if (e = t.updateQueue, e !== null && (e = e.lastEffect, e !== null)) {
        var n = e = e.next;
        do {
          var r = n, o = r.destroy;
          if (r = r.tag, o !== void 0) if (r & 4) Jf(t, n);
          else {
            r = t;
            try {
              o();
            } catch (i) {
              Je(r, i);
            }
          }
          n = n.next;
        } while (n !== e);
      }
      break;
    case 1:
      if (Fs(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (i) {
        Je(
          t,
          i
        );
      }
      break;
    case 5:
      Fs(t);
      break;
    case 4:
      Wf(e, t);
  }
}
function Bs(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function Vs(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ws(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (Vs(t)) break e;
      t = t.return;
    }
    throw Error(y(160));
  }
  var n = t;
  switch (t = n.stateNode, n.tag) {
    case 5:
      var r = !1;
      break;
    case 3:
      t = t.containerInfo, r = !0;
      break;
    case 4:
      t = t.containerInfo, r = !0;
      break;
    default:
      throw Error(y(161));
  }
  n.flags & 16 && (Qn(t, ""), n.flags &= -17);
  e: t: for (n = e; ; ) {
    for (; n.sibling === null; ) {
      if (n.return === null || Vs(n.return)) {
        n = null;
        break e;
      }
      n = n.return;
    }
    for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
      if (n.flags & 2 || n.child === null || n.tag === 4) continue t;
      n.child.return = n, n = n.child;
    }
    if (!(n.flags & 2)) {
      n = n.stateNode;
      break e;
    }
  }
  r ? Gi(e, n, t) : Zi(e, n, t);
}
function Gi(e, t, n) {
  var r = e.tag, o = r === 5 || r === 6;
  if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), e = e.sibling;
}
function Zi(e, t, n) {
  var r = e.tag, o = r === 5 || r === 6;
  if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), e = e.sibling;
}
function Wf(e, t) {
  for (var n = t, r = !1, o, i; ; ) {
    if (!r) {
      r = n.return;
      e: for (; ; ) {
        if (r === null) throw Error(y(160));
        switch (o = r.stateNode, r.tag) {
          case 5:
            i = !1;
            break e;
          case 3:
            o = o.containerInfo, i = !0;
            break e;
          case 4:
            o = o.containerInfo, i = !0;
            break e;
        }
        r = r.return;
      }
      r = !0;
    }
    if (n.tag === 5 || n.tag === 6) {
      e: for (var l = e, u = n, s = u; ; ) if (As(l, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
      else {
        if (s === u) break e;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === u) break e;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
      i ? (l = o, u = n.stateNode, l.nodeType === 8 ? l.parentNode.removeChild(u) : l.removeChild(u)) : o.removeChild(n.stateNode);
    } else if (n.tag === 4) {
      if (n.child !== null) {
        o = n.stateNode.containerInfo, i = !0, n.child.return = n, n = n.child;
        continue;
      }
    } else if (As(e, n), n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return, n.tag === 4 && (r = !1);
    }
    n.sibling.return = n.return, n = n.sibling;
  }
}
function di(e, t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      var n = t.updateQueue;
      if (n = n !== null ? n.lastEffect : null, n !== null) {
        var r = n = n.next;
        do
          (r.tag & 3) === 3 && (e = r.destroy, r.destroy = void 0, e !== void 0 && e()), r = r.next;
        while (r !== n);
      }
      return;
    case 1:
      return;
    case 5:
      if (n = t.stateNode, n != null) {
        r = t.memoizedProps;
        var o = e !== null ? e.memoizedProps : r;
        e = t.type;
        var i = t.updateQueue;
        if (t.updateQueue = null, i !== null) {
          for (n[qr] = r, e === "input" && r.type === "radio" && r.name != null && Da(n, r), ji(e, o), t = ji(e, r), o = 0; o < i.length; o += 2) {
            var l = i[o], u = i[o + 1];
            l === "style" ? Ia(n, u) : l === "dangerouslySetInnerHTML" ? Ma(n, u) : l === "children" ? Qn(n, u) : Pl(n, l, u, t);
          }
          switch (e) {
            case "input":
              Oi(n, r);
              break;
            case "textarea":
              La(n, r);
              break;
            case "select":
              e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, i = r.value, i != null ? Bt(n, !!r.multiple, i, !1) : e !== !!r.multiple && (r.defaultValue != null ? Bt(n, !!r.multiple, r.defaultValue, !0) : Bt(n, !!r.multiple, r.multiple ? [] : "", !1));
          }
        }
      }
      return;
    case 6:
      if (t.stateNode === null) throw Error(y(162));
      t.stateNode.nodeValue = t.memoizedProps;
      return;
    case 3:
      n = t.stateNode, n.hydrate && (n.hydrate = !1, Qa(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (au = te(), Us(t.child, !0)), Hs(t);
      return;
    case 19:
      Hs(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Us(t, t.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function Hs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new hp()), t.forEach(function(r) {
      var o = Tp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function gp(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var wp = Math.ceil, po = _t.ReactCurrentDispatcher, uu = _t.ReactCurrentOwner, N = 0, oe = null, W = null, ne = 0, xt = 0, Ji = ot(0), G = 0, bo = null, fn = 0, yr = 0, cn = 0, su = 0, qi = null, au = 0, el = 1 / 0;
function dn() {
  el = te() + 500;
}
var C = null, mo = !1, tl = null, _e = null, nt = !1, Vn = null, Nn = 90, nl = [], rl = [], $e = null, Wn = 0, ol = null, Ar = -1, Re = 0, Br = 0, Hn = null, Vr = !1;
function fe() {
  return N & 48 ? te() : Ar !== -1 ? Ar : Ar = te();
}
function Ge(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return qt() === 99 ? 1 : 2;
  if (Re === 0 && (Re = fn), lp.transition !== 0) {
    Br !== 0 && (Br = qi !== null ? qi.pendingLanes : 0), e = Re;
    var t = 4186112 & ~Br;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = qt(), N & 4 && e === 98 ? e = Gr(12, Re) : (e = sd(e), e = Gr(e, Re)), e;
}
function Ze(e, t, n) {
  if (50 < Wn) throw Wn = 0, ol = null, Error(y(185));
  if (e = Fo(e, t), e === null) return null;
  Ro(e, t, n), e === oe && (cn |= t, G === 4 && Yt(e, ne));
  var r = qt();
  t === 1 ? N & 8 && !(N & 48) ? il(e) : (ye(e, n), N === 0 && (dn(), je())) : (!(N & 4) || r !== 98 && r !== 99 || ($e === null ? $e = /* @__PURE__ */ new Set([e]) : $e.add(e)), ye(e, n)), qi = e;
}
function Fo(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
function ye(e, t) {
  for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, i = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
    var u = 31 - et(l), s = 1 << u, a = i[u];
    if (a === -1) {
      if (!(s & r) || s & o) {
        a = t, Dt(s);
        var p = z;
        i[u] = 10 <= p ? a + 250 : 6 <= p ? a + 5e3 : -1;
      }
    } else a <= t && (e.expiredLanes |= s);
    l &= ~s;
  }
  if (r = Zn(e, e === oe ? ne : 0), t = z, r === 0) n !== null && (n !== ui && Ui(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== ui && Ui(n);
    }
    t === 15 ? (n = il.bind(null, e), Ne === null ? (Ne = [n], Ur = Xl(zo, Of)) : Ne.push(n), n = ui) : t === 14 ? n = tr(99, il.bind(null, e)) : (n = ad(t), n = tr(n, Hf.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function Hf(e) {
  if (Ar = -1, Br = Re = 0, N & 48) throw Error(y(327));
  var t = e.callbackNode;
  if (it() && e.callbackNode !== t) return null;
  var n = Zn(e, e === oe ? ne : 0);
  if (n === 0) return null;
  var r = n, o = N;
  N |= 16;
  var i = Xf();
  (oe !== e || ne !== r) && (dn(), Xt(e, r));
  do
    try {
      Op();
      break;
    } catch (u) {
      Yf(e, u);
    }
  while (!0);
  if (Gl(), po.current = i, N = o, W !== null ? r = 0 : (oe = null, ne = 0, r = G), fn & cn) Xt(e, 0);
  else if (r !== 0) {
    if (r === 2 && (N |= 64, e.hydrate && (e.hydrate = !1, Ql(e.containerInfo)), n = ef(e), n !== 0 && (r = Rn(e, n))), r === 1) throw t = bo, Xt(e, 0), Yt(e, n), ye(e, te()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        ft(e);
        break;
      case 3:
        if (Yt(e, n), (n & 62914560) === n && (r = au + 500 - te(), 10 < r)) {
          if (Zn(e, 0) !== 0) break;
          if (o = e.suspendedLanes, (o & n) !== n) {
            fe(), e.pingedLanes |= e.suspendedLanes & o;
            break;
          }
          e.timeoutHandle = ds(ft.bind(null, e), r);
          break;
        }
        ft(e);
        break;
      case 4:
        if (Yt(e, n), (n & 4186112) === n) break;
        for (r = e.eventTimes, o = -1; 0 < n; ) {
          var l = 31 - et(n);
          i = 1 << l, l = r[l], l > o && (o = l), n &= ~i;
        }
        if (n = o, n = te() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * wp(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = ds(ft.bind(null, e), n);
          break;
        }
        ft(e);
        break;
      case 5:
        ft(e);
        break;
      default:
        throw Error(y(329));
    }
  }
  return ye(e, te()), e.callbackNode === t ? Hf.bind(null, e) : null;
}
function Yt(e, t) {
  for (t &= ~su, t &= ~cn, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function il(e) {
  if (N & 48) throw Error(y(327));
  if (it(), e === oe && e.expiredLanes & ne) {
    var t = ne, n = Rn(e, t);
    fn & cn && (t = Zn(e, t), n = Rn(e, t));
  } else t = Zn(e, 0), n = Rn(e, t);
  if (e.tag !== 0 && n === 2 && (N |= 64, e.hydrate && (e.hydrate = !1, Ql(e.containerInfo)), t = ef(e), t !== 0 && (n = Rn(e, t))), n === 1) throw n = bo, Xt(e, 0), Yt(e, t), ye(e, te()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ft(e), ye(e, te()), null;
}
function Ep() {
  if ($e !== null) {
    var e = $e;
    $e = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, ye(t, te());
    });
  }
  je();
}
function Kf(e, t) {
  var n = N;
  N |= 1;
  try {
    return e(t);
  } finally {
    N = n, N === 0 && (dn(), je());
  }
}
function Qf(e, t) {
  var n = N;
  N &= -2, N |= 8;
  try {
    return e(t);
  } finally {
    N = n, N === 0 && (dn(), je());
  }
}
function Nr(e, t) {
  A(Ji, xt), xt |= t, fn |= t;
}
function fu() {
  xt = Ji.current, b(Ji);
}
function Xt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ep(n)), W !== null) for (n = W.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && eo();
        break;
      case 3:
        en(), b(se), b(re), eu();
        break;
      case 5:
        ql(r);
        break;
      case 4:
        en();
        break;
      case 13:
        b(U);
        break;
      case 19:
        b(U);
        break;
      case 10:
        Zl(r);
        break;
      case 23:
      case 24:
        fu();
    }
    n = n.return;
  }
  oe = e, W = rt(e.current, null), ne = xt = fn = t, G = 0, bo = null, su = cn = yr = 0;
}
function Yf(e, t) {
  do {
    var n = W;
    try {
      if (Gl(), An.current = co, uo) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        uo = !1;
      }
      if (ir = 0, X = ee = V = null, Bn = !1, uu.current = null, n === null || n.return === null) {
        G = 1, bo = t, W = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = ne, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
          var a = s;
          if (!(u.mode & 2)) {
            var p = u.alternate;
            p ? (u.updateQueue = p.updateQueue, u.memoizedState = p.memoizedState, u.lanes = p.lanes) : (u.updateQueue = null, u.memoizedState = null);
          }
          var w = (U.current & 1) !== 0, m = l;
          do {
            var E;
            if (E = m.tag === 13) {
              var x = m.memoizedState;
              if (x !== null) E = x.dehydrated !== null;
              else {
                var _ = m.memoizedProps;
                E = _.fallback === void 0 ? !1 : _.unstable_avoidThisFallback !== !0 ? !0 : !w;
              }
            }
            if (E) {
              var c = m.updateQueue;
              if (c === null) {
                var f = /* @__PURE__ */ new Set();
                f.add(a), m.updateQueue = f;
              } else c.add(a);
              if (!(m.mode & 2)) {
                if (m.flags |= 64, u.flags |= 16384, u.flags &= -2981, u.tag === 1) if (u.alternate === null) u.tag = 17;
                else {
                  var d = Ye(-1, 1);
                  d.tag = 2, Xe(u, d);
                }
                u.lanes |= 1;
                break e;
              }
              s = void 0, u = t;
              var v = i.pingCache;
              if (v === null ? (v = i.pingCache = new mp(), s = /* @__PURE__ */ new Set(), v.set(a, s)) : (s = v.get(a), s === void 0 && (s = /* @__PURE__ */ new Set(), v.set(a, s))), !s.has(u)) {
                s.add(u);
                var h = kp.bind(null, i, a, u);
                a.then(h, h);
              }
              m.flags |= 4096, m.lanes = t;
              break e;
            }
            m = m.return;
          } while (m !== null);
          s = Error((At(u.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
        }
        G !== 5 && (G = 2), s = lu(s, u), m = l;
        do {
          switch (m.tag) {
            case 3:
              i = s, m.flags |= 4096, t &= -t, m.lanes |= t;
              var T = Bf(m, i, t);
              ws(m, T);
              break e;
            case 1:
              i = s;
              var S = m.type, j = m.stateNode;
              if (!(m.flags & 64) && (typeof S.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && (_e === null || !_e.has(j)))) {
                m.flags |= 4096, t &= -t, m.lanes |= t;
                var D = Vf(m, i, t);
                ws(m, D);
                break e;
              }
          }
          m = m.return;
        } while (m !== null);
      }
      Zf(n);
    } catch (k) {
      t = k, W === n && n !== null && (W = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xf() {
  var e = po.current;
  return po.current = co, e === null ? co : e;
}
function Rn(e, t) {
  var n = N;
  N |= 16;
  var r = Xf();
  oe === e && ne === t || Xt(e, t);
  do
    try {
      Sp();
      break;
    } catch (o) {
      Yf(e, o);
    }
  while (!0);
  if (Gl(), N = n, po.current = r, W !== null) throw Error(y(261));
  return oe = null, ne = 0, G;
}
function Sp() {
  for (; W !== null; ) Gf(W);
}
function Op() {
  for (; W !== null && !rp(); ) Gf(W);
}
function Gf(e) {
  var t = qf(e.alternate, e, xt);
  e.memoizedProps = e.pendingProps, t === null ? Zf(e) : W = t, uu.current = null;
}
function Zf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = pp(t), n !== null) {
        n.flags &= 2047, W = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = dp(n, t, xt), n !== null) {
        W = n;
        return;
      }
      if (n = t, n.tag !== 24 && n.tag !== 23 || n.memoizedState === null || xt & 1073741824 || !(n.mode & 4)) {
        for (var r = 0, o = n.child; o !== null; ) r |= o.lanes | o.childLanes, o = o.sibling;
        n.childLanes = r;
      }
      e !== null && !(e.flags & 2048) && (e.firstEffect === null && (e.firstEffect = t.firstEffect), t.lastEffect !== null && (e.lastEffect !== null && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (e.lastEffect !== null ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t));
    }
    if (t = t.sibling, t !== null) {
      W = t;
      return;
    }
    W = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function ft(e) {
  var t = qt();
  return Ot(99, xp.bind(null, e, t)), null;
}
function xp(e, t) {
  do
    it();
  while (Vn !== null);
  if (N & 48) throw Error(y(327));
  var n = e.finishedWork;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
  e.callbackNode = null;
  var r = n.lanes | n.childLanes, o = r, i = e.pendingLanes & ~o;
  e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
  for (var l = e.eventTimes, u = e.expirationTimes; 0 < i; ) {
    var s = 31 - et(i), a = 1 << s;
    o[s] = 0, l[s] = -1, u[s] = -1, i &= ~a;
  }
  if ($e !== null && !(r & 24) && $e.has(e) && $e.delete(e), e === oe && (W = oe = null, ne = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (o = N, N |= 32, uu.current = null, oi = zr, l = is(), Mi(l)) {
      if ("selectionStart" in l) u = { start: l.selectionStart, end: l.selectionEnd };
      else e: if (u = (u = l.ownerDocument) && u.defaultView || window, (a = u.getSelection && u.getSelection()) && a.rangeCount !== 0) {
        u = a.anchorNode, i = a.anchorOffset, s = a.focusNode, a = a.focusOffset;
        try {
          u.nodeType, s.nodeType;
        } catch {
          u = null;
          break e;
        }
        var p = 0, w = -1, m = -1, E = 0, x = 0, _ = l, c = null;
        t: for (; ; ) {
          for (var f; _ !== u || i !== 0 && _.nodeType !== 3 || (w = p + i), _ !== s || a !== 0 && _.nodeType !== 3 || (m = p + a), _.nodeType === 3 && (p += _.nodeValue.length), (f = _.firstChild) !== null; )
            c = _, _ = f;
          for (; ; ) {
            if (_ === l) break t;
            if (c === u && ++E === i && (w = p), c === s && ++x === a && (m = p), (f = _.nextSibling) !== null) break;
            _ = c, c = _.parentNode;
          }
          _ = f;
        }
        u = w === -1 || m === -1 ? null : { start: w, end: m };
      } else u = null;
      u = u || { start: 0, end: 0 };
    } else u = null;
    ii = { focusedElem: l, selectionRange: u }, zr = !1, Hn = null, Vr = !1, C = r;
    do
      try {
        Cp();
      } catch (k) {
        if (C === null) throw Error(y(330));
        Je(C, k), C = C.nextEffect;
      }
    while (C !== null);
    Hn = null, C = r;
    do
      try {
        for (l = e; C !== null; ) {
          var d = C.flags;
          if (d & 16 && Qn(C.stateNode, ""), d & 128) {
            var v = C.alternate;
            if (v !== null) {
              var h = v.ref;
              h !== null && (typeof h == "function" ? h(null) : h.current = null);
            }
          }
          switch (d & 1038) {
            case 2:
              Ws(C), C.flags &= -3;
              break;
            case 6:
              Ws(C), C.flags &= -3, di(C.alternate, C);
              break;
            case 1024:
              C.flags &= -1025;
              break;
            case 1028:
              C.flags &= -1025, di(C.alternate, C);
              break;
            case 4:
              di(C.alternate, C);
              break;
            case 8:
              u = C, Wf(l, u);
              var T = u.alternate;
              Bs(u), T !== null && Bs(T);
          }
          C = C.nextEffect;
        }
      } catch (k) {
        if (C === null) throw Error(y(330));
        Je(C, k), C = C.nextEffect;
      }
    while (C !== null);
    if (h = ii, v = is(), d = h.focusedElem, l = h.selectionRange, v !== d && d && d.ownerDocument && af(d.ownerDocument.documentElement, d)) {
      for (l !== null && Mi(d) && (v = l.start, h = l.end, h === void 0 && (h = v), "selectionStart" in d ? (d.selectionStart = v, d.selectionEnd = Math.min(h, d.value.length)) : (h = (v = d.ownerDocument || document) && v.defaultView || window, h.getSelection && (h = h.getSelection(), u = d.textContent.length, T = Math.min(l.start, u), l = l.end === void 0 ? T : Math.min(l.end, u), !h.extend && T > l && (u = l, l = T, T = u), u = os(d, T), i = os(d, l), u && i && (h.rangeCount !== 1 || h.anchorNode !== u.node || h.anchorOffset !== u.offset || h.focusNode !== i.node || h.focusOffset !== i.offset) && (v = v.createRange(), v.setStart(u.node, u.offset), h.removeAllRanges(), T > l ? (h.addRange(v), h.extend(i.node, i.offset)) : (v.setEnd(i.node, i.offset), h.addRange(v)))))), v = [], h = d; h = h.parentNode; ) h.nodeType === 1 && v.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
      for (typeof d.focus == "function" && d.focus(), d = 0; d < v.length; d++) h = v[d], h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
    }
    zr = !!oi, ii = oi = null, e.current = n, C = r;
    do
      try {
        for (d = e; C !== null; ) {
          var S = C.flags;
          if (S & 36 && yp(d, C.alternate, C), S & 128) {
            v = void 0;
            var j = C.ref;
            if (j !== null) {
              var D = C.stateNode;
              switch (C.tag) {
                case 5:
                  v = D;
                  break;
                default:
                  v = D;
              }
              typeof j == "function" ? j(v) : j.current = v;
            }
          }
          C = C.nextEffect;
        }
      } catch (k) {
        if (C === null) throw Error(y(330));
        Je(C, k), C = C.nextEffect;
      }
    while (C !== null);
    C = null, ip(), N = o;
  } else e.current = n;
  if (nt) nt = !1, Vn = e, Nn = t;
  else for (C = r; C !== null; ) t = C.nextEffect, C.nextEffect = null, C.flags & 8 && (S = C, S.sibling = null, S.stateNode = null), C = t;
  if (r = e.pendingLanes, r === 0 && (_e = null), r === 1 ? e === ol ? Wn++ : (Wn = 0, ol = e) : Wn = 0, n = n.stateNode, Et && typeof Et.onCommitFiberRoot == "function") try {
    Et.onCommitFiberRoot(Yl, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (ye(e, te()), mo) throw mo = !1, e = tl, tl = null, e;
  return N & 8 || je(), null;
}
function Cp() {
  for (; C !== null; ) {
    var e = C.alternate;
    Vr || Hn === null || (C.flags & 8 ? Wu(C, Hn) && (Vr = !0) : C.tag === 13 && gp(e, C) && Wu(C, Hn) && (Vr = !0));
    var t = C.flags;
    t & 256 && vp(e, C), !(t & 512) || nt || (nt = !0, tr(97, function() {
      return it(), null;
    })), C = C.nextEffect;
  }
}
function it() {
  if (Nn !== 90) {
    var e = 97 < Nn ? 97 : Nn;
    return Nn = 90, Ot(e, Pp);
  }
  return !1;
}
function _p(e, t) {
  nl.push(t, e), nt || (nt = !0, tr(97, function() {
    return it(), null;
  }));
}
function Jf(e, t) {
  rl.push(t, e), nt || (nt = !0, tr(97, function() {
    return it(), null;
  }));
}
function Pp() {
  if (Vn === null) return !1;
  var e = Vn;
  if (Vn = null, N & 48) throw Error(y(331));
  var t = N;
  N |= 32;
  var n = rl;
  rl = [];
  for (var r = 0; r < n.length; r += 2) {
    var o = n[r], i = n[r + 1], l = o.destroy;
    if (o.destroy = void 0, typeof l == "function") try {
      l();
    } catch (s) {
      if (i === null) throw Error(y(330));
      Je(i, s);
    }
  }
  for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
    o = n[r], i = n[r + 1];
    try {
      var u = o.create;
      o.destroy = u();
    } catch (s) {
      if (i === null) throw Error(y(330));
      Je(i, s);
    }
  }
  for (u = e.current.firstEffect; u !== null; ) e = u.nextEffect, u.nextEffect = null, u.flags & 8 && (u.sibling = null, u.stateNode = null), u = e;
  return N = t, je(), !0;
}
function Ks(e, t, n) {
  t = lu(n, t), t = Bf(e, t, 1), Xe(e, t), t = fe(), e = Fo(e, 1), e !== null && (Ro(e, 1, t), ye(e, t));
}
function Je(e, t) {
  if (e.tag === 3) Ks(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Ks(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_e === null || !_e.has(r))) {
        e = lu(t, e);
        var o = Vf(n, e, 1);
        if (Xe(n, o), o = fe(), n = Fo(n, 1), n !== null) Ro(n, 1, o), ye(n, o);
        else if (typeof r.componentDidCatch == "function" && (_e === null || !_e.has(r))) try {
          r.componentDidCatch(t, e);
        } catch {
        }
        break;
      }
    }
    n = n.return;
  }
}
function kp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, oe === e && (ne & n) === n && (G === 4 || G === 3 && (ne & 62914560) === ne && 500 > te() - au ? Xt(e, 0) : su |= n), ye(e, t);
}
function Tp(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (Re === 0 && (Re = fn), t = Lt(62914560 & ~Re), t === 0 && (t = 4194304)) : t = qt() === 99 ? 1 : 2 : t = 1), n = fe(), e = Fo(e, t), e !== null && (Ro(e, t, n), ye(e, n));
}
var qf;
qf = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || se.current) Se = !0;
  else if (n & r) Se = !!(e.flags & 16384);
  else {
    switch (Se = !1, t.tag) {
      case 3:
        Ds(t), ai();
        break;
      case 5:
        xs(t);
        break;
      case 1:
        ae(t.type) && Fr(t);
        break;
      case 4:
        Vi(t, t.stateNode.containerInfo);
        break;
      case 10:
        r = t.memoizedProps.value;
        var o = t.type._context;
        A(to, o._currentValue), o._currentValue = r;
        break;
      case 13:
        if (t.memoizedState !== null)
          return n & t.child.childLanes ? Ls(e, t, n) : (A(U, U.current & 1), t = Le(e, t, n), t !== null ? t.sibling : null);
        A(U, U.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return bs(e, t, n);
          t.flags |= 64;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), A(U, U.current), r) break;
        return null;
      case 23:
      case 24:
        return t.lanes = 0, fi(e, t, n);
    }
    return Le(e, t, n);
  }
  else Se = !1;
  switch (t.lanes = 0, t.tag) {
    case 2:
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = Jt(t, re.current), Kt(t, n), o = nu(null, t, r, e, o, n), t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ae(r)) {
          var i = !0;
          Fr(t);
        } else i = !1;
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Jl(t);
        var l = r.getDerivedStateFromProps;
        typeof l == "function" && oo(t, r, l, e), o.updater = Io, t.stateNode = o, o._reactInternals = t, Bi(t, r, e, n), t = Qi(null, t, r, !0, i, n);
      } else t.tag = 0, ue(null, t, o, n), t = t.child;
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = o._init, o = i(o._payload), t.type = o, i = t.tag = Np(o), e = Ee(o, e), i) {
          case 0:
            t = Ki(null, t, o, e, n);
            break e;
          case 1:
            t = Rs(null, t, o, e, n);
            break e;
          case 11:
            t = js(null, t, o, e, n);
            break e;
          case 14:
            t = Ns(null, t, o, Ee(o.type, e), r, n);
            break e;
        }
        throw Error(y(306, o, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), Ki(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), Rs(e, t, r, o, n);
    case 3:
      if (Ds(t), r = t.updateQueue, e === null || r === null) throw Error(y(282));
      if (r = t.pendingProps, o = t.memoizedState, o = o !== null ? o.element : null, Cf(e, t), nr(t, r, null, n), r = t.memoizedState.element, r === o) ai(), t = Le(e, t, n);
      else {
        if (o = t.stateNode, (i = o.hydrate) && (We = Ht(t.stateNode.containerInfo.firstChild), De = t, i = ke = !0), i) {
          if (e = o.mutableSourceEagerHydrationData, e != null) for (o = 0; o < e.length; o += 2) i = e[o], i._workInProgressVersionPrimary = e[o + 1], Qt.push(i);
          for (n = Tf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else ue(e, t, r, n), ai();
        t = t.child;
      }
      return t;
    case 5:
      return xs(t), e === null && Wi(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, bi(r, o) ? l = null : i !== null && bi(r, i) && (t.flags |= 16), bf(e, t), ue(e, t, l, n), t.child;
    case 6:
      return e === null && Wi(t), null;
    case 13:
      return Ls(e, t, n);
    case 4:
      return Vi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = io(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), js(e, t, r, o, n);
    case 7:
      return ue(e, t, t.pendingProps, n), t.child;
    case 8:
      return ue(
        e,
        t,
        t.pendingProps.children,
        n
      ), t.child;
    case 12:
      return ue(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value;
        var u = t.type._context;
        if (A(to, u._currentValue), u._currentValue = i, l !== null) if (u = l.value, i = pe(u, i) ? 0 : (typeof r._calculateChangedBits == "function" ? r._calculateChangedBits(u, i) : 1073741823) | 0, i === 0) {
          if (l.children === o.children && !se.current) {
            t = Le(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var s = u.dependencies;
          if (s !== null) {
            l = u.child;
            for (var a = s.firstContext; a !== null; ) {
              if (a.context === r && a.observedBits & i) {
                u.tag === 1 && (a = Ye(-1, n & -n), a.tag = 2, Xe(u, a)), u.lanes |= n, a = u.alternate, a !== null && (a.lanes |= n), xf(u.return, n), s.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else l = u.tag === 10 && u.type === t.type ? null : u.child;
          if (l !== null) l.return = u;
          else for (l = u; l !== null; ) {
            if (l === t) {
              l = null;
              break;
            }
            if (u = l.sibling, u !== null) {
              u.return = l.return, l = u;
              break;
            }
            l = l.return;
          }
          u = l;
        }
        ue(e, t, o.children, n), t = t.child;
      }
      return t;
    case 9:
      return o = t.type, i = t.pendingProps, r = i.children, Kt(t, n), o = ve(
        o,
        i.unstable_observedBits
      ), r = r(o), t.flags |= 1, ue(e, t, r, n), t.child;
    case 14:
      return o = t.type, i = Ee(o, t.pendingProps), i = Ee(o.type, i), Ns(e, t, o, i, r, n);
    case 15:
      return If(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ae(r) ? (e = !0, Fr(t)) : e = !1, Kt(t, n), Pf(t, r, o), Bi(t, r, o, n), Qi(null, t, r, !0, e, n);
    case 19:
      return bs(e, t, n);
    case 23:
      return fi(e, t, n);
    case 24:
      return fi(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function jp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function me(e, t, n, r) {
  return new jp(e, t, n, r);
}
function cu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Np(e) {
  if (typeof e == "function") return cu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === To) return 11;
    if (e === jo) return 14;
  }
  return 2;
}
function rt(e, t) {
  var n = e.alternate;
  return n === null ? (n = me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") cu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Ae:
      return Gt(n.children, o, i, t);
    case ja:
      l = 8, o |= 16;
      break;
    case kl:
      l = 8, o |= 1;
      break;
    case $n:
      return e = me(12, n, t, o | 8), e.elementType = $n, e.type = $n, e.lanes = i, e;
    case Mn:
      return e = me(13, n, t, o), e.type = Mn, e.elementType = Mn, e.lanes = i, e;
    case Kr:
      return e = me(19, n, t, o), e.elementType = Kr, e.lanes = i, e;
    case Ll:
      return du(n, o, i, t);
    case Ei:
      return e = me(24, n, t, o), e.elementType = Ei, e.lanes = i, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Tl:
          l = 10;
          break e;
        case jl:
          l = 9;
          break e;
        case To:
          l = 11;
          break e;
        case jo:
          l = 14;
          break e;
        case Nl:
          l = 16, r = null;
          break e;
        case Rl:
          l = 22;
          break e;
      }
      throw Error(y(130, e == null ? e : typeof e, ""));
  }
  return t = me(l, n, t, o), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Gt(e, t, n, r) {
  return e = me(7, e, r, t), e.lanes = n, e;
}
function du(e, t, n, r) {
  return e = me(23, e, r, t), e.elementType = Ll, e.lanes = n, e;
}
function pi(e, t, n) {
  return e = me(6, e, null, t), e.lanes = n, e;
}
function mi(e, t, n) {
  return t = me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Rp(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Zo(0), this.expirationTimes = Zo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.mutableSourceEagerHydrationData = null;
}
function Dp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: pt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ho(e, t, n, r) {
  var o = t.current, i = fe(), l = Ge(o);
  e: if (n) {
    n = n._reactInternals;
    t: {
      if (Pt(n) !== n || n.tag !== 1) throw Error(y(170));
      var u = n;
      do {
        switch (u.tag) {
          case 3:
            u = u.stateNode.context;
            break t;
          case 1:
            if (ae(u.type)) {
              u = u.stateNode.__reactInternalMemoizedMergedChildContext;
              break t;
            }
        }
        u = u.return;
      } while (u !== null);
      throw Error(y(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (ae(s)) {
        n = vf(n, s, u);
        break e;
      }
    }
    n = u;
  } else n = tt;
  return t.context === null ? t.context = n : t.pendingContext = n, t = Ye(i, l), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), Xe(o, t), Ze(o, l, i), l;
}
function hi(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function pu(e, t) {
  Qs(e, t), (e = e.alternate) && Qs(e, t);
}
function Lp() {
  return null;
}
function mu(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new Rp(e, t, n != null && n.hydrate === !0), t = me(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Jl(t), e[an] = n.current, cf(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var o = t._getVersion;
    o = o(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o);
  }
  this._internalRoot = n;
}
mu.prototype.render = function(e) {
  ho(e, this._internalRoot, null, null);
};
mu.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  ho(null, e, null, function() {
    t[an] = null;
  });
};
function gr(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function $p(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new mu(e, 0, t ? { hydrate: !0 } : void 0);
}
function Uo(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i._internalRoot;
    if (typeof o == "function") {
      var u = o;
      o = function() {
        var a = hi(l);
        u.call(a);
      };
    }
    ho(t, l, e, o);
  } else {
    if (i = n._reactRootContainer = $p(n, r), l = i._internalRoot, typeof o == "function") {
      var s = o;
      o = function() {
        var a = hi(l);
        s.call(a);
      };
    }
    Qf(function() {
      ho(t, l, e, o);
    });
  }
  return hi(l);
}
Wa = function(e) {
  if (e.tag === 13) {
    var t = fe();
    Ze(e, 4, t), pu(e, 4);
  }
};
bl = function(e) {
  if (e.tag === 13) {
    var t = fe();
    Ze(e, 67108864, t), pu(e, 67108864);
  }
};
Ha = function(e) {
  if (e.tag === 13) {
    var t = fe(), n = Ge(e);
    Ze(e, n, t), pu(e, n);
  }
};
Ka = function(e, t) {
  return t();
};
Ni = function(e, t, n) {
  switch (t) {
    case "input":
      if (Oi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Mo(r);
            if (!o) throw Error(y(90));
            Ra(r), Oi(r, o);
          }
        }
      }
      break;
    case "textarea":
      La(e, n);
      break;
    case "select":
      t = n.value, t != null && Bt(e, !!n.multiple, t, !1);
  }
};
Ml = Kf;
Ua = function(e, t, n, r, o) {
  var i = N;
  N |= 4;
  try {
    return Ot(98, e.bind(null, t, n, r, o));
  } finally {
    N = i, N === 0 && (dn(), je());
  }
};
zl = function() {
  !(N & 49) && (Ep(), it());
};
Aa = function(e, t) {
  var n = N;
  N |= 2;
  try {
    return e(t);
  } finally {
    N = n, N === 0 && (dn(), je());
  }
};
function ec(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gr(t)) throw Error(y(200));
  return Dp(e, t, null, n);
}
var Mp = { Events: [hr, bt, Mo, ba, Fa, it, { current: !1 }] }, Pn = { findFiberByHostInstance: ht, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, zp = { bundleType: Pn.bundleType, version: Pn.version, rendererPackageName: Pn.rendererPackageName, rendererConfig: Pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Va(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pn.findFiberByHostInstance || Lp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    Yl = Rr.inject(zp), Et = Rr;
  } catch {
  }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mp;
ge.createPortal = ec;
ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : Error(y(268, Object.keys(e)));
  return e = Va(t), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e, t) {
  var n = N;
  if (n & 48) return e(t);
  N |= 1;
  try {
    if (e) return Ot(99, e.bind(null, t));
  } finally {
    N = n, je();
  }
};
ge.hydrate = function(e, t, n) {
  if (!gr(t)) throw Error(y(200));
  return Uo(null, e, t, !0, n);
};
ge.render = function(e, t, n) {
  if (!gr(t)) throw Error(y(200));
  return Uo(null, e, t, !1, n);
};
ge.unmountComponentAtNode = function(e) {
  if (!gr(e)) throw Error(y(40));
  return e._reactRootContainer ? (Qf(function() {
    Uo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[an] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = Kf;
ge.unstable_createPortal = function(e, t) {
  return ec(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!gr(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Uo(e, t, n, !1, r);
};
ge.version = "17.0.2";
function tc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tc);
    } catch (e) {
      console.error(e);
    }
}
tc(), _a.exports = ge;
var nc = _a.exports;
const Dr = /* @__PURE__ */ Po(nc);
var rc = { exports: {} }, Ip = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", bp = Ip, Fp = bp;
function oc() {
}
function ic() {
}
ic.resetWarningCache = oc;
var Up = function() {
  function e(r, o, i, l, u, s) {
    if (s !== Fp) {
      var a = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw a.name = "Invariant Violation", a;
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: ic,
    resetWarningCache: oc
  };
  return n.PropTypes = n, n;
};
rc.exports = Up();
var Ap = rc.exports;
const g = /* @__PURE__ */ Po(Ap);
var lc = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", l = 0; l < arguments.length; l++) {
        var u = arguments[l];
        u && (i = o(i, r(u)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var l = "";
      for (var u in i)
        t.call(i, u) && i[u] && (l = o(l, u));
      return l;
    }
    function o(i, l) {
      return l ? i ? i + " " + l : i + l : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(lc);
var Bp = lc.exports;
const Te = /* @__PURE__ */ Po(Bp);
function Oe() {
  return Oe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Oe.apply(null, arguments);
}
function lt(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) >= 0) continue;
    n[r] = e[r];
  }
  return n;
}
var hu = /* @__PURE__ */ P.createContext({});
hu.Consumer;
hu.Provider;
function vu(e, t) {
  var n = $.useContext(hu);
  return e || n[t] || t;
}
function $t() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return t.filter(function(r) {
    return r != null;
  }).reduce(function(r, o) {
    if (typeof o != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return r === null ? o : function() {
      for (var l = arguments.length, u = new Array(l), s = 0; s < l; s++)
        u[s] = arguments[s];
      r.apply(this, u), o.apply(this, u);
    };
  }, null);
}
var Vp = ["as", "disabled", "onKeyDown"];
function Ys(e) {
  return !e || e.trim() === "#";
}
var uc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, o = e.disabled, i = e.onKeyDown, l = lt(e, Vp), u = function(p) {
    var w = l.href, m = l.onClick;
    if ((o || Ys(w)) && p.preventDefault(), o) {
      p.stopPropagation();
      return;
    }
    m && m(p);
  }, s = function(p) {
    p.key === " " && (p.preventDefault(), u(p));
  };
  return Ys(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), o && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ P.createElement(r, Oe({
    ref: t
  }, l, {
    onClick: u,
    onKeyDown: $t(s, i)
  }));
});
uc.displayName = "SafeAnchor";
var Wp = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], Hp = {
  variant: "primary",
  active: !1,
  disabled: !1
}, yu = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, o = e.size, i = e.active, l = e.className, u = e.block, s = e.type, a = e.as, p = lt(e, Wp), w = vu(n, "btn"), m = Te(l, w, i && "active", r && w + "-" + r, u && w + "-block", o && w + "-" + o);
  if (p.href)
    return /* @__PURE__ */ P.createElement(uc, Oe({}, p, {
      as: a,
      ref: t,
      className: Te(m, p.disabled && "disabled")
    }));
  t && (p.ref = t), s ? p.type = s : a || (p.type = "button");
  var E = a || "button";
  return /* @__PURE__ */ P.createElement(E, Oe({}, p, {
    className: m
  }));
});
yu.displayName = "Button";
yu.defaultProps = Hp;
var Kp = ["bsPrefix", "size", "toggle", "vertical", "className", "as"], Qp = {
  vertical: !1,
  toggle: !1,
  role: "group"
}, gu = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.size, o = e.toggle, i = e.vertical, l = e.className, u = e.as, s = u === void 0 ? "div" : u, a = lt(e, Kp), p = vu(n, "btn-group"), w = p;
  return i && (w = p + "-vertical"), /* @__PURE__ */ P.createElement(s, Oe({}, a, {
    ref: t,
    className: Te(l, w, r && p + "-" + r, o && p + "-toggle")
  }));
});
gu.displayName = "ButtonGroup";
gu.defaultProps = Qp;
var Yp = ["bsPrefix", "className"], Xp = {
  role: "toolbar"
}, wu = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, o = lt(e, Yp), i = vu(n, "btn-toolbar");
  return /* @__PURE__ */ P.createElement("div", Oe({}, o, {
    ref: t,
    className: Te(r, i)
  }));
});
wu.displayName = "ButtonToolbar";
wu.defaultProps = Xp;
var Gp = ["children"];
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function Zp(e, t) {
  if (e == null) return {};
  var n = Jp(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Jp(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function qp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function em(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, fc(r.key), r);
  }
}
function tm(e, t, n) {
  return t && em(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function nm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ll(e, t);
}
function ll(e, t) {
  return ll = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ll(e, t);
}
function rm(e) {
  var t = ac();
  return function() {
    var r = vo(e), o;
    if (t) {
      var i = vo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return om(this, o);
  };
}
function om(e, t) {
  if (t && (tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return sc(e);
}
function sc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ac() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ac = function() {
    return !!e;
  })();
}
function vo(e) {
  return vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vo(e);
}
function im(e, t, n) {
  return t = fc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fc(e) {
  var t = lm(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function lm(e, t) {
  if (tn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (tn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var gt = /* @__PURE__ */ function(e) {
  return e.MOVED = "MOVED", e.REMOVED = "REMOVED", e.FORMAT = "FORMAT", e.MOVED_AND_FORMAT = "MOVED_AND_FORMAT", e;
}({});
function cc(e, t, n) {
  var r = /* @__PURE__ */ function(o) {
    nm(l, o);
    var i = rm(l);
    function l(u) {
      var s;
      return qp(this, l), s = i.call(this, u), s.transformProps = s.transformProps.bind(sc(s)), s;
    }
    return tm(l, [{
      key: "warn",
      value: function(s) {
      }
    }, {
      key: "transformProps",
      value: function(s, a) {
        if (n[a] === void 0)
          return s[a] = this.props[a], s;
        var p = n[a], w = p.deprType, m = p.newName, E = p.expect, x = p.transform, _ = p.message;
        switch (w) {
          case gt.MOVED:
            this.warn("".concat(t, ": The prop '").concat(a, "' has been moved to '").concat(m, "'.")), s[m] = this.props[a];
            break;
          case gt.REMOVED:
            this.warn("".concat(t, ": The prop '").concat(a, "' has been removed. '").concat(_, "'"));
            break;
          case gt.FORMAT:
            E(this.props[a]) ? s[a] = this.props[a] : (this.warn("".concat(t, ": The prop '").concat(a, "' expects a new format. ").concat(_)), s[a] = x(this.props[a], this.props));
            break;
          case gt.MOVED_AND_FORMAT:
            this.warn("".concat(t, ": The prop '").concat(a, "' has been moved to '").concat(m, "' and expects a new format. ").concat(_)), s[m] = x(this.props[a], this.props);
            break;
          default:
            s[a] = this.props[a];
            break;
        }
        return s;
      }
    }, {
      key: "render",
      value: function() {
        var s = Object.keys(this.props).reduce(this.transformProps, {}), a = s.children, p = Zp(s, Gp);
        return /* @__PURE__ */ P.createElement(e, p, this.props.children || a);
      }
    }]), l;
  }(P.Component);
  return im(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
var um = ["buttonType", "className", "children", "isClose", "type", "inputRef"];
function ul() {
  return ul = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ul.apply(this, arguments);
}
function sm(e, t, n) {
  return t = dc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function am(e, t) {
  if (e == null) return {};
  var n = fm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function cm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, dc(r.key), r);
  }
}
function pm(e, t, n) {
  return t && dm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function dc(e) {
  var t = mm(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function mm(e, t) {
  if (nn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function hm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sl(e, t);
}
function sl(e, t) {
  return sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, sl(e, t);
}
function vm(e) {
  var t = pc();
  return function() {
    var r = yo(e), o;
    if (t) {
      var i = yo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return ym(this, o);
  };
}
function ym(e, t) {
  if (t && (nn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Dn(e);
}
function Dn(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (pc = function() {
    return !!e;
  })();
}
function yo(e) {
  return yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, yo(e);
}
var Eu = /* @__PURE__ */ function(e) {
  hm(n, e);
  var t = vm(n);
  function n(r) {
    var o;
    cm(this, n), o = t.call(this, r);
    var i = r.onBlur, l = r.onKeyDown;
    return o.onBlur = i.bind(Dn(o)), o.onKeyDown = l.bind(Dn(o)), o.onClick = o.onClick.bind(Dn(o)), o.setRefs = o.setRefs.bind(Dn(o)), o;
  }
  return pm(n, [{
    key: "onClick",
    value: function(o) {
      this.buttonRef.focus(), this.props.onClick(o);
    }
    /*
      The button component needs a ref to itself to be able to force
      focus in its onClick function (buttonRef). It also needs to accept
      a callback function from parent components to give those parents
      a reference to their child button (e.g. for the modal component).
      Therefore, both have been wrapped in a function bound on the class,
      since one cannot set two ref attributes on a component.
    */
  }, {
    key: "setRefs",
    value: function(o) {
      this.buttonRef = o, this.props.inputRef(o);
    }
  }, {
    key: "render",
    value: function() {
      var o = this.props, i = o.buttonType, l = o.className, u = o.children, s = o.isClose, a = o.type;
      o.inputRef;
      var p = am(o, um);
      return /* @__PURE__ */ P.createElement("button", ul({}, p, {
        className: Te(["btn", l], sm({}, "btn-".concat(i), i !== void 0), {
          close: s
        }),
        onBlur: this.onBlur,
        onClick: this.onClick,
        onKeyDown: this.onKeyDown,
        type: a,
        ref: this.setRefs
      }), u);
    }
  }]), n;
}(P.Component), gm = {
  /** Used to determine the type of button to be rendered.  See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable button types. For example, `buttonType="light"`. The default is `undefined`. */
  buttonType: g.string,
  /** Specifies Bootstrap class names to apply to the button. See [Bootstrap's buttons documentation](https://getbootstrap.com/docs/4.0/components/buttons/) for a list of applicable class names. The default is an empty array. */
  className: g.string,
  /** Specifies the text that is displayed within the button. */
  children: g.node.isRequired,
  // eslint-disable-next-line max-len
  /** A function that defines a reference for the button. An example `inputRef` from the calling component could look something like: `inputRef={(input) => { this.button = input; }}`. The default is an empty function. */
  inputRef: g.oneOfType([g.func, g.shape({
    current: g.instanceOf(g.element)
  })]),
  /** Used to determine if the button is a "Close" style button to leverage bootstrap styling. Example use case is with the Status Alert [dismiss button](https://getbootstrap.com/docs/4.0/components/alerts/#dismissing). The default is false. */
  isClose: g.bool,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onBlur` event is triggered. For example, the button could change in color or `buttonType` when focus is changed. The default is an empty function. */
  onBlur: g.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onClick` event is triggered. For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: g.func,
  // eslint-disable-next-line max-len
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.  For example, this could handle using the `Escape` key to trigger the button's action. The default is an empty function. */
  onKeyDown: g.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: g.string,
  /** Specifies variant to use. */
  variant: g.oneOf(["primary", "secondary", "success", "danger", "warning", "info", "dark", "light", "link", "outline-primary", "outline-secondary", "outline-success", "outline-danger", "outline-warning", "outline-info", "outline-dark", "outline-light"])
};
Eu.propTypes = gm;
Eu.defaultProps = {
  buttonType: void 0,
  className: void 0,
  inputRef: function() {
  },
  isClose: !1,
  onBlur: function() {
  },
  onKeyDown: function() {
  },
  onClick: function() {
  },
  type: "button",
  variant: "outline-primary"
};
const wm = cc(Eu, "Button", {
  label: {
    deprType: gt.MOVED,
    newName: "children"
  },
  className: {
    deprType: gt.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
let Xs = 0;
const Em = (e = "id") => (Xs += 1, `${e}${Xs}`);
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
var Sm = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
function go() {
  return go = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, go.apply(this, arguments);
}
function Gs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Om(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Gs(Object(n), !0).forEach(function(r) {
      mc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function mc(e, t, n) {
  return t = xm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function xm(e) {
  var t = Cm(e, "string");
  return lr(t) == "symbol" ? t : t + "";
}
function Cm(e, t) {
  if (lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function _m(e, t) {
  if (e == null) return {};
  var n = Pm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Pm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Su(e) {
  var t = e.src, n = e.id, r = e.className, o = e.hidden, i = e.screenReaderText, l = e.svgAttrs, u = e.size, s = _m(e, Sm);
  if (t) {
    var a = l["aria-label"] || l["aria-labelledby"], p = Om({}, l);
    return a || (p["aria-label"] = void 0, p["aria-hidden"] = !0), /* @__PURE__ */ P.createElement("span", go({
      className: Te("pgn__icon", mc({}, "pgn__icon__".concat(u), !!u), r),
      id: n
    }, s), /* @__PURE__ */ P.createElement(t, go({
      role: "img",
      focusable: !1
    }, p)), i && /* @__PURE__ */ P.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("span", {
    id: n || Em("Icon"),
    className: r,
    "aria-hidden": o
  }), i && /* @__PURE__ */ P.createElement("span", {
    className: "sr-only"
  }, i));
}
Su.propTypes = {
  /**
   * An icon component to render.
   * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';`
   */
  src: g.elementType,
  /** HTML element attributes to pass through to the underlying svg element */
  svgAttrs: g.shape({
    "aria-label": g.string,
    "aria-labelledby": g.string
  }),
  /**
   * the `id` property of the Icon element, by default this value is generated
   * with the `newId` function with the `prefix` of `Icon`.
   */
  id: g.string,
  /** The size of the icon. */
  size: g.oneOf(["xs", "sm", "md", "lg"]),
  /** A class name that will define what the Icon looks like. */
  className: g.string,
  /**
   * a boolean that determines the value of `aria-hidden` attribute on the Icon span,
   * this value is `true` by default.
   */
  hidden: g.bool,
  /**
   * a string or an element that will be used on a secondary span leveraging the `sr-only` style
   * for screenreader only text, this value is `undefined` by default. This value is recommended for use unless
   * the Icon is being used in a way that is purely decorative or provides no additional context for screen
   * reader users. This field should be thought of the same way an `alt` attribute would be used for `image` tags.
   */
  screenReaderText: g.oneOfType([g.string, g.element])
};
Su.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const wo = cc(Su, "Icon", {
  className: {
    deprType: gt.FORMAT,
    expect: function(t) {
      return typeof t == "string";
    },
    transform: function(t) {
      return Array.isArray(t) ? t.join(" ") : t;
    },
    message: "It should be a string."
  }
});
function ur(e) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ur(e);
}
var km = ["children", "iconAfter", "iconBefore", "size"], Tm = ["size"];
function Zs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Js(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Zs(Object(n), !0).forEach(function(r) {
      jm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Zs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jm(e, t, n) {
  return t = Nm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Nm(e) {
  var t = Rm(e, "string");
  return ur(t) == "symbol" ? t : t + "";
}
function Rm(e, t) {
  if (ur(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ur(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, sr.apply(this, arguments);
}
function hc(e, t) {
  if (e == null) return {};
  var n = Dm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Dm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ar = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.children, r = e.iconAfter, o = e.iconBefore, i = e.size, l = hc(e, km);
  return /* @__PURE__ */ P.createElement(yu, sr({
    size: i
    // Bootstrap's <Button> types do not allow 'md' or 'inline', but we do.
  }, l, {
    className: Te(l.className),
    ref: t
  }), o && /* @__PURE__ */ P.createElement(wo, {
    className: "btn-icon-before",
    size: i,
    src: o
  }), n, r && /* @__PURE__ */ P.createElement(wo, {
    className: "btn-icon-after",
    size: i,
    src: r
  }));
});
ar.propTypes = {
  /** Specifies class name to apply to the button */
  className: g.string,
  /** Disables the Button, preventing mouse events, even if the underlying component is an `<a>` element */
  disabled: g.bool,
  /** Specifies the text that is displayed within the button. */
  children: g.node.isRequired,
  /** A function that would specify what the button should do when the `onClick` event is triggered.
   * For example, the button could launch a `Modal`. The default is an empty function. */
  onClick: g.func,
  /** A function that would specify what the button should do when the `onKeyDown` event is triggered.
   * For example, this could handle using the `Escape` key to trigger the button's action.
   * The default is an empty function. */
  onKeyDown: g.func,
  /** Used to set the `type` attribute on the `button` tag.  The default type is `button`. */
  type: g.string,
  /** Specifies variant to use.
   * Can be on of the base variants: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `dark`,
   * `light`, `link`
   *
   * as well as one of the customized variants (= base variant prefixed with `inverse-`, `outline-`
   * or `inverse-outline-`)
   * */
  variant: g.string,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconBefore: g.elementType,
  /** An icon component to render.
  * Example import of a Paragon icon component: `import { Check } from '@openedx/paragon/icons';` */
  iconAfter: g.elementType
  // The 'as' type casting above is required for TypeScript checking, because the 'PropTypes.elementType' type normally
  // allows strings as a value (for use cases like 'div') but we don't support that for <Icon />/iconBefore/iconAfter.
  // The React TypeScript type definitions are more specific (React.ComponentType vs React.ElementType).
};
ar.defaultProps = Js(Js({}, ar.defaultProps), {}, {
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
});
ar.Deprecated = wm;
var vc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.size, r = hc(e, Tm);
  return /* @__PURE__ */ P.createElement(gu, sr({
    size: n
  }, r, {
    ref: t
  }));
});
vc.propTypes = {
  /** Specifies element type for this component. */
  as: g.elementType,
  /** An ARIA role describing the button group. */
  role: g.string,
  /** Specifies the size for all Buttons in the group. */
  size: g.oneOf(["sm", "md", "lg", "inline"]),
  /** Display as a button toggle group. */
  toggle: g.bool,
  /** Specifies if the set of Buttons should appear vertically stacked. */
  vertical: g.bool,
  /** Overrides underlying component base CSS class name */
  bsPrefix: g.string
};
vc.defaultProps = {
  as: "div",
  role: "group",
  toggle: !1,
  vertical: !1,
  bsPrefix: "btn-group",
  size: "md"
};
var yc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  return /* @__PURE__ */ P.createElement(wu, sr({}, e, {
    ref: t
  }));
});
yc.propTypes = {
  /** An ARIA role describing the button group. */
  role: g.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: g.string
};
yc.defaultProps = {
  role: "toolbar",
  bsPrefix: "btn-toolbar"
};
var Lm = ["children", "className", "unmountOnExit"];
function rn(e) {
  "@babel/helpers - typeof";
  return rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, rn(e);
}
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, al.apply(this, arguments);
}
function $m(e, t) {
  if (e == null) return {};
  var n = Mm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function zm(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, wc(r.key), r);
  }
}
function Im(e, t, n) {
  return t && qs(e.prototype, t), n && qs(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function bm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fl(e, t);
}
function fl(e, t) {
  return fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, fl(e, t);
}
function Fm(e) {
  var t = gc();
  return function() {
    var r = Eo(e), o;
    if (t) {
      var i = Eo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Um(this, o);
  };
}
function Um(e, t) {
  if (t && (rn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Hr(e);
}
function Hr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gc = function() {
    return !!e;
  })();
}
function Eo(e) {
  return Eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Eo(e);
}
function vi(e, t, n) {
  return t = wc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function wc(e) {
  var t = Am(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function Am(e, t) {
  if (rn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ao = /* @__PURE__ */ P.createContext(), Ou = /* @__PURE__ */ function(e) {
  bm(n, e);
  var t = Fm(n);
  function n(r) {
    var o;
    return zm(this, n), o = t.call(this, r), vi(Hr(o), "open", function() {
      o.setState({
        isOpen: !0
      }), o.props.onOpen && o.props.onOpen(), o.props.onToggle && o.props.onToggle(!0);
    }), vi(Hr(o), "close", function() {
      o.setState({
        isOpen: !1
      }), o.props.onClose && o.props.onClose(), o.props.onToggle && o.props.onToggle(!1);
    }), vi(Hr(o), "toggle", function() {
      o.state.isOpen ? o.close() : o.open();
    }), o.state = {
      isOpen: r.open !== void 0 ? r.open : r.defaultOpen
    }, o;
  }
  return Im(n, [{
    key: "render",
    value: function() {
      var o = this.props, i = o.children, l = o.className, u = o.unmountOnExit, s = $m(o, Lm);
      return delete s.defaultOpen, delete s.onToggle, delete s.onOpen, delete s.onClose, /* @__PURE__ */ P.createElement("div", al({}, s, {
        className: Te("pgn_collapsible", l, {
          "is-open": this.state.isOpen
        })
      }), /* @__PURE__ */ P.createElement(Ao.Provider, {
        value: {
          isOpen: this.state.isOpen,
          open: this.open,
          close: this.close,
          toggle: this.toggle,
          unmountOnExit: u
        }
      }, i));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(o) {
      return o.open !== void 0 ? {
        // Since this method fires on both props and state changes, local updates
        // to the controlled value will be ignored, because the props version
        // always overrides it. In this case, this is exactly what we want.
        isOpen: o.open
      } : null;
    }
  }]), n;
}(P.Component);
Ou.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies classname to append to the base element. */
  className: g.string,
  /** Specifies whether `Collapsible` should be initially open. */
  defaultOpen: g.bool,
  /** Specifies whether `Collapsible` is open. */
  open: g.bool,
  /** Callback fired when `Collapsible's` state is toggled. */
  onToggle: g.func,
  /** Callback fired when `Collapsible` opens. */
  onOpen: g.func,
  /** Callback fired when `Collapsible` closes. */
  onClose: g.func,
  /** Unmount the component (remove it from the DOM) when it is collapsed. */
  unmountOnExit: g.bool
};
Ou.defaultProps = {
  children: void 0,
  className: void 0,
  defaultOpen: !1,
  open: void 0,
  onToggle: void 0,
  onOpen: void 0,
  onClose: void 0,
  unmountOnExit: !0
};
function fr(e) {
  "@babel/helpers - typeof";
  return fr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, fr(e);
}
var Bm = ["tag", "children", "openOnly", "closeOnly", "onClick", "onKeyDown"];
function ea(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ta(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ea(Object(n), !0).forEach(function(r) {
      Vm(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ea(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Vm(e, t, n) {
  return t = Wm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Wm(e) {
  var t = Hm(e, "string");
  return fr(t) == "symbol" ? t : t + "";
}
function Hm(e, t) {
  if (fr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (fr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Km(e, t) {
  if (e == null) return {};
  var n = Qm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Qm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function xu(e) {
  var t = e.tag, n = e.children, r = e.openOnly, o = e.closeOnly, i = e.onClick, l = e.onKeyDown, u = Km(e, Bm), s = $.useContext(Ao), a = s.isOpen, p = s.open, w = s.close, m = s.toggle, E = $.useCallback(function(c) {
    r ? p(c) : o ? w(c) : m(c);
  }, [r, p, o, w, m]), x = $.useCallback(function(c) {
    i && i(c), E(c);
  }, [i, E]), _ = $.useCallback(function(c) {
    l && l(c), c.key === "Enter" && E(c);
  }, [l, E]);
  return /* @__PURE__ */ P.createElement(t, ta(ta({}, u), {}, {
    onClick: x,
    onKeyDown: _,
    role: "button",
    tabIndex: 0,
    "aria-expanded": a
  }), n);
}
xu.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies base element. */
  tag: g.oneOfType([g.string, g.elementType]),
  /** Specifies whether toggling `Collapsible's` state will always trigger only open action. */
  openOnly: g.bool,
  /** Specifies whether toggling `Collapsible's` state will always trigger only close action. */
  closeOnly: g.bool,
  /** Callback fired when element gets clicked. */
  onClick: g.func,
  /** Callback fired when a key is pressed. */
  onKeyDown: g.func
};
xu.defaultProps = {
  children: void 0,
  tag: "div",
  openOnly: !1,
  closeOnly: !1,
  onClick: void 0,
  onKeyDown: void 0
};
function Ym(e) {
  return e && e.ownerDocument || document;
}
function Xm(e) {
  var t = Ym(e);
  return t && t.defaultView || window;
}
function Gm(e, t) {
  return Xm(e).getComputedStyle(e, t);
}
var Zm = /([A-Z])/g;
function Jm(e) {
  return e.replace(Zm, "-$1").toLowerCase();
}
var qm = /^ms-/;
function Lr(e) {
  return Jm(e).replace(qm, "-ms-");
}
var eh = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function th(e) {
  return !!(e && eh.test(e));
}
function So(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Lr(t)) || Gm(e).getPropertyValue(Lr(t));
  Object.keys(t).forEach(function(o) {
    var i = t[o];
    !i && i !== 0 ? e.style.removeProperty(Lr(o)) : th(o) ? r += o + "(" + i + ") " : n += Lr(o) + ": " + i + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function cl(e, t) {
  return cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, cl(e, t);
}
function Cu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, cl(e, t);
}
const na = {
  disabled: !1
}, Oo = P.createContext(null);
var Ec = function(t) {
  return t.scrollTop;
}, Ln = "unmounted", Fe = "exited", Ue = "entering", dt = "entered", xo = "exiting", Ie = /* @__PURE__ */ function(e) {
  Cu(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = o, u = l && !l.isMounting ? r.enter : r.appear, s;
    return i.appearStatus = null, r.in ? u ? (s = Fe, i.appearStatus = Ue) : s = dt : r.unmountOnExit || r.mountOnEnter ? s = Ln : s = Fe, i.state = {
      status: s
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var l = o.in;
    return l && i.status === Ln ? {
      status: Fe
    } : null;
  };
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, n.componentDidUpdate = function(o) {
    var i = null;
    if (o !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Ue && l !== dt && (i = Ue) : (l === Ue || l === dt) && (i = xo);
    }
    this.updateStatus(!1, i);
  }, n.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, n.getTimeouts = function() {
    var o = this.props.timeout, i, l, u;
    return i = l = u = o, o != null && typeof o != "number" && (i = o.exit, l = o.enter, u = o.appear !== void 0 ? o.appear : l), {
      exit: i,
      enter: l,
      appear: u
    };
  }, n.updateStatus = function(o, i) {
    if (o === void 0 && (o = !1), i !== null)
      if (this.cancelNextCallback(), i === Ue) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Dr.findDOMNode(this);
          l && Ec(l);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Fe && this.setState({
      status: Ln
    });
  }, n.performEnter = function(o) {
    var i = this, l = this.props.enter, u = this.context ? this.context.isMounting : o, s = this.props.nodeRef ? [u] : [Dr.findDOMNode(this), u], a = s[0], p = s[1], w = this.getTimeouts(), m = u ? w.appear : w.enter;
    if (!o && !l || na.disabled) {
      this.safeSetState({
        status: dt
      }, function() {
        i.props.onEntered(a);
      });
      return;
    }
    this.props.onEnter(a, p), this.safeSetState({
      status: Ue
    }, function() {
      i.props.onEntering(a, p), i.onTransitionEnd(m, function() {
        i.safeSetState({
          status: dt
        }, function() {
          i.props.onEntered(a, p);
        });
      });
    });
  }, n.performExit = function() {
    var o = this, i = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Dr.findDOMNode(this);
    if (!i || na.disabled) {
      this.safeSetState({
        status: Fe
      }, function() {
        o.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: xo
    }, function() {
      o.props.onExiting(u), o.onTransitionEnd(l.exit, function() {
        o.safeSetState({
          status: Fe
        }, function() {
          o.props.onExited(u);
        });
      });
    });
  }, n.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, n.safeSetState = function(o, i) {
    i = this.setNextCallback(i), this.setState(o, i);
  }, n.setNextCallback = function(o) {
    var i = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, i.nextCallback = null, o(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, n.onTransitionEnd = function(o, i) {
    this.setNextCallback(i);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Dr.findDOMNode(this), u = o == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var s = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], a = s[0], p = s[1];
      this.props.addEndListener(a, p);
    }
    o != null && setTimeout(this.nextCallback, o);
  }, n.render = function() {
    var o = this.state.status;
    if (o === Ln)
      return null;
    var i = this.props, l = i.children;
    i.in, i.mountOnEnter, i.unmountOnExit, i.appear, i.enter, i.exit, i.timeout, i.addEndListener, i.onEnter, i.onEntering, i.onEntered, i.onExit, i.onExiting, i.onExited, i.nodeRef;
    var u = lt(i, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ P.createElement(Oo.Provider, {
        value: null
      }, typeof l == "function" ? l(o, u) : P.cloneElement(P.Children.only(l), u))
    );
  }, t;
}(P.Component);
Ie.contextType = Oo;
Ie.propTypes = {};
function Nt() {
}
Ie.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Nt,
  onEntering: Nt,
  onEntered: Nt,
  onExit: Nt,
  onExiting: Nt,
  onExited: Nt
};
Ie.UNMOUNTED = Ln;
Ie.EXITED = Fe;
Ie.ENTERING = Ue;
Ie.ENTERED = dt;
Ie.EXITING = xo;
const Sc = Ie, nh = !!(typeof window < "u" && window.document && window.document.createElement);
var dl = !1, pl = !1;
try {
  var yi = {
    get passive() {
      return dl = !0;
    },
    get once() {
      return pl = dl = !0;
    }
  };
  nh && (window.addEventListener("test", yi, yi), window.removeEventListener("test", yi, !0));
} catch {
}
function rh(e, t, n, r) {
  if (r && typeof r != "boolean" && !pl) {
    var o = r.once, i = r.capture, l = n;
    !pl && o && (l = n.__once || function u(s) {
      this.removeEventListener(t, u, i), n.call(this, s);
    }, n.__once = l), e.addEventListener(t, l, dl ? r : i);
  }
  e.addEventListener(t, n, r);
}
function oh(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o);
}
function Oc(e, t, n, r) {
  return rh(e, t, n, r), function() {
    oh(e, t, n, r);
  };
}
function ih(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function lh(e) {
  var t = So(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function uh(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, o = setTimeout(function() {
    r || ih(e, "transitionend", !0);
  }, t + n), i = Oc(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(o), i();
  };
}
function sh(e, t, n, r) {
  n == null && (n = lh(e) || 0);
  var o = uh(e, n, r), i = Oc(e, "transitionend", t);
  return function() {
    o(), i();
  };
}
function ra(e, t) {
  var n = So(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function ah(e, t) {
  var n = ra(e, "transitionDuration"), r = ra(e, "transitionDelay"), o = sh(e, function(i) {
    i.target === e && (o(), t(i));
  }, n + r);
}
function fh(e) {
  e.offsetHeight;
}
var ch = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], Rt, dh = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function xc(e, t) {
  var n = "offset" + e[0].toUpperCase() + e.slice(1), r = t[n], o = dh[e];
  return r + // @ts-ignore
  parseInt(So(t, o[0]), 10) + // @ts-ignore
  parseInt(So(t, o[1]), 10);
}
var ph = (Rt = {}, Rt[Fe] = "collapse", Rt[xo] = "collapsing", Rt[Ue] = "collapsing", Rt[dt] = "collapse show", Rt), mh = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  getDimensionValue: xc
}, Cc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.onEnter, r = e.onEntering, o = e.onEntered, i = e.onExit, l = e.onExiting, u = e.className, s = e.children, a = e.dimension, p = a === void 0 ? "height" : a, w = e.getDimensionValue, m = w === void 0 ? xc : w, E = lt(e, ch), x = typeof p == "function" ? p() : p, _ = $.useMemo(function() {
    return $t(function(h) {
      h.style[x] = "0";
    }, n);
  }, [x, n]), c = $.useMemo(function() {
    return $t(function(h) {
      var T = "scroll" + x[0].toUpperCase() + x.slice(1);
      h.style[x] = h[T] + "px";
    }, r);
  }, [x, r]), f = $.useMemo(function() {
    return $t(function(h) {
      h.style[x] = null;
    }, o);
  }, [x, o]), d = $.useMemo(function() {
    return $t(function(h) {
      h.style[x] = m(x, h) + "px", fh(h);
    }, i);
  }, [i, m, x]), v = $.useMemo(function() {
    return $t(function(h) {
      h.style[x] = null;
    }, l);
  }, [x, l]);
  return /* @__PURE__ */ P.createElement(
    Sc,
    Oe({
      ref: t,
      addEndListener: ah
    }, E, {
      "aria-expanded": E.role ? E.in : null,
      onEnter: _,
      onEntering: c,
      onEntered: f,
      onExit: d,
      onExiting: v
    }),
    function(h, T) {
      return /* @__PURE__ */ P.cloneElement(s, Oe({}, T, {
        className: Te(u, s.props.className, ph[h], x === "width" && "width")
      }));
    }
  );
});
Cc.defaultProps = mh;
function hh(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function vh(e, t) {
  e.classList ? e.classList.add(t) : hh(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function oa(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function yh(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = oa(e.className, t) : e.setAttribute("class", oa(e.className && e.className.baseVal || "", t));
}
var gh = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return vh(t, r);
  });
}, gi = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return yh(t, r);
  });
}, _u = /* @__PURE__ */ function(e) {
  Cu(t, e);
  function t() {
    for (var r, o = arguments.length, i = new Array(o), l = 0; l < o; l++)
      i[l] = arguments[l];
    return r = e.call.apply(e, [this].concat(i)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(u, s) {
      var a = r.resolveArguments(u, s), p = a[0], w = a[1];
      r.removeClasses(p, "exit"), r.addClass(p, w ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(u, s);
    }, r.onEntering = function(u, s) {
      var a = r.resolveArguments(u, s), p = a[0], w = a[1], m = w ? "appear" : "enter";
      r.addClass(p, m, "active"), r.props.onEntering && r.props.onEntering(u, s);
    }, r.onEntered = function(u, s) {
      var a = r.resolveArguments(u, s), p = a[0], w = a[1], m = w ? "appear" : "enter";
      r.removeClasses(p, m), r.addClass(p, m, "done"), r.props.onEntered && r.props.onEntered(u, s);
    }, r.onExit = function(u) {
      var s = r.resolveArguments(u), a = s[0];
      r.removeClasses(a, "appear"), r.removeClasses(a, "enter"), r.addClass(a, "exit", "base"), r.props.onExit && r.props.onExit(u);
    }, r.onExiting = function(u) {
      var s = r.resolveArguments(u), a = s[0];
      r.addClass(a, "exit", "active"), r.props.onExiting && r.props.onExiting(u);
    }, r.onExited = function(u) {
      var s = r.resolveArguments(u), a = s[0];
      r.removeClasses(a, "exit"), r.addClass(a, "exit", "done"), r.props.onExited && r.props.onExited(u);
    }, r.resolveArguments = function(u, s) {
      return r.props.nodeRef ? [r.props.nodeRef.current, u] : [u, s];
    }, r.getClassNames = function(u) {
      var s = r.props.classNames, a = typeof s == "string", p = a && s ? s + "-" : "", w = a ? "" + p + u : s[u], m = a ? w + "-active" : s[u + "Active"], E = a ? w + "-done" : s[u + "Done"];
      return {
        baseClassName: w,
        activeClassName: m,
        doneClassName: E
      };
    }, r;
  }
  var n = t.prototype;
  return n.addClass = function(o, i, l) {
    var u = this.getClassNames(i)[l + "ClassName"], s = this.getClassNames("enter"), a = s.doneClassName;
    i === "appear" && l === "done" && a && (u += " " + a), l === "active" && o && Ec(o), u && (this.appliedClasses[i][l] = u, gh(o, u));
  }, n.removeClasses = function(o, i) {
    var l = this.appliedClasses[i], u = l.base, s = l.active, a = l.done;
    this.appliedClasses[i] = {}, u && gi(o, u), s && gi(o, s), a && gi(o, a);
  }, n.render = function() {
    var o = this.props;
    o.classNames;
    var i = lt(o, ["classNames"]);
    return /* @__PURE__ */ P.createElement(Sc, Oe({}, i, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(P.Component);
_u.defaultProps = {
  classNames: ""
};
_u.propTypes = {};
function wh(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pu(e, t) {
  var n = function(i) {
    return t && $.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && $.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function Eh(e, t) {
  e = e || {}, t = t || {};
  function n(p) {
    return p in t ? t[p] : e[p];
  }
  var r = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (r[i] = o, o = []) : o.push(i);
  var l, u = {};
  for (var s in t) {
    if (r[s])
      for (l = 0; l < r[s].length; l++) {
        var a = r[s][l];
        u[r[s][l]] = n(a);
      }
    u[s] = n(s);
  }
  for (l = 0; l < o.length; l++)
    u[o[l]] = n(o[l]);
  return u;
}
function wt(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Sh(e, t) {
  return Pu(e.children, function(n) {
    return $.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: wt(n, "appear", e),
      enter: wt(n, "enter", e),
      exit: wt(n, "exit", e)
    });
  });
}
function Oh(e, t, n) {
  var r = Pu(e.children), o = Eh(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if ($.isValidElement(l)) {
      var u = i in t, s = i in r, a = t[i], p = $.isValidElement(a) && !a.props.in;
      s && (!u || p) ? o[i] = $.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: wt(l, "exit", e),
        enter: wt(l, "enter", e)
      }) : !s && u && !p ? o[i] = $.cloneElement(l, {
        in: !1
      }) : s && u && $.isValidElement(a) && (o[i] = $.cloneElement(l, {
        onExited: n.bind(null, l),
        in: a.props.in,
        exit: wt(l, "exit", e),
        enter: wt(l, "enter", e)
      }));
    }
  }), o;
}
var xh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Ch = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, ku = /* @__PURE__ */ function(e) {
  Cu(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = i.handleExited.bind(wh(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: l,
      firstRender: !0
    }, i;
  }
  var n = t.prototype;
  return n.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, n.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var l = i.children, u = i.handleExited, s = i.firstRender;
    return {
      children: s ? Sh(o, u) : Oh(o, l, u),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var l = Pu(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(u) {
      var s = Oe({}, u.children);
      return delete s[o.key], {
        children: s
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, u = lt(o, ["component", "childFactory"]), s = this.state.contextValue, a = xh(this.state.children).map(l);
    return delete u.appear, delete u.enter, delete u.exit, i === null ? /* @__PURE__ */ P.createElement(Oo.Provider, {
      value: s
    }, a) : /* @__PURE__ */ P.createElement(Oo.Provider, {
      value: s
    }, /* @__PURE__ */ P.createElement(i, u, a));
  }, t;
}(P.Component);
ku.propTypes = {};
ku.defaultProps = Ch;
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function ia(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ia(Object(n), !0).forEach(function(r) {
      _h(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ia(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _h(e, t, n) {
  return t = _c(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ph(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function kh(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, _c(r.key), r);
  }
}
function Th(e, t, n) {
  return t && kh(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function _c(e) {
  var t = jh(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function jh(e, t) {
  if (on(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (on(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nh(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ml(e, t);
}
function ml(e, t) {
  return ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ml(e, t);
}
function Rh(e) {
  var t = Pc();
  return function() {
    var r = Co(e), o;
    if (t) {
      var i = Co(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Dh(this, o);
  };
}
function Dh(e, t) {
  if (t && (on(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ct(e);
}
function ct(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Pc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Pc = function() {
    return !!e;
  })();
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Co(e);
}
var Tu = /* @__PURE__ */ function(e) {
  Nh(n, e);
  var t = Rh(n);
  function n(r) {
    var o;
    return Ph(this, n), o = t.call(this, r), o.state = {
      height: null
    }, o.onChildEnter = o.onChildEnter.bind(ct(o)), o.onChildEntering = o.onChildEntering.bind(ct(o)), o.onChildEntered = o.onChildEntered.bind(ct(o)), o.onChildExit = o.onChildExit.bind(ct(o)), o.onChildExiting = o.onChildExiting.bind(ct(o)), o.onChildExited = o.onChildExited.bind(ct(o)), o;
  }
  return Th(n, [{
    key: "onChildEnter",
    value: function(o) {
      this.props.onChildEnter && this.props.onChildEnter(o);
    }
  }, {
    key: "onChildEntering",
    value: function(o) {
      this.setState({
        height: o.offsetHeight
      }), this.props.onChildEntering && this.props.onChildEntering(o);
    }
  }, {
    key: "onChildEntered",
    value: function(o) {
      this.setState({
        height: null
      }), this.props.onChildEntered && this.props.onChildEntered(o);
    }
  }, {
    key: "onChildExit",
    value: function(o) {
      this.setState({
        height: o.offsetHeight
      }), this.props.onChildExit && this.props.onChildExit(o);
    }
  }, {
    key: "onChildExiting",
    value: function(o) {
      this.props.onChildExiting && this.props.onChildExiting(o);
    }
  }, {
    key: "onChildExited",
    value: function(o) {
      this.setState({
        height: null
      }), this.props.onChildExited && this.props.onChildExited(o);
    }
  }, {
    key: "renderChildTransition",
    value: function(o) {
      var i = this;
      o.key;
      var l = {
        // Prevent margin-collapsing which throws off height calculations
        padding: ".1px 0"
      }, u = {
        entering: {},
        entered: {},
        exiting: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: "none"
        },
        exited: {}
      };
      return /* @__PURE__ */ P.createElement(_u, {
        timeout: {
          enter: this.props.enterDuration,
          exit: this.props.exitDuration
        },
        unmountOnExit: !0,
        mountOnEnter: !0,
        onEnter: this.onChildEnter,
        onEntering: this.onChildEntering,
        onEntered: this.onChildEntered,
        onExit: this.onChildExit,
        onExiting: this.onChildExiting,
        onExited: this.onChildExited,
        classNames: this.props.transitionClassNames
      }, function(s) {
        return /* @__PURE__ */ P.createElement("div", {
          style: wi(wi(wi({}, l), u[s]), i.props.transitionStyles[s])
        }, o);
      });
    }
  }, {
    key: "render",
    value: function() {
      return /* @__PURE__ */ P.createElement(ku, {
        className: Te("pgn-transition-replace-group", "position-relative", {
          "overflow-hidden": this.state.height !== null
        }, this.props.className),
        style: {
          height: this.state.height
        }
      }, P.Children.map(this.props.children, this.renderChildTransition, this));
    }
  }]), n;
}(P.Component);
Tu.propTypes = {
  /** Specifies an additional class for the base element */
  children: g.element,
  /** Duration of the element appearance transition. */
  enterDuration: g.number,
  /** Duration of the element dismiss transition. */
  exitDuration: g.number,
  /** Specifies class name to append to the base element. */
  className: g.string,
  /** A `Transition` callback fired immediately after the `enter` or `appear` class is applied. */
  onChildEnter: g.func,
  /** A `Transition` callback fired immediately after the `enter-active` or `appear-active` class is applied. */
  onChildEntering: g.func,
  /**
   * A `Transition` callback fired immediately after the `enter` or
   * `appear` classes are removed and the done class is added to the DOM node.
   */
  onChildEntered: g.func,
  /** A `Transition` callback fired immediately after the `exit` class is applied. */
  onChildExit: g.func,
  /** A `Transition` callback fired immediately after the `exit-active` is applied. */
  onChildExiting: g.func,
  /**
   * A `Transition` callback fired immediately after the `exit` classes
   * are removed and the exit-done class is added to the DOM node.
   */
  onChildExited: g.func,
  /** An object that specifies transition styles. */
  transitionStyles: g.shape({
    entering: g.shape({}),
    entered: g.shape({}),
    exiting: g.shape({}),
    exited: g.shape({})
  }),
  /** Specifies class name to append to the `Transition`. */
  transitionClassNames: g.string
};
Tu.defaultProps = {
  children: void 0,
  enterDuration: 300,
  exitDuration: 300,
  className: void 0,
  onChildEnter: void 0,
  onChildEntering: void 0,
  onChildEntered: void 0,
  onChildExit: void 0,
  onChildExiting: void 0,
  onChildExited: void 0,
  transitionStyles: {},
  transitionClassNames: "pgn__transition-replace"
};
function cr(e) {
  "@babel/helpers - typeof";
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, cr(e);
}
var Lh = ["children", "transitionWrapper", "tag"];
function la(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function $h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? la(Object(n), !0).forEach(function(r) {
      Mh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : la(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Mh(e, t, n) {
  return t = zh(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function zh(e) {
  var t = Ih(e, "string");
  return cr(t) == "symbol" ? t : t + "";
}
function Ih(e, t) {
  if (cr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (cr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function bh(e, t) {
  if (e == null) return {};
  var n = Fh(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Fh(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ju(e) {
  var t = e.children, n = e.transitionWrapper, r = e.tag, o = bh(e, Lh), i = $.useContext(Ao), l = i.isOpen, u = i.unmountOnExit, s = /* @__PURE__ */ P.createElement(r, $h({
    key: "body"
  }, o), t), a = l ? s : /* @__PURE__ */ P.createElement("div", {
    key: "empty"
  });
  return n ? /* @__PURE__ */ P.cloneElement(n, {}, a) : u ? /* @__PURE__ */ P.createElement(Tu, null, a) : /* @__PURE__ */ P.createElement(Cc, {
    in: l
  }, s);
}
ju.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies content's base element. */
  tag: g.string,
  /** Specifies transition element. */
  transitionWrapper: g.element
};
ju.defaultProps = {
  children: void 0,
  tag: "div",
  transitionWrapper: void 0
};
function _o(e) {
  var t = e.children, n = e.whenOpen, r = e.whenClosed, o = $.useContext(Ao), i = o.isOpen, l = i && n || !i && r;
  return l ? /* @__PURE__ */ P.createElement(P.Fragment, null, t) : null;
}
_o.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies whether the content should be visible when `Collapsible` is open. */
  whenOpen: g.bool,
  /** Specifies whether the content should be visible when `Collapsible` is closed. */
  whenClosed: g.bool
};
_o.defaultProps = {
  children: void 0,
  whenOpen: !1,
  whenClosed: !1
};
function hl() {
  return hl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, hl.apply(this, arguments);
}
var Uh = function(t) {
  return /* @__PURE__ */ $.createElement("svg", hl({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ $.createElement("path", {
    d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z",
    fill: "currentColor"
  }));
};
function vl() {
  return vl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, vl.apply(this, arguments);
}
var Ah = function(t) {
  return /* @__PURE__ */ $.createElement("svg", vl({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), /* @__PURE__ */ $.createElement("path", {
    d: "M19 13H5v-2h14v2Z",
    fill: "currentColor"
  }));
};
function yl() {
  return yl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, yl.apply(this, arguments);
}
var Bh = function(t) {
  return /* @__PURE__ */ $.createElement("svg", yl({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ $.createElement("path", {
    d: "M7.41 18.59 8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z",
    fill: "currentColor"
  }));
};
function gl() {
  return gl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, gl.apply(this, arguments);
}
var Vh = function(t) {
  return /* @__PURE__ */ $.createElement("svg", gl({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ $.createElement("path", {
    d: "M12 5.83 15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z",
    fill: "currentColor"
  }));
};
function Wh({ panels: e, styling: t, description: n }) {
  const [r, o] = $.useState(e), i = (s) => {
    const a = [...r];
    a[s] = { ...a[s], expanded: !r[s].expanded }, o(a);
  }, l = $.useMemo(
    () => r.every((s) => s.expanded),
    [r]
  ), u = () => o(r.map((s) => ({ ...s, expanded: !l })));
  return /* @__PURE__ */ q.jsxs("div", { className: "xblock-accordion", children: [
    n.trim() !== "" && /* @__PURE__ */ q.jsx("div", { className: "accordion-description", dangerouslySetInnerHTML: { __html: n } }),
    /* @__PURE__ */ q.jsx("div", { className: "accordion-toolbar", children: /* @__PURE__ */ q.jsx(
      ar,
      {
        variant: "link",
        className: "accordion-toggle",
        iconAfter: l ? Bh : Vh,
        onClick: () => u(),
        children: l ? "Collapse all" : "Expand all"
      }
    ) }),
    /* @__PURE__ */ q.jsx(
      "div",
      {
        className: "accordion-panels",
        style: { borderColor: t == null ? void 0 : t.borderColor },
        children: r.map((s, a) => /* @__PURE__ */ q.jsxs(
          Ou,
          {
            className: `collapsible-card${s != null && s.expanded ? " is-open" : ""}`,
            open: s == null ? void 0 : s.expanded,
            onToggle: () => i(a),
            children: [
              /* @__PURE__ */ q.jsxs(
                xu,
                {
                  className: "collapsible-trigger",
                  style: {
                    backgroundColor: t == null ? void 0 : t.backgroundColor,
                    color: t == null ? void 0 : t.textColor,
                    fontSize: t == null ? void 0 : t.fontSize
                  },
                  children: [
                    /* @__PURE__ */ q.jsx(_o, { whenClosed: !0, children: /* @__PURE__ */ q.jsx(wo, { src: Uh }) }),
                    /* @__PURE__ */ q.jsx(_o, { whenOpen: !0, children: /* @__PURE__ */ q.jsx(wo, { src: Ah }) }),
                    /* @__PURE__ */ q.jsx("span", { className: "accordion-title", children: s.title })
                  ]
                }
              ),
              /* @__PURE__ */ q.jsx(ju, { className: "collapsible-body", children: /* @__PURE__ */ q.jsx("div", { dangerouslySetInnerHTML: { __html: s.contents } }) })
            ]
          },
          `${s.title}-${a}`
        ))
      }
    )
  ] });
}
const Hh = (e, {
  panels: t,
  styling: n,
  description: r
}) => {
  const o = e && "jquery" in e ? e[0] : e;
  if (!o || !(o instanceof Element)) {
    console.error("Invalid DOM element provided to renderBlock:", e);
    return;
  }
  nc.render(
    /* @__PURE__ */ q.jsx($.StrictMode, { children: /* @__PURE__ */ q.jsx(Wh, { panels: t, styling: n, description: r }) }),
    o
  );
};
export {
  Hh as renderBlock
};
