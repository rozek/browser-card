var mh = Object.defineProperty;
var fl = (r) => {
  throw TypeError(r);
};
var gh = (r, e, t) => e in r ? mh(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var rt = (r, e, t) => gh(r, typeof e != "symbol" ? e + "" : e, t), Fa = (r, e, t) => e.has(r) || fl("Cannot " + t);
var B = (r, e, t) => (Fa(r, e, "read from private field"), t ? t.call(r) : e.get(r)), Qe = (r, e, t) => e.has(r) ? fl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Me = (r, e, t, n) => (Fa(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), ue = (r, e, t) => (Fa(r, e, "access private method"), t);
var Pa = (r, e, t, n) => ({
  set _(i) {
    Me(r, e, i, t);
  },
  get _() {
    return B(r, e, n);
  }
});
function jc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ni = { exports: {} }, bh = ni.exports, pl;
function vh() {
  return pl || (pl = 1, (function(r, e) {
    (function(t, n) {
      n(e);
    })(bh, (function(t) {
      var n = Function("return this")();
      function i(b, _) {
        return b == null || "hasOwnProperty" in b && typeof b.hasOwnProperty == "function" ? b.hasOwnProperty(_) : Object.prototype.hasOwnProperty.call(b, _);
      }
      function a(b, _) {
        return b == null || "isPrototypeOf" in b && typeof b.isPrototypeOf == "function" ? b.isPrototypeOf(_) : Object.prototype.isPrototypeOf.call(b, _);
      }
      function s(b) {
        var _ = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(b);
        if (_ == null) throw new Error(b);
        var V = new Error(_[2]);
        throw V.name = _[1], V;
      }
      function o(b) {
        return typeof b == "boolean" || b instanceof Boolean;
      }
      function l(b) {
        return typeof b == "number" || b instanceof Number;
      }
      function d(b) {
        return (typeof b == "number" || b instanceof Number) && isFinite(b.valueOf());
      }
      function h(b) {
        return (typeof b == "number" || b instanceof Number) && isNaN(b.valueOf());
      }
      function f(b) {
        return (typeof b == "number" || b instanceof Number) && (b = b.valueOf(), isFinite(b) && Math.round(b) === b);
      }
      function m(b) {
        return (typeof b == "number" || b instanceof Number) && (b = b.valueOf(), isFinite(b) && Math.round(b) === b && b >= 0);
      }
      function v(b) {
        return (typeof b == "number" || b instanceof Number) && (b = b.valueOf(), isFinite(b) && Math.round(b) === b && b >= 1);
      }
      function k(b) {
        return typeof b == "string" || b instanceof String;
      }
      var T = /^\s*$/;
      function I(b) {
        return (typeof b == "string" || b instanceof String) && !T.test(b.valueOf());
      }
      function O(b, _) {
        return (typeof b == "string" || b instanceof String) && _.test(b.valueOf());
      }
      var L = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function W(b) {
        return O(b, L);
      }
      var Y = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function ne(b) {
        return O(b, Y);
      }
      function M(b) {
        return typeof b == "function";
      }
      function G(b) {
        return typeof b == "function" && (b.name == null || b.name === "");
      }
      function he(b) {
        return typeof b == "function" && b.name != null && b.name !== "";
      }
      function ce(b) {
        return typeof b == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function ie(b) {
        return typeof b == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function Ie(b) {
        return b != null && typeof b == "object";
      }
      function ye(b) {
        return b != null && typeof b == "object" && Object.getPrototypeOf(b) === Object.prototype;
      }
      function q(b) {
        return b != null && typeof b == "object" && !(b instanceof Object);
      }
      var U = Array.isArray;
      function oe(b, _, V) {
        if (U(b)) {
          for (var le = 0, Se = b.length; le < Se; le++) if (b[le] === void 0) return !1;
          return !(_ != null && b.length < _) && !(V != null && b.length > V);
        }
        return !1;
      }
      function D(b, _, V, le) {
        if (U(b)) try {
          for (var Se = 0, qe = b.length; Se < qe; Se++) if (_(b[Se]) == 0) return !1;
          return !(V != null && b.length < V) && !(le != null && b.length > le);
        } catch {
        }
        return !1;
      }
      function j(b) {
        return b instanceof Date;
      }
      function E(b) {
        return b instanceof Error;
      }
      function re(b) {
        return b != null && typeof b.then == "function";
      }
      function ze(b) {
        return b instanceof RegExp;
      }
      function Pe(b, _) {
        return _.indexOf(b) >= 0;
      }
      function Re(b) {
        return k(b) && ($0.hasOwnProperty(b) || /^#[a-fA-F0-9]{6}$/.test(b) || /^#[a-fA-F0-9]{8}$/.test(b) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(b) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(b));
      }
      var He = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      function Ve(b) {
        return O(b, He);
      }
      var sr = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function or(b) {
        if (!O(b, sr) || b === "") return !1;
        try {
          return new URL(b, "file://"), !0;
        } catch {
          return !1;
        }
      }
      var we = !1, Oe = !0;
      function dt(b, _, V, le, Se) {
        if (_ == null) {
          if (le) return _;
          s("MissingArgument: no ".concat(Je(b), " given"));
        } else if (V(_)) switch (!0) {
          case _ instanceof Boolean:
          case _ instanceof Number:
          case _ instanceof String:
            return _.valueOf();
          default:
            return _;
        }
        else s("InvalidArgument: the given ".concat(Je(b), " is no valid ").concat(Je(Se)));
      }
      function ge(b, _, V) {
        var le = function(qe, an) {
          return dt(qe, an, b, _, V);
        }, Se = b.name;
        return Se != null && /^ValueIs/.test(Se) ? lr(le, Se.replace(/^ValueIs/, _ ? "allow" : "expect")) : le;
      }
      function lr(b, _) {
        if (b == null && s("MissingArgument: no function given"), typeof b != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), _ == null && s("MissingArgument: no desired name given"), typeof _ == "string" || _ instanceof String || s("InvalidArgument: the given desired name is not a string"), b.name === _) return b;
        try {
          if (Object.defineProperty(b, "name", { value: _ }), b.name === _) return b;
        } catch {
        }
        return new Function("originalFunction", "return function " + _ + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(b);
      }
      function Ge(b, _) {
        if (_ != null) return _.valueOf();
        s("MissingArgument: no ".concat(Je(b), " given"));
      }
      var gt = Ge, gr = ge(o, Oe, "boolean value"), wn = gr, $t = ge(o, we, "boolean value"), Gr = $t, jr = ge(l, Oe, "numeric value"), xn = jr, Yt = ge(l, we, "numeric value"), br = Yt, vr = ge(d, Oe, "finite numeric value"), Er = vr, Dt = ge(d, we, "finite numeric value"), Kr = Dt, Ft = ge(h, Oe, "NaN value"), cr = Ft, ur = ge(h, we, "NaN value"), zr = ur;
      function b0(b, _, V, le, Se, qe) {
        return _ == null ? _ : wr(b, _, V, le, Se, qe);
      }
      var Wn = b0;
      function Rr(b, _, V, le, Se, qe) {
        if (Yt(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Je(b), " is not-a-number")), Se == null && (Se = !0), qe == null && (qe = !0), V != null && isFinite(V)) {
          if (le != null && isFinite(le)) {
            if (_ < V || !Se && _ === V || _ > le || !qe && _ === le) throw new RangeError("the given ".concat(Je(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(V, "...").concat(le, ")"));
          } else if (_ < V || !Se && _ === V) throw new RangeError("the given ".concat(Je(b), " is below the allowed ") + "minimum (".concat(_, " ").concat(Se ? "<" : "<=", " ").concat(V, ")"));
        } else if (le != null && isFinite(le) && (_ > le || !qe && _ === le)) throw new RangeError("the given ".concat(Je(b), " exceeds the allowed ") + "maximum (".concat(_, " ").concat(qe ? ">" : ">=", " ").concat(le, ")"));
        return _.valueOf();
      }
      var wr = Rr, Un = ge(f, Oe, "integral numeric value"), X0 = Un, Gn = ge(f, we, "integral numeric value"), J0 = Gn;
      function yn(b, _, V, le) {
        return _ == null ? _ : Sn(b, _, V, le);
      }
      var v0 = yn;
      function kn(b, _, V, le) {
        if (Gn(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Je(b), " is not-a-number")), V != null && isFinite(V)) {
          if (le != null && isFinite(le)) {
            if (_ < V || _ > le) throw new RangeError("the given ".concat(Je(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(V, "...").concat(le, ")"));
          } else if (_ < V) throw new RangeError("the given ".concat(Je(b), " is below the allowed ") + "minimum (".concat(_, " < ").concat(V, ")"));
        } else if (le != null && isFinite(le) && _ > le) throw new RangeError("the given ".concat(Je(b), " exceeds the allowed ") + "maximum (".concat(_, " > ").concat(le, ")"));
        return _.valueOf();
      }
      var Sn = kn, Zr = ge(m, Oe, "ordinal number"), xr = Zr, y = ge(m, we, "ordinal number"), F = y, se = ge(v, Oe, "cardinal number"), Ae = se, it = ge(v, we, "cardinal number"), ct = it, ve = ge(k, Oe, "literal string"), fe = ve, ke = ge(k, we, "literal string"), bt = ke, ot = ge(I, Oe, "non-empty literal string"), Xr = ot, Jr = ge(I, we, "non-empty literal string"), Yr = Jr;
      function w0(b, _, V) {
        return _ == null ? _ : yr(b, _, V);
      }
      var _n = w0;
      function x0(b, _, V) {
        if (ke(b, _), V.test(_)) return _.valueOf();
        s("InvalidArgument: the given ".concat(Je(b), " does not match the specified pattern"));
      }
      var yr = x0, kr = ge(W, Oe, "literal text"), Qr = kr, Sr = ge(W, we, "literal text"), jn = Sr, y0 = ge(ne, Oe, "single line of text"), Y0 = y0, Qt = ge(ne, we, "single line of text"), k0 = Qt, yt = ge(M, Oe, "JavaScript function"), S0 = yt, Kn = ge(M, we, "JavaScript function"), Zn = Kn, en = ge(G, Oe, "anonymous JavaScript function"), Xn = en, Q = ge(G, we, "anonymous JavaScript function"), xe = Q, Le = ge(he, Oe, "named JavaScript function"), Ne = Le, et = ge(he, we, "named JavaScript function"), Rt = et, Pt = ge(ce, Oe, "native JavaScript function"), Et = Pt, Nt = ge(ce, we, "native JavaScript function"), Ot = Nt, dr = ge(ie, Oe, "scripted JavaScript function"), lt = dr, Cn = ge(ie, we, "scripted JavaScript function"), Q0 = Cn, tn = ge(Ie, Oe, "JavaScript object"), Jn = tn, Yn = ge(Ie, we, "JavaScript object"), rn = Yn, Qn = ge(ye, Oe, '"plain" JavaScript object'), Kt = Qn, _0 = ge(ye, we, '"plain" JavaScript object'), e0 = _0, _e = ge(q, Oe, '"vanilla" JavaScript object'), C0 = _e, vt = ge(q, we, '"vanilla" JavaScript object'), Xe = vt;
      function $(b, _) {
        return _ == null ? _ : J(b, _);
      }
      var C = $;
      function z(b, _) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), U(_)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is no JavaScript array"));
      }
      var J = z;
      function N(b, _, V, le, Se) {
        return _ == null ? _ : de(b, _, V, le, Se);
      }
      var R = N;
      function K(b, _, V, le, Se) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), oe(_, le, Se)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is ") + (V == null ? "either not a list or contains an invalid number of elements" : "no " + Je(V)));
      }
      var de = K;
      function be(b, _, V, le, Se, qe) {
        return _ == null ? _ : Mt(b, _, V, le, Se, qe);
      }
      var tt = be;
      function Vt(b, _, V, le, Se, qe) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), D(_, V, Se, qe)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is ") + (le == null ? "either not a list or contains invalid elements" : "no " + Je(le)));
      }
      var Mt = Vt;
      function hr(b, _, V, le) {
        return _ == null ? _ : A0(b, _, V, le);
      }
      var nn = hr;
      function ei(b, _, V, le) {
        return _ == null && s("MissingArgument: no ".concat(Je(b), " given")), _ instanceof V || s("InvalidArgument: the given ".concat(Je(b), " is no ").concat(Je(le))), _;
      }
      var A0 = ei;
      function Ho(b, _, V, le) {
        return _ == null ? _ : Wo(b, _, V, le);
      }
      var Y1 = Ho;
      function qo(b, _, V, le) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), V.isPrototypeOf(_)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is no ").concat(Je(le)));
      }
      var Wo = qo, Uo = ge(j, Oe, "JavaScript Date object"), Q1 = Uo, Go = ge(j, we, "JavaScript Date object"), eh = Go, jo = ge(E, Oe, "JavaScript Error object"), th = jo, Ko = ge(E, we, "JavaScript Error object"), rh = Ko, Zo = ge(re, Oe, 'JavaScript Promise (or "Thenable") object'), nh = Zo, Xo = ge(re, we, 'JavaScript Promise (or "Thenable") object'), ih = Xo, Jo = ge(ze, Oe, "JavaScript RegExp object"), ah = Jo, Yo = ge(ze, we, "JavaScript RegExp object"), sh = Yo;
      function Qo(b, _, V) {
        return _ == null ? _ : tl(b, _, V);
      }
      var oh = Qo;
      function el(b, _, V) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), Pe(_, V)) return _ == null || typeof _.valueOf != "function" ? _ : _.valueOf();
        s("InvalidArgument: the given ".concat(Je(b), " is not among the supported values"));
      }
      var tl = el, rl = ge(Re, Oe, "CSS color specification"), lh = rl, nl = ge(Re, we, "CSS color specification"), ch = nl, il = ge(Ve, Oe, "EMail address"), uh = il, al = ge(Ve, we, "EMail address"), dh = al, sl = ge(or, Oe, "URL"), hh = sl, ol = ge(or, we, "URL"), fh = ol;
      function Je(b) {
        return b.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, (function(_) {
          return _ === "\\" ? "\\\\" : _;
        })).replace(/[\x00-\x1f\x7f-\x9f]/g, (function(_) {
          switch (_) {
            case "\0":
              return "\\0";
            case "\b":
              return "\\b";
            case "\f":
              return "\\f";
            case `
`:
              return "\\n";
            case "\r":
              return "\\r";
            case "	":
              return "\\t";
            case "\v":
              return "\\v";
            default:
              var V = _.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(V.length) + V;
          }
        }));
      }
      function ll(b, _) {
        return _ === void 0 && (_ = '"'), b.replace(_ === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, (function(V) {
          switch (V) {
            case "'":
              return "\\'";
            case '"':
              return '\\"';
            case "\\":
              return "\\\\";
            default:
              return V;
          }
        })).replace(/[\x00-\x1f\x7f-\x9f]/g, (function(V) {
          switch (V) {
            case "\0":
              return "\\0";
            case "\b":
              return "\\b";
            case "\f":
              return "\\f";
            case `
`:
              return "\\n";
            case "\r":
              return "\\r";
            case "	":
              return "\\t";
            case "\v":
              return "\\v";
            default:
              var le = V.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(le.length) + le;
          }
        }));
      }
      function cl(b, _) {
        return _ = (_ || "").trim() || "<br/>", b.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, (function(V) {
          switch (V) {
            case "&":
              return "&amp;";
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case '"':
              return "&quot;";
            case "'":
              return "&apos;";
            case "\b":
              return "&#92;b";
            case "\f":
              return "&#92;f";
            case `
`:
              return _;
            case "\r":
              return "&#92;r";
            case "	":
              return "&#92;t";
            case "\v":
              return "&#92;v";
            case "\\":
              return "&#92;";
            default:
              var le = V.charCodeAt(0).toString(16);
              return "&#x0000".substring(3, 7 - le.length) + le + ";";
          }
        }));
      }
      function Mi(b, _, V) {
        if (b === _) return !1;
        var le = typeof b;
        if (le !== typeof _) return !0;
        switch (le) {
          case "undefined":
          case "boolean":
          case "string":
          case "function":
          default:
            return !0;
          case "number":
            return isNaN(b) !== isNaN(_) || Math.abs(b - _) > Number.EPSILON;
          case "object":
            return b == null || _ == null || (V === "by-value" && (b instanceof Boolean || b instanceof Number || b instanceof String) ? b.valueOf() !== _.valueOf() : Array.isArray(b) ? (function(Se, qe, an) {
              if (!Array.isArray(qe) || Se.length !== qe.length) return !0;
              for (var er = 0, ph = Se.length; er < ph; er++) if (Mi(Se[er], qe[er], an)) return !0;
              return !1;
            })(b, _, V) : V === "by-reference" || (function(Se, qe, an) {
              if (Object.getPrototypeOf(Se) !== Object.getPrototypeOf(qe)) return !0;
              for (var er in Se) if (!(er in qe)) return !0;
              for (var er in qe)
                if (!(er in Se) || Mi(Se[er], qe[er], an)) return !0;
              return !1;
            })(b, _, V));
        }
        return !0;
      }
      function ul(b) {
        for (var _ in Yn("candidate", b), b) if (i(b, _)) return !1;
        return !0;
      }
      function dl(b) {
        return /^\s*$/.test(b);
      }
      var $0 = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
      function hl(b) {
        var _ = b.toLowerCase();
        if ($0.hasOwnProperty(_) && (b = $0[_]), /^#[a-fA-F0-9]{6}$/.test(b)) return b + "FF";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return b;
        var V = "0123456789ABCDEF";
        function le(qe) {
          return qe > 255 && (qe = 255), V[Math.trunc(qe / 16)] + V[qe % 16];
        }
        var Se = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (Se != null) return "#" + le(parseInt(Se[1], 10)) + le(parseInt(Se[2], 10)) + le(parseInt(Se[3], 10)) + "FF";
        if ((Se = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return "#" + le(parseInt(Se[1], 10)) + le(parseInt(Se[2], 10)) + le(parseInt(Se[3], 10)) + le(255 * parseFloat(Se[4]));
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }
      t.ColorSet = $0, t.FunctionWithName = lr, t.HTMLsafe = cl, t.HexColor = hl, t.MarkDownSafe = function(b, _) {
        return cl(b, _).replace(/:/g, "&#58;");
      }, t.ObjectIsEmpty = ul, t.ObjectIsNotEmpty = function(b) {
        return !ul(b);
      }, t.ObjectMergedWith = function(b) {
        for (var _ = [], V = 1; V < arguments.length; V++) _[V - 1] = arguments[V];
        for (var le = 0, Se = _.length; le < Se; le++) {
          var qe = _[le];
          if (qe != null) if (typeof qe == "object") for (var an in qe) {
            var er = Object.getOwnPropertyDescriptor(qe, an);
            er != null && Object.defineProperty(b, an, er);
          }
          else s("InvalidArgument: argument #" + (le + 1) + " is not an object");
        }
        return b;
      }, t.Object_hasOwnProperty = i, t.Object_isPrototypeOf = a, t.Object_propertyIsEnumerable = function(b, _) {
        return b == null || "propertyIsEnumerable" in b && typeof b.propertyIsEnumerable == "function" ? b.propertyIsEnumerable(_) : Object.prototype.propertyIsEnumerable.call(b, _);
      }, t.Object_toLocaleString = function(b) {
        return b == null || "toLocaleString" in b && typeof b.toLocaleString == "function" ? b.toLocaleString() : Object.prototype.toString.call(b);
      }, t.Object_toString = function(b) {
        return b == null || "toString" in b && typeof b.toString == "function" ? b.toString() : Object.prototype.toString.call(b);
      }, t.Object_valueOf = function(b) {
        return b == null || "valueOf" in b && typeof b.valueOf == "function" ? b.valueOf() : Object.prototype.valueOf.call(b);
      }, t.RGBAColor = function(b) {
        var _ = b.toLowerCase();
        if ($0.hasOwnProperty(_)) return $0[_];
        if (/^#[a-fA-F0-9]{6}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + ", 1)";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + "," + parseInt(b.slice(7), 16) / 255 + ")";
        var V = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (V != null) return b.slice(0, b.length - 1) + ",1)";
        if ((V = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return b;
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }, t.StringIsEmpty = dl, t.StringIsNotEmpty = function(b) {
        return !dl(b);
      }, t.ValidatorForClassifier = ge, t.ValueExists = function(b) {
        return b != null;
      }, t.ValueInheritsFrom = function(b, _) {
        return a(_, b);
      }, t.ValueIsAnonymousFunction = G, t.ValueIsArray = U, t.ValueIsBoolean = o, t.ValueIsCardinal = v, t.ValueIsColor = Re, t.ValueIsDate = j, t.ValueIsEMailAddress = Ve, t.ValueIsEmptyString = function(b) {
        return (typeof b == "string" || b instanceof String) && T.test(b.valueOf());
      }, t.ValueIsError = E, t.ValueIsFiniteNumber = d, t.ValueIsFunction = M, t.ValueIsInstanceOf = function(b, _) {
        return b instanceof _;
      }, t.ValueIsInteger = f, t.ValueIsIntegerInRange = function(b, _, V) {
        if (!f(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(V)) {
            if (b < _ || b > V) return !1;
          } else if (b < _) return !1;
        } else if (d(V) && b > V) return !1;
        return !0;
      }, t.ValueIsList = oe, t.ValueIsListSatisfying = D, t.ValueIsMissing = function(b) {
        return b == null;
      }, t.ValueIsNaN = h, t.ValueIsNamedFunction = he, t.ValueIsNativeFunction = ce, t.ValueIsNonEmptyString = I, t.ValueIsNumber = l, t.ValueIsNumberInRange = function(b, _, V, le, Se) {
        if (le === void 0 && (le = !0), Se === void 0 && (Se = !0), !l(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(V)) {
            if (b < _ || !le && b === _ || b > V || !Se && b === V) return !1;
          } else if (b < _ || !le && b === _) return !1;
        } else if (d(V) && (b > V || !Se && b === V)) return !1;
        return !0;
      }, t.ValueIsObject = Ie, t.ValueIsOneOf = Pe, t.ValueIsOrdinal = m, t.ValueIsPlainObject = ye, t.ValueIsPromise = re, t.ValueIsRegExp = ze, t.ValueIsScriptedFunction = ie, t.ValueIsString = k, t.ValueIsStringMatching = O, t.ValueIsText = W, t.ValueIsTextline = ne, t.ValueIsURL = or, t.ValueIsVanillaObject = q, t.ValuesAreEqual = function(b, _, V) {
        return !Mi(b, _, V);
      }, t.ValuesDiffer = Mi, t.acceptNil = Oe, t.allowAnonymousFunction = en, t.allowArray = $, t.allowBoolean = gr, t.allowCardinal = se, t.allowColor = rl, t.allowDate = Uo, t.allowEMailAddress = il, t.allowError = jo, t.allowFiniteNumber = vr, t.allowFunction = yt, t.allowInstanceOf = hr, t.allowInteger = Un, t.allowIntegerInRange = yn, t.allowList = N, t.allowListSatisfying = be, t.allowNaN = Ft, t.allowNamedFunction = Le, t.allowNativeFunction = Pt, t.allowNonEmptyString = ot, t.allowNumber = jr, t.allowNumberInRange = b0, t.allowObject = tn, t.allowOneOf = Qo, t.allowOrdinal = Zr, t.allowPlainObject = Qn, t.allowPromise = Zo, t.allowRegExp = Jo, t.allowScriptedFunction = dr, t.allowString = ve, t.allowStringMatching = w0, t.allowText = kr, t.allowTextline = y0, t.allowURL = sl, t.allowValueInheritingFrom = Ho, t.allowVanillaObject = _e, t.allowedAnonymousFunction = Xn, t.allowedArray = C, t.allowedBoolean = wn, t.allowedCardinal = Ae, t.allowedColor = lh, t.allowedDate = Q1, t.allowedEMailAddress = uh, t.allowedError = th, t.allowedFiniteNumber = Er, t.allowedFunction = S0, t.allowedInstanceOf = nn, t.allowedInteger = X0, t.allowedIntegerInRange = v0, t.allowedList = R, t.allowedListSatisfying = tt, t.allowedNaN = cr, t.allowedNamedFunction = Ne, t.allowedNativeFunction = Et, t.allowedNonEmptyString = Xr, t.allowedNumber = xn, t.allowedNumberInRange = Wn, t.allowedObject = Jn, t.allowedOneOf = oh, t.allowedOrdinal = xr, t.allowedPlainObject = Kt, t.allowedPromise = nh, t.allowedRegExp = ah, t.allowedScriptedFunction = lt, t.allowedString = fe, t.allowedStringMatching = _n, t.allowedText = Qr, t.allowedTextline = Y0, t.allowedURL = hh, t.allowedValueInheritingFrom = Y1, t.allowedVanillaObject = C0, t.constrained = function(b, _, V) {
        return _ === void 0 && (_ = -1 / 0), V === void 0 && (V = 1 / 0), Math.max(_, Math.min(b, V));
      }, t.escaped = Je, t.expectAnonymousFunction = Q, t.expectArray = z, t.expectBoolean = $t, t.expectCardinal = it, t.expectColor = nl, t.expectDate = Go, t.expectEMailAddress = al, t.expectError = Ko, t.expectFiniteNumber = Dt, t.expectFunction = Kn, t.expectInstanceOf = ei, t.expectInteger = Gn, t.expectIntegerInRange = kn, t.expectList = K, t.expectListSatisfying = Vt, t.expectNaN = ur, t.expectNamedFunction = et, t.expectNativeFunction = Nt, t.expectNonEmptyString = Jr, t.expectNumber = Yt, t.expectNumberInRange = Rr, t.expectObject = Yn, t.expectOneOf = el, t.expectOrdinal = y, t.expectPlainObject = _0, t.expectPromise = Xo, t.expectRegExp = Yo, t.expectScriptedFunction = Cn, t.expectString = ke, t.expectStringMatching = x0, t.expectText = Sr, t.expectTextline = Qt, t.expectURL = ol, t.expectValue = Ge, t.expectValueInheritingFrom = qo, t.expectVanillaObject = vt, t.expectedAnonymousFunction = xe, t.expectedArray = J, t.expectedBoolean = Gr, t.expectedCardinal = ct, t.expectedColor = ch, t.expectedDate = eh, t.expectedEMailAddress = dh, t.expectedError = rh, t.expectedFiniteNumber = Kr, t.expectedFunction = Zn, t.expectedInstanceOf = A0, t.expectedInteger = J0, t.expectedIntegerInRange = Sn, t.expectedList = de, t.expectedListSatisfying = Mt, t.expectedNaN = zr, t.expectedNamedFunction = Rt, t.expectedNativeFunction = Ot, t.expectedNonEmptyString = Yr, t.expectedNumber = br, t.expectedNumberInRange = wr, t.expectedObject = rn, t.expectedOneOf = tl, t.expectedOrdinal = F, t.expectedPlainObject = e0, t.expectedPromise = ih, t.expectedRegExp = sh, t.expectedScriptedFunction = Q0, t.expectedString = bt, t.expectedStringMatching = yr, t.expectedText = jn, t.expectedTextline = k0, t.expectedURL = fh, t.expectedValue = gt, t.expectedValueInheritingFrom = Wo, t.expectedVanillaObject = Xe, t.global = n, t.quotable = ll, t.quoted = function(b, _) {
        return _ === void 0 && (_ = '"'), _ + ll(b, _) + _;
      }, t.rejectNil = we, t.shortHexColor = function(b) {
        return hl(b).slice(0, 7);
      }, t.throwError = s, t.unescaped = function(b) {
        return b.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g, (function(_) {
          switch (_) {
            case "\\0":
              return "\0";
            case "\\b":
              return "\b";
            case "\\f":
              return "\f";
            case "\\n":
              return `
`;
            case "\\r":
              return "\r";
            case "\\t":
              return "	";
            case "\\v":
              return "\v";
            case "\\'":
              return "'";
            case '\\"':
              return '"';
            case "\\\\":
              return "\\";
            default:
              var V = parseInt(_.slice(2), 16);
              return String.fromCharCode(V);
          }
        }));
      }, t.validatedArgument = dt, Object.defineProperty(t, "__esModule", { value: !0 });
    }));
  })(ni, ni.exports)), ni.exports;
}
var S = vh(), Ci, Fe, Kc, Nn, ml, Zc, Xc, Va, Xi, li, Jc, ro, fs, ps, Yc, aa = {}, sa = [], wh = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ai = Array.isArray;
function Fr(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function no(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function hn(r, e, t) {
  var n, i, a, s = {};
  for (a in e) a == "key" ? n = e[a] : a == "ref" ? i = e[a] : s[a] = e[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? Ci.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (a in r.defaultProps) s[a] === void 0 && (s[a] = r.defaultProps[a]);
  return ci(r, s, n, i, null);
}
function ci(r, e, t, n, i) {
  var a = { type: r, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Kc, __i: -1, __u: 0 };
  return i == null && Fe.vnode != null && Fe.vnode(a), a;
}
function xh() {
  return { current: null };
}
function On(r) {
  return r.children;
}
function cn(r, e) {
  this.props = r, this.context = e;
}
function D0(r, e) {
  if (e == null) return r.__ ? D0(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? D0(r) : null;
}
function yh(r) {
  if (r.__P && r.__d) {
    var e = r.__v, t = e.__e, n = [], i = [], a = Fr({}, e);
    a.__v = e.__v + 1, Fe.vnode && Fe.vnode(a), io(r.__P, a, e, r.__n, r.__P.namespaceURI, 32 & e.__u ? [t] : null, n, t ?? D0(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, ru(n, a, i), e.__e = e.__ = null, a.__e != t && Qc(a);
  }
}
function Qc(r) {
  if ((r = r.__) != null && r.__c != null) return r.__e = r.__c.base = null, r.__k.some(function(e) {
    if (e != null && e.__e != null) return r.__e = r.__c.base = e.__e;
  }), Qc(r);
}
function ms(r) {
  (!r.__d && (r.__d = !0) && Nn.push(r) && !oa.__r++ || ml != Fe.debounceRendering) && ((ml = Fe.debounceRendering) || Zc)(oa);
}
function oa() {
  try {
    for (var r, e = 1; Nn.length; ) Nn.length > e && Nn.sort(Xc), r = Nn.shift(), e = Nn.length, yh(r);
  } finally {
    Nn.length = oa.__r = 0;
  }
}
function eu(r, e, t, n, i, a, s, o, l, d, h) {
  var f, m, v, k, T, I, O, L = n && n.__k || sa, W = e.length;
  for (l = kh(t, e, L, l, W), f = 0; f < W; f++) (v = t.__k[f]) != null && (m = v.__i != -1 && L[v.__i] || aa, v.__i = f, I = io(r, v, m, i, a, s, o, l, d, h), k = v.__e, v.ref && m.ref != v.ref && (m.ref && ao(m.ref, null, v), h.push(v.ref, v.__c || k, v)), T == null && k != null && (T = k), (O = !!(4 & v.__u)) || m.__k === v.__k ? (l = tu(v, l, r, O), O && m.__e && (m.__e = null)) : typeof v.type == "function" && I !== void 0 ? l = I : k && (l = k.nextSibling), v.__u &= -7);
  return t.__e = T, l;
}
function kh(r, e, t, n, i) {
  var a, s, o, l, d, h = t.length, f = h, m = 0;
  for (r.__k = new Array(i), a = 0; a < i; a++) (s = e[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = r.__k[a] = ci(null, s, null, null, null) : Ai(s) ? s = r.__k[a] = ci(On, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = r.__k[a] = ci(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : r.__k[a] = s, l = a + m, s.__ = r, s.__b = r.__b + 1, o = null, (d = s.__i = Sh(s, t, l, f)) != -1 && (f--, (o = t[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (i > h ? m-- : i < h && m++), typeof s.type != "function" && (s.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, s.__u |= 4))) : r.__k[a] = null;
  if (f) for (a = 0; a < h; a++) (o = t[a]) != null && (2 & o.__u) == 0 && (o.__e == n && (n = D0(o)), iu(o, o));
  return n;
}
function tu(r, e, t, n) {
  var i, a;
  if (typeof r.type == "function") {
    for (i = r.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = r, e = tu(i[a], e, t, n));
    return e;
  }
  r.__e != e && (n && (e && r.type && !e.parentNode && (e = D0(r)), t.insertBefore(r.__e, e || null)), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function F0(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (Ai(r) ? r.some(function(t) {
    F0(t, e);
  }) : e.push(r)), e;
}
function Sh(r, e, t, n) {
  var i, a, s, o = r.key, l = r.type, d = e[t], h = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || h && o == d.key && l == d.type) return t;
  if (n > (h ? 1 : 0)) {
    for (i = t - 1, a = t + 1; i >= 0 || a < e.length; ) if ((d = e[s = i >= 0 ? i-- : a++]) != null && (2 & d.__u) == 0 && o == d.key && l == d.type) return s;
  }
  return -1;
}
function gl(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || wh.test(e) ? t : t + "px";
}
function Ei(r, e, t, n, i) {
  var a, s;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof n == "string" && (r.style.cssText = n = ""), n) for (e in n) t && e in t || gl(r.style, e, "");
    if (t) for (e in t) n && t[e] == n[e] || gl(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(Jc, "$1")), s = e.toLowerCase(), e = s in r || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + a] = t, t ? n ? t[li] = n[li] : (t[li] = ro, r.addEventListener(e, a ? ps : fs, a)) : r.removeEventListener(e, a ? ps : fs, a);
  else {
    if (i == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in r) try {
      r[e] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && e[4] != "-" ? r.removeAttribute(e) : r.setAttribute(e, e == "popover" && t == 1 ? "" : t));
  }
}
function bl(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e[Xi] == null) e[Xi] = ro++;
      else if (e[Xi] < t[li]) return;
      return t(Fe.event ? Fe.event(e) : e);
    }
  };
}
function io(r, e, t, n, i, a, s, o, l, d) {
  var h, f, m, v, k, T, I, O, L, W, Y, ne, M, G, he, ce = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), a = [o = e.__e = t.__e]), (h = Fe.__b) && h(e);
  e: if (typeof ce == "function") try {
    if (O = e.props, L = ce.prototype && ce.prototype.render, W = (h = ce.contextType) && n[h.__c], Y = h ? W ? W.props.value : h.__ : n, t.__c ? I = (f = e.__c = t.__c).__ = f.__E : (L ? e.__c = f = new ce(O, Y) : (e.__c = f = new cn(O, Y), f.constructor = ce, f.render = Ch), W && W.sub(f), f.state || (f.state = {}), f.__n = n, m = f.__d = !0, f.__h = [], f._sb = []), L && f.__s == null && (f.__s = f.state), L && ce.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = Fr({}, f.__s)), Fr(f.__s, ce.getDerivedStateFromProps(O, f.__s))), v = f.props, k = f.state, f.__v = e, m) L && ce.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), L && f.componentDidMount != null && f.__h.push(f.componentDidMount);
    else {
      if (L && ce.getDerivedStateFromProps == null && O !== v && f.componentWillReceiveProps != null && f.componentWillReceiveProps(O, Y), e.__v == t.__v || !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(O, f.__s, Y) === !1) {
        e.__v != t.__v && (f.props = O, f.state = f.__s, f.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(ie) {
          ie && (ie.__ = e);
        }), sa.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
        break e;
      }
      f.componentWillUpdate != null && f.componentWillUpdate(O, f.__s, Y), L && f.componentDidUpdate != null && f.__h.push(function() {
        f.componentDidUpdate(v, k, T);
      });
    }
    if (f.context = Y, f.props = O, f.__P = r, f.__e = !1, ne = Fe.__r, M = 0, L) f.state = f.__s, f.__d = !1, ne && ne(e), h = f.render(f.props, f.state, f.context), sa.push.apply(f.__h, f._sb), f._sb = [];
    else do
      f.__d = !1, ne && ne(e), h = f.render(f.props, f.state, f.context), f.state = f.__s;
    while (f.__d && ++M < 25);
    f.state = f.__s, f.getChildContext != null && (n = Fr(Fr({}, n), f.getChildContext())), L && !m && f.getSnapshotBeforeUpdate != null && (T = f.getSnapshotBeforeUpdate(v, k)), G = h != null && h.type === On && h.key == null ? nu(h.props.children) : h, o = eu(r, Ai(G) ? G : [G], e, t, n, i, a, s, o, l, d), f.base = e.__e, e.__u &= -161, f.__h.length && s.push(f), I && (f.__E = f.__ = null);
  } catch (ie) {
    if (e.__v = null, l || a != null) if (ie.then) {
      for (e.__u |= l ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      a[a.indexOf(o)] = null, e.__e = o;
    } else {
      for (he = a.length; he--; ) no(a[he]);
      gs(e);
    }
    else e.__e = t.__e, e.__k = t.__k, ie.then || gs(e);
    Fe.__e(ie, e, t);
  }
  else a == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : o = e.__e = _h(t.__e, e, t, n, i, a, s, l, d);
  return (h = Fe.diffed) && h(e), 128 & e.__u ? void 0 : o;
}
function gs(r) {
  r && (r.__c && (r.__c.__e = !0), r.__k && r.__k.some(gs));
}
function ru(r, e, t) {
  for (var n = 0; n < t.length; n++) ao(t[n], t[++n], t[++n]);
  Fe.__c && Fe.__c(e, r), r.some(function(i) {
    try {
      r = i.__h, i.__h = [], r.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      Fe.__e(a, i.__v);
    }
  });
}
function nu(r) {
  return typeof r != "object" || r == null || r.__b > 0 ? r : Ai(r) ? r.map(nu) : r.constructor !== void 0 ? null : Fr({}, r);
}
function _h(r, e, t, n, i, a, s, o, l) {
  var d, h, f, m, v, k, T, I = t.props || aa, O = e.props, L = e.type;
  if (L == "svg" ? i = "http://www.w3.org/2000/svg" : L == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((v = a[d]) && "setAttribute" in v == !!L && (L ? v.localName == L : v.nodeType == 3)) {
      r = v, a[d] = null;
      break;
    }
  }
  if (r == null) {
    if (L == null) return document.createTextNode(O);
    r = document.createElementNS(i, L, O.is && O), o && (Fe.__m && Fe.__m(e, a), o = !1), a = null;
  }
  if (L == null) I === O || o && r.data == O || (r.data = O);
  else {
    if (a = L == "textarea" && O.defaultValue != null ? null : a && Ci.call(r.childNodes), !o && a != null) for (I = {}, d = 0; d < r.attributes.length; d++) I[(v = r.attributes[d]).name] = v.value;
    for (d in I) v = I[d], d == "dangerouslySetInnerHTML" ? f = v : d == "children" || d in O || d == "value" && "defaultValue" in O || d == "checked" && "defaultChecked" in O || Ei(r, d, null, v, i);
    for (d in O) v = O[d], d == "children" ? m = v : d == "dangerouslySetInnerHTML" ? h = v : d == "value" ? k = v : d == "checked" ? T = v : o && typeof v != "function" || I[d] === v || Ei(r, d, v, I[d], i);
    if (h) o || f && (h.__html == f.__html || h.__html == r.innerHTML) || (r.innerHTML = h.__html), e.__k = [];
    else if (f && (r.innerHTML = ""), eu(e.type == "template" ? r.content : r, Ai(m) ? m : [m], e, t, n, L == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, s, a ? a[0] : t.__k && D0(t, 0), o, l), a != null) for (d = a.length; d--; ) no(a[d]);
    o && L != "textarea" || (d = "value", L == "progress" && k == null ? r.removeAttribute("value") : k != null && (k !== r[d] || L == "progress" && !k || L == "option" && k != I[d]) && Ei(r, d, k, I[d], i), d = "checked", T != null && T != r[d] && Ei(r, d, T, I[d], i));
  }
  return r;
}
function ao(r, e, t) {
  try {
    if (typeof r == "function") {
      var n = typeof r.__u == "function";
      n && r.__u(), n && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (i) {
    Fe.__e(i, t);
  }
}
function iu(r, e, t) {
  var n, i;
  if (Fe.unmount && Fe.unmount(r), (n = r.ref) && (n.current && n.current != r.__e || ao(n, null, e)), (n = r.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (a) {
      Fe.__e(a, e);
    }
    n.base = n.__P = null;
  }
  if (n = r.__k) for (i = 0; i < n.length; i++) n[i] && iu(n[i], e, t || typeof r.type != "function");
  t || no(r.__e), r.__c = r.__ = r.__e = void 0;
}
function Ch(r, e, t) {
  return this.constructor(r, t);
}
function un(r, e, t) {
  var n, i, a, s;
  e == document && (e = document.documentElement), Fe.__ && Fe.__(r, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, a = [], s = [], io(e, r = (!n && t || e).__k = hn(On, null, [r]), i || aa, aa, e.namespaceURI, !n && t ? [t] : i ? null : e.firstChild ? Ci.call(e.childNodes) : null, a, !n && t ? t : i ? i.__e : e.firstChild, n, s), ru(a, r, s);
}
function au(r, e, t) {
  var n, i, a, s, o = Fr({}, r.props);
  for (a in r.type && r.type.defaultProps && (s = r.type.defaultProps), e) a == "key" ? n = e[a] : a == "ref" ? i = e[a] : o[a] = e[a] === void 0 && s != null ? s[a] : e[a];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? Ci.call(arguments, 2) : t), ci(r.type, o, n || r.key, i || r.ref, null);
}
function su(r) {
  function e(t) {
    var n, i;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && n.forEach(function(s) {
        s.__e = !0, ms(s);
      });
    }, this.sub = function(a) {
      n.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n && n.delete(a), s && s.call(a);
      };
    }), t.children;
  }
  return e.__c = "__cC" + Yc++, e.__ = r, e.Provider = e.__l = (e.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = e, e;
}
Ci = sa.slice, Fe = { __e: function(r, e, t, n) {
  for (var i, a, s; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(r)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(r, n || {}), s = i.__d), s) return i.__E = i;
  } catch (o) {
    r = o;
  }
  throw r;
} }, Kc = 0, cn.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Fr({}, this.state), typeof r == "function" && (r = r(Fr({}, t), this.props)), r && Fr(t, r), r != null && this.__v && (e && this._sb.push(e), ms(this));
}, cn.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), ms(this));
}, cn.prototype.render = On, Nn = [], Zc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Xc = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, oa.__r = 0, Va = Math.random().toString(8), Xi = "__d" + Va, li = "__a" + Va, Jc = /(PointerCapture)$|Capture$/i, ro = 0, fs = bl(!1), ps = bl(!0), Yc = 0;
var ou = function(r, e, t, n) {
  var i;
  e[0] = 0;
  for (var a = 1; a < e.length; a++) {
    var s = e[a++], o = e[a] ? (e[0] |= s ? 1 : 2, t[e[a++]]) : e[++a];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++a]] = o : s === 6 ? n[1][e[++a]] += o + "" : s ? (i = r.apply(o, ou(r, o, t, ["", null])), n.push(i), o[0] ? e[0] |= 2 : (e[a - 2] = 0, e[a] = i)) : n.push(o);
  }
  return n;
}, vl = /* @__PURE__ */ new Map();
function Ah(r) {
  var e = vl.get(this);
  return e || (e = /* @__PURE__ */ new Map(), vl.set(this, e)), (e = ou(this, e.get(r) || (e.set(r, e = (function(t) {
    for (var n, i, a = 1, s = "", o = "", l = [0], d = function(m) {
      a === 1 && (m || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, m, s) : a === 3 && (m || s) ? (l.push(3, m, s), a = 2) : a === 2 && s === "..." && m ? l.push(4, m, 0) : a === 2 && s && !m ? l.push(5, 0, !0, s) : a >= 5 && ((s || !m && a === 5) && (l.push(a, 0, s, i), a = 6), m && (l.push(a, m, 0, i), a = 6)), s = "";
    }, h = 0; h < t.length; h++) {
      h && (a === 1 && d(), d(h));
      for (var f = 0; f < t[h].length; f++) n = t[h][f], a === 1 ? n === "<" ? (d(), l = [l], a = 3) : s += n : a === 4 ? s === "--" && n === ">" ? (a = 1, s = "") : s = n + s[0] : o ? n === o ? o = "" : s += n : n === '"' || n === "'" ? o = n : n === ">" ? (d(), a = 1) : a && (n === "=" ? (a = 5, i = s, s = "") : n === "/" && (a < 5 || t[h][f + 1] === ">") ? (d(), a === 3 && (l = l[0]), a = l, (l = l[0]).push(2, 0, a), a = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (d(), a = 2) : s += n), a === 3 && s === "!--" && (a = 4, l = l[0]);
    }
    return d(), l;
  })(r)), e), arguments, [])).length > 1 ? e : e[0];
}
var X = Ah.bind(hn), fn, at, Ha, wl, di = 0, lu = [], St = Fe, xl = St.__b, yl = St.__r, kl = St.diffed, Sl = St.__c, _l = St.unmount, Cl = St.__;
function f0(r, e) {
  St.__h && St.__h(at, r, di || e), di = 0;
  var t = at.__H || (at.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function Ue(r) {
  return di = 1, cu(hu, r);
}
function cu(r, e, t) {
  var n = f0(fn++, 2);
  if (n.t = r, !n.__c && (n.__ = [t ? t(e) : hu(void 0, e), function(o) {
    var l = n.__N ? n.__N[0] : n.__[0], d = n.t(l, o);
    l !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = at, !at.__f)) {
    var i = function(o, l, d) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (h.every(function(m) {
        return !m.__N;
      })) return !a || a.call(this, o, l, d);
      var f = n.__c.props !== o;
      return h.some(function(m) {
        if (m.__N) {
          var v = m.__[0];
          m.__ = m.__N, m.__N = void 0, v !== m.__[0] && (f = !0);
        }
      }), a && a.call(this, o, l, d) || f;
    };
    at.__f = !0;
    var a = at.shouldComponentUpdate, s = at.componentWillUpdate;
    at.componentWillUpdate = function(o, l, d) {
      if (this.__e) {
        var h = a;
        a = void 0, i(o, l, d), a = h;
      }
      s && s.call(this, o, l, d);
    }, at.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function qt(r, e) {
  var t = f0(fn++, 3);
  !St.__s && oo(t.__H, e) && (t.__ = r, t.u = e, at.__H.__h.push(t));
}
function $h(r, e) {
  var t = f0(fn++, 4);
  !St.__s && oo(t.__H, e) && (t.__ = r, t.u = e, at.__h.push(t));
}
function De(r) {
  return di = 5, U0(function() {
    return { current: r };
  }, []);
}
function U0(r, e) {
  var t = f0(fn++, 7);
  return oo(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function Wt(r, e) {
  return di = 8, U0(function() {
    return r;
  }, e);
}
function uu(r) {
  var e = at.context[r.__c], t = f0(fn++, 9);
  return t.c = r, e ? (t.__ == null && (t.__ = !0, e.sub(at)), e.props.value) : r.__;
}
function so(r) {
  var e = f0(fn++, 10), t = Ue();
  return e.__ = r, at.componentDidCatch || (at.componentDidCatch = function(n, i) {
    e.__ && e.__(n, i), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function du() {
  var r = f0(fn++, 11);
  if (!r.__) {
    for (var e = at.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function Ih() {
  for (var r; r = lu.shift(); ) {
    var e = r.__H;
    if (r.__P && e) try {
      e.__h.some(Ji), e.__h.some(bs), e.__h = [];
    } catch (t) {
      e.__h = [], St.__e(t, r.__v);
    }
  }
}
St.__b = function(r) {
  at = null, xl && xl(r);
}, St.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), Cl && Cl(r, e);
}, St.__r = function(r) {
  yl && yl(r), fn = 0;
  var e = (at = r.__c).__H;
  e && (Ha === at ? (e.__h = [], at.__h = [], e.__.some(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.some(Ji), e.__h.some(bs), e.__h = [], fn = 0)), Ha = at;
}, St.diffed = function(r) {
  kl && kl(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (lu.push(e) !== 1 && wl === St.requestAnimationFrame || ((wl = St.requestAnimationFrame) || Th)(Ih)), e.__H.__.some(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Ha = at = null;
}, St.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.some(Ji), t.__h = t.__h.filter(function(n) {
        return !n.__ || bs(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], St.__e(n, t.__v);
    }
  }), Sl && Sl(r, e);
}, St.unmount = function(r) {
  _l && _l(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.some(function(n) {
    try {
      Ji(n);
    } catch (i) {
      e = i;
    }
  }), t.__H = void 0, e && St.__e(e, t.__v));
};
var Al = typeof requestAnimationFrame == "function";
function Th(r) {
  var e, t = function() {
    clearTimeout(n), Al && cancelAnimationFrame(e), setTimeout(r);
  }, n = setTimeout(t, 35);
  Al && (e = requestAnimationFrame(t));
}
function Ji(r) {
  var e = at, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), at = e;
}
function bs(r) {
  var e = at;
  r.__c = r.__(), at = e;
}
function oo(r, e) {
  return !r || r.length !== e.length || e.some(function(t, n) {
    return t !== r[n];
  });
}
function hu(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function fu(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function vs(r, e) {
  for (var t in r) if (t !== "__source" && !(t in e)) return !0;
  for (var n in e) if (n !== "__source" && r[n] !== e[n]) return !0;
  return !1;
}
function $l(r, e) {
  this.props = r, this.context = e;
}
function Nh(r, e) {
  function t(i) {
    var a = this.props.ref;
    return a != i.ref && a && (typeof a == "function" ? a(null) : a.current = null), e ? !e(this.props, i) || a != i.ref : vs(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = t, hn(r, i);
  }
  return n.displayName = "Memo(" + (r.displayName || r.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = r, n;
}
($l.prototype = new cn()).isPureReactComponent = !0, $l.prototype.shouldComponentUpdate = function(r, e) {
  return vs(this.props, r) || vs(this.state, e);
};
var Il = Fe.__b;
Fe.__b = function(r) {
  r.type && r.type.__f && r.ref && (r.props.ref = r.ref, r.ref = null), Il && Il(r);
};
var Mh = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Eh(r) {
  function e(t) {
    var n = fu({}, t);
    return delete n.ref, r(n, t.ref || null);
  }
  return e.$$typeof = Mh, e.render = r, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", e;
}
var zh = Fe.__e;
Fe.__e = function(r, e, t, n) {
  if (r.then) {
    for (var i, a = e; a = a.__; ) if ((i = a.__c) && i.__c) return e.__e == null && (e.__e = t.__e, e.__k = t.__k), i.__c(r, e);
  }
  zh(r, e, t, n);
};
var Tl = Fe.unmount;
function pu(r, e, t) {
  return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), r.__c.__H = null), (r = fu({}, r)).__c != null && (r.__c.__P === t && (r.__c.__P = e), r.__c.__e = !0, r.__c = null), r.__k = r.__k && r.__k.map(function(n) {
    return pu(n, e, t);
  })), r;
}
function mu(r, e, t) {
  return r && t && (r.__v = null, r.__k = r.__k && r.__k.map(function(n) {
    return mu(n, e, t);
  }), r.__c && r.__c.__P === e && (r.__e && t.appendChild(r.__e), r.__c.__e = !0, r.__c.__P = t)), r;
}
function qa() {
  this.__u = 0, this.o = null, this.__b = null;
}
function gu(r) {
  var e = r.__ && r.__.__c;
  return e && e.__a && e.__a(r);
}
function zi() {
  this.i = null, this.l = null;
}
Fe.unmount = function(r) {
  var e = r.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), Tl && Tl(r);
}, (qa.prototype = new cn()).__c = function(r, e) {
  var t = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var i = gu(n.__v), a = !1, s = function() {
    a || n.__z || (a = !0, t.__R = null, i ? i(l) : l());
  };
  t.__R = s;
  var o = t.__P;
  t.__P = null;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = mu(d, d.__c.__P, d.__c.__O);
      }
      var h;
      for (n.setState({ __a: n.__b = null }); h = n.o.pop(); ) h.__P = o, h.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), r.then(s, s);
}, qa.prototype.componentWillUnmount = function() {
  this.o = [];
}, qa.prototype.render = function(r, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = pu(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && hn(On, null, r.fallback);
  return i && (i.__u &= -33), [hn(On, null, e.__a ? null : r.children), i];
};
var Nl = function(r, e, t) {
  if (++t[1] === t[0] && r.l.delete(e), r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.l.size)) for (t = r.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    r.i = t = t[2];
  }
};
function Rh(r) {
  return this.getChildContext = function() {
    return r.context;
  }, r.children;
}
function Oh(r) {
  var e = this, t = r.h;
  if (e.componentWillUnmount = function() {
    un(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== t && e.componentWillUnmount(), !e.v) {
    for (var n = e.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    e.h = t, e.v = { nodeType: 1, parentNode: t, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, namespaceURI: t.namespaceURI, insertBefore: function(i, a) {
      this.childNodes.push(i), e.h.insertBefore(i, a);
    }, removeChild: function(i) {
      this.childNodes.splice(this.childNodes.indexOf(i) >>> 1, 1), e.h.removeChild(i);
    } };
  }
  un(hn(Rh, { context: e.context }, r.__v), e.v);
}
function bu(r, e) {
  var t = hn(Oh, { __v: r, h: e });
  return t.containerInfo = e, t;
}
(zi.prototype = new cn()).__a = function(r) {
  var e = this, t = gu(e.__v), n = e.l.get(r);
  return n[0]++, function(i) {
    var a = function() {
      e.props.revealOrder ? (n.push(i), Nl(e, r, n)) : i();
    };
    t ? t(a) : a();
  };
}, zi.prototype.render = function(r) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = F0(r.children);
  r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; ) this.l.set(e[t], this.i = [1, 0, this.i]);
  return r.children;
}, zi.prototype.componentDidUpdate = zi.prototype.componentDidMount = function() {
  var r = this;
  this.l.forEach(function(e, t) {
    Nl(r, t, e);
  });
};
var Bh = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Lh = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Dh = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Fh = /[A-Z0-9]/g, Ph = typeof document < "u", Vh = function(r) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(r);
};
cn.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(r) {
  Object.defineProperty(cn.prototype, r, { configurable: !0, get: function() {
    return this["UNSAFE_" + r];
  }, set: function(e) {
    Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e });
  } });
});
var Ml = Fe.event;
Fe.event = function(r) {
  return Ml && (r = Ml(r)), r.persist = function() {
  }, r.isPropagationStopped = function() {
    return this.cancelBubble;
  }, r.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, r.nativeEvent = r;
};
var Hh = { configurable: !0, get: function() {
  return this.class;
} }, El = Fe.vnode;
Fe.vnode = function(r) {
  typeof r.type == "string" && (function(e) {
    var t = e.props, n = e.type, i = {}, a = n.indexOf("-") == -1;
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || Ph && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "translate" && o === "no" ? o = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || Vh(t.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : Dh.test(s) && (s = l) : l = s = "oninput" : a && Lh.test(s) ? s = s.replace(Fh, "-$&").toLowerCase() : o === null && (o = void 0), l === "oninput" && i[s = l] && (s = "oninputCapture"), i[s] = o;
      }
    }
    n == "select" && (i.multiple && Array.isArray(i.value) && (i.value = F0(t.children).forEach(function(d) {
      d.props.selected = i.value.indexOf(d.props.value) != -1;
    })), i.defaultValue != null && (i.value = F0(t.children).forEach(function(d) {
      d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value;
    }))), t.class && !t.className ? (i.class = t.class, Object.defineProperty(i, "className", Hh)) : t.className && (i.class = i.className = t.className), e.props = i;
  })(r), r.$$typeof = Bh, El && El(r);
};
var zl = Fe.__r;
Fe.__r = function(r) {
  zl && zl(r), r.__c;
};
var Rl = Fe.diffed;
Fe.diffed = function(r) {
  Rl && Rl(r);
  var e = r.props, t = r.__e;
  t != null && r.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
function Hr(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function vu(r, e) {
  let t;
  const n = () => {
    if (t)
      return t;
    const i = indexedDB.open(r);
    return i.onupgradeneeded = () => i.result.createObjectStore(e), t = Hr(i), t.then((a) => {
      a.onclose = () => t = void 0;
    }, () => {
    }), t;
  };
  return (i, a) => n().then((s) => a(s.transaction(e, i).objectStore(e)));
}
let Wa;
function p0() {
  return Wa || (Wa = vu("keyval-store", "keyval")), Wa;
}
function t0(r, e = p0()) {
  return e("readonly", (t) => Hr(t.get(r)));
}
function Ol(r, e, t = p0()) {
  return t("readwrite", (n) => (n.put(e, r), Hr(n.transaction)));
}
function Ri(r, e = p0()) {
  return e("readwrite", (t) => (t.delete(r), Hr(t.transaction)));
}
function Sm(r = p0()) {
  return r("readwrite", (e) => (e.clear(), Hr(e.transaction)));
}
function lo(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Hr(r.transaction);
}
function qh(r = p0()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return Hr(e.getAllKeys());
    const t = [];
    return lo(e, (n) => t.push(n.key)).then(() => t);
  });
}
function _m(r = p0()) {
  return r("readonly", (e) => {
    if (e.getAll)
      return Hr(e.getAll());
    const t = [];
    return lo(e, (n) => t.push(n.value)).then(() => t);
  });
}
function Cm(r = p0()) {
  return r("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        Hr(e.getAllKeys()),
        Hr(e.getAll())
      ]).then(([n, i]) => n.map((a, s) => [a, i[s]]));
    const t = [];
    return lo(e, (n) => t.push([n.key, n.value])).then(() => t);
  });
}
var Yi = { exports: {} }, Wh = Yi.exports, Bl;
function Uh() {
  return Bl || (Bl = 1, (function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(Wh, (function() {
      return { fromViewportTo: function(t, n, i) {
        switch (!0) {
          case n == null:
            throw new Error('no "Position" given');
          case (typeof n.left != "number" && !(n.left instanceof Number)):
          case (typeof n.top != "number" && !(n.top instanceof Number)):
            throw new Error('invalid "Position" given');
        }
        switch (t) {
          case null:
          case void 0:
            throw new Error("no coordinate system given");
          case "viewport":
            return { left: n.left, top: n.top };
          case "document":
            return { left: n.left + window.scrollX, top: n.top + window.scrollY };
          case "local":
            switch (!0) {
              case i == null:
                throw new Error("no target element given");
              case i instanceof Element:
                var a = window.getComputedStyle(i), s = parseFloat(a.borderLeftWidth), o = parseFloat(a.borderTopWidth), l = i.getBoundingClientRect();
                return { left: n.left - l.left - s, top: n.top - l.top - o };
              default:
                throw new Error("invalid target element given");
            }
          default:
            throw new Error("invalid coordinate system given");
        }
      }, fromDocumentTo: function(t, n, i) {
        switch (!0) {
          case n == null:
            throw new Error('no "Position" given');
          case (typeof n.left != "number" && !(n.left instanceof Number)):
          case (typeof n.top != "number" && !(n.top instanceof Number)):
            throw new Error('invalid "Position" given');
        }
        switch (t) {
          case null:
          case void 0:
            throw new Error("no coordinate system given");
          case "viewport":
            return { left: n.left - window.scrollX, top: n.top - window.scrollY };
          case "document":
            return { left: n.left, top: n.top };
          case "local":
            switch (!0) {
              case i == null:
                throw new Error("no target element given");
              case i instanceof Element:
                var a = window.getComputedStyle(i), s = parseFloat(a.borderLeftWidth), o = parseFloat(a.borderTopWidth), l = i.getBoundingClientRect();
                return { left: n.left + window.scrollX - l.left - s, top: n.top + window.scrollY - l.top - o };
              default:
                throw new Error("invalid target element given");
            }
          default:
            throw new Error("invalid coordinate system given");
        }
      }, fromLocalTo: function(t, n, i) {
        switch (!0) {
          case n == null:
            throw new Error('no "Position" given');
          case (typeof n.left != "number" && !(n.left instanceof Number)):
          case (typeof n.top != "number" && !(n.top instanceof Number)):
            throw new Error('invalid "Position" given');
        }
        var a, s, o;
        switch (!0) {
          case i == null:
            throw new Error("no source element given");
          case i instanceof Element:
            var l = window.getComputedStyle(i), d = parseFloat(l.borderLeftWidth), h = parseFloat(l.borderTopWidth);
            s = (a = i.getBoundingClientRect()).left + d, o = a.top + h;
            break;
          default:
            throw new Error("invalid source element given");
        }
        switch (t) {
          case null:
          case void 0:
            throw new Error("no coordinate system given");
          case "viewport":
            return { left: n.left + s, top: n.top + o };
          case "document":
            return { left: n.left + s + window.scrollX, top: n.top + o + window.scrollY };
          case "local":
            return { left: n.left, top: n.top };
          default:
            throw new Error("invalid coordinate system given");
        }
      } };
    }));
  })(Yi)), Yi.exports;
}
var Gh = Uh();
const jh = /* @__PURE__ */ jc(Gh), Kh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "readOnly",
  "swipeToAdjacentCard",
  "Script",
  "CardWidth",
  "CardHeight",
  "SnapToGrid",
  "GridWidth",
  "GridHeight",
  "Cards",
  "Console_LineLimit",
  "Console_CharLimit",
  "Value"
]), Zh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Color",
  "Alpha",
  "dontSearch",
  "Script",
  "Widgets",
  "Value"
]), Xh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Type",
  "Variant",
  "Anchors",
  "Offsets",
  "visible",
  "Script",
  "Value",
  "showName",
  "autoHilite",
  "enabled",
  "sharedHilite",
  "Hilite",
  "IconId",
  "lockText",
  "scrolling",
  "showLines",
  "dontSearch",
  "sharedText",
  "TextAlign",
  "FontSize",
  "FontWeight",
  "Color",
  "FillColor",
  "BorderColor",
  "BorderWidth",
  "ArrowStart",
  "ArrowEnd",
  "Curvature",
  "Sides",
  "CornerRadius",
  "ImageData",
  "actualWidth",
  "actualHeight",
  "Configuration"
]);
function Ll(r, e, t, n) {
  let i, a, s, o;
  switch (!0) {
    case r[0] === "left-width":
      i = e[0], a = e[1];
      break;
    case r[0] === "left-right":
      i = e[0], a = t - e[0] - e[1];
      break;
    default:
      a = e[0], i = t - e[0] - e[1];
  }
  switch (!0) {
    case r[1] === "top-height":
      s = e[2], o = e[3];
      break;
    case r[1] === "top-bottom":
      s = e[2], o = n - e[2] - e[3];
      break;
    default:
      o = e[2], s = n - e[2] - e[3];
  }
  return { x: i, y: s, width: a, height: o };
}
function Dl(r, e, t, n, i, a, s) {
  let o, l, d, h;
  switch (!0) {
    case i[0] === "left-width":
      o = r, l = t;
      break;
    case i[0] === "left-right":
      o = r, l = a - r - t;
      break;
    default:
      o = t, l = a - r - t;
  }
  switch (!0) {
    case i[1] === "top-height":
      d = e, h = n;
      break;
    case i[1] === "top-bottom":
      d = e, h = s - e - n;
      break;
    default:
      d = n, h = s - e - n;
  }
  return [o, l, d, h];
}
function Jh(r) {
  let e = 0;
  for (const t of je(r)) {
    const n = parseInt(t.Id.replace("bc-card-", ""), 10);
    isNaN(n) || (e = Math.max(e, n));
  }
  return I1(e + 1), `bc-card-${e + 1}`;
}
function Yh(r) {
  let e = 0;
  for (const t of je(r))
    for (const n of t.Widgets) {
      const i = parseInt(n.Id.replace("bc-widget-", ""), 10);
      isNaN(i) || (e = Math.max(e, i));
    }
  return I1(e + 1), `bc-widget-${e + 1}`;
}
function Ua(r, e) {
  if (r === "deck")
    return "deck";
  const t = r.split("/"), n = je(e).find((a) => a.Id === t[0]) ?? null;
  if (n == null)
    return null;
  if (t.length === 1)
    return { Card: n };
  const i = n.Widgets.find((a) => a.Id === t[1]) ?? null;
  return i == null ? null : { Card: n, Widget: i };
}
const Qh = {
  button: { Variant: "rounded-rect", showName: !0, autoHilite: !0, enabled: !0, sharedHilite: !1 },
  field: {
    Variant: "opaque",
    lockText: !1,
    scrolling: !1,
    showLines: !1,
    dontSearch: !1,
    sharedText: !1,
    Value: ""
  },
  shape: { Variant: "rectangle", FillColor: "#ffffff", BorderColor: "#000000", BorderWidth: 1 },
  picture: { Variant: "scale-aspect-fit", ImageData: "", actualWidth: 0, actualHeight: 0, autoHilite: !1 },
  generic: {}
};
var Mn, z0, En, fr, l0, wi, P, ws, xs, Ye, wu, xu, yu, ku, Su, _u, Cu, Au, $u, Iu, Tu, Nu, Mu, Eu, zu, Ru, Ou, Bu, Lu, Du, Fu, Pu, Vu, Qi, ys, Hu, qu, Wu, Uu, Gu, ju, Ku, Zu, Xu, ii;
class ef {
  constructor() {
    Qe(this, P);
    Qe(this, Mn);
    Qe(this, z0);
    Qe(this, En, null);
    Qe(this, fr, null);
    Qe(this, l0, null);
    Qe(this, wi, null);
    Me(this, Mn, localStorage.getItem("bc-mcp-url") ?? ""), Me(this, z0, localStorage.getItem("bc-mcp-token") ?? "");
  }
  /**** setContext — called by DeckView after every render to keep state current ****/
  setContext(e) {
    var t, n;
    if (Me(this, En, e), e != null && B(this, P, ws)) {
      const i = ((t = e.getDeck().Cards[e.getCardIndex()]) == null ? void 0 : t.Name) ?? null;
      i !== B(this, wi) && (Me(this, wi, i), (n = B(this, fr)) == null || n.send(JSON.stringify({ type: "notify", event: "card_changed", cardName: i })));
    }
  }
  /**** configure — applies new settings and reconnects (persistence handled by caller) ****/
  configure(e, t) {
    Me(this, Mn, e), Me(this, z0, t), this.disconnect(), e !== "" && this.connect();
  }
  /**** connect — opens the WebSocket connection if a URL is configured ****/
  connect() {
    B(this, Mn) !== "" && ue(this, P, xs).call(this);
  }
  /**** disconnect — closes the connection and stops auto-reconnect ****/
  disconnect() {
    B(this, l0) != null && (clearTimeout(B(this, l0)), Me(this, l0, null)), B(this, fr) != null && (B(this, fr).onclose = null, B(this, fr).close(), Me(this, fr, null));
  }
  /**** connectionStatus — returns a snapshot suitable for the status tool ****/
  get connectionStatus() {
    return { connected: B(this, P, ws), url: B(this, Mn) };
  }
}
Mn = new WeakMap(), z0 = new WeakMap(), En = new WeakMap(), fr = new WeakMap(), l0 = new WeakMap(), wi = new WeakMap(), P = new WeakSet(), ws = function() {
  return B(this, fr) != null && B(this, fr).readyState === WebSocket.OPEN;
}, /**** #connect — internal: establishes the WebSocket and wires handlers ****/
xs = function() {
  const e = new WebSocket(B(this, Mn));
  e.onopen = () => {
    var i, a, s;
    const t = (i = B(this, En)) == null ? void 0 : i.getDeck(), n = ((a = B(this, En)) == null ? void 0 : a.getCardIndex()) ?? 0;
    e.send(JSON.stringify({
      type: "hello",
      accessToken: B(this, z0),
      deckName: (t == null ? void 0 : t.Name) ?? "",
      currentCard: ((s = t == null ? void 0 : t.Cards[n]) == null ? void 0 : s.Name) ?? null
    }));
  }, e.onmessage = async ({ data: t }) => {
    let n;
    try {
      n = JSON.parse(t);
    } catch {
      return;
    }
    let i = null, a = null;
    try {
      i = await ue(this, P, wu).call(this, n.method, n.params ?? {});
    } catch (s) {
      a = s.message;
    }
    e.send(JSON.stringify({ id: n.id, result: i, error: a }));
  }, e.onclose = () => {
    Me(this, fr, null), Me(this, l0, setTimeout(() => ue(this, P, xs).call(this), 3e3));
  }, e.onerror = () => {
    e.close();
  }, Me(this, fr, e);
}, Ye = function() {
  if (B(this, En) == null)
    throw new Error("no deck loaded");
  return B(this, En);
}, wu = async function(e, t) {
  switch (!0) {
    case e === "deck_get":
      return ue(this, P, xu).call(this);
    case e === "deck_patch":
      return ue(this, P, yu).call(this, t);
    case e === "deck_save":
      return ue(this, P, ku).call(this);
    case e === "list_cards":
      return ue(this, P, Su).call(this);
    case e === "list_widgets":
      return ue(this, P, _u).call(this, t);
    case e === "find":
      return ue(this, P, Cu).call(this, t);
    case e === "card_get":
      return ue(this, P, Au).call(this, t);
    case e === "card_patch":
      return ue(this, P, $u).call(this, t);
    case e === "card_add":
      return ue(this, P, Iu).call(this, t);
    case e === "card_delete":
      return ue(this, P, Tu).call(this, t);
    case e === "card_reorder":
      return ue(this, P, Nu).call(this, t);
    case e === "card_move":
      return ue(this, P, Mu).call(this, t);
    case e === "widget_get":
      return ue(this, P, Eu).call(this, t);
    case e === "widget_patch":
      return ue(this, P, zu).call(this, t);
    case e === "widget_add":
      return ue(this, P, Ru).call(this, t);
    case e === "widget_delete":
      return ue(this, P, Ou).call(this, t);
    case e === "widget_transfer":
      return ue(this, P, Bu).call(this, t);
    case e === "widget_reorder":
      return ue(this, P, Lu).call(this, t);
    case e === "widget_get_rect":
      return ue(this, P, Du).call(this, t);
    case e === "widget_set_rect":
      return ue(this, P, Fu).call(this, t);
    case e === "script_get":
      return ue(this, P, Pu).call(this, t);
    case e === "script_set":
      return ue(this, P, Vu).call(this, t);
    case e === "extras_get":
      return ue(this, P, Hu).call(this, t);
    case e === "extras_set":
      return ue(this, P, qu).call(this, t);
    case e === "extras_delete":
      return ue(this, P, Wu).call(this, t);
    case e === "live_eval":
      return ue(this, P, Uu).call(this, t);
    case e === "live_send":
      return ue(this, P, Gu).call(this, t);
    case e === "live_navigate":
      return ue(this, P, ju).call(this, t);
    case e === "live_screenshot":
      return ue(this, P, Ku).call(this);
    default:
      throw new Error(`unknown method: ${e}`);
  }
}, //--------------------------------------------------------------------------//
//                              deck handlers                                 //
//--------------------------------------------------------------------------//
xu = function() {
  const e = B(this, P, Ye).getDeck();
  return {
    Name: e.Name,
    readOnly: e.readOnly,
    swipeToAdjacentCard: e.swipeToAdjacentCard,
    Script: e.Script,
    CardWidth: e.CardWidth ?? 600,
    CardHeight: e.CardHeight ?? 450,
    SnapToGrid: e.SnapToGrid ?? !1,
    GridWidth: e.GridWidth ?? 10,
    GridHeight: e.GridHeight ?? 10
  };
}, yu = function(e) {
  const t = e.props ?? {}, n = [
    "Name",
    "readOnly",
    "swipeToAdjacentCard",
    "Script",
    "CardWidth",
    "CardHeight",
    "SnapToGrid",
    "GridWidth",
    "GridHeight"
  ];
  return B(this, P, Ye).mutateDeck((i) => {
    for (const a of n)
      a in t && (i[a] = t[a]);
  }), null;
}, ku = async function() {
  return await B(this, P, Ye).saveDeck(), null;
}, //--------------------------------------------------------------------------//
//                          navigation handlers                               //
//--------------------------------------------------------------------------//
Su = function() {
  const e = B(this, P, Ye).getDeck(), t = vi(e);
  return je(e).map((n) => {
    var a, s;
    const i = t.get(n.Id);
    return {
      id: n.Id,
      name: n.Name,
      parent_id: ((a = i == null ? void 0 : i.Parent) == null ? void 0 : a.Id) ?? null,
      depth: (i == null ? void 0 : i.Depth) ?? 0,
      path: (i == null ? void 0 : i.Path) ?? n.Name,
      widget_count: n.Widgets.length,
      child_count: ((s = n.CardList) == null ? void 0 : s.length) ?? 0,
      has_script: n.Script.trim() !== ""
    };
  });
}, _u = function(e) {
  const t = B(this, P, Ye).getDeck(), n = e.card_id, i = je(t).find((o) => o.Id === n);
  if (i == null)
    throw new Error(`card not found: ${n}`);
  const a = t.CardWidth ?? 600, s = t.CardHeight ?? 450;
  return i.Widgets.map((o) => {
    const l = Ll(
      o.Anchors,
      o.Offsets,
      a,
      s
    );
    return {
      id: o.Id,
      name: o.Name,
      type: o.Type,
      variant: o.Variant,
      visible: o.visible,
      rect: l
    };
  });
}, Cu = function(e) {
  const t = B(this, P, Ye).getDeck(), n = e.query ?? {}, i = n.scope ?? "all", a = [], s = n.namePattern ? new RegExp(n.namePattern, "i") : null, o = n.scriptContains ? new RegExp(n.scriptContains, "i") : null, l = n.valueContains, d = n.widgetType, h = (m) => (!s || s.test(m.Name)) && (!o || o.test(m.Script)), f = (m) => {
    if (d && m.Type !== d)
      return !1;
    const v = m.Value ?? "";
    return (!s || s.test(m.Name)) && (!o || o.test(m.Script)) && (!l || v.includes(l));
  };
  if (i !== "widgets")
    for (const m of je(t))
      h(m) && a.push({
        target: m.Id,
        type: "card",
        name: m.Name,
        excerpt: m.Script.slice(0, 120)
      });
  if (i !== "cards") {
    for (const m of je(t))
      for (const v of m.Widgets)
        if (f(v)) {
          const k = v.Value ?? "";
          a.push({
            target: `${m.Id}/${v.Id}`,
            type: v.Type,
            name: v.Name,
            excerpt: k || v.Script.slice(0, 120)
          });
        }
  }
  return a;
}, //--------------------------------------------------------------------------//
//                              card handlers                                 //
//--------------------------------------------------------------------------//
Au = function(e) {
  const t = ue(this, P, Zu).call(this, e.card_id);
  return {
    Name: t.Name,
    Color: t.Color ?? null,
    Alpha: t.Alpha ?? 1,
    dontSearch: t.dontSearch,
    Script: t.Script
  };
}, $u = function(e) {
  const t = e.card_id, n = e.props ?? {};
  return B(this, P, Ye).mutateDeck((i) => {
    const a = je(i).find((s) => s.Id === t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    for (const s of ["Name", "Color", "Alpha", "dontSearch", "Script"])
      s in n && (a[s] = n[s]);
    "Name" in n && (a.Name = Rn(a.Name, "Card"));
  }), null;
}, Iu = function(e) {
  const t = e.props ?? {}, n = e.index, i = e.parent_id ?? null;
  let a = "";
  return B(this, P, Ye).mutateDeck((s) => {
    a = Jh(s);
    const o = {
      Id: a,
      Name: Rn(t.Name ?? "New Card", "Card"),
      // '/' reserved
      Color: t.Color ?? null,
      Alpha: t.Alpha ?? 1,
      dontSearch: t.dontSearch ?? !1,
      Script: t.Script ?? "",
      Widgets: []
    };
    let l;
    if (i == null)
      l = s.Cards;
    else {
      const d = je(s).find((h) => h.Id === i);
      if (d == null)
        throw new Error(`parent card not found: ${i}`);
      l = d.CardList ?? (d.CardList = []);
    }
    n == null ? l.push(o) : l.splice(n, 0, o);
  }), a;
}, // deletes a card AND its whole subtree (cascade). To keep nested cards, move
// them out first with card_move.
Tu = function(e) {
  const t = e.card_id;
  return B(this, P, Ye).mutateDeck((n) => {
    const i = _r(n, t);
    if (i == null)
      throw new Error(`card not found: ${t}`);
    const a = i.findIndex((s) => s.Id === t);
    i.splice(a, 1);
  }), null;
}, // reorder a card within its own sibling list (new_index is relative to siblings)
Nu = function(e) {
  const t = e.card_id, n = e.new_index;
  return B(this, P, Ye).mutateDeck((i) => {
    const a = _r(i, t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    const s = a.findIndex((d) => d.Id === t), [o] = a.splice(s, 1), l = Math.max(0, Math.min(a.length, n));
    a.splice(l, 0, o);
  }), null;
}, // move a card (with its subtree) under a new parent (parent_id null = deck root)
Mu = function(e) {
  const t = e.card_id, n = e.parent_id ?? null, i = e.index ?? 0;
  return B(this, P, Ye).mutateDeck((a) => {
    if (!O1(a, t, n, i))
      throw new Error(`cannot move card ${t} (unknown card/parent or would create a cycle)`);
  }), null;
}, //--------------------------------------------------------------------------//
//                             widget handlers                                //
//--------------------------------------------------------------------------//
Eu = function(e) {
  const { Widget: t } = ue(this, P, Xu).call(this, e.card_id, e.widget_id);
  return { ...t };
}, zu = function(e) {
  const t = e.props ?? {};
  return B(this, P, Ye).mutateDeck((n) => {
    const { Widget: i } = ue(this, P, ii).call(this, n, e.card_id, e.widget_id);
    for (const [a, s] of Object.entries(t))
      a !== "Type" && (i[a] = s);
  }), null;
}, Ru = function(e) {
  const t = e.card_id, n = e.type, i = e.props ?? {}, a = e.rect, s = e.index;
  let o = "";
  return B(this, P, Ye).mutateDeck((l) => {
    const d = je(l).find((I) => I.Id === t);
    if (d == null)
      throw new Error(`card not found: ${t}`);
    o = Yh(l);
    const h = l.CardWidth ?? 600, f = l.CardHeight ?? 450, m = ["left-width", "top-height"], v = a ?? { x: h / 4, y: f / 4, width: h / 2, height: f / 2 }, k = Dl(
      v.x,
      v.y,
      v.width,
      v.height,
      m,
      h,
      f
    ), T = {
      // appended last ⇒ on top of the stack
      ...Qh[n] ?? {},
      ...i,
      Id: o,
      Name: i.Name ?? `${n} ${d.Widgets.length + 1}`,
      Type: n,
      Anchors: m,
      Offsets: k,
      visible: i.visible ?? !0,
      Script: i.Script ?? ""
    };
    s == null ? d.Widgets.push(T) : d.Widgets.splice(Math.max(0, Math.min(d.Widgets.length, Math.round(s))), 0, T);
  }), o;
}, Ou = function(e) {
  const t = e.card_id, n = e.widget_id;
  return B(this, P, Ye).mutateDeck((i) => {
    const a = je(i).find((o) => o.Id === t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    const s = a.Widgets.findIndex((o) => o.Id === n);
    if (s < 0)
      throw new Error(`widget not found: ${n}`);
    a.Widgets.splice(s, 1);
  }), null;
}, Bu = function(e) {
  return B(this, P, Ye).mutateDeck((t) => {
    const n = je(t).find((o) => o.Id === e.src_card_id), i = je(t).find((o) => o.Id === e.dst_card_id);
    if (n == null)
      throw new Error(`source card not found: ${e.src_card_id}`);
    if (i == null)
      throw new Error(`destination card not found: ${e.dst_card_id}`);
    const a = n.Widgets.findIndex((o) => o.Id === e.widget_id);
    if (a < 0)
      throw new Error(`widget not found: ${e.widget_id}`);
    const [s] = n.Widgets.splice(a, 1);
    i.Widgets.push(s);
  }), null;
}, Lu = function(e) {
  const t = e.card_id, n = e.widget_id, i = e.new_index;
  return B(this, P, Ye).mutateDeck((a) => {
    const s = je(a).find((h) => h.Id === t);
    if (s == null)
      throw new Error(`card not found: ${t}`);
    const o = s.Widgets.findIndex((h) => h.Id === n);
    if (o < 0)
      throw new Error(`widget not found: ${n}`);
    const [l] = s.Widgets.splice(o, 1), d = Math.max(0, Math.min(s.Widgets.length, Math.round(i)));
    s.Widgets.splice(d, 0, l);
  }), null;
}, //--------------------------------------------------------------------------//
//                            geometry handlers                               //
//--------------------------------------------------------------------------//
Du = function(e) {
  const t = B(this, P, Ye).getDeck(), { Widget: n } = ue(this, P, ii).call(this, t, e.card_id, e.widget_id);
  return { ...Ll(
    n.Anchors,
    n.Offsets,
    t.CardWidth ?? 600,
    t.CardHeight ?? 450
  ), anchors: n.Anchors };
}, Fu = function(e) {
  const t = e.rect, n = e.anchors ?? ["left-width", "top-height"];
  return B(this, P, Ye).mutateDeck((i) => {
    const { Widget: a } = ue(this, P, ii).call(this, i, e.card_id, e.widget_id), s = i.CardWidth ?? 600, o = i.CardHeight ?? 450;
    a.Anchors = n, a.Offsets = Dl(t.x, t.y, t.width, t.height, n, s, o);
  }), null;
}, //--------------------------------------------------------------------------//
//                            scripting handlers                              //
//--------------------------------------------------------------------------//
Pu = function(e) {
  const t = Ua(e.target, B(this, P, Ye).getDeck());
  if (t == null)
    throw new Error(`target not found: ${e.target}`);
  return t === "deck" ? B(this, P, Ye).getDeck().Script : "Widget" in t ? t.Widget.Script : t.Card.Script;
}, Vu = function(e) {
  const t = e.target, n = e.script;
  return B(this, P, Ye).mutateDeck((i) => {
    const a = Ua(t, i);
    if (a == null)
      throw new Error(`target not found: ${t}`);
    if (a === "deck") {
      i.Script = n;
      return;
    }
    if (!("Widget" in a)) {
      a.Card.Script = n;
      return;
    }
    a.Widget.Script = n;
  }), null;
}, //--------------------------------------------------------------------------//
//                              extras handlers                               //
//--------------------------------------------------------------------------//
Qi = function(e, t) {
  const n = Ua(e, t);
  if (n == null)
    throw new Error(`target not found: ${e}`);
  return n === "deck" ? t : "Widget" in n ? n.Widget : n.Card;
}, ys = function(e) {
  return e === "deck" ? Kh : e.includes("/") ? Xh : Zh;
}, Hu = function(e) {
  const t = e.target, n = ue(this, P, Qi).call(this, t, B(this, P, Ye).getDeck()), i = ue(this, P, ys).call(this, t), a = {};
  for (const [s, o] of Object.entries(n))
    i.has(s) || (a[s] = o);
  return a;
}, qu = function(e) {
  const t = e.target, n = e.key;
  if (ue(this, P, ys).call(this, t).has(n))
    throw new Error(`"${n}" is a reserved schema key`);
  return B(this, P, Ye).mutateDeck((i) => {
    ue(this, P, Qi).call(this, t, i)[n] = e.value;
  }), null;
}, Wu = function(e) {
  const t = e.target, n = e.key;
  return B(this, P, Ye).mutateDeck((i) => {
    delete ue(this, P, Qi).call(this, t, i)[n];
  }), null;
}, Uu = async function(e) {
  return B(this, P, Ye).evalInContext(e.expression);
}, Gu = async function(e) {
  const t = e.target, n = e.message, i = e.args ?? [], a = i.length > 0 ? ", " + i.map((s) => JSON.stringify(s)).join(", ") : "";
  return B(this, P, Ye).evalInContext(
    `Widget(${JSON.stringify(t)})?.triggered(${JSON.stringify(n)}${a})`
  );
}, ju = async function(e) {
  return B(this, P, Ye).navigate(e.card), null;
}, Ku = async function() {
  const e = globalThis.html2canvas;
  if (e == null)
    throw new Error(
      'html2canvas not found — add <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"><\/script> to the page'
    );
  const t = document.querySelector(".bc-card-canvas");
  if (t == null)
    throw new Error("card canvas element not found");
  return (await e(t, { useCORS: !0 })).toDataURL("image/png");
}, //--------------------------------------------------------------------------//
//                              private helpers                               //
//--------------------------------------------------------------------------//
Zu = function(e) {
  const t = je(B(this, P, Ye).getDeck()).find((n) => n.Id === e);
  if (t == null)
    throw new Error(`card not found: ${e}`);
  return t;
}, Xu = function(e, t) {
  return ue(this, P, ii).call(this, B(this, P, Ye).getDeck(), e, t);
}, ii = function(e, t, n) {
  const i = je(e).find((s) => s.Id === t);
  if (i == null)
    throw new Error(`card not found: ${t}`);
  const a = i.Widgets.find((s) => s.Id === n);
  if (a == null)
    throw new Error(`widget not found: ${n}`);
  return { Card: i, Widget: a };
};
function co() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var m0 = co();
function Ju(r) {
  m0 = r;
}
var s0 = { exec: () => null };
function I0(r) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), i = e[n];
    return i || (i = r(n), e[n] = i), i;
  };
}
function We(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (i, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Bt.caret, "$1"), t = t.replace(i, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var tf = ((r = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + r);
  } catch {
    return !1;
  }
})(), Bt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: I0((r) => new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: I0((r) => new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: I0((r) => new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)), headingBeginRegex: I0((r) => new RegExp(`^ {0,${r}}#`)), htmlBeginRegex: I0((r) => new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: I0((r) => new RegExp(`^ {0,${r}}>`)) }, rf = /^(?:[ \t]*(?:\n|$))+/, nf = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, af = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, $i = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, sf = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, uo = / {0,3}(?:[*+-]|\d{1,9}[.)])/, Yu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Qu = We(Yu).replace(/bull/g, uo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), of = We(Yu).replace(/bull/g, uo).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), ho = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, lf = /^[^\n]+/, fo = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, cf = We(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", fo).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), uf = We(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, uo).getRegex(), Sa = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", po = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, df = We("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", po).replace("tag", Sa).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), ed = We(ho).replace("hr", $i).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sa).getRegex(), hf = We(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ed).getRegex(), mo = { blockquote: hf, code: nf, def: cf, fences: af, heading: sf, hr: $i, html: df, lheading: Qu, list: uf, newline: rf, paragraph: ed, table: s0, text: lf }, Fl = We("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", $i).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sa).getRegex(), ff = { ...mo, lheading: of, table: Fl, paragraph: We(ho).replace("hr", $i).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Fl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Sa).getRegex() }, pf = { ...mo, html: We(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", po).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: s0, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: We(ho).replace("hr", $i).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Qu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, mf = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, gf = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, td = /^( {2,}|\\)\n(?!\s*$)/, bf = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, G0 = /[\p{P}\p{S}]/u, _a = /[\s\p{P}\p{S}]/u, go = /[^\s\p{P}\p{S}]/u, vf = We(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, _a).getRegex(), rd = /(?!~)[\p{P}\p{S}]/u, wf = /(?!~)[\s\p{P}\p{S}]/u, xf = /(?:[^\s\p{P}\p{S}]|~)/u, yf = We(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", tf ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), nd = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, kf = We(nd, "u").replace(/punct/g, G0).getRegex(), Sf = We(nd, "u").replace(/punct/g, rd).getRegex(), id = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", _f = We(id, "gu").replace(/notPunctSpace/g, go).replace(/punctSpace/g, _a).replace(/punct/g, G0).getRegex(), Cf = We(id, "gu").replace(/notPunctSpace/g, xf).replace(/punctSpace/g, wf).replace(/punct/g, rd).getRegex(), Af = We("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, go).replace(/punctSpace/g, _a).replace(/punct/g, G0).getRegex(), $f = We(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, G0).getRegex(), If = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Tf = We(If, "gu").replace(/notPunctSpace/g, go).replace(/punctSpace/g, _a).replace(/punct/g, G0).getRegex(), Nf = We(/\\(punct)/, "gu").replace(/punct/g, G0).getRegex(), Mf = We(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Ef = We(po).replace("(?:-->|$)", "-->").getRegex(), zf = We("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Ef).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), la = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Rf = We(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", la).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), ad = We(/^!?\[(label)\]\[(ref)\]/).replace("label", la).replace("ref", fo).getRegex(), sd = We(/^!?\[(ref)\](?:\[\])?/).replace("ref", fo).getRegex(), Of = We("reflink|nolink(?!\\()", "g").replace("reflink", ad).replace("nolink", sd).getRegex(), Pl = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, bo = { _backpedal: s0, anyPunctuation: Nf, autolink: Mf, blockSkip: yf, br: td, code: gf, del: s0, delLDelim: s0, delRDelim: s0, emStrongLDelim: kf, emStrongRDelimAst: _f, emStrongRDelimUnd: Af, escape: mf, link: Rf, nolink: sd, punctuation: vf, reflink: ad, reflinkSearch: Of, tag: zf, text: bf, url: s0 }, Bf = { ...bo, link: We(/^!?\[(label)\]\((.*?)\)/).replace("label", la).getRegex(), reflink: We(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", la).getRegex() }, ks = { ...bo, emStrongRDelimAst: Cf, emStrongLDelim: Sf, delLDelim: $f, delRDelim: Tf, url: We(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Pl).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: We(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Pl).getRegex() }, Lf = { ...ks, br: We(td).replace("{2,}", "*").getRegex(), text: We(ks.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Oi = { normal: mo, gfm: ff, pedantic: pf }, ti = { normal: bo, gfm: ks, breaks: Lf, pedantic: Bf }, Df = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Vl = (r) => Df[r];
function Or(r, e) {
  if (e) {
    if (Bt.escapeTest.test(r)) return r.replace(Bt.escapeReplace, Vl);
  } else if (Bt.escapeTestNoEncode.test(r)) return r.replace(Bt.escapeReplaceNoEncode, Vl);
  return r;
}
function Hl(r) {
  try {
    r = encodeURI(r).replace(Bt.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function ql(r, e) {
  var a;
  let t = r.replace(Bt.findPipe, (s, o, l) => {
    let d = !1, h = o;
    for (; --h >= 0 && l[h] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = t.split(Bt.splitPipe), i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((a = n.at(-1)) != null && a.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; i < n.length; i++) n[i] = n[i].trim().replace(Bt.slashPipe, "|");
  return n;
}
function An(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let i = 0;
  for (; i < n && r.charAt(n - i - 1) === e; )
    i++;
  return r.slice(0, n - i);
}
function Wl(r) {
  let e = r.split(`
`), t = e.length - 1;
  for (; t >= 0 && Bt.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? r : e.slice(0, t + 1).join(`
`);
}
function Ff(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function Pf(r, e = 0) {
  let t = e, n = "";
  for (let i of r) if (i === "	") {
    let a = 4 - t % 4;
    n += " ".repeat(a), t += a;
  } else n += i, t++;
  return n;
}
function Ul(r, e, t, n, i) {
  let a = e.href, s = e.title || null, o = r[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: a, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, l;
}
function Vf(r, e, t) {
  let n = r.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let i = n[1];
  return e.split(`
`).map((a) => {
    let s = a.match(t.other.beginningSpace);
    if (s === null) return a;
    let [o] = s;
    return o.length >= i.length ? a.slice(i.length) : a;
  }).join(`
`);
}
var ca = class {
  constructor(r) {
    rt(this, "options");
    rt(this, "rules");
    rt(this, "lexer");
    this.options = r || m0;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = this.options.pedantic ? e[0] : Wl(e[0]), n = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: n };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = Vf(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = An(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: An(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: An(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = An(e[0], `
`).split(`
`), n = "", i = "", a = [];
      for (; t.length > 0; ) {
        let s = !1, o = [], l;
        for (l = 0; l < t.length; l++) if (this.rules.other.blockquoteStart.test(t[l])) o.push(t[l]), s = !0;
        else if (!s) o.push(t[l]);
        else break;
        t = t.slice(l);
        let d = o.join(`
`), h = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${d}` : d, i = i ? `${i}
${h}` : h;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, a, !0), this.lexer.state.top = f, t.length === 0) break;
        let m = a.at(-1);
        if ((m == null ? void 0 : m.type) === "code") break;
        if ((m == null ? void 0 : m.type) === "blockquote") {
          let v = m, k = v.raw + `
` + t.join(`
`), T = this.blockquote(k);
          a[a.length - 1] = T, n = n.substring(0, n.length - v.raw.length) + T.raw, i = i.substring(0, i.length - v.text.length) + T.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          let v = m, k = v.raw + `
` + t.join(`
`), T = this.list(k);
          a[a.length - 1] = T, n = n.substring(0, n.length - m.raw.length) + T.raw, i = i.substring(0, i.length - v.raw.length) + T.raw, t = k.substring(a.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: a, text: i };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), n = t.length > 1, i = { type: "list", raw: "", ordered: n, start: n ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = n ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = n ? t : "[*+-]");
      let a = this.rules.other.listItemRegex(t), s = !1;
      for (; r; ) {
        let l = !1, d = "", h = "";
        if (!(e = a.exec(r)) || this.rules.block.hr.test(r)) break;
        d = e[0], r = r.substring(d.length);
        let f = Pf(e[2].split(`
`, 1)[0], e[1].length), m = r.split(`
`, 1)[0], v = !f.trim(), k = 0;
        if (this.options.pedantic ? (k = 2, h = f.trimStart()) : v ? k = e[1].length + 1 : (k = f.search(this.rules.other.nonSpaceChar), k = k > 4 ? 1 : k, h = f.slice(k), k += e[1].length), v && this.rules.other.blankLine.test(m) && (d += m + `
`, r = r.substring(m.length + 1), l = !0), !l) {
          let T = this.rules.other.nextBulletRegex(k), I = this.rules.other.hrRegex(k), O = this.rules.other.fencesBeginRegex(k), L = this.rules.other.headingBeginRegex(k), W = this.rules.other.htmlBeginRegex(k), Y = this.rules.other.blockquoteBeginRegex(k);
          for (; r; ) {
            let ne = r.split(`
`, 1)[0], M;
            if (m = ne, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), M = m) : M = m.replace(this.rules.other.tabCharGlobal, "    "), O.test(m) || L.test(m) || W.test(m) || Y.test(m) || T.test(m) || I.test(m)) break;
            if (M.search(this.rules.other.nonSpaceChar) >= k || !m.trim()) h += `
` + M.slice(k);
            else {
              if (v || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || O.test(f) || L.test(f) || I.test(f)) break;
              h += `
` + m;
            }
            v = !m.trim(), d += ne + `
`, r = r.substring(ne.length + 1), f = M.slice(k);
          }
        }
        i.loose || (s ? i.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (s = !0)), i.items.push({ type: "list_item", raw: d, task: !!this.options.gfm && this.rules.other.listIsTask.test(h), loose: !1, text: h, tokens: [] }), i.raw += d;
      }
      let o = i.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let l of i.items) {
        this.lexer.state.top = !1, l.tokens = this.lexer.blockTokens(l.text, []);
        let d = l.tokens[0];
        if (l.task && ((d == null ? void 0 : d.type) === "text" || (d == null ? void 0 : d.type) === "paragraph")) {
          l.text = l.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
          for (let f = this.lexer.inlineQueue.length - 1; f >= 0; f--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)) {
            this.lexer.inlineQueue[f].src = this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let h = this.rules.other.listTaskCheckbox.exec(l.raw);
          if (h) {
            let f = { type: "checkbox", raw: h[0] + " ", checked: h[0] !== "[ ]" };
            l.checked = f.checked, i.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = f.raw + l.tokens[0].raw, l.tokens[0].text = f.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(f)) : l.tokens.unshift({ type: "paragraph", raw: f.raw, text: f.raw, tokens: [f] }) : l.tokens.unshift(f);
          }
        } else l.task && (l.task = !1);
        if (!i.loose) {
          let h = l.tokens.filter((m) => m.type === "space"), f = h.length > 0 && h.some((m) => this.rules.other.anyLine.test(m.raw));
          i.loose = f;
        }
      }
      if (i.loose) for (let l of i.items) {
        l.loose = !0;
        for (let d of l.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return i;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) {
      let t = Wl(e[0]);
      return { type: "html", block: !0, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: An(e[0], `
`), href: n, title: i };
    }
  }
  table(r) {
    var s;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = ql(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (s = e[3]) != null && s.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: An(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? a.align.push("left") : a.align.push(null);
      for (let o = 0; o < t.length; o++) a.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: a.align[o] });
      for (let o of i) a.rows.push(ql(o, a.header.length).map((l, d) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[d] })));
      return a;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: An(e[0], `
`), depth: e[2].charAt(0) === "=" ? 1 : 2, text: t, tokens: this.lexer.inline(t) };
    }
  }
  paragraph(r) {
    let e = this.rules.block.paragraph.exec(r);
    if (e) {
      let t = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: t, tokens: this.lexer.inline(t) };
    }
  }
  text(r) {
    let e = this.rules.block.text.exec(r);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(r) {
    let e = this.rules.inline.escape.exec(r);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(r) {
    let e = this.rules.inline.tag.exec(r);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(r) {
    let e = this.rules.inline.link.exec(r);
    if (e) {
      let t = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(t)) {
        if (!this.rules.other.endAngleBracket.test(t)) return;
        let a = An(t.slice(0, -1), "\\");
        if ((t.length - a.length) % 2 === 0) return;
      } else {
        let a = Ff(e[2], "()");
        if (a === -2) return;
        if (a > -1) {
          let s = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + a;
          e[2] = e[2].substring(0, a), e[0] = e[0].substring(0, s).trim(), e[3] = "";
        }
      }
      let n = e[2], i = "";
      if (this.options.pedantic) {
        let a = this.rules.other.pedanticHrefTitle.exec(n);
        a && (n = a[1], i = a[3]);
      } else i = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), Ul(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let n = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = e[n.toLowerCase()];
      if (!i) {
        let a = t[0].charAt(0);
        return { type: "text", raw: a, text: a };
      }
      return Ul(t, i, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let n = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!n || !n[1] && !n[2] && !n[3] && !n[4] || n[4] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[3]) || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...n[0]].length - 1, a, s, o = i, l = 0, d = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * r.length + i); (n = d.exec(e)) !== null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a) continue;
        if (s = [...a].length, n[3] || n[4]) {
          o += s;
          continue;
        } else if ((n[5] || n[6]) && i % 3 && !((i + s) % 3)) {
          l += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o + l);
        let h = [...n[0]][0].length, f = r.slice(0, i + n.index + h + s);
        if (Math.min(i, s) % 2) {
          let v = f.slice(1, -1);
          return { type: "em", raw: f, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        let m = f.slice(2, -2);
        return { type: "strong", raw: f, text: m, tokens: this.lexer.inlineTokens(m) };
      }
    }
  }
  codespan(r) {
    let e = this.rules.inline.code.exec(r);
    if (e) {
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(t), i = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return n && i && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r, e, t = "") {
    let n = this.rules.inline.delLDelim.exec(r);
    if (n && (!n[1] || !t || this.rules.inline.punctuation.exec(t))) {
      let i = [...n[0]].length - 1, a, s, o = i, l = this.rules.inline.delRDelim;
      for (l.lastIndex = 0, e = e.slice(-1 * r.length + i); (n = l.exec(e)) !== null; ) {
        if (a = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !a || (s = [...a].length, s !== i)) continue;
        if (n[3] || n[4]) {
          o += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o);
        let d = [...n[0]][0].length, h = r.slice(0, i + n.index + d + s), f = h.slice(i, -i);
        return { type: "del", raw: h, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  autolink(r) {
    let e = this.rules.inline.autolink.exec(r);
    if (e) {
      let t, n;
      return e[2] === "@" ? (t = e[1], n = "mailto:" + t) : (t = e[1], n = t), { type: "link", raw: e[0], text: t, href: n, tokens: [{ type: "text", raw: t, text: t }] };
    }
  }
  url(r) {
    var t;
    let e;
    if (e = this.rules.inline.url.exec(r)) {
      let n, i;
      if (e[2] === "@") n = e[0], i = "mailto:" + n;
      else {
        let a;
        do
          a = e[0], e[0] = ((t = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : t[0]) ?? "";
        while (a !== e[0]);
        n = e[0], e[1] === "www." ? i = "http://" + e[0] : i = e[0];
      }
      return { type: "link", raw: e[0], text: n, href: i, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, Ir = class Ss {
  constructor(e) {
    rt(this, "tokens");
    rt(this, "options");
    rt(this, "state");
    rt(this, "inlineQueue");
    rt(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || m0, this.options.tokenizer = this.options.tokenizer || new ca(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: Bt, block: Oi.normal, inline: ti.normal };
    this.options.pedantic ? (t.block = Oi.pedantic, t.inline = ti.pedantic) : this.options.gfm && (t.block = Oi.gfm, this.options.breaks ? t.inline = ti.breaks : t.inline = ti.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Oi, inline: ti };
  }
  static lex(e, t) {
    return new Ss(t).lex(e);
  }
  static lexInline(e, t) {
    return new Ss(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(Bt.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var a, s, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Bt.tabCharGlobal, "    ").replace(Bt.spaceLine, ""));
    let i = 1 / 0;
    for (; e; ) {
      if (e.length < i) i = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let l;
      if ((s = (a = this.options.extensions) == null ? void 0 : a.block) != null && s.some((h) => (l = h.call({ lexer: this }, e, t)) ? (e = e.substring(l.raw.length), t.push(l), !0) : !1)) continue;
      if (l = this.tokenizer.space(e)) {
        e = e.substring(l.raw.length);
        let h = t.at(-1);
        l.raw.length === 1 && h !== void 0 ? h.raw += `
` : t.push(l);
        continue;
      }
      if (l = this.tokenizer.code(e)) {
        e = e.substring(l.raw.length);
        let h = t.at(-1);
        (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + l.raw, h.text += `
` + l.text, this.inlineQueue.at(-1).src = h.text) : t.push(l);
        continue;
      }
      if (l = this.tokenizer.fences(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.heading(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.hr(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.blockquote(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.list(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.html(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.def(e)) {
        e = e.substring(l.raw.length);
        let h = t.at(-1);
        (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + l.raw, h.text += `
` + l.raw, this.inlineQueue.at(-1).src = h.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = { href: l.href, title: l.title }, t.push(l));
        continue;
      }
      if (l = this.tokenizer.table(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      if (l = this.tokenizer.lheading(e)) {
        e = e.substring(l.raw.length), t.push(l);
        continue;
      }
      let d = e;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let h = 1 / 0, f = e.slice(1), m;
        this.options.extensions.startBlock.forEach((v) => {
          m = v.call({ lexer: this }, f), typeof m == "number" && m >= 0 && (h = Math.min(h, m));
        }), h < 1 / 0 && h >= 0 && (d = e.substring(0, h + 1));
      }
      if (this.state.top && (l = this.tokenizer.paragraph(d))) {
        let h = t.at(-1);
        n && (h == null ? void 0 : h.type) === "paragraph" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + l.raw, h.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : t.push(l), n = d.length !== e.length, e = e.substring(l.raw.length);
        continue;
      }
      if (l = this.tokenizer.text(e)) {
        e = e.substring(l.raw.length);
        let h = t.at(-1);
        (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + l.raw, h.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : t.push(l);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = !0, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    var d, h, f, m, v;
    this.tokenizer.lexer = this;
    let n = e, i = null;
    if (this.tokens.links) {
      let k = Object.keys(this.tokens.links);
      if (k.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null; ) k.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (i = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null; ) n = n.slice(0, i.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let a;
    for (; (i = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null; ) a = i[2] ? i[2].length : 0, n = n.slice(0, i.index + a) + "[" + "a".repeat(i[0].length - a - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = ((h = (d = this.options.hooks) == null ? void 0 : d.emStrongMask) == null ? void 0 : h.call({ lexer: this }, n)) ?? n;
    let s = !1, o = "", l = 1 / 0;
    for (; e; ) {
      if (e.length < l) l = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (o = ""), s = !1;
      let k;
      if ((m = (f = this.options.extensions) == null ? void 0 : f.inline) != null && m.some((I) => (k = I.call({ lexer: this }, e, t)) ? (e = e.substring(k.raw.length), t.push(k), !0) : !1)) continue;
      if (k = this.tokenizer.escape(e)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.tag(e)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.link(e)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(k.raw.length);
        let I = t.at(-1);
        k.type === "text" && (I == null ? void 0 : I.type) === "text" ? (I.raw += k.raw, I.text += k.text) : t.push(k);
        continue;
      }
      if (k = this.tokenizer.emStrong(e, n, o)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.codespan(e)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.br(e)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.del(e, n, o)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (k = this.tokenizer.autolink(e)) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      if (!this.state.inLink && (k = this.tokenizer.url(e))) {
        e = e.substring(k.raw.length), t.push(k);
        continue;
      }
      let T = e;
      if ((v = this.options.extensions) != null && v.startInline) {
        let I = 1 / 0, O = e.slice(1), L;
        this.options.extensions.startInline.forEach((W) => {
          L = W.call({ lexer: this }, O), typeof L == "number" && L >= 0 && (I = Math.min(I, L));
        }), I < 1 / 0 && I >= 0 && (T = e.substring(0, I + 1));
      }
      if (k = this.tokenizer.inlineText(T)) {
        e = e.substring(k.raw.length), k.raw.slice(-1) !== "_" && (o = k.raw.slice(-1)), s = !0;
        let I = t.at(-1);
        (I == null ? void 0 : I.type) === "text" ? (I.raw += k.raw, I.text += k.text) : t.push(k);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return t;
  }
  infiniteLoopError(e) {
    let t = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(t);
    else throw new Error(t);
  }
}, ua = class {
  constructor(r) {
    rt(this, "options");
    rt(this, "parser");
    this.options = r || m0;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var a;
    let n = (a = (e || "").match(Bt.notSpaceStart)) == null ? void 0 : a[0], i = r.replace(Bt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Or(n) + '">' + (t ? i : Or(i, !0)) + `</code></pre>
` : "<pre><code>" + (t ? i : Or(i, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: r }) {
    return `<blockquote>
${this.parser.parse(r)}</blockquote>
`;
  }
  html({ text: r }) {
    return r;
  }
  def(r) {
    return "";
  }
  heading({ tokens: r, depth: e }) {
    return `<h${e}>${this.parser.parseInline(r)}</h${e}>
`;
  }
  hr(r) {
    return `<hr>
`;
  }
  list(r) {
    let e = r.ordered, t = r.start, n = "";
    for (let s = 0; s < r.items.length; s++) {
      let o = r.items[s];
      n += this.listitem(o);
    }
    let i = e ? "ol" : "ul", a = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + i + a + `>
` + n + "</" + i + `>
`;
  }
  listitem(r) {
    return `<li>${this.parser.parse(r.tokens)}</li>
`;
  }
  checkbox({ checked: r }) {
    return "<input " + (r ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: r }) {
    return `<p>${this.parser.parseInline(r)}</p>
`;
  }
  table(r) {
    let e = "", t = "";
    for (let i = 0; i < r.header.length; i++) t += this.tablecell(r.header[i]);
    e += this.tablerow({ text: t });
    let n = "";
    for (let i = 0; i < r.rows.length; i++) {
      let a = r.rows[i];
      t = "";
      for (let s = 0; s < a.length; s++) t += this.tablecell(a[s]);
      n += this.tablerow({ text: t });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: r }) {
    return `<tr>
${r}</tr>
`;
  }
  tablecell(r) {
    let e = this.parser.parseInline(r.tokens), t = r.header ? "th" : "td";
    return (r.align ? `<${t} align="${r.align}">` : `<${t}>`) + e + `</${t}>
`;
  }
  strong({ tokens: r }) {
    return `<strong>${this.parser.parseInline(r)}</strong>`;
  }
  em({ tokens: r }) {
    return `<em>${this.parser.parseInline(r)}</em>`;
  }
  codespan({ text: r }) {
    return `<code>${Or(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), i = Hl(r);
    if (i === null) return n;
    r = i;
    let a = '<a href="' + r + '"';
    return e && (a += ' title="' + Or(e) + '"'), a += ">" + n + "</a>", a;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let i = Hl(r);
    if (i === null) return Or(t);
    r = i;
    let a = `<img src="${r}" alt="${Or(t)}"`;
    return e && (a += ` title="${Or(e)}"`), a += ">", a;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Or(r.text);
  }
}, vo = class {
  strong({ text: r }) {
    return r;
  }
  em({ text: r }) {
    return r;
  }
  codespan({ text: r }) {
    return r;
  }
  del({ text: r }) {
    return r;
  }
  html({ text: r }) {
    return r;
  }
  text({ text: r }) {
    return r;
  }
  link({ text: r }) {
    return "" + r;
  }
  image({ text: r }) {
    return "" + r;
  }
  br() {
    return "";
  }
  checkbox({ raw: r }) {
    return r;
  }
}, Tr = class _s {
  constructor(e) {
    rt(this, "options");
    rt(this, "renderer");
    rt(this, "textRenderer");
    this.options = e || m0, this.options.renderer = this.options.renderer || new ua(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new vo();
  }
  static parse(e, t) {
    return new _s(t).parse(e);
  }
  static parseInline(e, t) {
    return new _s(t).parseInline(e);
  }
  parse(e) {
    var n, i;
    this.renderer.parser = this;
    let t = "";
    for (let a = 0; a < e.length; a++) {
      let s = e[a];
      if ((i = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && i[s.type]) {
        let l = s, d = this.options.extensions.renderers[l.type].call({ parser: this }, l);
        if (d !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(l.type)) {
          t += d || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "space": {
          t += this.renderer.space(o);
          break;
        }
        case "hr": {
          t += this.renderer.hr(o);
          break;
        }
        case "heading": {
          t += this.renderer.heading(o);
          break;
        }
        case "code": {
          t += this.renderer.code(o);
          break;
        }
        case "table": {
          t += this.renderer.table(o);
          break;
        }
        case "blockquote": {
          t += this.renderer.blockquote(o);
          break;
        }
        case "list": {
          t += this.renderer.list(o);
          break;
        }
        case "checkbox": {
          t += this.renderer.checkbox(o);
          break;
        }
        case "html": {
          t += this.renderer.html(o);
          break;
        }
        case "def": {
          t += this.renderer.def(o);
          break;
        }
        case "paragraph": {
          t += this.renderer.paragraph(o);
          break;
        }
        case "text": {
          t += this.renderer.text(o);
          break;
        }
        default: {
          let l = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(l), "";
          throw new Error(l);
        }
      }
    }
    return t;
  }
  parseInline(e, t = this.renderer) {
    var i, a;
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if ((a = (i = this.options.extensions) == null ? void 0 : i.renderers) != null && a[o.type]) {
        let d = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (d !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          n += d || "";
          continue;
        }
      }
      let l = o;
      switch (l.type) {
        case "escape": {
          n += t.text(l);
          break;
        }
        case "html": {
          n += t.html(l);
          break;
        }
        case "link": {
          n += t.link(l);
          break;
        }
        case "image": {
          n += t.image(l);
          break;
        }
        case "checkbox": {
          n += t.checkbox(l);
          break;
        }
        case "strong": {
          n += t.strong(l);
          break;
        }
        case "em": {
          n += t.em(l);
          break;
        }
        case "codespan": {
          n += t.codespan(l);
          break;
        }
        case "br": {
          n += t.br(l);
          break;
        }
        case "del": {
          n += t.del(l);
          break;
        }
        case "text": {
          n += t.text(l);
          break;
        }
        default: {
          let d = 'Token with "' + l.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return n;
  }
}, Zi, ai = (Zi = class {
  constructor(r) {
    rt(this, "options");
    rt(this, "block");
    this.options = r || m0;
  }
  preprocess(r) {
    return r;
  }
  postprocess(r) {
    return r;
  }
  processAllTokens(r) {
    return r;
  }
  emStrongMask(r) {
    return r;
  }
  provideLexer(r = this.block) {
    return r ? Ir.lex : Ir.lexInline;
  }
  provideParser(r = this.block) {
    return r ? Tr.parse : Tr.parseInline;
  }
}, rt(Zi, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), rt(Zi, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Zi), od = class {
  constructor(...r) {
    rt(this, "defaults", co());
    rt(this, "options", this.setOptions);
    rt(this, "parse", this.parseMarkdown(!0));
    rt(this, "parseInline", this.parseMarkdown(!1));
    rt(this, "Parser", Tr);
    rt(this, "Renderer", ua);
    rt(this, "TextRenderer", vo);
    rt(this, "Lexer", Ir);
    rt(this, "Tokenizer", ca);
    rt(this, "Hooks", ai);
    this.use(...r);
  }
  walkTokens(r, e) {
    var n, i;
    let t = [];
    for (let a of r) switch (t = t.concat(e.call(this, a)), a.type) {
      case "table": {
        let s = a;
        for (let o of s.header) t = t.concat(this.walkTokens(o.tokens, e));
        for (let o of s.rows) for (let l of o) t = t.concat(this.walkTokens(l.tokens, e));
        break;
      }
      case "list": {
        let s = a;
        t = t.concat(this.walkTokens(s.items, e));
        break;
      }
      default: {
        let s = a;
        (i = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && i[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
          let l = s[o].flat(1 / 0);
          t = t.concat(this.walkTokens(l, e));
        }) : s.tokens && (t = t.concat(this.walkTokens(s.tokens, e)));
      }
    }
    return t;
  }
  use(...r) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return r.forEach((t) => {
      let n = { ...t };
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let a = e.renderers[i.name];
          a ? e.renderers[i.name] = function(...s) {
            let o = i.renderer.apply(this, s);
            return o === !1 && (o = a.apply(this, s)), o;
          } : e.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let a = e[i.level];
          a ? a.unshift(i.tokenizer) : e[i.level] = [i.tokenizer], i.start && (i.level === "block" ? e.startBlock ? e.startBlock.push(i.start) : e.startBlock = [i.start] : i.level === "inline" && (e.startInline ? e.startInline.push(i.start) : e.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (e.childTokens[i.name] = i.childTokens);
      }), n.extensions = e), t.renderer) {
        let i = this.defaults.renderer || new ua(this.defaults);
        for (let a in t.renderer) {
          if (!(a in i)) throw new Error(`renderer '${a}' does not exist`);
          if (["options", "parser"].includes(a)) continue;
          let s = a, o = t.renderer[s], l = i[s];
          i[s] = (...d) => {
            let h = o.apply(i, d);
            return h === !1 && (h = l.apply(i, d)), h || "";
          };
        }
        n.renderer = i;
      }
      if (t.tokenizer) {
        let i = this.defaults.tokenizer || new ca(this.defaults);
        for (let a in t.tokenizer) {
          if (!(a in i)) throw new Error(`tokenizer '${a}' does not exist`);
          if (["options", "rules", "lexer"].includes(a)) continue;
          let s = a, o = t.tokenizer[s], l = i[s];
          i[s] = (...d) => {
            let h = o.apply(i, d);
            return h === !1 && (h = l.apply(i, d)), h;
          };
        }
        n.tokenizer = i;
      }
      if (t.hooks) {
        let i = this.defaults.hooks || new ai();
        for (let a in t.hooks) {
          if (!(a in i)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let s = a, o = t.hooks[s], l = i[s];
          ai.passThroughHooks.has(a) ? i[s] = (d) => {
            if (this.defaults.async && ai.passThroughHooksRespectAsync.has(a)) return (async () => {
              let f = await o.call(i, d);
              return l.call(i, f);
            })();
            let h = o.call(i, d);
            return l.call(i, h);
          } : i[s] = (...d) => {
            if (this.defaults.async) return (async () => {
              let f = await o.apply(i, d);
              return f === !1 && (f = await l.apply(i, d)), f;
            })();
            let h = o.apply(i, d);
            return h === !1 && (h = l.apply(i, d)), h;
          };
        }
        n.hooks = i;
      }
      if (t.walkTokens) {
        let i = this.defaults.walkTokens, a = t.walkTokens;
        n.walkTokens = function(s) {
          let o = [];
          return o.push(a.call(this, s)), i && (o = o.concat(i.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return Ir.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return Tr.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, i = { ...this.defaults, ...n }, a = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && n.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = r), i.async) return (async () => {
        let s = i.hooks ? await i.hooks.preprocess(e) : e, o = await (i.hooks ? await i.hooks.provideLexer(r) : r ? Ir.lex : Ir.lexInline)(s, i), l = i.hooks ? await i.hooks.processAllTokens(o) : o;
        i.walkTokens && await Promise.all(this.walkTokens(l, i.walkTokens));
        let d = await (i.hooks ? await i.hooks.provideParser(r) : r ? Tr.parse : Tr.parseInline)(l, i);
        return i.hooks ? await i.hooks.postprocess(d) : d;
      })().catch(a);
      try {
        i.hooks && (e = i.hooks.preprocess(e));
        let s = (i.hooks ? i.hooks.provideLexer(r) : r ? Ir.lex : Ir.lexInline)(e, i);
        i.hooks && (s = i.hooks.processAllTokens(s)), i.walkTokens && this.walkTokens(s, i.walkTokens);
        let o = (i.hooks ? i.hooks.provideParser(r) : r ? Tr.parse : Tr.parseInline)(s, i);
        return i.hooks && (o = i.hooks.postprocess(o)), o;
      } catch (s) {
        return a(s);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let n = "<p>An error occurred:</p><pre>" + Or(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, h0 = new od();
function nt(r, e) {
  return h0.parse(r, e);
}
nt.options = nt.setOptions = function(r) {
  return h0.setOptions(r), nt.defaults = h0.defaults, Ju(nt.defaults), nt;
};
nt.getDefaults = co;
nt.defaults = m0;
nt.use = function(...r) {
  return h0.use(...r), nt.defaults = h0.defaults, Ju(nt.defaults), nt;
};
nt.walkTokens = function(r, e) {
  return h0.walkTokens(r, e);
};
nt.parseInline = h0.parseInline;
nt.Parser = Tr;
nt.parser = Tr.parse;
nt.Renderer = ua;
nt.TextRenderer = vo;
nt.Lexer = Ir;
nt.lexer = Ir.lex;
nt.Tokenizer = ca;
nt.Hooks = ai;
nt.parse = nt;
nt.options;
nt.setOptions;
nt.use;
nt.walkTokens;
nt.parseInline;
Tr.parse;
Ir.lex;
class ee extends Error {
  // The underlying error message without any context added.
  constructor(e, t) {
    var n = "KaTeX parse error: " + e, i, a, s = t && t.loc;
    if (s && s.start <= s.end) {
      var o = s.lexer.input;
      i = s.start, a = s.end, i === o.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
      var l = o.slice(i, a).replace(/[^]/g, "$&̲"), d;
      i > 15 ? d = "…" + o.slice(i - 15, i) : d = o.slice(0, i);
      var h;
      a + 15 < o.length ? h = o.slice(a, a + 15) + "…" : h = o.slice(a), n += d + l + h;
    }
    super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, ee.prototype), this.position = i, i != null && a != null && (this.length = a - i), this.rawMessage = e;
  }
}
var Hf = /([A-Z])/g, qf = (r) => r.replace(Hf, "-$1").toLowerCase(), Wf = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Uf = /[&><"']/g, Lt = (r) => String(r).replace(Uf, (e) => Wf[e]), ea = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? ea(r.body[0]) : r : r.type === "font" ? ea(r.body) : r, Gf = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), gn = (r) => Gf.has(ea(r).type), jf = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, Cs = {
  displayMode: {
    type: "boolean",
    description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
    cli: "-d, --display-mode"
  },
  output: {
    type: {
      enum: ["htmlAndMathml", "html", "mathml"]
    },
    description: "Determines the markup language of the output.",
    cli: "-F, --format <type>"
  },
  leqno: {
    type: "boolean",
    description: "Render display math in leqno style (left-justified tags)."
  },
  fleqn: {
    type: "boolean",
    description: "Render display math flush left."
  },
  throwOnError: {
    type: "boolean",
    default: !0,
    cli: "-t, --no-throw-on-error",
    cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
  },
  errorColor: {
    type: "string",
    default: "#cc0000",
    cli: "-c, --error-color <color>",
    cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
    cliProcessor: (r) => "#" + r
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (r, e) => (e.push(r), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (r) => Math.max(0, r),
    cli: "--min-rule-thickness <size>",
    cliProcessor: parseFloat
  },
  colorIsTextColor: {
    type: "boolean",
    description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
    cli: "-b, --color-is-text-color"
  },
  strict: {
    type: [{
      enum: ["warn", "ignore", "error"]
    }, "boolean", "function"],
    description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
    cli: "-S, --strict",
    cliDefault: !1
  },
  trust: {
    type: ["boolean", "function"],
    description: "Trust the input, enabling all HTML features such as \\url.",
    cli: "-T, --trust"
  },
  maxSize: {
    type: "number",
    default: 1 / 0,
    description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
    processor: (r) => Math.max(0, r),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (r) => Math.max(0, r),
    cli: "-e, --max-expand <n>",
    cliProcessor: (r) => r === "Infinity" ? 1 / 0 : parseInt(r)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function Kf(r) {
  if (typeof r != "string")
    return r.enum[0];
  switch (r) {
    case "boolean":
      return !1;
    case "string":
      return "";
    case "number":
      return 0;
    case "object":
      return {};
    default:
      throw new Error("Unexpected schema type; settings must declare an explicit default.");
  }
}
function Zf(r) {
  if (r.default !== void 0)
    return r.default;
  var e = Array.isArray(r.type) ? r.type[0] : r.type;
  return Kf(e);
}
function Xf(r, e, t, n) {
  var i = t[e];
  r[e] = i !== void 0 ? n.processor ? n.processor(i) : i : Zf(n);
}
class wo {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t of Object.keys(Cs)) {
      var n = Cs[t];
      n && Xf(this, t, e, n);
    }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, n) {
    var i = this.strict;
    if (typeof i == "function" && (i = i(e, t, n)), !(!i || i === "ignore")) {
      if (i === !0 || i === "error")
        throw new ee("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
      i === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + t + " [" + e + "]"));
    }
  }
  /**
   * Check whether to apply strict (LaTeX-adhering) behavior for unusual
   * input (like `\\`).  Unlike `nonstrict`, will not throw an error;
   * instead, "error" translates to a return value of `true`, while "ignore"
   * translates to a return value of `false`.  May still print a warning:
   * "warn" prints a warning and returns `false`.
   * This is for the second category of `errorCode`s listed in the README.
   */
  useStrictBehavior(e, t, n) {
    var i = this.strict;
    if (typeof i == "function")
      try {
        i = i(e, t, n);
      } catch {
        i = "error";
      }
    return !i || i === "ignore" ? !1 : i === !0 || i === "error" ? !0 : i === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + i + "': " + t + " [" + e + "]")), !1);
  }
  /**
   * Check whether to test potentially dangerous input, and return
   * `true` (trusted) or `false` (untrusted).  The sole argument `context`
   * should be an object with `command` field specifying the relevant LaTeX
   * command (as a string starting with `\`), and any other arguments, etc.
   * If `context` has a `url` field, a `protocol` field will automatically
   * get added by this function (changing the specified object).
   */
  isTrusted(e) {
    if ("url" in e && e.url && !e.protocol) {
      var t = jf(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class $n {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Dr[Jf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Dr[Yf[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Dr[Qf[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Dr[ep[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Dr[tp[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Dr[rp[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var xo = 0, da = 1, E0 = 2, dn = 3, hi = 4, pr = 5, P0 = 6, Gt = 7, Dr = [new $n(xo, 0, !1), new $n(da, 0, !0), new $n(E0, 1, !1), new $n(dn, 1, !0), new $n(hi, 2, !1), new $n(pr, 2, !0), new $n(P0, 3, !1), new $n(Gt, 3, !0)], Jf = [hi, pr, hi, pr, P0, Gt, P0, Gt], Yf = [pr, pr, pr, pr, Gt, Gt, Gt, Gt], Qf = [E0, dn, hi, pr, P0, Gt, P0, Gt], ep = [dn, dn, pr, pr, Gt, Gt, Gt, Gt], tp = [da, da, dn, dn, pr, pr, Gt, Gt], rp = [xo, da, E0, dn, E0, dn, E0, dn], Ee = {
  DISPLAY: Dr[xo],
  TEXT: Dr[E0],
  SCRIPT: Dr[hi],
  SCRIPTSCRIPT: Dr[P0]
}, As = [{
  // Latin characters beyond the Latin-1 characters we have metrics for.
  // Needed for Czech, Hungarian and Turkish text, for example.
  name: "latin",
  blocks: [
    [256, 591],
    // Latin Extended-A and Latin Extended-B
    [768, 879]
    // Combining Diacritical marks
  ]
}, {
  // The Cyrillic script used by Russian and related languages.
  // A Cyrillic subset used to be supported as explicitly defined
  // symbols in symbols.js
  name: "cyrillic",
  blocks: [[1024, 1279]]
}, {
  // Armenian
  name: "armenian",
  blocks: [[1328, 1423]]
}, {
  // The Brahmic scripts of South and Southeast Asia
  // Devanagari (0900–097F)
  // Bengali (0980–09FF)
  // Gurmukhi (0A00–0A7F)
  // Gujarati (0A80–0AFF)
  // Oriya (0B00–0B7F)
  // Tamil (0B80–0BFF)
  // Telugu (0C00–0C7F)
  // Kannada (0C80–0CFF)
  // Malayalam (0D00–0D7F)
  // Sinhala (0D80–0DFF)
  // Thai (0E00–0E7F)
  // Lao (0E80–0EFF)
  // Tibetan (0F00–0FFF)
  // Myanmar (1000–109F)
  name: "brahmic",
  blocks: [[2304, 4255]]
}, {
  name: "georgian",
  blocks: [[4256, 4351]]
}, {
  // Chinese and Japanese.
  // The "k" in cjk is for Korean, but we've separated Korean out
  name: "cjk",
  blocks: [
    [12288, 12543],
    // CJK symbols and punctuation, Hiragana, Katakana
    [19968, 40879],
    // CJK ideograms
    [65280, 65376]
    // Fullwidth punctuation
    // TODO: add halfwidth Katakana and Romanji glyphs
  ]
}, {
  // Korean
  name: "hangul",
  blocks: [[44032, 55215]]
}];
function np(r) {
  for (var e = 0; e < As.length; e++)
    for (var t = As[e], n = 0; n < t.blocks.length; n++) {
      var i = t.blocks[n];
      if (r >= i[0] && r <= i[1])
        return t.name;
    }
  return null;
}
var ta = [];
As.forEach((r) => r.blocks.forEach((e) => ta.push(...e)));
function ld(r) {
  for (var e = 0; e < ta.length; e += 2)
    if (r >= ta[e] && r <= ta[e + 1])
      return !0;
  return !1;
}
var It = (r) => r + " " + r, T0 = 80, ip = function(e, t) {
  return "M95," + (622 + e + t) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, ap = function(e, t) {
  return "M263," + (601 + e + t) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, sp = function(e, t) {
  return "M983 " + (10 + e + t) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z";
}, op = function(e, t) {
  return "M424," + (2398 + e + t) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + t + `
h400000v` + (40 + e) + "h-400000z";
}, lp = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, cp = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, up = function(e, t, n) {
  var i = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, dp = function(e, t, n) {
  t = 1e3 * t;
  var i = "";
  switch (e) {
    case "sqrtMain":
      i = ip(t, T0);
      break;
    case "sqrtSize1":
      i = ap(t, T0);
      break;
    case "sqrtSize2":
      i = sp(t, T0);
      break;
    case "sqrtSize3":
      i = op(t, T0);
      break;
    case "sqrtSize4":
      i = lp(t, T0);
      break;
    case "sqrtTall":
      i = up(t, T0, n);
  }
  return i;
}, hp = function(e, t) {
  switch (e) {
    case "⎜":
      return It("M291 0 H417 V" + t + " H291z");
    case "∣":
      return It("M145 0 H188 V" + t + " H145z");
    case "∥":
      return It("M145 0 H188 V" + t + " H145z") + It("M367 0 H410 V" + t + " H367z");
    case "⎟":
      return It("M457 0 H583 V" + t + " H457z");
    case "⎢":
      return It("M319 0 H403 V" + t + " H319z");
    case "⎥":
      return It("M263 0 H347 V" + t + " H263z");
    case "⎪":
      return It("M384 0 H504 V" + t + " H384z");
    case "⏐":
      return It("M312 0 H355 V" + t + " H312z");
    case "‖":
      return It("M257 0 H300 V" + t + " H257z") + It("M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Gl = {
  // The doubleleftarrow geometry is from glyph U+21D0 in the font KaTeX Main
  doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
  // doublerightarrow is from glyph U+21D2 in font KaTeX Main
  doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
  // leftarrow is from glyph U+2190 in font KaTeX Main
  leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
  // overbrace is from glyphs U+23A9/23A8/23A7 in font KaTeX_Size4-Regular
  leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
  leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
  // overgroup is from the MnSymbol package (public domain)
  leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
  leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
  // Harpoons are from glyph U+21BD in font KaTeX Main
  leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
  leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
  leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
  leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
  // hook is from glyph U+21A9 in font KaTeX Main
  lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
  leftlinesegment: It("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
  leftbracketunder: It("M0 0 h120 V290 H399995 v120 H0z"),
  leftbracketover: It("M0 440 h120 V150 H399995 v-120 H0z"),
  leftmapsto: It("M40 281 V448H0V74H40V241H400000v40z"),
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: It("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
  midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
  midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
  oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
  oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
  oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
  oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
  rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
  rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
  rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
  rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
  rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
  rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
  rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
  rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
  rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
  righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
  rightlinesegment: It("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
  rightbracketunder: It("M399995 0 h-120 V290 H0 v120 H400000z"),
  rightbracketover: It("M399995 440 h-120 V150 H0 v-120 H399995z"),
  rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
  // twoheadleftarrow is from glyph U+219E in font KaTeX AMS Regular
  twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
  twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
  // tilde1 is a modified version of a glyph from the MnSymbol package
  tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
  // ditto tilde2, tilde3, & tilde4
  tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
  tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
  tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
  // vec is from glyph U+20D7 in font KaTeX Main
  vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
  // widehat1 is a modified version of a glyph from the MnSymbol package
  widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
  // ditto widehat2, widehat3, & widehat4
  widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
  // widecheck paths are all inverted versions of widehat
  widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
  widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
  // The next ten paths support reaction arrows from the mhchem package.
  // Arrows for \ce{<-->} are offset from xAxis by 0.22ex, per mhchem in LaTeX
  // baraboveleftarrow is mostly from glyph U+2190 in font KaTeX Main
  baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
  // rightarrowabovebar is mostly from glyph U+2192, KaTeX Main
  rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
  // The short left harpoon has 0.5em (i.e. 500 units) kern on the left end.
  // Ref from mhchem.sty: \rlap{\raisebox{-.22ex}{$\kern0.5em
  baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
  rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
  shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
  shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
}, fp = function(e, t) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + t + " v1759 v84 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + t + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + t + ` v585 h43z
M367 15 v585 v` + t + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -t + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + t + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + t + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + t + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + t + ` v602 h84z
M403 1759 V0 H319 V1759 v` + t + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + t + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + t + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (t + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (t + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (t + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (t + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
function pp(r) {
  return "toText" in r;
}
class j0 {
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++)
      e.appendChild(this.children[t].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", t = 0; t < this.children.length; t++)
      e += this.children[t].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    return this.children.map((e) => {
      if (pp(e))
        return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var $s = {
  // https://en.wikibooks.org/wiki/LaTeX/Lengths and
  // https://tex.stackexchange.com/a/8263
  pt: 1,
  // TeX point
  mm: 7227 / 2540,
  // millimeter
  cm: 7227 / 254,
  // centimeter
  in: 72.27,
  // inch
  bp: 803 / 800,
  // big (PostScript) points
  pc: 12,
  // pica
  dd: 1238 / 1157,
  // didot
  cc: 14856 / 1157,
  // cicero (12 didot)
  nd: 685 / 642,
  // new didot
  nc: 1370 / 107,
  // new cicero (12 new didot)
  sp: 1 / 65536,
  // scaled point (TeX's internal smallest unit)
  // https://tex.stackexchange.com/a/41371
  px: 803 / 800
  // \pdfpxdimen defaults to 1 bp in pdfTeX and LuaTeX
}, mp = {
  ex: !0,
  em: !0,
  mu: !0
}, cd = function(e) {
  return typeof e != "string" && (e = e.unit), e in $s || e in mp || e === "ex";
}, mt = function(e, t) {
  var n;
  if (e.unit in $s)
    n = $s[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var i;
    if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
      n = i.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = i.fontMetrics().quad;
    else
      throw new ee("Invalid unit: '" + e.unit + "'");
    i !== t && (n *= i.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, ae = function(e) {
  return +e.toFixed(4) + "em";
}, Bn = function(e) {
  return e.filter((t) => t).join(" ");
}, yo = function(e) {
  var t = "";
  for (var n of Object.keys(e)) {
    var i = e[n];
    i !== void 0 && (t += qf(n) + ":" + i + ";");
  }
  return t;
}, ud = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var i = t.getColor();
    i && (this.style.color = i);
  }
}, dd = function(e) {
  var t = document.createElement(e);
  t.className = Bn(this.classes), Object.assign(t.style, this.style);
  for (var n of Object.keys(this.attributes))
    t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, gp = /[\s"'>/=\x00-\x1f]/, hd = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Lt(Bn(this.classes)) + '"');
  var n = yo(this.style);
  n && (t += ' style="' + Lt(n) + '"');
  for (var i of Object.keys(this.attributes)) {
    if (gp.test(i))
      throw new ee("Invalid attribute name '" + i + "'");
    t += " " + i + '="' + Lt(this.attributes[i]) + '"';
  }
  t += ">";
  for (var a = 0; a < this.children.length; a++)
    t += this.children[a].toMarkup();
  return t += "</" + e + ">", t;
};
class K0 {
  constructor(e, t, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, ud.call(this, e, n, i), this.children = t || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return dd.call(this, "span");
  }
  toMarkup() {
    return hd.call(this, "span");
  }
}
class Ca {
  constructor(e, t, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, ud.call(this, t, i), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return dd.call(this, "a");
  }
  toMarkup() {
    return hd.call(this, "a");
  }
}
class bp {
  constructor(e, t, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    return e.src = this.src, e.alt = this.alt, e.className = "mord", Object.assign(e.style, this.style), e;
  }
  toMarkup() {
    var e = '<img src="' + Lt(this.src) + '"' + (' alt="' + Lt(this.alt) + '"'), t = yo(this.style);
    return t && (e += ' style="' + Lt(t) + '"'), e += "'/>", e;
  }
}
var vp = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class rr {
  constructor(e, t, n, i, a, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = i || 0, this.skew = a || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var d = np(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = vp[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), t = null;
    return this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = ae(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Bn(this.classes)), Object.keys(this.style).length > 0 && (t = t || document.createElement("span"), Object.assign(t.style, this.style)), t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Lt(Bn(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + ae(this.italic) + ";"), n += yo(this.style), n && (e = !0, t += ' style="' + Lt(n) + '"');
    var i = Lt(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class pn {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var n of Object.keys(this.attributes))
      t.setAttribute(n, this.attributes[n]);
    for (var i = 0; i < this.children.length; i++)
      t.appendChild(this.children[i].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of Object.keys(this.attributes))
      e += " " + t + '="' + Lt(this.attributes[t]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class Ln {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Gl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + Lt(this.alternate) + '"/>' : '<path d="' + Lt(Gl[this.pathName]) + '"/>';
  }
}
class Is {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "line");
    for (var n of Object.keys(this.attributes))
      t.setAttribute(n, this.attributes[n]);
    return t;
  }
  toMarkup() {
    var e = "<line";
    for (var t of Object.keys(this.attributes))
      e += " " + t + '="' + Lt(this.attributes[t]) + '"';
    return e += "/>", e;
  }
}
function wp(r) {
  if (r instanceof rr)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function xp(r) {
  if (r instanceof K0)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var yp = (r) => r instanceof K0 || r instanceof Ca || r instanceof j0, Pr = {
  "AMS-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68889, 0, 0, 0.72222],
    66: [0, 0.68889, 0, 0, 0.66667],
    67: [0, 0.68889, 0, 0, 0.72222],
    68: [0, 0.68889, 0, 0, 0.72222],
    69: [0, 0.68889, 0, 0, 0.66667],
    70: [0, 0.68889, 0, 0, 0.61111],
    71: [0, 0.68889, 0, 0, 0.77778],
    72: [0, 0.68889, 0, 0, 0.77778],
    73: [0, 0.68889, 0, 0, 0.38889],
    74: [0.16667, 0.68889, 0, 0, 0.5],
    75: [0, 0.68889, 0, 0, 0.77778],
    76: [0, 0.68889, 0, 0, 0.66667],
    77: [0, 0.68889, 0, 0, 0.94445],
    78: [0, 0.68889, 0, 0, 0.72222],
    79: [0.16667, 0.68889, 0, 0, 0.77778],
    80: [0, 0.68889, 0, 0, 0.61111],
    81: [0.16667, 0.68889, 0, 0, 0.77778],
    82: [0, 0.68889, 0, 0, 0.72222],
    83: [0, 0.68889, 0, 0, 0.55556],
    84: [0, 0.68889, 0, 0, 0.66667],
    85: [0, 0.68889, 0, 0, 0.72222],
    86: [0, 0.68889, 0, 0, 0.72222],
    87: [0, 0.68889, 0, 0, 1],
    88: [0, 0.68889, 0, 0, 0.72222],
    89: [0, 0.68889, 0, 0, 0.72222],
    90: [0, 0.68889, 0, 0, 0.66667],
    107: [0, 0.68889, 0, 0, 0.55556],
    160: [0, 0, 0, 0, 0.25],
    165: [0, 0.675, 0.025, 0, 0.75],
    174: [0.15559, 0.69224, 0, 0, 0.94666],
    240: [0, 0.68889, 0, 0, 0.55556],
    295: [0, 0.68889, 0, 0, 0.54028],
    710: [0, 0.825, 0, 0, 2.33334],
    732: [0, 0.9, 0, 0, 2.33334],
    770: [0, 0.825, 0, 0, 2.33334],
    771: [0, 0.9, 0, 0, 2.33334],
    989: [0.08167, 0.58167, 0, 0, 0.77778],
    1008: [0, 0.43056, 0.04028, 0, 0.66667],
    8245: [0, 0.54986, 0, 0, 0.275],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8487: [0, 0.68889, 0, 0, 0.72222],
    8498: [0, 0.68889, 0, 0, 0.55556],
    8502: [0, 0.68889, 0, 0, 0.66667],
    8503: [0, 0.68889, 0, 0, 0.44445],
    8504: [0, 0.68889, 0, 0, 0.66667],
    8513: [0, 0.68889, 0, 0, 0.63889],
    8592: [-0.03598, 0.46402, 0, 0, 0.5],
    8594: [-0.03598, 0.46402, 0, 0, 0.5],
    8602: [-0.13313, 0.36687, 0, 0, 1],
    8603: [-0.13313, 0.36687, 0, 0, 1],
    8606: [0.01354, 0.52239, 0, 0, 1],
    8608: [0.01354, 0.52239, 0, 0, 1],
    8610: [0.01354, 0.52239, 0, 0, 1.11111],
    8611: [0.01354, 0.52239, 0, 0, 1.11111],
    8619: [0, 0.54986, 0, 0, 1],
    8620: [0, 0.54986, 0, 0, 1],
    8621: [-0.13313, 0.37788, 0, 0, 1.38889],
    8622: [-0.13313, 0.36687, 0, 0, 1],
    8624: [0, 0.69224, 0, 0, 0.5],
    8625: [0, 0.69224, 0, 0, 0.5],
    8630: [0, 0.43056, 0, 0, 1],
    8631: [0, 0.43056, 0, 0, 1],
    8634: [0.08198, 0.58198, 0, 0, 0.77778],
    8635: [0.08198, 0.58198, 0, 0, 0.77778],
    8638: [0.19444, 0.69224, 0, 0, 0.41667],
    8639: [0.19444, 0.69224, 0, 0, 0.41667],
    8642: [0.19444, 0.69224, 0, 0, 0.41667],
    8643: [0.19444, 0.69224, 0, 0, 0.41667],
    8644: [0.1808, 0.675, 0, 0, 1],
    8646: [0.1808, 0.675, 0, 0, 1],
    8647: [0.1808, 0.675, 0, 0, 1],
    8648: [0.19444, 0.69224, 0, 0, 0.83334],
    8649: [0.1808, 0.675, 0, 0, 1],
    8650: [0.19444, 0.69224, 0, 0, 0.83334],
    8651: [0.01354, 0.52239, 0, 0, 1],
    8652: [0.01354, 0.52239, 0, 0, 1],
    8653: [-0.13313, 0.36687, 0, 0, 1],
    8654: [-0.13313, 0.36687, 0, 0, 1],
    8655: [-0.13313, 0.36687, 0, 0, 1],
    8666: [0.13667, 0.63667, 0, 0, 1],
    8667: [0.13667, 0.63667, 0, 0, 1],
    8669: [-0.13313, 0.37788, 0, 0, 1],
    8672: [-0.064, 0.437, 0, 0, 1.334],
    8674: [-0.064, 0.437, 0, 0, 1.334],
    8705: [0, 0.825, 0, 0, 0.5],
    8708: [0, 0.68889, 0, 0, 0.55556],
    8709: [0.08167, 0.58167, 0, 0, 0.77778],
    8717: [0, 0.43056, 0, 0, 0.42917],
    8722: [-0.03598, 0.46402, 0, 0, 0.5],
    8724: [0.08198, 0.69224, 0, 0, 0.77778],
    8726: [0.08167, 0.58167, 0, 0, 0.77778],
    8733: [0, 0.69224, 0, 0, 0.77778],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8737: [0, 0.69224, 0, 0, 0.72222],
    8738: [0.03517, 0.52239, 0, 0, 0.72222],
    8739: [0.08167, 0.58167, 0, 0, 0.22222],
    8740: [0.25142, 0.74111, 0, 0, 0.27778],
    8741: [0.08167, 0.58167, 0, 0, 0.38889],
    8742: [0.25142, 0.74111, 0, 0, 0.5],
    8756: [0, 0.69224, 0, 0, 0.66667],
    8757: [0, 0.69224, 0, 0, 0.66667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8765: [-0.13313, 0.37788, 0, 0, 0.77778],
    8769: [-0.13313, 0.36687, 0, 0, 0.77778],
    8770: [-0.03625, 0.46375, 0, 0, 0.77778],
    8774: [0.30274, 0.79383, 0, 0, 0.77778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8778: [0.08167, 0.58167, 0, 0, 0.77778],
    8782: [0.06062, 0.54986, 0, 0, 0.77778],
    8783: [0.06062, 0.54986, 0, 0, 0.77778],
    8785: [0.08198, 0.58198, 0, 0, 0.77778],
    8786: [0.08198, 0.58198, 0, 0, 0.77778],
    8787: [0.08198, 0.58198, 0, 0, 0.77778],
    8790: [0, 0.69224, 0, 0, 0.77778],
    8791: [0.22958, 0.72958, 0, 0, 0.77778],
    8796: [0.08198, 0.91667, 0, 0, 0.77778],
    8806: [0.25583, 0.75583, 0, 0, 0.77778],
    8807: [0.25583, 0.75583, 0, 0, 0.77778],
    8808: [0.25142, 0.75726, 0, 0, 0.77778],
    8809: [0.25142, 0.75726, 0, 0, 0.77778],
    8812: [0.25583, 0.75583, 0, 0, 0.5],
    8814: [0.20576, 0.70576, 0, 0, 0.77778],
    8815: [0.20576, 0.70576, 0, 0, 0.77778],
    8816: [0.30274, 0.79383, 0, 0, 0.77778],
    8817: [0.30274, 0.79383, 0, 0, 0.77778],
    8818: [0.22958, 0.72958, 0, 0, 0.77778],
    8819: [0.22958, 0.72958, 0, 0, 0.77778],
    8822: [0.1808, 0.675, 0, 0, 0.77778],
    8823: [0.1808, 0.675, 0, 0, 0.77778],
    8828: [0.13667, 0.63667, 0, 0, 0.77778],
    8829: [0.13667, 0.63667, 0, 0, 0.77778],
    8830: [0.22958, 0.72958, 0, 0, 0.77778],
    8831: [0.22958, 0.72958, 0, 0, 0.77778],
    8832: [0.20576, 0.70576, 0, 0, 0.77778],
    8833: [0.20576, 0.70576, 0, 0, 0.77778],
    8840: [0.30274, 0.79383, 0, 0, 0.77778],
    8841: [0.30274, 0.79383, 0, 0, 0.77778],
    8842: [0.13597, 0.63597, 0, 0, 0.77778],
    8843: [0.13597, 0.63597, 0, 0, 0.77778],
    8847: [0.03517, 0.54986, 0, 0, 0.77778],
    8848: [0.03517, 0.54986, 0, 0, 0.77778],
    8858: [0.08198, 0.58198, 0, 0, 0.77778],
    8859: [0.08198, 0.58198, 0, 0, 0.77778],
    8861: [0.08198, 0.58198, 0, 0, 0.77778],
    8862: [0, 0.675, 0, 0, 0.77778],
    8863: [0, 0.675, 0, 0, 0.77778],
    8864: [0, 0.675, 0, 0, 0.77778],
    8865: [0, 0.675, 0, 0, 0.77778],
    8872: [0, 0.69224, 0, 0, 0.61111],
    8873: [0, 0.69224, 0, 0, 0.72222],
    8874: [0, 0.69224, 0, 0, 0.88889],
    8876: [0, 0.68889, 0, 0, 0.61111],
    8877: [0, 0.68889, 0, 0, 0.61111],
    8878: [0, 0.68889, 0, 0, 0.72222],
    8879: [0, 0.68889, 0, 0, 0.72222],
    8882: [0.03517, 0.54986, 0, 0, 0.77778],
    8883: [0.03517, 0.54986, 0, 0, 0.77778],
    8884: [0.13667, 0.63667, 0, 0, 0.77778],
    8885: [0.13667, 0.63667, 0, 0, 0.77778],
    8888: [0, 0.54986, 0, 0, 1.11111],
    8890: [0.19444, 0.43056, 0, 0, 0.55556],
    8891: [0.19444, 0.69224, 0, 0, 0.61111],
    8892: [0.19444, 0.69224, 0, 0, 0.61111],
    8901: [0, 0.54986, 0, 0, 0.27778],
    8903: [0.08167, 0.58167, 0, 0, 0.77778],
    8905: [0.08167, 0.58167, 0, 0, 0.77778],
    8906: [0.08167, 0.58167, 0, 0, 0.77778],
    8907: [0, 0.69224, 0, 0, 0.77778],
    8908: [0, 0.69224, 0, 0, 0.77778],
    8909: [-0.03598, 0.46402, 0, 0, 0.77778],
    8910: [0, 0.54986, 0, 0, 0.76042],
    8911: [0, 0.54986, 0, 0, 0.76042],
    8912: [0.03517, 0.54986, 0, 0, 0.77778],
    8913: [0.03517, 0.54986, 0, 0, 0.77778],
    8914: [0, 0.54986, 0, 0, 0.66667],
    8915: [0, 0.54986, 0, 0, 0.66667],
    8916: [0, 0.69224, 0, 0, 0.66667],
    8918: [0.0391, 0.5391, 0, 0, 0.77778],
    8919: [0.0391, 0.5391, 0, 0, 0.77778],
    8920: [0.03517, 0.54986, 0, 0, 1.33334],
    8921: [0.03517, 0.54986, 0, 0, 1.33334],
    8922: [0.38569, 0.88569, 0, 0, 0.77778],
    8923: [0.38569, 0.88569, 0, 0, 0.77778],
    8926: [0.13667, 0.63667, 0, 0, 0.77778],
    8927: [0.13667, 0.63667, 0, 0, 0.77778],
    8928: [0.30274, 0.79383, 0, 0, 0.77778],
    8929: [0.30274, 0.79383, 0, 0, 0.77778],
    8934: [0.23222, 0.74111, 0, 0, 0.77778],
    8935: [0.23222, 0.74111, 0, 0, 0.77778],
    8936: [0.23222, 0.74111, 0, 0, 0.77778],
    8937: [0.23222, 0.74111, 0, 0, 0.77778],
    8938: [0.20576, 0.70576, 0, 0, 0.77778],
    8939: [0.20576, 0.70576, 0, 0, 0.77778],
    8940: [0.30274, 0.79383, 0, 0, 0.77778],
    8941: [0.30274, 0.79383, 0, 0, 0.77778],
    8994: [0.19444, 0.69224, 0, 0, 0.77778],
    8995: [0.19444, 0.69224, 0, 0, 0.77778],
    9416: [0.15559, 0.69224, 0, 0, 0.90222],
    9484: [0, 0.69224, 0, 0, 0.5],
    9488: [0, 0.69224, 0, 0, 0.5],
    9492: [0, 0.37788, 0, 0, 0.5],
    9496: [0, 0.37788, 0, 0, 0.5],
    9585: [0.19444, 0.68889, 0, 0, 0.88889],
    9586: [0.19444, 0.74111, 0, 0, 0.88889],
    9632: [0, 0.675, 0, 0, 0.77778],
    9633: [0, 0.675, 0, 0, 0.77778],
    9650: [0, 0.54986, 0, 0, 0.72222],
    9651: [0, 0.54986, 0, 0, 0.72222],
    9654: [0.03517, 0.54986, 0, 0, 0.77778],
    9660: [0, 0.54986, 0, 0, 0.72222],
    9661: [0, 0.54986, 0, 0, 0.72222],
    9664: [0.03517, 0.54986, 0, 0, 0.77778],
    9674: [0.11111, 0.69224, 0, 0, 0.66667],
    9733: [0.19444, 0.69224, 0, 0, 0.94445],
    10003: [0, 0.69224, 0, 0, 0.83334],
    10016: [0, 0.69224, 0, 0, 0.83334],
    10731: [0.11111, 0.69224, 0, 0, 0.66667],
    10846: [0.19444, 0.75583, 0, 0, 0.61111],
    10877: [0.13667, 0.63667, 0, 0, 0.77778],
    10878: [0.13667, 0.63667, 0, 0, 0.77778],
    10885: [0.25583, 0.75583, 0, 0, 0.77778],
    10886: [0.25583, 0.75583, 0, 0, 0.77778],
    10887: [0.13597, 0.63597, 0, 0, 0.77778],
    10888: [0.13597, 0.63597, 0, 0, 0.77778],
    10889: [0.26167, 0.75726, 0, 0, 0.77778],
    10890: [0.26167, 0.75726, 0, 0, 0.77778],
    10891: [0.48256, 0.98256, 0, 0, 0.77778],
    10892: [0.48256, 0.98256, 0, 0, 0.77778],
    10901: [0.13667, 0.63667, 0, 0, 0.77778],
    10902: [0.13667, 0.63667, 0, 0, 0.77778],
    10933: [0.25142, 0.75726, 0, 0, 0.77778],
    10934: [0.25142, 0.75726, 0, 0, 0.77778],
    10935: [0.26167, 0.75726, 0, 0, 0.77778],
    10936: [0.26167, 0.75726, 0, 0, 0.77778],
    10937: [0.26167, 0.75726, 0, 0, 0.77778],
    10938: [0.26167, 0.75726, 0, 0, 0.77778],
    10949: [0.25583, 0.75583, 0, 0, 0.77778],
    10950: [0.25583, 0.75583, 0, 0, 0.77778],
    10955: [0.28481, 0.79383, 0, 0, 0.77778],
    10956: [0.28481, 0.79383, 0, 0, 0.77778],
    57350: [0.08167, 0.58167, 0, 0, 0.22222],
    57351: [0.08167, 0.58167, 0, 0, 0.38889],
    57352: [0.08167, 0.58167, 0, 0, 0.77778],
    57353: [0, 0.43056, 0.04028, 0, 0.66667],
    57356: [0.25142, 0.75726, 0, 0, 0.77778],
    57357: [0.25142, 0.75726, 0, 0, 0.77778],
    57358: [0.41951, 0.91951, 0, 0, 0.77778],
    57359: [0.30274, 0.79383, 0, 0, 0.77778],
    57360: [0.30274, 0.79383, 0, 0, 0.77778],
    57361: [0.41951, 0.91951, 0, 0, 0.77778],
    57366: [0.25142, 0.75726, 0, 0, 0.77778],
    57367: [0.25142, 0.75726, 0, 0, 0.77778],
    57368: [0.25142, 0.75726, 0, 0, 0.77778],
    57369: [0.25142, 0.75726, 0, 0, 0.77778],
    57370: [0.13597, 0.63597, 0, 0, 0.77778],
    57371: [0.13597, 0.63597, 0, 0, 0.77778]
  },
  "Caligraphic-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.68333, 0, 0.19445, 0.79847],
    66: [0, 0.68333, 0.03041, 0.13889, 0.65681],
    67: [0, 0.68333, 0.05834, 0.13889, 0.52653],
    68: [0, 0.68333, 0.02778, 0.08334, 0.77139],
    69: [0, 0.68333, 0.08944, 0.11111, 0.52778],
    70: [0, 0.68333, 0.09931, 0.11111, 0.71875],
    71: [0.09722, 0.68333, 0.0593, 0.11111, 0.59487],
    72: [0, 0.68333, 965e-5, 0.11111, 0.84452],
    73: [0, 0.68333, 0.07382, 0, 0.54452],
    74: [0.09722, 0.68333, 0.18472, 0.16667, 0.67778],
    75: [0, 0.68333, 0.01445, 0.05556, 0.76195],
    76: [0, 0.68333, 0, 0.13889, 0.68972],
    77: [0, 0.68333, 0, 0.13889, 1.2009],
    78: [0, 0.68333, 0.14736, 0.08334, 0.82049],
    79: [0, 0.68333, 0.02778, 0.11111, 0.79611],
    80: [0, 0.68333, 0.08222, 0.08334, 0.69556],
    81: [0.09722, 0.68333, 0, 0.11111, 0.81667],
    82: [0, 0.68333, 0, 0.08334, 0.8475],
    83: [0, 0.68333, 0.075, 0.13889, 0.60556],
    84: [0, 0.68333, 0.25417, 0, 0.54464],
    85: [0, 0.68333, 0.09931, 0.08334, 0.62583],
    86: [0, 0.68333, 0.08222, 0, 0.61278],
    87: [0, 0.68333, 0.08222, 0.08334, 0.98778],
    88: [0, 0.68333, 0.14643, 0.13889, 0.7133],
    89: [0.09722, 0.68333, 0.08222, 0.08334, 0.66834],
    90: [0, 0.68333, 0.07944, 0.13889, 0.72473],
    160: [0, 0, 0, 0, 0.25]
  },
  "Fraktur-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69141, 0, 0, 0.29574],
    34: [0, 0.69141, 0, 0, 0.21471],
    38: [0, 0.69141, 0, 0, 0.73786],
    39: [0, 0.69141, 0, 0, 0.21201],
    40: [0.24982, 0.74947, 0, 0, 0.38865],
    41: [0.24982, 0.74947, 0, 0, 0.38865],
    42: [0, 0.62119, 0, 0, 0.27764],
    43: [0.08319, 0.58283, 0, 0, 0.75623],
    44: [0, 0.10803, 0, 0, 0.27764],
    45: [0.08319, 0.58283, 0, 0, 0.75623],
    46: [0, 0.10803, 0, 0, 0.27764],
    47: [0.24982, 0.74947, 0, 0, 0.50181],
    48: [0, 0.47534, 0, 0, 0.50181],
    49: [0, 0.47534, 0, 0, 0.50181],
    50: [0, 0.47534, 0, 0, 0.50181],
    51: [0.18906, 0.47534, 0, 0, 0.50181],
    52: [0.18906, 0.47534, 0, 0, 0.50181],
    53: [0.18906, 0.47534, 0, 0, 0.50181],
    54: [0, 0.69141, 0, 0, 0.50181],
    55: [0.18906, 0.47534, 0, 0, 0.50181],
    56: [0, 0.69141, 0, 0, 0.50181],
    57: [0.18906, 0.47534, 0, 0, 0.50181],
    58: [0, 0.47534, 0, 0, 0.21606],
    59: [0.12604, 0.47534, 0, 0, 0.21606],
    61: [-0.13099, 0.36866, 0, 0, 0.75623],
    63: [0, 0.69141, 0, 0, 0.36245],
    65: [0, 0.69141, 0, 0, 0.7176],
    66: [0, 0.69141, 0, 0, 0.88397],
    67: [0, 0.69141, 0, 0, 0.61254],
    68: [0, 0.69141, 0, 0, 0.83158],
    69: [0, 0.69141, 0, 0, 0.66278],
    70: [0.12604, 0.69141, 0, 0, 0.61119],
    71: [0, 0.69141, 0, 0, 0.78539],
    72: [0.06302, 0.69141, 0, 0, 0.7203],
    73: [0, 0.69141, 0, 0, 0.55448],
    74: [0.12604, 0.69141, 0, 0, 0.55231],
    75: [0, 0.69141, 0, 0, 0.66845],
    76: [0, 0.69141, 0, 0, 0.66602],
    77: [0, 0.69141, 0, 0, 1.04953],
    78: [0, 0.69141, 0, 0, 0.83212],
    79: [0, 0.69141, 0, 0, 0.82699],
    80: [0.18906, 0.69141, 0, 0, 0.82753],
    81: [0.03781, 0.69141, 0, 0, 0.82699],
    82: [0, 0.69141, 0, 0, 0.82807],
    83: [0, 0.69141, 0, 0, 0.82861],
    84: [0, 0.69141, 0, 0, 0.66899],
    85: [0, 0.69141, 0, 0, 0.64576],
    86: [0, 0.69141, 0, 0, 0.83131],
    87: [0, 0.69141, 0, 0, 1.04602],
    88: [0, 0.69141, 0, 0, 0.71922],
    89: [0.18906, 0.69141, 0, 0, 0.83293],
    90: [0.12604, 0.69141, 0, 0, 0.60201],
    91: [0.24982, 0.74947, 0, 0, 0.27764],
    93: [0.24982, 0.74947, 0, 0, 0.27764],
    94: [0, 0.69141, 0, 0, 0.49965],
    97: [0, 0.47534, 0, 0, 0.50046],
    98: [0, 0.69141, 0, 0, 0.51315],
    99: [0, 0.47534, 0, 0, 0.38946],
    100: [0, 0.62119, 0, 0, 0.49857],
    101: [0, 0.47534, 0, 0, 0.40053],
    102: [0.18906, 0.69141, 0, 0, 0.32626],
    103: [0.18906, 0.47534, 0, 0, 0.5037],
    104: [0.18906, 0.69141, 0, 0, 0.52126],
    105: [0, 0.69141, 0, 0, 0.27899],
    106: [0, 0.69141, 0, 0, 0.28088],
    107: [0, 0.69141, 0, 0, 0.38946],
    108: [0, 0.69141, 0, 0, 0.27953],
    109: [0, 0.47534, 0, 0, 0.76676],
    110: [0, 0.47534, 0, 0, 0.52666],
    111: [0, 0.47534, 0, 0, 0.48885],
    112: [0.18906, 0.52396, 0, 0, 0.50046],
    113: [0.18906, 0.47534, 0, 0, 0.48912],
    114: [0, 0.47534, 0, 0, 0.38919],
    115: [0, 0.47534, 0, 0, 0.44266],
    116: [0, 0.62119, 0, 0, 0.33301],
    117: [0, 0.47534, 0, 0, 0.5172],
    118: [0, 0.52396, 0, 0, 0.5118],
    119: [0, 0.52396, 0, 0, 0.77351],
    120: [0.18906, 0.47534, 0, 0, 0.38865],
    121: [0.18906, 0.47534, 0, 0, 0.49884],
    122: [0.18906, 0.47534, 0, 0, 0.39054],
    160: [0, 0, 0, 0, 0.25],
    8216: [0, 0.69141, 0, 0, 0.21471],
    8217: [0, 0.69141, 0, 0, 0.21471],
    58112: [0, 0.62119, 0, 0, 0.49749],
    58113: [0, 0.62119, 0, 0, 0.4983],
    58114: [0.18906, 0.69141, 0, 0, 0.33328],
    58115: [0.18906, 0.69141, 0, 0, 0.32923],
    58116: [0.18906, 0.47534, 0, 0, 0.50343],
    58117: [0, 0.69141, 0, 0, 0.33301],
    58118: [0, 0.62119, 0, 0, 0.33409],
    58119: [0, 0.47534, 0, 0, 0.50073]
  },
  "Main-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.35],
    34: [0, 0.69444, 0, 0, 0.60278],
    35: [0.19444, 0.69444, 0, 0, 0.95833],
    36: [0.05556, 0.75, 0, 0, 0.575],
    37: [0.05556, 0.75, 0, 0, 0.95833],
    38: [0, 0.69444, 0, 0, 0.89444],
    39: [0, 0.69444, 0, 0, 0.31944],
    40: [0.25, 0.75, 0, 0, 0.44722],
    41: [0.25, 0.75, 0, 0, 0.44722],
    42: [0, 0.75, 0, 0, 0.575],
    43: [0.13333, 0.63333, 0, 0, 0.89444],
    44: [0.19444, 0.15556, 0, 0, 0.31944],
    45: [0, 0.44444, 0, 0, 0.38333],
    46: [0, 0.15556, 0, 0, 0.31944],
    47: [0.25, 0.75, 0, 0, 0.575],
    48: [0, 0.64444, 0, 0, 0.575],
    49: [0, 0.64444, 0, 0, 0.575],
    50: [0, 0.64444, 0, 0, 0.575],
    51: [0, 0.64444, 0, 0, 0.575],
    52: [0, 0.64444, 0, 0, 0.575],
    53: [0, 0.64444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0, 0.64444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0, 0.64444, 0, 0, 0.575],
    58: [0, 0.44444, 0, 0, 0.31944],
    59: [0.19444, 0.44444, 0, 0, 0.31944],
    60: [0.08556, 0.58556, 0, 0, 0.89444],
    61: [-0.10889, 0.39111, 0, 0, 0.89444],
    62: [0.08556, 0.58556, 0, 0, 0.89444],
    63: [0, 0.69444, 0, 0, 0.54305],
    64: [0, 0.69444, 0, 0, 0.89444],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0, 0, 0.81805],
    67: [0, 0.68611, 0, 0, 0.83055],
    68: [0, 0.68611, 0, 0, 0.88194],
    69: [0, 0.68611, 0, 0, 0.75555],
    70: [0, 0.68611, 0, 0, 0.72361],
    71: [0, 0.68611, 0, 0, 0.90416],
    72: [0, 0.68611, 0, 0, 0.9],
    73: [0, 0.68611, 0, 0, 0.43611],
    74: [0, 0.68611, 0, 0, 0.59444],
    75: [0, 0.68611, 0, 0, 0.90138],
    76: [0, 0.68611, 0, 0, 0.69166],
    77: [0, 0.68611, 0, 0, 1.09166],
    78: [0, 0.68611, 0, 0, 0.9],
    79: [0, 0.68611, 0, 0, 0.86388],
    80: [0, 0.68611, 0, 0, 0.78611],
    81: [0.19444, 0.68611, 0, 0, 0.86388],
    82: [0, 0.68611, 0, 0, 0.8625],
    83: [0, 0.68611, 0, 0, 0.63889],
    84: [0, 0.68611, 0, 0, 0.8],
    85: [0, 0.68611, 0, 0, 0.88472],
    86: [0, 0.68611, 0.01597, 0, 0.86944],
    87: [0, 0.68611, 0.01597, 0, 1.18888],
    88: [0, 0.68611, 0, 0, 0.86944],
    89: [0, 0.68611, 0.02875, 0, 0.86944],
    90: [0, 0.68611, 0, 0, 0.70277],
    91: [0.25, 0.75, 0, 0, 0.31944],
    92: [0.25, 0.75, 0, 0, 0.575],
    93: [0.25, 0.75, 0, 0, 0.31944],
    94: [0, 0.69444, 0, 0, 0.575],
    95: [0.31, 0.13444, 0.03194, 0, 0.575],
    97: [0, 0.44444, 0, 0, 0.55902],
    98: [0, 0.69444, 0, 0, 0.63889],
    99: [0, 0.44444, 0, 0, 0.51111],
    100: [0, 0.69444, 0, 0, 0.63889],
    101: [0, 0.44444, 0, 0, 0.52708],
    102: [0, 0.69444, 0.10903, 0, 0.35139],
    103: [0.19444, 0.44444, 0.01597, 0, 0.575],
    104: [0, 0.69444, 0, 0, 0.63889],
    105: [0, 0.69444, 0, 0, 0.31944],
    106: [0.19444, 0.69444, 0, 0, 0.35139],
    107: [0, 0.69444, 0, 0, 0.60694],
    108: [0, 0.69444, 0, 0, 0.31944],
    109: [0, 0.44444, 0, 0, 0.95833],
    110: [0, 0.44444, 0, 0, 0.63889],
    111: [0, 0.44444, 0, 0, 0.575],
    112: [0.19444, 0.44444, 0, 0, 0.63889],
    113: [0.19444, 0.44444, 0, 0, 0.60694],
    114: [0, 0.44444, 0, 0, 0.47361],
    115: [0, 0.44444, 0, 0, 0.45361],
    116: [0, 0.63492, 0, 0, 0.44722],
    117: [0, 0.44444, 0, 0, 0.63889],
    118: [0, 0.44444, 0.01597, 0, 0.60694],
    119: [0, 0.44444, 0.01597, 0, 0.83055],
    120: [0, 0.44444, 0, 0, 0.60694],
    121: [0.19444, 0.44444, 0.01597, 0, 0.60694],
    122: [0, 0.44444, 0, 0, 0.51111],
    123: [0.25, 0.75, 0, 0, 0.575],
    124: [0.25, 0.75, 0, 0, 0.31944],
    125: [0.25, 0.75, 0, 0, 0.575],
    126: [0.35, 0.34444, 0, 0, 0.575],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.86853],
    168: [0, 0.69444, 0, 0, 0.575],
    172: [0, 0.44444, 0, 0, 0.76666],
    176: [0, 0.69444, 0, 0, 0.86944],
    177: [0.13333, 0.63333, 0, 0, 0.89444],
    184: [0.17014, 0, 0, 0, 0.51111],
    198: [0, 0.68611, 0, 0, 1.04166],
    215: [0.13333, 0.63333, 0, 0, 0.89444],
    216: [0.04861, 0.73472, 0, 0, 0.89444],
    223: [0, 0.69444, 0, 0, 0.59722],
    230: [0, 0.44444, 0, 0, 0.83055],
    247: [0.13333, 0.63333, 0, 0, 0.89444],
    248: [0.09722, 0.54167, 0, 0, 0.575],
    305: [0, 0.44444, 0, 0, 0.31944],
    338: [0, 0.68611, 0, 0, 1.16944],
    339: [0, 0.44444, 0, 0, 0.89444],
    567: [0.19444, 0.44444, 0, 0, 0.35139],
    710: [0, 0.69444, 0, 0, 0.575],
    711: [0, 0.63194, 0, 0, 0.575],
    713: [0, 0.59611, 0, 0, 0.575],
    714: [0, 0.69444, 0, 0, 0.575],
    715: [0, 0.69444, 0, 0, 0.575],
    728: [0, 0.69444, 0, 0, 0.575],
    729: [0, 0.69444, 0, 0, 0.31944],
    730: [0, 0.69444, 0, 0, 0.86944],
    732: [0, 0.69444, 0, 0, 0.575],
    733: [0, 0.69444, 0, 0, 0.575],
    915: [0, 0.68611, 0, 0, 0.69166],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0, 0, 0.89444],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0, 0, 0.76666],
    928: [0, 0.68611, 0, 0, 0.9],
    931: [0, 0.68611, 0, 0, 0.83055],
    933: [0, 0.68611, 0, 0, 0.89444],
    934: [0, 0.68611, 0, 0, 0.83055],
    936: [0, 0.68611, 0, 0, 0.89444],
    937: [0, 0.68611, 0, 0, 0.83055],
    8211: [0, 0.44444, 0.03194, 0, 0.575],
    8212: [0, 0.44444, 0.03194, 0, 1.14999],
    8216: [0, 0.69444, 0, 0, 0.31944],
    8217: [0, 0.69444, 0, 0, 0.31944],
    8220: [0, 0.69444, 0, 0, 0.60278],
    8221: [0, 0.69444, 0, 0, 0.60278],
    8224: [0.19444, 0.69444, 0, 0, 0.51111],
    8225: [0.19444, 0.69444, 0, 0, 0.51111],
    8242: [0, 0.55556, 0, 0, 0.34444],
    8407: [0, 0.72444, 0.15486, 0, 0.575],
    8463: [0, 0.69444, 0, 0, 0.66759],
    8465: [0, 0.69444, 0, 0, 0.83055],
    8467: [0, 0.69444, 0, 0, 0.47361],
    8472: [0.19444, 0.44444, 0, 0, 0.74027],
    8476: [0, 0.69444, 0, 0, 0.83055],
    8501: [0, 0.69444, 0, 0, 0.70277],
    8592: [-0.10889, 0.39111, 0, 0, 1.14999],
    8593: [0.19444, 0.69444, 0, 0, 0.575],
    8594: [-0.10889, 0.39111, 0, 0, 1.14999],
    8595: [0.19444, 0.69444, 0, 0, 0.575],
    8596: [-0.10889, 0.39111, 0, 0, 1.14999],
    8597: [0.25, 0.75, 0, 0, 0.575],
    8598: [0.19444, 0.69444, 0, 0, 1.14999],
    8599: [0.19444, 0.69444, 0, 0, 1.14999],
    8600: [0.19444, 0.69444, 0, 0, 1.14999],
    8601: [0.19444, 0.69444, 0, 0, 1.14999],
    8636: [-0.10889, 0.39111, 0, 0, 1.14999],
    8637: [-0.10889, 0.39111, 0, 0, 1.14999],
    8640: [-0.10889, 0.39111, 0, 0, 1.14999],
    8641: [-0.10889, 0.39111, 0, 0, 1.14999],
    8656: [-0.10889, 0.39111, 0, 0, 1.14999],
    8657: [0.19444, 0.69444, 0, 0, 0.70277],
    8658: [-0.10889, 0.39111, 0, 0, 1.14999],
    8659: [0.19444, 0.69444, 0, 0, 0.70277],
    8660: [-0.10889, 0.39111, 0, 0, 1.14999],
    8661: [0.25, 0.75, 0, 0, 0.70277],
    8704: [0, 0.69444, 0, 0, 0.63889],
    8706: [0, 0.69444, 0.06389, 0, 0.62847],
    8707: [0, 0.69444, 0, 0, 0.63889],
    8709: [0.05556, 0.75, 0, 0, 0.575],
    8711: [0, 0.68611, 0, 0, 0.95833],
    8712: [0.08556, 0.58556, 0, 0, 0.76666],
    8715: [0.08556, 0.58556, 0, 0, 0.76666],
    8722: [0.13333, 0.63333, 0, 0, 0.89444],
    8723: [0.13333, 0.63333, 0, 0, 0.89444],
    8725: [0.25, 0.75, 0, 0, 0.575],
    8726: [0.25, 0.75, 0, 0, 0.575],
    8727: [-0.02778, 0.47222, 0, 0, 0.575],
    8728: [-0.02639, 0.47361, 0, 0, 0.575],
    8729: [-0.02639, 0.47361, 0, 0, 0.575],
    8730: [0.18, 0.82, 0, 0, 0.95833],
    8733: [0, 0.44444, 0, 0, 0.89444],
    8734: [0, 0.44444, 0, 0, 1.14999],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.31944],
    8741: [0.25, 0.75, 0, 0, 0.575],
    8743: [0, 0.55556, 0, 0, 0.76666],
    8744: [0, 0.55556, 0, 0, 0.76666],
    8745: [0, 0.55556, 0, 0, 0.76666],
    8746: [0, 0.55556, 0, 0, 0.76666],
    8747: [0.19444, 0.69444, 0.12778, 0, 0.56875],
    8764: [-0.10889, 0.39111, 0, 0, 0.89444],
    8768: [0.19444, 0.69444, 0, 0, 0.31944],
    8771: [222e-5, 0.50222, 0, 0, 0.89444],
    8773: [0.027, 0.638, 0, 0, 0.894],
    8776: [0.02444, 0.52444, 0, 0, 0.89444],
    8781: [222e-5, 0.50222, 0, 0, 0.89444],
    8801: [222e-5, 0.50222, 0, 0, 0.89444],
    8804: [0.19667, 0.69667, 0, 0, 0.89444],
    8805: [0.19667, 0.69667, 0, 0, 0.89444],
    8810: [0.08556, 0.58556, 0, 0, 1.14999],
    8811: [0.08556, 0.58556, 0, 0, 1.14999],
    8826: [0.08556, 0.58556, 0, 0, 0.89444],
    8827: [0.08556, 0.58556, 0, 0, 0.89444],
    8834: [0.08556, 0.58556, 0, 0, 0.89444],
    8835: [0.08556, 0.58556, 0, 0, 0.89444],
    8838: [0.19667, 0.69667, 0, 0, 0.89444],
    8839: [0.19667, 0.69667, 0, 0, 0.89444],
    8846: [0, 0.55556, 0, 0, 0.76666],
    8849: [0.19667, 0.69667, 0, 0, 0.89444],
    8850: [0.19667, 0.69667, 0, 0, 0.89444],
    8851: [0, 0.55556, 0, 0, 0.76666],
    8852: [0, 0.55556, 0, 0, 0.76666],
    8853: [0.13333, 0.63333, 0, 0, 0.89444],
    8854: [0.13333, 0.63333, 0, 0, 0.89444],
    8855: [0.13333, 0.63333, 0, 0, 0.89444],
    8856: [0.13333, 0.63333, 0, 0, 0.89444],
    8857: [0.13333, 0.63333, 0, 0, 0.89444],
    8866: [0, 0.69444, 0, 0, 0.70277],
    8867: [0, 0.69444, 0, 0, 0.70277],
    8868: [0, 0.69444, 0, 0, 0.89444],
    8869: [0, 0.69444, 0, 0, 0.89444],
    8900: [-0.02639, 0.47361, 0, 0, 0.575],
    8901: [-0.02639, 0.47361, 0, 0, 0.31944],
    8902: [-0.02778, 0.47222, 0, 0, 0.575],
    8968: [0.25, 0.75, 0, 0, 0.51111],
    8969: [0.25, 0.75, 0, 0, 0.51111],
    8970: [0.25, 0.75, 0, 0, 0.51111],
    8971: [0.25, 0.75, 0, 0, 0.51111],
    8994: [-0.13889, 0.36111, 0, 0, 1.14999],
    8995: [-0.13889, 0.36111, 0, 0, 1.14999],
    9651: [0.19444, 0.69444, 0, 0, 1.02222],
    9657: [-0.02778, 0.47222, 0, 0, 0.575],
    9661: [0.19444, 0.69444, 0, 0, 1.02222],
    9667: [-0.02778, 0.47222, 0, 0, 0.575],
    9711: [0.19444, 0.69444, 0, 0, 1.14999],
    9824: [0.12963, 0.69444, 0, 0, 0.89444],
    9825: [0.12963, 0.69444, 0, 0, 0.89444],
    9826: [0.12963, 0.69444, 0, 0, 0.89444],
    9827: [0.12963, 0.69444, 0, 0, 0.89444],
    9837: [0, 0.75, 0, 0, 0.44722],
    9838: [0.19444, 0.69444, 0, 0, 0.44722],
    9839: [0.19444, 0.69444, 0, 0, 0.44722],
    10216: [0.25, 0.75, 0, 0, 0.44722],
    10217: [0.25, 0.75, 0, 0, 0.44722],
    10815: [0, 0.68611, 0, 0, 0.9],
    10927: [0.19667, 0.69667, 0, 0, 0.89444],
    10928: [0.19667, 0.69667, 0, 0, 0.89444],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Main-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.11417, 0, 0.38611],
    34: [0, 0.69444, 0.07939, 0, 0.62055],
    35: [0.19444, 0.69444, 0.06833, 0, 0.94444],
    37: [0.05556, 0.75, 0.12861, 0, 0.94444],
    38: [0, 0.69444, 0.08528, 0, 0.88555],
    39: [0, 0.69444, 0.12945, 0, 0.35555],
    40: [0.25, 0.75, 0.15806, 0, 0.47333],
    41: [0.25, 0.75, 0.03306, 0, 0.47333],
    42: [0, 0.75, 0.14333, 0, 0.59111],
    43: [0.10333, 0.60333, 0.03306, 0, 0.88555],
    44: [0.19444, 0.14722, 0, 0, 0.35555],
    45: [0, 0.44444, 0.02611, 0, 0.41444],
    46: [0, 0.14722, 0, 0, 0.35555],
    47: [0.25, 0.75, 0.15806, 0, 0.59111],
    48: [0, 0.64444, 0.13167, 0, 0.59111],
    49: [0, 0.64444, 0.13167, 0, 0.59111],
    50: [0, 0.64444, 0.13167, 0, 0.59111],
    51: [0, 0.64444, 0.13167, 0, 0.59111],
    52: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    53: [0, 0.64444, 0.13167, 0, 0.59111],
    54: [0, 0.64444, 0.13167, 0, 0.59111],
    55: [0.19444, 0.64444, 0.13167, 0, 0.59111],
    56: [0, 0.64444, 0.13167, 0, 0.59111],
    57: [0, 0.64444, 0.13167, 0, 0.59111],
    58: [0, 0.44444, 0.06695, 0, 0.35555],
    59: [0.19444, 0.44444, 0.06695, 0, 0.35555],
    61: [-0.10889, 0.39111, 0.06833, 0, 0.88555],
    63: [0, 0.69444, 0.11472, 0, 0.59111],
    64: [0, 0.69444, 0.09208, 0, 0.88555],
    65: [0, 0.68611, 0, 0, 0.86555],
    66: [0, 0.68611, 0.0992, 0, 0.81666],
    67: [0, 0.68611, 0.14208, 0, 0.82666],
    68: [0, 0.68611, 0.09062, 0, 0.87555],
    69: [0, 0.68611, 0.11431, 0, 0.75666],
    70: [0, 0.68611, 0.12903, 0, 0.72722],
    71: [0, 0.68611, 0.07347, 0, 0.89527],
    72: [0, 0.68611, 0.17208, 0, 0.8961],
    73: [0, 0.68611, 0.15681, 0, 0.47166],
    74: [0, 0.68611, 0.145, 0, 0.61055],
    75: [0, 0.68611, 0.14208, 0, 0.89499],
    76: [0, 0.68611, 0, 0, 0.69777],
    77: [0, 0.68611, 0.17208, 0, 1.07277],
    78: [0, 0.68611, 0.17208, 0, 0.8961],
    79: [0, 0.68611, 0.09062, 0, 0.85499],
    80: [0, 0.68611, 0.0992, 0, 0.78721],
    81: [0.19444, 0.68611, 0.09062, 0, 0.85499],
    82: [0, 0.68611, 0.02559, 0, 0.85944],
    83: [0, 0.68611, 0.11264, 0, 0.64999],
    84: [0, 0.68611, 0.12903, 0, 0.7961],
    85: [0, 0.68611, 0.17208, 0, 0.88083],
    86: [0, 0.68611, 0.18625, 0, 0.86555],
    87: [0, 0.68611, 0.18625, 0, 1.15999],
    88: [0, 0.68611, 0.15681, 0, 0.86555],
    89: [0, 0.68611, 0.19803, 0, 0.86555],
    90: [0, 0.68611, 0.14208, 0, 0.70888],
    91: [0.25, 0.75, 0.1875, 0, 0.35611],
    93: [0.25, 0.75, 0.09972, 0, 0.35611],
    94: [0, 0.69444, 0.06709, 0, 0.59111],
    95: [0.31, 0.13444, 0.09811, 0, 0.59111],
    97: [0, 0.44444, 0.09426, 0, 0.59111],
    98: [0, 0.69444, 0.07861, 0, 0.53222],
    99: [0, 0.44444, 0.05222, 0, 0.53222],
    100: [0, 0.69444, 0.10861, 0, 0.59111],
    101: [0, 0.44444, 0.085, 0, 0.53222],
    102: [0.19444, 0.69444, 0.21778, 0, 0.4],
    103: [0.19444, 0.44444, 0.105, 0, 0.53222],
    104: [0, 0.69444, 0.09426, 0, 0.59111],
    105: [0, 0.69326, 0.11387, 0, 0.35555],
    106: [0.19444, 0.69326, 0.1672, 0, 0.35555],
    107: [0, 0.69444, 0.11111, 0, 0.53222],
    108: [0, 0.69444, 0.10861, 0, 0.29666],
    109: [0, 0.44444, 0.09426, 0, 0.94444],
    110: [0, 0.44444, 0.09426, 0, 0.64999],
    111: [0, 0.44444, 0.07861, 0, 0.59111],
    112: [0.19444, 0.44444, 0.07861, 0, 0.59111],
    113: [0.19444, 0.44444, 0.105, 0, 0.53222],
    114: [0, 0.44444, 0.11111, 0, 0.50167],
    115: [0, 0.44444, 0.08167, 0, 0.48694],
    116: [0, 0.63492, 0.09639, 0, 0.385],
    117: [0, 0.44444, 0.09426, 0, 0.62055],
    118: [0, 0.44444, 0.11111, 0, 0.53222],
    119: [0, 0.44444, 0.11111, 0, 0.76777],
    120: [0, 0.44444, 0.12583, 0, 0.56055],
    121: [0.19444, 0.44444, 0.105, 0, 0.56166],
    122: [0, 0.44444, 0.13889, 0, 0.49055],
    126: [0.35, 0.34444, 0.11472, 0, 0.59111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0.11473, 0, 0.59111],
    176: [0, 0.69444, 0, 0, 0.94888],
    184: [0.17014, 0, 0, 0, 0.53222],
    198: [0, 0.68611, 0.11431, 0, 1.02277],
    216: [0.04861, 0.73472, 0.09062, 0, 0.88555],
    223: [0.19444, 0.69444, 0.09736, 0, 0.665],
    230: [0, 0.44444, 0.085, 0, 0.82666],
    248: [0.09722, 0.54167, 0.09458, 0, 0.59111],
    305: [0, 0.44444, 0.09426, 0, 0.35555],
    338: [0, 0.68611, 0.11431, 0, 1.14054],
    339: [0, 0.44444, 0.085, 0, 0.82666],
    567: [0.19444, 0.44444, 0.04611, 0, 0.385],
    710: [0, 0.69444, 0.06709, 0, 0.59111],
    711: [0, 0.63194, 0.08271, 0, 0.59111],
    713: [0, 0.59444, 0.10444, 0, 0.59111],
    714: [0, 0.69444, 0.08528, 0, 0.59111],
    715: [0, 0.69444, 0, 0, 0.59111],
    728: [0, 0.69444, 0.10333, 0, 0.59111],
    729: [0, 0.69444, 0.12945, 0, 0.35555],
    730: [0, 0.69444, 0, 0, 0.94888],
    732: [0, 0.69444, 0.11472, 0, 0.59111],
    733: [0, 0.69444, 0.11472, 0, 0.59111],
    915: [0, 0.68611, 0.12903, 0, 0.69777],
    916: [0, 0.68611, 0, 0, 0.94444],
    920: [0, 0.68611, 0.09062, 0, 0.88555],
    923: [0, 0.68611, 0, 0, 0.80666],
    926: [0, 0.68611, 0.15092, 0, 0.76777],
    928: [0, 0.68611, 0.17208, 0, 0.8961],
    931: [0, 0.68611, 0.11431, 0, 0.82666],
    933: [0, 0.68611, 0.10778, 0, 0.88555],
    934: [0, 0.68611, 0.05632, 0, 0.82666],
    936: [0, 0.68611, 0.10778, 0, 0.88555],
    937: [0, 0.68611, 0.0992, 0, 0.82666],
    8211: [0, 0.44444, 0.09811, 0, 0.59111],
    8212: [0, 0.44444, 0.09811, 0, 1.18221],
    8216: [0, 0.69444, 0.12945, 0, 0.35555],
    8217: [0, 0.69444, 0.12945, 0, 0.35555],
    8220: [0, 0.69444, 0.16772, 0, 0.62055],
    8221: [0, 0.69444, 0.07939, 0, 0.62055]
  },
  "Main-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.12417, 0, 0.30667],
    34: [0, 0.69444, 0.06961, 0, 0.51444],
    35: [0.19444, 0.69444, 0.06616, 0, 0.81777],
    37: [0.05556, 0.75, 0.13639, 0, 0.81777],
    38: [0, 0.69444, 0.09694, 0, 0.76666],
    39: [0, 0.69444, 0.12417, 0, 0.30667],
    40: [0.25, 0.75, 0.16194, 0, 0.40889],
    41: [0.25, 0.75, 0.03694, 0, 0.40889],
    42: [0, 0.75, 0.14917, 0, 0.51111],
    43: [0.05667, 0.56167, 0.03694, 0, 0.76666],
    44: [0.19444, 0.10556, 0, 0, 0.30667],
    45: [0, 0.43056, 0.02826, 0, 0.35778],
    46: [0, 0.10556, 0, 0, 0.30667],
    47: [0.25, 0.75, 0.16194, 0, 0.51111],
    48: [0, 0.64444, 0.13556, 0, 0.51111],
    49: [0, 0.64444, 0.13556, 0, 0.51111],
    50: [0, 0.64444, 0.13556, 0, 0.51111],
    51: [0, 0.64444, 0.13556, 0, 0.51111],
    52: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    53: [0, 0.64444, 0.13556, 0, 0.51111],
    54: [0, 0.64444, 0.13556, 0, 0.51111],
    55: [0.19444, 0.64444, 0.13556, 0, 0.51111],
    56: [0, 0.64444, 0.13556, 0, 0.51111],
    57: [0, 0.64444, 0.13556, 0, 0.51111],
    58: [0, 0.43056, 0.0582, 0, 0.30667],
    59: [0.19444, 0.43056, 0.0582, 0, 0.30667],
    61: [-0.13313, 0.36687, 0.06616, 0, 0.76666],
    63: [0, 0.69444, 0.1225, 0, 0.51111],
    64: [0, 0.69444, 0.09597, 0, 0.76666],
    65: [0, 0.68333, 0, 0, 0.74333],
    66: [0, 0.68333, 0.10257, 0, 0.70389],
    67: [0, 0.68333, 0.14528, 0, 0.71555],
    68: [0, 0.68333, 0.09403, 0, 0.755],
    69: [0, 0.68333, 0.12028, 0, 0.67833],
    70: [0, 0.68333, 0.13305, 0, 0.65277],
    71: [0, 0.68333, 0.08722, 0, 0.77361],
    72: [0, 0.68333, 0.16389, 0, 0.74333],
    73: [0, 0.68333, 0.15806, 0, 0.38555],
    74: [0, 0.68333, 0.14028, 0, 0.525],
    75: [0, 0.68333, 0.14528, 0, 0.76888],
    76: [0, 0.68333, 0, 0, 0.62722],
    77: [0, 0.68333, 0.16389, 0, 0.89666],
    78: [0, 0.68333, 0.16389, 0, 0.74333],
    79: [0, 0.68333, 0.09403, 0, 0.76666],
    80: [0, 0.68333, 0.10257, 0, 0.67833],
    81: [0.19444, 0.68333, 0.09403, 0, 0.76666],
    82: [0, 0.68333, 0.03868, 0, 0.72944],
    83: [0, 0.68333, 0.11972, 0, 0.56222],
    84: [0, 0.68333, 0.13305, 0, 0.71555],
    85: [0, 0.68333, 0.16389, 0, 0.74333],
    86: [0, 0.68333, 0.18361, 0, 0.74333],
    87: [0, 0.68333, 0.18361, 0, 0.99888],
    88: [0, 0.68333, 0.15806, 0, 0.74333],
    89: [0, 0.68333, 0.19383, 0, 0.74333],
    90: [0, 0.68333, 0.14528, 0, 0.61333],
    91: [0.25, 0.75, 0.1875, 0, 0.30667],
    93: [0.25, 0.75, 0.10528, 0, 0.30667],
    94: [0, 0.69444, 0.06646, 0, 0.51111],
    95: [0.31, 0.12056, 0.09208, 0, 0.51111],
    97: [0, 0.43056, 0.07671, 0, 0.51111],
    98: [0, 0.69444, 0.06312, 0, 0.46],
    99: [0, 0.43056, 0.05653, 0, 0.46],
    100: [0, 0.69444, 0.10333, 0, 0.51111],
    101: [0, 0.43056, 0.07514, 0, 0.46],
    102: [0.19444, 0.69444, 0.21194, 0, 0.30667],
    103: [0.19444, 0.43056, 0.08847, 0, 0.46],
    104: [0, 0.69444, 0.07671, 0, 0.51111],
    105: [0, 0.65536, 0.1019, 0, 0.30667],
    106: [0.19444, 0.65536, 0.14467, 0, 0.30667],
    107: [0, 0.69444, 0.10764, 0, 0.46],
    108: [0, 0.69444, 0.10333, 0, 0.25555],
    109: [0, 0.43056, 0.07671, 0, 0.81777],
    110: [0, 0.43056, 0.07671, 0, 0.56222],
    111: [0, 0.43056, 0.06312, 0, 0.51111],
    112: [0.19444, 0.43056, 0.06312, 0, 0.51111],
    113: [0.19444, 0.43056, 0.08847, 0, 0.46],
    114: [0, 0.43056, 0.10764, 0, 0.42166],
    115: [0, 0.43056, 0.08208, 0, 0.40889],
    116: [0, 0.61508, 0.09486, 0, 0.33222],
    117: [0, 0.43056, 0.07671, 0, 0.53666],
    118: [0, 0.43056, 0.10764, 0, 0.46],
    119: [0, 0.43056, 0.10764, 0, 0.66444],
    120: [0, 0.43056, 0.12042, 0, 0.46389],
    121: [0.19444, 0.43056, 0.08847, 0, 0.48555],
    122: [0, 0.43056, 0.12292, 0, 0.40889],
    126: [0.35, 0.31786, 0.11585, 0, 0.51111],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.66786, 0.10474, 0, 0.51111],
    176: [0, 0.69444, 0, 0, 0.83129],
    184: [0.17014, 0, 0, 0, 0.46],
    198: [0, 0.68333, 0.12028, 0, 0.88277],
    216: [0.04861, 0.73194, 0.09403, 0, 0.76666],
    223: [0.19444, 0.69444, 0.10514, 0, 0.53666],
    230: [0, 0.43056, 0.07514, 0, 0.71555],
    248: [0.09722, 0.52778, 0.09194, 0, 0.51111],
    338: [0, 0.68333, 0.12028, 0, 0.98499],
    339: [0, 0.43056, 0.07514, 0, 0.71555],
    710: [0, 0.69444, 0.06646, 0, 0.51111],
    711: [0, 0.62847, 0.08295, 0, 0.51111],
    713: [0, 0.56167, 0.10333, 0, 0.51111],
    714: [0, 0.69444, 0.09694, 0, 0.51111],
    715: [0, 0.69444, 0, 0, 0.51111],
    728: [0, 0.69444, 0.10806, 0, 0.51111],
    729: [0, 0.66786, 0.11752, 0, 0.30667],
    730: [0, 0.69444, 0, 0, 0.83129],
    732: [0, 0.66786, 0.11585, 0, 0.51111],
    733: [0, 0.69444, 0.1225, 0, 0.51111],
    915: [0, 0.68333, 0.13305, 0, 0.62722],
    916: [0, 0.68333, 0, 0, 0.81777],
    920: [0, 0.68333, 0.09403, 0, 0.76666],
    923: [0, 0.68333, 0, 0, 0.69222],
    926: [0, 0.68333, 0.15294, 0, 0.66444],
    928: [0, 0.68333, 0.16389, 0, 0.74333],
    931: [0, 0.68333, 0.12028, 0, 0.71555],
    933: [0, 0.68333, 0.11111, 0, 0.76666],
    934: [0, 0.68333, 0.05986, 0, 0.71555],
    936: [0, 0.68333, 0.11111, 0, 0.76666],
    937: [0, 0.68333, 0.10257, 0, 0.71555],
    8211: [0, 0.43056, 0.09208, 0, 0.51111],
    8212: [0, 0.43056, 0.09208, 0, 1.02222],
    8216: [0, 0.69444, 0.12417, 0, 0.30667],
    8217: [0, 0.69444, 0.12417, 0, 0.30667],
    8220: [0, 0.69444, 0.1685, 0, 0.51444],
    8221: [0, 0.69444, 0.06961, 0, 0.51444],
    8463: [0, 0.68889, 0, 0, 0.54028]
  },
  "Main-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.27778],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.77778],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.19444, 0.10556, 0, 0, 0.27778],
    45: [0, 0.43056, 0, 0, 0.33333],
    46: [0, 0.10556, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.64444, 0, 0, 0.5],
    49: [0, 0.64444, 0, 0, 0.5],
    50: [0, 0.64444, 0, 0, 0.5],
    51: [0, 0.64444, 0, 0, 0.5],
    52: [0, 0.64444, 0, 0, 0.5],
    53: [0, 0.64444, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0, 0.64444, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0, 0.64444, 0, 0, 0.5],
    58: [0, 0.43056, 0, 0, 0.27778],
    59: [0.19444, 0.43056, 0, 0, 0.27778],
    60: [0.0391, 0.5391, 0, 0, 0.77778],
    61: [-0.13313, 0.36687, 0, 0, 0.77778],
    62: [0.0391, 0.5391, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.77778],
    65: [0, 0.68333, 0, 0, 0.75],
    66: [0, 0.68333, 0, 0, 0.70834],
    67: [0, 0.68333, 0, 0, 0.72222],
    68: [0, 0.68333, 0, 0, 0.76389],
    69: [0, 0.68333, 0, 0, 0.68056],
    70: [0, 0.68333, 0, 0, 0.65278],
    71: [0, 0.68333, 0, 0, 0.78472],
    72: [0, 0.68333, 0, 0, 0.75],
    73: [0, 0.68333, 0, 0, 0.36111],
    74: [0, 0.68333, 0, 0, 0.51389],
    75: [0, 0.68333, 0, 0, 0.77778],
    76: [0, 0.68333, 0, 0, 0.625],
    77: [0, 0.68333, 0, 0, 0.91667],
    78: [0, 0.68333, 0, 0, 0.75],
    79: [0, 0.68333, 0, 0, 0.77778],
    80: [0, 0.68333, 0, 0, 0.68056],
    81: [0.19444, 0.68333, 0, 0, 0.77778],
    82: [0, 0.68333, 0, 0, 0.73611],
    83: [0, 0.68333, 0, 0, 0.55556],
    84: [0, 0.68333, 0, 0, 0.72222],
    85: [0, 0.68333, 0, 0, 0.75],
    86: [0, 0.68333, 0.01389, 0, 0.75],
    87: [0, 0.68333, 0.01389, 0, 1.02778],
    88: [0, 0.68333, 0, 0, 0.75],
    89: [0, 0.68333, 0.025, 0, 0.75],
    90: [0, 0.68333, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.27778],
    92: [0.25, 0.75, 0, 0, 0.5],
    93: [0.25, 0.75, 0, 0, 0.27778],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.31, 0.12056, 0.02778, 0, 0.5],
    97: [0, 0.43056, 0, 0, 0.5],
    98: [0, 0.69444, 0, 0, 0.55556],
    99: [0, 0.43056, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.55556],
    101: [0, 0.43056, 0, 0, 0.44445],
    102: [0, 0.69444, 0.07778, 0, 0.30556],
    103: [0.19444, 0.43056, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.55556],
    105: [0, 0.66786, 0, 0, 0.27778],
    106: [0.19444, 0.66786, 0, 0, 0.30556],
    107: [0, 0.69444, 0, 0, 0.52778],
    108: [0, 0.69444, 0, 0, 0.27778],
    109: [0, 0.43056, 0, 0, 0.83334],
    110: [0, 0.43056, 0, 0, 0.55556],
    111: [0, 0.43056, 0, 0, 0.5],
    112: [0.19444, 0.43056, 0, 0, 0.55556],
    113: [0.19444, 0.43056, 0, 0, 0.52778],
    114: [0, 0.43056, 0, 0, 0.39167],
    115: [0, 0.43056, 0, 0, 0.39445],
    116: [0, 0.61508, 0, 0, 0.38889],
    117: [0, 0.43056, 0, 0, 0.55556],
    118: [0, 0.43056, 0.01389, 0, 0.52778],
    119: [0, 0.43056, 0.01389, 0, 0.72222],
    120: [0, 0.43056, 0, 0, 0.52778],
    121: [0.19444, 0.43056, 0.01389, 0, 0.52778],
    122: [0, 0.43056, 0, 0, 0.44445],
    123: [0.25, 0.75, 0, 0, 0.5],
    124: [0.25, 0.75, 0, 0, 0.27778],
    125: [0.25, 0.75, 0, 0, 0.5],
    126: [0.35, 0.31786, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    163: [0, 0.69444, 0, 0, 0.76909],
    167: [0.19444, 0.69444, 0, 0, 0.44445],
    168: [0, 0.66786, 0, 0, 0.5],
    172: [0, 0.43056, 0, 0, 0.66667],
    176: [0, 0.69444, 0, 0, 0.75],
    177: [0.08333, 0.58333, 0, 0, 0.77778],
    182: [0.19444, 0.69444, 0, 0, 0.61111],
    184: [0.17014, 0, 0, 0, 0.44445],
    198: [0, 0.68333, 0, 0, 0.90278],
    215: [0.08333, 0.58333, 0, 0, 0.77778],
    216: [0.04861, 0.73194, 0, 0, 0.77778],
    223: [0, 0.69444, 0, 0, 0.5],
    230: [0, 0.43056, 0, 0, 0.72222],
    247: [0.08333, 0.58333, 0, 0, 0.77778],
    248: [0.09722, 0.52778, 0, 0, 0.5],
    305: [0, 0.43056, 0, 0, 0.27778],
    338: [0, 0.68333, 0, 0, 1.01389],
    339: [0, 0.43056, 0, 0, 0.77778],
    567: [0.19444, 0.43056, 0, 0, 0.30556],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.62847, 0, 0, 0.5],
    713: [0, 0.56778, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.66786, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.75],
    732: [0, 0.66786, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.68333, 0, 0, 0.625],
    916: [0, 0.68333, 0, 0, 0.83334],
    920: [0, 0.68333, 0, 0, 0.77778],
    923: [0, 0.68333, 0, 0, 0.69445],
    926: [0, 0.68333, 0, 0, 0.66667],
    928: [0, 0.68333, 0, 0, 0.75],
    931: [0, 0.68333, 0, 0, 0.72222],
    933: [0, 0.68333, 0, 0, 0.77778],
    934: [0, 0.68333, 0, 0, 0.72222],
    936: [0, 0.68333, 0, 0, 0.77778],
    937: [0, 0.68333, 0, 0, 0.72222],
    8211: [0, 0.43056, 0.02778, 0, 0.5],
    8212: [0, 0.43056, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5],
    8224: [0.19444, 0.69444, 0, 0, 0.44445],
    8225: [0.19444, 0.69444, 0, 0, 0.44445],
    8230: [0, 0.123, 0, 0, 1.172],
    8242: [0, 0.55556, 0, 0, 0.275],
    8407: [0, 0.71444, 0.15382, 0, 0.5],
    8463: [0, 0.68889, 0, 0, 0.54028],
    8465: [0, 0.69444, 0, 0, 0.72222],
    8467: [0, 0.69444, 0, 0.11111, 0.41667],
    8472: [0.19444, 0.43056, 0, 0.11111, 0.63646],
    8476: [0, 0.69444, 0, 0, 0.72222],
    8501: [0, 0.69444, 0, 0, 0.61111],
    8592: [-0.13313, 0.36687, 0, 0, 1],
    8593: [0.19444, 0.69444, 0, 0, 0.5],
    8594: [-0.13313, 0.36687, 0, 0, 1],
    8595: [0.19444, 0.69444, 0, 0, 0.5],
    8596: [-0.13313, 0.36687, 0, 0, 1],
    8597: [0.25, 0.75, 0, 0, 0.5],
    8598: [0.19444, 0.69444, 0, 0, 1],
    8599: [0.19444, 0.69444, 0, 0, 1],
    8600: [0.19444, 0.69444, 0, 0, 1],
    8601: [0.19444, 0.69444, 0, 0, 1],
    8614: [0.011, 0.511, 0, 0, 1],
    8617: [0.011, 0.511, 0, 0, 1.126],
    8618: [0.011, 0.511, 0, 0, 1.126],
    8636: [-0.13313, 0.36687, 0, 0, 1],
    8637: [-0.13313, 0.36687, 0, 0, 1],
    8640: [-0.13313, 0.36687, 0, 0, 1],
    8641: [-0.13313, 0.36687, 0, 0, 1],
    8652: [0.011, 0.671, 0, 0, 1],
    8656: [-0.13313, 0.36687, 0, 0, 1],
    8657: [0.19444, 0.69444, 0, 0, 0.61111],
    8658: [-0.13313, 0.36687, 0, 0, 1],
    8659: [0.19444, 0.69444, 0, 0, 0.61111],
    8660: [-0.13313, 0.36687, 0, 0, 1],
    8661: [0.25, 0.75, 0, 0, 0.61111],
    8704: [0, 0.69444, 0, 0, 0.55556],
    8706: [0, 0.69444, 0.05556, 0.08334, 0.5309],
    8707: [0, 0.69444, 0, 0, 0.55556],
    8709: [0.05556, 0.75, 0, 0, 0.5],
    8711: [0, 0.68333, 0, 0, 0.83334],
    8712: [0.0391, 0.5391, 0, 0, 0.66667],
    8715: [0.0391, 0.5391, 0, 0, 0.66667],
    8722: [0.08333, 0.58333, 0, 0, 0.77778],
    8723: [0.08333, 0.58333, 0, 0, 0.77778],
    8725: [0.25, 0.75, 0, 0, 0.5],
    8726: [0.25, 0.75, 0, 0, 0.5],
    8727: [-0.03472, 0.46528, 0, 0, 0.5],
    8728: [-0.05555, 0.44445, 0, 0, 0.5],
    8729: [-0.05555, 0.44445, 0, 0, 0.5],
    8730: [0.2, 0.8, 0, 0, 0.83334],
    8733: [0, 0.43056, 0, 0, 0.77778],
    8734: [0, 0.43056, 0, 0, 1],
    8736: [0, 0.69224, 0, 0, 0.72222],
    8739: [0.25, 0.75, 0, 0, 0.27778],
    8741: [0.25, 0.75, 0, 0, 0.5],
    8743: [0, 0.55556, 0, 0, 0.66667],
    8744: [0, 0.55556, 0, 0, 0.66667],
    8745: [0, 0.55556, 0, 0, 0.66667],
    8746: [0, 0.55556, 0, 0, 0.66667],
    8747: [0.19444, 0.69444, 0.11111, 0, 0.41667],
    8764: [-0.13313, 0.36687, 0, 0, 0.77778],
    8768: [0.19444, 0.69444, 0, 0, 0.27778],
    8771: [-0.03625, 0.46375, 0, 0, 0.77778],
    8773: [-0.022, 0.589, 0, 0, 0.778],
    8776: [-0.01688, 0.48312, 0, 0, 0.77778],
    8781: [-0.03625, 0.46375, 0, 0, 0.77778],
    8784: [-0.133, 0.673, 0, 0, 0.778],
    8801: [-0.03625, 0.46375, 0, 0, 0.77778],
    8804: [0.13597, 0.63597, 0, 0, 0.77778],
    8805: [0.13597, 0.63597, 0, 0, 0.77778],
    8810: [0.0391, 0.5391, 0, 0, 1],
    8811: [0.0391, 0.5391, 0, 0, 1],
    8826: [0.0391, 0.5391, 0, 0, 0.77778],
    8827: [0.0391, 0.5391, 0, 0, 0.77778],
    8834: [0.0391, 0.5391, 0, 0, 0.77778],
    8835: [0.0391, 0.5391, 0, 0, 0.77778],
    8838: [0.13597, 0.63597, 0, 0, 0.77778],
    8839: [0.13597, 0.63597, 0, 0, 0.77778],
    8846: [0, 0.55556, 0, 0, 0.66667],
    8849: [0.13597, 0.63597, 0, 0, 0.77778],
    8850: [0.13597, 0.63597, 0, 0, 0.77778],
    8851: [0, 0.55556, 0, 0, 0.66667],
    8852: [0, 0.55556, 0, 0, 0.66667],
    8853: [0.08333, 0.58333, 0, 0, 0.77778],
    8854: [0.08333, 0.58333, 0, 0, 0.77778],
    8855: [0.08333, 0.58333, 0, 0, 0.77778],
    8856: [0.08333, 0.58333, 0, 0, 0.77778],
    8857: [0.08333, 0.58333, 0, 0, 0.77778],
    8866: [0, 0.69444, 0, 0, 0.61111],
    8867: [0, 0.69444, 0, 0, 0.61111],
    8868: [0, 0.69444, 0, 0, 0.77778],
    8869: [0, 0.69444, 0, 0, 0.77778],
    8872: [0.249, 0.75, 0, 0, 0.867],
    8900: [-0.05555, 0.44445, 0, 0, 0.5],
    8901: [-0.05555, 0.44445, 0, 0, 0.27778],
    8902: [-0.03472, 0.46528, 0, 0, 0.5],
    8904: [5e-3, 0.505, 0, 0, 0.9],
    8942: [0.03, 0.903, 0, 0, 0.278],
    8943: [-0.19, 0.313, 0, 0, 1.172],
    8945: [-0.1, 0.823, 0, 0, 1.282],
    8968: [0.25, 0.75, 0, 0, 0.44445],
    8969: [0.25, 0.75, 0, 0, 0.44445],
    8970: [0.25, 0.75, 0, 0, 0.44445],
    8971: [0.25, 0.75, 0, 0, 0.44445],
    8994: [-0.14236, 0.35764, 0, 0, 1],
    8995: [-0.14236, 0.35764, 0, 0, 1],
    9136: [0.244, 0.744, 0, 0, 0.412],
    9137: [0.244, 0.745, 0, 0, 0.412],
    9651: [0.19444, 0.69444, 0, 0, 0.88889],
    9657: [-0.03472, 0.46528, 0, 0, 0.5],
    9661: [0.19444, 0.69444, 0, 0, 0.88889],
    9667: [-0.03472, 0.46528, 0, 0, 0.5],
    9711: [0.19444, 0.69444, 0, 0, 1],
    9824: [0.12963, 0.69444, 0, 0, 0.77778],
    9825: [0.12963, 0.69444, 0, 0, 0.77778],
    9826: [0.12963, 0.69444, 0, 0, 0.77778],
    9827: [0.12963, 0.69444, 0, 0, 0.77778],
    9837: [0, 0.75, 0, 0, 0.38889],
    9838: [0.19444, 0.69444, 0, 0, 0.38889],
    9839: [0.19444, 0.69444, 0, 0, 0.38889],
    10216: [0.25, 0.75, 0, 0, 0.38889],
    10217: [0.25, 0.75, 0, 0, 0.38889],
    10222: [0.244, 0.744, 0, 0, 0.412],
    10223: [0.244, 0.745, 0, 0, 0.412],
    10229: [0.011, 0.511, 0, 0, 1.609],
    10230: [0.011, 0.511, 0, 0, 1.638],
    10231: [0.011, 0.511, 0, 0, 1.859],
    10232: [0.024, 0.525, 0, 0, 1.609],
    10233: [0.024, 0.525, 0, 0, 1.638],
    10234: [0.024, 0.525, 0, 0, 1.858],
    10236: [0.011, 0.511, 0, 0, 1.638],
    10815: [0, 0.68333, 0, 0, 0.75],
    10927: [0.13597, 0.63597, 0, 0, 0.77778],
    10928: [0.13597, 0.63597, 0, 0, 0.77778],
    57376: [0.19444, 0.69444, 0, 0, 0]
  },
  "Math-BoldItalic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.44444, 0, 0, 0.575],
    49: [0, 0.44444, 0, 0, 0.575],
    50: [0, 0.44444, 0, 0, 0.575],
    51: [0.19444, 0.44444, 0, 0, 0.575],
    52: [0.19444, 0.44444, 0, 0, 0.575],
    53: [0.19444, 0.44444, 0, 0, 0.575],
    54: [0, 0.64444, 0, 0, 0.575],
    55: [0.19444, 0.44444, 0, 0, 0.575],
    56: [0, 0.64444, 0, 0, 0.575],
    57: [0.19444, 0.44444, 0, 0, 0.575],
    65: [0, 0.68611, 0, 0, 0.86944],
    66: [0, 0.68611, 0.04835, 0, 0.8664],
    67: [0, 0.68611, 0.06979, 0, 0.81694],
    68: [0, 0.68611, 0.03194, 0, 0.93812],
    69: [0, 0.68611, 0.05451, 0, 0.81007],
    70: [0, 0.68611, 0.15972, 0, 0.68889],
    71: [0, 0.68611, 0, 0, 0.88673],
    72: [0, 0.68611, 0.08229, 0, 0.98229],
    73: [0, 0.68611, 0.07778, 0, 0.51111],
    74: [0, 0.68611, 0.10069, 0, 0.63125],
    75: [0, 0.68611, 0.06979, 0, 0.97118],
    76: [0, 0.68611, 0, 0, 0.75555],
    77: [0, 0.68611, 0.11424, 0, 1.14201],
    78: [0, 0.68611, 0.11424, 0, 0.95034],
    79: [0, 0.68611, 0.03194, 0, 0.83666],
    80: [0, 0.68611, 0.15972, 0, 0.72309],
    81: [0.19444, 0.68611, 0, 0, 0.86861],
    82: [0, 0.68611, 421e-5, 0, 0.87235],
    83: [0, 0.68611, 0.05382, 0, 0.69271],
    84: [0, 0.68611, 0.15972, 0, 0.63663],
    85: [0, 0.68611, 0.11424, 0, 0.80027],
    86: [0, 0.68611, 0.25555, 0, 0.67778],
    87: [0, 0.68611, 0.15972, 0, 1.09305],
    88: [0, 0.68611, 0.07778, 0, 0.94722],
    89: [0, 0.68611, 0.25555, 0, 0.67458],
    90: [0, 0.68611, 0.06979, 0, 0.77257],
    97: [0, 0.44444, 0, 0, 0.63287],
    98: [0, 0.69444, 0, 0, 0.52083],
    99: [0, 0.44444, 0, 0, 0.51342],
    100: [0, 0.69444, 0, 0, 0.60972],
    101: [0, 0.44444, 0, 0, 0.55361],
    102: [0.19444, 0.69444, 0.11042, 0, 0.56806],
    103: [0.19444, 0.44444, 0.03704, 0, 0.5449],
    104: [0, 0.69444, 0, 0, 0.66759],
    105: [0, 0.69326, 0, 0, 0.4048],
    106: [0.19444, 0.69326, 0.0622, 0, 0.47083],
    107: [0, 0.69444, 0.01852, 0, 0.6037],
    108: [0, 0.69444, 88e-4, 0, 0.34815],
    109: [0, 0.44444, 0, 0, 1.0324],
    110: [0, 0.44444, 0, 0, 0.71296],
    111: [0, 0.44444, 0, 0, 0.58472],
    112: [0.19444, 0.44444, 0, 0, 0.60092],
    113: [0.19444, 0.44444, 0.03704, 0, 0.54213],
    114: [0, 0.44444, 0.03194, 0, 0.5287],
    115: [0, 0.44444, 0, 0, 0.53125],
    116: [0, 0.63492, 0, 0, 0.41528],
    117: [0, 0.44444, 0, 0, 0.68102],
    118: [0, 0.44444, 0.03704, 0, 0.56666],
    119: [0, 0.44444, 0.02778, 0, 0.83148],
    120: [0, 0.44444, 0, 0, 0.65903],
    121: [0.19444, 0.44444, 0.03704, 0, 0.59028],
    122: [0, 0.44444, 0.04213, 0, 0.55509],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68611, 0.15972, 0, 0.65694],
    916: [0, 0.68611, 0, 0, 0.95833],
    920: [0, 0.68611, 0.03194, 0, 0.86722],
    923: [0, 0.68611, 0, 0, 0.80555],
    926: [0, 0.68611, 0.07458, 0, 0.84125],
    928: [0, 0.68611, 0.08229, 0, 0.98229],
    931: [0, 0.68611, 0.05451, 0, 0.88507],
    933: [0, 0.68611, 0.15972, 0, 0.67083],
    934: [0, 0.68611, 0, 0, 0.76666],
    936: [0, 0.68611, 0.11653, 0, 0.71402],
    937: [0, 0.68611, 0.04835, 0, 0.8789],
    945: [0, 0.44444, 0, 0, 0.76064],
    946: [0.19444, 0.69444, 0.03403, 0, 0.65972],
    947: [0.19444, 0.44444, 0.06389, 0, 0.59003],
    948: [0, 0.69444, 0.03819, 0, 0.52222],
    949: [0, 0.44444, 0, 0, 0.52882],
    950: [0.19444, 0.69444, 0.06215, 0, 0.50833],
    951: [0.19444, 0.44444, 0.03704, 0, 0.6],
    952: [0, 0.69444, 0.03194, 0, 0.5618],
    953: [0, 0.44444, 0, 0, 0.41204],
    954: [0, 0.44444, 0, 0, 0.66759],
    955: [0, 0.69444, 0, 0, 0.67083],
    956: [0.19444, 0.44444, 0, 0, 0.70787],
    957: [0, 0.44444, 0.06898, 0, 0.57685],
    958: [0.19444, 0.69444, 0.03021, 0, 0.50833],
    959: [0, 0.44444, 0, 0, 0.58472],
    960: [0, 0.44444, 0.03704, 0, 0.68241],
    961: [0.19444, 0.44444, 0, 0, 0.6118],
    962: [0.09722, 0.44444, 0.07917, 0, 0.42361],
    963: [0, 0.44444, 0.03704, 0, 0.68588],
    964: [0, 0.44444, 0.13472, 0, 0.52083],
    965: [0, 0.44444, 0.03704, 0, 0.63055],
    966: [0.19444, 0.44444, 0, 0, 0.74722],
    967: [0.19444, 0.44444, 0, 0, 0.71805],
    968: [0.19444, 0.69444, 0.03704, 0, 0.75833],
    969: [0, 0.44444, 0.03704, 0, 0.71782],
    977: [0, 0.69444, 0, 0, 0.69155],
    981: [0.19444, 0.69444, 0, 0, 0.7125],
    982: [0, 0.44444, 0.03194, 0, 0.975],
    1009: [0.19444, 0.44444, 0, 0, 0.6118],
    1013: [0, 0.44444, 0, 0, 0.48333],
    57649: [0, 0.44444, 0, 0, 0.39352],
    57911: [0.19444, 0.44444, 0, 0, 0.43889]
  },
  "Math-Italic": {
    32: [0, 0, 0, 0, 0.25],
    48: [0, 0.43056, 0, 0, 0.5],
    49: [0, 0.43056, 0, 0, 0.5],
    50: [0, 0.43056, 0, 0, 0.5],
    51: [0.19444, 0.43056, 0, 0, 0.5],
    52: [0.19444, 0.43056, 0, 0, 0.5],
    53: [0.19444, 0.43056, 0, 0, 0.5],
    54: [0, 0.64444, 0, 0, 0.5],
    55: [0.19444, 0.43056, 0, 0, 0.5],
    56: [0, 0.64444, 0, 0, 0.5],
    57: [0.19444, 0.43056, 0, 0, 0.5],
    65: [0, 0.68333, 0, 0.13889, 0.75],
    66: [0, 0.68333, 0.05017, 0.08334, 0.75851],
    67: [0, 0.68333, 0.07153, 0.08334, 0.71472],
    68: [0, 0.68333, 0.02778, 0.05556, 0.82792],
    69: [0, 0.68333, 0.05764, 0.08334, 0.7382],
    70: [0, 0.68333, 0.13889, 0.08334, 0.64306],
    71: [0, 0.68333, 0, 0.08334, 0.78625],
    72: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    73: [0, 0.68333, 0.07847, 0.11111, 0.43958],
    74: [0, 0.68333, 0.09618, 0.16667, 0.55451],
    75: [0, 0.68333, 0.07153, 0.05556, 0.84931],
    76: [0, 0.68333, 0, 0.02778, 0.68056],
    77: [0, 0.68333, 0.10903, 0.08334, 0.97014],
    78: [0, 0.68333, 0.10903, 0.08334, 0.80347],
    79: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    80: [0, 0.68333, 0.13889, 0.08334, 0.64201],
    81: [0.19444, 0.68333, 0, 0.08334, 0.79056],
    82: [0, 0.68333, 773e-5, 0.08334, 0.75929],
    83: [0, 0.68333, 0.05764, 0.08334, 0.6132],
    84: [0, 0.68333, 0.13889, 0.08334, 0.58438],
    85: [0, 0.68333, 0.10903, 0.02778, 0.68278],
    86: [0, 0.68333, 0.22222, 0, 0.58333],
    87: [0, 0.68333, 0.13889, 0, 0.94445],
    88: [0, 0.68333, 0.07847, 0.08334, 0.82847],
    89: [0, 0.68333, 0.22222, 0, 0.58056],
    90: [0, 0.68333, 0.07153, 0.08334, 0.68264],
    97: [0, 0.43056, 0, 0, 0.52859],
    98: [0, 0.69444, 0, 0, 0.42917],
    99: [0, 0.43056, 0, 0.05556, 0.43276],
    100: [0, 0.69444, 0, 0.16667, 0.52049],
    101: [0, 0.43056, 0, 0.05556, 0.46563],
    102: [0.19444, 0.69444, 0.10764, 0.16667, 0.48959],
    103: [0.19444, 0.43056, 0.03588, 0.02778, 0.47697],
    104: [0, 0.69444, 0, 0, 0.57616],
    105: [0, 0.65952, 0, 0, 0.34451],
    106: [0.19444, 0.65952, 0.05724, 0, 0.41181],
    107: [0, 0.69444, 0.03148, 0, 0.5206],
    108: [0, 0.69444, 0.01968, 0.08334, 0.29838],
    109: [0, 0.43056, 0, 0, 0.87801],
    110: [0, 0.43056, 0, 0, 0.60023],
    111: [0, 0.43056, 0, 0.05556, 0.48472],
    112: [0.19444, 0.43056, 0, 0.08334, 0.50313],
    113: [0.19444, 0.43056, 0.03588, 0.08334, 0.44641],
    114: [0, 0.43056, 0.02778, 0.05556, 0.45116],
    115: [0, 0.43056, 0, 0.05556, 0.46875],
    116: [0, 0.61508, 0, 0.08334, 0.36111],
    117: [0, 0.43056, 0, 0.02778, 0.57246],
    118: [0, 0.43056, 0.03588, 0.02778, 0.48472],
    119: [0, 0.43056, 0.02691, 0.08334, 0.71592],
    120: [0, 0.43056, 0, 0.02778, 0.57153],
    121: [0.19444, 0.43056, 0.03588, 0.05556, 0.49028],
    122: [0, 0.43056, 0.04398, 0.05556, 0.46505],
    160: [0, 0, 0, 0, 0.25],
    915: [0, 0.68333, 0.13889, 0.08334, 0.61528],
    916: [0, 0.68333, 0, 0.16667, 0.83334],
    920: [0, 0.68333, 0.02778, 0.08334, 0.76278],
    923: [0, 0.68333, 0, 0.16667, 0.69445],
    926: [0, 0.68333, 0.07569, 0.08334, 0.74236],
    928: [0, 0.68333, 0.08125, 0.05556, 0.83125],
    931: [0, 0.68333, 0.05764, 0.08334, 0.77986],
    933: [0, 0.68333, 0.13889, 0.05556, 0.58333],
    934: [0, 0.68333, 0, 0.08334, 0.66667],
    936: [0, 0.68333, 0.11, 0.05556, 0.61222],
    937: [0, 0.68333, 0.05017, 0.08334, 0.7724],
    945: [0, 0.43056, 37e-4, 0.02778, 0.6397],
    946: [0.19444, 0.69444, 0.05278, 0.08334, 0.56563],
    947: [0.19444, 0.43056, 0.05556, 0, 0.51773],
    948: [0, 0.69444, 0.03785, 0.05556, 0.44444],
    949: [0, 0.43056, 0, 0.08334, 0.46632],
    950: [0.19444, 0.69444, 0.07378, 0.08334, 0.4375],
    951: [0.19444, 0.43056, 0.03588, 0.05556, 0.49653],
    952: [0, 0.69444, 0.02778, 0.08334, 0.46944],
    953: [0, 0.43056, 0, 0.05556, 0.35394],
    954: [0, 0.43056, 0, 0, 0.57616],
    955: [0, 0.69444, 0, 0, 0.58334],
    956: [0.19444, 0.43056, 0, 0.02778, 0.60255],
    957: [0, 0.43056, 0.06366, 0.02778, 0.49398],
    958: [0.19444, 0.69444, 0.04601, 0.11111, 0.4375],
    959: [0, 0.43056, 0, 0.05556, 0.48472],
    960: [0, 0.43056, 0.03588, 0, 0.57003],
    961: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    962: [0.09722, 0.43056, 0.07986, 0.08334, 0.36285],
    963: [0, 0.43056, 0.03588, 0, 0.57141],
    964: [0, 0.43056, 0.1132, 0.02778, 0.43715],
    965: [0, 0.43056, 0.03588, 0.02778, 0.54028],
    966: [0.19444, 0.43056, 0, 0.08334, 0.65417],
    967: [0.19444, 0.43056, 0, 0.05556, 0.62569],
    968: [0.19444, 0.69444, 0.03588, 0.11111, 0.65139],
    969: [0, 0.43056, 0.03588, 0, 0.62245],
    977: [0, 0.69444, 0, 0.08334, 0.59144],
    981: [0.19444, 0.69444, 0, 0.08334, 0.59583],
    982: [0, 0.43056, 0.02778, 0, 0.82813],
    1009: [0.19444, 0.43056, 0, 0.08334, 0.51702],
    1013: [0, 0.43056, 0, 0.05556, 0.4059],
    57649: [0, 0.43056, 0, 0.02778, 0.32246],
    57911: [0.19444, 0.43056, 0, 0.08334, 0.38403]
  },
  "SansSerif-Bold": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.36667],
    34: [0, 0.69444, 0, 0, 0.55834],
    35: [0.19444, 0.69444, 0, 0, 0.91667],
    36: [0.05556, 0.75, 0, 0, 0.55],
    37: [0.05556, 0.75, 0, 0, 1.02912],
    38: [0, 0.69444, 0, 0, 0.83056],
    39: [0, 0.69444, 0, 0, 0.30556],
    40: [0.25, 0.75, 0, 0, 0.42778],
    41: [0.25, 0.75, 0, 0, 0.42778],
    42: [0, 0.75, 0, 0, 0.55],
    43: [0.11667, 0.61667, 0, 0, 0.85556],
    44: [0.10556, 0.13056, 0, 0, 0.30556],
    45: [0, 0.45833, 0, 0, 0.36667],
    46: [0, 0.13056, 0, 0, 0.30556],
    47: [0.25, 0.75, 0, 0, 0.55],
    48: [0, 0.69444, 0, 0, 0.55],
    49: [0, 0.69444, 0, 0, 0.55],
    50: [0, 0.69444, 0, 0, 0.55],
    51: [0, 0.69444, 0, 0, 0.55],
    52: [0, 0.69444, 0, 0, 0.55],
    53: [0, 0.69444, 0, 0, 0.55],
    54: [0, 0.69444, 0, 0, 0.55],
    55: [0, 0.69444, 0, 0, 0.55],
    56: [0, 0.69444, 0, 0, 0.55],
    57: [0, 0.69444, 0, 0, 0.55],
    58: [0, 0.45833, 0, 0, 0.30556],
    59: [0.10556, 0.45833, 0, 0, 0.30556],
    61: [-0.09375, 0.40625, 0, 0, 0.85556],
    63: [0, 0.69444, 0, 0, 0.51945],
    64: [0, 0.69444, 0, 0, 0.73334],
    65: [0, 0.69444, 0, 0, 0.73334],
    66: [0, 0.69444, 0, 0, 0.73334],
    67: [0, 0.69444, 0, 0, 0.70278],
    68: [0, 0.69444, 0, 0, 0.79445],
    69: [0, 0.69444, 0, 0, 0.64167],
    70: [0, 0.69444, 0, 0, 0.61111],
    71: [0, 0.69444, 0, 0, 0.73334],
    72: [0, 0.69444, 0, 0, 0.79445],
    73: [0, 0.69444, 0, 0, 0.33056],
    74: [0, 0.69444, 0, 0, 0.51945],
    75: [0, 0.69444, 0, 0, 0.76389],
    76: [0, 0.69444, 0, 0, 0.58056],
    77: [0, 0.69444, 0, 0, 0.97778],
    78: [0, 0.69444, 0, 0, 0.79445],
    79: [0, 0.69444, 0, 0, 0.79445],
    80: [0, 0.69444, 0, 0, 0.70278],
    81: [0.10556, 0.69444, 0, 0, 0.79445],
    82: [0, 0.69444, 0, 0, 0.70278],
    83: [0, 0.69444, 0, 0, 0.61111],
    84: [0, 0.69444, 0, 0, 0.73334],
    85: [0, 0.69444, 0, 0, 0.76389],
    86: [0, 0.69444, 0.01528, 0, 0.73334],
    87: [0, 0.69444, 0.01528, 0, 1.03889],
    88: [0, 0.69444, 0, 0, 0.73334],
    89: [0, 0.69444, 0.0275, 0, 0.73334],
    90: [0, 0.69444, 0, 0, 0.67223],
    91: [0.25, 0.75, 0, 0, 0.34306],
    93: [0.25, 0.75, 0, 0, 0.34306],
    94: [0, 0.69444, 0, 0, 0.55],
    95: [0.35, 0.10833, 0.03056, 0, 0.55],
    97: [0, 0.45833, 0, 0, 0.525],
    98: [0, 0.69444, 0, 0, 0.56111],
    99: [0, 0.45833, 0, 0, 0.48889],
    100: [0, 0.69444, 0, 0, 0.56111],
    101: [0, 0.45833, 0, 0, 0.51111],
    102: [0, 0.69444, 0.07639, 0, 0.33611],
    103: [0.19444, 0.45833, 0.01528, 0, 0.55],
    104: [0, 0.69444, 0, 0, 0.56111],
    105: [0, 0.69444, 0, 0, 0.25556],
    106: [0.19444, 0.69444, 0, 0, 0.28611],
    107: [0, 0.69444, 0, 0, 0.53056],
    108: [0, 0.69444, 0, 0, 0.25556],
    109: [0, 0.45833, 0, 0, 0.86667],
    110: [0, 0.45833, 0, 0, 0.56111],
    111: [0, 0.45833, 0, 0, 0.55],
    112: [0.19444, 0.45833, 0, 0, 0.56111],
    113: [0.19444, 0.45833, 0, 0, 0.56111],
    114: [0, 0.45833, 0.01528, 0, 0.37222],
    115: [0, 0.45833, 0, 0, 0.42167],
    116: [0, 0.58929, 0, 0, 0.40417],
    117: [0, 0.45833, 0, 0, 0.56111],
    118: [0, 0.45833, 0.01528, 0, 0.5],
    119: [0, 0.45833, 0.01528, 0, 0.74445],
    120: [0, 0.45833, 0, 0, 0.5],
    121: [0.19444, 0.45833, 0.01528, 0, 0.5],
    122: [0, 0.45833, 0, 0, 0.47639],
    126: [0.35, 0.34444, 0, 0, 0.55],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.69444, 0, 0, 0.55],
    176: [0, 0.69444, 0, 0, 0.73334],
    180: [0, 0.69444, 0, 0, 0.55],
    184: [0.17014, 0, 0, 0, 0.48889],
    305: [0, 0.45833, 0, 0, 0.25556],
    567: [0.19444, 0.45833, 0, 0, 0.28611],
    710: [0, 0.69444, 0, 0, 0.55],
    711: [0, 0.63542, 0, 0, 0.55],
    713: [0, 0.63778, 0, 0, 0.55],
    728: [0, 0.69444, 0, 0, 0.55],
    729: [0, 0.69444, 0, 0, 0.30556],
    730: [0, 0.69444, 0, 0, 0.73334],
    732: [0, 0.69444, 0, 0, 0.55],
    733: [0, 0.69444, 0, 0, 0.55],
    915: [0, 0.69444, 0, 0, 0.58056],
    916: [0, 0.69444, 0, 0, 0.91667],
    920: [0, 0.69444, 0, 0, 0.85556],
    923: [0, 0.69444, 0, 0, 0.67223],
    926: [0, 0.69444, 0, 0, 0.73334],
    928: [0, 0.69444, 0, 0, 0.79445],
    931: [0, 0.69444, 0, 0, 0.79445],
    933: [0, 0.69444, 0, 0, 0.85556],
    934: [0, 0.69444, 0, 0, 0.79445],
    936: [0, 0.69444, 0, 0, 0.85556],
    937: [0, 0.69444, 0, 0, 0.79445],
    8211: [0, 0.45833, 0.03056, 0, 0.55],
    8212: [0, 0.45833, 0.03056, 0, 1.10001],
    8216: [0, 0.69444, 0, 0, 0.30556],
    8217: [0, 0.69444, 0, 0, 0.30556],
    8220: [0, 0.69444, 0, 0, 0.55834],
    8221: [0, 0.69444, 0, 0, 0.55834]
  },
  "SansSerif-Italic": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0.05733, 0, 0.31945],
    34: [0, 0.69444, 316e-5, 0, 0.5],
    35: [0.19444, 0.69444, 0.05087, 0, 0.83334],
    36: [0.05556, 0.75, 0.11156, 0, 0.5],
    37: [0.05556, 0.75, 0.03126, 0, 0.83334],
    38: [0, 0.69444, 0.03058, 0, 0.75834],
    39: [0, 0.69444, 0.07816, 0, 0.27778],
    40: [0.25, 0.75, 0.13164, 0, 0.38889],
    41: [0.25, 0.75, 0.02536, 0, 0.38889],
    42: [0, 0.75, 0.11775, 0, 0.5],
    43: [0.08333, 0.58333, 0.02536, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0.01946, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0.13164, 0, 0.5],
    48: [0, 0.65556, 0.11156, 0, 0.5],
    49: [0, 0.65556, 0.11156, 0, 0.5],
    50: [0, 0.65556, 0.11156, 0, 0.5],
    51: [0, 0.65556, 0.11156, 0, 0.5],
    52: [0, 0.65556, 0.11156, 0, 0.5],
    53: [0, 0.65556, 0.11156, 0, 0.5],
    54: [0, 0.65556, 0.11156, 0, 0.5],
    55: [0, 0.65556, 0.11156, 0, 0.5],
    56: [0, 0.65556, 0.11156, 0, 0.5],
    57: [0, 0.65556, 0.11156, 0, 0.5],
    58: [0, 0.44444, 0.02502, 0, 0.27778],
    59: [0.125, 0.44444, 0.02502, 0, 0.27778],
    61: [-0.13, 0.37, 0.05087, 0, 0.77778],
    63: [0, 0.69444, 0.11809, 0, 0.47222],
    64: [0, 0.69444, 0.07555, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0.08293, 0, 0.66667],
    67: [0, 0.69444, 0.11983, 0, 0.63889],
    68: [0, 0.69444, 0.07555, 0, 0.72223],
    69: [0, 0.69444, 0.11983, 0, 0.59722],
    70: [0, 0.69444, 0.13372, 0, 0.56945],
    71: [0, 0.69444, 0.11983, 0, 0.66667],
    72: [0, 0.69444, 0.08094, 0, 0.70834],
    73: [0, 0.69444, 0.13372, 0, 0.27778],
    74: [0, 0.69444, 0.08094, 0, 0.47222],
    75: [0, 0.69444, 0.11983, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0.08094, 0, 0.875],
    78: [0, 0.69444, 0.08094, 0, 0.70834],
    79: [0, 0.69444, 0.07555, 0, 0.73611],
    80: [0, 0.69444, 0.08293, 0, 0.63889],
    81: [0.125, 0.69444, 0.07555, 0, 0.73611],
    82: [0, 0.69444, 0.08293, 0, 0.64584],
    83: [0, 0.69444, 0.09205, 0, 0.55556],
    84: [0, 0.69444, 0.13372, 0, 0.68056],
    85: [0, 0.69444, 0.08094, 0, 0.6875],
    86: [0, 0.69444, 0.1615, 0, 0.66667],
    87: [0, 0.69444, 0.1615, 0, 0.94445],
    88: [0, 0.69444, 0.13372, 0, 0.66667],
    89: [0, 0.69444, 0.17261, 0, 0.66667],
    90: [0, 0.69444, 0.11983, 0, 0.61111],
    91: [0.25, 0.75, 0.15942, 0, 0.28889],
    93: [0.25, 0.75, 0.08719, 0, 0.28889],
    94: [0, 0.69444, 0.0799, 0, 0.5],
    95: [0.35, 0.09444, 0.08616, 0, 0.5],
    97: [0, 0.44444, 981e-5, 0, 0.48056],
    98: [0, 0.69444, 0.03057, 0, 0.51667],
    99: [0, 0.44444, 0.08336, 0, 0.44445],
    100: [0, 0.69444, 0.09483, 0, 0.51667],
    101: [0, 0.44444, 0.06778, 0, 0.44445],
    102: [0, 0.69444, 0.21705, 0, 0.30556],
    103: [0.19444, 0.44444, 0.10836, 0, 0.5],
    104: [0, 0.69444, 0.01778, 0, 0.51667],
    105: [0, 0.67937, 0.09718, 0, 0.23889],
    106: [0.19444, 0.67937, 0.09162, 0, 0.26667],
    107: [0, 0.69444, 0.08336, 0, 0.48889],
    108: [0, 0.69444, 0.09483, 0, 0.23889],
    109: [0, 0.44444, 0.01778, 0, 0.79445],
    110: [0, 0.44444, 0.01778, 0, 0.51667],
    111: [0, 0.44444, 0.06613, 0, 0.5],
    112: [0.19444, 0.44444, 0.0389, 0, 0.51667],
    113: [0.19444, 0.44444, 0.04169, 0, 0.51667],
    114: [0, 0.44444, 0.10836, 0, 0.34167],
    115: [0, 0.44444, 0.0778, 0, 0.38333],
    116: [0, 0.57143, 0.07225, 0, 0.36111],
    117: [0, 0.44444, 0.04169, 0, 0.51667],
    118: [0, 0.44444, 0.10836, 0, 0.46111],
    119: [0, 0.44444, 0.10836, 0, 0.68334],
    120: [0, 0.44444, 0.09169, 0, 0.46111],
    121: [0.19444, 0.44444, 0.10836, 0, 0.46111],
    122: [0, 0.44444, 0.08752, 0, 0.43472],
    126: [0.35, 0.32659, 0.08826, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0.06385, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.73752],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0.04169, 0, 0.23889],
    567: [0.19444, 0.44444, 0.04169, 0, 0.26667],
    710: [0, 0.69444, 0.0799, 0, 0.5],
    711: [0, 0.63194, 0.08432, 0, 0.5],
    713: [0, 0.60889, 0.08776, 0, 0.5],
    714: [0, 0.69444, 0.09205, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0.09483, 0, 0.5],
    729: [0, 0.67937, 0.07774, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.73752],
    732: [0, 0.67659, 0.08826, 0, 0.5],
    733: [0, 0.69444, 0.09205, 0, 0.5],
    915: [0, 0.69444, 0.13372, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0.07555, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0.12816, 0, 0.66667],
    928: [0, 0.69444, 0.08094, 0, 0.70834],
    931: [0, 0.69444, 0.11983, 0, 0.72222],
    933: [0, 0.69444, 0.09031, 0, 0.77778],
    934: [0, 0.69444, 0.04603, 0, 0.72222],
    936: [0, 0.69444, 0.09031, 0, 0.77778],
    937: [0, 0.69444, 0.08293, 0, 0.72222],
    8211: [0, 0.44444, 0.08616, 0, 0.5],
    8212: [0, 0.44444, 0.08616, 0, 1],
    8216: [0, 0.69444, 0.07816, 0, 0.27778],
    8217: [0, 0.69444, 0.07816, 0, 0.27778],
    8220: [0, 0.69444, 0.14205, 0, 0.5],
    8221: [0, 0.69444, 316e-5, 0, 0.5]
  },
  "SansSerif-Regular": {
    32: [0, 0, 0, 0, 0.25],
    33: [0, 0.69444, 0, 0, 0.31945],
    34: [0, 0.69444, 0, 0, 0.5],
    35: [0.19444, 0.69444, 0, 0, 0.83334],
    36: [0.05556, 0.75, 0, 0, 0.5],
    37: [0.05556, 0.75, 0, 0, 0.83334],
    38: [0, 0.69444, 0, 0, 0.75834],
    39: [0, 0.69444, 0, 0, 0.27778],
    40: [0.25, 0.75, 0, 0, 0.38889],
    41: [0.25, 0.75, 0, 0, 0.38889],
    42: [0, 0.75, 0, 0, 0.5],
    43: [0.08333, 0.58333, 0, 0, 0.77778],
    44: [0.125, 0.08333, 0, 0, 0.27778],
    45: [0, 0.44444, 0, 0, 0.33333],
    46: [0, 0.08333, 0, 0, 0.27778],
    47: [0.25, 0.75, 0, 0, 0.5],
    48: [0, 0.65556, 0, 0, 0.5],
    49: [0, 0.65556, 0, 0, 0.5],
    50: [0, 0.65556, 0, 0, 0.5],
    51: [0, 0.65556, 0, 0, 0.5],
    52: [0, 0.65556, 0, 0, 0.5],
    53: [0, 0.65556, 0, 0, 0.5],
    54: [0, 0.65556, 0, 0, 0.5],
    55: [0, 0.65556, 0, 0, 0.5],
    56: [0, 0.65556, 0, 0, 0.5],
    57: [0, 0.65556, 0, 0, 0.5],
    58: [0, 0.44444, 0, 0, 0.27778],
    59: [0.125, 0.44444, 0, 0, 0.27778],
    61: [-0.13, 0.37, 0, 0, 0.77778],
    63: [0, 0.69444, 0, 0, 0.47222],
    64: [0, 0.69444, 0, 0, 0.66667],
    65: [0, 0.69444, 0, 0, 0.66667],
    66: [0, 0.69444, 0, 0, 0.66667],
    67: [0, 0.69444, 0, 0, 0.63889],
    68: [0, 0.69444, 0, 0, 0.72223],
    69: [0, 0.69444, 0, 0, 0.59722],
    70: [0, 0.69444, 0, 0, 0.56945],
    71: [0, 0.69444, 0, 0, 0.66667],
    72: [0, 0.69444, 0, 0, 0.70834],
    73: [0, 0.69444, 0, 0, 0.27778],
    74: [0, 0.69444, 0, 0, 0.47222],
    75: [0, 0.69444, 0, 0, 0.69445],
    76: [0, 0.69444, 0, 0, 0.54167],
    77: [0, 0.69444, 0, 0, 0.875],
    78: [0, 0.69444, 0, 0, 0.70834],
    79: [0, 0.69444, 0, 0, 0.73611],
    80: [0, 0.69444, 0, 0, 0.63889],
    81: [0.125, 0.69444, 0, 0, 0.73611],
    82: [0, 0.69444, 0, 0, 0.64584],
    83: [0, 0.69444, 0, 0, 0.55556],
    84: [0, 0.69444, 0, 0, 0.68056],
    85: [0, 0.69444, 0, 0, 0.6875],
    86: [0, 0.69444, 0.01389, 0, 0.66667],
    87: [0, 0.69444, 0.01389, 0, 0.94445],
    88: [0, 0.69444, 0, 0, 0.66667],
    89: [0, 0.69444, 0.025, 0, 0.66667],
    90: [0, 0.69444, 0, 0, 0.61111],
    91: [0.25, 0.75, 0, 0, 0.28889],
    93: [0.25, 0.75, 0, 0, 0.28889],
    94: [0, 0.69444, 0, 0, 0.5],
    95: [0.35, 0.09444, 0.02778, 0, 0.5],
    97: [0, 0.44444, 0, 0, 0.48056],
    98: [0, 0.69444, 0, 0, 0.51667],
    99: [0, 0.44444, 0, 0, 0.44445],
    100: [0, 0.69444, 0, 0, 0.51667],
    101: [0, 0.44444, 0, 0, 0.44445],
    102: [0, 0.69444, 0.06944, 0, 0.30556],
    103: [0.19444, 0.44444, 0.01389, 0, 0.5],
    104: [0, 0.69444, 0, 0, 0.51667],
    105: [0, 0.67937, 0, 0, 0.23889],
    106: [0.19444, 0.67937, 0, 0, 0.26667],
    107: [0, 0.69444, 0, 0, 0.48889],
    108: [0, 0.69444, 0, 0, 0.23889],
    109: [0, 0.44444, 0, 0, 0.79445],
    110: [0, 0.44444, 0, 0, 0.51667],
    111: [0, 0.44444, 0, 0, 0.5],
    112: [0.19444, 0.44444, 0, 0, 0.51667],
    113: [0.19444, 0.44444, 0, 0, 0.51667],
    114: [0, 0.44444, 0.01389, 0, 0.34167],
    115: [0, 0.44444, 0, 0, 0.38333],
    116: [0, 0.57143, 0, 0, 0.36111],
    117: [0, 0.44444, 0, 0, 0.51667],
    118: [0, 0.44444, 0.01389, 0, 0.46111],
    119: [0, 0.44444, 0.01389, 0, 0.68334],
    120: [0, 0.44444, 0, 0, 0.46111],
    121: [0.19444, 0.44444, 0.01389, 0, 0.46111],
    122: [0, 0.44444, 0, 0, 0.43472],
    126: [0.35, 0.32659, 0, 0, 0.5],
    160: [0, 0, 0, 0, 0.25],
    168: [0, 0.67937, 0, 0, 0.5],
    176: [0, 0.69444, 0, 0, 0.66667],
    184: [0.17014, 0, 0, 0, 0.44445],
    305: [0, 0.44444, 0, 0, 0.23889],
    567: [0.19444, 0.44444, 0, 0, 0.26667],
    710: [0, 0.69444, 0, 0, 0.5],
    711: [0, 0.63194, 0, 0, 0.5],
    713: [0, 0.60889, 0, 0, 0.5],
    714: [0, 0.69444, 0, 0, 0.5],
    715: [0, 0.69444, 0, 0, 0.5],
    728: [0, 0.69444, 0, 0, 0.5],
    729: [0, 0.67937, 0, 0, 0.27778],
    730: [0, 0.69444, 0, 0, 0.66667],
    732: [0, 0.67659, 0, 0, 0.5],
    733: [0, 0.69444, 0, 0, 0.5],
    915: [0, 0.69444, 0, 0, 0.54167],
    916: [0, 0.69444, 0, 0, 0.83334],
    920: [0, 0.69444, 0, 0, 0.77778],
    923: [0, 0.69444, 0, 0, 0.61111],
    926: [0, 0.69444, 0, 0, 0.66667],
    928: [0, 0.69444, 0, 0, 0.70834],
    931: [0, 0.69444, 0, 0, 0.72222],
    933: [0, 0.69444, 0, 0, 0.77778],
    934: [0, 0.69444, 0, 0, 0.72222],
    936: [0, 0.69444, 0, 0, 0.77778],
    937: [0, 0.69444, 0, 0, 0.72222],
    8211: [0, 0.44444, 0.02778, 0, 0.5],
    8212: [0, 0.44444, 0.02778, 0, 1],
    8216: [0, 0.69444, 0, 0, 0.27778],
    8217: [0, 0.69444, 0, 0, 0.27778],
    8220: [0, 0.69444, 0, 0, 0.5],
    8221: [0, 0.69444, 0, 0, 0.5]
  },
  "Script-Regular": {
    32: [0, 0, 0, 0, 0.25],
    65: [0, 0.7, 0.22925, 0, 0.80253],
    66: [0, 0.7, 0.04087, 0, 0.90757],
    67: [0, 0.7, 0.1689, 0, 0.66619],
    68: [0, 0.7, 0.09371, 0, 0.77443],
    69: [0, 0.7, 0.18583, 0, 0.56162],
    70: [0, 0.7, 0.13634, 0, 0.89544],
    71: [0, 0.7, 0.17322, 0, 0.60961],
    72: [0, 0.7, 0.29694, 0, 0.96919],
    73: [0, 0.7, 0.19189, 0, 0.80907],
    74: [0.27778, 0.7, 0.19189, 0, 1.05159],
    75: [0, 0.7, 0.31259, 0, 0.91364],
    76: [0, 0.7, 0.19189, 0, 0.87373],
    77: [0, 0.7, 0.15981, 0, 1.08031],
    78: [0, 0.7, 0.3525, 0, 0.9015],
    79: [0, 0.7, 0.08078, 0, 0.73787],
    80: [0, 0.7, 0.08078, 0, 1.01262],
    81: [0, 0.7, 0.03305, 0, 0.88282],
    82: [0, 0.7, 0.06259, 0, 0.85],
    83: [0, 0.7, 0.19189, 0, 0.86767],
    84: [0, 0.7, 0.29087, 0, 0.74697],
    85: [0, 0.7, 0.25815, 0, 0.79996],
    86: [0, 0.7, 0.27523, 0, 0.62204],
    87: [0, 0.7, 0.27523, 0, 0.80532],
    88: [0, 0.7, 0.26006, 0, 0.94445],
    89: [0, 0.7, 0.2939, 0, 0.70961],
    90: [0, 0.7, 0.24037, 0, 0.8212],
    160: [0, 0, 0, 0, 0.25]
  },
  "Size1-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.35001, 0.85, 0, 0, 0.45834],
    41: [0.35001, 0.85, 0, 0, 0.45834],
    47: [0.35001, 0.85, 0, 0, 0.57778],
    91: [0.35001, 0.85, 0, 0, 0.41667],
    92: [0.35001, 0.85, 0, 0, 0.57778],
    93: [0.35001, 0.85, 0, 0, 0.41667],
    123: [0.35001, 0.85, 0, 0, 0.58334],
    125: [0.35001, 0.85, 0, 0, 0.58334],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.72222, 0, 0, 0.55556],
    732: [0, 0.72222, 0, 0, 0.55556],
    770: [0, 0.72222, 0, 0, 0.55556],
    771: [0, 0.72222, 0, 0, 0.55556],
    8214: [-99e-5, 0.601, 0, 0, 0.77778],
    8593: [1e-5, 0.6, 0, 0, 0.66667],
    8595: [1e-5, 0.6, 0, 0, 0.66667],
    8657: [1e-5, 0.6, 0, 0, 0.77778],
    8659: [1e-5, 0.6, 0, 0, 0.77778],
    8719: [0.25001, 0.75, 0, 0, 0.94445],
    8720: [0.25001, 0.75, 0, 0, 0.94445],
    8721: [0.25001, 0.75, 0, 0, 1.05556],
    8730: [0.35001, 0.85, 0, 0, 1],
    8739: [-599e-5, 0.606, 0, 0, 0.33333],
    8741: [-599e-5, 0.606, 0, 0, 0.55556],
    8747: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8748: [0.306, 0.805, 0.19445, 0, 0.47222],
    8749: [0.306, 0.805, 0.19445, 0, 0.47222],
    8750: [0.30612, 0.805, 0.19445, 0, 0.47222],
    8896: [0.25001, 0.75, 0, 0, 0.83334],
    8897: [0.25001, 0.75, 0, 0, 0.83334],
    8898: [0.25001, 0.75, 0, 0, 0.83334],
    8899: [0.25001, 0.75, 0, 0, 0.83334],
    8968: [0.35001, 0.85, 0, 0, 0.47222],
    8969: [0.35001, 0.85, 0, 0, 0.47222],
    8970: [0.35001, 0.85, 0, 0, 0.47222],
    8971: [0.35001, 0.85, 0, 0, 0.47222],
    9168: [-99e-5, 0.601, 0, 0, 0.66667],
    10216: [0.35001, 0.85, 0, 0, 0.47222],
    10217: [0.35001, 0.85, 0, 0, 0.47222],
    10752: [0.25001, 0.75, 0, 0, 1.11111],
    10753: [0.25001, 0.75, 0, 0, 1.11111],
    10754: [0.25001, 0.75, 0, 0, 1.11111],
    10756: [0.25001, 0.75, 0, 0, 0.83334],
    10758: [0.25001, 0.75, 0, 0, 0.83334]
  },
  "Size2-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.65002, 1.15, 0, 0, 0.59722],
    41: [0.65002, 1.15, 0, 0, 0.59722],
    47: [0.65002, 1.15, 0, 0, 0.81111],
    91: [0.65002, 1.15, 0, 0, 0.47222],
    92: [0.65002, 1.15, 0, 0, 0.81111],
    93: [0.65002, 1.15, 0, 0, 0.47222],
    123: [0.65002, 1.15, 0, 0, 0.66667],
    125: [0.65002, 1.15, 0, 0, 0.66667],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1],
    732: [0, 0.75, 0, 0, 1],
    770: [0, 0.75, 0, 0, 1],
    771: [0, 0.75, 0, 0, 1],
    8719: [0.55001, 1.05, 0, 0, 1.27778],
    8720: [0.55001, 1.05, 0, 0, 1.27778],
    8721: [0.55001, 1.05, 0, 0, 1.44445],
    8730: [0.65002, 1.15, 0, 0, 1],
    8747: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8748: [0.862, 1.36, 0.44445, 0, 0.55556],
    8749: [0.862, 1.36, 0.44445, 0, 0.55556],
    8750: [0.86225, 1.36, 0.44445, 0, 0.55556],
    8896: [0.55001, 1.05, 0, 0, 1.11111],
    8897: [0.55001, 1.05, 0, 0, 1.11111],
    8898: [0.55001, 1.05, 0, 0, 1.11111],
    8899: [0.55001, 1.05, 0, 0, 1.11111],
    8968: [0.65002, 1.15, 0, 0, 0.52778],
    8969: [0.65002, 1.15, 0, 0, 0.52778],
    8970: [0.65002, 1.15, 0, 0, 0.52778],
    8971: [0.65002, 1.15, 0, 0, 0.52778],
    10216: [0.65002, 1.15, 0, 0, 0.61111],
    10217: [0.65002, 1.15, 0, 0, 0.61111],
    10752: [0.55001, 1.05, 0, 0, 1.51112],
    10753: [0.55001, 1.05, 0, 0, 1.51112],
    10754: [0.55001, 1.05, 0, 0, 1.51112],
    10756: [0.55001, 1.05, 0, 0, 1.11111],
    10758: [0.55001, 1.05, 0, 0, 1.11111]
  },
  "Size3-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [0.95003, 1.45, 0, 0, 0.73611],
    41: [0.95003, 1.45, 0, 0, 0.73611],
    47: [0.95003, 1.45, 0, 0, 1.04445],
    91: [0.95003, 1.45, 0, 0, 0.52778],
    92: [0.95003, 1.45, 0, 0, 1.04445],
    93: [0.95003, 1.45, 0, 0, 0.52778],
    123: [0.95003, 1.45, 0, 0, 0.75],
    125: [0.95003, 1.45, 0, 0, 0.75],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.75, 0, 0, 1.44445],
    732: [0, 0.75, 0, 0, 1.44445],
    770: [0, 0.75, 0, 0, 1.44445],
    771: [0, 0.75, 0, 0, 1.44445],
    8730: [0.95003, 1.45, 0, 0, 1],
    8968: [0.95003, 1.45, 0, 0, 0.58334],
    8969: [0.95003, 1.45, 0, 0, 0.58334],
    8970: [0.95003, 1.45, 0, 0, 0.58334],
    8971: [0.95003, 1.45, 0, 0, 0.58334],
    10216: [0.95003, 1.45, 0, 0, 0.75],
    10217: [0.95003, 1.45, 0, 0, 0.75]
  },
  "Size4-Regular": {
    32: [0, 0, 0, 0, 0.25],
    40: [1.25003, 1.75, 0, 0, 0.79167],
    41: [1.25003, 1.75, 0, 0, 0.79167],
    47: [1.25003, 1.75, 0, 0, 1.27778],
    91: [1.25003, 1.75, 0, 0, 0.58334],
    92: [1.25003, 1.75, 0, 0, 1.27778],
    93: [1.25003, 1.75, 0, 0, 0.58334],
    123: [1.25003, 1.75, 0, 0, 0.80556],
    125: [1.25003, 1.75, 0, 0, 0.80556],
    160: [0, 0, 0, 0, 0.25],
    710: [0, 0.825, 0, 0, 1.8889],
    732: [0, 0.825, 0, 0, 1.8889],
    770: [0, 0.825, 0, 0, 1.8889],
    771: [0, 0.825, 0, 0, 1.8889],
    8730: [1.25003, 1.75, 0, 0, 1],
    8968: [1.25003, 1.75, 0, 0, 0.63889],
    8969: [1.25003, 1.75, 0, 0, 0.63889],
    8970: [1.25003, 1.75, 0, 0, 0.63889],
    8971: [1.25003, 1.75, 0, 0, 0.63889],
    9115: [0.64502, 1.155, 0, 0, 0.875],
    9116: [1e-5, 0.6, 0, 0, 0.875],
    9117: [0.64502, 1.155, 0, 0, 0.875],
    9118: [0.64502, 1.155, 0, 0, 0.875],
    9119: [1e-5, 0.6, 0, 0, 0.875],
    9120: [0.64502, 1.155, 0, 0, 0.875],
    9121: [0.64502, 1.155, 0, 0, 0.66667],
    9122: [-99e-5, 0.601, 0, 0, 0.66667],
    9123: [0.64502, 1.155, 0, 0, 0.66667],
    9124: [0.64502, 1.155, 0, 0, 0.66667],
    9125: [-99e-5, 0.601, 0, 0, 0.66667],
    9126: [0.64502, 1.155, 0, 0, 0.66667],
    9127: [1e-5, 0.9, 0, 0, 0.88889],
    9128: [0.65002, 1.15, 0, 0, 0.88889],
    9129: [0.90001, 0, 0, 0, 0.88889],
    9130: [0, 0.3, 0, 0, 0.88889],
    9131: [1e-5, 0.9, 0, 0, 0.88889],
    9132: [0.65002, 1.15, 0, 0, 0.88889],
    9133: [0.90001, 0, 0, 0, 0.88889],
    9143: [0.88502, 0.915, 0, 0, 1.05556],
    10216: [1.25003, 1.75, 0, 0, 0.80556],
    10217: [1.25003, 1.75, 0, 0, 0.80556],
    57344: [-499e-5, 0.605, 0, 0, 1.05556],
    57345: [-499e-5, 0.605, 0, 0, 1.05556],
    57680: [0, 0.12, 0, 0, 0.45],
    57681: [0, 0.12, 0, 0, 0.45],
    57682: [0, 0.12, 0, 0, 0.45],
    57683: [0, 0.12, 0, 0, 0.45]
  },
  "Typewriter-Regular": {
    32: [0, 0, 0, 0, 0.525],
    33: [0, 0.61111, 0, 0, 0.525],
    34: [0, 0.61111, 0, 0, 0.525],
    35: [0, 0.61111, 0, 0, 0.525],
    36: [0.08333, 0.69444, 0, 0, 0.525],
    37: [0.08333, 0.69444, 0, 0, 0.525],
    38: [0, 0.61111, 0, 0, 0.525],
    39: [0, 0.61111, 0, 0, 0.525],
    40: [0.08333, 0.69444, 0, 0, 0.525],
    41: [0.08333, 0.69444, 0, 0, 0.525],
    42: [0, 0.52083, 0, 0, 0.525],
    43: [-0.08056, 0.53055, 0, 0, 0.525],
    44: [0.13889, 0.125, 0, 0, 0.525],
    45: [-0.08056, 0.53055, 0, 0, 0.525],
    46: [0, 0.125, 0, 0, 0.525],
    47: [0.08333, 0.69444, 0, 0, 0.525],
    48: [0, 0.61111, 0, 0, 0.525],
    49: [0, 0.61111, 0, 0, 0.525],
    50: [0, 0.61111, 0, 0, 0.525],
    51: [0, 0.61111, 0, 0, 0.525],
    52: [0, 0.61111, 0, 0, 0.525],
    53: [0, 0.61111, 0, 0, 0.525],
    54: [0, 0.61111, 0, 0, 0.525],
    55: [0, 0.61111, 0, 0, 0.525],
    56: [0, 0.61111, 0, 0, 0.525],
    57: [0, 0.61111, 0, 0, 0.525],
    58: [0, 0.43056, 0, 0, 0.525],
    59: [0.13889, 0.43056, 0, 0, 0.525],
    60: [-0.05556, 0.55556, 0, 0, 0.525],
    61: [-0.19549, 0.41562, 0, 0, 0.525],
    62: [-0.05556, 0.55556, 0, 0, 0.525],
    63: [0, 0.61111, 0, 0, 0.525],
    64: [0, 0.61111, 0, 0, 0.525],
    65: [0, 0.61111, 0, 0, 0.525],
    66: [0, 0.61111, 0, 0, 0.525],
    67: [0, 0.61111, 0, 0, 0.525],
    68: [0, 0.61111, 0, 0, 0.525],
    69: [0, 0.61111, 0, 0, 0.525],
    70: [0, 0.61111, 0, 0, 0.525],
    71: [0, 0.61111, 0, 0, 0.525],
    72: [0, 0.61111, 0, 0, 0.525],
    73: [0, 0.61111, 0, 0, 0.525],
    74: [0, 0.61111, 0, 0, 0.525],
    75: [0, 0.61111, 0, 0, 0.525],
    76: [0, 0.61111, 0, 0, 0.525],
    77: [0, 0.61111, 0, 0, 0.525],
    78: [0, 0.61111, 0, 0, 0.525],
    79: [0, 0.61111, 0, 0, 0.525],
    80: [0, 0.61111, 0, 0, 0.525],
    81: [0.13889, 0.61111, 0, 0, 0.525],
    82: [0, 0.61111, 0, 0, 0.525],
    83: [0, 0.61111, 0, 0, 0.525],
    84: [0, 0.61111, 0, 0, 0.525],
    85: [0, 0.61111, 0, 0, 0.525],
    86: [0, 0.61111, 0, 0, 0.525],
    87: [0, 0.61111, 0, 0, 0.525],
    88: [0, 0.61111, 0, 0, 0.525],
    89: [0, 0.61111, 0, 0, 0.525],
    90: [0, 0.61111, 0, 0, 0.525],
    91: [0.08333, 0.69444, 0, 0, 0.525],
    92: [0.08333, 0.69444, 0, 0, 0.525],
    93: [0.08333, 0.69444, 0, 0, 0.525],
    94: [0, 0.61111, 0, 0, 0.525],
    95: [0.09514, 0, 0, 0, 0.525],
    96: [0, 0.61111, 0, 0, 0.525],
    97: [0, 0.43056, 0, 0, 0.525],
    98: [0, 0.61111, 0, 0, 0.525],
    99: [0, 0.43056, 0, 0, 0.525],
    100: [0, 0.61111, 0, 0, 0.525],
    101: [0, 0.43056, 0, 0, 0.525],
    102: [0, 0.61111, 0, 0, 0.525],
    103: [0.22222, 0.43056, 0, 0, 0.525],
    104: [0, 0.61111, 0, 0, 0.525],
    105: [0, 0.61111, 0, 0, 0.525],
    106: [0.22222, 0.61111, 0, 0, 0.525],
    107: [0, 0.61111, 0, 0, 0.525],
    108: [0, 0.61111, 0, 0, 0.525],
    109: [0, 0.43056, 0, 0, 0.525],
    110: [0, 0.43056, 0, 0, 0.525],
    111: [0, 0.43056, 0, 0, 0.525],
    112: [0.22222, 0.43056, 0, 0, 0.525],
    113: [0.22222, 0.43056, 0, 0, 0.525],
    114: [0, 0.43056, 0, 0, 0.525],
    115: [0, 0.43056, 0, 0, 0.525],
    116: [0, 0.55358, 0, 0, 0.525],
    117: [0, 0.43056, 0, 0, 0.525],
    118: [0, 0.43056, 0, 0, 0.525],
    119: [0, 0.43056, 0, 0, 0.525],
    120: [0, 0.43056, 0, 0, 0.525],
    121: [0.22222, 0.43056, 0, 0, 0.525],
    122: [0, 0.43056, 0, 0, 0.525],
    123: [0.08333, 0.69444, 0, 0, 0.525],
    124: [0.08333, 0.69444, 0, 0, 0.525],
    125: [0.08333, 0.69444, 0, 0, 0.525],
    126: [0, 0.61111, 0, 0, 0.525],
    127: [0, 0.61111, 0, 0, 0.525],
    160: [0, 0, 0, 0, 0.525],
    176: [0, 0.61111, 0, 0, 0.525],
    184: [0.19445, 0, 0, 0, 0.525],
    305: [0, 0.43056, 0, 0, 0.525],
    567: [0.22222, 0.43056, 0, 0, 0.525],
    711: [0, 0.56597, 0, 0, 0.525],
    713: [0, 0.56555, 0, 0, 0.525],
    714: [0, 0.61111, 0, 0, 0.525],
    715: [0, 0.61111, 0, 0, 0.525],
    728: [0, 0.61111, 0, 0, 0.525],
    730: [0, 0.61111, 0, 0, 0.525],
    770: [0, 0.61111, 0, 0, 0.525],
    771: [0, 0.61111, 0, 0, 0.525],
    776: [0, 0.61111, 0, 0, 0.525],
    915: [0, 0.61111, 0, 0, 0.525],
    916: [0, 0.61111, 0, 0, 0.525],
    920: [0, 0.61111, 0, 0, 0.525],
    923: [0, 0.61111, 0, 0, 0.525],
    926: [0, 0.61111, 0, 0, 0.525],
    928: [0, 0.61111, 0, 0, 0.525],
    931: [0, 0.61111, 0, 0, 0.525],
    933: [0, 0.61111, 0, 0, 0.525],
    934: [0, 0.61111, 0, 0, 0.525],
    936: [0, 0.61111, 0, 0, 0.525],
    937: [0, 0.61111, 0, 0, 0.525],
    8216: [0, 0.61111, 0, 0, 0.525],
    8217: [0, 0.61111, 0, 0, 0.525],
    8242: [0, 0.61111, 0, 0, 0.525],
    9251: [0.11111, 0.21944, 0, 0, 0.525]
  }
}, Bi = {
  slant: [0.25, 0.25, 0.25],
  // sigma1
  space: [0, 0, 0],
  // sigma2
  stretch: [0, 0, 0],
  // sigma3
  shrink: [0, 0, 0],
  // sigma4
  xHeight: [0.431, 0.431, 0.431],
  // sigma5
  quad: [1, 1.171, 1.472],
  // sigma6
  extraSpace: [0, 0, 0],
  // sigma7
  num1: [0.677, 0.732, 0.925],
  // sigma8
  num2: [0.394, 0.384, 0.387],
  // sigma9
  num3: [0.444, 0.471, 0.504],
  // sigma10
  denom1: [0.686, 0.752, 1.025],
  // sigma11
  denom2: [0.345, 0.344, 0.532],
  // sigma12
  sup1: [0.413, 0.503, 0.504],
  // sigma13
  sup2: [0.363, 0.431, 0.404],
  // sigma14
  sup3: [0.289, 0.286, 0.294],
  // sigma15
  sub1: [0.15, 0.143, 0.2],
  // sigma16
  sub2: [0.247, 0.286, 0.4],
  // sigma17
  supDrop: [0.386, 0.353, 0.494],
  // sigma18
  subDrop: [0.05, 0.071, 0.1],
  // sigma19
  delim1: [2.39, 1.7, 1.98],
  // sigma20
  delim2: [1.01, 1.157, 1.42],
  // sigma21
  axisHeight: [0.25, 0.25, 0.25],
  // sigma22
  // These font metrics are extracted from TeX by using tftopl on cmex10.tfm;
  // they correspond to the font parameters of the extension fonts (family 3).
  // See the TeXbook, page 441. In AMSTeX, the extension fonts scale; to
  // match cmex7, we'd use cmex7.tfm values for script and scriptscript
  // values.
  defaultRuleThickness: [0.04, 0.049, 0.049],
  // xi8; cmex7: 0.049
  bigOpSpacing1: [0.111, 0.111, 0.111],
  // xi9
  bigOpSpacing2: [0.166, 0.166, 0.166],
  // xi10
  bigOpSpacing3: [0.2, 0.2, 0.2],
  // xi11
  bigOpSpacing4: [0.6, 0.611, 0.611],
  // xi12; cmex7: 0.611
  bigOpSpacing5: [0.1, 0.143, 0.143],
  // xi13; cmex7: 0.143
  // The \sqrt rule width is taken from the height of the surd character.
  // Since we use the same font at all sizes, this thickness doesn't scale.
  sqrtRuleThickness: [0.04, 0.04, 0.04],
  // This value determines how large a pt is, for metrics which are defined
  // in terms of pts.
  // This value is also used in katex.scss; if you change it make sure the
  // values match.
  ptPerEm: [10, 10, 10],
  // The space between adjacent `|` columns in an array definition. From
  // `\showthe\doublerulesep` in LaTeX. Equals 2.0 / ptPerEm.
  doubleRuleSep: [0.2, 0.2, 0.2],
  // The width of separator lines in {array} environments. From
  // `\showthe\arrayrulewidth` in LaTeX. Equals 0.4 / ptPerEm.
  arrayRuleWidth: [0.04, 0.04, 0.04],
  // Two values from LaTeX source2e:
  fboxsep: [0.3, 0.3, 0.3],
  //        3 pt / ptPerEm
  fboxrule: [0.04, 0.04, 0.04]
  // 0.4 pt / ptPerEm
}, jl = {
  // Latin-1
  Å: "A",
  Ð: "D",
  Þ: "o",
  å: "a",
  ð: "d",
  þ: "o",
  // Cyrillic
  А: "A",
  Б: "B",
  В: "B",
  Г: "F",
  Д: "A",
  Е: "E",
  Ж: "K",
  З: "3",
  И: "N",
  Й: "N",
  К: "K",
  Л: "N",
  М: "M",
  Н: "H",
  О: "O",
  П: "N",
  Р: "P",
  С: "C",
  Т: "T",
  У: "y",
  Ф: "O",
  Х: "X",
  Ц: "U",
  Ч: "h",
  Ш: "W",
  Щ: "W",
  Ъ: "B",
  Ы: "X",
  Ь: "B",
  Э: "3",
  Ю: "X",
  Я: "R",
  а: "a",
  б: "b",
  в: "a",
  г: "r",
  д: "y",
  е: "e",
  ж: "m",
  з: "e",
  и: "n",
  й: "n",
  к: "n",
  л: "n",
  м: "m",
  н: "n",
  о: "o",
  п: "n",
  р: "p",
  с: "c",
  т: "o",
  у: "y",
  ф: "b",
  х: "x",
  ц: "n",
  ч: "n",
  ш: "w",
  щ: "w",
  ъ: "a",
  ы: "m",
  ь: "a",
  э: "e",
  ю: "m",
  я: "r"
};
function kp(r, e) {
  Pr[r] = e;
}
function ko(r, e, t) {
  if (!Pr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), i = Pr[e][n];
  if (!i && r[0] in jl && (n = jl[r[0]].charCodeAt(0), i = Pr[e][n]), !i && t === "text" && ld(n) && (i = Pr[e][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var Ga = {};
function Sp(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Ga[e]) {
    var t = Ga[e] = {
      cssEmPerMu: Bi.quad[e] / 18
    };
    for (var n in Bi)
      Bi.hasOwnProperty(n) && (t[n] = Bi[n][e]);
  }
  return Ga[e];
}
var ht = {
  math: {},
  text: {}
};
function c(r, e, t, n, i, a) {
  ht[r][i] = {
    font: e,
    group: t,
    replace: n
  }, a && n && (ht[r][n] = ht[r][i]);
}
var u = "math", H = "text", p = "main", w = "ams", ft = "accent-token", me = "bin", jt = "close", Z0 = "inner", Ce = "mathord", At = "op-token", ir = "open", Ii = "punct", x = "rel", bn = "spacing", A = "textord";
c(u, p, x, "≡", "\\equiv", !0);
c(u, p, x, "≺", "\\prec", !0);
c(u, p, x, "≻", "\\succ", !0);
c(u, p, x, "∼", "\\sim", !0);
c(u, p, x, "⊥", "\\perp");
c(u, p, x, "⪯", "\\preceq", !0);
c(u, p, x, "⪰", "\\succeq", !0);
c(u, p, x, "≃", "\\simeq", !0);
c(u, p, x, "∣", "\\mid", !0);
c(u, p, x, "≪", "\\ll", !0);
c(u, p, x, "≫", "\\gg", !0);
c(u, p, x, "≍", "\\asymp", !0);
c(u, p, x, "∥", "\\parallel");
c(u, p, x, "⋈", "\\bowtie", !0);
c(u, p, x, "⌣", "\\smile", !0);
c(u, p, x, "⊑", "\\sqsubseteq", !0);
c(u, p, x, "⊒", "\\sqsupseteq", !0);
c(u, p, x, "≐", "\\doteq", !0);
c(u, p, x, "⌢", "\\frown", !0);
c(u, p, x, "∋", "\\ni", !0);
c(u, p, x, "∝", "\\propto", !0);
c(u, p, x, "⊢", "\\vdash", !0);
c(u, p, x, "⊣", "\\dashv", !0);
c(u, p, x, "∋", "\\owns");
c(u, p, Ii, ".", "\\ldotp");
c(u, p, Ii, "⋅", "\\cdotp");
c(u, p, Ii, "⋅", "·");
c(H, p, A, "⋅", "·");
c(u, p, A, "#", "\\#");
c(H, p, A, "#", "\\#");
c(u, p, A, "&", "\\&");
c(H, p, A, "&", "\\&");
c(u, p, A, "ℵ", "\\aleph", !0);
c(u, p, A, "∀", "\\forall", !0);
c(u, p, A, "ℏ", "\\hbar", !0);
c(u, p, A, "∃", "\\exists", !0);
c(u, p, A, "∇", "\\nabla", !0);
c(u, p, A, "♭", "\\flat", !0);
c(u, p, A, "ℓ", "\\ell", !0);
c(u, p, A, "♮", "\\natural", !0);
c(u, p, A, "♣", "\\clubsuit", !0);
c(u, p, A, "℘", "\\wp", !0);
c(u, p, A, "♯", "\\sharp", !0);
c(u, p, A, "♢", "\\diamondsuit", !0);
c(u, p, A, "ℜ", "\\Re", !0);
c(u, p, A, "♡", "\\heartsuit", !0);
c(u, p, A, "ℑ", "\\Im", !0);
c(u, p, A, "♠", "\\spadesuit", !0);
c(u, p, A, "§", "\\S", !0);
c(H, p, A, "§", "\\S");
c(u, p, A, "¶", "\\P", !0);
c(H, p, A, "¶", "\\P");
c(u, p, A, "†", "\\dag");
c(H, p, A, "†", "\\dag");
c(H, p, A, "†", "\\textdagger");
c(u, p, A, "‡", "\\ddag");
c(H, p, A, "‡", "\\ddag");
c(H, p, A, "‡", "\\textdaggerdbl");
c(u, p, jt, "⎱", "\\rmoustache", !0);
c(u, p, ir, "⎰", "\\lmoustache", !0);
c(u, p, jt, "⟯", "\\rgroup", !0);
c(u, p, ir, "⟮", "\\lgroup", !0);
c(u, p, me, "∓", "\\mp", !0);
c(u, p, me, "⊖", "\\ominus", !0);
c(u, p, me, "⊎", "\\uplus", !0);
c(u, p, me, "⊓", "\\sqcap", !0);
c(u, p, me, "∗", "\\ast");
c(u, p, me, "⊔", "\\sqcup", !0);
c(u, p, me, "◯", "\\bigcirc", !0);
c(u, p, me, "∙", "\\bullet", !0);
c(u, p, me, "‡", "\\ddagger");
c(u, p, me, "≀", "\\wr", !0);
c(u, p, me, "⨿", "\\amalg");
c(u, p, me, "&", "\\And");
c(u, p, x, "⟵", "\\longleftarrow", !0);
c(u, p, x, "⇐", "\\Leftarrow", !0);
c(u, p, x, "⟸", "\\Longleftarrow", !0);
c(u, p, x, "⟶", "\\longrightarrow", !0);
c(u, p, x, "⇒", "\\Rightarrow", !0);
c(u, p, x, "⟹", "\\Longrightarrow", !0);
c(u, p, x, "↔", "\\leftrightarrow", !0);
c(u, p, x, "⟷", "\\longleftrightarrow", !0);
c(u, p, x, "⇔", "\\Leftrightarrow", !0);
c(u, p, x, "⟺", "\\Longleftrightarrow", !0);
c(u, p, x, "↦", "\\mapsto", !0);
c(u, p, x, "⟼", "\\longmapsto", !0);
c(u, p, x, "↗", "\\nearrow", !0);
c(u, p, x, "↩", "\\hookleftarrow", !0);
c(u, p, x, "↪", "\\hookrightarrow", !0);
c(u, p, x, "↘", "\\searrow", !0);
c(u, p, x, "↼", "\\leftharpoonup", !0);
c(u, p, x, "⇀", "\\rightharpoonup", !0);
c(u, p, x, "↙", "\\swarrow", !0);
c(u, p, x, "↽", "\\leftharpoondown", !0);
c(u, p, x, "⇁", "\\rightharpoondown", !0);
c(u, p, x, "↖", "\\nwarrow", !0);
c(u, p, x, "⇌", "\\rightleftharpoons", !0);
c(u, w, x, "≮", "\\nless", !0);
c(u, w, x, "", "\\@nleqslant");
c(u, w, x, "", "\\@nleqq");
c(u, w, x, "⪇", "\\lneq", !0);
c(u, w, x, "≨", "\\lneqq", !0);
c(u, w, x, "", "\\@lvertneqq");
c(u, w, x, "⋦", "\\lnsim", !0);
c(u, w, x, "⪉", "\\lnapprox", !0);
c(u, w, x, "⊀", "\\nprec", !0);
c(u, w, x, "⋠", "\\npreceq", !0);
c(u, w, x, "⋨", "\\precnsim", !0);
c(u, w, x, "⪹", "\\precnapprox", !0);
c(u, w, x, "≁", "\\nsim", !0);
c(u, w, x, "", "\\@nshortmid");
c(u, w, x, "∤", "\\nmid", !0);
c(u, w, x, "⊬", "\\nvdash", !0);
c(u, w, x, "⊭", "\\nvDash", !0);
c(u, w, x, "⋪", "\\ntriangleleft");
c(u, w, x, "⋬", "\\ntrianglelefteq", !0);
c(u, w, x, "⊊", "\\subsetneq", !0);
c(u, w, x, "", "\\@varsubsetneq");
c(u, w, x, "⫋", "\\subsetneqq", !0);
c(u, w, x, "", "\\@varsubsetneqq");
c(u, w, x, "≯", "\\ngtr", !0);
c(u, w, x, "", "\\@ngeqslant");
c(u, w, x, "", "\\@ngeqq");
c(u, w, x, "⪈", "\\gneq", !0);
c(u, w, x, "≩", "\\gneqq", !0);
c(u, w, x, "", "\\@gvertneqq");
c(u, w, x, "⋧", "\\gnsim", !0);
c(u, w, x, "⪊", "\\gnapprox", !0);
c(u, w, x, "⊁", "\\nsucc", !0);
c(u, w, x, "⋡", "\\nsucceq", !0);
c(u, w, x, "⋩", "\\succnsim", !0);
c(u, w, x, "⪺", "\\succnapprox", !0);
c(u, w, x, "≆", "\\ncong", !0);
c(u, w, x, "", "\\@nshortparallel");
c(u, w, x, "∦", "\\nparallel", !0);
c(u, w, x, "⊯", "\\nVDash", !0);
c(u, w, x, "⋫", "\\ntriangleright");
c(u, w, x, "⋭", "\\ntrianglerighteq", !0);
c(u, w, x, "", "\\@nsupseteqq");
c(u, w, x, "⊋", "\\supsetneq", !0);
c(u, w, x, "", "\\@varsupsetneq");
c(u, w, x, "⫌", "\\supsetneqq", !0);
c(u, w, x, "", "\\@varsupsetneqq");
c(u, w, x, "⊮", "\\nVdash", !0);
c(u, w, x, "⪵", "\\precneqq", !0);
c(u, w, x, "⪶", "\\succneqq", !0);
c(u, w, x, "", "\\@nsubseteqq");
c(u, w, me, "⊴", "\\unlhd");
c(u, w, me, "⊵", "\\unrhd");
c(u, w, x, "↚", "\\nleftarrow", !0);
c(u, w, x, "↛", "\\nrightarrow", !0);
c(u, w, x, "⇍", "\\nLeftarrow", !0);
c(u, w, x, "⇏", "\\nRightarrow", !0);
c(u, w, x, "↮", "\\nleftrightarrow", !0);
c(u, w, x, "⇎", "\\nLeftrightarrow", !0);
c(u, w, x, "△", "\\vartriangle");
c(u, w, A, "ℏ", "\\hslash");
c(u, w, A, "▽", "\\triangledown");
c(u, w, A, "◊", "\\lozenge");
c(u, w, A, "Ⓢ", "\\circledS");
c(u, w, A, "®", "\\circledR");
c(H, w, A, "®", "\\circledR");
c(u, w, A, "∡", "\\measuredangle", !0);
c(u, w, A, "∄", "\\nexists");
c(u, w, A, "℧", "\\mho");
c(u, w, A, "Ⅎ", "\\Finv", !0);
c(u, w, A, "⅁", "\\Game", !0);
c(u, w, A, "‵", "\\backprime");
c(u, w, A, "▲", "\\blacktriangle");
c(u, w, A, "▼", "\\blacktriangledown");
c(u, w, A, "■", "\\blacksquare");
c(u, w, A, "⧫", "\\blacklozenge");
c(u, w, A, "★", "\\bigstar");
c(u, w, A, "∢", "\\sphericalangle", !0);
c(u, w, A, "∁", "\\complement", !0);
c(u, w, A, "ð", "\\eth", !0);
c(H, p, A, "ð", "ð");
c(u, w, A, "╱", "\\diagup");
c(u, w, A, "╲", "\\diagdown");
c(u, w, A, "□", "\\square");
c(u, w, A, "□", "\\Box");
c(u, w, A, "◊", "\\Diamond");
c(u, w, A, "¥", "\\yen", !0);
c(H, w, A, "¥", "\\yen", !0);
c(u, w, A, "✓", "\\checkmark", !0);
c(H, w, A, "✓", "\\checkmark");
c(u, w, A, "ℶ", "\\beth", !0);
c(u, w, A, "ℸ", "\\daleth", !0);
c(u, w, A, "ℷ", "\\gimel", !0);
c(u, w, A, "ϝ", "\\digamma", !0);
c(u, w, A, "ϰ", "\\varkappa");
c(u, w, ir, "┌", "\\@ulcorner", !0);
c(u, w, jt, "┐", "\\@urcorner", !0);
c(u, w, ir, "└", "\\@llcorner", !0);
c(u, w, jt, "┘", "\\@lrcorner", !0);
c(u, w, x, "≦", "\\leqq", !0);
c(u, w, x, "⩽", "\\leqslant", !0);
c(u, w, x, "⪕", "\\eqslantless", !0);
c(u, w, x, "≲", "\\lesssim", !0);
c(u, w, x, "⪅", "\\lessapprox", !0);
c(u, w, x, "≊", "\\approxeq", !0);
c(u, w, me, "⋖", "\\lessdot");
c(u, w, x, "⋘", "\\lll", !0);
c(u, w, x, "≶", "\\lessgtr", !0);
c(u, w, x, "⋚", "\\lesseqgtr", !0);
c(u, w, x, "⪋", "\\lesseqqgtr", !0);
c(u, w, x, "≑", "\\doteqdot");
c(u, w, x, "≓", "\\risingdotseq", !0);
c(u, w, x, "≒", "\\fallingdotseq", !0);
c(u, w, x, "∽", "\\backsim", !0);
c(u, w, x, "⋍", "\\backsimeq", !0);
c(u, w, x, "⫅", "\\subseteqq", !0);
c(u, w, x, "⋐", "\\Subset", !0);
c(u, w, x, "⊏", "\\sqsubset", !0);
c(u, w, x, "≼", "\\preccurlyeq", !0);
c(u, w, x, "⋞", "\\curlyeqprec", !0);
c(u, w, x, "≾", "\\precsim", !0);
c(u, w, x, "⪷", "\\precapprox", !0);
c(u, w, x, "⊲", "\\vartriangleleft");
c(u, w, x, "⊴", "\\trianglelefteq");
c(u, w, x, "⊨", "\\vDash", !0);
c(u, w, x, "⊪", "\\Vvdash", !0);
c(u, w, x, "⌣", "\\smallsmile");
c(u, w, x, "⌢", "\\smallfrown");
c(u, w, x, "≏", "\\bumpeq", !0);
c(u, w, x, "≎", "\\Bumpeq", !0);
c(u, w, x, "≧", "\\geqq", !0);
c(u, w, x, "⩾", "\\geqslant", !0);
c(u, w, x, "⪖", "\\eqslantgtr", !0);
c(u, w, x, "≳", "\\gtrsim", !0);
c(u, w, x, "⪆", "\\gtrapprox", !0);
c(u, w, me, "⋗", "\\gtrdot");
c(u, w, x, "⋙", "\\ggg", !0);
c(u, w, x, "≷", "\\gtrless", !0);
c(u, w, x, "⋛", "\\gtreqless", !0);
c(u, w, x, "⪌", "\\gtreqqless", !0);
c(u, w, x, "≖", "\\eqcirc", !0);
c(u, w, x, "≗", "\\circeq", !0);
c(u, w, x, "≜", "\\triangleq", !0);
c(u, w, x, "∼", "\\thicksim");
c(u, w, x, "≈", "\\thickapprox");
c(u, w, x, "⫆", "\\supseteqq", !0);
c(u, w, x, "⋑", "\\Supset", !0);
c(u, w, x, "⊐", "\\sqsupset", !0);
c(u, w, x, "≽", "\\succcurlyeq", !0);
c(u, w, x, "⋟", "\\curlyeqsucc", !0);
c(u, w, x, "≿", "\\succsim", !0);
c(u, w, x, "⪸", "\\succapprox", !0);
c(u, w, x, "⊳", "\\vartriangleright");
c(u, w, x, "⊵", "\\trianglerighteq");
c(u, w, x, "⊩", "\\Vdash", !0);
c(u, w, x, "∣", "\\shortmid");
c(u, w, x, "∥", "\\shortparallel");
c(u, w, x, "≬", "\\between", !0);
c(u, w, x, "⋔", "\\pitchfork", !0);
c(u, w, x, "∝", "\\varpropto");
c(u, w, x, "◀", "\\blacktriangleleft");
c(u, w, x, "∴", "\\therefore", !0);
c(u, w, x, "∍", "\\backepsilon");
c(u, w, x, "▶", "\\blacktriangleright");
c(u, w, x, "∵", "\\because", !0);
c(u, w, x, "⋘", "\\llless");
c(u, w, x, "⋙", "\\gggtr");
c(u, w, me, "⊲", "\\lhd");
c(u, w, me, "⊳", "\\rhd");
c(u, w, x, "≂", "\\eqsim", !0);
c(u, p, x, "⋈", "\\Join");
c(u, w, x, "≑", "\\Doteq", !0);
c(u, w, me, "∔", "\\dotplus", !0);
c(u, w, me, "∖", "\\smallsetminus");
c(u, w, me, "⋒", "\\Cap", !0);
c(u, w, me, "⋓", "\\Cup", !0);
c(u, w, me, "⩞", "\\doublebarwedge", !0);
c(u, w, me, "⊟", "\\boxminus", !0);
c(u, w, me, "⊞", "\\boxplus", !0);
c(u, w, me, "⋇", "\\divideontimes", !0);
c(u, w, me, "⋉", "\\ltimes", !0);
c(u, w, me, "⋊", "\\rtimes", !0);
c(u, w, me, "⋋", "\\leftthreetimes", !0);
c(u, w, me, "⋌", "\\rightthreetimes", !0);
c(u, w, me, "⋏", "\\curlywedge", !0);
c(u, w, me, "⋎", "\\curlyvee", !0);
c(u, w, me, "⊝", "\\circleddash", !0);
c(u, w, me, "⊛", "\\circledast", !0);
c(u, w, me, "⋅", "\\centerdot");
c(u, w, me, "⊺", "\\intercal", !0);
c(u, w, me, "⋒", "\\doublecap");
c(u, w, me, "⋓", "\\doublecup");
c(u, w, me, "⊠", "\\boxtimes", !0);
c(u, w, x, "⇢", "\\dashrightarrow", !0);
c(u, w, x, "⇠", "\\dashleftarrow", !0);
c(u, w, x, "⇇", "\\leftleftarrows", !0);
c(u, w, x, "⇆", "\\leftrightarrows", !0);
c(u, w, x, "⇚", "\\Lleftarrow", !0);
c(u, w, x, "↞", "\\twoheadleftarrow", !0);
c(u, w, x, "↢", "\\leftarrowtail", !0);
c(u, w, x, "↫", "\\looparrowleft", !0);
c(u, w, x, "⇋", "\\leftrightharpoons", !0);
c(u, w, x, "↶", "\\curvearrowleft", !0);
c(u, w, x, "↺", "\\circlearrowleft", !0);
c(u, w, x, "↰", "\\Lsh", !0);
c(u, w, x, "⇈", "\\upuparrows", !0);
c(u, w, x, "↿", "\\upharpoonleft", !0);
c(u, w, x, "⇃", "\\downharpoonleft", !0);
c(u, p, x, "⊶", "\\origof", !0);
c(u, p, x, "⊷", "\\imageof", !0);
c(u, w, x, "⊸", "\\multimap", !0);
c(u, w, x, "↭", "\\leftrightsquigarrow", !0);
c(u, w, x, "⇉", "\\rightrightarrows", !0);
c(u, w, x, "⇄", "\\rightleftarrows", !0);
c(u, w, x, "↠", "\\twoheadrightarrow", !0);
c(u, w, x, "↣", "\\rightarrowtail", !0);
c(u, w, x, "↬", "\\looparrowright", !0);
c(u, w, x, "↷", "\\curvearrowright", !0);
c(u, w, x, "↻", "\\circlearrowright", !0);
c(u, w, x, "↱", "\\Rsh", !0);
c(u, w, x, "⇊", "\\downdownarrows", !0);
c(u, w, x, "↾", "\\upharpoonright", !0);
c(u, w, x, "⇂", "\\downharpoonright", !0);
c(u, w, x, "⇝", "\\rightsquigarrow", !0);
c(u, w, x, "⇝", "\\leadsto");
c(u, w, x, "⇛", "\\Rrightarrow", !0);
c(u, w, x, "↾", "\\restriction");
c(u, p, A, "‘", "`");
c(u, p, A, "$", "\\$");
c(H, p, A, "$", "\\$");
c(H, p, A, "$", "\\textdollar");
c(u, p, A, "%", "\\%");
c(H, p, A, "%", "\\%");
c(u, p, A, "_", "\\_");
c(H, p, A, "_", "\\_");
c(H, p, A, "_", "\\textunderscore");
c(u, p, A, "∠", "\\angle", !0);
c(u, p, A, "∞", "\\infty", !0);
c(u, p, A, "′", "\\prime");
c(u, p, A, "△", "\\triangle");
c(u, p, A, "Γ", "\\Gamma", !0);
c(u, p, A, "Δ", "\\Delta", !0);
c(u, p, A, "Θ", "\\Theta", !0);
c(u, p, A, "Λ", "\\Lambda", !0);
c(u, p, A, "Ξ", "\\Xi", !0);
c(u, p, A, "Π", "\\Pi", !0);
c(u, p, A, "Σ", "\\Sigma", !0);
c(u, p, A, "Υ", "\\Upsilon", !0);
c(u, p, A, "Φ", "\\Phi", !0);
c(u, p, A, "Ψ", "\\Psi", !0);
c(u, p, A, "Ω", "\\Omega", !0);
c(u, p, A, "A", "Α");
c(u, p, A, "B", "Β");
c(u, p, A, "E", "Ε");
c(u, p, A, "Z", "Ζ");
c(u, p, A, "H", "Η");
c(u, p, A, "I", "Ι");
c(u, p, A, "K", "Κ");
c(u, p, A, "M", "Μ");
c(u, p, A, "N", "Ν");
c(u, p, A, "O", "Ο");
c(u, p, A, "P", "Ρ");
c(u, p, A, "T", "Τ");
c(u, p, A, "X", "Χ");
c(u, p, A, "¬", "\\neg", !0);
c(u, p, A, "¬", "\\lnot");
c(u, p, A, "⊤", "\\top");
c(u, p, A, "⊥", "\\bot");
c(u, p, A, "∅", "\\emptyset");
c(u, w, A, "∅", "\\varnothing");
c(u, p, Ce, "α", "\\alpha", !0);
c(u, p, Ce, "β", "\\beta", !0);
c(u, p, Ce, "γ", "\\gamma", !0);
c(u, p, Ce, "δ", "\\delta", !0);
c(u, p, Ce, "ϵ", "\\epsilon", !0);
c(u, p, Ce, "ζ", "\\zeta", !0);
c(u, p, Ce, "η", "\\eta", !0);
c(u, p, Ce, "θ", "\\theta", !0);
c(u, p, Ce, "ι", "\\iota", !0);
c(u, p, Ce, "κ", "\\kappa", !0);
c(u, p, Ce, "λ", "\\lambda", !0);
c(u, p, Ce, "μ", "\\mu", !0);
c(u, p, Ce, "ν", "\\nu", !0);
c(u, p, Ce, "ξ", "\\xi", !0);
c(u, p, Ce, "ο", "\\omicron", !0);
c(u, p, Ce, "π", "\\pi", !0);
c(u, p, Ce, "ρ", "\\rho", !0);
c(u, p, Ce, "σ", "\\sigma", !0);
c(u, p, Ce, "τ", "\\tau", !0);
c(u, p, Ce, "υ", "\\upsilon", !0);
c(u, p, Ce, "ϕ", "\\phi", !0);
c(u, p, Ce, "χ", "\\chi", !0);
c(u, p, Ce, "ψ", "\\psi", !0);
c(u, p, Ce, "ω", "\\omega", !0);
c(u, p, Ce, "ε", "\\varepsilon", !0);
c(u, p, Ce, "ϑ", "\\vartheta", !0);
c(u, p, Ce, "ϖ", "\\varpi", !0);
c(u, p, Ce, "ϱ", "\\varrho", !0);
c(u, p, Ce, "ς", "\\varsigma", !0);
c(u, p, Ce, "φ", "\\varphi", !0);
c(u, p, me, "∗", "*", !0);
c(u, p, me, "+", "+");
c(u, p, me, "−", "-", !0);
c(u, p, me, "⋅", "\\cdot", !0);
c(u, p, me, "∘", "\\circ", !0);
c(u, p, me, "÷", "\\div", !0);
c(u, p, me, "±", "\\pm", !0);
c(u, p, me, "×", "\\times", !0);
c(u, p, me, "∩", "\\cap", !0);
c(u, p, me, "∪", "\\cup", !0);
c(u, p, me, "∖", "\\setminus", !0);
c(u, p, me, "∧", "\\land");
c(u, p, me, "∨", "\\lor");
c(u, p, me, "∧", "\\wedge", !0);
c(u, p, me, "∨", "\\vee", !0);
c(u, p, A, "√", "\\surd");
c(u, p, ir, "⟨", "\\langle", !0);
c(u, p, ir, "∣", "\\lvert");
c(u, p, ir, "∥", "\\lVert");
c(u, p, jt, "?", "?");
c(u, p, jt, "!", "!");
c(u, p, jt, "⟩", "\\rangle", !0);
c(u, p, jt, "∣", "\\rvert");
c(u, p, jt, "∥", "\\rVert");
c(u, p, x, "=", "=");
c(u, p, x, ":", ":");
c(u, p, x, "≈", "\\approx", !0);
c(u, p, x, "≅", "\\cong", !0);
c(u, p, x, "≥", "\\ge");
c(u, p, x, "≥", "\\geq", !0);
c(u, p, x, "←", "\\gets");
c(u, p, x, ">", "\\gt", !0);
c(u, p, x, "∈", "\\in", !0);
c(u, p, x, "", "\\@not");
c(u, p, x, "⊂", "\\subset", !0);
c(u, p, x, "⊃", "\\supset", !0);
c(u, p, x, "⊆", "\\subseteq", !0);
c(u, p, x, "⊇", "\\supseteq", !0);
c(u, w, x, "⊈", "\\nsubseteq", !0);
c(u, w, x, "⊉", "\\nsupseteq", !0);
c(u, p, x, "⊨", "\\models");
c(u, p, x, "←", "\\leftarrow", !0);
c(u, p, x, "≤", "\\le");
c(u, p, x, "≤", "\\leq", !0);
c(u, p, x, "<", "\\lt", !0);
c(u, p, x, "→", "\\rightarrow", !0);
c(u, p, x, "→", "\\to");
c(u, w, x, "≱", "\\ngeq", !0);
c(u, w, x, "≰", "\\nleq", !0);
c(u, p, bn, " ", "\\ ");
c(u, p, bn, " ", "\\space");
c(u, p, bn, " ", "\\nobreakspace");
c(H, p, bn, " ", "\\ ");
c(H, p, bn, " ", " ");
c(H, p, bn, " ", "\\space");
c(H, p, bn, " ", "\\nobreakspace");
c(u, p, bn, "", "\\nobreak");
c(u, p, bn, "", "\\allowbreak");
c(u, p, Ii, ",", ",");
c(u, p, Ii, ";", ";");
c(u, w, me, "⊼", "\\barwedge", !0);
c(u, w, me, "⊻", "\\veebar", !0);
c(u, p, me, "⊙", "\\odot", !0);
c(u, p, me, "⊕", "\\oplus", !0);
c(u, p, me, "⊗", "\\otimes", !0);
c(u, p, A, "∂", "\\partial", !0);
c(u, p, me, "⊘", "\\oslash", !0);
c(u, w, me, "⊚", "\\circledcirc", !0);
c(u, w, me, "⊡", "\\boxdot", !0);
c(u, p, me, "△", "\\bigtriangleup");
c(u, p, me, "▽", "\\bigtriangledown");
c(u, p, me, "†", "\\dagger");
c(u, p, me, "⋄", "\\diamond");
c(u, p, me, "⋆", "\\star");
c(u, p, me, "◃", "\\triangleleft");
c(u, p, me, "▹", "\\triangleright");
c(u, p, ir, "{", "\\{");
c(H, p, A, "{", "\\{");
c(H, p, A, "{", "\\textbraceleft");
c(u, p, jt, "}", "\\}");
c(H, p, A, "}", "\\}");
c(H, p, A, "}", "\\textbraceright");
c(u, p, ir, "{", "\\lbrace");
c(u, p, jt, "}", "\\rbrace");
c(u, p, ir, "[", "\\lbrack", !0);
c(H, p, A, "[", "\\lbrack", !0);
c(u, p, jt, "]", "\\rbrack", !0);
c(H, p, A, "]", "\\rbrack", !0);
c(u, p, ir, "(", "\\lparen", !0);
c(u, p, jt, ")", "\\rparen", !0);
c(H, p, A, "<", "\\textless", !0);
c(H, p, A, ">", "\\textgreater", !0);
c(u, p, ir, "⌊", "\\lfloor", !0);
c(u, p, jt, "⌋", "\\rfloor", !0);
c(u, p, ir, "⌈", "\\lceil", !0);
c(u, p, jt, "⌉", "\\rceil", !0);
c(u, p, A, "\\", "\\backslash");
c(u, p, A, "∣", "|");
c(u, p, A, "∣", "\\vert");
c(H, p, A, "|", "\\textbar", !0);
c(u, p, A, "∥", "\\|");
c(u, p, A, "∥", "\\Vert");
c(H, p, A, "∥", "\\textbardbl");
c(H, p, A, "~", "\\textasciitilde");
c(H, p, A, "\\", "\\textbackslash");
c(H, p, A, "^", "\\textasciicircum");
c(u, p, x, "↑", "\\uparrow", !0);
c(u, p, x, "⇑", "\\Uparrow", !0);
c(u, p, x, "↓", "\\downarrow", !0);
c(u, p, x, "⇓", "\\Downarrow", !0);
c(u, p, x, "↕", "\\updownarrow", !0);
c(u, p, x, "⇕", "\\Updownarrow", !0);
c(u, p, At, "∐", "\\coprod");
c(u, p, At, "⋁", "\\bigvee");
c(u, p, At, "⋀", "\\bigwedge");
c(u, p, At, "⨄", "\\biguplus");
c(u, p, At, "⋂", "\\bigcap");
c(u, p, At, "⋃", "\\bigcup");
c(u, p, At, "∫", "\\int");
c(u, p, At, "∫", "\\intop");
c(u, p, At, "∬", "\\iint");
c(u, p, At, "∭", "\\iiint");
c(u, p, At, "∏", "\\prod");
c(u, p, At, "∑", "\\sum");
c(u, p, At, "⨂", "\\bigotimes");
c(u, p, At, "⨁", "\\bigoplus");
c(u, p, At, "⨀", "\\bigodot");
c(u, p, At, "∮", "\\oint");
c(u, p, At, "∯", "\\oiint");
c(u, p, At, "∰", "\\oiiint");
c(u, p, At, "⨆", "\\bigsqcup");
c(u, p, At, "∫", "\\smallint");
c(H, p, Z0, "…", "\\textellipsis");
c(u, p, Z0, "…", "\\mathellipsis");
c(H, p, Z0, "…", "\\ldots", !0);
c(u, p, Z0, "…", "\\ldots", !0);
c(u, p, Z0, "⋯", "\\@cdots", !0);
c(u, p, Z0, "⋱", "\\ddots", !0);
c(u, p, A, "⋮", "\\varvdots");
c(H, p, A, "⋮", "\\varvdots");
c(u, p, ft, "ˊ", "\\acute");
c(u, p, ft, "ˋ", "\\grave");
c(u, p, ft, "¨", "\\ddot");
c(u, p, ft, "~", "\\tilde");
c(u, p, ft, "ˉ", "\\bar");
c(u, p, ft, "˘", "\\breve");
c(u, p, ft, "ˇ", "\\check");
c(u, p, ft, "^", "\\hat");
c(u, p, ft, "⃗", "\\vec");
c(u, p, ft, "˙", "\\dot");
c(u, p, ft, "˚", "\\mathring");
c(u, p, Ce, "", "\\@imath");
c(u, p, Ce, "", "\\@jmath");
c(u, p, A, "ı", "ı");
c(u, p, A, "ȷ", "ȷ");
c(H, p, A, "ı", "\\i", !0);
c(H, p, A, "ȷ", "\\j", !0);
c(H, p, A, "ß", "\\ss", !0);
c(H, p, A, "æ", "\\ae", !0);
c(H, p, A, "œ", "\\oe", !0);
c(H, p, A, "ø", "\\o", !0);
c(H, p, A, "Æ", "\\AE", !0);
c(H, p, A, "Œ", "\\OE", !0);
c(H, p, A, "Ø", "\\O", !0);
c(H, p, ft, "ˊ", "\\'");
c(H, p, ft, "ˋ", "\\`");
c(H, p, ft, "ˆ", "\\^");
c(H, p, ft, "˜", "\\~");
c(H, p, ft, "ˉ", "\\=");
c(H, p, ft, "˘", "\\u");
c(H, p, ft, "˙", "\\.");
c(H, p, ft, "¸", "\\c");
c(H, p, ft, "˚", "\\r");
c(H, p, ft, "ˇ", "\\v");
c(H, p, ft, "¨", '\\"');
c(H, p, ft, "˝", "\\H");
c(H, p, ft, "◯", "\\textcircled");
var fd = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(H, p, A, "–", "--", !0);
c(H, p, A, "–", "\\textendash");
c(H, p, A, "—", "---", !0);
c(H, p, A, "—", "\\textemdash");
c(H, p, A, "‘", "`", !0);
c(H, p, A, "‘", "\\textquoteleft");
c(H, p, A, "’", "'", !0);
c(H, p, A, "’", "\\textquoteright");
c(H, p, A, "“", "``", !0);
c(H, p, A, "“", "\\textquotedblleft");
c(H, p, A, "”", "''", !0);
c(H, p, A, "”", "\\textquotedblright");
c(u, p, A, "°", "\\degree", !0);
c(H, p, A, "°", "\\degree");
c(H, p, A, "°", "\\textdegree", !0);
c(u, p, A, "£", "\\pounds");
c(u, p, A, "£", "\\mathsterling", !0);
c(H, p, A, "£", "\\pounds");
c(H, p, A, "£", "\\textsterling", !0);
c(u, w, A, "✠", "\\maltese");
c(H, w, A, "✠", "\\maltese");
var Kl = '0123456789/@."';
for (var ja = 0; ja < Kl.length; ja++) {
  var Zl = Kl.charAt(ja);
  c(u, p, A, Zl, Zl);
}
var Xl = '0123456789!@*()-=+";:?/.,';
for (var Ka = 0; Ka < Xl.length; Ka++) {
  var Jl = Xl.charAt(Ka);
  c(H, p, A, Jl, Jl);
}
var ha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Za = 0; Za < ha.length; Za++) {
  var Li = ha.charAt(Za);
  c(u, p, Ce, Li, Li), c(H, p, A, Li, Li);
}
c(u, w, A, "C", "ℂ");
c(H, w, A, "C", "ℂ");
c(u, w, A, "H", "ℍ");
c(H, w, A, "H", "ℍ");
c(u, w, A, "N", "ℕ");
c(H, w, A, "N", "ℕ");
c(u, w, A, "P", "ℙ");
c(H, w, A, "P", "ℙ");
c(u, w, A, "Q", "ℚ");
c(H, w, A, "Q", "ℚ");
c(u, w, A, "R", "ℝ");
c(H, w, A, "R", "ℝ");
c(u, w, A, "Z", "ℤ");
c(H, w, A, "Z", "ℤ");
c(u, p, Ce, "h", "ℎ");
c(H, p, Ce, "h", "ℎ");
var Te;
for (var Ht = 0; Ht < ha.length; Ht++) {
  var wt = ha.charAt(Ht);
  Te = String.fromCharCode(55349, 56320 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56372 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56424 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56580 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56684 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56736 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56788 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56840 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56944 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Ht < 26 && (Te = String.fromCharCode(55349, 56632 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te), Te = String.fromCharCode(55349, 56476 + Ht), c(u, p, Ce, wt, Te), c(H, p, A, wt, Te));
}
Te = "𝕜";
c(u, p, Ce, "k", Te);
c(H, p, A, "k", Te);
for (var r0 = 0; r0 < 10; r0++) {
  var In = r0.toString();
  Te = String.fromCharCode(55349, 57294 + r0), c(u, p, Ce, In, Te), c(H, p, A, In, Te), Te = String.fromCharCode(55349, 57314 + r0), c(u, p, Ce, In, Te), c(H, p, A, In, Te), Te = String.fromCharCode(55349, 57324 + r0), c(u, p, Ce, In, Te), c(H, p, A, In, Te), Te = String.fromCharCode(55349, 57334 + r0), c(u, p, Ce, In, Te), c(H, p, A, In, Te);
}
var Ts = "ÐÞþ";
for (var Xa = 0; Xa < Ts.length; Xa++) {
  var Di = Ts.charAt(Xa);
  c(u, p, Ce, Di, Di), c(H, p, A, Di, Di);
}
var Ns = {
  mathClass: "mathbf",
  textClass: "textbf",
  font: "Main-Bold"
}, Yl = {
  mathClass: "mathnormal",
  textClass: "textit",
  font: "Math-Italic"
}, Ql = {
  mathClass: "boldsymbol",
  textClass: "boldsymbol",
  font: "Main-BoldItalic"
}, _p = {
  mathClass: "mathscr",
  textClass: "textscr",
  font: "Script-Regular"
}, o0 = {
  mathClass: "",
  textClass: "",
  font: ""
}, ec = {
  mathClass: "mathfrak",
  textClass: "textfrak",
  font: "Fraktur-Regular"
}, tc = {
  mathClass: "mathbb",
  textClass: "textbb",
  font: "AMS-Regular"
}, rc = {
  mathClass: "mathboldfrak",
  textClass: "textboldfrak",
  font: "Fraktur-Regular"
}, Ms = {
  mathClass: "mathsf",
  textClass: "textsf",
  font: "SansSerif-Regular"
}, Es = {
  mathClass: "mathboldsf",
  textClass: "textboldsf",
  font: "SansSerif-Bold"
}, nc = {
  mathClass: "mathitsf",
  textClass: "textitsf",
  font: "SansSerif-Italic"
}, zs = {
  mathClass: "mathtt",
  textClass: "texttt",
  font: "Typewriter-Regular"
}, ic = [
  Ns,
  Ns,
  // A-Z, a-z
  Yl,
  Yl,
  // A-Z, a-z
  Ql,
  Ql,
  // A-Z, a-z
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  _p,
  o0,
  // A-Z script, a-z — no font
  o0,
  o0,
  // A-Z bold script, a-z bold script — no font
  ec,
  ec,
  // A-Z, a-z
  tc,
  tc,
  // A-Z double-struck, k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  rc,
  rc,
  // A-Z, a-z
  Ms,
  Ms,
  // A-Z, a-z
  Es,
  Es,
  // A-Z, a-z
  nc,
  nc,
  // A-Z, a-z
  o0,
  o0,
  // A-Z bold italic sans, a-z bold italic sans - no font
  zs,
  zs
  // A-Z, a-z
], Cp = [
  Ns,
  // 0-9
  o0,
  // 0-9 double-struck. No KaTeX font.
  Ms,
  // 0-9
  Es,
  // 0-9
  zs
  // 0-9
], Ap = (r) => {
  var e = r.charCodeAt(0), t = r.charCodeAt(1), n = (e - 55296) * 1024 + (t - 56320) + 65536;
  if (119808 <= n && n < 120484) {
    var i = Math.floor((n - 119808) / 26);
    return ic[i];
  } else if (120782 <= n && n <= 120831) {
    var a = Math.floor((n - 120782) / 10);
    return Cp[a];
  } else {
    if (n === 120485 || n === 120486)
      return ic[0];
    if (120486 < n && n < 120782)
      return o0;
    throw new ee("Unsupported character: " + r);
  }
}, Aa = function(e, t, n) {
  if (ht[n][e]) {
    var i = ht[n][e].replace;
    i && (e = i);
  }
  return {
    value: e,
    metrics: ko(e, t, n)
  };
}, Ut = function(e, t, n, i, a) {
  var s = Aa(e, t, n), o = s.metrics;
  e = s.value;
  var l;
  if (o) {
    var d = o.italic;
    (n === "text" || i && i.font === "mathit") && (d = 0), l = new rr(e, o.height, o.depth, d, o.skew, o.width, a);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), l = new rr(e, 0, 0, 0, 0, 0, a);
  if (i) {
    l.maxFontSize = i.sizeMultiplier, i.style.isTight() && l.classes.push("mtight");
    var h = i.getColor();
    h && (l.style.color = h);
  }
  return l;
}, So = function(e, t, n, i) {
  return i === void 0 && (i = []), n.font === "boldsymbol" && Aa(e, "Main-Bold", t).metrics ? Ut(e, "Main-Bold", t, n, i.concat(["mathbf"])) : e === "\\" || ht[t][e].font === "main" ? Ut(e, "Main-Regular", t, n, i) : Ut(e, "AMS-Regular", t, n, i.concat(["amsrm"]));
}, $p = function(e, t, n) {
  return n !== "textord" && Aa(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, $a = function(e, t) {
  var n = e.type === "mathord" ? "mathord" : "textord", i = e.mode, a = e.text, s = ["mord"], {
    font: o,
    fontFamily: l,
    fontWeight: d,
    fontShape: h
  } = t, f = i === "math" || i === "text" && !!o, m = f ? o : l, v = "", k = "";
  if (a.charCodeAt(0) === 55349) {
    var T = Ap(a);
    v = T.font, k = T[i + "Class"];
  }
  if (v)
    return Ut(a, v, i, t, s.concat(k));
  if (m) {
    var I, O;
    if (m === "boldsymbol") {
      var L = $p(a, i, n);
      I = L.fontName, O = [L.fontClass];
    } else f ? (I = Rs[o].fontName, O = [o]) : (I = Fi(l, d, h), O = [l, d, h]);
    if (Aa(a, I, i).metrics)
      return Ut(a, I, i, t, s.concat(O));
    if (fd.hasOwnProperty(a) && I.slice(0, 10) === "Typewriter") {
      for (var W = [], Y = 0; Y < a.length; Y++)
        W.push(Ut(a[Y], I, i, t, s.concat(O)));
      return vn(W);
    }
  }
  if (n === "mathord")
    return Ut(a, "Math-Italic", i, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var ne = ht[i][a] && ht[i][a].font;
    if (ne === "ams") {
      var M = Fi("amsrm", d, h);
      return Ut(a, M, i, t, s.concat("amsrm", d, h));
    } else if (ne === "main" || !ne) {
      var G = Fi("textrm", d, h);
      return Ut(a, G, i, t, s.concat(d, h));
    } else {
      var he = Fi(ne, d, h);
      return Ut(a, he, i, t, s.concat(he, d, h));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Ip = (r, e) => {
  if (Bn(r.classes) !== Bn(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal"))
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var n of Object.keys(r.style))
    if (r.style[n] !== e.style[n])
      return !1;
  for (var i of Object.keys(e.style))
    if (r.style[i] !== e.style[i])
      return !1;
  return !0;
}, pd = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof rr && n instanceof rr && Ip(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, _o = function(e) {
  for (var t = 0, n = 0, i = 0, a = 0; a < e.children.length; a++) {
    var s = e.children[a];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > i && (i = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = i;
}, Z = function(e, t, n, i) {
  var a = new K0(e, t, n, i);
  return _o(a), a;
}, Dn = (r, e, t, n) => new K0(r, e, t, n), V0 = function(e, t, n) {
  var i = Z([e], [], t);
  return i.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = ae(i.height), i.maxFontSize = 1, i;
}, Tp = function(e, t, n, i) {
  var a = new Ca(e, t, n, i);
  return _o(a), a;
}, vn = function(e) {
  var t = new j0(e);
  return _o(t), t;
}, H0 = function(e, t) {
  return e instanceof j0 ? Z([], [e], t) : e;
}, Np = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, n = [t[0]], i = -t[0].shift - t[0].elem.depth, a = i, s = 1; s < t.length; s++) {
      var o = -t[s].shift - a - t[s].elem.depth, l = o - (t[s - 1].elem.height + t[s - 1].elem.depth);
      a = a + o, n.push({
        type: "kern",
        size: l
      }), n.push(t[s]);
    }
    return {
      children: n,
      depth: i
    };
  }
  var d;
  if (e.positionType === "top") {
    for (var h = e.positionData, f = 0; f < e.children.length; f++) {
      var m = e.children[f];
      h -= m.type === "kern" ? m.size : m.elem.height + m.elem.depth;
    }
    d = h;
  } else if (e.positionType === "bottom")
    d = -e.positionData;
  else {
    var v = e.children[0];
    if (v.type !== "elem")
      throw new Error('First child must have type "elem".');
    if (e.positionType === "shift")
      d = -v.elem.depth - e.positionData;
    else if (e.positionType === "firstBaseline")
      d = -v.elem.depth;
    else
      throw new Error("Invalid positionType " + e.positionType + ".");
  }
  return {
    children: e.children,
    depth: d
  };
}, Ke = function(e, t) {
  for (var {
    children: n,
    depth: i
  } = Np(e), a = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      a = Math.max(a, l.maxFontSize, l.height);
    }
  }
  a += 2;
  var d = Z(["pstrut"], []);
  d.style.height = ae(a);
  for (var h = [], f = i, m = i, v = i, k = 0; k < n.length; k++) {
    var T = n[k];
    if (T.type === "kern")
      v += T.size;
    else {
      var I = T.elem, O = T.wrapperClasses || [], L = T.wrapperStyle || {}, W = Z(O, [d, I], void 0, L);
      W.style.top = ae(-a - v - I.depth), T.marginLeft && (W.style.marginLeft = T.marginLeft), T.marginRight && (W.style.marginRight = T.marginRight), h.push(W), v += I.height + I.depth;
    }
    f = Math.min(f, v), m = Math.max(m, v);
  }
  var Y = Z(["vlist"], h);
  Y.style.height = ae(m);
  var ne;
  if (f < 0) {
    var M = Z([], []), G = Z(["vlist"], [M]);
    G.style.height = ae(-f);
    var he = Z(["vlist-s"], [new rr("​")]);
    ne = [Z(["vlist-r"], [Y, he]), Z(["vlist-r"], [G])];
  } else
    ne = [Z(["vlist-r"], [Y])];
  var ce = Z(["vlist-t"], ne);
  return ne.length === 2 && ce.classes.push("vlist-t2"), ce.height = m, ce.depth = -f, ce;
}, md = (r, e) => {
  var t = Z(["mspace"], [], e), n = mt(r, e);
  return t.style.marginRight = ae(n), t;
}, Fi = (r, e, t) => {
  var n, i;
  switch (r) {
    case "amsrm":
      n = "AMS";
      break;
    case "textrm":
      n = "Main";
      break;
    case "textsf":
      n = "SansSerif";
      break;
    case "texttt":
      n = "Typewriter";
      break;
    default:
      n = r;
  }
  return e === "textbf" && t === "textit" ? i = "BoldItalic" : e === "textbf" ? i = "Bold" : t === "textit" ? i = "Italic" : i = "Regular", n + "-" + i;
}, Rs = {
  // styles
  mathbf: {
    variant: "bold",
    fontName: "Main-Bold"
  },
  mathrm: {
    variant: "normal",
    fontName: "Main-Regular"
  },
  textit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathit: {
    variant: "italic",
    fontName: "Main-Italic"
  },
  mathnormal: {
    variant: "italic",
    fontName: "Math-Italic"
  },
  mathsfit: {
    variant: "sans-serif-italic",
    fontName: "SansSerif-Italic"
  },
  // "boldsymbol" is missing because they require the use of multiple fonts:
  // Math-BoldItalic and Main-Bold.  This is handled by a special case in
  // makeOrd which ends up calling boldsymbol.
  // families
  mathbb: {
    variant: "double-struck",
    fontName: "AMS-Regular"
  },
  mathcal: {
    variant: "script",
    fontName: "Caligraphic-Regular"
  },
  mathfrak: {
    variant: "fraktur",
    fontName: "Fraktur-Regular"
  },
  mathscr: {
    variant: "script",
    fontName: "Script-Regular"
  },
  mathsf: {
    variant: "sans-serif",
    fontName: "SansSerif-Regular"
  },
  mathtt: {
    variant: "monospace",
    fontName: "Typewriter-Regular"
  }
}, gd = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, bd = function(e, t) {
  var [n, i, a] = gd[e], s = new Ln(n), o = new pn([s], {
    width: ae(i),
    height: ae(a),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + ae(i),
    viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
    preserveAspectRatio: "xMinYMin"
  }), l = Dn(["overlay"], [o], t);
  return l.height = a, l.style.height = ae(a), l.style.width = ae(i), l;
}, pt = {
  number: 3,
  unit: "mu"
}, n0 = {
  number: 4,
  unit: "mu"
}, sn = {
  number: 5,
  unit: "mu"
}, Mp = {
  mord: {
    mop: pt,
    mbin: n0,
    mrel: sn,
    minner: pt
  },
  mop: {
    mord: pt,
    mop: pt,
    mrel: sn,
    minner: pt
  },
  mbin: {
    mord: n0,
    mop: n0,
    mopen: n0,
    minner: n0
  },
  mrel: {
    mord: sn,
    mop: sn,
    mopen: sn,
    minner: sn
  },
  mopen: {},
  mclose: {
    mop: pt,
    mbin: n0,
    mrel: sn,
    minner: pt
  },
  mpunct: {
    mord: pt,
    mop: pt,
    mrel: sn,
    mopen: pt,
    mclose: pt,
    mpunct: pt,
    minner: pt
  },
  minner: {
    mord: pt,
    mop: pt,
    mbin: n0,
    mrel: sn,
    mopen: pt,
    mpunct: pt,
    minner: pt
  }
}, Ep = {
  mord: {
    mop: pt
  },
  mop: {
    mord: pt,
    mop: pt
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: pt
  },
  mpunct: {},
  minner: {
    mop: pt
  }
}, vd = {}, fi = {}, pi = {};
function pe(r) {
  for (var {
    type: e,
    names: t,
    htmlBuilder: n,
    mathmlBuilder: i
  } = r, a = 0; a < t.length; ++a)
    vd[t[a]] = r;
  e && (n && (fi[e] = n), i && (pi[e] = i));
}
function g0(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  t && (fi[e] = t), n && (pi[e] = n);
}
var fa = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, _t = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, zp = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), Rp = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), Op = {
  display: Ee.DISPLAY,
  text: Ee.TEXT,
  script: Ee.SCRIPT,
  scriptscript: Ee.SCRIPTSCRIPT
}, Bp = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Tt = function(e, t, n, i) {
  i === void 0 && (i = [null, null]);
  for (var a = [], s = 0; s < e.length; s++) {
    var o = Ze(e[s], t);
    if (o instanceof j0) {
      var l = o.children;
      a.push(...l);
    } else
      a.push(o);
  }
  if (pd(a), !n)
    return a;
  var d = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = t.havingSize(h.size) : h.type === "styling" && (d = t.havingStyle(Op[h.style]));
  }
  var f = Z([i[0] || "leftmost"], [], t), m = Z([i[1] || "rightmost"], [], t), v = n === "root";
  return Os(a, (k, T) => {
    var I = T.classes[0], O = k.classes[0];
    I === "mbin" && Rp.has(O) ? T.classes[0] = "mord" : O === "mbin" && zp.has(I) && (k.classes[0] = "mord");
  }, {
    node: f
  }, m, v), Os(a, (k, T) => {
    var I, O, L = Ls(T), W = Ls(k), Y = L && W ? k.hasClass("mtight") ? (I = Ep[L]) == null ? void 0 : I[W] : (O = Mp[L]) == null ? void 0 : O[W] : null;
    if (Y)
      return md(Y, d);
  }, {
    node: f
  }, m, v), a;
}, Os = function(e, t, n, i, a) {
  i && e.push(i);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = wd(o);
    if (l) {
      Os(l.children, t, n, null, a);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = t(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), s++));
    }
    d ? n.node = o : a && o.hasClass("newline") && (n.node = Z(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((f) => (m) => {
      e.splice(f + 1, 0, m), s++;
    })(s);
  }
  i && e.pop();
}, wd = function(e) {
  return e instanceof j0 || e instanceof Ca || e instanceof K0 && e.hasClass("enclosing") ? e : null;
}, Bs = function(e, t) {
  var n = wd(e);
  if (n) {
    var i = n.children;
    if (i.length) {
      if (t === "right")
        return Bs(i[i.length - 1], "right");
      if (t === "left")
        return Bs(i[0], "left");
    }
  }
  return e;
}, Ls = function(e, t) {
  if (!e)
    return null;
  t && (e = Bs(e, t));
  var n = e.classes[0];
  return Bp[n] || null;
}, mi = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return Z(t.concat(n));
}, Ze = function(e, t, n) {
  if (!e)
    return Z();
  if (fi[e.type]) {
    var i = fi[e.type](e, t);
    if (n && t.size !== n.size) {
      i = Z(t.sizingClasses(n), [i], t);
      var a = t.sizeMultiplier / n.sizeMultiplier;
      i.height *= a, i.depth *= a;
    }
    return i;
  } else
    throw new ee("Got group of unknown type: '" + e.type + "'");
};
function Pi(r, e) {
  var t = Z(["base"], r, e), n = Z(["strut"]);
  return n.style.height = ae(t.height + t.depth), t.depth && (n.style.verticalAlign = ae(-t.depth)), t.children.unshift(n), t;
}
function Ds(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = Tt(r, e, "root"), i;
  n.length === 2 && n[1].hasClass("tag") && (i = n.pop());
  for (var a = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (a.push(Pi(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (a.push(Pi(s, e)), s = []), a.push(n[o]));
  s.length > 0 && a.push(Pi(s, e));
  var d;
  t ? (d = Pi(Tt(t, e, !0), e), d.classes = ["tag"], a.push(d)) : i && a.push(i);
  var h = Z(["katex-html"], a);
  if (h.setAttribute("aria-hidden", "true"), d) {
    var f = d.children[0];
    f.style.height = ae(h.height + h.depth), h.depth && (f.style.verticalAlign = ae(-h.depth));
  }
  return h;
}
function xd(r) {
  return new j0(r);
}
class te {
  constructor(e, t, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = t || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  /**
   * Gets an attribute on a MathML node.
   */
  getAttribute(e) {
    return this.attributes[e];
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
    this.classes.length > 0 && (e.className = Bn(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof Ct && this.children[n + 1] instanceof Ct) {
        for (var i = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof Ct; )
          i += this.children[++n].toText();
        e.appendChild(new Ct(i).toNode());
      } else
        e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var t in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += Lt(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + Lt(Bn(this.classes)) + '"'), e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</" + this.type + ">", e;
  }
  /**
   * Converts the math node into a string, similar to innerText, but escaped.
   */
  toText() {
    return this.children.map((e) => e.toText()).join("");
  }
}
class Ct {
  constructor(e) {
    this.text = void 0, this.text = e;
  }
  /**
   * Converts the text node into a DOM text node.
   */
  toNode() {
    return document.createTextNode(this.text);
  }
  /**
   * Converts the text node into escaped HTML markup
   * (representing the text itself).
   */
  toMarkup() {
    return Lt(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class yd {
  /**
   * Create a Space node with width given in CSS ems.
   */
  constructor(e) {
    this.width = void 0, this.character = void 0, this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = " " : e >= 0.1666 && e <= 0.1667 ? this.character = " " : e >= 0.2222 && e <= 0.2223 ? this.character = " " : e >= 0.2777 && e <= 0.2778 ? this.character = "  " : e >= -0.05556 && e <= -0.05555 ? this.character = " ⁣" : e >= -0.1667 && e <= -0.1666 ? this.character = " ⁣" : e >= -0.2223 && e <= -0.2222 ? this.character = " ⁣" : e >= -0.2778 && e <= -0.2777 ? this.character = " ⁣" : this.character = null;
  }
  /**
   * Converts the math node into a MathML-namespaced DOM element.
   */
  toNode() {
    if (this.character)
      return document.createTextNode(this.character);
    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
    return e.setAttribute("width", ae(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + ae(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var Lp = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), Dp = /* @__PURE__ */ new Set(["mrow", "mtable"]), mr = function(e, t, n) {
  return ht[t][e] && ht[t][e].replace && e.charCodeAt(0) !== 55349 && !(fd.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = ht[t][e].replace), new Ct(e);
}, Co = function(e) {
  return e.length === 1 ? e[0] : new te("mrow", e);
}, Fp = {
  mathit: "italic",
  boldsymbol: (r) => r.type === "textord" ? "bold" : "bold-italic",
  mathbf: "bold",
  mathbb: "double-struck",
  mathsfit: "sans-serif-italic",
  mathfrak: "fraktur",
  mathscr: "script",
  mathcal: "script",
  mathsf: "sans-serif",
  mathtt: "monospace"
}, Ao = (r, e) => {
  if (r.mode === "text") {
    if (e.fontFamily === "texttt")
      return "monospace";
    if (e.fontFamily === "textsf")
      return e.fontShape === "textit" && e.fontWeight === "textbf" ? "sans-serif-bold-italic" : e.fontShape === "textit" ? "sans-serif-italic" : e.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
    if (e.fontShape === "textit" && e.fontWeight === "textbf")
      return "bold-italic";
    if (e.fontShape === "textit")
      return "italic";
    if (e.fontWeight === "textbf")
      return "bold";
  }
  var t = e.font;
  if (!t || t === "mathnormal")
    return null;
  var n = r.mode, i = Fp[t];
  if (i)
    return typeof i == "function" ? i(r) : i;
  var a = r.text;
  if (Lp.has(a))
    return null;
  if (ht[n][a]) {
    var s = ht[n][a].replace;
    s && (a = s);
  }
  var o = Rs[t].fontName;
  return ko(a, o, n) ? Rs[t].variant : null;
};
function Ja(r) {
  if (!r)
    return !1;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof Ct && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof Ct && t.text === ",";
  } else
    return !1;
}
var ar = function(e, t, n) {
  if (e.length === 1) {
    var i = st(e[0], t);
    return n && i instanceof te && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
  }
  for (var a = [], s, o = 0; o < e.length; o++) {
    var l = st(e[o], t);
    if (l instanceof te && s instanceof te) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (Ja(l) && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && Ja(s))
        l.children = [...s.children, ...l.children], a.pop();
      else if ((l.type === "msup" || l.type === "msub") && l.children.length >= 1 && (s.type === "mn" || Ja(s))) {
        var d = l.children[0];
        d instanceof te && d.type === "mn" && (d.children = [...s.children, ...d.children], a.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var h = s.children[0];
        if (h instanceof Ct && h.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var f = l.children[0];
          f instanceof Ct && f.text.length > 0 && (f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1), a.pop());
        }
      }
    }
    a.push(l), s = l;
  }
  return a;
}, Fn = function(e, t, n) {
  return Co(ar(e, t, n));
}, st = function(e, t) {
  if (!e)
    return new te("mrow");
  if (pi[e.type])
    return pi[e.type](e, t);
  throw new ee("Got group of unknown type: '" + e.type + "'");
};
function ac(r, e, t, n, i) {
  var a = ar(r, t), s;
  a.length === 1 && a[0] instanceof te && Dp.has(a[0].type) ? s = a[0] : s = new te("mrow", a);
  var o = new te("annotation", [new Ct(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new te("semantics", [s, o]), d = new te("math", [l]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var h = i ? "katex" : "katex-mathml";
  return Z([h], [d]);
}
var Pp = [
  // Each element contains [textsize, scriptsize, scriptscriptsize].
  // The size mappings are taken from TeX with \normalsize=10pt.
  [1, 1, 1],
  // size1: [5, 5, 5]              \tiny
  [2, 1, 1],
  // size2: [6, 5, 5]
  [3, 1, 1],
  // size3: [7, 5, 5]              \scriptsize
  [4, 2, 1],
  // size4: [8, 6, 5]              \footnotesize
  [5, 2, 1],
  // size5: [9, 6, 5]              \small
  [6, 3, 1],
  // size6: [10, 7, 5]             \normalsize
  [7, 4, 2],
  // size7: [12, 8, 6]             \large
  [8, 6, 3],
  // size8: [14.4, 10, 7]          \Large
  [9, 7, 6],
  // size9: [17.28, 12, 10]        \LARGE
  [10, 8, 7],
  // size10: [20.74, 14.4, 12]     \huge
  [11, 10, 9]
  // size11: [24.88, 20.74, 17.28] \HUGE
], sc = [
  // fontMetrics.js:getGlobalMetrics also uses size indexes, so if
  // you change size indexes, change that function.
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
  1,
  1.2,
  1.44,
  1.728,
  2.074,
  2.488
], oc = function(e, t) {
  return t.size < 2 ? e : Pp[e - 1][t.size - 1];
};
class ln {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || ln.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = sc[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var t = {
      style: this.style,
      size: this.size,
      textSize: this.textSize,
      color: this.color,
      phantom: this.phantom,
      font: this.font,
      fontFamily: this.fontFamily,
      fontWeight: this.fontWeight,
      fontShape: this.fontShape,
      maxSize: this.maxSize,
      minRuleThickness: this.minRuleThickness
    };
    return Object.assign(t, e), new ln(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: oc(this.textSize, e)
    });
  }
  /**
   * Return an options object with a cramped version of the current style. If
   * the current style is cramped, returns `this`.
   */
  havingCrampedStyle() {
    return this.havingStyle(this.style.cramp());
  }
  /**
   * Return an options object with the given size and in at least `\textstyle`.
   * Returns `this` if appropriate.
   */
  havingSize(e) {
    return this.size === e && this.textSize === e ? this : this.extend({
      style: this.style.text(),
      size: e,
      textSize: e,
      sizeMultiplier: sc[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = oc(ln.BASESIZE, e);
    return this.size === t && this.textSize === ln.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: t
    });
  }
  /**
   * Remove the effect of sizing changes such as \Huge.
   * Keep the effect of the current style, such as \scriptstyle.
   */
  havingBaseSizing() {
    var e;
    switch (this.style.id) {
      case 4:
      case 5:
        e = 3;
        break;
      case 6:
      case 7:
        e = 1;
        break;
      default:
        e = 6;
    }
    return this.extend({
      style: this.style.text(),
      size: e
    });
  }
  /**
   * Create a new options object with the given color.
   */
  withColor(e) {
    return this.extend({
      color: e
    });
  }
  /**
   * Create a new options object with "phantom" set to true.
   */
  withPhantom() {
    return this.extend({
      phantom: !0
    });
  }
  /**
   * Creates a new options object with the given math font or old text font.
   * @type {[type]}
   */
  withFont(e) {
    return this.extend({
      font: e
    });
  }
  /**
   * Create a new options objects with the given fontFamily.
   */
  withTextFontFamily(e) {
    return this.extend({
      fontFamily: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontWeight(e) {
    return this.extend({
      fontWeight: e,
      font: ""
    });
  }
  /**
   * Creates a new options object with the given font weight
   */
  withTextFontShape(e) {
    return this.extend({
      fontShape: e,
      font: ""
    });
  }
  /**
   * Return the CSS sizing classes required to switch from enclosing options
   * `oldOptions` to `this`. Returns an array of classes.
   */
  sizingClasses(e) {
    return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
  }
  /**
   * Return the CSS sizing classes required to switch to the base size. Like
   * `this.havingSize(BASESIZE).sizingClasses(this)`.
   */
  baseSizingClasses() {
    return this.size !== ln.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + ln.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Sp(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
ln.BASESIZE = 6;
var kd = function(e) {
  return new ln({
    style: e.displayMode ? Ee.DISPLAY : Ee.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Sd = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = Z(n, [e]);
  }
  return e;
}, Vp = function(e, t, n) {
  var i = kd(n), a;
  if (n.output === "mathml")
    return ac(e, t, i, n.displayMode, !0);
  if (n.output === "html") {
    var s = Ds(e, i);
    a = Z(["katex"], [s]);
  } else {
    var o = ac(e, t, i, n.displayMode, !1), l = Ds(e, i);
    a = Z(["katex"], [o, l]);
  }
  return Sd(a, n);
}, Hp = function(e, t, n) {
  var i = kd(n), a = Ds(e, i), s = Z(["katex"], [a]);
  return Sd(s, n);
}, qp = {
  widehat: "^",
  widecheck: "ˇ",
  widetilde: "~",
  utilde: "~",
  overleftarrow: "←",
  underleftarrow: "←",
  xleftarrow: "←",
  overrightarrow: "→",
  underrightarrow: "→",
  xrightarrow: "→",
  underbrace: "⏟",
  overbrace: "⏞",
  underbracket: "⎵",
  overbracket: "⎴",
  overgroup: "⏠",
  undergroup: "⏡",
  overleftrightarrow: "↔",
  underleftrightarrow: "↔",
  xleftrightarrow: "↔",
  Overrightarrow: "⇒",
  xRightarrow: "⇒",
  overleftharpoon: "↼",
  xleftharpoonup: "↼",
  overrightharpoon: "⇀",
  xrightharpoonup: "⇀",
  xLeftarrow: "⇐",
  xLeftrightarrow: "⇔",
  xhookleftarrow: "↩",
  xhookrightarrow: "↪",
  xmapsto: "↦",
  xrightharpoondown: "⇁",
  xleftharpoondown: "↽",
  xrightleftharpoons: "⇌",
  xleftrightharpoons: "⇋",
  xtwoheadleftarrow: "↞",
  xtwoheadrightarrow: "↠",
  xlongequal: "=",
  xtofrom: "⇄",
  xrightleftarrows: "⇄",
  xrightequilibrium: "⇌",
  // Not a perfect match.
  xleftequilibrium: "⇋",
  // None better available.
  "\\cdrightarrow": "→",
  "\\cdleftarrow": "←",
  "\\cdlongequal": "="
}, Ia = function(e) {
  var t = new te("mo", [new Ct(qp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Wp = {
  //   path(s), minWidth, height, align
  overrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  overleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  underrightarrow: [["rightarrow"], 0.888, 522, "xMaxYMin"],
  underleftarrow: [["leftarrow"], 0.888, 522, "xMinYMin"],
  xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
  "\\cdrightarrow": [["rightarrow"], 3, 522, "xMaxYMin"],
  // CD minwwidth2.5pc
  xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
  "\\cdleftarrow": [["leftarrow"], 3, 522, "xMinYMin"],
  Overrightarrow: [["doublerightarrow"], 0.888, 560, "xMaxYMin"],
  xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
  xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
  overleftharpoon: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoonup: [["leftharpoon"], 0.888, 522, "xMinYMin"],
  xleftharpoondown: [["leftharpoondown"], 0.888, 522, "xMinYMin"],
  overrightharpoon: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoonup: [["rightharpoon"], 0.888, 522, "xMaxYMin"],
  xrightharpoondown: [["rightharpoondown"], 0.888, 522, "xMaxYMin"],
  xlongequal: [["longequal"], 0.888, 334, "xMinYMin"],
  "\\cdlongequal": [["longequal"], 3, 334, "xMinYMin"],
  xtwoheadleftarrow: [["twoheadleftarrow"], 0.888, 334, "xMinYMin"],
  xtwoheadrightarrow: [["twoheadrightarrow"], 0.888, 334, "xMaxYMin"],
  overleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
  underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
  underleftrightarrow: [["leftarrow", "rightarrow"], 0.888, 522],
  xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
  xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
  xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
  xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
  xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
  xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
  overlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  underlinesegment: [["leftlinesegment", "rightlinesegment"], 0.888, 522],
  overbracket: [["leftbracketover", "rightbracketover"], 1.6, 440],
  underbracket: [["leftbracketunder", "rightbracketunder"], 1.6, 410],
  overgroup: [["leftgroup", "rightgroup"], 0.888, 342],
  undergroup: [["leftgroupunder", "rightgroupunder"], 0.888, 342],
  xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
  xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
  // The next three arrows are from the mhchem package.
  // In mhchem.sty, min-length is 2.0em. But these arrows might appear in the
  // document as \xrightarrow or \xrightleftharpoons. Those have
  // min-length = 1.75em, so we set min-length on these next three to match.
  xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901],
  xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
  xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
}, Up = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), Ta = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (Up.has(l) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, h, f, m;
      if (d > 5)
        l === "widehat" || l === "widecheck" ? (h = 420, o = 2364, m = 0.42, f = l + "4") : (h = 312, o = 2340, m = 0.34, f = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][d];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], f = l + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], f = "tilde" + v);
      }
      var k = new Ln(f), T = new pn([k], {
        width: "100%",
        height: ae(m),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: Dn([], [T], t),
        minWidth: 0,
        height: m
      };
    } else {
      var I = [], O = Wp[l];
      if (!O)
        throw new Error('No SVG data for "' + l + '".');
      var [L, W, Y] = O, ne = Y / 1e3, M = L.length, G, he;
      if (M === 1) {
        if (O.length !== 4)
          throw new Error('Expected 4-tuple for single-path SVG data "' + l + '".');
        G = ["hide-tail"], he = [O[3]];
      } else if (M === 2)
        G = ["halfarrow-left", "halfarrow-right"], he = ["xMinYMin", "xMaxYMin"];
      else if (M === 3)
        G = ["brace-left", "brace-center", "brace-right"], he = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + M + " children.");
      for (var ce = 0; ce < M; ce++) {
        var ie = new Ln(L[ce]), Ie = new pn([ie], {
          width: "400em",
          height: ae(ne),
          viewBox: "0 0 " + o + " " + Y,
          preserveAspectRatio: he[ce] + " slice"
        }), ye = Dn([G[ce]], [Ie], t);
        if (M === 1)
          return {
            span: ye,
            minWidth: W,
            height: ne
          };
        ye.style.height = ae(ne), I.push(ye);
      }
      return {
        span: Z(["stretchy"], I, t),
        minWidth: W,
        height: ne
      };
    }
  }
  var {
    span: i,
    minWidth: a,
    height: s
  } = n();
  return i.height = s, i.style.height = ae(s), a > 0 && (i.style.minWidth = ae(a)), i;
}, Gp = function(e, t, n, i, a) {
  var s, o = e.height + e.depth + n + i;
  if (/fbox|color|angl/.test(t)) {
    if (s = Z(["stretchy", t], [], a), t === "fbox") {
      var l = a.color && a.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new Is({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new Is({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new pn(d, {
      width: "100%",
      height: ae(o)
    });
    s = Dn([], [h], a);
  }
  return s.height = o, s.style.height = ae(o), s;
}, jp = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, Kp = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
function Zp(r) {
  return r in jp;
}
function Be(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function Na(r) {
  var e = Ma(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Ma(r) {
  return r && (r.type === "atom" || Kp.hasOwnProperty(r.type)) ? r : null;
}
var _d = (r) => {
  if (r instanceof rr)
    return r;
  if (yp(r) && r.children.length === 1)
    return _d(r.children[0]);
}, Cd = (r, e) => {
  var t, n, i;
  r && r.type === "supsub" ? (n = Be(r.base, "accent"), t = n.base, r.base = t, i = xp(Ze(r, e)), r.base = n) : (n = Be(r, "accent"), t = n.base);
  var a = Ze(t, e.havingCrampedStyle()), s = n.isShifty && gn(t), o = 0;
  if (s) {
    var l, d;
    o = (l = (d = _d(a)) == null ? void 0 : d.skew) != null ? l : 0;
  }
  var h = n.label === "\\c", f = h ? a.height + a.depth : Math.min(a.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = Ta(n, e), m = Ke({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + ae(2 * o) + ")",
          marginLeft: ae(2 * o)
        } : void 0
      }]
    });
  else {
    var v, k;
    n.label === "\\vec" ? (v = bd("vec", e), k = gd.vec[1]) : (v = $a({
      type: "textord",
      mode: n.mode,
      text: n.label
    }, e), v = wp(v), v.italic = 0, k = v.width, h && (f += v.depth)), m = Z(["accent-body"], [v]);
    var T = n.label === "\\textcircled";
    T && (m.classes.push("accent-full"), f = a.height);
    var I = o;
    T || (I -= k / 2), m.style.left = ae(I), n.label === "\\textcircled" && (m.style.top = ".2em"), m = Ke({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "kern",
        size: -f
      }, {
        type: "elem",
        elem: m
      }]
    });
  }
  var O = Z(["mord", "accent"], [m], e);
  return i ? (i.children[0] = O, i.height = Math.max(O.height, i.height), i.classes[0] = "mord", i) : O;
}, Xp = (r, e) => {
  var t = r.isStretchy ? Ia(r.label) : new te("mo", [mr(r.label, r.mode)]), n = new te("mover", [st(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, Jp = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
pe({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  numArgs: 1,
  handler: (r, e) => {
    var t = fa(e[0]), n = !Jp.test(r.funcName), i = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: i,
      base: t
    };
  },
  htmlBuilder: Cd,
  mathmlBuilder: Xp
});
pe({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  numArgs: 1,
  allowedInText: !0,
  allowedInMath: !0,
  // unless in strict mode
  argTypes: ["primitive"],
  handler: (r, e) => {
    var t = e[0], n = r.parser.mode;
    return n === "math" && (r.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + r.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: r.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: t
    };
  }
});
pe({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  numArgs: 1,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: i
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ze(r.base, e), n = Ta(r, e), i = r.label === "\\utilde" ? 0.12 : 0, a = Ke({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: t
      }]
    });
    return Z(["mord", "accentunder"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = Ia(r.label), n = new te("munder", [st(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Vi = (r) => {
  var e = new te("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
pe({
  type: "xArrow",
  names: [
    "\\xleftarrow",
    "\\xrightarrow",
    "\\xLeftarrow",
    "\\xRightarrow",
    "\\xleftrightarrow",
    "\\xLeftrightarrow",
    "\\xhookleftarrow",
    "\\xhookrightarrow",
    "\\xmapsto",
    "\\xrightharpoondown",
    "\\xrightharpoonup",
    "\\xleftharpoondown",
    "\\xleftharpoonup",
    "\\xrightleftharpoons",
    "\\xleftrightharpoons",
    "\\xlongequal",
    "\\xtwoheadrightarrow",
    "\\xtwoheadleftarrow",
    "\\xtofrom",
    // The next 3 functions are here to support the mhchem extension.
    // Direct use of these functions is discouraged and may break someday.
    "\\xrightleftarrows",
    "\\xrightequilibrium",
    "\\xleftequilibrium",
    // The next 3 functions are here only to support the {CD} environment.
    "\\\\cdrightarrow",
    "\\\\cdleftarrow",
    "\\\\cdlongequal"
  ],
  numArgs: 1,
  numOptionalArgs: 1,
  handler(r, e, t) {
    var {
      parser: n,
      funcName: i
    } = r;
    return {
      type: "xArrow",
      mode: n.mode,
      label: i,
      body: e[0],
      below: t[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.style, n = e.havingStyle(t.sup()), i = H0(Ze(r.body, n, e), e), a = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(a + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = H0(Ze(r.below, n, e), e), s.classes.push(a + "-arrow-pad"));
    var o = Ta(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (i.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= i.depth);
    var h;
    if (s) {
      var f = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      h = Ke({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: l,
          wrapperClasses: ["svg-align"]
        }, {
          type: "elem",
          elem: s,
          shift: f
        }]
      });
    } else
      h = Ke({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: i,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: l,
          wrapperClasses: ["svg-align"]
        }]
      });
    return Z(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(r, e) {
    var t = Ia(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var i = Vi(st(r.body, e));
      if (r.below) {
        var a = Vi(st(r.below, e));
        n = new te("munderover", [t, a, i]);
      } else
        n = new te("mover", [t, i]);
    } else if (r.below) {
      var s = Vi(st(r.below, e));
      n = new te("munder", [t, s]);
    } else
      n = Vi(), n = new te("mover", [t, n]);
    return n;
  }
});
function Yp(r, e) {
  var t = Tt(r.body, e, !0);
  return Z([r.mclass], t, e);
}
function Qp(r, e) {
  var t, n = ar(r.body, e);
  return r.mclass === "minner" ? t = new te("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new te("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new te("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (r.mclass === "mopen" || r.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t;
}
pe({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  numArgs: 1,
  primitive: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      body: _t(i),
      isCharacterBox: gn(i)
    };
  },
  htmlBuilder: Yp,
  mathmlBuilder: Qp
});
var Ea = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
pe({
  type: "mclass",
  names: ["\\@binrel"],
  numArgs: 2,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ea(e[0]),
      body: _t(e[1]),
      isCharacterBox: gn(e[1])
    };
  }
});
pe({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  numArgs: 2,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[1], a = e[0], s;
    n !== "\\stackrel" ? s = Ea(i) : s = "mrel";
    var o = {
      type: "op",
      mode: i.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: _t(i)
    }, l = n === "\\underset" ? {
      type: "supsub",
      mode: a.mode,
      base: o,
      sub: a
    } : {
      type: "supsub",
      mode: a.mode,
      base: o,
      sup: a
    };
    return {
      type: "mclass",
      mode: t.mode,
      mclass: s,
      body: [l],
      isCharacterBox: gn(l)
    };
  }
});
pe({
  type: "pmb",
  names: ["\\pmb"],
  numArgs: 1,
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "pmb",
      mode: t.mode,
      mclass: Ea(e[0]),
      body: _t(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Tt(r.body, e, !0), n = Z([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = ar(r.body, e), n = new te("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var e4 = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, lc = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display",
  resetFont: !0
}), cc = (r) => r.type === "textord" && r.text === "@", t4 = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function r4(r, e, t) {
  var n = e4[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var i = t.callFunction("\\\\cdleft", [e[0]], []), a = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, s = t.callFunction("\\Big", [a], []), o = t.callFunction("\\\\cdright", [e[1]], []), l = {
        type: "ordgroup",
        mode: "math",
        body: [i, s, o]
      };
      return t.callFunction("\\\\cdparent", [l], []);
    }
    case "\\\\cdlongequal":
      return t.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return t.callFunction("\\Big", [d], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function n4(r) {
  var e = [];
  for (r.gullet.beginGroup(), r.gullet.macros.set("\\cr", "\\\\\\relax"), r.gullet.beginGroup(); ; ) {
    e.push(r.parseExpression(!1, "\\\\")), r.gullet.endGroup(), r.gullet.beginGroup();
    var t = r.fetch().text;
    if (t === "&" || t === "\\\\")
      r.consume();
    else if (t === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new ee("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], i = [n], a = 0; a < e.length; a++) {
    for (var s = e[a], o = lc(), l = 0; l < s.length; l++)
      if (!cc(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var d = Na(s[l]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !"=|.".includes(d)) if ("<>AV".includes(d))
          for (var f = 0; f < 2; f++) {
            for (var m = !0, v = l + 1; v < s.length; v++) {
              if (t4(s[v], d)) {
                m = !1, l = v;
                break;
              }
              if (cc(s[v]))
                throw new ee("Missing a " + d + " character to complete a CD arrow.", s[v]);
              h[f].body.push(s[v]);
            }
            if (m)
              throw new ee("Missing a " + d + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new ee('Expected one of "<>AV=|." after @', s[l]);
        var k = r4(d, h, r), T = {
          type: "styling",
          body: [k],
          mode: "math",
          style: "display",
          // CD is always displaystyle.
          resetFont: !0
        };
        n.push(T), o = lc();
      }
    a % 2 === 0 ? n.push(o) : n.shift(), n = [], i.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var I = new Array(i[0].length).fill({
    type: "align",
    align: "c",
    pregap: 0.25,
    // CD package sets \enskip between columns.
    postgap: 0.25
    // So pre and post each get half an \enskip, i.e. 0.25em.
  });
  return {
    type: "array",
    mode: "math",
    body: i,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: I,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(i.length + 1).fill([])
  };
}
pe({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  numArgs: 1,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "cdlabel",
      mode: t.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.havingStyle(e.style.sup()), n = H0(Ze(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = ae(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new te("mrow", [st(r.label, e)]);
    return t = new te("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new te("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
pe({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  numArgs: 1,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "cdlabelparent",
      mode: t.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = H0(Ze(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new te("mrow", [st(r.fragment, e)]);
  }
});
pe({
  type: "textord",
  names: ["\\@char"],
  numArgs: 1,
  allowedInText: !0,
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = Be(e[0], "ordgroup"), i = n.body, a = "", s = 0; s < i.length; s++) {
      var o = Be(i[s], "textord");
      a += o.text;
    }
    var l = parseInt(a), d;
    if (isNaN(l))
      throw new ee("\\@char has non-numeric argument " + a);
    if (l < 0 || l >= 1114111)
      throw new ee("\\@char with invalid code point " + a);
    return l <= 65535 ? d = String.fromCharCode(l) : (l -= 65536, d = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var i4 = (r, e) => {
  var t = Tt(r.body, e.withColor(r.color), !1);
  return vn(t);
}, a4 = (r, e) => {
  var t = ar(r.body, e.withColor(r.color)), n = new te("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
pe({
  type: "color",
  names: ["\\textcolor"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "original"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = Be(e[0], "color-token").color, i = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: _t(i)
    };
  },
  htmlBuilder: i4,
  mathmlBuilder: a4
});
pe({
  type: "color",
  names: ["\\color"],
  numArgs: 1,
  allowedInText: !0,
  argTypes: ["color"],
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, i = Be(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", i);
    var a = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: i,
      body: a
    };
  }
});
pe({
  type: "cr",
  names: ["\\\\"],
  numArgs: 0,
  numOptionalArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    var {
      parser: n
    } = r, i = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, a = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: a,
      size: i && Be(i, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = Z(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = ae(mt(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new te("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", ae(mt(r.size, e)))), t;
  }
});
var Fs = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Ad = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new ee("Expected a control sequence", r);
  return e;
}, s4 = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, $d = (r, e, t, n) => {
  var i = r.gullet.macros.get(t.text);
  i == null && (t.noexpand = !0, i = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, i, n);
};
pe({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  numArgs: 0,
  allowedInText: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    e.consumeSpaces();
    var n = e.fetch();
    if (Fs[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = Fs[n.text]), Be(e.parseFunction(), "internal");
    throw new ee("Invalid token after macro prefix", n);
  }
});
pe({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = e.gullet.popToken(), i = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(i))
      throw new ee("Expected a control sequence", n);
    for (var a = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[a].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new ee('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== a + 1)
          throw new ee('Argument number "' + n.text + '" out of order');
        a++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new ee("Expected a macro definition");
        o[a].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(i, {
      tokens: l,
      numArgs: a,
      delimiters: o
    }, t === Fs[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
pe({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = Ad(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var i = s4(e);
    return $d(e, n, i, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
pe({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = Ad(e.gullet.popToken()), i = e.gullet.popToken(), a = e.gullet.popToken();
    return $d(e, n, a, t === "\\\\globalfuture"), e.gullet.pushToken(a), e.gullet.pushToken(i), {
      type: "internal",
      mode: e.mode
    };
  }
});
var si = function(e, t, n) {
  var i = ht.math[e] && ht.math[e].replace, a = ko(i || e, t, n);
  if (!a)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return a;
}, $o = function(e, t, n, i) {
  var a = n.havingBaseStyle(t), s = Z(i.concat(a.sizingClasses(n)), [e], n), o = a.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = a.sizeMultiplier, s;
}, Id = function(e, t, n) {
  var i = t.havingBaseStyle(n), a = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = ae(a), e.height -= a, e.depth += a;
}, o4 = function(e, t, n, i, a, s) {
  var o = Ut(e, "Main-Regular", a, i), l = $o(o, t, i, s);
  return Id(l, i, t), l;
}, l4 = function(e, t, n, i) {
  return Ut(e, "Size" + t + "-Regular", n, i);
}, Td = function(e, t, n, i, a, s) {
  var o = l4(e, t, a, i), l = $o(Z(["delimsizing", "size" + t], [o], i), Ee.TEXT, i, s);
  return n && Id(l, i, Ee.TEXT), l;
}, Ya = function(e, t, n) {
  var i;
  t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
  var a = Z(["delimsizinginner", i], [Z([], [Ut(e, t, n)])]);
  return {
    type: "elem",
    elem: a
  };
}, Qa = function(e, t, n) {
  var i = Pr["Size4-Regular"][e.charCodeAt(0)] ? Pr["Size4-Regular"][e.charCodeAt(0)][4] : Pr["Size1-Regular"][e.charCodeAt(0)][4], a = new Ln("inner", hp(e, Math.round(1e3 * t))), s = new pn([a], {
    width: ae(i),
    height: ae(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + ae(i),
    viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = Dn([], [s], n);
  return o.height = t, o.style.height = ae(t), o.style.width = ae(i), {
    type: "elem",
    elem: o
  };
}, Ps = 8e-3, Hi = {
  type: "kern",
  size: -1 * Ps
}, c4 = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), u4 = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), Nd = function(e, t, n, i, a, s) {
  var o, l, d, h, f = "", m = 0;
  o = d = h = e, l = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : c4.has(e) ? (d = "∣", f = "vert", m = 333) : u4.has(e) ? (d = "∥", f = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", v = "Size4-Regular", f = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", v = "Size4-Regular", f = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", v = "Size4-Regular", f = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", v = "Size4-Regular", f = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", v = "Size4-Regular", f = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", v = "Size4-Regular", f = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", v = "Size4-Regular", f = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", v = "Size4-Regular", f = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", v = "Size4-Regular");
  var k = si(o, v, a), T = k.height + k.depth, I = si(d, v, a), O = I.height + I.depth, L = si(h, v, a), W = L.height + L.depth, Y = 0, ne = 1;
  if (l !== null) {
    var M = si(l, v, a);
    Y = M.height + M.depth, ne = 2;
  }
  var G = T + W + Y, he = Math.max(0, Math.ceil((t - G) / (ne * O))), ce = G + he * ne * O, ie = i.fontMetrics().axisHeight;
  n && (ie *= i.sizeMultiplier);
  var Ie = ce / 2 - ie, ye = [];
  if (f.length > 0) {
    var q = ce - T - W, U = Math.round(ce * 1e3), oe = fp(f, Math.round(q * 1e3)), D = new Ln(f, oe), j = ae(m / 1e3), E = ae(U / 1e3), re = new pn([D], {
      width: j,
      height: E,
      viewBox: "0 0 " + m + " " + U
    }), ze = Dn([], [re], i);
    ze.height = U / 1e3, ze.style.width = j, ze.style.height = E, ye.push({
      type: "elem",
      elem: ze
    });
  } else {
    if (ye.push(Ya(h, v, a)), ye.push(Hi), l === null) {
      var Pe = ce - T - W + 2 * Ps;
      ye.push(Qa(d, Pe, i));
    } else {
      var Re = (ce - T - W - Y) / 2 + 2 * Ps;
      ye.push(Qa(d, Re, i)), ye.push(Hi), ye.push(Ya(l, v, a)), ye.push(Hi), ye.push(Qa(d, Re, i));
    }
    ye.push(Hi), ye.push(Ya(o, v, a));
  }
  var He = i.havingBaseStyle(Ee.TEXT), Ve = Ke({
    positionType: "bottom",
    positionData: Ie,
    children: ye
  });
  return $o(Z(["delimsizing", "mult"], [Ve], He), Ee.TEXT, i, s);
}, es = 80, ts = 0.08, rs = function(e, t, n, i, a) {
  var s = dp(e, i, n), o = new Ln(e, s), l = new pn([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: ae(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return Dn(["hide-tail"], [l], a);
}, d4 = function(e, t) {
  var n = t.havingBaseSizing(), i = Od("\\surd", e * n.sizeMultiplier, Rd, n), a = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l, d, h, f;
  return i.type === "small" ? (h = 1e3 + 1e3 * s + es, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), l = (1 + s + ts) / a, d = (1 + s) / a, o = rs("sqrtMain", l, h, s, t), o.style.minWidth = "0.853em", f = 0.833 / a) : i.type === "large" ? (h = (1e3 + es) * ui[i.size], d = (ui[i.size] + s) / a, l = (ui[i.size] + s + ts) / a, o = rs("sqrtSize" + i.size, l, h, s, t), o.style.minWidth = "1.02em", f = 1 / a) : (l = e + s + ts, d = e + s, h = Math.floor(1e3 * e + s) + es, o = rs("sqrtTall", l, h, s, t), o.style.minWidth = "0.742em", f = 1.056), o.height = d, o.style.height = ae(l), {
    span: o,
    advanceWidth: f,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * a
  };
}, Md = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), h4 = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), Ed = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), ui = [0, 1.2, 1.8, 2.4, 3], zd = function(e, t, n, i, a) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Md.has(e) || Ed.has(e))
    return Td(e, t, !1, n, i, a);
  if (h4.has(e))
    return Nd(e, ui[t], !1, n, i, a);
  throw new ee("Illegal delimiter: '" + e + "'");
}, f4 = [{
  type: "small",
  style: Ee.SCRIPTSCRIPT
}, {
  type: "small",
  style: Ee.SCRIPT
}, {
  type: "small",
  style: Ee.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}], p4 = [{
  type: "small",
  style: Ee.SCRIPTSCRIPT
}, {
  type: "small",
  style: Ee.SCRIPT
}, {
  type: "small",
  style: Ee.TEXT
}, {
  type: "stack"
}], Rd = [{
  type: "small",
  style: Ee.SCRIPTSCRIPT
}, {
  type: "small",
  style: Ee.SCRIPT
}, {
  type: "small",
  style: Ee.TEXT
}, {
  type: "large",
  size: 1
}, {
  type: "large",
  size: 2
}, {
  type: "large",
  size: 3
}, {
  type: "large",
  size: 4
}, {
  type: "stack"
}], m4 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, Od = function(e, t, n, i) {
  for (var a = Math.min(2, 3 - i.style.size), s = a; s < n.length; s++) {
    var o = n[s];
    if (o.type === "stack")
      break;
    var l = si(e, m4(o), "math"), d = l.height + l.depth;
    if (o.type === "small") {
      var h = i.havingBaseStyle(o.style);
      d *= h.sizeMultiplier;
    }
    if (d > t)
      return o;
  }
  return n[n.length - 1];
}, Vs = function(e, t, n, i, a, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  Ed.has(e) ? o = f4 : Md.has(e) ? o = Rd : o = p4;
  var l = Od(e, t, o, i);
  return l.type === "small" ? o4(e, l.style, n, i, a, s) : l.type === "large" ? Td(e, l.size, n, i, a, s) : Nd(e, t, n, i, a, s);
}, ns = function(e, t, n, i, a, s) {
  var o = i.fontMetrics().axisHeight * i.sizeMultiplier, l = 901, d = 5 / i.fontMetrics().ptPerEm, h = Math.max(t - o, n + o), f = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * l,
    2 * h - d
  );
  return Vs(e, f, !0, i, a, s);
}, uc = {
  "\\bigl": {
    mclass: "mopen",
    size: 1
  },
  "\\Bigl": {
    mclass: "mopen",
    size: 2
  },
  "\\biggl": {
    mclass: "mopen",
    size: 3
  },
  "\\Biggl": {
    mclass: "mopen",
    size: 4
  },
  "\\bigr": {
    mclass: "mclose",
    size: 1
  },
  "\\Bigr": {
    mclass: "mclose",
    size: 2
  },
  "\\biggr": {
    mclass: "mclose",
    size: 3
  },
  "\\Biggr": {
    mclass: "mclose",
    size: 4
  },
  "\\bigm": {
    mclass: "mrel",
    size: 1
  },
  "\\Bigm": {
    mclass: "mrel",
    size: 2
  },
  "\\biggm": {
    mclass: "mrel",
    size: 3
  },
  "\\Biggm": {
    mclass: "mrel",
    size: 4
  },
  "\\big": {
    mclass: "mord",
    size: 1
  },
  "\\Big": {
    mclass: "mord",
    size: 2
  },
  "\\bigg": {
    mclass: "mord",
    size: 3
  },
  "\\Bigg": {
    mclass: "mord",
    size: 4
  }
}, g4 = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function dc(r) {
  return "isMiddle" in r;
}
function za(r, e) {
  var t = Ma(r);
  if (t && g4.has(t.text))
    return t;
  throw t ? new ee("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new ee("Invalid delimiter type '" + r.type + "'", r);
}
pe({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  numArgs: 1,
  argTypes: ["primitive"],
  handler: (r, e) => {
    var t = za(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: uc[r.funcName].size,
      mclass: uc[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? Z([r.mclass]) : zd(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(mr(r.delim, r.mode));
    var t = new te("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = ae(ui[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function hc(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
pe({
  type: "leftright-right",
  names: ["\\right"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new ee("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: za(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
pe({
  type: "leftright",
  names: ["\\left"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = za(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var i = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var a = Be(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: i,
      left: t.text,
      right: a.delim,
      rightColor: a.color
    };
  },
  htmlBuilder: (r, e) => {
    hc(r);
    for (var t = Tt(r.body, e, !0, ["mopen", "mclose"]), n = 0, i = 0, a = !1, s = 0; s < t.length; s++) {
      var o = t[s];
      dc(o) ? a = !0 : (n = Math.max(t[s].height, n), i = Math.max(t[s].depth, i));
    }
    n *= e.sizeMultiplier, i *= e.sizeMultiplier;
    var l;
    if (r.left === "." ? l = mi(e, ["mopen"]) : l = ns(r.left, n, i, e, r.mode, ["mopen"]), t.unshift(l), a)
      for (var d = 1; d < t.length; d++) {
        var h = t[d];
        if (dc(h)) {
          var f = h.isMiddle;
          t[d] = ns(f.delim, n, i, f.options, r.mode, []);
        }
      }
    var m;
    if (r.right === ".")
      m = mi(e, ["mclose"]);
    else {
      var v = r.rightColor ? e.withColor(r.rightColor) : e;
      m = ns(r.right, n, i, v, r.mode, ["mclose"]);
    }
    return t.push(m), Z(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    hc(r);
    var t = ar(r.body, e);
    if (r.left !== ".") {
      var n = new te("mo", [mr(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var i = new te("mo", [mr(r.right, r.mode)]);
      i.setAttribute("fence", "true"), r.rightColor && i.setAttribute("mathcolor", r.rightColor), t.push(i);
    }
    return Co(t);
  }
});
pe({
  type: "middle",
  names: ["\\middle"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = za(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new ee("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    return r.delim === "." ? t = mi(e, []) : (t = zd(r.delim, 1, e, r.mode, []), t.isMiddle = {
      delim: r.delim,
      options: e
    }), t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? mr("|", "text") : mr(r.delim, r.mode), n = new te("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var b4 = (r, e) => {
  var t = H0(Ze(r.body, e), e), n = r.label.slice(1), i = e.sizeMultiplier, a, s, o = gn(r.body);
  if (n === "sout")
    a = Z(["stretchy", "sout"]), a.height = e.fontMetrics().defaultRuleThickness / i, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = mt({
      number: 0.6,
      unit: "pt"
    }, e), d = mt({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    i = i / h.sizeMultiplier;
    var f = t.height + t.depth + l + d;
    t.style.paddingLeft = ae(f / 2 + l);
    var m = Math.floor(1e3 * f * i), v = cp(m), k = new pn([new Ln("phase", v)], {
      width: "400em",
      height: ae(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    a = Dn(["hide-tail"], [k], e), a.style.height = ae(f), s = t.depth + l + d;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var T, I, O = 0;
    /box/.test(n) ? (O = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
    ), T = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : O), I = T) : n === "angl" ? (O = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), T = 4 * O, I = Math.max(0, 0.25 - t.depth)) : (T = o ? 0.2 : 0, I = T), a = Gp(t, n, T, I, e), /fbox|boxed|fcolorbox/.test(n) ? (a.style.borderStyle = "solid", a.style.borderWidth = ae(O)) : n === "angl" && O !== 0.049 && (a.style.borderTopWidth = ae(O), a.style.borderRightWidth = ae(O)), s = t.depth + I, r.backgroundColor && (a.style.backgroundColor = r.backgroundColor, r.borderColor && (a.style.borderColor = r.borderColor));
  }
  var L;
  if (r.backgroundColor)
    L = Ke({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: a,
          shift: s
        },
        {
          type: "elem",
          elem: t,
          shift: 0
        }
      ]
    });
  else {
    var W = /cancel|phase/.test(n) ? ["svg-align"] : [];
    L = Ke({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: t,
          shift: 0
        },
        {
          type: "elem",
          elem: a,
          shift: s,
          wrapperClasses: W
        }
      ]
    });
  }
  return /cancel/.test(n) && (L.height = t.height, L.depth = t.depth), /cancel/.test(n) && !o ? Z(["mord", "cancel-lap"], [L], e) : Z(["mord"], [L], e);
}, v4 = (r, e) => {
  var t, n = new te(r.label.includes("colorbox") ? "mpadded" : "menclose", [st(r.body, e)]);
  switch (r.label) {
    case "\\cancel":
      n.setAttribute("notation", "updiagonalstrike");
      break;
    case "\\bcancel":
      n.setAttribute("notation", "downdiagonalstrike");
      break;
    case "\\phase":
      n.setAttribute("notation", "phasorangle");
      break;
    case "\\sout":
      n.setAttribute("notation", "horizontalstrike");
      break;
    case "\\fbox":
      n.setAttribute("notation", "box");
      break;
    case "\\angl":
      n.setAttribute("notation", "actuarial");
      break;
    case "\\fcolorbox":
    case "\\colorbox":
      if (t = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * t + "pt"), n.setAttribute("height", "+" + 2 * t + "pt"), n.setAttribute("lspace", t + "pt"), n.setAttribute("voffset", t + "pt"), r.label === "\\fcolorbox") {
        var i = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
        );
        n.setAttribute("style", "border: " + ae(i) + " solid " + r.borderColor);
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
pe({
  type: "enclose",
  names: ["\\colorbox"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "hbox"],
  handler(r, e, t) {
    var {
      parser: n,
      funcName: i
    } = r, a = Be(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: a,
      body: s
    };
  },
  htmlBuilder: b4,
  mathmlBuilder: v4
});
pe({
  type: "enclose",
  names: ["\\fcolorbox"],
  numArgs: 3,
  allowedInText: !0,
  argTypes: ["color", "color", "hbox"],
  handler(r, e, t) {
    var {
      parser: n,
      funcName: i
    } = r, a = Be(e[0], "color-token").color, s = Be(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: s,
      borderColor: a,
      body: o
    };
  }
});
pe({
  type: "enclose",
  names: ["\\fbox"],
  numArgs: 1,
  argTypes: ["hbox"],
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
pe({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
  numArgs: 1,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: i
    };
  }
});
pe({
  type: "enclose",
  names: ["\\sout"],
  numArgs: 1,
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    t.mode === "math" && t.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
    var i = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: i
    };
  }
});
pe({
  type: "enclose",
  names: ["\\angl"],
  numArgs: 1,
  argTypes: ["hbox"],
  allowedInText: !1,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "enclose",
      mode: t.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var Bd = {};
function qr(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: i,
    htmlBuilder: a,
    mathmlBuilder: s
  } = r, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: i
  }, l = 0; l < t.length; ++l)
    Bd[t[l]] = o;
  a && (fi[e] = a), s && (pi[e] = s);
}
var Ld = {};
function g(r, e) {
  Ld[r] = e;
}
class Xt {
  // End offset, zero-based exclusive.
  constructor(e, t, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, t) {
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Xt(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class tr {
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new tr(t, Xt.range(this, e));
  }
}
function fc(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Ra = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new ee("{" + r.envName + "} can be used only in display mode.");
}, w4 = /* @__PURE__ */ new Set(["gather", "gather*"]);
function Io(r) {
  if (!r.includes("ed"))
    return !r.includes("*");
}
function Hn(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: i,
    cols: a,
    arraystretch: s,
    colSeparationType: o,
    autoTag: l,
    singleRow: d,
    emptySingleRow: h,
    maxNumCols: f,
    leqno: m
  } = e;
  if (r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var v = r.gullet.expandMacroAsText("\\arraystretch");
    if (v == null)
      s = 1;
    else if (s = parseFloat(v), !s || s < 0)
      throw new ee("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var k = [], T = [k], I = [], O = [], L = l != null ? [] : void 0;
  function W() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function Y() {
    L && (r.gullet.macros.get("\\df@tag") ? (L.push(r.subparse([new tr("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : L.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (W(), O.push(fc(r)); ; ) {
    var ne = r.parseExpression(!1, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup();
    var M = {
      type: "ordgroup",
      mode: r.mode,
      body: ne
    };
    t && (M = {
      type: "styling",
      mode: r.mode,
      style: t,
      resetFont: !0,
      body: [M]
    }), k.push(M);
    var G = r.fetch().text;
    if (G === "&") {
      if (f && k.length === f) {
        if (d || o)
          throw new ee("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (G === "\\end") {
      Y(), k.length === 1 && M.type === "styling" && M.body.length === 1 && M.body[0].type === "ordgroup" && M.body[0].body.length === 0 && (T.length > 1 || !h) && T.pop(), O.length < T.length + 1 && O.push([]);
      break;
    } else if (G === "\\\\") {
      r.consume();
      var he = void 0;
      r.gullet.future().text !== " " && (he = r.parseSizeGroup(!0)), I.push(he ? he.value : null), Y(), O.push(fc(r)), k = [], T.push(k), W();
    } else
      throw new ee("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: i,
    arraystretch: s,
    body: T,
    cols: a,
    rowGaps: I,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: O,
    colSeparationType: o,
    tags: L,
    leqno: m
  };
}
function To(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var Wr = function(e, t) {
  var n, i, a = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(a), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
  ), f = 1 / t.fontMetrics().ptPerEm, m = 5 * f;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(Ee.SCRIPT).sizeMultiplier;
    m = 0.2778 * (v / t.sizeMultiplier);
  }
  var k = e.colSeparationType === "CD" ? mt({
    number: 3,
    unit: "ex"
  }, t) : 12 * f, T = 3 * f, I = e.arraystretch * k, O = 0.7 * I, L = 0.3 * I, W = 0;
  function Y(ur) {
    for (var zr = 0; zr < ur.length; ++zr)
      zr > 0 && (W += 0.25), d.push({
        pos: W,
        isDashed: ur[zr]
      });
  }
  for (Y(s[0]), n = 0; n < e.body.length; ++n) {
    var ne = e.body[n], M = O, G = L;
    o < ne.length && (o = ne.length);
    var he = {
      cells: new Array(ne.length),
      height: 0,
      depth: 0,
      pos: 0
    };
    for (i = 0; i < ne.length; ++i) {
      var ce = Ze(ne[i], t);
      G < ce.depth && (G = ce.depth), M < ce.height && (M = ce.height), he.cells[i] = ce;
    }
    var ie = e.rowGaps[n], Ie = 0;
    ie && (Ie = mt(ie, t), Ie > 0 && (Ie += L, G < Ie && (G = Ie), Ie = 0)), e.addJot && n < e.body.length - 1 && (G += T), he.height = M, he.depth = G, W += M, he.pos = W, W += G + Ie, l[n] = he, Y(s[n + 1]);
  }
  var ye = W / 2 + t.fontMetrics().axisHeight, q = e.cols || [], U = [], oe, D, j = [];
  if (e.tags && e.tags.some((ur) => ur))
    for (n = 0; n < a; ++n) {
      var E = l[n], re = E.pos - ye, ze = e.tags[n], Pe = void 0;
      ze === !0 ? Pe = Z(["eqn-num"], [], t) : ze === !1 ? Pe = Z([], [], t) : Pe = Z([], Tt(ze, t, !0), t), Pe.depth = E.depth, Pe.height = E.height, j.push({
        type: "elem",
        elem: Pe,
        shift: re
      });
    }
  for (
    i = 0, D = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    i < o || D < q.length;
    ++i, ++D
  ) {
    for (var Re, He = q[D], Ve = !0; ((sr = He) == null ? void 0 : sr.type) === "separator"; ) {
      var sr;
      if (Ve || (oe = Z(["arraycolsep"], []), oe.style.width = ae(t.fontMetrics().doubleRuleSep), U.push(oe)), He.separator === "|" || He.separator === ":") {
        var or = He.separator === "|" ? "solid" : "dashed", we = Z(["vertical-separator"], [], t);
        we.style.height = ae(W), we.style.borderRightWidth = ae(h), we.style.borderRightStyle = or, we.style.margin = "0 " + ae(-h / 2);
        var Oe = W - ye;
        Oe && (we.style.verticalAlign = ae(-Oe)), U.push(we);
      } else
        throw new ee("Invalid separator type: " + He.separator);
      D++, He = q[D], Ve = !1;
    }
    if (!(i >= o)) {
      var dt = void 0;
      if (i > 0 || e.hskipBeforeAndAfter) {
        var ge, lr;
        dt = (ge = (lr = He) == null ? void 0 : lr.pregap) != null ? ge : m, dt !== 0 && (oe = Z(["arraycolsep"], []), oe.style.width = ae(dt), U.push(oe));
      }
      var Ge = [];
      for (n = 0; n < a; ++n) {
        var gt = l[n], gr = gt.cells[i];
        if (gr) {
          var wn = gt.pos - ye;
          gr.depth = gt.depth, gr.height = gt.height, Ge.push({
            type: "elem",
            elem: gr,
            shift: wn
          });
        }
      }
      var $t = Ke({
        positionType: "individualShift",
        children: Ge
      }), Gr = Z(["col-align-" + (((Re = He) == null ? void 0 : Re.align) || "c")], [$t]);
      if (U.push(Gr), i < o - 1 || e.hskipBeforeAndAfter) {
        var jr, xn;
        dt = (jr = (xn = He) == null ? void 0 : xn.postgap) != null ? jr : m, dt !== 0 && (oe = Z(["arraycolsep"], []), oe.style.width = ae(dt), U.push(oe));
      }
    }
  }
  var Yt = Z(["mtable"], U);
  if (d.length > 0) {
    for (var br = V0("hline", t, h), vr = V0("hdashline", t, h), Er = [{
      type: "elem",
      elem: Yt,
      shift: 0
    }]; d.length > 0; ) {
      var Dt = d.pop(), Kr = Dt.pos - ye;
      Dt.isDashed ? Er.push({
        type: "elem",
        elem: vr,
        shift: Kr
      }) : Er.push({
        type: "elem",
        elem: br,
        shift: Kr
      });
    }
    Yt = Ke({
      positionType: "individualShift",
      children: Er
    });
  }
  if (j.length === 0)
    return Z(["mord"], [Yt], t);
  var Ft = Ke({
    positionType: "individualShift",
    children: j
  }), cr = Z(["tag"], [Ft], t);
  return vn([Yt, cr]);
}, x4 = {
  c: "center ",
  l: "left ",
  r: "right "
}, Ur = function(e, t) {
  for (var n = [], i = new te("mtd", [], ["mtr-glue"]), a = new te("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], d = 0; d < o.length; d++)
      l.push(new te("mtd", [st(o[d], t)]));
    e.tags && e.tags[s] && (l.unshift(i), l.push(i), e.leqno ? l.unshift(a) : l.push(a)), n.push(new te("mtr", l));
  }
  var h = new te("mtable", n), f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", ae(f));
  var m = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var k = e.cols, T = "", I = !1, O = 0, L = k.length;
    k[0].type === "separator" && (m += "top ", O = 1), k[k.length - 1].type === "separator" && (m += "bottom ", L -= 1);
    for (var W = O; W < L; W++) {
      var Y = k[W];
      Y.type === "align" ? (v += x4[Y.align], I && (T += "none "), I = !0) : Y.type === "separator" && I && (T += Y.separator === "|" ? "solid " : "dashed ", I = !1);
    }
    h.setAttribute("columnalign", v.trim()), /[sd]/.test(T) && h.setAttribute("columnlines", T.trim());
  }
  if (e.colSeparationType === "align") {
    for (var ne = e.cols || [], M = "", G = 1; G < ne.length; G++)
      M += G % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", M.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var he = "", ce = e.hLinesBeforeRow;
  m += ce[0].length > 0 ? "left " : "", m += ce[ce.length - 1].length > 0 ? "right " : "";
  for (var ie = 1; ie < ce.length - 1; ie++)
    he += ce[ie].length === 0 ? "none " : ce[ie][0] ? "dashed " : "solid ";
  return /[sd]/.test(he) && h.setAttribute("rowlines", he.trim()), m !== "" && (h = new te("menclose", [h]), h.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (h = new te("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, Dd = function(e, t) {
  e.envName.includes("ed") || Ra(e);
  var n = [], i = e.envName === "split", a = Hn(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : Io(e.envName),
    emptySingleRow: !0,
    colSeparationType: e.envName.includes("at") ? "alignat" : "align",
    maxNumCols: i ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s = 0, o = 0, l = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var d = "", h = 0; h < t[0].body.length; h++) {
      var f = Be(t[0].body[h], "textord");
      d += f.text;
    }
    s = Number(d), o = s * 2;
  }
  var m = !o;
  a.body.forEach(function(I) {
    for (var O = 1; O < I.length; O += 2) {
      var L = Be(I[O], "styling"), W = Be(L.body[0], "ordgroup");
      W.body.unshift(l);
    }
    if (m)
      o < I.length && (o = I.length);
    else {
      var Y = I.length / 2;
      if (s < Y)
        throw new ee("Too many math in a row: " + ("expected " + s + ", but got " + Y), I[0]);
    }
  });
  for (var v = 0; v < o; ++v) {
    var k = "r", T = 0;
    v % 2 === 1 ? k = "l" : v > 0 && m && (T = 1), n[v] = {
      type: "align",
      align: k,
      pregap: T,
      postgap: 0
    };
  }
  return a.colSeparationType = m ? "align" : "alignat", a;
};
qr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ma(e[0]), n = t ? [e[0]] : Be(e[0], "ordgroup").body, i = n.map(function(s) {
      var o = Na(s), l = o.text;
      if ("lcr".includes(l))
        return {
          type: "align",
          align: l
        };
      if (l === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (l === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new ee("Unknown column alignment: " + l, s);
    }), a = {
      cols: i,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return Hn(r.parser, a, To(r.envName));
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[r.envName.replace("*", "")], t = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: t
      }]
    };
    if (r.envName.charAt(r.envName.length - 1) === "*") {
      var i = r.parser;
      if (i.consumeSpaces(), i.fetch().text === "[") {
        if (i.consume(), i.consumeSpaces(), t = i.fetch().text, !"lcr".includes(t))
          throw new ee("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var a = Hn(r.parser, n, To(r.envName)), s = Math.max(0, ...a.body.map((o) => o.length));
    return a.cols = new Array(s).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [a],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : a;
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = Hn(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ma(e[0]), n = t ? [e[0]] : Be(e[0], "ordgroup").body, i = n.map(function(o) {
      var l = Na(o), d = l.text;
      if ("lc".includes(d))
        return {
          type: "align",
          align: d
        };
      throw new ee("Unknown column alignment: " + d, o);
    });
    if (i.length > 1)
      throw new ee("{subarray} can contain only one column");
    var a = {
      cols: i,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    }, s = Hn(r.parser, a, "script");
    if (s.body.length > 0 && s.body[0].length > 1)
      throw new ee("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 1.2,
      cols: [{
        type: "align",
        align: "l",
        pregap: 0,
        // TODO(kevinb) get the current style.
        // For now we use the metrics for TEXT style which is what we were
        // doing before.  Before attempting to get the current style we
        // should look at TeX's behavior especially for \over and matrices.
        postgap: 1
        /* 1em quad */
      }, {
        type: "align",
        align: "l",
        pregap: 0,
        postgap: 0
      }]
    }, t = Hn(r.parser, e, To(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.includes("r") ? "." : "\\{",
      right: r.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Dd,
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    w4.has(r.envName) && Ra(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Io(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return Hn(r.parser, e, "display");
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Dd,
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Ra(r);
    var e = {
      autoTag: Io(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return Hn(r.parser, e, "display");
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
qr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return Ra(r), n4(r.parser);
  },
  htmlBuilder: Wr,
  mathmlBuilder: Ur
});
g("\\nonumber", "\\gdef\\@eqnsw{0}");
g("\\notag", "\\nonumber");
pe({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !0,
  handler(r, e) {
    throw new ee(r.funcName + " valid only within array environment");
  }
});
var pc = Bd;
pe({
  type: "environment",
  names: ["\\begin", "\\end"],
  numArgs: 1,
  argTypes: ["text"],
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    if (i.type !== "ordgroup")
      throw new ee("Invalid environment name", i);
    for (var a = "", s = 0; s < i.body.length; ++s)
      a += Be(i.body[s], "textord").text;
    if (n === "\\begin") {
      if (!pc.hasOwnProperty(a))
        throw new ee("No such environment: " + a, i);
      var o = pc[a], {
        args: l,
        optArgs: d
      } = t.parseArguments("\\begin{" + a + "}", o), h = {
        mode: t.mode,
        envName: a,
        parser: t
      }, f = o.handler(h, l, d);
      t.expect("\\end", !1);
      var m = t.nextToken, v = Be(t.parseFunction(), "environment");
      if (v.name !== a)
        throw new ee("Mismatch: \\begin{" + a + "} matched by \\end{" + v.name + "}", m);
      return f;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: a,
      nameGroup: i
    };
  }
});
var y4 = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return Ze(r.body, n);
}, k4 = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return st(r.body, n);
}, mc = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak"
};
pe({
  type: "font",
  names: [
    // styles, except \boldsymbol defined below
    "\\mathrm",
    "\\mathit",
    "\\mathbf",
    "\\mathnormal",
    "\\mathsfit",
    // families
    "\\mathbb",
    "\\mathcal",
    "\\mathfrak",
    "\\mathscr",
    "\\mathsf",
    "\\mathtt",
    // aliases, except \bm defined below
    "\\Bbb",
    "\\bold",
    "\\frak"
  ],
  numArgs: 1,
  allowedInArgument: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = fa(e[0]), a = n in mc ? mc[n] : n;
    return {
      type: "font",
      mode: t.mode,
      font: a.slice(1),
      body: i
    };
  },
  htmlBuilder: y4,
  mathmlBuilder: k4
});
pe({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  numArgs: 1,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: Ea(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: gn(n)
    };
  }
});
pe({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  numArgs: 0,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      breakOnTokenText: i
    } = r, {
      mode: a
    } = t, s = t.parseExpression(!0, i);
    return {
      type: "font",
      mode: a,
      font: "math" + n.slice(1),
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: s
      }
    };
  }
});
var S4 = (r, e) => {
  var t = e.style, n = t.fracNum(), i = t.fracDen(), a;
  a = e.havingStyle(n);
  var s = Ze(r.numer, a, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  a = e.havingStyle(i);
  var d = Ze(r.denom, a, e), h, f, m;
  r.hasBarLine ? (r.barSize ? (f = mt(r.barSize, e), h = V0("frac-line", e, f)) : h = V0("frac-line", e), f = h.height, m = h.height) : (h = null, f = 0, m = e.fontMetrics().defaultRuleThickness);
  var v, k, T;
  t.size === Ee.DISPLAY.size ? (v = e.fontMetrics().num1, f > 0 ? k = 3 * m : k = 7 * m, T = e.fontMetrics().denom1) : (f > 0 ? (v = e.fontMetrics().num2, k = m) : (v = e.fontMetrics().num3, k = 3 * m), T = e.fontMetrics().denom2);
  var I;
  if (h) {
    var L = e.fontMetrics().axisHeight;
    v - s.depth - (L + 0.5 * f) < k && (v += k - (v - s.depth - (L + 0.5 * f))), L - 0.5 * f - (d.height - T) < k && (T += k - (L - 0.5 * f - (d.height - T)));
    var W = -(L - 0.5 * f);
    I = Ke({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: T
      }, {
        type: "elem",
        elem: h,
        shift: W
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  } else {
    var O = v - s.depth - (d.height - T);
    O < k && (v += 0.5 * (k - O), T += 0.5 * (k - O)), I = Ke({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: T
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  }
  a = e.havingStyle(t), I.height *= a.sizeMultiplier / e.sizeMultiplier, I.depth *= a.sizeMultiplier / e.sizeMultiplier;
  var Y;
  t.size === Ee.DISPLAY.size ? Y = e.fontMetrics().delim1 : t.size === Ee.SCRIPTSCRIPT.size ? Y = e.havingStyle(Ee.SCRIPT).fontMetrics().delim2 : Y = e.fontMetrics().delim2;
  var ne, M;
  return r.leftDelim == null ? ne = mi(e, ["mopen"]) : ne = Vs(r.leftDelim, Y, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? M = Z([]) : r.rightDelim == null ? M = mi(e, ["mclose"]) : M = Vs(r.rightDelim, Y, !0, e.havingStyle(t), r.mode, ["mclose"]), Z(["mord"].concat(a.sizingClasses(e)), [ne, Z(["mfrac"], [I]), M], e);
}, _4 = (r, e) => {
  var t = new te("mfrac", [st(r.numer, e), st(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = mt(r.barSize, e);
    t.setAttribute("linethickness", ae(n));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var i = [];
    if (r.leftDelim != null) {
      var a = new te("mo", [new Ct(r.leftDelim.replace("\\", ""))]);
      a.setAttribute("fence", "true"), i.push(a);
    }
    if (i.push(t), r.rightDelim != null) {
      var s = new te("mo", [new Ct(r.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), i.push(s);
    }
    return Co(i);
  }
  return t;
}, Fd = (r, e) => {
  if (!e)
    return r;
  var t = {
    type: "styling",
    mode: r.mode,
    style: e,
    body: [r]
  };
  return t;
};
pe({
  type: "genfrac",
  names: [
    "\\cfrac",
    "\\dfrac",
    "\\frac",
    "\\tfrac",
    "\\dbinom",
    "\\binom",
    "\\tbinom",
    "\\\\atopfrac",
    // can’t be entered directly
    "\\\\bracefrac",
    "\\\\brackfrac"
    // ditto
  ],
  numArgs: 2,
  allowedInArgument: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0], a = e[1], s, o = null, l = null;
    switch (n) {
      case "\\cfrac":
      case "\\dfrac":
      case "\\frac":
      case "\\tfrac":
        s = !0;
        break;
      case "\\\\atopfrac":
        s = !1;
        break;
      case "\\dbinom":
      case "\\binom":
      case "\\tbinom":
        s = !1, o = "(", l = ")";
        break;
      case "\\\\bracefrac":
        s = !1, o = "\\{", l = "\\}";
        break;
      case "\\\\brackfrac":
        s = !1, o = "[", l = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    var d = n === "\\cfrac", h = null;
    return d || n.startsWith("\\d") ? h = "display" : n.startsWith("\\t") && (h = "text"), Fd({
      type: "genfrac",
      mode: t.mode,
      numer: i,
      denom: a,
      continued: d,
      hasBarLine: s,
      leftDelim: o,
      rightDelim: l,
      barSize: null
    }, h);
  },
  htmlBuilder: S4,
  mathmlBuilder: _4
});
pe({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  numArgs: 0,
  infix: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: n
    } = r, i;
    switch (t) {
      case "\\over":
        i = "\\frac";
        break;
      case "\\choose":
        i = "\\binom";
        break;
      case "\\atop":
        i = "\\\\atopfrac";
        break;
      case "\\brace":
        i = "\\\\bracefrac";
        break;
      case "\\brack":
        i = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: i,
      token: n
    };
  }
});
var gc = ["display", "text", "script", "scriptscript"], bc = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
pe({
  type: "genfrac",
  names: ["\\genfrac"],
  numArgs: 6,
  allowedInArgument: !0,
  argTypes: ["math", "math", "size", "text", "math", "math"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], i = e[5], a = fa(e[0]), s = a.type === "atom" && a.family === "open" ? bc(a.text) : null, o = fa(e[1]), l = o.type === "atom" && o.family === "close" ? bc(o.text) : null, d = Be(e[2], "size"), h, f = null;
    d.isBlank ? h = !0 : (f = d.value, h = f.number > 0);
    var m = null, v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var k = Be(v.body[0], "textord");
        m = gc[Number(k.text)];
      }
    } else
      v = Be(v, "textord"), m = gc[Number(v.text)];
    return Fd({
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: i,
      continued: !1,
      hasBarLine: h,
      barSize: f,
      leftDelim: s,
      rightDelim: l
    }, m);
  }
});
pe({
  type: "infix",
  names: ["\\above"],
  numArgs: 1,
  argTypes: ["size"],
  infix: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n,
      token: i
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: Be(e[0], "size").value,
      token: i
    };
  }
});
pe({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  numArgs: 3,
  argTypes: ["math", "size", "math"],
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0], a = Be(e[1], "infix").size;
    if (!a)
      throw new Error("\\\\abovefrac expected size, but got " + String(a));
    var s = e[2], o = a.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
      numer: i,
      denom: s,
      continued: !1,
      hasBarLine: o,
      barSize: a,
      leftDelim: null,
      rightDelim: null
    };
  }
});
var Pd = (r, e) => {
  var t = e.style, n, i;
  r.type === "supsub" ? (n = r.sup ? Ze(r.sup, e.havingStyle(t.sup()), e) : Ze(r.sub, e.havingStyle(t.sub()), e), i = Be(r.base, "horizBrace")) : i = Be(r, "horizBrace");
  var a = Ze(i.base, e.havingBaseStyle(Ee.DISPLAY)), s = Ta(i, e), o;
  if (i.isOver ? o = Ke({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: a
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: s,
      wrapperClasses: ["svg-align"]
    }]
  }) : o = Ke({
    positionType: "bottom",
    positionData: a.depth + 0.1 + s.height,
    children: [{
      type: "elem",
      elem: s,
      wrapperClasses: ["svg-align"]
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: a
    }]
  }), n) {
    var l = Z(["minner", i.isOver ? "mover" : "munder"], [o], e);
    i.isOver ? o = Ke({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: l
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }) : o = Ke({
      positionType: "bottom",
      positionData: l.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: l
      }]
    });
  }
  return Z(["minner", i.isOver ? "mover" : "munder"], [o], e);
}, C4 = (r, e) => {
  var t = Ia(r.label);
  return new te(r.isOver ? "mover" : "munder", [st(r.base, e), t]);
};
pe({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
  numArgs: 1,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r;
    return {
      type: "horizBrace",
      mode: t.mode,
      label: n,
      isOver: n.includes("\\over"),
      base: e[0]
    };
  },
  htmlBuilder: Pd,
  mathmlBuilder: C4
});
pe({
  type: "href",
  names: ["\\href"],
  numArgs: 2,
  argTypes: ["url", "original"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], i = Be(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: i
    }) ? {
      type: "href",
      mode: t.mode,
      href: i,
      body: _t(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.body, e, !1);
    return Tp(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = Fn(r.body, e);
    return t instanceof te || (t = new te("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
pe({
  type: "href",
  names: ["\\url"],
  numArgs: 1,
  argTypes: ["url"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = Be(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return t.formatUnsupportedCmd("\\url");
    for (var i = [], a = 0; a < n.length; a++) {
      var s = n[a];
      s === "~" && (s = "\\textasciitilde"), i.push({
        type: "textord",
        mode: "text",
        text: s
      });
    }
    var o = {
      type: "text",
      mode: t.mode,
      font: "\\texttt",
      body: i
    };
    return {
      type: "href",
      mode: t.mode,
      href: n,
      body: _t(o)
    };
  }
});
pe({
  type: "hbox",
  names: ["\\hbox"],
  numArgs: 1,
  argTypes: ["text"],
  allowedInText: !0,
  primitive: !0,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "hbox",
      mode: t.mode,
      body: _t(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Tt(r.body, e.withFont(""), !1);
    return vn(t);
  },
  mathmlBuilder(r, e) {
    return new te("mrow", ar(r.body, e.withFont("")));
  }
});
pe({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  numArgs: 2,
  argTypes: ["raw", "original"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      token: i
    } = r, a = Be(e[0], "raw").string, s = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, l = {};
    switch (n) {
      case "\\htmlClass":
        l.class = a, o = {
          command: "\\htmlClass",
          class: a
        };
        break;
      case "\\htmlId":
        l.id = a, o = {
          command: "\\htmlId",
          id: a
        };
        break;
      case "\\htmlStyle":
        l.style = a, o = {
          command: "\\htmlStyle",
          style: a
        };
        break;
      case "\\htmlData": {
        for (var d = a.split(","), h = 0; h < d.length; h++) {
          var f = d[h], m = f.indexOf("=");
          if (m < 0)
            throw new ee("\\htmlData key/value '" + f + "' missing equals sign");
          var v = f.slice(0, m), k = f.slice(m + 1);
          l["data-" + v.trim()] = k;
        }
        o = {
          command: "\\htmlData",
          attributes: l
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return t.settings.isTrusted(o) ? {
      type: "html",
      mode: t.mode,
      attributes: l,
      body: _t(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var i = Z(n, t, e);
    for (var a in r.attributes)
      a !== "class" && r.attributes.hasOwnProperty(a) && i.setAttribute(a, r.attributes[a]);
    return i;
  },
  mathmlBuilder: (r, e) => Fn(r.body, e)
});
pe({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  numArgs: 2,
  allowedInArgument: !0,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "htmlmathml",
      mode: t.mode,
      html: _t(e[0]),
      mathml: _t(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.html, e, !1);
    return vn(t);
  },
  mathmlBuilder: (r, e) => Fn(r.mathml, e)
});
var is = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new ee("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!cd(n))
    throw new ee("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
pe({
  type: "includegraphics",
  names: ["\\includegraphics"],
  numArgs: 1,
  numOptionalArgs: 1,
  argTypes: ["raw", "url"],
  allowedInText: !1,
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, i = {
      number: 0,
      unit: "em"
    }, a = {
      number: 0.9,
      unit: "em"
    }, s = {
      number: 0,
      unit: "em"
    }, o = "";
    if (t[0])
      for (var l = Be(t[0], "raw").string, d = l.split(","), h = 0; h < d.length; h++) {
        var f = d[h].split("=");
        if (f.length === 2) {
          var m = f[1].trim();
          switch (f[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              i = is(m);
              break;
            case "height":
              a = is(m);
              break;
            case "totalheight":
              s = is(m);
              break;
            default:
              throw new ee("Invalid key: '" + f[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = Be(e[0], "url").url;
    return o === "" && (o = v, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: v
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: i,
      height: a,
      totalheight: s,
      src: v
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = mt(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = mt(r.totalheight, e) - t);
    var i = 0;
    r.width.number > 0 && (i = mt(r.width, e));
    var a = {
      height: ae(t + n)
    };
    i > 0 && (a.width = ae(i)), n > 0 && (a.verticalAlign = ae(-n));
    var s = new bp(r.src, r.alt, a);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new te("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = mt(r.height, e), i = 0;
    if (r.totalheight.number > 0 && (i = mt(r.totalheight, e) - n, t.setAttribute("valign", ae(-i))), t.setAttribute("height", ae(n + i)), r.width.number > 0) {
      var a = mt(r.width, e);
      t.setAttribute("width", ae(a));
    }
    return t.setAttribute("src", r.src), t;
  }
});
pe({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  numArgs: 1,
  argTypes: ["size"],
  primitive: !0,
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = Be(e[0], "size");
    if (t.settings.strict) {
      var a = n[1] === "m", s = i.value.unit === "mu";
      a ? (s || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + i.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : s && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: i.value
    };
  },
  htmlBuilder(r, e) {
    return md(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = mt(r.dimension, e);
    return new yd(t);
  }
});
pe({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  numArgs: 1,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: n.slice(5),
      body: i
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = Z([], [Ze(r.body, e)]), t = Z(["inner"], [t], e)) : t = Z(["inner"], [Ze(r.body, e)]);
    var n = Z(["fix"], []), i = Z([r.alignment], [t, n], e), a = Z(["strut"]);
    return a.style.height = ae(i.height + i.depth), i.depth && (a.style.verticalAlign = ae(-i.depth)), i.children.unshift(a), i = Z(["thinbox"], [i], e), Z(["mord", "vbox"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new te("mpadded", [st(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
pe({
  type: "styling",
  names: ["\\(", "$"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(r, e) {
    var {
      funcName: t,
      parser: n
    } = r, i = n.mode;
    n.switchMode("math");
    var a = t === "\\(" ? "\\)" : "$", s = n.parseExpression(!1, a);
    return n.expect(a), n.switchMode(i), {
      type: "styling",
      mode: n.mode,
      style: "text",
      resetFont: !0,
      body: s
    };
  }
});
pe({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(r, e) {
    throw new ee("Mismatched " + r.funcName);
  }
});
var vc = (r, e) => {
  switch (e.style.size) {
    case Ee.DISPLAY.size:
      return r.display;
    case Ee.TEXT.size:
      return r.text;
    case Ee.SCRIPT.size:
      return r.script;
    case Ee.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
pe({
  type: "mathchoice",
  names: ["\\mathchoice"],
  numArgs: 4,
  primitive: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r;
    return {
      type: "mathchoice",
      mode: t.mode,
      display: _t(e[0]),
      text: _t(e[1]),
      script: _t(e[2]),
      scriptscript: _t(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = vc(r, e), n = Tt(t, e, !1);
    return vn(n);
  },
  mathmlBuilder: (r, e) => {
    var t = vc(r, e);
    return Fn(t, e);
  }
});
var Vd = (r, e, t, n, i, a, s) => {
  r = Z([], [r]);
  var o = t && gn(t), l, d;
  if (e) {
    var h = Ze(e, n.havingStyle(i.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var f = Ze(t, n.havingStyle(i.sub()), n);
    l = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height)
    };
  }
  var m;
  if (d && l) {
    var v = n.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + r.depth + s;
    m = Ke({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: ae(-a)
      }, {
        type: "kern",
        size: l.kern
      }, {
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: ae(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else if (l) {
    var k = r.height - s;
    m = Ke({
      positionType: "top",
      positionData: k,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: ae(-a)
      }, {
        type: "kern",
        size: l.kern
      }, {
        type: "elem",
        elem: r
      }]
    });
  } else if (d) {
    var T = r.depth + s;
    m = Ke({
      positionType: "bottom",
      positionData: T,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: ae(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else
    return r;
  var I = [m];
  if (l && a !== 0 && !o) {
    var O = Z(["mspace"], [], n);
    O.style.marginRight = ae(a), I.unshift(O);
  }
  return Z(["mop", "op-limits"], I, n);
}, Hd = /* @__PURE__ */ new Set(["\\smallint"]), qd = (r, e) => {
  var t, n, i = !1, a;
  r.type === "supsub" ? (t = r.sup, n = r.sub, a = Be(r.base, "op"), i = !0) : a = Be(r, "op");
  var s = e.style, o = !1;
  s.size === Ee.DISPLAY.size && a.symbol && !Hd.has(a.name) && (o = !0);
  var l, d;
  if (a.symbol) {
    var h = o ? "Size2-Regular" : "Size1-Regular", f = "";
    if ((a.name === "\\oiint" || a.name === "\\oiiint") && (f = a.name.slice(1), a.name = f === "oiint" ? "\\iint" : "\\iiint"), l = Ut(a.name, h, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), d = l.italic, f.length > 0) {
      var m = bd(f + "Size" + (o ? "2" : "1"), e);
      l = Ke({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: l,
          shift: 0
        }, {
          type: "elem",
          elem: m,
          shift: o ? 0.08 : 0
        }]
      }), a.name = "\\" + f, l.classes.unshift("mop"), l.italic = d;
    }
  } else if (a.body) {
    var v = Tt(a.body, e, !0);
    v.length === 1 && v[0] instanceof rr ? (l = v[0], l.classes[0] = "mop") : l = Z(["mop"], v, e);
  } else {
    for (var k = [], T = 1; T < a.name.length; T++)
      k.push(So(a.name[T], a.mode, e));
    l = Z(["mop"], k, e);
  }
  var I = 0, O = 0;
  if ((l instanceof rr || a.name === "\\oiint" || a.name === "\\oiiint") && !a.suppressBaseShift) {
    var L;
    I = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, O = (L = l.italic) != null ? L : 0;
  }
  return i ? Vd(l, t, n, e, s, O, I) : (I && (l.style.position = "relative", l.style.top = ae(I)), l);
}, A4 = (r, e) => {
  var t;
  if (r.symbol)
    t = new te("mo", [mr(r.name, r.mode)]), Hd.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new te("mo", ar(r.body, e));
  else {
    t = new te("mi", [new Ct(r.name.slice(1))]);
    var n = new te("mo", [mr("⁡", "text")]);
    r.parentIsSupSub ? t = new te("mrow", [t, n]) : t = xd([t, n]);
  }
  return t;
}, $4 = {
  "∏": "\\prod",
  "∐": "\\coprod",
  "∑": "\\sum",
  "⋀": "\\bigwedge",
  "⋁": "\\bigvee",
  "⋂": "\\bigcap",
  "⋃": "\\bigcup",
  "⨀": "\\bigodot",
  "⨁": "\\bigoplus",
  "⨂": "\\bigotimes",
  "⨄": "\\biguplus",
  "⨆": "\\bigsqcup"
};
pe({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  numArgs: 0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = n;
    return i.length === 1 && (i = $4[i]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: qd,
  mathmlBuilder: A4
});
pe({
  type: "op",
  names: ["\\mathop"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "op",
      mode: t.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: _t(n)
    };
  }
});
var I4 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
pe({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  numArgs: 0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  }
});
pe({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  numArgs: 0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: t
    };
  }
});
pe({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  numArgs: 0,
  allowedInArgument: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = I4[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  }
});
var Wd = (r, e) => {
  var t, n, i = !1, a;
  r.type === "supsub" ? (t = r.sup, n = r.sub, a = Be(r.base, "operatorname"), i = !0) : a = Be(r, "operatorname");
  var s;
  if (a.body.length > 0) {
    for (var o = a.body.map((f) => {
      var m = "text" in f ? f.text : void 0;
      return typeof m == "string" ? {
        type: "textord",
        mode: f.mode,
        text: m
      } : f;
    }), l = Tt(o, e.withFont("mathrm"), !0), d = 0; d < l.length; d++) {
      var h = l[d];
      h instanceof rr && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = Z(["mop"], l, e);
  } else
    s = Z(["mop"], [], e);
  return i ? Vd(s, t, n, e, e.style, 0, 0) : s;
}, T4 = (r, e) => {
  for (var t = ar(r.body, e.withFont("mathrm")), n = !0, i = 0; i < t.length; i++) {
    var a = t[i];
    if (!(a instanceof yd)) if (a instanceof te)
      switch (a.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var s = a.children[0];
          a.children.length === 1 && s instanceof Ct ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = t.map((h) => h.toText()).join("");
    t = [new Ct(o)];
  }
  var l = new te("mi", t);
  l.setAttribute("mathvariant", "normal");
  var d = new te("mo", [mr("⁡", "text")]);
  return r.parentIsSupSub ? new te("mrow", [l, d]) : xd([l, d]);
};
pe({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  numArgs: 1,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: _t(i),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Wd,
  mathmlBuilder: T4
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
g0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? vn(Tt(r.body, e, !1)) : Z(["mord"], Tt(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return Fn(r.body, e, !0);
  }
});
pe({
  type: "overline",
  names: ["\\overline"],
  numArgs: 1,
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "overline",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder(r, e) {
    var t = Ze(r.body, e.havingCrampedStyle()), n = V0("overline-line", e), i = e.fontMetrics().defaultRuleThickness, a = Ke({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: i
      }]
    });
    return Z(["mord", "overline"], [a], e);
  },
  mathmlBuilder(r, e) {
    var t = new te("mo", [new Ct("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new te("mover", [st(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
pe({
  type: "phantom",
  names: ["\\phantom"],
  numArgs: 1,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "phantom",
      mode: t.mode,
      body: _t(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.body, e.withPhantom(), !1);
    return vn(t);
  },
  mathmlBuilder: (r, e) => {
    var t = ar(r.body, e);
    return new te("mphantom", t);
  }
});
g("\\hphantom", "\\smash{\\phantom{#1}}");
pe({
  type: "vphantom",
  names: ["\\vphantom"],
  numArgs: 1,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[0];
    return {
      type: "vphantom",
      mode: t.mode,
      body: n
    };
  },
  htmlBuilder: (r, e) => {
    var t = Z(["inner"], [Ze(r.body, e.withPhantom())]), n = Z(["fix"], []);
    return Z(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = ar(_t(r.body), e), n = new te("mphantom", t), i = new te("mpadded", [n]);
    return i.setAttribute("width", "0px"), i;
  }
});
pe({
  type: "raisebox",
  names: ["\\raisebox"],
  numArgs: 2,
  argTypes: ["size", "hbox"],
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t
    } = r, n = Be(e[0], "size").value, i = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = Ze(r.body, e), n = mt(r.dy, e);
    return Ke({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new te("mpadded", [st(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
pe({
  type: "internal",
  names: ["\\relax"],
  numArgs: 0,
  allowedInText: !0,
  allowedInArgument: !0,
  handler(r) {
    var {
      parser: e
    } = r;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
pe({
  type: "rule",
  names: ["\\rule"],
  numArgs: 2,
  numOptionalArgs: 1,
  allowedInText: !0,
  allowedInMath: !0,
  argTypes: ["size", "size", "size"],
  handler(r, e, t) {
    var {
      parser: n
    } = r, i = t[0], a = Be(e[0], "size"), s = Be(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: i && Be(i, "size").value,
      width: a.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = Z(["mord", "rule"], [], e), n = mt(r.width, e), i = mt(r.height, e), a = r.shift ? mt(r.shift, e) : 0;
    return t.style.borderRightWidth = ae(n), t.style.borderTopWidth = ae(i), t.style.bottom = ae(a), t.width = n, t.height = i + a, t.depth = -a, t.maxFontSize = i * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = mt(r.width, e), n = mt(r.height, e), i = r.shift ? mt(r.shift, e) : 0, a = e.color && e.getColor() || "black", s = new te("mspace");
    s.setAttribute("mathbackground", a), s.setAttribute("width", ae(t)), s.setAttribute("height", ae(n));
    var o = new te("mpadded", [s]);
    return i >= 0 ? o.setAttribute("height", ae(i)) : (o.setAttribute("height", ae(i)), o.setAttribute("depth", ae(-i))), o.setAttribute("voffset", ae(i)), o;
  }
});
function Ud(r, e, t) {
  for (var n = Tt(r, e, !1), i = e.sizeMultiplier / t.sizeMultiplier, a = 0; a < n.length; a++) {
    var s = n[a].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[a].classes, e.sizingClasses(t)) : n[a].classes[s + 1] === "reset-size" + e.size && (n[a].classes[s + 1] = "reset-size" + t.size), n[a].height *= i, n[a].depth *= i;
  }
  return vn(n);
}
var wc = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], N4 = (r, e) => {
  var t = e.havingSize(r.size);
  return Ud(r.body, t, e);
};
pe({
  type: "sizing",
  names: wc,
  numArgs: 0,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: i
    } = r, a = i.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: i.mode,
      // Figure out what size to use based on the list of functions above
      size: wc.indexOf(n) + 1,
      body: a
    };
  },
  htmlBuilder: N4,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = ar(r.body, t), i = new te("mstyle", n);
    return i.setAttribute("mathsize", ae(t.sizeMultiplier)), i;
  }
});
pe({
  type: "smash",
  names: ["\\smash"],
  numArgs: 1,
  numOptionalArgs: 1,
  allowedInText: !0,
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, i = !1, a = !1, s = t[0] && Be(t[0], "ordgroup");
    if (s)
      for (var o, l = 0; l < s.body.length; ++l) {
        var d = s.body[l];
        if (o = Na(d).text, o === "t")
          i = !0;
        else if (o === "b")
          a = !0;
        else {
          i = !1, a = !1;
          break;
        }
      }
    else
      i = !0, a = !0;
    var h = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: h,
      smashHeight: i,
      smashDepth: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = Z([], [Ze(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth)
      return Z(["mord", "smash"], [t], e);
    if (t.children)
      for (var n = 0; n < t.children.length; n++)
        r.smashHeight && (t.children[n].height = 0), r.smashDepth && (t.children[n].depth = 0);
    var i = Ke({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    });
    return Z(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new te("mpadded", [st(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
pe({
  type: "sqrt",
  names: ["\\sqrt"],
  numArgs: 1,
  numOptionalArgs: 1,
  handler(r, e, t) {
    var {
      parser: n
    } = r, i = t[0], a = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: a,
      index: i
    };
  },
  htmlBuilder(r, e) {
    var t = Ze(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = H0(t, e);
    var n = e.fontMetrics(), i = n.defaultRuleThickness, a = i;
    e.style.id < Ee.TEXT.id && (a = e.fontMetrics().xHeight);
    var s = i + a / 4, o = t.height + t.depth + s + i, {
      span: l,
      ruleWidth: d,
      advanceWidth: h
    } = d4(o, e), f = l.height - d;
    f > t.height + t.depth + s && (s = (s + f - t.height - t.depth) / 2);
    var m = l.height - t.height - s - d;
    t.style.paddingLeft = ae(h);
    var v = Ke({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(t.height + m)
      }, {
        type: "elem",
        elem: l
      }, {
        type: "kern",
        size: d
      }]
    });
    if (r.index) {
      var k = e.havingStyle(Ee.SCRIPTSCRIPT), T = Ze(r.index, k, e), I = 0.6 * (v.height - v.depth), O = Ke({
        positionType: "shift",
        positionData: -I,
        children: [{
          type: "elem",
          elem: T
        }]
      }), L = Z(["root"], [O]);
      return Z(["mord", "sqrt"], [L, v], e);
    } else
      return Z(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new te("mroot", [st(t, e), st(n, e)]) : new te("msqrt", [st(t, e)]);
  }
});
var Hs = {
  display: Ee.DISPLAY,
  text: Ee.TEXT,
  script: Ee.SCRIPT,
  scriptscript: Ee.SCRIPTSCRIPT
};
function M4(r) {
  return r in Hs;
}
pe({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: i
    } = r, a = i.parseExpression(!0, t), s = n.slice(1, n.length - 5);
    if (!M4(s))
      throw new Error("Unknown style: " + s);
    return {
      type: "styling",
      mode: i.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: s,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = Hs[r.style], n = e.havingStyle(t);
    return r.resetFont && (n = n.withFont("")), Ud(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = Hs[r.style], n = e.havingStyle(t);
    r.resetFont && (n = n.withFont(""));
    var i = ar(r.body, n), a = new te("mstyle", i), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return a.setAttribute("scriptlevel", o[0]), a.setAttribute("displaystyle", o[1]), a;
  }
});
var E4 = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var i = n.limits && (t.style.size === Ee.DISPLAY.size || n.alwaysHandleSupSub);
      return i ? qd : null;
    } else if (n.type === "operatorname") {
      var a = n.alwaysHandleSupSub && (t.style.size === Ee.DISPLAY.size || n.limits);
      return a ? Wd : null;
    } else {
      if (n.type === "accent")
        return gn(n.base) ? Cd : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? Pd : null;
      } else
        return null;
    }
  else return null;
};
g0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = E4(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: i,
      sub: a
    } = r, s = Ze(n, e), o, l, d = e.fontMetrics(), h = 0, f = 0, m = n && gn(n);
    if (i) {
      var v = e.havingStyle(e.style.sup());
      o = Ze(i, v, e), m || (h = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (a) {
      var k = e.havingStyle(e.style.sub());
      l = Ze(a, k, e), m || (f = s.depth + k.fontMetrics().subDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    var T;
    e.style === Ee.DISPLAY ? T = d.sup1 : e.style.cramped ? T = d.sup3 : T = d.sup2;
    var I = e.sizeMultiplier, O = ae(0.5 / d.ptPerEm / I), L = null;
    if (l) {
      var W = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      if (s instanceof rr || W) {
        var Y;
        L = ae(-((Y = s.italic) != null ? Y : 0));
      }
    }
    var ne;
    if (o && l) {
      h = Math.max(h, T, o.depth + 0.25 * d.xHeight), f = Math.max(f, d.sub2);
      var M = d.defaultRuleThickness, G = 4 * M;
      if (h - o.depth - (l.height - f) < G) {
        f = G - (h - o.depth) + l.height;
        var he = 0.8 * d.xHeight - (h - o.depth);
        he > 0 && (h += he, f -= he);
      }
      var ce = [{
        type: "elem",
        elem: l,
        shift: f,
        marginRight: O,
        marginLeft: L
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: O
      }];
      ne = Ke({
        positionType: "individualShift",
        children: ce
      });
    } else if (l) {
      f = Math.max(f, d.sub1, l.height - 0.8 * d.xHeight);
      var ie = [{
        type: "elem",
        elem: l,
        marginLeft: L,
        marginRight: O
      }];
      ne = Ke({
        positionType: "shift",
        positionData: f,
        children: ie
      });
    } else if (o)
      h = Math.max(h, T, o.depth + 0.25 * d.xHeight), ne = Ke({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: O
        }]
      });
    else
      throw new Error("supsub must have either sup or sub.");
    var Ie = Ls(s, "right") || "mord";
    return Z([Ie], [s, Z(["msupsub"], [ne])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, i;
    r.base && r.base.type === "horizBrace" && (i = !!r.sup, i === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var a = [st(r.base, e)];
    r.sub && a.push(st(r.sub, e)), r.sup && a.push(st(r.sup, e));
    var s;
    if (t)
      s = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var d = r.base;
        d && d.type === "op" && d.limits && e.style === Ee.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === Ee.DISPLAY || d.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === Ee.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === Ee.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === Ee.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === Ee.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new te(s, a);
  }
});
g0({
  type: "atom",
  htmlBuilder(r, e) {
    return So(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new te("mo", [mr(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Ao(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Gd = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
g0({
  type: "mathord",
  htmlBuilder(r, e) {
    return $a(r, e);
  },
  mathmlBuilder(r, e) {
    var t = new te("mi", [mr(r.text, r.mode, e)]), n = Ao(r, e) || "italic";
    return n !== Gd[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
g0({
  type: "textord",
  htmlBuilder(r, e) {
    return $a(r, e);
  },
  mathmlBuilder(r, e) {
    var t = mr(r.text, r.mode, e), n = Ao(r, e) || "normal", i;
    return r.mode === "text" ? i = new te("mtext", [t]) : /[0-9]/.test(r.text) ? i = new te("mn", [t]) : r.text === "\\prime" ? i = new te("mo", [t]) : i = new te("mi", [t]), n !== Gd[i.type] && i.setAttribute("mathvariant", n), i;
  }
});
var as = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, ss = {
  " ": {},
  "\\ ": {},
  "~": {
    className: "nobreak"
  },
  "\\space": {},
  "\\nobreakspace": {
    className: "nobreak"
  }
};
g0({
  type: "spacing",
  htmlBuilder(r, e) {
    if (ss.hasOwnProperty(r.text)) {
      var t = ss[r.text].className || "";
      if (r.mode === "text") {
        var n = $a(r, e);
        return n.classes.push(t), n;
      } else
        return Z(["mspace", t], [So(r.text, r.mode, e)], e);
    } else {
      if (as.hasOwnProperty(r.text))
        return Z(["mspace", as[r.text]], [], e);
      throw new ee('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (ss.hasOwnProperty(r.text))
      t = new te("mtext", [new Ct(" ")]);
    else {
      if (as.hasOwnProperty(r.text))
        return new te("mspace");
      throw new ee('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var xc = () => {
  var r = new te("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
g0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new te("mtable", [new te("mtr", [xc(), new te("mtd", [Fn(r.body, e)]), xc(), new te("mtd", [Fn(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var yc = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, kc = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, z4 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Sc = (r, e) => {
  var t = r.font;
  if (t) {
    if (yc[t])
      return e.withTextFontFamily(yc[t]);
    if (kc[t])
      return e.withTextFontWeight(kc[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(z4[t]);
};
pe({
  type: "text",
  names: [
    // Font families
    "\\text",
    "\\textrm",
    "\\textsf",
    "\\texttt",
    "\\textnormal",
    // Font weights
    "\\textbf",
    "\\textmd",
    // Font Shapes
    "\\textit",
    "\\textup",
    "\\emph"
  ],
  numArgs: 1,
  argTypes: ["text"],
  allowedInArgument: !0,
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: _t(i),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = Sc(r, e), n = Tt(r.body, t, !0);
    return Z(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = Sc(r, e);
    return Fn(r.body, t);
  }
});
pe({
  type: "underline",
  names: ["\\underline"],
  numArgs: 1,
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "underline",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = Ze(r.body, e), n = V0("underline-line", e), i = e.fontMetrics().defaultRuleThickness, a = Ke({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "kern",
        size: i
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * i
      }, {
        type: "elem",
        elem: t
      }]
    });
    return Z(["mord", "underline"], [a], e);
  },
  mathmlBuilder(r, e) {
    var t = new te("mo", [new Ct("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new te("munder", [st(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
pe({
  type: "vcenter",
  names: ["\\vcenter"],
  numArgs: 1,
  argTypes: ["original"],
  // In LaTeX, \vcenter can act only on a box.
  allowedInText: !1,
  handler(r, e) {
    var {
      parser: t
    } = r;
    return {
      type: "vcenter",
      mode: t.mode,
      body: e[0]
    };
  },
  htmlBuilder(r, e) {
    var t = Ze(r.body, e), n = e.fontMetrics().axisHeight, i = 0.5 * (t.height - n - (t.depth + n));
    return Ke({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new te("mpadded", [st(r.body, e)], ["vcenter"]);
    return new te("mrow", [t]);
  }
});
pe({
  type: "verb",
  names: ["\\verb"],
  numArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    throw new ee("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = _c(r), n = [], i = e.havingStyle(e.style.text()), a = 0; a < t.length; a++) {
      var s = t[a];
      s === "~" && (s = "\\textasciitilde"), n.push(Ut(s, "Typewriter-Regular", r.mode, i, ["mord", "texttt"]));
    }
    return Z(["mord", "text"].concat(i.sizingClasses(e)), pd(n), i);
  },
  mathmlBuilder(r, e) {
    var t = new Ct(_c(r)), n = new te("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var _c = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), zn = vd, jd = `[ \r
	]`, R4 = "\\\\[a-zA-Z@]+", O4 = "\\\\[^\uD800-\uDFFF]", B4 = "(" + R4 + ")" + jd + "*", L4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, qs = "[̀-ͯ]", D4 = new RegExp(qs + "+$"), F4 = "(" + jd + "+)|" + // whitespace
(L4 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(qs + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(qs + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + B4) + // \macroName + spaces
("|" + O4 + ")");
class Cc {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(F4, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, t) {
    this.catcodes[e] = t;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, t = this.tokenRegex.lastIndex;
    if (t === e.length)
      return new tr("EOF", new Xt(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new ee("Unexpected character: '" + e[t] + "'", new tr(e[t], new Xt(this, t, t + 1)));
    var i = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[i] === 14) {
      var a = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return a === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = a + 1, this.lex();
    }
    return new tr(i, new Xt(this, t, this.tokenRegex.lastIndex));
  }
}
class P4 {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = [];
  }
  /**
   * Start a new nested group, affecting future local `set`s.
   */
  beginGroup() {
    this.undefStack.push({});
  }
  /**
   * End current nested group, restoring values before the group began.
   */
  endGroup() {
    if (this.undefStack.length === 0)
      throw new ee("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var t in e)
      e.hasOwnProperty(t) && (e[t] == null ? delete this.current[t] : this.current[t] = e[t]);
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    for (; this.undefStack.length > 0; )
      this.endGroup();
  }
  /**
   * Detect whether `name` has a definition.  Equivalent to
   * `get(name) != null`.
   */
  has(e) {
    return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
  }
  /**
   * Get the current value of a name, or `undefined` if there is no value.
   *
   * Note: Do not use `if (namespace.get(...))` to detect whether a macro
   * is defined, as the definition may be the empty string which evaluates
   * to `false` in JavaScript.  Use `if (namespace.get(...) != null)` or
   * `if (namespace.has(...))`.
   */
  get(e) {
    return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
  }
  /**
   * Set the current value of a name, and optionally set it globally too.
   * Local set() sets the current value and (when appropriate) adds an undo
   * operation to the undo stack.  Global set() may change the undo
   * operation at every level, so takes time linear in their number.
   * A value of undefined means to delete existing definitions.
   */
  set(e, t, n) {
    if (n === void 0 && (n = !1), n) {
      for (var i = 0; i < this.undefStack.length; i++)
        delete this.undefStack[i][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var a = this.undefStack[this.undefStack.length - 1];
      a && !a.hasOwnProperty(e) && (a[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var V4 = Ld;
g("\\noexpand", function(r) {
  var e = r.popToken();
  return r.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
g("\\expandafter", function(r) {
  var e = r.popToken();
  return r.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
g("\\@firstoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
g("\\@secondoftwo", function(r) {
  var e = r.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
g("\\@ifnextchar", function(r) {
  var e = r.consumeArgs(3);
  r.consumeSpaces();
  var t = r.future();
  return e[0].length === 1 && e[0][0].text === t.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
g("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
g("\\TextOrMath", function(r) {
  var e = r.consumeArgs(2);
  return r.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var Ac = {
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
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
g("\\char", function(r) {
  var e = r.popToken(), t, n = 0;
  if (e.text === "'")
    t = 8, e = r.popToken();
  else if (e.text === '"')
    t = 16, e = r.popToken();
  else if (e.text === "`")
    if (e = r.popToken(), e.text[0] === "\\")
      n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new ee("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = Ac[e.text], n == null || n >= t)
      throw new ee("Invalid base-" + t + " digit " + e.text);
    for (var i; (i = Ac[r.future().text]) != null && i < t; )
      n *= t, n += i, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var No = (r, e, t, n) => {
  var i = r.consumeArg().tokens;
  if (i.length !== 1)
    throw new ee("\\newcommand's first argument must be a macro name");
  var a = i[0].text, s = r.isDefined(a);
  if (s && !e)
    throw new ee("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!s && !t)
    throw new ee("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var o = 0;
  if (i = r.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
    for (var l = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      l += d.text, d = r.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new ee("Invalid number of arguments: " + l);
    o = parseInt(l), i = r.consumeArg().tokens;
  }
  return s && n || r.macros.set(a, {
    tokens: i,
    numArgs: o
  }), "";
};
g("\\newcommand", (r) => No(r, !1, !0, !1));
g("\\renewcommand", (r) => No(r, !0, !1, !1));
g("\\providecommand", (r) => No(r, !0, !0, !0));
g("\\message", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.log(e.reverse().map((t) => t.text).join("")), "";
});
g("\\errmessage", (r) => {
  var e = r.consumeArgs(1)[0];
  return console.error(e.reverse().map((t) => t.text).join("")), "";
});
g("\\show", (r) => {
  var e = r.popToken(), t = e.text;
  return console.log(e, r.macros.get(t), zn[t], ht.math[t], ht.text[t]), "";
});
g("\\bgroup", "{");
g("\\egroup", "}");
g("~", "\\nobreakspace");
g("\\lq", "`");
g("\\rq", "'");
g("\\aa", "\\r a");
g("\\AA", "\\r A");
g("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
g("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
g("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
g("ℬ", "\\mathscr{B}");
g("ℰ", "\\mathscr{E}");
g("ℱ", "\\mathscr{F}");
g("ℋ", "\\mathscr{H}");
g("ℐ", "\\mathscr{I}");
g("ℒ", "\\mathscr{L}");
g("ℳ", "\\mathscr{M}");
g("ℛ", "\\mathscr{R}");
g("ℭ", "\\mathfrak{C}");
g("ℌ", "\\mathfrak{H}");
g("ℨ", "\\mathfrak{Z}");
g("\\Bbbk", "\\Bbb{k}");
g("\\llap", "\\mathllap{\\textrm{#1}}");
g("\\rlap", "\\mathrlap{\\textrm{#1}}");
g("\\clap", "\\mathclap{\\textrm{#1}}");
g("\\mathstrut", "\\vphantom{(}");
g("\\underbar", "\\underline{\\text{#1}}");
g("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
g("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
g("\\ne", "\\neq");
g("≠", "\\neq");
g("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
g("∉", "\\notin");
g("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
g("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
g("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
g("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
g("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
g("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
g("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
g("⟂", "\\perp");
g("‼", "\\mathclose{!\\mkern-0.8mu!}");
g("∌", "\\notni");
g("⌜", "\\ulcorner");
g("⌝", "\\urcorner");
g("⌞", "\\llcorner");
g("⌟", "\\lrcorner");
g("©", "\\copyright");
g("®", "\\textregistered");
g("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
g("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
g("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
g("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
g("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
g("⋮", "\\vdots");
g("\\varGamma", "\\mathit{\\Gamma}");
g("\\varDelta", "\\mathit{\\Delta}");
g("\\varTheta", "\\mathit{\\Theta}");
g("\\varLambda", "\\mathit{\\Lambda}");
g("\\varXi", "\\mathit{\\Xi}");
g("\\varPi", "\\mathit{\\Pi}");
g("\\varSigma", "\\mathit{\\Sigma}");
g("\\varUpsilon", "\\mathit{\\Upsilon}");
g("\\varPhi", "\\mathit{\\Phi}");
g("\\varPsi", "\\mathit{\\Psi}");
g("\\varOmega", "\\mathit{\\Omega}");
g("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
g("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
g("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
g("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
g("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
g("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
g("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
g("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var $c = {
  ",": "\\dotsc",
  "\\not": "\\dotsb",
  // \keybin@ checks for the following:
  "+": "\\dotsb",
  "=": "\\dotsb",
  "<": "\\dotsb",
  ">": "\\dotsb",
  "-": "\\dotsb",
  "*": "\\dotsb",
  ":": "\\dotsb",
  // Symbols whose definition starts with \DOTSB:
  "\\DOTSB": "\\dotsb",
  "\\coprod": "\\dotsb",
  "\\bigvee": "\\dotsb",
  "\\bigwedge": "\\dotsb",
  "\\biguplus": "\\dotsb",
  "\\bigcap": "\\dotsb",
  "\\bigcup": "\\dotsb",
  "\\prod": "\\dotsb",
  "\\sum": "\\dotsb",
  "\\bigotimes": "\\dotsb",
  "\\bigoplus": "\\dotsb",
  "\\bigodot": "\\dotsb",
  "\\bigsqcup": "\\dotsb",
  "\\And": "\\dotsb",
  "\\longrightarrow": "\\dotsb",
  "\\Longrightarrow": "\\dotsb",
  "\\longleftarrow": "\\dotsb",
  "\\Longleftarrow": "\\dotsb",
  "\\longleftrightarrow": "\\dotsb",
  "\\Longleftrightarrow": "\\dotsb",
  "\\mapsto": "\\dotsb",
  "\\longmapsto": "\\dotsb",
  "\\hookrightarrow": "\\dotsb",
  "\\doteq": "\\dotsb",
  // Symbols whose definition starts with \mathbin:
  "\\mathbin": "\\dotsb",
  // Symbols whose definition starts with \mathrel:
  "\\mathrel": "\\dotsb",
  "\\relbar": "\\dotsb",
  "\\Relbar": "\\dotsb",
  "\\xrightarrow": "\\dotsb",
  "\\xleftarrow": "\\dotsb",
  // Symbols whose definition starts with \DOTSI:
  "\\DOTSI": "\\dotsi",
  "\\int": "\\dotsi",
  "\\oint": "\\dotsi",
  "\\iint": "\\dotsi",
  "\\iiint": "\\dotsi",
  "\\iiiint": "\\dotsi",
  "\\idotsint": "\\dotsi",
  // Symbols whose definition starts with \DOTSX:
  "\\DOTSX": "\\dotsx"
}, H4 = /* @__PURE__ */ new Set(["bin", "rel"]);
g("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in $c ? e = $c[t] : (t.slice(0, 4) === "\\not" || t in ht.math && H4.has(ht.math[t].group)) && (e = "\\dotsb"), e;
});
var Mo = {
  // \rightdelim@ checks for the following:
  ")": !0,
  "]": !0,
  "\\rbrack": !0,
  "\\}": !0,
  "\\rbrace": !0,
  "\\rangle": !0,
  "\\rceil": !0,
  "\\rfloor": !0,
  "\\rgroup": !0,
  "\\rmoustache": !0,
  "\\right": !0,
  "\\bigr": !0,
  "\\biggr": !0,
  "\\Bigr": !0,
  "\\Biggr": !0,
  // \extra@ also tests for the following:
  $: !0,
  // \extrap@ checks for the following:
  ";": !0,
  ".": !0,
  ",": !0
};
g("\\dotso", function(r) {
  var e = r.future().text;
  return e in Mo ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Mo && e !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(r) {
  var e = r.future().text;
  return e in Mo ? "\\@cdots\\," : "\\@cdots";
});
g("\\dotsb", "\\cdots");
g("\\dotsm", "\\cdots");
g("\\dotsi", "\\!\\cdots");
g("\\dotsx", "\\ldots\\,");
g("\\DOTSI", "\\relax");
g("\\DOTSB", "\\relax");
g("\\DOTSX", "\\relax");
g("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
g("\\,", "\\tmspace+{3mu}{.1667em}");
g("\\thinspace", "\\,");
g("\\>", "\\mskip{4mu}");
g("\\:", "\\tmspace+{4mu}{.2222em}");
g("\\medspace", "\\:");
g("\\;", "\\tmspace+{5mu}{.2777em}");
g("\\thickspace", "\\;");
g("\\!", "\\tmspace-{3mu}{.1667em}");
g("\\negthinspace", "\\!");
g("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
g("\\negthickspace", "\\tmspace-{5mu}{.277em}");
g("\\enspace", "\\kern.5em ");
g("\\enskip", "\\hskip.5em\\relax");
g("\\quad", "\\hskip1em\\relax");
g("\\qquad", "\\hskip2em\\relax");
g("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
g("\\tag@paren", "\\tag@literal{({#1})}");
g("\\tag@literal", (r) => {
  if (r.macros.get("\\df@tag"))
    throw new ee("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
g("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
g("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
g("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
g("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
g("\\newline", "\\\\\\relax");
g("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Kd = ae(Pr["Main-Regular"][84][1] - 0.7 * Pr["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Kd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Kd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
g("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
g("\\@hspace", "\\hskip #1\\relax");
g("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
g("\\ordinarycolon", ":");
g("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
g("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
g("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
g("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
g("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
g("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
g("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
g("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
g("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
g("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
g("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
g("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
g("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
g("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
g("∷", "\\dblcolon");
g("∹", "\\eqcolon");
g("≔", "\\coloneqq");
g("≕", "\\eqqcolon");
g("⩴", "\\Coloneqq");
g("\\ratio", "\\vcentcolon");
g("\\coloncolon", "\\dblcolon");
g("\\colonequals", "\\coloneqq");
g("\\coloncolonequals", "\\Coloneqq");
g("\\equalscolon", "\\eqqcolon");
g("\\equalscoloncolon", "\\Eqqcolon");
g("\\colonminus", "\\coloneq");
g("\\coloncolonminus", "\\Coloneq");
g("\\minuscolon", "\\eqcolon");
g("\\minuscoloncolon", "\\Eqcolon");
g("\\coloncolonapprox", "\\Colonapprox");
g("\\coloncolonsim", "\\Colonsim");
g("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
g("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
g("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
g("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
g("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
g("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
g("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
g("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
g("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
g("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
g("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
g("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
g("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
g("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
g("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
g("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
g("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
g("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
g("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
g("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
g("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
g("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
g("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
g("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
g("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
g("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
g("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
g("\\imath", "\\html@mathml{\\@imath}{ı}");
g("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
g("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
g("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
g("⟦", "\\llbracket");
g("⟧", "\\rrbracket");
g("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
g("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
g("⦃", "\\lBrace");
g("⦄", "\\rBrace");
g("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
g("⦵", "\\minuso");
g("\\darr", "\\downarrow");
g("\\dArr", "\\Downarrow");
g("\\Darr", "\\Downarrow");
g("\\lang", "\\langle");
g("\\rang", "\\rangle");
g("\\uarr", "\\uparrow");
g("\\uArr", "\\Uparrow");
g("\\Uarr", "\\Uparrow");
g("\\N", "\\mathbb{N}");
g("\\R", "\\mathbb{R}");
g("\\Z", "\\mathbb{Z}");
g("\\alef", "\\aleph");
g("\\alefsym", "\\aleph");
g("\\Alpha", "\\mathrm{A}");
g("\\Beta", "\\mathrm{B}");
g("\\bull", "\\bullet");
g("\\Chi", "\\mathrm{X}");
g("\\clubs", "\\clubsuit");
g("\\cnums", "\\mathbb{C}");
g("\\Complex", "\\mathbb{C}");
g("\\Dagger", "\\ddagger");
g("\\diamonds", "\\diamondsuit");
g("\\empty", "\\emptyset");
g("\\Epsilon", "\\mathrm{E}");
g("\\Eta", "\\mathrm{H}");
g("\\exist", "\\exists");
g("\\harr", "\\leftrightarrow");
g("\\hArr", "\\Leftrightarrow");
g("\\Harr", "\\Leftrightarrow");
g("\\hearts", "\\heartsuit");
g("\\image", "\\Im");
g("\\infin", "\\infty");
g("\\Iota", "\\mathrm{I}");
g("\\isin", "\\in");
g("\\Kappa", "\\mathrm{K}");
g("\\larr", "\\leftarrow");
g("\\lArr", "\\Leftarrow");
g("\\Larr", "\\Leftarrow");
g("\\lrarr", "\\leftrightarrow");
g("\\lrArr", "\\Leftrightarrow");
g("\\Lrarr", "\\Leftrightarrow");
g("\\Mu", "\\mathrm{M}");
g("\\natnums", "\\mathbb{N}");
g("\\Nu", "\\mathrm{N}");
g("\\Omicron", "\\mathrm{O}");
g("\\plusmn", "\\pm");
g("\\rarr", "\\rightarrow");
g("\\rArr", "\\Rightarrow");
g("\\Rarr", "\\Rightarrow");
g("\\real", "\\Re");
g("\\reals", "\\mathbb{R}");
g("\\Reals", "\\mathbb{R}");
g("\\Rho", "\\mathrm{P}");
g("\\sdot", "\\cdot");
g("\\sect", "\\S");
g("\\spades", "\\spadesuit");
g("\\sub", "\\subset");
g("\\sube", "\\subseteq");
g("\\supe", "\\supseteq");
g("\\Tau", "\\mathrm{T}");
g("\\thetasym", "\\vartheta");
g("\\weierp", "\\wp");
g("\\Zeta", "\\mathrm{Z}");
g("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
g("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
g("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
g("\\bra", "\\mathinner{\\langle{#1}|}");
g("\\ket", "\\mathinner{|{#1}\\rangle}");
g("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
g("\\Bra", "\\left\\langle#1\\right|");
g("\\Ket", "\\left|#1\\right\\rangle");
var Zd = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, a = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var l = (f) => (m) => {
    r && (m.macros.set("|", s), i.length && m.macros.set("\\|", o));
    var v = f;
    if (!f && i.length) {
      var k = m.future();
      k.text === "|" && (m.popToken(), v = !0);
    }
    return {
      tokens: v ? i : n,
      numArgs: 0
    };
  };
  e.macros.set("|", l(!1)), i.length && e.macros.set("\\|", l(!0));
  var d = e.consumeArg().tokens, h = e.expandTokens([
    ...a,
    ...d,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
g("\\bra@ket", Zd(!1));
g("\\bra@set", Zd(!0));
g("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
g("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
g("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
g("\\angln", "{\\angl n}");
g("\\blue", "\\textcolor{##6495ed}{#1}");
g("\\orange", "\\textcolor{##ffa500}{#1}");
g("\\pink", "\\textcolor{##ff00af}{#1}");
g("\\red", "\\textcolor{##df0030}{#1}");
g("\\green", "\\textcolor{##28ae7b}{#1}");
g("\\gray", "\\textcolor{gray}{#1}");
g("\\purple", "\\textcolor{##9d38bd}{#1}");
g("\\blueA", "\\textcolor{##ccfaff}{#1}");
g("\\blueB", "\\textcolor{##80f6ff}{#1}");
g("\\blueC", "\\textcolor{##63d9ea}{#1}");
g("\\blueD", "\\textcolor{##11accd}{#1}");
g("\\blueE", "\\textcolor{##0c7f99}{#1}");
g("\\tealA", "\\textcolor{##94fff5}{#1}");
g("\\tealB", "\\textcolor{##26edd5}{#1}");
g("\\tealC", "\\textcolor{##01d1c1}{#1}");
g("\\tealD", "\\textcolor{##01a995}{#1}");
g("\\tealE", "\\textcolor{##208170}{#1}");
g("\\greenA", "\\textcolor{##b6ffb0}{#1}");
g("\\greenB", "\\textcolor{##8af281}{#1}");
g("\\greenC", "\\textcolor{##74cf70}{#1}");
g("\\greenD", "\\textcolor{##1fab54}{#1}");
g("\\greenE", "\\textcolor{##0d923f}{#1}");
g("\\goldA", "\\textcolor{##ffd0a9}{#1}");
g("\\goldB", "\\textcolor{##ffbb71}{#1}");
g("\\goldC", "\\textcolor{##ff9c39}{#1}");
g("\\goldD", "\\textcolor{##e07d10}{#1}");
g("\\goldE", "\\textcolor{##a75a05}{#1}");
g("\\redA", "\\textcolor{##fca9a9}{#1}");
g("\\redB", "\\textcolor{##ff8482}{#1}");
g("\\redC", "\\textcolor{##f9685d}{#1}");
g("\\redD", "\\textcolor{##e84d39}{#1}");
g("\\redE", "\\textcolor{##bc2612}{#1}");
g("\\maroonA", "\\textcolor{##ffbde0}{#1}");
g("\\maroonB", "\\textcolor{##ff92c6}{#1}");
g("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
g("\\maroonD", "\\textcolor{##ca337c}{#1}");
g("\\maroonE", "\\textcolor{##9e034e}{#1}");
g("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
g("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
g("\\purpleC", "\\textcolor{##aa87ff}{#1}");
g("\\purpleD", "\\textcolor{##7854ab}{#1}");
g("\\purpleE", "\\textcolor{##543b78}{#1}");
g("\\mintA", "\\textcolor{##f5f9e8}{#1}");
g("\\mintB", "\\textcolor{##edf2df}{#1}");
g("\\mintC", "\\textcolor{##e0e5cc}{#1}");
g("\\grayA", "\\textcolor{##f6f7f7}{#1}");
g("\\grayB", "\\textcolor{##f0f1f2}{#1}");
g("\\grayC", "\\textcolor{##e3e5e6}{#1}");
g("\\grayD", "\\textcolor{##d6d8da}{#1}");
g("\\grayE", "\\textcolor{##babec2}{#1}");
g("\\grayF", "\\textcolor{##888d93}{#1}");
g("\\grayG", "\\textcolor{##626569}{#1}");
g("\\grayH", "\\textcolor{##3b3e40}{#1}");
g("\\grayI", "\\textcolor{##21242c}{#1}");
g("\\kaBlue", "\\textcolor{##314453}{#1}");
g("\\kaGreen", "\\textcolor{##71B307}{#1}");
var Xd = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class q4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new P4(V4, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Cc(e, this.settings);
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e;
  }
  /**
   * Start a new group nesting within all namespaces.
   */
  beginGroup() {
    this.macros.beginGroup();
  }
  /**
   * End current group nesting within all namespaces.
   */
  endGroup() {
    this.macros.endGroup();
  }
  /**
   * Ends all currently nested groups (if any), restoring values before the
   * groups began.  Useful in case of an error in the middle of parsing.
   */
  endGroups() {
    this.macros.endGroups();
  }
  /**
   * Returns the topmost token on the stack, without expanding it.
   * Similar in behavior to TeX's `\futurelet`.
   */
  future() {
    return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
  }
  /**
   * Remove and return the next unexpanded token.
   */
  popToken() {
    return this.future(), this.stack.pop();
  }
  /**
   * Add a given token to the token stack.  In particular, this get be used
   * to put back a token returned from one of the other methods.
   */
  pushToken(e) {
    this.stack.push(e);
  }
  /**
   * Append an array of tokens to the token stack.
   */
  pushTokens(e) {
    this.stack.push(...e);
  }
  /**
   * Find an macro argument without expanding tokens and append the array of
   * tokens to the token stack. Uses Token as a container for the result.
   */
  scanArgument(e) {
    var t, n, i;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: i,
        end: n
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: i,
        start: t,
        end: n
      } = this.consumeArg());
    return this.pushToken(new tr("EOF", n.loc)), this.pushTokens(i), new tr("", Xt.range(t, n));
  }
  /**
   * Consume all following space tokens, without expansion.
   */
  consumeSpaces() {
    for (; ; ) {
      var e = this.future();
      if (e.text === " ")
        this.stack.pop();
      else
        break;
    }
  }
  /**
   * Consume an argument from the token stream, and return the resulting array
   * of tokens and start/end token.
   */
  consumeArg(e) {
    var t = [], n = e && e.length > 0;
    n || this.consumeSpaces();
    var i = this.future(), a, s = 0, o = 0;
    do {
      if (a = this.popToken(), t.push(a), a.text === "{")
        ++s;
      else if (a.text === "}") {
        if (--s, s === -1)
          throw new ee("Extra }", a);
      } else if (a.text === "EOF")
        throw new ee("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", a);
      if (e && n)
        if ((s === 0 || s === 1 && e[o] === "{") && a.text === e[o]) {
          if (++o, o === e.length) {
            t.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (s !== 0 || n);
    return i.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: i,
      end: a
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new ee("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], i = 0; i < n.length; i++) {
        var a = this.popToken();
        if (n[i] !== a.text)
          throw new ee("Use of the macro doesn't match its definition", a);
      }
    }
    for (var s = [], o = 0; o < e; o++)
      s.push(this.consumeArg(t && t[o + 1]).tokens);
    return s;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new ee("Too many expansions: infinite loop or need to increase maxExpand setting");
  }
  /**
   * Expand the next token only once if possible.
   *
   * If the token is expanded, the resulting tokens will be pushed onto
   * the stack in reverse order, and the number of such tokens will be
   * returned.  This number might be zero or positive.
   *
   * If not, the return value is `false`, and the next token remains at the
   * top of the stack.
   *
   * In either case, the next token will be on the top of the stack,
   * or the stack will be empty (in case of empty expansion
   * and no other tokens).
   *
   * Used to implement `expandAfterFuture` and `expandNextToken`.
   *
   * If expandableOnly, only expandable tokens are expanded and
   * an undefined control sequence results in an error.
   */
  expandOnce(e) {
    var t = this.popToken(), n = t.text, i = t.noexpand ? null : this._getExpansion(n);
    if (i == null || e && i.unexpandable) {
      if (e && i == null && n[0] === "\\" && !this.isDefined(n))
        throw new ee("Undefined control sequence: " + n);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var a = i.tokens, s = this.consumeArgs(i.numArgs, i.delimiters);
    if (i.numArgs) {
      a = a.slice();
      for (var o = a.length - 1; o >= 0; --o) {
        var l = a[o];
        if (l.text === "#") {
          if (o === 0)
            throw new ee("Incomplete placeholder at end of macro body", l);
          if (l = a[--o], l.text === "#")
            a.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            a.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new ee("Not a valid argument number", l);
        }
      }
    }
    return this.pushTokens(a), a.length;
  }
  /**
   * Expand the next token only once (if possible), and return the resulting
   * top token on the stack (without removing anything from the stack).
   * Similar in behavior to TeX's `\expandafter\futurelet`.
   * Equivalent to expandOnce() followed by future().
   */
  expandAfterFuture() {
    return this.expandOnce(), this.future();
  }
  /**
   * Recursively expand first token, then return first non-expandable token.
   */
  expandNextToken() {
    for (; ; )
      if (this.expandOnce() === !1) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
  }
  /**
   * Fully expand the given macro name and return the resulting list of
   * tokens, or return `undefined` if no such macro is defined.
   */
  expandMacro(e) {
    return this.macros.has(e) ? this.expandTokens([new tr(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var t = [], n = this.stack.length;
    for (this.pushTokens(e); this.stack.length > n; )
      if (this.expandOnce(!0) === !1) {
        var i = this.stack.pop();
        i.treatAsRelax && (i.noexpand = !1, i.treatAsRelax = !1), t.push(i);
      }
    return this.countExpansion(t.length), t;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var t = this.expandMacro(e);
    return t && t.map((n) => n.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var t = this.macros.get(e);
    if (t == null)
      return t;
    if (e.length === 1) {
      var n = this.lexer.catcodes[e];
      if (n != null && n !== 13)
        return;
    }
    var i = typeof t == "function" ? t(this) : t;
    if (typeof i == "string") {
      var a = 0;
      if (i.includes("#"))
        for (var s = i.replace(/##/g, ""); s.includes("#" + (a + 1)); )
          ++a;
      for (var o = new Cc(i, this.settings), l = [], d = o.lex(); d.text !== "EOF"; )
        l.push(d), d = o.lex();
      l.reverse();
      var h = {
        tokens: l,
        numArgs: a
      };
      return h;
    }
    return i;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || zn.hasOwnProperty(e) || ht.math.hasOwnProperty(e) || ht.text.hasOwnProperty(e) || Xd.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : zn.hasOwnProperty(e) && !zn[e].primitive;
  }
}
var Ic = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, qi = Object.freeze({
  "₊": "+",
  "₋": "-",
  "₌": "=",
  "₍": "(",
  "₎": ")",
  "₀": "0",
  "₁": "1",
  "₂": "2",
  "₃": "3",
  "₄": "4",
  "₅": "5",
  "₆": "6",
  "₇": "7",
  "₈": "8",
  "₉": "9",
  "ₐ": "a",
  "ₑ": "e",
  "ₕ": "h",
  "ᵢ": "i",
  "ⱼ": "j",
  "ₖ": "k",
  "ₗ": "l",
  "ₘ": "m",
  "ₙ": "n",
  "ₒ": "o",
  "ₚ": "p",
  "ᵣ": "r",
  "ₛ": "s",
  "ₜ": "t",
  "ᵤ": "u",
  "ᵥ": "v",
  "ₓ": "x",
  "ᵦ": "β",
  "ᵧ": "γ",
  "ᵨ": "ρ",
  "ᵩ": "ϕ",
  "ᵪ": "χ",
  "⁺": "+",
  "⁻": "-",
  "⁼": "=",
  "⁽": "(",
  "⁾": ")",
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
  "ᴬ": "A",
  "ᴮ": "B",
  "ᴰ": "D",
  "ᴱ": "E",
  "ᴳ": "G",
  "ᴴ": "H",
  "ᴵ": "I",
  "ᴶ": "J",
  "ᴷ": "K",
  "ᴸ": "L",
  "ᴹ": "M",
  "ᴺ": "N",
  "ᴼ": "O",
  "ᴾ": "P",
  "ᴿ": "R",
  "ᵀ": "T",
  "ᵁ": "U",
  "ⱽ": "V",
  "ᵂ": "W",
  "ᵃ": "a",
  "ᵇ": "b",
  "ᶜ": "c",
  "ᵈ": "d",
  "ᵉ": "e",
  "ᶠ": "f",
  "ᵍ": "g",
  ʰ: "h",
  "ⁱ": "i",
  ʲ: "j",
  "ᵏ": "k",
  ˡ: "l",
  "ᵐ": "m",
  ⁿ: "n",
  "ᵒ": "o",
  "ᵖ": "p",
  ʳ: "r",
  ˢ: "s",
  "ᵗ": "t",
  "ᵘ": "u",
  "ᵛ": "v",
  ʷ: "w",
  ˣ: "x",
  ʸ: "y",
  "ᶻ": "z",
  "ᵝ": "β",
  "ᵞ": "γ",
  "ᵟ": "δ",
  "ᵠ": "ϕ",
  "ᵡ": "χ",
  "ᶿ": "θ"
}), os = {
  "́": {
    text: "\\'",
    math: "\\acute"
  },
  "̀": {
    text: "\\`",
    math: "\\grave"
  },
  "̈": {
    text: '\\"',
    math: "\\ddot"
  },
  "̃": {
    text: "\\~",
    math: "\\tilde"
  },
  "̄": {
    text: "\\=",
    math: "\\bar"
  },
  "̆": {
    text: "\\u",
    math: "\\breve"
  },
  "̌": {
    text: "\\v",
    math: "\\check"
  },
  "̂": {
    text: "\\^",
    math: "\\hat"
  },
  "̇": {
    text: "\\.",
    math: "\\dot"
  },
  "̊": {
    text: "\\r",
    math: "\\mathring"
  },
  "̋": {
    text: "\\H"
  },
  "̧": {
    text: "\\c"
  }
}, Tc = {
  á: "á",
  à: "à",
  ä: "ä",
  ǟ: "ǟ",
  ã: "ã",
  ā: "ā",
  ă: "ă",
  ắ: "ắ",
  ằ: "ằ",
  ẵ: "ẵ",
  ǎ: "ǎ",
  â: "â",
  ấ: "ấ",
  ầ: "ầ",
  ẫ: "ẫ",
  ȧ: "ȧ",
  ǡ: "ǡ",
  å: "å",
  ǻ: "ǻ",
  ḃ: "ḃ",
  ć: "ć",
  ḉ: "ḉ",
  č: "č",
  ĉ: "ĉ",
  ċ: "ċ",
  ç: "ç",
  ď: "ď",
  ḋ: "ḋ",
  ḑ: "ḑ",
  é: "é",
  è: "è",
  ë: "ë",
  ẽ: "ẽ",
  ē: "ē",
  ḗ: "ḗ",
  ḕ: "ḕ",
  ĕ: "ĕ",
  ḝ: "ḝ",
  ě: "ě",
  ê: "ê",
  ế: "ế",
  ề: "ề",
  ễ: "ễ",
  ė: "ė",
  ȩ: "ȩ",
  ḟ: "ḟ",
  ǵ: "ǵ",
  ḡ: "ḡ",
  ğ: "ğ",
  ǧ: "ǧ",
  ĝ: "ĝ",
  ġ: "ġ",
  ģ: "ģ",
  ḧ: "ḧ",
  ȟ: "ȟ",
  ĥ: "ĥ",
  ḣ: "ḣ",
  ḩ: "ḩ",
  í: "í",
  ì: "ì",
  ï: "ï",
  ḯ: "ḯ",
  ĩ: "ĩ",
  ī: "ī",
  ĭ: "ĭ",
  ǐ: "ǐ",
  î: "î",
  ǰ: "ǰ",
  ĵ: "ĵ",
  ḱ: "ḱ",
  ǩ: "ǩ",
  ķ: "ķ",
  ĺ: "ĺ",
  ľ: "ľ",
  ļ: "ļ",
  ḿ: "ḿ",
  ṁ: "ṁ",
  ń: "ń",
  ǹ: "ǹ",
  ñ: "ñ",
  ň: "ň",
  ṅ: "ṅ",
  ņ: "ņ",
  ó: "ó",
  ò: "ò",
  ö: "ö",
  ȫ: "ȫ",
  õ: "õ",
  ṍ: "ṍ",
  ṏ: "ṏ",
  ȭ: "ȭ",
  ō: "ō",
  ṓ: "ṓ",
  ṑ: "ṑ",
  ŏ: "ŏ",
  ǒ: "ǒ",
  ô: "ô",
  ố: "ố",
  ồ: "ồ",
  ỗ: "ỗ",
  ȯ: "ȯ",
  ȱ: "ȱ",
  ő: "ő",
  ṕ: "ṕ",
  ṗ: "ṗ",
  ŕ: "ŕ",
  ř: "ř",
  ṙ: "ṙ",
  ŗ: "ŗ",
  ś: "ś",
  ṥ: "ṥ",
  š: "š",
  ṧ: "ṧ",
  ŝ: "ŝ",
  ṡ: "ṡ",
  ş: "ş",
  ẗ: "ẗ",
  ť: "ť",
  ṫ: "ṫ",
  ţ: "ţ",
  ú: "ú",
  ù: "ù",
  ü: "ü",
  ǘ: "ǘ",
  ǜ: "ǜ",
  ǖ: "ǖ",
  ǚ: "ǚ",
  ũ: "ũ",
  ṹ: "ṹ",
  ū: "ū",
  ṻ: "ṻ",
  ŭ: "ŭ",
  ǔ: "ǔ",
  û: "û",
  ů: "ů",
  ű: "ű",
  ṽ: "ṽ",
  ẃ: "ẃ",
  ẁ: "ẁ",
  ẅ: "ẅ",
  ŵ: "ŵ",
  ẇ: "ẇ",
  ẘ: "ẘ",
  ẍ: "ẍ",
  ẋ: "ẋ",
  ý: "ý",
  ỳ: "ỳ",
  ÿ: "ÿ",
  ỹ: "ỹ",
  ȳ: "ȳ",
  ŷ: "ŷ",
  ẏ: "ẏ",
  ẙ: "ẙ",
  ź: "ź",
  ž: "ž",
  ẑ: "ẑ",
  ż: "ż",
  Á: "Á",
  À: "À",
  Ä: "Ä",
  Ǟ: "Ǟ",
  Ã: "Ã",
  Ā: "Ā",
  Ă: "Ă",
  Ắ: "Ắ",
  Ằ: "Ằ",
  Ẵ: "Ẵ",
  Ǎ: "Ǎ",
  Â: "Â",
  Ấ: "Ấ",
  Ầ: "Ầ",
  Ẫ: "Ẫ",
  Ȧ: "Ȧ",
  Ǡ: "Ǡ",
  Å: "Å",
  Ǻ: "Ǻ",
  Ḃ: "Ḃ",
  Ć: "Ć",
  Ḉ: "Ḉ",
  Č: "Č",
  Ĉ: "Ĉ",
  Ċ: "Ċ",
  Ç: "Ç",
  Ď: "Ď",
  Ḋ: "Ḋ",
  Ḑ: "Ḑ",
  É: "É",
  È: "È",
  Ë: "Ë",
  Ẽ: "Ẽ",
  Ē: "Ē",
  Ḗ: "Ḗ",
  Ḕ: "Ḕ",
  Ĕ: "Ĕ",
  Ḝ: "Ḝ",
  Ě: "Ě",
  Ê: "Ê",
  Ế: "Ế",
  Ề: "Ề",
  Ễ: "Ễ",
  Ė: "Ė",
  Ȩ: "Ȩ",
  Ḟ: "Ḟ",
  Ǵ: "Ǵ",
  Ḡ: "Ḡ",
  Ğ: "Ğ",
  Ǧ: "Ǧ",
  Ĝ: "Ĝ",
  Ġ: "Ġ",
  Ģ: "Ģ",
  Ḧ: "Ḧ",
  Ȟ: "Ȟ",
  Ĥ: "Ĥ",
  Ḣ: "Ḣ",
  Ḩ: "Ḩ",
  Í: "Í",
  Ì: "Ì",
  Ï: "Ï",
  Ḯ: "Ḯ",
  Ĩ: "Ĩ",
  Ī: "Ī",
  Ĭ: "Ĭ",
  Ǐ: "Ǐ",
  Î: "Î",
  İ: "İ",
  Ĵ: "Ĵ",
  Ḱ: "Ḱ",
  Ǩ: "Ǩ",
  Ķ: "Ķ",
  Ĺ: "Ĺ",
  Ľ: "Ľ",
  Ļ: "Ļ",
  Ḿ: "Ḿ",
  Ṁ: "Ṁ",
  Ń: "Ń",
  Ǹ: "Ǹ",
  Ñ: "Ñ",
  Ň: "Ň",
  Ṅ: "Ṅ",
  Ņ: "Ņ",
  Ó: "Ó",
  Ò: "Ò",
  Ö: "Ö",
  Ȫ: "Ȫ",
  Õ: "Õ",
  Ṍ: "Ṍ",
  Ṏ: "Ṏ",
  Ȭ: "Ȭ",
  Ō: "Ō",
  Ṓ: "Ṓ",
  Ṑ: "Ṑ",
  Ŏ: "Ŏ",
  Ǒ: "Ǒ",
  Ô: "Ô",
  Ố: "Ố",
  Ồ: "Ồ",
  Ỗ: "Ỗ",
  Ȯ: "Ȯ",
  Ȱ: "Ȱ",
  Ő: "Ő",
  Ṕ: "Ṕ",
  Ṗ: "Ṗ",
  Ŕ: "Ŕ",
  Ř: "Ř",
  Ṙ: "Ṙ",
  Ŗ: "Ŗ",
  Ś: "Ś",
  Ṥ: "Ṥ",
  Š: "Š",
  Ṧ: "Ṧ",
  Ŝ: "Ŝ",
  Ṡ: "Ṡ",
  Ş: "Ş",
  Ť: "Ť",
  Ṫ: "Ṫ",
  Ţ: "Ţ",
  Ú: "Ú",
  Ù: "Ù",
  Ü: "Ü",
  Ǘ: "Ǘ",
  Ǜ: "Ǜ",
  Ǖ: "Ǖ",
  Ǚ: "Ǚ",
  Ũ: "Ũ",
  Ṹ: "Ṹ",
  Ū: "Ū",
  Ṻ: "Ṻ",
  Ŭ: "Ŭ",
  Ǔ: "Ǔ",
  Û: "Û",
  Ů: "Ů",
  Ű: "Ű",
  Ṽ: "Ṽ",
  Ẃ: "Ẃ",
  Ẁ: "Ẁ",
  Ẅ: "Ẅ",
  Ŵ: "Ŵ",
  Ẇ: "Ẇ",
  Ẍ: "Ẍ",
  Ẋ: "Ẋ",
  Ý: "Ý",
  Ỳ: "Ỳ",
  Ÿ: "Ÿ",
  Ỹ: "Ỹ",
  Ȳ: "Ȳ",
  Ŷ: "Ŷ",
  Ẏ: "Ẏ",
  Ź: "Ź",
  Ž: "Ž",
  Ẑ: "Ẑ",
  Ż: "Ż",
  ά: "ά",
  ὰ: "ὰ",
  ᾱ: "ᾱ",
  ᾰ: "ᾰ",
  έ: "έ",
  ὲ: "ὲ",
  ή: "ή",
  ὴ: "ὴ",
  ί: "ί",
  ὶ: "ὶ",
  ϊ: "ϊ",
  ΐ: "ΐ",
  ῒ: "ῒ",
  ῑ: "ῑ",
  ῐ: "ῐ",
  ό: "ό",
  ὸ: "ὸ",
  ύ: "ύ",
  ὺ: "ὺ",
  ϋ: "ϋ",
  ΰ: "ΰ",
  ῢ: "ῢ",
  ῡ: "ῡ",
  ῠ: "ῠ",
  ώ: "ώ",
  ὼ: "ὼ",
  Ύ: "Ύ",
  Ὺ: "Ὺ",
  Ϋ: "Ϋ",
  Ῡ: "Ῡ",
  Ῠ: "Ῠ",
  Ώ: "Ώ",
  Ὼ: "Ὼ"
};
class Oa {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new q4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new ee("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    t && this.consume();
  }
  /**
   * Discards the current lookahead token, considering it consumed.
   */
  consume() {
    this.nextToken = null;
  }
  /**
   * Return the current lookahead token, or if there isn't one (at the
   * beginning, or if the previous lookahead token was consume()d),
   * fetch the next token as the new lookahead token and return it.
   */
  fetch() {
    return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
  }
  /**
   * Switches between "text" and "math" modes.
   */
  switchMode(e) {
    this.mode = e, this.gullet.switchMode(e);
  }
  /**
   * Main parsing function, which parses an entire input.
   */
  parse() {
    this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
    try {
      var e = this.parseExpression(!1);
      return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
    } finally {
      this.gullet.endGroups();
    }
  }
  /**
   * Fully parse a separate sequence of tokens as a separate job.
   * Tokens should be specified in reverse order, as in a MacroDefinition.
   */
  subparse(e) {
    var t = this.nextToken;
    this.consume(), this.gullet.pushToken(new tr("}")), this.gullet.pushTokens(e);
    var n = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = t, n;
  }
  /**
   * Parses an "expression", which is a list of atoms.
   *
   * `breakOnInfix`: Should the parsing stop when we hit infix nodes? This
   *                 happens when functions have higher precedence than infix
   *                 nodes in implicit parses.
   *
   * `breakOnTokenText`: The text of the token that the expression should end
   *                     with, or `null` if something else should end the
   *                     expression.
   */
  parseExpression(e, t) {
    for (var n = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var i = this.fetch();
      if (Oa.endOfExpression.has(i.text) || t && i.text === t || e && zn[i.text] && zn[i.text].infix)
        break;
      var a = this.parseAtom(t);
      if (a) {
        if (a.type === "internal")
          continue;
      } else break;
      n.push(a);
    }
    return this.mode === "text" && this.formLigatures(n), this.handleInfixNodes(n);
  }
  /**
   * Rewrites infix operators such as \over with corresponding commands such
   * as \frac.
   *
   * There can only be one infix operator per group.  If there's more than one
   * then the expression is ambiguous.  This can be resolved by adding {}.
   */
  handleInfixNodes(e) {
    for (var t = -1, n, i = 0; i < e.length; i++) {
      var a = e[i];
      if (a.type === "infix") {
        if (t !== -1)
          throw new ee("only one infix operator per group", a.token);
        t = i, n = a.replaceWith;
      }
    }
    if (t !== -1 && n) {
      var s, o, l = e.slice(0, t), d = e.slice(t + 1);
      l.length === 1 && l[0].type === "ordgroup" ? s = l[0] : s = {
        type: "ordgroup",
        mode: this.mode,
        body: l
      }, d.length === 1 && d[0].type === "ordgroup" ? o = d[0] : o = {
        type: "ordgroup",
        mode: this.mode,
        body: d
      };
      var h;
      return n === "\\\\abovefrac" ? h = this.callFunction(n, [s, e[t], o], []) : h = this.callFunction(n, [s, o], []), [h];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var t = this.fetch(), n = t.text;
    this.consume(), this.consumeSpaces();
    var i;
    do {
      var a;
      i = this.parseGroup(e);
    } while (((a = i) == null ? void 0 : a.type) === "internal");
    if (!i)
      throw new ee("Expected group after '" + n + "'", t);
    return i;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var t = [], n = 0; n < e.length; n++)
      t.push({
        type: "textord",
        mode: "text",
        text: e[n]
      });
    var i = {
      type: "text",
      mode: this.mode,
      body: t
    }, a = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [i]
    };
    return a;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var t = this.parseGroup("atom", e);
    if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text")
      return t;
    for (var n, i; ; ) {
      this.consumeSpaces();
      var a = this.fetch();
      if (a.text === "\\limits" || a.text === "\\nolimits") {
        if (t && t.type === "op")
          t.limits = a.text === "\\limits", t.alwaysHandleSupSub = !0;
        else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = a.text === "\\limits");
        else
          throw new ee("Limit controls must follow a math operator", a);
        this.consume();
      } else if (a.text === "^") {
        if (n)
          throw new ee("Double superscript", a);
        n = this.handleSupSubscript("superscript");
      } else if (a.text === "_") {
        if (i)
          throw new ee("Double subscript", a);
        i = this.handleSupSubscript("subscript");
      } else if (a.text === "'") {
        if (n)
          throw new ee("Double superscript", a);
        var s = {
          type: "textord",
          mode: this.mode,
          text: "\\prime"
        }, o = [s];
        for (this.consume(); this.fetch().text === "'"; )
          o.push(s), this.consume();
        this.fetch().text === "^" && o.push(this.handleSupSubscript("superscript")), n = {
          type: "ordgroup",
          mode: this.mode,
          body: o
        };
      } else if (qi[a.text]) {
        var l = Ic.test(a.text), d = [];
        for (d.push(new tr(qi[a.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!qi[h] || Ic.test(h) !== l)
            break;
          d.unshift(new tr(qi[h])), this.consume();
        }
        var f = this.subparse(d);
        l ? i = {
          type: "ordgroup",
          mode: "math",
          body: f
        } : n = {
          type: "ordgroup",
          mode: "math",
          body: f
        };
      } else
        break;
    }
    return n && i ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: n,
      sub: i
    } : n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: n
    } : i ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sub: i
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var n = this.fetch(), i = n.text, a = zn[i];
    if (!a)
      return null;
    if (this.consume(), t && t !== "atom" && !a.allowedInArgument)
      throw new ee("Got function '" + i + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !a.allowedInText)
      throw new ee("Can't use function '" + i + "' in text mode", n);
    if (this.mode === "math" && a.allowedInMath === !1)
      throw new ee("Can't use function '" + i + "' in math mode", n);
    var {
      args: s,
      optArgs: o
    } = this.parseArguments(i, a);
    return this.callFunction(i, s, o, n, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, n, i, a) {
    var s = {
      funcName: e,
      parser: this,
      token: i,
      breakOnTokenText: a
    }, o = zn[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new ee("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var n, i = (n = t.numOptionalArgs) != null ? n : 0, a = t.numArgs + i;
    if (a === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var s = [], o = [], l = 0; l < a; l++) {
      var d, h = (d = t.argTypes) == null ? void 0 : d[l], f = l < i;
      ("primitive" in t && t.primitive && h == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && o[0] == null) && (h = "primitive");
      var m = this.parseGroupOfType("argument to '" + e + "'", h, f);
      if (f)
        o.push(m);
      else if (m != null)
        s.push(m);
      else
        throw new ee("Null argument, please report this as a bug");
    }
    return {
      args: s,
      optArgs: o
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, t, n) {
    switch (t) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, t);
      case "hbox": {
        var i = this.parseArgumentGroup(n, "text");
        return i != null ? {
          type: "styling",
          mode: i.mode,
          body: [i],
          style: "text",
          // simulate \textstyle
          resetFont: !0
        } : null;
      }
      case "raw": {
        var a = this.parseStringGroup(n);
        return a != null ? {
          type: "raw",
          mode: "text",
          string: a.text
        } : null;
      }
      case "primitive": {
        if (n)
          throw new ee("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new ee("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new ee("Unknown group type as " + e, this.fetch());
    }
  }
  /**
   * Discard any space tokens, fetching the next non-space token.
   */
  consumeSpaces() {
    for (; this.fetch().text === " "; )
      this.consume();
  }
  /**
   * Parses a group, essentially returning the string formed by the
   * brace-enclosed tokens plus some position information.
   */
  parseStringGroup(e) {
    var t = this.gullet.scanArgument(e);
    if (t == null)
      return null;
    for (var n = "", i; (i = this.fetch()).text !== "EOF"; )
      n += i.text, this.consume();
    return this.consume(), t.text = n, t;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var n = this.fetch(), i = n, a = "", s; (s = this.fetch()).text !== "EOF" && e.test(a + s.text); )
      i = s, a += i.text, this.consume();
    if (a === "")
      throw new ee("Invalid " + t + ": '" + n.text + "'", n);
    return n.range(i, a);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var t = this.parseStringGroup(e);
    if (t == null)
      return null;
    var n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
    if (!n)
      throw new ee("Invalid color: '" + t.text + "'", t);
    var i = n[0];
    return /^[0-9a-f]{6}$/i.test(i) && (i = "#" + i), {
      type: "color-token",
      mode: this.mode,
      color: i
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var t, n = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup(e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", n = !0);
    var i = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!i)
      throw new ee("Invalid size: '" + t.text + "'", t);
    var a = {
      number: +(i[1] + i[2]),
      // sign + magnitude, cast to number
      unit: i[3]
    };
    if (!cd(a))
      throw new ee("Invalid unit: '" + a.unit + "'", t);
    return {
      type: "size",
      mode: this.mode,
      value: a,
      isBlank: n
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var t = this.parseStringGroup(e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), t == null)
      return null;
    var n = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: n
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, t) {
    var n = this.gullet.scanArgument(e);
    if (n == null)
      return null;
    var i = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var a = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var s = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: a
    };
    return t && this.switchMode(i), s;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var n = this.fetch(), i = n.text, a;
    if (i === "{" || i === "\\begingroup") {
      this.consume();
      var s = i === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, s), l = this.fetch();
      this.expect(s), this.gullet.endGroup(), a = {
        type: "ordgroup",
        mode: this.mode,
        loc: Xt.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: i === "\\begingroup" || void 0
      };
    } else if (a = this.parseFunction(t, e) || this.parseSymbol(), a == null && i[0] === "\\" && !Xd.hasOwnProperty(i)) {
      if (this.settings.throwOnError)
        throw new ee("Undefined control sequence: " + i, n);
      a = this.formatUnsupportedCmd(i), this.consume();
    }
    return a;
  }
  /**
   * Form ligature-like combinations of characters for text mode.
   * This includes inputs like "--", "---", "``" and "''".
   * The result will simply replace multiple textord nodes with a single
   * character in each value by a single textord node having multiple
   * characters in its value.  The representation is still ASCII source.
   * The group will be modified in place.
   */
  formLigatures(e) {
    for (var t = e.length - 1, n = 0; n < t; ++n) {
      var i = e[n];
      if (i.type === "textord") {
        var a = i.text, s = e[n + 1];
        if (!(!s || s.type !== "textord")) {
          if (a === "-" && s.text === "-") {
            var o = e[n + 2];
            n + 1 < t && o && o.type === "textord" && o.text === "-" ? (e.splice(n, 3, {
              type: "textord",
              mode: "text",
              loc: Xt.range(i, o),
              text: "---"
            }), t -= 2) : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Xt.range(i, s),
              text: "--"
            }), t -= 1);
          }
          (a === "'" || a === "`") && s.text === a && (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: Xt.range(i, s),
            text: a + a
          }), t -= 1);
        }
      }
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), t = e.text;
    if (/^\\verb[^a-zA-Z]/.test(t)) {
      this.consume();
      var n = t.slice(5), i = n.charAt(0) === "*";
      if (i && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1))
        throw new ee(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: i
      };
    }
    Tc.hasOwnProperty(t[0]) && !ht[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Tc[t[0]] + t.slice(1));
    var a = D4.exec(t);
    a && (t = t.substring(0, a.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (ht[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Ts.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = ht[this.mode][t].group, l = Xt.range(e), d;
      Zp(o) ? d = {
        type: "atom",
        mode: this.mode,
        family: o,
        loc: l,
        text: t
      } : d = {
        type: o,
        mode: this.mode,
        loc: l,
        text: t
      }, s = d;
    } else if (t.charCodeAt(0) >= 128)
      this.settings.strict && (ld(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Xt.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), a)
      for (var h = 0; h < a[0].length; h++) {
        var f = a[0][h];
        if (!os[f])
          throw new ee("Unknown accent ' " + f + "'", e);
        var m = os[f][this.mode] || os[f].text;
        if (!m)
          throw new ee("Accent " + f + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Xt.range(e),
          label: m,
          isStretchy: !1,
          isShifty: !0,
          base: s
        };
      }
    return s;
  }
}
Oa.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var Eo = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new Oa(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var i = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new ee("\\tag works only in display equations");
    i = [{
      type: "tag",
      mode: "text",
      body: i,
      tag: n.subparse([new tr("\\df@tag")])
    }];
  }
  return i;
}, Jd = function(e, t, n) {
  t.textContent = "";
  var i = zo(e, n).toNode();
  t.appendChild(i);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Jd = function() {
  throw new ee("KaTeX doesn't work in quirks mode.");
});
var W4 = function(e, t) {
  var n = zo(e, t).toMarkup();
  return n;
}, U4 = function(e, t) {
  var n = new wo(t);
  return Eo(e, n);
}, Yd = function(e, t, n) {
  if (n.throwOnError || !(e instanceof ee))
    throw e;
  var i = Z(["katex-error"], [new rr(t)]);
  return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + n.errorColor), i;
}, zo = function(e, t) {
  var n = new wo(t);
  try {
    var i = Eo(e, n);
    return Vp(i, e, n);
  } catch (a) {
    return Yd(a, e, n);
  }
}, G4 = function(e, t) {
  var n = new wo(t);
  try {
    var i = Eo(e, n);
    return Hp(i, e, n);
  } catch (a) {
    return Yd(a, e, n);
  }
}, j4 = "0.17.0", K4 = {
  Span: K0,
  Anchor: Ca,
  SymbolNode: rr,
  SvgNode: pn,
  PathNode: Ln,
  LineNode: Is
}, Z4 = {
  /**
   * Current KaTeX version
   */
  version: j4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Jd,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: W4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: ee,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Cs,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: U4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: zo,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: G4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: kp,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: c,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: pe,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: g,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: K4
};
const X4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, J4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, Y4 = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function Q4(r = {}) {
  return {
    extensions: [
      e2(r, Nc(r, !1)),
      t2(r, Nc(r, !0))
    ]
  };
}
function Nc(r, e) {
  return (t) => Z4.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function e2(r, e) {
  const t = r && r.nonStandard, n = t ? J4 : X4;
  return {
    name: "inlineKatex",
    level: "inline",
    start(i) {
      let a, s = i;
      for (; s; ) {
        if (a = s.indexOf("$"), a === -1)
          return;
        if ((t ? a > -1 : a === 0 || s.charAt(a - 1) === " ") && s.substring(a).match(n))
          return a;
        s = s.substring(a + 1).replace(/^\$+/, "");
      }
    },
    tokenizer(i, a) {
      const s = i.match(n);
      if (s)
        return {
          type: "inlineKatex",
          raw: s[0],
          text: s[2].trim(),
          displayMode: s[1].length === 2
        };
    },
    renderer: e
  };
}
function t2(r, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(t, n) {
      const i = t.match(Y4);
      if (i)
        return {
          type: "blockKatex",
          raw: i[0],
          text: i[2].trim(),
          displayMode: i[1].length === 2
        };
    },
    renderer: e
  };
}
function r2(r) {
  if (typeof r == "function" && (r = {
    highlight: r
  }), !r || typeof r.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), {
    async: !!r.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Mc(e.lang);
      if (r.async)
        return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then(Ec(e));
      const n = r.highlight(e.text, t, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Ec(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, n) {
        typeof e == "object" && (n = e.escaped, t = e.lang, e = e.text);
        const i = Mc(t), a = i ? r.langPrefix + Rc(i) : r.emptyLangClass, s = a ? ` class="${a}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : Rc(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Mc(r) {
  return (r || "").match(/\S*/)[0];
}
function Ec(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = !0, r.text = e);
  };
}
const Qd = /[&<>"']/, n2 = new RegExp(Qd.source, "g"), e1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, i2 = new RegExp(e1.source, "g"), a2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, zc = (r) => a2[r];
function Rc(r, e) {
  if (e) {
    if (Qd.test(r))
      return r.replace(n2, zc);
  } else if (e1.test(r))
    return r.replace(i2, zc);
  return r;
}
var ls, Oc;
function s2() {
  if (Oc) return ls;
  Oc = 1;
  function r(y) {
    return y instanceof Map ? y.clear = y.delete = y.set = function() {
      throw new Error("map is read-only");
    } : y instanceof Set && (y.add = y.clear = y.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(y), Object.getOwnPropertyNames(y).forEach((F) => {
      const se = y[F], Ae = typeof se;
      (Ae === "object" || Ae === "function") && !Object.isFrozen(se) && r(se);
    }), y;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(F) {
      F.data === void 0 && (F.data = {}), this.data = F.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(y) {
    return y.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(y, ...F) {
    const se = /* @__PURE__ */ Object.create(null);
    for (const Ae in y)
      se[Ae] = y[Ae];
    return F.forEach(function(Ae) {
      for (const it in Ae)
        se[it] = Ae[it];
    }), /** @type {T} */
    se;
  }
  const i = "</span>", a = (y) => !!y.scope, s = (y, { prefix: F }) => {
    if (y.startsWith("language:"))
      return y.replace("language:", "language-");
    if (y.includes(".")) {
      const se = y.split(".");
      return [
        `${F}${se.shift()}`,
        ...se.map((Ae, it) => `${Ae}${"_".repeat(it + 1)}`)
      ].join(" ");
    }
    return `${F}${y}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(F, se) {
      this.buffer = "", this.classPrefix = se.classPrefix, F.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(F) {
      this.buffer += t(F);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(F) {
      if (!a(F)) return;
      const se = s(
        F.scope,
        { prefix: this.classPrefix }
      );
      this.span(se);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(F) {
      a(F) && (this.buffer += i);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(F) {
      this.buffer += `<span class="${F}">`;
    }
  }
  const l = (y = {}) => {
    const F = { children: [] };
    return Object.assign(F, y), F;
  };
  class d {
    constructor() {
      this.rootNode = l(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(F) {
      this.top.children.push(F);
    }
    /** @param {string} scope */
    openNode(F) {
      const se = l({ scope: F });
      this.add(se), this.stack.push(se);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(F) {
      return this.constructor._walk(F, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(F, se) {
      return typeof se == "string" ? F.addText(se) : se.children && (F.openNode(se), se.children.forEach((Ae) => this._walk(F, Ae)), F.closeNode(se)), F;
    }
    /**
     * @param {Node} node
     */
    static _collapse(F) {
      typeof F != "string" && F.children && (F.children.every((se) => typeof se == "string") ? F.children = [F.children.join("")] : F.children.forEach((se) => {
        d._collapse(se);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(F) {
      super(), this.options = F;
    }
    /**
     * @param {string} text
     */
    addText(F) {
      F !== "" && this.add(F);
    }
    /** @param {string} scope */
    startScope(F) {
      this.openNode(F);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(F, se) {
      const Ae = F.root;
      se && (Ae.scope = `language:${se}`), this.add(Ae);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(y) {
    return y ? typeof y == "string" ? y : y.source : null;
  }
  function m(y) {
    return T("(?=", y, ")");
  }
  function v(y) {
    return T("(?:", y, ")*");
  }
  function k(y) {
    return T("(?:", y, ")?");
  }
  function T(...y) {
    return y.map((se) => f(se)).join("");
  }
  function I(y) {
    const F = y[y.length - 1];
    return typeof F == "object" && F.constructor === Object ? (y.splice(y.length - 1, 1), F) : {};
  }
  function O(...y) {
    return "(" + (I(y).capture ? "" : "?:") + y.map((Ae) => f(Ae)).join("|") + ")";
  }
  function L(y) {
    return new RegExp(y.toString() + "|").exec("").length - 1;
  }
  function W(y, F) {
    const se = y && y.exec(F);
    return se && se.index === 0;
  }
  const Y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function ne(y, { joinWith: F }) {
    let se = 0;
    return y.map((Ae) => {
      se += 1;
      const it = se;
      let ct = f(Ae), ve = "";
      for (; ct.length > 0; ) {
        const fe = Y.exec(ct);
        if (!fe) {
          ve += ct;
          break;
        }
        ve += ct.substring(0, fe.index), ct = ct.substring(fe.index + fe[0].length), fe[0][0] === "\\" && fe[1] ? ve += "\\" + String(Number(fe[1]) + it) : (ve += fe[0], fe[0] === "(" && se++);
      }
      return ve;
    }).map((Ae) => `(${Ae})`).join(F);
  }
  const M = /\b\B/, G = "[a-zA-Z]\\w*", he = "[a-zA-Z_]\\w*", ce = "\\b\\d+(\\.\\d+)?", ie = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Ie = "\\b(0b[01]+)", ye = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", q = (y = {}) => {
    const F = /^#![ ]*\//;
    return y.binary && (y.begin = T(
      F,
      /.*\b/,
      y.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: F,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (se, Ae) => {
        se.index !== 0 && Ae.ignoreMatch();
      }
    }, y);
  }, U = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, oe = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [U]
  }, D = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [U]
  }, j = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, E = function(y, F, se = {}) {
    const Ae = n(
      {
        scope: "comment",
        begin: y,
        end: F,
        contains: []
      },
      se
    );
    Ae.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const it = O(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return Ae.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: T(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          it,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), Ae;
  }, re = E("//", "$"), ze = E("/\\*", "\\*/"), Pe = E("#", "$"), Re = {
    scope: "number",
    begin: ce,
    relevance: 0
  }, He = {
    scope: "number",
    begin: ie,
    relevance: 0
  }, Ve = {
    scope: "number",
    begin: Ie,
    relevance: 0
  }, sr = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      U,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [U]
      }
    ]
  }, or = {
    scope: "title",
    begin: G,
    relevance: 0
  }, we = {
    scope: "title",
    begin: he,
    relevance: 0
  }, Oe = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + he,
    relevance: 0
  };
  var ge = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: oe,
    BACKSLASH_ESCAPE: U,
    BINARY_NUMBER_MODE: Ve,
    BINARY_NUMBER_RE: Ie,
    COMMENT: E,
    C_BLOCK_COMMENT_MODE: ze,
    C_LINE_COMMENT_MODE: re,
    C_NUMBER_MODE: He,
    C_NUMBER_RE: ie,
    END_SAME_AS_BEGIN: function(y) {
      return Object.assign(
        y,
        {
          /** @type {ModeCallback} */
          "on:begin": (F, se) => {
            se.data._beginMatch = F[1];
          },
          /** @type {ModeCallback} */
          "on:end": (F, se) => {
            se.data._beginMatch !== F[1] && se.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Pe,
    IDENT_RE: G,
    MATCH_NOTHING_RE: M,
    METHOD_GUARD: Oe,
    NUMBER_MODE: Re,
    NUMBER_RE: ce,
    PHRASAL_WORDS_MODE: j,
    QUOTE_STRING_MODE: D,
    REGEXP_MODE: sr,
    RE_STARTERS_RE: ye,
    SHEBANG: q,
    TITLE_MODE: or,
    UNDERSCORE_IDENT_RE: he,
    UNDERSCORE_TITLE_MODE: we
  });
  function lr(y, F) {
    y.input[y.index - 1] === "." && F.ignoreMatch();
  }
  function Ge(y, F) {
    y.className !== void 0 && (y.scope = y.className, delete y.className);
  }
  function gt(y, F) {
    F && y.beginKeywords && (y.begin = "\\b(" + y.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", y.__beforeBegin = lr, y.keywords = y.keywords || y.beginKeywords, delete y.beginKeywords, y.relevance === void 0 && (y.relevance = 0));
  }
  function gr(y, F) {
    Array.isArray(y.illegal) && (y.illegal = O(...y.illegal));
  }
  function wn(y, F) {
    if (y.match) {
      if (y.begin || y.end) throw new Error("begin & end are not supported with match");
      y.begin = y.match, delete y.match;
    }
  }
  function $t(y, F) {
    y.relevance === void 0 && (y.relevance = 1);
  }
  const Gr = (y, F) => {
    if (!y.beforeMatch) return;
    if (y.starts) throw new Error("beforeMatch cannot be used with starts");
    const se = Object.assign({}, y);
    Object.keys(y).forEach((Ae) => {
      delete y[Ae];
    }), y.keywords = se.keywords, y.begin = T(se.beforeMatch, m(se.begin)), y.starts = {
      relevance: 0,
      contains: [
        Object.assign(se, { endsParent: !0 })
      ]
    }, y.relevance = 0, delete se.beforeMatch;
  }, jr = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], xn = "keyword";
  function Yt(y, F, se = xn) {
    const Ae = /* @__PURE__ */ Object.create(null);
    return typeof y == "string" ? it(se, y.split(" ")) : Array.isArray(y) ? it(se, y) : Object.keys(y).forEach(function(ct) {
      Object.assign(
        Ae,
        Yt(y[ct], F, ct)
      );
    }), Ae;
    function it(ct, ve) {
      F && (ve = ve.map((fe) => fe.toLowerCase())), ve.forEach(function(fe) {
        const ke = fe.split("|");
        Ae[ke[0]] = [ct, br(ke[0], ke[1])];
      });
    }
  }
  function br(y, F) {
    return F ? Number(F) : vr(y) ? 0 : 1;
  }
  function vr(y) {
    return jr.includes(y.toLowerCase());
  }
  const Er = {}, Dt = (y) => {
    console.error(y);
  }, Kr = (y, ...F) => {
    console.log(`WARN: ${y}`, ...F);
  }, Ft = (y, F) => {
    Er[`${y}/${F}`] || (console.log(`Deprecated as of ${y}. ${F}`), Er[`${y}/${F}`] = !0);
  }, cr = new Error();
  function ur(y, F, { key: se }) {
    let Ae = 0;
    const it = y[se], ct = {}, ve = {};
    for (let fe = 1; fe <= F.length; fe++)
      ve[fe + Ae] = it[fe], ct[fe + Ae] = !0, Ae += L(F[fe - 1]);
    y[se] = ve, y[se]._emit = ct, y[se]._multi = !0;
  }
  function zr(y) {
    if (Array.isArray(y.begin)) {
      if (y.skip || y.excludeBegin || y.returnBegin)
        throw Dt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), cr;
      if (typeof y.beginScope != "object" || y.beginScope === null)
        throw Dt("beginScope must be object"), cr;
      ur(y, y.begin, { key: "beginScope" }), y.begin = ne(y.begin, { joinWith: "" });
    }
  }
  function b0(y) {
    if (Array.isArray(y.end)) {
      if (y.skip || y.excludeEnd || y.returnEnd)
        throw Dt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), cr;
      if (typeof y.endScope != "object" || y.endScope === null)
        throw Dt("endScope must be object"), cr;
      ur(y, y.end, { key: "endScope" }), y.end = ne(y.end, { joinWith: "" });
    }
  }
  function Wn(y) {
    y.scope && typeof y.scope == "object" && y.scope !== null && (y.beginScope = y.scope, delete y.scope);
  }
  function Rr(y) {
    Wn(y), typeof y.beginScope == "string" && (y.beginScope = { _wrap: y.beginScope }), typeof y.endScope == "string" && (y.endScope = { _wrap: y.endScope }), zr(y), b0(y);
  }
  function wr(y) {
    function F(ve, fe) {
      return new RegExp(
        f(ve),
        "m" + (y.case_insensitive ? "i" : "") + (y.unicodeRegex ? "u" : "") + (fe ? "g" : "")
      );
    }
    class se {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(fe, ke) {
        ke.position = this.position++, this.matchIndexes[this.matchAt] = ke, this.regexes.push([ke, fe]), this.matchAt += L(fe) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const fe = this.regexes.map((ke) => ke[1]);
        this.matcherRe = F(ne(fe, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(fe) {
        this.matcherRe.lastIndex = this.lastIndex;
        const ke = this.matcherRe.exec(fe);
        if (!ke)
          return null;
        const bt = ke.findIndex((Xr, Jr) => Jr > 0 && Xr !== void 0), ot = this.matchIndexes[bt];
        return ke.splice(0, bt), Object.assign(ke, ot);
      }
    }
    class Ae {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(fe) {
        if (this.multiRegexes[fe]) return this.multiRegexes[fe];
        const ke = new se();
        return this.rules.slice(fe).forEach(([bt, ot]) => ke.addRule(bt, ot)), ke.compile(), this.multiRegexes[fe] = ke, ke;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(fe, ke) {
        this.rules.push([fe, ke]), ke.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(fe) {
        const ke = this.getMatcher(this.regexIndex);
        ke.lastIndex = this.lastIndex;
        let bt = ke.exec(fe);
        if (this.resumingScanAtSamePosition() && !(bt && bt.index === this.lastIndex)) {
          const ot = this.getMatcher(0);
          ot.lastIndex = this.lastIndex + 1, bt = ot.exec(fe);
        }
        return bt && (this.regexIndex += bt.position + 1, this.regexIndex === this.count && this.considerAll()), bt;
      }
    }
    function it(ve) {
      const fe = new Ae();
      return ve.contains.forEach((ke) => fe.addRule(ke.begin, { rule: ke, type: "begin" })), ve.terminatorEnd && fe.addRule(ve.terminatorEnd, { type: "end" }), ve.illegal && fe.addRule(ve.illegal, { type: "illegal" }), fe;
    }
    function ct(ve, fe) {
      const ke = (
        /** @type CompiledMode */
        ve
      );
      if (ve.isCompiled) return ke;
      [
        Ge,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        wn,
        Rr,
        Gr
      ].forEach((ot) => ot(ve, fe)), y.compilerExtensions.forEach((ot) => ot(ve, fe)), ve.__beforeBegin = null, [
        gt,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        gr,
        // default to 1 relevance if not specified
        $t
      ].forEach((ot) => ot(ve, fe)), ve.isCompiled = !0;
      let bt = null;
      return typeof ve.keywords == "object" && ve.keywords.$pattern && (ve.keywords = Object.assign({}, ve.keywords), bt = ve.keywords.$pattern, delete ve.keywords.$pattern), bt = bt || /\w+/, ve.keywords && (ve.keywords = Yt(ve.keywords, y.case_insensitive)), ke.keywordPatternRe = F(bt, !0), fe && (ve.begin || (ve.begin = /\B|\b/), ke.beginRe = F(ke.begin), !ve.end && !ve.endsWithParent && (ve.end = /\B|\b/), ve.end && (ke.endRe = F(ke.end)), ke.terminatorEnd = f(ke.end) || "", ve.endsWithParent && fe.terminatorEnd && (ke.terminatorEnd += (ve.end ? "|" : "") + fe.terminatorEnd)), ve.illegal && (ke.illegalRe = F(
        /** @type {RegExp | string} */
        ve.illegal
      )), ve.contains || (ve.contains = []), ve.contains = [].concat(...ve.contains.map(function(ot) {
        return X0(ot === "self" ? ve : ot);
      })), ve.contains.forEach(function(ot) {
        ct(
          /** @type Mode */
          ot,
          ke
        );
      }), ve.starts && ct(ve.starts, fe), ke.matcher = it(ke), ke;
    }
    if (y.compilerExtensions || (y.compilerExtensions = []), y.contains && y.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return y.classNameAliases = n(y.classNameAliases || {}), ct(
      /** @type Mode */
      y
    );
  }
  function Un(y) {
    return y ? y.endsWithParent || Un(y.starts) : !1;
  }
  function X0(y) {
    return y.variants && !y.cachedVariants && (y.cachedVariants = y.variants.map(function(F) {
      return n(y, { variants: null }, F);
    })), y.cachedVariants ? y.cachedVariants : Un(y) ? n(y, { starts: y.starts ? n(y.starts) : null }) : Object.isFrozen(y) ? n(y) : y;
  }
  var Gn = "11.11.1";
  class J0 extends Error {
    constructor(F, se) {
      super(F), this.name = "HTMLInjectionError", this.html = se;
    }
  }
  const yn = t, v0 = n, kn = Symbol("nomatch"), Sn = 7, Zr = function(y) {
    const F = /* @__PURE__ */ Object.create(null), se = /* @__PURE__ */ Object.create(null), Ae = [];
    let it = !0;
    const ct = "Could not find the language '{}', did you forget to load/include a language module?", ve = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let fe = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: h
    };
    function ke(Q) {
      return fe.noHighlightRe.test(Q);
    }
    function bt(Q) {
      let xe = Q.className + " ";
      xe += Q.parentNode ? Q.parentNode.className : "";
      const Le = fe.languageDetectRe.exec(xe);
      if (Le) {
        const Ne = Qt(Le[1]);
        return Ne || (Kr(ct.replace("{}", Le[1])), Kr("Falling back to no-highlight mode for this block.", Q)), Ne ? Le[1] : "no-highlight";
      }
      return xe.split(/\s+/).find((Ne) => ke(Ne) || Qt(Ne));
    }
    function ot(Q, xe, Le) {
      let Ne = "", et = "";
      typeof xe == "object" ? (Ne = Q, Le = xe.ignoreIllegals, et = xe.language) : (Ft("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ft("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), et = Q, Ne = xe), Le === void 0 && (Le = !0);
      const Rt = {
        code: Ne,
        language: et
      };
      en("before:highlight", Rt);
      const Pt = Rt.result ? Rt.result : Xr(Rt.language, Rt.code, Le);
      return Pt.code = Rt.code, en("after:highlight", Pt), Pt;
    }
    function Xr(Q, xe, Le, Ne) {
      const et = /* @__PURE__ */ Object.create(null);
      function Rt(N, R) {
        return N.keywords[R];
      }
      function Pt() {
        if (!_e.keywords) {
          vt.addText(Xe);
          return;
        }
        let N = 0;
        _e.keywordPatternRe.lastIndex = 0;
        let R = _e.keywordPatternRe.exec(Xe), K = "";
        for (; R; ) {
          K += Xe.substring(N, R.index);
          const de = Kt.case_insensitive ? R[0].toLowerCase() : R[0], be = Rt(_e, de);
          if (be) {
            const [tt, Vt] = be;
            if (vt.addText(K), K = "", et[de] = (et[de] || 0) + 1, et[de] <= Sn && ($ += Vt), tt.startsWith("_"))
              K += R[0];
            else {
              const Mt = Kt.classNameAliases[tt] || tt;
              Ot(R[0], Mt);
            }
          } else
            K += R[0];
          N = _e.keywordPatternRe.lastIndex, R = _e.keywordPatternRe.exec(Xe);
        }
        K += Xe.substring(N), vt.addText(K);
      }
      function Et() {
        if (Xe === "") return;
        let N = null;
        if (typeof _e.subLanguage == "string") {
          if (!F[_e.subLanguage]) {
            vt.addText(Xe);
            return;
          }
          N = Xr(_e.subLanguage, Xe, !0, C0[_e.subLanguage]), C0[_e.subLanguage] = /** @type {CompiledMode} */
          N._top;
        } else
          N = Yr(Xe, _e.subLanguage.length ? _e.subLanguage : null);
        _e.relevance > 0 && ($ += N.relevance), vt.__addSublanguage(N._emitter, N.language);
      }
      function Nt() {
        _e.subLanguage != null ? Et() : Pt(), Xe = "";
      }
      function Ot(N, R) {
        N !== "" && (vt.startScope(R), vt.addText(N), vt.endScope());
      }
      function dr(N, R) {
        let K = 1;
        const de = R.length - 1;
        for (; K <= de; ) {
          if (!N._emit[K]) {
            K++;
            continue;
          }
          const be = Kt.classNameAliases[N[K]] || N[K], tt = R[K];
          be ? Ot(tt, be) : (Xe = tt, Pt(), Xe = ""), K++;
        }
      }
      function lt(N, R) {
        return N.scope && typeof N.scope == "string" && vt.openNode(Kt.classNameAliases[N.scope] || N.scope), N.beginScope && (N.beginScope._wrap ? (Ot(Xe, Kt.classNameAliases[N.beginScope._wrap] || N.beginScope._wrap), Xe = "") : N.beginScope._multi && (dr(N.beginScope, R), Xe = "")), _e = Object.create(N, { parent: { value: _e } }), _e;
      }
      function Cn(N, R, K) {
        let de = W(N.endRe, K);
        if (de) {
          if (N["on:end"]) {
            const be = new e(N);
            N["on:end"](R, be), be.isMatchIgnored && (de = !1);
          }
          if (de) {
            for (; N.endsParent && N.parent; )
              N = N.parent;
            return N;
          }
        }
        if (N.endsWithParent)
          return Cn(N.parent, R, K);
      }
      function Q0(N) {
        return _e.matcher.regexIndex === 0 ? (Xe += N[0], 1) : (J = !0, 0);
      }
      function tn(N) {
        const R = N[0], K = N.rule, de = new e(K), be = [K.__beforeBegin, K["on:begin"]];
        for (const tt of be)
          if (tt && (tt(N, de), de.isMatchIgnored))
            return Q0(R);
        return K.skip ? Xe += R : (K.excludeBegin && (Xe += R), Nt(), !K.returnBegin && !K.excludeBegin && (Xe = R)), lt(K, N), K.returnBegin ? 0 : R.length;
      }
      function Jn(N) {
        const R = N[0], K = xe.substring(N.index), de = Cn(_e, N, K);
        if (!de)
          return kn;
        const be = _e;
        _e.endScope && _e.endScope._wrap ? (Nt(), Ot(R, _e.endScope._wrap)) : _e.endScope && _e.endScope._multi ? (Nt(), dr(_e.endScope, N)) : be.skip ? Xe += R : (be.returnEnd || be.excludeEnd || (Xe += R), Nt(), be.excludeEnd && (Xe = R));
        do
          _e.scope && vt.closeNode(), !_e.skip && !_e.subLanguage && ($ += _e.relevance), _e = _e.parent;
        while (_e !== de.parent);
        return de.starts && lt(de.starts, N), be.returnEnd ? 0 : R.length;
      }
      function Yn() {
        const N = [];
        for (let R = _e; R !== Kt; R = R.parent)
          R.scope && N.unshift(R.scope);
        N.forEach((R) => vt.openNode(R));
      }
      let rn = {};
      function Qn(N, R) {
        const K = R && R[0];
        if (Xe += N, K == null)
          return Nt(), 0;
        if (rn.type === "begin" && R.type === "end" && rn.index === R.index && K === "") {
          if (Xe += xe.slice(R.index, R.index + 1), !it) {
            const de = new Error(`0 width match regex (${Q})`);
            throw de.languageName = Q, de.badRule = rn.rule, de;
          }
          return 1;
        }
        if (rn = R, R.type === "begin")
          return tn(R);
        if (R.type === "illegal" && !Le) {
          const de = new Error('Illegal lexeme "' + K + '" for mode "' + (_e.scope || "<unnamed>") + '"');
          throw de.mode = _e, de;
        } else if (R.type === "end") {
          const de = Jn(R);
          if (de !== kn)
            return de;
        }
        if (R.type === "illegal" && K === "")
          return Xe += `
`, 1;
        if (z > 1e5 && z > R.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Xe += K, K.length;
      }
      const Kt = Qt(Q);
      if (!Kt)
        throw Dt(ct.replace("{}", Q)), new Error('Unknown language: "' + Q + '"');
      const _0 = wr(Kt);
      let e0 = "", _e = Ne || _0;
      const C0 = {}, vt = new fe.__emitter(fe);
      Yn();
      let Xe = "", $ = 0, C = 0, z = 0, J = !1;
      try {
        if (Kt.__emitTokens)
          Kt.__emitTokens(xe, vt);
        else {
          for (_e.matcher.considerAll(); ; ) {
            z++, J ? J = !1 : _e.matcher.considerAll(), _e.matcher.lastIndex = C;
            const N = _e.matcher.exec(xe);
            if (!N) break;
            const R = xe.substring(C, N.index), K = Qn(R, N);
            C = N.index + K;
          }
          Qn(xe.substring(C));
        }
        return vt.finalize(), e0 = vt.toHTML(), {
          language: Q,
          value: e0,
          relevance: $,
          illegal: !1,
          _emitter: vt,
          _top: _e
        };
      } catch (N) {
        if (N.message && N.message.includes("Illegal"))
          return {
            language: Q,
            value: yn(xe),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: N.message,
              index: C,
              context: xe.slice(C - 100, C + 100),
              mode: N.mode,
              resultSoFar: e0
            },
            _emitter: vt
          };
        if (it)
          return {
            language: Q,
            value: yn(xe),
            illegal: !1,
            relevance: 0,
            errorRaised: N,
            _emitter: vt,
            _top: _e
          };
        throw N;
      }
    }
    function Jr(Q) {
      const xe = {
        value: yn(Q),
        illegal: !1,
        relevance: 0,
        _top: ve,
        _emitter: new fe.__emitter(fe)
      };
      return xe._emitter.addText(Q), xe;
    }
    function Yr(Q, xe) {
      xe = xe || fe.languages || Object.keys(F);
      const Le = Jr(Q), Ne = xe.filter(Qt).filter(yt).map(
        (Nt) => Xr(Nt, Q, !1)
      );
      Ne.unshift(Le);
      const et = Ne.sort((Nt, Ot) => {
        if (Nt.relevance !== Ot.relevance) return Ot.relevance - Nt.relevance;
        if (Nt.language && Ot.language) {
          if (Qt(Nt.language).supersetOf === Ot.language)
            return 1;
          if (Qt(Ot.language).supersetOf === Nt.language)
            return -1;
        }
        return 0;
      }), [Rt, Pt] = et, Et = Rt;
      return Et.secondBest = Pt, Et;
    }
    function w0(Q, xe, Le) {
      const Ne = xe && se[xe] || Le;
      Q.classList.add("hljs"), Q.classList.add(`language-${Ne}`);
    }
    function _n(Q) {
      let xe = null;
      const Le = bt(Q);
      if (ke(Le)) return;
      if (en(
        "before:highlightElement",
        { el: Q, language: Le }
      ), Q.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", Q);
        return;
      }
      if (Q.children.length > 0 && (fe.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(Q)), fe.throwUnescapedHTML))
        throw new J0(
          "One of your code blocks includes unescaped HTML.",
          Q.innerHTML
        );
      xe = Q;
      const Ne = xe.textContent, et = Le ? ot(Ne, { language: Le, ignoreIllegals: !0 }) : Yr(Ne);
      Q.innerHTML = et.value, Q.dataset.highlighted = "yes", w0(Q, Le, et.language), Q.result = {
        language: et.language,
        // TODO: remove with version 11.0
        re: et.relevance,
        relevance: et.relevance
      }, et.secondBest && (Q.secondBest = {
        language: et.secondBest.language,
        relevance: et.secondBest.relevance
      }), en("after:highlightElement", { el: Q, result: et, text: Ne });
    }
    function x0(Q) {
      fe = v0(fe, Q);
    }
    const yr = () => {
      Sr(), Ft("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function kr() {
      Sr(), Ft("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Qr = !1;
    function Sr() {
      function Q() {
        Sr();
      }
      if (document.readyState === "loading") {
        Qr || window.addEventListener("DOMContentLoaded", Q, !1), Qr = !0;
        return;
      }
      document.querySelectorAll(fe.cssSelector).forEach(_n);
    }
    function jn(Q, xe) {
      let Le = null;
      try {
        Le = xe(y);
      } catch (Ne) {
        if (Dt("Language definition for '{}' could not be registered.".replace("{}", Q)), it)
          Dt(Ne);
        else
          throw Ne;
        Le = ve;
      }
      Le.name || (Le.name = Q), F[Q] = Le, Le.rawDefinition = xe.bind(null, y), Le.aliases && k0(Le.aliases, { languageName: Q });
    }
    function y0(Q) {
      delete F[Q];
      for (const xe of Object.keys(se))
        se[xe] === Q && delete se[xe];
    }
    function Y0() {
      return Object.keys(F);
    }
    function Qt(Q) {
      return Q = (Q || "").toLowerCase(), F[Q] || F[se[Q]];
    }
    function k0(Q, { languageName: xe }) {
      typeof Q == "string" && (Q = [Q]), Q.forEach((Le) => {
        se[Le.toLowerCase()] = xe;
      });
    }
    function yt(Q) {
      const xe = Qt(Q);
      return xe && !xe.disableAutodetect;
    }
    function S0(Q) {
      Q["before:highlightBlock"] && !Q["before:highlightElement"] && (Q["before:highlightElement"] = (xe) => {
        Q["before:highlightBlock"](
          Object.assign({ block: xe.el }, xe)
        );
      }), Q["after:highlightBlock"] && !Q["after:highlightElement"] && (Q["after:highlightElement"] = (xe) => {
        Q["after:highlightBlock"](
          Object.assign({ block: xe.el }, xe)
        );
      });
    }
    function Kn(Q) {
      S0(Q), Ae.push(Q);
    }
    function Zn(Q) {
      const xe = Ae.indexOf(Q);
      xe !== -1 && Ae.splice(xe, 1);
    }
    function en(Q, xe) {
      const Le = Q;
      Ae.forEach(function(Ne) {
        Ne[Le] && Ne[Le](xe);
      });
    }
    function Xn(Q) {
      return Ft("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ft("10.7.0", "Please use highlightElement now."), _n(Q);
    }
    Object.assign(y, {
      highlight: ot,
      highlightAuto: Yr,
      highlightAll: Sr,
      highlightElement: _n,
      // TODO: Remove with v12 API
      highlightBlock: Xn,
      configure: x0,
      initHighlighting: yr,
      initHighlightingOnLoad: kr,
      registerLanguage: jn,
      unregisterLanguage: y0,
      listLanguages: Y0,
      getLanguage: Qt,
      registerAliases: k0,
      autoDetection: yt,
      inherit: v0,
      addPlugin: Kn,
      removePlugin: Zn
    }), y.debugMode = function() {
      it = !1;
    }, y.safeMode = function() {
      it = !0;
    }, y.versionString = Gn, y.regex = {
      concat: T,
      lookahead: m,
      either: O,
      optional: k,
      anyNumberOfTimes: v
    };
    for (const Q in ge)
      typeof ge[Q] == "object" && r(ge[Q]);
    return Object.assign(y, ge), y;
  }, xr = Zr({});
  return xr.newInstance = () => Zr({}), ls = xr, xr.HighlightJS = xr, xr.default = xr, ls;
}
var o2 = /* @__PURE__ */ s2();
const qn = /* @__PURE__ */ jc(o2), l2 = (r) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: r.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: r.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), c2 = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], u2 = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], d2 = [
  ...c2,
  ...u2
], h2 = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), f2 = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), p2 = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), m2 = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function g2(r) {
  const e = r.regex, t = l2(r), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", a = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      t.BLOCK_COMMENT,
      n,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      t.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + s,
        relevance: 0
      },
      t.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + f2.join("|") + ")" },
          { begin: ":(:)?(" + p2.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      t.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + m2.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          t.BLOCK_COMMENT,
          t.HEXCOLOR,
          t.IMPORTANT,
          t.CSS_NUMBER_MODE,
          ...o,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...o,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          t.FUNCTION_DISPATCH
        ]
      },
      {
        begin: e.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: a
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: h2.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...o,
              t.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + d2.join("|") + ")\\b"
      }
    ]
  };
}
const Bc = "[A-Za-z$_][0-9A-Za-z$_]*", b2 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], v2 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], t1 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], r1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], n1 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], w2 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], x2 = [].concat(
  n1,
  t1,
  r1
);
function y2(r) {
  const e = r.regex, t = (E, { after: re }) => {
    const ze = "</" + E[0].slice(1);
    return E.input.indexOf(ze, re) !== -1;
  }, n = Bc, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (E, re) => {
      const ze = E[0].length + E.index, Pe = E.input[ze];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Pe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Pe === ","
      ) {
        re.ignoreMatch();
        return;
      }
      Pe === ">" && (t(E, { after: ze }) || re.ignoreMatch());
      let Re;
      const He = E.input.substring(ze);
      if (Re = He.match(/^\s*=/)) {
        re.ignoreMatch();
        return;
      }
      if ((Re = He.match(/^\s+extends\s+/)) && Re.index === 0) {
        re.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Bc,
    keyword: b2,
    literal: v2,
    built_in: x2,
    "variable.language": w2
  }, l = "[0-9](_?[0-9])*", d = `\\.(${l})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, m = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, v = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "xml"
    }
  }, k = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "css"
    }
  }, T = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "graphql"
    }
  }, I = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, L = {
    className: "comment",
    variants: [
      r.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: n + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      r.C_BLOCK_COMMENT_MODE,
      r.C_LINE_COMMENT_MODE
    ]
  }, W = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    k,
    T,
    I,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = W.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(W)
  });
  const Y = [].concat(L, m.contains), ne = Y.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(Y)
    }
  ]), M = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: ne
  }, G = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          e.concat(n, "(", e.concat(/\./, n), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, he = {
    relevance: 0,
    match: e.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...t1,
        ...r1
      ]
    }
  }, ce = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, ie = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [M],
    illegal: /%/
  }, Ie = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ye(E) {
    return e.concat("(?!", E.join("|"), ")");
  }
  const q = {
    match: e.concat(
      /\b/,
      ye([
        ...n1,
        "super",
        "import"
      ].map((E) => `${E}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, U = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, oe = {
    match: [
      /get|set/,
      /\s+/,
      n,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      M
    ]
  }, D = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", j = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(D)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      M
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: ne, CLASS_REFERENCE: he },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      ce,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      k,
      T,
      I,
      L,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      he,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      j,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          L,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: D,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: r.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: ne
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: a },
              {
                begin: s.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      ie,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          M,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      U,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [M]
      },
      q,
      Ie,
      G,
      oe,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var M0 = "[0-9](_*[0-9])*", Wi = `\\.(${M0})`, Ui = "[0-9a-fA-F](_*[0-9a-fA-F])*", Lc = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${M0})((${Wi})|\\.)?|(${Wi}))[eE][+-]?(${M0})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${M0})((${Wi})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Wi})[fFdD]?\\b` },
    { begin: `\\b(${M0})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Ui})\\.?|(${Ui})?\\.(${Ui}))[pP][+-]?(${M0})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Ui})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function i1(r, e, t) {
  return t === -1 ? "" : r.replace(e, (n) => i1(r, e, t - 1));
}
function k2(r) {
  const e = r.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = t + i1("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), l = {
    keyword: [
      "synchronized",
      "abstract",
      "private",
      "var",
      "static",
      "if",
      "const ",
      "for",
      "while",
      "strictfp",
      "finally",
      "protected",
      "import",
      "native",
      "final",
      "void",
      "enum",
      "else",
      "break",
      "transient",
      "catch",
      "instanceof",
      "volatile",
      "case",
      "assert",
      "package",
      "default",
      "public",
      "try",
      "switch",
      "continue",
      "throws",
      "protected",
      "public",
      "private",
      "module",
      "requires",
      "exports",
      "do",
      "sealed",
      "yield",
      "permits",
      "goto",
      "when"
    ],
    literal: [
      "false",
      "true",
      "null"
    ],
    type: [
      "char",
      "boolean",
      "long",
      "float",
      "int",
      "byte",
      "short",
      "double"
    ],
    built_in: [
      "super",
      "this"
    ]
  }, d = {
    className: "meta",
    begin: "@" + t,
    contains: [
      {
        begin: /\(/,
        end: /\)/,
        contains: ["self"]
        // allow nested () inside our annotation
      }
    ]
  }, h = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    keywords: l,
    relevance: 0,
    contains: [r.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: l,
    illegal: /<\/|#/,
    contains: [
      r.COMMENT(
        "/\\*\\*",
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/,
              relevance: 0
            },
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            }
          ]
        }
      ),
      // relevance boost
      {
        begin: /import java\.[a-z]+\./,
        keywords: "import",
        relevance: 2
      },
      r.C_LINE_COMMENT_MODE,
      r.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [r.BACKSLASH_ESCAPE]
      },
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          t
        ],
        className: {
          1: "keyword",
          3: "title.class"
        }
      },
      {
        // Exceptions for hyphenated keywords
        match: /non-sealed/,
        scope: "keyword"
      },
      {
        begin: [
          e.concat(/(?!else)/, t),
          /\s+/,
          t,
          /\s+/,
          /=(?!=)/
        ],
        className: {
          1: "type",
          3: "variable",
          5: "operator"
        }
      },
      {
        begin: [
          /record/,
          /\s+/,
          t
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          h,
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      {
        // Expression keywords prevent 'keyword Name(...)' from being
        // recognized as a function definition
        beginKeywords: "new throw return else",
        relevance: 0
      },
      {
        begin: [
          "(?:" + n + "\\s+)",
          r.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: l,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: l,
            relevance: 0,
            contains: [
              d,
              r.APOS_STRING_MODE,
              r.QUOTE_STRING_MODE,
              Lc,
              r.C_BLOCK_COMMENT_MODE
            ]
          },
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      Lc,
      d
    ]
  };
}
function S2(r) {
  const e = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, t = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, n = [
    "true",
    "false",
    "null"
  ], i = {
    scope: "literal",
    beginKeywords: n.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: n
    },
    contains: [
      e,
      t,
      r.QUOTE_STRING_MODE,
      i,
      r.C_NUMBER_MODE,
      r.C_LINE_COMMENT_MODE,
      r.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const pa = "[A-Za-z$_][0-9A-Za-z$_]*", a1 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], s1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], o1 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], l1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], c1 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], u1 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], d1 = [].concat(
  c1,
  o1,
  l1
);
function _2(r) {
  const e = r.regex, t = (E, { after: re }) => {
    const ze = "</" + E[0].slice(1);
    return E.input.indexOf(ze, re) !== -1;
  }, n = pa, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (E, re) => {
      const ze = E[0].length + E.index, Pe = E.input[ze];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Pe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Pe === ","
      ) {
        re.ignoreMatch();
        return;
      }
      Pe === ">" && (t(E, { after: ze }) || re.ignoreMatch());
      let Re;
      const He = E.input.substring(ze);
      if (Re = He.match(/^\s*=/)) {
        re.ignoreMatch();
        return;
      }
      if ((Re = He.match(/^\s+extends\s+/)) && Re.index === 0) {
        re.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: pa,
    keyword: a1,
    literal: s1,
    built_in: d1,
    "variable.language": u1
  }, l = "[0-9](_?[0-9])*", d = `\\.(${l})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${l})\\b` },
      { begin: `\\b(${h})\\b((${d})\\b|\\.)?|(${d})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, m = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: o,
    contains: []
    // defined later
  }, v = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "xml"
    }
  }, k = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "css"
    }
  }, T = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        r.BACKSLASH_ESCAPE,
        m
      ],
      subLanguage: "graphql"
    }
  }, I = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, L = {
    className: "comment",
    variants: [
      r.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: n + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      r.C_BLOCK_COMMENT_MODE,
      r.C_LINE_COMMENT_MODE
    ]
  }, W = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    k,
    T,
    I,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = W.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(W)
  });
  const Y = [].concat(L, m.contains), ne = Y.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(Y)
    }
  ]), M = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: ne
  }, G = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          e.concat(n, "(", e.concat(/\./, n), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, he = {
    relevance: 0,
    match: e.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...o1,
        ...l1
      ]
    }
  }, ce = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, ie = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [M],
    illegal: /%/
  }, Ie = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ye(E) {
    return e.concat("(?!", E.join("|"), ")");
  }
  const q = {
    match: e.concat(
      /\b/,
      ye([
        ...c1,
        "super",
        "import"
      ].map((E) => `${E}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, U = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, oe = {
    match: [
      /get|set/,
      /\s+/,
      n,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      M
    ]
  }, D = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", j = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(D)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      M
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: ne, CLASS_REFERENCE: he },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      ce,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      k,
      T,
      I,
      L,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      he,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      j,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          L,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: D,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: r.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: o,
                    contains: ne
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: a },
              {
                begin: s.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": s.isTrulyOpeningTag,
                end: s.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: s.begin,
                end: s.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      ie,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          M,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      U,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [M]
      },
      q,
      Ie,
      G,
      oe,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function C2(r) {
  const e = r.regex, t = _2(r), n = pa, i = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], a = {
    begin: [
      /namespace/,
      /\s+/,
      r.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, s = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: i
    },
    contains: [t.exports.CLASS_REFERENCE]
  }, o = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, l = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], d = {
    $pattern: pa,
    keyword: a1.concat(l),
    literal: s1,
    built_in: d1.concat(i),
    "variable.language": u1
  }, h = {
    className: "meta",
    begin: "@" + n
  }, f = (T, I, O) => {
    const L = T.contains.findIndex((W) => W.label === I);
    if (L === -1)
      throw new Error("can not find mode to replace");
    T.contains.splice(L, 1, O);
  };
  Object.assign(t.keywords, d), t.exports.PARAMS_CONTAINS.push(h);
  const m = t.contains.find((T) => T.scope === "attr"), v = Object.assign(
    {},
    m,
    { match: e.concat(n, e.lookahead(/\s*\?:/)) }
  );
  t.exports.PARAMS_CONTAINS.push([
    t.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    m,
    // highlight the params key
    v
    // Added for optional property assignment highlighting
  ]), t.contains = t.contains.concat([
    h,
    a,
    s,
    v
    // Added for optional property assignment highlighting
  ]), f(t, "shebang", r.SHEBANG()), f(t, "use_strict", o);
  const k = t.contains.find((T) => T.label === "func.def");
  return k.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
function h1(r) {
  const e = r.regex, t = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, a = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, s = r.inherit(a, {
    begin: /\(/,
    end: /\)/
  }), o = r.inherit(r.APOS_STRING_MODE, { className: "string" }), l = r.inherit(r.QUOTE_STRING_MODE, { className: "string" }), d = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: n,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          a,
          l,
          o,
          s,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  a,
                  s,
                  l,
                  o
                ]
              }
            ]
          }
        ]
      },
      r.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              l
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [d],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [d],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: e.concat(
          /</,
          e.lookahead(e.concat(
            t,
            // <tag/>
            // <tag>
            // <tag ...
            e.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0,
            starts: d
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: e.concat(
          /<\//,
          e.lookahead(e.concat(
            t,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: t,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const Am = "0.0.38", A2 = S.ValueIsTextline, f1 = {
  h: hn,
  Fragment: On,
  render: un,
  createContext: su,
  createElement: hn,
  cloneElement: au,
  createRef: xh,
  toChildArray: F0,
  createPortal: bu,
  memo: Nh,
  forwardRef: Eh,
  useId: du,
  useRef: De,
  useState: Ue,
  useReducer: cu,
  useEffect: qt,
  useLayoutEffect: $h,
  useCallback: Wt,
  useMemo: U0,
  useContext: uu,
  useErrorBoundary: so
}, { fromLocalTo: $2, fromViewportTo: I2, fromDocumentTo: T2 } = jh;
qn.registerLanguage("css", g2);
qn.registerLanguage("javascript", y2);
qn.registerLanguage("java", k2);
qn.registerLanguage("json", S2);
qn.registerLanguage("typescript", C2);
qn.registerLanguage("html", h1);
qn.registerLanguage("xml", h1);
const Nr = Symbol("Script"), mn = Symbol("View"), Ba = Symbol("isProxy"), La = Symbol("rerender"), Pn = Symbol("Console"), gi = Symbol("Console_CharCount"), bi = Symbol("Console_LineCount"), p1 = ["left-width", "left-right", "width-right"], m1 = ["top-height", "top-bottom", "height-bottom"], $m = [
  "thin",
  "extra-light",
  "light",
  "normal",
  "medium",
  "semi-bold",
  "bold",
  "extra-bold",
  "heavy"
], N2 = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  heavy: 900
}, Im = ["normal", "italic"], M2 = ["none", "underline", "overline", "line-through"], E2 = ["solid", "double", "dotted", "dashed", "wavy"], Tm = ["left", "center", "right", "justify"], z2 = ["normal", "contain", "cover", "fill", "tile"], R2 = [
  "none",
  "hidden",
  "dotted",
  "dashed",
  "solid",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset"
], Nm = [
  "auto",
  "none",
  "default",
  "alias",
  "all-scroll",
  "cell",
  "context-menu",
  "col-resize",
  "copy",
  "crosshair",
  "e-resize",
  "ew-resize",
  "grab",
  "grabbing",
  "help",
  "move",
  "n-resize",
  "ne-resize",
  "nesw-resize",
  "ns-resize",
  "nw-resize",
  "nwse-resize",
  "no-drop",
  "not-allowed",
  "pointer",
  "progress",
  "row-resize",
  "s-resize",
  "se-resize",
  "sw-resize",
  "text",
  "vertical-text",
  "w-resize",
  "wait",
  "zoom-in",
  "zoom-out"
], O2 = ["visible", "hidden", "scroll", "auto"];
function Vn(r) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);
  if (e == null)
    throw new Error(r);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function Mm(r) {
  Vn(
    "ReadOnlyProperty: property " + S.quoted(r) + " must not be set"
  );
}
const B2 = /^[a-z$_][a-z$_0-9]*$/i;
function g1(r) {
  return S.ValueIsStringMatching(r, B2);
}
const L2 = S.ValidatorForClassifier(
  g1,
  S.acceptNil,
  "BC identifier"
), Em = L2, D2 = S.ValidatorForClassifier(
  g1,
  S.rejectNil,
  "BC identifier"
), zm = D2;
function Ti(r) {
  return S.ValueIsString(r) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(r);
}
const F2 = S.ValidatorForClassifier(
  Ti,
  S.acceptNil,
  "name"
), Rm = F2, Ro = S.ValidatorForClassifier(
  Ti,
  S.rejectNil,
  "name"
), Om = Ro;
function nr(r) {
  return S.ValueIsFiniteNumber(r);
}
const P2 = S.ValidatorForClassifier(
  nr,
  S.acceptNil,
  "BC coordinate"
), Bm = P2, V2 = S.ValidatorForClassifier(
  nr,
  S.rejectNil,
  "BC coordinate"
), Lm = V2;
function Mr(r) {
  return S.ValueIsFiniteNumber(r) && r >= 0;
}
const H2 = S.ValidatorForClassifier(
  Mr,
  S.acceptNil,
  "BC dimension"
), Dm = H2, q2 = S.ValidatorForClassifier(
  Mr,
  S.rejectNil,
  "BC dimension"
), Fm = q2;
function b1(r) {
  return S.ValueIsPlainObject(r) && nr(r.x) && nr(r.y);
}
const W2 = S.ValidatorForClassifier(
  b1,
  S.acceptNil,
  "BC position"
), Pm = W2, U2 = S.ValidatorForClassifier(
  b1,
  S.rejectNil,
  "BC position"
), Vm = U2;
function v1(r) {
  return S.ValueIsPlainObject(r) && Mr(r.Width) && Mr(r.Height);
}
const G2 = S.ValidatorForClassifier(
  v1,
  S.acceptNil,
  "BC size"
), Hm = G2, j2 = S.ValidatorForClassifier(
  v1,
  S.rejectNil,
  "BC size"
), qm = j2;
function w1(r) {
  return S.ValueIsPlainObject(r) && nr(r.x) && Mr(r.Width) && nr(r.y) && Mr(r.Height);
}
const K2 = S.ValidatorForClassifier(
  w1,
  S.acceptNil,
  "BC geometry"
), Wm = K2, Z2 = S.ValidatorForClassifier(
  w1,
  S.rejectNil,
  "BC geometry"
), Um = Z2;
function x1(r) {
  if (!S.ValueIsPlainObject(r))
    return !1;
  for (let e in r)
    if (r.hasOwnProperty(e))
      switch (e) {
        case "x":
        case "y":
          if (r[e] != null && !nr(r[e]))
            return !1;
          break;
        case "Width":
        case "Height":
          if (r[e] != null && !Mr(r[e]))
            return !1;
          break;
        default:
          return !1;
      }
  return !0;
}
S.ValidatorForClassifier(
  x1,
  S.acceptNil,
  "BC geometry"
);
S.ValidatorForClassifier(
  x1,
  S.rejectNil,
  "BC geometry"
);
function Oo(r) {
  return S.ValueIsList(r) && r.length === 2 && S.ValueIsOneOf(r[0], p1) && S.ValueIsOneOf(r[1], m1);
}
const X2 = S.ValidatorForClassifier(
  Oo,
  S.acceptNil,
  "BC anchors list"
), Gm = X2, J2 = S.ValidatorForClassifier(
  Oo,
  S.rejectNil,
  "BC anchors list"
), jm = J2;
function Bo(r) {
  return S.ValueIsListSatisfying(r, S.ValueIsFiniteNumber) && r.length === 4;
}
const Y2 = S.ValidatorForClassifier(
  Bo,
  S.acceptNil,
  "BC offsets list"
), Km = Y2, Q2 = S.ValidatorForClassifier(
  Bo,
  S.rejectNil,
  "BC offsets list"
), Zm = Q2;
function y1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsOneOf(r.Line, M2) && (r.Color == null || S.ValueIsColor(r.Color)) && (r.Style == null || S.ValueIsOneOf(r.Style, E2)) && (r.Thickness == null || Mr(r.Thickness));
}
const e5 = S.ValidatorForClassifier(
  y1,
  S.acceptNil,
  "text decoration"
), Xm = e5, t5 = S.ValidatorForClassifier(
  y1,
  S.rejectNil,
  "text decoration"
), Jm = t5;
function k1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && nr(r.xOffset) && nr(r.yOffset) && Mr(r.BlurRadius) && S.ValueIsColor(r.Color);
}
const r5 = S.ValidatorForClassifier(
  k1,
  S.acceptNil,
  "text shadow specification"
), Ym = r5, n5 = S.ValidatorForClassifier(
  k1,
  S.rejectNil,
  "text shadow specification"
), Qm = n5;
function S1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsURL(r.ImageURL) && S.ValueIsOneOf(r.Mode, z2) && nr(r.xOffset) && nr(r.yOffset);
}
const i5 = S.ValidatorForClassifier(
  S1,
  S.acceptNil,
  "background texture"
), eg = i5, a5 = S.ValidatorForClassifier(
  S1,
  S.rejectNil,
  "background texture"
), tg = a5;
function _1(r) {
  return S.ValueIsOneOf(r, R2);
}
const s5 = S.ValidatorForClassifier(
  _1,
  S.acceptNil,
  "widget border style"
), rg = s5, o5 = S.ValidatorForClassifier(
  _1,
  S.rejectNil,
  "widget border style"
), ng = o5;
function C1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && nr(r.xOffset) && nr(r.yOffset) && Mr(r.BlurRadius) && Mr(r.SpreadRadius) && S.ValueIsColor(r.Color);
}
const l5 = S.ValidatorForClassifier(
  C1,
  S.acceptNil,
  "widget box shadow specification"
), ig = l5, c5 = S.ValidatorForClassifier(
  C1,
  S.rejectNil,
  "widget box shadow specification"
), ag = c5;
function A1(r) {
  return S.ValueIsListSatisfying(
    r,
    (e) => S.ValueIsOneOf(e, O2),
    2,
    2
  );
}
const u5 = S.ValidatorForClassifier(
  A1,
  S.acceptNil,
  "BC overflow list"
), sg = u5, d5 = S.ValidatorForClassifier(
  A1,
  S.rejectNil,
  "BC overflow list"
), og = d5;
function Lo(r) {
  return Ws(r, /* @__PURE__ */ new WeakSet());
}
function Ws(r, e) {
  switch (!0) {
    case r == null:
    // deliberately also allows undefined
    case S.ValueIsBoolean(r):
    case S.ValueIsNumber(r):
    case S.ValueIsString(r):
      return !0;
    case S.ValueIsArray(r):
      if (e.has(r))
        return !1;
      e.add(r);
      for (let t of r)
        if (!Ws(t, e))
          return !1;
      return e.delete(r), !0;
    case S.ValueIsPlainObject(r):
      if (e.has(r))
        return !1;
      e.add(r);
      for (let t in r)
        if (r.hasOwnProperty(t) && !Ws(r[t], e))
          return !1;
      return e.delete(r), !0;
  }
  return !1;
}
const h5 = S.ValidatorForClassifier(
  Lo,
  S.acceptNil,
  "serializable value"
), lg = h5, f5 = S.ValidatorForClassifier(
  Lo,
  S.rejectNil,
  "serializable value"
), cg = f5;
function $1(r) {
  if (S.ValueIsPlainObject(r)) {
    for (let e in r)
      if (r.hasOwnProperty(e) && !Lo(r[e]))
        return !1;
    return !0;
  } else
    return !1;
}
const p5 = S.ValidatorForClassifier(
  $1,
  S.acceptNil,
  "serializable object"
), ug = p5, m5 = S.ValidatorForClassifier(
  $1,
  S.rejectNil,
  "serializable object"
), dg = m5;
function hg(r, e) {
  const t = e == null ? S.ValueIsTextline : (n) => S.ValueIsStringMatching(n, e);
  return S.ValueIsListSatisfying(r, t);
}
function g5(r, e, t) {
  return e == null ? e : v5(r, e, t);
}
const fg = g5;
function b5(r, e, t) {
  if (e == null)
    Vn(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const n = t == null ? S.ValueIsTextline : (i) => S.ValueIsStringMatching(i, t);
    if (S.ValueIsListSatisfying(e, n))
      return e;
    Vn(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const v5 = b5;
function pg(r, e, t, n, i) {
  const a = e == null && t == null ? S.ValueIsNumber : (s) => S.ValueIsNumberInRange(s, e, t, n, i);
  return S.ValueIsListSatisfying(r, a);
}
function w5(r, e, t, n, i, a) {
  return e == null ? e : y5(r, e, t, n, i, a);
}
const mg = w5;
function x5(r, e, t, n, i, a) {
  if (e == null)
    Vn(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const s = t == null && n == null ? S.ValueIsNumber : (o) => S.ValueIsNumberInRange(o, t, n, i, a);
    if (S.ValueIsListSatisfying(e, s))
      return e;
    Vn(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const y5 = x5;
function gg(r, e, t) {
  const n = e == null && t == null ? S.ValueIsInteger : (i) => S.ValueIsIntegerInRange(i, e, t);
  return S.ValueIsListSatisfying(r, n);
}
function k5(r, e, t, n) {
  return e == null ? e : _5(r, e, t, n);
}
const bg = k5;
function S5(r, e, t, n) {
  if (e == null)
    Vn(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const i = t == null && n == null ? S.ValueIsInteger : (a) => S.ValueIsIntegerInRange(a, t, n);
    if (S.ValueIsListSatisfying(e, i))
      return e;
    Vn(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const _5 = S5;
function vg(r, e) {
  if (S.expectFunction("Validator", e), e(r) === !0)
    return r;
}
function wg(r) {
  switch (!0) {
    case S.ValueIsBoolean(r):
      return r;
    case r === "false":
      return !1;
    case r === "true":
      return !0;
  }
}
function xg(r) {
  if (S.ValueIsNumber(r) || S.ValueIsString(r) && (r = parseFloat(r), !isNaN(r)))
    return r;
}
function yg(r, e, t, n, i) {
  if (!(S.ValueIsString(r) && (r = parseFloat(r), isNaN(r))) && S.ValueIsNumberInRange(r, e, t, n, i))
    return r;
}
function kg(r) {
  if (S.ValueIsInteger(r))
    return r;
  if (S.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), S.ValueIsInteger(r))
      return r;
  }
}
function Sg(r, e, t) {
  if (S.ValueIsString(r)) {
    const n = r.trim();
    if (r = n === "" ? NaN : Number(n), !S.ValueIsNumber(r))
      return;
  }
  if (S.ValueIsIntegerInRange(r, e, t))
    return r;
}
function _g(r) {
  if (S.ValueIsOrdinal(r))
    return r;
  if (S.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), S.ValueIsOrdinal(r))
      return r;
  }
}
function Cg(r) {
  if (S.ValueIsCardinal(r))
    return r;
  if (S.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), S.ValueIsCardinal(r))
      return r;
  }
}
function Ag(r) {
  if (S.ValueIsString(r))
    return r;
}
function $g(r, e) {
  if (S.ValueIsStringMatching(r, e))
    return r;
}
function Ig(r) {
  if (S.ValueIsText(r))
    return r;
}
function Tg(r) {
  if (S.ValueIsTextline(r))
    return r;
}
function Ng(r) {
  if (S.ValueIsFunction(r))
    return r;
}
function Mg(r) {
  if (S.ValueIsColor(r))
    return r;
}
function Eg(r) {
  if (S.ValueIsEMailAddress(r))
    return r;
}
function zg(r) {
  if (A2(r))
    return r;
}
function Rg(r) {
  if (S.ValueIsURL(r))
    return r;
}
function Og(r) {
  if (Ti(r))
    return r;
}
function Bg(r) {
  if (Ti(r) || S.ValueIsOrdinal(r))
    return r;
}
let ma = 0;
function Vr(r) {
  return ma += 1, `bc-${r}-${ma}`;
}
function I1(r) {
  r > ma && (ma = r);
}
function Lg(r) {
  return Ro("name", r), T1(r);
}
function T1(r) {
  return r.replaceAll(".", "-");
}
function C5(r, e, t = !1) {
  Ro("stylesheet name", r), S.expectText("stylesheet", e), S.expectBoolean("mode flag", t);
  const n = "BC-Stylesheet-for-" + T1(r);
  let i = document.head.querySelector('style[id="' + n + '"]');
  i == null ? (i = document.createElement("style"), i.id = n, i.textContent = e, document.head.append(i)) : t ? i.textContent = e : console.warn('multiple definitions for stylesheet "' + r + '"');
}
const Dg = "\\d{2}:\\d{2}", A5 = /\d{2}:\d{2}/;
function Fg(r) {
  return S.ValueIsStringMatching(r, A5);
}
const Pg = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", $5 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function Vg(r) {
  return S.ValueIsStringMatching(r, $5);
}
const Hg = "\\d{4}-\\d{2}-\\d{2}", I5 = /\d{4}-\d{2}-\d{2}/;
function qg(r) {
  return S.ValueIsStringMatching(r, I5);
}
const Wg = "\\d{4}-W\\d{2}", T5 = /\d{4}-W\d{2}/;
function Ug(r) {
  return S.ValueIsStringMatching(r, T5);
}
const Gg = "\\d{4}-\\d{2}", N5 = /\d{4}-\d{2}/;
function jg(r) {
  return S.ValueIsStringMatching(r, N5);
}
const Kg = [
  "checkbox",
  "choice",
  "textline-input",
  "password-input",
  "number-input",
  "integer-input",
  "search-input",
  "phone-number-input",
  "email-address-input",
  "url-input",
  "time-input",
  "date-time-input",
  "date-input",
  "week-input",
  "month-input",
  "color-input",
  "drop-down",
  "slider",
  "text-input",
  "html-input",
  "css-input",
  "javascript-input",
  "json-input",
  "linelist-input",
  "numberlist-input",
  "integerlist-input"
], M5 = /* @__PURE__ */ Object.create(null);
`
    Deck Card Widget
    Name isFixed isPermanent isHidden isDisabled
    x y Width Height Anchors Offsets minWidth minHeight maxWidth maxHeight
    SnapToGrid GridWidth GridHeight
    FontFamily FontSize FontWeight FontStyle
    TextDecoration TextShadow TextAlignment LineHeight
    ForegroundColor hasBackground BackgroundColor BackgroundTexture
    BorderWidths BorderStyles BorderColors BorderRadii
    BoxShadow
    Opacity Cursor Overflows
    pendingScript Script
    CardList activeCard WidgetList
  `.trim().replace(/\s+/g, " ").split(" ").forEach(
  (r) => M5[r] = !0
);
const Do = 105e4, Fo = 2e4;
function ga(r) {
  r[Pn] = "", r[La]();
}
function E5(r, e) {
  N1(r, M1(e)), r[La]();
}
function z5(r, e) {
  N1(r, M1(e, !0)), r[La]();
}
function N1(r, e) {
  if (e.length === 0)
    return;
  let t = Dc(e), n = e.length;
  t > (r.Console_LineLimit ?? Fo) || n > (r.Console_CharLimit ?? Do) ? (ga(r), e = O5(e, r, t, n), r[bi] = Dc(e) + 1, r[gi] = e.length, r[Pn] = e) : (R5(r, t, n), r[bi] += t, r[gi] += n, r[Pn] += e);
}
function R5(r, e, t) {
  let n = r[bi] + e - (r.Console_LineLimit ?? Fo), i = r[gi] + t - (r.Console_CharLimit ?? Do);
  if (n <= 0 && i <= 0)
    return;
  let a = r[Pn];
  for (let s = 0, o = -1; ; ) {
    if (o = a.indexOf(`
`, o + 1), o < 0) {
      ga(r);
      return;
    }
    if (s += 1, s >= n && o - s * 28 >= i) {
      r[Pn] = a.slice(o + 1);
      return;
    }
  }
}
function O5(r, e, t, n) {
  let i = t - e.Console_LineLimit, a = n - e.Console_CharLimit;
  for (let s = 0, o = -1; ; ) {
    if (o = r.indexOf(`
`, o + 1), o < 0)
      return r;
    if (s += 1, s >= i && o >= a)
      return r.slice(o + 1);
  }
}
function Dc(r) {
  let e = r.match(/\n/g);
  return e === null ? 0 : e.length;
}
function M1(r, e = !1) {
  let t = "";
  for (let n = 0; n < r.length; n++) {
    let i = r[n];
    switch (typeof i) {
      case "undefined":
        t += "(undefined)";
        break;
      case "boolean":
        t += i.toString();
        break;
      case "number":
        t += i.toString();
        break;
      case "string":
        t += i;
        break;
      case "function":
        t += "(function)";
        break;
      case "object":
        t += i === null ? "(null)" : i.toString();
        break;
      default:
        t += "(unknown)";
        break;
    }
  }
  return t + (e ? `
` : "");
}
function cs(r) {
  return L5(() => {
    const { ErrorToShow: e } = r;
    return X`<div class="bc-error-indicator" onClick=${() => {
      console.warn(e), window.alert(B5(e));
    }}/>`;
  });
}
C5("bc-error-indicator", `
    .bc-error-indicator {
      display:inline-block; position:relative;
      width:24px; height:24px;
    }

    .bc-error-indicator::after {
      content:'';
      display:block; position:absolute; overflow:hidden;
      left:0px; top:0px; width:24px; height:24px;
      background:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='24px' height='24px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 17.0001H12.01M12 10.0001V14.0001M6.41209 21.0001H17.588C19.3696 21.0001 20.2604 21.0001 20.783 20.6254C21.2389 20.2985 21.5365 19.7951 21.6033 19.238C21.6798 18.5996 21.2505 17.819 20.3918 16.2579L14.8039 6.09805C13.8897 4.4359 13.4326 3.60482 12.8286 3.32987C12.3022 3.09024 11.6978 3.09024 11.1714 3.32987C10.5674 3.60482 10.1103 4.4359 9.19614 6.09805L3.6082 16.2579C2.74959 17.819 2.32028 18.5996 2.39677 19.238C2.46351 19.7951 2.76116 20.2985 3.21709 20.6254C3.7396 21.0001 4.63043 21.0001 6.41209 21.0001Z' stroke='orange' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' fill='white'/%3E%3C/svg%3E");
      pointer-events:auto;
    }
  `);
function B5(r) {
  return `${r.Title}

${r.Message}`;
}
function Us(r) {
  const [e] = so();
  if (e != null) {
    console.warn("[BrowserCard] render error:", e);
    const t = (e == null ? void 0 : e.message) ?? String(e);
    return X`<div class="bc-error-indicator" title=${"render error: " + t}/>`;
  }
  return r.children;
}
const Zg = ["portrait", "landscape", "any"];
function L5(r) {
  S.expectFunction("rendering function", r);
  const [e, t] = so(), [n, i] = Ue(void 0);
  function a() {
    i(void 0), t();
  }
  if (e != null)
    return console.warn("rendering error caught by preact: " + e), X`<${cs} error=${e} resetError=${a}/>`;
  if (n != null)
    return X`<${cs} error=${n} resetError=${a}/>`;
  try {
    return r();
  } catch (s) {
    return console.warn("rendering error: " + s), i(s), X`<${cs} error=${s} resetError=${a}/>`;
  }
}
const Gs = 800, js = 600, D5 = `
  :is(bc-deck, bc-designer) *,
  :is(bc-deck, bc-designer) *::before,
  :is(bc-deck, bc-designer) *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :is(bc-deck, bc-designer) {
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --menubar-h: 44px;
    --bottombar-h: 44px;
    --color-accent: #1d6fd8;
    --color-bg:     #3a3a3c;
    --bc-z-backdrop: 90;
    --bc-z-dropdown: 100;
    --bc-z-dialog:   500;
  }

  .bc-app {
    width:   100%;
    height:  100%;
    display: flex;
    flex-direction: column;
    background: var(--color-bg);
    overflow: hidden;
    position: relative;
  }

  /* ---- menu bar -------------------------------------------------------- */

  .bc-menu-bar {
    flex-shrink: 0;
    height: var(--menubar-h);
    background: #1c1c1e;
    display: flex;
    align-items: center;
    padding: 0 8px;
    gap: 2px;
    position: relative;
    user-select: none;
  }

  .bc-menu-bar-title {        /* a normal flex child between the button groups -
                                so it never overlaps the buttons, just shrinks */
    flex: 1;
    min-width: 0;
    text-align: center;
    padding: 0 8px;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    white-space: nowrap;
    pointer-events: none;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .bc-menu-btn {
    background: transparent;
    border: none;
    color: #fff;
    padding: 5px 9px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-family: inherit;
    display: flex;
    align-items: center;
    gap: 3px;
    white-space: nowrap;
  }
  .bc-menu-btn:hover:not(:disabled)  { background: rgba(255,255,255,0.10); }
  .bc-menu-btn:active:not(:disabled) { background: rgba(255,255,255,0.18); }
  .bc-menu-btn.active                { background: rgba(255,255,255,0.12); }
  .bc-menu-btn:disabled              { opacity: 0.30; cursor: default; }

  .bc-search-input {
    background: rgba(255,255,255,0.14);
    border: none;
    border-radius: 7px;
    padding: 5px 10px;
    color: #fff;
    font-size: 13px;
    width: 150px;
    outline: none;
    font-family: inherit;
  }
  .bc-search-input::placeholder { color: rgba(255,255,255,0.45); }
  .bc-search-input:focus { background: rgba(255,255,255,0.20); }

  /* ---- bc-dropdown -------------------------------------------------------- */

  .bc-dropdown-backdrop {
    position: fixed;
    inset: 0;
    z-index: var(--bc-z-backdrop);
  }

  .bc-dropdown {
    position: absolute;
    top: calc(var(--menubar-h) + 4px);
    background: #2c2c2e;
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 10px;
    padding: 5px;
    min-width: 190px;
    z-index: var(--bc-z-dropdown);
    box-shadow: 0 8px 28px rgba(0,0,0,0.5);
  }

  .bc-dropdown-item {
    padding: 8px 12px;
    color: #fff;
    cursor: pointer;
    border-radius: 6px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .bc-dropdown-item:hover              { background: rgba(255,255,255,0.10); }
  .bc-dropdown-item.disabled           { opacity: 0.38; pointer-events: none; }
  .bc-dropdown-item .bc-checkmark         { color: #0A84FF; font-size: 15px; }
  .bc-dropdown-separator               { height: 1px; background: rgba(255,255,255,0.10); margin: 4px 0; }

  .bc-dropdown-submenu { position: relative; }
  .bc-submenu {
    position: absolute;
    left: 100%; top: -5px;
    background: #2c2c2e;
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 10px;
    padding: 5px;
    min-width: 190px;
    z-index: var(--bc-z-dropdown);
    box-shadow: 0 8px 28px rgba(0,0,0,0.5);
  }
  .bc-dropdown-item.has-submenu::after { content: '▸'; margin-left: auto; opacity: 0.6; }
  .bc-dropdown-item.has-submenu.open   { background: rgba(255,255,255,0.10); }

  /* ---- card area ------------------------------------------------------- */

  .bc-card-area {
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: var(--color-bg);
    container-type: size;
  }

  /* embedded <bc-deck>: no stage chrome - just the deck with its cards
     (the dark backdrop, padding and "paper" look stay in <bc-designer>) */
  .bc-app.bare { background: transparent; }
  .bc-card-area.bare {
    padding: 0;
    background: transparent;
  }

  /* deck-level on('render') output: a deck-wide backdrop sharing the card's
     geometry (sits inside the card wrapper, behind the card canvas) */
  .bc-deck-render {
    overflow: hidden;
  }

  .bc-card-canvas {
    position: absolute;
    top: 0; left: 0;
    background: transparent;   /* default: transparent so the deck render shows through;
                                  the white "paper" + shadow live on the card wrapper */
    border-radius: 3px;
    overflow: hidden;
    transform-origin: top left;
  }

  /* ---- objects --------------------------------------------------------- */

  .bc-widget {
    position: absolute;
    overflow: hidden;
  }

  /* Markdown content needs a deterministic base font-size: its paragraphs have
     no intrinsic size and would otherwise inherit the host page's base (14px in
     the bundled demo page, but 16px by browser default when embedded/standalone),
     which made imported decks render their Markdown larger than the original.
     Headings keep their own sizes from markdown.css (higher specificity). */
  .bc-markdown {
    font-size: 14px;
    line-height: 1.5;
  }

  /* button */
  .bc-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    border: none;
    outline: none;
    user-select: none;
    transition: opacity 0.1s, filter 0.1s;
  }
  .bc-btn:disabled { opacity: 0.4; cursor: default; }
  .bc-btn:active:not(:disabled) { filter: brightness(0.82); }

  .bc-btn.s-rounded-rect {
    background: #1d6fd8; color: #fff; border-radius: 10px;
  }
  .bc-btn.s-rectangle {
    background: #e9e9eb; color: #111; border-radius: 3px; border: 1px solid #aaa;
  }
  .bc-btn.s-shadow {
    background: #f0f0f2; color: #111; border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.30); border: 1px solid #d0d0d5;
  }
  .bc-btn.s-transparent { background: transparent; color: #1d6fd8; }
  .bc-btn.s-oval        { background: #1d6fd8; color: #fff; border-radius: 9999px; }
  .bc-btn.s-standard {
    background: linear-gradient(#f7f7f7, #e0e0e4); color: #222;
    border-radius: 7px; border: 1px solid #bbb;
  }
  .bc-btn.s-checkbox,
  .bc-btn.s-radio {
    background: transparent; color: #111;
    justify-content: flex-start; gap: 8px; font-size: 13px;
  }
  .bc-btn.s-checkbox::before,
  .bc-btn.s-radio::before {
    content: ''; width: 16px; height: 16px;
    border: 2px solid #888; border-radius: 3px; flex-shrink: 0;
  }
  .bc-btn.s-radio::before { border-radius: 50%; }
  .bc-btn.s-checkbox.hilite::before,
  .bc-btn.s-radio.hilite::before { background: #1d6fd8; border-color: #1d6fd8; }

  /* field */
  .bc-field {
    font-family: inherit; font-size: 14px; line-height: 1.55; color: #111;
    padding: 4px 6px; resize: none; white-space: pre-wrap; overflow-wrap: break-word;
  }
  .bc-field.scrollable { overflow-y: auto; }
  .bc-field.no-scroll  { overflow: hidden; }
  .bc-field.s-opaque      { background: #fff; border: 1px solid #ccc; border-radius: 2px; }
  .bc-field.s-transparent { background: transparent; border: none; }
  .bc-field.s-shadow      { background: #fff; border-radius: 3px; box-shadow: 1px 1px 4px rgba(0,0,0,0.25); }
  .bc-field.s-rectangle   { background: #fff; border: 1px solid #888; }
  .bc-field.show-lines {
    background-image: repeating-linear-gradient(
      transparent, transparent calc(1.55em - 1px), #d8d8dc calc(1.55em - 1px), #d8d8dc 1.55em
    );
  }
  textarea.bc-field { resize: none; outline: none; }

  /* shape: SVG content may extend beyond the rect (arrowheads) - both the
     wrapper AND the SVG element itself need "overflow:visible" (SVG clips
     its contents to the viewport by default) */
  .bc-shape     { overflow: visible; }
  .bc-shape svg { overflow: visible; }

  /* picture */
  .bc-picture { width: 100%; height: 100%; }
  .bc-picture.s-scale-aspect-fill { object-fit: cover; }
  .bc-picture.s-scale-aspect-fit  { object-fit: contain; }
  .bc-picture.s-scale-to-fill     { object-fit: fill; }
  .bc-picture.s-actual-size       { object-fit: none; }
  .bc-picture.s-center            { object-fit: none; object-position: center; }


  /* ---- bottom bar ------------------------------------------------------ */

  .bc-bottom-bar {
    flex-shrink: 0; height: var(--bottombar-h); background: #1c1c1e;
    display: flex; align-items: center; justify-content: space-between;
    padding: 0 16px; user-select: none;
  }
  .bc-nav-btn {
    background: transparent; border: none; color: #fff; font-size: 20px;
    padding: 4px 10px; border-radius: 5px; cursor: pointer;
    line-height: 1; font-family: inherit;
  }
  .bc-nav-btn:hover:not(:disabled)  { background: rgba(255,255,255,0.10); }
  .bc-nav-btn:active:not(:disabled) { background: rgba(255,255,255,0.18); }
  .bc-nav-btn:disabled { opacity: 0.30; cursor: default; }
  .bc-nav-btn.active   { background: rgba(255,255,255,0.14); }
  .bc-bottom-bar-center  { display: flex; gap: 4px; }
  .bc-bottom-bar-history { display: flex; gap: 4px; }
  .bc-card-counter {
    font-size: 12px; color: rgba(255,255,255,0.55);
    min-width: 80px; text-align: center;
  }
  .bc-mcp-dot {
    width: 8px; height: 8px; border-radius: 50%;
    display: inline-block; flex-shrink: 0;
    margin-left: 6px;
  }

  /* ---- bc-dialog ---------------------------------------------------------- */

  .bc-dialog-backdrop {           /* absolute: scoped to the BC element only */
    position: absolute; inset: 0; background: rgba(0,0,0,0.6); z-index: var(--bc-z-dialog);
    display: flex; align-items: center; justify-content: center;
  }
  .bc-dialog {
    background: #2c2c2e; border-radius: 14px; padding: 24px 20px 16px;
    min-width: 300px; max-width: 440px; color: #fff;
    box-shadow: 0 20px 60px rgba(0,0,0,0.65);
  }
  .bc-dialog-title { font-size: 17px; font-weight: 600; text-align: center; margin-bottom: 8px; }
  .bc-dialog-msg   { font-size: 14px; color: rgba(255,255,255,0.80); text-align: center; margin-bottom: 16px; }
  .bc-dialog-input {
    width: 100%; background: rgba(255,255,255,0.10); border: 1px solid rgba(255,255,255,0.18);
    border-radius: 8px; padding: 10px 12px; color: #fff; font-size: 15px;
    font-family: inherit; outline: none; margin-bottom: 14px;
  }
  .bc-dialog-input:focus { border-color: rgba(255,255,255,0.35); }
  .bc-dialog-buttons { display: flex; gap: 8px; justify-content: flex-end; }
  .bc-dialog-btn {
    padding: 8px 18px; border-radius: 8px; border: none; cursor: pointer;
    font-size: 14px; font-weight: 500; font-family: inherit;
  }
  .bc-dialog-btn.primary   { background: #1d6fd8; color: #fff; }
  .bc-dialog-btn.secondary { background: rgba(255,255,255,0.12); color: #fff; }
  .bc-dialog.bc-dialog-wide { min-width: 480px; max-width: 680px; width: 90%; }
  .bc-dialog-textarea {
    width: 100%; height: 280px; background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.18); border-radius: 8px;
    padding: 10px 12px; color: #fff; font-size: 12px; font-family: monospace;
    outline: none; margin-bottom: 14px; resize: vertical; box-sizing: border-box;
  }
  .bc-dialog-textarea:focus { border-color: rgba(255,255,255,0.35); }

  /* ---- edit mode ------------------------------------------------------- */

  .bc-main-area {
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    min-height: 0;
  }

  .bc-edit-layer {
    position: absolute;
    inset: 0;
    z-index: 9000;
  }

  .bc-edit-hit {
    position: absolute;
    cursor: move;
    background: transparent;
    touch-action: none;              /* let pointer drags work on touch devices */
    -webkit-touch-callout: none;     /* suppress iOS long-press callout */
    user-select: none;
  }
  .bc-edit-hit.invisible { outline: 1px dashed rgba(0,0,0,0.30); }

  .bc-selection-frame {
    position: absolute;
    outline: 2px solid #0A84FF;
    pointer-events: none;
    z-index: 9500;
  }
  .bc-selection-member {
    position: absolute;
    outline: 1px solid #0A84FF;
    pointer-events: none;
    z-index: 9400;
  }
  .bc-marquee {
    position: absolute;
    border: 1px solid #0A84FF;
    background: rgba(10,132,255,0.12);
    pointer-events: none;
    z-index: 9600;
  }
  .bc-handle {
    position: absolute;
    background: #fff;
    border: 1px solid #0A84FF;
    border-radius: 2px;
    pointer-events: auto;
    touch-action: none;              /* let pointer drags work on touch devices */
    -webkit-touch-callout: none;     /* suppress iOS long-press callout */
    user-select: none;
  }

  .bc-props-panel {
    flex-shrink: 0;
    width: 260px;
    background: #1c1c1e;
    border-left: 1px solid rgba(255,255,255,0.10);
    color: #fff;
    font-size: 12px;
    overflow-y: auto;
    padding: 12px;
  }
  .bc-props-title    { font-size: 14px; font-weight: 600; }
  .bc-props-subtitle { font-size: 11px; color: rgba(255,255,255,0.45); margin-bottom: 8px; }
  .bc-props-empty    { color: rgba(255,255,255,0.55); font-size: 12px; padding-top: 20px; text-align: center; }
  .bc-props-section  {
    font-size: 10px; text-transform: uppercase; letter-spacing: 1px;
    color: rgba(255,255,255,0.40); margin: 14px 0 6px;
    border-bottom: 1px solid rgba(255,255,255,0.10); padding-bottom: 3px;
  }
  .bc-props-row {
    display: flex; align-items: center; gap: 6px; margin-bottom: 5px;
  }
  .bc-props-row.column { flex-direction: column; align-items: stretch; }
  .bc-props-row label {
    flex: 0 0 80px; color: rgba(255,255,255,0.65); font-size: 11px;
  }
  .bc-props-row.column label { flex: none; }
  .bc-props-row input[type="text"],
  .bc-props-row input[type="number"],
  .bc-props-row select,
  .bc-props-row textarea {
    flex: 1; min-width: 0;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 5px;
    color: #fff; font-size: 11px; font-family: inherit;
    padding: 4px 6px; outline: none;
  }
  .bc-props-row textarea {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    resize: vertical;
  }
  .bc-props-row input[type="color"] {
    width: 26px; height: 22px; flex: none;
    padding: 0; border: none; background: transparent; cursor: pointer;
  }
  .bc-props-row input.bc-props-opacity {       /* the opacity (%) field next to a colour picker */
    flex: 0 0 48px;
  }
  .bc-props-row input[type="checkbox"] { accent-color: #0A84FF; }
  .bc-props-row select option { background: #2c2c2e; }
  .bc-props-hint { font-size: 10px; color: rgba(255,255,255,0.35); margin-top: 2px; }
  .bc-props-btn {
    flex: 1;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 5px;
    color: #fff; font-size: 12px; font-family: inherit;
    padding: 4px 0; cursor: pointer;
  }
  .bc-props-btn:hover { background: rgba(255,255,255,0.18); }
  .bc-props-btn.copy { width: 100%; margin-top: 16px; padding: 7px 0; }
  .bc-props-btn.delete {
    width: 100%; margin-top: 6px; padding: 7px 0;
    background: rgba(255,69,58,0.16); border-color: rgba(255,69,58,0.40);
    color: #ff6961;
  }
  .bc-props-btn.delete:hover { background: rgba(255,69,58,0.28); }

  /* ---- decks panel ---------------------------------------------------- */

  .bc-decks-panel {
    position: absolute;
    left: 0; top: var(--menubar-h); bottom: var(--bottombar-h);
    width: 250px;
    display: flex; flex-direction: column;
    background: #1c1c1e;
    border-right: 1px solid rgba(255,255,255,0.12);
    box-shadow: 8px 0 28px rgba(0,0,0,0.45);
    z-index: var(--bc-z-dropdown);
    user-select: none;
  }
  .bc-decks-panel.bc-cards-wide { width: 500px; }
  .bc-decks-header {
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: space-between;
    padding: 8px 8px 8px 12px;
    color: rgba(255,255,255,0.55);
    font-size: 11px; text-transform: uppercase; letter-spacing: 1px;
  }
  .bc-decks-list { flex: 1; overflow-y: auto; padding: 0 6px 8px; }
  .bc-decks-item {
    display: flex; align-items: center; gap: 2px;
    padding: 4px 6px; margin-bottom: 2px;
    color: #fff; font-size: 13px;
    border-radius: 6px;
  }
  .bc-decks-item:hover  { background: rgba(255,255,255,0.08); }
  .bc-decks-item.active { background: rgba(29,111,216,0.35); }
  .bc-decks-name {
    flex: 1; min-width: 0;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
    cursor: pointer; padding: 3px 2px;
  }
  .bc-decks-item.active .bc-decks-name { cursor: default; }
  .bc-decks-empty {
    color: rgba(255,255,255,0.40); font-size: 12px;
    text-align: center; padding: 16px 0;
  }
  .bc-decks-new {
    flex-shrink: 0; margin: 0 10px 10px;
    background: rgba(255,255,255,0.10);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 6px;
    color: #fff; font-size: 12px; font-family: inherit;
    padding: 6px 0; cursor: pointer;
  }
  .bc-decks-new:hover { background: rgba(255,255,255,0.18); }
  .bc-decks-remember {
    flex-shrink: 0; display: flex; align-items: center; gap: 7px;
    margin: 2px 12px 10px; cursor: pointer;
    color: rgba(255,255,255,0.65); font-size: 11px;
    border-top: 1px solid rgba(255,255,255,0.10); padding-top: 9px;
  }
  .bc-decks-remember input[type="checkbox"] { accent-color: #0A84FF; cursor: pointer; }

  /* ---- card browser ----------------------------------------------------- */

  .bc-cards-item {
    display: flex; flex-direction: column;
    padding: 6px; margin-bottom: 4px;
    border-radius: 8px;
    border: 1px solid transparent;
  }
  .bc-cards-item:hover  { background: rgba(255,255,255,0.06); }
  .bc-cards-item.active {
    background: rgba(29,111,216,0.22);
    border-color: rgba(29,111,216,0.55);
  }
  .bc-cards-main {
    display: flex; align-items: center; gap: 10px;
    cursor: pointer; min-width: 0;
  }
  .bc-cards-item.active .bc-cards-main { cursor: default; }
  .bc-cards-twisty {
    flex-shrink: 0; width: 30px; text-align: center;
    color: rgba(255,255,255,0.8); font-size: 30px; line-height: 1;
    cursor: pointer; user-select: none;
  }
  .bc-cards-twisty:hover { color: #fff; }
  .bc-cards-twisty.disabled {
    color: rgba(255,255,255,0.2); cursor: default;
  }
  .bc-cards-twisty.disabled:hover { color: rgba(255,255,255,0.2); }
  .bc-card-thumb {
    position: relative; overflow: hidden; flex-shrink: 0;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }
  .bc-cards-info { flex: 1; min-width: 0; }
  .bc-cards-name {
    color: #fff; font-size: 13px;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  .bc-cards-sub  { color: rgba(255,255,255,0.45); font-size: 10px; }
  .bc-cards-actions {
    display: flex; justify-content: flex-end; gap: 2px;
    margin-top: 3px;
  }
  .bc-cards-actions button:disabled { opacity: 0.30; cursor: default; }

  /* ---- editor window --------------------------------------------------- */

  .bc-editor-backdrop {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.35);
    z-index: 450;
  }
  .bc-editor-window {
    position: fixed;
    display: flex; flex-direction: column;
    background: #2c2c2e;
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,0.65);
    z-index: 460;
    overflow: hidden;
  }
  .bc-editor-header {
    flex-shrink: 0;
    padding: 9px 14px;
    background: #1c1c1e;
    color: #fff; font-size: 13px; font-weight: 600;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
    cursor: move; user-select: none;
    touch-action: none;
  }
  .bc-editor-textarea {
    flex: 1; min-height: 0;
    margin: 10px 12px 0; padding: 8px 10px;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 8px;
    color: #fff;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 12px; line-height: 1.5;
    resize: none; outline: none;
    white-space: pre; overflow: auto;
  }
  .bc-editor-footer {
    flex-shrink: 0;
    display: flex; align-items: center; gap: 8px;
    padding: 10px 12px;
  }
  .bc-editor-hint {
    flex: 1;
    color: rgba(255,255,255,0.35); font-size: 10px;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .bc-editor-resizer {
    position: absolute; right: 0; bottom: 0;
    width: 18px; height: 18px;
    cursor: nwse-resize;
    touch-action: none;
    background:
      linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.35) 60%, transparent 60%,
                      transparent 70%, rgba(255,255,255,0.35) 70%, rgba(255,255,255,0.35) 80%, transparent 80%);
  }

  .bc-props-rowheader {
    display: flex; align-items: center; justify-content: space-between;
    width: 100%;
  }
  .bc-props-rowheader label { flex: 1; }
  .bc-props-expand {
    background: transparent; border: none; cursor: pointer;
    color: #4ca2ff; font-size: 13px; line-height: 1;
    padding: 1px 4px; border-radius: 4px;
  }
  .bc-props-expand:hover { background: rgba(255,255,255,0.12); }

  /* ---- console --------------------------------------------------------- */

  .bc-console {
    flex-shrink: 0;
    height: 140px;
    display: flex; flex-direction: column;
    background: #111113;
    border-top: 1px solid rgba(255,255,255,0.12);
  }
  .bc-console-header {
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: space-between;
    padding: 3px 10px;
    color: rgba(255,255,255,0.55);
    font-size: 11px; text-transform: uppercase; letter-spacing: 1px;
    user-select: none;
  }
  .bc-console-btn {
    background: transparent; border: none; cursor: pointer;
    color: rgba(255,255,255,0.65); font-size: 12px; font-family: inherit;
    padding: 2px 8px; border-radius: 4px;
  }
  .bc-console-btn:hover { background: rgba(255,255,255,0.10); color: #fff; }
  .bc-console-output {
    flex: 1; overflow: auto; margin: 0;
    padding: 4px 10px 8px;
    color: #9ee49e;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 11px; line-height: 1.5;
    white-space: pre-wrap; overflow-wrap: break-word;
  }
`;
let ba = 0, Ks = !1;
const oi = /* @__PURE__ */ new Set();
let Zs = !1, ra = 0, Fc = 0;
const F5 = 8, P5 = 50;
function V5() {
  return ba > 0;
}
function Xs() {
  ra = 0, Ks = !1;
}
function H5() {
  Zs || (Zs = !0, queueMicrotask(q5));
}
function q5() {
  if (Zs = !1, oi.size === 0) {
    Xs();
    return;
  }
  const r = Date.now();
  if (r - Fc > P5 && Xs(), Fc = r, ra >= F5) {
    Ks || (Ks = !0, console.warn(
      '[BrowserCard] a reactive property keeps changing on every render pass - further re-renders were suppressed to prevent an infinite render loop. Move such writes into on("ready") or an event handler, or change the value only when it really differs.'
    )), oi.clear(), ra = 0;
    return;
  }
  ra++;
  const e = [...oi];
  oi.clear();
  for (const t of e)
    t();
}
function Po(r) {
  return r != null && typeof r == "object" && r[Ba] === !0;
}
function d0(r) {
  if (ba > 0) {
    oi.add(r), H5();
    return;
  }
  Xs(), r();
}
var Cr, xi, c0, R0, ya, yi, ka, E1, ki, u0, O0;
const kt = class kt {
  constructor() {
    Qe(this, Cr, /* @__PURE__ */ new Map());
    /**** linkToParent — registers a provider of the next Visual up the hierarchy ****/
    //    the provider is evaluated lazily (on every "triggered" call), so the parent
    //    Instance need not exist yet at the time the link is established
    Qe(this, ki, null);
    /**** after/every — timers which are cleared automatically on teardown ****/
    Qe(this, u0, /* @__PURE__ */ new Set());
    Qe(this, O0, /* @__PURE__ */ new Set());
  }
  /**** on — registers a message handler (called from within a script) ****/
  on(e, t) {
    B(this, Cr).set(e, t);
  }
  /**** run — evaluates the script asynchronously; clears old handlers first ****/
  async run(e, t, n) {
    var i;
    if (B(this, Cr).clear(), !!(e != null && e.trim()) && !ue(i = kt, ka, E1).call(i))
      try {
        await new Function(...t, `return (async () => {
${e}
})()`)(...n);
      } catch (a) {
        console.warn("[BrowserCard] script error:", a);
      }
  }
  linkToParent(e) {
    Me(this, ki, e);
  }
  /**** triggered — invokes the matching handler, bubbling up if none is found ****/
  //    a matching handler is first looked for in the current Visual - if present,
  //    it is called and its result returned. otherwise the search continues (recur-
  //    sively) one level up (widgets search in the active card, cards in the deck).
  //    without any handler the result is "undefined". an exception thrown by a
  //    handler is forwarded to the original trigger
  async triggered(e, ...t) {
    var a;
    const n = B(this, Cr).get(e);
    if (n != null)
      return await n(...t);
    const i = (a = B(this, ki)) == null ? void 0 : a.call(this);
    if (i != null)
      return await i.triggered(e, ...t);
  }
  /**** trigger — synonym for "triggered" ****/
  trigger(e, ...t) {
    return this.triggered(e, ...t);
  }
  /**** fireLocal — invokes a local handler only (no bubbling); used for lifecycle ****/
  async fireLocal(e, ...t) {
    const n = B(this, Cr).get(e);
    if (n != null)
      try {
        await n(...t);
      } catch (i) {
        console.warn(`[BrowserCard] handler "${e}" error:`, i);
      }
  }
  /**** renderResult — synchronously invokes the 'render' handler ****/
  renderResult() {
    ba++;
    try {
      const e = B(this, Cr).get("update");
      if (e != null)
        try {
          e();
        } catch (n) {
          console.warn("[BrowserCard] update handler error:", n);
        }
      const t = B(this, Cr).get("render");
      if (t == null)
        return null;
      try {
        return t();
      } catch (n) {
        return console.warn("[BrowserCard] render handler error:", n), null;
      }
    } finally {
      ba--;
    }
  }
  after(e, t) {
    const n = setTimeout(() => {
      B(this, u0).delete(n), t();
    }, e);
    return B(this, u0).add(n), n;
  }
  every(e, t) {
    const n = setInterval(t, e);
    return B(this, O0).add(n), n;
  }
  /**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/
  async teardown() {
    const e = B(this, Cr).get("obsolete");
    B(this, Cr).clear();
    const t = [...B(this, u0)];
    B(this, u0).clear();
    const n = [...B(this, O0)];
    if (B(this, O0).clear(), t.forEach((i) => clearTimeout(i)), n.forEach((i) => clearInterval(i)), e != null)
      try {
        await e();
      } catch (i) {
        console.warn('[BrowserCard] handler "obsolete" error:', i);
      }
  }
};
Cr = new WeakMap(), xi = new WeakMap(), c0 = new WeakMap(), R0 = new WeakMap(), ya = new WeakMap(), yi = new WeakMap(), ka = new WeakSet(), E1 = function() {
  const e = Date.now();
  return e - B(kt, xi) > B(kt, yi) && (Me(kt, xi, e), Me(kt, c0, 0), Me(kt, R0, !1)), Pa(kt, c0)._++, B(kt, c0) > B(kt, ya) ? (B(kt, R0) || (Me(kt, R0, !0), console.warn(
    "[BrowserCard] runaway script loop detected (" + B(kt, c0) + " script runs within " + B(kt, yi) + ' ms) - script execution was suspended to keep the app responsive. A script is most likely changing state during render or on("ready") in a way that re-triggers itself.'
  )), !0) : !1;
}, ki = new WeakMap(), u0 = new WeakMap(), O0 = new WeakMap(), Qe(kt, ka), /**** runaway-loop circuit breaker ****/
//    A script that changes state during render/'ready' can make the host
//    re-render or remount the Visual, which re-runs the script - an infinite
//    loop that freezes the tab (each remount even creates a fresh instance, so a
//    per-instance guard cannot see it). We cannot interrupt a synchronous loop,
//    but we CAN stop feeding it: if scripts are (re-)run far more often than any
//    legitimate deck would in a short window, we suspend execution for the rest
//    of that window and warn once. Normal mounts/edits run a script only a
//    handful of times, so the threshold is never reached in healthy use.
Qe(kt, xi, 0), Qe(kt, c0, 0), Qe(kt, R0, !1), Qe(kt, ya, 1e3), Qe(kt, yi, 1e3);
let q0 = kt;
const Ni = /* @__PURE__ */ new Map();
function W5(r, e) {
  return /^https?:\/\//i.test(r) ? r : r.startsWith("/") ? window.location.origin + r : r.includes("/") || r.includes(".") ? new URL(r, window.location.href).href : `https://rozek.github.io/browser-card/behaviors/${e === "deck" ? "decks" : e === "card" ? "cards" : "widgets"}/${r}.js`;
}
function va(r, e, t, n) {
  const i = r.on.bind(r), a = r.after.bind(r), s = r.every.bind(r), o = r.trigger.bind(r), l = r.triggered.bind(r), d = n != null ? Object.keys(n) : [], h = n != null ? Object.values(n) : [], f = {
    on: i,
    me: e.me,
    html: e.html,
    trigger: o,
    triggered: l
  }, m = [
    "on",
    "after",
    "every",
    "trigger",
    "triggered",
    ...Object.keys(e),
    ...d,
    "behaveLike"
  ], v = [
    i,
    a,
    s,
    o,
    l,
    ...Object.values(e),
    ...h,
    null
  ];
  let k = !1;
  async function T(I) {
    if (k) {
      console.warn("[BrowserCard] behaveLike: only one behavior per Visual allowed");
      return;
    }
    k = !0;
    try {
      const O = Ni.get(I);
      if (O != null) {
        await O(f);
        return;
      }
      const W = await import(W5(I, t));
      if (typeof W.default == "function") {
        const Y = {};
        m.forEach((ne, M) => {
          Y[ne] = v[M];
        }), await W.default(Y);
      }
    } catch (O) {
      throw k = !1, O;
    }
  }
  return v[v.length - 1] = T, { Params: m, Args: v };
}
function us(r, e, t, n, i, a, s, o) {
  function l(f, m) {
    return { __navType: f, ...m };
  }
  function d(f) {
    if (typeof f == "string")
      return { type: "card-name", name: f };
    if (typeof f == "number")
      return { type: "card-index", index: f };
    if (f == null || typeof f != "object")
      return { type: "next" };
    const m = f;
    switch (m.__navType) {
      case "next":
        return { type: "next" };
      case "prev":
        return { type: "prev" };
      case "first":
        return { type: "first" };
      case "last":
        return { type: "last" };
      case "card-name":
        return { type: "card-name", name: m.__name };
      case "card-id":
        return { type: "card-id", id: m.__id };
      case "card-index":
        return { type: "card-index", index: m.__index };
      default:
        return { type: "next" };
    }
  }
  function h(f) {
    var v;
    const m = ((v = t == null ? void 0 : t.Card) == null ? void 0 : v.WidgetList) ?? [];
    return typeof f == "string" ? m.find((k) => k.Name === f) ?? null : typeof f == "number" ? m[f] ?? null : null;
  }
  return {
    go(f) {
      n(d(f));
    },
    openURL(f) {
      window.open(f, "_blank", "noopener,noreferrer");
    },
    answer(f, ...m) {
      return new Promise(
        (v) => i(f, m.length ? m : ["OK"], v)
      );
    },
    ask(f, m = "") {
      return new Promise(
        (v) => a(f, m, v)
      );
    },
    Card(f) {
      return typeof f == "string" ? e.find((m) => m.Name === f) ? l("card-name", { __name: f }) : null : typeof f == "number" && f >= 0 && f < e.length ? l("card-index", { __index: f }) : null;
    },
    CardCount() {
      return e.length;
    },
    Widget: h,
    print: s.print,
    println: s.println,
    clearConsole: s.clearConsole,
    defineLocalBehavior(f, m) {
      const v = typeof m == "function" ? m.toString() : String(m ?? "");
      return (r.localBehaviors ?? (r.localBehaviors = {}))[f] = v, v;
    },
    localBehavior(f) {
      var v;
      const m = (v = r.localBehaviors) == null ? void 0 : v[f];
      return m == null && Vn(
        "NoSuchBehavior: no local behavior named " + S.quoted(f) + " has been defined"
      ), "data:text/javascript;charset=utf-8," + encodeURIComponent("export default " + m);
    },
    saveDeck() {
      return Promise.resolve(o == null ? void 0 : o());
    },
    me: t,
    my: t,
    // "me", "my" and "I" are synonyms
    I: t,
    nextCard: l("next"),
    prevCard: l("prev"),
    firstCard: l("first"),
    lastCard: l("last"),
    html: X,
    // intentionally lowercase (see BC_ScriptContext)
    preact: f1
  };
}
const U5 = `{"Id":"bc-deck-229","Name":"BrowserCard-Pitch","readOnly":false,"swipeToAdjacentCard":true,"Script":"","Cards":[{"Id":"bc-card-230","Name":"Card 1","Color":null,"Alpha":1,"dontSearch":false,"Script":"","Widgets":[{"Id":"bc-widget-231","Name":"TitleView 2","Number":1,"Type":"generic","zIndex":1,"Anchors":["left-width","top-height"],"Offsets":[10,150,10,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"BrowserCard"},{"Id":"bc-widget-232","Name":"Label 2","Number":2,"Type":"generic","zIndex":2,"Anchors":["left-width","top-height"],"Offsets":[10,360,50,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"Play with Code and Data directly in the Browser"},{"Id":"bc-widget-233","Name":"StickyTextNote 2","Number":3,"Type":"generic","zIndex":3,"Anchors":["left-width","top-height"],"Offsets":[10,100,90,70],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/StickyTextNote.js')","Configuration":{},"Value":"Hello, World!"},{"Id":"bc-widget-234","Name":"TextView 2","Number":4,"Type":"generic","zIndex":4,"Anchors":["left-width","top-height"],"Offsets":[120,150,80,80],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"at first, it looks like yet another tool for \\"sticky notes\\", but..."},{"Id":"bc-widget-235","Name":"TextView 3","Number":5,"Type":"generic","zIndex":5,"Anchors":["left-width","top-height"],"Offsets":[10,160,170,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"you can add arbitrary media, such as images..."},{"Id":"bc-widget-236","Name":"Widget 2","Number":6,"Type":"generic","zIndex":6,"Anchors":["left-width","top-height"],"Offsets":[180,40,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"w","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-237","Name":"ImageView 2","Number":7,"Type":"generic","zIndex":7,"Anchors":["left-width","top-height"],"Offsets":[10,100,230,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/ImageView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://rozek.github.io/browser-card/dist/img/Mandelbrot_240x240.png"},{"Id":"bc-widget-238","Name":"TextView 4","Number":8,"Type":"generic","zIndex":8,"Anchors":["left-width","top-height"],"Offsets":[120,160,290,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...complete web pages..."},{"Id":"bc-widget-239","Name":"Widget 3","Number":9,"Type":"generic","zIndex":9,"Anchors":["left-width","top-height"],"Offsets":[120,40,250,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"s","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-240","Name":"TextView 5","Number":10,"Type":"generic","zIndex":10,"Anchors":["left-width","top-height"],"Offsets":[160,140,230,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...dynamic content..."},{"Id":"bc-widget-241","Name":"WebView 2","Number":11,"Type":"generic","zIndex":11,"Anchors":["left-width","top-height"],"Offsets":[10,330,350,240],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/WebView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://www.rozek.de"},{"Id":"bc-widget-242","Name":"Widget 4","Number":12,"Type":"generic","zIndex":12,"Anchors":["left-width","top-height"],"Offsets":[290,30,230,110],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-243","Name":"SubtitleView 2","Number":13,"Type":"generic","zIndex":13,"Anchors":["left-width","top-height"],"Offsets":[270,100,200,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/SubtitleView.js')\\n\\non('ready', () => {\\n  const padded = (n) => String(n).padStart(2,'0')\\n  function updateClock () {\\n    const now = new Date()\\n    my.Value = (\\n      padded(now.getHours())   + ':' + \\n      padded(now.getMinutes()) + ':' + \\n      padded(now.getSeconds())\\n    )\\n  }\\n  updateClock()                          // show immediately, then keep current\\n  every(1000, updateClock)\\n})","Configuration":{},"Value":"08:23:07"},{"Id":"bc-widget-244","Name":"Widget 5","Number":14,"Type":"generic","zIndex":14,"Anchors":["left-width","top-height"],"Offsets":[300,60,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"e","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-245","Name":"TextView 6","Number":15,"Type":"generic","zIndex":15,"Anchors":["left-width","top-height"],"Offsets":[370,170,140,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...and even input controls!"},{"Id":"bc-widget-246","Name":"TextlineInput 2","Number":16,"Type":"generic","zIndex":16,"Anchors":["left-width","top-height"],"Offsets":[370,170,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeTextlineInput.js')\\n\\nmy.Value = undefined\\n\\non('update', () => {\\n  my.Value = my.Card.QRCodeValue\\n})\\n\\non('change', (Value) => {\\n  my.Card.QRCodeValue = Value\\n})\\n","Configuration":{"Placeholder":"(enter text for QR code)"},"Value":""},{"Id":"bc-widget-247","Name":"Widget 6","Number":17,"Type":"generic","zIndex":17,"Anchors":["left-width","top-height"],"Offsets":[370,30,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-248","Name":"TextView 7","Number":18,"Type":"generic","zIndex":18,"Anchors":["left-width","top-height"],"Offsets":[400,160,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Widgets automatically react on state changes"},{"Id":"bc-widget-249","Name":"Widget 7","Number":19,"Type":"generic","zIndex":19,"Anchors":["left-width","top-height"],"Offsets":[550,50,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"e","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-250","Name":"TextView 8","Number":20,"Type":"generic","zIndex":20,"Anchors":["left-width","top-height"],"Offsets":[370,210,280,120],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Use scripting to freely experiment with code and data - a bit like a 2D REPL or like interactive computing notebooks (without the need for a server)"},{"Id":"bc-widget-251","Name":"Widget 8","Number":21,"Type":"generic","zIndex":21,"Anchors":["left-width","top-height"],"Offsets":[370,30,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-252","Name":"TextView 9","Number":22,"Type":"generic","zIndex":22,"Anchors":["left-width","top-height"],"Offsets":[400,140,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Craft complete tools, if you like"},{"Id":"bc-widget-253","Name":"TitleView 3","Number":23,"Type":"generic","zIndex":23,"Anchors":["left-width","top-height"],"Offsets":[360,250,470,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"Temperature Converter"},{"Id":"bc-widget-254","Name":"Label 3","Number":24,"Type":"generic","zIndex":24,"Anchors":["left-width","top-height"],"Offsets":[370,100,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Celsius:"},{"Id":"bc-widget-255","Name":"Label 4","Number":25,"Type":"generic","zIndex":25,"Anchors":["left-width","top-height"],"Offsets":[370,100,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Fahrenheit:"},{"Id":"bc-widget-256","Name":"NumberInput 2","Number":26,"Type":"generic","zIndex":26,"Anchors":["left-width","top-height"],"Offsets":[470,120,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = my.Card.Temperature ?? 0\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = Value\\n})","Configuration":{},"Value":5},{"Id":"bc-widget-257","Name":"NumberInput 3","Number":27,"Type":"generic","zIndex":27,"Anchors":["left-width","top-height"],"Offsets":[470,120,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = (my.Card.Temperature ?? 0) * 9/5 + 32\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = (Value-32) * 5/9\\n})","Configuration":{},"Value":41},{"Id":"bc-widget-258","Name":"Widget","Number":28,"Type":"generic","zIndex":28,"Anchors":["left-width","top-height"],"Offsets":[610,80,480,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-259","Name":"TextView 10","Number":29,"Type":"generic","zIndex":29,"Anchors":["left-width","top-height"],"Offsets":[590,200,380,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Now export your work as a self-contained web page and BrowserCard serves as a low-code application generator!"},{"Id":"bc-widget-260","Name":"Widget-2","Number":30,"Type":"generic","zIndex":30,"Anchors":["left-width","top-height"],"Offsets":[610,160,150,160],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/QRCodeView.js')\\n\\nconst DefaultValue = 'https://github.com/rozek/browser-card'\\n\\nmy.Value = DefaultValue\\n\\non('update', () => {\\n  const Value = my.Card.QRCodeValue\\n  my.Value = (Value == null) || (Value === '') ? DefaultValue : Value\\n})\\n","Configuration":{"ErrorCorrection":"M","Border":4,"Color":"#000000","Background":"#ffffff"},"Value":"https://github.com/rozek/browser-card"},{"Id":"bc-widget-261","Name":"Widget 9","Number":31,"Type":"generic","zIndex":31,"Anchors":["left-width","top-height"],"Offsets":[670,30,320,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-262","Name":"HTMLView","Number":32,"Type":"generic","zIndex":32,"Anchors":["left-width","top-height"],"Offsets":[630,120,340,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/HTMLView.js')","Configuration":{},"Value":"<span style=\\"font-weight:bold; font-size:18px\\">Have &nbsp; &nbsp; Fun!</span>"},{"Id":"bc-widget-263","Name":"TextView 11","Number":33,"Type":"generic","zIndex":33,"Anchors":["left-width","top-height"],"Offsets":[530,260,30,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"BrowserCard started as a small test for Anthropic Fable 5 (while it was available for non-US citizens), but soon turned out to be quite useful - try yourself!"},{"Id":"bc-widget-264","Name":"Widget 10","Number":34,"Type":"generic","zIndex":34,"Anchors":["left-width","top-height"],"Offsets":[280,240,70,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"ne","ArrowHeads":"end","Color":"#000000","Thickness":2}}],"Temperature":5,"QRCodeValue":""}],"SnapToGrid":true,"CardWidth":800,"CardHeight":600}`, z1 = JSON.parse(U5), G5 = JSON.stringify(z1), Zt = vu("browser-card", "decks"), ri = "bc-deck:", Js = "bc-remember-deck", wa = "bc-last-deck";
function Vo() {
  try {
    return localStorage.getItem(Js) === "1";
  } catch {
    return !1;
  }
}
function j5(r) {
  try {
    Vo() && r !== "" && localStorage.setItem(wa, r);
  } catch {
  }
}
function K5(r, e) {
  try {
    r ? (localStorage.setItem(Js, "1"), e !== "" && localStorage.setItem(wa, e)) : (localStorage.removeItem(Js), localStorage.removeItem(wa));
  } catch {
  }
}
function xa(r) {
  return (
    // "Id" is runtime-only - assigned on load
    S.ValueIsPlainObject(r) && S.ValueIsString(r.Type) && Oo(r.Anchors) && Bo(r.Offsets)
  );
}
function Da(r) {
  return (
    // "Id" is runtime-only - assigned on load
    S.ValueIsPlainObject(r) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Widgets) && r.Widgets.every(xa) && // optional nested child cards (schema A)
    (r.CardList == null || S.ValueIsArray(r.CardList) && r.CardList.every(Da))
  );
}
function Br(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Cards) && r.Cards.length >= 1 && // a deck must have at least one card
  r.Cards.every(Da);
}
function Rn(r, e = "Card") {
  const t = String(r ?? "").replace(/\//g, "");
  return t === "" ? e : t;
}
function je(r) {
  const e = [], t = /* @__PURE__ */ new Set(), n = (i) => {
    if (i != null)
      for (const a of i)
        t.has(a) || (t.add(a), e.push(a), n(a.CardList));
  };
  return n(r.Cards), e;
}
function vi(r) {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), n = (i, a, s, o) => {
    if (i != null)
      for (const l of i) {
        if (t.has(l))
          continue;
        t.add(l);
        const d = o === "" ? l.Name : o + "/" + l.Name;
        e.set(l.Id, { Card: l, Parent: a, Depth: s, Path: d }), n(l.CardList, l, s + 1, d);
      }
  };
  return n(r.Cards, null, 0, ""), e;
}
function Ys(r, e) {
  var t;
  return ((t = vi(r).get(e.Id)) == null ? void 0 : t.Path) ?? e.Name;
}
function Z5(r, e, t) {
  for (const n of t)
    if (r.startsWith(n + "/") && !e.startsWith(n + "/"))
      return !0;
  return !1;
}
function _r(r, e) {
  var t;
  if (r.Cards.some((n) => n.Id === e))
    return r.Cards;
  for (const n of je(r))
    if ((t = n.CardList) != null && t.some((i) => i.Id === e))
      return n.CardList;
  return null;
}
function R1(r, e, t) {
  var a, s;
  if (t == null)
    return !1;
  if (t === e)
    return !0;
  const n = vi(r);
  let i = t;
  for (; i != null; ) {
    if (i === e)
      return !0;
    i = ((s = (a = n.get(i)) == null ? void 0 : a.Parent) == null ? void 0 : s.Id) ?? null;
  }
  return !1;
}
function O1(r, e, t, n) {
  if (R1(r, e, t))
    return !1;
  const i = _r(r, e);
  if (i == null)
    return !1;
  const a = i.findIndex((d) => d.Id === e);
  if (a < 0)
    return !1;
  let s;
  if (t == null)
    s = r.Cards;
  else {
    const d = je(r).find((h) => h.Id === t);
    if (d == null)
      return !1;
    s = d.CardList ?? (d.CardList = []);
  }
  const [o] = i.splice(a, 1), l = Math.max(0, Math.min(s.length, Math.round(n)));
  return s.splice(l, 0, o), !0;
}
const Qs = "web application/x-browsercard-card", eo = "web application/x-browsercard-widget";
async function Pc(r, e) {
  try {
    const t = r.replace(/^web /, ""), n = new ClipboardItem({
      [r]: new Blob([e], { type: t }),
      "text/plain": new Blob([e], { type: "text/plain" })
    });
    return await navigator.clipboard.write([n]), !0;
  } catch (t) {
    console.warn("[BrowserCard] falling back to a plain text clipboard:", t);
  }
  try {
    return await navigator.clipboard.writeText(e), !0;
  } catch (t) {
    return console.warn("[BrowserCard] could not write to the clipboard:", t), !1;
  }
}
async function X5() {
  try {
    const r = await navigator.clipboard.read();
    for (const e of r) {
      if (e.types.includes(Qs))
        return { Kind: "card", Serialization: await (await e.getType(Qs)).text() };
      if (e.types.includes(eo))
        return { Kind: "widget", Serialization: await (await e.getType(eo)).text() };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not inspect the clipboard - trying plain text:", r);
  }
  try {
    const r = (await navigator.clipboard.readText()).trim(), e = JSON.parse(r), t = Array.isArray(e) && e.length > 0 && e.every(xa);
    switch (!0) {
      case Da(e):
        return { Kind: "card", Serialization: r };
      case xa(e):
        return { Kind: "widget", Serialization: r };
      case t:
        return { Kind: "widget", Serialization: r };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not read from the clipboard:", r);
  }
  return null;
}
function J5(r) {
  var n;
  const e = JSON.parse(JSON.stringify(r));
  delete e.Id;
  const t = (i) => {
    var a, s;
    delete i.Id, (a = i.Widgets) == null || a.forEach((o) => {
      delete o.Id;
    }), (s = i.CardList) == null || s.forEach(t);
  };
  return (n = e.Cards) == null || n.forEach(t), e;
}
const Y5 = [
  "x",
  "y",
  "Width",
  "Height",
  "Position",
  "Size",
  "Geometry",
  "changeGeometryTo"
];
function B1(r) {
  var t;
  const e = (n) => {
    var i, a;
    (i = n.Widgets) == null || i.forEach((s) => {
      Y5.forEach((o) => {
        delete s[o];
      });
    }), (a = n.CardList) == null || a.forEach(e);
  };
  (t = r.Cards) == null || t.forEach(e);
}
function Gi(r) {
  const e = J5(r);
  return B1(e), e;
}
function Q5(r) {
  var t;
  const e = (n) => {
    var a;
    const i = n.Widgets;
    i != null && (i.some((o) => typeof o.zIndex == "number") && i.sort((o, l) => (o.zIndex ?? 0) - (l.zIndex ?? 0)), i.forEach((o) => {
      delete o.zIndex, delete o.Number;
    })), (a = n.CardList) == null || a.forEach(e);
  };
  (t = r.Cards) == null || t.forEach(e);
}
function i0(r) {
  B1(r), Q5(r), r.Id = Vr("deck"), ds(r, "Deck");
  const e = (t) => {
    var n;
    t.Id = Vr("card"), ds(t, "Card"), t.Widgets.forEach((i) => {
      i.Id = Vr("widget"), ds(i, "Widget");
    }), (n = t.CardList) == null || n.forEach(e);
  };
  r.Cards.forEach(e);
}
function ds(r, e) {
  typeof r.Name == "string" && (r.Name = Rn(r.Name, e));
}
function em(r) {
  var t, n;
  const e = {};
  if (r.FontFamily && (e.fontFamily = r.FontFamily), r.FontSize != null && (e.fontSize = `${r.FontSize}px`), r.FontWeight && (e.fontWeight = N2[r.FontWeight]), r.FontStyle && (e.fontStyle = r.FontStyle), r.LineHeight != null && (e.lineHeight = `${r.LineHeight}px`), r.ForegroundColor && (e.color = r.ForegroundColor), r.TextAlignment && (e.textAlign = r.TextAlignment), r.Opacity != null && (e.opacity = r.Opacity), r.Cursor && (e.cursor = r.Cursor), (t = r.TextDecoration) != null && t.isActive) {
    const i = r.TextDecoration;
    let a = i.Line;
    i.Style && (a += ` ${i.Style}`), i.Color && (a += ` ${i.Color}`), i.Thickness != null && (a += ` ${i.Thickness}px`), e.textDecoration = a;
  }
  if ((n = r.TextShadow) != null && n.isActive && r.TextShadow.Color !== "transparent") {
    const i = r.TextShadow;
    e.textShadow = `${i.xOffset}px ${i.yOffset}px ${i.BlurRadius}px ${i.Color}`;
  }
  if (r.hasBackground === !1)
    e.background = "transparent";
  else if (r.BackgroundColor && (e.backgroundColor = r.BackgroundColor), r.BackgroundTexture) {
    const i = r.BackgroundTexture, a = {
      normal: "auto",
      contain: "contain",
      cover: "cover",
      fill: "100% 100%",
      tile: "auto"
    };
    e.backgroundImage = `url(${i.ImageURL})`, e.backgroundSize = a[i.Mode], e.backgroundRepeat = i.Mode === "tile" ? "repeat" : "no-repeat", e.backgroundPosition = `${i.xOffset}px ${i.yOffset}px`;
  }
  return e;
}
function tm(r) {
  var t;
  const e = {};
  if (r.BorderWidths) {
    const [n, i, a, s] = r.BorderWidths;
    e.borderWidth = `${n}px ${i}px ${a}px ${s}px`;
  }
  if (r.BorderStyles) {
    const [n, i, a, s] = r.BorderStyles;
    e.borderStyle = `${n} ${i} ${a} ${s}`;
  }
  if (r.BorderColors) {
    const [n, i, a, s] = r.BorderColors;
    e.borderColor = `${n} ${i} ${a} ${s}`;
  }
  if (r.BorderRadii) {
    const [n, i, a, s] = r.BorderRadii;
    e.borderRadius = `${n}px ${i}px ${a}px ${s}px`;
  }
  if ((t = r.BoxShadow) != null && t.isActive) {
    const n = r.BoxShadow;
    e.boxShadow = `${n.xOffset}px ${n.yOffset}px ${n.BlurRadius}px ${n.SpreadRadius}px ${n.Color}`;
  }
  return e;
}
function Jt(r, e, t, n) {
  let i = 0, a = 0, s = 0, o = 0;
  switch (r[0]) {
    case "left-width":
      i = e[0], a = e[1];
      break;
    case "left-right":
      i = e[0], a = t - e[0] - e[1];
      break;
    case "width-right":
      a = e[0], i = t - e[0] - e[1];
      break;
  }
  switch (r[1]) {
    case "top-height":
      s = e[2], o = e[3];
      break;
    case "top-bottom":
      s = e[2], o = n - e[2] - e[3];
      break;
    case "height-bottom":
      o = e[2], s = n - e[2] - e[3];
      break;
  }
  return { left: i, top: s, width: a, height: o };
}
function W0(r, e, t, n, i, a, s) {
  let o = 0, l = 0, d = 0, h = 0;
  switch (i[0]) {
    case "left-width":
      o = r, l = t;
      break;
    case "left-right":
      o = r, l = a - r - t;
      break;
    case "width-right":
      o = t, l = a - t - r;
      break;
  }
  switch (i[1]) {
    case "top-height":
      d = e, h = n;
      break;
    case "top-bottom":
      d = e, h = s - e - n;
      break;
    case "height-bottom":
      d = n, h = s - n - e;
      break;
  }
  return [o, l, d, h];
}
function rm(r, e, t, n, i) {
  let a = null, s = null, o;
  return new Proxy(r, {
    get(l, d) {
      if (d === Ba)
        return !0;
      if (d === Nr)
        return s;
      if (d === mn)
        return o;
      switch (d) {
        case "own":
          return a ?? (a = {});
        case "View":
          return o;
        case "Deck":
          return t;
        case "Card":
          return n;
        case "trigger":
          return (h, ...f) => s == null ? void 0 : s.trigger(h, ...f);
        case "triggered":
          return (h, ...f) => s == null ? void 0 : s.triggered(h, ...f);
        case "Index":
          return n.Widgets.indexOf(l);
        case "x": {
          const { left: h } = Jt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "y": {
          const { top: h } = Jt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "Width": {
          const { width: h } = Jt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "Height": {
          const { height: h } = Jt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "changeGeometryTo":
          return (h, f, m, v) => {
            const { W: k, H: T } = e.current, { left: I, top: O, width: L, height: W } = Jt(l.Anchors, l.Offsets, k, T), Y = W0(h ?? I, f ?? O, m ?? L, v ?? W, l.Anchors, k, T);
            return l.Offsets = Y, d0(i), Y;
          };
        case "rerender":
          return () => d0(i);
        // re-render this widget
        default:
          return Reflect.get(l, d);
      }
    },
    set(l, d, h) {
      if (d === Nr)
        return s = h, !0;
      if (d === mn)
        return o = h, !0;
      if (d === "View")
        return !0;
      if (d === "own")
        return a = h, !0;
      switch (d) {
        // computed geometry is read-only: a plain write
        case "x":
        case "y":
        // would only create a dead shadow property
        case "Width":
        case "Height":
          return console.warn(
            '[BrowserCard] "' + String(d) + `" is read-only - use changeGeometryTo() to change a widget's geometry`
          ), !0;
        case "Index": {
          const f = n.Widgets, m = f.indexOf(l);
          if (m < 0)
            return !0;
          const v = Math.max(0, Math.min(f.length - 1, Math.round(Number(h))));
          return v !== m && (f.splice(m, 1), f.splice(v, 0, l), n.rerender()), !0;
        }
      }
      return Po(h) ? (console.warn(
        "[BrowserCard] cannot assign a Deck/Card/Widget proxy to property " + String(d) + " - ignored (it would create a circular, non-serializable reference)"
      ), !0) : (Object.is(Reflect.get(l, d), h) || (Reflect.set(l, d, h), d0(i)), !0);
    }
  });
}
function nm(r, e, t, n, i) {
  let a = null, s = null, o, l;
  return l = new Proxy(r, {
    get(d, h) {
      if (h === Ba)
        return !0;
      if (h === Nr)
        return s;
      if (h === mn)
        return o;
      switch (h) {
        case "own":
          return a ?? (a = {});
        case "View":
          return o;
        case "Deck":
          return e;
        case "Card":
          return l;
        case "WidgetList":
          return t.current;
        case "trigger":
          return (f, ...m) => s == null ? void 0 : s.trigger(f, ...m);
        case "triggered":
          return (f, ...m) => s == null ? void 0 : s.triggered(f, ...m);
        case "rerender":
          return () => d0(n);
        // re-render this card and its widgets
        case "Index":
          return je(e).indexOf(d);
        case "Path":
          return Ys(e, d);
        // name, '/'-joined
        default:
          return Reflect.get(d, h);
      }
    },
    set(d, h, f) {
      return h === Nr ? (s = f, !0) : h === mn ? (o = f, !0) : h === "View" || h === "Path" ? !0 : h === "own" ? (a = f, !0) : h === "Index" ? (i == null || i(d, Number(f)), !0) : Po(f) ? (console.warn(
        "[BrowserCard] cannot assign a Deck/Card/Widget proxy to property " + String(h) + " - ignored (it would create a circular, non-serializable reference)"
      ), !0) : (Object.is(Reflect.get(d, h), f) || (Reflect.set(d, h, f), d0(n)), !0);
    }
  }), l;
}
function im(r, e, t) {
  let n = null, i = null, a, s = "", o = 0, l = 0, d;
  return d = new Proxy(r, {
    get(h, f) {
      if (f === Ba)
        return !0;
      if (f === Nr)
        return i;
      if (f === La)
        return () => d0(t);
      if (f === mn)
        return a;
      if (f === Pn)
        return s;
      if (f === bi)
        return o;
      if (f === gi)
        return l;
      switch (f) {
        case "own":
          return n ?? (n = {});
        case "View":
          return a;
        case "Deck":
          return d;
        case "Card":
          return e.current;
        case "trigger":
          return (m, ...v) => i == null ? void 0 : i.trigger(m, ...v);
        case "triggered":
          return (m, ...v) => i == null ? void 0 : i.triggered(m, ...v);
        case "Console_LineLimit":
          return Reflect.get(h, f) ?? Fo;
        case "Console_CharLimit":
          return Reflect.get(h, f) ?? Do;
        default:
          return Reflect.get(h, f);
      }
    },
    set(h, f, m) {
      return f === Nr ? (i = m, !0) : f === mn ? (a = m, !0) : f === "View" ? !0 : f === "own" ? (n = m, !0) : f === Pn ? (s = m, !0) : f === bi ? (o = m, !0) : f === gi ? (l = m, !0) : Po(m) ? (console.warn(
        "[BrowserCard] cannot assign a Deck/Card/Widget proxy to property " + String(f) + " - ignored (it would create a circular, non-serializable reference)"
      ), !0) : (Object.is(Reflect.get(h, f), m) || (Reflect.set(h, f, m), d0(t)), !0);
    }
  }), d;
}
function am(r, e, t, n) {
  const { left: i, top: a, width: s, height: o } = Jt(r.Anchors, r.Offsets, t, n);
  return {
    left: i,
    top: a,
    width: s,
    height: o,
    zIndex: e,
    // derived from the widget's array position
    display: r.visible ? void 0 : "none",
    ...em(r),
    ...tm(r)
  };
}
function ji(r, e, t, n, i, a) {
  const s = Math.sqrt(t * t + n * n);
  if (s < 1e-3)
    return "";
  const o = t / s, l = n / s, d = r - i * o, h = e - i * l;
  return `${r},${e} ${d - a * l},${h + a * o} ${d + a * l},${h - a * o}`;
}
function sm(r, e, t) {
  const n = r.BorderColor ?? "#333", i = r.BorderWidth ?? 2, a = r.FillColor ?? "transparent";
  if (r.Variant === "rectangle" || r.Variant === "rounded-rectangle" || r.Variant === "oval") {
    const I = r.Variant === "oval" ? "50%" : r.Variant === "rounded-rectangle" ? `${r.CornerRadius ?? 12}px` : void 0;
    return X`
      <div style=${{
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      background: a,
      border: `${i}px solid ${n}`,
      borderRadius: I
    }}></div>
    `;
  }
  if (r.Variant === "polygon") {
    const I = Math.max(3, r.Sides ?? 6), O = e / 2, L = t / 2, W = e / 2 - i, Y = t / 2 - i, ne = Array.from({ length: I }, (M, G) => {
      const he = 2 * Math.PI * G / I - Math.PI / 2;
      return `${O + W * Math.cos(he)},${L + Y * Math.sin(he)}`;
    }).join(" ");
    return X`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <polygon points=${ne}
          fill=${a} stroke=${n} strokeWidth=${i} strokeLinejoin="round"/>
      </svg>
    `;
  }
  const s = r.ArrowStart === !0, o = r.ArrowEnd === !0, l = Math.max(i * 4, 10), d = l * 0.5, h = {
    stroke: n,
    strokeWidth: i,
    fill: "none",
    strokeLinecap: "round"
  };
  if (r.Variant === "line") {
    const I = s ? X`<polygon
      points=${ji(0, 0, -e, -t, l, d)} fill=${n} stroke="none"/>` : null, O = o ? X`<polygon
      points=${ji(e, t, e, t, l, d)} fill=${n} stroke="none"/>` : null;
    return X`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <line x1="0" y1="0" x2=${e} y2=${t} ...${h}/>
        ${I}${O}
      </svg>
    `;
  }
  const f = r.Curvature ?? 0.4, m = e / 2 - f * t, v = t / 2 + f * e, k = s ? X`<polygon
    points=${ji(0, 0, -m, -v, l, d)} fill=${n} stroke="none"/>` : null, T = o ? X`<polygon
    points=${ji(e, t, e - m, t - v, l, d)} fill=${n} stroke="none"/>` : null;
  return X`
    <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
      <path d=${`M 0 0 Q ${m} ${v} ${e} ${t}`} ...${h}/>
      ${k}${T}
    </svg>
  `;
}
Ni.set("button", async ({ on: r, me: e, html: t, trigger: n }) => {
  const i = e;
  function a() {
    i.autoHilite === !0 && (i.Variant === "checkbox" || i.Variant === "radio") && (i.Hilite = !i.Hilite), n("click");
  }
  r("render", () => {
    const s = (
      // "Value" takes precedence over the mere name
      i.Value != null && i.Value !== "" ? i.Value : i.Name
    );
    return t`
      <button
        class=${`bc-btn s-${i.Variant ?? "default"}${i.Hilite ? " hilite" : ""}`}
        disabled=${!i.enabled}
        style=${{ width: "100%", height: "100%" }}
        onClick=${i.enabled ? a : void 0}
        title=${i.Name}
      >${i.showName ? s : null}</button>
    `;
  });
});
Ni.set("field", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const i = n.scrolling ? " scrollable" : " no-scroll", a = n.showLines ? " show-lines" : "", s = `bc-field s-${n.Variant ?? "default"}${i}${a}`, o = {
      fontSize: n.FontSize ?? 14,
      fontWeight: n.FontWeight ?? "normal",
      textAlign: n.TextAlign ?? "left",
      color: n.Color ?? "#111"
    };
    return n.lockText ? t`
          <div class=${s} style=${{ width: "100%", height: "100%", ...o }}>${n.Value}</div>
        ` : t`
          <textarea
            class=${s}
            style=${{ ...o, width: "100%", height: "100%", padding: "4px 6px" }}
            onInput=${(l) => {
      n.Value = l.target.value;
    }}
          >${n.Value}</textarea>
        `;
  });
});
Ni.set("shape", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const i = n.Width ?? 0, a = n.Height ?? 0;
    return t`${sm(n, i, a)}`;
  });
});
Ni.set("picture", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => t`
    <img
      class=${"bc-picture s-" + (n.Variant ?? "default")}
      src=${n.ImageData}
      alt=${n.Name}
      draggable=${!1}
    />
  `);
});
function om({
  Obj: r,
  containerW: e,
  containerH: t,
  makeContext: n,
  deckProxy: i,
  cardProxy: a,
  onWidgetProxy: s,
  onReady: o
}) {
  const [, l] = Ue(0), d = De(!1), h = Wt(() => {
    d.current || l((ce) => ce + 1);
  }, []), f = De(null);
  f.current == null && (f.current = new q0());
  const m = De({ W: e, H: t });
  m.current = { W: e, H: t };
  const v = De(null);
  v.current == null && (v.current = rm(r, m, i, a, h));
  const k = v.current, T = Wt(
    (ce) => {
      k[mn] = ce ?? void 0;
    },
    [k]
  ), I = De(o);
  I.current = o;
  const O = De(null);
  O.current == null && (O.current = n(k));
  const L = De(void 0);
  L.current == null && (L.current = {
    Configuration: r.Configuration ?? {}
  });
  const Y = (/* @__PURE__ */ new Set(["button", "field", "shape", "picture"])).has(r.Type) ? `await behaveLike(${JSON.stringify(r.Type)})
` : "";
  if (qt(() => {
    const ce = f.current;
    L.current.Configuration = r.Configuration ?? {};
    const { Params: ie, Args: Ie } = va(ce, O.current, "widget", L.current);
    k[Nr] = ce, ce.linkToParent(
      // bubble unhandled events up
      () => a[Nr] ?? null
    ), s(r.Id, k);
    const ye = r.Script ?? "";
    let q = !0;
    if (ye.trim() !== "")
      try {
        new Function(`return (async () => {
${ye}
})()`);
      } catch (oe) {
        console.warn("[BrowserCard] syntax error in script of widget " + S.quoted(r.Name) + " - ignored:", oe), q = !1;
      }
    const U = q ? Y + ye : "";
    return ce.run(U, ie, Ie).catch((oe) => {
      console.warn("[BrowserCard] widget script error:", oe);
    }).then(async () => {
      h(), await ce.fireLocal("ready"), I.current(r.Id);
    }), () => {
      ce.teardown();
    };
  }, [r.Script, r.Configuration]), !r.visible)
    return null;
  const ne = f.current;
  d.current = !0;
  let M;
  try {
    M = ne.renderResult() ?? null;
  } finally {
    d.current = !1;
  }
  const G = r.Type === "shape" || r.Type === "button" ? { overflow: "visible" } : { overflow: "hidden" }, he = a.Widgets.indexOf(r) + 1;
  return X`
    <div
      ref=${T}
      class=${`bc-widget${r.Type === "shape" ? " bc-shape" : ""}`}
      style=${{ ...am(r, he, e, t), ...G }}
    >
      <${Us} key=${"safe:" + String(r.Script)}>${M}<//>
    </div>
  `;
}
const N0 = 8, lm = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#e5e7eb"/><circle cx="55" cy="35" r="10" fill="#9ca3af"/><path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/></svg>'
);
function na(r, e, t = " ") {
  const n = /^(.*?)([ -])(\d+)$/.exec(r);
  let i, a, s;
  n != null ? (i = n[1], a = n[2], s = parseInt(n[3], 10)) : (i = r, a = t, s = 1);
  let o = r;
  for (; e.has(o); )
    s += 1, o = `${i}${a}${s}`;
  return o;
}
function cm(r, e, t, n) {
  const i = {
    button: { BaseName: "Button", Width: 140, Height: 36 },
    field: { BaseName: "Field", Width: 200, Height: 80 },
    shape: { BaseName: "Shape", Width: 140, Height: 100 },
    picture: { BaseName: "Picture", Width: 160, Height: 120 },
    generic: { BaseName: "Widget", Width: 200, Height: 120 }
  }, { BaseName: a, Width: s, Height: o } = i[r], l = new Set(e.Widgets.map((f) => f.Name)), d = na(a, l, "-"), h = {
    // appended last ⇒ on top of the stack
    Id: Vr("widget"),
    Name: d,
    Type: r,
    Anchors: ["left-width", "top-height"],
    Offsets: [
      Math.round((t - s) / 2),
      s,
      Math.round((n - o) / 2),
      o
    ],
    visible: !0,
    Script: ""
  };
  switch (r) {
    case "button":
      Object.assign(h, {
        Variant: "rounded-rect",
        showName: !0,
        autoHilite: !0,
        enabled: !0,
        sharedHilite: !1,
        Value: ""
      });
      break;
    case "field":
      Object.assign(h, {
        Variant: "opaque",
        lockText: !1,
        scrolling: !1,
        showLines: !1,
        dontSearch: !1,
        sharedText: !1,
        Value: "Value",
        FontSize: 14
      });
      break;
    case "shape":
      Object.assign(h, {
        Variant: "rectangle",
        FillColor: "#dbeafe",
        BorderColor: "#3b82f6",
        BorderWidth: 2
      });
      break;
    case "picture":
      Object.assign(h, {
        Variant: "scale-aspect-fit",
        autoHilite: !1,
        ImageData: lm,
        actualWidth: s,
        actualHeight: o
      });
      break;
    default:
      Object.assign(h, {
        Configuration: {},
        Script: `on('render', () => html\`
  <div style=\${{
    display:'flex', alignItems:'center', justifyContent:'center',
    width:'100%', height:'100%', background:'#fff',
    border:'2px dashed #1d6fd8', borderRadius:'8px', color:'#1d6fd8',
  }}>new Widget</div>
\`)`
      });
  }
  return h;
}
function um({
  Objects: r,
  CanvasW: e,
  CanvasH: t,
  Scale: n,
  selectedIds: i,
  onSelect: a,
  onSelectMany: s,
  onEdited: o,
  Grid: l = { isActive: !1, Width: 10, Height: 10 },
  onBeforeEdit: d
}) {
  const h = De(null), f = De(null), m = De(null), [v, k] = Ue(null);
  function T(q) {
    const U = Math.min(...q.map((E) => E.left)), oe = Math.min(...q.map((E) => E.top)), D = Math.max(...q.map((E) => E.left + E.width)), j = Math.max(...q.map((E) => E.top + E.height));
    return { left: U, top: oe, width: D - U, height: j - oe };
  }
  function I(q, U, oe, D) {
    if (D.length === 0)
      return;
    q.stopPropagation(), q.preventDefault(), q.currentTarget.setPointerCapture(q.pointerId);
    const j = D.map((E) => ({
      Obj: E,
      Origin: Jt(E.Anchors, E.Offsets, e, t)
    }));
    f.current = {
      PointerId: q.pointerId,
      Mode: U,
      Direction: oe,
      startX: q.clientX,
      startY: q.clientY,
      GroupOrigin: T(j.map((E) => E.Origin)),
      Items: j,
      captured: !1
    };
  }
  function O(q) {
    const U = f.current;
    if (U == null || q.pointerId !== U.PointerId)
      return;
    U.captured || (U.captured = !0, d == null || d());
    let oe = (q.clientX - U.startX) / n, D = (q.clientY - U.startY) / n;
    const j = U.GroupOrigin;
    if (U.Mode === "move") {
      l.isActive && (oe = Math.round((j.left + oe) / l.Width) * l.Width - j.left, D = Math.round((j.top + D) / l.Height) * l.Height - j.top);
      for (const { Obj: E, Origin: re } of U.Items)
        E.Offsets = W0(
          re.left + oe,
          re.top + D,
          re.width,
          re.height,
          E.Anchors,
          e,
          t
        );
    } else {
      const E = U.Direction;
      l.isActive && (E.includes("w") && (oe = Math.round((j.left + oe) / l.Width) * l.Width - j.left), E.includes("e") && (oe = Math.round((j.left + j.width + oe) / l.Width) * l.Width - (j.left + j.width)), E.includes("n") && (D = Math.round((j.top + D) / l.Height) * l.Height - j.top), E.includes("s") && (D = Math.round((j.top + j.height + D) / l.Height) * l.Height - (j.top + j.height)));
      for (const { Obj: re, Origin: ze } of U.Items) {
        let { left: Pe, top: Re, width: He, height: Ve } = ze;
        E.includes("w") && (Pe += oe, He -= oe), E.includes("e") && (He += oe), E.includes("n") && (Re += D, Ve -= D), E.includes("s") && (Ve += D), He < N0 && (E.includes("w") && (Pe = ze.left + ze.width - N0), He = N0), Ve < N0 && (E.includes("n") && (Re = ze.top + ze.height - N0), Ve = N0), re.Offsets = W0(Pe, Re, He, Ve, re.Anchors, e, t);
      }
    }
    o();
  }
  function L(q) {
    const U = f.current;
    U == null || q.pointerId !== U.PointerId || (q.currentTarget.releasePointerCapture(q.pointerId), f.current = null);
  }
  function W(q) {
    const U = h.current;
    if (U == null)
      return null;
    const oe = U.getBoundingClientRect();
    return { x: (q.clientX - oe.left) / n, y: (q.clientY - oe.top) / n };
  }
  function Y(q) {
    if (q.button !== 0)
      return;
    const U = W(q);
    U != null && (q.currentTarget.setPointerCapture(q.pointerId), m.current = {
      PointerId: q.pointerId,
      x0: U.x,
      y0: U.y,
      additive: q.shiftKey || q.metaKey,
      moved: !1,
      box: { left: U.x, top: U.y, width: 0, height: 0 }
    });
  }
  function ne(q) {
    const U = m.current;
    if (U == null || q.pointerId !== U.PointerId)
      return;
    const oe = W(q);
    if (oe == null)
      return;
    const D = {
      left: Math.min(U.x0, oe.x),
      top: Math.min(U.y0, oe.y),
      width: Math.abs(oe.x - U.x0),
      height: Math.abs(oe.y - U.y0)
    };
    (D.width > 3 || D.height > 3) && (U.moved = !0), U.box = D, k(D);
  }
  function M(q) {
    const U = m.current;
    if (U == null || q.pointerId !== U.PointerId)
      return;
    if (q.currentTarget.releasePointerCapture(q.pointerId), m.current = null, k(null), !U.moved) {
      U.additive || a(null, !1);
      return;
    }
    const oe = U.box, D = r.filter((j) => {
      const E = Jt(j.Anchors, j.Offsets, e, t);
      return !(E.left > oe.left + oe.width || E.left + E.width < oe.left || E.top > oe.top + oe.height || E.top + E.height < oe.top);
    }).map((j) => j.Id);
    s(D, U.additive);
  }
  const G = r.filter((q) => i.includes(q.Id)), he = Math.max(6, 8 / n), ce = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], ie = G.length > 0 ? T(G.map((q) => Jt(q.Anchors, q.Offsets, e, t))) : null;
  function Ie(q, U) {
    return {
      width: he,
      height: he,
      cursor: q + "-resize",
      left: (q.includes("w") ? 0 : q.includes("e") ? U.width : U.width / 2) - he / 2,
      top: (q.includes("n") ? 0 : q.includes("s") ? U.height : U.height / 2) - he / 2
    };
  }
  const ye = l.isActive ? {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
    backgroundSize: `${l.Width}px ${l.Height}px`
  } : {};
  return X`
      <div class="bc-edit-layer" ref=${h} style=${ye}
        onPointerDown=${Y}
        onPointerMove=${ne}
        onPointerUp=${M}
        onContextMenu=${(q) => q.preventDefault()}>
        ${r.map((q, U) => {
    const oe = Jt(q.Anchors, q.Offsets, e, t);
    return X`
            <div key=${q.Id}
              class=${`bc-edit-hit${q.visible ? "" : " invisible"}`}
              style=${{ left: oe.left, top: oe.top, width: oe.width, height: oe.height, zIndex: U + 1 }}
              onPointerDown=${(D) => {
      if (D.stopPropagation(), D.shiftKey || D.metaKey) {
        a(q.Id, !0);
        return;
      }
      i.includes(q.Id) ? I(D, "move", "", r.filter((E) => i.includes(E.Id))) : (a(q.Id, !1), I(D, "move", "", [q]));
    }}
              onPointerMove=${O}
              onPointerUp=${L}
              onContextMenu=${(D) => D.preventDefault()}
            ></div>
          `;
  })}
        ${G.length > 1 && G.map((q) => {
    const U = Jt(q.Anchors, q.Offsets, e, t);
    return X`
            <div key=${"member:" + q.Id} class="bc-selection-member"
              style=${{ left: U.left, top: U.top, width: U.width, height: U.height }}></div>
          `;
  })}
        ${ie != null && X`
          <div class="bc-selection-frame"
            style=${{ left: ie.left, top: ie.top, width: ie.width, height: ie.height }}>
            ${ce.map((q) => X`
              <div key=${q} class="bc-handle" style=${Ie(q, ie)}
                onPointerDown=${(U) => I(U, "resize", q, G)}
                onPointerMove=${O}
                onPointerUp=${L}
                onContextMenu=${(U) => U.preventDefault()}
              ></div>
            `)}
          </div>
        `}
        ${v != null && X`
          <div class="bc-marquee"
            style=${{ left: v.left, top: v.top, width: v.width, height: v.height }}></div>
        `}
      </div>
    `;
}
function dm({
  State: r,
  onClose: e
}) {
  const [t, n] = Ue(() => ({
    x: Math.max(8, Math.round((window.innerWidth - 560) / 2)),
    y: Math.max(8, Math.round((window.innerHeight - 420) / 2)),
    Width: 560,
    Height: 420
  })), i = De(r.Value), a = De(null);
  function s(h, f) {
    h.stopPropagation(), h.preventDefault(), h.currentTarget.setPointerCapture(h.pointerId), a.current = {
      PointerId: h.pointerId,
      Mode: f,
      startX: h.clientX,
      startY: h.clientY,
      Origin: { ...t }
    };
  }
  function o(h) {
    const f = a.current;
    if (f == null || h.pointerId !== f.PointerId)
      return;
    const m = h.clientX - f.startX, v = h.clientY - f.startY;
    f.Mode === "move" ? n((k) => ({
      ...k,
      x: Math.max(0, f.Origin.x + m),
      y: Math.max(0, f.Origin.y + v)
    })) : n((k) => ({
      ...k,
      Width: Math.max(300, f.Origin.Width + m),
      Height: Math.max(200, f.Origin.Height + v)
    }));
  }
  function l(h) {
    const f = a.current;
    f == null || h.pointerId !== f.PointerId || (h.currentTarget.releasePointerCapture(h.pointerId), a.current = null);
  }
  function d() {
    r.onCommit(i.current), e();
  }
  return qt(() => {
    function h(f) {
      f.key === "Escape" && (f.stopPropagation(), e()), f.key === "Enter" && (f.metaKey || f.ctrlKey) && (f.stopPropagation(), d());
    }
    return window.addEventListener("keydown", h, !0), () => window.removeEventListener("keydown", h, !0);
  }, []), X`
      <div class="bc-editor-backdrop"></div>
      <div class="bc-editor-window"
        style=${{ left: t.x, top: t.y, width: t.Width, height: t.Height }}>
        <div class="bc-editor-header"
          onPointerDown=${(h) => s(h, "move")}
          onPointerMove=${o}
          onPointerUp=${l}
          onContextMenu=${(h) => h.preventDefault()}
        >${r.Title}</div>
        <textarea class="bc-editor-textarea" spellcheck=${!1}
          ref=${(h) => {
    h != null && h.dataset.focused == null && (h.dataset.focused = "true", h.focus());
  }}
          defaultValue=${r.Value}
          onInput=${(h) => {
    i.current = h.target.value;
  }}
        ></textarea>
        <div class="bc-editor-footer">
          <span class="bc-editor-hint">Esc = Cancel · Ctrl/Cmd+Enter = OK</span>
          <button class="bc-dialog-btn secondary" onClick=${e}>Cancel</button>
          <button class="bc-dialog-btn primary"   onClick=${d}>OK</button>
        </div>
        <div class="bc-editor-resizer"
          onPointerDown=${(h) => s(h, "resize")}
          onPointerMove=${o}
          onPointerUp=${l}
          onContextMenu=${(h) => h.preventDefault()}
        ></div>
      </div>
    `;
}
function hm({
  Widget: r,
  SelectedCount: e = 0,
  CanvasW: t,
  CanvasH: n,
  onEdited: i,
  CardNames: a = [],
  CardIndex: s = 0,
  onDelete: o,
  onReorder: l,
  onMoveTo: d,
  Card: h = null,
  Deck: f = null,
  onOpenEditor: m,
  onBeforeEdit: v,
  onCopy: k
}) {
  if (r == null) {
    let D = function(E, re) {
      v == null || v(`card:${h.Id}:${E}`), h[E] = E === "Name" ? Rn(re, "Card") : re, i();
    }, j = function(E, re) {
      f != null && (v == null || v(`deck:${E}`), f[E] = re, i());
    };
    return e > 1 ? X`
          <div class="bc-props-panel">
            <div class="bc-props-title">${e} widgets selected</div>
            <div class="bc-props-subtitle">multiple selection</div>
            <div class="bc-props-hint">
              select a single widget to inspect and edit its properties
            </div>

            <div class="bc-props-section">Arrange</div>
            <div class="bc-props-row">
              <label>Order</label>
              <button class="bc-props-btn" title="to back"       onClick=${() => l == null ? void 0 : l("back")}>⤓</button>
              <button class="bc-props-btn" title="send backward" onClick=${() => l == null ? void 0 : l("backward")}>↓</button>
              <button class="bc-props-btn" title="bring forward" onClick=${() => l == null ? void 0 : l("forward")}>↑</button>
              <button class="bc-props-btn" title="to front"      onClick=${() => l == null ? void 0 : l("front")}>⤒</button>
            </div>
            <div class="bc-props-row">
              <label>Card</label>
              <select value=${String(s)}
                onChange=${(E) => d == null ? void 0 : d(parseInt(E.target.value, 10))}>
                ${a.map((E, re) => X`<option key=${re} value=${String(re)}>${E}</option>`)}
              </select>
            </div>

            <button class="bc-props-btn copy"   onClick=${k}>Copy Widgets</button>
            <button class="bc-props-btn delete" onClick=${o}>Delete Widgets</button>
          </div>
        ` : h == null ? X`
          <div class="bc-props-panel">
            <div class="bc-props-empty">
              no widget selected<br/><br/>
              click a widget to inspect and edit its properties<br/><br/>
              use "+ New" in the menu bar to create a new widget
            </div>
          </div>
        ` : X`
        <div class="bc-props-panel">
          <div class="bc-props-title">${h.Name}</div>
          <div class="bc-props-subtitle">card · ${h.Id}</div>
          ${f != null && Ys(f, h).includes("/") ? X`<div class="bc-props-subtitle">path · ${Ys(f, h)}</div>` : null}
          <div class="bc-props-hint">
            no widget selected - these are the properties of the card itself
          </div>

          <div class="bc-props-section">General</div>
          <div class="bc-props-row">
            <label>Name</label>
            <input type="text" value=${h.Name}
              onInput=${(E) => D("Name", E.target.value)}/>
          </div>
          ${Wc("Color", h.Color ?? "#ffffff00", (E) => D("Color", E))}
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${!h.dontSearch}
              onChange=${(E) => D("dontSearch", !E.target.checked)}/>
          </div>

          ${f != null && X`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${f.CardWidth ?? 800}
                onInput=${(E) => {
      const re = parseFloat(E.target.value);
      isFinite(re) && re >= 50 && j("CardWidth", re);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${f.CardHeight ?? 600}
                onInput=${(E) => {
      const re = parseFloat(E.target.value);
      isFinite(re) && re >= 50 && j("CardHeight", re);
    }}/>
            </div>

            <div class="bc-props-section">Grid (Deck)</div>
            <div class="bc-props-row">
              <label>snap to grid</label>
              <input type="checkbox" checked=${f.SnapToGrid === !0}
                onChange=${(E) => j("SnapToGrid", E.target.checked)}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Width</label>
              <input type="number" min="1" value=${f.GridWidth ?? 10}
                onInput=${(E) => {
      const re = parseFloat(E.target.value);
      isFinite(re) && re >= 1 && j("GridWidth", re);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${f.GridHeight ?? 10}
                onInput=${(E) => {
      const re = parseFloat(E.target.value);
      isFinite(re) && re >= 1 && j("GridHeight", re);
    }}/>
            </div>

            <div class="bc-props-section">Script (Deck)</div>
            <div class="bc-props-row column">
              <div class="bc-props-rowheader">
                <label>Script</label>
                ${m != null && X`
                  <button class="bc-props-expand" title="open in editor window"
                    onClick=${() => m(
      `Deck "${f.Name}" - Script`,
      f.Script ?? "",
      (E) => j("Script", E)
    )}>⤢</button>
                `}
              </div>
              <textarea rows="10" spellcheck=${!1} defaultValue=${f.Script ?? ""}
                onChange=${(E) => j("Script", E.target.value)}
              ></textarea>
              <div class="bc-props-hint">applied when the field loses focus</div>
            </div>
          `}

          <div class="bc-props-section">Script</div>
          <div class="bc-props-row column">
            <div class="bc-props-rowheader">
              <label>Script</label>
              ${m != null && X`
                <button class="bc-props-expand" title="open in editor window"
                  onClick=${() => m(
      `Card "${h.Name}" - Script`,
      h.Script ?? "",
      (E) => D("Script", E)
    )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${!1} defaultValue=${h.Script ?? ""}
              onChange=${(E) => D("Script", E.target.value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `;
  }
  const T = Jt(r.Anchors, r.Offsets, t, n);
  function I(D, j) {
    v == null || v(`prop:${r.Id}:${D}`), r[D] = j, i();
  }
  function O(D, j, E, re) {
    v == null || v(`geo:${r.Id}`), r.Offsets = W0(
      D ?? T.left,
      j ?? T.top,
      E ?? T.width,
      re ?? T.height,
      r.Anchors,
      t,
      n
    ), i();
  }
  function L(D, j) {
    v == null || v(`anchors:${r.Id}`);
    const E = [...r.Anchors];
    E[D] = j, r.Anchors = E, r.Offsets = W0(
      T.left,
      T.top,
      T.width,
      T.height,
      E,
      t,
      n
    ), i();
  }
  function W(D, j) {
    return X`<input type="number" value=${Math.round(D * 100) / 100}
        onInput=${(E) => {
      const re = parseFloat(E.target.value);
      isFinite(re) && j(re);
    }}/>`;
  }
  function Y(D, j) {
    return X`<div class="bc-props-row">
        <label>${D}</label>
        <input type="text" value=${r[j] ?? ""}
          onInput=${(E) => I(j, E.target.value)}/>
      </div>`;
  }
  function ne(D, j, E = 0) {
    return X`<div class="bc-props-row">
        <label>${D}</label>
        ${W(
      r[j] ?? E,
      (re) => I(j, re)
    )}
      </div>`;
  }
  function M(D, j) {
    return X`<div class="bc-props-row">
        <label>${D}</label>
        <input type="checkbox" checked=${!!r[j]}
          onChange=${(E) => I(j, E.target.checked)}/>
      </div>`;
  }
  function G(D, j, E) {
    return X`<div class="bc-props-row">
        <label>${D}</label>
        <select value=${r[j] ?? E[0]}
          onChange=${(re) => I(j, re.target.value)}>
          ${E.map((re) => X`<option key=${re} value=${re}>${re}</option>`)}
        </select>
      </div>`;
  }
  function he(D, j, E) {
    const re = r[j] ?? E;
    return Wc(D, re, (ze) => I(j, ze));
  }
  const ce = (
    // user-facing name of the widget's type
    r.Type === "generic" ? "custom widget" : r.Type
  );
  function ie(D, j, E) {
    return X`<div class="bc-props-rowheader">
        <label>${D}</label>
        ${m != null && X`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => m(
      `${ce} "${r.Name}" - ${D}`,
      j(),
      E
    )}>⤢</button>
        `}
      </div>`;
  }
  function Ie(D, j, E = 4) {
    return X`<div class="bc-props-row column">
        ${ie(
      D,
      () => String(r[j] ?? ""),
      (re) => I(j, re)
    )}
        <textarea rows=${E} defaultValue=${r[j] ?? ""}
          onInput=${(re) => I(j, re.target.value)}
        ></textarea>
      </div>`;
  }
  function ye(D) {
    try {
      I("Configuration", JSON.parse(D));
    } catch (j) {
      console.warn('[BrowserCard] invalid JSON for "Configuration":', j), window.alert("The given configuration is no valid JSON and was not applied.");
    }
  }
  function q() {
    return X`<div class="bc-props-row column">
        ${ie(
      "Configuration (JSON)",
      () => JSON.stringify(r.Configuration ?? {}, null, 2),
      ye
    )}
        <textarea rows="5" spellcheck=${!1}
          defaultValue=${JSON.stringify(r.Configuration ?? {}, null, 2)}
          onChange=${(D) => ye(D.target.value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`;
  }
  function U() {
    return X`<div class="bc-props-row column">
        ${ie(
      "Script",
      () => r.Script ?? "",
      (D) => I("Script", D)
    )}
        <textarea rows="8" spellcheck=${!1} defaultValue=${r.Script ?? ""}
          onChange=${(D) => I("Script", D.target.value)}
        ></textarea>
        <div class="bc-props-hint">applied when the field loses focus</div>
      </div>`;
  }
  let oe = null;
  switch (r.Type) {
    case "button":
      oe = X`
          ${G("Style", "Variant", ["rounded-rect", "rectangle", "oval", "shadow", "checkbox", "radio", "standard", "transparent"])}
          ${Y("Value", "Value")}
          ${M("show label", "showName")}
          ${M("enabled", "enabled")}
          ${M("auto-hilite", "autoHilite")}
          ${M("hilite", "Hilite")}
        `;
      break;
    case "field":
      oe = X`
          ${G("Style", "Variant", ["opaque", "transparent", "shadow", "rectangle"])}
          ${Ie("Value", "Value")}
          ${M("locked", "lockText")}
          ${M("scrolling", "scrolling")}
          ${M("show lines", "showLines")}
          ${ne("Font Size", "FontSize", 14)}
          ${G("Font Weight", "FontWeight", ["normal", "bold"])}
          ${G("Alignment", "TextAlign", ["left", "center", "right"])}
          ${he("Color", "Color", "#111111")}
        `;
      break;
    case "shape":
      oe = X`
          ${G("Style", "Variant", ["rectangle", "rounded-rectangle", "oval", "line", "arc", "polygon"])}
          ${he("Fill Color", "FillColor", "transparent")}
          ${he("Border Color", "BorderColor", "#333333")}
          ${ne("Border Width", "BorderWidth", 2)}
          ${M("arrow at start", "ArrowStart")}
          ${M("arrow at end", "ArrowEnd")}
          ${ne("Curvature", "Curvature", 0.4)}
          ${ne("Sides", "Sides", 6)}
          ${ne("Corner Radius", "CornerRadius", 12)}
        `;
      break;
    case "picture":
      oe = X`
          ${G("Style", "Variant", ["scale-aspect-fill", "scale-aspect-fit", "scale-to-fill", "actual-size", "center"])}
          ${Y("Image URL", "ImageData")}
        `;
      break;
    default:
      oe = X`
          ${Ie("Value", "Value")}
          ${q()}
        `;
  }
  return X`
      <div class="bc-props-panel">
        <div class="bc-props-title">${r.Name}</div>
        <div class="bc-props-subtitle">${ce} · ${r.Id}</div>

        <div class="bc-props-section">General</div>
        ${Y("Name", "Name")}
        ${M("visible", "visible")}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${W(T.left, (D) => O(D))}
          ${W(T.top, (D) => O(void 0, D))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${W(T.width, (D) => O(void 0, void 0, D))}
          ${W(T.height, (D) => O(void 0, void 0, void 0, D))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${r.Anchors[0]}
            onChange=${(D) => L(0, D.target.value)}>
            ${p1.map((D) => X`<option key=${D} value=${D}>${D}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${r.Anchors[1]}
            onChange=${(D) => L(1, D.target.value)}>
            ${m1.map((D) => X`<option key=${D} value=${D}>${D}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">Arrange</div>
        <div class="bc-props-row">
          <label>Order</label>
          <button class="bc-props-btn" title="to back"        onClick=${() => l == null ? void 0 : l("back")}>⤓</button>
          <button class="bc-props-btn" title="send backward"  onClick=${() => l == null ? void 0 : l("backward")}>↓</button>
          <button class="bc-props-btn" title="bring forward"  onClick=${() => l == null ? void 0 : l("forward")}>↑</button>
          <button class="bc-props-btn" title="to front"       onClick=${() => l == null ? void 0 : l("front")}>⤒</button>
        </div>
        <div class="bc-props-row">
          <label>Card</label>
          <select value=${String(s)}
            onChange=${(D) => d == null ? void 0 : d(parseInt(D.target.value, 10))}>
            ${a.map((D, j) => X`<option key=${j} value=${String(j)}>${D}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">${r.Type === "generic" ? "Custom Widget" : "Appearance"}</div>
        ${oe}

        <div class="bc-props-section">Script</div>
        ${U()}

        <button class="bc-props-btn copy"   onClick=${k}>Copy Widget</button>
        <button class="bc-props-btn delete" onClick=${o}>Delete Widget</button>
      </div>
    `;
}
function a0(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Vc(r) {
  const e = /^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(r);
  return e == null ? "#ffffff" : "#" + e[1].toLowerCase();
}
function Hc(r) {
  if (r == null || r === "transparent")
    return 0;
  const e = /^#[0-9a-f]{6}([0-9a-f]{2})$/i.exec(r);
  if (e != null)
    return Math.round(parseInt(e[1], 16) / 255 * 100);
  const t = /^rgba\([^,]+,[^,]+,[^,]+,\s*([01]|0?\.[0-9]+)\s*\)$/i.exec(r);
  return t != null ? Math.round(parseFloat(t[1]) * 100) : 100;
}
function qc(r, e) {
  const t = /^#?([0-9a-f]{6})$/i.exec(r), n = t == null ? "ffffff" : t[1].toLowerCase(), i = Math.round(a0(e, 0, 100) / 100 * 255).toString(16).padStart(2, "0");
  return "#" + n + i;
}
function Wc(r, e, t) {
  return X`<div class="bc-props-row">
    <label>${r}</label>
    <input type="color" value=${Vc(e)}
      onInput=${(n) => t(qc(n.target.value, Hc(e)))}/>
    <input class="bc-props-opacity" type="number" min="0" max="100" title="opacity (%)"
      value=${Hc(e)}
      onInput=${(n) => {
    const i = parseInt(n.target.value, 10);
    isFinite(i) && t(qc(Vc(e), i));
  }}/>
    <input type="text" value=${e}
      onChange=${(n) => {
    const i = n.target.value.trim();
    S.ValueIsColor(i) && t(i);
  }}/>
  </div>`;
}
function fm({
  Card: r,
  Scale: e,
  CanvasW: t,
  CanvasH: n,
  makeContext: i,
  deckProxy: a,
  onCardProxy: s,
  onCardReady: o,
  reorderCard: l,
  deckRenderSlot: d = null,
  deckScript: h = "",
  isEditing: f = !1,
  selectedIds: m = [],
  onSelect: v,
  onSelectMany: k,
  onEdited: T,
  Grid: I,
  onBeforeEdit: O,
  withChrome: L = !0
}) {
  const [, W] = Ue(0), Y = De(!1), ne = Wt(() => {
    Y.current || W((we) => we + 1);
  }, []), M = De(null);
  M.current == null && (M.current = new q0());
  const G = De(o);
  G.current = o;
  const he = U0(
    () => r.Widgets,
    [r]
  ), ce = De([]), ie = De(/* @__PURE__ */ new Map()), Ie = De(null);
  Ie.current == null && (Ie.current = nm(r, a, ce, ne, l));
  const ye = Ie.current, q = Wt(
    (we) => {
      ye[mn] = we ?? void 0;
    },
    [ye]
  ), U = De(/* @__PURE__ */ new Set()), oe = De(!1), D = De(!1), j = De(he);
  j.current = he;
  const E = De(() => {
  });
  E.current = () => {
    if (D.current || !oe.current)
      return;
    const we = U.current;
    j.current.map((dt) => dt.Id).every((dt) => we.has(dt)) && (D.current = !0, M.current.fireLocal("ready").then(() => G.current()));
  };
  const re = Wt((we) => {
    U.current.add(we), E.current();
  }, []), ze = Wt((we, Oe) => {
    ie.current.set(we, Oe), ce.current = j.current.map((dt) => ie.current.get(dt.Id)).filter((dt) => dt != null);
  }, []), Pe = De(null);
  Pe.current == null && (Pe.current = i(ye)), qt(() => {
    s(ye);
    const we = M.current;
    ye[Nr] = we, we.linkToParent(
      // and this card up to the deck
      () => a[Nr] ?? null
    );
    const { Params: Oe, Args: dt } = va(we, Pe.current, "card");
    oe.current = !1, D.current = !1, U.current.clear();
    const ge = r.Script ?? "";
    let lr = !0;
    if (ge.trim() !== "")
      try {
        new Function(`return (async () => {
${ge}
})()`);
      } catch (Ge) {
        console.warn("[BrowserCard] syntax error in card script - ignored:", Ge), lr = !1;
      }
    return we.run(lr ? ge : "", Oe, dt).catch((Ge) => {
      console.warn("[BrowserCard] card script error:", Ge);
    }).then(() => {
      oe.current = !0, ne(), E.current();
    }), () => {
      we.teardown();
    };
  }, [r.Script]);
  const Re = M.current;
  Y.current = !0;
  let He;
  try {
    He = Re.renderResult() ?? null;
  } finally {
    Y.current = !1;
  }
  const Ve = {
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left",
    background: r.Color ?? "#ffffff00"
    // transparent white by default so the deck render shows through
  }, sr = L ? {
    // the white "paper" + drop shadow behind the (now transparent) card
    width: t * e,
    height: n * e,
    position: "relative",
    flexShrink: 0,
    background: "#fff",
    borderRadius: 3,
    boxShadow: "0 4px 24px rgba(0,0,0,0.55)"
  } : {
    // embedded <bc-deck>: no paper/shadow - the card's own Color shows through
    width: t * e,
    height: n * e,
    position: "relative",
    flexShrink: 0,
    background: "transparent"
  }, or = {
    // matches the canvas geometry so it aligns with the card
    position: "absolute",
    top: 0,
    left: 0,
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left"
  };
  return X`
    <div style=${sr}>
      ${d != null && X`
        <div class="bc-deck-render" style=${or}>
          <${Us} key=${"safe:" + String(h)}>${d}<//>
        </div>
      `}
      <div class="bc-card-canvas" style=${Ve} ref=${q}>
        <${Us} key=${"safe:" + String(r.Script)}>${He}<//>
        ${he.map((we) => X`
          <${om}
            key=${we.Id}
            Obj=${we}
            containerW=${t}
            containerH=${n}
            makeContext=${i}
            deckProxy=${a}
            cardProxy=${ye}
            onWidgetProxy=${ze}
            onReady=${re}
          />
        `)}
        ${f && X`
          <${um}
            Objects=${he}
            CanvasW=${t}
            CanvasH=${n}
            Scale=${e}
            selectedIds=${m}
            onSelect=${v ?? (() => {
  })}
            onSelectMany=${k ?? (() => {
  })}
            onEdited=${T ?? (() => {
  })}
            Grid=${I}
            onBeforeEdit=${O}
          />
        `}
      </div>
    </div>
  `;
}
function pm({
  Card: r,
  CanvasW: e,
  CanvasH: t
}) {
  const i = 88 / Math.max(1, e), a = Math.max(24, Math.round(t * i));
  return X`
    <div class="bc-card-thumb"
      style=${{ width: 88, height: a, background: r.Color ?? "#fff" }}>
      ${r.Widgets.filter((s) => s.visible).map((s) => {
    const o = Jt(s.Anchors, s.Offsets, e, t), l = s.Type === "shape" ? s.FillColor ?? "#9ca3af" : s.Type === "button" ? "#1d6fd8" : s.Type === "field" ? "rgba(0,0,0,0.15)" : s.Type === "picture" ? "#9ca3af" : "#7c3aed";
    return X`
          <div key=${s.Id} style=${{
      position: "absolute",
      left: o.left * i,
      top: o.top * i,
      width: Math.max(1, o.width * i),
      height: Math.max(1, o.height * i),
      background: l,
      borderRadius: "1px"
    }}></div>
        `;
  })}
    </div>
  `;
}
function mm({
  DeckName: r,
  CardIndex: e,
  CardCount: t,
  activeOverlay: n,
  onOverlayToggle: i,
  onGoFirst: a,
  onGoPrev: s,
  onGoNext: o,
  onGoLast: l,
  isReadOnly: d = !0,
  isEditing: h = !1,
  onEditToggle: f,
  onInsert: m,
  onDeckSave: v,
  onDeckRevert: k,
  onDeckReset: T,
  onDeckExport: I,
  onDeckImport: O,
  onDeckExportText: L,
  onDeckImportText: W,
  onDeckEmbed: Y,
  onDeckStandalone: ne,
  onDeckImportURL: M,
  onMCPSettings: G,
  onCardAdd: he,
  onCardDuplicate: ce,
  onCardRename: ie,
  onCardDelete: Ie,
  onCardCopy: ye,
  onPaste: q,
  canUndo: U = !1,
  canRedo: oe = !1,
  onUndo: D,
  onRedo: j
}) {
  const E = e === 0, re = e === t - 1, [ze, Pe] = Ue(null);
  function Re(Ve) {
    Pe(null), i(n === Ve ? null : Ve);
  }
  function He(Ve) {
    Pe(ze === Ve ? null : Ve);
  }
  return X`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => Re("decks-panel")} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${n === "cards-panel" ? " active" : ""}`}
        onClick=${() => Re("cards-panel")}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "go-menu" ? " active" : ""}`}
          onClick=${() => Re("go-menu")}
          title="Navigate"
        >Go ▾</button>
        ${n === "go-menu" && X`
          <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${E ? " disabled" : ""}`}
              onClick=${() => {
    a(), i(null);
  }}>First Card</div>
            <div class=${`bc-dropdown-item${E ? " disabled" : ""}`}
              onClick=${() => {
    s(), i(null);
  }}>Previous Card</div>
            <div class=${`bc-dropdown-item${re ? " disabled" : ""}`}
              onClick=${() => {
    o(), i(null);
  }}>Next Card</div>
            <div class=${`bc-dropdown-item${re ? " disabled" : ""}`}
              onClick=${() => {
    l(), i(null);
  }}>Last Card</div>
          </div>
        `}
      </div>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "deck-menu" ? " active" : ""}`}
          onClick=${() => Re("deck-menu")}
          title="deck operations"
        >Deck ▾</button>
        ${n === "deck-menu" && X`
          <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    v == null || v(), i(null);
  }}>Save Deck</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    k == null || k(), i(null);
  }}>Revert to Saved</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    T == null || T(), i(null);
  }}>Reset to Original</div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${d ? " disabled" : ""}${ze === "import" ? " open" : ""}`}
                onClick=${() => !d && He("import")}>Import</div>
              ${ze === "import" && X`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    O == null || O(), i(null);
  }}>from JSON File…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    W == null || W(), i(null);
  }}>from JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    M == null || M(), i(null);
  }}>from URL…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${ze === "export" ? " open" : ""}`}
                onClick=${() => He("export")}>Export</div>
              ${ze === "export" && X`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    I == null || I(), i(null);
  }}>as JSON File</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    L == null || L(), i(null);
  }}>as JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    Y == null || Y(), i(null);
  }}>for Embedding…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    ne == null || ne(), i(null);
  }}>as Standalone App…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    G == null || G(), i(null);
  }}>MCP Settings…</div>
          </div>
        `}
      </div>
      ${h && X`
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "card-menu" ? " active" : ""}`}
            onClick=${() => Re("card-menu")}
            title="card operations"
          >Card ▾</button>
          ${n === "card-menu" && X`
            <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => {
    he == null || he(), i(null);
  }}>New Card…</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ce == null || ce(), i(null);
  }}>Duplicate Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ie == null || ie(), i(null);
  }}>Rename Card…</div>
              <div class="bc-dropdown-separator"></div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ye == null || ye(), i(null);
  }}>Copy Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    q == null || q(), i(null);
  }}>Paste from Clipboard</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${t <= 1 ? " disabled" : ""}`}
                onClick=${() => {
    Ie == null || Ie(), i(null);
  }}>Delete Card…</div>
            </div>
          `}
        </div>
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "insert-menu" ? " active" : ""}`}
            onClick=${() => Re("insert-menu")}
            title="insert a new widget"
          >+ New ▾</button>
          ${n === "insert-menu" && X`
            <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              ${[
    { Type: "button", Label: "Button" },
    { Type: "field", Label: "Field" },
    { Type: "shape", Label: "Shape" },
    { Type: "picture", Label: "Picture" },
    { Type: "generic", Label: "Custom Widget" }
  ].map(({ Type: Ve, Label: sr }) => X`
                <div key=${Ve} class="bc-dropdown-item"
                  onClick=${() => {
    m == null || m(Ve), i(null);
  }}>${sr}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${!U}
          onClick=${D} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${!oe}
          onClick=${j} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
      `}
      <div class="bc-menu-bar-title">${r}</div>
      ${!d && X`
        <button
          class=${`bc-menu-btn${h ? " active" : ""}`}
          onClick=${f}
          title=${h ? "switch to browse mode" : "switch to edit mode"}
        >${h ? "✓ Done" : "✎ Edit"}</button>
      `}
    </div>
  `;
}
function gm({
  CardIndex: r,
  CardCount: e,
  onFirst: t,
  onPrev: n,
  onNext: i,
  onLast: a,
  onBack: s,
  historyLen: o,
  onForward: l,
  futureLen: d,
  consoleShown: h = !1,
  onConsoleToggle: f,
  onScreenshot: m,
  mcpStatus: v = "inactive"
}) {
  const k = r === 0, T = r === e - 1, I = {
    inactive: { Color: "#8e8e93", Title: "MCP Broker: not configured" },
    connecting: { Color: "#ff9500", Title: "MCP Broker: connecting…" },
    connected: { Color: "#34c759", Title: "MCP Broker: connected" }
  }[v];
  return X`
    <div class="bc-bottom-bar">
      <div class="bc-bottom-bar-history">
        <button class="bc-nav-btn" onClick=${s}    disabled=${o === 0} title="Back">◁</button>
        <button class="bc-nav-btn" onClick=${l} disabled=${d === 0}  title="Forward">▷</button>
      </div>
      <div class="bc-bottom-bar-center">
        <button class="bc-nav-btn" onClick=${t} disabled=${k} title="First Card">«</button>
        <button class="bc-nav-btn" onClick=${n}  disabled=${k} title="Previous Card">‹</button>
        <span class="bc-card-counter">${r + 1} / ${e}</span>
        <button class="bc-nav-btn" onClick=${i}  disabled=${T}  title="Next Card">›</button>
        <button class="bc-nav-btn" onClick=${a}  disabled=${T}  title="Last Card">»</button>
      </div>
      <button
        class="bc-nav-btn"
        style=${{ fontSize: 13, minWidth: 40 }}
        onClick=${m} title="download a screenshot of this card"
      >📷</button>
      <button
        class=${`bc-nav-btn${h ? " active" : ""}`}
        style=${{ fontSize: 13, minWidth: 40 }}
        onClick=${f} title="toggle console"
      >⌨</button>
      <span
        class="bc-mcp-dot"
        title=${I.Title}
        style=${{ background: I.Color }}
      />
    </div>
  `;
}
function bm({ State: r, onClose: e }) {
  if (r == null)
    return null;
  if (r.kind === "answer")
    return X`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${r.message}</div>
          <div class="bc-dialog-buttons">
            ${r.buttons.map((n) => X`
              <button key=${n} class="bc-dialog-btn primary" onClick=${() => e(n)}>${n}</button>
            `)}
          </div>
        </div>
      </div>
    `;
  if (r.kind === "ask") {
    let n = r.defaultValue;
    return X`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${r.prompt}</div>
          <input
            ref=${(i) => i == null ? void 0 : i.focus()}
            class="bc-dialog-input" type="text"
            defaultValue=${r.defaultValue}
            onInput=${(i) => {
      n = i.target.value;
    }}
            onKeyDown=${(i) => i.key === "Enter" && e(n)}
          />
          <div class="bc-dialog-buttons">
            <button class="bc-dialog-btn secondary" onClick=${() => e(null)}>Cancel</button>
            <button class="bc-dialog-btn primary"   onClick=${() => e(n)}>OK</button>
          </div>
        </div>
      </div>
    `;
  }
  if (r.kind === "export-json")
    return X`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog bc-dialog-wide">
          <div class="bc-dialog-title">Export Deck as JSON</div>
          <textarea class="bc-dialog-textarea" readonly>${r.json}</textarea>
          <div class="bc-dialog-buttons">
            <button class="bc-dialog-btn secondary"
              onClick=${() => navigator.clipboard.writeText(r.json).catch(() => {
    })}>Copy</button>
            <button class="bc-dialog-btn primary" onClick=${() => e(null)}>Close</button>
          </div>
        </div>
      </div>
    `;
  let t = "";
  return X`
    <div class="bc-dialog-backdrop">
      <div class="bc-dialog bc-dialog-wide">
        <div class="bc-dialog-title">Import Deck from JSON</div>
        <textarea
          class="bc-dialog-textarea"
          placeholder="Paste deck JSON here…"
          onInput=${(n) => {
    t = n.target.value;
  }}
        ></textarea>
        <div class="bc-dialog-buttons">
          <button class="bc-dialog-btn secondary" onClick=${() => e(null)}>Cancel</button>
          <button class="bc-dialog-btn primary"   onClick=${() => e(t)}>Import</button>
        </div>
      </div>
    </div>
  `;
}
function vm({
  onClose: r,
  onApply: e
}) {
  const t = localStorage.getItem("bc-mcp-url") ?? "", n = localStorage.getItem("bc-mcp-token") ?? "", [i, a] = Ue(t), [s, o] = Ue(n), [l, d] = Ue(n !== "");
  function h() {
    const f = i.trim(), m = s.trim();
    try {
      localStorage.setItem("bc-mcp-url", f), l ? localStorage.setItem("bc-mcp-token", m) : localStorage.removeItem("bc-mcp-token");
    } catch {
    }
    e == null || e(f, m), r();
  }
  return X`
    <div class="bc-dialog-backdrop"
      onClick=${(f) => {
    f.target === f.currentTarget && r();
  }}>
      <div class="bc-dialog bc-dialog-wide">
        <div class="bc-dialog-title">MCP Broker Settings</div>
        <div style=${{ padding: "8px 0" }}>
          <label style=${{ display: "block", marginBottom: "4px", fontSize: "12px" }}>Broker WebSocket URL</label>
          <input
            class="bc-dialog-input"
            type="text"
            placeholder="ws://localhost:3457/bc"
            value=${i}
            onInput=${(f) => a(f.target.value)}
          />
        </div>
        <div style=${{ padding: "8px 0" }}>
          <label style=${{ display: "block", marginBottom: "4px", fontSize: "12px" }}>Access Token</label>
          <input
            class="bc-dialog-input"
            type="password"
            placeholder="secret token"
            value=${s}
            onInput=${(f) => o(f.target.value)}
          />
          <label style=${{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px", fontSize: "12px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked=${l}
              onChange=${(f) => d(f.target.checked)}
            />
            Remember token permanently
          </label>
        </div>
        <div class="bc-dialog-buttons">
          <button class="bc-dialog-btn secondary" onClick=${r}>Cancel</button>
          <button class="bc-dialog-btn primary" onClick=${h}>Save</button>
        </div>
      </div>
    </div>
  `;
}
function L1({
  deck: r,
  isReadOnly: e,
  withChrome: t = !0,
  StorageKey: n = "",
  initialCardIndex: i = 0,
  onDeckSave: a,
  onDeckRevert: s,
  onDeckReset: o,
  onDeckExport: l,
  onDeckImport: d,
  onDeckImportText: h,
  onDeckList: f,
  onDeckOpen: m,
  onDeckCreate: v,
  onDeckDelete: k,
  onDeckRename: T,
  onDeckEmbed: I,
  onDeckStandalone: O,
  onDeckImportURL: L,
  connector: W,
  onDeckSaveImmediate: Y
}) {
  const ne = r ?? z1, [M] = Ue(ne), G = je(M), [, he] = Ue(0), ce = () => he(($) => $ + 1), [ie, Ie] = Ue(Math.min(i, (ne == null ? void 0 : ne.Cards.length) - 1 || 0)), [ye, q] = Ue([]), [U, oe] = Ue([]), [D, j] = Ue(null), [E, re] = Ue(null), [ze, Pe] = Ue(1), [Re, He] = Ue(Gs), [Ve, sr] = Ue(js), [or, we] = Ue(!1), Oe = De(null), dt = De(0);
  dt.current = ie;
  const [ge, lr] = Ue("browse"), [Ge, gt] = Ue([]), [gr, wn] = Ue(!1), $t = ge === "edit" && !e, Gr = Ge.length === 1 ? Ge[0] : null;
  function jr($, C) {
    if ($ == null) {
      C || gt([]);
      return;
    }
    gt(
      C ? (z) => z.includes($) ? z.filter((J) => J !== $) : [...z, $] : [$]
    );
  }
  function xn($, C) {
    gt((z) => C ? Array.from(/* @__PURE__ */ new Set([...z, ...$])) : $);
  }
  function Yt() {
    ge === "edit" && (a == null || a()), lr(($) => $ === "edit" ? "browse" : "edit"), gt([]);
  }
  qt(() => {
    gt([]);
  }, [ie]), qt(() => {
    if (n)
      try {
        localStorage.setItem("bc-card-index:" + n, String(ie));
      } catch {
      }
  }, [n, ie]);
  const br = n ? "bc-collapsed-cards:" + n : "", [vr, Er] = Ue(() => {
    if (br === "")
      return /* @__PURE__ */ new Set();
    try {
      const $ = localStorage.getItem(br);
      return new Set($ ? JSON.parse($) : []);
    } catch {
      return /* @__PURE__ */ new Set();
    }
  });
  qt(() => {
    if (br !== "")
      try {
        localStorage.setItem(br, JSON.stringify([...vr]));
      } catch {
      }
  }, [br, vr]);
  function Dt($) {
    Er((C) => {
      const z = new Set(C);
      return z.has($) ? z.delete($) : z.add($), z;
    });
  }
  function Kr($, C) {
    return Z5($, C, vr);
  }
  const [Ft, cr] = Ue(null), [ur, zr] = Ue(Vo());
  function b0($) {
    K5($, n), zr($);
  }
  function Wn() {
    if (f == null) {
      cr([]);
      return;
    }
    f().then(cr);
  }
  qt(() => {
    D === "decks-panel" && (cr(null), Wn());
  }, [D]);
  function Rr($, C) {
    return new Promise(
      (z) => re({ kind: "ask", prompt: $, defaultValue: C, resolve: z })
    );
  }
  function wr($, ...C) {
    return new Promise(
      (z) => re({ kind: "answer", message: $, buttons: C, resolve: z })
    );
  }
  async function Un() {
    var C;
    const $ = (C = await Rr("Name of the new deck:", "")) == null ? void 0 : C.trim();
    $ == null || $ === "" || await (v == null ? void 0 : v($));
  }
  async function X0($) {
    var z;
    const C = (z = await Rr("New name for this deck:", $.Name)) == null ? void 0 : z.trim();
    C == null || C === "" || C === $.Name || (await (T == null ? void 0 : T($.Key, C)), Wn());
  }
  async function Gn() {
    var C;
    const $ = (C = await Rr("URL of the deck to import:", "https://")) == null ? void 0 : C.trim();
    $ == null || $ === "" || $ === "https://" || await (L == null ? void 0 : L($));
  }
  function J0() {
    re({ kind: "export-json", json: JSON.stringify(M, null, 2) });
  }
  async function yn() {
    const $ = await new Promise(
      (C) => re({ kind: "import-json", resolve: C })
    );
    $ != null && (h == null || h($));
  }
  async function v0($) {
    await wr(
      `Really delete deck "${$.Name}"?`,
      "Delete",
      "Cancel"
    ) === "Delete" && (await (k == null ? void 0 : k($.Key)), Wn());
  }
  async function kn() {
    var K, de;
    const $ = (K = await Rr("Name of the new card:", "")) == null ? void 0 : K.trim();
    if ($ == null || $ === "")
      return;
    const C = Rn($, "Card"), z = {
      Id: Vr("card"),
      Name: C,
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    };
    yt();
    const J = ((de = G[ie]) == null ? void 0 : de.Id) ?? null, N = (J != null ? _r(M, J) : null) ?? M.Cards, R = J != null ? N.findIndex((be) => be.Id === J) : N.length - 1;
    N.splice(R + 1, 0, z), lt({ type: "card-id", id: z.Id }), Ne();
  }
  function Sn($) {
    return je(M).findIndex((C) => C.Id === $);
  }
  function Zr($) {
    var C;
    $.Id = Vr("card"), $.Name = Rn($.Name, "Card"), $.Widgets.forEach((z) => {
      z.Id = Vr("widget"), typeof z.Name == "string" && (z.Name = Rn(z.Name, "Widget"));
    }), (C = $.CardList) == null || C.forEach(Zr);
  }
  function xr($) {
    var z;
    let C = 0;
    return (z = $.CardList) == null || z.forEach((J) => {
      C += 1 + xr(J);
    }), C;
  }
  function y($) {
    const C = G[$];
    if (C == null)
      return;
    const z = JSON.parse(JSON.stringify(C));
    Zr(z);
    const J = _r(M, C.Id) ?? M.Cards;
    z.Name = na(C.Name + " Copy", new Set(J.map((R) => R.Name))), yt();
    const N = J.findIndex((R) => R.Id === C.Id);
    J.splice(N + 1, 0, z), lt({ type: "card-id", id: z.Id }), Ne();
  }
  async function F($) {
    var J;
    const C = G[$];
    if (C == null)
      return;
    const z = (J = await Rr("New name for this card:", C.Name)) == null ? void 0 : J.trim();
    z == null || z === "" || z === C.Name || (yt(), C.Name = Rn(z, "Card"), Ne());
  }
  async function se($) {
    const C = G[$];
    if (C == null)
      return;
    const z = 1 + xr(C);
    if (je(M).length - z < 1) {
      await wr("The last remaining card cannot be deleted.", "OK");
      return;
    }
    const J = z > 1 ? ` and its ${z - 1} nested card(s)` : "";
    if (await wr(
      `Really delete card "${C.Name}"${J} and all their widgets?`,
      "Delete",
      "Cancel"
    ) !== "Delete")
      return;
    const R = _r(M, C.Id);
    if (R == null)
      return;
    yt();
    const K = G[ie].Id, de = R.findIndex((tt) => tt.Id === C.Id);
    R.splice(de, 1), q([]), oe([]), gt([]);
    const be = Sn(K);
    Ie(be >= 0 ? be : a0($, 0, je(M).length - 1)), Ne();
  }
  function Ae($, C) {
    const z = G[$];
    if (z == null)
      return;
    const J = _r(M, z.Id);
    if (J == null)
      return;
    const N = J.findIndex((de) => de.Id === z.Id), R = N + C;
    if (R < 0 || R >= J.length)
      return;
    yt();
    const K = G[ie].Id;
    J.splice(N, 1), J.splice(R, 0, z), q([]), oe([]), Ie(Math.max(0, Sn(K))), Ne();
  }
  function it($, C, z) {
    var R;
    if (R1(M, $, C))
      return;
    const J = (R = G[ie]) == null ? void 0 : R.Id;
    if (yt(), !O1(M, $, C, z))
      return;
    q([]), oe([]);
    const N = J != null ? Sn(J) : -1;
    Ie(N >= 0 ? N : a0(ie, 0, je(M).length - 1)), Ne();
  }
  function ct($) {
    var R;
    const C = G[$];
    if (C == null)
      return;
    const z = _r(M, C.Id);
    if (z == null)
      return;
    const J = z.findIndex((K) => K.Id === C.Id);
    if (J <= 0)
      return;
    const N = z[J - 1];
    it(C.Id, N.Id, ((R = N.CardList) == null ? void 0 : R.length) ?? 0);
  }
  function ve($) {
    var de, be, tt;
    const C = G[$];
    if (C == null)
      return;
    const z = vi(M), J = (de = z.get(C.Id)) == null ? void 0 : de.Parent;
    if (J == null)
      return;
    const N = ((tt = (be = z.get(J.Id)) == null ? void 0 : be.Parent) == null ? void 0 : tt.Id) ?? null, K = (N == null ? M.Cards : z.get(N).Card.CardList ?? []).findIndex((Vt) => Vt.Id === J.Id);
    it(C.Id, N, K + 1);
  }
  const [fe, ke] = Ue(null), [bt, ot] = Ue(0);
  function Xr($, C, z) {
    ke({
      Title: $,
      Value: C,
      onCommit: (J) => {
        z(J), ot((N) => N + 1);
      }
    });
  }
  async function Jr() {
    await Pc(
      Qs,
      JSON.stringify(G[ie])
    ) || await wr("BrowserCard could not write to the clipboard.", "OK");
  }
  async function Yr() {
    if (Ge.length === 0) {
      await Jr();
      return;
    }
    const $ = G[ie].Widgets.filter((z) => Ge.includes(z.Id));
    if ($.length === 0)
      return;
    await Pc(eo, JSON.stringify($)) || await wr("BrowserCard could not write to the clipboard.", "OK");
  }
  async function w0() {
    await Yr(), Ge.length > 0 ? Xn() : await se(ie);
  }
  async function _n() {
    var J;
    const $ = await X5();
    if ($ == null) {
      await wr(
        "The clipboard does not contain a BrowserCard card or widget - or BrowserCard was not allowed to read the clipboard (please check your browser permissions, the console may have details).",
        "OK"
      );
      return;
    }
    let C;
    try {
      C = JSON.parse($.Serialization);
    } catch {
      return;
    }
    const z = G[ie];
    if ($.Kind === "card") {
      if (!Da(C))
        return;
      const N = C;
      Zr(N);
      const R = ((J = G[ie]) == null ? void 0 : J.Id) ?? null, K = (R != null ? _r(M, R) : null) ?? M.Cards;
      N.Name = na(N.Name, new Set(K.map((be) => be.Name))), yt();
      const de = R != null ? K.findIndex((be) => be.Id === R) : K.length - 1;
      K.splice(de + 1, 0, N), lt({ type: "card-id", id: N.Id });
    } else {
      if (z == null)
        return;
      const N = Array.isArray(C) ? C : [C];
      if (N.length === 0 || !N.every(xa))
        return;
      yt();
      const R = new Set(z.Widgets.map((de) => de.Name)), K = [];
      N.forEach((de) => {
        const be = de;
        be.Id = Vr("widget"), be.Name = na(be.Name ?? "Widget", R), R.add(be.Name), z.Widgets.push(be), K.push(be.Id);
      }), gt(K);
    }
    Ne();
  }
  async function x0() {
    var C;
    const $ = (C = Oe.current) == null ? void 0 : C.querySelector(".bc-card-canvas");
    if ($ != null)
      try {
        const z = "https://cdn.jsdelivr.net/npm/html-to-image@1/+esm", { toPng: J } = await import(
          // loaded on demand only
          /* @vite-ignore */
          z
        ), N = await J($, {
          width: Re,
          height: Ve,
          pixelRatio: 1,
          // native card size
          style: { transform: "scale(1)", borderRadius: "0", boxShadow: "none" },
          filter: (de) => {
            var be;
            return (
              // exclude edit-mode overlays
              !((be = de.classList) != null && be.contains("bc-edit-layer"))
            );
          }
        }), R = G[ie], K = document.createElement("a");
        K.href = N, K.download = `${M.Name ?? "Deck"} - ${R.Name ?? "Card"}.png`, K.click();
      } catch (z) {
        console.warn("[BrowserCard] could not create a screenshot:", z), window.alert(
          "BrowserCard could not create a screenshot - the console may have details."
        );
      }
  }
  const yr = De(null);
  qt(() => {
    !$t || a == null || (yr.current != null && window.clearTimeout(yr.current), yr.current = window.setTimeout(() => {
      yr.current = null, a();
    }, 800));
  }), qt(() => () => {
    yr.current != null && window.clearTimeout(yr.current);
  }, []), qt(() => {
    if (W == null)
      return;
    const $ = {
      getDeck: () => M,
      getCardIndex: () => dt.current,
      mutateDeck: (C) => {
        C(M), ce();
      },
      navigate: (C) => {
        if (typeof C == "number")
          lt({ type: "card-index", index: C });
        else {
          const z = je(M).findIndex((J) => J.Id === C || J.Name === C);
          z >= 0 && lt({ type: "card-index", index: z });
        }
      },
      saveDeck: () => (Y == null ? void 0 : Y()) ?? Promise.resolve(),
      evalInContext: async (C) => {
        const z = new q0(), J = us(
          M,
          je(M),
          null,
          lt,
          (de, be, tt) => re({ kind: "answer", message: de, buttons: be, resolve: tt }),
          (de, be, tt) => re({ kind: "ask", prompt: de, defaultValue: be, resolve: tt }),
          tn
        ), { Params: N, Args: R } = va(z, J, "deck");
        let K;
        try {
          K = new Function(
            ...N,
            `return (async () => { return (${C}) })()`
          );
        } catch (de) {
          throw new Error("invalid expression: " + ((de == null ? void 0 : de.message) ?? String(de)));
        }
        return K(...R);
      }
    };
    W.setContext($);
  });
  const kr = De([]), Qr = De([]), Sr = De(""), jn = De(0), [y0, Y0] = Ue(0), Qt = 100, k0 = 1e3, yt = Wt(($ = "") => {
    const C = Date.now();
    if ($ !== "" && $ === Sr.current && C - jn.current < k0) {
      jn.current = C;
      return;
    }
    Sr.current = $, jn.current = C, kr.current.push(JSON.stringify(M)), kr.current.length > Qt && kr.current.shift(), Qr.current = [];
  }, [M]);
  function S0($) {
    const C = JSON.parse($);
    Object.assign(M, C);
    for (const z of Object.keys(M))
      z in C || delete M[z];
    Sr.current = "", gt([]), q([]), oe([]), Ie((z) => a0(z, 0, je(M).length - 1)), Y0((z) => z + 1), ot((z) => z + 1), Ne();
  }
  function Kn() {
    const $ = kr.current.pop();
    $ != null && (Qr.current.push(JSON.stringify(M)), S0($));
  }
  function Zn() {
    const $ = Qr.current.pop();
    $ != null && (kr.current.push(JSON.stringify(M)), S0($));
  }
  function en($) {
    const C = G[ie], z = cm($, C, Re, Ve);
    yt(), C.Widgets.push(z), gt([z.Id]), Ne();
  }
  function Xn() {
    if (Ge.length === 0)
      return;
    const $ = G[ie];
    if ($.Widgets.some((C) => Ge.includes(C.Id))) {
      yt();
      for (let C = $.Widgets.length - 1; C >= 0; C--)
        Ge.includes($.Widgets[C].Id) && $.Widgets.splice(C, 1);
    }
    gt([]), Ne();
  }
  function Q($) {
    if (Ge.length === 0)
      return;
    const C = G[ie], z = [...C.Widgets], J = (R) => Ge.includes(R.Id);
    if (!z.some(J))
      return;
    yt();
    let N = z;
    switch ($) {
      case "front":
        N = [...z.filter((R) => !J(R)), ...z.filter(J)];
        break;
      case "back":
        N = [...z.filter(J), ...z.filter((R) => !J(R))];
        break;
      case "forward":
        for (let R = z.length - 2; R >= 0; R--)
          if (J(z[R]) && !J(z[R + 1])) {
            const K = z[R];
            z[R] = z[R + 1], z[R + 1] = K;
          }
        N = z;
        break;
      case "backward":
        for (let R = 1; R < z.length; R++)
          if (J(z[R]) && !J(z[R - 1])) {
            const K = z[R];
            z[R] = z[R - 1], z[R - 1] = K;
          }
        N = z;
        break;
    }
    C.Widgets.splice(0, C.Widgets.length, ...N), Ne();
  }
  function xe($) {
    if (Ge.length === 0 || $ === ie)
      return;
    const C = G[ie], z = G[$];
    if (z == null)
      return;
    const J = C.Widgets.filter((N) => Ge.includes(N.Id));
    if (J.length !== 0) {
      yt();
      for (let N = C.Widgets.length - 1; N >= 0; N--)
        Ge.includes(C.Widgets[N].Id) && C.Widgets.splice(N, 1);
      J.forEach((N) => {
        z.Widgets.push(N);
      }), gt([]), Ne();
    }
  }
  const [, Le] = Ue(0), Ne = Wt(() => Le(($) => $ + 1), []), et = De(null);
  et.current == null && (et.current = new q0());
  const Rt = De(null), Pt = De(null);
  Pt.current == null && (Pt.current = im(M, Rt, Ne));
  const Et = Pt.current, Nt = Wt(
    ($) => {
      Et[mn] = $ ?? void 0;
    },
    [Et]
  ), Ot = De(!1), dr = De(!1);
  qt(() => {
    const $ = Oe.current;
    if ($ == null)
      return;
    function C() {
      const { width: N, height: R } = $.getBoundingClientRect(), K = getComputedStyle($), de = parseInt(K.getPropertyValue("--canvas-width").trim()), be = parseInt(K.getPropertyValue("--canvas-height").trim()), tt = isFinite(de) && de > 0 ? de : M.CardWidth ?? Gs, Vt = isFinite(be) && be > 0 ? be : M.CardHeight ?? js;
      He(tt), sr(Vt);
      const Mt = t ? 24 : 0, hr = Math.max(0.1, Math.min((N - Mt * 2) / tt, (R - Mt * 2) / Vt)), nn = parseFloat(K.getPropertyValue("--canvas-scale").trim());
      isFinite(nn) && nn > 0 ? Pe($t ? Math.min(nn, hr) : nn) : Pe(hr);
    }
    C();
    const z = requestAnimationFrame(C), J = new ResizeObserver(C);
    return J.observe($), () => {
      cancelAnimationFrame(z), J.disconnect();
    };
  }, [M.CardWidth, M.CardHeight, $t]);
  const lt = Wt(($) => {
    if (V5()) {
      console.warn('[BrowserCard] navigation requested during rendering was ignored - call go() from an event or on("ready"), not on("render")');
      return;
    }
    const C = je(M);
    Ie((z) => {
      const J = (N) => (N !== z && (q((R) => [...R, z]), oe([]), dr.current = !1), N);
      switch ($.type) {
        case "next":
          return J(a0(z + 1, 0, C.length - 1));
        case "prev":
          return J(a0(z - 1, 0, C.length - 1));
        case "first":
          return J(0);
        case "last":
          return J(C.length - 1);
        case "card-index":
          return J(a0($.index, 0, C.length - 1));
        case "card-name": {
          const N = C.findIndex((R) => R.Name === $.name);
          return N >= 0 ? J(N) : z;
        }
        case "card-id": {
          const N = C.findIndex((R) => R.Id === $.id);
          return N >= 0 ? J(N) : z;
        }
        default:
          return z;
      }
    });
  }, [M]), Cn = De(() => {
  });
  Cn.current = ($, C) => {
    var K;
    const z = _r(M, $.Id);
    if (z == null)
      return;
    const J = z.indexOf($);
    if (J < 0)
      return;
    const N = Math.max(0, Math.min(z.length - 1, Math.round(C)));
    if (N === J)
      return;
    const R = (K = je(M)[dt.current]) == null ? void 0 : K.Id;
    z.splice(J, 1), z.splice(N, 0, $), Ie(Math.max(0, je(M).findIndex((de) => de.Id === R))), Ne();
  };
  const Q0 = Wt(
    ($, C) => Cn.current($, C),
    []
  ), tn = U0(() => ({
    print(...$) {
      E5(Et, $), we(!0);
    },
    println(...$) {
      z5(Et, $), we(!0);
    },
    clearConsole() {
      ga(Et);
    }
  }), []), Jn = Wt(() => e ? Promise.resolve() : (Y == null ? void 0 : Y()) ?? Promise.resolve(), [e, Y]), Yn = Wt(($) => us(
    M,
    je(M),
    $,
    lt,
    (C, z, J) => re({ kind: "answer", message: C, buttons: z, resolve: J }),
    (C, z, J) => re({ kind: "ask", prompt: C, defaultValue: z, resolve: J }),
    tn,
    Jn
  ), [M, lt, tn, Jn]);
  function rn() {
    Ot.current && dr.current && et.current.fireLocal("ready");
  }
  function Qn($) {
    Rt.current = $;
  }
  function Kt() {
    dr.current = !0, rn();
  }
  qt(() => {
    const $ = et.current;
    Et[Nr] = $;
    const C = us(
      M,
      je(M),
      Et,
      lt,
      (K, de, be) => re({ kind: "answer", message: K, buttons: de, resolve: be }),
      (K, de, be) => re({ kind: "ask", prompt: K, defaultValue: de, resolve: be }),
      tn,
      Jn
    ), { Params: z, Args: J } = va($, C, "deck");
    Ot.current = !1, dr.current = !1;
    const N = M.Script ?? "";
    let R = !0;
    if (N.trim() !== "")
      try {
        new Function(`return (async () => {
${N}
})()`);
      } catch (K) {
        console.warn("[BrowserCard] syntax error in deck script - ignored:", K), R = !1;
      }
    return $.run(R ? N : "", z, J).catch((K) => {
      console.warn("[BrowserCard] deck script error:", K);
    }).then(() => {
      Ot.current = !0, Ne(), rn();
    }), () => {
      $.teardown();
    };
  }, [M.Script]), qt(() => {
    if (!t)
      return;
    function $(C) {
      if (E != null)
        return;
      const z = C.target;
      if (!(z != null && /^(INPUT|TEXTAREA|SELECT)$/.test(z.tagName))) {
        if ($t) {
          if ((C.key === "z" || C.key === "Z") && (C.metaKey || C.ctrlKey)) {
            C.preventDefault(), C.shiftKey ? Zn() : Kn();
            return;
          }
          if ((C.key === "y" || C.key === "Y") && (C.metaKey || C.ctrlKey)) {
            C.preventDefault(), Zn();
            return;
          }
          if ((C.metaKey || C.ctrlKey) && !C.shiftKey && !C.altKey)
            switch (C.key) {
              case "c":
                C.preventDefault(), Yr();
                return;
              case "x":
                C.preventDefault(), w0();
                return;
              case "v":
                C.preventDefault(), _n();
                return;
            }
        }
        if ($t && Ge.length > 0) {
          if (C.key === "Escape") {
            gt([]);
            return;
          }
          if (C.key === "Delete" || C.key === "Backspace") {
            C.preventDefault(), Xn();
            return;
          }
          const J = G[ie];
          if (J == null)
            return;
          const N = J.Widgets.filter((be) => Ge.includes(be.Id));
          if (N.length === 0)
            return;
          const R = C.shiftKey ? 10 : 1;
          let K = 0, de = 0;
          switch (C.key) {
            case "ArrowLeft":
              K = -R;
              break;
            case "ArrowRight":
              K = R;
              break;
            case "ArrowUp":
              de = -R;
              break;
            case "ArrowDown":
              de = R;
              break;
            default:
              return;
          }
          C.preventDefault(), yt("nudge:" + Ge.join(",")), N.forEach((be) => {
            const { left: tt, top: Vt, width: Mt, height: hr } = Jt(be.Anchors, be.Offsets, Re, Ve);
            be.Offsets = W0(tt + K, Vt + de, Mt, hr, be.Anchors, Re, Ve);
          }), Ne();
          return;
        }
        (C.key === "ArrowRight" || C.key === "ArrowDown") && lt({ type: "next" }), (C.key === "ArrowLeft" || C.key === "ArrowUp") && lt({ type: "prev" });
      }
    }
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [lt, E, $t, Ge, ie, Re, Ve, t]);
  function _0() {
    if (ye.length === 0)
      return;
    const $ = ye[ye.length - 1];
    q((C) => C.slice(0, -1)), oe((C) => [...C, ie]), dr.current = !1, Ie($);
  }
  function e0() {
    if (U.length === 0)
      return;
    const $ = U[U.length - 1];
    oe((C) => C.slice(0, -1)), q((C) => [...C, ie]), dr.current = !1, Ie($);
  }
  const _e = G[ie], C0 = et.current.renderResult() ?? null, vt = $t && Gr != null ? _e.Widgets.find(($) => $.Id === Gr) ?? null : null, Xe = {
    isActive: M.SnapToGrid === !0,
    Width: M.GridWidth ?? 10,
    Height: M.GridHeight ?? 10
  };
  return X`
    <${On}>
      <div class="bc-app${t ? "" : " bare"}" ref=${Nt}>
        ${t && X`<${mm}
          DeckName=${M.Name}
          CardIndex=${ie}
          CardCount=${G.length}
          activeOverlay=${D}
          onOverlayToggle=${j}
          onGoFirst=${() => lt({ type: "first" })}
          onGoPrev=${() => lt({ type: "prev" })}
          onGoNext=${() => lt({ type: "next" })}
          onGoLast=${() => lt({ type: "last" })}
          isReadOnly=${e}
          isEditing=${$t}
          onEditToggle=${Yt}
          onInsert=${en}
          onDeckSave=${a}
          onDeckRevert=${s}
          onDeckReset=${o}
          onDeckExport=${l}
          onDeckImport=${d}
          onDeckExportText=${J0}
          onDeckImportText=${() => void yn()}
          onCardAdd=${() => void kn()}
          onCardDuplicate=${() => y(ie)}
          onCardRename=${() => void F(ie)}
          onCardDelete=${() => void se(ie)}
          onCardCopy=${() => void Jr()}
          onPaste=${() => void _n()}
          canUndo=${kr.current.length > 0}
          canRedo=${Qr.current.length > 0}
          onUndo=${Kn}
          onRedo=${Zn}
          onDeckEmbed=${I}
          onDeckStandalone=${O}
          onDeckImportURL=${() => void Gn()}
          onMCPSettings=${() => wn(!0)}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area${t ? "" : " bare"}" ref=${Oe}>
            <${fm}
              key=${_e.Id + ":" + y0}
              Card=${_e}
              Scale=${ze}
              CanvasW=${Re}
              CanvasH=${Ve}
              withChrome=${t}
              deckRenderSlot=${C0}
              deckScript=${M.Script ?? ""}
              makeContext=${Yn}
              deckProxy=${Et}
              onCardProxy=${Qn}
              onCardReady=${Kt}
              reorderCard=${Q0}
              isEditing=${$t}
              selectedIds=${Ge}
              onSelect=${jr}
              onSelectMany=${xn}
              onEdited=${Ne}
              Grid=${Xe}
              onBeforeEdit=${() => yt()}
            />
          </div>
          ${$t && X`
            <${hm}
              key=${(Gr ?? (Ge.length > 1 ? "multi" : "card:" + _e.Id)) + ":" + bt}
              Widget=${vt}
              SelectedCount=${Ge.length}
              CanvasW=${Re}
              CanvasH=${Ve}
              onEdited=${Ne}
              CardNames=${G.map(($) => $.Name)}
              CardIndex=${ie}
              onDelete=${Xn}
              onReorder=${Q}
              onMoveTo=${xe}
              Card=${_e}
              Deck=${M}
              onOpenEditor=${Xr}
              onBeforeEdit=${yt}
              onCopy=${() => void Yr()}
            />
          `}
        </div>
        ${D === "decks-panel" && X`
          <div class="bc-dropdown-backdrop" onClick=${() => j(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => j(null)}>×</button>
            </div>
            ${!e && X`
              <button class="bc-decks-new" onClick=${Un}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${Ft == null ? X`<div class="bc-decks-empty">loading…</div>` : Ft.length === 0 ? X`<div class="bc-decks-empty">no decks found</div>` : Ft.map(($) => X`
                      <div key=${$.Key}
                        class=${`bc-decks-item${$.Key === n ? " active" : ""}`}>
                        <span class="bc-decks-name"
                          title=${$.Name}
                          onClick=${() => {
    $.Key !== n && (m == null || m($.Key));
  }}
                        >${$.Name}</span>
                        ${!e && X`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void X0($)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void v0($)}>×</button>
                        `}
                      </div>
                    `)}
            </div>
            <label class="bc-decks-remember"
              title="reopen the deck you last worked on automatically after a page reload">
              <input type="checkbox" checked=${ur}
                onChange=${($) => b0($.target.checked)}/>
              <span>remember last deck on reload</span>
            </label>
          </div>
        `}
        ${D === "cards-panel" && X`
          <div class="bc-dropdown-backdrop" onClick=${() => j(null)}></div>
          <div class="bc-decks-panel bc-cards-wide">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => j(null)}>×</button>
            </div>
            ${$t && X`
              <button class="bc-decks-new" onClick=${() => void kn()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${(() => {
    var z, J;
    const $ = vi(M), C = ((J = $.get(((z = G[ie]) == null ? void 0 : z.Id) ?? "")) == null ? void 0 : J.Path) ?? "";
    return G.map((N, R) => {
      var ei;
      const K = $.get(N.Id), de = (K == null ? void 0 : K.Depth) ?? 0, be = (K == null ? void 0 : K.Path) ?? N.Name;
      if (Kr(be, C))
        return null;
      const tt = _r(M, N.Id) ?? [], Vt = tt.findIndex((A0) => A0.Id === N.Id), Mt = ((ei = N.CardList) == null ? void 0 : ei.length) ?? 0, hr = Mt > 0 && C.startsWith(be + "/"), nn = Mt > 0 && vr.has(be) && !hr;
      return X`
                <div key=${N.Id}
                  class=${`bc-cards-item${R === ie ? " active" : ""}`}>
                  <div class="bc-cards-main"
                    style=${{ paddingLeft: `${de * 16}px` }}
                    onClick=${() => {
        R !== ie && lt({ type: "card-index", index: R });
      }}>
                    <span
                      class=${`bc-cards-twisty${Mt === 0 ? " empty" : ""}${hr ? " disabled" : ""}`}
                      onClick=${(A0) => {
        A0.stopPropagation(), Mt > 0 && !hr && Dt(be);
      }}
                      title=${Mt === 0 ? "" : hr ? "contains the current card - cannot be collapsed" : nn ? "expand nested cards" : "collapse nested cards"}
                    >${Mt > 0 ? nn ? "▸" : "▾" : ""}</span>
                    <${pm}
                      Card=${N} CanvasW=${Re} CanvasH=${Ve}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${be}>${N.Name}</div>
                      <div class="bc-cards-sub">
                        #${R + 1} · ${N.Widgets.length}${" "}
                        ${N.Widgets.length === 1 ? "widget" : "widgets"}
                        ${Mt > 0 ? X` · ${Mt} nested` : null}
                      </div>
                    </div>
                  </div>
                  ${$t && X`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move up among siblings"
                        disabled=${Vt <= 0}
                        onClick=${() => Ae(R, -1)}>↑</button>
                      <button class="bc-console-btn" title="move down among siblings"
                        disabled=${Vt >= tt.length - 1}
                        onClick=${() => Ae(R, 1)}>↓</button>
                      <button class="bc-console-btn" title="make a child of the card above it"
                        disabled=${Vt <= 0}
                        onClick=${() => ct(R)}>⇥</button>
                      <button class="bc-console-btn" title="move out to the parent level"
                        disabled=${de === 0}
                        onClick=${() => ve(R)}>⇤</button>
                      <button class="bc-console-btn" title="duplicate this card (with nested cards)"
                        onClick=${() => y(R)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void F(R)}>✎</button>
                      <button class="bc-console-btn" title="delete this card and its nested cards"
                        disabled=${G.length <= 1}
                        onClick=${() => void se(R)}>×</button>
                    </div>
                  `}
                </div>`;
    });
  })()}
            </div>
          </div>
        `}
        ${or && X`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => ga(Et)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => we(!1)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${Et[Pn]}</pre>
          </div>
        `}
        ${t && X`<${gm}
          CardIndex=${ie}
          CardCount=${G.length}
          onFirst=${() => lt({ type: "first" })}
          onPrev=${() => lt({ type: "prev" })}
          onNext=${() => lt({ type: "next" })}
          onLast=${() => lt({ type: "last" })}
          onBack=${_0}
          historyLen=${ye.length}
          onForward=${e0}
          futureLen=${U.length}
          consoleShown=${or}
          onConsoleToggle=${() => we(($) => !$)}
          onScreenshot=${() => void x0()}
          mcpStatus=${W == null || W.connectionStatus.url === "" ? "inactive" : W.connectionStatus.connected ? "connected" : "connecting"}
        />`}
        <${bm}
          State=${E}
          onClose=${($) => {
    var z, J;
    const C = E;
    if (re(null), C != null)
      switch (C.kind) {
        case "answer":
          (z = C.resolve) == null || z.call(C, $ ?? "");
          break;
        case "ask":
          (J = C.resolve) == null || J.call(C, $);
          break;
        case "import-json":
          C.resolve($);
          break;
      }
  }}
        />
      </div>
      ${fe != null && X`
        <${dm}
          key=${fe.Title}
          State=${fe}
          onClose=${() => ke(null)}
        />
      `}
      ${gr && X`
        <${vm}
          onClose=${() => wn(!1)}
          onApply=${($, C) => W == null ? void 0 : W.configure($, C)}
        />
      `}
    <//>
  `;
}
const Uc = "https://rozek.github.io/browser-card/dist/BrowserCard.js";
function D1() {
  if (document.getElementById("bc-styles") == null) {
    const r = document.createElement("style");
    r.id = "bc-styles", r.textContent = D5, document.head.appendChild(r);
  }
}
function hs(r, e, t) {
  const n = new Blob([e], { type: t }), i = URL.createObjectURL(n), a = document.createElement("a");
  a.href = i, a.download = r, a.click(), setTimeout(() => URL.revokeObjectURL(i), 1e3);
}
function Ki(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Gc(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");
}
var Lr, ut, zt, xt, Ar, B0, L0, $e, ia, on, F1, P1, V1, H1, q1, W1, U1, G1, Tn, j1, K1, Z1, X1, J1;
class wm extends HTMLElement {
  constructor() {
    super(...arguments);
    Qe(this, $e);
    Qe(this, Lr, null);
    Qe(this, ut, null);
    Qe(this, zt, !1);
    Qe(this, xt, "bc-deck:default");
    Qe(this, Ar, 0);
    // remount key - bumped whenever the deck is swapped
    Qe(this, B0, 0);
    // guards against overlapping async mounts
    Qe(this, L0, new ef());
  }
  static get observedAttributes() {
    return ["name", "src", "readonly"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    B(this, L0).connect(), ue(this, $e, ia).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    B(this, L0).disconnect(), B(this, Lr) != null && un(null, B(this, Lr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && ue(this, $e, ia).call(this);
  }
}
Lr = new WeakMap(), ut = new WeakMap(), zt = new WeakMap(), xt = new WeakMap(), Ar = new WeakMap(), B0 = new WeakMap(), L0 = new WeakMap(), $e = new WeakSet(), ia = async function() {
  const t = ++Pa(this, B0)._;
  D1(), B(this, Lr) == null && (Me(this, Lr, document.createElement("div")), B(this, Lr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(B(this, Lr)));
  const n = this.getAttribute("src") ?? "";
  let i = null;
  if (n.trim())
    try {
      const s = JSON.parse(n);
      Br(s) ? i = s : console.warn('[BrowserCard] "src" attribute does not contain a valid deck');
    } catch {
      console.warn('[BrowserCard] invalid JSON in "src" attribute');
    }
  if (i == null && (i = JSON.parse(G5)), !i.Name) {
    const s = this.getAttribute("id") ?? "";
    s && Ti(s) && (i.Name = s);
  }
  Me(this, xt, "bc-deck:" + (this.getAttribute("name") ?? i.Name ?? "default"));
  let a = null;
  if (Vo())
    try {
      const s = localStorage.getItem(wa);
      if (s && s !== B(this, xt)) {
        const o = await t0(s, Zt);
        if (t !== B(this, B0))
          return;
        Br(o) && (Me(this, xt, s), a = o);
      }
    } catch {
    }
  try {
    const s = a ?? await t0(B(this, xt), Zt);
    if (t !== B(this, B0))
      return;
    Br(s) ? i = s : s != null && console.warn("[BrowserCard] ignoring invalid persisted deck for key " + S.quoted(B(this, xt)));
  } catch (s) {
    console.warn("[BrowserCard] could not access IndexedDB:", s);
  }
  i0(i), Me(this, ut, i), Me(this, zt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
}, /**** #renderDeck ****/
on = function() {
  j5(B(this, xt));
  let t = 0;
  try {
    const n = localStorage.getItem("bc-card-index:" + B(this, xt));
    n != null && (t = Math.max(0, parseInt(n, 10) || 0));
  } catch {
  }
  un(X`<${L1}
      key=${B(this, Ar)}
      deck=${B(this, ut)}
      isReadOnly=${B(this, zt)}
      StorageKey=${B(this, xt)}
      initialCardIndex=${t}
      onDeckSave=${() => void ue(this, $e, Tn).call(this)}
      onDeckRevert=${() => void ue(this, $e, j1).call(this)}
      onDeckReset=${() => void ue(this, $e, K1).call(this)}
      onDeckExport=${() => ue(this, $e, Z1).call(this)}
      onDeckImport=${() => ue(this, $e, X1).call(this)}
      onDeckImportText=${(n) => void ue(this, $e, J1).call(this, n)}
      onDeckList=${() => ue(this, $e, H1).call(this)}
      onDeckOpen=${(n) => void ue(this, $e, q1).call(this, n)}
      onDeckCreate=${(n) => ue(this, $e, W1).call(this, n)}
      onDeckDelete=${(n) => ue(this, $e, U1).call(this, n)}
      onDeckRename=${(n, i) => ue(this, $e, G1).call(this, n, i)}
      onDeckEmbed=${() => ue(this, $e, P1).call(this)}
      onDeckStandalone=${() => ue(this, $e, V1).call(this)}
      onDeckImportURL=${(n) => ue(this, $e, F1).call(this, n)}
      connector=${B(this, L0)}
      onDeckSaveImmediate=${() => ue(this, $e, Tn).call(this)}
    />`, B(this, Lr));
}, F1 = async function(t) {
  if (!B(this, zt))
    try {
      const n = await fetch(t);
      if (!n.ok) {
        window.alert(`The deck could not be loaded (HTTP ${n.status})`);
        return;
      }
      const i = JSON.parse(await n.text());
      if (!Br(i)) {
        window.alert("The given URL does not deliver a valid BrowserCard deck.");
        return;
      }
      const a = i;
      i0(a), Me(this, ut, a), Me(this, zt, this.hasAttribute("readonly") || (a.readOnly ?? !1)), await ue(this, $e, Tn).call(this), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
    } catch (n) {
      window.alert("Import failed: " + (n instanceof Error ? n.message : String(n)));
    }
}, /**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/
P1 = function() {
  if (B(this, ut) == null)
    return;
  const t = B(this, ut).Name ?? "Deck", n = Gc(JSON.stringify(Gi(B(this, ut)))), i = Uc, a = B(this, ut).CardWidth ?? Gs, s = B(this, ut).CardHeight ?? js, o = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ki(t)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${Ki(i)}"><\/script>

  <bc-deck
    style="display:block; width:${a}px; height:${s}px"
    src='${n}'
  ></bc-deck>
</body>
</html>`;
  hs(t + ".embed.html", o, "text/html");
}, /**** #exportStandalone — complete web app, referencing the public module ****/
V1 = function() {
  if (B(this, ut) == null)
    return;
  const t = B(this, ut).Name ?? "Deck", n = Gc(JSON.stringify(Gi(B(this, ut)))), i = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ki(t)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${Ki(Uc)}"><\/script>
  <bc-deck style="display:block; width:100%; height:100%" src='${n}'></bc-deck>
</body>
</html>`;
  hs(t + ".html", i, "text/html");
}, H1 = async function() {
  let t = [];
  try {
    t = (await qh(Zt)).filter((i) => typeof i == "string" && i.startsWith(ri)).map((i) => ({ Key: i, Name: i.slice(ri.length) }));
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
  return t.some((n) => n.Key === B(this, xt)) || t.unshift({
    // current deck was never saved so far
    Key: B(this, xt),
    Name: B(this, xt).slice(ri.length)
  }), t.sort((n, i) => n.Name.localeCompare(i.Name));
}, q1 = async function(t) {
  try {
    const n = await t0(t, Zt);
    if (!Br(n)) {
      window.alert("This deck cannot be loaded (it seems to be damaged).");
      return;
    }
    const i = n;
    i0(i), Me(this, xt, t), Me(this, ut, i), Me(this, zt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
}, W1 = async function(t) {
  if (this.hasAttribute("readonly"))
    return;
  const n = ri + t;
  try {
    if (await t0(n, Zt) != null) {
      window.alert(`A deck named "${t}" already exists.`);
      return;
    }
  } catch (a) {
    console.warn("[BrowserCard] could not access IndexedDB:", a);
    return;
  }
  const i = {
    Id: Vr("deck"),
    Name: t,
    readOnly: !1,
    swipeToAdjacentCard: !0,
    Script: "",
    Cards: [{
      Id: Vr("card"),
      Name: "Card 1",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    }]
  };
  Me(this, xt, n), Me(this, ut, i), Me(this, zt, !1), await ue(this, $e, Tn).call(this), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
}, U1 = async function(t) {
  if (!this.hasAttribute("readonly")) {
    if (t === B(this, xt)) {
      window.alert(
        'The currently open deck cannot be deleted - use "Reset to Original" instead.'
      );
      return;
    }
    try {
      await Ri(t, Zt);
    } catch (n) {
      console.warn("[BrowserCard] could not access IndexedDB:", n);
    }
  }
}, G1 = async function(t, n) {
  if (this.hasAttribute("readonly"))
    return;
  const i = ri + n;
  if (i !== t)
    try {
      if (await t0(i, Zt) != null) {
        window.alert(`A deck named "${n}" already exists.`);
        return;
      }
      if (t === B(this, xt))
        B(this, ut).Name = n, Me(this, xt, i), await ue(this, $e, Tn).call(this), await Ri(t, Zt), ue(this, $e, on).call(this);
      else {
        const s = await t0(t, Zt);
        if (!Br(s))
          return;
        s.Name = n, await Ol(i, s, Zt), await Ri(t, Zt);
      }
    } catch (a) {
      console.warn("[BrowserCard] could not access IndexedDB:", a);
    }
}, Tn = async function() {
  if (!(B(this, ut) == null || B(this, zt)))
    try {
      const t = Gi(B(this, ut));
      await Ol(B(this, xt), t, Zt);
    } catch (t) {
      console.warn("[BrowserCard] could not persist deck:", t);
    }
}, j1 = async function() {
  if (!B(this, zt))
    try {
      const t = await t0(B(this, xt), Zt);
      if (!Br(t)) {
        window.alert("There is no (valid) saved copy of this deck yet.");
        return;
      }
      const n = t;
      i0(n), Me(this, ut, n), Me(this, zt, this.hasAttribute("readonly") || (n.readOnly ?? !1)), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
}, K1 = async function() {
  if (!B(this, zt)) {
    try {
      await Ri(B(this, xt), Zt);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
    ue(this, $e, ia).call(this);
  }
}, /**** #exportDeck — downloads the deck as a JSON file ****/
Z1 = function() {
  B(this, ut) != null && hs(
    (B(this, ut).Name ?? "Deck") + ".json",
    JSON.stringify(Gi(B(this, ut)), null, 2),
    "application/json"
  );
}, /**** #importDeck — loads a deck from a JSON file and persists it ****/
X1 = function() {
  if (B(this, zt))
    return;
  const t = document.createElement("input");
  t.type = "file", t.accept = "application/json,.json,.bc", t.onchange = async () => {
    var i;
    const n = (i = t.files) == null ? void 0 : i[0];
    if (n != null)
      try {
        const a = JSON.parse(await n.text());
        if (!Br(a)) {
          window.alert("The chosen file does not contain a valid BrowserCard deck.");
          return;
        }
        const s = a;
        i0(s), Me(this, ut, s), Me(this, zt, this.hasAttribute("readonly") || (s.readOnly ?? !1)), await ue(this, $e, Tn).call(this), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
      } catch (a) {
        window.alert("Import failed: " + (a instanceof Error ? a.message : String(a)));
      }
  }, t.click();
}, J1 = async function(t) {
  if (!B(this, zt))
    try {
      const n = JSON.parse(t);
      if (!Br(n)) {
        window.alert("The pasted text does not contain a valid BrowserCard deck.");
        return;
      }
      const i = n;
      i0(i), Me(this, ut, i), Me(this, zt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), await ue(this, $e, Tn).call(this), Me(this, Ar, B(this, Ar) + 1), ue(this, $e, on).call(this);
    } catch (n) {
      window.alert("Import failed: " + (n instanceof Error ? n.message : String(n)));
    }
};
var $r, Si, _i, to;
class xm extends HTMLElement {
  constructor() {
    super(...arguments);
    Qe(this, _i);
    Qe(this, $r, null);
    Qe(this, Si, 0);
  }
  static get observedAttributes() {
    return ["src"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    ue(this, _i, to).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    B(this, $r) != null && un(null, B(this, $r));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && ue(this, _i, to).call(this);
  }
}
$r = new WeakMap(), Si = new WeakMap(), _i = new WeakSet(), /**** #mount ****/
to = function() {
  D1(), B(this, $r) == null && (Me(this, $r, document.createElement("div")), B(this, $r).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(B(this, $r)));
  const t = this.getAttribute("src") ?? "";
  let n = null;
  if (t.trim())
    try {
      const i = JSON.parse(t);
      Br(i) && (n = i);
    } catch {
    }
  if (n == null) {
    console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute'), un(X`
        <div style=${{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#888",
      font: "13px/1.4 system-ui, sans-serif"
    }}>this &lt;bc-deck&gt; contains no valid deck</div>
      `, B(this, $r));
    return;
  }
  i0(n), Me(this, Si, B(this, Si) + 1), un(X`<${L1}
      key=${B(this, Si)}
      deck=${n}
      isReadOnly=${!0}
      withChrome=${!1}
    />`, B(this, $r));
};
const ym = Function("return this")();
ym.BC = {
  render: un,
  html: X,
  Preact: f1,
  createContext: su,
  toChildArray: F0,
  cloneElement: au,
  createPortal: bu,
  useId: du,
  useRef: De,
  useState: Ue,
  useEffect: qt,
  useCallback: Wt,
  useMemo: U0,
  useContext: uu,
  fromLocalTo: $2,
  fromViewportTo: I2,
  fromDocumentTo: T2,
  Marked: od,
  markedHighlight: r2,
  markedKatex: Q4,
  hljs: qn,
  ModuleURL: import.meta.url
  // actual URL of the running BrowserCard.js
};
customElements.get("bc-deck") == null && customElements.define("bc-deck", xm);
customElements.get("bc-designer") == null && customElements.define("bc-designer", wm);
const Xg = S.HTMLsafe, Jg = S.ValidatorForClassifier, Yg = S.ValueIsArray, Qg = S.ValueIsBoolean, e3 = S.ValueIsCardinal, t3 = S.ValueIsColor, r3 = S.ValueIsEMailAddress, n3 = S.ValueIsFiniteNumber, i3 = S.ValueIsFunction, a3 = S.ValueIsInteger, s3 = S.ValueIsIntegerInRange, o3 = S.ValueIsList, l3 = S.ValueIsListSatisfying, c3 = S.ValueIsNumber, u3 = S.ValueIsNumberInRange, d3 = S.ValueIsObject, h3 = S.ValueIsOneOf, f3 = S.ValueIsOrdinal, p3 = S.ValueIsPlainObject, m3 = S.ValueIsString, g3 = S.ValueIsStringMatching, b3 = S.ValueIsText, v3 = S.ValueIsTextline, w3 = S.ValueIsURL, x3 = S.acceptNil, y3 = S.escaped, k3 = S.expectBoolean, S3 = S.expectFunction, _3 = S.expectText, C3 = S.quoted, A3 = S.rejectNil;
export {
  Hc as AlphaPercentOf,
  z2 as BC_BackgroundModes,
  R2 as BC_BorderStyles,
  Nm as BC_Cursors,
  Hg as BC_DatePattern,
  I5 as BC_DateRegExp,
  Pg as BC_DateTimePattern,
  $5 as BC_DateTimeRegExp,
  cs as BC_ErrorIndicator,
  Im as BC_FontStyles,
  N2 as BC_FontWeightValues,
  $m as BC_FontWeights,
  Gg as BC_MonthPattern,
  N5 as BC_MonthRegExp,
  O2 as BC_Overflows,
  Kg as BC_PropertyEditorTypes,
  Us as BC_SafeSlot,
  Tm as BC_TextAlignments,
  M2 as BC_TextDecorationLines,
  E2 as BC_TextDecorationStyles,
  Dg as BC_TimePattern,
  A5 as BC_TimeRegExp,
  Am as BC_Version,
  Wg as BC_WeekPattern,
  T5 as BC_WeekRegExp,
  Zg as BC_expectedOrientations,
  p1 as BC_horizontalAnchorses,
  m1 as BC_verticalAnchorses,
  qc as ColorFrom,
  Dc as EOLCount,
  On as Fragment,
  Xg as HTMLsafe,
  od as Marked,
  f1 as Preact,
  Vc as RGBHexOf,
  q0 as ScriptInstance,
  M1 as StringFromArguments,
  Jg as ValidatorForClassifier,
  Oo as ValueIsAnchors,
  Yg as ValueIsArray,
  S1 as ValueIsBackgroundTexture,
  Qg as ValueIsBoolean,
  _1 as ValueIsBorderStyle,
  C1 as ValueIsBoxShadow,
  Da as ValueIsCardJSON,
  e3 as ValueIsCardinal,
  t3 as ValueIsColor,
  qg as ValueIsDate,
  Vg as ValueIsDateTime,
  Br as ValueIsDeck,
  Mr as ValueIsDimension,
  r3 as ValueIsEMailAddress,
  n3 as ValueIsFiniteNumber,
  i3 as ValueIsFunction,
  w1 as ValueIsGeometry,
  g1 as ValueIsIdentifier,
  a3 as ValueIsInteger,
  s3 as ValueIsIntegerInRange,
  gg as ValueIsIntegerList,
  hg as ValueIsLineList,
  o3 as ValueIsList,
  l3 as ValueIsListSatisfying,
  nr as ValueIsLocation,
  jg as ValueIsMonth,
  Ti as ValueIsName,
  c3 as ValueIsNumber,
  u3 as ValueIsNumberInRange,
  pg as ValueIsNumberList,
  d3 as ValueIsObject,
  Bo as ValueIsOffsets,
  h3 as ValueIsOneOf,
  f3 as ValueIsOrdinal,
  A1 as ValueIsOverflowList,
  A2 as ValueIsPhoneNumber,
  p3 as ValueIsPlainObject,
  b1 as ValueIsPosition,
  $1 as ValueIsSerializableObject,
  Lo as ValueIsSerializableValue,
  v1 as ValueIsSize,
  m3 as ValueIsString,
  g3 as ValueIsStringMatching,
  b3 as ValueIsText,
  y1 as ValueIsTextDecoration,
  k1 as ValueIsTextShadow,
  v3 as ValueIsTextline,
  Fg as ValueIsTime,
  w3 as ValueIsURL,
  Ug as ValueIsWeek,
  xa as ValueIsWidgetJSON,
  x3 as acceptNil,
  wg as acceptableBoolean,
  Cg as acceptableCardinal,
  Mg as acceptableColor,
  Eg as acceptableEMailAddress,
  Ng as acceptableFunction,
  kg as acceptableInteger,
  Sg as acceptableIntegerInRange,
  Og as acceptableName,
  Bg as acceptableNameOrIndex,
  xg as acceptableNumber,
  yg as acceptableNumberInRange,
  _g as acceptableOrdinal,
  zg as acceptablePhoneNumber,
  Ag as acceptableString,
  $g as acceptableStringMatching,
  Ig as acceptableText,
  Tg as acceptableTextline,
  Rg as acceptableURL,
  vg as acceptableValue,
  X2 as allowAnchors,
  i5 as allowBackgroundTexture,
  s5 as allowBorderStyle,
  l5 as allowBoxShadow,
  H2 as allowDimension,
  K2 as allowGeometry,
  L2 as allowIdentifier,
  k5 as allowIntegerList,
  g5 as allowLineList,
  P2 as allowLocation,
  F2 as allowName,
  w5 as allowNumberList,
  Y2 as allowOffsets,
  u5 as allowOverflowList,
  W2 as allowPosition,
  p5 as allowSerializableObject,
  h5 as allowSerializableValue,
  G2 as allowSize,
  e5 as allowTextDecoration,
  r5 as allowTextShadow,
  Gm as allowedAnchors,
  eg as allowedBackgroundTexture,
  rg as allowedBorderStyle,
  ig as allowedBoxShadow,
  Dm as allowedDimension,
  Wm as allowedGeometry,
  Em as allowedIdentifier,
  bg as allowedIntegerList,
  fg as allowedLineList,
  Bm as allowedLocation,
  Rm as allowedName,
  mg as allowedNumberList,
  Km as allowedOffsets,
  sg as allowedOverflowList,
  Pm as allowedPosition,
  ug as allowedSerializableObject,
  lg as allowedSerializableValue,
  Hm as allowedSize,
  Xm as allowedTextDecoration,
  Ym as allowedTextShadow,
  us as buildContext,
  va as buildScriptParams,
  vi as cardTreeIndex,
  Sm as clear,
  au as cloneElement,
  W0 as computeOffsets,
  su as createContext,
  hn as createElement,
  bu as createPortal,
  xh as createRef,
  vu as createStore,
  Vo as deckShallBeRemembered,
  Ri as del,
  Cm as entries,
  y3 as escaped,
  Ki as escapedForHTML,
  J2 as expectAnchors,
  a5 as expectBackgroundTexture,
  k3 as expectBoolean,
  o5 as expectBorderStyle,
  c5 as expectBoxShadow,
  q2 as expectDimension,
  S3 as expectFunction,
  Z2 as expectGeometry,
  D2 as expectIdentifier,
  S5 as expectIntegerList,
  b5 as expectLineList,
  V2 as expectLocation,
  Ro as expectName,
  x5 as expectNumberList,
  Q2 as expectOffsets,
  d5 as expectOverflowList,
  U2 as expectPosition,
  m5 as expectSerializableObject,
  f5 as expectSerializableValue,
  j2 as expectSize,
  _3 as expectText,
  t5 as expectTextDecoration,
  n5 as expectTextShadow,
  jm as expectedAnchors,
  tg as expectedBackgroundTexture,
  ng as expectedBorderStyle,
  ag as expectedBoxShadow,
  Fm as expectedDimension,
  Um as expectedGeometry,
  zm as expectedIdentifier,
  _5 as expectedIntegerList,
  v5 as expectedLineList,
  Lm as expectedLocation,
  Om as expectedName,
  y5 as expectedNumberList,
  Zm as expectedOffsets,
  og as expectedOverflowList,
  Vm as expectedPosition,
  dg as expectedSerializableObject,
  cg as expectedSerializableValue,
  qm as expectedSize,
  Jm as expectedTextDecoration,
  Qm as expectedTextShadow,
  je as flattenCards,
  Eh as forwardRef,
  T2 as fromDocumentTo,
  $2 as fromLocalTo,
  I2 as fromViewportTo,
  t0 as get,
  hn as h,
  X as html,
  C5 as installStylesheetFor,
  qh as keys,
  nm as makeCardProxy,
  im as makeDeckProxy,
  rm as makeWidgetProxy,
  r2 as markedHighlight,
  Q4 as markedKatex,
  Nh as memo,
  O1 as moveCardInTree,
  R1 as moveWouldCycle,
  Vr as newInternalId,
  Q5 as normalizeWidgetOrder,
  Lg as normalizedName,
  Z5 as pathHiddenByCollapse,
  Ys as pathOf,
  i0 as prepareLoadedDeck,
  C3 as quoted,
  I1 as raiseIdCounterTo,
  A3 as rejectNil,
  j5 as rememberCurrentDeck,
  un as render,
  W5 as resolveBehaviorUrl,
  Jt as resolveGeometry,
  L5 as safelyRendered,
  Rn as sanitizeName,
  Gi as serializableDeck,
  Ol as set,
  K5 as setDeckRemembering,
  _r as siblingListOf,
  B1 as stripComputedGeometry,
  J5 as stripInternalIds,
  Vn as throwError,
  Mm as throwReadOnlyError,
  F0 as toChildArray,
  na as uniqueNameIn,
  Wt as useCallback,
  uu as useContext,
  qt as useEffect,
  so as useErrorBoundary,
  du as useId,
  $h as useLayoutEffect,
  U0 as useMemo,
  cu as useReducer,
  De as useRef,
  Ue as useState,
  _m as values
};
