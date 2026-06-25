var uh = Object.defineProperty;
var ll = (r) => {
  throw TypeError(r);
};
var dh = (r, e, t) => e in r ? uh(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var nt = (r, e, t) => dh(r, typeof e != "symbol" ? e + "" : e, t), za = (r, e, t) => e.has(r) || ll("Cannot " + t);
var R = (r, e, t) => (za(r, e, "read from private field"), t ? t.call(r) : e.get(r)), rt = (r, e, t) => e.has(r) ? ll("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), ze = (r, e, t, n) => (za(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), ue = (r, e, t) => (za(r, e, "access private method"), t);
var Ra = (r, e, t, n) => ({
  set _(i) {
    ze(r, e, i, t);
  },
  get _() {
    return R(r, e, n);
  }
});
function Vc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var J0 = { exports: {} }, hh = J0.exports, cl;
function fh() {
  return cl || (cl = 1, (function(r, e) {
    (function(t, n) {
      n(e);
    })(hh, (function(t) {
      var n = Function("return this")();
      function i(b, C) {
        return b == null || "hasOwnProperty" in b && typeof b.hasOwnProperty == "function" ? b.hasOwnProperty(C) : Object.prototype.hasOwnProperty.call(b, C);
      }
      function a(b, C) {
        return b == null || "isPrototypeOf" in b && typeof b.isPrototypeOf == "function" ? b.isPrototypeOf(C) : Object.prototype.isPrototypeOf.call(b, C);
      }
      function s(b) {
        var C = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(b);
        if (C == null) throw new Error(b);
        var P = new Error(C[2]);
        throw P.name = C[1], P;
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
      function z(b, C) {
        return (typeof b == "string" || b instanceof String) && C.test(b.valueOf());
      }
      var O = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function W(b) {
        return z(b, O);
      }
      var Y = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function re(b) {
        return z(b, Y);
      }
      function M(b) {
        return typeof b == "function";
      }
      function G(b) {
        return typeof b == "function" && (b.name == null || b.name === "");
      }
      function de(b) {
        return typeof b == "function" && b.name != null && b.name !== "";
      }
      function ce(b) {
        return typeof b == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function ie(b) {
        return typeof b == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function Ne(b) {
        return b != null && typeof b == "object";
      }
      function ye(b) {
        return b != null && typeof b == "object" && Object.getPrototypeOf(b) === Object.prototype;
      }
      function H(b) {
        return b != null && typeof b == "object" && !(b instanceof Object);
      }
      var U = Array.isArray;
      function oe(b, C, P) {
        if (U(b)) {
          for (var le = 0, Se = b.length; le < Se; le++) if (b[le] === void 0) return !1;
          return !(C != null && b.length < C) && !(P != null && b.length > P);
        }
        return !1;
      }
      function B(b, C, P, le) {
        if (U(b)) try {
          for (var Se = 0, Ue = b.length; Se < Ue; Se++) if (C(b[Se]) == 0) return !1;
          return !(P != null && b.length < P) && !(le != null && b.length > le);
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
      function te(b) {
        return b != null && typeof b.then == "function";
      }
      function Oe(b) {
        return b instanceof RegExp;
      }
      function Ve(b, C) {
        return C.indexOf(b) >= 0;
      }
      function Be(b) {
        return k(b) && (y0.hasOwnProperty(b) || /^#[a-fA-F0-9]{6}$/.test(b) || /^#[a-fA-F0-9]{8}$/.test(b) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(b) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(b));
      }
      var We = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      function qe(b) {
        return z(b, We);
      }
      var or = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function lr(b) {
        if (!z(b, or) || b === "") return !1;
        try {
          return new URL(b, "file://"), !0;
        } catch {
          return !1;
        }
      }
      var we = !1, Le = !0;
      function ft(b, C, P, le, Se) {
        if (C == null) {
          if (le) return C;
          s("MissingArgument: no ".concat(et(b), " given"));
        } else if (P(C)) switch (!0) {
          case C instanceof Boolean:
          case C instanceof Number:
          case C instanceof String:
            return C.valueOf();
          default:
            return C;
        }
        else s("InvalidArgument: the given ".concat(et(b), " is no valid ").concat(et(Se)));
      }
      function me(b, C, P) {
        var le = function(Ue, en) {
          return ft(Ue, en, b, C, P);
        }, Se = b.name;
        return Se != null && /^ValueIs/.test(Se) ? cr(le, Se.replace(/^ValueIs/, C ? "allow" : "expect")) : le;
      }
      function cr(b, C) {
        if (b == null && s("MissingArgument: no function given"), typeof b != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), C == null && s("MissingArgument: no desired name given"), typeof C == "string" || C instanceof String || s("InvalidArgument: the given desired name is not a string"), b.name === C) return b;
        try {
          if (Object.defineProperty(b, "name", { value: C }), b.name === C) return b;
        } catch {
        }
        return new Function("originalFunction", "return function " + C + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(b);
      }
      function Ke(b, C) {
        if (C != null) return C.valueOf();
        s("MissingArgument: no ".concat(et(b), " given"));
      }
      var wt = Ke, mr = me(o, Le, "boolean value"), mn = mr, Tt = me(o, we, "boolean value"), Pr = Tt, Vr = me(l, Le, "numeric value"), gn = Vr, Qt = me(l, we, "numeric value"), Hr = Qt, Ar = me(d, Le, "finite numeric value"), $r = Ar, Ft = me(d, we, "finite numeric value"), qr = Ft, Pt = me(h, Le, "NaN value"), jt = Pt, Rt = me(h, we, "NaN value"), Ir = Rt;
      function l0(b, C, P, le, Se, Ue) {
        return C == null ? C : u0(b, C, P, le, Se, Ue);
      }
      var W0 = l0;
      function c0(b, C, P, le, Se, Ue) {
        if (Qt(b, C), isNaN(C) && s("InvalidArgument: the given ".concat(et(b), " is not-a-number")), Se == null && (Se = !0), Ue == null && (Ue = !0), P != null && isFinite(P)) {
          if (le != null && isFinite(le)) {
            if (C < P || !Se && C === P || C > le || !Ue && C === le) throw new RangeError("the given ".concat(et(b), " (").concat(C, ") is outside ") + "the allowed range (".concat(P, "...").concat(le, ")"));
          } else if (C < P || !Se && C === P) throw new RangeError("the given ".concat(et(b), " is below the allowed ") + "minimum (".concat(C, " ").concat(Se ? "<" : "<=", " ").concat(P, ")"));
        } else if (le != null && isFinite(le) && (C > le || !Ue && C === le)) throw new RangeError("the given ".concat(et(b), " exceeds the allowed ") + "maximum (".concat(C, " ").concat(Ue ? ">" : ">=", " ").concat(le, ")"));
        return C.valueOf();
      }
      var u0 = c0, Pn = me(f, Le, "integral numeric value"), d0 = Pn, Wr = me(f, we, "integral numeric value"), Vn = Wr;
      function Ur(b, C, P, le) {
        return C == null ? C : vn(b, C, P, le);
      }
      var Hn = Ur;
      function bn(b, C, P, le) {
        if (Wr(b, C), isNaN(C) && s("InvalidArgument: the given ".concat(et(b), " is not-a-number")), P != null && isFinite(P)) {
          if (le != null && isFinite(le)) {
            if (C < P || C > le) throw new RangeError("the given ".concat(et(b), " (").concat(C, ") is outside ") + "the allowed range (".concat(P, "...").concat(le, ")"));
          } else if (C < P) throw new RangeError("the given ".concat(et(b), " is below the allowed ") + "minimum (".concat(C, " < ").concat(P, ")"));
        } else if (le != null && isFinite(le) && C > le) throw new RangeError("the given ".concat(et(b), " exceeds the allowed ") + "maximum (".concat(C, " > ").concat(le, ")"));
        return C.valueOf();
      }
      var vn = bn, wn = me(m, Le, "ordinal number"), gr = wn, S = me(m, we, "ordinal number"), L = S, se = me(v, Le, "cardinal number"), $e = se, ot = me(v, we, "cardinal number"), lt = ot, be = me(k, Le, "literal string"), fe = be, ke = me(k, we, "literal string"), xt = ke, ct = me(I, Le, "non-empty literal string"), Gr = ct, er = me(I, we, "non-empty literal string"), ur = er;
      function jr(b, C, P) {
        return C == null ? C : h0(b, C, P);
      }
      var Kr = jr;
      function xn(b, C, P) {
        if (ke(b, C), P.test(C)) return C.valueOf();
        s("InvalidArgument: the given ".concat(et(b), " does not match the specified pattern"));
      }
      var h0 = xn, f0 = me(W, Le, "literal text"), p0 = f0, Zr = me(W, we, "literal text"), Nt = Zr, qn = me(re, Le, "single line of text"), m0 = qn, Vt = me(re, we, "single line of text"), g0 = Vt, Xr = me(M, Le, "JavaScript function"), U0 = Xr, b0 = me(M, we, "JavaScript function"), G0 = b0, ut = me(G, Le, "anonymous JavaScript function"), Jr = ut, X = me(G, we, "anonymous JavaScript function"), xe = X, Ie = me(de, Le, "named JavaScript function"), Qe = Ie, dt = me(de, we, "named JavaScript function"), Ct = dt, je = me(ce, Le, "native JavaScript function"), Yr = je, zt = me(ce, we, "native JavaScript function"), Ot = zt, Qr = me(ie, Le, "scripted JavaScript function"), v0 = Qr, yn = me(ie, we, "scripted JavaScript function"), j0 = yn, w0 = me(Ne, Le, "JavaScript object"), K0 = w0, Wn = me(Ne, we, "JavaScript object"), dr = Wn, Un = me(ye, Le, '"plain" JavaScript object'), Kt = Un, x0 = me(ye, we, '"plain" JavaScript object'), $ = x0, x = me(H, Le, '"vanilla" JavaScript object'), N = x, F = me(H, we, '"vanilla" JavaScript object'), q = F;
      function ae(b, C) {
        return C == null ? C : Ae(b, C);
      }
      var ve = ae;
      function Ce(b, C) {
        if (C == null && s("MissingArgument: no ".concat(et(b), " given")), U(C)) return C;
        s("InvalidArgument: the given ".concat(et(b), " is no JavaScript array"));
      }
      var Ae = Ce;
      function J(b, C, P, le, Se) {
        return C == null ? C : He(b, C, P, le, Se);
      }
      var ge = J;
      function Ee(b, C, P, le, Se) {
        if (C == null && s("MissingArgument: no ".concat(et(b), " given")), oe(C, le, Se)) return C;
        s("InvalidArgument: the given ".concat(et(b), " is ") + (P == null ? "either not a list or contains an invalid number of elements" : "no " + et(P)));
      }
      var He = Ee;
      function pt(b, C, P, le, Se, Ue) {
        return C == null ? C : Ai(b, C, P, le, Se, Ue);
      }
      var br = pt;
      function Ci(b, C, P, le, Se, Ue) {
        if (C == null && s("MissingArgument: no ".concat(et(b), " given")), B(C, P, Se, Ue)) return C;
        s("InvalidArgument: the given ".concat(et(b), " is ") + (le == null ? "either not a list or contains invalid elements" : "no " + et(le)));
      }
      var Ai = Ci;
      function Ro(b, C, P, le) {
        return C == null ? C : Bo(b, C, P, le);
      }
      var G1 = Ro;
      function Oo(b, C, P, le) {
        return C == null && s("MissingArgument: no ".concat(et(b), " given")), C instanceof P || s("InvalidArgument: the given ".concat(et(b), " is no ").concat(et(le))), C;
      }
      var Bo = Oo;
      function Lo(b, C, P, le) {
        return C == null ? C : Fo(b, C, P, le);
      }
      var j1 = Lo;
      function Do(b, C, P, le) {
        if (C == null && s("MissingArgument: no ".concat(et(b), " given")), P.isPrototypeOf(C)) return C;
        s("InvalidArgument: the given ".concat(et(b), " is no ").concat(et(le)));
      }
      var Fo = Do, Po = me(j, Le, "JavaScript Date object"), K1 = Po, Vo = me(j, we, "JavaScript Date object"), Z1 = Vo, Ho = me(E, Le, "JavaScript Error object"), X1 = Ho, qo = me(E, we, "JavaScript Error object"), J1 = qo, Wo = me(te, Le, 'JavaScript Promise (or "Thenable") object'), Y1 = Wo, Uo = me(te, we, 'JavaScript Promise (or "Thenable") object'), Q1 = Uo, Go = me(Oe, Le, "JavaScript RegExp object"), eh = Go, jo = me(Oe, we, "JavaScript RegExp object"), th = jo;
      function Ko(b, C, P) {
        return C == null ? C : Xo(b, C, P);
      }
      var rh = Ko;
      function Zo(b, C, P) {
        if (C == null && s("MissingArgument: no ".concat(et(b), " given")), Ve(C, P)) return C == null || typeof C.valueOf != "function" ? C : C.valueOf();
        s("InvalidArgument: the given ".concat(et(b), " is not among the supported values"));
      }
      var Xo = Zo, Jo = me(Be, Le, "CSS color specification"), nh = Jo, Yo = me(Be, we, "CSS color specification"), ih = Yo, Qo = me(qe, Le, "EMail address"), ah = Qo, el = me(qe, we, "EMail address"), sh = el, tl = me(lr, Le, "URL"), oh = tl, rl = me(lr, we, "URL"), lh = rl;
      function et(b) {
        return b.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, (function(C) {
          return C === "\\" ? "\\\\" : C;
        })).replace(/[\x00-\x1f\x7f-\x9f]/g, (function(C) {
          switch (C) {
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
              var P = C.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(P.length) + P;
          }
        }));
      }
      function nl(b, C) {
        return C === void 0 && (C = '"'), b.replace(C === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, (function(P) {
          switch (P) {
            case "'":
              return "\\'";
            case '"':
              return '\\"';
            case "\\":
              return "\\\\";
            default:
              return P;
          }
        })).replace(/[\x00-\x1f\x7f-\x9f]/g, (function(P) {
          switch (P) {
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
              var le = P.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(le.length) + le;
          }
        }));
      }
      function il(b, C) {
        return C = (C || "").trim() || "<br/>", b.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, (function(P) {
          switch (P) {
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
              return C;
            case "\r":
              return "&#92;r";
            case "	":
              return "&#92;t";
            case "\v":
              return "&#92;v";
            case "\\":
              return "&#92;";
            default:
              var le = P.charCodeAt(0).toString(16);
              return "&#x0000".substring(3, 7 - le.length) + le + ";";
          }
        }));
      }
      function $i(b, C, P) {
        if (b === C) return !1;
        var le = typeof b;
        if (le !== typeof C) return !0;
        switch (le) {
          case "undefined":
          case "boolean":
          case "string":
          case "function":
          default:
            return !0;
          case "number":
            return isNaN(b) !== isNaN(C) || Math.abs(b - C) > Number.EPSILON;
          case "object":
            return b == null || C == null || (P === "by-value" && (b instanceof Boolean || b instanceof Number || b instanceof String) ? b.valueOf() !== C.valueOf() : Array.isArray(b) ? (function(Se, Ue, en) {
              if (!Array.isArray(Ue) || Se.length !== Ue.length) return !0;
              for (var tr = 0, ch = Se.length; tr < ch; tr++) if ($i(Se[tr], Ue[tr], en)) return !0;
              return !1;
            })(b, C, P) : P === "by-reference" || (function(Se, Ue, en) {
              if (Object.getPrototypeOf(Se) !== Object.getPrototypeOf(Ue)) return !0;
              for (var tr in Se) if (!(tr in Ue)) return !0;
              for (var tr in Ue)
                if (!(tr in Se) || $i(Se[tr], Ue[tr], en)) return !0;
              return !1;
            })(b, C, P));
        }
        return !0;
      }
      function al(b) {
        for (var C in Wn("candidate", b), b) if (i(b, C)) return !1;
        return !0;
      }
      function sl(b) {
        return /^\s*$/.test(b);
      }
      var y0 = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
      function ol(b) {
        var C = b.toLowerCase();
        if (y0.hasOwnProperty(C) && (b = y0[C]), /^#[a-fA-F0-9]{6}$/.test(b)) return b + "FF";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return b;
        var P = "0123456789ABCDEF";
        function le(Ue) {
          return Ue > 255 && (Ue = 255), P[Math.trunc(Ue / 16)] + P[Ue % 16];
        }
        var Se = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (Se != null) return "#" + le(parseInt(Se[1], 10)) + le(parseInt(Se[2], 10)) + le(parseInt(Se[3], 10)) + "FF";
        if ((Se = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return "#" + le(parseInt(Se[1], 10)) + le(parseInt(Se[2], 10)) + le(parseInt(Se[3], 10)) + le(255 * parseFloat(Se[4]));
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }
      t.ColorSet = y0, t.FunctionWithName = cr, t.HTMLsafe = il, t.HexColor = ol, t.MarkDownSafe = function(b, C) {
        return il(b, C).replace(/:/g, "&#58;");
      }, t.ObjectIsEmpty = al, t.ObjectIsNotEmpty = function(b) {
        return !al(b);
      }, t.ObjectMergedWith = function(b) {
        for (var C = [], P = 1; P < arguments.length; P++) C[P - 1] = arguments[P];
        for (var le = 0, Se = C.length; le < Se; le++) {
          var Ue = C[le];
          if (Ue != null) if (typeof Ue == "object") for (var en in Ue) {
            var tr = Object.getOwnPropertyDescriptor(Ue, en);
            tr != null && Object.defineProperty(b, en, tr);
          }
          else s("InvalidArgument: argument #" + (le + 1) + " is not an object");
        }
        return b;
      }, t.Object_hasOwnProperty = i, t.Object_isPrototypeOf = a, t.Object_propertyIsEnumerable = function(b, C) {
        return b == null || "propertyIsEnumerable" in b && typeof b.propertyIsEnumerable == "function" ? b.propertyIsEnumerable(C) : Object.prototype.propertyIsEnumerable.call(b, C);
      }, t.Object_toLocaleString = function(b) {
        return b == null || "toLocaleString" in b && typeof b.toLocaleString == "function" ? b.toLocaleString() : Object.prototype.toString.call(b);
      }, t.Object_toString = function(b) {
        return b == null || "toString" in b && typeof b.toString == "function" ? b.toString() : Object.prototype.toString.call(b);
      }, t.Object_valueOf = function(b) {
        return b == null || "valueOf" in b && typeof b.valueOf == "function" ? b.valueOf() : Object.prototype.valueOf.call(b);
      }, t.RGBAColor = function(b) {
        var C = b.toLowerCase();
        if (y0.hasOwnProperty(C)) return y0[C];
        if (/^#[a-fA-F0-9]{6}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + ", 1)";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + "," + parseInt(b.slice(7), 16) / 255 + ")";
        var P = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (P != null) return b.slice(0, b.length - 1) + ",1)";
        if ((P = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return b;
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }, t.StringIsEmpty = sl, t.StringIsNotEmpty = function(b) {
        return !sl(b);
      }, t.ValidatorForClassifier = me, t.ValueExists = function(b) {
        return b != null;
      }, t.ValueInheritsFrom = function(b, C) {
        return a(C, b);
      }, t.ValueIsAnonymousFunction = G, t.ValueIsArray = U, t.ValueIsBoolean = o, t.ValueIsCardinal = v, t.ValueIsColor = Be, t.ValueIsDate = j, t.ValueIsEMailAddress = qe, t.ValueIsEmptyString = function(b) {
        return (typeof b == "string" || b instanceof String) && T.test(b.valueOf());
      }, t.ValueIsError = E, t.ValueIsFiniteNumber = d, t.ValueIsFunction = M, t.ValueIsInstanceOf = function(b, C) {
        return b instanceof C;
      }, t.ValueIsInteger = f, t.ValueIsIntegerInRange = function(b, C, P) {
        if (!f(b) || isNaN(b)) return !1;
        if (d(C)) {
          if (d(P)) {
            if (b < C || b > P) return !1;
          } else if (b < C) return !1;
        } else if (d(P) && b > P) return !1;
        return !0;
      }, t.ValueIsList = oe, t.ValueIsListSatisfying = B, t.ValueIsMissing = function(b) {
        return b == null;
      }, t.ValueIsNaN = h, t.ValueIsNamedFunction = de, t.ValueIsNativeFunction = ce, t.ValueIsNonEmptyString = I, t.ValueIsNumber = l, t.ValueIsNumberInRange = function(b, C, P, le, Se) {
        if (le === void 0 && (le = !0), Se === void 0 && (Se = !0), !l(b) || isNaN(b)) return !1;
        if (d(C)) {
          if (d(P)) {
            if (b < C || !le && b === C || b > P || !Se && b === P) return !1;
          } else if (b < C || !le && b === C) return !1;
        } else if (d(P) && (b > P || !Se && b === P)) return !1;
        return !0;
      }, t.ValueIsObject = Ne, t.ValueIsOneOf = Ve, t.ValueIsOrdinal = m, t.ValueIsPlainObject = ye, t.ValueIsPromise = te, t.ValueIsRegExp = Oe, t.ValueIsScriptedFunction = ie, t.ValueIsString = k, t.ValueIsStringMatching = z, t.ValueIsText = W, t.ValueIsTextline = re, t.ValueIsURL = lr, t.ValueIsVanillaObject = H, t.ValuesAreEqual = function(b, C, P) {
        return !$i(b, C, P);
      }, t.ValuesDiffer = $i, t.acceptNil = Le, t.allowAnonymousFunction = ut, t.allowArray = ae, t.allowBoolean = mr, t.allowCardinal = se, t.allowColor = Jo, t.allowDate = Po, t.allowEMailAddress = Qo, t.allowError = Ho, t.allowFiniteNumber = Ar, t.allowFunction = Xr, t.allowInstanceOf = Ro, t.allowInteger = Pn, t.allowIntegerInRange = Ur, t.allowList = J, t.allowListSatisfying = pt, t.allowNaN = Pt, t.allowNamedFunction = Ie, t.allowNativeFunction = je, t.allowNonEmptyString = ct, t.allowNumber = Vr, t.allowNumberInRange = l0, t.allowObject = w0, t.allowOneOf = Ko, t.allowOrdinal = wn, t.allowPlainObject = Un, t.allowPromise = Wo, t.allowRegExp = Go, t.allowScriptedFunction = Qr, t.allowString = be, t.allowStringMatching = jr, t.allowText = f0, t.allowTextline = qn, t.allowURL = tl, t.allowValueInheritingFrom = Lo, t.allowVanillaObject = x, t.allowedAnonymousFunction = Jr, t.allowedArray = ve, t.allowedBoolean = mn, t.allowedCardinal = $e, t.allowedColor = nh, t.allowedDate = K1, t.allowedEMailAddress = ah, t.allowedError = X1, t.allowedFiniteNumber = $r, t.allowedFunction = U0, t.allowedInstanceOf = G1, t.allowedInteger = d0, t.allowedIntegerInRange = Hn, t.allowedList = ge, t.allowedListSatisfying = br, t.allowedNaN = jt, t.allowedNamedFunction = Qe, t.allowedNativeFunction = Yr, t.allowedNonEmptyString = Gr, t.allowedNumber = gn, t.allowedNumberInRange = W0, t.allowedObject = K0, t.allowedOneOf = rh, t.allowedOrdinal = gr, t.allowedPlainObject = Kt, t.allowedPromise = Y1, t.allowedRegExp = eh, t.allowedScriptedFunction = v0, t.allowedString = fe, t.allowedStringMatching = Kr, t.allowedText = p0, t.allowedTextline = m0, t.allowedURL = oh, t.allowedValueInheritingFrom = j1, t.allowedVanillaObject = N, t.constrained = function(b, C, P) {
        return C === void 0 && (C = -1 / 0), P === void 0 && (P = 1 / 0), Math.max(C, Math.min(b, P));
      }, t.escaped = et, t.expectAnonymousFunction = X, t.expectArray = Ce, t.expectBoolean = Tt, t.expectCardinal = ot, t.expectColor = Yo, t.expectDate = Vo, t.expectEMailAddress = el, t.expectError = qo, t.expectFiniteNumber = Ft, t.expectFunction = b0, t.expectInstanceOf = Oo, t.expectInteger = Wr, t.expectIntegerInRange = bn, t.expectList = Ee, t.expectListSatisfying = Ci, t.expectNaN = Rt, t.expectNamedFunction = dt, t.expectNativeFunction = zt, t.expectNonEmptyString = er, t.expectNumber = Qt, t.expectNumberInRange = c0, t.expectObject = Wn, t.expectOneOf = Zo, t.expectOrdinal = S, t.expectPlainObject = x0, t.expectPromise = Uo, t.expectRegExp = jo, t.expectScriptedFunction = yn, t.expectString = ke, t.expectStringMatching = xn, t.expectText = Zr, t.expectTextline = Vt, t.expectURL = rl, t.expectValue = Ke, t.expectValueInheritingFrom = Do, t.expectVanillaObject = F, t.expectedAnonymousFunction = xe, t.expectedArray = Ae, t.expectedBoolean = Pr, t.expectedCardinal = lt, t.expectedColor = ih, t.expectedDate = Z1, t.expectedEMailAddress = sh, t.expectedError = J1, t.expectedFiniteNumber = qr, t.expectedFunction = G0, t.expectedInstanceOf = Bo, t.expectedInteger = Vn, t.expectedIntegerInRange = vn, t.expectedList = He, t.expectedListSatisfying = Ai, t.expectedNaN = Ir, t.expectedNamedFunction = Ct, t.expectedNativeFunction = Ot, t.expectedNonEmptyString = ur, t.expectedNumber = Hr, t.expectedNumberInRange = u0, t.expectedObject = dr, t.expectedOneOf = Xo, t.expectedOrdinal = L, t.expectedPlainObject = $, t.expectedPromise = Q1, t.expectedRegExp = th, t.expectedScriptedFunction = j0, t.expectedString = xt, t.expectedStringMatching = h0, t.expectedText = Nt, t.expectedTextline = g0, t.expectedURL = lh, t.expectedValue = wt, t.expectedValueInheritingFrom = Fo, t.expectedVanillaObject = q, t.global = n, t.quotable = nl, t.quoted = function(b, C) {
        return C === void 0 && (C = '"'), C + nl(b, C) + C;
      }, t.rejectNil = we, t.shortHexColor = function(b) {
        return ol(b).slice(0, 7);
      }, t.throwError = s, t.unescaped = function(b) {
        return b.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g, (function(C) {
          switch (C) {
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
              var P = parseInt(C.slice(2), 16);
              return String.fromCharCode(P);
          }
        }));
      }, t.validatedArgument = ft, Object.defineProperty(t, "__esModule", { value: !0 });
    }));
  })(J0, J0.exports)), J0.exports;
}
var _ = fh(), wi, Pe, Hc, An, ul, qc, Wc, Oa, Gi, ti, Uc, Ks, os, ls, Gc, ea = {}, ta = [], ph = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, xi = Array.isArray;
function zr(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function Zs(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function ln(r, e, t) {
  var n, i, a, s = {};
  for (a in e) a == "key" ? n = e[a] : a == "ref" ? i = e[a] : s[a] = e[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? wi.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (a in r.defaultProps) s[a] === void 0 && (s[a] = r.defaultProps[a]);
  return ri(r, s, n, i, null);
}
function ri(r, e, t, n, i) {
  var a = { type: r, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++Hc, __i: -1, __u: 0 };
  return i == null && Pe.vnode != null && Pe.vnode(a), a;
}
function mh() {
  return { current: null };
}
function Mn(r) {
  return r.children;
}
function an(r, e) {
  this.props = r, this.context = e;
}
function E0(r, e) {
  if (e == null) return r.__ ? E0(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? E0(r) : null;
}
function gh(r) {
  if (r.__P && r.__d) {
    var e = r.__v, t = e.__e, n = [], i = [], a = zr({}, e);
    a.__v = e.__v + 1, Pe.vnode && Pe.vnode(a), Xs(r.__P, a, e, r.__n, r.__P.namespaceURI, 32 & e.__u ? [t] : null, n, t ?? E0(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, Xc(n, a, i), e.__e = e.__ = null, a.__e != t && jc(a);
  }
}
function jc(r) {
  if ((r = r.__) != null && r.__c != null) return r.__e = r.__c.base = null, r.__k.some(function(e) {
    if (e != null && e.__e != null) return r.__e = r.__c.base = e.__e;
  }), jc(r);
}
function cs(r) {
  (!r.__d && (r.__d = !0) && An.push(r) && !ra.__r++ || ul != Pe.debounceRendering) && ((ul = Pe.debounceRendering) || qc)(ra);
}
function ra() {
  try {
    for (var r, e = 1; An.length; ) An.length > e && An.sort(Wc), r = An.shift(), e = An.length, gh(r);
  } finally {
    An.length = ra.__r = 0;
  }
}
function Kc(r, e, t, n, i, a, s, o, l, d, h) {
  var f, m, v, k, T, I, z, O = n && n.__k || ta, W = e.length;
  for (l = bh(t, e, O, l, W), f = 0; f < W; f++) (v = t.__k[f]) != null && (m = v.__i != -1 && O[v.__i] || ea, v.__i = f, I = Xs(r, v, m, i, a, s, o, l, d, h), k = v.__e, v.ref && m.ref != v.ref && (m.ref && Js(m.ref, null, v), h.push(v.ref, v.__c || k, v)), T == null && k != null && (T = k), (z = !!(4 & v.__u)) || m.__k === v.__k ? (l = Zc(v, l, r, z), z && m.__e && (m.__e = null)) : typeof v.type == "function" && I !== void 0 ? l = I : k && (l = k.nextSibling), v.__u &= -7);
  return t.__e = T, l;
}
function bh(r, e, t, n, i) {
  var a, s, o, l, d, h = t.length, f = h, m = 0;
  for (r.__k = new Array(i), a = 0; a < i; a++) (s = e[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = r.__k[a] = ri(null, s, null, null, null) : xi(s) ? s = r.__k[a] = ri(Mn, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = r.__k[a] = ri(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : r.__k[a] = s, l = a + m, s.__ = r, s.__b = r.__b + 1, o = null, (d = s.__i = vh(s, t, l, f)) != -1 && (f--, (o = t[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (i > h ? m-- : i < h && m++), typeof s.type != "function" && (s.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, s.__u |= 4))) : r.__k[a] = null;
  if (f) for (a = 0; a < h; a++) (o = t[a]) != null && (2 & o.__u) == 0 && (o.__e == n && (n = E0(o)), Yc(o, o));
  return n;
}
function Zc(r, e, t, n) {
  var i, a;
  if (typeof r.type == "function") {
    for (i = r.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = r, e = Zc(i[a], e, t, n));
    return e;
  }
  r.__e != e && (n && (e && r.type && !e.parentNode && (e = E0(r)), t.insertBefore(r.__e, e || null)), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function z0(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (xi(r) ? r.some(function(t) {
    z0(t, e);
  }) : e.push(r)), e;
}
function vh(r, e, t, n) {
  var i, a, s, o = r.key, l = r.type, d = e[t], h = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || h && o == d.key && l == d.type) return t;
  if (n > (h ? 1 : 0)) {
    for (i = t - 1, a = t + 1; i >= 0 || a < e.length; ) if ((d = e[s = i >= 0 ? i-- : a++]) != null && (2 & d.__u) == 0 && o == d.key && l == d.type) return s;
  }
  return -1;
}
function dl(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || ph.test(e) ? t : t + "px";
}
function Ii(r, e, t, n, i) {
  var a, s;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof n == "string" && (r.style.cssText = n = ""), n) for (e in n) t && e in t || dl(r.style, e, "");
    if (t) for (e in t) n && t[e] == n[e] || dl(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace(Uc, "$1")), s = e.toLowerCase(), e = s in r || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + a] = t, t ? n ? t[ti] = n[ti] : (t[ti] = Ks, r.addEventListener(e, a ? ls : os, a)) : r.removeEventListener(e, a ? ls : os, a);
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
function hl(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e[Gi] == null) e[Gi] = Ks++;
      else if (e[Gi] < t[ti]) return;
      return t(Pe.event ? Pe.event(e) : e);
    }
  };
}
function Xs(r, e, t, n, i, a, s, o, l, d) {
  var h, f, m, v, k, T, I, z, O, W, Y, re, M, G, de, ce = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), a = [o = e.__e = t.__e]), (h = Pe.__b) && h(e);
  e: if (typeof ce == "function") try {
    if (z = e.props, O = ce.prototype && ce.prototype.render, W = (h = ce.contextType) && n[h.__c], Y = h ? W ? W.props.value : h.__ : n, t.__c ? I = (f = e.__c = t.__c).__ = f.__E : (O ? e.__c = f = new ce(z, Y) : (e.__c = f = new an(z, Y), f.constructor = ce, f.render = xh), W && W.sub(f), f.state || (f.state = {}), f.__n = n, m = f.__d = !0, f.__h = [], f._sb = []), O && f.__s == null && (f.__s = f.state), O && ce.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = zr({}, f.__s)), zr(f.__s, ce.getDerivedStateFromProps(z, f.__s))), v = f.props, k = f.state, f.__v = e, m) O && ce.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), O && f.componentDidMount != null && f.__h.push(f.componentDidMount);
    else {
      if (O && ce.getDerivedStateFromProps == null && z !== v && f.componentWillReceiveProps != null && f.componentWillReceiveProps(z, Y), e.__v == t.__v || !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(z, f.__s, Y) === !1) {
        e.__v != t.__v && (f.props = z, f.state = f.__s, f.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(ie) {
          ie && (ie.__ = e);
        }), ta.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
        break e;
      }
      f.componentWillUpdate != null && f.componentWillUpdate(z, f.__s, Y), O && f.componentDidUpdate != null && f.__h.push(function() {
        f.componentDidUpdate(v, k, T);
      });
    }
    if (f.context = Y, f.props = z, f.__P = r, f.__e = !1, re = Pe.__r, M = 0, O) f.state = f.__s, f.__d = !1, re && re(e), h = f.render(f.props, f.state, f.context), ta.push.apply(f.__h, f._sb), f._sb = [];
    else do
      f.__d = !1, re && re(e), h = f.render(f.props, f.state, f.context), f.state = f.__s;
    while (f.__d && ++M < 25);
    f.state = f.__s, f.getChildContext != null && (n = zr(zr({}, n), f.getChildContext())), O && !m && f.getSnapshotBeforeUpdate != null && (T = f.getSnapshotBeforeUpdate(v, k)), G = h != null && h.type === Mn && h.key == null ? Jc(h.props.children) : h, o = Kc(r, xi(G) ? G : [G], e, t, n, i, a, s, o, l, d), f.base = e.__e, e.__u &= -161, f.__h.length && s.push(f), I && (f.__E = f.__ = null);
  } catch (ie) {
    if (e.__v = null, l || a != null) if (ie.then) {
      for (e.__u |= l ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      a[a.indexOf(o)] = null, e.__e = o;
    } else {
      for (de = a.length; de--; ) Zs(a[de]);
      us(e);
    }
    else e.__e = t.__e, e.__k = t.__k, ie.then || us(e);
    Pe.__e(ie, e, t);
  }
  else a == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : o = e.__e = wh(t.__e, e, t, n, i, a, s, l, d);
  return (h = Pe.diffed) && h(e), 128 & e.__u ? void 0 : o;
}
function us(r) {
  r && (r.__c && (r.__c.__e = !0), r.__k && r.__k.some(us));
}
function Xc(r, e, t) {
  for (var n = 0; n < t.length; n++) Js(t[n], t[++n], t[++n]);
  Pe.__c && Pe.__c(e, r), r.some(function(i) {
    try {
      r = i.__h, i.__h = [], r.some(function(a) {
        a.call(i);
      });
    } catch (a) {
      Pe.__e(a, i.__v);
    }
  });
}
function Jc(r) {
  return typeof r != "object" || r == null || r.__b > 0 ? r : xi(r) ? r.map(Jc) : r.constructor !== void 0 ? null : zr({}, r);
}
function wh(r, e, t, n, i, a, s, o, l) {
  var d, h, f, m, v, k, T, I = t.props || ea, z = e.props, O = e.type;
  if (O == "svg" ? i = "http://www.w3.org/2000/svg" : O == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((v = a[d]) && "setAttribute" in v == !!O && (O ? v.localName == O : v.nodeType == 3)) {
      r = v, a[d] = null;
      break;
    }
  }
  if (r == null) {
    if (O == null) return document.createTextNode(z);
    r = document.createElementNS(i, O, z.is && z), o && (Pe.__m && Pe.__m(e, a), o = !1), a = null;
  }
  if (O == null) I === z || o && r.data == z || (r.data = z);
  else {
    if (a = O == "textarea" && z.defaultValue != null ? null : a && wi.call(r.childNodes), !o && a != null) for (I = {}, d = 0; d < r.attributes.length; d++) I[(v = r.attributes[d]).name] = v.value;
    for (d in I) v = I[d], d == "dangerouslySetInnerHTML" ? f = v : d == "children" || d in z || d == "value" && "defaultValue" in z || d == "checked" && "defaultChecked" in z || Ii(r, d, null, v, i);
    for (d in z) v = z[d], d == "children" ? m = v : d == "dangerouslySetInnerHTML" ? h = v : d == "value" ? k = v : d == "checked" ? T = v : o && typeof v != "function" || I[d] === v || Ii(r, d, v, I[d], i);
    if (h) o || f && (h.__html == f.__html || h.__html == r.innerHTML) || (r.innerHTML = h.__html), e.__k = [];
    else if (f && (r.innerHTML = ""), Kc(e.type == "template" ? r.content : r, xi(m) ? m : [m], e, t, n, O == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, s, a ? a[0] : t.__k && E0(t, 0), o, l), a != null) for (d = a.length; d--; ) Zs(a[d]);
    o && O != "textarea" || (d = "value", O == "progress" && k == null ? r.removeAttribute("value") : k != null && (k !== r[d] || O == "progress" && !k || O == "option" && k != I[d]) && Ii(r, d, k, I[d], i), d = "checked", T != null && T != r[d] && Ii(r, d, T, I[d], i));
  }
  return r;
}
function Js(r, e, t) {
  try {
    if (typeof r == "function") {
      var n = typeof r.__u == "function";
      n && r.__u(), n && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (i) {
    Pe.__e(i, t);
  }
}
function Yc(r, e, t) {
  var n, i;
  if (Pe.unmount && Pe.unmount(r), (n = r.ref) && (n.current && n.current != r.__e || Js(n, null, e)), (n = r.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (a) {
      Pe.__e(a, e);
    }
    n.base = n.__P = null;
  }
  if (n = r.__k) for (i = 0; i < n.length; i++) n[i] && Yc(n[i], e, t || typeof r.type != "function");
  t || Zs(r.__e), r.__c = r.__ = r.__e = void 0;
}
function xh(r, e, t) {
  return this.constructor(r, t);
}
function sn(r, e, t) {
  var n, i, a, s;
  e == document && (e = document.documentElement), Pe.__ && Pe.__(r, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, a = [], s = [], Xs(e, r = (!n && t || e).__k = ln(Mn, null, [r]), i || ea, ea, e.namespaceURI, !n && t ? [t] : i ? null : e.firstChild ? wi.call(e.childNodes) : null, a, !n && t ? t : i ? i.__e : e.firstChild, n, s), Xc(a, r, s);
}
function Qc(r, e, t) {
  var n, i, a, s, o = zr({}, r.props);
  for (a in r.type && r.type.defaultProps && (s = r.type.defaultProps), e) a == "key" ? n = e[a] : a == "ref" ? i = e[a] : o[a] = e[a] === void 0 && s != null ? s[a] : e[a];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? wi.call(arguments, 2) : t), ri(r.type, o, n || r.key, i || r.ref, null);
}
function eu(r) {
  function e(t) {
    var n, i;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && n.forEach(function(s) {
        s.__e = !0, cs(s);
      });
    }, this.sub = function(a) {
      n.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n && n.delete(a), s && s.call(a);
      };
    }), t.children;
  }
  return e.__c = "__cC" + Gc++, e.__ = r, e.Provider = e.__l = (e.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = e, e;
}
wi = ta.slice, Pe = { __e: function(r, e, t, n) {
  for (var i, a, s; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(r)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(r, n || {}), s = i.__d), s) return i.__E = i;
  } catch (o) {
    r = o;
  }
  throw r;
} }, Hc = 0, an.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = zr({}, this.state), typeof r == "function" && (r = r(zr({}, t), this.props)), r && zr(t, r), r != null && this.__v && (e && this._sb.push(e), cs(this));
}, an.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), cs(this));
}, an.prototype.render = Mn, An = [], qc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Wc = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, ra.__r = 0, Oa = Math.random().toString(8), Gi = "__d" + Oa, ti = "__a" + Oa, Uc = /(PointerCapture)$|Capture$/i, Ks = 0, os = hl(!1), ls = hl(!0), Gc = 0;
var tu = function(r, e, t, n) {
  var i;
  e[0] = 0;
  for (var a = 1; a < e.length; a++) {
    var s = e[a++], o = e[a] ? (e[0] |= s ? 1 : 2, t[e[a++]]) : e[++a];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++a]] = o : s === 6 ? n[1][e[++a]] += o + "" : s ? (i = r.apply(o, tu(r, o, t, ["", null])), n.push(i), o[0] ? e[0] |= 2 : (e[a - 2] = 0, e[a] = i)) : n.push(o);
  }
  return n;
}, fl = /* @__PURE__ */ new Map();
function yh(r) {
  var e = fl.get(this);
  return e || (e = /* @__PURE__ */ new Map(), fl.set(this, e)), (e = tu(this, e.get(r) || (e.set(r, e = (function(t) {
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
var Z = yh.bind(ln), cn, at, Ba, pl, ai = 0, ru = [], _t = Pe, ml = _t.__b, gl = _t.__r, bl = _t.diffed, vl = _t.__c, wl = _t.unmount, xl = _t.__;
function i0(r, e) {
  _t.__h && _t.__h(at, r, ai || e), ai = 0;
  var t = at.__H || (at.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function Ze(r) {
  return ai = 1, nu(su, r);
}
function nu(r, e, t) {
  var n = i0(cn++, 2);
  if (n.t = r, !n.__c && (n.__ = [t ? t(e) : su(void 0, e), function(o) {
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
function Xt(r, e) {
  var t = i0(cn++, 3);
  !_t.__s && Qs(t.__H, e) && (t.__ = r, t.u = e, at.__H.__h.push(t));
}
function kh(r, e) {
  var t = i0(cn++, 4);
  !_t.__s && Qs(t.__H, e) && (t.__ = r, t.u = e, at.__h.push(t));
}
function Fe(r) {
  return ai = 5, F0(function() {
    return { current: r };
  }, []);
}
function F0(r, e) {
  var t = i0(cn++, 7);
  return Qs(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function qt(r, e) {
  return ai = 8, F0(function() {
    return r;
  }, e);
}
function iu(r) {
  var e = at.context[r.__c], t = i0(cn++, 9);
  return t.c = r, e ? (t.__ == null && (t.__ = !0, e.sub(at)), e.props.value) : r.__;
}
function Ys(r) {
  var e = i0(cn++, 10), t = Ze();
  return e.__ = r, at.componentDidCatch || (at.componentDidCatch = function(n, i) {
    e.__ && e.__(n, i), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function au() {
  var r = i0(cn++, 11);
  if (!r.__) {
    for (var e = at.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function Sh() {
  for (var r; r = ru.shift(); ) {
    var e = r.__H;
    if (r.__P && e) try {
      e.__h.some(ji), e.__h.some(ds), e.__h = [];
    } catch (t) {
      e.__h = [], _t.__e(t, r.__v);
    }
  }
}
_t.__b = function(r) {
  at = null, ml && ml(r);
}, _t.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), xl && xl(r, e);
}, _t.__r = function(r) {
  gl && gl(r), cn = 0;
  var e = (at = r.__c).__H;
  e && (Ba === at ? (e.__h = [], at.__h = [], e.__.some(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.some(ji), e.__h.some(ds), e.__h = [], cn = 0)), Ba = at;
}, _t.diffed = function(r) {
  bl && bl(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (ru.push(e) !== 1 && pl === _t.requestAnimationFrame || ((pl = _t.requestAnimationFrame) || _h)(Sh)), e.__H.__.some(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), Ba = at = null;
}, _t.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.some(ji), t.__h = t.__h.filter(function(n) {
        return !n.__ || ds(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], _t.__e(n, t.__v);
    }
  }), vl && vl(r, e);
}, _t.unmount = function(r) {
  wl && wl(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.some(function(n) {
    try {
      ji(n);
    } catch (i) {
      e = i;
    }
  }), t.__H = void 0, e && _t.__e(e, t.__v));
};
var yl = typeof requestAnimationFrame == "function";
function _h(r) {
  var e, t = function() {
    clearTimeout(n), yl && cancelAnimationFrame(e), setTimeout(r);
  }, n = setTimeout(t, 35);
  yl && (e = requestAnimationFrame(t));
}
function ji(r) {
  var e = at, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), at = e;
}
function ds(r) {
  var e = at;
  r.__c = r.__(), at = e;
}
function Qs(r, e) {
  return !r || r.length !== e.length || e.some(function(t, n) {
    return t !== r[n];
  });
}
function su(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function ou(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function hs(r, e) {
  for (var t in r) if (t !== "__source" && !(t in e)) return !0;
  for (var n in e) if (n !== "__source" && r[n] !== e[n]) return !0;
  return !1;
}
function kl(r, e) {
  this.props = r, this.context = e;
}
function Ch(r, e) {
  function t(i) {
    var a = this.props.ref;
    return a != i.ref && a && (typeof a == "function" ? a(null) : a.current = null), e ? !e(this.props, i) || a != i.ref : hs(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = t, ln(r, i);
  }
  return n.displayName = "Memo(" + (r.displayName || r.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = r, n;
}
(kl.prototype = new an()).isPureReactComponent = !0, kl.prototype.shouldComponentUpdate = function(r, e) {
  return hs(this.props, r) || hs(this.state, e);
};
var Sl = Pe.__b;
Pe.__b = function(r) {
  r.type && r.type.__f && r.ref && (r.props.ref = r.ref, r.ref = null), Sl && Sl(r);
};
var Ah = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function $h(r) {
  function e(t) {
    var n = ou({}, t);
    return delete n.ref, r(n, t.ref || null);
  }
  return e.$$typeof = Ah, e.render = r, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", e;
}
var Ih = Pe.__e;
Pe.__e = function(r, e, t, n) {
  if (r.then) {
    for (var i, a = e; a = a.__; ) if ((i = a.__c) && i.__c) return e.__e == null && (e.__e = t.__e, e.__k = t.__k), i.__c(r, e);
  }
  Ih(r, e, t, n);
};
var _l = Pe.unmount;
function lu(r, e, t) {
  return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), r.__c.__H = null), (r = ou({}, r)).__c != null && (r.__c.__P === t && (r.__c.__P = e), r.__c.__e = !0, r.__c = null), r.__k = r.__k && r.__k.map(function(n) {
    return lu(n, e, t);
  })), r;
}
function cu(r, e, t) {
  return r && t && (r.__v = null, r.__k = r.__k && r.__k.map(function(n) {
    return cu(n, e, t);
  }), r.__c && r.__c.__P === e && (r.__e && t.appendChild(r.__e), r.__c.__e = !0, r.__c.__P = t)), r;
}
function La() {
  this.__u = 0, this.o = null, this.__b = null;
}
function uu(r) {
  var e = r.__ && r.__.__c;
  return e && e.__a && e.__a(r);
}
function Ti() {
  this.i = null, this.l = null;
}
Pe.unmount = function(r) {
  var e = r.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), _l && _l(r);
}, (La.prototype = new an()).__c = function(r, e) {
  var t = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var i = uu(n.__v), a = !1, s = function() {
    a || n.__z || (a = !0, t.__R = null, i ? i(l) : l());
  };
  t.__R = s;
  var o = t.__P;
  t.__P = null;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = cu(d, d.__c.__P, d.__c.__O);
      }
      var h;
      for (n.setState({ __a: n.__b = null }); h = n.o.pop(); ) h.__P = o, h.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), r.then(s, s);
}, La.prototype.componentWillUnmount = function() {
  this.o = [];
}, La.prototype.render = function(r, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = lu(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && ln(Mn, null, r.fallback);
  return i && (i.__u &= -33), [ln(Mn, null, e.__a ? null : r.children), i];
};
var Cl = function(r, e, t) {
  if (++t[1] === t[0] && r.l.delete(e), r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.l.size)) for (t = r.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    r.i = t = t[2];
  }
};
function Th(r) {
  return this.getChildContext = function() {
    return r.context;
  }, r.children;
}
function Nh(r) {
  var e = this, t = r.h;
  if (e.componentWillUnmount = function() {
    sn(null, e.v), e.v = null, e.h = null;
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
  sn(ln(Th, { context: e.context }, r.__v), e.v);
}
function du(r, e) {
  var t = ln(Nh, { __v: r, h: e });
  return t.containerInfo = e, t;
}
(Ti.prototype = new an()).__a = function(r) {
  var e = this, t = uu(e.__v), n = e.l.get(r);
  return n[0]++, function(i) {
    var a = function() {
      e.props.revealOrder ? (n.push(i), Cl(e, r, n)) : i();
    };
    t ? t(a) : a();
  };
}, Ti.prototype.render = function(r) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = z0(r.children);
  r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; ) this.l.set(e[t], this.i = [1, 0, this.i]);
  return r.children;
}, Ti.prototype.componentDidUpdate = Ti.prototype.componentDidMount = function() {
  var r = this;
  this.l.forEach(function(e, t) {
    Cl(r, t, e);
  });
};
var Mh = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Eh = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, zh = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Rh = /[A-Z0-9]/g, Oh = typeof document < "u", Bh = function(r) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(r);
};
an.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(r) {
  Object.defineProperty(an.prototype, r, { configurable: !0, get: function() {
    return this["UNSAFE_" + r];
  }, set: function(e) {
    Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e });
  } });
});
var Al = Pe.event;
Pe.event = function(r) {
  return Al && (r = Al(r)), r.persist = function() {
  }, r.isPropagationStopped = function() {
    return this.cancelBubble;
  }, r.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, r.nativeEvent = r;
};
var Lh = { configurable: !0, get: function() {
  return this.class;
} }, $l = Pe.vnode;
Pe.vnode = function(r) {
  typeof r.type == "string" && (function(e) {
    var t = e.props, n = e.type, i = {}, a = n.indexOf("-") == -1;
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || Oh && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "translate" && o === "no" ? o = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || Bh(t.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : zh.test(s) && (s = l) : l = s = "oninput" : a && Eh.test(s) ? s = s.replace(Rh, "-$&").toLowerCase() : o === null && (o = void 0), l === "oninput" && i[s = l] && (s = "oninputCapture"), i[s] = o;
      }
    }
    n == "select" && (i.multiple && Array.isArray(i.value) && (i.value = z0(t.children).forEach(function(d) {
      d.props.selected = i.value.indexOf(d.props.value) != -1;
    })), i.defaultValue != null && (i.value = z0(t.children).forEach(function(d) {
      d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value;
    }))), t.class && !t.className ? (i.class = t.class, Object.defineProperty(i, "className", Lh)) : t.className && (i.class = i.className = t.className), e.props = i;
  })(r), r.$$typeof = Mh, $l && $l(r);
};
var Il = Pe.__r;
Pe.__r = function(r) {
  Il && Il(r), r.__c;
};
var Tl = Pe.diffed;
Pe.diffed = function(r) {
  Tl && Tl(r);
  var e = r.props, t = r.__e;
  t != null && r.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
function Br(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function hu(r, e) {
  let t;
  const n = () => {
    if (t)
      return t;
    const i = indexedDB.open(r);
    return i.onupgradeneeded = () => i.result.createObjectStore(e), t = Br(i), t.then((a) => {
      a.onclose = () => t = void 0;
    }, () => {
    }), t;
  };
  return (i, a) => n().then((s) => a(s.transaction(e, i).objectStore(e)));
}
let Da;
function a0() {
  return Da || (Da = hu("keyval-store", "keyval")), Da;
}
function Gn(r, e = a0()) {
  return e("readonly", (t) => Br(t.get(r)));
}
function Nl(r, e, t = a0()) {
  return t("readwrite", (n) => (n.put(e, r), Br(n.transaction)));
}
function Ni(r, e = a0()) {
  return e("readwrite", (t) => (t.delete(r), Br(t.transaction)));
}
function fm(r = a0()) {
  return r("readwrite", (e) => (e.clear(), Br(e.transaction)));
}
function eo(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Br(r.transaction);
}
function Dh(r = a0()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return Br(e.getAllKeys());
    const t = [];
    return eo(e, (n) => t.push(n.key)).then(() => t);
  });
}
function pm(r = a0()) {
  return r("readonly", (e) => {
    if (e.getAll)
      return Br(e.getAll());
    const t = [];
    return eo(e, (n) => t.push(n.value)).then(() => t);
  });
}
function mm(r = a0()) {
  return r("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        Br(e.getAllKeys()),
        Br(e.getAll())
      ]).then(([n, i]) => n.map((a, s) => [a, i[s]]));
    const t = [];
    return eo(e, (n) => t.push([n.key, n.value])).then(() => t);
  });
}
var Ki = { exports: {} }, Fh = Ki.exports, Ml;
function Ph() {
  return Ml || (Ml = 1, (function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(Fh, (function() {
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
  })(Ki)), Ki.exports;
}
var Vh = Ph();
const Hh = /* @__PURE__ */ Vc(Vh), qh = /* @__PURE__ */ new Set([
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
]), Wh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Color",
  "Alpha",
  "dontSearch",
  "Script",
  "Widgets",
  "Value"
]), Uh = /* @__PURE__ */ new Set([
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
function El(r, e, t, n) {
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
function zl(r, e, t, n, i, a, s) {
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
function Gh(r) {
  let e = 0;
  for (const t of Xe(r)) {
    const n = parseInt(t.Id.replace("bc-card-", ""), 10);
    isNaN(n) || (e = Math.max(e, n));
  }
  return k1(e + 1), `bc-card-${e + 1}`;
}
function jh(r) {
  let e = 0;
  for (const t of Xe(r))
    for (const n of t.Widgets) {
      const i = parseInt(n.Id.replace("bc-widget-", ""), 10);
      isNaN(i) || (e = Math.max(e, i));
    }
  return k1(e + 1), `bc-widget-${e + 1}`;
}
function Fa(r, e) {
  if (r === "deck")
    return "deck";
  const t = r.split("/"), n = Xe(e).find((a) => a.Id === t[0]) ?? null;
  if (n == null)
    return null;
  if (t.length === 1)
    return { Card: n };
  const i = n.Widgets.find((a) => a.Id === t[1]) ?? null;
  return i == null ? null : { Card: n, Widget: i };
}
const Kh = {
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
var $n, $0, In, hr, Qn, fi, D, fs, ps, tt, fu, pu, mu, gu, bu, vu, wu, xu, yu, ku, Su, _u, Cu, Au, $u, Iu, Tu, Nu, Mu, Eu, zu, Ru, Ou, Zi, ms, Bu, Lu, Du, Fu, Pu, Vu, Hu, qu, Wu, Y0;
class Zh {
  constructor() {
    rt(this, D);
    rt(this, $n);
    rt(this, $0);
    rt(this, In, null);
    rt(this, hr, null);
    rt(this, Qn, null);
    rt(this, fi, null);
    ze(this, $n, localStorage.getItem("bc-mcp-url") ?? ""), ze(this, $0, localStorage.getItem("bc-mcp-token") ?? "");
  }
  /**** setContext — called by DeckView after every render to keep state current ****/
  setContext(e) {
    var t, n;
    if (ze(this, In, e), e != null && R(this, D, fs)) {
      const i = ((t = e.getDeck().Cards[e.getCardIndex()]) == null ? void 0 : t.Name) ?? null;
      i !== R(this, fi) && (ze(this, fi, i), (n = R(this, hr)) == null || n.send(JSON.stringify({ type: "notify", event: "card_changed", cardName: i })));
    }
  }
  /**** configure — applies new settings and reconnects (persistence handled by caller) ****/
  configure(e, t) {
    ze(this, $n, e), ze(this, $0, t), this.disconnect(), e !== "" && this.connect();
  }
  /**** connect — opens the WebSocket connection if a URL is configured ****/
  connect() {
    R(this, $n) !== "" && ue(this, D, ps).call(this);
  }
  /**** disconnect — closes the connection and stops auto-reconnect ****/
  disconnect() {
    R(this, Qn) != null && (clearTimeout(R(this, Qn)), ze(this, Qn, null)), R(this, hr) != null && (R(this, hr).onclose = null, R(this, hr).close(), ze(this, hr, null));
  }
  /**** connectionStatus — returns a snapshot suitable for the status tool ****/
  get connectionStatus() {
    return { connected: R(this, D, fs), url: R(this, $n) };
  }
}
$n = new WeakMap(), $0 = new WeakMap(), In = new WeakMap(), hr = new WeakMap(), Qn = new WeakMap(), fi = new WeakMap(), D = new WeakSet(), fs = function() {
  return R(this, hr) != null && R(this, hr).readyState === WebSocket.OPEN;
}, /**** #connect — internal: establishes the WebSocket and wires handlers ****/
ps = function() {
  const e = new WebSocket(R(this, $n));
  e.onopen = () => {
    var i, a, s;
    const t = (i = R(this, In)) == null ? void 0 : i.getDeck(), n = ((a = R(this, In)) == null ? void 0 : a.getCardIndex()) ?? 0;
    e.send(JSON.stringify({
      type: "hello",
      accessToken: R(this, $0),
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
      i = await ue(this, D, fu).call(this, n.method, n.params ?? {});
    } catch (s) {
      a = s.message;
    }
    e.send(JSON.stringify({ id: n.id, result: i, error: a }));
  }, e.onclose = () => {
    ze(this, hr, null), ze(this, Qn, setTimeout(() => ue(this, D, ps).call(this), 3e3));
  }, e.onerror = () => {
    e.close();
  }, ze(this, hr, e);
}, tt = function() {
  if (R(this, In) == null)
    throw new Error("no deck loaded");
  return R(this, In);
}, fu = async function(e, t) {
  switch (!0) {
    case e === "deck_get":
      return ue(this, D, pu).call(this);
    case e === "deck_patch":
      return ue(this, D, mu).call(this, t);
    case e === "deck_save":
      return ue(this, D, gu).call(this);
    case e === "list_cards":
      return ue(this, D, bu).call(this);
    case e === "list_widgets":
      return ue(this, D, vu).call(this, t);
    case e === "find":
      return ue(this, D, wu).call(this, t);
    case e === "card_get":
      return ue(this, D, xu).call(this, t);
    case e === "card_patch":
      return ue(this, D, yu).call(this, t);
    case e === "card_add":
      return ue(this, D, ku).call(this, t);
    case e === "card_delete":
      return ue(this, D, Su).call(this, t);
    case e === "card_reorder":
      return ue(this, D, _u).call(this, t);
    case e === "card_move":
      return ue(this, D, Cu).call(this, t);
    case e === "widget_get":
      return ue(this, D, Au).call(this, t);
    case e === "widget_patch":
      return ue(this, D, $u).call(this, t);
    case e === "widget_add":
      return ue(this, D, Iu).call(this, t);
    case e === "widget_delete":
      return ue(this, D, Tu).call(this, t);
    case e === "widget_transfer":
      return ue(this, D, Nu).call(this, t);
    case e === "widget_reorder":
      return ue(this, D, Mu).call(this, t);
    case e === "widget_get_rect":
      return ue(this, D, Eu).call(this, t);
    case e === "widget_set_rect":
      return ue(this, D, zu).call(this, t);
    case e === "script_get":
      return ue(this, D, Ru).call(this, t);
    case e === "script_set":
      return ue(this, D, Ou).call(this, t);
    case e === "extras_get":
      return ue(this, D, Bu).call(this, t);
    case e === "extras_set":
      return ue(this, D, Lu).call(this, t);
    case e === "extras_delete":
      return ue(this, D, Du).call(this, t);
    case e === "live_eval":
      return ue(this, D, Fu).call(this, t);
    case e === "live_send":
      return ue(this, D, Pu).call(this, t);
    case e === "live_navigate":
      return ue(this, D, Vu).call(this, t);
    case e === "live_screenshot":
      return ue(this, D, Hu).call(this);
    default:
      throw new Error(`unknown method: ${e}`);
  }
}, //--------------------------------------------------------------------------//
//                              deck handlers                                 //
//--------------------------------------------------------------------------//
pu = function() {
  const e = R(this, D, tt).getDeck();
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
}, mu = function(e) {
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
  return R(this, D, tt).mutateDeck((i) => {
    for (const a of n)
      a in t && (i[a] = t[a]);
  }), null;
}, gu = async function() {
  return await R(this, D, tt).saveDeck(), null;
}, //--------------------------------------------------------------------------//
//                          navigation handlers                               //
//--------------------------------------------------------------------------//
bu = function() {
  const e = R(this, D, tt).getDeck(), t = hi(e);
  return Xe(e).map((n) => {
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
}, vu = function(e) {
  const t = R(this, D, tt).getDeck(), n = e.card_id, i = Xe(t).find((o) => o.Id === n);
  if (i == null)
    throw new Error(`card not found: ${n}`);
  const a = t.CardWidth ?? 600, s = t.CardHeight ?? 450;
  return i.Widgets.map((o) => {
    const l = El(
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
}, wu = function(e) {
  const t = R(this, D, tt).getDeck(), n = e.query ?? {}, i = n.scope ?? "all", a = [], s = n.namePattern ? new RegExp(n.namePattern, "i") : null, o = n.scriptContains ? new RegExp(n.scriptContains, "i") : null, l = n.valueContains, d = n.widgetType, h = (m) => (!s || s.test(m.Name)) && (!o || o.test(m.Script)), f = (m) => {
    if (d && m.Type !== d)
      return !1;
    const v = m.Value ?? "";
    return (!s || s.test(m.Name)) && (!o || o.test(m.Script)) && (!l || v.includes(l));
  };
  if (i !== "widgets")
    for (const m of Xe(t))
      h(m) && a.push({
        target: m.Id,
        type: "card",
        name: m.Name,
        excerpt: m.Script.slice(0, 120)
      });
  if (i !== "cards") {
    for (const m of Xe(t))
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
xu = function(e) {
  const t = ue(this, D, qu).call(this, e.card_id);
  return {
    Name: t.Name,
    Color: t.Color ?? null,
    Alpha: t.Alpha ?? 1,
    dontSearch: t.dontSearch,
    Script: t.Script
  };
}, yu = function(e) {
  const t = e.card_id, n = e.props ?? {};
  return R(this, D, tt).mutateDeck((i) => {
    const a = Xe(i).find((s) => s.Id === t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    for (const s of ["Name", "Color", "Alpha", "dontSearch", "Script"])
      s in n && (a[s] = n[s]);
    "Name" in n && (a.Name = Nn(a.Name, "Card"));
  }), null;
}, ku = function(e) {
  const t = e.props ?? {}, n = e.index, i = e.parent_id ?? null;
  let a = "";
  return R(this, D, tt).mutateDeck((s) => {
    a = Gh(s);
    const o = {
      Id: a,
      Name: Nn(t.Name ?? "New Card", "Card"),
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
      const d = Xe(s).find((h) => h.Id === i);
      if (d == null)
        throw new Error(`parent card not found: ${i}`);
      l = d.CardList ?? (d.CardList = []);
    }
    n == null ? l.push(o) : l.splice(n, 0, o);
  }), a;
}, // deletes a card AND its whole subtree (cascade). To keep nested cards, move
// them out first with card_move.
Su = function(e) {
  const t = e.card_id;
  return R(this, D, tt).mutateDeck((n) => {
    const i = vr(n, t);
    if (i == null)
      throw new Error(`card not found: ${t}`);
    const a = i.findIndex((s) => s.Id === t);
    i.splice(a, 1);
  }), null;
}, // reorder a card within its own sibling list (new_index is relative to siblings)
_u = function(e) {
  const t = e.card_id, n = e.new_index;
  return R(this, D, tt).mutateDeck((i) => {
    const a = vr(i, t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    const s = a.findIndex((d) => d.Id === t), [o] = a.splice(s, 1), l = Math.max(0, Math.min(a.length, n));
    a.splice(l, 0, o);
  }), null;
}, // move a card (with its subtree) under a new parent (parent_id null = deck root)
Cu = function(e) {
  const t = e.card_id, n = e.parent_id ?? null, i = e.index ?? 0;
  return R(this, D, tt).mutateDeck((a) => {
    if (!T1(a, t, n, i))
      throw new Error(`cannot move card ${t} (unknown card/parent or would create a cycle)`);
  }), null;
}, //--------------------------------------------------------------------------//
//                             widget handlers                                //
//--------------------------------------------------------------------------//
Au = function(e) {
  const { Widget: t } = ue(this, D, Wu).call(this, e.card_id, e.widget_id);
  return { ...t };
}, $u = function(e) {
  const t = e.props ?? {};
  return R(this, D, tt).mutateDeck((n) => {
    const { Widget: i } = ue(this, D, Y0).call(this, n, e.card_id, e.widget_id);
    for (const [a, s] of Object.entries(t))
      a !== "Type" && (i[a] = s);
  }), null;
}, Iu = function(e) {
  const t = e.card_id, n = e.type, i = e.props ?? {}, a = e.rect, s = e.index;
  let o = "";
  return R(this, D, tt).mutateDeck((l) => {
    const d = Xe(l).find((I) => I.Id === t);
    if (d == null)
      throw new Error(`card not found: ${t}`);
    o = jh(l);
    const h = l.CardWidth ?? 600, f = l.CardHeight ?? 450, m = ["left-width", "top-height"], v = a ?? { x: h / 4, y: f / 4, width: h / 2, height: f / 2 }, k = zl(
      v.x,
      v.y,
      v.width,
      v.height,
      m,
      h,
      f
    ), T = {
      // appended last ⇒ on top of the stack
      ...Kh[n] ?? {},
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
}, Tu = function(e) {
  const t = e.card_id, n = e.widget_id;
  return R(this, D, tt).mutateDeck((i) => {
    const a = Xe(i).find((o) => o.Id === t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    const s = a.Widgets.findIndex((o) => o.Id === n);
    if (s < 0)
      throw new Error(`widget not found: ${n}`);
    a.Widgets.splice(s, 1);
  }), null;
}, Nu = function(e) {
  return R(this, D, tt).mutateDeck((t) => {
    const n = Xe(t).find((o) => o.Id === e.src_card_id), i = Xe(t).find((o) => o.Id === e.dst_card_id);
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
}, Mu = function(e) {
  const t = e.card_id, n = e.widget_id, i = e.new_index;
  return R(this, D, tt).mutateDeck((a) => {
    const s = Xe(a).find((h) => h.Id === t);
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
Eu = function(e) {
  const t = R(this, D, tt).getDeck(), { Widget: n } = ue(this, D, Y0).call(this, t, e.card_id, e.widget_id);
  return { ...El(
    n.Anchors,
    n.Offsets,
    t.CardWidth ?? 600,
    t.CardHeight ?? 450
  ), anchors: n.Anchors };
}, zu = function(e) {
  const t = e.rect, n = e.anchors ?? ["left-width", "top-height"];
  return R(this, D, tt).mutateDeck((i) => {
    const { Widget: a } = ue(this, D, Y0).call(this, i, e.card_id, e.widget_id), s = i.CardWidth ?? 600, o = i.CardHeight ?? 450;
    a.Anchors = n, a.Offsets = zl(t.x, t.y, t.width, t.height, n, s, o);
  }), null;
}, //--------------------------------------------------------------------------//
//                            scripting handlers                              //
//--------------------------------------------------------------------------//
Ru = function(e) {
  const t = Fa(e.target, R(this, D, tt).getDeck());
  if (t == null)
    throw new Error(`target not found: ${e.target}`);
  return t === "deck" ? R(this, D, tt).getDeck().Script : "Widget" in t ? t.Widget.Script : t.Card.Script;
}, Ou = function(e) {
  const t = e.target, n = e.script;
  return R(this, D, tt).mutateDeck((i) => {
    const a = Fa(t, i);
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
Zi = function(e, t) {
  const n = Fa(e, t);
  if (n == null)
    throw new Error(`target not found: ${e}`);
  return n === "deck" ? t : "Widget" in n ? n.Widget : n.Card;
}, ms = function(e) {
  return e === "deck" ? qh : e.includes("/") ? Uh : Wh;
}, Bu = function(e) {
  const t = e.target, n = ue(this, D, Zi).call(this, t, R(this, D, tt).getDeck()), i = ue(this, D, ms).call(this, t), a = {};
  for (const [s, o] of Object.entries(n))
    i.has(s) || (a[s] = o);
  return a;
}, Lu = function(e) {
  const t = e.target, n = e.key;
  if (ue(this, D, ms).call(this, t).has(n))
    throw new Error(`"${n}" is a reserved schema key`);
  return R(this, D, tt).mutateDeck((i) => {
    ue(this, D, Zi).call(this, t, i)[n] = e.value;
  }), null;
}, Du = function(e) {
  const t = e.target, n = e.key;
  return R(this, D, tt).mutateDeck((i) => {
    delete ue(this, D, Zi).call(this, t, i)[n];
  }), null;
}, Fu = async function(e) {
  return R(this, D, tt).evalInContext(e.expression);
}, Pu = async function(e) {
  const t = e.target, n = e.message, i = e.args ?? [], a = i.length > 0 ? ", " + i.map((s) => JSON.stringify(s)).join(", ") : "";
  return R(this, D, tt).evalInContext(
    `Widget(${JSON.stringify(t)})?.triggered(${JSON.stringify(n)}${a})`
  );
}, Vu = async function(e) {
  return R(this, D, tt).navigate(e.card), null;
}, Hu = async function() {
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
qu = function(e) {
  const t = Xe(R(this, D, tt).getDeck()).find((n) => n.Id === e);
  if (t == null)
    throw new Error(`card not found: ${e}`);
  return t;
}, Wu = function(e, t) {
  return ue(this, D, Y0).call(this, R(this, D, tt).getDeck(), e, t);
}, Y0 = function(e, t, n) {
  const i = Xe(e).find((s) => s.Id === t);
  if (i == null)
    throw new Error(`card not found: ${t}`);
  const a = i.Widgets.find((s) => s.Id === n);
  if (a == null)
    throw new Error(`widget not found: ${n}`);
  return { Card: i, Widget: a };
};
function to() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var s0 = to();
function Uu(r) {
  s0 = r;
}
var Jn = { exec: () => null };
function k0(r) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), i = e[n];
    return i || (i = r(n), e[n] = i), i;
  };
}
function Ge(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (i, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Lt.caret, "$1"), t = t.replace(i, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var Xh = ((r = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + r);
  } catch {
    return !1;
  }
})(), Lt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: k0((r) => new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: k0((r) => new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: k0((r) => new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)), headingBeginRegex: k0((r) => new RegExp(`^ {0,${r}}#`)), htmlBeginRegex: k0((r) => new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: k0((r) => new RegExp(`^ {0,${r}}>`)) }, Jh = /^(?:[ \t]*(?:\n|$))+/, Yh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Qh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, yi = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, ef = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ro = / {0,3}(?:[*+-]|\d{1,9}[.)])/, Gu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, ju = Ge(Gu).replace(/bull/g, ro).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), tf = Ge(Gu).replace(/bull/g, ro).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), no = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, rf = /^[^\n]+/, io = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, nf = Ge(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", io).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), af = Ge(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ro).getRegex(), ba = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ao = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, sf = Ge("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ao).replace("tag", ba).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ku = Ge(no).replace("hr", yi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ba).getRegex(), of = Ge(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Ku).getRegex(), so = { blockquote: of, code: Yh, def: nf, fences: Qh, heading: ef, hr: yi, html: sf, lheading: ju, list: af, newline: Jh, paragraph: Ku, table: Jn, text: rf }, Rl = Ge("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", yi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ba).getRegex(), lf = { ...so, lheading: tf, table: Rl, paragraph: Ge(no).replace("hr", yi).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", Rl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ba).getRegex() }, cf = { ...so, html: Ge(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ao).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Jn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: Ge(no).replace("hr", yi).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", ju).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, uf = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, df = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Zu = /^( {2,}|\\)\n(?!\s*$)/, hf = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, P0 = /[\p{P}\p{S}]/u, va = /[\s\p{P}\p{S}]/u, oo = /[^\s\p{P}\p{S}]/u, ff = Ge(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, va).getRegex(), Xu = /(?!~)[\p{P}\p{S}]/u, pf = /(?!~)[\s\p{P}\p{S}]/u, mf = /(?:[^\s\p{P}\p{S}]|~)/u, gf = Ge(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Xh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Ju = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, bf = Ge(Ju, "u").replace(/punct/g, P0).getRegex(), vf = Ge(Ju, "u").replace(/punct/g, Xu).getRegex(), Yu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", wf = Ge(Yu, "gu").replace(/notPunctSpace/g, oo).replace(/punctSpace/g, va).replace(/punct/g, P0).getRegex(), xf = Ge(Yu, "gu").replace(/notPunctSpace/g, mf).replace(/punctSpace/g, pf).replace(/punct/g, Xu).getRegex(), yf = Ge("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, oo).replace(/punctSpace/g, va).replace(/punct/g, P0).getRegex(), kf = Ge(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, P0).getRegex(), Sf = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", _f = Ge(Sf, "gu").replace(/notPunctSpace/g, oo).replace(/punctSpace/g, va).replace(/punct/g, P0).getRegex(), Cf = Ge(/\\(punct)/, "gu").replace(/punct/g, P0).getRegex(), Af = Ge(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), $f = Ge(ao).replace("(?:-->|$)", "-->").getRegex(), If = Ge("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", $f).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), na = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Tf = Ge(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", na).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Qu = Ge(/^!?\[(label)\]\[(ref)\]/).replace("label", na).replace("ref", io).getRegex(), ed = Ge(/^!?\[(ref)\](?:\[\])?/).replace("ref", io).getRegex(), Nf = Ge("reflink|nolink(?!\\()", "g").replace("reflink", Qu).replace("nolink", ed).getRegex(), Ol = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, lo = { _backpedal: Jn, anyPunctuation: Cf, autolink: Af, blockSkip: gf, br: Zu, code: df, del: Jn, delLDelim: Jn, delRDelim: Jn, emStrongLDelim: bf, emStrongRDelimAst: wf, emStrongRDelimUnd: yf, escape: uf, link: Tf, nolink: ed, punctuation: ff, reflink: Qu, reflinkSearch: Nf, tag: If, text: hf, url: Jn }, Mf = { ...lo, link: Ge(/^!?\[(label)\]\((.*?)\)/).replace("label", na).getRegex(), reflink: Ge(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", na).getRegex() }, gs = { ...lo, emStrongRDelimAst: xf, emStrongLDelim: vf, delLDelim: kf, delRDelim: _f, url: Ge(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Ol).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: Ge(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Ol).getRegex() }, Ef = { ...gs, br: Ge(Zu).replace("{2,}", "*").getRegex(), text: Ge(gs.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, Mi = { normal: so, gfm: lf, pedantic: cf }, Z0 = { normal: lo, gfm: gs, breaks: Ef, pedantic: Mf }, zf = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Bl = (r) => zf[r];
function Tr(r, e) {
  if (e) {
    if (Lt.escapeTest.test(r)) return r.replace(Lt.escapeReplace, Bl);
  } else if (Lt.escapeTestNoEncode.test(r)) return r.replace(Lt.escapeReplaceNoEncode, Bl);
  return r;
}
function Ll(r) {
  try {
    r = encodeURI(r).replace(Lt.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function Dl(r, e) {
  var a;
  let t = r.replace(Lt.findPipe, (s, o, l) => {
    let d = !1, h = o;
    for (; --h >= 0 && l[h] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = t.split(Lt.splitPipe), i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((a = n.at(-1)) != null && a.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; i < n.length; i++) n[i] = n[i].trim().replace(Lt.slashPipe, "|");
  return n;
}
function kn(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let i = 0;
  for (; i < n && r.charAt(n - i - 1) === e; )
    i++;
  return r.slice(0, n - i);
}
function Fl(r) {
  let e = r.split(`
`), t = e.length - 1;
  for (; t >= 0 && Lt.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? r : e.slice(0, t + 1).join(`
`);
}
function Rf(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function Of(r, e = 0) {
  let t = e, n = "";
  for (let i of r) if (i === "	") {
    let a = 4 - t % 4;
    n += " ".repeat(a), t += a;
  } else n += i, t++;
  return n;
}
function Pl(r, e, t, n, i) {
  let a = e.href, s = e.title || null, o = r[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: a, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, l;
}
function Bf(r, e, t) {
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
var ia = class {
  constructor(r) {
    nt(this, "options");
    nt(this, "rules");
    nt(this, "lexer");
    this.options = r || s0;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = this.options.pedantic ? e[0] : Fl(e[0]), n = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: n };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = Bf(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = kn(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: kn(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: kn(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = kn(e[0], `
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
        let f = Of(e[2].split(`
`, 1)[0], e[1].length), m = r.split(`
`, 1)[0], v = !f.trim(), k = 0;
        if (this.options.pedantic ? (k = 2, h = f.trimStart()) : v ? k = e[1].length + 1 : (k = f.search(this.rules.other.nonSpaceChar), k = k > 4 ? 1 : k, h = f.slice(k), k += e[1].length), v && this.rules.other.blankLine.test(m) && (d += m + `
`, r = r.substring(m.length + 1), l = !0), !l) {
          let T = this.rules.other.nextBulletRegex(k), I = this.rules.other.hrRegex(k), z = this.rules.other.fencesBeginRegex(k), O = this.rules.other.headingBeginRegex(k), W = this.rules.other.htmlBeginRegex(k), Y = this.rules.other.blockquoteBeginRegex(k);
          for (; r; ) {
            let re = r.split(`
`, 1)[0], M;
            if (m = re, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), M = m) : M = m.replace(this.rules.other.tabCharGlobal, "    "), z.test(m) || O.test(m) || W.test(m) || Y.test(m) || T.test(m) || I.test(m)) break;
            if (M.search(this.rules.other.nonSpaceChar) >= k || !m.trim()) h += `
` + M.slice(k);
            else {
              if (v || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || z.test(f) || O.test(f) || I.test(f)) break;
              h += `
` + m;
            }
            v = !m.trim(), d += re + `
`, r = r.substring(re.length + 1), f = M.slice(k);
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
      let t = Fl(e[0]);
      return { type: "html", block: !0, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: kn(e[0], `
`), href: n, title: i };
    }
  }
  table(r) {
    var s;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = Dl(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (s = e[3]) != null && s.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: kn(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? a.align.push("left") : a.align.push(null);
      for (let o = 0; o < t.length; o++) a.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: a.align[o] });
      for (let o of i) a.rows.push(Dl(o, a.header.length).map((l, d) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[d] })));
      return a;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: kn(e[0], `
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
        let a = kn(t.slice(0, -1), "\\");
        if ((t.length - a.length) % 2 === 0) return;
      } else {
        let a = Rf(e[2], "()");
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
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), Pl(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
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
      return Pl(t, i, t[0], this.lexer, this.rules);
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
}, kr = class bs {
  constructor(e) {
    nt(this, "tokens");
    nt(this, "options");
    nt(this, "state");
    nt(this, "inlineQueue");
    nt(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || s0, this.options.tokenizer = this.options.tokenizer || new ia(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: Lt, block: Mi.normal, inline: Z0.normal };
    this.options.pedantic ? (t.block = Mi.pedantic, t.inline = Z0.pedantic) : this.options.gfm && (t.block = Mi.gfm, this.options.breaks ? t.inline = Z0.breaks : t.inline = Z0.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: Mi, inline: Z0 };
  }
  static lex(e, t) {
    return new bs(t).lex(e);
  }
  static lexInline(e, t) {
    return new bs(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(Lt.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var a, s, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Lt.tabCharGlobal, "    ").replace(Lt.spaceLine, ""));
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
        let I = 1 / 0, z = e.slice(1), O;
        this.options.extensions.startInline.forEach((W) => {
          O = W.call({ lexer: this }, z), typeof O == "number" && O >= 0 && (I = Math.min(I, O));
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
}, aa = class {
  constructor(r) {
    nt(this, "options");
    nt(this, "parser");
    this.options = r || s0;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var a;
    let n = (a = (e || "").match(Lt.notSpaceStart)) == null ? void 0 : a[0], i = r.replace(Lt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Tr(n) + '">' + (t ? i : Tr(i, !0)) + `</code></pre>
` : "<pre><code>" + (t ? i : Tr(i, !0)) + `</code></pre>
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
    return `<code>${Tr(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), i = Ll(r);
    if (i === null) return n;
    r = i;
    let a = '<a href="' + r + '"';
    return e && (a += ' title="' + Tr(e) + '"'), a += ">" + n + "</a>", a;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let i = Ll(r);
    if (i === null) return Tr(t);
    r = i;
    let a = `<img src="${r}" alt="${Tr(t)}"`;
    return e && (a += ` title="${Tr(e)}"`), a += ">", a;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Tr(r.text);
  }
}, co = class {
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
}, Sr = class vs {
  constructor(e) {
    nt(this, "options");
    nt(this, "renderer");
    nt(this, "textRenderer");
    this.options = e || s0, this.options.renderer = this.options.renderer || new aa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new co();
  }
  static parse(e, t) {
    return new vs(t).parse(e);
  }
  static parseInline(e, t) {
    return new vs(t).parseInline(e);
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
}, Ui, Q0 = (Ui = class {
  constructor(r) {
    nt(this, "options");
    nt(this, "block");
    this.options = r || s0;
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
    return r ? kr.lex : kr.lexInline;
  }
  provideParser(r = this.block) {
    return r ? Sr.parse : Sr.parseInline;
  }
}, nt(Ui, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), nt(Ui, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Ui), td = class {
  constructor(...r) {
    nt(this, "defaults", to());
    nt(this, "options", this.setOptions);
    nt(this, "parse", this.parseMarkdown(!0));
    nt(this, "parseInline", this.parseMarkdown(!1));
    nt(this, "Parser", Sr);
    nt(this, "Renderer", aa);
    nt(this, "TextRenderer", co);
    nt(this, "Lexer", kr);
    nt(this, "Tokenizer", ia);
    nt(this, "Hooks", Q0);
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
        let i = this.defaults.renderer || new aa(this.defaults);
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
        let i = this.defaults.tokenizer || new ia(this.defaults);
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
        let i = this.defaults.hooks || new Q0();
        for (let a in t.hooks) {
          if (!(a in i)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let s = a, o = t.hooks[s], l = i[s];
          Q0.passThroughHooks.has(a) ? i[s] = (d) => {
            if (this.defaults.async && Q0.passThroughHooksRespectAsync.has(a)) return (async () => {
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
    return kr.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return Sr.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, i = { ...this.defaults, ...n }, a = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && n.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = r), i.async) return (async () => {
        let s = i.hooks ? await i.hooks.preprocess(e) : e, o = await (i.hooks ? await i.hooks.provideLexer(r) : r ? kr.lex : kr.lexInline)(s, i), l = i.hooks ? await i.hooks.processAllTokens(o) : o;
        i.walkTokens && await Promise.all(this.walkTokens(l, i.walkTokens));
        let d = await (i.hooks ? await i.hooks.provideParser(r) : r ? Sr.parse : Sr.parseInline)(l, i);
        return i.hooks ? await i.hooks.postprocess(d) : d;
      })().catch(a);
      try {
        i.hooks && (e = i.hooks.preprocess(e));
        let s = (i.hooks ? i.hooks.provideLexer(r) : r ? kr.lex : kr.lexInline)(e, i);
        i.hooks && (s = i.hooks.processAllTokens(s)), i.walkTokens && this.walkTokens(s, i.walkTokens);
        let o = (i.hooks ? i.hooks.provideParser(r) : r ? Sr.parse : Sr.parseInline)(s, i);
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
        let n = "<p>An error occurred:</p><pre>" + Tr(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, n0 = new td();
function it(r, e) {
  return n0.parse(r, e);
}
it.options = it.setOptions = function(r) {
  return n0.setOptions(r), it.defaults = n0.defaults, Uu(it.defaults), it;
};
it.getDefaults = to;
it.defaults = s0;
it.use = function(...r) {
  return n0.use(...r), it.defaults = n0.defaults, Uu(it.defaults), it;
};
it.walkTokens = function(r, e) {
  return n0.walkTokens(r, e);
};
it.parseInline = n0.parseInline;
it.Parser = Sr;
it.parser = Sr.parse;
it.Renderer = aa;
it.TextRenderer = co;
it.Lexer = kr;
it.lexer = kr.lex;
it.Tokenizer = ia;
it.Hooks = Q0;
it.parse = it;
it.options;
it.setOptions;
it.use;
it.walkTokens;
it.parseInline;
Sr.parse;
kr.lex;
class Q extends Error {
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
    super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, Q.prototype), this.position = i, i != null && a != null && (this.length = a - i), this.rawMessage = e;
  }
}
var Lf = /([A-Z])/g, Df = (r) => r.replace(Lf, "-$1").toLowerCase(), Ff = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, Pf = /[&><"']/g, Dt = (r) => String(r).replace(Pf, (e) => Ff[e]), Xi = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? Xi(r.body[0]) : r : r.type === "font" ? Xi(r.body) : r, Vf = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), hn = (r) => Vf.has(Xi(r).type), Hf = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, ws = {
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
function qf(r) {
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
function Wf(r) {
  if (r.default !== void 0)
    return r.default;
  var e = Array.isArray(r.type) ? r.type[0] : r.type;
  return qf(e);
}
function Uf(r, e, t, n) {
  var i = t[e];
  r[e] = i !== void 0 ? n.processor ? n.processor(i) : i : Wf(n);
}
class uo {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t of Object.keys(ws)) {
      var n = ws[t];
      n && Uf(this, t, e, n);
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
        throw new Q("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
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
      var t = Hf(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class Sn {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Er[Gf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Er[jf[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Er[Kf[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Er[Zf[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Er[Xf[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Er[Jf[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var ho = 0, sa = 1, A0 = 2, on = 3, si = 4, fr = 5, R0 = 6, Ut = 7, Er = [new Sn(ho, 0, !1), new Sn(sa, 0, !0), new Sn(A0, 1, !1), new Sn(on, 1, !0), new Sn(si, 2, !1), new Sn(fr, 2, !0), new Sn(R0, 3, !1), new Sn(Ut, 3, !0)], Gf = [si, fr, si, fr, R0, Ut, R0, Ut], jf = [fr, fr, fr, fr, Ut, Ut, Ut, Ut], Kf = [A0, on, si, fr, R0, Ut, R0, Ut], Zf = [on, on, fr, fr, Ut, Ut, Ut, Ut], Xf = [sa, sa, on, on, fr, fr, Ut, Ut], Jf = [ho, sa, A0, on, A0, on, A0, on], Re = {
  DISPLAY: Er[ho],
  TEXT: Er[A0],
  SCRIPT: Er[si],
  SCRIPTSCRIPT: Er[R0]
}, xs = [{
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
function Yf(r) {
  for (var e = 0; e < xs.length; e++)
    for (var t = xs[e], n = 0; n < t.blocks.length; n++) {
      var i = t.blocks[n];
      if (r >= i[0] && r <= i[1])
        return t.name;
    }
  return null;
}
var Ji = [];
xs.forEach((r) => r.blocks.forEach((e) => Ji.push(...e)));
function rd(r) {
  for (var e = 0; e < Ji.length; e += 2)
    if (r >= Ji[e] && r <= Ji[e + 1])
      return !0;
  return !1;
}
var Mt = (r) => r + " " + r, S0 = 80, Qf = function(e, t) {
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
}, ep = function(e, t) {
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
}, tp = function(e, t) {
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
}, rp = function(e, t) {
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
}, np = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, ip = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, ap = function(e, t, n) {
  var i = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, sp = function(e, t, n) {
  t = 1e3 * t;
  var i = "";
  switch (e) {
    case "sqrtMain":
      i = Qf(t, S0);
      break;
    case "sqrtSize1":
      i = ep(t, S0);
      break;
    case "sqrtSize2":
      i = tp(t, S0);
      break;
    case "sqrtSize3":
      i = rp(t, S0);
      break;
    case "sqrtSize4":
      i = np(t, S0);
      break;
    case "sqrtTall":
      i = ap(t, S0, n);
  }
  return i;
}, op = function(e, t) {
  switch (e) {
    case "⎜":
      return Mt("M291 0 H417 V" + t + " H291z");
    case "∣":
      return Mt("M145 0 H188 V" + t + " H145z");
    case "∥":
      return Mt("M145 0 H188 V" + t + " H145z") + Mt("M367 0 H410 V" + t + " H367z");
    case "⎟":
      return Mt("M457 0 H583 V" + t + " H457z");
    case "⎢":
      return Mt("M319 0 H403 V" + t + " H319z");
    case "⎥":
      return Mt("M263 0 H347 V" + t + " H263z");
    case "⎪":
      return Mt("M384 0 H504 V" + t + " H384z");
    case "⏐":
      return Mt("M312 0 H355 V" + t + " H312z");
    case "‖":
      return Mt("M257 0 H300 V" + t + " H257z") + Mt("M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Vl = {
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
  leftlinesegment: Mt("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
  leftbracketunder: Mt("M0 0 h120 V290 H399995 v120 H0z"),
  leftbracketover: Mt("M0 440 h120 V150 H399995 v-120 H0z"),
  leftmapsto: Mt("M40 281 V448H0V74H40V241H400000v40z"),
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: Mt("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
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
  rightlinesegment: Mt("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
  rightbracketunder: Mt("M399995 0 h-120 V290 H0 v120 H400000z"),
  rightbracketover: Mt("M399995 440 h-120 V150 H0 v-120 H399995z"),
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
}, lp = function(e, t) {
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
function cp(r) {
  return "toText" in r;
}
class V0 {
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
      if (cp(e))
        return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var ys = {
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
}, up = {
  ex: !0,
  em: !0,
  mu: !0
}, nd = function(e) {
  return typeof e != "string" && (e = e.unit), e in ys || e in up || e === "ex";
}, vt = function(e, t) {
  var n;
  if (e.unit in ys)
    n = ys[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var i;
    if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
      n = i.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = i.fontMetrics().quad;
    else
      throw new Q("Invalid unit: '" + e.unit + "'");
    i !== t && (n *= i.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, ne = function(e) {
  return +e.toFixed(4) + "em";
}, En = function(e) {
  return e.filter((t) => t).join(" ");
}, fo = function(e) {
  var t = "";
  for (var n of Object.keys(e)) {
    var i = e[n];
    i !== void 0 && (t += Df(n) + ":" + i + ";");
  }
  return t;
}, id = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var i = t.getColor();
    i && (this.style.color = i);
  }
}, ad = function(e) {
  var t = document.createElement(e);
  t.className = En(this.classes), Object.assign(t.style, this.style);
  for (var n of Object.keys(this.attributes))
    t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, dp = /[\s"'>/=\x00-\x1f]/, sd = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Dt(En(this.classes)) + '"');
  var n = fo(this.style);
  n && (t += ' style="' + Dt(n) + '"');
  for (var i of Object.keys(this.attributes)) {
    if (dp.test(i))
      throw new Q("Invalid attribute name '" + i + "'");
    t += " " + i + '="' + Dt(this.attributes[i]) + '"';
  }
  t += ">";
  for (var a = 0; a < this.children.length; a++)
    t += this.children[a].toMarkup();
  return t += "</" + e + ">", t;
};
class H0 {
  constructor(e, t, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, id.call(this, e, n, i), this.children = t || [];
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
    return ad.call(this, "span");
  }
  toMarkup() {
    return sd.call(this, "span");
  }
}
class wa {
  constructor(e, t, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, id.call(this, t, i), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return ad.call(this, "a");
  }
  toMarkup() {
    return sd.call(this, "a");
  }
}
class hp {
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
    var e = '<img src="' + Dt(this.src) + '"' + (' alt="' + Dt(this.alt) + '"'), t = fo(this.style);
    return t && (e += ' style="' + Dt(t) + '"'), e += "'/>", e;
  }
}
var fp = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class nr {
  constructor(e, t, n, i, a, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = i || 0, this.skew = a || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var d = Yf(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = fp[this.text]);
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
    return this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = ne(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = En(this.classes)), Object.keys(this.style).length > 0 && (t = t || document.createElement("span"), Object.assign(t.style, this.style)), t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Dt(En(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + ne(this.italic) + ";"), n += fo(this.style), n && (e = !0, t += ' style="' + Dt(n) + '"');
    var i = Dt(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class un {
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
      e += " " + t + '="' + Dt(this.attributes[t]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class zn {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Vl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + Dt(this.alternate) + '"/>' : '<path d="' + Dt(Vl[this.pathName]) + '"/>';
  }
}
class ks {
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
      e += " " + t + '="' + Dt(this.attributes[t]) + '"';
    return e += "/>", e;
  }
}
function pp(r) {
  if (r instanceof nr)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function mp(r) {
  if (r instanceof H0)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var gp = (r) => r instanceof H0 || r instanceof wa || r instanceof V0, Rr = {
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
}, Ei = {
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
}, Hl = {
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
function bp(r, e) {
  Rr[r] = e;
}
function po(r, e, t) {
  if (!Rr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), i = Rr[e][n];
  if (!i && r[0] in Hl && (n = Hl[r[0]].charCodeAt(0), i = Rr[e][n]), !i && t === "text" && rd(n) && (i = Rr[e][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var Pa = {};
function vp(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Pa[e]) {
    var t = Pa[e] = {
      cssEmPerMu: Ei.quad[e] / 18
    };
    for (var n in Ei)
      Ei.hasOwnProperty(n) && (t[n] = Ei[n][e]);
  }
  return Pa[e];
}
var mt = {
  math: {},
  text: {}
};
function c(r, e, t, n, i, a) {
  mt[r][i] = {
    font: e,
    group: t,
    replace: n
  }, a && n && (mt[r][n] = mt[r][i]);
}
var u = "math", V = "text", p = "main", w = "ams", gt = "accent-token", pe = "bin", Gt = "close", q0 = "inner", _e = "mathord", It = "op-token", ar = "open", ki = "punct", y = "rel", fn = "spacing", A = "textord";
c(u, p, y, "≡", "\\equiv", !0);
c(u, p, y, "≺", "\\prec", !0);
c(u, p, y, "≻", "\\succ", !0);
c(u, p, y, "∼", "\\sim", !0);
c(u, p, y, "⊥", "\\perp");
c(u, p, y, "⪯", "\\preceq", !0);
c(u, p, y, "⪰", "\\succeq", !0);
c(u, p, y, "≃", "\\simeq", !0);
c(u, p, y, "∣", "\\mid", !0);
c(u, p, y, "≪", "\\ll", !0);
c(u, p, y, "≫", "\\gg", !0);
c(u, p, y, "≍", "\\asymp", !0);
c(u, p, y, "∥", "\\parallel");
c(u, p, y, "⋈", "\\bowtie", !0);
c(u, p, y, "⌣", "\\smile", !0);
c(u, p, y, "⊑", "\\sqsubseteq", !0);
c(u, p, y, "⊒", "\\sqsupseteq", !0);
c(u, p, y, "≐", "\\doteq", !0);
c(u, p, y, "⌢", "\\frown", !0);
c(u, p, y, "∋", "\\ni", !0);
c(u, p, y, "∝", "\\propto", !0);
c(u, p, y, "⊢", "\\vdash", !0);
c(u, p, y, "⊣", "\\dashv", !0);
c(u, p, y, "∋", "\\owns");
c(u, p, ki, ".", "\\ldotp");
c(u, p, ki, "⋅", "\\cdotp");
c(u, p, ki, "⋅", "·");
c(V, p, A, "⋅", "·");
c(u, p, A, "#", "\\#");
c(V, p, A, "#", "\\#");
c(u, p, A, "&", "\\&");
c(V, p, A, "&", "\\&");
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
c(V, p, A, "§", "\\S");
c(u, p, A, "¶", "\\P", !0);
c(V, p, A, "¶", "\\P");
c(u, p, A, "†", "\\dag");
c(V, p, A, "†", "\\dag");
c(V, p, A, "†", "\\textdagger");
c(u, p, A, "‡", "\\ddag");
c(V, p, A, "‡", "\\ddag");
c(V, p, A, "‡", "\\textdaggerdbl");
c(u, p, Gt, "⎱", "\\rmoustache", !0);
c(u, p, ar, "⎰", "\\lmoustache", !0);
c(u, p, Gt, "⟯", "\\rgroup", !0);
c(u, p, ar, "⟮", "\\lgroup", !0);
c(u, p, pe, "∓", "\\mp", !0);
c(u, p, pe, "⊖", "\\ominus", !0);
c(u, p, pe, "⊎", "\\uplus", !0);
c(u, p, pe, "⊓", "\\sqcap", !0);
c(u, p, pe, "∗", "\\ast");
c(u, p, pe, "⊔", "\\sqcup", !0);
c(u, p, pe, "◯", "\\bigcirc", !0);
c(u, p, pe, "∙", "\\bullet", !0);
c(u, p, pe, "‡", "\\ddagger");
c(u, p, pe, "≀", "\\wr", !0);
c(u, p, pe, "⨿", "\\amalg");
c(u, p, pe, "&", "\\And");
c(u, p, y, "⟵", "\\longleftarrow", !0);
c(u, p, y, "⇐", "\\Leftarrow", !0);
c(u, p, y, "⟸", "\\Longleftarrow", !0);
c(u, p, y, "⟶", "\\longrightarrow", !0);
c(u, p, y, "⇒", "\\Rightarrow", !0);
c(u, p, y, "⟹", "\\Longrightarrow", !0);
c(u, p, y, "↔", "\\leftrightarrow", !0);
c(u, p, y, "⟷", "\\longleftrightarrow", !0);
c(u, p, y, "⇔", "\\Leftrightarrow", !0);
c(u, p, y, "⟺", "\\Longleftrightarrow", !0);
c(u, p, y, "↦", "\\mapsto", !0);
c(u, p, y, "⟼", "\\longmapsto", !0);
c(u, p, y, "↗", "\\nearrow", !0);
c(u, p, y, "↩", "\\hookleftarrow", !0);
c(u, p, y, "↪", "\\hookrightarrow", !0);
c(u, p, y, "↘", "\\searrow", !0);
c(u, p, y, "↼", "\\leftharpoonup", !0);
c(u, p, y, "⇀", "\\rightharpoonup", !0);
c(u, p, y, "↙", "\\swarrow", !0);
c(u, p, y, "↽", "\\leftharpoondown", !0);
c(u, p, y, "⇁", "\\rightharpoondown", !0);
c(u, p, y, "↖", "\\nwarrow", !0);
c(u, p, y, "⇌", "\\rightleftharpoons", !0);
c(u, w, y, "≮", "\\nless", !0);
c(u, w, y, "", "\\@nleqslant");
c(u, w, y, "", "\\@nleqq");
c(u, w, y, "⪇", "\\lneq", !0);
c(u, w, y, "≨", "\\lneqq", !0);
c(u, w, y, "", "\\@lvertneqq");
c(u, w, y, "⋦", "\\lnsim", !0);
c(u, w, y, "⪉", "\\lnapprox", !0);
c(u, w, y, "⊀", "\\nprec", !0);
c(u, w, y, "⋠", "\\npreceq", !0);
c(u, w, y, "⋨", "\\precnsim", !0);
c(u, w, y, "⪹", "\\precnapprox", !0);
c(u, w, y, "≁", "\\nsim", !0);
c(u, w, y, "", "\\@nshortmid");
c(u, w, y, "∤", "\\nmid", !0);
c(u, w, y, "⊬", "\\nvdash", !0);
c(u, w, y, "⊭", "\\nvDash", !0);
c(u, w, y, "⋪", "\\ntriangleleft");
c(u, w, y, "⋬", "\\ntrianglelefteq", !0);
c(u, w, y, "⊊", "\\subsetneq", !0);
c(u, w, y, "", "\\@varsubsetneq");
c(u, w, y, "⫋", "\\subsetneqq", !0);
c(u, w, y, "", "\\@varsubsetneqq");
c(u, w, y, "≯", "\\ngtr", !0);
c(u, w, y, "", "\\@ngeqslant");
c(u, w, y, "", "\\@ngeqq");
c(u, w, y, "⪈", "\\gneq", !0);
c(u, w, y, "≩", "\\gneqq", !0);
c(u, w, y, "", "\\@gvertneqq");
c(u, w, y, "⋧", "\\gnsim", !0);
c(u, w, y, "⪊", "\\gnapprox", !0);
c(u, w, y, "⊁", "\\nsucc", !0);
c(u, w, y, "⋡", "\\nsucceq", !0);
c(u, w, y, "⋩", "\\succnsim", !0);
c(u, w, y, "⪺", "\\succnapprox", !0);
c(u, w, y, "≆", "\\ncong", !0);
c(u, w, y, "", "\\@nshortparallel");
c(u, w, y, "∦", "\\nparallel", !0);
c(u, w, y, "⊯", "\\nVDash", !0);
c(u, w, y, "⋫", "\\ntriangleright");
c(u, w, y, "⋭", "\\ntrianglerighteq", !0);
c(u, w, y, "", "\\@nsupseteqq");
c(u, w, y, "⊋", "\\supsetneq", !0);
c(u, w, y, "", "\\@varsupsetneq");
c(u, w, y, "⫌", "\\supsetneqq", !0);
c(u, w, y, "", "\\@varsupsetneqq");
c(u, w, y, "⊮", "\\nVdash", !0);
c(u, w, y, "⪵", "\\precneqq", !0);
c(u, w, y, "⪶", "\\succneqq", !0);
c(u, w, y, "", "\\@nsubseteqq");
c(u, w, pe, "⊴", "\\unlhd");
c(u, w, pe, "⊵", "\\unrhd");
c(u, w, y, "↚", "\\nleftarrow", !0);
c(u, w, y, "↛", "\\nrightarrow", !0);
c(u, w, y, "⇍", "\\nLeftarrow", !0);
c(u, w, y, "⇏", "\\nRightarrow", !0);
c(u, w, y, "↮", "\\nleftrightarrow", !0);
c(u, w, y, "⇎", "\\nLeftrightarrow", !0);
c(u, w, y, "△", "\\vartriangle");
c(u, w, A, "ℏ", "\\hslash");
c(u, w, A, "▽", "\\triangledown");
c(u, w, A, "◊", "\\lozenge");
c(u, w, A, "Ⓢ", "\\circledS");
c(u, w, A, "®", "\\circledR");
c(V, w, A, "®", "\\circledR");
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
c(V, p, A, "ð", "ð");
c(u, w, A, "╱", "\\diagup");
c(u, w, A, "╲", "\\diagdown");
c(u, w, A, "□", "\\square");
c(u, w, A, "□", "\\Box");
c(u, w, A, "◊", "\\Diamond");
c(u, w, A, "¥", "\\yen", !0);
c(V, w, A, "¥", "\\yen", !0);
c(u, w, A, "✓", "\\checkmark", !0);
c(V, w, A, "✓", "\\checkmark");
c(u, w, A, "ℶ", "\\beth", !0);
c(u, w, A, "ℸ", "\\daleth", !0);
c(u, w, A, "ℷ", "\\gimel", !0);
c(u, w, A, "ϝ", "\\digamma", !0);
c(u, w, A, "ϰ", "\\varkappa");
c(u, w, ar, "┌", "\\@ulcorner", !0);
c(u, w, Gt, "┐", "\\@urcorner", !0);
c(u, w, ar, "└", "\\@llcorner", !0);
c(u, w, Gt, "┘", "\\@lrcorner", !0);
c(u, w, y, "≦", "\\leqq", !0);
c(u, w, y, "⩽", "\\leqslant", !0);
c(u, w, y, "⪕", "\\eqslantless", !0);
c(u, w, y, "≲", "\\lesssim", !0);
c(u, w, y, "⪅", "\\lessapprox", !0);
c(u, w, y, "≊", "\\approxeq", !0);
c(u, w, pe, "⋖", "\\lessdot");
c(u, w, y, "⋘", "\\lll", !0);
c(u, w, y, "≶", "\\lessgtr", !0);
c(u, w, y, "⋚", "\\lesseqgtr", !0);
c(u, w, y, "⪋", "\\lesseqqgtr", !0);
c(u, w, y, "≑", "\\doteqdot");
c(u, w, y, "≓", "\\risingdotseq", !0);
c(u, w, y, "≒", "\\fallingdotseq", !0);
c(u, w, y, "∽", "\\backsim", !0);
c(u, w, y, "⋍", "\\backsimeq", !0);
c(u, w, y, "⫅", "\\subseteqq", !0);
c(u, w, y, "⋐", "\\Subset", !0);
c(u, w, y, "⊏", "\\sqsubset", !0);
c(u, w, y, "≼", "\\preccurlyeq", !0);
c(u, w, y, "⋞", "\\curlyeqprec", !0);
c(u, w, y, "≾", "\\precsim", !0);
c(u, w, y, "⪷", "\\precapprox", !0);
c(u, w, y, "⊲", "\\vartriangleleft");
c(u, w, y, "⊴", "\\trianglelefteq");
c(u, w, y, "⊨", "\\vDash", !0);
c(u, w, y, "⊪", "\\Vvdash", !0);
c(u, w, y, "⌣", "\\smallsmile");
c(u, w, y, "⌢", "\\smallfrown");
c(u, w, y, "≏", "\\bumpeq", !0);
c(u, w, y, "≎", "\\Bumpeq", !0);
c(u, w, y, "≧", "\\geqq", !0);
c(u, w, y, "⩾", "\\geqslant", !0);
c(u, w, y, "⪖", "\\eqslantgtr", !0);
c(u, w, y, "≳", "\\gtrsim", !0);
c(u, w, y, "⪆", "\\gtrapprox", !0);
c(u, w, pe, "⋗", "\\gtrdot");
c(u, w, y, "⋙", "\\ggg", !0);
c(u, w, y, "≷", "\\gtrless", !0);
c(u, w, y, "⋛", "\\gtreqless", !0);
c(u, w, y, "⪌", "\\gtreqqless", !0);
c(u, w, y, "≖", "\\eqcirc", !0);
c(u, w, y, "≗", "\\circeq", !0);
c(u, w, y, "≜", "\\triangleq", !0);
c(u, w, y, "∼", "\\thicksim");
c(u, w, y, "≈", "\\thickapprox");
c(u, w, y, "⫆", "\\supseteqq", !0);
c(u, w, y, "⋑", "\\Supset", !0);
c(u, w, y, "⊐", "\\sqsupset", !0);
c(u, w, y, "≽", "\\succcurlyeq", !0);
c(u, w, y, "⋟", "\\curlyeqsucc", !0);
c(u, w, y, "≿", "\\succsim", !0);
c(u, w, y, "⪸", "\\succapprox", !0);
c(u, w, y, "⊳", "\\vartriangleright");
c(u, w, y, "⊵", "\\trianglerighteq");
c(u, w, y, "⊩", "\\Vdash", !0);
c(u, w, y, "∣", "\\shortmid");
c(u, w, y, "∥", "\\shortparallel");
c(u, w, y, "≬", "\\between", !0);
c(u, w, y, "⋔", "\\pitchfork", !0);
c(u, w, y, "∝", "\\varpropto");
c(u, w, y, "◀", "\\blacktriangleleft");
c(u, w, y, "∴", "\\therefore", !0);
c(u, w, y, "∍", "\\backepsilon");
c(u, w, y, "▶", "\\blacktriangleright");
c(u, w, y, "∵", "\\because", !0);
c(u, w, y, "⋘", "\\llless");
c(u, w, y, "⋙", "\\gggtr");
c(u, w, pe, "⊲", "\\lhd");
c(u, w, pe, "⊳", "\\rhd");
c(u, w, y, "≂", "\\eqsim", !0);
c(u, p, y, "⋈", "\\Join");
c(u, w, y, "≑", "\\Doteq", !0);
c(u, w, pe, "∔", "\\dotplus", !0);
c(u, w, pe, "∖", "\\smallsetminus");
c(u, w, pe, "⋒", "\\Cap", !0);
c(u, w, pe, "⋓", "\\Cup", !0);
c(u, w, pe, "⩞", "\\doublebarwedge", !0);
c(u, w, pe, "⊟", "\\boxminus", !0);
c(u, w, pe, "⊞", "\\boxplus", !0);
c(u, w, pe, "⋇", "\\divideontimes", !0);
c(u, w, pe, "⋉", "\\ltimes", !0);
c(u, w, pe, "⋊", "\\rtimes", !0);
c(u, w, pe, "⋋", "\\leftthreetimes", !0);
c(u, w, pe, "⋌", "\\rightthreetimes", !0);
c(u, w, pe, "⋏", "\\curlywedge", !0);
c(u, w, pe, "⋎", "\\curlyvee", !0);
c(u, w, pe, "⊝", "\\circleddash", !0);
c(u, w, pe, "⊛", "\\circledast", !0);
c(u, w, pe, "⋅", "\\centerdot");
c(u, w, pe, "⊺", "\\intercal", !0);
c(u, w, pe, "⋒", "\\doublecap");
c(u, w, pe, "⋓", "\\doublecup");
c(u, w, pe, "⊠", "\\boxtimes", !0);
c(u, w, y, "⇢", "\\dashrightarrow", !0);
c(u, w, y, "⇠", "\\dashleftarrow", !0);
c(u, w, y, "⇇", "\\leftleftarrows", !0);
c(u, w, y, "⇆", "\\leftrightarrows", !0);
c(u, w, y, "⇚", "\\Lleftarrow", !0);
c(u, w, y, "↞", "\\twoheadleftarrow", !0);
c(u, w, y, "↢", "\\leftarrowtail", !0);
c(u, w, y, "↫", "\\looparrowleft", !0);
c(u, w, y, "⇋", "\\leftrightharpoons", !0);
c(u, w, y, "↶", "\\curvearrowleft", !0);
c(u, w, y, "↺", "\\circlearrowleft", !0);
c(u, w, y, "↰", "\\Lsh", !0);
c(u, w, y, "⇈", "\\upuparrows", !0);
c(u, w, y, "↿", "\\upharpoonleft", !0);
c(u, w, y, "⇃", "\\downharpoonleft", !0);
c(u, p, y, "⊶", "\\origof", !0);
c(u, p, y, "⊷", "\\imageof", !0);
c(u, w, y, "⊸", "\\multimap", !0);
c(u, w, y, "↭", "\\leftrightsquigarrow", !0);
c(u, w, y, "⇉", "\\rightrightarrows", !0);
c(u, w, y, "⇄", "\\rightleftarrows", !0);
c(u, w, y, "↠", "\\twoheadrightarrow", !0);
c(u, w, y, "↣", "\\rightarrowtail", !0);
c(u, w, y, "↬", "\\looparrowright", !0);
c(u, w, y, "↷", "\\curvearrowright", !0);
c(u, w, y, "↻", "\\circlearrowright", !0);
c(u, w, y, "↱", "\\Rsh", !0);
c(u, w, y, "⇊", "\\downdownarrows", !0);
c(u, w, y, "↾", "\\upharpoonright", !0);
c(u, w, y, "⇂", "\\downharpoonright", !0);
c(u, w, y, "⇝", "\\rightsquigarrow", !0);
c(u, w, y, "⇝", "\\leadsto");
c(u, w, y, "⇛", "\\Rrightarrow", !0);
c(u, w, y, "↾", "\\restriction");
c(u, p, A, "‘", "`");
c(u, p, A, "$", "\\$");
c(V, p, A, "$", "\\$");
c(V, p, A, "$", "\\textdollar");
c(u, p, A, "%", "\\%");
c(V, p, A, "%", "\\%");
c(u, p, A, "_", "\\_");
c(V, p, A, "_", "\\_");
c(V, p, A, "_", "\\textunderscore");
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
c(u, p, _e, "α", "\\alpha", !0);
c(u, p, _e, "β", "\\beta", !0);
c(u, p, _e, "γ", "\\gamma", !0);
c(u, p, _e, "δ", "\\delta", !0);
c(u, p, _e, "ϵ", "\\epsilon", !0);
c(u, p, _e, "ζ", "\\zeta", !0);
c(u, p, _e, "η", "\\eta", !0);
c(u, p, _e, "θ", "\\theta", !0);
c(u, p, _e, "ι", "\\iota", !0);
c(u, p, _e, "κ", "\\kappa", !0);
c(u, p, _e, "λ", "\\lambda", !0);
c(u, p, _e, "μ", "\\mu", !0);
c(u, p, _e, "ν", "\\nu", !0);
c(u, p, _e, "ξ", "\\xi", !0);
c(u, p, _e, "ο", "\\omicron", !0);
c(u, p, _e, "π", "\\pi", !0);
c(u, p, _e, "ρ", "\\rho", !0);
c(u, p, _e, "σ", "\\sigma", !0);
c(u, p, _e, "τ", "\\tau", !0);
c(u, p, _e, "υ", "\\upsilon", !0);
c(u, p, _e, "ϕ", "\\phi", !0);
c(u, p, _e, "χ", "\\chi", !0);
c(u, p, _e, "ψ", "\\psi", !0);
c(u, p, _e, "ω", "\\omega", !0);
c(u, p, _e, "ε", "\\varepsilon", !0);
c(u, p, _e, "ϑ", "\\vartheta", !0);
c(u, p, _e, "ϖ", "\\varpi", !0);
c(u, p, _e, "ϱ", "\\varrho", !0);
c(u, p, _e, "ς", "\\varsigma", !0);
c(u, p, _e, "φ", "\\varphi", !0);
c(u, p, pe, "∗", "*", !0);
c(u, p, pe, "+", "+");
c(u, p, pe, "−", "-", !0);
c(u, p, pe, "⋅", "\\cdot", !0);
c(u, p, pe, "∘", "\\circ", !0);
c(u, p, pe, "÷", "\\div", !0);
c(u, p, pe, "±", "\\pm", !0);
c(u, p, pe, "×", "\\times", !0);
c(u, p, pe, "∩", "\\cap", !0);
c(u, p, pe, "∪", "\\cup", !0);
c(u, p, pe, "∖", "\\setminus", !0);
c(u, p, pe, "∧", "\\land");
c(u, p, pe, "∨", "\\lor");
c(u, p, pe, "∧", "\\wedge", !0);
c(u, p, pe, "∨", "\\vee", !0);
c(u, p, A, "√", "\\surd");
c(u, p, ar, "⟨", "\\langle", !0);
c(u, p, ar, "∣", "\\lvert");
c(u, p, ar, "∥", "\\lVert");
c(u, p, Gt, "?", "?");
c(u, p, Gt, "!", "!");
c(u, p, Gt, "⟩", "\\rangle", !0);
c(u, p, Gt, "∣", "\\rvert");
c(u, p, Gt, "∥", "\\rVert");
c(u, p, y, "=", "=");
c(u, p, y, ":", ":");
c(u, p, y, "≈", "\\approx", !0);
c(u, p, y, "≅", "\\cong", !0);
c(u, p, y, "≥", "\\ge");
c(u, p, y, "≥", "\\geq", !0);
c(u, p, y, "←", "\\gets");
c(u, p, y, ">", "\\gt", !0);
c(u, p, y, "∈", "\\in", !0);
c(u, p, y, "", "\\@not");
c(u, p, y, "⊂", "\\subset", !0);
c(u, p, y, "⊃", "\\supset", !0);
c(u, p, y, "⊆", "\\subseteq", !0);
c(u, p, y, "⊇", "\\supseteq", !0);
c(u, w, y, "⊈", "\\nsubseteq", !0);
c(u, w, y, "⊉", "\\nsupseteq", !0);
c(u, p, y, "⊨", "\\models");
c(u, p, y, "←", "\\leftarrow", !0);
c(u, p, y, "≤", "\\le");
c(u, p, y, "≤", "\\leq", !0);
c(u, p, y, "<", "\\lt", !0);
c(u, p, y, "→", "\\rightarrow", !0);
c(u, p, y, "→", "\\to");
c(u, w, y, "≱", "\\ngeq", !0);
c(u, w, y, "≰", "\\nleq", !0);
c(u, p, fn, " ", "\\ ");
c(u, p, fn, " ", "\\space");
c(u, p, fn, " ", "\\nobreakspace");
c(V, p, fn, " ", "\\ ");
c(V, p, fn, " ", " ");
c(V, p, fn, " ", "\\space");
c(V, p, fn, " ", "\\nobreakspace");
c(u, p, fn, "", "\\nobreak");
c(u, p, fn, "", "\\allowbreak");
c(u, p, ki, ",", ",");
c(u, p, ki, ";", ";");
c(u, w, pe, "⊼", "\\barwedge", !0);
c(u, w, pe, "⊻", "\\veebar", !0);
c(u, p, pe, "⊙", "\\odot", !0);
c(u, p, pe, "⊕", "\\oplus", !0);
c(u, p, pe, "⊗", "\\otimes", !0);
c(u, p, A, "∂", "\\partial", !0);
c(u, p, pe, "⊘", "\\oslash", !0);
c(u, w, pe, "⊚", "\\circledcirc", !0);
c(u, w, pe, "⊡", "\\boxdot", !0);
c(u, p, pe, "△", "\\bigtriangleup");
c(u, p, pe, "▽", "\\bigtriangledown");
c(u, p, pe, "†", "\\dagger");
c(u, p, pe, "⋄", "\\diamond");
c(u, p, pe, "⋆", "\\star");
c(u, p, pe, "◃", "\\triangleleft");
c(u, p, pe, "▹", "\\triangleright");
c(u, p, ar, "{", "\\{");
c(V, p, A, "{", "\\{");
c(V, p, A, "{", "\\textbraceleft");
c(u, p, Gt, "}", "\\}");
c(V, p, A, "}", "\\}");
c(V, p, A, "}", "\\textbraceright");
c(u, p, ar, "{", "\\lbrace");
c(u, p, Gt, "}", "\\rbrace");
c(u, p, ar, "[", "\\lbrack", !0);
c(V, p, A, "[", "\\lbrack", !0);
c(u, p, Gt, "]", "\\rbrack", !0);
c(V, p, A, "]", "\\rbrack", !0);
c(u, p, ar, "(", "\\lparen", !0);
c(u, p, Gt, ")", "\\rparen", !0);
c(V, p, A, "<", "\\textless", !0);
c(V, p, A, ">", "\\textgreater", !0);
c(u, p, ar, "⌊", "\\lfloor", !0);
c(u, p, Gt, "⌋", "\\rfloor", !0);
c(u, p, ar, "⌈", "\\lceil", !0);
c(u, p, Gt, "⌉", "\\rceil", !0);
c(u, p, A, "\\", "\\backslash");
c(u, p, A, "∣", "|");
c(u, p, A, "∣", "\\vert");
c(V, p, A, "|", "\\textbar", !0);
c(u, p, A, "∥", "\\|");
c(u, p, A, "∥", "\\Vert");
c(V, p, A, "∥", "\\textbardbl");
c(V, p, A, "~", "\\textasciitilde");
c(V, p, A, "\\", "\\textbackslash");
c(V, p, A, "^", "\\textasciicircum");
c(u, p, y, "↑", "\\uparrow", !0);
c(u, p, y, "⇑", "\\Uparrow", !0);
c(u, p, y, "↓", "\\downarrow", !0);
c(u, p, y, "⇓", "\\Downarrow", !0);
c(u, p, y, "↕", "\\updownarrow", !0);
c(u, p, y, "⇕", "\\Updownarrow", !0);
c(u, p, It, "∐", "\\coprod");
c(u, p, It, "⋁", "\\bigvee");
c(u, p, It, "⋀", "\\bigwedge");
c(u, p, It, "⨄", "\\biguplus");
c(u, p, It, "⋂", "\\bigcap");
c(u, p, It, "⋃", "\\bigcup");
c(u, p, It, "∫", "\\int");
c(u, p, It, "∫", "\\intop");
c(u, p, It, "∬", "\\iint");
c(u, p, It, "∭", "\\iiint");
c(u, p, It, "∏", "\\prod");
c(u, p, It, "∑", "\\sum");
c(u, p, It, "⨂", "\\bigotimes");
c(u, p, It, "⨁", "\\bigoplus");
c(u, p, It, "⨀", "\\bigodot");
c(u, p, It, "∮", "\\oint");
c(u, p, It, "∯", "\\oiint");
c(u, p, It, "∰", "\\oiiint");
c(u, p, It, "⨆", "\\bigsqcup");
c(u, p, It, "∫", "\\smallint");
c(V, p, q0, "…", "\\textellipsis");
c(u, p, q0, "…", "\\mathellipsis");
c(V, p, q0, "…", "\\ldots", !0);
c(u, p, q0, "…", "\\ldots", !0);
c(u, p, q0, "⋯", "\\@cdots", !0);
c(u, p, q0, "⋱", "\\ddots", !0);
c(u, p, A, "⋮", "\\varvdots");
c(V, p, A, "⋮", "\\varvdots");
c(u, p, gt, "ˊ", "\\acute");
c(u, p, gt, "ˋ", "\\grave");
c(u, p, gt, "¨", "\\ddot");
c(u, p, gt, "~", "\\tilde");
c(u, p, gt, "ˉ", "\\bar");
c(u, p, gt, "˘", "\\breve");
c(u, p, gt, "ˇ", "\\check");
c(u, p, gt, "^", "\\hat");
c(u, p, gt, "⃗", "\\vec");
c(u, p, gt, "˙", "\\dot");
c(u, p, gt, "˚", "\\mathring");
c(u, p, _e, "", "\\@imath");
c(u, p, _e, "", "\\@jmath");
c(u, p, A, "ı", "ı");
c(u, p, A, "ȷ", "ȷ");
c(V, p, A, "ı", "\\i", !0);
c(V, p, A, "ȷ", "\\j", !0);
c(V, p, A, "ß", "\\ss", !0);
c(V, p, A, "æ", "\\ae", !0);
c(V, p, A, "œ", "\\oe", !0);
c(V, p, A, "ø", "\\o", !0);
c(V, p, A, "Æ", "\\AE", !0);
c(V, p, A, "Œ", "\\OE", !0);
c(V, p, A, "Ø", "\\O", !0);
c(V, p, gt, "ˊ", "\\'");
c(V, p, gt, "ˋ", "\\`");
c(V, p, gt, "ˆ", "\\^");
c(V, p, gt, "˜", "\\~");
c(V, p, gt, "ˉ", "\\=");
c(V, p, gt, "˘", "\\u");
c(V, p, gt, "˙", "\\.");
c(V, p, gt, "¸", "\\c");
c(V, p, gt, "˚", "\\r");
c(V, p, gt, "ˇ", "\\v");
c(V, p, gt, "¨", '\\"');
c(V, p, gt, "˝", "\\H");
c(V, p, gt, "◯", "\\textcircled");
var od = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(V, p, A, "–", "--", !0);
c(V, p, A, "–", "\\textendash");
c(V, p, A, "—", "---", !0);
c(V, p, A, "—", "\\textemdash");
c(V, p, A, "‘", "`", !0);
c(V, p, A, "‘", "\\textquoteleft");
c(V, p, A, "’", "'", !0);
c(V, p, A, "’", "\\textquoteright");
c(V, p, A, "“", "``", !0);
c(V, p, A, "“", "\\textquotedblleft");
c(V, p, A, "”", "''", !0);
c(V, p, A, "”", "\\textquotedblright");
c(u, p, A, "°", "\\degree", !0);
c(V, p, A, "°", "\\degree");
c(V, p, A, "°", "\\textdegree", !0);
c(u, p, A, "£", "\\pounds");
c(u, p, A, "£", "\\mathsterling", !0);
c(V, p, A, "£", "\\pounds");
c(V, p, A, "£", "\\textsterling", !0);
c(u, w, A, "✠", "\\maltese");
c(V, w, A, "✠", "\\maltese");
var ql = '0123456789/@."';
for (var Va = 0; Va < ql.length; Va++) {
  var Wl = ql.charAt(Va);
  c(u, p, A, Wl, Wl);
}
var Ul = '0123456789!@*()-=+";:?/.,';
for (var Ha = 0; Ha < Ul.length; Ha++) {
  var Gl = Ul.charAt(Ha);
  c(V, p, A, Gl, Gl);
}
var oa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var qa = 0; qa < oa.length; qa++) {
  var zi = oa.charAt(qa);
  c(u, p, _e, zi, zi), c(V, p, A, zi, zi);
}
c(u, w, A, "C", "ℂ");
c(V, w, A, "C", "ℂ");
c(u, w, A, "H", "ℍ");
c(V, w, A, "H", "ℍ");
c(u, w, A, "N", "ℕ");
c(V, w, A, "N", "ℕ");
c(u, w, A, "P", "ℙ");
c(V, w, A, "P", "ℙ");
c(u, w, A, "Q", "ℚ");
c(V, w, A, "Q", "ℚ");
c(u, w, A, "R", "ℝ");
c(V, w, A, "R", "ℝ");
c(u, w, A, "Z", "ℤ");
c(V, w, A, "Z", "ℤ");
c(u, p, _e, "h", "ℎ");
c(V, p, _e, "h", "ℎ");
var Me;
for (var Ht = 0; Ht < oa.length; Ht++) {
  var yt = oa.charAt(Ht);
  Me = String.fromCharCode(55349, 56320 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56372 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56424 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56580 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56684 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56736 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56788 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56840 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56944 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Ht < 26 && (Me = String.fromCharCode(55349, 56632 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me), Me = String.fromCharCode(55349, 56476 + Ht), c(u, p, _e, yt, Me), c(V, p, A, yt, Me));
}
Me = "𝕜";
c(u, p, _e, "k", Me);
c(V, p, A, "k", Me);
for (var jn = 0; jn < 10; jn++) {
  var _n = jn.toString();
  Me = String.fromCharCode(55349, 57294 + jn), c(u, p, _e, _n, Me), c(V, p, A, _n, Me), Me = String.fromCharCode(55349, 57314 + jn), c(u, p, _e, _n, Me), c(V, p, A, _n, Me), Me = String.fromCharCode(55349, 57324 + jn), c(u, p, _e, _n, Me), c(V, p, A, _n, Me), Me = String.fromCharCode(55349, 57334 + jn), c(u, p, _e, _n, Me), c(V, p, A, _n, Me);
}
var Ss = "ÐÞþ";
for (var Wa = 0; Wa < Ss.length; Wa++) {
  var Ri = Ss.charAt(Wa);
  c(u, p, _e, Ri, Ri), c(V, p, A, Ri, Ri);
}
var _s = {
  mathClass: "mathbf",
  textClass: "textbf",
  font: "Main-Bold"
}, jl = {
  mathClass: "mathnormal",
  textClass: "textit",
  font: "Math-Italic"
}, Kl = {
  mathClass: "boldsymbol",
  textClass: "boldsymbol",
  font: "Main-BoldItalic"
}, wp = {
  mathClass: "mathscr",
  textClass: "textscr",
  font: "Script-Regular"
}, Yn = {
  mathClass: "",
  textClass: "",
  font: ""
}, Zl = {
  mathClass: "mathfrak",
  textClass: "textfrak",
  font: "Fraktur-Regular"
}, Xl = {
  mathClass: "mathbb",
  textClass: "textbb",
  font: "AMS-Regular"
}, Jl = {
  mathClass: "mathboldfrak",
  textClass: "textboldfrak",
  font: "Fraktur-Regular"
}, Cs = {
  mathClass: "mathsf",
  textClass: "textsf",
  font: "SansSerif-Regular"
}, As = {
  mathClass: "mathboldsf",
  textClass: "textboldsf",
  font: "SansSerif-Bold"
}, Yl = {
  mathClass: "mathitsf",
  textClass: "textitsf",
  font: "SansSerif-Italic"
}, $s = {
  mathClass: "mathtt",
  textClass: "texttt",
  font: "Typewriter-Regular"
}, Ql = [
  _s,
  _s,
  // A-Z, a-z
  jl,
  jl,
  // A-Z, a-z
  Kl,
  Kl,
  // A-Z, a-z
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  wp,
  Yn,
  // A-Z script, a-z — no font
  Yn,
  Yn,
  // A-Z bold script, a-z bold script — no font
  Zl,
  Zl,
  // A-Z, a-z
  Xl,
  Xl,
  // A-Z double-struck, k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  Jl,
  Jl,
  // A-Z, a-z
  Cs,
  Cs,
  // A-Z, a-z
  As,
  As,
  // A-Z, a-z
  Yl,
  Yl,
  // A-Z, a-z
  Yn,
  Yn,
  // A-Z bold italic sans, a-z bold italic sans - no font
  $s,
  $s
  // A-Z, a-z
], xp = [
  _s,
  // 0-9
  Yn,
  // 0-9 double-struck. No KaTeX font.
  Cs,
  // 0-9
  As,
  // 0-9
  $s
  // 0-9
], yp = (r) => {
  var e = r.charCodeAt(0), t = r.charCodeAt(1), n = (e - 55296) * 1024 + (t - 56320) + 65536;
  if (119808 <= n && n < 120484) {
    var i = Math.floor((n - 119808) / 26);
    return Ql[i];
  } else if (120782 <= n && n <= 120831) {
    var a = Math.floor((n - 120782) / 10);
    return xp[a];
  } else {
    if (n === 120485 || n === 120486)
      return Ql[0];
    if (120486 < n && n < 120782)
      return Yn;
    throw new Q("Unsupported character: " + r);
  }
}, xa = function(e, t, n) {
  if (mt[n][e]) {
    var i = mt[n][e].replace;
    i && (e = i);
  }
  return {
    value: e,
    metrics: po(e, t, n)
  };
}, Wt = function(e, t, n, i, a) {
  var s = xa(e, t, n), o = s.metrics;
  e = s.value;
  var l;
  if (o) {
    var d = o.italic;
    (n === "text" || i && i.font === "mathit") && (d = 0), l = new nr(e, o.height, o.depth, d, o.skew, o.width, a);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), l = new nr(e, 0, 0, 0, 0, 0, a);
  if (i) {
    l.maxFontSize = i.sizeMultiplier, i.style.isTight() && l.classes.push("mtight");
    var h = i.getColor();
    h && (l.style.color = h);
  }
  return l;
}, mo = function(e, t, n, i) {
  return i === void 0 && (i = []), n.font === "boldsymbol" && xa(e, "Main-Bold", t).metrics ? Wt(e, "Main-Bold", t, n, i.concat(["mathbf"])) : e === "\\" || mt[t][e].font === "main" ? Wt(e, "Main-Regular", t, n, i) : Wt(e, "AMS-Regular", t, n, i.concat(["amsrm"]));
}, kp = function(e, t, n) {
  return n !== "textord" && xa(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, ya = function(e, t) {
  var n = e.type === "mathord" ? "mathord" : "textord", i = e.mode, a = e.text, s = ["mord"], {
    font: o,
    fontFamily: l,
    fontWeight: d,
    fontShape: h
  } = t, f = i === "math" || i === "text" && !!o, m = f ? o : l, v = "", k = "";
  if (a.charCodeAt(0) === 55349) {
    var T = yp(a);
    v = T.font, k = T[i + "Class"];
  }
  if (v)
    return Wt(a, v, i, t, s.concat(k));
  if (m) {
    var I, z;
    if (m === "boldsymbol") {
      var O = kp(a, i, n);
      I = O.fontName, z = [O.fontClass];
    } else f ? (I = Is[o].fontName, z = [o]) : (I = Oi(l, d, h), z = [l, d, h]);
    if (xa(a, I, i).metrics)
      return Wt(a, I, i, t, s.concat(z));
    if (od.hasOwnProperty(a) && I.slice(0, 10) === "Typewriter") {
      for (var W = [], Y = 0; Y < a.length; Y++)
        W.push(Wt(a[Y], I, i, t, s.concat(z)));
      return pn(W);
    }
  }
  if (n === "mathord")
    return Wt(a, "Math-Italic", i, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var re = mt[i][a] && mt[i][a].font;
    if (re === "ams") {
      var M = Oi("amsrm", d, h);
      return Wt(a, M, i, t, s.concat("amsrm", d, h));
    } else if (re === "main" || !re) {
      var G = Oi("textrm", d, h);
      return Wt(a, G, i, t, s.concat(d, h));
    } else {
      var de = Oi(re, d, h);
      return Wt(a, de, i, t, s.concat(de, d, h));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Sp = (r, e) => {
  if (En(r.classes) !== En(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal"))
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
}, ld = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof nr && n instanceof nr && Sp(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, go = function(e) {
  for (var t = 0, n = 0, i = 0, a = 0; a < e.children.length; a++) {
    var s = e.children[a];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > i && (i = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = i;
}, K = function(e, t, n, i) {
  var a = new H0(e, t, n, i);
  return go(a), a;
}, Rn = (r, e, t, n) => new H0(r, e, t, n), O0 = function(e, t, n) {
  var i = K([e], [], t);
  return i.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = ne(i.height), i.maxFontSize = 1, i;
}, _p = function(e, t, n, i) {
  var a = new wa(e, t, n, i);
  return go(a), a;
}, pn = function(e) {
  var t = new V0(e);
  return go(t), t;
}, B0 = function(e, t) {
  return e instanceof V0 ? K([], [e], t) : e;
}, Cp = function(e) {
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
}, Je = function(e, t) {
  for (var {
    children: n,
    depth: i
  } = Cp(e), a = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      a = Math.max(a, l.maxFontSize, l.height);
    }
  }
  a += 2;
  var d = K(["pstrut"], []);
  d.style.height = ne(a);
  for (var h = [], f = i, m = i, v = i, k = 0; k < n.length; k++) {
    var T = n[k];
    if (T.type === "kern")
      v += T.size;
    else {
      var I = T.elem, z = T.wrapperClasses || [], O = T.wrapperStyle || {}, W = K(z, [d, I], void 0, O);
      W.style.top = ne(-a - v - I.depth), T.marginLeft && (W.style.marginLeft = T.marginLeft), T.marginRight && (W.style.marginRight = T.marginRight), h.push(W), v += I.height + I.depth;
    }
    f = Math.min(f, v), m = Math.max(m, v);
  }
  var Y = K(["vlist"], h);
  Y.style.height = ne(m);
  var re;
  if (f < 0) {
    var M = K([], []), G = K(["vlist"], [M]);
    G.style.height = ne(-f);
    var de = K(["vlist-s"], [new nr("​")]);
    re = [K(["vlist-r"], [Y, de]), K(["vlist-r"], [G])];
  } else
    re = [K(["vlist-r"], [Y])];
  var ce = K(["vlist-t"], re);
  return re.length === 2 && ce.classes.push("vlist-t2"), ce.height = m, ce.depth = -f, ce;
}, cd = (r, e) => {
  var t = K(["mspace"], [], e), n = vt(r, e);
  return t.style.marginRight = ne(n), t;
}, Oi = (r, e, t) => {
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
}, Is = {
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
}, ud = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, dd = function(e, t) {
  var [n, i, a] = ud[e], s = new zn(n), o = new un([s], {
    width: ne(i),
    height: ne(a),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + ne(i),
    viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
    preserveAspectRatio: "xMinYMin"
  }), l = Rn(["overlay"], [o], t);
  return l.height = a, l.style.height = ne(a), l.style.width = ne(i), l;
}, bt = {
  number: 3,
  unit: "mu"
}, Kn = {
  number: 4,
  unit: "mu"
}, tn = {
  number: 5,
  unit: "mu"
}, Ap = {
  mord: {
    mop: bt,
    mbin: Kn,
    mrel: tn,
    minner: bt
  },
  mop: {
    mord: bt,
    mop: bt,
    mrel: tn,
    minner: bt
  },
  mbin: {
    mord: Kn,
    mop: Kn,
    mopen: Kn,
    minner: Kn
  },
  mrel: {
    mord: tn,
    mop: tn,
    mopen: tn,
    minner: tn
  },
  mopen: {},
  mclose: {
    mop: bt,
    mbin: Kn,
    mrel: tn,
    minner: bt
  },
  mpunct: {
    mord: bt,
    mop: bt,
    mrel: tn,
    mopen: bt,
    mclose: bt,
    mpunct: bt,
    minner: bt
  },
  minner: {
    mord: bt,
    mop: bt,
    mbin: Kn,
    mrel: tn,
    mopen: bt,
    mpunct: bt,
    minner: bt
  }
}, $p = {
  mord: {
    mop: bt
  },
  mop: {
    mord: bt,
    mop: bt
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: bt
  },
  mpunct: {},
  minner: {
    mop: bt
  }
}, hd = {}, oi = {}, li = {};
function he(r) {
  for (var {
    type: e,
    names: t,
    htmlBuilder: n,
    mathmlBuilder: i
  } = r, a = 0; a < t.length; ++a)
    hd[t[a]] = r;
  e && (n && (oi[e] = n), i && (li[e] = i));
}
function o0(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  t && (oi[e] = t), n && (li[e] = n);
}
var la = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, At = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Ip = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), Tp = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), Np = {
  display: Re.DISPLAY,
  text: Re.TEXT,
  script: Re.SCRIPT,
  scriptscript: Re.SCRIPTSCRIPT
}, Mp = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Et = function(e, t, n, i) {
  i === void 0 && (i = [null, null]);
  for (var a = [], s = 0; s < e.length; s++) {
    var o = Ye(e[s], t);
    if (o instanceof V0) {
      var l = o.children;
      a.push(...l);
    } else
      a.push(o);
  }
  if (ld(a), !n)
    return a;
  var d = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = t.havingSize(h.size) : h.type === "styling" && (d = t.havingStyle(Np[h.style]));
  }
  var f = K([i[0] || "leftmost"], [], t), m = K([i[1] || "rightmost"], [], t), v = n === "root";
  return Ts(a, (k, T) => {
    var I = T.classes[0], z = k.classes[0];
    I === "mbin" && Tp.has(z) ? T.classes[0] = "mord" : z === "mbin" && Ip.has(I) && (k.classes[0] = "mord");
  }, {
    node: f
  }, m, v), Ts(a, (k, T) => {
    var I, z, O = Ms(T), W = Ms(k), Y = O && W ? k.hasClass("mtight") ? (I = $p[O]) == null ? void 0 : I[W] : (z = Ap[O]) == null ? void 0 : z[W] : null;
    if (Y)
      return cd(Y, d);
  }, {
    node: f
  }, m, v), a;
}, Ts = function(e, t, n, i, a) {
  i && e.push(i);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = fd(o);
    if (l) {
      Ts(l.children, t, n, null, a);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = t(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), s++));
    }
    d ? n.node = o : a && o.hasClass("newline") && (n.node = K(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((f) => (m) => {
      e.splice(f + 1, 0, m), s++;
    })(s);
  }
  i && e.pop();
}, fd = function(e) {
  return e instanceof V0 || e instanceof wa || e instanceof H0 && e.hasClass("enclosing") ? e : null;
}, Ns = function(e, t) {
  var n = fd(e);
  if (n) {
    var i = n.children;
    if (i.length) {
      if (t === "right")
        return Ns(i[i.length - 1], "right");
      if (t === "left")
        return Ns(i[0], "left");
    }
  }
  return e;
}, Ms = function(e, t) {
  if (!e)
    return null;
  t && (e = Ns(e, t));
  var n = e.classes[0];
  return Mp[n] || null;
}, ci = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return K(t.concat(n));
}, Ye = function(e, t, n) {
  if (!e)
    return K();
  if (oi[e.type]) {
    var i = oi[e.type](e, t);
    if (n && t.size !== n.size) {
      i = K(t.sizingClasses(n), [i], t);
      var a = t.sizeMultiplier / n.sizeMultiplier;
      i.height *= a, i.depth *= a;
    }
    return i;
  } else
    throw new Q("Got group of unknown type: '" + e.type + "'");
};
function Bi(r, e) {
  var t = K(["base"], r, e), n = K(["strut"]);
  return n.style.height = ne(t.height + t.depth), t.depth && (n.style.verticalAlign = ne(-t.depth)), t.children.unshift(n), t;
}
function Es(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = Et(r, e, "root"), i;
  n.length === 2 && n[1].hasClass("tag") && (i = n.pop());
  for (var a = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (a.push(Bi(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (a.push(Bi(s, e)), s = []), a.push(n[o]));
  s.length > 0 && a.push(Bi(s, e));
  var d;
  t ? (d = Bi(Et(t, e, !0), e), d.classes = ["tag"], a.push(d)) : i && a.push(i);
  var h = K(["katex-html"], a);
  if (h.setAttribute("aria-hidden", "true"), d) {
    var f = d.children[0];
    f.style.height = ne(h.height + h.depth), h.depth && (f.style.verticalAlign = ne(-h.depth));
  }
  return h;
}
function pd(r) {
  return new V0(r);
}
class ee {
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
    this.classes.length > 0 && (e.className = En(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof $t && this.children[n + 1] instanceof $t) {
        for (var i = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof $t; )
          i += this.children[++n].toText();
        e.appendChild(new $t(i).toNode());
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += Dt(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + Dt(En(this.classes)) + '"'), e += ">";
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
class $t {
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
    return Dt(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class md {
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
    return e.setAttribute("width", ne(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + ne(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var Ep = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), zp = /* @__PURE__ */ new Set(["mrow", "mtable"]), pr = function(e, t, n) {
  return mt[t][e] && mt[t][e].replace && e.charCodeAt(0) !== 55349 && !(od.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = mt[t][e].replace), new $t(e);
}, bo = function(e) {
  return e.length === 1 ? e[0] : new ee("mrow", e);
}, Rp = {
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
}, vo = (r, e) => {
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
  var n = r.mode, i = Rp[t];
  if (i)
    return typeof i == "function" ? i(r) : i;
  var a = r.text;
  if (Ep.has(a))
    return null;
  if (mt[n][a]) {
    var s = mt[n][a].replace;
    s && (a = s);
  }
  var o = Is[t].fontName;
  return po(a, o, n) ? Is[t].variant : null;
};
function Ua(r) {
  if (!r)
    return !1;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof $t && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof $t && t.text === ",";
  } else
    return !1;
}
var sr = function(e, t, n) {
  if (e.length === 1) {
    var i = st(e[0], t);
    return n && i instanceof ee && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
  }
  for (var a = [], s, o = 0; o < e.length; o++) {
    var l = st(e[o], t);
    if (l instanceof ee && s instanceof ee) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (Ua(l) && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && Ua(s))
        l.children = [...s.children, ...l.children], a.pop();
      else if ((l.type === "msup" || l.type === "msub") && l.children.length >= 1 && (s.type === "mn" || Ua(s))) {
        var d = l.children[0];
        d instanceof ee && d.type === "mn" && (d.children = [...s.children, ...d.children], a.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var h = s.children[0];
        if (h instanceof $t && h.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var f = l.children[0];
          f instanceof $t && f.text.length > 0 && (f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1), a.pop());
        }
      }
    }
    a.push(l), s = l;
  }
  return a;
}, On = function(e, t, n) {
  return bo(sr(e, t, n));
}, st = function(e, t) {
  if (!e)
    return new ee("mrow");
  if (li[e.type])
    return li[e.type](e, t);
  throw new Q("Got group of unknown type: '" + e.type + "'");
};
function ec(r, e, t, n, i) {
  var a = sr(r, t), s;
  a.length === 1 && a[0] instanceof ee && zp.has(a[0].type) ? s = a[0] : s = new ee("mrow", a);
  var o = new ee("annotation", [new $t(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new ee("semantics", [s, o]), d = new ee("math", [l]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var h = i ? "katex" : "katex-mathml";
  return K([h], [d]);
}
var Op = [
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
], tc = [
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
], rc = function(e, t) {
  return t.size < 2 ? e : Op[e - 1][t.size - 1];
};
class nn {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || nn.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = tc[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return Object.assign(t, e), new nn(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: rc(this.textSize, e)
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
      sizeMultiplier: tc[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = rc(nn.BASESIZE, e);
    return this.size === t && this.textSize === nn.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== nn.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + nn.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = vp(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
nn.BASESIZE = 6;
var gd = function(e) {
  return new nn({
    style: e.displayMode ? Re.DISPLAY : Re.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, bd = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = K(n, [e]);
  }
  return e;
}, Bp = function(e, t, n) {
  var i = gd(n), a;
  if (n.output === "mathml")
    return ec(e, t, i, n.displayMode, !0);
  if (n.output === "html") {
    var s = Es(e, i);
    a = K(["katex"], [s]);
  } else {
    var o = ec(e, t, i, n.displayMode, !1), l = Es(e, i);
    a = K(["katex"], [o, l]);
  }
  return bd(a, n);
}, Lp = function(e, t, n) {
  var i = gd(n), a = Es(e, i), s = K(["katex"], [a]);
  return bd(s, n);
}, Dp = {
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
}, ka = function(e) {
  var t = new ee("mo", [new $t(Dp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, Fp = {
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
}, Pp = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), Sa = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (Pp.has(l) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, h, f, m;
      if (d > 5)
        l === "widehat" || l === "widecheck" ? (h = 420, o = 2364, m = 0.42, f = l + "4") : (h = 312, o = 2340, m = 0.34, f = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][d];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], f = l + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], f = "tilde" + v);
      }
      var k = new zn(f), T = new un([k], {
        width: "100%",
        height: ne(m),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: Rn([], [T], t),
        minWidth: 0,
        height: m
      };
    } else {
      var I = [], z = Fp[l];
      if (!z)
        throw new Error('No SVG data for "' + l + '".');
      var [O, W, Y] = z, re = Y / 1e3, M = O.length, G, de;
      if (M === 1) {
        if (z.length !== 4)
          throw new Error('Expected 4-tuple for single-path SVG data "' + l + '".');
        G = ["hide-tail"], de = [z[3]];
      } else if (M === 2)
        G = ["halfarrow-left", "halfarrow-right"], de = ["xMinYMin", "xMaxYMin"];
      else if (M === 3)
        G = ["brace-left", "brace-center", "brace-right"], de = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + M + " children.");
      for (var ce = 0; ce < M; ce++) {
        var ie = new zn(O[ce]), Ne = new un([ie], {
          width: "400em",
          height: ne(re),
          viewBox: "0 0 " + o + " " + Y,
          preserveAspectRatio: de[ce] + " slice"
        }), ye = Rn([G[ce]], [Ne], t);
        if (M === 1)
          return {
            span: ye,
            minWidth: W,
            height: re
          };
        ye.style.height = ne(re), I.push(ye);
      }
      return {
        span: K(["stretchy"], I, t),
        minWidth: W,
        height: re
      };
    }
  }
  var {
    span: i,
    minWidth: a,
    height: s
  } = n();
  return i.height = s, i.style.height = ne(s), a > 0 && (i.style.minWidth = ne(a)), i;
}, Vp = function(e, t, n, i, a) {
  var s, o = e.height + e.depth + n + i;
  if (/fbox|color|angl/.test(t)) {
    if (s = K(["stretchy", t], [], a), t === "fbox") {
      var l = a.color && a.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new ks({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new ks({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new un(d, {
      width: "100%",
      height: ne(o)
    });
    s = Rn([], [h], a);
  }
  return s.height = o, s.style.height = ne(o), s;
}, Hp = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, qp = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
function Wp(r) {
  return r in Hp;
}
function De(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function _a(r) {
  var e = Ca(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function Ca(r) {
  return r && (r.type === "atom" || qp.hasOwnProperty(r.type)) ? r : null;
}
var vd = (r) => {
  if (r instanceof nr)
    return r;
  if (gp(r) && r.children.length === 1)
    return vd(r.children[0]);
}, wd = (r, e) => {
  var t, n, i;
  r && r.type === "supsub" ? (n = De(r.base, "accent"), t = n.base, r.base = t, i = mp(Ye(r, e)), r.base = n) : (n = De(r, "accent"), t = n.base);
  var a = Ye(t, e.havingCrampedStyle()), s = n.isShifty && hn(t), o = 0;
  if (s) {
    var l, d;
    o = (l = (d = vd(a)) == null ? void 0 : d.skew) != null ? l : 0;
  }
  var h = n.label === "\\c", f = h ? a.height + a.depth : Math.min(a.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = Sa(n, e), m = Je({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + ne(2 * o) + ")",
          marginLeft: ne(2 * o)
        } : void 0
      }]
    });
  else {
    var v, k;
    n.label === "\\vec" ? (v = dd("vec", e), k = ud.vec[1]) : (v = ya({
      type: "textord",
      mode: n.mode,
      text: n.label
    }, e), v = pp(v), v.italic = 0, k = v.width, h && (f += v.depth)), m = K(["accent-body"], [v]);
    var T = n.label === "\\textcircled";
    T && (m.classes.push("accent-full"), f = a.height);
    var I = o;
    T || (I -= k / 2), m.style.left = ne(I), n.label === "\\textcircled" && (m.style.top = ".2em"), m = Je({
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
  var z = K(["mord", "accent"], [m], e);
  return i ? (i.children[0] = z, i.height = Math.max(z.height, i.height), i.classes[0] = "mord", i) : z;
}, Up = (r, e) => {
  var t = r.isStretchy ? ka(r.label) : new ee("mo", [pr(r.label, r.mode)]), n = new ee("mover", [st(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, Gp = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
he({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  numArgs: 1,
  handler: (r, e) => {
    var t = la(e[0]), n = !Gp.test(r.funcName), i = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: i,
      base: t
    };
  },
  htmlBuilder: wd,
  mathmlBuilder: Up
});
he({
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
he({
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
    var t = Ye(r.base, e), n = Sa(r, e), i = r.label === "\\utilde" ? 0.12 : 0, a = Je({
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
    return K(["mord", "accentunder"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = ka(r.label), n = new ee("munder", [st(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Li = (r) => {
  var e = new ee("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
he({
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
    var t = e.style, n = e.havingStyle(t.sup()), i = B0(Ye(r.body, n, e), e), a = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(a + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = B0(Ye(r.below, n, e), e), s.classes.push(a + "-arrow-pad"));
    var o = Sa(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (i.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= i.depth);
    var h;
    if (s) {
      var f = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      h = Je({
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
      h = Je({
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
    return K(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(r, e) {
    var t = ka(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var i = Li(st(r.body, e));
      if (r.below) {
        var a = Li(st(r.below, e));
        n = new ee("munderover", [t, a, i]);
      } else
        n = new ee("mover", [t, i]);
    } else if (r.below) {
      var s = Li(st(r.below, e));
      n = new ee("munder", [t, s]);
    } else
      n = Li(), n = new ee("mover", [t, n]);
    return n;
  }
});
function jp(r, e) {
  var t = Et(r.body, e, !0);
  return K([r.mclass], t, e);
}
function Kp(r, e) {
  var t, n = sr(r.body, e);
  return r.mclass === "minner" ? t = new ee("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new ee("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new ee("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (r.mclass === "mopen" || r.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t;
}
he({
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
      body: At(i),
      isCharacterBox: hn(i)
    };
  },
  htmlBuilder: jp,
  mathmlBuilder: Kp
});
var Aa = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
he({
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
      mclass: Aa(e[0]),
      body: At(e[1]),
      isCharacterBox: hn(e[1])
    };
  }
});
he({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  numArgs: 2,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[1], a = e[0], s;
    n !== "\\stackrel" ? s = Aa(i) : s = "mrel";
    var o = {
      type: "op",
      mode: i.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: At(i)
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
      isCharacterBox: hn(l)
    };
  }
});
he({
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
      mclass: Aa(e[0]),
      body: At(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Et(r.body, e, !0), n = K([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = sr(r.body, e), n = new ee("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var Zp = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, nc = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display",
  resetFont: !0
}), ic = (r) => r.type === "textord" && r.text === "@", Xp = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Jp(r, e, t) {
  var n = Zp[r];
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
function Yp(r) {
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
      throw new Q("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], i = [n], a = 0; a < e.length; a++) {
    for (var s = e[a], o = nc(), l = 0; l < s.length; l++)
      if (!ic(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var d = _a(s[l]).text, h = new Array(2);
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
              if (Xp(s[v], d)) {
                m = !1, l = v;
                break;
              }
              if (ic(s[v]))
                throw new Q("Missing a " + d + " character to complete a CD arrow.", s[v]);
              h[f].body.push(s[v]);
            }
            if (m)
              throw new Q("Missing a " + d + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new Q('Expected one of "<>AV=|." after @', s[l]);
        var k = Jp(d, h, r), T = {
          type: "styling",
          body: [k],
          mode: "math",
          style: "display",
          // CD is always displaystyle.
          resetFont: !0
        };
        n.push(T), o = nc();
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
he({
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
    var t = e.havingStyle(e.style.sup()), n = B0(Ye(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = ne(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new ee("mrow", [st(r.label, e)]);
    return t = new ee("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new ee("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
he({
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
    var t = B0(Ye(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new ee("mrow", [st(r.fragment, e)]);
  }
});
he({
  type: "textord",
  names: ["\\@char"],
  numArgs: 1,
  allowedInText: !0,
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = De(e[0], "ordgroup"), i = n.body, a = "", s = 0; s < i.length; s++) {
      var o = De(i[s], "textord");
      a += o.text;
    }
    var l = parseInt(a), d;
    if (isNaN(l))
      throw new Q("\\@char has non-numeric argument " + a);
    if (l < 0 || l >= 1114111)
      throw new Q("\\@char with invalid code point " + a);
    return l <= 65535 ? d = String.fromCharCode(l) : (l -= 65536, d = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var Qp = (r, e) => {
  var t = Et(r.body, e.withColor(r.color), !1);
  return pn(t);
}, e4 = (r, e) => {
  var t = sr(r.body, e.withColor(r.color)), n = new ee("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
he({
  type: "color",
  names: ["\\textcolor"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "original"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = De(e[0], "color-token").color, i = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: At(i)
    };
  },
  htmlBuilder: Qp,
  mathmlBuilder: e4
});
he({
  type: "color",
  names: ["\\color"],
  numArgs: 1,
  allowedInText: !0,
  argTypes: ["color"],
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, i = De(e[0], "color-token").color;
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
he({
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
      size: i && De(i, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = K(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = ne(vt(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new ee("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", ne(vt(r.size, e)))), t;
  }
});
var zs = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, xd = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new Q("Expected a control sequence", r);
  return e;
}, t4 = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, yd = (r, e, t, n) => {
  var i = r.gullet.macros.get(t.text);
  i == null && (t.noexpand = !0, i = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, i, n);
};
he({
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
    if (zs[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = zs[n.text]), De(e.parseFunction(), "internal");
    throw new Q("Invalid token after macro prefix", n);
  }
});
he({
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
      throw new Q("Expected a control sequence", n);
    for (var a = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[a].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new Q('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== a + 1)
          throw new Q('Argument number "' + n.text + '" out of order');
        a++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new Q("Expected a macro definition");
        o[a].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(i, {
      tokens: l,
      numArgs: a,
      delimiters: o
    }, t === zs[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
he({
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
    } = r, n = xd(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var i = t4(e);
    return yd(e, n, i, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
he({
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
    } = r, n = xd(e.gullet.popToken()), i = e.gullet.popToken(), a = e.gullet.popToken();
    return yd(e, n, a, t === "\\\\globalfuture"), e.gullet.pushToken(a), e.gullet.pushToken(i), {
      type: "internal",
      mode: e.mode
    };
  }
});
var ei = function(e, t, n) {
  var i = mt.math[e] && mt.math[e].replace, a = po(i || e, t, n);
  if (!a)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return a;
}, wo = function(e, t, n, i) {
  var a = n.havingBaseStyle(t), s = K(i.concat(a.sizingClasses(n)), [e], n), o = a.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = a.sizeMultiplier, s;
}, kd = function(e, t, n) {
  var i = t.havingBaseStyle(n), a = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = ne(a), e.height -= a, e.depth += a;
}, r4 = function(e, t, n, i, a, s) {
  var o = Wt(e, "Main-Regular", a, i), l = wo(o, t, i, s);
  return kd(l, i, t), l;
}, n4 = function(e, t, n, i) {
  return Wt(e, "Size" + t + "-Regular", n, i);
}, Sd = function(e, t, n, i, a, s) {
  var o = n4(e, t, a, i), l = wo(K(["delimsizing", "size" + t], [o], i), Re.TEXT, i, s);
  return n && kd(l, i, Re.TEXT), l;
}, Ga = function(e, t, n) {
  var i;
  t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
  var a = K(["delimsizinginner", i], [K([], [Wt(e, t, n)])]);
  return {
    type: "elem",
    elem: a
  };
}, ja = function(e, t, n) {
  var i = Rr["Size4-Regular"][e.charCodeAt(0)] ? Rr["Size4-Regular"][e.charCodeAt(0)][4] : Rr["Size1-Regular"][e.charCodeAt(0)][4], a = new zn("inner", op(e, Math.round(1e3 * t))), s = new un([a], {
    width: ne(i),
    height: ne(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + ne(i),
    viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = Rn([], [s], n);
  return o.height = t, o.style.height = ne(t), o.style.width = ne(i), {
    type: "elem",
    elem: o
  };
}, Rs = 8e-3, Di = {
  type: "kern",
  size: -1 * Rs
}, i4 = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), a4 = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), _d = function(e, t, n, i, a, s) {
  var o, l, d, h, f = "", m = 0;
  o = d = h = e, l = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : i4.has(e) ? (d = "∣", f = "vert", m = 333) : a4.has(e) ? (d = "∥", f = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", v = "Size4-Regular", f = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", v = "Size4-Regular", f = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", v = "Size4-Regular", f = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", v = "Size4-Regular", f = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", v = "Size4-Regular", f = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", v = "Size4-Regular", f = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", v = "Size4-Regular", f = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", v = "Size4-Regular", f = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", v = "Size4-Regular");
  var k = ei(o, v, a), T = k.height + k.depth, I = ei(d, v, a), z = I.height + I.depth, O = ei(h, v, a), W = O.height + O.depth, Y = 0, re = 1;
  if (l !== null) {
    var M = ei(l, v, a);
    Y = M.height + M.depth, re = 2;
  }
  var G = T + W + Y, de = Math.max(0, Math.ceil((t - G) / (re * z))), ce = G + de * re * z, ie = i.fontMetrics().axisHeight;
  n && (ie *= i.sizeMultiplier);
  var Ne = ce / 2 - ie, ye = [];
  if (f.length > 0) {
    var H = ce - T - W, U = Math.round(ce * 1e3), oe = lp(f, Math.round(H * 1e3)), B = new zn(f, oe), j = ne(m / 1e3), E = ne(U / 1e3), te = new un([B], {
      width: j,
      height: E,
      viewBox: "0 0 " + m + " " + U
    }), Oe = Rn([], [te], i);
    Oe.height = U / 1e3, Oe.style.width = j, Oe.style.height = E, ye.push({
      type: "elem",
      elem: Oe
    });
  } else {
    if (ye.push(Ga(h, v, a)), ye.push(Di), l === null) {
      var Ve = ce - T - W + 2 * Rs;
      ye.push(ja(d, Ve, i));
    } else {
      var Be = (ce - T - W - Y) / 2 + 2 * Rs;
      ye.push(ja(d, Be, i)), ye.push(Di), ye.push(Ga(l, v, a)), ye.push(Di), ye.push(ja(d, Be, i));
    }
    ye.push(Di), ye.push(Ga(o, v, a));
  }
  var We = i.havingBaseStyle(Re.TEXT), qe = Je({
    positionType: "bottom",
    positionData: Ne,
    children: ye
  });
  return wo(K(["delimsizing", "mult"], [qe], We), Re.TEXT, i, s);
}, Ka = 80, Za = 0.08, Xa = function(e, t, n, i, a) {
  var s = sp(e, i, n), o = new zn(e, s), l = new un([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: ne(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return Rn(["hide-tail"], [l], a);
}, s4 = function(e, t) {
  var n = t.havingBaseSizing(), i = Td("\\surd", e * n.sizeMultiplier, Id, n), a = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l, d, h, f;
  return i.type === "small" ? (h = 1e3 + 1e3 * s + Ka, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), l = (1 + s + Za) / a, d = (1 + s) / a, o = Xa("sqrtMain", l, h, s, t), o.style.minWidth = "0.853em", f = 0.833 / a) : i.type === "large" ? (h = (1e3 + Ka) * ni[i.size], d = (ni[i.size] + s) / a, l = (ni[i.size] + s + Za) / a, o = Xa("sqrtSize" + i.size, l, h, s, t), o.style.minWidth = "1.02em", f = 1 / a) : (l = e + s + Za, d = e + s, h = Math.floor(1e3 * e + s) + Ka, o = Xa("sqrtTall", l, h, s, t), o.style.minWidth = "0.742em", f = 1.056), o.height = d, o.style.height = ne(l), {
    span: o,
    advanceWidth: f,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * a
  };
}, Cd = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), o4 = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), Ad = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), ni = [0, 1.2, 1.8, 2.4, 3], $d = function(e, t, n, i, a) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), Cd.has(e) || Ad.has(e))
    return Sd(e, t, !1, n, i, a);
  if (o4.has(e))
    return _d(e, ni[t], !1, n, i, a);
  throw new Q("Illegal delimiter: '" + e + "'");
}, l4 = [{
  type: "small",
  style: Re.SCRIPTSCRIPT
}, {
  type: "small",
  style: Re.SCRIPT
}, {
  type: "small",
  style: Re.TEXT
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
}], c4 = [{
  type: "small",
  style: Re.SCRIPTSCRIPT
}, {
  type: "small",
  style: Re.SCRIPT
}, {
  type: "small",
  style: Re.TEXT
}, {
  type: "stack"
}], Id = [{
  type: "small",
  style: Re.SCRIPTSCRIPT
}, {
  type: "small",
  style: Re.SCRIPT
}, {
  type: "small",
  style: Re.TEXT
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
}], u4 = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, Td = function(e, t, n, i) {
  for (var a = Math.min(2, 3 - i.style.size), s = a; s < n.length; s++) {
    var o = n[s];
    if (o.type === "stack")
      break;
    var l = ei(e, u4(o), "math"), d = l.height + l.depth;
    if (o.type === "small") {
      var h = i.havingBaseStyle(o.style);
      d *= h.sizeMultiplier;
    }
    if (d > t)
      return o;
  }
  return n[n.length - 1];
}, Os = function(e, t, n, i, a, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  Ad.has(e) ? o = l4 : Cd.has(e) ? o = Id : o = c4;
  var l = Td(e, t, o, i);
  return l.type === "small" ? r4(e, l.style, n, i, a, s) : l.type === "large" ? Sd(e, l.size, n, i, a, s) : _d(e, t, n, i, a, s);
}, Ja = function(e, t, n, i, a, s) {
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
  return Os(e, f, !0, i, a, s);
}, ac = {
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
}, d4 = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function sc(r) {
  return "isMiddle" in r;
}
function $a(r, e) {
  var t = Ca(r);
  if (t && d4.has(t.text))
    return t;
  throw t ? new Q("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new Q("Invalid delimiter type '" + r.type + "'", r);
}
he({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  numArgs: 1,
  argTypes: ["primitive"],
  handler: (r, e) => {
    var t = $a(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: ac[r.funcName].size,
      mclass: ac[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? K([r.mclass]) : $d(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(pr(r.delim, r.mode));
    var t = new ee("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = ne(ni[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function oc(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
he({
  type: "leftright-right",
  names: ["\\right"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new Q("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: $a(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
he({
  type: "leftright",
  names: ["\\left"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = $a(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var i = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var a = De(n.parseFunction(), "leftright-right");
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
    oc(r);
    for (var t = Et(r.body, e, !0, ["mopen", "mclose"]), n = 0, i = 0, a = !1, s = 0; s < t.length; s++) {
      var o = t[s];
      sc(o) ? a = !0 : (n = Math.max(t[s].height, n), i = Math.max(t[s].depth, i));
    }
    n *= e.sizeMultiplier, i *= e.sizeMultiplier;
    var l;
    if (r.left === "." ? l = ci(e, ["mopen"]) : l = Ja(r.left, n, i, e, r.mode, ["mopen"]), t.unshift(l), a)
      for (var d = 1; d < t.length; d++) {
        var h = t[d];
        if (sc(h)) {
          var f = h.isMiddle;
          t[d] = Ja(f.delim, n, i, f.options, r.mode, []);
        }
      }
    var m;
    if (r.right === ".")
      m = ci(e, ["mclose"]);
    else {
      var v = r.rightColor ? e.withColor(r.rightColor) : e;
      m = Ja(r.right, n, i, v, r.mode, ["mclose"]);
    }
    return t.push(m), K(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    oc(r);
    var t = sr(r.body, e);
    if (r.left !== ".") {
      var n = new ee("mo", [pr(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var i = new ee("mo", [pr(r.right, r.mode)]);
      i.setAttribute("fence", "true"), r.rightColor && i.setAttribute("mathcolor", r.rightColor), t.push(i);
    }
    return bo(t);
  }
});
he({
  type: "middle",
  names: ["\\middle"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = $a(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new Q("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    return r.delim === "." ? t = ci(e, []) : (t = $d(r.delim, 1, e, r.mode, []), t.isMiddle = {
      delim: r.delim,
      options: e
    }), t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? pr("|", "text") : pr(r.delim, r.mode), n = new ee("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var h4 = (r, e) => {
  var t = B0(Ye(r.body, e), e), n = r.label.slice(1), i = e.sizeMultiplier, a, s, o = hn(r.body);
  if (n === "sout")
    a = K(["stretchy", "sout"]), a.height = e.fontMetrics().defaultRuleThickness / i, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = vt({
      number: 0.6,
      unit: "pt"
    }, e), d = vt({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    i = i / h.sizeMultiplier;
    var f = t.height + t.depth + l + d;
    t.style.paddingLeft = ne(f / 2 + l);
    var m = Math.floor(1e3 * f * i), v = ip(m), k = new un([new zn("phase", v)], {
      width: "400em",
      height: ne(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    a = Rn(["hide-tail"], [k], e), a.style.height = ne(f), s = t.depth + l + d;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var T, I, z = 0;
    /box/.test(n) ? (z = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
    ), T = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : z), I = T) : n === "angl" ? (z = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), T = 4 * z, I = Math.max(0, 0.25 - t.depth)) : (T = o ? 0.2 : 0, I = T), a = Vp(t, n, T, I, e), /fbox|boxed|fcolorbox/.test(n) ? (a.style.borderStyle = "solid", a.style.borderWidth = ne(z)) : n === "angl" && z !== 0.049 && (a.style.borderTopWidth = ne(z), a.style.borderRightWidth = ne(z)), s = t.depth + I, r.backgroundColor && (a.style.backgroundColor = r.backgroundColor, r.borderColor && (a.style.borderColor = r.borderColor));
  }
  var O;
  if (r.backgroundColor)
    O = Je({
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
    O = Je({
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
  return /cancel/.test(n) && (O.height = t.height, O.depth = t.depth), /cancel/.test(n) && !o ? K(["mord", "cancel-lap"], [O], e) : K(["mord"], [O], e);
}, f4 = (r, e) => {
  var t, n = new ee(r.label.includes("colorbox") ? "mpadded" : "menclose", [st(r.body, e)]);
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
        n.setAttribute("style", "border: " + ne(i) + " solid " + r.borderColor);
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
he({
  type: "enclose",
  names: ["\\colorbox"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "hbox"],
  handler(r, e, t) {
    var {
      parser: n,
      funcName: i
    } = r, a = De(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: i,
      backgroundColor: a,
      body: s
    };
  },
  htmlBuilder: h4,
  mathmlBuilder: f4
});
he({
  type: "enclose",
  names: ["\\fcolorbox"],
  numArgs: 3,
  allowedInText: !0,
  argTypes: ["color", "color", "hbox"],
  handler(r, e, t) {
    var {
      parser: n,
      funcName: i
    } = r, a = De(e[0], "color-token").color, s = De(e[1], "color-token").color, o = e[2];
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
he({
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
he({
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
he({
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
he({
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
var Nd = {};
function Lr(r) {
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
    Nd[t[l]] = o;
  a && (oi[e] = a), s && (li[e] = s);
}
var Md = {};
function g(r, e) {
  Md[r] = e;
}
class Jt {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Jt(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class rr {
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new rr(t, Jt.range(this, e));
  }
}
function lc(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var Ia = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new Q("{" + r.envName + "} can be used only in display mode.");
}, p4 = /* @__PURE__ */ new Set(["gather", "gather*"]);
function xo(r) {
  if (!r.includes("ed"))
    return !r.includes("*");
}
function Dn(r, e, t) {
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
      throw new Q("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var k = [], T = [k], I = [], z = [], O = l != null ? [] : void 0;
  function W() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function Y() {
    O && (r.gullet.macros.get("\\df@tag") ? (O.push(r.subparse([new rr("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : O.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (W(), z.push(lc(r)); ; ) {
    var re = r.parseExpression(!1, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup();
    var M = {
      type: "ordgroup",
      mode: r.mode,
      body: re
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
          throw new Q("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (G === "\\end") {
      Y(), k.length === 1 && M.type === "styling" && M.body.length === 1 && M.body[0].type === "ordgroup" && M.body[0].body.length === 0 && (T.length > 1 || !h) && T.pop(), z.length < T.length + 1 && z.push([]);
      break;
    } else if (G === "\\\\") {
      r.consume();
      var de = void 0;
      r.gullet.future().text !== " " && (de = r.parseSizeGroup(!0)), I.push(de ? de.value : null), Y(), z.push(lc(r)), k = [], T.push(k), W();
    } else
      throw new Q("Expected & or \\\\ or \\cr or \\end", r.nextToken);
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
    hLinesBeforeRow: z,
    colSeparationType: o,
    tags: O,
    leqno: m
  };
}
function yo(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var Dr = function(e, t) {
  var n, i, a = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(a), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
  ), f = 1 / t.fontMetrics().ptPerEm, m = 5 * f;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(Re.SCRIPT).sizeMultiplier;
    m = 0.2778 * (v / t.sizeMultiplier);
  }
  var k = e.colSeparationType === "CD" ? vt({
    number: 3,
    unit: "ex"
  }, t) : 12 * f, T = 3 * f, I = e.arraystretch * k, z = 0.7 * I, O = 0.3 * I, W = 0;
  function Y(Rt) {
    for (var Ir = 0; Ir < Rt.length; ++Ir)
      Ir > 0 && (W += 0.25), d.push({
        pos: W,
        isDashed: Rt[Ir]
      });
  }
  for (Y(s[0]), n = 0; n < e.body.length; ++n) {
    var re = e.body[n], M = z, G = O;
    o < re.length && (o = re.length);
    var de = {
      cells: new Array(re.length),
      height: 0,
      depth: 0,
      pos: 0
    };
    for (i = 0; i < re.length; ++i) {
      var ce = Ye(re[i], t);
      G < ce.depth && (G = ce.depth), M < ce.height && (M = ce.height), de.cells[i] = ce;
    }
    var ie = e.rowGaps[n], Ne = 0;
    ie && (Ne = vt(ie, t), Ne > 0 && (Ne += O, G < Ne && (G = Ne), Ne = 0)), e.addJot && n < e.body.length - 1 && (G += T), de.height = M, de.depth = G, W += M, de.pos = W, W += G + Ne, l[n] = de, Y(s[n + 1]);
  }
  var ye = W / 2 + t.fontMetrics().axisHeight, H = e.cols || [], U = [], oe, B, j = [];
  if (e.tags && e.tags.some((Rt) => Rt))
    for (n = 0; n < a; ++n) {
      var E = l[n], te = E.pos - ye, Oe = e.tags[n], Ve = void 0;
      Oe === !0 ? Ve = K(["eqn-num"], [], t) : Oe === !1 ? Ve = K([], [], t) : Ve = K([], Et(Oe, t, !0), t), Ve.depth = E.depth, Ve.height = E.height, j.push({
        type: "elem",
        elem: Ve,
        shift: te
      });
    }
  for (
    i = 0, B = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    i < o || B < H.length;
    ++i, ++B
  ) {
    for (var Be, We = H[B], qe = !0; ((or = We) == null ? void 0 : or.type) === "separator"; ) {
      var or;
      if (qe || (oe = K(["arraycolsep"], []), oe.style.width = ne(t.fontMetrics().doubleRuleSep), U.push(oe)), We.separator === "|" || We.separator === ":") {
        var lr = We.separator === "|" ? "solid" : "dashed", we = K(["vertical-separator"], [], t);
        we.style.height = ne(W), we.style.borderRightWidth = ne(h), we.style.borderRightStyle = lr, we.style.margin = "0 " + ne(-h / 2);
        var Le = W - ye;
        Le && (we.style.verticalAlign = ne(-Le)), U.push(we);
      } else
        throw new Q("Invalid separator type: " + We.separator);
      B++, We = H[B], qe = !1;
    }
    if (!(i >= o)) {
      var ft = void 0;
      if (i > 0 || e.hskipBeforeAndAfter) {
        var me, cr;
        ft = (me = (cr = We) == null ? void 0 : cr.pregap) != null ? me : m, ft !== 0 && (oe = K(["arraycolsep"], []), oe.style.width = ne(ft), U.push(oe));
      }
      var Ke = [];
      for (n = 0; n < a; ++n) {
        var wt = l[n], mr = wt.cells[i];
        if (mr) {
          var mn = wt.pos - ye;
          mr.depth = wt.depth, mr.height = wt.height, Ke.push({
            type: "elem",
            elem: mr,
            shift: mn
          });
        }
      }
      var Tt = Je({
        positionType: "individualShift",
        children: Ke
      }), Pr = K(["col-align-" + (((Be = We) == null ? void 0 : Be.align) || "c")], [Tt]);
      if (U.push(Pr), i < o - 1 || e.hskipBeforeAndAfter) {
        var Vr, gn;
        ft = (Vr = (gn = We) == null ? void 0 : gn.postgap) != null ? Vr : m, ft !== 0 && (oe = K(["arraycolsep"], []), oe.style.width = ne(ft), U.push(oe));
      }
    }
  }
  var Qt = K(["mtable"], U);
  if (d.length > 0) {
    for (var Hr = O0("hline", t, h), Ar = O0("hdashline", t, h), $r = [{
      type: "elem",
      elem: Qt,
      shift: 0
    }]; d.length > 0; ) {
      var Ft = d.pop(), qr = Ft.pos - ye;
      Ft.isDashed ? $r.push({
        type: "elem",
        elem: Ar,
        shift: qr
      }) : $r.push({
        type: "elem",
        elem: Hr,
        shift: qr
      });
    }
    Qt = Je({
      positionType: "individualShift",
      children: $r
    });
  }
  if (j.length === 0)
    return K(["mord"], [Qt], t);
  var Pt = Je({
    positionType: "individualShift",
    children: j
  }), jt = K(["tag"], [Pt], t);
  return pn([Qt, jt]);
}, m4 = {
  c: "center ",
  l: "left ",
  r: "right "
}, Fr = function(e, t) {
  for (var n = [], i = new ee("mtd", [], ["mtr-glue"]), a = new ee("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], d = 0; d < o.length; d++)
      l.push(new ee("mtd", [st(o[d], t)]));
    e.tags && e.tags[s] && (l.unshift(i), l.push(i), e.leqno ? l.unshift(a) : l.push(a)), n.push(new ee("mtr", l));
  }
  var h = new ee("mtable", n), f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", ne(f));
  var m = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var k = e.cols, T = "", I = !1, z = 0, O = k.length;
    k[0].type === "separator" && (m += "top ", z = 1), k[k.length - 1].type === "separator" && (m += "bottom ", O -= 1);
    for (var W = z; W < O; W++) {
      var Y = k[W];
      Y.type === "align" ? (v += m4[Y.align], I && (T += "none "), I = !0) : Y.type === "separator" && I && (T += Y.separator === "|" ? "solid " : "dashed ", I = !1);
    }
    h.setAttribute("columnalign", v.trim()), /[sd]/.test(T) && h.setAttribute("columnlines", T.trim());
  }
  if (e.colSeparationType === "align") {
    for (var re = e.cols || [], M = "", G = 1; G < re.length; G++)
      M += G % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", M.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var de = "", ce = e.hLinesBeforeRow;
  m += ce[0].length > 0 ? "left " : "", m += ce[ce.length - 1].length > 0 ? "right " : "";
  for (var ie = 1; ie < ce.length - 1; ie++)
    de += ce[ie].length === 0 ? "none " : ce[ie][0] ? "dashed " : "solid ";
  return /[sd]/.test(de) && h.setAttribute("rowlines", de.trim()), m !== "" && (h = new ee("menclose", [h]), h.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (h = new ee("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, Ed = function(e, t) {
  e.envName.includes("ed") || Ia(e);
  var n = [], i = e.envName === "split", a = Dn(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : xo(e.envName),
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
      var f = De(t[0].body[h], "textord");
      d += f.text;
    }
    s = Number(d), o = s * 2;
  }
  var m = !o;
  a.body.forEach(function(I) {
    for (var z = 1; z < I.length; z += 2) {
      var O = De(I[z], "styling"), W = De(O.body[0], "ordgroup");
      W.body.unshift(l);
    }
    if (m)
      o < I.length && (o = I.length);
    else {
      var Y = I.length / 2;
      if (s < Y)
        throw new Q("Too many math in a row: " + ("expected " + s + ", but got " + Y), I[0]);
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
Lr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ca(e[0]), n = t ? [e[0]] : De(e[0], "ordgroup").body, i = n.map(function(s) {
      var o = _a(s), l = o.text;
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
      throw new Q("Unknown column alignment: " + l, s);
    }), a = {
      cols: i,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return Dn(r.parser, a, yo(r.envName));
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
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
          throw new Q("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var a = Dn(r.parser, n, yo(r.envName)), s = Math.max(0, ...a.body.map((o) => o.length));
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
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = Dn(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = Ca(e[0]), n = t ? [e[0]] : De(e[0], "ordgroup").body, i = n.map(function(o) {
      var l = _a(o), d = l.text;
      if ("lc".includes(d))
        return {
          type: "align",
          align: d
        };
      throw new Q("Unknown column alignment: " + d, o);
    });
    if (i.length > 1)
      throw new Q("{subarray} can contain only one column");
    var a = {
      cols: i,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    }, s = Dn(r.parser, a, "script");
    if (s.body.length > 0 && s.body[0].length > 1)
      throw new Q("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
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
    }, t = Dn(r.parser, e, yo(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.includes("r") ? "." : "\\{",
      right: r.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: Ed,
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    p4.has(r.envName) && Ia(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: xo(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return Dn(r.parser, e, "display");
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: Ed,
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Ia(r);
    var e = {
      autoTag: xo(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return Dn(r.parser, e, "display");
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
Lr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return Ia(r), Yp(r.parser);
  },
  htmlBuilder: Dr,
  mathmlBuilder: Fr
});
g("\\nonumber", "\\gdef\\@eqnsw{0}");
g("\\notag", "\\nonumber");
he({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !0,
  handler(r, e) {
    throw new Q(r.funcName + " valid only within array environment");
  }
});
var cc = Nd;
he({
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
      throw new Q("Invalid environment name", i);
    for (var a = "", s = 0; s < i.body.length; ++s)
      a += De(i.body[s], "textord").text;
    if (n === "\\begin") {
      if (!cc.hasOwnProperty(a))
        throw new Q("No such environment: " + a, i);
      var o = cc[a], {
        args: l,
        optArgs: d
      } = t.parseArguments("\\begin{" + a + "}", o), h = {
        mode: t.mode,
        envName: a,
        parser: t
      }, f = o.handler(h, l, d);
      t.expect("\\end", !1);
      var m = t.nextToken, v = De(t.parseFunction(), "environment");
      if (v.name !== a)
        throw new Q("Mismatch: \\begin{" + a + "} matched by \\end{" + v.name + "}", m);
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
var g4 = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return Ye(r.body, n);
}, b4 = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return st(r.body, n);
}, uc = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak"
};
he({
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
    } = r, i = la(e[0]), a = n in uc ? uc[n] : n;
    return {
      type: "font",
      mode: t.mode,
      font: a.slice(1),
      body: i
    };
  },
  htmlBuilder: g4,
  mathmlBuilder: b4
});
he({
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
      mclass: Aa(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: hn(n)
    };
  }
});
he({
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
var v4 = (r, e) => {
  var t = e.style, n = t.fracNum(), i = t.fracDen(), a;
  a = e.havingStyle(n);
  var s = Ye(r.numer, a, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  a = e.havingStyle(i);
  var d = Ye(r.denom, a, e), h, f, m;
  r.hasBarLine ? (r.barSize ? (f = vt(r.barSize, e), h = O0("frac-line", e, f)) : h = O0("frac-line", e), f = h.height, m = h.height) : (h = null, f = 0, m = e.fontMetrics().defaultRuleThickness);
  var v, k, T;
  t.size === Re.DISPLAY.size ? (v = e.fontMetrics().num1, f > 0 ? k = 3 * m : k = 7 * m, T = e.fontMetrics().denom1) : (f > 0 ? (v = e.fontMetrics().num2, k = m) : (v = e.fontMetrics().num3, k = 3 * m), T = e.fontMetrics().denom2);
  var I;
  if (h) {
    var O = e.fontMetrics().axisHeight;
    v - s.depth - (O + 0.5 * f) < k && (v += k - (v - s.depth - (O + 0.5 * f))), O - 0.5 * f - (d.height - T) < k && (T += k - (O - 0.5 * f - (d.height - T)));
    var W = -(O - 0.5 * f);
    I = Je({
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
    var z = v - s.depth - (d.height - T);
    z < k && (v += 0.5 * (k - z), T += 0.5 * (k - z)), I = Je({
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
  t.size === Re.DISPLAY.size ? Y = e.fontMetrics().delim1 : t.size === Re.SCRIPTSCRIPT.size ? Y = e.havingStyle(Re.SCRIPT).fontMetrics().delim2 : Y = e.fontMetrics().delim2;
  var re, M;
  return r.leftDelim == null ? re = ci(e, ["mopen"]) : re = Os(r.leftDelim, Y, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? M = K([]) : r.rightDelim == null ? M = ci(e, ["mclose"]) : M = Os(r.rightDelim, Y, !0, e.havingStyle(t), r.mode, ["mclose"]), K(["mord"].concat(a.sizingClasses(e)), [re, K(["mfrac"], [I]), M], e);
}, w4 = (r, e) => {
  var t = new ee("mfrac", [st(r.numer, e), st(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = vt(r.barSize, e);
    t.setAttribute("linethickness", ne(n));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var i = [];
    if (r.leftDelim != null) {
      var a = new ee("mo", [new $t(r.leftDelim.replace("\\", ""))]);
      a.setAttribute("fence", "true"), i.push(a);
    }
    if (i.push(t), r.rightDelim != null) {
      var s = new ee("mo", [new $t(r.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), i.push(s);
    }
    return bo(i);
  }
  return t;
}, zd = (r, e) => {
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
he({
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
    return d || n.startsWith("\\d") ? h = "display" : n.startsWith("\\t") && (h = "text"), zd({
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
  htmlBuilder: v4,
  mathmlBuilder: w4
});
he({
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
var dc = ["display", "text", "script", "scriptscript"], hc = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
he({
  type: "genfrac",
  names: ["\\genfrac"],
  numArgs: 6,
  allowedInArgument: !0,
  argTypes: ["math", "math", "size", "text", "math", "math"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], i = e[5], a = la(e[0]), s = a.type === "atom" && a.family === "open" ? hc(a.text) : null, o = la(e[1]), l = o.type === "atom" && o.family === "close" ? hc(o.text) : null, d = De(e[2], "size"), h, f = null;
    d.isBlank ? h = !0 : (f = d.value, h = f.number > 0);
    var m = null, v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var k = De(v.body[0], "textord");
        m = dc[Number(k.text)];
      }
    } else
      v = De(v, "textord"), m = dc[Number(v.text)];
    return zd({
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
he({
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
      size: De(e[0], "size").value,
      token: i
    };
  }
});
he({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  numArgs: 3,
  argTypes: ["math", "size", "math"],
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = e[0], a = De(e[1], "infix").size;
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
var Rd = (r, e) => {
  var t = e.style, n, i;
  r.type === "supsub" ? (n = r.sup ? Ye(r.sup, e.havingStyle(t.sup()), e) : Ye(r.sub, e.havingStyle(t.sub()), e), i = De(r.base, "horizBrace")) : i = De(r, "horizBrace");
  var a = Ye(i.base, e.havingBaseStyle(Re.DISPLAY)), s = Sa(i, e), o;
  if (i.isOver ? o = Je({
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
  }) : o = Je({
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
    var l = K(["minner", i.isOver ? "mover" : "munder"], [o], e);
    i.isOver ? o = Je({
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
    }) : o = Je({
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
  return K(["minner", i.isOver ? "mover" : "munder"], [o], e);
}, x4 = (r, e) => {
  var t = ka(r.label);
  return new ee(r.isOver ? "mover" : "munder", [st(r.base, e), t]);
};
he({
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
  htmlBuilder: Rd,
  mathmlBuilder: x4
});
he({
  type: "href",
  names: ["\\href"],
  numArgs: 2,
  argTypes: ["url", "original"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], i = De(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: i
    }) ? {
      type: "href",
      mode: t.mode,
      href: i,
      body: At(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = Et(r.body, e, !1);
    return _p(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = On(r.body, e);
    return t instanceof ee || (t = new ee("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
he({
  type: "href",
  names: ["\\url"],
  numArgs: 1,
  argTypes: ["url"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = De(e[0], "url").url;
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
      body: At(o)
    };
  }
});
he({
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
      body: At(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Et(r.body, e.withFont(""), !1);
    return pn(t);
  },
  mathmlBuilder(r, e) {
    return new ee("mrow", sr(r.body, e.withFont("")));
  }
});
he({
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
    } = r, a = De(e[0], "raw").string, s = e[1];
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
            throw new Q("\\htmlData key/value '" + f + "' missing equals sign");
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
      body: At(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = Et(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var i = K(n, t, e);
    for (var a in r.attributes)
      a !== "class" && r.attributes.hasOwnProperty(a) && i.setAttribute(a, r.attributes[a]);
    return i;
  },
  mathmlBuilder: (r, e) => On(r.body, e)
});
he({
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
      html: At(e[0]),
      mathml: At(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Et(r.html, e, !1);
    return pn(t);
  },
  mathmlBuilder: (r, e) => On(r.mathml, e)
});
var Ya = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new Q("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!nd(n))
    throw new Q("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
he({
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
      for (var l = De(t[0], "raw").string, d = l.split(","), h = 0; h < d.length; h++) {
        var f = d[h].split("=");
        if (f.length === 2) {
          var m = f[1].trim();
          switch (f[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              i = Ya(m);
              break;
            case "height":
              a = Ya(m);
              break;
            case "totalheight":
              s = Ya(m);
              break;
            default:
              throw new Q("Invalid key: '" + f[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = De(e[0], "url").url;
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
    var t = vt(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = vt(r.totalheight, e) - t);
    var i = 0;
    r.width.number > 0 && (i = vt(r.width, e));
    var a = {
      height: ne(t + n)
    };
    i > 0 && (a.width = ne(i)), n > 0 && (a.verticalAlign = ne(-n));
    var s = new hp(r.src, r.alt, a);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new ee("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = vt(r.height, e), i = 0;
    if (r.totalheight.number > 0 && (i = vt(r.totalheight, e) - n, t.setAttribute("valign", ne(-i))), t.setAttribute("height", ne(n + i)), r.width.number > 0) {
      var a = vt(r.width, e);
      t.setAttribute("width", ne(a));
    }
    return t.setAttribute("src", r.src), t;
  }
});
he({
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
    } = r, i = De(e[0], "size");
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
    return cd(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = vt(r.dimension, e);
    return new md(t);
  }
});
he({
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
    r.alignment === "clap" ? (t = K([], [Ye(r.body, e)]), t = K(["inner"], [t], e)) : t = K(["inner"], [Ye(r.body, e)]);
    var n = K(["fix"], []), i = K([r.alignment], [t, n], e), a = K(["strut"]);
    return a.style.height = ne(i.height + i.depth), i.depth && (a.style.verticalAlign = ne(-i.depth)), i.children.unshift(a), i = K(["thinbox"], [i], e), K(["mord", "vbox"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new ee("mpadded", [st(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
he({
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
he({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(r, e) {
    throw new Q("Mismatched " + r.funcName);
  }
});
var fc = (r, e) => {
  switch (e.style.size) {
    case Re.DISPLAY.size:
      return r.display;
    case Re.TEXT.size:
      return r.text;
    case Re.SCRIPT.size:
      return r.script;
    case Re.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
he({
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
      display: At(e[0]),
      text: At(e[1]),
      script: At(e[2]),
      scriptscript: At(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = fc(r, e), n = Et(t, e, !1);
    return pn(n);
  },
  mathmlBuilder: (r, e) => {
    var t = fc(r, e);
    return On(t, e);
  }
});
var Od = (r, e, t, n, i, a, s) => {
  r = K([], [r]);
  var o = t && hn(t), l, d;
  if (e) {
    var h = Ye(e, n.havingStyle(i.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var f = Ye(t, n.havingStyle(i.sub()), n);
    l = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height)
    };
  }
  var m;
  if (d && l) {
    var v = n.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + r.depth + s;
    m = Je({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: ne(-a)
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
        marginLeft: ne(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else if (l) {
    var k = r.height - s;
    m = Je({
      positionType: "top",
      positionData: k,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: ne(-a)
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
    m = Je({
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
        marginLeft: ne(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else
    return r;
  var I = [m];
  if (l && a !== 0 && !o) {
    var z = K(["mspace"], [], n);
    z.style.marginRight = ne(a), I.unshift(z);
  }
  return K(["mop", "op-limits"], I, n);
}, Bd = /* @__PURE__ */ new Set(["\\smallint"]), Ld = (r, e) => {
  var t, n, i = !1, a;
  r.type === "supsub" ? (t = r.sup, n = r.sub, a = De(r.base, "op"), i = !0) : a = De(r, "op");
  var s = e.style, o = !1;
  s.size === Re.DISPLAY.size && a.symbol && !Bd.has(a.name) && (o = !0);
  var l, d;
  if (a.symbol) {
    var h = o ? "Size2-Regular" : "Size1-Regular", f = "";
    if ((a.name === "\\oiint" || a.name === "\\oiiint") && (f = a.name.slice(1), a.name = f === "oiint" ? "\\iint" : "\\iiint"), l = Wt(a.name, h, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), d = l.italic, f.length > 0) {
      var m = dd(f + "Size" + (o ? "2" : "1"), e);
      l = Je({
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
    var v = Et(a.body, e, !0);
    v.length === 1 && v[0] instanceof nr ? (l = v[0], l.classes[0] = "mop") : l = K(["mop"], v, e);
  } else {
    for (var k = [], T = 1; T < a.name.length; T++)
      k.push(mo(a.name[T], a.mode, e));
    l = K(["mop"], k, e);
  }
  var I = 0, z = 0;
  if ((l instanceof nr || a.name === "\\oiint" || a.name === "\\oiiint") && !a.suppressBaseShift) {
    var O;
    I = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, z = (O = l.italic) != null ? O : 0;
  }
  return i ? Od(l, t, n, e, s, z, I) : (I && (l.style.position = "relative", l.style.top = ne(I)), l);
}, y4 = (r, e) => {
  var t;
  if (r.symbol)
    t = new ee("mo", [pr(r.name, r.mode)]), Bd.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new ee("mo", sr(r.body, e));
  else {
    t = new ee("mi", [new $t(r.name.slice(1))]);
    var n = new ee("mo", [pr("⁡", "text")]);
    r.parentIsSupSub ? t = new ee("mrow", [t, n]) : t = pd([t, n]);
  }
  return t;
}, k4 = {
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
he({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  numArgs: 0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = n;
    return i.length === 1 && (i = k4[i]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: Ld,
  mathmlBuilder: y4
});
he({
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
      body: At(n)
    };
  }
});
var S4 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
he({
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
he({
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
he({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  numArgs: 0,
  allowedInArgument: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = S4[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  }
});
var Dd = (r, e) => {
  var t, n, i = !1, a;
  r.type === "supsub" ? (t = r.sup, n = r.sub, a = De(r.base, "operatorname"), i = !0) : a = De(r, "operatorname");
  var s;
  if (a.body.length > 0) {
    for (var o = a.body.map((f) => {
      var m = "text" in f ? f.text : void 0;
      return typeof m == "string" ? {
        type: "textord",
        mode: f.mode,
        text: m
      } : f;
    }), l = Et(o, e.withFont("mathrm"), !0), d = 0; d < l.length; d++) {
      var h = l[d];
      h instanceof nr && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = K(["mop"], l, e);
  } else
    s = K(["mop"], [], e);
  return i ? Od(s, t, n, e, e.style, 0, 0) : s;
}, _4 = (r, e) => {
  for (var t = sr(r.body, e.withFont("mathrm")), n = !0, i = 0; i < t.length; i++) {
    var a = t[i];
    if (!(a instanceof md)) if (a instanceof ee)
      switch (a.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var s = a.children[0];
          a.children.length === 1 && s instanceof $t ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
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
    t = [new $t(o)];
  }
  var l = new ee("mi", t);
  l.setAttribute("mathvariant", "normal");
  var d = new ee("mo", [pr("⁡", "text")]);
  return r.parentIsSupSub ? new ee("mrow", [l, d]) : pd([l, d]);
};
he({
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
      body: At(i),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: Dd,
  mathmlBuilder: _4
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
o0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? pn(Et(r.body, e, !1)) : K(["mord"], Et(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return On(r.body, e, !0);
  }
});
he({
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
    var t = Ye(r.body, e.havingCrampedStyle()), n = O0("overline-line", e), i = e.fontMetrics().defaultRuleThickness, a = Je({
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
    return K(["mord", "overline"], [a], e);
  },
  mathmlBuilder(r, e) {
    var t = new ee("mo", [new $t("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new ee("mover", [st(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
he({
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
      body: At(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = Et(r.body, e.withPhantom(), !1);
    return pn(t);
  },
  mathmlBuilder: (r, e) => {
    var t = sr(r.body, e);
    return new ee("mphantom", t);
  }
});
g("\\hphantom", "\\smash{\\phantom{#1}}");
he({
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
    var t = K(["inner"], [Ye(r.body, e.withPhantom())]), n = K(["fix"], []);
    return K(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = sr(At(r.body), e), n = new ee("mphantom", t), i = new ee("mpadded", [n]);
    return i.setAttribute("width", "0px"), i;
  }
});
he({
  type: "raisebox",
  names: ["\\raisebox"],
  numArgs: 2,
  argTypes: ["size", "hbox"],
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t
    } = r, n = De(e[0], "size").value, i = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: i
    };
  },
  htmlBuilder(r, e) {
    var t = Ye(r.body, e), n = vt(r.dy, e);
    return Je({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new ee("mpadded", [st(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
he({
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
he({
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
    } = r, i = t[0], a = De(e[0], "size"), s = De(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: i && De(i, "size").value,
      width: a.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = K(["mord", "rule"], [], e), n = vt(r.width, e), i = vt(r.height, e), a = r.shift ? vt(r.shift, e) : 0;
    return t.style.borderRightWidth = ne(n), t.style.borderTopWidth = ne(i), t.style.bottom = ne(a), t.width = n, t.height = i + a, t.depth = -a, t.maxFontSize = i * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = vt(r.width, e), n = vt(r.height, e), i = r.shift ? vt(r.shift, e) : 0, a = e.color && e.getColor() || "black", s = new ee("mspace");
    s.setAttribute("mathbackground", a), s.setAttribute("width", ne(t)), s.setAttribute("height", ne(n));
    var o = new ee("mpadded", [s]);
    return i >= 0 ? o.setAttribute("height", ne(i)) : (o.setAttribute("height", ne(i)), o.setAttribute("depth", ne(-i))), o.setAttribute("voffset", ne(i)), o;
  }
});
function Fd(r, e, t) {
  for (var n = Et(r, e, !1), i = e.sizeMultiplier / t.sizeMultiplier, a = 0; a < n.length; a++) {
    var s = n[a].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[a].classes, e.sizingClasses(t)) : n[a].classes[s + 1] === "reset-size" + e.size && (n[a].classes[s + 1] = "reset-size" + t.size), n[a].height *= i, n[a].depth *= i;
  }
  return pn(n);
}
var pc = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], C4 = (r, e) => {
  var t = e.havingSize(r.size);
  return Fd(r.body, t, e);
};
he({
  type: "sizing",
  names: pc,
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
      size: pc.indexOf(n) + 1,
      body: a
    };
  },
  htmlBuilder: C4,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = sr(r.body, t), i = new ee("mstyle", n);
    return i.setAttribute("mathsize", ne(t.sizeMultiplier)), i;
  }
});
he({
  type: "smash",
  names: ["\\smash"],
  numArgs: 1,
  numOptionalArgs: 1,
  allowedInText: !0,
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, i = !1, a = !1, s = t[0] && De(t[0], "ordgroup");
    if (s)
      for (var o, l = 0; l < s.body.length; ++l) {
        var d = s.body[l];
        if (o = _a(d).text, o === "t")
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
    var t = K([], [Ye(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth)
      return K(["mord", "smash"], [t], e);
    if (t.children)
      for (var n = 0; n < t.children.length; n++)
        r.smashHeight && (t.children[n].height = 0), r.smashDepth && (t.children[n].depth = 0);
    var i = Je({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    });
    return K(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new ee("mpadded", [st(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
he({
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
    var t = Ye(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = B0(t, e);
    var n = e.fontMetrics(), i = n.defaultRuleThickness, a = i;
    e.style.id < Re.TEXT.id && (a = e.fontMetrics().xHeight);
    var s = i + a / 4, o = t.height + t.depth + s + i, {
      span: l,
      ruleWidth: d,
      advanceWidth: h
    } = s4(o, e), f = l.height - d;
    f > t.height + t.depth + s && (s = (s + f - t.height - t.depth) / 2);
    var m = l.height - t.height - s - d;
    t.style.paddingLeft = ne(h);
    var v = Je({
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
      var k = e.havingStyle(Re.SCRIPTSCRIPT), T = Ye(r.index, k, e), I = 0.6 * (v.height - v.depth), z = Je({
        positionType: "shift",
        positionData: -I,
        children: [{
          type: "elem",
          elem: T
        }]
      }), O = K(["root"], [z]);
      return K(["mord", "sqrt"], [O, v], e);
    } else
      return K(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new ee("mroot", [st(t, e), st(n, e)]) : new ee("msqrt", [st(t, e)]);
  }
});
var Bs = {
  display: Re.DISPLAY,
  text: Re.TEXT,
  script: Re.SCRIPT,
  scriptscript: Re.SCRIPTSCRIPT
};
function A4(r) {
  return r in Bs;
}
he({
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
    if (!A4(s))
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
    var t = Bs[r.style], n = e.havingStyle(t);
    return r.resetFont && (n = n.withFont("")), Fd(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = Bs[r.style], n = e.havingStyle(t);
    r.resetFont && (n = n.withFont(""));
    var i = sr(r.body, n), a = new ee("mstyle", i), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return a.setAttribute("scriptlevel", o[0]), a.setAttribute("displaystyle", o[1]), a;
  }
});
var $4 = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var i = n.limits && (t.style.size === Re.DISPLAY.size || n.alwaysHandleSupSub);
      return i ? Ld : null;
    } else if (n.type === "operatorname") {
      var a = n.alwaysHandleSupSub && (t.style.size === Re.DISPLAY.size || n.limits);
      return a ? Dd : null;
    } else {
      if (n.type === "accent")
        return hn(n.base) ? wd : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? Rd : null;
      } else
        return null;
    }
  else return null;
};
o0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = $4(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: i,
      sub: a
    } = r, s = Ye(n, e), o, l, d = e.fontMetrics(), h = 0, f = 0, m = n && hn(n);
    if (i) {
      var v = e.havingStyle(e.style.sup());
      o = Ye(i, v, e), m || (h = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (a) {
      var k = e.havingStyle(e.style.sub());
      l = Ye(a, k, e), m || (f = s.depth + k.fontMetrics().subDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    var T;
    e.style === Re.DISPLAY ? T = d.sup1 : e.style.cramped ? T = d.sup3 : T = d.sup2;
    var I = e.sizeMultiplier, z = ne(0.5 / d.ptPerEm / I), O = null;
    if (l) {
      var W = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      if (s instanceof nr || W) {
        var Y;
        O = ne(-((Y = s.italic) != null ? Y : 0));
      }
    }
    var re;
    if (o && l) {
      h = Math.max(h, T, o.depth + 0.25 * d.xHeight), f = Math.max(f, d.sub2);
      var M = d.defaultRuleThickness, G = 4 * M;
      if (h - o.depth - (l.height - f) < G) {
        f = G - (h - o.depth) + l.height;
        var de = 0.8 * d.xHeight - (h - o.depth);
        de > 0 && (h += de, f -= de);
      }
      var ce = [{
        type: "elem",
        elem: l,
        shift: f,
        marginRight: z,
        marginLeft: O
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: z
      }];
      re = Je({
        positionType: "individualShift",
        children: ce
      });
    } else if (l) {
      f = Math.max(f, d.sub1, l.height - 0.8 * d.xHeight);
      var ie = [{
        type: "elem",
        elem: l,
        marginLeft: O,
        marginRight: z
      }];
      re = Je({
        positionType: "shift",
        positionData: f,
        children: ie
      });
    } else if (o)
      h = Math.max(h, T, o.depth + 0.25 * d.xHeight), re = Je({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: z
        }]
      });
    else
      throw new Error("supsub must have either sup or sub.");
    var Ne = Ms(s, "right") || "mord";
    return K([Ne], [s, K(["msupsub"], [re])], e);
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
        d && d.type === "op" && d.limits && e.style === Re.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === Re.DISPLAY || d.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === Re.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === Re.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === Re.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === Re.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new ee(s, a);
  }
});
o0({
  type: "atom",
  htmlBuilder(r, e) {
    return mo(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new ee("mo", [pr(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = vo(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var Pd = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
o0({
  type: "mathord",
  htmlBuilder(r, e) {
    return ya(r, e);
  },
  mathmlBuilder(r, e) {
    var t = new ee("mi", [pr(r.text, r.mode, e)]), n = vo(r, e) || "italic";
    return n !== Pd[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
o0({
  type: "textord",
  htmlBuilder(r, e) {
    return ya(r, e);
  },
  mathmlBuilder(r, e) {
    var t = pr(r.text, r.mode, e), n = vo(r, e) || "normal", i;
    return r.mode === "text" ? i = new ee("mtext", [t]) : /[0-9]/.test(r.text) ? i = new ee("mn", [t]) : r.text === "\\prime" ? i = new ee("mo", [t]) : i = new ee("mi", [t]), n !== Pd[i.type] && i.setAttribute("mathvariant", n), i;
  }
});
var Qa = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, es = {
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
o0({
  type: "spacing",
  htmlBuilder(r, e) {
    if (es.hasOwnProperty(r.text)) {
      var t = es[r.text].className || "";
      if (r.mode === "text") {
        var n = ya(r, e);
        return n.classes.push(t), n;
      } else
        return K(["mspace", t], [mo(r.text, r.mode, e)], e);
    } else {
      if (Qa.hasOwnProperty(r.text))
        return K(["mspace", Qa[r.text]], [], e);
      throw new Q('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (es.hasOwnProperty(r.text))
      t = new ee("mtext", [new $t(" ")]);
    else {
      if (Qa.hasOwnProperty(r.text))
        return new ee("mspace");
      throw new Q('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var mc = () => {
  var r = new ee("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
o0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new ee("mtable", [new ee("mtr", [mc(), new ee("mtd", [On(r.body, e)]), mc(), new ee("mtd", [On(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var gc = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, bc = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, I4 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, vc = (r, e) => {
  var t = r.font;
  if (t) {
    if (gc[t])
      return e.withTextFontFamily(gc[t]);
    if (bc[t])
      return e.withTextFontWeight(bc[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(I4[t]);
};
he({
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
      body: At(i),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = vc(r, e), n = Et(r.body, t, !0);
    return K(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = vc(r, e);
    return On(r.body, t);
  }
});
he({
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
    var t = Ye(r.body, e), n = O0("underline-line", e), i = e.fontMetrics().defaultRuleThickness, a = Je({
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
    return K(["mord", "underline"], [a], e);
  },
  mathmlBuilder(r, e) {
    var t = new ee("mo", [new $t("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new ee("munder", [st(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
he({
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
    var t = Ye(r.body, e), n = e.fontMetrics().axisHeight, i = 0.5 * (t.height - n - (t.depth + n));
    return Je({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new ee("mpadded", [st(r.body, e)], ["vcenter"]);
    return new ee("mrow", [t]);
  }
});
he({
  type: "verb",
  names: ["\\verb"],
  numArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    throw new Q("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = wc(r), n = [], i = e.havingStyle(e.style.text()), a = 0; a < t.length; a++) {
      var s = t[a];
      s === "~" && (s = "\\textasciitilde"), n.push(Wt(s, "Typewriter-Regular", r.mode, i, ["mord", "texttt"]));
    }
    return K(["mord", "text"].concat(i.sizingClasses(e)), ld(n), i);
  },
  mathmlBuilder(r, e) {
    var t = new $t(wc(r)), n = new ee("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var wc = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Tn = hd, Vd = `[ \r
	]`, T4 = "\\\\[a-zA-Z@]+", N4 = "\\\\[^\uD800-\uDFFF]", M4 = "(" + T4 + ")" + Vd + "*", E4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, Ls = "[̀-ͯ]", z4 = new RegExp(Ls + "+$"), R4 = "(" + Vd + "+)|" + // whitespace
(E4 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Ls + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Ls + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + M4) + // \macroName + spaces
("|" + N4 + ")");
class xc {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(R4, "g"), this.catcodes = {
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
      return new rr("EOF", new Jt(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new Q("Unexpected character: '" + e[t] + "'", new rr(e[t], new Jt(this, t, t + 1)));
    var i = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[i] === 14) {
      var a = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return a === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = a + 1, this.lex();
    }
    return new rr(i, new Jt(this, t, this.tokenRegex.lastIndex));
  }
}
class O4 {
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
      throw new Q("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
var B4 = Md;
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
var yc = {
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
        throw new Q("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = yc[e.text], n == null || n >= t)
      throw new Q("Invalid base-" + t + " digit " + e.text);
    for (var i; (i = yc[r.future().text]) != null && i < t; )
      n *= t, n += i, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var ko = (r, e, t, n) => {
  var i = r.consumeArg().tokens;
  if (i.length !== 1)
    throw new Q("\\newcommand's first argument must be a macro name");
  var a = i[0].text, s = r.isDefined(a);
  if (s && !e)
    throw new Q("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!s && !t)
    throw new Q("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var o = 0;
  if (i = r.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
    for (var l = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      l += d.text, d = r.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new Q("Invalid number of arguments: " + l);
    o = parseInt(l), i = r.consumeArg().tokens;
  }
  return s && n || r.macros.set(a, {
    tokens: i,
    numArgs: o
  }), "";
};
g("\\newcommand", (r) => ko(r, !1, !0, !1));
g("\\renewcommand", (r) => ko(r, !0, !1, !1));
g("\\providecommand", (r) => ko(r, !0, !0, !0));
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
  return console.log(e, r.macros.get(t), Tn[t], mt.math[t], mt.text[t]), "";
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
var kc = {
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
}, L4 = /* @__PURE__ */ new Set(["bin", "rel"]);
g("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in kc ? e = kc[t] : (t.slice(0, 4) === "\\not" || t in mt.math && L4.has(mt.math[t].group)) && (e = "\\dotsb"), e;
});
var So = {
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
  return e in So ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(r) {
  var e = r.future().text;
  return e in So && e !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(r) {
  var e = r.future().text;
  return e in So ? "\\@cdots\\," : "\\@cdots";
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
    throw new Q("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
g("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
g("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
g("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
g("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
g("\\newline", "\\\\\\relax");
g("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var Hd = ne(Rr["Main-Regular"][84][1] - 0.7 * Rr["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Hd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Hd + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var qd = (r) => (e) => {
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
g("\\bra@ket", qd(!1));
g("\\bra@set", qd(!0));
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
var Wd = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class D4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new O4(B4, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new xc(e, this.settings);
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
    return this.pushToken(new rr("EOF", n.loc)), this.pushTokens(i), new rr("", Jt.range(t, n));
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
          throw new Q("Extra }", a);
      } else if (a.text === "EOF")
        throw new Q("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", a);
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
        throw new Q("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], i = 0; i < n.length; i++) {
        var a = this.popToken();
        if (n[i] !== a.text)
          throw new Q("Use of the macro doesn't match its definition", a);
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
      throw new Q("Too many expansions: infinite loop or need to increase maxExpand setting");
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
        throw new Q("Undefined control sequence: " + n);
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
            throw new Q("Incomplete placeholder at end of macro body", l);
          if (l = a[--o], l.text === "#")
            a.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            a.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new Q("Not a valid argument number", l);
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
    return this.macros.has(e) ? this.expandTokens([new rr(e)]) : void 0;
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
      for (var o = new xc(i, this.settings), l = [], d = o.lex(); d.text !== "EOF"; )
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
    return this.macros.has(e) || Tn.hasOwnProperty(e) || mt.math.hasOwnProperty(e) || mt.text.hasOwnProperty(e) || Wd.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Tn.hasOwnProperty(e) && !Tn[e].primitive;
  }
}
var Sc = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Fi = Object.freeze({
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
}), ts = {
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
}, _c = {
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
class Ta {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new D4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new Q("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
    this.consume(), this.gullet.pushToken(new rr("}")), this.gullet.pushTokens(e);
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
      if (Ta.endOfExpression.has(i.text) || t && i.text === t || e && Tn[i.text] && Tn[i.text].infix)
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
          throw new Q("only one infix operator per group", a.token);
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
      throw new Q("Expected group after '" + n + "'", t);
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
          throw new Q("Limit controls must follow a math operator", a);
        this.consume();
      } else if (a.text === "^") {
        if (n)
          throw new Q("Double superscript", a);
        n = this.handleSupSubscript("superscript");
      } else if (a.text === "_") {
        if (i)
          throw new Q("Double subscript", a);
        i = this.handleSupSubscript("subscript");
      } else if (a.text === "'") {
        if (n)
          throw new Q("Double superscript", a);
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
      } else if (Fi[a.text]) {
        var l = Sc.test(a.text), d = [];
        for (d.push(new rr(Fi[a.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!Fi[h] || Sc.test(h) !== l)
            break;
          d.unshift(new rr(Fi[h])), this.consume();
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
    var n = this.fetch(), i = n.text, a = Tn[i];
    if (!a)
      return null;
    if (this.consume(), t && t !== "atom" && !a.allowedInArgument)
      throw new Q("Got function '" + i + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !a.allowedInText)
      throw new Q("Can't use function '" + i + "' in text mode", n);
    if (this.mode === "math" && a.allowedInMath === !1)
      throw new Q("Can't use function '" + i + "' in math mode", n);
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
    }, o = Tn[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new Q("No function handler for " + e);
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
        throw new Q("Null argument, please report this as a bug");
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
          throw new Q("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new Q("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new Q("Unknown group type as " + e, this.fetch());
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
      throw new Q("Invalid " + t + ": '" + n.text + "'", n);
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
      throw new Q("Invalid color: '" + t.text + "'", t);
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
      throw new Q("Invalid size: '" + t.text + "'", t);
    var a = {
      number: +(i[1] + i[2]),
      // sign + magnitude, cast to number
      unit: i[3]
    };
    if (!nd(a))
      throw new Q("Invalid unit: '" + a.unit + "'", t);
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
        loc: Jt.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: i === "\\begingroup" || void 0
      };
    } else if (a = this.parseFunction(t, e) || this.parseSymbol(), a == null && i[0] === "\\" && !Wd.hasOwnProperty(i)) {
      if (this.settings.throwOnError)
        throw new Q("Undefined control sequence: " + i, n);
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
              loc: Jt.range(i, o),
              text: "---"
            }), t -= 2) : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Jt.range(i, s),
              text: "--"
            }), t -= 1);
          }
          (a === "'" || a === "`") && s.text === a && (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: Jt.range(i, s),
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
        throw new Q(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: i
      };
    }
    _c.hasOwnProperty(t[0]) && !mt[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = _c[t[0]] + t.slice(1));
    var a = z4.exec(t);
    a && (t = t.substring(0, a.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (mt[this.mode][t]) {
      this.settings.strict && this.mode === "math" && Ss.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = mt[this.mode][t].group, l = Jt.range(e), d;
      Wp(o) ? d = {
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
      this.settings.strict && (rd(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Jt.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), a)
      for (var h = 0; h < a[0].length; h++) {
        var f = a[0][h];
        if (!ts[f])
          throw new Q("Unknown accent ' " + f + "'", e);
        var m = ts[f][this.mode] || ts[f].text;
        if (!m)
          throw new Q("Accent " + f + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Jt.range(e),
          label: m,
          isStretchy: !1,
          isShifty: !0,
          base: s
        };
      }
    return s;
  }
}
Ta.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var _o = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new Ta(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var i = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new Q("\\tag works only in display equations");
    i = [{
      type: "tag",
      mode: "text",
      body: i,
      tag: n.subparse([new rr("\\df@tag")])
    }];
  }
  return i;
}, Ud = function(e, t, n) {
  t.textContent = "";
  var i = Co(e, n).toNode();
  t.appendChild(i);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Ud = function() {
  throw new Q("KaTeX doesn't work in quirks mode.");
});
var F4 = function(e, t) {
  var n = Co(e, t).toMarkup();
  return n;
}, P4 = function(e, t) {
  var n = new uo(t);
  return _o(e, n);
}, Gd = function(e, t, n) {
  if (n.throwOnError || !(e instanceof Q))
    throw e;
  var i = K(["katex-error"], [new nr(t)]);
  return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + n.errorColor), i;
}, Co = function(e, t) {
  var n = new uo(t);
  try {
    var i = _o(e, n);
    return Bp(i, e, n);
  } catch (a) {
    return Gd(a, e, n);
  }
}, V4 = function(e, t) {
  var n = new uo(t);
  try {
    var i = _o(e, n);
    return Lp(i, e, n);
  } catch (a) {
    return Gd(a, e, n);
  }
}, H4 = "0.17.0", q4 = {
  Span: H0,
  Anchor: wa,
  SymbolNode: nr,
  SvgNode: un,
  PathNode: zn,
  LineNode: ks
}, W4 = {
  /**
   * Current KaTeX version
   */
  version: H4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: Ud,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: F4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: Q,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: ws,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: P4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Co,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: V4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: bp,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: c,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: he,
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
  __domTree: q4
};
const U4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, G4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, j4 = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function K4(r = {}) {
  return {
    extensions: [
      Z4(r, Cc(r, !1)),
      X4(r, Cc(r, !0))
    ]
  };
}
function Cc(r, e) {
  return (t) => W4.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function Z4(r, e) {
  const t = r && r.nonStandard, n = t ? G4 : U4;
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
function X4(r, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(t, n) {
      const i = t.match(j4);
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
function J4(r) {
  if (typeof r == "function" && (r = {
    highlight: r
  }), !r || typeof r.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), {
    async: !!r.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Ac(e.lang);
      if (r.async)
        return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then($c(e));
      const n = r.highlight(e.text, t, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      $c(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, n) {
        typeof e == "object" && (n = e.escaped, t = e.lang, e = e.text);
        const i = Ac(t), a = i ? r.langPrefix + Tc(i) : r.emptyLangClass, s = a ? ` class="${a}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : Tc(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Ac(r) {
  return (r || "").match(/\S*/)[0];
}
function $c(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = !0, r.text = e);
  };
}
const jd = /[&<>"']/, Y4 = new RegExp(jd.source, "g"), Kd = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, Q4 = new RegExp(Kd.source, "g"), e2 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ic = (r) => e2[r];
function Tc(r, e) {
  if (e) {
    if (jd.test(r))
      return r.replace(Y4, Ic);
  } else if (Kd.test(r))
    return r.replace(Q4, Ic);
  return r;
}
var rs, Nc;
function t2() {
  if (Nc) return rs;
  Nc = 1;
  function r(S) {
    return S instanceof Map ? S.clear = S.delete = S.set = function() {
      throw new Error("map is read-only");
    } : S instanceof Set && (S.add = S.clear = S.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(S), Object.getOwnPropertyNames(S).forEach((L) => {
      const se = S[L], $e = typeof se;
      ($e === "object" || $e === "function") && !Object.isFrozen(se) && r(se);
    }), S;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(L) {
      L.data === void 0 && (L.data = {}), this.data = L.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(S, ...L) {
    const se = /* @__PURE__ */ Object.create(null);
    for (const $e in S)
      se[$e] = S[$e];
    return L.forEach(function($e) {
      for (const ot in $e)
        se[ot] = $e[ot];
    }), /** @type {T} */
    se;
  }
  const i = "</span>", a = (S) => !!S.scope, s = (S, { prefix: L }) => {
    if (S.startsWith("language:"))
      return S.replace("language:", "language-");
    if (S.includes(".")) {
      const se = S.split(".");
      return [
        `${L}${se.shift()}`,
        ...se.map(($e, ot) => `${$e}${"_".repeat(ot + 1)}`)
      ].join(" ");
    }
    return `${L}${S}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(L, se) {
      this.buffer = "", this.classPrefix = se.classPrefix, L.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(L) {
      this.buffer += t(L);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(L) {
      if (!a(L)) return;
      const se = s(
        L.scope,
        { prefix: this.classPrefix }
      );
      this.span(se);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(L) {
      a(L) && (this.buffer += i);
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
    span(L) {
      this.buffer += `<span class="${L}">`;
    }
  }
  const l = (S = {}) => {
    const L = { children: [] };
    return Object.assign(L, S), L;
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
    add(L) {
      this.top.children.push(L);
    }
    /** @param {string} scope */
    openNode(L) {
      const se = l({ scope: L });
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
    walk(L) {
      return this.constructor._walk(L, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(L, se) {
      return typeof se == "string" ? L.addText(se) : se.children && (L.openNode(se), se.children.forEach(($e) => this._walk(L, $e)), L.closeNode(se)), L;
    }
    /**
     * @param {Node} node
     */
    static _collapse(L) {
      typeof L != "string" && L.children && (L.children.every((se) => typeof se == "string") ? L.children = [L.children.join("")] : L.children.forEach((se) => {
        d._collapse(se);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(L) {
      super(), this.options = L;
    }
    /**
     * @param {string} text
     */
    addText(L) {
      L !== "" && this.add(L);
    }
    /** @param {string} scope */
    startScope(L) {
      this.openNode(L);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(L, se) {
      const $e = L.root;
      se && ($e.scope = `language:${se}`), this.add($e);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(S) {
    return S ? typeof S == "string" ? S : S.source : null;
  }
  function m(S) {
    return T("(?=", S, ")");
  }
  function v(S) {
    return T("(?:", S, ")*");
  }
  function k(S) {
    return T("(?:", S, ")?");
  }
  function T(...S) {
    return S.map((se) => f(se)).join("");
  }
  function I(S) {
    const L = S[S.length - 1];
    return typeof L == "object" && L.constructor === Object ? (S.splice(S.length - 1, 1), L) : {};
  }
  function z(...S) {
    return "(" + (I(S).capture ? "" : "?:") + S.map(($e) => f($e)).join("|") + ")";
  }
  function O(S) {
    return new RegExp(S.toString() + "|").exec("").length - 1;
  }
  function W(S, L) {
    const se = S && S.exec(L);
    return se && se.index === 0;
  }
  const Y = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function re(S, { joinWith: L }) {
    let se = 0;
    return S.map(($e) => {
      se += 1;
      const ot = se;
      let lt = f($e), be = "";
      for (; lt.length > 0; ) {
        const fe = Y.exec(lt);
        if (!fe) {
          be += lt;
          break;
        }
        be += lt.substring(0, fe.index), lt = lt.substring(fe.index + fe[0].length), fe[0][0] === "\\" && fe[1] ? be += "\\" + String(Number(fe[1]) + ot) : (be += fe[0], fe[0] === "(" && se++);
      }
      return be;
    }).map(($e) => `(${$e})`).join(L);
  }
  const M = /\b\B/, G = "[a-zA-Z]\\w*", de = "[a-zA-Z_]\\w*", ce = "\\b\\d+(\\.\\d+)?", ie = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Ne = "\\b(0b[01]+)", ye = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", H = (S = {}) => {
    const L = /^#![ ]*\//;
    return S.binary && (S.begin = T(
      L,
      /.*\b/,
      S.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: L,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (se, $e) => {
        se.index !== 0 && $e.ignoreMatch();
      }
    }, S);
  }, U = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, oe = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [U]
  }, B = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [U]
  }, j = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, E = function(S, L, se = {}) {
    const $e = n(
      {
        scope: "comment",
        begin: S,
        end: L,
        contains: []
      },
      se
    );
    $e.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const ot = z(
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
    return $e.contains.push(
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
          ot,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), $e;
  }, te = E("//", "$"), Oe = E("/\\*", "\\*/"), Ve = E("#", "$"), Be = {
    scope: "number",
    begin: ce,
    relevance: 0
  }, We = {
    scope: "number",
    begin: ie,
    relevance: 0
  }, qe = {
    scope: "number",
    begin: Ne,
    relevance: 0
  }, or = {
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
  }, lr = {
    scope: "title",
    begin: G,
    relevance: 0
  }, we = {
    scope: "title",
    begin: de,
    relevance: 0
  }, Le = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + de,
    relevance: 0
  };
  var me = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: oe,
    BACKSLASH_ESCAPE: U,
    BINARY_NUMBER_MODE: qe,
    BINARY_NUMBER_RE: Ne,
    COMMENT: E,
    C_BLOCK_COMMENT_MODE: Oe,
    C_LINE_COMMENT_MODE: te,
    C_NUMBER_MODE: We,
    C_NUMBER_RE: ie,
    END_SAME_AS_BEGIN: function(S) {
      return Object.assign(
        S,
        {
          /** @type {ModeCallback} */
          "on:begin": (L, se) => {
            se.data._beginMatch = L[1];
          },
          /** @type {ModeCallback} */
          "on:end": (L, se) => {
            se.data._beginMatch !== L[1] && se.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Ve,
    IDENT_RE: G,
    MATCH_NOTHING_RE: M,
    METHOD_GUARD: Le,
    NUMBER_MODE: Be,
    NUMBER_RE: ce,
    PHRASAL_WORDS_MODE: j,
    QUOTE_STRING_MODE: B,
    REGEXP_MODE: or,
    RE_STARTERS_RE: ye,
    SHEBANG: H,
    TITLE_MODE: lr,
    UNDERSCORE_IDENT_RE: de,
    UNDERSCORE_TITLE_MODE: we
  });
  function cr(S, L) {
    S.input[S.index - 1] === "." && L.ignoreMatch();
  }
  function Ke(S, L) {
    S.className !== void 0 && (S.scope = S.className, delete S.className);
  }
  function wt(S, L) {
    L && S.beginKeywords && (S.begin = "\\b(" + S.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", S.__beforeBegin = cr, S.keywords = S.keywords || S.beginKeywords, delete S.beginKeywords, S.relevance === void 0 && (S.relevance = 0));
  }
  function mr(S, L) {
    Array.isArray(S.illegal) && (S.illegal = z(...S.illegal));
  }
  function mn(S, L) {
    if (S.match) {
      if (S.begin || S.end) throw new Error("begin & end are not supported with match");
      S.begin = S.match, delete S.match;
    }
  }
  function Tt(S, L) {
    S.relevance === void 0 && (S.relevance = 1);
  }
  const Pr = (S, L) => {
    if (!S.beforeMatch) return;
    if (S.starts) throw new Error("beforeMatch cannot be used with starts");
    const se = Object.assign({}, S);
    Object.keys(S).forEach(($e) => {
      delete S[$e];
    }), S.keywords = se.keywords, S.begin = T(se.beforeMatch, m(se.begin)), S.starts = {
      relevance: 0,
      contains: [
        Object.assign(se, { endsParent: !0 })
      ]
    }, S.relevance = 0, delete se.beforeMatch;
  }, Vr = [
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
  ], gn = "keyword";
  function Qt(S, L, se = gn) {
    const $e = /* @__PURE__ */ Object.create(null);
    return typeof S == "string" ? ot(se, S.split(" ")) : Array.isArray(S) ? ot(se, S) : Object.keys(S).forEach(function(lt) {
      Object.assign(
        $e,
        Qt(S[lt], L, lt)
      );
    }), $e;
    function ot(lt, be) {
      L && (be = be.map((fe) => fe.toLowerCase())), be.forEach(function(fe) {
        const ke = fe.split("|");
        $e[ke[0]] = [lt, Hr(ke[0], ke[1])];
      });
    }
  }
  function Hr(S, L) {
    return L ? Number(L) : Ar(S) ? 0 : 1;
  }
  function Ar(S) {
    return Vr.includes(S.toLowerCase());
  }
  const $r = {}, Ft = (S) => {
    console.error(S);
  }, qr = (S, ...L) => {
    console.log(`WARN: ${S}`, ...L);
  }, Pt = (S, L) => {
    $r[`${S}/${L}`] || (console.log(`Deprecated as of ${S}. ${L}`), $r[`${S}/${L}`] = !0);
  }, jt = new Error();
  function Rt(S, L, { key: se }) {
    let $e = 0;
    const ot = S[se], lt = {}, be = {};
    for (let fe = 1; fe <= L.length; fe++)
      be[fe + $e] = ot[fe], lt[fe + $e] = !0, $e += O(L[fe - 1]);
    S[se] = be, S[se]._emit = lt, S[se]._multi = !0;
  }
  function Ir(S) {
    if (Array.isArray(S.begin)) {
      if (S.skip || S.excludeBegin || S.returnBegin)
        throw Ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), jt;
      if (typeof S.beginScope != "object" || S.beginScope === null)
        throw Ft("beginScope must be object"), jt;
      Rt(S, S.begin, { key: "beginScope" }), S.begin = re(S.begin, { joinWith: "" });
    }
  }
  function l0(S) {
    if (Array.isArray(S.end)) {
      if (S.skip || S.excludeEnd || S.returnEnd)
        throw Ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"), jt;
      if (typeof S.endScope != "object" || S.endScope === null)
        throw Ft("endScope must be object"), jt;
      Rt(S, S.end, { key: "endScope" }), S.end = re(S.end, { joinWith: "" });
    }
  }
  function W0(S) {
    S.scope && typeof S.scope == "object" && S.scope !== null && (S.beginScope = S.scope, delete S.scope);
  }
  function c0(S) {
    W0(S), typeof S.beginScope == "string" && (S.beginScope = { _wrap: S.beginScope }), typeof S.endScope == "string" && (S.endScope = { _wrap: S.endScope }), Ir(S), l0(S);
  }
  function u0(S) {
    function L(be, fe) {
      return new RegExp(
        f(be),
        "m" + (S.case_insensitive ? "i" : "") + (S.unicodeRegex ? "u" : "") + (fe ? "g" : "")
      );
    }
    class se {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(fe, ke) {
        ke.position = this.position++, this.matchIndexes[this.matchAt] = ke, this.regexes.push([ke, fe]), this.matchAt += O(fe) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const fe = this.regexes.map((ke) => ke[1]);
        this.matcherRe = L(re(fe, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(fe) {
        this.matcherRe.lastIndex = this.lastIndex;
        const ke = this.matcherRe.exec(fe);
        if (!ke)
          return null;
        const xt = ke.findIndex((Gr, er) => er > 0 && Gr !== void 0), ct = this.matchIndexes[xt];
        return ke.splice(0, xt), Object.assign(ke, ct);
      }
    }
    class $e {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(fe) {
        if (this.multiRegexes[fe]) return this.multiRegexes[fe];
        const ke = new se();
        return this.rules.slice(fe).forEach(([xt, ct]) => ke.addRule(xt, ct)), ke.compile(), this.multiRegexes[fe] = ke, ke;
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
        let xt = ke.exec(fe);
        if (this.resumingScanAtSamePosition() && !(xt && xt.index === this.lastIndex)) {
          const ct = this.getMatcher(0);
          ct.lastIndex = this.lastIndex + 1, xt = ct.exec(fe);
        }
        return xt && (this.regexIndex += xt.position + 1, this.regexIndex === this.count && this.considerAll()), xt;
      }
    }
    function ot(be) {
      const fe = new $e();
      return be.contains.forEach((ke) => fe.addRule(ke.begin, { rule: ke, type: "begin" })), be.terminatorEnd && fe.addRule(be.terminatorEnd, { type: "end" }), be.illegal && fe.addRule(be.illegal, { type: "illegal" }), fe;
    }
    function lt(be, fe) {
      const ke = (
        /** @type CompiledMode */
        be
      );
      if (be.isCompiled) return ke;
      [
        Ke,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        mn,
        c0,
        Pr
      ].forEach((ct) => ct(be, fe)), S.compilerExtensions.forEach((ct) => ct(be, fe)), be.__beforeBegin = null, [
        wt,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        mr,
        // default to 1 relevance if not specified
        Tt
      ].forEach((ct) => ct(be, fe)), be.isCompiled = !0;
      let xt = null;
      return typeof be.keywords == "object" && be.keywords.$pattern && (be.keywords = Object.assign({}, be.keywords), xt = be.keywords.$pattern, delete be.keywords.$pattern), xt = xt || /\w+/, be.keywords && (be.keywords = Qt(be.keywords, S.case_insensitive)), ke.keywordPatternRe = L(xt, !0), fe && (be.begin || (be.begin = /\B|\b/), ke.beginRe = L(ke.begin), !be.end && !be.endsWithParent && (be.end = /\B|\b/), be.end && (ke.endRe = L(ke.end)), ke.terminatorEnd = f(ke.end) || "", be.endsWithParent && fe.terminatorEnd && (ke.terminatorEnd += (be.end ? "|" : "") + fe.terminatorEnd)), be.illegal && (ke.illegalRe = L(
        /** @type {RegExp | string} */
        be.illegal
      )), be.contains || (be.contains = []), be.contains = [].concat(...be.contains.map(function(ct) {
        return d0(ct === "self" ? be : ct);
      })), be.contains.forEach(function(ct) {
        lt(
          /** @type Mode */
          ct,
          ke
        );
      }), be.starts && lt(be.starts, fe), ke.matcher = ot(ke), ke;
    }
    if (S.compilerExtensions || (S.compilerExtensions = []), S.contains && S.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return S.classNameAliases = n(S.classNameAliases || {}), lt(
      /** @type Mode */
      S
    );
  }
  function Pn(S) {
    return S ? S.endsWithParent || Pn(S.starts) : !1;
  }
  function d0(S) {
    return S.variants && !S.cachedVariants && (S.cachedVariants = S.variants.map(function(L) {
      return n(S, { variants: null }, L);
    })), S.cachedVariants ? S.cachedVariants : Pn(S) ? n(S, { starts: S.starts ? n(S.starts) : null }) : Object.isFrozen(S) ? n(S) : S;
  }
  var Wr = "11.11.1";
  class Vn extends Error {
    constructor(L, se) {
      super(L), this.name = "HTMLInjectionError", this.html = se;
    }
  }
  const Ur = t, Hn = n, bn = Symbol("nomatch"), vn = 7, wn = function(S) {
    const L = /* @__PURE__ */ Object.create(null), se = /* @__PURE__ */ Object.create(null), $e = [];
    let ot = !0;
    const lt = "Could not find the language '{}', did you forget to load/include a language module?", be = { disableAutodetect: !0, name: "Plain text", contains: [] };
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
    function ke(X) {
      return fe.noHighlightRe.test(X);
    }
    function xt(X) {
      let xe = X.className + " ";
      xe += X.parentNode ? X.parentNode.className : "";
      const Ie = fe.languageDetectRe.exec(xe);
      if (Ie) {
        const Qe = Vt(Ie[1]);
        return Qe || (qr(lt.replace("{}", Ie[1])), qr("Falling back to no-highlight mode for this block.", X)), Qe ? Ie[1] : "no-highlight";
      }
      return xe.split(/\s+/).find((Qe) => ke(Qe) || Vt(Qe));
    }
    function ct(X, xe, Ie) {
      let Qe = "", dt = "";
      typeof xe == "object" ? (Qe = X, Ie = xe.ignoreIllegals, dt = xe.language) : (Pt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Pt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), dt = X, Qe = xe), Ie === void 0 && (Ie = !0);
      const Ct = {
        code: Qe,
        language: dt
      };
      ut("before:highlight", Ct);
      const je = Ct.result ? Ct.result : Gr(Ct.language, Ct.code, Ie);
      return je.code = Ct.code, ut("after:highlight", je), je;
    }
    function Gr(X, xe, Ie, Qe) {
      const dt = /* @__PURE__ */ Object.create(null);
      function Ct(J, ge) {
        return J.keywords[ge];
      }
      function je() {
        if (!x.keywords) {
          F.addText(q);
          return;
        }
        let J = 0;
        x.keywordPatternRe.lastIndex = 0;
        let ge = x.keywordPatternRe.exec(q), Ee = "";
        for (; ge; ) {
          Ee += q.substring(J, ge.index);
          const He = Kt.case_insensitive ? ge[0].toLowerCase() : ge[0], pt = Ct(x, He);
          if (pt) {
            const [br, Ci] = pt;
            if (F.addText(Ee), Ee = "", dt[He] = (dt[He] || 0) + 1, dt[He] <= vn && (ae += Ci), br.startsWith("_"))
              Ee += ge[0];
            else {
              const Ai = Kt.classNameAliases[br] || br;
              Ot(ge[0], Ai);
            }
          } else
            Ee += ge[0];
          J = x.keywordPatternRe.lastIndex, ge = x.keywordPatternRe.exec(q);
        }
        Ee += q.substring(J), F.addText(Ee);
      }
      function Yr() {
        if (q === "") return;
        let J = null;
        if (typeof x.subLanguage == "string") {
          if (!L[x.subLanguage]) {
            F.addText(q);
            return;
          }
          J = Gr(x.subLanguage, q, !0, N[x.subLanguage]), N[x.subLanguage] = /** @type {CompiledMode} */
          J._top;
        } else
          J = ur(q, x.subLanguage.length ? x.subLanguage : null);
        x.relevance > 0 && (ae += J.relevance), F.__addSublanguage(J._emitter, J.language);
      }
      function zt() {
        x.subLanguage != null ? Yr() : je(), q = "";
      }
      function Ot(J, ge) {
        J !== "" && (F.startScope(ge), F.addText(J), F.endScope());
      }
      function Qr(J, ge) {
        let Ee = 1;
        const He = ge.length - 1;
        for (; Ee <= He; ) {
          if (!J._emit[Ee]) {
            Ee++;
            continue;
          }
          const pt = Kt.classNameAliases[J[Ee]] || J[Ee], br = ge[Ee];
          pt ? Ot(br, pt) : (q = br, je(), q = ""), Ee++;
        }
      }
      function v0(J, ge) {
        return J.scope && typeof J.scope == "string" && F.openNode(Kt.classNameAliases[J.scope] || J.scope), J.beginScope && (J.beginScope._wrap ? (Ot(q, Kt.classNameAliases[J.beginScope._wrap] || J.beginScope._wrap), q = "") : J.beginScope._multi && (Qr(J.beginScope, ge), q = "")), x = Object.create(J, { parent: { value: x } }), x;
      }
      function yn(J, ge, Ee) {
        let He = W(J.endRe, Ee);
        if (He) {
          if (J["on:end"]) {
            const pt = new e(J);
            J["on:end"](ge, pt), pt.isMatchIgnored && (He = !1);
          }
          if (He) {
            for (; J.endsParent && J.parent; )
              J = J.parent;
            return J;
          }
        }
        if (J.endsWithParent)
          return yn(J.parent, ge, Ee);
      }
      function j0(J) {
        return x.matcher.regexIndex === 0 ? (q += J[0], 1) : (Ae = !0, 0);
      }
      function w0(J) {
        const ge = J[0], Ee = J.rule, He = new e(Ee), pt = [Ee.__beforeBegin, Ee["on:begin"]];
        for (const br of pt)
          if (br && (br(J, He), He.isMatchIgnored))
            return j0(ge);
        return Ee.skip ? q += ge : (Ee.excludeBegin && (q += ge), zt(), !Ee.returnBegin && !Ee.excludeBegin && (q = ge)), v0(Ee, J), Ee.returnBegin ? 0 : ge.length;
      }
      function K0(J) {
        const ge = J[0], Ee = xe.substring(J.index), He = yn(x, J, Ee);
        if (!He)
          return bn;
        const pt = x;
        x.endScope && x.endScope._wrap ? (zt(), Ot(ge, x.endScope._wrap)) : x.endScope && x.endScope._multi ? (zt(), Qr(x.endScope, J)) : pt.skip ? q += ge : (pt.returnEnd || pt.excludeEnd || (q += ge), zt(), pt.excludeEnd && (q = ge));
        do
          x.scope && F.closeNode(), !x.skip && !x.subLanguage && (ae += x.relevance), x = x.parent;
        while (x !== He.parent);
        return He.starts && v0(He.starts, J), pt.returnEnd ? 0 : ge.length;
      }
      function Wn() {
        const J = [];
        for (let ge = x; ge !== Kt; ge = ge.parent)
          ge.scope && J.unshift(ge.scope);
        J.forEach((ge) => F.openNode(ge));
      }
      let dr = {};
      function Un(J, ge) {
        const Ee = ge && ge[0];
        if (q += J, Ee == null)
          return zt(), 0;
        if (dr.type === "begin" && ge.type === "end" && dr.index === ge.index && Ee === "") {
          if (q += xe.slice(ge.index, ge.index + 1), !ot) {
            const He = new Error(`0 width match regex (${X})`);
            throw He.languageName = X, He.badRule = dr.rule, He;
          }
          return 1;
        }
        if (dr = ge, ge.type === "begin")
          return w0(ge);
        if (ge.type === "illegal" && !Ie) {
          const He = new Error('Illegal lexeme "' + Ee + '" for mode "' + (x.scope || "<unnamed>") + '"');
          throw He.mode = x, He;
        } else if (ge.type === "end") {
          const He = K0(ge);
          if (He !== bn)
            return He;
        }
        if (ge.type === "illegal" && Ee === "")
          return q += `
`, 1;
        if (Ce > 1e5 && Ce > ge.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return q += Ee, Ee.length;
      }
      const Kt = Vt(X);
      if (!Kt)
        throw Ft(lt.replace("{}", X)), new Error('Unknown language: "' + X + '"');
      const x0 = u0(Kt);
      let $ = "", x = Qe || x0;
      const N = {}, F = new fe.__emitter(fe);
      Wn();
      let q = "", ae = 0, ve = 0, Ce = 0, Ae = !1;
      try {
        if (Kt.__emitTokens)
          Kt.__emitTokens(xe, F);
        else {
          for (x.matcher.considerAll(); ; ) {
            Ce++, Ae ? Ae = !1 : x.matcher.considerAll(), x.matcher.lastIndex = ve;
            const J = x.matcher.exec(xe);
            if (!J) break;
            const ge = xe.substring(ve, J.index), Ee = Un(ge, J);
            ve = J.index + Ee;
          }
          Un(xe.substring(ve));
        }
        return F.finalize(), $ = F.toHTML(), {
          language: X,
          value: $,
          relevance: ae,
          illegal: !1,
          _emitter: F,
          _top: x
        };
      } catch (J) {
        if (J.message && J.message.includes("Illegal"))
          return {
            language: X,
            value: Ur(xe),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: J.message,
              index: ve,
              context: xe.slice(ve - 100, ve + 100),
              mode: J.mode,
              resultSoFar: $
            },
            _emitter: F
          };
        if (ot)
          return {
            language: X,
            value: Ur(xe),
            illegal: !1,
            relevance: 0,
            errorRaised: J,
            _emitter: F,
            _top: x
          };
        throw J;
      }
    }
    function er(X) {
      const xe = {
        value: Ur(X),
        illegal: !1,
        relevance: 0,
        _top: be,
        _emitter: new fe.__emitter(fe)
      };
      return xe._emitter.addText(X), xe;
    }
    function ur(X, xe) {
      xe = xe || fe.languages || Object.keys(L);
      const Ie = er(X), Qe = xe.filter(Vt).filter(Xr).map(
        (zt) => Gr(zt, X, !1)
      );
      Qe.unshift(Ie);
      const dt = Qe.sort((zt, Ot) => {
        if (zt.relevance !== Ot.relevance) return Ot.relevance - zt.relevance;
        if (zt.language && Ot.language) {
          if (Vt(zt.language).supersetOf === Ot.language)
            return 1;
          if (Vt(Ot.language).supersetOf === zt.language)
            return -1;
        }
        return 0;
      }), [Ct, je] = dt, Yr = Ct;
      return Yr.secondBest = je, Yr;
    }
    function jr(X, xe, Ie) {
      const Qe = xe && se[xe] || Ie;
      X.classList.add("hljs"), X.classList.add(`language-${Qe}`);
    }
    function Kr(X) {
      let xe = null;
      const Ie = xt(X);
      if (ke(Ie)) return;
      if (ut(
        "before:highlightElement",
        { el: X, language: Ie }
      ), X.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", X);
        return;
      }
      if (X.children.length > 0 && (fe.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(X)), fe.throwUnescapedHTML))
        throw new Vn(
          "One of your code blocks includes unescaped HTML.",
          X.innerHTML
        );
      xe = X;
      const Qe = xe.textContent, dt = Ie ? ct(Qe, { language: Ie, ignoreIllegals: !0 }) : ur(Qe);
      X.innerHTML = dt.value, X.dataset.highlighted = "yes", jr(X, Ie, dt.language), X.result = {
        language: dt.language,
        // TODO: remove with version 11.0
        re: dt.relevance,
        relevance: dt.relevance
      }, dt.secondBest && (X.secondBest = {
        language: dt.secondBest.language,
        relevance: dt.secondBest.relevance
      }), ut("after:highlightElement", { el: X, result: dt, text: Qe });
    }
    function xn(X) {
      fe = Hn(fe, X);
    }
    const h0 = () => {
      Zr(), Pt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function f0() {
      Zr(), Pt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let p0 = !1;
    function Zr() {
      function X() {
        Zr();
      }
      if (document.readyState === "loading") {
        p0 || window.addEventListener("DOMContentLoaded", X, !1), p0 = !0;
        return;
      }
      document.querySelectorAll(fe.cssSelector).forEach(Kr);
    }
    function Nt(X, xe) {
      let Ie = null;
      try {
        Ie = xe(S);
      } catch (Qe) {
        if (Ft("Language definition for '{}' could not be registered.".replace("{}", X)), ot)
          Ft(Qe);
        else
          throw Qe;
        Ie = be;
      }
      Ie.name || (Ie.name = X), L[X] = Ie, Ie.rawDefinition = xe.bind(null, S), Ie.aliases && g0(Ie.aliases, { languageName: X });
    }
    function qn(X) {
      delete L[X];
      for (const xe of Object.keys(se))
        se[xe] === X && delete se[xe];
    }
    function m0() {
      return Object.keys(L);
    }
    function Vt(X) {
      return X = (X || "").toLowerCase(), L[X] || L[se[X]];
    }
    function g0(X, { languageName: xe }) {
      typeof X == "string" && (X = [X]), X.forEach((Ie) => {
        se[Ie.toLowerCase()] = xe;
      });
    }
    function Xr(X) {
      const xe = Vt(X);
      return xe && !xe.disableAutodetect;
    }
    function U0(X) {
      X["before:highlightBlock"] && !X["before:highlightElement"] && (X["before:highlightElement"] = (xe) => {
        X["before:highlightBlock"](
          Object.assign({ block: xe.el }, xe)
        );
      }), X["after:highlightBlock"] && !X["after:highlightElement"] && (X["after:highlightElement"] = (xe) => {
        X["after:highlightBlock"](
          Object.assign({ block: xe.el }, xe)
        );
      });
    }
    function b0(X) {
      U0(X), $e.push(X);
    }
    function G0(X) {
      const xe = $e.indexOf(X);
      xe !== -1 && $e.splice(xe, 1);
    }
    function ut(X, xe) {
      const Ie = X;
      $e.forEach(function(Qe) {
        Qe[Ie] && Qe[Ie](xe);
      });
    }
    function Jr(X) {
      return Pt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Pt("10.7.0", "Please use highlightElement now."), Kr(X);
    }
    Object.assign(S, {
      highlight: ct,
      highlightAuto: ur,
      highlightAll: Zr,
      highlightElement: Kr,
      // TODO: Remove with v12 API
      highlightBlock: Jr,
      configure: xn,
      initHighlighting: h0,
      initHighlightingOnLoad: f0,
      registerLanguage: Nt,
      unregisterLanguage: qn,
      listLanguages: m0,
      getLanguage: Vt,
      registerAliases: g0,
      autoDetection: Xr,
      inherit: Hn,
      addPlugin: b0,
      removePlugin: G0
    }), S.debugMode = function() {
      ot = !1;
    }, S.safeMode = function() {
      ot = !0;
    }, S.versionString = Wr, S.regex = {
      concat: T,
      lookahead: m,
      either: z,
      optional: k,
      anyNumberOfTimes: v
    };
    for (const X in me)
      typeof me[X] == "object" && r(me[X]);
    return Object.assign(S, me), S;
  }, gr = wn({});
  return gr.newInstance = () => wn({}), rs = gr, gr.HighlightJS = gr, gr.default = gr, rs;
}
var r2 = /* @__PURE__ */ t2();
const Fn = /* @__PURE__ */ Vc(r2), n2 = (r) => ({
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
}), i2 = [
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
], a2 = [
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
], s2 = [
  ...i2,
  ...a2
], o2 = [
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
].sort().reverse(), l2 = [
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
].sort().reverse(), c2 = [
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
].sort().reverse(), u2 = [
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
function d2(r) {
  const e = r.regex, t = n2(r), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", a = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
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
          { begin: ":(" + l2.join("|") + ")" },
          { begin: ":(:)?(" + c2.join("|") + ")" }
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
        begin: "\\b(" + u2.join("|") + ")\\b"
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
              attribute: o2.join(" ")
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
        begin: "\\b(" + s2.join("|") + ")\\b"
      }
    ]
  };
}
const Mc = "[A-Za-z$_][0-9A-Za-z$_]*", h2 = [
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
], f2 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Zd = [
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
], Xd = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Jd = [
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
], p2 = [
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
], m2 = [].concat(
  Jd,
  Zd,
  Xd
);
function g2(r) {
  const e = r.regex, t = (E, { after: te }) => {
    const Oe = "</" + E[0].slice(1);
    return E.input.indexOf(Oe, te) !== -1;
  }, n = Mc, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (E, te) => {
      const Oe = E[0].length + E.index, Ve = E.input[Oe];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ve === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ve === ","
      ) {
        te.ignoreMatch();
        return;
      }
      Ve === ">" && (t(E, { after: Oe }) || te.ignoreMatch());
      let Be;
      const We = E.input.substring(Oe);
      if (Be = We.match(/^\s*=/)) {
        te.ignoreMatch();
        return;
      }
      if ((Be = We.match(/^\s+extends\s+/)) && Be.index === 0) {
        te.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Mc,
    keyword: h2,
    literal: f2,
    built_in: m2,
    "variable.language": p2
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
  }, O = {
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
  const Y = [].concat(O, m.contains), re = Y.concat([
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
    contains: re
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
  }, de = {
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
        ...Zd,
        ...Xd
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
  }, Ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ye(E) {
    return e.concat("(?!", E.join("|"), ")");
  }
  const H = {
    match: e.concat(
      /\b/,
      ye([
        ...Jd,
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
  }, B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", j = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(B)
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
    exports: { PARAMS_CONTAINS: re, CLASS_REFERENCE: de },
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
      O,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      de,
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
          O,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: B,
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
                    contains: re
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
      H,
      Ne,
      G,
      oe,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var C0 = "[0-9](_*[0-9])*", Pi = `\\.(${C0})`, Vi = "[0-9a-fA-F](_*[0-9a-fA-F])*", Ec = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${C0})((${Pi})|\\.)?|(${Pi}))[eE][+-]?(${C0})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${C0})((${Pi})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Pi})[fFdD]?\\b` },
    { begin: `\\b(${C0})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Vi})\\.?|(${Vi})?\\.(${Vi}))[pP][+-]?(${C0})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Vi})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function Yd(r, e, t) {
  return t === -1 ? "" : r.replace(e, (n) => Yd(r, e, t - 1));
}
function b2(r) {
  const e = r.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = t + Yd("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), l = {
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
              Ec,
              r.C_BLOCK_COMMENT_MODE
            ]
          },
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      Ec,
      d
    ]
  };
}
function v2(r) {
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
const ca = "[A-Za-z$_][0-9A-Za-z$_]*", Qd = [
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
], e1 = [
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
], i1 = [
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
], a1 = [].concat(
  n1,
  t1,
  r1
);
function w2(r) {
  const e = r.regex, t = (E, { after: te }) => {
    const Oe = "</" + E[0].slice(1);
    return E.input.indexOf(Oe, te) !== -1;
  }, n = ca, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (E, te) => {
      const Oe = E[0].length + E.index, Ve = E.input[Oe];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ve === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ve === ","
      ) {
        te.ignoreMatch();
        return;
      }
      Ve === ">" && (t(E, { after: Oe }) || te.ignoreMatch());
      let Be;
      const We = E.input.substring(Oe);
      if (Be = We.match(/^\s*=/)) {
        te.ignoreMatch();
        return;
      }
      if ((Be = We.match(/^\s+extends\s+/)) && Be.index === 0) {
        te.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: ca,
    keyword: Qd,
    literal: e1,
    built_in: a1,
    "variable.language": i1
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
  }, O = {
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
  const Y = [].concat(O, m.contains), re = Y.concat([
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
    contains: re
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
  }, de = {
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
  }, Ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ye(E) {
    return e.concat("(?!", E.join("|"), ")");
  }
  const H = {
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
  }, B = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", j = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(B)
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
    exports: { PARAMS_CONTAINS: re, CLASS_REFERENCE: de },
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
      O,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      de,
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
          O,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: B,
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
                    contains: re
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
      H,
      Ne,
      G,
      oe,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function x2(r) {
  const e = r.regex, t = w2(r), n = ca, i = [
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
    $pattern: ca,
    keyword: Qd.concat(l),
    literal: e1,
    built_in: a1.concat(i),
    "variable.language": i1
  }, h = {
    className: "meta",
    begin: "@" + n
  }, f = (T, I, z) => {
    const O = T.contains.findIndex((W) => W.label === I);
    if (O === -1)
      throw new Error("can not find mode to replace");
    T.contains.splice(O, 1, z);
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
function s1(r) {
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
const gm = "0.0.38", y2 = _.ValueIsTextline, o1 = {
  h: ln,
  Fragment: Mn,
  render: sn,
  createContext: eu,
  createElement: ln,
  cloneElement: Qc,
  createRef: mh,
  toChildArray: z0,
  createPortal: du,
  memo: Ch,
  forwardRef: $h,
  useId: au,
  useRef: Fe,
  useState: Ze,
  useReducer: nu,
  useEffect: Xt,
  useLayoutEffect: kh,
  useCallback: qt,
  useMemo: F0,
  useContext: iu,
  useErrorBoundary: Ys
}, { fromLocalTo: k2, fromViewportTo: S2, fromDocumentTo: _2 } = Hh;
Fn.registerLanguage("css", d2);
Fn.registerLanguage("javascript", g2);
Fn.registerLanguage("java", b2);
Fn.registerLanguage("json", v2);
Fn.registerLanguage("typescript", x2);
Fn.registerLanguage("html", s1);
Fn.registerLanguage("xml", s1);
const _r = Symbol("Script"), dn = Symbol("View"), Na = Symbol("isProxy"), Ma = Symbol("rerender"), Bn = Symbol("Console"), ui = Symbol("Console_CharCount"), di = Symbol("Console_LineCount"), l1 = ["left-width", "left-right", "width-right"], c1 = ["top-height", "top-bottom", "height-bottom"], bm = [
  "thin",
  "extra-light",
  "light",
  "normal",
  "medium",
  "semi-bold",
  "bold",
  "extra-bold",
  "heavy"
], C2 = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  heavy: 900
}, vm = ["normal", "italic"], A2 = ["none", "underline", "overline", "line-through"], $2 = ["solid", "double", "dotted", "dashed", "wavy"], wm = ["left", "center", "right", "justify"], I2 = ["normal", "contain", "cover", "fill", "tile"], T2 = [
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
], xm = [
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
], N2 = ["visible", "hidden", "scroll", "auto"];
function Ln(r) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);
  if (e == null)
    throw new Error(r);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function ym(r) {
  Ln(
    "ReadOnlyProperty: property " + _.quoted(r) + " must not be set"
  );
}
const M2 = /^[a-z$_][a-z$_0-9]*$/i;
function u1(r) {
  return _.ValueIsStringMatching(r, M2);
}
const E2 = _.ValidatorForClassifier(
  u1,
  _.acceptNil,
  "BC identifier"
), km = E2, z2 = _.ValidatorForClassifier(
  u1,
  _.rejectNil,
  "BC identifier"
), Sm = z2;
function Si(r) {
  return _.ValueIsString(r) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(r);
}
const R2 = _.ValidatorForClassifier(
  Si,
  _.acceptNil,
  "name"
), _m = R2, Ao = _.ValidatorForClassifier(
  Si,
  _.rejectNil,
  "name"
), Cm = Ao;
function ir(r) {
  return _.ValueIsFiniteNumber(r);
}
const O2 = _.ValidatorForClassifier(
  ir,
  _.acceptNil,
  "BC coordinate"
), Am = O2, B2 = _.ValidatorForClassifier(
  ir,
  _.rejectNil,
  "BC coordinate"
), $m = B2;
function Cr(r) {
  return _.ValueIsFiniteNumber(r) && r >= 0;
}
const L2 = _.ValidatorForClassifier(
  Cr,
  _.acceptNil,
  "BC dimension"
), Im = L2, D2 = _.ValidatorForClassifier(
  Cr,
  _.rejectNil,
  "BC dimension"
), Tm = D2;
function d1(r) {
  return _.ValueIsPlainObject(r) && ir(r.x) && ir(r.y);
}
const F2 = _.ValidatorForClassifier(
  d1,
  _.acceptNil,
  "BC position"
), Nm = F2, P2 = _.ValidatorForClassifier(
  d1,
  _.rejectNil,
  "BC position"
), Mm = P2;
function h1(r) {
  return _.ValueIsPlainObject(r) && Cr(r.Width) && Cr(r.Height);
}
const V2 = _.ValidatorForClassifier(
  h1,
  _.acceptNil,
  "BC size"
), Em = V2, H2 = _.ValidatorForClassifier(
  h1,
  _.rejectNil,
  "BC size"
), zm = H2;
function f1(r) {
  return _.ValueIsPlainObject(r) && ir(r.x) && Cr(r.Width) && ir(r.y) && Cr(r.Height);
}
const q2 = _.ValidatorForClassifier(
  f1,
  _.acceptNil,
  "BC geometry"
), Rm = q2, W2 = _.ValidatorForClassifier(
  f1,
  _.rejectNil,
  "BC geometry"
), Om = W2;
function p1(r) {
  if (!_.ValueIsPlainObject(r))
    return !1;
  for (let e in r)
    if (r.hasOwnProperty(e))
      switch (e) {
        case "x":
        case "y":
          if (r[e] != null && !ir(r[e]))
            return !1;
          break;
        case "Width":
        case "Height":
          if (r[e] != null && !Cr(r[e]))
            return !1;
          break;
        default:
          return !1;
      }
  return !0;
}
_.ValidatorForClassifier(
  p1,
  _.acceptNil,
  "BC geometry"
);
_.ValidatorForClassifier(
  p1,
  _.rejectNil,
  "BC geometry"
);
function $o(r) {
  return _.ValueIsList(r) && r.length === 2 && _.ValueIsOneOf(r[0], l1) && _.ValueIsOneOf(r[1], c1);
}
const U2 = _.ValidatorForClassifier(
  $o,
  _.acceptNil,
  "BC anchors list"
), Bm = U2, G2 = _.ValidatorForClassifier(
  $o,
  _.rejectNil,
  "BC anchors list"
), Lm = G2;
function Io(r) {
  return _.ValueIsListSatisfying(r, _.ValueIsFiniteNumber) && r.length === 4;
}
const j2 = _.ValidatorForClassifier(
  Io,
  _.acceptNil,
  "BC offsets list"
), Dm = j2, K2 = _.ValidatorForClassifier(
  Io,
  _.rejectNil,
  "BC offsets list"
), Fm = K2;
function m1(r) {
  return r === "none" || _.ValueIsObject(r) && _.ValueIsBoolean(r.isActive) && _.ValueIsOneOf(r.Line, A2) && (r.Color == null || _.ValueIsColor(r.Color)) && (r.Style == null || _.ValueIsOneOf(r.Style, $2)) && (r.Thickness == null || Cr(r.Thickness));
}
const Z2 = _.ValidatorForClassifier(
  m1,
  _.acceptNil,
  "text decoration"
), Pm = Z2, X2 = _.ValidatorForClassifier(
  m1,
  _.rejectNil,
  "text decoration"
), Vm = X2;
function g1(r) {
  return r === "none" || _.ValueIsObject(r) && _.ValueIsBoolean(r.isActive) && ir(r.xOffset) && ir(r.yOffset) && Cr(r.BlurRadius) && _.ValueIsColor(r.Color);
}
const J2 = _.ValidatorForClassifier(
  g1,
  _.acceptNil,
  "text shadow specification"
), Hm = J2, Y2 = _.ValidatorForClassifier(
  g1,
  _.rejectNil,
  "text shadow specification"
), qm = Y2;
function b1(r) {
  return r === "none" || _.ValueIsObject(r) && _.ValueIsBoolean(r.isActive) && _.ValueIsURL(r.ImageURL) && _.ValueIsOneOf(r.Mode, I2) && ir(r.xOffset) && ir(r.yOffset);
}
const Q2 = _.ValidatorForClassifier(
  b1,
  _.acceptNil,
  "background texture"
), Wm = Q2, e5 = _.ValidatorForClassifier(
  b1,
  _.rejectNil,
  "background texture"
), Um = e5;
function v1(r) {
  return _.ValueIsOneOf(r, T2);
}
const t5 = _.ValidatorForClassifier(
  v1,
  _.acceptNil,
  "widget border style"
), Gm = t5, r5 = _.ValidatorForClassifier(
  v1,
  _.rejectNil,
  "widget border style"
), jm = r5;
function w1(r) {
  return r === "none" || _.ValueIsObject(r) && _.ValueIsBoolean(r.isActive) && ir(r.xOffset) && ir(r.yOffset) && Cr(r.BlurRadius) && Cr(r.SpreadRadius) && _.ValueIsColor(r.Color);
}
const n5 = _.ValidatorForClassifier(
  w1,
  _.acceptNil,
  "widget box shadow specification"
), Km = n5, i5 = _.ValidatorForClassifier(
  w1,
  _.rejectNil,
  "widget box shadow specification"
), Zm = i5;
function x1(r) {
  return _.ValueIsListSatisfying(
    r,
    (e) => _.ValueIsOneOf(e, N2),
    2,
    2
  );
}
const a5 = _.ValidatorForClassifier(
  x1,
  _.acceptNil,
  "BC overflow list"
), Xm = a5, s5 = _.ValidatorForClassifier(
  x1,
  _.rejectNil,
  "BC overflow list"
), Jm = s5;
function To(r) {
  return Ds(r, /* @__PURE__ */ new WeakSet());
}
function Ds(r, e) {
  switch (!0) {
    case r == null:
    // deliberately also allows undefined
    case _.ValueIsBoolean(r):
    case _.ValueIsNumber(r):
    case _.ValueIsString(r):
      return !0;
    case _.ValueIsArray(r):
      if (e.has(r))
        return !1;
      e.add(r);
      for (let t of r)
        if (!Ds(t, e))
          return !1;
      return e.delete(r), !0;
    case _.ValueIsPlainObject(r):
      if (e.has(r))
        return !1;
      e.add(r);
      for (let t in r)
        if (r.hasOwnProperty(t) && !Ds(r[t], e))
          return !1;
      return e.delete(r), !0;
  }
  return !1;
}
const o5 = _.ValidatorForClassifier(
  To,
  _.acceptNil,
  "serializable value"
), Ym = o5, l5 = _.ValidatorForClassifier(
  To,
  _.rejectNil,
  "serializable value"
), Qm = l5;
function y1(r) {
  if (_.ValueIsPlainObject(r)) {
    for (let e in r)
      if (r.hasOwnProperty(e) && !To(r[e]))
        return !1;
    return !0;
  } else
    return !1;
}
const c5 = _.ValidatorForClassifier(
  y1,
  _.acceptNil,
  "serializable object"
), eg = c5, u5 = _.ValidatorForClassifier(
  y1,
  _.rejectNil,
  "serializable object"
), tg = u5;
function rg(r, e) {
  const t = e == null ? _.ValueIsTextline : (n) => _.ValueIsStringMatching(n, e);
  return _.ValueIsListSatisfying(r, t);
}
function d5(r, e, t) {
  return e == null ? e : f5(r, e, t);
}
const ng = d5;
function h5(r, e, t) {
  if (e == null)
    Ln(`MissingArgument: no ${_.escaped(r)} given`);
  else {
    const n = t == null ? _.ValueIsTextline : (i) => _.ValueIsStringMatching(i, t);
    if (_.ValueIsListSatisfying(e, n))
      return e;
    Ln(`InvalidArgument: the given value is no ${_.escaped(r)}`);
  }
}
const f5 = h5;
function ig(r, e, t, n, i) {
  const a = e == null && t == null ? _.ValueIsNumber : (s) => _.ValueIsNumberInRange(s, e, t, n, i);
  return _.ValueIsListSatisfying(r, a);
}
function p5(r, e, t, n, i, a) {
  return e == null ? e : g5(r, e, t, n, i, a);
}
const ag = p5;
function m5(r, e, t, n, i, a) {
  if (e == null)
    Ln(`MissingArgument: no ${_.escaped(r)} given`);
  else {
    const s = t == null && n == null ? _.ValueIsNumber : (o) => _.ValueIsNumberInRange(o, t, n, i, a);
    if (_.ValueIsListSatisfying(e, s))
      return e;
    Ln(`InvalidArgument: the given value is no ${_.escaped(r)}`);
  }
}
const g5 = m5;
function sg(r, e, t) {
  const n = e == null && t == null ? _.ValueIsInteger : (i) => _.ValueIsIntegerInRange(i, e, t);
  return _.ValueIsListSatisfying(r, n);
}
function b5(r, e, t, n) {
  return e == null ? e : w5(r, e, t, n);
}
const og = b5;
function v5(r, e, t, n) {
  if (e == null)
    Ln(`MissingArgument: no ${_.escaped(r)} given`);
  else {
    const i = t == null && n == null ? _.ValueIsInteger : (a) => _.ValueIsIntegerInRange(a, t, n);
    if (_.ValueIsListSatisfying(e, i))
      return e;
    Ln(`InvalidArgument: the given value is no ${_.escaped(r)}`);
  }
}
const w5 = v5;
function lg(r, e) {
  if (_.expectFunction("Validator", e), e(r) === !0)
    return r;
}
function cg(r) {
  switch (!0) {
    case _.ValueIsBoolean(r):
      return r;
    case r === "false":
      return !1;
    case r === "true":
      return !0;
  }
}
function ug(r) {
  if (_.ValueIsNumber(r) || _.ValueIsString(r) && (r = parseFloat(r), !isNaN(r)))
    return r;
}
function dg(r, e, t, n, i) {
  if (!(_.ValueIsString(r) && (r = parseFloat(r), isNaN(r))) && _.ValueIsNumberInRange(r, e, t, n, i))
    return r;
}
function hg(r) {
  if (_.ValueIsInteger(r))
    return r;
  if (_.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), _.ValueIsInteger(r))
      return r;
  }
}
function fg(r, e, t) {
  if (_.ValueIsString(r)) {
    const n = r.trim();
    if (r = n === "" ? NaN : Number(n), !_.ValueIsNumber(r))
      return;
  }
  if (_.ValueIsIntegerInRange(r, e, t))
    return r;
}
function pg(r) {
  if (_.ValueIsOrdinal(r))
    return r;
  if (_.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), _.ValueIsOrdinal(r))
      return r;
  }
}
function mg(r) {
  if (_.ValueIsCardinal(r))
    return r;
  if (_.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), _.ValueIsCardinal(r))
      return r;
  }
}
function gg(r) {
  if (_.ValueIsString(r))
    return r;
}
function bg(r, e) {
  if (_.ValueIsStringMatching(r, e))
    return r;
}
function vg(r) {
  if (_.ValueIsText(r))
    return r;
}
function wg(r) {
  if (_.ValueIsTextline(r))
    return r;
}
function xg(r) {
  if (_.ValueIsFunction(r))
    return r;
}
function yg(r) {
  if (_.ValueIsColor(r))
    return r;
}
function kg(r) {
  if (_.ValueIsEMailAddress(r))
    return r;
}
function Sg(r) {
  if (y2(r))
    return r;
}
function _g(r) {
  if (_.ValueIsURL(r))
    return r;
}
function Cg(r) {
  if (Si(r))
    return r;
}
function Ag(r) {
  if (Si(r) || _.ValueIsOrdinal(r))
    return r;
}
let ua = 0;
function Or(r) {
  return ua += 1, `bc-${r}-${ua}`;
}
function k1(r) {
  r > ua && (ua = r);
}
function $g(r) {
  return Ao("name", r), S1(r);
}
function S1(r) {
  return r.replaceAll(".", "-");
}
function x5(r, e, t = !1) {
  Ao("stylesheet name", r), _.expectText("stylesheet", e), _.expectBoolean("mode flag", t);
  const n = "BC-Stylesheet-for-" + S1(r);
  let i = document.head.querySelector('style[id="' + n + '"]');
  i == null ? (i = document.createElement("style"), i.id = n, i.textContent = e, document.head.append(i)) : t ? i.textContent = e : console.warn('multiple definitions for stylesheet "' + r + '"');
}
const Ig = "\\d{2}:\\d{2}", y5 = /\d{2}:\d{2}/;
function Tg(r) {
  return _.ValueIsStringMatching(r, y5);
}
const Ng = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", k5 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function Mg(r) {
  return _.ValueIsStringMatching(r, k5);
}
const Eg = "\\d{4}-\\d{2}-\\d{2}", S5 = /\d{4}-\d{2}-\d{2}/;
function zg(r) {
  return _.ValueIsStringMatching(r, S5);
}
const Rg = "\\d{4}-W\\d{2}", _5 = /\d{4}-W\d{2}/;
function Og(r) {
  return _.ValueIsStringMatching(r, _5);
}
const Bg = "\\d{4}-\\d{2}", C5 = /\d{4}-\d{2}/;
function Lg(r) {
  return _.ValueIsStringMatching(r, C5);
}
const Dg = [
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
], A5 = /* @__PURE__ */ Object.create(null);
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
  (r) => A5[r] = !0
);
const No = 105e4, Mo = 2e4;
function da(r) {
  r[Bn] = "", r[Ma]();
}
function $5(r, e) {
  _1(r, C1(e)), r[Ma]();
}
function I5(r, e) {
  _1(r, C1(e, !0)), r[Ma]();
}
function _1(r, e) {
  if (e.length === 0)
    return;
  let t = zc(e), n = e.length;
  t > (r.Console_LineLimit ?? Mo) || n > (r.Console_CharLimit ?? No) ? (da(r), e = N5(e, r, t, n), r[di] = zc(e) + 1, r[ui] = e.length, r[Bn] = e) : (T5(r, t, n), r[di] += t, r[ui] += n, r[Bn] += e);
}
function T5(r, e, t) {
  let n = r[di] + e - (r.Console_LineLimit ?? Mo), i = r[ui] + t - (r.Console_CharLimit ?? No);
  if (n <= 0 && i <= 0)
    return;
  let a = r[Bn];
  for (let s = 0, o = -1; ; ) {
    if (o = a.indexOf(`
`, o + 1), o < 0) {
      da(r);
      return;
    }
    if (s += 1, s >= n && o - s * 28 >= i) {
      r[Bn] = a.slice(o + 1);
      return;
    }
  }
}
function N5(r, e, t, n) {
  let i = t - e.Console_LineLimit, a = n - e.Console_CharLimit;
  for (let s = 0, o = -1; ; ) {
    if (o = r.indexOf(`
`, o + 1), o < 0)
      return r;
    if (s += 1, s >= i && o >= a)
      return r.slice(o + 1);
  }
}
function zc(r) {
  let e = r.match(/\n/g);
  return e === null ? 0 : e.length;
}
function C1(r, e = !1) {
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
function ns(r) {
  return E5(() => {
    const { ErrorToShow: e } = r;
    return Z`<div class="bc-error-indicator" onClick=${() => {
      console.warn(e), window.alert(M5(e));
    }}/>`;
  });
}
x5("bc-error-indicator", `
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
function M5(r) {
  return `${r.Title}

${r.Message}`;
}
function Fs(r) {
  const [e] = Ys();
  if (e != null) {
    console.warn("[BrowserCard] render error:", e);
    const t = (e == null ? void 0 : e.message) ?? String(e);
    return Z`<div class="bc-error-indicator" title=${"render error: " + t}/>`;
  }
  return r.children;
}
const Fg = ["portrait", "landscape", "any"];
function E5(r) {
  _.expectFunction("rendering function", r);
  const [e, t] = Ys(), [n, i] = Ze(void 0);
  function a() {
    i(void 0), t();
  }
  if (e != null)
    return console.warn("rendering error caught by preact: " + e), Z`<${ns} error=${e} resetError=${a}/>`;
  if (n != null)
    return Z`<${ns} error=${n} resetError=${a}/>`;
  try {
    return r();
  } catch (s) {
    return console.warn("rendering error: " + s), i(s), Z`<${ns} error=${s} resetError=${a}/>`;
  }
}
const Ps = 800, Vs = 600, z5 = `
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
let ii = 0, Hs = !1;
function R5() {
  return ii > 0;
}
function Eo(r) {
  return r != null && typeof r == "object" && r[Na] === !0;
}
function r0(r) {
  if (ii > 0) {
    Hs || (Hs = !0, console.warn(
      '[BrowserCard] a reactive property was changed inside a render handler - the extra re-render was suppressed to prevent an infinite render loop. Move such writes into on("ready") or an event handler, or change the value only when it really differs.'
    ));
    return;
  }
  r();
}
var wr, pi, e0, I0, ma, mi, ga, A1, gi, t0, T0;
const St = class St {
  constructor() {
    rt(this, wr, /* @__PURE__ */ new Map());
    /**** linkToParent — registers a provider of the next Visual up the hierarchy ****/
    //    the provider is evaluated lazily (on every "triggered" call), so the parent
    //    Instance need not exist yet at the time the link is established
    rt(this, gi, null);
    /**** after/every — timers which are cleared automatically on teardown ****/
    rt(this, t0, /* @__PURE__ */ new Set());
    rt(this, T0, /* @__PURE__ */ new Set());
  }
  /**** on — registers a message handler (called from within a script) ****/
  on(e, t) {
    R(this, wr).set(e, t);
  }
  /**** run — evaluates the script asynchronously; clears old handlers first ****/
  async run(e, t, n) {
    var i;
    if (R(this, wr).clear(), !!(e != null && e.trim()) && !ue(i = St, ga, A1).call(i))
      try {
        await new Function(...t, `return (async () => {
${e}
})()`)(...n);
      } catch (a) {
        console.warn("[BrowserCard] script error:", a);
      }
  }
  linkToParent(e) {
    ze(this, gi, e);
  }
  /**** triggered — invokes the matching handler, bubbling up if none is found ****/
  //    a matching handler is first looked for in the current Visual - if present,
  //    it is called and its result returned. otherwise the search continues (recur-
  //    sively) one level up (widgets search in the active card, cards in the deck).
  //    without any handler the result is "undefined". an exception thrown by a
  //    handler is forwarded to the original trigger
  async triggered(e, ...t) {
    var a;
    const n = R(this, wr).get(e);
    if (n != null)
      return await n(...t);
    const i = (a = R(this, gi)) == null ? void 0 : a.call(this);
    if (i != null)
      return await i.triggered(e, ...t);
  }
  /**** trigger — synonym for "triggered" ****/
  trigger(e, ...t) {
    return this.triggered(e, ...t);
  }
  /**** fireLocal — invokes a local handler only (no bubbling); used for lifecycle ****/
  async fireLocal(e, ...t) {
    const n = R(this, wr).get(e);
    if (n != null)
      try {
        await n(...t);
      } catch (i) {
        console.warn(`[BrowserCard] handler "${e}" error:`, i);
      }
  }
  /**** renderResult — synchronously invokes the 'render' handler ****/
  renderResult() {
    ii++;
    try {
      const e = R(this, wr).get("update");
      if (e != null)
        try {
          e();
        } catch (n) {
          console.warn("[BrowserCard] update handler error:", n);
        }
      const t = R(this, wr).get("render");
      if (t == null)
        return null;
      try {
        return t();
      } catch (n) {
        return console.warn("[BrowserCard] render handler error:", n), null;
      }
    } finally {
      ii--, ii === 0 && (Hs = !1);
    }
  }
  after(e, t) {
    const n = setTimeout(() => {
      R(this, t0).delete(n), t();
    }, e);
    return R(this, t0).add(n), n;
  }
  every(e, t) {
    const n = setInterval(t, e);
    return R(this, T0).add(n), n;
  }
  /**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/
  async teardown() {
    const e = R(this, wr).get("obsolete");
    R(this, wr).clear();
    const t = [...R(this, t0)];
    R(this, t0).clear();
    const n = [...R(this, T0)];
    if (R(this, T0).clear(), t.forEach((i) => clearTimeout(i)), n.forEach((i) => clearInterval(i)), e != null)
      try {
        await e();
      } catch (i) {
        console.warn('[BrowserCard] handler "obsolete" error:', i);
      }
  }
};
wr = new WeakMap(), pi = new WeakMap(), e0 = new WeakMap(), I0 = new WeakMap(), ma = new WeakMap(), mi = new WeakMap(), ga = new WeakSet(), A1 = function() {
  const e = Date.now();
  return e - R(St, pi) > R(St, mi) && (ze(St, pi, e), ze(St, e0, 0), ze(St, I0, !1)), Ra(St, e0)._++, R(St, e0) > R(St, ma) ? (R(St, I0) || (ze(St, I0, !0), console.warn(
    "[BrowserCard] runaway script loop detected (" + R(St, e0) + " script runs within " + R(St, mi) + ' ms) - script execution was suspended to keep the app responsive. A script is most likely changing state during render or on("ready") in a way that re-triggers itself.'
  )), !0) : !1;
}, gi = new WeakMap(), t0 = new WeakMap(), T0 = new WeakMap(), rt(St, ga), /**** runaway-loop circuit breaker ****/
//    A script that changes state during render/'ready' can make the host
//    re-render or remount the Visual, which re-runs the script - an infinite
//    loop that freezes the tab (each remount even creates a fresh instance, so a
//    per-instance guard cannot see it). We cannot interrupt a synchronous loop,
//    but we CAN stop feeding it: if scripts are (re-)run far more often than any
//    legitimate deck would in a short window, we suspend execution for the rest
//    of that window and warn once. Normal mounts/edits run a script only a
//    handful of times, so the threshold is never reached in healthy use.
rt(St, pi, 0), rt(St, e0, 0), rt(St, I0, !1), rt(St, ma, 1e3), rt(St, mi, 1e3);
let L0 = St;
const _i = /* @__PURE__ */ new Map();
function O5(r, e) {
  return /^https?:\/\//i.test(r) ? r : r.startsWith("/") ? window.location.origin + r : r.includes("/") || r.includes(".") ? new URL(r, window.location.href).href : `https://rozek.github.io/browser-card/behaviors/${e === "deck" ? "decks" : e === "card" ? "cards" : "widgets"}/${r}.js`;
}
function ha(r, e, t, n) {
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
      const z = _i.get(I);
      if (z != null) {
        await z(f);
        return;
      }
      const W = await import(O5(I, t));
      if (typeof W.default == "function") {
        const Y = {};
        m.forEach((re, M) => {
          Y[re] = v[M];
        }), await W.default(Y);
      }
    } catch (z) {
      throw k = !1, z;
    }
  }
  return v[v.length - 1] = T, { Params: m, Args: v };
}
function is(r, e, t, n, i, a, s, o) {
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
      return m == null && Ln(
        "NoSuchBehavior: no local behavior named " + _.quoted(f) + " has been defined"
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
    html: Z,
    // intentionally lowercase (see BC_ScriptContext)
    preact: o1
  };
}
const B5 = `{"Id":"bc-deck-229","Name":"BrowserCard-Pitch","readOnly":false,"swipeToAdjacentCard":true,"Script":"","Cards":[{"Id":"bc-card-230","Name":"Card 1","Color":null,"Alpha":1,"dontSearch":false,"Script":"","Widgets":[{"Id":"bc-widget-231","Name":"TitleView 2","Number":1,"Type":"generic","zIndex":1,"Anchors":["left-width","top-height"],"Offsets":[10,150,10,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"BrowserCard"},{"Id":"bc-widget-232","Name":"Label 2","Number":2,"Type":"generic","zIndex":2,"Anchors":["left-width","top-height"],"Offsets":[10,360,50,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"Play with Code and Data directly in the Browser"},{"Id":"bc-widget-233","Name":"StickyTextNote 2","Number":3,"Type":"generic","zIndex":3,"Anchors":["left-width","top-height"],"Offsets":[10,100,90,70],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/StickyTextNote.js')","Configuration":{},"Value":"Hello, World!"},{"Id":"bc-widget-234","Name":"TextView 2","Number":4,"Type":"generic","zIndex":4,"Anchors":["left-width","top-height"],"Offsets":[120,150,80,80],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"at first, it looks like yet another tool for \\"sticky notes\\", but..."},{"Id":"bc-widget-235","Name":"TextView 3","Number":5,"Type":"generic","zIndex":5,"Anchors":["left-width","top-height"],"Offsets":[10,160,170,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"you can add arbitrary media, such as images..."},{"Id":"bc-widget-236","Name":"Widget 2","Number":6,"Type":"generic","zIndex":6,"Anchors":["left-width","top-height"],"Offsets":[180,40,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"w","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-237","Name":"ImageView 2","Number":7,"Type":"generic","zIndex":7,"Anchors":["left-width","top-height"],"Offsets":[10,100,230,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/ImageView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://rozek.github.io/browser-card/dist/img/Mandelbrot_240x240.png"},{"Id":"bc-widget-238","Name":"TextView 4","Number":8,"Type":"generic","zIndex":8,"Anchors":["left-width","top-height"],"Offsets":[120,160,290,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...complete web pages..."},{"Id":"bc-widget-239","Name":"Widget 3","Number":9,"Type":"generic","zIndex":9,"Anchors":["left-width","top-height"],"Offsets":[120,40,250,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"s","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-240","Name":"TextView 5","Number":10,"Type":"generic","zIndex":10,"Anchors":["left-width","top-height"],"Offsets":[160,140,230,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...dynamic content..."},{"Id":"bc-widget-241","Name":"WebView 2","Number":11,"Type":"generic","zIndex":11,"Anchors":["left-width","top-height"],"Offsets":[10,330,350,240],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/WebView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://www.rozek.de"},{"Id":"bc-widget-242","Name":"Widget 4","Number":12,"Type":"generic","zIndex":12,"Anchors":["left-width","top-height"],"Offsets":[290,30,230,110],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-243","Name":"SubtitleView 2","Number":13,"Type":"generic","zIndex":13,"Anchors":["left-width","top-height"],"Offsets":[270,100,200,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/SubtitleView.js')\\n\\non('ready', () => {\\n  const padded = (n) => String(n).padStart(2,'0')\\n  function updateClock () {\\n    const now = new Date()\\n    my.Value = (\\n      padded(now.getHours())   + ':' + \\n      padded(now.getMinutes()) + ':' + \\n      padded(now.getSeconds())\\n    )\\n  }\\n  updateClock()                          // show immediately, then keep current\\n  every(1000, updateClock)\\n})","Configuration":{},"Value":"08:23:07"},{"Id":"bc-widget-244","Name":"Widget 5","Number":14,"Type":"generic","zIndex":14,"Anchors":["left-width","top-height"],"Offsets":[300,60,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"e","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-245","Name":"TextView 6","Number":15,"Type":"generic","zIndex":15,"Anchors":["left-width","top-height"],"Offsets":[370,170,140,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...and even input controls!"},{"Id":"bc-widget-246","Name":"TextlineInput 2","Number":16,"Type":"generic","zIndex":16,"Anchors":["left-width","top-height"],"Offsets":[370,170,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeTextlineInput.js')\\n\\nmy.Value = undefined\\n\\non('update', () => {\\n  my.Value = my.Card.QRCodeValue\\n})\\n\\non('change', (Value) => {\\n  my.Card.QRCodeValue = Value\\n})\\n","Configuration":{"Placeholder":"(enter text for QR code)"},"Value":""},{"Id":"bc-widget-247","Name":"Widget 6","Number":17,"Type":"generic","zIndex":17,"Anchors":["left-width","top-height"],"Offsets":[370,30,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-248","Name":"TextView 7","Number":18,"Type":"generic","zIndex":18,"Anchors":["left-width","top-height"],"Offsets":[400,160,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Widgets automatically react on state changes"},{"Id":"bc-widget-249","Name":"Widget 7","Number":19,"Type":"generic","zIndex":19,"Anchors":["left-width","top-height"],"Offsets":[550,50,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"e","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-250","Name":"TextView 8","Number":20,"Type":"generic","zIndex":20,"Anchors":["left-width","top-height"],"Offsets":[370,210,280,120],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Use scripting to freely experiment with code and data - a bit like a 2D REPL or like interactive computing notebooks (without the need for a server)"},{"Id":"bc-widget-251","Name":"Widget 8","Number":21,"Type":"generic","zIndex":21,"Anchors":["left-width","top-height"],"Offsets":[370,30,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-252","Name":"TextView 9","Number":22,"Type":"generic","zIndex":22,"Anchors":["left-width","top-height"],"Offsets":[400,140,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Craft complete tools, if you like"},{"Id":"bc-widget-253","Name":"TitleView 3","Number":23,"Type":"generic","zIndex":23,"Anchors":["left-width","top-height"],"Offsets":[360,250,470,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"Temperature Converter"},{"Id":"bc-widget-254","Name":"Label 3","Number":24,"Type":"generic","zIndex":24,"Anchors":["left-width","top-height"],"Offsets":[370,100,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Celsius:"},{"Id":"bc-widget-255","Name":"Label 4","Number":25,"Type":"generic","zIndex":25,"Anchors":["left-width","top-height"],"Offsets":[370,100,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Fahrenheit:"},{"Id":"bc-widget-256","Name":"NumberInput 2","Number":26,"Type":"generic","zIndex":26,"Anchors":["left-width","top-height"],"Offsets":[470,120,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = my.Card.Temperature ?? 0\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = Value\\n})","Configuration":{},"Value":5},{"Id":"bc-widget-257","Name":"NumberInput 3","Number":27,"Type":"generic","zIndex":27,"Anchors":["left-width","top-height"],"Offsets":[470,120,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = (my.Card.Temperature ?? 0) * 9/5 + 32\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = (Value-32) * 5/9\\n})","Configuration":{},"Value":41},{"Id":"bc-widget-258","Name":"Widget","Number":28,"Type":"generic","zIndex":28,"Anchors":["left-width","top-height"],"Offsets":[610,80,480,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-259","Name":"TextView 10","Number":29,"Type":"generic","zIndex":29,"Anchors":["left-width","top-height"],"Offsets":[590,200,380,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Now export your work as a self-contained web page and BrowserCard serves as a low-code application generator!"},{"Id":"bc-widget-260","Name":"Widget-2","Number":30,"Type":"generic","zIndex":30,"Anchors":["left-width","top-height"],"Offsets":[610,160,150,160],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/QRCodeView.js')\\n\\nconst DefaultValue = 'https://github.com/rozek/browser-card'\\n\\nmy.Value = DefaultValue\\n\\non('update', () => {\\n  const Value = my.Card.QRCodeValue\\n  my.Value = (Value == null) || (Value === '') ? DefaultValue : Value\\n})\\n","Configuration":{"ErrorCorrection":"M","Border":4,"Color":"#000000","Background":"#ffffff"},"Value":"https://github.com/rozek/browser-card"},{"Id":"bc-widget-261","Name":"Widget 9","Number":31,"Type":"generic","zIndex":31,"Anchors":["left-width","top-height"],"Offsets":[670,30,320,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-262","Name":"HTMLView","Number":32,"Type":"generic","zIndex":32,"Anchors":["left-width","top-height"],"Offsets":[630,120,340,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/HTMLView.js')","Configuration":{},"Value":"<span style=\\"font-weight:bold; font-size:18px\\">Have &nbsp; &nbsp; Fun!</span>"},{"Id":"bc-widget-263","Name":"TextView 11","Number":33,"Type":"generic","zIndex":33,"Anchors":["left-width","top-height"],"Offsets":[530,260,30,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"BrowserCard started as a small test for Anthropic Fable 5 (while it was available for non-US citizens), but soon turned out to be quite useful - try yourself!"},{"Id":"bc-widget-264","Name":"Widget 10","Number":34,"Type":"generic","zIndex":34,"Anchors":["left-width","top-height"],"Offsets":[280,240,70,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"ne","ArrowHeads":"end","Color":"#000000","Thickness":2}}],"Temperature":5,"QRCodeValue":""}],"SnapToGrid":true,"CardWidth":800,"CardHeight":600}`, $1 = JSON.parse(B5), L5 = JSON.stringify($1), Zt = hu("browser-card", "decks"), X0 = "bc-deck:", qs = "bc-remember-deck", fa = "bc-last-deck";
function zo() {
  try {
    return localStorage.getItem(qs) === "1";
  } catch {
    return !1;
  }
}
function D5(r) {
  try {
    zo() && r !== "" && localStorage.setItem(fa, r);
  } catch {
  }
}
function F5(r, e) {
  try {
    r ? (localStorage.setItem(qs, "1"), e !== "" && localStorage.setItem(fa, e)) : (localStorage.removeItem(qs), localStorage.removeItem(fa));
  } catch {
  }
}
function pa(r) {
  return (
    // "Id" is runtime-only - assigned on load
    _.ValueIsPlainObject(r) && _.ValueIsString(r.Type) && $o(r.Anchors) && Io(r.Offsets)
  );
}
function Ea(r) {
  return (
    // "Id" is runtime-only - assigned on load
    _.ValueIsPlainObject(r) && _.ValueIsString(r.Name) && _.ValueIsArray(r.Widgets) && r.Widgets.every(pa) && // optional nested child cards (schema A)
    (r.CardList == null || _.ValueIsArray(r.CardList) && r.CardList.every(Ea))
  );
}
function Nr(r) {
  return _.ValueIsPlainObject(r) && _.ValueIsString(r.Name) && _.ValueIsArray(r.Cards) && r.Cards.length >= 1 && // a deck must have at least one card
  r.Cards.every(Ea);
}
function Nn(r, e = "Card") {
  const t = String(r ?? "").replace(/\//g, "");
  return t === "" ? e : t;
}
function Xe(r) {
  const e = [], t = /* @__PURE__ */ new Set(), n = (i) => {
    if (i != null)
      for (const a of i)
        t.has(a) || (t.add(a), e.push(a), n(a.CardList));
  };
  return n(r.Cards), e;
}
function hi(r) {
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
function Ws(r, e) {
  var t;
  return ((t = hi(r).get(e.Id)) == null ? void 0 : t.Path) ?? e.Name;
}
function vr(r, e) {
  var t;
  if (r.Cards.some((n) => n.Id === e))
    return r.Cards;
  for (const n of Xe(r))
    if ((t = n.CardList) != null && t.some((i) => i.Id === e))
      return n.CardList;
  return null;
}
function I1(r, e, t) {
  var a, s;
  if (t == null)
    return !1;
  if (t === e)
    return !0;
  const n = hi(r);
  let i = t;
  for (; i != null; ) {
    if (i === e)
      return !0;
    i = ((s = (a = n.get(i)) == null ? void 0 : a.Parent) == null ? void 0 : s.Id) ?? null;
  }
  return !1;
}
function T1(r, e, t, n) {
  if (I1(r, e, t))
    return !1;
  const i = vr(r, e);
  if (i == null)
    return !1;
  const a = i.findIndex((d) => d.Id === e);
  if (a < 0)
    return !1;
  let s;
  if (t == null)
    s = r.Cards;
  else {
    const d = Xe(r).find((h) => h.Id === t);
    if (d == null)
      return !1;
    s = d.CardList ?? (d.CardList = []);
  }
  const [o] = i.splice(a, 1), l = Math.max(0, Math.min(s.length, Math.round(n)));
  return s.splice(l, 0, o), !0;
}
const Us = "web application/x-browsercard-card", Gs = "web application/x-browsercard-widget";
async function Rc(r, e) {
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
async function P5() {
  try {
    const r = await navigator.clipboard.read();
    for (const e of r) {
      if (e.types.includes(Us))
        return { Kind: "card", Serialization: await (await e.getType(Us)).text() };
      if (e.types.includes(Gs))
        return { Kind: "widget", Serialization: await (await e.getType(Gs)).text() };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not inspect the clipboard - trying plain text:", r);
  }
  try {
    const r = (await navigator.clipboard.readText()).trim(), e = JSON.parse(r), t = Array.isArray(e) && e.length > 0 && e.every(pa);
    switch (!0) {
      case Ea(e):
        return { Kind: "card", Serialization: r };
      case pa(e):
        return { Kind: "widget", Serialization: r };
      case t:
        return { Kind: "widget", Serialization: r };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not read from the clipboard:", r);
  }
  return null;
}
function V5(r) {
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
const H5 = [
  "x",
  "y",
  "Width",
  "Height",
  "Position",
  "Size",
  "Geometry",
  "changeGeometryTo"
];
function N1(r) {
  var t;
  const e = (n) => {
    var i, a;
    (i = n.Widgets) == null || i.forEach((s) => {
      H5.forEach((o) => {
        delete s[o];
      });
    }), (a = n.CardList) == null || a.forEach(e);
  };
  (t = r.Cards) == null || t.forEach(e);
}
function Hi(r) {
  const e = V5(r);
  return N1(e), e;
}
function q5(r) {
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
function Zn(r) {
  N1(r), q5(r), r.Id = Or("deck"), as(r, "Deck");
  const e = (t) => {
    var n;
    t.Id = Or("card"), as(t, "Card"), t.Widgets.forEach((i) => {
      i.Id = Or("widget"), as(i, "Widget");
    }), (n = t.CardList) == null || n.forEach(e);
  };
  r.Cards.forEach(e);
}
function as(r, e) {
  typeof r.Name == "string" && (r.Name = Nn(r.Name, e));
}
function W5(r) {
  var t, n;
  const e = {};
  if (r.FontFamily && (e.fontFamily = r.FontFamily), r.FontSize != null && (e.fontSize = `${r.FontSize}px`), r.FontWeight && (e.fontWeight = C2[r.FontWeight]), r.FontStyle && (e.fontStyle = r.FontStyle), r.LineHeight != null && (e.lineHeight = `${r.LineHeight}px`), r.ForegroundColor && (e.color = r.ForegroundColor), r.TextAlignment && (e.textAlign = r.TextAlignment), r.Opacity != null && (e.opacity = r.Opacity), r.Cursor && (e.cursor = r.Cursor), (t = r.TextDecoration) != null && t.isActive) {
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
function U5(r) {
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
function Yt(r, e, t, n) {
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
function D0(r, e, t, n, i, a, s) {
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
function G5(r, e, t, n, i) {
  let a = null, s = null, o;
  return new Proxy(r, {
    get(l, d) {
      if (d === Na)
        return !0;
      if (d === _r)
        return s;
      if (d === dn)
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
          const { left: h } = Yt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "y": {
          const { top: h } = Yt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "Width": {
          const { width: h } = Yt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "Height": {
          const { height: h } = Yt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "changeGeometryTo":
          return (h, f, m, v) => {
            const { W: k, H: T } = e.current, { left: I, top: z, width: O, height: W } = Yt(l.Anchors, l.Offsets, k, T), Y = D0(h ?? I, f ?? z, m ?? O, v ?? W, l.Anchors, k, T);
            return l.Offsets = Y, r0(i), Y;
          };
        case "rerender":
          return () => r0(i);
        // re-render this widget
        default:
          return Reflect.get(l, d);
      }
    },
    set(l, d, h) {
      if (d === _r)
        return s = h, !0;
      if (d === dn)
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
      return Eo(h) ? (console.warn(
        "[BrowserCard] cannot assign a Deck/Card/Widget proxy to property " + String(d) + " - ignored (it would create a circular, non-serializable reference)"
      ), !0) : (Object.is(Reflect.get(l, d), h) || (Reflect.set(l, d, h), r0(i)), !0);
    }
  });
}
function j5(r, e, t, n, i) {
  let a = null, s = null, o, l;
  return l = new Proxy(r, {
    get(d, h) {
      if (h === Na)
        return !0;
      if (h === _r)
        return s;
      if (h === dn)
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
          return () => r0(n);
        // re-render this card and its widgets
        case "Index":
          return Xe(e).indexOf(d);
        case "Path":
          return Ws(e, d);
        // name, '/'-joined
        default:
          return Reflect.get(d, h);
      }
    },
    set(d, h, f) {
      return h === _r ? (s = f, !0) : h === dn ? (o = f, !0) : h === "View" || h === "Path" ? !0 : h === "own" ? (a = f, !0) : h === "Index" ? (i == null || i(d, Number(f)), !0) : Eo(f) ? (console.warn(
        "[BrowserCard] cannot assign a Deck/Card/Widget proxy to property " + String(h) + " - ignored (it would create a circular, non-serializable reference)"
      ), !0) : (Object.is(Reflect.get(d, h), f) || (Reflect.set(d, h, f), r0(n)), !0);
    }
  }), l;
}
function K5(r, e, t) {
  let n = null, i = null, a, s = "", o = 0, l = 0, d;
  return d = new Proxy(r, {
    get(h, f) {
      if (f === Na)
        return !0;
      if (f === _r)
        return i;
      if (f === Ma)
        return () => r0(t);
      if (f === dn)
        return a;
      if (f === Bn)
        return s;
      if (f === di)
        return o;
      if (f === ui)
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
          return Reflect.get(h, f) ?? Mo;
        case "Console_CharLimit":
          return Reflect.get(h, f) ?? No;
        default:
          return Reflect.get(h, f);
      }
    },
    set(h, f, m) {
      return f === _r ? (i = m, !0) : f === dn ? (a = m, !0) : f === "View" ? !0 : f === "own" ? (n = m, !0) : f === Bn ? (s = m, !0) : f === di ? (o = m, !0) : f === ui ? (l = m, !0) : Eo(m) ? (console.warn(
        "[BrowserCard] cannot assign a Deck/Card/Widget proxy to property " + String(f) + " - ignored (it would create a circular, non-serializable reference)"
      ), !0) : (Object.is(Reflect.get(h, f), m) || (Reflect.set(h, f, m), r0(t)), !0);
    }
  }), d;
}
function Z5(r, e, t, n) {
  const { left: i, top: a, width: s, height: o } = Yt(r.Anchors, r.Offsets, t, n);
  return {
    left: i,
    top: a,
    width: s,
    height: o,
    zIndex: e,
    // derived from the widget's array position
    display: r.visible ? void 0 : "none",
    ...W5(r),
    ...U5(r)
  };
}
function qi(r, e, t, n, i, a) {
  const s = Math.sqrt(t * t + n * n);
  if (s < 1e-3)
    return "";
  const o = t / s, l = n / s, d = r - i * o, h = e - i * l;
  return `${r},${e} ${d - a * l},${h + a * o} ${d + a * l},${h - a * o}`;
}
function X5(r, e, t) {
  const n = r.BorderColor ?? "#333", i = r.BorderWidth ?? 2, a = r.FillColor ?? "transparent";
  if (r.Variant === "rectangle" || r.Variant === "rounded-rectangle" || r.Variant === "oval") {
    const I = r.Variant === "oval" ? "50%" : r.Variant === "rounded-rectangle" ? `${r.CornerRadius ?? 12}px` : void 0;
    return Z`
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
    const I = Math.max(3, r.Sides ?? 6), z = e / 2, O = t / 2, W = e / 2 - i, Y = t / 2 - i, re = Array.from({ length: I }, (M, G) => {
      const de = 2 * Math.PI * G / I - Math.PI / 2;
      return `${z + W * Math.cos(de)},${O + Y * Math.sin(de)}`;
    }).join(" ");
    return Z`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <polygon points=${re}
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
    const I = s ? Z`<polygon
      points=${qi(0, 0, -e, -t, l, d)} fill=${n} stroke="none"/>` : null, z = o ? Z`<polygon
      points=${qi(e, t, e, t, l, d)} fill=${n} stroke="none"/>` : null;
    return Z`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <line x1="0" y1="0" x2=${e} y2=${t} ...${h}/>
        ${I}${z}
      </svg>
    `;
  }
  const f = r.Curvature ?? 0.4, m = e / 2 - f * t, v = t / 2 + f * e, k = s ? Z`<polygon
    points=${qi(0, 0, -m, -v, l, d)} fill=${n} stroke="none"/>` : null, T = o ? Z`<polygon
    points=${qi(e, t, e - m, t - v, l, d)} fill=${n} stroke="none"/>` : null;
  return Z`
    <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
      <path d=${`M 0 0 Q ${m} ${v} ${e} ${t}`} ...${h}/>
      ${k}${T}
    </svg>
  `;
}
_i.set("button", async ({ on: r, me: e, html: t, trigger: n }) => {
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
_i.set("field", async ({ on: r, me: e, html: t }) => {
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
_i.set("shape", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const i = n.Width ?? 0, a = n.Height ?? 0;
    return t`${X5(n, i, a)}`;
  });
});
_i.set("picture", async ({ on: r, me: e, html: t }) => {
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
function J5({
  Obj: r,
  containerW: e,
  containerH: t,
  makeContext: n,
  deckProxy: i,
  cardProxy: a,
  onWidgetProxy: s,
  onReady: o
}) {
  const [, l] = Ze(0), d = Fe(!1), h = qt(() => {
    d.current || l((ce) => ce + 1);
  }, []), f = Fe(null);
  f.current == null && (f.current = new L0());
  const m = Fe({ W: e, H: t });
  m.current = { W: e, H: t };
  const v = Fe(null);
  v.current == null && (v.current = G5(r, m, i, a, h));
  const k = v.current, T = qt(
    (ce) => {
      k[dn] = ce ?? void 0;
    },
    [k]
  ), I = Fe(o);
  I.current = o;
  const z = Fe(null);
  z.current == null && (z.current = n(k));
  const O = Fe(void 0);
  O.current == null && (O.current = {
    Configuration: r.Configuration ?? {}
  });
  const Y = (/* @__PURE__ */ new Set(["button", "field", "shape", "picture"])).has(r.Type) ? `await behaveLike(${JSON.stringify(r.Type)})
` : "";
  if (Xt(() => {
    const ce = f.current;
    O.current.Configuration = r.Configuration ?? {};
    const { Params: ie, Args: Ne } = ha(ce, z.current, "widget", O.current);
    k[_r] = ce, ce.linkToParent(
      // bubble unhandled events up
      () => a[_r] ?? null
    ), s(r.Id, k);
    const ye = r.Script ?? "";
    let H = !0;
    if (ye.trim() !== "")
      try {
        new Function(`return (async () => {
${ye}
})()`);
      } catch (oe) {
        console.warn("[BrowserCard] syntax error in script of widget " + _.quoted(r.Name) + " - ignored:", oe), H = !1;
      }
    const U = H ? Y + ye : "";
    return ce.run(U, ie, Ne).catch((oe) => {
      console.warn("[BrowserCard] widget script error:", oe);
    }).then(async () => {
      h(), await ce.fireLocal("ready"), I.current(r.Id);
    }), () => {
      ce.teardown();
    };
  }, [r.Script, r.Configuration]), !r.visible)
    return null;
  const re = f.current;
  d.current = !0;
  let M;
  try {
    M = re.renderResult() ?? null;
  } finally {
    d.current = !1;
  }
  const G = r.Type === "shape" || r.Type === "button" ? { overflow: "visible" } : { overflow: "hidden" }, de = a.Widgets.indexOf(r) + 1;
  return Z`
    <div
      ref=${T}
      class=${`bc-widget${r.Type === "shape" ? " bc-shape" : ""}`}
      style=${{ ...Z5(r, de, e, t), ...G }}
    >
      <${Fs} key=${"safe:" + String(r.Script)}>${M}<//>
    </div>
  `;
}
const _0 = 8, Y5 = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#e5e7eb"/><circle cx="55" cy="35" r="10" fill="#9ca3af"/><path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/></svg>'
);
function Yi(r, e, t = " ") {
  const n = /^(.*?)([ -])(\d+)$/.exec(r);
  let i, a, s;
  n != null ? (i = n[1], a = n[2], s = parseInt(n[3], 10)) : (i = r, a = t, s = 1);
  let o = r;
  for (; e.has(o); )
    s += 1, o = `${i}${a}${s}`;
  return o;
}
function Q5(r, e, t, n) {
  const i = {
    button: { BaseName: "Button", Width: 140, Height: 36 },
    field: { BaseName: "Field", Width: 200, Height: 80 },
    shape: { BaseName: "Shape", Width: 140, Height: 100 },
    picture: { BaseName: "Picture", Width: 160, Height: 120 },
    generic: { BaseName: "Widget", Width: 200, Height: 120 }
  }, { BaseName: a, Width: s, Height: o } = i[r], l = new Set(e.Widgets.map((f) => f.Name)), d = Yi(a, l, "-"), h = {
    // appended last ⇒ on top of the stack
    Id: Or("widget"),
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
        ImageData: Y5,
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
function em({
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
  const h = Fe(null), f = Fe(null), m = Fe(null), [v, k] = Ze(null);
  function T(H) {
    const U = Math.min(...H.map((E) => E.left)), oe = Math.min(...H.map((E) => E.top)), B = Math.max(...H.map((E) => E.left + E.width)), j = Math.max(...H.map((E) => E.top + E.height));
    return { left: U, top: oe, width: B - U, height: j - oe };
  }
  function I(H, U, oe, B) {
    if (B.length === 0)
      return;
    H.stopPropagation(), H.preventDefault(), H.currentTarget.setPointerCapture(H.pointerId);
    const j = B.map((E) => ({
      Obj: E,
      Origin: Yt(E.Anchors, E.Offsets, e, t)
    }));
    f.current = {
      PointerId: H.pointerId,
      Mode: U,
      Direction: oe,
      startX: H.clientX,
      startY: H.clientY,
      GroupOrigin: T(j.map((E) => E.Origin)),
      Items: j,
      captured: !1
    };
  }
  function z(H) {
    const U = f.current;
    if (U == null || H.pointerId !== U.PointerId)
      return;
    U.captured || (U.captured = !0, d == null || d());
    let oe = (H.clientX - U.startX) / n, B = (H.clientY - U.startY) / n;
    const j = U.GroupOrigin;
    if (U.Mode === "move") {
      l.isActive && (oe = Math.round((j.left + oe) / l.Width) * l.Width - j.left, B = Math.round((j.top + B) / l.Height) * l.Height - j.top);
      for (const { Obj: E, Origin: te } of U.Items)
        E.Offsets = D0(
          te.left + oe,
          te.top + B,
          te.width,
          te.height,
          E.Anchors,
          e,
          t
        );
    } else {
      const E = U.Direction;
      l.isActive && (E.includes("w") && (oe = Math.round((j.left + oe) / l.Width) * l.Width - j.left), E.includes("e") && (oe = Math.round((j.left + j.width + oe) / l.Width) * l.Width - (j.left + j.width)), E.includes("n") && (B = Math.round((j.top + B) / l.Height) * l.Height - j.top), E.includes("s") && (B = Math.round((j.top + j.height + B) / l.Height) * l.Height - (j.top + j.height)));
      for (const { Obj: te, Origin: Oe } of U.Items) {
        let { left: Ve, top: Be, width: We, height: qe } = Oe;
        E.includes("w") && (Ve += oe, We -= oe), E.includes("e") && (We += oe), E.includes("n") && (Be += B, qe -= B), E.includes("s") && (qe += B), We < _0 && (E.includes("w") && (Ve = Oe.left + Oe.width - _0), We = _0), qe < _0 && (E.includes("n") && (Be = Oe.top + Oe.height - _0), qe = _0), te.Offsets = D0(Ve, Be, We, qe, te.Anchors, e, t);
      }
    }
    o();
  }
  function O(H) {
    const U = f.current;
    U == null || H.pointerId !== U.PointerId || (H.currentTarget.releasePointerCapture(H.pointerId), f.current = null);
  }
  function W(H) {
    const U = h.current;
    if (U == null)
      return null;
    const oe = U.getBoundingClientRect();
    return { x: (H.clientX - oe.left) / n, y: (H.clientY - oe.top) / n };
  }
  function Y(H) {
    if (H.button !== 0)
      return;
    const U = W(H);
    U != null && (H.currentTarget.setPointerCapture(H.pointerId), m.current = {
      PointerId: H.pointerId,
      x0: U.x,
      y0: U.y,
      additive: H.shiftKey || H.metaKey,
      moved: !1,
      box: { left: U.x, top: U.y, width: 0, height: 0 }
    });
  }
  function re(H) {
    const U = m.current;
    if (U == null || H.pointerId !== U.PointerId)
      return;
    const oe = W(H);
    if (oe == null)
      return;
    const B = {
      left: Math.min(U.x0, oe.x),
      top: Math.min(U.y0, oe.y),
      width: Math.abs(oe.x - U.x0),
      height: Math.abs(oe.y - U.y0)
    };
    (B.width > 3 || B.height > 3) && (U.moved = !0), U.box = B, k(B);
  }
  function M(H) {
    const U = m.current;
    if (U == null || H.pointerId !== U.PointerId)
      return;
    if (H.currentTarget.releasePointerCapture(H.pointerId), m.current = null, k(null), !U.moved) {
      U.additive || a(null, !1);
      return;
    }
    const oe = U.box, B = r.filter((j) => {
      const E = Yt(j.Anchors, j.Offsets, e, t);
      return !(E.left > oe.left + oe.width || E.left + E.width < oe.left || E.top > oe.top + oe.height || E.top + E.height < oe.top);
    }).map((j) => j.Id);
    s(B, U.additive);
  }
  const G = r.filter((H) => i.includes(H.Id)), de = Math.max(6, 8 / n), ce = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], ie = G.length > 0 ? T(G.map((H) => Yt(H.Anchors, H.Offsets, e, t))) : null;
  function Ne(H, U) {
    return {
      width: de,
      height: de,
      cursor: H + "-resize",
      left: (H.includes("w") ? 0 : H.includes("e") ? U.width : U.width / 2) - de / 2,
      top: (H.includes("n") ? 0 : H.includes("s") ? U.height : U.height / 2) - de / 2
    };
  }
  const ye = l.isActive ? {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
    backgroundSize: `${l.Width}px ${l.Height}px`
  } : {};
  return Z`
      <div class="bc-edit-layer" ref=${h} style=${ye}
        onPointerDown=${Y}
        onPointerMove=${re}
        onPointerUp=${M}
        onContextMenu=${(H) => H.preventDefault()}>
        ${r.map((H, U) => {
    const oe = Yt(H.Anchors, H.Offsets, e, t);
    return Z`
            <div key=${H.Id}
              class=${`bc-edit-hit${H.visible ? "" : " invisible"}`}
              style=${{ left: oe.left, top: oe.top, width: oe.width, height: oe.height, zIndex: U + 1 }}
              onPointerDown=${(B) => {
      if (B.stopPropagation(), B.shiftKey || B.metaKey) {
        a(H.Id, !0);
        return;
      }
      i.includes(H.Id) ? I(B, "move", "", r.filter((E) => i.includes(E.Id))) : (a(H.Id, !1), I(B, "move", "", [H]));
    }}
              onPointerMove=${z}
              onPointerUp=${O}
              onContextMenu=${(B) => B.preventDefault()}
            ></div>
          `;
  })}
        ${G.length > 1 && G.map((H) => {
    const U = Yt(H.Anchors, H.Offsets, e, t);
    return Z`
            <div key=${"member:" + H.Id} class="bc-selection-member"
              style=${{ left: U.left, top: U.top, width: U.width, height: U.height }}></div>
          `;
  })}
        ${ie != null && Z`
          <div class="bc-selection-frame"
            style=${{ left: ie.left, top: ie.top, width: ie.width, height: ie.height }}>
            ${ce.map((H) => Z`
              <div key=${H} class="bc-handle" style=${Ne(H, ie)}
                onPointerDown=${(U) => I(U, "resize", H, G)}
                onPointerMove=${z}
                onPointerUp=${O}
                onContextMenu=${(U) => U.preventDefault()}
              ></div>
            `)}
          </div>
        `}
        ${v != null && Z`
          <div class="bc-marquee"
            style=${{ left: v.left, top: v.top, width: v.width, height: v.height }}></div>
        `}
      </div>
    `;
}
function tm({
  State: r,
  onClose: e
}) {
  const [t, n] = Ze(() => ({
    x: Math.max(8, Math.round((window.innerWidth - 560) / 2)),
    y: Math.max(8, Math.round((window.innerHeight - 420) / 2)),
    Width: 560,
    Height: 420
  })), i = Fe(r.Value), a = Fe(null);
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
  return Xt(() => {
    function h(f) {
      f.key === "Escape" && (f.stopPropagation(), e()), f.key === "Enter" && (f.metaKey || f.ctrlKey) && (f.stopPropagation(), d());
    }
    return window.addEventListener("keydown", h, !0), () => window.removeEventListener("keydown", h, !0);
  }, []), Z`
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
function rm({
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
    let B = function(E, te) {
      v == null || v(`card:${h.Id}:${E}`), h[E] = E === "Name" ? Nn(te, "Card") : te, i();
    }, j = function(E, te) {
      f != null && (v == null || v(`deck:${E}`), f[E] = te, i());
    };
    return e > 1 ? Z`
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
                ${a.map((E, te) => Z`<option key=${te} value=${String(te)}>${E}</option>`)}
              </select>
            </div>

            <button class="bc-props-btn copy"   onClick=${k}>Copy Widgets</button>
            <button class="bc-props-btn delete" onClick=${o}>Delete Widgets</button>
          </div>
        ` : h == null ? Z`
          <div class="bc-props-panel">
            <div class="bc-props-empty">
              no widget selected<br/><br/>
              click a widget to inspect and edit its properties<br/><br/>
              use "+ New" in the menu bar to create a new widget
            </div>
          </div>
        ` : Z`
        <div class="bc-props-panel">
          <div class="bc-props-title">${h.Name}</div>
          <div class="bc-props-subtitle">card · ${h.Id}</div>
          ${f != null && Ws(f, h).includes("/") ? Z`<div class="bc-props-subtitle">path · ${Ws(f, h)}</div>` : null}
          <div class="bc-props-hint">
            no widget selected - these are the properties of the card itself
          </div>

          <div class="bc-props-section">General</div>
          <div class="bc-props-row">
            <label>Name</label>
            <input type="text" value=${h.Name}
              onInput=${(E) => B("Name", E.target.value)}/>
          </div>
          ${Dc("Color", h.Color ?? "#ffffff00", (E) => B("Color", E))}
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${!h.dontSearch}
              onChange=${(E) => B("dontSearch", !E.target.checked)}/>
          </div>

          ${f != null && Z`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${f.CardWidth ?? 800}
                onInput=${(E) => {
      const te = parseFloat(E.target.value);
      isFinite(te) && te >= 50 && j("CardWidth", te);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${f.CardHeight ?? 600}
                onInput=${(E) => {
      const te = parseFloat(E.target.value);
      isFinite(te) && te >= 50 && j("CardHeight", te);
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
      const te = parseFloat(E.target.value);
      isFinite(te) && te >= 1 && j("GridWidth", te);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${f.GridHeight ?? 10}
                onInput=${(E) => {
      const te = parseFloat(E.target.value);
      isFinite(te) && te >= 1 && j("GridHeight", te);
    }}/>
            </div>

            <div class="bc-props-section">Script (Deck)</div>
            <div class="bc-props-row column">
              <div class="bc-props-rowheader">
                <label>Script</label>
                ${m != null && Z`
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
              ${m != null && Z`
                <button class="bc-props-expand" title="open in editor window"
                  onClick=${() => m(
      `Card "${h.Name}" - Script`,
      h.Script ?? "",
      (E) => B("Script", E)
    )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${!1} defaultValue=${h.Script ?? ""}
              onChange=${(E) => B("Script", E.target.value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `;
  }
  const T = Yt(r.Anchors, r.Offsets, t, n);
  function I(B, j) {
    v == null || v(`prop:${r.Id}:${B}`), r[B] = j, i();
  }
  function z(B, j, E, te) {
    v == null || v(`geo:${r.Id}`), r.Offsets = D0(
      B ?? T.left,
      j ?? T.top,
      E ?? T.width,
      te ?? T.height,
      r.Anchors,
      t,
      n
    ), i();
  }
  function O(B, j) {
    v == null || v(`anchors:${r.Id}`);
    const E = [...r.Anchors];
    E[B] = j, r.Anchors = E, r.Offsets = D0(
      T.left,
      T.top,
      T.width,
      T.height,
      E,
      t,
      n
    ), i();
  }
  function W(B, j) {
    return Z`<input type="number" value=${Math.round(B * 100) / 100}
        onInput=${(E) => {
      const te = parseFloat(E.target.value);
      isFinite(te) && j(te);
    }}/>`;
  }
  function Y(B, j) {
    return Z`<div class="bc-props-row">
        <label>${B}</label>
        <input type="text" value=${r[j] ?? ""}
          onInput=${(E) => I(j, E.target.value)}/>
      </div>`;
  }
  function re(B, j, E = 0) {
    return Z`<div class="bc-props-row">
        <label>${B}</label>
        ${W(
      r[j] ?? E,
      (te) => I(j, te)
    )}
      </div>`;
  }
  function M(B, j) {
    return Z`<div class="bc-props-row">
        <label>${B}</label>
        <input type="checkbox" checked=${!!r[j]}
          onChange=${(E) => I(j, E.target.checked)}/>
      </div>`;
  }
  function G(B, j, E) {
    return Z`<div class="bc-props-row">
        <label>${B}</label>
        <select value=${r[j] ?? E[0]}
          onChange=${(te) => I(j, te.target.value)}>
          ${E.map((te) => Z`<option key=${te} value=${te}>${te}</option>`)}
        </select>
      </div>`;
  }
  function de(B, j, E) {
    const te = r[j] ?? E;
    return Dc(B, te, (Oe) => I(j, Oe));
  }
  const ce = (
    // user-facing name of the widget's type
    r.Type === "generic" ? "custom widget" : r.Type
  );
  function ie(B, j, E) {
    return Z`<div class="bc-props-rowheader">
        <label>${B}</label>
        ${m != null && Z`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => m(
      `${ce} "${r.Name}" - ${B}`,
      j(),
      E
    )}>⤢</button>
        `}
      </div>`;
  }
  function Ne(B, j, E = 4) {
    return Z`<div class="bc-props-row column">
        ${ie(
      B,
      () => String(r[j] ?? ""),
      (te) => I(j, te)
    )}
        <textarea rows=${E} defaultValue=${r[j] ?? ""}
          onInput=${(te) => I(j, te.target.value)}
        ></textarea>
      </div>`;
  }
  function ye(B) {
    try {
      I("Configuration", JSON.parse(B));
    } catch (j) {
      console.warn('[BrowserCard] invalid JSON for "Configuration":', j), window.alert("The given configuration is no valid JSON and was not applied.");
    }
  }
  function H() {
    return Z`<div class="bc-props-row column">
        ${ie(
      "Configuration (JSON)",
      () => JSON.stringify(r.Configuration ?? {}, null, 2),
      ye
    )}
        <textarea rows="5" spellcheck=${!1}
          defaultValue=${JSON.stringify(r.Configuration ?? {}, null, 2)}
          onChange=${(B) => ye(B.target.value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`;
  }
  function U() {
    return Z`<div class="bc-props-row column">
        ${ie(
      "Script",
      () => r.Script ?? "",
      (B) => I("Script", B)
    )}
        <textarea rows="8" spellcheck=${!1} defaultValue=${r.Script ?? ""}
          onChange=${(B) => I("Script", B.target.value)}
        ></textarea>
        <div class="bc-props-hint">applied when the field loses focus</div>
      </div>`;
  }
  let oe = null;
  switch (r.Type) {
    case "button":
      oe = Z`
          ${G("Style", "Variant", ["rounded-rect", "rectangle", "oval", "shadow", "checkbox", "radio", "standard", "transparent"])}
          ${Y("Value", "Value")}
          ${M("show label", "showName")}
          ${M("enabled", "enabled")}
          ${M("auto-hilite", "autoHilite")}
          ${M("hilite", "Hilite")}
        `;
      break;
    case "field":
      oe = Z`
          ${G("Style", "Variant", ["opaque", "transparent", "shadow", "rectangle"])}
          ${Ne("Value", "Value")}
          ${M("locked", "lockText")}
          ${M("scrolling", "scrolling")}
          ${M("show lines", "showLines")}
          ${re("Font Size", "FontSize", 14)}
          ${G("Font Weight", "FontWeight", ["normal", "bold"])}
          ${G("Alignment", "TextAlign", ["left", "center", "right"])}
          ${de("Color", "Color", "#111111")}
        `;
      break;
    case "shape":
      oe = Z`
          ${G("Style", "Variant", ["rectangle", "rounded-rectangle", "oval", "line", "arc", "polygon"])}
          ${de("Fill Color", "FillColor", "transparent")}
          ${de("Border Color", "BorderColor", "#333333")}
          ${re("Border Width", "BorderWidth", 2)}
          ${M("arrow at start", "ArrowStart")}
          ${M("arrow at end", "ArrowEnd")}
          ${re("Curvature", "Curvature", 0.4)}
          ${re("Sides", "Sides", 6)}
          ${re("Corner Radius", "CornerRadius", 12)}
        `;
      break;
    case "picture":
      oe = Z`
          ${G("Style", "Variant", ["scale-aspect-fill", "scale-aspect-fit", "scale-to-fill", "actual-size", "center"])}
          ${Y("Image URL", "ImageData")}
        `;
      break;
    default:
      oe = Z`
          ${Ne("Value", "Value")}
          ${H()}
        `;
  }
  return Z`
      <div class="bc-props-panel">
        <div class="bc-props-title">${r.Name}</div>
        <div class="bc-props-subtitle">${ce} · ${r.Id}</div>

        <div class="bc-props-section">General</div>
        ${Y("Name", "Name")}
        ${M("visible", "visible")}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${W(T.left, (B) => z(B))}
          ${W(T.top, (B) => z(void 0, B))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${W(T.width, (B) => z(void 0, void 0, B))}
          ${W(T.height, (B) => z(void 0, void 0, void 0, B))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${r.Anchors[0]}
            onChange=${(B) => O(0, B.target.value)}>
            ${l1.map((B) => Z`<option key=${B} value=${B}>${B}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${r.Anchors[1]}
            onChange=${(B) => O(1, B.target.value)}>
            ${c1.map((B) => Z`<option key=${B} value=${B}>${B}</option>`)}
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
            onChange=${(B) => d == null ? void 0 : d(parseInt(B.target.value, 10))}>
            ${a.map((B, j) => Z`<option key=${j} value=${String(j)}>${B}</option>`)}
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
function Xn(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function Oc(r) {
  const e = /^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(r);
  return e == null ? "#ffffff" : "#" + e[1].toLowerCase();
}
function Bc(r) {
  if (r == null || r === "transparent")
    return 0;
  const e = /^#[0-9a-f]{6}([0-9a-f]{2})$/i.exec(r);
  if (e != null)
    return Math.round(parseInt(e[1], 16) / 255 * 100);
  const t = /^rgba\([^,]+,[^,]+,[^,]+,\s*([01]|0?\.[0-9]+)\s*\)$/i.exec(r);
  return t != null ? Math.round(parseFloat(t[1]) * 100) : 100;
}
function Lc(r, e) {
  const t = /^#?([0-9a-f]{6})$/i.exec(r), n = t == null ? "ffffff" : t[1].toLowerCase(), i = Math.round(Xn(e, 0, 100) / 100 * 255).toString(16).padStart(2, "0");
  return "#" + n + i;
}
function Dc(r, e, t) {
  return Z`<div class="bc-props-row">
    <label>${r}</label>
    <input type="color" value=${Oc(e)}
      onInput=${(n) => t(Lc(n.target.value, Bc(e)))}/>
    <input class="bc-props-opacity" type="number" min="0" max="100" title="opacity (%)"
      value=${Bc(e)}
      onInput=${(n) => {
    const i = parseInt(n.target.value, 10);
    isFinite(i) && t(Lc(Oc(e), i));
  }}/>
    <input type="text" value=${e}
      onChange=${(n) => {
    const i = n.target.value.trim();
    _.ValueIsColor(i) && t(i);
  }}/>
  </div>`;
}
function nm({
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
  onBeforeEdit: z,
  withChrome: O = !0
}) {
  const [, W] = Ze(0), Y = Fe(!1), re = qt(() => {
    Y.current || W((we) => we + 1);
  }, []), M = Fe(null);
  M.current == null && (M.current = new L0());
  const G = Fe(o);
  G.current = o;
  const de = F0(
    () => r.Widgets,
    [r]
  ), ce = Fe([]), ie = Fe(/* @__PURE__ */ new Map()), Ne = Fe(null);
  Ne.current == null && (Ne.current = j5(r, a, ce, re, l));
  const ye = Ne.current, H = qt(
    (we) => {
      ye[dn] = we ?? void 0;
    },
    [ye]
  ), U = Fe(/* @__PURE__ */ new Set()), oe = Fe(!1), B = Fe(!1), j = Fe(de);
  j.current = de;
  const E = Fe(() => {
  });
  E.current = () => {
    if (B.current || !oe.current)
      return;
    const we = U.current;
    j.current.map((ft) => ft.Id).every((ft) => we.has(ft)) && (B.current = !0, M.current.fireLocal("ready").then(() => G.current()));
  };
  const te = qt((we) => {
    U.current.add(we), E.current();
  }, []), Oe = qt((we, Le) => {
    ie.current.set(we, Le), ce.current = j.current.map((ft) => ie.current.get(ft.Id)).filter((ft) => ft != null);
  }, []), Ve = Fe(null);
  Ve.current == null && (Ve.current = i(ye)), Xt(() => {
    s(ye);
    const we = M.current;
    ye[_r] = we, we.linkToParent(
      // and this card up to the deck
      () => a[_r] ?? null
    );
    const { Params: Le, Args: ft } = ha(we, Ve.current, "card");
    oe.current = !1, B.current = !1, U.current.clear();
    const me = r.Script ?? "";
    let cr = !0;
    if (me.trim() !== "")
      try {
        new Function(`return (async () => {
${me}
})()`);
      } catch (Ke) {
        console.warn("[BrowserCard] syntax error in card script - ignored:", Ke), cr = !1;
      }
    return we.run(cr ? me : "", Le, ft).catch((Ke) => {
      console.warn("[BrowserCard] card script error:", Ke);
    }).then(() => {
      oe.current = !0, re(), E.current();
    }), () => {
      we.teardown();
    };
  }, [r.Script]);
  const Be = M.current;
  Y.current = !0;
  let We;
  try {
    We = Be.renderResult() ?? null;
  } finally {
    Y.current = !1;
  }
  const qe = {
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left",
    background: r.Color ?? "#ffffff00"
    // transparent white by default so the deck render shows through
  }, or = O ? {
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
  }, lr = {
    // matches the canvas geometry so it aligns with the card
    position: "absolute",
    top: 0,
    left: 0,
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left"
  };
  return Z`
    <div style=${or}>
      ${d != null && Z`
        <div class="bc-deck-render" style=${lr}>
          <${Fs} key=${"safe:" + String(h)}>${d}<//>
        </div>
      `}
      <div class="bc-card-canvas" style=${qe} ref=${H}>
        <${Fs} key=${"safe:" + String(r.Script)}>${We}<//>
        ${de.map((we) => Z`
          <${J5}
            key=${we.Id}
            Obj=${we}
            containerW=${t}
            containerH=${n}
            makeContext=${i}
            deckProxy=${a}
            cardProxy=${ye}
            onWidgetProxy=${Oe}
            onReady=${te}
          />
        `)}
        ${f && Z`
          <${em}
            Objects=${de}
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
            onBeforeEdit=${z}
          />
        `}
      </div>
    </div>
  `;
}
function im({
  Card: r,
  CanvasW: e,
  CanvasH: t
}) {
  const i = 88 / Math.max(1, e), a = Math.max(24, Math.round(t * i));
  return Z`
    <div class="bc-card-thumb"
      style=${{ width: 88, height: a, background: r.Color ?? "#fff" }}>
      ${r.Widgets.filter((s) => s.visible).map((s) => {
    const o = Yt(s.Anchors, s.Offsets, e, t), l = s.Type === "shape" ? s.FillColor ?? "#9ca3af" : s.Type === "button" ? "#1d6fd8" : s.Type === "field" ? "rgba(0,0,0,0.15)" : s.Type === "picture" ? "#9ca3af" : "#7c3aed";
    return Z`
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
function am({
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
  onDeckImport: z,
  onDeckExportText: O,
  onDeckImportText: W,
  onDeckEmbed: Y,
  onDeckStandalone: re,
  onDeckImportURL: M,
  onMCPSettings: G,
  onCardAdd: de,
  onCardDuplicate: ce,
  onCardRename: ie,
  onCardDelete: Ne,
  onCardCopy: ye,
  onPaste: H,
  canUndo: U = !1,
  canRedo: oe = !1,
  onUndo: B,
  onRedo: j
}) {
  const E = e === 0, te = e === t - 1, [Oe, Ve] = Ze(null);
  function Be(qe) {
    Ve(null), i(n === qe ? null : qe);
  }
  function We(qe) {
    Ve(Oe === qe ? null : qe);
  }
  return Z`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => Be("decks-panel")} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${n === "cards-panel" ? " active" : ""}`}
        onClick=${() => Be("cards-panel")}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "go-menu" ? " active" : ""}`}
          onClick=${() => Be("go-menu")}
          title="Navigate"
        >Go ▾</button>
        ${n === "go-menu" && Z`
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
            <div class=${`bc-dropdown-item${te ? " disabled" : ""}`}
              onClick=${() => {
    o(), i(null);
  }}>Next Card</div>
            <div class=${`bc-dropdown-item${te ? " disabled" : ""}`}
              onClick=${() => {
    l(), i(null);
  }}>Last Card</div>
          </div>
        `}
      </div>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "deck-menu" ? " active" : ""}`}
          onClick=${() => Be("deck-menu")}
          title="deck operations"
        >Deck ▾</button>
        ${n === "deck-menu" && Z`
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
              <div class=${`bc-dropdown-item has-submenu${d ? " disabled" : ""}${Oe === "import" ? " open" : ""}`}
                onClick=${() => !d && We("import")}>Import</div>
              ${Oe === "import" && Z`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    z == null || z(), i(null);
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
              <div class=${`bc-dropdown-item has-submenu${Oe === "export" ? " open" : ""}`}
                onClick=${() => We("export")}>Export</div>
              ${Oe === "export" && Z`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    I == null || I(), i(null);
  }}>as JSON File</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    O == null || O(), i(null);
  }}>as JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    Y == null || Y(), i(null);
  }}>for Embedding…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    re == null || re(), i(null);
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
      ${h && Z`
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "card-menu" ? " active" : ""}`}
            onClick=${() => Be("card-menu")}
            title="card operations"
          >Card ▾</button>
          ${n === "card-menu" && Z`
            <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => {
    de == null || de(), i(null);
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
    H == null || H(), i(null);
  }}>Paste from Clipboard</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${t <= 1 ? " disabled" : ""}`}
                onClick=${() => {
    Ne == null || Ne(), i(null);
  }}>Delete Card…</div>
            </div>
          `}
        </div>
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "insert-menu" ? " active" : ""}`}
            onClick=${() => Be("insert-menu")}
            title="insert a new widget"
          >+ New ▾</button>
          ${n === "insert-menu" && Z`
            <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              ${[
    { Type: "button", Label: "Button" },
    { Type: "field", Label: "Field" },
    { Type: "shape", Label: "Shape" },
    { Type: "picture", Label: "Picture" },
    { Type: "generic", Label: "Custom Widget" }
  ].map(({ Type: qe, Label: or }) => Z`
                <div key=${qe} class="bc-dropdown-item"
                  onClick=${() => {
    m == null || m(qe), i(null);
  }}>${or}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${!U}
          onClick=${B} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${!oe}
          onClick=${j} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
      `}
      <div class="bc-menu-bar-title">${r}</div>
      ${!d && Z`
        <button
          class=${`bc-menu-btn${h ? " active" : ""}`}
          onClick=${f}
          title=${h ? "switch to browse mode" : "switch to edit mode"}
        >${h ? "✓ Done" : "✎ Edit"}</button>
      `}
    </div>
  `;
}
function sm({
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
  return Z`
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
function om({ State: r, onClose: e }) {
  if (r == null)
    return null;
  if (r.kind === "answer")
    return Z`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${r.message}</div>
          <div class="bc-dialog-buttons">
            ${r.buttons.map((n) => Z`
              <button key=${n} class="bc-dialog-btn primary" onClick=${() => e(n)}>${n}</button>
            `)}
          </div>
        </div>
      </div>
    `;
  if (r.kind === "ask") {
    let n = r.defaultValue;
    return Z`
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
    return Z`
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
  return Z`
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
function lm({
  onClose: r,
  onApply: e
}) {
  const t = localStorage.getItem("bc-mcp-url") ?? "", n = localStorage.getItem("bc-mcp-token") ?? "", [i, a] = Ze(t), [s, o] = Ze(n), [l, d] = Ze(n !== "");
  function h() {
    const f = i.trim(), m = s.trim();
    try {
      localStorage.setItem("bc-mcp-url", f), l ? localStorage.setItem("bc-mcp-token", m) : localStorage.removeItem("bc-mcp-token");
    } catch {
    }
    e == null || e(f, m), r();
  }
  return Z`
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
function M1({
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
  onDeckStandalone: z,
  onDeckImportURL: O,
  connector: W,
  onDeckSaveImmediate: Y
}) {
  const re = r ?? $1, [M] = Ze(re), G = Xe(M), [, de] = Ze(0), ce = () => de(($) => $ + 1), [ie, Ne] = Ze(Math.min(i, (re == null ? void 0 : re.Cards.length) - 1 || 0)), [ye, H] = Ze([]), [U, oe] = Ze([]), [B, j] = Ze(null), [E, te] = Ze(null), [Oe, Ve] = Ze(1), [Be, We] = Ze(Ps), [qe, or] = Ze(Vs), [lr, we] = Ze(!1), Le = Fe(null), ft = Fe(0);
  ft.current = ie;
  const [me, cr] = Ze("browse"), [Ke, wt] = Ze([]), [mr, mn] = Ze(!1), Tt = me === "edit" && !e, Pr = Ke.length === 1 ? Ke[0] : null;
  function Vr($, x) {
    if ($ == null) {
      x || wt([]);
      return;
    }
    wt(
      x ? (N) => N.includes($) ? N.filter((F) => F !== $) : [...N, $] : [$]
    );
  }
  function gn($, x) {
    wt((N) => x ? Array.from(/* @__PURE__ */ new Set([...N, ...$])) : $);
  }
  function Qt() {
    me === "edit" && (a == null || a()), cr(($) => $ === "edit" ? "browse" : "edit"), wt([]);
  }
  Xt(() => {
    wt([]);
  }, [ie]), Xt(() => {
    if (n)
      try {
        localStorage.setItem("bc-card-index:" + n, String(ie));
      } catch {
      }
  }, [n, ie]);
  const [Hr, Ar] = Ze(null), [$r, Ft] = Ze(zo());
  function qr($) {
    F5($, n), Ft($);
  }
  function Pt() {
    if (f == null) {
      Ar([]);
      return;
    }
    f().then(Ar);
  }
  Xt(() => {
    B === "decks-panel" && (Ar(null), Pt());
  }, [B]);
  function jt($, x) {
    return new Promise(
      (N) => te({ kind: "ask", prompt: $, defaultValue: x, resolve: N })
    );
  }
  function Rt($, ...x) {
    return new Promise(
      (N) => te({ kind: "answer", message: $, buttons: x, resolve: N })
    );
  }
  async function Ir() {
    var x;
    const $ = (x = await jt("Name of the new deck:", "")) == null ? void 0 : x.trim();
    $ == null || $ === "" || await (v == null ? void 0 : v($));
  }
  async function l0($) {
    var N;
    const x = (N = await jt("New name for this deck:", $.Name)) == null ? void 0 : N.trim();
    x == null || x === "" || x === $.Name || (await (T == null ? void 0 : T($.Key, x)), Pt());
  }
  async function W0() {
    var x;
    const $ = (x = await jt("URL of the deck to import:", "https://")) == null ? void 0 : x.trim();
    $ == null || $ === "" || $ === "https://" || await (O == null ? void 0 : O($));
  }
  function c0() {
    te({ kind: "export-json", json: JSON.stringify(M, null, 2) });
  }
  async function u0() {
    const $ = await new Promise(
      (x) => te({ kind: "import-json", resolve: x })
    );
    $ != null && (h == null || h($));
  }
  async function Pn($) {
    await Rt(
      `Really delete deck "${$.Name}"?`,
      "Delete",
      "Cancel"
    ) === "Delete" && (await (k == null ? void 0 : k($.Key)), Pt());
  }
  async function d0() {
    var ve, Ce;
    const $ = (ve = await jt("Name of the new card:", "")) == null ? void 0 : ve.trim();
    if ($ == null || $ === "")
      return;
    const x = Nn($, "Card"), N = {
      Id: Or("card"),
      Name: x,
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    };
    Nt();
    const F = ((Ce = G[ie]) == null ? void 0 : Ce.Id) ?? null, q = (F != null ? vr(M, F) : null) ?? M.Cards, ae = F != null ? q.findIndex((Ae) => Ae.Id === F) : q.length - 1;
    q.splice(ae + 1, 0, N), je({ type: "card-id", id: N.Id }), ut();
  }
  function Wr($) {
    return Xe(M).findIndex((x) => x.Id === $);
  }
  function Vn($) {
    var x;
    $.Id = Or("card"), $.Name = Nn($.Name, "Card"), $.Widgets.forEach((N) => {
      N.Id = Or("widget"), typeof N.Name == "string" && (N.Name = Nn(N.Name, "Widget"));
    }), (x = $.CardList) == null || x.forEach(Vn);
  }
  function Ur($) {
    var N;
    let x = 0;
    return (N = $.CardList) == null || N.forEach((F) => {
      x += 1 + Ur(F);
    }), x;
  }
  function Hn($) {
    const x = G[$];
    if (x == null)
      return;
    const N = JSON.parse(JSON.stringify(x));
    Vn(N);
    const F = vr(M, x.Id) ?? M.Cards;
    N.Name = Yi(x.Name + " Copy", new Set(F.map((ae) => ae.Name))), Nt();
    const q = F.findIndex((ae) => ae.Id === x.Id);
    F.splice(q + 1, 0, N), je({ type: "card-id", id: N.Id }), ut();
  }
  async function bn($) {
    var F;
    const x = G[$];
    if (x == null)
      return;
    const N = (F = await jt("New name for this card:", x.Name)) == null ? void 0 : F.trim();
    N == null || N === "" || N === x.Name || (Nt(), x.Name = Nn(N, "Card"), ut());
  }
  async function vn($) {
    const x = G[$];
    if (x == null)
      return;
    const N = 1 + Ur(x);
    if (Xe(M).length - N < 1) {
      await Rt("The last remaining card cannot be deleted.", "OK");
      return;
    }
    const F = N > 1 ? ` and its ${N - 1} nested card(s)` : "";
    if (await Rt(
      `Really delete card "${x.Name}"${F} and all their widgets?`,
      "Delete",
      "Cancel"
    ) !== "Delete")
      return;
    const ae = vr(M, x.Id);
    if (ae == null)
      return;
    Nt();
    const ve = G[ie].Id, Ce = ae.findIndex((J) => J.Id === x.Id);
    ae.splice(Ce, 1), H([]), oe([]), wt([]);
    const Ae = Wr(ve);
    Ne(Ae >= 0 ? Ae : Xn($, 0, Xe(M).length - 1)), ut();
  }
  function wn($, x) {
    const N = G[$];
    if (N == null)
      return;
    const F = vr(M, N.Id);
    if (F == null)
      return;
    const q = F.findIndex((Ce) => Ce.Id === N.Id), ae = q + x;
    if (ae < 0 || ae >= F.length)
      return;
    Nt();
    const ve = G[ie].Id;
    F.splice(q, 1), F.splice(ae, 0, N), H([]), oe([]), Ne(Math.max(0, Wr(ve))), ut();
  }
  function gr($, x, N) {
    var ae;
    if (I1(M, $, x))
      return;
    const F = (ae = G[ie]) == null ? void 0 : ae.Id;
    if (Nt(), !T1(M, $, x, N))
      return;
    H([]), oe([]);
    const q = F != null ? Wr(F) : -1;
    Ne(q >= 0 ? q : Xn(ie, 0, Xe(M).length - 1)), ut();
  }
  function S($) {
    var ae;
    const x = G[$];
    if (x == null)
      return;
    const N = vr(M, x.Id);
    if (N == null)
      return;
    const F = N.findIndex((ve) => ve.Id === x.Id);
    if (F <= 0)
      return;
    const q = N[F - 1];
    gr(x.Id, q.Id, ((ae = q.CardList) == null ? void 0 : ae.length) ?? 0);
  }
  function L($) {
    var Ce, Ae, J;
    const x = G[$];
    if (x == null)
      return;
    const N = hi(M), F = (Ce = N.get(x.Id)) == null ? void 0 : Ce.Parent;
    if (F == null)
      return;
    const q = ((J = (Ae = N.get(F.Id)) == null ? void 0 : Ae.Parent) == null ? void 0 : J.Id) ?? null, ve = (q == null ? M.Cards : N.get(q).Card.CardList ?? []).findIndex((ge) => ge.Id === F.Id);
    gr(x.Id, q, ve + 1);
  }
  const [se, $e] = Ze(null), [ot, lt] = Ze(0);
  function be($, x, N) {
    $e({
      Title: $,
      Value: x,
      onCommit: (F) => {
        N(F), lt((q) => q + 1);
      }
    });
  }
  async function fe() {
    await Rc(
      Us,
      JSON.stringify(G[ie])
    ) || await Rt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function ke() {
    if (Ke.length === 0) {
      await fe();
      return;
    }
    const $ = G[ie].Widgets.filter((N) => Ke.includes(N.Id));
    if ($.length === 0)
      return;
    await Rc(Gs, JSON.stringify($)) || await Rt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function xt() {
    await ke(), Ke.length > 0 ? Xr() : await vn(ie);
  }
  async function ct() {
    var F;
    const $ = await P5();
    if ($ == null) {
      await Rt(
        "The clipboard does not contain a BrowserCard card or widget - or BrowserCard was not allowed to read the clipboard (please check your browser permissions, the console may have details).",
        "OK"
      );
      return;
    }
    let x;
    try {
      x = JSON.parse($.Serialization);
    } catch {
      return;
    }
    const N = G[ie];
    if ($.Kind === "card") {
      if (!Ea(x))
        return;
      const q = x;
      Vn(q);
      const ae = ((F = G[ie]) == null ? void 0 : F.Id) ?? null, ve = (ae != null ? vr(M, ae) : null) ?? M.Cards;
      q.Name = Yi(q.Name, new Set(ve.map((Ae) => Ae.Name))), Nt();
      const Ce = ae != null ? ve.findIndex((Ae) => Ae.Id === ae) : ve.length - 1;
      ve.splice(Ce + 1, 0, q), je({ type: "card-id", id: q.Id });
    } else {
      if (N == null)
        return;
      const q = Array.isArray(x) ? x : [x];
      if (q.length === 0 || !q.every(pa))
        return;
      Nt();
      const ae = new Set(N.Widgets.map((Ce) => Ce.Name)), ve = [];
      q.forEach((Ce) => {
        const Ae = Ce;
        Ae.Id = Or("widget"), Ae.Name = Yi(Ae.Name ?? "Widget", ae), ae.add(Ae.Name), N.Widgets.push(Ae), ve.push(Ae.Id);
      }), wt(ve);
    }
    ut();
  }
  async function Gr() {
    var x;
    const $ = (x = Le.current) == null ? void 0 : x.querySelector(".bc-card-canvas");
    if ($ != null)
      try {
        const N = "https://cdn.jsdelivr.net/npm/html-to-image@1/+esm", { toPng: F } = await import(
          // loaded on demand only
          /* @vite-ignore */
          N
        ), q = await F($, {
          width: Be,
          height: qe,
          pixelRatio: 1,
          // native card size
          style: { transform: "scale(1)", borderRadius: "0", boxShadow: "none" },
          filter: (Ce) => {
            var Ae;
            return (
              // exclude edit-mode overlays
              !((Ae = Ce.classList) != null && Ae.contains("bc-edit-layer"))
            );
          }
        }), ae = G[ie], ve = document.createElement("a");
        ve.href = q, ve.download = `${M.Name ?? "Deck"} - ${ae.Name ?? "Card"}.png`, ve.click();
      } catch (N) {
        console.warn("[BrowserCard] could not create a screenshot:", N), window.alert(
          "BrowserCard could not create a screenshot - the console may have details."
        );
      }
  }
  const er = Fe(null);
  Xt(() => {
    !Tt || a == null || (er.current != null && window.clearTimeout(er.current), er.current = window.setTimeout(() => {
      er.current = null, a();
    }, 800));
  }), Xt(() => () => {
    er.current != null && window.clearTimeout(er.current);
  }, []), Xt(() => {
    if (W == null)
      return;
    const $ = {
      getDeck: () => M,
      getCardIndex: () => ft.current,
      mutateDeck: (x) => {
        x(M), ce();
      },
      navigate: (x) => {
        if (typeof x == "number")
          je({ type: "card-index", index: x });
        else {
          const N = Xe(M).findIndex((F) => F.Id === x || F.Name === x);
          N >= 0 && je({ type: "card-index", index: N });
        }
      },
      saveDeck: () => (Y == null ? void 0 : Y()) ?? Promise.resolve(),
      evalInContext: async (x) => {
        const N = new L0(), F = is(
          M,
          Xe(M),
          null,
          je,
          (Ce, Ae, J) => te({ kind: "answer", message: Ce, buttons: Ae, resolve: J }),
          (Ce, Ae, J) => te({ kind: "ask", prompt: Ce, defaultValue: Ae, resolve: J }),
          Ot
        ), { Params: q, Args: ae } = ha(N, F, "deck");
        let ve;
        try {
          ve = new Function(
            ...q,
            `return (async () => { return (${x}) })()`
          );
        } catch (Ce) {
          throw new Error("invalid expression: " + ((Ce == null ? void 0 : Ce.message) ?? String(Ce)));
        }
        return ve(...ae);
      }
    };
    W.setContext($);
  });
  const ur = Fe([]), jr = Fe([]), Kr = Fe(""), xn = Fe(0), [h0, f0] = Ze(0), p0 = 100, Zr = 1e3, Nt = qt(($ = "") => {
    const x = Date.now();
    if ($ !== "" && $ === Kr.current && x - xn.current < Zr) {
      xn.current = x;
      return;
    }
    Kr.current = $, xn.current = x, ur.current.push(JSON.stringify(M)), ur.current.length > p0 && ur.current.shift(), jr.current = [];
  }, [M]);
  function qn($) {
    const x = JSON.parse($);
    Object.assign(M, x);
    for (const N of Object.keys(M))
      N in x || delete M[N];
    Kr.current = "", wt([]), H([]), oe([]), Ne((N) => Xn(N, 0, Xe(M).length - 1)), f0((N) => N + 1), lt((N) => N + 1), ut();
  }
  function m0() {
    const $ = ur.current.pop();
    $ != null && (jr.current.push(JSON.stringify(M)), qn($));
  }
  function Vt() {
    const $ = jr.current.pop();
    $ != null && (ur.current.push(JSON.stringify(M)), qn($));
  }
  function g0($) {
    const x = G[ie], N = Q5($, x, Be, qe);
    Nt(), x.Widgets.push(N), wt([N.Id]), ut();
  }
  function Xr() {
    if (Ke.length === 0)
      return;
    const $ = G[ie];
    if ($.Widgets.some((x) => Ke.includes(x.Id))) {
      Nt();
      for (let x = $.Widgets.length - 1; x >= 0; x--)
        Ke.includes($.Widgets[x].Id) && $.Widgets.splice(x, 1);
    }
    wt([]), ut();
  }
  function U0($) {
    if (Ke.length === 0)
      return;
    const x = G[ie], N = [...x.Widgets], F = (ae) => Ke.includes(ae.Id);
    if (!N.some(F))
      return;
    Nt();
    let q = N;
    switch ($) {
      case "front":
        q = [...N.filter((ae) => !F(ae)), ...N.filter(F)];
        break;
      case "back":
        q = [...N.filter(F), ...N.filter((ae) => !F(ae))];
        break;
      case "forward":
        for (let ae = N.length - 2; ae >= 0; ae--)
          if (F(N[ae]) && !F(N[ae + 1])) {
            const ve = N[ae];
            N[ae] = N[ae + 1], N[ae + 1] = ve;
          }
        q = N;
        break;
      case "backward":
        for (let ae = 1; ae < N.length; ae++)
          if (F(N[ae]) && !F(N[ae - 1])) {
            const ve = N[ae];
            N[ae] = N[ae - 1], N[ae - 1] = ve;
          }
        q = N;
        break;
    }
    x.Widgets.splice(0, x.Widgets.length, ...q), ut();
  }
  function b0($) {
    if (Ke.length === 0 || $ === ie)
      return;
    const x = G[ie], N = G[$];
    if (N == null)
      return;
    const F = x.Widgets.filter((q) => Ke.includes(q.Id));
    if (F.length !== 0) {
      Nt();
      for (let q = x.Widgets.length - 1; q >= 0; q--)
        Ke.includes(x.Widgets[q].Id) && x.Widgets.splice(q, 1);
      F.forEach((q) => {
        N.Widgets.push(q);
      }), wt([]), ut();
    }
  }
  const [, G0] = Ze(0), ut = qt(() => G0(($) => $ + 1), []), Jr = Fe(null);
  Jr.current == null && (Jr.current = new L0());
  const X = Fe(null), xe = Fe(null);
  xe.current == null && (xe.current = K5(M, X, ut));
  const Ie = xe.current, Qe = qt(
    ($) => {
      Ie[dn] = $ ?? void 0;
    },
    [Ie]
  ), dt = Fe(!1), Ct = Fe(!1);
  Xt(() => {
    const $ = Le.current;
    if ($ == null)
      return;
    function x() {
      const { width: q, height: ae } = $.getBoundingClientRect(), ve = getComputedStyle($), Ce = parseInt(ve.getPropertyValue("--canvas-width").trim()), Ae = parseInt(ve.getPropertyValue("--canvas-height").trim()), J = isFinite(Ce) && Ce > 0 ? Ce : M.CardWidth ?? Ps, ge = isFinite(Ae) && Ae > 0 ? Ae : M.CardHeight ?? Vs;
      We(J), or(ge);
      const Ee = t ? 24 : 0, He = Math.max(0.1, Math.min((q - Ee * 2) / J, (ae - Ee * 2) / ge)), pt = parseFloat(ve.getPropertyValue("--canvas-scale").trim());
      isFinite(pt) && pt > 0 ? Ve(Tt ? Math.min(pt, He) : pt) : Ve(He);
    }
    x();
    const N = requestAnimationFrame(x), F = new ResizeObserver(x);
    return F.observe($), () => {
      cancelAnimationFrame(N), F.disconnect();
    };
  }, [M.CardWidth, M.CardHeight, Tt]);
  const je = qt(($) => {
    if (R5()) {
      console.warn('[BrowserCard] navigation requested during rendering was ignored - call go() from an event or on("ready"), not on("render")');
      return;
    }
    const x = Xe(M);
    Ne((N) => {
      const F = (q) => (q !== N && (H((ae) => [...ae, N]), oe([]), Ct.current = !1), q);
      switch ($.type) {
        case "next":
          return F(Xn(N + 1, 0, x.length - 1));
        case "prev":
          return F(Xn(N - 1, 0, x.length - 1));
        case "first":
          return F(0);
        case "last":
          return F(x.length - 1);
        case "card-index":
          return F(Xn($.index, 0, x.length - 1));
        case "card-name": {
          const q = x.findIndex((ae) => ae.Name === $.name);
          return q >= 0 ? F(q) : N;
        }
        case "card-id": {
          const q = x.findIndex((ae) => ae.Id === $.id);
          return q >= 0 ? F(q) : N;
        }
        default:
          return N;
      }
    });
  }, [M]), Yr = Fe(() => {
  });
  Yr.current = ($, x) => {
    var ve;
    const N = vr(M, $.Id);
    if (N == null)
      return;
    const F = N.indexOf($);
    if (F < 0)
      return;
    const q = Math.max(0, Math.min(N.length - 1, Math.round(x)));
    if (q === F)
      return;
    const ae = (ve = Xe(M)[ft.current]) == null ? void 0 : ve.Id;
    N.splice(F, 1), N.splice(q, 0, $), Ne(Math.max(0, Xe(M).findIndex((Ce) => Ce.Id === ae))), ut();
  };
  const zt = qt(
    ($, x) => Yr.current($, x),
    []
  ), Ot = F0(() => ({
    print(...$) {
      $5(Ie, $), we(!0);
    },
    println(...$) {
      I5(Ie, $), we(!0);
    },
    clearConsole() {
      da(Ie);
    }
  }), []), Qr = qt(() => e ? Promise.resolve() : (Y == null ? void 0 : Y()) ?? Promise.resolve(), [e, Y]), v0 = qt(($) => is(
    M,
    Xe(M),
    $,
    je,
    (x, N, F) => te({ kind: "answer", message: x, buttons: N, resolve: F }),
    (x, N, F) => te({ kind: "ask", prompt: x, defaultValue: N, resolve: F }),
    Ot,
    Qr
  ), [M, je, Ot, Qr]);
  function yn() {
    dt.current && Ct.current && Jr.current.fireLocal("ready");
  }
  function j0($) {
    X.current = $;
  }
  function w0() {
    Ct.current = !0, yn();
  }
  Xt(() => {
    const $ = Jr.current;
    Ie[_r] = $;
    const x = is(
      M,
      Xe(M),
      Ie,
      je,
      (ve, Ce, Ae) => te({ kind: "answer", message: ve, buttons: Ce, resolve: Ae }),
      (ve, Ce, Ae) => te({ kind: "ask", prompt: ve, defaultValue: Ce, resolve: Ae }),
      Ot,
      Qr
    ), { Params: N, Args: F } = ha($, x, "deck");
    dt.current = !1, Ct.current = !1;
    const q = M.Script ?? "";
    let ae = !0;
    if (q.trim() !== "")
      try {
        new Function(`return (async () => {
${q}
})()`);
      } catch (ve) {
        console.warn("[BrowserCard] syntax error in deck script - ignored:", ve), ae = !1;
      }
    return $.run(ae ? q : "", N, F).catch((ve) => {
      console.warn("[BrowserCard] deck script error:", ve);
    }).then(() => {
      dt.current = !0, ut(), yn();
    }), () => {
      $.teardown();
    };
  }, [M.Script]), Xt(() => {
    if (!t)
      return;
    function $(x) {
      if (E != null)
        return;
      const N = x.target;
      if (!(N != null && /^(INPUT|TEXTAREA|SELECT)$/.test(N.tagName))) {
        if (Tt) {
          if ((x.key === "z" || x.key === "Z") && (x.metaKey || x.ctrlKey)) {
            x.preventDefault(), x.shiftKey ? Vt() : m0();
            return;
          }
          if ((x.key === "y" || x.key === "Y") && (x.metaKey || x.ctrlKey)) {
            x.preventDefault(), Vt();
            return;
          }
          if ((x.metaKey || x.ctrlKey) && !x.shiftKey && !x.altKey)
            switch (x.key) {
              case "c":
                x.preventDefault(), ke();
                return;
              case "x":
                x.preventDefault(), xt();
                return;
              case "v":
                x.preventDefault(), ct();
                return;
            }
        }
        if (Tt && Ke.length > 0) {
          if (x.key === "Escape") {
            wt([]);
            return;
          }
          if (x.key === "Delete" || x.key === "Backspace") {
            x.preventDefault(), Xr();
            return;
          }
          const F = G[ie];
          if (F == null)
            return;
          const q = F.Widgets.filter((Ae) => Ke.includes(Ae.Id));
          if (q.length === 0)
            return;
          const ae = x.shiftKey ? 10 : 1;
          let ve = 0, Ce = 0;
          switch (x.key) {
            case "ArrowLeft":
              ve = -ae;
              break;
            case "ArrowRight":
              ve = ae;
              break;
            case "ArrowUp":
              Ce = -ae;
              break;
            case "ArrowDown":
              Ce = ae;
              break;
            default:
              return;
          }
          x.preventDefault(), Nt("nudge:" + Ke.join(",")), q.forEach((Ae) => {
            const { left: J, top: ge, width: Ee, height: He } = Yt(Ae.Anchors, Ae.Offsets, Be, qe);
            Ae.Offsets = D0(J + ve, ge + Ce, Ee, He, Ae.Anchors, Be, qe);
          }), ut();
          return;
        }
        (x.key === "ArrowRight" || x.key === "ArrowDown") && je({ type: "next" }), (x.key === "ArrowLeft" || x.key === "ArrowUp") && je({ type: "prev" });
      }
    }
    return window.addEventListener("keydown", $), () => window.removeEventListener("keydown", $);
  }, [je, E, Tt, Ke, ie, Be, qe, t]);
  function K0() {
    if (ye.length === 0)
      return;
    const $ = ye[ye.length - 1];
    H((x) => x.slice(0, -1)), oe((x) => [...x, ie]), Ct.current = !1, Ne($);
  }
  function Wn() {
    if (U.length === 0)
      return;
    const $ = U[U.length - 1];
    oe((x) => x.slice(0, -1)), H((x) => [...x, ie]), Ct.current = !1, Ne($);
  }
  const dr = G[ie], Un = Jr.current.renderResult() ?? null, Kt = Tt && Pr != null ? dr.Widgets.find(($) => $.Id === Pr) ?? null : null, x0 = {
    isActive: M.SnapToGrid === !0,
    Width: M.GridWidth ?? 10,
    Height: M.GridHeight ?? 10
  };
  return Z`
    <${Mn}>
      <div class="bc-app${t ? "" : " bare"}" ref=${Qe}>
        ${t && Z`<${am}
          DeckName=${M.Name}
          CardIndex=${ie}
          CardCount=${G.length}
          activeOverlay=${B}
          onOverlayToggle=${j}
          onGoFirst=${() => je({ type: "first" })}
          onGoPrev=${() => je({ type: "prev" })}
          onGoNext=${() => je({ type: "next" })}
          onGoLast=${() => je({ type: "last" })}
          isReadOnly=${e}
          isEditing=${Tt}
          onEditToggle=${Qt}
          onInsert=${g0}
          onDeckSave=${a}
          onDeckRevert=${s}
          onDeckReset=${o}
          onDeckExport=${l}
          onDeckImport=${d}
          onDeckExportText=${c0}
          onDeckImportText=${() => void u0()}
          onCardAdd=${() => void d0()}
          onCardDuplicate=${() => Hn(ie)}
          onCardRename=${() => void bn(ie)}
          onCardDelete=${() => void vn(ie)}
          onCardCopy=${() => void fe()}
          onPaste=${() => void ct()}
          canUndo=${ur.current.length > 0}
          canRedo=${jr.current.length > 0}
          onUndo=${m0}
          onRedo=${Vt}
          onDeckEmbed=${I}
          onDeckStandalone=${z}
          onDeckImportURL=${() => void W0()}
          onMCPSettings=${() => mn(!0)}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area${t ? "" : " bare"}" ref=${Le}>
            <${nm}
              key=${dr.Id + ":" + h0}
              Card=${dr}
              Scale=${Oe}
              CanvasW=${Be}
              CanvasH=${qe}
              withChrome=${t}
              deckRenderSlot=${Un}
              deckScript=${M.Script ?? ""}
              makeContext=${v0}
              deckProxy=${Ie}
              onCardProxy=${j0}
              onCardReady=${w0}
              reorderCard=${zt}
              isEditing=${Tt}
              selectedIds=${Ke}
              onSelect=${Vr}
              onSelectMany=${gn}
              onEdited=${ut}
              Grid=${x0}
              onBeforeEdit=${() => Nt()}
            />
          </div>
          ${Tt && Z`
            <${rm}
              key=${(Pr ?? (Ke.length > 1 ? "multi" : "card:" + dr.Id)) + ":" + ot}
              Widget=${Kt}
              SelectedCount=${Ke.length}
              CanvasW=${Be}
              CanvasH=${qe}
              onEdited=${ut}
              CardNames=${G.map(($) => $.Name)}
              CardIndex=${ie}
              onDelete=${Xr}
              onReorder=${U0}
              onMoveTo=${b0}
              Card=${dr}
              Deck=${M}
              onOpenEditor=${be}
              onBeforeEdit=${Nt}
              onCopy=${() => void ke()}
            />
          `}
        </div>
        ${B === "decks-panel" && Z`
          <div class="bc-dropdown-backdrop" onClick=${() => j(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => j(null)}>×</button>
            </div>
            ${!e && Z`
              <button class="bc-decks-new" onClick=${Ir}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${Hr == null ? Z`<div class="bc-decks-empty">loading…</div>` : Hr.length === 0 ? Z`<div class="bc-decks-empty">no decks found</div>` : Hr.map(($) => Z`
                      <div key=${$.Key}
                        class=${`bc-decks-item${$.Key === n ? " active" : ""}`}>
                        <span class="bc-decks-name"
                          title=${$.Name}
                          onClick=${() => {
    $.Key !== n && (m == null || m($.Key));
  }}
                        >${$.Name}</span>
                        ${!e && Z`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void l0($)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void Pn($)}>×</button>
                        `}
                      </div>
                    `)}
            </div>
            <label class="bc-decks-remember"
              title="reopen the deck you last worked on automatically after a page reload">
              <input type="checkbox" checked=${$r}
                onChange=${($) => qr($.target.checked)}/>
              <span>remember last deck on reload</span>
            </label>
          </div>
        `}
        ${B === "cards-panel" && Z`
          <div class="bc-dropdown-backdrop" onClick=${() => j(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => j(null)}>×</button>
            </div>
            ${Tt && Z`
              <button class="bc-decks-new" onClick=${() => void d0()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${(() => {
    const $ = hi(M);
    return G.map((x, N) => {
      var J;
      const F = $.get(x.Id), q = (F == null ? void 0 : F.Depth) ?? 0, ae = (F == null ? void 0 : F.Path) ?? x.Name, ve = vr(M, x.Id) ?? [], Ce = ve.findIndex((ge) => ge.Id === x.Id), Ae = ((J = x.CardList) == null ? void 0 : J.length) ?? 0;
      return Z`
                <div key=${x.Id}
                  class=${`bc-cards-item${N === ie ? " active" : ""}`}>
                  <div class="bc-cards-main"
                    style=${{ paddingLeft: `${q * 16}px` }}
                    onClick=${() => {
        N !== ie && je({ type: "card-index", index: N });
      }}>
                    <${im}
                      Card=${x} CanvasW=${Be} CanvasH=${qe}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${ae}>${x.Name}</div>
                      <div class="bc-cards-sub">
                        #${N + 1} · ${x.Widgets.length}${" "}
                        ${x.Widgets.length === 1 ? "widget" : "widgets"}
                        ${Ae > 0 ? Z` · ${Ae} nested` : null}
                      </div>
                    </div>
                  </div>
                  ${Tt && Z`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move up among siblings"
                        disabled=${Ce <= 0}
                        onClick=${() => wn(N, -1)}>↑</button>
                      <button class="bc-console-btn" title="move down among siblings"
                        disabled=${Ce >= ve.length - 1}
                        onClick=${() => wn(N, 1)}>↓</button>
                      <button class="bc-console-btn" title="make a child of the card above it"
                        disabled=${Ce <= 0}
                        onClick=${() => S(N)}>⇥</button>
                      <button class="bc-console-btn" title="move out to the parent level"
                        disabled=${q === 0}
                        onClick=${() => L(N)}>⇤</button>
                      <button class="bc-console-btn" title="duplicate this card (with nested cards)"
                        onClick=${() => Hn(N)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void bn(N)}>✎</button>
                      <button class="bc-console-btn" title="delete this card and its nested cards"
                        disabled=${G.length <= 1}
                        onClick=${() => void vn(N)}>×</button>
                    </div>
                  `}
                </div>`;
    });
  })()}
            </div>
          </div>
        `}
        ${lr && Z`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => da(Ie)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => we(!1)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${Ie[Bn]}</pre>
          </div>
        `}
        ${t && Z`<${sm}
          CardIndex=${ie}
          CardCount=${G.length}
          onFirst=${() => je({ type: "first" })}
          onPrev=${() => je({ type: "prev" })}
          onNext=${() => je({ type: "next" })}
          onLast=${() => je({ type: "last" })}
          onBack=${K0}
          historyLen=${ye.length}
          onForward=${Wn}
          futureLen=${U.length}
          consoleShown=${lr}
          onConsoleToggle=${() => we(($) => !$)}
          onScreenshot=${() => void Gr()}
          mcpStatus=${W == null || W.connectionStatus.url === "" ? "inactive" : W.connectionStatus.connected ? "connected" : "connecting"}
        />`}
        <${om}
          State=${E}
          onClose=${($) => {
    var N, F;
    const x = E;
    if (te(null), x != null)
      switch (x.kind) {
        case "answer":
          (N = x.resolve) == null || N.call(x, $ ?? "");
          break;
        case "ask":
          (F = x.resolve) == null || F.call(x, $);
          break;
        case "import-json":
          x.resolve($);
          break;
      }
  }}
        />
      </div>
      ${se != null && Z`
        <${tm}
          key=${se.Title}
          State=${se}
          onClose=${() => $e(null)}
        />
      `}
      ${mr && Z`
        <${lm}
          onClose=${() => mn(!1)}
          onApply=${($, x) => W == null ? void 0 : W.configure($, x)}
        />
      `}
    <//>
  `;
}
const Fc = "https://rozek.github.io/browser-card/dist/BrowserCard.js";
function E1() {
  if (document.getElementById("bc-styles") == null) {
    const r = document.createElement("style");
    r.id = "bc-styles", r.textContent = z5, document.head.appendChild(r);
  }
}
function ss(r, e, t) {
  const n = new Blob([e], { type: t }), i = URL.createObjectURL(n), a = document.createElement("a");
  a.href = i, a.download = r, a.click(), setTimeout(() => URL.revokeObjectURL(i), 1e3);
}
function Wi(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function Pc(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");
}
var Mr, ht, Bt, kt, xr, N0, M0, Te, Qi, rn, z1, R1, O1, B1, L1, D1, F1, P1, Cn, V1, H1, q1, W1, U1;
class cm extends HTMLElement {
  constructor() {
    super(...arguments);
    rt(this, Te);
    rt(this, Mr, null);
    rt(this, ht, null);
    rt(this, Bt, !1);
    rt(this, kt, "bc-deck:default");
    rt(this, xr, 0);
    // remount key - bumped whenever the deck is swapped
    rt(this, N0, 0);
    // guards against overlapping async mounts
    rt(this, M0, new Zh());
  }
  static get observedAttributes() {
    return ["name", "src", "readonly"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    R(this, M0).connect(), ue(this, Te, Qi).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    R(this, M0).disconnect(), R(this, Mr) != null && sn(null, R(this, Mr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && ue(this, Te, Qi).call(this);
  }
}
Mr = new WeakMap(), ht = new WeakMap(), Bt = new WeakMap(), kt = new WeakMap(), xr = new WeakMap(), N0 = new WeakMap(), M0 = new WeakMap(), Te = new WeakSet(), Qi = async function() {
  const t = ++Ra(this, N0)._;
  E1(), R(this, Mr) == null && (ze(this, Mr, document.createElement("div")), R(this, Mr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(R(this, Mr)));
  const n = this.getAttribute("src") ?? "";
  let i = null;
  if (n.trim())
    try {
      const s = JSON.parse(n);
      Nr(s) ? i = s : console.warn('[BrowserCard] "src" attribute does not contain a valid deck');
    } catch {
      console.warn('[BrowserCard] invalid JSON in "src" attribute');
    }
  if (i == null && (i = JSON.parse(L5)), !i.Name) {
    const s = this.getAttribute("id") ?? "";
    s && Si(s) && (i.Name = s);
  }
  ze(this, kt, "bc-deck:" + (this.getAttribute("name") ?? i.Name ?? "default"));
  let a = null;
  if (zo())
    try {
      const s = localStorage.getItem(fa);
      if (s && s !== R(this, kt)) {
        const o = await Gn(s, Zt);
        if (t !== R(this, N0))
          return;
        Nr(o) && (ze(this, kt, s), a = o);
      }
    } catch {
    }
  try {
    const s = a ?? await Gn(R(this, kt), Zt);
    if (t !== R(this, N0))
      return;
    Nr(s) ? i = s : s != null && console.warn("[BrowserCard] ignoring invalid persisted deck for key " + _.quoted(R(this, kt)));
  } catch (s) {
    console.warn("[BrowserCard] could not access IndexedDB:", s);
  }
  Zn(i), ze(this, ht, i), ze(this, Bt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
}, /**** #renderDeck ****/
rn = function() {
  D5(R(this, kt));
  let t = 0;
  try {
    const n = localStorage.getItem("bc-card-index:" + R(this, kt));
    n != null && (t = Math.max(0, parseInt(n, 10) || 0));
  } catch {
  }
  sn(Z`<${M1}
      key=${R(this, xr)}
      deck=${R(this, ht)}
      isReadOnly=${R(this, Bt)}
      StorageKey=${R(this, kt)}
      initialCardIndex=${t}
      onDeckSave=${() => void ue(this, Te, Cn).call(this)}
      onDeckRevert=${() => void ue(this, Te, V1).call(this)}
      onDeckReset=${() => void ue(this, Te, H1).call(this)}
      onDeckExport=${() => ue(this, Te, q1).call(this)}
      onDeckImport=${() => ue(this, Te, W1).call(this)}
      onDeckImportText=${(n) => void ue(this, Te, U1).call(this, n)}
      onDeckList=${() => ue(this, Te, B1).call(this)}
      onDeckOpen=${(n) => void ue(this, Te, L1).call(this, n)}
      onDeckCreate=${(n) => ue(this, Te, D1).call(this, n)}
      onDeckDelete=${(n) => ue(this, Te, F1).call(this, n)}
      onDeckRename=${(n, i) => ue(this, Te, P1).call(this, n, i)}
      onDeckEmbed=${() => ue(this, Te, R1).call(this)}
      onDeckStandalone=${() => ue(this, Te, O1).call(this)}
      onDeckImportURL=${(n) => ue(this, Te, z1).call(this, n)}
      connector=${R(this, M0)}
      onDeckSaveImmediate=${() => ue(this, Te, Cn).call(this)}
    />`, R(this, Mr));
}, z1 = async function(t) {
  if (!R(this, Bt))
    try {
      const n = await fetch(t);
      if (!n.ok) {
        window.alert(`The deck could not be loaded (HTTP ${n.status})`);
        return;
      }
      const i = JSON.parse(await n.text());
      if (!Nr(i)) {
        window.alert("The given URL does not deliver a valid BrowserCard deck.");
        return;
      }
      const a = i;
      Zn(a), ze(this, ht, a), ze(this, Bt, this.hasAttribute("readonly") || (a.readOnly ?? !1)), await ue(this, Te, Cn).call(this), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
    } catch (n) {
      window.alert("Import failed: " + (n instanceof Error ? n.message : String(n)));
    }
}, /**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/
R1 = function() {
  if (R(this, ht) == null)
    return;
  const t = R(this, ht).Name ?? "Deck", n = Pc(JSON.stringify(Hi(R(this, ht)))), i = Fc, a = R(this, ht).CardWidth ?? Ps, s = R(this, ht).CardHeight ?? Vs, o = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Wi(t)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${Wi(i)}"><\/script>

  <bc-deck
    style="display:block; width:${a}px; height:${s}px"
    src='${n}'
  ></bc-deck>
</body>
</html>`;
  ss(t + ".embed.html", o, "text/html");
}, /**** #exportStandalone — complete web app, referencing the public module ****/
O1 = function() {
  if (R(this, ht) == null)
    return;
  const t = R(this, ht).Name ?? "Deck", n = Pc(JSON.stringify(Hi(R(this, ht)))), i = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Wi(t)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${Wi(Fc)}"><\/script>
  <bc-deck style="display:block; width:100%; height:100%" src='${n}'></bc-deck>
</body>
</html>`;
  ss(t + ".html", i, "text/html");
}, B1 = async function() {
  let t = [];
  try {
    t = (await Dh(Zt)).filter((i) => typeof i == "string" && i.startsWith(X0)).map((i) => ({ Key: i, Name: i.slice(X0.length) }));
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
  return t.some((n) => n.Key === R(this, kt)) || t.unshift({
    // current deck was never saved so far
    Key: R(this, kt),
    Name: R(this, kt).slice(X0.length)
  }), t.sort((n, i) => n.Name.localeCompare(i.Name));
}, L1 = async function(t) {
  try {
    const n = await Gn(t, Zt);
    if (!Nr(n)) {
      window.alert("This deck cannot be loaded (it seems to be damaged).");
      return;
    }
    const i = n;
    Zn(i), ze(this, kt, t), ze(this, ht, i), ze(this, Bt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
}, D1 = async function(t) {
  if (this.hasAttribute("readonly"))
    return;
  const n = X0 + t;
  try {
    if (await Gn(n, Zt) != null) {
      window.alert(`A deck named "${t}" already exists.`);
      return;
    }
  } catch (a) {
    console.warn("[BrowserCard] could not access IndexedDB:", a);
    return;
  }
  const i = {
    Id: Or("deck"),
    Name: t,
    readOnly: !1,
    swipeToAdjacentCard: !0,
    Script: "",
    Cards: [{
      Id: Or("card"),
      Name: "Card 1",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    }]
  };
  ze(this, kt, n), ze(this, ht, i), ze(this, Bt, !1), await ue(this, Te, Cn).call(this), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
}, F1 = async function(t) {
  if (!this.hasAttribute("readonly")) {
    if (t === R(this, kt)) {
      window.alert(
        'The currently open deck cannot be deleted - use "Reset to Original" instead.'
      );
      return;
    }
    try {
      await Ni(t, Zt);
    } catch (n) {
      console.warn("[BrowserCard] could not access IndexedDB:", n);
    }
  }
}, P1 = async function(t, n) {
  if (this.hasAttribute("readonly"))
    return;
  const i = X0 + n;
  if (i !== t)
    try {
      if (await Gn(i, Zt) != null) {
        window.alert(`A deck named "${n}" already exists.`);
        return;
      }
      if (t === R(this, kt))
        R(this, ht).Name = n, ze(this, kt, i), await ue(this, Te, Cn).call(this), await Ni(t, Zt), ue(this, Te, rn).call(this);
      else {
        const s = await Gn(t, Zt);
        if (!Nr(s))
          return;
        s.Name = n, await Nl(i, s, Zt), await Ni(t, Zt);
      }
    } catch (a) {
      console.warn("[BrowserCard] could not access IndexedDB:", a);
    }
}, Cn = async function() {
  if (!(R(this, ht) == null || R(this, Bt)))
    try {
      const t = Hi(R(this, ht));
      await Nl(R(this, kt), t, Zt);
    } catch (t) {
      console.warn("[BrowserCard] could not persist deck:", t);
    }
}, V1 = async function() {
  if (!R(this, Bt))
    try {
      const t = await Gn(R(this, kt), Zt);
      if (!Nr(t)) {
        window.alert("There is no (valid) saved copy of this deck yet.");
        return;
      }
      const n = t;
      Zn(n), ze(this, ht, n), ze(this, Bt, this.hasAttribute("readonly") || (n.readOnly ?? !1)), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
}, H1 = async function() {
  if (!R(this, Bt)) {
    try {
      await Ni(R(this, kt), Zt);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
    ue(this, Te, Qi).call(this);
  }
}, /**** #exportDeck — downloads the deck as a JSON file ****/
q1 = function() {
  R(this, ht) != null && ss(
    (R(this, ht).Name ?? "Deck") + ".json",
    JSON.stringify(Hi(R(this, ht)), null, 2),
    "application/json"
  );
}, /**** #importDeck — loads a deck from a JSON file and persists it ****/
W1 = function() {
  if (R(this, Bt))
    return;
  const t = document.createElement("input");
  t.type = "file", t.accept = "application/json,.json,.bc", t.onchange = async () => {
    var i;
    const n = (i = t.files) == null ? void 0 : i[0];
    if (n != null)
      try {
        const a = JSON.parse(await n.text());
        if (!Nr(a)) {
          window.alert("The chosen file does not contain a valid BrowserCard deck.");
          return;
        }
        const s = a;
        Zn(s), ze(this, ht, s), ze(this, Bt, this.hasAttribute("readonly") || (s.readOnly ?? !1)), await ue(this, Te, Cn).call(this), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
      } catch (a) {
        window.alert("Import failed: " + (a instanceof Error ? a.message : String(a)));
      }
  }, t.click();
}, U1 = async function(t) {
  if (!R(this, Bt))
    try {
      const n = JSON.parse(t);
      if (!Nr(n)) {
        window.alert("The pasted text does not contain a valid BrowserCard deck.");
        return;
      }
      const i = n;
      Zn(i), ze(this, ht, i), ze(this, Bt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), await ue(this, Te, Cn).call(this), ze(this, xr, R(this, xr) + 1), ue(this, Te, rn).call(this);
    } catch (n) {
      window.alert("Import failed: " + (n instanceof Error ? n.message : String(n)));
    }
};
var yr, bi, vi, js;
class um extends HTMLElement {
  constructor() {
    super(...arguments);
    rt(this, vi);
    rt(this, yr, null);
    rt(this, bi, 0);
  }
  static get observedAttributes() {
    return ["src"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    ue(this, vi, js).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    R(this, yr) != null && sn(null, R(this, yr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && ue(this, vi, js).call(this);
  }
}
yr = new WeakMap(), bi = new WeakMap(), vi = new WeakSet(), /**** #mount ****/
js = function() {
  E1(), R(this, yr) == null && (ze(this, yr, document.createElement("div")), R(this, yr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(R(this, yr)));
  const t = this.getAttribute("src") ?? "";
  let n = null;
  if (t.trim())
    try {
      const i = JSON.parse(t);
      Nr(i) && (n = i);
    } catch {
    }
  if (n == null) {
    console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute'), sn(Z`
        <div style=${{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#888",
      font: "13px/1.4 system-ui, sans-serif"
    }}>this &lt;bc-deck&gt; contains no valid deck</div>
      `, R(this, yr));
    return;
  }
  Zn(n), ze(this, bi, R(this, bi) + 1), sn(Z`<${M1}
      key=${R(this, bi)}
      deck=${n}
      isReadOnly=${!0}
      withChrome=${!1}
    />`, R(this, yr));
};
const dm = Function("return this")();
dm.BC = {
  render: sn,
  html: Z,
  Preact: o1,
  createContext: eu,
  toChildArray: z0,
  cloneElement: Qc,
  createPortal: du,
  useId: au,
  useRef: Fe,
  useState: Ze,
  useEffect: Xt,
  useCallback: qt,
  useMemo: F0,
  useContext: iu,
  fromLocalTo: k2,
  fromViewportTo: S2,
  fromDocumentTo: _2,
  Marked: td,
  markedHighlight: J4,
  markedKatex: K4,
  hljs: Fn,
  ModuleURL: import.meta.url
  // actual URL of the running BrowserCard.js
};
customElements.get("bc-deck") == null && customElements.define("bc-deck", um);
customElements.get("bc-designer") == null && customElements.define("bc-designer", cm);
const Pg = _.HTMLsafe, Vg = _.ValidatorForClassifier, Hg = _.ValueIsArray, qg = _.ValueIsBoolean, Wg = _.ValueIsCardinal, Ug = _.ValueIsColor, Gg = _.ValueIsEMailAddress, jg = _.ValueIsFiniteNumber, Kg = _.ValueIsFunction, Zg = _.ValueIsInteger, Xg = _.ValueIsIntegerInRange, Jg = _.ValueIsList, Yg = _.ValueIsListSatisfying, Qg = _.ValueIsNumber, e3 = _.ValueIsNumberInRange, t3 = _.ValueIsObject, r3 = _.ValueIsOneOf, n3 = _.ValueIsOrdinal, i3 = _.ValueIsPlainObject, a3 = _.ValueIsString, s3 = _.ValueIsStringMatching, o3 = _.ValueIsText, l3 = _.ValueIsTextline, c3 = _.ValueIsURL, u3 = _.acceptNil, d3 = _.escaped, h3 = _.expectBoolean, f3 = _.expectFunction, p3 = _.expectText, m3 = _.quoted, g3 = _.rejectNil;
export {
  Bc as AlphaPercentOf,
  I2 as BC_BackgroundModes,
  T2 as BC_BorderStyles,
  xm as BC_Cursors,
  Eg as BC_DatePattern,
  S5 as BC_DateRegExp,
  Ng as BC_DateTimePattern,
  k5 as BC_DateTimeRegExp,
  ns as BC_ErrorIndicator,
  vm as BC_FontStyles,
  C2 as BC_FontWeightValues,
  bm as BC_FontWeights,
  Bg as BC_MonthPattern,
  C5 as BC_MonthRegExp,
  N2 as BC_Overflows,
  Dg as BC_PropertyEditorTypes,
  Fs as BC_SafeSlot,
  wm as BC_TextAlignments,
  A2 as BC_TextDecorationLines,
  $2 as BC_TextDecorationStyles,
  Ig as BC_TimePattern,
  y5 as BC_TimeRegExp,
  gm as BC_Version,
  Rg as BC_WeekPattern,
  _5 as BC_WeekRegExp,
  Fg as BC_expectedOrientations,
  l1 as BC_horizontalAnchorses,
  c1 as BC_verticalAnchorses,
  Lc as ColorFrom,
  zc as EOLCount,
  Mn as Fragment,
  Pg as HTMLsafe,
  td as Marked,
  o1 as Preact,
  Oc as RGBHexOf,
  L0 as ScriptInstance,
  C1 as StringFromArguments,
  Vg as ValidatorForClassifier,
  $o as ValueIsAnchors,
  Hg as ValueIsArray,
  b1 as ValueIsBackgroundTexture,
  qg as ValueIsBoolean,
  v1 as ValueIsBorderStyle,
  w1 as ValueIsBoxShadow,
  Ea as ValueIsCardJSON,
  Wg as ValueIsCardinal,
  Ug as ValueIsColor,
  zg as ValueIsDate,
  Mg as ValueIsDateTime,
  Nr as ValueIsDeck,
  Cr as ValueIsDimension,
  Gg as ValueIsEMailAddress,
  jg as ValueIsFiniteNumber,
  Kg as ValueIsFunction,
  f1 as ValueIsGeometry,
  u1 as ValueIsIdentifier,
  Zg as ValueIsInteger,
  Xg as ValueIsIntegerInRange,
  sg as ValueIsIntegerList,
  rg as ValueIsLineList,
  Jg as ValueIsList,
  Yg as ValueIsListSatisfying,
  ir as ValueIsLocation,
  Lg as ValueIsMonth,
  Si as ValueIsName,
  Qg as ValueIsNumber,
  e3 as ValueIsNumberInRange,
  ig as ValueIsNumberList,
  t3 as ValueIsObject,
  Io as ValueIsOffsets,
  r3 as ValueIsOneOf,
  n3 as ValueIsOrdinal,
  x1 as ValueIsOverflowList,
  y2 as ValueIsPhoneNumber,
  i3 as ValueIsPlainObject,
  d1 as ValueIsPosition,
  y1 as ValueIsSerializableObject,
  To as ValueIsSerializableValue,
  h1 as ValueIsSize,
  a3 as ValueIsString,
  s3 as ValueIsStringMatching,
  o3 as ValueIsText,
  m1 as ValueIsTextDecoration,
  g1 as ValueIsTextShadow,
  l3 as ValueIsTextline,
  Tg as ValueIsTime,
  c3 as ValueIsURL,
  Og as ValueIsWeek,
  pa as ValueIsWidgetJSON,
  u3 as acceptNil,
  cg as acceptableBoolean,
  mg as acceptableCardinal,
  yg as acceptableColor,
  kg as acceptableEMailAddress,
  xg as acceptableFunction,
  hg as acceptableInteger,
  fg as acceptableIntegerInRange,
  Cg as acceptableName,
  Ag as acceptableNameOrIndex,
  ug as acceptableNumber,
  dg as acceptableNumberInRange,
  pg as acceptableOrdinal,
  Sg as acceptablePhoneNumber,
  gg as acceptableString,
  bg as acceptableStringMatching,
  vg as acceptableText,
  wg as acceptableTextline,
  _g as acceptableURL,
  lg as acceptableValue,
  U2 as allowAnchors,
  Q2 as allowBackgroundTexture,
  t5 as allowBorderStyle,
  n5 as allowBoxShadow,
  L2 as allowDimension,
  q2 as allowGeometry,
  E2 as allowIdentifier,
  b5 as allowIntegerList,
  d5 as allowLineList,
  O2 as allowLocation,
  R2 as allowName,
  p5 as allowNumberList,
  j2 as allowOffsets,
  a5 as allowOverflowList,
  F2 as allowPosition,
  c5 as allowSerializableObject,
  o5 as allowSerializableValue,
  V2 as allowSize,
  Z2 as allowTextDecoration,
  J2 as allowTextShadow,
  Bm as allowedAnchors,
  Wm as allowedBackgroundTexture,
  Gm as allowedBorderStyle,
  Km as allowedBoxShadow,
  Im as allowedDimension,
  Rm as allowedGeometry,
  km as allowedIdentifier,
  og as allowedIntegerList,
  ng as allowedLineList,
  Am as allowedLocation,
  _m as allowedName,
  ag as allowedNumberList,
  Dm as allowedOffsets,
  Xm as allowedOverflowList,
  Nm as allowedPosition,
  eg as allowedSerializableObject,
  Ym as allowedSerializableValue,
  Em as allowedSize,
  Pm as allowedTextDecoration,
  Hm as allowedTextShadow,
  is as buildContext,
  ha as buildScriptParams,
  hi as cardTreeIndex,
  fm as clear,
  Qc as cloneElement,
  D0 as computeOffsets,
  eu as createContext,
  ln as createElement,
  du as createPortal,
  mh as createRef,
  hu as createStore,
  zo as deckShallBeRemembered,
  Ni as del,
  mm as entries,
  d3 as escaped,
  Wi as escapedForHTML,
  G2 as expectAnchors,
  e5 as expectBackgroundTexture,
  h3 as expectBoolean,
  r5 as expectBorderStyle,
  i5 as expectBoxShadow,
  D2 as expectDimension,
  f3 as expectFunction,
  W2 as expectGeometry,
  z2 as expectIdentifier,
  v5 as expectIntegerList,
  h5 as expectLineList,
  B2 as expectLocation,
  Ao as expectName,
  m5 as expectNumberList,
  K2 as expectOffsets,
  s5 as expectOverflowList,
  P2 as expectPosition,
  u5 as expectSerializableObject,
  l5 as expectSerializableValue,
  H2 as expectSize,
  p3 as expectText,
  X2 as expectTextDecoration,
  Y2 as expectTextShadow,
  Lm as expectedAnchors,
  Um as expectedBackgroundTexture,
  jm as expectedBorderStyle,
  Zm as expectedBoxShadow,
  Tm as expectedDimension,
  Om as expectedGeometry,
  Sm as expectedIdentifier,
  w5 as expectedIntegerList,
  f5 as expectedLineList,
  $m as expectedLocation,
  Cm as expectedName,
  g5 as expectedNumberList,
  Fm as expectedOffsets,
  Jm as expectedOverflowList,
  Mm as expectedPosition,
  tg as expectedSerializableObject,
  Qm as expectedSerializableValue,
  zm as expectedSize,
  Vm as expectedTextDecoration,
  qm as expectedTextShadow,
  Xe as flattenCards,
  $h as forwardRef,
  _2 as fromDocumentTo,
  k2 as fromLocalTo,
  S2 as fromViewportTo,
  Gn as get,
  ln as h,
  Z as html,
  x5 as installStylesheetFor,
  Dh as keys,
  j5 as makeCardProxy,
  K5 as makeDeckProxy,
  G5 as makeWidgetProxy,
  J4 as markedHighlight,
  K4 as markedKatex,
  Ch as memo,
  T1 as moveCardInTree,
  I1 as moveWouldCycle,
  Or as newInternalId,
  q5 as normalizeWidgetOrder,
  $g as normalizedName,
  Ws as pathOf,
  Zn as prepareLoadedDeck,
  m3 as quoted,
  k1 as raiseIdCounterTo,
  g3 as rejectNil,
  D5 as rememberCurrentDeck,
  sn as render,
  O5 as resolveBehaviorUrl,
  Yt as resolveGeometry,
  E5 as safelyRendered,
  Nn as sanitizeName,
  Hi as serializableDeck,
  Nl as set,
  F5 as setDeckRemembering,
  vr as siblingListOf,
  N1 as stripComputedGeometry,
  V5 as stripInternalIds,
  Ln as throwError,
  ym as throwReadOnlyError,
  z0 as toChildArray,
  Yi as uniqueNameIn,
  qt as useCallback,
  iu as useContext,
  Xt as useEffect,
  Ys as useErrorBoundary,
  au as useId,
  kh as useLayoutEffect,
  F0 as useMemo,
  nu as useReducer,
  Fe as useRef,
  Ze as useState,
  pm as values
};
