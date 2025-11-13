var sp = r => {
    throw TypeError(r)
}
;
var Mu = (r, n, s) => n.has(r) || sp("Cannot " + s);
var N = (r, n, s) => (Mu(r, n, "read from private field"),
s ? s.call(r) : n.get(r))
  , me = (r, n, s) => n.has(r) ? sp("Cannot add the same private member more than once") : n instanceof WeakSet ? n.add(r) : n.set(r, s)
  , X = (r, n, s, i) => (Mu(r, n, "write to private field"),
i ? i.call(r, s) : n.set(r, s),
s)
  , Ne = (r, n, s) => (Mu(r, n, "access private method"),
s);
var ra = (r, n, s, i) => ({
    set _(l) {
        X(r, n, l, s)
    },
    get _() {
        return N(r, n, i)
    }
});
function I0(r, n) {
    for (var s = 0; s < n.length; s++) {
        const i = n[s];
        if (typeof i != "string" && !Array.isArray(i)) {
            for (const l in i)
                if (l !== "default" && !(l in r)) {
                    const c = Object.getOwnPropertyDescriptor(i, l);
                    c && Object.defineProperty(r, l, c.get ? c : {
                        enumerable: !0,
                        get: () => i[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const n = document.createElement("link").relList;
    if (n && n.supports && n.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        i(l);
    new MutationObserver(l => {
        for (const c of l)
            if (c.type === "childList")
                for (const d of c.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && i(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(l) {
        const c = {};
        return l.integrity && (c.integrity = l.integrity),
        l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
        c
    }
    function i(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const c = s(l);
        fetch(l.href, c)
    }
}
)();
function _m(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
var Fu = {
    exports: {}
}
  , So = {}
  , Du = {
    exports: {}
}
  , ke = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function M0() {
    if (op)
        return ke;
    op = 1;
    var r = Symbol.for("react.element")
      , n = Symbol.for("react.portal")
      , s = Symbol.for("react.fragment")
      , i = Symbol.for("react.strict_mode")
      , l = Symbol.for("react.profiler")
      , c = Symbol.for("react.provider")
      , d = Symbol.for("react.context")
      , p = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , y = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , x = Symbol.iterator;
    function j(R) {
        return R === null || typeof R != "object" ? null : (R = x && R[x] || R["@@iterator"],
        typeof R == "function" ? R : null)
    }
    var T = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , k = Object.assign
      , S = {};
    function w(R, z, le) {
        this.props = R,
        this.context = z,
        this.refs = S,
        this.updater = le || T
    }
    w.prototype.isReactComponent = {},
    w.prototype.setState = function(R, z) {
        if (typeof R != "object" && typeof R != "function" && R != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, R, z, "setState")
    }
    ,
    w.prototype.forceUpdate = function(R) {
        this.updater.enqueueForceUpdate(this, R, "forceUpdate")
    }
    ;
    function M() {}
    M.prototype = w.prototype;
    function H(R, z, le) {
        this.props = R,
        this.context = z,
        this.refs = S,
        this.updater = le || T
    }
    var U = H.prototype = new M;
    U.constructor = H,
    k(U, w.prototype),
    U.isPureReactComponent = !0;
    var D = Array.isArray
      , G = Object.prototype.hasOwnProperty
      , de = {
        current: null
    }
      , ge = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function I(R, z, le) {
        var ce, be = {}, Ce = null, ve = null;
        if (z != null)
            for (ce in z.ref !== void 0 && (ve = z.ref),
            z.key !== void 0 && (Ce = "" + z.key),
            z)
                G.call(z, ce) && !ge.hasOwnProperty(ce) && (be[ce] = z[ce]);
        var Te = arguments.length - 2;
        if (Te === 1)
            be.children = le;
        else if (1 < Te) {
            for (var Ae = Array(Te), et = 0; et < Te; et++)
                Ae[et] = arguments[et + 2];
            be.children = Ae
        }
        if (R && R.defaultProps)
            for (ce in Te = R.defaultProps,
            Te)
                be[ce] === void 0 && (be[ce] = Te[ce]);
        return {
            $$typeof: r,
            type: R,
            key: Ce,
            ref: ve,
            props: be,
            _owner: de.current
        }
    }
    function Q(R, z) {
        return {
            $$typeof: r,
            type: R.type,
            key: z,
            ref: R.ref,
            props: R.props,
            _owner: R._owner
        }
    }
    function K(R) {
        return typeof R == "object" && R !== null && R.$$typeof === r
    }
    function Z(R) {
        var z = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + R.replace(/[=:]/g, function(le) {
            return z[le]
        })
    }
    var B = /\/+/g;
    function te(R, z) {
        return typeof R == "object" && R !== null && R.key != null ? Z("" + R.key) : z.toString(36)
    }
    function Ee(R, z, le, ce, be) {
        var Ce = typeof R;
        (Ce === "undefined" || Ce === "boolean") && (R = null);
        var ve = !1;
        if (R === null)
            ve = !0;
        else
            switch (Ce) {
            case "string":
            case "number":
                ve = !0;
                break;
            case "object":
                switch (R.$$typeof) {
                case r:
                case n:
                    ve = !0
                }
            }
        if (ve)
            return ve = R,
            be = be(ve),
            R = ce === "" ? "." + te(ve, 0) : ce,
            D(be) ? (le = "",
            R != null && (le = R.replace(B, "$&/") + "/"),
            Ee(be, z, le, "", function(et) {
                return et
            })) : be != null && (K(be) && (be = Q(be, le + (!be.key || ve && ve.key === be.key ? "" : ("" + be.key).replace(B, "$&/") + "/") + R)),
            z.push(be)),
            1;
        if (ve = 0,
        ce = ce === "" ? "." : ce + ":",
        D(R))
            for (var Te = 0; Te < R.length; Te++) {
                Ce = R[Te];
                var Ae = ce + te(Ce, Te);
                ve += Ee(Ce, z, le, Ae, be)
            }
        else if (Ae = j(R),
        typeof Ae == "function")
            for (R = Ae.call(R),
            Te = 0; !(Ce = R.next()).done; )
                Ce = Ce.value,
                Ae = ce + te(Ce, Te++),
                ve += Ee(Ce, z, le, Ae, be);
        else if (Ce === "object")
            throw z = String(R),
            Error("Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead.");
        return ve
    }
    function fe(R, z, le) {
        if (R == null)
            return R;
        var ce = []
          , be = 0;
        return Ee(R, ce, "", "", function(Ce) {
            return z.call(le, Ce, be++)
        }),
        ce
    }
    function ie(R) {
        if (R._status === -1) {
            var z = R._result;
            z = z(),
            z.then(function(le) {
                (R._status === 0 || R._status === -1) && (R._status = 1,
                R._result = le)
            }, function(le) {
                (R._status === 0 || R._status === -1) && (R._status = 2,
                R._result = le)
            }),
            R._status === -1 && (R._status = 0,
            R._result = z)
        }
        if (R._status === 1)
            return R._result.default;
        throw R._result
    }
    var we = {
        current: null
    }
      , F = {
        transition: null
    }
      , ue = {
        ReactCurrentDispatcher: we,
        ReactCurrentBatchConfig: F,
        ReactCurrentOwner: de
    };
    function Y() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return ke.Children = {
        map: fe,
        forEach: function(R, z, le) {
            fe(R, function() {
                z.apply(this, arguments)
            }, le)
        },
        count: function(R) {
            var z = 0;
            return fe(R, function() {
                z++
            }),
            z
        },
        toArray: function(R) {
            return fe(R, function(z) {
                return z
            }) || []
        },
        only: function(R) {
            if (!K(R))
                throw Error("React.Children.only expected to receive a single React element child.");
            return R
        }
    },
    ke.Component = w,
    ke.Fragment = s,
    ke.Profiler = l,
    ke.PureComponent = H,
    ke.StrictMode = i,
    ke.Suspense = m,
    ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ue,
    ke.act = Y,
    ke.cloneElement = function(R, z, le) {
        if (R == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
        var ce = k({}, R.props)
          , be = R.key
          , Ce = R.ref
          , ve = R._owner;
        if (z != null) {
            if (z.ref !== void 0 && (Ce = z.ref,
            ve = de.current),
            z.key !== void 0 && (be = "" + z.key),
            R.type && R.type.defaultProps)
                var Te = R.type.defaultProps;
            for (Ae in z)
                G.call(z, Ae) && !ge.hasOwnProperty(Ae) && (ce[Ae] = z[Ae] === void 0 && Te !== void 0 ? Te[Ae] : z[Ae])
        }
        var Ae = arguments.length - 2;
        if (Ae === 1)
            ce.children = le;
        else if (1 < Ae) {
            Te = Array(Ae);
            for (var et = 0; et < Ae; et++)
                Te[et] = arguments[et + 2];
            ce.children = Te
        }
        return {
            $$typeof: r,
            type: R.type,
            key: be,
            ref: Ce,
            props: ce,
            _owner: ve
        }
    }
    ,
    ke.createContext = function(R) {
        return R = {
            $$typeof: d,
            _currentValue: R,
            _currentValue2: R,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        R.Provider = {
            $$typeof: c,
            _context: R
        },
        R.Consumer = R
    }
    ,
    ke.createElement = I,
    ke.createFactory = function(R) {
        var z = I.bind(null, R);
        return z.type = R,
        z
    }
    ,
    ke.createRef = function() {
        return {
            current: null
        }
    }
    ,
    ke.forwardRef = function(R) {
        return {
            $$typeof: p,
            render: R
        }
    }
    ,
    ke.isValidElement = K,
    ke.lazy = function(R) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: R
            },
            _init: ie
        }
    }
    ,
    ke.memo = function(R, z) {
        return {
            $$typeof: y,
            type: R,
            compare: z === void 0 ? null : z
        }
    }
    ,
    ke.startTransition = function(R) {
        var z = F.transition;
        F.transition = {};
        try {
            R()
        } finally {
            F.transition = z
        }
    }
    ,
    ke.unstable_act = Y,
    ke.useCallback = function(R, z) {
        return we.current.useCallback(R, z)
    }
    ,
    ke.useContext = function(R) {
        return we.current.useContext(R)
    }
    ,
    ke.useDebugValue = function() {}
    ,
    ke.useDeferredValue = function(R) {
        return we.current.useDeferredValue(R)
    }
    ,
    ke.useEffect = function(R, z) {
        return we.current.useEffect(R, z)
    }
    ,
    ke.useId = function() {
        return we.current.useId()
    }
    ,
    ke.useImperativeHandle = function(R, z, le) {
        return we.current.useImperativeHandle(R, z, le)
    }
    ,
    ke.useInsertionEffect = function(R, z) {
        return we.current.useInsertionEffect(R, z)
    }
    ,
    ke.useLayoutEffect = function(R, z) {
        return we.current.useLayoutEffect(R, z)
    }
    ,
    ke.useMemo = function(R, z) {
        return we.current.useMemo(R, z)
    }
    ,
    ke.useReducer = function(R, z, le) {
        return we.current.useReducer(R, z, le)
    }
    ,
    ke.useRef = function(R) {
        return we.current.useRef(R)
    }
    ,
    ke.useState = function(R) {
        return we.current.useState(R)
    }
    ,
    ke.useSyncExternalStore = function(R, z, le) {
        return we.current.useSyncExternalStore(R, z, le)
    }
    ,
    ke.useTransition = function() {
        return we.current.useTransition()
    }
    ,
    ke.version = "18.3.1",
    ke
}
var ip;
function Vc() {
    return ip || (ip = 1,
    Du.exports = M0()),
    Du.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function F0() {
    if (ap)
        return So;
    ap = 1;
    var r = Vc()
      , n = Symbol.for("react.element")
      , s = Symbol.for("react.fragment")
      , i = Object.prototype.hasOwnProperty
      , l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , c = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function d(p, m, y) {
        var v, x = {}, j = null, T = null;
        y !== void 0 && (j = "" + y),
        m.key !== void 0 && (j = "" + m.key),
        m.ref !== void 0 && (T = m.ref);
        for (v in m)
            i.call(m, v) && !c.hasOwnProperty(v) && (x[v] = m[v]);
        if (p && p.defaultProps)
            for (v in m = p.defaultProps,
            m)
                x[v] === void 0 && (x[v] = m[v]);
        return {
            $$typeof: n,
            type: p,
            key: j,
            ref: T,
            props: x,
            _owner: l.current
        }
    }
    return So.Fragment = s,
    So.jsx = d,
    So.jsxs = d,
    So
}
var lp;
function D0() {
    return lp || (lp = 1,
    Fu.exports = F0()),
    Fu.exports
}
var h = D0()
  , C = Vc();
const pt = _m(C)
  , qc = I0({
    __proto__: null,
    default: pt
}, [C]);
var sa = {}
  , Uu = {
    exports: {}
}
  , Ct = {}
  , zu = {
    exports: {}
}
  , Bu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var up;
function U0() {
    return up || (up = 1,
    (function(r) {
        function n(F, ue) {
            var Y = F.length;
            F.push(ue);
            e: for (; 0 < Y; ) {
                var R = Y - 1 >>> 1
                  , z = F[R];
                if (0 < l(z, ue))
                    F[R] = ue,
                    F[Y] = z,
                    Y = R;
                else
                    break e
            }
        }
        function s(F) {
            return F.length === 0 ? null : F[0]
        }
        function i(F) {
            if (F.length === 0)
                return null;
            var ue = F[0]
              , Y = F.pop();
            if (Y !== ue) {
                F[0] = Y;
                e: for (var R = 0, z = F.length, le = z >>> 1; R < le; ) {
                    var ce = 2 * (R + 1) - 1
                      , be = F[ce]
                      , Ce = ce + 1
                      , ve = F[Ce];
                    if (0 > l(be, Y))
                        Ce < z && 0 > l(ve, be) ? (F[R] = ve,
                        F[Ce] = Y,
                        R = Ce) : (F[R] = be,
                        F[ce] = Y,
                        R = ce);
                    else if (Ce < z && 0 > l(ve, Y))
                        F[R] = ve,
                        F[Ce] = Y,
                        R = Ce;
                    else
                        break e
                }
            }
            return ue
        }
        function l(F, ue) {
            var Y = F.sortIndex - ue.sortIndex;
            return Y !== 0 ? Y : F.id - ue.id
        }
        if (typeof performance == "object" && typeof performance.now == "function") {
            var c = performance;
            r.unstable_now = function() {
                return c.now()
            }
        } else {
            var d = Date
              , p = d.now();
            r.unstable_now = function() {
                return d.now() - p
            }
        }
        var m = []
          , y = []
          , v = 1
          , x = null
          , j = 3
          , T = !1
          , k = !1
          , S = !1
          , w = typeof setTimeout == "function" ? setTimeout : null
          , M = typeof clearTimeout == "function" ? clearTimeout : null
          , H = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function U(F) {
            for (var ue = s(y); ue !== null; ) {
                if (ue.callback === null)
                    i(y);
                else if (ue.startTime <= F)
                    i(y),
                    ue.sortIndex = ue.expirationTime,
                    n(m, ue);
                else
                    break;
                ue = s(y)
            }
        }
        function D(F) {
            if (S = !1,
            U(F),
            !k)
                if (s(m) !== null)
                    k = !0,
                    ie(G);
                else {
                    var ue = s(y);
                    ue !== null && we(D, ue.startTime - F)
                }
        }
        function G(F, ue) {
            k = !1,
            S && (S = !1,
            M(I),
            I = -1),
            T = !0;
            var Y = j;
            try {
                for (U(ue),
                x = s(m); x !== null && (!(x.expirationTime > ue) || F && !Z()); ) {
                    var R = x.callback;
                    if (typeof R == "function") {
                        x.callback = null,
                        j = x.priorityLevel;
                        var z = R(x.expirationTime <= ue);
                        ue = r.unstable_now(),
                        typeof z == "function" ? x.callback = z : x === s(m) && i(m),
                        U(ue)
                    } else
                        i(m);
                    x = s(m)
                }
                if (x !== null)
                    var le = !0;
                else {
                    var ce = s(y);
                    ce !== null && we(D, ce.startTime - ue),
                    le = !1
                }
                return le
            } finally {
                x = null,
                j = Y,
                T = !1
            }
        }
        var de = !1
          , ge = null
          , I = -1
          , Q = 5
          , K = -1;
        function Z() {
            return !(r.unstable_now() - K < Q)
        }
        function B() {
            if (ge !== null) {
                var F = r.unstable_now();
                K = F;
                var ue = !0;
                try {
                    ue = ge(!0, F)
                } finally {
                    ue ? te() : (de = !1,
                    ge = null)
                }
            } else
                de = !1
        }
        var te;
        if (typeof H == "function")
            te = function() {
                H(B)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var Ee = new MessageChannel
              , fe = Ee.port2;
            Ee.port1.onmessage = B,
            te = function() {
                fe.postMessage(null)
            }
        } else
            te = function() {
                w(B, 0)
            }
            ;
        function ie(F) {
            ge = F,
            de || (de = !0,
            te())
        }
        function we(F, ue) {
            I = w(function() {
                F(r.unstable_now())
            }, ue)
        }
        r.unstable_IdlePriority = 5,
        r.unstable_ImmediatePriority = 1,
        r.unstable_LowPriority = 4,
        r.unstable_NormalPriority = 3,
        r.unstable_Profiling = null,
        r.unstable_UserBlockingPriority = 2,
        r.unstable_cancelCallback = function(F) {
            F.callback = null
        }
        ,
        r.unstable_continueExecution = function() {
            k || T || (k = !0,
            ie(G))
        }
        ,
        r.unstable_forceFrameRate = function(F) {
            0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Q = 0 < F ? Math.floor(1e3 / F) : 5
        }
        ,
        r.unstable_getCurrentPriorityLevel = function() {
            return j
        }
        ,
        r.unstable_getFirstCallbackNode = function() {
            return s(m)
        }
        ,
        r.unstable_next = function(F) {
            switch (j) {
            case 1:
            case 2:
            case 3:
                var ue = 3;
                break;
            default:
                ue = j
            }
            var Y = j;
            j = ue;
            try {
                return F()
            } finally {
                j = Y
            }
        }
        ,
        r.unstable_pauseExecution = function() {}
        ,
        r.unstable_requestPaint = function() {}
        ,
        r.unstable_runWithPriority = function(F, ue) {
            switch (F) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                F = 3
            }
            var Y = j;
            j = F;
            try {
                return ue()
            } finally {
                j = Y
            }
        }
        ,
        r.unstable_scheduleCallback = function(F, ue, Y) {
            var R = r.unstable_now();
            switch (typeof Y == "object" && Y !== null ? (Y = Y.delay,
            Y = typeof Y == "number" && 0 < Y ? R + Y : R) : Y = R,
            F) {
            case 1:
                var z = -1;
                break;
            case 2:
                z = 250;
                break;
            case 5:
                z = 1073741823;
                break;
            case 4:
                z = 1e4;
                break;
            default:
                z = 5e3
            }
            return z = Y + z,
            F = {
                id: v++,
                callback: ue,
                priorityLevel: F,
                startTime: Y,
                expirationTime: z,
                sortIndex: -1
            },
            Y > R ? (F.sortIndex = Y,
            n(y, F),
            s(m) === null && F === s(y) && (S ? (M(I),
            I = -1) : S = !0,
            we(D, Y - R))) : (F.sortIndex = z,
            n(m, F),
            k || T || (k = !0,
            ie(G))),
            F
        }
        ,
        r.unstable_shouldYield = Z,
        r.unstable_wrapCallback = function(F) {
            var ue = j;
            return function() {
                var Y = j;
                j = ue;
                try {
                    return F.apply(this, arguments)
                } finally {
                    j = Y
                }
            }
        }
    }
    )(Bu)),
    Bu
}
var cp;
function z0() {
    return cp || (cp = 1,
    zu.exports = U0()),
    zu.exports
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dp;
function B0() {
    if (dp)
        return Ct;
    dp = 1;
    var r = Vc()
      , n = z0();
    function s(e) {
        for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, o = 1; o < arguments.length; o++)
            t += "&args[]=" + encodeURIComponent(arguments[o]);
        return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    var i = new Set
      , l = {};
    function c(e, t) {
        d(e, t),
        d(e + "Capture", t)
    }
    function d(e, t) {
        for (l[e] = t,
        e = 0; e < t.length; e++)
            i.add(t[e])
    }
    var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , m = Object.prototype.hasOwnProperty
      , y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
      , v = {}
      , x = {};
    function j(e) {
        return m.call(x, e) ? !0 : m.call(v, e) ? !1 : y.test(e) ? x[e] = !0 : (v[e] = !0,
        !1)
    }
    function T(e, t, o, a) {
        if (o !== null && o.type === 0)
            return !1;
        switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return a ? !1 : o !== null ? !o.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
            e !== "data-" && e !== "aria-");
        default:
            return !1
        }
    }
    function k(e, t, o, a) {
        if (t === null || typeof t > "u" || T(e, t, o, a))
            return !0;
        if (a)
            return !1;
        if (o !== null)
            switch (o.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t
            }
        return !1
    }
    function S(e, t, o, a, u, f, g) {
        this.acceptsBooleans = t === 2 || t === 3 || t === 4,
        this.attributeName = a,
        this.attributeNamespace = u,
        this.mustUseProperty = o,
        this.propertyName = e,
        this.type = t,
        this.sanitizeURL = f,
        this.removeEmptyString = g
    }
    var w = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        w[e] = new S(e,0,!1,e,null,!1,!1)
    }),
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
        var t = e[0];
        w[t] = new S(t,1,!1,e[1],null,!1,!1)
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        w[e] = new S(e,2,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        w[e] = new S(e,2,!1,e,null,!1,!1)
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        w[e] = new S(e,3,!1,e.toLowerCase(),null,!1,!1)
    }),
    ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        w[e] = new S(e,3,!0,e,null,!1,!1)
    }),
    ["capture", "download"].forEach(function(e) {
        w[e] = new S(e,4,!1,e,null,!1,!1)
    }),
    ["cols", "rows", "size", "span"].forEach(function(e) {
        w[e] = new S(e,6,!1,e,null,!1,!1)
    }),
    ["rowSpan", "start"].forEach(function(e) {
        w[e] = new S(e,5,!1,e.toLowerCase(),null,!1,!1)
    });
    var M = /[\-:]([a-z])/g;
    function H(e) {
        return e[1].toUpperCase()
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(M, H);
        w[t] = new S(t,1,!1,e,null,!1,!1)
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(M, H);
        w[t] = new S(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
    }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(M, H);
        w[t] = new S(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
    }),
    ["tabIndex", "crossOrigin"].forEach(function(e) {
        w[e] = new S(e,1,!1,e.toLowerCase(),null,!1,!1)
    }),
    w.xlinkHref = new S("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),
    ["src", "href", "action", "formAction"].forEach(function(e) {
        w[e] = new S(e,1,!1,e.toLowerCase(),null,!0,!0)
    });
    function U(e, t, o, a) {
        var u = w.hasOwnProperty(t) ? w[t] : null;
        (u !== null ? u.type !== 0 : a || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (k(t, o, u, a) && (o = null),
        a || u === null ? j(t) && (o === null ? e.removeAttribute(t) : e.setAttribute(t, "" + o)) : u.mustUseProperty ? e[u.propertyName] = o === null ? u.type === 3 ? !1 : "" : o : (t = u.attributeName,
        a = u.attributeNamespace,
        o === null ? e.removeAttribute(t) : (u = u.type,
        o = u === 3 || u === 4 && o === !0 ? "" : "" + o,
        a ? e.setAttributeNS(a, t, o) : e.setAttribute(t, o))))
    }
    var D = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
      , G = Symbol.for("react.element")
      , de = Symbol.for("react.portal")
      , ge = Symbol.for("react.fragment")
      , I = Symbol.for("react.strict_mode")
      , Q = Symbol.for("react.profiler")
      , K = Symbol.for("react.provider")
      , Z = Symbol.for("react.context")
      , B = Symbol.for("react.forward_ref")
      , te = Symbol.for("react.suspense")
      , Ee = Symbol.for("react.suspense_list")
      , fe = Symbol.for("react.memo")
      , ie = Symbol.for("react.lazy")
      , we = Symbol.for("react.offscreen")
      , F = Symbol.iterator;
    function ue(e) {
        return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"],
        typeof e == "function" ? e : null)
    }
    var Y = Object.assign, R;
    function z(e) {
        if (R === void 0)
            try {
                throw Error()
            } catch (o) {
                var t = o.stack.trim().match(/\n( *(at )?)/);
                R = t && t[1] || ""
            }
        return `
` + R + e
    }
    var le = !1;
    function ce(e, t) {
        if (!e || le)
            return "";
        le = !0;
        var o = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            if (t)
                if (t = function() {
                    throw Error()
                }
                ,
                Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }),
                typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(t, [])
                    } catch (A) {
                        var a = A
                    }
                    Reflect.construct(e, [], t)
                } else {
                    try {
                        t.call()
                    } catch (A) {
                        a = A
                    }
                    e.call(t.prototype)
                }
            else {
                try {
                    throw Error()
                } catch (A) {
                    a = A
                }
                e()
            }
        } catch (A) {
            if (A && a && typeof A.stack == "string") {
                for (var u = A.stack.split(`
`), f = a.stack.split(`
`), g = u.length - 1, b = f.length - 1; 1 <= g && 0 <= b && u[g] !== f[b]; )
                    b--;
                for (; 1 <= g && 0 <= b; g--,
                b--)
                    if (u[g] !== f[b]) {
                        if (g !== 1 || b !== 1)
                            do
                                if (g--,
                                b--,
                                0 > b || u[g] !== f[b]) {
                                    var E = `
` + u[g].replace(" at new ", " at ");
                                    return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)),
                                    E
                                }
                            while (1 <= g && 0 <= b);
                        break
                    }
            }
        } finally {
            le = !1,
            Error.prepareStackTrace = o
        }
        return (e = e ? e.displayName || e.name : "") ? z(e) : ""
    }
    function be(e) {
        switch (e.tag) {
        case 5:
            return z(e.type);
        case 16:
            return z("Lazy");
        case 13:
            return z("Suspense");
        case 19:
            return z("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = ce(e.type, !1),
            e;
        case 11:
            return e = ce(e.type.render, !1),
            e;
        case 1:
            return e = ce(e.type, !0),
            e;
        default:
            return ""
        }
    }
    function Ce(e) {
        if (e == null)
            return null;
        if (typeof e == "function")
            return e.displayName || e.name || null;
        if (typeof e == "string")
            return e;
        switch (e) {
        case ge:
            return "Fragment";
        case de:
            return "Portal";
        case Q:
            return "Profiler";
        case I:
            return "StrictMode";
        case te:
            return "Suspense";
        case Ee:
            return "SuspenseList"
        }
        if (typeof e == "object")
            switch (e.$$typeof) {
            case Z:
                return (e.displayName || "Context") + ".Consumer";
            case K:
                return (e._context.displayName || "Context") + ".Provider";
            case B:
                var t = e.render;
                return e = e.displayName,
                e || (e = t.displayName || t.name || "",
                e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                e;
            case fe:
                return t = e.displayName || null,
                t !== null ? t : Ce(e.type) || "Memo";
            case ie:
                t = e._payload,
                e = e._init;
                try {
                    return Ce(e(t))
                } catch {}
            }
        return null
    }
    function ve(e) {
        var t = e.type;
        switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render,
            e = e.displayName || e.name || "",
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Ce(t);
        case 8:
            return t === I ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function")
                return t.displayName || t.name || null;
            if (typeof t == "string")
                return t
        }
        return null
    }
    function Te(e) {
        switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
        }
    }
    function Ae(e) {
        var t = e.type;
        return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function et(e) {
        var t = Ae(e) ? "checked" : "value"
          , o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
          , a = "" + e[t];
        if (!e.hasOwnProperty(t) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
            var u = o.get
              , f = o.set;
            return Object.defineProperty(e, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(g) {
                    a = "" + g,
                    f.call(this, g)
                }
            }),
            Object.defineProperty(e, t, {
                enumerable: o.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(g) {
                    a = "" + g
                },
                stopTracking: function() {
                    e._valueTracker = null,
                    delete e[t]
                }
            }
        }
    }
    function Rn(e) {
        e._valueTracker || (e._valueTracker = et(e))
    }
    function cr(e) {
        if (!e)
            return !1;
        var t = e._valueTracker;
        if (!t)
            return !0;
        var o = t.getValue()
          , a = "";
        return e && (a = Ae(e) ? e.checked ? "true" : "false" : e.value),
        e = a,
        e !== o ? (t.setValue(e),
        !0) : !1
    }
    function Ko(e) {
        if (e = e || (typeof document < "u" ? document : void 0),
        typeof e > "u")
            return null;
        try {
            return e.activeElement || e.body
        } catch {
            return e.body
        }
    }
    function Va(e, t) {
        var o = t.checked;
        return Y({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: o ?? e._wrapperState.initialChecked
        })
    }
    function cd(e, t) {
        var o = t.defaultValue == null ? "" : t.defaultValue
          , a = t.checked != null ? t.checked : t.defaultChecked;
        o = Te(t.value != null ? t.value : o),
        e._wrapperState = {
            initialChecked: a,
            initialValue: o,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
        }
    }
    function dd(e, t) {
        t = t.checked,
        t != null && U(e, "checked", t, !1)
    }
    function qa(e, t) {
        dd(e, t);
        var o = Te(t.value)
          , a = t.type;
        if (o != null)
            a === "number" ? (o === 0 && e.value === "" || e.value != o) && (e.value = "" + o) : e.value !== "" + o && (e.value = "" + o);
        else if (a === "submit" || a === "reset") {
            e.removeAttribute("value");
            return
        }
        t.hasOwnProperty("value") ? Ha(e, t.type, o) : t.hasOwnProperty("defaultValue") && Ha(e, t.type, Te(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
    }
    function fd(e, t, o) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var a = t.type;
            if (!(a !== "submit" && a !== "reset" || t.value !== void 0 && t.value !== null))
                return;
            t = "" + e._wrapperState.initialValue,
            o || t === e.value || (e.value = t),
            e.defaultValue = t
        }
        o = e.name,
        o !== "" && (e.name = ""),
        e.defaultChecked = !!e._wrapperState.initialChecked,
        o !== "" && (e.name = o)
    }
    function Ha(e, t, o) {
        (t !== "number" || Ko(e.ownerDocument) !== e) && (o == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + o && (e.defaultValue = "" + o))
    }
    var Ms = Array.isArray;
    function qr(e, t, o, a) {
        if (e = e.options,
        t) {
            t = {};
            for (var u = 0; u < o.length; u++)
                t["$" + o[u]] = !0;
            for (o = 0; o < e.length; o++)
                u = t.hasOwnProperty("$" + e[o].value),
                e[o].selected !== u && (e[o].selected = u),
                u && a && (e[o].defaultSelected = !0)
        } else {
            for (o = "" + Te(o),
            t = null,
            u = 0; u < e.length; u++) {
                if (e[u].value === o) {
                    e[u].selected = !0,
                    a && (e[u].defaultSelected = !0);
                    return
                }
                t !== null || e[u].disabled || (t = e[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Wa(e, t) {
        if (t.dangerouslySetInnerHTML != null)
            throw Error(s(91));
        return Y({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }
    function hd(e, t) {
        var o = t.value;
        if (o == null) {
            if (o = t.children,
            t = t.defaultValue,
            o != null) {
                if (t != null)
                    throw Error(s(92));
                if (Ms(o)) {
                    if (1 < o.length)
                        throw Error(s(93));
                    o = o[0]
                }
                t = o
            }
            t == null && (t = ""),
            o = t
        }
        e._wrapperState = {
            initialValue: Te(o)
        }
    }
    function pd(e, t) {
        var o = Te(t.value)
          , a = Te(t.defaultValue);
        o != null && (o = "" + o,
        o !== e.value && (e.value = o),
        t.defaultValue == null && e.defaultValue !== o && (e.defaultValue = o)),
        a != null && (e.defaultValue = "" + a)
    }
    function md(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
    }
    function gd(e) {
        switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
        }
    }
    function Qa(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml" ? gd(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
    }
    var Go, yd = (function(e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, o, a, u) {
            MSApp.execUnsafeLocalFunction(function() {
                return e(t, o, a, u)
            })
        }
        : e
    }
    )(function(e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
            e.innerHTML = t;
        else {
            for (Go = Go || document.createElement("div"),
            Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = Go.firstChild; e.firstChild; )
                e.removeChild(e.firstChild);
            for (; t.firstChild; )
                e.appendChild(t.firstChild)
        }
    });
    function Fs(e, t) {
        if (t) {
            var o = e.firstChild;
            if (o && o === e.lastChild && o.nodeType === 3) {
                o.nodeValue = t;
                return
            }
        }
        e.textContent = t
    }
    var Ds = {
        animationIterationCount: !0,
        aspectRatio: !0,
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
    }
      , Uy = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Ds).forEach(function(e) {
        Uy.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1),
            Ds[t] = Ds[e]
        })
    });
    function vd(e, t, o) {
        return t == null || typeof t == "boolean" || t === "" ? "" : o || typeof t != "number" || t === 0 || Ds.hasOwnProperty(e) && Ds[e] ? ("" + t).trim() : t + "px"
    }
    function xd(e, t) {
        e = e.style;
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                var a = o.indexOf("--") === 0
                  , u = vd(o, t[o], a);
                o === "float" && (o = "cssFloat"),
                a ? e.setProperty(o, u) : e[o] = u
            }
    }
    var zy = Y({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });
    function Ka(e, t) {
        if (t) {
            if (zy[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
                throw Error(s(137, e));
            if (t.dangerouslySetInnerHTML != null) {
                if (t.children != null)
                    throw Error(s(60));
                if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                    throw Error(s(61))
            }
            if (t.style != null && typeof t.style != "object")
                throw Error(s(62))
        }
    }
    function Ga(e, t) {
        if (e.indexOf("-") === -1)
            return typeof t.is == "string";
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
            return !0
        }
    }
    var Ya = null;
    function Ja(e) {
        return e = e.target || e.srcElement || window,
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    }
    var Xa = null
      , Hr = null
      , Wr = null;
    function wd(e) {
        if (e = io(e)) {
            if (typeof Xa != "function")
                throw Error(s(280));
            var t = e.stateNode;
            t && (t = vi(t),
            Xa(e.stateNode, e.type, t))
        }
    }
    function bd(e) {
        Hr ? Wr ? Wr.push(e) : Wr = [e] : Hr = e
    }
    function Sd() {
        if (Hr) {
            var e = Hr
              , t = Wr;
            if (Wr = Hr = null,
            wd(e),
            t)
                for (e = 0; e < t.length; e++)
                    wd(t[e])
        }
    }
    function kd(e, t) {
        return e(t)
    }
    function Ed() {}
    var Za = !1;
    function Cd(e, t, o) {
        if (Za)
            return e(t, o);
        Za = !0;
        try {
            return kd(e, t, o)
        } finally {
            Za = !1,
            (Hr !== null || Wr !== null) && (Ed(),
            Sd())
        }
    }
    function Us(e, t) {
        var o = e.stateNode;
        if (o === null)
            return null;
        var a = vi(o);
        if (a === null)
            return null;
        o = a[t];
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
            (a = !a.disabled) || (e = e.type,
            a = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
            e = !a;
            break e;
        default:
            e = !1
        }
        if (e)
            return null;
        if (o && typeof o != "function")
            throw Error(s(231, t, typeof o));
        return o
    }
    var el = !1;
    if (p)
        try {
            var zs = {};
            Object.defineProperty(zs, "passive", {
                get: function() {
                    el = !0
                }
            }),
            window.addEventListener("test", zs, zs),
            window.removeEventListener("test", zs, zs)
        } catch {
            el = !1
        }
    function By(e, t, o, a, u, f, g, b, E) {
        var A = Array.prototype.slice.call(arguments, 3);
        try {
            t.apply(o, A)
        } catch (V) {
            this.onError(V)
        }
    }
    var Bs = !1
      , Yo = null
      , Jo = !1
      , tl = null
      , $y = {
        onError: function(e) {
            Bs = !0,
            Yo = e
        }
    };
    function Vy(e, t, o, a, u, f, g, b, E) {
        Bs = !1,
        Yo = null,
        By.apply($y, arguments)
    }
    function qy(e, t, o, a, u, f, g, b, E) {
        if (Vy.apply(this, arguments),
        Bs) {
            if (Bs) {
                var A = Yo;
                Bs = !1,
                Yo = null
            } else
                throw Error(s(198));
            Jo || (Jo = !0,
            tl = A)
        }
    }
    function dr(e) {
        var t = e
          , o = e;
        if (e.alternate)
            for (; t.return; )
                t = t.return;
        else {
            e = t;
            do
                t = e,
                (t.flags & 4098) !== 0 && (o = t.return),
                e = t.return;
            while (e)
        }
        return t.tag === 3 ? o : null
    }
    function Nd(e) {
        if (e.tag === 13) {
            var t = e.memoizedState;
            if (t === null && (e = e.alternate,
            e !== null && (t = e.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function _d(e) {
        if (dr(e) !== e)
            throw Error(s(188))
    }
    function Hy(e) {
        var t = e.alternate;
        if (!t) {
            if (t = dr(e),
            t === null)
                throw Error(s(188));
            return t !== e ? null : e
        }
        for (var o = e, a = t; ; ) {
            var u = o.return;
            if (u === null)
                break;
            var f = u.alternate;
            if (f === null) {
                if (a = u.return,
                a !== null) {
                    o = a;
                    continue
                }
                break
            }
            if (u.child === f.child) {
                for (f = u.child; f; ) {
                    if (f === o)
                        return _d(u),
                        e;
                    if (f === a)
                        return _d(u),
                        t;
                    f = f.sibling
                }
                throw Error(s(188))
            }
            if (o.return !== a.return)
                o = u,
                a = f;
            else {
                for (var g = !1, b = u.child; b; ) {
                    if (b === o) {
                        g = !0,
                        o = u,
                        a = f;
                        break
                    }
                    if (b === a) {
                        g = !0,
                        a = u,
                        o = f;
                        break
                    }
                    b = b.sibling
                }
                if (!g) {
                    for (b = f.child; b; ) {
                        if (b === o) {
                            g = !0,
                            o = f,
                            a = u;
                            break
                        }
                        if (b === a) {
                            g = !0,
                            a = f,
                            o = u;
                            break
                        }
                        b = b.sibling
                    }
                    if (!g)
                        throw Error(s(189))
                }
            }
            if (o.alternate !== a)
                throw Error(s(190))
        }
        if (o.tag !== 3)
            throw Error(s(188));
        return o.stateNode.current === o ? e : t
    }
    function jd(e) {
        return e = Hy(e),
        e !== null ? Rd(e) : null
    }
    function Rd(e) {
        if (e.tag === 5 || e.tag === 6)
            return e;
        for (e = e.child; e !== null; ) {
            var t = Rd(e);
            if (t !== null)
                return t;
            e = e.sibling
        }
        return null
    }
    var Td = n.unstable_scheduleCallback
      , Pd = n.unstable_cancelCallback
      , Wy = n.unstable_shouldYield
      , Qy = n.unstable_requestPaint
      , qe = n.unstable_now
      , Ky = n.unstable_getCurrentPriorityLevel
      , nl = n.unstable_ImmediatePriority
      , Od = n.unstable_UserBlockingPriority
      , Xo = n.unstable_NormalPriority
      , Gy = n.unstable_LowPriority
      , Ad = n.unstable_IdlePriority
      , Zo = null
      , rn = null;
    function Yy(e) {
        if (rn && typeof rn.onCommitFiberRoot == "function")
            try {
                rn.onCommitFiberRoot(Zo, e, void 0, (e.current.flags & 128) === 128)
            } catch {}
    }
    var Ht = Math.clz32 ? Math.clz32 : Zy
      , Jy = Math.log
      , Xy = Math.LN2;
    function Zy(e) {
        return e >>>= 0,
        e === 0 ? 32 : 31 - (Jy(e) / Xy | 0) | 0
    }
    var ei = 64
      , ti = 4194304;
    function $s(e) {
        switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
        }
    }
    function ni(e, t) {
        var o = e.pendingLanes;
        if (o === 0)
            return 0;
        var a = 0
          , u = e.suspendedLanes
          , f = e.pingedLanes
          , g = o & 268435455;
        if (g !== 0) {
            var b = g & ~u;
            b !== 0 ? a = $s(b) : (f &= g,
            f !== 0 && (a = $s(f)))
        } else
            g = o & ~u,
            g !== 0 ? a = $s(g) : f !== 0 && (a = $s(f));
        if (a === 0)
            return 0;
        if (t !== 0 && t !== a && (t & u) === 0 && (u = a & -a,
        f = t & -t,
        u >= f || u === 16 && (f & 4194240) !== 0))
            return t;
        if ((a & 4) !== 0 && (a |= o & 16),
        t = e.entangledLanes,
        t !== 0)
            for (e = e.entanglements,
            t &= a; 0 < t; )
                o = 31 - Ht(t),
                u = 1 << o,
                a |= e[o],
                t &= ~u;
        return a
    }
    function ev(e, t) {
        switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function tv(e, t) {
        for (var o = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
            var g = 31 - Ht(f)
              , b = 1 << g
              , E = u[g];
            E === -1 ? ((b & o) === 0 || (b & a) !== 0) && (u[g] = ev(b, t)) : E <= t && (e.expiredLanes |= b),
            f &= ~b
        }
    }
    function rl(e) {
        return e = e.pendingLanes & -1073741825,
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    }
    function Ld() {
        var e = ei;
        return ei <<= 1,
        (ei & 4194240) === 0 && (ei = 64),
        e
    }
    function sl(e) {
        for (var t = [], o = 0; 31 > o; o++)
            t.push(e);
        return t
    }
    function Vs(e, t, o) {
        e.pendingLanes |= t,
        t !== 536870912 && (e.suspendedLanes = 0,
        e.pingedLanes = 0),
        e = e.eventTimes,
        t = 31 - Ht(t),
        e[t] = o
    }
    function nv(e, t) {
        var o = e.pendingLanes & ~t;
        e.pendingLanes = t,
        e.suspendedLanes = 0,
        e.pingedLanes = 0,
        e.expiredLanes &= t,
        e.mutableReadLanes &= t,
        e.entangledLanes &= t,
        t = e.entanglements;
        var a = e.eventTimes;
        for (e = e.expirationTimes; 0 < o; ) {
            var u = 31 - Ht(o)
              , f = 1 << u;
            t[u] = 0,
            a[u] = -1,
            e[u] = -1,
            o &= ~f
        }
    }
    function ol(e, t) {
        var o = e.entangledLanes |= t;
        for (e = e.entanglements; o; ) {
            var a = 31 - Ht(o)
              , u = 1 << a;
            u & t | e[a] & t && (e[a] |= t),
            o &= ~u
        }
    }
    var Le = 0;
    function Id(e) {
        return e &= -e,
        1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1
    }
    var Md, il, Fd, Dd, Ud, al = !1, ri = [], Tn = null, Pn = null, On = null, qs = new Map, Hs = new Map, An = [], rv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
    function zd(e, t) {
        switch (e) {
        case "focusin":
        case "focusout":
            Tn = null;
            break;
        case "dragenter":
        case "dragleave":
            Pn = null;
            break;
        case "mouseover":
        case "mouseout":
            On = null;
            break;
        case "pointerover":
        case "pointerout":
            qs.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Hs.delete(t.pointerId)
        }
    }
    function Ws(e, t, o, a, u, f) {
        return e === null || e.nativeEvent !== f ? (e = {
            blockedOn: t,
            domEventName: o,
            eventSystemFlags: a,
            nativeEvent: f,
            targetContainers: [u]
        },
        t !== null && (t = io(t),
        t !== null && il(t)),
        e) : (e.eventSystemFlags |= a,
        t = e.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        e)
    }
    function sv(e, t, o, a, u) {
        switch (t) {
        case "focusin":
            return Tn = Ws(Tn, e, t, o, a, u),
            !0;
        case "dragenter":
            return Pn = Ws(Pn, e, t, o, a, u),
            !0;
        case "mouseover":
            return On = Ws(On, e, t, o, a, u),
            !0;
        case "pointerover":
            var f = u.pointerId;
            return qs.set(f, Ws(qs.get(f) || null, e, t, o, a, u)),
            !0;
        case "gotpointercapture":
            return f = u.pointerId,
            Hs.set(f, Ws(Hs.get(f) || null, e, t, o, a, u)),
            !0
        }
        return !1
    }
    function Bd(e) {
        var t = fr(e.target);
        if (t !== null) {
            var o = dr(t);
            if (o !== null) {
                if (t = o.tag,
                t === 13) {
                    if (t = Nd(o),
                    t !== null) {
                        e.blockedOn = t,
                        Ud(e.priority, function() {
                            Fd(o)
                        });
                        return
                    }
                } else if (t === 3 && o.stateNode.current.memoizedState.isDehydrated) {
                    e.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
                    return
                }
            }
        }
        e.blockedOn = null
    }
    function si(e) {
        if (e.blockedOn !== null)
            return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
            var o = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (o === null) {
                o = e.nativeEvent;
                var a = new o.constructor(o.type,o);
                Ya = a,
                o.target.dispatchEvent(a),
                Ya = null
            } else
                return t = io(o),
                t !== null && il(t),
                e.blockedOn = o,
                !1;
            t.shift()
        }
        return !0
    }
    function $d(e, t, o) {
        si(e) && o.delete(t)
    }
    function ov() {
        al = !1,
        Tn !== null && si(Tn) && (Tn = null),
        Pn !== null && si(Pn) && (Pn = null),
        On !== null && si(On) && (On = null),
        qs.forEach($d),
        Hs.forEach($d)
    }
    function Qs(e, t) {
        e.blockedOn === t && (e.blockedOn = null,
        al || (al = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, ov)))
    }
    function Ks(e) {
        function t(u) {
            return Qs(u, e)
        }
        if (0 < ri.length) {
            Qs(ri[0], e);
            for (var o = 1; o < ri.length; o++) {
                var a = ri[o];
                a.blockedOn === e && (a.blockedOn = null)
            }
        }
        for (Tn !== null && Qs(Tn, e),
        Pn !== null && Qs(Pn, e),
        On !== null && Qs(On, e),
        qs.forEach(t),
        Hs.forEach(t),
        o = 0; o < An.length; o++)
            a = An[o],
            a.blockedOn === e && (a.blockedOn = null);
        for (; 0 < An.length && (o = An[0],
        o.blockedOn === null); )
            Bd(o),
            o.blockedOn === null && An.shift()
    }
    var Qr = D.ReactCurrentBatchConfig
      , oi = !0;
    function iv(e, t, o, a) {
        var u = Le
          , f = Qr.transition;
        Qr.transition = null;
        try {
            Le = 1,
            ll(e, t, o, a)
        } finally {
            Le = u,
            Qr.transition = f
        }
    }
    function av(e, t, o, a) {
        var u = Le
          , f = Qr.transition;
        Qr.transition = null;
        try {
            Le = 4,
            ll(e, t, o, a)
        } finally {
            Le = u,
            Qr.transition = f
        }
    }
    function ll(e, t, o, a) {
        if (oi) {
            var u = ul(e, t, o, a);
            if (u === null)
                Nl(e, t, a, ii, o),
                zd(e, a);
            else if (sv(u, e, t, o, a))
                a.stopPropagation();
            else if (zd(e, a),
            t & 4 && -1 < rv.indexOf(e)) {
                for (; u !== null; ) {
                    var f = io(u);
                    if (f !== null && Md(f),
                    f = ul(e, t, o, a),
                    f === null && Nl(e, t, a, ii, o),
                    f === u)
                        break;
                    u = f
                }
                u !== null && a.stopPropagation()
            } else
                Nl(e, t, a, null, o)
        }
    }
    var ii = null;
    function ul(e, t, o, a) {
        if (ii = null,
        e = Ja(a),
        e = fr(e),
        e !== null)
            if (t = dr(e),
            t === null)
                e = null;
            else if (o = t.tag,
            o === 13) {
                if (e = Nd(t),
                e !== null)
                    return e;
                e = null
            } else if (o === 3) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                    return t.tag === 3 ? t.stateNode.containerInfo : null;
                e = null
            } else
                t !== e && (e = null);
        return ii = e,
        null
    }
    function Vd(e) {
        switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (Ky()) {
            case nl:
                return 1;
            case Od:
                return 4;
            case Xo:
            case Gy:
                return 16;
            case Ad:
                return 536870912;
            default:
                return 16
            }
        default:
            return 16
        }
    }
    var Ln = null
      , cl = null
      , ai = null;
    function qd() {
        if (ai)
            return ai;
        var e, t = cl, o = t.length, a, u = "value"in Ln ? Ln.value : Ln.textContent, f = u.length;
        for (e = 0; e < o && t[e] === u[e]; e++)
            ;
        var g = o - e;
        for (a = 1; a <= g && t[o - a] === u[f - a]; a++)
            ;
        return ai = u.slice(e, 1 < a ? 1 - a : void 0)
    }
    function li(e) {
        var t = e.keyCode;
        return "charCode"in e ? (e = e.charCode,
        e === 0 && t === 13 && (e = 13)) : e = t,
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    }
    function ui() {
        return !0
    }
    function Hd() {
        return !1
    }
    function Tt(e) {
        function t(o, a, u, f, g) {
            this._reactName = o,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = f,
            this.target = g,
            this.currentTarget = null;
            for (var b in e)
                e.hasOwnProperty(b) && (o = e[b],
                this[b] = o ? o(f) : f[b]);
            return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ui : Hd,
            this.isPropagationStopped = Hd,
            this
        }
        return Y(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var o = this.nativeEvent;
                o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1),
                this.isDefaultPrevented = ui)
            },
            stopPropagation: function() {
                var o = this.nativeEvent;
                o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0),
                this.isPropagationStopped = ui)
            },
            persist: function() {},
            isPersistent: ui
        }),
        t
    }
    var Kr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, dl = Tt(Kr), Gs = Y({}, Kr, {
        view: 0,
        detail: 0
    }), lv = Tt(Gs), fl, hl, Ys, ci = Y({}, Gs, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ml,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX"in e ? e.movementX : (e !== Ys && (Ys && e.type === "mousemove" ? (fl = e.screenX - Ys.screenX,
            hl = e.screenY - Ys.screenY) : hl = fl = 0,
            Ys = e),
            fl)
        },
        movementY: function(e) {
            return "movementY"in e ? e.movementY : hl
        }
    }), Wd = Tt(ci), uv = Y({}, ci, {
        dataTransfer: 0
    }), cv = Tt(uv), dv = Y({}, Gs, {
        relatedTarget: 0
    }), pl = Tt(dv), fv = Y({}, Kr, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), hv = Tt(fv), pv = Y({}, Kr, {
        clipboardData: function(e) {
            return "clipboardData"in e ? e.clipboardData : window.clipboardData
        }
    }), mv = Tt(pv), gv = Y({}, Kr, {
        data: 0
    }), Qd = Tt(gv), yv = {
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
    }, vv = {
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
    }, xv = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function wv(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : (e = xv[e]) ? !!t[e] : !1
    }
    function ml() {
        return wv
    }
    var bv = Y({}, Gs, {
        key: function(e) {
            if (e.key) {
                var t = yv[e.key] || e.key;
                if (t !== "Unidentified")
                    return t
            }
            return e.type === "keypress" ? (e = li(e),
            e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vv[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ml,
        charCode: function(e) {
            return e.type === "keypress" ? li(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? li(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    })
      , Sv = Tt(bv)
      , kv = Y({}, ci, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Kd = Tt(kv)
      , Ev = Y({}, Gs, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ml
    })
      , Cv = Tt(Ev)
      , Nv = Y({}, Kr, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , _v = Tt(Nv)
      , jv = Y({}, ci, {
        deltaX: function(e) {
            return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Rv = Tt(jv)
      , Tv = [9, 13, 27, 32]
      , gl = p && "CompositionEvent"in window
      , Js = null;
    p && "documentMode"in document && (Js = document.documentMode);
    var Pv = p && "TextEvent"in window && !Js
      , Gd = p && (!gl || Js && 8 < Js && 11 >= Js)
      , Yd = " "
      , Jd = !1;
    function Xd(e, t) {
        switch (e) {
        case "keyup":
            return Tv.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Zd(e) {
        return e = e.detail,
        typeof e == "object" && "data"in e ? e.data : null
    }
    var Gr = !1;
    function Ov(e, t) {
        switch (e) {
        case "compositionend":
            return Zd(t);
        case "keypress":
            return t.which !== 32 ? null : (Jd = !0,
            Yd);
        case "textInput":
            return e = t.data,
            e === Yd && Jd ? null : e;
        default:
            return null
        }
    }
    function Av(e, t) {
        if (Gr)
            return e === "compositionend" || !gl && Xd(e, t) ? (e = qd(),
            ai = cl = Ln = null,
            Gr = !1,
            e) : null;
        switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Gd && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var Lv = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function ef(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!Lv[e.type] : t === "textarea"
    }
    function tf(e, t, o, a) {
        bd(a),
        t = mi(t, "onChange"),
        0 < t.length && (o = new dl("onChange","change",null,o,a),
        e.push({
            event: o,
            listeners: t
        }))
    }
    var Xs = null
      , Zs = null;
    function Iv(e) {
        wf(e, 0)
    }
    function di(e) {
        var t = es(e);
        if (cr(t))
            return e
    }
    function Mv(e, t) {
        if (e === "change")
            return t
    }
    var nf = !1;
    if (p) {
        var yl;
        if (p) {
            var vl = "oninput"in document;
            if (!vl) {
                var rf = document.createElement("div");
                rf.setAttribute("oninput", "return;"),
                vl = typeof rf.oninput == "function"
            }
            yl = vl
        } else
            yl = !1;
        nf = yl && (!document.documentMode || 9 < document.documentMode)
    }
    function sf() {
        Xs && (Xs.detachEvent("onpropertychange", of),
        Zs = Xs = null)
    }
    function of(e) {
        if (e.propertyName === "value" && di(Zs)) {
            var t = [];
            tf(t, Zs, e, Ja(e)),
            Cd(Iv, t)
        }
    }
    function Fv(e, t, o) {
        e === "focusin" ? (sf(),
        Xs = t,
        Zs = o,
        Xs.attachEvent("onpropertychange", of)) : e === "focusout" && sf()
    }
    function Dv(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
            return di(Zs)
    }
    function Uv(e, t) {
        if (e === "click")
            return di(t)
    }
    function zv(e, t) {
        if (e === "input" || e === "change")
            return di(t)
    }
    function Bv(e, t) {
        return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
    }
    var Wt = typeof Object.is == "function" ? Object.is : Bv;
    function eo(e, t) {
        if (Wt(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        var o = Object.keys(e)
          , a = Object.keys(t);
        if (o.length !== a.length)
            return !1;
        for (a = 0; a < o.length; a++) {
            var u = o[a];
            if (!m.call(t, u) || !Wt(e[u], t[u]))
                return !1
        }
        return !0
    }
    function af(e) {
        for (; e && e.firstChild; )
            e = e.firstChild;
        return e
    }
    function lf(e, t) {
        var o = af(e);
        e = 0;
        for (var a; o; ) {
            if (o.nodeType === 3) {
                if (a = e + o.textContent.length,
                e <= t && a >= t)
                    return {
                        node: o,
                        offset: t - e
                    };
                e = a
            }
            e: {
                for (; o; ) {
                    if (o.nextSibling) {
                        o = o.nextSibling;
                        break e
                    }
                    o = o.parentNode
                }
                o = void 0
            }
            o = af(o)
        }
    }
    function uf(e, t) {
        return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? uf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function cf() {
        for (var e = window, t = Ko(); t instanceof e.HTMLIFrameElement; ) {
            try {
                var o = typeof t.contentWindow.location.href == "string"
            } catch {
                o = !1
            }
            if (o)
                e = t.contentWindow;
            else
                break;
            t = Ko(e.document)
        }
        return t
    }
    function xl(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
    }
    function $v(e) {
        var t = cf()
          , o = e.focusedElem
          , a = e.selectionRange;
        if (t !== o && o && o.ownerDocument && uf(o.ownerDocument.documentElement, o)) {
            if (a !== null && xl(o)) {
                if (t = a.start,
                e = a.end,
                e === void 0 && (e = t),
                "selectionStart"in o)
                    o.selectionStart = t,
                    o.selectionEnd = Math.min(e, o.value.length);
                else if (e = (t = o.ownerDocument || document) && t.defaultView || window,
                e.getSelection) {
                    e = e.getSelection();
                    var u = o.textContent.length
                      , f = Math.min(a.start, u);
                    a = a.end === void 0 ? f : Math.min(a.end, u),
                    !e.extend && f > a && (u = a,
                    a = f,
                    f = u),
                    u = lf(o, f);
                    var g = lf(o, a);
                    u && g && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (t = t.createRange(),
                    t.setStart(u.node, u.offset),
                    e.removeAllRanges(),
                    f > a ? (e.addRange(t),
                    e.extend(g.node, g.offset)) : (t.setEnd(g.node, g.offset),
                    e.addRange(t)))
                }
            }
            for (t = [],
            e = o; e = e.parentNode; )
                e.nodeType === 1 && t.push({
                    element: e,
                    left: e.scrollLeft,
                    top: e.scrollTop
                });
            for (typeof o.focus == "function" && o.focus(),
            o = 0; o < t.length; o++)
                e = t[o],
                e.element.scrollLeft = e.left,
                e.element.scrollTop = e.top
        }
    }
    var Vv = p && "documentMode"in document && 11 >= document.documentMode
      , Yr = null
      , wl = null
      , to = null
      , bl = !1;
    function df(e, t, o) {
        var a = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
        bl || Yr == null || Yr !== Ko(a) || (a = Yr,
        "selectionStart"in a && xl(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        to && eo(to, a) || (to = a,
        a = mi(wl, "onSelect"),
        0 < a.length && (t = new dl("onSelect","select",null,t,o),
        e.push({
            event: t,
            listeners: a
        }),
        t.target = Yr)))
    }
    function fi(e, t) {
        var o = {};
        return o[e.toLowerCase()] = t.toLowerCase(),
        o["Webkit" + e] = "webkit" + t,
        o["Moz" + e] = "moz" + t,
        o
    }
    var Jr = {
        animationend: fi("Animation", "AnimationEnd"),
        animationiteration: fi("Animation", "AnimationIteration"),
        animationstart: fi("Animation", "AnimationStart"),
        transitionend: fi("Transition", "TransitionEnd")
    }
      , Sl = {}
      , ff = {};
    p && (ff = document.createElement("div").style,
    "AnimationEvent"in window || (delete Jr.animationend.animation,
    delete Jr.animationiteration.animation,
    delete Jr.animationstart.animation),
    "TransitionEvent"in window || delete Jr.transitionend.transition);
    function hi(e) {
        if (Sl[e])
            return Sl[e];
        if (!Jr[e])
            return e;
        var t = Jr[e], o;
        for (o in t)
            if (t.hasOwnProperty(o) && o in ff)
                return Sl[e] = t[o];
        return e
    }
    var hf = hi("animationend")
      , pf = hi("animationiteration")
      , mf = hi("animationstart")
      , gf = hi("transitionend")
      , yf = new Map
      , vf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    function In(e, t) {
        yf.set(e, t),
        c(t, [e])
    }
    for (var kl = 0; kl < vf.length; kl++) {
        var El = vf[kl]
          , qv = El.toLowerCase()
          , Hv = El[0].toUpperCase() + El.slice(1);
        In(qv, "on" + Hv)
    }
    In(hf, "onAnimationEnd"),
    In(pf, "onAnimationIteration"),
    In(mf, "onAnimationStart"),
    In("dblclick", "onDoubleClick"),
    In("focusin", "onFocus"),
    In("focusout", "onBlur"),
    In(gf, "onTransitionEnd"),
    d("onMouseEnter", ["mouseout", "mouseover"]),
    d("onMouseLeave", ["mouseout", "mouseover"]),
    d("onPointerEnter", ["pointerout", "pointerover"]),
    d("onPointerLeave", ["pointerout", "pointerover"]),
    c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var no = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Wv = new Set("cancel close invalid load scroll toggle".split(" ").concat(no));
    function xf(e, t, o) {
        var a = e.type || "unknown-event";
        e.currentTarget = o,
        qy(a, t, void 0, e),
        e.currentTarget = null
    }
    function wf(e, t) {
        t = (t & 4) !== 0;
        for (var o = 0; o < e.length; o++) {
            var a = e[o]
              , u = a.event;
            a = a.listeners;
            e: {
                var f = void 0;
                if (t)
                    for (var g = a.length - 1; 0 <= g; g--) {
                        var b = a[g]
                          , E = b.instance
                          , A = b.currentTarget;
                        if (b = b.listener,
                        E !== f && u.isPropagationStopped())
                            break e;
                        xf(u, b, A),
                        f = E
                    }
                else
                    for (g = 0; g < a.length; g++) {
                        if (b = a[g],
                        E = b.instance,
                        A = b.currentTarget,
                        b = b.listener,
                        E !== f && u.isPropagationStopped())
                            break e;
                        xf(u, b, A),
                        f = E
                    }
            }
        }
        if (Jo)
            throw e = tl,
            Jo = !1,
            tl = null,
            e
    }
    function Me(e, t) {
        var o = t[Ol];
        o === void 0 && (o = t[Ol] = new Set);
        var a = e + "__bubble";
        o.has(a) || (bf(t, e, 2, !1),
        o.add(a))
    }
    function Cl(e, t, o) {
        var a = 0;
        t && (a |= 4),
        bf(o, e, a, t)
    }
    var pi = "_reactListening" + Math.random().toString(36).slice(2);
    function ro(e) {
        if (!e[pi]) {
            e[pi] = !0,
            i.forEach(function(o) {
                o !== "selectionchange" && (Wv.has(o) || Cl(o, !1, e),
                Cl(o, !0, e))
            });
            var t = e.nodeType === 9 ? e : e.ownerDocument;
            t === null || t[pi] || (t[pi] = !0,
            Cl("selectionchange", !1, t))
        }
    }
    function bf(e, t, o, a) {
        switch (Vd(t)) {
        case 1:
            var u = iv;
            break;
        case 4:
            u = av;
            break;
        default:
            u = ll
        }
        o = u.bind(null, t, o, e),
        u = void 0,
        !el || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        a ? u !== void 0 ? e.addEventListener(t, o, {
            capture: !0,
            passive: u
        }) : e.addEventListener(t, o, !0) : u !== void 0 ? e.addEventListener(t, o, {
            passive: u
        }) : e.addEventListener(t, o, !1)
    }
    function Nl(e, t, o, a, u) {
        var f = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            e: for (; ; ) {
                if (a === null)
                    return;
                var g = a.tag;
                if (g === 3 || g === 4) {
                    var b = a.stateNode.containerInfo;
                    if (b === u || b.nodeType === 8 && b.parentNode === u)
                        break;
                    if (g === 4)
                        for (g = a.return; g !== null; ) {
                            var E = g.tag;
                            if ((E === 3 || E === 4) && (E = g.stateNode.containerInfo,
                            E === u || E.nodeType === 8 && E.parentNode === u))
                                return;
                            g = g.return
                        }
                    for (; b !== null; ) {
                        if (g = fr(b),
                        g === null)
                            return;
                        if (E = g.tag,
                        E === 5 || E === 6) {
                            a = f = g;
                            continue e
                        }
                        b = b.parentNode
                    }
                }
                a = a.return
            }
        Cd(function() {
            var A = f
              , V = Ja(o)
              , q = [];
            e: {
                var $ = yf.get(e);
                if ($ !== void 0) {
                    var J = dl
                      , ne = e;
                    switch (e) {
                    case "keypress":
                        if (li(o) === 0)
                            break e;
                    case "keydown":
                    case "keyup":
                        J = Sv;
                        break;
                    case "focusin":
                        ne = "focus",
                        J = pl;
                        break;
                    case "focusout":
                        ne = "blur",
                        J = pl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        J = pl;
                        break;
                    case "click":
                        if (o.button === 2)
                            break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        J = Wd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        J = cv;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        J = Cv;
                        break;
                    case hf:
                    case pf:
                    case mf:
                        J = hv;
                        break;
                    case gf:
                        J = _v;
                        break;
                    case "scroll":
                        J = lv;
                        break;
                    case "wheel":
                        J = Rv;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        J = mv;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        J = Kd
                    }
                    var oe = (t & 4) !== 0
                      , He = !oe && e === "scroll"
                      , P = oe ? $ !== null ? $ + "Capture" : null : $;
                    oe = [];
                    for (var _ = A, O; _ !== null; ) {
                        O = _;
                        var W = O.stateNode;
                        if (O.tag === 5 && W !== null && (O = W,
                        P !== null && (W = Us(_, P),
                        W != null && oe.push(so(_, W, O)))),
                        He)
                            break;
                        _ = _.return
                    }
                    0 < oe.length && ($ = new J($,ne,null,o,V),
                    q.push({
                        event: $,
                        listeners: oe
                    }))
                }
            }
            if ((t & 7) === 0) {
                e: {
                    if ($ = e === "mouseover" || e === "pointerover",
                    J = e === "mouseout" || e === "pointerout",
                    $ && o !== Ya && (ne = o.relatedTarget || o.fromElement) && (fr(ne) || ne[mn]))
                        break e;
                    if ((J || $) && ($ = V.window === V ? V : ($ = V.ownerDocument) ? $.defaultView || $.parentWindow : window,
                    J ? (ne = o.relatedTarget || o.toElement,
                    J = A,
                    ne = ne ? fr(ne) : null,
                    ne !== null && (He = dr(ne),
                    ne !== He || ne.tag !== 5 && ne.tag !== 6) && (ne = null)) : (J = null,
                    ne = A),
                    J !== ne)) {
                        if (oe = Wd,
                        W = "onMouseLeave",
                        P = "onMouseEnter",
                        _ = "mouse",
                        (e === "pointerout" || e === "pointerover") && (oe = Kd,
                        W = "onPointerLeave",
                        P = "onPointerEnter",
                        _ = "pointer"),
                        He = J == null ? $ : es(J),
                        O = ne == null ? $ : es(ne),
                        $ = new oe(W,_ + "leave",J,o,V),
                        $.target = He,
                        $.relatedTarget = O,
                        W = null,
                        fr(V) === A && (oe = new oe(P,_ + "enter",ne,o,V),
                        oe.target = O,
                        oe.relatedTarget = He,
                        W = oe),
                        He = W,
                        J && ne)
                            t: {
                                for (oe = J,
                                P = ne,
                                _ = 0,
                                O = oe; O; O = Xr(O))
                                    _++;
                                for (O = 0,
                                W = P; W; W = Xr(W))
                                    O++;
                                for (; 0 < _ - O; )
                                    oe = Xr(oe),
                                    _--;
                                for (; 0 < O - _; )
                                    P = Xr(P),
                                    O--;
                                for (; _--; ) {
                                    if (oe === P || P !== null && oe === P.alternate)
                                        break t;
                                    oe = Xr(oe),
                                    P = Xr(P)
                                }
                                oe = null
                            }
                        else
                            oe = null;
                        J !== null && Sf(q, $, J, oe, !1),
                        ne !== null && He !== null && Sf(q, He, ne, oe, !0)
                    }
                }
                e: {
                    if ($ = A ? es(A) : window,
                    J = $.nodeName && $.nodeName.toLowerCase(),
                    J === "select" || J === "input" && $.type === "file")
                        var ae = Mv;
                    else if (ef($))
                        if (nf)
                            ae = zv;
                        else {
                            ae = Dv;
                            var he = Fv
                        }
                    else
                        (J = $.nodeName) && J.toLowerCase() === "input" && ($.type === "checkbox" || $.type === "radio") && (ae = Uv);
                    if (ae && (ae = ae(e, A))) {
                        tf(q, ae, o, V);
                        break e
                    }
                    he && he(e, $, A),
                    e === "focusout" && (he = $._wrapperState) && he.controlled && $.type === "number" && Ha($, "number", $.value)
                }
                switch (he = A ? es(A) : window,
                e) {
                case "focusin":
                    (ef(he) || he.contentEditable === "true") && (Yr = he,
                    wl = A,
                    to = null);
                    break;
                case "focusout":
                    to = wl = Yr = null;
                    break;
                case "mousedown":
                    bl = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    bl = !1,
                    df(q, o, V);
                    break;
                case "selectionchange":
                    if (Vv)
                        break;
                case "keydown":
                case "keyup":
                    df(q, o, V)
                }
                var pe;
                if (gl)
                    e: {
                        switch (e) {
                        case "compositionstart":
                            var ye = "onCompositionStart";
                            break e;
                        case "compositionend":
                            ye = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            ye = "onCompositionUpdate";
                            break e
                        }
                        ye = void 0
                    }
                else
                    Gr ? Xd(e, o) && (ye = "onCompositionEnd") : e === "keydown" && o.keyCode === 229 && (ye = "onCompositionStart");
                ye && (Gd && o.locale !== "ko" && (Gr || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Gr && (pe = qd()) : (Ln = V,
                cl = "value"in Ln ? Ln.value : Ln.textContent,
                Gr = !0)),
                he = mi(A, ye),
                0 < he.length && (ye = new Qd(ye,e,null,o,V),
                q.push({
                    event: ye,
                    listeners: he
                }),
                pe ? ye.data = pe : (pe = Zd(o),
                pe !== null && (ye.data = pe)))),
                (pe = Pv ? Ov(e, o) : Av(e, o)) && (A = mi(A, "onBeforeInput"),
                0 < A.length && (V = new Qd("onBeforeInput","beforeinput",null,o,V),
                q.push({
                    event: V,
                    listeners: A
                }),
                V.data = pe))
            }
            wf(q, t)
        })
    }
    function so(e, t, o) {
        return {
            instance: e,
            listener: t,
            currentTarget: o
        }
    }
    function mi(e, t) {
        for (var o = t + "Capture", a = []; e !== null; ) {
            var u = e
              , f = u.stateNode;
            u.tag === 5 && f !== null && (u = f,
            f = Us(e, o),
            f != null && a.unshift(so(e, f, u)),
            f = Us(e, t),
            f != null && a.push(so(e, f, u))),
            e = e.return
        }
        return a
    }
    function Xr(e) {
        if (e === null)
            return null;
        do
            e = e.return;
        while (e && e.tag !== 5);
        return e || null
    }
    function Sf(e, t, o, a, u) {
        for (var f = t._reactName, g = []; o !== null && o !== a; ) {
            var b = o
              , E = b.alternate
              , A = b.stateNode;
            if (E !== null && E === a)
                break;
            b.tag === 5 && A !== null && (b = A,
            u ? (E = Us(o, f),
            E != null && g.unshift(so(o, E, b))) : u || (E = Us(o, f),
            E != null && g.push(so(o, E, b)))),
            o = o.return
        }
        g.length !== 0 && e.push({
            event: t,
            listeners: g
        })
    }
    var Qv = /\r\n?/g
      , Kv = /\u0000|\uFFFD/g;
    function kf(e) {
        return (typeof e == "string" ? e : "" + e).replace(Qv, `
`).replace(Kv, "")
    }
    function gi(e, t, o) {
        if (t = kf(t),
        kf(e) !== t && o)
            throw Error(s(425))
    }
    function yi() {}
    var _l = null
      , jl = null;
    function Rl(e, t) {
        return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Tl = typeof setTimeout == "function" ? setTimeout : void 0
      , Gv = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Ef = typeof Promise == "function" ? Promise : void 0
      , Yv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ef < "u" ? function(e) {
        return Ef.resolve(null).then(e).catch(Jv)
    }
    : Tl;
    function Jv(e) {
        setTimeout(function() {
            throw e
        })
    }
    function Pl(e, t) {
        var o = t
          , a = 0;
        do {
            var u = o.nextSibling;
            if (e.removeChild(o),
            u && u.nodeType === 8)
                if (o = u.data,
                o === "/$") {
                    if (a === 0) {
                        e.removeChild(u),
                        Ks(t);
                        return
                    }
                    a--
                } else
                    o !== "$" && o !== "$?" && o !== "$!" || a++;
            o = u
        } while (o);
        Ks(t)
    }
    function Mn(e) {
        for (; e != null; e = e.nextSibling) {
            var t = e.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = e.data,
                t === "$" || t === "$!" || t === "$?")
                    break;
                if (t === "/$")
                    return null
            }
        }
        return e
    }
    function Cf(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
            if (e.nodeType === 8) {
                var o = e.data;
                if (o === "$" || o === "$!" || o === "$?") {
                    if (t === 0)
                        return e;
                    t--
                } else
                    o === "/$" && t++
            }
            e = e.previousSibling
        }
        return null
    }
    var Zr = Math.random().toString(36).slice(2)
      , sn = "__reactFiber$" + Zr
      , oo = "__reactProps$" + Zr
      , mn = "__reactContainer$" + Zr
      , Ol = "__reactEvents$" + Zr
      , Xv = "__reactListeners$" + Zr
      , Zv = "__reactHandles$" + Zr;
    function fr(e) {
        var t = e[sn];
        if (t)
            return t;
        for (var o = e.parentNode; o; ) {
            if (t = o[mn] || o[sn]) {
                if (o = t.alternate,
                t.child !== null || o !== null && o.child !== null)
                    for (e = Cf(e); e !== null; ) {
                        if (o = e[sn])
                            return o;
                        e = Cf(e)
                    }
                return t
            }
            e = o,
            o = e.parentNode
        }
        return null
    }
    function io(e) {
        return e = e[sn] || e[mn],
        !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
    }
    function es(e) {
        if (e.tag === 5 || e.tag === 6)
            return e.stateNode;
        throw Error(s(33))
    }
    function vi(e) {
        return e[oo] || null
    }
    var Al = []
      , ts = -1;
    function Fn(e) {
        return {
            current: e
        }
    }
    function Fe(e) {
        0 > ts || (e.current = Al[ts],
        Al[ts] = null,
        ts--)
    }
    function Ie(e, t) {
        ts++,
        Al[ts] = e.current,
        e.current = t
    }
    var Dn = {}
      , ct = Fn(Dn)
      , wt = Fn(!1)
      , hr = Dn;
    function ns(e, t) {
        var o = e.type.contextTypes;
        if (!o)
            return Dn;
        var a = e.stateNode;
        if (a && a.__reactInternalMemoizedUnmaskedChildContext === t)
            return a.__reactInternalMemoizedMaskedChildContext;
        var u = {}, f;
        for (f in o)
            u[f] = t[f];
        return a && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = t,
        e.__reactInternalMemoizedMaskedChildContext = u),
        u
    }
    function bt(e) {
        return e = e.childContextTypes,
        e != null
    }
    function xi() {
        Fe(wt),
        Fe(ct)
    }
    function Nf(e, t, o) {
        if (ct.current !== Dn)
            throw Error(s(168));
        Ie(ct, t),
        Ie(wt, o)
    }
    function _f(e, t, o) {
        var a = e.stateNode;
        if (t = t.childContextTypes,
        typeof a.getChildContext != "function")
            return o;
        a = a.getChildContext();
        for (var u in a)
            if (!(u in t))
                throw Error(s(108, ve(e) || "Unknown", u));
        return Y({}, o, a)
    }
    function wi(e) {
        return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dn,
        hr = ct.current,
        Ie(ct, e),
        Ie(wt, wt.current),
        !0
    }
    function jf(e, t, o) {
        var a = e.stateNode;
        if (!a)
            throw Error(s(169));
        o ? (e = _f(e, t, hr),
        a.__reactInternalMemoizedMergedChildContext = e,
        Fe(wt),
        Fe(ct),
        Ie(ct, e)) : Fe(wt),
        Ie(wt, o)
    }
    var gn = null
      , bi = !1
      , Ll = !1;
    function Rf(e) {
        gn === null ? gn = [e] : gn.push(e)
    }
    function e0(e) {
        bi = !0,
        Rf(e)
    }
    function Un() {
        if (!Ll && gn !== null) {
            Ll = !0;
            var e = 0
              , t = Le;
            try {
                var o = gn;
                for (Le = 1; e < o.length; e++) {
                    var a = o[e];
                    do
                        a = a(!0);
                    while (a !== null)
                }
                gn = null,
                bi = !1
            } catch (u) {
                throw gn !== null && (gn = gn.slice(e + 1)),
                Td(nl, Un),
                u
            } finally {
                Le = t,
                Ll = !1
            }
        }
        return null
    }
    var rs = []
      , ss = 0
      , Si = null
      , ki = 0
      , It = []
      , Mt = 0
      , pr = null
      , yn = 1
      , vn = "";
    function mr(e, t) {
        rs[ss++] = ki,
        rs[ss++] = Si,
        Si = e,
        ki = t
    }
    function Tf(e, t, o) {
        It[Mt++] = yn,
        It[Mt++] = vn,
        It[Mt++] = pr,
        pr = e;
        var a = yn;
        e = vn;
        var u = 32 - Ht(a) - 1;
        a &= ~(1 << u),
        o += 1;
        var f = 32 - Ht(t) + u;
        if (30 < f) {
            var g = u - u % 5;
            f = (a & (1 << g) - 1).toString(32),
            a >>= g,
            u -= g,
            yn = 1 << 32 - Ht(t) + u | o << u | a,
            vn = f + e
        } else
            yn = 1 << f | o << u | a,
            vn = e
    }
    function Il(e) {
        e.return !== null && (mr(e, 1),
        Tf(e, 1, 0))
    }
    function Ml(e) {
        for (; e === Si; )
            Si = rs[--ss],
            rs[ss] = null,
            ki = rs[--ss],
            rs[ss] = null;
        for (; e === pr; )
            pr = It[--Mt],
            It[Mt] = null,
            vn = It[--Mt],
            It[Mt] = null,
            yn = It[--Mt],
            It[Mt] = null
    }
    var Pt = null
      , Ot = null
      , De = !1
      , Qt = null;
    function Pf(e, t) {
        var o = zt(5, null, null, 0);
        o.elementType = "DELETED",
        o.stateNode = t,
        o.return = e,
        t = e.deletions,
        t === null ? (e.deletions = [o],
        e.flags |= 16) : t.push(o)
    }
    function Of(e, t) {
        switch (e.tag) {
        case 5:
            var o = e.type;
            return t = t.nodeType !== 1 || o.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
            t !== null ? (e.stateNode = t,
            Pt = e,
            Ot = Mn(t.firstChild),
            !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
            t !== null ? (e.stateNode = t,
            Pt = e,
            Ot = null,
            !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t,
            t !== null ? (o = pr !== null ? {
                id: yn,
                overflow: vn
            } : null,
            e.memoizedState = {
                dehydrated: t,
                treeContext: o,
                retryLane: 1073741824
            },
            o = zt(18, null, null, 0),
            o.stateNode = t,
            o.return = e,
            e.child = o,
            Pt = e,
            Ot = null,
            !0) : !1;
        default:
            return !1
        }
    }
    function Fl(e) {
        return (e.mode & 1) !== 0 && (e.flags & 128) === 0
    }
    function Dl(e) {
        if (De) {
            var t = Ot;
            if (t) {
                var o = t;
                if (!Of(e, t)) {
                    if (Fl(e))
                        throw Error(s(418));
                    t = Mn(o.nextSibling);
                    var a = Pt;
                    t && Of(e, t) ? Pf(a, o) : (e.flags = e.flags & -4097 | 2,
                    De = !1,
                    Pt = e)
                }
            } else {
                if (Fl(e))
                    throw Error(s(418));
                e.flags = e.flags & -4097 | 2,
                De = !1,
                Pt = e
            }
        }
    }
    function Af(e) {
        for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
            e = e.return;
        Pt = e
    }
    function Ei(e) {
        if (e !== Pt)
            return !1;
        if (!De)
            return Af(e),
            De = !0,
            !1;
        var t;
        if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
        t = t !== "head" && t !== "body" && !Rl(e.type, e.memoizedProps)),
        t && (t = Ot)) {
            if (Fl(e))
                throw Lf(),
                Error(s(418));
            for (; t; )
                Pf(e, t),
                t = Mn(t.nextSibling)
        }
        if (Af(e),
        e.tag === 13) {
            if (e = e.memoizedState,
            e = e !== null ? e.dehydrated : null,
            !e)
                throw Error(s(317));
            e: {
                for (e = e.nextSibling,
                t = 0; e; ) {
                    if (e.nodeType === 8) {
                        var o = e.data;
                        if (o === "/$") {
                            if (t === 0) {
                                Ot = Mn(e.nextSibling);
                                break e
                            }
                            t--
                        } else
                            o !== "$" && o !== "$!" && o !== "$?" || t++
                    }
                    e = e.nextSibling
                }
                Ot = null
            }
        } else
            Ot = Pt ? Mn(e.stateNode.nextSibling) : null;
        return !0
    }
    function Lf() {
        for (var e = Ot; e; )
            e = Mn(e.nextSibling)
    }
    function os() {
        Ot = Pt = null,
        De = !1
    }
    function Ul(e) {
        Qt === null ? Qt = [e] : Qt.push(e)
    }
    var t0 = D.ReactCurrentBatchConfig;
    function ao(e, t, o) {
        if (e = o.ref,
        e !== null && typeof e != "function" && typeof e != "object") {
            if (o._owner) {
                if (o = o._owner,
                o) {
                    if (o.tag !== 1)
                        throw Error(s(309));
                    var a = o.stateNode
                }
                if (!a)
                    throw Error(s(147, e));
                var u = a
                  , f = "" + e;
                return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(g) {
                    var b = u.refs;
                    g === null ? delete b[f] : b[f] = g
                }
                ,
                t._stringRef = f,
                t)
            }
            if (typeof e != "string")
                throw Error(s(284));
            if (!o._owner)
                throw Error(s(290, e))
        }
        return e
    }
    function Ci(e, t) {
        throw e = Object.prototype.toString.call(t),
        Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
    }
    function If(e) {
        var t = e._init;
        return t(e._payload)
    }
    function Mf(e) {
        function t(P, _) {
            if (e) {
                var O = P.deletions;
                O === null ? (P.deletions = [_],
                P.flags |= 16) : O.push(_)
            }
        }
        function o(P, _) {
            if (!e)
                return null;
            for (; _ !== null; )
                t(P, _),
                _ = _.sibling;
            return null
        }
        function a(P, _) {
            for (P = new Map; _ !== null; )
                _.key !== null ? P.set(_.key, _) : P.set(_.index, _),
                _ = _.sibling;
            return P
        }
        function u(P, _) {
            return P = Qn(P, _),
            P.index = 0,
            P.sibling = null,
            P
        }
        function f(P, _, O) {
            return P.index = O,
            e ? (O = P.alternate,
            O !== null ? (O = O.index,
            O < _ ? (P.flags |= 2,
            _) : O) : (P.flags |= 2,
            _)) : (P.flags |= 1048576,
            _)
        }
        function g(P) {
            return e && P.alternate === null && (P.flags |= 2),
            P
        }
        function b(P, _, O, W) {
            return _ === null || _.tag !== 6 ? (_ = Tu(O, P.mode, W),
            _.return = P,
            _) : (_ = u(_, O),
            _.return = P,
            _)
        }
        function E(P, _, O, W) {
            var ae = O.type;
            return ae === ge ? V(P, _, O.props.children, W, O.key) : _ !== null && (_.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === ie && If(ae) === _.type) ? (W = u(_, O.props),
            W.ref = ao(P, _, O),
            W.return = P,
            W) : (W = Gi(O.type, O.key, O.props, null, P.mode, W),
            W.ref = ao(P, _, O),
            W.return = P,
            W)
        }
        function A(P, _, O, W) {
            return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== O.containerInfo || _.stateNode.implementation !== O.implementation ? (_ = Pu(O, P.mode, W),
            _.return = P,
            _) : (_ = u(_, O.children || []),
            _.return = P,
            _)
        }
        function V(P, _, O, W, ae) {
            return _ === null || _.tag !== 7 ? (_ = kr(O, P.mode, W, ae),
            _.return = P,
            _) : (_ = u(_, O),
            _.return = P,
            _)
        }
        function q(P, _, O) {
            if (typeof _ == "string" && _ !== "" || typeof _ == "number")
                return _ = Tu("" + _, P.mode, O),
                _.return = P,
                _;
            if (typeof _ == "object" && _ !== null) {
                switch (_.$$typeof) {
                case G:
                    return O = Gi(_.type, _.key, _.props, null, P.mode, O),
                    O.ref = ao(P, null, _),
                    O.return = P,
                    O;
                case de:
                    return _ = Pu(_, P.mode, O),
                    _.return = P,
                    _;
                case ie:
                    var W = _._init;
                    return q(P, W(_._payload), O)
                }
                if (Ms(_) || ue(_))
                    return _ = kr(_, P.mode, O, null),
                    _.return = P,
                    _;
                Ci(P, _)
            }
            return null
        }
        function $(P, _, O, W) {
            var ae = _ !== null ? _.key : null;
            if (typeof O == "string" && O !== "" || typeof O == "number")
                return ae !== null ? null : b(P, _, "" + O, W);
            if (typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case G:
                    return O.key === ae ? E(P, _, O, W) : null;
                case de:
                    return O.key === ae ? A(P, _, O, W) : null;
                case ie:
                    return ae = O._init,
                    $(P, _, ae(O._payload), W)
                }
                if (Ms(O) || ue(O))
                    return ae !== null ? null : V(P, _, O, W, null);
                Ci(P, O)
            }
            return null
        }
        function J(P, _, O, W, ae) {
            if (typeof W == "string" && W !== "" || typeof W == "number")
                return P = P.get(O) || null,
                b(_, P, "" + W, ae);
            if (typeof W == "object" && W !== null) {
                switch (W.$$typeof) {
                case G:
                    return P = P.get(W.key === null ? O : W.key) || null,
                    E(_, P, W, ae);
                case de:
                    return P = P.get(W.key === null ? O : W.key) || null,
                    A(_, P, W, ae);
                case ie:
                    var he = W._init;
                    return J(P, _, O, he(W._payload), ae)
                }
                if (Ms(W) || ue(W))
                    return P = P.get(O) || null,
                    V(_, P, W, ae, null);
                Ci(_, W)
            }
            return null
        }
        function ne(P, _, O, W) {
            for (var ae = null, he = null, pe = _, ye = _ = 0, rt = null; pe !== null && ye < O.length; ye++) {
                pe.index > ye ? (rt = pe,
                pe = null) : rt = pe.sibling;
                var Pe = $(P, pe, O[ye], W);
                if (Pe === null) {
                    pe === null && (pe = rt);
                    break
                }
                e && pe && Pe.alternate === null && t(P, pe),
                _ = f(Pe, _, ye),
                he === null ? ae = Pe : he.sibling = Pe,
                he = Pe,
                pe = rt
            }
            if (ye === O.length)
                return o(P, pe),
                De && mr(P, ye),
                ae;
            if (pe === null) {
                for (; ye < O.length; ye++)
                    pe = q(P, O[ye], W),
                    pe !== null && (_ = f(pe, _, ye),
                    he === null ? ae = pe : he.sibling = pe,
                    he = pe);
                return De && mr(P, ye),
                ae
            }
            for (pe = a(P, pe); ye < O.length; ye++)
                rt = J(pe, P, ye, O[ye], W),
                rt !== null && (e && rt.alternate !== null && pe.delete(rt.key === null ? ye : rt.key),
                _ = f(rt, _, ye),
                he === null ? ae = rt : he.sibling = rt,
                he = rt);
            return e && pe.forEach(function(Kn) {
                return t(P, Kn)
            }),
            De && mr(P, ye),
            ae
        }
        function oe(P, _, O, W) {
            var ae = ue(O);
            if (typeof ae != "function")
                throw Error(s(150));
            if (O = ae.call(O),
            O == null)
                throw Error(s(151));
            for (var he = ae = null, pe = _, ye = _ = 0, rt = null, Pe = O.next(); pe !== null && !Pe.done; ye++,
            Pe = O.next()) {
                pe.index > ye ? (rt = pe,
                pe = null) : rt = pe.sibling;
                var Kn = $(P, pe, Pe.value, W);
                if (Kn === null) {
                    pe === null && (pe = rt);
                    break
                }
                e && pe && Kn.alternate === null && t(P, pe),
                _ = f(Kn, _, ye),
                he === null ? ae = Kn : he.sibling = Kn,
                he = Kn,
                pe = rt
            }
            if (Pe.done)
                return o(P, pe),
                De && mr(P, ye),
                ae;
            if (pe === null) {
                for (; !Pe.done; ye++,
                Pe = O.next())
                    Pe = q(P, Pe.value, W),
                    Pe !== null && (_ = f(Pe, _, ye),
                    he === null ? ae = Pe : he.sibling = Pe,
                    he = Pe);
                return De && mr(P, ye),
                ae
            }
            for (pe = a(P, pe); !Pe.done; ye++,
            Pe = O.next())
                Pe = J(pe, P, ye, Pe.value, W),
                Pe !== null && (e && Pe.alternate !== null && pe.delete(Pe.key === null ? ye : Pe.key),
                _ = f(Pe, _, ye),
                he === null ? ae = Pe : he.sibling = Pe,
                he = Pe);
            return e && pe.forEach(function(L0) {
                return t(P, L0)
            }),
            De && mr(P, ye),
            ae
        }
        function He(P, _, O, W) {
            if (typeof O == "object" && O !== null && O.type === ge && O.key === null && (O = O.props.children),
            typeof O == "object" && O !== null) {
                switch (O.$$typeof) {
                case G:
                    e: {
                        for (var ae = O.key, he = _; he !== null; ) {
                            if (he.key === ae) {
                                if (ae = O.type,
                                ae === ge) {
                                    if (he.tag === 7) {
                                        o(P, he.sibling),
                                        _ = u(he, O.props.children),
                                        _.return = P,
                                        P = _;
                                        break e
                                    }
                                } else if (he.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === ie && If(ae) === he.type) {
                                    o(P, he.sibling),
                                    _ = u(he, O.props),
                                    _.ref = ao(P, he, O),
                                    _.return = P,
                                    P = _;
                                    break e
                                }
                                o(P, he);
                                break
                            } else
                                t(P, he);
                            he = he.sibling
                        }
                        O.type === ge ? (_ = kr(O.props.children, P.mode, W, O.key),
                        _.return = P,
                        P = _) : (W = Gi(O.type, O.key, O.props, null, P.mode, W),
                        W.ref = ao(P, _, O),
                        W.return = P,
                        P = W)
                    }
                    return g(P);
                case de:
                    e: {
                        for (he = O.key; _ !== null; ) {
                            if (_.key === he)
                                if (_.tag === 4 && _.stateNode.containerInfo === O.containerInfo && _.stateNode.implementation === O.implementation) {
                                    o(P, _.sibling),
                                    _ = u(_, O.children || []),
                                    _.return = P,
                                    P = _;
                                    break e
                                } else {
                                    o(P, _);
                                    break
                                }
                            else
                                t(P, _);
                            _ = _.sibling
                        }
                        _ = Pu(O, P.mode, W),
                        _.return = P,
                        P = _
                    }
                    return g(P);
                case ie:
                    return he = O._init,
                    He(P, _, he(O._payload), W)
                }
                if (Ms(O))
                    return ne(P, _, O, W);
                if (ue(O))
                    return oe(P, _, O, W);
                Ci(P, O)
            }
            return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O,
            _ !== null && _.tag === 6 ? (o(P, _.sibling),
            _ = u(_, O),
            _.return = P,
            P = _) : (o(P, _),
            _ = Tu(O, P.mode, W),
            _.return = P,
            P = _),
            g(P)) : o(P, _)
        }
        return He
    }
    var is = Mf(!0)
      , Ff = Mf(!1)
      , Ni = Fn(null)
      , _i = null
      , as = null
      , zl = null;
    function Bl() {
        zl = as = _i = null
    }
    function $l(e) {
        var t = Ni.current;
        Fe(Ni),
        e._currentValue = t
    }
    function Vl(e, t, o) {
        for (; e !== null; ) {
            var a = e.alternate;
            if ((e.childLanes & t) !== t ? (e.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            e === o)
                break;
            e = e.return
        }
    }
    function ls(e, t) {
        _i = e,
        zl = as = null,
        e = e.dependencies,
        e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (St = !0),
        e.firstContext = null)
    }
    function Ft(e) {
        var t = e._currentValue;
        if (zl !== e)
            if (e = {
                context: e,
                memoizedValue: t,
                next: null
            },
            as === null) {
                if (_i === null)
                    throw Error(s(308));
                as = e,
                _i.dependencies = {
                    lanes: 0,
                    firstContext: e
                }
            } else
                as = as.next = e;
        return t
    }
    var gr = null;
    function ql(e) {
        gr === null ? gr = [e] : gr.push(e)
    }
    function Df(e, t, o, a) {
        var u = t.interleaved;
        return u === null ? (o.next = o,
        ql(t)) : (o.next = u.next,
        u.next = o),
        t.interleaved = o,
        xn(e, a)
    }
    function xn(e, t) {
        e.lanes |= t;
        var o = e.alternate;
        for (o !== null && (o.lanes |= t),
        o = e,
        e = e.return; e !== null; )
            e.childLanes |= t,
            o = e.alternate,
            o !== null && (o.childLanes |= t),
            o = e,
            e = e.return;
        return o.tag === 3 ? o.stateNode : null
    }
    var zn = !1;
    function Hl(e) {
        e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                interleaved: null,
                lanes: 0
            },
            effects: null
        }
    }
    function Uf(e, t) {
        e = e.updateQueue,
        t.updateQueue === e && (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects
        })
    }
    function wn(e, t) {
        return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function Bn(e, t, o) {
        var a = e.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (Re & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            a.pending = t,
            xn(e, o)
        }
        return u = a.interleaved,
        u === null ? (t.next = t,
        ql(a)) : (t.next = u.next,
        u.next = t),
        a.interleaved = t,
        xn(e, o)
    }
    function ji(e, t, o) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (o & 4194240) !== 0)) {
            var a = t.lanes;
            a &= e.pendingLanes,
            o |= a,
            t.lanes = o,
            ol(e, o)
        }
    }
    function zf(e, t) {
        var o = e.updateQueue
          , a = e.alternate;
        if (a !== null && (a = a.updateQueue,
        o === a)) {
            var u = null
              , f = null;
            if (o = o.firstBaseUpdate,
            o !== null) {
                do {
                    var g = {
                        eventTime: o.eventTime,
                        lane: o.lane,
                        tag: o.tag,
                        payload: o.payload,
                        callback: o.callback,
                        next: null
                    };
                    f === null ? u = f = g : f = f.next = g,
                    o = o.next
                } while (o !== null);
                f === null ? u = f = t : f = f.next = t
            } else
                u = f = t;
            o = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: f,
                shared: a.shared,
                effects: a.effects
            },
            e.updateQueue = o;
            return
        }
        e = o.lastBaseUpdate,
        e === null ? o.firstBaseUpdate = t : e.next = t,
        o.lastBaseUpdate = t
    }
    function Ri(e, t, o, a) {
        var u = e.updateQueue;
        zn = !1;
        var f = u.firstBaseUpdate
          , g = u.lastBaseUpdate
          , b = u.shared.pending;
        if (b !== null) {
            u.shared.pending = null;
            var E = b
              , A = E.next;
            E.next = null,
            g === null ? f = A : g.next = A,
            g = E;
            var V = e.alternate;
            V !== null && (V = V.updateQueue,
            b = V.lastBaseUpdate,
            b !== g && (b === null ? V.firstBaseUpdate = A : b.next = A,
            V.lastBaseUpdate = E))
        }
        if (f !== null) {
            var q = u.baseState;
            g = 0,
            V = A = E = null,
            b = f;
            do {
                var $ = b.lane
                  , J = b.eventTime;
                if ((a & $) === $) {
                    V !== null && (V = V.next = {
                        eventTime: J,
                        lane: 0,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    });
                    e: {
                        var ne = e
                          , oe = b;
                        switch ($ = t,
                        J = o,
                        oe.tag) {
                        case 1:
                            if (ne = oe.payload,
                            typeof ne == "function") {
                                q = ne.call(J, q, $);
                                break e
                            }
                            q = ne;
                            break e;
                        case 3:
                            ne.flags = ne.flags & -65537 | 128;
                        case 0:
                            if (ne = oe.payload,
                            $ = typeof ne == "function" ? ne.call(J, q, $) : ne,
                            $ == null)
                                break e;
                            q = Y({}, q, $);
                            break e;
                        case 2:
                            zn = !0
                        }
                    }
                    b.callback !== null && b.lane !== 0 && (e.flags |= 64,
                    $ = u.effects,
                    $ === null ? u.effects = [b] : $.push(b))
                } else
                    J = {
                        eventTime: J,
                        lane: $,
                        tag: b.tag,
                        payload: b.payload,
                        callback: b.callback,
                        next: null
                    },
                    V === null ? (A = V = J,
                    E = q) : V = V.next = J,
                    g |= $;
                if (b = b.next,
                b === null) {
                    if (b = u.shared.pending,
                    b === null)
                        break;
                    $ = b,
                    b = $.next,
                    $.next = null,
                    u.lastBaseUpdate = $,
                    u.shared.pending = null
                }
            } while (!0);
            if (V === null && (E = q),
            u.baseState = E,
            u.firstBaseUpdate = A,
            u.lastBaseUpdate = V,
            t = u.shared.interleaved,
            t !== null) {
                u = t;
                do
                    g |= u.lane,
                    u = u.next;
                while (u !== t)
            } else
                f === null && (u.shared.lanes = 0);
            xr |= g,
            e.lanes = g,
            e.memoizedState = q
        }
    }
    function Bf(e, t, o) {
        if (e = t.effects,
        t.effects = null,
        e !== null)
            for (t = 0; t < e.length; t++) {
                var a = e[t]
                  , u = a.callback;
                if (u !== null) {
                    if (a.callback = null,
                    a = o,
                    typeof u != "function")
                        throw Error(s(191, u));
                    u.call(a)
                }
            }
    }
    var lo = {}
      , on = Fn(lo)
      , uo = Fn(lo)
      , co = Fn(lo);
    function yr(e) {
        if (e === lo)
            throw Error(s(174));
        return e
    }
    function Wl(e, t) {
        switch (Ie(co, t),
        Ie(uo, e),
        Ie(on, lo),
        e = t.nodeType,
        e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Qa(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t,
            t = e.namespaceURI || null,
            e = e.tagName,
            t = Qa(t, e)
        }
        Fe(on),
        Ie(on, t)
    }
    function us() {
        Fe(on),
        Fe(uo),
        Fe(co)
    }
    function $f(e) {
        yr(co.current);
        var t = yr(on.current)
          , o = Qa(t, e.type);
        t !== o && (Ie(uo, e),
        Ie(on, o))
    }
    function Ql(e) {
        uo.current === e && (Fe(on),
        Fe(uo))
    }
    var Ue = Fn(0);
    function Ti(e) {
        for (var t = e; t !== null; ) {
            if (t.tag === 13) {
                var o = t.memoizedState;
                if (o !== null && (o = o.dehydrated,
                o === null || o.data === "$?" || o.data === "$!"))
                    return t
            } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Kl = [];
    function Gl() {
        for (var e = 0; e < Kl.length; e++)
            Kl[e]._workInProgressVersionPrimary = null;
        Kl.length = 0
    }
    var Pi = D.ReactCurrentDispatcher
      , Yl = D.ReactCurrentBatchConfig
      , vr = 0
      , ze = null
      , Je = null
      , tt = null
      , Oi = !1
      , fo = !1
      , ho = 0
      , n0 = 0;
    function dt() {
        throw Error(s(321))
    }
    function Jl(e, t) {
        if (t === null)
            return !1;
        for (var o = 0; o < t.length && o < e.length; o++)
            if (!Wt(e[o], t[o]))
                return !1;
        return !0
    }
    function Xl(e, t, o, a, u, f) {
        if (vr = f,
        ze = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        Pi.current = e === null || e.memoizedState === null ? i0 : a0,
        e = o(a, u),
        fo) {
            f = 0;
            do {
                if (fo = !1,
                ho = 0,
                25 <= f)
                    throw Error(s(301));
                f += 1,
                tt = Je = null,
                t.updateQueue = null,
                Pi.current = l0,
                e = o(a, u)
            } while (fo)
        }
        if (Pi.current = Ii,
        t = Je !== null && Je.next !== null,
        vr = 0,
        tt = Je = ze = null,
        Oi = !1,
        t)
            throw Error(s(300));
        return e
    }
    function Zl() {
        var e = ho !== 0;
        return ho = 0,
        e
    }
    function an() {
        var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return tt === null ? ze.memoizedState = tt = e : tt = tt.next = e,
        tt
    }
    function Dt() {
        if (Je === null) {
            var e = ze.alternate;
            e = e !== null ? e.memoizedState : null
        } else
            e = Je.next;
        var t = tt === null ? ze.memoizedState : tt.next;
        if (t !== null)
            tt = t,
            Je = e;
        else {
            if (e === null)
                throw Error(s(310));
            Je = e,
            e = {
                memoizedState: Je.memoizedState,
                baseState: Je.baseState,
                baseQueue: Je.baseQueue,
                queue: Je.queue,
                next: null
            },
            tt === null ? ze.memoizedState = tt = e : tt = tt.next = e
        }
        return tt
    }
    function po(e, t) {
        return typeof t == "function" ? t(e) : t
    }
    function eu(e) {
        var t = Dt()
          , o = t.queue;
        if (o === null)
            throw Error(s(311));
        o.lastRenderedReducer = e;
        var a = Je
          , u = a.baseQueue
          , f = o.pending;
        if (f !== null) {
            if (u !== null) {
                var g = u.next;
                u.next = f.next,
                f.next = g
            }
            a.baseQueue = u = f,
            o.pending = null
        }
        if (u !== null) {
            f = u.next,
            a = a.baseState;
            var b = g = null
              , E = null
              , A = f;
            do {
                var V = A.lane;
                if ((vr & V) === V)
                    E !== null && (E = E.next = {
                        lane: 0,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    }),
                    a = A.hasEagerState ? A.eagerState : e(a, A.action);
                else {
                    var q = {
                        lane: V,
                        action: A.action,
                        hasEagerState: A.hasEagerState,
                        eagerState: A.eagerState,
                        next: null
                    };
                    E === null ? (b = E = q,
                    g = a) : E = E.next = q,
                    ze.lanes |= V,
                    xr |= V
                }
                A = A.next
            } while (A !== null && A !== f);
            E === null ? g = a : E.next = b,
            Wt(a, t.memoizedState) || (St = !0),
            t.memoizedState = a,
            t.baseState = g,
            t.baseQueue = E,
            o.lastRenderedState = a
        }
        if (e = o.interleaved,
        e !== null) {
            u = e;
            do
                f = u.lane,
                ze.lanes |= f,
                xr |= f,
                u = u.next;
            while (u !== e)
        } else
            u === null && (o.lanes = 0);
        return [t.memoizedState, o.dispatch]
    }
    function tu(e) {
        var t = Dt()
          , o = t.queue;
        if (o === null)
            throw Error(s(311));
        o.lastRenderedReducer = e;
        var a = o.dispatch
          , u = o.pending
          , f = t.memoizedState;
        if (u !== null) {
            o.pending = null;
            var g = u = u.next;
            do
                f = e(f, g.action),
                g = g.next;
            while (g !== u);
            Wt(f, t.memoizedState) || (St = !0),
            t.memoizedState = f,
            t.baseQueue === null && (t.baseState = f),
            o.lastRenderedState = f
        }
        return [f, a]
    }
    function Vf() {}
    function qf(e, t) {
        var o = ze
          , a = Dt()
          , u = t()
          , f = !Wt(a.memoizedState, u);
        if (f && (a.memoizedState = u,
        St = !0),
        a = a.queue,
        nu(Qf.bind(null, o, a, e), [e]),
        a.getSnapshot !== t || f || tt !== null && tt.memoizedState.tag & 1) {
            if (o.flags |= 2048,
            mo(9, Wf.bind(null, o, a, u, t), void 0, null),
            nt === null)
                throw Error(s(349));
            (vr & 30) !== 0 || Hf(o, t, u)
        }
        return u
    }
    function Hf(e, t, o) {
        e.flags |= 16384,
        e = {
            getSnapshot: t,
            value: o
        },
        t = ze.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        ze.updateQueue = t,
        t.stores = [e]) : (o = t.stores,
        o === null ? t.stores = [e] : o.push(e))
    }
    function Wf(e, t, o, a) {
        t.value = o,
        t.getSnapshot = a,
        Kf(t) && Gf(e)
    }
    function Qf(e, t, o) {
        return o(function() {
            Kf(t) && Gf(e)
        })
    }
    function Kf(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
            var o = t();
            return !Wt(e, o)
        } catch {
            return !0
        }
    }
    function Gf(e) {
        var t = xn(e, 1);
        t !== null && Jt(t, e, 1, -1)
    }
    function Yf(e) {
        var t = an();
        return typeof e == "function" && (e = e()),
        t.memoizedState = t.baseState = e,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: po,
            lastRenderedState: e
        },
        t.queue = e,
        e = e.dispatch = o0.bind(null, ze, e),
        [t.memoizedState, e]
    }
    function mo(e, t, o, a) {
        return e = {
            tag: e,
            create: t,
            destroy: o,
            deps: a,
            next: null
        },
        t = ze.updateQueue,
        t === null ? (t = {
            lastEffect: null,
            stores: null
        },
        ze.updateQueue = t,
        t.lastEffect = e.next = e) : (o = t.lastEffect,
        o === null ? t.lastEffect = e.next = e : (a = o.next,
        o.next = e,
        e.next = a,
        t.lastEffect = e)),
        e
    }
    function Jf() {
        return Dt().memoizedState
    }
    function Ai(e, t, o, a) {
        var u = an();
        ze.flags |= e,
        u.memoizedState = mo(1 | t, o, void 0, a === void 0 ? null : a)
    }
    function Li(e, t, o, a) {
        var u = Dt();
        a = a === void 0 ? null : a;
        var f = void 0;
        if (Je !== null) {
            var g = Je.memoizedState;
            if (f = g.destroy,
            a !== null && Jl(a, g.deps)) {
                u.memoizedState = mo(t, o, f, a);
                return
            }
        }
        ze.flags |= e,
        u.memoizedState = mo(1 | t, o, f, a)
    }
    function Xf(e, t) {
        return Ai(8390656, 8, e, t)
    }
    function nu(e, t) {
        return Li(2048, 8, e, t)
    }
    function Zf(e, t) {
        return Li(4, 2, e, t)
    }
    function eh(e, t) {
        return Li(4, 4, e, t)
    }
    function th(e, t) {
        if (typeof t == "function")
            return e = e(),
            t(e),
            function() {
                t(null)
            }
            ;
        if (t != null)
            return e = e(),
            t.current = e,
            function() {
                t.current = null
            }
    }
    function nh(e, t, o) {
        return o = o != null ? o.concat([e]) : null,
        Li(4, 4, th.bind(null, t, e), o)
    }
    function ru() {}
    function rh(e, t) {
        var o = Dt();
        t = t === void 0 ? null : t;
        var a = o.memoizedState;
        return a !== null && t !== null && Jl(t, a[1]) ? a[0] : (o.memoizedState = [e, t],
        e)
    }
    function sh(e, t) {
        var o = Dt();
        t = t === void 0 ? null : t;
        var a = o.memoizedState;
        return a !== null && t !== null && Jl(t, a[1]) ? a[0] : (e = e(),
        o.memoizedState = [e, t],
        e)
    }
    function oh(e, t, o) {
        return (vr & 21) === 0 ? (e.baseState && (e.baseState = !1,
        St = !0),
        e.memoizedState = o) : (Wt(o, t) || (o = Ld(),
        ze.lanes |= o,
        xr |= o,
        e.baseState = !0),
        t)
    }
    function r0(e, t) {
        var o = Le;
        Le = o !== 0 && 4 > o ? o : 4,
        e(!0);
        var a = Yl.transition;
        Yl.transition = {};
        try {
            e(!1),
            t()
        } finally {
            Le = o,
            Yl.transition = a
        }
    }
    function ih() {
        return Dt().memoizedState
    }
    function s0(e, t, o) {
        var a = Hn(e);
        if (o = {
            lane: a,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        ah(e))
            lh(t, o);
        else if (o = Df(e, t, o, a),
        o !== null) {
            var u = yt();
            Jt(o, e, a, u),
            uh(o, t, a)
        }
    }
    function o0(e, t, o) {
        var a = Hn(e)
          , u = {
            lane: a,
            action: o,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (ah(e))
            lh(t, u);
        else {
            var f = e.alternate;
            if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer,
            f !== null))
                try {
                    var g = t.lastRenderedState
                      , b = f(g, o);
                    if (u.hasEagerState = !0,
                    u.eagerState = b,
                    Wt(b, g)) {
                        var E = t.interleaved;
                        E === null ? (u.next = u,
                        ql(t)) : (u.next = E.next,
                        E.next = u),
                        t.interleaved = u;
                        return
                    }
                } catch {} finally {}
            o = Df(e, t, u, a),
            o !== null && (u = yt(),
            Jt(o, e, a, u),
            uh(o, t, a))
        }
    }
    function ah(e) {
        var t = e.alternate;
        return e === ze || t !== null && t === ze
    }
    function lh(e, t) {
        fo = Oi = !0;
        var o = e.pending;
        o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        e.pending = t
    }
    function uh(e, t, o) {
        if ((o & 4194240) !== 0) {
            var a = t.lanes;
            a &= e.pendingLanes,
            o |= a,
            t.lanes = o,
            ol(e, o)
        }
    }
    var Ii = {
        readContext: Ft,
        useCallback: dt,
        useContext: dt,
        useEffect: dt,
        useImperativeHandle: dt,
        useInsertionEffect: dt,
        useLayoutEffect: dt,
        useMemo: dt,
        useReducer: dt,
        useRef: dt,
        useState: dt,
        useDebugValue: dt,
        useDeferredValue: dt,
        useTransition: dt,
        useMutableSource: dt,
        useSyncExternalStore: dt,
        useId: dt,
        unstable_isNewReconciler: !1
    }
      , i0 = {
        readContext: Ft,
        useCallback: function(e, t) {
            return an().memoizedState = [e, t === void 0 ? null : t],
            e
        },
        useContext: Ft,
        useEffect: Xf,
        useImperativeHandle: function(e, t, o) {
            return o = o != null ? o.concat([e]) : null,
            Ai(4194308, 4, th.bind(null, t, e), o)
        },
        useLayoutEffect: function(e, t) {
            return Ai(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Ai(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var o = an();
            return t = t === void 0 ? null : t,
            e = e(),
            o.memoizedState = [e, t],
            e
        },
        useReducer: function(e, t, o) {
            var a = an();
            return t = o !== void 0 ? o(t) : t,
            a.memoizedState = a.baseState = t,
            e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            },
            a.queue = e,
            e = e.dispatch = s0.bind(null, ze, e),
            [a.memoizedState, e]
        },
        useRef: function(e) {
            var t = an();
            return e = {
                current: e
            },
            t.memoizedState = e
        },
        useState: Yf,
        useDebugValue: ru,
        useDeferredValue: function(e) {
            return an().memoizedState = e
        },
        useTransition: function() {
            var e = Yf(!1)
              , t = e[0];
            return e = r0.bind(null, e[1]),
            an().memoizedState = e,
            [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, o) {
            var a = ze
              , u = an();
            if (De) {
                if (o === void 0)
                    throw Error(s(407));
                o = o()
            } else {
                if (o = t(),
                nt === null)
                    throw Error(s(349));
                (vr & 30) !== 0 || Hf(a, t, o)
            }
            u.memoizedState = o;
            var f = {
                value: o,
                getSnapshot: t
            };
            return u.queue = f,
            Xf(Qf.bind(null, a, f, e), [e]),
            a.flags |= 2048,
            mo(9, Wf.bind(null, a, f, o, t), void 0, null),
            o
        },
        useId: function() {
            var e = an()
              , t = nt.identifierPrefix;
            if (De) {
                var o = vn
                  , a = yn;
                o = (a & ~(1 << 32 - Ht(a) - 1)).toString(32) + o,
                t = ":" + t + "R" + o,
                o = ho++,
                0 < o && (t += "H" + o.toString(32)),
                t += ":"
            } else
                o = n0++,
                t = ":" + t + "r" + o.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    }
      , a0 = {
        readContext: Ft,
        useCallback: rh,
        useContext: Ft,
        useEffect: nu,
        useImperativeHandle: nh,
        useInsertionEffect: Zf,
        useLayoutEffect: eh,
        useMemo: sh,
        useReducer: eu,
        useRef: Jf,
        useState: function() {
            return eu(po)
        },
        useDebugValue: ru,
        useDeferredValue: function(e) {
            var t = Dt();
            return oh(t, Je.memoizedState, e)
        },
        useTransition: function() {
            var e = eu(po)[0]
              , t = Dt().memoizedState;
            return [e, t]
        },
        useMutableSource: Vf,
        useSyncExternalStore: qf,
        useId: ih,
        unstable_isNewReconciler: !1
    }
      , l0 = {
        readContext: Ft,
        useCallback: rh,
        useContext: Ft,
        useEffect: nu,
        useImperativeHandle: nh,
        useInsertionEffect: Zf,
        useLayoutEffect: eh,
        useMemo: sh,
        useReducer: tu,
        useRef: Jf,
        useState: function() {
            return tu(po)
        },
        useDebugValue: ru,
        useDeferredValue: function(e) {
            var t = Dt();
            return Je === null ? t.memoizedState = e : oh(t, Je.memoizedState, e)
        },
        useTransition: function() {
            var e = tu(po)[0]
              , t = Dt().memoizedState;
            return [e, t]
        },
        useMutableSource: Vf,
        useSyncExternalStore: qf,
        useId: ih,
        unstable_isNewReconciler: !1
    };
    function Kt(e, t) {
        if (e && e.defaultProps) {
            t = Y({}, t),
            e = e.defaultProps;
            for (var o in e)
                t[o] === void 0 && (t[o] = e[o]);
            return t
        }
        return t
    }
    function su(e, t, o, a) {
        t = e.memoizedState,
        o = o(a, t),
        o = o == null ? t : Y({}, t, o),
        e.memoizedState = o,
        e.lanes === 0 && (e.updateQueue.baseState = o)
    }
    var Mi = {
        isMounted: function(e) {
            return (e = e._reactInternals) ? dr(e) === e : !1
        },
        enqueueSetState: function(e, t, o) {
            e = e._reactInternals;
            var a = yt()
              , u = Hn(e)
              , f = wn(a, u);
            f.payload = t,
            o != null && (f.callback = o),
            t = Bn(e, f, u),
            t !== null && (Jt(t, e, u, a),
            ji(t, e, u))
        },
        enqueueReplaceState: function(e, t, o) {
            e = e._reactInternals;
            var a = yt()
              , u = Hn(e)
              , f = wn(a, u);
            f.tag = 1,
            f.payload = t,
            o != null && (f.callback = o),
            t = Bn(e, f, u),
            t !== null && (Jt(t, e, u, a),
            ji(t, e, u))
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternals;
            var o = yt()
              , a = Hn(e)
              , u = wn(o, a);
            u.tag = 2,
            t != null && (u.callback = t),
            t = Bn(e, u, a),
            t !== null && (Jt(t, e, a, o),
            ji(t, e, a))
        }
    };
    function ch(e, t, o, a, u, f, g) {
        return e = e.stateNode,
        typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, f, g) : t.prototype && t.prototype.isPureReactComponent ? !eo(o, a) || !eo(u, f) : !0
    }
    function dh(e, t, o) {
        var a = !1
          , u = Dn
          , f = t.contextType;
        return typeof f == "object" && f !== null ? f = Ft(f) : (u = bt(t) ? hr : ct.current,
        a = t.contextTypes,
        f = (a = a != null) ? ns(e, u) : Dn),
        t = new t(o,f),
        e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
        t.updater = Mi,
        e.stateNode = t,
        t._reactInternals = e,
        a && (e = e.stateNode,
        e.__reactInternalMemoizedUnmaskedChildContext = u,
        e.__reactInternalMemoizedMaskedChildContext = f),
        t
    }
    function fh(e, t, o, a) {
        e = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(o, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(o, a),
        t.state !== e && Mi.enqueueReplaceState(t, t.state, null)
    }
    function ou(e, t, o, a) {
        var u = e.stateNode;
        u.props = o,
        u.state = e.memoizedState,
        u.refs = {},
        Hl(e);
        var f = t.contextType;
        typeof f == "object" && f !== null ? u.context = Ft(f) : (f = bt(t) ? hr : ct.current,
        u.context = ns(e, f)),
        u.state = e.memoizedState,
        f = t.getDerivedStateFromProps,
        typeof f == "function" && (su(e, t, f, o),
        u.state = e.memoizedState),
        typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state,
        typeof u.componentWillMount == "function" && u.componentWillMount(),
        typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
        t !== u.state && Mi.enqueueReplaceState(u, u.state, null),
        Ri(e, o, u, a),
        u.state = e.memoizedState),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308)
    }
    function cs(e, t) {
        try {
            var o = ""
              , a = t;
            do
                o += be(a),
                a = a.return;
            while (a);
            var u = o
        } catch (f) {
            u = `
Error generating stack: ` + f.message + `
` + f.stack
        }
        return {
            value: e,
            source: t,
            stack: u,
            digest: null
        }
    }
    function iu(e, t, o) {
        return {
            value: e,
            source: null,
            stack: o ?? null,
            digest: t ?? null
        }
    }
    function au(e, t) {
        try {
            console.error(t.value)
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    var u0 = typeof WeakMap == "function" ? WeakMap : Map;
    function hh(e, t, o) {
        o = wn(-1, o),
        o.tag = 3,
        o.payload = {
            element: null
        };
        var a = t.value;
        return o.callback = function() {
            Vi || (Vi = !0,
            Su = a),
            au(e, t)
        }
        ,
        o
    }
    function ph(e, t, o) {
        o = wn(-1, o),
        o.tag = 3;
        var a = e.type.getDerivedStateFromError;
        if (typeof a == "function") {
            var u = t.value;
            o.payload = function() {
                return a(u)
            }
            ,
            o.callback = function() {
                au(e, t)
            }
        }
        var f = e.stateNode;
        return f !== null && typeof f.componentDidCatch == "function" && (o.callback = function() {
            au(e, t),
            typeof a != "function" && (Vn === null ? Vn = new Set([this]) : Vn.add(this));
            var g = t.stack;
            this.componentDidCatch(t.value, {
                componentStack: g !== null ? g : ""
            })
        }
        ),
        o
    }
    function mh(e, t, o) {
        var a = e.pingCache;
        if (a === null) {
            a = e.pingCache = new u0;
            var u = new Set;
            a.set(t, u)
        } else
            u = a.get(t),
            u === void 0 && (u = new Set,
            a.set(t, u));
        u.has(o) || (u.add(o),
        e = k0.bind(null, e, t, o),
        t.then(e, e))
    }
    function gh(e) {
        do {
            var t;
            if ((t = e.tag === 13) && (t = e.memoizedState,
            t = t !== null ? t.dehydrated !== null : !0),
            t)
                return e;
            e = e.return
        } while (e !== null);
        return null
    }
    function yh(e, t, o, a, u) {
        return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128,
        o.flags |= 131072,
        o.flags &= -52805,
        o.tag === 1 && (o.alternate === null ? o.tag = 17 : (t = wn(-1, 1),
        t.tag = 2,
        Bn(o, t, 1))),
        o.lanes |= 1),
        e) : (e.flags |= 65536,
        e.lanes = u,
        e)
    }
    var c0 = D.ReactCurrentOwner
      , St = !1;
    function gt(e, t, o, a) {
        t.child = e === null ? Ff(t, null, o, a) : is(t, e.child, o, a)
    }
    function vh(e, t, o, a, u) {
        o = o.render;
        var f = t.ref;
        return ls(t, u),
        a = Xl(e, t, o, a, f, u),
        o = Zl(),
        e !== null && !St ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        bn(e, t, u)) : (De && o && Il(t),
        t.flags |= 1,
        gt(e, t, a, u),
        t.child)
    }
    function xh(e, t, o, a, u) {
        if (e === null) {
            var f = o.type;
            return typeof f == "function" && !Ru(f) && f.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (t.tag = 15,
            t.type = f,
            wh(e, t, f, a, u)) : (e = Gi(o.type, null, a, t, t.mode, u),
            e.ref = t.ref,
            e.return = t,
            t.child = e)
        }
        if (f = e.child,
        (e.lanes & u) === 0) {
            var g = f.memoizedProps;
            if (o = o.compare,
            o = o !== null ? o : eo,
            o(g, a) && e.ref === t.ref)
                return bn(e, t, u)
        }
        return t.flags |= 1,
        e = Qn(f, a),
        e.ref = t.ref,
        e.return = t,
        t.child = e
    }
    function wh(e, t, o, a, u) {
        if (e !== null) {
            var f = e.memoizedProps;
            if (eo(f, a) && e.ref === t.ref)
                if (St = !1,
                t.pendingProps = a = f,
                (e.lanes & u) !== 0)
                    (e.flags & 131072) !== 0 && (St = !0);
                else
                    return t.lanes = e.lanes,
                    bn(e, t, u)
        }
        return lu(e, t, o, a, u)
    }
    function bh(e, t, o) {
        var a = t.pendingProps
          , u = a.children
          , f = e !== null ? e.memoizedState : null;
        if (a.mode === "hidden")
            if ((t.mode & 1) === 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                Ie(fs, At),
                At |= o;
            else {
                if ((o & 1073741824) === 0)
                    return e = f !== null ? f.baseLanes | o : o,
                    t.lanes = t.childLanes = 1073741824,
                    t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    },
                    t.updateQueue = null,
                    Ie(fs, At),
                    At |= e,
                    null;
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null,
                    transitions: null
                },
                a = f !== null ? f.baseLanes : o,
                Ie(fs, At),
                At |= a
            }
        else
            f !== null ? (a = f.baseLanes | o,
            t.memoizedState = null) : a = o,
            Ie(fs, At),
            At |= a;
        return gt(e, t, u, o),
        t.child
    }
    function Sh(e, t) {
        var o = t.ref;
        (e === null && o !== null || e !== null && e.ref !== o) && (t.flags |= 512,
        t.flags |= 2097152)
    }
    function lu(e, t, o, a, u) {
        var f = bt(o) ? hr : ct.current;
        return f = ns(t, f),
        ls(t, u),
        o = Xl(e, t, o, a, f, u),
        a = Zl(),
        e !== null && !St ? (t.updateQueue = e.updateQueue,
        t.flags &= -2053,
        e.lanes &= ~u,
        bn(e, t, u)) : (De && a && Il(t),
        t.flags |= 1,
        gt(e, t, o, u),
        t.child)
    }
    function kh(e, t, o, a, u) {
        if (bt(o)) {
            var f = !0;
            wi(t)
        } else
            f = !1;
        if (ls(t, u),
        t.stateNode === null)
            Di(e, t),
            dh(t, o, a),
            ou(t, o, a, u),
            a = !0;
        else if (e === null) {
            var g = t.stateNode
              , b = t.memoizedProps;
            g.props = b;
            var E = g.context
              , A = o.contextType;
            typeof A == "object" && A !== null ? A = Ft(A) : (A = bt(o) ? hr : ct.current,
            A = ns(t, A));
            var V = o.getDerivedStateFromProps
              , q = typeof V == "function" || typeof g.getSnapshotBeforeUpdate == "function";
            q || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== a || E !== A) && fh(t, g, a, A),
            zn = !1;
            var $ = t.memoizedState;
            g.state = $,
            Ri(t, a, g, u),
            E = t.memoizedState,
            b !== a || $ !== E || wt.current || zn ? (typeof V == "function" && (su(t, o, V, a),
            E = t.memoizedState),
            (b = zn || ch(t, o, b, a, $, E, A)) ? (q || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(),
            typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()),
            typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = E),
            g.props = a,
            g.state = E,
            g.context = A,
            a = b) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            g = t.stateNode,
            Uf(e, t),
            b = t.memoizedProps,
            A = t.type === t.elementType ? b : Kt(t.type, b),
            g.props = A,
            q = t.pendingProps,
            $ = g.context,
            E = o.contextType,
            typeof E == "object" && E !== null ? E = Ft(E) : (E = bt(o) ? hr : ct.current,
            E = ns(t, E));
            var J = o.getDerivedStateFromProps;
            (V = typeof J == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (b !== q || $ !== E) && fh(t, g, a, E),
            zn = !1,
            $ = t.memoizedState,
            g.state = $,
            Ri(t, a, g, u);
            var ne = t.memoizedState;
            b !== q || $ !== ne || wt.current || zn ? (typeof J == "function" && (su(t, o, J, a),
            ne = t.memoizedState),
            (A = zn || ch(t, o, A, a, $, ne, E) || !1) ? (V || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(a, ne, E),
            typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(a, ne, E)),
            typeof g.componentDidUpdate == "function" && (t.flags |= 4),
            typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || b === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4),
            typeof g.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = ne),
            g.props = a,
            g.state = ne,
            g.context = E,
            a = A) : (typeof g.componentDidUpdate != "function" || b === e.memoizedProps && $ === e.memoizedState || (t.flags |= 4),
            typeof g.getSnapshotBeforeUpdate != "function" || b === e.memoizedProps && $ === e.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return uu(e, t, o, a, f, u)
    }
    function uu(e, t, o, a, u, f) {
        Sh(e, t);
        var g = (t.flags & 128) !== 0;
        if (!a && !g)
            return u && jf(t, o, !1),
            bn(e, t, f);
        a = t.stateNode,
        c0.current = t;
        var b = g && typeof o.getDerivedStateFromError != "function" ? null : a.render();
        return t.flags |= 1,
        e !== null && g ? (t.child = is(t, e.child, null, f),
        t.child = is(t, null, b, f)) : gt(e, t, b, f),
        t.memoizedState = a.state,
        u && jf(t, o, !0),
        t.child
    }
    function Eh(e) {
        var t = e.stateNode;
        t.pendingContext ? Nf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Nf(e, t.context, !1),
        Wl(e, t.containerInfo)
    }
    function Ch(e, t, o, a, u) {
        return os(),
        Ul(u),
        t.flags |= 256,
        gt(e, t, o, a),
        t.child
    }
    var cu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0
    };
    function du(e) {
        return {
            baseLanes: e,
            cachePool: null,
            transitions: null
        }
    }
    function Nh(e, t, o) {
        var a = t.pendingProps, u = Ue.current, f = !1, g = (t.flags & 128) !== 0, b;
        if ((b = g) || (b = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0),
        b ? (f = !0,
        t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1),
        Ie(Ue, u & 1),
        e === null)
            return Dl(t),
            e = t.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824,
            null) : (g = a.children,
            e = a.fallback,
            f ? (a = t.mode,
            f = t.child,
            g = {
                mode: "hidden",
                children: g
            },
            (a & 1) === 0 && f !== null ? (f.childLanes = 0,
            f.pendingProps = g) : f = Yi(g, a, 0, null),
            e = kr(e, a, o, null),
            f.return = t,
            e.return = t,
            f.sibling = e,
            t.child = f,
            t.child.memoizedState = du(o),
            t.memoizedState = cu,
            e) : fu(t, g));
        if (u = e.memoizedState,
        u !== null && (b = u.dehydrated,
        b !== null))
            return d0(e, t, g, a, b, u, o);
        if (f) {
            f = a.fallback,
            g = t.mode,
            u = e.child,
            b = u.sibling;
            var E = {
                mode: "hidden",
                children: a.children
            };
            return (g & 1) === 0 && t.child !== u ? (a = t.child,
            a.childLanes = 0,
            a.pendingProps = E,
            t.deletions = null) : (a = Qn(u, E),
            a.subtreeFlags = u.subtreeFlags & 14680064),
            b !== null ? f = Qn(b, f) : (f = kr(f, g, o, null),
            f.flags |= 2),
            f.return = t,
            a.return = t,
            a.sibling = f,
            t.child = a,
            a = f,
            f = t.child,
            g = e.child.memoizedState,
            g = g === null ? du(o) : {
                baseLanes: g.baseLanes | o,
                cachePool: null,
                transitions: g.transitions
            },
            f.memoizedState = g,
            f.childLanes = e.childLanes & ~o,
            t.memoizedState = cu,
            a
        }
        return f = e.child,
        e = f.sibling,
        a = Qn(f, {
            mode: "visible",
            children: a.children
        }),
        (t.mode & 1) === 0 && (a.lanes = o),
        a.return = t,
        a.sibling = null,
        e !== null && (o = t.deletions,
        o === null ? (t.deletions = [e],
        t.flags |= 16) : o.push(e)),
        t.child = a,
        t.memoizedState = null,
        a
    }
    function fu(e, t) {
        return t = Yi({
            mode: "visible",
            children: t
        }, e.mode, 0, null),
        t.return = e,
        e.child = t
    }
    function Fi(e, t, o, a) {
        return a !== null && Ul(a),
        is(t, e.child, null, o),
        e = fu(t, t.pendingProps.children),
        e.flags |= 2,
        t.memoizedState = null,
        e
    }
    function d0(e, t, o, a, u, f, g) {
        if (o)
            return t.flags & 256 ? (t.flags &= -257,
            a = iu(Error(s(422))),
            Fi(e, t, g, a)) : t.memoizedState !== null ? (t.child = e.child,
            t.flags |= 128,
            null) : (f = a.fallback,
            u = t.mode,
            a = Yi({
                mode: "visible",
                children: a.children
            }, u, 0, null),
            f = kr(f, u, g, null),
            f.flags |= 2,
            a.return = t,
            f.return = t,
            a.sibling = f,
            t.child = a,
            (t.mode & 1) !== 0 && is(t, e.child, null, g),
            t.child.memoizedState = du(g),
            t.memoizedState = cu,
            f);
        if ((t.mode & 1) === 0)
            return Fi(e, t, g, null);
        if (u.data === "$!") {
            if (a = u.nextSibling && u.nextSibling.dataset,
            a)
                var b = a.dgst;
            return a = b,
            f = Error(s(419)),
            a = iu(f, a, void 0),
            Fi(e, t, g, a)
        }
        if (b = (g & e.childLanes) !== 0,
        St || b) {
            if (a = nt,
            a !== null) {
                switch (g & -g) {
                case 4:
                    u = 2;
                    break;
                case 16:
                    u = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    u = 32;
                    break;
                case 536870912:
                    u = 268435456;
                    break;
                default:
                    u = 0
                }
                u = (u & (a.suspendedLanes | g)) !== 0 ? 0 : u,
                u !== 0 && u !== f.retryLane && (f.retryLane = u,
                xn(e, u),
                Jt(a, e, u, -1))
            }
            return ju(),
            a = iu(Error(s(421))),
            Fi(e, t, g, a)
        }
        return u.data === "$?" ? (t.flags |= 128,
        t.child = e.child,
        t = E0.bind(null, e),
        u._reactRetry = t,
        null) : (e = f.treeContext,
        Ot = Mn(u.nextSibling),
        Pt = t,
        De = !0,
        Qt = null,
        e !== null && (It[Mt++] = yn,
        It[Mt++] = vn,
        It[Mt++] = pr,
        yn = e.id,
        vn = e.overflow,
        pr = t),
        t = fu(t, a.children),
        t.flags |= 4096,
        t)
    }
    function _h(e, t, o) {
        e.lanes |= t;
        var a = e.alternate;
        a !== null && (a.lanes |= t),
        Vl(e.return, t, o)
    }
    function hu(e, t, o, a, u) {
        var f = e.memoizedState;
        f === null ? e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: o,
            tailMode: u
        } : (f.isBackwards = t,
        f.rendering = null,
        f.renderingStartTime = 0,
        f.last = a,
        f.tail = o,
        f.tailMode = u)
    }
    function jh(e, t, o) {
        var a = t.pendingProps
          , u = a.revealOrder
          , f = a.tail;
        if (gt(e, t, a.children, o),
        a = Ue.current,
        (a & 2) !== 0)
            a = a & 1 | 2,
            t.flags |= 128;
        else {
            if (e !== null && (e.flags & 128) !== 0)
                e: for (e = t.child; e !== null; ) {
                    if (e.tag === 13)
                        e.memoizedState !== null && _h(e, o, t);
                    else if (e.tag === 19)
                        _h(e, o, t);
                    else if (e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break e;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break e;
                        e = e.return
                    }
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            a &= 1
        }
        if (Ie(Ue, a),
        (t.mode & 1) === 0)
            t.memoizedState = null;
        else
            switch (u) {
            case "forwards":
                for (o = t.child,
                u = null; o !== null; )
                    e = o.alternate,
                    e !== null && Ti(e) === null && (u = o),
                    o = o.sibling;
                o = u,
                o === null ? (u = t.child,
                t.child = null) : (u = o.sibling,
                o.sibling = null),
                hu(t, !1, u, o, f);
                break;
            case "backwards":
                for (o = null,
                u = t.child,
                t.child = null; u !== null; ) {
                    if (e = u.alternate,
                    e !== null && Ti(e) === null) {
                        t.child = u;
                        break
                    }
                    e = u.sibling,
                    u.sibling = o,
                    o = u,
                    u = e
                }
                hu(t, !0, o, null, f);
                break;
            case "together":
                hu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
        return t.child
    }
    function Di(e, t) {
        (t.mode & 1) === 0 && e !== null && (e.alternate = null,
        t.alternate = null,
        t.flags |= 2)
    }
    function bn(e, t, o) {
        if (e !== null && (t.dependencies = e.dependencies),
        xr |= t.lanes,
        (o & t.childLanes) === 0)
            return null;
        if (e !== null && t.child !== e.child)
            throw Error(s(153));
        if (t.child !== null) {
            for (e = t.child,
            o = Qn(e, e.pendingProps),
            t.child = o,
            o.return = t; e.sibling !== null; )
                e = e.sibling,
                o = o.sibling = Qn(e, e.pendingProps),
                o.return = t;
            o.sibling = null
        }
        return t.child
    }
    function f0(e, t, o) {
        switch (t.tag) {
        case 3:
            Eh(t),
            os();
            break;
        case 5:
            $f(t);
            break;
        case 1:
            bt(t.type) && wi(t);
            break;
        case 4:
            Wl(t, t.stateNode.containerInfo);
            break;
        case 10:
            var a = t.type._context
              , u = t.memoizedProps.value;
            Ie(Ni, a._currentValue),
            a._currentValue = u;
            break;
        case 13:
            if (a = t.memoizedState,
            a !== null)
                return a.dehydrated !== null ? (Ie(Ue, Ue.current & 1),
                t.flags |= 128,
                null) : (o & t.child.childLanes) !== 0 ? Nh(e, t, o) : (Ie(Ue, Ue.current & 1),
                e = bn(e, t, o),
                e !== null ? e.sibling : null);
            Ie(Ue, Ue.current & 1);
            break;
        case 19:
            if (a = (o & t.childLanes) !== 0,
            (e.flags & 128) !== 0) {
                if (a)
                    return jh(e, t, o);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            Ie(Ue, Ue.current),
            a)
                break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0,
            bh(e, t, o)
        }
        return bn(e, t, o)
    }
    var Rh, pu, Th, Ph;
    Rh = function(e, t) {
        for (var o = t.child; o !== null; ) {
            if (o.tag === 5 || o.tag === 6)
                e.appendChild(o.stateNode);
            else if (o.tag !== 4 && o.child !== null) {
                o.child.return = o,
                o = o.child;
                continue
            }
            if (o === t)
                break;
            for (; o.sibling === null; ) {
                if (o.return === null || o.return === t)
                    return;
                o = o.return
            }
            o.sibling.return = o.return,
            o = o.sibling
        }
    }
    ,
    pu = function() {}
    ,
    Th = function(e, t, o, a) {
        var u = e.memoizedProps;
        if (u !== a) {
            e = t.stateNode,
            yr(on.current);
            var f = null;
            switch (o) {
            case "input":
                u = Va(e, u),
                a = Va(e, a),
                f = [];
                break;
            case "select":
                u = Y({}, u, {
                    value: void 0
                }),
                a = Y({}, a, {
                    value: void 0
                }),
                f = [];
                break;
            case "textarea":
                u = Wa(e, u),
                a = Wa(e, a),
                f = [];
                break;
            default:
                typeof u.onClick != "function" && typeof a.onClick == "function" && (e.onclick = yi)
            }
            Ka(o, a);
            var g;
            o = null;
            for (A in u)
                if (!a.hasOwnProperty(A) && u.hasOwnProperty(A) && u[A] != null)
                    if (A === "style") {
                        var b = u[A];
                        for (g in b)
                            b.hasOwnProperty(g) && (o || (o = {}),
                            o[g] = "")
                    } else
                        A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (l.hasOwnProperty(A) ? f || (f = []) : (f = f || []).push(A, null));
            for (A in a) {
                var E = a[A];
                if (b = u != null ? u[A] : void 0,
                a.hasOwnProperty(A) && E !== b && (E != null || b != null))
                    if (A === "style")
                        if (b) {
                            for (g in b)
                                !b.hasOwnProperty(g) || E && E.hasOwnProperty(g) || (o || (o = {}),
                                o[g] = "");
                            for (g in E)
                                E.hasOwnProperty(g) && b[g] !== E[g] && (o || (o = {}),
                                o[g] = E[g])
                        } else
                            o || (f || (f = []),
                            f.push(A, o)),
                            o = E;
                    else
                        A === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0,
                        b = b ? b.__html : void 0,
                        E != null && b !== E && (f = f || []).push(A, E)) : A === "children" ? typeof E != "string" && typeof E != "number" || (f = f || []).push(A, "" + E) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (l.hasOwnProperty(A) ? (E != null && A === "onScroll" && Me("scroll", e),
                        f || b === E || (f = [])) : (f = f || []).push(A, E))
            }
            o && (f = f || []).push("style", o);
            var A = f;
            (t.updateQueue = A) && (t.flags |= 4)
        }
    }
    ,
    Ph = function(e, t, o, a) {
        o !== a && (t.flags |= 4)
    }
    ;
    function go(e, t) {
        if (!De)
            switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var o = null; t !== null; )
                    t.alternate !== null && (o = t),
                    t = t.sibling;
                o === null ? e.tail = null : o.sibling = null;
                break;
            case "collapsed":
                o = e.tail;
                for (var a = null; o !== null; )
                    o.alternate !== null && (a = o),
                    o = o.sibling;
                a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null
            }
    }
    function ft(e) {
        var t = e.alternate !== null && e.alternate.child === e.child
          , o = 0
          , a = 0;
        if (t)
            for (var u = e.child; u !== null; )
                o |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 14680064,
                a |= u.flags & 14680064,
                u.return = e,
                u = u.sibling;
        else
            for (u = e.child; u !== null; )
                o |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = e,
                u = u.sibling;
        return e.subtreeFlags |= a,
        e.childLanes = o,
        t
    }
    function h0(e, t, o) {
        var a = t.pendingProps;
        switch (Ml(t),
        t.tag) {
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
            return ft(t),
            null;
        case 1:
            return bt(t.type) && xi(),
            ft(t),
            null;
        case 3:
            return a = t.stateNode,
            us(),
            Fe(wt),
            Fe(ct),
            Gl(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (e === null || e.child === null) && (Ei(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            Qt !== null && (Cu(Qt),
            Qt = null))),
            pu(e, t),
            ft(t),
            null;
        case 5:
            Ql(t);
            var u = yr(co.current);
            if (o = t.type,
            e !== null && t.stateNode != null)
                Th(e, t, o, a, u),
                e.ref !== t.ref && (t.flags |= 512,
                t.flags |= 2097152);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(s(166));
                    return ft(t),
                    null
                }
                if (e = yr(on.current),
                Ei(t)) {
                    a = t.stateNode,
                    o = t.type;
                    var f = t.memoizedProps;
                    switch (a[sn] = t,
                    a[oo] = f,
                    e = (t.mode & 1) !== 0,
                    o) {
                    case "dialog":
                        Me("cancel", a),
                        Me("close", a);
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        Me("load", a);
                        break;
                    case "video":
                    case "audio":
                        for (u = 0; u < no.length; u++)
                            Me(no[u], a);
                        break;
                    case "source":
                        Me("error", a);
                        break;
                    case "img":
                    case "image":
                    case "link":
                        Me("error", a),
                        Me("load", a);
                        break;
                    case "details":
                        Me("toggle", a);
                        break;
                    case "input":
                        cd(a, f),
                        Me("invalid", a);
                        break;
                    case "select":
                        a._wrapperState = {
                            wasMultiple: !!f.multiple
                        },
                        Me("invalid", a);
                        break;
                    case "textarea":
                        hd(a, f),
                        Me("invalid", a)
                    }
                    Ka(o, f),
                    u = null;
                    for (var g in f)
                        if (f.hasOwnProperty(g)) {
                            var b = f[g];
                            g === "children" ? typeof b == "string" ? a.textContent !== b && (f.suppressHydrationWarning !== !0 && gi(a.textContent, b, e),
                            u = ["children", b]) : typeof b == "number" && a.textContent !== "" + b && (f.suppressHydrationWarning !== !0 && gi(a.textContent, b, e),
                            u = ["children", "" + b]) : l.hasOwnProperty(g) && b != null && g === "onScroll" && Me("scroll", a)
                        }
                    switch (o) {
                    case "input":
                        Rn(a),
                        fd(a, f, !0);
                        break;
                    case "textarea":
                        Rn(a),
                        md(a);
                        break;
                    case "select":
                    case "option":
                        break;
                    default:
                        typeof f.onClick == "function" && (a.onclick = yi)
                    }
                    a = u,
                    t.updateQueue = a,
                    a !== null && (t.flags |= 4)
                } else {
                    g = u.nodeType === 9 ? u : u.ownerDocument,
                    e === "http://www.w3.org/1999/xhtml" && (e = gd(o)),
                    e === "http://www.w3.org/1999/xhtml" ? o === "script" ? (e = g.createElement("div"),
                    e.innerHTML = "<script><\/script>",
                    e = e.removeChild(e.firstChild)) : typeof a.is == "string" ? e = g.createElement(o, {
                        is: a.is
                    }) : (e = g.createElement(o),
                    o === "select" && (g = e,
                    a.multiple ? g.multiple = !0 : a.size && (g.size = a.size))) : e = g.createElementNS(e, o),
                    e[sn] = t,
                    e[oo] = a,
                    Rh(e, t, !1, !1),
                    t.stateNode = e;
                    e: {
                        switch (g = Ga(o, a),
                        o) {
                        case "dialog":
                            Me("cancel", e),
                            Me("close", e),
                            u = a;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            Me("load", e),
                            u = a;
                            break;
                        case "video":
                        case "audio":
                            for (u = 0; u < no.length; u++)
                                Me(no[u], e);
                            u = a;
                            break;
                        case "source":
                            Me("error", e),
                            u = a;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            Me("error", e),
                            Me("load", e),
                            u = a;
                            break;
                        case "details":
                            Me("toggle", e),
                            u = a;
                            break;
                        case "input":
                            cd(e, a),
                            u = Va(e, a),
                            Me("invalid", e);
                            break;
                        case "option":
                            u = a;
                            break;
                        case "select":
                            e._wrapperState = {
                                wasMultiple: !!a.multiple
                            },
                            u = Y({}, a, {
                                value: void 0
                            }),
                            Me("invalid", e);
                            break;
                        case "textarea":
                            hd(e, a),
                            u = Wa(e, a),
                            Me("invalid", e);
                            break;
                        default:
                            u = a
                        }
                        Ka(o, u),
                        b = u;
                        for (f in b)
                            if (b.hasOwnProperty(f)) {
                                var E = b[f];
                                f === "style" ? xd(e, E) : f === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0,
                                E != null && yd(e, E)) : f === "children" ? typeof E == "string" ? (o !== "textarea" || E !== "") && Fs(e, E) : typeof E == "number" && Fs(e, "" + E) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (l.hasOwnProperty(f) ? E != null && f === "onScroll" && Me("scroll", e) : E != null && U(e, f, E, g))
                            }
                        switch (o) {
                        case "input":
                            Rn(e),
                            fd(e, a, !1);
                            break;
                        case "textarea":
                            Rn(e),
                            md(e);
                            break;
                        case "option":
                            a.value != null && e.setAttribute("value", "" + Te(a.value));
                            break;
                        case "select":
                            e.multiple = !!a.multiple,
                            f = a.value,
                            f != null ? qr(e, !!a.multiple, f, !1) : a.defaultValue != null && qr(e, !!a.multiple, a.defaultValue, !0);
                            break;
                        default:
                            typeof u.onClick == "function" && (e.onclick = yi)
                        }
                        switch (o) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            a = !!a.autoFocus;
                            break e;
                        case "img":
                            a = !0;
                            break e;
                        default:
                            a = !1
                        }
                    }
                    a && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512,
                t.flags |= 2097152)
            }
            return ft(t),
            null;
        case 6:
            if (e && t.stateNode != null)
                Ph(e, t, e.memoizedProps, a);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(s(166));
                if (o = yr(co.current),
                yr(on.current),
                Ei(t)) {
                    if (a = t.stateNode,
                    o = t.memoizedProps,
                    a[sn] = t,
                    (f = a.nodeValue !== o) && (e = Pt,
                    e !== null))
                        switch (e.tag) {
                        case 3:
                            gi(a.nodeValue, o, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && gi(a.nodeValue, o, (e.mode & 1) !== 0)
                        }
                    f && (t.flags |= 4)
                } else
                    a = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(a),
                    a[sn] = t,
                    t.stateNode = a
            }
            return ft(t),
            null;
        case 13:
            if (Fe(Ue),
            a = t.memoizedState,
            e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (De && Ot !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
                    Lf(),
                    os(),
                    t.flags |= 98560,
                    f = !1;
                else if (f = Ei(t),
                a !== null && a.dehydrated !== null) {
                    if (e === null) {
                        if (!f)
                            throw Error(s(318));
                        if (f = t.memoizedState,
                        f = f !== null ? f.dehydrated : null,
                        !f)
                            throw Error(s(317));
                        f[sn] = t
                    } else
                        os(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    ft(t),
                    f = !1
                } else
                    Qt !== null && (Cu(Qt),
                    Qt = null),
                    f = !0;
                if (!f)
                    return t.flags & 65536 ? t : null
            }
            return (t.flags & 128) !== 0 ? (t.lanes = o,
            t) : (a = a !== null,
            a !== (e !== null && e.memoizedState !== null) && a && (t.child.flags |= 8192,
            (t.mode & 1) !== 0 && (e === null || (Ue.current & 1) !== 0 ? Xe === 0 && (Xe = 3) : ju())),
            t.updateQueue !== null && (t.flags |= 4),
            ft(t),
            null);
        case 4:
            return us(),
            pu(e, t),
            e === null && ro(t.stateNode.containerInfo),
            ft(t),
            null;
        case 10:
            return $l(t.type._context),
            ft(t),
            null;
        case 17:
            return bt(t.type) && xi(),
            ft(t),
            null;
        case 19:
            if (Fe(Ue),
            f = t.memoizedState,
            f === null)
                return ft(t),
                null;
            if (a = (t.flags & 128) !== 0,
            g = f.rendering,
            g === null)
                if (a)
                    go(f, !1);
                else {
                    if (Xe !== 0 || e !== null && (e.flags & 128) !== 0)
                        for (e = t.child; e !== null; ) {
                            if (g = Ti(e),
                            g !== null) {
                                for (t.flags |= 128,
                                go(f, !1),
                                a = g.updateQueue,
                                a !== null && (t.updateQueue = a,
                                t.flags |= 4),
                                t.subtreeFlags = 0,
                                a = o,
                                o = t.child; o !== null; )
                                    f = o,
                                    e = a,
                                    f.flags &= 14680066,
                                    g = f.alternate,
                                    g === null ? (f.childLanes = 0,
                                    f.lanes = e,
                                    f.child = null,
                                    f.subtreeFlags = 0,
                                    f.memoizedProps = null,
                                    f.memoizedState = null,
                                    f.updateQueue = null,
                                    f.dependencies = null,
                                    f.stateNode = null) : (f.childLanes = g.childLanes,
                                    f.lanes = g.lanes,
                                    f.child = g.child,
                                    f.subtreeFlags = 0,
                                    f.deletions = null,
                                    f.memoizedProps = g.memoizedProps,
                                    f.memoizedState = g.memoizedState,
                                    f.updateQueue = g.updateQueue,
                                    f.type = g.type,
                                    e = g.dependencies,
                                    f.dependencies = e === null ? null : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext
                                    }),
                                    o = o.sibling;
                                return Ie(Ue, Ue.current & 1 | 2),
                                t.child
                            }
                            e = e.sibling
                        }
                    f.tail !== null && qe() > hs && (t.flags |= 128,
                    a = !0,
                    go(f, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!a)
                    if (e = Ti(g),
                    e !== null) {
                        if (t.flags |= 128,
                        a = !0,
                        o = e.updateQueue,
                        o !== null && (t.updateQueue = o,
                        t.flags |= 4),
                        go(f, !0),
                        f.tail === null && f.tailMode === "hidden" && !g.alternate && !De)
                            return ft(t),
                            null
                    } else
                        2 * qe() - f.renderingStartTime > hs && o !== 1073741824 && (t.flags |= 128,
                        a = !0,
                        go(f, !1),
                        t.lanes = 4194304);
                f.isBackwards ? (g.sibling = t.child,
                t.child = g) : (o = f.last,
                o !== null ? o.sibling = g : t.child = g,
                f.last = g)
            }
            return f.tail !== null ? (t = f.tail,
            f.rendering = t,
            f.tail = t.sibling,
            f.renderingStartTime = qe(),
            t.sibling = null,
            o = Ue.current,
            Ie(Ue, a ? o & 1 | 2 : o & 1),
            t) : (ft(t),
            null);
        case 22:
        case 23:
            return _u(),
            a = t.memoizedState !== null,
            e !== null && e.memoizedState !== null !== a && (t.flags |= 8192),
            a && (t.mode & 1) !== 0 ? (At & 1073741824) !== 0 && (ft(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : ft(t),
            null;
        case 24:
            return null;
        case 25:
            return null
        }
        throw Error(s(156, t.tag))
    }
    function p0(e, t) {
        switch (Ml(t),
        t.tag) {
        case 1:
            return bt(t.type) && xi(),
            e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 3:
            return us(),
            Fe(wt),
            Fe(ct),
            Gl(),
            e = t.flags,
            (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 5:
            return Ql(t),
            null;
        case 13:
            if (Fe(Ue),
            e = t.memoizedState,
            e !== null && e.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(s(340));
                os()
            }
            return e = t.flags,
            e & 65536 ? (t.flags = e & -65537 | 128,
            t) : null;
        case 19:
            return Fe(Ue),
            null;
        case 4:
            return us(),
            null;
        case 10:
            return $l(t.type._context),
            null;
        case 22:
        case 23:
            return _u(),
            null;
        case 24:
            return null;
        default:
            return null
        }
    }
    var Ui = !1
      , ht = !1
      , m0 = typeof WeakSet == "function" ? WeakSet : Set
      , ee = null;
    function ds(e, t) {
        var o = e.ref;
        if (o !== null)
            if (typeof o == "function")
                try {
                    o(null)
                } catch (a) {
                    Be(e, t, a)
                }
            else
                o.current = null
    }
    function mu(e, t, o) {
        try {
            o()
        } catch (a) {
            Be(e, t, a)
        }
    }
    var Oh = !1;
    function g0(e, t) {
        if (_l = oi,
        e = cf(),
        xl(e)) {
            if ("selectionStart"in e)
                var o = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
            else
                e: {
                    o = (o = e.ownerDocument) && o.defaultView || window;
                    var a = o.getSelection && o.getSelection();
                    if (a && a.rangeCount !== 0) {
                        o = a.anchorNode;
                        var u = a.anchorOffset
                          , f = a.focusNode;
                        a = a.focusOffset;
                        try {
                            o.nodeType,
                            f.nodeType
                        } catch {
                            o = null;
                            break e
                        }
                        var g = 0
                          , b = -1
                          , E = -1
                          , A = 0
                          , V = 0
                          , q = e
                          , $ = null;
                        t: for (; ; ) {
                            for (var J; q !== o || u !== 0 && q.nodeType !== 3 || (b = g + u),
                            q !== f || a !== 0 && q.nodeType !== 3 || (E = g + a),
                            q.nodeType === 3 && (g += q.nodeValue.length),
                            (J = q.firstChild) !== null; )
                                $ = q,
                                q = J;
                            for (; ; ) {
                                if (q === e)
                                    break t;
                                if ($ === o && ++A === u && (b = g),
                                $ === f && ++V === a && (E = g),
                                (J = q.nextSibling) !== null)
                                    break;
                                q = $,
                                $ = q.parentNode
                            }
                            q = J
                        }
                        o = b === -1 || E === -1 ? null : {
                            start: b,
                            end: E
                        }
                    } else
                        o = null
                }
            o = o || {
                start: 0,
                end: 0
            }
        } else
            o = null;
        for (jl = {
            focusedElem: e,
            selectionRange: o
        },
        oi = !1,
        ee = t; ee !== null; )
            if (t = ee,
            e = t.child,
            (t.subtreeFlags & 1028) !== 0 && e !== null)
                e.return = t,
                ee = e;
            else
                for (; ee !== null; ) {
                    t = ee;
                    try {
                        var ne = t.alternate;
                        if ((t.flags & 1024) !== 0)
                            switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (ne !== null) {
                                    var oe = ne.memoizedProps
                                      , He = ne.memoizedState
                                      , P = t.stateNode
                                      , _ = P.getSnapshotBeforeUpdate(t.elementType === t.type ? oe : Kt(t.type, oe), He);
                                    P.__reactInternalSnapshotBeforeUpdate = _
                                }
                                break;
                            case 3:
                                var O = t.stateNode.containerInfo;
                                O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(s(163))
                            }
                    } catch (W) {
                        Be(t, t.return, W)
                    }
                    if (e = t.sibling,
                    e !== null) {
                        e.return = t.return,
                        ee = e;
                        break
                    }
                    ee = t.return
                }
        return ne = Oh,
        Oh = !1,
        ne
    }
    function yo(e, t, o) {
        var a = t.updateQueue;
        if (a = a !== null ? a.lastEffect : null,
        a !== null) {
            var u = a = a.next;
            do {
                if ((u.tag & e) === e) {
                    var f = u.destroy;
                    u.destroy = void 0,
                    f !== void 0 && mu(t, o, f)
                }
                u = u.next
            } while (u !== a)
        }
    }
    function zi(e, t) {
        if (t = t.updateQueue,
        t = t !== null ? t.lastEffect : null,
        t !== null) {
            var o = t = t.next;
            do {
                if ((o.tag & e) === e) {
                    var a = o.create;
                    o.destroy = a()
                }
                o = o.next
            } while (o !== t)
        }
    }
    function gu(e) {
        var t = e.ref;
        if (t !== null) {
            var o = e.stateNode;
            switch (e.tag) {
            case 5:
                e = o;
                break;
            default:
                e = o
            }
            typeof t == "function" ? t(e) : t.current = e
        }
    }
    function Ah(e) {
        var t = e.alternate;
        t !== null && (e.alternate = null,
        Ah(t)),
        e.child = null,
        e.deletions = null,
        e.sibling = null,
        e.tag === 5 && (t = e.stateNode,
        t !== null && (delete t[sn],
        delete t[oo],
        delete t[Ol],
        delete t[Xv],
        delete t[Zv])),
        e.stateNode = null,
        e.return = null,
        e.dependencies = null,
        e.memoizedProps = null,
        e.memoizedState = null,
        e.pendingProps = null,
        e.stateNode = null,
        e.updateQueue = null
    }
    function Lh(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4
    }
    function Ih(e) {
        e: for (; ; ) {
            for (; e.sibling === null; ) {
                if (e.return === null || Lh(e.return))
                    return null;
                e = e.return
            }
            for (e.sibling.return = e.return,
            e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
                if (e.flags & 2 || e.child === null || e.tag === 4)
                    continue e;
                e.child.return = e,
                e = e.child
            }
            if (!(e.flags & 2))
                return e.stateNode
        }
    }
    function yu(e, t, o) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? o.nodeType === 8 ? o.parentNode.insertBefore(e, t) : o.insertBefore(e, t) : (o.nodeType === 8 ? (t = o.parentNode,
            t.insertBefore(e, o)) : (t = o,
            t.appendChild(e)),
            o = o._reactRootContainer,
            o != null || t.onclick !== null || (t.onclick = yi));
        else if (a !== 4 && (e = e.child,
        e !== null))
            for (yu(e, t, o),
            e = e.sibling; e !== null; )
                yu(e, t, o),
                e = e.sibling
    }
    function vu(e, t, o) {
        var a = e.tag;
        if (a === 5 || a === 6)
            e = e.stateNode,
            t ? o.insertBefore(e, t) : o.appendChild(e);
        else if (a !== 4 && (e = e.child,
        e !== null))
            for (vu(e, t, o),
            e = e.sibling; e !== null; )
                vu(e, t, o),
                e = e.sibling
    }
    var it = null
      , Gt = !1;
    function $n(e, t, o) {
        for (o = o.child; o !== null; )
            Mh(e, t, o),
            o = o.sibling
    }
    function Mh(e, t, o) {
        if (rn && typeof rn.onCommitFiberUnmount == "function")
            try {
                rn.onCommitFiberUnmount(Zo, o)
            } catch {}
        switch (o.tag) {
        case 5:
            ht || ds(o, t);
        case 6:
            var a = it
              , u = Gt;
            it = null,
            $n(e, t, o),
            it = a,
            Gt = u,
            it !== null && (Gt ? (e = it,
            o = o.stateNode,
            e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)) : it.removeChild(o.stateNode));
            break;
        case 18:
            it !== null && (Gt ? (e = it,
            o = o.stateNode,
            e.nodeType === 8 ? Pl(e.parentNode, o) : e.nodeType === 1 && Pl(e, o),
            Ks(e)) : Pl(it, o.stateNode));
            break;
        case 4:
            a = it,
            u = Gt,
            it = o.stateNode.containerInfo,
            Gt = !0,
            $n(e, t, o),
            it = a,
            Gt = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ht && (a = o.updateQueue,
            a !== null && (a = a.lastEffect,
            a !== null))) {
                u = a = a.next;
                do {
                    var f = u
                      , g = f.destroy;
                    f = f.tag,
                    g !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && mu(o, t, g),
                    u = u.next
                } while (u !== a)
            }
            $n(e, t, o);
            break;
        case 1:
            if (!ht && (ds(o, t),
            a = o.stateNode,
            typeof a.componentWillUnmount == "function"))
                try {
                    a.props = o.memoizedProps,
                    a.state = o.memoizedState,
                    a.componentWillUnmount()
                } catch (b) {
                    Be(o, t, b)
                }
            $n(e, t, o);
            break;
        case 21:
            $n(e, t, o);
            break;
        case 22:
            o.mode & 1 ? (ht = (a = ht) || o.memoizedState !== null,
            $n(e, t, o),
            ht = a) : $n(e, t, o);
            break;
        default:
            $n(e, t, o)
        }
    }
    function Fh(e) {
        var t = e.updateQueue;
        if (t !== null) {
            e.updateQueue = null;
            var o = e.stateNode;
            o === null && (o = e.stateNode = new m0),
            t.forEach(function(a) {
                var u = C0.bind(null, e, a);
                o.has(a) || (o.add(a),
                a.then(u, u))
            })
        }
    }
    function Yt(e, t) {
        var o = t.deletions;
        if (o !== null)
            for (var a = 0; a < o.length; a++) {
                var u = o[a];
                try {
                    var f = e
                      , g = t
                      , b = g;
                    e: for (; b !== null; ) {
                        switch (b.tag) {
                        case 5:
                            it = b.stateNode,
                            Gt = !1;
                            break e;
                        case 3:
                            it = b.stateNode.containerInfo,
                            Gt = !0;
                            break e;
                        case 4:
                            it = b.stateNode.containerInfo,
                            Gt = !0;
                            break e
                        }
                        b = b.return
                    }
                    if (it === null)
                        throw Error(s(160));
                    Mh(f, g, u),
                    it = null,
                    Gt = !1;
                    var E = u.alternate;
                    E !== null && (E.return = null),
                    u.return = null
                } catch (A) {
                    Be(u, t, A)
                }
            }
        if (t.subtreeFlags & 12854)
            for (t = t.child; t !== null; )
                Dh(t, e),
                t = t.sibling
    }
    function Dh(e, t) {
        var o = e.alternate
          , a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Yt(t, e),
            ln(e),
            a & 4) {
                try {
                    yo(3, e, e.return),
                    zi(3, e)
                } catch (oe) {
                    Be(e, e.return, oe)
                }
                try {
                    yo(5, e, e.return)
                } catch (oe) {
                    Be(e, e.return, oe)
                }
            }
            break;
        case 1:
            Yt(t, e),
            ln(e),
            a & 512 && o !== null && ds(o, o.return);
            break;
        case 5:
            if (Yt(t, e),
            ln(e),
            a & 512 && o !== null && ds(o, o.return),
            e.flags & 32) {
                var u = e.stateNode;
                try {
                    Fs(u, "")
                } catch (oe) {
                    Be(e, e.return, oe)
                }
            }
            if (a & 4 && (u = e.stateNode,
            u != null)) {
                var f = e.memoizedProps
                  , g = o !== null ? o.memoizedProps : f
                  , b = e.type
                  , E = e.updateQueue;
                if (e.updateQueue = null,
                E !== null)
                    try {
                        b === "input" && f.type === "radio" && f.name != null && dd(u, f),
                        Ga(b, g);
                        var A = Ga(b, f);
                        for (g = 0; g < E.length; g += 2) {
                            var V = E[g]
                              , q = E[g + 1];
                            V === "style" ? xd(u, q) : V === "dangerouslySetInnerHTML" ? yd(u, q) : V === "children" ? Fs(u, q) : U(u, V, q, A)
                        }
                        switch (b) {
                        case "input":
                            qa(u, f);
                            break;
                        case "textarea":
                            pd(u, f);
                            break;
                        case "select":
                            var $ = u._wrapperState.wasMultiple;
                            u._wrapperState.wasMultiple = !!f.multiple;
                            var J = f.value;
                            J != null ? qr(u, !!f.multiple, J, !1) : $ !== !!f.multiple && (f.defaultValue != null ? qr(u, !!f.multiple, f.defaultValue, !0) : qr(u, !!f.multiple, f.multiple ? [] : "", !1))
                        }
                        u[oo] = f
                    } catch (oe) {
                        Be(e, e.return, oe)
                    }
            }
            break;
        case 6:
            if (Yt(t, e),
            ln(e),
            a & 4) {
                if (e.stateNode === null)
                    throw Error(s(162));
                u = e.stateNode,
                f = e.memoizedProps;
                try {
                    u.nodeValue = f
                } catch (oe) {
                    Be(e, e.return, oe)
                }
            }
            break;
        case 3:
            if (Yt(t, e),
            ln(e),
            a & 4 && o !== null && o.memoizedState.isDehydrated)
                try {
                    Ks(t.containerInfo)
                } catch (oe) {
                    Be(e, e.return, oe)
                }
            break;
        case 4:
            Yt(t, e),
            ln(e);
            break;
        case 13:
            Yt(t, e),
            ln(e),
            u = e.child,
            u.flags & 8192 && (f = u.memoizedState !== null,
            u.stateNode.isHidden = f,
            !f || u.alternate !== null && u.alternate.memoizedState !== null || (bu = qe())),
            a & 4 && Fh(e);
            break;
        case 22:
            if (V = o !== null && o.memoizedState !== null,
            e.mode & 1 ? (ht = (A = ht) || V,
            Yt(t, e),
            ht = A) : Yt(t, e),
            ln(e),
            a & 8192) {
                if (A = e.memoizedState !== null,
                (e.stateNode.isHidden = A) && !V && (e.mode & 1) !== 0)
                    for (ee = e,
                    V = e.child; V !== null; ) {
                        for (q = ee = V; ee !== null; ) {
                            switch ($ = ee,
                            J = $.child,
                            $.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                yo(4, $, $.return);
                                break;
                            case 1:
                                ds($, $.return);
                                var ne = $.stateNode;
                                if (typeof ne.componentWillUnmount == "function") {
                                    a = $,
                                    o = $.return;
                                    try {
                                        t = a,
                                        ne.props = t.memoizedProps,
                                        ne.state = t.memoizedState,
                                        ne.componentWillUnmount()
                                    } catch (oe) {
                                        Be(a, o, oe)
                                    }
                                }
                                break;
                            case 5:
                                ds($, $.return);
                                break;
                            case 22:
                                if ($.memoizedState !== null) {
                                    Bh(q);
                                    continue
                                }
                            }
                            J !== null ? (J.return = $,
                            ee = J) : Bh(q)
                        }
                        V = V.sibling
                    }
                e: for (V = null,
                q = e; ; ) {
                    if (q.tag === 5) {
                        if (V === null) {
                            V = q;
                            try {
                                u = q.stateNode,
                                A ? (f = u.style,
                                typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (b = q.stateNode,
                                E = q.memoizedProps.style,
                                g = E != null && E.hasOwnProperty("display") ? E.display : null,
                                b.style.display = vd("display", g))
                            } catch (oe) {
                                Be(e, e.return, oe)
                            }
                        }
                    } else if (q.tag === 6) {
                        if (V === null)
                            try {
                                q.stateNode.nodeValue = A ? "" : q.memoizedProps
                            } catch (oe) {
                                Be(e, e.return, oe)
                            }
                    } else if ((q.tag !== 22 && q.tag !== 23 || q.memoizedState === null || q === e) && q.child !== null) {
                        q.child.return = q,
                        q = q.child;
                        continue
                    }
                    if (q === e)
                        break e;
                    for (; q.sibling === null; ) {
                        if (q.return === null || q.return === e)
                            break e;
                        V === q && (V = null),
                        q = q.return
                    }
                    V === q && (V = null),
                    q.sibling.return = q.return,
                    q = q.sibling
                }
            }
            break;
        case 19:
            Yt(t, e),
            ln(e),
            a & 4 && Fh(e);
            break;
        case 21:
            break;
        default:
            Yt(t, e),
            ln(e)
        }
    }
    function ln(e) {
        var t = e.flags;
        if (t & 2) {
            try {
                e: {
                    for (var o = e.return; o !== null; ) {
                        if (Lh(o)) {
                            var a = o;
                            break e
                        }
                        o = o.return
                    }
                    throw Error(s(160))
                }
                switch (a.tag) {
                case 5:
                    var u = a.stateNode;
                    a.flags & 32 && (Fs(u, ""),
                    a.flags &= -33);
                    var f = Ih(e);
                    vu(e, f, u);
                    break;
                case 3:
                case 4:
                    var g = a.stateNode.containerInfo
                      , b = Ih(e);
                    yu(e, b, g);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (E) {
                Be(e, e.return, E)
            }
            e.flags &= -3
        }
        t & 4096 && (e.flags &= -4097)
    }
    function y0(e, t, o) {
        ee = e,
        Uh(e)
    }
    function Uh(e, t, o) {
        for (var a = (e.mode & 1) !== 0; ee !== null; ) {
            var u = ee
              , f = u.child;
            if (u.tag === 22 && a) {
                var g = u.memoizedState !== null || Ui;
                if (!g) {
                    var b = u.alternate
                      , E = b !== null && b.memoizedState !== null || ht;
                    b = Ui;
                    var A = ht;
                    if (Ui = g,
                    (ht = E) && !A)
                        for (ee = u; ee !== null; )
                            g = ee,
                            E = g.child,
                            g.tag === 22 && g.memoizedState !== null ? $h(u) : E !== null ? (E.return = g,
                            ee = E) : $h(u);
                    for (; f !== null; )
                        ee = f,
                        Uh(f),
                        f = f.sibling;
                    ee = u,
                    Ui = b,
                    ht = A
                }
                zh(e)
            } else
                (u.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = u,
                ee = f) : zh(e)
        }
    }
    function zh(e) {
        for (; ee !== null; ) {
            var t = ee;
            if ((t.flags & 8772) !== 0) {
                var o = t.alternate;
                try {
                    if ((t.flags & 8772) !== 0)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ht || zi(5, t);
                            break;
                        case 1:
                            var a = t.stateNode;
                            if (t.flags & 4 && !ht)
                                if (o === null)
                                    a.componentDidMount();
                                else {
                                    var u = t.elementType === t.type ? o.memoizedProps : Kt(t.type, o.memoizedProps);
                                    a.componentDidUpdate(u, o.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                                }
                            var f = t.updateQueue;
                            f !== null && Bf(t, f, a);
                            break;
                        case 3:
                            var g = t.updateQueue;
                            if (g !== null) {
                                if (o = null,
                                t.child !== null)
                                    switch (t.child.tag) {
                                    case 5:
                                        o = t.child.stateNode;
                                        break;
                                    case 1:
                                        o = t.child.stateNode
                                    }
                                Bf(t, g, o)
                            }
                            break;
                        case 5:
                            var b = t.stateNode;
                            if (o === null && t.flags & 4) {
                                o = b;
                                var E = t.memoizedProps;
                                switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    E.autoFocus && o.focus();
                                    break;
                                case "img":
                                    E.src && (o.src = E.src)
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var A = t.alternate;
                                if (A !== null) {
                                    var V = A.memoizedState;
                                    if (V !== null) {
                                        var q = V.dehydrated;
                                        q !== null && Ks(q)
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(s(163))
                        }
                    ht || t.flags & 512 && gu(t)
                } catch ($) {
                    Be(t, t.return, $)
                }
            }
            if (t === e) {
                ee = null;
                break
            }
            if (o = t.sibling,
            o !== null) {
                o.return = t.return,
                ee = o;
                break
            }
            ee = t.return
        }
    }
    function Bh(e) {
        for (; ee !== null; ) {
            var t = ee;
            if (t === e) {
                ee = null;
                break
            }
            var o = t.sibling;
            if (o !== null) {
                o.return = t.return,
                ee = o;
                break
            }
            ee = t.return
        }
    }
    function $h(e) {
        for (; ee !== null; ) {
            var t = ee;
            try {
                switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var o = t.return;
                    try {
                        zi(4, t)
                    } catch (E) {
                        Be(t, o, E)
                    }
                    break;
                case 1:
                    var a = t.stateNode;
                    if (typeof a.componentDidMount == "function") {
                        var u = t.return;
                        try {
                            a.componentDidMount()
                        } catch (E) {
                            Be(t, u, E)
                        }
                    }
                    var f = t.return;
                    try {
                        gu(t)
                    } catch (E) {
                        Be(t, f, E)
                    }
                    break;
                case 5:
                    var g = t.return;
                    try {
                        gu(t)
                    } catch (E) {
                        Be(t, g, E)
                    }
                }
            } catch (E) {
                Be(t, t.return, E)
            }
            if (t === e) {
                ee = null;
                break
            }
            var b = t.sibling;
            if (b !== null) {
                b.return = t.return,
                ee = b;
                break
            }
            ee = t.return
        }
    }
    var v0 = Math.ceil
      , Bi = D.ReactCurrentDispatcher
      , xu = D.ReactCurrentOwner
      , Ut = D.ReactCurrentBatchConfig
      , Re = 0
      , nt = null
      , Qe = null
      , at = 0
      , At = 0
      , fs = Fn(0)
      , Xe = 0
      , vo = null
      , xr = 0
      , $i = 0
      , wu = 0
      , xo = null
      , kt = null
      , bu = 0
      , hs = 1 / 0
      , Sn = null
      , Vi = !1
      , Su = null
      , Vn = null
      , qi = !1
      , qn = null
      , Hi = 0
      , wo = 0
      , ku = null
      , Wi = -1
      , Qi = 0;
    function yt() {
        return (Re & 6) !== 0 ? qe() : Wi !== -1 ? Wi : Wi = qe()
    }
    function Hn(e) {
        return (e.mode & 1) === 0 ? 1 : (Re & 2) !== 0 && at !== 0 ? at & -at : t0.transition !== null ? (Qi === 0 && (Qi = Ld()),
        Qi) : (e = Le,
        e !== 0 || (e = window.event,
        e = e === void 0 ? 16 : Vd(e.type)),
        e)
    }
    function Jt(e, t, o, a) {
        if (50 < wo)
            throw wo = 0,
            ku = null,
            Error(s(185));
        Vs(e, o, a),
        ((Re & 2) === 0 || e !== nt) && (e === nt && ((Re & 2) === 0 && ($i |= o),
        Xe === 4 && Wn(e, at)),
        Et(e, a),
        o === 1 && Re === 0 && (t.mode & 1) === 0 && (hs = qe() + 500,
        bi && Un()))
    }
    function Et(e, t) {
        var o = e.callbackNode;
        tv(e, t);
        var a = ni(e, e === nt ? at : 0);
        if (a === 0)
            o !== null && Pd(o),
            e.callbackNode = null,
            e.callbackPriority = 0;
        else if (t = a & -a,
        e.callbackPriority !== t) {
            if (o != null && Pd(o),
            t === 1)
                e.tag === 0 ? e0(qh.bind(null, e)) : Rf(qh.bind(null, e)),
                Yv(function() {
                    (Re & 6) === 0 && Un()
                }),
                o = null;
            else {
                switch (Id(a)) {
                case 1:
                    o = nl;
                    break;
                case 4:
                    o = Od;
                    break;
                case 16:
                    o = Xo;
                    break;
                case 536870912:
                    o = Ad;
                    break;
                default:
                    o = Xo
                }
                o = Xh(o, Vh.bind(null, e))
            }
            e.callbackPriority = t,
            e.callbackNode = o
        }
    }
    function Vh(e, t) {
        if (Wi = -1,
        Qi = 0,
        (Re & 6) !== 0)
            throw Error(s(327));
        var o = e.callbackNode;
        if (ps() && e.callbackNode !== o)
            return null;
        var a = ni(e, e === nt ? at : 0);
        if (a === 0)
            return null;
        if ((a & 30) !== 0 || (a & e.expiredLanes) !== 0 || t)
            t = Ki(e, a);
        else {
            t = a;
            var u = Re;
            Re |= 2;
            var f = Wh();
            (nt !== e || at !== t) && (Sn = null,
            hs = qe() + 500,
            br(e, t));
            do
                try {
                    b0();
                    break
                } catch (b) {
                    Hh(e, b)
                }
            while (!0);
            Bl(),
            Bi.current = f,
            Re = u,
            Qe !== null ? t = 0 : (nt = null,
            at = 0,
            t = Xe)
        }
        if (t !== 0) {
            if (t === 2 && (u = rl(e),
            u !== 0 && (a = u,
            t = Eu(e, u))),
            t === 1)
                throw o = vo,
                br(e, 0),
                Wn(e, a),
                Et(e, qe()),
                o;
            if (t === 6)
                Wn(e, a);
            else {
                if (u = e.current.alternate,
                (a & 30) === 0 && !x0(u) && (t = Ki(e, a),
                t === 2 && (f = rl(e),
                f !== 0 && (a = f,
                t = Eu(e, f))),
                t === 1))
                    throw o = vo,
                    br(e, 0),
                    Wn(e, a),
                    Et(e, qe()),
                    o;
                switch (e.finishedWork = u,
                e.finishedLanes = a,
                t) {
                case 0:
                case 1:
                    throw Error(s(345));
                case 2:
                    Sr(e, kt, Sn);
                    break;
                case 3:
                    if (Wn(e, a),
                    (a & 130023424) === a && (t = bu + 500 - qe(),
                    10 < t)) {
                        if (ni(e, 0) !== 0)
                            break;
                        if (u = e.suspendedLanes,
                        (u & a) !== a) {
                            yt(),
                            e.pingedLanes |= e.suspendedLanes & u;
                            break
                        }
                        e.timeoutHandle = Tl(Sr.bind(null, e, kt, Sn), t);
                        break
                    }
                    Sr(e, kt, Sn);
                    break;
                case 4:
                    if (Wn(e, a),
                    (a & 4194240) === a)
                        break;
                    for (t = e.eventTimes,
                    u = -1; 0 < a; ) {
                        var g = 31 - Ht(a);
                        f = 1 << g,
                        g = t[g],
                        g > u && (u = g),
                        a &= ~f
                    }
                    if (a = u,
                    a = qe() - a,
                    a = (120 > a ? 120 : 480 > a ? 480 : 1080 > a ? 1080 : 1920 > a ? 1920 : 3e3 > a ? 3e3 : 4320 > a ? 4320 : 1960 * v0(a / 1960)) - a,
                    10 < a) {
                        e.timeoutHandle = Tl(Sr.bind(null, e, kt, Sn), a);
                        break
                    }
                    Sr(e, kt, Sn);
                    break;
                case 5:
                    Sr(e, kt, Sn);
                    break;
                default:
                    throw Error(s(329))
                }
            }
        }
        return Et(e, qe()),
        e.callbackNode === o ? Vh.bind(null, e) : null
    }
    function Eu(e, t) {
        var o = xo;
        return e.current.memoizedState.isDehydrated && (br(e, t).flags |= 256),
        e = Ki(e, t),
        e !== 2 && (t = kt,
        kt = o,
        t !== null && Cu(t)),
        e
    }
    function Cu(e) {
        kt === null ? kt = e : kt.push.apply(kt, e)
    }
    function x0(e) {
        for (var t = e; ; ) {
            if (t.flags & 16384) {
                var o = t.updateQueue;
                if (o !== null && (o = o.stores,
                o !== null))
                    for (var a = 0; a < o.length; a++) {
                        var u = o[a]
                          , f = u.getSnapshot;
                        u = u.value;
                        try {
                            if (!Wt(f(), u))
                                return !1
                        } catch {
                            return !1
                        }
                    }
            }
            if (o = t.child,
            t.subtreeFlags & 16384 && o !== null)
                o.return = t,
                t = o;
            else {
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function Wn(e, t) {
        for (t &= ~wu,
        t &= ~$i,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes; 0 < t; ) {
            var o = 31 - Ht(t)
              , a = 1 << o;
            e[o] = -1,
            t &= ~a
        }
    }
    function qh(e) {
        if ((Re & 6) !== 0)
            throw Error(s(327));
        ps();
        var t = ni(e, 0);
        if ((t & 1) === 0)
            return Et(e, qe()),
            null;
        var o = Ki(e, t);
        if (e.tag !== 0 && o === 2) {
            var a = rl(e);
            a !== 0 && (t = a,
            o = Eu(e, a))
        }
        if (o === 1)
            throw o = vo,
            br(e, 0),
            Wn(e, t),
            Et(e, qe()),
            o;
        if (o === 6)
            throw Error(s(345));
        return e.finishedWork = e.current.alternate,
        e.finishedLanes = t,
        Sr(e, kt, Sn),
        Et(e, qe()),
        null
    }
    function Nu(e, t) {
        var o = Re;
        Re |= 1;
        try {
            return e(t)
        } finally {
            Re = o,
            Re === 0 && (hs = qe() + 500,
            bi && Un())
        }
    }
    function wr(e) {
        qn !== null && qn.tag === 0 && (Re & 6) === 0 && ps();
        var t = Re;
        Re |= 1;
        var o = Ut.transition
          , a = Le;
        try {
            if (Ut.transition = null,
            Le = 1,
            e)
                return e()
        } finally {
            Le = a,
            Ut.transition = o,
            Re = t,
            (Re & 6) === 0 && Un()
        }
    }
    function _u() {
        At = fs.current,
        Fe(fs)
    }
    function br(e, t) {
        e.finishedWork = null,
        e.finishedLanes = 0;
        var o = e.timeoutHandle;
        if (o !== -1 && (e.timeoutHandle = -1,
        Gv(o)),
        Qe !== null)
            for (o = Qe.return; o !== null; ) {
                var a = o;
                switch (Ml(a),
                a.tag) {
                case 1:
                    a = a.type.childContextTypes,
                    a != null && xi();
                    break;
                case 3:
                    us(),
                    Fe(wt),
                    Fe(ct),
                    Gl();
                    break;
                case 5:
                    Ql(a);
                    break;
                case 4:
                    us();
                    break;
                case 13:
                    Fe(Ue);
                    break;
                case 19:
                    Fe(Ue);
                    break;
                case 10:
                    $l(a.type._context);
                    break;
                case 22:
                case 23:
                    _u()
                }
                o = o.return
            }
        if (nt = e,
        Qe = e = Qn(e.current, null),
        at = At = t,
        Xe = 0,
        vo = null,
        wu = $i = xr = 0,
        kt = xo = null,
        gr !== null) {
            for (t = 0; t < gr.length; t++)
                if (o = gr[t],
                a = o.interleaved,
                a !== null) {
                    o.interleaved = null;
                    var u = a.next
                      , f = o.pending;
                    if (f !== null) {
                        var g = f.next;
                        f.next = u,
                        a.next = g
                    }
                    o.pending = a
                }
            gr = null
        }
        return e
    }
    function Hh(e, t) {
        do {
            var o = Qe;
            try {
                if (Bl(),
                Pi.current = Ii,
                Oi) {
                    for (var a = ze.memoizedState; a !== null; ) {
                        var u = a.queue;
                        u !== null && (u.pending = null),
                        a = a.next
                    }
                    Oi = !1
                }
                if (vr = 0,
                tt = Je = ze = null,
                fo = !1,
                ho = 0,
                xu.current = null,
                o === null || o.return === null) {
                    Xe = 1,
                    vo = t,
                    Qe = null;
                    break
                }
                e: {
                    var f = e
                      , g = o.return
                      , b = o
                      , E = t;
                    if (t = at,
                    b.flags |= 32768,
                    E !== null && typeof E == "object" && typeof E.then == "function") {
                        var A = E
                          , V = b
                          , q = V.tag;
                        if ((V.mode & 1) === 0 && (q === 0 || q === 11 || q === 15)) {
                            var $ = V.alternate;
                            $ ? (V.updateQueue = $.updateQueue,
                            V.memoizedState = $.memoizedState,
                            V.lanes = $.lanes) : (V.updateQueue = null,
                            V.memoizedState = null)
                        }
                        var J = gh(g);
                        if (J !== null) {
                            J.flags &= -257,
                            yh(J, g, b, f, t),
                            J.mode & 1 && mh(f, A, t),
                            t = J,
                            E = A;
                            var ne = t.updateQueue;
                            if (ne === null) {
                                var oe = new Set;
                                oe.add(E),
                                t.updateQueue = oe
                            } else
                                ne.add(E);
                            break e
                        } else {
                            if ((t & 1) === 0) {
                                mh(f, A, t),
                                ju();
                                break e
                            }
                            E = Error(s(426))
                        }
                    } else if (De && b.mode & 1) {
                        var He = gh(g);
                        if (He !== null) {
                            (He.flags & 65536) === 0 && (He.flags |= 256),
                            yh(He, g, b, f, t),
                            Ul(cs(E, b));
                            break e
                        }
                    }
                    f = E = cs(E, b),
                    Xe !== 4 && (Xe = 2),
                    xo === null ? xo = [f] : xo.push(f),
                    f = g;
                    do {
                        switch (f.tag) {
                        case 3:
                            f.flags |= 65536,
                            t &= -t,
                            f.lanes |= t;
                            var P = hh(f, E, t);
                            zf(f, P);
                            break e;
                        case 1:
                            b = E;
                            var _ = f.type
                              , O = f.stateNode;
                            if ((f.flags & 128) === 0 && (typeof _.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (Vn === null || !Vn.has(O)))) {
                                f.flags |= 65536,
                                t &= -t,
                                f.lanes |= t;
                                var W = ph(f, b, t);
                                zf(f, W);
                                break e
                            }
                        }
                        f = f.return
                    } while (f !== null)
                }
                Kh(o)
            } catch (ae) {
                t = ae,
                Qe === o && o !== null && (Qe = o = o.return);
                continue
            }
            break
        } while (!0)
    }
    function Wh() {
        var e = Bi.current;
        return Bi.current = Ii,
        e === null ? Ii : e
    }
    function ju() {
        (Xe === 0 || Xe === 3 || Xe === 2) && (Xe = 4),
        nt === null || (xr & 268435455) === 0 && ($i & 268435455) === 0 || Wn(nt, at)
    }
    function Ki(e, t) {
        var o = Re;
        Re |= 2;
        var a = Wh();
        (nt !== e || at !== t) && (Sn = null,
        br(e, t));
        do
            try {
                w0();
                break
            } catch (u) {
                Hh(e, u)
            }
        while (!0);
        if (Bl(),
        Re = o,
        Bi.current = a,
        Qe !== null)
            throw Error(s(261));
        return nt = null,
        at = 0,
        Xe
    }
    function w0() {
        for (; Qe !== null; )
            Qh(Qe)
    }
    function b0() {
        for (; Qe !== null && !Wy(); )
            Qh(Qe)
    }
    function Qh(e) {
        var t = Jh(e.alternate, e, At);
        e.memoizedProps = e.pendingProps,
        t === null ? Kh(e) : Qe = t,
        xu.current = null
    }
    function Kh(e) {
        var t = e;
        do {
            var o = t.alternate;
            if (e = t.return,
            (t.flags & 32768) === 0) {
                if (o = h0(o, t, At),
                o !== null) {
                    Qe = o;
                    return
                }
            } else {
                if (o = p0(o, t),
                o !== null) {
                    o.flags &= 32767,
                    Qe = o;
                    return
                }
                if (e !== null)
                    e.flags |= 32768,
                    e.subtreeFlags = 0,
                    e.deletions = null;
                else {
                    Xe = 6,
                    Qe = null;
                    return
                }
            }
            if (t = t.sibling,
            t !== null) {
                Qe = t;
                return
            }
            Qe = t = e
        } while (t !== null);
        Xe === 0 && (Xe = 5)
    }
    function Sr(e, t, o) {
        var a = Le
          , u = Ut.transition;
        try {
            Ut.transition = null,
            Le = 1,
            S0(e, t, o, a)
        } finally {
            Ut.transition = u,
            Le = a
        }
        return null
    }
    function S0(e, t, o, a) {
        do
            ps();
        while (qn !== null);
        if ((Re & 6) !== 0)
            throw Error(s(327));
        o = e.finishedWork;
        var u = e.finishedLanes;
        if (o === null)
            return null;
        if (e.finishedWork = null,
        e.finishedLanes = 0,
        o === e.current)
            throw Error(s(177));
        e.callbackNode = null,
        e.callbackPriority = 0;
        var f = o.lanes | o.childLanes;
        if (nv(e, f),
        e === nt && (Qe = nt = null,
        at = 0),
        (o.subtreeFlags & 2064) === 0 && (o.flags & 2064) === 0 || qi || (qi = !0,
        Xh(Xo, function() {
            return ps(),
            null
        })),
        f = (o.flags & 15990) !== 0,
        (o.subtreeFlags & 15990) !== 0 || f) {
            f = Ut.transition,
            Ut.transition = null;
            var g = Le;
            Le = 1;
            var b = Re;
            Re |= 4,
            xu.current = null,
            g0(e, o),
            Dh(o, e),
            $v(jl),
            oi = !!_l,
            jl = _l = null,
            e.current = o,
            y0(o),
            Qy(),
            Re = b,
            Le = g,
            Ut.transition = f
        } else
            e.current = o;
        if (qi && (qi = !1,
        qn = e,
        Hi = u),
        f = e.pendingLanes,
        f === 0 && (Vn = null),
        Yy(o.stateNode),
        Et(e, qe()),
        t !== null)
            for (a = e.onRecoverableError,
            o = 0; o < t.length; o++)
                u = t[o],
                a(u.value, {
                    componentStack: u.stack,
                    digest: u.digest
                });
        if (Vi)
            throw Vi = !1,
            e = Su,
            Su = null,
            e;
        return (Hi & 1) !== 0 && e.tag !== 0 && ps(),
        f = e.pendingLanes,
        (f & 1) !== 0 ? e === ku ? wo++ : (wo = 0,
        ku = e) : wo = 0,
        Un(),
        null
    }
    function ps() {
        if (qn !== null) {
            var e = Id(Hi)
              , t = Ut.transition
              , o = Le;
            try {
                if (Ut.transition = null,
                Le = 16 > e ? 16 : e,
                qn === null)
                    var a = !1;
                else {
                    if (e = qn,
                    qn = null,
                    Hi = 0,
                    (Re & 6) !== 0)
                        throw Error(s(331));
                    var u = Re;
                    for (Re |= 4,
                    ee = e.current; ee !== null; ) {
                        var f = ee
                          , g = f.child;
                        if ((ee.flags & 16) !== 0) {
                            var b = f.deletions;
                            if (b !== null) {
                                for (var E = 0; E < b.length; E++) {
                                    var A = b[E];
                                    for (ee = A; ee !== null; ) {
                                        var V = ee;
                                        switch (V.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            yo(8, V, f)
                                        }
                                        var q = V.child;
                                        if (q !== null)
                                            q.return = V,
                                            ee = q;
                                        else
                                            for (; ee !== null; ) {
                                                V = ee;
                                                var $ = V.sibling
                                                  , J = V.return;
                                                if (Ah(V),
                                                V === A) {
                                                    ee = null;
                                                    break
                                                }
                                                if ($ !== null) {
                                                    $.return = J,
                                                    ee = $;
                                                    break
                                                }
                                                ee = J
                                            }
                                    }
                                }
                                var ne = f.alternate;
                                if (ne !== null) {
                                    var oe = ne.child;
                                    if (oe !== null) {
                                        ne.child = null;
                                        do {
                                            var He = oe.sibling;
                                            oe.sibling = null,
                                            oe = He
                                        } while (oe !== null)
                                    }
                                }
                                ee = f
                            }
                        }
                        if ((f.subtreeFlags & 2064) !== 0 && g !== null)
                            g.return = f,
                            ee = g;
                        else
                            e: for (; ee !== null; ) {
                                if (f = ee,
                                (f.flags & 2048) !== 0)
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yo(9, f, f.return)
                                    }
                                var P = f.sibling;
                                if (P !== null) {
                                    P.return = f.return,
                                    ee = P;
                                    break e
                                }
                                ee = f.return
                            }
                    }
                    var _ = e.current;
                    for (ee = _; ee !== null; ) {
                        g = ee;
                        var O = g.child;
                        if ((g.subtreeFlags & 2064) !== 0 && O !== null)
                            O.return = g,
                            ee = O;
                        else
                            e: for (g = _; ee !== null; ) {
                                if (b = ee,
                                (b.flags & 2048) !== 0)
                                    try {
                                        switch (b.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            zi(9, b)
                                        }
                                    } catch (ae) {
                                        Be(b, b.return, ae)
                                    }
                                if (b === g) {
                                    ee = null;
                                    break e
                                }
                                var W = b.sibling;
                                if (W !== null) {
                                    W.return = b.return,
                                    ee = W;
                                    break e
                                }
                                ee = b.return
                            }
                    }
                    if (Re = u,
                    Un(),
                    rn && typeof rn.onPostCommitFiberRoot == "function")
                        try {
                            rn.onPostCommitFiberRoot(Zo, e)
                        } catch {}
                    a = !0
                }
                return a
            } finally {
                Le = o,
                Ut.transition = t
            }
        }
        return !1
    }
    function Gh(e, t, o) {
        t = cs(o, t),
        t = hh(e, t, 1),
        e = Bn(e, t, 1),
        t = yt(),
        e !== null && (Vs(e, 1, t),
        Et(e, t))
    }
    function Be(e, t, o) {
        if (e.tag === 3)
            Gh(e, e, o);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    Gh(t, e, o);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Vn === null || !Vn.has(a))) {
                        e = cs(o, e),
                        e = ph(t, e, 1),
                        t = Bn(t, e, 1),
                        e = yt(),
                        t !== null && (Vs(t, 1, e),
                        Et(t, e));
                        break
                    }
                }
                t = t.return
            }
    }
    function k0(e, t, o) {
        var a = e.pingCache;
        a !== null && a.delete(t),
        t = yt(),
        e.pingedLanes |= e.suspendedLanes & o,
        nt === e && (at & o) === o && (Xe === 4 || Xe === 3 && (at & 130023424) === at && 500 > qe() - bu ? br(e, 0) : wu |= o),
        Et(e, t)
    }
    function Yh(e, t) {
        t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = ti,
        ti <<= 1,
        (ti & 130023424) === 0 && (ti = 4194304)));
        var o = yt();
        e = xn(e, t),
        e !== null && (Vs(e, t, o),
        Et(e, o))
    }
    function E0(e) {
        var t = e.memoizedState
          , o = 0;
        t !== null && (o = t.retryLane),
        Yh(e, o)
    }
    function C0(e, t) {
        var o = 0;
        switch (e.tag) {
        case 13:
            var a = e.stateNode
              , u = e.memoizedState;
            u !== null && (o = u.retryLane);
            break;
        case 19:
            a = e.stateNode;
            break;
        default:
            throw Error(s(314))
        }
        a !== null && a.delete(t),
        Yh(e, o)
    }
    var Jh;
    Jh = function(e, t, o) {
        if (e !== null)
            if (e.memoizedProps !== t.pendingProps || wt.current)
                St = !0;
            else {
                if ((e.lanes & o) === 0 && (t.flags & 128) === 0)
                    return St = !1,
                    f0(e, t, o);
                St = (e.flags & 131072) !== 0
            }
        else
            St = !1,
            De && (t.flags & 1048576) !== 0 && Tf(t, ki, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 2:
            var a = t.type;
            Di(e, t),
            e = t.pendingProps;
            var u = ns(t, ct.current);
            ls(t, o),
            u = Xl(null, t, a, e, u, o);
            var f = Zl();
            return t.flags |= 1,
            typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1,
            t.memoizedState = null,
            t.updateQueue = null,
            bt(a) ? (f = !0,
            wi(t)) : f = !1,
            t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
            Hl(t),
            u.updater = Mi,
            t.stateNode = u,
            u._reactInternals = t,
            ou(t, a, e, o),
            t = uu(null, t, a, !0, f, o)) : (t.tag = 0,
            De && f && Il(t),
            gt(null, t, u, o),
            t = t.child),
            t;
        case 16:
            a = t.elementType;
            e: {
                switch (Di(e, t),
                e = t.pendingProps,
                u = a._init,
                a = u(a._payload),
                t.type = a,
                u = t.tag = _0(a),
                e = Kt(a, e),
                u) {
                case 0:
                    t = lu(null, t, a, e, o);
                    break e;
                case 1:
                    t = kh(null, t, a, e, o);
                    break e;
                case 11:
                    t = vh(null, t, a, e, o);
                    break e;
                case 14:
                    t = xh(null, t, a, Kt(a.type, e), o);
                    break e
                }
                throw Error(s(306, a, ""))
            }
            return t;
        case 0:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Kt(a, u),
            lu(e, t, a, u, o);
        case 1:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Kt(a, u),
            kh(e, t, a, u, o);
        case 3:
            e: {
                if (Eh(t),
                e === null)
                    throw Error(s(387));
                a = t.pendingProps,
                f = t.memoizedState,
                u = f.element,
                Uf(e, t),
                Ri(t, a, null, o);
                var g = t.memoizedState;
                if (a = g.element,
                f.isDehydrated)
                    if (f = {
                        element: a,
                        isDehydrated: !1,
                        cache: g.cache,
                        pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
                        transitions: g.transitions
                    },
                    t.updateQueue.baseState = f,
                    t.memoizedState = f,
                    t.flags & 256) {
                        u = cs(Error(s(423)), t),
                        t = Ch(e, t, a, o, u);
                        break e
                    } else if (a !== u) {
                        u = cs(Error(s(424)), t),
                        t = Ch(e, t, a, o, u);
                        break e
                    } else
                        for (Ot = Mn(t.stateNode.containerInfo.firstChild),
                        Pt = t,
                        De = !0,
                        Qt = null,
                        o = Ff(t, null, a, o),
                        t.child = o; o; )
                            o.flags = o.flags & -3 | 4096,
                            o = o.sibling;
                else {
                    if (os(),
                    a === u) {
                        t = bn(e, t, o);
                        break e
                    }
                    gt(e, t, a, o)
                }
                t = t.child
            }
            return t;
        case 5:
            return $f(t),
            e === null && Dl(t),
            a = t.type,
            u = t.pendingProps,
            f = e !== null ? e.memoizedProps : null,
            g = u.children,
            Rl(a, u) ? g = null : f !== null && Rl(a, f) && (t.flags |= 32),
            Sh(e, t),
            gt(e, t, g, o),
            t.child;
        case 6:
            return e === null && Dl(t),
            null;
        case 13:
            return Nh(e, t, o);
        case 4:
            return Wl(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            e === null ? t.child = is(t, null, a, o) : gt(e, t, a, o),
            t.child;
        case 11:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Kt(a, u),
            vh(e, t, a, u, o);
        case 7:
            return gt(e, t, t.pendingProps, o),
            t.child;
        case 8:
            return gt(e, t, t.pendingProps.children, o),
            t.child;
        case 12:
            return gt(e, t, t.pendingProps.children, o),
            t.child;
        case 10:
            e: {
                if (a = t.type._context,
                u = t.pendingProps,
                f = t.memoizedProps,
                g = u.value,
                Ie(Ni, a._currentValue),
                a._currentValue = g,
                f !== null)
                    if (Wt(f.value, g)) {
                        if (f.children === u.children && !wt.current) {
                            t = bn(e, t, o);
                            break e
                        }
                    } else
                        for (f = t.child,
                        f !== null && (f.return = t); f !== null; ) {
                            var b = f.dependencies;
                            if (b !== null) {
                                g = f.child;
                                for (var E = b.firstContext; E !== null; ) {
                                    if (E.context === a) {
                                        if (f.tag === 1) {
                                            E = wn(-1, o & -o),
                                            E.tag = 2;
                                            var A = f.updateQueue;
                                            if (A !== null) {
                                                A = A.shared;
                                                var V = A.pending;
                                                V === null ? E.next = E : (E.next = V.next,
                                                V.next = E),
                                                A.pending = E
                                            }
                                        }
                                        f.lanes |= o,
                                        E = f.alternate,
                                        E !== null && (E.lanes |= o),
                                        Vl(f.return, o, t),
                                        b.lanes |= o;
                                        break
                                    }
                                    E = E.next
                                }
                            } else if (f.tag === 10)
                                g = f.type === t.type ? null : f.child;
                            else if (f.tag === 18) {
                                if (g = f.return,
                                g === null)
                                    throw Error(s(341));
                                g.lanes |= o,
                                b = g.alternate,
                                b !== null && (b.lanes |= o),
                                Vl(g, o, t),
                                g = f.sibling
                            } else
                                g = f.child;
                            if (g !== null)
                                g.return = f;
                            else
                                for (g = f; g !== null; ) {
                                    if (g === t) {
                                        g = null;
                                        break
                                    }
                                    if (f = g.sibling,
                                    f !== null) {
                                        f.return = g.return,
                                        g = f;
                                        break
                                    }
                                    g = g.return
                                }
                            f = g
                        }
                gt(e, t, u.children, o),
                t = t.child
            }
            return t;
        case 9:
            return u = t.type,
            a = t.pendingProps.children,
            ls(t, o),
            u = Ft(u),
            a = a(u),
            t.flags |= 1,
            gt(e, t, a, o),
            t.child;
        case 14:
            return a = t.type,
            u = Kt(a, t.pendingProps),
            u = Kt(a.type, u),
            xh(e, t, a, u, o);
        case 15:
            return wh(e, t, t.type, t.pendingProps, o);
        case 17:
            return a = t.type,
            u = t.pendingProps,
            u = t.elementType === a ? u : Kt(a, u),
            Di(e, t),
            t.tag = 1,
            bt(a) ? (e = !0,
            wi(t)) : e = !1,
            ls(t, o),
            dh(t, a, u),
            ou(t, a, u, o),
            uu(null, t, a, !0, e, o);
        case 19:
            return jh(e, t, o);
        case 22:
            return bh(e, t, o)
        }
        throw Error(s(156, t.tag))
    }
    ;
    function Xh(e, t) {
        return Td(e, t)
    }
    function N0(e, t, o, a) {
        this.tag = e,
        this.key = o,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function zt(e, t, o, a) {
        return new N0(e,t,o,a)
    }
    function Ru(e) {
        return e = e.prototype,
        !(!e || !e.isReactComponent)
    }
    function _0(e) {
        if (typeof e == "function")
            return Ru(e) ? 1 : 0;
        if (e != null) {
            if (e = e.$$typeof,
            e === B)
                return 11;
            if (e === fe)
                return 14
        }
        return 2
    }
    function Qn(e, t) {
        var o = e.alternate;
        return o === null ? (o = zt(e.tag, t, e.key, e.mode),
        o.elementType = e.elementType,
        o.type = e.type,
        o.stateNode = e.stateNode,
        o.alternate = e,
        e.alternate = o) : (o.pendingProps = t,
        o.type = e.type,
        o.flags = 0,
        o.subtreeFlags = 0,
        o.deletions = null),
        o.flags = e.flags & 14680064,
        o.childLanes = e.childLanes,
        o.lanes = e.lanes,
        o.child = e.child,
        o.memoizedProps = e.memoizedProps,
        o.memoizedState = e.memoizedState,
        o.updateQueue = e.updateQueue,
        t = e.dependencies,
        o.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        o.sibling = e.sibling,
        o.index = e.index,
        o.ref = e.ref,
        o
    }
    function Gi(e, t, o, a, u, f) {
        var g = 2;
        if (a = e,
        typeof e == "function")
            Ru(e) && (g = 1);
        else if (typeof e == "string")
            g = 5;
        else
            e: switch (e) {
            case ge:
                return kr(o.children, u, f, t);
            case I:
                g = 8,
                u |= 8;
                break;
            case Q:
                return e = zt(12, o, t, u | 2),
                e.elementType = Q,
                e.lanes = f,
                e;
            case te:
                return e = zt(13, o, t, u),
                e.elementType = te,
                e.lanes = f,
                e;
            case Ee:
                return e = zt(19, o, t, u),
                e.elementType = Ee,
                e.lanes = f,
                e;
            case we:
                return Yi(o, u, f, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                    case K:
                        g = 10;
                        break e;
                    case Z:
                        g = 9;
                        break e;
                    case B:
                        g = 11;
                        break e;
                    case fe:
                        g = 14;
                        break e;
                    case ie:
                        g = 16,
                        a = null;
                        break e
                    }
                throw Error(s(130, e == null ? e : typeof e, ""))
            }
        return t = zt(g, o, t, u),
        t.elementType = e,
        t.type = a,
        t.lanes = f,
        t
    }
    function kr(e, t, o, a) {
        return e = zt(7, e, a, t),
        e.lanes = o,
        e
    }
    function Yi(e, t, o, a) {
        return e = zt(22, e, a, t),
        e.elementType = we,
        e.lanes = o,
        e.stateNode = {
            isHidden: !1
        },
        e
    }
    function Tu(e, t, o) {
        return e = zt(6, e, null, t),
        e.lanes = o,
        e
    }
    function Pu(e, t, o) {
        return t = zt(4, e.children !== null ? e.children : [], e.key, t),
        t.lanes = o,
        t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        },
        t
    }
    function j0(e, t, o, a, u) {
        this.tag = t,
        this.containerInfo = e,
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.pendingContext = this.context = null,
        this.callbackPriority = 0,
        this.eventTimes = sl(0),
        this.expirationTimes = sl(-1),
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = sl(0),
        this.identifierPrefix = a,
        this.onRecoverableError = u,
        this.mutableSourceEagerHydrationData = null
    }
    function Ou(e, t, o, a, u, f, g, b, E) {
        return e = new j0(e,t,o,b,E),
        t === 1 ? (t = 1,
        f === !0 && (t |= 8)) : t = 0,
        f = zt(3, null, null, t),
        e.current = f,
        f.stateNode = e,
        f.memoizedState = {
            element: a,
            isDehydrated: o,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null
        },
        Hl(f),
        e
    }
    function R0(e, t, o) {
        var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: de,
            key: a == null ? null : "" + a,
            children: e,
            containerInfo: t,
            implementation: o
        }
    }
    function Zh(e) {
        if (!e)
            return Dn;
        e = e._reactInternals;
        e: {
            if (dr(e) !== e || e.tag !== 1)
                throw Error(s(170));
            var t = e;
            do {
                switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (bt(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
                }
                t = t.return
            } while (t !== null);
            throw Error(s(171))
        }
        if (e.tag === 1) {
            var o = e.type;
            if (bt(o))
                return _f(e, o, t)
        }
        return t
    }
    function ep(e, t, o, a, u, f, g, b, E) {
        return e = Ou(o, a, !0, e, u, f, g, b, E),
        e.context = Zh(null),
        o = e.current,
        a = yt(),
        u = Hn(o),
        f = wn(a, u),
        f.callback = t ?? null,
        Bn(o, f, u),
        e.current.lanes = u,
        Vs(e, u, a),
        Et(e, a),
        e
    }
    function Ji(e, t, o, a) {
        var u = t.current
          , f = yt()
          , g = Hn(u);
        return o = Zh(o),
        t.context === null ? t.context = o : t.pendingContext = o,
        t = wn(f, g),
        t.payload = {
            element: e
        },
        a = a === void 0 ? null : a,
        a !== null && (t.callback = a),
        e = Bn(u, t, g),
        e !== null && (Jt(e, u, g, f),
        ji(e, u, g)),
        g
    }
    function Xi(e) {
        if (e = e.current,
        !e.child)
            return null;
        switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
        }
    }
    function tp(e, t) {
        if (e = e.memoizedState,
        e !== null && e.dehydrated !== null) {
            var o = e.retryLane;
            e.retryLane = o !== 0 && o < t ? o : t
        }
    }
    function Au(e, t) {
        tp(e, t),
        (e = e.alternate) && tp(e, t)
    }
    function T0() {
        return null
    }
    var np = typeof reportError == "function" ? reportError : function(e) {
        console.error(e)
    }
    ;
    function Lu(e) {
        this._internalRoot = e
    }
    Zi.prototype.render = Lu.prototype.render = function(e) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(s(409));
        Ji(e, t, null, null)
    }
    ,
    Zi.prototype.unmount = Lu.prototype.unmount = function() {
        var e = this._internalRoot;
        if (e !== null) {
            this._internalRoot = null;
            var t = e.containerInfo;
            wr(function() {
                Ji(null, e, null, null)
            }),
            t[mn] = null
        }
    }
    ;
    function Zi(e) {
        this._internalRoot = e
    }
    Zi.prototype.unstable_scheduleHydration = function(e) {
        if (e) {
            var t = Dd();
            e = {
                blockedOn: null,
                target: e,
                priority: t
            };
            for (var o = 0; o < An.length && t !== 0 && t < An[o].priority; o++)
                ;
            An.splice(o, 0, e),
            o === 0 && Bd(e)
        }
    }
    ;
    function Iu(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
    }
    function ea(e) {
        return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    }
    function rp() {}
    function P0(e, t, o, a, u) {
        if (u) {
            if (typeof a == "function") {
                var f = a;
                a = function() {
                    var A = Xi(g);
                    f.call(A)
                }
            }
            var g = ep(t, a, e, 0, null, !1, !1, "", rp);
            return e._reactRootContainer = g,
            e[mn] = g.current,
            ro(e.nodeType === 8 ? e.parentNode : e),
            wr(),
            g
        }
        for (; u = e.lastChild; )
            e.removeChild(u);
        if (typeof a == "function") {
            var b = a;
            a = function() {
                var A = Xi(E);
                b.call(A)
            }
        }
        var E = Ou(e, 0, !1, null, null, !1, !1, "", rp);
        return e._reactRootContainer = E,
        e[mn] = E.current,
        ro(e.nodeType === 8 ? e.parentNode : e),
        wr(function() {
            Ji(t, E, o, a)
        }),
        E
    }
    function ta(e, t, o, a, u) {
        var f = o._reactRootContainer;
        if (f) {
            var g = f;
            if (typeof u == "function") {
                var b = u;
                u = function() {
                    var E = Xi(g);
                    b.call(E)
                }
            }
            Ji(t, g, e, u)
        } else
            g = P0(o, t, e, u, a);
        return Xi(g)
    }
    Md = function(e) {
        switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var o = $s(t.pendingLanes);
                o !== 0 && (ol(t, o | 1),
                Et(t, qe()),
                (Re & 6) === 0 && (hs = qe() + 500,
                Un()))
            }
            break;
        case 13:
            wr(function() {
                var a = xn(e, 1);
                if (a !== null) {
                    var u = yt();
                    Jt(a, e, 1, u)
                }
            }),
            Au(e, 1)
        }
    }
    ,
    il = function(e) {
        if (e.tag === 13) {
            var t = xn(e, 134217728);
            if (t !== null) {
                var o = yt();
                Jt(t, e, 134217728, o)
            }
            Au(e, 134217728)
        }
    }
    ,
    Fd = function(e) {
        if (e.tag === 13) {
            var t = Hn(e)
              , o = xn(e, t);
            if (o !== null) {
                var a = yt();
                Jt(o, e, t, a)
            }
            Au(e, t)
        }
    }
    ,
    Dd = function() {
        return Le
    }
    ,
    Ud = function(e, t) {
        var o = Le;
        try {
            return Le = e,
            t()
        } finally {
            Le = o
        }
    }
    ,
    Xa = function(e, t, o) {
        switch (t) {
        case "input":
            if (qa(e, o),
            t = o.name,
            o.type === "radio" && t != null) {
                for (o = e; o.parentNode; )
                    o = o.parentNode;
                for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
                t = 0; t < o.length; t++) {
                    var a = o[t];
                    if (a !== e && a.form === e.form) {
                        var u = vi(a);
                        if (!u)
                            throw Error(s(90));
                        cr(a),
                        qa(a, u)
                    }
                }
            }
            break;
        case "textarea":
            pd(e, o);
            break;
        case "select":
            t = o.value,
            t != null && qr(e, !!o.multiple, t, !1)
        }
    }
    ,
    kd = Nu,
    Ed = wr;
    var O0 = {
        usingClientEntryPoint: !1,
        Events: [io, es, vi, bd, Sd, Nu]
    }
      , bo = {
        findFiberByHostInstance: fr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    }
      , A0 = {
        bundleType: bo.bundleType,
        version: bo.version,
        rendererPackageName: bo.rendererPackageName,
        rendererConfig: bo.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: D.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = jd(e),
            e === null ? null : e.stateNode
        },
        findFiberByHostInstance: bo.findFiberByHostInstance || T0,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var na = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!na.isDisabled && na.supportsFiber)
            try {
                Zo = na.inject(A0),
                rn = na
            } catch {}
    }
    return Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O0,
    Ct.createPortal = function(e, t) {
        var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!Iu(t))
            throw Error(s(200));
        return R0(e, t, null, o)
    }
    ,
    Ct.createRoot = function(e, t) {
        if (!Iu(e))
            throw Error(s(299));
        var o = !1
          , a = ""
          , u = np;
        return t != null && (t.unstable_strictMode === !0 && (o = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (u = t.onRecoverableError)),
        t = Ou(e, 1, !1, null, null, o, !1, a, u),
        e[mn] = t.current,
        ro(e.nodeType === 8 ? e.parentNode : e),
        new Lu(t)
    }
    ,
    Ct.findDOMNode = function(e) {
        if (e == null)
            return null;
        if (e.nodeType === 1)
            return e;
        var t = e._reactInternals;
        if (t === void 0)
            throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","),
            Error(s(268, e)));
        return e = jd(t),
        e = e === null ? null : e.stateNode,
        e
    }
    ,
    Ct.flushSync = function(e) {
        return wr(e)
    }
    ,
    Ct.hydrate = function(e, t, o) {
        if (!ea(t))
            throw Error(s(200));
        return ta(null, e, t, !0, o)
    }
    ,
    Ct.hydrateRoot = function(e, t, o) {
        if (!Iu(e))
            throw Error(s(405));
        var a = o != null && o.hydratedSources || null
          , u = !1
          , f = ""
          , g = np;
        if (o != null && (o.unstable_strictMode === !0 && (u = !0),
        o.identifierPrefix !== void 0 && (f = o.identifierPrefix),
        o.onRecoverableError !== void 0 && (g = o.onRecoverableError)),
        t = ep(t, null, e, 1, o ?? null, u, !1, f, g),
        e[mn] = t.current,
        ro(e),
        a)
            for (e = 0; e < a.length; e++)
                o = a[e],
                u = o._getVersion,
                u = u(o._source),
                t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [o, u] : t.mutableSourceEagerHydrationData.push(o, u);
        return new Zi(t)
    }
    ,
    Ct.render = function(e, t, o) {
        if (!ea(t))
            throw Error(s(200));
        return ta(null, e, t, !1, o)
    }
    ,
    Ct.unmountComponentAtNode = function(e) {
        if (!ea(e))
            throw Error(s(40));
        return e._reactRootContainer ? (wr(function() {
            ta(null, null, e, !1, function() {
                e._reactRootContainer = null,
                e[mn] = null
            })
        }),
        !0) : !1
    }
    ,
    Ct.unstable_batchedUpdates = Nu,
    Ct.unstable_renderSubtreeIntoContainer = function(e, t, o, a) {
        if (!ea(o))
            throw Error(s(200));
        if (e == null || e._reactInternals === void 0)
            throw Error(s(38));
        return ta(e, t, o, !1, a)
    }
    ,
    Ct.version = "18.3.1-next-f1338f8080-20240426",
    Ct
}
var fp;
function jm() {
    if (fp)
        return Uu.exports;
    fp = 1;
    function r() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)
            } catch (n) {
                console.error(n)
            }
    }
    return r(),
    Uu.exports = B0(),
    Uu.exports
}
var hp;
function $0() {
    if (hp)
        return sa;
    hp = 1;
    var r = jm();
    return sa.createRoot = r.createRoot,
    sa.hydrateRoot = r.hydrateRoot,
    sa
}
var V0 = $0();
const q0 = _m(V0)
  , H0 = 20
  , W0 = 1e6
  , _n = {
    ADD_TOAST: "ADD_TOAST",
    UPDATE_TOAST: "UPDATE_TOAST",
    DISMISS_TOAST: "DISMISS_TOAST",
    REMOVE_TOAST: "REMOVE_TOAST"
};
let $u = 0;
function Q0() {
    return $u = ($u + 1) % Number.MAX_VALUE,
    $u.toString()
}
const Vu = new Map
  , pp = r => {
    if (Vu.has(r))
        return;
    const n = setTimeout( () => {
        Vu.delete(r),
        Po({
            type: _n.REMOVE_TOAST,
            toastId: r
        })
    }
    , W0);
    Vu.set(r, n)
}
  , K0 = (r, n) => {
    switch (n.type) {
    case _n.ADD_TOAST:
        return {
            ...r,
            toasts: [n.toast, ...r.toasts].slice(0, H0)
        };
    case _n.UPDATE_TOAST:
        return {
            ...r,
            toasts: r.toasts.map(s => s.id === n.toast.id ? {
                ...s,
                ...n.toast
            } : s)
        };
    case _n.DISMISS_TOAST:
        {
            const {toastId: s} = n;
            return s ? pp(s) : r.toasts.forEach(i => {
                pp(i.id)
            }
            ),
            {
                ...r,
                toasts: r.toasts.map(i => i.id === s || s === void 0 ? {
                    ...i,
                    open: !1
                } : i)
            }
        }
    case _n.REMOVE_TOAST:
        return n.toastId === void 0 ? {
            ...r,
            toasts: []
        } : {
            ...r,
            toasts: r.toasts.filter(s => s.id !== n.toastId)
        }
    }
}
  , fa = [];
let ha = {
    toasts: []
};
function Po(r) {
    ha = K0(ha, r),
    fa.forEach(n => {
        n(ha)
    }
    )
}
function G0({...r}) {
    const n = Q0()
      , s = l => Po({
        type: _n.UPDATE_TOAST,
        toast: {
            ...l,
            id: n
        }
    })
      , i = () => Po({
        type: _n.DISMISS_TOAST,
        toastId: n
    });
    return Po({
        type: _n.ADD_TOAST,
        toast: {
            ...r,
            id: n,
            open: !0,
            onOpenChange: l => {
                l || i()
            }
        }
    }),
    {
        id: n,
        dismiss: i,
        update: s
    }
}
function Y0() {
    const [r,n] = C.useState(ha);
    return C.useEffect( () => (fa.push(n),
    () => {
        const s = fa.indexOf(n);
        s > -1 && fa.splice(s, 1)
    }
    ), [r]),
    {
        ...r,
        toast: G0,
        dismiss: s => Po({
            type: _n.DISMISS_TOAST,
            toastId: s
        })
    }
}
function Rm(r) {
    var n, s, i = "";
    if (typeof r == "string" || typeof r == "number")
        i += r;
    else if (typeof r == "object")
        if (Array.isArray(r)) {
            var l = r.length;
            for (n = 0; n < l; n++)
                r[n] && (s = Rm(r[n])) && (i && (i += " "),
                i += s)
        } else
            for (s in r)
                r[s] && (i && (i += " "),
                i += s);
    return i
}
function Tm() {
    for (var r, n, s = 0, i = "", l = arguments.length; s < l; s++)
        (r = arguments[s]) && (n = Rm(r)) && (i && (i += " "),
        i += n);
    return i
}
const mp = r => typeof r == "boolean" ? `${r}` : r === 0 ? "0" : r
  , gp = Tm
  , Hc = (r, n) => s => {
    var i;
    if ((n == null ? void 0 : n.variants) == null)
        return gp(r, s == null ? void 0 : s.class, s == null ? void 0 : s.className);
    const {variants: l, defaultVariants: c} = n
      , d = Object.keys(l).map(y => {
        const v = s == null ? void 0 : s[y]
          , x = c == null ? void 0 : c[y];
        if (v === null)
            return null;
        const j = mp(v) || mp(x);
        return l[y][j]
    }
    )
      , p = s && Object.entries(s).reduce( (y, v) => {
        let[x,j] = v;
        return j === void 0 || (y[x] = j),
        y
    }
    , {})
      , m = n == null || (i = n.compoundVariants) === null || i === void 0 ? void 0 : i.reduce( (y, v) => {
        let {class: x, className: j, ...T} = v;
        return Object.entries(T).every(k => {
            let[S,w] = k;
            return Array.isArray(w) ? w.includes({
                ...c,
                ...p
            }[S]) : {
                ...c,
                ...p
            }[S] === w
        }
        ) ? [...y, x, j] : y
    }
    , []);
    return gp(r, d, m, s == null ? void 0 : s.class, s == null ? void 0 : s.className)
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const J0 = r => r.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , Pm = (...r) => r.filter( (n, s, i) => !!n && n.trim() !== "" && i.indexOf(n) === s).join(" ").trim();
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var X0 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Z0 = C.forwardRef( ({color: r="currentColor", size: n=24, strokeWidth: s=2, absoluteStrokeWidth: i, className: l="", children: c, iconNode: d, ...p}, m) => C.createElement("svg", {
    ref: m,
    ...X0,
    width: n,
    height: n,
    stroke: r,
    strokeWidth: i ? Number(s) * 24 / Number(n) : s,
    className: Pm("lucide", l),
    ...p
}, [...d.map( ([y,v]) => C.createElement(y, v)), ...Array.isArray(c) ? c : [c]]));
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ve = (r, n) => {
    const s = C.forwardRef( ({className: i, ...l}, c) => C.createElement(Z0, {
        ref: c,
        iconNode: n,
        className: Pm(`lucide-${J0(r)}`, i),
        ...l
    }));
    return s.displayName = `${r}`,
    s
}
;
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ex = [["path", {
    d: "m12 19-7-7 7-7",
    key: "1l729n"
}], ["path", {
    d: "M19 12H5",
    key: "x3x0zl"
}]]
  , pa = Ve("ArrowLeft", ex);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tx = [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]
  , qu = Ve("ArrowRight", tx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nx = [["rect", {
    width: "16",
    height: "10",
    x: "2",
    y: "7",
    rx: "2",
    ry: "2",
    key: "1w10f2"
}], ["line", {
    x1: "22",
    x2: "22",
    y1: "11",
    y2: "13",
    key: "4dh1rd"
}]]
  , Om = Ve("Battery", nx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rx = [["path", {
    d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
    key: "l5xja"
}], ["path", {
    d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
    key: "ep3f8r"
}], ["path", {
    d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",
    key: "1p4c4q"
}], ["path", {
    d: "M17.599 6.5a3 3 0 0 0 .399-1.375",
    key: "tmeiqw"
}], ["path", {
    d: "M6.003 5.125A3 3 0 0 0 6.401 6.5",
    key: "105sqy"
}], ["path", {
    d: "M3.477 10.896a4 4 0 0 1 .585-.396",
    key: "ql3yin"
}], ["path", {
    d: "M19.938 10.5a4 4 0 0 1 .585.396",
    key: "1qfode"
}], ["path", {
    d: "M6 18a4 4 0 0 1-1.967-.516",
    key: "2e4loj"
}], ["path", {
    d: "M19.967 17.484A4 4 0 0 1 18 18",
    key: "159ez6"
}]]
  , sx = Ve("Brain", rx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ox = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , Am = Ve("Check", ox);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ix = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "m9 12 2 2 4-4",
    key: "dzmm74"
}]]
  , sc = Ve("CircleCheck", ix);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ax = [["line", {
    x1: "22",
    x2: "2",
    y1: "12",
    y2: "12",
    key: "1y58io"
}], ["path", {
    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
    key: "oot6mr"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "16",
    y2: "16",
    key: "sgf278"
}], ["line", {
    x1: "10",
    x2: "10.01",
    y1: "16",
    y2: "16",
    key: "1l4acy"
}]]
  , Lm = Ve("HardDrive", ax);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lx = [["path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    key: "nnexq3"
}], ["path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",
    key: "mt58a7"
}]]
  , ux = Ve("Leaf", lx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const cx = [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]
  , dx = Ve("Mail", cx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fx = [["line", {
    x1: "4",
    x2: "20",
    y1: "12",
    y2: "12",
    key: "1e0a9i"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "6",
    y2: "6",
    key: "1owob3"
}], ["line", {
    x1: "4",
    x2: "20",
    y1: "18",
    y2: "18",
    key: "yk5zj1"
}]]
  , hx = Ve("Menu", fx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const px = [["path", {
    d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
    key: "1a0edw"
}], ["path", {
    d: "M12 22V12",
    key: "d0xqtd"
}], ["polyline", {
    points: "3.29 7 12 12 20.71 7",
    key: "ousv84"
}], ["path", {
    d: "m7.5 4.27 9 5.15",
    key: "1c824w"
}]]
  , oc = Ve("Package", px);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mx = [["path", {
    d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
    key: "1a8usu"
}]]
  , Im = Ve("Pen", mx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gx = [["path", {
    d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
    key: "oel41y"
}]]
  , ic = Ve("Shield", gx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yx = [["path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",
    key: "hou9p0"
}], ["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M16 10a4 4 0 0 1-8 0",
    key: "1ltviw"
}]]
  , vx = Ve("ShoppingBag", yx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xx = [["circle", {
    cx: "8",
    cy: "21",
    r: "1",
    key: "jimo8o"
}], ["circle", {
    cx: "19",
    cy: "21",
    r: "1",
    key: "13723u"
}], ["path", {
    d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",
    key: "9zh506"
}]]
  , ac = Ve("ShoppingCart", xx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wx = [["rect", {
    width: "14",
    height: "20",
    x: "5",
    y: "2",
    rx: "2",
    ry: "2",
    key: "1yt0o3"
}], ["path", {
    d: "M12 18h.01",
    key: "mhygvu"
}]]
  , Mm = Ve("Smartphone", wx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bx = [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]
  , Sx = Ve("Sparkles", bx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kx = [["path", {
    d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
    key: "r04s7s"
}]]
  , Ex = Ve("Star", kx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cx = [["path", {
    d: "M3 6h18",
    key: "d0wm0j"
}], ["path", {
    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
    key: "4alrt4"
}], ["path", {
    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
    key: "v07s0e"
}], ["line", {
    x1: "10",
    x2: "10",
    y1: "11",
    y2: "17",
    key: "1uufr5"
}], ["line", {
    x1: "14",
    x2: "14",
    y1: "11",
    y2: "17",
    key: "xtxkd"
}]]
  , Nx = Ve("Trash2", Cx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _x = [["path", {
    d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
    key: "wrbu53"
}], ["path", {
    d: "M15 18H9",
    key: "1lyqi6"
}], ["path", {
    d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
    key: "lysw3i"
}], ["circle", {
    cx: "17",
    cy: "18",
    r: "2",
    key: "332jqn"
}], ["circle", {
    cx: "7",
    cy: "18",
    r: "2",
    key: "19iecd"
}]]
  , Na = Ve("Truck", _x);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jx = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , Fm = Ve("X", jx);
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rx = [["path", {
    d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
    key: "1xq2db"
}]]
  , Tx = Ve("Zap", Rx)
  , Wc = "-"
  , Px = r => {
    const n = Ax(r)
      , {conflictingClassGroups: s, conflictingClassGroupModifiers: i} = r;
    return {
        getClassGroupId: d => {
            const p = d.split(Wc);
            return p[0] === "" && p.length !== 1 && p.shift(),
            Dm(p, n) || Ox(d)
        }
        ,
        getConflictingClassGroupIds: (d, p) => {
            const m = s[d] || [];
            return p && i[d] ? [...m, ...i[d]] : m
        }
    }
}
  , Dm = (r, n) => {
    var d;
    if (r.length === 0)
        return n.classGroupId;
    const s = r[0]
      , i = n.nextPart.get(s)
      , l = i ? Dm(r.slice(1), i) : void 0;
    if (l)
        return l;
    if (n.validators.length === 0)
        return;
    const c = r.join(Wc);
    return (d = n.validators.find( ({validator: p}) => p(c))) == null ? void 0 : d.classGroupId
}
  , yp = /^\[(.+)\]$/
  , Ox = r => {
    if (yp.test(r)) {
        const n = yp.exec(r)[1]
          , s = n == null ? void 0 : n.substring(0, n.indexOf(":"));
        if (s)
            return "arbitrary.." + s
    }
}
  , Ax = r => {
    const {theme: n, classGroups: s} = r
      , i = {
        nextPart: new Map,
        validators: []
    };
    for (const l in s)
        lc(s[l], i, l, n);
    return i
}
  , lc = (r, n, s, i) => {
    r.forEach(l => {
        if (typeof l == "string") {
            const c = l === "" ? n : vp(n, l);
            c.classGroupId = s;
            return
        }
        if (typeof l == "function") {
            if (Lx(l)) {
                lc(l(i), n, s, i);
                return
            }
            n.validators.push({
                validator: l,
                classGroupId: s
            });
            return
        }
        Object.entries(l).forEach( ([c,d]) => {
            lc(d, vp(n, c), s, i)
        }
        )
    }
    )
}
  , vp = (r, n) => {
    let s = r;
    return n.split(Wc).forEach(i => {
        s.nextPart.has(i) || s.nextPart.set(i, {
            nextPart: new Map,
            validators: []
        }),
        s = s.nextPart.get(i)
    }
    ),
    s
}
  , Lx = r => r.isThemeGetter
  , Ix = r => {
    if (r < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let n = 0
      , s = new Map
      , i = new Map;
    const l = (c, d) => {
        s.set(c, d),
        n++,
        n > r && (n = 0,
        i = s,
        s = new Map)
    }
    ;
    return {
        get(c) {
            let d = s.get(c);
            if (d !== void 0)
                return d;
            if ((d = i.get(c)) !== void 0)
                return l(c, d),
                d
        },
        set(c, d) {
            s.has(c) ? s.set(c, d) : l(c, d)
        }
    }
}
  , uc = "!"
  , cc = ":"
  , Mx = cc.length
  , Fx = r => {
    const {prefix: n, experimentalParseClassName: s} = r;
    let i = l => {
        const c = [];
        let d = 0, p = 0, m = 0, y;
        for (let k = 0; k < l.length; k++) {
            let S = l[k];
            if (d === 0 && p === 0) {
                if (S === cc) {
                    c.push(l.slice(m, k)),
                    m = k + Mx;
                    continue
                }
                if (S === "/") {
                    y = k;
                    continue
                }
            }
            S === "[" ? d++ : S === "]" ? d-- : S === "(" ? p++ : S === ")" && p--
        }
        const v = c.length === 0 ? l : l.substring(m)
          , x = Dx(v)
          , j = x !== v
          , T = y && y > m ? y - m : void 0;
        return {
            modifiers: c,
            hasImportantModifier: j,
            baseClassName: x,
            maybePostfixModifierPosition: T
        }
    }
    ;
    if (n) {
        const l = n + cc
          , c = i;
        i = d => d.startsWith(l) ? c(d.substring(l.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: d,
            maybePostfixModifierPosition: void 0
        }
    }
    if (s) {
        const l = i;
        i = c => s({
            className: c,
            parseClassName: l
        })
    }
    return i
}
  , Dx = r => r.endsWith(uc) ? r.substring(0, r.length - 1) : r.startsWith(uc) ? r.substring(1) : r
  , Ux = r => {
    const n = Object.fromEntries(r.orderSensitiveModifiers.map(i => [i, !0]));
    return i => {
        if (i.length <= 1)
            return i;
        const l = [];
        let c = [];
        return i.forEach(d => {
            d[0] === "[" || n[d] ? (l.push(...c.sort(), d),
            c = []) : c.push(d)
        }
        ),
        l.push(...c.sort()),
        l
    }
}
  , zx = r => ({
    cache: Ix(r.cacheSize),
    parseClassName: Fx(r),
    sortModifiers: Ux(r),
    ...Px(r)
})
  , Bx = /\s+/
  , $x = (r, n) => {
    const {parseClassName: s, getClassGroupId: i, getConflictingClassGroupIds: l, sortModifiers: c} = n
      , d = []
      , p = r.trim().split(Bx);
    let m = "";
    for (let y = p.length - 1; y >= 0; y -= 1) {
        const v = p[y]
          , {isExternal: x, modifiers: j, hasImportantModifier: T, baseClassName: k, maybePostfixModifierPosition: S} = s(v);
        if (x) {
            m = v + (m.length > 0 ? " " + m : m);
            continue
        }
        let w = !!S
          , M = i(w ? k.substring(0, S) : k);
        if (!M) {
            if (!w) {
                m = v + (m.length > 0 ? " " + m : m);
                continue
            }
            if (M = i(k),
            !M) {
                m = v + (m.length > 0 ? " " + m : m);
                continue
            }
            w = !1
        }
        const H = c(j).join(":")
          , U = T ? H + uc : H
          , D = U + M;
        if (d.includes(D))
            continue;
        d.push(D);
        const G = l(M, w);
        for (let de = 0; de < G.length; ++de) {
            const ge = G[de];
            d.push(U + ge)
        }
        m = v + (m.length > 0 ? " " + m : m)
    }
    return m
}
;
function Vx() {
    let r = 0, n, s, i = "";
    for (; r < arguments.length; )
        (n = arguments[r++]) && (s = Um(n)) && (i && (i += " "),
        i += s);
    return i
}
const Um = r => {
    if (typeof r == "string")
        return r;
    let n, s = "";
    for (let i = 0; i < r.length; i++)
        r[i] && (n = Um(r[i])) && (s && (s += " "),
        s += n);
    return s
}
;
function qx(r, ...n) {
    let s, i, l, c = d;
    function d(m) {
        const y = n.reduce( (v, x) => x(v), r());
        return s = zx(y),
        i = s.cache.get,
        l = s.cache.set,
        c = p,
        p(m)
    }
    function p(m) {
        const y = i(m);
        if (y)
            return y;
        const v = $x(m, s);
        return l(m, v),
        v
    }
    return function() {
        return c(Vx.apply(null, arguments))
    }
}
const Ze = r => {
    const n = s => s[r] || [];
    return n.isThemeGetter = !0,
    n
}
  , zm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Bm = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , Hx = /^\d+\/\d+$/
  , Wx = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , Qx = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , Kx = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , Gx = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , Yx = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , ms = r => Hx.test(r)
  , Se = r => !!r && !Number.isNaN(Number(r))
  , Gn = r => !!r && Number.isInteger(Number(r))
  , Hu = r => r.endsWith("%") && Se(r.slice(0, -1))
  , kn = r => Wx.test(r)
  , Jx = () => !0
  , Xx = r => Qx.test(r) && !Kx.test(r)
  , $m = () => !1
  , Zx = r => Gx.test(r)
  , ew = r => Yx.test(r)
  , tw = r => !re(r) && !se(r)
  , nw = r => Ts(r, Hm, $m)
  , re = r => zm.test(r)
  , Er = r => Ts(r, Wm, Xx)
  , Wu = r => Ts(r, aw, Se)
  , xp = r => Ts(r, Vm, $m)
  , rw = r => Ts(r, qm, ew)
  , oa = r => Ts(r, Qm, Zx)
  , se = r => Bm.test(r)
  , ko = r => Ps(r, Wm)
  , sw = r => Ps(r, lw)
  , wp = r => Ps(r, Vm)
  , ow = r => Ps(r, Hm)
  , iw = r => Ps(r, qm)
  , ia = r => Ps(r, Qm, !0)
  , Ts = (r, n, s) => {
    const i = zm.exec(r);
    return i ? i[1] ? n(i[1]) : s(i[2]) : !1
}
  , Ps = (r, n, s=!1) => {
    const i = Bm.exec(r);
    return i ? i[1] ? n(i[1]) : s : !1
}
  , Vm = r => r === "position" || r === "percentage"
  , qm = r => r === "image" || r === "url"
  , Hm = r => r === "length" || r === "size" || r === "bg-size"
  , Wm = r => r === "length"
  , aw = r => r === "number"
  , lw = r => r === "family-name"
  , Qm = r => r === "shadow"
  , uw = () => {
    const r = Ze("color")
      , n = Ze("font")
      , s = Ze("text")
      , i = Ze("font-weight")
      , l = Ze("tracking")
      , c = Ze("leading")
      , d = Ze("breakpoint")
      , p = Ze("container")
      , m = Ze("spacing")
      , y = Ze("radius")
      , v = Ze("shadow")
      , x = Ze("inset-shadow")
      , j = Ze("text-shadow")
      , T = Ze("drop-shadow")
      , k = Ze("blur")
      , S = Ze("perspective")
      , w = Ze("aspect")
      , M = Ze("ease")
      , H = Ze("animate")
      , U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , D = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , G = () => [...D(), se, re]
      , de = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , ge = () => ["auto", "contain", "none"]
      , I = () => [se, re, m]
      , Q = () => [ms, "full", "auto", ...I()]
      , K = () => [Gn, "none", "subgrid", se, re]
      , Z = () => ["auto", {
        span: ["full", Gn, se, re]
    }, Gn, se, re]
      , B = () => [Gn, "auto", se, re]
      , te = () => ["auto", "min", "max", "fr", se, re]
      , Ee = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , fe = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , ie = () => ["auto", ...I()]
      , we = () => [ms, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...I()]
      , F = () => [r, se, re]
      , ue = () => [...D(), wp, xp, {
        position: [se, re]
    }]
      , Y = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , R = () => ["auto", "cover", "contain", ow, nw, {
        size: [se, re]
    }]
      , z = () => [Hu, ko, Er]
      , le = () => ["", "none", "full", y, se, re]
      , ce = () => ["", Se, ko, Er]
      , be = () => ["solid", "dashed", "dotted", "double"]
      , Ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ve = () => [Se, Hu, wp, xp]
      , Te = () => ["", "none", k, se, re]
      , Ae = () => ["none", Se, se, re]
      , et = () => ["none", Se, se, re]
      , Rn = () => [Se, se, re]
      , cr = () => [ms, "full", ...I()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [kn],
            breakpoint: [kn],
            color: [Jx],
            container: [kn],
            "drop-shadow": [kn],
            ease: ["in", "out", "in-out"],
            font: [tw],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [kn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [kn],
            shadow: [kn],
            spacing: ["px", Se],
            text: [kn],
            "text-shadow": [kn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", ms, re, se, w]
            }],
            container: ["container"],
            columns: [{
                columns: [Se, re, se, p]
            }],
            "break-after": [{
                "break-after": U()
            }],
            "break-before": [{
                "break-before": U()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: G()
            }],
            overflow: [{
                overflow: de()
            }],
            "overflow-x": [{
                "overflow-x": de()
            }],
            "overflow-y": [{
                "overflow-y": de()
            }],
            overscroll: [{
                overscroll: ge()
            }],
            "overscroll-x": [{
                "overscroll-x": ge()
            }],
            "overscroll-y": [{
                "overscroll-y": ge()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: Q()
            }],
            "inset-x": [{
                "inset-x": Q()
            }],
            "inset-y": [{
                "inset-y": Q()
            }],
            start: [{
                start: Q()
            }],
            end: [{
                end: Q()
            }],
            top: [{
                top: Q()
            }],
            right: [{
                right: Q()
            }],
            bottom: [{
                bottom: Q()
            }],
            left: [{
                left: Q()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Gn, "auto", se, re]
            }],
            basis: [{
                basis: [ms, "full", "auto", p, ...I()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Se, ms, "auto", "initial", "none", re]
            }],
            grow: [{
                grow: ["", Se, se, re]
            }],
            shrink: [{
                shrink: ["", Se, se, re]
            }],
            order: [{
                order: [Gn, "first", "last", "none", se, re]
            }],
            "grid-cols": [{
                "grid-cols": K()
            }],
            "col-start-end": [{
                col: Z()
            }],
            "col-start": [{
                "col-start": B()
            }],
            "col-end": [{
                "col-end": B()
            }],
            "grid-rows": [{
                "grid-rows": K()
            }],
            "row-start-end": [{
                row: Z()
            }],
            "row-start": [{
                "row-start": B()
            }],
            "row-end": [{
                "row-end": B()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": te()
            }],
            "auto-rows": [{
                "auto-rows": te()
            }],
            gap: [{
                gap: I()
            }],
            "gap-x": [{
                "gap-x": I()
            }],
            "gap-y": [{
                "gap-y": I()
            }],
            "justify-content": [{
                justify: [...Ee(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...fe(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...fe()]
            }],
            "align-content": [{
                content: ["normal", ...Ee()]
            }],
            "align-items": [{
                items: [...fe(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...fe(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": Ee()
            }],
            "place-items": [{
                "place-items": [...fe(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...fe()]
            }],
            p: [{
                p: I()
            }],
            px: [{
                px: I()
            }],
            py: [{
                py: I()
            }],
            ps: [{
                ps: I()
            }],
            pe: [{
                pe: I()
            }],
            pt: [{
                pt: I()
            }],
            pr: [{
                pr: I()
            }],
            pb: [{
                pb: I()
            }],
            pl: [{
                pl: I()
            }],
            m: [{
                m: ie()
            }],
            mx: [{
                mx: ie()
            }],
            my: [{
                my: ie()
            }],
            ms: [{
                ms: ie()
            }],
            me: [{
                me: ie()
            }],
            mt: [{
                mt: ie()
            }],
            mr: [{
                mr: ie()
            }],
            mb: [{
                mb: ie()
            }],
            ml: [{
                ml: ie()
            }],
            "space-x": [{
                "space-x": I()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": I()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: we()
            }],
            w: [{
                w: [p, "screen", ...we()]
            }],
            "min-w": [{
                "min-w": [p, "screen", "none", ...we()]
            }],
            "max-w": [{
                "max-w": [p, "screen", "none", "prose", {
                    screen: [d]
                }, ...we()]
            }],
            h: [{
                h: ["screen", "lh", ...we()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...we()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...we()]
            }],
            "font-size": [{
                text: ["base", s, ko, Er]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [i, se, Wu]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Hu, re]
            }],
            "font-family": [{
                font: [sw, re, n]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [l, se, re]
            }],
            "line-clamp": [{
                "line-clamp": [Se, "none", se, Wu]
            }],
            leading: [{
                leading: [c, ...I()]
            }],
            "list-image": [{
                "list-image": ["none", se, re]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", se, re]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: F()
            }],
            "text-color": [{
                text: F()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...be(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Se, "from-font", "auto", se, Er]
            }],
            "text-decoration-color": [{
                decoration: F()
            }],
            "underline-offset": [{
                "underline-offset": [Se, "auto", se, re]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: I()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", se, re]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", se, re]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: ue()
            }],
            "bg-repeat": [{
                bg: Y()
            }],
            "bg-size": [{
                bg: R()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Gn, se, re],
                    radial: ["", se, re],
                    conic: [Gn, se, re]
                }, iw, rw]
            }],
            "bg-color": [{
                bg: F()
            }],
            "gradient-from-pos": [{
                from: z()
            }],
            "gradient-via-pos": [{
                via: z()
            }],
            "gradient-to-pos": [{
                to: z()
            }],
            "gradient-from": [{
                from: F()
            }],
            "gradient-via": [{
                via: F()
            }],
            "gradient-to": [{
                to: F()
            }],
            rounded: [{
                rounded: le()
            }],
            "rounded-s": [{
                "rounded-s": le()
            }],
            "rounded-e": [{
                "rounded-e": le()
            }],
            "rounded-t": [{
                "rounded-t": le()
            }],
            "rounded-r": [{
                "rounded-r": le()
            }],
            "rounded-b": [{
                "rounded-b": le()
            }],
            "rounded-l": [{
                "rounded-l": le()
            }],
            "rounded-ss": [{
                "rounded-ss": le()
            }],
            "rounded-se": [{
                "rounded-se": le()
            }],
            "rounded-ee": [{
                "rounded-ee": le()
            }],
            "rounded-es": [{
                "rounded-es": le()
            }],
            "rounded-tl": [{
                "rounded-tl": le()
            }],
            "rounded-tr": [{
                "rounded-tr": le()
            }],
            "rounded-br": [{
                "rounded-br": le()
            }],
            "rounded-bl": [{
                "rounded-bl": le()
            }],
            "border-w": [{
                border: ce()
            }],
            "border-w-x": [{
                "border-x": ce()
            }],
            "border-w-y": [{
                "border-y": ce()
            }],
            "border-w-s": [{
                "border-s": ce()
            }],
            "border-w-e": [{
                "border-e": ce()
            }],
            "border-w-t": [{
                "border-t": ce()
            }],
            "border-w-r": [{
                "border-r": ce()
            }],
            "border-w-b": [{
                "border-b": ce()
            }],
            "border-w-l": [{
                "border-l": ce()
            }],
            "divide-x": [{
                "divide-x": ce()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": ce()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...be(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...be(), "hidden", "none"]
            }],
            "border-color": [{
                border: F()
            }],
            "border-color-x": [{
                "border-x": F()
            }],
            "border-color-y": [{
                "border-y": F()
            }],
            "border-color-s": [{
                "border-s": F()
            }],
            "border-color-e": [{
                "border-e": F()
            }],
            "border-color-t": [{
                "border-t": F()
            }],
            "border-color-r": [{
                "border-r": F()
            }],
            "border-color-b": [{
                "border-b": F()
            }],
            "border-color-l": [{
                "border-l": F()
            }],
            "divide-color": [{
                divide: F()
            }],
            "outline-style": [{
                outline: [...be(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Se, se, re]
            }],
            "outline-w": [{
                outline: ["", Se, ko, Er]
            }],
            "outline-color": [{
                outline: F()
            }],
            shadow: [{
                shadow: ["", "none", v, ia, oa]
            }],
            "shadow-color": [{
                shadow: F()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", x, ia, oa]
            }],
            "inset-shadow-color": [{
                "inset-shadow": F()
            }],
            "ring-w": [{
                ring: ce()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: F()
            }],
            "ring-offset-w": [{
                "ring-offset": [Se, Er]
            }],
            "ring-offset-color": [{
                "ring-offset": F()
            }],
            "inset-ring-w": [{
                "inset-ring": ce()
            }],
            "inset-ring-color": [{
                "inset-ring": F()
            }],
            "text-shadow": [{
                "text-shadow": ["none", j, ia, oa]
            }],
            "text-shadow-color": [{
                "text-shadow": F()
            }],
            opacity: [{
                opacity: [Se, se, re]
            }],
            "mix-blend": [{
                "mix-blend": [...Ce(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": Ce()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Se]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ve()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ve()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": F()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": F()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ve()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ve()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": F()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": F()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ve()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ve()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": F()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": F()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ve()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ve()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": F()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": F()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ve()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ve()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": F()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": F()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ve()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ve()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": F()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": F()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ve()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ve()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": F()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": F()
            }],
            "mask-image-radial": [{
                "mask-radial": [se, re]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ve()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ve()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": F()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": F()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": D()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Se]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ve()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ve()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": F()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": F()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: ue()
            }],
            "mask-repeat": [{
                mask: Y()
            }],
            "mask-size": [{
                mask: R()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", se, re]
            }],
            filter: [{
                filter: ["", "none", se, re]
            }],
            blur: [{
                blur: Te()
            }],
            brightness: [{
                brightness: [Se, se, re]
            }],
            contrast: [{
                contrast: [Se, se, re]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", T, ia, oa]
            }],
            "drop-shadow-color": [{
                "drop-shadow": F()
            }],
            grayscale: [{
                grayscale: ["", Se, se, re]
            }],
            "hue-rotate": [{
                "hue-rotate": [Se, se, re]
            }],
            invert: [{
                invert: ["", Se, se, re]
            }],
            saturate: [{
                saturate: [Se, se, re]
            }],
            sepia: [{
                sepia: ["", Se, se, re]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", se, re]
            }],
            "backdrop-blur": [{
                "backdrop-blur": Te()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Se, se, re]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Se, se, re]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Se, se, re]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Se, se, re]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Se, se, re]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Se, se, re]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Se, se, re]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Se, se, re]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": I()
            }],
            "border-spacing-x": [{
                "border-spacing-x": I()
            }],
            "border-spacing-y": [{
                "border-spacing-y": I()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", se, re]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Se, "initial", se, re]
            }],
            ease: [{
                ease: ["linear", "initial", M, se, re]
            }],
            delay: [{
                delay: [Se, se, re]
            }],
            animate: [{
                animate: ["none", H, se, re]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [S, se, re]
            }],
            "perspective-origin": [{
                "perspective-origin": G()
            }],
            rotate: [{
                rotate: Ae()
            }],
            "rotate-x": [{
                "rotate-x": Ae()
            }],
            "rotate-y": [{
                "rotate-y": Ae()
            }],
            "rotate-z": [{
                "rotate-z": Ae()
            }],
            scale: [{
                scale: et()
            }],
            "scale-x": [{
                "scale-x": et()
            }],
            "scale-y": [{
                "scale-y": et()
            }],
            "scale-z": [{
                "scale-z": et()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: Rn()
            }],
            "skew-x": [{
                "skew-x": Rn()
            }],
            "skew-y": [{
                "skew-y": Rn()
            }],
            transform: [{
                transform: [se, re, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: G()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: cr()
            }],
            "translate-x": [{
                "translate-x": cr()
            }],
            "translate-y": [{
                "translate-y": cr()
            }],
            "translate-z": [{
                "translate-z": cr()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: F()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: F()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", se, re]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": I()
            }],
            "scroll-mx": [{
                "scroll-mx": I()
            }],
            "scroll-my": [{
                "scroll-my": I()
            }],
            "scroll-ms": [{
                "scroll-ms": I()
            }],
            "scroll-me": [{
                "scroll-me": I()
            }],
            "scroll-mt": [{
                "scroll-mt": I()
            }],
            "scroll-mr": [{
                "scroll-mr": I()
            }],
            "scroll-mb": [{
                "scroll-mb": I()
            }],
            "scroll-ml": [{
                "scroll-ml": I()
            }],
            "scroll-p": [{
                "scroll-p": I()
            }],
            "scroll-px": [{
                "scroll-px": I()
            }],
            "scroll-py": [{
                "scroll-py": I()
            }],
            "scroll-ps": [{
                "scroll-ps": I()
            }],
            "scroll-pe": [{
                "scroll-pe": I()
            }],
            "scroll-pt": [{
                "scroll-pt": I()
            }],
            "scroll-pr": [{
                "scroll-pr": I()
            }],
            "scroll-pb": [{
                "scroll-pb": I()
            }],
            "scroll-pl": [{
                "scroll-pl": I()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", se, re]
            }],
            fill: [{
                fill: ["none", ...F()]
            }],
            "stroke-w": [{
                stroke: [Se, ko, Er, Wu]
            }],
            stroke: [{
                stroke: ["none", ...F()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , Km = qx(uw);
function ot(...r) {
    return Km(Tm(r))
}
const Gm = C.forwardRef( ({...r}, n) => h.jsx("div", {
    ref: n,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...r
}));
Gm.displayName = "ToastProvider";
const Ym = C.forwardRef( ({...r}, n) => h.jsx("div", {
    ref: n,
    className: "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
    ...r
}));
Ym.displayName = "ToastViewport";
const cw = Hc("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
    variants: {
        variant: {
            default: "border bg-background text-foreground",
            destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
        }
    },
    defaultVariants: {
        variant: "default"
    }
})
  , Jm = C.forwardRef( ({className: r, variant: n, ...s}, i) => h.jsx("div", {
    ref: i,
    className: ot(cw({
        variant: n
    }), r),
    ...s
}));
Jm.displayName = "Toast";
const dw = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", r),
    ...n
}));
dw.displayName = "ToastAction";
const Xm = C.forwardRef( ({className: r, ...n}, s) => h.jsx("button", {
    ref: s,
    className: ot("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", r),
    "toast-close": "",
    ...n,
    children: h.jsx(Fm, {
        className: "h-4 w-4"
    })
}));
Xm.displayName = "ToastClose";
const Zm = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("text-sm font-semibold", r),
    ...n
}));
Zm.displayName = "ToastTitle";
const eg = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("text-sm opacity-90", r),
    ...n
}));
eg.displayName = "ToastDescription";
function fw() {
    const {toasts: r} = Y0();
    return h.jsxs(Gm, {
        children: [r.map(function({id: n, title: s, description: i, action: l, ...c}) {
            return h.jsxs(Jm, {
                ...c,
                children: [h.jsxs("div", {
                    className: "grid gap-1",
                    children: [s && h.jsx(Zm, {
                        children: s
                    }), i && h.jsx(eg, {
                        children: i
                    })]
                }), l, h.jsx(Xm, {})]
            }, n)
        }), h.jsx(Ym, {})]
    })
}
var Bo = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(r) {
        return this.listeners.add(r),
        this.onSubscribe(),
        () => {
            this.listeners.delete(r),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
, hw = {
    setTimeout: (r, n) => setTimeout(r, n),
    clearTimeout: r => clearTimeout(r),
    setInterval: (r, n) => setInterval(r, n),
    clearInterval: r => clearInterval(r)
}, Xn, $c, ym, pw = (ym = class {
    constructor() {
        me(this, Xn, hw);
        me(this, $c, !1)
    }
    setTimeoutProvider(r) {
        X(this, Xn, r)
    }
    setTimeout(r, n) {
        return N(this, Xn).setTimeout(r, n)
    }
    clearTimeout(r) {
        N(this, Xn).clearTimeout(r)
    }
    setInterval(r, n) {
        return N(this, Xn).setInterval(r, n)
    }
    clearInterval(r) {
        N(this, Xn).clearInterval(r)
    }
}
,
Xn = new WeakMap,
$c = new WeakMap,
ym), Cr = new pw;
function mw(r) {
    setTimeout(r, 0)
}
var Dr = typeof window > "u" || "Deno"in globalThis;
function _t() {}
function gw(r, n) {
    return typeof r == "function" ? r(n) : r
}
function dc(r) {
    return typeof r == "number" && r >= 0 && r !== 1 / 0
}
function tg(r, n) {
    return Math.max(r + (n || 0) - Date.now(), 0)
}
function ar(r, n) {
    return typeof r == "function" ? r(n) : r
}
function Vt(r, n) {
    return typeof r == "function" ? r(n) : r
}
function bp(r, n) {
    const {type: s="all", exact: i, fetchStatus: l, predicate: c, queryKey: d, stale: p} = r;
    if (d) {
        if (i) {
            if (n.queryHash !== Qc(d, n.options))
                return !1
        } else if (!Ao(n.queryKey, d))
            return !1
    }
    if (s !== "all") {
        const m = n.isActive();
        if (s === "active" && !m || s === "inactive" && m)
            return !1
    }
    return !(typeof p == "boolean" && n.isStale() !== p || l && l !== n.state.fetchStatus || c && !c(n))
}
function Sp(r, n) {
    const {exact: s, status: i, predicate: l, mutationKey: c} = r;
    if (c) {
        if (!n.options.mutationKey)
            return !1;
        if (s) {
            if (Oo(n.options.mutationKey) !== Oo(c))
                return !1
        } else if (!Ao(n.options.mutationKey, c))
            return !1
    }
    return !(i && n.state.status !== i || l && !l(n))
}
function Qc(r, n) {
    return ((n == null ? void 0 : n.queryKeyHashFn) || Oo)(r)
}
function Oo(r) {
    return JSON.stringify(r, (n, s) => hc(s) ? Object.keys(s).sort().reduce( (i, l) => (i[l] = s[l],
    i), {}) : s)
}
function Ao(r, n) {
    return r === n ? !0 : typeof r != typeof n ? !1 : r && n && typeof r == "object" && typeof n == "object" ? Object.keys(n).every(s => Ao(r[s], n[s])) : !1
}
var yw = Object.prototype.hasOwnProperty;
function ng(r, n) {
    if (r === n)
        return r;
    const s = kp(r) && kp(n);
    if (!s && !(hc(r) && hc(n)))
        return n;
    const l = (s ? r : Object.keys(r)).length
      , c = s ? n : Object.keys(n)
      , d = c.length
      , p = s ? new Array(d) : {};
    let m = 0;
    for (let y = 0; y < d; y++) {
        const v = s ? y : c[y]
          , x = r[v]
          , j = n[v];
        if (x === j) {
            p[v] = x,
            (s ? y < l : yw.call(r, v)) && m++;
            continue
        }
        if (x === null || j === null || typeof x != "object" || typeof j != "object") {
            p[v] = j;
            continue
        }
        const T = ng(x, j);
        p[v] = T,
        T === x && m++
    }
    return l === d && m === l ? r : p
}
function fc(r, n) {
    if (!n || Object.keys(r).length !== Object.keys(n).length)
        return !1;
    for (const s in r)
        if (r[s] !== n[s])
            return !1;
    return !0
}
function kp(r) {
    return Array.isArray(r) && r.length === Object.keys(r).length
}
function hc(r) {
    if (!Ep(r))
        return !1;
    const n = r.constructor;
    if (n === void 0)
        return !0;
    const s = n.prototype;
    return !(!Ep(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype)
}
function Ep(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
function vw(r) {
    return new Promise(n => {
        Cr.setTimeout(n, r)
    }
    )
}
function pc(r, n, s) {
    return typeof s.structuralSharing == "function" ? s.structuralSharing(r, n) : s.structuralSharing !== !1 ? ng(r, n) : n
}
function xw(r, n, s=0) {
    const i = [...r, n];
    return s && i.length > s ? i.slice(1) : i
}
function ww(r, n, s=0) {
    const i = [n, ...r];
    return s && i.length > s ? i.slice(0, -1) : i
}
var Kc = Symbol();
function rg(r, n) {
    return !r.queryFn && (n != null && n.initialPromise) ? () => n.initialPromise : !r.queryFn || r.queryFn === Kc ? () => Promise.reject(new Error(`Missing queryFn: '${r.queryHash}'`)) : r.queryFn
}
function bw(r, n) {
    return typeof r == "function" ? r(...n) : !!r
}
var jr, Zn, ys, vm, Sw = (vm = class extends Bo {
    constructor() {
        super();
        me(this, jr);
        me(this, Zn);
        me(this, ys);
        X(this, ys, n => {
            if (!Dr && window.addEventListener) {
                const s = () => n();
                return window.addEventListener("visibilitychange", s, !1),
                () => {
                    window.removeEventListener("visibilitychange", s)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, Zn) || this.setEventListener(N(this, ys))
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || ((n = N(this, Zn)) == null || n.call(this),
        X(this, Zn, void 0))
    }
    setEventListener(n) {
        var s;
        X(this, ys, n),
        (s = N(this, Zn)) == null || s.call(this),
        X(this, Zn, n(i => {
            typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        ))
    }
    setFocused(n) {
        N(this, jr) !== n && (X(this, jr, n),
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(s => {
            s(n)
        }
        )
    }
    isFocused() {
        var n;
        return typeof N(this, jr) == "boolean" ? N(this, jr) : ((n = globalThis.document) == null ? void 0 : n.visibilityState) !== "hidden"
    }
}
,
jr = new WeakMap,
Zn = new WeakMap,
ys = new WeakMap,
vm), Gc = new Sw;
function mc() {
    let r, n;
    const s = new Promise( (l, c) => {
        r = l,
        n = c
    }
    );
    s.status = "pending",
    s.catch( () => {}
    );
    function i(l) {
        Object.assign(s, l),
        delete s.resolve,
        delete s.reject
    }
    return s.resolve = l => {
        i({
            status: "fulfilled",
            value: l
        }),
        r(l)
    }
    ,
    s.reject = l => {
        i({
            status: "rejected",
            reason: l
        }),
        n(l)
    }
    ,
    s
}
var kw = mw;
function Ew() {
    let r = []
      , n = 0
      , s = p => {
        p()
    }
      , i = p => {
        p()
    }
      , l = kw;
    const c = p => {
        n ? r.push(p) : l( () => {
            s(p)
        }
        )
    }
      , d = () => {
        const p = r;
        r = [],
        p.length && l( () => {
            i( () => {
                p.forEach(m => {
                    s(m)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: p => {
            let m;
            n++;
            try {
                m = p()
            } finally {
                n--,
                n || d()
            }
            return m
        }
        ,
        batchCalls: p => (...m) => {
            c( () => {
                p(...m)
            }
            )
        }
        ,
        schedule: c,
        setNotifyFunction: p => {
            s = p
        }
        ,
        setBatchNotifyFunction: p => {
            i = p
        }
        ,
        setScheduler: p => {
            l = p
        }
    }
}
var ut = Ew(), vs, er, xs, xm, Cw = (xm = class extends Bo {
    constructor() {
        super();
        me(this, vs, !0);
        me(this, er);
        me(this, xs);
        X(this, xs, n => {
            if (!Dr && window.addEventListener) {
                const s = () => n(!0)
                  , i = () => n(!1);
                return window.addEventListener("online", s, !1),
                window.addEventListener("offline", i, !1),
                () => {
                    window.removeEventListener("online", s),
                    window.removeEventListener("offline", i)
                }
            }
        }
        )
    }
    onSubscribe() {
        N(this, er) || this.setEventListener(N(this, xs))
    }
    onUnsubscribe() {
        var n;
        this.hasListeners() || ((n = N(this, er)) == null || n.call(this),
        X(this, er, void 0))
    }
    setEventListener(n) {
        var s;
        X(this, xs, n),
        (s = N(this, er)) == null || s.call(this),
        X(this, er, n(this.setOnline.bind(this)))
    }
    setOnline(n) {
        N(this, vs) !== n && (X(this, vs, n),
        this.listeners.forEach(i => {
            i(n)
        }
        ))
    }
    isOnline() {
        return N(this, vs)
    }
}
,
vs = new WeakMap,
er = new WeakMap,
xs = new WeakMap,
xm), _a = new Cw;
function Nw(r) {
    return Math.min(1e3 * 2 ** r, 3e4)
}
function sg(r) {
    return (r ?? "online") === "online" ? _a.isOnline() : !0
}
var gc = class extends Error {
    constructor(r) {
        super("CancelledError"),
        this.revert = r == null ? void 0 : r.revert,
        this.silent = r == null ? void 0 : r.silent
    }
}
;
function og(r) {
    let n = !1, s = 0, i;
    const l = mc()
      , c = () => l.status !== "pending"
      , d = S => {
        var w;
        if (!c()) {
            const M = new gc(S);
            j(M),
            (w = r.onCancel) == null || w.call(r, M)
        }
    }
      , p = () => {
        n = !0
    }
      , m = () => {
        n = !1
    }
      , y = () => Gc.isFocused() && (r.networkMode === "always" || _a.isOnline()) && r.canRun()
      , v = () => sg(r.networkMode) && r.canRun()
      , x = S => {
        c() || (i == null || i(),
        l.resolve(S))
    }
      , j = S => {
        c() || (i == null || i(),
        l.reject(S))
    }
      , T = () => new Promise(S => {
        var w;
        i = M => {
            (c() || y()) && S(M)
        }
        ,
        (w = r.onPause) == null || w.call(r)
    }
    ).then( () => {
        var S;
        i = void 0,
        c() || (S = r.onContinue) == null || S.call(r)
    }
    )
      , k = () => {
        if (c())
            return;
        let S;
        const w = s === 0 ? r.initialPromise : void 0;
        try {
            S = w ?? r.fn()
        } catch (M) {
            S = Promise.reject(M)
        }
        Promise.resolve(S).then(x).catch(M => {
            var de;
            if (c())
                return;
            const H = r.retry ?? (Dr ? 0 : 3)
              , U = r.retryDelay ?? Nw
              , D = typeof U == "function" ? U(s, M) : U
              , G = H === !0 || typeof H == "number" && s < H || typeof H == "function" && H(s, M);
            if (n || !G) {
                j(M);
                return
            }
            s++,
            (de = r.onFail) == null || de.call(r, s, M),
            vw(D).then( () => y() ? void 0 : T()).then( () => {
                n ? j(M) : k()
            }
            )
        }
        )
    }
    ;
    return {
        promise: l,
        status: () => l.status,
        cancel: d,
        continue: () => (i == null || i(),
        l),
        cancelRetry: p,
        continueRetry: m,
        canStart: v,
        start: () => (v() ? k() : T().then(k),
        l)
    }
}
var Rr, wm, ig = (wm = class {
    constructor() {
        me(this, Rr)
    }
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        dc(this.gcTime) && X(this, Rr, Cr.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(r) {
        this.gcTime = Math.max(this.gcTime || 0, r ?? (Dr ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        N(this, Rr) && (Cr.clearTimeout(N(this, Rr)),
        X(this, Rr, void 0))
    }
}
,
Rr = new WeakMap,
wm), Tr, ws, $t, Pr, st, Mo, Or, Xt, En, bm, _w = (bm = class extends ig {
    constructor(n) {
        super();
        me(this, Xt);
        me(this, Tr);
        me(this, ws);
        me(this, $t);
        me(this, Pr);
        me(this, st);
        me(this, Mo);
        me(this, Or);
        X(this, Or, !1),
        X(this, Mo, n.defaultOptions),
        this.setOptions(n.options),
        this.observers = [],
        X(this, Pr, n.client),
        X(this, $t, N(this, Pr).getQueryCache()),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        X(this, Tr, Cp(this.options)),
        this.state = n.state ?? N(this, Tr),
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        var n;
        return (n = N(this, st)) == null ? void 0 : n.promise
    }
    setOptions(n) {
        if (this.options = {
            ...N(this, Mo),
            ...n
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const s = Cp(this.options);
            s.data !== void 0 && (this.setData(s.data, {
                updatedAt: s.dataUpdatedAt,
                manual: !0
            }),
            X(this, Tr, s))
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && N(this, $t).remove(this)
    }
    setData(n, s) {
        const i = pc(this.state.data, n, this.options);
        return Ne(this, Xt, En).call(this, {
            data: i,
            type: "success",
            dataUpdatedAt: s == null ? void 0 : s.updatedAt,
            manual: s == null ? void 0 : s.manual
        }),
        i
    }
    setState(n, s) {
        Ne(this, Xt, En).call(this, {
            type: "setState",
            state: n,
            setStateOptions: s
        })
    }
    cancel(n) {
        var i, l;
        const s = (i = N(this, st)) == null ? void 0 : i.promise;
        return (l = N(this, st)) == null || l.cancel(n),
        s ? s.then(_t).catch(_t) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(N(this, Tr))
    }
    isActive() {
        return this.observers.some(n => Vt(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Kc || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => ar(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !tg(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        var s;
        const n = this.observers.find(i => i.shouldFetchOnWindowFocus());
        n == null || n.refetch({
            cancelRefetch: !1
        }),
        (s = N(this, st)) == null || s.continue()
    }
    onOnline() {
        var s;
        const n = this.observers.find(i => i.shouldFetchOnReconnect());
        n == null || n.refetch({
            cancelRefetch: !1
        }),
        (s = N(this, st)) == null || s.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        N(this, $t).notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(s => s !== n),
        this.observers.length || (N(this, st) && (N(this, Or) ? N(this, st).cancel({
            revert: !0
        }) : N(this, st).cancelRetry()),
        this.scheduleGc()),
        N(this, $t).notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || Ne(this, Xt, En).call(this, {
            type: "invalidate"
        })
    }
    async fetch(n, s) {
        var m, y, v, x, j, T, k, S, w, M, H, U;
        if (this.state.fetchStatus !== "idle" && ((m = N(this, st)) == null ? void 0 : m.status()) !== "rejected") {
            if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
                this.cancel({
                    silent: !0
                });
            else if (N(this, st))
                return N(this, st).continueRetry(),
                N(this, st).promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const D = this.observers.find(G => G.options.queryFn);
            D && this.setOptions(D.options)
        }
        const i = new AbortController
          , l = D => {
            Object.defineProperty(D, "signal", {
                enumerable: !0,
                get: () => (X(this, Or, !0),
                i.signal)
            })
        }
          , c = () => {
            const D = rg(this.options, s)
              , de = ( () => {
                const ge = {
                    client: N(this, Pr),
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return l(ge),
                ge
            }
            )();
            return X(this, Or, !1),
            this.options.persister ? this.options.persister(D, de, this) : D(de)
        }
          , p = ( () => {
            const D = {
                fetchOptions: s,
                options: this.options,
                queryKey: this.queryKey,
                client: N(this, Pr),
                state: this.state,
                fetchFn: c
            };
            return l(D),
            D
        }
        )();
        (y = this.options.behavior) == null || y.onFetch(p, this),
        X(this, ws, this.state),
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((v = p.fetchOptions) == null ? void 0 : v.meta)) && Ne(this, Xt, En).call(this, {
            type: "fetch",
            meta: (x = p.fetchOptions) == null ? void 0 : x.meta
        }),
        X(this, st, og({
            initialPromise: s == null ? void 0 : s.initialPromise,
            fn: p.fetchFn,
            onCancel: D => {
                D instanceof gc && D.revert && this.setState({
                    ...N(this, ws),
                    fetchStatus: "idle"
                }),
                i.abort()
            }
            ,
            onFail: (D, G) => {
                Ne(this, Xt, En).call(this, {
                    type: "failed",
                    failureCount: D,
                    error: G
                })
            }
            ,
            onPause: () => {
                Ne(this, Xt, En).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                Ne(this, Xt, En).call(this, {
                    type: "continue"
                })
            }
            ,
            retry: p.options.retry,
            retryDelay: p.options.retryDelay,
            networkMode: p.options.networkMode,
            canRun: () => !0
        }));
        try {
            const D = await N(this, st).start();
            if (D === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(D),
            (T = (j = N(this, $t).config).onSuccess) == null || T.call(j, D, this),
            (S = (k = N(this, $t).config).onSettled) == null || S.call(k, D, this.state.error, this),
            D
        } catch (D) {
            if (D instanceof gc) {
                if (D.silent)
                    return N(this, st).promise;
                if (D.revert) {
                    if (this.state.data === void 0)
                        throw D;
                    return this.state.data
                }
            }
            throw Ne(this, Xt, En).call(this, {
                type: "error",
                error: D
            }),
            (M = (w = N(this, $t).config).onError) == null || M.call(w, D, this),
            (U = (H = N(this, $t).config).onSettled) == null || U.call(H, this.state.data, D, this),
            D
        } finally {
            this.scheduleGc()
        }
    }
}
,
Tr = new WeakMap,
ws = new WeakMap,
$t = new WeakMap,
Pr = new WeakMap,
st = new WeakMap,
Mo = new WeakMap,
Or = new WeakMap,
Xt = new WeakSet,
En = function(n) {
    const s = i => {
        switch (n.type) {
        case "failed":
            return {
                ...i,
                fetchFailureCount: n.failureCount,
                fetchFailureReason: n.error
            };
        case "pause":
            return {
                ...i,
                fetchStatus: "paused"
            };
        case "continue":
            return {
                ...i,
                fetchStatus: "fetching"
            };
        case "fetch":
            return {
                ...i,
                ...ag(i.data, this.options),
                fetchMeta: n.meta ?? null
            };
        case "success":
            const l = {
                ...i,
                data: n.data,
                dataUpdateCount: i.dataUpdateCount + 1,
                dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...!n.manual && {
                    fetchStatus: "idle",
                    fetchFailureCount: 0,
                    fetchFailureReason: null
                }
            };
            return X(this, ws, n.manual ? l : void 0),
            l;
        case "error":
            const c = n.error;
            return {
                ...i,
                error: c,
                errorUpdateCount: i.errorUpdateCount + 1,
                errorUpdatedAt: Date.now(),
                fetchFailureCount: i.fetchFailureCount + 1,
                fetchFailureReason: c,
                fetchStatus: "idle",
                status: "error"
            };
        case "invalidate":
            return {
                ...i,
                isInvalidated: !0
            };
        case "setState":
            return {
                ...i,
                ...n.state
            }
        }
    }
    ;
    this.state = s(this.state),
    ut.batch( () => {
        this.observers.forEach(i => {
            i.onQueryUpdate()
        }
        ),
        N(this, $t).notify({
            query: this,
            type: "updated",
            action: n
        })
    }
    )
}
,
bm);
function ag(r, n) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: sg(n.networkMode) ? "fetching" : "paused",
        ...r === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function Cp(r) {
    const n = typeof r.initialData == "function" ? r.initialData() : r.initialData
      , s = n !== void 0
      , i = s ? typeof r.initialDataUpdatedAt == "function" ? r.initialDataUpdatedAt() : r.initialDataUpdatedAt : 0;
    return {
        data: n,
        dataUpdateCount: 0,
        dataUpdatedAt: s ? i ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: s ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Nt, _e, Fo, vt, Ar, bs, Cn, tr, Do, Ss, ks, Lr, Ir, nr, Es, Oe, _o, yc, vc, xc, wc, bc, Sc, kc, lg, Sm, jw = (Sm = class extends Bo {
    constructor(n, s) {
        super();
        me(this, Oe);
        me(this, Nt);
        me(this, _e);
        me(this, Fo);
        me(this, vt);
        me(this, Ar);
        me(this, bs);
        me(this, Cn);
        me(this, tr);
        me(this, Do);
        me(this, Ss);
        me(this, ks);
        me(this, Lr);
        me(this, Ir);
        me(this, nr);
        me(this, Es, new Set);
        this.options = s,
        X(this, Nt, n),
        X(this, tr, null),
        X(this, Cn, mc()),
        this.bindMethods(),
        this.setOptions(s)
    }
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (N(this, _e).addObserver(this),
        Np(N(this, _e), this.options) ? Ne(this, Oe, _o).call(this) : this.updateResult(),
        Ne(this, Oe, wc).call(this))
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return Ec(N(this, _e), this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return Ec(N(this, _e), this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        Ne(this, Oe, bc).call(this),
        Ne(this, Oe, Sc).call(this),
        N(this, _e).removeObserver(this)
    }
    setOptions(n) {
        const s = this.options
          , i = N(this, _e);
        if (this.options = N(this, Nt).defaultQueryOptions(n),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Vt(this.options.enabled, N(this, _e)) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        Ne(this, Oe, kc).call(this),
        N(this, _e).setOptions(this.options),
        s._defaulted && !fc(this.options, s) && N(this, Nt).getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: N(this, _e),
            observer: this
        });
        const l = this.hasListeners();
        l && _p(N(this, _e), i, this.options, s) && Ne(this, Oe, _o).call(this),
        this.updateResult(),
        l && (N(this, _e) !== i || Vt(this.options.enabled, N(this, _e)) !== Vt(s.enabled, N(this, _e)) || ar(this.options.staleTime, N(this, _e)) !== ar(s.staleTime, N(this, _e))) && Ne(this, Oe, yc).call(this);
        const c = Ne(this, Oe, vc).call(this);
        l && (N(this, _e) !== i || Vt(this.options.enabled, N(this, _e)) !== Vt(s.enabled, N(this, _e)) || c !== N(this, nr)) && Ne(this, Oe, xc).call(this, c)
    }
    getOptimisticResult(n) {
        const s = N(this, Nt).getQueryCache().build(N(this, Nt), n)
          , i = this.createResult(s, n);
        return Tw(this, i) && (X(this, vt, i),
        X(this, bs, this.options),
        X(this, Ar, N(this, _e).state)),
        i
    }
    getCurrentResult() {
        return N(this, vt)
    }
    trackResult(n, s) {
        return new Proxy(n,{
            get: (i, l) => (this.trackProp(l),
            s == null || s(l),
            l === "promise" && !this.options.experimental_prefetchInRender && N(this, Cn).status === "pending" && N(this, Cn).reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
            Reflect.get(i, l))
        })
    }
    trackProp(n) {
        N(this, Es).add(n)
    }
    getCurrentQuery() {
        return N(this, _e)
    }
    refetch({...n}={}) {
        return this.fetch({
            ...n
        })
    }
    fetchOptimistic(n) {
        const s = N(this, Nt).defaultQueryOptions(n)
          , i = N(this, Nt).getQueryCache().build(N(this, Nt), s);
        return i.fetch().then( () => this.createResult(i, s))
    }
    fetch(n) {
        return Ne(this, Oe, _o).call(this, {
            ...n,
            cancelRefetch: n.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        N(this, vt)))
    }
    createResult(n, s) {
        var Q;
        const i = N(this, _e)
          , l = this.options
          , c = N(this, vt)
          , d = N(this, Ar)
          , p = N(this, bs)
          , y = n !== i ? n.state : N(this, Fo)
          , {state: v} = n;
        let x = {
            ...v
        }, j = !1, T;
        if (s._optimisticResults) {
            const K = this.hasListeners()
              , Z = !K && Np(n, s)
              , B = K && _p(n, i, s, l);
            (Z || B) && (x = {
                ...x,
                ...ag(v.data, n.options)
            }),
            s._optimisticResults === "isRestoring" && (x.fetchStatus = "idle")
        }
        let {error: k, errorUpdatedAt: S, status: w} = x;
        T = x.data;
        let M = !1;
        if (s.placeholderData !== void 0 && T === void 0 && w === "pending") {
            let K;
            c != null && c.isPlaceholderData && s.placeholderData === (p == null ? void 0 : p.placeholderData) ? (K = c.data,
            M = !0) : K = typeof s.placeholderData == "function" ? s.placeholderData((Q = N(this, ks)) == null ? void 0 : Q.state.data, N(this, ks)) : s.placeholderData,
            K !== void 0 && (w = "success",
            T = pc(c == null ? void 0 : c.data, K, s),
            j = !0)
        }
        if (s.select && T !== void 0 && !M)
            if (c && T === (d == null ? void 0 : d.data) && s.select === N(this, Do))
                T = N(this, Ss);
            else
                try {
                    X(this, Do, s.select),
                    T = s.select(T),
                    T = pc(c == null ? void 0 : c.data, T, s),
                    X(this, Ss, T),
                    X(this, tr, null)
                } catch (K) {
                    X(this, tr, K)
                }
        N(this, tr) && (k = N(this, tr),
        T = N(this, Ss),
        S = Date.now(),
        w = "error");
        const H = x.fetchStatus === "fetching"
          , U = w === "pending"
          , D = w === "error"
          , G = U && H
          , de = T !== void 0
          , I = {
            status: w,
            fetchStatus: x.fetchStatus,
            isPending: U,
            isSuccess: w === "success",
            isError: D,
            isInitialLoading: G,
            isLoading: G,
            data: T,
            dataUpdatedAt: x.dataUpdatedAt,
            error: k,
            errorUpdatedAt: S,
            failureCount: x.fetchFailureCount,
            failureReason: x.fetchFailureReason,
            errorUpdateCount: x.errorUpdateCount,
            isFetched: x.dataUpdateCount > 0 || x.errorUpdateCount > 0,
            isFetchedAfterMount: x.dataUpdateCount > y.dataUpdateCount || x.errorUpdateCount > y.errorUpdateCount,
            isFetching: H,
            isRefetching: H && !U,
            isLoadingError: D && !de,
            isPaused: x.fetchStatus === "paused",
            isPlaceholderData: j,
            isRefetchError: D && de,
            isStale: Yc(n, s),
            refetch: this.refetch,
            promise: N(this, Cn),
            isEnabled: Vt(s.enabled, n) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const K = te => {
                I.status === "error" ? te.reject(I.error) : I.data !== void 0 && te.resolve(I.data)
            }
              , Z = () => {
                const te = X(this, Cn, I.promise = mc());
                K(te)
            }
              , B = N(this, Cn);
            switch (B.status) {
            case "pending":
                n.queryHash === i.queryHash && K(B);
                break;
            case "fulfilled":
                (I.status === "error" || I.data !== B.value) && Z();
                break;
            case "rejected":
                (I.status !== "error" || I.error !== B.reason) && Z();
                break
            }
        }
        return I
    }
    updateResult() {
        const n = N(this, vt)
          , s = this.createResult(N(this, _e), this.options);
        if (X(this, Ar, N(this, _e).state),
        X(this, bs, this.options),
        N(this, Ar).data !== void 0 && X(this, ks, N(this, _e)),
        fc(s, n))
            return;
        X(this, vt, s);
        const i = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: l} = this.options
              , c = typeof l == "function" ? l() : l;
            if (c === "all" || !c && !N(this, Es).size)
                return !0;
            const d = new Set(c ?? N(this, Es));
            return this.options.throwOnError && d.add("error"),
            Object.keys(N(this, vt)).some(p => {
                const m = p;
                return N(this, vt)[m] !== n[m] && d.has(m)
            }
            )
        }
        ;
        Ne(this, Oe, lg).call(this, {
            listeners: i()
        })
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && Ne(this, Oe, wc).call(this)
    }
}
,
Nt = new WeakMap,
_e = new WeakMap,
Fo = new WeakMap,
vt = new WeakMap,
Ar = new WeakMap,
bs = new WeakMap,
Cn = new WeakMap,
tr = new WeakMap,
Do = new WeakMap,
Ss = new WeakMap,
ks = new WeakMap,
Lr = new WeakMap,
Ir = new WeakMap,
nr = new WeakMap,
Es = new WeakMap,
Oe = new WeakSet,
_o = function(n) {
    Ne(this, Oe, kc).call(this);
    let s = N(this, _e).fetch(this.options, n);
    return n != null && n.throwOnError || (s = s.catch(_t)),
    s
}
,
yc = function() {
    Ne(this, Oe, bc).call(this);
    const n = ar(this.options.staleTime, N(this, _e));
    if (Dr || N(this, vt).isStale || !dc(n))
        return;
    const i = tg(N(this, vt).dataUpdatedAt, n) + 1;
    X(this, Lr, Cr.setTimeout( () => {
        N(this, vt).isStale || this.updateResult()
    }
    , i))
}
,
vc = function() {
    return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(N(this, _e)) : this.options.refetchInterval) ?? !1
}
,
xc = function(n) {
    Ne(this, Oe, Sc).call(this),
    X(this, nr, n),
    !(Dr || Vt(this.options.enabled, N(this, _e)) === !1 || !dc(N(this, nr)) || N(this, nr) === 0) && X(this, Ir, Cr.setInterval( () => {
        (this.options.refetchIntervalInBackground || Gc.isFocused()) && Ne(this, Oe, _o).call(this)
    }
    , N(this, nr)))
}
,
wc = function() {
    Ne(this, Oe, yc).call(this),
    Ne(this, Oe, xc).call(this, Ne(this, Oe, vc).call(this))
}
,
bc = function() {
    N(this, Lr) && (Cr.clearTimeout(N(this, Lr)),
    X(this, Lr, void 0))
}
,
Sc = function() {
    N(this, Ir) && (Cr.clearInterval(N(this, Ir)),
    X(this, Ir, void 0))
}
,
kc = function() {
    const n = N(this, Nt).getQueryCache().build(N(this, Nt), this.options);
    if (n === N(this, _e))
        return;
    const s = N(this, _e);
    X(this, _e, n),
    X(this, Fo, n.state),
    this.hasListeners() && (s == null || s.removeObserver(this),
    n.addObserver(this))
}
,
lg = function(n) {
    ut.batch( () => {
        n.listeners && this.listeners.forEach(s => {
            s(N(this, vt))
        }
        ),
        N(this, Nt).getQueryCache().notify({
            query: N(this, _e),
            type: "observerResultsUpdated"
        })
    }
    )
}
,
Sm);
function Rw(r, n) {
    return Vt(n.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && n.retryOnMount === !1)
}
function Np(r, n) {
    return Rw(r, n) || r.state.data !== void 0 && Ec(r, n, n.refetchOnMount)
}
function Ec(r, n, s) {
    if (Vt(n.enabled, r) !== !1 && ar(n.staleTime, r) !== "static") {
        const i = typeof s == "function" ? s(r) : s;
        return i === "always" || i !== !1 && Yc(r, n)
    }
    return !1
}
function _p(r, n, s, i) {
    return (r !== n || Vt(i.enabled, r) === !1) && (!s.suspense || r.state.status !== "error") && Yc(r, s)
}
function Yc(r, n) {
    return Vt(n.enabled, r) !== !1 && r.isStaleByTime(ar(n.staleTime, r))
}
function Tw(r, n) {
    return !fc(r.getCurrentResult(), n)
}
function jp(r) {
    return {
        onFetch: (n, s) => {
            var v, x, j, T, k;
            const i = n.options
              , l = (j = (x = (v = n.fetchOptions) == null ? void 0 : v.meta) == null ? void 0 : x.fetchMore) == null ? void 0 : j.direction
              , c = ((T = n.state.data) == null ? void 0 : T.pages) || []
              , d = ((k = n.state.data) == null ? void 0 : k.pageParams) || [];
            let p = {
                pages: [],
                pageParams: []
            }
              , m = 0;
            const y = async () => {
                let S = !1;
                const w = U => {
                    Object.defineProperty(U, "signal", {
                        enumerable: !0,
                        get: () => (n.signal.aborted ? S = !0 : n.signal.addEventListener("abort", () => {
                            S = !0
                        }
                        ),
                        n.signal)
                    })
                }
                  , M = rg(n.options, n.fetchOptions)
                  , H = async (U, D, G) => {
                    if (S)
                        return Promise.reject();
                    if (D == null && U.pages.length)
                        return Promise.resolve(U);
                    const ge = ( () => {
                        const Z = {
                            client: n.client,
                            queryKey: n.queryKey,
                            pageParam: D,
                            direction: G ? "backward" : "forward",
                            meta: n.options.meta
                        };
                        return w(Z),
                        Z
                    }
                    )()
                      , I = await M(ge)
                      , {maxPages: Q} = n.options
                      , K = G ? ww : xw;
                    return {
                        pages: K(U.pages, I, Q),
                        pageParams: K(U.pageParams, D, Q)
                    }
                }
                ;
                if (l && c.length) {
                    const U = l === "backward"
                      , D = U ? Pw : Rp
                      , G = {
                        pages: c,
                        pageParams: d
                    }
                      , de = D(i, G);
                    p = await H(G, de, U)
                } else {
                    const U = r ?? c.length;
                    do {
                        const D = m === 0 ? d[0] ?? i.initialPageParam : Rp(i, p);
                        if (m > 0 && D == null)
                            break;
                        p = await H(p, D),
                        m++
                    } while (m < U)
                }
                return p
            }
            ;
            n.options.persister ? n.fetchFn = () => {
                var S, w;
                return (w = (S = n.options).persister) == null ? void 0 : w.call(S, y, {
                    client: n.client,
                    queryKey: n.queryKey,
                    meta: n.options.meta,
                    signal: n.signal
                }, s)
            }
            : n.fetchFn = y
        }
    }
}
function Rp(r, {pages: n, pageParams: s}) {
    const i = n.length - 1;
    return n.length > 0 ? r.getNextPageParam(n[i], n, s[i], s) : void 0
}
function Pw(r, {pages: n, pageParams: s}) {
    var i;
    return n.length > 0 ? (i = r.getPreviousPageParam) == null ? void 0 : i.call(r, n[0], n, s[0], s) : void 0
}
var Uo, cn, xt, Mr, dn, Yn, km, Ow = (km = class extends ig {
    constructor(n) {
        super();
        me(this, dn);
        me(this, Uo);
        me(this, cn);
        me(this, xt);
        me(this, Mr);
        X(this, Uo, n.client),
        this.mutationId = n.mutationId,
        X(this, xt, n.mutationCache),
        X(this, cn, []),
        this.state = n.state || Aw(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        N(this, cn).includes(n) || (N(this, cn).push(n),
        this.clearGcTimeout(),
        N(this, xt).notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        X(this, cn, N(this, cn).filter(s => s !== n)),
        this.scheduleGc(),
        N(this, xt).notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        N(this, cn).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, xt).remove(this))
    }
    continue() {
        var n;
        return ((n = N(this, Mr)) == null ? void 0 : n.continue()) ?? this.execute(this.state.variables)
    }
    async execute(n) {
        var d, p, m, y, v, x, j, T, k, S, w, M, H, U, D, G, de, ge, I, Q;
        const s = () => {
            Ne(this, dn, Yn).call(this, {
                type: "continue"
            })
        }
          , i = {
            client: N(this, Uo),
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        X(this, Mr, og({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, i) : Promise.reject(new Error("No mutationFn found")),
            onFail: (K, Z) => {
                Ne(this, dn, Yn).call(this, {
                    type: "failed",
                    failureCount: K,
                    error: Z
                })
            }
            ,
            onPause: () => {
                Ne(this, dn, Yn).call(this, {
                    type: "pause"
                })
            }
            ,
            onContinue: s,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => N(this, xt).canRun(this)
        }));
        const l = this.state.status === "pending"
          , c = !N(this, Mr).canStart();
        try {
            if (l)
                s();
            else {
                Ne(this, dn, Yn).call(this, {
                    type: "pending",
                    variables: n,
                    isPaused: c
                }),
                await ((p = (d = N(this, xt).config).onMutate) == null ? void 0 : p.call(d, n, this, i));
                const Z = await ((y = (m = this.options).onMutate) == null ? void 0 : y.call(m, n, i));
                Z !== this.state.context && Ne(this, dn, Yn).call(this, {
                    type: "pending",
                    context: Z,
                    variables: n,
                    isPaused: c
                })
            }
            const K = await N(this, Mr).start();
            return await ((x = (v = N(this, xt).config).onSuccess) == null ? void 0 : x.call(v, K, n, this.state.context, this, i)),
            await ((T = (j = this.options).onSuccess) == null ? void 0 : T.call(j, K, n, this.state.context, i)),
            await ((S = (k = N(this, xt).config).onSettled) == null ? void 0 : S.call(k, K, null, this.state.variables, this.state.context, this, i)),
            await ((M = (w = this.options).onSettled) == null ? void 0 : M.call(w, K, null, n, this.state.context, i)),
            Ne(this, dn, Yn).call(this, {
                type: "success",
                data: K
            }),
            K
        } catch (K) {
            try {
                throw await ((U = (H = N(this, xt).config).onError) == null ? void 0 : U.call(H, K, n, this.state.context, this, i)),
                await ((G = (D = this.options).onError) == null ? void 0 : G.call(D, K, n, this.state.context, i)),
                await ((ge = (de = N(this, xt).config).onSettled) == null ? void 0 : ge.call(de, void 0, K, this.state.variables, this.state.context, this, i)),
                await ((Q = (I = this.options).onSettled) == null ? void 0 : Q.call(I, void 0, K, n, this.state.context, i)),
                K
            } finally {
                Ne(this, dn, Yn).call(this, {
                    type: "error",
                    error: K
                })
            }
        } finally {
            N(this, xt).runNext(this)
        }
    }
}
,
Uo = new WeakMap,
cn = new WeakMap,
xt = new WeakMap,
Mr = new WeakMap,
dn = new WeakSet,
Yn = function(n) {
    const s = i => {
        switch (n.type) {
        case "failed":
            return {
                ...i,
                failureCount: n.failureCount,
                failureReason: n.error
            };
        case "pause":
            return {
                ...i,
                isPaused: !0
            };
        case "continue":
            return {
                ...i,
                isPaused: !1
            };
        case "pending":
            return {
                ...i,
                context: n.context,
                data: void 0,
                failureCount: 0,
                failureReason: null,
                error: null,
                isPaused: n.isPaused,
                status: "pending",
                variables: n.variables,
                submittedAt: Date.now()
            };
        case "success":
            return {
                ...i,
                data: n.data,
                failureCount: 0,
                failureReason: null,
                error: null,
                status: "success",
                isPaused: !1
            };
        case "error":
            return {
                ...i,
                data: void 0,
                error: n.error,
                failureCount: i.failureCount + 1,
                failureReason: n.error,
                isPaused: !1,
                status: "error"
            }
        }
    }
    ;
    this.state = s(this.state),
    ut.batch( () => {
        N(this, cn).forEach(i => {
            i.onMutationUpdate(n)
        }
        ),
        N(this, xt).notify({
            mutation: this,
            type: "updated",
            action: n
        })
    }
    )
}
,
km);
function Aw() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Nn, Zt, zo, Em, Lw = (Em = class extends Bo {
    constructor(n={}) {
        super();
        me(this, Nn);
        me(this, Zt);
        me(this, zo);
        this.config = n,
        X(this, Nn, new Set),
        X(this, Zt, new Map),
        X(this, zo, 0)
    }
    build(n, s, i) {
        const l = new Ow({
            client: n,
            mutationCache: this,
            mutationId: ++ra(this, zo)._,
            options: n.defaultMutationOptions(s),
            state: i
        });
        return this.add(l),
        l
    }
    add(n) {
        N(this, Nn).add(n);
        const s = aa(n);
        if (typeof s == "string") {
            const i = N(this, Zt).get(s);
            i ? i.push(n) : N(this, Zt).set(s, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (N(this, Nn).delete(n)) {
            const s = aa(n);
            if (typeof s == "string") {
                const i = N(this, Zt).get(s);
                if (i)
                    if (i.length > 1) {
                        const l = i.indexOf(n);
                        l !== -1 && i.splice(l, 1)
                    } else
                        i[0] === n && N(this, Zt).delete(s)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const s = aa(n);
        if (typeof s == "string") {
            const i = N(this, Zt).get(s)
              , l = i == null ? void 0 : i.find(c => c.state.status === "pending");
            return !l || l === n
        } else
            return !0
    }
    runNext(n) {
        var i;
        const s = aa(n);
        if (typeof s == "string") {
            const l = (i = N(this, Zt).get(s)) == null ? void 0 : i.find(c => c !== n && c.state.isPaused);
            return (l == null ? void 0 : l.continue()) ?? Promise.resolve()
        } else
            return Promise.resolve()
    }
    clear() {
        ut.batch( () => {
            N(this, Nn).forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            N(this, Nn).clear(),
            N(this, Zt).clear()
        }
        )
    }
    getAll() {
        return Array.from(N(this, Nn))
    }
    find(n) {
        const s = {
            exact: !0,
            ...n
        };
        return this.getAll().find(i => Sp(s, i))
    }
    findAll(n={}) {
        return this.getAll().filter(s => Sp(n, s))
    }
    notify(n) {
        ut.batch( () => {
            this.listeners.forEach(s => {
                s(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(s => s.state.isPaused);
        return ut.batch( () => Promise.all(n.map(s => s.continue().catch(_t))))
    }
}
,
Nn = new WeakMap,
Zt = new WeakMap,
zo = new WeakMap,
Em);
function aa(r) {
    var n;
    return (n = r.options.scope) == null ? void 0 : n.id
}
var fn, Cm, Iw = (Cm = class extends Bo {
    constructor(n={}) {
        super();
        me(this, fn);
        this.config = n,
        X(this, fn, new Map)
    }
    build(n, s, i) {
        const l = s.queryKey
          , c = s.queryHash ?? Qc(l, s);
        let d = this.get(c);
        return d || (d = new _w({
            client: n,
            queryKey: l,
            queryHash: c,
            options: n.defaultQueryOptions(s),
            state: i,
            defaultOptions: n.getQueryDefaults(l)
        }),
        this.add(d)),
        d
    }
    add(n) {
        N(this, fn).has(n.queryHash) || (N(this, fn).set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const s = N(this, fn).get(n.queryHash);
        s && (n.destroy(),
        s === n && N(this, fn).delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        ut.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return N(this, fn).get(n)
    }
    getAll() {
        return [...N(this, fn).values()]
    }
    find(n) {
        const s = {
            exact: !0,
            ...n
        };
        return this.getAll().find(i => bp(s, i))
    }
    findAll(n={}) {
        const s = this.getAll();
        return Object.keys(n).length > 0 ? s.filter(i => bp(n, i)) : s
    }
    notify(n) {
        ut.batch( () => {
            this.listeners.forEach(s => {
                s(n)
            }
            )
        }
        )
    }
    onFocus() {
        ut.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        ut.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
,
fn = new WeakMap,
Cm), $e, rr, sr, Cs, Ns, or, _s, js, Nm, Mw = (Nm = class {
    constructor(r={}) {
        me(this, $e);
        me(this, rr);
        me(this, sr);
        me(this, Cs);
        me(this, Ns);
        me(this, or);
        me(this, _s);
        me(this, js);
        X(this, $e, r.queryCache || new Iw),
        X(this, rr, r.mutationCache || new Lw),
        X(this, sr, r.defaultOptions || {}),
        X(this, Cs, new Map),
        X(this, Ns, new Map),
        X(this, or, 0)
    }
    mount() {
        ra(this, or)._++,
        N(this, or) === 1 && (X(this, _s, Gc.subscribe(async r => {
            r && (await this.resumePausedMutations(),
            N(this, $e).onFocus())
        }
        )),
        X(this, js, _a.subscribe(async r => {
            r && (await this.resumePausedMutations(),
            N(this, $e).onOnline())
        }
        )))
    }
    unmount() {
        var r, n;
        ra(this, or)._--,
        N(this, or) === 0 && ((r = N(this, _s)) == null || r.call(this),
        X(this, _s, void 0),
        (n = N(this, js)) == null || n.call(this),
        X(this, js, void 0))
    }
    isFetching(r) {
        return N(this, $e).findAll({
            ...r,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(r) {
        return N(this, rr).findAll({
            ...r,
            status: "pending"
        }).length
    }
    getQueryData(r) {
        var s;
        const n = this.defaultQueryOptions({
            queryKey: r
        });
        return (s = N(this, $e).get(n.queryHash)) == null ? void 0 : s.state.data
    }
    ensureQueryData(r) {
        const n = this.defaultQueryOptions(r)
          , s = N(this, $e).build(this, n)
          , i = s.state.data;
        return i === void 0 ? this.fetchQuery(r) : (r.revalidateIfStale && s.isStaleByTime(ar(n.staleTime, s)) && this.prefetchQuery(n),
        Promise.resolve(i))
    }
    getQueriesData(r) {
        return N(this, $e).findAll(r).map( ({queryKey: n, state: s}) => {
            const i = s.data;
            return [n, i]
        }
        )
    }
    setQueryData(r, n, s) {
        const i = this.defaultQueryOptions({
            queryKey: r
        })
          , l = N(this, $e).get(i.queryHash)
          , c = l == null ? void 0 : l.state.data
          , d = gw(n, c);
        if (d !== void 0)
            return N(this, $e).build(this, i).setData(d, {
                ...s,
                manual: !0
            })
    }
    setQueriesData(r, n, s) {
        return ut.batch( () => N(this, $e).findAll(r).map( ({queryKey: i}) => [i, this.setQueryData(i, n, s)]))
    }
    getQueryState(r) {
        var s;
        const n = this.defaultQueryOptions({
            queryKey: r
        });
        return (s = N(this, $e).get(n.queryHash)) == null ? void 0 : s.state
    }
    removeQueries(r) {
        const n = N(this, $e);
        ut.batch( () => {
            n.findAll(r).forEach(s => {
                n.remove(s)
            }
            )
        }
        )
    }
    resetQueries(r, n) {
        const s = N(this, $e);
        return ut.batch( () => (s.findAll(r).forEach(i => {
            i.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...r
        }, n)))
    }
    cancelQueries(r, n={}) {
        const s = {
            revert: !0,
            ...n
        }
          , i = ut.batch( () => N(this, $e).findAll(r).map(l => l.cancel(s)));
        return Promise.all(i).then(_t).catch(_t)
    }
    invalidateQueries(r, n={}) {
        return ut.batch( () => (N(this, $e).findAll(r).forEach(s => {
            s.invalidate()
        }
        ),
        (r == null ? void 0 : r.refetchType) === "none" ? Promise.resolve() : this.refetchQueries({
            ...r,
            type: (r == null ? void 0 : r.refetchType) ?? (r == null ? void 0 : r.type) ?? "active"
        }, n)))
    }
    refetchQueries(r, n={}) {
        const s = {
            ...n,
            cancelRefetch: n.cancelRefetch ?? !0
        }
          , i = ut.batch( () => N(this, $e).findAll(r).filter(l => !l.isDisabled() && !l.isStatic()).map(l => {
            let c = l.fetch(void 0, s);
            return s.throwOnError || (c = c.catch(_t)),
            l.state.fetchStatus === "paused" ? Promise.resolve() : c
        }
        ));
        return Promise.all(i).then(_t)
    }
    fetchQuery(r) {
        const n = this.defaultQueryOptions(r);
        n.retry === void 0 && (n.retry = !1);
        const s = N(this, $e).build(this, n);
        return s.isStaleByTime(ar(n.staleTime, s)) ? s.fetch(n) : Promise.resolve(s.state.data)
    }
    prefetchQuery(r) {
        return this.fetchQuery(r).then(_t).catch(_t)
    }
    fetchInfiniteQuery(r) {
        return r.behavior = jp(r.pages),
        this.fetchQuery(r)
    }
    prefetchInfiniteQuery(r) {
        return this.fetchInfiniteQuery(r).then(_t).catch(_t)
    }
    ensureInfiniteQueryData(r) {
        return r.behavior = jp(r.pages),
        this.ensureQueryData(r)
    }
    resumePausedMutations() {
        return _a.isOnline() ? N(this, rr).resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return N(this, $e)
    }
    getMutationCache() {
        return N(this, rr)
    }
    getDefaultOptions() {
        return N(this, sr)
    }
    setDefaultOptions(r) {
        X(this, sr, r)
    }
    setQueryDefaults(r, n) {
        N(this, Cs).set(Oo(r), {
            queryKey: r,
            defaultOptions: n
        })
    }
    getQueryDefaults(r) {
        const n = [...N(this, Cs).values()]
          , s = {};
        return n.forEach(i => {
            Ao(r, i.queryKey) && Object.assign(s, i.defaultOptions)
        }
        ),
        s
    }
    setMutationDefaults(r, n) {
        N(this, Ns).set(Oo(r), {
            mutationKey: r,
            defaultOptions: n
        })
    }
    getMutationDefaults(r) {
        const n = [...N(this, Ns).values()]
          , s = {};
        return n.forEach(i => {
            Ao(r, i.mutationKey) && Object.assign(s, i.defaultOptions)
        }
        ),
        s
    }
    defaultQueryOptions(r) {
        if (r._defaulted)
            return r;
        const n = {
            ...N(this, sr).queries,
            ...this.getQueryDefaults(r.queryKey),
            ...r,
            _defaulted: !0
        };
        return n.queryHash || (n.queryHash = Qc(n.queryKey, n)),
        n.refetchOnReconnect === void 0 && (n.refetchOnReconnect = n.networkMode !== "always"),
        n.throwOnError === void 0 && (n.throwOnError = !!n.suspense),
        !n.networkMode && n.persister && (n.networkMode = "offlineFirst"),
        n.queryFn === Kc && (n.enabled = !1),
        n
    }
    defaultMutationOptions(r) {
        return r != null && r._defaulted ? r : {
            ...N(this, sr).mutations,
            ...(r == null ? void 0 : r.mutationKey) && this.getMutationDefaults(r.mutationKey),
            ...r,
            _defaulted: !0
        }
    }
    clear() {
        N(this, $e).clear(),
        N(this, rr).clear()
    }
}
,
$e = new WeakMap,
rr = new WeakMap,
sr = new WeakMap,
Cs = new WeakMap,
Ns = new WeakMap,
or = new WeakMap,
_s = new WeakMap,
js = new WeakMap,
Nm), ug = C.createContext(void 0), Fw = r => {
    const n = C.useContext(ug);
    if (!n)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return n
}
, Dw = ({client: r, children: n}) => (C.useEffect( () => (r.mount(),
() => {
    r.unmount()
}
), [r]),
h.jsx(ug.Provider, {
    value: r,
    children: n
})), cg = C.createContext(!1), Uw = () => C.useContext(cg);
cg.Provider;
function zw() {
    let r = !1;
    return {
        clearReset: () => {
            r = !1
        }
        ,
        reset: () => {
            r = !0
        }
        ,
        isReset: () => r
    }
}
var Bw = C.createContext(zw())
  , $w = () => C.useContext(Bw)
  , Vw = (r, n) => {
    (r.suspense || r.throwOnError || r.experimental_prefetchInRender) && (n.isReset() || (r.retryOnMount = !1))
}
  , qw = r => {
    C.useEffect( () => {
        r.clearReset()
    }
    , [r])
}
  , Hw = ({result: r, errorResetBoundary: n, throwOnError: s, query: i, suspense: l}) => r.isError && !n.isReset() && !r.isFetching && i && (l && r.data === void 0 || bw(s, [r.error, i]))
  , Ww = r => {
    if (r.suspense) {
        const s = l => l === "static" ? l : Math.max(l ?? 1e3, 1e3)
          , i = r.staleTime;
        r.staleTime = typeof i == "function" ? (...l) => s(i(...l)) : s(i),
        typeof r.gcTime == "number" && (r.gcTime = Math.max(r.gcTime, 1e3))
    }
}
  , Qw = (r, n) => r.isLoading && r.isFetching && !n
  , Kw = (r, n) => (r == null ? void 0 : r.suspense) && n.isPending
  , Tp = (r, n, s) => n.fetchOptimistic(r).catch( () => {
    s.clearReset()
}
);
function Gw(r, n, s) {
    var x, j, T, k, S;
    const i = Uw()
      , l = $w()
      , c = Fw()
      , d = c.defaultQueryOptions(r);
    (j = (x = c.getDefaultOptions().queries) == null ? void 0 : x._experimental_beforeQuery) == null || j.call(x, d),
    d._optimisticResults = i ? "isRestoring" : "optimistic",
    Ww(d),
    Vw(d, l),
    qw(l);
    const p = !c.getQueryCache().get(d.queryHash)
      , [m] = C.useState( () => new n(c,d))
      , y = m.getOptimisticResult(d)
      , v = !i && r.subscribed !== !1;
    if (C.useSyncExternalStore(C.useCallback(w => {
        const M = v ? m.subscribe(ut.batchCalls(w)) : _t;
        return m.updateResult(),
        M
    }
    , [m, v]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    C.useEffect( () => {
        m.setOptions(d)
    }
    , [d, m]),
    Kw(d, y))
        throw Tp(d, m, l);
    if (Hw({
        result: y,
        errorResetBoundary: l,
        throwOnError: d.throwOnError,
        query: c.getQueryCache().get(d.queryHash),
        suspense: d.suspense
    }))
        throw y.error;
    if ((k = (T = c.getDefaultOptions().queries) == null ? void 0 : T._experimental_afterQuery) == null || k.call(T, d, y),
    d.experimental_prefetchInRender && !Dr && Qw(y, i)) {
        const w = p ? Tp(d, m, l) : (S = c.getQueryCache().get(d.queryHash)) == null ? void 0 : S.promise;
        w == null || w.catch(_t).finally( () => {
            m.updateResult()
        }
        )
    }
    return d.notifyOnChangeProps ? y : m.trackResult(y)
}
function Yw(r, n) {
    return Gw(r, jw)
}
const Jw = new Mw({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: !1,
            retry: 1
        }
    }
});
function Xw() {
    const [r,n] = C.useState(!1)
      , s = C.useRef(!1)
      , [i,l] = C.useState(!1)
      , c = C.useRef(!1)
      , [d,p] = C.useState(!1)
      , m = C.useRef(!1)
      , y = C.useRef([])
      , v = C.useRef([])
      , x = C.useRef([])
      , j = C.useRef(null)
      , T = (I=!1) => {
        const Q = document.createElement("div");
        return Q.style.position = "absolute",
        Q.style.pointerEvents = "none",
        Q.style.transition = "all 0.1s ease-in-out",
        Q.style.zIndex = "9999",
        I ? Q.style.border = "2px solid #2563EB" : (Q.style.border = "2px solid #95a5fc",
        Q.style.backgroundColor = "rgba(99, 102, 241, 0.05)"),
        Q
    }
      , k = (I, Q, K=!1) => {
        if (!Q || !s.current)
            return;
        Q.offsetWidth;
        const Z = Q.getBoundingClientRect();
        I.style.top = `${Z.top + window.scrollY}px`,
        I.style.left = `${Z.left + window.scrollX}px`,
        I.style.width = `${Z.width}px`,
        I.style.height = `${Z.height}px`;
        let B = I.querySelector("div");
        B || (B = document.createElement("div"),
        B.textContent = Q.tagName.toLowerCase(),
        B.style.position = "absolute",
        B.style.top = "-27px",
        B.style.left = "-2px",
        B.style.padding = "2px 8px",
        B.style.fontSize = "11px",
        B.style.fontWeight = K ? "500" : "400",
        B.style.color = K ? "#ffffff" : "#526cff",
        B.style.backgroundColor = K ? "#526cff" : "#DBEAFE",
        B.style.borderRadius = "3px",
        B.style.boxShadow = "none",
        B.style.minWidth = "24px",
        B.style.textAlign = "center",
        I.appendChild(B))
    }
      , S = I => {
        if (!I)
            return [];
        const Q = [...document.querySelectorAll(`[data-source-location="${I}"]`)];
        return Q.length > 0 ? Q : [...document.querySelectorAll(`[data-visual-selector-id="${I}"]`)]
    }
      , w = () => {
        y.current.forEach(I => {
            I && I.parentNode && I.remove()
        }
        ),
        y.current = [],
        x.current = []
    }
      , M = I => {
        if (!s.current || c.current)
            return;
        if (m.current) {
            w();
            return
        }
        if (I.target.tagName.toLowerCase() === "path") {
            w();
            return
        }
        const Q = I.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!Q) {
            w();
            return
        }
        const K = Q.dataset.sourceLocation || Q.dataset.visualSelectorId;
        if (Q.dataset.sourceLocation,
        j.current === K) {
            w();
            return
        }
        const Z = S(K);
        w(),
        Z.forEach(B => {
            const te = T(!1);
            document.body.appendChild(te),
            y.current.push(te),
            k(te, B)
        }
        ),
        x.current = Z
    }
      , H = () => {
        c.current || w()
    }
      , U = I => {
        var fe;
        if (!s.current)
            return;
        if (m.current) {
            I.preventDefault(),
            I.stopPropagation(),
            I.stopImmediatePropagation(),
            window.parent.postMessage({
                type: "close-dropdowns"
            }, "*");
            return
        }
        if (I.target.tagName.toLowerCase() === "path")
            return;
        I.preventDefault(),
        I.stopPropagation(),
        I.stopImmediatePropagation();
        const Q = I.target.closest("[data-source-location], [data-visual-selector-id]");
        if (!Q)
            return;
        const K = Q.dataset.sourceLocation || Q.dataset.visualSelectorId;
        Q.dataset.sourceLocation,
        v.current.forEach(ie => {
            ie && ie.parentNode && ie.remove()
        }
        ),
        v.current = [],
        S(K).forEach(ie => {
            const we = T(!0);
            document.body.appendChild(we),
            v.current.push(we),
            k(we, ie, !0)
        }
        ),
        j.current = K,
        w();
        const B = Q.getBoundingClientRect()
          , te = {
            top: B.top,
            left: B.left,
            right: B.right,
            bottom: B.bottom,
            width: B.width,
            height: B.height,
            centerX: B.left + B.width / 2,
            centerY: B.top + B.height / 2
        }
          , Ee = {
            type: "element-selected",
            tagName: Q.tagName,
            classes: ((fe = Q.className) == null ? void 0 : fe.baseVal) || Q.className || "",
            visualSelectorId: K,
            content: Q.innerText,
            dataSourceLocation: Q.dataset.sourceLocation,
            isDynamicContent: Q.dataset.dynamicContent === "true",
            linenumber: Q.dataset.linenumber,
            filename: Q.dataset.filename,
            position: te
        };
        window.parent.postMessage(Ee, "*")
    }
      , D = () => {
        v.current.forEach(I => {
            I && I.parentNode && I.remove()
        }
        ),
        v.current = [],
        j.current = null
    }
      , G = (I, Q, K=!1) => {
        const Z = S(I);
        Z.length !== 0 && (Z.forEach(B => {
            var te;
            if (K)
                B.className = Q;
            else {
                const Ee = ((te = B.className) == null ? void 0 : te.baseVal) || B.className || "";
                B.className = Km(Ee, Q)
            }
        }
        ),
        setTimeout( () => {
            var B, te;
            j.current === I && v.current.forEach( (Ee, fe) => {
                fe < Z.length && k(Ee, Z[fe])
            }
            ),
            x.current.length > 0 && ((te = (B = x.current[0]) == null ? void 0 : B.dataset) == null ? void 0 : te.visualSelectorId) === I && y.current.forEach( (fe, ie) => {
                ie < x.current.length && k(fe, x.current[ie])
            }
            )
        }
        , 50))
    }
      , de = (I, Q) => {
        const K = S(I);
        K.length !== 0 && (K.forEach(Z => {
            Z.innerText = Q
        }
        ),
        setTimeout( () => {
            j.current === I && v.current.forEach( (Z, B) => {
                B < K.length && k(Z, K[B])
            }
            )
        }
        , 50))
    }
      , ge = I => {
        n(I),
        s.current = I,
        I ? (document.body.style.cursor = "crosshair",
        document.addEventListener("mouseover", M),
        document.addEventListener("mouseout", H),
        document.addEventListener("click", U, !0)) : (w(),
        v.current.forEach(Q => {
            Q && Q.parentNode && Q.remove()
        }
        ),
        v.current = [],
        x.current = [],
        j.current = null,
        document.body.style.cursor = "default",
        document.removeEventListener("mouseover", M),
        document.removeEventListener("mouseout", H),
        document.removeEventListener("click", U, !0))
    }
    ;
    return C.useEffect( () => {
        document.querySelectorAll("[data-linenumber]:not([data-visual-selector-id])").forEach( (Z, B) => {
            const te = `visual-id-${Z.dataset.filename}-${Z.dataset.linenumber}-${B}`;
            Z.dataset.visualSelectorId = te
        }
        );
        const Q = () => {
            if (j.current) {
                const Z = S(j.current);
                if (Z.length > 0) {
                    const te = Z[0].getBoundingClientRect()
                      , Ee = window.innerHeight
                      , fe = window.innerWidth
                      , ie = te.top < Ee && te.bottom > 0 && te.left < fe && te.right > 0
                      , we = {
                        top: te.top,
                        left: te.left,
                        right: te.right,
                        bottom: te.bottom,
                        width: te.width,
                        height: te.height,
                        centerX: te.left + te.width / 2,
                        centerY: te.top + te.height / 2
                    };
                    window.parent.postMessage({
                        type: "element-position-update",
                        position: we,
                        isInViewport: ie,
                        visualSelectorId: j.current
                    }, "*")
                }
            }
        }
          , K = Z => {
            const B = Z.data;
            switch (B.type) {
            case "toggle-visual-edit-mode":
                ge(B.data.enabled);
                break;
            case "update-classes":
                B.data && B.data.classes !== void 0 ? G(B.data.visualSelectorId, B.data.classes, B.data.replace || !1) : console.warn("[Agent] Invalid update-classes message:", B);
                break;
            case "unselect-element":
                D();
                break;
            case "refresh-page":
                window.location.reload();
                break;
            case "update-content":
                B.data && B.data.content !== void 0 ? de(B.data.visualSelectorId, B.data.content) : console.warn("[Agent] Invalid update-content message:", B);
                break;
            case "request-element-position":
                if (j.current) {
                    const te = S(j.current);
                    if (te.length > 0) {
                        const fe = te[0].getBoundingClientRect()
                          , ie = window.innerHeight
                          , we = window.innerWidth
                          , F = fe.top < ie && fe.bottom > 0 && fe.left < we && fe.right > 0
                          , ue = {
                            top: fe.top,
                            left: fe.left,
                            right: fe.right,
                            bottom: fe.bottom,
                            width: fe.width,
                            height: fe.height,
                            centerX: fe.left + fe.width / 2,
                            centerY: fe.top + fe.height / 2
                        };
                        window.parent.postMessage({
                            type: "element-position-update",
                            position: ue,
                            isInViewport: F,
                            visualSelectorId: j.current
                        }, "*")
                    }
                }
                break;
            case "popover-drag-state":
                B.data && B.data.isDragging !== void 0 && (l(B.data.isDragging),
                c.current = B.data.isDragging,
                B.data.isDragging && w());
                break;
            case "dropdown-state":
                B.data && B.data.isOpen !== void 0 && (p(B.data.isOpen),
                m.current = B.data.isOpen,
                B.data.isOpen && w());
                break
            }
        }
        ;
        return window.addEventListener("message", K),
        window.addEventListener("scroll", Q, !0),
        document.addEventListener("scroll", Q, !0),
        window.parent.postMessage({
            type: "visual-edit-agent-ready"
        }, "*"),
        () => {
            window.removeEventListener("message", K),
            window.removeEventListener("scroll", Q, !0),
            document.removeEventListener("scroll", Q, !0),
            document.removeEventListener("mouseover", M),
            document.removeEventListener("mouseout", H),
            document.removeEventListener("click", U, !0),
            w(),
            v.current.forEach(Z => {
                Z && Z.parentNode && Z.remove()
            }
            )
        }
    }
    , []),
    C.useEffect( () => {
        s.current = r
    }
    , [r]),
    C.useEffect( () => {
        c.current = i
    }
    , [i]),
    C.useEffect( () => {
        m.current = d
    }
    , [d]),
    C.useEffect( () => {
        const I = () => {
            if (j.current) {
                const K = S(j.current);
                v.current.forEach( (Z, B) => {
                    B < K.length && k(Z, K[B])
                }
                )
            }
            x.current.length > 0 && y.current.forEach( (K, Z) => {
                Z < x.current.length && k(K, x.current[Z])
            }
            )
        }
          , Q = new MutationObserver(K => {
            K.some(B => {
                const te = fe => {
                    if (fe.nodeType === Node.ELEMENT_NODE) {
                        if (fe.dataset && fe.dataset.visualSelectorId)
                            return !0;
                        for (let ie = 0; ie < fe.children.length; ie++)
                            if (te(fe.children[ie]))
                                return !0
                    }
                    return !1
                }
                ;
                return B.type === "attributes" && (B.attributeName === "style" || B.attributeName === "class" || B.attributeName === "width" || B.attributeName === "height") && te(B.target)
            }
            ) && setTimeout(I, 50)
        }
        );
        return Q.observe(document.body, {
            attributes: !0,
            childList: !0,
            subtree: !0,
            attributeFilter: ["style", "class", "width", "height"]
        }),
        window.addEventListener("resize", I),
        window.addEventListener("scroll", I),
        () => {
            window.removeEventListener("resize", I),
            window.removeEventListener("scroll", I),
            Q.disconnect()
        }
    }
    , []),
    null
}
jm();
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Lo() {
    return Lo = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i])
        }
        return r
    }
    ,
    Lo.apply(this, arguments)
}
var ir;
(function(r) {
    r.Pop = "POP",
    r.Push = "PUSH",
    r.Replace = "REPLACE"
}
)(ir || (ir = {}));
const Pp = "popstate";
function Zw(r) {
    r === void 0 && (r = {});
    function n(i, l) {
        let {pathname: c, search: d, hash: p} = i.location;
        return Cc("", {
            pathname: c,
            search: d,
            hash: p
        }, l.state && l.state.usr || null, l.state && l.state.key || "default")
    }
    function s(i, l) {
        return typeof l == "string" ? l : ja(l)
    }
    return t1(n, s, null, r)
}
function Ye(r, n) {
    if (r === !1 || r === null || typeof r > "u")
        throw new Error(n)
}
function dg(r, n) {
    if (!r) {
        typeof console < "u" && console.warn(n);
        try {
            throw new Error(n)
        } catch {}
    }
}
function e1() {
    return Math.random().toString(36).substr(2, 8)
}
function Op(r, n) {
    return {
        usr: r.state,
        key: r.key,
        idx: n
    }
}
function Cc(r, n, s, i) {
    return s === void 0 && (s = null),
    Lo({
        pathname: typeof r == "string" ? r : r.pathname,
        search: "",
        hash: ""
    }, typeof n == "string" ? Os(n) : n, {
        state: s,
        key: n && n.key || i || e1()
    })
}
function ja(r) {
    let {pathname: n="/", search: s="", hash: i=""} = r;
    return s && s !== "?" && (n += s.charAt(0) === "?" ? s : "?" + s),
    i && i !== "#" && (n += i.charAt(0) === "#" ? i : "#" + i),
    n
}
function Os(r) {
    let n = {};
    if (r) {
        let s = r.indexOf("#");
        s >= 0 && (n.hash = r.substr(s),
        r = r.substr(0, s));
        let i = r.indexOf("?");
        i >= 0 && (n.search = r.substr(i),
        r = r.substr(0, i)),
        r && (n.pathname = r)
    }
    return n
}
function t1(r, n, s, i) {
    i === void 0 && (i = {});
    let {window: l=document.defaultView, v5Compat: c=!1} = i
      , d = l.history
      , p = ir.Pop
      , m = null
      , y = v();
    y == null && (y = 0,
    d.replaceState(Lo({}, d.state, {
        idx: y
    }), ""));
    function v() {
        return (d.state || {
            idx: null
        }).idx
    }
    function x() {
        p = ir.Pop;
        let w = v()
          , M = w == null ? null : w - y;
        y = w,
        m && m({
            action: p,
            location: S.location,
            delta: M
        })
    }
    function j(w, M) {
        p = ir.Push;
        let H = Cc(S.location, w, M);
        y = v() + 1;
        let U = Op(H, y)
          , D = S.createHref(H);
        try {
            d.pushState(U, "", D)
        } catch (G) {
            if (G instanceof DOMException && G.name === "DataCloneError")
                throw G;
            l.location.assign(D)
        }
        c && m && m({
            action: p,
            location: S.location,
            delta: 1
        })
    }
    function T(w, M) {
        p = ir.Replace;
        let H = Cc(S.location, w, M);
        y = v();
        let U = Op(H, y)
          , D = S.createHref(H);
        d.replaceState(U, "", D),
        c && m && m({
            action: p,
            location: S.location,
            delta: 0
        })
    }
    function k(w) {
        let M = l.location.origin !== "null" ? l.location.origin : l.location.href
          , H = typeof w == "string" ? w : ja(w);
        return H = H.replace(/ $/, "%20"),
        Ye(M, "No window.location.(origin|href) available to create URL for href: " + H),
        new URL(H,M)
    }
    let S = {
        get action() {
            return p
        },
        get location() {
            return r(l, d)
        },
        listen(w) {
            if (m)
                throw new Error("A history only accepts one active listener");
            return l.addEventListener(Pp, x),
            m = w,
            () => {
                l.removeEventListener(Pp, x),
                m = null
            }
        },
        createHref(w) {
            return n(l, w)
        },
        createURL: k,
        encodeLocation(w) {
            let M = k(w);
            return {
                pathname: M.pathname,
                search: M.search,
                hash: M.hash
            }
        },
        push: j,
        replace: T,
        go(w) {
            return d.go(w)
        }
    };
    return S
}
var Ap;
(function(r) {
    r.data = "data",
    r.deferred = "deferred",
    r.redirect = "redirect",
    r.error = "error"
}
)(Ap || (Ap = {}));
function n1(r, n, s) {
    return s === void 0 && (s = "/"),
    r1(r, n, s)
}
function r1(r, n, s, i) {
    let l = typeof n == "string" ? Os(n) : n
      , c = Jc(l.pathname || "/", s);
    if (c == null)
        return null;
    let d = fg(r);
    s1(d);
    let p = null;
    for (let m = 0; p == null && m < d.length; ++m) {
        let y = g1(c);
        p = h1(d[m], y)
    }
    return p
}
function fg(r, n, s, i) {
    n === void 0 && (n = []),
    s === void 0 && (s = []),
    i === void 0 && (i = "");
    let l = (c, d, p) => {
        let m = {
            relativePath: p === void 0 ? c.path || "" : p,
            caseSensitive: c.caseSensitive === !0,
            childrenIndex: d,
            route: c
        };
        m.relativePath.startsWith("/") && (Ye(m.relativePath.startsWith(i), 'Absolute route path "' + m.relativePath + '" nested under path ' + ('"' + i + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."),
        m.relativePath = m.relativePath.slice(i.length));
        let y = lr([i, m.relativePath])
          , v = s.concat(m);
        c.children && c.children.length > 0 && (Ye(c.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + y + '".')),
        fg(c.children, n, v, y)),
        !(c.path == null && !c.index) && n.push({
            path: y,
            score: d1(y, c.index),
            routesMeta: v
        })
    }
    ;
    return r.forEach( (c, d) => {
        var p;
        if (c.path === "" || !((p = c.path) != null && p.includes("?")))
            l(c, d);
        else
            for (let m of hg(c.path))
                l(c, d, m)
    }
    ),
    n
}
function hg(r) {
    let n = r.split("/");
    if (n.length === 0)
        return [];
    let[s,...i] = n
      , l = s.endsWith("?")
      , c = s.replace(/\?$/, "");
    if (i.length === 0)
        return l ? [c, ""] : [c];
    let d = hg(i.join("/"))
      , p = [];
    return p.push(...d.map(m => m === "" ? c : [c, m].join("/"))),
    l && p.push(...d),
    p.map(m => r.startsWith("/") && m === "" ? "/" : m)
}
function s1(r) {
    r.sort( (n, s) => n.score !== s.score ? s.score - n.score : f1(n.routesMeta.map(i => i.childrenIndex), s.routesMeta.map(i => i.childrenIndex)))
}
const o1 = /^:[\w-]+$/
  , i1 = 3
  , a1 = 2
  , l1 = 1
  , u1 = 10
  , c1 = -2
  , Lp = r => r === "*";
function d1(r, n) {
    let s = r.split("/")
      , i = s.length;
    return s.some(Lp) && (i += c1),
    n && (i += a1),
    s.filter(l => !Lp(l)).reduce( (l, c) => l + (o1.test(c) ? i1 : c === "" ? l1 : u1), i)
}
function f1(r, n) {
    return r.length === n.length && r.slice(0, -1).every( (i, l) => i === n[l]) ? r[r.length - 1] - n[n.length - 1] : 0
}
function h1(r, n, s) {
    let {routesMeta: i} = r
      , l = {}
      , c = "/"
      , d = [];
    for (let p = 0; p < i.length; ++p) {
        let m = i[p]
          , y = p === i.length - 1
          , v = c === "/" ? n : n.slice(c.length) || "/"
          , x = p1({
            path: m.relativePath,
            caseSensitive: m.caseSensitive,
            end: y
        }, v)
          , j = m.route;
        if (!x)
            return null;
        Object.assign(l, x.params),
        d.push({
            params: l,
            pathname: lr([c, x.pathname]),
            pathnameBase: w1(lr([c, x.pathnameBase])),
            route: j
        }),
        x.pathnameBase !== "/" && (c = lr([c, x.pathnameBase]))
    }
    return d
}
function p1(r, n) {
    typeof r == "string" && (r = {
        path: r,
        caseSensitive: !1,
        end: !0
    });
    let[s,i] = m1(r.path, r.caseSensitive, r.end)
      , l = n.match(s);
    if (!l)
        return null;
    let c = l[0]
      , d = c.replace(/(.)\/+$/, "$1")
      , p = l.slice(1);
    return {
        params: i.reduce( (y, v, x) => {
            let {paramName: j, isOptional: T} = v;
            if (j === "*") {
                let S = p[x] || "";
                d = c.slice(0, c.length - S.length).replace(/(.)\/+$/, "$1")
            }
            const k = p[x];
            return T && !k ? y[j] = void 0 : y[j] = (k || "").replace(/%2F/g, "/"),
            y
        }
        , {}),
        pathname: c,
        pathnameBase: d,
        pattern: r
    }
}
function m1(r, n, s) {
    n === void 0 && (n = !1),
    s === void 0 && (s = !0),
    dg(r === "*" || !r.endsWith("*") || r.endsWith("/*"), 'Route path "' + r + '" will be treated as if it were ' + ('"' + r.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + r.replace(/\*$/, "/*") + '".'));
    let i = []
      , l = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (d, p, m) => (i.push({
        paramName: p,
        isOptional: m != null
    }),
    m ? "/?([^\\/]+)?" : "/([^\\/]+)"));
    return r.endsWith("*") ? (i.push({
        paramName: "*"
    }),
    l += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : s ? l += "\\/*$" : r !== "" && r !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l,n ? void 0 : "i"), i]
}
function g1(r) {
    try {
        return r.split("/").map(n => decodeURIComponent(n).replace(/\//g, "%2F")).join("/")
    } catch (n) {
        return dg(!1, 'The URL path "' + r + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + n + ").")),
        r
    }
}
function Jc(r, n) {
    if (n === "/")
        return r;
    if (!r.toLowerCase().startsWith(n.toLowerCase()))
        return null;
    let s = n.endsWith("/") ? n.length - 1 : n.length
      , i = r.charAt(s);
    return i && i !== "/" ? null : r.slice(s) || "/"
}
function y1(r, n) {
    n === void 0 && (n = "/");
    let {pathname: s, search: i="", hash: l=""} = typeof r == "string" ? Os(r) : r;
    return {
        pathname: s ? s.startsWith("/") ? s : v1(s, n) : n,
        search: b1(i),
        hash: S1(l)
    }
}
function v1(r, n) {
    let s = n.replace(/\/+$/, "").split("/");
    return r.split("/").forEach(l => {
        l === ".." ? s.length > 1 && s.pop() : l !== "." && s.push(l)
    }
    ),
    s.length > 1 ? s.join("/") : "/"
}
function Qu(r, n, s, i) {
    return "Cannot include a '" + r + "' character in a manually specified " + ("`to." + n + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + s + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'
}
function x1(r) {
    return r.filter( (n, s) => s === 0 || n.route.path && n.route.path.length > 0)
}
function pg(r, n) {
    let s = x1(r);
    return n ? s.map( (i, l) => l === s.length - 1 ? i.pathname : i.pathnameBase) : s.map(i => i.pathnameBase)
}
function mg(r, n, s, i) {
    i === void 0 && (i = !1);
    let l;
    typeof r == "string" ? l = Os(r) : (l = Lo({}, r),
    Ye(!l.pathname || !l.pathname.includes("?"), Qu("?", "pathname", "search", l)),
    Ye(!l.pathname || !l.pathname.includes("#"), Qu("#", "pathname", "hash", l)),
    Ye(!l.search || !l.search.includes("#"), Qu("#", "search", "hash", l)));
    let c = r === "" || l.pathname === "", d = c ? "/" : l.pathname, p;
    if (d == null)
        p = s;
    else {
        let x = n.length - 1;
        if (!i && d.startsWith("..")) {
            let j = d.split("/");
            for (; j[0] === ".."; )
                j.shift(),
                x -= 1;
            l.pathname = j.join("/")
        }
        p = x >= 0 ? n[x] : "/"
    }
    let m = y1(l, p)
      , y = d && d !== "/" && d.endsWith("/")
      , v = (c || d === ".") && s.endsWith("/");
    return !m.pathname.endsWith("/") && (y || v) && (m.pathname += "/"),
    m
}
const lr = r => r.join("/").replace(/\/\/+/g, "/")
  , w1 = r => r.replace(/\/+$/, "").replace(/^\/*/, "/")
  , b1 = r => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r
  , S1 = r => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r;
function k1(r) {
    return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data"in r
}
const gg = ["post", "put", "patch", "delete"];
new Set(gg);
const E1 = ["get", ...gg];
new Set(E1);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Io() {
    return Io = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i])
        }
        return r
    }
    ,
    Io.apply(this, arguments)
}
const Xc = C.createContext(null)
  , C1 = C.createContext(null)
  , zr = C.createContext(null)
  , Aa = C.createContext(null)
  , Br = C.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1
})
  , yg = C.createContext(null);
function N1(r, n) {
    let {relative: s} = n === void 0 ? {} : n;
    $o() || Ye(!1);
    let {basename: i, navigator: l} = C.useContext(zr)
      , {hash: c, pathname: d, search: p} = xg(r, {
        relative: s
    })
      , m = d;
    return i !== "/" && (m = d === "/" ? i : lr([i, d])),
    l.createHref({
        pathname: m,
        search: p,
        hash: c
    })
}
function $o() {
    return C.useContext(Aa) != null
}
function $r() {
    return $o() || Ye(!1),
    C.useContext(Aa).location
}
function vg(r) {
    C.useContext(zr).static || C.useLayoutEffect(r)
}
function La() {
    let {isDataRoute: r} = C.useContext(Br);
    return r ? U1() : _1()
}
function _1() {
    $o() || Ye(!1);
    let r = C.useContext(Xc)
      , {basename: n, future: s, navigator: i} = C.useContext(zr)
      , {matches: l} = C.useContext(Br)
      , {pathname: c} = $r()
      , d = JSON.stringify(pg(l, s.v7_relativeSplatPath))
      , p = C.useRef(!1);
    return vg( () => {
        p.current = !0
    }
    ),
    C.useCallback(function(y, v) {
        if (v === void 0 && (v = {}),
        !p.current)
            return;
        if (typeof y == "number") {
            i.go(y);
            return
        }
        let x = mg(y, JSON.parse(d), c, v.relative === "path");
        r == null && n !== "/" && (x.pathname = x.pathname === "/" ? n : lr([n, x.pathname])),
        (v.replace ? i.replace : i.push)(x, v.state, v)
    }, [n, i, d, c, r])
}
function xg(r, n) {
    let {relative: s} = n === void 0 ? {} : n
      , {future: i} = C.useContext(zr)
      , {matches: l} = C.useContext(Br)
      , {pathname: c} = $r()
      , d = JSON.stringify(pg(l, i.v7_relativeSplatPath));
    return C.useMemo( () => mg(r, JSON.parse(d), c, s === "path"), [r, d, c, s])
}
function j1(r, n) {
    return R1(r, n)
}
function R1(r, n, s, i) {
    $o() || Ye(!1);
    let {navigator: l} = C.useContext(zr)
      , {matches: c} = C.useContext(Br)
      , d = c[c.length - 1]
      , p = d ? d.params : {};
    d && d.pathname;
    let m = d ? d.pathnameBase : "/";
    d && d.route;
    let y = $r(), v;
    if (n) {
        var x;
        let w = typeof n == "string" ? Os(n) : n;
        m === "/" || (x = w.pathname) != null && x.startsWith(m) || Ye(!1),
        v = w
    } else
        v = y;
    let j = v.pathname || "/"
      , T = j;
    if (m !== "/") {
        let w = m.replace(/^\//, "").split("/");
        T = "/" + j.replace(/^\//, "").split("/").slice(w.length).join("/")
    }
    let k = n1(r, {
        pathname: T
    })
      , S = L1(k && k.map(w => Object.assign({}, w, {
        params: Object.assign({}, p, w.params),
        pathname: lr([m, l.encodeLocation ? l.encodeLocation(w.pathname).pathname : w.pathname]),
        pathnameBase: w.pathnameBase === "/" ? m : lr([m, l.encodeLocation ? l.encodeLocation(w.pathnameBase).pathname : w.pathnameBase])
    })), c, s, i);
    return n && S ? C.createElement(Aa.Provider, {
        value: {
            location: Io({
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default"
            }, v),
            navigationType: ir.Pop
        }
    }, S) : S
}
function T1() {
    let r = D1()
      , n = k1(r) ? r.status + " " + r.statusText : r instanceof Error ? r.message : JSON.stringify(r)
      , s = r instanceof Error ? r.stack : null
      , l = {
        padding: "0.5rem",
        backgroundColor: "rgba(200,200,200, 0.5)"
    };
    return C.createElement(C.Fragment, null, C.createElement("h2", null, "Unexpected Application Error!"), C.createElement("h3", {
        style: {
            fontStyle: "italic"
        }
    }, n), s ? C.createElement("pre", {
        style: l
    }, s) : null, null)
}
const P1 = C.createElement(T1, null);
class O1 extends C.Component {
    constructor(n) {
        super(n),
        this.state = {
            location: n.location,
            revalidation: n.revalidation,
            error: n.error
        }
    }
    static getDerivedStateFromError(n) {
        return {
            error: n
        }
    }
    static getDerivedStateFromProps(n, s) {
        return s.location !== n.location || s.revalidation !== "idle" && n.revalidation === "idle" ? {
            error: n.error,
            location: n.location,
            revalidation: n.revalidation
        } : {
            error: n.error !== void 0 ? n.error : s.error,
            location: s.location,
            revalidation: n.revalidation || s.revalidation
        }
    }
    componentDidCatch(n, s) {
        console.error("React Router caught the following error during render", n, s)
    }
    render() {
        return this.state.error !== void 0 ? C.createElement(Br.Provider, {
            value: this.props.routeContext
        }, C.createElement(yg.Provider, {
            value: this.state.error,
            children: this.props.component
        })) : this.props.children
    }
}
function A1(r) {
    let {routeContext: n, match: s, children: i} = r
      , l = C.useContext(Xc);
    return l && l.static && l.staticContext && (s.route.errorElement || s.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = s.route.id),
    C.createElement(Br.Provider, {
        value: n
    }, i)
}
function L1(r, n, s, i) {
    var l;
    if (n === void 0 && (n = []),
    s === void 0 && (s = null),
    i === void 0 && (i = null),
    r == null) {
        var c;
        if (!s)
            return null;
        if (s.errors)
            r = s.matches;
        else if ((c = i) != null && c.v7_partialHydration && n.length === 0 && !s.initialized && s.matches.length > 0)
            r = s.matches;
        else
            return null
    }
    let d = r
      , p = (l = s) == null ? void 0 : l.errors;
    if (p != null) {
        let v = d.findIndex(x => x.route.id && (p == null ? void 0 : p[x.route.id]) !== void 0);
        v >= 0 || Ye(!1),
        d = d.slice(0, Math.min(d.length, v + 1))
    }
    let m = !1
      , y = -1;
    if (s && i && i.v7_partialHydration)
        for (let v = 0; v < d.length; v++) {
            let x = d[v];
            if ((x.route.HydrateFallback || x.route.hydrateFallbackElement) && (y = v),
            x.route.id) {
                let {loaderData: j, errors: T} = s
                  , k = x.route.loader && j[x.route.id] === void 0 && (!T || T[x.route.id] === void 0);
                if (x.route.lazy || k) {
                    m = !0,
                    y >= 0 ? d = d.slice(0, y + 1) : d = [d[0]];
                    break
                }
            }
        }
    return d.reduceRight( (v, x, j) => {
        let T, k = !1, S = null, w = null;
        s && (T = p && x.route.id ? p[x.route.id] : void 0,
        S = x.route.errorElement || P1,
        m && (y < 0 && j === 0 ? (z1("route-fallback"),
        k = !0,
        w = null) : y === j && (k = !0,
        w = x.route.hydrateFallbackElement || null)));
        let M = n.concat(d.slice(0, j + 1))
          , H = () => {
            let U;
            return T ? U = S : k ? U = w : x.route.Component ? U = C.createElement(x.route.Component, null) : x.route.element ? U = x.route.element : U = v,
            C.createElement(A1, {
                match: x,
                routeContext: {
                    outlet: v,
                    matches: M,
                    isDataRoute: s != null
                },
                children: U
            })
        }
        ;
        return s && (x.route.ErrorBoundary || x.route.errorElement || j === 0) ? C.createElement(O1, {
            location: s.location,
            revalidation: s.revalidation,
            component: S,
            error: T,
            children: H(),
            routeContext: {
                outlet: null,
                matches: M,
                isDataRoute: !0
            }
        }) : H()
    }
    , null)
}
var wg = (function(r) {
    return r.UseBlocker = "useBlocker",
    r.UseRevalidator = "useRevalidator",
    r.UseNavigateStable = "useNavigate",
    r
}
)(wg || {})
  , bg = (function(r) {
    return r.UseBlocker = "useBlocker",
    r.UseLoaderData = "useLoaderData",
    r.UseActionData = "useActionData",
    r.UseRouteError = "useRouteError",
    r.UseNavigation = "useNavigation",
    r.UseRouteLoaderData = "useRouteLoaderData",
    r.UseMatches = "useMatches",
    r.UseRevalidator = "useRevalidator",
    r.UseNavigateStable = "useNavigate",
    r.UseRouteId = "useRouteId",
    r
}
)(bg || {});
function I1(r) {
    let n = C.useContext(Xc);
    return n || Ye(!1),
    n
}
function M1(r) {
    let n = C.useContext(C1);
    return n || Ye(!1),
    n
}
function F1(r) {
    let n = C.useContext(Br);
    return n || Ye(!1),
    n
}
function Sg(r) {
    let n = F1()
      , s = n.matches[n.matches.length - 1];
    return s.route.id || Ye(!1),
    s.route.id
}
function D1() {
    var r;
    let n = C.useContext(yg)
      , s = M1()
      , i = Sg();
    return n !== void 0 ? n : (r = s.errors) == null ? void 0 : r[i]
}
function U1() {
    let {router: r} = I1(wg.UseNavigateStable)
      , n = Sg(bg.UseNavigateStable)
      , s = C.useRef(!1);
    return vg( () => {
        s.current = !0
    }
    ),
    C.useCallback(function(l, c) {
        c === void 0 && (c = {}),
        s.current && (typeof l == "number" ? r.navigate(l) : r.navigate(l, Io({
            fromRouteId: n
        }, c)))
    }, [r, n])
}
const Ip = {};
function z1(r, n, s) {
    Ip[r] || (Ip[r] = !0)
}
function B1(r, n) {
    r == null || r.v7_startTransition,
    r == null || r.v7_relativeSplatPath
}
function ma(r) {
    Ye(!1)
}
function $1(r) {
    let {basename: n="/", children: s=null, location: i, navigationType: l=ir.Pop, navigator: c, static: d=!1, future: p} = r;
    $o() && Ye(!1);
    let m = n.replace(/^\/*/, "/")
      , y = C.useMemo( () => ({
        basename: m,
        navigator: c,
        static: d,
        future: Io({
            v7_relativeSplatPath: !1
        }, p)
    }), [m, p, c, d]);
    typeof i == "string" && (i = Os(i));
    let {pathname: v="/", search: x="", hash: j="", state: T=null, key: k="default"} = i
      , S = C.useMemo( () => {
        let w = Jc(v, m);
        return w == null ? null : {
            location: {
                pathname: w,
                search: x,
                hash: j,
                state: T,
                key: k
            },
            navigationType: l
        }
    }
    , [m, v, x, j, T, k, l]);
    return S == null ? null : C.createElement(zr.Provider, {
        value: y
    }, C.createElement(Aa.Provider, {
        children: s,
        value: S
    }))
}
function V1(r) {
    let {children: n, location: s} = r;
    return j1(Nc(n), s)
}
new Promise( () => {}
);
function Nc(r, n) {
    n === void 0 && (n = []);
    let s = [];
    return C.Children.forEach(r, (i, l) => {
        if (!C.isValidElement(i))
            return;
        let c = [...n, l];
        if (i.type === C.Fragment) {
            s.push.apply(s, Nc(i.props.children, c));
            return
        }
        i.type !== ma && Ye(!1),
        !i.props.index || !i.props.children || Ye(!1);
        let d = {
            id: i.props.id || c.join("-"),
            caseSensitive: i.props.caseSensitive,
            element: i.props.element,
            Component: i.props.Component,
            index: i.props.index,
            path: i.props.path,
            loader: i.props.loader,
            action: i.props.action,
            errorElement: i.props.errorElement,
            ErrorBoundary: i.props.ErrorBoundary,
            hasErrorBoundary: i.props.ErrorBoundary != null || i.props.errorElement != null,
            shouldRevalidate: i.props.shouldRevalidate,
            handle: i.props.handle,
            lazy: i.props.lazy
        };
        i.props.children && (d.children = Nc(i.props.children, c)),
        s.push(d)
    }
    ),
    s
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _c() {
    return _c = Object.assign ? Object.assign.bind() : function(r) {
        for (var n = 1; n < arguments.length; n++) {
            var s = arguments[n];
            for (var i in s)
                Object.prototype.hasOwnProperty.call(s, i) && (r[i] = s[i])
        }
        return r
    }
    ,
    _c.apply(this, arguments)
}
function q1(r, n) {
    if (r == null)
        return {};
    var s = {}, i = Object.keys(r), l, c;
    for (c = 0; c < i.length; c++)
        l = i[c],
        !(n.indexOf(l) >= 0) && (s[l] = r[l]);
    return s
}
function H1(r) {
    return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey)
}
function W1(r, n) {
    return r.button === 0 && (!n || n === "_self") && !H1(r)
}
const Q1 = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"]
  , K1 = "6";
try {
    window.__reactRouterVersion = K1
} catch {}
const G1 = "startTransition"
  , Mp = qc[G1];
function Y1(r) {
    let {basename: n, children: s, future: i, window: l} = r
      , c = C.useRef();
    c.current == null && (c.current = Zw({
        window: l,
        v5Compat: !0
    }));
    let d = c.current
      , [p,m] = C.useState({
        action: d.action,
        location: d.location
    })
      , {v7_startTransition: y} = i || {}
      , v = C.useCallback(x => {
        y && Mp ? Mp( () => m(x)) : m(x)
    }
    , [m, y]);
    return C.useLayoutEffect( () => d.listen(v), [d, v]),
    C.useEffect( () => B1(i), [i]),
    C.createElement($1, {
        basename: n,
        children: s,
        location: p.location,
        navigationType: p.action,
        navigator: d,
        future: i
    })
}
const J1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , X1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
  , ga = C.forwardRef(function(n, s) {
    let {onClick: i, relative: l, reloadDocument: c, replace: d, state: p, target: m, to: y, preventScrollReset: v, viewTransition: x} = n, j = q1(n, Q1), {basename: T} = C.useContext(zr), k, S = !1;
    if (typeof y == "string" && X1.test(y) && (k = y,
    J1))
        try {
            let U = new URL(window.location.href)
              , D = y.startsWith("//") ? new URL(U.protocol + y) : new URL(y)
              , G = Jc(D.pathname, T);
            D.origin === U.origin && G != null ? y = G + D.search + D.hash : S = !0
        } catch {}
    let w = N1(y, {
        relative: l
    })
      , M = Z1(y, {
        replace: d,
        state: p,
        target: m,
        preventScrollReset: v,
        relative: l,
        viewTransition: x
    });
    function H(U) {
        i && i(U),
        U.defaultPrevented || M(U)
    }
    return C.createElement("a", _c({}, j, {
        href: k || w,
        onClick: S || c ? i : H,
        ref: s,
        target: m
    }))
});
var Fp;
(function(r) {
    r.UseScrollRestoration = "useScrollRestoration",
    r.UseSubmit = "useSubmit",
    r.UseSubmitFetcher = "useSubmitFetcher",
    r.UseFetcher = "useFetcher",
    r.useViewTransitionState = "useViewTransitionState"
}
)(Fp || (Fp = {}));
var Dp;
(function(r) {
    r.UseFetcher = "useFetcher",
    r.UseFetchers = "useFetchers",
    r.UseScrollRestoration = "useScrollRestoration"
}
)(Dp || (Dp = {}));
function Z1(r, n) {
    let {target: s, replace: i, state: l, preventScrollReset: c, relative: d, viewTransition: p} = n === void 0 ? {} : n
      , m = La()
      , y = $r()
      , v = xg(r, {
        relative: d
    });
    return C.useCallback(x => {
        if (W1(x, s)) {
            x.preventDefault();
            let j = i !== void 0 ? i : ja(y) === ja(v);
            m(r, {
                replace: j,
                state: l,
                preventScrollReset: c,
                relative: d,
                viewTransition: p
            })
        }
    }
    , [y, m, v, i, l, s, r, c, d, p])
}
function kg(r, n) {
    return function() {
        return r.apply(n, arguments)
    }
}
const {toString: eb} = Object.prototype
  , {getPrototypeOf: Zc} = Object
  , {iterator: Ia, toStringTag: Eg} = Symbol
  , Ma = (r => n => {
    const s = eb.call(n);
    return r[s] || (r[s] = s.slice(8, -1).toLowerCase())
}
)(Object.create(null))
  , nn = r => (r = r.toLowerCase(),
n => Ma(n) === r)
  , Fa = r => n => typeof n === r
  , {isArray: As} = Array
  , Rs = Fa("undefined");
function Vo(r) {
    return r !== null && !Rs(r) && r.constructor !== null && !Rs(r.constructor) && jt(r.constructor.isBuffer) && r.constructor.isBuffer(r)
}
const Cg = nn("ArrayBuffer");
function tb(r) {
    let n;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? n = ArrayBuffer.isView(r) : n = r && r.buffer && Cg(r.buffer),
    n
}
const nb = Fa("string")
  , jt = Fa("function")
  , Ng = Fa("number")
  , qo = r => r !== null && typeof r == "object"
  , rb = r => r === !0 || r === !1
  , ya = r => {
    if (Ma(r) !== "object")
        return !1;
    const n = Zc(r);
    return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Eg in r) && !(Ia in r)
}
  , sb = r => {
    if (!qo(r) || Vo(r))
        return !1;
    try {
        return Object.keys(r).length === 0 && Object.getPrototypeOf(r) === Object.prototype
    } catch {
        return !1
    }
}
  , ob = nn("Date")
  , ib = nn("File")
  , ab = nn("Blob")
  , lb = nn("FileList")
  , ub = r => qo(r) && jt(r.pipe)
  , cb = r => {
    let n;
    return r && (typeof FormData == "function" && r instanceof FormData || jt(r.append) && ((n = Ma(r)) === "formdata" || n === "object" && jt(r.toString) && r.toString() === "[object FormData]"))
}
  , db = nn("URLSearchParams")
  , [fb,hb,pb,mb] = ["ReadableStream", "Request", "Response", "Headers"].map(nn)
  , gb = r => r.trim ? r.trim() : r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ho(r, n, {allOwnKeys: s=!1}={}) {
    if (r === null || typeof r > "u")
        return;
    let i, l;
    if (typeof r != "object" && (r = [r]),
    As(r))
        for (i = 0,
        l = r.length; i < l; i++)
            n.call(null, r[i], i, r);
    else {
        if (Vo(r))
            return;
        const c = s ? Object.getOwnPropertyNames(r) : Object.keys(r)
          , d = c.length;
        let p;
        for (i = 0; i < d; i++)
            p = c[i],
            n.call(null, r[p], p, r)
    }
}
function _g(r, n) {
    if (Vo(r))
        return null;
    n = n.toLowerCase();
    const s = Object.keys(r);
    let i = s.length, l;
    for (; i-- > 0; )
        if (l = s[i],
        n === l.toLowerCase())
            return l;
    return null
}
const Nr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global
  , jg = r => !Rs(r) && r !== Nr;
function jc() {
    const {caseless: r, skipUndefined: n} = jg(this) && this || {}
      , s = {}
      , i = (l, c) => {
        const d = r && _g(s, c) || c;
        ya(s[d]) && ya(l) ? s[d] = jc(s[d], l) : ya(l) ? s[d] = jc({}, l) : As(l) ? s[d] = l.slice() : (!n || !Rs(l)) && (s[d] = l)
    }
    ;
    for (let l = 0, c = arguments.length; l < c; l++)
        arguments[l] && Ho(arguments[l], i);
    return s
}
const yb = (r, n, s, {allOwnKeys: i}={}) => (Ho(n, (l, c) => {
    s && jt(l) ? r[c] = kg(l, s) : r[c] = l
}
, {
    allOwnKeys: i
}),
r)
  , vb = r => (r.charCodeAt(0) === 65279 && (r = r.slice(1)),
r)
  , xb = (r, n, s, i) => {
    r.prototype = Object.create(n.prototype, i),
    r.prototype.constructor = r,
    Object.defineProperty(r, "super", {
        value: n.prototype
    }),
    s && Object.assign(r.prototype, s)
}
  , wb = (r, n, s, i) => {
    let l, c, d;
    const p = {};
    if (n = n || {},
    r == null)
        return n;
    do {
        for (l = Object.getOwnPropertyNames(r),
        c = l.length; c-- > 0; )
            d = l[c],
            (!i || i(d, r, n)) && !p[d] && (n[d] = r[d],
            p[d] = !0);
        r = s !== !1 && Zc(r)
    } while (r && (!s || s(r, n)) && r !== Object.prototype);
    return n
}
  , bb = (r, n, s) => {
    r = String(r),
    (s === void 0 || s > r.length) && (s = r.length),
    s -= n.length;
    const i = r.indexOf(n, s);
    return i !== -1 && i === s
}
  , Sb = r => {
    if (!r)
        return null;
    if (As(r))
        return r;
    let n = r.length;
    if (!Ng(n))
        return null;
    const s = new Array(n);
    for (; n-- > 0; )
        s[n] = r[n];
    return s
}
  , kb = (r => n => r && n instanceof r)(typeof Uint8Array < "u" && Zc(Uint8Array))
  , Eb = (r, n) => {
    const i = (r && r[Ia]).call(r);
    let l;
    for (; (l = i.next()) && !l.done; ) {
        const c = l.value;
        n.call(r, c[0], c[1])
    }
}
  , Cb = (r, n) => {
    let s;
    const i = [];
    for (; (s = r.exec(n)) !== null; )
        i.push(s);
    return i
}
  , Nb = nn("HTMLFormElement")
  , _b = r => r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(s, i, l) {
    return i.toUpperCase() + l
})
  , Up = ( ({hasOwnProperty: r}) => (n, s) => r.call(n, s))(Object.prototype)
  , jb = nn("RegExp")
  , Rg = (r, n) => {
    const s = Object.getOwnPropertyDescriptors(r)
      , i = {};
    Ho(s, (l, c) => {
        let d;
        (d = n(l, c, r)) !== !1 && (i[c] = d || l)
    }
    ),
    Object.defineProperties(r, i)
}
  , Rb = r => {
    Rg(r, (n, s) => {
        if (jt(r) && ["arguments", "caller", "callee"].indexOf(s) !== -1)
            return !1;
        const i = r[s];
        if (jt(i)) {
            if (n.enumerable = !1,
            "writable"in n) {
                n.writable = !1;
                return
            }
            n.set || (n.set = () => {
                throw Error("Can not rewrite read-only method '" + s + "'")
            }
            )
        }
    }
    )
}
  , Tb = (r, n) => {
    const s = {}
      , i = l => {
        l.forEach(c => {
            s[c] = !0
        }
        )
    }
    ;
    return As(r) ? i(r) : i(String(r).split(n)),
    s
}
  , Pb = () => {}
  , Ob = (r, n) => r != null && Number.isFinite(r = +r) ? r : n;
function Ab(r) {
    return !!(r && jt(r.append) && r[Eg] === "FormData" && r[Ia])
}
const Lb = r => {
    const n = new Array(10)
      , s = (i, l) => {
        if (qo(i)) {
            if (n.indexOf(i) >= 0)
                return;
            if (Vo(i))
                return i;
            if (!("toJSON"in i)) {
                n[l] = i;
                const c = As(i) ? [] : {};
                return Ho(i, (d, p) => {
                    const m = s(d, l + 1);
                    !Rs(m) && (c[p] = m)
                }
                ),
                n[l] = void 0,
                c
            }
        }
        return i
    }
    ;
    return s(r, 0)
}
  , Ib = nn("AsyncFunction")
  , Mb = r => r && (qo(r) || jt(r)) && jt(r.then) && jt(r.catch)
  , Tg = ( (r, n) => r ? setImmediate : n ? ( (s, i) => (Nr.addEventListener("message", ({source: l, data: c}) => {
    l === Nr && c === s && i.length && i.shift()()
}
, !1),
l => {
    i.push(l),
    Nr.postMessage(s, "*")
}
))(`axios@${Math.random()}`, []) : s => setTimeout(s))(typeof setImmediate == "function", jt(Nr.postMessage))
  , Fb = typeof queueMicrotask < "u" ? queueMicrotask.bind(Nr) : typeof process < "u" && process.nextTick || Tg
  , Db = r => r != null && jt(r[Ia])
  , L = {
    isArray: As,
    isArrayBuffer: Cg,
    isBuffer: Vo,
    isFormData: cb,
    isArrayBufferView: tb,
    isString: nb,
    isNumber: Ng,
    isBoolean: rb,
    isObject: qo,
    isPlainObject: ya,
    isEmptyObject: sb,
    isReadableStream: fb,
    isRequest: hb,
    isResponse: pb,
    isHeaders: mb,
    isUndefined: Rs,
    isDate: ob,
    isFile: ib,
    isBlob: ab,
    isRegExp: jb,
    isFunction: jt,
    isStream: ub,
    isURLSearchParams: db,
    isTypedArray: kb,
    isFileList: lb,
    forEach: Ho,
    merge: jc,
    extend: yb,
    trim: gb,
    stripBOM: vb,
    inherits: xb,
    toFlatObject: wb,
    kindOf: Ma,
    kindOfTest: nn,
    endsWith: bb,
    toArray: Sb,
    forEachEntry: Eb,
    matchAll: Cb,
    isHTMLForm: Nb,
    hasOwnProperty: Up,
    hasOwnProp: Up,
    reduceDescriptors: Rg,
    freezeMethods: Rb,
    toObjectSet: Tb,
    toCamelCase: _b,
    noop: Pb,
    toFiniteNumber: Ob,
    findKey: _g,
    global: Nr,
    isContextDefined: jg,
    isSpecCompliantForm: Ab,
    toJSONObject: Lb,
    isAsyncFn: Ib,
    isThenable: Mb,
    setImmediate: Tg,
    asap: Fb,
    isIterable: Db
};
function xe(r, n, s, i, l) {
    Error.call(this),
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack,
    this.message = r,
    this.name = "AxiosError",
    n && (this.code = n),
    s && (this.config = s),
    i && (this.request = i),
    l && (this.response = l,
    this.status = l.status ? l.status : null)
}
L.inherits(xe, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: L.toJSONObject(this.config),
            code: this.code,
            status: this.status
        }
    }
});
const Pg = xe.prototype
  , Og = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(r => {
    Og[r] = {
        value: r
    }
}
);
Object.defineProperties(xe, Og);
Object.defineProperty(Pg, "isAxiosError", {
    value: !0
});
xe.from = (r, n, s, i, l, c) => {
    const d = Object.create(Pg);
    L.toFlatObject(r, d, function(v) {
        return v !== Error.prototype
    }, y => y !== "isAxiosError");
    const p = r && r.message ? r.message : "Error"
      , m = n == null && r ? r.code : n;
    return xe.call(d, p, m, s, i, l),
    r && d.cause == null && Object.defineProperty(d, "cause", {
        value: r,
        configurable: !0
    }),
    d.name = r && r.name || "Error",
    c && Object.assign(d, c),
    d
}
;
const Ub = null;
function Rc(r) {
    return L.isPlainObject(r) || L.isArray(r)
}
function Ag(r) {
    return L.endsWith(r, "[]") ? r.slice(0, -2) : r
}
function zp(r, n, s) {
    return r ? r.concat(n).map(function(l, c) {
        return l = Ag(l),
        !s && c ? "[" + l + "]" : l
    }).join(s ? "." : "") : n
}
function zb(r) {
    return L.isArray(r) && !r.some(Rc)
}
const Bb = L.toFlatObject(L, {}, null, function(n) {
    return /^is[A-Z]/.test(n)
});
function Da(r, n, s) {
    if (!L.isObject(r))
        throw new TypeError("target must be an object");
    n = n || new FormData,
    s = L.toFlatObject(s, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(S, w) {
        return !L.isUndefined(w[S])
    });
    const i = s.metaTokens
      , l = s.visitor || v
      , c = s.dots
      , d = s.indexes
      , m = (s.Blob || typeof Blob < "u" && Blob) && L.isSpecCompliantForm(n);
    if (!L.isFunction(l))
        throw new TypeError("visitor must be a function");
    function y(k) {
        if (k === null)
            return "";
        if (L.isDate(k))
            return k.toISOString();
        if (L.isBoolean(k))
            return k.toString();
        if (!m && L.isBlob(k))
            throw new xe("Blob is not supported. Use a Buffer instead.");
        return L.isArrayBuffer(k) || L.isTypedArray(k) ? m && typeof Blob == "function" ? new Blob([k]) : Buffer.from(k) : k
    }
    function v(k, S, w) {
        let M = k;
        if (k && !w && typeof k == "object") {
            if (L.endsWith(S, "{}"))
                S = i ? S : S.slice(0, -2),
                k = JSON.stringify(k);
            else if (L.isArray(k) && zb(k) || (L.isFileList(k) || L.endsWith(S, "[]")) && (M = L.toArray(k)))
                return S = Ag(S),
                M.forEach(function(U, D) {
                    !(L.isUndefined(U) || U === null) && n.append(d === !0 ? zp([S], D, c) : d === null ? S : S + "[]", y(U))
                }),
                !1
        }
        return Rc(k) ? !0 : (n.append(zp(w, S, c), y(k)),
        !1)
    }
    const x = []
      , j = Object.assign(Bb, {
        defaultVisitor: v,
        convertValue: y,
        isVisitable: Rc
    });
    function T(k, S) {
        if (!L.isUndefined(k)) {
            if (x.indexOf(k) !== -1)
                throw Error("Circular reference detected in " + S.join("."));
            x.push(k),
            L.forEach(k, function(M, H) {
                (!(L.isUndefined(M) || M === null) && l.call(n, M, L.isString(H) ? H.trim() : H, S, j)) === !0 && T(M, S ? S.concat(H) : [H])
            }),
            x.pop()
        }
    }
    if (!L.isObject(r))
        throw new TypeError("data must be an object");
    return T(r),
    n
}
function Bp(r) {
    const n = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g, function(i) {
        return n[i]
    })
}
function ed(r, n) {
    this._pairs = [],
    r && Da(r, this, n)
}
const Lg = ed.prototype;
Lg.append = function(n, s) {
    this._pairs.push([n, s])
}
;
Lg.toString = function(n) {
    const s = n ? function(i) {
        return n.call(this, i, Bp)
    }
    : Bp;
    return this._pairs.map(function(l) {
        return s(l[0]) + "=" + s(l[1])
    }, "").join("&")
}
;
function $b(r) {
    return encodeURIComponent(r).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+")
}
function Ig(r, n, s) {
    if (!n)
        return r;
    const i = s && s.encode || $b;
    L.isFunction(s) && (s = {
        serialize: s
    });
    const l = s && s.serialize;
    let c;
    if (l ? c = l(n, s) : c = L.isURLSearchParams(n) ? n.toString() : new ed(n,s).toString(i),
    c) {
        const d = r.indexOf("#");
        d !== -1 && (r = r.slice(0, d)),
        r += (r.indexOf("?") === -1 ? "?" : "&") + c
    }
    return r
}
class $p {
    constructor() {
        this.handlers = []
    }
    use(n, s, i) {
        return this.handlers.push({
            fulfilled: n,
            rejected: s,
            synchronous: i ? i.synchronous : !1,
            runWhen: i ? i.runWhen : null
        }),
        this.handlers.length - 1
    }
    eject(n) {
        this.handlers[n] && (this.handlers[n] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(n) {
        L.forEach(this.handlers, function(i) {
            i !== null && n(i)
        })
    }
}
const Mg = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
}
  , Vb = typeof URLSearchParams < "u" ? URLSearchParams : ed
  , qb = typeof FormData < "u" ? FormData : null
  , Hb = typeof Blob < "u" ? Blob : null
  , Wb = {
    isBrowser: !0,
    classes: {
        URLSearchParams: Vb,
        FormData: qb,
        Blob: Hb
    },
    protocols: ["http", "https", "file", "blob", "url", "data"]
}
  , td = typeof window < "u" && typeof document < "u"
  , Tc = typeof navigator == "object" && navigator || void 0
  , Qb = td && (!Tc || ["ReactNative", "NativeScript", "NS"].indexOf(Tc.product) < 0)
  , Kb = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function"
  , Gb = td && window.location.href || "http://localhost"
  , Yb = Object.freeze(Object.defineProperty({
    __proto__: null,
    hasBrowserEnv: td,
    hasStandardBrowserEnv: Qb,
    hasStandardBrowserWebWorkerEnv: Kb,
    navigator: Tc,
    origin: Gb
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mt = {
    ...Yb,
    ...Wb
};
function Jb(r, n) {
    return Da(r, new mt.classes.URLSearchParams, {
        visitor: function(s, i, l, c) {
            return mt.isNode && L.isBuffer(s) ? (this.append(i, s.toString("base64")),
            !1) : c.defaultVisitor.apply(this, arguments)
        },
        ...n
    })
}
function Xb(r) {
    return L.matchAll(/\w+|\[(\w*)]/g, r).map(n => n[0] === "[]" ? "" : n[1] || n[0])
}
function Zb(r) {
    const n = {}
      , s = Object.keys(r);
    let i;
    const l = s.length;
    let c;
    for (i = 0; i < l; i++)
        c = s[i],
        n[c] = r[c];
    return n
}
function Fg(r) {
    function n(s, i, l, c) {
        let d = s[c++];
        if (d === "__proto__")
            return !0;
        const p = Number.isFinite(+d)
          , m = c >= s.length;
        return d = !d && L.isArray(l) ? l.length : d,
        m ? (L.hasOwnProp(l, d) ? l[d] = [l[d], i] : l[d] = i,
        !p) : ((!l[d] || !L.isObject(l[d])) && (l[d] = []),
        n(s, i, l[d], c) && L.isArray(l[d]) && (l[d] = Zb(l[d])),
        !p)
    }
    if (L.isFormData(r) && L.isFunction(r.entries)) {
        const s = {};
        return L.forEachEntry(r, (i, l) => {
            n(Xb(i), l, s, 0)
        }
        ),
        s
    }
    return null
}
function eS(r, n, s) {
    if (L.isString(r))
        try {
            return (n || JSON.parse)(r),
            L.trim(r)
        } catch (i) {
            if (i.name !== "SyntaxError")
                throw i
        }
    return (s || JSON.stringify)(r)
}
const Wo = {
    transitional: Mg,
    adapter: ["xhr", "http", "fetch"],
    transformRequest: [function(n, s) {
        const i = s.getContentType() || ""
          , l = i.indexOf("application/json") > -1
          , c = L.isObject(n);
        if (c && L.isHTMLForm(n) && (n = new FormData(n)),
        L.isFormData(n))
            return l ? JSON.stringify(Fg(n)) : n;
        if (L.isArrayBuffer(n) || L.isBuffer(n) || L.isStream(n) || L.isFile(n) || L.isBlob(n) || L.isReadableStream(n))
            return n;
        if (L.isArrayBufferView(n))
            return n.buffer;
        if (L.isURLSearchParams(n))
            return s.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1),
            n.toString();
        let p;
        if (c) {
            if (i.indexOf("application/x-www-form-urlencoded") > -1)
                return Jb(n, this.formSerializer).toString();
            if ((p = L.isFileList(n)) || i.indexOf("multipart/form-data") > -1) {
                const m = this.env && this.env.FormData;
                return Da(p ? {
                    "files[]": n
                } : n, m && new m, this.formSerializer)
            }
        }
        return c || l ? (s.setContentType("application/json", !1),
        eS(n)) : n
    }
    ],
    transformResponse: [function(n) {
        const s = this.transitional || Wo.transitional
          , i = s && s.forcedJSONParsing
          , l = this.responseType === "json";
        if (L.isResponse(n) || L.isReadableStream(n))
            return n;
        if (n && L.isString(n) && (i && !this.responseType || l)) {
            const d = !(s && s.silentJSONParsing) && l;
            try {
                return JSON.parse(n, this.parseReviver)
            } catch (p) {
                if (d)
                    throw p.name === "SyntaxError" ? xe.from(p, xe.ERR_BAD_RESPONSE, this, null, this.response) : p
            }
        }
        return n
    }
    ],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: mt.classes.FormData,
        Blob: mt.classes.Blob
    },
    validateStatus: function(n) {
        return n >= 200 && n < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
L.forEach(["delete", "get", "head", "post", "put", "patch"], r => {
    Wo.headers[r] = {}
}
);
const tS = L.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"])
  , nS = r => {
    const n = {};
    let s, i, l;
    return r && r.split(`
`).forEach(function(d) {
        l = d.indexOf(":"),
        s = d.substring(0, l).trim().toLowerCase(),
        i = d.substring(l + 1).trim(),
        !(!s || n[s] && tS[s]) && (s === "set-cookie" ? n[s] ? n[s].push(i) : n[s] = [i] : n[s] = n[s] ? n[s] + ", " + i : i)
    }),
    n
}
  , Vp = Symbol("internals");
function Eo(r) {
    return r && String(r).trim().toLowerCase()
}
function va(r) {
    return r === !1 || r == null ? r : L.isArray(r) ? r.map(va) : String(r)
}
function rS(r) {
    const n = Object.create(null)
      , s = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let i;
    for (; i = s.exec(r); )
        n[i[1]] = i[2];
    return n
}
const sS = r => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function Ku(r, n, s, i, l) {
    if (L.isFunction(i))
        return i.call(this, n, s);
    if (l && (n = s),
    !!L.isString(n)) {
        if (L.isString(i))
            return n.indexOf(i) !== -1;
        if (L.isRegExp(i))
            return i.test(n)
    }
}
function oS(r) {
    return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (n, s, i) => s.toUpperCase() + i)
}
function iS(r, n) {
    const s = L.toCamelCase(" " + n);
    ["get", "set", "has"].forEach(i => {
        Object.defineProperty(r, i + s, {
            value: function(l, c, d) {
                return this[i].call(this, n, l, c, d)
            },
            configurable: !0
        })
    }
    )
}
let Rt = class {
    constructor(n) {
        n && this.set(n)
    }
    set(n, s, i) {
        const l = this;
        function c(p, m, y) {
            const v = Eo(m);
            if (!v)
                throw new Error("header name must be a non-empty string");
            const x = L.findKey(l, v);
            (!x || l[x] === void 0 || y === !0 || y === void 0 && l[x] !== !1) && (l[x || m] = va(p))
        }
        const d = (p, m) => L.forEach(p, (y, v) => c(y, v, m));
        if (L.isPlainObject(n) || n instanceof this.constructor)
            d(n, s);
        else if (L.isString(n) && (n = n.trim()) && !sS(n))
            d(nS(n), s);
        else if (L.isObject(n) && L.isIterable(n)) {
            let p = {}, m, y;
            for (const v of n) {
                if (!L.isArray(v))
                    throw TypeError("Object iterator must return a key-value pair");
                p[y = v[0]] = (m = p[y]) ? L.isArray(m) ? [...m, v[1]] : [m, v[1]] : v[1]
            }
            d(p, s)
        } else
            n != null && c(s, n, i);
        return this
    }
    get(n, s) {
        if (n = Eo(n),
        n) {
            const i = L.findKey(this, n);
            if (i) {
                const l = this[i];
                if (!s)
                    return l;
                if (s === !0)
                    return rS(l);
                if (L.isFunction(s))
                    return s.call(this, l, i);
                if (L.isRegExp(s))
                    return s.exec(l);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(n, s) {
        if (n = Eo(n),
        n) {
            const i = L.findKey(this, n);
            return !!(i && this[i] !== void 0 && (!s || Ku(this, this[i], i, s)))
        }
        return !1
    }
    delete(n, s) {
        const i = this;
        let l = !1;
        function c(d) {
            if (d = Eo(d),
            d) {
                const p = L.findKey(i, d);
                p && (!s || Ku(i, i[p], p, s)) && (delete i[p],
                l = !0)
            }
        }
        return L.isArray(n) ? n.forEach(c) : c(n),
        l
    }
    clear(n) {
        const s = Object.keys(this);
        let i = s.length
          , l = !1;
        for (; i--; ) {
            const c = s[i];
            (!n || Ku(this, this[c], c, n, !0)) && (delete this[c],
            l = !0)
        }
        return l
    }
    normalize(n) {
        const s = this
          , i = {};
        return L.forEach(this, (l, c) => {
            const d = L.findKey(i, c);
            if (d) {
                s[d] = va(l),
                delete s[c];
                return
            }
            const p = n ? oS(c) : String(c).trim();
            p !== c && delete s[c],
            s[p] = va(l),
            i[p] = !0
        }
        ),
        this
    }
    concat(...n) {
        return this.constructor.concat(this, ...n)
    }
    toJSON(n) {
        const s = Object.create(null);
        return L.forEach(this, (i, l) => {
            i != null && i !== !1 && (s[l] = n && L.isArray(i) ? i.join(", ") : i)
        }
        ),
        s
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map( ([n,s]) => n + ": " + s).join(`
`)
    }
    getSetCookie() {
        return this.get("set-cookie") || []
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(n) {
        return n instanceof this ? n : new this(n)
    }
    static concat(n, ...s) {
        const i = new this(n);
        return s.forEach(l => i.set(l)),
        i
    }
    static accessor(n) {
        const i = (this[Vp] = this[Vp] = {
            accessors: {}
        }).accessors
          , l = this.prototype;
        function c(d) {
            const p = Eo(d);
            i[p] || (iS(l, d),
            i[p] = !0)
        }
        return L.isArray(n) ? n.forEach(c) : c(n),
        this
    }
}
;
Rt.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
L.reduceDescriptors(Rt.prototype, ({value: r}, n) => {
    let s = n[0].toUpperCase() + n.slice(1);
    return {
        get: () => r,
        set(i) {
            this[s] = i
        }
    }
}
);
L.freezeMethods(Rt);
function Gu(r, n) {
    const s = this || Wo
      , i = n || s
      , l = Rt.from(i.headers);
    let c = i.data;
    return L.forEach(r, function(p) {
        c = p.call(s, c, l.normalize(), n ? n.status : void 0)
    }),
    l.normalize(),
    c
}
function Dg(r) {
    return !!(r && r.__CANCEL__)
}
function Ls(r, n, s) {
    xe.call(this, r ?? "canceled", xe.ERR_CANCELED, n, s),
    this.name = "CanceledError"
}
L.inherits(Ls, xe, {
    __CANCEL__: !0
});
function Ug(r, n, s) {
    const i = s.config.validateStatus;
    !s.status || !i || i(s.status) ? r(s) : n(new xe("Request failed with status code " + s.status,[xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(s.status / 100) - 4],s.config,s.request,s))
}
function aS(r) {
    const n = /^([-+\w]{1,25})(:?\/\/|:)/.exec(r);
    return n && n[1] || ""
}
function lS(r, n) {
    r = r || 10;
    const s = new Array(r)
      , i = new Array(r);
    let l = 0, c = 0, d;
    return n = n !== void 0 ? n : 1e3,
    function(m) {
        const y = Date.now()
          , v = i[c];
        d || (d = y),
        s[l] = m,
        i[l] = y;
        let x = c
          , j = 0;
        for (; x !== l; )
            j += s[x++],
            x = x % r;
        if (l = (l + 1) % r,
        l === c && (c = (c + 1) % r),
        y - d < n)
            return;
        const T = v && y - v;
        return T ? Math.round(j * 1e3 / T) : void 0
    }
}
function uS(r, n) {
    let s = 0, i = 1e3 / n, l, c;
    const d = (y, v=Date.now()) => {
        s = v,
        l = null,
        c && (clearTimeout(c),
        c = null),
        r(...y)
    }
    ;
    return [ (...y) => {
        const v = Date.now()
          , x = v - s;
        x >= i ? d(y, v) : (l = y,
        c || (c = setTimeout( () => {
            c = null,
            d(l)
        }
        , i - x)))
    }
    , () => l && d(l)]
}
const Ra = (r, n, s=3) => {
    let i = 0;
    const l = lS(50, 250);
    return uS(c => {
        const d = c.loaded
          , p = c.lengthComputable ? c.total : void 0
          , m = d - i
          , y = l(m)
          , v = d <= p;
        i = d;
        const x = {
            loaded: d,
            total: p,
            progress: p ? d / p : void 0,
            bytes: m,
            rate: y || void 0,
            estimated: y && p && v ? (p - d) / y : void 0,
            event: c,
            lengthComputable: p != null,
            [n ? "download" : "upload"]: !0
        };
        r(x)
    }
    , s)
}
  , qp = (r, n) => {
    const s = r != null;
    return [i => n[0]({
        lengthComputable: s,
        total: r,
        loaded: i
    }), n[1]]
}
  , Hp = r => (...n) => L.asap( () => r(...n))
  , cS = mt.hasStandardBrowserEnv ? ( (r, n) => s => (s = new URL(s,mt.origin),
r.protocol === s.protocol && r.host === s.host && (n || r.port === s.port)))(new URL(mt.origin), mt.navigator && /(msie|trident)/i.test(mt.navigator.userAgent)) : () => !0
  , dS = mt.hasStandardBrowserEnv ? {
    write(r, n, s, i, l, c) {
        const d = [r + "=" + encodeURIComponent(n)];
        L.isNumber(s) && d.push("expires=" + new Date(s).toGMTString()),
        L.isString(i) && d.push("path=" + i),
        L.isString(l) && d.push("domain=" + l),
        c === !0 && d.push("secure"),
        document.cookie = d.join("; ")
    },
    read(r) {
        const n = document.cookie.match(new RegExp("(^|;\\s*)(" + r + ")=([^;]*)"));
        return n ? decodeURIComponent(n[3]) : null
    },
    remove(r) {
        this.write(r, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};
function fS(r) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)
}
function hS(r, n) {
    return n ? r.replace(/\/?\/$/, "") + "/" + n.replace(/^\/+/, "") : r
}
function zg(r, n, s) {
    let i = !fS(n);
    return r && (i || s == !1) ? hS(r, n) : n
}
const Wp = r => r instanceof Rt ? {
    ...r
} : r;
function Ur(r, n) {
    n = n || {};
    const s = {};
    function i(y, v, x, j) {
        return L.isPlainObject(y) && L.isPlainObject(v) ? L.merge.call({
            caseless: j
        }, y, v) : L.isPlainObject(v) ? L.merge({}, v) : L.isArray(v) ? v.slice() : v
    }
    function l(y, v, x, j) {
        if (L.isUndefined(v)) {
            if (!L.isUndefined(y))
                return i(void 0, y, x, j)
        } else
            return i(y, v, x, j)
    }
    function c(y, v) {
        if (!L.isUndefined(v))
            return i(void 0, v)
    }
    function d(y, v) {
        if (L.isUndefined(v)) {
            if (!L.isUndefined(y))
                return i(void 0, y)
        } else
            return i(void 0, v)
    }
    function p(y, v, x) {
        if (x in n)
            return i(y, v);
        if (x in r)
            return i(void 0, y)
    }
    const m = {
        url: c,
        method: c,
        data: c,
        baseURL: d,
        transformRequest: d,
        transformResponse: d,
        paramsSerializer: d,
        timeout: d,
        timeoutMessage: d,
        withCredentials: d,
        withXSRFToken: d,
        adapter: d,
        responseType: d,
        xsrfCookieName: d,
        xsrfHeaderName: d,
        onUploadProgress: d,
        onDownloadProgress: d,
        decompress: d,
        maxContentLength: d,
        maxBodyLength: d,
        beforeRedirect: d,
        transport: d,
        httpAgent: d,
        httpsAgent: d,
        cancelToken: d,
        socketPath: d,
        responseEncoding: d,
        validateStatus: p,
        headers: (y, v, x) => l(Wp(y), Wp(v), x, !0)
    };
    return L.forEach(Object.keys({
        ...r,
        ...n
    }), function(v) {
        const x = m[v] || l
          , j = x(r[v], n[v], v);
        L.isUndefined(j) && x !== p || (s[v] = j)
    }),
    s
}
const Bg = r => {
    const n = Ur({}, r);
    let {data: s, withXSRFToken: i, xsrfHeaderName: l, xsrfCookieName: c, headers: d, auth: p} = n;
    if (n.headers = d = Rt.from(d),
    n.url = Ig(zg(n.baseURL, n.url, n.allowAbsoluteUrls), r.params, r.paramsSerializer),
    p && d.set("Authorization", "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))),
    L.isFormData(s)) {
        if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
            d.setContentType(void 0);
        else if (L.isFunction(s.getHeaders)) {
            const m = s.getHeaders()
              , y = ["content-type", "content-length"];
            Object.entries(m).forEach( ([v,x]) => {
                y.includes(v.toLowerCase()) && d.set(v, x)
            }
            )
        }
    }
    if (mt.hasStandardBrowserEnv && (i && L.isFunction(i) && (i = i(n)),
    i || i !== !1 && cS(n.url))) {
        const m = l && c && dS.read(c);
        m && d.set(l, m)
    }
    return n
}
  , pS = typeof XMLHttpRequest < "u"
  , mS = pS && function(r) {
    return new Promise(function(s, i) {
        const l = Bg(r);
        let c = l.data;
        const d = Rt.from(l.headers).normalize();
        let {responseType: p, onUploadProgress: m, onDownloadProgress: y} = l, v, x, j, T, k;
        function S() {
            T && T(),
            k && k(),
            l.cancelToken && l.cancelToken.unsubscribe(v),
            l.signal && l.signal.removeEventListener("abort", v)
        }
        let w = new XMLHttpRequest;
        w.open(l.method.toUpperCase(), l.url, !0),
        w.timeout = l.timeout;
        function M() {
            if (!w)
                return;
            const U = Rt.from("getAllResponseHeaders"in w && w.getAllResponseHeaders())
              , G = {
                data: !p || p === "text" || p === "json" ? w.responseText : w.response,
                status: w.status,
                statusText: w.statusText,
                headers: U,
                config: r,
                request: w
            };
            Ug(function(ge) {
                s(ge),
                S()
            }, function(ge) {
                i(ge),
                S()
            }, G),
            w = null
        }
        "onloadend"in w ? w.onloadend = M : w.onreadystatechange = function() {
            !w || w.readyState !== 4 || w.status === 0 && !(w.responseURL && w.responseURL.indexOf("file:") === 0) || setTimeout(M)
        }
        ,
        w.onabort = function() {
            w && (i(new xe("Request aborted",xe.ECONNABORTED,r,w)),
            w = null)
        }
        ,
        w.onerror = function(D) {
            const G = D && D.message ? D.message : "Network Error"
              , de = new xe(G,xe.ERR_NETWORK,r,w);
            de.event = D || null,
            i(de),
            w = null
        }
        ,
        w.ontimeout = function() {
            let D = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded";
            const G = l.transitional || Mg;
            l.timeoutErrorMessage && (D = l.timeoutErrorMessage),
            i(new xe(D,G.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,r,w)),
            w = null
        }
        ,
        c === void 0 && d.setContentType(null),
        "setRequestHeader"in w && L.forEach(d.toJSON(), function(D, G) {
            w.setRequestHeader(G, D)
        }),
        L.isUndefined(l.withCredentials) || (w.withCredentials = !!l.withCredentials),
        p && p !== "json" && (w.responseType = l.responseType),
        y && ([j,k] = Ra(y, !0),
        w.addEventListener("progress", j)),
        m && w.upload && ([x,T] = Ra(m),
        w.upload.addEventListener("progress", x),
        w.upload.addEventListener("loadend", T)),
        (l.cancelToken || l.signal) && (v = U => {
            w && (i(!U || U.type ? new Ls(null,r,w) : U),
            w.abort(),
            w = null)
        }
        ,
        l.cancelToken && l.cancelToken.subscribe(v),
        l.signal && (l.signal.aborted ? v() : l.signal.addEventListener("abort", v)));
        const H = aS(l.url);
        if (H && mt.protocols.indexOf(H) === -1) {
            i(new xe("Unsupported protocol " + H + ":",xe.ERR_BAD_REQUEST,r));
            return
        }
        w.send(c || null)
    }
    )
}
  , gS = (r, n) => {
    const {length: s} = r = r ? r.filter(Boolean) : [];
    if (n || s) {
        let i = new AbortController, l;
        const c = function(y) {
            if (!l) {
                l = !0,
                p();
                const v = y instanceof Error ? y : this.reason;
                i.abort(v instanceof xe ? v : new Ls(v instanceof Error ? v.message : v))
            }
        };
        let d = n && setTimeout( () => {
            d = null,
            c(new xe(`timeout ${n} of ms exceeded`,xe.ETIMEDOUT))
        }
        , n);
        const p = () => {
            r && (d && clearTimeout(d),
            d = null,
            r.forEach(y => {
                y.unsubscribe ? y.unsubscribe(c) : y.removeEventListener("abort", c)
            }
            ),
            r = null)
        }
        ;
        r.forEach(y => y.addEventListener("abort", c));
        const {signal: m} = i;
        return m.unsubscribe = () => L.asap(p),
        m
    }
}
  , yS = function*(r, n) {
    let s = r.byteLength;
    if (s < n) {
        yield r;
        return
    }
    let i = 0, l;
    for (; i < s; )
        l = i + n,
        yield r.slice(i, l),
        i = l
}
  , vS = async function*(r, n) {
    for await(const s of xS(r))
        yield*yS(s, n)
}
  , xS = async function*(r) {
    if (r[Symbol.asyncIterator]) {
        yield*r;
        return
    }
    const n = r.getReader();
    try {
        for (; ; ) {
            const {done: s, value: i} = await n.read();
            if (s)
                break;
            yield i
        }
    } finally {
        await n.cancel()
    }
}
  , Qp = (r, n, s, i) => {
    const l = vS(r, n);
    let c = 0, d, p = m => {
        d || (d = !0,
        i && i(m))
    }
    ;
    return new ReadableStream({
        async pull(m) {
            try {
                const {done: y, value: v} = await l.next();
                if (y) {
                    p(),
                    m.close();
                    return
                }
                let x = v.byteLength;
                if (s) {
                    let j = c += x;
                    s(j)
                }
                m.enqueue(new Uint8Array(v))
            } catch (y) {
                throw p(y),
                y
            }
        },
        cancel(m) {
            return p(m),
            l.return()
        }
    },{
        highWaterMark: 2
    })
}
  , Kp = 64 * 1024
  , {isFunction: la} = L
  , wS = ( ({Request: r, Response: n}) => ({
    Request: r,
    Response: n
}))(L.global)
  , {ReadableStream: Gp, TextEncoder: Yp} = L.global
  , Jp = (r, ...n) => {
    try {
        return !!r(...n)
    } catch {
        return !1
    }
}
  , bS = r => {
    r = L.merge.call({
        skipUndefined: !0
    }, wS, r);
    const {fetch: n, Request: s, Response: i} = r
      , l = n ? la(n) : typeof fetch == "function"
      , c = la(s)
      , d = la(i);
    if (!l)
        return !1;
    const p = l && la(Gp)
      , m = l && (typeof Yp == "function" ? (k => S => k.encode(S))(new Yp) : async k => new Uint8Array(await new s(k).arrayBuffer()))
      , y = c && p && Jp( () => {
        let k = !1;
        const S = new s(mt.origin,{
            body: new Gp,
            method: "POST",
            get duplex() {
                return k = !0,
                "half"
            }
        }).headers.has("Content-Type");
        return k && !S
    }
    )
      , v = d && p && Jp( () => L.isReadableStream(new i("").body))
      , x = {
        stream: v && (k => k.body)
    };
    l && ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(k => {
        !x[k] && (x[k] = (S, w) => {
            let M = S && S[k];
            if (M)
                return M.call(S);
            throw new xe(`Response type '${k}' is not supported`,xe.ERR_NOT_SUPPORT,w)
        }
        )
    }
    );
    const j = async k => {
        if (k == null)
            return 0;
        if (L.isBlob(k))
            return k.size;
        if (L.isSpecCompliantForm(k))
            return (await new s(mt.origin,{
                method: "POST",
                body: k
            }).arrayBuffer()).byteLength;
        if (L.isArrayBufferView(k) || L.isArrayBuffer(k))
            return k.byteLength;
        if (L.isURLSearchParams(k) && (k = k + ""),
        L.isString(k))
            return (await m(k)).byteLength
    }
      , T = async (k, S) => {
        const w = L.toFiniteNumber(k.getContentLength());
        return w ?? j(S)
    }
    ;
    return async k => {
        let {url: S, method: w, data: M, signal: H, cancelToken: U, timeout: D, onDownloadProgress: G, onUploadProgress: de, responseType: ge, headers: I, withCredentials: Q="same-origin", fetchOptions: K} = Bg(k)
          , Z = n || fetch;
        ge = ge ? (ge + "").toLowerCase() : "text";
        let B = gS([H, U && U.toAbortSignal()], D)
          , te = null;
        const Ee = B && B.unsubscribe && ( () => {
            B.unsubscribe()
        }
        );
        let fe;
        try {
            if (de && y && w !== "get" && w !== "head" && (fe = await T(I, M)) !== 0) {
                let R = new s(S,{
                    method: "POST",
                    body: M,
                    duplex: "half"
                }), z;
                if (L.isFormData(M) && (z = R.headers.get("content-type")) && I.setContentType(z),
                R.body) {
                    const [le,ce] = qp(fe, Ra(Hp(de)));
                    M = Qp(R.body, Kp, le, ce)
                }
            }
            L.isString(Q) || (Q = Q ? "include" : "omit");
            const ie = c && "credentials"in s.prototype
              , we = {
                ...K,
                signal: B,
                method: w.toUpperCase(),
                headers: I.normalize().toJSON(),
                body: M,
                duplex: "half",
                credentials: ie ? Q : void 0
            };
            te = c && new s(S,we);
            let F = await (c ? Z(te, K) : Z(S, we));
            const ue = v && (ge === "stream" || ge === "response");
            if (v && (G || ue && Ee)) {
                const R = {};
                ["status", "statusText", "headers"].forEach(be => {
                    R[be] = F[be]
                }
                );
                const z = L.toFiniteNumber(F.headers.get("content-length"))
                  , [le,ce] = G && qp(z, Ra(Hp(G), !0)) || [];
                F = new i(Qp(F.body, Kp, le, () => {
                    ce && ce(),
                    Ee && Ee()
                }
                ),R)
            }
            ge = ge || "text";
            let Y = await x[L.findKey(x, ge) || "text"](F, k);
            return !ue && Ee && Ee(),
            await new Promise( (R, z) => {
                Ug(R, z, {
                    data: Y,
                    headers: Rt.from(F.headers),
                    status: F.status,
                    statusText: F.statusText,
                    config: k,
                    request: te
                })
            }
            )
        } catch (ie) {
            throw Ee && Ee(),
            ie && ie.name === "TypeError" && /Load failed|fetch/i.test(ie.message) ? Object.assign(new xe("Network Error",xe.ERR_NETWORK,k,te), {
                cause: ie.cause || ie
            }) : xe.from(ie, ie && ie.code, k, te)
        }
    }
}
  , SS = new Map
  , $g = r => {
    let n = r ? r.env : {};
    const {fetch: s, Request: i, Response: l} = n
      , c = [i, l, s];
    let d = c.length, p = d, m, y, v = SS;
    for (; p--; )
        m = c[p],
        y = v.get(m),
        y === void 0 && v.set(m, y = p ? new Map : bS(n)),
        v = y;
    return y
}
;
$g();
const Pc = {
    http: Ub,
    xhr: mS,
    fetch: {
        get: $g
    }
};
L.forEach(Pc, (r, n) => {
    if (r) {
        try {
            Object.defineProperty(r, "name", {
                value: n
            })
        } catch {}
        Object.defineProperty(r, "adapterName", {
            value: n
        })
    }
}
);
const Xp = r => `- ${r}`
  , kS = r => L.isFunction(r) || r === null || r === !1
  , Vg = {
    getAdapter: (r, n) => {
        r = L.isArray(r) ? r : [r];
        const {length: s} = r;
        let i, l;
        const c = {};
        for (let d = 0; d < s; d++) {
            i = r[d];
            let p;
            if (l = i,
            !kS(i) && (l = Pc[(p = String(i)).toLowerCase()],
            l === void 0))
                throw new xe(`Unknown adapter '${p}'`);
            if (l && (L.isFunction(l) || (l = l.get(n))))
                break;
            c[p || "#" + d] = l
        }
        if (!l) {
            const d = Object.entries(c).map( ([m,y]) => `adapter ${m} ` + (y === !1 ? "is not supported by the environment" : "is not available in the build"));
            let p = s ? d.length > 1 ? `since :
` + d.map(Xp).join(`
`) : " " + Xp(d[0]) : "as no adapter specified";
            throw new xe("There is no suitable adapter to dispatch the request " + p,"ERR_NOT_SUPPORT")
        }
        return l
    }
    ,
    adapters: Pc
};
function Yu(r) {
    if (r.cancelToken && r.cancelToken.throwIfRequested(),
    r.signal && r.signal.aborted)
        throw new Ls(null,r)
}
function Zp(r) {
    return Yu(r),
    r.headers = Rt.from(r.headers),
    r.data = Gu.call(r, r.transformRequest),
    ["post", "put", "patch"].indexOf(r.method) !== -1 && r.headers.setContentType("application/x-www-form-urlencoded", !1),
    Vg.getAdapter(r.adapter || Wo.adapter, r)(r).then(function(i) {
        return Yu(r),
        i.data = Gu.call(r, r.transformResponse, i),
        i.headers = Rt.from(i.headers),
        i
    }, function(i) {
        return Dg(i) || (Yu(r),
        i && i.response && (i.response.data = Gu.call(r, r.transformResponse, i.response),
        i.response.headers = Rt.from(i.response.headers))),
        Promise.reject(i)
    })
}
const qg = "1.12.2"
  , Ua = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach( (r, n) => {
    Ua[r] = function(i) {
        return typeof i === r || "a" + (n < 1 ? "n " : " ") + r
    }
}
);
const em = {};
Ua.transitional = function(n, s, i) {
    function l(c, d) {
        return "[Axios v" + qg + "] Transitional option '" + c + "'" + d + (i ? ". " + i : "")
    }
    return (c, d, p) => {
        if (n === !1)
            throw new xe(l(d, " has been removed" + (s ? " in " + s : "")),xe.ERR_DEPRECATED);
        return s && !em[d] && (em[d] = !0,
        console.warn(l(d, " has been deprecated since v" + s + " and will be removed in the near future"))),
        n ? n(c, d, p) : !0
    }
}
;
Ua.spelling = function(n) {
    return (s, i) => (console.warn(`${i} is likely a misspelling of ${n}`),
    !0)
}
;
function ES(r, n, s) {
    if (typeof r != "object")
        throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);
    const i = Object.keys(r);
    let l = i.length;
    for (; l-- > 0; ) {
        const c = i[l]
          , d = n[c];
        if (d) {
            const p = r[c]
              , m = p === void 0 || d(p, c, r);
            if (m !== !0)
                throw new xe("option " + c + " must be " + m,xe.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (s !== !0)
            throw new xe("Unknown option " + c,xe.ERR_BAD_OPTION)
    }
}
const xa = {
    assertOptions: ES,
    validators: Ua
}
  , un = xa.validators;
let Fr = class {
    constructor(n) {
        this.defaults = n || {},
        this.interceptors = {
            request: new $p,
            response: new $p
        }
    }
    async request(n, s) {
        try {
            return await this._request(n, s)
        } catch (i) {
            if (i instanceof Error) {
                let l = {};
                Error.captureStackTrace ? Error.captureStackTrace(l) : l = new Error;
                const c = l.stack ? l.stack.replace(/^.+\n/, "") : "";
                try {
                    i.stack ? c && !String(i.stack).endsWith(c.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + c) : i.stack = c
                } catch {}
            }
            throw i
        }
    }
    _request(n, s) {
        typeof n == "string" ? (s = s || {},
        s.url = n) : s = n || {},
        s = Ur(this.defaults, s);
        const {transitional: i, paramsSerializer: l, headers: c} = s;
        i !== void 0 && xa.assertOptions(i, {
            silentJSONParsing: un.transitional(un.boolean),
            forcedJSONParsing: un.transitional(un.boolean),
            clarifyTimeoutError: un.transitional(un.boolean)
        }, !1),
        l != null && (L.isFunction(l) ? s.paramsSerializer = {
            serialize: l
        } : xa.assertOptions(l, {
            encode: un.function,
            serialize: un.function
        }, !0)),
        s.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? s.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : s.allowAbsoluteUrls = !0),
        xa.assertOptions(s, {
            baseUrl: un.spelling("baseURL"),
            withXsrfToken: un.spelling("withXSRFToken")
        }, !0),
        s.method = (s.method || this.defaults.method || "get").toLowerCase();
        let d = c && L.merge(c.common, c[s.method]);
        c && L.forEach(["delete", "get", "head", "post", "put", "patch", "common"], k => {
            delete c[k]
        }
        ),
        s.headers = Rt.concat(d, c);
        const p = [];
        let m = !0;
        this.interceptors.request.forEach(function(S) {
            typeof S.runWhen == "function" && S.runWhen(s) === !1 || (m = m && S.synchronous,
            p.unshift(S.fulfilled, S.rejected))
        });
        const y = [];
        this.interceptors.response.forEach(function(S) {
            y.push(S.fulfilled, S.rejected)
        });
        let v, x = 0, j;
        if (!m) {
            const k = [Zp.bind(this), void 0];
            for (k.unshift(...p),
            k.push(...y),
            j = k.length,
            v = Promise.resolve(s); x < j; )
                v = v.then(k[x++], k[x++]);
            return v
        }
        j = p.length;
        let T = s;
        for (; x < j; ) {
            const k = p[x++]
              , S = p[x++];
            try {
                T = k(T)
            } catch (w) {
                S.call(this, w);
                break
            }
        }
        try {
            v = Zp.call(this, T)
        } catch (k) {
            return Promise.reject(k)
        }
        for (x = 0,
        j = y.length; x < j; )
            v = v.then(y[x++], y[x++]);
        return v
    }
    getUri(n) {
        n = Ur(this.defaults, n);
        const s = zg(n.baseURL, n.url, n.allowAbsoluteUrls);
        return Ig(s, n.params, n.paramsSerializer)
    }
}
;
L.forEach(["delete", "get", "head", "options"], function(n) {
    Fr.prototype[n] = function(s, i) {
        return this.request(Ur(i || {}, {
            method: n,
            url: s,
            data: (i || {}).data
        }))
    }
});
L.forEach(["post", "put", "patch"], function(n) {
    function s(i) {
        return function(c, d, p) {
            return this.request(Ur(p || {}, {
                method: n,
                headers: i ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: c,
                data: d
            }))
        }
    }
    Fr.prototype[n] = s(),
    Fr.prototype[n + "Form"] = s(!0)
});
let CS = class Hg {
    constructor(n) {
        if (typeof n != "function")
            throw new TypeError("executor must be a function.");
        let s;
        this.promise = new Promise(function(c) {
            s = c
        }
        );
        const i = this;
        this.promise.then(l => {
            if (!i._listeners)
                return;
            let c = i._listeners.length;
            for (; c-- > 0; )
                i._listeners[c](l);
            i._listeners = null
        }
        ),
        this.promise.then = l => {
            let c;
            const d = new Promise(p => {
                i.subscribe(p),
                c = p
            }
            ).then(l);
            return d.cancel = function() {
                i.unsubscribe(c)
            }
            ,
            d
        }
        ,
        n(function(c, d, p) {
            i.reason || (i.reason = new Ls(c,d,p),
            s(i.reason))
        })
    }
    throwIfRequested() {
        if (this.reason)
            throw this.reason
    }
    subscribe(n) {
        if (this.reason) {
            n(this.reason);
            return
        }
        this._listeners ? this._listeners.push(n) : this._listeners = [n]
    }
    unsubscribe(n) {
        if (!this._listeners)
            return;
        const s = this._listeners.indexOf(n);
        s !== -1 && this._listeners.splice(s, 1)
    }
    toAbortSignal() {
        const n = new AbortController
          , s = i => {
            n.abort(i)
        }
        ;
        return this.subscribe(s),
        n.signal.unsubscribe = () => this.unsubscribe(s),
        n.signal
    }
    static source() {
        let n;
        return {
            token: new Hg(function(l) {
                n = l
            }
            ),
            cancel: n
        }
    }
}
;
function NS(r) {
    return function(s) {
        return r.apply(null, s)
    }
}
function _S(r) {
    return L.isObject(r) && r.isAxiosError === !0
}
const Oc = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Oc).forEach( ([r,n]) => {
    Oc[n] = r
}
);
function Wg(r) {
    const n = new Fr(r)
      , s = kg(Fr.prototype.request, n);
    return L.extend(s, Fr.prototype, n, {
        allOwnKeys: !0
    }),
    L.extend(s, n, null, {
        allOwnKeys: !0
    }),
    s.create = function(l) {
        return Wg(Ur(r, l))
    }
    ,
    s
}
const We = Wg(Wo);
We.Axios = Fr;
We.CanceledError = Ls;
We.CancelToken = CS;
We.isCancel = Dg;
We.VERSION = qg;
We.toFormData = Da;
We.AxiosError = xe;
We.Cancel = We.CanceledError;
We.all = function(n) {
    return Promise.all(n)
}
;
We.spread = NS;
We.isAxiosError = _S;
We.mergeConfig = Ur;
We.AxiosHeaders = Rt;
We.formToJSON = r => Fg(L.isHTMLForm(r) ? new FormData(r) : r);
We.getAdapter = Vg.getAdapter;
We.HttpStatusCode = Oc;
We.default = We;
const {Axios: s2, AxiosError: o2, CanceledError: i2, isCancel: a2, CancelToken: l2, VERSION: u2, all: c2, Cancel: d2, isAxiosError: f2, spread: h2, toFormData: p2, AxiosHeaders: m2, HttpStatusCode: g2, formToJSON: y2, getAdapter: v2, mergeConfig: x2} = We
  , jS = typeof window > "u"
  , tm = !jS && window.self !== window.top
  , lt = [];
for (let r = 0; r < 256; ++r)
    lt.push((r + 256).toString(16).slice(1));
function RS(r, n=0) {
    return (lt[r[n + 0]] + lt[r[n + 1]] + lt[r[n + 2]] + lt[r[n + 3]] + "-" + lt[r[n + 4]] + lt[r[n + 5]] + "-" + lt[r[n + 6]] + lt[r[n + 7]] + "-" + lt[r[n + 8]] + lt[r[n + 9]] + "-" + lt[r[n + 10]] + lt[r[n + 11]] + lt[r[n + 12]] + lt[r[n + 13]] + lt[r[n + 14]] + lt[r[n + 15]]).toLowerCase()
}
let Ju;
const TS = new Uint8Array(16);
function PS() {
    if (!Ju) {
        if (typeof crypto > "u" || !crypto.getRandomValues)
            throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        Ju = crypto.getRandomValues.bind(crypto)
    }
    return Ju(TS)
}
const OS = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto)
  , nm = {
    randomUUID: OS
};
function AS(r, n, s) {
    var l;
    r = r || {};
    const i = r.random ?? ((l = r.rng) == null ? void 0 : l.call(r)) ?? PS();
    if (i.length < 16)
        throw new Error("Random bytes length must be >= 16");
    return i[6] = i[6] & 15 | 64,
    i[8] = i[8] & 63 | 128,
    RS(i)
}
function LS(r, n, s) {
    return nm.randomUUID && !r ? nm.randomUUID() : AS(r)
}
class IS extends Error {
    constructor(n, s, i, l, c) {
        super(n),
        this.name = "Base44Error",
        this.status = s,
        this.code = i,
        this.data = l,
        this.originalError = c
    }
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            code: this.code,
            data: this.data
        }
    }
}
function jo({baseURL: r, headers: n={}, token: s, interceptResponses: i=!0, onError: l}) {
    const c = We.create({
        baseURL: r,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...n
        }
    });
    return s && (c.defaults.headers.common.Authorization = `Bearer ${s}`),
    c.interceptors.request.use(d => {
        typeof window < "u" && d.headers.set("X-Origin-URL", window.location.href);
        const p = LS();
        if (d.requestId = p,
        tm)
            try {
                window.parent.postMessage({
                    type: "api-request-start",
                    requestId: p,
                    data: {
                        url: r + d.url,
                        method: d.method,
                        body: d.data instanceof FormData ? "[FormData object]" : d.data
                    }
                }, "*")
            } catch {}
        return d
    }
    ),
    i && c.interceptors.response.use(d => {
        var p;
        const m = (p = d.config) === null || p === void 0 ? void 0 : p.requestId;
        try {
            tm && m && window.parent.postMessage({
                type: "api-request-end",
                requestId: m,
                data: {
                    statusCode: d.status,
                    response: d.data
                }
            }, "*")
        } catch {}
        return d.data
    }
    , d => {
        var p, m, y, v, x, j, T, k;
        const S = ((m = (p = d.response) === null || p === void 0 ? void 0 : p.data) === null || m === void 0 ? void 0 : m.message) || ((v = (y = d.response) === null || y === void 0 ? void 0 : y.data) === null || v === void 0 ? void 0 : v.detail) || d.message
          , w = new IS(S,(x = d.response) === null || x === void 0 ? void 0 : x.status,(T = (j = d.response) === null || j === void 0 ? void 0 : j.data) === null || T === void 0 ? void 0 : T.code,(k = d.response) === null || k === void 0 ? void 0 : k.data,d);
        return l == null || l(w),
        Promise.reject(w)
    }
    ),
    c
}
function rm(r, n) {
    return new Proxy({},{
        get(s, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_")))
                return MS(r, n, i)
        }
    })
}
function MS(r, n, s) {
    const i = `/apps/${n}/entities/${s}`;
    return {
        async list(l, c, d, p) {
            const m = {};
            return l && (m.sort = l),
            c && (m.limit = c),
            d && (m.skip = d),
            p && (m.fields = Array.isArray(p) ? p.join(",") : p),
            r.get(i, {
                params: m
            })
        },
        async filter(l, c, d, p, m) {
            const y = {
                q: JSON.stringify(l)
            };
            return c && (y.sort = c),
            d && (y.limit = d),
            p && (y.skip = p),
            m && (y.fields = Array.isArray(m) ? m.join(",") : m),
            r.get(i, {
                params: y
            })
        },
        async get(l) {
            return r.get(`${i}/${l}`)
        },
        async create(l) {
            return r.post(i, l)
        },
        async update(l, c) {
            return r.put(`${i}/${l}`, c)
        },
        async delete(l) {
            return r.delete(`${i}/${l}`)
        },
        async deleteMany(l) {
            return r.delete(i, {
                data: l
            })
        },
        async bulkCreate(l) {
            return r.post(`${i}/bulk`, l)
        },
        async importEntities(l) {
            const c = new FormData;
            return c.append("file", l, l.name),
            r.post(`${i}/import`, c, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
        }
    }
}
function sm(r, n) {
    return new Proxy({},{
        get(s, i) {
            if (!(typeof i != "string" || i === "then" || i.startsWith("_")))
                return new Proxy({},{
                    get(l, c) {
                        if (!(typeof c != "string" || c === "then" || c.startsWith("_")))
                            return async d => {
                                if (typeof d == "string")
                                    throw new Error(`Integration ${c} must receive an object with named parameters, received: ${d}`);
                                let p, m;
                                return d instanceof FormData || d && Object.values(d).some(y => y instanceof File) ? (p = new FormData,
                                Object.keys(d).forEach(y => {
                                    d[y]instanceof File ? p.append(y, d[y], d[y].name) : typeof d[y] == "object" && d[y] !== null ? p.append(y, JSON.stringify(d[y])) : p.append(y, d[y])
                                }
                                ),
                                m = "multipart/form-data") : (p = d,
                                m = "application/json"),
                                i === "Core" ? r.post(`/apps/${n}/integration-endpoints/Core/${c}`, p || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                }) : r.post(`/apps/${n}/integration-endpoints/installable/${i}/integration-endpoints/${c}`, p || d, {
                                    headers: {
                                        "Content-Type": m
                                    }
                                })
                            }
                    }
                })
        }
    })
}
function FS(r, n, s, i) {
    return {
        async me() {
            return r.get(`/apps/${s}/entities/User/me`)
        },
        async updateMe(l) {
            return r.put(`/apps/${s}/entities/User/me`, l)
        },
        redirectToLogin(l) {
            var c;
            if (typeof window > "u")
                throw new Error("Login method can only be used in a browser environment");
            const d = l ? new URL(l,window.location.origin).toString() : window.location.href
              , p = `${(c = i.appBaseUrl) !== null && c !== void 0 ? c : ""}/login?from_url=${encodeURIComponent(d)}`;
            window.location.href = p
        },
        logout(l) {
            if (delete r.defaults.headers.common.Authorization,
            typeof window < "u" && window.localStorage)
                try {
                    window.localStorage.removeItem("base44_access_token"),
                    window.localStorage.removeItem("token")
                } catch (c) {
                    console.error("Failed to remove token from localStorage:", c)
                }
            typeof window < "u" && (l ? window.location.href = l : window.location.reload())
        },
        setToken(l, c=!0) {
            if (l && (r.defaults.headers.common.Authorization = `Bearer ${l}`,
            n.defaults.headers.common.Authorization = `Bearer ${l}`,
            c && typeof window < "u" && window.localStorage))
                try {
                    window.localStorage.setItem("base44_access_token", l),
                    window.localStorage.setItem("token", l)
                } catch (d) {
                    console.error("Failed to save token to localStorage:", d)
                }
        },
        async loginViaEmailPassword(l, c, d) {
            var p;
            try {
                const m = await r.post(`/apps/${s}/auth/login`, {
                    email: l,
                    password: c,
                    ...d && {
                        turnstile_token: d
                    }
                })
                  , {access_token: y, user: v} = m;
                return y && this.setToken(y),
                {
                    access_token: y,
                    user: v
                }
            } catch (m) {
                throw ((p = m.response) === null || p === void 0 ? void 0 : p.status) === 401 && await this.logout(),
                m
            }
        },
        async isAuthenticated() {
            try {
                return await this.me(),
                !0
            } catch {
                return !1
            }
        },
        inviteUser(l, c) {
            return r.post(`/apps/${s}/users/invite-user`, {
                user_email: l,
                role: c
            })
        },
        register(l) {
            return r.post(`/apps/${s}/auth/register`, l)
        },
        verifyOtp({email: l, otpCode: c}) {
            return r.post(`/apps/${s}/auth/verify-otp`, {
                email: l,
                otp_code: c
            })
        },
        resendOtp(l) {
            return r.post(`/apps/${s}/auth/resend-otp`, {
                email: l
            })
        },
        resetPasswordRequest(l) {
            return r.post(`/apps/${s}/auth/reset-password-request`, {
                email: l
            })
        },
        resetPassword({resetToken: l, newPassword: c}) {
            return r.post(`/apps/${s}/auth/reset-password`, {
                reset_token: l,
                new_password: c
            })
        },
        changePassword({userId: l, currentPassword: c, newPassword: d}) {
            return r.post(`/apps/${s}/auth/change-password`, {
                user_id: l,
                current_password: c,
                new_password: d
            })
        }
    }
}
function DS(r, n, s) {
    return {
        async getAccessToken(i) {
            const l = `/apps/${n}/auth/sso/accesstoken/${i}`
              , c = {};
            return s && (c["on-behalf-of"] = `Bearer ${s}`),
            r.get(l, {
                headers: c
            })
        }
    }
}
function US(r, n) {
    return {
        async getAccessToken(s) {
            if (!s || typeof s != "string")
                throw new Error("Integration type is required and must be a string");
            return (await r.get(`/apps/${n}/external-auth/tokens/${s}`)).access_token
        }
    }
}
function nd(r={}) {
    const {storageKey: n="base44_access_token", paramName: s="access_token", saveToStorage: i=!0, removeFromUrl: l=!0} = r;
    let c = null;
    if (typeof window < "u" && window.location)
        try {
            const d = new URLSearchParams(window.location.search);
            if (c = d.get(s),
            c) {
                if (i && zS(c, {
                    storageKey: n
                }),
                l) {
                    d.delete(s);
                    const p = `${window.location.pathname}${d.toString() ? `?${d.toString()}` : ""}${window.location.hash}`;
                    window.history.replaceState({}, document.title, p)
                }
                return c
            }
        } catch (d) {
            console.error("Error retrieving token from URL:", d)
        }
    if (typeof window < "u" && window.localStorage)
        try {
            return c = window.localStorage.getItem(n),
            c
        } catch (d) {
            console.error("Error retrieving token from localStorage:", d)
        }
    return null
}
function zS(r, n) {
    const {storageKey: s="base44_access_token"} = n;
    if (typeof window > "u" || !window.localStorage || !r)
        return !1;
    try {
        return window.localStorage.setItem(s, r),
        window.localStorage.setItem("token", r),
        !0
    } catch (i) {
        return console.error("Error saving token to localStorage:", i),
        !1
    }
}
function om(r, n) {
    return {
        async invoke(s, i) {
            if (typeof i == "string")
                throw new Error(`Function ${s} must receive an object with named parameters, received: ${i}`);
            let l, c;
            return i instanceof FormData || i && Object.values(i).some(d => d instanceof File) ? (l = new FormData,
            Object.keys(i).forEach(d => {
                i[d]instanceof File ? l.append(d, i[d], i[d].name) : typeof i[d] == "object" && i[d] !== null ? l.append(d, JSON.stringify(i[d])) : l.append(d, i[d])
            }
            ),
            c = "multipart/form-data") : (l = i,
            c = "application/json"),
            r.post(`/apps/${n}/functions/${s}`, l || i, {
                headers: {
                    "Content-Type": c
                }
            })
        }
    }
}
function im({axios: r, socket: n, appId: s, serverUrl: i, token: l}) {
    const c = `/apps/${s}/agents`;
    return {
        getConversations: () => r.get(`${c}/conversations`),
        getConversation: T => r.get(`${c}/conversations/${T}`),
        listConversations: T => r.get(`${c}/conversations`, {
            params: T
        }),
        createConversation: T => r.post(`${c}/conversations`, T),
        addMessage: async (T, k) => {
            const S = `/agent-conversations/${T.id}`;
            return await n.updateModel(S, {
                ...T,
                messages: [...T.messages || [], k]
            }),
            r.post(`${c}/conversations/${T.id}/messages`, k)
        }
        ,
        subscribeToConversation: (T, k) => {
            const S = `/agent-conversations/${T}`;
            return n.subscribeToRoom(S, {
                connect: () => {}
                ,
                update_model: ({data: w}) => {
                    const M = JSON.parse(w);
                    k == null || k(M)
                }
            })
        }
        ,
        getWhatsAppConnectURL: T => {
            const k = `${i}/api/apps/${s}/agents/${encodeURIComponent(T)}/whatsapp`
              , S = l ?? nd();
            return S ? `${k}?token=${S}` : k
        }
    }
}
function am(r, n) {
    const s = `/app-logs/${n}`;
    return {
        async logUserInApp(i) {
            await r.post(`${s}/log-user-in-app/${i}`)
        },
        async fetchLogs(i={}) {
            return await r.get(s, {
                params: i
            })
        },
        async getStats(i={}) {
            return await r.get(`${s}/stats`, {
                params: i
            })
        }
    }
}
const pn = Object.create(null);
pn.open = "0";
pn.close = "1";
pn.ping = "2";
pn.pong = "3";
pn.message = "4";
pn.upgrade = "5";
pn.noop = "6";
const wa = Object.create(null);
Object.keys(pn).forEach(r => {
    wa[pn[r]] = r
}
);
const Ac = {
    type: "error",
    data: "parser error"
}
  , Qg = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]"
  , Kg = typeof ArrayBuffer == "function"
  , Gg = r => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer
  , rd = ({type: r, data: n}, s, i) => Qg && n instanceof Blob ? s ? i(n) : lm(n, i) : Kg && (n instanceof ArrayBuffer || Gg(n)) ? s ? i(n) : lm(new Blob([n]), i) : i(pn[r] + (n || ""))
  , lm = (r, n) => {
    const s = new FileReader;
    return s.onload = function() {
        const i = s.result.split(",")[1];
        n("b" + (i || ""))
    }
    ,
    s.readAsDataURL(r)
}
;
function um(r) {
    return r instanceof Uint8Array ? r : r instanceof ArrayBuffer ? new Uint8Array(r) : new Uint8Array(r.buffer,r.byteOffset,r.byteLength)
}
let Xu;
function BS(r, n) {
    if (Qg && r.data instanceof Blob)
        return r.data.arrayBuffer().then(um).then(n);
    if (Kg && (r.data instanceof ArrayBuffer || Gg(r.data)))
        return n(um(r.data));
    rd(r, !1, s => {
        Xu || (Xu = new TextEncoder),
        n(Xu.encode(s))
    }
    )
}
const cm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
  , Ro = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let r = 0; r < cm.length; r++)
    Ro[cm.charCodeAt(r)] = r;
const $S = r => {
    let n = r.length * .75, s = r.length, i, l = 0, c, d, p, m;
    r[r.length - 1] === "=" && (n--,
    r[r.length - 2] === "=" && n--);
    const y = new ArrayBuffer(n)
      , v = new Uint8Array(y);
    for (i = 0; i < s; i += 4)
        c = Ro[r.charCodeAt(i)],
        d = Ro[r.charCodeAt(i + 1)],
        p = Ro[r.charCodeAt(i + 2)],
        m = Ro[r.charCodeAt(i + 3)],
        v[l++] = c << 2 | d >> 4,
        v[l++] = (d & 15) << 4 | p >> 2,
        v[l++] = (p & 3) << 6 | m & 63;
    return y
}
  , VS = typeof ArrayBuffer == "function"
  , sd = (r, n) => {
    if (typeof r != "string")
        return {
            type: "message",
            data: Yg(r, n)
        };
    const s = r.charAt(0);
    return s === "b" ? {
        type: "message",
        data: qS(r.substring(1), n)
    } : wa[s] ? r.length > 1 ? {
        type: wa[s],
        data: r.substring(1)
    } : {
        type: wa[s]
    } : Ac
}
  , qS = (r, n) => {
    if (VS) {
        const s = $S(r);
        return Yg(s, n)
    } else
        return {
            base64: !0,
            data: r
        }
}
  , Yg = (r, n) => {
    switch (n) {
    case "blob":
        return r instanceof Blob ? r : new Blob([r]);
    case "arraybuffer":
    default:
        return r instanceof ArrayBuffer ? r : r.buffer
    }
}
  , Jg = ""
  , HS = (r, n) => {
    const s = r.length
      , i = new Array(s);
    let l = 0;
    r.forEach( (c, d) => {
        rd(c, !1, p => {
            i[d] = p,
            ++l === s && n(i.join(Jg))
        }
        )
    }
    )
}
  , WS = (r, n) => {
    const s = r.split(Jg)
      , i = [];
    for (let l = 0; l < s.length; l++) {
        const c = sd(s[l], n);
        if (i.push(c),
        c.type === "error")
            break
    }
    return i
}
;
function QS() {
    return new TransformStream({
        transform(r, n) {
            BS(r, s => {
                const i = s.length;
                let l;
                if (i < 126)
                    l = new Uint8Array(1),
                    new DataView(l.buffer).setUint8(0, i);
                else if (i < 65536) {
                    l = new Uint8Array(3);
                    const c = new DataView(l.buffer);
                    c.setUint8(0, 126),
                    c.setUint16(1, i)
                } else {
                    l = new Uint8Array(9);
                    const c = new DataView(l.buffer);
                    c.setUint8(0, 127),
                    c.setBigUint64(1, BigInt(i))
                }
                r.data && typeof r.data != "string" && (l[0] |= 128),
                n.enqueue(l),
                n.enqueue(s)
            }
            )
        }
    })
}
let Zu;
function ua(r) {
    return r.reduce( (n, s) => n + s.length, 0)
}
function ca(r, n) {
    if (r[0].length === n)
        return r.shift();
    const s = new Uint8Array(n);
    let i = 0;
    for (let l = 0; l < n; l++)
        s[l] = r[0][i++],
        i === r[0].length && (r.shift(),
        i = 0);
    return r.length && i < r[0].length && (r[0] = r[0].slice(i)),
    s
}
function KS(r, n) {
    Zu || (Zu = new TextDecoder);
    const s = [];
    let i = 0
      , l = -1
      , c = !1;
    return new TransformStream({
        transform(d, p) {
            for (s.push(d); ; ) {
                if (i === 0) {
                    if (ua(s) < 1)
                        break;
                    const m = ca(s, 1);
                    c = (m[0] & 128) === 128,
                    l = m[0] & 127,
                    l < 126 ? i = 3 : l === 126 ? i = 1 : i = 2
                } else if (i === 1) {
                    if (ua(s) < 2)
                        break;
                    const m = ca(s, 2);
                    l = new DataView(m.buffer,m.byteOffset,m.length).getUint16(0),
                    i = 3
                } else if (i === 2) {
                    if (ua(s) < 8)
                        break;
                    const m = ca(s, 8)
                      , y = new DataView(m.buffer,m.byteOffset,m.length)
                      , v = y.getUint32(0);
                    if (v > Math.pow(2, 21) - 1) {
                        p.enqueue(Ac);
                        break
                    }
                    l = v * Math.pow(2, 32) + y.getUint32(4),
                    i = 3
                } else {
                    if (ua(s) < l)
                        break;
                    const m = ca(s, l);
                    p.enqueue(sd(c ? m : Zu.decode(m), n)),
                    i = 0
                }
                if (l === 0 || l > r) {
                    p.enqueue(Ac);
                    break
                }
            }
        }
    })
}
const Xg = 4;
function Ge(r) {
    if (r)
        return GS(r)
}
function GS(r) {
    for (var n in Ge.prototype)
        r[n] = Ge.prototype[n];
    return r
}
Ge.prototype.on = Ge.prototype.addEventListener = function(r, n) {
    return this._callbacks = this._callbacks || {},
    (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(n),
    this
}
;
Ge.prototype.once = function(r, n) {
    function s() {
        this.off(r, s),
        n.apply(this, arguments)
    }
    return s.fn = n,
    this.on(r, s),
    this
}
;
Ge.prototype.off = Ge.prototype.removeListener = Ge.prototype.removeAllListeners = Ge.prototype.removeEventListener = function(r, n) {
    if (this._callbacks = this._callbacks || {},
    arguments.length == 0)
        return this._callbacks = {},
        this;
    var s = this._callbacks["$" + r];
    if (!s)
        return this;
    if (arguments.length == 1)
        return delete this._callbacks["$" + r],
        this;
    for (var i, l = 0; l < s.length; l++)
        if (i = s[l],
        i === n || i.fn === n) {
            s.splice(l, 1);
            break
        }
    return s.length === 0 && delete this._callbacks["$" + r],
    this
}
;
Ge.prototype.emit = function(r) {
    this._callbacks = this._callbacks || {};
    for (var n = new Array(arguments.length - 1), s = this._callbacks["$" + r], i = 1; i < arguments.length; i++)
        n[i - 1] = arguments[i];
    if (s) {
        s = s.slice(0);
        for (var i = 0, l = s.length; i < l; ++i)
            s[i].apply(this, n)
    }
    return this
}
;
Ge.prototype.emitReserved = Ge.prototype.emit;
Ge.prototype.listeners = function(r) {
    return this._callbacks = this._callbacks || {},
    this._callbacks["$" + r] || []
}
;
Ge.prototype.hasListeners = function(r) {
    return !!this.listeners(r).length
}
;
const za = typeof Promise == "function" && typeof Promise.resolve == "function" ? n => Promise.resolve().then(n) : (n, s) => s(n, 0)
  , qt = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
  , YS = "arraybuffer";
function Zg(r, ...n) {
    return n.reduce( (s, i) => (r.hasOwnProperty(i) && (s[i] = r[i]),
    s), {})
}
const JS = qt.setTimeout
  , XS = qt.clearTimeout;
function Ba(r, n) {
    n.useNativeTimers ? (r.setTimeoutFn = JS.bind(qt),
    r.clearTimeoutFn = XS.bind(qt)) : (r.setTimeoutFn = qt.setTimeout.bind(qt),
    r.clearTimeoutFn = qt.clearTimeout.bind(qt))
}
const ZS = 1.33;
function ek(r) {
    return typeof r == "string" ? tk(r) : Math.ceil((r.byteLength || r.size) * ZS)
}
function tk(r) {
    let n = 0
      , s = 0;
    for (let i = 0, l = r.length; i < l; i++)
        n = r.charCodeAt(i),
        n < 128 ? s += 1 : n < 2048 ? s += 2 : n < 55296 || n >= 57344 ? s += 3 : (i++,
        s += 4);
    return s
}
function ey() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5)
}
function nk(r) {
    let n = "";
    for (let s in r)
        r.hasOwnProperty(s) && (n.length && (n += "&"),
        n += encodeURIComponent(s) + "=" + encodeURIComponent(r[s]));
    return n
}
function rk(r) {
    let n = {}
      , s = r.split("&");
    for (let i = 0, l = s.length; i < l; i++) {
        let c = s[i].split("=");
        n[decodeURIComponent(c[0])] = decodeURIComponent(c[1])
    }
    return n
}
class sk extends Error {
    constructor(n, s, i) {
        super(n),
        this.description = s,
        this.context = i,
        this.type = "TransportError"
    }
}
class od extends Ge {
    constructor(n) {
        super(),
        this.writable = !1,
        Ba(this, n),
        this.opts = n,
        this.query = n.query,
        this.socket = n.socket,
        this.supportsBinary = !n.forceBase64
    }
    onError(n, s, i) {
        return super.emitReserved("error", new sk(n,s,i)),
        this
    }
    open() {
        return this.readyState = "opening",
        this.doOpen(),
        this
    }
    close() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(),
        this.onClose()),
        this
    }
    send(n) {
        this.readyState === "open" && this.write(n)
    }
    onOpen() {
        this.readyState = "open",
        this.writable = !0,
        super.emitReserved("open")
    }
    onData(n) {
        const s = sd(n, this.socket.binaryType);
        this.onPacket(s)
    }
    onPacket(n) {
        super.emitReserved("packet", n)
    }
    onClose(n) {
        this.readyState = "closed",
        super.emitReserved("close", n)
    }
    pause(n) {}
    createUri(n, s={}) {
        return n + "://" + this._hostname() + this._port() + this.opts.path + this._query(s)
    }
    _hostname() {
        const n = this.opts.hostname;
        return n.indexOf(":") === -1 ? n : "[" + n + "]"
    }
    _port() {
        return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : ""
    }
    _query(n) {
        const s = nk(n);
        return s.length ? "?" + s : ""
    }
}
class ok extends od {
    constructor() {
        super(...arguments),
        this._polling = !1
    }
    get name() {
        return "polling"
    }
    doOpen() {
        this._poll()
    }
    pause(n) {
        this.readyState = "pausing";
        const s = () => {
            this.readyState = "paused",
            n()
        }
        ;
        if (this._polling || !this.writable) {
            let i = 0;
            this._polling && (i++,
            this.once("pollComplete", function() {
                --i || s()
            })),
            this.writable || (i++,
            this.once("drain", function() {
                --i || s()
            }))
        } else
            s()
    }
    _poll() {
        this._polling = !0,
        this.doPoll(),
        this.emitReserved("poll")
    }
    onData(n) {
        const s = i => {
            if (this.readyState === "opening" && i.type === "open" && this.onOpen(),
            i.type === "close")
                return this.onClose({
                    description: "transport closed by the server"
                }),
                !1;
            this.onPacket(i)
        }
        ;
        WS(n, this.socket.binaryType).forEach(s),
        this.readyState !== "closed" && (this._polling = !1,
        this.emitReserved("pollComplete"),
        this.readyState === "open" && this._poll())
    }
    doClose() {
        const n = () => {
            this.write([{
                type: "close"
            }])
        }
        ;
        this.readyState === "open" ? n() : this.once("open", n)
    }
    write(n) {
        this.writable = !1,
        HS(n, s => {
            this.doWrite(s, () => {
                this.writable = !0,
                this.emitReserved("drain")
            }
            )
        }
        )
    }
    uri() {
        const n = this.opts.secure ? "https" : "http"
          , s = this.query || {};
        return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = ey()),
        !this.supportsBinary && !s.sid && (s.b64 = 1),
        this.createUri(n, s)
    }
}
let ty = !1;
try {
    ty = typeof XMLHttpRequest < "u" && "withCredentials"in new XMLHttpRequest
} catch {}
const ik = ty;
function ak() {}
class lk extends ok {
    constructor(n) {
        if (super(n),
        typeof location < "u") {
            const s = location.protocol === "https:";
            let i = location.port;
            i || (i = s ? "443" : "80"),
            this.xd = typeof location < "u" && n.hostname !== location.hostname || i !== n.port
        }
    }
    doWrite(n, s) {
        const i = this.request({
            method: "POST",
            data: n
        });
        i.on("success", s),
        i.on("error", (l, c) => {
            this.onError("xhr post error", l, c)
        }
        )
    }
    doPoll() {
        const n = this.request();
        n.on("data", this.onData.bind(this)),
        n.on("error", (s, i) => {
            this.onError("xhr poll error", s, i)
        }
        ),
        this.pollXhr = n
    }
}
class hn extends Ge {
    constructor(n, s, i) {
        super(),
        this.createRequest = n,
        Ba(this, i),
        this._opts = i,
        this._method = i.method || "GET",
        this._uri = s,
        this._data = i.data !== void 0 ? i.data : null,
        this._create()
    }
    _create() {
        var n;
        const s = Zg(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
        s.xdomain = !!this._opts.xd;
        const i = this._xhr = this.createRequest(s);
        try {
            i.open(this._method, this._uri, !0);
            try {
                if (this._opts.extraHeaders) {
                    i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                    for (let l in this._opts.extraHeaders)
                        this._opts.extraHeaders.hasOwnProperty(l) && i.setRequestHeader(l, this._opts.extraHeaders[l])
                }
            } catch {}
            if (this._method === "POST")
                try {
                    i.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch {}
            try {
                i.setRequestHeader("Accept", "*/*")
            } catch {}
            (n = this._opts.cookieJar) === null || n === void 0 || n.addCookies(i),
            "withCredentials"in i && (i.withCredentials = this._opts.withCredentials),
            this._opts.requestTimeout && (i.timeout = this._opts.requestTimeout),
            i.onreadystatechange = () => {
                var l;
                i.readyState === 3 && ((l = this._opts.cookieJar) === null || l === void 0 || l.parseCookies(i.getResponseHeader("set-cookie"))),
                i.readyState === 4 && (i.status === 200 || i.status === 1223 ? this._onLoad() : this.setTimeoutFn( () => {
                    this._onError(typeof i.status == "number" ? i.status : 0)
                }
                , 0))
            }
            ,
            i.send(this._data)
        } catch (l) {
            this.setTimeoutFn( () => {
                this._onError(l)
            }
            , 0);
            return
        }
        typeof document < "u" && (this._index = hn.requestsCount++,
        hn.requests[this._index] = this)
    }
    _onError(n) {
        this.emitReserved("error", n, this._xhr),
        this._cleanup(!0)
    }
    _cleanup(n) {
        if (!(typeof this._xhr > "u" || this._xhr === null)) {
            if (this._xhr.onreadystatechange = ak,
            n)
                try {
                    this._xhr.abort()
                } catch {}
            typeof document < "u" && delete hn.requests[this._index],
            this._xhr = null
        }
    }
    _onLoad() {
        const n = this._xhr.responseText;
        n !== null && (this.emitReserved("data", n),
        this.emitReserved("success"),
        this._cleanup())
    }
    abort() {
        this._cleanup()
    }
}
hn.requestsCount = 0;
hn.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function")
        attachEvent("onunload", dm);
    else if (typeof addEventListener == "function") {
        const r = "onpagehide"in qt ? "pagehide" : "unload";
        addEventListener(r, dm, !1)
    }
}
function dm() {
    for (let r in hn.requests)
        hn.requests.hasOwnProperty(r) && hn.requests[r].abort()
}
const uk = (function() {
    const r = ny({
        xdomain: !1
    });
    return r && r.responseType !== null
}
)();
class ck extends lk {
    constructor(n) {
        super(n);
        const s = n && n.forceBase64;
        this.supportsBinary = uk && !s
    }
    request(n={}) {
        return Object.assign(n, {
            xd: this.xd
        }, this.opts),
        new hn(ny,this.uri(),n)
    }
}
function ny(r) {
    const n = r.xdomain;
    try {
        if (typeof XMLHttpRequest < "u" && (!n || ik))
            return new XMLHttpRequest
    } catch {}
    if (!n)
        try {
            return new qt[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
}
const ry = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class dk extends od {
    get name() {
        return "websocket"
    }
    doOpen() {
        const n = this.uri()
          , s = this.opts.protocols
          , i = ry ? {} : Zg(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
        this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
        try {
            this.ws = this.createSocket(n, s, i)
        } catch (l) {
            return this.emitReserved("error", l)
        }
        this.ws.binaryType = this.socket.binaryType,
        this.addEventListeners()
    }
    addEventListeners() {
        this.ws.onopen = () => {
            this.opts.autoUnref && this.ws._socket.unref(),
            this.onOpen()
        }
        ,
        this.ws.onclose = n => this.onClose({
            description: "websocket connection closed",
            context: n
        }),
        this.ws.onmessage = n => this.onData(n.data),
        this.ws.onerror = n => this.onError("websocket error", n)
    }
    write(n) {
        this.writable = !1;
        for (let s = 0; s < n.length; s++) {
            const i = n[s]
              , l = s === n.length - 1;
            rd(i, this.supportsBinary, c => {
                try {
                    this.doWrite(i, c)
                } catch {}
                l && za( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        typeof this.ws < "u" && (this.ws.onerror = () => {}
        ,
        this.ws.close(),
        this.ws = null)
    }
    uri() {
        const n = this.opts.secure ? "wss" : "ws"
          , s = this.query || {};
        return this.opts.timestampRequests && (s[this.opts.timestampParam] = ey()),
        this.supportsBinary || (s.b64 = 1),
        this.createUri(n, s)
    }
}
const ec = qt.WebSocket || qt.MozWebSocket;
class fk extends dk {
    createSocket(n, s, i) {
        return ry ? new ec(n,s,i) : s ? new ec(n,s) : new ec(n)
    }
    doWrite(n, s) {
        this.ws.send(s)
    }
}
class hk extends od {
    get name() {
        return "webtransport"
    }
    doOpen() {
        try {
            this._transport = new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])
        } catch (n) {
            return this.emitReserved("error", n)
        }
        this._transport.closed.then( () => {
            this.onClose()
        }
        ).catch(n => {
            this.onError("webtransport error", n)
        }
        ),
        this._transport.ready.then( () => {
            this._transport.createBidirectionalStream().then(n => {
                const s = KS(Number.MAX_SAFE_INTEGER, this.socket.binaryType)
                  , i = n.readable.pipeThrough(s).getReader()
                  , l = QS();
                l.readable.pipeTo(n.writable),
                this._writer = l.writable.getWriter();
                const c = () => {
                    i.read().then( ({done: p, value: m}) => {
                        p || (this.onPacket(m),
                        c())
                    }
                    ).catch(p => {}
                    )
                }
                ;
                c();
                const d = {
                    type: "open"
                };
                this.query.sid && (d.data = `{"sid":"${this.query.sid}"}`),
                this._writer.write(d).then( () => this.onOpen())
            }
            )
        }
        )
    }
    write(n) {
        this.writable = !1;
        for (let s = 0; s < n.length; s++) {
            const i = n[s]
              , l = s === n.length - 1;
            this._writer.write(i).then( () => {
                l && za( () => {
                    this.writable = !0,
                    this.emitReserved("drain")
                }
                , this.setTimeoutFn)
            }
            )
        }
    }
    doClose() {
        var n;
        (n = this._transport) === null || n === void 0 || n.close()
    }
}
const pk = {
    websocket: fk,
    webtransport: hk,
    polling: ck
}
  , mk = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  , gk = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function Lc(r) {
    if (r.length > 8e3)
        throw "URI too long";
    const n = r
      , s = r.indexOf("[")
      , i = r.indexOf("]");
    s != -1 && i != -1 && (r = r.substring(0, s) + r.substring(s, i).replace(/:/g, ";") + r.substring(i, r.length));
    let l = mk.exec(r || "")
      , c = {}
      , d = 14;
    for (; d--; )
        c[gk[d]] = l[d] || "";
    return s != -1 && i != -1 && (c.source = n,
    c.host = c.host.substring(1, c.host.length - 1).replace(/;/g, ":"),
    c.authority = c.authority.replace("[", "").replace("]", "").replace(/;/g, ":"),
    c.ipv6uri = !0),
    c.pathNames = yk(c, c.path),
    c.queryKey = vk(c, c.query),
    c
}
function yk(r, n) {
    const s = /\/{2,9}/g
      , i = n.replace(s, "/").split("/");
    return (n.slice(0, 1) == "/" || n.length === 0) && i.splice(0, 1),
    n.slice(-1) == "/" && i.splice(i.length - 1, 1),
    i
}
function vk(r, n) {
    const s = {};
    return n.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(i, l, c) {
        l && (s[l] = c)
    }),
    s
}
const Ic = typeof addEventListener == "function" && typeof removeEventListener == "function"
  , ba = [];
Ic && addEventListener("offline", () => {
    ba.forEach(r => r())
}
, !1);
class ur extends Ge {
    constructor(n, s) {
        if (super(),
        this.binaryType = YS,
        this.writeBuffer = [],
        this._prevBufferLen = 0,
        this._pingInterval = -1,
        this._pingTimeout = -1,
        this._maxPayload = -1,
        this._pingTimeoutTime = 1 / 0,
        n && typeof n == "object" && (s = n,
        n = null),
        n) {
            const i = Lc(n);
            s.hostname = i.host,
            s.secure = i.protocol === "https" || i.protocol === "wss",
            s.port = i.port,
            i.query && (s.query = i.query)
        } else
            s.host && (s.hostname = Lc(s.host).host);
        Ba(this, s),
        this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:",
        s.hostname && !s.port && (s.port = this.secure ? "443" : "80"),
        this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"),
        this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"),
        this.transports = [],
        this._transportsByName = {},
        s.transports.forEach(i => {
            const l = i.prototype.name;
            this.transports.push(l),
            this._transportsByName[l] = i
        }
        ),
        this.opts = Object.assign({
            path: "/engine.io",
            agent: !1,
            withCredentials: !1,
            upgrade: !0,
            timestampParam: "t",
            rememberUpgrade: !1,
            addTrailingSlash: !0,
            rejectUnauthorized: !0,
            perMessageDeflate: {
                threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: !1
        }, s),
        this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""),
        typeof this.opts.query == "string" && (this.opts.query = rk(this.opts.query)),
        Ic && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
            this.transport && (this.transport.removeAllListeners(),
            this.transport.close())
        }
        ,
        addEventListener("beforeunload", this._beforeunloadEventListener, !1)),
        this.hostname !== "localhost" && (this._offlineEventListener = () => {
            this._onClose("transport close", {
                description: "network connection lost"
            })
        }
        ,
        ba.push(this._offlineEventListener))),
        this.opts.withCredentials && (this._cookieJar = void 0),
        this._open()
    }
    createTransport(n) {
        const s = Object.assign({}, this.opts.query);
        s.EIO = Xg,
        s.transport = n,
        this.id && (s.sid = this.id);
        const i = Object.assign({}, this.opts, {
            query: s,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
        }, this.opts.transportOptions[n]);
        return new this._transportsByName[n](i)
    }
    _open() {
        if (this.transports.length === 0) {
            this.setTimeoutFn( () => {
                this.emitReserved("error", "No transports available")
            }
            , 0);
            return
        }
        const n = this.opts.rememberUpgrade && ur.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
        this.readyState = "opening";
        const s = this.createTransport(n);
        s.open(),
        this.setTransport(s)
    }
    setTransport(n) {
        this.transport && this.transport.removeAllListeners(),
        this.transport = n,
        n.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", s => this._onClose("transport close", s))
    }
    onOpen() {
        this.readyState = "open",
        ur.priorWebsocketSuccess = this.transport.name === "websocket",
        this.emitReserved("open"),
        this.flush()
    }
    _onPacket(n) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
            switch (this.emitReserved("packet", n),
            this.emitReserved("heartbeat"),
            n.type) {
            case "open":
                this.onHandshake(JSON.parse(n.data));
                break;
            case "ping":
                this._sendPacket("pong"),
                this.emitReserved("ping"),
                this.emitReserved("pong"),
                this._resetPingTimeout();
                break;
            case "error":
                const s = new Error("server error");
                s.code = n.data,
                this._onError(s);
                break;
            case "message":
                this.emitReserved("data", n.data),
                this.emitReserved("message", n.data);
                break
            }
    }
    onHandshake(n) {
        this.emitReserved("handshake", n),
        this.id = n.sid,
        this.transport.query.sid = n.sid,
        this._pingInterval = n.pingInterval,
        this._pingTimeout = n.pingTimeout,
        this._maxPayload = n.maxPayload,
        this.onOpen(),
        this.readyState !== "closed" && this._resetPingTimeout()
    }
    _resetPingTimeout() {
        this.clearTimeoutFn(this._pingTimeoutTimer);
        const n = this._pingInterval + this._pingTimeout;
        this._pingTimeoutTime = Date.now() + n,
        this._pingTimeoutTimer = this.setTimeoutFn( () => {
            this._onClose("ping timeout")
        }
        , n),
        this.opts.autoUnref && this._pingTimeoutTimer.unref()
    }
    _onDrain() {
        this.writeBuffer.splice(0, this._prevBufferLen),
        this._prevBufferLen = 0,
        this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush()
    }
    flush() {
        if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const n = this._getWritablePackets();
            this.transport.send(n),
            this._prevBufferLen = n.length,
            this.emitReserved("flush")
        }
    }
    _getWritablePackets() {
        if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
            return this.writeBuffer;
        let s = 1;
        for (let i = 0; i < this.writeBuffer.length; i++) {
            const l = this.writeBuffer[i].data;
            if (l && (s += ek(l)),
            i > 0 && s > this._maxPayload)
                return this.writeBuffer.slice(0, i);
            s += 2
        }
        return this.writeBuffer
    }
    _hasPingExpired() {
        if (!this._pingTimeoutTime)
            return !0;
        const n = Date.now() > this._pingTimeoutTime;
        return n && (this._pingTimeoutTime = 0,
        za( () => {
            this._onClose("ping timeout")
        }
        , this.setTimeoutFn)),
        n
    }
    write(n, s, i) {
        return this._sendPacket("message", n, s, i),
        this
    }
    send(n, s, i) {
        return this._sendPacket("message", n, s, i),
        this
    }
    _sendPacket(n, s, i, l) {
        if (typeof s == "function" && (l = s,
        s = void 0),
        typeof i == "function" && (l = i,
        i = null),
        this.readyState === "closing" || this.readyState === "closed")
            return;
        i = i || {},
        i.compress = i.compress !== !1;
        const c = {
            type: n,
            data: s,
            options: i
        };
        this.emitReserved("packetCreate", c),
        this.writeBuffer.push(c),
        l && this.once("flush", l),
        this.flush()
    }
    close() {
        const n = () => {
            this._onClose("forced close"),
            this.transport.close()
        }
          , s = () => {
            this.off("upgrade", s),
            this.off("upgradeError", s),
            n()
        }
          , i = () => {
            this.once("upgrade", s),
            this.once("upgradeError", s)
        }
        ;
        return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing",
        this.writeBuffer.length ? this.once("drain", () => {
            this.upgrading ? i() : n()
        }
        ) : this.upgrading ? i() : n()),
        this
    }
    _onError(n) {
        if (ur.priorWebsocketSuccess = !1,
        this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
            return this.transports.shift(),
            this._open();
        this.emitReserved("error", n),
        this._onClose("transport error", n)
    }
    _onClose(n, s) {
        if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            if (this.clearTimeoutFn(this._pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            Ic && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1),
            this._offlineEventListener)) {
                const i = ba.indexOf(this._offlineEventListener);
                i !== -1 && ba.splice(i, 1)
            }
            this.readyState = "closed",
            this.id = null,
            this.emitReserved("close", n, s),
            this.writeBuffer = [],
            this._prevBufferLen = 0
        }
    }
}
ur.protocol = Xg;
class xk extends ur {
    constructor() {
        super(...arguments),
        this._upgrades = []
    }
    onOpen() {
        if (super.onOpen(),
        this.readyState === "open" && this.opts.upgrade)
            for (let n = 0; n < this._upgrades.length; n++)
                this._probe(this._upgrades[n])
    }
    _probe(n) {
        let s = this.createTransport(n)
          , i = !1;
        ur.priorWebsocketSuccess = !1;
        const l = () => {
            i || (s.send([{
                type: "ping",
                data: "probe"
            }]),
            s.once("packet", x => {
                if (!i)
                    if (x.type === "pong" && x.data === "probe") {
                        if (this.upgrading = !0,
                        this.emitReserved("upgrading", s),
                        !s)
                            return;
                        ur.priorWebsocketSuccess = s.name === "websocket",
                        this.transport.pause( () => {
                            i || this.readyState !== "closed" && (v(),
                            this.setTransport(s),
                            s.send([{
                                type: "upgrade"
                            }]),
                            this.emitReserved("upgrade", s),
                            s = null,
                            this.upgrading = !1,
                            this.flush())
                        }
                        )
                    } else {
                        const j = new Error("probe error");
                        j.transport = s.name,
                        this.emitReserved("upgradeError", j)
                    }
            }
            ))
        }
        ;
        function c() {
            i || (i = !0,
            v(),
            s.close(),
            s = null)
        }
        const d = x => {
            const j = new Error("probe error: " + x);
            j.transport = s.name,
            c(),
            this.emitReserved("upgradeError", j)
        }
        ;
        function p() {
            d("transport closed")
        }
        function m() {
            d("socket closed")
        }
        function y(x) {
            s && x.name !== s.name && c()
        }
        const v = () => {
            s.removeListener("open", l),
            s.removeListener("error", d),
            s.removeListener("close", p),
            this.off("close", m),
            this.off("upgrading", y)
        }
        ;
        s.once("open", l),
        s.once("error", d),
        s.once("close", p),
        this.once("close", m),
        this.once("upgrading", y),
        this._upgrades.indexOf("webtransport") !== -1 && n !== "webtransport" ? this.setTimeoutFn( () => {
            i || s.open()
        }
        , 200) : s.open()
    }
    onHandshake(n) {
        this._upgrades = this._filterUpgrades(n.upgrades),
        super.onHandshake(n)
    }
    _filterUpgrades(n) {
        const s = [];
        for (let i = 0; i < n.length; i++)
            ~this.transports.indexOf(n[i]) && s.push(n[i]);
        return s
    }
}
let wk = class extends xk {
    constructor(n, s={}) {
        const i = typeof n == "object" ? n : s;
        (!i.transports || i.transports && typeof i.transports[0] == "string") && (i.transports = (i.transports || ["polling", "websocket", "webtransport"]).map(l => pk[l]).filter(l => !!l)),
        super(n, i)
    }
}
;
function bk(r, n="", s) {
    let i = r;
    s = s || typeof location < "u" && location,
    r == null && (r = s.protocol + "//" + s.host),
    typeof r == "string" && (r.charAt(0) === "/" && (r.charAt(1) === "/" ? r = s.protocol + r : r = s.host + r),
    /^(https?|wss?):\/\//.test(r) || (typeof s < "u" ? r = s.protocol + "//" + r : r = "https://" + r),
    i = Lc(r)),
    i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
    i.path = i.path || "/";
    const c = i.host.indexOf(":") !== -1 ? "[" + i.host + "]" : i.host;
    return i.id = i.protocol + "://" + c + ":" + i.port + n,
    i.href = i.protocol + "://" + c + (s && s.port === i.port ? "" : ":" + i.port),
    i
}
const Sk = typeof ArrayBuffer == "function"
  , kk = r => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(r) : r.buffer instanceof ArrayBuffer
  , sy = Object.prototype.toString
  , Ek = typeof Blob == "function" || typeof Blob < "u" && sy.call(Blob) === "[object BlobConstructor]"
  , Ck = typeof File == "function" || typeof File < "u" && sy.call(File) === "[object FileConstructor]";
function id(r) {
    return Sk && (r instanceof ArrayBuffer || kk(r)) || Ek && r instanceof Blob || Ck && r instanceof File
}
function Sa(r, n) {
    if (!r || typeof r != "object")
        return !1;
    if (Array.isArray(r)) {
        for (let s = 0, i = r.length; s < i; s++)
            if (Sa(r[s]))
                return !0;
        return !1
    }
    if (id(r))
        return !0;
    if (r.toJSON && typeof r.toJSON == "function" && arguments.length === 1)
        return Sa(r.toJSON(), !0);
    for (const s in r)
        if (Object.prototype.hasOwnProperty.call(r, s) && Sa(r[s]))
            return !0;
    return !1
}
function Nk(r) {
    const n = []
      , s = r.data
      , i = r;
    return i.data = Mc(s, n),
    i.attachments = n.length,
    {
        packet: i,
        buffers: n
    }
}
function Mc(r, n) {
    if (!r)
        return r;
    if (id(r)) {
        const s = {
            _placeholder: !0,
            num: n.length
        };
        return n.push(r),
        s
    } else if (Array.isArray(r)) {
        const s = new Array(r.length);
        for (let i = 0; i < r.length; i++)
            s[i] = Mc(r[i], n);
        return s
    } else if (typeof r == "object" && !(r instanceof Date)) {
        const s = {};
        for (const i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (s[i] = Mc(r[i], n));
        return s
    }
    return r
}
function _k(r, n) {
    return r.data = Fc(r.data, n),
    delete r.attachments,
    r
}
function Fc(r, n) {
    if (!r)
        return r;
    if (r && r._placeholder === !0) {
        if (typeof r.num == "number" && r.num >= 0 && r.num < n.length)
            return n[r.num];
        throw new Error("illegal attachments")
    } else if (Array.isArray(r))
        for (let s = 0; s < r.length; s++)
            r[s] = Fc(r[s], n);
    else if (typeof r == "object")
        for (const s in r)
            Object.prototype.hasOwnProperty.call(r, s) && (r[s] = Fc(r[s], n));
    return r
}
const jk = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"]
  , Rk = 5;
var je;
(function(r) {
    r[r.CONNECT = 0] = "CONNECT",
    r[r.DISCONNECT = 1] = "DISCONNECT",
    r[r.EVENT = 2] = "EVENT",
    r[r.ACK = 3] = "ACK",
    r[r.CONNECT_ERROR = 4] = "CONNECT_ERROR",
    r[r.BINARY_EVENT = 5] = "BINARY_EVENT",
    r[r.BINARY_ACK = 6] = "BINARY_ACK"
}
)(je || (je = {}));
class Tk {
    constructor(n) {
        this.replacer = n
    }
    encode(n) {
        return (n.type === je.EVENT || n.type === je.ACK) && Sa(n) ? this.encodeAsBinary({
            type: n.type === je.EVENT ? je.BINARY_EVENT : je.BINARY_ACK,
            nsp: n.nsp,
            data: n.data,
            id: n.id
        }) : [this.encodeAsString(n)]
    }
    encodeAsString(n) {
        let s = "" + n.type;
        return (n.type === je.BINARY_EVENT || n.type === je.BINARY_ACK) && (s += n.attachments + "-"),
        n.nsp && n.nsp !== "/" && (s += n.nsp + ","),
        n.id != null && (s += n.id),
        n.data != null && (s += JSON.stringify(n.data, this.replacer)),
        s
    }
    encodeAsBinary(n) {
        const s = Nk(n)
          , i = this.encodeAsString(s.packet)
          , l = s.buffers;
        return l.unshift(i),
        l
    }
}
function fm(r) {
    return Object.prototype.toString.call(r) === "[object Object]"
}
class ad extends Ge {
    constructor(n) {
        super(),
        this.reviver = n
    }
    add(n) {
        let s;
        if (typeof n == "string") {
            if (this.reconstructor)
                throw new Error("got plaintext data when reconstructing a packet");
            s = this.decodeString(n);
            const i = s.type === je.BINARY_EVENT;
            i || s.type === je.BINARY_ACK ? (s.type = i ? je.EVENT : je.ACK,
            this.reconstructor = new Pk(s),
            s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s)
        } else if (id(n) || n.base64)
            if (this.reconstructor)
                s = this.reconstructor.takeBinaryData(n),
                s && (this.reconstructor = null,
                super.emitReserved("decoded", s));
            else
                throw new Error("got binary data when not reconstructing a packet");
        else
            throw new Error("Unknown type: " + n)
    }
    decodeString(n) {
        let s = 0;
        const i = {
            type: Number(n.charAt(0))
        };
        if (je[i.type] === void 0)
            throw new Error("unknown packet type " + i.type);
        if (i.type === je.BINARY_EVENT || i.type === je.BINARY_ACK) {
            const c = s + 1;
            for (; n.charAt(++s) !== "-" && s != n.length; )
                ;
            const d = n.substring(c, s);
            if (d != Number(d) || n.charAt(s) !== "-")
                throw new Error("Illegal attachments");
            i.attachments = Number(d)
        }
        if (n.charAt(s + 1) === "/") {
            const c = s + 1;
            for (; ++s && !(n.charAt(s) === "," || s === n.length); )
                ;
            i.nsp = n.substring(c, s)
        } else
            i.nsp = "/";
        const l = n.charAt(s + 1);
        if (l !== "" && Number(l) == l) {
            const c = s + 1;
            for (; ++s; ) {
                const d = n.charAt(s);
                if (d == null || Number(d) != d) {
                    --s;
                    break
                }
                if (s === n.length)
                    break
            }
            i.id = Number(n.substring(c, s + 1))
        }
        if (n.charAt(++s)) {
            const c = this.tryParse(n.substr(s));
            if (ad.isPayloadValid(i.type, c))
                i.data = c;
            else
                throw new Error("invalid payload")
        }
        return i
    }
    tryParse(n) {
        try {
            return JSON.parse(n, this.reviver)
        } catch {
            return !1
        }
    }
    static isPayloadValid(n, s) {
        switch (n) {
        case je.CONNECT:
            return fm(s);
        case je.DISCONNECT:
            return s === void 0;
        case je.CONNECT_ERROR:
            return typeof s == "string" || fm(s);
        case je.EVENT:
        case je.BINARY_EVENT:
            return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && jk.indexOf(s[0]) === -1);
        case je.ACK:
        case je.BINARY_ACK:
            return Array.isArray(s)
        }
    }
    destroy() {
        this.reconstructor && (this.reconstructor.finishedReconstruction(),
        this.reconstructor = null)
    }
}
class Pk {
    constructor(n) {
        this.packet = n,
        this.buffers = [],
        this.reconPack = n
    }
    takeBinaryData(n) {
        if (this.buffers.push(n),
        this.buffers.length === this.reconPack.attachments) {
            const s = _k(this.reconPack, this.buffers);
            return this.finishedReconstruction(),
            s
        }
        return null
    }
    finishedReconstruction() {
        this.reconPack = null,
        this.buffers = []
    }
}
const Ok = Object.freeze(Object.defineProperty({
    __proto__: null,
    Decoder: ad,
    Encoder: Tk,
    get PacketType() {
        return je
    },
    protocol: Rk
}, Symbol.toStringTag, {
    value: "Module"
}));
function en(r, n, s) {
    return r.on(n, s),
    function() {
        r.off(n, s)
    }
}
const Ak = Object.freeze({
    connect: 1,
    connect_error: 1,
    disconnect: 1,
    disconnecting: 1,
    newListener: 1,
    removeListener: 1
});
class oy extends Ge {
    constructor(n, s, i) {
        super(),
        this.connected = !1,
        this.recovered = !1,
        this.receiveBuffer = [],
        this.sendBuffer = [],
        this._queue = [],
        this._queueSeq = 0,
        this.ids = 0,
        this.acks = {},
        this.flags = {},
        this.io = n,
        this.nsp = s,
        i && i.auth && (this.auth = i.auth),
        this._opts = Object.assign({}, i),
        this.io._autoConnect && this.open()
    }
    get disconnected() {
        return !this.connected
    }
    subEvents() {
        if (this.subs)
            return;
        const n = this.io;
        this.subs = [en(n, "open", this.onopen.bind(this)), en(n, "packet", this.onpacket.bind(this)), en(n, "error", this.onerror.bind(this)), en(n, "close", this.onclose.bind(this))]
    }
    get active() {
        return !!this.subs
    }
    connect() {
        return this.connected ? this : (this.subEvents(),
        this.io._reconnecting || this.io.open(),
        this.io._readyState === "open" && this.onopen(),
        this)
    }
    open() {
        return this.connect()
    }
    send(...n) {
        return n.unshift("message"),
        this.emit.apply(this, n),
        this
    }
    emit(n, ...s) {
        var i, l, c;
        if (Ak.hasOwnProperty(n))
            throw new Error('"' + n.toString() + '" is a reserved event name');
        if (s.unshift(n),
        this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
            return this._addToQueue(s),
            this;
        const d = {
            type: je.EVENT,
            data: s
        };
        if (d.options = {},
        d.options.compress = this.flags.compress !== !1,
        typeof s[s.length - 1] == "function") {
            const v = this.ids++
              , x = s.pop();
            this._registerAckCallback(v, x),
            d.id = v
        }
        const p = (l = (i = this.io.engine) === null || i === void 0 ? void 0 : i.transport) === null || l === void 0 ? void 0 : l.writable
          , m = this.connected && !(!((c = this.io.engine) === null || c === void 0) && c._hasPingExpired());
        return this.flags.volatile && !p || (m ? (this.notifyOutgoingListeners(d),
        this.packet(d)) : this.sendBuffer.push(d)),
        this.flags = {},
        this
    }
    _registerAckCallback(n, s) {
        var i;
        const l = (i = this.flags.timeout) !== null && i !== void 0 ? i : this._opts.ackTimeout;
        if (l === void 0) {
            this.acks[n] = s;
            return
        }
        const c = this.io.setTimeoutFn( () => {
            delete this.acks[n];
            for (let p = 0; p < this.sendBuffer.length; p++)
                this.sendBuffer[p].id === n && this.sendBuffer.splice(p, 1);
            s.call(this, new Error("operation has timed out"))
        }
        , l)
          , d = (...p) => {
            this.io.clearTimeoutFn(c),
            s.apply(this, p)
        }
        ;
        d.withError = !0,
        this.acks[n] = d
    }
    emitWithAck(n, ...s) {
        return new Promise( (i, l) => {
            const c = (d, p) => d ? l(d) : i(p);
            c.withError = !0,
            s.push(c),
            this.emit(n, ...s)
        }
        )
    }
    _addToQueue(n) {
        let s;
        typeof n[n.length - 1] == "function" && (s = n.pop());
        const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: n,
            flags: Object.assign({
                fromQueue: !0
            }, this.flags)
        };
        n.push( (l, ...c) => i !== this._queue[0] ? void 0 : (l !== null ? i.tryCount > this._opts.retries && (this._queue.shift(),
        s && s(l)) : (this._queue.shift(),
        s && s(null, ...c)),
        i.pending = !1,
        this._drainQueue())),
        this._queue.push(i),
        this._drainQueue()
    }
    _drainQueue(n=!1) {
        if (!this.connected || this._queue.length === 0)
            return;
        const s = this._queue[0];
        s.pending && !n || (s.pending = !0,
        s.tryCount++,
        this.flags = s.flags,
        this.emit.apply(this, s.args))
    }
    packet(n) {
        n.nsp = this.nsp,
        this.io._packet(n)
    }
    onopen() {
        typeof this.auth == "function" ? this.auth(n => {
            this._sendConnectPacket(n)
        }
        ) : this._sendConnectPacket(this.auth)
    }
    _sendConnectPacket(n) {
        this.packet({
            type: je.CONNECT,
            data: this._pid ? Object.assign({
                pid: this._pid,
                offset: this._lastOffset
            }, n) : n
        })
    }
    onerror(n) {
        this.connected || this.emitReserved("connect_error", n)
    }
    onclose(n, s) {
        this.connected = !1,
        delete this.id,
        this.emitReserved("disconnect", n, s),
        this._clearAcks()
    }
    _clearAcks() {
        Object.keys(this.acks).forEach(n => {
            if (!this.sendBuffer.some(i => String(i.id) === n)) {
                const i = this.acks[n];
                delete this.acks[n],
                i.withError && i.call(this, new Error("socket has been disconnected"))
            }
        }
        )
    }
    onpacket(n) {
        if (n.nsp === this.nsp)
            switch (n.type) {
            case je.CONNECT:
                n.data && n.data.sid ? this.onconnect(n.data.sid, n.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
                break;
            case je.EVENT:
            case je.BINARY_EVENT:
                this.onevent(n);
                break;
            case je.ACK:
            case je.BINARY_ACK:
                this.onack(n);
                break;
            case je.DISCONNECT:
                this.ondisconnect();
                break;
            case je.CONNECT_ERROR:
                this.destroy();
                const i = new Error(n.data.message);
                i.data = n.data.data,
                this.emitReserved("connect_error", i);
                break
            }
    }
    onevent(n) {
        const s = n.data || [];
        n.id != null && s.push(this.ack(n.id)),
        this.connected ? this.emitEvent(s) : this.receiveBuffer.push(Object.freeze(s))
    }
    emitEvent(n) {
        if (this._anyListeners && this._anyListeners.length) {
            const s = this._anyListeners.slice();
            for (const i of s)
                i.apply(this, n)
        }
        super.emit.apply(this, n),
        this._pid && n.length && typeof n[n.length - 1] == "string" && (this._lastOffset = n[n.length - 1])
    }
    ack(n) {
        const s = this;
        let i = !1;
        return function(...l) {
            i || (i = !0,
            s.packet({
                type: je.ACK,
                id: n,
                data: l
            }))
        }
    }
    onack(n) {
        const s = this.acks[n.id];
        typeof s == "function" && (delete this.acks[n.id],
        s.withError && n.data.unshift(null),
        s.apply(this, n.data))
    }
    onconnect(n, s) {
        this.id = n,
        this.recovered = s && this._pid === s,
        this._pid = s,
        this.connected = !0,
        this.emitBuffered(),
        this.emitReserved("connect"),
        this._drainQueue(!0)
    }
    emitBuffered() {
        this.receiveBuffer.forEach(n => this.emitEvent(n)),
        this.receiveBuffer = [],
        this.sendBuffer.forEach(n => {
            this.notifyOutgoingListeners(n),
            this.packet(n)
        }
        ),
        this.sendBuffer = []
    }
    ondisconnect() {
        this.destroy(),
        this.onclose("io server disconnect")
    }
    destroy() {
        this.subs && (this.subs.forEach(n => n()),
        this.subs = void 0),
        this.io._destroy(this)
    }
    disconnect() {
        return this.connected && this.packet({
            type: je.DISCONNECT
        }),
        this.destroy(),
        this.connected && this.onclose("io client disconnect"),
        this
    }
    close() {
        return this.disconnect()
    }
    compress(n) {
        return this.flags.compress = n,
        this
    }
    get volatile() {
        return this.flags.volatile = !0,
        this
    }
    timeout(n) {
        return this.flags.timeout = n,
        this
    }
    onAny(n) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.push(n),
        this
    }
    prependAny(n) {
        return this._anyListeners = this._anyListeners || [],
        this._anyListeners.unshift(n),
        this
    }
    offAny(n) {
        if (!this._anyListeners)
            return this;
        if (n) {
            const s = this._anyListeners;
            for (let i = 0; i < s.length; i++)
                if (n === s[i])
                    return s.splice(i, 1),
                    this
        } else
            this._anyListeners = [];
        return this
    }
    listenersAny() {
        return this._anyListeners || []
    }
    onAnyOutgoing(n) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.push(n),
        this
    }
    prependAnyOutgoing(n) {
        return this._anyOutgoingListeners = this._anyOutgoingListeners || [],
        this._anyOutgoingListeners.unshift(n),
        this
    }
    offAnyOutgoing(n) {
        if (!this._anyOutgoingListeners)
            return this;
        if (n) {
            const s = this._anyOutgoingListeners;
            for (let i = 0; i < s.length; i++)
                if (n === s[i])
                    return s.splice(i, 1),
                    this
        } else
            this._anyOutgoingListeners = [];
        return this
    }
    listenersAnyOutgoing() {
        return this._anyOutgoingListeners || []
    }
    notifyOutgoingListeners(n) {
        if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const s = this._anyOutgoingListeners.slice();
            for (const i of s)
                i.apply(this, n.data)
        }
    }
}
function Is(r) {
    r = r || {},
    this.ms = r.min || 100,
    this.max = r.max || 1e4,
    this.factor = r.factor || 2,
    this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0,
    this.attempts = 0
}
Is.prototype.duration = function() {
    var r = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var n = Math.random()
          , s = Math.floor(n * this.jitter * r);
        r = (Math.floor(n * 10) & 1) == 0 ? r - s : r + s
    }
    return Math.min(r, this.max) | 0
}
;
Is.prototype.reset = function() {
    this.attempts = 0
}
;
Is.prototype.setMin = function(r) {
    this.ms = r
}
;
Is.prototype.setMax = function(r) {
    this.max = r
}
;
Is.prototype.setJitter = function(r) {
    this.jitter = r
}
;
class Dc extends Ge {
    constructor(n, s) {
        var i;
        super(),
        this.nsps = {},
        this.subs = [],
        n && typeof n == "object" && (s = n,
        n = void 0),
        s = s || {},
        s.path = s.path || "/socket.io",
        this.opts = s,
        Ba(this, s),
        this.reconnection(s.reconnection !== !1),
        this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(s.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3),
        this.randomizationFactor((i = s.randomizationFactor) !== null && i !== void 0 ? i : .5),
        this.backoff = new Is({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }),
        this.timeout(s.timeout == null ? 2e4 : s.timeout),
        this._readyState = "closed",
        this.uri = n;
        const l = s.parser || Ok;
        this.encoder = new l.Encoder,
        this.decoder = new l.Decoder,
        this._autoConnect = s.autoConnect !== !1,
        this._autoConnect && this.open()
    }
    reconnection(n) {
        return arguments.length ? (this._reconnection = !!n,
        n || (this.skipReconnect = !0),
        this) : this._reconnection
    }
    reconnectionAttempts(n) {
        return n === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = n,
        this)
    }
    reconnectionDelay(n) {
        var s;
        return n === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = n,
        (s = this.backoff) === null || s === void 0 || s.setMin(n),
        this)
    }
    randomizationFactor(n) {
        var s;
        return n === void 0 ? this._randomizationFactor : (this._randomizationFactor = n,
        (s = this.backoff) === null || s === void 0 || s.setJitter(n),
        this)
    }
    reconnectionDelayMax(n) {
        var s;
        return n === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = n,
        (s = this.backoff) === null || s === void 0 || s.setMax(n),
        this)
    }
    timeout(n) {
        return arguments.length ? (this._timeout = n,
        this) : this._timeout
    }
    maybeReconnectOnOpen() {
        !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
    }
    open(n) {
        if (~this._readyState.indexOf("open"))
            return this;
        this.engine = new wk(this.uri,this.opts);
        const s = this.engine
          , i = this;
        this._readyState = "opening",
        this.skipReconnect = !1;
        const l = en(s, "open", function() {
            i.onopen(),
            n && n()
        })
          , c = p => {
            this.cleanup(),
            this._readyState = "closed",
            this.emitReserved("error", p),
            n ? n(p) : this.maybeReconnectOnOpen()
        }
          , d = en(s, "error", c);
        if (this._timeout !== !1) {
            const p = this._timeout
              , m = this.setTimeoutFn( () => {
                l(),
                c(new Error("timeout")),
                s.close()
            }
            , p);
            this.opts.autoUnref && m.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(m)
            }
            )
        }
        return this.subs.push(l),
        this.subs.push(d),
        this
    }
    connect(n) {
        return this.open(n)
    }
    onopen() {
        this.cleanup(),
        this._readyState = "open",
        this.emitReserved("open");
        const n = this.engine;
        this.subs.push(en(n, "ping", this.onping.bind(this)), en(n, "data", this.ondata.bind(this)), en(n, "error", this.onerror.bind(this)), en(n, "close", this.onclose.bind(this)), en(this.decoder, "decoded", this.ondecoded.bind(this)))
    }
    onping() {
        this.emitReserved("ping")
    }
    ondata(n) {
        try {
            this.decoder.add(n)
        } catch (s) {
            this.onclose("parse error", s)
        }
    }
    ondecoded(n) {
        za( () => {
            this.emitReserved("packet", n)
        }
        , this.setTimeoutFn)
    }
    onerror(n) {
        this.emitReserved("error", n)
    }
    socket(n, s) {
        let i = this.nsps[n];
        return i ? this._autoConnect && !i.active && i.connect() : (i = new oy(this,n,s),
        this.nsps[n] = i),
        i
    }
    _destroy(n) {
        const s = Object.keys(this.nsps);
        for (const i of s)
            if (this.nsps[i].active)
                return;
        this._close()
    }
    _packet(n) {
        const s = this.encoder.encode(n);
        for (let i = 0; i < s.length; i++)
            this.engine.write(s[i], n.options)
    }
    cleanup() {
        this.subs.forEach(n => n()),
        this.subs.length = 0,
        this.decoder.destroy()
    }
    _close() {
        this.skipReconnect = !0,
        this._reconnecting = !1,
        this.onclose("forced close")
    }
    disconnect() {
        return this._close()
    }
    onclose(n, s) {
        var i;
        this.cleanup(),
        (i = this.engine) === null || i === void 0 || i.close(),
        this.backoff.reset(),
        this._readyState = "closed",
        this.emitReserved("close", n, s),
        this._reconnection && !this.skipReconnect && this.reconnect()
    }
    reconnect() {
        if (this._reconnecting || this.skipReconnect)
            return this;
        const n = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
            this.emitReserved("reconnect_failed"),
            this._reconnecting = !1;
        else {
            const s = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn( () => {
                n.skipReconnect || (this.emitReserved("reconnect_attempt", n.backoff.attempts),
                !n.skipReconnect && n.open(l => {
                    l ? (n._reconnecting = !1,
                    n.reconnect(),
                    this.emitReserved("reconnect_error", l)) : n.onreconnect()
                }
                ))
            }
            , s);
            this.opts.autoUnref && i.unref(),
            this.subs.push( () => {
                this.clearTimeoutFn(i)
            }
            )
        }
    }
    onreconnect() {
        const n = this.backoff.attempts;
        this._reconnecting = !1,
        this.backoff.reset(),
        this.emitReserved("reconnect", n)
    }
}
const Co = {};
function ka(r, n) {
    typeof r == "object" && (n = r,
    r = void 0),
    n = n || {};
    const s = bk(r, n.path || "/socket.io")
      , i = s.source
      , l = s.id
      , c = s.path
      , d = Co[l] && c in Co[l].nsps
      , p = n.forceNew || n["force new connection"] || n.multiplex === !1 || d;
    let m;
    return p ? m = new Dc(i,n) : (Co[l] || (Co[l] = new Dc(i,n)),
    m = Co[l]),
    s.query && !n.query && (n.query = s.queryKey),
    m.socket(s.path, n)
}
Object.assign(ka, {
    Manager: Dc,
    Socket: oy,
    io: ka,
    connect: ka
});
function hm(r, n) {
    var s;
    const i = ka(r.serverUrl, {
        path: r.mountPath,
        transports: r.transports,
        query: {
            app_id: r.appId,
            token: (s = r.token) !== null && s !== void 0 ? s : nd()
        }
    });
    return i.on("connect", async () => {
        var l;
        return console.log("connect", i.id),
        (l = n.connect) === null || l === void 0 ? void 0 : l.call(n)
    }
    ),
    i.on("update_model", async l => {
        var c;
        return (c = n.update_model) === null || c === void 0 ? void 0 : c.call(n, l)
    }
    ),
    i.on("error", async l => {
        var c;
        return (c = n.error) === null || c === void 0 ? void 0 : c.call(n, l)
    }
    ),
    i.on("connect_error", async l => {
        var c;
        return console.error("connect_error", l),
        (c = n.error) === null || c === void 0 ? void 0 : c.call(n, l)
    }
    ),
    i
}
function Lk({config: r}) {
    let n = {
        ...r
    };
    const s = {}
      , i = {
        connect: async () => {
            const T = [];
            Object.keys(s).forEach(k => {
                m(k);
                const S = x(k);
                S == null || S.forEach( ({connect: w}) => {
                    const M = async () => w == null ? void 0 : w();
                    T.push(M())
                }
                )
            }
            ),
            await Promise.all(T)
        }
        ,
        update_model: async T => {
            const S = x(T.room).map(w => {
                var M;
                return (M = w.update_model) === null || M === void 0 ? void 0 : M.call(w, T)
            }
            );
            await Promise.all(S)
        }
        ,
        error: async T => {
            console.error("error", T);
            const k = Object.values(s).flat().map(S => {
                var w;
                return (w = S.error) === null || w === void 0 ? void 0 : w.call(S, T)
            }
            );
            await Promise.all(k)
        }
    };
    let l = hm(r, i);
    function c() {
        d()
    }
    function d() {
        l && l.disconnect()
    }
    function p(T) {
        c(),
        n = {
            ...n,
            ...T
        },
        l = hm(n, i)
    }
    function m(T) {
        l.emit("join", T)
    }
    function y(T) {
        l.emit("leave", T)
    }
    async function v(T, k) {
        var S;
        const w = JSON.stringify(k);
        return (S = i.update_model) === null || S === void 0 ? void 0 : S.call(i, {
            room: T,
            data: w
        })
    }
    function x(T) {
        return s[T]
    }
    return {
        socket: l,
        subscribeToRoom: (T, k) => (s[T] || (m(T),
        s[T] = []),
        s[T].push(k),
        () => {
            var S, w;
            s[T] = (w = (S = s[T]) === null || S === void 0 ? void 0 : S.filter(M => M !== k)) !== null && w !== void 0 ? w : [],
            s[T].length === 0 && y(T)
        }
        ),
        updateConfig: p,
        updateModel: v,
        disconnect: d
    }
}
function Ik(r) {
    const {serverUrl: n="https://base44.app", appId: s, token: i, serviceToken: l, requiresAuth: c=!1, appBaseUrl: d, options: p, functionsVersion: m, headers: y} = r
      , x = Lk({
        config: {
            serverUrl: n,
            mountPath: "/ws-user-apps/socket.io/",
            transports: ["websocket"],
            appId: s,
            token: i
        }
    })
      , j = {
        ...y,
        "X-App-Id": String(s)
    }
      , T = m ? {
        ...j,
        "Base44-Functions-Version": m
    } : j
      , k = jo({
        baseURL: `${n}/api`,
        headers: j,
        token: i,
        onError: p == null ? void 0 : p.onError
    })
      , S = jo({
        baseURL: `${n}/api`,
        headers: T,
        token: i,
        interceptResponses: !1,
        onError: p == null ? void 0 : p.onError
    })
      , w = jo({
        baseURL: `${n}/api`,
        headers: j,
        token: l,
        onError: p == null ? void 0 : p.onError
    })
      , M = jo({
        baseURL: `${n}/api`,
        headers: T,
        token: l,
        interceptResponses: !1
    })
      , H = {
        entities: rm(k, s),
        integrations: sm(k, s),
        auth: FS(k, S, s, {
            appBaseUrl: d
        }),
        functions: om(S, s),
        agents: im({
            axios: k,
            socket: x,
            appId: s,
            serverUrl: n,
            token: i
        }),
        appLogs: am(k, s),
        cleanup: () => {
            x.disconnect()
        }
    }
      , U = {
        entities: rm(w, s),
        integrations: sm(w, s),
        sso: DS(w, s, i),
        connectors: US(w, s),
        functions: om(M, s),
        agents: im({
            axios: w,
            socket: x,
            appId: s,
            serverUrl: n,
            token: i
        }),
        appLogs: am(w, s),
        cleanup: () => {
            x.disconnect()
        }
    };
    if (typeof window < "u") {
        const G = i || nd();
        G && H.auth.setToken(G)
    }
    return c && typeof window < "u" && setTimeout(async () => {
        try {
            await H.auth.isAuthenticated() || H.auth.redirectToLogin(window.location.href)
        } catch (G) {
            console.error("Authentication check failed:", G),
            H.auth.redirectToLogin(window.location.href)
        }
    }
    , 0),
    {
        ...H,
        setToken(G) {
            H.auth.setToken(G),
            x.updateConfig({
                token: G
            })
        },
        getConfig() {
            return {
                serverUrl: n,
                appId: s,
                requiresAuth: c
            }
        },
        get asServiceRole() {
            if (!l)
                throw new Error("Service token is required to use asServiceRole. Please provide a serviceToken when creating the client.");
            return U
        }
    }
}
const iy = typeof window > "u"
  , Mk = iy ? {
    localStorage: new Map
} : window
  , tc = Mk.localStorage
  , Fk = r => r.replace(/([A-Z])/g, "_$1").toLowerCase()
  , No = (r, {defaultValue: n=void 0, removeFromUrl: s=!1}={}) => {
    if (iy)
        return n;
    const i = `base44_${Fk(r)}`
      , l = new URLSearchParams(window.location.search)
      , c = l.get(r);
    if (s) {
        l.delete(r);
        const p = `${window.location.pathname}${l.toString() ? `?${l.toString()}` : ""}${window.location.hash}`;
        window.history.replaceState({}, document.title, p)
    }
    if (c)
        return tc.setItem(i, c),
        c;
    if (n)
        return tc.setItem(i, n),
        n;
    const d = tc.getItem(i);
    return d || null
}
  , Dk = () => ({
    appId: No("app_id", {
        defaultValue: "691614e9644b2e21c1b0aadb"
    }),
    serverUrl: No("server_url", {
        defaultValue: "https://app.base44.com"
    }),
    token: No("access_token", {
        removeFromUrl: !0
    }),
    fromUrl: No("from_url", {
        defaultValue: window.location.href
    }),
    functionsVersion: No("functions_version")
})
  , gs = {
    ...Dk()
}
  , {appId: Uk, serverUrl: zk, token: Bk, functionsVersion: $k} = gs
  , _r = Ik({
    appId: Uk,
    serverUrl: zk,
    token: Bk,
    functionsVersion: $k,
    requiresAuth: !1
})
  , ay = C.createContext()
  , Vk = ({children: r}) => {
    const [n,s] = C.useState(null)
      , [i,l] = C.useState(!1)
      , [c,d] = C.useState(!0)
      , [p,m] = C.useState(!0)
      , [y,v] = C.useState(null)
      , [x,j] = C.useState(null);
    C.useEffect( () => {
        T()
    }
    , []);
    const T = async () => {
        var M, H;
        try {
            m(!0),
            v(null);
            const U = jo({
                baseURL: `${gs.serverUrl}/api/apps/public`,
                headers: {
                    "X-App-Id": gs.appId
                },
                token: gs.token,
                interceptResponses: !0
            });
            try {
                const D = await U.get(`/prod/public-settings/by-id/${gs.appId}`);
                j(D),
                gs.token ? await k() : (d(!1),
                l(!1)),
                m(!1)
            } catch (D) {
                if (console.error("App state check failed:", D),
                D.status === 403 && ((H = (M = D.data) == null ? void 0 : M.extra_data) != null && H.reason)) {
                    const G = D.data.extra_data.reason;
                    v(G === "auth_required" ? {
                        type: "auth_required",
                        message: "Authentication required"
                    } : G === "user_not_registered" ? {
                        type: "user_not_registered",
                        message: "User not registered for this app"
                    } : {
                        type: G,
                        message: D.message
                    })
                } else
                    v({
                        type: "unknown",
                        message: D.message || "Failed to load app"
                    });
                m(!1),
                d(!1)
            }
        } catch (U) {
            console.error("Unexpected error:", U),
            v({
                type: "unknown",
                message: U.message || "An unexpected error occurred"
            }),
            m(!1),
            d(!1)
        }
    }
      , k = async () => {
        try {
            d(!0);
            const M = await _r.auth.me();
            s(M),
            l(!0),
            d(!1)
        } catch (M) {
            console.error("User auth check failed:", M),
            d(!1),
            l(!1),
            (M.status === 401 || M.status === 403) && v({
                type: "auth_required",
                message: "Authentication required"
            })
        }
    }
      , S = (M=!0) => {
        s(null),
        l(!1),
        M ? _r.auth.logout(window.location.href) : _r.auth.logout()
    }
      , w = () => {
        _r.auth.redirectToLogin(window.location.href)
    }
    ;
    return h.jsx(ay.Provider, {
        value: {
            user: n,
            isAuthenticated: i,
            isLoadingAuth: c,
            isLoadingPublicSettings: p,
            authError: y,
            appPublicSettings: x,
            logout: S,
            navigateToLogin: w,
            checkAppState: T
        },
        children: r
    })
}
  , ly = () => {
    const r = C.useContext(ay);
    if (!r)
        throw new Error("useAuth must be used within an AuthProvider");
    return r
}
;
function Lt(r) {
    return "/" + r.toLowerCase().replace(/ /g, "-")
}
function pm(r, n) {
    if (typeof r == "function")
        return r(n);
    r != null && (r.current = n)
}
function uy(...r) {
    return n => {
        let s = !1;
        const i = r.map(l => {
            const c = pm(l, n);
            return !s && typeof c == "function" && (s = !0),
            c
        }
        );
        if (s)
            return () => {
                for (let l = 0; l < i.length; l++) {
                    const c = i[l];
                    typeof c == "function" ? c() : pm(r[l], null)
                }
            }
    }
}
function Ta(...r) {
    return C.useCallback(uy(...r), r)
}
function Pa(r) {
    const n = Hk(r)
      , s = C.forwardRef( (i, l) => {
        const {children: c, ...d} = i
          , p = C.Children.toArray(c)
          , m = p.find(Qk);
        if (m) {
            const y = m.props.children
              , v = p.map(x => x === m ? C.Children.count(y) > 1 ? C.Children.only(null) : C.isValidElement(y) ? y.props.children : null : x);
            return h.jsx(n, {
                ...d,
                ref: l,
                children: C.isValidElement(y) ? C.cloneElement(y, void 0, v) : null
            })
        }
        return h.jsx(n, {
            ...d,
            ref: l,
            children: c
        })
    }
    );
    return s.displayName = `${r}.Slot`,
    s
}
var qk = Pa("Slot");
function Hk(r) {
    const n = C.forwardRef( (s, i) => {
        const {children: l, ...c} = s;
        if (C.isValidElement(l)) {
            const d = Gk(l)
              , p = Kk(c, l.props);
            return l.type !== C.Fragment && (p.ref = i ? uy(i, d) : d),
            C.cloneElement(l, p)
        }
        return C.Children.count(l) > 1 ? C.Children.only(null) : null
    }
    );
    return n.displayName = `${r}.SlotClone`,
    n
}
var Wk = Symbol("radix.slottable");
function Qk(r) {
    return C.isValidElement(r) && typeof r.type == "function" && "__radixId"in r.type && r.type.__radixId === Wk
}
function Kk(r, n) {
    const s = {
        ...n
    };
    for (const i in n) {
        const l = r[i]
          , c = n[i];
        /^on[A-Z]/.test(i) ? l && c ? s[i] = (...p) => {
            const m = c(...p);
            return l(...p),
            m
        }
        : l && (s[i] = l) : i === "style" ? s[i] = {
            ...l,
            ...c
        } : i === "className" && (s[i] = [l, c].filter(Boolean).join(" "))
    }
    return {
        ...r,
        ...s
    }
}
function Gk(r) {
    var i, l;
    let n = (i = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : i.get
      , s = n && "isReactWarning"in n && n.isReactWarning;
    return s ? r.ref : (n = (l = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : l.get,
    s = n && "isReactWarning"in n && n.isReactWarning,
    s ? r.props.ref : r.props.ref || r.ref)
}
const Yk = Hc("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
            outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-md px-8",
            icon: "h-9 w-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , Ke = C.forwardRef( ({className: r, variant: n, size: s, asChild: i=!1, ...l}, c) => {
    const d = i ? qk : "button";
    return h.jsx(d, {
        className: ot(Yk({
            variant: n,
            size: s,
            className: r
        })),
        ref: c,
        ...l
    })
}
);
Ke.displayName = "Button";
const tn = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("rounded-xl border bg-card text-card-foreground shadow", r),
    ...n
}));
tn.displayName = "Card";
const Jk = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("flex flex-col space-y-1.5 p-6", r),
    ...n
}));
Jk.displayName = "CardHeader";
const Xk = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("font-semibold leading-none tracking-tight", r),
    ...n
}));
Xk.displayName = "CardTitle";
const Zk = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("text-sm text-muted-foreground", r),
    ...n
}));
Zk.displayName = "CardDescription";
const eE = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("p-6 pt-0", r),
    ...n
}));
eE.displayName = "CardContent";
const tE = C.forwardRef( ({className: r, ...n}, s) => h.jsx("div", {
    ref: s,
    className: ot("flex items-center p-6 pt-0", r),
    ...n
}));
tE.displayName = "CardFooter";
const nE = [{
    model: "Core",
    name: "SynaPad Core",
    price: 849,
    color: "#612525",
    audience: "School Students",
    screen: '6.8" Matte Screen',
    build: "Durable Plastic",
    storage: "16GB",
    stylus: "Basic Stylus",
    battery: "6-7 Days",
    features: ["Cloud Sync", "Basic Note-Taking", "Lightweight Design"],
    description: "Perfect for school students who need a reliable, affordable digital writing companion.",
    gradient: "from-red-900/20 to-red-800/10"
}, {
    model: "Plus",
    name: "SynaPad Plus",
    price: 1199,
    color: "#047857",
    audience: "College Students",
    screen: '10" Anti-Glare Screen',
    build: "Vegan Leather",
    storage: "32GB",
    stylus: "Pro Stylus",
    battery: "8-10 Days",
    features: ["AI Handwriting Recognition", "Advanced Cloud Sync", "Premium Feel"],
    description: "Designed for college students who demand more power and sophisticated features.",
    gradient: "from-emerald-700/20 to-emerald-600/10"
}, {
    model: "Pro",
    name: "SynaPad Pro",
    price: 2399,
    color: "#1e3a8a",
    audience: "Professionals",
    screen: '10.3" Matte HD Screen',
    build: "Aluminum Unibody",
    storage: "64GB",
    stylus: "Advanced Pressure-Sensitive Stylus",
    battery: "10-12 Days",
    features: ["AI Voice Dictation", "Advanced Note Organization", "Premium Build"],
    description: "The ultimate tool for professionals who need the best in digital note-taking.",
    gradient: "from-blue-900/20 to-blue-800/10"
}];
function rE() {
    const [r,n] = C.useState(null);
    return C.useEffect( () => {
        const s = new IntersectionObserver(i => {
            i.forEach(l => {
                l.isIntersecting && l.target.classList.add("animate-fade-in-up")
            }
            )
        }
        ,{
            threshold: .1
        });
        return document.querySelectorAll(".fade-in-section").forEach(i => {
            s.observe(i)
        }
        ),
        () => s.disconnect()
    }
    , []),
    h.jsxs("div", {
        className: "min-h-screen",
        children: [h.jsxs("section", {
            className: "relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
            children: [h.jsx("div", {
                className: "absolute inset-0 opacity-10",
                children: h.jsx("div", {
                    className: "absolute inset-0",
                    style: {
                        backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                        backgroundSize: "40px 40px"
                    }
                })
            }), h.jsx("div", {
                className: "absolute top-8 left-8 z-20",
                children: h.jsx("img", {
                    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png",
                    alt: "SynaPad",
                    className: "h-24 md:h-32 w-auto brightness-0 invert"
                })
            }), h.jsxs("div", {
                className: "relative z-10 text-center px-6 max-w-4xl mx-auto",
                children: [h.jsx("img", {
                    src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png",
                    alt: "SynaPad",
                    className: "h-40 md:h-56 w-auto mx-auto mb-8 brightness-0 invert"
                }), h.jsx("p", {
                    className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto",
                    children: "Where thoughts meet technology. Premium digital writing tablets that transform how you think, learn, and create."
                }), h.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [h.jsxs(Ke, {
                        size: "lg",
                        className: "bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold",
                        onClick: () => document.getElementById("products").scrollIntoView({
                            behavior: "smooth"
                        }),
                        children: ["Shop Now", h.jsx(qu, {
                            className: "ml-2 w-5 h-5"
                        })]
                    }), h.jsx(Ke, {
                        size: "lg",
                        className: "border-2 border-white bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full font-semibold transition-all",
                        onClick: () => document.getElementById("compare").scrollIntoView({
                            behavior: "smooth"
                        }),
                        children: "Compare Models"
                    })]
                }), h.jsxs("div", {
                    className: "flex flex-wrap justify-center gap-4 mt-12",
                    children: [h.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white",
                        children: [h.jsx(ux, {
                            className: "w-4 h-4"
                        }), h.jsx("span", {
                            className: "text-sm",
                            children: "Eco-Friendly"
                        })]
                    }), h.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white",
                        children: [h.jsx(sx, {
                            className: "w-4 h-4"
                        }), h.jsx("span", {
                            className: "text-sm",
                            children: "AI-Powered"
                        })]
                    }), h.jsxs("div", {
                        className: "flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full text-white",
                        children: [h.jsx(Tx, {
                            className: "w-4 h-4"
                        }), h.jsx("span", {
                            className: "text-sm",
                            children: "Long Battery Life"
                        })]
                    })]
                })]
            }), h.jsx("div", {
                className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce",
                children: h.jsx("div", {
                    className: "w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2",
                    children: h.jsx("div", {
                        className: "w-1 h-2 bg-white/50 rounded-full"
                    })
                })
            })]
        }), h.jsx("section", {
            id: "products",
            className: "py-20 px-6",
            children: h.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [h.jsxs("div", {
                    className: "text-center mb-16 fade-in-section",
                    children: [h.jsx("h2", {
                        className: "text-5xl font-bold text-gray-900 mb-4",
                        children: "Choose Your Perfect Match"
                    }), h.jsx("p", {
                        className: "text-xl text-gray-600 max-w-2xl mx-auto",
                        children: "Three powerful devices, each crafted for different needs. From students to professionals."
                    })]
                }), h.jsx("div", {
                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                    children: nE.map( (s, i) => h.jsxs(tn, {
                        className: "fade-in-section overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-gray-300",
                        style: {
                            animationDelay: `${i * .2}s`
                        },
                        children: [h.jsxs("div", {
                            className: `h-64 bg-gradient-to-br ${s.gradient} flex items-center justify-center relative overflow-hidden`,
                            children: [h.jsx("div", {
                                className: "absolute inset-0 opacity-20",
                                style: {
                                    backgroundColor: s.color
                                }
                            }), h.jsx("div", {
                                className: "relative w-40 h-52 bg-gray-800 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 border-4 border-gray-700",
                                children: h.jsx("div", {
                                    className: "absolute inset-2 bg-white rounded-xl flex items-center justify-center",
                                    children: h.jsx("div", {
                                        className: "w-20 h-20 rounded-lg flex items-center justify-center text-2xl font-bold text-white",
                                        style: {
                                            backgroundColor: s.color
                                        },
                                        children: s.model[0]
                                    })
                                })
                            }), h.jsx("div", {
                                className: "absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg",
                                children: h.jsx("span", {
                                    className: "text-sm font-semibold",
                                    style: {
                                        color: s.color
                                    },
                                    children: s.model
                                })
                            })]
                        }), h.jsxs("div", {
                            className: "p-6",
                            children: [h.jsx("h3", {
                                className: "text-2xl font-bold text-gray-900 mb-2",
                                children: s.name
                            }), h.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: s.audience
                            }), h.jsx("div", {
                                className: "flex items-baseline gap-2 mb-6",
                                children: h.jsxs("span", {
                                    className: "text-4xl font-bold text-gray-900",
                                    children: ["AED ", s.price]
                                })
                            }), h.jsxs("div", {
                                className: "space-y-3 mb-6",
                                children: [h.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-700",
                                    children: [h.jsx(Mm, {
                                        className: "w-4 h-4",
                                        style: {
                                            color: s.color
                                        }
                                    }), h.jsx("span", {
                                        children: s.screen
                                    })]
                                }), h.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-700",
                                    children: [h.jsx(Lm, {
                                        className: "w-4 h-4",
                                        style: {
                                            color: s.color
                                        }
                                    }), h.jsxs("span", {
                                        children: [s.storage, " Storage"]
                                    })]
                                }), h.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-700",
                                    children: [h.jsx(Om, {
                                        className: "w-4 h-4",
                                        style: {
                                            color: s.color
                                        }
                                    }), h.jsxs("span", {
                                        children: [s.battery, " Battery"]
                                    })]
                                }), h.jsxs("div", {
                                    className: "flex items-center gap-2 text-sm text-gray-700",
                                    children: [h.jsx(Im, {
                                        className: "w-4 h-4",
                                        style: {
                                            color: s.color
                                        }
                                    }), h.jsx("span", {
                                        children: s.stylus
                                    })]
                                })]
                            }), h.jsxs("div", {
                                className: "mb-6",
                                children: [h.jsx("p", {
                                    className: "text-sm font-semibold text-gray-700 mb-2",
                                    children: "Key Features:"
                                }), h.jsx("ul", {
                                    className: "space-y-1",
                                    children: s.features.map( (l, c) => h.jsxs("li", {
                                        className: "flex items-center gap-2 text-sm text-gray-600",
                                        children: [h.jsx(Am, {
                                            className: "w-4 h-4",
                                            style: {
                                                color: s.color
                                            }
                                        }), l]
                                    }, c))
                                })]
                            }), h.jsx(ga, {
                                to: Lt("ProductDetail") + `?model=${s.model}`,
                                children: h.jsxs(Ke, {
                                    className: "w-full",
                                    style: {
                                        backgroundColor: s.color,
                                        color: "white"
                                    },
                                    children: ["Learn More", h.jsx(qu, {
                                        className: "ml-2 w-4 h-4"
                                    })]
                                })
                            })]
                        })]
                    }, s.model))
                })]
            })
        }), h.jsx("section", {
            id: "compare",
            className: "py-20 px-6 bg-white",
            children: h.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [h.jsxs("div", {
                    className: "text-center mb-16 fade-in-section",
                    children: [h.jsx("h2", {
                        className: "text-5xl font-bold text-gray-900 mb-4",
                        children: "Compare All Models"
                    }), h.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "See which SynaPad fits your needs best"
                    })]
                }), h.jsx("div", {
                    className: "fade-in-section overflow-x-auto",
                    children: h.jsxs("table", {
                        className: "w-full border-collapse",
                        children: [h.jsx("thead", {
                            children: h.jsxs("tr", {
                                className: "border-b-2 border-gray-200",
                                children: [h.jsx("th", {
                                    className: "text-left py-4 px-6 text-gray-700 font-semibold",
                                    children: "Feature"
                                }), h.jsxs("th", {
                                    className: "text-center py-4 px-6",
                                    children: [h.jsx("div", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Core"
                                    }), h.jsx("div", {
                                        className: "text-sm text-gray-600",
                                        children: "AED 849"
                                    })]
                                }), h.jsxs("th", {
                                    className: "text-center py-4 px-6",
                                    children: [h.jsx("div", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Plus"
                                    }), h.jsx("div", {
                                        className: "text-sm text-gray-600",
                                        children: "AED 1,199"
                                    })]
                                }), h.jsxs("th", {
                                    className: "text-center py-4 px-6",
                                    children: [h.jsx("div", {
                                        className: "text-xl font-bold text-gray-900",
                                        children: "Pro"
                                    }), h.jsx("div", {
                                        className: "text-sm text-gray-600",
                                        children: "AED 2,399"
                                    })]
                                })]
                            })
                        }), h.jsx("tbody", {
                            children: [["Display", '6.8" Matte', '10" Anti-Glare', '10.3" Matte HD'], ["Build Material", "Plastic", "Vegan Leather", "Aluminum"], ["Storage", "16GB", "32GB", "64GB"], ["Stylus", "Basic", "Pro", "Pressure-Sensitive"], ["Battery Life", "6-7 Days", "8-10 Days", "10-12 Days"], ["Cloud Sync", "Yes", "Yes", "Yes"], ["AI Handwriting", "No", "Yes", "Yes"], ["AI Voice Dictation", "No", "No", "Yes"]].map( (s, i) => h.jsxs("tr", {
                                className: "border-b border-gray-100 hover:bg-gray-50",
                                children: [h.jsx("td", {
                                    className: "py-4 px-6 font-medium text-gray-900",
                                    children: s[0]
                                }), h.jsx("td", {
                                    className: "py-4 px-6 text-center text-gray-700",
                                    children: s[1]
                                }), h.jsx("td", {
                                    className: "py-4 px-6 text-center text-gray-700",
                                    children: s[2]
                                }), h.jsx("td", {
                                    className: "py-4 px-6 text-center text-gray-700",
                                    children: s[3]
                                })]
                            }, i))
                        })]
                    })
                })]
            })
        }), h.jsx("section", {
            id: "testimonials",
            className: "py-20 px-6 bg-gradient-to-b from-gray-50 to-white",
            children: h.jsxs("div", {
                className: "max-w-7xl mx-auto",
                children: [h.jsxs("div", {
                    className: "text-center mb-16 fade-in-section",
                    children: [h.jsx("h2", {
                        className: "text-5xl font-bold text-gray-900 mb-4",
                        children: "Loved by Students & Educators"
                    }), h.jsx("p", {
                        className: "text-xl text-gray-600",
                        children: "See what our users have to say"
                    })]
                }), h.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: [{
                        name: "Mariam",
                        role: "High School Student",
                        content: "The SynaPad Core has completely changed how I take notes in class. It's lightweight, affordable, and the battery lasts all week!",
                        rating: 5,
                        color: "#612525"
                    }, {
                        name: "Jeevan Sundar",
                        role: "University Student",
                        content: "The AI handwriting recognition on the Plus model is incredible. It converts my messy notes into text perfectly. Worth every dirham!",
                        rating: 5,
                        color: "#047857"
                    }, {
                        name: "Dr. Fatima Al-Mansoori",
                        role: "University Professor",
                        content: "I use the Pro model for lectures and research. The voice dictation and premium build quality make it an essential tool for my work.",
                        rating: 5,
                        color: "#1e3a8a"
                    }].map( (s, i) => h.jsxs(tn, {
                        className: "fade-in-section p-6 hover:shadow-xl transition-shadow",
                        style: {
                            animationDelay: `${i * .2}s`
                        },
                        children: [h.jsx("div", {
                            className: "flex gap-1 mb-4",
                            children: [...Array(s.rating)].map( (l, c) => h.jsx(Ex, {
                                className: "w-5 h-5 fill-yellow-400 text-yellow-400"
                            }, c))
                        }), h.jsxs("p", {
                            className: "text-gray-700 mb-6 italic",
                            children: ['"', s.content, '"']
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3",
                            children: [h.jsx("div", {
                                className: "w-12 h-12 rounded-full flex items-center justify-center text-white font-bold",
                                style: {
                                    backgroundColor: s.color
                                },
                                children: s.name[0]
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: s.name
                                }), h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: s.role
                                })]
                            })]
                        })]
                    }, i))
                })]
            })
        }), h.jsx("section", {
            className: "py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800",
            children: h.jsxs("div", {
                className: "max-w-4xl mx-auto text-center",
                children: [h.jsx(Sx, {
                    className: "w-16 h-16 text-yellow-400 mx-auto mb-6"
                }), h.jsx("h2", {
                    className: "text-4xl md:text-5xl font-bold text-white mb-6",
                    children: "Ready to Transform Your Note-Taking?"
                }), h.jsx("p", {
                    className: "text-xl text-gray-300 mb-8",
                    children: "Join thousands of students and professionals who've made the switch to SynaPad."
                }), h.jsx("div", {
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: h.jsxs(Ke, {
                        size: "lg",
                        className: "bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-6 rounded-full",
                        onClick: () => document.getElementById("products").scrollIntoView({
                            behavior: "smooth"
                        }),
                        children: ["Shop Now", h.jsx(qu, {
                            className: "ml-2 w-5 h-5"
                        })]
                    })
                }), h.jsx("p", {
                    className: "text-gray-400 text-sm mt-8",
                    children: "✓ Free shipping on all orders • ✓ 2-year warranty • ✓ 30-day returns"
                })]
            })
        })]
    })
}
function jn(r, n, {checkForDefaultPrevented: s=!0}={}) {
    return function(l) {
        if (r == null || r(l),
        s === !1 || !l.defaultPrevented)
            return n == null ? void 0 : n(l)
    }
}
function ld(r, n=[]) {
    let s = [];
    function i(c, d) {
        const p = C.createContext(d)
          , m = s.length;
        s = [...s, d];
        const y = x => {
            var M;
            const {scope: j, children: T, ...k} = x
              , S = ((M = j == null ? void 0 : j[r]) == null ? void 0 : M[m]) || p
              , w = C.useMemo( () => k, Object.values(k));
            return h.jsx(S.Provider, {
                value: w,
                children: T
            })
        }
        ;
        y.displayName = c + "Provider";
        function v(x, j) {
            var S;
            const T = ((S = j == null ? void 0 : j[r]) == null ? void 0 : S[m]) || p
              , k = C.useContext(T);
            if (k)
                return k;
            if (d !== void 0)
                return d;
            throw new Error(`\`${x}\` must be used within \`${c}\``)
        }
        return [y, v]
    }
    const l = () => {
        const c = s.map(d => C.createContext(d));
        return function(p) {
            const m = (p == null ? void 0 : p[r]) || c;
            return C.useMemo( () => ({
                [`__scope${r}`]: {
                    ...p,
                    [r]: m
                }
            }), [p, m])
        }
    }
    ;
    return l.scopeName = r,
    [i, sE(l, ...n)]
}
function sE(...r) {
    const n = r[0];
    if (r.length === 1)
        return n;
    const s = () => {
        const i = r.map(l => ({
            useScope: l(),
            scopeName: l.scopeName
        }));
        return function(c) {
            const d = i.reduce( (p, {useScope: m, scopeName: y}) => {
                const x = m(c)[`__scope${y}`];
                return {
                    ...p,
                    ...x
                }
            }
            , {});
            return C.useMemo( () => ({
                [`__scope${n.scopeName}`]: d
            }), [d])
        }
    }
    ;
    return s.scopeName = n.scopeName,
    s
}
function oE(r) {
    const n = r + "CollectionProvider"
      , [s,i] = ld(n)
      , [l,c] = s(n, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , d = S => {
        const {scope: w, children: M} = S
          , H = pt.useRef(null)
          , U = pt.useRef(new Map).current;
        return h.jsx(l, {
            scope: w,
            itemMap: U,
            collectionRef: H,
            children: M
        })
    }
    ;
    d.displayName = n;
    const p = r + "CollectionSlot"
      , m = Pa(p)
      , y = pt.forwardRef( (S, w) => {
        const {scope: M, children: H} = S
          , U = c(p, M)
          , D = Ta(w, U.collectionRef);
        return h.jsx(m, {
            ref: D,
            children: H
        })
    }
    );
    y.displayName = p;
    const v = r + "CollectionItemSlot"
      , x = "data-radix-collection-item"
      , j = Pa(v)
      , T = pt.forwardRef( (S, w) => {
        const {scope: M, children: H, ...U} = S
          , D = pt.useRef(null)
          , G = Ta(w, D)
          , de = c(v, M);
        return pt.useEffect( () => (de.itemMap.set(D, {
            ref: D,
            ...U
        }),
        () => void de.itemMap.delete(D))),
        h.jsx(j, {
            [x]: "",
            ref: G,
            children: H
        })
    }
    );
    T.displayName = v;
    function k(S) {
        const w = c(r + "CollectionConsumer", S);
        return pt.useCallback( () => {
            const H = w.collectionRef.current;
            if (!H)
                return [];
            const U = Array.from(H.querySelectorAll(`[${x}]`));
            return Array.from(w.itemMap.values()).sort( (de, ge) => U.indexOf(de.ref.current) - U.indexOf(ge.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: d,
        Slot: y,
        ItemSlot: T
    }, k, i]
}
var Oa = globalThis != null && globalThis.document ? C.useLayoutEffect : () => {}
  , iE = qc[" useId ".trim().toString()] || ( () => {}
)
  , aE = 0;
function cy(r) {
    const [n,s] = C.useState(iE());
    return Oa( () => {
        s(i => i ?? String(aE++))
    }
    , [r]),
    n ? `radix-${n}` : ""
}
var lE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , Vr = lE.reduce( (r, n) => {
    const s = Pa(`Primitive.${n}`)
      , i = C.forwardRef( (l, c) => {
        const {asChild: d, ...p} = l
          , m = d ? s : n;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        h.jsx(m, {
            ...p,
            ref: c
        })
    }
    );
    return i.displayName = `Primitive.${n}`,
    {
        ...r,
        [n]: i
    }
}
, {});
function uE(r) {
    const n = C.useRef(r);
    return C.useEffect( () => {
        n.current = r
    }
    ),
    C.useMemo( () => (...s) => {
        var i;
        return (i = n.current) == null ? void 0 : i.call(n, ...s)
    }
    , [])
}
var cE = qc[" useInsertionEffect ".trim().toString()] || Oa;
function dy({prop: r, defaultProp: n, onChange: s= () => {}
, caller: i}) {
    const [l,c,d] = dE({
        defaultProp: n,
        onChange: s
    })
      , p = r !== void 0
      , m = p ? r : l;
    {
        const v = C.useRef(r !== void 0);
        C.useEffect( () => {
            const x = v.current;
            x !== p && console.warn(`${i} is changing from ${x ? "controlled" : "uncontrolled"} to ${p ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
            v.current = p
        }
        , [p, i])
    }
    const y = C.useCallback(v => {
        var x;
        if (p) {
            const j = fE(v) ? v(r) : v;
            j !== r && ((x = d.current) == null || x.call(d, j))
        } else
            c(v)
    }
    , [p, r, c, d]);
    return [m, y]
}
function dE({defaultProp: r, onChange: n}) {
    const [s,i] = C.useState(r)
      , l = C.useRef(s)
      , c = C.useRef(n);
    return cE( () => {
        c.current = n
    }
    , [n]),
    C.useEffect( () => {
        var d;
        l.current !== s && ((d = c.current) == null || d.call(c, s),
        l.current = s)
    }
    , [s, l]),
    [s, i, c]
}
function fE(r) {
    return typeof r == "function"
}
var hE = C.createContext(void 0);
function fy(r) {
    const n = C.useContext(hE);
    return r || n || "ltr"
}
var nc = "rovingFocusGroup.onEntryFocus"
  , pE = {
    bubbles: !1,
    cancelable: !0
}
  , Qo = "RovingFocusGroup"
  , [Uc,hy,mE] = oE(Qo)
  , [gE,py] = ld(Qo, [mE])
  , [yE,vE] = gE(Qo)
  , my = C.forwardRef( (r, n) => h.jsx(Uc.Provider, {
    scope: r.__scopeRovingFocusGroup,
    children: h.jsx(Uc.Slot, {
        scope: r.__scopeRovingFocusGroup,
        children: h.jsx(xE, {
            ...r,
            ref: n
        })
    })
}));
my.displayName = Qo;
var xE = C.forwardRef( (r, n) => {
    const {__scopeRovingFocusGroup: s, orientation: i, loop: l=!1, dir: c, currentTabStopId: d, defaultCurrentTabStopId: p, onCurrentTabStopIdChange: m, onEntryFocus: y, preventScrollOnEntryFocus: v=!1, ...x} = r
      , j = C.useRef(null)
      , T = Ta(n, j)
      , k = fy(c)
      , [S,w] = dy({
        prop: d,
        defaultProp: p ?? null,
        onChange: m,
        caller: Qo
    })
      , [M,H] = C.useState(!1)
      , U = uE(y)
      , D = hy(s)
      , G = C.useRef(!1)
      , [de,ge] = C.useState(0);
    return C.useEffect( () => {
        const I = j.current;
        if (I)
            return I.addEventListener(nc, U),
            () => I.removeEventListener(nc, U)
    }
    , [U]),
    h.jsx(yE, {
        scope: s,
        orientation: i,
        dir: k,
        loop: l,
        currentTabStopId: S,
        onItemFocus: C.useCallback(I => w(I), [w]),
        onItemShiftTab: C.useCallback( () => H(!0), []),
        onFocusableItemAdd: C.useCallback( () => ge(I => I + 1), []),
        onFocusableItemRemove: C.useCallback( () => ge(I => I - 1), []),
        children: h.jsx(Vr.div, {
            tabIndex: M || de === 0 ? -1 : 0,
            "data-orientation": i,
            ...x,
            ref: T,
            style: {
                outline: "none",
                ...r.style
            },
            onMouseDown: jn(r.onMouseDown, () => {
                G.current = !0
            }
            ),
            onFocus: jn(r.onFocus, I => {
                const Q = !G.current;
                if (I.target === I.currentTarget && Q && !M) {
                    const K = new CustomEvent(nc,pE);
                    if (I.currentTarget.dispatchEvent(K),
                    !K.defaultPrevented) {
                        const Z = D().filter(ie => ie.focusable)
                          , B = Z.find(ie => ie.active)
                          , te = Z.find(ie => ie.id === S)
                          , fe = [B, te, ...Z].filter(Boolean).map(ie => ie.ref.current);
                        vy(fe, v)
                    }
                }
                G.current = !1
            }
            ),
            onBlur: jn(r.onBlur, () => H(!1))
        })
    })
}
)
  , gy = "RovingFocusGroupItem"
  , yy = C.forwardRef( (r, n) => {
    const {__scopeRovingFocusGroup: s, focusable: i=!0, active: l=!1, tabStopId: c, children: d, ...p} = r
      , m = cy()
      , y = c || m
      , v = vE(gy, s)
      , x = v.currentTabStopId === y
      , j = hy(s)
      , {onFocusableItemAdd: T, onFocusableItemRemove: k, currentTabStopId: S} = v;
    return C.useEffect( () => {
        if (i)
            return T(),
            () => k()
    }
    , [i, T, k]),
    h.jsx(Uc.ItemSlot, {
        scope: s,
        id: y,
        focusable: i,
        active: l,
        children: h.jsx(Vr.span, {
            tabIndex: x ? 0 : -1,
            "data-orientation": v.orientation,
            ...p,
            ref: n,
            onMouseDown: jn(r.onMouseDown, w => {
                i ? v.onItemFocus(y) : w.preventDefault()
            }
            ),
            onFocus: jn(r.onFocus, () => v.onItemFocus(y)),
            onKeyDown: jn(r.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    v.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const M = SE(w, v.orientation, v.dir);
                if (M !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let U = j().filter(D => D.focusable).map(D => D.ref.current);
                    if (M === "last")
                        U.reverse();
                    else if (M === "prev" || M === "next") {
                        M === "prev" && U.reverse();
                        const D = U.indexOf(w.currentTarget);
                        U = v.loop ? kE(U, D + 1) : U.slice(D + 1)
                    }
                    setTimeout( () => vy(U))
                }
            }
            ),
            children: typeof d == "function" ? d({
                isCurrentTabStop: x,
                hasTabStop: S != null
            }) : d
        })
    })
}
);
yy.displayName = gy;
var wE = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function bE(r, n) {
    return n !== "rtl" ? r : r === "ArrowLeft" ? "ArrowRight" : r === "ArrowRight" ? "ArrowLeft" : r
}
function SE(r, n, s) {
    const i = bE(r.key, s);
    if (!(n === "vertical" && ["ArrowLeft", "ArrowRight"].includes(i)) && !(n === "horizontal" && ["ArrowUp", "ArrowDown"].includes(i)))
        return wE[i]
}
function vy(r, n=!1) {
    const s = document.activeElement;
    for (const i of r)
        if (i === s || (i.focus({
            preventScroll: n
        }),
        document.activeElement !== s))
            return
}
function kE(r, n) {
    return r.map( (s, i) => r[(n + i) % r.length])
}
var EE = my
  , CE = yy;
function NE(r, n) {
    return C.useReducer( (s, i) => n[s][i] ?? s, r)
}
var xy = r => {
    const {present: n, children: s} = r
      , i = _E(n)
      , l = typeof s == "function" ? s({
        present: i.isPresent
    }) : C.Children.only(s)
      , c = Ta(i.ref, jE(l));
    return typeof s == "function" || i.isPresent ? C.cloneElement(l, {
        ref: c
    }) : null
}
;
xy.displayName = "Presence";
function _E(r) {
    const [n,s] = C.useState()
      , i = C.useRef(null)
      , l = C.useRef(r)
      , c = C.useRef("none")
      , d = r ? "mounted" : "unmounted"
      , [p,m] = NE(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return C.useEffect( () => {
        const y = da(i.current);
        c.current = p === "mounted" ? y : "none"
    }
    , [p]),
    Oa( () => {
        const y = i.current
          , v = l.current;
        if (v !== r) {
            const j = c.current
              , T = da(y);
            r ? m("MOUNT") : T === "none" || (y == null ? void 0 : y.display) === "none" ? m("UNMOUNT") : m(v && j !== T ? "ANIMATION_OUT" : "UNMOUNT"),
            l.current = r
        }
    }
    , [r, m]),
    Oa( () => {
        if (n) {
            let y;
            const v = n.ownerDocument.defaultView ?? window
              , x = T => {
                const S = da(i.current).includes(CSS.escape(T.animationName));
                if (T.target === n && S && (m("ANIMATION_END"),
                !l.current)) {
                    const w = n.style.animationFillMode;
                    n.style.animationFillMode = "forwards",
                    y = v.setTimeout( () => {
                        n.style.animationFillMode === "forwards" && (n.style.animationFillMode = w)
                    }
                    )
                }
            }
              , j = T => {
                T.target === n && (c.current = da(i.current))
            }
            ;
            return n.addEventListener("animationstart", j),
            n.addEventListener("animationcancel", x),
            n.addEventListener("animationend", x),
            () => {
                v.clearTimeout(y),
                n.removeEventListener("animationstart", j),
                n.removeEventListener("animationcancel", x),
                n.removeEventListener("animationend", x)
            }
        } else
            m("ANIMATION_END")
    }
    , [n, m]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(p),
        ref: C.useCallback(y => {
            i.current = y ? getComputedStyle(y) : null,
            s(y)
        }
        , [])
    }
}
function da(r) {
    return (r == null ? void 0 : r.animationName) || "none"
}
function jE(r) {
    var i, l;
    let n = (i = Object.getOwnPropertyDescriptor(r.props, "ref")) == null ? void 0 : i.get
      , s = n && "isReactWarning"in n && n.isReactWarning;
    return s ? r.ref : (n = (l = Object.getOwnPropertyDescriptor(r, "ref")) == null ? void 0 : l.get,
    s = n && "isReactWarning"in n && n.isReactWarning,
    s ? r.props.ref : r.props.ref || r.ref)
}
var $a = "Tabs"
  , [RE] = ld($a, [py])
  , wy = py()
  , [TE,ud] = RE($a)
  , by = C.forwardRef( (r, n) => {
    const {__scopeTabs: s, value: i, onValueChange: l, defaultValue: c, orientation: d="horizontal", dir: p, activationMode: m="automatic", ...y} = r
      , v = fy(p)
      , [x,j] = dy({
        prop: i,
        onChange: l,
        defaultProp: c ?? "",
        caller: $a
    });
    return h.jsx(TE, {
        scope: s,
        baseId: cy(),
        value: x,
        onValueChange: j,
        orientation: d,
        dir: v,
        activationMode: m,
        children: h.jsx(Vr.div, {
            dir: v,
            "data-orientation": d,
            ...y,
            ref: n
        })
    })
}
);
by.displayName = $a;
var Sy = "TabsList"
  , ky = C.forwardRef( (r, n) => {
    const {__scopeTabs: s, loop: i=!0, ...l} = r
      , c = ud(Sy, s)
      , d = wy(s);
    return h.jsx(EE, {
        asChild: !0,
        ...d,
        orientation: c.orientation,
        dir: c.dir,
        loop: i,
        children: h.jsx(Vr.div, {
            role: "tablist",
            "aria-orientation": c.orientation,
            ...l,
            ref: n
        })
    })
}
);
ky.displayName = Sy;
var Ey = "TabsTrigger"
  , Cy = C.forwardRef( (r, n) => {
    const {__scopeTabs: s, value: i, disabled: l=!1, ...c} = r
      , d = ud(Ey, s)
      , p = wy(s)
      , m = jy(d.baseId, i)
      , y = Ry(d.baseId, i)
      , v = i === d.value;
    return h.jsx(CE, {
        asChild: !0,
        ...p,
        focusable: !l,
        active: v,
        children: h.jsx(Vr.button, {
            type: "button",
            role: "tab",
            "aria-selected": v,
            "aria-controls": y,
            "data-state": v ? "active" : "inactive",
            "data-disabled": l ? "" : void 0,
            disabled: l,
            id: m,
            ...c,
            ref: n,
            onMouseDown: jn(r.onMouseDown, x => {
                !l && x.button === 0 && x.ctrlKey === !1 ? d.onValueChange(i) : x.preventDefault()
            }
            ),
            onKeyDown: jn(r.onKeyDown, x => {
                [" ", "Enter"].includes(x.key) && d.onValueChange(i)
            }
            ),
            onFocus: jn(r.onFocus, () => {
                const x = d.activationMode !== "manual";
                !v && !l && x && d.onValueChange(i)
            }
            )
        })
    })
}
);
Cy.displayName = Ey;
var Ny = "TabsContent"
  , _y = C.forwardRef( (r, n) => {
    const {__scopeTabs: s, value: i, forceMount: l, children: c, ...d} = r
      , p = ud(Ny, s)
      , m = jy(p.baseId, i)
      , y = Ry(p.baseId, i)
      , v = i === p.value
      , x = C.useRef(v);
    return C.useEffect( () => {
        const j = requestAnimationFrame( () => x.current = !1);
        return () => cancelAnimationFrame(j)
    }
    , []),
    h.jsx(xy, {
        present: l || v,
        children: ({present: j}) => h.jsx(Vr.div, {
            "data-state": v ? "active" : "inactive",
            "data-orientation": p.orientation,
            role: "tabpanel",
            "aria-labelledby": m,
            hidden: !j,
            id: y,
            tabIndex: 0,
            ...d,
            ref: n,
            style: {
                ...r.style,
                animationDuration: x.current ? "0s" : void 0
            },
            children: j && c
        })
    })
}
);
_y.displayName = Ny;
function jy(r, n) {
    return `${r}-trigger-${n}`
}
function Ry(r, n) {
    return `${r}-content-${n}`
}
var PE = by
  , Ty = ky
  , Py = Cy
  , Oy = _y;
const OE = PE
  , Ay = C.forwardRef( ({className: r, ...n}, s) => h.jsx(Ty, {
    ref: s,
    className: ot("inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", r),
    ...n
}));
Ay.displayName = Ty.displayName;
const Ea = C.forwardRef( ({className: r, ...n}, s) => h.jsx(Py, {
    ref: s,
    className: ot("inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow", r),
    ...n
}));
Ea.displayName = Py.displayName;
const Ca = C.forwardRef( ({className: r, ...n}, s) => h.jsx(Oy, {
    ref: s,
    className: ot("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", r),
    ...n
}));
Ca.displayName = Oy.displayName;
const AE = {
    Core: {
        name: "SynaPad Core",
        price: 849,
        color: "#612525",
        audience: "School Students",
        screen: '6.8" Matte Screen',
        build: "Durable Plastic",
        storage: "16GB",
        stylus: "Basic Stylus",
        battery: "6-7 Days",
        features: ["Cloud Sync for seamless access", "Basic note-taking tools", "Lightweight and portable design", "Affordable for students", "Eco-friendly paperless solution"],
        specs: {
            Display: '6.8" E-Ink Matte Display, 1440x1080 resolution',
            Processor: "Quad-core 1.8GHz",
            RAM: "2GB",
            Storage: "16GB Internal",
            Battery: "3000mAh, 6-7 days typical use",
            Connectivity: "Wi-Fi 802.11ac, Bluetooth 5.0",
            Dimensions: "178 x 140 x 7mm",
            Weight: "250g",
            Build: "Durable plastic body",
            Colors: "Maroon"
        },
        description: "Perfect for school students who need a reliable, affordable digital writing companion. The SynaPad Core offers all the essentials for effective note-taking without breaking the bank."
    },
    Plus: {
        name: "SynaPad Plus",
        price: 1199,
        color: "#047857",
        audience: "College Students",
        screen: '10" Anti-Glare Screen',
        build: "Vegan Leather",
        storage: "32GB",
        stylus: "Pro Stylus",
        battery: "8-10 Days",
        features: ["AI Handwriting Recognition", "Advanced cloud sync with auto-backup", "Premium vegan leather finish", "Pro-grade stylus with palm rejection", "Extended battery life"],
        specs: {
            Display: '10" E-Ink Anti-Glare Display, 1872x1404 resolution',
            Processor: "Octa-core 2.2GHz",
            RAM: "4GB",
            Storage: "32GB Internal",
            Battery: "4500mAh, 8-10 days typical use",
            Connectivity: "Wi-Fi 802.11ac, Bluetooth 5.0, USB-C",
            Dimensions: "230 x 190 x 6.5mm",
            Weight: "390g",
            Build: "Premium vegan leather body",
            Colors: "Emerald Green"
        },
        description: "Designed for college students who demand more power and sophisticated features. The Plus model combines AI technology with premium materials for an elevated note-taking experience."
    },
    Pro: {
        name: "SynaPad Pro",
        price: 2399,
        color: "#1e3a8a",
        audience: "Professionals",
        screen: '10.3" Matte HD Screen',
        build: "Aluminum Unibody",
        storage: "64GB",
        stylus: "Advanced Pressure-Sensitive Stylus",
        battery: "10-12 Days",
        features: ["AI Voice Dictation with real-time transcription", "Advanced note organization with tags and folders", "Premium aluminum unibody construction", "4096 levels of pressure sensitivity", "Professional-grade security features"],
        specs: {
            Display: '10.3" E-Ink Matte HD Display, 1872x1404 resolution, Frontlight',
            Processor: "Octa-core 2.5GHz",
            RAM: "6GB",
            Storage: "64GB Internal, expandable",
            Battery: "5000mAh, 10-12 days typical use",
            Connectivity: "Wi-Fi 802.11ax, Bluetooth 5.2, USB-C 3.0",
            Dimensions: "245 x 193 x 5.8mm",
            Weight: "420g",
            Build: "Premium aluminum unibody",
            Colors: "Navy Blue"
        },
        description: "The ultimate tool for professionals who need the best in digital note-taking. With advanced AI features and premium build quality, the Pro model sets a new standard for digital writing tablets."
    }
};
function LE() {
    const r = La()
      , s = new URLSearchParams(window.location.search).get("model") || "Core"
      , i = AE[s]
      , [l,c] = C.useState(1)
      , d = () => {
        const p = JSON.parse(localStorage.getItem("synapad_cart") || "[]")
          , m = p.find(y => y.model === s);
        m ? m.quantity += l : p.push({
            model: s,
            name: i.name,
            price: i.price,
            quantity: l,
            color: i.color
        }),
        localStorage.setItem("synapad_cart", JSON.stringify(p)),
        r(Lt("Cart"))
    }
    ;
    return h.jsxs("div", {
        className: "min-h-screen pt-20",
        children: [h.jsx("div", {
            className: "max-w-7xl mx-auto px-6 py-6",
            children: h.jsxs(Ke, {
                variant: "ghost",
                onClick: () => r(Lt("Home")),
                className: "mb-6",
                children: [h.jsx(pa, {
                    className: "w-4 h-4 mr-2"
                }), "Back to Products"]
            })
        }), h.jsx("section", {
            className: "max-w-7xl mx-auto px-6 py-12",
            children: h.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",
                children: [h.jsx("div", {
                    className: "sticky top-24",
                    children: h.jsx("div", {
                        className: "rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex items-center justify-center",
                        children: h.jsx("div", {
                            className: "relative w-full max-w-sm aspect-[3/4] bg-gray-800 rounded-3xl shadow-2xl border-8 border-gray-700 transform hover:scale-105 transition-transform duration-500",
                            children: h.jsx("div", {
                                className: "absolute inset-4 bg-white rounded-2xl flex items-center justify-center",
                                children: h.jsx("div", {
                                    className: "w-32 h-32 rounded-2xl flex items-center justify-center text-6xl font-bold text-white shadow-lg",
                                    style: {
                                        backgroundColor: i.color
                                    },
                                    children: s[0]
                                })
                            })
                        })
                    })
                }), h.jsxs("div", {
                    children: [h.jsx("div", {
                        className: "mb-4",
                        children: h.jsx("span", {
                            className: "inline-block px-4 py-2 rounded-full text-white text-sm font-semibold",
                            style: {
                                backgroundColor: i.color
                            },
                            children: s
                        })
                    }), h.jsx("h1", {
                        className: "text-5xl font-bold text-gray-900 mb-4",
                        children: i.name
                    }), h.jsx("p", {
                        className: "text-xl text-gray-600 mb-6",
                        children: i.description
                    }), h.jsxs("div", {
                        className: "flex items-baseline gap-3 mb-8",
                        children: [h.jsxs("span", {
                            className: "text-5xl font-bold text-gray-900",
                            children: ["AED ", i.price]
                        }), h.jsx("span", {
                            className: "text-green-600 font-semibold",
                            children: "+ Free Shipping"
                        })]
                    }), h.jsxs("div", {
                        className: "grid grid-cols-2 gap-4 mb-8",
                        children: [h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(Mm, {
                                className: "w-6 h-6",
                                style: {
                                    color: i.color
                                }
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Display"
                                }), h.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: i.screen
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(Om, {
                                className: "w-6 h-6",
                                style: {
                                    color: i.color
                                }
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Battery"
                                }), h.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: i.battery
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(Lm, {
                                className: "w-6 h-6",
                                style: {
                                    color: i.color
                                }
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Storage"
                                }), h.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: i.storage
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(Im, {
                                className: "w-6 h-6",
                                style: {
                                    color: i.color
                                }
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Stylus"
                                }), h.jsx("p", {
                                    className: "font-semibold text-gray-900",
                                    children: i.stylus
                                })]
                            })]
                        })]
                    }), h.jsxs("div", {
                        className: "mb-8",
                        children: [h.jsx("label", {
                            className: "block text-sm font-semibold text-gray-700 mb-2",
                            children: "Quantity"
                        }), h.jsxs("div", {
                            className: "flex items-center gap-4",
                            children: [h.jsx(Ke, {
                                variant: "outline",
                                size: "icon",
                                onClick: () => c(Math.max(1, l - 1)),
                                children: "-"
                            }), h.jsx("span", {
                                className: "text-xl font-semibold w-12 text-center",
                                children: l
                            }), h.jsx(Ke, {
                                variant: "outline",
                                size: "icon",
                                onClick: () => c(l + 1),
                                children: "+"
                            })]
                        })]
                    }), h.jsxs(Ke, {
                        size: "lg",
                        className: "w-full text-lg py-6 mb-6",
                        style: {
                            backgroundColor: i.color
                        },
                        onClick: d,
                        children: [h.jsx(ac, {
                            className: "w-5 h-5 mr-2"
                        }), "Add to Cart - AED ", (i.price * l).toLocaleString()]
                    }), h.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(Na, {
                                className: "w-6 h-6 text-green-600"
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: "Free Shipping"
                                }), h.jsx("p", {
                                    className: "text-xs text-gray-600",
                                    children: "3-5 business days"
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(ic, {
                                className: "w-6 h-6 text-gray-600"
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: "2-Year Warranty"
                                }), h.jsx("p", {
                                    className: "text-xs text-gray-600",
                                    children: "Full coverage"
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-center gap-3 p-4 bg-gray-50 rounded-lg",
                            children: [h.jsx(oc, {
                                className: "w-6 h-6 text-gray-600"
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "text-sm font-semibold text-gray-900",
                                    children: "30-Day Returns"
                                }), h.jsx("p", {
                                    className: "text-xs text-gray-600",
                                    children: "No questions asked"
                                })]
                            })]
                        })]
                    })]
                })]
            })
        }), h.jsx("section", {
            className: "max-w-7xl mx-auto px-6 py-12",
            children: h.jsxs(OE, {
                defaultValue: "features",
                className: "w-full",
                children: [h.jsxs(Ay, {
                    className: "grid w-full grid-cols-3 mb-8",
                    children: [h.jsx(Ea, {
                        value: "features",
                        children: "Features"
                    }), h.jsx(Ea, {
                        value: "specs",
                        children: "Specifications"
                    }), h.jsx(Ea, {
                        value: "box",
                        children: "What's in the Box"
                    })]
                }), h.jsx(Ca, {
                    value: "features",
                    children: h.jsxs(tn, {
                        className: "p-8",
                        children: [h.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-6",
                            children: "Key Features"
                        }), h.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: i.features.map( (p, m) => h.jsxs("div", {
                                className: "flex items-start gap-3",
                                children: [h.jsx("div", {
                                    className: "w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1",
                                    style: {
                                        backgroundColor: `${i.color}20`
                                    },
                                    children: h.jsx(Am, {
                                        className: "w-4 h-4",
                                        style: {
                                            color: i.color
                                        }
                                    })
                                }), h.jsx("p", {
                                    className: "text-gray-700",
                                    children: p
                                })]
                            }, m))
                        })]
                    })
                }), h.jsx(Ca, {
                    value: "specs",
                    children: h.jsxs(tn, {
                        className: "p-8",
                        children: [h.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-6",
                            children: "Technical Specifications"
                        }), h.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                            children: Object.entries(i.specs).map( ([p,m]) => h.jsxs("div", {
                                className: "flex justify-between items-center py-3 border-b border-gray-100",
                                children: [h.jsx("span", {
                                    className: "font-semibold text-gray-700",
                                    children: p
                                }), h.jsx("span", {
                                    className: "text-gray-600 text-right",
                                    children: m
                                })]
                            }, p))
                        })]
                    })
                }), h.jsx(Ca, {
                    value: "box",
                    children: h.jsxs(tn, {
                        className: "p-8",
                        children: [h.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-6",
                            children: "Package Contents"
                        }), h.jsx("div", {
                            className: "space-y-4",
                            children: [`SynaPad ${s} Device`, `${i.stylus}`, "USB-C Charging Cable", "Quick Start Guide", "Warranty Card", "Protective Screen Cover", s === "Pro" ? "Premium Leather Case" : "Soft Sleeve Case"].map( (p, m) => h.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [h.jsx(oc, {
                                    className: "w-5 h-5",
                                    style: {
                                        color: i.color
                                    }
                                }), h.jsx("span", {
                                    className: "text-gray-700",
                                    children: p
                                })]
                            }, m))
                        })]
                    })
                })]
            })
        })]
    })
}
const To = C.forwardRef( ({className: r, type: n, ...s}, i) => h.jsx("input", {
    type: n,
    className: ot("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
    ref: i,
    ...s
}));
To.displayName = "Input";
var IE = "Label"
  , Ly = C.forwardRef( (r, n) => h.jsx(Vr.label, {
    ...r,
    ref: n,
    onMouseDown: s => {
        var l;
        s.target.closest("button, input, select, textarea") || ((l = r.onMouseDown) == null || l.call(r, s),
        !s.defaultPrevented && s.detail > 1 && s.preventDefault())
    }
}));
Ly.displayName = IE;
var Iy = Ly;
const ME = Hc("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70")
  , Jn = C.forwardRef( ({className: r, ...n}, s) => h.jsx(Iy, {
    ref: s,
    className: ot(ME(), r),
    ...n
}));
Jn.displayName = Iy.displayName;
const zc = C.forwardRef( ({className: r, ...n}, s) => h.jsx("textarea", {
    className: ot("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", r),
    ref: s,
    ...n
}));
zc.displayName = "Textarea";
function FE(r) {
    if (typeof document > "u")
        return;
    let n = document.head || document.getElementsByTagName("head")[0]
      , s = document.createElement("style");
    s.type = "text/css",
    n.appendChild(s),
    s.styleSheet ? s.styleSheet.cssText = r : s.appendChild(document.createTextNode(r))
}
Array(12).fill(0);
let Bc = 1;
class DE {
    constructor() {
        this.subscribe = n => (this.subscribers.push(n),
        () => {
            const s = this.subscribers.indexOf(n);
            this.subscribers.splice(s, 1)
        }
        ),
        this.publish = n => {
            this.subscribers.forEach(s => s(n))
        }
        ,
        this.addToast = n => {
            this.publish(n),
            this.toasts = [...this.toasts, n]
        }
        ,
        this.create = n => {
            var s;
            const {message: i, ...l} = n
              , c = typeof (n == null ? void 0 : n.id) == "number" || ((s = n.id) == null ? void 0 : s.length) > 0 ? n.id : Bc++
              , d = this.toasts.find(m => m.id === c)
              , p = n.dismissible === void 0 ? !0 : n.dismissible;
            return this.dismissedToasts.has(c) && this.dismissedToasts.delete(c),
            d ? this.toasts = this.toasts.map(m => m.id === c ? (this.publish({
                ...m,
                ...n,
                id: c,
                title: i
            }),
            {
                ...m,
                ...n,
                id: c,
                dismissible: p,
                title: i
            }) : m) : this.addToast({
                title: i,
                ...l,
                dismissible: p,
                id: c
            }),
            c
        }
        ,
        this.dismiss = n => (n ? (this.dismissedToasts.add(n),
        requestAnimationFrame( () => this.subscribers.forEach(s => s({
            id: n,
            dismiss: !0
        })))) : this.toasts.forEach(s => {
            this.subscribers.forEach(i => i({
                id: s.id,
                dismiss: !0
            }))
        }
        ),
        n),
        this.message = (n, s) => this.create({
            ...s,
            message: n
        }),
        this.error = (n, s) => this.create({
            ...s,
            message: n,
            type: "error"
        }),
        this.success = (n, s) => this.create({
            ...s,
            type: "success",
            message: n
        }),
        this.info = (n, s) => this.create({
            ...s,
            type: "info",
            message: n
        }),
        this.warning = (n, s) => this.create({
            ...s,
            type: "warning",
            message: n
        }),
        this.loading = (n, s) => this.create({
            ...s,
            type: "loading",
            message: n
        }),
        this.promise = (n, s) => {
            if (!s)
                return;
            let i;
            s.loading !== void 0 && (i = this.create({
                ...s,
                promise: n,
                type: "loading",
                message: s.loading,
                description: typeof s.description != "function" ? s.description : void 0
            }));
            const l = Promise.resolve(n instanceof Function ? n() : n);
            let c = i !== void 0, d;
            const p = l.then(async y => {
                if (d = ["resolve", y],
                pt.isValidElement(y))
                    c = !1,
                    this.create({
                        id: i,
                        type: "default",
                        message: y
                    });
                else if (zE(y) && !y.ok) {
                    c = !1;
                    const x = typeof s.error == "function" ? await s.error(`HTTP error! status: ${y.status}`) : s.error
                      , j = typeof s.description == "function" ? await s.description(`HTTP error! status: ${y.status}`) : s.description
                      , k = typeof x == "object" && !pt.isValidElement(x) ? x : {
                        message: x
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: j,
                        ...k
                    })
                } else if (y instanceof Error) {
                    c = !1;
                    const x = typeof s.error == "function" ? await s.error(y) : s.error
                      , j = typeof s.description == "function" ? await s.description(y) : s.description
                      , k = typeof x == "object" && !pt.isValidElement(x) ? x : {
                        message: x
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: j,
                        ...k
                    })
                } else if (s.success !== void 0) {
                    c = !1;
                    const x = typeof s.success == "function" ? await s.success(y) : s.success
                      , j = typeof s.description == "function" ? await s.description(y) : s.description
                      , k = typeof x == "object" && !pt.isValidElement(x) ? x : {
                        message: x
                    };
                    this.create({
                        id: i,
                        type: "success",
                        description: j,
                        ...k
                    })
                }
            }
            ).catch(async y => {
                if (d = ["reject", y],
                s.error !== void 0) {
                    c = !1;
                    const v = typeof s.error == "function" ? await s.error(y) : s.error
                      , x = typeof s.description == "function" ? await s.description(y) : s.description
                      , T = typeof v == "object" && !pt.isValidElement(v) ? v : {
                        message: v
                    };
                    this.create({
                        id: i,
                        type: "error",
                        description: x,
                        ...T
                    })
                }
            }
            ).finally( () => {
                c && (this.dismiss(i),
                i = void 0),
                s.finally == null || s.finally.call(s)
            }
            )
              , m = () => new Promise( (y, v) => p.then( () => d[0] === "reject" ? v(d[1]) : y(d[1])).catch(v));
            return typeof i != "string" && typeof i != "number" ? {
                unwrap: m
            } : Object.assign(i, {
                unwrap: m
            })
        }
        ,
        this.custom = (n, s) => {
            const i = (s == null ? void 0 : s.id) || Bc++;
            return this.create({
                jsx: n(i),
                id: i,
                ...s
            }),
            i
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(n => !this.dismissedToasts.has(n.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const Bt = new DE
  , UE = (r, n) => {
    const s = (n == null ? void 0 : n.id) || Bc++;
    return Bt.addToast({
        title: r,
        ...n,
        id: s
    }),
    s
}
  , zE = r => r && typeof r == "object" && "ok"in r && typeof r.ok == "boolean" && "status"in r && typeof r.status == "number"
  , BE = UE
  , $E = () => Bt.toasts
  , VE = () => Bt.getActiveToasts()
  , rc = Object.assign(BE, {
    success: Bt.success,
    info: Bt.info,
    warning: Bt.warning,
    error: Bt.error,
    custom: Bt.custom,
    message: Bt.message,
    promise: Bt.promise,
    dismiss: Bt.dismiss,
    loading: Bt.loading
}, {
    getHistory: $E,
    getToasts: VE
});
FE("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function qE() {
    const r = La()
      , [n,s] = C.useState([])
      , [i,l] = C.useState(!1)
      , [c,d] = C.useState({
        customer_name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        emirate: "Dubai",
        order_notes: ""
    })
      , [p,m] = C.useState(!1);
    C.useEffect( () => {
        const S = JSON.parse(localStorage.getItem("synapad_cart") || "[]");
        s(S)
    }
    , []);
    const y = (S, w) => {
        if (w < 1)
            return;
        const M = [...n];
        M[S].quantity = w,
        s(M),
        localStorage.setItem("synapad_cart", JSON.stringify(M))
    }
      , v = S => {
        const w = n.filter( (M, H) => H !== S);
        s(w),
        localStorage.setItem("synapad_cart", JSON.stringify(w)),
        rc.success("Item removed from cart")
    }
      , x = n.reduce( (S, w) => S + w.price * w.quantity, 0)
      , T = x + 0
      , k = async S => {
        S.preventDefault(),
        m(!0);
        try {
            for (const w of n)
                await _r.entities.Order.create({
                    ...c,
                    product_model: w.model,
                    quantity: w.quantity,
                    total_amount: w.price * w.quantity,
                    status: "pending"
                });
            localStorage.removeItem("synapad_cart"),
            rc.success("Order placed successfully!"),
            r(Lt("OrderConfirmation"))
        } catch (w) {
            rc.error("Failed to place order. Please try again."),
            console.error(w)
        } finally {
            m(!1)
        }
    }
    ;
    return n.length === 0 && !i ? h.jsx("div", {
        className: "min-h-screen pt-20 flex items-center justify-center",
        children: h.jsxs("div", {
            className: "text-center px-6",
            children: [h.jsx(vx, {
                className: "w-24 h-24 text-gray-300 mx-auto mb-6"
            }), h.jsx("h2", {
                className: "text-3xl font-bold text-gray-900 mb-4",
                children: "Your Cart is Empty"
            }), h.jsx("p", {
                className: "text-gray-600 mb-8",
                children: "Looks like you haven't added any items to your cart yet."
            }), h.jsxs(Ke, {
                size: "lg",
                onClick: () => r(Lt("Home")),
                children: [h.jsx(pa, {
                    className: "w-5 h-5 mr-2"
                }), "Continue Shopping"]
            })]
        })
    }) : i ? h.jsx("div", {
        className: "min-h-screen pt-20 bg-gray-50",
        children: h.jsxs("div", {
            className: "max-w-4xl mx-auto px-6 py-12",
            children: [h.jsxs(Ke, {
                variant: "ghost",
                onClick: () => l(!1),
                className: "mb-6",
                children: [h.jsx(pa, {
                    className: "w-4 h-4 mr-2"
                }), "Back to Cart"]
            }), h.jsx("h1", {
                className: "text-4xl font-bold text-gray-900 mb-8",
                children: "Checkout"
            }), h.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [h.jsx("div", {
                    className: "lg:col-span-2",
                    children: h.jsx(tn, {
                        className: "p-6",
                        children: h.jsxs("form", {
                            onSubmit: k,
                            className: "space-y-6",
                            children: [h.jsxs("div", {
                                children: [h.jsx("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-4",
                                    children: "Contact Information"
                                }), h.jsxs("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                    children: [h.jsxs("div", {
                                        children: [h.jsx(Jn, {
                                            htmlFor: "name",
                                            children: "Full Name *"
                                        }), h.jsx(To, {
                                            id: "name",
                                            required: !0,
                                            value: c.customer_name,
                                            onChange: S => d({
                                                ...c,
                                                customer_name: S.target.value
                                            })
                                        })]
                                    }), h.jsxs("div", {
                                        children: [h.jsx(Jn, {
                                            htmlFor: "email",
                                            children: "Email *"
                                        }), h.jsx(To, {
                                            id: "email",
                                            type: "email",
                                            required: !0,
                                            value: c.email,
                                            onChange: S => d({
                                                ...c,
                                                email: S.target.value
                                            })
                                        })]
                                    }), h.jsxs("div", {
                                        className: "md:col-span-2",
                                        children: [h.jsx(Jn, {
                                            htmlFor: "phone",
                                            children: "Phone Number *"
                                        }), h.jsx(To, {
                                            id: "phone",
                                            type: "tel",
                                            required: !0,
                                            value: c.phone,
                                            onChange: S => d({
                                                ...c,
                                                phone: S.target.value
                                            })
                                        })]
                                    })]
                                })]
                            }), h.jsxs("div", {
                                children: [h.jsx("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-4",
                                    children: "Shipping Address"
                                }), h.jsxs("div", {
                                    className: "space-y-4",
                                    children: [h.jsxs("div", {
                                        children: [h.jsx(Jn, {
                                            htmlFor: "address",
                                            children: "Street Address *"
                                        }), h.jsx(zc, {
                                            id: "address",
                                            required: !0,
                                            value: c.address,
                                            onChange: S => d({
                                                ...c,
                                                address: S.target.value
                                            })
                                        })]
                                    }), h.jsxs("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [h.jsxs("div", {
                                            children: [h.jsx(Jn, {
                                                htmlFor: "city",
                                                children: "City *"
                                            }), h.jsx(To, {
                                                id: "city",
                                                required: !0,
                                                value: c.city,
                                                onChange: S => d({
                                                    ...c,
                                                    city: S.target.value
                                                })
                                            })]
                                        }), h.jsxs("div", {
                                            children: [h.jsx(Jn, {
                                                htmlFor: "emirate",
                                                children: "Emirate *"
                                            }), h.jsxs("select", {
                                                id: "emirate",
                                                className: "w-full px-3 py-2 border border-gray-300 rounded-md",
                                                value: c.emirate,
                                                onChange: S => d({
                                                    ...c,
                                                    emirate: S.target.value
                                                }),
                                                children: [h.jsx("option", {
                                                    children: "Dubai"
                                                }), h.jsx("option", {
                                                    children: "Abu Dhabi"
                                                }), h.jsx("option", {
                                                    children: "Sharjah"
                                                }), h.jsx("option", {
                                                    children: "Ajman"
                                                }), h.jsx("option", {
                                                    children: "Ras Al Khaimah"
                                                }), h.jsx("option", {
                                                    children: "Fujairah"
                                                }), h.jsx("option", {
                                                    children: "Umm Al Quwain"
                                                })]
                                            })]
                                        })]
                                    }), h.jsxs("div", {
                                        children: [h.jsx(Jn, {
                                            htmlFor: "notes",
                                            children: "Order Notes (Optional)"
                                        }), h.jsx(zc, {
                                            id: "notes",
                                            placeholder: "Any special instructions for your order...",
                                            value: c.order_notes,
                                            onChange: S => d({
                                                ...c,
                                                order_notes: S.target.value
                                            })
                                        })]
                                    })]
                                })]
                            }), h.jsx(Ke, {
                                type: "submit",
                                size: "lg",
                                className: "w-full bg-gray-900 hover:bg-gray-800",
                                disabled: p,
                                children: p ? "Processing..." : `Place Order - AED ${T.toLocaleString()}`
                            })]
                        })
                    })
                }), h.jsx("div", {
                    children: h.jsxs(tn, {
                        className: "p-6 sticky top-24",
                        children: [h.jsx("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-4",
                            children: "Order Summary"
                        }), h.jsx("div", {
                            className: "space-y-4 mb-6",
                            children: n.map( (S, w) => h.jsxs("div", {
                                className: "flex justify-between text-sm",
                                children: [h.jsxs("span", {
                                    className: "text-gray-600",
                                    children: [S.name, " x ", S.quantity]
                                }), h.jsxs("span", {
                                    className: "font-semibold",
                                    children: ["AED ", (S.price * S.quantity).toLocaleString()]
                                })]
                            }, w))
                        }), h.jsxs("div", {
                            className: "border-t pt-4 space-y-2 mb-6",
                            children: [h.jsxs("div", {
                                className: "flex justify-between text-sm",
                                children: [h.jsx("span", {
                                    className: "text-gray-600",
                                    children: "Subtotal"
                                }), h.jsxs("span", {
                                    className: "font-semibold",
                                    children: ["AED ", x.toLocaleString()]
                                })]
                            }), h.jsxs("div", {
                                className: "flex justify-between text-sm",
                                children: [h.jsx("span", {
                                    className: "text-gray-600",
                                    children: "Shipping"
                                }), h.jsx("span", {
                                    className: "font-semibold text-green-600",
                                    children: "FREE"
                                })]
                            }), h.jsxs("div", {
                                className: "flex justify-between text-lg font-bold pt-2 border-t",
                                children: [h.jsx("span", {
                                    children: "Total"
                                }), h.jsxs("span", {
                                    children: ["AED ", T.toLocaleString()]
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "space-y-3 text-sm text-gray-600",
                            children: [h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx(Na, {
                                    className: "w-4 h-4 text-green-600"
                                }), h.jsx("span", {
                                    children: "Free shipping • 3-5 business days"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx(ic, {
                                    className: "w-4 h-4"
                                }), h.jsx("span", {
                                    children: "2-year warranty included"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx(sc, {
                                    className: "w-4 h-4"
                                }), h.jsx("span", {
                                    children: "30-day money-back guarantee"
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    }) : h.jsx("div", {
        className: "min-h-screen pt-20 bg-gray-50",
        children: h.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 py-12",
            children: [h.jsxs("div", {
                className: "flex items-center justify-between mb-8",
                children: [h.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900",
                    children: "Shopping Cart"
                }), h.jsxs(Ke, {
                    variant: "ghost",
                    onClick: () => r(Lt("Home")),
                    children: [h.jsx(pa, {
                        className: "w-4 h-4 mr-2"
                    }), "Continue Shopping"]
                })]
            }), h.jsxs("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [h.jsx("div", {
                    className: "lg:col-span-2 space-y-4",
                    children: n.map( (S, w) => h.jsx(tn, {
                        className: "p-6",
                        children: h.jsxs("div", {
                            className: "flex gap-6",
                            children: [h.jsx("div", {
                                className: "w-32 h-32 rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center",
                                children: h.jsx("div", {
                                    className: "w-20 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white",
                                    style: {
                                        backgroundColor: S.color
                                    },
                                    children: S.model[0]
                                })
                            }), h.jsxs("div", {
                                className: "flex-1",
                                children: [h.jsx("h3", {
                                    className: "text-xl font-semibold text-gray-900 mb-2",
                                    children: S.name
                                }), h.jsxs("p", {
                                    className: "text-gray-600 mb-4",
                                    children: ["AED ", S.price.toLocaleString(), " each"]
                                }), h.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [h.jsxs("div", {
                                        className: "flex items-center gap-2",
                                        children: [h.jsx(Ke, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: () => y(w, S.quantity - 1),
                                            children: "-"
                                        }), h.jsx("span", {
                                            className: "w-12 text-center font-semibold",
                                            children: S.quantity
                                        }), h.jsx(Ke, {
                                            variant: "outline",
                                            size: "sm",
                                            onClick: () => y(w, S.quantity + 1),
                                            children: "+"
                                        })]
                                    }), h.jsxs(Ke, {
                                        variant: "ghost",
                                        size: "sm",
                                        onClick: () => v(w),
                                        className: "text-red-600 hover:text-red-700 hover:bg-red-50",
                                        children: [h.jsx(Nx, {
                                            className: "w-4 h-4 mr-2"
                                        }), "Remove"]
                                    })]
                                })]
                            }), h.jsx("div", {
                                className: "text-right",
                                children: h.jsxs("p", {
                                    className: "text-2xl font-bold text-gray-900",
                                    children: ["AED ", (S.price * S.quantity).toLocaleString()]
                                })
                            })]
                        })
                    }, w))
                }), h.jsx("div", {
                    children: h.jsxs(tn, {
                        className: "p-6 sticky top-24",
                        children: [h.jsx("h3", {
                            className: "text-xl font-semibold text-gray-900 mb-6",
                            children: "Order Summary"
                        }), h.jsxs("div", {
                            className: "space-y-4 mb-6",
                            children: [h.jsxs("div", {
                                className: "flex justify-between",
                                children: [h.jsx("span", {
                                    className: "text-gray-600",
                                    children: "Subtotal"
                                }), h.jsxs("span", {
                                    className: "font-semibold",
                                    children: ["AED ", x.toLocaleString()]
                                })]
                            }), h.jsxs("div", {
                                className: "flex justify-between",
                                children: [h.jsx("span", {
                                    className: "text-gray-600",
                                    children: "Shipping"
                                }), h.jsx("span", {
                                    className: "font-semibold text-green-600",
                                    children: "FREE"
                                })]
                            }), h.jsx("div", {
                                className: "border-t pt-4",
                                children: h.jsxs("div", {
                                    className: "flex justify-between text-lg font-bold",
                                    children: [h.jsx("span", {
                                        children: "Total"
                                    }), h.jsxs("span", {
                                        children: ["AED ", T.toLocaleString()]
                                    })]
                                })
                            })]
                        }), h.jsx(Ke, {
                            size: "lg",
                            className: "w-full bg-gray-900 hover:bg-gray-800 mb-4",
                            onClick: () => l(!0),
                            children: "Proceed to Checkout"
                        }), h.jsxs("div", {
                            className: "space-y-3 text-sm text-gray-600",
                            children: [h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx(Na, {
                                    className: "w-4 h-4 text-green-600"
                                }), h.jsx("span", {
                                    children: "Free shipping on all orders"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx(ic, {
                                    className: "w-4 h-4"
                                }), h.jsx("span", {
                                    children: "2-year warranty on all products"
                                })]
                            }), h.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [h.jsx(sc, {
                                    className: "w-4 h-4"
                                }), h.jsx("span", {
                                    children: "30-day money-back guarantee"
                                })]
                            })]
                        })]
                    })
                })]
            })]
        })
    })
}
function HE() {
    const r = La();
    return h.jsx("div", {
        className: "min-h-screen pt-20 bg-gray-50 flex items-center justify-center",
        children: h.jsxs("div", {
            className: "max-w-2xl mx-auto px-6 py-12",
            children: [h.jsxs(tn, {
                className: "p-8 text-center",
                children: [h.jsx("div", {
                    className: "w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: h.jsx(sc, {
                        className: "w-12 h-12 text-green-600"
                    })
                }), h.jsx("h1", {
                    className: "text-4xl font-bold text-gray-900 mb-4",
                    children: "Order Confirmed!"
                }), h.jsx("p", {
                    className: "text-xl text-gray-600 mb-8",
                    children: "Thank you for your purchase. Your order has been received and is being processed."
                }), h.jsxs("div", {
                    className: "bg-gray-50 rounded-lg p-6 mb-8",
                    children: [h.jsx("h3", {
                        className: "font-semibold text-gray-900 mb-4",
                        children: "What happens next?"
                    }), h.jsxs("div", {
                        className: "space-y-4 text-left",
                        children: [h.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [h.jsx(dx, {
                                className: "w-5 h-5 text-blue-600 mt-1"
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "font-medium text-gray-900",
                                    children: "Order Confirmation"
                                }), h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "You'll receive an email confirmation shortly with your order details."
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [h.jsx(oc, {
                                className: "w-5 h-5 text-purple-600 mt-1"
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "font-medium text-gray-900",
                                    children: "Order Processing"
                                }), h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "We'll prepare your SynaPad for shipment within 24 hours."
                                })]
                            })]
                        }), h.jsxs("div", {
                            className: "flex items-start gap-3",
                            children: [h.jsx(Na, {
                                className: "w-5 h-5 text-green-600 mt-1"
                            }), h.jsxs("div", {
                                children: [h.jsx("p", {
                                    className: "font-medium text-gray-900",
                                    children: "Free Delivery"
                                }), h.jsx("p", {
                                    className: "text-sm text-gray-600",
                                    children: "Your order will arrive in 3-5 business days with free shipping."
                                })]
                            })]
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "space-y-4",
                    children: [h.jsx(Ke, {
                        size: "lg",
                        className: "w-full bg-gray-900 hover:bg-gray-800",
                        onClick: () => r(Lt("Home")),
                        children: "Continue Shopping"
                    }), h.jsx("p", {
                        className: "text-sm text-gray-500",
                        children: "Need help? Contact us at support@synapad.com"
                    })]
                })]
            }), h.jsxs("div", {
                className: "mt-8 grid grid-cols-3 gap-4 text-center",
                children: [h.jsxs("div", {
                    className: "bg-white rounded-lg p-4",
                    children: [h.jsx("p", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "2 Years"
                    }), h.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: "Warranty"
                    })]
                }), h.jsxs("div", {
                    className: "bg-white rounded-lg p-4",
                    children: [h.jsx("p", {
                        className: "text-2xl font-bold text-gray-900",
                        children: "30 Days"
                    }), h.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: "Returns"
                    })]
                }), h.jsxs("div", {
                    className: "bg-white rounded-lg p-4",
                    children: [h.jsx("p", {
                        className: "text-2xl font-bold text-green-600",
                        children: "FREE"
                    }), h.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: "Shipping"
                    })]
                })]
            })]
        })
    })
}
function WE({children: r, currentPageName: n}) {
    $r();
    const [s,i] = pt.useState(!1)
      , [l,c] = pt.useState(!1);
    pt.useEffect( () => {
        const m = () => {
            c(window.scrollY > 20)
        }
        ;
        return window.addEventListener("scroll", m),
        () => window.removeEventListener("scroll", m)
    }
    , []);
    const d = [{
        name: "Products",
        href: Lt("Home") + "#products"
    }, {
        name: "Compare",
        href: Lt("Home") + "#compare"
    }, {
        name: "Testimonials",
        href: Lt("Home") + "#testimonials"
    }]
      , p = n === "Home";
    return h.jsxs("div", {
        className: "min-h-screen bg-[#FAFAF9]",
        children: [h.jsx("style", {
            children: `
        :root {
          --synapad-core: #612525;
          --synapad-plus: #047857;
          --synapad-pro: #1e3a8a;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `
        }), !p && h.jsx("header", {
            className: `fixed top-0 w-full z-50 transition-all duration-300 ${l ? "bg-white/95 backdrop-blur-lg shadow-sm" : "bg-white/95 backdrop-blur-lg"}`,
            children: h.jsxs("nav", {
                className: "max-w-7xl mx-auto px-6 lg:px-8",
                children: [h.jsxs("div", {
                    className: "flex justify-between items-center h-20",
                    children: [h.jsx(ga, {
                        to: Lt("Home"),
                        className: "flex items-center",
                        children: h.jsx("img", {
                            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png",
                            alt: "SynaPad",
                            className: "h-16 md:h-20 w-auto"
                        })
                    }), h.jsxs("div", {
                        className: "hidden md:flex items-center gap-8",
                        children: [d.map(m => h.jsx("a", {
                            href: m.href,
                            className: "text-gray-700 hover:text-gray-900 font-medium transition-colors",
                            children: m.name
                        }, m.name)), h.jsx(ga, {
                            to: Lt("Cart"),
                            children: h.jsx(Ke, {
                                variant: "ghost",
                                size: "icon",
                                className: "relative",
                                children: h.jsx(ac, {
                                    className: "w-5 h-5"
                                })
                            })
                        })]
                    }), h.jsx("button", {
                        className: "md:hidden p-2",
                        onClick: () => i(!s),
                        children: s ? h.jsx(Fm, {
                            className: "w-6 h-6"
                        }) : h.jsx(hx, {
                            className: "w-6 h-6"
                        })
                    })]
                }), s && h.jsxs("div", {
                    className: "md:hidden py-4 border-t",
                    children: [d.map(m => h.jsx("a", {
                        href: m.href,
                        className: "block py-3 text-gray-700 hover:text-gray-900 font-medium",
                        onClick: () => i(!1),
                        children: m.name
                    }, m.name)), h.jsx(ga, {
                        to: Lt("Cart"),
                        className: "block py-3",
                        children: h.jsxs(Ke, {
                            variant: "outline",
                            className: "w-full",
                            children: [h.jsx(ac, {
                                className: "w-5 h-5 mr-2"
                            }), "View Cart"]
                        })
                    })]
                })]
            })
        }), h.jsx("main", {
            children: r
        }), h.jsx("footer", {
            className: "bg-gray-900 text-gray-300 mt-20",
            children: h.jsxs("div", {
                className: "max-w-7xl mx-auto px-6 lg:px-8 py-12",
                children: [h.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-4 gap-8",
                    children: [h.jsxs("div", {
                        children: [h.jsx("img", {
                            src: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/691614e9644b2e21c1b0aadb/958eee848_synapadlogo.png",
                            alt: "SynaPad",
                            className: "h-16 w-auto mb-4 brightness-0 invert"
                        }), h.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: "Premium digital writing tablets for students and professionals."
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            className: "font-semibold text-white mb-4",
                            children: "Products"
                        }), h.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "SynaPad Core"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "SynaPad Plus"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "SynaPad Pro"
                                })
                            })]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            className: "font-semibold text-white mb-4",
                            children: "Support"
                        }), h.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Contact Us"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Warranty Info"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Shipping"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Returns"
                                })
                            })]
                        })]
                    }), h.jsxs("div", {
                        children: [h.jsx("h3", {
                            className: "font-semibold text-white mb-4",
                            children: "Connect"
                        }), h.jsxs("ul", {
                            className: "space-y-2 text-sm",
                            children: [h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Instagram"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "Twitter"
                                })
                            }), h.jsx("li", {
                                children: h.jsx("a", {
                                    href: "#",
                                    className: "hover:text-white transition-colors",
                                    children: "LinkedIn"
                                })
                            })]
                        })]
                    })]
                }), h.jsxs("div", {
                    className: "border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500",
                    children: [h.jsx("p", {
                        children: "© 2025 SynaPad. This is a student-made concept project."
                    }), h.jsx("p", {
                        className: "mt-2",
                        children: "Designed with ❤️ for educational purposes."
                    })]
                })]
            })
        })]
    })
}
const QE = {
    Home: rE,
    ProductDetail: LE,
    Cart: qE,
    OrderConfirmation: HE
}
  , My = {
    mainPage: "Home",
    Pages: QE,
    Layout: WE
};
function KE() {
    const r = $r()
      , {isAuthenticated: n} = ly()
      , {Pages: s, mainPage: i} = My
      , l = i;
    return C.useEffect( () => {
        var c;
        (c = window.parent) == null || c.postMessage({
            type: "app_changed_url",
            url: window.location.href
        }, "*")
    }
    , [r]),
    C.useEffect( () => {
        const c = r.pathname;
        let d;
        if (c === "/" || c === "")
            d = l;
        else {
            const p = c.replace(/^\//, "").split("/")[0];
            d = Object.keys(s).find(v => v.toLowerCase() === p.toLowerCase()) || null
        }
        n && d && _r.appLogs.logUserInApp(d).catch( () => {}
        )
    }
    , [r, n, s, l]),
    null
}
function GE({}) {
    var l;
    const n = $r().pathname.substring(1)
      , {data: s, isFetched: i} = Yw({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                return {
                    user: await _r.auth.me(),
                    isAuthenticated: !0
                }
            } catch {
                return {
                    user: null,
                    isAuthenticated: !1
                }
            }
        }
    });
    return h.jsx("div", {
        className: "min-h-screen flex items-center justify-center p-6 bg-slate-50",
        children: h.jsx("div", {
            className: "max-w-md w-full",
            children: h.jsxs("div", {
                className: "text-center space-y-6",
                children: [h.jsxs("div", {
                    className: "space-y-2",
                    children: [h.jsx("h1", {
                        className: "text-7xl font-light text-slate-300",
                        children: "404"
                    }), h.jsx("div", {
                        className: "h-0.5 w-16 bg-slate-200 mx-auto"
                    })]
                }), h.jsxs("div", {
                    className: "space-y-3",
                    children: [h.jsx("h2", {
                        className: "text-2xl font-medium text-slate-800",
                        children: "Page Not Found"
                    }), h.jsxs("p", {
                        className: "text-slate-600 leading-relaxed",
                        children: ["The page ", h.jsxs("span", {
                            className: "font-medium text-slate-700",
                            children: ['"', n, '"']
                        }), " could not be found in this application."]
                    })]
                }), i && s.isAuthenticated && ((l = s.user) == null ? void 0 : l.role) === "admin" && h.jsx("div", {
                    className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200",
                    children: h.jsxs("div", {
                        className: "flex items-start space-x-3",
                        children: [h.jsx("div", {
                            className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5",
                            children: h.jsx("div", {
                                className: "w-2 h-2 rounded-full bg-orange-400"
                            })
                        }), h.jsxs("div", {
                            className: "text-left space-y-1",
                            children: [h.jsx("p", {
                                className: "text-sm font-medium text-slate-700",
                                children: "Admin Note"
                            }), h.jsx("p", {
                                className: "text-sm text-slate-600 leading-relaxed",
                                children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat."
                            })]
                        })]
                    })
                }), h.jsx("div", {
                    className: "pt-6",
                    children: h.jsxs("button", {
                        onClick: () => window.location.href = "/",
                        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
                        children: [h.jsx("svg", {
                            className: "w-4 h-4 mr-2",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: h.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            })
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
const YE = () => h.jsx("div", {
    className: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-slate-50",
    children: h.jsx("div", {
        className: "max-w-md w-full p-8 bg-white rounded-lg shadow-lg border border-slate-100",
        children: h.jsxs("div", {
            className: "text-center",
            children: [h.jsx("div", {
                className: "inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-orange-100",
                children: h.jsx("svg", {
                    className: "w-8 h-8 text-orange-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: h.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    })
                })
            }), h.jsx("h1", {
                className: "text-3xl font-bold text-slate-900 mb-4",
                children: "Access Restricted"
            }), h.jsx("p", {
                className: "text-slate-600 mb-8",
                children: "You are not registered to use this application. Please contact the app administrator to request access."
            }), h.jsxs("div", {
                className: "p-4 bg-slate-50 rounded-md text-sm text-slate-600",
                children: [h.jsx("p", {
                    children: "If you believe this is an error, you can:"
                }), h.jsxs("ul", {
                    className: "list-disc list-inside mt-2 space-y-1",
                    children: [h.jsx("li", {
                        children: "Verify you are logged in with the correct account"
                    }), h.jsx("li", {
                        children: "Contact the app administrator for access"
                    }), h.jsx("li", {
                        children: "Try logging out and back in again"
                    })]
                })]
            })]
        })
    })
})
  , {Pages: Fy, Layout: mm, mainPage: JE} = My
  , Dy = JE
  , XE = Fy[Dy]
  , gm = ({children: r, currentPageName: n}) => mm ? h.jsx(mm, {
    currentPageName: n,
    children: r
}) : h.jsx(h.Fragment, {
    children: r
})
  , ZE = () => {
    const {isLoadingAuth: r, isLoadingPublicSettings: n, authError: s, isAuthenticated: i, navigateToLogin: l} = ly();
    if (n || r)
        return h.jsx("div", {
            className: "fixed inset-0 flex items-center justify-center",
            children: h.jsx("div", {
                className: "w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"
            })
        });
    if (s) {
        if (s.type === "user_not_registered")
            return h.jsx(YE, {});
        if (s.type === "auth_required")
            return l(),
            null
    }
    return h.jsxs(V1, {
        children: [h.jsx(ma, {
            path: "/",
            element: h.jsx(gm, {
                currentPageName: Dy,
                children: h.jsx(XE, {})
            })
        }), Object.entries(Fy).map( ([c,d]) => h.jsx(ma, {
            path: `/${c}`,
            element: h.jsx(gm, {
                currentPageName: c,
                children: h.jsx(d, {})
            })
        }, c)), h.jsx(ma, {
            path: "*",
            element: h.jsx(GE, {})
        })]
    })
}
;
function e2() {
    return h.jsx(Vk, {
        children: h.jsxs(Dw, {
            client: Jw,
            children: [h.jsxs(Y1, {
                children: [h.jsx(KE, {}), h.jsx(ZE, {})]
            }), h.jsx(fw, {}), h.jsx(Xw, {})]
        })
    })
}
q0.createRoot(document.getElementById("root")).render(h.jsx(e2, {}));
