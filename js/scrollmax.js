/**
 *  _______ _______  ______  _____                _______ _     _
 *  |______ |       |_____/ |     | |      |      |_____|  \___/ 
 *  ______| |_____  |    \_ |_____| |_____ |_____ |     | _/   \_
 *
 *  Parallax Scrolling Library
 *  http://iprodev.github.io/Scrollax.js
 *
 *  @version:  1.0.0
 *  @released: July 21, 2015
 *
 *  @author:   iProDev (Hemn Chawroka)
 *             http://iprodev.com/
 *
 *  Licensed under the MIT license.
 *  http://opensource.org/licenses/MIT
 * 
 */
(function(e) { "function" === typeof define && define.amd ? define(["jquery"], e) : "undefined" !== typeof exports ? module.exports = e(require("jquery")) : e(jQuery) })(function(e) {
    function W(a) { if (console && console.warn) console.warn("Scrollax: " + a);
        else throw "Scrollax: " + a; }

    function ka(a) {
        var g = !!("pageYOffset" in a);
        return {
            width: g ? window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth : a.offsetWidth,
            height: g ? window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight : a.offsetHeight,
            left: a[g ? "pageXOffset" : "scrollLeft"],
            top: a[g ? "pageYOffset" : "scrollTop"]
        }
    }

    function X(a) { return (a = a.data("scrollax")) && eval("({" + a + "})") || {} }

    function Y(a) { var g, c; return !!(a && "object" === typeof a && "object" === typeof a.window && a.window == a && a.setTimeout && a.alert && (g = a.document) && "object" === typeof g && (c = g.defaultView || g.parentWindow) && "object" === typeof c && c == a) }
    var v = Array.prototype,
        C = v.push,
        Z = v.splice,
        aa = Object.prototype.hasOwnProperty,
        la = /[-+]?\d+(\.\d+)?/g,
        ma = "translateX translateY rotate rotateX rotateY rotateZ skewX skewY scaleX scaleY".split(" "),
        ba = e(window),
        ca = e(document.body),
        da, ea, L, M, N, q = function(a, g, c) {
            function k() { O = fa ? ca.find(ga) : P.find(ga);
                x.length = 0;
                r = !!t.horizontal;
                O.each(na);
                d();
                t.performanceTrick && (F = fa ? ca : P);
                u("load"); return f }

            function l() { G && (G = clearTimeout(G));
                G = setTimeout(function() { f.reload() }) }

            function d() {
                var ha = x.length;
                t.performanceTrick && F && (clearTimeout(ia), Q || (F.addClass("scrollax-performance"), Q = !0), ia = setTimeout(function() { F.removeClass("scrollax-performance");
                    Q = !1 }, 100));
                if (ha) {
                    H = ka(a);
                    for (var c = 0; c < ha; c++) I = x[c],
                        y = L(I.element, a), 0 > y[r ? "right" : "bottom"] || y[r ? "left" : "top"] > H[r ? "width" : "height"] || (ja = I.options, R = ja.offset || t.offset || 0, J = y[r ? "right" : "bottom"], z = y[r ? "width" : "height"], A = (z - J + R) / z, 0 > A && (J = y[r ? "left" : "top"], z = H[r ? "width" : "height"], A = -1 + (z - J + R) / z), 1 < A || -1 > A || b(I, A, r));
                    u("scroll", H)
                }
            }

            function b(a, b) {
                S = a.parallaxElements;
                var c = S.length;
                if (c)
                    for (var f = 0; f < c; f++) {
                        T = S[f];
                        var g = oa = T.element,
                            d = b;
                        U = T.properties || (r ? { translateX: "100%" } : { translateY: "100%" });
                        D = "";
                        for (B in U) {
                            n = U[B];
                            if ("number" === typeof n) n *=
                                d;
                            else if ("string" === typeof n)
                                for (K = n.match(la), m = 0, E = K.length; m < E; m++) n = n.replace(K[m], parseFloat(K[m] * d));
                            if (-1 !== e.inArray(B, ma)) D += B + "(" + n + ")";
                            else { var k = g.style,
                                    l = B,
                                    h; "opacity" === B ? (h = 0 > d ? 1 + n : 1 - n, h = 0 > h ? 0 : 1 < h ? 1 : h) : h = n;
                                k[l] = h }
                        }
                        D && (g.style[da] = ea + D)
                    }
            }

            function pa(a) { return "undefined" !== typeof a ? "number" !== typeof a && "string" !== typeof a || "" === a || isNaN(a) ? O.index(a) : 0 <= a && a < x.length ? a : -1 : -1 }

            function u(a, b) {
                if (h[a]) {
                    E = h[a].length;
                    for (m = V.length = 0; m < E; m++) C.call(V, h[a][m]);
                    for (m = 0; m < E; m++) V[m].call(f,
                        a, b)
                }
            }

            function p(a, b) { for (var c = 0, f = h[a].length; c < f; c++)
                    if (h[a][c] === b) return c;
                return -1 }
            var f = this,
                P = a && e(a).eq(0) || ba,
                w = q.instances,
                v = null;
            a = P[0];
            e.each(w, function(b, c) { b && b.frame === a && (v = !0) });
            if (!a || v) v ? W("Scrollax: Scrollax has been initialized for this frame!") : W("Scrollax: Frame is not available!");
            else {
                var t = e.extend({}, q.defaults, g),
                    x = [],
                    O = null,
                    ga = t.parentSelector || "[data-scrollax-parent]",
                    qa = t.elementsSelector || "[data-scrollax]",
                    h = {},
                    V = [],
                    G, fa = Y(a),
                    m, E, F, ia, Q, H, r, R, y, I, ja, A, J, z, S, T, oa, U,
                    B, n, D, K;
                f.frame = a;
                f.options = t;
                f.parents = x;
                f.initialized = !1;
                f.reload = k;
                var na = function(a, b) { var c = e(b),
                        f = X(e(b)),
                        d = {};
                    d.element = b;
                    d.options = f;
                    d.parallaxElements = [];
                    c.find(qa).each(function(a, b) { var c = X(e(b));
                        c.element = b;
                        C.call(d.parallaxElements, c) });
                    C.call(x, d) };
                f.scroll = d;
                f.getIndex = pa;
                f.one = function(a, b) {
                    function c() { b.apply(f, arguments);
                        f.off(a, c) }
                    f.on(a, c); return f };
                f.on = function(a, b) {
                    if ("object" === typeof a)
                        for (var c in a) { if (aa.call(a, c)) f.on(c, a[c]) } else if ("function" === typeof b) {
                            c = a.split(" ");
                            for (var d = 0, g = c.length; d < g; d++) h[c[d]] = h[c[d]] || [], -1 === p(c[d], b) && C.call(h[c[d]], b)
                        } else if ("array" === typeof b)
                        for (c = 0, d = b.length; c < d; c++) f.on(a, b[c]);
                    return f
                };
                f.off = function(a, c) { if (c instanceof Array)
                        for (var b = 0, d = c.length; b < d; b++) f.off(a, c[b]);
                    else
                        for (var b = a.split(" "), d = 0, g = b.length; d < g; d++)
                            if (h[b[d]] = h[b[d]] || [], "undefined" === typeof c) h[b[d]].length = 0;
                            else { var k = p(b[d], c); - 1 !== k && Z.call(h[b[d]], k, 1) } return f };
                f.set = function(a, b) {
                    e.isPlainObject(a) ? e.extend(t, a) : aa.call(t, a) && (t[a] = b);
                    k();
                    return f
                };
                f.destroy = function() { N(window, "resize", l);
                    N(a, "scroll", d);
                    e.each(w, function(b, c) { b && b.frame === a && Z.call(q.instances, c, 1) });
                    x.length = 0;
                    f.initialized = !1;
                    u("destroy"); return f };
                f.init = function() { if (!f.initialized) return f.on(c), k(), M(window, "resize", l), M(a, "scroll", d), C.call(q.instances, f), f.initialized = !0, u("initialized"), f }
            }
        };
    q.instances = [];
    (function() {
        var a, g, c, k, l, d, b, e;
        L = function(u, p) {
            g = u.ownerDocument || u;
            c = g.documentElement;
            k = Y(p) ? p : g.defaultView || window;
            p = p && p !== g ? p : c;
            l = (k.pageYOffset ||
                c.scrollTop) - c.clientTop;
            d = (k.pageXOffset || c.scrollLeft) - c.clientLeft;
            b = { top: 0, left: 0 };
            if (u && u.getBoundingClientRect) { var f = {},
                    q = u.getBoundingClientRect(); for (a in q) f[a] = q[a];
                b = f;
                b.width = b.right - b.left;
                b.height = b.bottom - b.top } else return null;
            if (p === k) return b;
            b.top += l;
            b.left += d;
            b.right += d;
            b.bottom += l;
            if (p === c) return b;
            e = L(p);
            b.left -= e.left;
            b.right -= e.left;
            b.top -= e.top;
            b.bottom -= e.top;
            return b
        }
    })();
    (function() {
        function a() { this.returnValue = !1 }

        function g() { this.cancelBubble = !0 }
        M = window.addEventListener ?
            function(a, g, e, d) { a.addEventListener(g, e, d || !1); return e } : function(c, e, l) { var d = e + l;
                c[d] = c[d] || function() { var b = window.event;
                    b.target = b.srcElement;
                    b.preventDefault = a;
                    b.stopPropagation = g;
                    l.call(c, b) };
                c.attachEvent("on" + e, c[d]); return l };
        N = window.removeEventListener ? function(a, g, e, d) { a.removeEventListener(g, e, d || !1); return e } : function(a, g, e) { var d = g + e;
            a.detachEvent("on" + g, a[d]); try { delete a[d] } catch (b) { a[d] = void 0 } return e }
    })();
    (function() {
        function a(a) {
            for (var e = 0, d = g.length; e < d; e++) {
                var b = g[e] ? g[e] +
                    a.charAt(0).toUpperCase() + a.slice(1) : a;
                if (null != c.style[b]) return b
            }
        }
        var g = ["", "webkit", "moz", "ms", "o"],
            c = document.createElement("div");
        da = a("transform");
        ea = a("perspective") ? "translateZ(0) " : ""
    })();
    q.defaults = { horizontal: !1, offset: 0, parentSelector: null, elementsSelector: null, performanceTrick: !1 };
    window.Scrollax = q;
    e.fn.Scrollax = function(a, g) {
        var c, k;
        if (!e.isPlainObject(a)) { if ("string" === typeof a || !1 === a) c = !1 === a ? "destroy" : a, k = slice.call(arguments, 1);
            a = {} }
        return this.each(function(l, d) {
            var b = e.data(d,
                "scrollax");
            b || c ? b && c && b[c] && b[c].apply(b, k) : e.data(d, "scrollax", (new q(d, a, g)).init())
        })
    };
    e.Scrollax = function(a, e) { ba.Scrollax(a, e) };
    var v = document.head || document.getElementsByTagName("head")[0],
        w = document.createElement("style");
    w.type = "text/css";
    w.styleSheet ? w.styleSheet.cssText = ".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };" :
        w.appendChild(document.createTextNode(".scrollax-performance, .scrollax-performance *, .scrollax-performance *:before, .scrollax-performance *:after { pointer-events: none !important; -webkit-animation-play-state: paused !important; animation-play-state: paused !important; };"));
    v.appendChild(w);
    return q
});