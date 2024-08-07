function Po(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ia = { exports: {} }, dr = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Tu = Object.getOwnPropertySymbols, Pc = Object.prototype.hasOwnProperty, kc = Object.prototype.propertyIsEnumerable;
function Tc(e) {
  if (e == null)
    throw new TypeError("Object.assign cannot be called with null or undefined");
  return Object(e);
}
function Nc() {
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
var la = Nc() ? Object.assign : function(e, t) {
  for (var n, r = Tc(e), o, i = 1; i < arguments.length; i++) {
    n = Object(arguments[i]);
    for (var l in n)
      Pc.call(n, l) && (r[l] = n[l]);
    if (Tu) {
      o = Tu(n);
      for (var u = 0; u < o.length; u++)
        kc.call(n, o[u]) && (r[o[u]] = n[o[u]]);
    }
  }
  return r;
}, ua = { exports: {} }, $ = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl = la, ln = 60103, sa = 60106;
$.Fragment = 60107;
$.StrictMode = 60108;
$.Profiler = 60114;
var aa = 60109, fa = 60110, ca = 60112;
$.Suspense = 60113;
var da = 60115, pa = 60116;
if (typeof Symbol == "function" && Symbol.for) {
  var we = Symbol.for;
  ln = we("react.element"), sa = we("react.portal"), $.Fragment = we("react.fragment"), $.StrictMode = we("react.strict_mode"), $.Profiler = we("react.profiler"), aa = we("react.provider"), fa = we("react.context"), ca = we("react.forward_ref"), $.Suspense = we("react.suspense"), da = we("react.memo"), pa = we("react.lazy");
}
var Nu = typeof Symbol == "function" && Symbol.iterator;
function jc(e) {
  return e === null || typeof e != "object" ? null : (e = Nu && e[Nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
function pr(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ma = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ha = {};
function un(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || ma;
}
un.prototype.isReactComponent = {};
un.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error(pr(85));
  this.updater.enqueueSetState(this, e, t, "setState");
};
un.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function va() {
}
va.prototype = un.prototype;
function gl(e, t, n) {
  this.props = e, this.context = t, this.refs = ha, this.updater = n || ma;
}
var wl = gl.prototype = new va();
wl.constructor = gl;
yl(wl, un.prototype);
wl.isPureReactComponent = !0;
var El = { current: null }, ya = Object.prototype.hasOwnProperty, ga = { key: !0, ref: !0, __self: !0, __source: !0 };
function wa(e, t, n) {
  var r, o = {}, i = null, l = null;
  if (t != null) for (r in t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t) ya.call(t, r) && !ga.hasOwnProperty(r) && (o[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) o[r] === void 0 && (o[r] = u[r]);
  return { $$typeof: ln, type: e, key: i, ref: l, props: o, _owner: El.current };
}
function Rc(e, t) {
  return { $$typeof: ln, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Sl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ln;
}
function Dc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ju = /\/+/g;
function Ko(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Dc("" + e.key) : t.toString(36);
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
        case sa:
          l = !0;
      }
  }
  if (l) return l = e, o = o(l), e = r === "" ? "." + Ko(l, 0) : r, Array.isArray(o) ? (n = "", e != null && (n = e.replace(ju, "$&/") + "/"), $r(o, t, n, "", function(a) {
    return a;
  })) : o != null && (Sl(o) && (o = Rc(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(ju, "$&/") + "/") + e)), t.push(o)), 1;
  if (l = 0, r = r === "" ? "." : r + ":", Array.isArray(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ko(i, u);
    l += $r(i, t, n, s, o);
  }
  else if (s = jc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ko(i, u++), l += $r(i, t, n, s, o);
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
function Lc(e) {
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
var Ea = { current: null };
function ze() {
  var e = Ea.current;
  if (e === null) throw Error(pr(321));
  return e;
}
var $c = { ReactCurrentDispatcher: Ea, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: El, IsSomeRendererActing: { current: !1 }, assign: yl };
$.Children = { map: Er, forEach: function(e, t, n) {
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
  if (!Sl(e)) throw Error(pr(143));
  return e;
} };
$.Component = un;
$.PureComponent = gl;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $c;
$.cloneElement = function(e, t, n) {
  if (e == null) throw Error(pr(267, e));
  var r = yl({}, e.props), o = e.key, i = e.ref, l = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, l = El.current), t.key !== void 0 && (o = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ya.call(t, s) && !ga.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
$.createContext = function(e, t) {
  return t === void 0 && (t = null), e = { $$typeof: fa, _calculateChangedBits: t, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null }, e.Provider = { $$typeof: aa, _context: e }, e.Consumer = e;
};
$.createElement = wa;
$.createFactory = function(e) {
  var t = wa.bind(null, e);
  return t.type = e, t;
};
$.createRef = function() {
  return { current: null };
};
$.forwardRef = function(e) {
  return { $$typeof: ca, render: e };
};
$.isValidElement = Sl;
$.lazy = function(e) {
  return { $$typeof: pa, _payload: { _status: -1, _result: e }, _init: Lc };
};
$.memo = function(e, t) {
  return { $$typeof: da, type: e, compare: t === void 0 ? null : t };
};
$.useCallback = function(e, t) {
  return ze().useCallback(e, t);
};
$.useContext = function(e, t) {
  return ze().useContext(e, t);
};
$.useDebugValue = function() {
};
$.useEffect = function(e, t) {
  return ze().useEffect(e, t);
};
$.useImperativeHandle = function(e, t, n) {
  return ze().useImperativeHandle(e, t, n);
};
$.useLayoutEffect = function(e, t) {
  return ze().useLayoutEffect(e, t);
};
$.useMemo = function(e, t) {
  return ze().useMemo(e, t);
};
$.useReducer = function(e, t, n) {
  return ze().useReducer(e, t, n);
};
$.useRef = function(e) {
  return ze().useRef(e);
};
$.useState = function(e) {
  return ze().useState(e);
};
$.version = "17.0.2";
ua.exports = $;
var M = ua.exports;
const P = /* @__PURE__ */ Po(M);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mc = M, Sa = 60103;
dr.Fragment = 60107;
if (typeof Symbol == "function" && Symbol.for) {
  var Ru = Symbol.for;
  Sa = Ru("react.element"), dr.Fragment = Ru("react.fragment");
}
var zc = Mc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Ic = Object.prototype.hasOwnProperty, Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oa(e, t, n) {
  var r, o = {}, i = null, l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) Ic.call(t, r) && !Fc.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: Sa, type: e, key: i, ref: l, props: o, _owner: zc.current };
}
dr.jsx = Oa;
dr.jsxs = Oa;
ia.exports = dr;
var le = ia.exports, xa = { exports: {} }, ge = {}, Ca = { exports: {} }, _a = {};
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
  function N(O) {
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
      if (R.callback === null) N(Q);
      else if (R.startTime <= O) N(Q), R.sortIndex = R.expirationTime, T(k, R);
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
          R = e.unstable_now(), typeof Y == "function" ? de.callback = Y : de === S(k) && N(k), Vo(R);
        } else N(k);
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
  var _c = o;
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
  }, e.unstable_requestPaint = _c, e.unstable_runWithPriority = function(O, R) {
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
})(_a);
Ca.exports = _a;
var bc = Ca.exports;
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ko = M, b = la, K = bc;
function y(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!ko) throw Error(y(227));
var Pa = /* @__PURE__ */ new Set(), Kn = {};
function Ct(e, t) {
  Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Pa.add(t[e]);
}
var Me = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Uc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Du = Object.prototype.hasOwnProperty, Lu = {}, $u = {};
function Ac(e) {
  return Du.call($u, e) ? !0 : Du.call(Lu, e) ? !1 : Uc.test(e) ? $u[e] = !0 : (Lu[e] = !0, !1);
}
function Bc(e, t, n, r) {
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
function Vc(e, t, n, r) {
  if (t === null || typeof t > "u" || Bc(e, t, n, r)) return !0;
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
function oe(e, t, n, r, o, i, l) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = l;
}
var Z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  Z[e] = new oe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  Z[t] = new oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  Z[e] = new oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  Z[e] = new oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  Z[e] = new oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  Z[e] = new oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  Z[e] = new oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  Z[e] = new oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  Z[e] = new oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ol = /[\-:]([a-z])/g;
function xl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ol,
    xl
  );
  Z[t] = new oe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ol, xl);
  Z[t] = new oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ol, xl);
  Z[t] = new oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  Z[e] = new oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Z.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  Z[e] = new oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Cl(e, t, n, r) {
  var o = Z.hasOwnProperty(t) ? Z[t] : null, i = o !== null ? o.type === 0 : r ? !1 : !(!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N");
  i || (Vc(t, n, o, r) && (n = null), r || o === null ? Ac(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var _t = ko.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kn = 60103, pt = 60106, Ae = 60107, _l = 60108, $n = 60114, Pl = 60109, kl = 60110, To = 60112, Mn = 60113, Kr = 60120, No = 60115, Tl = 60116, Nl = 60121, jl = 60128, ka = 60129, Rl = 60130, Ei = 60131;
if (typeof Symbol == "function" && Symbol.for) {
  var H = Symbol.for;
  kn = H("react.element"), pt = H("react.portal"), Ae = H("react.fragment"), _l = H("react.strict_mode"), $n = H("react.profiler"), Pl = H("react.provider"), kl = H("react.context"), To = H("react.forward_ref"), Mn = H("react.suspense"), Kr = H("react.suspense_list"), No = H("react.memo"), Tl = H("react.lazy"), Nl = H("react.block"), H("react.scope"), jl = H("react.opaque.id"), ka = H("react.debug_trace_mode"), Rl = H("react.offscreen"), Ei = H("react.legacy_hidden");
}
var Mu = typeof Symbol == "function" && Symbol.iterator;
function hn(e) {
  return e === null || typeof e != "object" ? null : (e = Mu && e[Mu] || e["@@iterator"], typeof e == "function" ? e : null);
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
function Wc(e) {
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
    case _l:
      return "StrictMode";
    case Mn:
      return "Suspense";
    case Kr:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case kl:
      return (e.displayName || "Context") + ".Consumer";
    case Pl:
      return (e._context.displayName || "Context") + ".Provider";
    case To:
      var t = e.render;
      return t = t.displayName || t.name || "", e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
    case No:
      return At(e.type);
    case Nl:
      return At(e._render);
    case Tl:
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
function Ta(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Hc(e) {
  var t = Ta(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = Hc(e));
}
function Na(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ta(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
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
  return b({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function zu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = qe(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function ja(e, t) {
  t = t.checked, t != null && Cl(e, "checked", t, !1);
}
function Oi(e, t) {
  ja(e, t);
  var n = qe(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? xi(e, t.type, n) : t.hasOwnProperty("defaultValue") && xi(e, t.type, qe(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Iu(e, t, n) {
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
function Kc(e) {
  var t = "";
  return ko.Children.forEach(e, function(n) {
    n != null && (t += n);
  }), t;
}
function Ci(e, t) {
  return e = b({ children: void 0 }, t), (t = Kc(t.children)) && (e.children = t), e;
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
  return b({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Fu(e, t) {
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
function Ra(e, t) {
  var n = qe(t.value), r = qe(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
var Pi = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function Da(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Da(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var xr, La = function(e) {
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
}, Qc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
  Qc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e];
  });
});
function $a(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px";
}
function Ma(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, o = $a(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
  }
}
var Yc = b({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ti(e, t) {
  if (t) {
    if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (!(typeof t.dangerouslySetInnerHTML == "object" && "__html" in t.dangerouslySetInnerHTML)) throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function Ni(e, t) {
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
function Dl(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ji = null, Vt = null, Wt = null;
function Uu(e) {
  if (e = hr(e)) {
    if (typeof ji != "function") throw Error(y(280));
    var t = e.stateNode;
    t && (t = Mo(t), ji(e.stateNode, e.type, t));
  }
}
function za(e) {
  Vt ? Wt ? Wt.push(e) : Wt = [e] : Vt = e;
}
function Ia() {
  if (Vt) {
    var e = Vt, t = Wt;
    if (Wt = Vt = null, Uu(e), t) for (e = 0; e < t.length; e++) Uu(t[e]);
  }
}
function Ll(e, t) {
  return e(t);
}
function Fa(e, t, n, r, o) {
  return e(t, n, r, o);
}
function $l() {
}
var ba = Ll, mt = !1, Xo = !1;
function Ml() {
  (Vt !== null || Wt !== null) && ($l(), Ia());
}
function Xc(e, t, n) {
  if (Xo) return e(t, n);
  Xo = !0;
  try {
    return ba(e, t, n);
  } finally {
    Xo = !1, Ml();
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
function Gc(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (p) {
    this.onError(p);
  }
}
var In = !1, Yr = null, Xr = !1, Di = null, Zc = { onError: function(e) {
  In = !0, Yr = e;
} };
function Jc(e, t, n, r, o, i, l, u, s) {
  In = !1, Yr = null, Gc.apply(Zc, arguments);
}
function qc(e, t, n, r, o, i, l, u, s) {
  if (Jc.apply(this, arguments), In) {
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
function Ua(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function Au(e) {
  if (Pt(e) !== e) throw Error(y(188));
}
function ed(e) {
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
        if (i === n) return Au(o), e;
        if (i === r) return Au(o), t;
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
function Aa(e) {
  if (e = ed(e), !e) return null;
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
function Bu(e, t) {
  for (var n = e.alternate; t !== null; ) {
    if (t === e || t === n) return !0;
    t = t.return;
  }
  return !1;
}
var Ba, zl, Va, Wa, Li = !1, xe = [], He = null, Ke = null, Qe = null, Xn = /* @__PURE__ */ new Map(), Gn = /* @__PURE__ */ new Map(), yn = [], Vu = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function $i(e, t, n, r, o) {
  return { blockedOn: e, domEventName: t, eventSystemFlags: n | 16, nativeEvent: o, targetContainers: [r] };
}
function Wu(e, t) {
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
  return e === null || e.nativeEvent !== i ? (e = $i(t, n, r, o, i), t !== null && (t = hr(t), t !== null && zl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function td(e, t, n, r, o) {
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
function nd(e) {
  var t = ht(e.target);
  if (t !== null) {
    var n = Pt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ua(n), t !== null) {
          e.blockedOn = t, Wa(e.lanePriority, function() {
            K.unstable_runWithPriority(e.priority, function() {
              Va(n);
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
    var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n !== null) return t = hr(n), t !== null && zl(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Hu(e, t, n) {
  Mr(e) && n.delete(t);
}
function rd() {
  for (Li = !1; 0 < xe.length; ) {
    var e = xe[0];
    if (e.blockedOn !== null) {
      e = hr(e.blockedOn), e !== null && Ba(e);
      break;
    }
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n !== null) {
        e.blockedOn = n;
        break;
      }
      t.shift();
    }
    e.blockedOn === null && xe.shift();
  }
  He !== null && Mr(He) && (He = null), Ke !== null && Mr(Ke) && (Ke = null), Qe !== null && Mr(Qe) && (Qe = null), Xn.forEach(Hu), Gn.forEach(Hu);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Li || (Li = !0, K.unstable_scheduleCallback(K.unstable_NormalPriority, rd)));
}
function Ha(e) {
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
  for (; 0 < yn.length && (n = yn[0], n.blockedOn === null); ) nd(n), n.blockedOn === null && yn.shift();
}
function Cr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Mt = { animationend: Cr("Animation", "AnimationEnd"), animationiteration: Cr("Animation", "AnimationIteration"), animationstart: Cr("Animation", "AnimationStart"), transitionend: Cr("Transition", "TransitionEnd") }, Go = {}, Ka = {};
Me && (Ka = document.createElement("div").style, "AnimationEvent" in window || (delete Mt.animationend.animation, delete Mt.animationiteration.animation, delete Mt.animationstart.animation), "TransitionEvent" in window || delete Mt.transitionend.transition);
function jo(e) {
  if (Go[e]) return Go[e];
  if (!Mt[e]) return e;
  var t = Mt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ka) return Go[e] = t[n];
  return e;
}
var Qa = jo("animationend"), Ya = jo("animationiteration"), Xa = jo("animationstart"), Ga = jo("transitionend"), Za = /* @__PURE__ */ new Map(), Il = /* @__PURE__ */ new Map(), od = [
  "abort",
  "abort",
  Qa,
  "animationEnd",
  Ya,
  "animationIteration",
  Xa,
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
  Ga,
  "transitionEnd",
  "waiting",
  "waiting"
];
function Fl(e, t) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n], o = e[n + 1];
    o = "on" + (o[0].toUpperCase() + o.slice(1)), Il.set(r, t), Za.set(r, o), Ct(o, [r]);
  }
}
var id = K.unstable_now;
id();
var z = 8;
function Dt(e) {
  if (1 & e) return z = 15, 1;
  if (2 & e) return z = 14, 2;
  if (4 & e) return z = 13, 4;
  var t = 24 & e;
  return t !== 0 ? (z = 12, t) : e & 32 ? (z = 11, 32) : (t = 192 & e, t !== 0 ? (z = 10, t) : e & 256 ? (z = 9, 256) : (t = 3584 & e, t !== 0 ? (z = 8, t) : e & 4096 ? (z = 7, 4096) : (t = 4186112 & e, t !== 0 ? (z = 6, t) : (t = 62914560 & e, t !== 0 ? (z = 5, t) : e & 67108864 ? (z = 4, 67108864) : e & 134217728 ? (z = 3, 134217728) : (t = 805306368 & e, t !== 0 ? (z = 2, t) : 1073741824 & e ? (z = 1, 1073741824) : (z = 8, e))))));
}
function ld(e) {
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
function ud(e) {
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
function Ja(e) {
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
var et = Math.clz32 ? Math.clz32 : fd, sd = Math.log, ad = Math.LN2;
function fd(e) {
  return e === 0 ? 32 : 31 - (sd(e) / ad | 0) | 0;
}
var cd = K.unstable_UserBlockingPriority, dd = K.unstable_runWithPriority, zr = !0;
function pd(e, t, n, r) {
  mt || $l();
  var o = bl, i = mt;
  mt = !0;
  try {
    Fa(o, e, t, n, r);
  } finally {
    (mt = i) || Ml();
  }
}
function md(e, t, n, r) {
  dd(cd, bl.bind(null, e, t, n, r));
}
function bl(e, t, n, r) {
  if (zr) {
    var o;
    if ((o = (t & 4) === 0) && 0 < xe.length && -1 < Vu.indexOf(e)) e = $i(null, e, t, n, r), xe.push(e);
    else {
      var i = Ul(e, t, n, r);
      if (i === null) o && Wu(e, r);
      else {
        if (o) {
          if (-1 < Vu.indexOf(e)) {
            e = $i(i, e, t, n, r), xe.push(e);
            return;
          }
          if (td(i, e, t, n, r)) return;
          Wu(e, r);
        }
        cf(e, t, r, null, n);
      }
    }
  }
}
function Ul(e, t, n, r) {
  var o = Dl(r);
  if (o = ht(o), o !== null) {
    var i = Pt(o);
    if (i === null) o = null;
    else {
      var l = i.tag;
      if (l === 13) {
        if (o = Ua(i), o !== null) return o;
        o = null;
      } else if (l === 3) {
        if (i.stateNode.hydrate) return i.tag === 3 ? i.stateNode.containerInfo : null;
        o = null;
      } else i !== o && (o = null);
    }
  }
  return cf(e, t, r, o, n), null;
}
var Be = null, Al = null, Ir = null;
function qa() {
  if (Ir) return Ir;
  var e, t = Al, n = t.length, r, o = "value" in Be ? Be.value : Be.textContent, i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++) ;
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++) ;
  return Ir = o.slice(e, 1 < r ? 1 - r : void 0);
}
function Fr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function _r() {
  return !0;
}
function Ku() {
  return !1;
}
function ce(e) {
  function t(n, r, o, i, l) {
    this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = i, this.target = l, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? _r : Ku, this.isPropagationStopped = Ku, this;
  }
  return b(t.prototype, { preventDefault: function() {
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
}, defaultPrevented: 0, isTrusted: 0 }, Bl = ce(sn), mr = b({}, sn, { view: 0, detail: 0 }), hd = ce(mr), Jo, qo, En, Do = b({}, mr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Vl, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== En && (En && e.type === "mousemove" ? (Jo = e.screenX - En.screenX, qo = e.screenY - En.screenY) : qo = Jo = 0, En = e), Jo);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : qo;
} }), Qu = ce(Do), vd = b({}, Do, { dataTransfer: 0 }), yd = ce(vd), gd = b({}, mr, { relatedTarget: 0 }), ei = ce(gd), wd = b({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ed = ce(wd), Sd = b({}, sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Od = ce(Sd), xd = b({}, sn, { data: 0 }), Yu = ce(xd), Cd = {
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
}, _d = {
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
}, Pd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function kd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Pd[e]) ? !!t[e] : !1;
}
function Vl() {
  return kd;
}
var Td = b({}, mr, { key: function(e) {
  if (e.key) {
    var t = Cd[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? _d[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Vl, charCode: function(e) {
  return e.type === "keypress" ? Fr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Nd = ce(Td), jd = b({}, Do, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Xu = ce(jd), Rd = b({}, mr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Vl }), Dd = ce(Rd), Ld = b({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $d = ce(Ld), Md = b({}, Do, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), zd = ce(Md), Id = [9, 13, 27, 32], Wl = Me && "CompositionEvent" in window, Fn = null;
Me && "documentMode" in document && (Fn = document.documentMode);
var Fd = Me && "TextEvent" in window && !Fn, ef = Me && (!Wl || Fn && 8 < Fn && 11 >= Fn), Gu = " ", Zu = !1;
function tf(e, t) {
  switch (e) {
    case "keyup":
      return Id.indexOf(t.keyCode) !== -1;
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
function nf(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var zt = !1;
function bd(e, t) {
  switch (e) {
    case "compositionend":
      return nf(t);
    case "keypress":
      return t.which !== 32 ? null : (Zu = !0, Gu);
    case "textInput":
      return e = t.data, e === Gu && Zu ? null : e;
    default:
      return null;
  }
}
function Ud(e, t) {
  if (zt) return e === "compositionend" || !Wl && tf(e, t) ? (e = qa(), Ir = Al = Be = null, zt = !1, e) : null;
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
      return ef && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ad = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ad[e.type] : t === "textarea";
}
function rf(e, t, n, r) {
  za(r), t = Zr(t, "onChange"), 0 < t.length && (n = new Bl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var bn = null, Jn = null;
function Bd(e) {
  sf(e, 0);
}
function Lo(e) {
  var t = Ft(e);
  if (Na(t)) return e;
}
function Vd(e, t) {
  if (e === "change") return t;
}
var of = !1;
if (Me) {
  var ti;
  if (Me) {
    var ni = "oninput" in document;
    if (!ni) {
      var qu = document.createElement("div");
      qu.setAttribute("oninput", "return;"), ni = typeof qu.oninput == "function";
    }
    ti = ni;
  } else ti = !1;
  of = ti && (!document.documentMode || 9 < document.documentMode);
}
function es() {
  bn && (bn.detachEvent("onpropertychange", lf), Jn = bn = null);
}
function lf(e) {
  if (e.propertyName === "value" && Lo(Jn)) {
    var t = [];
    if (rf(t, Jn, e, Dl(e)), e = Bd, mt) e(t);
    else {
      mt = !0;
      try {
        Ll(e, t);
      } finally {
        mt = !1, Ml();
      }
    }
  }
}
function Wd(e, t, n) {
  e === "focusin" ? (es(), bn = t, Jn = n, bn.attachEvent("onpropertychange", lf)) : e === "focusout" && es();
}
function Hd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Lo(Jn);
}
function Kd(e, t) {
  if (e === "click") return Lo(t);
}
function Qd(e, t) {
  if (e === "input" || e === "change") return Lo(t);
}
function Yd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var pe = typeof Object.is == "function" ? Object.is : Yd, Xd = Object.prototype.hasOwnProperty;
function qn(e, t) {
  if (pe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) if (!Xd.call(t, n[r]) || !pe(e[n[r]], t[n[r]])) return !1;
  return !0;
}
function ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ns(e, t) {
  var n = ts(e);
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
    n = ts(n);
  }
}
function uf(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function rs() {
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
var Gd = Me && "documentMode" in document && 11 >= document.documentMode, It = null, zi = null, Un = null, Ii = !1;
function os(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ii || It == null || It !== Qr(r) || (r = It, "selectionStart" in r && Mi(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Un && qn(Un, r) || (Un = r, r = Zr(zi, "onSelect"), 0 < r.length && (t = new Bl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = It)));
}
Fl(
  "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
  0
);
Fl("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
Fl(od, 2);
for (var is = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), ri = 0; ri < is.length; ri++) Il.set(is[ri], 0);
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
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function ls(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qc(r, t, void 0, e), e.currentTarget = null;
}
function sf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var l = r.length - 1; 0 <= l; l--) {
        var u = r[l], s = u.instance, a = u.currentTarget;
        if (u = u.listener, s !== i && o.isPropagationStopped()) break e;
        ls(o, u, a), i = s;
      }
      else for (l = 0; l < r.length; l++) {
        if (u = r[l], s = u.instance, a = u.currentTarget, u = u.listener, s !== i && o.isPropagationStopped()) break e;
        ls(o, u, a), i = s;
      }
    }
  }
  if (Xr) throw e = Di, Xr = !1, Di = null, e;
}
function I(e, t) {
  var n = pf(t), r = e + "__bubble";
  n.has(r) || (ff(t, e, 2, !1), n.add(r));
}
var us = "_reactListening" + Math.random().toString(36).slice(2);
function af(e) {
  e[us] || (e[us] = !0, Pa.forEach(function(t) {
    Zd.has(t) || ss(t, !1, e, null), ss(t, !0, e, null);
  }));
}
function ss(e, t, n, r) {
  var o = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, i = n;
  e === "selectionchange" && n.nodeType !== 9 && (i = n.ownerDocument);
  var l = pf(i), u = e + "__" + (t ? "capture" : "bubble");
  l.has(u) || (t && (o |= 4), ff(i, e, o, t), l.add(u));
}
function ff(e, t, n, r) {
  var o = Il.get(t);
  switch (o === void 0 ? 2 : o) {
    case 0:
      o = pd;
      break;
    case 1:
      o = md;
      break;
    default:
      o = bl;
  }
  n = o.bind(null, t, n, e), o = void 0, !Ri || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
}
function cf(e, t, n, r, o) {
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
  Xc(function() {
    var a = i, p = Dl(n), w = [];
    e: {
      var m = Za.get(e);
      if (m !== void 0) {
        var E = Bl, x = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = Nd;
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
            E = Qu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = yd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = Dd;
            break;
          case Qa:
          case Ya:
          case Xa:
            E = Ed;
            break;
          case Ga:
            E = $d;
            break;
          case "scroll":
            E = hd;
            break;
          case "wheel":
            E = zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = Od;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Xu;
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
          if (_ = Qu, h = "onMouseLeave", f = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (_ = Xu, h = "onPointerLeave", f = "onPointerEnter", d = "pointer"), c = E == null ? m : Ft(E), v = x == null ? m : Ft(x), m = new _(h, d + "leave", E, n, p), m.target = c, m.relatedTarget = v, h = null, ht(p) === a && (_ = new _(f, d + "enter", x, n, p), _.target = v, _.relatedTarget = c, h = _), c = h, E && x) t: {
            for (_ = E, f = x, d = 0, v = _; v; v = Nt(v)) d++;
            for (v = 0, h = f; h; h = Nt(h)) v++;
            for (; 0 < d - v; ) _ = Nt(_), d--;
            for (; 0 < v - d; ) f = Nt(f), v--;
            for (; d--; ) {
              if (_ === f || f !== null && _ === f.alternate) break t;
              _ = Nt(_), f = Nt(f);
            }
            _ = null;
          }
          else _ = null;
          E !== null && as(w, m, E, _, !1), x !== null && c !== null && as(w, c, x, _, !0);
        }
      }
      e: {
        if (m = a ? Ft(a) : window, E = m.nodeName && m.nodeName.toLowerCase(), E === "select" || E === "input" && m.type === "file") var T = Vd;
        else if (Ju(m)) if (of) T = Qd;
        else {
          T = Hd;
          var S = Wd;
        }
        else (E = m.nodeName) && E.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (T = Kd);
        if (T && (T = T(e, a))) {
          rf(w, T, n, p);
          break e;
        }
        S && S(e, m, a), e === "focusout" && (S = m._wrapperState) && S.controlled && m.type === "number" && xi(m, "number", m.value);
      }
      switch (S = a ? Ft(a) : window, e) {
        case "focusin":
          (Ju(S) || S.contentEditable === "true") && (It = S, zi = a, Un = null);
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
          Ii = !1, os(w, n, p);
          break;
        case "selectionchange":
          if (Gd) break;
        case "keydown":
        case "keyup":
          os(w, n, p);
      }
      var N;
      if (Wl) e: {
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
      else zt ? tf(e, n) && (D = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D && (ef && n.locale !== "ko" && (zt || D !== "onCompositionStart" ? D === "onCompositionEnd" && zt && (N = qa()) : (Be = p, Al = "value" in Be ? Be.value : Be.textContent, zt = !0)), S = Zr(a, D), 0 < S.length && (D = new Yu(D, e, null, n, p), w.push({ event: D, listeners: S }), N ? D.data = N : (N = nf(n), N !== null && (D.data = N)))), (N = Fd ? bd(e, n) : Ud(e, n)) && (a = Zr(a, "onBeforeInput"), 0 < a.length && (p = new Yu(
        "onBeforeInput",
        "beforeinput",
        null,
        n,
        p
      ), w.push({ event: p, listeners: a }), p.data = N));
    }
    sf(w, t);
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
function Nt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function as(e, t, n, r, o) {
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
function df(e, t) {
  switch (e) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!t.autoFocus;
  }
  return !1;
}
function Fi(e, t) {
  return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var fs = typeof setTimeout == "function" ? setTimeout : void 0, Jd = typeof clearTimeout == "function" ? clearTimeout : void 0;
function Hl(e) {
  e.nodeType === 1 ? e.textContent = "" : e.nodeType === 9 && (e = e.body, e != null && (e.textContent = ""));
}
function Ht(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
  }
  return e;
}
function cs(e) {
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
function qd(e) {
  return { $$typeof: jl, toString: e, valueOf: e };
}
var $o = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + $o, qr = "__reactProps$" + $o, an = "__reactContainer$" + $o, ds = "__reactEvents$" + $o;
function ht(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[an] || n[Ve]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = cs(e); e !== null; ) {
        if (n = e[Ve]) return n;
        e = cs(e);
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
function Ft(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function Mo(e) {
  return e[qr] || null;
}
function pf(e) {
  var t = e[ds];
  return t === void 0 && (t = e[ds] = /* @__PURE__ */ new Set()), t;
}
var bi = [], bt = -1;
function ot(e) {
  return { current: e };
}
function F(e) {
  0 > bt || (e.current = bi[bt], bi[bt] = null, bt--);
}
function A(e, t) {
  bt++, bi[bt] = e.current, e.current = t;
}
var tt = {}, ne = ot(tt), se = ot(!1), St = tt;
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
  F(se), F(ne);
}
function ps(e, t, n) {
  if (ne.current !== tt) throw Error(y(168));
  A(ne, t), A(se, n);
}
function mf(e, t, n) {
  var r = e.stateNode;
  if (e = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in e)) throw Error(y(108, At(t) || "Unknown", o));
  return b({}, n, r);
}
function br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || tt, St = ne.current, A(ne, e), A(se, se.current), !0;
}
function ms(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n ? (e = mf(e, t, St), r.__reactInternalMemoizedMergedChildContext = e, F(se), F(ne), A(ne, e)) : F(se), A(se, n);
}
var Kl = null, Et = null, ep = K.unstable_runWithPriority, Ql = K.unstable_scheduleCallback, Ui = K.unstable_cancelCallback, tp = K.unstable_shouldYield, hs = K.unstable_requestPaint, Ai = K.unstable_now, np = K.unstable_getCurrentPriorityLevel, zo = K.unstable_ImmediatePriority, hf = K.unstable_UserBlockingPriority, vf = K.unstable_NormalPriority, yf = K.unstable_LowPriority, gf = K.unstable_IdlePriority, ui = {}, rp = hs !== void 0 ? hs : function() {
}, je = null, Ur = null, si = !1, vs = Ai(), ee = 1e4 > vs ? Ai : function() {
  return Ai() - vs;
};
function qt() {
  switch (np()) {
    case zo:
      return 99;
    case hf:
      return 98;
    case vf:
      return 97;
    case yf:
      return 96;
    case gf:
      return 95;
    default:
      throw Error(y(332));
  }
}
function wf(e) {
  switch (e) {
    case 99:
      return zo;
    case 98:
      return hf;
    case 97:
      return vf;
    case 96:
      return yf;
    case 95:
      return gf;
    default:
      throw Error(y(332));
  }
}
function Ot(e, t) {
  return e = wf(e), ep(e, t);
}
function tr(e, t, n) {
  return e = wf(e), Ql(e, t, n);
}
function Ne() {
  if (Ur !== null) {
    var e = Ur;
    Ur = null, Ui(e);
  }
  Ef();
}
function Ef() {
  if (!si && je !== null) {
    si = !0;
    var e = 0;
    try {
      var t = je;
      Ot(99, function() {
        for (; e < t.length; e++) {
          var n = t[e];
          do
            n = n(!0);
          while (n !== null);
        }
      }), je = null;
    } catch (n) {
      throw je !== null && (je = je.slice(e + 1)), Ql(zo, Ne), n;
    } finally {
      si = !1;
    }
  }
}
var op = _t.ReactCurrentBatchConfig;
function Ee(e, t) {
  if (e && e.defaultProps) {
    t = b({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var to = ot(null), no = null, Ut = null, ro = null;
function Yl() {
  ro = Ut = no = null;
}
function Xl(e) {
  var t = to.current;
  F(to), e.type._context._currentValue = t;
}
function Sf(e, t) {
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
var Fe = !1;
function Gl(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
}
function Of(e, t) {
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
function ys(e, t) {
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
  Fe = !1;
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
              w = b({}, w, u);
              break e;
            case 2:
              Fe = !0;
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
function gs(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], o = r.callback;
    if (o !== null) {
      if (r.callback = null, r = n, typeof o != "function") throw Error(y(191, o));
      o.call(r);
    }
  }
}
var xf = new ko.Component().refs;
function oo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : b({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
function ws(e, t, n, r, o, i, l) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !qn(n, r) || !qn(o, i) : !0;
}
function Cf(e, t, n) {
  var r = !1, o = tt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ve(i) : (o = ae(t) ? St : ne.current, r = t.contextTypes, i = (r = r != null) ? Jt(e, o) : tt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Io, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Es(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var o = e.stateNode;
  o.props = n, o.state = e.memoizedState, o.refs = xf, Gl(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? o.context = ve(i) : (i = ae(t) ? St : ne.current, o.context = Jt(e, i)), nr(e, n, o, r), o.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (oo(e, t, i, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Io.enqueueReplaceState(o, o.state, null), nr(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4);
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
        l === xf && (l = r.refs = {}), i === null ? delete l[o] : l[o] = i;
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
function _f(e) {
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
    for (var h = null, T = null, S = f, N = f = 0, D = null; S !== null && N < d.length; N++) {
      S.index > N ? (D = S, S = null) : D = S.sibling;
      var k = m(c, S, d[N], v);
      if (k === null) {
        S === null && (S = D);
        break;
      }
      e && S && k.alternate === null && t(c, S), f = i(k, f, N), T === null ? h = k : T.sibling = k, T = k, S = D;
    }
    if (N === d.length) return n(c, S), h;
    if (S === null) {
      for (; N < d.length; N++) S = w(c, d[N], v), S !== null && (f = i(S, f, N), T === null ? h = S : T.sibling = S, T = S);
      return h;
    }
    for (S = r(c, S); N < d.length; N++) D = E(S, c, N, d[N], v), D !== null && (e && D.alternate !== null && S.delete(D.key === null ? N : D.key), f = i(D, f, N), T === null ? h = D : T.sibling = D, T = D);
    return e && S.forEach(function(Q) {
      return t(c, Q);
    }), h;
  }
  function _(c, f, d, v) {
    var h = hn(d);
    if (typeof h != "function") throw Error(y(150));
    if (d = h.call(d), d == null) throw Error(y(151));
    for (var T = h = null, S = f, N = f = 0, D = null, k = d.next(); S !== null && !k.done; N++, k = d.next()) {
      S.index > N ? (D = S, S = null) : D = S.sibling;
      var Q = m(c, S, k.value, v);
      if (Q === null) {
        S === null && (S = D);
        break;
      }
      e && S && Q.alternate === null && t(c, S), f = i(Q, f, N), T === null ? h = Q : T.sibling = Q, T = Q, S = D;
    }
    if (k.done) return n(c, S), h;
    if (S === null) {
      for (; !k.done; N++, k = d.next()) k = w(c, k.value, v), k !== null && (f = i(k, f, N), T === null ? h = k : T.sibling = k, T = k);
      return h;
    }
    for (S = r(c, S); !k.done; N++, k = d.next()) k = E(S, c, N, k.value, v), k !== null && (e && k.alternate !== null && S.delete(k.key === null ? N : k.key), f = i(k, f, N), T === null ? h = k : T.sibling = k, T = k);
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
var io = _f(!0), Pf = _f(!1), vr = {}, Pe = ot(vr), rr = ot(vr), or = ot(vr);
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
  F(Pe), A(Pe, t);
}
function en() {
  F(Pe), F(rr), F(or);
}
function Ss(e) {
  vt(or.current);
  var t = vt(Pe.current), n = ki(t, e.type);
  t !== n && (A(rr, e), A(Pe, n));
}
function Zl(e) {
  rr.current === e && (F(Pe), F(rr));
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
function kf(e, t) {
  var n = me(5, null, null, 0);
  n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, e.lastEffect !== null ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n;
}
function Os(e, t) {
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
      if (!Os(e, t)) {
        if (t = Ht(n.nextSibling), !t || !Os(e, t)) {
          e.flags = e.flags & -1025 | 2, ke = !1, De = e;
          return;
        }
        kf(De, n);
      }
      De = e, We = Ht(t.firstChild);
    } else e.flags = e.flags & -1025 | 2, ke = !1, De = e;
  }
}
function xs(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  De = e;
}
function Tr(e) {
  if (e !== De) return !1;
  if (!ke) return xs(e), ke = !0, !1;
  var t = e.type;
  if (e.tag !== 5 || t !== "head" && t !== "body" && !Fi(t, e.memoizedProps)) for (t = We; t; ) kf(e, t), t = Ht(t.nextSibling);
  if (xs(e), e.tag === 13) {
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
function Jl() {
  for (var e = 0; e < Qt.length; e++) Qt[e]._workInProgressVersionPrimary = null;
  Qt.length = 0;
}
var An = _t.ReactCurrentDispatcher, he = _t.ReactCurrentBatchConfig, ir = 0, V = null, q = null, X = null, uo = !1, Bn = !1;
function ie() {
  throw Error(y(321));
}
function ql(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!pe(e[n], t[n])) return !1;
  return !0;
}
function eu(e, t, n, r, o, i) {
  if (ir = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, An.current = e === null || e.memoizedState === null ? lp : up, e = n(r, o), Bn) {
    i = 0;
    do {
      if (Bn = !1, !(25 > i)) throw Error(y(301));
      i += 1, X = q = null, t.updateQueue = null, An.current = sp, e = n(r, o);
    } while (Bn);
  }
  if (An.current = co, t = q !== null && q.next !== null, ir = 0, X = q = V = null, uo = !1, t) throw Error(y(300));
  return e;
}
function yt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return X === null ? V.memoizedState = X = e : X = X.next = e, X;
}
function kt() {
  if (q === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = X === null ? V.memoizedState : X.next;
  if (t !== null) X = t, q = e;
  else {
    if (e === null) throw Error(y(310));
    q = e, e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, X === null ? V.memoizedState = X = e : X = X.next = e;
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
  var r = q, o = r.baseQueue, i = n.pending;
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
function Cs(e, t, n) {
  var r = t._getVersion;
  r = r(t._source);
  var o = t._workInProgressVersionPrimary;
  if (o !== null ? e = o === r : (e = e.mutableReadLanes, (e = (ir & e) === e) && (t._workInProgressVersionPrimary = r, Qt.push(t))), e) return n(t._source);
  throw Qt.push(t), Error(y(350));
}
function Tf(e, t, n, r) {
  var o = re;
  if (o === null) throw Error(y(349));
  var i = t._getVersion, l = i(t._source), u = An.current, s = u.useState(function() {
    return Cs(o, t, n);
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
  }, [t, r]), pe(E, n) && pe(x, t) && pe(w, r) || (e = { pending: null, dispatch: null, lastRenderedReducer: Ce, lastRenderedState: p }, e.dispatch = a = ru.bind(null, V, e), s.queue = e, s.baseQueue = null, p = Cs(o, t, n), s.memoizedState = s.baseState = p), p;
}
function Nf(e, t, n) {
  var r = kt();
  return Tf(r, e, t, n);
}
function Cn(e) {
  var t = yt();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = t.queue = { pending: null, dispatch: null, lastRenderedReducer: Ce, lastRenderedState: e }, e = e.dispatch = ru.bind(null, V, e), [t.memoizedState, e];
}
function so(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function _s(e) {
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
function tu(e, t, n, r) {
  var o = kt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (q !== null) {
    var l = q.memoizedState;
    if (i = l.destroy, r !== null && ql(r, l.deps)) {
      so(t, n, i, r);
      return;
    }
  }
  V.flags |= e, o.memoizedState = so(1 | t, n, i, r);
}
function Ps(e, t) {
  return Hi(516, 4, e, t);
}
function fo(e, t) {
  return tu(516, 4, e, t);
}
function jf(e, t) {
  return tu(4, 2, e, t);
}
function Rf(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Df(e, t, n) {
  return n = n != null ? n.concat([e]) : null, tu(4, 2, Rf.bind(null, t, e), n);
}
function nu() {
}
function Lf(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ql(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function $f(e, t) {
  var n = kt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && ql(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ip(e, t) {
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
function ru(e, t, n) {
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
var co = { readContext: ve, useCallback: ie, useContext: ie, useEffect: ie, useImperativeHandle: ie, useLayoutEffect: ie, useMemo: ie, useReducer: ie, useRef: ie, useState: ie, useDebugValue: ie, useDeferredValue: ie, useTransition: ie, useMutableSource: ie, useOpaqueIdentifier: ie, unstable_isNewReconciler: !1 }, lp = { readContext: ve, useCallback: function(e, t) {
  return yt().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ve, useEffect: Ps, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hi(4, 2, Rf.bind(
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = r.queue = { pending: null, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, e = e.dispatch = ru.bind(null, V, e), [r.memoizedState, e];
}, useRef: _s, useState: Cn, useDebugValue: nu, useDeferredValue: function(e) {
  var t = Cn(e), n = t[0], r = t[1];
  return Ps(function() {
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
  return e = ip.bind(null, e[1]), _s(e), [e, t];
}, useMutableSource: function(e, t, n) {
  var r = yt();
  return r.memoizedState = { refs: { getSnapshot: t, setSnapshot: null }, source: e, subscribe: n }, Tf(r, e, t, n);
}, useOpaqueIdentifier: function() {
  if (ke) {
    var e = !1, t = qd(function() {
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
}, unstable_isNewReconciler: !1 }, up = { readContext: ve, useCallback: Lf, useContext: ve, useEffect: fo, useImperativeHandle: Df, useLayoutEffect: jf, useMemo: $f, useReducer: On, useRef: ao, useState: function() {
  return On(Ce);
}, useDebugValue: nu, useDeferredValue: function(e) {
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
}, useMutableSource: Nf, useOpaqueIdentifier: function() {
  return On(Ce)[0];
}, unstable_isNewReconciler: !1 }, sp = { readContext: ve, useCallback: Lf, useContext: ve, useEffect: fo, useImperativeHandle: Df, useLayoutEffect: jf, useMemo: $f, useReducer: xn, useRef: ao, useState: function() {
  return xn(Ce);
}, useDebugValue: nu, useDeferredValue: function(e) {
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
}, useMutableSource: Nf, useOpaqueIdentifier: function() {
  return xn(Ce)[0];
}, unstable_isNewReconciler: !1 }, ap = _t.ReactCurrentOwner, Se = !1;
function ue(e, t, n, r) {
  t.child = e === null ? Pf(t, null, n, r) : io(t, e.child, n, r);
}
function ks(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return Kt(t, o), r = eu(e, t, n, r, i, o), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Le(e, t, o)) : (t.flags |= 1, ue(e, t, r, o), t.child);
}
function Ts(e, t, n, r, o, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" && !au(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, Mf(e, t, l, r, o, i)) : (e = Wr(n.type, null, r, t, t.mode, i), e.ref = t.ref, e.return = t, t.child = e);
  }
  return l = e.child, !(o & i) && (o = l.memoizedProps, n = n.compare, n = n !== null ? n : qn, n(o, r) && e.ref === t.ref) ? Le(e, t, i) : (t.flags |= 1, e = rt(l, r), e.ref = t.ref, e.return = t, t.child = e);
}
function Mf(e, t, n, r, o, i) {
  if (e !== null && qn(e.memoizedProps, r) && e.ref === t.ref) if (Se = !1, (i & o) !== 0) e.flags & 16384 && (Se = !0);
  else return t.lanes = e.lanes, Le(e, t, i);
  return Ki(e, t, n, r, i);
}
function fi(e, t, n) {
  var r = t.pendingProps, o = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden" || r.mode === "unstable-defer-without-hiding") if (!(t.mode & 4)) t.memoizedState = { baseLanes: 0 }, jr(t, n);
  else if (n & 1073741824) t.memoizedState = { baseLanes: 0 }, jr(t, i !== null ? i.baseLanes : n);
  else return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e }, jr(t, e), null;
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, jr(t, r);
  return ue(e, t, o, n), t.child;
}
function zf(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 128);
}
function Ki(e, t, n, r, o) {
  var i = ae(n) ? St : ne.current;
  return i = Jt(t, i), Kt(t, o), n = eu(e, t, n, r, i, o), e !== null && !Se ? (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, Le(e, t, o)) : (t.flags |= 1, ue(e, t, n, o), t.child);
}
function Ns(e, t, n, r, o) {
  if (ae(n)) {
    var i = !0;
    br(t);
  } else i = !1;
  if (Kt(t, o), t.stateNode === null) e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), Cf(t, n, r), Bi(t, n, r, o), r = !0;
  else if (e === null) {
    var l = t.stateNode, u = t.memoizedProps;
    l.props = u;
    var s = l.context, a = n.contextType;
    typeof a == "object" && a !== null ? a = ve(a) : (a = ae(n) ? St : ne.current, a = Jt(t, a));
    var p = n.getDerivedStateFromProps, w = typeof p == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    w || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== r || s !== a) && Es(t, l, r, a), Fe = !1;
    var m = t.memoizedState;
    l.state = m, nr(t, r, l, o), s = t.memoizedState, u !== r || m !== s || se.current || Fe ? (typeof p == "function" && (oo(t, n, p, r), s = t.memoizedState), (u = Fe || ws(t, n, u, r, m, s, a)) ? (w || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function" && (t.flags |= 4)) : (typeof l.componentDidMount == "function" && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = s), l.props = r, l.state = s, l.context = a, r = u) : (typeof l.componentDidMount == "function" && (t.flags |= 4), r = !1);
  } else {
    l = t.stateNode, Of(e, t), u = t.memoizedProps, a = t.type === t.elementType ? u : Ee(t.type, u), l.props = a, w = t.pendingProps, m = l.context, s = n.contextType, typeof s == "object" && s !== null ? s = ve(s) : (s = ae(n) ? St : ne.current, s = Jt(t, s));
    var E = n.getDerivedStateFromProps;
    (p = typeof E == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (u !== w || m !== s) && Es(t, l, r, s), Fe = !1, m = t.memoizedState, l.state = m, nr(t, r, l, o);
    var x = t.memoizedState;
    u !== w || m !== x || se.current || Fe ? (typeof E == "function" && (oo(t, n, E, r), x = t.memoizedState), (a = Fe || ws(t, n, a, r, m, x, s)) ? (p || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(
      r,
      x,
      s
    ), typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, x, s)), typeof l.componentDidUpdate == "function" && (t.flags |= 4), typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 256)) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = x), l.props = r, l.state = x, l.context = s, r = a) : (typeof l.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4), typeof l.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 256), r = !1);
  }
  return Qi(e, t, n, r, i, o);
}
function Qi(e, t, n, r, o, i) {
  zf(e, t);
  var l = (t.flags & 64) !== 0;
  if (!r && !l) return o && ms(t, n, !1), Le(e, t, i);
  r = t.stateNode, ap.current = t;
  var u = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && l ? (t.child = io(t, e.child, null, i), t.child = io(t, null, u, i)) : ue(e, t, u, i), t.memoizedState = r.state, o && ms(t, n, !0), t.child;
}
function js(e) {
  var t = e.stateNode;
  t.pendingContext ? ps(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ps(e, t.context, !1), Vi(e, t.containerInfo);
}
var Nr = { dehydrated: null, retryLane: 0 };
function Rs(e, t, n) {
  var r = t.pendingProps, o = U.current, i = !1, l;
  return (l = (t.flags & 64) !== 0) || (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), l ? (i = !0, t.flags &= -65) : e !== null && e.memoizedState === null || r.fallback === void 0 || r.unstable_avoidThisFallback === !0 || (o |= 1), A(U, o & 1), e === null ? (r.fallback !== void 0 && Wi(t), e = r.children, o = r.fallback, i ? (e = Ds(t, e, o, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Nr, e) : typeof r.unstable_expectedLoadTime == "number" ? (e = Ds(t, e, o, n), t.child.memoizedState = { baseLanes: n }, t.memoizedState = Nr, t.lanes = 33554432, e) : (n = fu({ mode: "visible", children: e }, t.mode, n, null), n.return = t, t.child = n)) : e.memoizedState !== null ? i ? (r = $s(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = Nr, r) : (n = Ls(e, t, r.children, n), t.memoizedState = null, n) : i ? (r = $s(e, t, r.children, r.fallback, n), i = t.child, o = e.child.memoizedState, i.memoizedState = o === null ? { baseLanes: n } : { baseLanes: o.baseLanes | n }, i.childLanes = e.childLanes & ~n, t.memoizedState = Nr, r) : (n = Ls(e, t, r.children, n), t.memoizedState = null, n);
}
function Ds(e, t, n, r) {
  var o = e.mode, i = e.child;
  return t = { mode: "hidden", children: t }, !(o & 2) && i !== null ? (i.childLanes = 0, i.pendingProps = t) : i = fu(t, o, 0, null), n = Gt(n, o, r, null), i.return = e, n.return = e, i.sibling = n, e.child = i, n;
}
function Ls(e, t, n, r) {
  var o = e.child;
  return e = o.sibling, n = rt(o, { mode: "visible", children: n }), !(t.mode & 2) && (n.lanes = r), n.return = t, n.sibling = null, e !== null && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n;
}
function $s(e, t, n, r, o) {
  var i = t.mode, l = e.child;
  e = l.sibling;
  var u = { mode: "hidden", children: n };
  return !(i & 2) && t.child !== l ? (n = t.child, n.childLanes = 0, n.pendingProps = u, l = n.lastEffect, l !== null ? (t.firstEffect = n.firstEffect, t.lastEffect = l, l.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = rt(l, u), e !== null ? r = rt(e, r) : (r = Gt(r, i, o, null), r.flags |= 2), r.return = t, n.return = t, n.sibling = r, t.child = n, r;
}
function Ms(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  n !== null && (n.lanes |= t), Sf(e.return, t);
}
function ci(e, t, n, r, o, i) {
  var l = e.memoizedState;
  l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o, lastEffect: i } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o, l.lastEffect = i);
}
function zs(e, t, n) {
  var r = t.pendingProps, o = r.revealOrder, i = r.tail;
  if (ue(e, t, r.children, n), r = U.current, r & 2) r = r & 1 | 2, t.flags |= 64;
  else {
    if (e !== null && e.flags & 64) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ms(e, n);
      else if (e.tag === 19) Ms(e, n);
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
var If, Yi, Ff, bf;
If = function(e, t) {
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
Ff = function(e, t, n, r) {
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
        o = b({}, o, { value: void 0 }), r = b({}, r, { value: void 0 }), i = [];
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
      else a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(a, s)) : a === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(a, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (Kn.hasOwnProperty(a) ? (s != null && a === "onScroll" && I("scroll", e), i || u === s || (i = [])) : typeof s == "object" && s !== null && s.$$typeof === jl ? s.toString() : (i = i || []).push(a, s));
    }
    n && (i = i || []).push(
      "style",
      n
    );
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
bf = function(e, t, n, r) {
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
function fp(e, t, n) {
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
      return en(), F(se), F(ne), Jl(), r = t.stateNode, r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Tr(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), Yi(t), null;
    case 5:
      Zl(t);
      var o = vt(or.current);
      if (n = t.type, e !== null && t.stateNode != null) Ff(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
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
              for (e = 0; e < Nn.length; e++) I(Nn[e], r);
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
              zu(r, i), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, I("invalid", r);
              break;
            case "textarea":
              Fu(r, i), I("invalid", r);
          }
          Ti(n, i), e = null;
          for (var l in i) i.hasOwnProperty(l) && (o = i[l], l === "children" ? typeof o == "string" ? r.textContent !== o && (e = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (e = ["children", "" + o]) : Kn.hasOwnProperty(l) && o != null && l === "onScroll" && I("scroll", r));
          switch (n) {
            case "input":
              Or(r), Iu(r, i, !0);
              break;
            case "textarea":
              Or(r), bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          r = e, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          switch (l = o.nodeType === 9 ? o : o.ownerDocument, e === Pi.html && (e = Da(n)), e === Pi.html ? n === "script" ? (e = l.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, { is: r.is }) : (e = l.createElement(n), n === "select" && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[Ve] = t, e[qr] = r, If(e, t, !1, !1), t.stateNode = e, l = Ni(n, r), n) {
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
              for (o = 0; o < Nn.length; o++) I(Nn[o], e);
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
              zu(e, r), o = Si(e, r), I("invalid", e);
              break;
            case "option":
              o = Ci(e, r);
              break;
            case "select":
              e._wrapperState = { wasMultiple: !!r.multiple }, o = b({}, r, { value: void 0 }), I("invalid", e);
              break;
            case "textarea":
              Fu(e, r), o = _i(e, r), I("invalid", e);
              break;
            default:
              o = r;
          }
          Ti(n, o);
          var u = o;
          for (i in u) if (u.hasOwnProperty(i)) {
            var s = u[i];
            i === "style" ? Ma(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && La(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Qn(e, s) : typeof s == "number" && Qn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kn.hasOwnProperty(i) ? s != null && i === "onScroll" && I("scroll", e) : s != null && Cl(e, i, s, l));
          }
          switch (n) {
            case "input":
              Or(e), Iu(e, r, !1);
              break;
            case "textarea":
              Or(e), bu(e);
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
          df(n, r) && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 128);
      }
      return null;
    case 6:
      if (e && t.stateNode != null) bf(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        n = vt(or.current), vt(Pe.current), Tr(t) ? (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, r.nodeValue !== n && (t.flags |= 4)) : (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r);
      }
      return null;
    case 13:
      return F(U), r = t.memoizedState, t.flags & 64 ? (t.lanes = n, t) : (r = r !== null, n = !1, e === null ? t.memoizedProps.fallback !== void 0 && Tr(t) : n = e.memoizedState !== null, r && !n && t.mode & 2 && (e === null && t.memoizedProps.unstable_avoidThisFallback !== !0 || U.current & 1 ? G === 0 && (G = 3) : ((G === 0 || G === 3) && (G = 4), re === null || !(yr & 134217727) && !(cn & 134217727) || Yt(re, te))), (r || n) && (t.flags |= 4), null);
    case 4:
      return en(), Yi(t), e === null && af(t.stateNode.containerInfo), null;
    case 10:
      return Xl(t), null;
    case 17:
      return ae(t.type) && eo(), null;
    case 19:
      if (F(U), r = t.memoizedState, r === null) return null;
      if (i = (t.flags & 64) !== 0, l = r.rendering, l === null) if (i) _n(r, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 64) for (e = t.child; e !== null; ) {
          if (l = lo(e), l !== null) {
            for (t.flags |= 64, _n(r, !1), i = l.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), r.lastEffect === null && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 2, i.nextEffect = null, i.firstEffect = null, i.lastEffect = null, l = i.alternate, l === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = l.childLanes, i.lanes = l.lanes, i.child = l.child, i.memoizedProps = l.memoizedProps, i.memoizedState = l.memoizedState, i.updateQueue = l.updateQueue, i.type = l.type, e = l.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return A(U, U.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        r.tail !== null && ee() > el && (t.flags |= 64, i = !0, _n(r, !1), t.lanes = 33554432);
      }
      else {
        if (!i) if (e = lo(l), e !== null) {
          if (t.flags |= 64, i = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(r, !0), r.tail === null && r.tailMode === "hidden" && !l.alternate && !ke) return t = t.lastEffect = r.lastEffect, t !== null && (t.nextEffect = null), null;
        } else 2 * ee() - r.renderingStartTime > el && n !== 1073741824 && (t.flags |= 64, i = !0, _n(r, !1), t.lanes = 33554432);
        r.isBackwards ? (l.sibling = t.child, t.child = l) : (n = r.last, n !== null ? n.sibling = l : t.child = l, r.last = l);
      }
      return r.tail !== null ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = ee(), n.sibling = null, t = U.current, A(U, i ? t & 1 | 2 : t & 1), n) : null;
    case 23:
    case 24:
      return su(), e !== null && e.memoizedState !== null != (t.memoizedState !== null) && r.mode !== "unstable-defer-without-hiding" && (t.flags |= 4), null;
  }
  throw Error(y(156, t.tag));
}
function cp(e) {
  switch (e.tag) {
    case 1:
      ae(e.type) && eo();
      var t = e.flags;
      return t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 3:
      if (en(), F(se), F(ne), Jl(), t = e.flags, t & 64) throw Error(y(285));
      return e.flags = t & -4097 | 64, e;
    case 5:
      return Zl(e), null;
    case 13:
      return F(U), t = e.flags, t & 4096 ? (e.flags = t & -4097 | 64, e) : null;
    case 19:
      return F(U), null;
    case 4:
      return en(), null;
    case 10:
      return Xl(e), null;
    case 23:
    case 24:
      return su(), null;
    default:
      return null;
  }
}
function ou(e, t) {
  try {
    var n = "", r = t;
    do
      n += Wc(r), r = r.return;
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
var dp = typeof WeakMap == "function" ? WeakMap : Map;
function Uf(e, t, n) {
  n = Ye(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    mo || (mo = !0, tl = r), Xi(e, t);
  }, n;
}
function Af(e, t, n) {
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
var pp = typeof WeakSet == "function" ? WeakSet : Set;
function Is(e) {
  var t = e.ref;
  if (t !== null) if (typeof t == "function") try {
    t(null);
  } catch (n) {
    Je(e, n);
  }
  else t.current = null;
}
function mp(e, t) {
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
      t.flags & 256 && Hl(t.stateNode.containerInfo);
      return;
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(y(163));
}
function hp(e, t, n) {
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
          r = o.next, o = o.tag, o & 4 && o & 1 && (Gf(n, e), xp(n, e)), e = r;
        } while (e !== t);
      }
      return;
    case 1:
      e = n.stateNode, n.flags & 4 && (t === null ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Ee(n.type, t.memoizedProps), e.componentDidUpdate(
        r,
        t.memoizedState,
        e.__reactInternalSnapshotBeforeUpdate
      ))), t = n.updateQueue, t !== null && gs(n, t, e);
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
        gs(n, t, e);
      }
      return;
    case 5:
      e = n.stateNode, t === null && n.flags & 4 && df(n.type, n.memoizedProps) && e.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      n.memoizedState === null && (n = n.alternate, n !== null && (n = n.memoizedState, n !== null && (n = n.dehydrated, n !== null && Ha(n))));
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
function Fs(e, t) {
  for (var n = e; ; ) {
    if (n.tag === 5) {
      var r = n.stateNode;
      if (t) r = r.style, typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none";
      else {
        r = n.stateNode;
        var o = n.memoizedProps.style;
        o = o != null && o.hasOwnProperty("display") ? o.display : null, r.style.display = $a("display", o);
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
function bs(e, t) {
  if (Et && typeof Et.onCommitFiberUnmount == "function") try {
    Et.onCommitFiberUnmount(Kl, t);
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
          if (r = r.tag, o !== void 0) if (r & 4) Gf(t, n);
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
      if (Is(t), e = t.stateNode, typeof e.componentWillUnmount == "function") try {
        e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount();
      } catch (i) {
        Je(
          t,
          i
        );
      }
      break;
    case 5:
      Is(t);
      break;
    case 4:
      Bf(e, t);
  }
}
function Us(e) {
  e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null;
}
function As(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Bs(e) {
  e: {
    for (var t = e.return; t !== null; ) {
      if (As(t)) break e;
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
      if (n.return === null || As(n.return)) {
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
function Bf(e, t) {
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
      e: for (var l = e, u = n, s = u; ; ) if (bs(l, s), s.child !== null && s.tag !== 4) s.child.return = s, s = s.child;
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
    } else if (bs(e, n), n.child !== null) {
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
          for (n[qr] = r, e === "input" && r.type === "radio" && r.name != null && ja(n, r), Ni(e, o), t = Ni(e, r), o = 0; o < i.length; o += 2) {
            var l = i[o], u = i[o + 1];
            l === "style" ? Ma(n, u) : l === "dangerouslySetInnerHTML" ? La(n, u) : l === "children" ? Qn(n, u) : Cl(n, l, u, t);
          }
          switch (e) {
            case "input":
              Oi(n, r);
              break;
            case "textarea":
              Ra(n, r);
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
      n = t.stateNode, n.hydrate && (n.hydrate = !1, Ha(n.containerInfo));
      return;
    case 12:
      return;
    case 13:
      t.memoizedState !== null && (uu = ee(), Fs(t.child, !0)), Vs(t);
      return;
    case 19:
      Vs(t);
      return;
    case 17:
      return;
    case 23:
    case 24:
      Fs(t, t.memoizedState !== null);
      return;
  }
  throw Error(y(163));
}
function Vs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new pp()), t.forEach(function(r) {
      var o = Pp.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(o, o));
    });
  }
}
function vp(e, t) {
  return e !== null && (e = e.memoizedState, e === null || e.dehydrated !== null) ? (t = t.memoizedState, t !== null && t.dehydrated === null) : !1;
}
var yp = Math.ceil, po = _t.ReactCurrentDispatcher, iu = _t.ReactCurrentOwner, j = 0, re = null, W = null, te = 0, xt = 0, Ji = ot(0), G = 0, Fo = null, fn = 0, yr = 0, cn = 0, lu = 0, qi = null, uu = 0, el = 1 / 0;
function dn() {
  el = ee() + 500;
}
var C = null, mo = !1, tl = null, _e = null, nt = !1, Vn = null, jn = 90, nl = [], rl = [], $e = null, Wn = 0, ol = null, Ar = -1, Re = 0, Br = 0, Hn = null, Vr = !1;
function fe() {
  return j & 48 ? ee() : Ar !== -1 ? Ar : Ar = ee();
}
function Ge(e) {
  if (e = e.mode, !(e & 2)) return 1;
  if (!(e & 4)) return qt() === 99 ? 1 : 2;
  if (Re === 0 && (Re = fn), op.transition !== 0) {
    Br !== 0 && (Br = qi !== null ? qi.pendingLanes : 0), e = Re;
    var t = 4186112 & ~Br;
    return t &= -t, t === 0 && (e = 4186112 & ~e, t = e & -e, t === 0 && (t = 8192)), t;
  }
  return e = qt(), j & 4 && e === 98 ? e = Gr(12, Re) : (e = ld(e), e = Gr(e, Re)), e;
}
function Ze(e, t, n) {
  if (50 < Wn) throw Wn = 0, ol = null, Error(y(185));
  if (e = bo(e, t), e === null) return null;
  Ro(e, t, n), e === re && (cn |= t, G === 4 && Yt(e, te));
  var r = qt();
  t === 1 ? j & 8 && !(j & 48) ? il(e) : (ye(e, n), j === 0 && (dn(), Ne())) : (!(j & 4) || r !== 98 && r !== 99 || ($e === null ? $e = /* @__PURE__ */ new Set([e]) : $e.add(e)), ye(e, n)), qi = e;
}
function bo(e, t) {
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
  if (r = Zn(e, e === re ? te : 0), t = z, r === 0) n !== null && (n !== ui && Ui(n), e.callbackNode = null, e.callbackPriority = 0);
  else {
    if (n !== null) {
      if (e.callbackPriority === t) return;
      n !== ui && Ui(n);
    }
    t === 15 ? (n = il.bind(null, e), je === null ? (je = [n], Ur = Ql(zo, Ef)) : je.push(n), n = ui) : t === 14 ? n = tr(99, il.bind(null, e)) : (n = ud(t), n = tr(n, Vf.bind(null, e))), e.callbackPriority = t, e.callbackNode = n;
  }
}
function Vf(e) {
  if (Ar = -1, Br = Re = 0, j & 48) throw Error(y(327));
  var t = e.callbackNode;
  if (it() && e.callbackNode !== t) return null;
  var n = Zn(e, e === re ? te : 0);
  if (n === 0) return null;
  var r = n, o = j;
  j |= 16;
  var i = Qf();
  (re !== e || te !== r) && (dn(), Xt(e, r));
  do
    try {
      Ep();
      break;
    } catch (u) {
      Kf(e, u);
    }
  while (!0);
  if (Yl(), po.current = i, j = o, W !== null ? r = 0 : (re = null, te = 0, r = G), fn & cn) Xt(e, 0);
  else if (r !== 0) {
    if (r === 2 && (j |= 64, e.hydrate && (e.hydrate = !1, Hl(e.containerInfo)), n = Ja(e), n !== 0 && (r = Rn(e, n))), r === 1) throw t = Fo, Xt(e, 0), Yt(e, n), ye(e, ee()), t;
    switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
      case 0:
      case 1:
        throw Error(y(345));
      case 2:
        ft(e);
        break;
      case 3:
        if (Yt(e, n), (n & 62914560) === n && (r = uu + 500 - ee(), 10 < r)) {
          if (Zn(e, 0) !== 0) break;
          if (o = e.suspendedLanes, (o & n) !== n) {
            fe(), e.pingedLanes |= e.suspendedLanes & o;
            break;
          }
          e.timeoutHandle = fs(ft.bind(null, e), r);
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
        if (n = o, n = ee() - n, n = (120 > n ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * yp(n / 1960)) - n, 10 < n) {
          e.timeoutHandle = fs(ft.bind(null, e), n);
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
  return ye(e, ee()), e.callbackNode === t ? Vf.bind(null, e) : null;
}
function Yt(e, t) {
  for (t &= ~lu, t &= ~cn, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - et(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function il(e) {
  if (j & 48) throw Error(y(327));
  if (it(), e === re && e.expiredLanes & te) {
    var t = te, n = Rn(e, t);
    fn & cn && (t = Zn(e, t), n = Rn(e, t));
  } else t = Zn(e, 0), n = Rn(e, t);
  if (e.tag !== 0 && n === 2 && (j |= 64, e.hydrate && (e.hydrate = !1, Hl(e.containerInfo)), t = Ja(e), t !== 0 && (n = Rn(e, t))), n === 1) throw n = Fo, Xt(e, 0), Yt(e, t), ye(e, ee()), n;
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, ft(e), ye(e, ee()), null;
}
function gp() {
  if ($e !== null) {
    var e = $e;
    $e = null, e.forEach(function(t) {
      t.expiredLanes |= 24 & t.pendingLanes, ye(t, ee());
    });
  }
  Ne();
}
function Wf(e, t) {
  var n = j;
  j |= 1;
  try {
    return e(t);
  } finally {
    j = n, j === 0 && (dn(), Ne());
  }
}
function Hf(e, t) {
  var n = j;
  j &= -2, j |= 8;
  try {
    return e(t);
  } finally {
    j = n, j === 0 && (dn(), Ne());
  }
}
function jr(e, t) {
  A(Ji, xt), xt |= t, fn |= t;
}
function su() {
  xt = Ji.current, F(Ji);
}
function Xt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Jd(n)), W !== null) for (n = W.return; n !== null; ) {
    var r = n;
    switch (r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && eo();
        break;
      case 3:
        en(), F(se), F(ne), Jl();
        break;
      case 5:
        Zl(r);
        break;
      case 4:
        en();
        break;
      case 13:
        F(U);
        break;
      case 19:
        F(U);
        break;
      case 10:
        Xl(r);
        break;
      case 23:
      case 24:
        su();
    }
    n = n.return;
  }
  re = e, W = rt(e.current, null), te = xt = fn = t, G = 0, Fo = null, lu = cn = yr = 0;
}
function Kf(e, t) {
  do {
    var n = W;
    try {
      if (Yl(), An.current = co, uo) {
        for (var r = V.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), r = r.next;
        }
        uo = !1;
      }
      if (ir = 0, X = q = V = null, Bn = !1, iu.current = null, n === null || n.return === null) {
        G = 1, Fo = t, W = null;
        break;
      }
      e: {
        var i = e, l = n.return, u = n, s = t;
        if (t = te, u.flags |= 2048, u.firstEffect = u.lastEffect = null, s !== null && typeof s == "object" && typeof s.then == "function") {
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
              if (v === null ? (v = i.pingCache = new dp(), s = /* @__PURE__ */ new Set(), v.set(a, s)) : (s = v.get(a), s === void 0 && (s = /* @__PURE__ */ new Set(), v.set(a, s))), !s.has(u)) {
                s.add(u);
                var h = _p.bind(null, i, a, u);
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
        G !== 5 && (G = 2), s = ou(s, u), m = l;
        do {
          switch (m.tag) {
            case 3:
              i = s, m.flags |= 4096, t &= -t, m.lanes |= t;
              var T = Uf(m, i, t);
              ys(m, T);
              break e;
            case 1:
              i = s;
              var S = m.type, N = m.stateNode;
              if (!(m.flags & 64) && (typeof S.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (_e === null || !_e.has(N)))) {
                m.flags |= 4096, t &= -t, m.lanes |= t;
                var D = Af(m, i, t);
                ys(m, D);
                break e;
              }
          }
          m = m.return;
        } while (m !== null);
      }
      Xf(n);
    } catch (k) {
      t = k, W === n && n !== null && (W = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Qf() {
  var e = po.current;
  return po.current = co, e === null ? co : e;
}
function Rn(e, t) {
  var n = j;
  j |= 16;
  var r = Qf();
  re === e && te === t || Xt(e, t);
  do
    try {
      wp();
      break;
    } catch (o) {
      Kf(e, o);
    }
  while (!0);
  if (Yl(), j = n, po.current = r, W !== null) throw Error(y(261));
  return re = null, te = 0, G;
}
function wp() {
  for (; W !== null; ) Yf(W);
}
function Ep() {
  for (; W !== null && !tp(); ) Yf(W);
}
function Yf(e) {
  var t = Zf(e.alternate, e, xt);
  e.memoizedProps = e.pendingProps, t === null ? Xf(e) : W = t, iu.current = null;
}
function Xf(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 2048) {
      if (n = cp(t), n !== null) {
        n.flags &= 2047, W = n;
        return;
      }
      e !== null && (e.firstEffect = e.lastEffect = null, e.flags |= 2048);
    } else {
      if (n = fp(n, t, xt), n !== null) {
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
  return Ot(99, Sp.bind(null, e, t)), null;
}
function Sp(e, t) {
  do
    it();
  while (Vn !== null);
  if (j & 48) throw Error(y(327));
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
  if ($e !== null && !(r & 24) && $e.has(e) && $e.delete(e), e === re && (W = re = null, te = 0), 1 < n.flags ? n.lastEffect !== null ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, r !== null) {
    if (o = j, j |= 32, iu.current = null, oi = zr, l = rs(), Mi(l)) {
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
        Op();
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
              Bs(C), C.flags &= -3;
              break;
            case 6:
              Bs(C), C.flags &= -3, di(C.alternate, C);
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
              u = C, Bf(l, u);
              var T = u.alternate;
              Us(u), T !== null && Us(T);
          }
          C = C.nextEffect;
        }
      } catch (k) {
        if (C === null) throw Error(y(330));
        Je(C, k), C = C.nextEffect;
      }
    while (C !== null);
    if (h = ii, v = rs(), d = h.focusedElem, l = h.selectionRange, v !== d && d && d.ownerDocument && uf(d.ownerDocument.documentElement, d)) {
      for (l !== null && Mi(d) && (v = l.start, h = l.end, h === void 0 && (h = v), "selectionStart" in d ? (d.selectionStart = v, d.selectionEnd = Math.min(h, d.value.length)) : (h = (v = d.ownerDocument || document) && v.defaultView || window, h.getSelection && (h = h.getSelection(), u = d.textContent.length, T = Math.min(l.start, u), l = l.end === void 0 ? T : Math.min(l.end, u), !h.extend && T > l && (u = l, l = T, T = u), u = ns(d, T), i = ns(d, l), u && i && (h.rangeCount !== 1 || h.anchorNode !== u.node || h.anchorOffset !== u.offset || h.focusNode !== i.node || h.focusOffset !== i.offset) && (v = v.createRange(), v.setStart(u.node, u.offset), h.removeAllRanges(), T > l ? (h.addRange(v), h.extend(i.node, i.offset)) : (v.setEnd(i.node, i.offset), h.addRange(v)))))), v = [], h = d; h = h.parentNode; ) h.nodeType === 1 && v.push({ element: h, left: h.scrollLeft, top: h.scrollTop });
      for (typeof d.focus == "function" && d.focus(), d = 0; d < v.length; d++) h = v[d], h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
    }
    zr = !!oi, ii = oi = null, e.current = n, C = r;
    do
      try {
        for (d = e; C !== null; ) {
          var S = C.flags;
          if (S & 36 && hp(d, C.alternate, C), S & 128) {
            v = void 0;
            var N = C.ref;
            if (N !== null) {
              var D = C.stateNode;
              switch (C.tag) {
                case 5:
                  v = D;
                  break;
                default:
                  v = D;
              }
              typeof N == "function" ? N(v) : N.current = v;
            }
          }
          C = C.nextEffect;
        }
      } catch (k) {
        if (C === null) throw Error(y(330));
        Je(C, k), C = C.nextEffect;
      }
    while (C !== null);
    C = null, rp(), j = o;
  } else e.current = n;
  if (nt) nt = !1, Vn = e, jn = t;
  else for (C = r; C !== null; ) t = C.nextEffect, C.nextEffect = null, C.flags & 8 && (S = C, S.sibling = null, S.stateNode = null), C = t;
  if (r = e.pendingLanes, r === 0 && (_e = null), r === 1 ? e === ol ? Wn++ : (Wn = 0, ol = e) : Wn = 0, n = n.stateNode, Et && typeof Et.onCommitFiberRoot == "function") try {
    Et.onCommitFiberRoot(Kl, n, void 0, (n.current.flags & 64) === 64);
  } catch {
  }
  if (ye(e, ee()), mo) throw mo = !1, e = tl, tl = null, e;
  return j & 8 || Ne(), null;
}
function Op() {
  for (; C !== null; ) {
    var e = C.alternate;
    Vr || Hn === null || (C.flags & 8 ? Bu(C, Hn) && (Vr = !0) : C.tag === 13 && vp(e, C) && Bu(C, Hn) && (Vr = !0));
    var t = C.flags;
    t & 256 && mp(e, C), !(t & 512) || nt || (nt = !0, tr(97, function() {
      return it(), null;
    })), C = C.nextEffect;
  }
}
function it() {
  if (jn !== 90) {
    var e = 97 < jn ? 97 : jn;
    return jn = 90, Ot(e, Cp);
  }
  return !1;
}
function xp(e, t) {
  nl.push(t, e), nt || (nt = !0, tr(97, function() {
    return it(), null;
  }));
}
function Gf(e, t) {
  rl.push(t, e), nt || (nt = !0, tr(97, function() {
    return it(), null;
  }));
}
function Cp() {
  if (Vn === null) return !1;
  var e = Vn;
  if (Vn = null, j & 48) throw Error(y(331));
  var t = j;
  j |= 32;
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
  return j = t, Ne(), !0;
}
function Ws(e, t, n) {
  t = ou(n, t), t = Uf(e, t, 1), Xe(e, t), t = fe(), e = bo(e, 1), e !== null && (Ro(e, 1, t), ye(e, t));
}
function Je(e, t) {
  if (e.tag === 3) Ws(e, e, t);
  else for (var n = e.return; n !== null; ) {
    if (n.tag === 3) {
      Ws(n, e, t);
      break;
    } else if (n.tag === 1) {
      var r = n.stateNode;
      if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (_e === null || !_e.has(r))) {
        e = ou(t, e);
        var o = Af(n, e, 1);
        if (Xe(n, o), o = fe(), n = bo(n, 1), n !== null) Ro(n, 1, o), ye(n, o);
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
function _p(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, re === e && (te & n) === n && (G === 4 || G === 3 && (te & 62914560) === te && 500 > ee() - uu ? Xt(e, 0) : lu |= n), ye(e, t);
}
function Pp(e, t) {
  var n = e.stateNode;
  n !== null && n.delete(t), t = 0, t === 0 && (t = e.mode, t & 2 ? t & 4 ? (Re === 0 && (Re = fn), t = Lt(62914560 & ~Re), t === 0 && (t = 4194304)) : t = qt() === 99 ? 1 : 2 : t = 1), n = fe(), e = bo(e, t), e !== null && (Ro(e, t, n), ye(e, n));
}
var Zf;
Zf = function(e, t, n) {
  var r = t.lanes;
  if (e !== null) if (e.memoizedProps !== t.pendingProps || se.current) Se = !0;
  else if (n & r) Se = !!(e.flags & 16384);
  else {
    switch (Se = !1, t.tag) {
      case 3:
        js(t), ai();
        break;
      case 5:
        Ss(t);
        break;
      case 1:
        ae(t.type) && br(t);
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
          return n & t.child.childLanes ? Rs(e, t, n) : (A(U, U.current & 1), t = Le(e, t, n), t !== null ? t.sibling : null);
        A(U, U.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 64) {
          if (r) return zs(e, t, n);
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
      if (r = t.type, e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = Jt(t, ne.current), Kt(t, n), o = eu(null, t, r, e, o, n), t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0) {
        if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ae(r)) {
          var i = !0;
          br(t);
        } else i = !1;
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Gl(t);
        var l = r.getDerivedStateFromProps;
        typeof l == "function" && oo(t, r, l, e), o.updater = Io, t.stateNode = o, o._reactInternals = t, Bi(t, r, e, n), t = Qi(null, t, r, !0, i, n);
      } else t.tag = 0, ue(null, t, o, n), t = t.child;
      return t;
    case 16:
      o = t.elementType;
      e: {
        switch (e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = o._init, o = i(o._payload), t.type = o, i = t.tag = Tp(o), e = Ee(o, e), i) {
          case 0:
            t = Ki(null, t, o, e, n);
            break e;
          case 1:
            t = Ns(null, t, o, e, n);
            break e;
          case 11:
            t = ks(null, t, o, e, n);
            break e;
          case 14:
            t = Ts(null, t, o, Ee(o.type, e), r, n);
            break e;
        }
        throw Error(y(306, o, ""));
      }
      return t;
    case 0:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), Ki(e, t, r, o, n);
    case 1:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), Ns(e, t, r, o, n);
    case 3:
      if (js(t), r = t.updateQueue, e === null || r === null) throw Error(y(282));
      if (r = t.pendingProps, o = t.memoizedState, o = o !== null ? o.element : null, Of(e, t), nr(t, r, null, n), r = t.memoizedState.element, r === o) ai(), t = Le(e, t, n);
      else {
        if (o = t.stateNode, (i = o.hydrate) && (We = Ht(t.stateNode.containerInfo.firstChild), De = t, i = ke = !0), i) {
          if (e = o.mutableSourceEagerHydrationData, e != null) for (o = 0; o < e.length; o += 2) i = e[o], i._workInProgressVersionPrimary = e[o + 1], Qt.push(i);
          for (n = Pf(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 1024, n = n.sibling;
        } else ue(e, t, r, n), ai();
        t = t.child;
      }
      return t;
    case 5:
      return Ss(t), e === null && Wi(t), r = t.type, o = t.pendingProps, i = e !== null ? e.memoizedProps : null, l = o.children, Fi(r, o) ? l = null : i !== null && Fi(r, i) && (t.flags |= 16), zf(e, t), ue(e, t, l, n), t.child;
    case 6:
      return e === null && Wi(t), null;
    case 13:
      return Rs(e, t, n);
    case 4:
      return Vi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = io(t, null, r, n) : ue(e, t, r, n), t.child;
    case 11:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), ks(e, t, r, o, n);
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
                u.tag === 1 && (a = Ye(-1, n & -n), a.tag = 2, Xe(u, a)), u.lanes |= n, a = u.alternate, a !== null && (a.lanes |= n), Sf(u.return, n), s.lanes |= n;
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
      return o = t.type, i = Ee(o, t.pendingProps), i = Ee(o.type, i), Ts(e, t, o, i, r, n);
    case 15:
      return Mf(e, t, t.type, t.pendingProps, r, n);
    case 17:
      return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Ee(r, o), e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, ae(r) ? (e = !0, br(t)) : e = !1, Kt(t, n), Cf(t, r, o), Bi(t, r, o, n), Qi(null, t, r, !0, e, n);
    case 19:
      return zs(e, t, n);
    case 23:
      return fi(e, t, n);
    case 24:
      return fi(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function kp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function me(e, t, n, r) {
  return new kp(e, t, n, r);
}
function au(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Tp(e) {
  if (typeof e == "function") return au(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === To) return 11;
    if (e === No) return 14;
  }
  return 2;
}
function rt(e, t) {
  var n = e.alternate;
  return n === null ? (n = me(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, o, i) {
  var l = 2;
  if (r = e, typeof e == "function") au(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else e: switch (e) {
    case Ae:
      return Gt(n.children, o, i, t);
    case ka:
      l = 8, o |= 16;
      break;
    case _l:
      l = 8, o |= 1;
      break;
    case $n:
      return e = me(12, n, t, o | 8), e.elementType = $n, e.type = $n, e.lanes = i, e;
    case Mn:
      return e = me(13, n, t, o), e.type = Mn, e.elementType = Mn, e.lanes = i, e;
    case Kr:
      return e = me(19, n, t, o), e.elementType = Kr, e.lanes = i, e;
    case Rl:
      return fu(n, o, i, t);
    case Ei:
      return e = me(24, n, t, o), e.elementType = Ei, e.lanes = i, e;
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Pl:
          l = 10;
          break e;
        case kl:
          l = 9;
          break e;
        case To:
          l = 11;
          break e;
        case No:
          l = 14;
          break e;
        case Tl:
          l = 16, r = null;
          break e;
        case Nl:
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
function fu(e, t, n, r) {
  return e = me(23, e, r, t), e.elementType = Rl, e.lanes = n, e;
}
function pi(e, t, n) {
  return e = me(6, e, null, t), e.lanes = n, e;
}
function mi(e, t, n) {
  return t = me(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Np(e, t, n) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Zo(0), this.expirationTimes = Zo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.mutableSourceEagerHydrationData = null;
}
function jp(e, t, n) {
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
        n = mf(n, s, u);
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
function Hs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function cu(e, t) {
  Hs(e, t), (e = e.alternate) && Hs(e, t);
}
function Rp() {
  return null;
}
function du(e, t, n) {
  var r = n != null && n.hydrationOptions != null && n.hydrationOptions.mutableSources || null;
  if (n = new Np(e, t, n != null && n.hydrate === !0), t = me(3, null, null, t === 2 ? 7 : t === 1 ? 3 : 0), n.current = t, t.stateNode = n, Gl(t), e[an] = n.current, af(e.nodeType === 8 ? e.parentNode : e), r) for (e = 0; e < r.length; e++) {
    t = r[e];
    var o = t._getVersion;
    o = o(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o);
  }
  this._internalRoot = n;
}
du.prototype.render = function(e) {
  ho(e, this._internalRoot, null, null);
};
du.prototype.unmount = function() {
  var e = this._internalRoot, t = e.containerInfo;
  ho(null, e, null, function() {
    t[an] = null;
  });
};
function gr(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function Dp(e, t) {
  if (t || (t = e ? e.nodeType === 9 ? e.documentElement : e.firstChild : null, t = !(!t || t.nodeType !== 1 || !t.hasAttribute("data-reactroot"))), !t) for (var n; n = e.lastChild; ) e.removeChild(n);
  return new du(e, 0, t ? { hydrate: !0 } : void 0);
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
    if (i = n._reactRootContainer = Dp(n, r), l = i._internalRoot, typeof o == "function") {
      var s = o;
      o = function() {
        var a = hi(l);
        s.call(a);
      };
    }
    Hf(function() {
      ho(t, l, e, o);
    });
  }
  return hi(l);
}
Ba = function(e) {
  if (e.tag === 13) {
    var t = fe();
    Ze(e, 4, t), cu(e, 4);
  }
};
zl = function(e) {
  if (e.tag === 13) {
    var t = fe();
    Ze(e, 67108864, t), cu(e, 67108864);
  }
};
Va = function(e) {
  if (e.tag === 13) {
    var t = fe(), n = Ge(e);
    Ze(e, n, t), cu(e, n);
  }
};
Wa = function(e, t) {
  return t();
};
ji = function(e, t, n) {
  switch (t) {
    case "input":
      if (Oi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Mo(r);
            if (!o) throw Error(y(90));
            Na(r), Oi(r, o);
          }
        }
      }
      break;
    case "textarea":
      Ra(e, n);
      break;
    case "select":
      t = n.value, t != null && Bt(e, !!n.multiple, t, !1);
  }
};
Ll = Wf;
Fa = function(e, t, n, r, o) {
  var i = j;
  j |= 4;
  try {
    return Ot(98, e.bind(null, t, n, r, o));
  } finally {
    j = i, j === 0 && (dn(), Ne());
  }
};
$l = function() {
  !(j & 49) && (gp(), it());
};
ba = function(e, t) {
  var n = j;
  j |= 2;
  try {
    return e(t);
  } finally {
    j = n, j === 0 && (dn(), Ne());
  }
};
function Jf(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gr(t)) throw Error(y(200));
  return jp(e, t, null, n);
}
var Lp = { Events: [hr, Ft, Mo, za, Ia, it, { current: !1 }] }, Pn = { findFiberByHostInstance: ht, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, $p = { bundleType: Pn.bundleType, version: Pn.version, rendererPackageName: Pn.rendererPackageName, rendererConfig: Pn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: _t.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Aa(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Pn.findFiberByHostInstance || Rp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    Kl = Rr.inject($p), Et = Rr;
  } catch {
  }
}
ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lp;
ge.createPortal = Jf;
ge.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(y(188)) : Error(y(268, Object.keys(e)));
  return e = Aa(t), e = e === null ? null : e.stateNode, e;
};
ge.flushSync = function(e, t) {
  var n = j;
  if (n & 48) return e(t);
  j |= 1;
  try {
    if (e) return Ot(99, e.bind(null, t));
  } finally {
    j = n, Ne();
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
  return e._reactRootContainer ? (Hf(function() {
    Uo(null, null, e, !1, function() {
      e._reactRootContainer = null, e[an] = null;
    });
  }), !0) : !1;
};
ge.unstable_batchedUpdates = Wf;
ge.unstable_createPortal = function(e, t) {
  return Jf(e, t, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
ge.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!gr(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return Uo(e, t, n, !1, r);
};
ge.version = "17.0.2";
function qf() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qf);
    } catch (e) {
      console.error(e);
    }
}
qf(), xa.exports = ge;
var ec = xa.exports;
const Dr = /* @__PURE__ */ Po(ec);
var tc = { exports: {} }, Mp = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", zp = Mp, Ip = zp;
function nc() {
}
function rc() {
}
rc.resetWarningCache = nc;
var Fp = function() {
  function e(r, o, i, l, u, s) {
    if (s !== Ip) {
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
    checkPropTypes: rc,
    resetWarningCache: nc
  };
  return n.PropTypes = n, n;
};
tc.exports = Fp();
var bp = tc.exports;
const g = /* @__PURE__ */ Po(bp);
var oc = { exports: {} };
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
})(oc);
var Up = oc.exports;
const Te = /* @__PURE__ */ Po(Up);
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
var pu = /* @__PURE__ */ P.createContext({});
pu.Consumer;
pu.Provider;
function mu(e, t) {
  var n = M.useContext(pu);
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
var Ap = ["as", "disabled", "onKeyDown"];
function Ks(e) {
  return !e || e.trim() === "#";
}
var ic = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.as, r = n === void 0 ? "a" : n, o = e.disabled, i = e.onKeyDown, l = lt(e, Ap), u = function(p) {
    var w = l.href, m = l.onClick;
    if ((o || Ks(w)) && p.preventDefault(), o) {
      p.stopPropagation();
      return;
    }
    m && m(p);
  }, s = function(p) {
    p.key === " " && (p.preventDefault(), u(p));
  };
  return Ks(l.href) && (l.role = l.role || "button", l.href = l.href || "#"), o && (l.tabIndex = -1, l["aria-disabled"] = !0), /* @__PURE__ */ P.createElement(r, Oe({
    ref: t
  }, l, {
    onClick: u,
    onKeyDown: $t(s, i)
  }));
});
ic.displayName = "SafeAnchor";
var Bp = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"], Vp = {
  variant: "primary",
  active: !1,
  disabled: !1
}, hu = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.variant, o = e.size, i = e.active, l = e.className, u = e.block, s = e.type, a = e.as, p = lt(e, Bp), w = mu(n, "btn"), m = Te(l, w, i && "active", r && w + "-" + r, u && w + "-block", o && w + "-" + o);
  if (p.href)
    return /* @__PURE__ */ P.createElement(ic, Oe({}, p, {
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
hu.displayName = "Button";
hu.defaultProps = Vp;
var Wp = ["bsPrefix", "size", "toggle", "vertical", "className", "as"], Hp = {
  vertical: !1,
  toggle: !1,
  role: "group"
}, vu = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.size, o = e.toggle, i = e.vertical, l = e.className, u = e.as, s = u === void 0 ? "div" : u, a = lt(e, Wp), p = mu(n, "btn-group"), w = p;
  return i && (w = p + "-vertical"), /* @__PURE__ */ P.createElement(s, Oe({}, a, {
    ref: t,
    className: Te(l, w, r && p + "-" + r, o && p + "-toggle")
  }));
});
vu.displayName = "ButtonGroup";
vu.defaultProps = Hp;
var Kp = ["bsPrefix", "className"], Qp = {
  role: "toolbar"
}, yu = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.bsPrefix, r = e.className, o = lt(e, Kp), i = mu(n, "btn-toolbar");
  return /* @__PURE__ */ P.createElement("div", Oe({}, o, {
    ref: t,
    className: Te(r, i)
  }));
});
yu.displayName = "ButtonToolbar";
yu.defaultProps = Qp;
var Yp = ["children"];
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function Xp(e, t) {
  if (e == null) return {};
  var n = Gp(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Gp(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Zp(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Jp(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, sc(r.key), r);
  }
}
function qp(e, t, n) {
  return t && Jp(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function em(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ll(e, t);
}
function ll(e, t) {
  return ll = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ll(e, t);
}
function tm(e) {
  var t = uc();
  return function() {
    var r = vo(e), o;
    if (t) {
      var i = vo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return nm(this, o);
  };
}
function nm(e, t) {
  if (t && (tn(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return lc(e);
}
function lc(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function uc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (uc = function() {
    return !!e;
  })();
}
function vo(e) {
  return vo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, vo(e);
}
function rm(e, t, n) {
  return t = sc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function sc(e) {
  var t = om(e, "string");
  return tn(t) == "symbol" ? t : t + "";
}
function om(e, t) {
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
function ac(e, t, n) {
  var r = /* @__PURE__ */ function(o) {
    em(l, o);
    var i = tm(l);
    function l(u) {
      var s;
      return Zp(this, l), s = i.call(this, u), s.transformProps = s.transformProps.bind(lc(s)), s;
    }
    return qp(l, [{
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
        var s = Object.keys(this.props).reduce(this.transformProps, {}), a = s.children, p = Xp(s, Yp);
        return /* @__PURE__ */ P.createElement(e, p, this.props.children || a);
      }
    }]), l;
  }(P.Component);
  return rm(r, "displayName", "withDeprecatedProps(".concat(t, ")")), r;
}
function nn(e) {
  "@babel/helpers - typeof";
  return nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, nn(e);
}
var im = ["buttonType", "className", "children", "isClose", "type", "inputRef"];
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
function lm(e, t, n) {
  return t = fc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function um(e, t) {
  if (e == null) return {};
  var n = sm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function sm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function am(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function fm(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, fc(r.key), r);
  }
}
function cm(e, t, n) {
  return t && fm(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fc(e) {
  var t = dm(e, "string");
  return nn(t) == "symbol" ? t : t + "";
}
function dm(e, t) {
  if (nn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (nn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function pm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && sl(e, t);
}
function sl(e, t) {
  return sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, sl(e, t);
}
function mm(e) {
  var t = cc();
  return function() {
    var r = yo(e), o;
    if (t) {
      var i = yo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return hm(this, o);
  };
}
function hm(e, t) {
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
function cc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (cc = function() {
    return !!e;
  })();
}
function yo(e) {
  return yo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, yo(e);
}
var gu = /* @__PURE__ */ function(e) {
  pm(n, e);
  var t = mm(n);
  function n(r) {
    var o;
    am(this, n), o = t.call(this, r);
    var i = r.onBlur, l = r.onKeyDown;
    return o.onBlur = i.bind(Dn(o)), o.onKeyDown = l.bind(Dn(o)), o.onClick = o.onClick.bind(Dn(o)), o.setRefs = o.setRefs.bind(Dn(o)), o;
  }
  return cm(n, [{
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
      var p = um(o, im);
      return /* @__PURE__ */ P.createElement("button", ul({}, p, {
        className: Te(["btn", l], lm({}, "btn-".concat(i), i !== void 0), {
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
}(P.Component), vm = {
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
gu.propTypes = vm;
gu.defaultProps = {
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
const ym = ac(gu, "Button", {
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
let Qs = 0;
const gm = (e = "id") => (Qs += 1, `${e}${Qs}`);
function lr(e) {
  "@babel/helpers - typeof";
  return lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, lr(e);
}
var wm = ["src", "id", "className", "hidden", "screenReaderText", "svgAttrs", "size"];
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
function Ys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Em(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ys(Object(n), !0).forEach(function(r) {
      dc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ys(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function dc(e, t, n) {
  return t = Sm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Sm(e) {
  var t = Om(e, "string");
  return lr(t) == "symbol" ? t : t + "";
}
function Om(e, t) {
  if (lr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (lr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function xm(e, t) {
  if (e == null) return {};
  var n = Cm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Cm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function wu(e) {
  var t = e.src, n = e.id, r = e.className, o = e.hidden, i = e.screenReaderText, l = e.svgAttrs, u = e.size, s = xm(e, wm);
  if (t) {
    var a = l["aria-label"] || l["aria-labelledby"], p = Em({}, l);
    return a || (p["aria-label"] = void 0, p["aria-hidden"] = !0), /* @__PURE__ */ P.createElement("span", go({
      className: Te("pgn__icon", dc({}, "pgn__icon__".concat(u), !!u), r),
      id: n
    }, s), /* @__PURE__ */ P.createElement(t, go({
      role: "img",
      focusable: !1
    }, p)), i && /* @__PURE__ */ P.createElement("span", {
      className: "sr-only"
    }, i));
  }
  return /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("span", {
    id: n || gm("Icon"),
    className: r,
    "aria-hidden": o
  }), i && /* @__PURE__ */ P.createElement("span", {
    className: "sr-only"
  }, i));
}
wu.propTypes = {
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
wu.defaultProps = {
  src: null,
  svgAttrs: {},
  id: void 0,
  hidden: !0,
  screenReaderText: void 0,
  size: void 0,
  className: void 0
};
const wo = ac(wu, "Icon", {
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
var _m = ["children", "iconAfter", "iconBefore", "size"], Pm = ["size"];
function Xs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Gs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xs(Object(n), !0).forEach(function(r) {
      km(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function km(e, t, n) {
  return t = Tm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Tm(e) {
  var t = Nm(e, "string");
  return ur(t) == "symbol" ? t : t + "";
}
function Nm(e, t) {
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
function pc(e, t) {
  if (e == null) return {};
  var n = jm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function jm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var ar = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.children, r = e.iconAfter, o = e.iconBefore, i = e.size, l = pc(e, _m);
  return /* @__PURE__ */ P.createElement(hu, sr({
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
ar.defaultProps = Gs(Gs({}, ar.defaultProps), {}, {
  children: void 0,
  className: void 0,
  iconBefore: void 0,
  iconAfter: void 0,
  disabled: !1
});
ar.Deprecated = ym;
var mc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.size, r = pc(e, Pm);
  return /* @__PURE__ */ P.createElement(vu, sr({
    size: n
  }, r, {
    ref: t
  }));
});
mc.propTypes = {
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
mc.defaultProps = {
  as: "div",
  role: "group",
  toggle: !1,
  vertical: !1,
  bsPrefix: "btn-group",
  size: "md"
};
var hc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  return /* @__PURE__ */ P.createElement(yu, sr({}, e, {
    ref: t
  }));
});
hc.propTypes = {
  /** An ARIA role describing the button group. */
  role: g.string,
  /** Overrides underlying component base CSS class name */
  bsPrefix: g.string
};
hc.defaultProps = {
  role: "toolbar",
  bsPrefix: "btn-toolbar"
};
var Rm = ["children", "className", "unmountOnExit"];
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
function Dm(e, t) {
  if (e == null) return {};
  var n = Lm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Lm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function $m(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Zs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, yc(r.key), r);
  }
}
function Mm(e, t, n) {
  return t && Zs(e.prototype, t), n && Zs(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function zm(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && fl(e, t);
}
function fl(e, t) {
  return fl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, fl(e, t);
}
function Im(e) {
  var t = vc();
  return function() {
    var r = Eo(e), o;
    if (t) {
      var i = Eo(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return Fm(this, o);
  };
}
function Fm(e, t) {
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
function vc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (vc = function() {
    return !!e;
  })();
}
function Eo(e) {
  return Eo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Eo(e);
}
function vi(e, t, n) {
  return t = yc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function yc(e) {
  var t = bm(e, "string");
  return rn(t) == "symbol" ? t : t + "";
}
function bm(e, t) {
  if (rn(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (rn(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Ao = /* @__PURE__ */ P.createContext(), Eu = /* @__PURE__ */ function(e) {
  zm(n, e);
  var t = Im(n);
  function n(r) {
    var o;
    return $m(this, n), o = t.call(this, r), vi(Hr(o), "open", function() {
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
  return Mm(n, [{
    key: "render",
    value: function() {
      var o = this.props, i = o.children, l = o.className, u = o.unmountOnExit, s = Dm(o, Rm);
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
Eu.propTypes = {
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
Eu.defaultProps = {
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
var Um = ["tag", "children", "openOnly", "closeOnly", "onClick", "onKeyDown"];
function Js(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function qs(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Js(Object(n), !0).forEach(function(r) {
      Am(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Js(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Am(e, t, n) {
  return t = Bm(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bm(e) {
  var t = Vm(e, "string");
  return fr(t) == "symbol" ? t : t + "";
}
function Vm(e, t) {
  if (fr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (fr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Wm(e, t) {
  if (e == null) return {};
  var n = Hm(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Hm(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function Su(e) {
  var t = e.tag, n = e.children, r = e.openOnly, o = e.closeOnly, i = e.onClick, l = e.onKeyDown, u = Wm(e, Um), s = M.useContext(Ao), a = s.isOpen, p = s.open, w = s.close, m = s.toggle, E = M.useCallback(function(c) {
    r ? p(c) : o ? w(c) : m(c);
  }, [r, p, o, w, m]), x = M.useCallback(function(c) {
    i && i(c), E(c);
  }, [i, E]), _ = M.useCallback(function(c) {
    l && l(c), c.key === "Enter" && E(c);
  }, [l, E]);
  return /* @__PURE__ */ P.createElement(t, qs(qs({}, u), {}, {
    onClick: x,
    onKeyDown: _,
    role: "button",
    tabIndex: 0,
    "aria-expanded": a
  }), n);
}
Su.propTypes = {
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
Su.defaultProps = {
  children: void 0,
  tag: "div",
  openOnly: !1,
  closeOnly: !1,
  onClick: void 0,
  onKeyDown: void 0
};
function Km(e) {
  return e && e.ownerDocument || document;
}
function Qm(e) {
  var t = Km(e);
  return t && t.defaultView || window;
}
function Ym(e, t) {
  return Qm(e).getComputedStyle(e, t);
}
var Xm = /([A-Z])/g;
function Gm(e) {
  return e.replace(Xm, "-$1").toLowerCase();
}
var Zm = /^ms-/;
function Lr(e) {
  return Gm(e).replace(Zm, "-ms-");
}
var Jm = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function qm(e) {
  return !!(e && Jm.test(e));
}
function So(e, t) {
  var n = "", r = "";
  if (typeof t == "string")
    return e.style.getPropertyValue(Lr(t)) || Ym(e).getPropertyValue(Lr(t));
  Object.keys(t).forEach(function(o) {
    var i = t[o];
    !i && i !== 0 ? e.style.removeProperty(Lr(o)) : qm(o) ? r += o + "(" + i + ") " : n += Lr(o) + ": " + i + ";";
  }), r && (n += "transform: " + r + ";"), e.style.cssText += ";" + n;
}
function cl(e, t) {
  return cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, cl(e, t);
}
function Ou(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, cl(e, t);
}
const ea = {
  disabled: !1
}, Oo = P.createContext(null);
var gc = function(t) {
  return t.scrollTop;
}, Ln = "unmounted", be = "exited", Ue = "entering", dt = "entered", xo = "exiting", Ie = /* @__PURE__ */ function(e) {
  Ou(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = o, u = l && !l.isMounting ? r.enter : r.appear, s;
    return i.appearStatus = null, r.in ? u ? (s = be, i.appearStatus = Ue) : s = dt : r.unmountOnExit || r.mountOnEnter ? s = Ln : s = be, i.state = {
      status: s
    }, i.nextCallback = null, i;
  }
  t.getDerivedStateFromProps = function(o, i) {
    var l = o.in;
    return l && i.status === Ln ? {
      status: be
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
          l && gc(l);
        }
        this.performEnter(o);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === be && this.setState({
      status: Ln
    });
  }, n.performEnter = function(o) {
    var i = this, l = this.props.enter, u = this.context ? this.context.isMounting : o, s = this.props.nodeRef ? [u] : [Dr.findDOMNode(this), u], a = s[0], p = s[1], w = this.getTimeouts(), m = u ? w.appear : w.enter;
    if (!o && !l || ea.disabled) {
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
    if (!i || ea.disabled) {
      this.safeSetState({
        status: be
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
          status: be
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
function jt() {
}
Ie.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: jt,
  onEntering: jt,
  onEntered: jt,
  onExit: jt,
  onExiting: jt,
  onExited: jt
};
Ie.UNMOUNTED = Ln;
Ie.EXITED = be;
Ie.ENTERING = Ue;
Ie.ENTERED = dt;
Ie.EXITING = xo;
const wc = Ie, eh = !!(typeof window < "u" && window.document && window.document.createElement);
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
  eh && (window.addEventListener("test", yi, yi), window.removeEventListener("test", yi, !0));
} catch {
}
function th(e, t, n, r) {
  if (r && typeof r != "boolean" && !pl) {
    var o = r.once, i = r.capture, l = n;
    !pl && o && (l = n.__once || function u(s) {
      this.removeEventListener(t, u, i), n.call(this, s);
    }, n.__once = l), e.addEventListener(t, l, dl ? r : i);
  }
  e.addEventListener(t, n, r);
}
function nh(e, t, n, r) {
  var o = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, o), n.__once && e.removeEventListener(t, n.__once, o);
}
function Ec(e, t, n, r) {
  return th(e, t, n, r), function() {
    nh(e, t, n, r);
  };
}
function rh(e, t, n, r) {
  if (r === void 0 && (r = !0), e) {
    var o = document.createEvent("HTMLEvents");
    o.initEvent(t, n, r), e.dispatchEvent(o);
  }
}
function oh(e) {
  var t = So(e, "transitionDuration") || "", n = t.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(t) * n;
}
function ih(e, t, n) {
  n === void 0 && (n = 5);
  var r = !1, o = setTimeout(function() {
    r || rh(e, "transitionend", !0);
  }, t + n), i = Ec(e, "transitionend", function() {
    r = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(o), i();
  };
}
function lh(e, t, n, r) {
  n == null && (n = oh(e) || 0);
  var o = ih(e, n, r), i = Ec(e, "transitionend", t);
  return function() {
    o(), i();
  };
}
function ta(e, t) {
  var n = So(e, t) || "", r = n.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(n) * r;
}
function uh(e, t) {
  var n = ta(e, "transitionDuration"), r = ta(e, "transitionDelay"), o = lh(e, function(i) {
    i.target === e && (o(), t(i));
  }, n + r);
}
function sh(e) {
  e.offsetHeight;
}
var ah = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"], Rt, fh = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function Sc(e, t) {
  var n = "offset" + e[0].toUpperCase() + e.slice(1), r = t[n], o = fh[e];
  return r + // @ts-ignore
  parseInt(So(t, o[0]), 10) + // @ts-ignore
  parseInt(So(t, o[1]), 10);
}
var ch = (Rt = {}, Rt[be] = "collapse", Rt[xo] = "collapsing", Rt[Ue] = "collapsing", Rt[dt] = "collapse show", Rt), dh = {
  in: !1,
  timeout: 300,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  getDimensionValue: Sc
}, Oc = /* @__PURE__ */ P.forwardRef(function(e, t) {
  var n = e.onEnter, r = e.onEntering, o = e.onEntered, i = e.onExit, l = e.onExiting, u = e.className, s = e.children, a = e.dimension, p = a === void 0 ? "height" : a, w = e.getDimensionValue, m = w === void 0 ? Sc : w, E = lt(e, ah), x = typeof p == "function" ? p() : p, _ = M.useMemo(function() {
    return $t(function(h) {
      h.style[x] = "0";
    }, n);
  }, [x, n]), c = M.useMemo(function() {
    return $t(function(h) {
      var T = "scroll" + x[0].toUpperCase() + x.slice(1);
      h.style[x] = h[T] + "px";
    }, r);
  }, [x, r]), f = M.useMemo(function() {
    return $t(function(h) {
      h.style[x] = null;
    }, o);
  }, [x, o]), d = M.useMemo(function() {
    return $t(function(h) {
      h.style[x] = m(x, h) + "px", sh(h);
    }, i);
  }, [i, m, x]), v = M.useMemo(function() {
    return $t(function(h) {
      h.style[x] = null;
    }, l);
  }, [x, l]);
  return /* @__PURE__ */ P.createElement(
    wc,
    Oe({
      ref: t,
      addEndListener: uh
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
        className: Te(u, s.props.className, ch[h], x === "width" && "width")
      }));
    }
  );
});
Oc.defaultProps = dh;
function ph(e, t) {
  return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1;
}
function mh(e, t) {
  e.classList ? e.classList.add(t) : ph(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t));
}
function na(e, t) {
  return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function hh(e, t) {
  e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = na(e.className, t) : e.setAttribute("class", na(e.className && e.className.baseVal || "", t));
}
var vh = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return mh(t, r);
  });
}, gi = function(t, n) {
  return t && n && n.split(" ").forEach(function(r) {
    return hh(t, r);
  });
}, xu = /* @__PURE__ */ function(e) {
  Ou(t, e);
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
    i === "appear" && l === "done" && a && (u += " " + a), l === "active" && o && gc(o), u && (this.appliedClasses[i][l] = u, vh(o, u));
  }, n.removeClasses = function(o, i) {
    var l = this.appliedClasses[i], u = l.base, s = l.active, a = l.done;
    this.appliedClasses[i] = {}, u && gi(o, u), s && gi(o, s), a && gi(o, a);
  }, n.render = function() {
    var o = this.props;
    o.classNames;
    var i = lt(o, ["classNames"]);
    return /* @__PURE__ */ P.createElement(wc, Oe({}, i, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, t;
}(P.Component);
xu.defaultProps = {
  classNames: ""
};
xu.propTypes = {};
function yh(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Cu(e, t) {
  var n = function(i) {
    return t && M.isValidElement(i) ? t(i) : i;
  }, r = /* @__PURE__ */ Object.create(null);
  return e && M.Children.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    r[o.key] = n(o);
  }), r;
}
function gh(e, t) {
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
function wh(e, t) {
  return Cu(e.children, function(n) {
    return M.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: wt(n, "appear", e),
      enter: wt(n, "enter", e),
      exit: wt(n, "exit", e)
    });
  });
}
function Eh(e, t, n) {
  var r = Cu(e.children), o = gh(t, r);
  return Object.keys(o).forEach(function(i) {
    var l = o[i];
    if (M.isValidElement(l)) {
      var u = i in t, s = i in r, a = t[i], p = M.isValidElement(a) && !a.props.in;
      s && (!u || p) ? o[i] = M.cloneElement(l, {
        onExited: n.bind(null, l),
        in: !0,
        exit: wt(l, "exit", e),
        enter: wt(l, "enter", e)
      }) : !s && u && !p ? o[i] = M.cloneElement(l, {
        in: !1
      }) : s && u && M.isValidElement(a) && (o[i] = M.cloneElement(l, {
        onExited: n.bind(null, l),
        in: a.props.in,
        exit: wt(l, "exit", e),
        enter: wt(l, "enter", e)
      }));
    }
  }), o;
}
var Sh = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Oh = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, _u = /* @__PURE__ */ function(e) {
  Ou(t, e);
  function t(r, o) {
    var i;
    i = e.call(this, r, o) || this;
    var l = i.handleExited.bind(yh(i));
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
      children: s ? wh(o, u) : Eh(o, l, u),
      firstRender: !1
    };
  }, n.handleExited = function(o, i) {
    var l = Cu(this.props.children);
    o.key in l || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(u) {
      var s = Oe({}, u.children);
      return delete s[o.key], {
        children: s
      };
    }));
  }, n.render = function() {
    var o = this.props, i = o.component, l = o.childFactory, u = lt(o, ["component", "childFactory"]), s = this.state.contextValue, a = Sh(this.state.children).map(l);
    return delete u.appear, delete u.enter, delete u.exit, i === null ? /* @__PURE__ */ P.createElement(Oo.Provider, {
      value: s
    }, a) : /* @__PURE__ */ P.createElement(Oo.Provider, {
      value: s
    }, /* @__PURE__ */ P.createElement(i, u, a));
  }, t;
}(P.Component);
_u.propTypes = {};
_u.defaultProps = Oh;
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, on(e);
}
function ra(e, t) {
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
    t % 2 ? ra(Object(n), !0).forEach(function(r) {
      xh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ra(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function xh(e, t, n) {
  return t = xc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Ch(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function _h(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, xc(r.key), r);
  }
}
function Ph(e, t, n) {
  return t && _h(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function xc(e) {
  var t = kh(e, "string");
  return on(t) == "symbol" ? t : t + "";
}
function kh(e, t) {
  if (on(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (on(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Th(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && ml(e, t);
}
function ml(e, t) {
  return ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, ml(e, t);
}
function Nh(e) {
  var t = Cc();
  return function() {
    var r = Co(e), o;
    if (t) {
      var i = Co(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return jh(this, o);
  };
}
function jh(e, t) {
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
function Cc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Cc = function() {
    return !!e;
  })();
}
function Co(e) {
  return Co = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Co(e);
}
var Pu = /* @__PURE__ */ function(e) {
  Th(n, e);
  var t = Nh(n);
  function n(r) {
    var o;
    return Ch(this, n), o = t.call(this, r), o.state = {
      height: null
    }, o.onChildEnter = o.onChildEnter.bind(ct(o)), o.onChildEntering = o.onChildEntering.bind(ct(o)), o.onChildEntered = o.onChildEntered.bind(ct(o)), o.onChildExit = o.onChildExit.bind(ct(o)), o.onChildExiting = o.onChildExiting.bind(ct(o)), o.onChildExited = o.onChildExited.bind(ct(o)), o;
  }
  return Ph(n, [{
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
      return /* @__PURE__ */ P.createElement(xu, {
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
      return /* @__PURE__ */ P.createElement(_u, {
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
Pu.propTypes = {
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
Pu.defaultProps = {
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
var Rh = ["children", "transitionWrapper", "tag"];
function oa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Dh(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? oa(Object(n), !0).forEach(function(r) {
      Lh(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Lh(e, t, n) {
  return t = $h(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function $h(e) {
  var t = Mh(e, "string");
  return cr(t) == "symbol" ? t : t + "";
}
function Mh(e, t) {
  if (cr(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (cr(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function zh(e, t) {
  if (e == null) return {};
  var n = Ih(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ih(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function ku(e) {
  var t = e.children, n = e.transitionWrapper, r = e.tag, o = zh(e, Rh), i = M.useContext(Ao), l = i.isOpen, u = i.unmountOnExit, s = /* @__PURE__ */ P.createElement(r, Dh({
    key: "body"
  }, o), t), a = l ? s : /* @__PURE__ */ P.createElement("div", {
    key: "empty"
  });
  return n ? /* @__PURE__ */ P.cloneElement(n, {}, a) : u ? /* @__PURE__ */ P.createElement(Pu, null, a) : /* @__PURE__ */ P.createElement(Oc, {
    in: l
  }, s);
}
ku.propTypes = {
  /** Specifies contents of the component. */
  children: g.node,
  /** Specifies content's base element. */
  tag: g.string,
  /** Specifies transition element. */
  transitionWrapper: g.element
};
ku.defaultProps = {
  children: void 0,
  tag: "div",
  transitionWrapper: void 0
};
function _o(e) {
  var t = e.children, n = e.whenOpen, r = e.whenClosed, o = M.useContext(Ao), i = o.isOpen, l = i && n || !i && r;
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
var Fh = function(t) {
  return /* @__PURE__ */ M.createElement("svg", hl({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ M.createElement("path", {
    d: "M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",
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
var bh = function(t) {
  return /* @__PURE__ */ M.createElement("svg", vl({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none"
  }, t), /* @__PURE__ */ M.createElement("path", {
    d: "M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z",
    fill: "currentColor"
  }));
};
function Uh({ panels: e, styling: t }) {
  const [n, r] = M.useState(e), o = (u) => {
    const s = [...n];
    s[u] = { ...s[u], expanded: !n[u].expanded }, r(s);
  }, i = M.useMemo(
    () => n.every((u) => u.expanded),
    [n]
  ), l = () => r(n.map((u) => ({ ...u, expanded: !i })));
  return /* @__PURE__ */ le.jsxs("div", { className: "xblock-accordion", children: [
    /* @__PURE__ */ le.jsx("div", { className: "d-flex justify-content-end mb-2", children: /* @__PURE__ */ le.jsx(ar, { variant: "outline-primary", size: "sm", onClick: () => l(), children: i ? "Collapse all" : "Expand all" }) }),
    n.map((u, s) => /* @__PURE__ */ le.jsxs(
      Eu,
      {
        className: "collapsible-card rounded-0 mb-2",
        open: u == null ? void 0 : u.expanded,
        onToggle: () => o(s),
        style: {
          borderColor: t == null ? void 0 : t.borderColor
        },
        children: [
          /* @__PURE__ */ le.jsxs(
            Su,
            {
              className: "collapsible-trigger rounded-0 px-3 py-2",
              style: {
                backgroundColor: t == null ? void 0 : t.backgroundColor,
                color: t == null ? void 0 : t.textColor,
                fontSize: t == null ? void 0 : t.fontSize
              },
              children: [
                /* @__PURE__ */ le.jsx("span", { className: "flex-grow-1 my-0", children: u.title }),
                /* @__PURE__ */ le.jsx(_o, { whenClosed: !0, children: /* @__PURE__ */ le.jsx(wo, { src: Fh }) }),
                /* @__PURE__ */ le.jsx(_o, { whenOpen: !0, children: /* @__PURE__ */ le.jsx(wo, { src: bh }) })
              ]
            }
          ),
          /* @__PURE__ */ le.jsx(ku, { className: "collapsible-body", children: /* @__PURE__ */ le.jsx("div", { dangerouslySetInnerHTML: { __html: u.contents } }) })
        ]
      },
      `${u.title}-${s}`
    ))
  ] });
}
const Ah = (e, { panels: t, styling: n }) => {
  ec.render(
    /* @__PURE__ */ le.jsx(M.StrictMode, { children: /* @__PURE__ */ le.jsx(Uh, { panels: t, styling: n }) }),
    e
  );
};
export {
  Ah as renderBlock
};
