function qt(i) {
    return i + .5 | 0
}
var ft = (i, t, e) => Math.max(Math.min(i, e), t);
function Xt(i) {
    return ft(qt(i * 2.55), 0, 255)
}
function gt(i) {
    return ft(qt(i * 255), 0, 255)
}
function ot(i) {
    return ft(qt(i / 2.55) / 100, 0, 1)
}
function cs(i) {
    return ft(qt(i * 100), 0, 100)
}
var J = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15
    },
    ai = [..."0123456789ABCDEF"],
    bo = i => ai[i & 15],
    xo = i => ai[(i & 240) >> 4] + ai[i & 15],
    ye = i => (i & 240) >> 4 === (i & 15),
    _o = i => ye(i.r) && ye(i.g) && ye(i.b) && ye(i.a);
function yo(i) {
    var t = i.length,
        e;
    return i[0] === "#" && (t === 4 || t === 5 ? e = {
        r: 255 & J[i[1]] * 17,
        g: 255 & J[i[2]] * 17,
        b: 255 & J[i[3]] * 17,
        a: t === 5 ? J[i[4]] * 17 : 255
    } : (t === 7 || t === 9) && (e = {
        r: J[i[1]] << 4 | J[i[2]],
        g: J[i[3]] << 4 | J[i[4]],
        b: J[i[5]] << 4 | J[i[6]],
        a: t === 9 ? J[i[7]] << 4 | J[i[8]] : 255
    })), e
}
var vo = (i, t) => i < 255 ? t(i) : "";
function Mo(i) {
    var t = _o(i) ? bo : xo;
    return i ? "#" + t(i.r) + t(i.g) + t(i.b) + vo(i.a, t) : void 0
}
var ko = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function fs(i, t, e) {
    let s = t * Math.min(e, 1 - e),
        n = (o, a=(o + i / 30) % 12) => e - s * Math.max(Math.min(a - 3, 9 - a, 1), -1);
    return [n(0), n(8), n(4)]
}
function So(i, t, e) {
    let s = (n, o=(n + i / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
    return [s(5), s(3), s(1)]
}
function wo(i, t, e) {
    let s = fs(i, 1, .5),
        n;
    for (t + e > 1 && (n = 1 / (t + e), t *= n, e *= n), n = 0; n < 3; n++)
        s[n] *= 1 - t - e,
        s[n] += t;
    return s
}
function Po(i, t, e, s, n) {
    return i === n ? (t - e) / s + (t < e ? 6 : 0) : t === n ? (e - i) / s + 2 : (i - t) / s + 4
}
function ri(i) {
    let e = i.r / 255,
        s = i.g / 255,
        n = i.b / 255,
        o = Math.max(e, s, n),
        a = Math.min(e, s, n),
        r = (o + a) / 2,
        l,
        c,
        h;
    return o !== a && (h = o - a, c = r > .5 ? h / (2 - o - a) : h / (o + a), l = Po(e, s, n, h, o), l = l * 60 + .5), [l | 0, c || 0, r]
}
function li(i, t, e, s) {
    return (Array.isArray(t) ? i(t[0], t[1], t[2]) : i(t, e, s)).map(gt)
}
function ci(i, t, e) {
    return li(fs, i, t, e)
}
function Do(i, t, e) {
    return li(wo, i, t, e)
}
function Co(i, t, e) {
    return li(So, i, t, e)
}
function gs(i) {
    return (i % 360 + 360) % 360
}
function Oo(i) {
    let t = ko.exec(i),
        e = 255,
        s;
    if (!t)
        return;
    t[5] !== s && (e = t[6] ? Xt(+t[5]) : gt(+t[5]));
    let n = gs(+t[2]),
        o = +t[3] / 100,
        a = +t[4] / 100;
    return t[1] === "hwb" ? s = Do(n, o, a) : t[1] === "hsv" ? s = Co(n, o, a) : s = ci(n, o, a), {
        r: s[0],
        g: s[1],
        b: s[2],
        a: e
    }
}
function Ao(i, t) {
    var e = ri(i);
    e[0] = gs(e[0] + t),
    e = ci(e),
    i.r = e[0],
    i.g = e[1],
    i.b = e[2]
}
function To(i) {
    if (!i)
        return;
    let t = ri(i),
        e = t[0],
        s = cs(t[1]),
        n = cs(t[2]);
    return i.a < 255 ? `hsla(${e}, ${s}%, ${n}%, ${ot(i.a)})` : `hsl(${e}, ${s}%, ${n}%)`
}
var hs = {
        x: "dark",
        Z: "light",
        Y: "re",
        X: "blu",
        W: "gr",
        V: "medium",
        U: "slate",
        A: "ee",
        T: "ol",
        S: "or",
        B: "ra",
        C: "lateg",
        D: "ights",
        R: "in",
        Q: "turquois",
        E: "hi",
        P: "ro",
        O: "al",
        N: "le",
        M: "de",
        L: "yello",
        F: "en",
        K: "ch",
        G: "arks",
        H: "ea",
        I: "ightg",
        J: "wh"
    },
    ds = {
        OiceXe: "f0f8ff",
        antiquewEte: "faebd7",
        aqua: "ffff",
        aquamarRe: "7fffd4",
        azuY: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "0",
        blanKedOmond: "ffebcd",
        Xe: "ff",
        XeviTet: "8a2be2",
        bPwn: "a52a2a",
        burlywood: "deb887",
        caMtXe: "5f9ea0",
        KartYuse: "7fff00",
        KocTate: "d2691e",
        cSO: "ff7f50",
        cSnflowerXe: "6495ed",
        cSnsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "ffff",
        xXe: "8b",
        xcyan: "8b8b",
        xgTMnPd: "b8860b",
        xWay: "a9a9a9",
        xgYF: "6400",
        xgYy: "a9a9a9",
        xkhaki: "bdb76b",
        xmagFta: "8b008b",
        xTivegYF: "556b2f",
        xSange: "ff8c00",
        xScEd: "9932cc",
        xYd: "8b0000",
        xsOmon: "e9967a",
        xsHgYF: "8fbc8f",
        xUXe: "483d8b",
        xUWay: "2f4f4f",
        xUgYy: "2f4f4f",
        xQe: "ced1",
        xviTet: "9400d3",
        dAppRk: "ff1493",
        dApskyXe: "bfff",
        dimWay: "696969",
        dimgYy: "696969",
        dodgerXe: "1e90ff",
        fiYbrick: "b22222",
        flSOwEte: "fffaf0",
        foYstWAn: "228b22",
        fuKsia: "ff00ff",
        gaRsbSo: "dcdcdc",
        ghostwEte: "f8f8ff",
        gTd: "ffd700",
        gTMnPd: "daa520",
        Way: "808080",
        gYF: "8000",
        gYFLw: "adff2f",
        gYy: "808080",
        honeyMw: "f0fff0",
        hotpRk: "ff69b4",
        RdianYd: "cd5c5c",
        Rdigo: "4b0082",
        ivSy: "fffff0",
        khaki: "f0e68c",
        lavFMr: "e6e6fa",
        lavFMrXsh: "fff0f5",
        lawngYF: "7cfc00",
        NmoncEffon: "fffacd",
        ZXe: "add8e6",
        ZcSO: "f08080",
        Zcyan: "e0ffff",
        ZgTMnPdLw: "fafad2",
        ZWay: "d3d3d3",
        ZgYF: "90ee90",
        ZgYy: "d3d3d3",
        ZpRk: "ffb6c1",
        ZsOmon: "ffa07a",
        ZsHgYF: "20b2aa",
        ZskyXe: "87cefa",
        ZUWay: "778899",
        ZUgYy: "778899",
        ZstAlXe: "b0c4de",
        ZLw: "ffffe0",
        lime: "ff00",
        limegYF: "32cd32",
        lRF: "faf0e6",
        magFta: "ff00ff",
        maPon: "800000",
        VaquamarRe: "66cdaa",
        VXe: "cd",
        VScEd: "ba55d3",
        VpurpN: "9370db",
        VsHgYF: "3cb371",
        VUXe: "7b68ee",
        VsprRggYF: "fa9a",
        VQe: "48d1cc",
        VviTetYd: "c71585",
        midnightXe: "191970",
        mRtcYam: "f5fffa",
        mistyPse: "ffe4e1",
        moccasR: "ffe4b5",
        navajowEte: "ffdead",
        navy: "80",
        Tdlace: "fdf5e6",
        Tive: "808000",
        TivedBb: "6b8e23",
        Sange: "ffa500",
        SangeYd: "ff4500",
        ScEd: "da70d6",
        pOegTMnPd: "eee8aa",
        pOegYF: "98fb98",
        pOeQe: "afeeee",
        pOeviTetYd: "db7093",
        papayawEp: "ffefd5",
        pHKpuff: "ffdab9",
        peru: "cd853f",
        pRk: "ffc0cb",
        plum: "dda0dd",
        powMrXe: "b0e0e6",
        purpN: "800080",
        YbeccapurpN: "663399",
        Yd: "ff0000",
        Psybrown: "bc8f8f",
        PyOXe: "4169e1",
        saddNbPwn: "8b4513",
        sOmon: "fa8072",
        sandybPwn: "f4a460",
        sHgYF: "2e8b57",
        sHshell: "fff5ee",
        siFna: "a0522d",
        silver: "c0c0c0",
        skyXe: "87ceeb",
        UXe: "6a5acd",
        UWay: "708090",
        UgYy: "708090",
        snow: "fffafa",
        sprRggYF: "ff7f",
        stAlXe: "4682b4",
        tan: "d2b48c",
        teO: "8080",
        tEstN: "d8bfd8",
        tomato: "ff6347",
        Qe: "40e0d0",
        viTet: "ee82ee",
        JHt: "f5deb3",
        wEte: "ffffff",
        wEtesmoke: "f5f5f5",
        Lw: "ffff00",
        LwgYF: "9acd32"
    };
function Lo() {
    let i = {},
        t = Object.keys(ds),
        e = Object.keys(hs),
        s,
        n,
        o,
        a,
        r;
    for (s = 0; s < t.length; s++) {
        for (a = r = t[s], n = 0; n < e.length; n++)
            o = e[n],
            r = r.replace(o, hs[o]);
        o = parseInt(ds[a], 16),
        i[r] = [o >> 16 & 255, o >> 8 & 255, o & 255]
    }
    return i
}
var ve;
function Ro(i) {
    ve || (ve = Lo(), ve.transparent = [0, 0, 0, 0]);
    let t = ve[i.toLowerCase()];
    return t && {
            r: t[0],
            g: t[1],
            b: t[2],
            a: t.length === 4 ? t[3] : 255
        }
}
var Eo = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function Fo(i) {
    let t = Eo.exec(i),
        e = 255,
        s,
        n,
        o;
    if (t) {
        if (t[7] !== s) {
            let a = +t[7];
            e = t[8] ? Xt(a) : ft(a * 255, 0, 255)
        }
        return s = +t[1], n = +t[3], o = +t[5], s = 255 & (t[2] ? Xt(s) : ft(s, 0, 255)), n = 255 & (t[4] ? Xt(n) : ft(n, 0, 255)), o = 255 & (t[6] ? Xt(o) : ft(o, 0, 255)), {
            r: s,
            g: n,
            b: o,
            a: e
        }
    }
}
function Io(i) {
    return i && (i.a < 255 ? `rgba(${i.r}, ${i.g}, ${i.b}, ${ot(i.a)})` : `rgb(${i.r}, ${i.g}, ${i.b})`)
}
var oi = i => i <= .0031308 ? i * 12.92 : Math.pow(i, 1 / 2.4) * 1.055 - .055,
    It = i => i <= .04045 ? i / 12.92 : Math.pow((i + .055) / 1.055, 2.4);
function zo(i, t, e) {
    let s = It(ot(i.r)),
        n = It(ot(i.g)),
        o = It(ot(i.b));
    return {
        r: gt(oi(s + e * (It(ot(t.r)) - s))),
        g: gt(oi(n + e * (It(ot(t.g)) - n))),
        b: gt(oi(o + e * (It(ot(t.b)) - o))),
        a: i.a + e * (t.a - i.a)
    }
}
function Me(i, t, e) {
    if (i) {
        let s = ri(i);
        s[t] = Math.max(0, Math.min(s[t] + s[t] * e, t === 0 ? 360 : 1)),
        s = ci(s),
        i.r = s[0],
        i.g = s[1],
        i.b = s[2]
    }
}
function ps(i, t) {
    return i && Object.assign(t || {}, i)
}
function us(i) {
    var t = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
    };
    return Array.isArray(i) ? i.length >= 3 && (t = {
        r: i[0],
        g: i[1],
        b: i[2],
        a: 255
    }, i.length > 3 && (t.a = gt(i[3]))) : (t = ps(i, {
        r: 0,
        g: 0,
        b: 0,
        a: 1
    }), t.a = gt(t.a)), t
}
function Bo(i) {
    return i.charAt(0) === "r" ? Fo(i) : Oo(i)
}
var Kt = class i {
    constructor(t)
    {
        if (t instanceof i)
            return t;
        let e = typeof t,
            s;
        e === "object" ? s = us(t) : e === "string" && (s = yo(t) || Ro(t) || Bo(t)),
        this._rgb = s,
        this._valid = !!s
    }
    get valid()
    {
        return this._valid
    }
    get rgb()
    {
        var t = ps(this._rgb);
        return t && (t.a = ot(t.a)), t
    }
    set rgb(t)
    {
        this._rgb = us(t)
    }
    rgbString()
    {
        return this._valid ? Io(this._rgb) : void 0
    }
    hexString()
    {
        return this._valid ? Mo(this._rgb) : void 0
    }
    hslString()
    {
        return this._valid ? To(this._rgb) : void 0
    }
    mix(t, e)
    {
        if (t) {
            let s = this.rgb,
                n = t.rgb,
                o,
                a = e === o ? .5 : e,
                r = 2 * a - 1,
                l = s.a - n.a,
                c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
            o = 1 - c,
            s.r = 255 & c * s.r + o * n.r + .5,
            s.g = 255 & c * s.g + o * n.g + .5,
            s.b = 255 & c * s.b + o * n.b + .5,
            s.a = a * s.a + (1 - a) * n.a,
            this.rgb = s
        }
        return this
    }
    interpolate(t, e)
    {
        return t && (this._rgb = zo(this._rgb, t._rgb, e)), this
    }
    clone()
    {
        return new i(this.rgb)
    }
    alpha(t)
    {
        return this._rgb.a = gt(t), this
    }
    clearer(t)
    {
        let e = this._rgb;
        return e.a *= 1 - t, this
    }
    greyscale()
    {
        let t = this._rgb,
            e = qt(t.r * .3 + t.g * .59 + t.b * .11);
        return t.r = t.g = t.b = e, this
    }
    opaquer(t)
    {
        let e = this._rgb;
        return e.a *= 1 + t, this
    }
    negate()
    {
        let t = this._rgb;
        return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this
    }
    lighten(t)
    {
        return Me(this._rgb, 2, t), this
    }
    darken(t)
    {
        return Me(this._rgb, 2, -t), this
    }
    saturate(t)
    {
        return Me(this._rgb, 1, t), this
    }
    desaturate(t)
    {
        return Me(this._rgb, 1, -t), this
    }
    rotate(t)
    {
        return Ao(this._rgb, t), this
    }
}
;
function it() {}
var Ps = (() => {
    let i = 0;
    return () => i++
})();
function A(i) {
    return i == null
}
function E(i) {
    if (Array.isArray && Array.isArray(i))
        return !0;
    let t = Object.prototype.toString.call(i);
    return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]"
}
function C(i) {
    return i !== null && Object.prototype.toString.call(i) === "[object Object]"
}
function F(i) {
    return (typeof i == "number" || i instanceof Number) && isFinite(+i)
}
function X(i, t) {
    return F(i) ? i : t
}
function P(i, t) {
    return typeof i > "u" ? t : i
}
var Ds = (i, t) => typeof i == "string" && i.endsWith("%") ? parseFloat(i) / 100 * t : +i;
function R(i, t, e) {
    if (i && typeof i.call == "function")
        return i.apply(e, t)
}
function L(i, t, e, s) {
    let n,
        o,
        a;
    if (E(i))
        if (o = i.length, s)
            for (n = o - 1; n >= 0; n--)
                t.call(e, i[n], n);
        else
            for (n = 0; n < o; n++)
                t.call(e, i[n], n);
    else if (C(i))
        for (a = Object.keys(i), o = a.length, n = 0; n < o; n++)
            t.call(e, i[a[n]], a[n])
}
function Jt(i, t) {
    let e,
        s,
        n,
        o;
    if (!i || !t || i.length !== t.length)
        return !1;
    for (e = 0, s = i.length; e < s; ++e)
        if (n = i[e], o = t[e], n.datasetIndex !== o.datasetIndex || n.index !== o.index)
            return !1;
    return !0
}
function Pe(i) {
    if (E(i))
        return i.map(Pe);
    if (C(i)) {
        let t = Object.create(null),
            e = Object.keys(i),
            s = e.length,
            n = 0;
        for (; n < s; ++n)
            t[e[n]] = Pe(i[e[n]]);
        return t
    }
    return i
}
function Cs(i) {
    return ["__proto__", "prototype", "constructor"].indexOf(i) === -1
}
function Vo(i, t, e, s) {
    if (!Cs(i))
        return;
    let n = t[i],
        o = e[i];
    C(n) && C(o) ? Bt(n, o, s) : t[i] = Pe(o)
}
function Bt(i, t, e) {
    let s = E(t) ? t : [t],
        n = s.length;
    if (!C(i))
        return i;
    e = e || {};
    let o = e.merger || Vo,
        a;
    for (let r = 0; r < n; ++r) {
        if (a = s[r], !C(a))
            continue;
        let l = Object.keys(a);
        for (let c = 0, h = l.length; c < h; ++c)
            o(l[c], i, a, e)
    }
    return i
}
function Wt(i, t) {
    return Bt(i, t, {
        merger: Wo
    })
}
function Wo(i, t, e) {
    if (!Cs(i))
        return;
    let s = t[i],
        n = e[i];
    C(s) && C(n) ? Wt(s, n) : Object.prototype.hasOwnProperty.call(t, i) || (t[i] = Pe(n))
}
var ms = {
    "": i => i,
    x: i => i.x,
    y: i => i.y
};
function No(i) {
    let t = i.split("."),
        e = [],
        s = "";
    for (let n of t)
        s += n,
        s.endsWith("\\") ? s = s.slice(0, -1) + "." : (e.push(s), s = "");
    return e
}
function Ho(i) {
    let t = No(i);
    return e => {
        for (let s of t) {
            if (s === "")
                break;
            e = e && e[s]
        }
        return e
    }
}
function Qt(i, t) {
    return (ms[t] || (ms[t] = Ho(t)))(i)
}
function Ae(i) {
    return i.charAt(0).toUpperCase() + i.slice(1)
}
var te = i => typeof i < "u",
    at = i => typeof i == "function",
    fi = (i, t) => {
        if (i.size !== t.size)
            return !1;
        for (let e of i)
            if (!t.has(e))
                return !1;
        return !0
    };
function Os(i) {
    return i.type === "mouseup" || i.type === "click" || i.type === "contextmenu"
}
var B = Math.PI,
    U = 2 * B,
    jo = U + B,
    De = Number.POSITIVE_INFINITY,
    $o = B / 180,
    Y = B / 2,
    kt = B / 4,
    bs = B * 2 / 3,
    rt = Math.log10,
    wt = Math.sign;
function Nt(i, t, e) {
    return Math.abs(i - t) < e
}
function gi(i) {
    let t = Math.round(i);
    i = Nt(i, t, i / 1e3) ? t : i;
    let e = Math.pow(10, Math.floor(rt(i))),
        s = i / e;
    return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * e
}
function As(i) {
    let t = [],
        e = Math.sqrt(i),
        s;
    for (s = 1; s < e; s++)
        i % s === 0 && (t.push(s), t.push(i / s));
    return e === (e | 0) && t.push(e), t.sort((n, o) => n - o).pop(), t
}
function Yo(i) {
    return typeof i == "symbol" || typeof i == "object" && i !== null && !(Symbol.toPrimitive in i || "toString" in i || "valueOf" in i)
}
function Dt(i) {
    return !Yo(i) && !isNaN(parseFloat(i)) && isFinite(i)
}
function Ts(i, t) {
    let e = Math.round(i);
    return e - t <= i && e + t >= i
}
function pi(i, t, e) {
    let s,
        n,
        o;
    for (s = 0, n = i.length; s < n; s++)
        o = i[s][e],
        isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o))
}
function lt(i) {
    return i * (B / 180)
}
function Te(i) {
    return i * (180 / B)
}
function mi(i) {
    if (!F(i))
        return;
    let t = 1,
        e = 0;
    for (; Math.round(i * t) / t !== i;)
        t *= 10,
        e++;
    return e
}
function Ls(i, t) {
    let e = t.x - i.x,
        s = t.y - i.y,
        n = Math.sqrt(e * e + s * s),
        o = Math.atan2(s, e);
    return o < -.5 * B && (o += U), {
        angle: o,
        distance: n
    }
}
function Ce(i, t) {
    return Math.sqrt(Math.pow(t.x - i.x, 2) + Math.pow(t.y - i.y, 2))
}
function Uo(i, t) {
    return (i - t + jo) % U - B
}
function $(i) {
    return (i % U + U) % U
}
function bi(i, t, e, s) {
    let n = $(i),
        o = $(t),
        a = $(e),
        r = $(o - n),
        l = $(a - n),
        c = $(n - o),
        h = $(n - a);
    return n === o || n === a || s && o === a || r > l && c < h
}
function G(i, t, e) {
    return Math.max(t, Math.min(e, i))
}
function Rs(i) {
    return G(i, -32768, 32767)
}
function Ct(i, t, e, s=1e-6) {
    return i >= Math.min(t, e) - s && i <= Math.max(t, e) + s
}
function Le(i, t, e) {
    e = e || (a => i[a] < t);
    let s = i.length - 1,
        n = 0,
        o;
    for (; s - n > 1;)
        o = n + s >> 1,
        e(o) ? n = o : s = o;
    return {
        lo: n,
        hi: s
    }
}
var mt = (i, t, e, s) => Le(i, e, s ? n => {
        let o = i[n][t];
        return o < e || o === e && i[n + 1][t] === e
    } : n => i[n][t] < e),
    Es = (i, t, e) => Le(i, e, s => i[s][t] >= e);
function Fs(i, t, e) {
    let s = 0,
        n = i.length;
    for (; s < n && i[s] < t;)
        s++;
    for (; n > s && i[n - 1] > e;)
        n--;
    return s > 0 || n < i.length ? i.slice(s, n) : i
}
var Is = ["push", "pop", "shift", "splice", "unshift"];
function zs(i, t) {
    if (i._chartjs) {
        i._chartjs.listeners.push(t);
        return
    }
    Object.defineProperty(i, "_chartjs", {
        configurable: !0,
        enumerable: !1,
        value: {
            listeners: [t]
        }
    }),
    Is.forEach(e => {
        let s = "_onData" + Ae(e),
            n = i[e];
        Object.defineProperty(i, e, {
            configurable: !0,
            enumerable: !1,
            value(...o) {
                let a = n.apply(this, o);
                return i._chartjs.listeners.forEach(r => {
                    typeof r[s] == "function" && r[s](...o)
                }), a
            }
        })
    })
}
function xi(i, t) {
    let e = i._chartjs;
    if (!e)
        return;
    let s = e.listeners,
        n = s.indexOf(t);
    n !== -1 && s.splice(n, 1),
    !(s.length > 0) && (Is.forEach(o => {
        delete i[o]
    }), delete i._chartjs)
}
function Bs(i) {
    let t = new Set(i);
    return t.size === i.length ? i : Array.from(t)
}
var _i = function() {
    return typeof window > "u" ? function(i) {
        return i()
    } : window.requestAnimationFrame
}();
function yi(i, t) {
    let e = [],
        s = !1;
    return function(...n) {
        e = n,
        s || (s = !0, _i.call(window, () => {
            s = !1,
            i.apply(t, e)
        }))
    }
}
function Vs(i, t) {
    let e;
    return function(...s) {
        return t ? (clearTimeout(e), e = setTimeout(i, t, s)) : i.apply(this, s), t
    }
}
var Re = i => i === "start" ? "left" : i === "end" ? "right" : "center",
    N = (i, t, e) => i === "start" ? t : i === "end" ? e : (t + e) / 2,
    Ws = (i, t, e, s) => i === (s ? "left" : "right") ? e : i === "center" ? (t + e) / 2 : t;
function vi(i, t, e) {
    let s = t.length,
        n = 0,
        o = s;
    if (i._sorted) {
        let {iScale: a, vScale: r, _parsed: l} = i,
            c = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null,
            h = a.axis,
            {min: d, max: u, minDefined: f, maxDefined: p} = a.getUserBounds();
        if (f) {
            if (n = Math.min(mt(l, h, d).lo, e ? s : mt(t, h, a.getPixelForValue(d)).lo), c) {
                let g = l.slice(0, n + 1).reverse().findIndex(m => !A(m[r.axis]));
                n -= Math.max(0, g)
            }
            n = G(n, 0, s - 1)
        }
        if (p) {
            let g = Math.max(mt(l, a.axis, u, !0).hi + 1, e ? 0 : mt(t, h, a.getPixelForValue(u), !0).hi + 1);
            if (c) {
                let m = l.slice(g - 1).findIndex(b => !A(b[r.axis]));
                g += Math.max(0, m)
            }
            o = G(g, n, s) - n
        } else
            o = s - n
    }
    return {
        start: n,
        count: o
    }
}
function Mi(i) {
    let {xScale: t, yScale: e, _scaleRanges: s} = i,
        n = {
            xmin: t.min,
            xmax: t.max,
            ymin: e.min,
            ymax: e.max
        };
    if (!s)
        return i._scaleRanges = n, !0;
    let o = s.xmin !== t.min || s.xmax !== t.max || s.ymin !== e.min || s.ymax !== e.max;
    return Object.assign(s, n), o
}
var ke = i => i === 0 || i === 1,
    xs = (i, t, e) => -(Math.pow(2, 10 * (i -= 1)) * Math.sin((i - t) * U / e)),
    _s = (i, t, e) => Math.pow(2, -10 * i) * Math.sin((i - t) * U / e) + 1,
    zt = {
        linear: i => i,
        easeInQuad: i => i * i,
        easeOutQuad: i => -i * (i - 2),
        easeInOutQuad: i => (i /= .5) < 1 ? .5 * i * i : -.5 * (--i * (i - 2) - 1),
        easeInCubic: i => i * i * i,
        easeOutCubic: i => (i -= 1) * i * i + 1,
        easeInOutCubic: i => (i /= .5) < 1 ? .5 * i * i * i : .5 * ((i -= 2) * i * i + 2),
        easeInQuart: i => i * i * i * i,
        easeOutQuart: i => -((i -= 1) * i * i * i - 1),
        easeInOutQuart: i => (i /= .5) < 1 ? .5 * i * i * i * i : -.5 * ((i -= 2) * i * i * i - 2),
        easeInQuint: i => i * i * i * i * i,
        easeOutQuint: i => (i -= 1) * i * i * i * i + 1,
        easeInOutQuint: i => (i /= .5) < 1 ? .5 * i * i * i * i * i : .5 * ((i -= 2) * i * i * i * i + 2),
        easeInSine: i => -Math.cos(i * Y) + 1,
        easeOutSine: i => Math.sin(i * Y),
        easeInOutSine: i => -.5 * (Math.cos(B * i) - 1),
        easeInExpo: i => i === 0 ? 0 : Math.pow(2, 10 * (i - 1)),
        easeOutExpo: i => i === 1 ? 1 : -Math.pow(2, -10 * i) + 1,
        easeInOutExpo: i => ke(i) ? i : i < .5 ? .5 * Math.pow(2, 10 * (i * 2 - 1)) : .5 * (-Math.pow(2, -10 * (i * 2 - 1)) + 2),
        easeInCirc: i => i >= 1 ? i : -(Math.sqrt(1 - i * i) - 1),
        easeOutCirc: i => Math.sqrt(1 - (i -= 1) * i),
        easeInOutCirc: i => (i /= .5) < 1 ? -.5 * (Math.sqrt(1 - i * i) - 1) : .5 * (Math.sqrt(1 - (i -= 2) * i) + 1),
        easeInElastic: i => ke(i) ? i : xs(i, .075, .3),
        easeOutElastic: i => ke(i) ? i : _s(i, .075, .3),
        easeInOutElastic(i) {
            return ke(i) ? i : i < .5 ? .5 * xs(i * 2, .1125, .45) : .5 + .5 * _s(i * 2 - 1, .1125, .45)
        },
        easeInBack(i) {
            return i * i * ((1.70158 + 1) * i - 1.70158)
        },
        easeOutBack(i) {
            return (i -= 1) * i * ((1.70158 + 1) * i + 1.70158) + 1
        },
        easeInOutBack(i) {
            let t = 1.70158;
            return (i /= .5) < 1 ? .5 * (i * i * (((t *= 1.525) + 1) * i - t)) : .5 * ((i -= 2) * i * (((t *= 1.525) + 1) * i + t) + 2)
        },
        easeInBounce: i => 1 - zt.easeOutBounce(1 - i),
        easeOutBounce(i) {
            return i < 1 / 2.75 ? 7.5625 * i * i : i < 2 / 2.75 ? 7.5625 * (i -= 1.5 / 2.75) * i + .75 : i < 2.5 / 2.75 ? 7.5625 * (i -= 2.25 / 2.75) * i + .9375 : 7.5625 * (i -= 2.625 / 2.75) * i + .984375
        },
        easeInOutBounce: i => i < .5 ? zt.easeInBounce(i * 2) * .5 : zt.easeOutBounce(i * 2 - 1) * .5 + .5
    };
function ki(i) {
    if (i && typeof i == "object") {
        let t = i.toString();
        return t === "[object CanvasPattern]" || t === "[object CanvasGradient]"
    }
    return !1
}
function Si(i) {
    return ki(i) ? i : new Kt(i)
}
function hi(i) {
    return ki(i) ? i : new Kt(i).saturate(.5).darken(.1).hexString()
}
var Xo = ["x", "y", "borderWidth", "radius", "tension"],
    Ko = ["color", "borderColor", "backgroundColor"];
function qo(i) {
    i.set("animation", {
        delay: void 0,
        duration: 1e3,
        easing: "easeOutQuart",
        fn: void 0,
        from: void 0,
        loop: void 0,
        to: void 0,
        type: void 0
    }),
    i.describe("animation", {
        _fallback: !1,
        _indexable: !1,
        _scriptable: t => t !== "onProgress" && t !== "onComplete" && t !== "fn"
    }),
    i.set("animations", {
        colors: {
            type: "color",
            properties: Ko
        },
        numbers: {
            type: "number",
            properties: Xo
        }
    }),
    i.describe("animations", {
        _fallback: "animation"
    }),
    i.set("transitions", {
        active: {
            animation: {
                duration: 400
            }
        },
        resize: {
            animation: {
                duration: 0
            }
        },
        show: {
            animations: {
                colors: {
                    from: "transparent"
                },
                visible: {
                    type: "boolean",
                    duration: 0
                }
            }
        },
        hide: {
            animations: {
                colors: {
                    to: "transparent"
                },
                visible: {
                    type: "boolean",
                    easing: "linear",
                    fn: t => t | 0
                }
            }
        }
    })
}
function Go(i) {
    i.set("layout", {
        autoPadding: !0,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    })
}
var ys = new Map;
function Zo(i, t) {
    t = t || {};
    let e = i + JSON.stringify(t),
        s = ys.get(e);
    return s || (s = new Intl.NumberFormat(i, t), ys.set(e, s)), s
}
function Ee(i, t, e) {
    return Zo(t, e).format(i)
}
var Ns = {
    values(i) {
        return E(i) ? i : "" + i
    },
    numeric(i, t, e) {
        if (i === 0)
            return "0";
        let s = this.chart.options.locale,
            n,
            o = i;
        if (e.length > 1) {
            let c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
            (c < 1e-4 || c > 1e15) && (n = "scientific"),
            o = Jo(i, e)
        }
        let a = rt(Math.abs(o)),
            r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0),
            l = {
                notation: n,
                minimumFractionDigits: r,
                maximumFractionDigits: r
            };
        return Object.assign(l, this.options.ticks.format), Ee(i, s, l)
    },
    logarithmic(i, t, e) {
        if (i === 0)
            return "0";
        let s = e[t].significand || i / Math.pow(10, Math.floor(rt(i)));
        return [1, 2, 3, 5, 10, 15].includes(s) || t > .8 * e.length ? Ns.numeric.call(this, i, t, e) : ""
    }
};
function Jo(i, t) {
    let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
    return Math.abs(e) >= 1 && i !== Math.floor(i) && (e = i - Math.floor(i)), e
}
var ee = {
    formatters: Ns
};
function Qo(i) {
    i.set("scale", {
        display: !0,
        offset: !1,
        reverse: !1,
        beginAtZero: !1,
        bounds: "ticks",
        clip: !0,
        grace: 0,
        grid: {
            display: !0,
            lineWidth: 1,
            drawOnChartArea: !0,
            drawTicks: !0,
            tickLength: 8,
            tickWidth: (t, e) => e.lineWidth,
            tickColor: (t, e) => e.color,
            offset: !1
        },
        border: {
            display: !0,
            dash: [],
            dashOffset: 0,
            width: 1
        },
        title: {
            display: !1,
            text: "",
            padding: {
                top: 4,
                bottom: 4
            }
        },
        ticks: {
            minRotation: 0,
            maxRotation: 50,
            mirror: !1,
            textStrokeWidth: 0,
            textStrokeColor: "",
            padding: 3,
            display: !0,
            autoSkip: !0,
            autoSkipPadding: 3,
            labelOffset: 0,
            callback: ee.formatters.values,
            minor: {},
            major: {},
            align: "center",
            crossAlign: "near",
            showLabelBackdrop: !1,
            backdropColor: "rgba(255, 255, 255, 0.75)",
            backdropPadding: 2
        }
    }),
    i.route("scale.ticks", "color", "", "color"),
    i.route("scale.grid", "color", "", "borderColor"),
    i.route("scale.border", "color", "", "borderColor"),
    i.route("scale.title", "color", "", "color"),
    i.describe("scale", {
        _fallback: !1,
        _scriptable: t => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
        _indexable: t => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
    }),
    i.describe("scales", {
        _fallback: "scale"
    }),
    i.describe("scale.ticks", {
        _scriptable: t => t !== "backdropPadding" && t !== "callback",
        _indexable: t => t !== "backdropPadding"
    })
}
var bt = Object.create(null),
    Fe = Object.create(null);
function Gt(i, t) {
    if (!t)
        return i;
    let e = t.split(".");
    for (let s = 0, n = e.length; s < n; ++s) {
        let o = e[s];
        i = i[o] || (i[o] = Object.create(null))
    }
    return i
}
function di(i, t, e) {
    return typeof t == "string" ? Bt(Gt(i, t), e) : Bt(Gt(i, ""), t)
}
var ui = class {
        constructor(t, e)
        {
            this.animation = void 0,
            this.backgroundColor = "rgba(0,0,0,0.1)",
            this.borderColor = "rgba(0,0,0,0.1)",
            this.color = "#666",
            this.datasets = {},
            this.devicePixelRatio = s => s.chart.platform.getDevicePixelRatio(),
            this.elements = {},
            this.events = ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
            this.font = {
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                size: 12,
                style: "normal",
                lineHeight: 1.2,
                weight: null
            },
            this.hover = {},
            this.hoverBackgroundColor = (s, n) => hi(n.backgroundColor),
            this.hoverBorderColor = (s, n) => hi(n.borderColor),
            this.hoverColor = (s, n) => hi(n.color),
            this.indexAxis = "x",
            this.interaction = {
                mode: "nearest",
                intersect: !0,
                includeInvisible: !1
            },
            this.maintainAspectRatio = !0,
            this.onHover = null,
            this.onClick = null,
            this.parsing = !0,
            this.plugins = {},
            this.responsive = !0,
            this.scale = void 0,
            this.scales = {},
            this.showLine = !0,
            this.drawActiveElementsOnTop = !0,
            this.describe(t),
            this.apply(e)
        }
        set(t, e)
        {
            return di(this, t, e)
        }
        get(t)
        {
            return Gt(this, t)
        }
        describe(t, e)
        {
            return di(Fe, t, e)
        }
        override(t, e)
        {
            return di(bt, t, e)
        }
        route(t, e, s, n)
        {
            let o = Gt(this, t),
                a = Gt(this, s),
                r = "_" + e;
            Object.defineProperties(o, {
                [r]: {
                    value: o[e],
                    writable: !0
                },
                [e]: {
                    enumerable: !0,
                    get() {
                        let l = this[r],
                            c = a[n];
                        return C(l) ? Object.assign({}, c, l) : P(l, c)
                    },
                    set(l) {
                        this[r] = l
                    }
                }
            })
        }
        apply(t)
        {
            t.forEach(e => e(this))
        }
    }
    ,
    I = new ui({
        _scriptable: i => !i.startsWith("on"),
        _indexable: i => i !== "events",
        hover: {
            _fallback: "interaction"
        },
        interaction: {
            _scriptable: !1,
            _indexable: !1
        }
    }, [qo, Go, Qo]);
function ta(i) {
    return !i || A(i.size) || A(i.family) ? null : (i.style ? i.style + " " : "") + (i.weight ? i.weight + " " : "") + i.size + "px " + i.family
}
function Zt(i, t, e, s, n) {
    let o = t[n];
    return o || (o = t[n] = i.measureText(n).width, e.push(n)), o > s && (s = o), s
}
function Hs(i, t, e, s) {
    s = s || {};
    let n = s.data = s.data || {},
        o = s.garbageCollect = s.garbageCollect || [];
    s.font !== t && (n = s.data = {}, o = s.garbageCollect = [], s.font = t),
    i.save(),
    i.font = t;
    let a = 0,
        r = e.length,
        l,
        c,
        h,
        d,
        u;
    for (l = 0; l < r; l++)
        if (d = e[l], d != null && !E(d))
            a = Zt(i, n, o, a, d);
        else if (E(d))
            for (c = 0, h = d.length; c < h; c++)
                u = d[c],
                u != null && !E(u) && (a = Zt(i, n, o, a, u));
    i.restore();
    let f = o.length / 2;
    if (f > e.length) {
        for (l = 0; l < f; l++)
            delete n[o[l]];
        o.splice(0, f)
    }
    return a
}
function xt(i, t, e) {
    let s = i.currentDevicePixelRatio,
        n = e !== 0 ? Math.max(e / 2, .5) : 0;
    return Math.round((t - n) * s) / s + n
}
function wi(i, t) {
    !t && !i || (t = t || i.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, i.width, i.height), t.restore())
}
function Ie(i, t, e, s) {
    Pi(i, t, e, s, null)
}
function Pi(i, t, e, s, n) {
    let o,
        a,
        r,
        l,
        c,
        h,
        d,
        u,
        f = t.pointStyle,
        p = t.rotation,
        g = t.radius,
        m = (p || 0) * $o;
    if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
        i.save(),
        i.translate(e, s),
        i.rotate(m),
        i.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
        i.restore();
        return
    }
    if (!(isNaN(g) || g <= 0)) {
        switch (i.beginPath(), f) {
        default:
            n ? i.ellipse(e, s, n / 2, g, 0, 0, U) : i.arc(e, s, g, 0, U),
            i.closePath();
            break;
        case "triangle":
            h = n ? n / 2 : g,
            i.moveTo(e + Math.sin(m) * h, s - Math.cos(m) * g),
            m += bs,
            i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * g),
            m += bs,
            i.lineTo(e + Math.sin(m) * h, s - Math.cos(m) * g),
            i.closePath();
            break;
        case "rectRounded":
            c = g * .516,
            l = g - c,
            a = Math.cos(m + kt) * l,
            d = Math.cos(m + kt) * (n ? n / 2 - c : l),
            r = Math.sin(m + kt) * l,
            u = Math.sin(m + kt) * (n ? n / 2 - c : l),
            i.arc(e - d, s - r, c, m - B, m - Y),
            i.arc(e + u, s - a, c, m - Y, m),
            i.arc(e + d, s + r, c, m, m + Y),
            i.arc(e - u, s + a, c, m + Y, m + B),
            i.closePath();
            break;
        case "rect":
            if (!p) {
                l = Math.SQRT1_2 * g,
                h = n ? n / 2 : l,
                i.rect(e - h, s - l, 2 * h, 2 * l);
                break
            }
            m += kt;
        case "rectRot":
            d = Math.cos(m) * (n ? n / 2 : g),
            a = Math.cos(m) * g,
            r = Math.sin(m) * g,
            u = Math.sin(m) * (n ? n / 2 : g),
            i.moveTo(e - d, s - r),
            i.lineTo(e + u, s - a),
            i.lineTo(e + d, s + r),
            i.lineTo(e - u, s + a),
            i.closePath();
            break;
        case "crossRot":
            m += kt;
        case "cross":
            d = Math.cos(m) * (n ? n / 2 : g),
            a = Math.cos(m) * g,
            r = Math.sin(m) * g,
            u = Math.sin(m) * (n ? n / 2 : g),
            i.moveTo(e - d, s - r),
            i.lineTo(e + d, s + r),
            i.moveTo(e + u, s - a),
            i.lineTo(e - u, s + a);
            break;
        case "star":
            d = Math.cos(m) * (n ? n / 2 : g),
            a = Math.cos(m) * g,
            r = Math.sin(m) * g,
            u = Math.sin(m) * (n ? n / 2 : g),
            i.moveTo(e - d, s - r),
            i.lineTo(e + d, s + r),
            i.moveTo(e + u, s - a),
            i.lineTo(e - u, s + a),
            m += kt,
            d = Math.cos(m) * (n ? n / 2 : g),
            a = Math.cos(m) * g,
            r = Math.sin(m) * g,
            u = Math.sin(m) * (n ? n / 2 : g),
            i.moveTo(e - d, s - r),
            i.lineTo(e + d, s + r),
            i.moveTo(e + u, s - a),
            i.lineTo(e - u, s + a);
            break;
        case "line":
            a = n ? n / 2 : Math.cos(m) * g,
            r = Math.sin(m) * g,
            i.moveTo(e - a, s - r),
            i.lineTo(e + a, s + r);
            break;
        case "dash":
            i.moveTo(e, s),
            i.lineTo(e + Math.cos(m) * (n ? n / 2 : g), s + Math.sin(m) * g);
            break;
        case !1:
            i.closePath();
            break
        }
        i.fill(),
        t.borderWidth > 0 && i.stroke()
    }
}
function et(i, t, e) {
    return e = e || .5, !t || i && i.x > t.left - e && i.x < t.right + e && i.y > t.top - e && i.y < t.bottom + e
}
function ie(i, t) {
    i.save(),
    i.beginPath(),
    i.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    i.clip()
}
function se(i) {
    i.restore()
}
function js(i, t, e, s, n) {
    if (!t)
        return i.lineTo(e.x, e.y);
    if (n === "middle") {
        let o = (t.x + e.x) / 2;
        i.lineTo(o, t.y),
        i.lineTo(o, e.y)
    } else
        n === "after" != !!s ? i.lineTo(t.x, e.y) : i.lineTo(e.x, t.y);
    i.lineTo(e.x, e.y)
}
function $s(i, t, e, s) {
    if (!t)
        return i.lineTo(e.x, e.y);
    i.bezierCurveTo(s ? t.cp1x : t.cp2x, s ? t.cp1y : t.cp2y, s ? e.cp2x : e.cp1x, s ? e.cp2y : e.cp1y, e.x, e.y)
}
function ea(i, t) {
    t.translation && i.translate(t.translation[0], t.translation[1]),
    A(t.rotation) || i.rotate(t.rotation),
    t.color && (i.fillStyle = t.color),
    t.textAlign && (i.textAlign = t.textAlign),
    t.textBaseline && (i.textBaseline = t.textBaseline)
}
function ia(i, t, e, s, n) {
    if (n.strikethrough || n.underline) {
        let o = i.measureText(s),
            a = t - o.actualBoundingBoxLeft,
            r = t + o.actualBoundingBoxRight,
            l = e - o.actualBoundingBoxAscent,
            c = e + o.actualBoundingBoxDescent,
            h = n.strikethrough ? (l + c) / 2 : c;
        i.strokeStyle = i.fillStyle,
        i.beginPath(),
        i.lineWidth = n.decorationWidth || 2,
        i.moveTo(a, h),
        i.lineTo(r, h),
        i.stroke()
    }
}
function sa(i, t) {
    let e = i.fillStyle;
    i.fillStyle = t.color,
    i.fillRect(t.left, t.top, t.width, t.height),
    i.fillStyle = e
}
function _t(i, t, e, s, n, o={}) {
    let a = E(t) ? t : [t],
        r = o.strokeWidth > 0 && o.strokeColor !== "",
        l,
        c;
    for (i.save(), i.font = n.string, ea(i, o), l = 0; l < a.length; ++l)
        c = a[l],
        o.backdrop && sa(i, o.backdrop),
        r && (o.strokeColor && (i.strokeStyle = o.strokeColor), A(o.strokeWidth) || (i.lineWidth = o.strokeWidth), i.strokeText(c, e, s, o.maxWidth)),
        i.fillText(c, e, s, o.maxWidth),
        ia(i, e, s, c, o),
        s += Number(n.lineHeight);
    i.restore()
}
function ne(i, t) {
    let {x: e, y: s, w: n, h: o, radius: a} = t;
    i.arc(e + a.topLeft, s + a.topLeft, a.topLeft, 1.5 * B, B, !0),
    i.lineTo(e, s + o - a.bottomLeft),
    i.arc(e + a.bottomLeft, s + o - a.bottomLeft, a.bottomLeft, B, Y, !0),
    i.lineTo(e + n - a.bottomRight, s + o),
    i.arc(e + n - a.bottomRight, s + o - a.bottomRight, a.bottomRight, Y, 0, !0),
    i.lineTo(e + n, s + a.topRight),
    i.arc(e + n - a.topRight, s + a.topRight, a.topRight, 0, -Y, !0),
    i.lineTo(e + a.topLeft, s)
}
var na = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
    oa = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function aa(i, t) {
    let e = ("" + i).match(na);
    if (!e || e[1] === "normal")
        return t * 1.2;
    switch (i = +e[2], e[3]) {
    case "px":
        return i;
    case "%":
        i /= 100;
        break
    }
    return t * i
}
var ra = i => +i || 0;
function Di(i, t) {
    let e = {},
        s = C(t),
        n = s ? Object.keys(t) : t,
        o = C(i) ? s ? a => P(i[a], i[t[a]]) : a => i[a] : () => i;
    for (let a of n)
        e[a] = ra(o(a));
    return e
}
function Ys(i) {
    return Di(i, {
        top: "y",
        right: "x",
        bottom: "y",
        left: "x"
    })
}
function Ot(i) {
    return Di(i, ["topLeft", "topRight", "bottomLeft", "bottomRight"])
}
function H(i) {
    let t = Ys(i);
    return t.width = t.left + t.right, t.height = t.top + t.bottom, t
}
function V(i, t) {
    i = i || {},
    t = t || I.font;
    let e = P(i.size, t.size);
    typeof e == "string" && (e = parseInt(e, 10));
    let s = P(i.style, t.style);
    s && !("" + s).match(oa) && (console.warn('Invalid font style specified: "' + s + '"'), s = void 0);
    let n = {
        family: P(i.family, t.family),
        lineHeight: aa(P(i.lineHeight, t.lineHeight), e),
        size: e,
        style: s,
        weight: P(i.weight, t.weight),
        string: ""
    };
    return n.string = ta(n), n
}
function oe(i, t, e, s) {
    let n = !0,
        o,
        a,
        r;
    for (o = 0, a = i.length; o < a; ++o)
        if (r = i[o], r !== void 0 && (t !== void 0 && typeof r == "function" && (r = r(t), n = !1), e !== void 0 && E(r) && (r = r[e % r.length], n = !1), r !== void 0))
            return s && !n && (s.cacheable = !1), r
}
function Us(i, t, e) {
    let {min: s, max: n} = i,
        o = Ds(t, (n - s) / 2),
        a = (r, l) => e && r === 0 ? 0 : r + l;
    return {
        min: a(s, -Math.abs(o)),
        max: a(n, o)
    }
}
function ct(i, t) {
    return Object.assign(Object.create(i), t)
}
function ze(i, t=[""], e, s, n=() => i[0]) {
    let o = e || i;
    typeof s > "u" && (s = qs("_fallback", i));
    let a = {
        [Symbol.toStringTag]: "Object",
        _cacheable: !0,
        _scopes: i,
        _rootScopes: o,
        _fallback: s,
        _getTarget: n,
        override: r => ze([r, ...i], t, o, s)
    };
    return new Proxy(a, {
        deleteProperty(r, l) {
            return delete r[l], delete r._keys, delete i[0][l], !0
        },
        get(r, l) {
            return Xs(r, l, () => pa(l, t, i, r))
        },
        getOwnPropertyDescriptor(r, l) {
            return Reflect.getOwnPropertyDescriptor(r._scopes[0], l)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(i[0])
        },
        has(r, l) {
            return Ms(r).includes(l)
        },
        ownKeys(r) {
            return Ms(r)
        },
        set(r, l, c) {
            let h = r._storage || (r._storage = n());
            return r[l] = h[l] = c, delete r._keys, !0
        }
    })
}
function Pt(i, t, e, s) {
    let n = {
        _cacheable: !1,
        _proxy: i,
        _context: t,
        _subProxy: e,
        _stack: new Set,
        _descriptors: Ci(i, s),
        setContext: o => Pt(i, o, e, s),
        override: o => Pt(i.override(o), t, e, s)
    };
    return new Proxy(n, {
        deleteProperty(o, a) {
            return delete o[a], delete i[a], !0
        },
        get(o, a, r) {
            return Xs(o, a, () => ca(o, a, r))
        },
        getOwnPropertyDescriptor(o, a) {
            return o._descriptors.allKeys ? Reflect.has(i, a) ? {
                enumerable: !0,
                configurable: !0
            } : void 0 : Reflect.getOwnPropertyDescriptor(i, a)
        },
        getPrototypeOf() {
            return Reflect.getPrototypeOf(i)
        },
        has(o, a) {
            return Reflect.has(i, a)
        },
        ownKeys() {
            return Reflect.ownKeys(i)
        },
        set(o, a, r) {
            return i[a] = r, delete o[a], !0
        }
    })
}
function Ci(i, t={
    scriptable: !0,
    indexable: !0
}) {
    let {_scriptable: e=t.scriptable, _indexable: s=t.indexable, _allKeys: n=t.allKeys} = i;
    return {
        allKeys: n,
        scriptable: e,
        indexable: s,
        isScriptable: at(e) ? e : () => e,
        isIndexable: at(s) ? s : () => s
    }
}
var la = (i, t) => i ? i + Ae(t) : t,
    Oi = (i, t) => C(t) && i !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function Xs(i, t, e) {
    if (Object.prototype.hasOwnProperty.call(i, t) || t === "constructor")
        return i[t];
    let s = e();
    return i[t] = s, s
}
function ca(i, t, e) {
    let {_proxy: s, _context: n, _subProxy: o, _descriptors: a} = i,
        r = s[t];
    return at(r) && a.isScriptable(t) && (r = ha(t, r, i, e)), E(r) && r.length && (r = da(t, r, i, a.isIndexable)), Oi(t, r) && (r = Pt(r, n, o && o[t], a)), r
}
function ha(i, t, e, s) {
    let {_proxy: n, _context: o, _subProxy: a, _stack: r} = e;
    if (r.has(i))
        throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + i);
    r.add(i);
    let l = t(o, a || s);
    return r.delete(i), Oi(i, l) && (l = Ai(n._scopes, n, i, l)), l
}
function da(i, t, e, s) {
    let {_proxy: n, _context: o, _subProxy: a, _descriptors: r} = e;
    if (typeof o.index < "u" && s(i))
        return t[o.index % t.length];
    if (C(t[0])) {
        let l = t,
            c = n._scopes.filter(h => h !== l);
        t = [];
        for (let h of l) {
            let d = Ai(c, n, i, h);
            t.push(Pt(d, o, a && a[i], r))
        }
    }
    return t
}
function Ks(i, t, e) {
    return at(i) ? i(t, e) : i
}
var ua = (i, t) => i === !0 ? t : typeof i == "string" ? Qt(t, i) : void 0;
function fa(i, t, e, s, n) {
    for (let o of t) {
        let a = ua(e, o);
        if (a) {
            i.add(a);
            let r = Ks(a._fallback, e, n);
            if (typeof r < "u" && r !== e && r !== s)
                return r
        } else if (a === !1 && typeof s < "u" && e !== s)
            return null
    }
    return !1
}
function Ai(i, t, e, s) {
    let n = t._rootScopes,
        o = Ks(t._fallback, e, s),
        a = [...i, ...n],
        r = new Set;
    r.add(s);
    let l = vs(r, a, e, o || e, s);
    return l === null || typeof o < "u" && o !== e && (l = vs(r, a, o, l, s), l === null) ? !1 : ze(Array.from(r), [""], n, o, () => ga(t, e, s))
}
function vs(i, t, e, s, n) {
    for (; e;)
        e = fa(i, t, e, s, n);
    return e
}
function ga(i, t, e) {
    let s = i._getTarget();
    t in s || (s[t] = {});
    let n = s[t];
    return E(n) && C(e) ? e : n || {}
}
function pa(i, t, e, s) {
    let n;
    for (let o of t)
        if (n = qs(la(o, i), e), typeof n < "u")
            return Oi(i, n) ? Ai(e, s, i, n) : n
}
function qs(i, t) {
    for (let e of t) {
        if (!e)
            continue;
        let s = e[i];
        if (typeof s < "u")
            return s
    }
}
function Ms(i) {
    let t = i._keys;
    return t || (t = i._keys = ma(i._scopes)), t
}
function ma(i) {
    let t = new Set;
    for (let e of i)
        for (let s of Object.keys(e).filter(n => !n.startsWith("_")))
            t.add(s);
    return Array.from(t)
}
var ba = Number.EPSILON || 1e-14,
    Vt = (i, t) => t < i.length && !i[t].skip && i[t],
    Gs = i => i === "x" ? "y" : "x";
function xa(i, t, e, s) {
    let n = i.skip ? t : i,
        o = t,
        a = e.skip ? t : e,
        r = Ce(o, n),
        l = Ce(a, o),
        c = r / (r + l),
        h = l / (r + l);
    c = isNaN(c) ? 0 : c,
    h = isNaN(h) ? 0 : h;
    let d = s * c,
        u = s * h;
    return {
        previous: {
            x: o.x - d * (a.x - n.x),
            y: o.y - d * (a.y - n.y)
        },
        next: {
            x: o.x + u * (a.x - n.x),
            y: o.y + u * (a.y - n.y)
        }
    }
}
function _a(i, t, e) {
    let s = i.length,
        n,
        o,
        a,
        r,
        l,
        c = Vt(i, 0);
    for (let h = 0; h < s - 1; ++h)
        if (l = c, c = Vt(i, h + 1), !(!l || !c)) {
            if (Nt(t[h], 0, ba)) {
                e[h] = e[h + 1] = 0;
                continue
            }
            n = e[h] / t[h],
            o = e[h + 1] / t[h],
            r = Math.pow(n, 2) + Math.pow(o, 2),
            !(r <= 9) && (a = 3 / Math.sqrt(r), e[h] = n * a * t[h], e[h + 1] = o * a * t[h])
        }
}
function ya(i, t, e="x") {
    let s = Gs(e),
        n = i.length,
        o,
        a,
        r,
        l = Vt(i, 0);
    for (let c = 0; c < n; ++c) {
        if (a = r, r = l, l = Vt(i, c + 1), !r)
            continue;
        let h = r[e],
            d = r[s];
        a && (o = (h - a[e]) / 3, r[`cp1${e}`] = h - o, r[`cp1${s}`] = d - o * t[c]),
        l && (o = (l[e] - h) / 3, r[`cp2${e}`] = h + o, r[`cp2${s}`] = d + o * t[c])
    }
}
function va(i, t="x") {
    let e = Gs(t),
        s = i.length,
        n = Array(s).fill(0),
        o = Array(s),
        a,
        r,
        l,
        c = Vt(i, 0);
    for (a = 0; a < s; ++a)
        if (r = l, l = c, c = Vt(i, a + 1), !!l) {
            if (c) {
                let h = c[t] - l[t];
                n[a] = h !== 0 ? (c[e] - l[e]) / h : 0
            }
            o[a] = r ? c ? wt(n[a - 1]) !== wt(n[a]) ? 0 : (n[a - 1] + n[a]) / 2 : n[a - 1] : n[a]
        }
    _a(i, n, o),
    ya(i, o, t)
}
function Se(i, t, e) {
    return Math.max(Math.min(i, e), t)
}
function Ma(i, t) {
    let e,
        s,
        n,
        o,
        a,
        r = et(i[0], t);
    for (e = 0, s = i.length; e < s; ++e)
        a = o,
        o = r,
        r = e < s - 1 && et(i[e + 1], t),
        o && (n = i[e], a && (n.cp1x = Se(n.cp1x, t.left, t.right), n.cp1y = Se(n.cp1y, t.top, t.bottom)), r && (n.cp2x = Se(n.cp2x, t.left, t.right), n.cp2y = Se(n.cp2y, t.top, t.bottom)))
}
function Zs(i, t, e, s, n) {
    let o,
        a,
        r,
        l;
    if (t.spanGaps && (i = i.filter(c => !c.skip)), t.cubicInterpolationMode === "monotone")
        va(i, n);
    else {
        let c = s ? i[i.length - 1] : i[0];
        for (o = 0, a = i.length; o < a; ++o)
            r = i[o],
            l = xa(c, r, i[Math.min(o + 1, a - (s ? 0 : 1)) % a], t.tension),
            r.cp1x = l.previous.x,
            r.cp1y = l.previous.y,
            r.cp2x = l.next.x,
            r.cp2y = l.next.y,
            c = r
    }
    t.capBezierPoints && Ma(i, e)
}
function Be() {
    return typeof window < "u" && typeof document < "u"
}
function Ve(i) {
    let t = i.parentNode;
    return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t
}
function Oe(i, t, e) {
    let s;
    return typeof i == "string" ? (s = parseInt(i, 10), i.indexOf("%") !== -1 && (s = s / 100 * t.parentNode[e])) : s = i, s
}
var We = i => i.ownerDocument.defaultView.getComputedStyle(i, null);
function ka(i, t) {
    return We(i).getPropertyValue(t)
}
var Sa = ["top", "right", "bottom", "left"];
function St(i, t, e) {
    let s = {};
    e = e ? "-" + e : "";
    for (let n = 0; n < 4; n++) {
        let o = Sa[n];
        s[o] = parseFloat(i[t + "-" + o + e]) || 0
    }
    return s.width = s.left + s.right, s.height = s.top + s.bottom, s
}
var wa = (i, t, e) => (i > 0 || t > 0) && (!e || !e.shadowRoot);
function Pa(i, t) {
    let e = i.touches,
        s = e && e.length ? e[0] : i,
        {offsetX: n, offsetY: o} = s,
        a = !1,
        r,
        l;
    if (wa(n, o, i.target))
        r = n,
        l = o;
    else {
        let c = t.getBoundingClientRect();
        r = s.clientX - c.left,
        l = s.clientY - c.top,
        a = !0
    }
    return {
        x: r,
        y: l,
        box: a
    }
}
function yt(i, t) {
    if ("native" in i)
        return i;
    let {canvas: e, currentDevicePixelRatio: s} = t,
        n = We(e),
        o = n.boxSizing === "border-box",
        a = St(n, "padding"),
        r = St(n, "border", "width"),
        {x: l, y: c, box: h} = Pa(i, e),
        d = a.left + (h && r.left),
        u = a.top + (h && r.top),
        {width: f, height: p} = t;
    return o && (f -= a.width + r.width, p -= a.height + r.height), {
        x: Math.round((l - d) / f * e.width / s),
        y: Math.round((c - u) / p * e.height / s)
    }
}
function Da(i, t, e) {
    let s,
        n;
    if (t === void 0 || e === void 0) {
        let o = i && Ve(i);
        if (!o)
            t = i.clientWidth,
            e = i.clientHeight;
        else {
            let a = o.getBoundingClientRect(),
                r = We(o),
                l = St(r, "border", "width"),
                c = St(r, "padding");
            t = a.width - c.width - l.width,
            e = a.height - c.height - l.height,
            s = Oe(r.maxWidth, o, "clientWidth"),
            n = Oe(r.maxHeight, o, "clientHeight")
        }
    }
    return {
        width: t,
        height: e,
        maxWidth: s || De,
        maxHeight: n || De
    }
}
var we = i => Math.round(i * 10) / 10;
function Js(i, t, e, s) {
    let n = We(i),
        o = St(n, "margin"),
        a = Oe(n.maxWidth, i, "clientWidth") || De,
        r = Oe(n.maxHeight, i, "clientHeight") || De,
        l = Da(i, t, e),
        {width: c, height: h} = l;
    if (n.boxSizing === "content-box") {
        let u = St(n, "border", "width"),
            f = St(n, "padding");
        c -= f.width + u.width,
        h -= f.height + u.height
    }
    return c = Math.max(0, c - o.width), h = Math.max(0, s ? c / s : h - o.height), c = we(Math.min(c, a, l.maxWidth)), h = we(Math.min(h, r, l.maxHeight)), c && !h && (h = we(c / 2)), (t !== void 0 || e !== void 0) && s && l.height && h > l.height && (h = l.height, c = we(Math.floor(h * s))), {
        width: c,
        height: h
    }
}
function Ti(i, t, e) {
    let s = t || 1,
        n = Math.floor(i.height * s),
        o = Math.floor(i.width * s);
    i.height = Math.floor(i.height),
    i.width = Math.floor(i.width);
    let a = i.canvas;
    return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${i.height}px`, a.style.width = `${i.width}px`), i.currentDevicePixelRatio !== s || a.height !== n || a.width !== o ? (i.currentDevicePixelRatio = s, a.height = n, a.width = o, i.ctx.setTransform(s, 0, 0, s, 0, 0), !0) : !1
}
var Qs = function() {
    let i = !1;
    try {
        let t = {
            get passive() {
                return i = !0, !1
            }
        };
        Be() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t))
    } catch {}
    return i
}();
function Li(i, t) {
    let e = ka(i, t),
        s = e && e.match(/^(\d+)(\.\d+)?px$/);
    return s ? +s[1] : void 0
}
function pt(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: i.y + e * (t.y - i.y)
    }
}
function tn(i, t, e, s) {
    return {
        x: i.x + e * (t.x - i.x),
        y: s === "middle" ? e < .5 ? i.y : t.y : s === "after" ? e < 1 ? i.y : t.y : e > 0 ? t.y : i.y
    }
}
function en(i, t, e, s) {
    let n = {
            x: i.cp2x,
            y: i.cp2y
        },
        o = {
            x: t.cp1x,
            y: t.cp1y
        },
        a = pt(i, n, e),
        r = pt(n, o, e),
        l = pt(o, t, e),
        c = pt(a, r, e),
        h = pt(r, l, e);
    return pt(c, h, e)
}
var Ca = function(i, t) {
        return {
            x(e) {
                return i + i + t - e
            },
            setWidth(e) {
                t = e
            },
            textAlign(e) {
                return e === "center" ? e : e === "right" ? "left" : "right"
            },
            xPlus(e, s) {
                return e - s
            },
            leftForLtr(e, s) {
                return e - s
            }
        }
    },
    Oa = function() {
        return {
            x(i) {
                return i
            },
            setWidth(i) {},
            textAlign(i) {
                return i
            },
            xPlus(i, t) {
                return i + t
            },
            leftForLtr(i, t) {
                return i
            }
        }
    };
function At(i, t, e) {
    return i ? Ca(t, e) : Oa()
}
function Ri(i, t) {
    let e,
        s;
    (t === "ltr" || t === "rtl") && (e = i.canvas.style, s = [e.getPropertyValue("direction"), e.getPropertyPriority("direction")], e.setProperty("direction", t, "important"), i.prevTextDirection = s)
}
function Ei(i, t) {
    t !== void 0 && (delete i.prevTextDirection, i.canvas.style.setProperty("direction", t[0], t[1]))
}
function sn(i) {
    return i === "angle" ? {
        between: bi,
        compare: Uo,
        normalize: $
    } : {
        between: Ct,
        compare: (t, e) => t - e,
        normalize: t => t
    }
}
function ks({start: i, end: t, count: e, loop: s, style: n}) {
    return {
        start: i % e,
        end: t % e,
        loop: s && (t - i + 1) % e === 0,
        style: n
    }
}
function Aa(i, t, e) {
    let {property: s, start: n, end: o} = e,
        {between: a, normalize: r} = sn(s),
        l = t.length,
        {start: c, end: h, loop: d} = i,
        u,
        f;
    if (d) {
        for (c += l, h += l, u = 0, f = l; u < f && a(r(t[c % l][s]), n, o); ++u)
            c--,
            h--;
        c %= l,
        h %= l
    }
    return h < c && (h += l), {
        start: c,
        end: h,
        loop: d,
        style: i.style
    }
}
function Fi(i, t, e) {
    if (!e)
        return [i];
    let {property: s, start: n, end: o} = e,
        a = t.length,
        {compare: r, between: l, normalize: c} = sn(s),
        {start: h, end: d, loop: u, style: f} = Aa(i, t, e),
        p = [],
        g = !1,
        m = null,
        b,
        _,
        S,
        y = () => l(n, S, b) && r(n, S) !== 0,
        x = () => r(o, b) === 0 || l(o, S, b),
        k = () => g || y(),
        v = () => !g || x();
    for (let M = h, w = h; M <= d; ++M)
        _ = t[M % a],
        !_.skip && (b = c(_[s]), b !== S && (g = l(b, n, o), m === null && k() && (m = r(b, n) === 0 ? M : w), m !== null && v() && (p.push(ks({
            start: m,
            end: M,
            loop: u,
            count: a,
            style: f
        })), m = null), w = M, S = b));
    return m !== null && p.push(ks({
        start: m,
        end: d,
        loop: u,
        count: a,
        style: f
    })), p
}
function Ii(i, t) {
    let e = [],
        s = i.segments;
    for (let n = 0; n < s.length; n++) {
        let o = Fi(s[n], i.points, t);
        o.length && e.push(...o)
    }
    return e
}
function Ta(i, t, e, s) {
    let n = 0,
        o = t - 1;
    if (e && !s)
        for (; n < t && !i[n].skip;)
            n++;
    for (; n < t && i[n].skip;)
        n++;
    for (n %= t, e && (o += n); o > n && i[o % t].skip;)
        o--;
    return o %= t, {
        start: n,
        end: o
    }
}
function La(i, t, e, s) {
    let n = i.length,
        o = [],
        a = t,
        r = i[t],
        l;
    for (l = t + 1; l <= e; ++l) {
        let c = i[l % n];
        c.skip || c.stop ? r.skip || (s = !1, o.push({
            start: t % n,
            end: (l - 1) % n,
            loop: s
        }), t = a = c.stop ? l : null) : (a = l, r.skip && (t = l)),
        r = c
    }
    return a !== null && o.push({
        start: t % n,
        end: a % n,
        loop: s
    }), o
}
function nn(i, t) {
    let e = i.points,
        s = i.options.spanGaps,
        n = e.length;
    if (!n)
        return [];
    let o = !!i._loop,
        {start: a, end: r} = Ta(e, n, o, s);
    if (s === !0)
        return Ss(i, [{
            start: a,
            end: r,
            loop: o
        }], e, t);
    let l = r < a ? r + n : r,
        c = !!i._fullLoop && a === 0 && r === n - 1;
    return Ss(i, La(e, a, l, c), e, t)
}
function Ss(i, t, e, s) {
    return !s || !s.setContext || !e ? t : Ra(i, t, e, s)
}
function Ra(i, t, e, s) {
    let n = i._chart.getContext(),
        o = ws(i.options),
        {_datasetIndex: a, options: {spanGaps: r}} = i,
        l = e.length,
        c = [],
        h = o,
        d = t[0].start,
        u = d;
    function f(p, g, m, b) {
        let _ = r ? -1 : 1;
        if (p !== g) {
            for (p += l; e[p % l].skip;)
                p -= _;
            for (; e[g % l].skip;)
                g += _;
            p % l !== g % l && (c.push({
                start: p % l,
                end: g % l,
                loop: m,
                style: b
            }), h = b, d = g % l)
        }
    }
    for (let p of t) {
        d = r ? d : p.start;
        let g = e[d % l],
            m;
        for (u = d + 1; u <= p.end; u++) {
            let b = e[u % l];
            m = ws(s.setContext(ct(n, {
                type: "segment",
                p0: g,
                p1: b,
                p0DataIndex: (u - 1) % l,
                p1DataIndex: u % l,
                datasetIndex: a
            }))),
            Ea(m, h) && f(d, u - 1, p.loop, h),
            g = b,
            h = m
        }
        d < u - 1 && f(d, u - 1, p.loop, h)
    }
    return c
}
function ws(i) {
    return {
        backgroundColor: i.backgroundColor,
        borderCapStyle: i.borderCapStyle,
        borderDash: i.borderDash,
        borderDashOffset: i.borderDashOffset,
        borderJoinStyle: i.borderJoinStyle,
        borderWidth: i.borderWidth,
        borderColor: i.borderColor
    }
}
function Ea(i, t) {
    if (!t)
        return !1;
    let e = [],
        s = function(n, o) {
            return ki(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o
        };
    return JSON.stringify(i, s) !== JSON.stringify(t, s)
}
var $i = class {
        constructor()
        {
            this._request = null,
            this._charts = new Map,
            this._running = !1,
            this._lastDate = void 0
        }
        _notify(t, e, s, n)
        {
            let o = e.listeners[n],
                a = e.duration;
            o.forEach(r => r({
                chart: t,
                initial: e.initial,
                numSteps: a,
                currentStep: Math.min(s - e.start, a)
            }))
        }
        _refresh()
        {
            this._request || (this._running = !0, this._request = _i.call(window, () => {
                this._update(),
                this._request = null,
                this._running && this._refresh()
            }))
        }
        _update(t=Date.now())
        {
            let e = 0;
            this._charts.forEach((s, n) => {
                if (!s.running || !s.items.length)
                    return;
                let o = s.items,
                    a = o.length - 1,
                    r = !1,
                    l;
                for (; a >= 0; --a)
                    l = o[a],
                    l._active ? (l._total > s.duration && (s.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
                r && (n.draw(), this._notify(n, s, t, "progress")),
                o.length || (s.running = !1, this._notify(n, s, t, "complete"), s.initial = !1),
                e += o.length
            }),
            this._lastDate = t,
            e === 0 && (this._running = !1)
        }
        _getAnims(t)
        {
            let e = this._charts,
                s = e.get(t);
            return s || (s = {
                running: !1,
                initial: !0,
                items: [],
                listeners: {
                    complete: [],
                    progress: []
                }
            }, e.set(t, s)), s
        }
        listen(t, e, s)
        {
            this._getAnims(t).listeners[e].push(s)
        }
        add(t, e)
        {
            !e || !e.length || this._getAnims(t).items.push(...e)
        }
        has(t)
        {
            return this._getAnims(t).items.length > 0
        }
        start(t)
        {
            let e = this._charts.get(t);
            e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((s, n) => Math.max(s, n._duration), 0), this._refresh())
        }
        running(t)
        {
            if (!this._running)
                return !1;
            let e = this._charts.get(t);
            return !(!e || !e.running || !e.items.length)
        }
        stop(t)
        {
            let e = this._charts.get(t);
            if (!e || !e.items.length)
                return;
            let s = e.items,
                n = s.length - 1;
            for (; n >= 0; --n)
                s[n].cancel();
            e.items = [],
            this._notify(t, e, Date.now(), "complete")
        }
        remove(t)
        {
            return this._charts.delete(t)
        }
    }
    ,
    ht = new $i,
    on = "transparent",
    Fa = {
        boolean(i, t, e) {
            return e > .5 ? t : i
        },
        color(i, t, e) {
            let s = Si(i || on),
                n = s.valid && Si(t || on);
            return n && n.valid ? n.mix(s, e).hexString() : t
        },
        number(i, t, e) {
            return i + (t - i) * e
        }
    },
    Yi = class {
        constructor(t, e, s, n)
        {
            let o = e[s];
            n = oe([t.to, n, o, t.from]);
            let a = oe([t.from, o, n]);
            this._active = !0,
            this._fn = t.fn || Fa[t.type || typeof a],
            this._easing = zt[t.easing] || zt.linear,
            this._start = Math.floor(Date.now() + (t.delay || 0)),
            this._duration = this._total = Math.floor(t.duration),
            this._loop = !!t.loop,
            this._target = e,
            this._prop = s,
            this._from = a,
            this._to = n,
            this._promises = void 0
        }
        active()
        {
            return this._active
        }
        update(t, e, s)
        {
            if (this._active) {
                this._notify(!1);
                let n = this._target[this._prop],
                    o = s - this._start,
                    a = this._duration - o;
                this._start = s,
                this._duration = Math.floor(Math.max(a, t.duration)),
                this._total += o,
                this._loop = !!t.loop,
                this._to = oe([t.to, e, n, t.from]),
                this._from = oe([t.from, n, e])
            }
        }
        cancel()
        {
            this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1))
        }
        tick(t)
        {
            let e = t - this._start,
                s = this._duration,
                n = this._prop,
                o = this._from,
                a = this._loop,
                r = this._to,
                l;
            if (this._active = o !== r && (a || e < s), !this._active) {
                this._target[n] = r,
                this._notify(!0);
                return
            }
            if (e < 0) {
                this._target[n] = o;
                return
            }
            l = e / s % 2,
            l = a && l > 1 ? 2 - l : l,
            l = this._easing(Math.min(1, Math.max(0, l))),
            this._target[n] = this._fn(o, r, l)
        }
        wait()
        {
            let t = this._promises || (this._promises = []);
            return new Promise((e, s) => {
                t.push({
                    res: e,
                    rej: s
                })
            })
        }
        _notify(t)
        {
            let e = t ? "res" : "rej",
                s = this._promises || [];
            for (let n = 0; n < s.length; n++)
                s[n][e]()
        }
    }
    ,
    qe = class {
        constructor(t, e)
        {
            this._chart = t,
            this._properties = new Map,
            this.configure(e)
        }
        configure(t)
        {
            if (!C(t))
                return;
            let e = Object.keys(I.animation),
                s = this._properties;
            Object.getOwnPropertyNames(t).forEach(n => {
                let o = t[n];
                if (!C(o))
                    return;
                let a = {};
                for (let r of e)
                    a[r] = o[r];
                (E(o.properties) && o.properties || [n]).forEach(r => {
                    (r === n || !s.has(r)) && s.set(r, a)
                })
            })
        }
        _animateOptions(t, e)
        {
            let s = e.options,
                n = za(t, s);
            if (!n)
                return [];
            let o = this._createAnimations(n, s);
            return s.$shared && Ia(t.options.$animations, s).then(() => {
                t.options = s
            }, () => {}), o
        }
        _createAnimations(t, e)
        {
            let s = this._properties,
                n = [],
                o = t.$animations || (t.$animations = {}),
                a = Object.keys(e),
                r = Date.now(),
                l;
            for (l = a.length - 1; l >= 0; --l) {
                let c = a[l];
                if (c.charAt(0) === "$")
                    continue;
                if (c === "options") {
                    n.push(...this._animateOptions(t, e));
                    continue
                }
                let h = e[c],
                    d = o[c],
                    u = s.get(c);
                if (d)
                    if (u && d.active()) {
                        d.update(u, h, r);
                        continue
                    } else
                        d.cancel();
                if (!u || !u.duration) {
                    t[c] = h;
                    continue
                }
                o[c] = d = new Yi(u, t, c, h),
                n.push(d)
            }
            return n
        }
        update(t, e)
        {
            if (this._properties.size === 0) {
                Object.assign(t, e);
                return
            }
            let s = this._createAnimations(t, e);
            if (s.length)
                return ht.add(this._chart, s), !0
        }
    }
    ;
function Ia(i, t) {
    let e = [],
        s = Object.keys(t);
    for (let n = 0; n < s.length; n++) {
        let o = i[s[n]];
        o && o.active() && e.push(o.wait())
    }
    return Promise.all(e)
}
function za(i, t) {
    if (!t)
        return;
    let e = i.options;
    if (!e) {
        i.options = t;
        return
    }
    return e.$shared && (i.options = e = Object.assign({}, e, {
        $shared: !1,
        $animations: {}
    })), e
}
function an(i, t) {
    let e = i && i.options || {},
        s = e.reverse,
        n = e.min === void 0 ? t : 0,
        o = e.max === void 0 ? t : 0;
    return {
        start: s ? o : n,
        end: s ? n : o
    }
}
function Ba(i, t, e) {
    if (e === !1)
        return !1;
    let s = an(i, e),
        n = an(t, e);
    return {
        top: n.end,
        right: s.end,
        bottom: n.start,
        left: s.start
    }
}
function Va(i) {
    let t,
        e,
        s,
        n;
    return C(i) ? (t = i.top, e = i.right, s = i.bottom, n = i.left) : t = e = s = n = i, {
        top: t,
        right: e,
        bottom: s,
        left: n,
        disabled: i === !1
    }
}
function eo(i, t) {
    let e = [],
        s = i._getSortedDatasetMetas(t),
        n,
        o;
    for (n = 0, o = s.length; n < o; ++n)
        e.push(s[n].index);
    return e
}
function rn(i, t, e, s={}) {
    let n = i.keys,
        o = s.mode === "single",
        a,
        r,
        l,
        c;
    if (t === null)
        return;
    let h = !1;
    for (a = 0, r = n.length; a < r; ++a) {
        if (l = +n[a], l === e) {
            if (h = !0, s.all)
                continue;
            break
        }
        c = i.values[l],
        F(c) && (o || t === 0 || wt(t) === wt(c)) && (t += c)
    }
    return !h && !s.all ? 0 : t
}
function Wa(i, t) {
    let {iScale: e, vScale: s} = t,
        n = e.axis === "x" ? "x" : "y",
        o = s.axis === "x" ? "x" : "y",
        a = Object.keys(i),
        r = new Array(a.length),
        l,
        c,
        h;
    for (l = 0, c = a.length; l < c; ++l)
        h = a[l],
        r[l] = {
            [n]: h,
            [o]: i[h]
        };
    return r
}
function zi(i, t) {
    let e = i && i.options.stacked;
    return e || e === void 0 && t.stack !== void 0
}
function Na(i, t, e) {
    return `${i.id}.${t.id}.${e.stack || e.type}`
}
function Ha(i) {
    let {min: t, max: e, minDefined: s, maxDefined: n} = i.getUserBounds();
    return {
        min: s ? t : Number.NEGATIVE_INFINITY,
        max: n ? e : Number.POSITIVE_INFINITY
    }
}
function ja(i, t, e) {
    let s = i[t] || (i[t] = {});
    return s[e] || (s[e] = {})
}
function ln(i, t, e, s) {
    for (let n of t.getMatchingVisibleMetas(s).reverse()) {
        let o = i[n.index];
        if (e && o > 0 || !e && o < 0)
            return n.index
    }
    return null
}
function cn(i, t) {
    let {chart: e, _cachedMeta: s} = i,
        n = e._stacks || (e._stacks = {}),
        {iScale: o, vScale: a, index: r} = s,
        l = o.axis,
        c = a.axis,
        h = Na(o, a, s),
        d = t.length,
        u;
    for (let f = 0; f < d; ++f) {
        let p = t[f],
            {[l]: g, [c]: m} = p,
            b = p._stacks || (p._stacks = {});
        u = b[c] = ja(n, h, g),
        u[r] = m,
        u._top = ln(u, a, !0, s.type),
        u._bottom = ln(u, a, !1, s.type);
        let _ = u._visualValues || (u._visualValues = {});
        _[r] = m
    }
}
function Bi(i, t) {
    let e = i.scales;
    return Object.keys(e).filter(s => e[s].axis === t).shift()
}
function $a(i, t) {
    return ct(i, {
        active: !1,
        dataset: void 0,
        datasetIndex: t,
        index: t,
        mode: "default",
        type: "dataset"
    })
}
function Ya(i, t, e) {
    return ct(i, {
        active: !1,
        dataIndex: t,
        parsed: void 0,
        raw: void 0,
        element: e,
        index: t,
        mode: "default",
        type: "data"
    })
}
function ae(i, t) {
    let e = i.controller.index,
        s = i.vScale && i.vScale.axis;
    if (s) {
        t = t || i._parsed;
        for (let n of t) {
            let o = n._stacks;
            if (!o || o[s] === void 0 || o[s][e] === void 0)
                return;
            delete o[s][e],
            o[s]._visualValues !== void 0 && o[s]._visualValues[e] !== void 0 && delete o[s]._visualValues[e]
        }
    }
}
var Vi = i => i === "reset" || i === "none",
    hn = (i, t) => t ? i : Object.assign({}, i),
    Ua = (i, t, e) => i && !t.hidden && t._stacked && {
        keys: eo(e, !0),
        values: null
    },
    fe = class {
        static defaults = {};
        static datasetElementType = null;
        static dataElementType = null;
        constructor(t, e)
        {
            this.chart = t,
            this._ctx = t.ctx,
            this.index = e,
            this._cachedDataOpts = {},
            this._cachedMeta = this.getMeta(),
            this._type = this._cachedMeta.type,
            this.options = void 0,
            this._parsing = !1,
            this._data = void 0,
            this._objectData = void 0,
            this._sharedOptions = void 0,
            this._drawStart = void 0,
            this._drawCount = void 0,
            this.enableOptionSharing = !1,
            this.supportsDecimation = !1,
            this.$context = void 0,
            this._syncList = [],
            this.datasetElementType = new.target.datasetElementType,
            this.dataElementType = new.target.dataElementType,
            this.initialize()
        }
        initialize()
        {
            let t = this._cachedMeta;
            this.configure(),
            this.linkScales(),
            t._stacked = zi(t.vScale, t),
            this.addElements(),
            this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options")
        }
        updateIndex(t)
        {
            this.index !== t && ae(this._cachedMeta),
            this.index = t
        }
        linkScales()
        {
            let t = this.chart,
                e = this._cachedMeta,
                s = this.getDataset(),
                n = (d, u, f, p) => d === "x" ? u : d === "r" ? p : f,
                o = e.xAxisID = P(s.xAxisID, Bi(t, "x")),
                a = e.yAxisID = P(s.yAxisID, Bi(t, "y")),
                r = e.rAxisID = P(s.rAxisID, Bi(t, "r")),
                l = e.indexAxis,
                c = e.iAxisID = n(l, o, a, r),
                h = e.vAxisID = n(l, a, o, r);
            e.xScale = this.getScaleForId(o),
            e.yScale = this.getScaleForId(a),
            e.rScale = this.getScaleForId(r),
            e.iScale = this.getScaleForId(c),
            e.vScale = this.getScaleForId(h)
        }
        getDataset()
        {
            return this.chart.data.datasets[this.index]
        }
        getMeta()
        {
            return this.chart.getDatasetMeta(this.index)
        }
        getScaleForId(t)
        {
            return this.chart.scales[t]
        }
        _getOtherScale(t)
        {
            let e = this._cachedMeta;
            return t === e.iScale ? e.vScale : e.iScale
        }
        reset()
        {
            this._update("reset")
        }
        _destroy()
        {
            let t = this._cachedMeta;
            this._data && xi(this._data, this),
            t._stacked && ae(t)
        }
        _dataCheck()
        {
            let t = this.getDataset(),
                e = t.data || (t.data = []),
                s = this._data;
            if (C(e)) {
                let n = this._cachedMeta;
                this._data = Wa(e, n)
            } else if (s !== e) {
                if (s) {
                    xi(s, this);
                    let n = this._cachedMeta;
                    ae(n),
                    n._parsed = []
                }
                e && Object.isExtensible(e) && zs(e, this),
                this._syncList = [],
                this._data = e
            }
        }
        addElements()
        {
            let t = this._cachedMeta;
            this._dataCheck(),
            this.datasetElementType && (t.dataset = new this.datasetElementType)
        }
        buildOrUpdateElements(t)
        {
            let e = this._cachedMeta,
                s = this.getDataset(),
                n = !1;
            this._dataCheck();
            let o = e._stacked;
            e._stacked = zi(e.vScale, e),
            e.stack !== s.stack && (n = !0, ae(e), e.stack = s.stack),
            this._resyncElements(t),
            (n || o !== e._stacked) && (cn(this, e._parsed), e._stacked = zi(e.vScale, e))
        }
        configure()
        {
            let t = this.chart.config,
                e = t.datasetScopeKeys(this._type),
                s = t.getOptionScopes(this.getDataset(), e, !0);
            this.options = t.createResolver(s, this.getContext()),
            this._parsing = this.options.parsing,
            this._cachedDataOpts = {}
        }
        parse(t, e)
        {
            let {_cachedMeta: s, _data: n} = this,
                {iScale: o, _stacked: a} = s,
                r = o.axis,
                l = t === 0 && e === n.length ? !0 : s._sorted,
                c = t > 0 && s._parsed[t - 1],
                h,
                d,
                u;
            if (this._parsing === !1)
                s._parsed = n,
                s._sorted = !0,
                u = n;
            else {
                E(n[t]) ? u = this.parseArrayData(s, n, t, e) : C(n[t]) ? u = this.parseObjectData(s, n, t, e) : u = this.parsePrimitiveData(s, n, t, e);
                let f = () => d[r] === null || c && d[r] < c[r];
                for (h = 0; h < e; ++h)
                    s._parsed[h + t] = d = u[h],
                    l && (f() && (l = !1), c = d);
                s._sorted = l
            }
            a && cn(this, u)
        }
        parsePrimitiveData(t, e, s, n)
        {
            let {iScale: o, vScale: a} = t,
                r = o.axis,
                l = a.axis,
                c = o.getLabels(),
                h = o === a,
                d = new Array(n),
                u,
                f,
                p;
            for (u = 0, f = n; u < f; ++u)
                p = u + s,
                d[u] = {
                    [r]: h || o.parse(c[p], p),
                    [l]: a.parse(e[p], p)
                };
            return d
        }
        parseArrayData(t, e, s, n)
        {
            let {xScale: o, yScale: a} = t,
                r = new Array(n),
                l,
                c,
                h,
                d;
            for (l = 0, c = n; l < c; ++l)
                h = l + s,
                d = e[h],
                r[l] = {
                    x: o.parse(d[0], h),
                    y: a.parse(d[1], h)
                };
            return r
        }
        parseObjectData(t, e, s, n)
        {
            let {xScale: o, yScale: a} = t,
                {xAxisKey: r="x", yAxisKey: l="y"} = this._parsing,
                c = new Array(n),
                h,
                d,
                u,
                f;
            for (h = 0, d = n; h < d; ++h)
                u = h + s,
                f = e[u],
                c[h] = {
                    x: o.parse(Qt(f, r), u),
                    y: a.parse(Qt(f, l), u)
                };
            return c
        }
        getParsed(t)
        {
            return this._cachedMeta._parsed[t]
        }
        getDataElement(t)
        {
            return this._cachedMeta.data[t]
        }
        applyStack(t, e, s)
        {
            let n = this.chart,
                o = this._cachedMeta,
                a = e[t.axis],
                r = {
                    keys: eo(n, !0),
                    values: e._stacks[t.axis]._visualValues
                };
            return rn(r, a, o.index, {
                mode: s
            })
        }
        updateRangeFromParsed(t, e, s, n)
        {
            let o = s[e.axis],
                a = o === null ? NaN : o,
                r = n && s._stacks[e.axis];
            n && r && (n.values = r, a = rn(n, o, this._cachedMeta.index)),
            t.min = Math.min(t.min, a),
            t.max = Math.max(t.max, a)
        }
        getMinMax(t, e)
        {
            let s = this._cachedMeta,
                n = s._parsed,
                o = s._sorted && t === s.iScale,
                a = n.length,
                r = this._getOtherScale(t),
                l = Ua(e, s, this.chart),
                c = {
                    min: Number.POSITIVE_INFINITY,
                    max: Number.NEGATIVE_INFINITY
                },
                {min: h, max: d} = Ha(r),
                u,
                f;
            function p() {
                f = n[u];
                let g = f[r.axis];
                return !F(f[t.axis]) || h > g || d < g
            }
            for (u = 0; u < a && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++u)
                ;
            if (o) {
                for (u = a - 1; u >= 0; --u)
                    if (!p()) {
                        this.updateRangeFromParsed(c, t, f, l);
                        break
                    }
            }
            return c
        }
        getAllParsedValues(t)
        {
            let e = this._cachedMeta._parsed,
                s = [],
                n,
                o,
                a;
            for (n = 0, o = e.length; n < o; ++n)
                a = e[n][t.axis],
                F(a) && s.push(a);
            return s
        }
        getMaxOverflow()
        {
            return !1
        }
        getLabelAndValue(t)
        {
            let e = this._cachedMeta,
                s = e.iScale,
                n = e.vScale,
                o = this.getParsed(t);
            return {
                label: s ? "" + s.getLabelForValue(o[s.axis]) : "",
                value: n ? "" + n.getLabelForValue(o[n.axis]) : ""
            }
        }
        _update(t)
        {
            let e = this._cachedMeta;
            this.update(t || "default"),
            e._clip = Va(P(this.options.clip, Ba(e.xScale, e.yScale, this.getMaxOverflow())))
        }
        update(t) {}
        draw()
        {
            let t = this._ctx,
                e = this.chart,
                s = this._cachedMeta,
                n = s.data || [],
                o = e.chartArea,
                a = [],
                r = this._drawStart || 0,
                l = this._drawCount || n.length - r,
                c = this.options.drawActiveElementsOnTop,
                h;
            for (s.dataset && s.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
                let d = n[h];
                d.hidden || (d.active && c ? a.push(d) : d.draw(t, o))
            }
            for (h = 0; h < a.length; ++h)
                a[h].draw(t, o)
        }
        getStyle(t, e)
        {
            let s = e ? "active" : "default";
            return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(s) : this.resolveDataElementOptions(t || 0, s)
        }
        getContext(t, e, s)
        {
            let n = this.getDataset(),
                o;
            if (t >= 0 && t < this._cachedMeta.data.length) {
                let a = this._cachedMeta.data[t];
                o = a.$context || (a.$context = Ya(this.getContext(), t, a)),
                o.parsed = this.getParsed(t),
                o.raw = n.data[t],
                o.index = o.dataIndex = t
            } else
                o = this.$context || (this.$context = $a(this.chart.getContext(), this.index)),
                o.dataset = n,
                o.index = o.datasetIndex = this.index;
            return o.active = !!e, o.mode = s, o
        }
        resolveDatasetElementOptions(t)
        {
            return this._resolveElementOptions(this.datasetElementType.id, t)
        }
        resolveDataElementOptions(t, e)
        {
            return this._resolveElementOptions(this.dataElementType.id, e, t)
        }
        _resolveElementOptions(t, e="default", s)
        {
            let n = e === "active",
                o = this._cachedDataOpts,
                a = t + "-" + e,
                r = o[a],
                l = this.enableOptionSharing && te(s);
            if (r)
                return hn(r, l);
            let c = this.chart.config,
                h = c.datasetElementScopeKeys(this._type, t),
                d = n ? [`${t}Hover`, "hover", t, ""] : [t, ""],
                u = c.getOptionScopes(this.getDataset(), h),
                f = Object.keys(I.elements[t]),
                p = () => this.getContext(s, n, e),
                g = c.resolveNamedOptions(u, f, p, d);
            return g.$shared && (g.$shared = l, o[a] = Object.freeze(hn(g, l))), g
        }
        _resolveAnimations(t, e, s)
        {
            let n = this.chart,
                o = this._cachedDataOpts,
                a = `animation-${e}`,
                r = o[a];
            if (r)
                return r;
            let l;
            if (n.options.animation !== !1) {
                let h = this.chart.config,
                    d = h.datasetAnimationScopeKeys(this._type, e),
                    u = h.getOptionScopes(this.getDataset(), d);
                l = h.createResolver(u, this.getContext(t, s, e))
            }
            let c = new qe(n, l && l.animations);
            return l && l._cacheable && (o[a] = Object.freeze(c)), c
        }
        getSharedOptions(t)
        {
            if (t.$shared)
                return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
        }
        includeOptions(t, e)
        {
            return !e || Vi(t) || this.chart._animationsDisabled
        }
        _getSharedOptions(t, e)
        {
            let s = this.resolveDataElementOptions(t, e),
                n = this._sharedOptions,
                o = this.getSharedOptions(s),
                a = this.includeOptions(e, o) || o !== n;
            return this.updateSharedOptions(o, e, s), {
                sharedOptions: o,
                includeOptions: a
            }
        }
        updateElement(t, e, s, n)
        {
            Vi(n) ? Object.assign(t, s) : this._resolveAnimations(e, n).update(t, s)
        }
        updateSharedOptions(t, e, s)
        {
            t && !Vi(e) && this._resolveAnimations(void 0, e).update(t, s)
        }
        _setStyle(t, e, s, n)
        {
            t.active = n;
            let o = this.getStyle(e, n);
            this._resolveAnimations(e, s, n).update(t, {
                options: !n && this.getSharedOptions(o) || o
            })
        }
        removeHoverStyle(t, e, s)
        {
            this._setStyle(t, s, "active", !1)
        }
        setHoverStyle(t, e, s)
        {
            this._setStyle(t, s, "active", !0)
        }
        _removeDatasetHoverStyle()
        {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !1)
        }
        _setDatasetHoverStyle()
        {
            let t = this._cachedMeta.dataset;
            t && this._setStyle(t, void 0, "active", !0)
        }
        _resyncElements(t)
        {
            let e = this._data,
                s = this._cachedMeta.data;
            for (let [r, l, c] of this._syncList)
                this[r](l, c);
            this._syncList = [];
            let n = s.length,
                o = e.length,
                a = Math.min(o, n);
            a && this.parse(0, a),
            o > n ? this._insertElements(n, o - n, t) : o < n && this._removeElements(o, n - o)
        }
        _insertElements(t, e, s=!0)
        {
            let n = this._cachedMeta,
                o = n.data,
                a = t + e,
                r,
                l = c => {
                    for (c.length += e, r = c.length - 1; r >= a; r--)
                        c[r] = c[r - e]
                };
            for (l(o), r = t; r < a; ++r)
                o[r] = new this.dataElementType;
            this._parsing && l(n._parsed),
            this.parse(t, e),
            s && this.updateElements(o, t, e, "reset")
        }
        updateElements(t, e, s, n) {}
        _removeElements(t, e)
        {
            let s = this._cachedMeta;
            if (this._parsing) {
                let n = s._parsed.splice(t, e);
                s._stacked && ae(s, n)
            }
            s.data.splice(t, e)
        }
        _sync(t)
        {
            if (this._parsing)
                this._syncList.push(t);
            else {
                let [e, s, n] = t;
                this[e](s, n)
            }
            this.chart._dataChanges.push([this.index, ...t])
        }
        _onDataPush()
        {
            let t = arguments.length;
            this._sync(["_insertElements", this.getDataset().data.length - t, t])
        }
        _onDataPop()
        {
            this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1])
        }
        _onDataShift()
        {
            this._sync(["_removeElements", 0, 1])
        }
        _onDataSplice(t, e)
        {
            e && this._sync(["_removeElements", t, e]);
            let s = arguments.length - 2;
            s && this._sync(["_insertElements", t, s])
        }
        _onDataUnshift()
        {
            this._sync(["_insertElements", 0, arguments.length])
        }
    }
    ;
var Ui = class  extends fe{
    static id = "line";
    static defaults = {
        datasetElementType: "line",
        dataElementType: "point",
        showLine: !0,
        spanGaps: !1
    };
    static overrides = {
        scales: {
            _index_: {
                type: "category"
            },
            _value_: {
                type: "linear"
            }
        }
    };
    initialize()
    {
        this.enableOptionSharing = !0,
        this.supportsDecimation = !0,
        super.initialize()
    }
    update(t)
    {
        let e = this._cachedMeta,
            {dataset: s, data: n=[], _dataset: o} = e,
            a = this.chart._animationsDisabled,
            {start: r, count: l} = vi(e, n, a);
        this._drawStart = r,
        this._drawCount = l,
        Mi(e) && (r = 0, l = n.length),
        s._chart = this.chart,
        s._datasetIndex = this.index,
        s._decimated = !!o._decimated,
        s.points = n;
        let c = this.resolveDatasetElementOptions(t);
        this.options.showLine || (c.borderWidth = 0),
        c.segment = this.options.segment,
        this.updateElement(s, void 0, {
            animated: !a,
            options: c
        }, t),
        this.updateElements(n, r, l, t)
    }
    updateElements(t, e, s, n)
    {
        let o = n === "reset",
            {iScale: a, vScale: r, _stacked: l, _dataset: c} = this._cachedMeta,
            {sharedOptions: h, includeOptions: d} = this._getSharedOptions(e, n),
            u = a.axis,
            f = r.axis,
            {spanGaps: p, segment: g} = this.options,
            m = Dt(p) ? p : Number.POSITIVE_INFINITY,
            b = this.chart._animationsDisabled || o || n === "none",
            _ = e + s,
            S = t.length,
            y = e > 0 && this.getParsed(e - 1);
        for (let x = 0; x < S; ++x) {
            let k = t[x],
                v = b ? k : {};
            if (x < e || x >= _) {
                v.skip = !0;
                continue
            }
            let M = this.getParsed(x),
                w = A(M[f]),
                O = v[u] = a.getPixelForValue(M[u], x),
                D = v[f] = o || w ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, M, l) : M[f], x);
            v.skip = isNaN(O) || isNaN(D) || w,
            v.stop = x > 0 && Math.abs(M[u] - y[u]) > m,
            g && (v.parsed = M, v.raw = c.data[x]),
            d && (v.options = h || this.resolveDataElementOptions(x, k.active ? "active" : n)),
            b || this.updateElement(k, x, v, n),
            y = M
        }
    }
    getMaxOverflow()
    {
        let t = this._cachedMeta,
            e = t.dataset,
            s = e.options && e.options.borderWidth || 0,
            n = t.data || [];
        if (!n.length)
            return s;
        let o = n[0].size(this.resolveDataElementOptions(0)),
            a = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
        return Math.max(s, o, a) / 2
    }
    draw()
    {
        let t = this._cachedMeta;
        t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
        super.draw()
    }
}
;
var Xi = class  extends fe{
    static id = "scatter";
    static defaults = {
        datasetElementType: !1,
        dataElementType: "point",
        showLine: !1,
        fill: !1
    };
    static overrides = {
        interaction: {
            mode: "point"
        },
        scales: {
            x: {
                type: "linear"
            },
            y: {
                type: "linear"
            }
        }
    };
    getLabelAndValue(t)
    {
        let e = this._cachedMeta,
            s = this.chart.data.labels || [],
            {xScale: n, yScale: o} = e,
            a = this.getParsed(t),
            r = n.getLabelForValue(a.x),
            l = o.getLabelForValue(a.y);
        return {
            label: s[t] || "",
            value: "(" + r + ", " + l + ")"
        }
    }
    update(t)
    {
        let e = this._cachedMeta,
            {data: s=[]} = e,
            n = this.chart._animationsDisabled,
            {start: o, count: a} = vi(e, s, n);
        if (this._drawStart = o, this._drawCount = a, Mi(e) && (o = 0, a = s.length), this.options.showLine) {
            this.datasetElementType || this.addElements();
            let {dataset: r, _dataset: l} = e;
            r._chart = this.chart,
            r._datasetIndex = this.index,
            r._decimated = !!l._decimated,
            r.points = s;
            let c = this.resolveDatasetElementOptions(t);
            c.segment = this.options.segment,
            this.updateElement(r, void 0, {
                animated: !n,
                options: c
            }, t)
        } else
            this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
        this.updateElements(s, o, a, t)
    }
    addElements()
    {
        let {showLine: t} = this.options;
        !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")),
        super.addElements()
    }
    updateElements(t, e, s, n)
    {
        let o = n === "reset",
            {iScale: a, vScale: r, _stacked: l, _dataset: c} = this._cachedMeta,
            h = this.resolveDataElementOptions(e, n),
            d = this.getSharedOptions(h),
            u = this.includeOptions(n, d),
            f = a.axis,
            p = r.axis,
            {spanGaps: g, segment: m} = this.options,
            b = Dt(g) ? g : Number.POSITIVE_INFINITY,
            _ = this.chart._animationsDisabled || o || n === "none",
            S = e > 0 && this.getParsed(e - 1);
        for (let y = e; y < e + s; ++y) {
            let x = t[y],
                k = this.getParsed(y),
                v = _ ? x : {},
                M = A(k[p]),
                w = v[f] = a.getPixelForValue(k[f], y),
                O = v[p] = o || M ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, k, l) : k[p], y);
            v.skip = isNaN(w) || isNaN(O) || M,
            v.stop = y > 0 && Math.abs(k[f] - S[f]) > b,
            m && (v.parsed = k, v.raw = c.data[y]),
            u && (v.options = d || this.resolveDataElementOptions(y, x.active ? "active" : n)),
            _ || this.updateElement(x, y, v, n),
            S = k
        }
        this.updateSharedOptions(d, n, h)
    }
    getMaxOverflow()
    {
        let t = this._cachedMeta,
            e = t.data || [];
        if (!this.options.showLine) {
            let r = 0;
            for (let l = e.length - 1; l >= 0; --l)
                r = Math.max(r, e[l].size(this.resolveDataElementOptions(l)) / 2);
            return r > 0 && r
        }
        let s = t.dataset,
            n = s.options && s.options.borderWidth || 0;
        if (!e.length)
            return n;
        let o = e[0].size(this.resolveDataElementOptions(0)),
            a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
        return Math.max(n, o, a) / 2
    }
}
;
function Tt() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.")
}
var Ki = class i {
        static override(t)
        {
            Object.assign(i.prototype, t)
        }
        options;
        constructor(t)
        {
            this.options = t || {}
        }
        init() {}
        formats()
        {
            return Tt()
        }
        parse()
        {
            return Tt()
        }
        format()
        {
            return Tt()
        }
        add()
        {
            return Tt()
        }
        diff()
        {
            return Tt()
        }
        startOf()
        {
            return Tt()
        }
        endOf()
        {
            return Tt()
        }
    }
    ,
    Xa = {
        _date: Ki
    };
function Ka(i, t, e, s) {
    let {controller: n, data: o, _sorted: a} = i,
        r = n._cachedMeta.iScale,
        l = i.dataset && i.dataset.options ? i.dataset.options.spanGaps : null;
    if (r && t === r.axis && t !== "r" && a && o.length) {
        let c = r._reversePixels ? Es : mt;
        if (s) {
            if (n._sharedOptions) {
                let h = o[0],
                    d = typeof h.getRange == "function" && h.getRange(t);
                if (d) {
                    let u = c(o, t, e - d),
                        f = c(o, t, e + d);
                    return {
                        lo: u.lo,
                        hi: f.hi
                    }
                }
            }
        } else {
            let h = c(o, t, e);
            if (l) {
                let {vScale: d} = n._cachedMeta,
                    {_parsed: u} = i,
                    f = u.slice(0, h.lo + 1).reverse().findIndex(g => !A(g[d.axis]));
                h.lo -= Math.max(0, f);
                let p = u.slice(h.hi).findIndex(g => !A(g[d.axis]));
                h.hi += Math.max(0, p)
            }
            return h
        }
    }
    return {
        lo: 0,
        hi: o.length - 1
    }
}
function me(i, t, e, s, n) {
    let o = i.getSortedVisibleDatasetMetas(),
        a = e[t];
    for (let r = 0, l = o.length; r < l; ++r) {
        let {index: c, data: h} = o[r],
            {lo: d, hi: u} = Ka(o[r], t, a, n);
        for (let f = d; f <= u; ++f) {
            let p = h[f];
            p.skip || s(p, c, f)
        }
    }
}
function qa(i) {
    let t = i.indexOf("x") !== -1,
        e = i.indexOf("y") !== -1;
    return function(s, n) {
        let o = t ? Math.abs(s.x - n.x) : 0,
            a = e ? Math.abs(s.y - n.y) : 0;
        return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))
    }
}
function Wi(i, t, e, s, n) {
    let o = [];
    return !n && !i.isPointInArea(t) || me(i, e, t, function(r, l, c) {
        !n && !et(r, i.chartArea, 0) || r.inRange(t.x, t.y, s) && o.push({
            element: r,
            datasetIndex: l,
            index: c
        })
    }, !0), o
}
function Ga(i, t, e, s) {
    let n = [];
    function o(a, r, l) {
        let {startAngle: c, endAngle: h} = a.getProps(["startAngle", "endAngle"], s),
            {angle: d} = Ls(a, {
                x: t.x,
                y: t.y
            });
        bi(d, c, h) && n.push({
            element: a,
            datasetIndex: r,
            index: l
        })
    }
    return me(i, e, t, o), n
}
function Za(i, t, e, s, n, o) {
    let a = [],
        r = qa(e),
        l = Number.POSITIVE_INFINITY;
    function c(h, d, u) {
        let f = h.inRange(t.x, t.y, n);
        if (s && !f)
            return;
        let p = h.getCenterPoint(n);
        if (!(!!o || i.isPointInArea(p)) && !f)
            return;
        let m = r(t, p);
        m < l ? (a = [{
            element: h,
            datasetIndex: d,
            index: u
        }], l = m) : m === l && a.push({
            element: h,
            datasetIndex: d,
            index: u
        })
    }
    return me(i, e, t, c), a
}
function Ni(i, t, e, s, n, o) {
    return !o && !i.isPointInArea(t) ? [] : e === "r" && !s ? Ga(i, t, e, n) : Za(i, t, e, s, n, o)
}
function dn(i, t, e, s, n) {
    let o = [],
        a = e === "x" ? "inXRange" : "inYRange",
        r = !1;
    return me(i, e, t, (l, c, h) => {
        l[a] && l[a](t[e], n) && (o.push({
            element: l,
            datasetIndex: c,
            index: h
        }), r = r || l.inRange(t.x, t.y, n))
    }), s && !r ? [] : o
}
var Ja = {
        evaluateInteractionItems: me,
        modes: {
            index(i, t, e, s) {
                let n = yt(t, i),
                    o = e.axis || "x",
                    a = e.includeInvisible || !1,
                    r = e.intersect ? Wi(i, n, o, s, a) : Ni(i, n, o, !1, s, a),
                    l = [];
                return r.length ? (i.getSortedVisibleDatasetMetas().forEach(c => {
                    let h = r[0].index,
                        d = c.data[h];
                    d && !d.skip && l.push({
                        element: d,
                        datasetIndex: c.index,
                        index: h
                    })
                }), l) : []
            },
            dataset(i, t, e, s) {
                let n = yt(t, i),
                    o = e.axis || "xy",
                    a = e.includeInvisible || !1,
                    r = e.intersect ? Wi(i, n, o, s, a) : Ni(i, n, o, !1, s, a);
                if (r.length > 0) {
                    let l = r[0].datasetIndex,
                        c = i.getDatasetMeta(l).data;
                    r = [];
                    for (let h = 0; h < c.length; ++h)
                        r.push({
                            element: c[h],
                            datasetIndex: l,
                            index: h
                        })
                }
                return r
            },
            point(i, t, e, s) {
                let n = yt(t, i),
                    o = e.axis || "xy",
                    a = e.includeInvisible || !1;
                return Wi(i, n, o, s, a)
            },
            nearest(i, t, e, s) {
                let n = yt(t, i),
                    o = e.axis || "xy",
                    a = e.includeInvisible || !1;
                return Ni(i, n, o, e.intersect, s, a)
            },
            x(i, t, e, s) {
                let n = yt(t, i);
                return dn(i, n, "x", e.intersect, s)
            },
            y(i, t, e, s) {
                let n = yt(t, i);
                return dn(i, n, "y", e.intersect, s)
            }
        }
    },
    io = ["left", "top", "right", "bottom"];
function re(i, t) {
    return i.filter(e => e.pos === t)
}
function un(i, t) {
    return i.filter(e => io.indexOf(e.pos) === -1 && e.box.axis === t)
}
function le(i, t) {
    return i.sort((e, s) => {
        let n = t ? s : e,
            o = t ? e : s;
        return n.weight === o.weight ? n.index - o.index : n.weight - o.weight
    })
}
function Qa(i) {
    let t = [],
        e,
        s,
        n,
        o,
        a,
        r;
    for (e = 0, s = (i || []).length; e < s; ++e)
        n = i[e],
        {position: o, options: {stack: a, stackWeight: r=1}} = n,
        t.push({
            index: e,
            box: n,
            pos: o,
            horizontal: n.isHorizontal(),
            weight: n.weight,
            stack: a && o + a,
            stackWeight: r
        });
    return t
}
function tr(i) {
    let t = {};
    for (let e of i) {
        let {stack: s, pos: n, stackWeight: o} = e;
        if (!s || !io.includes(n))
            continue;
        let a = t[s] || (t[s] = {
            count: 0,
            placed: 0,
            weight: 0,
            size: 0
        });
        a.count++,
        a.weight += o
    }
    return t
}
function er(i, t) {
    let e = tr(i),
        {vBoxMaxWidth: s, hBoxMaxHeight: n} = t,
        o,
        a,
        r;
    for (o = 0, a = i.length; o < a; ++o) {
        r = i[o];
        let {fullSize: l} = r.box,
            c = e[r.stack],
            h = c && r.stackWeight / c.weight;
        r.horizontal ? (r.width = h ? h * s : l && t.availableWidth, r.height = n) : (r.width = s, r.height = h ? h * n : l && t.availableHeight)
    }
    return e
}
function ir(i) {
    let t = Qa(i),
        e = le(t.filter(c => c.box.fullSize), !0),
        s = le(re(t, "left"), !0),
        n = le(re(t, "right")),
        o = le(re(t, "top"), !0),
        a = le(re(t, "bottom")),
        r = un(t, "x"),
        l = un(t, "y");
    return {
        fullSize: e,
        leftAndTop: s.concat(o),
        rightAndBottom: n.concat(l).concat(a).concat(r),
        chartArea: re(t, "chartArea"),
        vertical: s.concat(n).concat(l),
        horizontal: o.concat(a).concat(r)
    }
}
function fn(i, t, e, s) {
    return Math.max(i[e], t[e]) + Math.max(i[s], t[s])
}
function so(i, t) {
    i.top = Math.max(i.top, t.top),
    i.left = Math.max(i.left, t.left),
    i.bottom = Math.max(i.bottom, t.bottom),
    i.right = Math.max(i.right, t.right)
}
function sr(i, t, e, s) {
    let {pos: n, box: o} = e,
        a = i.maxPadding;
    if (!C(n)) {
        e.size && (i[n] -= e.size);
        let d = s[e.stack] || {
            size: 0,
            count: 1
        };
        d.size = Math.max(d.size, e.horizontal ? o.height : o.width),
        e.size = d.size / d.count,
        i[n] += e.size
    }
    o.getPadding && so(a, o.getPadding());
    let r = Math.max(0, t.outerWidth - fn(a, i, "left", "right")),
        l = Math.max(0, t.outerHeight - fn(a, i, "top", "bottom")),
        c = r !== i.w,
        h = l !== i.h;
    return i.w = r, i.h = l, e.horizontal ? {
        same: c,
        other: h
    } : {
        same: h,
        other: c
    }
}
function nr(i) {
    let t = i.maxPadding;
    function e(s) {
        let n = Math.max(t[s] - i[s], 0);
        return i[s] += n, n
    }
    i.y += e("top"),
    i.x += e("left"),
    e("right"),
    e("bottom")
}
function or(i, t) {
    let e = t.maxPadding;
    function s(n) {
        let o = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        return n.forEach(a => {
            o[a] = Math.max(t[a], e[a])
        }), o
    }
    return s(i ? ["left", "right"] : ["top", "bottom"])
}
function de(i, t, e, s) {
    let n = [],
        o,
        a,
        r,
        l,
        c,
        h;
    for (o = 0, a = i.length, c = 0; o < a; ++o) {
        r = i[o],
        l = r.box,
        l.update(r.width || t.w, r.height || t.h, or(r.horizontal, t));
        let {same: d, other: u} = sr(t, e, r, s);
        c |= d && n.length,
        h = h || u,
        l.fullSize || n.push(r)
    }
    return c && de(n, t, e, s) || h
}
function Ne(i, t, e, s, n) {
    i.top = e,
    i.left = t,
    i.right = t + s,
    i.bottom = e + n,
    i.width = s,
    i.height = n
}
function gn(i, t, e, s) {
    let n = e.padding,
        {x: o, y: a} = t;
    for (let r of i) {
        let l = r.box,
            c = s[r.stack] || {
                count: 1,
                placed: 0,
                weight: 1
            },
            h = r.stackWeight / c.weight || 1;
        if (r.horizontal) {
            let d = t.w * h,
                u = c.size || l.height;
            te(c.start) && (a = c.start),
            l.fullSize ? Ne(l, n.left, a, e.outerWidth - n.right - n.left, u) : Ne(l, t.left + c.placed, a, d, u),
            c.start = a,
            c.placed += d,
            a = l.bottom
        } else {
            let d = t.h * h,
                u = c.size || l.width;
            te(c.start) && (o = c.start),
            l.fullSize ? Ne(l, o, n.top, u, e.outerHeight - n.bottom - n.top) : Ne(l, o, t.top + c.placed, u, d),
            c.start = o,
            c.placed += d,
            o = l.right
        }
    }
    t.x = o,
    t.y = a
}
var Q = {
        addBox(i, t) {
            i.boxes || (i.boxes = []),
            t.fullSize = t.fullSize || !1,
            t.position = t.position || "top",
            t.weight = t.weight || 0,
            t._layers = t._layers || function() {
                return [{
                    z: 0,
                    draw(e) {
                        t.draw(e)
                    }
                }]
            },
            i.boxes.push(t)
        },
        removeBox(i, t) {
            let e = i.boxes ? i.boxes.indexOf(t) : -1;
            e !== -1 && i.boxes.splice(e, 1)
        },
        configure(i, t, e) {
            t.fullSize = e.fullSize,
            t.position = e.position,
            t.weight = e.weight
        },
        update(i, t, e, s) {
            if (!i)
                return;
            let n = H(i.options.layout.padding),
                o = Math.max(t - n.width, 0),
                a = Math.max(e - n.height, 0),
                r = ir(i.boxes),
                l = r.vertical,
                c = r.horizontal;
            L(i.boxes, g => {
                typeof g.beforeLayout == "function" && g.beforeLayout()
            });
            let h = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1,
                d = Object.freeze({
                    outerWidth: t,
                    outerHeight: e,
                    padding: n,
                    availableWidth: o,
                    availableHeight: a,
                    vBoxMaxWidth: o / 2 / h,
                    hBoxMaxHeight: a / 2
                }),
                u = Object.assign({}, n);
            so(u, H(s));
            let f = Object.assign({
                    maxPadding: u,
                    w: o,
                    h: a,
                    x: n.left,
                    y: n.top
                }, n),
                p = er(l.concat(c), d);
            de(r.fullSize, f, d, p),
            de(l, f, d, p),
            de(c, f, d, p) && de(l, f, d, p),
            nr(f),
            gn(r.leftAndTop, f, d, p),
            f.x += f.w,
            f.y += f.h,
            gn(r.rightAndBottom, f, d, p),
            i.chartArea = {
                left: f.left,
                top: f.top,
                right: f.left + f.w,
                bottom: f.top + f.h,
                height: f.h,
                width: f.w
            },
            L(r.chartArea, g => {
                let m = g.box;
                Object.assign(m, i.chartArea),
                m.update(f.w, f.h, {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                })
            })
        }
    },
    Ge = class {
        acquireContext(t, e) {}
        releaseContext(t)
        {
            return !1
        }
        addEventListener(t, e, s) {}
        removeEventListener(t, e, s) {}
        getDevicePixelRatio()
        {
            return 1
        }
        getMaximumSize(t, e, s, n)
        {
            return e = Math.max(0, e || t.width), s = s || t.height, {
                width: e,
                height: Math.max(0, n ? Math.floor(e / n) : s)
            }
        }
        isAttached(t)
        {
            return !0
        }
        updateConfig(t) {}
    }
    ,
    qi = class  extends Ge{
        acquireContext(t)
        {
            return t && t.getContext && t.getContext("2d") || null
        }
        updateConfig(t)
        {
            t.options.animation = !1
        }
    }
    ,
    Xe = "$chartjs",
    ar = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseup",
        pointerenter: "mouseenter",
        pointerdown: "mousedown",
        pointermove: "mousemove",
        pointerup: "mouseup",
        pointerleave: "mouseout",
        pointerout: "mouseout"
    },
    pn = i => i === null || i === "";
function rr(i, t) {
    let e = i.style,
        s = i.getAttribute("height"),
        n = i.getAttribute("width");
    if (i[Xe] = {
        initial: {
            height: s,
            width: n,
            style: {
                display: e.display,
                height: e.height,
                width: e.width
            }
        }
    }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", pn(n)) {
        let o = Li(i, "width");
        o !== void 0 && (i.width = o)
    }
    if (pn(s))
        if (i.style.height === "")
            i.height = i.width / (t || 2);
        else {
            let o = Li(i, "height");
            o !== void 0 && (i.height = o)
        }
    return i
}
var no = Qs ? {
    passive: !0
} : !1;
function lr(i, t, e) {
    i && i.addEventListener(t, e, no)
}
function cr(i, t, e) {
    i && i.canvas && i.canvas.removeEventListener(t, e, no)
}
function hr(i, t) {
    let e = ar[i.type] || i.type,
        {x: s, y: n} = yt(i, t);
    return {
        type: e,
        chart: t,
        native: i,
        x: s !== void 0 ? s : null,
        y: n !== void 0 ? n : null
    }
}
function Ze(i, t) {
    for (let e of i)
        if (e === t || e.contains(t))
            return !0
}
function dr(i, t, e) {
    let s = i.canvas,
        n = new MutationObserver(o => {
            let a = !1;
            for (let r of o)
                a = a || Ze(r.addedNodes, s),
                a = a && !Ze(r.removedNodes, s);
            a && e()
        });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n
}
function ur(i, t, e) {
    let s = i.canvas,
        n = new MutationObserver(o => {
            let a = !1;
            for (let r of o)
                a = a || Ze(r.removedNodes, s),
                a = a && !Ze(r.addedNodes, s);
            a && e()
        });
    return n.observe(document, {
        childList: !0,
        subtree: !0
    }), n
}
var ge = new Map,
    mn = 0;
function oo() {
    let i = window.devicePixelRatio;
    i !== mn && (mn = i, ge.forEach((t, e) => {
        e.currentDevicePixelRatio !== i && t()
    }))
}
function fr(i, t) {
    ge.size || window.addEventListener("resize", oo),
    ge.set(i, t)
}
function gr(i) {
    ge.delete(i),
    ge.size || window.removeEventListener("resize", oo)
}
function pr(i, t, e) {
    let s = i.canvas,
        n = s && Ve(s);
    if (!n)
        return;
    let o = yi((r, l) => {
            let c = n.clientWidth;
            e(r, l),
            c < n.clientWidth && e()
        }, window),
        a = new ResizeObserver(r => {
            let l = r[0],
                c = l.contentRect.width,
                h = l.contentRect.height;
            c === 0 && h === 0 || o(c, h)
        });
    return a.observe(n), fr(i, o), a
}
function Hi(i, t, e) {
    e && e.disconnect(),
    t === "resize" && gr(i)
}
function mr(i, t, e) {
    let s = i.canvas,
        n = yi(o => {
            i.ctx !== null && e(hr(o, i))
        }, i);
    return lr(s, t, n), n
}
var Gi = class  extends Ge{
    acquireContext(t, e)
    {
        let s = t && t.getContext && t.getContext("2d");
        return s && s.canvas === t ? (rr(t, e), s) : null
    }
    releaseContext(t)
    {
        let e = t.canvas;
        if (!e[Xe])
            return !1;
        let s = e[Xe].initial;
        ["height", "width"].forEach(o => {
            let a = s[o];
            A(a) ? e.removeAttribute(o) : e.setAttribute(o, a)
        });
        let n = s.style || {};
        return Object.keys(n).forEach(o => {
            e.style[o] = n[o]
        }), e.width = e.width, delete e[Xe], !0
    }
    addEventListener(t, e, s)
    {
        this.removeEventListener(t, e);
        let n = t.$proxies || (t.$proxies = {}),
            a = {
                attach: dr,
                detach: ur,
                resize: pr
            }[e] || mr;
        n[e] = a(t, e, s)
    }
    removeEventListener(t, e)
    {
        let s = t.$proxies || (t.$proxies = {}),
            n = s[e];
        if (!n)
            return;
        ({
            attach: Hi,
            detach: Hi,
            resize: Hi
        }[e] || cr)(t, e, n),
        s[e] = void 0
    }
    getDevicePixelRatio()
    {
        return window.devicePixelRatio
    }
    getMaximumSize(t, e, s, n)
    {
        return Js(t, e, s, n)
    }
    isAttached(t)
    {
        let e = t && Ve(t);
        return !!(e && e.isConnected)
    }
}
;
function br(i) {
    return !Be() || typeof OffscreenCanvas < "u" && i instanceof OffscreenCanvas ? qi : Gi
}
var ut = class {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = !1;
    options;
    $animations;
    tooltipPosition(t)
    {
        let {x: e, y: s} = this.getProps(["x", "y"], t);
        return {
            x: e,
            y: s
        }
    }
    hasValue()
    {
        return Dt(this.x) && Dt(this.y)
    }
    getProps(t, e)
    {
        let s = this.$animations;
        if (!e || !s)
            return this;
        let n = {};
        return t.forEach(o => {
            n[o] = s[o] && s[o].active() ? s[o]._to : this[o]
        }), n
    }
}
;
function xr(i, t) {
    let e = i.options.ticks,
        s = _r(i),
        n = Math.min(e.maxTicksLimit || s, s),
        o = e.major.enabled ? vr(t) : [],
        a = o.length,
        r = o[0],
        l = o[a - 1],
        c = [];
    if (a > n)
        return Mr(t, c, o, a / n), c;
    let h = yr(o, t, n);
    if (a > 0) {
        let d,
            u,
            f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
        for (He(t, c, h, A(f) ? 0 : r - f, r), d = 0, u = a - 1; d < u; d++)
            He(t, c, h, o[d], o[d + 1]);
        return He(t, c, h, l, A(f) ? t.length : l + f), c
    }
    return He(t, c, h), c
}
function _r(i) {
    let t = i.options.offset,
        e = i._tickSize(),
        s = i._length / e + (t ? 0 : 1),
        n = i._maxLength / e;
    return Math.floor(Math.min(s, n))
}
function yr(i, t, e) {
    let s = kr(i),
        n = t.length / e;
    if (!s)
        return Math.max(n, 1);
    let o = As(s);
    for (let a = 0, r = o.length - 1; a < r; a++) {
        let l = o[a];
        if (l > n)
            return l
    }
    return Math.max(n, 1)
}
function vr(i) {
    let t = [],
        e,
        s;
    for (e = 0, s = i.length; e < s; e++)
        i[e].major && t.push(e);
    return t
}
function Mr(i, t, e, s) {
    let n = 0,
        o = e[0],
        a;
    for (s = Math.ceil(s), a = 0; a < i.length; a++)
        a === o && (t.push(i[a]), n++, o = e[n * s])
}
function He(i, t, e, s, n) {
    let o = P(s, 0),
        a = Math.min(P(n, i.length), i.length),
        r = 0,
        l,
        c,
        h;
    for (e = Math.ceil(e), n && (l = n - s, e = l / Math.floor(l / e)), h = o; h < 0;)
        r++,
        h = Math.round(o + r * e);
    for (c = Math.max(o, 0); c < a; c++)
        c === h && (t.push(i[c]), r++, h = Math.round(o + r * e))
}
function kr(i) {
    let t = i.length,
        e,
        s;
    if (t < 2)
        return !1;
    for (s = i[0], e = 1; e < t; ++e)
        if (i[e] - i[e - 1] !== s)
            return !1;
    return s
}
var Sr = i => i === "left" ? "right" : i === "right" ? "left" : i,
    bn = (i, t, e) => t === "top" || t === "left" ? i[t] + e : i[t] - e,
    xn = (i, t) => Math.min(t || i, i);
function _n(i, t) {
    let e = [],
        s = i.length / t,
        n = i.length,
        o = 0;
    for (; o < n; o += s)
        e.push(i[Math.floor(o)]);
    return e
}
function wr(i, t, e) {
    let s = i.ticks.length,
        n = Math.min(t, s - 1),
        o = i._startPixel,
        a = i._endPixel,
        r = 1e-6,
        l = i.getPixelForTick(n),
        c;
    if (!(e && (s === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (i.getPixelForTick(1) - l) / 2 : c = (l - i.getPixelForTick(n - 1)) / 2, l += n < t ? c : -c, l < o - r || l > a + r)))
        return l
}
function Pr(i, t) {
    L(i, e => {
        let s = e.gc,
            n = s.length / 2,
            o;
        if (n > t) {
            for (o = 0; o < n; ++o)
                delete e.data[s[o]];
            s.splice(0, n)
        }
    })
}
function ce(i) {
    return i.drawTicks ? i.tickLength : 0
}
function yn(i, t) {
    if (!i.display)
        return 0;
    let e = V(i.font, t),
        s = H(i.padding);
    return (E(i.text) ? i.text.length : 1) * e.lineHeight + s.height
}
function Dr(i, t) {
    return ct(i, {
        scale: t,
        type: "scale"
    })
}
function Cr(i, t, e) {
    return ct(i, {
        tick: e,
        index: t,
        type: "tick"
    })
}
function Or(i, t, e) {
    let s = Re(i);
    return (e && t !== "right" || !e && t === "right") && (s = Sr(s)), s
}
function Ar(i, t, e, s) {
    let {top: n, left: o, bottom: a, right: r, chart: l} = i,
        {chartArea: c, scales: h} = l,
        d = 0,
        u,
        f,
        p,
        g = a - n,
        m = r - o;
    if (i.isHorizontal()) {
        if (f = N(s, o, r), C(e)) {
            let b = Object.keys(e)[0],
                _ = e[b];
            p = h[b].getPixelForValue(_) + g - t
        } else
            e === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = bn(i, e, t);
        u = r - o
    } else {
        if (C(e)) {
            let b = Object.keys(e)[0],
                _ = e[b];
            f = h[b].getPixelForValue(_) - m + t
        } else
            e === "center" ? f = (c.left + c.right) / 2 - m + t : f = bn(i, e, t);
        p = N(s, a, n),
        d = e === "left" ? -Y : Y
    }
    return {
        titleX: f,
        titleY: p,
        maxWidth: u,
        rotation: d
    }
}
var Rt = class i extends ut {
        constructor(t)
        {
            super(),
            this.id = t.id,
            this.type = t.type,
            this.options = void 0,
            this.ctx = t.ctx,
            this.chart = t.chart,
            this.top = void 0,
            this.bottom = void 0,
            this.left = void 0,
            this.right = void 0,
            this.width = void 0,
            this.height = void 0,
            this._margins = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            this.maxWidth = void 0,
            this.maxHeight = void 0,
            this.paddingTop = void 0,
            this.paddingBottom = void 0,
            this.paddingLeft = void 0,
            this.paddingRight = void 0,
            this.axis = void 0,
            this.labelRotation = void 0,
            this.min = void 0,
            this.max = void 0,
            this._range = void 0,
            this.ticks = [],
            this._gridLineItems = null,
            this._labelItems = null,
            this._labelSizes = null,
            this._length = 0,
            this._maxLength = 0,
            this._longestTextCache = {},
            this._startPixel = void 0,
            this._endPixel = void 0,
            this._reversePixels = !1,
            this._userMax = void 0,
            this._userMin = void 0,
            this._suggestedMax = void 0,
            this._suggestedMin = void 0,
            this._ticksLength = 0,
            this._borderValue = 0,
            this._cache = {},
            this._dataLimitsCached = !1,
            this.$context = void 0
        }
        init(t)
        {
            this.options = t.setContext(this.getContext()),
            this.axis = t.axis,
            this._userMin = this.parse(t.min),
            this._userMax = this.parse(t.max),
            this._suggestedMin = this.parse(t.suggestedMin),
            this._suggestedMax = this.parse(t.suggestedMax)
        }
        parse(t, e)
        {
            return t
        }
        getUserBounds()
        {
            let {_userMin: t, _userMax: e, _suggestedMin: s, _suggestedMax: n} = this;
            return t = X(t, Number.POSITIVE_INFINITY), e = X(e, Number.NEGATIVE_INFINITY), s = X(s, Number.POSITIVE_INFINITY), n = X(n, Number.NEGATIVE_INFINITY), {
                min: X(t, s),
                max: X(e, n),
                minDefined: F(t),
                maxDefined: F(e)
            }
        }
        getMinMax(t)
        {
            let {min: e, max: s, minDefined: n, maxDefined: o} = this.getUserBounds(),
                a;
            if (n && o)
                return {
                    min: e,
                    max: s
                };
            let r = this.getMatchingVisibleMetas();
            for (let l = 0, c = r.length; l < c; ++l)
                a = r[l].controller.getMinMax(this, t),
                n || (e = Math.min(e, a.min)),
                o || (s = Math.max(s, a.max));
            return e = o && e > s ? s : e, s = n && e > s ? e : s, {
                min: X(e, X(s, e)),
                max: X(s, X(e, s))
            }
        }
        getPadding()
        {
            return {
                left: this.paddingLeft || 0,
                top: this.paddingTop || 0,
                right: this.paddingRight || 0,
                bottom: this.paddingBottom || 0
            }
        }
        getTicks()
        {
            return this.ticks
        }
        getLabels()
        {
            let t = this.chart.data;
            return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || []
        }
        getLabelItems(t=this.chart.chartArea)
        {
            return this._labelItems || (this._labelItems = this._computeLabelItems(t))
        }
        beforeLayout()
        {
            this._cache = {},
            this._dataLimitsCached = !1
        }
        beforeUpdate()
        {
            R(this.options.beforeUpdate, [this])
        }
        update(t, e, s)
        {
            let {beginAtZero: n, grace: o, ticks: a} = this.options,
                r = a.sampleSize;
            this.beforeUpdate(),
            this.maxWidth = t,
            this.maxHeight = e,
            this._margins = s = Object.assign({
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, s),
            this.ticks = null,
            this._labelSizes = null,
            this._gridLineItems = null,
            this._labelItems = null,
            this.beforeSetDimensions(),
            this.setDimensions(),
            this.afterSetDimensions(),
            this._maxLength = this.isHorizontal() ? this.width + s.left + s.right : this.height + s.top + s.bottom,
            this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Us(this, o, n), this._dataLimitsCached = !0),
            this.beforeBuildTicks(),
            this.ticks = this.buildTicks() || [],
            this.afterBuildTicks();
            let l = r < this.ticks.length;
            this._convertTicksToLabels(l ? _n(this.ticks, r) : this.ticks),
            this.configure(),
            this.beforeCalculateLabelRotation(),
            this.calculateLabelRotation(),
            this.afterCalculateLabelRotation(),
            a.display && (a.autoSkip || a.source === "auto") && (this.ticks = xr(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()),
            l && this._convertTicksToLabels(this.ticks),
            this.beforeFit(),
            this.fit(),
            this.afterFit(),
            this.afterUpdate()
        }
        configure()
        {
            let t = this.options.reverse,
                e,
                s;
            this.isHorizontal() ? (e = this.left, s = this.right) : (e = this.top, s = this.bottom, t = !t),
            this._startPixel = e,
            this._endPixel = s,
            this._reversePixels = t,
            this._length = s - e,
            this._alignToPixels = this.options.alignToPixels
        }
        afterUpdate()
        {
            R(this.options.afterUpdate, [this])
        }
        beforeSetDimensions()
        {
            R(this.options.beforeSetDimensions, [this])
        }
        setDimensions()
        {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height),
            this.paddingLeft = 0,
            this.paddingTop = 0,
            this.paddingRight = 0,
            this.paddingBottom = 0
        }
        afterSetDimensions()
        {
            R(this.options.afterSetDimensions, [this])
        }
        _callHooks(t)
        {
            this.chart.notifyPlugins(t, this.getContext()),
            R(this.options[t], [this])
        }
        beforeDataLimits()
        {
            this._callHooks("beforeDataLimits")
        }
        determineDataLimits() {}
        afterDataLimits()
        {
            this._callHooks("afterDataLimits")
        }
        beforeBuildTicks()
        {
            this._callHooks("beforeBuildTicks")
        }
        buildTicks()
        {
            return []
        }
        afterBuildTicks()
        {
            this._callHooks("afterBuildTicks")
        }
        beforeTickToLabelConversion()
        {
            R(this.options.beforeTickToLabelConversion, [this])
        }
        generateTickLabels(t)
        {
            let e = this.options.ticks,
                s,
                n,
                o;
            for (s = 0, n = t.length; s < n; s++)
                o = t[s],
                o.label = R(e.callback, [o.value, s, t], this)
        }
        afterTickToLabelConversion()
        {
            R(this.options.afterTickToLabelConversion, [this])
        }
        beforeCalculateLabelRotation()
        {
            R(this.options.beforeCalculateLabelRotation, [this])
        }
        calculateLabelRotation()
        {
            let t = this.options,
                e = t.ticks,
                s = xn(this.ticks.length, t.ticks.maxTicksLimit),
                n = e.minRotation || 0,
                o = e.maxRotation,
                a = n,
                r,
                l,
                c;
            if (!this._isVisible() || !e.display || n >= o || s <= 1 || !this.isHorizontal()) {
                this.labelRotation = n;
                return
            }
            let h = this._getLabelSizes(),
                d = h.widest.width,
                u = h.highest.height,
                f = G(this.chart.width - d, 0, this.maxWidth);
            r = t.offset ? this.maxWidth / s : f / (s - 1),
            d + 6 > r && (r = f / (s - (t.offset ? .5 : 1)), l = this.maxHeight - ce(t.grid) - e.padding - yn(t.title, this.chart.options.font), c = Math.sqrt(d * d + u * u), a = Te(Math.min(Math.asin(G((h.highest.height + 6) / r, -1, 1)), Math.asin(G(l / c, -1, 1)) - Math.asin(G(u / c, -1, 1)))), a = Math.max(n, Math.min(o, a))),
            this.labelRotation = a
        }
        afterCalculateLabelRotation()
        {
            R(this.options.afterCalculateLabelRotation, [this])
        }
        afterAutoSkip() {}
        beforeFit()
        {
            R(this.options.beforeFit, [this])
        }
        fit()
        {
            let t = {
                    width: 0,
                    height: 0
                },
                {chart: e, options: {ticks: s, title: n, grid: o}} = this,
                a = this._isVisible(),
                r = this.isHorizontal();
            if (a) {
                let l = yn(n, e.options.font);
                if (r ? (t.width = this.maxWidth, t.height = ce(o) + l) : (t.height = this.maxHeight, t.width = ce(o) + l), s.display && this.ticks.length) {
                    let {first: c, last: h, widest: d, highest: u} = this._getLabelSizes(),
                        f = s.padding * 2,
                        p = lt(this.labelRotation),
                        g = Math.cos(p),
                        m = Math.sin(p);
                    if (r) {
                        let b = s.mirror ? 0 : m * d.width + g * u.height;
                        t.height = Math.min(this.maxHeight, t.height + b + f)
                    } else {
                        let b = s.mirror ? 0 : g * d.width + m * u.height;
                        t.width = Math.min(this.maxWidth, t.width + b + f)
                    }
                    this._calculatePadding(c, h, m, g)
                }
            }
            this._handleMargins(),
            r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom)
        }
        _calculatePadding(t, e, s, n)
        {
            let {ticks: {align: o, padding: a}, position: r} = this.options,
                l = this.labelRotation !== 0,
                c = r !== "top" && this.axis === "x";
            if (this.isHorizontal()) {
                let h = this.getPixelForTick(0) - this.left,
                    d = this.right - this.getPixelForTick(this.ticks.length - 1),
                    u = 0,
                    f = 0;
                l ? c ? (u = n * t.width, f = s * e.height) : (u = s * t.height, f = n * e.width) : o === "start" ? f = e.width : o === "end" ? u = t.width : o !== "inner" && (u = t.width / 2, f = e.width / 2),
                this.paddingLeft = Math.max((u - h + a) * this.width / (this.width - h), 0),
                this.paddingRight = Math.max((f - d + a) * this.width / (this.width - d), 0)
            } else {
                let h = e.height / 2,
                    d = t.height / 2;
                o === "start" ? (h = 0, d = t.height) : o === "end" && (h = e.height, d = 0),
                this.paddingTop = h + a,
                this.paddingBottom = d + a
            }
        }
        _handleMargins()
        {
            this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom))
        }
        afterFit()
        {
            R(this.options.afterFit, [this])
        }
        isHorizontal()
        {
            let {axis: t, position: e} = this.options;
            return e === "top" || e === "bottom" || t === "x"
        }
        isFullSize()
        {
            return this.options.fullSize
        }
        _convertTicksToLabels(t)
        {
            this.beforeTickToLabelConversion(),
            this.generateTickLabels(t);
            let e,
                s;
            for (e = 0, s = t.length; e < s; e++)
                A(t[e].label) && (t.splice(e, 1), s--, e--);
            this.afterTickToLabelConversion()
        }
        _getLabelSizes()
        {
            let t = this._labelSizes;
            if (!t) {
                let e = this.options.ticks.sampleSize,
                    s = this.ticks;
                e < s.length && (s = _n(s, e)),
                this._labelSizes = t = this._computeLabelSizes(s, s.length, this.options.ticks.maxTicksLimit)
            }
            return t
        }
        _computeLabelSizes(t, e, s)
        {
            let {ctx: n, _longestTextCache: o} = this,
                a = [],
                r = [],
                l = Math.floor(e / xn(e, s)),
                c = 0,
                h = 0,
                d,
                u,
                f,
                p,
                g,
                m,
                b,
                _,
                S,
                y,
                x;
            for (d = 0; d < e; d += l) {
                if (p = t[d].label, g = this._resolveTickFontOptions(d), n.font = m = g.string, b = o[m] = o[m] || {
                    data: {},
                    gc: []
                }, _ = g.lineHeight, S = y = 0, !A(p) && !E(p))
                    S = Zt(n, b.data, b.gc, S, p),
                    y = _;
                else if (E(p))
                    for (u = 0, f = p.length; u < f; ++u)
                        x = p[u],
                        !A(x) && !E(x) && (S = Zt(n, b.data, b.gc, S, x), y += _);
                a.push(S),
                r.push(y),
                c = Math.max(S, c),
                h = Math.max(y, h)
            }
            Pr(o, e);
            let k = a.indexOf(c),
                v = r.indexOf(h),
                M = w => ({
                    width: a[w] || 0,
                    height: r[w] || 0
                });
            return {
                first: M(0),
                last: M(e - 1),
                widest: M(k),
                highest: M(v),
                widths: a,
                heights: r
            }
        }
        getLabelForValue(t)
        {
            return t
        }
        getPixelForValue(t, e)
        {
            return NaN
        }
        getValueForPixel(t) {}
        getPixelForTick(t)
        {
            let e = this.ticks;
            return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
        }
        getPixelForDecimal(t)
        {
            this._reversePixels && (t = 1 - t);
            let e = this._startPixel + t * this._length;
            return Rs(this._alignToPixels ? xt(this.chart, e, 0) : e)
        }
        getDecimalForPixel(t)
        {
            let e = (t - this._startPixel) / this._length;
            return this._reversePixels ? 1 - e : e
        }
        getBasePixel()
        {
            return this.getPixelForValue(this.getBaseValue())
        }
        getBaseValue()
        {
            let {min: t, max: e} = this;
            return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0
        }
        getContext(t)
        {
            let e = this.ticks || [];
            if (t >= 0 && t < e.length) {
                let s = e[t];
                return s.$context || (s.$context = Cr(this.getContext(), t, s))
            }
            return this.$context || (this.$context = Dr(this.chart.getContext(), this))
        }
        _tickSize()
        {
            let t = this.options.ticks,
                e = lt(this.labelRotation),
                s = Math.abs(Math.cos(e)),
                n = Math.abs(Math.sin(e)),
                o = this._getLabelSizes(),
                a = t.autoSkipPadding || 0,
                r = o ? o.widest.width + a : 0,
                l = o ? o.highest.height + a : 0;
            return this.isHorizontal() ? l * s > r * n ? r / s : l / n : l * n < r * s ? l / s : r / n
        }
        _isVisible()
        {
            let t = this.options.display;
            return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0
        }
        _computeGridLineItems(t)
        {
            let e = this.axis,
                s = this.chart,
                n = this.options,
                {grid: o, position: a, border: r} = n,
                l = o.offset,
                c = this.isHorizontal(),
                d = this.ticks.length + (l ? 1 : 0),
                u = ce(o),
                f = [],
                p = r.setContext(this.getContext()),
                g = p.display ? p.width : 0,
                m = g / 2,
                b = function(W) {
                    return xt(s, W, g)
                },
                _,
                S,
                y,
                x,
                k,
                v,
                M,
                w,
                O,
                D,
                T,
                j;
            if (a === "top")
                _ = b(this.bottom),
                v = this.bottom - u,
                w = _ - m,
                D = b(t.top) + m,
                j = t.bottom;
            else if (a === "bottom")
                _ = b(this.top),
                D = t.top,
                j = b(t.bottom) - m,
                v = _ + m,
                w = this.top + u;
            else if (a === "left")
                _ = b(this.right),
                k = this.right - u,
                M = _ - m,
                O = b(t.left) + m,
                T = t.right;
            else if (a === "right")
                _ = b(this.left),
                O = t.left,
                T = b(t.right) - m,
                k = _ + m,
                M = this.left + u;
            else if (e === "x") {
                if (a === "center")
                    _ = b((t.top + t.bottom) / 2 + .5);
                else if (C(a)) {
                    let W = Object.keys(a)[0],
                        Z = a[W];
                    _ = b(this.chart.scales[W].getPixelForValue(Z))
                }
                D = t.top,
                j = t.bottom,
                v = _ + m,
                w = v + u
            } else if (e === "y") {
                if (a === "center")
                    _ = b((t.left + t.right) / 2);
                else if (C(a)) {
                    let W = Object.keys(a)[0],
                        Z = a[W];
                    _ = b(this.chart.scales[W].getPixelForValue(Z))
                }
                k = _ - m,
                M = k - u,
                O = t.left,
                T = t.right
            }
            let tt = P(n.ticks.maxTicksLimit, d),
                z = Math.max(1, Math.ceil(d / tt));
            for (S = 0; S < d; S += z) {
                let W = this.getContext(S),
                    Z = o.setContext(W),
                    be = r.setContext(W),
                    xe = Z.lineWidth,
                    Et = Z.color,
                    _e = be.dash || [],
                    Ft = be.dashOffset,
                    Yt = Z.tickWidth,
                    vt = Z.tickColor,
                    Ut = Z.tickBorderDash || [],
                    Mt = Z.tickBorderDashOffset;
                y = wr(this, S, l),
                y !== void 0 && (x = xt(s, y, xe), c ? k = M = O = T = x : v = w = D = j = x, f.push({
                    tx1: k,
                    ty1: v,
                    tx2: M,
                    ty2: w,
                    x1: O,
                    y1: D,
                    x2: T,
                    y2: j,
                    width: xe,
                    color: Et,
                    borderDash: _e,
                    borderDashOffset: Ft,
                    tickWidth: Yt,
                    tickColor: vt,
                    tickBorderDash: Ut,
                    tickBorderDashOffset: Mt
                }))
            }
            return this._ticksLength = d, this._borderValue = _, f
        }
        _computeLabelItems(t)
        {
            let e = this.axis,
                s = this.options,
                {position: n, ticks: o} = s,
                a = this.isHorizontal(),
                r = this.ticks,
                {align: l, crossAlign: c, padding: h, mirror: d} = o,
                u = ce(s.grid),
                f = u + h,
                p = d ? -h : f,
                g = -lt(this.labelRotation),
                m = [],
                b,
                _,
                S,
                y,
                x,
                k,
                v,
                M,
                w,
                O,
                D,
                T,
                j = "middle";
            if (n === "top")
                k = this.bottom - p,
                v = this._getXAxisLabelAlignment();
            else if (n === "bottom")
                k = this.top + p,
                v = this._getXAxisLabelAlignment();
            else if (n === "left") {
                let z = this._getYAxisLabelAlignment(u);
                v = z.textAlign,
                x = z.x
            } else if (n === "right") {
                let z = this._getYAxisLabelAlignment(u);
                v = z.textAlign,
                x = z.x
            } else if (e === "x") {
                if (n === "center")
                    k = (t.top + t.bottom) / 2 + f;
                else if (C(n)) {
                    let z = Object.keys(n)[0],
                        W = n[z];
                    k = this.chart.scales[z].getPixelForValue(W) + f
                }
                v = this._getXAxisLabelAlignment()
            } else if (e === "y") {
                if (n === "center")
                    x = (t.left + t.right) / 2 - f;
                else if (C(n)) {
                    let z = Object.keys(n)[0],
                        W = n[z];
                    x = this.chart.scales[z].getPixelForValue(W)
                }
                v = this._getYAxisLabelAlignment(u).textAlign
            }
            e === "y" && (l === "start" ? j = "top" : l === "end" && (j = "bottom"));
            let tt = this._getLabelSizes();
            for (b = 0, _ = r.length; b < _; ++b) {
                S = r[b],
                y = S.label;
                let z = o.setContext(this.getContext(b));
                M = this.getPixelForTick(b) + o.labelOffset,
                w = this._resolveTickFontOptions(b),
                O = w.lineHeight,
                D = E(y) ? y.length : 1;
                let W = D / 2,
                    Z = z.color,
                    be = z.textStrokeColor,
                    xe = z.textStrokeWidth,
                    Et = v;
                a ? (x = M, v === "inner" && (b === _ - 1 ? Et = this.options.reverse ? "left" : "right" : b === 0 ? Et = this.options.reverse ? "right" : "left" : Et = "center"), n === "top" ? c === "near" || g !== 0 ? T = -D * O + O / 2 : c === "center" ? T = -tt.highest.height / 2 - W * O + O : T = -tt.highest.height + O / 2 : c === "near" || g !== 0 ? T = O / 2 : c === "center" ? T = tt.highest.height / 2 - W * O : T = tt.highest.height - D * O, d && (T *= -1), g !== 0 && !z.showLabelBackdrop && (x += O / 2 * Math.sin(g))) : (k = M, T = (1 - D) * O / 2);
                let _e;
                if (z.showLabelBackdrop) {
                    let Ft = H(z.backdropPadding),
                        Yt = tt.heights[b],
                        vt = tt.widths[b],
                        Ut = T - Ft.top,
                        Mt = 0 - Ft.left;
                    switch (j) {
                    case "middle":
                        Ut -= Yt / 2;
                        break;
                    case "bottom":
                        Ut -= Yt;
                        break
                    }
                    switch (v) {
                    case "center":
                        Mt -= vt / 2;
                        break;
                    case "right":
                        Mt -= vt;
                        break;
                    case "inner":
                        b === _ - 1 ? Mt -= vt : b > 0 && (Mt -= vt / 2);
                        break
                    }
                    _e = {
                        left: Mt,
                        top: Ut,
                        width: vt + Ft.width,
                        height: Yt + Ft.height,
                        color: z.backdropColor
                    }
                }
                m.push({
                    label: y,
                    font: w,
                    textOffset: T,
                    options: {
                        rotation: g,
                        color: Z,
                        strokeColor: be,
                        strokeWidth: xe,
                        textAlign: Et,
                        textBaseline: j,
                        translation: [x, k],
                        backdrop: _e
                    }
                })
            }
            return m
        }
        _getXAxisLabelAlignment()
        {
            let {position: t, ticks: e} = this.options;
            if (-lt(this.labelRotation))
                return t === "top" ? "left" : "right";
            let n = "center";
            return e.align === "start" ? n = "left" : e.align === "end" ? n = "right" : e.align === "inner" && (n = "inner"), n
        }
        _getYAxisLabelAlignment(t)
        {
            let {position: e, ticks: {crossAlign: s, mirror: n, padding: o}} = this.options,
                a = this._getLabelSizes(),
                r = t + o,
                l = a.widest.width,
                c,
                h;
            return e === "left" ? n ? (h = this.right + o, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? n ? (h = this.left + o, s === "near" ? c = "right" : s === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, s === "near" ? c = "left" : s === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
                textAlign: c,
                x: h
            }
        }
        _computeLabelArea()
        {
            if (this.options.ticks.mirror)
                return;
            let t = this.chart,
                e = this.options.position;
            if (e === "left" || e === "right")
                return {
                    top: 0,
                    left: this.left,
                    bottom: t.height,
                    right: this.right
                };
            if (e === "top" || e === "bottom")
                return {
                    top: this.top,
                    left: 0,
                    bottom: this.bottom,
                    right: t.width
                }
        }
        drawBackground()
        {
            let {ctx: t, options: {backgroundColor: e}, left: s, top: n, width: o, height: a} = this;
            e && (t.save(), t.fillStyle = e, t.fillRect(s, n, o, a), t.restore())
        }
        getLineWidthForValue(t)
        {
            let e = this.options.grid;
            if (!this._isVisible() || !e.display)
                return 0;
            let n = this.ticks.findIndex(o => o.value === t);
            return n >= 0 ? e.setContext(this.getContext(n)).lineWidth : 0
        }
        drawGrid(t)
        {
            let e = this.options.grid,
                s = this.ctx,
                n = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t)),
                o,
                a,
                r = (l, c, h) => {
                    !h.width || !h.color || (s.save(), s.lineWidth = h.width, s.strokeStyle = h.color, s.setLineDash(h.borderDash || []), s.lineDashOffset = h.borderDashOffset, s.beginPath(), s.moveTo(l.x, l.y), s.lineTo(c.x, c.y), s.stroke(), s.restore())
                };
            if (e.display)
                for (o = 0, a = n.length; o < a; ++o) {
                    let l = n[o];
                    e.drawOnChartArea && r({
                        x: l.x1,
                        y: l.y1
                    }, {
                        x: l.x2,
                        y: l.y2
                    }, l),
                    e.drawTicks && r({
                        x: l.tx1,
                        y: l.ty1
                    }, {
                        x: l.tx2,
                        y: l.ty2
                    }, {
                        color: l.tickColor,
                        width: l.tickWidth,
                        borderDash: l.tickBorderDash,
                        borderDashOffset: l.tickBorderDashOffset
                    })
                }
        }
        drawBorder()
        {
            let {chart: t, ctx: e, options: {border: s, grid: n}} = this,
                o = s.setContext(this.getContext()),
                a = s.display ? o.width : 0;
            if (!a)
                return;
            let r = n.setContext(this.getContext(0)).lineWidth,
                l = this._borderValue,
                c,
                h,
                d,
                u;
            this.isHorizontal() ? (c = xt(t, this.left, a) - a / 2, h = xt(t, this.right, r) + r / 2, d = u = l) : (d = xt(t, this.top, a) - a / 2, u = xt(t, this.bottom, r) + r / 2, c = h = l),
            e.save(),
            e.lineWidth = o.width,
            e.strokeStyle = o.color,
            e.beginPath(),
            e.moveTo(c, d),
            e.lineTo(h, u),
            e.stroke(),
            e.restore()
        }
        drawLabels(t)
        {
            if (!this.options.ticks.display)
                return;
            let s = this.ctx,
                n = this._computeLabelArea();
            n && ie(s, n);
            let o = this.getLabelItems(t);
            for (let a of o) {
                let r = a.options,
                    l = a.font,
                    c = a.label,
                    h = a.textOffset;
                _t(s, c, 0, h, l, r)
            }
            n && se(s)
        }
        drawTitle()
        {
            let {ctx: t, options: {position: e, title: s, reverse: n}} = this;
            if (!s.display)
                return;
            let o = V(s.font),
                a = H(s.padding),
                r = s.align,
                l = o.lineHeight / 2;
            e === "bottom" || e === "center" || C(e) ? (l += a.bottom, E(s.text) && (l += o.lineHeight * (s.text.length - 1))) : l += a.top;
            let {titleX: c, titleY: h, maxWidth: d, rotation: u} = Ar(this, l, e, r);
            _t(t, s.text, 0, 0, o, {
                color: s.color,
                maxWidth: d,
                rotation: u,
                textAlign: Or(r, e, n),
                textBaseline: "middle",
                translation: [c, h]
            })
        }
        draw(t)
        {
            this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t))
        }
        _layers()
        {
            let t = this.options,
                e = t.ticks && t.ticks.z || 0,
                s = P(t.grid && t.grid.z, -1),
                n = P(t.border && t.border.z, 0);
            return !this._isVisible() || this.draw !== i.prototype.draw ? [{
                z: e,
                draw: o => {
                    this.draw(o)
                }
            }] : [{
                z: s,
                draw: o => {
                    this.drawBackground(),
                    this.drawGrid(o),
                    this.drawTitle()
                }
            }, {
                z: n,
                draw: () => {
                    this.drawBorder()
                }
            }, {
                z: e,
                draw: o => {
                    this.drawLabels(o)
                }
            }]
        }
        getMatchingVisibleMetas(t)
        {
            let e = this.chart.getSortedVisibleDatasetMetas(),
                s = this.axis + "AxisID",
                n = [],
                o,
                a;
            for (o = 0, a = e.length; o < a; ++o) {
                let r = e[o];
                r[s] === this.id && (!t || r.type === t) && n.push(r)
            }
            return n
        }
        _resolveTickFontOptions(t)
        {
            let e = this.options.ticks.setContext(this.getContext(t));
            return V(e.font)
        }
        _maxDigits()
        {
            let t = this._resolveTickFontOptions(0).lineHeight;
            return (this.isHorizontal() ? this.width : this.height) / t
        }
    }
    ,
    Ht = class {
        constructor(t, e, s)
        {
            this.type = t,
            this.scope = e,
            this.override = s,
            this.items = Object.create(null)
        }
        isForType(t)
        {
            return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
        }
        register(t)
        {
            let e = Object.getPrototypeOf(t),
                s;
            Rr(e) && (s = this.register(e));
            let n = this.items,
                o = t.id,
                a = this.scope + "." + o;
            if (!o)
                throw new Error("class does not have id: " + t);
            return o in n || (n[o] = t, Tr(t, a, s), this.override && I.override(t.id, t.overrides)), a
        }
        get(t)
        {
            return this.items[t]
        }
        unregister(t)
        {
            let e = this.items,
                s = t.id,
                n = this.scope;
            s in e && delete e[s],
            n && s in I[n] && (delete I[n][s], this.override && delete bt[s])
        }
    }
    ;
function Tr(i, t, e) {
    let s = Bt(Object.create(null), [e ? I.get(e) : {}, I.get(t), i.defaults]);
    I.set(t, s),
    i.defaultRoutes && Lr(t, i.defaultRoutes),
    i.descriptors && I.describe(t, i.descriptors)
}
function Lr(i, t) {
    Object.keys(t).forEach(e => {
        let s = e.split("."),
            n = s.pop(),
            o = [i].concat(s).join("."),
            a = t[e].split("."),
            r = a.pop(),
            l = a.join(".");
        I.route(o, n, l, r)
    })
}
function Rr(i) {
    return "id" in i && "defaults" in i
}
var Zi = class {
        constructor()
        {
            this.controllers = new Ht(fe, "datasets", !0),
            this.elements = new Ht(ut, "elements"),
            this.plugins = new Ht(Object, "plugins"),
            this.scales = new Ht(Rt, "scales"),
            this._typedRegistries = [this.controllers, this.scales, this.elements]
        }
        add(...t)
        {
            this._each("register", t)
        }
        remove(...t)
        {
            this._each("unregister", t)
        }
        addControllers(...t)
        {
            this._each("register", t, this.controllers)
        }
        addElements(...t)
        {
            this._each("register", t, this.elements)
        }
        addPlugins(...t)
        {
            this._each("register", t, this.plugins)
        }
        addScales(...t)
        {
            this._each("register", t, this.scales)
        }
        getController(t)
        {
            return this._get(t, this.controllers, "controller")
        }
        getElement(t)
        {
            return this._get(t, this.elements, "element")
        }
        getPlugin(t)
        {
            return this._get(t, this.plugins, "plugin")
        }
        getScale(t)
        {
            return this._get(t, this.scales, "scale")
        }
        removeControllers(...t)
        {
            this._each("unregister", t, this.controllers)
        }
        removeElements(...t)
        {
            this._each("unregister", t, this.elements)
        }
        removePlugins(...t)
        {
            this._each("unregister", t, this.plugins)
        }
        removeScales(...t)
        {
            this._each("unregister", t, this.scales)
        }
        _each(t, e, s)
        {
            [...e].forEach(n => {
                let o = s || this._getRegistryForType(n);
                s || o.isForType(n) || o === this.plugins && n.id ? this._exec(t, o, n) : L(n, a => {
                    let r = s || this._getRegistryForType(a);
                    this._exec(t, r, a)
                })
            })
        }
        _exec(t, e, s)
        {
            let n = Ae(t);
            R(s["before" + n], [], s),
            e[t](s),
            R(s["after" + n], [], s)
        }
        _getRegistryForType(t)
        {
            for (let e = 0; e < this._typedRegistries.length; e++) {
                let s = this._typedRegistries[e];
                if (s.isForType(t))
                    return s
            }
            return this.plugins
        }
        _get(t, e, s)
        {
            let n = e.get(t);
            if (n === void 0)
                throw new Error('"' + t + '" is not a registered ' + s + ".");
            return n
        }
    }
    ,
    nt = new Zi,
    Ji = class {
        constructor()
        {
            this._init = []
        }
        notify(t, e, s, n)
        {
            e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install"));
            let o = n ? this._descriptors(t).filter(n) : this._descriptors(t),
                a = this._notify(o, t, e, s);
            return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall")), a
        }
        _notify(t, e, s, n)
        {
            n = n || {};
            for (let o of t) {
                let a = o.plugin,
                    r = a[s],
                    l = [e, n, o.options];
                if (R(r, l, a) === !1 && n.cancelable)
                    return !1
            }
            return !0
        }
        invalidate()
        {
            A(this._cache) || (this._oldCache = this._cache, this._cache = void 0)
        }
        _descriptors(t)
        {
            if (this._cache)
                return this._cache;
            let e = this._cache = this._createDescriptors(t);
            return this._notifyStateChanges(t), e
        }
        _createDescriptors(t, e)
        {
            let s = t && t.config,
                n = P(s.options && s.options.plugins, {}),
                o = Er(s);
            return n === !1 && !e ? [] : Ir(t, o, n, e)
        }
        _notifyStateChanges(t)
        {
            let e = this._oldCache || [],
                s = this._cache,
                n = (o, a) => o.filter(r => !a.some(l => r.plugin.id === l.plugin.id));
            this._notify(n(e, s), t, "stop"),
            this._notify(n(s, e), t, "start")
        }
    }
    ;
function Er(i) {
    let t = {},
        e = [],
        s = Object.keys(nt.plugins.items);
    for (let o = 0; o < s.length; o++)
        e.push(nt.getPlugin(s[o]));
    let n = i.plugins || [];
    for (let o = 0; o < n.length; o++) {
        let a = n[o];
        e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0)
    }
    return {
        plugins: e,
        localIds: t
    }
}
function Fr(i, t) {
    return !t && i === !1 ? null : i === !0 ? {} : i
}
function Ir(i, {plugins: t, localIds: e}, s, n) {
    let o = [],
        a = i.getContext();
    for (let r of t) {
        let l = r.id,
            c = Fr(s[l], n);
        c !== null && o.push({
            plugin: r,
            options: zr(i.config, {
                plugin: r,
                local: e[l]
            }, c, a)
        })
    }
    return o
}
function zr(i, {plugin: t, local: e}, s, n) {
    let o = i.pluginScopeKeys(t),
        a = i.getOptionScopes(s, o);
    return e && t.defaults && a.push(t.defaults), i.createResolver(a, n, [""], {
        scriptable: !1,
        indexable: !1,
        allKeys: !0
    })
}
function Qi(i, t) {
    let e = I.datasets[i] || {};
    return ((t.datasets || {})[i] || {}).indexAxis || t.indexAxis || e.indexAxis || "x"
}
function Br(i, t) {
    let e = i;
    return i === "_index_" ? e = t : i === "_value_" && (e = t === "x" ? "y" : "x"), e
}
function Vr(i, t) {
    return i === t ? "_index_" : "_value_"
}
function vn(i) {
    if (i === "x" || i === "y" || i === "r")
        return i
}
function Wr(i) {
    if (i === "top" || i === "bottom")
        return "x";
    if (i === "left" || i === "right")
        return "y"
}
function ts(i, ...t) {
    if (vn(i))
        return i;
    for (let e of t) {
        let s = e.axis || Wr(e.position) || i.length > 1 && vn(i[0].toLowerCase());
        if (s)
            return s
    }
    throw new Error(`Cannot determine type of '${i}' axis. Please provide 'axis' or 'position' option.`)
}
function Mn(i, t, e) {
    if (e[t + "AxisID"] === i)
        return {
            axis: t
        }
}
function Nr(i, t) {
    if (t.data && t.data.datasets) {
        let e = t.data.datasets.filter(s => s.xAxisID === i || s.yAxisID === i);
        if (e.length)
            return Mn(i, "x", e[0]) || Mn(i, "y", e[0])
    }
    return {}
}
function Hr(i, t) {
    let e = bt[i.type] || {
            scales: {}
        },
        s = t.scales || {},
        n = Qi(i.type, t),
        o = Object.create(null);
    return Object.keys(s).forEach(a => {
        let r = s[a];
        if (!C(r))
            return console.error(`Invalid scale configuration for scale: ${a}`);
        if (r._proxy)
            return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
        let l = ts(a, r, Nr(a, i), I.scales[r.type]),
            c = Vr(l, n),
            h = e.scales || {};
        o[a] = Wt(Object.create(null), [{
            axis: l
        }, r, h[l], h[c]])
    }), i.data.datasets.forEach(a => {
        let r = a.type || i.type,
            l = a.indexAxis || Qi(r, t),
            h = (bt[r] || {}).scales || {};
        Object.keys(h).forEach(d => {
            let u = Br(d, l),
                f = a[u + "AxisID"] || u;
            o[f] = o[f] || Object.create(null),
            Wt(o[f], [{
                axis: u
            }, s[f], h[d]])
        })
    }), Object.keys(o).forEach(a => {
        let r = o[a];
        Wt(r, [I.scales[r.type], I.scale])
    }), o
}
function ao(i) {
    let t = i.options || (i.options = {});
    t.plugins = P(t.plugins, {}),
    t.scales = Hr(i, t)
}
function ro(i) {
    return i = i || {}, i.datasets = i.datasets || [], i.labels = i.labels || [], i
}
function jr(i) {
    return i = i || {}, i.data = ro(i.data), ao(i), i
}
var kn = new Map,
    lo = new Set;
function je(i, t) {
    let e = kn.get(i);
    return e || (e = t(), kn.set(i, e), lo.add(e)), e
}
var he = (i, t, e) => {
        let s = Qt(t, e);
        s !== void 0 && i.add(s)
    },
    es = class {
        constructor(t)
        {
            this._config = jr(t),
            this._scopeCache = new Map,
            this._resolverCache = new Map
        }
        get platform()
        {
            return this._config.platform
        }
        get type()
        {
            return this._config.type
        }
        set type(t)
        {
            this._config.type = t
        }
        get data()
        {
            return this._config.data
        }
        set data(t)
        {
            this._config.data = ro(t)
        }
        get options()
        {
            return this._config.options
        }
        set options(t)
        {
            this._config.options = t
        }
        get plugins()
        {
            return this._config.plugins
        }
        update()
        {
            let t = this._config;
            this.clearCache(),
            ao(t)
        }
        clearCache()
        {
            this._scopeCache.clear(),
            this._resolverCache.clear()
        }
        datasetScopeKeys(t)
        {
            return je(t, () => [[`datasets.${t}`, ""]])
        }
        datasetAnimationScopeKeys(t, e)
        {
            return je(`${t}.transition.${e}`, () => [[`datasets.${t}.transitions.${e}`, `transitions.${e}`], [`datasets.${t}`, ""]])
        }
        datasetElementScopeKeys(t, e)
        {
            return je(`${t}-${e}`, () => [[`datasets.${t}.elements.${e}`, `datasets.${t}`, `elements.${e}`, ""]])
        }
        pluginScopeKeys(t)
        {
            let e = t.id,
                s = this.type;
            return je(`${s}-plugin-${e}`, () => [[`plugins.${e}`, ...t.additionalOptionScopes || []]])
        }
        _cachedScopes(t, e)
        {
            let s = this._scopeCache,
                n = s.get(t);
            return (!n || e) && (n = new Map, s.set(t, n)), n
        }
        getOptionScopes(t, e, s)
        {
            let {options: n, type: o} = this,
                a = this._cachedScopes(t, s),
                r = a.get(e);
            if (r)
                return r;
            let l = new Set;
            e.forEach(h => {
                t && (l.add(t), h.forEach(d => he(l, t, d))),
                h.forEach(d => he(l, n, d)),
                h.forEach(d => he(l, bt[o] || {}, d)),
                h.forEach(d => he(l, I, d)),
                h.forEach(d => he(l, Fe, d))
            });
            let c = Array.from(l);
            return c.length === 0 && c.push(Object.create(null)), lo.has(e) && a.set(e, c), c
        }
        chartOptionScopes()
        {
            let {options: t, type: e} = this;
            return [t, bt[e] || {}, I.datasets[e] || {}, {
                type: e
            }, I, Fe]
        }
        resolveNamedOptions(t, e, s, n=[""])
        {
            let o = {
                    $shared: !0
                },
                {resolver: a, subPrefixes: r} = Sn(this._resolverCache, t, n),
                l = a;
            if (Yr(a, e)) {
                o.$shared = !1,
                s = at(s) ? s() : s;
                let c = this.createResolver(t, s, r);
                l = Pt(a, s, c)
            }
            for (let c of e)
                o[c] = l[c];
            return o
        }
        createResolver(t, e, s=[""], n)
        {
            let {resolver: o} = Sn(this._resolverCache, t, s);
            return C(e) ? Pt(o, e, void 0, n) : o
        }
    }
    ;
function Sn(i, t, e) {
    let s = i.get(t);
    s || (s = new Map, i.set(t, s));
    let n = e.join(),
        o = s.get(n);
    return o || (o = {
        resolver: ze(t, e),
        subPrefixes: e.filter(r => !r.toLowerCase().includes("hover"))
    }, s.set(n, o)), o
}
var $r = i => C(i) && Object.getOwnPropertyNames(i).some(t => at(i[t]));
function Yr(i, t) {
    let {isScriptable: e, isIndexable: s} = Ci(i);
    for (let n of t) {
        let o = e(n),
            a = s(n),
            r = (a || o) && i[n];
        if (o && (at(r) || $r(r)) || a && E(r))
            return !0
    }
    return !1
}
var Ur = "4.4.8",
    Xr = ["top", "bottom", "left", "right", "chartArea"];
function wn(i, t) {
    return i === "top" || i === "bottom" || Xr.indexOf(i) === -1 && t === "x"
}
function Pn(i, t) {
    return function(e, s) {
        return e[i] === s[i] ? e[t] - s[t] : e[i] - s[i]
    }
}
function Dn(i) {
    let t = i.chart,
        e = t.options.animation;
    t.notifyPlugins("afterRender"),
    R(e && e.onComplete, [i], t)
}
function Kr(i) {
    let t = i.chart,
        e = t.options.animation;
    R(e && e.onProgress, [i], t)
}
function co(i) {
    return Be() && typeof i == "string" ? i = document.getElementById(i) : i && i.length && (i = i[0]), i && i.canvas && (i = i.canvas), i
}
var Ke = {},
    Cn = i => {
        let t = co(i);
        return Object.values(Ke).filter(e => e.canvas === t).pop()
    };
function qr(i, t, e) {
    let s = Object.keys(i);
    for (let n of s) {
        let o = +n;
        if (o >= t) {
            let a = i[n];
            delete i[n],
            (e > 0 || o > t) && (i[o + e] = a)
        }
    }
}
function Gr(i, t, e, s) {
    return !e || i.type === "mouseout" ? null : s ? t : i
}
function $e(i, t, e) {
    return i.options.clip ? i[e] : t[e]
}
function Zr(i, t) {
    let {xScale: e, yScale: s} = i;
    return e && s ? {
        left: $e(e, t, "left"),
        right: $e(e, t, "right"),
        top: $e(s, t, "top"),
        bottom: $e(s, t, "bottom")
    } : t
}
var Je = class {
    static defaults = I;
    static instances = Ke;
    static overrides = bt;
    static registry = nt;
    static version = Ur;
    static getChart = Cn;
    static register(...t)
    {
        nt.add(...t),
        On()
    }
    static unregister(...t)
    {
        nt.remove(...t),
        On()
    }
    constructor(t, e)
    {
        let s = this.config = new es(e),
            n = co(t),
            o = Cn(n);
        if (o)
            throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
        let a = s.createResolver(s.chartOptionScopes(), this.getContext());
        this.platform = new (s.platform || br(n)),
        this.platform.updateConfig(s);
        let r = this.platform.acquireContext(n, a.aspectRatio),
            l = r && r.canvas,
            c = l && l.height,
            h = l && l.width;
        if (this.id = Ps(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Ji, this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Vs(d => this.update(d), a.resizeDelay || 0), this._dataChanges = [], Ke[this.id] = this, !r || !l) {
            console.error("Failed to create chart: can't acquire context from the given item");
            return
        }
        ht.listen(this, "complete", Dn),
        ht.listen(this, "progress", Kr),
        this._initialize(),
        this.attached && this.update()
    }
    get aspectRatio()
    {
        let {options: {aspectRatio: t, maintainAspectRatio: e}, width: s, height: n, _aspectRatio: o} = this;
        return A(t) ? e && o ? o : n ? s / n : null : t
    }
    get data()
    {
        return this.config.data
    }
    set data(t)
    {
        this.config.data = t
    }
    get options()
    {
        return this._options
    }
    set options(t)
    {
        this.config.options = t
    }
    get registry()
    {
        return nt
    }
    _initialize()
    {
        return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ti(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this
    }
    clear()
    {
        return wi(this.canvas, this.ctx), this
    }
    stop()
    {
        return ht.stop(this), this
    }
    resize(t, e)
    {
        ht.running(this) ? this._resizeBeforeDraw = {
            width: t,
            height: e
        } : this._resize(t, e)
    }
    _resize(t, e)
    {
        let s = this.options,
            n = this.canvas,
            o = s.maintainAspectRatio && this.aspectRatio,
            a = this.platform.getMaximumSize(n, t, e, o),
            r = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
            l = this.width ? "resize" : "attach";
        this.width = a.width,
        this.height = a.height,
        this._aspectRatio = this.aspectRatio,
        Ti(this, r, !0) && (this.notifyPlugins("resize", {
            size: a
        }), R(s.onResize, [this, a], this), this.attached && this._doResize(l) && this.render())
    }
    ensureScalesHaveIDs()
    {
        let e = this.options.scales || {};
        L(e, (s, n) => {
            s.id = n
        })
    }
    buildOrUpdateScales()
    {
        let t = this.options,
            e = t.scales,
            s = this.scales,
            n = Object.keys(s).reduce((a, r) => (a[r] = !1, a), {}),
            o = [];
        e && (o = o.concat(Object.keys(e).map(a => {
            let r = e[a],
                l = ts(a, r),
                c = l === "r",
                h = l === "x";
            return {
                options: r,
                dposition: c ? "chartArea" : h ? "bottom" : "left",
                dtype: c ? "radialLinear" : h ? "category" : "linear"
            }
        }))),
        L(o, a => {
            let r = a.options,
                l = r.id,
                c = ts(l, r),
                h = P(r.type, a.dtype);
            (r.position === void 0 || wn(r.position, c) !== wn(a.dposition)) && (r.position = a.dposition),
            n[l] = !0;
            let d = null;
            if (l in s && s[l].type === h)
                d = s[l];
            else {
                let u = nt.getScale(h);
                d = new u({
                    id: l,
                    type: h,
                    ctx: this.ctx,
                    chart: this
                }),
                s[d.id] = d
            }
            d.init(r, t)
        }),
        L(n, (a, r) => {
            a || delete s[r]
        }),
        L(s, a => {
            Q.configure(this, a, a.options),
            Q.addBox(this, a)
        })
    }
    _updateMetasets()
    {
        let t = this._metasets,
            e = this.data.datasets.length,
            s = t.length;
        if (t.sort((n, o) => n.index - o.index), s > e) {
            for (let n = e; n < s; ++n)
                this._destroyDatasetMeta(n);
            t.splice(e, s - e)
        }
        this._sortedMetasets = t.slice(0).sort(Pn("order", "index"))
    }
    _removeUnreferencedMetasets()
    {
        let {_metasets: t, data: {datasets: e}} = this;
        t.length > e.length && delete this._stacks,
        t.forEach((s, n) => {
            e.filter(o => o === s._dataset).length === 0 && this._destroyDatasetMeta(n)
        })
    }
    buildOrUpdateControllers()
    {
        let t = [],
            e = this.data.datasets,
            s,
            n;
        for (this._removeUnreferencedMetasets(), s = 0, n = e.length; s < n; s++) {
            let o = e[s],
                a = this.getDatasetMeta(s),
                r = o.type || this.config.type;
            if (a.type && a.type !== r && (this._destroyDatasetMeta(s), a = this.getDatasetMeta(s)), a.type = r, a.indexAxis = o.indexAxis || Qi(r, this.options), a.order = o.order || 0, a.index = s, a.label = "" + o.label, a.visible = this.isDatasetVisible(s), a.controller)
                a.controller.updateIndex(s),
                a.controller.linkScales();
            else {
                let l = nt.getController(r),
                    {datasetElementType: c, dataElementType: h} = I.datasets[r];
                Object.assign(l, {
                    dataElementType: nt.getElement(h),
                    datasetElementType: c && nt.getElement(c)
                }),
                a.controller = new l(this, s),
                t.push(a.controller)
            }
        }
        return this._updateMetasets(), t
    }
    _resetElements()
    {
        L(this.data.datasets, (t, e) => {
            this.getDatasetMeta(e).controller.reset()
        }, this)
    }
    reset()
    {
        this._resetElements(),
        this.notifyPlugins("reset")
    }
    update(t)
    {
        let e = this.config;
        e.update();
        let s = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()),
            n = this._animationsDisabled = !s.animation;
        if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
            mode: t,
            cancelable: !0
        }) === !1)
            return;
        let o = this.buildOrUpdateControllers();
        this.notifyPlugins("beforeElementsUpdate");
        let a = 0;
        for (let c = 0, h = this.data.datasets.length; c < h; c++) {
            let {controller: d} = this.getDatasetMeta(c),
                u = !n && o.indexOf(d) === -1;
            d.buildOrUpdateElements(u),
            a = Math.max(+d.getMaxOverflow(), a)
        }
        a = this._minPadding = s.layout.autoPadding ? a : 0,
        this._updateLayout(a),
        n || L(o, c => {
            c.reset()
        }),
        this._updateDatasets(t),
        this.notifyPlugins("afterUpdate", {
            mode: t
        }),
        this._layers.sort(Pn("z", "_idx"));
        let {_active: r, _lastEvent: l} = this;
        l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0),
        this.render()
    }
    _updateScales()
    {
        L(this.scales, t => {
            Q.removeBox(this, t)
        }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales()
    }
    _checkEventBindings()
    {
        let t = this.options,
            e = new Set(Object.keys(this._listeners)),
            s = new Set(t.events);
        (!fi(e, s) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices()
    {
        let {_hiddenIndices: t} = this,
            e = this._getUniformDataChanges() || [];
        for (let {method: s, start: n, count: o} of e) {
            let a = s === "_removeElements" ? -o : o;
            qr(t, n, a)
        }
    }
    _getUniformDataChanges()
    {
        let t = this._dataChanges;
        if (!t || !t.length)
            return;
        this._dataChanges = [];
        let e = this.data.datasets.length,
            s = o => new Set(t.filter(a => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))),
            n = s(0);
        for (let o = 1; o < e; o++)
            if (!fi(n, s(o)))
                return;
        return Array.from(n).map(o => o.split(",")).map(o => ({
            method: o[1],
            start: +o[2],
            count: +o[3]
        }))
    }
    _updateLayout(t)
    {
        if (this.notifyPlugins("beforeLayout", {
            cancelable: !0
        }) === !1)
            return;
        Q.update(this, this.width, this.height, t);
        let e = this.chartArea,
            s = e.width <= 0 || e.height <= 0;
        this._layers = [],
        L(this.boxes, n => {
            s && n.position === "chartArea" || (n.configure && n.configure(), this._layers.push(...n._layers()))
        }, this),
        this._layers.forEach((n, o) => {
            n._idx = o
        }),
        this.notifyPlugins("afterLayout")
    }
    _updateDatasets(t)
    {
        if (this.notifyPlugins("beforeDatasetsUpdate", {
            mode: t,
            cancelable: !0
        }) !== !1) {
            for (let e = 0, s = this.data.datasets.length; e < s; ++e)
                this.getDatasetMeta(e).controller.configure();
            for (let e = 0, s = this.data.datasets.length; e < s; ++e)
                this._updateDataset(e, at(t) ? t({
                    datasetIndex: e
                }) : t);
            this.notifyPlugins("afterDatasetsUpdate", {
                mode: t
            })
        }
    }
    _updateDataset(t, e)
    {
        let s = this.getDatasetMeta(t),
            n = {
                meta: s,
                index: t,
                mode: e,
                cancelable: !0
            };
        this.notifyPlugins("beforeDatasetUpdate", n) !== !1 && (s.controller._update(e), n.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", n))
    }
    render()
    {
        this.notifyPlugins("beforeRender", {
            cancelable: !0
        }) !== !1 && (ht.has(this) ? this.attached && !ht.running(this) && ht.start(this) : (this.draw(), Dn({
            chart: this
        })))
    }
    draw()
    {
        let t;
        if (this._resizeBeforeDraw) {
            let {width: s, height: n} = this._resizeBeforeDraw;
            this._resizeBeforeDraw = null,
            this._resize(s, n)
        }
        if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
            cancelable: !0
        }) === !1)
            return;
        let e = this._layers;
        for (t = 0; t < e.length && e[t].z <= 0; ++t)
            e[t].draw(this.chartArea);
        for (this._drawDatasets(); t < e.length; ++t)
            e[t].draw(this.chartArea);
        this.notifyPlugins("afterDraw")
    }
    _getSortedDatasetMetas(t)
    {
        let e = this._sortedMetasets,
            s = [],
            n,
            o;
        for (n = 0, o = e.length; n < o; ++n) {
            let a = e[n];
            (!t || a.visible) && s.push(a)
        }
        return s
    }
    getSortedVisibleDatasetMetas()
    {
        return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets()
    {
        if (this.notifyPlugins("beforeDatasetsDraw", {
            cancelable: !0
        }) === !1)
            return;
        let t = this.getSortedVisibleDatasetMetas();
        for (let e = t.length - 1; e >= 0; --e)
            this._drawDataset(t[e]);
        this.notifyPlugins("afterDatasetsDraw")
    }
    _drawDataset(t)
    {
        let e = this.ctx,
            s = t._clip,
            n = !s.disabled,
            o = Zr(t, this.chartArea),
            a = {
                meta: t,
                index: t.index,
                cancelable: !0
            };
        this.notifyPlugins("beforeDatasetDraw", a) !== !1 && (n && ie(e, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
        }), t.controller.draw(), n && se(e), a.cancelable = !1, this.notifyPlugins("afterDatasetDraw", a))
    }
    isPointInArea(t)
    {
        return et(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, e, s, n)
    {
        let o = Ja.modes[e];
        return typeof o == "function" ? o(this, t, s, n) : []
    }
    getDatasetMeta(t)
    {
        let e = this.data.datasets[t],
            s = this._metasets,
            n = s.filter(o => o && o._dataset === e).pop();
        return n || (n = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: e && e.order || 0,
            index: t,
            _dataset: e,
            _parsed: [],
            _sorted: !1
        }, s.push(n)), n
    }
    getContext()
    {
        return this.$context || (this.$context = ct(null, {
                chart: this,
                type: "chart"
            }))
    }
    getVisibleDatasetCount()
    {
        return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t)
    {
        let e = this.data.datasets[t];
        if (!e)
            return !1;
        let s = this.getDatasetMeta(t);
        return typeof s.hidden == "boolean" ? !s.hidden : !e.hidden
    }
    setDatasetVisibility(t, e)
    {
        let s = this.getDatasetMeta(t);
        s.hidden = !e
    }
    toggleDataVisibility(t)
    {
        this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t)
    {
        return !this._hiddenIndices[t]
    }
    _updateVisibility(t, e, s)
    {
        let n = s ? "show" : "hide",
            o = this.getDatasetMeta(t),
            a = o.controller._resolveAnimations(void 0, n);
        te(e) ? (o.data[e].hidden = !s, this.update()) : (this.setDatasetVisibility(t, s), a.update(o, {
            visible: s
        }), this.update(r => r.datasetIndex === t ? n : void 0))
    }
    hide(t, e)
    {
        this._updateVisibility(t, e, !1)
    }
    show(t, e)
    {
        this._updateVisibility(t, e, !0)
    }
    _destroyDatasetMeta(t)
    {
        let e = this._metasets[t];
        e && e.controller && e.controller._destroy(),
        delete this._metasets[t]
    }
    _stop()
    {
        let t,
            e;
        for (this.stop(), ht.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
            this._destroyDatasetMeta(t)
    }
    destroy()
    {
        this.notifyPlugins("beforeDestroy");
        let {canvas: t, ctx: e} = this;
        this._stop(),
        this.config.clearCache(),
        t && (this.unbindEvents(), wi(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null),
        delete Ke[this.id],
        this.notifyPlugins("afterDestroy")
    }
    toBase64Image(...t)
    {
        return this.canvas.toDataURL(...t)
    }
    bindEvents()
    {
        this.bindUserEvents(),
        this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0
    }
    bindUserEvents()
    {
        let t = this._listeners,
            e = this.platform,
            s = (o, a) => {
                e.addEventListener(this, o, a),
                t[o] = a
            },
            n = (o, a, r) => {
                o.offsetX = a,
                o.offsetY = r,
                this._eventHandler(o)
            };
        L(this.options.events, o => s(o, n))
    }
    bindResponsiveEvents()
    {
        this._responsiveListeners || (this._responsiveListeners = {});
        let t = this._responsiveListeners,
            e = this.platform,
            s = (l, c) => {
                e.addEventListener(this, l, c),
                t[l] = c
            },
            n = (l, c) => {
                t[l] && (e.removeEventListener(this, l, c), delete t[l])
            },
            o = (l, c) => {
                this.canvas && this.resize(l, c)
            },
            a,
            r = () => {
                n("attach", r),
                this.attached = !0,
                this.resize(),
                s("resize", o),
                s("detach", a)
            };
        a = () => {
            this.attached = !1,
            n("resize", o),
            this._stop(),
            this._resize(0, 0),
            s("attach", r)
        },
        e.isAttached(this.canvas) ? r() : a()
    }
    unbindEvents()
    {
        L(this._listeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }),
        this._listeners = {},
        L(this._responsiveListeners, (t, e) => {
            this.platform.removeEventListener(this, e, t)
        }),
        this._responsiveListeners = void 0
    }
    updateHoverStyle(t, e, s)
    {
        let n = s ? "set" : "remove",
            o,
            a,
            r,
            l;
        for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + n + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
            a = t[r];
            let c = a && this.getDatasetMeta(a.datasetIndex).controller;
            c && c[n + "HoverStyle"](a.element, a.datasetIndex, a.index)
        }
    }
    getActiveElements()
    {
        return this._active || []
    }
    setActiveElements(t)
    {
        let e = this._active || [],
            s = t.map(({datasetIndex: o, index: a}) => {
                let r = this.getDatasetMeta(o);
                if (!r)
                    throw new Error("No dataset found at index " + o);
                return {
                    datasetIndex: o,
                    element: r.data[a],
                    index: a
                }
            });
        !Jt(s, e) && (this._active = s, this._lastEvent = null, this._updateHoverStyles(s, e))
    }
    notifyPlugins(t, e, s)
    {
        return this._plugins.notify(this, t, e, s)
    }
    isPluginEnabled(t)
    {
        return this._plugins._cache.filter(e => e.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, e, s)
    {
        let n = this.options.hover,
            o = (l, c) => l.filter(h => !c.some(d => h.datasetIndex === d.datasetIndex && h.index === d.index)),
            a = o(e, t),
            r = s ? t : o(t, e);
        a.length && this.updateHoverStyle(a, n.mode, !1),
        r.length && n.mode && this.updateHoverStyle(r, n.mode, !0)
    }
    _eventHandler(t, e)
    {
        let s = {
                event: t,
                replay: e,
                cancelable: !0,
                inChartArea: this.isPointInArea(t)
            },
            n = a => (a.options.events || this.options.events).includes(t.native.type);
        if (this.notifyPlugins("beforeEvent", s, n) === !1)
            return;
        let o = this._handleEvent(t, e, s.inChartArea);
        return s.cancelable = !1, this.notifyPlugins("afterEvent", s, n), (o || s.changed) && this.render(), this
    }
    _handleEvent(t, e, s)
    {
        let {_active: n=[], options: o} = this,
            a = e,
            r = this._getActiveElements(t, n, s, a),
            l = Os(t),
            c = Gr(t, this._lastEvent, s, l);
        s && (this._lastEvent = null, R(o.onHover, [t, r, this], this), l && R(o.onClick, [t, r, this], this));
        let h = !Jt(r, n);
        return (h || e) && (this._active = r, this._updateHoverStyles(r, n, e)), this._lastEvent = c, h
    }
    _getActiveElements(t, e, s, n)
    {
        if (t.type === "mouseout")
            return [];
        if (!s)
            return e;
        let o = this.options.hover;
        return this.getElementsAtEventForMode(t, o.mode, o, n)
    }
}
;
function On() {
    return L(Je.instances, i => i._plugins.invalidate())
}
function ho(i, t, e=t) {
    i.lineCap = P(e.borderCapStyle, t.borderCapStyle),
    i.setLineDash(P(e.borderDash, t.borderDash)),
    i.lineDashOffset = P(e.borderDashOffset, t.borderDashOffset),
    i.lineJoin = P(e.borderJoinStyle, t.borderJoinStyle),
    i.lineWidth = P(e.borderWidth, t.borderWidth),
    i.strokeStyle = P(e.borderColor, t.borderColor)
}
function Jr(i, t, e) {
    i.lineTo(e.x, e.y)
}
function Qr(i) {
    return i.stepped ? js : i.tension || i.cubicInterpolationMode === "monotone" ? $s : Jr
}
function uo(i, t, e={}) {
    let s = i.length,
        {start: n=0, end: o=s - 1} = e,
        {start: a, end: r} = t,
        l = Math.max(n, a),
        c = Math.min(o, r),
        h = n < a && o < a || n > r && o > r;
    return {
        count: s,
        start: l,
        loop: t.loop,
        ilen: c < l && !h ? s + c - l : c - l
    }
}
function tl(i, t, e, s) {
    let {points: n, options: o} = t,
        {count: a, start: r, loop: l, ilen: c} = uo(n, e, s),
        h = Qr(o),
        {move: d=!0, reverse: u} = s || {},
        f,
        p,
        g;
    for (f = 0; f <= c; ++f)
        p = n[(r + (u ? c - f : f)) % a],
        !p.skip && (d ? (i.moveTo(p.x, p.y), d = !1) : h(i, g, p, u, o.stepped), g = p);
    return l && (p = n[(r + (u ? c : 0)) % a], h(i, g, p, u, o.stepped)), !!l
}
function el(i, t, e, s) {
    let n = t.points,
        {count: o, start: a, ilen: r} = uo(n, e, s),
        {move: l=!0, reverse: c} = s || {},
        h = 0,
        d = 0,
        u,
        f,
        p,
        g,
        m,
        b,
        _ = y => (a + (c ? r - y : y)) % o,
        S = () => {
            g !== m && (i.lineTo(h, m), i.lineTo(h, g), i.lineTo(h, b))
        };
    for (l && (f = n[_(0)], i.moveTo(f.x, f.y)), u = 0; u <= r; ++u) {
        if (f = n[_(u)], f.skip)
            continue;
        let y = f.x,
            x = f.y,
            k = y | 0;
        k === p ? (x < g ? g = x : x > m && (m = x), h = (d * h + y) / ++d) : (S(), i.lineTo(y, x), p = k, d = 0, g = m = x),
        b = x
    }
    S()
}
function is(i) {
    let t = i.options,
        e = t.borderDash && t.borderDash.length;
    return !i._decimated && !i._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? el : tl
}
function il(i) {
    return i.stepped ? tn : i.tension || i.cubicInterpolationMode === "monotone" ? en : pt
}
function sl(i, t, e, s) {
    let n = t._path;
    n || (n = t._path = new Path2D, t.path(n, e, s) && n.closePath()),
    ho(i, t.options),
    i.stroke(n)
}
function nl(i, t, e, s) {
    let {segments: n, options: o} = t,
        a = is(t);
    for (let r of n)
        ho(i, o, r.style),
        i.beginPath(),
        a(i, t, r, {
            start: e,
            end: e + s - 1
        }) && i.closePath(),
        i.stroke()
}
var ol = typeof Path2D == "function";
function al(i, t, e, s) {
    ol && !t.options.segment ? sl(i, t, e, s) : nl(i, t, e, s)
}
var jt = class  extends ut{
    static id = "line";
    static defaults = {
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0,
        borderJoinStyle: "miter",
        borderWidth: 3,
        capBezierPoints: !0,
        cubicInterpolationMode: "default",
        fill: !1,
        spanGaps: !1,
        stepped: !1,
        tension: 0
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    static descriptors = {
        _scriptable: !0,
        _indexable: t => t !== "borderDash" && t !== "fill"
    };
    constructor(t)
    {
        super(),
        this.animated = !0,
        this.options = void 0,
        this._chart = void 0,
        this._loop = void 0,
        this._fullLoop = void 0,
        this._path = void 0,
        this._points = void 0,
        this._segments = void 0,
        this._decimated = !1,
        this._pointsUpdated = !1,
        this._datasetIndex = void 0,
        t && Object.assign(this, t)
    }
    updateControlPoints(t, e)
    {
        let s = this.options;
        if ((s.tension || s.cubicInterpolationMode === "monotone") && !s.stepped && !this._pointsUpdated) {
            let n = s.spanGaps ? this._loop : this._fullLoop;
            Zs(this._points, s, t, n, e),
            this._pointsUpdated = !0
        }
    }
    set points(t)
    {
        this._points = t,
        delete this._segments,
        delete this._path,
        this._pointsUpdated = !1
    }
    get points()
    {
        return this._points
    }
    get segments()
    {
        return this._segments || (this._segments = nn(this, this.options.segment))
    }
    first()
    {
        let t = this.segments,
            e = this.points;
        return t.length && e[t[0].start]
    }
    last()
    {
        let t = this.segments,
            e = this.points,
            s = t.length;
        return s && e[t[s - 1].end]
    }
    interpolate(t, e)
    {
        let s = this.options,
            n = t[e],
            o = this.points,
            a = Ii(this, {
                property: e,
                start: n,
                end: n
            });
        if (!a.length)
            return;
        let r = [],
            l = il(s),
            c,
            h;
        for (c = 0, h = a.length; c < h; ++c) {
            let {start: d, end: u} = a[c],
                f = o[d],
                p = o[u];
            if (f === p) {
                r.push(f);
                continue
            }
            let g = Math.abs((n - f[e]) / (p[e] - f[e])),
                m = l(f, p, g, s.stepped);
            m[e] = t[e],
            r.push(m)
        }
        return r.length === 1 ? r[0] : r
    }
    pathSegment(t, e, s)
    {
        return is(this)(t, this, e, s)
    }
    path(t, e, s)
    {
        let n = this.segments,
            o = is(this),
            a = this._loop;
        e = e || 0,
        s = s || this.points.length - e;
        for (let r of n)
            a &= o(t, this, r, {
                start: e,
                end: e + s - 1
            });
        return !!a
    }
    draw(t, e, s, n)
    {
        let o = this.options || {};
        (this.points || []).length && o.borderWidth && (t.save(), al(t, this, s, n), t.restore()),
        this.animated && (this._pointsUpdated = !1, this._path = void 0)
    }
}
;
function An(i, t, e, s) {
    let n = i.options,
        {[e]: o} = i.getProps([e], s);
    return Math.abs(t - o) < n.radius + n.hitRadius
}
var ss = class  extends ut{
    static id = "point";
    parsed;
    skip;
    stop;
    static defaults = {
        borderWidth: 1,
        hitRadius: 1,
        hoverBorderWidth: 1,
        hoverRadius: 4,
        pointStyle: "circle",
        radius: 3,
        rotation: 0
    };
    static defaultRoutes = {
        backgroundColor: "backgroundColor",
        borderColor: "borderColor"
    };
    constructor(t)
    {
        super(),
        this.options = void 0,
        this.parsed = void 0,
        this.skip = void 0,
        this.stop = void 0,
        t && Object.assign(this, t)
    }
    inRange(t, e, s)
    {
        let n = this.options,
            {x: o, y: a} = this.getProps(["x", "y"], s);
        return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(n.hitRadius + n.radius, 2)
    }
    inXRange(t, e)
    {
        return An(this, t, "x", e)
    }
    inYRange(t, e)
    {
        return An(this, t, "y", e)
    }
    getCenterPoint(t)
    {
        let {x: e, y: s} = this.getProps(["x", "y"], t);
        return {
            x: e,
            y: s
        }
    }
    size(t)
    {
        t = t || this.options || {};
        let e = t.radius || 0;
        e = Math.max(e, e && t.hoverRadius || 0);
        let s = e && t.borderWidth || 0;
        return (e + s) * 2
    }
    draw(t, e)
    {
        let s = this.options;
        this.skip || s.radius < .1 || !et(this, e, this.size(s) / 2) || (t.strokeStyle = s.borderColor, t.lineWidth = s.borderWidth, t.fillStyle = s.backgroundColor, Ie(t, s, this.x, this.y))
    }
    getRange()
    {
        let t = this.options || {};
        return t.radius + t.hitRadius
    }
}
;
function rl(i, t, e) {
    let s = i.segments,
        n = i.points,
        o = t.points,
        a = [];
    for (let r of s) {
        let {start: l, end: c} = r;
        c = ls(l, c, n);
        let h = ns(e, n[l], n[c], r.loop);
        if (!t.segments) {
            a.push({
                source: r,
                target: h,
                start: n[l],
                end: n[c]
            });
            continue
        }
        let d = Ii(t, h);
        for (let u of d) {
            let f = ns(e, o[u.start], o[u.end], u.loop),
                p = Fi(r, n, f);
            for (let g of p)
                a.push({
                    source: g,
                    target: u,
                    start: {
                        [e]: Tn(h, f, "start", Math.max)
                    },
                    end: {
                        [e]: Tn(h, f, "end", Math.min)
                    }
                })
        }
    }
    return a
}
function ns(i, t, e, s) {
    if (s)
        return;
    let n = t[i],
        o = e[i];
    return i === "angle" && (n = $(n), o = $(o)), {
        property: i,
        start: n,
        end: o
    }
}
function ll(i, t) {
    let {x: e=null, y: s=null} = i || {},
        n = t.points,
        o = [];
    return t.segments.forEach(({start: a, end: r}) => {
        r = ls(a, r, n);
        let l = n[a],
            c = n[r];
        s !== null ? (o.push({
            x: l.x,
            y: s
        }), o.push({
            x: c.x,
            y: s
        })) : e !== null && (o.push({
            x: e,
            y: l.y
        }), o.push({
            x: e,
            y: c.y
        }))
    }), o
}
function ls(i, t, e) {
    for (; t > i; t--) {
        let s = e[t];
        if (!isNaN(s.x) && !isNaN(s.y))
            break
    }
    return t
}
function Tn(i, t, e, s) {
    return i && t ? s(i[e], t[e]) : i ? i[e] : t ? t[e] : 0
}
function fo(i, t) {
    let e = [],
        s = !1;
    return E(i) ? (s = !0, e = i) : e = ll(i, t), e.length ? new jt({
        points: e,
        options: {
            tension: 0
        },
        _loop: s,
        _fullLoop: s
    }) : null
}
function Ln(i) {
    return i && i.fill !== !1
}
function cl(i, t, e) {
    let n = i[t].fill,
        o = [t],
        a;
    if (!e)
        return n;
    for (; n !== !1 && o.indexOf(n) === -1;) {
        if (!F(n))
            return n;
        if (a = i[n], !a)
            return !1;
        if (a.visible)
            return n;
        o.push(n),
        n = a.fill
    }
    return !1
}
function hl(i, t, e) {
    let s = gl(i);
    if (C(s))
        return isNaN(s.value) ? !1 : s;
    let n = parseFloat(s);
    return F(n) && Math.floor(n) === n ? dl(s[0], t, n, e) : ["origin", "start", "end", "stack", "shape"].indexOf(s) >= 0 && s
}
function dl(i, t, e, s) {
    return (i === "-" || i === "+") && (e = t + e), e === t || e < 0 || e >= s ? !1 : e
}
function ul(i, t) {
    let e = null;
    return i === "start" ? e = t.bottom : i === "end" ? e = t.top : C(i) ? e = t.getPixelForValue(i.value) : t.getBasePixel && (e = t.getBasePixel()), e
}
function fl(i, t, e) {
    let s;
    return i === "start" ? s = e : i === "end" ? s = t.options.reverse ? t.min : t.max : C(i) ? s = i.value : s = t.getBaseValue(), s
}
function gl(i) {
    let t = i.options,
        e = t.fill,
        s = P(e && e.target, e);
    return s === void 0 && (s = !!t.backgroundColor), s === !1 || s === null ? !1 : s === !0 ? "origin" : s
}
function pl(i) {
    let {scale: t, index: e, line: s} = i,
        n = [],
        o = s.segments,
        a = s.points,
        r = ml(t, e);
    r.push(fo({
        x: null,
        y: t.bottom
    }, s));
    for (let l = 0; l < o.length; l++) {
        let c = o[l];
        for (let h = c.start; h <= c.end; h++)
            bl(n, a[h], r)
    }
    return new jt({
        points: n,
        options: {}
    })
}
function ml(i, t) {
    let e = [],
        s = i.getMatchingVisibleMetas("line");
    for (let n = 0; n < s.length; n++) {
        let o = s[n];
        if (o.index === t)
            break;
        o.hidden || e.unshift(o.dataset)
    }
    return e
}
function bl(i, t, e) {
    let s = [];
    for (let n = 0; n < e.length; n++) {
        let o = e[n],
            {first: a, last: r, point: l} = xl(o, t, "x");
        if (!(!l || a && r)) {
            if (a)
                s.unshift(l);
            else if (i.push(l), !r)
                break
        }
    }
    i.push(...s)
}
function xl(i, t, e) {
    let s = i.interpolate(t, e);
    if (!s)
        return {};
    let n = s[e],
        o = i.segments,
        a = i.points,
        r = !1,
        l = !1;
    for (let c = 0; c < o.length; c++) {
        let h = o[c],
            d = a[h.start][e],
            u = a[h.end][e];
        if (Ct(n, d, u)) {
            r = n === d,
            l = n === u;
            break
        }
    }
    return {
        first: r,
        last: l,
        point: s
    }
}
var Qe = class {
    constructor(t)
    {
        this.x = t.x,
        this.y = t.y,
        this.radius = t.radius
    }
    pathSegment(t, e, s)
    {
        let {x: n, y: o, radius: a} = this;
        return e = e || {
            start: 0,
            end: U
        }, t.arc(n, o, a, e.end, e.start, !0), !s.bounds
    }
    interpolate(t)
    {
        let {x: e, y: s, radius: n} = this,
            o = t.angle;
        return {
            x: e + Math.cos(o) * n,
            y: s + Math.sin(o) * n,
            angle: o
        }
    }
}
;
function _l(i) {
    let {chart: t, fill: e, line: s} = i;
    if (F(e))
        return yl(t, e);
    if (e === "stack")
        return pl(i);
    if (e === "shape")
        return !0;
    let n = vl(i);
    return n instanceof Qe ? n : fo(n, s)
}
function yl(i, t) {
    let e = i.getDatasetMeta(t);
    return e && i.isDatasetVisible(t) ? e.dataset : null
}
function vl(i) {
    return (i.scale || {}).getPointPositionForValue ? kl(i) : Ml(i)
}
function Ml(i) {
    let {scale: t={}, fill: e} = i,
        s = ul(e, t);
    if (F(s)) {
        let n = t.isHorizontal();
        return {
            x: n ? s : null,
            y: n ? null : s
        }
    }
    return null
}
function kl(i) {
    let {scale: t, fill: e} = i,
        s = t.options,
        n = t.getLabels().length,
        o = s.reverse ? t.max : t.min,
        a = fl(e, t, o),
        r = [];
    if (s.grid.circular) {
        let l = t.getPointPositionForValue(0, o);
        return new Qe({
            x: l.x,
            y: l.y,
            radius: t.getDistanceFromCenterForValue(a)
        })
    }
    for (let l = 0; l < n; ++l)
        r.push(t.getPointPositionForValue(l, a));
    return r
}
function ji(i, t, e) {
    let s = _l(t),
        {line: n, scale: o, axis: a} = t,
        r = n.options,
        l = r.fill,
        c = r.backgroundColor,
        {above: h=c, below: d=c} = l || {};
    s && n.points.length && (ie(i, e), Sl(i, {
        line: n,
        target: s,
        above: h,
        below: d,
        area: e,
        scale: o,
        axis: a
    }), se(i))
}
function Sl(i, t) {
    let {line: e, target: s, above: n, below: o, area: a, scale: r} = t,
        l = e._loop ? "angle" : t.axis;
    i.save(),
    l === "x" && o !== n && (Rn(i, s, a.top), En(i, {
        line: e,
        target: s,
        color: n,
        scale: r,
        property: l
    }), i.restore(), i.save(), Rn(i, s, a.bottom)),
    En(i, {
        line: e,
        target: s,
        color: o,
        scale: r,
        property: l
    }),
    i.restore()
}
function Rn(i, t, e) {
    let {segments: s, points: n} = t,
        o = !0,
        a = !1;
    i.beginPath();
    for (let r of s) {
        let {start: l, end: c} = r,
            h = n[l],
            d = n[ls(l, c, n)];
        o ? (i.moveTo(h.x, h.y), o = !1) : (i.lineTo(h.x, e), i.lineTo(h.x, h.y)),
        a = !!t.pathSegment(i, r, {
            move: a
        }),
        a ? i.closePath() : i.lineTo(d.x, e)
    }
    i.lineTo(t.first().x, e),
    i.closePath(),
    i.clip()
}
function En(i, t) {
    let {line: e, target: s, property: n, color: o, scale: a} = t,
        r = rl(e, s, n);
    for (let {source: l, target: c, start: h, end: d} of r) {
        let {style: {backgroundColor: u=o}={}} = l,
            f = s !== !0;
        i.save(),
        i.fillStyle = u,
        wl(i, a, f && ns(n, h, d)),
        i.beginPath();
        let p = !!e.pathSegment(i, l),
            g;
        if (f) {
            p ? i.closePath() : Fn(i, s, d, n);
            let m = !!s.pathSegment(i, c, {
                move: p,
                reverse: !0
            });
            g = p && m,
            g || Fn(i, s, h, n)
        }
        i.closePath(),
        i.fill(g ? "evenodd" : "nonzero"),
        i.restore()
    }
}
function wl(i, t, e) {
    let {top: s, bottom: n} = t.chart.chartArea,
        {property: o, start: a, end: r} = e || {};
    o === "x" && (i.beginPath(), i.rect(a, s, r - a, n - s), i.clip())
}
function Fn(i, t, e, s) {
    let n = t.interpolate(e, s);
    n && i.lineTo(n.x, n.y)
}
var Pl = {
        id: "filler",
        afterDatasetsUpdate(i, t, e) {
            let s = (i.data.datasets || []).length,
                n = [],
                o,
                a,
                r,
                l;
            for (a = 0; a < s; ++a)
                o = i.getDatasetMeta(a),
                r = o.dataset,
                l = null,
                r && r.options && r instanceof jt && (l = {
                    visible: i.isDatasetVisible(a),
                    index: a,
                    fill: hl(r, a, s),
                    chart: i,
                    axis: o.controller.options.indexAxis,
                    scale: o.vScale,
                    line: r
                }),
                o.$filler = l,
                n.push(l);
            for (a = 0; a < s; ++a)
                l = n[a],
                !(!l || l.fill === !1) && (l.fill = cl(n, a, e.propagate))
        },
        beforeDraw(i, t, e) {
            let s = e.drawTime === "beforeDraw",
                n = i.getSortedVisibleDatasetMetas(),
                o = i.chartArea;
            for (let a = n.length - 1; a >= 0; --a) {
                let r = n[a].$filler;
                r && (r.line.updateControlPoints(o, r.axis), s && r.fill && ji(i.ctx, r, o))
            }
        },
        beforeDatasetsDraw(i, t, e) {
            if (e.drawTime !== "beforeDatasetsDraw")
                return;
            let s = i.getSortedVisibleDatasetMetas();
            for (let n = s.length - 1; n >= 0; --n) {
                let o = s[n].$filler;
                Ln(o) && ji(i.ctx, o, i.chartArea)
            }
        },
        beforeDatasetDraw(i, t, e) {
            let s = t.meta.$filler;
            !Ln(s) || e.drawTime !== "beforeDatasetDraw" || ji(i.ctx, s, i.chartArea)
        },
        defaults: {
            propagate: !0,
            drawTime: "beforeDatasetDraw"
        }
    },
    In = (i, t) => {
        let {boxHeight: e=t, boxWidth: s=t} = i;
        return i.usePointStyle && (e = Math.min(e, t), s = i.pointStyleWidth || Math.min(s, t)), {
            boxWidth: s,
            boxHeight: e,
            itemHeight: Math.max(t, e)
        }
    },
    Dl = (i, t) => i !== null && t !== null && i.datasetIndex === t.datasetIndex && i.index === t.index,
    ti = class  extends ut{
        constructor(t)
        {
            super(),
            this._added = !1,
            this.legendHitBoxes = [],
            this._hoveredItem = null,
            this.doughnutMode = !1,
            this.chart = t.chart,
            this.options = t.options,
            this.ctx = t.ctx,
            this.legendItems = void 0,
            this.columnSizes = void 0,
            this.lineWidths = void 0,
            this.maxHeight = void 0,
            this.maxWidth = void 0,
            this.top = void 0,
            this.bottom = void 0,
            this.left = void 0,
            this.right = void 0,
            this.height = void 0,
            this.width = void 0,
            this._margins = void 0,
            this.position = void 0,
            this.weight = void 0,
            this.fullSize = void 0
        }
        update(t, e, s)
        {
            this.maxWidth = t,
            this.maxHeight = e,
            this._margins = s,
            this.setDimensions(),
            this.buildLabels(),
            this.fit()
        }
        setDimensions()
        {
            this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height)
        }
        buildLabels()
        {
            let t = this.options.labels || {},
                e = R(t.generateLabels, [this.chart], this) || [];
            t.filter && (e = e.filter(s => t.filter(s, this.chart.data))),
            t.sort && (e = e.sort((s, n) => t.sort(s, n, this.chart.data))),
            this.options.reverse && e.reverse(),
            this.legendItems = e
        }
        fit()
        {
            let {options: t, ctx: e} = this;
            if (!t.display) {
                this.width = this.height = 0;
                return
            }
            let s = t.labels,
                n = V(s.font),
                o = n.size,
                a = this._computeTitleHeight(),
                {boxWidth: r, itemHeight: l} = In(s, o),
                c,
                h;
            e.font = n.string,
            this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, n, r, l) + 10),
            this.width = Math.min(c, t.maxWidth || this.maxWidth),
            this.height = Math.min(h, t.maxHeight || this.maxHeight)
        }
        _fitRows(t, e, s, n)
        {
            let {ctx: o, maxWidth: a, options: {labels: {padding: r}}} = this,
                l = this.legendHitBoxes = [],
                c = this.lineWidths = [0],
                h = n + r,
                d = t;
            o.textAlign = "left",
            o.textBaseline = "middle";
            let u = -1,
                f = -h;
            return this.legendItems.forEach((p, g) => {
                let m = s + e / 2 + o.measureText(p.text).width;
                (g === 0 || c[c.length - 1] + m + 2 * r > a) && (d += h, c[c.length - (g > 0 ? 0 : 1)] = 0, f += h, u++),
                l[g] = {
                    left: 0,
                    top: f,
                    row: u,
                    width: m,
                    height: n
                },
                c[c.length - 1] += m + r
            }), d
        }
        _fitCols(t, e, s, n)
        {
            let {ctx: o, maxHeight: a, options: {labels: {padding: r}}} = this,
                l = this.legendHitBoxes = [],
                c = this.columnSizes = [],
                h = a - t,
                d = r,
                u = 0,
                f = 0,
                p = 0,
                g = 0;
            return this.legendItems.forEach((m, b) => {
                let {itemWidth: _, itemHeight: S} = Cl(s, e, o, m, n);
                b > 0 && f + S + 2 * r > h && (d += u + r, c.push({
                    width: u,
                    height: f
                }), p += u + r, g++, u = f = 0),
                l[b] = {
                    left: p,
                    top: f,
                    col: g,
                    width: _,
                    height: S
                },
                u = Math.max(u, _),
                f += S + r
            }), d += u, c.push({
                width: u,
                height: f
            }), d
        }
        adjustHitBoxes()
        {
            if (!this.options.display)
                return;
            let t = this._computeTitleHeight(),
                {legendHitBoxes: e, options: {align: s, labels: {padding: n}, rtl: o}} = this,
                a = At(o, this.left, this.width);
            if (this.isHorizontal()) {
                let r = 0,
                    l = N(s, this.left + n, this.right - this.lineWidths[r]);
                for (let c of e)
                    r !== c.row && (r = c.row, l = N(s, this.left + n, this.right - this.lineWidths[r])),
                    c.top += this.top + t + n,
                    c.left = a.leftForLtr(a.x(l), c.width),
                    l += c.width + n
            } else {
                let r = 0,
                    l = N(s, this.top + t + n, this.bottom - this.columnSizes[r].height);
                for (let c of e)
                    c.col !== r && (r = c.col, l = N(s, this.top + t + n, this.bottom - this.columnSizes[r].height)),
                    c.top = l,
                    c.left += this.left + n,
                    c.left = a.leftForLtr(a.x(c.left), c.width),
                    l += c.height + n
            }
        }
        isHorizontal()
        {
            return this.options.position === "top" || this.options.position === "bottom"
        }
        draw()
        {
            if (this.options.display) {
                let t = this.ctx;
                ie(t, this),
                this._draw(),
                se(t)
            }
        }
        _draw()
        {
            let {options: t, columnSizes: e, lineWidths: s, ctx: n} = this,
                {align: o, labels: a} = t,
                r = I.color,
                l = At(t.rtl, this.left, this.width),
                c = V(a.font),
                {padding: h} = a,
                d = c.size,
                u = d / 2,
                f;
            this.drawTitle(),
            n.textAlign = l.textAlign("left"),
            n.textBaseline = "middle",
            n.lineWidth = .5,
            n.font = c.string;
            let {boxWidth: p, boxHeight: g, itemHeight: m} = In(a, d),
                b = function(k, v, M) {
                    if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
                        return;
                    n.save();
                    let w = P(M.lineWidth, 1);
                    if (n.fillStyle = P(M.fillStyle, r), n.lineCap = P(M.lineCap, "butt"), n.lineDashOffset = P(M.lineDashOffset, 0), n.lineJoin = P(M.lineJoin, "miter"), n.lineWidth = w, n.strokeStyle = P(M.strokeStyle, r), n.setLineDash(P(M.lineDash, [])), a.usePointStyle) {
                        let O = {
                                radius: g * Math.SQRT2 / 2,
                                pointStyle: M.pointStyle,
                                rotation: M.rotation,
                                borderWidth: w
                            },
                            D = l.xPlus(k, p / 2),
                            T = v + u;
                        Pi(n, O, D, T, a.pointStyleWidth && p)
                    } else {
                        let O = v + Math.max((d - g) / 2, 0),
                            D = l.leftForLtr(k, p),
                            T = Ot(M.borderRadius);
                        n.beginPath(),
                        Object.values(T).some(j => j !== 0) ? ne(n, {
                            x: D,
                            y: O,
                            w: p,
                            h: g,
                            radius: T
                        }) : n.rect(D, O, p, g),
                        n.fill(),
                        w !== 0 && n.stroke()
                    }
                    n.restore()
                },
                _ = function(k, v, M) {
                    _t(n, M.text, k, v + m / 2, c, {
                        strikethrough: M.hidden,
                        textAlign: l.textAlign(M.textAlign)
                    })
                },
                S = this.isHorizontal(),
                y = this._computeTitleHeight();
            S ? f = {
                x: N(o, this.left + h, this.right - s[0]),
                y: this.top + h + y,
                line: 0
            } : f = {
                x: this.left + h,
                y: N(o, this.top + y + h, this.bottom - e[0].height),
                line: 0
            },
            Ri(this.ctx, t.textDirection);
            let x = m + h;
            this.legendItems.forEach((k, v) => {
                n.strokeStyle = k.fontColor,
                n.fillStyle = k.fontColor;
                let M = n.measureText(k.text).width,
                    w = l.textAlign(k.textAlign || (k.textAlign = a.textAlign)),
                    O = p + u + M,
                    D = f.x,
                    T = f.y;
                l.setWidth(this.width),
                S ? v > 0 && D + O + h > this.right && (T = f.y += x, f.line++, D = f.x = N(o, this.left + h, this.right - s[f.line])) : v > 0 && T + x > this.bottom && (D = f.x = D + e[f.line].width + h, f.line++, T = f.y = N(o, this.top + y + h, this.bottom - e[f.line].height));
                let j = l.x(D);
                if (b(j, T, k), D = Ws(w, D + p + u, S ? D + O : this.right, t.rtl), _(l.x(D), T, k), S)
                    f.x += O + h;
                else if (typeof k.text != "string") {
                    let tt = c.lineHeight;
                    f.y += go(k, tt) + h
                } else
                    f.y += x
            }),
            Ei(this.ctx, t.textDirection)
        }
        drawTitle()
        {
            let t = this.options,
                e = t.title,
                s = V(e.font),
                n = H(e.padding);
            if (!e.display)
                return;
            let o = At(t.rtl, this.left, this.width),
                a = this.ctx,
                r = e.position,
                l = s.size / 2,
                c = n.top + l,
                h,
                d = this.left,
                u = this.width;
            if (this.isHorizontal())
                u = Math.max(...this.lineWidths),
                h = this.top + c,
                d = N(t.align, d, this.right - u);
            else {
                let p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
                h = c + N(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight())
            }
            let f = N(r, d, d + u);
            a.textAlign = o.textAlign(Re(r)),
            a.textBaseline = "middle",
            a.strokeStyle = e.color,
            a.fillStyle = e.color,
            a.font = s.string,
            _t(a, e.text, f, h, s)
        }
        _computeTitleHeight()
        {
            let t = this.options.title,
                e = V(t.font),
                s = H(t.padding);
            return t.display ? e.lineHeight + s.height : 0
        }
        _getLegendItemAt(t, e)
        {
            let s,
                n,
                o;
            if (Ct(t, this.left, this.right) && Ct(e, this.top, this.bottom)) {
                for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
                    if (n = o[s], Ct(t, n.left, n.left + n.width) && Ct(e, n.top, n.top + n.height))
                        return this.legendItems[s]
            }
            return null
        }
        handleEvent(t)
        {
            let e = this.options;
            if (!Tl(t.type, e))
                return;
            let s = this._getLegendItemAt(t.x, t.y);
            if (t.type === "mousemove" || t.type === "mouseout") {
                let n = this._hoveredItem,
                    o = Dl(n, s);
                n && !o && R(e.onLeave, [t, n, this], this),
                this._hoveredItem = s,
                s && !o && R(e.onHover, [t, s, this], this)
            } else
                s && R(e.onClick, [t, s, this], this)
        }
    }
    ;
function Cl(i, t, e, s, n) {
    let o = Ol(s, i, t, e),
        a = Al(n, s, t.lineHeight);
    return {
        itemWidth: o,
        itemHeight: a
    }
}
function Ol(i, t, e, s) {
    let n = i.text;
    return n && typeof n != "string" && (n = n.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + s.measureText(n).width
}
function Al(i, t, e) {
    let s = i;
    return typeof t.text != "string" && (s = go(t, e)), s
}
function go(i, t) {
    let e = i.text ? i.text.length : 0;
    return t * e
}
function Tl(i, t) {
    return !!((i === "mousemove" || i === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (i === "click" || i === "mouseup"))
}
var Ll = {
        id: "legend",
        _element: ti,
        start(i, t, e) {
            let s = i.legend = new ti({
                ctx: i.ctx,
                options: e,
                chart: i
            });
            Q.configure(i, s, e),
            Q.addBox(i, s)
        },
        stop(i) {
            Q.removeBox(i, i.legend),
            delete i.legend
        },
        beforeUpdate(i, t, e) {
            let s = i.legend;
            Q.configure(i, s, e),
            s.options = e
        },
        afterUpdate(i) {
            let t = i.legend;
            t.buildLabels(),
            t.adjustHitBoxes()
        },
        afterEvent(i, t) {
            t.replay || i.legend.handleEvent(t.event)
        },
        defaults: {
            display: !0,
            position: "top",
            align: "center",
            fullSize: !0,
            reverse: !1,
            weight: 1e3,
            onClick(i, t, e) {
                let s = t.datasetIndex,
                    n = e.chart;
                n.isDatasetVisible(s) ? (n.hide(s), t.hidden = !0) : (n.show(s), t.hidden = !1)
            },
            onHover: null,
            onLeave: null,
            labels: {
                color: i => i.chart.options.color,
                boxWidth: 40,
                padding: 10,
                generateLabels(i) {
                    let t = i.data.datasets,
                        {labels: {usePointStyle: e, pointStyle: s, textAlign: n, color: o, useBorderRadius: a, borderRadius: r}} = i.legend.options;
                    return i._getSortedDatasetMetas().map(l => {
                        let c = l.controller.getStyle(e ? 0 : void 0),
                            h = H(c.borderWidth);
                        return {
                            text: t[l.index].label,
                            fillStyle: c.backgroundColor,
                            fontColor: o,
                            hidden: !l.visible,
                            lineCap: c.borderCapStyle,
                            lineDash: c.borderDash,
                            lineDashOffset: c.borderDashOffset,
                            lineJoin: c.borderJoinStyle,
                            lineWidth: (h.width + h.height) / 4,
                            strokeStyle: c.borderColor,
                            pointStyle: s || c.pointStyle,
                            rotation: c.rotation,
                            textAlign: n || c.textAlign,
                            borderRadius: a && (r || c.borderRadius),
                            datasetIndex: l.index
                        }
                    }, this)
                }
            },
            title: {
                color: i => i.chart.options.color,
                display: !1,
                position: "center",
                text: ""
            }
        },
        descriptors: {
            _scriptable: i => !i.startsWith("on"),
            labels: {
                _scriptable: i => !["generateLabels", "filter", "sort"].includes(i)
            }
        }
    },
    ei = class  extends ut{
        constructor(t)
        {
            super(),
            this.chart = t.chart,
            this.options = t.options,
            this.ctx = t.ctx,
            this._padding = void 0,
            this.top = void 0,
            this.bottom = void 0,
            this.left = void 0,
            this.right = void 0,
            this.width = void 0,
            this.height = void 0,
            this.position = void 0,
            this.weight = void 0,
            this.fullSize = void 0
        }
        update(t, e)
        {
            let s = this.options;
            if (this.left = 0, this.top = 0, !s.display) {
                this.width = this.height = this.right = this.bottom = 0;
                return
            }
            this.width = this.right = t,
            this.height = this.bottom = e;
            let n = E(s.text) ? s.text.length : 1;
            this._padding = H(s.padding);
            let o = n * V(s.font).lineHeight + this._padding.height;
            this.isHorizontal() ? this.height = o : this.width = o
        }
        isHorizontal()
        {
            let t = this.options.position;
            return t === "top" || t === "bottom"
        }
        _drawArgs(t)
        {
            let {top: e, left: s, bottom: n, right: o, options: a} = this,
                r = a.align,
                l = 0,
                c,
                h,
                d;
            return this.isHorizontal() ? (h = N(r, s, o), d = e + t, c = o - s) : (a.position === "left" ? (h = s + t, d = N(r, n, e), l = B * -.5) : (h = o - t, d = N(r, e, n), l = B * .5), c = n - e), {
                titleX: h,
                titleY: d,
                maxWidth: c,
                rotation: l
            }
        }
        draw()
        {
            let t = this.ctx,
                e = this.options;
            if (!e.display)
                return;
            let s = V(e.font),
                o = s.lineHeight / 2 + this._padding.top,
                {titleX: a, titleY: r, maxWidth: l, rotation: c} = this._drawArgs(o);
            _t(t, e.text, 0, 0, s, {
                color: e.color,
                maxWidth: l,
                rotation: c,
                textAlign: Re(e.align),
                textBaseline: "middle",
                translation: [a, r]
            })
        }
    }
    ;
function Rl(i, t) {
    let e = new ei({
        ctx: i.ctx,
        options: t,
        chart: i
    });
    Q.configure(i, e, t),
    Q.addBox(i, e),
    i.titleBlock = e
}
var El = {
    id: "title",
    _element: ei,
    start(i, t, e) {
        Rl(i, e)
    },
    stop(i) {
        let t = i.titleBlock;
        Q.removeBox(i, t),
        delete i.titleBlock
    },
    beforeUpdate(i, t, e) {
        let s = i.titleBlock;
        Q.configure(i, s, e),
        s.options = e
    },
    defaults: {
        align: "center",
        display: !1,
        font: {
            weight: "bold"
        },
        fullSize: !0,
        padding: 10,
        position: "top",
        text: "",
        weight: 2e3
    },
    defaultRoutes: {
        color: "color"
    },
    descriptors: {
        _scriptable: !0,
        _indexable: !1
    }
};
var ue = {
    average(i) {
        if (!i.length)
            return !1;
        let t,
            e,
            s = new Set,
            n = 0,
            o = 0;
        for (t = 0, e = i.length; t < e; ++t) {
            let r = i[t].element;
            if (r && r.hasValue()) {
                let l = r.tooltipPosition();
                s.add(l.x),
                n += l.y,
                ++o
            }
        }
        return o === 0 || s.size === 0 ? !1 : {
            x: [...s].reduce((r, l) => r + l) / s.size,
            y: n / o
        }
    },
    nearest(i, t) {
        if (!i.length)
            return !1;
        let e = t.x,
            s = t.y,
            n = Number.POSITIVE_INFINITY,
            o,
            a,
            r;
        for (o = 0, a = i.length; o < a; ++o) {
            let l = i[o].element;
            if (l && l.hasValue()) {
                let c = l.getCenterPoint(),
                    h = Ce(t, c);
                h < n && (n = h, r = l)
            }
        }
        if (r) {
            let l = r.tooltipPosition();
            e = l.x,
            s = l.y
        }
        return {
            x: e,
            y: s
        }
    }
};
function st(i, t) {
    return t && (E(t) ? Array.prototype.push.apply(i, t) : i.push(t)), i
}
function dt(i) {
    return (typeof i == "string" || i instanceof String) && i.indexOf(`
`
    ) > -1 ? i.split(`
`
    ) : i
}
function Fl(i, t) {
    let {element: e, datasetIndex: s, index: n} = t,
        o = i.getDatasetMeta(s).controller,
        {label: a, value: r} = o.getLabelAndValue(n);
    return {
        chart: i,
        label: a,
        parsed: o.getParsed(n),
        raw: i.data.datasets[s].data[n],
        formattedValue: r,
        dataset: o.getDataset(),
        dataIndex: n,
        datasetIndex: s,
        element: e
    }
}
function zn(i, t) {
    let e = i.chart.ctx,
        {body: s, footer: n, title: o} = i,
        {boxWidth: a, boxHeight: r} = t,
        l = V(t.bodyFont),
        c = V(t.titleFont),
        h = V(t.footerFont),
        d = o.length,
        u = n.length,
        f = s.length,
        p = H(t.padding),
        g = p.height,
        m = 0,
        b = s.reduce((y, x) => y + x.before.length + x.lines.length + x.after.length, 0);
    if (b += i.beforeBody.length + i.afterBody.length, d && (g += d * c.lineHeight + (d - 1) * t.titleSpacing + t.titleMarginBottom), b) {
        let y = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
        g += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing
    }
    u && (g += t.footerMarginTop + u * h.lineHeight + (u - 1) * t.footerSpacing);
    let _ = 0,
        S = function(y) {
            m = Math.max(m, e.measureText(y).width + _)
        };
    return e.save(), e.font = c.string, L(i.title, S), e.font = l.string, L(i.beforeBody.concat(i.afterBody), S), _ = t.displayColors ? a + 2 + t.boxPadding : 0, L(s, y => {
        L(y.before, S),
        L(y.lines, S),
        L(y.after, S)
    }), _ = 0, e.font = h.string, L(i.footer, S), e.restore(), m += p.width, {
        width: m,
        height: g
    }
}
function Il(i, t) {
    let {y: e, height: s} = t;
    return e < s / 2 ? "top" : e > i.height - s / 2 ? "bottom" : "center"
}
function zl(i, t, e, s) {
    let {x: n, width: o} = s,
        a = e.caretSize + e.caretPadding;
    if (i === "left" && n + o + a > t.width || i === "right" && n - o - a < 0)
        return !0
}
function Bl(i, t, e, s) {
    let {x: n, width: o} = e,
        {width: a, chartArea: {left: r, right: l}} = i,
        c = "center";
    return s === "center" ? c = n <= (r + l) / 2 ? "left" : "right" : n <= o / 2 ? c = "left" : n >= a - o / 2 && (c = "right"), zl(c, i, t, e) && (c = "center"), c
}
function Bn(i, t, e) {
    let s = e.yAlign || t.yAlign || Il(i, e);
    return {
        xAlign: e.xAlign || t.xAlign || Bl(i, t, e, s),
        yAlign: s
    }
}
function Vl(i, t) {
    let {x: e, width: s} = i;
    return t === "right" ? e -= s : t === "center" && (e -= s / 2), e
}
function Wl(i, t, e) {
    let {y: s, height: n} = i;
    return t === "top" ? s += e : t === "bottom" ? s -= n + e : s -= n / 2, s
}
function Vn(i, t, e, s) {
    let {caretSize: n, caretPadding: o, cornerRadius: a} = i,
        {xAlign: r, yAlign: l} = e,
        c = n + o,
        {topLeft: h, topRight: d, bottomLeft: u, bottomRight: f} = Ot(a),
        p = Vl(t, r),
        g = Wl(t, l, c);
    return l === "center" ? r === "left" ? p += c : r === "right" && (p -= c) : r === "left" ? p -= Math.max(h, u) + n : r === "right" && (p += Math.max(d, f) + n), {
        x: G(p, 0, s.width - t.width),
        y: G(g, 0, s.height - t.height)
    }
}
function Ye(i, t, e) {
    let s = H(e.padding);
    return t === "center" ? i.x + i.width / 2 : t === "right" ? i.x + i.width - s.right : i.x + s.left
}
function Wn(i) {
    return st([], dt(i))
}
function Nl(i, t, e) {
    return ct(i, {
        tooltip: t,
        tooltipItems: e,
        type: "tooltip"
    })
}
function Nn(i, t) {
    let e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
    return e ? i.override(e) : i
}
var po = {
    beforeTitle: it,
    title(i) {
        if (i.length > 0) {
            let t = i[0],
                e = t.chart.data.labels,
                s = e ? e.length : 0;
            if (this && this.options && this.options.mode === "dataset")
                return t.dataset.label || "";
            if (t.label)
                return t.label;
            if (s > 0 && t.dataIndex < s)
                return e[t.dataIndex]
        }
        return ""
    },
    afterTitle: it,
    beforeBody: it,
    beforeLabel: it,
    label(i) {
        if (this && this.options && this.options.mode === "dataset")
            return i.label + ": " + i.formattedValue || i.formattedValue;
        let t = i.dataset.label || "";
        t && (t += ": ");
        let e = i.formattedValue;
        return A(e) || (t += e), t
    },
    labelColor(i) {
        let e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
            borderColor: e.borderColor,
            backgroundColor: e.backgroundColor,
            borderWidth: e.borderWidth,
            borderDash: e.borderDash,
            borderDashOffset: e.borderDashOffset,
            borderRadius: 0
        }
    },
    labelTextColor() {
        return this.options.bodyColor
    },
    labelPointStyle(i) {
        let e = i.chart.getDatasetMeta(i.datasetIndex).controller.getStyle(i.dataIndex);
        return {
            pointStyle: e.pointStyle,
            rotation: e.rotation
        }
    },
    afterLabel: it,
    afterBody: it,
    beforeFooter: it,
    footer: it,
    afterFooter: it
};
function K(i, t, e, s) {
    let n = i[t].call(e, s);
    return typeof n > "u" ? po[t].call(e, s) : n
}
var ii = class  extends ut{
        static positioners = ue;
        constructor(t)
        {
            super(),
            this.opacity = 0,
            this._active = [],
            this._eventPosition = void 0,
            this._size = void 0,
            this._cachedAnimations = void 0,
            this._tooltipItems = [],
            this.$animations = void 0,
            this.$context = void 0,
            this.chart = t.chart,
            this.options = t.options,
            this.dataPoints = void 0,
            this.title = void 0,
            this.beforeBody = void 0,
            this.body = void 0,
            this.afterBody = void 0,
            this.footer = void 0,
            this.xAlign = void 0,
            this.yAlign = void 0,
            this.x = void 0,
            this.y = void 0,
            this.height = void 0,
            this.width = void 0,
            this.caretX = void 0,
            this.caretY = void 0,
            this.labelColors = void 0,
            this.labelPointStyles = void 0,
            this.labelTextColors = void 0
        }
        initialize(t)
        {
            this.options = t,
            this._cachedAnimations = void 0,
            this.$context = void 0
        }
        _resolveAnimations()
        {
            let t = this._cachedAnimations;
            if (t)
                return t;
            let e = this.chart,
                s = this.options.setContext(this.getContext()),
                n = s.enabled && e.options.animation && s.animations,
                o = new qe(this.chart, n);
            return n._cacheable && (this._cachedAnimations = Object.freeze(o)), o
        }
        getContext()
        {
            return this.$context || (this.$context = Nl(this.chart.getContext(), this, this._tooltipItems))
        }
        getTitle(t, e)
        {
            let {callbacks: s} = e,
                n = K(s, "beforeTitle", this, t),
                o = K(s, "title", this, t),
                a = K(s, "afterTitle", this, t),
                r = [];
            return r = st(r, dt(n)), r = st(r, dt(o)), r = st(r, dt(a)), r
        }
        getBeforeBody(t, e)
        {
            return Wn(K(e.callbacks, "beforeBody", this, t))
        }
        getBody(t, e)
        {
            let {callbacks: s} = e,
                n = [];
            return L(t, o => {
                let a = {
                        before: [],
                        lines: [],
                        after: []
                    },
                    r = Nn(s, o);
                st(a.before, dt(K(r, "beforeLabel", this, o))),
                st(a.lines, K(r, "label", this, o)),
                st(a.after, dt(K(r, "afterLabel", this, o))),
                n.push(a)
            }), n
        }
        getAfterBody(t, e)
        {
            return Wn(K(e.callbacks, "afterBody", this, t))
        }
        getFooter(t, e)
        {
            let {callbacks: s} = e,
                n = K(s, "beforeFooter", this, t),
                o = K(s, "footer", this, t),
                a = K(s, "afterFooter", this, t),
                r = [];
            return r = st(r, dt(n)), r = st(r, dt(o)), r = st(r, dt(a)), r
        }
        _createItems(t)
        {
            let e = this._active,
                s = this.chart.data,
                n = [],
                o = [],
                a = [],
                r = [],
                l,
                c;
            for (l = 0, c = e.length; l < c; ++l)
                r.push(Fl(this.chart, e[l]));
            return t.filter && (r = r.filter((h, d, u) => t.filter(h, d, u, s))), t.itemSort && (r = r.sort((h, d) => t.itemSort(h, d, s))), L(r, h => {
                let d = Nn(t.callbacks, h);
                n.push(K(d, "labelColor", this, h)),
                o.push(K(d, "labelPointStyle", this, h)),
                a.push(K(d, "labelTextColor", this, h))
            }), this.labelColors = n, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r
        }
        update(t, e)
        {
            let s = this.options.setContext(this.getContext()),
                n = this._active,
                o,
                a = [];
            if (!n.length)
                this.opacity !== 0 && (o = {
                    opacity: 0
                });
            else {
                let r = ue[s.position].call(this, n, this._eventPosition);
                a = this._createItems(s),
                this.title = this.getTitle(a, s),
                this.beforeBody = this.getBeforeBody(a, s),
                this.body = this.getBody(a, s),
                this.afterBody = this.getAfterBody(a, s),
                this.footer = this.getFooter(a, s);
                let l = this._size = zn(this, s),
                    c = Object.assign({}, r, l),
                    h = Bn(this.chart, s, c),
                    d = Vn(s, c, h, this.chart);
                this.xAlign = h.xAlign,
                this.yAlign = h.yAlign,
                o = {
                    opacity: 1,
                    x: d.x,
                    y: d.y,
                    width: l.width,
                    height: l.height,
                    caretX: r.x,
                    caretY: r.y
                }
            }
            this._tooltipItems = a,
            this.$context = void 0,
            o && this._resolveAnimations().update(this, o),
            t && s.external && s.external.call(this, {
                chart: this.chart,
                tooltip: this,
                replay: e
            })
        }
        drawCaret(t, e, s, n)
        {
            let o = this.getCaretPosition(t, s, n);
            e.lineTo(o.x1, o.y1),
            e.lineTo(o.x2, o.y2),
            e.lineTo(o.x3, o.y3)
        }
        getCaretPosition(t, e, s)
        {
            let {xAlign: n, yAlign: o} = this,
                {caretSize: a, cornerRadius: r} = s,
                {topLeft: l, topRight: c, bottomLeft: h, bottomRight: d} = Ot(r),
                {x: u, y: f} = t,
                {width: p, height: g} = e,
                m,
                b,
                _,
                S,
                y,
                x;
            return o === "center" ? (y = f + g / 2, n === "left" ? (m = u, b = m - a, S = y + a, x = y - a) : (m = u + p, b = m + a, S = y - a, x = y + a), _ = m) : (n === "left" ? b = u + Math.max(l, h) + a : n === "right" ? b = u + p - Math.max(c, d) - a : b = this.caretX, o === "top" ? (S = f, y = S - a, m = b - a, _ = b + a) : (S = f + g, y = S + a, m = b + a, _ = b - a), x = S), {
                x1: m,
                x2: b,
                x3: _,
                y1: S,
                y2: y,
                y3: x
            }
        }
        drawTitle(t, e, s)
        {
            let n = this.title,
                o = n.length,
                a,
                r,
                l;
            if (o) {
                let c = At(s.rtl, this.x, this.width);
                for (t.x = Ye(this, s.titleAlign, s), e.textAlign = c.textAlign(s.titleAlign), e.textBaseline = "middle", a = V(s.titleFont), r = s.titleSpacing, e.fillStyle = s.titleColor, e.font = a.string, l = 0; l < o; ++l)
                    e.fillText(n[l], c.x(t.x), t.y + a.lineHeight / 2),
                    t.y += a.lineHeight + r,
                    l + 1 === o && (t.y += s.titleMarginBottom - r)
            }
        }
        _drawColorBox(t, e, s, n, o)
        {
            let a = this.labelColors[s],
                r = this.labelPointStyles[s],
                {boxHeight: l, boxWidth: c} = o,
                h = V(o.bodyFont),
                d = Ye(this, "left", o),
                u = n.x(d),
                f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0,
                p = e.y + f;
            if (o.usePointStyle) {
                let g = {
                        radius: Math.min(c, l) / 2,
                        pointStyle: r.pointStyle,
                        rotation: r.rotation,
                        borderWidth: 1
                    },
                    m = n.leftForLtr(u, c) + c / 2,
                    b = p + l / 2;
                t.strokeStyle = o.multiKeyBackground,
                t.fillStyle = o.multiKeyBackground,
                Ie(t, g, m, b),
                t.strokeStyle = a.borderColor,
                t.fillStyle = a.backgroundColor,
                Ie(t, g, m, b)
            } else {
                t.lineWidth = C(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1,
                t.strokeStyle = a.borderColor,
                t.setLineDash(a.borderDash || []),
                t.lineDashOffset = a.borderDashOffset || 0;
                let g = n.leftForLtr(u, c),
                    m = n.leftForLtr(n.xPlus(u, 1), c - 2),
                    b = Ot(a.borderRadius);
                Object.values(b).some(_ => _ !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, ne(t, {
                    x: g,
                    y: p,
                    w: c,
                    h: l,
                    radius: b
                }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), ne(t, {
                    x: m,
                    y: p + 1,
                    w: c - 2,
                    h: l - 2,
                    radius: b
                }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, c, l), t.strokeRect(g, p, c, l), t.fillStyle = a.backgroundColor, t.fillRect(m, p + 1, c - 2, l - 2))
            }
            t.fillStyle = this.labelTextColors[s]
        }
        drawBody(t, e, s)
        {
            let {body: n} = this,
                {bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: h} = s,
                d = V(s.bodyFont),
                u = d.lineHeight,
                f = 0,
                p = At(s.rtl, this.x, this.width),
                g = function(M) {
                    e.fillText(M, p.x(t.x + f), t.y + u / 2),
                    t.y += u + o
                },
                m = p.textAlign(a),
                b,
                _,
                S,
                y,
                x,
                k,
                v;
            for (e.textAlign = a, e.textBaseline = "middle", e.font = d.string, t.x = Ye(this, m, s), e.fillStyle = s.bodyColor, L(this.beforeBody, g), f = r && m !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, y = 0, k = n.length; y < k; ++y) {
                for (b = n[y], _ = this.labelTextColors[y], e.fillStyle = _, L(b.before, g), S = b.lines, r && S.length && (this._drawColorBox(e, t, y, p, s), u = Math.max(d.lineHeight, l)), x = 0, v = S.length; x < v; ++x)
                    g(S[x]),
                    u = d.lineHeight;
                L(b.after, g)
            }
            f = 0,
            u = d.lineHeight,
            L(this.afterBody, g),
            t.y -= o
        }
        drawFooter(t, e, s)
        {
            let n = this.footer,
                o = n.length,
                a,
                r;
            if (o) {
                let l = At(s.rtl, this.x, this.width);
                for (t.x = Ye(this, s.footerAlign, s), t.y += s.footerMarginTop, e.textAlign = l.textAlign(s.footerAlign), e.textBaseline = "middle", a = V(s.footerFont), e.fillStyle = s.footerColor, e.font = a.string, r = 0; r < o; ++r)
                    e.fillText(n[r], l.x(t.x), t.y + a.lineHeight / 2),
                    t.y += a.lineHeight + s.footerSpacing
            }
        }
        drawBackground(t, e, s, n)
        {
            let {xAlign: o, yAlign: a} = this,
                {x: r, y: l} = t,
                {width: c, height: h} = s,
                {topLeft: d, topRight: u, bottomLeft: f, bottomRight: p} = Ot(n.cornerRadius);
            e.fillStyle = n.backgroundColor,
            e.strokeStyle = n.borderColor,
            e.lineWidth = n.borderWidth,
            e.beginPath(),
            e.moveTo(r + d, l),
            a === "top" && this.drawCaret(t, e, s, n),
            e.lineTo(r + c - u, l),
            e.quadraticCurveTo(r + c, l, r + c, l + u),
            a === "center" && o === "right" && this.drawCaret(t, e, s, n),
            e.lineTo(r + c, l + h - p),
            e.quadraticCurveTo(r + c, l + h, r + c - p, l + h),
            a === "bottom" && this.drawCaret(t, e, s, n),
            e.lineTo(r + f, l + h),
            e.quadraticCurveTo(r, l + h, r, l + h - f),
            a === "center" && o === "left" && this.drawCaret(t, e, s, n),
            e.lineTo(r, l + d),
            e.quadraticCurveTo(r, l, r + d, l),
            e.closePath(),
            e.fill(),
            n.borderWidth > 0 && e.stroke()
        }
        _updateAnimationTarget(t)
        {
            let e = this.chart,
                s = this.$animations,
                n = s && s.x,
                o = s && s.y;
            if (n || o) {
                let a = ue[t.position].call(this, this._active, this._eventPosition);
                if (!a)
                    return;
                let r = this._size = zn(this, t),
                    l = Object.assign({}, a, this._size),
                    c = Bn(e, t, l),
                    h = Vn(t, l, c, e);
                (n._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h))
            }
        }
        _willRender()
        {
            return !!this.opacity
        }
        draw(t)
        {
            let e = this.options.setContext(this.getContext()),
                s = this.opacity;
            if (!s)
                return;
            this._updateAnimationTarget(e);
            let n = {
                    width: this.width,
                    height: this.height
                },
                o = {
                    x: this.x,
                    y: this.y
                };
            s = Math.abs(s) < .001 ? 0 : s;
            let a = H(e.padding),
                r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
            e.enabled && r && (t.save(), t.globalAlpha = s, this.drawBackground(o, t, n, e), Ri(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), Ei(t, e.textDirection), t.restore())
        }
        getActiveElements()
        {
            return this._active || []
        }
        setActiveElements(t, e)
        {
            let s = this._active,
                n = t.map(({datasetIndex: r, index: l}) => {
                    let c = this.chart.getDatasetMeta(r);
                    if (!c)
                        throw new Error("Cannot find a dataset at index " + r);
                    return {
                        datasetIndex: r,
                        element: c.data[l],
                        index: l
                    }
                }),
                o = !Jt(s, n),
                a = this._positionChanged(n, e);
            (o || a) && (this._active = n, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0))
        }
        handleEvent(t, e, s=!0)
        {
            if (e && this._ignoreReplayEvents)
                return !1;
            this._ignoreReplayEvents = !1;
            let n = this.options,
                o = this._active || [],
                a = this._getActiveElements(t, o, e, s),
                r = this._positionChanged(a, t),
                l = e || !Jt(a, o) || r;
            return l && (this._active = a, (n.enabled || n.external) && (this._eventPosition = {
                x: t.x,
                y: t.y
            }, this.update(!0, e))), l
        }
        _getActiveElements(t, e, s, n)
        {
            let o = this.options;
            if (t.type === "mouseout")
                return [];
            if (!n)
                return e.filter(r => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
            let a = this.chart.getElementsAtEventForMode(t, o.mode, o, s);
            return o.reverse && a.reverse(), a
        }
        _positionChanged(t, e)
        {
            let {caretX: s, caretY: n, options: o} = this,
                a = ue[o.position].call(this, t, e);
            return a !== !1 && (s !== a.x || n !== a.y)
        }
    }
    ,
    Hl = {
        id: "tooltip",
        _element: ii,
        positioners: ue,
        afterInit(i, t, e) {
            e && (i.tooltip = new ii({
                chart: i,
                options: e
            }))
        },
        beforeUpdate(i, t, e) {
            i.tooltip && i.tooltip.initialize(e)
        },
        reset(i, t, e) {
            i.tooltip && i.tooltip.initialize(e)
        },
        afterDraw(i) {
            let t = i.tooltip;
            if (t && t._willRender()) {
                let e = {
                    tooltip: t
                };
                if (i.notifyPlugins("beforeTooltipDraw", {
                    ...e,
                    cancelable: !0
                }) === !1)
                    return;
                t.draw(i.ctx),
                i.notifyPlugins("afterTooltipDraw", e)
            }
        },
        afterEvent(i, t) {
            if (i.tooltip) {
                let e = t.replay;
                i.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0)
            }
        },
        defaults: {
            enabled: !0,
            external: null,
            position: "average",
            backgroundColor: "rgba(0,0,0,0.8)",
            titleColor: "#fff",
            titleFont: {
                weight: "bold"
            },
            titleSpacing: 2,
            titleMarginBottom: 6,
            titleAlign: "left",
            bodyColor: "#fff",
            bodySpacing: 2,
            bodyFont: {},
            bodyAlign: "left",
            footerColor: "#fff",
            footerSpacing: 2,
            footerMarginTop: 6,
            footerFont: {
                weight: "bold"
            },
            footerAlign: "left",
            padding: 6,
            caretPadding: 2,
            caretSize: 5,
            cornerRadius: 6,
            boxHeight: (i, t) => t.bodyFont.size,
            boxWidth: (i, t) => t.bodyFont.size,
            multiKeyBackground: "#fff",
            displayColors: !0,
            boxPadding: 0,
            borderColor: "rgba(0,0,0,0)",
            borderWidth: 0,
            animation: {
                duration: 400,
                easing: "easeOutQuart"
            },
            animations: {
                numbers: {
                    type: "number",
                    properties: ["x", "y", "width", "height", "caretX", "caretY"]
                },
                opacity: {
                    easing: "linear",
                    duration: 200
                }
            },
            callbacks: po
        },
        defaultRoutes: {
            bodyFont: "font",
            footerFont: "font",
            titleFont: "font"
        },
        descriptors: {
            _scriptable: i => i !== "filter" && i !== "itemSort" && i !== "external",
            _indexable: !1,
            callbacks: {
                _scriptable: !1,
                _indexable: !1
            },
            animation: {
                _fallback: !1
            },
            animations: {
                _fallback: "animation"
            }
        },
        additionalOptionScopes: ["interaction"]
    };
var jl = (i, t, e, s) => (typeof t == "string" ? (e = i.push(t) - 1, s.unshift({
    index: e,
    label: t
})) : isNaN(t) && (e = null), e);
function $l(i, t, e, s) {
    let n = i.indexOf(t);
    if (n === -1)
        return jl(i, t, e, s);
    let o = i.lastIndexOf(t);
    return n !== o ? e : n
}
var Yl = (i, t) => i === null ? null : G(Math.round(i), 0, t);
function Hn(i) {
    let t = this.getLabels();
    return i >= 0 && i < t.length ? t[i] : i
}
var os = class  extends Rt{
    static id = "category";
    static defaults = {
        ticks: {
            callback: Hn
        }
    };
    constructor(t)
    {
        super(t),
        this._startValue = void 0,
        this._valueRange = 0,
        this._addedLabels = []
    }
    init(t)
    {
        let e = this._addedLabels;
        if (e.length) {
            let s = this.getLabels();
            for (let {index: n, label: o} of e)
                s[n] === o && s.splice(n, 1);
            this._addedLabels = []
        }
        super.init(t)
    }
    parse(t, e)
    {
        if (A(t))
            return null;
        let s = this.getLabels();
        return e = isFinite(e) && s[e] === t ? e : $l(s, t, P(e, t), this._addedLabels), Yl(e, s.length - 1)
    }
    determineDataLimits()
    {
        let {minDefined: t, maxDefined: e} = this.getUserBounds(),
            {min: s, max: n} = this.getMinMax(!0);
        this.options.bounds === "ticks" && (t || (s = 0), e || (n = this.getLabels().length - 1)),
        this.min = s,
        this.max = n
    }
    buildTicks()
    {
        let t = this.min,
            e = this.max,
            s = this.options.offset,
            n = [],
            o = this.getLabels();
        o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1),
        this._valueRange = Math.max(o.length - (s ? 0 : 1), 1),
        this._startValue = this.min - (s ? .5 : 0);
        for (let a = t; a <= e; a++)
            n.push({
                value: a
            });
        return n
    }
    getLabelForValue(t)
    {
        return Hn.call(this, t)
    }
    configure()
    {
        super.configure(),
        this.isHorizontal() || (this._reversePixels = !this._reversePixels)
    }
    getPixelForValue(t)
    {
        return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    }
    getPixelForTick(t)
    {
        let e = this.ticks;
        return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value)
    }
    getValueForPixel(t)
    {
        return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange)
    }
    getBasePixel()
    {
        return this.bottom
    }
}
;
function Ul(i, t) {
    let e = [],
        {bounds: n, step: o, min: a, max: r, precision: l, count: c, maxTicks: h, maxDigits: d, includeBounds: u} = i,
        f = o || 1,
        p = h - 1,
        {min: g, max: m} = t,
        b = !A(a),
        _ = !A(r),
        S = !A(c),
        y = (m - g) / (d + 1),
        x = gi((m - g) / p / f) * f,
        k,
        v,
        M,
        w;
    if (x < 1e-14 && !b && !_)
        return [{
            value: g
        }, {
            value: m
        }];
    w = Math.ceil(m / x) - Math.floor(g / x),
    w > p && (x = gi(w * x / p / f) * f),
    A(l) || (k = Math.pow(10, l), x = Math.ceil(x * k) / k),
    n === "ticks" ? (v = Math.floor(g / x) * x, M = Math.ceil(m / x) * x) : (v = g, M = m),
    b && _ && o && Ts((r - a) / o, x / 1e3) ? (w = Math.round(Math.min((r - a) / x, h)), x = (r - a) / w, v = a, M = r) : S ? (v = b ? a : v, M = _ ? r : M, w = c - 1, x = (M - v) / w) : (w = (M - v) / x, Nt(w, Math.round(w), x / 1e3) ? w = Math.round(w) : w = Math.ceil(w));
    let O = Math.max(mi(x), mi(v));
    k = Math.pow(10, A(l) ? O : l),
    v = Math.round(v * k) / k,
    M = Math.round(M * k) / k;
    let D = 0;
    for (b && (u && v !== a ? (e.push({
        value: a
    }), v < a && D++, Nt(Math.round((v + D * x) * k) / k, a, jn(a, y, i)) && D++) : v < a && D++); D < w; ++D) {
        let T = Math.round((v + D * x) * k) / k;
        if (_ && T > r)
            break;
        e.push({
            value: T
        })
    }
    return _ && u && M !== r ? e.length && Nt(e[e.length - 1].value, r, jn(r, y, i)) ? e[e.length - 1].value = r : e.push({
        value: r
    }) : (!_ || M === r) && e.push({
        value: M
    }), e
}
function jn(i, t, {horizontal: e, minRotation: s}) {
    let n = lt(s),
        o = (e ? Math.sin(n) : Math.cos(n)) || .001,
        a = .75 * t * ("" + i).length;
    return Math.min(t / o, a)
}
var $t = class  extends Rt{
        constructor(t)
        {
            super(t),
            this.start = void 0,
            this.end = void 0,
            this._startValue = void 0,
            this._endValue = void 0,
            this._valueRange = 0
        }
        parse(t, e)
        {
            return A(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t
        }
        handleTickRangeOptions()
        {
            let {beginAtZero: t} = this.options,
                {minDefined: e, maxDefined: s} = this.getUserBounds(),
                {min: n, max: o} = this,
                a = l => n = e ? n : l,
                r = l => o = s ? o : l;
            if (t) {
                let l = wt(n),
                    c = wt(o);
                l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0)
            }
            if (n === o) {
                let l = o === 0 ? 1 : Math.abs(o * .05);
                r(o + l),
                t || a(n - l)
            }
            this.min = n,
            this.max = o
        }
        getTickLimit()
        {
            let t = this.options.ticks,
                {maxTicksLimit: e, stepSize: s} = t,
                n;
            return s ? (n = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1, n > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${n} ticks. Limiting to 1000.`), n = 1e3)) : (n = this.computeTickLimit(), e = e || 11), e && (n = Math.min(e, n)), n
        }
        computeTickLimit()
        {
            return Number.POSITIVE_INFINITY
        }
        buildTicks()
        {
            let t = this.options,
                e = t.ticks,
                s = this.getTickLimit();
            s = Math.max(2, s);
            let n = {
                    maxTicks: s,
                    bounds: t.bounds,
                    min: t.min,
                    max: t.max,
                    precision: e.precision,
                    step: e.stepSize,
                    count: e.count,
                    maxDigits: this._maxDigits(),
                    horizontal: this.isHorizontal(),
                    minRotation: e.minRotation || 0,
                    includeBounds: e.includeBounds !== !1
                },
                o = this._range || this,
                a = Ul(n, o);
            return t.bounds === "ticks" && pi(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a
        }
        configure()
        {
            let t = this.ticks,
                e = this.min,
                s = this.max;
            if (super.configure(), this.options.offset && t.length) {
                let n = (s - e) / Math.max(t.length - 1, 1) / 2;
                e -= n,
                s += n
            }
            this._startValue = e,
            this._endValue = s,
            this._valueRange = s - e
        }
        getLabelForValue(t)
        {
            return Ee(t, this.chart.options.locale, this.options.ticks.format)
        }
    }
    ,
    as = class  extends $t{
        static id = "linear";
        static defaults = {
            ticks: {
                callback: ee.formatters.numeric
            }
        };
        determineDataLimits()
        {
            let {min: t, max: e} = this.getMinMax(!0);
            this.min = F(t) ? t : 0,
            this.max = F(e) ? e : 1,
            this.handleTickRangeOptions()
        }
        computeTickLimit()
        {
            let t = this.isHorizontal(),
                e = t ? this.width : this.height,
                s = lt(this.options.ticks.minRotation),
                n = (t ? Math.sin(s) : Math.cos(s)) || .001,
                o = this._resolveTickFontOptions(0);
            return Math.ceil(e / Math.min(40, o.lineHeight / n))
        }
        getPixelForValue(t)
        {
            return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
        }
        getValueForPixel(t)
        {
            return this._startValue + this.getDecimalForPixel(t) * this._valueRange
        }
    }
    ,
    pe = i => Math.floor(rt(i)),
    Lt = (i, t) => Math.pow(10, pe(i) + t);
function $n(i) {
    return i / Math.pow(10, pe(i)) === 1
}
function Yn(i, t, e) {
    let s = Math.pow(10, e),
        n = Math.floor(i / s);
    return Math.ceil(t / s) - n
}
function Xl(i, t) {
    let e = t - i,
        s = pe(e);
    for (; Yn(i, t, s) > 10;)
        s++;
    for (; Yn(i, t, s) < 10;)
        s--;
    return Math.min(s, pe(i))
}
function Kl(i, {min: t, max: e}) {
    t = X(i.min, t);
    let s = [],
        n = pe(t),
        o = Xl(t, e),
        a = o < 0 ? Math.pow(10, Math.abs(o)) : 1,
        r = Math.pow(10, o),
        l = n > o ? Math.pow(10, n) : 0,
        c = Math.round((t - l) * a) / a,
        h = Math.floor((t - l) / r / 10) * r * 10,
        d = Math.floor((c - h) / Math.pow(10, o)),
        u = X(i.min, Math.round((l + h + d * Math.pow(10, o)) * a) / a);
    for (; u < e;)
        s.push({
            value: u,
            major: $n(u),
            significand: d
        }),
        d >= 10 ? d = d < 15 ? 15 : 20 : d++,
        d >= 20 && (o++, d = 2, a = o >= 0 ? 1 : a),
        u = Math.round((l + h + d * Math.pow(10, o)) * a) / a;
    let f = X(i.max, u);
    return s.push({
        value: f,
        major: $n(f),
        significand: d
    }), s
}
var Un = class  extends Rt{
    static id = "logarithmic";
    static defaults = {
        ticks: {
            callback: ee.formatters.logarithmic,
            major: {
                enabled: !0
            }
        }
    };
    constructor(t)
    {
        super(t),
        this.start = void 0,
        this.end = void 0,
        this._startValue = void 0,
        this._valueRange = 0
    }
    parse(t, e)
    {
        let s = $t.prototype.parse.apply(this, [t, e]);
        if (s === 0) {
            this._zero = !0;
            return
        }
        return F(s) && s > 0 ? s : null
    }
    determineDataLimits()
    {
        let {min: t, max: e} = this.getMinMax(!0);
        this.min = F(t) ? Math.max(0, t) : null,
        this.max = F(e) ? Math.max(0, e) : null,
        this.options.beginAtZero && (this._zero = !0),
        this._zero && this.min !== this._suggestedMin && !F(this._userMin) && (this.min = t === Lt(this.min, 0) ? Lt(this.min, -1) : Lt(this.min, 0)),
        this.handleTickRangeOptions()
    }
    handleTickRangeOptions()
    {
        let {minDefined: t, maxDefined: e} = this.getUserBounds(),
            s = this.min,
            n = this.max,
            o = r => s = t ? s : r,
            a = r => n = e ? n : r;
        s === n && (s <= 0 ? (o(1), a(10)) : (o(Lt(s, -1)), a(Lt(n, 1)))),
        s <= 0 && o(Lt(n, -1)),
        n <= 0 && a(Lt(s, 1)),
        this.min = s,
        this.max = n
    }
    buildTicks()
    {
        let t = this.options,
            e = {
                min: this._userMin,
                max: this._userMax
            },
            s = Kl(e, this);
        return t.bounds === "ticks" && pi(s, this, "value"), t.reverse ? (s.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), s
    }
    getLabelForValue(t)
    {
        return t === void 0 ? "0" : Ee(t, this.chart.options.locale, this.options.ticks.format)
    }
    configure()
    {
        let t = this.min;
        super.configure(),
        this._startValue = rt(t),
        this._valueRange = rt(this.max) - rt(t)
    }
    getPixelForValue(t)
    {
        return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (rt(t) - this._startValue) / this._valueRange)
    }
    getValueForPixel(t)
    {
        let e = this.getDecimalForPixel(t);
        return Math.pow(10, this._startValue + e * this._valueRange)
    }
}
;
function rs(i) {
    let t = i.ticks;
    if (t.display && i.display) {
        let e = H(t.backdropPadding);
        return P(t.font && t.font.size, I.font.size) + e.height
    }
    return 0
}
function ql(i, t, e) {
    return e = E(e) ? e : [e], {
        w: Hs(i, t.string, e),
        h: e.length * t.lineHeight
    }
}
function Xn(i, t, e, s, n) {
    return i === s || i === n ? {
        start: t - e / 2,
        end: t + e / 2
    } : i < s || i > n ? {
        start: t - e,
        end: t
    } : {
        start: t,
        end: t + e
    }
}
function Gl(i) {
    let t = {
            l: i.left + i._padding.left,
            r: i.right - i._padding.right,
            t: i.top + i._padding.top,
            b: i.bottom - i._padding.bottom
        },
        e = Object.assign({}, t),
        s = [],
        n = [],
        o = i._pointLabels.length,
        a = i.options.pointLabels,
        r = a.centerPointLabels ? B / o : 0;
    for (let l = 0; l < o; l++) {
        let c = a.setContext(i.getPointLabelContext(l));
        n[l] = c.padding;
        let h = i.getPointPosition(l, i.drawingArea + n[l], r),
            d = V(c.font),
            u = ql(i.ctx, d, i._pointLabels[l]);
        s[l] = u;
        let f = $(i.getIndexAngle(l) + r),
            p = Math.round(Te(f)),
            g = Xn(p, h.x, u.w, 0, 180),
            m = Xn(p, h.y, u.h, 90, 270);
        Zl(e, t, f, g, m)
    }
    i.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b),
    i._pointLabelItems = tc(i, s, n)
}
function Zl(i, t, e, s, n) {
    let o = Math.abs(Math.sin(e)),
        a = Math.abs(Math.cos(e)),
        r = 0,
        l = 0;
    s.start < t.l ? (r = (t.l - s.start) / o, i.l = Math.min(i.l, t.l - r)) : s.end > t.r && (r = (s.end - t.r) / o, i.r = Math.max(i.r, t.r + r)),
    n.start < t.t ? (l = (t.t - n.start) / a, i.t = Math.min(i.t, t.t - l)) : n.end > t.b && (l = (n.end - t.b) / a, i.b = Math.max(i.b, t.b + l))
}
function Jl(i, t, e) {
    let s = i.drawingArea,
        {extra: n, additionalAngle: o, padding: a, size: r} = e,
        l = i.getPointPosition(t, s + n + a, o),
        c = Math.round(Te($(l.angle + Y))),
        h = sc(l.y, r.h, c),
        d = ec(c),
        u = ic(l.x, r.w, d);
    return {
        visible: !0,
        x: l.x,
        y: h,
        textAlign: d,
        left: u,
        top: h,
        right: u + r.w,
        bottom: h + r.h
    }
}
function Ql(i, t) {
    if (!t)
        return !0;
    let {left: e, top: s, right: n, bottom: o} = i;
    return !(et({
        x: e,
        y: s
    }, t) || et({
        x: e,
        y: o
    }, t) || et({
        x: n,
        y: s
    }, t) || et({
        x: n,
        y: o
    }, t))
}
function tc(i, t, e) {
    let s = [],
        n = i._pointLabels.length,
        o = i.options,
        {centerPointLabels: a, display: r} = o.pointLabels,
        l = {
            extra: rs(o) / 2,
            additionalAngle: a ? B / n : 0
        },
        c;
    for (let h = 0; h < n; h++) {
        l.padding = e[h],
        l.size = t[h];
        let d = Jl(i, h, l);
        s.push(d),
        r === "auto" && (d.visible = Ql(d, c), d.visible && (c = d))
    }
    return s
}
function ec(i) {
    return i === 0 || i === 180 ? "center" : i < 180 ? "left" : "right"
}
function ic(i, t, e) {
    return e === "right" ? i -= t : e === "center" && (i -= t / 2), i
}
function sc(i, t, e) {
    return e === 90 || e === 270 ? i -= t / 2 : (e > 270 || e < 90) && (i -= t), i
}
function nc(i, t, e) {
    let {left: s, top: n, right: o, bottom: a} = e,
        {backdropColor: r} = t;
    if (!A(r)) {
        let l = Ot(t.borderRadius),
            c = H(t.backdropPadding);
        i.fillStyle = r;
        let h = s - c.left,
            d = n - c.top,
            u = o - s + c.width,
            f = a - n + c.height;
        Object.values(l).some(p => p !== 0) ? (i.beginPath(), ne(i, {
            x: h,
            y: d,
            w: u,
            h: f,
            radius: l
        }), i.fill()) : i.fillRect(h, d, u, f)
    }
}
function oc(i, t) {
    let {ctx: e, options: {pointLabels: s}} = i;
    for (let n = t - 1; n >= 0; n--) {
        let o = i._pointLabelItems[n];
        if (!o.visible)
            continue;
        let a = s.setContext(i.getPointLabelContext(n));
        nc(e, a, o);
        let r = V(a.font),
            {x: l, y: c, textAlign: h} = o;
        _t(e, i._pointLabels[n], l, c + r.lineHeight / 2, r, {
            color: a.color,
            textAlign: h,
            textBaseline: "middle"
        })
    }
}
function mo(i, t, e, s) {
    let {ctx: n} = i;
    if (e)
        n.arc(i.xCenter, i.yCenter, t, 0, U);
    else {
        let o = i.getPointPosition(0, t);
        n.moveTo(o.x, o.y);
        for (let a = 1; a < s; a++)
            o = i.getPointPosition(a, t),
            n.lineTo(o.x, o.y)
    }
}
function ac(i, t, e, s, n) {
    let o = i.ctx,
        a = t.circular,
        {color: r, lineWidth: l} = t;
    !a && !s || !r || !l || e < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(n.dash || []), o.lineDashOffset = n.dashOffset, o.beginPath(), mo(i, e, a, s), o.closePath(), o.stroke(), o.restore())
}
function rc(i, t, e) {
    return ct(i, {
        label: e,
        index: t,
        type: "pointLabel"
    })
}
var Kn = class  extends $t{
        static id = "radialLinear";
        static defaults = {
            display: !0,
            animate: !0,
            position: "chartArea",
            angleLines: {
                display: !0,
                lineWidth: 1,
                borderDash: [],
                borderDashOffset: 0
            },
            grid: {
                circular: !1
            },
            startAngle: 0,
            ticks: {
                showLabelBackdrop: !0,
                callback: ee.formatters.numeric
            },
            pointLabels: {
                backdropColor: void 0,
                backdropPadding: 2,
                display: !0,
                font: {
                    size: 10
                },
                callback(t) {
                    return t
                },
                padding: 5,
                centerPointLabels: !1
            }
        };
        static defaultRoutes = {
            "angleLines.color": "borderColor",
            "pointLabels.color": "color",
            "ticks.color": "color"
        };
        static descriptors = {
            angleLines: {
                _fallback: "grid"
            }
        };
        constructor(t)
        {
            super(t),
            this.xCenter = void 0,
            this.yCenter = void 0,
            this.drawingArea = void 0,
            this._pointLabels = [],
            this._pointLabelItems = []
        }
        setDimensions()
        {
            let t = this._padding = H(rs(this.options) / 2),
                e = this.width = this.maxWidth - t.width,
                s = this.height = this.maxHeight - t.height;
            this.xCenter = Math.floor(this.left + e / 2 + t.left),
            this.yCenter = Math.floor(this.top + s / 2 + t.top),
            this.drawingArea = Math.floor(Math.min(e, s) / 2)
        }
        determineDataLimits()
        {
            let {min: t, max: e} = this.getMinMax(!1);
            this.min = F(t) && !isNaN(t) ? t : 0,
            this.max = F(e) && !isNaN(e) ? e : 0,
            this.handleTickRangeOptions()
        }
        computeTickLimit()
        {
            return Math.ceil(this.drawingArea / rs(this.options))
        }
        generateTickLabels(t)
        {
            $t.prototype.generateTickLabels.call(this, t),
            this._pointLabels = this.getLabels().map((e, s) => {
                let n = R(this.options.pointLabels.callback, [e, s], this);
                return n || n === 0 ? n : ""
            }).filter((e, s) => this.chart.getDataVisibility(s))
        }
        fit()
        {
            let t = this.options;
            t.display && t.pointLabels.display ? Gl(this) : this.setCenterPoint(0, 0, 0, 0)
        }
        setCenterPoint(t, e, s, n)
        {
            this.xCenter += Math.floor((t - e) / 2),
            this.yCenter += Math.floor((s - n) / 2),
            this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, s, n))
        }
        getIndexAngle(t)
        {
            let e = U / (this._pointLabels.length || 1),
                s = this.options.startAngle || 0;
            return $(t * e + lt(s))
        }
        getDistanceFromCenterForValue(t)
        {
            if (A(t))
                return NaN;
            let e = this.drawingArea / (this.max - this.min);
            return this.options.reverse ? (this.max - t) * e : (t - this.min) * e
        }
        getValueForDistanceFromCenter(t)
        {
            if (A(t))
                return NaN;
            let e = t / (this.drawingArea / (this.max - this.min));
            return this.options.reverse ? this.max - e : this.min + e
        }
        getPointLabelContext(t)
        {
            let e = this._pointLabels || [];
            if (t >= 0 && t < e.length) {
                let s = e[t];
                return rc(this.getContext(), t, s)
            }
        }
        getPointPosition(t, e, s=0)
        {
            let n = this.getIndexAngle(t) - Y + s;
            return {
                x: Math.cos(n) * e + this.xCenter,
                y: Math.sin(n) * e + this.yCenter,
                angle: n
            }
        }
        getPointPositionForValue(t, e)
        {
            return this.getPointPosition(t, this.getDistanceFromCenterForValue(e))
        }
        getBasePosition(t)
        {
            return this.getPointPositionForValue(t || 0, this.getBaseValue())
        }
        getPointLabelPosition(t)
        {
            let {left: e, top: s, right: n, bottom: o} = this._pointLabelItems[t];
            return {
                left: e,
                top: s,
                right: n,
                bottom: o
            }
        }
        drawBackground()
        {
            let {backgroundColor: t, grid: {circular: e}} = this.options;
            if (t) {
                let s = this.ctx;
                s.save(),
                s.beginPath(),
                mo(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length),
                s.closePath(),
                s.fillStyle = t,
                s.fill(),
                s.restore()
            }
        }
        drawGrid()
        {
            let t = this.ctx,
                e = this.options,
                {angleLines: s, grid: n, border: o} = e,
                a = this._pointLabels.length,
                r,
                l,
                c;
            if (e.pointLabels.display && oc(this, a), n.display && this.ticks.forEach((h, d) => {
                if (d !== 0 || d === 0 && this.min < 0) {
                    l = this.getDistanceFromCenterForValue(h.value);
                    let u = this.getContext(d),
                        f = n.setContext(u),
                        p = o.setContext(u);
                    ac(this, f, l, a, p)
                }
            }), s.display) {
                for (t.save(), r = a - 1; r >= 0; r--) {
                    let h = s.setContext(this.getPointLabelContext(r)),
                        {color: d, lineWidth: u} = h;
                    !u || !d || (t.lineWidth = u, t.strokeStyle = d, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(r, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke())
                }
                t.restore()
            }
        }
        drawBorder() {}
        drawLabels()
        {
            let t = this.ctx,
                e = this.options,
                s = e.ticks;
            if (!s.display)
                return;
            let n = this.getIndexAngle(0),
                o,
                a;
            t.save(),
            t.translate(this.xCenter, this.yCenter),
            t.rotate(n),
            t.textAlign = "center",
            t.textBaseline = "middle",
            this.ticks.forEach((r, l) => {
                if (l === 0 && this.min >= 0 && !e.reverse)
                    return;
                let c = s.setContext(this.getContext(l)),
                    h = V(c.font);
                if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
                    t.font = h.string,
                    a = t.measureText(r.label).width,
                    t.fillStyle = c.backdropColor;
                    let d = H(c.backdropPadding);
                    t.fillRect(-a / 2 - d.left, -o - h.size / 2 - d.top, a + d.width, h.size + d.height)
                }
                _t(t, r.label, 0, -o, h, {
                    color: c.color,
                    strokeColor: c.textStrokeColor,
                    strokeWidth: c.textStrokeWidth
                })
            }),
            t.restore()
        }
        drawTitle() {}
    }
    ,
    ni = {
        millisecond: {
            common: !0,
            size: 1,
            steps: 1e3
        },
        second: {
            common: !0,
            size: 1e3,
            steps: 60
        },
        minute: {
            common: !0,
            size: 6e4,
            steps: 60
        },
        hour: {
            common: !0,
            size: 36e5,
            steps: 24
        },
        day: {
            common: !0,
            size: 864e5,
            steps: 30
        },
        week: {
            common: !1,
            size: 6048e5,
            steps: 4
        },
        month: {
            common: !0,
            size: 2628e6,
            steps: 12
        },
        quarter: {
            common: !1,
            size: 7884e6,
            steps: 4
        },
        year: {
            common: !0,
            size: 3154e7
        }
    },
    q = Object.keys(ni);
function qn(i, t) {
    return i - t
}
function Gn(i, t) {
    if (A(t))
        return null;
    let e = i._adapter,
        {parser: s, round: n, isoWeekday: o} = i._parseOpts,
        a = t;
    return typeof s == "function" && (a = s(a)), F(a) || (a = typeof s == "string" ? e.parse(a, s) : e.parse(a)), a === null ? null : (n && (a = n === "week" && (Dt(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, n)), +a)
}
function Zn(i, t, e, s) {
    let n = q.length;
    for (let o = q.indexOf(i); o < n - 1; ++o) {
        let a = ni[q[o]],
            r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
        if (a.common && Math.ceil((e - t) / (r * a.size)) <= s)
            return q[o]
    }
    return q[n - 1]
}
function lc(i, t, e, s, n) {
    for (let o = q.length - 1; o >= q.indexOf(e); o--) {
        let a = q[o];
        if (ni[a].common && i._adapter.diff(n, s, a) >= t - 1)
            return a
    }
    return q[e ? q.indexOf(e) : 0]
}
function cc(i) {
    for (let t = q.indexOf(i) + 1, e = q.length; t < e; ++t)
        if (ni[q[t]].common)
            return q[t]
}
function Jn(i, t, e) {
    if (!e)
        i[t] = !0;
    else if (e.length) {
        let {lo: s, hi: n} = Le(e, t),
            o = e[s] >= t ? e[s] : e[n];
        i[o] = !0
    }
}
function hc(i, t, e, s) {
    let n = i._adapter,
        o = +n.startOf(t[0].value, s),
        a = t[t.length - 1].value,
        r,
        l;
    for (r = o; r <= a; r = +n.add(r, 1, s))
        l = e[r],
        l >= 0 && (t[l].major = !0);
    return t
}
function Qn(i, t, e) {
    let s = [],
        n = {},
        o = t.length,
        a,
        r;
    for (a = 0; a < o; ++a)
        r = t[a],
        n[r] = a,
        s.push({
            value: r,
            major: !1
        });
    return o === 0 || !e ? s : hc(i, s, n, e)
}
var si = class  extends Rt{
    static id = "time";
    static defaults = {
        bounds: "data",
        adapters: {},
        time: {
            parser: !1,
            unit: !1,
            round: !1,
            isoWeekday: !1,
            minUnit: "millisecond",
            displayFormats: {}
        },
        ticks: {
            source: "auto",
            callback: !1,
            major: {
                enabled: !1
            }
        }
    };
    constructor(t)
    {
        super(t),
        this._cache = {
            data: [],
            labels: [],
            all: []
        },
        this._unit = "day",
        this._majorUnit = void 0,
        this._offsets = {},
        this._normalized = !1,
        this._parseOpts = void 0
    }
    init(t, e={})
    {
        let s = t.time || (t.time = {}),
            n = this._adapter = new Xa._date(t.adapters.date);
        n.init(e),
        Wt(s.displayFormats, n.formats()),
        this._parseOpts = {
            parser: s.parser,
            round: s.round,
            isoWeekday: s.isoWeekday
        },
        super.init(t),
        this._normalized = e.normalized
    }
    parse(t, e)
    {
        return t === void 0 ? null : Gn(this, t)
    }
    beforeLayout()
    {
        super.beforeLayout(),
        this._cache = {
            data: [],
            labels: [],
            all: []
        }
    }
    determineDataLimits()
    {
        let t = this.options,
            e = this._adapter,
            s = t.time.unit || "day",
            {min: n, max: o, minDefined: a, maxDefined: r} = this.getUserBounds();
        function l(c) {
            !a && !isNaN(c.min) && (n = Math.min(n, c.min)),
            !r && !isNaN(c.max) && (o = Math.max(o, c.max))
        }
        (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))),
        n = F(n) && !isNaN(n) ? n : +e.startOf(Date.now(), s),
        o = F(o) && !isNaN(o) ? o : +e.endOf(Date.now(), s) + 1,
        this.min = Math.min(n, o - 1),
        this.max = Math.max(n + 1, o)
    }
    _getLabelBounds()
    {
        let t = this.getLabelTimestamps(),
            e = Number.POSITIVE_INFINITY,
            s = Number.NEGATIVE_INFINITY;
        return t.length && (e = t[0], s = t[t.length - 1]), {
            min: e,
            max: s
        }
    }
    buildTicks()
    {
        let t = this.options,
            e = t.time,
            s = t.ticks,
            n = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
        t.bounds === "ticks" && n.length && (this.min = this._userMin || n[0], this.max = this._userMax || n[n.length - 1]);
        let o = this.min,
            a = this.max,
            r = Fs(n, o, a);
        return this._unit = e.unit || (s.autoSkip ? Zn(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : lc(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !s.major.enabled || this._unit === "year" ? void 0 : cc(this._unit), this.initOffsets(n), t.reverse && r.reverse(), Qn(this, r, this._majorUnit)
    }
    afterAutoSkip()
    {
        this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map(t => +t.value))
    }
    initOffsets(t=[])
    {
        let e = 0,
            s = 0,
            n,
            o;
        this.options.offset && t.length && (n = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - n : e = (this.getDecimalForValue(t[1]) - n) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? s = o : s = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
        let a = t.length < 3 ? .5 : .25;
        e = G(e, 0, a),
        s = G(s, 0, a),
        this._offsets = {
            start: e,
            end: s,
            factor: 1 / (e + 1 + s)
        }
    }
    _generate()
    {
        let t = this._adapter,
            e = this.min,
            s = this.max,
            n = this.options,
            o = n.time,
            a = o.unit || Zn(o.minUnit, e, s, this._getLabelCapacity(e)),
            r = P(n.ticks.stepSize, 1),
            l = a === "week" ? o.isoWeekday : !1,
            c = Dt(l) || l === !0,
            h = {},
            d = e,
            u,
            f;
        if (c && (d = +t.startOf(d, "isoWeek", l)), d = +t.startOf(d, c ? "day" : a), t.diff(s, e, a) > 1e5 * r)
            throw new Error(e + " and " + s + " are too far apart with stepSize of " + r + " " + a);
        let p = n.ticks.source === "data" && this.getDataTimestamps();
        for (u = d, f = 0; u < s; u = +t.add(u, r, a), f++)
            Jn(h, u, p);
        return (u === s || n.bounds === "ticks" || f === 1) && Jn(h, u, p), Object.keys(h).sort(qn).map(g => +g)
    }
    getLabelForValue(t)
    {
        let e = this._adapter,
            s = this.options.time;
        return s.tooltipFormat ? e.format(t, s.tooltipFormat) : e.format(t, s.displayFormats.datetime)
    }
    format(t, e)
    {
        let n = this.options.time.displayFormats,
            o = this._unit,
            a = e || n[o];
        return this._adapter.format(t, a)
    }
    _tickFormatFunction(t, e, s, n)
    {
        let o = this.options,
            a = o.ticks.callback;
        if (a)
            return R(a, [t, e, s], this);
        let r = o.time.displayFormats,
            l = this._unit,
            c = this._majorUnit,
            h = l && r[l],
            d = c && r[c],
            u = s[e],
            f = c && d && u && u.major;
        return this._adapter.format(t, n || (f ? d : h))
    }
    generateTickLabels(t)
    {
        let e,
            s,
            n;
        for (e = 0, s = t.length; e < s; ++e)
            n = t[e],
            n.label = this._tickFormatFunction(n.value, e, t)
    }
    getDecimalForValue(t)
    {
        return t === null ? NaN : (t - this.min) / (this.max - this.min)
    }
    getPixelForValue(t)
    {
        let e = this._offsets,
            s = this.getDecimalForValue(t);
        return this.getPixelForDecimal((e.start + s) * e.factor)
    }
    getValueForPixel(t)
    {
        let e = this._offsets,
            s = this.getDecimalForPixel(t) / e.factor - e.end;
        return this.min + s * (this.max - this.min)
    }
    _getLabelSize(t)
    {
        let e = this.options.ticks,
            s = this.ctx.measureText(t).width,
            n = lt(this.isHorizontal() ? e.maxRotation : e.minRotation),
            o = Math.cos(n),
            a = Math.sin(n),
            r = this._resolveTickFontOptions(0).size;
        return {
            w: s * o + r * a,
            h: s * a + r * o
        }
    }
    _getLabelCapacity(t)
    {
        let e = this.options.time,
            s = e.displayFormats,
            n = s[e.unit] || s.millisecond,
            o = this._tickFormatFunction(t, 0, Qn(this, [t], this._majorUnit), n),
            a = this._getLabelSize(o),
            r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
        return r > 0 ? r : 1
    }
    getDataTimestamps()
    {
        let t = this._cache.data || [],
            e,
            s;
        if (t.length)
            return t;
        let n = this.getMatchingVisibleMetas();
        if (this._normalized && n.length)
            return this._cache.data = n[0].controller.getAllParsedValues(this);
        for (e = 0, s = n.length; e < s; ++e)
            t = t.concat(n[e].controller.getAllParsedValues(this));
        return this._cache.data = this.normalize(t)
    }
    getLabelTimestamps()
    {
        let t = this._cache.labels || [],
            e,
            s;
        if (t.length)
            return t;
        let n = this.getLabels();
        for (e = 0, s = n.length; e < s; ++e)
            t.push(Gn(this, n[e]));
        return this._cache.labels = this._normalized ? t : this.normalize(t)
    }
    normalize(t)
    {
        return Bs(t.sort(qn))
    }
}
;
function Ue(i, t, e) {
    let s = 0,
        n = i.length - 1,
        o,
        a,
        r,
        l;
    e ? (t >= i[s].pos && t <= i[n].pos && ({lo: s, hi: n} = mt(i, "pos", t)), {pos: o, time: r} = i[s], {pos: a, time: l} = i[n]) : (t >= i[s].time && t <= i[n].time && ({lo: s, hi: n} = mt(i, "time", t)), {time: o, pos: r} = i[s], {time: a, pos: l} = i[n]);
    let c = a - o;
    return c ? r + (l - r) * (t - o) / c : r
}
var to = class  extends si{
    static id = "timeseries";
    static defaults = si.defaults;
    constructor(t)
    {
        super(t),
        this._table = [],
        this._minPos = void 0,
        this._tableRange = void 0
    }
    initOffsets()
    {
        let t = this._getTimestampsForTable(),
            e = this._table = this.buildLookupTable(t);
        this._minPos = Ue(e, this.min),
        this._tableRange = Ue(e, this.max) - this._minPos,
        super.initOffsets(t)
    }
    buildLookupTable(t)
    {
        let {min: e, max: s} = this,
            n = [],
            o = [],
            a,
            r,
            l,
            c,
            h;
        for (a = 0, r = t.length; a < r; ++a)
            c = t[a],
            c >= e && c <= s && n.push(c);
        if (n.length < 2)
            return [{
                time: e,
                pos: 0
            }, {
                time: s,
                pos: 1
            }];
        for (a = 0, r = n.length; a < r; ++a)
            h = n[a + 1],
            l = n[a - 1],
            c = n[a],
            Math.round((h + l) / 2) !== c && o.push({
                time: c,
                pos: a / (r - 1)
            });
        return o
    }
    _generate()
    {
        let t = this.min,
            e = this.max,
            s = super.getDataTimestamps();
        return (!s.includes(t) || !s.length) && s.splice(0, 0, t), (!s.includes(e) || s.length === 1) && s.push(e), s.sort((n, o) => n - o)
    }
    _getTimestampsForTable()
    {
        let t = this._cache.all || [];
        if (t.length)
            return t;
        let e = this.getDataTimestamps(),
            s = this.getLabelTimestamps();
        return e.length && s.length ? t = this.normalize(e.concat(s)) : t = e.length ? e : s, t = this._cache.all = t, t
    }
    getDecimalForValue(t)
    {
        return (Ue(this._table, t) - this._minPos) / this._tableRange
    }
    getValueForPixel(t)
    {
        let e = this._offsets,
            s = this.getDecimalForPixel(t) / e.factor - e.end;
        return Ue(this._table, s * this._tableRange + this._minPos, !0)
    }
}
;
export { os as CategoryScale, Je as Chart, Pl as Filler, Ll as Legend, Ui as LineController, jt as LineElement, as as LinearScale, ss as PointElement, Xi as ScatterController, El as Title, Hl as Tooltip };
/*! Bundled license information:

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.4
   * https://github.com/kurkle/color#readme
   * (c) 2024 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.js:
  (*!
   * Chart.js v4.4.8
   * https://www.chartjs.org
   * (c) 2025 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chart.js:
  (*!
   * Chart.js v4.4.8
   * https://www.chartjs.org
   * (c) 2025 Chart.js Contributors
   * Released under the MIT License
   *)
*/
