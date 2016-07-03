! function (t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";

    function n(t, e) {
        e = e || Z;
        var n = e.createElement("script");
        n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
    }

    function i(t) {
        var e = !!t && "length" in t && t.length,
            n = dt.type(t);
        return "function" === n || dt.isWindow(t) ? !1 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }

    function r(t, e, n) {
        if (dt.isFunction(e)) return dt.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return dt.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (wt.test(e)) return dt.filter(e, t, n);
            e = dt.filter(e, t)
        }
        return dt.grep(t, function (t) {
            return rt.call(e, t) > -1 !== n && 1 === t.nodeType
        })
    }

    function s(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function o(t) {
        var e = {};
        return dt.each(t.match(Tt) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function a(t) {
        return t
    }

    function l(t) {
        throw t
    }

    function u(t, e, n) {
        var i;
        try {
            t && dt.isFunction(i = t.promise) ? i.call(t).done(e).fail(n) : t && dt.isFunction(i = t.then) ? i.call(t, e, n) : e.call(void 0, t)
        } catch (t) {
            n.call(void 0, t)
        }
    }

    function c() {
        Z.removeEventListener("DOMContentLoaded", c), t.removeEventListener("load", c), dt.ready()
    }

    function h() {
        this.expando = dt.expando + h.uid++
    }

    function d(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Ht, "-$&").toLowerCase(), n = t.getAttribute(i), "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ot.test(n) ? JSON.parse(n) : n
                } catch (r) {}
                Nt.set(t, e, n)
            } else n = void 0;
        return n
    }

    function f(t, e, n, i) {
        var r, s = 1,
            o = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return dt.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (dt.cssNumber[e] ? "" : "px"),
            c = (dt.cssNumber[e] || "px" !== u && +l) && Ft.exec(dt.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do s = s || ".5", c /= s, dt.style(t, e, c + u); while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function p(t) {
        var e, n = t.ownerDocument,
            i = t.nodeName,
            r = qt[i];
        return r ? r : (e = n.body.appendChild(n.createElement(i)), r = dt.css(e, "display"), e.parentNode.removeChild(e), "none" === r && (r = "block"), qt[i] = r, r)
    }

    function m(t, e) {
        for (var n, i, r = [], s = 0, o = t.length; o > s; s++) i = t[s], i.style && (n = i.style.display, e ? ("none" === n && (r[s] = Pt.get(i, "display") || null, r[s] || (i.style.display = "")), "" === i.style.display && Rt(i) && (r[s] = p(i))) : "none" !== n && (r[s] = "none", Pt.set(i, "display", n)));
        for (s = 0; o > s; s++) null != r[s] && (t[s].style.display = r[s]);
        return t
    }

    function g(t, e) {
        var n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && dt.nodeName(t, e) ? dt.merge([t], n) : n
    }

    function v(t, e) {
        for (var n = 0, i = t.length; i > n; n++) Pt.set(t[n], "globalEval", !e || Pt.get(e[n], "globalEval"))
    }

    function y(t, e, n, i, r) {
        for (var s, o, a, l, u, c, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; p > f; f++)
            if (s = t[f], s || 0 === s)
                if ("object" === dt.type(s)) dt.merge(d, s.nodeType ? [s] : s);
                else if (Yt.test(s)) {
            for (o = o || h.appendChild(e.createElement("div")), a = (Bt.exec(s) || ["", ""])[1].toLowerCase(), l = Ut[a] || Ut._default, o.innerHTML = l[1] + dt.htmlPrefilter(s) + l[2], c = l[0]; c--;) o = o.lastChild;
            dt.merge(d, o.childNodes), o = h.firstChild, o.textContent = ""
        } else d.push(e.createTextNode(s));
        for (h.textContent = "", f = 0; s = d[f++];)
            if (i && dt.inArray(s, i) > -1) r && r.push(s);
            else if (u = dt.contains(s.ownerDocument, s), o = g(h.appendChild(s), "script"), u && v(o), n)
            for (c = 0; s = o[c++];) Vt.test(s.type || "") && n.push(s);
        return h
    }

    function b() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return Z.activeElement
        } catch (t) {}
    }

    function w(t, e, n, i, r, s) {
        var o, a;
        if ("object" == typeof e) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in e) w(t, a, n, i, e[a], s);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), r === !1) r = $;
        else if (!r) return t;
        return 1 === s && (o = r, r = function (t) {
            return dt().off(t), o.apply(this, arguments)
        }, r.guid = o.guid || (o.guid = dt.guid++)), t.each(function () {
            dt.event.add(this, e, r, i, n)
        })
    }

    function x(t, e) {
        return dt.nodeName(t, "table") && dt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
    }

    function C(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
    }

    function k(t) {
        var e = ee.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function D(t, e) {
        var n, i, r, s, o, a, l, u;
        if (1 === e.nodeType) {
            if (Pt.hasData(t) && (s = Pt.access(t), o = Pt.set(e, s), u = s.events)) {
                delete o.handle, o.events = {};
                for (r in u)
                    for (n = 0, i = u[r].length; i > n; n++) dt.event.add(e, r, u[r][n])
            }
            Nt.hasData(t) && (a = Nt.access(t), l = dt.extend({}, a), Nt.set(e, l))
        }
    }

    function S(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Lt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }

    function T(t, e, i, r) {
        e = nt.apply([], e);
        var s, o, a, l, u, c, h = 0,
            d = t.length,
            f = d - 1,
            p = e[0],
            m = dt.isFunction(p);
        if (m || d > 1 && "string" == typeof p && !ct.checkClone && te.test(p)) return t.each(function (n) {
            var s = t.eq(n);
            m && (e[0] = p.call(this, n, s.html())), T(s, e, i, r)
        });
        if (d && (s = y(e, t[0].ownerDocument, !1, t, r), o = s.firstChild, 1 === s.childNodes.length && (s = o), o || r)) {
            for (a = dt.map(g(s, "script"), C), l = a.length; d > h; h++) u = s, h !== f && (u = dt.clone(u, !0, !0), l && dt.merge(a, g(u, "script"))), i.call(t[h], u, h);
            if (l)
                for (c = a[a.length - 1].ownerDocument, dt.map(a, k), h = 0; l > h; h++) u = a[h], Vt.test(u.type || "") && !Pt.access(u, "globalEval") && dt.contains(c, u) && (u.src ? dt._evalUrl && dt._evalUrl(u.src) : n(u.textContent.replace(ne, ""), c))
        }
        return t
    }

    function A(t, e, n) {
        for (var i, r = e ? dt.filter(e, t) : t, s = 0; null != (i = r[s]); s++) n || 1 !== i.nodeType || dt.cleanData(g(i)), i.parentNode && (n && dt.contains(i.ownerDocument, i) && v(g(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function E(t, e, n) {
        var i, r, s, o, a = t.style;
        return n = n || se(t), n && (o = n.getPropertyValue(e) || n[e], "" !== o || dt.contains(t.ownerDocument, t) || (o = dt.style(t, e)), !ct.pixelMarginRight() && re.test(o) && ie.test(e) && (i = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = n.width, a.width = i, a.minWidth = r, a.maxWidth = s)), void 0 !== o ? o + "" : o
    }

    function M(t, e) {
        return {
            get: function () {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }

    function I(t) {
        if (t in ce) return t;
        for (var e = t[0].toUpperCase() + t.slice(1), n = ue.length; n--;)
            if (t = ue[n] + e, t in ce) return t
    }

    function P(t, e, n) {
        var i = Ft.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }

    function N(t, e, n, i, r) {
        for (var s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === n && (o += dt.css(t, n + zt[s], !0, r)), i ? ("content" === n && (o -= dt.css(t, "padding" + zt[s], !0, r)), "margin" !== n && (o -= dt.css(t, "border" + zt[s] + "Width", !0, r))) : (o += dt.css(t, "padding" + zt[s], !0, r), "padding" !== n && (o += dt.css(t, "border" + zt[s] + "Width", !0, r)));
        return o
    }

    function O(t, e, n) {
        var i, r = !0,
            s = se(t),
            o = "border-box" === dt.css(t, "boxSizing", !1, s);
        if (t.getClientRects().length && (i = t.getBoundingClientRect()[e]), 0 >= i || null == i) {
            if (i = E(t, e, s), (0 > i || null == i) && (i = t.style[e]), re.test(i)) return i;
            r = o && (ct.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
        }
        return i + N(t, e, n || (o ? "border" : "content"), r, s) + "px"
    }

    function H(t, e, n, i, r) {
        return new H.prototype.init(t, e, n, i, r)
    }

    function j() {
        de && (t.requestAnimationFrame(j), dt.fx.tick())
    }

    function F() {
        return t.setTimeout(function () {
            he = void 0
        }), he = dt.now()
    }

    function z(t, e) {
        var n, i = 0,
            r = {
                height: t
            };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = zt[i], r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t), r
    }

    function R(t, e, n) {
        for (var i, r = (L.tweeners[e] || []).concat(L.tweeners["*"]), s = 0, o = r.length; o > s; s++)
            if (i = r[s].call(n, e, t)) return i
    }

    function W(t, e, n) {
        var i, r, s, o, a, l, u, c, h = "width" in e || "height" in e,
            d = this,
            f = {},
            p = t.style,
            g = t.nodeType && Rt(t),
            v = Pt.get(t, "fxshow");
        n.queue || (o = dt._queueHooks(t, "fx"), null == o.unqueued && (o.unqueued = 0, a = o.empty.fire, o.empty.fire = function () {
            o.unqueued || a()
        }), o.unqueued++, d.always(function () {
            d.always(function () {
                o.unqueued--, dt.queue(t, "fx").length || o.empty.fire()
            })
        }));
        for (i in e)
            if (r = e[i], fe.test(r)) {
                if (delete e[i], s = s || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[i]) continue;
                    g = !0
                }
                f[i] = v && v[i] || dt.style(t, i)
            }
        if (l = !dt.isEmptyObject(e), l || !dt.isEmptyObject(f)) {
            h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = v && v.display, null == u && (u = Pt.get(t, "display")), c = dt.css(t, "display"), "none" === c && (u ? c = u : (m([t], !0), u = t.style.display || u, c = dt.css(t, "display"), m([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === dt.css(t, "float") && (l || (d.done(function () {
                p.display = u
            }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            })), l = !1;
            for (i in f) l || (v ? "hidden" in v && (g = v.hidden) : v = Pt.access(t, "fxshow", {
                display: u
            }), s && (v.hidden = !g), g && m([t], !0), d.done(function () {
                g || m([t]), Pt.remove(t, "fxshow");
                for (i in f) dt.style(t, i, f[i])
            })), l = R(g ? v[i] : 0, i, d), i in v || (v[i] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function q(t, e) {
        var n, i, r, s, o;
        for (n in t)
            if (i = dt.camelCase(n), r = e[i], s = t[n], dt.isArray(s) && (r = s[1], s = t[n] = s[0]), n !== i && (t[i] = s, delete t[n]), o = dt.cssHooks[i], o && "expand" in o) {
                s = o.expand(s), delete t[i];
                for (n in s) n in t || (t[n] = s[n], e[n] = r)
            } else e[i] = r
    }

    function L(t, e, n) {
        var i, r, s = 0,
            o = L.prefilters.length,
            a = dt.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var e = he || F(), n = Math.max(0, u.startTime + u.duration - e), i = n / u.duration || 0, s = 1 - i, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(s);
                return a.notifyWith(t, [u, s, n]), 1 > s && l ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: dt.extend({}, e),
                opts: dt.extend(!0, {
                    specialEasing: {},
                    easing: dt.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: he || F(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = dt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; i > n; n++) u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (q(c, u.opts.specialEasing); o > s; s++)
            if (i = L.prefilters[s].call(u, t, c, u.opts)) return dt.isFunction(i.stop) && (dt._queueHooks(u.elem, u.opts.queue).stop = dt.proxy(i.stop, i)), i;
        return dt.map(c, R, u), dt.isFunction(u.opts.start) && u.opts.start.call(t, u), dt.fx.timer(dt.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function B(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }

    function V(t, e, n, i) {
        var r;
        if (dt.isArray(e)) dt.each(e, function (e, r) {
            n || De.test(t) ? i(t, r) : V(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== dt.type(e)) i(t, e);
        else
            for (r in e) V(t + "[" + r + "]", e[r], n, i)
    }

    function U(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                s = e.toLowerCase().match(Tt) || [];
            if (dt.isFunction(n))
                for (; i = s[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function Y(t, e, n, i) {
        function r(a) {
            var l;
            return s[a] = !0, dt.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || o || s[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var s = {},
            o = t === Fe;
        return r(e.dataTypes[0]) || !s["*"] && r("*")
    }

    function K(t, e) {
        var n, i, r = dt.ajaxSettings.flatOptions || {};
        for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && dt.extend(!0, t, i), t
    }

    function G(t, e, n) {
        for (var i, r, s, o, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) s = l[0];
        else {
            for (r in n) {
                if (!l[0] || t.converters[r + " " + l[0]]) {
                    s = r;
                    break
                }
                o || (o = r)
            }
            s = s || o
        }
        return s ? (s !== l[0] && l.unshift(s), n[s]) : void 0
    }

    function X(t, e, n, i) {
        var r, s, o, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
        for (s = c.shift(); s;)
            if (t.responseFields[s] && (n[t.responseFields[s]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                if ("*" === s) s = l;
                else if ("*" !== l && l !== s) {
            if (o = u[l + " " + s] || u["* " + s], !o)
                for (r in u)
                    if (a = r.split(" "), a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]])) {
                        o === !0 ? o = u[r] : u[r] !== !0 && (s = a[0], c.unshift(a[1]));
                        break
                    }
            if (o !== !0)
                if (o && t["throws"]) e = o(e);
                else try {
                    e = o(e)
                } catch (h) {
                    return {
                        state: "parsererror",
                        error: o ? h : "No conversion from " + l + " to " + s
                    }
                }
        }
        return {
            state: "success",
            data: e
        }
    }

    function J(t) {
        return dt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var Q = [],
        Z = t.document,
        tt = Object.getPrototypeOf,
        et = Q.slice,
        nt = Q.concat,
        it = Q.push,
        rt = Q.indexOf,
        st = {},
        ot = st.toString,
        at = st.hasOwnProperty,
        lt = at.toString,
        ut = lt.call(Object),
        ct = {},
        ht = "3.0.0",
        dt = function (t, e) {
            return new dt.fn.init(t, e)
        },
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        pt = /^-ms-/,
        mt = /-([a-z])/g,
        gt = function (t, e) {
            return e.toUpperCase()
        };
    dt.fn = dt.prototype = {
        jquery: ht,
        constructor: dt,
        length: 0,
        toArray: function () {
            return et.call(this)
        },
        get: function (t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : et.call(this)
        },
        pushStack: function (t) {
            var e = dt.merge(this.constructor(), t);
            return e.prevObject = this, e
        },
        each: function (t) {
            return dt.each(this, t)
        },
        map: function (t) {
            return this.pushStack(dt.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(et.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: it,
        sort: Q.sort,
        splice: Q.splice
    }, dt.extend = dt.fn.extend = function () {
        var t, e, n, i, r, s, o = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof o && (u = o, o = arguments[a] || {}, a++), "object" == typeof o || dt.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
            if (null != (t = arguments[a]))
                for (e in t) n = o[e], i = t[e], o !== i && (u && i && (dt.isPlainObject(i) || (r = dt.isArray(i))) ? (r ? (r = !1, s = n && dt.isArray(n) ? n : []) : s = n && dt.isPlainObject(n) ? n : {}, o[e] = dt.extend(u, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }, dt.extend({
        expando: "jQuery" + (ht + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () {},
        isFunction: function (t) {
            return "function" === dt.type(t)
        },
        isArray: Array.isArray,
        isWindow: function (t) {
            return null != t && t === t.window
        },
        isNumeric: function (t) {
            var e = dt.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function (t) {
            var e, n;
            return t && "[object Object]" === ot.call(t) ? (e = tt(t)) ? (n = at.call(e, "constructor") && e.constructor, "function" == typeof n && lt.call(n) === ut) : !0 : !1
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? st[ot.call(t)] || "object" : typeof t
        },
        globalEval: function (t) {
            n(t)
        },
        camelCase: function (t) {
            return t.replace(pt, "ms-").replace(mt, gt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var n, r = 0;
            if (i(t))
                for (n = t.length; n > r && e.call(t[r], r, t[r]) !== !1; r++);
            else
                for (r in t)
                    if (e.call(t[r], r, t[r]) === !1) break; return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(ft, "")
        },
        makeArray: function (t, e) {
            var n = e || [];
            return null != t && (i(Object(t)) ? dt.merge(n, "string" == typeof t ? [t] : t) : it.call(n, t)), n
        },
        inArray: function (t, e, n) {
            return null == e ? -1 : rt.call(e, t, n)
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; n > i; i++) t[r++] = e[i];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i, r = [], s = 0, o = t.length, a = !n; o > s; s++) i = !e(t[s], s), i !== a && r.push(t[s]);
            return r
        },
        map: function (t, e, n) {
            var r, s, o = 0,
                a = [];
            if (i(t))
                for (r = t.length; r > o; o++) s = e(t[o], o, n), null != s && a.push(s);
            else
                for (o in t) s = e(t[o], o, n), null != s && a.push(s);
            return nt.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (n = t[e], e = t, t = n), dt.isFunction(t) ? (i = et.call(arguments, 2), r = function () {
                return t.apply(e || this, i.concat(et.call(arguments)))
            }, r.guid = t.guid = t.guid || dt.guid++, r) : void 0
        },
        now: Date.now,
        support: ct
    }), "function" == typeof Symbol && (dt.fn[Symbol.iterator] = Q[Symbol.iterator]), dt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        st["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function (t) {
        function e(t, e, n, i) {
            var r, s, o, a, l, u, c, d = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((e ? e.ownerDocument || e : W) !== P && I(e), e = e || P, O)) {
                if (11 !== p && (l = vt.exec(t)))
                    if (r = l[1]) {
                        if (9 === p) {
                            if (!(o = e.getElementById(r))) return n;
                            if (o.id === r) return n.push(o), n
                        } else if (d && (o = d.getElementById(r)) && z(e, o) && o.id === r) return n.push(o), n
                    } else {
                        if (l[2]) return Q.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = l[3]) && w.getElementsByClassName && e.getElementsByClassName) return Q.apply(n, e.getElementsByClassName(r)), n
                    }
                if (w.qsa && !U[t + " "] && (!H || !H.test(t))) {
                    if (1 !== p) d = e, c = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(_t, wt) : e.setAttribute("id", a = R), u = D(t), s = u.length; s--;) u[s] = "#" + a + " " + f(u[s]);
                        c = u.join(","), d = yt.test(t) && h(e.parentNode) || e
                    }
                    if (c) try {
                        return Q.apply(n, d.querySelectorAll(c)), n
                    } catch (m) {} finally {
                        a === R && e.removeAttribute("id")
                    }
                }
            }
            return T(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[R] = !0, t
        }

        function r(t) {
            var e = P.createElement("fieldset");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function s(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function o(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return function (e) {
                return "label" in e && e.disabled === t || "form" in e && e.disabled === t || "form" in e && e.disabled === !1 && (e.isDisabled === t || e.isDisabled !== !t && ("label" in e || !Ct(e)) !== t)
            }
        }

        function c(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--;) n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function h(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() {}

        function f(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++) i += t[e].value;
            return i
        }

        function p(t, e, n) {
            var i = e.dir,
                r = e.next,
                s = r || i,
                o = n && "parentNode" === s,
                a = L++;
            return e.first ? function (e, n, r) {
                for (; e = e[i];)
                    if (1 === e.nodeType || o) return t(e, n, r)
            } : function (e, n, l) {
                var u, c, h, d = [q, a];
                if (l) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || o) && t(e, n, l)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || o)
                            if (h = e[R] || (e[R] = {}), c = h[e.uniqueID] || (h[e.uniqueID] = {}), r && r === e.nodeName.toLowerCase()) e = e[i] || e;
                            else {
                                if ((u = c[s]) && u[0] === q && u[1] === a) return d[2] = u[2];
                                if (c[s] = d, d[2] = t(e, n, l)) return !0
                            }
            }
        }

        function m(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function g(t, n, i) {
            for (var r = 0, s = n.length; s > r; r++) e(t, n[r], i);
            return i
        }

        function v(t, e, n, i, r) {
            for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)(s = t[a]) && (n && !n(s, i, r) || (o.push(s), u && e.push(a)));
            return o
        }

        function y(t, e, n, r, s, o) {
            return r && !r[R] && (r = y(r)), s && !s[R] && (s = y(s, o)), i(function (i, o, a, l) {
                var u, c, h, d = [],
                    f = [],
                    p = o.length,
                    m = i || g(e || "*", a.nodeType ? [a] : a, []),
                    y = !t || !i && e ? m : v(m, d, t, a, l),
                    b = n ? s || (i ? t : p || r) ? [] : o : y;
                if (n && n(y, b, a, l), r)
                    for (u = v(b, f), r(u, [], a, l), c = u.length; c--;)(h = u[c]) && (b[f[c]] = !(y[f[c]] = h));
                if (i) {
                    if (s || t) {
                        if (s) {
                            for (u = [], c = b.length; c--;)(h = b[c]) && u.push(y[c] = h);
                            s(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(h = b[c]) && (u = s ? tt(i, h) : d[c]) > -1 && (i[u] = !(o[u] = h))
                    }
                } else b = v(b === o ? b.splice(p, b.length) : b), s ? s(null, o, b, l) : Q.apply(o, b)
            })
        }

        function b(t) {
            for (var e, n, i, r = t.length, s = x.relative[t[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = p(function (t) {
                    return t === e
                }, o, !0), u = p(function (t) {
                    return tt(e, t) > -1
                }, o, !0), c = [function (t, n, i) {
                    var r = !s && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                    return e = null, r
                }]; r > a; a++)
                if (n = x.relative[t[a].type]) c = [p(m(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches), n[R]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++);
                        return y(a > 1 && m(c), a > 1 && f(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, i > a && b(t.slice(a, i)), r > i && b(t = t.slice(i)), r > i && f(t))
                    }
                    c.push(n)
                }
            return m(c)
        }

        function $(t, n) {
            var r = n.length > 0,
                s = t.length > 0,
                o = function (i, o, a, l, u) {
                    var c, h, d, f = 0,
                        p = "0",
                        m = i && [],
                        g = [],
                        y = A,
                        b = i || s && x.find.TAG("*", u),
                        $ = q += null == y ? 1 : Math.random() || .1,
                        _ = b.length;
                    for (u && (A = o === P || o || u); p !== _ && null != (c = b[p]); p++) {
                        if (s && c) {
                            for (h = 0, o || c.ownerDocument === P || (I(c), a = !O); d = t[h++];)
                                if (d(c, o || P, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (q = $)
                        }
                        r && ((c = !d && c) && f--, i && m.push(c))
                    }
                    if (f += p, r && p !== f) {
                        for (h = 0; d = n[h++];) d(m, g, o, a);
                        if (i) {
                            if (f > 0)
                                for (; p--;) m[p] || g[p] || (g[p] = X.call(l));
                            g = v(g)
                        }
                        Q.apply(l, g), u && !i && g.length > 0 && f + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (q = $, A = y), m
                };
            return r ? i(o) : o
        }
        var _, w, x, C, k, D, S, T, A, E, M, I, P, N, O, H, j, F, z, R = "sizzle" + 1 * new Date,
            W = t.document,
            q = 0,
            L = 0,
            B = n(),
            V = n(),
            U = n(),
            Y = function (t, e) {
                return t === e && (M = !0), 0
            },
            K = {}.hasOwnProperty,
            G = [],
            X = G.pop,
            J = G.push,
            Q = G.push,
            Z = G.slice,
            tt = function (t, e) {
                for (var n = 0, i = t.length; i > n; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            ot = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            ht = new RegExp(st),
            dt = new RegExp("^" + it + "$"),
            ft = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + st),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            pt = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            yt = /[+~]/,
            bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            $t = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            _t = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            wt = function (t, e) {
                return e ? "\x00" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
            },
            xt = function () {
                I()
            },
            Ct = p(function (t) {
                return t.disabled === !0
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Q.apply(G = Z.call(W.childNodes), W.childNodes), G[W.childNodes.length].nodeType
        } catch (kt) {
            Q = {
                apply: G.length ? function (t, e) {
                    J.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        w = e.support = {}, k = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return e ? "HTML" !== e.nodeName : !1
        }, I = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : W;
            return i !== P && 9 === i.nodeType && i.documentElement ? (P = i, N = P.documentElement, O = !k(P), W !== P && (n = P.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xt, !1) : n.attachEvent && n.attachEvent("onunload", xt)), w.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), w.getElementsByTagName = r(function (t) {
                return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length
            }), w.getElementsByClassName = gt.test(P.getElementsByClassName), w.getById = r(function (t) {
                return N.appendChild(t).id = R, !P.getElementsByName || !P.getElementsByName(R).length
            }), w.getById ? (x.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && O) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, x.filter.ID = function (t) {
                var e = t.replace(bt, $t);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete x.find.ID, x.filter.ID = function (t) {
                var e = t.replace(bt, $t);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), x.find.TAG = w.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : w.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    r = 0,
                    s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }, x.find.CLASS = w.getElementsByClassName && function (t, e) {
                return "undefined" != typeof e.getElementsByClassName && O ? e.getElementsByClassName(t) : void 0
            }, j = [], H = [], (w.qsa = gt.test(P.querySelectorAll)) && (r(function (t) {
                N.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || H.push("~="), t.querySelectorAll(":checked").length || H.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || H.push(".#.+[+~]")
            }), r(function (t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = P.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && H.push(":enabled", ":disabled"), N.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
            })), (w.matchesSelector = gt.test(F = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && r(function (t) {
                w.disconnectedMatch = F.call(t, "*"), F.call(t, "[s!='']:x"), j.push("!=", st)
            }), H = H.length && new RegExp(H.join("|")), j = j.length && new RegExp(j.join("|")), e = gt.test(N.compareDocumentPosition), z = e || gt.test(N.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, Y = e ? function (t, e) {
                if (t === e) return M = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === P || t.ownerDocument === W && z(W, t) ? -1 : e === P || e.ownerDocument === W && z(W, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return M = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    s = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !s) return t === P ? -1 : e === P ? 1 : r ? -1 : s ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                if (r === s) return o(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? o(a[i], l[i]) : a[i] === W ? -1 : l[i] === W ? 1 : 0
            }, P) : P
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== P && I(t), n = n.replace(ct, "='$1']"), w.matchesSelector && O && !U[n + " "] && (!j || !j.test(n)) && (!H || !H.test(n))) try {
                var i = F.call(t, n);
                if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (r) {}
            return e(n, P, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== P && I(t), z(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== P && I(t);
            var n = x.attrHandle[e.toLowerCase()],
                i = n && K.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !O) : void 0;
            return void 0 !== i ? i : w.attributes || !O ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.escape = function (t) {
            return (t + "").replace(_t, wt)
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                r = 0;
            if (M = !w.detectDuplicates, E = !w.sortStable && t.slice(0), t.sort(Y), M) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return E = null, t
        }, C = e.getText = function (t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += C(e);
            return n
        }, x = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ft,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(bt, $t), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, $t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = D(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(bt, $t).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = B[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, i) {
                    return function (r) {
                        var s = e.attr(r, t);
                        return null == s ? "!=" === n : n ? (s += "", "=" === n ? s === i : "!=" === n ? s !== i : "^=" === n ? i && 0 === s.indexOf(i) : "*=" === n ? i && s.indexOf(i) > -1 : "$=" === n ? i && s.slice(-i.length) === i : "~=" === n ? (" " + s.replace(ot, " ") + " ").indexOf(i) > -1 : "|=" === n ? s === i || s.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function (t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3),
                        o = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, h, d, f, p, m = s !== o ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            v = a && e.nodeName.toLowerCase(),
                            y = !l && !a,
                            b = !1;
                        if (g) {
                            if (s) {
                                for (; m;) {
                                    for (d = e; d = d[m];)
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    p = m = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? g.firstChild : g.lastChild], o && y) {
                                for (d = g, h = d[R] || (d[R] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], b = f && u[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop();)
                                    if (1 === d.nodeType && ++b && d === e) {
                                        c[t] = [q, f, b];
                                        break
                                    }
                            } else if (y && (d = e, h = d[R] || (d[R] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), u = c[t] || [], f = u[0] === q && u[1], b = f), b === !1)
                                for (;
                                    (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (h = d[R] || (d[R] = {}), c = h[d.uniqueID] || (h[d.uniqueID] = {}), c[t] = [q, b]), d !== e)););
                            return b -= r, b === i || b % i === 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return s[R] ? s(n) : s.length > 1 ? (r = [t, t, "", n], x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = s(t, n), o = r.length; o--;) i = tt(t, r[o]), t[i] = !(e[i] = r[o])
                    }) : function (t) {
                        return s(t, 0, r)
                    }) : s
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [],
                        n = [],
                        r = S(t.replace(at, "$1"));
                    return r[R] ? i(function (t, e, n, i) {
                        for (var s, o = r(t, null, i, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function (t, i, s) {
                        return e[0] = t, r(e, null, s, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function (t) {
                    return t = t.replace(bt, $t),
                        function (e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function (t) {
                    return dt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, $t).toLowerCase(),
                        function (e) {
                            var n;
                            do
                                if (n = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-");
                            while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === N
                },
                focus: function (t) {
                    return t === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, t.selected === !0;
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !x.pseudos.empty(t)
                },
                header: function (t) {
                    return mt.test(t.nodeName)
                },
                input: function (t) {
                    return pt.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: c(function () {
                    return [0]
                }),
                last: c(function (t, e) {
                    return [e - 1]
                }),
                eq: c(function (t, e, n) {
                    return [0 > n ? n + e : n]
                }),
                even: c(function (t, e) {
                    for (var n = 0; e > n; n += 2) t.push(n);
                    return t
                }),
                odd: c(function (t, e) {
                    for (var n = 1; e > n; n += 2) t.push(n);
                    return t
                }),
                lt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: c(function (t, e, n) {
                    for (var i = 0 > n ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }, x.pseudos.nth = x.pseudos.eq;
        for (_ in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[_] = a(_);
        for (_ in {
                submit: !0,
                reset: !0
            }) x.pseudos[_] = l(_);
        return d.prototype = x.filters = x.pseudos, x.setFilters = new d, D = e.tokenize = function (t, n) {
            var i, r, s, o, a, l, u, c = V[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = x.preFilter; a;) {
                i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), s.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length));
                for (o in x.filter) !(r = ft[o].exec(a)) || u[o] && !(r = u[o](r)) || (i = r.shift(), s.push({
                    value: i,
                    type: o,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : V(t, l).slice(0)
        }, S = e.compile = function (t, e) {
            var n, i = [],
                r = [],
                s = U[t + " "];
            if (!s) {
                for (e || (e = D(t)), n = e.length; n--;) s = b(e[n]), s[R] ? i.push(s) : r.push(s);
                s = U(t, $(r, i)), s.selector = t
            }
            return s
        }, T = e.select = function (t, e, n, i) {
            var r, s, o, a, l, u = "function" == typeof t && t,
                c = !i && D(t = u.selector || t);
            if (n = n || [], 1 === c.length) {
                if (s = c[0] = c[0].slice(0), s.length > 2 && "ID" === (o = s[0]).type && w.getById && 9 === e.nodeType && O && x.relative[s[1].type]) {
                    if (e = (x.find.ID(o.matches[0].replace(bt, $t), e) || [])[0], !e) return n;
                    u && (e = e.parentNode), t = t.slice(s.shift().value.length)
                }
                for (r = ft.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
                    if ((l = x.find[a]) && (i = l(o.matches[0].replace(bt, $t), yt.test(s[0].type) && h(e.parentNode) || e))) {
                        if (s.splice(r, 1), t = i.length && f(s), !t) return Q.apply(n, i), n;
                        break
                    }
            }
            return (u || S(t, c))(i, e, !O, n, !e || yt.test(t) && h(e.parentNode) || e), n
        }, w.sortStable = R.split("").sort(Y).join("") === R, w.detectDuplicates = !!M, I(), w.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(P.createElement("fieldset"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || s("type|href|height|width", function (t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), w.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || s("value", function (t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || s(et, function (t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    dt.find = vt, dt.expr = vt.selectors, dt.expr[":"] = dt.expr.pseudos, dt.uniqueSort = dt.unique = vt.uniqueSort, dt.text = vt.getText, dt.isXMLDoc = vt.isXML, dt.contains = vt.contains, dt.escapeSelector = vt.escape;
    var yt = function (t, e, n) {
            for (var i = [], r = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (r && dt(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        bt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        $t = dt.expr.match.needsContext,
        _t = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        wt = /^.[^:#\[\.,]*$/;
    dt.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? dt.find.matchesSelector(i, t) ? [i] : [] : dt.find.matches(t, dt.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, dt.fn.extend({
        find: function (t) {
            var e, n, i = this.length,
                r = this;
            if ("string" != typeof t) return this.pushStack(dt(t).filter(function () {
                for (e = 0; i > e; e++)
                    if (dt.contains(r[e], this)) return !0
            }));
            for (n = this.pushStack([]), e = 0; i > e; e++) dt.find(t, r[e], n);
            return i > 1 ? dt.uniqueSort(n) : n
        },
        filter: function (t) {
            return this.pushStack(r(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(r(this, t || [], !0))
        },
        is: function (t) {
            return !!r(this, "string" == typeof t && $t.test(t) ? dt(t) : t || [], !1).length
        }
    });
    var xt, Ct = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        kt = dt.fn.init = function (t, e, n) {
            var i, r;
            if (!t) return this;
            if (n = n || xt, "string" == typeof t) {
                if (i = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ct.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (i[1]) {
                    if (e = e instanceof dt ? e[0] : e, dt.merge(this, dt.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)), _t.test(i[1]) && dt.isPlainObject(e))
                        for (i in e) dt.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                    return this
                }
                return r = Z.getElementById(i[2]), r && (this[0] = r, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : dt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(dt) : dt.makeArray(t, this)
        };
    kt.prototype = dt.fn, xt = dt(Z);
    var Dt = /^(?:parents|prev(?:Until|All))/,
        St = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    dt.fn.extend({
        has: function (t) {
            var e = dt(t, this),
                n = e.length;
            return this.filter(function () {
                for (var t = 0; n > t; t++)
                    if (dt.contains(this, e[t])) return !0
            })
        },
        closest: function (t, e) {
            var n, i = 0,
                r = this.length,
                s = [],
                o = "string" != typeof t && dt(t);
            if (!$t.test(t))
                for (; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && dt.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(s.length > 1 ? dt.uniqueSort(s) : s)
        },
        index: function (t) {
            return t ? "string" == typeof t ? rt.call(dt(t), this[0]) : rt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(dt.uniqueSort(dt.merge(this.get(), dt(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), dt.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return yt(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return yt(t, "parentNode", n)
        },
        next: function (t) {
            return s(t, "nextSibling")
        },
        prev: function (t) {
            return s(t, "previousSibling")
        },
        nextAll: function (t) {
            return yt(t, "nextSibling")
        },
        prevAll: function (t) {
            return yt(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return yt(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return yt(t, "previousSibling", n)
        },
        siblings: function (t) {
            return bt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return bt(t.firstChild)
        },
        contents: function (t) {
            return t.contentDocument || dt.merge([], t.childNodes)
        }
    }, function (t, e) {
        dt.fn[t] = function (n, i) {
            var r = dt.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = dt.filter(i, r)), this.length > 1 && (St[t] || dt.uniqueSort(r), Dt.test(t) && r.reverse()), this.pushStack(r)
        }
    });
    var Tt = /\S+/g;
    dt.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : dt.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            u = function () {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) s[l].apply(n[0], n[1]) === !1 && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function () {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        dt.each(e, function (e, n) {
                            dt.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== dt.type(n) && i(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function () {
                    return dt.each(arguments, function (t, e) {
                        for (var n;
                            (n = dt.inArray(e, s, n)) > -1;) s.splice(n, 1), l >= n && l--
                    }), this
                },
                has: function (t) {
                    return t ? dt.inArray(t, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return r = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return r = a = [], n || e || (s = n = ""), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, n) {
                    return r || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, dt.extend({
        Deferred: function (e) {
            var n = [["notify", "progress", dt.Callbacks("memory"), dt.Callbacks("memory"), 2], ["resolve", "done", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", dt.Callbacks("once memory"), dt.Callbacks("once memory"), 1, "rejected"]],
                i = "pending",
                r = {
                    state: function () {
                        return i
                    },
                    always: function () {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function (t) {
                        return r.then(null, t)
                    },
                    pipe: function () {
                        var t = arguments;
                        return dt.Deferred(function (e) {
                            dt.each(n, function (n, i) {
                                var r = dt.isFunction(t[i[4]]) && t[i[4]];
                                s[i[1]](function () {
                                    var t = r && r.apply(this, arguments);
                                    t && dt.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    then: function (e, i, r) {
                        function s(e, n, i, r) {
                            return function () {
                                var u = this,
                                    c = arguments,
                                    h = function () {
                                        var t, h;
                                        if (!(o > e)) {
                                            if (t = i.apply(u, c), t === n.promise()) throw new TypeError("Thenable self-resolution");
                                            h = t && ("object" == typeof t || "function" == typeof t) && t.then, dt.isFunction(h) ? r ? h.call(t, s(o, n, a, r), s(o, n, l, r)) : (o++, h.call(t, s(o, n, a, r), s(o, n, l, r), s(o, n, a, n.notifyWith))) : (i !== a && (u = void 0, c = [t]), (r || n.resolveWith)(u, c))
                                        }
                                    },
                                    d = r ? h : function () {
                                        try {
                                            h()
                                        } catch (t) {
                                            dt.Deferred.exceptionHook && dt.Deferred.exceptionHook(t, d.stackTrace), e + 1 >= o && (i !== l && (u = void 0, c = [t]), n.rejectWith(u, c))
                                        }
                                    };
                                e ? d() : (dt.Deferred.getStackHook && (d.stackTrace = dt.Deferred.getStackHook()), t.setTimeout(d))
                            }
                        }
                        var o = 0;
                        return dt.Deferred(function (t) {
                            n[0][3].add(s(0, t, dt.isFunction(r) ? r : a, t.notifyWith)), n[1][3].add(s(0, t, dt.isFunction(e) ? e : a)), n[2][3].add(s(0, t, dt.isFunction(i) ? i : l))
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? dt.extend(t, r) : r
                    }
                },
                s = {};
            return dt.each(n, function (t, e) {
                var o = e[2],
                    a = e[5];
                r[e[1]] = o.add, a && o.add(function () {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock), o.add(e[3].fire), s[e[0]] = function () {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[e[0] + "With"] = o.fireWith
            }), r.promise(s), e && e.call(s, s), s
        },
        when: function (t) {
            var e = arguments.length,
                n = e,
                i = Array(n),
                r = et.call(arguments),
                s = dt.Deferred(),
                o = function (t) {
                    return function (n) {
                        i[t] = this, r[t] = arguments.length > 1 ? et.call(arguments) : n, --e || s.resolveWith(i, r)
                    }
                };
            if (1 >= e && (u(t, s.done(o(n)).resolve, s.reject), "pending" === s.state() || dt.isFunction(r[n] && r[n].then))) return s.then();
            for (; n--;) u(r[n], o(n), s.reject);
            return s.promise()
        }
    });
    var At = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    dt.Deferred.exceptionHook = function (e, n) {
        t.console && t.console.warn && e && At.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    };
    var Et = dt.Deferred();
    dt.fn.ready = function (t) {
        return Et.then(t), this
    }, dt.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? dt.readyWait++ : dt.ready(!0)
        },
        ready: function (t) {
            (t === !0 ? --dt.readyWait : dt.isReady) || (dt.isReady = !0, t !== !0 && --dt.readyWait > 0 || Et.resolveWith(Z, [dt]))
        }
    }), dt.ready.then = Et.then, "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? t.setTimeout(dt.ready) : (Z.addEventListener("DOMContentLoaded", c), t.addEventListener("load", c));
    var Mt = function (t, e, n, i, r, s, o) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === dt.type(n)) {
                r = !0;
                for (a in n) Mt(t, e, a, n[a], !0, s, o)
            } else if (void 0 !== i && (r = !0, dt.isFunction(i) || (o = !0), u && (o ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                    return u.call(dt(t), n)
                })), e))
                for (; l > a; a++) e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : s
        },
        It = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
    h.uid = 1, h.prototype = {
        cache: function (t) {
            var e = t[this.expando];
            return e || (e = {}, It(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))), e
        },
        set: function (t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e) r[dt.camelCase(e)] = n;
            else
                for (i in e) r[dt.camelCase(i)] = e[i];
            return r
        },
        get: function (t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][dt.camelCase(e)]
        },
        access: function (t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
        },
        remove: function (t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    dt.isArray(e) ? e = e.map(dt.camelCase) : (e = dt.camelCase(e), e = e in i ? [e] : e.match(Tt) || []), n = e.length;
                    for (; n--;) delete i[e[n]]
                }(void 0 === e || dt.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function (t) {
            var e = t[this.expando];
            return void 0 !== e && !dt.isEmptyObject(e)
        }
    };
    var Pt = new h,
        Nt = new h,
        Ot = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ht = /[A-Z]/g;
    dt.extend({
        hasData: function (t) {
            return Nt.hasData(t) || Pt.hasData(t)
        },
        data: function (t, e, n) {
            return Nt.access(t, e, n)
        },
        removeData: function (t, e) {
            Nt.remove(t, e)
        },
        _data: function (t, e, n) {
            return Pt.access(t, e, n)
        },
        _removeData: function (t, e) {
            Pt.remove(t, e)
        }
    }), dt.fn.extend({
        data: function (t, e) {
            var n, i, r, s = this[0],
                o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = Nt.get(s), 1 === s.nodeType && !Pt.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = dt.camelCase(i.slice(5)), d(s, i, r[i])));
                    Pt.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                Nt.set(this, t)
            }) : Mt(this, function (e) {
                var n;
                if (s && void 0 === e) {
                    if (n = Nt.get(s, t), void 0 !== n) return n;
                    if (n = d(s, t), void 0 !== n) return n
                } else this.each(function () {
                    Nt.set(this, t, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function (t) {
            return this.each(function () {
                Nt.remove(this, t)
            })
        }
    }), dt.extend({
        queue: function (t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = Pt.get(t, e), n && (!i || dt.isArray(n) ? i = Pt.access(t, e, dt.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = dt.queue(t, e),
                i = n.length,
                r = n.shift(),
                s = dt._queueHooks(t, e),
                o = function () {
                    dt.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete s.stop, r.call(t, o, s)), !i && s && s.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return Pt.get(t, n) || Pt.access(t, n, {
                empty: dt.Callbacks("once memory").add(function () {
                    Pt.remove(t, [e + "queue", n])
                })
            })
        }
    }), dt.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? dt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                var n = dt.queue(this, t, e);
                dt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && dt.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                dt.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = dt.Deferred(),
                s = this,
                o = this.length,
                a = function () {
                    --i || r.resolveWith(s, [s])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = Pt.get(s[o], t + "queueHooks"), n && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    });
    var jt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Ft = new RegExp("^(?:([+-])=|)(" + jt + ")([a-z%]*)$", "i"),
        zt = ["Top", "Right", "Bottom", "Left"],
        Rt = function (t, e) {
            return t = e || t, "none" === t.style.display || "" === t.style.display && dt.contains(t.ownerDocument, t) && "none" === dt.css(t, "display")
        },
        Wt = function (t, e, n, i) {
            var r, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            r = n.apply(t, i || []);
            for (s in e) t.style[s] = o[s];
            return r
        },
        qt = {};
    dt.fn.extend({
        show: function () {
            return m(this, !0)
        },
        hide: function () {
            return m(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Rt(this) ? dt(this).show() : dt(this).hide()
            })
        }
    });
    var Lt = /^(?:checkbox|radio)$/i,
        Bt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Vt = /^$|\/(?:java|ecma)script/i,
        Ut = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ut.optgroup = Ut.option, Ut.tbody = Ut.tfoot = Ut.colgroup = Ut.caption = Ut.thead, Ut.th = Ut.td;
    var Yt = /<|&#?\w+;/;
    ! function () {
        var t = Z.createDocumentFragment(),
            e = t.appendChild(Z.createElement("div")),
            n = Z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), ct.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", ct.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Kt = Z.documentElement,
        Gt = /^key/,
        Xt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Jt = /^([^.]*)(?:\.(.+)|)/;
    dt.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var s, o, a, l, u, c, h, d, f, p, m, g = Pt.get(t);
            if (g)
                for (n.handler && (s = n, n = s.handler, r = s.selector), r && dt.find.matchesSelector(Kt, r), n.guid || (n.guid = dt.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function (e) {
                        return "undefined" != typeof dt && dt.event.triggered !== e.type ? dt.event.dispatch.apply(t, arguments) : void 0
                    }), e = (e || "").match(Tt) || [""], u = e.length; u--;) a = Jt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f && (h = dt.event.special[f] || {}, f = (r ? h.delegateType : h.bindType) || f, h = dt.event.special[f] || {}, c = dt.extend({
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && dt.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, s), (d = l[f]) || (d = l[f] = [], d.delegateCount = 0, h.setup && h.setup.call(t, i, p, o) !== !1 || t.addEventListener && t.addEventListener(f, o)), h.add && (h.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), dt.event.global[f] = !0)
        },
        remove: function (t, e, n, i, r) {
            var s, o, a, l, u, c, h, d, f, p, m, g = Pt.hasData(t) && Pt.get(t);
            if (g && (l = g.events)) {
                for (e = (e || "").match(Tt) || [""], u = e.length; u--;)
                    if (a = Jt.exec(e[u]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                        for (h = dt.event.special[f] || {}, f = (i ? h.delegateType : h.bindType) || f, d = l[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = d.length; s--;) c = d[s], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (d.splice(s, 1), c.selector && d.delegateCount--, h.remove && h.remove.call(t, c));
                        o && !d.length && (h.teardown && h.teardown.call(t, p, g.handle) !== !1 || dt.removeEvent(t, f, g.handle), delete l[f])
                    } else
                        for (f in l) dt.event.remove(t, f + e[u], n, i, !0);
                dt.isEmptyObject(l) && Pt.remove(t, "handle events")
            }
        },
        dispatch: function (t) {
            var e, n, i, r, s, o, a = dt.event.fix(t),
                l = new Array(arguments.length),
                u = (Pt.get(this, "events") || {})[a.type] || [],
                c = dt.event.special[a.type] || {};
            for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
            if (a.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, a) !== !1) {
                for (o = dt.event.handlers.call(this, a, u), e = 0;
                    (r = o[e++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = r.elem, n = 0;
                        (s = r.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s, a.data = s.data, i = ((dt.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l), void 0 !== i && (a.result = i) === !1 && (a.preventDefault(), a.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, s, o = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                        for (i = [], n = 0; a > n; n++) s = e[n], r = s.selector + " ", void 0 === i[r] && (i[r] = s.needsContext ? dt(r, this).index(l) > -1 : dt.find(r, this, null, [l]).length), i[r] && i.push(s);
                        i.length && o.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && o.push({
                elem: this,
                handlers: e.slice(a)
            }), o
        },
        addProp: function (t, e) {
            Object.defineProperty(dt.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: dt.isFunction(e) ? function () {
                    return this.originalEvent ? e(this.originalEvent) : void 0
                } : function () {
                    return this.originalEvent ? this.originalEvent[t] : void 0
                },
                set: function (e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function (t) {
            return t[dt.expando] ? t : new dt.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && dt.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function (t) {
                    return dt.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    }, dt.removeEvent = function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }, dt.Event = function (t, e) {
        return this instanceof dt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? b : $, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && dt.extend(this, e), this.timeStamp = t && t.timeStamp || dt.now(), void(this[dt.expando] = !0)) : new dt.Event(t, e)
    }, dt.Event.prototype = {
        constructor: dt.Event,
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        isSimulated: !1,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = b, t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = b, t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = b, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, dt.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (t) {
            var e = t.button;
            return null == t.which && Gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Xt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, dt.event.addProp), dt.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        dt.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    s = t.handleObj;
                return r && (r === i || dt.contains(i, r)) || (t.type = s.origType, n = s.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.fn.extend({
        on: function (t, e, n, i) {
            return w(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return w(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, dt(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = $), this.each(function () {
                dt.event.remove(this, t, n, e)
            })
        }
    });
    var Qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Zt = /<script|<style|<link/i,
        te = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ee = /^true\/(.*)/,
        ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    dt.extend({
        htmlPrefilter: function (t) {
            return t.replace(Qt, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, s, o, a = t.cloneNode(!0),
                l = dt.contains(t.ownerDocument, t);
            if (!(ct.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || dt.isXMLDoc(t)))
                for (o = g(a), s = g(t), i = 0, r = s.length; r > i; i++) S(s[i], o[i]);
            if (e)
                if (n)
                    for (s = s || g(t), o = o || g(a), i = 0, r = s.length; r > i; i++) D(s[i], o[i]);
                else D(t, a);
            return o = g(a, "script"), o.length > 0 && v(o, !l && g(t, "script")), a
        },
        cleanData: function (t) {
            for (var e, n, i, r = dt.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (It(n)) {
                    if (e = n[Pt.expando]) {
                        if (e.events)
                            for (i in e.events) r[i] ? dt.event.remove(n, i) : dt.removeEvent(n, i, e.handle);
                        n[Pt.expando] = void 0
                    }
                    n[Nt.expando] && (n[Nt.expando] = void 0)
                }
        }
    }), dt.fn.extend({
        detach: function (t) {
            return A(this, t, !0)
        },
        remove: function (t) {
            return A(this, t)
        },
        text: function (t) {
            return Mt(this, function (t) {
                return void 0 === t ? dt.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function () {
            return T(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.appendChild(t)
                }
            })
        },
        prepend: function () {
            return T(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = x(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return T(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return T(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (dt.cleanData(g(t, !1)), t.textContent = "");
            return this
        },
        clone: function (t, e) {
            return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
                return dt.clone(this, t, e)
            })
        },
        html: function (t) {
            return Mt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                if ("string" == typeof t && !Zt.test(t) && !Ut[(Bt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = dt.htmlPrefilter(t);
                    try {
                        for (; i > n; n++) e = this[n] || {}, 1 === e.nodeType && (dt.cleanData(g(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return T(this, arguments, function (e) {
                var n = this.parentNode;
                dt.inArray(this, t) < 0 && (dt.cleanData(g(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), dt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        dt.fn[t] = function (t) {
            for (var n, i = [], r = dt(t), s = r.length - 1, o = 0; s >= o; o++) n = o === s ? this : this.clone(!0), dt(r[o])[e](n), it.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var ie = /^margin/,
        re = new RegExp("^(" + jt + ")(?!px)[a-z%]+$", "i"),
        se = function (e) {
            var n = e.ownerDocument.defaultView;
            return n && n.opener || (n = t), n.getComputedStyle(e)
        };
    ! function () {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Kt.appendChild(o);
                var e = t.getComputedStyle(a);
                n = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Kt.removeChild(o), a = null
            }
        }
        var n, i, r, s, o = Z.createElement("div"),
            a = Z.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", ct.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), dt.extend(ct, {
            pixelPosition: function () {
                return e(), n
            },
            boxSizingReliable: function () {
                return e(), i
            },
            pixelMarginRight: function () {
                return e(), r
            },
            reliableMarginLeft: function () {
                return e(), s
            }
        }))
    }();
    var oe = /^(none|table(?!-c[ea]).+)/,
        ae = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        le = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        ue = ["Webkit", "Moz", "ms"],
        ce = Z.createElement("div").style;
    dt.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = E(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = dt.camelCase(e),
                    l = t.style;
                return e = dt.cssProps[a] || (dt.cssProps[a] = I(a) || a), o = dt.cssHooks[e] || dt.cssHooks[a], void 0 === n ? o && "get" in o && void 0 !== (r = o.get(t, !1, i)) ? r : l[e] : (s = typeof n, "string" === s && (r = Ft.exec(n)) && r[1] && (n = f(t, e, r), s = "number"), void(null != n && n === n && ("number" === s && (n += r && r[3] || (dt.cssNumber[a] ? "" : "px")), ct.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), o && "set" in o && void 0 === (n = o.set(t, n, i)) || (l[e] = n))))
            }
        },
        css: function (t, e, n, i) {
            var r, s, o, a = dt.camelCase(e);
            return e = dt.cssProps[a] || (dt.cssProps[a] = I(a) || a), o = dt.cssHooks[e] || dt.cssHooks[a], o && "get" in o && (r = o.get(t, !0, n)), void 0 === r && (r = E(t, e, i)), "normal" === r && e in le && (r = le[e]), "" === n || n ? (s = parseFloat(r), n === !0 || isFinite(s) ? s || 0 : r) : r
        }
    }), dt.each(["height", "width"], function (t, e) {
        dt.cssHooks[e] = {
            get: function (t, n, i) {
                return n ? !oe.test(dt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? O(t, e, i) : Wt(t, ae, function () {
                    return O(t, e, i)
                }) : void 0
            },
            set: function (t, n, i) {
                var r, s = i && se(t),
                    o = i && N(t, e, i, "border-box" === dt.css(t, "boxSizing", !1, s), s);
                return o && (r = Ft.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n, n = dt.css(t, e)), P(t, n, o)
            }
        }
    }), dt.cssHooks.marginLeft = M(ct.reliableMarginLeft, function (t, e) {
        return e ? (parseFloat(E(t, "marginLeft")) || t.getBoundingClientRect().left - Wt(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        })) + "px" : void 0
    }), dt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        dt.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[t + zt[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        }, ie.test(t) || (dt.cssHooks[t + e].set = P)
    }), dt.fn.extend({
        css: function (t, e) {
            return Mt(this, function (t, e, n) {
                var i, r, s = {},
                    o = 0;
                if (dt.isArray(e)) {
                    for (i = se(t), r = e.length; r > o; o++) s[e[o]] = dt.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? dt.style(t, e, n) : dt.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }), dt.Tween = H, H.prototype = {
        constructor: H,
        init: function (t, e, n, i, r, s) {
            this.elem = t, this.prop = n, this.easing = r || dt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = s || (dt.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = H.propHooks[this.prop];
            return t && t.get ? t.get(this) : H.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = H.propHooks[this.prop];
            return this.options.duration ? this.pos = e = dt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
        }
    }, H.prototype.init.prototype = H.prototype, H.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = dt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
            },
            set: function (t) {
                dt.fx.step[t.prop] ? dt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[dt.cssProps[t.prop]] && !dt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : dt.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, dt.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, dt.fx = H.prototype.init, dt.fx.step = {};
    var he, de, fe = /^(?:toggle|show|hide)$/,
        pe = /queueHooks$/;
    dt.Animation = dt.extend(L, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return f(n.elem, t, Ft.exec(e), n), n
                }]
            },
            tweener: function (t, e) {
                dt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(Tt);
                for (var n, i = 0, r = t.length; r > i; i++) n = t[i], L.tweeners[n] = L.tweeners[n] || [], L.tweeners[n].unshift(e)
            },
            prefilters: [W],
            prefilter: function (t, e) {
                e ? L.prefilters.unshift(t) : L.prefilters.push(t)
            }
        }), dt.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? dt.extend({}, t) : {
                complete: n || !n && e || dt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !dt.isFunction(e) && e
            };
            return dt.fx.off || Z.hidden ? i.duration = 0 : i.duration = "number" == typeof i.duration ? i.duration : i.duration in dt.fx.speeds ? dt.fx.speeds[i.duration] : dt.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                dt.isFunction(i.old) && i.old.call(this), i.queue && dt.dequeue(this, i.queue)
            }, i
        }, dt.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(Rt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function (t, e, n, i) {
                var r = dt.isEmptyObject(t),
                    s = dt.speed(e, n, i),
                    o = function () {
                        var e = L(this, dt.extend({}, t), s);
                        (r || Pt.get(this, "finish")) && e.stop(!0)
                    };
                return o.finish = o, r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
            },
            stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0,
                        r = null != t && t + "queueHooks",
                        s = dt.timers,
                        o = Pt.get(this);
                    if (r) o[r] && o[r].stop && i(o[r]);
                    else
                        for (r in o) o[r] && o[r].stop && pe.test(r) && i(o[r]);
                    for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n), e = !1, s.splice(r, 1));
                    !e && n || dt.dequeue(this, t)
                })
            },
            finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = Pt.get(this),
                        i = n[t + "queue"],
                        r = n[t + "queueHooks"],
                        s = dt.timers,
                        o = i ? i.length : 0;
                    for (n.finish = !0, dt.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                        s.splice(e, 1));
                    for (e = 0; o > e; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), dt.each(["toggle", "show", "hide"], function (t, e) {
            var n = dt.fn[e];
            dt.fn[e] = function (t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(z(e, !0), t, i, r)
            }
        }), dt.each({
            slideDown: z("show"),
            slideUp: z("hide"),
            slideToggle: z("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (t, e) {
            dt.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), dt.timers = [], dt.fx.tick = function () {
            var t, e = 0,
                n = dt.timers;
            for (he = dt.now(); e < n.length; e++) t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || dt.fx.stop(), he = void 0
        }, dt.fx.timer = function (t) {
            dt.timers.push(t), t() ? dt.fx.start() : dt.timers.pop()
        }, dt.fx.interval = 13, dt.fx.start = function () {
            de || (de = t.requestAnimationFrame ? t.requestAnimationFrame(j) : t.setInterval(dt.fx.tick, dt.fx.interval))
        }, dt.fx.stop = function () {
            t.cancelAnimationFrame ? t.cancelAnimationFrame(de) : t.clearInterval(de), de = null
        }, dt.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, dt.fn.delay = function (e, n) {
            return e = dt.fx ? dt.fx.speeds[e] || e : e, n = n || "fx", this.queue(n, function (n, i) {
                var r = t.setTimeout(n, e);
                i.stop = function () {
                    t.clearTimeout(r)
                }
            })
        },
        function () {
            var t = Z.createElement("input"),
                e = Z.createElement("select"),
                n = e.appendChild(Z.createElement("option"));
            t.type = "checkbox", ct.checkOn = "" !== t.value, ct.optSelected = n.selected, t = Z.createElement("input"), t.value = "t", t.type = "radio", ct.radioValue = "t" === t.value
        }();
    var me, ge = dt.expr.attrHandle;
    dt.fn.extend({
        attr: function (t, e) {
            return Mt(this, dt.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                dt.removeAttr(this, t)
            })
        }
    }), dt.extend({
        attr: function (t, e, n) {
            var i, r, s = t.nodeType;
            return 3 !== s && 8 !== s && 2 !== s ? "undefined" == typeof t.getAttribute ? dt.prop(t, e, n) : (1 === s && dt.isXMLDoc(t) || (r = dt.attrHooks[e.toLowerCase()] || (dt.expr.match.bool.test(e) ? me : void 0)), void 0 !== n ? null === n ? void dt.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = dt.find.attr(t, e), null == i ? void 0 : i)) : void 0
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!ct.radioValue && "radio" === e && dt.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i = 0,
                r = e && e.match(Tt);
            if (r && 1 === t.nodeType)
                for (; n = r[i++];) t.removeAttribute(n)
        }
    }), me = {
        set: function (t, e, n) {
            return e === !1 ? dt.removeAttr(t, n) : t.setAttribute(n, n), n
        }
    }, dt.each(dt.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = ge[e] || dt.find.attr;
        ge[e] = function (t, e, i) {
            var r, s, o = e.toLowerCase();
            return i || (s = ge[o], ge[o] = r, r = null != n(t, e, i) ? o : null, ge[o] = s), r
        }
    });
    var ve = /^(?:input|select|textarea|button)$/i,
        ye = /^(?:a|area)$/i;
    dt.fn.extend({
        prop: function (t, e) {
            return Mt(this, dt.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return this.each(function () {
                delete this[dt.propFix[t] || t]
            })
        }
    }), dt.extend({
        prop: function (t, e, n) {
            var i, r, s = t.nodeType;
            return 3 !== s && 8 !== s && 2 !== s ? (1 === s && dt.isXMLDoc(t) || (e = dt.propFix[e] || e, r = dt.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = dt.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ct.optSelected || (dt.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), dt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        dt.propFix[this.toLowerCase()] = this
    });
    var be = /[\t\r\n\f]/g;
    dt.fn.extend({
        addClass: function (t) {
            var e, n, i, r, s, o, a, l = 0;
            if (dt.isFunction(t)) return this.each(function (e) {
                dt(this).addClass(t.call(this, e, B(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match(Tt) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(be, " ")) {
                        for (o = 0; s = e[o++];) i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        a = dt.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, s, o, a, l = 0;
            if (dt.isFunction(t)) return this.each(function (e) {
                dt(this).removeClass(t.call(this, e, B(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(Tt) || []; n = this[l++];)
                    if (r = B(n), i = 1 === n.nodeType && (" " + r + " ").replace(be, " ")) {
                        for (o = 0; s = e[o++];)
                            for (; i.indexOf(" " + s + " ") > -1;) i = i.replace(" " + s + " ", " ");
                        a = dt.trim(i), r !== a && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : dt.isFunction(t) ? this.each(function (n) {
                dt(this).toggleClass(t.call(this, n, B(this), e), e)
            }) : this.each(function () {
                var e, i, r, s;
                if ("string" === n)
                    for (i = 0, r = dt(this), s = t.match(Tt) || []; e = s[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else void 0 !== t && "boolean" !== n || (e = B(this), e && Pt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : Pt.get(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + B(n) + " ").replace(be, " ").indexOf(e) > -1) return !0;
            return !1
        }
    });
    var $e = /\r/g,
        _e = /[\x20\t\r\n\f]+/g;
    dt.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = dt.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (r = i ? t.call(this, n, dt(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : dt.isArray(r) && (r = dt.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), e = dt.valHooks[this.type] || dt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = dt.valHooks[r.type] || dt.valHooks[r.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace($e, "") : null == n ? "" : n)) : void 0
        }
    }), dt.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = dt.find.attr(t, "value");
                    return null != e ? e : dt.trim(dt.text(t)).replace(_e, " ")
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, s = "select-one" === t.type, o = s ? null : [], a = s ? r + 1 : i.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                        if (n = i[l], (n.selected || l === r) && !n.disabled && (!n.parentNode.disabled || !dt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = dt(n).val(), s) return e;
                            o.push(e)
                        }
                    return o
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, s = dt.makeArray(e), o = r.length; o--;) i = r[o], (i.selected = dt.inArray(dt.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1), s
                }
            }
        }
    }), dt.each(["radio", "checkbox"], function () {
        dt.valHooks[this] = {
            set: function (t, e) {
                return dt.isArray(e) ? t.checked = dt.inArray(dt(t).val(), e) > -1 : void 0
            }
        }, ct.checkOn || (dt.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var we = /^(?:focusinfocus|focusoutblur)$/;
    dt.extend(dt.event, {
        trigger: function (e, n, i, r) {
            var s, o, a, l, u, c, h, d = [i || Z],
                f = at.call(e, "type") ? e.type : e,
                p = at.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !we.test(f + dt.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, e = e[dt.expando] ? e : new dt.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : dt.makeArray(n, [e]), h = dt.event.special[f] || {}, r || !h.trigger || h.trigger.apply(i, n) !== !1)) {
                if (!r && !h.noBubble && !dt.isWindow(i)) {
                    for (l = h.delegateType || f, we.test(l + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                    a === (i.ownerDocument || Z) && d.push(a.defaultView || a.parentWindow || t)
                }
                for (s = 0;
                    (o = d[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : h.bindType || f, c = (Pt.get(o, "events") || {})[e.type] && Pt.get(o, "handle"), c && c.apply(o, n), c = u && o[u], c && c.apply && It(o) && (e.result = c.apply(o, n), e.result === !1 && e.preventDefault());
                return e.type = f, r || e.isDefaultPrevented() || h._default && h._default.apply(d.pop(), n) !== !1 || !It(i) || u && dt.isFunction(i[f]) && !dt.isWindow(i) && (a = i[u], a && (i[u] = null), dt.event.triggered = f, i[f](), dt.event.triggered = void 0, a && (i[u] = a)), e.result
            }
        },
        simulate: function (t, e, n) {
            var i = dt.extend(new dt.Event, n, {
                type: t,
                isSimulated: !0
            });
            dt.event.trigger(i, null, e)
        }
    }), dt.fn.extend({
        trigger: function (t, e) {
            return this.each(function () {
                dt.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            return n ? dt.event.trigger(t, e, n, !0) : void 0
        }
    }), dt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
        dt.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), dt.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), ct.focusin = "onfocusin" in t, ct.focusin || dt.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            dt.event.simulate(e, t.target, dt.event.fix(t))
        };
        dt.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = Pt.access(i, e);
                r || i.addEventListener(t, n, !0), Pt.access(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = Pt.access(i, e) - 1;
                r ? Pt.access(i, e, r) : (i.removeEventListener(t, n, !0), Pt.remove(i, e))
            }
        }
    });
    var xe = t.location,
        Ce = dt.now(),
        ke = /\?/;
    dt.parseXML = function (e) {
        var n;
        if (!e || "string" != typeof e) return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || dt.error("Invalid XML: " + e), n
    };
    var De = /\[\]$/,
        Se = /\r?\n/g,
        Te = /^(?:submit|button|image|reset|file)$/i,
        Ae = /^(?:input|select|textarea|keygen)/i;
    dt.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                var n = dt.isFunction(e) ? e() : e;
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (dt.isArray(t) || t.jquery && !dt.isPlainObject(t)) dt.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) V(n, t[n], e, r);
        return i.join("&")
    }, dt.fn.extend({
        serialize: function () {
            return dt.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = dt.prop(this, "elements");
                return t ? dt.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !dt(this).is(":disabled") && Ae.test(this.nodeName) && !Te.test(t) && (this.checked || !Lt.test(t))
            }).map(function (t, e) {
                var n = dt(this).val();
                return null == n ? null : dt.isArray(n) ? dt.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(Se, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Se, "\r\n")
                }
            }).get()
        }
    });
    var Ee = /%20/g,
        Me = /#.*$/,
        Ie = /([?&])_=[^&]*/,
        Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ne = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Oe = /^(?:GET|HEAD)$/,
        He = /^\/\//,
        je = {},
        Fe = {},
        ze = "*/".concat("*"),
        Re = Z.createElement("a");
    Re.href = xe.href, dt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xe.href,
            type: "GET",
            isLocal: Ne.test(xe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ze,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": dt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? K(K(t, dt.ajaxSettings), e) : K(dt.ajaxSettings, t)
        },
        ajaxPrefilter: U(je),
        ajaxTransport: U(Fe),
        ajax: function (e, n) {
            function i(e, n, i, a) {
                var u, d, f, $, _, w = n;
                c || (c = !0, l && t.clearTimeout(l), r = void 0, o = a || "", x.readyState = e > 0 ? 4 : 0, u = e >= 200 && 300 > e || 304 === e, i && ($ = G(p, x, i)), $ = X(p, $, x, u), u ? (p.ifModified && (_ = x.getResponseHeader("Last-Modified"), _ && (dt.lastModified[s] = _), _ = x.getResponseHeader("etag"), _ && (dt.etag[s] = _)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = $.state, d = $.data, f = $.error, u = !f)) : (f = w, !e && w || (w = "error", 0 > e && (e = 0))), x.status = e, x.statusText = (n || w) + "", u ? v.resolveWith(m, [d, w, x]) : v.rejectWith(m, [x, w, f]), x.statusCode(b), b = void 0, h && g.trigger(u ? "ajaxSuccess" : "ajaxError", [x, p, u ? d : f]), y.fireWith(m, [x, w]), h && (g.trigger("ajaxComplete", [x, p]), --dt.active || dt.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = void 0), n = n || {};
            var r, s, o, a, l, u, c, h, d, f, p = dt.ajaxSetup({}, n),
                m = p.context || p,
                g = p.context && (m.nodeType || m.jquery) ? dt(m) : dt.event,
                v = dt.Deferred(),
                y = dt.Callbacks("once memory"),
                b = p.statusCode || {},
                $ = {},
                _ = {},
                w = "canceled",
                x = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (c) {
                            if (!a)
                                for (a = {}; e = Pe.exec(o);) a[e[1].toLowerCase()] = e[2];
                            e = a[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return c ? o : null
                    },
                    setRequestHeader: function (t, e) {
                        return null == c && (t = _[t.toLowerCase()] = _[t.toLowerCase()] || t, $[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return null == c && (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (c) x.always(t[x.status]);
                            else
                                for (e in t) b[e] = [b[e], t[e]];
                        return this
                    },
                    abort: function (t) {
                        var e = t || w;
                        return r && r.abort(e), i(0, e), this
                    }
                };
            if (v.promise(x), p.url = ((e || p.url || xe.href) + "").replace(He, xe.protocol + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = (p.dataType || "*").toLowerCase().match(Tt) || [""], null == p.crossDomain) {
                u = Z.createElement("a");
                try {
                    u.href = p.url, u.href = u.href, p.crossDomain = Re.protocol + "//" + Re.host != u.protocol + "//" + u.host
                } catch (C) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = dt.param(p.data, p.traditional)), Y(je, p, n, x), c) return x;
            h = dt.event && p.global, h && 0 === dt.active++ && dt.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Oe.test(p.type), s = p.url.replace(Me, ""), p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ee, "+")) : (f = p.url.slice(s.length), p.data && (s += (ke.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (s = s.replace(Ie, ""), f = (ke.test(s) ? "&" : "?") + "_=" + Ce++ + f), p.url = s + f), p.ifModified && (dt.lastModified[s] && x.setRequestHeader("If-Modified-Since", dt.lastModified[s]), dt.etag[s] && x.setRequestHeader("If-None-Match", dt.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : p.accepts["*"]);
            for (d in p.headers) x.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (p.beforeSend.call(m, x, p) === !1 || c)) return x.abort();
            if (w = "abort", y.add(p.complete), x.done(p.success), x.fail(p.error), r = Y(Fe, p, n, x)) {
                if (x.readyState = 1, h && g.trigger("ajaxSend", [x, p]), c) return x;
                p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                    x.abort("timeout")
                }, p.timeout));
                try {
                    c = !1, r.send($, i)
                } catch (C) {
                    if (c) throw C;
                    i(-1, C)
                }
            } else i(-1, "No Transport");
            return x
        },
        getJSON: function (t, e, n) {
            return dt.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return dt.get(t, void 0, e, "script")
        }
    }), dt.each(["get", "post"], function (t, e) {
        dt[e] = function (t, n, i, r) {
            return dt.isFunction(n) && (r = r || i, i = n, n = void 0), dt.ajax(dt.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, dt.isPlainObject(t) && t))
        }
    }), dt._evalUrl = function (t) {
        return dt.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, dt.fn.extend({
        wrapAll: function (t) {
            var e;
            return this[0] && (dt.isFunction(t) && (t = t.call(this[0])), e = dt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                return t
            }).append(this)), this
        },
        wrapInner: function (t) {
            return dt.isFunction(t) ? this.each(function (e) {
                dt(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = dt(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = dt.isFunction(t);
            return this.each(function (n) {
                dt(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function (t) {
            return this.parent(t).not("body").each(function () {
                dt(this).replaceWith(this.childNodes)
            }), this
        }
    }), dt.expr.pseudos.hidden = function (t) {
        return !dt.expr.pseudos.visible(t)
    }, dt.expr.pseudos.visible = function (t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }, dt.ajaxSettings.xhr = function () {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    };
    var We = {
            0: 200,
            1223: 204
        },
        qe = dt.ajaxSettings.xhr();
    ct.cors = !!qe && "withCredentials" in qe, ct.ajax = qe = !!qe, dt.ajaxTransport(function (e) {
        var n, i;
        return ct.cors || qe && !e.crossDomain ? {
            send: function (r, s) {
                var o, a = e.xhr();
                if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) a[o] = e.xhrFields[o];
                e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (o in r) a.setRequestHeader(o, r[o]);
                n = function (t) {
                    return function () {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(We[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function () {
                    4 === a.readyState && t.setTimeout(function () {
                        n && i()
                    })
                }, n = n("abort");
                try {
                    a.send(e.hasContent && e.data || null)
                } catch (l) {
                    if (n) throw l
                }
            },
            abort: function () {
                n && n()
            }
        } : void 0
    }), dt.ajaxPrefilter(function (t) {
        t.crossDomain && (t.contents.script = !1)
    }), dt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return dt.globalEval(t), t
            }
        }
    }), dt.ajaxPrefilter("script", function (t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
    }), dt.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n;
            return {
                send: function (i, r) {
                    e = dt("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function (t) {
                        e.remove(), n = null, t && r("error" === t.type ? 404 : 200, t.type)
                    }), Z.head.appendChild(e[0])
                },
                abort: function () {
                    n && n()
                }
            }
        }
    });
    var Le = [],
        Be = /(=)\?(?=&|$)|\?\?/;
    dt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = Le.pop() || dt.expando + "_" + Ce++;
            return this[t] = !0, t
        }
    }), dt.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, s, o, a = e.jsonp !== !1 && (Be.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Be.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = dt.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Be, "$1" + r) : e.jsonp !== !1 && (e.url += (ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || dt.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", s = t[r], t[r] = function () {
            o = arguments
        }, i.always(function () {
            void 0 === s ? dt(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = n.jsonpCallback, Le.push(r)), o && dt.isFunction(s) && s(o[0]), o = s = void 0
        }), "script") : void 0
    }), ct.createHTMLDocument = function () {
        var t = Z.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
    }(), dt.parseHTML = function (t, e, n) {
        if ("string" != typeof t) return [];
        "boolean" == typeof e && (n = e, e = !1);
        var i, r, s;
        return e || (ct.createHTMLDocument ? (e = Z.implementation.createHTMLDocument(""), i = e.createElement("base"), i.href = Z.location.href, e.head.appendChild(i)) : e = Z), r = _t.exec(t), s = !n && [], r ? [e.createElement(r[1])] : (r = y([t], e, s), s && s.length && dt(s).remove(), dt.merge([], r.childNodes))
    }, dt.fn.load = function (t, e, n) {
        var i, r, s, o = this,
            a = t.indexOf(" ");
        return a > -1 && (i = dt.trim(t.slice(a)), t = t.slice(0, a)), dt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && dt.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            s = arguments, o.html(i ? dt("<div>").append(dt.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            o.each(function () {
                n.apply(this, s || [t.responseText, e, t])
            })
        }), this
    }, dt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        dt.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), dt.expr.pseudos.animated = function (t) {
        return dt.grep(dt.timers, function (e) {
            return t === e.elem
        }).length
    }, dt.offset = {
        setOffset: function (t, e, n) {
            var i, r, s, o, a, l, u, c = dt.css(t, "position"),
                h = dt(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = h.offset(), s = dt.css(t, "top"), l = dt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1, u ? (i = h.position(), o = i.top, r = i.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), dt.isFunction(e) && (e = e.call(t, n, dt.extend({}, a))), null != e.top && (d.top = e.top - a.top + o), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : h.css(d)
        }
    }, dt.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                dt.offset.setOffset(this, t, e)
            });
            var e, n, i, r, s = this[0];
            return s ? s.getClientRects().length ? (i = s.getBoundingClientRect(), i.width || i.height ? (r = s.ownerDocument, n = J(r), e = r.documentElement, {
                top: i.top + n.pageYOffset - e.clientTop,
                left: i.left + n.pageXOffset - e.clientLeft
            }) : i) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === dt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), dt.nodeName(t[0], "html") || (i = t.offset()), i = {
                    top: i.top + dt.css(t[0], "borderTopWidth", !0),
                    left: i.left + dt.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: e.top - i.top - dt.css(n, "marginTop", !0),
                    left: e.left - i.left - dt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && "static" === dt.css(t, "position");) t = t.offsetParent;
                return t || Kt
            })
        }
    }), dt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = "pageYOffset" === e;
        dt.fn[t] = function (i) {
            return Mt(this, function (t, i, r) {
                var s = J(t);
                return void 0 === r ? s ? s[e] : t[i] : void(s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }), dt.each(["top", "left"], function (t, e) {
        dt.cssHooks[e] = M(ct.pixelPosition, function (t, n) {
            return n ? (n = E(t, e), re.test(n) ? dt(t).position()[e] + "px" : n) : void 0
        })
    }), dt.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        dt.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            dt.fn[i] = function (r, s) {
                var o = arguments.length && (n || "boolean" != typeof r),
                    a = n || (r === !0 || s === !0 ? "margin" : "border");
                return Mt(this, function (e, n, r) {
                    var s;
                    return dt.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? dt.css(e, n, a) : dt.style(e, n, r, a)
                }, e, o ? r : void 0, o)
            }
        })
    }), dt.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), dt.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return dt
    });
    var Ve = t.jQuery,
        Ue = t.$;
    return dt.noConflict = function (e) {
        return t.$ === dt && (t.$ = Ue), e && t.jQuery === dt && (t.jQuery = Ve), dt
    }, e || (t.jQuery = t.$ = dt), dt
}),
function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e(e, i) {
        var r, s, o, a = e.nodeName.toLowerCase();
        return "area" === a ? (r = e.parentNode, s = r.name, e.href && s && "map" === r.nodeName.toLowerCase() ? (o = t("img[usemap='#" + s + "']")[0], !!o && n(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(a) ? !e.disabled : "a" === a ? e.href || i : i) && n(e)
    }

    function n(e) {
        return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
            return "hidden" === t.css(this, "visibility")
        }).length
    }

    function i(t) {
        for (var e, n; t.length && t[0] !== document;) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (n = parseInt(t.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
            t = t.parent()
        }
        return 0
    }

    function r() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(e) {
        var n = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.delegate(n, "mouseout", function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).delegate(n, "mouseover", o)
    }

    function o() {
        t.datepicker._isDisabledDatepicker(v.inline ? v.dpDiv.parent()[0] : v.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function a(e, n) {
        t.extend(e, n);
        for (var i in n) null == n[i] && (e[i] = n[i]);
        return e
    }

    function l(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.extend(t.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), t.fn.extend({
        scrollParent: function (e) {
            var n = this.css("position"),
                i = "absolute" === n,
                r = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                s = this.parents().filter(function () {
                    var e = t(this);
                    return i && "static" === e.css("position") ? !1 : r.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                }).eq(0);
            return "fixed" !== n && s.length ? s : t(this[0].ownerDocument || document)
        },
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(),
        removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (n) {
                return !!t.data(n, e)
            }
        }) : function (e, n, i) {
            return !!t.data(e, i[3])
        },
        focusable: function (n) {
            return e(n, !isNaN(t.attr(n, "tabindex")))
        },
        tabbable: function (n) {
            var i = t.attr(n, "tabindex"),
                r = isNaN(i);
            return (r || i >= 0) && e(n, !r)
        }
    }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, n) {
        function i(e, n, i, s) {
            return t.each(r, function () {
                n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), s && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), n
        }
        var r = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            s = n.toLowerCase(),
            o = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
        t.fn["inner" + n] = function (e) {
            return void 0 === e ? o["inner" + n].call(this) : this.each(function () {
                t(this).css(s, i(this, e) + "px")
            })
        }, t.fn["outer" + n] = function (e, r) {
            return "number" != typeof e ? o["outer" + n].call(this, e) : this.each(function () {
                t(this).css(s, i(this, e, !0, r) + "px")
            })
        }
    }), t.fn.addBack || (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
        return function (n) {
            return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
        }
    }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
        focus: function (e) {
            return function (n, i) {
                return "number" == typeof n ? this.each(function () {
                    var e = this;
                    setTimeout(function () {
                        t(e).focus(), i && i.call(e)
                    }, n)
                }) : e.apply(this, arguments)
            }
        }(t.fn.focus),
        disableSelection: function () {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.bind(t + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            }
        }(),
        enableSelection: function () {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function (e) {
            if (void 0 !== e) return this.css("zIndex", e);
            if (this.length)
                for (var n, i, r = t(this[0]); r.length && r[0] !== document;) {
                    if (n = r.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    r = r.parent()
                }
            return 0
        }
    }), t.ui.plugin = {
        add: function (e, n, i) {
            var r, s = t.ui[e].prototype;
            for (r in i) s.plugins[r] = s.plugins[r] || [], s.plugins[r].push([n, i[r]])
        },
        call: function (t, e, n, i) {
            var r, s = t.plugins[e];
            if (s && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (r = 0; s.length > r; r++) t.options[s[r][0]] && s[r][1].apply(t.element, n)
        }
    };
    var u = 0,
        c = Array.prototype.slice;
    t.cleanData = function (e) {
        return function (n) {
            var i, r, s;
            for (s = 0; null != (r = n[s]); s++) try {
                i = t._data(r, "events"), i && i.remove && t(r).triggerHandler("remove")
            } catch (o) {}
            e(n)
        }
    }(t.cleanData), t.widget = function (e, n, i) {
        var r, s, o, a, l = {},
            u = e.split(".")[0];
        return e = e.split(".")[1], r = u + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][r.toLowerCase()] = function (e) {
            return !!t.data(e, r)
        }, t[u] = t[u] || {}, s = t[u][e], o = t[u][e] = function (t, e) {
            return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e)
        }, t.extend(o, s, {
            version: i.version,
            _proto: t.extend({}, i),
            _childConstructors: []
        }), a = new n, a.options = t.widget.extend({}, a.options), t.each(i, function (e, i) {
            return t.isFunction(i) ? void(l[e] = function () {
                var t = function () {
                        return n.prototype[e].apply(this, arguments)
                    },
                    r = function (t) {
                        return n.prototype[e].apply(this, t)
                    };
                return function () {
                    var e, n = this._super,
                        s = this._superApply;
                    return this._super = t, this._superApply = r, e = i.apply(this, arguments), this._super = n, this._superApply = s, e
                }
            }()) : void(l[e] = i)
        }), o.prototype = t.widget.extend(a, {
            widgetEventPrefix: s ? a.widgetEventPrefix || e : e
        }, l, {
            constructor: o,
            namespace: u,
            widgetName: e,
            widgetFullName: r
        }), s ? (t.each(s._childConstructors, function (e, n) {
            var i = n.prototype;
            t.widget(i.namespace + "." + i.widgetName, o, n._proto)
        }), delete s._childConstructors) : n._childConstructors.push(o), t.widget.bridge(e, o), o
    }, t.widget.extend = function (e) {
        for (var n, i, r = c.call(arguments, 1), s = 0, o = r.length; o > s; s++)
            for (n in r[s]) i = r[s][n], r[s].hasOwnProperty(n) && void 0 !== i && (e[n] = t.isPlainObject(i) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], i) : t.widget.extend({}, i) : i);
        return e
    }, t.widget.bridge = function (e, n) {
        var i = n.prototype.widgetFullName || e;
        t.fn[e] = function (r) {
            var s = "string" == typeof r,
                o = c.call(arguments, 1),
                a = this;
            return s ? this.each(function () {
                var n, s = t.data(this, i);
                return "instance" === r ? (a = s, !1) : s ? t.isFunction(s[r]) && "_" !== r.charAt(0) ? (n = s[r].apply(s, o), n !== s && void 0 !== n ? (a = n && n.jquery ? a.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
            }) : (o.length && (r = t.widget.extend.apply(null, [r].concat(o))),
                this.each(function () {
                    var e = t.data(this, i);
                    e ? (e.option(r || {}), e._init && e._init()) : t.data(this, i, new n(r, this))
                })), a
        }
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function (e, n) {
            n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = u++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === n && this.destroy()
                }
            }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, n) {
            var i, r, s, o = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e)
                if (o = {}, i = e.split("."), e = i.shift(), i.length) {
                    for (r = o[e] = t.widget.extend({}, this.options[e]), s = 0; i.length - 1 > s; s++) r[i[s]] = r[i[s]] || {}, r = r[i[s]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === r[e] ? null : r[e];
                    r[e] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    o[e] = n
                }
            return this._setOptions(o), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function () {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function () {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function (e, n, i) {
            var r, s = this;
            "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = r = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), t.each(i, function (i, o) {
                function a() {
                    return e || s.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? s[o] : o).apply(s, arguments) : void 0
                }
                "string" != typeof o && (a.guid = o.guid = o.guid || a.guid || t.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/),
                    u = l[1] + s.eventNamespace,
                    c = l[2];
                c ? r.delegate(c, u, a) : n.bind(u, a)
            })
        },
        _off: function (e, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(n).undelegate(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            function n() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }
            var i = this;
            return setTimeout(n, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function (e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function (e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function (e, n, i) {
            var r, s, o = this.options[e];
            if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], s = n.originalEvent)
                for (r in s) r in n || (n[r] = s[r]);
            return this.element.trigger(n, i), !(t.isFunction(o) && o.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function (e, n) {
        t.Widget.prototype["_" + e] = function (i, r, s) {
            "string" == typeof r && (r = {
                effect: r
            });
            var o, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : e;
            r = r || {}, "number" == typeof r && (r = {
                duration: r
            }), o = !t.isEmptyObject(r), r.complete = s, r.delay && i.delay(r.delay), o && t.effects && t.effects.effect[a] ? i[e](r) : a !== e && i[a] ? i[a](r.duration, r.easing, s) : i.queue(function (n) {
                t(this)[e](), s && s.call(i[0]), n()
            })
        }
    }), t.widget;
    var h = !1;
    t(document).mouseup(function () {
            h = !1
        }), t.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function (t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function (n) {
                    return !0 === t.data(n.target, e.widgetName + ".preventClickEvent") ? (t.removeData(n.target, e.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (e) {
                if (!h) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                    var n = this,
                        i = 1 === e.which,
                        r = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;
                    return i && !r && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function (t) {
                        return n._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), h = !0, !0)) : !0
                }
            },
            _mouseMove: function (e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                    if (!e.which) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function (e) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), h = !1, !1
            },
            _mouseDistanceMet: function (t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0
            }
        }),
        function () {
            function e(t, e, n) {
                return [parseFloat(t[0]) * (f.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (f.test(t[1]) ? n / 100 : 1)]
            }

            function n(e, n) {
                return parseInt(t.css(e, n), 10) || 0
            }

            function i(e) {
                var n = e[0];
                return 9 === n.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(n) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            t.ui = t.ui || {};
            var r, s, o = Math.max,
                a = Math.abs,
                l = Math.round,
                u = /left|center|right/,
                c = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                d = /^\w+/,
                f = /%$/,
                p = t.fn.position;
            t.position = {
                    scrollbarWidth: function () {
                        if (void 0 !== r) return r;
                        var e, n, i = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = i.children()[0];
                        return t("body").append(i), e = s.offsetWidth, i.css("overflow", "scroll"), n = s.offsetWidth, e === n && (n = i[0].clientWidth), i.remove(), r = e - n
                    },
                    getScrollInfo: function (e) {
                        var n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            r = "scroll" === n || "auto" === n && e.width < e.element[0].scrollWidth,
                            s = "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight;
                        return {
                            width: s ? t.position.scrollbarWidth() : 0,
                            height: r ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function (e) {
                        var n = t(e || window),
                            i = t.isWindow(n[0]),
                            r = !!n[0] && 9 === n[0].nodeType;
                        return {
                            element: n,
                            isWindow: i,
                            isDocument: r,
                            offset: n.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: n.scrollLeft(),
                            scrollTop: n.scrollTop(),
                            width: i || r ? n.width() : n.outerWidth(),
                            height: i || r ? n.height() : n.outerHeight()
                        }
                    }
                }, t.fn.position = function (r) {
                    if (!r || !r.of) return p.apply(this, arguments);
                    r = t.extend({}, r);
                    var f, m, g, v, y, b, $ = t(r.of),
                        _ = t.position.getWithinInfo(r.within),
                        w = t.position.getScrollInfo(_),
                        x = (r.collision || "flip").split(" "),
                        C = {};
                    return b = i($), $[0].preventDefault && (r.at = "left top"), m = b.width, g = b.height, v = b.offset, y = t.extend({}, v), t.each(["my", "at"], function () {
                        var t, e, n = (r[this] || "").split(" ");
                        1 === n.length && (n = u.test(n[0]) ? n.concat(["center"]) : c.test(n[0]) ? ["center"].concat(n) : ["center", "center"]), n[0] = u.test(n[0]) ? n[0] : "center", n[1] = c.test(n[1]) ? n[1] : "center", t = h.exec(n[0]), e = h.exec(n[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], r[this] = [d.exec(n[0])[0], d.exec(n[1])[0]]
                    }), 1 === x.length && (x[1] = x[0]), "right" === r.at[0] ? y.left += m : "center" === r.at[0] && (y.left += m / 2), "bottom" === r.at[1] ? y.top += g : "center" === r.at[1] && (y.top += g / 2), f = e(C.at, m, g), y.left += f[0], y.top += f[1], this.each(function () {
                        var i, u, c = t(this),
                            h = c.outerWidth(),
                            d = c.outerHeight(),
                            p = n(this, "marginLeft"),
                            b = n(this, "marginTop"),
                            k = h + p + n(this, "marginRight") + w.width,
                            D = d + b + n(this, "marginBottom") + w.height,
                            S = t.extend({}, y),
                            T = e(C.my, c.outerWidth(), c.outerHeight());
                        "right" === r.my[0] ? S.left -= h : "center" === r.my[0] && (S.left -= h / 2), "bottom" === r.my[1] ? S.top -= d : "center" === r.my[1] && (S.top -= d / 2), S.left += T[0], S.top += T[1], s || (S.left = l(S.left), S.top = l(S.top)), i = {
                            marginLeft: p,
                            marginTop: b
                        }, t.each(["left", "top"], function (e, n) {
                            t.ui.position[x[e]] && t.ui.position[x[e]][n](S, {
                                targetWidth: m,
                                targetHeight: g,
                                elemWidth: h,
                                elemHeight: d,
                                collisionPosition: i,
                                collisionWidth: k,
                                collisionHeight: D,
                                offset: [f[0] + T[0], f[1] + T[1]],
                                my: r.my,
                                at: r.at,
                                within: _,
                                elem: c
                            })
                        }), r.using && (u = function (t) {
                            var e = v.left - S.left,
                                n = e + m - h,
                                i = v.top - S.top,
                                s = i + g - d,
                                l = {
                                    target: {
                                        element: $,
                                        left: v.left,
                                        top: v.top,
                                        width: m,
                                        height: g
                                    },
                                    element: {
                                        element: c,
                                        left: S.left,
                                        top: S.top,
                                        width: h,
                                        height: d
                                    },
                                    horizontal: 0 > n ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > s ? "top" : i > 0 ? "bottom" : "middle"
                                };
                            h > m && m > a(e + n) && (l.horizontal = "center"), d > g && g > a(i + s) && (l.vertical = "middle"), l.important = o(a(e), a(n)) > o(a(i), a(s)) ? "horizontal" : "vertical", r.using.call(this, t, l)
                        }), c.offset(t.extend(S, {
                            using: u
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function (t, e) {
                            var n, i = e.within,
                                r = i.isWindow ? i.scrollLeft : i.offset.left,
                                s = i.width,
                                a = t.left - e.collisionPosition.marginLeft,
                                l = r - a,
                                u = a + e.collisionWidth - s - r;
                            e.collisionWidth > s ? l > 0 && 0 >= u ? (n = t.left + l + e.collisionWidth - s - r, t.left += l - n) : t.left = u > 0 && 0 >= l ? r : l > u ? r + s - e.collisionWidth : r : l > 0 ? t.left += l : u > 0 ? t.left -= u : t.left = o(t.left - a, t.left)
                        },
                        top: function (t, e) {
                            var n, i = e.within,
                                r = i.isWindow ? i.scrollTop : i.offset.top,
                                s = e.within.height,
                                a = t.top - e.collisionPosition.marginTop,
                                l = r - a,
                                u = a + e.collisionHeight - s - r;
                            e.collisionHeight > s ? l > 0 && 0 >= u ? (n = t.top + l + e.collisionHeight - s - r, t.top += l - n) : t.top = u > 0 && 0 >= l ? r : l > u ? r + s - e.collisionHeight : r : l > 0 ? t.top += l : u > 0 ? t.top -= u : t.top = o(t.top - a, t.top)
                        }
                    },
                    flip: {
                        left: function (t, e) {
                            var n, i, r = e.within,
                                s = r.offset.left + r.scrollLeft,
                                o = r.width,
                                l = r.isWindow ? r.scrollLeft : r.offset.left,
                                u = t.left - e.collisionPosition.marginLeft,
                                c = u - l,
                                h = u + e.collisionWidth - o - l,
                                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                f = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                p = -2 * e.offset[0];
                            0 > c ? (n = t.left + d + f + p + e.collisionWidth - o - s, (0 > n || a(c) > n) && (t.left += d + f + p)) : h > 0 && (i = t.left - e.collisionPosition.marginLeft + d + f + p - l, (i > 0 || h > a(i)) && (t.left += d + f + p))
                        },
                        top: function (t, e) {
                            var n, i, r = e.within,
                                s = r.offset.top + r.scrollTop,
                                o = r.height,
                                l = r.isWindow ? r.scrollTop : r.offset.top,
                                u = t.top - e.collisionPosition.marginTop,
                                c = u - l,
                                h = u + e.collisionHeight - o - l,
                                d = "top" === e.my[1],
                                f = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                m = -2 * e.offset[1];
                            0 > c ? (i = t.top + f + p + m + e.collisionHeight - o - s, (0 > i || a(c) > i) && (t.top += f + p + m)) : h > 0 && (n = t.top - e.collisionPosition.marginTop + f + p + m - l, (n > 0 || h > a(n)) && (t.top += f + p + m))
                        }
                    },
                    flipfit: {
                        left: function () {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function () {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function () {
                    var e, n, i, r, o, a = document.getElementsByTagName("body")[0],
                        l = document.createElement("div");
                    e = document.createElement(a ? "div" : "body"), i = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, a && t.extend(i, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in i) e.style[o] = i[o];
                    e.appendChild(l), n = a || document.documentElement, n.insertBefore(e, n.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", r = t(l).offset().left, s = r > 10 && 11 > r, e.innerHTML = "", n.removeChild(e)
                }()
        }(), t.ui.position, t.widget("ui.accordion", {
            version: "1.11.4",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function () {
                var e = this.options.icons;
                e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var n = t.ui.keyCode,
                        i = this.headers.length,
                        r = this.headers.index(e.target),
                        s = !1;
                    switch (e.keyCode) {
                    case n.RIGHT:
                    case n.DOWN:
                        s = this.headers[(r + 1) % i];
                        break;
                    case n.LEFT:
                    case n.UP:
                        s = this.headers[(r - 1 + i) % i];
                        break;
                    case n.SPACE:
                    case n.ENTER:
                        this._eventHandler(e);
                        break;
                    case n.HOME:
                        s = this.headers[0];
                        break;
                    case n.END:
                        s = this.headers[i - 1]
                    }
                    s && (t(e.target).attr("tabIndex", -1), t(s).attr("tabIndex", 0), s.focus(), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
            },
            refresh: function () {
                var e = this.options;
                this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function () {
                var e, n = this.options,
                    i = n.heightStyle,
                    r = this.element.parent();
                this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
                    var e = t(this),
                        n = e.uniqueId().attr("id"),
                        i = e.next(),
                        r = i.uniqueId().attr("id");
                    e.attr("aria-controls", r), i.attr("aria-labelledby", n)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === i ? (e = r.height(), this.element.siblings(":visible").each(function () {
                    var n = t(this),
                        i = n.css("position");
                    "absolute" !== i && "fixed" !== i && (e -= n.outerHeight(!0))
                }), this.headers.each(function () {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === i && (e = 0, this.headers.next().each(function () {
                    e = Math.max(e, t(this).css("height", "").height())
                }).height(e))
            },
            _activate: function (e) {
                var n = this._findActive(e)[0];
                n !== this.active[0] && (n = n || this.active[0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var n = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), function (t, e) {
                    n[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (e) {
                var n = this.options,
                    i = this.active,
                    r = t(e.currentTarget),
                    s = r[0] === i[0],
                    o = s && n.collapsible,
                    a = o ? t() : r.next(),
                    l = i.next(),
                    u = {
                        oldHeader: i,
                        oldPanel: l,
                        newHeader: o ? t() : r,
                        newPanel: a
                    };
                e.preventDefault(), s && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = o ? !1 : this.headers.index(r), this.active = s ? t() : r, this._toggle(u), i.removeClass("ui-accordion-header-active ui-state-active"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), s || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var n = e.newPanel,
                    i = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = i, this.options.animate ? this._animate(n, i, e) : (i.hide(), n.show(), this._toggleComplete(e)), i.attr({
                    "aria-hidden": "true"
                }), i.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), n.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : n.length && this.headers.filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), n.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (t, e, n) {
                var i, r, s, o = this,
                    a = 0,
                    l = t.css("box-sizing"),
                    u = t.length && (!e.length || t.index() < e.index()),
                    c = this.options.animate || {},
                    h = u && c.down || c,
                    d = function () {
                        o._toggleComplete(n)
                    };
                return "number" == typeof h && (s = h), "string" == typeof h && (r = h), r = r || h.easing || c.easing, s = s || h.duration || c.duration, e.length ? t.length ? (i = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: s,
                    easing: r,
                    step: function (t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: s,
                    easing: r,
                    complete: d,
                    step: function (t, n) {
                        n.now = Math.round(t), "height" !== n.prop ? "content-box" === l && (a += n.now) : "content" !== o.options.heightStyle && (n.now = Math.round(i - e.outerHeight() - a), a = 0)
                    }
                })) : e.animate(this.hideProps, s, r, d) : t.animate(this.showProps, s, r, d)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        }), t.widget("ui.menu", {
            version: "1.11.4",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function () {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function (t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function (e) {
                        var n = t(e.target);
                        !this.mouseHandled && n.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), n.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function (e) {
                        if (!this.previousFilter) {
                            var n = t(e.currentTarget);
                            n.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, n)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function (t, e) {
                        var n = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, n)
                    },
                    blur: function (e) {
                        this._delay(function () {
                            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function (t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function () {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function (e) {
                var n, i, r, s, o = !0;
                switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    o = !1, i = this.previousFilter || "", r = String.fromCharCode(e.keyCode), s = !1, clearTimeout(this.filterTimer), r === i ? s = !0 : r = i + r, n = this._filterMenuItems(r), n = s && -1 !== n.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : n, n.length || (r = String.fromCharCode(e.keyCode), n = this._filterMenuItems(r)), n.length ? (this.focus(e, n), this.previousFilter = r, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
                }
                o && e.preventDefault()
            },
            _activate: function (t) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
            },
            refresh: function () {
                var e, n, i = this,
                    r = this.options.icons.submenu,
                    s = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function () {
                    var e = t(this),
                        n = e.parent(),
                        i = t("<span>").addClass("ui-menu-icon ui-icon " + r).data("ui-menu-submenu-carat", !0);
                    n.attr("aria-haspopup", "true").prepend(i), e.attr("aria-labelledby", n.attr("id"))
                }), e = s.add(this.element), n = e.find(this.options.items), n.not(".ui-menu-item").each(function () {
                    var e = t(this);
                    i._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                }), n.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), n.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function () {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function (t, e) {
                "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            focus: function (t, e) {
                var n, i;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), i = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                    this._close()
                }, this.delay), n = e.children(".ui-menu"), n.length && t && /^mouse/.test(t.type) && this._startOpening(n), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function (e) {
                var n, i, r, s, o, a;
                this._hasScroll() && (n = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, r = e.offset().top - this.activeMenu.offset().top - n - i, s = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = e.outerHeight(), 0 > r ? this.activeMenu.scrollTop(s + r) : r + a > o && this.activeMenu.scrollTop(s + r - o + a))
            },
            blur: function (t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function (t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function (e) {
                var n = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
            },
            collapseAll: function (e, n) {
                clearTimeout(this.timer), this.timer = this._delay(function () {
                    var i = n ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    i.length || (i = this.element), this._close(i), this.blur(e), this.activeMenu = i
                }, this.delay)
            },
            _close: function (t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function (e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function (t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function (t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function (t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function () {
                    this.focus(t, e)
                }))
            },
            next: function (t) {
                this._move("next", "first", t)
            },
            previous: function (t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function () {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function () {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function (t, e, n) {
                var i;
                this.active && (i = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.find(this.options.items)[e]()), this.focus(n, i)
            },
            nextPage: function (e) {
                var n, i, r;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                    return n = t(this), 0 > n.offset().top - i - r
                }), this.focus(e, n)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function (e) {
                var n, i, r;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                    return n = t(this), n.offset().top - i + r > 0
                }), this.focus(e, n)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function () {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function (e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var n = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, n)
            },
            _filterMenuItems: function (e) {
                var n = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    i = RegExp("^" + n, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                    return i.test(t.trim(t(this).text()))
                })
            }
        }), t.widget("ui.autocomplete", {
            version: "1.11.4",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function () {
                var e, n, i, r = this.element[0].nodeName.toLowerCase(),
                    s = "textarea" === r,
                    o = "input" === r;
                this.isMultiLine = s ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[s || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function (r) {
                        if (this.element.prop("readOnly")) return e = !0, i = !0, void(n = !0);
                        e = !1, i = !1, n = !1;
                        var s = t.ui.keyCode;
                        switch (r.keyCode) {
                        case s.PAGE_UP:
                            e = !0, this._move("previousPage", r);
                            break;
                        case s.PAGE_DOWN:
                            e = !0, this._move("nextPage", r);
                            break;
                        case s.UP:
                            e = !0, this._keyEvent("previous", r);
                            break;
                        case s.DOWN:
                            e = !0, this._keyEvent("next", r);
                            break;
                        case s.ENTER:
                            this.menu.active && (e = !0, r.preventDefault(), this.menu.select(r));
                            break;
                        case s.TAB:
                            this.menu.active && this.menu.select(r);
                            break;
                        case s.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(r), r.preventDefault());
                            break;
                        default:
                            n = !0, this._searchTimeout(r)
                        }
                    },
                    keypress: function (i) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && i.preventDefault());
                        if (!n) {
                            var r = t.ui.keyCode;
                            switch (i.keyCode) {
                            case r.PAGE_UP:
                                this._move("previousPage", i);
                                break;
                            case r.PAGE_DOWN:
                                this._move("nextPage", i);
                                break;
                            case r.UP:
                                this._keyEvent("previous", i);
                                break;
                            case r.DOWN:
                                this._keyEvent("next", i)
                            }
                        }
                    },
                    input: function (t) {
                        return i ? (i = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function () {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function (t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function (e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                            delete this.cancelBlur
                        });
                        var n = this.menu.element[0];
                        t(e.target).closest(".ui-menu-item").length || this._delay(function () {
                            var e = this;
                            this.document.one("mousedown", function (i) {
                                i.target === e.element[0] || i.target === n || t.contains(n, i.target) || e.close()
                            })
                        })
                    },
                    menufocus: function (e, n) {
                        var i, r;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                            t(e.target).trigger(e.originalEvent)
                        })) : (r = n.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: r
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(r.value), i = n.item.attr("aria-label") || r.value, void(i && t.trim(i).length && (this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))))
                    },
                    menuselect: function (t, e) {
                        var n = e.item.data("ui-autocomplete-item"),
                            i = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function () {
                            this.previous = i, this.selectedItem = n
                        })), !1 !== this._trigger("select", t, {
                            item: n
                        }) && this._value(n.value), this.term = this._value(), this.close(t), this.selectedItem = n
                    }
                }), this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function () {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function (t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
            },
            _initSource: function () {
                var e, n, i = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function (n, i) {
                    i(t.ui.autocomplete.filter(e, n.term))
                }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function (e, r) {
                    i.xhr && i.xhr.abort(), i.xhr = t.ajax({
                        url: n,
                        data: e,
                        dataType: "json",
                        success: function (t) {
                            r(t)
                        },
                        error: function () {
                            r([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function (t) {
                clearTimeout(this.searching), this.searching = this._delay(function () {
                    var e = this.term === this._value(),
                        n = this.menu.element.is(":visible"),
                        i = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !n && !i) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function (t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function (t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function () {
                var e = ++this.requestIndex;
                return t.proxy(function (t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function (t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function (t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function (t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function (t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function (e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function (e) {
                var n = this.menu.element.empty();
                this._renderMenu(n, e), this.isNewMenu = !0, this.menu.refresh(), n.show(), this._resizeMenu(), n.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function () {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function (e, n) {
                var i = this;
                t.each(n, function (t, n) {
                    i._renderItemData(e, n)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function (e, n) {
                return t("<li>").text(n.label).appendTo(e)
            },
            _move: function (t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function () {
                return this.menu.element
            },
            _value: function () {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function (t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function (t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function (e, n) {
                var i = RegExp(t.ui.autocomplete.escapeRegex(n), "i");
                return t.grep(e, function (t) {
                    return i.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function (t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function (e) {
                var n;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (n = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))
            }
        }), t.ui.autocomplete;
    var d, f = "ui-button ui-widget ui-state-default ui-corner-all",
        p = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        m = function () {
            var e = t(this);
            setTimeout(function () {
                e.find(":ui-button").button("refresh")
            }, 1)
        },
        g = function (e) {
            var n = e.name,
                i = e.form,
                r = t([]);
            return n && (n = n.replace(/'/g, "\\'"), r = i ? t(i).find("[name='" + n + "'][type=radio]") : t("[name='" + n + "'][type=radio]", e.ownerDocument).filter(function () {
                return !this.form
            })), r
        };
    t.widget("ui.button", {
        version: "1.11.4",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, m), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var e = this,
                n = this.options,
                i = "checkbox" === this.type || "radio" === this.type,
                r = i ? "" : "ui-state-active";
            null === n.label && (n.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(f).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
                n.disabled || this === d && t(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function () {
                n.disabled || t(this).removeClass(r)
            }).bind("click" + this.eventNamespace, function (t) {
                n.disabled && (t.preventDefault(), t.stopImmediatePropagation())
            }), this._on({
                focus: function () {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function () {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), i && this.element.bind("change" + this.eventNamespace, function () {
                e.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                return n.disabled ? !1 : void 0
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
                if (n.disabled) return !1;
                t(this).addClass("ui-state-active"), e.buttonElement.attr("aria-pressed", "true");
                var i = e.element[0];
                g(i).not(i).map(function () {
                    return t(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
                return n.disabled ? !1 : (t(this).addClass("ui-state-active"), d = this, void e.document.one("mouseup", function () {
                    d = null
                }))
            }).bind("mouseup" + this.eventNamespace, function () {
                return n.disabled ? !1 : void t(this).removeClass("ui-state-active")
            }).bind("keydown" + this.eventNamespace, function (e) {
                return n.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
                t(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
                e.keyCode === t.ui.keyCode.SPACE && t(this).click()
            })), this._setOption("disabled", n.disabled), this._resetButton()
        },
        _determineButtonType: function () {
            var t, e, n;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        _destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(f + " ui-state-active " + p).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function (t, e) {
            return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && ("checkbox" === this.type || "radio" === this.type ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active")))) : void this._resetButton()
        },
        refresh: function () {
            var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? g(this.element[0]).each(function () {
                t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function () {
            if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
            var e = this.buttonElement.removeClass(p),
                n = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                i = this.options.icons,
                r = i.primary && i.secondary,
                s = [];
            i.primary || i.secondary ? (this.options.text && s.push("ui-button-text-icon" + (r ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (s.push(r ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(n)))) : s.push("ui-button-text-only"), e.addClass(s.join(" "))
        }
    }), t.widget("ui.buttonset", {
        version: "1.11.4",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (t, e) {
            "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
        },
        refresh: function () {
            var e = "rtl" === this.element.css("direction"),
                n = this.element.find(this.options.items),
                i = n.filter(":ui-button");
            n.not(":ui-button").button(), i.button("refresh"), this.buttons = n.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function () {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
                return t(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    }), t.ui.button, t.extend(t.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var v;
    t.extend(r.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return a(this._defaults, t || {}), this
        },
        _attachDatepicker: function (e, n) {
            var i, r, s;
            i = e.nodeName.toLowerCase(), r = "div" === i || "span" === i, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), s = this._newInst(t(e), r), s.settings = t.extend({}, n || {}), "input" === i ? this._connectDatepicker(e, s) : r && this._inlineDatepicker(e, s)
        },
        _newInst: function (e, n) {
            var i = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: i,
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: n,
                dpDiv: n ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, n) {
            var i = t(e);
            n.append = t([]), n.trigger = t([]), i.hasClass(this.markerClassName) || (this._attachments(i, n), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(n), t.data(e, "datepicker", n), n.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, n) {
            var i, r, s, o = this._get(n, "appendText"),
                a = this._get(n, "isRTL");
            n.append && n.append.remove(), o && (n.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[a ? "before" : "after"](n.append)), e.unbind("focus", this._showDatepicker), n.trigger && n.trigger.remove(), i = this._get(n, "showOn"), ("focus" === i || "both" === i) && e.focus(this._showDatepicker), ("button" === i || "both" === i) && (r = this._get(n, "buttonText"), s = this._get(n, "buttonImage"), n.trigger = t(this._get(n, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: s,
                alt: r,
                title: r
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(s ? t("<img/>").attr({
                src: s,
                alt: r,
                title: r
            }) : r)), e[a ? "before" : "after"](n.trigger), n.trigger.click(function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, n, i, r, s = new Date(2009, 11, 20),
                    o = this._get(t, "dateFormat");
                o.match(/[DM]/) && (e = function (t) {
                    for (n = 0, i = 0, r = 0; t.length > r; r++) t[r].length > n && (n = t[r].length, i = r);
                    return i
                }, s.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), s.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - s.getDay())), t.input.attr("size", this._formatDate(t, s).length)
            }
        },
        _inlineDatepicker: function (e, n) {
            var i = t(e);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(n.dpDiv), t.data(e, "datepicker", n), this._setDate(n, this._getDefaultDate(n), !0), this._updateDatepicker(n), this._updateAlternate(n), n.settings.disabled && this._disableDatepicker(e), n.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, n, i, r, s) {
            var o, l, u, c, h, d = this._dialogInst;
            return d || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, r || {}), n = n && n.constructor === Date ? this._formatDate(d, n) : n, this._dialogInput.val(n), this._pos = s ? s.length ? s : [s.pageX, s.pageY] : null, this._pos || (l = document.documentElement.clientWidth, u = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, u / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
        },
        _destroyDatepicker: function (e) {
            var n, i = t(e),
                r = t.data(e, "datepicker");
            i.hasClass(this.markerClassName) && (n = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === n ? (r.append.remove(), r.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === n || "span" === n) && i.removeClass(this.markerClassName).empty(), v === r && (v = null))
        },
        _enableDatepicker: function (e) {
            var n, i, r = t(e),
                s = t.data(e, "datepicker");
            r.hasClass(this.markerClassName) && (n = e.nodeName.toLowerCase(), "input" === n ? (e.disabled = !1, s.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var n, i, r = t(e),
                s = t.data(e, "datepicker");
            r.hasClass(this.markerClassName) && (n = e.nodeName.toLowerCase(), "input" === n ? (e.disabled = !0, s.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === n || "span" === n) && (i = r.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return t.data(e, "datepicker")
            } catch (n) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, n, i) {
            var r, s, o, l, u = this._getInst(e);
            return 2 === arguments.length && "string" == typeof n ? "defaults" === n ? t.extend({}, t.datepicker._defaults) : u ? "all" === n ? t.extend({}, u.settings) : this._get(u, n) : null : (r = n || {}, "string" == typeof n && (r = {}, r[n] = i), void(u && (this._curInst === u && this._hideDatepicker(), s = this._getDateDatepicker(e, !0), o = this._getMinMaxDate(u, "min"), l = this._getMinMaxDate(u, "max"), a(u.settings, r), null !== o && void 0 !== r.dateFormat && void 0 === r.minDate && (u.settings.minDate = this._formatDate(u, o)), null !== l && void 0 !== r.dateFormat && void 0 === r.maxDate && (u.settings.maxDate = this._formatDate(u, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), u), this._autoSize(u), this._setDate(u, s), this._updateAlternate(u), this._updateDatepicker(u))))
        },
        _changeDatepicker: function (t, e, n) {
            this._optionDatepicker(t, e, n)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var n = this._getInst(t);
            n && (this._setDate(n, e), this._updateDatepicker(n), this._updateAlternate(n))
        },
        _getDateDatepicker: function (t, e) {
            var n = this._getInst(t);
            return n && !n.inline && this._setDateFromField(n, e), n ? this._getDate(n) : null
        },
        _doKeyDown: function (e) {
            var n, i, r, s = t.datepicker._getInst(e.target),
                o = !0,
                a = s.dpDiv.is(".ui-datepicker-rtl");
            if (s._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
                t.datepicker._hideDatepicker(), o = !1;
                break;
            case 13:
                return r = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", s.dpDiv), r[0] && t.datepicker._selectDay(e.target, s.selectedMonth, s.selectedYear, r[0]), n = t.datepicker._get(s, "onSelect"), n ? (i = t.datepicker._formatDate(s), n.apply(s.input ? s.input[0] : null, [i, s])) : t.datepicker._hideDatepicker(), !1;
            case 27:
                t.datepicker._hideDatepicker();
                break;
            case 33:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(s, "stepBigMonths") : -t.datepicker._get(s, "stepMonths"), "M");
                break;
            case 34:
                t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(s, "stepBigMonths") : +t.datepicker._get(s, "stepMonths"), "M");
                break;
            case 35:
                (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
                break;
            case 36:
                (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
                break;
            case 37:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(s, "stepBigMonths") : -t.datepicker._get(s, "stepMonths"), "M");
                break;
            case 38:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
                break;
            case 39:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, a ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(s, "stepBigMonths") : +t.datepicker._get(s, "stepMonths"), "M");
                break;
            case 40:
                (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
                break;
            default:
                o = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
            o && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var n, i, r = t.datepicker._getInst(e.target);
            return t.datepicker._get(r, "constrainInput") ? (n = t.datepicker._possibleChars(t.datepicker._get(r, "dateFormat")), i = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > i || !n || n.indexOf(i) > -1) : void 0
        },
        _doKeyUp: function (e) {
            var n, i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try {
                n = t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)), n && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
            } catch (r) {}
            return !0
        },
        _showDatepicker: function (e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var n, r, s, o, l, u, c;
                n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), r = t.datepicker._get(n, "beforeShow"), s = r ? r.apply(e, [e, n]) : {}, s !== !1 && (a(n.settings, s), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), o = !1, t(e).parents().each(function () {
                    return o |= "fixed" === t(this).css("position"), !o
                }), l = {
                    left: t.datepicker._pos[0],
                    top: t.datepicker._pos[1]
                }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, o), n.dpDiv.css({
                    position: t.datepicker._inDialog && t.blockUI ? "static" : o ? "fixed" : "absolute",
                    display: "none",
                    left: l.left + "px",
                    top: l.top + "px"
                }), n.inline || (u = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[u] ? n.dpDiv.show(u, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[u || "show"](u ? c : null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4, v = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var n, i = this._getNumberOfMonths(e),
                r = i[1],
                s = 17,
                a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", s * r + "em"), e.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (n = e.yearshtml, setTimeout(function () {
                n === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), n = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (e, n, i) {
            var r = e.dpDiv.outerWidth(),
                s = e.dpDiv.outerHeight(),
                o = e.input ? e.input.outerWidth() : 0,
                a = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (i ? 0 : t(document).scrollLeft()),
                u = document.documentElement.clientHeight + (i ? 0 : t(document).scrollTop());
            return n.left -= this._get(e, "isRTL") ? r - o : 0, n.left -= i && n.left === e.input.offset().left ? t(document).scrollLeft() : 0, n.top -= i && n.top === e.input.offset().top + a ? t(document).scrollTop() : 0, n.left -= Math.min(n.left, n.left + r > l && l > r ? Math.abs(n.left + r - l) : 0), n.top -= Math.min(n.top, n.top + s > u && u > s ? Math.abs(s + a) : 0), n
        },
        _findPos: function (e) {
            for (var n, i = this._getInst(e), r = this._get(i, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[r ? "previousSibling" : "nextSibling"];
            return n = t(e).offset(), [n.left, n.top]
        },
        _hideDatepicker: function (e) {
            var n, i, r, s, o = this._curInst;
            !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (n = this._get(o, "showAnim"), i = this._get(o, "duration"), r = function () {
                t.datepicker._tidyDialog(o)
            }, t.effects && (t.effects.effect[n] || t.effects[n]) ? o.dpDiv.hide(n, t.datepicker._get(o, "showOptions"), i, r) : o.dpDiv["slideDown" === n ? "slideUp" : "fadeIn" === n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1, s = this._get(o, "onClose"), s && s.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var n = t(e.target),
                    i = t.datepicker._getInst(n[0]);
                (n[0].id !== t.datepicker._mainDivId && 0 === n.parents("#" + t.datepicker._mainDivId).length && !n.hasClass(t.datepicker.markerClassName) && !n.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || n.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== i) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, n, i) {
            var r = t(e),
                s = this._getInst(r[0]);
            this._isDisabledDatepicker(r[0]) || (this._adjustInstDate(s, n + ("M" === i ? this._get(s, "showCurrentAtPos") : 0), i), this._updateDatepicker(s))
        },
        _gotoToday: function (e) {
            var n, i = t(e),
                r = this._getInst(i[0]);
            this._get(r, "gotoCurrent") && r.currentDay ? (r.selectedDay = r.currentDay, r.drawMonth = r.selectedMonth = r.currentMonth, r.drawYear = r.selectedYear = r.currentYear) : (n = new Date, r.selectedDay = n.getDate(), r.drawMonth = r.selectedMonth = n.getMonth(), r.drawYear = r.selectedYear = n.getFullYear()), this._notifyChange(r), this._adjustDate(i)
        },
        _selectMonthYear: function (e, n, i) {
            var r = t(e),
                s = this._getInst(r[0]);
            s["selected" + ("M" === i ? "Month" : "Year")] = s["draw" + ("M" === i ? "Month" : "Year")] = parseInt(n.options[n.selectedIndex].value, 10), this._notifyChange(s), this._adjustDate(r)
        },
        _selectDay: function (e, n, i, r) {
            var s, o = t(e);
            t(r).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (s = this._getInst(o[0]), s.selectedDay = s.currentDay = t("a", r).html(), s.selectedMonth = s.currentMonth = n, s.selectedYear = s.currentYear = i, this._selectDate(e, this._formatDate(s, s.currentDay, s.currentMonth, s.currentYear)))
        },
        _clearDate: function (e) {
            var n = t(e);
            this._selectDate(n, "")
        },
        _selectDate: function (e, n) {
            var i, r = t(e),
                s = this._getInst(r[0]);
            n = null != n ? n : this._formatDate(s), s.input && s.input.val(n), this._updateAlternate(s), i = this._get(s, "onSelect"), i ? i.apply(s.input ? s.input[0] : null, [n, s]) : s.input && s.input.trigger("change"), s.inline ? this._updateDatepicker(s) : (this._hideDatepicker(), this._lastInput = s.input[0], "object" != typeof s.input[0] && s.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var n, i, r, s = this._get(e, "altField");
            s && (n = this._get(e, "altFormat") || this._get(e, "dateFormat"), i = this._getDate(e), r = this.formatDate(n, i, this._getFormatConfig(e)), t(s).each(function () {
                t(this).val(r)
            }))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, n = new Date(t.getTime());
            return n.setDate(n.getDate() + 4 - (n.getDay() || 7)), e = n.getTime(), n.setMonth(0), n.setDate(1), Math.floor(Math.round((e - n) / 864e5) / 7) + 1
        },
        parseDate: function (e, n, i) {
            if (null == e || null == n) throw "Invalid arguments";
            if (n = "object" == typeof n ? "" + n : n + "", "" === n) return null;
            var r, s, o, a, l = 0,
                u = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof u ? u : (new Date).getFullYear() % 100 + parseInt(u, 10),
                h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (i ? i.dayNames : null) || this._defaults.dayNames,
                f = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (i ? i.monthNames : null) || this._defaults.monthNames,
                m = -1,
                g = -1,
                v = -1,
                y = -1,
                b = !1,
                $ = function (t) {
                    var n = e.length > r + 1 && e.charAt(r + 1) === t;
                    return n && r++, n
                },
                _ = function (t) {
                    var e = $(t),
                        i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        r = "y" === t ? i : 1,
                        s = RegExp("^\\d{" + r + "," + i + "}"),
                        o = n.substring(l).match(s);
                    if (!o) throw "Missing number at position " + l;
                    return l += o[0].length, parseInt(o[0], 10)
                },
                w = function (e, i, r) {
                    var s = -1,
                        o = t.map($(e) ? r : i, function (t, e) {
                            return [[e, t]]
                        }).sort(function (t, e) {
                            return -(t[1].length - e[1].length)
                        });
                    if (t.each(o, function (t, e) {
                            var i = e[1];
                            return n.substr(l, i.length).toLowerCase() === i.toLowerCase() ? (s = e[0], l += i.length, !1) : void 0
                        }), -1 !== s) return s + 1;
                    throw "Unknown name at position " + l
                },
                x = function () {
                    if (n.charAt(l) !== e.charAt(r)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (r = 0; e.length > r; r++)
                if (b) "'" !== e.charAt(r) || $("'") ? x() : b = !1;
                else switch (e.charAt(r)) {
                case "d":
                    v = _("d");
                    break;
                case "D":
                    w("D", h, d);
                    break;
                case "o":
                    y = _("o");
                    break;
                case "m":
                    g = _("m");
                    break;
                case "M":
                    g = w("M", f, p);
                    break;
                case "y":
                    m = _("y");
                    break;
                case "@":
                    a = new Date(_("@")), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                    break;
                case "!":
                    a = new Date((_("!") - this._ticksTo1970) / 1e4), m = a.getFullYear(), g = a.getMonth() + 1, v = a.getDate();
                    break;
                case "'":
                    $("'") ? x() : b = !0;
                    break;
                default:
                    x()
                }
                if (n.length > l && (o = n.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), y > -1)
                for (g = 1, v = y; s = this._getDaysInMonth(m, g - 1), !(s >= v);) g++, v -= s;
            if (a = this._daylightSavingAdjust(new Date(m, g - 1, v)), a.getFullYear() !== m || a.getMonth() + 1 !== g || a.getDate() !== v) throw "Invalid date";
            return a
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, n) {
            if (!e) return "";
            var i, r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                s = (n ? n.dayNames : null) || this._defaults.dayNames,
                o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                a = (n ? n.monthNames : null) || this._defaults.monthNames,
                l = function (e) {
                    var n = t.length > i + 1 && t.charAt(i + 1) === e;
                    return n && i++, n
                },
                u = function (t, e, n) {
                    var i = "" + e;
                    if (l(t))
                        for (; n > i.length;) i = "0" + i;
                    return i
                },
                c = function (t, e, n, i) {
                    return l(t) ? i[e] : n[e]
                },
                h = "",
                d = !1;
            if (e)
                for (i = 0; t.length > i; i++)
                    if (d) "'" !== t.charAt(i) || l("'") ? h += t.charAt(i) : d = !1;
                    else switch (t.charAt(i)) {
                    case "d":
                        h += u("d", e.getDate(), 2);
                        break;
                    case "D":
                        h += c("D", e.getDay(), r, s);
                        break;
                    case "o":
                        h += u("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                    case "m":
                        h += u("m", e.getMonth() + 1, 2);
                        break;
                    case "M":
                        h += c("M", e.getMonth(), o, a);
                        break;
                    case "y":
                        h += l("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
                        break;
                    case "@":
                        h += e.getTime();
                        break;
                    case "!":
                        h += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                    case "'":
                        l("'") ? h += "'" : d = !0;
                        break;
                    default:
                        h += t.charAt(i)
                    }
                    return h
        },
        _possibleChars: function (t) {
            var e, n = "",
                i = !1,
                r = function (n) {
                    var i = t.length > e + 1 && t.charAt(e + 1) === n;
                    return i && e++, i
                };
            for (e = 0; t.length > e; e++)
                if (i) "'" !== t.charAt(e) || r("'") ? n += t.charAt(e) : i = !1;
                else switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    n += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    r("'") ? n += "'" : i = !0;
                    break;
                default:
                    n += t.charAt(e)
                }
                return n
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var n = this._get(t, "dateFormat"),
                    i = t.lastVal = t.input ? t.input.val() : null,
                    r = this._getDefaultDate(t),
                    s = r,
                    o = this._getFormatConfig(t);
                try {
                    s = this.parseDate(n, i, o) || r
                } catch (a) {
                    i = e ? "" : i
                }
                t.selectedDay = s.getDate(), t.drawMonth = t.selectedMonth = s.getMonth(), t.drawYear = t.selectedYear = s.getFullYear(), t.currentDay = i ? s.getDate() : 0, t.currentMonth = i ? s.getMonth() : 0, t.currentYear = i ? s.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (e, n, i) {
            var r = function (t) {
                    var e = new Date;
                    return e.setDate(e.getDate() + t), e
                },
                s = function (n) {
                    try {
                        return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), n, t.datepicker._getFormatConfig(e))
                    } catch (i) {}
                    for (var r = (n.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = r.getFullYear(), o = r.getMonth(), a = r.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = l.exec(n); u;) {
                        switch (u[2] || "d") {
                        case "d":
                        case "D":
                            a += parseInt(u[1], 10);
                            break;
                        case "w":
                        case "W":
                            a += 7 * parseInt(u[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(u[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(u[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
                        }
                        u = l.exec(n)
                    }
                    return new Date(s, o, a)
                },
                o = null == n || "" === n ? i : "string" == typeof n ? s(n) : "number" == typeof n ? isNaN(n) ? i : r(n) : new Date(n.getTime());
            return o = o && "Invalid Date" == "" + o ? i : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, n) {
            var i = !e,
                r = t.selectedMonth,
                s = t.selectedYear,
                o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), r === t.selectedMonth && s === t.selectedYear || n || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(i ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function (e) {
            var n = this._get(e, "stepMonths"),
                i = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(i, -n, "M")
                    },
                    next: function () {
                        t.datepicker._adjustDate(i, +n, "M")
                    },
                    hide: function () {
                        t.datepicker._hideDatepicker()
                    },
                    today: function () {
                        t.datepicker._gotoToday(i)
                    },
                    selectDay: function () {
                        return t.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function () {
                        return t.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function () {
                        return t.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, n, i, r, s, o, a, l, u, c, h, d, f, p, m, g, v, y, b, $, _, w, x, C, k, D, S, T, A, E, M, I, P, N, O, H, j, F, z, R = new Date,
                W = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                q = this._get(t, "isRTL"),
                L = this._get(t, "showButtonPanel"),
                B = this._get(t, "hideIfNoPrevNext"),
                V = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                Y = this._get(t, "showCurrentAtPos"),
                K = this._get(t, "stepMonths"),
                G = 1 !== U[0] || 1 !== U[1],
                X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                J = this._getMinMaxDate(t, "min"),
                Q = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - Y,
                tt = t.drawYear;
            if (0 > Z && (Z += 12, tt--), Q)
                for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, n = this._get(t, "prevText"), n = V ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z - K, 1)), this._getFormatConfig(t)) : n, i = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + n + "</span></a>", r = this._get(t, "nextText"), r = V ? this.formatDate(r, this._daylightSavingAdjust(new Date(tt, Z + K, 1)), this._getFormatConfig(t)) : r, s = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + r + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + r + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + r + "</span></a>", o = this._get(t, "currentText"), a = this._get(t, "gotoCurrent") && t.currentDay ? X : W, o = V ? this.formatDate(o, a, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", u = L ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, a) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (q ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, h = this._get(t, "showWeek"), d = this._get(t, "dayNames"), f = this._get(t, "dayNamesMin"), p = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), $ = "", w = 0; U[0] > w; w++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (k = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), D = " ui-corner-all", S = "", G) {
                        if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                        case 0:
                            S += " ui-datepicker-group-first", D = " ui-corner-" + (q ? "right" : "left");
                            break;
                        case U[1] - 1:
                            S += " ui-datepicker-group-last", D = " ui-corner-" + (q ? "left" : "right");
                            break;
                        default:
                            S += " ui-datepicker-group-middle", D = ""
                        }
                        S += "'>"
                    }
                    for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === w ? q ? s : i : "") + (/all|right/.test(D) && 0 === w ? q ? i : s : "") + this._generateMonthYearHeader(t, Z, tt, J, Q, w > 0 || C > 0, p, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", T = h ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", _ = 0; 7 > _; _++) A = (_ + c) % 7, T += "<th scope='col'" + ((_ + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[A] + "'>" + f[A] + "</span></th>";
                    for (S += T + "</tr></thead><tbody>", E = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, E)), M = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, I = Math.ceil((M + E) / 7), P = G && this.maxRows > I ? this.maxRows : I, this.maxRows = P, N = this._daylightSavingAdjust(new Date(tt, Z, 1 - M)), O = 0; P > O; O++) {
                        for (S += "<tr>", H = h ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", _ = 0; 7 > _; _++) j = g ? g.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], F = N.getMonth() !== Z, z = F && !y || !j[0] || J && J > N || Q && N > Q, H += "<td class='" + ((_ + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (N.getTime() === k.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === k.getTime() ? " " + this._dayOverClass : "") + (z ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !v ? "" : " " + j[1] + (N.getTime() === X.getTime() ? " " + this._currentClass : "") + (N.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !v || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (z ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (F && !v ? "&#xa0;" : z ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === W.getTime() ? " ui-state-highlight" : "") + (N.getTime() === X.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                        S += H + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), S += "</tbody></table>" + (G ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
                }
                $ += x
            }
            return $ += u, t._keyEvent = !1, $
        },
        _generateMonthYearHeader: function (t, e, n, i, r, s, o, a) {
            var l, u, c, h, d, f, p, m, g = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                y = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                $ = "";
            if (s || !g) $ += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
            else {
                for (l = i && i.getFullYear() === n, u = r && r.getFullYear() === n, $ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= i.getMonth()) && (!u || r.getMonth() >= c) && ($ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + a[c] + "</option>");
                $ += "</select>"
            }
            if (y || (b += $ + (!s && g && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", s || !v) b += "<span class='ui-datepicker-year'>" + n + "</span>";
                else {
                    for (h = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), f = function (t) {
                            var e = t.match(/c[+\-].*/) ? n + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                            return isNaN(e) ? d : e
                        }, p = f(h[0]), m = Math.max(p, f(h[1] || "")), p = i ? Math.max(p, i.getFullYear()) : p, m = r ? Math.min(m, r.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= p; p++) t.yearshtml += "<option value='" + p + "'" + (p === n ? " selected='selected'" : "") + ">" + p + "</option>";
                    t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                }
            return b += this._get(t, "yearSuffix"), y && (b += (!s && g && v ? "" : "&#xa0;") + $), b += "</div>"
        },
        _adjustInstDate: function (t, e, n) {
            var i = t.drawYear + ("Y" === n ? e : 0),
                r = t.drawMonth + ("M" === n ? e : 0),
                s = Math.min(t.selectedDay, this._getDaysInMonth(i, r)) + ("D" === n ? e : 0),
                o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(i, r, s)));
            t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" === n || "Y" === n) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var n = this._getMinMaxDate(t, "min"),
                i = this._getMinMaxDate(t, "max"),
                r = n && n > e ? n : e;
            return i && r > i ? i : r
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, n, i) {
            var r = this._getNumberOfMonths(t),
                s = this._daylightSavingAdjust(new Date(n, i + (0 > e ? e : r[0] * r[1]), 1));
            return 0 > e && s.setDate(this._getDaysInMonth(s.getFullYear(), s.getMonth())), this._isInRange(t, s)
        },
        _isInRange: function (t, e) {
            var n, i, r = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                o = null,
                a = null,
                l = this._get(t, "yearRange");
            return l && (n = l.split(":"), i = (new Date).getFullYear(), o = parseInt(n[0], 10), a = parseInt(n[1], 10), n[0].match(/[+\-].*/) && (o += i), n[1].match(/[+\-].*/) && (a += i)), (!r || e.getTime() >= r.getTime()) && (!s || e.getTime() <= s.getTime()) && (!o || e.getFullYear() >= o) && (!a || a >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, n, i) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var r = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(i, n, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), r, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var n = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(n)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(n)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(n))
    }, t.datepicker = new r, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.4", t.datepicker, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (e) {
            var n = this.options;
            return this._blurActiveElement(e), this.helper || n.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(n.iframeFix === !0 ? "iframe" : n.iframeFix), !0) : !1)
        },
        _blockFrames: function (e) {
            this.iframeBlocks = this.document.find(e).map(function () {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (e) {
            var n = this.document[0];
            if (this.handleElement.is(e.target)) try {
                n.activeElement && "body" !== n.activeElement.nodeName.toLowerCase() && t(n.activeElement).blur()
            } catch (i) {}
        },
        _mouseStart: function (e) {
            var n = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function (e, n) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                var i = this._uiHash();
                if (this._trigger("drag", e, i) === !1) return this._mouseUp({}), !1;
                this.position = i.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var n = this,
                i = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (i = t.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                n._trigger("stop", e) !== !1 && n._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1
        },
        _mouseUp: function (e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function (e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this.handleElement.removeClass("ui-draggable-handle")
        },
        _createHelper: function (e) {
            var n = this.options,
                i = t.isFunction(n.helper),
                r = i ? t(n.helper.apply(this.element[0], [e])) : "clone" === n.helper ? this.element.clone().removeAttr("id") : this.element;
            return r.parents("body").length || r.appendTo("parent" === n.appendTo ? this.element[0].parentNode : n.appendTo), i && r[0] === this.element[0] && this._setPositionRelative(), r[0] === this.element[0] || /(fixed|absolute)/.test(r.css("position")) || r.css("position", "absolute"), r
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var e = this.offsetParent.offset(),
                n = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== n && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {
                top: 0,
                left: 0
            };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var e, n, i, r = this.options,
                s = this.document[0];
            return this.relativeContainer = null, r.containment ? "window" === r.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === r.containment ? void(this.containment = [0, 0, t(s).width() - this.helperProportions.width - this.margins.left, (t(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : r.containment.constructor === Array ? void(this.containment = r.containment) : ("parent" === r.containment && (r.containment = this.helper[0].parentNode), n = t(r.containment), i = n[0], void(i && (e = /(scroll|auto)/.test(n.css("overflow")), this.containment = [(parseInt(n.css("borderLeftWidth"), 10) || 0) + (parseInt(n.css("paddingLeft"), 10) || 0), (parseInt(n.css("borderTopWidth"), 10) || 0) + (parseInt(n.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(n.css("borderRightWidth"), 10) || 0) - (parseInt(n.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(n.css("borderBottomWidth"), 10) || 0) - (parseInt(n.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = n))) : void(this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var n = "absolute" === t ? 1 : -1,
                i = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.offset.scroll.top : i ? 0 : this.offset.scroll.top) * n,
                left: e.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.offset.scroll.left : i ? 0 : this.offset.scroll.left) * n
            }
        },
        _generatePosition: function (t, e) {
            var n, i, r, s, o = this.options,
                a = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                u = t.pageY;
            return a && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (i = this.relativeContainer.offset(), n = [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : n = this.containment, t.pageX - this.offset.click.left < n[0] && (l = n[0] + this.offset.click.left), t.pageY - this.offset.click.top < n[1] && (u = n[1] + this.offset.click.top), t.pageX - this.offset.click.left > n[2] && (l = n[2] + this.offset.click.left), t.pageY - this.offset.click.top > n[3] && (u = n[3] + this.offset.click.top)), o.grid && (r = o.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, u = n ? r - this.offset.click.top >= n[1] || r - this.offset.click.top > n[3] ? r : r - this.offset.click.top >= n[1] ? r - o.grid[1] : r + o.grid[1] : r, s = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = n ? s - this.offset.click.left >= n[0] || s - this.offset.click.left > n[2] ? s : s - this.offset.click.left >= n[0] ? s - o.grid[0] : s + o.grid[0] : s), "y" === o.axis && (l = this.originalPageX), "x" === o.axis && (u = this.originalPageY)), {
                top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : a ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : a ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _normalizeRightBottom: function () {
            "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
        },
        _trigger: function (e, n, i) {
            return i = i || this._uiHash(), t.ui.plugin.call(this, e, [n, i, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, n, i)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, n, i) {
            var r = t.extend({}, n, {
                item: i.element
            });
            i.sortables = [], t(i.options.connectToSortable).each(function () {
                var n = t(this).sortable("instance");
                n && !n.options.disabled && (i.sortables.push(n), n.refreshPositions(), n._trigger("activate", e, r))
            })
        },
        stop: function (e, n, i) {
            var r = t.extend({}, n, {
                item: i.element
            });
            i.cancelHelperRemoval = !1, t.each(i.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, r))
            })
        },
        drag: function (e, n, i) {
            t.each(i.sortables, function () {
                var r = !1,
                    s = this;
                s.positionAbs = i.positionAbs, s.helperProportions = i.helperProportions, s.offset.click = i.offset.click, s._intersectsWith(s.containerCache) && (r = !0, t.each(i.sortables, function () {
                    return this.positionAbs = i.positionAbs, this.helperProportions = i.helperProportions, this.offset.click = i.offset.click, this !== s && this._intersectsWith(this.containerCache) && t.contains(s.element[0], this.element[0]) && (r = !1), r
                })), r ? (s.isOver || (s.isOver = 1, i._parent = n.helper.parent(), s.currentItem = n.helper.appendTo(s.element).data("ui-sortable-item", !0), s.options._helper = s.options.helper, s.options.helper = function () {
                    return n.helper[0]
                }, e.target = s.currentItem[0], s._mouseCapture(e, !0), s._mouseStart(e, !0, !0), s.offset.click.top = i.offset.click.top, s.offset.click.left = i.offset.click.left, s.offset.parent.left -= i.offset.parent.left - s.offset.parent.left, s.offset.parent.top -= i.offset.parent.top - s.offset.parent.top, i._trigger("toSortable", e), i.dropped = s.element, t.each(i.sortables, function () {
                    this.refreshPositions()
                }), i.currentItem = i.element, s.fromOutside = i), s.currentItem && (s._mouseDrag(e), n.position = s.position)) : s.isOver && (s.isOver = 0, s.cancelHelperRemoval = !0, s.options._revert = s.options.revert, s.options.revert = !1, s._trigger("out", e, s._uiHash(s)), s._mouseStop(e, !0), s.options.revert = s.options._revert, s.options.helper = s.options._helper, s.placeholder && s.placeholder.remove(), n.helper.appendTo(i._parent), i._refreshOffsets(e), n.position = i._generatePosition(e, !0), i._trigger("fromSortable", e), i.dropped = !1, t.each(i.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function (e, n, i) {
            var r = t("body"),
                s = i.options;
            r.css("cursor") && (s._cursor = r.css("cursor")), r.css("cursor", s.cursor)
        },
        stop: function (e, n, i) {
            var r = i.options;
            r._cursor && t("body").css("cursor", r._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, n, i) {
            var r = t(n.helper),
                s = i.options;
            r.css("opacity") && (s._opacity = r.css("opacity")), r.css("opacity", s.opacity)
        },
        stop: function (e, n, i) {
            var r = i.options;
            r._opacity && t(n.helper).css("opacity", r._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, n) {
            n.scrollParentNotHidden || (n.scrollParentNotHidden = n.helper.scrollParent(!1)), n.scrollParentNotHidden[0] !== n.document[0] && "HTML" !== n.scrollParentNotHidden[0].tagName && (n.overflowOffset = n.scrollParentNotHidden.offset())
        },
        drag: function (e, n, i) {
            var r = i.options,
                s = !1,
                o = i.scrollParentNotHidden[0],
                a = i.document[0];
            o !== a && "HTML" !== o.tagName ? (r.axis && "x" === r.axis || (i.overflowOffset.top + o.offsetHeight - e.pageY < r.scrollSensitivity ? o.scrollTop = s = o.scrollTop + r.scrollSpeed : e.pageY - i.overflowOffset.top < r.scrollSensitivity && (o.scrollTop = s = o.scrollTop - r.scrollSpeed)), r.axis && "y" === r.axis || (i.overflowOffset.left + o.offsetWidth - e.pageX < r.scrollSensitivity ? o.scrollLeft = s = o.scrollLeft + r.scrollSpeed : e.pageX - i.overflowOffset.left < r.scrollSensitivity && (o.scrollLeft = s = o.scrollLeft - r.scrollSpeed))) : (r.axis && "x" === r.axis || (e.pageY - t(a).scrollTop() < r.scrollSensitivity ? s = t(a).scrollTop(t(a).scrollTop() - r.scrollSpeed) : t(window).height() - (e.pageY - t(a).scrollTop()) < r.scrollSensitivity && (s = t(a).scrollTop(t(a).scrollTop() + r.scrollSpeed))), r.axis && "y" === r.axis || (e.pageX - t(a).scrollLeft() < r.scrollSensitivity ? s = t(a).scrollLeft(t(a).scrollLeft() - r.scrollSpeed) : t(window).width() - (e.pageX - t(a).scrollLeft()) < r.scrollSensitivity && (s = t(a).scrollLeft(t(a).scrollLeft() + r.scrollSpeed)))), s !== !1 && t.ui.ddmanager && !r.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function (e, n, i) {
            var r = i.options;
            i.snapElements = [], t(r.snap.constructor !== String ? r.snap.items || ":data(ui-draggable)" : r.snap).each(function () {
                var e = t(this),
                    n = e.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: n.top,
                    left: n.left
                })
            })
        },
        drag: function (e, n, i) {
            var r, s, o, a, l, u, c, h, d, f, p = i.options,
                m = p.snapTolerance,
                g = n.offset.left,
                v = g + i.helperProportions.width,
                y = n.offset.top,
                b = y + i.helperProportions.height;
            for (d = i.snapElements.length - 1; d >= 0; d--) l = i.snapElements[d].left - i.margins.left, u = l + i.snapElements[d].width, c = i.snapElements[d].top - i.margins.top, h = c + i.snapElements[d].height, l - m > v || g > u + m || c - m > b || y > h + m || !t.contains(i.snapElements[d].item.ownerDocument, i.snapElements[d].item) ? (i.snapElements[d].snapping && i.options.snap.release && i.options.snap.release.call(i.element, e, t.extend(i._uiHash(), {
                snapItem: i.snapElements[d].item
            })), i.snapElements[d].snapping = !1) : ("inner" !== p.snapMode && (r = m >= Math.abs(c - b), s = m >= Math.abs(h - y), o = m >= Math.abs(l - v), a = m >= Math.abs(u - g), r && (n.position.top = i._convertPositionTo("relative", {
                top: c - i.helperProportions.height,
                left: 0
            }).top), s && (n.position.top = i._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), o && (n.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l - i.helperProportions.width
            }).left), a && (n.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: u
            }).left)), f = r || s || o || a, "outer" !== p.snapMode && (r = m >= Math.abs(c - y),
                s = m >= Math.abs(h - b), o = m >= Math.abs(l - g), a = m >= Math.abs(u - v), r && (n.position.top = i._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), s && (n.position.top = i._convertPositionTo("relative", {
                    top: h - i.helperProportions.height,
                    left: 0
                }).top), o && (n.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), a && (n.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: u - i.helperProportions.width
                }).left)), !i.snapElements[d].snapping && (r || s || o || a || f) && i.options.snap.snap && i.options.snap.snap.call(i.element, e, t.extend(i._uiHash(), {
                snapItem: i.snapElements[d].item
            })), i.snapElements[d].snapping = r || s || o || a || f)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function (e, n, i) {
            var r, s = i.options,
                o = t.makeArray(t(s.stack)).sort(function (e, n) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(n).css("zIndex"), 10) || 0)
                });
            o.length && (r = parseInt(t(o[0]).css("zIndex"), 10) || 0, t(o).each(function (e) {
                t(this).css("zIndex", r + e)
            }), this.css("zIndex", r + o.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, n, i) {
            var r = t(n.helper),
                s = i.options;
            r.css("zIndex") && (s._zIndex = r.css("zIndex")), r.css("zIndex", s.zIndex)
        },
        stop: function (e, n, i) {
            var r = i.options;
            r._zIndex && t(n.helper).css("zIndex", r._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseInt(t, 10) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseInt(t, 10))
        },
        _hasScroll: function (e, n) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                r = !1;
            return e[i] > 0 ? !0 : (e[i] = 1, r = e[i] > 0, e[i] = 0, r)
        },
        _create: function () {
            var e, n, i, r, s, o = this,
                a = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!a.aspectRatio,
                    aspectRatio: a.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, n = 0; e.length > n; n++) i = t.trim(e[n]), s = "ui-resizable-" + i, r = t("<div class='ui-resizable-handle " + s + "'></div>"), r.css({
                    zIndex: a.zIndex
                }), "se" === i && r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(r);
            this._renderAxis = function (e) {
                var n, i, r, s;
                e = e || this.element;
                for (n in this.handles) this.handles[n].constructor === String ? this.handles[n] = this.element.children(this.handles[n]).first().show() : (this.handles[n].jquery || this.handles[n].nodeType) && (this.handles[n] = t(this.handles[n]), this._on(this.handles[n], {
                    mousedown: o._mouseDown
                })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = t(this.handles[n], this.element), s = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth(), r = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join(""), e.css(r, s), this._proportionallyResize()), this._handles = this._handles.add(this.handles[n])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
                o.resizing || (this.className && (r = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = r && r[1] ? r[1] : "se")
            }), a.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                a.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function () {
                a.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e, n = function (e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (n(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), n(this.originalElement), this
        },
        _mouseCapture: function (e) {
            var n, i, r = !1;
            for (n in this.handles) i = t(this.handles[n])[0], (i === e.target || t.contains(i, e.target)) && (r = !0);
            return !this.options.disabled && r
        },
        _mouseStart: function (e) {
            var n, i, r, s = this.options,
                o = this.element;
            return this.resizing = !0, this._renderProxy(), n = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), s.containment && (n += t(s.containment).scrollLeft() || 0, i += t(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: n,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: o.width(),
                height: o.height()
            }, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            }, this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            }, this.originalPosition = {
                left: n,
                top: i
            }, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, r = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === r ? this.axis + "-resize" : r), o.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function (e) {
            var n, i, r = this.originalMousePosition,
                s = this.axis,
                o = e.pageX - r.left || 0,
                a = e.pageY - r.top || 0,
                l = this._change[s];
            return this._updatePrevProperties(), l ? (n = l.apply(this, [e, o, a]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (n = this._updateRatio(n, e)), n = this._respectSize(n, e), this._updateCache(n), this._propagate("resize", e), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var n, i, r, s, o, a, l, u = this.options,
                c = this;
            return this._helper && (n = this._proportionallyResizeElements, i = n.length && /textarea/i.test(n[0].nodeName), r = i && this._hasScroll(n[0], "left") ? 0 : c.sizeDiff.height, s = i ? 0 : c.sizeDiff.width, o = {
                width: c.helper.width() - s,
                height: c.helper.height() - r
            }, a = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, u.animate || this.element.css(t.extend(o, {
                top: l,
                left: a
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !u.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, n, i, r, s, o = this.options;
            s = {
                minWidth: this._isNumber(o.minWidth) ? o.minWidth : 0,
                maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth : 1 / 0,
                minHeight: this._isNumber(o.minHeight) ? o.minHeight : 0,
                maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = s.minHeight * this.aspectRatio, i = s.minWidth / this.aspectRatio, n = s.maxHeight * this.aspectRatio, r = s.maxWidth / this.aspectRatio, e > s.minWidth && (s.minWidth = e), i > s.minHeight && (s.minHeight = i), s.maxWidth > n && (s.maxWidth = n), s.maxHeight > r && (s.maxHeight = r)), this._vBoundaries = s
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position,
                n = this.size,
                i = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === i && (t.left = e.left + (n.width - t.width), t.top = null), "nw" === i && (t.top = e.top + (n.height - t.height), t.left = e.left + (n.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries,
                n = this.axis,
                i = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                r = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                s = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                a = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                u = /sw|nw|w/.test(n),
                c = /nw|ne|n/.test(n);
            return s && (t.width = e.minWidth), o && (t.height = e.minHeight), i && (t.width = e.maxWidth), r && (t.height = e.maxHeight), s && u && (t.left = a - e.minWidth), i && u && (t.left = a - e.maxWidth), o && c && (t.top = l - e.minHeight), r && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, n = [], i = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], r = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) n[e] = parseInt(i[e], 10) || 0, n[e] += parseInt(r[e], 10) || 0;
            return {
                height: n[0] + n[2],
                width: n[1] + n[3]
            }
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, n = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                    height: n.height() - this.outerDimensions.height || 0,
                    width: n.width() - this.outerDimensions.width || 0
                })
        },
        _renderProxy: function () {
            var e = this.element,
                n = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++n.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function (t, e) {
                var n = this.originalSize,
                    i = this.originalPosition;
                return {
                    left: i.left + e,
                    width: n.width - e
                }
            },
            n: function (t, e, n) {
                var i = this.originalSize,
                    r = this.originalPosition;
                return {
                    top: r.top + n,
                    height: i.height - n
                }
            },
            s: function (t, e, n) {
                return {
                    height: this.originalSize.height + n
                }
            },
            se: function (e, n, i) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, n, i]))
            },
            sw: function (e, n, i) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, n, i]))
            },
            ne: function (e, n, i) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, n, i]))
            },
            nw: function (e, n, i) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, n, i]))
            }
        },
        _propagate: function (e, n) {
            t.ui.plugin.call(this, e, [n, this.ui()]), "resize" !== e && this._trigger(e, n, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var n = t(this).resizable("instance"),
                i = n.options,
                r = n._proportionallyResizeElements,
                s = r.length && /textarea/i.test(r[0].nodeName),
                o = s && n._hasScroll(r[0], "left") ? 0 : n.sizeDiff.height,
                a = s ? 0 : n.sizeDiff.width,
                l = {
                    width: n.size.width - a,
                    height: n.size.height - o
                },
                u = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
            n.element.animate(t.extend(l, c && u ? {
                top: c,
                left: u
            } : {}), {
                duration: i.animateDuration,
                easing: i.animateEasing,
                step: function () {
                    var i = {
                        width: parseInt(n.element.css("width"), 10),
                        height: parseInt(n.element.css("height"), 10),
                        top: parseInt(n.element.css("top"), 10),
                        left: parseInt(n.element.css("left"), 10)
                    };
                    r && r.length && t(r[0]).css({
                        width: i.width,
                        height: i.height
                    }), n._updateCache(i), n._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var e, n, i, r, s, o, a, l = t(this).resizable("instance"),
                u = l.options,
                c = l.element,
                h = u.containment,
                d = h instanceof t ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
            d && (l.containerElement = t(d), /document/.test(h) || h === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(d), n = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, i) {
                n[t] = l._num(e.css("padding" + i))
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - n[3],
                width: e.innerWidth() - n[1]
            }, i = l.containerOffset, r = l.containerSize.height, s = l.containerSize.width, o = l._hasScroll(d, "left") ? d.scrollWidth : s, a = l._hasScroll(d) ? d.scrollHeight : r, l.parentData = {
                element: d,
                left: i.left,
                top: i.top,
                width: o,
                height: a
            }))
        },
        resize: function (e) {
            var n, i, r, s, o = t(this).resizable("instance"),
                a = o.options,
                l = o.containerOffset,
                u = o.position,
                c = o._aspectRatio || e.shiftKey,
                h = {
                    top: 0,
                    left: 0
                },
                d = o.containerElement,
                f = !0;
            d[0] !== document && /static/.test(d.css("position")) && (h = l), u.left < (o._helper ? l.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - l.left : o.position.left - h.left), c && (o.size.height = o.size.width / o.aspectRatio, f = !1), o.position.left = a.helper ? l.left : 0), u.top < (o._helper ? l.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - l.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio, f = !1), o.position.top = o._helper ? l.top : 0), r = o.containerElement.get(0) === o.element.parent().get(0), s = /relative|absolute/.test(o.containerElement.css("position")), r && s ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), n = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - h.left : o.offset.left - l.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - h.top : o.offset.top - l.top)), n + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - n, c && (o.size.height = o.size.width / o.aspectRatio, f = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, c && (o.size.width = o.size.height * o.aspectRatio, f = !1)), f || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        },
        stop: function () {
            var e = t(this).resizable("instance"),
                n = e.options,
                i = e.containerOffset,
                r = e.containerPosition,
                s = e.containerElement,
                o = t(e.helper),
                a = o.offset(),
                l = o.outerWidth() - e.sizeDiff.width,
                u = o.outerHeight() - e.sizeDiff.height;
            e._helper && !n.animate && /relative/.test(s.css("position")) && t(this).css({
                left: a.left - r.left - i.left,
                width: l,
                height: u
            }), e._helper && !n.animate && /static/.test(s.css("position")) && t(this).css({
                left: a.left - r.left - i.left,
                width: l,
                height: u
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).resizable("instance"),
                n = e.options;
            t(n.alsoResize).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseInt(e.width(), 10),
                    height: parseInt(e.height(), 10),
                    left: parseInt(e.css("left"), 10),
                    top: parseInt(e.css("top"), 10)
                })
            })
        },
        resize: function (e, n) {
            var i = t(this).resizable("instance"),
                r = i.options,
                s = i.originalSize,
                o = i.originalPosition,
                a = {
                    height: i.size.height - s.height || 0,
                    width: i.size.width - s.width || 0,
                    top: i.position.top - o.top || 0,
                    left: i.position.left - o.left || 0
                };
            t(r.alsoResize).each(function () {
                var e = t(this),
                    i = t(this).data("ui-resizable-alsoresize"),
                    r = {},
                    s = e.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(s, function (t, e) {
                    var n = (i[e] || 0) + (a[e] || 0);
                    n && n >= 0 && (r[e] = n || null)
                }), e.css(r)
            })
        },
        stop: function () {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).resizable("instance"),
                n = e.options,
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e, n = t(this).resizable("instance"),
                i = n.options,
                r = n.size,
                s = n.originalSize,
                o = n.originalPosition,
                a = n.axis,
                l = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                u = l[0] || 1,
                c = l[1] || 1,
                h = Math.round((r.width - s.width) / u) * u,
                d = Math.round((r.height - s.height) / c) * c,
                f = s.width + h,
                p = s.height + d,
                m = i.maxWidth && f > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                v = i.minWidth && i.minWidth > f,
                y = i.minHeight && i.minHeight > p;
            i.grid = l, v && (f += u), y && (p += c), m && (f -= u), g && (p -= c), /^(se|s|e)$/.test(a) ? (n.size.width = f, n.size.height = p) : /^(ne)$/.test(a) ? (n.size.width = f, n.size.height = p, n.position.top = o.top - d) : /^(sw)$/.test(a) ? (n.size.width = f, n.size.height = p, n.position.left = o.left - h) : ((0 >= p - c || 0 >= f - u) && (e = n._getPaddingPlusBorderDimensions(this)), p - c > 0 ? (n.size.height = p, n.position.top = o.top - d) : (p = c - e.height, n.size.height = p, n.position.top = o.top + s.height - p), f - u > 0 ? (n.size.width = f, n.position.left = o.left - h) : (f = u - e.width, n.size.width = f, n.position.left = o.left + s.width - f))
        }
    }), t.ui.resizable, t.widget("ui.dialog", {
        version: "1.11.4",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "Close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function (e) {
                    var n = t(this).css(e).offset().top;
                    0 > n && t(this).css("top", e.top - n)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
            var n, i = this;
            if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                    n = this.document[0].activeElement, n && "body" !== n.nodeName.toLowerCase() && t(n).blur()
                } catch (r) {}
                this._hide(this.uiDialog, this.options.hide, function () {
                    i._trigger("close", e)
                })
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, n) {
            var i = !1,
                r = this.uiDialog.siblings(".ui-front:visible").map(function () {
                    return +t(this).css("z-index")
                }).get(),
                s = Math.max.apply(null, r);
            return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1), i = !0), i && !n && this._trigger("focus", e), i
        },
        open: function () {
            var e = this;
            return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
        },
        _keepFocus: function (e) {
            function n() {
                var e = this.document[0].activeElement,
                    n = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                n || this._focusTabbable()
            }
            e.preventDefault(), n.call(this), this._delay(n)
        },
        _createWrapper: function () {
            this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function (e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var n = this.uiDialog.find(":tabbable"),
                            i = n.filter(":first"),
                            r = n.filter(":last");
                        e.target !== r[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== i[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                            r.focus()
                        }), e.preventDefault()) : (this._delay(function () {
                            i.focus()
                        }), e.preventDefault())
                    }
                },
                mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function (e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                "aria-labelledby": e.attr("id")
            })
        },
        _title: function (t) {
            this.options.title || t.html("&#160;"), t.text(this.options.title)
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function () {
            var e = this,
                n = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(n) || t.isArray(n) && !n.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(n, function (n, i) {
                var r, s;
                i = t.isFunction(i) ? {
                    click: i,
                    text: n
                } : i, i = t.extend({
                    type: "button"
                }, i), r = i.click, i.click = function () {
                    r.apply(e.element[0], arguments)
                }, s = {
                    icons: i.icons,
                    text: i.showText
                }, delete i.icons, delete i.showText, t("<button></button>", i).button(s).appendTo(e.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function e(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            var n = this,
                i = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (i, r) {
                    t(this).addClass("ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", i, e(r))
                },
                drag: function (t, i) {
                    n._trigger("drag", t, e(i))
                },
                stop: function (r, s) {
                    var o = s.offset.left - n.document.scrollLeft(),
                        a = s.offset.top - n.document.scrollTop();
                    i.position = {
                        my: "left top",
                        at: "left" + (o >= 0 ? "+" : "") + o + " top" + (a >= 0 ? "+" : "") + a,
                        of: n.window
                    }, t(this).removeClass("ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", r, e(s))
                }
            })
        },
        _makeResizable: function () {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            var n = this,
                i = this.options,
                r = i.resizable,
                s = this.uiDialog.css("position"),
                o = "string" == typeof r ? r : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: i.maxWidth,
                maxHeight: i.maxHeight,
                minWidth: i.minWidth,
                minHeight: this._minHeight(),
                handles: o,
                start: function (i, r) {
                    t(this).addClass("ui-dialog-resizing"), n._blockFrames(), n._trigger("resizeStart", i, e(r))
                },
                resize: function (t, i) {
                    n._trigger("resize", t, e(i))
                },
                stop: function (r, s) {
                    var o = n.uiDialog.offset(),
                        a = o.left - n.document.scrollLeft(),
                        l = o.top - n.document.scrollTop();
                    i.height = n.uiDialog.height(), i.width = n.uiDialog.width(), i.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (l >= 0 ? "+" : "") + l,
                        of: n.window
                    }, t(this).removeClass("ui-dialog-resizing"), n._unblockFrames(), n._trigger("resizeStop", r, e(s))
                }
            }).css("position", s)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var e = this._trackingInstances(),
                n = t.inArray(this, e); - 1 !== n && e.splice(n, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var n = this,
                i = !1,
                r = {};
            t.each(e, function (t, e) {
                n._setOption(t, e), t in n.sizeRelatedOptions && (i = !0), t in n.resizableRelatedOptions && (r[t] = e)
            }), i && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function (t, e) {
            var n, i, r = this.uiDialog;
            "dialogClass" === t && r.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                label: "" + e
            }), "draggable" === t && (n = r.is(":data(ui-draggable)"), n && !e && r.draggable("destroy"), !n && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (i = r.is(":data(ui-resizable)"), i && !e && r.resizable("destroy"), i && "string" == typeof e && r.resizable("option", "handles", e), i || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, n, i = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), i.minWidth > i.width && (i.width = i.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: i.width
            }).outerHeight(), e = Math.max(0, i.minHeight - t), n = "number" == typeof i.maxHeight ? Math.max(0, i.maxHeight - t) : "none", "auto" === i.height ? this.element.css({
                minHeight: e,
                maxHeight: n,
                height: "auto"
            }) : this.element.height(Math.max(0, i.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (e) {
            return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
            }
        }
    }), t.widget("ui.droppable", {
        version: "1.11.4",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: !1,
            addClasses: !0,
            greedy: !1,
            hoverClass: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var e, n = this.options,
                i = n.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = function () {
                return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                }
            }, this._addToManager(n.scope), n.addClasses && this.element.addClass("ui-droppable")
        },
        _addToManager: function (e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e), this.element.removeClass("ui-droppable ui-droppable-disabled")
        },
        _setOption: function (e, n) {
            if ("accept" === e) this.accept = t.isFunction(n) ? n : function (t) {
                return t.is(n)
            };
            else if ("scope" === e) {
                var i = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(i), this._addToManager(n)
            }
            this._super(e, n)
        },
        _activate: function (e) {
            var n = t.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", e, this.ui(n))
        },
        _deactivate: function (e) {
            var n = t.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", e, this.ui(n))
        },
        _over: function (e) {
            var n = t.ui.ddmanager.current;
            n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(n)))
        },
        _out: function (e) {
            var n = t.ui.ddmanager.current;
            n && (n.currentItem || n.element)[0] !== this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(n)))
        },
        _drop: function (e, n) {
            var i = n || t.ui.ddmanager.current,
                r = !1;
            return i && (i.currentItem || i.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var n = t(this).droppable("instance");
                return n.options.greedy && !n.options.disabled && n.options.scope === i.options.scope && n.accept.call(n.element[0], i.currentItem || i.element) && t.ui.intersect(i, t.extend(n, {
                    offset: n.element.offset()
                }), n.options.tolerance, e) ? (r = !0, !1) : void 0
            }), r ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(i)), this.element) : !1) : !1
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        }
    }), t.ui.intersect = function () {
        function t(t, e, n) {
            return t >= e && e + n > t
        }
        return function (e, n, i, r) {
            if (!n.offset) return !1;
            var s = (e.positionAbs || e.position.absolute).left + e.margins.left,
                o = (e.positionAbs || e.position.absolute).top + e.margins.top,
                a = s + e.helperProportions.width,
                l = o + e.helperProportions.height,
                u = n.offset.left,
                c = n.offset.top,
                h = u + n.proportions().width,
                d = c + n.proportions().height;
            switch (i) {
            case "fit":
                return s >= u && h >= a && o >= c && d >= l;
            case "intersect":
                return s + e.helperProportions.width / 2 > u && h > a - e.helperProportions.width / 2 && o + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
            case "pointer":
                return t(r.pageY, c, n.proportions().height) && t(r.pageX, u, n.proportions().width);
            case "touch":
                return (o >= c && d >= o || l >= c && d >= l || c > o && l > d) && (s >= u && h >= s || a >= u && h >= a || u > s && a > h);
            default:
                return !1
            }
        }
    }(), t.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (e, n) {
            var i, r, s = t.ui.ddmanager.droppables[e.options.scope] || [],
                o = n ? n.type : null,
                a = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (i = 0; s.length > i; i++)
                if (!(s[i].options.disabled || e && !s[i].accept.call(s[i].element[0], e.currentItem || e.element))) {
                    for (r = 0; a.length > r; r++)
                        if (a[r] === s[i].element[0]) {
                            s[i].proportions().height = 0;
                            continue t
                        }
                    s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === o && s[i]._activate.call(s[i], n), s[i].offset = s[i].element.offset(), s[i].proportions({
                        width: s[i].element[0].offsetWidth,
                        height: s[i].element[0].offsetHeight
                    }))
                }
        },
        drop: function (e, n) {
            var i = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, n) && (i = this._drop.call(this, n) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, n)))
            }), i
        },
        dragStart: function (e, n) {
            e.element.parentsUntil("body").bind("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, n)
            })
        },
        drag: function (e, n) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, n), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var i, r, s, o = t.ui.intersect(e, this, this.options.tolerance, n),
                        a = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                    a && (this.options.greedy && (r = this.options.scope, s = this.element.parents(":data(ui-droppable)").filter(function () {
                        return t(this).droppable("instance").options.scope === r
                    }), s.length && (i = t(s[0]).droppable("instance"), i.greedyChild = "isover" === a)), i && "isover" === a && (i.isover = !1, i.isout = !0, i._out.call(i, n)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, n), i && "isout" === a && (i.isout = !1, i.isover = !0, i._over.call(i, n)))
                }
            })
        },
        dragStop: function (e, n) {
            e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, n)
        }
    }, t.ui.droppable;
    var y = "ui-effects-",
        b = t;
    t.effects = {
            effect: {}
        },
        function (t, e) {
            function n(t, e, n) {
                var i = h[e.type] || {};
                return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : t > i.max ? i.max : t)
            }

            function i(n) {
                var i = u(),
                    r = i._rgba = [];
                return n = n.toLowerCase(), p(l, function (t, s) {
                    var o, a = s.re.exec(n),
                        l = a && s.parse(a),
                        u = s.space || "rgba";
                    return l ? (o = i[u](l), i[c[u].cache] = o[c[u].cache], r = i._rgba = o._rgba, !1) : e
                }), r.length ? ("0,0,0,0" === r.join() && t.extend(r, s.transparent), i) : s[n]
            }

            function r(t, e, n) {
                return n = (n + 1) % 1, 1 > 6 * n ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + 6 * (e - t) * (2 / 3 - n) : t
            }
            var s, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                a = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                u = t.Color = function (e, n, i, r) {
                    return new t.Color.fn.parse(e, n, i, r)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                h = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = u.support = {},
                f = t("<p>")[0],
                p = t.each;
            f.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = f.style.backgroundColor.indexOf("rgba") > -1, p(c, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), u.fn = t.extend(u.prototype, {
                parse: function (r, o, a, l) {
                    if (r === e) return this._rgba = [null, null, null, null], this;
                    (r.jquery || r.nodeType) && (r = t(r).css(o), o = e);
                    var h = this,
                        d = t.type(r),
                        f = this._rgba = [];
                    return o !== e && (r = [r, o, a, l], d = "array"), "string" === d ? this.parse(i(r) || s._default) : "array" === d ? (p(c.rgba.props, function (t, e) {
                        f[e.idx] = n(r[e.idx], e)
                    }), this) : "object" === d ? (r instanceof u ? p(c, function (t, e) {
                        r[e.cache] && (h[e.cache] = r[e.cache].slice())
                    }) : p(c, function (e, i) {
                        var s = i.cache;
                        p(i.props, function (t, e) {
                            if (!h[s] && i.to) {
                                if ("alpha" === t || null == r[t]) return;
                                h[s] = i.to(h._rgba)
                            }
                            h[s][e.idx] = n(r[t], e, !0)
                        }), h[s] && 0 > t.inArray(null, h[s].slice(0, 3)) && (h[s][3] = 1, i.from && (h._rgba = i.from(h[s])))
                    }), this) : e
                },
                is: function (t) {
                    var n = u(t),
                        i = !0,
                        r = this;
                    return p(c, function (t, s) {
                        var o, a = n[s.cache];
                        return a && (o = r[s.cache] || s.to && s.to(r._rgba) || [], p(s.props, function (t, n) {
                            return null != a[n.idx] ? i = a[n.idx] === o[n.idx] : e
                        })), i
                    }), i
                },
                _space: function () {
                    var t = [],
                        e = this;
                    return p(c, function (n, i) {
                        e[i.cache] && t.push(n)
                    }), t.pop()
                },
                transition: function (t, e) {
                    var i = u(t),
                        r = i._space(),
                        s = c[r],
                        o = 0 === this.alpha() ? u("transparent") : this,
                        a = o[s.cache] || s.to(o._rgba),
                        l = a.slice();
                    return i = i[s.cache], p(s.props, function (t, r) {
                        var s = r.idx,
                            o = a[s],
                            u = i[s],
                            c = h[r.type] || {};
                        null !== u && (null === o ? l[s] = u : (c.mod && (u - o > c.mod / 2 ? o += c.mod : o - u > c.mod / 2 && (o -= c.mod)), l[s] = n((u - o) * e + o, r)))
                    }), this[r](l)
                },
                blend: function (e) {
                    if (1 === this._rgba[3]) return this;
                    var n = this._rgba.slice(),
                        i = n.pop(),
                        r = u(e)._rgba;
                    return u(t.map(n, function (t, e) {
                        return (1 - i) * r[e] + i * t
                    }))
                },
                toRgbaString: function () {
                    var e = "rgba(",
                        n = t.map(this._rgba, function (t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
                },
                toHslaString: function () {
                    var e = "hsla(",
                        n = t.map(this.hsla(), function (t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
                },
                toHexString: function (e) {
                    var n = this._rgba.slice(),
                        i = n.pop();
                    return e && n.push(~~(255 * i)), "#" + t.map(n, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), u.fn.parse.prototype = u.fn, c.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, n, i = t[0] / 255,
                    r = t[1] / 255,
                    s = t[2] / 255,
                    o = t[3],
                    a = Math.max(i, r, s),
                    l = Math.min(i, r, s),
                    u = a - l,
                    c = a + l,
                    h = .5 * c;
                return e = l === a ? 0 : i === a ? 60 * (r - s) / u + 360 : r === a ? 60 * (s - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === u ? 0 : .5 >= h ? u / c : u / (2 - c), [Math.round(e) % 360, n, h, null == o ? 1 : o]
            }, c.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    n = t[1],
                    i = t[2],
                    s = t[3],
                    o = .5 >= i ? i * (1 + n) : i + n - i * n,
                    a = 2 * i - o;
                return [Math.round(255 * r(a, o, e + 1 / 3)), Math.round(255 * r(a, o, e)), Math.round(255 * r(a, o, e - 1 / 3)), s]
            }, p(c, function (i, r) {
                var s = r.props,
                    o = r.cache,
                    l = r.to,
                    c = r.from;
                u.fn[i] = function (i) {
                    if (l && !this[o] && (this[o] = l(this._rgba)), i === e) return this[o].slice();
                    var r, a = t.type(i),
                        h = "array" === a || "object" === a ? i : arguments,
                        d = this[o].slice();
                    return p(s, function (t, e) {
                        var i = h["object" === a ? t : e.idx];
                        null == i && (i = d[e.idx]), d[e.idx] = n(i, e)
                    }), c ? (r = u(c(d)), r[o] = d, r) : u(d)
                }, p(s, function (e, n) {
                    u.fn[e] || (u.fn[e] = function (r) {
                        var s, o = t.type(r),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i,
                            u = this[l](),
                            c = u[n.idx];
                        return "undefined" === o ? c : ("function" === o && (r = r.call(this, c), o = t.type(r)), null == r && n.empty ? this : ("string" === o && (s = a.exec(r), s && (r = c + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), u[n.idx] = r, this[l](u)))
                    })
                })
            }), u.hook = function (e) {
                var n = e.split(" ");
                p(n, function (e, n) {
                    t.cssHooks[n] = {
                        set: function (e, r) {
                            var s, o, a = "";
                            if ("transparent" !== r && ("string" !== t.type(r) || (s = i(r)))) {
                                if (r = u(s || r), !d.rgba && 1 !== r._rgba[3]) {
                                    for (o = "backgroundColor" === n ? e.parentNode : e;
                                        ("" === a || "transparent" === a) && o && o.style;) try {
                                        a = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (l) {}
                                    r = r.blend(a && "transparent" !== a ? a : "_default")
                                }
                                r = r.toRgbaString()
                            }
                            try {
                                e.style[n] = r
                            } catch (l) {}
                        }
                    }, t.fx.step[n] = function (e) {
                        e.colorInit || (e.start = u(e.elem, n), e.end = u(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, u.hook(o), t.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return p(["Top", "Right", "Bottom", "Left"], function (n, i) {
                        e["border" + i + "Color"] = t
                    }), e
                }
            }, s = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(b),
        function () {
            function e(e) {
                var n, i, r = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    s = {};
                if (r && r.length && r[0] && r[r[0]])
                    for (i = r.length; i--;) n = r[i], "string" == typeof r[n] && (s[t.camelCase(n)] = r[n]);
                else
                    for (n in r) "string" == typeof r[n] && (s[n] = r[n]);
                return s
            }

            function n(e, n) {
                var i, s, o = {};
                for (i in n) s = n[i], e[i] !== s && (r[i] || (t.fx.step[i] || !isNaN(parseFloat(s))) && (o[i] = s));
                return o
            }
            var i = ["add", "remove", "toggle"],
                r = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, n) {
                t.fx.step[n] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (b.style(t.elem, n, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (r, s, o, a) {
                var l = t.speed(s, o, a);
                return this.queue(function () {
                    var s, o = t(this),
                        a = o.attr("class") || "",
                        u = l.children ? o.find("*").addBack() : o;
                    u = u.map(function () {
                        var n = t(this);
                        return {
                            el: n,
                            start: e(this)
                        }
                    }), s = function () {
                        t.each(i, function (t, e) {
                            r[e] && o[e + "Class"](r[e])
                        })
                    }, s(), u = u.map(function () {
                        return this.end = e(this.el[0]), this.diff = n(this.start, this.end), this
                    }), o.attr("class", a), u = u.map(function () {
                        var e = this,
                            n = t.Deferred(),
                            i = t.extend({}, l, {
                                queue: !1,
                                complete: function () {
                                    n.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, i), n.promise()
                    }), t.when.apply(t, u.get()).done(function () {
                        s(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function (e) {
                    return function (n, i, r, s) {
                        return i ? t.effects.animateClass.call(this, {
                            add: n
                        }, i, r, s) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function (e) {
                    return function (n, i, r, s) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: n
                        }, i, r, s) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function (e) {
                    return function (n, i, r, s, o) {
                        return "boolean" == typeof i || void 0 === i ? r ? t.effects.animateClass.call(this, i ? {
                            add: n
                        } : {
                            remove: n
                        }, r, s, o) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: n
                        }, i, r, s)
                    }
                }(t.fn.toggleClass),
                switchClass: function (e, n, i, r, s) {
                    return t.effects.animateClass.call(this, {
                        add: n,
                        remove: e
                    }, i, r, s)
                }
            })
        }(),
        function () {
            function e(e, n, i, r) {
                return t.isPlainObject(e) && (n = e, e = e.effect), e = {
                    effect: e
                }, null == n && (n = {}), t.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (r = i, i = n, n = {}), t.isFunction(i) && (r = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = r || n.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "1.11.4",
                save: function (t, e) {
                    for (var n = 0; e.length > n; n++) null !== e[n] && t.data(y + e[n], t[0].style[e[n]])
                },
                restore: function (t, e) {
                    var n, i;
                    for (i = 0; e.length > i; i++) null !== e[i] && (n = t.data(y + e[i]), void 0 === n && (n = ""), t.css(e[i], n))
                },
                setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function (t, e) {
                    var n, i;
                    switch (t[0]) {
                    case "top":
                        n = 0;
                        break;
                    case "middle":
                        n = .5;
                        break;
                    case "bottom":
                        n = 1;
                        break;
                    default:
                        n = t[0] / e.height
                    }
                    switch (t[1]) {
                    case "left":
                        i = 0;
                        break;
                    case "center":
                        i = .5;
                        break;
                    case "right":
                        i = 1;
                        break;
                    default:
                        i = t[1] / e.width
                    }
                    return {
                        x: i,
                        y: n
                    }
                },
                createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var n = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        i = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        r = {
                            width: e.width(),
                            height: e.height()
                        },
                        s = document.activeElement;
                    try {
                        s.id
                    } catch (o) {
                        s = document.body
                    }
                    return e.wrap(i), (e[0] === s || t.contains(e[0], s)) && t(s).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(n, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, i) {
                        n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(r), i.css(n).show()
                },
                removeWrapper: function (e) {
                    var n = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
                },
                setTransition: function (e, n, i, r) {
                    return r = r || {}, t.each(n, function (t, n) {
                        var s = e.cssUnit(n);
                        s[0] > 0 && (r[n] = s[0] * i + s[1])
                    }), r
                }
            }), t.fn.extend({
                effect: function () {
                    function n(e) {
                        function n() {
                            t.isFunction(s) && s.call(r[0]), t.isFunction(e) && e()
                        }
                        var r = t(this),
                            s = i.complete,
                            a = i.mode;
                        (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), n()) : o.call(r[0], i, n)
                    }
                    var i = e.apply(this, arguments),
                        r = i.mode,
                        s = i.queue,
                        o = t.effects.effect[i.effect];
                    return t.fx.off || !o ? r ? this[r](i.duration, i.complete) : this.each(function () {
                        i.complete && i.complete.call(this)
                    }) : s === !1 ? this.each(n) : this.queue(s || "fx", n)
                },
                show: function (t) {
                    return function (i) {
                        if (n(i)) return t.apply(this, arguments);
                        var r = e.apply(this, arguments);
                        return r.mode = "show", this.effect.call(this, r)
                    }
                }(t.fn.show),
                hide: function (t) {
                    return function (i) {
                        if (n(i)) return t.apply(this, arguments);
                        var r = e.apply(this, arguments);
                        return r.mode = "hide", this.effect.call(this, r)
                    }
                }(t.fn.hide),
                toggle: function (t) {
                    return function (i) {
                        if (n(i) || "boolean" == typeof i) return t.apply(this, arguments);
                        var r = e.apply(this, arguments);
                        return r.mode = "toggle", this.effect.call(this, r)
                    }
                }(t.fn.toggle),
                cssUnit: function (e) {
                    var n = this.css(e),
                        i = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        n.indexOf(e) > 0 && (i = [parseFloat(n), e])
                    }), i
                }
            })
        }(),
        function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, n) {
                e[n] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function (t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function (t) {
                    for (var e, n = 4;
                        ((e = Math.pow(2, --n)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, n) {
                t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function (t) {
                    return 1 - n(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
                }
            })
        }(), t.effects, t.effects.effect.blind = function (e, n) {
            var i, r, s, o = t(this),
                a = /up|down|vertical/,
                l = /up|left|vertical|horizontal/,
                u = ["position", "top", "bottom", "left", "right", "height", "width"],
                c = t.effects.setMode(o, e.mode || "hide"),
                h = e.direction || "up",
                d = a.test(h),
                f = d ? "height" : "width",
                p = d ? "top" : "left",
                m = l.test(h),
                g = {},
                v = "show" === c;
            o.parent().is(".ui-effects-wrapper") ? t.effects.save(o.parent(), u) : t.effects.save(o, u), o.show(), i = t.effects.createWrapper(o).css({
                overflow: "hidden"
            }), r = i[f](), s = parseFloat(i.css(p)) || 0, g[f] = v ? r : 0, m || (o.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                position: "absolute"
            }), g[p] = v ? s : r + s), v && (i.css(f, 0), m || i.css(p, s + r)), i.animate(g, {
                duration: e.duration,
                easing: e.easing,
                queue: !1,
                complete: function () {
                    "hide" === c && o.hide(), t.effects.restore(o, u), t.effects.removeWrapper(o), n()
                }
            })
        }, t.effects.effect.bounce = function (e, n) {
            var i, r, s, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(o, e.mode || "effect"),
                u = "hide" === l,
                c = "show" === l,
                h = e.direction || "up",
                d = e.distance,
                f = e.times || 5,
                p = 2 * f + (c || u ? 1 : 0),
                m = e.duration / p,
                g = e.easing,
                v = "up" === h || "down" === h ? "top" : "left",
                y = "up" === h || "left" === h,
                b = o.queue(),
                $ = b.length;
            for ((c || u) && a.push("opacity"), t.effects.save(o, a), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (s = {
                    opacity: 1
                }, s[v] = 0, o.css("opacity", 0).css(v, y ? 2 * -d : 2 * d).animate(s, m, g)), u && (d /= Math.pow(2, f - 1)), s = {}, s[v] = 0, i = 0; f > i; i++) r = {}, r[v] = (y ? "-=" : "+=") + d, o.animate(r, m, g).animate(s, m, g), d = u ? 2 * d : d / 2;
            u && (r = {
                opacity: 0
            }, r[v] = (y ? "-=" : "+=") + d, o.animate(r, m, g)), o.queue(function () {
                u && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), n()
            }), $ > 1 && b.splice.apply(b, [1, 0].concat(b.splice($, p + 1))), o.dequeue()
        }, t.effects.effect.clip = function (e, n) {
            var i, r, s, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(o, e.mode || "hide"),
                u = "show" === l,
                c = e.direction || "vertical",
                h = "vertical" === c,
                d = h ? "height" : "width",
                f = h ? "top" : "left",
                p = {};
            t.effects.save(o, a), o.show(), i = t.effects.createWrapper(o).css({
                overflow: "hidden"
            }), r = "IMG" === o[0].tagName ? i : o, s = r[d](), u && (r.css(d, 0), r.css(f, s / 2)), p[d] = u ? s : 0, p[f] = u ? 0 : s / 2, r.animate(p, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    u || o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), n()
                }
            })
        }, t.effects.effect.drop = function (e, n) {
            var i, r = t(this),
                s = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                o = t.effects.setMode(r, e.mode || "hide"),
                a = "show" === o,
                l = e.direction || "left",
                u = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l ? "pos" : "neg",
                h = {
                    opacity: a ? 1 : 0
                };
            t.effects.save(r, s), r.show(), t.effects.createWrapper(r), i = e.distance || r["top" === u ? "outerHeight" : "outerWidth"](!0) / 2, a && r.css("opacity", 0).css(u, "pos" === c ? -i : i), h[u] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + i, r.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === o && r.hide(), t.effects.restore(r, s), t.effects.removeWrapper(r), n()
                }
            })
        }, t.effects.effect.explode = function (e, n) {
            function i() {
                b.push(this), b.length === h * d && r()
            }

            function r() {
                f.css({
                    visibility: "visible"
                }), t(b).remove(), m || f.hide(), n()
            }
            var s, o, a, l, u, c, h = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = h,
                f = t(this),
                p = t.effects.setMode(f, e.mode || "hide"),
                m = "show" === p,
                g = f.show().css("visibility", "hidden").offset(),
                v = Math.ceil(f.outerWidth() / d),
                y = Math.ceil(f.outerHeight() / h),
                b = [];
            for (s = 0; h > s; s++)
                for (l = g.top + s * y, c = s - (h - 1) / 2, o = 0; d > o; o++) a = g.left + o * v, u = o - (d - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -o * v,
                    top: -s * y
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: y,
                    left: a + (m ? u * v : 0),
                    top: l + (m ? c * y : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: a + (m ? 0 : u * v),
                    top: l + (m ? 0 : c * y),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, i)
        }, t.effects.effect.fade = function (e, n) {
            var i = t(this),
                r = t.effects.setMode(i, e.mode || "toggle");
            i.animate({
                opacity: r
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: n
            })
        }, t.effects.effect.fold = function (e, n) {
            var i, r, s = t(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = t.effects.setMode(s, e.mode || "hide"),
                l = "show" === a,
                u = "hide" === a,
                c = e.size || 15,
                h = /([0-9]+)%/.exec(c),
                d = !!e.horizFirst,
                f = l !== d,
                p = f ? ["width", "height"] : ["height", "width"],
                m = e.duration / 2,
                g = {},
                v = {};
            t.effects.save(s, o), s.show(), i = t.effects.createWrapper(s).css({
                overflow: "hidden"
            }), r = f ? [i.width(), i.height()] : [i.height(), i.width()], h && (c = parseInt(h[1], 10) / 100 * r[u ? 0 : 1]), l && i.css(d ? {
                height: 0,
                width: c
            } : {
                height: c,
                width: 0
            }), g[p[0]] = l ? r[0] : c, v[p[1]] = l ? r[1] : 0, i.animate(g, m, e.easing).animate(v, m, e.easing, function () {
                u && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), n()
            })
        }, t.effects.effect.highlight = function (e, n) {
            var i = t(this),
                r = ["backgroundImage", "backgroundColor", "opacity"],
                s = t.effects.setMode(i, e.mode || "show"),
                o = {
                    backgroundColor: i.css("backgroundColor")
                };
            "hide" === s && (o.opacity = 0), t.effects.save(i, r), i.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(o, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === s && i.hide(), t.effects.restore(i, r), n()
                }
            })
        }, t.effects.effect.size = function (e, n) {
            var i, r, s, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                u = ["width", "height", "overflow"],
                c = ["fontSize"],
                h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                f = t.effects.setMode(o, e.mode || "effect"),
                p = e.restore || "effect" !== f,
                m = e.scale || "both",
                g = e.origin || ["middle", "center"],
                v = o.css("position"),
                y = p ? a : l,
                b = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === f && o.show(), i = {
                height: o.height(),
                width: o.width(),
                outerHeight: o.outerHeight(),
                outerWidth: o.outerWidth()
            }, "toggle" === e.mode && "show" === f ? (o.from = e.to || b, o.to = e.from || i) : (o.from = e.from || ("show" === f ? b : i), o.to = e.to || ("hide" === f ? b : i)), s = {
                from: {
                    y: o.from.height / i.height,
                    x: o.from.width / i.width
                },
                to: {
                    y: o.to.height / i.height,
                    x: o.to.width / i.width
                }
            }, ("box" === m || "both" === m) && (s.from.y !== s.to.y && (y = y.concat(h), o.from = t.effects.setTransition(o, h, s.from.y, o.from), o.to = t.effects.setTransition(o, h, s.to.y, o.to)), s.from.x !== s.to.x && (y = y.concat(d), o.from = t.effects.setTransition(o, d, s.from.x, o.from), o.to = t.effects.setTransition(o, d, s.to.x, o.to))), ("content" === m || "both" === m) && s.from.y !== s.to.y && (y = y.concat(c).concat(u), o.from = t.effects.setTransition(o, c, s.from.y, o.from), o.to = t.effects.setTransition(o, c, s.to.y, o.to)), t.effects.save(o, y), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (r = t.effects.getBaseline(g, i), o.from.top = (i.outerHeight - o.outerHeight()) * r.y, o.from.left = (i.outerWidth - o.outerWidth()) * r.x, o.to.top = (i.outerHeight - o.to.outerHeight) * r.y, o.to.left = (i.outerWidth - o.to.outerWidth) * r.x), o.css(o.from), ("content" === m || "both" === m) && (h = h.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), u = a.concat(h).concat(d), o.find("*[width]").each(function () {
                var n = t(this),
                    i = {
                        height: n.height(),
                        width: n.width(),
                        outerHeight: n.outerHeight(),
                        outerWidth: n.outerWidth()
                    };
                p && t.effects.save(n, u), n.from = {
                    height: i.height * s.from.y,
                    width: i.width * s.from.x,
                    outerHeight: i.outerHeight * s.from.y,
                    outerWidth: i.outerWidth * s.from.x
                }, n.to = {
                    height: i.height * s.to.y,
                    width: i.width * s.to.x,
                    outerHeight: i.height * s.to.y,
                    outerWidth: i.width * s.to.x
                }, s.from.y !== s.to.y && (n.from = t.effects.setTransition(n, h, s.from.y, n.from), n.to = t.effects.setTransition(n, h, s.to.y, n.to)), s.from.x !== s.to.x && (n.from = t.effects.setTransition(n, d, s.from.x, n.from), n.to = t.effects.setTransition(n, d, s.to.x, n.to)), n.css(n.from), n.animate(n.to, e.duration, e.easing, function () {
                    p && t.effects.restore(n, u)
                })
            })), o.animate(o.to, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === f && o.hide(), t.effects.restore(o, y), p || ("static" === v ? o.css({
                        position: "relative",
                        top: o.to.top,
                        left: o.to.left
                    }) : t.each(["top", "left"], function (t, e) {
                        o.css(e, function (e, n) {
                            var i = parseInt(n, 10),
                                r = t ? o.to.left : o.to.top;
                            return "auto" === n ? r + "px" : i + r + "px"
                        })
                    })), t.effects.removeWrapper(o), n()
                }
            })
        }, t.effects.effect.scale = function (e, n) {
            var i = t(this),
                r = t.extend(!0, {}, e),
                s = t.effects.setMode(i, e.mode || "effect"),
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === s ? 0 : 100),
                a = e.direction || "both",
                l = e.origin,
                u = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                },
                c = {
                    y: "horizontal" !== a ? o / 100 : 1,
                    x: "vertical" !== a ? o / 100 : 1
                };
            r.effect = "size", r.queue = !1, r.complete = n, "effect" !== s && (r.origin = l || ["middle", "center"], r.restore = !0), r.from = e.from || ("show" === s ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : u), r.to = {
                height: u.height * c.y,
                width: u.width * c.x,
                outerHeight: u.outerHeight * c.y,
                outerWidth: u.outerWidth * c.x
            }, r.fade && ("show" === s && (r.from.opacity = 0, r.to.opacity = 1), "hide" === s && (r.from.opacity = 1, r.to.opacity = 0)), i.effect(r)
        }, t.effects.effect.puff = function (e, n) {
            var i = t(this),
                r = t.effects.setMode(i, e.mode || "hide"),
                s = "hide" === r,
                o = parseInt(e.percent, 10) || 150,
                a = o / 100,
                l = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            t.extend(e, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: r,
                complete: n,
                percent: s ? o : 100,
                from: s ? l : {
                    height: l.height * a,
                    width: l.width * a,
                    outerHeight: l.outerHeight * a,
                    outerWidth: l.outerWidth * a
                }
            }), i.effect(e)
        }, t.effects.effect.pulsate = function (e, n) {
            var i, r = t(this),
                s = t.effects.setMode(r, e.mode || "show"),
                o = "show" === s,
                a = "hide" === s,
                l = o || "hide" === s,
                u = 2 * (e.times || 5) + (l ? 1 : 0),
                c = e.duration / u,
                h = 0,
                d = r.queue(),
                f = d.length;
            for ((o || !r.is(":visible")) && (r.css("opacity", 0).show(), h = 1), i = 1; u > i; i++) r.animate({
                opacity: h
            }, c, e.easing), h = 1 - h;
            r.animate({
                opacity: h
            }, c, e.easing), r.queue(function () {
                a && r.hide(), n()
            }), f > 1 && d.splice.apply(d, [1, 0].concat(d.splice(f, u + 1))), r.dequeue()
        }, t.effects.effect.shake = function (e, n) {
            var i, r = t(this),
                s = ["position", "top", "bottom", "left", "right", "height", "width"],
                o = t.effects.setMode(r, e.mode || "effect"),
                a = e.direction || "left",
                l = e.distance || 20,
                u = e.times || 3,
                c = 2 * u + 1,
                h = Math.round(e.duration / c),
                d = "up" === a || "down" === a ? "top" : "left",
                f = "up" === a || "left" === a,
                p = {},
                m = {},
                g = {},
                v = r.queue(),
                y = v.length;
            for (t.effects.save(r, s), r.show(), t.effects.createWrapper(r), p[d] = (f ? "-=" : "+=") + l, m[d] = (f ? "+=" : "-=") + 2 * l, g[d] = (f ? "-=" : "+=") + 2 * l, r.animate(p, h, e.easing), i = 1; u > i; i++) r.animate(m, h, e.easing).animate(g, h, e.easing);
            r.animate(m, h, e.easing).animate(p, h / 2, e.easing).queue(function () {
                "hide" === o && r.hide(), t.effects.restore(r, s), t.effects.removeWrapper(r), n()
            }), y > 1 && v.splice.apply(v, [1, 0].concat(v.splice(y, c + 1))), r.dequeue()
        }, t.effects.effect.slide = function (e, n) {
            var i, r = t(this),
                s = ["position", "top", "bottom", "left", "right", "width", "height"],
                o = t.effects.setMode(r, e.mode || "show"),
                a = "show" === o,
                l = e.direction || "left",
                u = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                h = {};
            t.effects.save(r, s), r.show(), i = e.distance || r["top" === u ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(r).css({
                overflow: "hidden"
            }), a && r.css(u, c ? isNaN(i) ? "-" + i : -i : i), h[u] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + i, r.animate(h, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function () {
                    "hide" === o && r.hide(), t.effects.restore(r, s), t.effects.removeWrapper(r), n()
                }
            })
        }, t.effects.effect.transfer = function (e, n) {
            var i = t(this),
                r = t(e.to),
                s = "fixed" === r.css("position"),
                o = t("body"),
                a = s ? o.scrollTop() : 0,
                l = s ? o.scrollLeft() : 0,
                u = r.offset(),
                c = {
                    top: u.top - a,
                    left: u.left - l,
                    height: r.innerHeight(),
                    width: r.innerWidth()
                },
                h = i.offset(),
                d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                    top: h.top - a,
                    left: h.left - l,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: s ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function () {
                    d.remove(), n()
                })
        }, t.widget("ui.progressbar", {
            version: "1.11.4",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function () {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function () {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function (t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function (t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function (t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function (t, e) {
                "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            _percentage: function () {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function () {
                var e = this.options.value,
                    n = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(n.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        }), t.widget("ui.selectable", t.ui.mouse, {
            version: "1.11.4",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function () {
                var e, n = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                    e = t(n.options.filter, n.element[0]), e.addClass("ui-selectee"), e.each(function () {
                        var e = t(this),
                            n = e.offset();
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: e,
                            left: n.left,
                            top: n.top,
                            right: n.left + e.outerWidth(),
                            bottom: n.top + e.outerHeight(),
                            startselected: !1,
                            selected: e.hasClass("ui-selected"),
                            selecting: e.hasClass("ui-selecting"),
                            unselecting: e.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function () {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function (e) {
                var n = this,
                    i = this.options;
                this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(i.filter, this.element[0]), this._trigger("start", e), t(i.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                    var i = t.data(this, "selectable-item");
                    i.startselected = !0, e.metaKey || e.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                        unselecting: i.element
                    }))
                }), t(e.target).parents().addBack().each(function () {
                    var i, r = t.data(this, "selectable-item");
                    return r ? (i = !e.metaKey && !e.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(i ? "ui-unselecting" : "ui-selected").addClass(i ? "ui-selecting" : "ui-unselecting"), r.unselecting = !i, r.selecting = i, r.selected = i, i ? n._trigger("selecting", e, {
                        selecting: r.element
                    }) : n._trigger("unselecting", e, {
                        unselecting: r.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function (e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var n, i = this,
                        r = this.options,
                        s = this.opos[0],
                        o = this.opos[1],
                        a = e.pageX,
                        l = e.pageY;
                    return s > a && (n = a, a = s, s = n), o > l && (n = l, l = o, o = n), this.helper.css({
                        left: s,
                        top: o,
                        width: a - s,
                        height: l - o
                    }), this.selectees.each(function () {
                        var n = t.data(this, "selectable-item"),
                            u = !1;
                        n && n.element !== i.element[0] && ("touch" === r.tolerance ? u = !(n.left > a || s > n.right || n.top > l || o > n.bottom) : "fit" === r.tolerance && (u = n.left > s && a > n.right && n.top > o && l > n.bottom), u ? (n.selected && (n.$element.removeClass("ui-selected"), n.selected = !1), n.unselecting && (n.$element.removeClass("ui-unselecting"), n.unselecting = !1), n.selecting || (n.$element.addClass("ui-selecting"), n.selecting = !0, i._trigger("selecting", e, {
                            selecting: n.element
                        }))) : (n.selecting && ((e.metaKey || e.ctrlKey) && n.startselected ? (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.$element.addClass("ui-selected"), n.selected = !0) : (n.$element.removeClass("ui-selecting"), n.selecting = !1, n.startselected && (n.$element.addClass("ui-unselecting"), n.unselecting = !0), i._trigger("unselecting", e, {
                            unselecting: n.element
                        }))), n.selected && (e.metaKey || e.ctrlKey || n.startselected || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                            unselecting: n.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function (e) {
                var n = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                    var i = t.data(this, "selectable-item");
                    i.$element.removeClass("ui-unselecting"), i.unselecting = !1, i.startselected = !1, n._trigger("unselected", e, {
                        unselected: i.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function () {
                    var i = t.data(this, "selectable-item");
                    i.$element.removeClass("ui-selecting").addClass("ui-selected"), i.selecting = !1, i.selected = !0, i.startselected = !0, n._trigger("selected", e, {
                        selected: i.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        }), t.widget("ui.selectmenu", {
            version: "1.11.4",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function () {
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
            },
            _drawButton: function () {
                var e = this;
                this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                    click: function (t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                    tabindex: this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true"
                }).insertAfter(this.element), t("<span>", {
                    "class": "ui-icon " + this.options.icons.button
                }).prependTo(this.button), this.buttonText = t("<span>", {
                    "class": "ui-selectmenu-text"
                }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                    e.menuItems || e._refreshMenu()
                }), this._hoverable(this.button), this._focusable(this.button)
            },
            _drawMenu: function () {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>", {
                    "class": "ui-selectmenu-menu ui-front"
                }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    role: "listbox",
                    select: function (t, n) {
                        t.preventDefault(), e._setSelection(), e._select(n.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function (t, n) {
                        var i = n.item.data("ui-selectmenu-item");
                        null != e.focusIndex && i.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: i
                        }), e.isOpen || e._select(i, t)), e.focusIndex = i.index, e.button.attr("aria-activedescendant", e.menuItems.eq(i.index).attr("id"))
                    }
                }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                    return !1
                }, this.menuInstance._isDivider = function () {
                    return !1
                }
            },
            refresh: function () {
                this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
            },
            _refreshMenu: function () {
                this.menu.empty();
                var t, e = this.element.find("option");
                e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function (t) {
                this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
            },
            _position: function () {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function (t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function () {
                return this.button
            },
            menuWidget: function () {
                return this.menu
            },
            _renderMenu: function (e, n) {
                var i = this,
                    r = "";
                t.each(n, function (n, s) {
                    s.optgroup !== r && (t("<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" + (s.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: s.optgroup
                    }).appendTo(e), r = s.optgroup), i._renderItemData(e, s)
                })
            },
            _renderItemData: function (t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function (e, n) {
                var i = t("<li>");
                return n.disabled && i.addClass("ui-state-disabled"), this._setText(i, n.label), i.appendTo(e)
            },
            _setText: function (t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function (t, e) {
                var n, i, r = ".ui-menu-item";
                this.isOpen ? n = this.menuItems.eq(this.focusIndex) : (n = this.menuItems.eq(this.element[0].selectedIndex), r += ":not(.ui-state-disabled)"), i = "first" === t || "last" === t ? n["first" === t ? "prevAll" : "nextAll"](r).eq(-1) : n[t + "All"](r).eq(0), i.length && this.menuInstance.focus(e, i)
            },
            _getSelectedItem: function () {
                return this.menuItems.eq(this.element[0].selectedIndex)
            },
            _toggle: function (t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function () {
                var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function (e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function () {
                    var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function (t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function (e) {
                    var n = !0;
                    switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), n = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), n = !1
                    }
                    n && e.preventDefault()
                }
            },
            _selectFocusedItem: function (t) {
                var e = this.menuItems.eq(this.focusIndex);
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function (t, e) {
                var n = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== n && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function (t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function (t, e) {
                "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
            },
            _appendTo: function () {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function () {
                this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function () {
                var t = this.options.width;
                t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
            },
            _resizeMenu: function () {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function () {
                return {
                    disabled: this.element.prop("disabled")
                }
            },
            _parseOptions: function (e) {
                var n = [];
                e.each(function (e, i) {
                    var r = t(i),
                        s = r.parent("optgroup");
                    n.push({
                        element: r,
                        index: e,
                        value: r.val(),
                        label: r.text(),
                        optgroup: s.attr("label") || "",
                        disabled: s.prop("disabled") || r.prop("disabled")
                    })
                }), this.items = n
            },
            _destroy: function () {
                this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
            }
        }), t.widget("ui.slider", t.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function () {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function () {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function () {
                var e, n, i = this.options,
                    r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    s = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                    o = [];
                for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), e = r.length; n > e; e++) o.push(s);
                this.handles = r.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                    t(this).data("ui-slider-handle-index", e)
                })
            },
            _createRange: function () {
                var e = this.options,
                    n = "";
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = t("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(n + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function () {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function () {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function (e) {
                var n, i, r, s, o, a, l, u, c = this,
                    h = this.options;
                return h.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), n = {
                    x: e.pageX,
                    y: e.pageY
                }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                    var n = Math.abs(i - c.values(e));
                    (r > n || r === n && (e === c._lastChangedValue || c.values(e) === h.min)) && (r = n, s = t(this), o = e)
                }), a = this._start(e, o), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, s.addClass("ui-state-active").focus(), l = s.offset(), u = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = u ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - s.width() / 2,
                    top: e.pageY - l.top - s.height() / 2 - (parseInt(s.css("borderTopWidth"), 10) || 0) - (parseInt(s.css("borderBottomWidth"), 10) || 0) + (parseInt(s.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, i), this._animateOff = !0, !0))
            },
            _mouseStart: function () {
                return !0
            },
            _mouseDrag: function (t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    n = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, n), !1
            },
            _mouseStop: function (t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function () {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function (t) {
                var e, n, i, r, s;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, n = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, n = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / e, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), s = this._valueMin() + i * r, this._trimAlignValue(s)
            },
            _start: function (t, e) {
                var n = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), this._trigger("start", t, n)
            },
            _slide: function (t, e, n) {
                var i, r, s;
                this.options.values && this.options.values.length ? (i = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && n > i || 1 === e && i > n) && (n = i), n !== this.values(e) && (r = this.values(), r[e] = n, s = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: n,
                    values: r
                }), i = this.values(e ? 0 : 1), s !== !1 && this.values(e, n))) : n !== this.value() && (s = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: n
                }), s !== !1 && this.value(n))
            },
            _stop: function (t, e) {
                var n = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), this._trigger("stop", t, n)
            },
            _change: function (t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var n = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (n.value = this.values(e), n.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, n)
                }
            },
            value: function (t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function (e, n) {
                var i, r, s;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(n), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (i = this.options.values, r = arguments[0], s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(r[s]), this._change(null, s);
                this._refreshValue()
            },
            _setOption: function (e, n) {
                var i, r = 0;
                switch ("range" === e && this.options.range === !0 && ("min" === n ? (this.options.value = this._values(0), this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (r = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!n), this._super(e, n), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function () {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function (t) {
                var e, n, i;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this.options.values && this.options.values.length) {
                    for (n = this.options.values.slice(), i = 0; n.length > i; i += 1) n[i] = this._trimAlignValue(n[i]);
                    return n
                }
                return []
            },
            _trimAlignValue: function (t) {
                if (this._valueMin() >= t) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    n = (t - this._valueMin()) % e,
                    i = t - n;
                return 2 * Math.abs(n) >= e && (i += n > 0 ? e : -e), parseFloat(i.toFixed(5))
            },
            _calculateNewMax: function () {
                var t = this.options.max,
                    e = this._valueMin(),
                    n = this.options.step,
                    i = Math.floor(+(t - e).toFixed(this._precision()) / n) * n;
                t = i + e, this.max = parseFloat(t.toFixed(this._precision()))
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = "" + t,
                    n = e.indexOf(".");
                return -1 === n ? 0 : e.length - n - 1
            },
            _valueMin: function () {
                return this.options.min
            },
            _valueMax: function () {
                return this.max
            },
            _refreshValue: function () {
                var e, n, i, r, s, o = this.options.range,
                    a = this.options,
                    l = this,
                    u = this._animateOff ? !1 : a.animate,
                    c = {};
                this.options.values && this.options.values.length ? this.handles.each(function (i) {
                    n = 100 * ((l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = n + "%", t(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        left: n + "%"
                    }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                        width: n - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    })) : (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                        bottom: n + "%"
                    }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                        height: n - e + "%"
                    }, {
                        queue: !1,
                        duration: a.animate
                    }))), e = n
                }) : (i = this.value(), r = this._valueMin(), s = this._valueMax(), n = s !== r ? 100 * ((i - r) / (s - r)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    width: n + "%"
                }, a.animate), "max" === o && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                    width: 100 - n + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                    height: n + "%"
                }, a.animate), "max" === o && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                    height: 100 - n + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))
            },
            _handleEvents: {
                keydown: function (e) {
                    var n, i, r, s, o = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), n = this._start(e, o), n === !1)) return
                    }
                    switch (s = this.options.step, i = r = this.options.values && this.options.values.length ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        r = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        r = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        r = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        r = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        r = this._trimAlignValue(i + s);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        r = this._trimAlignValue(i - s)
                    }
                    this._slide(e, o, r)
                },
                keyup: function (e) {
                    var n = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, n), this._change(e, n), t(e.target).removeClass("ui-state-active"))
                }
            }
        }), t.widget("ui.sortable", t.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function (t, e, n) {
                return t >= e && e + n > t
            },
            _isFloating: function (t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function () {
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function (t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function () {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function () {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function () {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function (e, n) {
                var i = null,
                    r = !1,
                    s = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
                    return t.data(this, s.widgetName + "-item") === s ? (i = t(this), !1) : void 0
                }), t.data(e.target, s.widgetName + "-item") === s && (i = t(e.target)), i && (!this.options.handle || n || (t(this.options.handle, i).find("*").addBack().each(function () {
                    this === e.target && (r = !0)
                }), r)) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function (e, n, i) {
                var r, s, o = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (s = this.document.find("body"), this.storedCursor = s.css("cursor"), s.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(s)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                    for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function (e) {
                var n, i, r, s, o = this.options,
                    a = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), e.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), a !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), n = this.items.length - 1; n >= 0; n--)
                    if (i = this.items[n], r = i.item[0], s = this._intersectsWithPointer(i), s && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === s ? "next" : "prev"]()[0] !== r && !t.contains(this.placeholder[0], r) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], r) : !0)) {
                        if (this.direction = 1 === s ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                        this._rearrange(e, i), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function (e, n) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var i = this,
                            r = this.placeholder.offset(),
                            s = this.options.axis,
                            o = {};
                        s && "x" !== s || (o.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), s && "y" !== s || (o.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                            i._clear(e)
                        })
                    } else this._clear(e, n);
                    return !1
                }
            },
            cancel: function () {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function (e) {
                var n = this._getItemsAsjQuery(e && e.connected),
                    i = [];
                return e = e || {}, t(n).each(function () {
                    var n = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    n && i.push((e.key || n[1] + "[]") + "=" + (e.key && e.expression ? n[1] : n[2]))
                }), !i.length && e.key && i.push(e.key + "="), i.join("&")
            },
            toArray: function (e) {
                var n = this._getItemsAsjQuery(e && e.connected),
                    i = [];
                return e = e || {}, n.each(function () {
                    i.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), i
            },
            _intersectsWith: function (t) {
                var e = this.positionAbs.left,
                    n = e + this.helperProportions.width,
                    i = this.positionAbs.top,
                    r = i + this.helperProportions.height,
                    s = t.left,
                    o = s + t.width,
                    a = t.top,
                    l = a + t.height,
                    u = this.offset.click.top,
                    c = this.offset.click.left,
                    h = "x" === this.options.axis || i + u > a && l > i + u,
                    d = "y" === this.options.axis || e + c > s && o > e + c,
                    f = h && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? f : e + this.helperProportions.width / 2 > s && o > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && l > r - this.helperProportions.height / 2
            },
            _intersectsWithPointer: function (t) {
                var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    i = e && n,
                    r = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return i ? this.floating ? s && "right" === s || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1) : !1
            },
            _intersectsWithSides: function (t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    i = this._getDragVerticalDirection(),
                    r = this._getDragHorizontalDirection();
                return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && e || "up" === i && !e)
            },
            _getDragVerticalDirection: function () {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function () {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function (t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function () {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function (e) {
                function n() {
                    a.push(this)
                }
                var i, r, s, o, a = [],
                    l = [],
                    u = this._connectWith();
                if (u && e)
                    for (i = u.length - 1; i >= 0; i--)
                        for (s = t(u[i], this.document[0]), r = s.length - 1; r >= 0; r--) o = t.data(s[r], this.widgetFullName), o && o !== this && !o.options.disabled && l.push([t.isFunction(o.options.items) ? o.options.items.call(o.element) : t(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = l.length - 1; i >= 0; i--) l[i][0].each(n);
                return t(a)
            },
            _removeCurrentsFromItems: function () {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function (t) {
                    for (var n = 0; e.length > n; n++)
                        if (e[n] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function (e) {
                this.items = [], this.containers = [this];
                var n, i, r, s, o, a, l, u, c = this.items,
                    h = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]],
                    d = this._connectWith();
                if (d && this.ready)
                    for (n = d.length - 1; n >= 0; n--)
                        for (r = t(d[n], this.document[0]), i = r.length - 1; i >= 0; i--) s = t.data(r[i], this.widgetFullName), s && s !== this && !s.options.disabled && (h.push([t.isFunction(s.options.items) ? s.options.items.call(s.element[0], e, {
                            item: this.currentItem
                        }) : t(s.options.items, s.element), s]), this.containers.push(s));
                for (n = h.length - 1; n >= 0; n--)
                    for (o = h[n][1], a = h[n][0], i = 0, u = a.length; u > i; i++) l = t(a[i]), l.data(this.widgetName + "-item", o), c.push({
                        item: l,
                        instance: o,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function (e) {
                this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var n, i, r, s;
                for (n = this.items.length - 1; n >= 0; n--) i = this.items[n], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? t(this.options.toleranceElement, i.item) : i.item, e || (i.width = r.outerWidth(), i.height = r.outerHeight()), s = r.offset(), i.left = s.left, i.top = s.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (n = this.containers.length - 1; n >= 0; n--) s = this.containers[n].element.offset(), this.containers[n].containerCache.left = s.left, this.containers[n].containerCache.top = s.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
                return this
            },
            _createPlaceholder: function (e) {
                e = e || this;
                var n, i = e.options;
                i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                    element: function () {
                        var i = e.currentItem[0].nodeName.toLowerCase(),
                            r = t("<" + i + ">", e.document[0]).addClass(n || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tbody" === i ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(r)) : "tr" === i ? e._createTrPlaceholder(e.currentItem, r) : "img" === i && r.attr("src", e.currentItem.attr("src")), n || r.css("visibility", "hidden"), r
                    },
                    update: function (t, r) {
                        (!n || i.forcePlaceholderSize) && (r.height() || r.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(i.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), i.placeholder.update(e, e.placeholder)
            },
            _createTrPlaceholder: function (e, n) {
                var i = this;
                e.children().each(function () {
                    t("<td>&#160;</td>", i.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                })
            },
            _contactContainers: function (e) {
                var n, i, r, s, o, a, l, u, c, h, d = null,
                    f = null;
                for (n = this.containers.length - 1; n >= 0; n--)
                    if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                        if (this._intersectsWith(this.containers[n].containerCache)) {
                            if (d && t.contains(this.containers[n].element[0], d.element[0])) continue;
                            d = this.containers[n], f = n
                        } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", e, this._uiHash(this)), this.containers[n].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[f].containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1);
                    else {
                        for (r = 1e4, s = null, c = d.floating || this._isFloating(this.currentItem), o = c ? "left" : "top", a = c ? "width" : "height", h = c ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) t.contains(this.containers[f].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[o], u = !1, e[h] - l > this.items[i][a] / 2 && (u = !0), r > Math.abs(e[h] - l) && (r = Math.abs(e[h] - l), s = this.items[i], this.direction = u ? "up" : "down"));
                        if (!s && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[f]) return void(this.currentContainer.containerCache.over || (this.containers[f]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        s ? this._rearrange(e, s, null, !0) : this._rearrange(e, null, this.containers[f].element, !0), this._trigger("change", e, this._uiHash()), this.containers[f]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[f], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[f]._trigger("over", e, this._uiHash(this)), this.containers[f].containerCache.over = 1
                    }
            },
            _createHelper: function (e) {
                var n = this.options,
                    i = t.isFunction(n.helper) ? t(n.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
                return i.parents("body").length || t("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
            },
            _adjustOffsetFromHelper: function (e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function () {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function () {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function () {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function () {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function () {
                var e, n, i, r = this.options;
                "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(r.containment) || (e = t(r.containment)[0], n = t(r.containment).offset(), i = "hidden" !== t(e).css("overflow"), this.containment = [n.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function (e, n) {
                n || (n = this.position);
                var i = "absolute" === e ? 1 : -1,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    s = /(html|body)/i.test(r[0].tagName);
                return {
                    top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : s ? 0 : r.scrollTop()) * i,
                    left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : s ? 0 : r.scrollLeft()) * i
                }
            },
            _generatePosition: function (e) {
                var n, i, r = this.options,
                    s = e.pageX,
                    o = e.pageY,
                    a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(a[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (s = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (s = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), r.grid && (n = this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1], o = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, i = this.originalPageX + Math.round((s - this.originalPageX) / r.grid[0]) * r.grid[0], s = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                    left: s - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
                }
            },
            _rearrange: function (t, e, n, i) {
                n ? n[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var r = this.counter;
                this._delay(function () {
                    r === this.counter && this.refreshPositions(!i)
                })
            },
            _clear: function (t, e) {
                function n(t, e, n) {
                    return function (i) {
                        n._trigger(t, i, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var i, r = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && r.push(function (t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || r.push(function (t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (r.push(function (t) {
                        this._trigger("remove", t, this._uiHash())
                    }), r.push(function (t) {
                        return function (e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), r.push(function (t) {
                        return function (e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || r.push(n("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (i = 0; r.length > i; i++) r[i].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function () {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function (e) {
                var n = e || this;
                return {
                    helper: n.helper,
                    placeholder: n.placeholder || t([]),
                    position: n.position,
                    originalPosition: n.originalPosition,
                    offset: n.positionAbs,
                    item: n.currentItem,
                    sender: e ? e.element : null
                }
            }
        }), t.widget("ui.spinner", {
            version: "1.11.4",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function () {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function () {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function () {
                var e = {},
                    n = this.element;
                return t.each(["min", "max", "step"], function (t, i) {
                    var r = n.attr(i);
                    void 0 !== r && r.length && (e[i] = r)
                }), e
            },
            _events: {
                keydown: function (t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function () {
                    this.previous = this.element.val()
                },
                blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function (t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function (e) {
                    function n() {
                        var t = this.element[0] === this.document[0].activeElement;
                        t || (this.element.focus(), this.previous = i, this._delay(function () {
                            this.previous = i
                        }))
                    }
                    var i;
                    i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), n.call(this), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, n.call(this)
                    }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function (e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function () {
                var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
            },
            _keydown: function (e) {
                var n = this.options,
                    i = t.ui.keyCode;
                switch (e.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, e), !0;
                case i.DOWN:
                    return this._repeat(null, -1, e), !0;
                case i.PAGE_UP:
                    return this._repeat(null, n.page, e), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -n.page, e), !0
                }
                return !1
            },
            _uiSpinnerHtml: function () {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function () {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function (t) {
                return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function (t, e, n) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                    this._repeat(40, e, n)
                }, t), this._spin(e * this.options.step, n)
            },
            _spin: function (t, e) {
                var n = this.value() || 0;
                this.counter || (this.counter = 1), n = this._adjustValue(n + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                    value: n
                }) === !1 || (this._value(n), this.counter++)
            },
            _increment: function (e) {
                var n = this.options.incremental;
                return n ? t.isFunction(n) ? n(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function () {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function (t) {
                var e = "" + t,
                    n = e.indexOf(".");
                return -1 === n ? 0 : e.length - n - 1
            },
            _adjustValue: function (t) {
                var e, n, i = this.options;
                return e = null !== i.min ? i.min : 0, n = t - e, n = Math.round(n / i.step) * i.step, t = e + n, t = parseFloat(t.toFixed(this._precision())), null !== i.max && t > i.max ? i.max : null !== i.min && i.min > t ? i.min : t
            },
            _stop: function (t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function (t, e) {
                if ("culture" === t || "numberFormat" === t) {
                    var n = this._parse(this.element.val());
                    return this.options[t] = e, void this.element.val(this._format(n))
                }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
            },
            _setOptions: l(function (t) {
                this._super(t)
            }),
            _parse: function (t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function (t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function () {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function () {
                var t = this.value();
                return null === t ? !1 : t === this._adjustValue(t)
            },
            _value: function (t, e) {
                var n;
                "" !== t && (n = this._parse(t), null !== n && (e || (n = this._adjustValue(n)), t = this._format(n))), this.element.val(t), this._refresh()
            },
            _destroy: function () {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: l(function (t) {
                this._stepUp(t)
            }),
            _stepUp: function (t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: l(function (t) {
                this._stepDown(t)
            }),
            _stepDown: function (t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: l(function (t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: l(function (t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function (t) {
                return arguments.length ? void l(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function () {
                return this.uiSpinner
            }
        }), t.widget("ui.tabs", {
            version: "1.11.4",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var t = /#.*$/;
                return function (e) {
                    var n, i;
                    e = e.cloneNode(!1), n = e.href.replace(t, ""), i = location.href.replace(t, "");
                    try {
                        n = decodeURIComponent(n)
                    } catch (r) {}
                    try {
                        i = decodeURIComponent(i)
                    } catch (r) {}
                    return e.hash.length > 1 && n === i
                }
            }(),
            _create: function () {
                var e = this,
                    n = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible), this._processTabs(), n.active = this._initialActive(), t.isArray(n.disabled) && (n.disabled = t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(n.active) : t(), this._refresh(), this.active.length && this.load(n.active)
            },
            _initialActive: function () {
                var e = this.options.active,
                    n = this.options.collapsible,
                    i = location.hash.substring(1);
                return null === e && (i && this.tabs.each(function (n, r) {
                    return t(r).attr("aria-controls") === i ? (e = n, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = n ? !1 : 0)), !n && e === !1 && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function () {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function (e) {
                var n = t(this.document[0].activeElement).closest("li"),
                    i = this.tabs.index(n),
                    r = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        i++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        r = !1, i--;
                        break;
                    case t.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(i === this.options.active ? !1 : i);
                    default:
                        return
                    }
                    e.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, r), e.ctrlKey || e.metaKey || (n.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", i)
                    }, this.delay))
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, n) {
                function i() {
                    return e > r && (e = 0), 0 > e && (e = r), e
                }
                for (var r = this.tabs.length - 1; - 1 !== t.inArray(i(), this.options.disabled);) e = n ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options,
                    n = this.tablist.children(":has(a[href])");
                e.disabled = t.map(n.filter(".ui-state-disabled"), function (t) {
                    return n.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this,
                    n = this.tabs,
                    i = this.anchors,
                    r = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function () {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = t(), this.anchors.each(function (n, i) {
                    var r, s, o, a = t(i).uniqueId().attr("id"),
                        l = t(i).closest("li"),
                        u = l.attr("aria-controls");
                    e._isLocal(i) ? (r = i.hash, o = r.substring(1), s = e.element.find(e._sanitizeSelector(r))) : (o = l.attr("aria-controls") || t({}).uniqueId()[0].id, r = "#" + o, s = e.element.find(r), s.length || (s = e._createPanel(o), s.insertAfter(e.panels[n - 1] || e.tablist)), s.attr("aria-live", "polite")), s.length && (e.panels = e.panels.add(s)), u && l.data("ui-tabs-aria-controls", u), l.attr({
                        "aria-controls": o,
                        "aria-labelledby": a
                    }), s.attr("aria-labelledby", a)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), n && (this._off(n.not(this.tabs)), this._off(i.not(this.anchors)), this._off(r.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var n, i = 0; n = this.tabs[i]; i++) e === !0 || -1 !== t.inArray(i, e) ? t(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function (e) {
                var n = {};
                e && t.each(e.split(" "), function (t, e) {
                    n[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function (t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, n), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var n, i = this.element.parent();
                "fill" === e ? (n = i.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var e = t(this),
                        i = e.css("position");
                    "absolute" !== i && "fixed" !== i && (n -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    n -= t(this).outerHeight(!0)
                }), this.panels.each(function () {
                    t(this).height(Math.max(0, n - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (n = 0, this.panels.each(function () {
                    n = Math.max(n, t(this).height("").height())
                }).height(n))
            },
            _eventHandler: function (e) {
                var n = this.options,
                    i = this.active,
                    r = t(e.currentTarget),
                    s = r.closest("li"),
                    o = s[0] === i[0],
                    a = o && n.collapsible,
                    l = a ? t() : this._getPanelForTab(s),
                    u = i.length ? this._getPanelForTab(i) : t(),
                    c = {
                        oldTab: i,
                        oldPanel: u,
                        newTab: a ? t() : s,
                        newPanel: l
                    };
                e.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || o && !n.collapsible || this._trigger("beforeActivate", e, c) === !1 || (n.active = a ? !1 : this.tabs.index(s), this.active = o ? t() : s, this.xhr && this.xhr.abort(), u.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(s), e), this._toggle(e, c))
            },
            _toggle: function (e, n) {
                function i() {
                    s.running = !1, s._trigger("activate", e, n)
                }

                function r() {
                    n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && s.options.show ? s._show(o, s.options.show, i) : (o.show(), i())
                }
                var s = this,
                    o = n.newPanel,
                    a = n.oldPanel;
                this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                    n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r()
                }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), r()), a.attr("aria-hidden", "true"), n.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), o.length && a.length ? n.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), n.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function (e) {
                var n, i = this._findActive(e);
                i[0] !== this.active[0] && (i.length || (i = this.active), n = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function (t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var e = t(this),
                        n = e.data("ui-tabs-aria-controls");
                    n ? e.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (e) {
                var n = this.options.disabled;
                n !== !1 && (void 0 === e ? n = !1 : (e = this._getIndex(e), n = t.isArray(n) ? t.map(n, function (t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function (t, n) {
                    return n !== e ? n : null
                })), this._setupDisabled(n))
            },
            disable: function (e) {
                var n = this.options.disabled;
                if (n !== !0) {
                    if (void 0 === e) n = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, n)) return;
                        n = t.isArray(n) ? t.merge([e], n).sort() : [e];
                    }
                    this._setupDisabled(n)
                }
            },
            load: function (e, n) {
                e = this._getIndex(e);
                var i = this,
                    r = this.tabs.eq(e),
                    s = r.find(".ui-tabs-anchor"),
                    o = this._getPanelForTab(r),
                    a = {
                        tab: r,
                        panel: o
                    },
                    l = function (t, e) {
                        "abort" === e && i.panels.stop(!1, !0), r.removeClass("ui-tabs-loading"), o.removeAttr("aria-busy"), t === i.xhr && delete i.xhr
                    };
                this._isLocal(s[0]) || (this.xhr = t.ajax(this._ajaxSettings(s, n, a)), this.xhr && "canceled" !== this.xhr.statusText && (r.addClass("ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (t, e, r) {
                    setTimeout(function () {
                        o.html(t), i._trigger("load", n, a), l(r, e)
                    }, 1)
                }).fail(function (t, e) {
                    setTimeout(function () {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function (e, n, i) {
                var r = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function (e, s) {
                        return r._trigger("beforeLoad", n, t.extend({
                            jqXHR: e,
                            ajaxSettings: s
                        }, i))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var n = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + n))
            }
        }), t.widget("ui.tooltip", {
            version: "1.11.4",
            options: {
                content: function () {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function (e, n) {
                var i = (e.attr("aria-describedby") || "").split(/\s+/);
                i.push(n), e.data("ui-tooltip-id", n).attr("aria-describedby", t.trim(i.join(" ")))
            },
            _removeDescribedBy: function (e) {
                var n = e.data("ui-tooltip-id"),
                    i = (e.attr("aria-describedby") || "").split(/\s+/),
                    r = t.inArray(n, i); - 1 !== r && i.splice(r, 1), e.removeData("ui-tooltip-id"), i = t.trim(i.join(" ")), i ? e.attr("aria-describedby", i) : e.removeAttr("aria-describedby")
            },
            _create: function () {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            },
            _setOption: function (e, n) {
                var i = this;
                return "disabled" === e ? (this[n ? "_disable" : "_enable"](), void(this.options[e] = n)) : (this._super(e, n), void("content" === e && t.each(this.tooltips, function (t, e) {
                    i._updateContent(e.element)
                })))
            },
            _disable: function () {
                var e = this;
                t.each(this.tooltips, function (n, i) {
                    var r = t.Event("blur");
                    r.target = r.currentTarget = i.element[0], e.close(r, !0)
                }), this.element.find(this.options.items).addBack().each(function () {
                    var e = t(this);
                    e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                })
            },
            _enable: function () {
                this.element.find(this.options.items).addBack().each(function () {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                })
            },
            open: function (e) {
                var n = this,
                    i = t(e ? e.target : this.element).closest(this.options.items);
                i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), e && "mouseover" === e.type && i.parents().each(function () {
                    var e, i = t(this);
                    i.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, n.close(e, !0)), i.attr("title") && (i.uniqueId(), n.parents[this.id] = {
                        element: this,
                        title: i.attr("title")
                    }, i.attr("title", ""))
                }), this._registerCloseHandlers(e, i), this._updateContent(i, e))
            },
            _updateContent: function (t, e) {
                var n, i = this.options.content,
                    r = this,
                    s = e ? e.type : null;
                return "string" == typeof i ? this._open(e, t, i) : (n = i.call(t[0], function (n) {
                    r._delay(function () {
                        t.data("ui-tooltip-open") && (e && (e.type = s), this._open(e, t, n))
                    })
                }), void(n && this._open(e, t, n)))
            },
            _open: function (e, n, i) {
                function r(t) {
                    u.of = t, o.is(":hidden") || o.position(u)
                }
                var s, o, a, l, u = t.extend({}, this.options.position);
                if (i) {
                    if (s = this._find(n)) return void s.tooltip.find(".ui-tooltip-content").html(i);
                    n.is("[title]") && (e && "mouseover" === e.type ? n.attr("title", "") : n.removeAttr("title")), s = this._tooltip(n), o = s.tooltip, this._addDescribedBy(n, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), i.clone ? (l = i.clone(), l.removeAttr("id").find("[id]").removeAttr("id")) : l = i, t("<div>").html(l).appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: r
                    }), r(e)) : o.position(t.extend({
                        of: n
                    }, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function () {
                        o.is(":visible") && (r(u.of), clearInterval(a))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: o
                    })
                }
            },
            _registerCloseHandlers: function (e, n) {
                var i = {
                    keyup: function (e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = n[0], this.close(i, !0)
                        }
                    }
                };
                n[0] !== this.element[0] && (i.remove = function () {
                    this._removeTooltip(this._find(n).tooltip)
                }), e && "mouseover" !== e.type || (i.mouseleave = "close"), e && "focusin" !== e.type || (i.focusout = "close"), this._on(!0, n, i)
            },
            close: function (e) {
                var n, i = this,
                    r = t(e ? e.currentTarget : this.element),
                    s = this._find(r);
                return s ? (n = s.tooltip, void(s.closing || (clearInterval(this.delayedShow), r.data("ui-tooltip-title") && !r.attr("title") && r.attr("title", r.data("ui-tooltip-title")), this._removeDescribedBy(r), s.hiding = !0, n.stop(!0), this._hide(n, this.options.hide, function () {
                    i._removeTooltip(t(this))
                }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, n) {
                    t(n.element).attr("title", n.title), delete i.parents[e]
                }), s.closing = !0, this._trigger("close", e, {
                    tooltip: n
                }), s.hiding || (s.closing = !1)))) : void r.removeData("ui-tooltip-open")
            },
            _tooltip: function (e) {
                var n = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    i = n.uniqueId().attr("id");
                return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = {
                    element: e,
                    tooltip: n
                }
            },
            _find: function (t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function (t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _destroy: function () {
                var e = this;
                t.each(this.tooltips, function (n, i) {
                    var r = t.Event("blur"),
                        s = i.element;
                    r.target = r.currentTarget = s[0], e.close(r, !0), t("#" + n).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        })
}),
function (t) {
    "use strict";

    function e(t) {
        return function () {
            var e, n = arguments[0];
            for (e = "[" + (t ? t + ":" : "") + n + "] http://errors.angularjs.org/1.5.7/" + (t ? t + "/" : "") + n, n = 1; n < arguments.length; n++) {
                e = e + (1 == n ? "?" : "&") + "p" + (n - 1) + "=";
                var i, r = encodeURIComponent;
                i = arguments[n], i = "function" == typeof i ? i.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof i ? "undefined" : "string" != typeof i ? JSON.stringify(i) : i, e += r(i)
            }
            return Error(e)
        }
    }

    function n(t) {
        if (null == t || k(t)) return !1;
        if (oi(t) || $(t) || Vn && t instanceof Vn) return !0;
        var e = "length" in Object(t) && t.length;
        return _(e) && (e >= 0 && (e - 1 in t || t instanceof Array) || "function" == typeof t.item)
    }

    function i(t, e, r) {
        var s, o;
        if (t)
            if (x(t))
                for (s in t) "prototype" == s || "length" == s || "name" == s || t.hasOwnProperty && !t.hasOwnProperty(s) || e.call(r, t[s], s, t);
            else if (oi(t) || n(t)) {
            var a = "object" != typeof t;
            for (s = 0, o = t.length; o > s; s++)(a || s in t) && e.call(r, t[s], s, t)
        } else if (t.forEach && t.forEach !== i) t.forEach(e, r, t);
        else if (b(t))
            for (s in t) e.call(r, t[s], s, t);
        else if ("function" == typeof t.hasOwnProperty)
            for (s in t) t.hasOwnProperty(s) && e.call(r, t[s], s, t);
        else
            for (s in t) Gn.call(t, s) && e.call(r, t[s], s, t);
        return t
    }

    function r(t, e, n) {
        for (var i = Object.keys(t).sort(), r = 0; r < i.length; r++) e.call(n, t[i[r]], i[r]);
        return i
    }

    function s(t) {
        return function (e, n) {
            t(n, e)
        }
    }

    function o() {
        return ++si
    }

    function a(t, e, n) {
        for (var i = t.$$hashKey, r = 0, s = e.length; s > r; ++r) {
            var o = e[r];
            if (y(o) || x(o))
                for (var l = Object.keys(o), u = 0, c = l.length; c > u; u++) {
                    var h = l[u],
                        d = o[h];
                    n && y(d) ? w(d) ? t[h] = new Date(d.valueOf()) : C(d) ? t[h] = new RegExp(d) : d.nodeName ? t[h] = d.cloneNode(!0) : A(d) ? t[h] = d.clone() : (y(t[h]) || (t[h] = oi(d) ? [] : {}), a(t[h], [d], !0)) : t[h] = d
                }
        }
        return i ? t.$$hashKey = i : delete t.$$hashKey, t
    }

    function l(t) {
        return a(t, Qn.call(arguments, 1), !1)
    }

    function u(t) {
        return a(t, Qn.call(arguments, 1), !0)
    }

    function c(t) {
        return parseInt(t, 10)
    }

    function h(t, e) {
        return l(Object.create(t), e)
    }

    function d() {}

    function f(t) {
        return t
    }

    function p(t) {
        return function () {
            return t
        }
    }

    function m(t) {
        return x(t.toString) && t.toString !== ei
    }

    function g(t) {
        return "undefined" == typeof t
    }

    function v(t) {
        return "undefined" != typeof t
    }

    function y(t) {
        return null !== t && "object" == typeof t
    }

    function b(t) {
        return null !== t && "object" == typeof t && !ni(t)
    }

    function $(t) {
        return "string" == typeof t
    }

    function _(t) {
        return "number" == typeof t
    }

    function w(t) {
        return "[object Date]" === ei.call(t)
    }

    function x(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "[object RegExp]" === ei.call(t)
    }

    function k(t) {
        return t && t.window === t
    }

    function D(t) {
        return t && t.$evalAsync && t.$watch
    }

    function S(t) {
        return "boolean" == typeof t
    }

    function T(t) {
        return t && _(t.length) && ai.test(ei.call(t))
    }

    function A(t) {
        return !(!t || !(t.nodeName || t.prop && t.attr && t.find))
    }

    function E(t) {
        var e = {};
        t = t.split(",");
        var n;
        for (n = 0; n < t.length; n++) e[t[n]] = !0;
        return e
    }

    function M(t) {
        return Xn(t.nodeName || t[0] && t[0].nodeName)
    }

    function I(t, e) {
        var n = t.indexOf(e);
        return n >= 0 && t.splice(n, 1), n
    }

    function P(t, e) {
        function n(t, e) {
            var n, i = e.$$hashKey;
            if (oi(t)) {
                n = 0;
                for (var s = t.length; s > n; n++) e.push(r(t[n]))
            } else if (b(t))
                for (n in t) e[n] = r(t[n]);
            else if (t && "function" == typeof t.hasOwnProperty)
                for (n in t) t.hasOwnProperty(n) && (e[n] = r(t[n]));
            else
                for (n in t) Gn.call(t, n) && (e[n] = r(t[n]));
            return i ? e.$$hashKey = i : delete e.$$hashKey, e
        }

        function r(t) {
            if (!y(t)) return t;
            var e = o.indexOf(t);
            if (-1 !== e) return a[e];
            if (k(t) || D(t)) throw ii("cpws");
            var e = !1,
                i = s(t);
            return void 0 === i && (i = oi(t) ? [] : Object.create(ni(t)), e = !0), o.push(t), a.push(i), e ? n(t, i) : i
        }

        function s(t) {
            switch (ei.call(t)) {
            case "[object Int8Array]":
            case "[object Int16Array]":
            case "[object Int32Array]":
            case "[object Float32Array]":
            case "[object Float64Array]":
            case "[object Uint8Array]":
            case "[object Uint8ClampedArray]":
            case "[object Uint16Array]":
            case "[object Uint32Array]":
                return new t.constructor(r(t.buffer));
            case "[object ArrayBuffer]":
                if (!t.slice) {
                    var e = new ArrayBuffer(t.byteLength);
                    return new Uint8Array(e).set(new Uint8Array(t)), e
                }
                return t.slice(0);
            case "[object Boolean]":
            case "[object Number]":
            case "[object String]":
            case "[object Date]":
                return new t.constructor(t.valueOf());
            case "[object RegExp]":
                return e = new RegExp(t.source, t.toString().match(/[^\/]*$/)[0]), e.lastIndex = t.lastIndex, e;
            case "[object Blob]":
                return new t.constructor([t], {
                    type: t.type
                })
            }
            return x(t.cloneNode) ? t.cloneNode(!0) : void 0
        }
        var o = [],
            a = [];
        if (e) {
            if (T(e) || "[object ArrayBuffer]" === ei.call(e)) throw ii("cpta");
            if (t === e) throw ii("cpi");
            return oi(e) ? e.length = 0 : i(e, function (t, n) {
                "$$hashKey" !== n && delete e[n]
            }), o.push(t), a.push(e), n(t, e)
        }
        return r(t)
    }

    function N(t, e) {
        if (t === e) return !0;
        if (null === t || null === e) return !1;
        if (t !== t && e !== e) return !0;
        var n, i = typeof t;
        if (i == typeof e && "object" == i) {
            if (!oi(t)) {
                if (w(t)) return w(e) ? N(t.getTime(), e.getTime()) : !1;
                if (C(t)) return C(e) ? t.toString() == e.toString() : !1;
                if (D(t) || D(e) || k(t) || k(e) || oi(e) || w(e) || C(e)) return !1;
                i = ot();
                for (n in t)
                    if ("$" !== n.charAt(0) && !x(t[n])) {
                        if (!N(t[n], e[n])) return !1;
                        i[n] = !0
                    }
                for (n in e)
                    if (!(n in i) && "$" !== n.charAt(0) && v(e[n]) && !x(e[n])) return !1;
                return !0
            }
            if (!oi(e)) return !1;
            if ((i = t.length) == e.length) {
                for (n = 0; i > n; n++)
                    if (!N(t[n], e[n])) return !1;
                return !0
            }
        }
        return !1
    }

    function O(t, e, n) {
        return t.concat(Qn.call(e, n))
    }

    function H(t, e) {
        var n = 2 < arguments.length ? Qn.call(arguments, 2) : [];
        return !x(e) || e instanceof RegExp ? e : n.length ? function () {
            return arguments.length ? e.apply(t, O(n, arguments, 0)) : e.apply(t, n)
        } : function () {
            return arguments.length ? e.apply(t, arguments) : e.call(t)
        }
    }

    function j(e, n) {
        var i = n;
        return "string" == typeof e && "$" === e.charAt(0) && "$" === e.charAt(1) ? i = void 0 : k(n) ? i = "$WINDOW" : n && t.document === n ? i = "$DOCUMENT" : D(n) && (i = "$SCOPE"), i
    }

    function F(t, e) {
        return g(t) ? void 0 : (_(e) || (e = e ? 2 : null), JSON.stringify(t, j, e))
    }

    function z(t) {
        return $(t) ? JSON.parse(t) : t
    }

    function R(t, e) {
        t = t.replace(di, "");
        var n = Date.parse("Jan 01, 1970 00:00:00 " + t) / 6e4;
        return isNaN(n) ? e : n
    }

    function W(t, e, n) {
        n = n ? -1 : 1;
        var i = t.getTimezoneOffset();
        return e = R(e, i), n *= e - i, t = new Date(t.getTime()), t.setMinutes(t.getMinutes() + n), t
    }

    function q(t) {
        t = Vn(t).clone();
        try {
            t.empty()
        } catch (e) {}
        var n = Vn("<div>").append(t).html();
        try {
            return t[0].nodeType === gi ? Xn(n) : n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (t, e) {
                return "<" + Xn(e)
            })
        } catch (i) {
            return Xn(n)
        }
    }

    function L(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {}
    }

    function B(t) {
        var e = {};
        return i((t || "").split("&"), function (t) {
            var n, i, r;
            t && (i = t = t.replace(/\+/g, "%20"), n = t.indexOf("="), -1 !== n && (i = t.substring(0, n), r = t.substring(n + 1)), i = L(i), v(i) && (r = v(r) ? L(r) : !0, Gn.call(e, i) ? oi(e[i]) ? e[i].push(r) : e[i] = [e[i], r] : e[i] = r))
        }), e
    }

    function V(t) {
        var e = [];
        return i(t, function (t, n) {
            oi(t) ? i(t, function (t) {
                e.push(Y(n, !0) + (!0 === t ? "" : "=" + Y(t, !0)))
            }) : e.push(Y(n, !0) + (!0 === t ? "" : "=" + Y(t, !0)))
        }), e.length ? e.join("&") : ""
    }

    function U(t) {
        return Y(t, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Y(t, e) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, e ? "%20" : "+")
    }

    function K(t, e) {
        var n, i, r = fi.length;
        for (i = 0; r > i; ++i)
            if (n = fi[i] + e, $(n = t.getAttribute(n))) return n;
        return null
    }

    function G(t, e) {
        var n, r, s = {};
        i(fi, function (e) {
            e += "app", !n && t.hasAttribute && t.hasAttribute(e) && (n = t, r = t.getAttribute(e))
        }), i(fi, function (e) {
            e += "app";
            var i;
            !n && (i = t.querySelector("[" + e.replace(":", "\\:") + "]")) && (n = i, r = i.getAttribute(e))
        }), n && (s.strictDi = null !== K(n, "strict-di"), e(n, r ? [r] : [], s))
    }

    function X(e, n, r) {
        y(r) || (r = {}), r = l({
            strictDi: !1
        }, r);
        var s = function () {
                if (e = Vn(e), e.injector()) {
                    var i = e[0] === t.document ? "document" : q(e);
                    throw ii("btstrpd", i.replace(/</, "&lt;").replace(/>/, "&gt;"))
                }
                return n = n || [], n.unshift(["$provide", function (t) {
                    t.value("$rootElement", e)
                }]), r.debugInfoEnabled && n.push(["$compileProvider", function (t) {
                    t.debugInfoEnabled(!0)
                }]), n.unshift("ng"), i = zt(n, r.strictDi), i.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (t, e, n, i) {
                    t.$apply(function () {
                        e.data("$injector", i), n(e)(t)
                    })
                }]), i
            },
            o = /^NG_ENABLE_DEBUG_INFO!/,
            a = /^NG_DEFER_BOOTSTRAP!/;
        return t && o.test(t.name) && (r.debugInfoEnabled = !0, t.name = t.name.replace(o, "")), t && !a.test(t.name) ? s() : (t.name = t.name.replace(a, ""), ri.resumeBootstrap = function (t) {
            return i(t, function (t) {
                n.push(t)
            }), s()
        }, void(x(ri.resumeDeferredBootstrap) && ri.resumeDeferredBootstrap()))
    }

    function J() {
        t.name = "NG_ENABLE_DEBUG_INFO!" + t.name, t.location.reload()
    }

    function Q(t) {
        if (t = ri.element(t).injector(), !t) throw ii("test");
        return t.get("$$testability")
    }

    function Z(t, e) {
        return e = e || "_", t.replace(pi, function (t, n) {
            return (n ? e : "") + t.toLowerCase()
        })
    }

    function tt() {
        var e;
        if (!mi) {
            var n = hi();
            (Un = g(n) ? t.jQuery : n ? t[n] : void 0) && Un.fn.on ? (Vn = Un, l(Un.fn, {
                scope: Ei.scope,
                isolateScope: Ei.isolateScope,
                controller: Ei.controller,
                injector: Ei.injector,
                inheritedData: Ei.inheritedData
            }), e = Un.cleanData, Un.cleanData = function (t) {
                for (var n, i, r = 0; null != (i = t[r]); r++)(n = Un._data(i, "events")) && n.$destroy && Un(i).triggerHandler("$destroy");
                e(t)
            }) : Vn = pt, ri.element = Vn, mi = !0
        }
    }

    function et(t, e, n) {
        if (!t) throw ii("areq", e || "?", n || "required");
        return t
    }

    function nt(t, e, n) {
        return n && oi(t) && (t = t[t.length - 1]), et(x(t), e, "not a function, got " + (t && "object" == typeof t ? t.constructor.name || "Object" : typeof t)), t
    }

    function it(t, e) {
        if ("hasOwnProperty" === t) throw ii("badname", e)
    }

    function rt(t, e, n) {
        if (!e) return t;
        e = e.split(".");
        for (var i, r = t, s = e.length, o = 0; s > o; o++) i = e[o], t && (t = (r = t)[i]);
        return !n && x(t) ? H(r, t) : t
    }

    function st(t) {
        for (var e, n = t[0], i = t[t.length - 1], r = 1; n !== i && (n = n.nextSibling); r++)(e || t[r] !== n) && (e || (e = Vn(Qn.call(t, 0, r))), e.push(n));
        return e || t
    }

    function ot() {
        return Object.create(null)
    }

    function at(t) {
        function n(t, e, n) {
            return t[e] || (t[e] = n())
        }
        var i = e("$injector"),
            r = e("ng");
        return t = n(t, "angular", Object), t.$$minErr = t.$$minErr || e, n(t, "module", function () {
            var t = {};
            return function (e, s, o) {
                if ("hasOwnProperty" === e) throw r("badname", "module");
                return s && t.hasOwnProperty(e) && (t[e] = null), n(t, e, function () {
                    function t(t, e, n, i) {
                        return i || (i = r),
                            function () {
                                return i[n || "push"]([t, e, arguments]), c
                            }
                    }

                    function n(t, n) {
                        return function (i, s) {
                            return s && x(s) && (s.$$moduleName = e), r.push([t, n, arguments]), c
                        }
                    }
                    if (!s) throw i("nomod", e);
                    var r = [],
                        a = [],
                        l = [],
                        u = t("$injector", "invoke", "push", a),
                        c = {
                            _invokeQueue: r,
                            _configBlocks: a,
                            _runBlocks: l,
                            requires: s,
                            name: e,
                            provider: n("$provide", "provider"),
                            factory: n("$provide", "factory"),
                            service: n("$provide", "service"),
                            value: t("$provide", "value"),
                            constant: t("$provide", "constant", "unshift"),
                            decorator: n("$provide", "decorator"),
                            animation: n("$animateProvider", "register"),
                            filter: n("$filterProvider", "register"),
                            controller: n("$controllerProvider", "register"),
                            directive: n("$compileProvider", "directive"),
                            component: n("$compileProvider", "component"),
                            config: u,
                            run: function (t) {
                                return l.push(t), this
                            }
                        };
                    return o && u(o), c
                })
            }
        })
    }

    function lt(t, e) {
        if (oi(t)) {
            e = e || [];
            for (var n = 0, i = t.length; i > n; n++) e[n] = t[n]
        } else if (y(t))
            for (n in e = e || {}, t)("$" !== n.charAt(0) || "$" !== n.charAt(1)) && (e[n] = t[n]);
        return e || t
    }

    function ut(n) {
        l(n, {
            bootstrap: X,
            copy: P,
            extend: l,
            merge: u,
            equals: N,
            element: Vn,
            forEach: i,
            injector: zt,
            noop: d,
            bind: H,
            toJson: F,
            fromJson: z,
            identity: f,
            isUndefined: g,
            isDefined: v,
            isString: $,
            isFunction: x,
            isObject: y,
            isNumber: _,
            isElement: A,
            isArray: oi,
            version: vi,
            isDate: w,
            lowercase: Xn,
            uppercase: Jn,
            callbacks: {
                counter: 0
            },
            getTestability: Q,
            $$minErr: e,
            $$csp: ci,
            reloadWithDebugInfo: J
        }), (Yn = at(t))("ng", ["ngLocale"], ["$provide", function (t) {
            t.provider({
                $$sanitizeUri: Je
            }), t.provider("$compile", Kt).directive({
                a: Or,
                input: Qr,
                textarea: Qr,
                form: zr,
                script: Ws,
                select: Bs,
                style: Us,
                option: Vs,
                ngBind: es,
                ngBindHtml: is,
                ngBindTemplate: ns,
                ngClass: ss,
                ngClassEven: as,
                ngClassOdd: os,
                ngCloak: ls,
                ngController: us,
                ngForm: Rr,
                ngHide: Ns,
                ngIf: ds,
                ngInclude: fs,
                ngInit: ms,
                ngNonBindable: Ss,
                ngPluralize: Ms,
                ngRepeat: Is,
                ngShow: Ps,
                ngStyle: Os,
                ngSwitch: Hs,
                ngSwitchWhen: js,
                ngSwitchDefault: Fs,
                ngOptions: Es,
                ngTransclude: Rs,
                ngModel: Cs,
                ngList: gs,
                ngChange: rs,
                pattern: Ks,
                ngPattern: Ks,
                required: Ys,
                ngRequired: Ys,
                minlength: Xs,
                ngMinlength: Xs,
                maxlength: Gs,
                ngMaxlength: Gs,
                ngValue: ts,
                ngModelOptions: Ds
            }).directive({
                ngInclude: ps
            }).directive(Hr).directive(cs), t.provider({
                $anchorScroll: Rt,
                $animate: Bi,
                $animateCss: Yi,
                $$animateJs: qi,
                $$animateQueue: Li,
                $$AnimateRunner: Ui,
                $$animateAsyncRun: Vi,
                $browser: Vt,
                $cacheFactory: Ut,
                $controller: te,
                $document: ee,
                $exceptionHandler: ne,
                $filter: dn,
                $$forceReflow: Zi,
                $interpolate: pe,
                $interval: me,
                $http: ce,
                $httpParamSerializer: re,
                $httpParamSerializerJQLike: se,
                $httpBackend: de,
                $xhrFactory: he,
                $location: Se,
                $log: Te,
                $parse: Ve,
                $rootScope: Xe,
                $q: Ue,
                $$q: Ye,
                $sce: en,
                $sceDelegate: tn,
                $sniffer: nn,
                $templateCache: Yt,
                $templateRequest: rn,
                $$testability: sn,
                $timeout: on,
                $window: un,
                $$rAF: Ge,
                $$jqLite: Nt,
                $$HashMap: Ni,
                $$cookieReader: hn
            })
        }])
    }

    function ct(t) {
        return t.replace($i, function (t, e, n, i) {
            return i ? n.toUpperCase() : n
        }).replace(_i, "Moz$1")
    }

    function ht(t) {
        return t = t.nodeType, 1 === t || !t || 9 === t
    }

    function dt(t, e) {
        var n, r, s = e.createDocumentFragment(),
            o = [];
        if (ki.test(t)) {
            for (n = n || s.appendChild(e.createElement("div")), r = (Di.exec(t) || ["", ""])[1].toLowerCase(), r = Ti[r] || Ti._default, n.innerHTML = r[1] + t.replace(Si, "<$1></$2>") + r[2], r = r[0]; r--;) n = n.lastChild;
            o = O(o, n.childNodes), n = s.firstChild, n.textContent = ""
        } else o.push(e.createTextNode(t));
        return s.textContent = "", s.innerHTML = "", i(o, function (t) {
            s.appendChild(t)
        }), s
    }

    function ft(t, e) {
        var n = t.parentNode;
        n && n.replaceChild(e, t), e.appendChild(t)
    }

    function pt(e) {
        if (e instanceof pt) return e;
        var n;
        if ($(e) && (e = li(e), n = !0), !(this instanceof pt)) {
            if (n && "<" != e.charAt(0)) throw xi("nosel");
            return new pt(e)
        }
        if (n) {
            n = t.document;
            var i;
            e = (i = Ci.exec(e)) ? [n.createElement(i[1])] : (i = dt(e, n)) ? i.childNodes : []
        }
        Ct(this, e)
    }

    function mt(t) {
        return t.cloneNode(!0)
    }

    function gt(t, e) {
        if (e || yt(t), t.querySelectorAll)
            for (var n = t.querySelectorAll("*"), i = 0, r = n.length; r > i; i++) yt(n[i])
    }

    function vt(t, e, n, r) {
        if (v(r)) throw xi("offargs");
        var s = (r = bt(t)) && r.events,
            o = r && r.handle;
        if (o)
            if (e) {
                var a = function (e) {
                    var i = s[e];
                    v(n) && I(i || [], n), v(n) && i && 0 < i.length || (t.removeEventListener(e, o, !1), delete s[e])
                };
                i(e.split(" "), function (t) {
                    a(t), wi[t] && a(wi[t])
                })
            } else
                for (e in s) "$destroy" !== e && t.removeEventListener(e, o, !1), delete s[e]
    }

    function yt(t, e) {
        var n = t.ng339,
            i = n && yi[n];
        i && (e ? delete i.data[e] : (i.handle && (i.events.$destroy && i.handle({}, "$destroy"), vt(t)), delete yi[n], t.ng339 = void 0))
    }

    function bt(t, e) {
        var n = t.ng339,
            n = n && yi[n];
        return e && !n && (t.ng339 = n = ++bi, n = yi[n] = {
            events: {},
            data: {},
            handle: void 0
        }), n
    }

    function $t(t, e, n) {
        if (ht(t)) {
            var i = v(n),
                r = !i && e && !y(e),
                s = !e;
            if (t = (t = bt(t, !r)) && t.data, i) t[e] = n;
            else {
                if (s) return t;
                if (r) return t && t[e];
                l(t, e)
            }
        }
    }

    function _t(t, e) {
        return t.getAttribute ? -1 < (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ") : !1
    }

    function wt(t, e) {
        e && t.setAttribute && i(e.split(" "), function (e) {
            t.setAttribute("class", li((" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + li(e) + " ", " ")))
        })
    }

    function xt(t, e) {
        if (e && t.setAttribute) {
            var n = (" " + (t.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            i(e.split(" "), function (t) {
                t = li(t), -1 === n.indexOf(" " + t + " ") && (n += t + " ")
            }), t.setAttribute("class", li(n))
        }
    }

    function Ct(t, e) {
        if (e)
            if (e.nodeType) t[t.length++] = e;
            else {
                var n = e.length;
                if ("number" == typeof n && e.window !== e) {
                    if (n)
                        for (var i = 0; n > i; i++) t[t.length++] = e[i]
                } else t[t.length++] = e
            }
    }

    function kt(t, e) {
        return Dt(t, "$" + (e || "ngController") + "Controller")
    }

    function Dt(t, e, n) {
        for (9 == t.nodeType && (t = t.documentElement), e = oi(e) ? e : [e]; t;) {
            for (var i = 0, r = e.length; r > i; i++)
                if (v(n = Vn.data(t, e[i]))) return n;
            t = t.parentNode || 11 === t.nodeType && t.host
        }
    }

    function St(t) {
        for (gt(t, !0); t.firstChild;) t.removeChild(t.firstChild)
    }

    function Tt(t, e) {
        e || gt(t);
        var n = t.parentNode;
        n && n.removeChild(t)
    }

    function At(e, n) {
        n = n || t, "complete" === n.document.readyState ? n.setTimeout(e) : Vn(n).on("load", e)
    }

    function Et(t, e) {
        var n = Mi[e.toLowerCase()];
        return n && Ii[M(t)] && n
    }

    function Mt(t, e) {
        var n = function (n, i) {
            n.isDefaultPrevented = function () {
                return n.defaultPrevented
            };
            var r = e[i || n.type],
                s = r ? r.length : 0;
            if (s) {
                if (g(n.immediatePropagationStopped)) {
                    var o = n.stopImmediatePropagation;
                    n.stopImmediatePropagation = function () {
                        n.immediatePropagationStopped = !0, n.stopPropagation && n.stopPropagation(), o && o.call(n)
                    }
                }
                n.isImmediatePropagationStopped = function () {
                    return !0 === n.immediatePropagationStopped
                };
                var a = r.specialHandlerWrapper || It;
                s > 1 && (r = lt(r));
                for (var l = 0; s > l; l++) n.isImmediatePropagationStopped() || a(t, n, r[l])
            }
        };
        return n.elem = t, n
    }

    function It(t, e, n) {
        n.call(t, e)
    }

    function Pt(t, e, n) {
        var i = e.relatedTarget;
        i && (i === t || Ai.call(t, i)) || n.call(t, e)
    }

    function Nt() {
        this.$get = function () {
            return l(pt, {
                hasClass: function (t, e) {
                    return t.attr && (t = t[0]), _t(t, e)
                },
                addClass: function (t, e) {
                    return t.attr && (t = t[0]), xt(t, e)
                },
                removeClass: function (t, e) {
                    return t.attr && (t = t[0]), wt(t, e)
                }
            })
        }
    }

    function Ot(t, e) {
        var n = t && t.$$hashKey;
        return n ? ("function" == typeof n && (n = t.$$hashKey()), n) : (n = typeof t, n = "function" == n || "object" == n && null !== t ? t.$$hashKey = n + ":" + (e || o)() : n + ":" + t)
    }

    function Ht(t, e) {
        if (e) {
            var n = 0;
            this.nextUid = function () {
                return ++n
            }
        }
        i(t, this.put, this)
    }

    function jt(t) {
        return t = (Function.prototype.toString.call(t) + " ").replace(zi, ""), t.match(Oi) || t.match(Hi)
    }

    function Ft(t) {
        return (t = jt(t)) ? "function(" + (t[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
    }

    function zt(t, e) {
        function n(t) {
            return function (e, n) {
                return y(e) ? void i(e, s(t)) : t(e, n)
            }
        }

        function r(t, e) {
            if (it(t, "service"), (x(e) || oi(e)) && (e = m.instantiate(e)), !e.$get) throw Ri("pget", t);
            return f[t + "Provider"] = e
        }

        function o(t, e) {
            return function () {
                var n = _.invoke(e, this);
                if (g(n)) throw Ri("undef", t);
                return n
            }
        }

        function a(t, e, n) {
            return r(t, {
                $get: !1 !== n ? o(t, e) : e
            })
        }

        function l(t) {
            et(g(t) || oi(t), "modulesToLoad", "not an array");
            var e, n = [];
            return i(t, function (t) {
                function i(t) {
                    var e, n;
                    for (e = 0, n = t.length; n > e; e++) {
                        var i = t[e],
                            r = m.get(i[0]);
                        r[i[1]].apply(r, i[2])
                    }
                }
                if (!d.get(t)) {
                    d.put(t, !0);
                    try {
                        $(t) ? (e = Yn(t), n = n.concat(l(e.requires)).concat(e._runBlocks), i(e._invokeQueue), i(e._configBlocks)) : x(t) ? n.push(m.invoke(t)) : oi(t) ? n.push(m.invoke(t)) : nt(t, "module")
                    } catch (r) {
                        throw oi(t) && (t = t[t.length - 1]), r.message && r.stack && -1 == r.stack.indexOf(r.message) && (r = r.message + "\n" + r.stack), Ri("modulerr", t, r.stack || r.message || r)
                    }
                }
            }), n
        }

        function u(t, n) {
            function i(e, i) {
                if (t.hasOwnProperty(e)) {
                    if (t[e] === c) throw Ri("cdep", e + " <- " + h.join(" <- "));
                    return t[e]
                }
                try {
                    return h.unshift(e), t[e] = c, t[e] = n(e, i)
                } catch (r) {
                    throw t[e] === c && delete t[e], r
                } finally {
                    h.shift()
                }
            }

            function r(t, n, r) {
                var s = [];
                t = zt.$$annotate(t, e, r);
                for (var o = 0, a = t.length; a > o; o++) {
                    var l = t[o];
                    if ("string" != typeof l) throw Ri("itkn", l);
                    s.push(n && n.hasOwnProperty(l) ? n[l] : i(l, r))
                }
                return s
            }
            return {
                invoke: function (t, e, n, i) {
                    return "string" == typeof n && (i = n, n = null), n = r(t, n, i), oi(t) && (t = t[t.length - 1]), i = 11 >= Bn ? !1 : "function" == typeof t && /^(?:class\s|constructor\()/.test(Function.prototype.toString.call(t) + " "), i ? (n.unshift(null), new(Function.prototype.bind.apply(t, n))) : t.apply(e, n)
                },
                instantiate: function (t, e, n) {
                    var i = oi(t) ? t[t.length - 1] : t;
                    return t = r(t, e, n), t.unshift(null), new(Function.prototype.bind.apply(i, t))
                },
                get: i,
                annotate: zt.$$annotate,
                has: function (e) {
                    return f.hasOwnProperty(e + "Provider") || t.hasOwnProperty(e)
                }
            }
        }
        e = !0 === e;
        var c = {},
            h = [],
            d = new Ht([], !0),
            f = {
                $provide: {
                    provider: n(r),
                    factory: n(a),
                    service: n(function (t, e) {
                        return a(t, ["$injector", function (t) {
                            return t.instantiate(e)
                        }])
                    }),
                    value: n(function (t, e) {
                        return a(t, p(e), !1)
                    }),
                    constant: n(function (t, e) {
                        it(t, "constant"), f[t] = e, v[t] = e
                    }),
                    decorator: function (t, e) {
                        var n = m.get(t + "Provider"),
                            i = n.$get;
                        n.$get = function () {
                            var t = _.invoke(i, n);
                            return _.invoke(e, null, {
                                $delegate: t
                            })
                        }
                    }
                }
            },
            m = f.$injector = u(f, function (t, e) {
                throw ri.isString(e) && h.push(e), Ri("unpr", h.join(" <- "))
            }),
            v = {},
            b = u(v, function (t, e) {
                var n = m.get(t + "Provider", e);
                return _.invoke(n.$get, n, void 0, t)
            }),
            _ = b;
        f.$injectorProvider = {
            $get: p(b)
        };
        var w = l(t),
            _ = b.get("$injector");
        return _.strictDi = e, i(w, function (t) {
            t && _.invoke(t)
        }), _
    }

    function Rt() {
        var t = !0;
        this.disableAutoScrolling = function () {
            t = !1
        }, this.$get = ["$window", "$location", "$rootScope", function (e, n, i) {
            function r(t) {
                var e = null;
                return Array.prototype.some.call(t, function (t) {
                    return "a" === M(t) ? (e = t, !0) : void 0
                }), e
            }

            function s(t) {
                if (t) {
                    t.scrollIntoView();
                    var n;
                    n = o.yOffset, x(n) ? n = n() : A(n) ? (n = n[0], n = "fixed" !== e.getComputedStyle(n).position ? 0 : n.getBoundingClientRect().bottom) : _(n) || (n = 0), n && (t = t.getBoundingClientRect().top, e.scrollBy(0, t - n))
                } else e.scrollTo(0, 0)
            }

            function o(t) {
                t = $(t) ? t : n.hash();
                var e;
                t ? (e = a.getElementById(t)) ? s(e) : (e = r(a.getElementsByName(t))) ? s(e) : "top" === t && s(null) : s(null)
            }
            var a = e.document;
            return t && i.$watch(function () {
                return n.hash()
            }, function (t, e) {
                t === e && "" === t || At(function () {
                    i.$evalAsync(o)
                })
            }), o
        }]
    }

    function Wt(t, e) {
        return t || e ? t ? e ? (oi(t) && (t = t.join(" ")), oi(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
    }

    function qt(t) {
        $(t) && (t = t.split(" "));
        var e = ot();
        return i(t, function (t) {
            t.length && (e[t] = !0)
        }), e
    }

    function Lt(t) {
        return y(t) ? t : {}
    }

    function Bt(t, e, n, r) {
        function s(t) {
            try {
                t.apply(null, Qn.call(arguments, 1))
            } finally {
                if (v--, 0 === v)
                    for (; y.length;) try {
                        y.pop()()
                    } catch (e) {
                        n.error(e)
                    }
            }
        }

        function o() {
            x = null, a(), l()
        }

        function a() {
            b = C(), b = g(b) ? null : b, N(b, S) && (b = S), S = b
        }

        function l() {
            (_ !== u.url() || $ !== b) && (_ = u.url(), $ = b, i(k, function (t) {
                t(u.url(), b)
            }))
        }
        var u = this,
            c = t.location,
            h = t.history,
            f = t.setTimeout,
            p = t.clearTimeout,
            m = {};
        u.isMock = !1;
        var v = 0,
            y = [];
        u.$$completeOutstandingRequest = s, u.$$incOutstandingRequestCount = function () {
            v++
        }, u.notifyWhenNoOutstandingRequests = function (t) {
            0 === v ? t() : y.push(t)
        };
        var b, $, _ = c.href,
            w = e.find("base"),
            x = null,
            C = r.history ? function () {
                try {
                    return h.state
                } catch (t) {}
            } : d;
        a(), $ = b, u.url = function (e, n, i) {
            if (g(i) && (i = null), c !== t.location && (c = t.location), h !== t.history && (h = t.history), e) {
                var s = $ === i;
                if (_ === e && (!r.history || s)) return u;
                var o = _ && $e(_) === $e(e);
                return _ = e, $ = i, !r.history || o && s ? (o || (x = e), n ? c.replace(e) : o ? (n = c, i = e.indexOf("#"), i = -1 === i ? "" : e.substr(i), n.hash = i) : c.href = e, c.href !== e && (x = e)) : (h[n ? "replaceState" : "pushState"](i, "", e), a(), $ = b), x && (x = e), u
            }
            return x || c.href.replace(/%27/g, "'")
        }, u.state = function () {
            return b
        };
        var k = [],
            D = !1,
            S = null;
        u.onUrlChange = function (e) {
            return D || (r.history && Vn(t).on("popstate", o), Vn(t).on("hashchange", o), D = !0), k.push(e), e
        }, u.$$applicationDestroyed = function () {
            Vn(t).off("hashchange popstate", o)
        }, u.$$checkUrlChange = l, u.baseHref = function () {
            var t = w.attr("href");
            return t ? t.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        }, u.defer = function (t, e) {
            var n;
            return v++, n = f(function () {
                delete m[n], s(t)
            }, e || 0), m[n] = !0, n
        }, u.defer.cancel = function (t) {
            return m[t] ? (delete m[t], p(t), s(d), !0) : !1
        }
    }

    function Vt() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (t, e, n, i) {
            return new Bt(t, i, e, n)
        }]
    }

    function Ut() {
        this.$get = function () {
            function t(t, i) {
                function r(t) {
                    t != d && (f ? f == t && (f = t.n) : f = t, s(t.n, t.p), s(t, d), d = t, d.n = null)
                }

                function s(t, e) {
                    t != e && (t && (t.p = e), e && (e.n = t))
                }
                if (t in n) throw e("$cacheFactory")("iid", t);
                var o = 0,
                    a = l({}, i, {
                        id: t
                    }),
                    u = ot(),
                    c = i && i.capacity || Number.MAX_VALUE,
                    h = ot(),
                    d = null,
                    f = null;
                return n[t] = {
                    put: function (t, e) {
                        if (!g(e)) {
                            if (c < Number.MAX_VALUE) {
                                var n = h[t] || (h[t] = {
                                    key: t
                                });
                                r(n)
                            }
                            return t in u || o++, u[t] = e, o > c && this.remove(f.key), e
                        }
                    },
                    get: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = h[t];
                            if (!e) return;
                            r(e)
                        }
                        return u[t]
                    },
                    remove: function (t) {
                        if (c < Number.MAX_VALUE) {
                            var e = h[t];
                            if (!e) return;
                            e == d && (d = e.p), e == f && (f = e.n), s(e.n, e.p), delete h[t]
                        }
                        t in u && (delete u[t], o--)
                    },
                    removeAll: function () {
                        u = ot(), o = 0, h = ot(), d = f = null
                    },
                    destroy: function () {
                        h = a = u = null, delete n[t]
                    },
                    info: function () {
                        return l({}, a, {
                            size: o
                        })
                    }
                }
            }
            var n = {};
            return t.info = function () {
                var t = {};
                return i(n, function (e, n) {
                    t[n] = e.info()
                }), t
            }, t.get = function (t) {
                return n[t]
            }, t
        }
    }

    function Yt() {
        this.$get = ["$cacheFactory", function (t) {
            return t("templates")
        }]
    }

    function Kt(e, n) {
        function r(t, e, n) {
            var r = /^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,
                s = ot();
            return i(t, function (t, i) {
                if (t in C) s[i] = C[t];
                else {
                    var o = t.match(r);
                    if (!o) throw Ki("iscp", e, i, t, n ? "controller bindings definition" : "isolate scope definition");
                    s[i] = {
                        mode: o[1][0],
                        collection: "*" === o[2],
                        optional: "?" === o[3],
                        attrName: o[4] || i
                    }, o[4] && (C[t] = s[i])
                }
            }), s
        }

        function o(t) {
            var e = t.charAt(0);
            if (!e || e !== Xn(e)) throw Ki("baddir", t);
            if (t !== t.trim()) throw Ki("baddir", t)
        }

        function a(t) {
            var e = t.require || t.controller && t.name;
            return !oi(e) && y(e) && i(e, function (t, n) {
                var i = t.match(_);
                t.substring(i[0].length) || (e[n] = i[0] + n)
            }), e
        }
        var u = {},
            c = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
            m = /(([\w\-]+)(?:\:([^;]+))?;?)/,
            b = E("ngSrc,ngSrcset,src,srcset"),
            _ = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
            w = /^(on[a-z]+|formaction)$/,
            C = ot();
        this.directive = function A(t, n) {
            return it(t, "directive"), $(t) ? (o(t), et(n, "directiveFactory"), u.hasOwnProperty(t) || (u[t] = [], e.factory(t + "Directive", ["$injector", "$exceptionHandler", function (e, n) {
                var r = [];
                return i(u[t], function (i, s) {
                    try {
                        var o = e.invoke(i);
                        x(o) ? o = {
                            compile: p(o)
                        } : !o.compile && o.link && (o.compile = p(o.link)), o.priority = o.priority || 0, o.index = s, o.name = o.name || t, o.require = a(o), o.restrict = o.restrict || "EA", o.$$moduleName = i.$$moduleName, r.push(o)
                    } catch (l) {
                        n(l)
                    }
                }), r
            }])), u[t].push(n)) : i(t, s(A)), this
        }, this.component = function (t, e) {
            function n(t) {
                function n(e) {
                    return x(e) || oi(e) ? function (n, i) {
                        return t.invoke(e, this, {
                            $element: n,
                            $attrs: i
                        })
                    } : e
                }
                var s = e.template || e.templateUrl ? e.template : "",
                    o = {
                        controller: r,
                        controllerAs: Zt(e.controller) || e.controllerAs || "$ctrl",
                        template: n(s),
                        templateUrl: n(e.templateUrl),
                        transclude: e.transclude,
                        scope: {},
                        bindToController: e.bindings || {},
                        restrict: "E",
                        require: e.require
                    };
                return i(e, function (t, e) {
                    "$" === e.charAt(0) && (o[e] = t)
                }), o
            }
            var r = e.controller || function () {};
            return i(e, function (t, e) {
                "$" === e.charAt(0) && (n[e] = t, x(r) && (r[e] = t))
            }), n.$inject = ["$injector"], this.directive(t, n)
        }, this.aHrefSanitizationWhitelist = function (t) {
            return v(t) ? (n.aHrefSanitizationWhitelist(t), this) : n.aHrefSanitizationWhitelist()
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return v(t) ? (n.imgSrcSanitizationWhitelist(t), this) : n.imgSrcSanitizationWhitelist()
        };
        var k = !0;
        this.debugInfoEnabled = function (t) {
            return v(t) ? (k = t, this) : k
        };
        var T = 10;
        this.onChangesTtl = function (t) {
            return arguments.length ? (T = t, this) : T
        }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$sce", "$animate", "$$sanitizeUri", function (e, n, s, o, a, p, C, A, E, P) {
            function O() {
                try {
                    if (!--$t) throw vt = void 0, Ki("infchng", T);
                    C.$apply(function () {
                        for (var t = [], e = 0, n = vt.length; n > e; ++e) try {
                            vt[e]()
                        } catch (i) {
                            t.push(i)
                        }
                        if (vt = void 0, t.length) throw t
                    })
                } finally {
                    $t++
                }
            }

            function j(t, e) {
                if (e) {
                    var n, i, r, s = Object.keys(e);
                    for (n = 0, i = s.length; i > n; n++) r = s[n], this[r] = e[r]
                } else this.$attr = {};
                this.$$element = t
            }

            function F(t, e, n) {
                bt.innerHTML = "<span " + e + ">",
                    e = bt.firstChild.attributes;
                var i = e[0];
                e.removeNamedItem(i.name), i.value = n, t.attributes.setNamedItem(i)
            }

            function z(t, e) {
                try {
                    t.addClass(e)
                } catch (n) {}
            }

            function R(e, n, i, r, s) {
                e instanceof Vn || (e = Vn(e));
                for (var o = /\S+/, a = 0, l = e.length; l > a; a++) {
                    var u = e[a];
                    u.nodeType === gi && u.nodeValue.match(o) && ft(u, e[a] = t.document.createElement("span"))
                }
                var c = W(e, n, e, i, r, s);
                R.$$addScopeClass(e);
                var h = null;
                return function (t, n, i) {
                    et(t, "scope"), s && s.needsNewScope && (t = t.$parent.$new()), i = i || {};
                    var r = i.parentBoundTranscludeFn,
                        o = i.transcludeControllers;
                    if (i = i.futureParentElement, r && r.$$boundTransclude && (r = r.$$boundTransclude), h || (h = (i = i && i[0]) && "foreignobject" !== M(i) && ei.call(i).match(/SVG/) ? "svg" : "html"), i = "html" !== h ? Vn(lt(h, Vn("<div>").append(e).html())) : n ? Ei.clone.call(e) : e, o)
                        for (var a in o) i.data("$" + a + "Controller", o[a].instance);
                    return R.$$addScopeInfo(i, t), n && n(i, t), c && c(t, i, i, r), i
                }
            }

            function W(t, e, n, i, r, s) {
                function o(t, n, i, r) {
                    var s, o, a, l, u, c, f;
                    if (h)
                        for (f = Array(n.length), l = 0; l < d.length; l += 3) s = d[l], f[s] = n[s];
                    else f = n;
                    for (l = 0, u = d.length; u > l;) o = f[d[l++]], n = d[l++], s = d[l++], n ? (n.scope ? (a = t.$new(), R.$$addScopeInfo(Vn(o), a)) : a = t, c = n.transcludeOnThisElement ? L(t, n.transclude, r) : !n.templateOnThisElement && r ? r : !r && e ? L(t, e) : null, n(s, a, o, i, c)) : s && s(t, o.childNodes, void 0, r)
                }
                for (var a, l, u, c, h, d = [], f = 0; f < t.length; f++) a = new j, l = B(t[f], [], a, 0 === f ? i : void 0, r), (s = l.length ? K(l, t[f], a, e, n, null, [], [], s) : null) && s.scope && R.$$addScopeClass(a.$$element), a = s && s.terminal || !(u = t[f].childNodes) || !u.length ? null : W(u, s ? (s.transcludeOnThisElement || !s.templateOnThisElement) && s.transclude : e), (s || a) && (d.push(f, s, a), c = !0, h = h || s), s = null;
                return c ? o : null
            }

            function L(t, e, n) {
                function i(i, r, s, o, a) {
                    return i || (i = t.$new(!1, a), i.$$transcluded = !0), e(i, r, {
                        parentBoundTranscludeFn: n,
                        transcludeControllers: s,
                        futureParentElement: o
                    })
                }
                var r, s = i.$$slots = ot();
                for (r in e.$$slots) s[r] = e.$$slots[r] ? L(t, e.$$slots[r], n) : null;
                return i
            }

            function B(t, e, n, i, r) {
                var s, o = n.$attr;
                switch (t.nodeType) {
                case 1:
                    Q(e, Xt(M(t)), "E", i, r);
                    for (var a, l, u, h = t.attributes, d = 0, f = h && h.length; f > d; d++) {
                        var p = !1,
                            g = !1;
                        a = h[d], s = a.name, l = li(a.value), a = Xt(s), (u = Ct.test(a)) && (s = s.replace(Xi, "").substr(8).replace(/_(.)/g, function (t, e) {
                            return e.toUpperCase()
                        })), (a = a.match(kt)) && tt(a[1]) && (p = s, g = s.substr(0, s.length - 5) + "end", s = s.substr(0, s.length - 6)), a = Xt(s.toLowerCase()), o[a] = s, (u || !n.hasOwnProperty(a)) && (n[a] = l, Et(t, a) && (n[a] = !0)), ct(t, e, l, a, u), Q(e, a, "A", i, r, p, g)
                    }
                    if (t = t.className, y(t) && (t = t.animVal), $(t) && "" !== t)
                        for (; s = m.exec(t);) a = Xt(s[2]), Q(e, a, "C", i, r) && (n[a] = li(s[3])), t = t.substr(s.index + s[0].length);
                    break;
                case gi:
                    if (11 === Bn)
                        for (; t.parentNode && t.nextSibling && t.nextSibling.nodeType === gi;) t.nodeValue += t.nextSibling.nodeValue, t.parentNode.removeChild(t.nextSibling);
                    at(e, t.nodeValue);
                    break;
                case 8:
                    try {
                        (s = c.exec(t.nodeValue)) && (a = Xt(s[1]), Q(e, a, "M", i, r) && (n[a] = li(s[2])))
                    } catch (v) {}
                }
                return e.sort(rt), e
            }

            function V(t, e, n) {
                var i = [],
                    r = 0;
                if (e && t.hasAttribute && t.hasAttribute(e)) {
                    do {
                        if (!t) throw Ki("uterdir", e, n);
                        1 == t.nodeType && (t.hasAttribute(e) && r++, t.hasAttribute(n) && r--), i.push(t), t = t.nextSibling
                    } while (r > 0)
                } else i.push(t);
                return Vn(i)
            }

            function U(t, e, n) {
                return function (i, r, s, o, a) {
                    return r = V(r[0], e, n), t(i, r, s, o, a)
                }
            }

            function Y(t, e, n, i, r, s) {
                var o;
                return t ? R(e, n, i, r, s) : function () {
                    return o || (o = R(e, n, i, r, s), e = n = s = null), o.apply(this, arguments)
                }
            }

            function K(t, e, n, r, o, a, u, c, h) {
                function d(t, e, n, i) {
                    t && (n && (t = U(t, n, i)), t.require = p.require, t.directiveName = m, (k === p || p.$$isolateScope) && (t = dt(t, {
                        isolateScope: !0
                    })), u.push(t)), e && (n && (e = U(e, n, i)), e.require = p.require, e.directiveName = m, (k === p || p.$$isolateScope) && (e = dt(e, {
                        isolateScope: !0
                    })), c.push(e))
                }

                function f(t, r, o, a, h) {
                    function d(t, e, n, i) {
                        var r;
                        if (D(t) || (i = n, n = e, e = t, t = void 0), I && (r = $), n || (n = I ? T.parent() : T), !i) return h(t, e, r, n, M);
                        var s = h.$$slots[i];
                        if (s) return s(t, e, r, n, M);
                        if (g(s)) throw Ki("noslot", i, q(T))
                    }
                    var f, p, m, v, b, $, _, T;
                    e === o ? (a = n, T = n.$$element) : (T = Vn(o), a = new j(T, n)), b = r, k ? v = r.$new(!0) : w && (b = r.$parent), h && (_ = d, _.$$boundTransclude = h, _.isSlotFilled = function (t) {
                        return !!h.$$slots[t]
                    }), C && ($ = X(T, a, _, C, v, r, k)), k && (R.$$addScopeInfo(T, v, !0, !(S && (S === k || S === k.$$originalDirective))), R.$$addScopeClass(T, !0), v.$$isolateBindings = k.$$isolateBindings, p = gt(r, a, v, v.$$isolateBindings, k), p.removeWatches && v.$on("$destroy", p.removeWatches));
                    for (f in $) {
                        p = C[f], m = $[f];
                        var A = p.$$bindings.bindToController;
                        m.bindingInfo = m.identifier && A ? gt(b, a, m.instance, A, p) : {};
                        var E = m();
                        E !== m.instance && (m.instance = E, T.data("$" + p.name + "Controller", E), m.bindingInfo.removeWatches && m.bindingInfo.removeWatches(), m.bindingInfo = gt(b, a, m.instance, A, p))
                    }
                    for (i(C, function (t, e) {
                            var n = t.require;
                            t.bindToController && !oi(n) && y(n) && l($[e].instance, G(e, n, T, $))
                        }), i($, function (t) {
                            var e = t.instance;
                            if (x(e.$onChanges)) try {
                                e.$onChanges(t.bindingInfo.initialChanges)
                            } catch (n) {
                                s(n)
                            }
                            if (x(e.$onInit)) try {
                                e.$onInit()
                            } catch (i) {
                                s(i)
                            }
                            x(e.$onDestroy) && b.$on("$destroy", function () {
                                e.$onDestroy()
                            })
                        }), f = 0, p = u.length; p > f; f++) m = u[f], pt(m, m.isolateScope ? v : r, T, a, m.require && G(m.directiveName, m.require, T, $), _);
                    var M = r;
                    for (k && (k.template || null === k.templateUrl) && (M = v), t && t(M, o.childNodes, void 0, h), f = c.length - 1; f >= 0; f--) m = c[f], pt(m, m.isolateScope ? v : r, T, a, m.require && G(m.directiveName, m.require, T, $), _);
                    i($, function (t) {
                        t = t.instance, x(t.$postLink) && t.$postLink()
                    })
                }
                h = h || {};
                for (var p, m, v, b, $, _ = -Number.MAX_VALUE, w = h.newScopeDirective, C = h.controllerDirectives, k = h.newIsolateScopeDirective, S = h.templateDirective, T = h.nonTlbTranscludeDirective, A = !1, E = !1, I = h.hasElementTranscludeDirective, P = n.$$element = Vn(e), N = r, O = !1, F = !1, z = 0, W = t.length; W > z; z++) {
                    p = t[z];
                    var L = p.$$start,
                        K = p.$$end;
                    if (L && (P = V(e, L, K)), v = void 0, _ > p.priority) break;
                    if (($ = p.scope) && (p.templateUrl || (y($) ? (st("new/isolated scope", k || w, p, P), k = p) : st("new/isolated scope", k, p, P)), w = w || p), m = p.name, !O && (p.replace && (p.templateUrl || p.template) || p.transclude && !p.$$tlb)) {
                        for ($ = z + 1; O = t[$++];)
                            if (O.transclude && !O.$$tlb || O.replace && (O.templateUrl || O.template)) {
                                F = !0;
                                break
                            }
                        O = !0
                    }
                    if (!p.templateUrl && p.controller && ($ = p.controller, C = C || ot(), st("'" + m + "' controller", C[m], p, P), C[m] = p), $ = p.transclude)
                        if (A = !0, p.$$tlb || (st("transclusion", T, p, P), T = p), "element" == $) I = !0, _ = p.priority, v = P, P = n.$$element = Vn(R.$$createComment(m, n[m])), e = P[0], ht(o, Qn.call(v, 0), e), v[0].$$parentNode = v[0].parentNode, N = Y(F, v, r, _, a && a.name, {
                            nonTlbTranscludeDirective: T
                        });
                        else {
                            var Q = ot();
                            if (v = Vn(mt(e)).contents(), y($)) {
                                v = [];
                                var Z = ot(),
                                    tt = ot();
                                i($, function (t, e) {
                                    var n = "?" === t.charAt(0);
                                    t = n ? t.substring(1) : t, Z[t] = e, Q[e] = null, tt[e] = n
                                }), i(P.contents(), function (t) {
                                    var e = Z[Xt(M(t))];
                                    e ? (tt[e] = !0, Q[e] = Q[e] || [], Q[e].push(t)) : v.push(t)
                                }), i(tt, function (t, e) {
                                    if (!t) throw Ki("reqslot", e)
                                });
                                for (var et in Q) Q[et] && (Q[et] = Y(F, Q[et], r))
                            }
                            P.empty(), N = Y(F, v, r, void 0, void 0, {
                                needsNewScope: p.$$isolateScope || p.$$newScope
                            }), N.$$slots = Q
                        }
                    if (p.template)
                        if (E = !0, st("template", S, p, P), S = p, $ = x(p.template) ? p.template(P, n) : p.template, $ = xt($), p.replace) {
                            if (a = p, v = ki.test($) ? Qt(lt(p.templateNamespace, li($))) : [], e = v[0], 1 != v.length || 1 !== e.nodeType) throw Ki("tplrt", m, "");
                            ht(o, P, e), W = {
                                $attr: {}
                            }, $ = B(e, [], W);
                            var rt = t.splice(z + 1, t.length - (z + 1));
                            (k || w) && J($, k, w), t = t.concat($).concat(rt), nt(n, W), W = t.length
                        } else P.html($);
                    if (p.templateUrl) E = !0, st("template", S, p, P), S = p, p.replace && (a = p), f = it(t.splice(z, t.length - z), P, n, o, A && N, u, c, {
                        controllerDirectives: C,
                        newScopeDirective: w !== p && w,
                        newIsolateScopeDirective: k,
                        templateDirective: S,
                        nonTlbTranscludeDirective: T
                    }), W = t.length;
                    else if (p.compile) try {
                        b = p.compile(P, n, N);
                        var at = p.$$originalDirective || p;
                        x(b) ? d(null, H(at, b), L, K) : b && d(H(at, b.pre), H(at, b.post), L, K)
                    } catch (ut) {
                        s(ut, q(P))
                    }
                    p.terminal && (f.terminal = !0, _ = Math.max(_, p.priority))
                }
                return f.scope = w && !0 === w.scope, f.transcludeOnThisElement = A, f.templateOnThisElement = E, f.transclude = N, h.hasElementTranscludeDirective = I, f
            }

            function G(t, e, n, r) {
                var s;
                if ($(e)) {
                    var o = e.match(_);
                    e = e.substring(o[0].length);
                    var a = o[1] || o[3],
                        o = "?" === o[2];
                    if ("^^" === a ? n = n.parent() : s = (s = r && r[e]) && s.instance, !s) {
                        var l = "$" + e + "Controller";
                        s = a ? n.inheritedData(l) : n.data(l)
                    }
                    if (!s && !o) throw Ki("ctreq", e, t)
                } else if (oi(e))
                    for (s = [], a = 0, o = e.length; o > a; a++) s[a] = G(t, e[a], n, r);
                else y(e) && (s = {}, i(e, function (e, i) {
                    s[i] = G(t, e, n, r)
                }));
                return s || null
            }

            function X(t, e, n, i, r, s, o) {
                var a, l = ot();
                for (a in i) {
                    var u = i[a],
                        c = {
                            $scope: u === o || u.$$isolateScope ? r : s,
                            $element: t,
                            $attrs: e,
                            $transclude: n
                        },
                        h = u.controller;
                    "@" == h && (h = e[u.name]), c = p(h, c, !0, u.controllerAs), l[u.name] = c, t.data("$" + u.name + "Controller", c.instance)
                }
                return l
            }

            function J(t, e, n) {
                for (var i = 0, r = t.length; r > i; i++) t[i] = h(t[i], {
                    $$isolateScope: e,
                    $$newScope: n
                })
            }

            function Q(t, n, i, o, a, l, c) {
                if (n === a) return null;
                if (a = null, u.hasOwnProperty(n)) {
                    var d;
                    n = e.get(n + "Directive");
                    for (var f = 0, p = n.length; p > f; f++) try {
                        if (d = n[f], (g(o) || o > d.priority) && -1 != d.restrict.indexOf(i)) {
                            if (l && (d = h(d, {
                                    $$start: l,
                                    $$end: c
                                })), !d.$$bindings) {
                                var m = d,
                                    v = d,
                                    b = d.name,
                                    $ = {
                                        isolateScope: null,
                                        bindToController: null
                                    };
                                if (y(v.scope) && (!0 === v.bindToController ? ($.bindToController = r(v.scope, b, !0), $.isolateScope = {}) : $.isolateScope = r(v.scope, b, !1)), y(v.bindToController) && ($.bindToController = r(v.bindToController, b, !0)), y($.bindToController)) {
                                    var _ = v.controller,
                                        w = v.controllerAs;
                                    if (!_) throw Ki("noctrl", b);
                                    if (!Zt(_, w)) throw Ki("noident", b)
                                }
                                var x = m.$$bindings = $;
                                y(x.isolateScope) && (d.$$isolateBindings = x.isolateScope)
                            }
                            t.push(d), a = d
                        }
                    } catch (C) {
                        s(C)
                    }
                }
                return a
            }

            function tt(t) {
                if (u.hasOwnProperty(t))
                    for (var n = e.get(t + "Directive"), i = 0, r = n.length; r > i; i++)
                        if (t = n[i], t.multiElement) return !0;
                return !1
            }

            function nt(t, e) {
                var n = e.$attr,
                    r = t.$attr;
                i(t, function (i, r) {
                    "$" != r.charAt(0) && (e[r] && e[r] !== i && (i += ("style" === r ? ";" : " ") + e[r]), t.$set(r, i, !0, n[r]))
                }), i(e, function (e, i) {
                    t.hasOwnProperty(i) || "$" === i.charAt(0) || (t[i] = e, "class" !== i && "style" !== i && (r[i] = n[i]))
                })
            }

            function it(t, e, n, r, s, a, l, u) {
                var c, d, f = [],
                    p = e[0],
                    m = t.shift(),
                    g = h(m, {
                        templateUrl: null,
                        transclude: null,
                        replace: null,
                        $$originalDirective: m
                    }),
                    v = x(m.templateUrl) ? m.templateUrl(e, n) : m.templateUrl,
                    b = m.templateNamespace;
                return e.empty(), o(v).then(function (o) {
                        var h, $;
                        if (o = xt(o), m.replace) {
                            if (o = ki.test(o) ? Qt(lt(b, li(o))) : [], h = o[0], 1 != o.length || 1 !== h.nodeType) throw Ki("tplrt", m.name, v);
                            o = {
                                $attr: {}
                            }, ht(r, e, h);
                            var _ = B(h, [], o);
                            y(m.scope) && J(_, !0), t = _.concat(t), nt(n, o)
                        } else h = p, e.html(o);
                        for (t.unshift(g), c = K(t, h, n, s, e, m, a, l, u), i(r, function (t, n) {
                                t == h && (r[n] = e[0])
                            }), d = W(e[0].childNodes, s); f.length;) {
                            o = f.shift(), $ = f.shift();
                            var w = f.shift(),
                                x = f.shift(),
                                _ = e[0];
                            if (!o.$$destroyed) {
                                if ($ !== p) {
                                    var C = $.className;
                                    u.hasElementTranscludeDirective && m.replace || (_ = mt(h)), ht(w, Vn($), _), z(Vn(_), C)
                                }
                                $ = c.transcludeOnThisElement ? L(o, c.transclude, x) : x, c(d, o, _, r, $)
                            }
                        }
                        f = null
                    }),
                    function (t, e, n, i, r) {
                        t = r, e.$$destroyed || (f ? f.push(e, n, i, t) : (c.transcludeOnThisElement && (t = L(e, c.transclude, r)), c(d, e, n, i, t)))
                    }
            }

            function rt(t, e) {
                var n = e.priority - t.priority;
                return 0 !== n ? n : t.name !== e.name ? t.name < e.name ? -1 : 1 : t.index - e.index
            }

            function st(t, e, n, i) {
                function r(t) {
                    return t ? " (module: " + t + ")" : ""
                }
                if (e) throw Ki("multidir", e.name, r(e.$$moduleName), n.name, r(n.$$moduleName), t, q(i))
            }

            function at(t, e) {
                var i = n(e, !0);
                i && t.push({
                    priority: 0,
                    compile: function (t) {
                        t = t.parent();
                        var e = !!t.length;
                        return e && R.$$addBindingClass(t),
                            function (t, n) {
                                var r = n.parent();
                                e || R.$$addBindingClass(r), R.$$addBindingInfo(r, i.expressions), t.$watch(i, function (t) {
                                    n[0].nodeValue = t
                                })
                            }
                    }
                })
            }

            function lt(e, n) {
                switch (e = Xn(e || "html")) {
                case "svg":
                case "math":
                    var i = t.document.createElement("div");
                    return i.innerHTML = "<" + e + ">" + n + "</" + e + ">", i.childNodes[0].childNodes;
                default:
                    return n
                }
            }

            function ut(t, e) {
                if ("srcdoc" == e) return A.HTML;
                var n = M(t);
                return "xlinkHref" == e || "form" == n && "action" == e || "img" != n && ("src" == e || "ngSrc" == e) ? A.RESOURCE_URL : void 0
            }

            function ct(t, e, i, r, s) {
                var o = ut(t, r);
                s = b[r] || s;
                var a = n(i, !0, o, s);
                if (a) {
                    if ("multiple" === r && "select" === M(t)) throw Ki("selmulti", q(t));
                    e.push({
                        priority: 100,
                        compile: function () {
                            return {
                                pre: function (t, e, l) {
                                    if (e = l.$$observers || (l.$$observers = ot()), w.test(r)) throw Ki("nodomevents");
                                    var u = l[r];
                                    u !== i && (a = u && n(u, !0, o, s), i = u), a && (l[r] = a(t), (e[r] || (e[r] = [])).$$inter = !0, (l.$$observers && l.$$observers[r].$$scope || t).$watch(a, function (t, e) {
                                        "class" === r && t != e ? l.$updateClass(t, e) : l.$set(r, t)
                                    }))
                                }
                            }
                        }
                    })
                }
            }

            function ht(e, n, i) {
                var r, s, o = n[0],
                    a = n.length,
                    l = o.parentNode;
                if (e)
                    for (r = 0, s = e.length; s > r; r++)
                        if (e[r] == o) {
                            e[r++] = i, s = r + a - 1;
                            for (var u = e.length; u > r; r++, s++) u > s ? e[r] = e[s] : delete e[r];
                            e.length -= a - 1, e.context === o && (e.context = i);
                            break
                        }
                for (l && l.replaceChild(i, o), e = t.document.createDocumentFragment(), r = 0; a > r; r++) e.appendChild(n[r]);
                for (Vn.hasData(o) && (Vn.data(i, Vn.data(o)), Vn(o).off("$destroy")), Vn.cleanData(e.querySelectorAll("*")), r = 1; a > r; r++) delete n[r];
                n[0] = i, n.length = 1
            }

            function dt(t, e) {
                return l(function () {
                    return t.apply(null, arguments)
                }, t, e)
            }

            function pt(t, e, n, i, r, o) {
                try {
                    t(e, n, i, r, o)
                } catch (a) {
                    s(a, q(n))
                }
            }

            function gt(t, e, r, s, o) {
                function l(e, n, i) {
                    x(r.$onChanges) && n !== i && (vt || (t.$$postDigest(O), vt = []), c || (c = {}, vt.push(u)), c[e] && (i = c[e].previousValue), c[e] = new Gt(i, n))
                }

                function u() {
                    r.$onChanges(c), c = void 0
                }
                var c, h = [],
                    f = {};
                return i(s, function (i, s) {
                    var u, c, p, m, g = i.attrName,
                        v = i.optional;
                    switch (i.mode) {
                    case "@":
                        v || Gn.call(e, g) || (r[s] = e[g] = void 0), e.$observe(g, function (t) {
                            ($(t) || S(t)) && (l(s, t, r[s]), r[s] = t)
                        }), e.$$observers[g].$$scope = t, u = e[g], $(u) ? r[s] = n(u)(t) : S(u) && (r[s] = u), f[s] = new Gt(Gi, r[s]);
                        break;
                    case "=":
                        if (!Gn.call(e, g)) {
                            if (v) break;
                            e[g] = void 0
                        }
                        if (v && !e[g]) break;
                        c = a(e[g]), m = c.literal ? N : function (t, e) {
                            return t === e || t !== t && e !== e
                        }, p = c.assign || function () {
                            throw u = r[s] = c(t), Ki("nonassign", e[g], g, o.name)
                        }, u = r[s] = c(t), v = function (e) {
                            return m(e, r[s]) || (m(e, u) ? p(t, e = r[s]) : r[s] = e), u = e
                        }, v.$stateful = !0, v = i.collection ? t.$watchCollection(e[g], v) : t.$watch(a(e[g], v), null, c.literal), h.push(v);
                        break;
                    case "<":
                        if (!Gn.call(e, g)) {
                            if (v) break;
                            e[g] = void 0
                        }
                        if (v && !e[g]) break;
                        c = a(e[g]);
                        var y = r[s] = c(t);
                        f[s] = new Gt(Gi, r[s]), v = t.$watch(c, function (t, e) {
                            if (e === t) {
                                if (e === y) return;
                                e = y
                            }
                            l(s, t, e), r[s] = t
                        }, c.literal), h.push(v);
                        break;
                    case "&":
                        if (c = e.hasOwnProperty(g) ? a(e[g]) : d, c === d && v) break;
                        r[s] = function (e) {
                            return c(t, e)
                        }
                    }
                }), {
                    initialChanges: f,
                    removeWatches: h.length && function () {
                        for (var t = 0, e = h.length; e > t; ++t) h[t]()
                    }
                }
            }
            var vt, yt = /^\w/,
                bt = t.document.createElement("div"),
                $t = T;
            j.prototype = {
                $normalize: Xt,
                $addClass: function (t) {
                    t && 0 < t.length && E.addClass(this.$$element, t)
                },
                $removeClass: function (t) {
                    t && 0 < t.length && E.removeClass(this.$$element, t)
                },
                $updateClass: function (t, e) {
                    var n = Jt(t, e);
                    n && n.length && E.addClass(this.$$element, n), (n = Jt(e, t)) && n.length && E.removeClass(this.$$element, n)
                },
                $set: function (t, e, n, r) {
                    var o = Et(this.$$element[0], t),
                        a = Pi[t],
                        l = t;
                    if (o ? (this.$$element.prop(t, e), r = o) : a && (this[a] = e, l = a), this[t] = e, r ? this.$attr[t] = r : (r = this.$attr[t]) || (this.$attr[t] = r = Z(t, "-")), o = M(this.$$element), "a" === o && ("href" === t || "xlinkHref" === t) || "img" === o && "src" === t) this[t] = e = P(e, "src" === t);
                    else if ("img" === o && "srcset" === t && v(e)) {
                        for (var o = "", a = li(e), u = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, u = /\s/.test(a) ? u : /(,)/, a = a.split(u), u = Math.floor(a.length / 2), c = 0; u > c; c++) var h = 2 * c,
                            o = o + P(li(a[h]), !0),
                            o = o + (" " + li(a[h + 1]));
                        a = li(a[2 * c]).split(/\s/), o += P(li(a[0]), !0), 2 === a.length && (o += " " + li(a[1])), this[t] = e = o
                    }!1 !== n && (null === e || g(e) ? this.$$element.removeAttr(r) : yt.test(r) ? this.$$element.attr(r, e) : F(this.$$element[0], r, e)), (t = this.$$observers) && i(t[l], function (t) {
                        try {
                            t(e)
                        } catch (n) {
                            s(n)
                        }
                    })
                },
                $observe: function (t, e) {
                    var n = this,
                        i = n.$$observers || (n.$$observers = ot()),
                        r = i[t] || (i[t] = []);
                    return r.push(e), C.$evalAsync(function () {
                            r.$$inter || !n.hasOwnProperty(t) || g(n[t]) || e(n[t])
                        }),
                        function () {
                            I(r, e)
                        }
                }
            };
            var _t = n.startSymbol(),
                wt = n.endSymbol(),
                xt = "{{" == _t && "}}" == wt ? f : function (t) {
                    return t.replace(/\{\{/g, _t).replace(/}}/g, wt)
                },
                Ct = /^ngAttr[A-Z]/,
                kt = /^(.+)Start$/;
            return R.$$addBindingInfo = k ? function (t, e) {
                var n = t.data("$binding") || [];
                oi(e) ? n = n.concat(e) : n.push(e), t.data("$binding", n)
            } : d, R.$$addBindingClass = k ? function (t) {
                z(t, "ng-binding")
            } : d, R.$$addScopeInfo = k ? function (t, e, n, i) {
                t.data(n ? i ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope", e)
            } : d, R.$$addScopeClass = k ? function (t, e) {
                z(t, e ? "ng-isolate-scope" : "ng-scope")
            } : d, R.$$createComment = function (e, n) {
                var i = "";
                return k && (i = " " + (e || "") + ": ", n && (i += n + " ")), t.document.createComment(i)
            }, R
        }]
    }

    function Gt(t, e) {
        this.previousValue = t, this.currentValue = e
    }

    function Xt(t) {
        return ct(t.replace(Xi, ""))
    }

    function Jt(t, e) {
        var n = "",
            i = t.split(/\s+/),
            r = e.split(/\s+/),
            s = 0;
        t: for (; s < i.length; s++) {
            for (var o = i[s], a = 0; a < r.length; a++)
                if (o == r[a]) continue t;
            n += (0 < n.length ? " " : "") + o
        }
        return n
    }

    function Qt(t) {
        t = Vn(t);
        var e = t.length;
        if (1 >= e) return t;
        for (; e--;) 8 === t[e].nodeType && Zn.call(t, e, 1);
        return t
    }

    function Zt(t, e) {
        if (e && $(e)) return e;
        if ($(t)) {
            var n = Qi.exec(t);
            if (n) return n[3]
        }
    }

    function te() {
        var t = {},
            n = !1;
        this.has = function (e) {
            return t.hasOwnProperty(e)
        }, this.register = function (e, n) {
            it(e, "controller"), y(e) ? l(t, e) : t[e] = n
        }, this.allowGlobals = function () {
            n = !0
        }, this.$get = ["$injector", "$window", function (i, r) {
            function s(t, n, i, r) {
                if (!t || !y(t.$scope)) throw e("$controller")("noscp", r, n);
                t.$scope[n] = i
            }
            return function (e, o, a, u) {
                var c, h, d;
                if (a = !0 === a, u && $(u) && (d = u), $(e)) {
                    if (u = e.match(Qi), !u) throw Ji("ctrlfmt", e);
                    h = u[1], d = d || u[3], e = t.hasOwnProperty(h) ? t[h] : rt(o.$scope, h, !0) || (n ? rt(r, h, !0) : void 0), nt(e, h, !0)
                }
                return a ? (a = (oi(e) ? e[e.length - 1] : e).prototype, c = Object.create(a || null), d && s(o, d, c, h || e.name), l(function () {
                    var t = i.invoke(e, c, o, h);
                    return t !== c && (y(t) || x(t)) && (c = t, d && s(o, d, c, h || e.name)), c
                }, {
                    instance: c,
                    identifier: d
                })) : (c = i.instantiate(e, o, h), d && s(o, d, c, h || e.name), c)
            }
        }]
    }

    function ee() {
        this.$get = ["$window", function (t) {
            return Vn(t.document)
        }]
    }

    function ne() {
        this.$get = ["$log", function (t) {
            return function (e, n) {
                t.error.apply(t, arguments)
            }
        }]
    }

    function ie(t) {
        return y(t) ? w(t) ? t.toISOString() : F(t) : t
    }

    function re() {
        this.$get = function () {
            return function (t) {
                if (!t) return "";
                var e = [];
                return r(t, function (t, n) {
                    null === t || g(t) || (oi(t) ? i(t, function (t) {
                        e.push(Y(n) + "=" + Y(ie(t)))
                    }) : e.push(Y(n) + "=" + Y(ie(t))))
                }), e.join("&")
            }
        }
    }

    function se() {
        this.$get = function () {
            return function (t) {
                function e(t, s, o) {
                    null === t || g(t) || (oi(t) ? i(t, function (t, n) {
                        e(t, s + "[" + (y(t) ? n : "") + "]")
                    }) : y(t) && !w(t) ? r(t, function (t, n) {
                        e(t, s + (o ? "" : "[") + n + (o ? "" : "]"))
                    }) : n.push(Y(s) + "=" + Y(ie(t))))
                }
                if (!t) return "";
                var n = [];
                return e(t, "", !0), n.join("&")
            }
        }
    }

    function oe(t, e) {
        if ($(t)) {
            var n = t.replace(rr, "").trim();
            if (n) {
                var i = e("Content-Type");
                (i = i && 0 === i.indexOf(tr)) || (i = (i = n.match(nr)) && ir[i[0]].test(n)), i && (t = z(n))
            }
        }
        return t
    }

    function ae(t) {
        var e, n = ot();
        return $(t) ? i(t.split("\n"), function (t) {
            e = t.indexOf(":");
            var i = Xn(li(t.substr(0, e)));
            t = li(t.substr(e + 1)), i && (n[i] = n[i] ? n[i] + ", " + t : t)
        }) : y(t) && i(t, function (t, e) {
            var i = Xn(e),
                r = li(t);
            i && (n[i] = n[i] ? n[i] + ", " + r : r)
        }), n
    }

    function le(t) {
        var e;
        return function (n) {
            return e || (e = ae(t)), n ? (n = e[Xn(n)], void 0 === n && (n = null), n) : e
        }
    }

    function ue(t, e, n, r) {
        return x(r) ? r(t, e, n) : (i(r, function (i) {
            t = i(t, e, n)
        }), t)
    }

    function ce() {
        var t = this.defaults = {
                transformResponse: [oe],
                transformRequest: [function (t) {
                    return y(t) && "[object File]" !== ei.call(t) && "[object Blob]" !== ei.call(t) && "[object FormData]" !== ei.call(t) ? F(t) : t
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: lt(er),
                    put: lt(er),
                    patch: lt(er)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                paramSerializer: "$httpParamSerializer"
            },
            n = !1;
        this.useApplyAsync = function (t) {
            return v(t) ? (n = !!t, this) : n
        };
        var r = !0;
        this.useLegacyPromiseExtensions = function (t) {
            return v(t) ? (r = !!t, this) : r
        };
        var s = this.interceptors = [];
        this.$get = ["$httpBackend", "$$cookieReader", "$cacheFactory", "$rootScope", "$q", "$injector", function (o, a, u, c, h, d) {
            function f(n) {
                function s(t) {
                    var e = l({}, t);
                    return e.data = ue(t.data, t.headers, t.status, a.transformResponse), t = t.status, t >= 200 && 300 > t ? e : h.reject(e)
                }

                function o(t, e) {
                    var n, r = {};
                    return i(t, function (t, i) {
                        x(t) ? (n = t(e), null != n && (r[i] = n)) : r[i] = t
                    }), r
                }
                if (!y(n)) throw e("$http")("badreq", n);
                if (!$(n.url)) throw e("$http")("badreq", n.url);
                var a = l({
                    method: "get",
                    transformRequest: t.transformRequest,
                    transformResponse: t.transformResponse,
                    paramSerializer: t.paramSerializer
                }, n);
                a.headers = function (e) {
                    var n, i, r, s = t.headers,
                        a = l({}, e.headers),
                        s = l({}, s.common, s[Xn(e.method)]);
                    t: for (n in s) {
                        i = Xn(n);
                        for (r in a)
                            if (Xn(r) === i) continue t;
                        a[n] = s[n]
                    }
                    return o(a, lt(e))
                }(n), a.method = Jn(a.method), a.paramSerializer = $(a.paramSerializer) ? d.get(a.paramSerializer) : a.paramSerializer;
                var u = [function (e) {
                        var n = e.headers,
                            r = ue(e.data, le(n), void 0, e.transformRequest);
                        return g(r) && i(n, function (t, e) {
                            "content-type" === Xn(e) && delete n[e]
                        }), g(e.withCredentials) && !g(t.withCredentials) && (e.withCredentials = t.withCredentials), p(e, r).then(s, s)
                    }, void 0],
                    c = h.when(a);
                for (i(_, function (t) {
                        (t.request || t.requestError) && u.unshift(t.request, t.requestError), (t.response || t.responseError) && u.push(t.response, t.responseError)
                    }); u.length;) {
                    n = u.shift();
                    var f = u.shift(),
                        c = c.then(n, f)
                }
                return r ? (c.success = function (t) {
                    return nt(t, "fn"), c.then(function (e) {
                        t(e.data, e.status, e.headers, a)
                    }), c
                }, c.error = function (t) {
                    return nt(t, "fn"), c.then(null, function (e) {
                        t(e.data, e.status, e.headers, a)
                    }), c
                }) : (c.success = or("success"), c.error = or("error")), c
            }

            function p(e, r) {
                function s(t) {
                    if (t) {
                        var e = {};
                        return i(t, function (t, i) {
                            e[i] = function (e) {
                                function i() {
                                    t(e)
                                }
                                n ? c.$applyAsync(i) : c.$$phase ? i() : c.$apply(i)
                            }
                        }), e
                    }
                }

                function l(t, e, i, r) {
                    function s() {
                        u(e, t, i, r)
                    }
                    $ && (t >= 200 && 300 > t ? $.put(D, [t, e, ae(i), r]) : $.remove(D)), n ? c.$applyAsync(s) : (s(), c.$$phase || c.$apply())
                }

                function u(t, n, i, r) {
                    n = n >= -1 ? n : 0, (n >= 200 && 300 > n ? w.resolve : w.reject)({
                        data: t,
                        status: n,
                        headers: le(i),
                        config: e,
                        statusText: r
                    })
                }

                function d(t) {
                    u(t.data, t.status, lt(t.headers()), t.statusText)
                }

                function p() {
                    var t = f.pendingRequests.indexOf(e); - 1 !== t && f.pendingRequests.splice(t, 1)
                }
                var $, _, w = h.defer(),
                    C = w.promise,
                    k = e.headers,
                    D = m(e.url, e.paramSerializer(e.params));
                return f.pendingRequests.push(e), C.then(p, p), !e.cache && !t.cache || !1 === e.cache || "GET" !== e.method && "JSONP" !== e.method || ($ = y(e.cache) ? e.cache : y(t.cache) ? t.cache : b), $ && (_ = $.get(D), v(_) ? _ && x(_.then) ? _.then(d, d) : oi(_) ? u(_[1], _[0], lt(_[2]), _[3]) : u(_, 200, {}, "OK") : $.put(D, C)), g(_) && ((_ = ln(e.url) ? a()[e.xsrfCookieName || t.xsrfCookieName] : void 0) && (k[e.xsrfHeaderName || t.xsrfHeaderName] = _), o(e.method, D, r, l, k, e.timeout, e.withCredentials, e.responseType, s(e.eventHandlers), s(e.uploadEventHandlers))), C
            }

            function m(t, e) {
                return 0 < e.length && (t += (-1 == t.indexOf("?") ? "?" : "&") + e), t
            }
            var b = u("$http");
            t.paramSerializer = $(t.paramSerializer) ? d.get(t.paramSerializer) : t.paramSerializer;
            var _ = [];
            return i(s, function (t) {
                    _.unshift($(t) ? d.get(t) : d.invoke(t))
                }), f.pendingRequests = [],
                function (t) {
                    i(arguments, function (t) {
                        f[t] = function (e, n) {
                            return f(l({}, n || {}, {
                                method: t,
                                url: e
                            }))
                        }
                    })
                }("get", "delete", "head", "jsonp"),
                function (t) {
                    i(arguments, function (t) {
                        f[t] = function (e, n, i) {
                            return f(l({}, i || {}, {
                                method: t,
                                url: e,
                                data: n
                            }))
                        }
                    })
                }("post", "put", "patch"), f.defaults = t, f
        }]
    }

    function he() {
        this.$get = function () {
            return function () {
                return new t.XMLHttpRequest
            }
        }
    }

    function de() {
        this.$get = ["$browser", "$window", "$document", "$xhrFactory", function (t, e, n, i) {
            return fe(t, i, t.defer, e.angular.callbacks, n[0])
        }]
    }

    function fe(t, e, n, r, s) {
        function o(t, e, n) {
            var i = s.createElement("script"),
                o = null;
            return i.type = "text/javascript", i.src = t, i.async = !0, o = function (t) {
                i.removeEventListener("load", o, !1), i.removeEventListener("error", o, !1), s.body.removeChild(i), i = null;
                var a = -1,
                    l = "unknown";
                t && ("load" !== t.type || r[e].called || (t = {
                    type: "error"
                }), l = t.type, a = "error" === t.type ? 404 : 200), n && n(a, l)
            }, i.addEventListener("load", o, !1), i.addEventListener("error", o, !1), s.body.appendChild(i), o
        }
        return function (s, a, l, u, c, h, f, p, m, y) {
            function b() {
                w && w(), C && C.abort()
            }

            function $(e, i, r, s, o) {
                v(D) && n.cancel(D), w = C = null, e(i, r, s, o), t.$$completeOutstandingRequest(d)
            }
            if (t.$$incOutstandingRequestCount(), a = a || t.url(), "jsonp" == Xn(s)) {
                var _ = "_" + (r.counter++).toString(36);
                r[_] = function (t) {
                    r[_].data = t, r[_].called = !0
                };
                var w = o(a.replace("JSON_CALLBACK", "angular.callbacks." + _), _, function (t, e) {
                    $(u, t, r[_].data, "", e), r[_] = d
                })
            } else {
                var C = e(s, a);
                if (C.open(s, a, !0), i(c, function (t, e) {
                        v(t) && C.setRequestHeader(e, t)
                    }), C.onload = function () {
                        var t = C.statusText || "",
                            e = "response" in C ? C.response : C.responseText,
                            n = 1223 === C.status ? 204 : C.status;
                        0 === n && (n = e ? 200 : "file" == an(a).protocol ? 404 : 0), $(u, n, e, C.getAllResponseHeaders(), t)
                    }, s = function () {
                        $(u, -1, null, null, "")
                    }, C.onerror = s, C.onabort = s, i(m, function (t, e) {
                        C.addEventListener(e, t)
                    }), i(y, function (t, e) {
                        C.upload.addEventListener(e, t)
                    }), f && (C.withCredentials = !0), p) try {
                    C.responseType = p
                } catch (k) {
                    if ("json" !== p) throw k
                }
                C.send(g(l) ? null : l)
            }
            if (h > 0) var D = n(b, h);
            else h && x(h.then) && h.then(b)
        }
    }

    function pe() {
        var t = "{{",
            e = "}}";
        this.startSymbol = function (e) {
            return e ? (t = e, this) : t
        }, this.endSymbol = function (t) {
            return t ? (e = t, this) : e
        }, this.$get = ["$parse", "$exceptionHandler", "$sce", function (n, i, r) {
            function s(t) {
                return "\\\\\\" + t
            }

            function o(n) {
                return n.replace(d, t).replace(f, e)
            }

            function a(t, e, n, i) {
                var r;
                return r = t.$watch(function (t) {
                    return r(), i(t)
                }, e, n)
            }

            function u(s, u, d, f) {
                function m(t) {
                    try {
                        var e = t;
                        t = d ? r.getTrusted(d, e) : r.valueOf(e);
                        var n;
                        if (f && !v(t)) n = t;
                        else if (null == t) n = "";
                        else {
                            switch (typeof t) {
                            case "string":
                                break;
                            case "number":
                                t = "" + t;
                                break;
                            default:
                                t = F(t)
                            }
                            n = t
                        }
                        return n
                    } catch (o) {
                        i(ar.interr(s, o))
                    }
                }
                if (!s.length || -1 === s.indexOf(t)) {
                    var y;
                    return u || (u = o(s), y = p(u), y.exp = s, y.expressions = [], y.$$watchDelegate = a), y
                }
                f = !!f;
                var b, $, _ = 0,
                    w = [],
                    C = [];
                y = s.length;
                for (var k = [], D = []; y > _;) {
                    if (-1 == (b = s.indexOf(t, _)) || -1 == ($ = s.indexOf(e, b + c))) {
                        _ !== y && k.push(o(s.substring(_)));
                        break
                    }
                    _ !== b && k.push(o(s.substring(_, b))), _ = s.substring(b + c, $), w.push(_), C.push(n(_, m)), _ = $ + h, D.push(k.length), k.push("")
                }
                if (d && 1 < k.length && ar.throwNoconcat(s), !u || w.length) {
                    var S = function (t) {
                        for (var e = 0, n = w.length; n > e; e++) {
                            if (f && g(t[e])) return;
                            k[D[e]] = t[e]
                        }
                        return k.join("")
                    };
                    return l(function (t) {
                        var e = 0,
                            n = w.length,
                            r = Array(n);
                        try {
                            for (; n > e; e++) r[e] = C[e](t);
                            return S(r)
                        } catch (o) {
                            i(ar.interr(s, o))
                        }
                    }, {
                        exp: s,
                        expressions: w,
                        $$watchDelegate: function (t, e) {
                            var n;
                            return t.$watchGroup(C, function (i, r) {
                                var s = S(i);
                                x(e) && e.call(this, s, i !== r ? n : s, t), n = s
                            })
                        }
                    })
                }
            }
            var c = t.length,
                h = e.length,
                d = new RegExp(t.replace(/./g, s), "g"),
                f = new RegExp(e.replace(/./g, s), "g");
            return u.startSymbol = function () {
                return t
            }, u.endSymbol = function () {
                return e
            }, u
        }]
    }

    function me() {
        this.$get = ["$rootScope", "$window", "$q", "$$q", "$browser", function (t, e, n, i, r) {
            function s(s, a, l, u) {
                function c() {
                    h ? s.apply(null, d) : s(m)
                }
                var h = 4 < arguments.length,
                    d = h ? Qn.call(arguments, 4) : [],
                    f = e.setInterval,
                    p = e.clearInterval,
                    m = 0,
                    g = v(u) && !u,
                    y = (g ? i : n).defer(),
                    b = y.promise;
                return l = v(l) ? l : 0, b.$$intervalId = f(function () {
                    g ? r.defer(c) : t.$evalAsync(c), y.notify(m++), l > 0 && m >= l && (y.resolve(m), p(b.$$intervalId), delete o[b.$$intervalId]), g || t.$apply()
                }, a), o[b.$$intervalId] = y, b
            }
            var o = {};
            return s.cancel = function (t) {
                return t && t.$$intervalId in o ? (o[t.$$intervalId].reject("canceled"), e.clearInterval(t.$$intervalId), delete o[t.$$intervalId], !0) : !1
            }, s
        }]
    }

    function ge(t) {
        t = t.split("/");
        for (var e = t.length; e--;) t[e] = U(t[e]);
        return t.join("/")
    }

    function ve(t, e) {
        var n = an(t);
        e.$$protocol = n.protocol, e.$$host = n.hostname, e.$$port = c(n.port) || ur[n.protocol] || null
    }

    function ye(t, e) {
        var n = "/" !== t.charAt(0);
        n && (t = "/" + t);
        var i = an(t);
        e.$$path = decodeURIComponent(n && "/" === i.pathname.charAt(0) ? i.pathname.substring(1) : i.pathname), e.$$search = B(i.search), e.$$hash = decodeURIComponent(i.hash), e.$$path && "/" != e.$$path.charAt(0) && (e.$$path = "/" + e.$$path)
    }

    function be(t, e) {
        return 0 === e.lastIndexOf(t, 0) ? e.substr(t.length) : void 0
    }

    function $e(t) {
        var e = t.indexOf("#");
        return -1 == e ? t : t.substr(0, e)
    }

    function _e(t) {
        return t.replace(/(#.+)|#$/, "$1")
    }

    function we(t, e, n) {
        this.$$html5 = !0, n = n || "", ve(t, this), this.$$parse = function (t) {
            var n = be(e, t);
            if (!$(n)) throw cr("ipthprfx", t, e);
            ye(n, this), this.$$path || (this.$$path = "/"), this.$$compose()
        }, this.$$compose = function () {
            var t = V(this.$$search),
                n = this.$$hash ? "#" + U(this.$$hash) : "";
            this.$$url = ge(this.$$path) + (t ? "?" + t : "") + n, this.$$absUrl = e + this.$$url.substr(1)
        }, this.$$parseLinkUrl = function (i, r) {
            if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
            var s, o;
            return v(s = be(t, i)) ? (o = s, o = v(s = be(n, s)) ? e + (be("/", s) || s) : t + o) : v(s = be(e, i)) ? o = e + s : e == i + "/" && (o = e), o && this.$$parse(o), !!o
        }
    }

    function xe(t, e, n) {
        ve(t, this), this.$$parse = function (i) {
            var r, s = be(t, i) || be(e, i);
            g(s) || "#" !== s.charAt(0) ? this.$$html5 ? r = s : (r = "", g(s) && (t = i, this.replace())) : (r = be(n, s), g(r) && (r = s)), ye(r, this), i = this.$$path;
            var s = t,
                o = /^\/[A-Z]:(\/.*)/;
            0 === r.lastIndexOf(s, 0) && (r = r.replace(s, "")), o.exec(r) || (i = (r = o.exec(i)) ? r[1] : i), this.$$path = i, this.$$compose()
        }, this.$$compose = function () {
            var e = V(this.$$search),
                i = this.$$hash ? "#" + U(this.$$hash) : "";
            this.$$url = ge(this.$$path) + (e ? "?" + e : "") + i, this.$$absUrl = t + (this.$$url ? n + this.$$url : "")
        }, this.$$parseLinkUrl = function (e, n) {
            return $e(t) == $e(e) ? (this.$$parse(e), !0) : !1
        }
    }

    function Ce(t, e, n) {
        this.$$html5 = !0, xe.apply(this, arguments), this.$$parseLinkUrl = function (i, r) {
            if (r && "#" === r[0]) return this.hash(r.slice(1)), !0;
            var s, o;
            return t == $e(i) ? s = i : (o = be(e, i)) ? s = t + n + o : e === i + "/" && (s = e), s && this.$$parse(s), !!s
        }, this.$$compose = function () {
            var e = V(this.$$search),
                i = this.$$hash ? "#" + U(this.$$hash) : "";
            this.$$url = ge(this.$$path) + (e ? "?" + e : "") + i, this.$$absUrl = t + n + this.$$url
        }
    }

    function ke(t) {
        return function () {
            return this[t]
        }
    }

    function De(t, e) {
        return function (n) {
            return g(n) ? this[t] : (this[t] = e(n), this.$$compose(), this)
        }
    }

    function Se() {
        var t = "",
            e = {
                enabled: !1,
                requireBase: !0,
                rewriteLinks: !0
            };
        this.hashPrefix = function (e) {
            return v(e) ? (t = e, this) : t
        }, this.html5Mode = function (t) {
            return S(t) ? (e.enabled = t, this) : y(t) ? (S(t.enabled) && (e.enabled = t.enabled), S(t.requireBase) && (e.requireBase = t.requireBase), S(t.rewriteLinks) && (e.rewriteLinks = t.rewriteLinks), this) : e
        }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window", function (n, i, r, s, o) {
            function a(t, e, n) {
                var r = u.url(),
                    s = u.$$state;
                try {
                    i.url(t, e, n), u.$$state = i.state()
                } catch (o) {
                    throw u.url(r), u.$$state = s, o
                }
            }

            function l(t, e) {
                n.$broadcast("$locationChangeSuccess", u.absUrl(), t, u.$$state, e)
            }
            var u, c;
            c = i.baseHref();
            var h, d = i.url();
            if (e.enabled) {
                if (!c && e.requireBase) throw cr("nobase");
                h = d.substring(0, d.indexOf("/", d.indexOf("//") + 2)) + (c || "/"), c = r.history ? we : Ce
            } else h = $e(d), c = xe;
            var f = h.substr(0, $e(h).lastIndexOf("/") + 1);
            u = new c(h, f, "#" + t), u.$$parseLinkUrl(d, d), u.$$state = i.state();
            var p = /^\s*(javascript|mailto):/i;
            s.on("click", function (t) {
                if (e.rewriteLinks && !t.ctrlKey && !t.metaKey && !t.shiftKey && 2 != t.which && 2 != t.button) {
                    for (var r = Vn(t.target);
                        "a" !== M(r[0]);)
                        if (r[0] === s[0] || !(r = r.parent())[0]) return;
                    var a = r.prop("href"),
                        l = r.attr("href") || r.attr("xlink:href");
                    y(a) && "[object SVGAnimatedString]" === a.toString() && (a = an(a.animVal).href), p.test(a) || !a || r.attr("target") || t.isDefaultPrevented() || !u.$$parseLinkUrl(a, l) || (t.preventDefault(), u.absUrl() != i.url() && (n.$apply(), o.angular["ff-684208-preventDefault"] = !0))
                }
            }), _e(u.absUrl()) != _e(d) && i.url(u.absUrl(), !0);
            var m = !0;
            return i.onUrlChange(function (t, e) {
                g(be(f, t)) ? o.location.href = t : (n.$evalAsync(function () {
                    var i, r = u.absUrl(),
                        s = u.$$state;
                    t = _e(t), u.$$parse(t), u.$$state = e, i = n.$broadcast("$locationChangeStart", t, r, e, s).defaultPrevented, u.absUrl() === t && (i ? (u.$$parse(r), u.$$state = s, a(r, !1, s)) : (m = !1, l(r, s)))
                }), n.$$phase || n.$digest())
            }), n.$watch(function () {
                var t = _e(i.url()),
                    e = _e(u.absUrl()),
                    s = i.state(),
                    o = u.$$replace,
                    c = t !== e || u.$$html5 && r.history && s !== u.$$state;
                (m || c) && (m = !1, n.$evalAsync(function () {
                    var e = u.absUrl(),
                        i = n.$broadcast("$locationChangeStart", e, t, u.$$state, s).defaultPrevented;
                    u.absUrl() === e && (i ? (u.$$parse(t), u.$$state = s) : (c && a(e, o, s === u.$$state ? null : u.$$state), l(t, s)))
                })), u.$$replace = !1
            }), u
        }]
    }

    function Te() {
        var t = !0,
            e = this;
        this.debugEnabled = function (e) {
            return v(e) ? (t = e, this) : t
        }, this.$get = ["$window", function (n) {
            function r(t) {
                return t instanceof Error && (t.stack ? t = t.message && -1 === t.stack.indexOf(t.message) ? "Error: " + t.message + "\n" + t.stack : t.stack : t.sourceURL && (t = t.message + "\n" + t.sourceURL + ":" + t.line)), t
            }

            function s(t) {
                var e = n.console || {},
                    s = e[t] || e.log || d;
                t = !1;
                try {
                    t = !!s.apply
                } catch (o) {}
                return t ? function () {
                    var t = [];
                    return i(arguments, function (e) {
                        t.push(r(e))
                    }), s.apply(e, t)
                } : function (t, e) {
                    s(t, null == e ? "" : e)
                }
            }
            return {
                log: s("log"),
                info: s("info"),
                warn: s("warn"),
                error: s("error"),
                debug: function () {
                    var n = s("debug");
                    return function () {
                        t && n.apply(e, arguments)
                    }
                }()
            }
        }]
    }

    function Ae(t, e) {
        if ("__defineGetter__" === t || "__defineSetter__" === t || "__lookupGetter__" === t || "__lookupSetter__" === t || "__proto__" === t) throw dr("isecfld", e);
        return t
    }

    function Ee(t) {
        return t + ""
    }

    function Me(t, e) {
        if (t) {
            if (t.constructor === t) throw dr("isecfn", e);
            if (t.window === t) throw dr("isecwindow", e);
            if (t.children && (t.nodeName || t.prop && t.attr && t.find)) throw dr("isecdom", e);
            if (t === Object) throw dr("isecobj", e)
        }
        return t
    }

    function Ie(t, e) {
        if (t) {
            if (t.constructor === t) throw dr("isecfn", e);
            if (t === fr || t === pr || t === mr) throw dr("isecff", e)
        }
    }

    function Pe(t, e) {
        if (t && (t === 0..constructor || t === (!1).constructor || t === "".constructor || t === {}.constructor || t === [].constructor || t === Function.constructor)) throw dr("isecaf", e)
    }

    function Ne(t, e) {
        return "undefined" != typeof t ? t : e
    }

    function Oe(t, e) {
        return "undefined" == typeof t ? e : "undefined" == typeof e ? t : t + e
    }

    function He(t, e) {
        var n, r;
        switch (t.type) {
        case br.Program:
            n = !0, i(t.body, function (t) {
                He(t.expression, e), n = n && t.expression.constant
            }), t.constant = n;
            break;
        case br.Literal:
            t.constant = !0, t.toWatch = [];
            break;
        case br.UnaryExpression:
            He(t.argument, e), t.constant = t.argument.constant, t.toWatch = t.argument.toWatch;
            break;
        case br.BinaryExpression:
            He(t.left, e), He(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.left.toWatch.concat(t.right.toWatch);
            break;
        case br.LogicalExpression:
            He(t.left, e), He(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = t.constant ? [] : [t];
            break;
        case br.ConditionalExpression:
            He(t.test, e), He(t.alternate, e), He(t.consequent, e), t.constant = t.test.constant && t.alternate.constant && t.consequent.constant, t.toWatch = t.constant ? [] : [t];
            break;
        case br.Identifier:
            t.constant = !1, t.toWatch = [t];
            break;
        case br.MemberExpression:
            He(t.object, e), t.computed && He(t.property, e), t.constant = t.object.constant && (!t.computed || t.property.constant), t.toWatch = [t];
            break;
        case br.CallExpression:
            n = t.filter ? !e(t.callee.name).$stateful : !1, r = [], i(t.arguments, function (t) {
                He(t, e), n = n && t.constant, t.constant || r.push.apply(r, t.toWatch)
            }), t.constant = n, t.toWatch = t.filter && !e(t.callee.name).$stateful ? r : [t];
            break;
        case br.AssignmentExpression:
            He(t.left, e), He(t.right, e), t.constant = t.left.constant && t.right.constant, t.toWatch = [t];
            break;
        case br.ArrayExpression:
            n = !0, r = [], i(t.elements, function (t) {
                He(t, e), n = n && t.constant, t.constant || r.push.apply(r, t.toWatch)
            }), t.constant = n, t.toWatch = r;
            break;
        case br.ObjectExpression:
            n = !0, r = [], i(t.properties, function (t) {
                He(t.value, e), n = n && t.value.constant && !t.computed, t.value.constant || r.push.apply(r, t.value.toWatch)
            }), t.constant = n, t.toWatch = r;
            break;
        case br.ThisExpression:
            t.constant = !1, t.toWatch = [];
            break;
        case br.LocalsExpression:
            t.constant = !1, t.toWatch = []
        }
    }

    function je(t) {
        if (1 == t.length) {
            t = t[0].expression;
            var e = t.toWatch;
            return 1 !== e.length ? e : e[0] !== t ? e : void 0
        }
    }

    function Fe(t) {
        return t.type === br.Identifier || t.type === br.MemberExpression
    }

    function ze(t) {
        return 1 === t.body.length && Fe(t.body[0].expression) ? {
            type: br.AssignmentExpression,
            left: t.body[0].expression,
            right: {
                type: br.NGValueParameter
            },
            operator: "="
        } : void 0
    }

    function Re(t) {
        return 0 === t.body.length || 1 === t.body.length && (t.body[0].expression.type === br.Literal || t.body[0].expression.type === br.ArrayExpression || t.body[0].expression.type === br.ObjectExpression)
    }

    function We(t, e) {
        this.astBuilder = t, this.$filter = e
    }

    function qe(t, e) {
        this.astBuilder = t, this.$filter = e
    }

    function Le(t) {
        return "constructor" == t
    }

    function Be(t) {
        return x(t.valueOf) ? t.valueOf() : _r.call(t)
    }

    function Ve() {
        var t, e, n = ot(),
            r = ot(),
            s = {
                "true": !0,
                "false": !1,
                "null": null,
                undefined: void 0
            };
        this.addLiteral = function (t, e) {
            s[t] = e
        }, this.setIdentifierFns = function (n, i) {
            return t = n, e = i, this
        }, this.$get = ["$filter", function (o) {
            function a(t, e, i) {
                var s, a, u;
                switch (i = i || $, typeof t) {
                case "string":
                    u = t = t.trim();
                    var g = i ? r : n;
                    if (s = g[u], !s) {
                        ":" === t.charAt(0) && ":" === t.charAt(1) && (a = !0, t = t.substring(2)), s = i ? b : y;
                        var v = new yr(s);
                        s = new $r(v, o, s).parse(t), s.constant ? s.$$watchDelegate = p : a ? s.$$watchDelegate = s.literal ? f : h : s.inputs && (s.$$watchDelegate = c), i && (s = l(s)), g[u] = s
                    }
                    return m(s, e);
                case "function":
                    return m(t, e);
                default:
                    return m(d, e)
                }
            }

            function l(t) {
                function e(e, n, i, r) {
                    var s = $;
                    $ = !0;
                    try {
                        return t(e, n, i, r)
                    } finally {
                        $ = s
                    }
                }
                if (!t) return t;
                e.$$watchDelegate = t.$$watchDelegate, e.assign = l(t.assign), e.constant = t.constant, e.literal = t.literal;
                for (var n = 0; t.inputs && n < t.inputs.length; ++n) t.inputs[n] = l(t.inputs[n]);
                return e.inputs = t.inputs, e
            }

            function u(t, e) {
                return null == t || null == e ? t === e : "object" == typeof t && (t = Be(t), "object" == typeof t) ? !1 : t === e || t !== t && e !== e
            }

            function c(t, e, n, i, r) {
                var s, o = i.inputs;
                if (1 === o.length) {
                    var a = u,
                        o = o[0];
                    return t.$watch(function (t) {
                        var e = o(t);
                        return u(e, a) || (s = i(t, void 0, void 0, [e]), a = e && Be(e)), s
                    }, e, n, r)
                }
                for (var l = [], c = [], h = 0, d = o.length; d > h; h++) l[h] = u, c[h] = null;
                return t.$watch(function (t) {
                    for (var e = !1, n = 0, r = o.length; r > n; n++) {
                        var a = o[n](t);
                        (e || (e = !u(a, l[n]))) && (c[n] = a, l[n] = a && Be(a))
                    }
                    return e && (s = i(t, void 0, void 0, c)), s
                }, e, n, r)
            }

            function h(t, e, n, i) {
                var r, s;
                return r = t.$watch(function (t) {
                    return i(t)
                }, function (t, n, i) {
                    s = t, x(e) && e.apply(this, arguments), v(t) && i.$$postDigest(function () {
                        v(s) && r()
                    })
                }, n)
            }

            function f(t, e, n, r) {
                function s(t) {
                    var e = !0;
                    return i(t, function (t) {
                        v(t) || (e = !1)
                    }), e
                }
                var o, a;
                return o = t.$watch(function (t) {
                    return r(t)
                }, function (t, n, i) {
                    a = t, x(e) && e.call(this, t, n, i), s(t) && i.$$postDigest(function () {
                        s(a) && o()
                    })
                }, n)
            }

            function p(t, e, n, i) {
                var r;
                return r = t.$watch(function (t) {
                    return r(), i(t)
                }, e, n)
            }

            function m(t, e) {
                if (!e) return t;
                var n = t.$$watchDelegate,
                    i = !1,
                    n = n !== f && n !== h ? function (n, r, s, o) {
                        return s = i && o ? o[0] : t(n, r, s, o), e(s, n, r)
                    } : function (n, i, r, s) {
                        return r = t(n, i, r, s), n = e(r, n, i), v(r) ? n : r
                    };
                return t.$$watchDelegate && t.$$watchDelegate !== c ? n.$$watchDelegate = t.$$watchDelegate : e.$stateful || (n.$$watchDelegate = c, i = !t.inputs, n.inputs = t.inputs ? t.inputs : [t]), n
            }
            var g = ci().noUnsafeEval,
                y = {
                    csp: g,
                    expensiveChecks: !1,
                    literals: P(s),
                    isIdentifierStart: x(t) && t,
                    isIdentifierContinue: x(e) && e
                },
                b = {
                    csp: g,
                    expensiveChecks: !0,
                    literals: P(s),
                    isIdentifierStart: x(t) && t,
                    isIdentifierContinue: x(e) && e
                },
                $ = !1;
            return a.$$runningExpensiveChecks = function () {
                return $
            }, a
        }]
    }

    function Ue() {
        this.$get = ["$rootScope", "$exceptionHandler", function (t, e) {
            return Ke(function (e) {
                t.$evalAsync(e)
            }, e)
        }]
    }

    function Ye() {
        this.$get = ["$browser", "$exceptionHandler", function (t, e) {
            return Ke(function (e) {
                t.defer(e)
            }, e)
        }]
    }

    function Ke(t, n) {
        function r() {
            this.$$state = {
                status: 0
            }
        }

        function s(t, e) {
            return function (n) {
                e.call(t, n)
            }
        }

        function o(e) {
            !e.processScheduled && e.pending && (e.processScheduled = !0, t(function () {
                var t, i, r;
                r = e.pending, e.processScheduled = !1, e.pending = void 0;
                for (var s = 0, o = r.length; o > s; ++s) {
                    i = r[s][0], t = r[s][e.status];
                    try {
                        x(t) ? i.resolve(t(e.value)) : 1 === e.status ? i.resolve(e.value) : i.reject(e.value)
                    } catch (a) {
                        i.reject(a), n(a)
                    }
                }
            }))
        }

        function a() {
            this.promise = new r
        }
        var u = e("$q", TypeError);
        l(r.prototype, {
            then: function (t, e, n) {
                if (g(t) && g(e) && g(n)) return this;
                var i = new a;
                return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([i, t, e, n]), 0 < this.$$state.status && o(this.$$state), i.promise
            },
            "catch": function (t) {
                return this.then(null, t)
            },
            "finally": function (t, e) {
                return this.then(function (e) {
                    return h(e, !0, t)
                }, function (e) {
                    return h(e, !1, t)
                }, e)
            }
        }), l(a.prototype, {
            resolve: function (t) {
                this.promise.$$state.status || (t === this.promise ? this.$$reject(u("qcycle", t)) : this.$$resolve(t))
            },
            $$resolve: function (t) {
                function e(t) {
                    l || (l = !0, a.$$resolve(t))
                }

                function i(t) {
                    l || (l = !0, a.$$reject(t))
                }
                var r, a = this,
                    l = !1;
                try {
                    (y(t) || x(t)) && (r = t && t.then), x(r) ? (this.promise.$$state.status = -1, r.call(t, e, i, s(this, this.notify))) : (this.promise.$$state.value = t, this.promise.$$state.status = 1, o(this.promise.$$state))
                } catch (u) {
                    i(u), n(u)
                }
            },
            reject: function (t) {
                this.promise.$$state.status || this.$$reject(t)
            },
            $$reject: function (t) {
                this.promise.$$state.value = t, this.promise.$$state.status = 2, o(this.promise.$$state)
            },
            notify: function (e) {
                var i = this.promise.$$state.pending;
                0 >= this.promise.$$state.status && i && i.length && t(function () {
                    for (var t, r, s = 0, o = i.length; o > s; s++) {
                        r = i[s][0], t = i[s][3];
                        try {
                            r.notify(x(t) ? t(e) : e)
                        } catch (a) {
                            n(a)
                        }
                    }
                })
            }
        });
        var c = function (t, e) {
                var n = new a;
                return e ? n.resolve(t) : n.reject(t), n.promise
            },
            h = function (t, e, n) {
                var i = null;
                try {
                    x(n) && (i = n())
                } catch (r) {
                    return c(r, !1)
                }
                return i && x(i.then) ? i.then(function () {
                    return c(t, e)
                }, function (t) {
                    return c(t, !1)
                }) : c(t, e)
            },
            d = function (t, e, n, i) {
                var r = new a;
                return r.resolve(t), r.promise.then(e, n, i)
            },
            f = function (t) {
                if (!x(t)) throw u("norslvr", t);
                var e = new a;
                return t(function (t) {
                    e.resolve(t)
                }, function (t) {
                    e.reject(t)
                }), e.promise
            };
        return f.prototype = r.prototype, f.defer = function () {
            var t = new a;
            return t.resolve = s(t, t.resolve), t.reject = s(t, t.reject), t.notify = s(t, t.notify), t
        }, f.reject = function (t) {
            var e = new a;
            return e.reject(t), e.promise
        }, f.when = d, f.resolve = d, f.all = function (t) {
            var e = new a,
                n = 0,
                r = oi(t) ? [] : {};
            return i(t, function (t, i) {
                n++, d(t).then(function (t) {
                    r.hasOwnProperty(i) || (r[i] = t, --n || e.resolve(r))
                }, function (t) {
                    r.hasOwnProperty(i) || e.reject(t)
                })
            }), 0 === n && e.resolve(r), e.promise
        }, f
    }

    function Ge() {
        this.$get = ["$window", "$timeout", function (t, e) {
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
                i = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.webkitCancelRequestAnimationFrame,
                r = !!n,
                s = r ? function (t) {
                    var e = n(t);
                    return function () {
                        i(e)
                    }
                } : function (t) {
                    var n = e(t, 16.66, !1);
                    return function () {
                        e.cancel(n)
                    }
                };
            return s.supported = r, s
        }]
    }

    function Xe() {
        function t(t) {
            function e() {
                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$id = ++si, this.$$ChildScope = null
            }
            return e.prototype = t, e
        }
        var r = 10,
            s = e("$rootScope"),
            o = null,
            a = null;
        this.digestTtl = function (t) {
            return arguments.length && (r = t), r
        }, this.$get = ["$exceptionHandler", "$parse", "$browser", function (e, l, u) {
            function c(t) {
                t.currentScope.$$destroyed = !0
            }

            function h(t) {
                9 === Bn && (t.$$childHead && h(t.$$childHead), t.$$nextSibling && h(t.$$nextSibling)), t.$parent = t.$$nextSibling = t.$$prevSibling = t.$$childHead = t.$$childTail = t.$root = t.$$watchers = null
            }

            function f() {
                this.$id = ++si, this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$watchersCount = 0, this.$$isolateBindings = null
            }

            function p(t) {
                if (w.$$phase) throw s("inprog", w.$$phase);
                w.$$phase = t
            }

            function m(t, e) {
                do t.$$watchersCount += e; while (t = t.$parent)
            }

            function v(t, e, n) {
                do t.$$listenerCount[n] -= e, 0 === t.$$listenerCount[n] && delete t.$$listenerCount[n]; while (t = t.$parent)
            }

            function b() {}

            function $() {
                for (; D.length;) try {
                    D.shift()()
                } catch (t) {
                    e(t)
                }
                a = null
            }

            function _() {
                null === a && (a = u.defer(function () {
                    w.$apply($)
                }))
            }
            f.prototype = {
                constructor: f,
                $new: function (e, n) {
                    var i;
                    return n = n || this, e ? (i = new f, i.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = t(this)), i = new this.$$ChildScope), i.$parent = n, i.$$prevSibling = n.$$childTail, n.$$childHead ? (n.$$childTail.$$nextSibling = i, n.$$childTail = i) : n.$$childHead = n.$$childTail = i, (e || n != this) && i.$on("$destroy", c), i
                },
                $watch: function (t, e, n, i) {
                    var r = l(t);
                    if (r.$$watchDelegate) return r.$$watchDelegate(this, e, n, r, t);
                    var s = this,
                        a = s.$$watchers,
                        u = {
                            fn: e,
                            last: b,
                            get: r,
                            exp: i || t,
                            eq: !!n
                        };
                    return o = null, x(e) || (u.fn = d), a || (a = s.$$watchers = []), a.unshift(u), m(this, 1),
                        function () {
                            0 <= I(a, u) && m(s, -1), o = null
                        }
                },
                $watchGroup: function (t, e) {
                    function n() {
                        l = !1, u ? (u = !1, e(s, s, a)) : e(s, r, a)
                    }
                    var r = Array(t.length),
                        s = Array(t.length),
                        o = [],
                        a = this,
                        l = !1,
                        u = !0;
                    if (!t.length) {
                        var c = !0;
                        return a.$evalAsync(function () {
                                c && e(s, s, a)
                            }),
                            function () {
                                c = !1
                            }
                    }
                    return 1 === t.length ? this.$watch(t[0], function (t, n, i) {
                        s[0] = t, r[0] = n, e(s, t === n ? s : r, i)
                    }) : (i(t, function (t, e) {
                        var i = a.$watch(t, function (t, i) {
                            s[e] = t, r[e] = i, l || (l = !0, a.$evalAsync(n))
                        });
                        o.push(i)
                    }), function () {
                        for (; o.length;) o.shift()()
                    })
                },
                $watchCollection: function (t, e) {
                    function i(t) {
                        r = t;
                        var e, i, o, a;
                        if (!g(r)) {
                            if (y(r))
                                if (n(r))
                                    for (s !== d && (s = d, m = s.length = 0, c++), t = r.length, m !== t && (c++, s.length = m = t), e = 0; t > e; e++) a = s[e], o = r[e], i = a !== a && o !== o, i || a === o || (c++, s[e] = o);
                                else {
                                    s !== f && (s = f = {}, m = 0, c++), t = 0;
                                    for (e in r) Gn.call(r, e) && (t++, o = r[e], a = s[e], e in s ? (i = a !== a && o !== o, i || a === o || (c++, s[e] = o)) : (m++, s[e] = o, c++));
                                    if (m > t)
                                        for (e in c++, s) Gn.call(r, e) || (m--, delete s[e])
                                } else s !== r && (s = r, c++);
                            return c
                        }
                    }
                    i.$stateful = !0;
                    var r, s, o, a = this,
                        u = 1 < e.length,
                        c = 0,
                        h = l(t, i),
                        d = [],
                        f = {},
                        p = !0,
                        m = 0;
                    return this.$watch(h, function () {
                        if (p ? (p = !1, e(r, r, a)) : e(r, o, a), u)
                            if (y(r))
                                if (n(r)) {
                                    o = Array(r.length);
                                    for (var t = 0; t < r.length; t++) o[t] = r[t]
                                } else
                                    for (t in o = {}, r) Gn.call(r, t) && (o[t] = r[t]);
                        else o = r
                    })
                },
                $digest: function () {
                    var t, n, i, l, c, h, d, f, m, g, v, y = r,
                        _ = [];
                    p("$digest"), u.$$checkUrlChange(), this === w && null !== a && (u.defer.cancel(a), $()), o = null;
                    do {
                        for (f = !1, m = this, h = 0; h < C.length; h++) {
                            try {
                                v = C[h], v.scope.$eval(v.expression, v.locals)
                            } catch (D) {
                                e(D)
                            }
                            o = null
                        }
                        C.length = 0;
                        t: do {
                            if (h = m.$$watchers)
                                for (d = h.length; d--;) try {
                                    if (t = h[d])
                                        if (c = t.get, (n = c(m)) === (i = t.last) || (t.eq ? N(n, i) : "number" == typeof n && "number" == typeof i && isNaN(n) && isNaN(i))) {
                                            if (t === o) {
                                                f = !1;
                                                break t
                                            }
                                        } else f = !0, o = t, t.last = t.eq ? P(n, null) : n, l = t.fn, l(n, i === b ? n : i, m), 5 > y && (g = 4 - y, _[g] || (_[g] = []), _[g].push({
                                            msg: x(t.exp) ? "fn: " + (t.exp.name || t.exp.toString()) : t.exp,
                                            newVal: n,
                                            oldVal: i
                                        }))
                                } catch (T) {
                                    e(T)
                                }
                            if (!(h = m.$$watchersCount && m.$$childHead || m !== this && m.$$nextSibling))
                                for (; m !== this && !(h = m.$$nextSibling);) m = m.$parent
                        } while (m = h);
                        if ((f || C.length) && !y--) throw w.$$phase = null, s("infdig", r, _)
                    } while (f || C.length);
                    for (w.$$phase = null; S < k.length;) try {
                        k[S++]()
                    } catch (A) {
                        e(A)
                    }
                    k.length = S = 0
                },
                $destroy: function () {
                    if (!this.$$destroyed) {
                        var t = this.$parent;
                        this.$broadcast("$destroy"), this.$$destroyed = !0, this === w && u.$$applicationDestroyed(), m(this, -this.$$watchersCount);
                        for (var e in this.$$listenerCount) v(this, this.$$listenerCount[e], e);
                        t && t.$$childHead == this && (t.$$childHead = this.$$nextSibling), t && t.$$childTail == this && (t.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = d, this.$on = this.$watch = this.$watchGroup = function () {
                            return d
                        }, this.$$listeners = {}, this.$$nextSibling = null, h(this)
                    }
                },
                $eval: function (t, e) {
                    return l(t)(this, e)
                },
                $evalAsync: function (t, e) {
                    w.$$phase || C.length || u.defer(function () {
                        C.length && w.$digest()
                    }), C.push({
                        scope: this,
                        expression: l(t),
                        locals: e
                    })
                },
                $$postDigest: function (t) {
                    k.push(t)
                },
                $apply: function (t) {
                    try {
                        p("$apply");
                        try {
                            return this.$eval(t)
                        } finally {
                            w.$$phase = null
                        }
                    } catch (n) {
                        e(n)
                    } finally {
                        try {
                            w.$digest()
                        } catch (i) {
                            throw e(i), i
                        }
                    }
                },
                $applyAsync: function (t) {
                    function e() {
                        n.$eval(t)
                    }
                    var n = this;
                    t && D.push(e), t = l(t), _()
                },
                $on: function (t, e) {
                    var n = this.$$listeners[t];
                    n || (this.$$listeners[t] = n = []), n.push(e);
                    var i = this;
                    do i.$$listenerCount[t] || (i.$$listenerCount[t] = 0), i.$$listenerCount[t]++; while (i = i.$parent);
                    var r = this;
                    return function () {
                        var i = n.indexOf(e); - 1 !== i && (n[i] = null, v(r, 1, t))
                    }
                },
                $emit: function (t, n) {
                    var i, r, s, o = [],
                        a = this,
                        l = !1,
                        u = {
                            name: t,
                            targetScope: a,
                            stopPropagation: function () {
                                l = !0
                            },
                            preventDefault: function () {
                                u.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        c = O([u], arguments, 1);
                    do {
                        for (i = a.$$listeners[t] || o, u.currentScope = a, r = 0, s = i.length; s > r; r++)
                            if (i[r]) try {
                                i[r].apply(null, c)
                            } catch (h) {
                                e(h)
                            } else i.splice(r, 1), r--, s--;
                        if (l) return u.currentScope = null, u;
                        a = a.$parent
                    } while (a);
                    return u.currentScope = null, u
                },
                $broadcast: function (t, n) {
                    var i = this,
                        r = this,
                        s = {
                            name: t,
                            targetScope: this,
                            preventDefault: function () {
                                s.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        };
                    if (!this.$$listenerCount[t]) return s;
                    for (var o, a, l = O([s], arguments, 1); i = r;) {
                        for (s.currentScope = i, r = i.$$listeners[t] || [], o = 0, a = r.length; a > o; o++)
                            if (r[o]) try {
                                r[o].apply(null, l)
                            } catch (u) {
                                e(u)
                            } else r.splice(o, 1), o--, a--;
                        if (!(r = i.$$listenerCount[t] && i.$$childHead || i !== this && i.$$nextSibling))
                            for (; i !== this && !(r = i.$$nextSibling);) i = i.$parent
                    }
                    return s.currentScope = null, s
                }
            };
            var w = new f,
                C = w.$$asyncQueue = [],
                k = w.$$postDigestQueue = [],
                D = w.$$applyAsyncQueue = [],
                S = 0;
            return w
        }]
    }

    function Je() {
        var t = /^\s*(https?|ftp|mailto|tel|file):/,
            e = /^\s*((https?|ftp|file|blob):|data:image\/)/;
        this.aHrefSanitizationWhitelist = function (e) {
            return v(e) ? (t = e, this) : t
        }, this.imgSrcSanitizationWhitelist = function (t) {
            return v(t) ? (e = t, this) : e
        }, this.$get = function () {
            return function (n, i) {
                var r, s = i ? e : t;
                return r = an(n).href, "" === r || r.match(s) ? n : "unsafe:" + r
            }
        }
    }

    function Qe(t) {
        if ("self" === t) return t;
        if ($(t)) {
            if (-1 < t.indexOf("***")) throw wr("iwcard", t);
            return t = ui(t).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + t + "$")
        }
        if (C(t)) return new RegExp("^" + t.source + "$");
        throw wr("imatcher")
    }

    function Ze(t) {
        var e = [];
        return v(t) && i(t, function (t) {
            e.push(Qe(t))
        }), e
    }

    function tn() {
        this.SCE_CONTEXTS = xr;
        var t = ["self"],
            e = [];
        this.resourceUrlWhitelist = function (e) {
            return arguments.length && (t = Ze(e)), t
        }, this.resourceUrlBlacklist = function (t) {
            return arguments.length && (e = Ze(t)), e
        }, this.$get = ["$injector", function (n) {
            function i(t, e) {
                return "self" === t ? ln(e) : !!t.exec(e.href)
            }

            function r(t) {
                var e = function (t) {
                    this.$$unwrapTrustedValue = function () {
                        return t
                    }
                };
                return t && (e.prototype = new t), e.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                }, e.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                }, e
            }
            var s = function (t) {
                throw wr("unsafe")
            };
            n.has("$sanitize") && (s = n.get("$sanitize"));
            var o = r(),
                a = {};
            return a[xr.HTML] = r(o), a[xr.CSS] = r(o), a[xr.URL] = r(o), a[xr.JS] = r(o), a[xr.RESOURCE_URL] = r(a[xr.URL]), {
                trustAs: function (t, e) {
                    var n = a.hasOwnProperty(t) ? a[t] : null;
                    if (!n) throw wr("icontext", t, e);
                    if (null === e || g(e) || "" === e) return e;
                    if ("string" != typeof e) throw wr("itype", t);
                    return new n(e)
                },
                getTrusted: function (n, r) {
                    if (null === r || g(r) || "" === r) return r;
                    var o = a.hasOwnProperty(n) ? a[n] : null;
                    if (o && r instanceof o) return r.$$unwrapTrustedValue();
                    if (n === xr.RESOURCE_URL) {
                        var l, u, o = an(r.toString()),
                            c = !1;
                        for (l = 0, u = t.length; u > l; l++)
                            if (i(t[l], o)) {
                                c = !0;
                                break
                            }
                        if (c)
                            for (l = 0, u = e.length; u > l; l++)
                                if (i(e[l], o)) {
                                    c = !1;
                                    break
                                }
                        if (c) return r;
                        throw wr("insecurl", r.toString())
                    }
                    if (n === xr.HTML) return s(r);
                    throw wr("unsafe")
                },
                valueOf: function (t) {
                    return t instanceof o ? t.$$unwrapTrustedValue() : t
                }
            }
        }]
    }

    function en() {
        var t = !0;
        this.enabled = function (e) {
            return arguments.length && (t = !!e), t
        }, this.$get = ["$parse", "$sceDelegate", function (e, n) {
            if (t && 8 > Bn) throw wr("iequirks");
            var r = lt(xr);
            r.isEnabled = function () {
                return t
            }, r.trustAs = n.trustAs, r.getTrusted = n.getTrusted, r.valueOf = n.valueOf, t || (r.trustAs = r.getTrusted = function (t, e) {
                return e
            }, r.valueOf = f), r.parseAs = function (t, n) {
                var i = e(n);
                return i.literal && i.constant ? i : e(n, function (e) {
                    return r.getTrusted(t, e)
                })
            };
            var s = r.parseAs,
                o = r.getTrusted,
                a = r.trustAs;
            return i(xr, function (t, e) {
                var n = Xn(e);
                r[ct("parse_as_" + n)] = function (e) {
                    return s(t, e)
                }, r[ct("get_trusted_" + n)] = function (e) {
                    return o(t, e)
                }, r[ct("trust_as_" + n)] = function (e) {
                    return a(t, e)
                }
            }), r
        }]
    }

    function nn() {
        this.$get = ["$window", "$document", function (t, e) {
            var n, i = {},
                r = !(t.chrome && t.chrome.app && t.chrome.app.runtime) && t.history && t.history.pushState,
                s = c((/android (\d+)/.exec(Xn((t.navigator || {}).userAgent)) || [])[1]),
                o = /Boxee/i.test((t.navigator || {}).userAgent),
                a = e[0] || {},
                l = /^(Moz|webkit|ms)(?=[A-Z])/,
                u = a.body && a.body.style,
                h = !1,
                d = !1;
            if (u) {
                for (var f in u)
                    if (h = l.exec(f)) {
                        n = h[0], n = n[0].toUpperCase() + n.substr(1);
                        break
                    }
                n || (n = "WebkitOpacity" in u && "webkit"), h = !!("transition" in u || n + "Transition" in u), d = !!("animation" in u || n + "Animation" in u), !s || h && d || (h = $(u.webkitTransition), d = $(u.webkitAnimation))
            }
            return {
                history: !(!r || 4 > s || o),
                hasEvent: function (t) {
                    if ("input" === t && 11 >= Bn) return !1;
                    if (g(i[t])) {
                        var e = a.createElement("div");
                        i[t] = "on" + t in e
                    }
                    return i[t]
                },
                csp: ci(),
                vendorPrefix: n,
                transitions: h,
                animations: d,
                android: s
            }
        }]
    }

    function rn() {
        var t;
        this.httpOptions = function (e) {
            return e ? (t = e, this) : t
        }, this.$get = ["$templateCache", "$http", "$q", "$sce", function (e, n, i, r) {
            function s(o, a) {
                s.totalPendingRequests++, (!$(o) || g(e.get(o))) && (o = r.getTrustedResourceUrl(o));
                var u = n.defaults && n.defaults.transformResponse;
                return oi(u) ? u = u.filter(function (t) {
                    return t !== oe
                }) : u === oe && (u = null), n.get(o, l({
                    cache: e,
                    transformResponse: u
                }, t))["finally"](function () {
                    s.totalPendingRequests--
                }).then(function (t) {
                    return e.put(o, t.data), t.data
                }, function (t) {
                    if (!a) throw Cr("tpload", o, t.status, t.statusText);
                    return i.reject(t)
                })
            }
            return s.totalPendingRequests = 0, s
        }]
    }

    function sn() {
        this.$get = ["$rootScope", "$browser", "$location", function (t, e, n) {
            return {
                findBindings: function (t, e, n) {
                    t = t.getElementsByClassName("ng-binding");
                    var r = [];
                    return i(t, function (t) {
                        var s = ri.element(t).data("$binding");
                        s && i(s, function (i) {
                            n ? new RegExp("(^|\\s)" + ui(e) + "(\\s|\\||$)").test(i) && r.push(t) : -1 != i.indexOf(e) && r.push(t)
                        })
                    }), r
                },
                findModels: function (t, e, n) {
                    for (var i = ["ng-", "data-ng-", "ng\\:"], r = 0; r < i.length; ++r) {
                        var s = t.querySelectorAll("[" + i[r] + "model" + (n ? "=" : "*=") + '"' + e + '"]');
                        if (s.length) return s
                    }
                },
                getLocation: function () {
                    return n.url()
                },
                setLocation: function (e) {
                    e !== n.url() && (n.url(e), t.$digest())
                },
                whenStable: function (t) {
                    e.notifyWhenNoOutstandingRequests(t)
                }
            }
        }]
    }

    function on() {
        this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler", function (t, e, n, i, r) {
            function s(s, a, l) {
                x(s) || (l = a, a = s, s = d);
                var u, c = Qn.call(arguments, 3),
                    h = v(l) && !l,
                    f = (h ? i : n).defer(),
                    p = f.promise;
                return u = e.defer(function () {
                    try {
                        f.resolve(s.apply(null, c))
                    } catch (e) {
                        f.reject(e), r(e)
                    } finally {
                        delete o[p.$$timeoutId]
                    }
                    h || t.$apply()
                }, a), p.$$timeoutId = u, o[u] = f, p
            }
            var o = {};
            return s.cancel = function (t) {
                return t && t.$$timeoutId in o ? (o[t.$$timeoutId].reject("canceled"), delete o[t.$$timeoutId], e.defer.cancel(t.$$timeoutId)) : !1
            }, s
        }]
    }

    function an(t) {
        return Bn && (kr.setAttribute("href", t), t = kr.href), kr.setAttribute("href", t), {
            href: kr.href,
            protocol: kr.protocol ? kr.protocol.replace(/:$/, "") : "",
            host: kr.host,
            search: kr.search ? kr.search.replace(/^\?/, "") : "",
            hash: kr.hash ? kr.hash.replace(/^#/, "") : "",
            hostname: kr.hostname,
            port: kr.port,
            pathname: "/" === kr.pathname.charAt(0) ? kr.pathname : "/" + kr.pathname
        }
    }

    function ln(t) {
        return t = $(t) ? an(t) : t, t.protocol === Dr.protocol && t.host === Dr.host
    }

    function un() {
        this.$get = p(t)
    }

    function cn(t) {
        function e(t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }
        var n = t[0] || {},
            i = {},
            r = "";
        return function () {
            var t, s, o, a, l;
            if (t = n.cookie || "", t !== r)
                for (r = t, t = r.split("; "), i = {}, o = 0; o < t.length; o++) s = t[o], a = s.indexOf("="), a > 0 && (l = e(s.substring(0, a)), g(i[l]) && (i[l] = e(s.substring(a + 1))));
            return i
        }
    }

    function hn() {
        this.$get = cn
    }

    function dn(t) {
        function e(n, r) {
            if (y(n)) {
                var s = {};
                return i(n, function (t, n) {
                    s[n] = e(n, t)
                }), s
            }
            return t.factory(n + "Filter", r)
        }
        this.register = e, this.$get = ["$injector", function (t) {
            return function (e) {
                return t.get(e + "Filter")
            }
        }], e("currency", vn), e("date", Tn), e("filter", fn), e("json", An), e("limitTo", En), e("lowercase", Pr), e("number", yn), e("orderBy", In), e("uppercase", Nr)
    }

    function fn() {
        return function (t, i, r) {
            if (!n(t)) {
                if (null == t) return t;
                throw e("filter")("notarray", t)
            }
            var s;
            switch (gn(i)) {
            case "function":
                break;
            case "boolean":
            case "null":
            case "number":
            case "string":
                s = !0;
            case "object":
                i = pn(i, r, s);
                break;
            default:
                return t
            }
            return Array.prototype.filter.call(t, i)
        }
    }

    function pn(t, e, n) {
        var i = y(t) && "$" in t;
        return !0 === e ? e = N : x(e) || (e = function (t, e) {
                return g(t) ? !1 : null === t || null === e ? t === e : y(e) || y(t) && !m(t) ? !1 : (t = Xn("" + t), e = Xn("" + e), -1 !== t.indexOf(e))
            }),
            function (r) {
                return i && !y(r) ? mn(r, t.$, e, !1) : mn(r, t, e, n)
            }
    }

    function mn(t, e, n, i, r) {
        var s = gn(t),
            o = gn(e);
        if ("string" === o && "!" === e.charAt(0)) return !mn(t, e.substring(1), n, i);
        if (oi(t)) return t.some(function (t) {
            return mn(t, e, n, i)
        });
        switch (s) {
        case "object":
            var a;
            if (i) {
                for (a in t)
                    if ("$" !== a.charAt(0) && mn(t[a], e, n, !0)) return !0;
                return r ? !1 : mn(t, e, n, !1)
            }
            if ("object" === o) {
                for (a in e)
                    if (r = e[a], !x(r) && !g(r) && (s = "$" === a, !mn(s ? t : t[a], r, n, s, s))) return !1;
                return !0
            }
            return n(t, e);
        case "function":
            return !1;
        default:
            return n(t, e)
        }
    }

    function gn(t) {
        return null === t ? "null" : typeof t
    }

    function vn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n, i) {
            return g(n) && (n = e.CURRENCY_SYM), g(i) && (i = e.PATTERNS[1].maxFrac), null == t ? t : _n(t, e.PATTERNS[1], e.GROUP_SEP, e.DECIMAL_SEP, i).replace(/\u00A4/g, n)
        }
    }

    function yn(t) {
        var e = t.NUMBER_FORMATS;
        return function (t, n) {
            return null == t ? t : _n(t, e.PATTERNS[0], e.GROUP_SEP, e.DECIMAL_SEP, n)
        }
    }

    function bn(t) {
        var e, n, i, r, s, o = 0;
        for (-1 < (n = t.indexOf(Tr)) && (t = t.replace(Tr, "")), 0 < (i = t.search(/e/i)) ? (0 > n && (n = i), n += +t.slice(i + 1), t = t.substring(0, i)) : 0 > n && (n = t.length), i = 0; t.charAt(i) == Ar; i++);
        if (i == (s = t.length)) e = [0], n = 1;
        else {
            for (s--; t.charAt(s) == Ar;) s--;
            for (n -= i, e = [], r = 0; s >= i; i++, r++) e[r] = +t.charAt(i)
        }
        return n > Sr && (e = e.splice(0, Sr - 1), o = n - 1, n = 1), {
            d: e,
            e: o,
            i: n
        }
    }

    function $n(t, e, n, i) {
        var r = t.d,
            s = r.length - t.i;
        if (e = g(e) ? Math.min(Math.max(n, s), i) : +e, n = e + t.i, i = r[n], n > 0) {
            r.splice(Math.max(t.i, n));
            for (var o = n; o < r.length; o++) r[o] = 0
        } else
            for (s = Math.max(0, s), t.i = 1, r.length = Math.max(1, n = e + 1), r[0] = 0, o = 1; n > o; o++) r[o] = 0;
        if (i >= 5)
            if (0 > n - 1) {
                for (i = 0; i > n; i--) r.unshift(0), t.i++;
                r.unshift(1), t.i++
            } else r[n - 1]++;
        for (; s < Math.max(0, e); s++) r.push(0);
        (e = r.reduceRight(function (t, e, n, i) {
            return e += t, i[n] = e % 10, Math.floor(e / 10)
        }, 0)) && (r.unshift(e), t.i++)
    }

    function _n(t, e, n, i, r) {
        if (!$(t) && !_(t) || isNaN(t)) return "";
        var s = !isFinite(t),
            o = !1,
            a = Math.abs(t) + "",
            l = "";
        if (s) l = "∞";
        else {
            for (o = bn(a), $n(o, r, e.minFrac, e.maxFrac), l = o.d, a = o.i, r = o.e, s = [], o = l.reduce(function (t, e) {
                    return t && !e
                }, !0); 0 > a;) l.unshift(0), a++;
            for (a > 0 ? s = l.splice(a, l.length) : (s = l, l = [0]), a = [], l.length >= e.lgSize && a.unshift(l.splice(-e.lgSize, l.length).join("")); l.length > e.gSize;) a.unshift(l.splice(-e.gSize, l.length).join(""));
            l.length && a.unshift(l.join("")), l = a.join(n), s.length && (l += i + s.join("")), r && (l += "e+" + r)
        }
        return 0 > t && !o ? e.negPre + l + e.negSuf : e.posPre + l + e.posSuf
    }

    function wn(t, e, n, i) {
        var r = "";
        for ((0 > t || i && 0 >= t) && (i ? t = -t + 1 : (t = -t, r = "-")), t = "" + t; t.length < e;) t = Ar + t;
        return n && (t = t.substr(t.length - e)), r + t
    }

    function xn(t, e, n, i, r) {
        return n = n || 0,
            function (s) {
                return s = s["get" + t](), (n > 0 || s > -n) && (s += n), 0 === s && -12 == n && (s = 12), wn(s, e, i, r)
            }
    }

    function Cn(t, e, n) {
        return function (i, r) {
            var s = i["get" + t](),
                o = Jn((n ? "STANDALONE" : "") + (e ? "SHORT" : "") + t);
            return r[o][s]
        }
    }

    function kn(t) {
        var e = new Date(t, 0, 1).getDay();
        return new Date(t, 0, (4 >= e ? 5 : 12) - e)
    }

    function Dn(t) {
        return function (e) {
            var n = kn(e.getFullYear());
            return e = +new Date(e.getFullYear(), e.getMonth(), e.getDate() + (4 - e.getDay())) - +n, e = 1 + Math.round(e / 6048e5), wn(e, t)
        }
    }

    function Sn(t, e) {
        return 0 >= t.getFullYear() ? e.ERAS[0] : e.ERAS[1]
    }

    function Tn(t) {
        function e(t) {
            var e;
            if (e = t.match(n)) {
                t = new Date(0);
                var i = 0,
                    r = 0,
                    s = e[8] ? t.setUTCFullYear : t.setFullYear,
                    o = e[8] ? t.setUTCHours : t.setHours;
                e[9] && (i = c(e[9] + e[10]), r = c(e[9] + e[11])), s.call(t, c(e[1]), c(e[2]) - 1, c(e[3])), i = c(e[4] || 0) - i, r = c(e[5] || 0) - r, s = c(e[6] || 0), e = Math.round(1e3 * parseFloat("0." + (e[7] || 0))), o.call(t, i, r, s, e)
            }
            return t
        }
        var n = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (n, r, s) {
            var o, a, l = "",
                u = [];
            if (r = r || "mediumDate", r = t.DATETIME_FORMATS[r] || r, $(n) && (n = Ir.test(n) ? c(n) : e(n)), _(n) && (n = new Date(n)), !w(n) || !isFinite(n.getTime())) return n;
            for (; r;)(a = Mr.exec(r)) ? (u = O(u, a, 1), r = u.pop()) : (u.push(r), r = null);
            var h = n.getTimezoneOffset();
            return s && (h = R(s, h), n = W(n, s, !0)), i(u, function (e) {
                o = Er[e], l += o ? o(n, t.DATETIME_FORMATS, h) : "''" === e ? "'" : e.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            }), l
        }
    }

    function An() {
        return function (t, e) {
            return g(e) && (e = 2), F(t, e)
        }
    }

    function En() {
        return function (t, e, i) {
            return e = 1 / 0 === Math.abs(Number(e)) ? Number(e) : c(e), isNaN(e) ? t : (_(t) && (t = t.toString()), n(t) ? (i = !i || isNaN(i) ? 0 : c(i), i = 0 > i ? Math.max(0, t.length + i) : i, e >= 0 ? Mn(t, i, i + e) : 0 === i ? Mn(t, e, t.length) : Mn(t, Math.max(0, i + e), i)) : t)
        }
    }

    function Mn(t, e, n) {
        return $(t) ? t.slice(e, n) : Qn.call(t, e, n)
    }

    function In(t) {
        function i(e) {
            return e.map(function (e) {
                var n = 1,
                    i = f;
                if (x(e)) i = e;
                else if ($(e) && (("+" == e.charAt(0) || "-" == e.charAt(0)) && (n = "-" == e.charAt(0) ? -1 : 1, e = e.substring(1)), "" !== e && (i = t(e), i.constant))) var r = i(),
                    i = function (t) {
                        return t[r]
                    };
                return {
                    get: i,
                    descending: n
                }
            })
        }

        function r(t) {
            switch (typeof t) {
            case "number":
            case "boolean":
            case "string":
                return !0;
            default:
                return !1
            }
        }

        function s(t, e) {
            var n = 0,
                i = t.type,
                r = e.type;
            if (i === r) {
                var r = t.value,
                    s = e.value;
                "string" === i ? (r = r.toLowerCase(), s = s.toLowerCase()) : "object" === i && (y(r) && (r = t.index), y(s) && (s = e.index)), r !== s && (n = s > r ? -1 : 1)
            } else n = r > i ? -1 : 1;
            return n
        }
        return function (t, o, a, l) {
            if (null == t) return t;
            if (!n(t)) throw e("orderBy")("notarray", t);
            oi(o) || (o = [o]), 0 === o.length && (o = ["+"]);
            var u = i(o),
                c = a ? -1 : 1,
                h = x(l) ? l : s;
            return t = Array.prototype.map.call(t, function (t, e) {
                return {
                    value: t,
                    tieBreaker: {
                        value: e,
                        type: "number",
                        index: e
                    },
                    predicateValues: u.map(function (n) {
                        var i = n.get(t);
                        return n = typeof i, null === i ? (n = "string", i = "null") : "object" === n && (x(i.valueOf) && (i = i.valueOf(), r(i)) || m(i) && (i = i.toString(), r(i))), {
                            value: i,
                            type: n,
                            index: e
                        }
                    })
                }
            }), t.sort(function (t, e) {
                for (var n = 0, i = u.length; i > n; n++) {
                    var r = h(t.predicateValues[n], e.predicateValues[n]);
                    if (r) return r * u[n].descending * c
                }
                return h(t.tieBreaker, e.tieBreaker) * c
            }), t = t.map(function (t) {
                return t.value
            })
        }
    }

    function Pn(t) {
        return x(t) && (t = {
            link: t
        }), t.restrict = t.restrict || "AC", p(t)
    }

    function Nn(t, e, n, r, s) {
        var o = this,
            a = [];
        o.$error = {}, o.$$success = {}, o.$pending = void 0, o.$name = s(e.name || e.ngForm || "")(n), o.$dirty = !1, o.$pristine = !0, o.$valid = !0, o.$invalid = !1, o.$submitted = !1, o.$$parentForm = jr, o.$rollbackViewValue = function () {
            i(a, function (t) {
                t.$rollbackViewValue()
            })
        }, o.$commitViewValue = function () {
            i(a, function (t) {
                t.$commitViewValue()
            })
        }, o.$addControl = function (t) {
            it(t.$name, "input"), a.push(t), t.$name && (o[t.$name] = t), t.$$parentForm = o
        }, o.$$renameControl = function (t, e) {
            var n = t.$name;
            o[n] === t && delete o[n], o[e] = t, t.$name = e
        }, o.$removeControl = function (t) {
            t.$name && o[t.$name] === t && delete o[t.$name], i(o.$pending, function (e, n) {
                o.$setValidity(n, null, t)
            }), i(o.$error, function (e, n) {
                o.$setValidity(n, null, t)
            }), i(o.$$success, function (e, n) {
                o.$setValidity(n, null, t)
            }), I(a, t), t.$$parentForm = jr
        }, qn({
            ctrl: this,
            $element: t,
            set: function (t, e, n) {
                var i = t[e];
                i ? -1 === i.indexOf(n) && i.push(n) : t[e] = [n]
            },
            unset: function (t, e, n) {
                var i = t[e];
                i && (I(i, n), 0 === i.length && delete t[e])
            },
            $animate: r
        }), o.$setDirty = function () {
            r.removeClass(t, bs), r.addClass(t, $s), o.$dirty = !0, o.$pristine = !1, o.$$parentForm.$setDirty()
        }, o.$setPristine = function () {
            r.setClass(t, bs, $s + " ng-submitted"), o.$dirty = !1, o.$pristine = !0, o.$submitted = !1, i(a, function (t) {
                t.$setPristine()
            })
        }, o.$setUntouched = function () {
            i(a, function (t) {
                t.$setUntouched()
            })
        }, o.$setSubmitted = function () {
            r.addClass(t, "ng-submitted"), o.$submitted = !0, o.$$parentForm.$setSubmitted()
        }
    }

    function On(t) {
        t.$formatters.push(function (e) {
            return t.$isEmpty(e) ? e : e.toString()
        })
    }

    function Hn(t, e, n, i, r, s) {
        var o = Xn(e[0].type);
        if (!r.android) {
            var a = !1;
            e.on("compositionstart", function () {
                a = !0
            }), e.on("compositionend", function () {
                a = !1, u()
            })
        }
        var l, u = function (t) {
            if (l && (s.defer.cancel(l), l = null), !a) {
                var r = e.val();
                t = t && t.type, "password" === o || n.ngTrim && "false" === n.ngTrim || (r = li(r)), (i.$viewValue !== r || "" === r && i.$$hasNativeValidators) && i.$setViewValue(r, t)
            }
        };
        if (r.hasEvent("input")) e.on("input", u);
        else {
            var c = function (t, e, n) {
                l || (l = s.defer(function () {
                    l = null, e && e.value === n || u(t)
                }))
            };
            e.on("keydown", function (t) {
                var e = t.keyCode;
                91 === e || e > 15 && 19 > e || e >= 37 && 40 >= e || c(t, this, this.value)
            }), r.hasEvent("paste") && e.on("paste cut", c)
        }
        e.on("change", u), Xr[o] && i.$$hasNativeValidators && o === n.type && e.on("keydown wheel mousedown", function (t) {
            if (!l) {
                var e = this.validity,
                    n = e.badInput,
                    i = e.typeMismatch;
                l = s.defer(function () {
                    l = null, e.badInput === n && e.typeMismatch === i || u(t)
                })
            }
        }), i.$render = function () {
            var t = i.$isEmpty(i.$viewValue) ? "" : i.$viewValue;
            e.val() !== t && e.val(t)
        }
    }

    function jn(t, e) {
        return function (n, r) {
            var s, o;
            if (w(n)) return n;
            if ($(n)) {
                if ('"' == n.charAt(0) && '"' == n.charAt(n.length - 1) && (n = n.substring(1, n.length - 1)), Wr.test(n)) return new Date(n);
                if (t.lastIndex = 0, s = t.exec(n)) return s.shift(), o = r ? {
                    yyyy: r.getFullYear(),
                    MM: r.getMonth() + 1,
                    dd: r.getDate(),
                    HH: r.getHours(),
                    mm: r.getMinutes(),
                    ss: r.getSeconds(),
                    sss: r.getMilliseconds() / 1e3
                } : {
                    yyyy: 1970,
                    MM: 1,
                    dd: 1,
                    HH: 0,
                    mm: 0,
                    ss: 0,
                    sss: 0
                }, i(s, function (t, n) {
                    n < e.length && (o[e[n]] = +t)
                }), new Date(o.yyyy, o.MM - 1, o.dd, o.HH, o.mm, o.ss || 0, 1e3 * o.sss || 0)
            }
            return NaN
        }
    }

    function Fn(t, e, n, i) {
        return function (r, s, o, a, l, u, c) {
            function h(t) {
                return t && !(t.getTime && t.getTime() !== t.getTime())
            }

            function d(t) {
                return v(t) && !w(t) ? n(t) || void 0 : t
            }
            zn(r, s, o, a), Hn(r, s, o, a, l, u);
            var f, p = a && a.$options && a.$options.timezone;
            if (a.$$parserName = t, a.$parsers.push(function (t) {
                    return a.$isEmpty(t) ? null : e.test(t) ? (t = n(t, f), p && (t = W(t, p)), t) : void 0
                }), a.$formatters.push(function (t) {
                    if (t && !w(t)) throw ws("datefmt", t);
                    return h(t) ? ((f = t) && p && (f = W(f, p, !0)), c("date")(t, i, p)) : (f = null, "")
                }), v(o.min) || o.ngMin) {
                var m;
                a.$validators.min = function (t) {
                    return !h(t) || g(m) || n(t) >= m
                }, o.$observe("min", function (t) {
                    m = d(t), a.$validate()
                })
            }
            if (v(o.max) || o.ngMax) {
                var y;
                a.$validators.max = function (t) {
                    return !h(t) || g(y) || n(t) <= y
                }, o.$observe("max", function (t) {
                    y = d(t), a.$validate()
                })
            }
        }
    }

    function zn(t, e, n, i) {
        (i.$$hasNativeValidators = y(e[0].validity)) && i.$parsers.push(function (t) {
            var n = e.prop("validity") || {};
            return n.badInput || n.typeMismatch ? void 0 : t
        })
    }

    function Rn(t, e, n, i, r) {
        if (v(i)) {
            if (t = t(i), !t.constant) throw ws("constexpr", n, i);
            return t(e)
        }
        return r
    }

    function Wn(t, e) {
        return t = "ngClass" + t, ["$animate", function (n) {
            function r(t, e) {
                var n = [],
                    i = 0;
                t: for (; i < t.length; i++) {
                    for (var r = t[i], s = 0; s < e.length; s++)
                        if (r == e[s]) continue t;
                    n.push(r)
                }
                return n
            }

            function s(t) {
                var e = [];
                return oi(t) ? (i(t, function (t) {
                    e = e.concat(s(t))
                }), e) : $(t) ? t.split(" ") : y(t) ? (i(t, function (t, n) {
                    t && (e = e.concat(n.split(" ")))
                }), e) : t
            }
            return {
                restrict: "AC",
                link: function (o, a, l) {
                    function u(t) {
                        t = c(t, 1), l.$addClass(t)
                    }

                    function c(t, e) {
                        var n = a.data("$classCounts") || ot(),
                            r = [];
                        return i(t, function (t) {
                            (e > 0 || n[t]) && (n[t] = (n[t] || 0) + e, n[t] === +(e > 0) && r.push(t))
                        }), a.data("$classCounts", n), r.join(" ")
                    }

                    function h(t, e) {
                        var i = r(e, t),
                            s = r(t, e),
                            i = c(i, 1),
                            s = c(s, -1);
                        i && i.length && n.addClass(a, i), s && s.length && n.removeClass(a, s)
                    }

                    function d(t) {
                        if (!0 === e || (1 & o.$index) === e) {
                            var n = s(t || []);
                            if (f) {
                                if (!N(t, f)) {
                                    var i = s(f);
                                    h(i, n)
                                }
                            } else u(n)
                        }
                        f = oi(t) ? t.map(function (t) {
                            return lt(t)
                        }) : lt(t)
                    }
                    var f;
                    o.$watch(l[t], d, !0), l.$observe("class", function (e) {
                        d(o.$eval(l[t]))
                    }), "ngClass" !== t && o.$watch("$index", function (n, i) {
                        var r = 1 & n;
                        if (r !== (1 & i)) {
                            var a = s(o.$eval(l[t]));
                            r === e ? u(a) : (r = c(a, -1), l.$removeClass(r))
                        }
                    })
                }
            }
        }]
    }

    function qn(t) {
        function e(t, e) {
            e && !s[t] ? (l.addClass(r, t), s[t] = !0) : !e && s[t] && (l.removeClass(r, t), s[t] = !1)
        }

        function n(t, n) {
            t = t ? "-" + Z(t, "-") : "", e(vs + t, !0 === n), e(ys + t, !1 === n)
        }
        var i = t.ctrl,
            r = t.$element,
            s = {},
            o = t.set,
            a = t.unset,
            l = t.$animate;
        s[ys] = !(s[vs] = r.hasClass(vs)), i.$setValidity = function (t, r, s) {
            g(r) ? (i.$pending || (i.$pending = {}), o(i.$pending, t, s)) : (i.$pending && a(i.$pending, t, s), Ln(i.$pending) && (i.$pending = void 0)), S(r) ? r ? (a(i.$error, t, s), o(i.$$success, t, s)) : (o(i.$error, t, s), a(i.$$success, t, s)) : (a(i.$error, t, s), a(i.$$success, t, s)), i.$pending ? (e(_s, !0), i.$valid = i.$invalid = void 0, n("", null)) : (e(_s, !1), i.$valid = Ln(i.$error), i.$invalid = !i.$valid, n("", i.$valid)), r = i.$pending && i.$pending[t] ? void 0 : i.$error[t] ? !1 : i.$$success[t] ? !0 : null, n(t, r), i.$$parentForm.$setValidity(t, r, i)
        }
    }

    function Ln(t) {
        if (t)
            for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
        return !0
    }
    var Bn, Vn, Un, Yn, Kn = /^\/(.+)\/([a-z]*)$/,
        Gn = Object.prototype.hasOwnProperty,
        Xn = function (t) {
            return $(t) ? t.toLowerCase() : t
        },
        Jn = function (t) {
            return $(t) ? t.toUpperCase() : t
        },
        Qn = [].slice,
        Zn = [].splice,
        ti = [].push,
        ei = Object.prototype.toString,
        ni = Object.getPrototypeOf,
        ii = e("ng"),
        ri = t.angular || (t.angular = {}),
        si = 0;
    Bn = t.document.documentMode, d.$inject = [], f.$inject = [];
    var oi = Array.isArray,
        ai = /^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,
        li = function (t) {
            return $(t) ? t.trim() : t
        },
        ui = function (t) {
            return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
        },
        ci = function () {
            if (!v(ci.rules)) {
                var e = t.document.querySelector("[ng-csp]") || t.document.querySelector("[data-ng-csp]");
                if (e) {
                    var n = e.getAttribute("ng-csp") || e.getAttribute("data-ng-csp");
                    ci.rules = {
                        noUnsafeEval: !n || -1 !== n.indexOf("no-unsafe-eval"),
                        noInlineStyle: !n || -1 !== n.indexOf("no-inline-style")
                    }
                } else {
                    e = ci;
                    try {
                        new Function(""), n = !1
                    } catch (i) {
                        n = !0
                    }
                    e.rules = {
                        noUnsafeEval: n,
                        noInlineStyle: !1
                    }
                }
            }
            return ci.rules
        },
        hi = function () {
            if (v(hi.name_)) return hi.name_;
            var e, n, i, r, s = fi.length;
            for (n = 0; s > n; ++n)
                if (i = fi[n], e = t.document.querySelector("[" + i.replace(":", "\\:") + "jq]")) {
                    r = e.getAttribute(i + "jq");
                    break
                }
            return hi.name_ = r
        },
        di = /:/g,
        fi = ["ng-", "data-ng-", "ng:", "x-ng-"],
        pi = /[A-Z]/g,
        mi = !1,
        gi = 3,
        vi = {
            full: "1.5.7",
            major: 1,
            minor: 5,
            dot: 7,
            codeName: "hexagonal-circumvolution"
        };
    pt.expando = "ng339";
    var yi = pt.cache = {},
        bi = 1;
    pt._data = function (t) {
        return this.cache[t[this.expando]] || {}
    };
    var $i = /([\:\-\_]+(.))/g,
        _i = /^moz([A-Z])/,
        wi = {
            mouseleave: "mouseout",
            mouseenter: "mouseover"
        },
        xi = e("jqLite"),
        Ci = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        ki = /<|&#?\w+;/,
        Di = /<([\w:-]+)/,
        Si = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Ti = {
            option: [1, '<select multiple="multiple">', "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ti.optgroup = Ti.option, Ti.tbody = Ti.tfoot = Ti.colgroup = Ti.caption = Ti.thead, Ti.th = Ti.td;
    var Ai = t.Node.prototype.contains || function (t) {
            return !!(16 & this.compareDocumentPosition(t))
        },
        Ei = pt.prototype = {
            ready: function (e) {
                function n() {
                    i || (i = !0, e())
                }
                var i = !1;
                "complete" === t.document.readyState ? t.setTimeout(n) : (this.on("DOMContentLoaded", n), pt(t).on("load", n))
            },
            toString: function () {
                var t = [];
                return i(this, function (e) {
                    t.push("" + e)
                }), "[" + t.join(", ") + "]"
            },
            eq: function (t) {
                return Vn(t >= 0 ? this[t] : this[this.length + t])
            },
            length: 0,
            push: ti,
            sort: [].sort,
            splice: [].splice
        },
        Mi = {};
    i("multiple selected checked disabled readOnly required open".split(" "), function (t) {
        Mi[Xn(t)] = t
    });
    var Ii = {};
    i("input select option textarea button form details".split(" "), function (t) {
        Ii[t] = !0
    });
    var Pi = {
        ngMinlength: "minlength",
        ngMaxlength: "maxlength",
        ngMin: "min",
        ngMax: "max",
        ngPattern: "pattern"
    };
    i({
        data: $t,
        removeData: yt,
        hasData: function (t) {
            for (var e in yi[t.ng339]) return !0;
            return !1
        },
        cleanData: function (t) {
            for (var e = 0, n = t.length; n > e; e++) yt(t[e])
        }
    }, function (t, e) {
        pt[e] = t
    }), i({
        data: $t,
        inheritedData: Dt,
        scope: function (t) {
            return Vn.data(t, "$scope") || Dt(t.parentNode || t, ["$isolateScope", "$scope"])
        },
        isolateScope: function (t) {
            return Vn.data(t, "$isolateScope") || Vn.data(t, "$isolateScopeNoTemplate")
        },
        controller: kt,
        injector: function (t) {
            return Dt(t, "$injector")
        },
        removeAttr: function (t, e) {
            t.removeAttribute(e)
        },
        hasClass: _t,
        css: function (t, e, n) {
            return e = ct(e), v(n) ? void(t.style[e] = n) : t.style[e]
        },
        attr: function (t, e, n) {
            var i = t.nodeType;
            if (i !== gi && 2 !== i && 8 !== i)
                if (i = Xn(e), Mi[i]) {
                    if (!v(n)) return t[e] || (t.attributes.getNamedItem(e) || d).specified ? i : void 0;
                    n ? (t[e] = !0, t.setAttribute(e, i)) : (t[e] = !1, t.removeAttribute(i))
                } else if (v(n)) t.setAttribute(e, n);
            else if (t.getAttribute) return t = t.getAttribute(e, 2), null === t ? void 0 : t
        },
        prop: function (t, e, n) {
            return v(n) ? void(t[e] = n) : t[e]
        },
        text: function () {
            function t(t, e) {
                if (g(e)) {
                    var n = t.nodeType;
                    return 1 === n || n === gi ? t.textContent : ""
                }
                t.textContent = e
            }
            return t.$dv = "", t
        }(),
        val: function (t, e) {
            if (g(e)) {
                if (t.multiple && "select" === M(t)) {
                    var n = [];
                    return i(t.options, function (t) {
                        t.selected && n.push(t.value || t.text)
                    }), 0 === n.length ? null : n
                }
                return t.value
            }
            t.value = e
        },
        html: function (t, e) {
            return g(e) ? t.innerHTML : (gt(t, !0), void(t.innerHTML = e))
        },
        empty: St
    }, function (t, e) {
        pt.prototype[e] = function (e, n) {
            var i, r, s = this.length;
            if (t !== St && g(2 == t.length && t !== _t && t !== kt ? e : n)) {
                if (y(e)) {
                    for (i = 0; s > i; i++)
                        if (t === $t) t(this[i], e);
                        else
                            for (r in e) t(this[i], r, e[r]);
                    return this
                }
                for (i = t.$dv, s = g(i) ? Math.min(s, 1) : s, r = 0; s > r; r++) {
                    var o = t(this[r], e, n);
                    i = i ? i + o : o
                }
                return i
            }
            for (i = 0; s > i; i++) t(this[i], e, n);
            return this
        }
    }), i({
        removeData: yt,
        on: function (t, e, n, i) {
            if (v(i)) throw xi("onargs");
            if (ht(t)) {
                i = bt(t, !0);
                var r = i.events,
                    s = i.handle;
                s || (s = i.handle = Mt(t, r)), i = 0 <= e.indexOf(" ") ? e.split(" ") : [e];
                for (var o = i.length, a = function (e, i, o) {
                        var a = r[e];
                        a || (a = r[e] = [], a.specialHandlerWrapper = i, "$destroy" === e || o || t.addEventListener(e, s, !1)), a.push(n)
                    }; o--;) e = i[o], wi[e] ? (a(wi[e], Pt), a(e, void 0, !0)) : a(e)
            }
        },
        off: vt,
        one: function (t, e, n) {
            t = Vn(t), t.on(e, function i() {
                t.off(e, n), t.off(e, i)
            }), t.on(e, n)
        },
        replaceWith: function (t, e) {
            var n, r = t.parentNode;
            gt(t), i(new pt(e), function (e) {
                n ? r.insertBefore(e, n.nextSibling) : r.replaceChild(e, t), n = e
            })
        },
        children: function (t) {
            var e = [];
            return i(t.childNodes, function (t) {
                1 === t.nodeType && e.push(t)
            }), e
        },
        contents: function (t) {
            return t.contentDocument || t.childNodes || []
        },
        append: function (t, e) {
            var n = t.nodeType;
            if (1 === n || 11 === n) {
                e = new pt(e);
                for (var n = 0, i = e.length; i > n; n++) t.appendChild(e[n])
            }
        },
        prepend: function (t, e) {
            if (1 === t.nodeType) {
                var n = t.firstChild;
                i(new pt(e), function (e) {
                    t.insertBefore(e, n)
                })
            }
        },
        wrap: function (t, e) {
            ft(t, Vn(e).eq(0).clone()[0])
        },
        remove: Tt,
        detach: function (t) {
            Tt(t, !0)
        },
        after: function (t, e) {
            var n = t,
                i = t.parentNode;
            e = new pt(e);
            for (var r = 0, s = e.length; s > r; r++) {
                var o = e[r];
                i.insertBefore(o, n.nextSibling), n = o
            }
        },
        addClass: xt,
        removeClass: wt,
        toggleClass: function (t, e, n) {
            e && i(e.split(" "), function (e) {
                var i = n;
                g(i) && (i = !_t(t, e)), (i ? xt : wt)(t, e)
            })
        },
        parent: function (t) {
            return (t = t.parentNode) && 11 !== t.nodeType ? t : null
        },
        next: function (t) {
            return t.nextElementSibling
        },
        find: function (t, e) {
            return t.getElementsByTagName ? t.getElementsByTagName(e) : []
        },
        clone: mt,
        triggerHandler: function (t, e, n) {
            var r, s, o = e.type || e,
                a = bt(t);
            (a = (a = a && a.events) && a[o]) && (r = {
                preventDefault: function () {
                    this.defaultPrevented = !0
                },
                isDefaultPrevented: function () {
                    return !0 === this.defaultPrevented
                },
                stopImmediatePropagation: function () {
                    this.immediatePropagationStopped = !0
                },
                isImmediatePropagationStopped: function () {
                    return !0 === this.immediatePropagationStopped
                },
                stopPropagation: d,
                type: o,
                target: t
            }, e.type && (r = l(r, e)), e = lt(a), s = n ? [r].concat(n) : [r], i(e, function (e) {
                r.isImmediatePropagationStopped() || e.apply(t, s)
            }))
        }
    }, function (t, e) {
        pt.prototype[e] = function (e, n, i) {
            for (var r, s = 0, o = this.length; o > s; s++) g(r) ? (r = t(this[s], e, n, i), v(r) && (r = Vn(r))) : Ct(r, t(this[s], e, n, i));
            return v(r) ? r : this
        }, pt.prototype.bind = pt.prototype.on, pt.prototype.unbind = pt.prototype.off
    }), Ht.prototype = {
        put: function (t, e) {
            this[Ot(t, this.nextUid)] = e
        },
        get: function (t) {
            return this[Ot(t, this.nextUid)]
        },
        remove: function (t) {
            var e = this[t = Ot(t, this.nextUid)];
            return delete this[t], e
        }
    };
    var Ni = [function () {
            this.$get = [function () {
                return Ht
            }]
        }],
        Oi = /^([^\(]+?)=>/,
        Hi = /^[^\(]*\(\s*([^\)]*)\)/m,
        ji = /,/,
        Fi = /^\s*(_?)(\S+?)\1\s*$/,
        zi = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
        Ri = e("$injector");
    zt.$$annotate = function (t, e, n) {
        var r;
        if ("function" == typeof t) {
            if (!(r = t.$inject)) {
                if (r = [], t.length) {
                    if (e) throw $(n) && n || (n = t.name || Ft(t)), Ri("strictdi", n);
                    e = jt(t), i(e[1].split(ji), function (t) {
                        t.replace(Fi, function (t, e, n) {
                            r.push(n)
                        })
                    })
                }
                t.$inject = r
            }
        } else oi(t) ? (e = t.length - 1, nt(t[e], "fn"), r = t.slice(0, e)) : nt(t, "fn", !0);
        return r
    };
    var Wi = e("$animate"),
        qi = function () {
            this.$get = d
        },
        Li = function () {
            var t = new Ht,
                e = [];
            this.$get = ["$$AnimateRunner", "$rootScope", function (n, r) {
                function s(t, e, n) {
                    var r = !1;
                    return e && (e = $(e) ? e.split(" ") : oi(e) ? e : [], i(e, function (e) {
                        e && (r = !0, t[e] = n)
                    })), r
                }

                function o() {
                    i(e, function (e) {
                        var n = t.get(e);
                        if (n) {
                            var r = qt(e.attr("class")),
                                s = "",
                                o = "";
                            i(n, function (t, e) {
                                t !== !!r[e] && (t ? s += (s.length ? " " : "") + e : o += (o.length ? " " : "") + e)
                            }), i(e, function (t) {
                                s && xt(t, s), o && wt(t, o)
                            }), t.remove(e)
                        }
                    }), e.length = 0
                }
                return {
                    enabled: d,
                    on: d,
                    off: d,
                    pin: d,
                    push: function (i, a, l, u) {
                        return u && u(), l = l || {}, l.from && i.css(l.from), l.to && i.css(l.to), (l.addClass || l.removeClass) && (a = l.addClass, u = l.removeClass, l = t.get(i) || {}, a = s(l, a, !0), u = s(l, u, !1), (a || u) && (t.put(i, l), e.push(i), 1 === e.length && r.$$postDigest(o))), i = new n, i.complete(), i
                    }
                }
            }]
        },
        Bi = ["$provide", function (t) {
            var e = this;
            this.$$registeredAnimations = Object.create(null), this.register = function (n, i) {
                if (n && "." !== n.charAt(0)) throw Wi("notcsel", n);
                var r = n + "-animation";
                e.$$registeredAnimations[n.substr(1)] = r, t.factory(r, i)
            }, this.classNameFilter = function (t) {
                if (1 === arguments.length && (this.$$classNameFilter = t instanceof RegExp ? t : null) && /(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString())) throw Wi("nongcls", "ng-animate");
                return this.$$classNameFilter
            }, this.$get = ["$$animateQueue", function (t) {
                function e(t, e, n) {
                    if (n) {
                        var i;
                        t: {
                            for (i = 0; i < n.length; i++) {
                                var r = n[i];
                                if (1 === r.nodeType) {
                                    i = r;
                                    break t
                                }
                            }
                            i = void 0
                        }!i || i.parentNode || i.previousElementSibling || (n = null)
                    }
                    n ? n.after(t) : e.prepend(t)
                }
                return {
                    on: t.on,
                    off: t.off,
                    pin: t.pin,
                    enabled: t.enabled,
                    cancel: function (t) {
                        t.end && t.end()
                    },
                    enter: function (n, i, r, s) {
                        return i = i && Vn(i), r = r && Vn(r), i = i || r.parent(), e(n, i, r), t.push(n, "enter", Lt(s))
                    },
                    move: function (n, i, r, s) {
                        return i = i && Vn(i), r = r && Vn(r), i = i || r.parent(), e(n, i, r), t.push(n, "move", Lt(s))
                    },
                    leave: function (e, n) {
                        return t.push(e, "leave", Lt(n), function () {
                            e.remove()
                        })
                    },
                    addClass: function (e, n, i) {
                        return i = Lt(i), i.addClass = Wt(i.addclass, n), t.push(e, "addClass", i)
                    },
                    removeClass: function (e, n, i) {
                        return i = Lt(i), i.removeClass = Wt(i.removeClass, n), t.push(e, "removeClass", i)
                    },
                    setClass: function (e, n, i, r) {
                        return r = Lt(r), r.addClass = Wt(r.addClass, n), r.removeClass = Wt(r.removeClass, i), t.push(e, "setClass", r)
                    },
                    animate: function (e, n, i, r, s) {
                        return s = Lt(s), s.from = s.from ? l(s.from, n) : n, s.to = s.to ? l(s.to, i) : i, s.tempClasses = Wt(s.tempClasses, r || "ng-inline-animate"), t.push(e, "animate", s)
                    }
                }
            }]
        }],
        Vi = function () {
            this.$get = ["$$rAF", function (t) {
                function e(e) {
                    n.push(e), 1 < n.length || t(function () {
                        for (var t = 0; t < n.length; t++) n[t]();
                        n = []
                    })
                }
                var n = [];
                return function () {
                    var t = !1;
                    return e(function () {
                            t = !0
                        }),
                        function (n) {
                            t ? n() : e(n)
                        }
                }
            }]
        },
        Ui = function () {
            this.$get = ["$q", "$sniffer", "$$animateAsyncRun", "$document", "$timeout", function (t, e, n, r, s) {
                function o(t) {
                    this.setHost(t);
                    var e = n();
                    this._doneCallbacks = [], this._tick = function (t) {
                        var n = r[0];
                        n && n.hidden ? s(t, 0, !1) : e(t)
                    }, this._state = 0
                }
                return o.chain = function (t, e) {
                    function n() {
                        i === t.length ? e(!0) : t[i](function (t) {
                            !1 === t ? e(!1) : (i++, n())
                        })
                    }
                    var i = 0;
                    n()
                }, o.all = function (t, e) {
                    function n(n) {
                        s = s && n, ++r === t.length && e(s)
                    }
                    var r = 0,
                        s = !0;
                    i(t, function (t) {
                        t.done(n)
                    })
                }, o.prototype = {
                    setHost: function (t) {
                        this.host = t || {}
                    },
                    done: function (t) {
                        2 === this._state ? t() : this._doneCallbacks.push(t)
                    },
                    progress: d,
                    getPromise: function () {
                        if (!this.promise) {
                            var e = this;
                            this.promise = t(function (t, n) {
                                e.done(function (e) {
                                    !1 === e ? n() : t()
                                })
                            })
                        }
                        return this.promise
                    },
                    then: function (t, e) {
                        return this.getPromise().then(t, e)
                    },
                    "catch": function (t) {
                        return this.getPromise()["catch"](t)
                    },
                    "finally": function (t) {
                        return this.getPromise()["finally"](t)
                    },
                    pause: function () {
                        this.host.pause && this.host.pause()
                    },
                    resume: function () {
                        this.host.resume && this.host.resume()
                    },
                    end: function () {
                        this.host.end && this.host.end(), this._resolve(!0)
                    },
                    cancel: function () {
                        this.host.cancel && this.host.cancel(), this._resolve(!1)
                    },
                    complete: function (t) {
                        var e = this;
                        0 === e._state && (e._state = 1, e._tick(function () {
                            e._resolve(t)
                        }))
                    },
                    _resolve: function (t) {
                        2 !== this._state && (i(this._doneCallbacks, function (e) {
                            e(t)
                        }), this._doneCallbacks.length = 0, this._state = 2)
                    }
                }, o
            }]
        },
        Yi = function () {
            this.$get = ["$$rAF", "$q", "$$AnimateRunner", function (t, e, n) {
                return function (e, i) {
                    function r() {
                        return t(function () {
                            s.addClass && (e.addClass(s.addClass), s.addClass = null), s.removeClass && (e.removeClass(s.removeClass), s.removeClass = null), s.to && (e.css(s.to), s.to = null), o || a.complete(), o = !0
                        }), a
                    }
                    var s = i || {};
                    s.$$prepared || (s = P(s)), s.cleanupStyles && (s.from = s.to = null), s.from && (e.css(s.from), s.from = null);
                    var o, a = new n;
                    return {
                        start: r,
                        end: r
                    }
                }
            }]
        },
        Ki = e("$compile"),
        Gi = new function () {};
    Kt.$inject = ["$provide", "$$sanitizeUriProvider"], Gt.prototype.isFirstChange = function () {
        return this.previousValue === Gi
    };
    var Xi = /^((?:x|data)[\:\-_])/i,
        Ji = e("$controller"),
        Qi = /^(\S+)(\s+as\s+([\w$]+))?$/,
        Zi = function () {
            this.$get = ["$document", function (t) {
                return function (e) {
                    return e ? !e.nodeType && e instanceof Vn && (e = e[0]) : e = t[0].body, e.offsetWidth + 1
                }
            }]
        },
        tr = "application/json",
        er = {
            "Content-Type": tr + ";charset=utf-8"
        },
        nr = /^\[|^\{(?!\{)/,
        ir = {
            "[": /]$/,
            "{": /}$/
        },
        rr = /^\)\]\}',?\n/,
        sr = e("$http"),
        or = function (t) {
            return function () {
                throw sr("legacy", t)
            }
        },
        ar = ri.$interpolateMinErr = e("$interpolate");
    ar.throwNoconcat = function (t) {
        throw ar("noconcat", t)
    }, ar.interr = function (t, e) {
        return ar("interr", t, e.toString())
    };
    var lr = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
        ur = {
            http: 80,
            https: 443,
            ftp: 21
        },
        cr = e("$location"),
        hr = {
            $$absUrl: "",
            $$html5: !1,
            $$replace: !1,
            absUrl: ke("$$absUrl"),
            url: function (t) {
                if (g(t)) return this.$$url;
                var e = lr.exec(t);
                return (e[1] || "" === t) && this.path(decodeURIComponent(e[1])), (e[2] || e[1] || "" === t) && this.search(e[3] || ""), this.hash(e[5] || ""), this
            },
            protocol: ke("$$protocol"),
            host: ke("$$host"),
            port: ke("$$port"),
            path: De("$$path", function (t) {
                return t = null !== t ? t.toString() : "", "/" == t.charAt(0) ? t : "/" + t
            }),
            search: function (t, e) {
                switch (arguments.length) {
                case 0:
                    return this.$$search;
                case 1:
                    if ($(t) || _(t)) t = t.toString(), this.$$search = B(t);
                    else {
                        if (!y(t)) throw cr("isrcharg");
                        t = P(t, {}), i(t, function (e, n) {
                            null == e && delete t[n]
                        }), this.$$search = t
                    }
                    break;
                default:
                    g(e) || null === e ? delete this.$$search[t] : this.$$search[t] = e
                }
                return this.$$compose(), this
            },
            hash: De("$$hash", function (t) {
                return null !== t ? t.toString() : ""
            }),
            replace: function () {
                return this.$$replace = !0, this
            }
        };
    i([Ce, xe, we], function (t) {
        t.prototype = Object.create(hr), t.prototype.state = function (e) {
            if (!arguments.length) return this.$$state;
            if (t !== we || !this.$$html5) throw cr("nostate");
            return this.$$state = g(e) ? null : e, this
        }
    });
    var dr = e("$parse"),
        fr = Function.prototype.call,
        pr = Function.prototype.apply,
        mr = Function.prototype.bind,
        gr = ot();
    i("+ - * / % === !== == != < > <= >= && || ! = |".split(" "), function (t) {
        gr[t] = !0
    });
    var vr = {
            n: "\n",
            f: "\f",
            r: "\r",
            t: "	",
            v: "\x0B",
            "'": "'",
            '"': '"'
        },
        yr = function (t) {
            this.options = t
        };
    yr.prototype = {
        constructor: yr,
        lex: function (t) {
            for (this.text = t, this.index = 0, this.tokens = []; this.index < this.text.length;)
                if (t = this.text.charAt(this.index), '"' === t || "'" === t) this.readString(t);
                else if (this.isNumber(t) || "." === t && this.isNumber(this.peek())) this.readNumber();
            else if (this.isIdentifierStart(this.peekMultichar())) this.readIdent();
            else if (this.is(t, "(){}[].,;:?")) this.tokens.push({
                index: this.index,
                text: t
            }), this.index++;
            else if (this.isWhitespace(t)) this.index++;
            else {
                var e = t + this.peek(),
                    n = e + this.peek(2),
                    i = gr[e],
                    r = gr[n];
                gr[t] || i || r ? (t = r ? n : i ? e : t, this.tokens.push({
                    index: this.index,
                    text: t,
                    operator: !0
                }), this.index += t.length) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            return this.tokens
        },
        is: function (t, e) {
            return -1 !== e.indexOf(t)
        },
        peek: function (t) {
            return t = t || 1, this.index + t < this.text.length ? this.text.charAt(this.index + t) : !1
        },
        isNumber: function (t) {
            return t >= "0" && "9" >= t && "string" == typeof t
        },
        isWhitespace: function (t) {
            return " " === t || "\r" === t || "	" === t || "\n" === t || "\x0B" === t || " " === t
        },
        isIdentifierStart: function (t) {
            return this.options.isIdentifierStart ? this.options.isIdentifierStart(t, this.codePointAt(t)) : this.isValidIdentifierStart(t)
        },
        isValidIdentifierStart: function (t) {
            return t >= "a" && "z" >= t || t >= "A" && "Z" >= t || "_" === t || "$" === t
        },
        isIdentifierContinue: function (t) {
            return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(t, this.codePointAt(t)) : this.isValidIdentifierContinue(t)
        },
        isValidIdentifierContinue: function (t, e) {
            return this.isValidIdentifierStart(t, e) || this.isNumber(t)
        },
        codePointAt: function (t) {
            return 1 === t.length ? t.charCodeAt(0) : (t.charCodeAt(0) << 10) + t.charCodeAt(1) - 56613888
        },
        peekMultichar: function () {
            var t = this.text.charAt(this.index),
                e = this.peek();
            if (!e) return t;
            var n = t.charCodeAt(0),
                i = e.charCodeAt(0);
            return n >= 55296 && 56319 >= n && i >= 56320 && 57343 >= i ? t + e : t
        },
        isExpOperator: function (t) {
            return "-" === t || "+" === t || this.isNumber(t)
        },
        throwError: function (t, e, n) {
            throw n = n || this.index, e = v(e) ? "s " + e + "-" + this.index + " [" + this.text.substring(e, n) + "]" : " " + n, dr("lexerr", t, e, this.text)
        },
        readNumber: function () {
            for (var t = "", e = this.index; this.index < this.text.length;) {
                var n = Xn(this.text.charAt(this.index));
                if ("." == n || this.isNumber(n)) t += n;
                else {
                    var i = this.peek();
                    if ("e" == n && this.isExpOperator(i)) t += n;
                    else if (this.isExpOperator(n) && i && this.isNumber(i) && "e" == t.charAt(t.length - 1)) t += n;
                    else {
                        if (!this.isExpOperator(n) || i && this.isNumber(i) || "e" != t.charAt(t.length - 1)) break;
                        this.throwError("Invalid exponent")
                    }
                }
                this.index++
            }
            this.tokens.push({
                index: e,
                text: t,
                constant: !0,
                value: Number(t)
            })
        },
        readIdent: function () {
            var t = this.index;
            for (this.index += this.peekMultichar().length; this.index < this.text.length;) {
                var e = this.peekMultichar();
                if (!this.isIdentifierContinue(e)) break;
                this.index += e.length
            }
            this.tokens.push({
                index: t,
                text: this.text.slice(t, this.index),
                identifier: !0
            })
        },
        readString: function (t) {
            var e = this.index;
            this.index++;
            for (var n = "", i = t, r = !1; this.index < this.text.length;) {
                var s = this.text.charAt(this.index),
                    i = i + s;
                if (r) "u" === s ? (r = this.text.substring(this.index + 1, this.index + 5), r.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + r + "]"), this.index += 4, n += String.fromCharCode(parseInt(r, 16))) : n += vr[s] || s, r = !1;
                else if ("\\" === s) r = !0;
                else {
                    if (s === t) return this.index++, void this.tokens.push({
                        index: e,
                        text: i,
                        constant: !0,
                        value: n
                    });
                    n += s
                }
                this.index++
            }
            this.throwError("Unterminated quote", e)
        }
    };
    var br = function (t, e) {
        this.lexer = t, this.options = e
    };
    br.Program = "Program", br.ExpressionStatement = "ExpressionStatement", br.AssignmentExpression = "AssignmentExpression", br.ConditionalExpression = "ConditionalExpression", br.LogicalExpression = "LogicalExpression", br.BinaryExpression = "BinaryExpression", br.UnaryExpression = "UnaryExpression", br.CallExpression = "CallExpression", br.MemberExpression = "MemberExpression", br.Identifier = "Identifier", br.Literal = "Literal", br.ArrayExpression = "ArrayExpression", br.Property = "Property", br.ObjectExpression = "ObjectExpression", br.ThisExpression = "ThisExpression", br.LocalsExpression = "LocalsExpression", br.NGValueParameter = "NGValueParameter", br.prototype = {
        ast: function (t) {
            return this.text = t, this.tokens = this.lexer.lex(t), t = this.program(), 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), t
        },
        program: function () {
            for (var t = [];;)
                if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && t.push(this.expressionStatement()), !this.expect(";")) return {
                    type: br.Program,
                    body: t
                }
        },
        expressionStatement: function () {
            return {
                type: br.ExpressionStatement,
                expression: this.filterChain()
            }
        },
        filterChain: function () {
            for (var t = this.expression(); this.expect("|");) t = this.filter(t);
            return t
        },
        expression: function () {
            return this.assignment()
        },
        assignment: function () {
            var t = this.ternary();
            return this.expect("=") && (t = {
                type: br.AssignmentExpression,
                left: t,
                right: this.assignment(),
                operator: "="
            }), t
        },
        ternary: function () {
            var t, e, n = this.logicalOR();
            return this.expect("?") && (t = this.expression(), this.consume(":")) ? (e = this.expression(), {
                type: br.ConditionalExpression,
                test: n,
                alternate: t,
                consequent: e
            }) : n
        },
        logicalOR: function () {
            for (var t = this.logicalAND(); this.expect("||");) t = {
                type: br.LogicalExpression,
                operator: "||",
                left: t,
                right: this.logicalAND()
            };
            return t
        },
        logicalAND: function () {
            for (var t = this.equality(); this.expect("&&");) t = {
                type: br.LogicalExpression,
                operator: "&&",
                left: t,
                right: this.equality()
            };
            return t
        },
        equality: function () {
            for (var t, e = this.relational(); t = this.expect("==", "!=", "===", "!==");) e = {
                type: br.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.relational()
            };
            return e
        },
        relational: function () {
            for (var t, e = this.additive(); t = this.expect("<", ">", "<=", ">=");) e = {
                type: br.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.additive()
            };
            return e
        },
        additive: function () {
            for (var t, e = this.multiplicative(); t = this.expect("+", "-");) e = {
                type: br.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.multiplicative()
            };
            return e
        },
        multiplicative: function () {
            for (var t, e = this.unary(); t = this.expect("*", "/", "%");) e = {
                type: br.BinaryExpression,
                operator: t.text,
                left: e,
                right: this.unary()
            };
            return e
        },
        unary: function () {
            var t;
            return (t = this.expect("+", "-", "!")) ? {
                type: br.UnaryExpression,
                operator: t.text,
                prefix: !0,
                argument: this.unary()
            } : this.primary()
        },
        primary: function () {
            var t;
            this.expect("(") ? (t = this.filterChain(), this.consume(")")) : this.expect("[") ? t = this.arrayDeclaration() : this.expect("{") ? t = this.object() : this.selfReferential.hasOwnProperty(this.peek().text) ? t = P(this.selfReferential[this.consume().text]) : this.options.literals.hasOwnProperty(this.peek().text) ? t = {
                type: br.Literal,
                value: this.options.literals[this.consume().text]
            } : this.peek().identifier ? t = this.identifier() : this.peek().constant ? t = this.constant() : this.throwError("not a primary expression", this.peek());
            for (var e; e = this.expect("(", "[", ".");) "(" === e.text ? (t = {
                type: br.CallExpression,
                callee: t,
                arguments: this.parseArguments()
            }, this.consume(")")) : "[" === e.text ? (t = {
                type: br.MemberExpression,
                object: t,
                property: this.expression(),
                computed: !0
            }, this.consume("]")) : "." === e.text ? t = {
                type: br.MemberExpression,
                object: t,
                property: this.identifier(),
                computed: !1
            } : this.throwError("IMPOSSIBLE");
            return t
        },
        filter: function (t) {
            t = [t];
            for (var e = {
                    type: br.CallExpression,
                    callee: this.identifier(),
                    arguments: t,
                    filter: !0
                }; this.expect(":");) t.push(this.expression());
            return e
        },
        parseArguments: function () {
            var t = [];
            if (")" !== this.peekToken().text)
                do t.push(this.filterChain()); while (this.expect(","));
            return t
        },
        identifier: function () {
            var t = this.consume();
            return t.identifier || this.throwError("is not a valid identifier", t), {
                type: br.Identifier,
                name: t.text
            }
        },
        constant: function () {
            return {
                type: br.Literal,
                value: this.consume().value
            }
        },
        arrayDeclaration: function () {
            var t = [];
            if ("]" !== this.peekToken().text)
                do {
                    if (this.peek("]")) break;
                    t.push(this.expression())
                } while (this.expect(","));
            return this.consume("]"), {
                type: br.ArrayExpression,
                elements: t
            }
        },
        object: function () {
            var t, e = [];
            if ("}" !== this.peekToken().text)
                do {
                    if (this.peek("}")) break;
                    t = {
                        type: br.Property,
                        kind: "init"
                    }, this.peek().constant ? (t.key = this.constant(), t.computed = !1, this.consume(":"), t.value = this.expression()) : this.peek().identifier ? (t.key = this.identifier(), t.computed = !1, this.peek(":") ? (this.consume(":"), t.value = this.expression()) : t.value = t.key) : this.peek("[") ? (this.consume("["), t.key = this.expression(), this.consume("]"), t.computed = !0, this.consume(":"), t.value = this.expression()) : this.throwError("invalid key", this.peek()), e.push(t)
                } while (this.expect(","));
            return this.consume("}"), {
                type: br.ObjectExpression,
                properties: e
            }
        },
        throwError: function (t, e) {
            throw dr("syntax", e.text, t, e.index + 1, this.text, this.text.substring(e.index))
        },
        consume: function (t) {
            if (0 === this.tokens.length) throw dr("ueoe", this.text);
            var e = this.expect(t);
            return e || this.throwError("is unexpected, expecting [" + t + "]", this.peek()), e
        },
        peekToken: function () {
            if (0 === this.tokens.length) throw dr("ueoe", this.text);
            return this.tokens[0]
        },
        peek: function (t, e, n, i) {
            return this.peekAhead(0, t, e, n, i)
        },
        peekAhead: function (t, e, n, i, r) {
            if (this.tokens.length > t) {
                t = this.tokens[t];
                var s = t.text;
                if (s === e || s === n || s === i || s === r || !(e || n || i || r)) return t
            }
            return !1
        },
        expect: function (t, e, n, i) {
            return (t = this.peek(t, e, n, i)) ? (this.tokens.shift(), t) : !1
        },
        selfReferential: {
            "this": {
                type: br.ThisExpression
            },
            $locals: {
                type: br.LocalsExpression
            }
        }
    }, We.prototype = {
        compile: function (t, e) {
            var n = this,
                r = this.astBuilder.ast(t);
            this.state = {
                nextId: 0,
                filters: {},
                expensiveChecks: e,
                fn: {
                    vars: [],
                    body: [],
                    own: {}
                },
                assign: {
                    vars: [],
                    body: [],
                    own: {}
                },
                inputs: []
            }, He(r, n.$filter);
            var s, o = "";
            return this.stage = "assign", (s = ze(r)) && (this.state.computing = "assign", o = this.nextId(), this.recurse(s, o), this.return_(o), o = "fn.assign=" + this.generateFunction("assign", "s,v,l")), s = je(r.body), n.stage = "inputs", i(s, function (t, e) {
                var i = "fn" + e;
                n.state[i] = {
                    vars: [],
                    body: [],
                    own: {}
                }, n.state.computing = i;
                var r = n.nextId();
                n.recurse(t, r), n.return_(r), n.state.inputs.push(i), t.watchId = e
            }), this.state.computing = "fn", this.stage = "main", this.recurse(r), o = '"' + this.USE + " " + this.STRICT + '";\n' + this.filterPrefix() + "var fn=" + this.generateFunction("fn", "s,l,a,i") + o + this.watchFns() + "return fn;", o = new Function("$filter", "ensureSafeMemberName", "ensureSafeObject", "ensureSafeFunction", "getStringValue", "ensureSafeAssignContext", "ifDefined", "plus", "text", o)(this.$filter, Ae, Me, Ie, Ee, Pe, Ne, Oe, t), this.state = this.stage = void 0, o.literal = Re(r), o.constant = r.constant, o
        },
        USE: "use",
        STRICT: "strict",
        watchFns: function () {
            var t = [],
                e = this.state.inputs,
                n = this;
            return i(e, function (e) {
                t.push("var " + e + "=" + n.generateFunction(e, "s"))
            }), e.length && t.push("fn.inputs=[" + e.join(",") + "];"), t.join("")
        },
        generateFunction: function (t, e) {
            return "function(" + e + "){" + this.varsPrefix(t) + this.body(t) + "};"
        },
        filterPrefix: function () {
            var t = [],
                e = this;
            return i(this.state.filters, function (n, i) {
                t.push(n + "=$filter(" + e.escape(i) + ")")
            }), t.length ? "var " + t.join(",") + ";" : ""
        },
        varsPrefix: function (t) {
            return this.state[t].vars.length ? "var " + this.state[t].vars.join(",") + ";" : ""
        },
        body: function (t) {
            return this.state[t].body.join("")
        },
        recurse: function (t, e, n, r, s, o) {
            var a, l, u, c, h, f = this;
            if (r = r || d, !o && v(t.watchId)) e = e || this.nextId(), this.if_("i", this.lazyAssign(e, this.computedMember("i", t.watchId)), this.lazyRecurse(t, e, n, r, s, !0));
            else switch (t.type) {
            case br.Program:
                i(t.body, function (e, n) {
                    f.recurse(e.expression, void 0, void 0, function (t) {
                        l = t
                    }), n !== t.body.length - 1 ? f.current().body.push(l, ";") : f.return_(l)
                });
                break;
            case br.Literal:
                c = this.escape(t.value), this.assign(e, c), r(c);
                break;
            case br.UnaryExpression:
                this.recurse(t.argument, void 0, void 0, function (t) {
                    l = t
                }), c = t.operator + "(" + this.ifDefined(l, 0) + ")", this.assign(e, c), r(c);
                break;
            case br.BinaryExpression:
                this.recurse(t.left, void 0, void 0, function (t) {
                    a = t
                }), this.recurse(t.right, void 0, void 0, function (t) {
                    l = t
                }), c = "+" === t.operator ? this.plus(a, l) : "-" === t.operator ? this.ifDefined(a, 0) + t.operator + this.ifDefined(l, 0) : "(" + a + ")" + t.operator + "(" + l + ")", this.assign(e, c), r(c);
                break;
            case br.LogicalExpression:
                e = e || this.nextId(), f.recurse(t.left, e), f.if_("&&" === t.operator ? e : f.not(e), f.lazyRecurse(t.right, e)), r(e);
                break;
            case br.ConditionalExpression:
                e = e || this.nextId(), f.recurse(t.test, e), f.if_(e, f.lazyRecurse(t.alternate, e), f.lazyRecurse(t.consequent, e)), r(e);
                break;
            case br.Identifier:
                e = e || this.nextId(), n && (n.context = "inputs" === f.stage ? "s" : this.assign(this.nextId(), this.getHasOwnProperty("l", t.name) + "?l:s"), n.computed = !1, n.name = t.name), Ae(t.name), f.if_("inputs" === f.stage || f.not(f.getHasOwnProperty("l", t.name)), function () {
                    f.if_("inputs" === f.stage || "s", function () {
                        s && 1 !== s && f.if_(f.not(f.nonComputedMember("s", t.name)), f.lazyAssign(f.nonComputedMember("s", t.name), "{}")), f.assign(e, f.nonComputedMember("s", t.name))
                    })
                }, e && f.lazyAssign(e, f.nonComputedMember("l", t.name))), (f.state.expensiveChecks || Le(t.name)) && f.addEnsureSafeObject(e), r(e);
                break;
            case br.MemberExpression:
                a = n && (n.context = this.nextId()) || this.nextId(), e = e || this.nextId(), f.recurse(t.object, a, void 0, function () {
                    f.if_(f.notNull(a), function () {
                        s && 1 !== s && f.addEnsureSafeAssignContext(a), t.computed ? (l = f.nextId(), f.recurse(t.property, l), f.getStringValue(l), f.addEnsureSafeMemberName(l), s && 1 !== s && f.if_(f.not(f.computedMember(a, l)), f.lazyAssign(f.computedMember(a, l), "{}")), c = f.ensureSafeObject(f.computedMember(a, l)), f.assign(e, c), n && (n.computed = !0, n.name = l)) : (Ae(t.property.name), s && 1 !== s && f.if_(f.not(f.nonComputedMember(a, t.property.name)), f.lazyAssign(f.nonComputedMember(a, t.property.name), "{}")), c = f.nonComputedMember(a, t.property.name), (f.state.expensiveChecks || Le(t.property.name)) && (c = f.ensureSafeObject(c)), f.assign(e, c), n && (n.computed = !1, n.name = t.property.name))
                    }, function () {
                        f.assign(e, "undefined")
                    }), r(e)
                }, !!s);
                break;
            case br.CallExpression:
                e = e || this.nextId(), t.filter ? (l = f.filter(t.callee.name), u = [], i(t.arguments, function (t) {
                    var e = f.nextId();
                    f.recurse(t, e), u.push(e)
                }), c = l + "(" + u.join(",") + ")", f.assign(e, c), r(e)) : (l = f.nextId(), a = {}, u = [], f.recurse(t.callee, l, a, function () {
                    f.if_(f.notNull(l), function () {
                        f.addEnsureSafeFunction(l), i(t.arguments, function (t) {
                            f.recurse(t, f.nextId(), void 0, function (t) {
                                u.push(f.ensureSafeObject(t))
                            })
                        }), a.name ? (f.state.expensiveChecks || f.addEnsureSafeObject(a.context), c = f.member(a.context, a.name, a.computed) + "(" + u.join(",") + ")") : c = l + "(" + u.join(",") + ")", c = f.ensureSafeObject(c), f.assign(e, c)
                    }, function () {
                        f.assign(e, "undefined")
                    }), r(e)
                }));
                break;
            case br.AssignmentExpression:
                if (l = this.nextId(), a = {}, !Fe(t.left)) throw dr("lval");
                this.recurse(t.left, void 0, a, function () {
                    f.if_(f.notNull(a.context), function () {
                        f.recurse(t.right, l), f.addEnsureSafeObject(f.member(a.context, a.name, a.computed)), f.addEnsureSafeAssignContext(a.context), c = f.member(a.context, a.name, a.computed) + t.operator + l, f.assign(e, c), r(e || c)
                    })
                }, 1);
                break;
            case br.ArrayExpression:
                u = [], i(t.elements, function (t) {
                    f.recurse(t, f.nextId(), void 0, function (t) {
                        u.push(t)
                    })
                }), c = "[" + u.join(",") + "]", this.assign(e, c), r(c);
                break;
            case br.ObjectExpression:
                u = [], h = !1, i(t.properties, function (t) {
                    t.computed && (h = !0)
                }), h ? (e = e || this.nextId(), this.assign(e, "{}"), i(t.properties, function (t) {
                    t.computed ? (a = f.nextId(), f.recurse(t.key, a)) : a = t.key.type === br.Identifier ? t.key.name : "" + t.key.value, l = f.nextId(), f.recurse(t.value, l), f.assign(f.member(e, a, t.computed), l)
                })) : (i(t.properties, function (e) {
                    f.recurse(e.value, t.constant ? void 0 : f.nextId(), void 0, function (t) {
                        u.push(f.escape(e.key.type === br.Identifier ? e.key.name : "" + e.key.value) + ":" + t)
                    })
                }), c = "{" + u.join(",") + "}", this.assign(e, c)), r(e || c);
                break;
            case br.ThisExpression:
                this.assign(e, "s"), r("s");
                break;
            case br.LocalsExpression:
                this.assign(e, "l"), r("l");
                break;
            case br.NGValueParameter:
                this.assign(e, "v"), r("v")
            }
        },
        getHasOwnProperty: function (t, e) {
            var n = t + "." + e,
                i = this.current().own;
            return i.hasOwnProperty(n) || (i[n] = this.nextId(!1, t + "&&(" + this.escape(e) + " in " + t + ")")), i[n]
        },
        assign: function (t, e) {
            return t ? (this.current().body.push(t, "=", e, ";"), t) : void 0
        },
        filter: function (t) {
            return this.state.filters.hasOwnProperty(t) || (this.state.filters[t] = this.nextId(!0)), this.state.filters[t]
        },
        ifDefined: function (t, e) {
            return "ifDefined(" + t + "," + this.escape(e) + ")"
        },
        plus: function (t, e) {
            return "plus(" + t + "," + e + ")"
        },
        return_: function (t) {
            this.current().body.push("return ", t, ";")
        },
        if_: function (t, e, n) {
            if (!0 === t) e();
            else {
                var i = this.current().body;
                i.push("if(", t, "){"), e(), i.push("}"), n && (i.push("else{"), n(), i.push("}"))
            }
        },
        not: function (t) {
            return "!(" + t + ")"
        },
        notNull: function (t) {
            return t + "!=null"
        },
        nonComputedMember: function (t, e) {
            var n = /[^$_a-zA-Z0-9]/g;
            return /[$_a-zA-Z][$_a-zA-Z0-9]*/.test(e) ? t + "." + e : t + '["' + e.replace(n, this.stringEscapeFn) + '"]'
        },
        computedMember: function (t, e) {
            return t + "[" + e + "]"
        },
        member: function (t, e, n) {
            return n ? this.computedMember(t, e) : this.nonComputedMember(t, e)
        },
        addEnsureSafeObject: function (t) {
            this.current().body.push(this.ensureSafeObject(t), ";")
        },
        addEnsureSafeMemberName: function (t) {
            this.current().body.push(this.ensureSafeMemberName(t), ";")
        },
        addEnsureSafeFunction: function (t) {
            this.current().body.push(this.ensureSafeFunction(t), ";")
        },
        addEnsureSafeAssignContext: function (t) {
            this.current().body.push(this.ensureSafeAssignContext(t), ";");
        },
        ensureSafeObject: function (t) {
            return "ensureSafeObject(" + t + ",text)"
        },
        ensureSafeMemberName: function (t) {
            return "ensureSafeMemberName(" + t + ",text)"
        },
        ensureSafeFunction: function (t) {
            return "ensureSafeFunction(" + t + ",text)"
        },
        getStringValue: function (t) {
            this.assign(t, "getStringValue(" + t + ")")
        },
        ensureSafeAssignContext: function (t) {
            return "ensureSafeAssignContext(" + t + ",text)"
        },
        lazyRecurse: function (t, e, n, i, r, s) {
            var o = this;
            return function () {
                o.recurse(t, e, n, i, r, s)
            }
        },
        lazyAssign: function (t, e) {
            var n = this;
            return function () {
                n.assign(t, e)
            }
        },
        stringEscapeRegex: /[^ a-zA-Z0-9]/g,
        stringEscapeFn: function (t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        },
        escape: function (t) {
            if ($(t)) return "'" + t.replace(this.stringEscapeRegex, this.stringEscapeFn) + "'";
            if (_(t)) return t.toString();
            if (!0 === t) return "true";
            if (!1 === t) return "false";
            if (null === t) return "null";
            if ("undefined" == typeof t) return "undefined";
            throw dr("esc")
        },
        nextId: function (t, e) {
            var n = "v" + this.state.nextId++;
            return t || this.current().vars.push(n + (e ? "=" + e : "")), n
        },
        current: function () {
            return this.state[this.state.computing]
        }
    }, qe.prototype = {
        compile: function (t, e) {
            var n = this,
                r = this.astBuilder.ast(t);
            this.expression = t, this.expensiveChecks = e, He(r, n.$filter);
            var s, o;
            (s = ze(r)) && (o = this.recurse(s)), s = je(r.body);
            var a;
            s && (a = [], i(s, function (t, e) {
                var i = n.recurse(t);
                t.input = i, a.push(i), t.watchId = e
            }));
            var l = [];
            return i(r.body, function (t) {
                l.push(n.recurse(t.expression))
            }), s = 0 === r.body.length ? d : 1 === r.body.length ? l[0] : function (t, e) {
                var n;
                return i(l, function (i) {
                    n = i(t, e)
                }), n
            }, o && (s.assign = function (t, e, n) {
                return o(t, n, e)
            }), a && (s.inputs = a), s.literal = Re(r), s.constant = r.constant, s
        },
        recurse: function (t, e, n) {
            var r, s, o, a = this;
            if (t.input) return this.inputs(t.input, t.watchId);
            switch (t.type) {
            case br.Literal:
                return this.value(t.value, e);
            case br.UnaryExpression:
                return s = this.recurse(t.argument), this["unary" + t.operator](s, e);
            case br.BinaryExpression:
                return r = this.recurse(t.left), s = this.recurse(t.right), this["binary" + t.operator](r, s, e);
            case br.LogicalExpression:
                return r = this.recurse(t.left), s = this.recurse(t.right), this["binary" + t.operator](r, s, e);
            case br.ConditionalExpression:
                return this["ternary?:"](this.recurse(t.test), this.recurse(t.alternate), this.recurse(t.consequent), e);
            case br.Identifier:
                return Ae(t.name, a.expression), a.identifier(t.name, a.expensiveChecks || Le(t.name), e, n, a.expression);
            case br.MemberExpression:
                return r = this.recurse(t.object, !1, !!n), t.computed || (Ae(t.property.name, a.expression), s = t.property.name), t.computed && (s = this.recurse(t.property)), t.computed ? this.computedMember(r, s, e, n, a.expression) : this.nonComputedMember(r, s, a.expensiveChecks, e, n, a.expression);
            case br.CallExpression:
                return o = [], i(t.arguments, function (t) {
                    o.push(a.recurse(t))
                }), t.filter && (s = this.$filter(t.callee.name)), t.filter || (s = this.recurse(t.callee, !0)), t.filter ? function (t, n, i, r) {
                    for (var a = [], l = 0; l < o.length; ++l) a.push(o[l](t, n, i, r));
                    return t = s.apply(void 0, a, r), e ? {
                        context: void 0,
                        name: void 0,
                        value: t
                    } : t
                } : function (t, n, i, r) {
                    var l, u = s(t, n, i, r);
                    if (null != u.value) {
                        Me(u.context, a.expression), Ie(u.value, a.expression), l = [];
                        for (var c = 0; c < o.length; ++c) l.push(Me(o[c](t, n, i, r), a.expression));
                        l = Me(u.value.apply(u.context, l), a.expression)
                    }
                    return e ? {
                        value: l
                    } : l
                };
            case br.AssignmentExpression:
                return r = this.recurse(t.left, !0, 1), s = this.recurse(t.right),
                    function (t, n, i, o) {
                        var l = r(t, n, i, o);
                        return t = s(t, n, i, o), Me(l.value, a.expression), Pe(l.context), l.context[l.name] = t, e ? {
                            value: t
                        } : t
                    };
            case br.ArrayExpression:
                return o = [], i(t.elements, function (t) {
                        o.push(a.recurse(t))
                    }),
                    function (t, n, i, r) {
                        for (var s = [], a = 0; a < o.length; ++a) s.push(o[a](t, n, i, r));
                        return e ? {
                            value: s
                        } : s
                    };
            case br.ObjectExpression:
                return o = [], i(t.properties, function (t) {
                        t.computed ? o.push({
                            key: a.recurse(t.key),
                            computed: !0,
                            value: a.recurse(t.value)
                        }) : o.push({
                            key: t.key.type === br.Identifier ? t.key.name : "" + t.key.value,
                            computed: !1,
                            value: a.recurse(t.value)
                        })
                    }),
                    function (t, n, i, r) {
                        for (var s = {}, a = 0; a < o.length; ++a) o[a].computed ? s[o[a].key(t, n, i, r)] = o[a].value(t, n, i, r) : s[o[a].key] = o[a].value(t, n, i, r);
                        return e ? {
                            value: s
                        } : s
                    };
            case br.ThisExpression:
                return function (t) {
                    return e ? {
                        value: t
                    } : t
                };
            case br.LocalsExpression:
                return function (t, n) {
                    return e ? {
                        value: n
                    } : n
                };
            case br.NGValueParameter:
                return function (t, n, i) {
                    return e ? {
                        value: i
                    } : i
                }
            }
        },
        "unary+": function (t, e) {
            return function (n, i, r, s) {
                return n = t(n, i, r, s), n = v(n) ? +n : 0, e ? {
                    value: n
                } : n
            }
        },
        "unary-": function (t, e) {
            return function (n, i, r, s) {
                return n = t(n, i, r, s), n = v(n) ? -n : 0, e ? {
                    value: n
                } : n
            }
        },
        "unary!": function (t, e) {
            return function (n, i, r, s) {
                return n = !t(n, i, r, s), e ? {
                    value: n
                } : n
            }
        },
        "binary+": function (t, e, n) {
            return function (i, r, s, o) {
                var a = t(i, r, s, o);
                return i = e(i, r, s, o), a = Oe(a, i), n ? {
                    value: a
                } : a
            }
        },
        "binary-": function (t, e, n) {
            return function (i, r, s, o) {
                var a = t(i, r, s, o);
                return i = e(i, r, s, o), a = (v(a) ? a : 0) - (v(i) ? i : 0), n ? {
                    value: a
                } : a
            }
        },
        "binary*": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) * e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary/": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) / e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary%": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) % e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary===": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) === e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary!==": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) !== e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary==": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) == e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary!=": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) != e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary<": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) < e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary>": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) > e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary<=": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) <= e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary>=": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) >= e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary&&": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) && e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "binary||": function (t, e, n) {
            return function (i, r, s, o) {
                return i = t(i, r, s, o) || e(i, r, s, o), n ? {
                    value: i
                } : i
            }
        },
        "ternary?:": function (t, e, n, i) {
            return function (r, s, o, a) {
                return r = t(r, s, o, a) ? e(r, s, o, a) : n(r, s, o, a), i ? {
                    value: r
                } : r
            }
        },
        value: function (t, e) {
            return function () {
                return e ? {
                    context: void 0,
                    name: void 0,
                    value: t
                } : t
            }
        },
        identifier: function (t, e, n, i, r) {
            return function (s, o, a, l) {
                return s = o && t in o ? o : s, i && 1 !== i && s && !s[t] && (s[t] = {}), o = s ? s[t] : void 0, e && Me(o, r), n ? {
                    context: s,
                    name: t,
                    value: o
                } : o
            }
        },
        computedMember: function (t, e, n, i, r) {
            return function (s, o, a, l) {
                var u, c, h = t(s, o, a, l);
                return null != h && (u = e(s, o, a, l), u += "", Ae(u, r), i && 1 !== i && (Pe(h), h && !h[u] && (h[u] = {})), c = h[u], Me(c, r)), n ? {
                    context: h,
                    name: u,
                    value: c
                } : c
            }
        },
        nonComputedMember: function (t, e, n, i, r, s) {
            return function (o, a, l, u) {
                return o = t(o, a, l, u), r && 1 !== r && (Pe(o), o && !o[e] && (o[e] = {})), a = null != o ? o[e] : void 0, (n || Le(e)) && Me(a, s), i ? {
                    context: o,
                    name: e,
                    value: a
                } : a
            }
        },
        inputs: function (t, e) {
            return function (n, i, r, s) {
                return s ? s[e] : t(n, i, r)
            }
        }
    };
    var $r = function (t, e, n) {
        this.lexer = t, this.$filter = e, this.options = n, this.ast = new br(t, n), this.astCompiler = n.csp ? new qe(this.ast, e) : new We(this.ast, e)
    };
    $r.prototype = {
        constructor: $r,
        parse: function (t) {
            return this.astCompiler.compile(t, this.options.expensiveChecks)
        }
    };
    var _r = Object.prototype.valueOf,
        wr = e("$sce"),
        xr = {
            HTML: "html",
            CSS: "css",
            URL: "url",
            RESOURCE_URL: "resourceUrl",
            JS: "js"
        },
        Cr = e("$compile"),
        kr = t.document.createElement("a"),
        Dr = an(t.location.href);
    cn.$inject = ["$document"], dn.$inject = ["$provide"];
    var Sr = 22,
        Tr = ".",
        Ar = "0";
    vn.$inject = ["$locale"], yn.$inject = ["$locale"];
    var Er = {
            yyyy: xn("FullYear", 4, 0, !1, !0),
            yy: xn("FullYear", 2, 0, !0, !0),
            y: xn("FullYear", 1, 0, !1, !0),
            MMMM: Cn("Month"),
            MMM: Cn("Month", !0),
            MM: xn("Month", 2, 1),
            M: xn("Month", 1, 1),
            LLLL: Cn("Month", !1, !0),
            dd: xn("Date", 2),
            d: xn("Date", 1),
            HH: xn("Hours", 2),
            H: xn("Hours", 1),
            hh: xn("Hours", 2, -12),
            h: xn("Hours", 1, -12),
            mm: xn("Minutes", 2),
            m: xn("Minutes", 1),
            ss: xn("Seconds", 2),
            s: xn("Seconds", 1),
            sss: xn("Milliseconds", 3),
            EEEE: Cn("Day"),
            EEE: Cn("Day", !0),
            a: function (t, e) {
                return 12 > t.getHours() ? e.AMPMS[0] : e.AMPMS[1]
            },
            Z: function (t, e, n) {
                return t = -1 * n, t = (t >= 0 ? "+" : "") + (wn(Math[t > 0 ? "floor" : "ceil"](t / 60), 2) + wn(Math.abs(t % 60), 2))
            },
            ww: Dn(2),
            w: Dn(1),
            G: Sn,
            GG: Sn,
            GGG: Sn,
            GGGG: function (t, e) {
                return 0 >= t.getFullYear() ? e.ERANAMES[0] : e.ERANAMES[1]
            }
        },
        Mr = /((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,
        Ir = /^\-?\d+$/;
    Tn.$inject = ["$locale"];
    var Pr = p(Xn),
        Nr = p(Jn);
    In.$inject = ["$parse"];
    var Or = p({
            restrict: "E",
            compile: function (t, e) {
                return e.href || e.xlinkHref ? void 0 : function (t, e) {
                    if ("a" === e[0].nodeName.toLowerCase()) {
                        var n = "[object SVGAnimatedString]" === ei.call(e.prop("href")) ? "xlink:href" : "href";
                        e.on("click", function (t) {
                            e.attr(n) || t.preventDefault()
                        })
                    }
                }
            }
        }),
        Hr = {};
    i(Mi, function (t, e) {
        function n(t, n, r) {
            t.$watch(r[i], function (t) {
                r.$set(e, !!t)
            })
        }
        if ("multiple" != t) {
            var i = Xt("ng-" + e),
                r = n;
            "checked" === t && (r = function (t, e, r) {
                r.ngModel !== r[i] && n(t, e, r)
            }), Hr[i] = function () {
                return {
                    restrict: "A",
                    priority: 100,
                    link: r
                }
            }
        }
    }), i(Pi, function (t, e) {
        Hr[e] = function () {
            return {
                priority: 100,
                link: function (t, n, i) {
                    return "ngPattern" === e && "/" == i.ngPattern.charAt(0) && (n = i.ngPattern.match(Kn)) ? void i.$set("ngPattern", new RegExp(n[1], n[2])) : void t.$watch(i[e], function (t) {
                        i.$set(e, t)
                    })
                }
            }
        }
    }), i(["src", "srcset", "href"], function (t) {
        var e = Xt("ng-" + t);
        Hr[e] = function () {
            return {
                priority: 99,
                link: function (n, i, r) {
                    var s = t,
                        o = t;
                    "href" === t && "[object SVGAnimatedString]" === ei.call(i.prop("href")) && (o = "xlinkHref", r.$attr[o] = "xlink:href", s = null), r.$observe(e, function (e) {
                        e ? (r.$set(o, e), Bn && s && i.prop(s, r[o])) : "href" === t && r.$set(o, null)
                    })
                }
            }
        }
    });
    var jr = {
        $addControl: d,
        $$renameControl: function (t, e) {
            t.$name = e
        },
        $removeControl: d,
        $setValidity: d,
        $setDirty: d,
        $setPristine: d,
        $setSubmitted: d
    };
    Nn.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
    var Fr = function (t) {
            return ["$timeout", "$parse", function (e, n) {
                function i(t) {
                    return "" === t ? n('this[""]').assign : n(t).assign || d
                }
                return {
                    name: "form",
                    restrict: t ? "EAC" : "E",
                    require: ["form", "^^?form"],
                    controller: Nn,
                    compile: function (n, r) {
                        n.addClass(bs).addClass(vs);
                        var s = r.name ? "name" : t && r.ngForm ? "ngForm" : !1;
                        return {
                            pre: function (t, n, r, o) {
                                var a = o[0];
                                if (!("action" in r)) {
                                    var u = function (e) {
                                        t.$apply(function () {
                                            a.$commitViewValue(), a.$setSubmitted()
                                        }), e.preventDefault()
                                    };
                                    n[0].addEventListener("submit", u, !1), n.on("$destroy", function () {
                                        e(function () {
                                            n[0].removeEventListener("submit", u, !1)
                                        }, 0, !1)
                                    })
                                }(o[1] || a.$$parentForm).$addControl(a);
                                var c = s ? i(a.$name) : d;
                                s && (c(t, a), r.$observe(s, function (e) {
                                    a.$name !== e && (c(t, void 0), a.$$parentForm.$$renameControl(a, e), (c = i(a.$name))(t, a))
                                })), n.on("$destroy", function () {
                                    a.$$parentForm.$removeControl(a), c(t, void 0), l(a, jr)
                                })
                            }
                        }
                    }
                }
            }]
        },
        zr = Fr(),
        Rr = Fr(!0),
        Wr = /^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,
        qr = /^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:\/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,
        Lr = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
        Br = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,
        Vr = /^(\d{4,})-(\d{2})-(\d{2})$/,
        Ur = /^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Yr = /^(\d{4,})-W(\d\d)$/,
        Kr = /^(\d{4,})-(\d\d)$/,
        Gr = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
        Xr = ot();
    i(["date", "datetime-local", "month", "time", "week"], function (t) {
        Xr[t] = !0
    });
    var Jr = {
            text: function (t, e, n, i, r, s) {
                Hn(t, e, n, i, r, s), On(i)
            },
            date: Fn("date", Vr, jn(Vr, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
            "datetime-local": Fn("datetimelocal", Ur, jn(Ur, "yyyy MM dd HH mm ss sss".split(" ")), "yyyy-MM-ddTHH:mm:ss.sss"),
            time: Fn("time", Gr, jn(Gr, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
            week: Fn("week", Yr, function (t, e) {
                if (w(t)) return t;
                if ($(t)) {
                    Yr.lastIndex = 0;
                    var n = Yr.exec(t);
                    if (n) {
                        var i = +n[1],
                            r = +n[2],
                            s = n = 0,
                            o = 0,
                            a = 0,
                            l = kn(i),
                            r = 7 * (r - 1);
                        return e && (n = e.getHours(), s = e.getMinutes(), o = e.getSeconds(), a = e.getMilliseconds()), new Date(i, 0, l.getDate() + r, n, s, o, a)
                    }
                }
                return NaN
            }, "yyyy-Www"),
            month: Fn("month", Kr, jn(Kr, ["yyyy", "MM"]), "yyyy-MM"),
            number: function (t, e, n, i, r, s) {
                if (zn(t, e, n, i), Hn(t, e, n, i, r, s), i.$$parserName = "number", i.$parsers.push(function (t) {
                        return i.$isEmpty(t) ? null : Br.test(t) ? parseFloat(t) : void 0
                    }), i.$formatters.push(function (t) {
                        if (!i.$isEmpty(t)) {
                            if (!_(t)) throw ws("numfmt", t);
                            t = t.toString()
                        }
                        return t
                    }), v(n.min) || n.ngMin) {
                    var o;
                    i.$validators.min = function (t) {
                        return i.$isEmpty(t) || g(o) || t >= o
                    }, n.$observe("min", function (t) {
                        v(t) && !_(t) && (t = parseFloat(t, 10)), o = _(t) && !isNaN(t) ? t : void 0, i.$validate()
                    })
                }
                if (v(n.max) || n.ngMax) {
                    var a;
                    i.$validators.max = function (t) {
                        return i.$isEmpty(t) || g(a) || a >= t
                    }, n.$observe("max", function (t) {
                        v(t) && !_(t) && (t = parseFloat(t, 10)), a = _(t) && !isNaN(t) ? t : void 0, i.$validate()
                    })
                }
            },
            url: function (t, e, n, i, r, s) {
                Hn(t, e, n, i, r, s), On(i), i.$$parserName = "url", i.$validators.url = function (t, e) {
                    var n = t || e;
                    return i.$isEmpty(n) || qr.test(n)
                }
            },
            email: function (t, e, n, i, r, s) {
                Hn(t, e, n, i, r, s), On(i), i.$$parserName = "email", i.$validators.email = function (t, e) {
                    var n = t || e;
                    return i.$isEmpty(n) || Lr.test(n)
                }
            },
            radio: function (t, e, n, i) {
                g(n.name) && e.attr("name", ++si), e.on("click", function (t) {
                    e[0].checked && i.$setViewValue(n.value, t && t.type)
                }), i.$render = function () {
                    e[0].checked = n.value == i.$viewValue
                }, n.$observe("value", i.$render)
            },
            checkbox: function (t, e, n, i, r, s, o, a) {
                var l = Rn(a, t, "ngTrueValue", n.ngTrueValue, !0),
                    u = Rn(a, t, "ngFalseValue", n.ngFalseValue, !1);
                e.on("click", function (t) {
                    i.$setViewValue(e[0].checked, t && t.type)
                }), i.$render = function () {
                    e[0].checked = i.$viewValue
                }, i.$isEmpty = function (t) {
                    return !1 === t
                }, i.$formatters.push(function (t) {
                    return N(t, l)
                }), i.$parsers.push(function (t) {
                    return t ? l : u
                })
            },
            hidden: d,
            button: d,
            submit: d,
            reset: d,
            file: d
        },
        Qr = ["$browser", "$sniffer", "$filter", "$parse", function (t, e, n, i) {
            return {
                restrict: "E",
                require: ["?ngModel"],
                link: {
                    pre: function (r, s, o, a) {
                        a[0] && (Jr[Xn(o.type)] || Jr.text)(r, s, o, a[0], e, t, n, i)
                    }
                }
            }
        }],
        Zr = /^(true|false|\d+)$/,
        ts = function () {
            return {
                restrict: "A",
                priority: 100,
                compile: function (t, e) {
                    return Zr.test(e.ngValue) ? function (t, e, n) {
                        n.$set("value", t.$eval(n.ngValue))
                    } : function (t, e, n) {
                        t.$watch(n.ngValue, function (t) {
                            n.$set("value", t)
                        })
                    }
                }
            }
        },
        es = ["$compile", function (t) {
            return {
                restrict: "AC",
                compile: function (e) {
                    return t.$$addBindingClass(e),
                        function (e, n, i) {
                            t.$$addBindingInfo(n, i.ngBind), n = n[0], e.$watch(i.ngBind, function (t) {
                                n.textContent = g(t) ? "" : t
                            })
                        }
                }
            }
        }],
        ns = ["$interpolate", "$compile", function (t, e) {
            return {
                compile: function (n) {
                    return e.$$addBindingClass(n),
                        function (n, i, r) {
                            n = t(i.attr(r.$attr.ngBindTemplate)), e.$$addBindingInfo(i, n.expressions), i = i[0], r.$observe("ngBindTemplate", function (t) {
                                i.textContent = g(t) ? "" : t
                            })
                        }
                }
            }
        }],
        is = ["$sce", "$parse", "$compile", function (t, e, n) {
            return {
                restrict: "A",
                compile: function (i, r) {
                    var s = e(r.ngBindHtml),
                        o = e(r.ngBindHtml, function (e) {
                            return t.valueOf(e)
                        });
                    return n.$$addBindingClass(i),
                        function (e, i, r) {
                            n.$$addBindingInfo(i, r.ngBindHtml), e.$watch(o, function () {
                                var n = s(e);
                                i.html(t.getTrustedHtml(n) || "")
                            })
                        }
                }
            }
        }],
        rs = p({
            restrict: "A",
            require: "ngModel",
            link: function (t, e, n, i) {
                i.$viewChangeListeners.push(function () {
                    t.$eval(n.ngChange)
                })
            }
        }),
        ss = Wn("", !0),
        os = Wn("Odd", 0),
        as = Wn("Even", 1),
        ls = Pn({
            compile: function (t, e) {
                e.$set("ngCloak", void 0), t.removeClass("ng-cloak")
            }
        }),
        us = [function () {
            return {
                restrict: "A",
                scope: !0,
                controller: "@",
                priority: 500
            }
        }],
        cs = {},
        hs = {
            blur: !0,
            focus: !0
        };
    i("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (t) {
        var e = Xt("ng-" + t);
        cs[e] = ["$parse", "$rootScope", function (n, i) {
            return {
                restrict: "A",
                compile: function (r, s) {
                    var o = n(s[e], null, !0);
                    return function (e, n) {
                        n.on(t, function (n) {
                            var r = function () {
                                o(e, {
                                    $event: n
                                })
                            };
                            hs[t] && i.$$phase ? e.$evalAsync(r) : e.$apply(r)
                        })
                    }
                }
            }
        }]
    });
    var ds = ["$animate", "$compile", function (t, e) {
            return {
                multiElement: !0,
                transclude: "element",
                priority: 600,
                terminal: !0,
                restrict: "A",
                $$tlb: !0,
                link: function (n, i, r, s, o) {
                    var a, l, u;
                    n.$watch(r.ngIf, function (n) {
                        n ? l || o(function (n, s) {
                            l = s, n[n.length++] = e.$$createComment("end ngIf", r.ngIf), a = {
                                clone: n
                            }, t.enter(n, i.parent(), i)
                        }) : (u && (u.remove(), u = null), l && (l.$destroy(), l = null), a && (u = st(a.clone), t.leave(u).then(function () {
                            u = null
                        }), a = null))
                    })
                }
            }
        }],
        fs = ["$templateRequest", "$anchorScroll", "$animate", function (t, e, n) {
            return {
                restrict: "ECA",
                priority: 400,
                terminal: !0,
                transclude: "element",
                controller: ri.noop,
                compile: function (i, r) {
                    var s = r.ngInclude || r.src,
                        o = r.onload || "",
                        a = r.autoscroll;
                    return function (i, r, l, u, c) {
                        var h, d, f, p = 0,
                            m = function () {
                                d && (d.remove(), d = null), h && (h.$destroy(), h = null), f && (n.leave(f).then(function () {
                                    d = null
                                }), d = f, f = null)
                            };
                        i.$watch(s, function (s) {
                            var l = function () {
                                    !v(a) || a && !i.$eval(a) || e()
                                },
                                d = ++p;
                            s ? (t(s, !0).then(function (t) {
                                if (!i.$$destroyed && d === p) {
                                    var e = i.$new();
                                    u.template = t, t = c(e, function (t) {
                                        m(), n.enter(t, null, r).then(l)
                                    }), h = e, f = t, h.$emit("$includeContentLoaded", s), i.$eval(o)
                                }
                            }, function () {
                                i.$$destroyed || d !== p || (m(), i.$emit("$includeContentError", s))
                            }), i.$emit("$includeContentRequested", s)) : (m(), u.template = null)
                        })
                    }
                }
            }
        }],
        ps = ["$compile", function (e) {
            return {
                restrict: "ECA",
                priority: -400,
                require: "ngInclude",
                link: function (n, i, r, s) {
                    ei.call(i[0]).match(/SVG/) ? (i.empty(), e(dt(s.template, t.document).childNodes)(n, function (t) {
                        i.append(t)
                    }, {
                        futureParentElement: i
                    })) : (i.html(s.template), e(i.contents())(n))
                }
            }
        }],
        ms = Pn({
            priority: 450,
            compile: function () {
                return {
                    pre: function (t, e, n) {
                        t.$eval(n.ngInit)
                    }
                }
            }
        }),
        gs = function () {
            return {
                restrict: "A",
                priority: 100,
                require: "ngModel",
                link: function (t, e, n, r) {
                    var s = e.attr(n.$attr.ngList) || ", ",
                        o = "false" !== n.ngTrim,
                        a = o ? li(s) : s;
                    r.$parsers.push(function (t) {
                        if (!g(t)) {
                            var e = [];
                            return t && i(t.split(a), function (t) {
                                t && e.push(o ? li(t) : t)
                            }), e
                        }
                    }), r.$formatters.push(function (t) {
                        return oi(t) ? t.join(s) : void 0
                    }), r.$isEmpty = function (t) {
                        return !t || !t.length
                    }
                }
            }
        },
        vs = "ng-valid",
        ys = "ng-invalid",
        bs = "ng-pristine",
        $s = "ng-dirty",
        _s = "ng-pending",
        ws = e("ngModel"),
        xs = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate", function (t, e, n, r, s, o, a, l, u, c) {
            this.$modelValue = this.$viewValue = Number.NaN, this.$$rawModelValue = void 0, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = void 0, this.$name = c(n.name || "", !1)(t), this.$$parentForm = jr;
            var h, f = s(n.ngModel),
                p = f.assign,
                m = f,
                y = p,
                b = null,
                $ = this;
            this.$$setOptions = function (t) {
                if (($.$options = t) && t.getterSetter) {
                    var e = s(n.ngModel + "()"),
                        i = s(n.ngModel + "($$$p)");
                    m = function (t) {
                        var n = f(t);
                        return x(n) && (n = e(t)), n
                    }, y = function (t, e) {
                        x(f(t)) ? i(t, {
                            $$$p: e
                        }) : p(t, e)
                    }
                } else if (!f.assign) throw ws("nonassign", n.ngModel, q(r))
            }, this.$render = d, this.$isEmpty = function (t) {
                return g(t) || "" === t || null === t || t !== t
            }, this.$$updateEmptyClasses = function (t) {
                $.$isEmpty(t) ? (o.removeClass(r, "ng-not-empty"), o.addClass(r, "ng-empty")) : (o.removeClass(r, "ng-empty"), o.addClass(r, "ng-not-empty"))
            };
            var w = 0;
            qn({
                ctrl: this,
                $element: r,
                set: function (t, e) {
                    t[e] = !0
                },
                unset: function (t, e) {
                    delete t[e]
                },
                $animate: o
            }), this.$setPristine = function () {
                $.$dirty = !1, $.$pristine = !0, o.removeClass(r, $s), o.addClass(r, bs)
            }, this.$setDirty = function () {
                $.$dirty = !0, $.$pristine = !1, o.removeClass(r, bs), o.addClass(r, $s), $.$$parentForm.$setDirty()
            }, this.$setUntouched = function () {
                $.$touched = !1, $.$untouched = !0, o.setClass(r, "ng-untouched", "ng-touched")
            }, this.$setTouched = function () {
                $.$touched = !0, $.$untouched = !1, o.setClass(r, "ng-touched", "ng-untouched")
            }, this.$rollbackViewValue = function () {
                a.cancel(b), $.$viewValue = $.$$lastCommittedViewValue, $.$render()
            }, this.$validate = function () {
                if (!_($.$modelValue) || !isNaN($.$modelValue)) {
                    var t = $.$$rawModelValue,
                        e = $.$valid,
                        n = $.$modelValue,
                        i = $.$options && $.$options.allowInvalid;
                    $.$$runValidators(t, $.$$lastCommittedViewValue, function (r) {
                        i || e === r || ($.$modelValue = r ? t : void 0, $.$modelValue !== n && $.$$writeModelToScope())
                    })
                }
            }, this.$$runValidators = function (t, e, n) {
                function r() {
                    var n = !0;
                    return i($.$validators, function (i, r) {
                        var s = i(t, e);
                        n = n && s, o(r, s)
                    }), n ? !0 : (i($.$asyncValidators, function (t, e) {
                        o(e, null)
                    }), !1)
                }

                function s() {
                    var n = [],
                        r = !0;
                    i($.$asyncValidators, function (i, s) {
                        var a = i(t, e);
                        if (!a || !x(a.then)) throw ws("nopromise", a);
                        o(s, void 0), n.push(a.then(function () {
                            o(s, !0)
                        }, function () {
                            r = !1, o(s, !1)
                        }))
                    }), n.length ? u.all(n).then(function () {
                        a(r)
                    }, d) : a(!0)
                }

                function o(t, e) {
                    l === w && $.$setValidity(t, e)
                }

                function a(t) {
                    l === w && n(t)
                }
                w++;
                var l = w;
                (function () {
                    var t = $.$$parserName || "parse";
                    return g(h) ? (o(t, null), !0) : (h || (i($.$validators, function (t, e) {
                        o(e, null)
                    }), i($.$asyncValidators, function (t, e) {
                        o(e, null)
                    })), o(t, h), h)
                })() && r() ? s() : a(!1)
            }, this.$commitViewValue = function () {
                var t = $.$viewValue;
                a.cancel(b), ($.$$lastCommittedViewValue !== t || "" === t && $.$$hasNativeValidators) && ($.$$updateEmptyClasses(t), $.$$lastCommittedViewValue = t, $.$pristine && this.$setDirty(), this.$$parseAndValidate())
            }, this.$$parseAndValidate = function () {
                var e = $.$$lastCommittedViewValue;
                if (h = g(e) ? void 0 : !0)
                    for (var n = 0; n < $.$parsers.length; n++)
                        if (e = $.$parsers[n](e), g(e)) {
                            h = !1;
                            break
                        }
                _($.$modelValue) && isNaN($.$modelValue) && ($.$modelValue = m(t));
                var i = $.$modelValue,
                    r = $.$options && $.$options.allowInvalid;
                $.$$rawModelValue = e, r && ($.$modelValue = e, $.$modelValue !== i && $.$$writeModelToScope()), $.$$runValidators(e, $.$$lastCommittedViewValue, function (t) {
                    r || ($.$modelValue = t ? e : void 0, $.$modelValue !== i && $.$$writeModelToScope())
                })
            }, this.$$writeModelToScope = function () {
                y(t, $.$modelValue), i($.$viewChangeListeners, function (t) {
                    try {
                        t()
                    } catch (n) {
                        e(n)
                    }
                })
            }, this.$setViewValue = function (t, e) {
                $.$viewValue = t, $.$options && !$.$options.updateOnDefault || $.$$debounceViewValueCommit(e)
            }, this.$$debounceViewValueCommit = function (e) {
                var n = 0,
                    i = $.$options;
                i && v(i.debounce) && (i = i.debounce, _(i) ? n = i : _(i[e]) ? n = i[e] : _(i["default"]) && (n = i["default"])), a.cancel(b), n ? b = a(function () {
                    $.$commitViewValue()
                }, n) : l.$$phase ? $.$commitViewValue() : t.$apply(function () {
                    $.$commitViewValue()
                })
            }, t.$watch(function () {
                var e = m(t);
                if (e !== $.$modelValue && ($.$modelValue === $.$modelValue || e === e)) {
                    $.$modelValue = $.$$rawModelValue = e, h = void 0;
                    for (var n = $.$formatters, i = n.length, r = e; i--;) r = n[i](r);
                    $.$viewValue !== r && ($.$$updateEmptyClasses(r), $.$viewValue = $.$$lastCommittedViewValue = r, $.$render(), $.$$runValidators(e, r, d))
                }
                return e
            })
        }],
        Cs = ["$rootScope", function (t) {
            return {
                restrict: "A",
                require: ["ngModel", "^?form", "^?ngModelOptions"],
                controller: xs,
                priority: 1,
                compile: function (e) {
                    return e.addClass(bs).addClass("ng-untouched").addClass(vs), {
                        pre: function (t, e, n, i) {
                            var r = i[0];
                            e = i[1] || r.$$parentForm, r.$$setOptions(i[2] && i[2].$options), e.$addControl(r), n.$observe("name", function (t) {
                                r.$name !== t && r.$$parentForm.$$renameControl(r, t)
                            }), t.$on("$destroy", function () {
                                r.$$parentForm.$removeControl(r)
                            })
                        },
                        post: function (e, n, i, r) {
                            var s = r[0];
                            s.$options && s.$options.updateOn && n.on(s.$options.updateOn, function (t) {
                                s.$$debounceViewValueCommit(t && t.type)
                            }), n.on("blur", function () {
                                s.$touched || (t.$$phase ? e.$evalAsync(s.$setTouched) : e.$apply(s.$setTouched))
                            })
                        }
                    }
                }
            }
        }],
        ks = /(\s+|^)default(\s+|$)/,
        Ds = function () {
            return {
                restrict: "A",
                controller: ["$scope", "$attrs", function (t, e) {
                    var n = this;
                    this.$options = P(t.$eval(e.ngModelOptions)), v(this.$options.updateOn) ? (this.$options.updateOnDefault = !1, this.$options.updateOn = li(this.$options.updateOn.replace(ks, function () {
                        return n.$options.updateOnDefault = !0, " "
                    }))) : this.$options.updateOnDefault = !0
                }]
            }
        },
        Ss = Pn({
            terminal: !0,
            priority: 1e3
        }),
        Ts = e("ngOptions"),
        As = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
        Es = ["$compile", "$document", "$parse", function (e, r, s) {
            function o(t, e, i) {
                function r(t, e, n, i, r) {
                    this.selectValue = t, this.viewValue = e, this.label = n, this.group = i, this.disabled = r
                }

                function o(t) {
                    var e;
                    if (!u && n(t)) e = t;
                    else {
                        e = [];
                        for (var i in t) t.hasOwnProperty(i) && "$" !== i.charAt(0) && e.push(i)
                    }
                    return e
                }
                var a = t.match(As);
                if (!a) throw Ts("iexp", t, q(e));
                var l = a[5] || a[7],
                    u = a[6];
                t = / as /.test(a[0]) && a[1];
                var c = a[9];
                e = s(a[2] ? a[1] : l);
                var h = t && s(t) || e,
                    d = c && s(c),
                    f = c ? function (t, e) {
                        return d(i, e)
                    } : function (t) {
                        return Ot(t)
                    },
                    p = function (t, e) {
                        return f(t, $(t, e))
                    },
                    m = s(a[2] || a[1]),
                    g = s(a[3] || ""),
                    v = s(a[4] || ""),
                    y = s(a[8]),
                    b = {},
                    $ = u ? function (t, e) {
                        return b[u] = e, b[l] = t, b
                    } : function (t) {
                        return b[l] = t, b
                    };
                return {
                    trackBy: c,
                    getTrackByValue: p,
                    getWatchables: s(y, function (t) {
                        var e = [];
                        t = t || [];
                        for (var n = o(t), r = n.length, s = 0; r > s; s++) {
                            var l = t === n ? s : n[s],
                                u = t[l],
                                l = $(u, l),
                                u = f(u, l);
                            e.push(u), (a[2] || a[1]) && (u = m(i, l), e.push(u)), a[4] && (l = v(i, l), e.push(l))
                        }
                        return e
                    }),
                    getOptions: function () {
                        for (var t = [], e = {}, n = y(i) || [], s = o(n), a = s.length, l = 0; a > l; l++) {
                            var u = n === s ? l : s[l],
                                d = $(n[u], u),
                                b = h(i, d),
                                u = f(b, d),
                                _ = m(i, d),
                                w = g(i, d),
                                d = v(i, d),
                                b = new r(u, b, _, w, d);
                            t.push(b), e[u] = b
                        }
                        return {
                            items: t,
                            selectValueMap: e,
                            getOptionFromViewValue: function (t) {
                                return e[p(t)]
                            },
                            getViewValueFromOption: function (t) {
                                return c ? ri.copy(t.viewValue) : t.viewValue
                            }
                        }
                    }
                }
            }
            var a = t.document.createElement("option"),
                l = t.document.createElement("optgroup");
            return {
                restrict: "A",
                terminal: !0,
                require: ["select", "ngModel"],
                link: {
                    pre: function (t, e, n, i) {
                        i[0].registerOption = d
                    },
                    post: function (t, n, s, u) {
                        function c(t, e) {
                            t.element = e, e.disabled = t.disabled, t.label !== e.label && (e.label = t.label, e.textContent = t.label), t.value !== e.value && (e.value = t.selectValue)
                        }

                        function h() {
                            var t = _ && f.readValue();
                            if (_)
                                for (var e = _.items.length - 1; e >= 0; e--) {
                                    var i = _.items[e];
                                    Tt(i.group ? i.element.parentNode : i.element)
                                }
                            _ = w.getOptions();
                            var r = {};
                            b && n.prepend(d), _.items.forEach(function (t) {
                                var e;
                                if (v(t.group)) {
                                    e = r[t.group], e || (e = l.cloneNode(!1), x.appendChild(e), e.label = t.group, r[t.group] = e);
                                    var n = a.cloneNode(!1)
                                } else e = x, n = a.cloneNode(!1);
                                e.appendChild(n), c(t, n)
                            }), n[0].appendChild(x), p.$render(), p.$isEmpty(t) || (e = f.readValue(), (w.trackBy || m ? N(t, e) : t === e) || (p.$setViewValue(e), p.$render()))
                        }
                        var d, f = u[0],
                            p = u[1],
                            m = s.multiple;
                        u = 0;
                        for (var g = n.children(), y = g.length; y > u; u++)
                            if ("" === g[u].value) {
                                d = g.eq(u);
                                break
                            }
                        var b = !!d,
                            $ = Vn(a.cloneNode(!1));
                        $.val("?");
                        var _, w = o(s.ngOptions, n, t),
                            x = r[0].createDocumentFragment();
                        m ? (p.$isEmpty = function (t) {
                            return !t || 0 === t.length
                        }, f.writeValue = function (t) {
                            _.items.forEach(function (t) {
                                t.element.selected = !1
                            }), t && t.forEach(function (t) {
                                (t = _.getOptionFromViewValue(t)) && (t.element.selected = !0)
                            })
                        }, f.readValue = function () {
                            var t = n.val() || [],
                                e = [];
                            return i(t, function (t) {
                                (t = _.selectValueMap[t]) && !t.disabled && e.push(_.getViewValueFromOption(t))
                            }), e
                        }, w.trackBy && t.$watchCollection(function () {
                            return oi(p.$viewValue) ? p.$viewValue.map(function (t) {
                                return w.getTrackByValue(t)
                            }) : void 0
                        }, function () {
                            p.$render()
                        })) : (f.writeValue = function (t) {
                            var e = _.getOptionFromViewValue(t);
                            e ? (n[0].value !== e.selectValue && ($.remove(), b || d.remove(), n[0].value = e.selectValue, e.element.selected = !0), e.element.setAttribute("selected", "selected")) : null === t || b ? ($.remove(), b || n.prepend(d), n.val(""), d.prop("selected", !0), d.attr("selected", !0)) : (b || d.remove(), n.prepend($), n.val("?"), $.prop("selected", !0), $.attr("selected", !0))
                        }, f.readValue = function () {
                            var t = _.selectValueMap[n.val()];
                            return t && !t.disabled ? (b || d.remove(), $.remove(), _.getViewValueFromOption(t)) : null
                        }, w.trackBy && t.$watch(function () {
                            return w.getTrackByValue(p.$viewValue)
                        }, function () {
                            p.$render()
                        })), b ? (d.remove(), e(d)(t), d.removeClass("ng-scope")) : d = Vn(a.cloneNode(!1)), n.empty(), h(), t.$watchCollection(w.getWatchables, h)
                    }
                }
            }
        }],
        Ms = ["$locale", "$interpolate", "$log", function (t, e, n) {
            var r = /{}/g,
                s = /^when(Minus)?(.+)$/;
            return {
                link: function (o, a, l) {
                    function u(t) {
                        a.text(t || "")
                    }
                    var c, h = l.count,
                        f = l.$attr.when && a.attr(l.$attr.when),
                        p = l.offset || 0,
                        m = o.$eval(f) || {},
                        v = {},
                        y = e.startSymbol(),
                        b = e.endSymbol(),
                        $ = y + h + "-" + p + b,
                        w = ri.noop;
                    i(l, function (t, e) {
                        var n = s.exec(e);
                        n && (n = (n[1] ? "-" : "") + Xn(n[2]), m[n] = a.attr(l.$attr[e]))
                    }), i(m, function (t, n) {
                        v[n] = e(t.replace(r, $))
                    }), o.$watch(h, function (e) {
                        var i = parseFloat(e),
                            r = isNaN(i);
                        r || i in m || (i = t.pluralCat(i - p)), i === c || r && _(c) && isNaN(c) || (w(), r = v[i], g(r) ? (null != e && n.debug("ngPluralize: no rule defined for '" + i + "' in " + f), w = d, u()) : w = o.$watch(r, u), c = i)
                    })
                }
            }
        }],
        Is = ["$parse", "$animate", "$compile", function (t, r, s) {
            var o = e("ngRepeat"),
                a = function (t, e, n, i, r, s, o) {
                    t[n] = i, r && (t[r] = s), t.$index = e, t.$first = 0 === e, t.$last = e === o - 1, t.$middle = !(t.$first || t.$last), t.$odd = !(t.$even = 0 === (1 & e))
                };
            return {
                restrict: "A",
                multiElement: !0,
                transclude: "element",
                priority: 1e3,
                terminal: !0,
                $$tlb: !0,
                compile: function (e, l) {
                    var u = l.ngRepeat,
                        c = s.$$createComment("end ngRepeat", u),
                        h = u.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                    if (!h) throw o("iexp", u);
                    var d = h[1],
                        f = h[2],
                        p = h[3],
                        m = h[4],
                        h = d.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);
                    if (!h) throw o("iidexp", d);
                    var g = h[3] || h[1],
                        v = h[2];
                    if (p && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p))) throw o("badident", p);
                    var y, b, $, _, w = {
                        $id: Ot
                    };
                    return m ? y = t(m) : ($ = function (t, e) {
                            return Ot(e)
                        }, _ = function (t) {
                            return t
                        }),
                        function (t, e, s, l, h) {
                            y && (b = function (e, n, i) {
                                return v && (w[v] = e), w[g] = n, w.$index = i, y(t, w)
                            });
                            var d = ot();
                            t.$watchCollection(f, function (s) {
                                var l, f, m, y, w, x, C, k, D, S, T = e[0],
                                    A = ot();
                                if (p && (t[p] = s), n(s)) k = s, f = b || $;
                                else
                                    for (S in f = b || _, k = [], s) Gn.call(s, S) && "$" !== S.charAt(0) && k.push(S);
                                for (y = k.length, S = Array(y), l = 0; y > l; l++)
                                    if (w = s === k ? l : k[l], x = s[w], C = f(w, x, l), d[C]) D = d[C], delete d[C], A[C] = D, S[l] = D;
                                    else {
                                        if (A[C]) throw i(S, function (t) {
                                            t && t.scope && (d[t.id] = t)
                                        }), o("dupes", u, C, x);
                                        S[l] = {
                                            id: C,
                                            scope: void 0,
                                            clone: void 0
                                        }, A[C] = !0
                                    }
                                for (m in d) {
                                    if (D = d[m], C = st(D.clone), r.leave(C), C[0].parentNode)
                                        for (l = 0, f = C.length; f > l; l++) C[l].$$NG_REMOVED = !0;
                                    D.scope.$destroy()
                                }
                                for (l = 0; y > l; l++)
                                    if (w = s === k ? l : k[l], x = s[w], D = S[l], D.scope) {
                                        m = T;
                                        do m = m.nextSibling; while (m && m.$$NG_REMOVED);
                                        D.clone[0] != m && r.move(st(D.clone), null, T), T = D.clone[D.clone.length - 1], a(D.scope, l, g, x, v, w, y)
                                    } else h(function (t, e) {
                                        D.scope = e;
                                        var n = c.cloneNode(!1);
                                        t[t.length++] = n, r.enter(t, null, T), T = n, D.clone = t, A[D.id] = D, a(D.scope, l, g, x, v, w, y)
                                    });
                                d = A
                            })
                        }
                }
            }
        }],
        Ps = ["$animate", function (t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (e, n, i) {
                    e.$watch(i.ngShow, function (e) {
                        t[e ? "removeClass" : "addClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Ns = ["$animate", function (t) {
            return {
                restrict: "A",
                multiElement: !0,
                link: function (e, n, i) {
                    e.$watch(i.ngHide, function (e) {
                        t[e ? "addClass" : "removeClass"](n, "ng-hide", {
                            tempClasses: "ng-hide-animate"
                        })
                    })
                }
            }
        }],
        Os = Pn(function (t, e, n) {
            t.$watch(n.ngStyle, function (t, n) {
                n && t !== n && i(n, function (t, n) {
                    e.css(n, "")
                }), t && e.css(t)
            }, !0)
        }),
        Hs = ["$animate", "$compile", function (t, e) {
            return {
                require: "ngSwitch",
                controller: ["$scope", function () {
                    this.cases = {}
                }],
                link: function (n, r, s, o) {
                    var a = [],
                        l = [],
                        u = [],
                        c = [],
                        h = function (t, e) {
                            return function () {
                                t.splice(e, 1)
                            }
                        };
                    n.$watch(s.ngSwitch || s.on, function (n) {
                        var r, s;
                        for (r = 0, s = u.length; s > r; ++r) t.cancel(u[r]);
                        for (r = u.length = 0, s = c.length; s > r; ++r) {
                            var d = st(l[r].clone);
                            c[r].$destroy(), (u[r] = t.leave(d)).then(h(u, r))
                        }
                        l.length = 0, c.length = 0, (a = o.cases["!" + n] || o.cases["?"]) && i(a, function (n) {
                            n.transclude(function (i, r) {
                                c.push(r);
                                var s = n.element;
                                i[i.length++] = e.$$createComment("end ngSwitchWhen"), l.push({
                                    clone: i
                                }), t.enter(i, s.parent(), s)
                            })
                        })
                    })
                }
            }
        }],
        js = Pn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (t, e, n, i, r) {
                i.cases["!" + n.ngSwitchWhen] = i.cases["!" + n.ngSwitchWhen] || [], i.cases["!" + n.ngSwitchWhen].push({
                    transclude: r,
                    element: e
                })
            }
        }),
        Fs = Pn({
            transclude: "element",
            priority: 1200,
            require: "^ngSwitch",
            multiElement: !0,
            link: function (t, e, n, i, r) {
                i.cases["?"] = i.cases["?"] || [], i.cases["?"].push({
                    transclude: r,
                    element: e
                })
            }
        }),
        zs = e("ngTransclude"),
        Rs = Pn({
            restrict: "EAC",
            link: function (t, e, n, i, r) {
                if (n.ngTransclude === n.$attr.ngTransclude && (n.ngTransclude = ""), !r) throw zs("orphan", q(e));
                r(function (t) {
                    t.length && (e.empty(), e.append(t))
                }, null, n.ngTransclude || n.ngTranscludeSlot)
            }
        }),
        Ws = ["$templateCache", function (t) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function (e, n) {
                    "text/ng-template" == n.type && t.put(n.id, e[0].text)
                }
            }
        }],
        qs = {
            $setViewValue: d,
            $render: d
        },
        Ls = ["$element", "$scope", function (e, n) {
            var i = this,
                r = new Ht;
            i.ngModelCtrl = qs, i.unknownOption = Vn(t.document.createElement("option")), i.renderUnknownOption = function (t) {
                t = "? " + Ot(t) + " ?", i.unknownOption.val(t), e.prepend(i.unknownOption), e.val(t)
            }, n.$on("$destroy", function () {
                i.renderUnknownOption = d
            }), i.removeUnknownOption = function () {
                i.unknownOption.parent() && i.unknownOption.remove()
            }, i.readValue = function () {
                return i.removeUnknownOption(), e.val()
            }, i.writeValue = function (t) {
                i.hasOption(t) ? (i.removeUnknownOption(), e.val(t), "" === t && i.emptyOption.prop("selected", !0)) : null == t && i.emptyOption ? (i.removeUnknownOption(), e.val("")) : i.renderUnknownOption(t);
            }, i.addOption = function (t, e) {
                if (8 !== e[0].nodeType) {
                    it(t, '"option value"'), "" === t && (i.emptyOption = e);
                    var n = r.get(t) || 0;
                    r.put(t, n + 1), i.ngModelCtrl.$render(), e[0].hasAttribute("selected") && (e[0].selected = !0)
                }
            }, i.removeOption = function (t) {
                var e = r.get(t);
                e && (1 === e ? (r.remove(t), "" === t && (i.emptyOption = void 0)) : r.put(t, e - 1))
            }, i.hasOption = function (t) {
                return !!r.get(t)
            }, i.registerOption = function (t, e, n, r, s) {
                if (r) {
                    var o;
                    n.$observe("value", function (t) {
                        v(o) && i.removeOption(o), o = t, i.addOption(t, e)
                    })
                } else s ? t.$watch(s, function (t, r) {
                    n.$set("value", t), r !== t && i.removeOption(r), i.addOption(t, e)
                }) : i.addOption(n.value, e);
                e.on("$destroy", function () {
                    i.removeOption(n.value), i.ngModelCtrl.$render()
                })
            }
        }],
        Bs = function () {
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: Ls,
                priority: 1,
                link: {
                    pre: function (t, e, n, r) {
                        var s = r[1];
                        if (s) {
                            var o = r[0];
                            if (o.ngModelCtrl = s, e.on("change", function () {
                                    t.$apply(function () {
                                        s.$setViewValue(o.readValue())
                                    })
                                }), n.multiple) {
                                o.readValue = function () {
                                    var t = [];
                                    return i(e.find("option"), function (e) {
                                        e.selected && t.push(e.value)
                                    }), t
                                }, o.writeValue = function (t) {
                                    var n = new Ht(t);
                                    i(e.find("option"), function (t) {
                                        t.selected = v(n.get(t.value))
                                    })
                                };
                                var a, l = NaN;
                                t.$watch(function () {
                                    l !== s.$viewValue || N(a, s.$viewValue) || (a = lt(s.$viewValue), s.$render()), l = s.$viewValue
                                }), s.$isEmpty = function (t) {
                                    return !t || 0 === t.length
                                }
                            }
                        }
                    },
                    post: function (t, e, n, i) {
                        var r = i[1];
                        if (r) {
                            var s = i[0];
                            r.$render = function () {
                                s.writeValue(r.$viewValue)
                            }
                        }
                    }
                }
            }
        },
        Vs = ["$interpolate", function (t) {
            return {
                restrict: "E",
                priority: 100,
                compile: function (e, n) {
                    if (v(n.value)) var i = t(n.value, !0);
                    else {
                        var r = t(e.text(), !0);
                        r || n.$set("value", e.text())
                    }
                    return function (t, e, n) {
                        var s = e.parent();
                        (s = s.data("$selectController") || s.parent().data("$selectController")) && s.registerOption(t, e, n, i, r)
                    }
                }
            }
        }],
        Us = p({
            restrict: "E",
            terminal: !1
        }),
        Ys = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, e, n, i) {
                    i && (n.required = !0, i.$validators.required = function (t, e) {
                        return !n.required || !i.$isEmpty(e)
                    }, n.$observe("required", function () {
                        i.$validate()
                    }))
                }
            }
        },
        Ks = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, n, i, r) {
                    if (r) {
                        var s, o = i.ngPattern || i.pattern;
                        i.$observe("pattern", function (t) {
                            if ($(t) && 0 < t.length && (t = new RegExp("^" + t + "$")), t && !t.test) throw e("ngPattern")("noregexp", o, t, q(n));
                            s = t || void 0, r.$validate()
                        }), r.$validators.pattern = function (t, e) {
                            return r.$isEmpty(e) || g(s) || s.test(e)
                        }
                    }
                }
            }
        },
        Gs = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, e, n, i) {
                    if (i) {
                        var r = -1;
                        n.$observe("maxlength", function (t) {
                            t = c(t), r = isNaN(t) ? -1 : t, i.$validate()
                        }), i.$validators.maxlength = function (t, e) {
                            return 0 > r || i.$isEmpty(e) || e.length <= r
                        }
                    }
                }
            }
        },
        Xs = function () {
            return {
                restrict: "A",
                require: "?ngModel",
                link: function (t, e, n, i) {
                    if (i) {
                        var r = 0;
                        n.$observe("minlength", function (t) {
                            r = c(t) || 0, i.$validate()
                        }), i.$validators.minlength = function (t, e) {
                            return i.$isEmpty(e) || e.length >= r
                        }
                    }
                }
            }
        };
    t.angular.bootstrap ? t.console && console.log("WARNING: Tried to load angular more than once.") : (tt(), ut(ri), ri.module("ngLocale", [], ["$provide", function (t) {
        function e(t) {
            t += "";
            var e = t.indexOf(".");
            return -1 == e ? 0 : t.length - e - 1
        }
        t.value("$locale", {
            DATETIME_FORMATS: {
                AMPMS: ["AM", "PM"],
                DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                ERANAMES: ["Before Christ", "Anno Domini"],
                ERAS: ["BC", "AD"],
                FIRSTDAYOFWEEK: 6,
                MONTH: "January February March April May June July August September October November December".split(" "),
                SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                STANDALONEMONTH: "January February March April May June July August September October November December".split(" "),
                WEEKENDRANGE: [5, 6],
                fullDate: "EEEE, MMMM d, y",
                longDate: "MMMM d, y",
                medium: "MMM d, y h:mm:ss a",
                mediumDate: "MMM d, y",
                mediumTime: "h:mm:ss a",
                "short": "M/d/yy h:mm a",
                shortDate: "M/d/yy",
                shortTime: "h:mm a"
            },
            NUMBER_FORMATS: {
                CURRENCY_SYM: "$",
                DECIMAL_SEP: ".",
                GROUP_SEP: ",",
                PATTERNS: [{
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 3,
                    minFrac: 0,
                    minInt: 1,
                    negPre: "-",
                    negSuf: "",
                    posPre: "",
                    posSuf: ""
                }, {
                    gSize: 3,
                    lgSize: 3,
                    maxFrac: 2,
                    minFrac: 2,
                    minInt: 1,
                    negPre: "-¤",
                    negSuf: "",
                    posPre: "¤",
                    posSuf: ""
                }]
            },
            id: "en-us",
            localeID: "en_US",
            pluralCat: function (t, n) {
                var i = 0 | t,
                    r = n;
                return void 0 === r && (r = Math.min(e(t), 3)), Math.pow(10, r), 1 == i && 0 == r ? "one" : "other"
            }
        })
    }]), Vn(t.document).ready(function () {
        G(t.document, X)
    }))
}(window), !window.angular.$$csp().noInlineStyle && window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),
    function (t, e) {
        "use strict";

        function n(t, e, n) {
            if (!t) throw G("areq", e || "?", n || "required");
            return t
        }

        function i(t, e) {
            return t || e ? t ? e ? (F(t) && (t = t.join(" ")), F(e) && (e = e.join(" ")), t + " " + e) : t : e : ""
        }

        function r(t) {
            var e = {};
            return t && (t.to || t.from) && (e.to = t.to, e.from = t.from), e
        }

        function s(t, e, n) {
            var i = "";
            return t = F(t) ? t : t && z(t) && t.length ? t.split(/\s+/) : [], j(t, function (t, r) {
                t && 0 < t.length && (i += r > 0 ? " " : "", i += n ? e + t : t + e)
            }), i
        }

        function o(t) {
            if (t instanceof H) switch (t.length) {
            case 0:
                return t;
            case 1:
                if (1 === t[0].nodeType) return t;
                break;
            default:
                return H(a(t))
            }
            return 1 === t.nodeType ? H(t) : void 0
        }

        function a(t) {
            if (!t[0]) return t;
            for (var e = 0; e < t.length; e++) {
                var n = t[e];
                if (1 == n.nodeType) return n
            }
        }

        function l(t, e, n) {
            j(e, function (e) {
                t.addClass(e, n)
            })
        }

        function u(t, e, n) {
            j(e, function (e) {
                t.removeClass(e, n)
            })
        }

        function c(t) {
            return function (e, n) {
                n.addClass && (l(t, e, n.addClass), n.addClass = null), n.removeClass && (u(t, e, n.removeClass), n.removeClass = null)
            }
        }

        function h(t) {
            if (t = t || {}, !t.$$prepared) {
                var e = t.domOperation || P;
                t.domOperation = function () {
                    t.$$domOperationFired = !0, e(), e = P
                }, t.$$prepared = !0
            }
            return t
        }

        function d(t, e) {
            f(t, e), p(t, e)
        }

        function f(t, e) {
            e.from && (t.css(e.from), e.from = null)
        }

        function p(t, e) {
            e.to && (t.css(e.to), e.to = null)
        }

        function m(t, e, n) {
            var i = e.options || {};
            n = n.options || {};
            var r = (i.addClass || "") + " " + (n.addClass || ""),
                s = (i.removeClass || "") + " " + (n.removeClass || "");
            return t = g(t.attr("class"), r, s), n.preparationClasses && (i.preparationClasses = w(n.preparationClasses, i.preparationClasses), delete n.preparationClasses), r = i.domOperation !== P ? i.domOperation : null, O(i, n), r && (i.domOperation = r), i.addClass = t.addClass ? t.addClass : null, i.removeClass = t.removeClass ? t.removeClass : null, e.addClass = i.addClass, e.removeClass = i.removeClass, i
        }

        function g(t, e, n) {
            function i(t) {
                z(t) && (t = t.split(" "));
                var e = {};
                return j(t, function (t) {
                    t.length && (e[t] = !0)
                }), e
            }
            var r = {};
            t = i(t), e = i(e), j(e, function (t, e) {
                r[e] = 1
            }), n = i(n), j(n, function (t, e) {
                r[e] = 1 === r[e] ? null : -1
            });
            var s = {
                addClass: "",
                removeClass: ""
            };
            return j(r, function (e, n) {
                var i, r;
                1 === e ? (i = "addClass", r = !t[n]) : -1 === e && (i = "removeClass", r = t[n]), r && (s[i].length && (s[i] += " "), s[i] += n)
            }), s
        }

        function v(t) {
            return t instanceof e.element ? t[0] : t
        }

        function y(t, e, n) {
            var i = "";
            e && (i = s(e, "ng-", !0)), n.addClass && (i = w(i, s(n.addClass, "-add"))), n.removeClass && (i = w(i, s(n.removeClass, "-remove"))), i.length && (n.preparationClasses = i, t.addClass(i))
        }

        function b(t, e) {
            var n = e ? "-" + e + "s" : "";
            return _(t, [Y, n]), [Y, n]
        }

        function $(t, e) {
            var n = e ? "paused" : "",
                i = M + "PlayState";
            return _(t, [i, n]), [i, n]
        }

        function _(t, e) {
            t.style[e[0]] = e[1]
        }

        function w(t, e) {
            return t ? e ? t + " " + e : t : e
        }

        function x(t, e, n) {
            var i = Object.create(null),
                r = t.getComputedStyle(e) || {};
            return j(n, function (t, e) {
                var n = r[t];
                if (n) {
                    var s = n.charAt(0);
                    ("-" === s || "+" === s || s >= 0) && (n = C(n)), 0 === n && (n = null), i[e] = n
                }
            }), i
        }

        function C(t) {
            var e = 0;
            return t = t.split(/\s*,\s*/), j(t, function (t) {
                "s" == t.charAt(t.length - 1) && (t = t.substring(0, t.length - 1)), t = parseFloat(t) || 0, e = e ? Math.max(t, e) : t
            }), e
        }

        function k(t) {
            return 0 === t || null != t
        }

        function D(t, e) {
            var n = A,
                i = t + "s";
            return e ? n += "Duration" : i += " linear all", [n, i]
        }

        function S() {
            var t = Object.create(null);
            return {
                flush: function () {
                    t = Object.create(null)
                },
                count: function (e) {
                    return (e = t[e]) ? e.total : 0
                },
                get: function (e) {
                    return (e = t[e]) && e.value
                },
                put: function (e, n) {
                    t[e] ? t[e].total++ : t[e] = {
                        total: 1,
                        value: n
                    }
                }
            }
        }

        function T(t, e, n) {
            j(n, function (n) {
                t[n] = q(t[n]) ? t[n] : e.style.getPropertyValue(n)
            })
        }
        var A, E, M, I, P = e.noop,
            N = e.copy,
            O = e.extend,
            H = e.element,
            j = e.forEach,
            F = e.isArray,
            z = e.isString,
            R = e.isObject,
            W = e.isUndefined,
            q = e.isDefined,
            L = e.isFunction,
            B = e.isElement;
        W(t.ontransitionend) && q(t.onwebkittransitionend) ? (A = "WebkitTransition", E = "webkitTransitionEnd transitionend") : (A = "transition", E = "transitionend"), W(t.onanimationend) && q(t.onwebkitanimationend) ? (M = "WebkitAnimation", I = "webkitAnimationEnd animationend") : (M = "animation", I = "animationend");
        var V = M + "Delay",
            U = M + "Duration",
            Y = A + "Delay",
            K = A + "Duration",
            G = e.$$minErr("ng"),
            X = {
                transitionDuration: K,
                transitionDelay: Y,
                transitionProperty: A + "Property",
                animationDuration: U,
                animationDelay: V,
                animationIterationCount: M + "IterationCount"
            },
            J = {
                transitionDuration: K,
                transitionDelay: Y,
                animationDuration: U,
                animationDelay: V
            };
        e.module("ngAnimate", []).directive("ngAnimateSwap", ["$animate", "$rootScope", function (t, e) {
            return {
                restrict: "A",
                transclude: "element",
                terminal: !0,
                priority: 600,
                link: function (e, n, i, r, s) {
                    var o, a;
                    e.$watchCollection(i.ngAnimateSwap || i["for"], function (i) {
                        o && t.leave(o), a && (a.$destroy(), a = null), (i || 0 === i) && (a = e.$new(), s(a, function (e) {
                            o = e, t.enter(e, null, n)
                        }))
                    })
                }
            }
        }]).directive("ngAnimateChildren", ["$interpolate", function (t) {
            return {
                link: function (n, i, r) {
                    function s(t) {
                        i.data("$$ngAnimateChildren", "on" === t || "true" === t)
                    }
                    var o = r.ngAnimateChildren;
                    e.isString(o) && 0 === o.length ? i.data("$$ngAnimateChildren", !0) : (s(t(o)(n)), r.$observe("ngAnimateChildren", s))
                }
            }
        }]).factory("$$rAFScheduler", ["$$rAF", function (t) {
            function e(t) {
                i = i.concat(t), n()
            }

            function n() {
                if (i.length) {
                    for (var e = i.shift(), s = 0; s < e.length; s++) e[s]();
                    r || t(function () {
                        r || n()
                    })
                }
            }
            var i, r;
            return i = e.queue = [], e.waitUntilQuiet = function (e) {
                r && r(), r = t(function () {
                    r = null, e(), n()
                })
            }, e
        }]).provider("$$animateQueue", ["$animateProvider", function (i) {
            function r(t) {
                if (!t) return null;
                t = t.split(" ");
                var e = Object.create(null);
                return j(t, function (t) {
                    e[t] = !0
                }), e
            }

            function s(t, e) {
                if (t && e) {
                    var n = r(e);
                    return t.split(" ").some(function (t) {
                        return n[t]
                    })
                }
            }

            function l(t, e, n, i) {
                return f[t].some(function (t) {
                    return t(e, n, i)
                })
            }

            function u(t, e) {
                var n = 0 < (t.addClass || "").length,
                    i = 0 < (t.removeClass || "").length;
                return e ? n && i : n || i
            }
            var f = this.rules = {
                skip: [],
                cancel: [],
                join: []
            };
            f.join.push(function (t, e, n) {
                return !e.structural && u(e)
            }), f.skip.push(function (t, e, n) {
                return !e.structural && !u(e)
            }), f.skip.push(function (t, e, n) {
                return "leave" == n.event && e.structural
            }), f.skip.push(function (t, e, n) {
                return n.structural && 2 === n.state && !e.structural
            }), f.cancel.push(function (t, e, n) {
                return n.structural && e.structural
            }), f.cancel.push(function (t, e, n) {
                return 2 === n.state && e.structural
            }), f.cancel.push(function (t, e, n) {
                if (n.structural) return !1;
                t = e.addClass, e = e.removeClass;
                var i = n.addClass;
                return n = n.removeClass, W(t) && W(e) || W(i) && W(n) ? !1 : s(t, n) || s(e, i)
            }), this.$get = ["$$rAF", "$rootScope", "$rootElement", "$document", "$$HashMap", "$$animation", "$$AnimateRunner", "$templateRequest", "$$jqLite", "$$forceReflow", function (r, s, f, p, g, b, $, _, w, x) {
                function C() {
                    var t = !1;
                    return function (e) {
                        t ? e() : s.$$postDigest(function () {
                            t = !0, e()
                        })
                    }
                }

                function k(t, e, n) {
                    var i = v(e),
                        r = v(t),
                        s = [];
                    return (t = Y[n]) && j(t, function (t) {
                        J.call(t.node, i) ? s.push(t.callback) : "leave" === n && J.call(t.node, r) && s.push(t.callback)
                    }), s
                }

                function D(t, e, n) {
                    var i = a(e);
                    return t.filter(function (t) {
                        return !(t.node === i && (!n || t.callback === n))
                    })
                }

                function S(t, e, n) {
                    function i(e, n, i, s) {
                        w(function () {
                            var e = k(f, t, n);
                            e.length ? r(function () {
                                j(e, function (e) {
                                    e(t, i, s)
                                }), "close" !== i || t[0].parentNode || Q.off(t)
                            }) : "close" !== i || t[0].parentNode || Q.off(t)
                        }), e.progress(n, i, s)
                    }

                    function a(e) {
                        var n = t,
                            i = g;
                        i.preparationClasses && (n.removeClass(i.preparationClasses), i.preparationClasses = null), i.activeClasses && (n.removeClass(i.activeClasses), i.activeClasses = null), X(t, g), d(t, g), g.domOperation(), _.complete(!e)
                    }
                    var c, f, g = N(n);
                    (t = o(t)) && (c = v(t), f = t.parent());
                    var g = h(g),
                        _ = new $,
                        w = C();
                    if (F(g.addClass) && (g.addClass = g.addClass.join(" ")), g.addClass && !z(g.addClass) && (g.addClass = null), F(g.removeClass) && (g.removeClass = g.removeClass.join(" ")), g.removeClass && !z(g.removeClass) && (g.removeClass = null), g.from && !R(g.from) && (g.from = null), g.to && !R(g.to) && (g.to = null), !c) return a(), _;
                    if (n = [c.className, g.addClass, g.removeClass].join(" "), !G(n)) return a(), _;
                    var x = 0 <= ["enter", "move", "leave"].indexOf(e),
                        D = p[0].hidden,
                        S = !V || D || L.get(c);
                    n = !S && P.get(c) || {};
                    var E = !!n.state;
                    if (S || E && 1 == n.state || (S = !M(t, f, e)), S) return D && i(_, e, "start"), a(), D && i(_, e, "close"), _;
                    if (x && T(t), D = {
                            structural: x,
                            element: t,
                            event: e,
                            addClass: g.addClass,
                            removeClass: g.removeClass,
                            close: a,
                            options: g,
                            runner: _
                        }, E) {
                        if (l("skip", t, D, n)) return 2 === n.state ? (a(), _) : (m(t, n, D), n.runner);
                        if (l("cancel", t, D, n))
                            if (2 === n.state) n.runner.end();
                            else {
                                if (!n.structural) return m(t, n, D), n.runner;
                                n.close()
                            } else if (l("join", t, D, n)) {
                            if (2 !== n.state) return y(t, x ? e : null, g), e = D.event = n.event, g = m(t, n, D), n.runner;
                            m(t, D, {})
                        }
                    } else m(t, D, {});
                    if ((E = D.structural) || (E = "animate" === D.event && 0 < Object.keys(D.options.to || {}).length || u(D)), !E) return a(), A(t), _;
                    var O = (n.counter || 0) + 1;
                    return D.counter = O, I(t, 1, D), s.$$postDigest(function () {
                        var n = P.get(c),
                            r = !n,
                            n = n || {},
                            s = 0 < (t.parent() || []).length && ("animate" === n.event || n.structural || u(n));
                        r || n.counter !== O || !s ? (r && (X(t, g), d(t, g)), (r || x && n.event !== e) && (g.domOperation(), _.end()), s || A(t)) : (e = !n.structural && u(n, !0) ? "setClass" : n.event, I(t, 2), n = b(t, e, n.options), _.setHost(n), i(_, e, "start", {}), n.done(function (n) {
                            a(!n), (n = P.get(c)) && n.counter === O && A(v(t)), i(_, e, "close", {})
                        }))
                    }), _
                }

                function T(t) {
                    t = v(t).querySelectorAll("[data-ng-animate]"), j(t, function (t) {
                        var e = parseInt(t.getAttribute("data-ng-animate")),
                            n = P.get(t);
                        if (n) switch (e) {
                        case 2:
                            n.runner.end();
                        case 1:
                            P.remove(t)
                        }
                    })
                }

                function A(t) {
                    t = v(t), t.removeAttribute("data-ng-animate"), P.remove(t)
                }

                function E(t, e) {
                    return v(t) === v(e)
                }

                function M(t, e, n) {
                    n = H(p[0].body);
                    var i, r = E(t, n) || "HTML" === t[0].nodeName,
                        s = E(t, f),
                        o = !1,
                        a = L.get(v(t));
                    for ((t = H.data(t[0], "$ngAnimatePin")) && (e = t), e = v(e); e && (s || (s = E(e, f)), 1 === e.nodeType);) {
                        if (t = P.get(e) || {}, !o) {
                            var l = L.get(e);
                            if (!0 === l && !1 !== a) {
                                a = !0;
                                break
                            }!1 === l && (a = !1), o = t.structural
                        }
                        if ((W(i) || !0 === i) && (t = H.data(e, "$$ngAnimateChildren"), q(t) && (i = t)), o && !1 === i) break;
                        if (r || (r = E(e, n)), r && s) break;
                        e = s || !(t = H.data(e, "$ngAnimatePin")) ? e.parentNode : v(t)
                    }
                    return (!o || i) && !0 !== a && s && r
                }

                function I(t, e, n) {
                    n = n || {}, n.state = e, t = v(t), t.setAttribute("data-ng-animate", e), n = (e = P.get(t)) ? O(e, n) : n, P.put(t, n)
                }
                var P = new g,
                    L = new g,
                    V = null,
                    U = s.$watch(function () {
                        return 0 === _.totalPendingRequests
                    }, function (t) {
                        t && (U(), s.$$postDigest(function () {
                            s.$$postDigest(function () {
                                null === V && (V = !0)
                            })
                        }))
                    }),
                    Y = {},
                    K = i.classNameFilter(),
                    G = K ? function (t) {
                        return K.test(t)
                    } : function () {
                        return !0
                    },
                    X = c(w),
                    J = t.Node.prototype.contains || function (t) {
                        return this === t || !!(16 & this.compareDocumentPosition(t))
                    },
                    Q = {
                        on: function (t, e, n) {
                            var i = a(e);
                            Y[t] = Y[t] || [], Y[t].push({
                                node: i,
                                callback: n
                            }), H(e).on("$destroy", function () {
                                P.get(i) || Q.off(t, e, n)
                            })
                        },
                        off: function (t, n, i) {
                            if (1 !== arguments.length || e.isString(arguments[0])) {
                                var r = Y[t];
                                r && (Y[t] = 1 === arguments.length ? null : D(r, n, i))
                            } else
                                for (r in n = arguments[0], Y) Y[r] = D(Y[r], n)
                        },
                        pin: function (t, e) {
                            n(B(t), "element", "not an element"), n(B(e), "parentElement", "not an element"), t.data("$ngAnimatePin", e)
                        },
                        push: function (t, e, n, i) {
                            return n = n || {}, n.domOperation = i, S(t, e, n)
                        },
                        enabled: function (t, e) {
                            var n = arguments.length;
                            if (0 === n) e = !!V;
                            else if (B(t)) {
                                var i = v(t),
                                    r = L.get(i);
                                1 === n ? e = !r : L.put(i, !e)
                            } else e = V = !!t;
                            return e
                        }
                    };
                return Q
            }]
        }]).provider("$$animation", ["$animateProvider", function (t) {
            var e = this.drivers = [];
            this.$get = ["$$jqLite", "$rootScope", "$injector", "$$AnimateRunner", "$$HashMap", "$$rAFScheduler", function (t, n, r, s, o, a) {
                function l(t) {
                    function e(t) {
                        if (t.processed) return t;
                        t.processed = !0;
                        var n = t.domNode,
                            s = n.parentNode;
                        r.put(n, t);
                        for (var o; s;) {
                            if (o = r.get(s)) {
                                o.processed || (o = e(o));
                                break
                            }
                            s = s.parentNode
                        }
                        return (o || i).children.push(t), t
                    }
                    var n, i = {
                            children: []
                        },
                        r = new o;
                    for (n = 0; n < t.length; n++) {
                        var s = t[n];
                        r.put(s.domNode, t[n] = {
                            domNode: s.domNode,
                            fn: s.fn,
                            children: []
                        })
                    }
                    for (n = 0; n < t.length; n++) e(t[n]);
                    return function (t) {
                        var e, n = [],
                            i = [];
                        for (e = 0; e < t.children.length; e++) i.push(t.children[e]);
                        t = i.length;
                        var r = 0,
                            s = [];
                        for (e = 0; e < i.length; e++) {
                            var o = i[e];
                            0 >= t && (t = r, r = 0, n.push(s), s = []), s.push(o.fn), o.children.forEach(function (t) {
                                r++, i.push(t)
                            }), t--
                        }
                        return s.length && n.push(s), n
                    }(i)
                }
                var u = [],
                    f = c(t);
                return function (o, c, p) {
                    function m(t) {
                        t = t.hasAttribute("ng-animate-ref") ? [t] : t.querySelectorAll("[ng-animate-ref]");
                        var e = [];
                        return j(t, function (t) {
                            var n = t.getAttribute("ng-animate-ref");
                            n && n.length && e.push(t)
                        }), e
                    }

                    function g(t) {
                        var e = [],
                            n = {};
                        j(t, function (t, i) {
                            var r = v(t.element),
                                s = 0 <= ["enter", "move"].indexOf(t.event),
                                r = t.structural ? m(r) : [];
                            if (r.length) {
                                var o = s ? "to" : "from";
                                j(r, function (t) {
                                    var e = t.getAttribute("ng-animate-ref");
                                    n[e] = n[e] || {}, n[e][o] = {
                                        animationID: i,
                                        element: H(t)
                                    }
                                })
                            } else e.push(t)
                        });
                        var i = {},
                            r = {};
                        return j(n, function (n, s) {
                            var o = n.from,
                                a = n.to;
                            if (o && a) {
                                var l = t[o.animationID],
                                    u = t[a.animationID],
                                    c = o.animationID.toString();
                                if (!r[c]) {
                                    var h = r[c] = {
                                        structural: !0,
                                        beforeStart: function () {
                                            l.beforeStart(), u.beforeStart()
                                        },
                                        close: function () {
                                            l.close(), u.close()
                                        },
                                        classes: y(l.classes, u.classes),
                                        from: l,
                                        to: u,
                                        anchors: []
                                    };
                                    h.classes.length ? e.push(h) : (e.push(l), e.push(u))
                                }
                                r[c].anchors.push({
                                    out: o.element,
                                    "in": a.element
                                })
                            } else o = o ? o.animationID : a.animationID, a = o.toString(), i[a] || (i[a] = !0, e.push(t[o]))
                        }), e
                    }

                    function y(t, e) {
                        t = t.split(" "), e = e.split(" ");
                        for (var n = [], i = 0; i < t.length; i++) {
                            var r = t[i];
                            if ("ng-" !== r.substring(0, 3))
                                for (var s = 0; s < e.length; s++)
                                    if (r === e[s]) {
                                        n.push(r);
                                        break
                                    }
                        }
                        return n.join(" ")
                    }

                    function b(t) {
                        for (var n = e.length - 1; n >= 0; n--) {
                            var i = r.get(e[n])(t);
                            if (i) return i
                        }
                    }

                    function $(t, e) {
                        function n(t) {
                            (t = t.data("$$animationRunner")) && t.setHost(e)
                        }
                        t.from && t.to ? (n(t.from.element), n(t.to.element)) : n(t.element)
                    }

                    function _() {
                        var t = o.data("$$animationRunner");
                        !t || "leave" === c && p.$$domOperationFired || t.end()
                    }

                    function w(e) {
                        o.off("$destroy", _), o.removeData("$$animationRunner"), f(o, p), d(o, p), p.domOperation(), D && t.removeClass(o, D), o.removeClass("ng-animate"), C.complete(!e)
                    }
                    p = h(p);
                    var x = 0 <= ["enter", "move", "leave"].indexOf(c),
                        C = new s({
                            end: function () {
                                w()
                            },
                            cancel: function () {
                                w(!0)
                            }
                        });
                    if (!e.length) return w(), C;
                    o.data("$$animationRunner", C);
                    var k = i(o.attr("class"), i(p.addClass, p.removeClass)),
                        D = p.tempClasses;
                    D && (k += " " + D, p.tempClasses = null);
                    var S;
                    return x && (S = "ng-" + c + "-prepare", t.addClass(o, S)), u.push({
                        element: o,
                        classes: k,
                        event: c,
                        structural: x,
                        options: p,
                        beforeStart: function () {
                            o.addClass("ng-animate"), D && t.addClass(o, D), S && (t.removeClass(o, S), S = null)
                        },
                        close: w
                    }), o.on("$destroy", _), 1 < u.length ? C : (n.$$postDigest(function () {
                        var t = [];
                        j(u, function (e) {
                            e.element.data("$$animationRunner") ? t.push(e) : e.close()
                        }), u.length = 0;
                        var e = g(t),
                            n = [];
                        j(e, function (t) {
                            n.push({
                                domNode: v(t.from ? t.from.element : t.element),
                                fn: function () {
                                    t.beforeStart();
                                    var e, n = t.close;
                                    if ((t.anchors ? t.from.element || t.to.element : t.element).data("$$animationRunner")) {
                                        var i = b(t);
                                        i && (e = i.start)
                                    }
                                    e ? (e = e(), e.done(function (t) {
                                        n(!t)
                                    }), $(t, e)) : n()
                                }
                            })
                        }), a(l(n))
                    }), C)
                }
            }]
        }]).provider("$animateCss", ["$animateProvider", function (t) {
            var e = S(),
                n = S();
            this.$get = ["$window", "$$jqLite", "$$AnimateRunner", "$timeout", "$$forceReflow", "$sniffer", "$$rAFScheduler", "$$animateQueue", function (t, i, o, a, l, u, m, g) {
                function y(t, e) {
                    var n = t.parentNode;
                    return (n.$$ngAnimateParentKey || (n.$$ngAnimateParentKey = ++H)) + "-" + t.getAttribute("class") + "-" + e
                }

                function w(r, o, a, l) {
                    var u;
                    return 0 < e.count(a) && (u = n.get(a), u || (o = s(o, "-stagger"), i.addClass(r, o), u = x(t, r, l), u.animationDuration = Math.max(u.animationDuration, 0), u.transitionDuration = Math.max(u.transitionDuration, 0), i.removeClass(r, o), n.put(a, u))), u || {}
                }

                function C(t) {
                    z.push(t), m.waitUntilQuiet(function () {
                        e.flush(), n.flush();
                        for (var t = l(), i = 0; i < z.length; i++) z[i](t);
                        z.length = 0
                    })
                }

                function S(n, i, r) {
                    return i = e.get(r), i || (i = x(t, n, X), "infinite" === i.animationIterationCount && (i.animationIterationCount = 1)), e.put(r, i), n = i, r = n.animationDelay, i = n.transitionDelay, n.maxDelay = r && i ? Math.max(r, i) : r || i, n.maxDuration = Math.max(n.animationDuration * n.animationIterationCount, n.transitionDuration), n
                }
                var O = c(i),
                    H = 0,
                    z = [];
                return function (t, n) {
                    function l() {
                        m()
                    }

                    function c() {
                        m(!0)
                    }

                    function m(e) {
                        if (!(B || G && K)) {
                            B = !0, K = !1, W.$$skipPreparationClasses || i.removeClass(t, ht), i.removeClass(t, ft), $(L, !1), b(L, !1), j(rt, function (t) {
                                L.style[t[0]] = ""
                            }), O(t, W), d(t, W), Object.keys(q).length && j(q, function (t, e) {
                                t ? L.style.setProperty(e, t) : L.style.removeProperty(e)
                            }), W.onDone && W.onDone(), at && at.length && t.off(at.join(" "), z);
                            var n = t.data("$$animateCss");
                            n && (a.cancel(n[0].timer), t.removeData("$$animateCss")), X && X.complete(!e)
                        }
                    }

                    function x(t) {
                        bt.blockTransition && b(L, t), bt.blockKeyframeAnimation && $(L, !!t)
                    }

                    function H() {
                        return X = new o({
                            end: l,
                            cancel: c
                        }), C(P), m(), {
                            $$willAnimate: !1,
                            start: function () {
                                return X
                            },
                            end: l
                        }
                    }

                    function z(t) {
                        t.stopPropagation();
                        var e = t.originalEvent || t;
                        t = e.$manualTimeStamp || Date.now(), e = parseFloat(e.elapsedTime.toFixed(3)), Math.max(t - it, 0) >= tt && e >= et && (G = !0, m())
                    }

                    function R() {
                        function e() {
                            if (!B) {
                                if (x(!1), j(rt, function (t) {
                                        L.style[t[0]] = t[1]
                                    }), O(t, W), i.addClass(t, ft), bt.recalculateTimingStyles) {
                                    if (dt = L.className + " " + ht, pt = y(L, dt), vt = S(L, dt, pt), yt = vt.maxDelay, Z = Math.max(yt, 0), et = vt.maxDuration, 0 === et) return void m();
                                    bt.hasTransitions = 0 < vt.transitionDuration, bt.hasAnimations = 0 < vt.animationDuration
                                }
                                if (bt.applyAnimationDelay && (yt = "boolean" != typeof W.delay && k(W.delay) ? parseFloat(W.delay) : yt, Z = Math.max(yt, 0), vt.animationDelay = yt, $t = [V, yt + "s"], rt.push($t), L.style[$t[0]] = $t[1]), tt = 1e3 * Z, nt = 1e3 * et, W.easing) {
                                    var e, r = W.easing;
                                    bt.hasTransitions && (e = A + "TimingFunction", rt.push([e, r]), L.style[e] = r), bt.hasAnimations && (e = M + "TimingFunction", rt.push([e, r]), L.style[e] = r)
                                }
                                vt.transitionDuration && at.push(E), vt.animationDuration && at.push(I), it = Date.now();
                                var s = tt + 1.5 * nt;
                                e = it + s;
                                var r = t.data("$$animateCss") || [],
                                    o = !0;
                                if (r.length) {
                                    var l = r[0];
                                    (o = e > l.expectedEndTime) ? a.cancel(l.timer): r.push(m)
                                }
                                o && (s = a(n, s, !1), r[0] = {
                                    timer: s,
                                    expectedEndTime: e
                                }, r.push(m), t.data("$$animateCss", r)), at.length && t.on(at.join(" "), z), W.to && (W.cleanupStyles && T(q, L, Object.keys(W.to)), p(t, W))
                            }
                        }

                        function n() {
                            var e = t.data("$$animateCss");
                            if (e) {
                                for (var n = 1; n < e.length; n++) e[n]();
                                t.removeData("$$animateCss")
                            }
                        }
                        if (!B)
                            if (L.parentNode) {
                                var r = function (t) {
                                        if (G) K && t && (K = !1, m());
                                        else if (K = !t, vt.animationDuration)
                                            if (t = $(L, K), K) rt.push(t);
                                            else {
                                                var e = rt,
                                                    n = e.indexOf(t);
                                                t >= 0 && e.splice(n, 1)
                                            }
                                    },
                                    s = gt > 0 && (vt.transitionDuration && 0 === mt.transitionDuration || vt.animationDuration && 0 === mt.animationDuration) && Math.max(mt.animationDelay, mt.transitionDelay);
                                s ? a(e, Math.floor(s * gt * 1e3), !1) : e(), Q.resume = function () {
                                    r(!0)
                                }, Q.pause = function () {
                                    r(!1)
                                }
                            } else m()
                    }
                    var W = n || {};
                    W.$$prepared || (W = h(N(W)));
                    var q = {},
                        L = v(t);
                    if (!L || !L.parentNode || !g.enabled()) return H();
                    var B, K, G, X, Q, Z, tt, et, nt, it, rt = [],
                        st = t.attr("class"),
                        ot = r(W),
                        at = [];
                    if (0 === W.duration || !u.animations && !u.transitions) return H();
                    var lt = W.event && F(W.event) ? W.event.join(" ") : W.event,
                        ut = "",
                        ct = "";
                    lt && W.structural ? ut = s(lt, "ng-", !0) : lt && (ut = lt), W.addClass && (ct += s(W.addClass, "-add")), W.removeClass && (ct.length && (ct += " "), ct += s(W.removeClass, "-remove")), W.applyClassesEarly && ct.length && O(t, W);
                    var ht = [ut, ct].join(" ").trim(),
                        dt = st + " " + ht,
                        ft = s(ht, "-active"),
                        st = ot.to && 0 < Object.keys(ot.to).length;
                    if (!(0 < (W.keyframeStyle || "").length || st || ht)) return H();
                    var pt, mt;
                    0 < W.stagger ? (ot = parseFloat(W.stagger), mt = {
                        transitionDelay: ot,
                        animationDelay: ot,
                        transitionDuration: 0,
                        animationDuration: 0
                    }) : (pt = y(L, dt), mt = w(L, ht, pt, J)), W.$$skipPreparationClasses || i.addClass(t, ht), W.transitionStyle && (ot = [A, W.transitionStyle], _(L, ot), rt.push(ot)), 0 <= W.duration && (ot = 0 < L.style[A].length, ot = D(W.duration, ot), _(L, ot), rt.push(ot)), W.keyframeStyle && (ot = [M, W.keyframeStyle], _(L, ot), rt.push(ot));
                    var gt = mt ? 0 <= W.staggerIndex ? W.staggerIndex : e.count(pt) : 0;
                    (lt = 0 === gt) && !W.skipBlocking && b(L, 9999);
                    var vt = S(L, dt, pt),
                        yt = vt.maxDelay;
                    Z = Math.max(yt, 0), et = vt.maxDuration;
                    var bt = {};
                    if (bt.hasTransitions = 0 < vt.transitionDuration, bt.hasAnimations = 0 < vt.animationDuration, bt.hasTransitionAll = bt.hasTransitions && "all" == vt.transitionProperty, bt.applyTransitionDuration = st && (bt.hasTransitions && !bt.hasTransitionAll || bt.hasAnimations && !bt.hasTransitions), bt.applyAnimationDuration = W.duration && bt.hasAnimations, bt.applyTransitionDelay = k(W.delay) && (bt.applyTransitionDuration || bt.hasTransitions), bt.applyAnimationDelay = k(W.delay) && bt.hasAnimations, bt.recalculateTimingStyles = 0 < ct.length, (bt.applyTransitionDuration || bt.applyAnimationDuration) && (et = W.duration ? parseFloat(W.duration) : et, bt.applyTransitionDuration && (bt.hasTransitions = !0, vt.transitionDuration = et, ot = 0 < L.style[A + "Property"].length, rt.push(D(et, ot))), bt.applyAnimationDuration && (bt.hasAnimations = !0, vt.animationDuration = et, rt.push([U, et + "s"]))), 0 === et && !bt.recalculateTimingStyles) return H();
                    if (null != W.delay) {
                        var $t;
                        "boolean" != typeof W.delay && ($t = parseFloat(W.delay), Z = Math.max($t, 0)), bt.applyTransitionDelay && rt.push([Y, $t + "s"]), bt.applyAnimationDelay && rt.push([V, $t + "s"])
                    }
                    return null == W.duration && 0 < vt.transitionDuration && (bt.recalculateTimingStyles = bt.recalculateTimingStyles || lt), tt = 1e3 * Z, nt = 1e3 * et, W.skipBlocking || (bt.blockTransition = 0 < vt.transitionDuration, bt.blockKeyframeAnimation = 0 < vt.animationDuration && 0 < mt.animationDelay && 0 === mt.animationDuration), W.from && (W.cleanupStyles && T(q, L, Object.keys(W.from)), f(t, W)), bt.blockTransition || bt.blockKeyframeAnimation ? x(et) : W.skipBlocking || b(L, !1), {
                        $$willAnimate: !0,
                        end: l,
                        start: function () {
                            return B ? void 0 : (Q = {
                                end: l,
                                cancel: c,
                                resume: null,
                                pause: null
                            }, X = new o(Q), C(R), X)
                        }
                    }
                }
            }]
        }]).provider("$$animateCssDriver", ["$$animationProvider", function (t) {
            t.drivers.push("$$animateCssDriver"), this.$get = ["$animateCss", "$rootScope", "$$AnimateRunner", "$rootElement", "$sniffer", "$$jqLite", "$document", function (t, e, n, i, r, s, o) {
                function a(t) {
                    return t.replace(/\bng-\S+\b/g, "")
                }

                function l(t, e) {
                    return z(t) && (t = t.split(" ")), z(e) && (e = e.split(" ")), t.filter(function (t) {
                        return -1 === e.indexOf(t)
                    }).join(" ")
                }

                function u(e, i, r) {
                    function s(t) {
                        var e = {},
                            n = v(t).getBoundingClientRect();
                        return j(["width", "height", "top", "left"], function (t) {
                            var i = n[t];
                            switch (t) {
                            case "top":
                                i += f.scrollTop;
                                break;
                            case "left":
                                i += f.scrollLeft
                            }
                            e[t] = Math.floor(i) + "px"
                        }), e
                    }

                    function o() {
                        var e = a(r.attr("class") || ""),
                            n = l(e, h),
                            e = l(h, e),
                            n = t(c, {
                                to: s(r),
                                addClass: "ng-anchor-in " + n,
                                removeClass: "ng-anchor-out " + e,
                                delay: !0
                            });
                        return n.$$willAnimate ? n : null
                    }

                    function u() {
                        c.remove(), i.removeClass("ng-animate-shim"), r.removeClass("ng-animate-shim")
                    }
                    var c = H(v(i).cloneNode(!0)),
                        h = a(c.attr("class") || "");
                    i.addClass("ng-animate-shim"), r.addClass("ng-animate-shim"), c.addClass("ng-anchor"), p.append(c);
                    var d;
                    if (e = function () {
                            var e = t(c, {
                                addClass: "ng-anchor-out",
                                delay: !0,
                                from: s(i)
                            });
                            return e.$$willAnimate ? e : null
                        }(), !e && (d = o(), !d)) return u();
                    var m = e || d;
                    return {
                        start: function () {
                            function t() {
                                i && i.end()
                            }
                            var e, i = m.start();
                            return i.done(function () {
                                return i = null, !d && (d = o()) ? (i = d.start(), i.done(function () {
                                    i = null, u(), e.complete()
                                }), i) : (u(), void e.complete())
                            }), e = new n({
                                end: t,
                                cancel: t
                            })
                        }
                    }
                }

                function h(t, e, i, r) {
                    var s = d(t, P),
                        o = d(e, P),
                        a = [];
                    return j(r, function (t) {
                        (t = u(i, t.out, t["in"])) && a.push(t)
                    }), s || o || 0 !== a.length ? {
                        start: function () {
                            function t() {
                                j(e, function (t) {
                                    t.end()
                                })
                            }
                            var e = [];
                            s && e.push(s.start()), o && e.push(o.start()), j(a, function (t) {
                                e.push(t.start())
                            });
                            var i = new n({
                                end: t,
                                cancel: t
                            });
                            return n.all(e, function (t) {
                                i.complete(t)
                            }), i
                        }
                    } : void 0
                }

                function d(e) {
                    var n = e.element,
                        i = e.options || {};
                    return e.structural && (i.event = e.event, i.structural = !0, i.applyClassesEarly = !0, "leave" === e.event && (i.onDone = i.domOperation)), i.preparationClasses && (i.event = w(i.event, i.preparationClasses)), e = t(n, i), e.$$willAnimate ? e : null
                }
                if (!r.animations && !r.transitions) return P;
                var f = o[0].body;
                e = v(i);
                var p = H(e.parentNode && 11 === e.parentNode.nodeType || f.contains(e) ? e : f);
                return c(s),
                    function (t) {
                        return t.from && t.to ? h(t.from, t.to, t.classes, t.anchors) : d(t)
                    }
            }]
        }]).provider("$$animateJs", ["$animateProvider", function (t) {
            this.$get = ["$injector", "$$AnimateRunner", "$$jqLite", function (e, n, i) {
                function r(n) {
                    n = F(n) ? n : n.split(" ");
                    for (var i = [], r = {}, s = 0; s < n.length; s++) {
                        var o = n[s],
                            a = t.$$registeredAnimations[o];
                        a && !r[o] && (i.push(e.get(a)), r[o] = !0)
                    }
                    return i
                }
                var s = c(i);
                return function (t, e, i, o) {
                    function a() {
                        o.domOperation(), s(t, o)
                    }

                    function l(t, e, i, r, s) {
                        switch (i) {
                        case "animate":
                            e = [e, r.from, r.to, s];
                            break;
                        case "setClass":
                            e = [e, g, v, s];
                            break;
                        case "addClass":
                            e = [e, g, s];
                            break;
                        case "removeClass":
                            e = [e, v, s];
                            break;
                        default:
                            e = [e, s]
                        }
                        if (e.push(r), t = t.apply(t, e))
                            if (L(t.start) && (t = t.start()), t instanceof n) t.done(s);
                            else if (L(t)) return t;
                        return P
                    }

                    function u(t, e, i, r, s) {
                        var o = [];
                        return j(r, function (r) {
                            var a = r[s];
                            a && o.push(function () {
                                var r, s, o = !1,
                                    u = function (t) {
                                        o || (o = !0, (s || P)(t), r.complete(!t))
                                    };
                                return r = new n({
                                    end: function () {
                                        u()
                                    },
                                    cancel: function () {
                                        u(!0)
                                    }
                                }), s = l(a, t, e, i, function (t) {
                                    u(!1 === t)
                                }), r
                            })
                        }), o
                    }

                    function c(t, e, i, r, s) {
                        var o = u(t, e, i, r, s);
                        if (0 === o.length) {
                            var a, l;
                            "beforeSetClass" === s ? (a = u(t, "removeClass", i, r, "beforeRemoveClass"), l = u(t, "addClass", i, r, "beforeAddClass")) : "setClass" === s && (a = u(t, "removeClass", i, r, "removeClass"), l = u(t, "addClass", i, r, "addClass")), a && (o = o.concat(a)), l && (o = o.concat(l))
                        }
                        return 0 !== o.length ? function (t) {
                            var e = [];
                            return o.length && j(o, function (t) {
                                    e.push(t())
                                }), e.length ? n.all(e, t) : t(),
                                function (t) {
                                    j(e, function (e) {
                                        t ? e.cancel() : e.end()
                                    })
                                }
                        } : void 0
                    }
                    var f = !1;
                    3 === arguments.length && R(i) && (o = i, i = null), o = h(o), i || (i = t.attr("class") || "", o.addClass && (i += " " + o.addClass), o.removeClass && (i += " " + o.removeClass));
                    var p, m, g = o.addClass,
                        v = o.removeClass,
                        y = r(i);
                    if (y.length) {
                        var b, $;
                        "leave" == e ? ($ = "leave", b = "afterLeave") : ($ = "before" + e.charAt(0).toUpperCase() + e.substr(1), b = e), "enter" !== e && "move" !== e && (p = c(t, e, o, y, $)), m = c(t, e, o, y, b)
                    }
                    if (p || m) {
                        var _;
                        return {
                            $$willAnimate: !0,
                            end: function () {
                                return _ ? _.end() : (f = !0, a(), d(t, o), _ = new n, _.complete(!0)), _
                            },
                            start: function () {
                                function e(e) {
                                    f = !0, a(), d(t, o), _.complete(e)
                                }
                                if (_) return _;
                                _ = new n;
                                var i, r = [];
                                return p && r.push(function (t) {
                                    i = p(t)
                                }), r.length ? r.push(function (t) {
                                    a(), t(!0)
                                }) : a(), m && r.push(function (t) {
                                    i = m(t)
                                }), _.setHost({
                                    end: function () {
                                        f || ((i || P)(void 0), e(void 0))
                                    },
                                    cancel: function () {
                                        f || ((i || P)(!0), e(!0))
                                    }
                                }), n.chain(r, e), _
                            }
                        }
                    }
                }
            }]
        }]).provider("$$animateJsDriver", ["$$animationProvider", function (t) {
            t.drivers.push("$$animateJsDriver"), this.$get = ["$$animateJs", "$$AnimateRunner", function (t, e) {
                function n(e) {
                    return t(e.element, e.event, e.classes, e.options)
                }
                return function (t) {
                    if (!t.from || !t.to) return n(t);
                    var i = n(t.from),
                        r = n(t.to);
                    return i || r ? {
                        start: function () {
                            function t() {
                                return function () {
                                    j(n, function (t) {
                                        t.end()
                                    })
                                }
                            }
                            var n = [];
                            i && n.push(i.start()), r && n.push(r.start()), e.all(n, function (t) {
                                s.complete(t)
                            });
                            var s = new e({
                                end: t(),
                                cancel: t()
                            });
                            return s
                        }
                    } : void 0
                }
            }]
        }])
    }(window, window.angular),
    function (t, e) {
        "use strict";

        function n(t, n, i) {
            return {
                restrict: "ECA",
                terminal: !0,
                priority: 400,
                transclude: "element",
                link: function (r, s, o, a, l) {
                    function u() {
                        f && (i.cancel(f), f = null), h && (h.$destroy(), h = null), d && (f = i.leave(d), f.then(function () {
                            f = null
                        }), d = null)
                    }

                    function c() {
                        var o = t.current && t.current.locals;
                        if (e.isDefined(o && o.$template)) {
                            var o = r.$new(),
                                a = t.current;
                            d = l(o, function (t) {
                                i.enter(t, null, d || s).then(function () {
                                    !e.isDefined(p) || p && !r.$eval(p) || n()
                                }), u()
                            }), h = a.scope = o, h.$emit("$viewContentLoaded"), h.$eval(m)
                        } else u()
                    }
                    var h, d, f, p = o.autoscroll,
                        m = o.onload || "";
                    r.$on("$routeChangeSuccess", c), c()
                }
            }
        }

        function i(t, e, n) {
            return {
                restrict: "ECA",
                priority: -400,
                link: function (i, r) {
                    var s = n.current,
                        o = s.locals;
                    r.html(o.$template);
                    var a = t(r.contents());
                    if (s.controller) {
                        o.$scope = i;
                        var l = e(s.controller, o);
                        s.controllerAs && (i[s.controllerAs] = l), r.data("$ngControllerController", l), r.children().data("$ngControllerController", l)
                    }
                    i[s.resolveAs || "$resolve"] = o, a(i)
                }
            }
        }
        var r = e.isArray,
            s = e.isObject,
            o = e.module("ngRoute", ["ng"]).provider("$route", function () {
                function t(t, n) {
                    return e.extend(Object.create(t), n)
                }

                function n(t, e) {
                    var n = e.caseInsensitiveMatch,
                        i = {
                            originalPath: t,
                            regexp: t
                        },
                        r = i.keys = [];
                    return t = t.replace(/([().])/g, "\\$1").replace(/(\/)?:(\w+)(\*\?|[\?\*])?/g, function (t, e, n, i) {
                        return t = "?" === i || "*?" === i ? "?" : null, i = "*" === i || "*?" === i ? "*" : null, r.push({
                            name: n,
                            optional: !!t
                        }), e = e || "", "" + (t ? "" : e) + "(?:" + (t ? e : "") + (i && "(.+?)" || "([^/]+)") + (t || "") + ")" + (t || "")
                    }).replace(/([\/$\*])/g, "\\$1"), i.regexp = new RegExp("^" + t + "$", n ? "i" : ""), i
                }
                var i = {};
                this.when = function (t, o) {
                        var a;
                        if (a = void 0, r(o)) {
                            a = a || [];
                            for (var l = 0, u = o.length; u > l; l++) a[l] = o[l]
                        } else if (s(o))
                            for (l in a = a || {}, o)("$" !== l.charAt(0) || "$" !== l.charAt(1)) && (a[l] = o[l]);
                        return a = a || o, e.isUndefined(a.reloadOnSearch) && (a.reloadOnSearch = !0), e.isUndefined(a.caseInsensitiveMatch) && (a.caseInsensitiveMatch = this.caseInsensitiveMatch), i[t] = e.extend(a, t && n(t, a)), t && (l = "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t + "/", i[l] = e.extend({
                            redirectTo: t
                        }, n(l, a))), this
                    }, this.caseInsensitiveMatch = !1,
                    this.otherwise = function (t) {
                        return "string" == typeof t && (t = {
                            redirectTo: t
                        }), this.when(null, t), this
                    }, this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$templateRequest", "$sce", function (n, r, s, o, l, u, c) {
                        function h(t) {
                            var i = $.current;
                            (y = (v = m()) && i && v.$$route === i.$$route && e.equals(v.pathParams, i.pathParams) && !v.reloadOnSearch && !b) || !i && !v || n.$broadcast("$routeChangeStart", v, i).defaultPrevented && t && t.preventDefault()
                        }

                        function d() {
                            var t = $.current,
                                i = v;
                            y ? (t.params = i.params, e.copy(t.params, s), n.$broadcast("$routeUpdate", t)) : (i || t) && (b = !1, ($.current = i) && i.redirectTo && (e.isString(i.redirectTo) ? r.path(g(i.redirectTo, i.params)).search(i.params).replace() : r.url(i.redirectTo(i.pathParams, r.path(), r.search())).replace()), o.when(i).then(f).then(function (r) {
                                i == $.current && (i && (i.locals = r, e.copy(i.params, s)), n.$broadcast("$routeChangeSuccess", i, t))
                            }, function (e) {
                                i == $.current && n.$broadcast("$routeChangeError", i, t, e)
                            }))
                        }

                        function f(t) {
                            if (t) {
                                var n = e.extend({}, t.resolve);
                                return e.forEach(n, function (t, i) {
                                    n[i] = e.isString(t) ? l.get(t) : l.invoke(t, null, null, i)
                                }), t = p(t), e.isDefined(t) && (n.$template = t), o.all(n)
                            }
                        }

                        function p(t) {
                            var n, i;
                            return e.isDefined(n = t.template) ? e.isFunction(n) && (n = n(t.params)) : e.isDefined(i = t.templateUrl) && (e.isFunction(i) && (i = i(t.params)), e.isDefined(i) && (t.loadedTemplateUrl = c.valueOf(i), n = u(i))), n
                        }

                        function m() {
                            var n, s;
                            return e.forEach(i, function (i, o) {
                                var a;
                                if (a = !s) {
                                    var l = r.path();
                                    a = i.keys;
                                    var u = {};
                                    if (i.regexp)
                                        if (l = i.regexp.exec(l)) {
                                            for (var c = 1, h = l.length; h > c; ++c) {
                                                var d = a[c - 1],
                                                    f = l[c];
                                                d && f && (u[d.name] = f)
                                            }
                                            a = u
                                        } else a = null;
                                    else a = null;
                                    a = n = a
                                }
                                a && (s = t(i, {
                                    params: e.extend({}, r.search(), n),
                                    pathParams: n
                                }), s.$$route = i)
                            }), s || i[null] && t(i[null], {
                                params: {},
                                pathParams: {}
                            })
                        }

                        function g(t, n) {
                            var i = [];
                            return e.forEach((t || "").split(":"), function (t, e) {
                                if (0 === e) i.push(t);
                                else {
                                    var r = t.match(/(\w+)(?:[?*])?(.*)/),
                                        s = r[1];
                                    i.push(n[s]), i.push(r[2] || ""), delete n[s]
                                }
                            }), i.join("")
                        }
                        var v, y, b = !1,
                            $ = {
                                routes: i,
                                reload: function () {
                                    b = !0;
                                    var t = {
                                        defaultPrevented: !1,
                                        preventDefault: function () {
                                            this.defaultPrevented = !0, b = !1
                                        }
                                    };
                                    n.$evalAsync(function () {
                                        h(t), t.defaultPrevented || d()
                                    })
                                },
                                updateParams: function (t) {
                                    if (!this.current || !this.current.$$route) throw a("norout");
                                    t = e.extend({}, this.current.params, t), r.path(g(this.current.$$route.originalPath, t)), r.search(t)
                                }
                            };
                        return n.$on("$locationChangeStart", h), n.$on("$locationChangeSuccess", d), $
                    }]
            }),
            a = e.$$minErr("ngRoute");
        o.provider("$routeParams", function () {
            this.$get = function () {
                return {}
            }
        }), o.directive("ngView", n), o.directive("ngView", i), n.$inject = ["$route", "$anchorScroll", "$animate"], i.$inject = ["$compile", "$controller", "$route"]
    }(window, window.angular), ! function (t, e, n) {
        "use strict";
        ! function i(t, e, n) {
            function r(o, a) {
                if (!e[o]) {
                    if (!t[o]) {
                        var l = "function" == typeof require && require;
                        if (!a && l) return l(o, !0);
                        if (s) return s(o, !0);
                        var u = new Error("Cannot find module '" + o + "'");
                        throw u.code = "MODULE_NOT_FOUND", u
                    }
                    var c = e[o] = {
                        exports: {}
                    };
                    t[o][0].call(c.exports, function (e) {
                        var n = t[o][1][e];
                        return r(n ? n : e)
                    }, c, c.exports, i, t, e, n)
                }
                return e[o].exports
            }
            for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
            return r
        }({
            1: [function (i, r, s) {
                var o = function (t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                };
                Object.defineProperty(s, "__esModule", {
                    value: !0
                });
                var a, l, u, c, h = i("./modules/handle-dom"),
                    d = i("./modules/utils"),
                    f = i("./modules/handle-swal-dom"),
                    p = i("./modules/handle-click"),
                    m = i("./modules/handle-key"),
                    g = o(m),
                    v = i("./modules/default-params"),
                    y = o(v),
                    b = i("./modules/set-params"),
                    $ = o(b);
                s["default"] = u = c = function () {
                    function i(t) {
                        var e = r;
                        return e[t] === n ? y["default"][t] : e[t]
                    }
                    var r = arguments[0];
                    if (h.addClass(e.body, "stop-scrolling"), f.resetInput(), r === n) return d.logStr("SweetAlert expects at least 1 attribute!"), !1;
                    var s = d.extend({}, y["default"]);
                    switch (typeof r) {
                    case "string":
                        s.title = r, s.text = arguments[1] || "", s.type = arguments[2] || "";
                        break;
                    case "object":
                        if (r.title === n) return d.logStr('Missing "title" argument!'), !1;
                        s.title = r.title;
                        for (var o in y["default"]) s[o] = i(o);
                        s.confirmButtonText = s.showCancelButton ? "Confirm" : y["default"].confirmButtonText, s.confirmButtonText = i("confirmButtonText"), s.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return d.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof r), !1
                    }
                    $["default"](s), f.fixVerticalPosition(), f.openModal(arguments[1]);
                    for (var u = f.getModal(), m = u.querySelectorAll("button"), v = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], b = function (t) {
                            return p.handleButton(t, s, u)
                        }, _ = 0; _ < m.length; _++)
                        for (var w = 0; w < v.length; w++) {
                            var x = v[w];
                            m[_][x] = b
                        }
                    f.getOverlay().onclick = b, a = t.onkeydown;
                    var C = function (t) {
                        return g["default"](t, s, u)
                    };
                    t.onkeydown = C, t.onfocus = function () {
                        setTimeout(function () {
                            l !== n && (l.focus(), l = n)
                        }, 0)
                    }, c.enableButtons()
                }, u.setDefaults = c.setDefaults = function (t) {
                    if (!t) throw new Error("userParams is required");
                    if ("object" != typeof t) throw new Error("userParams has to be a object");
                    d.extend(y["default"], t)
                }, u.close = c.close = function () {
                    var i = f.getModal();
                    h.fadeOut(f.getOverlay(), 5), h.fadeOut(i, 5), h.removeClass(i, "showSweetAlert"), h.addClass(i, "hideSweetAlert"), h.removeClass(i, "visible");
                    var r = i.querySelector(".sa-icon.sa-success");
                    h.removeClass(r, "animate"), h.removeClass(r.querySelector(".sa-tip"), "animateSuccessTip"), h.removeClass(r.querySelector(".sa-long"), "animateSuccessLong");
                    var s = i.querySelector(".sa-icon.sa-error");
                    h.removeClass(s, "animateErrorIcon"), h.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
                    var o = i.querySelector(".sa-icon.sa-warning");
                    return h.removeClass(o, "pulseWarning"), h.removeClass(o.querySelector(".sa-body"), "pulseWarningIns"), h.removeClass(o.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
                        var t = i.getAttribute("data-custom-class");
                        h.removeClass(i, t)
                    }, 300), h.removeClass(e.body, "stop-scrolling"), t.onkeydown = a, t.previousActiveElement && t.previousActiveElement.focus(), l = n, clearTimeout(i.timeout), !0
                }, u.showInputError = c.showInputError = function (t) {
                    var e = f.getModal(),
                        n = e.querySelector(".sa-input-error");
                    h.addClass(n, "show");
                    var i = e.querySelector(".sa-error-container");
                    h.addClass(i, "show"), i.querySelector("p").innerHTML = t, setTimeout(function () {
                        u.enableButtons()
                    }, 1), e.querySelector("input").focus()
                }, u.resetInputError = c.resetInputError = function (t) {
                    if (t && 13 === t.keyCode) return !1;
                    var e = f.getModal(),
                        n = e.querySelector(".sa-input-error");
                    h.removeClass(n, "show");
                    var i = e.querySelector(".sa-error-container");
                    h.removeClass(i, "show")
                }, u.disableButtons = c.disableButtons = function () {
                    var t = f.getModal(),
                        e = t.querySelector("button.confirm"),
                        n = t.querySelector("button.cancel");
                    e.disabled = !0, n.disabled = !0
                }, u.enableButtons = c.enableButtons = function () {
                    var t = f.getModal(),
                        e = t.querySelector("button.confirm"),
                        n = t.querySelector("button.cancel");
                    e.disabled = !1, n.disabled = !1
                }, "undefined" != typeof t ? t.sweetAlert = t.swal = u : d.logStr("SweetAlert is a frontend module!"), r.exports = s["default"]
            }, {
                "./modules/default-params": 2,
                "./modules/handle-click": 3,
                "./modules/handle-dom": 4,
                "./modules/handle-key": 5,
                "./modules/handle-swal-dom": 6,
                "./modules/set-params": 8,
                "./modules/utils": 9
            }],
            2: [function (t, e, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = {
                    title: "",
                    text: "",
                    type: null,
                    allowOutsideClick: !1,
                    showConfirmButton: !0,
                    showCancelButton: !1,
                    closeOnConfirm: !0,
                    closeOnCancel: !0,
                    confirmButtonText: "OK",
                    confirmButtonColor: "#8CD4F5",
                    cancelButtonText: "Cancel",
                    imageUrl: null,
                    imageSize: null,
                    timer: null,
                    customClass: "",
                    html: !1,
                    animation: !0,
                    allowEscapeKey: !0,
                    inputType: "text",
                    inputPlaceholder: "",
                    inputValue: "",
                    showLoaderOnConfirm: !1
                };
                n["default"] = i, e.exports = n["default"]
            }, {}],
            3: [function (e, n, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = e("./utils"),
                    s = (e("./handle-swal-dom"), e("./handle-dom")),
                    o = function (e, n, i) {
                        function o(t) {
                            p && n.confirmButtonColor && (f.style.backgroundColor = t)
                        }
                        var u, c, h, d = e || t.event,
                            f = d.target || d.srcElement,
                            p = -1 !== f.className.indexOf("confirm"),
                            m = -1 !== f.className.indexOf("sweet-overlay"),
                            g = s.hasClass(i, "visible"),
                            v = n.doneFunction && "true" === i.getAttribute("data-has-done-function");
                        switch (p && n.confirmButtonColor && (u = n.confirmButtonColor, c = r.colorLuminance(u, -.04), h = r.colorLuminance(u, -.14)), d.type) {
                        case "mouseover":
                            o(c);
                            break;
                        case "mouseout":
                            o(u);
                            break;
                        case "mousedown":
                            o(h);
                            break;
                        case "mouseup":
                            o(c);
                            break;
                        case "focus":
                            var y = i.querySelector("button.confirm"),
                                b = i.querySelector("button.cancel");
                            p ? b.style.boxShadow = "none" : y.style.boxShadow = "none";
                            break;
                        case "click":
                            var $ = i === f,
                                _ = s.isDescendant(i, f);
                            if (!$ && !_ && g && !n.allowOutsideClick) break;
                            p && v && g ? a(i, n) : v && g || m ? l(i, n) : s.isDescendant(i, f) && "BUTTON" === f.tagName && sweetAlert.close()
                        }
                    },
                    a = function (t, e) {
                        var n = !0;
                        s.hasClass(t, "show-input") && (n = t.querySelector("input").value, n || (n = "")), e.doneFunction(n), e.closeOnConfirm && sweetAlert.close(), e.showLoaderOnConfirm && sweetAlert.disableButtons()
                    },
                    l = function (t, e) {
                        var n = String(e.doneFunction).replace(/\s/g, ""),
                            i = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                        i && e.doneFunction(!1), e.closeOnCancel && sweetAlert.close()
                    };
                i["default"] = {
                    handleButton: o,
                    handleConfirm: a,
                    handleCancel: l
                }, n.exports = i["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            4: [function (n, i, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = function (t, e) {
                        return new RegExp(" " + e + " ").test(" " + t.className + " ")
                    },
                    o = function (t, e) {
                        s(t, e) || (t.className += " " + e)
                    },
                    a = function (t, e) {
                        var n = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
                        if (s(t, e)) {
                            for (; n.indexOf(" " + e + " ") >= 0;) n = n.replace(" " + e + " ", " ");
                            t.className = n.replace(/^\s+|\s+$/g, "")
                        }
                    },
                    l = function (t) {
                        var n = e.createElement("div");
                        return n.appendChild(e.createTextNode(t)), n.innerHTML
                    },
                    u = function (t) {
                        t.style.opacity = "", t.style.display = "block"
                    },
                    c = function (t) {
                        if (t && !t.length) return u(t);
                        for (var e = 0; e < t.length; ++e) u(t[e])
                    },
                    h = function (t) {
                        t.style.opacity = "", t.style.display = "none"
                    },
                    d = function (t) {
                        if (t && !t.length) return h(t);
                        for (var e = 0; e < t.length; ++e) h(t[e])
                    },
                    f = function (t, e) {
                        for (var n = e.parentNode; null !== n;) {
                            if (n === t) return !0;
                            n = n.parentNode
                        }
                        return !1
                    },
                    p = function (t) {
                        t.style.left = "-9999px", t.style.display = "block";
                        var e, n = t.clientHeight;
                        return e = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(t).getPropertyValue("padding-top"), 10) : parseInt(t.currentStyle.padding), t.style.left = "", t.style.display = "none", "-" + parseInt((n + e) / 2) + "px"
                    },
                    m = function (t, e) {
                        if (+t.style.opacity < 1) {
                            e = e || 16, t.style.opacity = 0, t.style.display = "block";
                            var n = +new Date,
                                i = function (t) {
                                    function e() {
                                        return t.apply(this, arguments)
                                    }
                                    return e.toString = function () {
                                        return t.toString()
                                    }, e
                                }(function () {
                                    t.style.opacity = +t.style.opacity + (new Date - n) / 100, n = +new Date, +t.style.opacity < 1 && setTimeout(i, e)
                                });
                            i()
                        }
                        t.style.display = "block"
                    },
                    g = function (t, e) {
                        e = e || 16, t.style.opacity = 1;
                        var n = +new Date,
                            i = function (t) {
                                function e() {
                                    return t.apply(this, arguments)
                                }
                                return e.toString = function () {
                                    return t.toString()
                                }, e
                            }(function () {
                                t.style.opacity = +t.style.opacity - (new Date - n) / 100, n = +new Date, +t.style.opacity > 0 ? setTimeout(i, e) : t.style.display = "none"
                            });
                        i()
                    },
                    v = function (n) {
                        if ("function" == typeof MouseEvent) {
                            var i = new MouseEvent("click", {
                                view: t,
                                bubbles: !1,
                                cancelable: !0
                            });
                            n.dispatchEvent(i)
                        } else if (e.createEvent) {
                            var r = e.createEvent("MouseEvents");
                            r.initEvent("click", !1, !1), n.dispatchEvent(r)
                        } else e.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
                    },
                    y = function (e) {
                        "function" == typeof e.stopPropagation ? (e.stopPropagation(), e.preventDefault()) : t.event && t.event.hasOwnProperty("cancelBubble") && (t.event.cancelBubble = !0)
                    };
                r.hasClass = s, r.addClass = o, r.removeClass = a, r.escapeHtml = l, r._show = u, r.show = c, r._hide = h, r.hide = d, r.isDescendant = f, r.getTopMargin = p, r.fadeIn = m, r.fadeOut = g, r.fireClick = v, r.stopEventPropagation = y
            }, {}],
            5: [function (e, i, r) {
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var s = e("./handle-dom"),
                    o = e("./handle-swal-dom"),
                    a = function (e, i, r) {
                        var a = e || t.event,
                            l = a.keyCode || a.which,
                            u = r.querySelector("button.confirm"),
                            c = r.querySelector("button.cancel"),
                            h = r.querySelectorAll("button[tabindex]");
                        if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                            for (var d = a.target || a.srcElement, f = -1, p = 0; p < h.length; p++)
                                if (d === h[p]) {
                                    f = p;
                                    break
                                }
                            9 === l ? (d = -1 === f ? u : f === h.length - 1 ? h[0] : h[f + 1], s.stopEventPropagation(a), d.focus(), i.confirmButtonColor && o.setFocusStyle(d, i.confirmButtonColor)) : 13 === l ? ("INPUT" === d.tagName && (d = u, u.focus()), d = -1 === f ? u : n) : 27 === l && i.allowEscapeKey === !0 ? (d = c, s.fireClick(d, a)) : d = n
                        }
                    };
                r["default"] = a, i.exports = r["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6
            }],
            6: [function (n, i, r) {
                var s = function (t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                };
                Object.defineProperty(r, "__esModule", {
                    value: !0
                });
                var o = n("./utils"),
                    a = n("./handle-dom"),
                    l = n("./default-params"),
                    u = s(l),
                    c = n("./injected-html"),
                    h = s(c),
                    d = ".sweet-alert",
                    f = ".sweet-overlay",
                    p = function () {
                        var t = e.createElement("div");
                        for (t.innerHTML = h["default"]; t.firstChild;) e.body.appendChild(t.firstChild)
                    },
                    m = function (t) {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function () {
                            return t.toString()
                        }, e
                    }(function () {
                        var t = e.querySelector(d);
                        return t || (p(), t = m()), t
                    }),
                    g = function () {
                        var t = m();
                        return t ? t.querySelector("input") : void 0
                    },
                    v = function () {
                        return e.querySelector(f)
                    },
                    y = function (t, e) {
                        var n = o.hexToRgb(e);
                        t.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                    },
                    b = function (n) {
                        var i = m();
                        a.fadeIn(v(), 10), a.show(i), a.addClass(i, "showSweetAlert"), a.removeClass(i, "hideSweetAlert"), t.previousActiveElement = e.activeElement;
                        var r = i.querySelector("button.confirm");
                        r.focus(), setTimeout(function () {
                            a.addClass(i, "visible")
                        }, 500);
                        var s = i.getAttribute("data-timer");
                        if ("null" !== s && "" !== s) {
                            var o = n;
                            i.timeout = setTimeout(function () {
                                var t = (o || null) && "true" === i.getAttribute("data-has-done-function");
                                t ? o(null) : sweetAlert.close()
                            }, s)
                        }
                    },
                    $ = function () {
                        var t = m(),
                            e = g();
                        a.removeClass(t, "show-input"), e.value = u["default"].inputValue, e.setAttribute("type", u["default"].inputType), e.setAttribute("placeholder", u["default"].inputPlaceholder), _()
                    },
                    _ = function (t) {
                        if (t && 13 === t.keyCode) return !1;
                        var e = m(),
                            n = e.querySelector(".sa-input-error");
                        a.removeClass(n, "show");
                        var i = e.querySelector(".sa-error-container");
                        a.removeClass(i, "show")
                    },
                    w = function () {
                        var t = m();
                        t.style.marginTop = a.getTopMargin(m())
                    };
                r.sweetAlertInitialize = p, r.getModal = m, r.getOverlay = v, r.getInput = g, r.setFocusStyle = y, r.openModal = b, r.resetInput = $, r.resetInputError = _, r.fixVerticalPosition = w
            }, {
                "./default-params": 2,
                "./handle-dom": 4,
                "./injected-html": 7,
                "./utils": 9
            }],
            7: [function (t, e, n) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
                n["default"] = i, e.exports = n["default"]
            }, {}],
            8: [function (t, e, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = t("./utils"),
                    s = t("./handle-swal-dom"),
                    o = t("./handle-dom"),
                    a = ["error", "warning", "info", "success", "input", "prompt"],
                    l = function (t) {
                        var e = s.getModal(),
                            i = e.querySelector("h2"),
                            l = e.querySelector("p"),
                            u = e.querySelector("button.cancel"),
                            c = e.querySelector("button.confirm");
                        if (i.innerHTML = t.html ? t.title : o.escapeHtml(t.title).split("\n").join("<br>"), l.innerHTML = t.html ? t.text : o.escapeHtml(t.text || "").split("\n").join("<br>"), t.text && o.show(l), t.customClass) o.addClass(e, t.customClass), e.setAttribute("data-custom-class", t.customClass);
                        else {
                            var h = e.getAttribute("data-custom-class");
                            o.removeClass(e, h), e.setAttribute("data-custom-class", "")
                        }
                        if (o.hide(e.querySelectorAll(".sa-icon")), t.type && !r.isIE8()) {
                            var d = function () {
                                for (var i = !1, r = 0; r < a.length; r++)
                                    if (t.type === a[r]) {
                                        i = !0;
                                        break
                                    }
                                if (!i) return logStr("Unknown alert type: " + t.type), {
                                    v: !1
                                };
                                var l = ["success", "error", "warning", "info"],
                                    u = n; - 1 !== l.indexOf(t.type) && (u = e.querySelector(".sa-icon.sa-" + t.type), o.show(u));
                                var c = s.getInput();
                                switch (t.type) {
                                case "success":
                                    o.addClass(u, "animate"), o.addClass(u.querySelector(".sa-tip"), "animateSuccessTip"), o.addClass(u.querySelector(".sa-long"), "animateSuccessLong");
                                    break;
                                case "error":
                                    o.addClass(u, "animateErrorIcon"), o.addClass(u.querySelector(".sa-x-mark"), "animateXMark");
                                    break;
                                case "warning":
                                    o.addClass(u, "pulseWarning"), o.addClass(u.querySelector(".sa-body"), "pulseWarningIns"), o.addClass(u.querySelector(".sa-dot"), "pulseWarningIns");
                                    break;
                                case "input":
                                case "prompt":
                                    c.setAttribute("type", t.inputType), c.value = t.inputValue, c.setAttribute("placeholder", t.inputPlaceholder), o.addClass(e, "show-input"), setTimeout(function () {
                                        c.focus(), c.addEventListener("keyup", swal.resetInputError)
                                    }, 400)
                                }
                            }();
                            if ("object" == typeof d) return d.v
                        }
                        if (t.imageUrl) {
                            var f = e.querySelector(".sa-icon.sa-custom");
                            f.style.backgroundImage = "url(" + t.imageUrl + ")", o.show(f);
                            var p = 80,
                                m = 80;
                            if (t.imageSize) {
                                var g = t.imageSize.toString().split("x"),
                                    v = g[0],
                                    y = g[1];
                                v && y ? (p = v, m = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
                            }
                            f.setAttribute("style", f.getAttribute("style") + "width:" + p + "px; height:" + m + "px")
                        }
                        e.setAttribute("data-has-cancel-button", t.showCancelButton), t.showCancelButton ? u.style.display = "inline-block" : o.hide(u), e.setAttribute("data-has-confirm-button", t.showConfirmButton), t.showConfirmButton ? c.style.display = "inline-block" : o.hide(c), t.cancelButtonText && (u.innerHTML = o.escapeHtml(t.cancelButtonText)), t.confirmButtonText && (c.innerHTML = o.escapeHtml(t.confirmButtonText)), t.confirmButtonColor && (c.style.backgroundColor = t.confirmButtonColor, c.style.borderLeftColor = t.confirmLoadingButtonColor, c.style.borderRightColor = t.confirmLoadingButtonColor, s.setFocusStyle(c, t.confirmButtonColor)), e.setAttribute("data-allow-outside-click", t.allowOutsideClick);
                        var b = t.doneFunction ? !0 : !1;
                        e.setAttribute("data-has-done-function", b), t.animation ? "string" == typeof t.animation ? e.setAttribute("data-animation", t.animation) : e.setAttribute("data-animation", "pop") : e.setAttribute("data-animation", "none"), e.setAttribute("data-timer", t.timer)
                    };
                i["default"] = l, e.exports = i["default"]
            }, {
                "./handle-dom": 4,
                "./handle-swal-dom": 6,
                "./utils": 9
            }],
            9: [function (e, n, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = function (t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                        return t
                    },
                    s = function (t) {
                        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                        return e ? parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) : null
                    },
                    o = function () {
                        return t.attachEvent && !t.addEventListener
                    },
                    a = function (e) {
                        t.console && t.console.log("SweetAlert: " + e)
                    },
                    l = function (t, e) {
                        t = String(t).replace(/[^0-9a-f]/gi, ""), t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), e = e || 0;
                        var n, i, r = "#";
                        for (i = 0; 3 > i; i++) n = parseInt(t.substr(2 * i, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * e), 255)).toString(16), r += ("00" + n).substr(n.length);
                        return r
                    };
                i.extend = r, i.hexToRgb = s, i.isIE8 = o, i.logStr = a, i.colorLuminance = l
            }, {}]
        }, {}, [1]), "function" == typeof define && define.amd ? define(function () {
            return sweetAlert
        }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
    }(window, document),
    function (t, e) {
        "use strict";
        var n = {
            pulses: 1,
            interval: 0,
            returnDelay: 0,
            duration: 500
        };
        t.fn.pulse = function (i, r, s) {
            var o = "destroy" === i;
            return "function" == typeof r && (s = r, r = {}), r = t.extend({}, n, r), r.interval >= 0 || (r.interval = 0), r.returnDelay >= 0 || (r.returnDelay = 0), r.duration >= 0 || (r.duration = 500), r.pulses >= -1 || (r.pulses = 1), "function" != typeof s && (s = function () {}), this.each(function () {
                function n() {
                    return void 0 === l.data("pulse") || l.data("pulse").stop ? void 0 : r.pulses > -1 && ++h > r.pulses ? s.apply(l) : void l.animate(i, f)
                }
                var a, l = t(this),
                    u = {},
                    c = l.data("pulse") || {};
                c.stop = o, l.data("pulse", c);
                for (a in i) i.hasOwnProperty(a) && (u[a] = l.css(a));
                var h = 0,
                    d = t.extend({}, r);
                d.duration = r.duration / 2, d.complete = function () {
                    e.setTimeout(n, r.interval)
                };
                var f = t.extend({}, r);
                f.duration = r.duration / 2, f.complete = function () {
                    e.setTimeout(function () {
                        l.animate(u, d)
                    }, r.returnDelay)
                }, n()
            })
        }
    }(jQuery, window, document), ! function (t) {
        function e(t, e) {
            if (!(t.originalEvent.touches.length > 1)) {
                t.preventDefault();
                var n = t.originalEvent.changedTouches[0],
                    i = document.createEvent("MouseEvents");
                i.initMouseEvent(e, !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(i)
            }
        }
        if (t.support.touch = "ontouchend" in document, t.support.touch) {
            var n, i = t.ui.mouse.prototype,
                r = i._mouseInit,
                s = i._mouseDestroy;
            i._touchStart = function (t) {
                var i = this;
                !n && i._mouseCapture(t.originalEvent.changedTouches[0]) && (n = !0, i._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
            }, i._touchMove = function (t) {
                n && (this._touchMoved = !0, e(t, "mousemove"))
            }, i._touchEnd = function (t) {
                n && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), n = !1)
            }, i._mouseInit = function () {
                var e = this;
                e.element.bind({
                    touchstart: t.proxy(e, "_touchStart"),
                    touchmove: t.proxy(e, "_touchMove"),
                    touchend: t.proxy(e, "_touchEnd")
                }), r.call(e)
            }, i._mouseDestroy = function () {
                var e = this;
                e.element.unbind({
                    touchstart: t.proxy(e, "_touchStart"),
                    touchmove: t.proxy(e, "_touchMove"),
                    touchend: t.proxy(e, "_touchEnd")
                }), s.call(e)
            }
        }
    }(jQuery);
