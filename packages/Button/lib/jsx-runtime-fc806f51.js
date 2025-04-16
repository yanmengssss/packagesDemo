import sr from "react";
function fr(g) {
  if (g.__esModule)
    return g;
  var c = g.default;
  if (typeof c == "function") {
    var E = function h() {
      return this instanceof h ? Reflect.construct(c, arguments, this.constructor) : c.apply(this, arguments);
    };
    E.prototype = c.prototype;
  } else
    E = {};
  return Object.defineProperty(E, "__esModule", { value: !0 }), Object.keys(g).forEach(function(h) {
    var T = Object.getOwnPropertyDescriptor(g, h);
    Object.defineProperty(E, h, T.get ? T : {
      enumerable: !0,
      get: function() {
        return g[h];
      }
    });
  }), E;
}
var Z = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function lr() {
  if (Oe)
    return $;
  Oe = 1;
  var g = sr, c = Symbol.for("react.element"), E = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, T = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, W = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  };
  function A(O, p, j) {
    var y, R = {}, S = null, Y = null;
    j !== void 0 && (S = "" + j), p.key !== void 0 && (S = "" + p.key), p.ref !== void 0 && (Y = p.ref);
    for (y in p)
      h.call(p, y) && !W.hasOwnProperty(y) && (R[y] = p[y]);
    if (O && O.defaultProps)
      for (y in p = O.defaultProps, p)
        R[y] === void 0 && (R[y] = p[y]);
    return {
      $$typeof: c,
      type: O,
      key: S,
      ref: Y,
      props: R,
      _owner: T.current
    };
  }
  return $.Fragment = E, $.jsx = A, $.jsxs = A, $;
}
function b(g) {
  "@babel/helpers - typeof";
  return b = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(c) {
    return typeof c;
  } : function(c) {
    return c && typeof Symbol == "function" && c.constructor === Symbol && c !== Symbol.prototype ? "symbol" : typeof c;
  }, b(g);
}
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
process.env.NODE_ENV !== "production" && function() {
  var g = require("react"), c = Symbol.for("react.element"), E = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), W = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), O = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), Q = Symbol.iterator, Se = "@@iterator";
  function Pe(e) {
    if (e === null || b(e) !== "object")
      return null;
    var r = Q && e[Q] || e[Se];
    return typeof r == "function" ? r : null;
  }
  var C = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  function d(e) {
    {
      for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
        t[n - 1] = arguments[n];
      we("error", e, t);
    }
  }
  function we(e, r, t) {
    {
      var n = C.ReactDebugCurrentFrame, o = n.getStackAddendum();
      o !== "" && (r += "%s", t = t.concat([o]));
      var u = t.map(function(a) {
        return String(a);
      });
      u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
    }
  }
  var je = !1, Ce = !1, xe = !1, ke = !1, Ae = !1, ee;
  ee = Symbol.for("react.module.reference");
  function De(e) {
    return !!(typeof e == "string" || typeof e == "function" || e === h || e === W || Ae || e === T || e === j || e === y || ke || e === Y || je || Ce || xe || b(e) === "object" && e !== null && (e.$$typeof === S || e.$$typeof === R || e.$$typeof === A || e.$$typeof === O || e.$$typeof === p || // This needs to include all possible module reference object
    // types supported by any Flight configuration anywhere since
    // we don't know which Flight build this will end up being used
    // with.
    e.$$typeof === ee || e.getModuleId !== void 0));
  }
  function Fe(e, r, t) {
    var n = e.displayName;
    if (n)
      return n;
    var o = r.displayName || r.name || "";
    return o !== "" ? t + "(" + o + ")" : t;
  }
  function re(e) {
    return e.displayName || "Context";
  }
  function m(e) {
    if (e == null)
      return null;
    if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case h:
        return "Fragment";
      case E:
        return "Portal";
      case W:
        return "Profiler";
      case T:
        return "StrictMode";
      case j:
        return "Suspense";
      case y:
        return "SuspenseList";
    }
    if (b(e) === "object")
      switch (e.$$typeof) {
        case O:
          var r = e;
          return re(r) + ".Consumer";
        case A:
          var t = e;
          return re(t._context) + ".Provider";
        case p:
          return Fe(e, e.render, "ForwardRef");
        case R:
          var n = e.displayName || null;
          return n !== null ? n : m(e.type) || "Memo";
        case S: {
          var o = e, u = o._payload, a = o._init;
          try {
            return m(a(u));
          } catch {
            return null;
          }
        }
      }
    return null;
  }
  var P = Object.assign, D = 0, te, ne, ae, oe, ie, ue, se;
  function fe() {
  }
  fe.__reactDisabledLog = !0;
  function Ie() {
    {
      if (D === 0) {
        te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: fe,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      D++;
    }
  }
  function $e() {
    {
      if (D--, D === 0) {
        var e = {
          configurable: !0,
          enumerable: !0,
          writable: !0
        };
        Object.defineProperties(console, {
          log: P({}, e, {
            value: te
          }),
          info: P({}, e, {
            value: ne
          }),
          warn: P({}, e, {
            value: ae
          }),
          error: P({}, e, {
            value: oe
          }),
          group: P({}, e, {
            value: ie
          }),
          groupCollapsed: P({}, e, {
            value: ue
          }),
          groupEnd: P({}, e, {
            value: se
          })
        });
      }
      D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
  }
  var U = C.ReactCurrentDispatcher, B;
  function M(e, r, t) {
    {
      if (B === void 0)
        try {
          throw Error();
        } catch (o) {
          var n = o.stack.trim().match(/\n( *(at )?)/);
          B = n && n[1] || "";
        }
      return `
` + B + e;
    }
  }
  var K = !1, L;
  {
    var We = typeof WeakMap == "function" ? WeakMap : Map;
    L = new We();
  }
  function le(e, r) {
    if (!e || K)
      return "";
    {
      var t = L.get(e);
      if (t !== void 0)
        return t;
    }
    var n;
    K = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    var u;
    u = U.current, U.current = null, Ie();
    try {
      if (r) {
        var a = function() {
          throw Error();
        };
        if (Object.defineProperty(a.prototype, "props", {
          set: function() {
            throw Error();
          }
        }), (typeof Reflect > "u" ? "undefined" : b(Reflect)) === "object" && Reflect.construct) {
          try {
            Reflect.construct(a, []);
          } catch (v) {
            n = v;
          }
          Reflect.construct(e, [], a);
        } else {
          try {
            a.call();
          } catch (v) {
            n = v;
          }
          e.call(a.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (v) {
          n = v;
        }
        e();
      }
    } catch (v) {
      if (v && n && typeof v.stack == "string") {
        for (var i = v.stack.split(`
`), s = n.stack.split(`
`), f = i.length - 1, l = s.length - 1; f >= 1 && l >= 0 && i[f] !== s[l]; )
          l--;
        for (; f >= 1 && l >= 0; f--, l--)
          if (i[f] !== s[l]) {
            if (f !== 1 || l !== 1)
              do
                if (f--, l--, l < 0 || i[f] !== s[l]) {
                  var _ = `
` + i[f].replace(" at new ", " at ");
                  return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, _), _;
                }
              while (f >= 1 && l >= 0);
            break;
          }
      }
    } finally {
      K = !1, U.current = u, $e(), Error.prepareStackTrace = o;
    }
    var k = e ? e.displayName || e.name : "", w = k ? M(k) : "";
    return typeof e == "function" && L.set(e, w), w;
  }
  function Ye(e, r, t) {
    return le(e, !1);
  }
  function Me(e) {
    var r = e.prototype;
    return !!(r && r.isReactComponent);
  }
  function V(e, r, t) {
    if (e == null)
      return "";
    if (typeof e == "function")
      return le(e, Me(e));
    if (typeof e == "string")
      return M(e);
    switch (e) {
      case j:
        return M("Suspense");
      case y:
        return M("SuspenseList");
    }
    if (b(e) === "object")
      switch (e.$$typeof) {
        case p:
          return Ye(e.render);
        case R:
          return V(e.type, r, t);
        case S: {
          var n = e, o = n._payload, u = n._init;
          try {
            return V(u(o), r, t);
          } catch {
          }
        }
      }
    return "";
  }
  var F = Object.prototype.hasOwnProperty, ce = {}, de = C.ReactDebugCurrentFrame;
  function N(e) {
    if (e) {
      var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
      de.setExtraStackFrame(t);
    } else
      de.setExtraStackFrame(null);
  }
  function Le(e, r, t, n, o) {
    {
      var u = Function.call.bind(F);
      for (var a in e)
        if (u(e, a)) {
          var i = void 0;
          try {
            if (typeof e[a] != "function") {
              var s = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + b(e[a]) + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
              throw s.name = "Invariant Violation", s;
            }
            i = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
          } catch (f) {
            i = f;
          }
          i && !(i instanceof Error) && (N(o), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, b(i)), N(null)), i instanceof Error && !(i.message in ce) && (ce[i.message] = !0, N(o), d("Failed %s type: %s", t, i.message), N(null));
        }
    }
  }
  var Ve = Array.isArray;
  function q(e) {
    return Ve(e);
  }
  function Ne(e) {
    {
      var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
      return t;
    }
  }
  function Ue(e) {
    try {
      return ve(e), !1;
    } catch {
      return !0;
    }
  }
  function ve(e) {
    return "" + e;
  }
  function pe(e) {
    if (Ue(e))
      return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(e)), ve(e);
  }
  var I = C.ReactCurrentOwner, Be = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
  }, be, ye, J;
  J = {};
  function Ke(e) {
    if (F.call(e, "ref")) {
      var r = Object.getOwnPropertyDescriptor(e, "ref").get;
      if (r && r.isReactWarning)
        return !1;
    }
    return e.ref !== void 0;
  }
  function qe(e) {
    if (F.call(e, "key")) {
      var r = Object.getOwnPropertyDescriptor(e, "key").get;
      if (r && r.isReactWarning)
        return !1;
    }
    return e.key !== void 0;
  }
  function Je(e, r) {
    if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
      var t = m(I.current.type);
      J[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', m(I.current.type), e.ref), J[t] = !0);
    }
  }
  function ze(e, r) {
    {
      var t = function() {
        be || (be = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
      };
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
  }
  function Ge(e, r) {
    {
      var t = function() {
        ye || (ye = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
      };
      t.isReactWarning = !0, Object.defineProperty(e, "ref", {
        get: t,
        configurable: !0
      });
    }
  }
  var Xe = function(r, t, n, o, u, a, i) {
    var s = {
      // This tag allows us to uniquely identify this as a React Element
      $$typeof: c,
      // Built-in properties that belong on the element
      type: r,
      key: t,
      ref: n,
      props: i,
      // Record the component responsible for creating this element.
      _owner: a
    };
    return s._store = {}, Object.defineProperty(s._store, "validated", {
      configurable: !1,
      enumerable: !1,
      writable: !0,
      value: !1
    }), Object.defineProperty(s, "_self", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: o
    }), Object.defineProperty(s, "_source", {
      configurable: !1,
      enumerable: !1,
      writable: !1,
      value: u
    }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
  };
  function He(e, r, t, n, o) {
    {
      var u, a = {}, i = null, s = null;
      t !== void 0 && (pe(t), i = "" + t), qe(r) && (pe(r.key), i = "" + r.key), Ke(r) && (s = r.ref, Je(r, o));
      for (u in r)
        F.call(r, u) && !Be.hasOwnProperty(u) && (a[u] = r[u]);
      if (e && e.defaultProps) {
        var f = e.defaultProps;
        for (u in f)
          a[u] === void 0 && (a[u] = f[u]);
      }
      if (i || s) {
        var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
        i && ze(a, l), s && Ge(a, l);
      }
      return Xe(e, i, s, o, n, I.current, a);
    }
  }
  var z = C.ReactCurrentOwner, ge = C.ReactDebugCurrentFrame;
  function x(e) {
    if (e) {
      var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
      ge.setExtraStackFrame(t);
    } else
      ge.setExtraStackFrame(null);
  }
  var G;
  G = !1;
  function X(e) {
    return b(e) === "object" && e !== null && e.$$typeof === c;
  }
  function he() {
    {
      if (z.current) {
        var e = m(z.current.type);
        if (e)
          return `

Check the render method of \`` + e + "`.";
      }
      return "";
    }
  }
  function Ze(e) {
    {
      if (e !== void 0) {
        var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
        return `

Check your code at ` + r + ":" + t + ".";
      }
      return "";
    }
  }
  var _e = {};
  function Qe(e) {
    {
      var r = he();
      if (!r) {
        var t = typeof e == "string" ? e : e.displayName || e.name;
        t && (r = `

Check the top-level render call using <` + t + ">.");
      }
      return r;
    }
  }
  function me(e, r) {
    {
      if (!e._store || e._store.validated || e.key != null)
        return;
      e._store.validated = !0;
      var t = Qe(r);
      if (_e[t])
        return;
      _e[t] = !0;
      var n = "";
      e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + m(e._owner.type) + "."), x(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), x(null);
    }
  }
  function Ee(e, r) {
    {
      if (b(e) !== "object")
        return;
      if (q(e))
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          X(n) && me(n, r);
        }
      else if (X(e))
        e._store && (e._store.validated = !0);
      else if (e) {
        var o = Pe(e);
        if (typeof o == "function" && o !== e.entries)
          for (var u = o.call(e), a; !(a = u.next()).done; )
            X(a.value) && me(a.value, r);
      }
    }
  }
  function er(e) {
    {
      var r = e.type;
      if (r == null || typeof r == "string")
        return;
      var t;
      if (typeof r == "function")
        t = r.propTypes;
      else if (b(r) === "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
      // Inner props are checked in the reconciler.
      r.$$typeof === R))
        t = r.propTypes;
      else
        return;
      if (t) {
        var n = m(r);
        Le(t, e.props, "prop", n, e);
      } else if (r.PropTypes !== void 0 && !G) {
        G = !0;
        var o = m(r);
        d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
      }
      typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
  }
  function rr(e) {
    {
      for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
        var n = r[t];
        if (n !== "children" && n !== "key") {
          x(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), x(null);
          break;
        }
      }
      e.ref !== null && (x(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), x(null));
    }
  }
  var Re = {};
  function Te(e, r, t, n, o, u) {
    {
      var a = De(e);
      if (!a) {
        var i = "";
        (e === void 0 || b(e) === "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
        var s = Ze(o);
        s ? i += s : i += he();
        var f;
        e === null ? f = "null" : q(e) ? f = "array" : e !== void 0 && e.$$typeof === c ? (f = "<" + (m(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : f = b(e), d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, i);
      }
      var l = He(e, r, t, o, u);
      if (l == null)
        return l;
      if (a) {
        var _ = r.children;
        if (_ !== void 0)
          if (n)
            if (q(_)) {
              for (var k = 0; k < _.length; k++)
                Ee(_[k], e);
              Object.freeze && Object.freeze(_);
            } else
              d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
          else
            Ee(_, e);
      }
      if (F.call(r, "key")) {
        var w = m(e), v = Object.keys(r).filter(function(ur) {
          return ur !== "key";
        }), H = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
        if (!Re[w + H]) {
          var ir = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
          d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, w, ir, w), Re[w + H] = !0;
        }
      }
      return e === h ? rr(l) : er(l), l;
    }
  }
  function tr(e, r, t) {
    return Te(e, r, t, !0);
  }
  function nr(e, r, t) {
    return Te(e, r, t, !1);
  }
  var ar = nr, or = tr;
  exports.Fragment = h, exports.jsx = ar, exports.jsxs = or;
}();
const cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" })), dr = /* @__PURE__ */ fr(cr);
process.env.NODE_ENV === "production" ? Z.exports = lr() : Z.exports = dr;
var pr = Z.exports;
export {
  pr as j
};
