var R1 = Object.defineProperty;
var vo = (t) => {
  throw TypeError(t);
};
var O1 = (t, e, r) => e in t ? R1(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var Xe = (t, e, r) => O1(t, typeof e != "symbol" ? e + "" : e, r), ei = (t, e, r) => e.has(t) || vo("Cannot " + r);
var ae = (t, e, r) => (ei(t, e, "read from private field"), r ? r.call(t) : e.get(t)), Ft = (t, e, r) => e.has(t) ? vo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Je = (t, e, r, n) => (ei(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), We = (t, e, r) => (ei(t, e, "access private method"), r);
var wo = (t, e, r, n) => ({
  set _(a) {
    Je(t, e, a, r);
  },
  get _() {
    return ae(t, e, n);
  }
});
function Zl(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var A0 = { exports: {} }, B1 = A0.exports, xo;
function D1() {
  return xo || (xo = 1, (function(t, e) {
    (function(r, n) {
      n(e);
    })(B1, (function(r) {
      var n = Function("return this")();
      function a(g, C) {
        return g == null || "hasOwnProperty" in g && typeof g.hasOwnProperty == "function" ? g.hasOwnProperty(C) : Object.prototype.hasOwnProperty.call(g, C);
      }
      function i(g, C) {
        return g == null || "isPrototypeOf" in g && typeof g.isPrototypeOf == "function" ? g.isPrototypeOf(C) : Object.prototype.isPrototypeOf.call(g, C);
      }
      function s(g) {
        var C = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(g);
        if (C == null) throw new Error(g);
        var R = new Error(C[2]);
        throw R.name = C[1], R;
      }
      function o(g) {
        return typeof g == "boolean" || g instanceof Boolean;
      }
      function c(g) {
        return typeof g == "number" || g instanceof Number;
      }
      function d(g) {
        return (typeof g == "number" || g instanceof Number) && isFinite(g.valueOf());
      }
      function h(g) {
        return (typeof g == "number" || g instanceof Number) && isNaN(g.valueOf());
      }
      function f(g) {
        return (typeof g == "number" || g instanceof Number) && (g = g.valueOf(), isFinite(g) && Math.round(g) === g);
      }
      function b(g) {
        return (typeof g == "number" || g instanceof Number) && (g = g.valueOf(), isFinite(g) && Math.round(g) === g && g >= 0);
      }
      function v(g) {
        return (typeof g == "number" || g instanceof Number) && (g = g.valueOf(), isFinite(g) && Math.round(g) === g && g >= 1);
      }
      function k(g) {
        return typeof g == "string" || g instanceof String;
      }
      var $ = /^\s*$/;
      function M(g) {
        return (typeof g == "string" || g instanceof String) && !$.test(g.valueOf());
      }
      function I(g, C) {
        return (typeof g == "string" || g instanceof String) && C.test(g.valueOf());
      }
      var y = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function T(g) {
        return I(g, y);
      }
      var B = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function P(g) {
        return I(g, B);
      }
      function H(g) {
        return typeof g == "function";
      }
      function Q(g) {
        return typeof g == "function" && (g.name == null || g.name === "");
      }
      function W(g) {
        return typeof g == "function" && g.name != null && g.name !== "";
      }
      function j(g) {
        return typeof g == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(g.toString());
      }
      function pe(g) {
        return typeof g == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(g.toString());
      }
      function Ce(g) {
        return g != null && typeof g == "object";
      }
      function Ae(g) {
        return g != null && typeof g == "object" && Object.getPrototypeOf(g) === Object.prototype;
      }
      function Fe(g) {
        return g != null && typeof g == "object" && !(g instanceof Object);
      }
      var ze = Array.isArray;
      function D(g, C, R) {
        if (ze(g)) {
          for (var X = 0, ge = g.length; X < ge; X++) if (g[X] === void 0) return !1;
          return !(C != null && g.length < C) && !(R != null && g.length > R);
        }
        return !1;
      }
      function ne(g, C, R, X) {
        if (ze(g)) try {
          for (var ge = 0, Oe = g.length; ge < Oe; ge++) if (C(g[ge]) == 0) return !1;
          return !(R != null && g.length < R) && !(X != null && g.length > X);
        } catch {
        }
        return !1;
      }
      function be(g) {
        return g instanceof Date;
      }
      function J(g) {
        return g instanceof Error;
      }
      function le(g) {
        return g != null && typeof g.then == "function";
      }
      function ie(g) {
        return g instanceof RegExp;
      }
      function Le(g, C) {
        return C.indexOf(g) >= 0;
      }
      function je(g) {
        return k(g) && (Zn.hasOwnProperty(g) || /^#[a-fA-F0-9]{6}$/.test(g) || /^#[a-fA-F0-9]{8}$/.test(g) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(g) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(g));
      }
      var Ee = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      function ft(g) {
        return I(g, Ee);
      }
      var _t = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function zr(g) {
        if (!I(g, _t) || g === "") return !1;
        try {
          return new URL(g, "file://"), !0;
        } catch {
          return !1;
        }
      }
      var Me = !1, Re = !0;
      function Dt(g, C, R, X, ge) {
        if (C == null) {
          if (X) return C;
          s("MissingArgument: no ".concat(Ge(g), " given"));
        } else if (R(C)) switch (!0) {
          case C instanceof Boolean:
          case C instanceof Number:
          case C instanceof String:
            return C.valueOf();
          default:
            return C;
        }
        else s("InvalidArgument: the given ".concat(Ge(g), " is no valid ").concat(Ge(ge)));
      }
      function oe(g, C, R) {
        var X = function(Oe, Pr) {
          return Dt(Oe, Pr, g, C, R);
        }, ge = g.name;
        return ge != null && /^ValueIs/.test(ge) ? Ct(X, ge.replace(/^ValueIs/, C ? "allow" : "expect")) : X;
      }
      function Ct(g, C) {
        if (g == null && s("MissingArgument: no function given"), typeof g != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), C == null && s("MissingArgument: no desired name given"), typeof C == "string" || C instanceof String || s("InvalidArgument: the given desired name is not a string"), g.name === C) return g;
        try {
          if (Object.defineProperty(g, "name", { value: C }), g.name === C) return g;
        } catch {
        }
        return new Function("originalFunction", "return function " + C + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(g);
      }
      function Nr(g, C) {
        if (C != null) return C.valueOf();
        s("MissingArgument: no ".concat(Ge(g), " given"));
      }
      var gr = Nr, tr = oe(o, Re, "boolean value"), xn = tr, Rr = oe(o, Me, "boolean value"), Qr = Rr, br = oe(c, Re, "numeric value"), Or = br, Mt = oe(c, Me, "numeric value"), Br = Mt, vr = oe(d, Re, "finite numeric value"), rr = vr, Et = oe(d, Me, "finite numeric value"), wr = Et, Ht = oe(h, Re, "NaN value"), nr = Ht, Lt = oe(h, Me, "NaN value"), xr = Lt;
      function yn(g, C, R, X, ge, Oe) {
        return C == null ? C : ar(g, C, R, X, ge, Oe);
      }
      var m0 = yn;
      function Dr(g, C, R, X, ge, Oe) {
        if (Mt(g, C), isNaN(C) && s("InvalidArgument: the given ".concat(Ge(g), " is not-a-number")), ge == null && (ge = !0), Oe == null && (Oe = !0), R != null && isFinite(R)) {
          if (X != null && isFinite(X)) {
            if (C < R || !ge && C === R || C > X || !Oe && C === X) throw new RangeError("the given ".concat(Ge(g), " (").concat(C, ") is outside ") + "the allowed range (".concat(R, "...").concat(X, ")"));
          } else if (C < R || !ge && C === R) throw new RangeError("the given ".concat(Ge(g), " is below the allowed ") + "minimum (".concat(C, " ").concat(ge ? "<" : "<=", " ").concat(R, ")"));
        } else if (X != null && isFinite(X) && (C > X || !Oe && C === X)) throw new RangeError("the given ".concat(Ge(g), " exceeds the allowed ") + "maximum (".concat(C, " ").concat(Oe ? ">" : ">=", " ").concat(X, ")"));
        return C.valueOf();
      }
      var ar = Dr, yr = oe(f, Re, "integral numeric value"), kn = yr, Lr = oe(f, Me, "integral numeric value"), g0 = Lr;
      function en(g, C, R, X) {
        return C == null ? C : wt(g, C, R, X);
      }
      var Fn = en;
      function Sn(g, C, R, X) {
        if (Lr(g, C), isNaN(C) && s("InvalidArgument: the given ".concat(Ge(g), " is not-a-number")), R != null && isFinite(R)) {
          if (X != null && isFinite(X)) {
            if (C < R || C > X) throw new RangeError("the given ".concat(Ge(g), " (").concat(C, ") is outside ") + "the allowed range (".concat(R, "...").concat(X, ")"));
          } else if (C < R) throw new RangeError("the given ".concat(Ge(g), " is below the allowed ") + "minimum (".concat(C, " < ").concat(R, ")"));
        } else if (X != null && isFinite(X) && C > X) throw new RangeError("the given ".concat(Ge(g), " exceeds the allowed ") + "maximum (".concat(C, " > ").concat(X, ")"));
        return C.valueOf();
      }
      var wt = Sn, tn = oe(b, Re, "ordinal number"), ir = tn, S = oe(b, Me, "ordinal number"), N = S, Z = oe(v, Re, "cardinal number"), we = Z, tt = oe(v, Me, "cardinal number"), rt = tt, K = oe(k, Re, "literal string"), te = K, me = oe(k, Me, "literal string"), nt = me, qe = oe(M, Re, "non-empty literal string"), sr = qe, or = oe(M, Me, "non-empty literal string"), at = or;
      function rn(g, C, R) {
        return C == null ? C : Pn(g, C, R);
      }
      var _n = rn;
      function Cn(g, C, R) {
        if (me(g, C), R.test(C)) return C.valueOf();
        s("InvalidArgument: the given ".concat(Ge(g), " does not match the specified pattern"));
      }
      var Pn = Cn, Hn = oe(T, Re, "literal text"), qn = Hn, qt = oe(T, Me, "literal text"), b0 = qt, Un = oe(P, Re, "single line of text"), v0 = Un, E = oe(P, Me, "single line of text"), z = E, V = oe(H, Re, "JavaScript function"), de = V, fe = oe(H, Me, "JavaScript function"), Ne = fe, Ze = oe(Q, Re, "anonymous JavaScript function"), lr = Ze, L = oe(Q, Me, "anonymous JavaScript function"), ce = L, ke = oe(W, Re, "named JavaScript function"), Pe = ke, ut = oe(W, Me, "named JavaScript function"), Ut = ut, cr = oe(j, Re, "native JavaScript function"), Vn = cr, At = oe(j, Me, "native JavaScript function"), Xt = At, w0 = oe(pe, Re, "scripted JavaScript function"), X0 = w0, x0 = oe(pe, Me, "scripted JavaScript function"), Ja = x0, Y0 = oe(Ce, Re, "JavaScript object"), Qa = Y0, y0 = oe(Ce, Me, "JavaScript object"), jn = y0, k0 = oe(Ae, Re, '"plain" JavaScript object'), Yt = k0, J0 = oe(Ae, Me, '"plain" JavaScript object'), S0 = J0, ye = oe(Fe, Re, '"vanilla" JavaScript object'), Q0 = ye, mt = oe(Fe, Me, '"vanilla" JavaScript object'), Ke = mt;
      function An(g, C) {
        return C == null ? C : Wn(g, C);
      }
      var Fr = An;
      function Gn(g, C) {
        if (C == null && s("MissingArgument: no ".concat(Ge(g), " given")), ze(C)) return C;
        s("InvalidArgument: the given ".concat(Ge(g), " is no JavaScript array"));
      }
      var Wn = Gn;
      function ee(g, C, R, X, ge) {
        return C == null ? C : He(g, C, R, X, ge);
      }
      var he = ee;
      function Te(g, C, R, X, ge) {
        if (C == null && s("MissingArgument: no ".concat(Ge(g), " given")), D(C, X, ge)) return C;
        s("InvalidArgument: the given ".concat(Ge(g), " is ") + (R == null ? "either not a list or contains an invalid number of elements" : "no " + Ge(R)));
      }
      var He = Te;
      function xt(g, C, R, X, ge, Oe) {
        return C == null ? C : ta(g, C, R, X, ge, Oe);
      }
      var ur = xt;
      function ea(g, C, R, X, ge, Oe) {
        if (C == null && s("MissingArgument: no ".concat(Ge(g), " given")), ne(C, R, ge, Oe)) return C;
        s("InvalidArgument: the given ".concat(Ge(g), " is ") + (X == null ? "either not a list or contains invalid elements" : "no " + Ge(X)));
      }
      var ta = ea;
      function Us(g, C, R, X) {
        return C == null ? C : js(g, C, R, X);
      }
      var g1 = Us;
      function Vs(g, C, R, X) {
        return C == null && s("MissingArgument: no ".concat(Ge(g), " given")), C instanceof R || s("InvalidArgument: the given ".concat(Ge(g), " is no ").concat(Ge(X))), C;
      }
      var js = Vs;
      function Gs(g, C, R, X) {
        return C == null ? C : Zs(g, C, R, X);
      }
      var b1 = Gs;
      function Ws(g, C, R, X) {
        if (C == null && s("MissingArgument: no ".concat(Ge(g), " given")), R.isPrototypeOf(C)) return C;
        s("InvalidArgument: the given ".concat(Ge(g), " is no ").concat(Ge(X)));
      }
      var Zs = Ws, Ks = oe(be, Re, "JavaScript Date object"), v1 = Ks, Xs = oe(be, Me, "JavaScript Date object"), w1 = Xs, Ys = oe(J, Re, "JavaScript Error object"), x1 = Ys, Js = oe(J, Me, "JavaScript Error object"), y1 = Js, Qs = oe(le, Re, 'JavaScript Promise (or "Thenable") object'), k1 = Qs, eo = oe(le, Me, 'JavaScript Promise (or "Thenable") object'), S1 = eo, to = oe(ie, Re, "JavaScript RegExp object"), _1 = to, ro = oe(ie, Me, "JavaScript RegExp object"), C1 = ro;
      function no(g, C, R) {
        return C == null ? C : io(g, C, R);
      }
      var A1 = no;
      function ao(g, C, R) {
        if (C == null && s("MissingArgument: no ".concat(Ge(g), " given")), Le(C, R)) return C == null || typeof C.valueOf != "function" ? C : C.valueOf();
        s("InvalidArgument: the given ".concat(Ge(g), " is not among the supported values"));
      }
      var io = ao, so = oe(je, Re, "CSS color specification"), T1 = so, oo = oe(je, Me, "CSS color specification"), $1 = oo, lo = oe(ft, Re, "EMail address"), M1 = lo, co = oe(ft, Me, "EMail address"), E1 = co, uo = oe(zr, Re, "URL"), I1 = uo, ho = oe(zr, Me, "URL"), z1 = ho;
      function Ge(g) {
        return g.replace(/\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?/g, (function(C) {
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
              var R = C.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(R.length) + R;
          }
        }));
      }
      function fo(g, C) {
        return C === void 0 && (C = '"'), g.replace(C === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, (function(R) {
          switch (R) {
            case "'":
              return "\\'";
            case '"':
              return '\\"';
            case "\\":
              return "\\\\";
            default:
              return R;
          }
        })).replace(/[\x00-\x1f\x7f-\x9f]/g, (function(R) {
          switch (R) {
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
              var X = R.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(X.length) + X;
          }
        }));
      }
      function po(g, C) {
        return C = (C || "").trim() || "<br/>", g.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, (function(R) {
          switch (R) {
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
              var X = R.charCodeAt(0).toString(16);
              return "&#x0000".substring(3, 7 - X.length) + X + ";";
          }
        }));
      }
      function ra(g, C, R) {
        if (g === C) return !1;
        var X = typeof g;
        if (X !== typeof C) return !0;
        switch (X) {
          case "undefined":
          case "boolean":
          case "string":
          case "function":
          default:
            return !0;
          case "number":
            return isNaN(g) !== isNaN(C) || Math.abs(g - C) > Number.EPSILON;
          case "object":
            return g == null || C == null || (R === "by-value" && (g instanceof Boolean || g instanceof Number || g instanceof String) ? g.valueOf() !== C.valueOf() : Array.isArray(g) ? (function(ge, Oe, Pr) {
              if (!Array.isArray(Oe) || ge.length !== Oe.length) return !0;
              for (var Vt = 0, N1 = ge.length; Vt < N1; Vt++) if (ra(ge[Vt], Oe[Vt], Pr)) return !0;
              return !1;
            })(g, C, R) : R === "by-reference" || (function(ge, Oe, Pr) {
              if (Object.getPrototypeOf(ge) !== Object.getPrototypeOf(Oe)) return !0;
              for (var Vt in ge) if (!(Vt in Oe)) return !0;
              for (var Vt in Oe)
                if (!(Vt in ge) || ra(ge[Vt], Oe[Vt], Pr)) return !0;
              return !1;
            })(g, C, R));
        }
        return !0;
      }
      function mo(g) {
        for (var C in y0("candidate", g), g) if (a(g, C)) return !1;
        return !0;
      }
      function go(g) {
        return /^\s*$/.test(g);
      }
      var Zn = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
      function bo(g) {
        var C = g.toLowerCase();
        if (Zn.hasOwnProperty(C) && (g = Zn[C]), /^#[a-fA-F0-9]{6}$/.test(g)) return g + "FF";
        if (/^#[a-fA-F0-9]{8}$/.test(g)) return g;
        var R = "0123456789ABCDEF";
        function X(Oe) {
          return Oe > 255 && (Oe = 255), R[Math.trunc(Oe / 16)] + R[Oe % 16];
        }
        var ge = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(g);
        if (ge != null) return "#" + X(parseInt(ge[1], 10)) + X(parseInt(ge[2], 10)) + X(parseInt(ge[3], 10)) + "FF";
        if ((ge = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(g)) != null) return "#" + X(parseInt(ge[1], 10)) + X(parseInt(ge[2], 10)) + X(parseInt(ge[3], 10)) + X(255 * parseFloat(ge[4]));
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }
      r.ColorSet = Zn, r.FunctionWithName = Ct, r.HTMLsafe = po, r.HexColor = bo, r.MarkDownSafe = function(g, C) {
        return po(g, C).replace(/:/g, "&#58;");
      }, r.ObjectIsEmpty = mo, r.ObjectIsNotEmpty = function(g) {
        return !mo(g);
      }, r.ObjectMergedWith = function(g) {
        for (var C = [], R = 1; R < arguments.length; R++) C[R - 1] = arguments[R];
        for (var X = 0, ge = C.length; X < ge; X++) {
          var Oe = C[X];
          if (Oe != null) if (typeof Oe == "object") for (var Pr in Oe) {
            var Vt = Object.getOwnPropertyDescriptor(Oe, Pr);
            Vt != null && Object.defineProperty(g, Pr, Vt);
          }
          else s("InvalidArgument: argument #" + (X + 1) + " is not an object");
        }
        return g;
      }, r.Object_hasOwnProperty = a, r.Object_isPrototypeOf = i, r.Object_propertyIsEnumerable = function(g, C) {
        return g == null || "propertyIsEnumerable" in g && typeof g.propertyIsEnumerable == "function" ? g.propertyIsEnumerable(C) : Object.prototype.propertyIsEnumerable.call(g, C);
      }, r.Object_toLocaleString = function(g) {
        return g == null || "toLocaleString" in g && typeof g.toLocaleString == "function" ? g.toLocaleString() : Object.prototype.toString.call(g);
      }, r.Object_toString = function(g) {
        return g == null || "toString" in g && typeof g.toString == "function" ? g.toString() : Object.prototype.toString.call(g);
      }, r.Object_valueOf = function(g) {
        return g == null || "valueOf" in g && typeof g.valueOf == "function" ? g.valueOf() : Object.prototype.valueOf.call(g);
      }, r.RGBAColor = function(g) {
        var C = g.toLowerCase();
        if (Zn.hasOwnProperty(C)) return Zn[C];
        if (/^#[a-fA-F0-9]{6}$/.test(g)) return "rgba(" + parseInt(g.slice(1, 3), 16) + "," + parseInt(g.slice(3, 5), 16) + "," + parseInt(g.slice(5, 7), 16) + ", 1)";
        if (/^#[a-fA-F0-9]{8}$/.test(g)) return "rgba(" + parseInt(g.slice(1, 3), 16) + "," + parseInt(g.slice(3, 5), 16) + "," + parseInt(g.slice(5, 7), 16) + "," + parseInt(g.slice(7), 16) / 255 + ")";
        var R = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(g);
        if (R != null) return g.slice(0, g.length - 1) + ",1)";
        if ((R = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(g)) != null) return g;
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }, r.StringIsEmpty = go, r.StringIsNotEmpty = function(g) {
        return !go(g);
      }, r.ValidatorForClassifier = oe, r.ValueExists = function(g) {
        return g != null;
      }, r.ValueInheritsFrom = function(g, C) {
        return i(C, g);
      }, r.ValueIsAnonymousFunction = Q, r.ValueIsArray = ze, r.ValueIsBoolean = o, r.ValueIsCardinal = v, r.ValueIsColor = je, r.ValueIsDate = be, r.ValueIsEMailAddress = ft, r.ValueIsEmptyString = function(g) {
        return (typeof g == "string" || g instanceof String) && $.test(g.valueOf());
      }, r.ValueIsError = J, r.ValueIsFiniteNumber = d, r.ValueIsFunction = H, r.ValueIsInstanceOf = function(g, C) {
        return g instanceof C;
      }, r.ValueIsInteger = f, r.ValueIsIntegerInRange = function(g, C, R) {
        if (!f(g) || isNaN(g)) return !1;
        if (d(C)) {
          if (d(R)) {
            if (g < C || g > R) return !1;
          } else if (g < C) return !1;
        } else if (d(R) && g > R) return !1;
        return !0;
      }, r.ValueIsList = D, r.ValueIsListSatisfying = ne, r.ValueIsMissing = function(g) {
        return g == null;
      }, r.ValueIsNaN = h, r.ValueIsNamedFunction = W, r.ValueIsNativeFunction = j, r.ValueIsNonEmptyString = M, r.ValueIsNumber = c, r.ValueIsNumberInRange = function(g, C, R, X, ge) {
        if (X === void 0 && (X = !0), ge === void 0 && (ge = !0), !c(g) || isNaN(g)) return !1;
        if (d(C)) {
          if (d(R)) {
            if (g < C || !X && g === C || g > R || !ge && g === R) return !1;
          } else if (g < C || !X && g === C) return !1;
        } else if (d(R) && (g > R || !ge && g === R)) return !1;
        return !0;
      }, r.ValueIsObject = Ce, r.ValueIsOneOf = Le, r.ValueIsOrdinal = b, r.ValueIsPlainObject = Ae, r.ValueIsPromise = le, r.ValueIsRegExp = ie, r.ValueIsScriptedFunction = pe, r.ValueIsString = k, r.ValueIsStringMatching = I, r.ValueIsText = T, r.ValueIsTextline = P, r.ValueIsURL = zr, r.ValueIsVanillaObject = Fe, r.ValuesAreEqual = function(g, C, R) {
        return !ra(g, C, R);
      }, r.ValuesDiffer = ra, r.acceptNil = Re, r.allowAnonymousFunction = Ze, r.allowArray = An, r.allowBoolean = tr, r.allowCardinal = Z, r.allowColor = so, r.allowDate = Ks, r.allowEMailAddress = lo, r.allowError = Ys, r.allowFiniteNumber = vr, r.allowFunction = V, r.allowInstanceOf = Us, r.allowInteger = yr, r.allowIntegerInRange = en, r.allowList = ee, r.allowListSatisfying = xt, r.allowNaN = Ht, r.allowNamedFunction = ke, r.allowNativeFunction = cr, r.allowNonEmptyString = qe, r.allowNumber = br, r.allowNumberInRange = yn, r.allowObject = Y0, r.allowOneOf = no, r.allowOrdinal = tn, r.allowPlainObject = k0, r.allowPromise = Qs, r.allowRegExp = to, r.allowScriptedFunction = w0, r.allowString = K, r.allowStringMatching = rn, r.allowText = Hn, r.allowTextline = Un, r.allowURL = uo, r.allowValueInheritingFrom = Gs, r.allowVanillaObject = ye, r.allowedAnonymousFunction = lr, r.allowedArray = Fr, r.allowedBoolean = xn, r.allowedCardinal = we, r.allowedColor = T1, r.allowedDate = v1, r.allowedEMailAddress = M1, r.allowedError = x1, r.allowedFiniteNumber = rr, r.allowedFunction = de, r.allowedInstanceOf = g1, r.allowedInteger = kn, r.allowedIntegerInRange = Fn, r.allowedList = he, r.allowedListSatisfying = ur, r.allowedNaN = nr, r.allowedNamedFunction = Pe, r.allowedNativeFunction = Vn, r.allowedNonEmptyString = sr, r.allowedNumber = Or, r.allowedNumberInRange = m0, r.allowedObject = Qa, r.allowedOneOf = A1, r.allowedOrdinal = ir, r.allowedPlainObject = Yt, r.allowedPromise = k1, r.allowedRegExp = _1, r.allowedScriptedFunction = X0, r.allowedString = te, r.allowedStringMatching = _n, r.allowedText = qn, r.allowedTextline = v0, r.allowedURL = I1, r.allowedValueInheritingFrom = b1, r.allowedVanillaObject = Q0, r.constrained = function(g, C, R) {
        return C === void 0 && (C = -1 / 0), R === void 0 && (R = 1 / 0), Math.max(C, Math.min(g, R));
      }, r.escaped = Ge, r.expectAnonymousFunction = L, r.expectArray = Gn, r.expectBoolean = Rr, r.expectCardinal = tt, r.expectColor = oo, r.expectDate = Xs, r.expectEMailAddress = co, r.expectError = Js, r.expectFiniteNumber = Et, r.expectFunction = fe, r.expectInstanceOf = Vs, r.expectInteger = Lr, r.expectIntegerInRange = Sn, r.expectList = Te, r.expectListSatisfying = ea, r.expectNaN = Lt, r.expectNamedFunction = ut, r.expectNativeFunction = At, r.expectNonEmptyString = or, r.expectNumber = Mt, r.expectNumberInRange = Dr, r.expectObject = y0, r.expectOneOf = ao, r.expectOrdinal = S, r.expectPlainObject = J0, r.expectPromise = eo, r.expectRegExp = ro, r.expectScriptedFunction = x0, r.expectString = me, r.expectStringMatching = Cn, r.expectText = qt, r.expectTextline = E, r.expectURL = ho, r.expectValue = Nr, r.expectValueInheritingFrom = Ws, r.expectVanillaObject = mt, r.expectedAnonymousFunction = ce, r.expectedArray = Wn, r.expectedBoolean = Qr, r.expectedCardinal = rt, r.expectedColor = $1, r.expectedDate = w1, r.expectedEMailAddress = E1, r.expectedError = y1, r.expectedFiniteNumber = wr, r.expectedFunction = Ne, r.expectedInstanceOf = js, r.expectedInteger = g0, r.expectedIntegerInRange = wt, r.expectedList = He, r.expectedListSatisfying = ta, r.expectedNaN = xr, r.expectedNamedFunction = Ut, r.expectedNativeFunction = Xt, r.expectedNonEmptyString = at, r.expectedNumber = Br, r.expectedNumberInRange = ar, r.expectedObject = jn, r.expectedOneOf = io, r.expectedOrdinal = N, r.expectedPlainObject = S0, r.expectedPromise = S1, r.expectedRegExp = C1, r.expectedScriptedFunction = Ja, r.expectedString = nt, r.expectedStringMatching = Pn, r.expectedText = b0, r.expectedTextline = z, r.expectedURL = z1, r.expectedValue = gr, r.expectedValueInheritingFrom = Zs, r.expectedVanillaObject = Ke, r.global = n, r.quotable = fo, r.quoted = function(g, C) {
        return C === void 0 && (C = '"'), C + fo(g, C) + C;
      }, r.rejectNil = Me, r.shortHexColor = function(g) {
        return bo(g).slice(0, 7);
      }, r.throwError = s, r.unescaped = function(g) {
        return g.replace(/\\[0bfnrtv'"\\\/]|\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}/g, (function(C) {
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
              var R = parseInt(C.slice(2), 16);
              return String.fromCharCode(R);
          }
        }));
      }, r.validatedArgument = Dt, Object.defineProperty(r, "__esModule", { value: !0 });
    }));
  })(A0, A0.exports)), A0.exports;
}
var _ = D1(), j0, Ie, Kl, cn, yo, Xl, Yl, ti, va, E0, Jl, ns, Si, _i, Ql, _a = {}, Ca = [], L1 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, G0 = Array.isArray;
function Ar(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function as(t) {
  t && t.parentNode && t.parentNode.removeChild(t);
}
function Wr(t, e, r) {
  var n, a, i, s = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? j0.call(arguments, 2) : r), typeof t == "function" && t.defaultProps != null) for (i in t.defaultProps) s[i] === void 0 && (s[i] = t.defaultProps[i]);
  return I0(t, s, n, a, null);
}
function I0(t, e, r, n, a) {
  var i = { type: t, props: e, key: r, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++Kl, __i: -1, __u: 0 };
  return a == null && Ie.vnode != null && Ie.vnode(i), i;
}
function F1() {
  return { current: null };
}
function fn(t) {
  return t.children;
}
function Vr(t, e) {
  this.props = t, this.context = e;
}
function i0(t, e) {
  if (e == null) return t.__ ? i0(t.__, t.__i + 1) : null;
  for (var r; e < t.__k.length; e++) if ((r = t.__k[e]) != null && r.__e != null) return r.__e;
  return typeof t.type == "function" ? i0(t) : null;
}
function P1(t) {
  if (t.__P && t.__d) {
    var e = t.__v, r = e.__e, n = [], a = [], i = Ar({}, e);
    i.__v = e.__v + 1, Ie.vnode && Ie.vnode(i), is(t.__P, i, e, t.__n, t.__P.namespaceURI, 32 & e.__u ? [r] : null, n, r ?? i0(e), !!(32 & e.__u), a), i.__v = e.__v, i.__.__k[i.__i] = i, nc(n, i, a), e.__e = e.__ = null, i.__e != r && ec(i);
  }
}
function ec(t) {
  if ((t = t.__) != null && t.__c != null) return t.__e = t.__c.base = null, t.__k.some(function(e) {
    if (e != null && e.__e != null) return t.__e = t.__c.base = e.__e;
  }), ec(t);
}
function Ci(t) {
  (!t.__d && (t.__d = !0) && cn.push(t) && !Aa.__r++ || yo != Ie.debounceRendering) && ((yo = Ie.debounceRendering) || Xl)(Aa);
}
function Aa() {
  try {
    for (var t, e = 1; cn.length; ) cn.length > e && cn.sort(Yl), t = cn.shift(), e = cn.length, P1(t);
  } finally {
    cn.length = Aa.__r = 0;
  }
}
function tc(t, e, r, n, a, i, s, o, c, d, h) {
  var f, b, v, k, $, M, I, y = n && n.__k || Ca, T = e.length;
  for (c = H1(r, e, y, c, T), f = 0; f < T; f++) (v = r.__k[f]) != null && (b = v.__i != -1 && y[v.__i] || _a, v.__i = f, M = is(t, v, b, a, i, s, o, c, d, h), k = v.__e, v.ref && b.ref != v.ref && (b.ref && ss(b.ref, null, v), h.push(v.ref, v.__c || k, v)), $ == null && k != null && ($ = k), (I = !!(4 & v.__u)) || b.__k === v.__k ? (c = rc(v, c, t, I), I && b.__e && (b.__e = null)) : typeof v.type == "function" && M !== void 0 ? c = M : k && (c = k.nextSibling), v.__u &= -7);
  return r.__e = $, c;
}
function H1(t, e, r, n, a) {
  var i, s, o, c, d, h = r.length, f = h, b = 0;
  for (t.__k = new Array(a), i = 0; i < a; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = t.__k[i] = I0(null, s, null, null, null) : G0(s) ? s = t.__k[i] = I0(fn, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = t.__k[i] = I0(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : t.__k[i] = s, c = i + b, s.__ = t, s.__b = t.__b + 1, o = null, (d = s.__i = q1(s, r, c, f)) != -1 && (f--, (o = r[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (a > h ? b-- : a < h && b++), typeof s.type != "function" && (s.__u |= 4)) : d != c && (d == c - 1 ? b-- : d == c + 1 ? b++ : (d > c ? b-- : b++, s.__u |= 4))) : t.__k[i] = null;
  if (f) for (i = 0; i < h; i++) (o = r[i]) != null && (2 & o.__u) == 0 && (o.__e == n && (n = i0(o)), ic(o, o));
  return n;
}
function rc(t, e, r, n) {
  var a, i;
  if (typeof t.type == "function") {
    for (a = t.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = t, e = rc(a[i], e, r, n));
    return e;
  }
  t.__e != e && (n && (e && t.type && !e.parentNode && (e = i0(t)), r.insertBefore(t.__e, e || null)), e = t.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function s0(t, e) {
  return e = e || [], t == null || typeof t == "boolean" || (G0(t) ? t.some(function(r) {
    s0(r, e);
  }) : e.push(t)), e;
}
function q1(t, e, r, n) {
  var a, i, s, o = t.key, c = t.type, d = e[r], h = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || h && o == d.key && c == d.type) return r;
  if (n > (h ? 1 : 0)) {
    for (a = r - 1, i = r + 1; a >= 0 || i < e.length; ) if ((d = e[s = a >= 0 ? a-- : i++]) != null && (2 & d.__u) == 0 && o == d.key && c == d.type) return s;
  }
  return -1;
}
function ko(t, e, r) {
  e[0] == "-" ? t.setProperty(e, r ?? "") : t[e] = r == null ? "" : typeof r != "number" || L1.test(e) ? r : r + "px";
}
function na(t, e, r, n, a) {
  var i, s;
  e: if (e == "style") if (typeof r == "string") t.style.cssText = r;
  else {
    if (typeof n == "string" && (t.style.cssText = n = ""), n) for (e in n) r && e in r || ko(t.style, e, "");
    if (r) for (e in r) n && r[e] == n[e] || ko(t.style, e, r[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(Jl, "$1")), s = e.toLowerCase(), e = s in t || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = r, r ? n ? r[E0] = n[E0] : (r[E0] = ns, t.addEventListener(e, i ? _i : Si, i)) : t.removeEventListener(e, i ? _i : Si, i);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in t) try {
      t[e] = r ?? "";
      break e;
    } catch {
    }
    typeof r == "function" || (r == null || r === !1 && e[4] != "-" ? t.removeAttribute(e) : t.setAttribute(e, e == "popover" && r == 1 ? "" : r));
  }
}
function So(t) {
  return function(e) {
    if (this.l) {
      var r = this.l[e.type + t];
      if (e[va] == null) e[va] = ns++;
      else if (e[va] < r[E0]) return;
      return r(Ie.event ? Ie.event(e) : e);
    }
  };
}
function is(t, e, r, n, a, i, s, o, c, d) {
  var h, f, b, v, k, $, M, I, y, T, B, P, H, Q, W, j = e.type;
  if (e.constructor !== void 0) return null;
  128 & r.__u && (c = !!(32 & r.__u), i = [o = e.__e = r.__e]), (h = Ie.__b) && h(e);
  e: if (typeof j == "function") try {
    if (I = e.props, y = j.prototype && j.prototype.render, T = (h = j.contextType) && n[h.__c], B = h ? T ? T.props.value : h.__ : n, r.__c ? M = (f = e.__c = r.__c).__ = f.__E : (y ? e.__c = f = new j(I, B) : (e.__c = f = new Vr(I, B), f.constructor = j, f.render = V1), T && T.sub(f), f.state || (f.state = {}), f.__n = n, b = f.__d = !0, f.__h = [], f._sb = []), y && f.__s == null && (f.__s = f.state), y && j.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = Ar({}, f.__s)), Ar(f.__s, j.getDerivedStateFromProps(I, f.__s))), v = f.props, k = f.state, f.__v = e, b) y && j.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), y && f.componentDidMount != null && f.__h.push(f.componentDidMount);
    else {
      if (y && j.getDerivedStateFromProps == null && I !== v && f.componentWillReceiveProps != null && f.componentWillReceiveProps(I, B), e.__v == r.__v || !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(I, f.__s, B) === !1) {
        e.__v != r.__v && (f.props = I, f.state = f.__s, f.__d = !1), e.__e = r.__e, e.__k = r.__k, e.__k.some(function(pe) {
          pe && (pe.__ = e);
        }), Ca.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
        break e;
      }
      f.componentWillUpdate != null && f.componentWillUpdate(I, f.__s, B), y && f.componentDidUpdate != null && f.__h.push(function() {
        f.componentDidUpdate(v, k, $);
      });
    }
    if (f.context = B, f.props = I, f.__P = t, f.__e = !1, P = Ie.__r, H = 0, y) f.state = f.__s, f.__d = !1, P && P(e), h = f.render(f.props, f.state, f.context), Ca.push.apply(f.__h, f._sb), f._sb = [];
    else do
      f.__d = !1, P && P(e), h = f.render(f.props, f.state, f.context), f.state = f.__s;
    while (f.__d && ++H < 25);
    f.state = f.__s, f.getChildContext != null && (n = Ar(Ar({}, n), f.getChildContext())), y && !b && f.getSnapshotBeforeUpdate != null && ($ = f.getSnapshotBeforeUpdate(v, k)), Q = h != null && h.type === fn && h.key == null ? ac(h.props.children) : h, o = tc(t, G0(Q) ? Q : [Q], e, r, n, a, i, s, o, c, d), f.base = e.__e, e.__u &= -161, f.__h.length && s.push(f), M && (f.__E = f.__ = null);
  } catch (pe) {
    if (e.__v = null, c || i != null) if (pe.then) {
      for (e.__u |= c ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      i[i.indexOf(o)] = null, e.__e = o;
    } else {
      for (W = i.length; W--; ) as(i[W]);
      Ai(e);
    }
    else e.__e = r.__e, e.__k = r.__k, pe.then || Ai(e);
    Ie.__e(pe, e, r);
  }
  else i == null && e.__v == r.__v ? (e.__k = r.__k, e.__e = r.__e) : o = e.__e = U1(r.__e, e, r, n, a, i, s, c, d);
  return (h = Ie.diffed) && h(e), 128 & e.__u ? void 0 : o;
}
function Ai(t) {
  t && (t.__c && (t.__c.__e = !0), t.__k && t.__k.some(Ai));
}
function nc(t, e, r) {
  for (var n = 0; n < r.length; n++) ss(r[n], r[++n], r[++n]);
  Ie.__c && Ie.__c(e, t), t.some(function(a) {
    try {
      t = a.__h, a.__h = [], t.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      Ie.__e(i, a.__v);
    }
  });
}
function ac(t) {
  return typeof t != "object" || t == null || t.__b > 0 ? t : G0(t) ? t.map(ac) : t.constructor !== void 0 ? null : Ar({}, t);
}
function U1(t, e, r, n, a, i, s, o, c) {
  var d, h, f, b, v, k, $, M = r.props || _a, I = e.props, y = e.type;
  if (y == "svg" ? a = "http://www.w3.org/2000/svg" : y == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((v = i[d]) && "setAttribute" in v == !!y && (y ? v.localName == y : v.nodeType == 3)) {
      t = v, i[d] = null;
      break;
    }
  }
  if (t == null) {
    if (y == null) return document.createTextNode(I);
    t = document.createElementNS(a, y, I.is && I), o && (Ie.__m && Ie.__m(e, i), o = !1), i = null;
  }
  if (y == null) M === I || o && t.data == I || (t.data = I);
  else {
    if (i = y == "textarea" && I.defaultValue != null ? null : i && j0.call(t.childNodes), !o && i != null) for (M = {}, d = 0; d < t.attributes.length; d++) M[(v = t.attributes[d]).name] = v.value;
    for (d in M) v = M[d], d == "dangerouslySetInnerHTML" ? f = v : d == "children" || d in I || d == "value" && "defaultValue" in I || d == "checked" && "defaultChecked" in I || na(t, d, null, v, a);
    for (d in I) v = I[d], d == "children" ? b = v : d == "dangerouslySetInnerHTML" ? h = v : d == "value" ? k = v : d == "checked" ? $ = v : o && typeof v != "function" || M[d] === v || na(t, d, v, M[d], a);
    if (h) o || f && (h.__html == f.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
    else if (f && (t.innerHTML = ""), tc(e.type == "template" ? t.content : t, G0(b) ? b : [b], e, r, n, y == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, s, i ? i[0] : r.__k && i0(r, 0), o, c), i != null) for (d = i.length; d--; ) as(i[d]);
    o && y != "textarea" || (d = "value", y == "progress" && k == null ? t.removeAttribute("value") : k != null && (k !== t[d] || y == "progress" && !k || y == "option" && k != M[d]) && na(t, d, k, M[d], a), d = "checked", $ != null && $ != t[d] && na(t, d, $, M[d], a));
  }
  return t;
}
function ss(t, e, r) {
  try {
    if (typeof t == "function") {
      var n = typeof t.__u == "function";
      n && t.__u(), n && e == null || (t.__u = t(e));
    } else t.current = e;
  } catch (a) {
    Ie.__e(a, r);
  }
}
function ic(t, e, r) {
  var n, a;
  if (Ie.unmount && Ie.unmount(t), (n = t.ref) && (n.current && n.current != t.__e || ss(n, null, e)), (n = t.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      Ie.__e(i, e);
    }
    n.base = n.__P = null;
  }
  if (n = t.__k) for (a = 0; a < n.length; a++) n[a] && ic(n[a], e, r || typeof t.type != "function");
  r || as(t.__e), t.__c = t.__ = t.__e = void 0;
}
function V1(t, e, r) {
  return this.constructor(t, r);
}
function jr(t, e, r) {
  var n, a, i, s;
  e == document && (e = document.documentElement), Ie.__ && Ie.__(t, e), a = (n = typeof r == "function") ? null : r && r.__k || e.__k, i = [], s = [], is(e, t = (!n && r || e).__k = Wr(fn, null, [t]), a || _a, _a, e.namespaceURI, !n && r ? [r] : a ? null : e.firstChild ? j0.call(e.childNodes) : null, i, !n && r ? r : a ? a.__e : e.firstChild, n, s), nc(i, t, s);
}
function sc(t, e, r) {
  var n, a, i, s, o = Ar({}, t.props);
  for (i in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : o[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? j0.call(arguments, 2) : r), I0(t.type, o, n || t.key, a || t.ref, null);
}
function oc(t) {
  function e(r) {
    var n, a;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (a = {})[e.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(s) {
        s.__e = !0, Ci(s);
      });
    }, this.sub = function(i) {
      n.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), s && s.call(i);
      };
    }), r.children;
  }
  return e.__c = "__cC" + Ql++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(r, n) {
    return r.children(n);
  }).contextType = e, e;
}
j0 = Ca.slice, Ie = { __e: function(t, e, r, n) {
  for (var a, i, s; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(t)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(t, n || {}), s = a.__d), s) return a.__E = a;
  } catch (o) {
    t = o;
  }
  throw t;
} }, Kl = 0, Vr.prototype.setState = function(t, e) {
  var r;
  r = this.__s != null && this.__s != this.state ? this.__s : this.__s = Ar({}, this.state), typeof t == "function" && (t = t(Ar({}, r), this.props)), t && Ar(r, t), t != null && this.__v && (e && this._sb.push(e), Ci(this));
}, Vr.prototype.forceUpdate = function(t) {
  this.__v && (this.__e = !0, t && this.__h.push(t), Ci(this));
}, Vr.prototype.render = fn, cn = [], Xl = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Yl = function(t, e) {
  return t.__v.__b - e.__v.__b;
}, Aa.__r = 0, ti = Math.random().toString(8), va = "__d" + ti, E0 = "__a" + ti, Jl = /(PointerCapture)$|Capture$/i, ns = 0, Si = So(!1), _i = So(!0), Ql = 0;
var lc = function(t, e, r, n) {
  var a;
  e[0] = 0;
  for (var i = 1; i < e.length; i++) {
    var s = e[i++], o = e[i] ? (e[0] |= s ? 1 : 2, r[e[i++]]) : e[++i];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++i]] = o : s === 6 ? n[1][e[++i]] += o + "" : s ? (a = t.apply(o, lc(t, o, r, ["", null])), n.push(a), o[0] ? e[0] |= 2 : (e[i - 2] = 0, e[i] = a)) : n.push(o);
  }
  return n;
}, _o = /* @__PURE__ */ new Map();
function j1(t) {
  var e = _o.get(this);
  return e || (e = /* @__PURE__ */ new Map(), _o.set(this, e)), (e = lc(this, e.get(t) || (e.set(t, e = (function(r) {
    for (var n, a, i = 1, s = "", o = "", c = [0], d = function(b) {
      i === 1 && (b || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? c.push(0, b, s) : i === 3 && (b || s) ? (c.push(3, b, s), i = 2) : i === 2 && s === "..." && b ? c.push(4, b, 0) : i === 2 && s && !b ? c.push(5, 0, !0, s) : i >= 5 && ((s || !b && i === 5) && (c.push(i, 0, s, a), i = 6), b && (c.push(i, b, 0, a), i = 6)), s = "";
    }, h = 0; h < r.length; h++) {
      h && (i === 1 && d(), d(h));
      for (var f = 0; f < r[h].length; f++) n = r[h][f], i === 1 ? n === "<" ? (d(), c = [c], i = 3) : s += n : i === 4 ? s === "--" && n === ">" ? (i = 1, s = "") : s = n + s[0] : o ? n === o ? o = "" : s += n : n === '"' || n === "'" ? o = n : n === ">" ? (d(), i = 1) : i && (n === "=" ? (i = 5, a = s, s = "") : n === "/" && (i < 5 || r[h][f + 1] === ">") ? (d(), i === 3 && (c = c[0]), i = c, (c = c[0]).push(2, 0, i), i = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (d(), i = 2) : s += n), i === 3 && s === "!--" && (i = 4, c = c[0]);
    }
    return d(), c;
  })(t)), e), arguments, [])).length > 1 ? e : e[0];
}
var Y = j1.bind(Wr), Zr, Qe, ri, Co, N0 = 0, cc = [], pt = Ie, Ao = pt.__b, To = pt.__r, $o = pt.diffed, Mo = pt.__c, Eo = pt.unmount, Io = pt.__;
function Rn(t, e) {
  pt.__h && pt.__h(Qe, t, N0 || e), N0 = 0;
  var r = Qe.__H || (Qe.__H = { __: [], __h: [] });
  return t >= r.__.length && r.__.push({}), r.__[t];
}
function ht(t) {
  return N0 = 1, uc(pc, t);
}
function uc(t, e, r) {
  var n = Rn(Zr++, 2);
  if (n.t = t, !n.__c && (n.__ = [r ? r(e) : pc(void 0, e), function(o) {
    var c = n.__N ? n.__N[0] : n.__[0], d = n.t(c, o);
    c !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = Qe, !Qe.__f)) {
    var a = function(o, c, d) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(b) {
        return b.__c;
      });
      if (h.every(function(b) {
        return !b.__N;
      })) return !i || i.call(this, o, c, d);
      var f = n.__c.props !== o;
      return h.some(function(b) {
        if (b.__N) {
          var v = b.__[0];
          b.__ = b.__N, b.__N = void 0, v !== b.__[0] && (f = !0);
        }
      }), i && i.call(this, o, c, d) || f;
    };
    Qe.__f = !0;
    var i = Qe.shouldComponentUpdate, s = Qe.componentWillUpdate;
    Qe.componentWillUpdate = function(o, c, d) {
      if (this.__e) {
        var h = i;
        i = void 0, a(o, c, d), i = h;
      }
      s && s.call(this, o, c, d);
    }, Qe.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function hr(t, e) {
  var r = Rn(Zr++, 3);
  !pt.__s && os(r.__H, e) && (r.__ = t, r.u = e, Qe.__H.__h.push(r));
}
function G1(t, e) {
  var r = Rn(Zr++, 4);
  !pt.__s && os(r.__H, e) && (r.__ = t, r.u = e, Qe.__h.push(r));
}
function Be(t) {
  return N0 = 5, u0(function() {
    return { current: t };
  }, []);
}
function u0(t, e) {
  var r = Rn(Zr++, 7);
  return os(r.__H, e) && (r.__ = t(), r.__H = e, r.__h = t), r.__;
}
function dn(t, e) {
  return N0 = 8, u0(function() {
    return t;
  }, e);
}
function dc(t) {
  var e = Qe.context[t.__c], r = Rn(Zr++, 9);
  return r.c = t, e ? (r.__ == null && (r.__ = !0, e.sub(Qe)), e.props.value) : t.__;
}
function hc(t) {
  var e = Rn(Zr++, 10), r = ht();
  return e.__ = t, Qe.componentDidCatch || (Qe.componentDidCatch = function(n, a) {
    e.__ && e.__(n, a), r[1](n);
  }), [r[0], function() {
    r[1](void 0);
  }];
}
function fc() {
  var t = Rn(Zr++, 11);
  if (!t.__) {
    for (var e = Qe.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var r = e.__m || (e.__m = [0, 0]);
    t.__ = "P" + r[0] + "-" + r[1]++;
  }
  return t.__;
}
function W1() {
  for (var t; t = cc.shift(); ) {
    var e = t.__H;
    if (t.__P && e) try {
      e.__h.some(wa), e.__h.some(Ti), e.__h = [];
    } catch (r) {
      e.__h = [], pt.__e(r, t.__v);
    }
  }
}
pt.__b = function(t) {
  Qe = null, Ao && Ao(t);
}, pt.__ = function(t, e) {
  t && e.__k && e.__k.__m && (t.__m = e.__k.__m), Io && Io(t, e);
}, pt.__r = function(t) {
  To && To(t), Zr = 0;
  var e = (Qe = t.__c).__H;
  e && (ri === Qe ? (e.__h = [], Qe.__h = [], e.__.some(function(r) {
    r.__N && (r.__ = r.__N), r.u = r.__N = void 0;
  })) : (e.__h.some(wa), e.__h.some(Ti), e.__h = [], Zr = 0)), ri = Qe;
}, pt.diffed = function(t) {
  $o && $o(t);
  var e = t.__c;
  e && e.__H && (e.__H.__h.length && (cc.push(e) !== 1 && Co === pt.requestAnimationFrame || ((Co = pt.requestAnimationFrame) || Z1)(W1)), e.__H.__.some(function(r) {
    r.u && (r.__H = r.u), r.u = void 0;
  })), ri = Qe = null;
}, pt.__c = function(t, e) {
  e.some(function(r) {
    try {
      r.__h.some(wa), r.__h = r.__h.filter(function(n) {
        return !n.__ || Ti(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], pt.__e(n, r.__v);
    }
  }), Mo && Mo(t, e);
}, pt.unmount = function(t) {
  Eo && Eo(t);
  var e, r = t.__c;
  r && r.__H && (r.__H.__.some(function(n) {
    try {
      wa(n);
    } catch (a) {
      e = a;
    }
  }), r.__H = void 0, e && pt.__e(e, r.__v));
};
var zo = typeof requestAnimationFrame == "function";
function Z1(t) {
  var e, r = function() {
    clearTimeout(n), zo && cancelAnimationFrame(e), setTimeout(t);
  }, n = setTimeout(r, 35);
  zo && (e = requestAnimationFrame(r));
}
function wa(t) {
  var e = Qe, r = t.__c;
  typeof r == "function" && (t.__c = void 0, r()), Qe = e;
}
function Ti(t) {
  var e = Qe;
  t.__c = t.__(), Qe = e;
}
function os(t, e) {
  return !t || t.length !== e.length || e.some(function(r, n) {
    return r !== t[n];
  });
}
function pc(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function mc(t, e) {
  for (var r in e) t[r] = e[r];
  return t;
}
function $i(t, e) {
  for (var r in t) if (r !== "__source" && !(r in e)) return !0;
  for (var n in e) if (n !== "__source" && t[n] !== e[n]) return !0;
  return !1;
}
function No(t, e) {
  this.props = t, this.context = e;
}
function K1(t, e) {
  function r(a) {
    var i = this.props.ref;
    return i != a.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, a) || i != a.ref : $i(this.props, a);
  }
  function n(a) {
    return this.shouldComponentUpdate = r, Wr(t, a);
  }
  return n.displayName = "Memo(" + (t.displayName || t.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = t, n;
}
(No.prototype = new Vr()).isPureReactComponent = !0, No.prototype.shouldComponentUpdate = function(t, e) {
  return $i(this.props, t) || $i(this.state, e);
};
var Ro = Ie.__b;
Ie.__b = function(t) {
  t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), Ro && Ro(t);
};
var X1 = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Y1(t) {
  function e(r) {
    var n = mc({}, r);
    return delete n.ref, t(n, r.ref || null);
  }
  return e.$$typeof = X1, e.render = t, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e;
}
var J1 = Ie.__e;
Ie.__e = function(t, e, r, n) {
  if (t.then) {
    for (var a, i = e; i = i.__; ) if ((a = i.__c) && a.__c) return e.__e == null && (e.__e = r.__e, e.__k = r.__k), a.__c(t, e);
  }
  J1(t, e, r, n);
};
var Oo = Ie.unmount;
function gc(t, e, r) {
  return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), t.__c.__H = null), (t = mc({}, t)).__c != null && (t.__c.__P === r && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map(function(n) {
    return gc(n, e, r);
  })), t;
}
function bc(t, e, r) {
  return t && r && (t.__v = null, t.__k = t.__k && t.__k.map(function(n) {
    return bc(n, e, r);
  }), t.__c && t.__c.__P === e && (t.__e && r.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = r)), t;
}
function ni() {
  this.__u = 0, this.o = null, this.__b = null;
}
function vc(t) {
  var e = t.__ && t.__.__c;
  return e && e.__a && e.__a(t);
}
function aa() {
  this.i = null, this.l = null;
}
Ie.unmount = function(t) {
  var e = t.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), Oo && Oo(t);
}, (ni.prototype = new Vr()).__c = function(t, e) {
  var r = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(r);
  var a = vc(n.__v), i = !1, s = function() {
    i || n.__z || (i = !0, r.__R = null, a ? a(c) : c());
  };
  r.__R = s;
  var o = r.__P;
  r.__P = null;
  var c = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = bc(d, d.__c.__P, d.__c.__O);
      }
      var h;
      for (n.setState({ __a: n.__b = null }); h = n.o.pop(); ) h.__P = o, h.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), t.then(s, s);
}, ni.prototype.componentWillUnmount = function() {
  this.o = [];
}, ni.prototype.render = function(t, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var r = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = gc(this.__b, r, n.__O = n.__P);
    }
    this.__b = null;
  }
  var a = e.__a && Wr(fn, null, t.fallback);
  return a && (a.__u &= -33), [Wr(fn, null, e.__a ? null : t.children), a];
};
var Bo = function(t, e, r) {
  if (++r[1] === r[0] && t.l.delete(e), t.props.revealOrder && (t.props.revealOrder[0] !== "t" || !t.l.size)) for (r = t.i; r; ) {
    for (; r.length > 3; ) r.pop()();
    if (r[1] < r[0]) break;
    t.i = r = r[2];
  }
};
function Q1(t) {
  return this.getChildContext = function() {
    return t.context;
  }, t.children;
}
function ed(t) {
  var e = this, r = t.h;
  if (e.componentWillUnmount = function() {
    jr(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== r && e.componentWillUnmount(), !e.v) {
    for (var n = e.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    e.h = r, e.v = { nodeType: 1, parentNode: r, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, namespaceURI: r.namespaceURI, insertBefore: function(a, i) {
      this.childNodes.push(a), e.h.insertBefore(a, i);
    }, removeChild: function(a) {
      this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), e.h.removeChild(a);
    } };
  }
  jr(Wr(Q1, { context: e.context }, t.__v), e.v);
}
function wc(t, e) {
  var r = Wr(ed, { __v: t, h: e });
  return r.containerInfo = e, r;
}
(aa.prototype = new Vr()).__a = function(t) {
  var e = this, r = vc(e.__v), n = e.l.get(t);
  return n[0]++, function(a) {
    var i = function() {
      e.props.revealOrder ? (n.push(a), Bo(e, t, n)) : a();
    };
    r ? r(i) : i();
  };
}, aa.prototype.render = function(t) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = s0(t.children);
  t.revealOrder && t.revealOrder[0] === "b" && e.reverse();
  for (var r = e.length; r--; ) this.l.set(e[r], this.i = [1, 0, this.i]);
  return t.children;
}, aa.prototype.componentDidUpdate = aa.prototype.componentDidMount = function() {
  var t = this;
  this.l.forEach(function(e, r) {
    Bo(t, r, e);
  });
};
var td = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, rd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, nd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ad = /[A-Z0-9]/g, id = typeof document < "u", sd = function(t) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(t);
};
Vr.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t) {
  Object.defineProperty(Vr.prototype, t, { configurable: !0, get: function() {
    return this["UNSAFE_" + t];
  }, set: function(e) {
    Object.defineProperty(this, t, { configurable: !0, writable: !0, value: e });
  } });
});
var Do = Ie.event;
Ie.event = function(t) {
  return Do && (t = Do(t)), t.persist = function() {
  }, t.isPropagationStopped = function() {
    return this.cancelBubble;
  }, t.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, t.nativeEvent = t;
};
var od = { configurable: !0, get: function() {
  return this.class;
} }, Lo = Ie.vnode;
Ie.vnode = function(t) {
  typeof t.type == "string" && (function(e) {
    var r = e.props, n = e.type, a = {}, i = n.indexOf("-") == -1;
    for (var s in r) {
      var o = r[s];
      if (!(s === "value" && "defaultValue" in r && o == null || id && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var c = s.toLowerCase();
        s === "defaultValue" && "value" in r && r.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : c === "translate" && o === "no" ? o = !1 : c[0] === "o" && c[1] === "n" ? c === "ondoubleclick" ? s = "ondblclick" : c !== "onchange" || n !== "input" && n !== "textarea" || sd(r.type) ? c === "onfocus" ? s = "onfocusin" : c === "onblur" ? s = "onfocusout" : nd.test(s) && (s = c) : c = s = "oninput" : i && rd.test(s) ? s = s.replace(ad, "-$&").toLowerCase() : o === null && (o = void 0), c === "oninput" && a[s = c] && (s = "oninputCapture"), a[s] = o;
      }
    }
    n == "select" && (a.multiple && Array.isArray(a.value) && (a.value = s0(r.children).forEach(function(d) {
      d.props.selected = a.value.indexOf(d.props.value) != -1;
    })), a.defaultValue != null && (a.value = s0(r.children).forEach(function(d) {
      d.props.selected = a.multiple ? a.defaultValue.indexOf(d.props.value) != -1 : a.defaultValue == d.props.value;
    }))), r.class && !r.className ? (a.class = r.class, Object.defineProperty(a, "className", od)) : r.className && (a.class = a.className = r.className), e.props = a;
  })(t), t.$$typeof = td, Lo && Lo(t);
};
var Fo = Ie.__r;
Ie.__r = function(t) {
  Fo && Fo(t), t.__c;
};
var Po = Ie.diffed;
Ie.diffed = function(t) {
  Po && Po(t);
  var e = t.props, r = t.__e;
  r != null && t.type === "textarea" && "value" in e && e.value !== r.value && (r.value = e.value == null ? "" : e.value);
};
function $r(t) {
  return new Promise((e, r) => {
    t.oncomplete = t.onsuccess = () => e(t.result), t.onabort = t.onerror = () => r(t.error);
  });
}
function ls(t, e) {
  let r;
  const n = () => {
    if (r)
      return r;
    const a = indexedDB.open(t);
    return a.onupgradeneeded = () => a.result.createObjectStore(e), r = $r(a), r.then((i) => {
      i.onclose = () => r = void 0;
    }, () => {
    }), r;
  };
  return (a, i) => n().then((s) => i(s.transaction(e, a).objectStore(e)));
}
let ai;
function On() {
  return ai || (ai = ls("keyval-store", "keyval")), ai;
}
function un(t, e = On()) {
  return e("readonly", (r) => $r(r.get(t)));
}
function Mi(t, e, r = On()) {
  return r("readwrite", (n) => (n.put(e, t), $r(n.transaction)));
}
function T0(t, e = On()) {
  return e("readwrite", (r) => (r.delete(t), $r(r.transaction)));
}
function x2(t = On()) {
  return t("readwrite", (e) => (e.clear(), $r(e.transaction)));
}
function cs(t, e) {
  return t.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, $r(t.transaction);
}
function xc(t = On()) {
  return t("readonly", (e) => {
    if (e.getAllKeys)
      return $r(e.getAllKeys());
    const r = [];
    return cs(e, (n) => r.push(n.key)).then(() => r);
  });
}
function y2(t = On()) {
  return t("readonly", (e) => {
    if (e.getAll)
      return $r(e.getAll());
    const r = [];
    return cs(e, (n) => r.push(n.value)).then(() => r);
  });
}
function k2(t = On()) {
  return t("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        $r(e.getAllKeys()),
        $r(e.getAll())
      ]).then(([n, a]) => n.map((i, s) => [i, a[s]]));
    const r = [];
    return cs(e, (n) => r.push([n.key, n.value])).then(() => r);
  });
}
var xa = { exports: {} }, ld = xa.exports, Ho;
function cd() {
  return Ho || (Ho = 1, (function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(ld, (function() {
      return { fromViewportTo: function(r, n, a) {
        switch (!0) {
          case n == null:
            throw new Error('no "Position" given');
          case (typeof n.left != "number" && !(n.left instanceof Number)):
          case (typeof n.top != "number" && !(n.top instanceof Number)):
            throw new Error('invalid "Position" given');
        }
        switch (r) {
          case null:
          case void 0:
            throw new Error("no coordinate system given");
          case "viewport":
            return { left: n.left, top: n.top };
          case "document":
            return { left: n.left + window.scrollX, top: n.top + window.scrollY };
          case "local":
            switch (!0) {
              case a == null:
                throw new Error("no target element given");
              case a instanceof Element:
                var i = window.getComputedStyle(a), s = parseFloat(i.borderLeftWidth), o = parseFloat(i.borderTopWidth), c = a.getBoundingClientRect();
                return { left: n.left - c.left - s, top: n.top - c.top - o };
              default:
                throw new Error("invalid target element given");
            }
          default:
            throw new Error("invalid coordinate system given");
        }
      }, fromDocumentTo: function(r, n, a) {
        switch (!0) {
          case n == null:
            throw new Error('no "Position" given');
          case (typeof n.left != "number" && !(n.left instanceof Number)):
          case (typeof n.top != "number" && !(n.top instanceof Number)):
            throw new Error('invalid "Position" given');
        }
        switch (r) {
          case null:
          case void 0:
            throw new Error("no coordinate system given");
          case "viewport":
            return { left: n.left - window.scrollX, top: n.top - window.scrollY };
          case "document":
            return { left: n.left, top: n.top };
          case "local":
            switch (!0) {
              case a == null:
                throw new Error("no target element given");
              case a instanceof Element:
                var i = window.getComputedStyle(a), s = parseFloat(i.borderLeftWidth), o = parseFloat(i.borderTopWidth), c = a.getBoundingClientRect();
                return { left: n.left + window.scrollX - c.left - s, top: n.top + window.scrollY - c.top - o };
              default:
                throw new Error("invalid target element given");
            }
          default:
            throw new Error("invalid coordinate system given");
        }
      }, fromLocalTo: function(r, n, a) {
        switch (!0) {
          case n == null:
            throw new Error('no "Position" given');
          case (typeof n.left != "number" && !(n.left instanceof Number)):
          case (typeof n.top != "number" && !(n.top instanceof Number)):
            throw new Error('invalid "Position" given');
        }
        var i, s, o;
        switch (!0) {
          case a == null:
            throw new Error("no source element given");
          case a instanceof Element:
            var c = window.getComputedStyle(a), d = parseFloat(c.borderLeftWidth), h = parseFloat(c.borderTopWidth);
            s = (i = a.getBoundingClientRect()).left + d, o = i.top + h;
            break;
          default:
            throw new Error("invalid source element given");
        }
        switch (r) {
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
  })(xa)), xa.exports;
}
var ud = cd();
const dd = /* @__PURE__ */ Zl(ud);
function us() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Bn = us();
function yc(t) {
  Bn = t;
}
var Mn = { exec: () => null };
function Kn(t) {
  let e = [];
  return (r) => {
    let n = Math.max(0, Math.min(3, r - 1)), a = e[n];
    return a || (a = t(n), e[n] = a), a;
  };
}
function De(t, e = "") {
  let r = typeof t == "string" ? t : t.source, n = { replace: (a, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(Tt.caret, "$1"), r = r.replace(a, s), n;
  }, getRegex: () => new RegExp(r, e) };
  return n;
}
var hd = ((t = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + t);
  } catch {
    return !1;
  }
})(), Tt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (t) => new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: Kn((t) => new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: Kn((t) => new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: Kn((t) => new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)), headingBeginRegex: Kn((t) => new RegExp(`^ {0,${t}}#`)), htmlBeginRegex: Kn((t) => new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: Kn((t) => new RegExp(`^ {0,${t}}>`)) }, fd = /^(?:[ \t]*(?:\n|$))+/, pd = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, md = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, W0 = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, gd = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, ds = / {0,3}(?:[*+-]|\d{1,9}[.)])/, kc = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Sc = De(kc).replace(/bull/g, ds).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), bd = De(kc).replace(/bull/g, ds).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), hs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, vd = /^[^\n]+/, fs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, wd = De(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", fs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), xd = De(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, ds).getRegex(), Da = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", ps = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, yd = De("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", ps).replace("tag", Da).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _c = De(hs).replace("hr", W0).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Da).getRegex(), kd = De(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _c).getRegex(), ms = { blockquote: kd, code: pd, def: wd, fences: md, heading: gd, hr: W0, html: yd, lheading: Sc, list: xd, newline: fd, paragraph: _c, table: Mn, text: vd }, qo = De("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", W0).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Da).getRegex(), Sd = { ...ms, lheading: bd, table: qo, paragraph: De(hs).replace("hr", W0).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", qo).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Da).getRegex() }, _d = { ...ms, html: De(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", ps).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Mn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: De(hs).replace("hr", W0).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Sc).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Cd = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Ad = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Cc = /^( {2,}|\\)\n(?!\s*$)/, Td = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, d0 = /[\p{P}\p{S}]/u, La = /[\s\p{P}\p{S}]/u, gs = /[^\s\p{P}\p{S}]/u, $d = De(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, La).getRegex(), Ac = /(?!~)[\p{P}\p{S}]/u, Md = /(?!~)[\s\p{P}\p{S}]/u, Ed = /(?:[^\s\p{P}\p{S}]|~)/u, Id = De(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", hd ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Tc = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, zd = De(Tc, "u").replace(/punct/g, d0).getRegex(), Nd = De(Tc, "u").replace(/punct/g, Ac).getRegex(), $c = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Rd = De($c, "gu").replace(/notPunctSpace/g, gs).replace(/punctSpace/g, La).replace(/punct/g, d0).getRegex(), Od = De($c, "gu").replace(/notPunctSpace/g, Ed).replace(/punctSpace/g, Md).replace(/punct/g, Ac).getRegex(), Bd = De("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, gs).replace(/punctSpace/g, La).replace(/punct/g, d0).getRegex(), Dd = De(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, d0).getRegex(), Ld = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Fd = De(Ld, "gu").replace(/notPunctSpace/g, gs).replace(/punctSpace/g, La).replace(/punct/g, d0).getRegex(), Pd = De(/\\(punct)/, "gu").replace(/punct/g, d0).getRegex(), Hd = De(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), qd = De(ps).replace("(?:-->|$)", "-->").getRegex(), Ud = De("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", qd).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Ta = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Vd = De(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", Ta).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Mc = De(/^!?\[(label)\]\[(ref)\]/).replace("label", Ta).replace("ref", fs).getRegex(), Ec = De(/^!?\[(ref)\](?:\[\])?/).replace("ref", fs).getRegex(), jd = De("reflink|nolink(?!\\()", "g").replace("reflink", Mc).replace("nolink", Ec).getRegex(), Uo = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, bs = { _backpedal: Mn, anyPunctuation: Pd, autolink: Hd, blockSkip: Id, br: Cc, code: Ad, del: Mn, delLDelim: Mn, delRDelim: Mn, emStrongLDelim: zd, emStrongRDelimAst: Rd, emStrongRDelimUnd: Bd, escape: Cd, link: Vd, nolink: Ec, punctuation: $d, reflink: Mc, reflinkSearch: jd, tag: Ud, text: Td, url: Mn }, Gd = { ...bs, link: De(/^!?\[(label)\]\((.*?)\)/).replace("label", Ta).getRegex(), reflink: De(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Ta).getRegex() }, Ei = { ...bs, emStrongRDelimAst: Od, emStrongLDelim: Nd, delLDelim: Dd, delRDelim: Fd, url: De(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", Uo).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: De(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", Uo).getRegex() }, Wd = { ...Ei, br: De(Cc).replace("{2,}", "*").getRegex(), text: De(Ei.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ia = { normal: ms, gfm: Sd, pedantic: _d }, _0 = { normal: bs, gfm: Ei, breaks: Wd, pedantic: Gd }, Zd = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, Vo = (t) => Zd[t];
function kr(t, e) {
  if (e) {
    if (Tt.escapeTest.test(t)) return t.replace(Tt.escapeReplace, Vo);
  } else if (Tt.escapeTestNoEncode.test(t)) return t.replace(Tt.escapeReplaceNoEncode, Vo);
  return t;
}
function jo(t) {
  try {
    t = encodeURI(t).replace(Tt.percentDecode, "%");
  } catch {
    return null;
  }
  return t;
}
function Go(t, e) {
  var i;
  let r = t.replace(Tt.findPipe, (s, o, c) => {
    let d = !1, h = o;
    for (; --h >= 0 && c[h] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = r.split(Tt.splitPipe), a = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((i = n.at(-1)) != null && i.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; a < n.length; a++) n[a] = n[a].trim().replace(Tt.slashPipe, "|");
  return n;
}
function nn(t, e, r) {
  let n = t.length;
  if (n === 0) return "";
  let a = 0;
  for (; a < n && t.charAt(n - a - 1) === e; )
    a++;
  return t.slice(0, n - a);
}
function Wo(t) {
  let e = t.split(`
`), r = e.length - 1;
  for (; r >= 0 && Tt.blankLine.test(e[r]); ) r--;
  return e.length - r <= 2 ? t : e.slice(0, r + 1).join(`
`);
}
function Kd(t, e) {
  if (t.indexOf(e[1]) === -1) return -1;
  let r = 0;
  for (let n = 0; n < t.length; n++) if (t[n] === "\\") n++;
  else if (t[n] === e[0]) r++;
  else if (t[n] === e[1] && (r--, r < 0)) return n;
  return r > 0 ? -2 : -1;
}
function Xd(t, e = 0) {
  let r = e, n = "";
  for (let a of t) if (a === "	") {
    let i = 4 - r % 4;
    n += " ".repeat(i), r += i;
  } else n += a, r++;
  return n;
}
function Zo(t, e, r, n, a) {
  let i = e.href, s = e.title || null, o = t[1].replace(a.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let c = { type: t[0].charAt(0) === "!" ? "image" : "link", raw: r, href: i, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, c;
}
function Yd(t, e, r) {
  let n = t.match(r.other.indentCodeCompensation);
  if (n === null) return e;
  let a = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(r.other.beginningSpace);
    if (s === null) return i;
    let [o] = s;
    return o.length >= a.length ? i.slice(a.length) : i;
  }).join(`
`);
}
var $a = class {
  constructor(t) {
    Xe(this, "options");
    Xe(this, "rules");
    Xe(this, "lexer");
    this.options = t || Bn;
  }
  space(t) {
    let e = this.rules.block.newline.exec(t);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(t) {
    let e = this.rules.block.code.exec(t);
    if (e) {
      let r = this.options.pedantic ? e[0] : Wo(e[0]), n = r.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: r, codeBlockStyle: "indented", text: n };
    }
  }
  fences(t) {
    let e = this.rules.block.fences.exec(t);
    if (e) {
      let r = e[0], n = Yd(r, e[3] || "", this.rules);
      return { type: "code", raw: r, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(t) {
    let e = this.rules.block.heading.exec(t);
    if (e) {
      let r = e[2].trim();
      if (this.rules.other.endingHash.test(r)) {
        let n = nn(r, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (r = n.trim());
      }
      return { type: "heading", raw: nn(e[0], `
`), depth: e[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(t) {
    let e = this.rules.block.hr.exec(t);
    if (e) return { type: "hr", raw: nn(e[0], `
`) };
  }
  blockquote(t) {
    let e = this.rules.block.blockquote.exec(t);
    if (e) {
      let r = nn(e[0], `
`).split(`
`), n = "", a = "", i = [];
      for (; r.length > 0; ) {
        let s = !1, o = [], c;
        for (c = 0; c < r.length; c++) if (this.rules.other.blockquoteStart.test(r[c])) o.push(r[c]), s = !0;
        else if (!s) o.push(r[c]);
        else break;
        r = r.slice(c);
        let d = o.join(`
`), h = d.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        n = n ? `${n}
${d}` : d, a = a ? `${a}
${h}` : h;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, i, !0), this.lexer.state.top = f, r.length === 0) break;
        let b = i.at(-1);
        if ((b == null ? void 0 : b.type) === "code") break;
        if ((b == null ? void 0 : b.type) === "blockquote") {
          let v = b, k = v.raw + `
` + r.join(`
`), $ = this.blockquote(k);
          i[i.length - 1] = $, n = n.substring(0, n.length - v.raw.length) + $.raw, a = a.substring(0, a.length - v.text.length) + $.text;
          break;
        } else if ((b == null ? void 0 : b.type) === "list") {
          let v = b, k = v.raw + `
` + r.join(`
`), $ = this.list(k);
          i[i.length - 1] = $, n = n.substring(0, n.length - b.raw.length) + $.raw, a = a.substring(0, a.length - v.raw.length) + $.raw, r = k.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: i, text: a };
    }
  }
  list(t) {
    let e = this.rules.block.list.exec(t);
    if (e) {
      let r = e[1].trim(), n = r.length > 1, a = { type: "list", raw: "", ordered: n, start: n ? +r.slice(0, -1) : "", loose: !1, items: [] };
      r = n ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = n ? r : "[*+-]");
      let i = this.rules.other.listItemRegex(r), s = !1;
      for (; t; ) {
        let c = !1, d = "", h = "";
        if (!(e = i.exec(t)) || this.rules.block.hr.test(t)) break;
        d = e[0], t = t.substring(d.length);
        let f = Xd(e[2].split(`
`, 1)[0], e[1].length), b = t.split(`
`, 1)[0], v = !f.trim(), k = 0;
        if (this.options.pedantic ? (k = 2, h = f.trimStart()) : v ? k = e[1].length + 1 : (k = f.search(this.rules.other.nonSpaceChar), k = k > 4 ? 1 : k, h = f.slice(k), k += e[1].length), v && this.rules.other.blankLine.test(b) && (d += b + `
`, t = t.substring(b.length + 1), c = !0), !c) {
          let $ = this.rules.other.nextBulletRegex(k), M = this.rules.other.hrRegex(k), I = this.rules.other.fencesBeginRegex(k), y = this.rules.other.headingBeginRegex(k), T = this.rules.other.htmlBeginRegex(k), B = this.rules.other.blockquoteBeginRegex(k);
          for (; t; ) {
            let P = t.split(`
`, 1)[0], H;
            if (b = P, this.options.pedantic ? (b = b.replace(this.rules.other.listReplaceNesting, "  "), H = b) : H = b.replace(this.rules.other.tabCharGlobal, "    "), I.test(b) || y.test(b) || T.test(b) || B.test(b) || $.test(b) || M.test(b)) break;
            if (H.search(this.rules.other.nonSpaceChar) >= k || !b.trim()) h += `
` + H.slice(k);
            else {
              if (v || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || I.test(f) || y.test(f) || M.test(f)) break;
              h += `
` + b;
            }
            v = !b.trim(), d += P + `
`, t = t.substring(P.length + 1), f = H.slice(k);
          }
        }
        a.loose || (s ? a.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (s = !0)), a.items.push({ type: "list_item", raw: d, task: !!this.options.gfm && this.rules.other.listIsTask.test(h), loose: !1, text: h, tokens: [] }), a.raw += d;
      }
      let o = a.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let c of a.items) {
        this.lexer.state.top = !1, c.tokens = this.lexer.blockTokens(c.text, []);
        let d = c.tokens[0];
        if (c.task && ((d == null ? void 0 : d.type) === "text" || (d == null ? void 0 : d.type) === "paragraph")) {
          c.text = c.text.replace(this.rules.other.listReplaceTask, ""), d.raw = d.raw.replace(this.rules.other.listReplaceTask, ""), d.text = d.text.replace(this.rules.other.listReplaceTask, "");
          for (let f = this.lexer.inlineQueue.length - 1; f >= 0; f--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)) {
            this.lexer.inlineQueue[f].src = this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let h = this.rules.other.listTaskCheckbox.exec(c.raw);
          if (h) {
            let f = { type: "checkbox", raw: h[0] + " ", checked: h[0] !== "[ ]" };
            c.checked = f.checked, a.loose ? c.tokens[0] && ["paragraph", "text"].includes(c.tokens[0].type) && "tokens" in c.tokens[0] && c.tokens[0].tokens ? (c.tokens[0].raw = f.raw + c.tokens[0].raw, c.tokens[0].text = f.raw + c.tokens[0].text, c.tokens[0].tokens.unshift(f)) : c.tokens.unshift({ type: "paragraph", raw: f.raw, text: f.raw, tokens: [f] }) : c.tokens.unshift(f);
          }
        } else c.task && (c.task = !1);
        if (!a.loose) {
          let h = c.tokens.filter((b) => b.type === "space"), f = h.length > 0 && h.some((b) => this.rules.other.anyLine.test(b.raw));
          a.loose = f;
        }
      }
      if (a.loose) for (let c of a.items) {
        c.loose = !0;
        for (let d of c.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return a;
    }
  }
  html(t) {
    let e = this.rules.block.html.exec(t);
    if (e) {
      let r = Wo(e[0]);
      return { type: "html", block: !0, raw: r, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: r };
    }
  }
  def(t) {
    let e = this.rules.block.def.exec(t);
    if (e) {
      let r = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: r, raw: nn(e[0], `
`), href: n, title: a };
    }
  }
  table(t) {
    var s;
    let e = this.rules.block.table.exec(t);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let r = Go(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (s = e[3]) != null && s.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: nn(e[0], `
`), header: [], align: [], rows: [] };
    if (r.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0; o < r.length; o++) i.header.push({ text: r[o], tokens: this.lexer.inline(r[o]), header: !0, align: i.align[o] });
      for (let o of a) i.rows.push(Go(o, i.header.length).map((c, d) => ({ text: c, tokens: this.lexer.inline(c), header: !1, align: i.align[d] })));
      return i;
    }
  }
  lheading(t) {
    let e = this.rules.block.lheading.exec(t);
    if (e) {
      let r = e[1].trim();
      return { type: "heading", raw: nn(e[0], `
`), depth: e[2].charAt(0) === "=" ? 1 : 2, text: r, tokens: this.lexer.inline(r) };
    }
  }
  paragraph(t) {
    let e = this.rules.block.paragraph.exec(t);
    if (e) {
      let r = e[1].charAt(e[1].length - 1) === `
` ? e[1].slice(0, -1) : e[1];
      return { type: "paragraph", raw: e[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(t) {
    let e = this.rules.block.text.exec(t);
    if (e) return { type: "text", raw: e[0], text: e[0], tokens: this.lexer.inline(e[0]) };
  }
  escape(t) {
    let e = this.rules.inline.escape.exec(t);
    if (e) return { type: "escape", raw: e[0], text: e[1] };
  }
  tag(t) {
    let e = this.rules.inline.tag.exec(t);
    if (e) return !this.lexer.state.inLink && this.rules.other.startATag.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && this.rules.other.endATag.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(e[0]) && (this.lexer.state.inRawBlock = !1), { type: "html", raw: e[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: !1, text: e[0] };
  }
  link(t) {
    let e = this.rules.inline.link.exec(t);
    if (e) {
      let r = e[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(r)) {
        if (!this.rules.other.endAngleBracket.test(r)) return;
        let i = nn(r.slice(0, -1), "\\");
        if ((r.length - i.length) % 2 === 0) return;
      } else {
        let i = Kd(e[2], "()");
        if (i === -2) return;
        if (i > -1) {
          let s = (e[0].indexOf("!") === 0 ? 5 : 4) + e[1].length + i;
          e[2] = e[2].substring(0, i), e[0] = e[0].substring(0, s).trim(), e[3] = "";
        }
      }
      let n = e[2], a = "";
      if (this.options.pedantic) {
        let i = this.rules.other.pedanticHrefTitle.exec(n);
        i && (n = i[1], a = i[3]);
      } else a = e[3] ? e[3].slice(1, -1) : "";
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(r) ? n = n.slice(1) : n = n.slice(1, -1)), Zo(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(t, e) {
    let r;
    if ((r = this.rules.inline.reflink.exec(t)) || (r = this.rules.inline.nolink.exec(t))) {
      let n = (r[2] || r[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = e[n.toLowerCase()];
      if (!a) {
        let i = r[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return Zo(r, a, r[0], this.lexer, this.rules);
    }
  }
  emStrong(t, e, r = "") {
    let n = this.rules.inline.emStrongLDelim.exec(t);
    if (!(!n || !n[1] && !n[2] && !n[3] && !n[4] || n[4] && r.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[3]) || !r || this.rules.inline.punctuation.exec(r))) {
      let a = [...n[0]].length - 1, i, s, o = a, c = 0, d = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * t.length + a); (n = d.exec(e)) !== null; ) {
        if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i) continue;
        if (s = [...i].length, n[3] || n[4]) {
          o += s;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + s) % 3)) {
          c += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o + c);
        let h = [...n[0]][0].length, f = t.slice(0, a + n.index + h + s);
        if (Math.min(a, s) % 2) {
          let v = f.slice(1, -1);
          return { type: "em", raw: f, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        let b = f.slice(2, -2);
        return { type: "strong", raw: f, text: b, tokens: this.lexer.inlineTokens(b) };
      }
    }
  }
  codespan(t) {
    let e = this.rules.inline.code.exec(t);
    if (e) {
      let r = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(r), a = this.rules.other.startingSpaceChar.test(r) && this.rules.other.endingSpaceChar.test(r);
      return n && a && (r = r.substring(1, r.length - 1)), { type: "codespan", raw: e[0], text: r };
    }
  }
  br(t) {
    let e = this.rules.inline.br.exec(t);
    if (e) return { type: "br", raw: e[0] };
  }
  del(t, e, r = "") {
    let n = this.rules.inline.delLDelim.exec(t);
    if (n && (!n[1] || !r || this.rules.inline.punctuation.exec(r))) {
      let a = [...n[0]].length - 1, i, s, o = a, c = this.rules.inline.delRDelim;
      for (c.lastIndex = 0, e = e.slice(-1 * t.length + a); (n = c.exec(e)) !== null; ) {
        if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i || (s = [...i].length, s !== a)) continue;
        if (n[3] || n[4]) {
          o += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o);
        let d = [...n[0]][0].length, h = t.slice(0, a + n.index + d + s), f = h.slice(a, -a);
        return { type: "del", raw: h, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  autolink(t) {
    let e = this.rules.inline.autolink.exec(t);
    if (e) {
      let r, n;
      return e[2] === "@" ? (r = e[1], n = "mailto:" + r) : (r = e[1], n = r), { type: "link", raw: e[0], text: r, href: n, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  url(t) {
    var r;
    let e;
    if (e = this.rules.inline.url.exec(t)) {
      let n, a;
      if (e[2] === "@") n = e[0], a = "mailto:" + n;
      else {
        let i;
        do
          i = e[0], e[0] = ((r = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : r[0]) ?? "";
        while (i !== e[0]);
        n = e[0], e[1] === "www." ? a = "http://" + e[0] : a = e[0];
      }
      return { type: "link", raw: e[0], text: n, href: a, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(t) {
    let e = this.rules.inline.text.exec(t);
    if (e) {
      let r = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: r };
    }
  }
}, fr = class Ii {
  constructor(e) {
    Xe(this, "tokens");
    Xe(this, "options");
    Xe(this, "state");
    Xe(this, "inlineQueue");
    Xe(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Bn, this.options.tokenizer = this.options.tokenizer || new $a(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let r = { other: Tt, block: ia.normal, inline: _0.normal };
    this.options.pedantic ? (r.block = ia.pedantic, r.inline = _0.pedantic) : this.options.gfm && (r.block = ia.gfm, this.options.breaks ? r.inline = _0.breaks : r.inline = _0.gfm), this.tokenizer.rules = r;
  }
  static get rules() {
    return { block: ia, inline: _0 };
  }
  static lex(e, r) {
    return new Ii(r).lex(e);
  }
  static lexInline(e, r) {
    return new Ii(r).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(Tt.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let r = 0; r < this.inlineQueue.length; r++) {
      let n = this.inlineQueue[r];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, r = [], n = !1) {
    var i, s, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Tt.tabCharGlobal, "    ").replace(Tt.spaceLine, ""));
    let a = 1 / 0;
    for (; e; ) {
      if (e.length < a) a = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let c;
      if ((s = (i = this.options.extensions) == null ? void 0 : i.block) != null && s.some((h) => (c = h.call({ lexer: this }, e, r)) ? (e = e.substring(c.raw.length), r.push(c), !0) : !1)) continue;
      if (c = this.tokenizer.space(e)) {
        e = e.substring(c.raw.length);
        let h = r.at(-1);
        c.raw.length === 1 && h !== void 0 ? h.raw += `
` : r.push(c);
        continue;
      }
      if (c = this.tokenizer.code(e)) {
        e = e.substring(c.raw.length);
        let h = r.at(-1);
        (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + c.raw, h.text += `
` + c.text, this.inlineQueue.at(-1).src = h.text) : r.push(c);
        continue;
      }
      if (c = this.tokenizer.fences(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.heading(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.hr(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.blockquote(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.list(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.html(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.def(e)) {
        e = e.substring(c.raw.length);
        let h = r.at(-1);
        (h == null ? void 0 : h.type) === "paragraph" || (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + c.raw, h.text += `
` + c.raw, this.inlineQueue.at(-1).src = h.text) : this.tokens.links[c.tag] || (this.tokens.links[c.tag] = { href: c.href, title: c.title }, r.push(c));
        continue;
      }
      if (c = this.tokenizer.table(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      if (c = this.tokenizer.lheading(e)) {
        e = e.substring(c.raw.length), r.push(c);
        continue;
      }
      let d = e;
      if ((o = this.options.extensions) != null && o.startBlock) {
        let h = 1 / 0, f = e.slice(1), b;
        this.options.extensions.startBlock.forEach((v) => {
          b = v.call({ lexer: this }, f), typeof b == "number" && b >= 0 && (h = Math.min(h, b));
        }), h < 1 / 0 && h >= 0 && (d = e.substring(0, h + 1));
      }
      if (this.state.top && (c = this.tokenizer.paragraph(d))) {
        let h = r.at(-1);
        n && (h == null ? void 0 : h.type) === "paragraph" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + c.raw, h.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : r.push(c), n = d.length !== e.length, e = e.substring(c.raw.length);
        continue;
      }
      if (c = this.tokenizer.text(e)) {
        e = e.substring(c.raw.length);
        let h = r.at(-1);
        (h == null ? void 0 : h.type) === "text" ? (h.raw += (h.raw.endsWith(`
`) ? "" : `
`) + c.raw, h.text += `
` + c.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = h.text) : r.push(c);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return this.state.top = !0, r;
  }
  inline(e, r = []) {
    return this.inlineQueue.push({ src: e, tokens: r }), r;
  }
  inlineTokens(e, r = []) {
    var d, h, f, b, v;
    this.tokenizer.lexer = this;
    let n = e, a = null;
    if (this.tokens.links) {
      let k = Object.keys(this.tokens.links);
      if (k.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null; ) k.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null; ) n = n.slice(0, a.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null; ) i = a[2] ? a[2].length : 0, n = n.slice(0, a.index + i) + "[" + "a".repeat(a[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = ((h = (d = this.options.hooks) == null ? void 0 : d.emStrongMask) == null ? void 0 : h.call({ lexer: this }, n)) ?? n;
    let s = !1, o = "", c = 1 / 0;
    for (; e; ) {
      if (e.length < c) c = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (o = ""), s = !1;
      let k;
      if ((b = (f = this.options.extensions) == null ? void 0 : f.inline) != null && b.some((M) => (k = M.call({ lexer: this }, e, r)) ? (e = e.substring(k.raw.length), r.push(k), !0) : !1)) continue;
      if (k = this.tokenizer.escape(e)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.tag(e)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.link(e)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(k.raw.length);
        let M = r.at(-1);
        k.type === "text" && (M == null ? void 0 : M.type) === "text" ? (M.raw += k.raw, M.text += k.text) : r.push(k);
        continue;
      }
      if (k = this.tokenizer.emStrong(e, n, o)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.codespan(e)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.br(e)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.del(e, n, o)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (k = this.tokenizer.autolink(e)) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      if (!this.state.inLink && (k = this.tokenizer.url(e))) {
        e = e.substring(k.raw.length), r.push(k);
        continue;
      }
      let $ = e;
      if ((v = this.options.extensions) != null && v.startInline) {
        let M = 1 / 0, I = e.slice(1), y;
        this.options.extensions.startInline.forEach((T) => {
          y = T.call({ lexer: this }, I), typeof y == "number" && y >= 0 && (M = Math.min(M, y));
        }), M < 1 / 0 && M >= 0 && ($ = e.substring(0, M + 1));
      }
      if (k = this.tokenizer.inlineText($)) {
        e = e.substring(k.raw.length), k.raw.slice(-1) !== "_" && (o = k.raw.slice(-1)), s = !0;
        let M = r.at(-1);
        (M == null ? void 0 : M.type) === "text" ? (M.raw += k.raw, M.text += k.text) : r.push(k);
        continue;
      }
      if (e) {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
    }
    return r;
  }
  infiniteLoopError(e) {
    let r = "Infinite loop on byte: " + e;
    if (this.options.silent) console.error(r);
    else throw new Error(r);
  }
}, Ma = class {
  constructor(t) {
    Xe(this, "options");
    Xe(this, "parser");
    this.options = t || Bn;
  }
  space(t) {
    return "";
  }
  code({ text: t, lang: e, escaped: r }) {
    var i;
    let n = (i = (e || "").match(Tt.notSpaceStart)) == null ? void 0 : i[0], a = t.replace(Tt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + kr(n) + '">' + (r ? a : kr(a, !0)) + `</code></pre>
` : "<pre><code>" + (r ? a : kr(a, !0)) + `</code></pre>
`;
  }
  blockquote({ tokens: t }) {
    return `<blockquote>
${this.parser.parse(t)}</blockquote>
`;
  }
  html({ text: t }) {
    return t;
  }
  def(t) {
    return "";
  }
  heading({ tokens: t, depth: e }) {
    return `<h${e}>${this.parser.parseInline(t)}</h${e}>
`;
  }
  hr(t) {
    return `<hr>
`;
  }
  list(t) {
    let e = t.ordered, r = t.start, n = "";
    for (let s = 0; s < t.items.length; s++) {
      let o = t.items[s];
      n += this.listitem(o);
    }
    let a = e ? "ol" : "ul", i = e && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + a + i + `>
` + n + "</" + a + `>
`;
  }
  listitem(t) {
    return `<li>${this.parser.parse(t.tokens)}</li>
`;
  }
  checkbox({ checked: t }) {
    return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"> ';
  }
  paragraph({ tokens: t }) {
    return `<p>${this.parser.parseInline(t)}</p>
`;
  }
  table(t) {
    let e = "", r = "";
    for (let a = 0; a < t.header.length; a++) r += this.tablecell(t.header[a]);
    e += this.tablerow({ text: r });
    let n = "";
    for (let a = 0; a < t.rows.length; a++) {
      let i = t.rows[a];
      r = "";
      for (let s = 0; s < i.length; s++) r += this.tablecell(i[s]);
      n += this.tablerow({ text: r });
    }
    return n && (n = `<tbody>${n}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + n + `</table>
`;
  }
  tablerow({ text: t }) {
    return `<tr>
${t}</tr>
`;
  }
  tablecell(t) {
    let e = this.parser.parseInline(t.tokens), r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  strong({ tokens: t }) {
    return `<strong>${this.parser.parseInline(t)}</strong>`;
  }
  em({ tokens: t }) {
    return `<em>${this.parser.parseInline(t)}</em>`;
  }
  codespan({ text: t }) {
    return `<code>${kr(t, !0)}</code>`;
  }
  br(t) {
    return "<br>";
  }
  del({ tokens: t }) {
    return `<del>${this.parser.parseInline(t)}</del>`;
  }
  link({ href: t, title: e, tokens: r }) {
    let n = this.parser.parseInline(r), a = jo(t);
    if (a === null) return n;
    t = a;
    let i = '<a href="' + t + '"';
    return e && (i += ' title="' + kr(e) + '"'), i += ">" + n + "</a>", i;
  }
  image({ href: t, title: e, text: r, tokens: n }) {
    n && (r = this.parser.parseInline(n, this.parser.textRenderer));
    let a = jo(t);
    if (a === null) return kr(r);
    t = a;
    let i = `<img src="${t}" alt="${kr(r)}"`;
    return e && (i += ` title="${kr(e)}"`), i += ">", i;
  }
  text(t) {
    return "tokens" in t && t.tokens ? this.parser.parseInline(t.tokens) : "escaped" in t && t.escaped ? t.text : kr(t.text);
  }
}, vs = class {
  strong({ text: t }) {
    return t;
  }
  em({ text: t }) {
    return t;
  }
  codespan({ text: t }) {
    return t;
  }
  del({ text: t }) {
    return t;
  }
  html({ text: t }) {
    return t;
  }
  text({ text: t }) {
    return t;
  }
  link({ text: t }) {
    return "" + t;
  }
  image({ text: t }) {
    return "" + t;
  }
  br() {
    return "";
  }
  checkbox({ raw: t }) {
    return t;
  }
}, pr = class zi {
  constructor(e) {
    Xe(this, "options");
    Xe(this, "renderer");
    Xe(this, "textRenderer");
    this.options = e || Bn, this.options.renderer = this.options.renderer || new Ma(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new vs();
  }
  static parse(e, r) {
    return new zi(r).parse(e);
  }
  static parseInline(e, r) {
    return new zi(r).parseInline(e);
  }
  parse(e) {
    var n, a;
    this.renderer.parser = this;
    let r = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if ((a = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && a[s.type]) {
        let c = s, d = this.options.extensions.renderers[c.type].call({ parser: this }, c);
        if (d !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(c.type)) {
          r += d || "";
          continue;
        }
      }
      let o = s;
      switch (o.type) {
        case "space": {
          r += this.renderer.space(o);
          break;
        }
        case "hr": {
          r += this.renderer.hr(o);
          break;
        }
        case "heading": {
          r += this.renderer.heading(o);
          break;
        }
        case "code": {
          r += this.renderer.code(o);
          break;
        }
        case "table": {
          r += this.renderer.table(o);
          break;
        }
        case "blockquote": {
          r += this.renderer.blockquote(o);
          break;
        }
        case "list": {
          r += this.renderer.list(o);
          break;
        }
        case "checkbox": {
          r += this.renderer.checkbox(o);
          break;
        }
        case "html": {
          r += this.renderer.html(o);
          break;
        }
        case "def": {
          r += this.renderer.def(o);
          break;
        }
        case "paragraph": {
          r += this.renderer.paragraph(o);
          break;
        }
        case "text": {
          r += this.renderer.text(o);
          break;
        }
        default: {
          let c = 'Token with "' + o.type + '" type was not found.';
          if (this.options.silent) return console.error(c), "";
          throw new Error(c);
        }
      }
    }
    return r;
  }
  parseInline(e, r = this.renderer) {
    var a, i;
    this.renderer.parser = this;
    let n = "";
    for (let s = 0; s < e.length; s++) {
      let o = e[s];
      if ((i = (a = this.options.extensions) == null ? void 0 : a.renderers) != null && i[o.type]) {
        let d = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (d !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(o.type)) {
          n += d || "";
          continue;
        }
      }
      let c = o;
      switch (c.type) {
        case "escape": {
          n += r.text(c);
          break;
        }
        case "html": {
          n += r.html(c);
          break;
        }
        case "link": {
          n += r.link(c);
          break;
        }
        case "image": {
          n += r.image(c);
          break;
        }
        case "checkbox": {
          n += r.checkbox(c);
          break;
        }
        case "strong": {
          n += r.strong(c);
          break;
        }
        case "em": {
          n += r.em(c);
          break;
        }
        case "codespan": {
          n += r.codespan(c);
          break;
        }
        case "br": {
          n += r.br(c);
          break;
        }
        case "del": {
          n += r.del(c);
          break;
        }
        case "text": {
          n += r.text(c);
          break;
        }
        default: {
          let d = 'Token with "' + c.type + '" type was not found.';
          if (this.options.silent) return console.error(d), "";
          throw new Error(d);
        }
      }
    }
    return n;
  }
}, ba, $0 = (ba = class {
  constructor(t) {
    Xe(this, "options");
    Xe(this, "block");
    this.options = t || Bn;
  }
  preprocess(t) {
    return t;
  }
  postprocess(t) {
    return t;
  }
  processAllTokens(t) {
    return t;
  }
  emStrongMask(t) {
    return t;
  }
  provideLexer(t = this.block) {
    return t ? fr.lex : fr.lexInline;
  }
  provideParser(t = this.block) {
    return t ? pr.parse : pr.parseInline;
  }
}, Xe(ba, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Xe(ba, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), ba), Ic = class {
  constructor(...t) {
    Xe(this, "defaults", us());
    Xe(this, "options", this.setOptions);
    Xe(this, "parse", this.parseMarkdown(!0));
    Xe(this, "parseInline", this.parseMarkdown(!1));
    Xe(this, "Parser", pr);
    Xe(this, "Renderer", Ma);
    Xe(this, "TextRenderer", vs);
    Xe(this, "Lexer", fr);
    Xe(this, "Tokenizer", $a);
    Xe(this, "Hooks", $0);
    this.use(...t);
  }
  walkTokens(t, e) {
    var n, a;
    let r = [];
    for (let i of t) switch (r = r.concat(e.call(this, i)), i.type) {
      case "table": {
        let s = i;
        for (let o of s.header) r = r.concat(this.walkTokens(o.tokens, e));
        for (let o of s.rows) for (let c of o) r = r.concat(this.walkTokens(c.tokens, e));
        break;
      }
      case "list": {
        let s = i;
        r = r.concat(this.walkTokens(s.items, e));
        break;
      }
      default: {
        let s = i;
        (a = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && a[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
          let c = s[o].flat(1 / 0);
          r = r.concat(this.walkTokens(c, e));
        }) : s.tokens && (r = r.concat(this.walkTokens(s.tokens, e)));
      }
    }
    return r;
  }
  use(...t) {
    let e = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return t.forEach((r) => {
      let n = { ...r };
      if (n.async = this.defaults.async || n.async || !1, r.extensions && (r.extensions.forEach((a) => {
        if (!a.name) throw new Error("extension name required");
        if ("renderer" in a) {
          let i = e.renderers[a.name];
          i ? e.renderers[a.name] = function(...s) {
            let o = a.renderer.apply(this, s);
            return o === !1 && (o = i.apply(this, s)), o;
          } : e.renderers[a.name] = a.renderer;
        }
        if ("tokenizer" in a) {
          if (!a.level || a.level !== "block" && a.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let i = e[a.level];
          i ? i.unshift(a.tokenizer) : e[a.level] = [a.tokenizer], a.start && (a.level === "block" ? e.startBlock ? e.startBlock.push(a.start) : e.startBlock = [a.start] : a.level === "inline" && (e.startInline ? e.startInline.push(a.start) : e.startInline = [a.start]));
        }
        "childTokens" in a && a.childTokens && (e.childTokens[a.name] = a.childTokens);
      }), n.extensions = e), r.renderer) {
        let a = this.defaults.renderer || new Ma(this.defaults);
        for (let i in r.renderer) {
          if (!(i in a)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let s = i, o = r.renderer[s], c = a[s];
          a[s] = (...d) => {
            let h = o.apply(a, d);
            return h === !1 && (h = c.apply(a, d)), h || "";
          };
        }
        n.renderer = a;
      }
      if (r.tokenizer) {
        let a = this.defaults.tokenizer || new $a(this.defaults);
        for (let i in r.tokenizer) {
          if (!(i in a)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let s = i, o = r.tokenizer[s], c = a[s];
          a[s] = (...d) => {
            let h = o.apply(a, d);
            return h === !1 && (h = c.apply(a, d)), h;
          };
        }
        n.tokenizer = a;
      }
      if (r.hooks) {
        let a = this.defaults.hooks || new $0();
        for (let i in r.hooks) {
          if (!(i in a)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let s = i, o = r.hooks[s], c = a[s];
          $0.passThroughHooks.has(i) ? a[s] = (d) => {
            if (this.defaults.async && $0.passThroughHooksRespectAsync.has(i)) return (async () => {
              let f = await o.call(a, d);
              return c.call(a, f);
            })();
            let h = o.call(a, d);
            return c.call(a, h);
          } : a[s] = (...d) => {
            if (this.defaults.async) return (async () => {
              let f = await o.apply(a, d);
              return f === !1 && (f = await c.apply(a, d)), f;
            })();
            let h = o.apply(a, d);
            return h === !1 && (h = c.apply(a, d)), h;
          };
        }
        n.hooks = a;
      }
      if (r.walkTokens) {
        let a = this.defaults.walkTokens, i = r.walkTokens;
        n.walkTokens = function(s) {
          let o = [];
          return o.push(i.call(this, s)), a && (o = o.concat(a.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(t) {
    return this.defaults = { ...this.defaults, ...t }, this;
  }
  lexer(t, e) {
    return fr.lex(t, e ?? this.defaults);
  }
  parser(t, e) {
    return pr.parse(t, e ?? this.defaults);
  }
  parseMarkdown(t) {
    return (e, r) => {
      let n = { ...r }, a = { ...this.defaults, ...n }, i = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && n.async === !1) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = t), a.async) return (async () => {
        let s = a.hooks ? await a.hooks.preprocess(e) : e, o = await (a.hooks ? await a.hooks.provideLexer(t) : t ? fr.lex : fr.lexInline)(s, a), c = a.hooks ? await a.hooks.processAllTokens(o) : o;
        a.walkTokens && await Promise.all(this.walkTokens(c, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser(t) : t ? pr.parse : pr.parseInline)(c, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(i);
      try {
        a.hooks && (e = a.hooks.preprocess(e));
        let s = (a.hooks ? a.hooks.provideLexer(t) : t ? fr.lex : fr.lexInline)(e, a);
        a.hooks && (s = a.hooks.processAllTokens(s)), a.walkTokens && this.walkTokens(s, a.walkTokens);
        let o = (a.hooks ? a.hooks.provideParser(t) : t ? pr.parse : pr.parseInline)(s, a);
        return a.hooks && (o = a.hooks.postprocess(o)), o;
      } catch (s) {
        return i(s);
      }
    };
  }
  onError(t, e) {
    return (r) => {
      if (r.message += `
Please report this to https://github.com/markedjs/marked.`, t) {
        let n = "<p>An error occurred:</p><pre>" + kr(r.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(r);
      throw r;
    };
  }
}, zn = new Ic();
function Ye(t, e) {
  return zn.parse(t, e);
}
Ye.options = Ye.setOptions = function(t) {
  return zn.setOptions(t), Ye.defaults = zn.defaults, yc(Ye.defaults), Ye;
};
Ye.getDefaults = us;
Ye.defaults = Bn;
Ye.use = function(...t) {
  return zn.use(...t), Ye.defaults = zn.defaults, yc(Ye.defaults), Ye;
};
Ye.walkTokens = function(t, e) {
  return zn.walkTokens(t, e);
};
Ye.parseInline = zn.parseInline;
Ye.Parser = pr;
Ye.parser = pr.parse;
Ye.Renderer = Ma;
Ye.TextRenderer = vs;
Ye.Lexer = fr;
Ye.lexer = fr.lex;
Ye.Tokenizer = $a;
Ye.Hooks = $0;
Ye.parse = Ye;
Ye.options;
Ye.setOptions;
Ye.use;
Ye.walkTokens;
Ye.parseInline;
pr.parse;
fr.lex;
class q extends Error {
  // The underlying error message without any context added.
  constructor(e, r) {
    var n = "KaTeX parse error: " + e, a, i, s = r && r.loc;
    if (s && s.start <= s.end) {
      var o = s.lexer.input;
      a = s.start, i = s.end, a === o.length ? n += " at end of input: " : n += " at position " + (a + 1) + ": ";
      var c = o.slice(a, i).replace(/[^]/g, "$&̲"), d;
      a > 15 ? d = "…" + o.slice(a - 15, a) : d = o.slice(0, a);
      var h;
      i + 15 < o.length ? h = o.slice(i, i + 15) + "…" : h = o.slice(i), n += d + c + h;
    }
    super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, q.prototype), this.position = a, a != null && i != null && (this.length = i - a), this.rawMessage = e;
  }
}
var Jd = /([A-Z])/g, Qd = (t) => t.replace(Jd, "-$1").toLowerCase(), eh = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, th = /[&><"']/g, $t = (t) => String(t).replace(th, (e) => eh[e]), ya = (t) => t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? ya(t.body[0]) : t : t.type === "font" ? ya(t.body) : t, rh = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), Xr = (t) => rh.has(ya(t).type), nh = (t) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, Ni = {
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
    cliProcessor: (t) => "#" + t
  },
  macros: {
    type: "object",
    cli: "-m, --macro <def>",
    cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
    cliDefault: [],
    cliProcessor: (t, e) => (e.push(t), e)
  },
  minRuleThickness: {
    type: "number",
    description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
    processor: (t) => Math.max(0, t),
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
    processor: (t) => Math.max(0, t),
    cli: "-s, --max-size <n>",
    cliProcessor: parseInt
  },
  maxExpand: {
    type: "number",
    default: 1e3,
    description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
    processor: (t) => Math.max(0, t),
    cli: "-e, --max-expand <n>",
    cliProcessor: (t) => t === "Infinity" ? 1 / 0 : parseInt(t)
  },
  globalGroup: {
    type: "boolean",
    cli: !1
  }
};
function ah(t) {
  if (typeof t != "string")
    return t.enum[0];
  switch (t) {
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
function ih(t) {
  if (t.default !== void 0)
    return t.default;
  var e = Array.isArray(t.type) ? t.type[0] : t.type;
  return ah(e);
}
function sh(t, e, r, n) {
  var a = r[e];
  t[e] = a !== void 0 ? n.processor ? n.processor(a) : a : ih(n);
}
class ws {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var r of Object.keys(Ni)) {
      var n = Ni[r];
      n && sh(this, r, e, n);
    }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, r, n) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, r, n)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new q("LaTeX-incompatible input and strict mode is set to 'error': " + (r + " [" + e + "]"), n);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + r + " [" + e + "]"));
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
  useStrictBehavior(e, r, n) {
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, r, n);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (r + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + r + " [" + e + "]")), !1);
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
      var r = nh(e.url);
      if (r == null)
        return !1;
      e.protocol = r;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class an {
  constructor(e, r, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = r, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Cr[oh[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Cr[lh[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Cr[ch[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Cr[uh[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Cr[dh[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Cr[hh[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var xs = 0, Ea = 1, n0 = 2, Gr = 3, R0 = 4, Qt = 5, o0 = 6, Ot = 7, Cr = [new an(xs, 0, !1), new an(Ea, 0, !0), new an(n0, 1, !1), new an(Gr, 1, !0), new an(R0, 2, !1), new an(Qt, 2, !0), new an(o0, 3, !1), new an(Ot, 3, !0)], oh = [R0, Qt, R0, Qt, o0, Ot, o0, Ot], lh = [Qt, Qt, Qt, Qt, Ot, Ot, Ot, Ot], ch = [n0, Gr, R0, Qt, o0, Ot, o0, Ot], uh = [Gr, Gr, Qt, Qt, Ot, Ot, Ot, Ot], dh = [Ea, Ea, Gr, Gr, Qt, Qt, Ot, Ot], hh = [xs, Ea, n0, Gr, n0, Gr, n0, Gr], Se = {
  DISPLAY: Cr[xs],
  TEXT: Cr[n0],
  SCRIPT: Cr[R0],
  SCRIPTSCRIPT: Cr[o0]
}, Ri = [{
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
function fh(t) {
  for (var e = 0; e < Ri.length; e++)
    for (var r = Ri[e], n = 0; n < r.blocks.length; n++) {
      var a = r.blocks[n];
      if (t >= a[0] && t <= a[1])
        return r.name;
    }
  return null;
}
var ka = [];
Ri.forEach((t) => t.blocks.forEach((e) => ka.push(...e)));
function zc(t) {
  for (var e = 0; e < ka.length; e += 2)
    if (t >= ka[e] && t <= ka[e + 1])
      return !0;
  return !1;
}
var yt = (t) => t + " " + t, Xn = 80, ph = function(e, r) {
  return "M95," + (622 + e + r) + `
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
M` + (834 + e) + " " + r + "h400000v" + (40 + e) + "h-400000z";
}, mh = function(e, r) {
  return "M263," + (601 + e + r) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + r + "h400000v" + (40 + e) + "h-400000z";
}, gh = function(e, r) {
  return "M983 " + (10 + e + r) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + r + "h400000v" + (40 + e) + "h-400000z";
}, bh = function(e, r) {
  return "M424," + (2398 + e + r) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + r + `
h400000v` + (40 + e) + "h-400000z";
}, vh = function(e, r) {
  return "M473," + (2713 + e + r) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + r + "h400000v" + (40 + e) + "H1017.7z";
}, wh = function(e) {
  var r = e / 2;
  return "M400000 " + e + " H0 L" + r + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, xh = function(e, r, n) {
  var a = n - 54 - r - e;
  return "M702 " + (e + r) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + r + "H400000v" + (40 + e) + "H742z";
}, yh = function(e, r, n) {
  r = 1e3 * r;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = ph(r, Xn);
      break;
    case "sqrtSize1":
      a = mh(r, Xn);
      break;
    case "sqrtSize2":
      a = gh(r, Xn);
      break;
    case "sqrtSize3":
      a = bh(r, Xn);
      break;
    case "sqrtSize4":
      a = vh(r, Xn);
      break;
    case "sqrtTall":
      a = xh(r, Xn, n);
  }
  return a;
}, kh = function(e, r) {
  switch (e) {
    case "⎜":
      return yt("M291 0 H417 V" + r + " H291z");
    case "∣":
      return yt("M145 0 H188 V" + r + " H145z");
    case "∥":
      return yt("M145 0 H188 V" + r + " H145z") + yt("M367 0 H410 V" + r + " H367z");
    case "⎟":
      return yt("M457 0 H583 V" + r + " H457z");
    case "⎢":
      return yt("M319 0 H403 V" + r + " H319z");
    case "⎥":
      return yt("M263 0 H347 V" + r + " H263z");
    case "⎪":
      return yt("M384 0 H504 V" + r + " H384z");
    case "⏐":
      return yt("M312 0 H355 V" + r + " H312z");
    case "‖":
      return yt("M257 0 H300 V" + r + " H257z") + yt("M478 0 H521 V" + r + " H478z");
    default:
      return "";
  }
}, Ko = {
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
  leftlinesegment: yt("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
  leftbracketunder: yt("M0 0 h120 V290 H399995 v120 H0z"),
  leftbracketover: yt("M0 440 h120 V150 H399995 v-120 H0z"),
  leftmapsto: yt("M40 281 V448H0V74H40V241H400000v40z"),
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: yt("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
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
  rightlinesegment: yt("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
  rightbracketunder: yt("M399995 0 h-120 V290 H0 v120 H400000z"),
  rightbracketover: yt("M399995 440 h-120 V150 H0 v-120 H399995z"),
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
}, Sh = function(e, r) {
  switch (e) {
    case "lbrack":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + r + ` v1759 v84 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + r + " v1759 v84 h84z";
    case "rbrack":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + r + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + r + " v1759 h84z";
    case "vert":
      return "M145 15 v585 v" + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + r + " v585 h43z";
    case "doublevert":
      return "M145 15 v585 v" + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + r + ` v585 h43z
M367 15 v585 v` + r + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -r + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + r + " v585 h43z";
    case "lfloor":
      return "M319 602 V0 H403 V602 v" + r + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + r + " v1715 H319z";
    case "rfloor":
      return "M319 602 V0 H403 V602 v" + r + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + r + " v1715 H319z";
    case "lceil":
      return "M403 1759 V84 H666 V0 H319 V1759 v" + r + ` v602 h84z
M403 1759 V0 H319 V1759 v` + r + " v602 h84z";
    case "rceil":
      return "M347 1759 V0 H0 V84 H263 V1759 v" + r + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + r + " v602 h84z";
    case "lparen":
      return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (r + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (r + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
    case "rparen":
      return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (r + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (r + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
    default:
      throw new Error("Unknown stretchy delimiter.");
  }
};
function _h(t) {
  return "toText" in t;
}
class h0 {
  // Never used; needed for satisfying interface.
  constructor(e) {
    this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /** Convert the fragment into a node. */
  toNode() {
    for (var e = document.createDocumentFragment(), r = 0; r < this.children.length; r++)
      e.appendChild(this.children[r].toNode());
    return e;
  }
  /** Convert the fragment into HTML markup. */
  toMarkup() {
    for (var e = "", r = 0; r < this.children.length; r++)
      e += this.children[r].toMarkup();
    return e;
  }
  /**
   * Converts the math node into a string, similar to innerText. Applies to
   * MathDomNode's only.
   */
  toText() {
    return this.children.map((e) => {
      if (_h(e))
        return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var Oi = {
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
}, Ch = {
  ex: !0,
  em: !0,
  mu: !0
}, Nc = function(e) {
  return typeof e != "string" && (e = e.unit), e in Oi || e in Ch || e === "ex";
}, ct = function(e, r) {
  var n;
  if (e.unit in Oi)
    n = Oi[e.unit] / r.fontMetrics().ptPerEm / r.sizeMultiplier;
  else if (e.unit === "mu")
    n = r.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (r.style.isTight() ? a = r.havingStyle(r.style.text()) : a = r, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new q("Invalid unit: '" + e.unit + "'");
    a !== r && (n *= a.sizeMultiplier / r.sizeMultiplier);
  }
  return Math.min(e.number * n, r.maxSize);
}, G = function(e) {
  return +e.toFixed(4) + "em";
}, pn = function(e) {
  return e.filter((r) => r).join(" ");
}, ys = function(e) {
  var r = "";
  for (var n of Object.keys(e)) {
    var a = e[n];
    a !== void 0 && (r += Qd(n) + ":" + a + ";");
  }
  return r;
}, Rc = function(e, r, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, r) {
    r.style.isTight() && this.classes.push("mtight");
    var a = r.getColor();
    a && (this.style.color = a);
  }
}, Oc = function(e) {
  var r = document.createElement(e);
  r.className = pn(this.classes), Object.assign(r.style, this.style);
  for (var n of Object.keys(this.attributes))
    r.setAttribute(n, this.attributes[n]);
  for (var a = 0; a < this.children.length; a++)
    r.appendChild(this.children[a].toNode());
  return r;
}, Ah = /[\s"'>/=\x00-\x1f]/, Bc = function(e) {
  var r = "<" + e;
  this.classes.length && (r += ' class="' + $t(pn(this.classes)) + '"');
  var n = ys(this.style);
  n && (r += ' style="' + $t(n) + '"');
  for (var a of Object.keys(this.attributes)) {
    if (Ah.test(a))
      throw new q("Invalid attribute name '" + a + "'");
    r += " " + a + '="' + $t(this.attributes[a]) + '"';
  }
  r += ">";
  for (var i = 0; i < this.children.length; i++)
    r += this.children[i].toMarkup();
  return r += "</" + e + ">", r;
};
class f0 {
  constructor(e, r, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, Rc.call(this, e, n, a), this.children = r || [];
  }
  /**
   * Sets an arbitrary attribute on the span. Warning: use this wisely. Not
   * all browsers support attributes the same, and having too many custom
   * attributes is probably bad.
   */
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Oc.call(this, "span");
  }
  toMarkup() {
    return Bc.call(this, "span");
  }
}
class Fa {
  constructor(e, r, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Rc.call(this, r, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, r) {
    this.attributes[e] = r;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Oc.call(this, "a");
  }
  toMarkup() {
    return Bc.call(this, "a");
  }
}
class Th {
  constructor(e, r, n) {
    this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = r, this.src = e, this.classes = ["mord"], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    var e = document.createElement("img");
    return e.src = this.src, e.alt = this.alt, e.className = "mord", Object.assign(e.style, this.style), e;
  }
  toMarkup() {
    var e = '<img src="' + $t(this.src) + '"' + (' alt="' + $t(this.alt) + '"'), r = ys(this.style);
    return r && (e += ' style="' + $t(r) + '"'), e += "'/>", e;
  }
}
var $h = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Gt {
  constructor(e, r, n, a, i, s, o, c) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = r || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = c || {}, this.maxFontSize = 0;
    var d = fh(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = $h[this.text]);
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  /**
   * Creates a text node or span from a symbol node. Note that a span is only
   * created if it is needed.
   */
  toNode() {
    var e = document.createTextNode(this.text), r = null;
    return this.italic > 0 && (r = document.createElement("span"), r.style.marginRight = G(this.italic)), this.classes.length > 0 && (r = r || document.createElement("span"), r.className = pn(this.classes)), Object.keys(this.style).length > 0 && (r = r || document.createElement("span"), Object.assign(r.style, this.style)), r ? (r.appendChild(e), r) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, r = "<span";
    this.classes.length && (e = !0, r += ' class="', r += $t(pn(this.classes)), r += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + G(this.italic) + ";"), n += ys(this.style), n && (e = !0, r += ' style="' + $t(n) + '"');
    var a = $t(this.text);
    return e ? (r += ">", r += a, r += "</span>", r) : a;
  }
}
class Kr {
  constructor(e, r) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = r || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "svg");
    for (var n of Object.keys(this.attributes))
      r.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      r.appendChild(this.children[a].toNode());
    return r;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var r of Object.keys(this.attributes))
      e += " " + r + '="' + $t(this.attributes[r]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class mn {
  constructor(e, r) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = r;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "path");
    return this.alternate ? r.setAttribute("d", this.alternate) : r.setAttribute("d", Ko[this.pathName]), r;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + $t(this.alternate) + '"/>' : '<path d="' + $t(Ko[this.pathName]) + '"/>';
  }
}
class Bi {
  constructor(e) {
    this.attributes = void 0, this.attributes = e || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", r = document.createElementNS(e, "line");
    for (var n of Object.keys(this.attributes))
      r.setAttribute(n, this.attributes[n]);
    return r;
  }
  toMarkup() {
    var e = "<line";
    for (var r of Object.keys(this.attributes))
      e += " " + r + '="' + $t(this.attributes[r]) + '"';
    return e += "/>", e;
  }
}
function Mh(t) {
  if (t instanceof Gt)
    return t;
  throw new Error("Expected symbolNode but got " + String(t) + ".");
}
function Eh(t) {
  if (t instanceof f0)
    return t;
  throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".");
}
var Ih = (t) => t instanceof f0 || t instanceof Fa || t instanceof h0, Tr = {
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
}, sa = {
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
}, Xo = {
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
function zh(t, e) {
  Tr[t] = e;
}
function ks(t, e, r) {
  if (!Tr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = t.charCodeAt(0), a = Tr[e][n];
  if (!a && t[0] in Xo && (n = Xo[t[0]].charCodeAt(0), a = Tr[e][n]), !a && r === "text" && zc(n) && (a = Tr[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var ii = {};
function Nh(t) {
  var e;
  if (t >= 5 ? e = 0 : t >= 3 ? e = 1 : e = 2, !ii[e]) {
    var r = ii[e] = {
      cssEmPerMu: sa.quad[e] / 18
    };
    for (var n in sa)
      sa.hasOwnProperty(n) && (r[n] = sa[n][e]);
  }
  return ii[e];
}
var st = {
  math: {},
  text: {}
};
function l(t, e, r, n, a, i) {
  st[t][a] = {
    font: e,
    group: r,
    replace: n
  }, i && n && (st[t][n] = st[t][a]);
}
var u = "math", O = "text", p = "main", w = "ams", ot = "accent-token", se = "bin", Bt = "close", p0 = "inner", ve = "mathord", vt = "op-token", Zt = "open", Z0 = "punct", x = "rel", Yr = "spacing", A = "textord";
l(u, p, x, "≡", "\\equiv", !0);
l(u, p, x, "≺", "\\prec", !0);
l(u, p, x, "≻", "\\succ", !0);
l(u, p, x, "∼", "\\sim", !0);
l(u, p, x, "⊥", "\\perp");
l(u, p, x, "⪯", "\\preceq", !0);
l(u, p, x, "⪰", "\\succeq", !0);
l(u, p, x, "≃", "\\simeq", !0);
l(u, p, x, "∣", "\\mid", !0);
l(u, p, x, "≪", "\\ll", !0);
l(u, p, x, "≫", "\\gg", !0);
l(u, p, x, "≍", "\\asymp", !0);
l(u, p, x, "∥", "\\parallel");
l(u, p, x, "⋈", "\\bowtie", !0);
l(u, p, x, "⌣", "\\smile", !0);
l(u, p, x, "⊑", "\\sqsubseteq", !0);
l(u, p, x, "⊒", "\\sqsupseteq", !0);
l(u, p, x, "≐", "\\doteq", !0);
l(u, p, x, "⌢", "\\frown", !0);
l(u, p, x, "∋", "\\ni", !0);
l(u, p, x, "∝", "\\propto", !0);
l(u, p, x, "⊢", "\\vdash", !0);
l(u, p, x, "⊣", "\\dashv", !0);
l(u, p, x, "∋", "\\owns");
l(u, p, Z0, ".", "\\ldotp");
l(u, p, Z0, "⋅", "\\cdotp");
l(u, p, Z0, "⋅", "·");
l(O, p, A, "⋅", "·");
l(u, p, A, "#", "\\#");
l(O, p, A, "#", "\\#");
l(u, p, A, "&", "\\&");
l(O, p, A, "&", "\\&");
l(u, p, A, "ℵ", "\\aleph", !0);
l(u, p, A, "∀", "\\forall", !0);
l(u, p, A, "ℏ", "\\hbar", !0);
l(u, p, A, "∃", "\\exists", !0);
l(u, p, A, "∇", "\\nabla", !0);
l(u, p, A, "♭", "\\flat", !0);
l(u, p, A, "ℓ", "\\ell", !0);
l(u, p, A, "♮", "\\natural", !0);
l(u, p, A, "♣", "\\clubsuit", !0);
l(u, p, A, "℘", "\\wp", !0);
l(u, p, A, "♯", "\\sharp", !0);
l(u, p, A, "♢", "\\diamondsuit", !0);
l(u, p, A, "ℜ", "\\Re", !0);
l(u, p, A, "♡", "\\heartsuit", !0);
l(u, p, A, "ℑ", "\\Im", !0);
l(u, p, A, "♠", "\\spadesuit", !0);
l(u, p, A, "§", "\\S", !0);
l(O, p, A, "§", "\\S");
l(u, p, A, "¶", "\\P", !0);
l(O, p, A, "¶", "\\P");
l(u, p, A, "†", "\\dag");
l(O, p, A, "†", "\\dag");
l(O, p, A, "†", "\\textdagger");
l(u, p, A, "‡", "\\ddag");
l(O, p, A, "‡", "\\ddag");
l(O, p, A, "‡", "\\textdaggerdbl");
l(u, p, Bt, "⎱", "\\rmoustache", !0);
l(u, p, Zt, "⎰", "\\lmoustache", !0);
l(u, p, Bt, "⟯", "\\rgroup", !0);
l(u, p, Zt, "⟮", "\\lgroup", !0);
l(u, p, se, "∓", "\\mp", !0);
l(u, p, se, "⊖", "\\ominus", !0);
l(u, p, se, "⊎", "\\uplus", !0);
l(u, p, se, "⊓", "\\sqcap", !0);
l(u, p, se, "∗", "\\ast");
l(u, p, se, "⊔", "\\sqcup", !0);
l(u, p, se, "◯", "\\bigcirc", !0);
l(u, p, se, "∙", "\\bullet", !0);
l(u, p, se, "‡", "\\ddagger");
l(u, p, se, "≀", "\\wr", !0);
l(u, p, se, "⨿", "\\amalg");
l(u, p, se, "&", "\\And");
l(u, p, x, "⟵", "\\longleftarrow", !0);
l(u, p, x, "⇐", "\\Leftarrow", !0);
l(u, p, x, "⟸", "\\Longleftarrow", !0);
l(u, p, x, "⟶", "\\longrightarrow", !0);
l(u, p, x, "⇒", "\\Rightarrow", !0);
l(u, p, x, "⟹", "\\Longrightarrow", !0);
l(u, p, x, "↔", "\\leftrightarrow", !0);
l(u, p, x, "⟷", "\\longleftrightarrow", !0);
l(u, p, x, "⇔", "\\Leftrightarrow", !0);
l(u, p, x, "⟺", "\\Longleftrightarrow", !0);
l(u, p, x, "↦", "\\mapsto", !0);
l(u, p, x, "⟼", "\\longmapsto", !0);
l(u, p, x, "↗", "\\nearrow", !0);
l(u, p, x, "↩", "\\hookleftarrow", !0);
l(u, p, x, "↪", "\\hookrightarrow", !0);
l(u, p, x, "↘", "\\searrow", !0);
l(u, p, x, "↼", "\\leftharpoonup", !0);
l(u, p, x, "⇀", "\\rightharpoonup", !0);
l(u, p, x, "↙", "\\swarrow", !0);
l(u, p, x, "↽", "\\leftharpoondown", !0);
l(u, p, x, "⇁", "\\rightharpoondown", !0);
l(u, p, x, "↖", "\\nwarrow", !0);
l(u, p, x, "⇌", "\\rightleftharpoons", !0);
l(u, w, x, "≮", "\\nless", !0);
l(u, w, x, "", "\\@nleqslant");
l(u, w, x, "", "\\@nleqq");
l(u, w, x, "⪇", "\\lneq", !0);
l(u, w, x, "≨", "\\lneqq", !0);
l(u, w, x, "", "\\@lvertneqq");
l(u, w, x, "⋦", "\\lnsim", !0);
l(u, w, x, "⪉", "\\lnapprox", !0);
l(u, w, x, "⊀", "\\nprec", !0);
l(u, w, x, "⋠", "\\npreceq", !0);
l(u, w, x, "⋨", "\\precnsim", !0);
l(u, w, x, "⪹", "\\precnapprox", !0);
l(u, w, x, "≁", "\\nsim", !0);
l(u, w, x, "", "\\@nshortmid");
l(u, w, x, "∤", "\\nmid", !0);
l(u, w, x, "⊬", "\\nvdash", !0);
l(u, w, x, "⊭", "\\nvDash", !0);
l(u, w, x, "⋪", "\\ntriangleleft");
l(u, w, x, "⋬", "\\ntrianglelefteq", !0);
l(u, w, x, "⊊", "\\subsetneq", !0);
l(u, w, x, "", "\\@varsubsetneq");
l(u, w, x, "⫋", "\\subsetneqq", !0);
l(u, w, x, "", "\\@varsubsetneqq");
l(u, w, x, "≯", "\\ngtr", !0);
l(u, w, x, "", "\\@ngeqslant");
l(u, w, x, "", "\\@ngeqq");
l(u, w, x, "⪈", "\\gneq", !0);
l(u, w, x, "≩", "\\gneqq", !0);
l(u, w, x, "", "\\@gvertneqq");
l(u, w, x, "⋧", "\\gnsim", !0);
l(u, w, x, "⪊", "\\gnapprox", !0);
l(u, w, x, "⊁", "\\nsucc", !0);
l(u, w, x, "⋡", "\\nsucceq", !0);
l(u, w, x, "⋩", "\\succnsim", !0);
l(u, w, x, "⪺", "\\succnapprox", !0);
l(u, w, x, "≆", "\\ncong", !0);
l(u, w, x, "", "\\@nshortparallel");
l(u, w, x, "∦", "\\nparallel", !0);
l(u, w, x, "⊯", "\\nVDash", !0);
l(u, w, x, "⋫", "\\ntriangleright");
l(u, w, x, "⋭", "\\ntrianglerighteq", !0);
l(u, w, x, "", "\\@nsupseteqq");
l(u, w, x, "⊋", "\\supsetneq", !0);
l(u, w, x, "", "\\@varsupsetneq");
l(u, w, x, "⫌", "\\supsetneqq", !0);
l(u, w, x, "", "\\@varsupsetneqq");
l(u, w, x, "⊮", "\\nVdash", !0);
l(u, w, x, "⪵", "\\precneqq", !0);
l(u, w, x, "⪶", "\\succneqq", !0);
l(u, w, x, "", "\\@nsubseteqq");
l(u, w, se, "⊴", "\\unlhd");
l(u, w, se, "⊵", "\\unrhd");
l(u, w, x, "↚", "\\nleftarrow", !0);
l(u, w, x, "↛", "\\nrightarrow", !0);
l(u, w, x, "⇍", "\\nLeftarrow", !0);
l(u, w, x, "⇏", "\\nRightarrow", !0);
l(u, w, x, "↮", "\\nleftrightarrow", !0);
l(u, w, x, "⇎", "\\nLeftrightarrow", !0);
l(u, w, x, "△", "\\vartriangle");
l(u, w, A, "ℏ", "\\hslash");
l(u, w, A, "▽", "\\triangledown");
l(u, w, A, "◊", "\\lozenge");
l(u, w, A, "Ⓢ", "\\circledS");
l(u, w, A, "®", "\\circledR");
l(O, w, A, "®", "\\circledR");
l(u, w, A, "∡", "\\measuredangle", !0);
l(u, w, A, "∄", "\\nexists");
l(u, w, A, "℧", "\\mho");
l(u, w, A, "Ⅎ", "\\Finv", !0);
l(u, w, A, "⅁", "\\Game", !0);
l(u, w, A, "‵", "\\backprime");
l(u, w, A, "▲", "\\blacktriangle");
l(u, w, A, "▼", "\\blacktriangledown");
l(u, w, A, "■", "\\blacksquare");
l(u, w, A, "⧫", "\\blacklozenge");
l(u, w, A, "★", "\\bigstar");
l(u, w, A, "∢", "\\sphericalangle", !0);
l(u, w, A, "∁", "\\complement", !0);
l(u, w, A, "ð", "\\eth", !0);
l(O, p, A, "ð", "ð");
l(u, w, A, "╱", "\\diagup");
l(u, w, A, "╲", "\\diagdown");
l(u, w, A, "□", "\\square");
l(u, w, A, "□", "\\Box");
l(u, w, A, "◊", "\\Diamond");
l(u, w, A, "¥", "\\yen", !0);
l(O, w, A, "¥", "\\yen", !0);
l(u, w, A, "✓", "\\checkmark", !0);
l(O, w, A, "✓", "\\checkmark");
l(u, w, A, "ℶ", "\\beth", !0);
l(u, w, A, "ℸ", "\\daleth", !0);
l(u, w, A, "ℷ", "\\gimel", !0);
l(u, w, A, "ϝ", "\\digamma", !0);
l(u, w, A, "ϰ", "\\varkappa");
l(u, w, Zt, "┌", "\\@ulcorner", !0);
l(u, w, Bt, "┐", "\\@urcorner", !0);
l(u, w, Zt, "└", "\\@llcorner", !0);
l(u, w, Bt, "┘", "\\@lrcorner", !0);
l(u, w, x, "≦", "\\leqq", !0);
l(u, w, x, "⩽", "\\leqslant", !0);
l(u, w, x, "⪕", "\\eqslantless", !0);
l(u, w, x, "≲", "\\lesssim", !0);
l(u, w, x, "⪅", "\\lessapprox", !0);
l(u, w, x, "≊", "\\approxeq", !0);
l(u, w, se, "⋖", "\\lessdot");
l(u, w, x, "⋘", "\\lll", !0);
l(u, w, x, "≶", "\\lessgtr", !0);
l(u, w, x, "⋚", "\\lesseqgtr", !0);
l(u, w, x, "⪋", "\\lesseqqgtr", !0);
l(u, w, x, "≑", "\\doteqdot");
l(u, w, x, "≓", "\\risingdotseq", !0);
l(u, w, x, "≒", "\\fallingdotseq", !0);
l(u, w, x, "∽", "\\backsim", !0);
l(u, w, x, "⋍", "\\backsimeq", !0);
l(u, w, x, "⫅", "\\subseteqq", !0);
l(u, w, x, "⋐", "\\Subset", !0);
l(u, w, x, "⊏", "\\sqsubset", !0);
l(u, w, x, "≼", "\\preccurlyeq", !0);
l(u, w, x, "⋞", "\\curlyeqprec", !0);
l(u, w, x, "≾", "\\precsim", !0);
l(u, w, x, "⪷", "\\precapprox", !0);
l(u, w, x, "⊲", "\\vartriangleleft");
l(u, w, x, "⊴", "\\trianglelefteq");
l(u, w, x, "⊨", "\\vDash", !0);
l(u, w, x, "⊪", "\\Vvdash", !0);
l(u, w, x, "⌣", "\\smallsmile");
l(u, w, x, "⌢", "\\smallfrown");
l(u, w, x, "≏", "\\bumpeq", !0);
l(u, w, x, "≎", "\\Bumpeq", !0);
l(u, w, x, "≧", "\\geqq", !0);
l(u, w, x, "⩾", "\\geqslant", !0);
l(u, w, x, "⪖", "\\eqslantgtr", !0);
l(u, w, x, "≳", "\\gtrsim", !0);
l(u, w, x, "⪆", "\\gtrapprox", !0);
l(u, w, se, "⋗", "\\gtrdot");
l(u, w, x, "⋙", "\\ggg", !0);
l(u, w, x, "≷", "\\gtrless", !0);
l(u, w, x, "⋛", "\\gtreqless", !0);
l(u, w, x, "⪌", "\\gtreqqless", !0);
l(u, w, x, "≖", "\\eqcirc", !0);
l(u, w, x, "≗", "\\circeq", !0);
l(u, w, x, "≜", "\\triangleq", !0);
l(u, w, x, "∼", "\\thicksim");
l(u, w, x, "≈", "\\thickapprox");
l(u, w, x, "⫆", "\\supseteqq", !0);
l(u, w, x, "⋑", "\\Supset", !0);
l(u, w, x, "⊐", "\\sqsupset", !0);
l(u, w, x, "≽", "\\succcurlyeq", !0);
l(u, w, x, "⋟", "\\curlyeqsucc", !0);
l(u, w, x, "≿", "\\succsim", !0);
l(u, w, x, "⪸", "\\succapprox", !0);
l(u, w, x, "⊳", "\\vartriangleright");
l(u, w, x, "⊵", "\\trianglerighteq");
l(u, w, x, "⊩", "\\Vdash", !0);
l(u, w, x, "∣", "\\shortmid");
l(u, w, x, "∥", "\\shortparallel");
l(u, w, x, "≬", "\\between", !0);
l(u, w, x, "⋔", "\\pitchfork", !0);
l(u, w, x, "∝", "\\varpropto");
l(u, w, x, "◀", "\\blacktriangleleft");
l(u, w, x, "∴", "\\therefore", !0);
l(u, w, x, "∍", "\\backepsilon");
l(u, w, x, "▶", "\\blacktriangleright");
l(u, w, x, "∵", "\\because", !0);
l(u, w, x, "⋘", "\\llless");
l(u, w, x, "⋙", "\\gggtr");
l(u, w, se, "⊲", "\\lhd");
l(u, w, se, "⊳", "\\rhd");
l(u, w, x, "≂", "\\eqsim", !0);
l(u, p, x, "⋈", "\\Join");
l(u, w, x, "≑", "\\Doteq", !0);
l(u, w, se, "∔", "\\dotplus", !0);
l(u, w, se, "∖", "\\smallsetminus");
l(u, w, se, "⋒", "\\Cap", !0);
l(u, w, se, "⋓", "\\Cup", !0);
l(u, w, se, "⩞", "\\doublebarwedge", !0);
l(u, w, se, "⊟", "\\boxminus", !0);
l(u, w, se, "⊞", "\\boxplus", !0);
l(u, w, se, "⋇", "\\divideontimes", !0);
l(u, w, se, "⋉", "\\ltimes", !0);
l(u, w, se, "⋊", "\\rtimes", !0);
l(u, w, se, "⋋", "\\leftthreetimes", !0);
l(u, w, se, "⋌", "\\rightthreetimes", !0);
l(u, w, se, "⋏", "\\curlywedge", !0);
l(u, w, se, "⋎", "\\curlyvee", !0);
l(u, w, se, "⊝", "\\circleddash", !0);
l(u, w, se, "⊛", "\\circledast", !0);
l(u, w, se, "⋅", "\\centerdot");
l(u, w, se, "⊺", "\\intercal", !0);
l(u, w, se, "⋒", "\\doublecap");
l(u, w, se, "⋓", "\\doublecup");
l(u, w, se, "⊠", "\\boxtimes", !0);
l(u, w, x, "⇢", "\\dashrightarrow", !0);
l(u, w, x, "⇠", "\\dashleftarrow", !0);
l(u, w, x, "⇇", "\\leftleftarrows", !0);
l(u, w, x, "⇆", "\\leftrightarrows", !0);
l(u, w, x, "⇚", "\\Lleftarrow", !0);
l(u, w, x, "↞", "\\twoheadleftarrow", !0);
l(u, w, x, "↢", "\\leftarrowtail", !0);
l(u, w, x, "↫", "\\looparrowleft", !0);
l(u, w, x, "⇋", "\\leftrightharpoons", !0);
l(u, w, x, "↶", "\\curvearrowleft", !0);
l(u, w, x, "↺", "\\circlearrowleft", !0);
l(u, w, x, "↰", "\\Lsh", !0);
l(u, w, x, "⇈", "\\upuparrows", !0);
l(u, w, x, "↿", "\\upharpoonleft", !0);
l(u, w, x, "⇃", "\\downharpoonleft", !0);
l(u, p, x, "⊶", "\\origof", !0);
l(u, p, x, "⊷", "\\imageof", !0);
l(u, w, x, "⊸", "\\multimap", !0);
l(u, w, x, "↭", "\\leftrightsquigarrow", !0);
l(u, w, x, "⇉", "\\rightrightarrows", !0);
l(u, w, x, "⇄", "\\rightleftarrows", !0);
l(u, w, x, "↠", "\\twoheadrightarrow", !0);
l(u, w, x, "↣", "\\rightarrowtail", !0);
l(u, w, x, "↬", "\\looparrowright", !0);
l(u, w, x, "↷", "\\curvearrowright", !0);
l(u, w, x, "↻", "\\circlearrowright", !0);
l(u, w, x, "↱", "\\Rsh", !0);
l(u, w, x, "⇊", "\\downdownarrows", !0);
l(u, w, x, "↾", "\\upharpoonright", !0);
l(u, w, x, "⇂", "\\downharpoonright", !0);
l(u, w, x, "⇝", "\\rightsquigarrow", !0);
l(u, w, x, "⇝", "\\leadsto");
l(u, w, x, "⇛", "\\Rrightarrow", !0);
l(u, w, x, "↾", "\\restriction");
l(u, p, A, "‘", "`");
l(u, p, A, "$", "\\$");
l(O, p, A, "$", "\\$");
l(O, p, A, "$", "\\textdollar");
l(u, p, A, "%", "\\%");
l(O, p, A, "%", "\\%");
l(u, p, A, "_", "\\_");
l(O, p, A, "_", "\\_");
l(O, p, A, "_", "\\textunderscore");
l(u, p, A, "∠", "\\angle", !0);
l(u, p, A, "∞", "\\infty", !0);
l(u, p, A, "′", "\\prime");
l(u, p, A, "△", "\\triangle");
l(u, p, A, "Γ", "\\Gamma", !0);
l(u, p, A, "Δ", "\\Delta", !0);
l(u, p, A, "Θ", "\\Theta", !0);
l(u, p, A, "Λ", "\\Lambda", !0);
l(u, p, A, "Ξ", "\\Xi", !0);
l(u, p, A, "Π", "\\Pi", !0);
l(u, p, A, "Σ", "\\Sigma", !0);
l(u, p, A, "Υ", "\\Upsilon", !0);
l(u, p, A, "Φ", "\\Phi", !0);
l(u, p, A, "Ψ", "\\Psi", !0);
l(u, p, A, "Ω", "\\Omega", !0);
l(u, p, A, "A", "Α");
l(u, p, A, "B", "Β");
l(u, p, A, "E", "Ε");
l(u, p, A, "Z", "Ζ");
l(u, p, A, "H", "Η");
l(u, p, A, "I", "Ι");
l(u, p, A, "K", "Κ");
l(u, p, A, "M", "Μ");
l(u, p, A, "N", "Ν");
l(u, p, A, "O", "Ο");
l(u, p, A, "P", "Ρ");
l(u, p, A, "T", "Τ");
l(u, p, A, "X", "Χ");
l(u, p, A, "¬", "\\neg", !0);
l(u, p, A, "¬", "\\lnot");
l(u, p, A, "⊤", "\\top");
l(u, p, A, "⊥", "\\bot");
l(u, p, A, "∅", "\\emptyset");
l(u, w, A, "∅", "\\varnothing");
l(u, p, ve, "α", "\\alpha", !0);
l(u, p, ve, "β", "\\beta", !0);
l(u, p, ve, "γ", "\\gamma", !0);
l(u, p, ve, "δ", "\\delta", !0);
l(u, p, ve, "ϵ", "\\epsilon", !0);
l(u, p, ve, "ζ", "\\zeta", !0);
l(u, p, ve, "η", "\\eta", !0);
l(u, p, ve, "θ", "\\theta", !0);
l(u, p, ve, "ι", "\\iota", !0);
l(u, p, ve, "κ", "\\kappa", !0);
l(u, p, ve, "λ", "\\lambda", !0);
l(u, p, ve, "μ", "\\mu", !0);
l(u, p, ve, "ν", "\\nu", !0);
l(u, p, ve, "ξ", "\\xi", !0);
l(u, p, ve, "ο", "\\omicron", !0);
l(u, p, ve, "π", "\\pi", !0);
l(u, p, ve, "ρ", "\\rho", !0);
l(u, p, ve, "σ", "\\sigma", !0);
l(u, p, ve, "τ", "\\tau", !0);
l(u, p, ve, "υ", "\\upsilon", !0);
l(u, p, ve, "ϕ", "\\phi", !0);
l(u, p, ve, "χ", "\\chi", !0);
l(u, p, ve, "ψ", "\\psi", !0);
l(u, p, ve, "ω", "\\omega", !0);
l(u, p, ve, "ε", "\\varepsilon", !0);
l(u, p, ve, "ϑ", "\\vartheta", !0);
l(u, p, ve, "ϖ", "\\varpi", !0);
l(u, p, ve, "ϱ", "\\varrho", !0);
l(u, p, ve, "ς", "\\varsigma", !0);
l(u, p, ve, "φ", "\\varphi", !0);
l(u, p, se, "∗", "*", !0);
l(u, p, se, "+", "+");
l(u, p, se, "−", "-", !0);
l(u, p, se, "⋅", "\\cdot", !0);
l(u, p, se, "∘", "\\circ", !0);
l(u, p, se, "÷", "\\div", !0);
l(u, p, se, "±", "\\pm", !0);
l(u, p, se, "×", "\\times", !0);
l(u, p, se, "∩", "\\cap", !0);
l(u, p, se, "∪", "\\cup", !0);
l(u, p, se, "∖", "\\setminus", !0);
l(u, p, se, "∧", "\\land");
l(u, p, se, "∨", "\\lor");
l(u, p, se, "∧", "\\wedge", !0);
l(u, p, se, "∨", "\\vee", !0);
l(u, p, A, "√", "\\surd");
l(u, p, Zt, "⟨", "\\langle", !0);
l(u, p, Zt, "∣", "\\lvert");
l(u, p, Zt, "∥", "\\lVert");
l(u, p, Bt, "?", "?");
l(u, p, Bt, "!", "!");
l(u, p, Bt, "⟩", "\\rangle", !0);
l(u, p, Bt, "∣", "\\rvert");
l(u, p, Bt, "∥", "\\rVert");
l(u, p, x, "=", "=");
l(u, p, x, ":", ":");
l(u, p, x, "≈", "\\approx", !0);
l(u, p, x, "≅", "\\cong", !0);
l(u, p, x, "≥", "\\ge");
l(u, p, x, "≥", "\\geq", !0);
l(u, p, x, "←", "\\gets");
l(u, p, x, ">", "\\gt", !0);
l(u, p, x, "∈", "\\in", !0);
l(u, p, x, "", "\\@not");
l(u, p, x, "⊂", "\\subset", !0);
l(u, p, x, "⊃", "\\supset", !0);
l(u, p, x, "⊆", "\\subseteq", !0);
l(u, p, x, "⊇", "\\supseteq", !0);
l(u, w, x, "⊈", "\\nsubseteq", !0);
l(u, w, x, "⊉", "\\nsupseteq", !0);
l(u, p, x, "⊨", "\\models");
l(u, p, x, "←", "\\leftarrow", !0);
l(u, p, x, "≤", "\\le");
l(u, p, x, "≤", "\\leq", !0);
l(u, p, x, "<", "\\lt", !0);
l(u, p, x, "→", "\\rightarrow", !0);
l(u, p, x, "→", "\\to");
l(u, w, x, "≱", "\\ngeq", !0);
l(u, w, x, "≰", "\\nleq", !0);
l(u, p, Yr, " ", "\\ ");
l(u, p, Yr, " ", "\\space");
l(u, p, Yr, " ", "\\nobreakspace");
l(O, p, Yr, " ", "\\ ");
l(O, p, Yr, " ", " ");
l(O, p, Yr, " ", "\\space");
l(O, p, Yr, " ", "\\nobreakspace");
l(u, p, Yr, "", "\\nobreak");
l(u, p, Yr, "", "\\allowbreak");
l(u, p, Z0, ",", ",");
l(u, p, Z0, ";", ";");
l(u, w, se, "⊼", "\\barwedge", !0);
l(u, w, se, "⊻", "\\veebar", !0);
l(u, p, se, "⊙", "\\odot", !0);
l(u, p, se, "⊕", "\\oplus", !0);
l(u, p, se, "⊗", "\\otimes", !0);
l(u, p, A, "∂", "\\partial", !0);
l(u, p, se, "⊘", "\\oslash", !0);
l(u, w, se, "⊚", "\\circledcirc", !0);
l(u, w, se, "⊡", "\\boxdot", !0);
l(u, p, se, "△", "\\bigtriangleup");
l(u, p, se, "▽", "\\bigtriangledown");
l(u, p, se, "†", "\\dagger");
l(u, p, se, "⋄", "\\diamond");
l(u, p, se, "⋆", "\\star");
l(u, p, se, "◃", "\\triangleleft");
l(u, p, se, "▹", "\\triangleright");
l(u, p, Zt, "{", "\\{");
l(O, p, A, "{", "\\{");
l(O, p, A, "{", "\\textbraceleft");
l(u, p, Bt, "}", "\\}");
l(O, p, A, "}", "\\}");
l(O, p, A, "}", "\\textbraceright");
l(u, p, Zt, "{", "\\lbrace");
l(u, p, Bt, "}", "\\rbrace");
l(u, p, Zt, "[", "\\lbrack", !0);
l(O, p, A, "[", "\\lbrack", !0);
l(u, p, Bt, "]", "\\rbrack", !0);
l(O, p, A, "]", "\\rbrack", !0);
l(u, p, Zt, "(", "\\lparen", !0);
l(u, p, Bt, ")", "\\rparen", !0);
l(O, p, A, "<", "\\textless", !0);
l(O, p, A, ">", "\\textgreater", !0);
l(u, p, Zt, "⌊", "\\lfloor", !0);
l(u, p, Bt, "⌋", "\\rfloor", !0);
l(u, p, Zt, "⌈", "\\lceil", !0);
l(u, p, Bt, "⌉", "\\rceil", !0);
l(u, p, A, "\\", "\\backslash");
l(u, p, A, "∣", "|");
l(u, p, A, "∣", "\\vert");
l(O, p, A, "|", "\\textbar", !0);
l(u, p, A, "∥", "\\|");
l(u, p, A, "∥", "\\Vert");
l(O, p, A, "∥", "\\textbardbl");
l(O, p, A, "~", "\\textasciitilde");
l(O, p, A, "\\", "\\textbackslash");
l(O, p, A, "^", "\\textasciicircum");
l(u, p, x, "↑", "\\uparrow", !0);
l(u, p, x, "⇑", "\\Uparrow", !0);
l(u, p, x, "↓", "\\downarrow", !0);
l(u, p, x, "⇓", "\\Downarrow", !0);
l(u, p, x, "↕", "\\updownarrow", !0);
l(u, p, x, "⇕", "\\Updownarrow", !0);
l(u, p, vt, "∐", "\\coprod");
l(u, p, vt, "⋁", "\\bigvee");
l(u, p, vt, "⋀", "\\bigwedge");
l(u, p, vt, "⨄", "\\biguplus");
l(u, p, vt, "⋂", "\\bigcap");
l(u, p, vt, "⋃", "\\bigcup");
l(u, p, vt, "∫", "\\int");
l(u, p, vt, "∫", "\\intop");
l(u, p, vt, "∬", "\\iint");
l(u, p, vt, "∭", "\\iiint");
l(u, p, vt, "∏", "\\prod");
l(u, p, vt, "∑", "\\sum");
l(u, p, vt, "⨂", "\\bigotimes");
l(u, p, vt, "⨁", "\\bigoplus");
l(u, p, vt, "⨀", "\\bigodot");
l(u, p, vt, "∮", "\\oint");
l(u, p, vt, "∯", "\\oiint");
l(u, p, vt, "∰", "\\oiiint");
l(u, p, vt, "⨆", "\\bigsqcup");
l(u, p, vt, "∫", "\\smallint");
l(O, p, p0, "…", "\\textellipsis");
l(u, p, p0, "…", "\\mathellipsis");
l(O, p, p0, "…", "\\ldots", !0);
l(u, p, p0, "…", "\\ldots", !0);
l(u, p, p0, "⋯", "\\@cdots", !0);
l(u, p, p0, "⋱", "\\ddots", !0);
l(u, p, A, "⋮", "\\varvdots");
l(O, p, A, "⋮", "\\varvdots");
l(u, p, ot, "ˊ", "\\acute");
l(u, p, ot, "ˋ", "\\grave");
l(u, p, ot, "¨", "\\ddot");
l(u, p, ot, "~", "\\tilde");
l(u, p, ot, "ˉ", "\\bar");
l(u, p, ot, "˘", "\\breve");
l(u, p, ot, "ˇ", "\\check");
l(u, p, ot, "^", "\\hat");
l(u, p, ot, "⃗", "\\vec");
l(u, p, ot, "˙", "\\dot");
l(u, p, ot, "˚", "\\mathring");
l(u, p, ve, "", "\\@imath");
l(u, p, ve, "", "\\@jmath");
l(u, p, A, "ı", "ı");
l(u, p, A, "ȷ", "ȷ");
l(O, p, A, "ı", "\\i", !0);
l(O, p, A, "ȷ", "\\j", !0);
l(O, p, A, "ß", "\\ss", !0);
l(O, p, A, "æ", "\\ae", !0);
l(O, p, A, "œ", "\\oe", !0);
l(O, p, A, "ø", "\\o", !0);
l(O, p, A, "Æ", "\\AE", !0);
l(O, p, A, "Œ", "\\OE", !0);
l(O, p, A, "Ø", "\\O", !0);
l(O, p, ot, "ˊ", "\\'");
l(O, p, ot, "ˋ", "\\`");
l(O, p, ot, "ˆ", "\\^");
l(O, p, ot, "˜", "\\~");
l(O, p, ot, "ˉ", "\\=");
l(O, p, ot, "˘", "\\u");
l(O, p, ot, "˙", "\\.");
l(O, p, ot, "¸", "\\c");
l(O, p, ot, "˚", "\\r");
l(O, p, ot, "ˇ", "\\v");
l(O, p, ot, "¨", '\\"');
l(O, p, ot, "˝", "\\H");
l(O, p, ot, "◯", "\\textcircled");
var Dc = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
l(O, p, A, "–", "--", !0);
l(O, p, A, "–", "\\textendash");
l(O, p, A, "—", "---", !0);
l(O, p, A, "—", "\\textemdash");
l(O, p, A, "‘", "`", !0);
l(O, p, A, "‘", "\\textquoteleft");
l(O, p, A, "’", "'", !0);
l(O, p, A, "’", "\\textquoteright");
l(O, p, A, "“", "``", !0);
l(O, p, A, "“", "\\textquotedblleft");
l(O, p, A, "”", "''", !0);
l(O, p, A, "”", "\\textquotedblright");
l(u, p, A, "°", "\\degree", !0);
l(O, p, A, "°", "\\degree");
l(O, p, A, "°", "\\textdegree", !0);
l(u, p, A, "£", "\\pounds");
l(u, p, A, "£", "\\mathsterling", !0);
l(O, p, A, "£", "\\pounds");
l(O, p, A, "£", "\\textsterling", !0);
l(u, w, A, "✠", "\\maltese");
l(O, w, A, "✠", "\\maltese");
var Yo = '0123456789/@."';
for (var si = 0; si < Yo.length; si++) {
  var Jo = Yo.charAt(si);
  l(u, p, A, Jo, Jo);
}
var Qo = '0123456789!@*()-=+";:?/.,';
for (var oi = 0; oi < Qo.length; oi++) {
  var el = Qo.charAt(oi);
  l(O, p, A, el, el);
}
var Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var li = 0; li < Ia.length; li++) {
  var oa = Ia.charAt(li);
  l(u, p, ve, oa, oa), l(O, p, A, oa, oa);
}
l(u, w, A, "C", "ℂ");
l(O, w, A, "C", "ℂ");
l(u, w, A, "H", "ℍ");
l(O, w, A, "H", "ℍ");
l(u, w, A, "N", "ℕ");
l(O, w, A, "N", "ℕ");
l(u, w, A, "P", "ℙ");
l(O, w, A, "P", "ℙ");
l(u, w, A, "Q", "ℚ");
l(O, w, A, "Q", "ℚ");
l(u, w, A, "R", "ℝ");
l(O, w, A, "R", "ℝ");
l(u, w, A, "Z", "ℤ");
l(O, w, A, "Z", "ℤ");
l(u, p, ve, "h", "ℎ");
l(O, p, ve, "h", "ℎ");
var xe;
for (var It = 0; It < Ia.length; It++) {
  var dt = Ia.charAt(It);
  xe = String.fromCharCode(55349, 56320 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56372 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56424 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56580 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56684 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56736 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56788 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56840 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56944 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), It < 26 && (xe = String.fromCharCode(55349, 56632 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe), xe = String.fromCharCode(55349, 56476 + It), l(u, p, ve, dt, xe), l(O, p, A, dt, xe));
}
xe = "𝕜";
l(u, p, ve, "k", xe);
l(O, p, A, "k", xe);
for (var Tn = 0; Tn < 10; Tn++) {
  var sn = Tn.toString();
  xe = String.fromCharCode(55349, 57294 + Tn), l(u, p, ve, sn, xe), l(O, p, A, sn, xe), xe = String.fromCharCode(55349, 57314 + Tn), l(u, p, ve, sn, xe), l(O, p, A, sn, xe), xe = String.fromCharCode(55349, 57324 + Tn), l(u, p, ve, sn, xe), l(O, p, A, sn, xe), xe = String.fromCharCode(55349, 57334 + Tn), l(u, p, ve, sn, xe), l(O, p, A, sn, xe);
}
var Di = "ÐÞþ";
for (var ci = 0; ci < Di.length; ci++) {
  var la = Di.charAt(ci);
  l(u, p, ve, la, la), l(O, p, A, la, la);
}
var Li = {
  mathClass: "mathbf",
  textClass: "textbf",
  font: "Main-Bold"
}, tl = {
  mathClass: "mathnormal",
  textClass: "textit",
  font: "Math-Italic"
}, rl = {
  mathClass: "boldsymbol",
  textClass: "boldsymbol",
  font: "Main-BoldItalic"
}, Rh = {
  mathClass: "mathscr",
  textClass: "textscr",
  font: "Script-Regular"
}, En = {
  mathClass: "",
  textClass: "",
  font: ""
}, nl = {
  mathClass: "mathfrak",
  textClass: "textfrak",
  font: "Fraktur-Regular"
}, al = {
  mathClass: "mathbb",
  textClass: "textbb",
  font: "AMS-Regular"
}, il = {
  mathClass: "mathboldfrak",
  textClass: "textboldfrak",
  font: "Fraktur-Regular"
}, Fi = {
  mathClass: "mathsf",
  textClass: "textsf",
  font: "SansSerif-Regular"
}, Pi = {
  mathClass: "mathboldsf",
  textClass: "textboldsf",
  font: "SansSerif-Bold"
}, sl = {
  mathClass: "mathitsf",
  textClass: "textitsf",
  font: "SansSerif-Italic"
}, Hi = {
  mathClass: "mathtt",
  textClass: "texttt",
  font: "Typewriter-Regular"
}, ol = [
  Li,
  Li,
  // A-Z, a-z
  tl,
  tl,
  // A-Z, a-z
  rl,
  rl,
  // A-Z, a-z
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  Rh,
  En,
  // A-Z script, a-z — no font
  En,
  En,
  // A-Z bold script, a-z bold script — no font
  nl,
  nl,
  // A-Z, a-z
  al,
  al,
  // A-Z double-struck, k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  il,
  il,
  // A-Z, a-z
  Fi,
  Fi,
  // A-Z, a-z
  Pi,
  Pi,
  // A-Z, a-z
  sl,
  sl,
  // A-Z, a-z
  En,
  En,
  // A-Z bold italic sans, a-z bold italic sans - no font
  Hi,
  Hi
  // A-Z, a-z
], Oh = [
  Li,
  // 0-9
  En,
  // 0-9 double-struck. No KaTeX font.
  Fi,
  // 0-9
  Pi,
  // 0-9
  Hi
  // 0-9
], Bh = (t) => {
  var e = t.charCodeAt(0), r = t.charCodeAt(1), n = (e - 55296) * 1024 + (r - 56320) + 65536;
  if (119808 <= n && n < 120484) {
    var a = Math.floor((n - 119808) / 26);
    return ol[a];
  } else if (120782 <= n && n <= 120831) {
    var i = Math.floor((n - 120782) / 10);
    return Oh[i];
  } else {
    if (n === 120485 || n === 120486)
      return ol[0];
    if (120486 < n && n < 120782)
      return En;
    throw new q("Unsupported character: " + t);
  }
}, Pa = function(e, r, n) {
  if (st[n][e]) {
    var a = st[n][e].replace;
    a && (e = a);
  }
  return {
    value: e,
    metrics: ks(e, r, n)
  };
}, Rt = function(e, r, n, a, i) {
  var s = Pa(e, r, n), o = s.metrics;
  e = s.value;
  var c;
  if (o) {
    var d = o.italic;
    (n === "text" || a && a.font === "mathit") && (d = 0), c = new Gt(e, o.height, o.depth, d, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + r + "' and mode '" + n + "'")), c = new Gt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    c.maxFontSize = a.sizeMultiplier, a.style.isTight() && c.classes.push("mtight");
    var h = a.getColor();
    h && (c.style.color = h);
  }
  return c;
}, Ss = function(e, r, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && Pa(e, "Main-Bold", r).metrics ? Rt(e, "Main-Bold", r, n, a.concat(["mathbf"])) : e === "\\" || st[r][e].font === "main" ? Rt(e, "Main-Regular", r, n, a) : Rt(e, "AMS-Regular", r, n, a.concat(["amsrm"]));
}, Dh = function(e, r, n) {
  return n !== "textord" && Pa(e, "Math-BoldItalic", r).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, Ha = function(e, r) {
  var n = e.type === "mathord" ? "mathord" : "textord", a = e.mode, i = e.text, s = ["mord"], {
    font: o,
    fontFamily: c,
    fontWeight: d,
    fontShape: h
  } = r, f = a === "math" || a === "text" && !!o, b = f ? o : c, v = "", k = "";
  if (i.charCodeAt(0) === 55349) {
    var $ = Bh(i);
    v = $.font, k = $[a + "Class"];
  }
  if (v)
    return Rt(i, v, a, r, s.concat(k));
  if (b) {
    var M, I;
    if (b === "boldsymbol") {
      var y = Dh(i, a, n);
      M = y.fontName, I = [y.fontClass];
    } else f ? (M = qi[o].fontName, I = [o]) : (M = ca(c, d, h), I = [c, d, h]);
    if (Pa(i, M, a).metrics)
      return Rt(i, M, a, r, s.concat(I));
    if (Dc.hasOwnProperty(i) && M.slice(0, 10) === "Typewriter") {
      for (var T = [], B = 0; B < i.length; B++)
        T.push(Rt(i[B], M, a, r, s.concat(I)));
      return Jr(T);
    }
  }
  if (n === "mathord")
    return Rt(i, "Math-Italic", a, r, s.concat(["mathnormal"]));
  if (n === "textord") {
    var P = st[a][i] && st[a][i].font;
    if (P === "ams") {
      var H = ca("amsrm", d, h);
      return Rt(i, H, a, r, s.concat("amsrm", d, h));
    } else if (P === "main" || !P) {
      var Q = ca("textrm", d, h);
      return Rt(i, Q, a, r, s.concat(d, h));
    } else {
      var W = ca(P, d, h);
      return Rt(i, W, a, r, s.concat(W, d, h));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Lh = (t, e) => {
  if (pn(t.classes) !== pn(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize || t.italic !== 0 && t.hasClass("mathnormal"))
    return !1;
  if (t.classes.length === 1) {
    var r = t.classes[0];
    if (r === "mbin" || r === "mord")
      return !1;
  }
  for (var n of Object.keys(t.style))
    if (t.style[n] !== e.style[n])
      return !1;
  for (var a of Object.keys(e.style))
    if (t.style[a] !== e.style[a])
      return !1;
  return !0;
}, Lc = (t) => {
  for (var e = 0; e < t.length - 1; e++) {
    var r = t[e], n = t[e + 1];
    r instanceof Gt && n instanceof Gt && Lh(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, t.splice(e + 1, 1), e--);
  }
  return t;
}, _s = function(e) {
  for (var r = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > r && (r = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = r, e.depth = n, e.maxFontSize = a;
}, F = function(e, r, n, a) {
  var i = new f0(e, r, n, a);
  return _s(i), i;
}, gn = (t, e, r, n) => new f0(t, e, r, n), l0 = function(e, r, n) {
  var a = F([e], [], r);
  return a.height = Math.max(n || r.fontMetrics().defaultRuleThickness, r.minRuleThickness), a.style.borderBottomWidth = G(a.height), a.maxFontSize = 1, a;
}, Fh = function(e, r, n, a) {
  var i = new Fa(e, r, n, a);
  return _s(i), i;
}, Jr = function(e) {
  var r = new h0(e);
  return _s(r), r;
}, c0 = function(e, r) {
  return e instanceof h0 ? F([], [e], r) : e;
}, Ph = function(e) {
  if (e.positionType === "individualShift") {
    for (var r = e.children, n = [r[0]], a = -r[0].shift - r[0].elem.depth, i = a, s = 1; s < r.length; s++) {
      var o = -r[s].shift - i - r[s].elem.depth, c = o - (r[s - 1].elem.height + r[s - 1].elem.depth);
      i = i + o, n.push({
        type: "kern",
        size: c
      }), n.push(r[s]);
    }
    return {
      children: n,
      depth: a
    };
  }
  var d;
  if (e.positionType === "top") {
    for (var h = e.positionData, f = 0; f < e.children.length; f++) {
      var b = e.children[f];
      h -= b.type === "kern" ? b.size : b.elem.height + b.elem.depth;
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
}, Ue = function(e, r) {
  for (var {
    children: n,
    depth: a
  } = Ph(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var c = o.elem;
      i = Math.max(i, c.maxFontSize, c.height);
    }
  }
  i += 2;
  var d = F(["pstrut"], []);
  d.style.height = G(i);
  for (var h = [], f = a, b = a, v = a, k = 0; k < n.length; k++) {
    var $ = n[k];
    if ($.type === "kern")
      v += $.size;
    else {
      var M = $.elem, I = $.wrapperClasses || [], y = $.wrapperStyle || {}, T = F(I, [d, M], void 0, y);
      T.style.top = G(-i - v - M.depth), $.marginLeft && (T.style.marginLeft = $.marginLeft), $.marginRight && (T.style.marginRight = $.marginRight), h.push(T), v += M.height + M.depth;
    }
    f = Math.min(f, v), b = Math.max(b, v);
  }
  var B = F(["vlist"], h);
  B.style.height = G(b);
  var P;
  if (f < 0) {
    var H = F([], []), Q = F(["vlist"], [H]);
    Q.style.height = G(-f);
    var W = F(["vlist-s"], [new Gt("​")]);
    P = [F(["vlist-r"], [B, W]), F(["vlist-r"], [Q])];
  } else
    P = [F(["vlist-r"], [B])];
  var j = F(["vlist-t"], P);
  return P.length === 2 && j.classes.push("vlist-t2"), j.height = b, j.depth = -f, j;
}, Fc = (t, e) => {
  var r = F(["mspace"], [], e), n = ct(t, e);
  return r.style.marginRight = G(n), r;
}, ca = (t, e, r) => {
  var n, a;
  switch (t) {
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
      n = t;
  }
  return e === "textbf" && r === "textit" ? a = "BoldItalic" : e === "textbf" ? a = "Bold" : r === "textit" ? a = "Italic" : a = "Regular", n + "-" + a;
}, qi = {
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
}, Pc = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Hc = function(e, r) {
  var [n, a, i] = Pc[e], s = new mn(n), o = new Kr([s], {
    width: G(a),
    height: G(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), c = gn(["overlay"], [o], r);
  return c.height = i, c.style.height = G(i), c.style.width = G(a), c;
}, lt = {
  number: 3,
  unit: "mu"
}, $n = {
  number: 4,
  unit: "mu"
}, Hr = {
  number: 5,
  unit: "mu"
}, Hh = {
  mord: {
    mop: lt,
    mbin: $n,
    mrel: Hr,
    minner: lt
  },
  mop: {
    mord: lt,
    mop: lt,
    mrel: Hr,
    minner: lt
  },
  mbin: {
    mord: $n,
    mop: $n,
    mopen: $n,
    minner: $n
  },
  mrel: {
    mord: Hr,
    mop: Hr,
    mopen: Hr,
    minner: Hr
  },
  mopen: {},
  mclose: {
    mop: lt,
    mbin: $n,
    mrel: Hr,
    minner: lt
  },
  mpunct: {
    mord: lt,
    mop: lt,
    mrel: Hr,
    mopen: lt,
    mclose: lt,
    mpunct: lt,
    minner: lt
  },
  minner: {
    mord: lt,
    mop: lt,
    mbin: $n,
    mrel: Hr,
    mopen: lt,
    mpunct: lt,
    minner: lt
  }
}, qh = {
  mord: {
    mop: lt
  },
  mop: {
    mord: lt,
    mop: lt
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: lt
  },
  mpunct: {},
  minner: {
    mop: lt
  }
}, qc = {}, O0 = {}, B0 = {};
function re(t) {
  for (var {
    type: e,
    names: r,
    htmlBuilder: n,
    mathmlBuilder: a
  } = t, i = 0; i < r.length; ++i)
    qc[r[i]] = t;
  e && (n && (O0[e] = n), a && (B0[e] = a));
}
function Dn(t) {
  var {
    type: e,
    htmlBuilder: r,
    mathmlBuilder: n
  } = t;
  r && (O0[e] = r), n && (B0[e] = n);
}
var za = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, gt = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Uh = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), Vh = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), jh = {
  display: Se.DISPLAY,
  text: Se.TEXT,
  script: Se.SCRIPT,
  scriptscript: Se.SCRIPTSCRIPT
}, Gh = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, kt = function(e, r, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < e.length; s++) {
    var o = Ve(e[s], r);
    if (o instanceof h0) {
      var c = o.children;
      i.push(...c);
    } else
      i.push(o);
  }
  if (Lc(i), !n)
    return i;
  var d = r;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = r.havingSize(h.size) : h.type === "styling" && (d = r.havingStyle(jh[h.style]));
  }
  var f = F([a[0] || "leftmost"], [], r), b = F([a[1] || "rightmost"], [], r), v = n === "root";
  return Ui(i, (k, $) => {
    var M = $.classes[0], I = k.classes[0];
    M === "mbin" && Vh.has(I) ? $.classes[0] = "mord" : I === "mbin" && Uh.has(M) && (k.classes[0] = "mord");
  }, {
    node: f
  }, b, v), Ui(i, (k, $) => {
    var M, I, y = ji($), T = ji(k), B = y && T ? k.hasClass("mtight") ? (M = qh[y]) == null ? void 0 : M[T] : (I = Hh[y]) == null ? void 0 : I[T] : null;
    if (B)
      return Fc(B, d);
  }, {
    node: f
  }, b, v), i;
}, Ui = function(e, r, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], c = Uc(o);
    if (c) {
      Ui(c.children, r, n, null, i);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = r(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), s++));
    }
    d ? n.node = o : i && o.hasClass("newline") && (n.node = F(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((f) => (b) => {
      e.splice(f + 1, 0, b), s++;
    })(s);
  }
  a && e.pop();
}, Uc = function(e) {
  return e instanceof h0 || e instanceof Fa || e instanceof f0 && e.hasClass("enclosing") ? e : null;
}, Vi = function(e, r) {
  var n = Uc(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (r === "right")
        return Vi(a[a.length - 1], "right");
      if (r === "left")
        return Vi(a[0], "left");
    }
  }
  return e;
}, ji = function(e, r) {
  if (!e)
    return null;
  r && (e = Vi(e, r));
  var n = e.classes[0];
  return Gh[n] || null;
}, D0 = function(e, r) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return F(r.concat(n));
}, Ve = function(e, r, n) {
  if (!e)
    return F();
  if (O0[e.type]) {
    var a = O0[e.type](e, r);
    if (n && r.size !== n.size) {
      a = F(r.sizingClasses(n), [a], r);
      var i = r.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new q("Got group of unknown type: '" + e.type + "'");
};
function ua(t, e) {
  var r = F(["base"], t, e), n = F(["strut"]);
  return n.style.height = G(r.height + r.depth), r.depth && (n.style.verticalAlign = G(-r.depth)), r.children.unshift(n), r;
}
function Gi(t, e) {
  var r = null;
  t.length === 1 && t[0].type === "tag" && (r = t[0].tag, t = t[0].body);
  var n = kt(t, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var c = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (c = !0);
      c || (i.push(ua(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(ua(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(ua(s, e));
  var d;
  r ? (d = ua(kt(r, e, !0), e), d.classes = ["tag"], i.push(d)) : a && i.push(a);
  var h = F(["katex-html"], i);
  if (h.setAttribute("aria-hidden", "true"), d) {
    var f = d.children[0];
    f.style.height = G(h.height + h.depth), h.depth && (f.style.verticalAlign = G(-h.depth));
  }
  return h;
}
function Vc(t) {
  return new h0(t);
}
class U {
  constructor(e, r, n) {
    this.type = void 0, this.attributes = void 0, this.children = void 0, this.classes = void 0, this.type = e, this.attributes = {}, this.children = r || [], this.classes = n || [];
  }
  /**
   * Sets an attribute on a MathML node. MathML depends on attributes to convey a
   * semantic content, so this is used heavily.
   */
  setAttribute(e, r) {
    this.attributes[e] = r;
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
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
    this.classes.length > 0 && (e.className = pn(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof bt && this.children[n + 1] instanceof bt) {
        for (var a = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof bt; )
          a += this.children[++n].toText();
        e.appendChild(new bt(a).toNode());
      } else
        e.appendChild(this.children[n].toNode());
    return e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    var e = "<" + this.type;
    for (var r in this.attributes)
      Object.prototype.hasOwnProperty.call(this.attributes, r) && (e += " " + r + '="', e += $t(this.attributes[r]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + $t(pn(this.classes)) + '"'), e += ">";
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
class bt {
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
    return $t(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class jc {
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
    return e.setAttribute("width", G(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + G(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var Wh = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), Zh = /* @__PURE__ */ new Set(["mrow", "mtable"]), er = function(e, r, n) {
  return st[r][e] && st[r][e].replace && e.charCodeAt(0) !== 55349 && !(Dc.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = st[r][e].replace), new bt(e);
}, Cs = function(e) {
  return e.length === 1 ? e[0] : new U("mrow", e);
}, Kh = {
  mathit: "italic",
  boldsymbol: (t) => t.type === "textord" ? "bold" : "bold-italic",
  mathbf: "bold",
  mathbb: "double-struck",
  mathsfit: "sans-serif-italic",
  mathfrak: "fraktur",
  mathscr: "script",
  mathcal: "script",
  mathsf: "sans-serif",
  mathtt: "monospace"
}, As = (t, e) => {
  if (t.mode === "text") {
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
  var r = e.font;
  if (!r || r === "mathnormal")
    return null;
  var n = t.mode, a = Kh[r];
  if (a)
    return typeof a == "function" ? a(t) : a;
  var i = t.text;
  if (Wh.has(i))
    return null;
  if (st[n][i]) {
    var s = st[n][i].replace;
    s && (i = s);
  }
  var o = qi[r].fontName;
  return ks(i, o, n) ? qi[r].variant : null;
};
function ui(t) {
  if (!t)
    return !1;
  if (t.type === "mi" && t.children.length === 1) {
    var e = t.children[0];
    return e instanceof bt && e.text === ".";
  } else if (t.type === "mo" && t.children.length === 1 && t.getAttribute("separator") === "true" && t.getAttribute("lspace") === "0em" && t.getAttribute("rspace") === "0em") {
    var r = t.children[0];
    return r instanceof bt && r.text === ",";
  } else
    return !1;
}
var Kt = function(e, r, n) {
  if (e.length === 1) {
    var a = et(e[0], r);
    return n && a instanceof U && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, o = 0; o < e.length; o++) {
    var c = et(e[o], r);
    if (c instanceof U && s instanceof U) {
      if (c.type === "mtext" && s.type === "mtext" && c.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && s.type === "mn") {
        s.children.push(...c.children);
        continue;
      } else if (ui(c) && s.type === "mn") {
        s.children.push(...c.children);
        continue;
      } else if (c.type === "mn" && ui(s))
        c.children = [...s.children, ...c.children], i.pop();
      else if ((c.type === "msup" || c.type === "msub") && c.children.length >= 1 && (s.type === "mn" || ui(s))) {
        var d = c.children[0];
        d instanceof U && d.type === "mn" && (d.children = [...s.children, ...d.children], i.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var h = s.children[0];
        if (h instanceof bt && h.text === "̸" && (c.type === "mo" || c.type === "mi" || c.type === "mn")) {
          var f = c.children[0];
          f instanceof bt && f.text.length > 0 && (f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1), i.pop());
        }
      }
    }
    i.push(c), s = c;
  }
  return i;
}, bn = function(e, r, n) {
  return Cs(Kt(e, r, n));
}, et = function(e, r) {
  if (!e)
    return new U("mrow");
  if (B0[e.type])
    return B0[e.type](e, r);
  throw new q("Got group of unknown type: '" + e.type + "'");
};
function ll(t, e, r, n, a) {
  var i = Kt(t, r), s;
  i.length === 1 && i[0] instanceof U && Zh.has(i[0].type) ? s = i[0] : s = new U("mrow", i);
  var o = new U("annotation", [new bt(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var c = new U("semantics", [s, o]), d = new U("math", [c]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var h = a ? "katex" : "katex-mathml";
  return F([h], [d]);
}
var Xh = [
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
], cl = [
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
], ul = function(e, r) {
  return r.size < 2 ? e : Xh[e - 1][r.size - 1];
};
class qr {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || qr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = cl[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
  }
  /**
   * Returns a new options object with the same properties as "this".  Properties
   * from "extension" will be copied to the new options object.
   */
  extend(e) {
    var r = {
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
    return Object.assign(r, e), new qr(r);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: ul(this.textSize, e)
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
      sizeMultiplier: cl[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var r = ul(qr.BASESIZE, e);
    return this.size === r && this.textSize === qr.BASESIZE && this.style === e ? this : this.extend({
      style: e,
      size: r
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
    return this.size !== qr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + qr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Nh(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
qr.BASESIZE = 6;
var Gc = function(e) {
  return new qr({
    style: e.displayMode ? Se.DISPLAY : Se.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Wc = function(e, r) {
  if (r.displayMode) {
    var n = ["katex-display"];
    r.leqno && n.push("leqno"), r.fleqn && n.push("fleqn"), e = F(n, [e]);
  }
  return e;
}, Yh = function(e, r, n) {
  var a = Gc(n), i;
  if (n.output === "mathml")
    return ll(e, r, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = Gi(e, a);
    i = F(["katex"], [s]);
  } else {
    var o = ll(e, r, a, n.displayMode, !1), c = Gi(e, a);
    i = F(["katex"], [o, c]);
  }
  return Wc(i, n);
}, Jh = function(e, r, n) {
  var a = Gc(n), i = Gi(e, a), s = F(["katex"], [i]);
  return Wc(s, n);
}, Qh = {
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
}, qa = function(e) {
  var r = new U("mo", [new bt(Qh[e.replace(/^\\/, "")])]);
  return r.setAttribute("stretchy", "true"), r;
}, ef = {
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
}, tf = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), Ua = function(e, r) {
  function n() {
    var o = 4e5, c = e.label.slice(1);
    if (tf.has(c) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, h, f, b;
      if (d > 5)
        c === "widehat" || c === "widecheck" ? (h = 420, o = 2364, b = 0.42, f = c + "4") : (h = 312, o = 2340, b = 0.34, f = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][d];
        c === "widehat" || c === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], b = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], f = c + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], b = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], f = "tilde" + v);
      }
      var k = new mn(f), $ = new Kr([k], {
        width: "100%",
        height: G(b),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: gn([], [$], r),
        minWidth: 0,
        height: b
      };
    } else {
      var M = [], I = ef[c];
      if (!I)
        throw new Error('No SVG data for "' + c + '".');
      var [y, T, B] = I, P = B / 1e3, H = y.length, Q, W;
      if (H === 1) {
        if (I.length !== 4)
          throw new Error('Expected 4-tuple for single-path SVG data "' + c + '".');
        Q = ["hide-tail"], W = [I[3]];
      } else if (H === 2)
        Q = ["halfarrow-left", "halfarrow-right"], W = ["xMinYMin", "xMaxYMin"];
      else if (H === 3)
        Q = ["brace-left", "brace-center", "brace-right"], W = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + H + " children.");
      for (var j = 0; j < H; j++) {
        var pe = new mn(y[j]), Ce = new Kr([pe], {
          width: "400em",
          height: G(P),
          viewBox: "0 0 " + o + " " + B,
          preserveAspectRatio: W[j] + " slice"
        }), Ae = gn([Q[j]], [Ce], r);
        if (H === 1)
          return {
            span: Ae,
            minWidth: T,
            height: P
          };
        Ae.style.height = G(P), M.push(Ae);
      }
      return {
        span: F(["stretchy"], M, r),
        minWidth: T,
        height: P
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = G(s), i > 0 && (a.style.minWidth = G(i)), a;
}, rf = function(e, r, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(r)) {
    if (s = F(["stretchy", r], [], i), r === "fbox") {
      var c = i.color && i.getColor();
      c && (s.style.borderColor = c);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(r) && d.push(new Bi({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(r) && d.push(new Bi({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new Kr(d, {
      width: "100%",
      height: G(o)
    });
    s = gn([], [h], i);
  }
  return s.height = o, s.style.height = G(o), s;
}, nf = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, af = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
function sf(t) {
  return t in nf;
}
function $e(t, e) {
  if (!t || t.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
  return t;
}
function Va(t) {
  var e = ja(t);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
  return e;
}
function ja(t) {
  return t && (t.type === "atom" || af.hasOwnProperty(t.type)) ? t : null;
}
var Zc = (t) => {
  if (t instanceof Gt)
    return t;
  if (Ih(t) && t.children.length === 1)
    return Zc(t.children[0]);
}, Kc = (t, e) => {
  var r, n, a;
  t && t.type === "supsub" ? (n = $e(t.base, "accent"), r = n.base, t.base = r, a = Eh(Ve(t, e)), t.base = n) : (n = $e(t, "accent"), r = n.base);
  var i = Ve(r, e.havingCrampedStyle()), s = n.isShifty && Xr(r), o = 0;
  if (s) {
    var c, d;
    o = (c = (d = Zc(i)) == null ? void 0 : d.skew) != null ? c : 0;
  }
  var h = n.label === "\\c", f = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), b;
  if (n.isStretchy)
    b = Ua(n, e), b = Ue({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: b,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + G(2 * o) + ")",
          marginLeft: G(2 * o)
        } : void 0
      }]
    });
  else {
    var v, k;
    n.label === "\\vec" ? (v = Hc("vec", e), k = Pc.vec[1]) : (v = Ha({
      type: "textord",
      mode: n.mode,
      text: n.label
    }, e), v = Mh(v), v.italic = 0, k = v.width, h && (f += v.depth)), b = F(["accent-body"], [v]);
    var $ = n.label === "\\textcircled";
    $ && (b.classes.push("accent-full"), f = i.height);
    var M = o;
    $ || (M -= k / 2), b.style.left = G(M), n.label === "\\textcircled" && (b.style.top = ".2em"), b = Ue({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -f
      }, {
        type: "elem",
        elem: b
      }]
    });
  }
  var I = F(["mord", "accent"], [b], e);
  return a ? (a.children[0] = I, a.height = Math.max(I.height, a.height), a.classes[0] = "mord", a) : I;
}, of = (t, e) => {
  var r = t.isStretchy ? qa(t.label) : new U("mo", [er(t.label, t.mode)]), n = new U("mover", [et(t.base, e), r]);
  return n.setAttribute("accent", "true"), n;
}, lf = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((t) => "\\" + t).join("|"));
re({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  numArgs: 1,
  handler: (t, e) => {
    var r = za(e[0]), n = !lf.test(t.funcName), a = !n || t.funcName === "\\widehat" || t.funcName === "\\widetilde" || t.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: t.parser.mode,
      label: t.funcName,
      isStretchy: n,
      isShifty: a,
      base: r
    };
  },
  htmlBuilder: Kc,
  mathmlBuilder: of
});
re({
  type: "accent",
  names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\c", "\\r", "\\H", "\\v", "\\textcircled"],
  numArgs: 1,
  allowedInText: !0,
  allowedInMath: !0,
  // unless in strict mode
  argTypes: ["primitive"],
  handler: (t, e) => {
    var r = e[0], n = t.parser.mode;
    return n === "math" && (t.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t.funcName + " works only in text mode"), n = "text"), {
      type: "accent",
      mode: n,
      label: t.funcName,
      isStretchy: !1,
      isShifty: !0,
      base: r
    };
  }
});
re({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  numArgs: 1,
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    return {
      type: "accentUnder",
      mode: r.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (t, e) => {
    var r = Ve(t.base, e), n = Ua(t, e), a = t.label === "\\utilde" ? 0.12 : 0, i = Ue({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: r
      }]
    });
    return F(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (t, e) => {
    var r = qa(t.label), n = new U("munder", [et(t.base, e), r]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var da = (t) => {
  var e = new U("mpadded", t ? [t] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
re({
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
  handler(t, e, r) {
    var {
      parser: n,
      funcName: a
    } = t;
    return {
      type: "xArrow",
      mode: n.mode,
      label: a,
      body: e[0],
      below: r[0]
    };
  },
  htmlBuilder(t, e) {
    var r = e.style, n = e.havingStyle(r.sup()), a = c0(Ve(t.body, n, e), e), i = t.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var s;
    t.below && (n = e.havingStyle(r.sub()), s = c0(Ve(t.below, n, e), e), s.classes.push(i + "-arrow-pad"));
    var o = Ua(t, e), c = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || t.label === "\\xleftequilibrium") && (d -= a.depth);
    var h;
    if (s) {
      var f = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      h = Ue({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: c,
          wrapperClasses: ["svg-align"]
        }, {
          type: "elem",
          elem: s,
          shift: f
        }]
      });
    } else
      h = Ue({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: c,
          wrapperClasses: ["svg-align"]
        }]
      });
    return F(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(t, e) {
    var r = qa(t.label);
    r.setAttribute("minsize", t.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (t.body) {
      var a = da(et(t.body, e));
      if (t.below) {
        var i = da(et(t.below, e));
        n = new U("munderover", [r, i, a]);
      } else
        n = new U("mover", [r, a]);
    } else if (t.below) {
      var s = da(et(t.below, e));
      n = new U("munder", [r, s]);
    } else
      n = da(), n = new U("mover", [r, n]);
    return n;
  }
});
function cf(t, e) {
  var r = kt(t.body, e, !0);
  return F([t.mclass], r, e);
}
function uf(t, e) {
  var r, n = Kt(t.body, e);
  return t.mclass === "minner" ? r = new U("mpadded", n) : t.mclass === "mord" ? t.isCharacterBox ? (r = n[0], r.type = "mi") : r = new U("mi", n) : (t.isCharacterBox ? (r = n[0], r.type = "mo") : r = new U("mo", n), t.mclass === "mbin" ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : t.mclass === "mpunct" ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : (t.mclass === "mopen" || t.mclass === "mclose") && (r.attributes.lspace = "0em", r.attributes.rspace = "0em")), r;
}
re({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  numArgs: 1,
  primitive: !0,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    return {
      type: "mclass",
      mode: r.mode,
      mclass: "m" + n.slice(5),
      body: gt(a),
      isCharacterBox: Xr(a)
    };
  },
  htmlBuilder: cf,
  mathmlBuilder: uf
});
var Ga = (t) => {
  var e = t.type === "ordgroup" && t.body.length ? t.body[0] : t;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
re({
  type: "mclass",
  names: ["\\@binrel"],
  numArgs: 2,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "mclass",
      mode: r.mode,
      mclass: Ga(e[0]),
      body: gt(e[1]),
      isCharacterBox: Xr(e[1])
    };
  }
});
re({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  numArgs: 2,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, a = e[1], i = e[0], s;
    n !== "\\stackrel" ? s = Ga(a) : s = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: gt(a)
    }, c = n === "\\underset" ? {
      type: "supsub",
      mode: i.mode,
      base: o,
      sub: i
    } : {
      type: "supsub",
      mode: i.mode,
      base: o,
      sup: i
    };
    return {
      type: "mclass",
      mode: r.mode,
      mclass: s,
      body: [c],
      isCharacterBox: Xr(c)
    };
  }
});
re({
  type: "pmb",
  names: ["\\pmb"],
  numArgs: 1,
  allowedInText: !0,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "pmb",
      mode: r.mode,
      mclass: Ga(e[0]),
      body: gt(e[0])
    };
  },
  htmlBuilder(t, e) {
    var r = kt(t.body, e, !0), n = F([t.mclass], r, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(t, e) {
    var r = Kt(t.body, e), n = new U("mstyle", r);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var df = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, dl = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display",
  resetFont: !0
}), hl = (t) => t.type === "textord" && t.text === "@", hf = (t, e) => (t.type === "mathord" || t.type === "atom") && t.text === e;
function ff(t, e, r) {
  var n = df[t];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return r.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = r.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, s = r.callFunction("\\Big", [i], []), o = r.callFunction("\\\\cdright", [e[1]], []), c = {
        type: "ordgroup",
        mode: "math",
        body: [a, s, o]
      };
      return r.callFunction("\\\\cdparent", [c], []);
    }
    case "\\\\cdlongequal":
      return r.callFunction("\\\\cdlongequal", [], []);
    case "\\Vert": {
      var d = {
        type: "textord",
        text: "\\Vert",
        mode: "math"
      };
      return r.callFunction("\\Big", [d], []);
    }
    default:
      return {
        type: "textord",
        text: " ",
        mode: "math"
      };
  }
}
function pf(t) {
  var e = [];
  for (t.gullet.beginGroup(), t.gullet.macros.set("\\cr", "\\\\\\relax"), t.gullet.beginGroup(); ; ) {
    e.push(t.parseExpression(!1, "\\\\")), t.gullet.endGroup(), t.gullet.beginGroup();
    var r = t.fetch().text;
    if (r === "&" || r === "\\\\")
      t.consume();
    else if (r === "\\end") {
      e[e.length - 1].length === 0 && e.pop();
      break;
    } else
      throw new q("Expected \\\\ or \\cr or \\end", t.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var s = e[i], o = dl(), c = 0; c < s.length; c++)
      if (!hl(s[c]))
        o.body.push(s[c]);
      else {
        n.push(o), c += 1;
        var d = Va(s[c]).text, h = new Array(2);
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
            for (var b = !0, v = c + 1; v < s.length; v++) {
              if (hf(s[v], d)) {
                b = !1, c = v;
                break;
              }
              if (hl(s[v]))
                throw new q("Missing a " + d + " character to complete a CD arrow.", s[v]);
              h[f].body.push(s[v]);
            }
            if (b)
              throw new q("Missing a " + d + " character to complete a CD arrow.", s[c]);
          }
        else
          throw new q('Expected one of "<>AV=|." after @', s[c]);
        var k = ff(d, h, t), $ = {
          type: "styling",
          body: [k],
          mode: "math",
          style: "display",
          // CD is always displaystyle.
          resetFont: !0
        };
        n.push($), o = dl();
      }
    i % 2 === 0 ? n.push(o) : n.shift(), n = [], a.push(n);
  }
  t.gullet.endGroup(), t.gullet.endGroup();
  var M = new Array(a[0].length).fill({
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
    body: a,
    arraystretch: 1,
    addJot: !0,
    rowGaps: [null],
    cols: M,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
re({
  type: "cdlabel",
  names: ["\\\\cdleft", "\\\\cdright"],
  numArgs: 1,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t;
    return {
      type: "cdlabel",
      mode: r.mode,
      side: n.slice(4),
      label: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = e.havingStyle(e.style.sup()), n = c0(Ve(t.label, r, e), e);
    return n.classes.push("cd-label-" + t.side), n.style.bottom = G(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(t, e) {
    var r = new U("mrow", [et(t.label, e)]);
    return r = new U("mpadded", [r]), r.setAttribute("width", "0"), t.side === "left" && r.setAttribute("lspace", "-1width"), r.setAttribute("voffset", "0.7em"), r = new U("mstyle", [r]), r.setAttribute("displaystyle", "false"), r.setAttribute("scriptlevel", "1"), r;
  }
});
re({
  type: "cdlabelparent",
  names: ["\\\\cdparent"],
  numArgs: 1,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "cdlabelparent",
      mode: r.mode,
      fragment: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = c0(Ve(t.fragment, e), e);
    return r.classes.push("cd-vert-arrow"), r;
  },
  mathmlBuilder(t, e) {
    return new U("mrow", [et(t.fragment, e)]);
  }
});
re({
  type: "textord",
  names: ["\\@char"],
  numArgs: 1,
  allowedInText: !0,
  handler(t, e) {
    for (var {
      parser: r
    } = t, n = $e(e[0], "ordgroup"), a = n.body, i = "", s = 0; s < a.length; s++) {
      var o = $e(a[s], "textord");
      i += o.text;
    }
    var c = parseInt(i), d;
    if (isNaN(c))
      throw new q("\\@char has non-numeric argument " + i);
    if (c < 0 || c >= 1114111)
      throw new q("\\@char with invalid code point " + i);
    return c <= 65535 ? d = String.fromCharCode(c) : (c -= 65536, d = String.fromCharCode((c >> 10) + 55296, (c & 1023) + 56320)), {
      type: "textord",
      mode: r.mode,
      text: d
    };
  }
});
var mf = (t, e) => {
  var r = kt(t.body, e.withColor(t.color), !1);
  return Jr(r);
}, gf = (t, e) => {
  var r = Kt(t.body, e.withColor(t.color)), n = new U("mstyle", r);
  return n.setAttribute("mathcolor", t.color), n;
};
re({
  type: "color",
  names: ["\\textcolor"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "original"],
  handler(t, e) {
    var {
      parser: r
    } = t, n = $e(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: r.mode,
      color: n,
      body: gt(a)
    };
  },
  htmlBuilder: mf,
  mathmlBuilder: gf
});
re({
  type: "color",
  names: ["\\color"],
  numArgs: 1,
  allowedInText: !0,
  argTypes: ["color"],
  handler(t, e) {
    var {
      parser: r,
      breakOnTokenText: n
    } = t, a = $e(e[0], "color-token").color;
    r.gullet.macros.set("\\current@color", a);
    var i = r.parseExpression(!0, n);
    return {
      type: "color",
      mode: r.mode,
      color: a,
      body: i
    };
  }
});
re({
  type: "cr",
  names: ["\\\\"],
  numArgs: 0,
  numOptionalArgs: 0,
  allowedInText: !0,
  handler(t, e, r) {
    var {
      parser: n
    } = t, a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && $e(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(t, e) {
    var r = F(["mspace"], [], e);
    return t.newLine && (r.classes.push("newline"), t.size && (r.style.marginTop = G(ct(t.size, e)))), r;
  },
  mathmlBuilder(t, e) {
    var r = new U("mspace");
    return t.newLine && (r.setAttribute("linebreak", "newline"), t.size && r.setAttribute("height", G(ct(t.size, e)))), r;
  }
});
var Wi = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Xc = (t) => {
  var e = t.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new q("Expected a control sequence", t);
  return e;
}, bf = (t) => {
  var e = t.gullet.popToken();
  return e.text === "=" && (e = t.gullet.popToken(), e.text === " " && (e = t.gullet.popToken())), e;
}, Yc = (t, e, r, n) => {
  var a = t.gullet.macros.get(r.text);
  a == null && (r.noexpand = !0, a = {
    tokens: [r],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !t.gullet.isExpandable(r.text)
  }), t.gullet.macros.set(e, a, n);
};
re({
  type: "internal",
  names: [
    "\\global",
    "\\long",
    "\\\\globallong"
    // can’t be entered directly
  ],
  numArgs: 0,
  allowedInText: !0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t;
    e.consumeSpaces();
    var n = e.fetch();
    if (Wi[n.text])
      return (r === "\\global" || r === "\\\\globallong") && (n.text = Wi[n.text]), $e(e.parseFunction(), "internal");
    throw new q("Invalid token after macro prefix", n);
  }
});
re({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new q("Expected a control sequence", n);
    for (var i = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new q('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new q('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new q("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: c
    } = e.gullet.consumeArg();
    return s && c.unshift(s), (r === "\\edef" || r === "\\xdef") && (c = e.gullet.expandTokens(c), c.reverse()), e.gullet.macros.set(a, {
      tokens: c,
      numArgs: i,
      delimiters: o
    }, r === Wi[r]), {
      type: "internal",
      mode: e.mode
    };
  }
});
re({
  type: "internal",
  names: [
    "\\let",
    "\\\\globallet"
    // can’t be entered directly
  ],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = Xc(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = bf(e);
    return Yc(e, n, a, r === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
re({
  type: "internal",
  names: [
    "\\futurelet",
    "\\\\globalfuture"
    // can’t be entered directly
  ],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = Xc(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Yc(e, n, i, r === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var M0 = function(e, r, n) {
  var a = st.math[e] && st.math[e].replace, i = ks(a || e, r, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + r + ".");
  return i;
}, Ts = function(e, r, n, a) {
  var i = n.havingBaseStyle(r), s = F(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, Jc = function(e, r, n) {
  var a = r.havingBaseStyle(n), i = (1 - r.sizeMultiplier / a.sizeMultiplier) * r.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = G(i), e.height -= i, e.depth += i;
}, vf = function(e, r, n, a, i, s) {
  var o = Rt(e, "Main-Regular", i, a), c = Ts(o, r, a, s);
  return Jc(c, a, r), c;
}, wf = function(e, r, n, a) {
  return Rt(e, "Size" + r + "-Regular", n, a);
}, Qc = function(e, r, n, a, i, s) {
  var o = wf(e, r, i, a), c = Ts(F(["delimsizing", "size" + r], [o], a), Se.TEXT, a, s);
  return n && Jc(c, a, Se.TEXT), c;
}, di = function(e, r, n) {
  var a;
  r === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = F(["delimsizinginner", a], [F([], [Rt(e, r, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, hi = function(e, r, n) {
  var a = Tr["Size4-Regular"][e.charCodeAt(0)] ? Tr["Size4-Regular"][e.charCodeAt(0)][4] : Tr["Size1-Regular"][e.charCodeAt(0)][4], i = new mn("inner", kh(e, Math.round(1e3 * r))), s = new Kr([i], {
    width: G(a),
    height: G(r),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + G(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * r),
    preserveAspectRatio: "xMinYMin"
  }), o = gn([], [s], n);
  return o.height = r, o.style.height = G(r), o.style.width = G(a), {
    type: "elem",
    elem: o
  };
}, Zi = 8e-3, ha = {
  type: "kern",
  size: -1 * Zi
}, xf = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), yf = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), eu = function(e, r, n, a, i, s) {
  var o, c, d, h, f = "", b = 0;
  o = d = h = e, c = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : xf.has(e) ? (d = "∣", f = "vert", b = 333) : yf.has(e) ? (d = "∥", f = "doublevert", b = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", v = "Size4-Regular", f = "lbrack", b = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", v = "Size4-Regular", f = "rbrack", b = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", v = "Size4-Regular", f = "lfloor", b = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", v = "Size4-Regular", f = "lceil", b = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", v = "Size4-Regular", f = "rfloor", b = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", v = "Size4-Regular", f = "rceil", b = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", v = "Size4-Regular", f = "lparen", b = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", v = "Size4-Regular", f = "rparen", b = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", c = "⎨", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", c = "⎬", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", v = "Size4-Regular");
  var k = M0(o, v, i), $ = k.height + k.depth, M = M0(d, v, i), I = M.height + M.depth, y = M0(h, v, i), T = y.height + y.depth, B = 0, P = 1;
  if (c !== null) {
    var H = M0(c, v, i);
    B = H.height + H.depth, P = 2;
  }
  var Q = $ + T + B, W = Math.max(0, Math.ceil((r - Q) / (P * I))), j = Q + W * P * I, pe = a.fontMetrics().axisHeight;
  n && (pe *= a.sizeMultiplier);
  var Ce = j / 2 - pe, Ae = [];
  if (f.length > 0) {
    var Fe = j - $ - T, ze = Math.round(j * 1e3), D = Sh(f, Math.round(Fe * 1e3)), ne = new mn(f, D), be = G(b / 1e3), J = G(ze / 1e3), le = new Kr([ne], {
      width: be,
      height: J,
      viewBox: "0 0 " + b + " " + ze
    }), ie = gn([], [le], a);
    ie.height = ze / 1e3, ie.style.width = be, ie.style.height = J, Ae.push({
      type: "elem",
      elem: ie
    });
  } else {
    if (Ae.push(di(h, v, i)), Ae.push(ha), c === null) {
      var Le = j - $ - T + 2 * Zi;
      Ae.push(hi(d, Le, a));
    } else {
      var je = (j - $ - T - B) / 2 + 2 * Zi;
      Ae.push(hi(d, je, a)), Ae.push(ha), Ae.push(di(c, v, i)), Ae.push(ha), Ae.push(hi(d, je, a));
    }
    Ae.push(ha), Ae.push(di(o, v, i));
  }
  var Ee = a.havingBaseStyle(Se.TEXT), ft = Ue({
    positionType: "bottom",
    positionData: Ce,
    children: Ae
  });
  return Ts(F(["delimsizing", "mult"], [ft], Ee), Se.TEXT, a, s);
}, fi = 80, pi = 0.08, mi = function(e, r, n, a, i) {
  var s = yh(e, a, n), o = new mn(e, s), c = new Kr([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: G(r),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return gn(["hide-tail"], [c], i);
}, kf = function(e, r) {
  var n = r.havingBaseSizing(), a = iu("\\surd", e * n.sizeMultiplier, au, n), i = n.sizeMultiplier, s = Math.max(0, r.minRuleThickness - r.fontMetrics().sqrtRuleThickness), o, c, d, h, f;
  return a.type === "small" ? (h = 1e3 + 1e3 * s + fi, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), c = (1 + s + pi) / i, d = (1 + s) / i, o = mi("sqrtMain", c, h, s, r), o.style.minWidth = "0.853em", f = 0.833 / i) : a.type === "large" ? (h = (1e3 + fi) * z0[a.size], d = (z0[a.size] + s) / i, c = (z0[a.size] + s + pi) / i, o = mi("sqrtSize" + a.size, c, h, s, r), o.style.minWidth = "1.02em", f = 1 / i) : (c = e + s + pi, d = e + s, h = Math.floor(1e3 * e + s) + fi, o = mi("sqrtTall", c, h, s, r), o.style.minWidth = "0.742em", f = 1.056), o.height = d, o.style.height = G(c), {
    span: o,
    advanceWidth: f,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (r.fontMetrics().sqrtRuleThickness + s) * i
  };
}, tu = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), Sf = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), ru = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), z0 = [0, 1.2, 1.8, 2.4, 3], nu = function(e, r, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), tu.has(e) || ru.has(e))
    return Qc(e, r, !1, n, a, i);
  if (Sf.has(e))
    return eu(e, z0[r], !1, n, a, i);
  throw new q("Illegal delimiter: '" + e + "'");
}, _f = [{
  type: "small",
  style: Se.SCRIPTSCRIPT
}, {
  type: "small",
  style: Se.SCRIPT
}, {
  type: "small",
  style: Se.TEXT
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
}], Cf = [{
  type: "small",
  style: Se.SCRIPTSCRIPT
}, {
  type: "small",
  style: Se.SCRIPT
}, {
  type: "small",
  style: Se.TEXT
}, {
  type: "stack"
}], au = [{
  type: "small",
  style: Se.SCRIPTSCRIPT
}, {
  type: "small",
  style: Se.SCRIPT
}, {
  type: "small",
  style: Se.TEXT
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
}], Af = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  var r = e.type;
  throw new Error("Add support for delim type '" + r + "' here.");
}, iu = function(e, r, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length; s++) {
    var o = n[s];
    if (o.type === "stack")
      break;
    var c = M0(e, Af(o), "math"), d = c.height + c.depth;
    if (o.type === "small") {
      var h = a.havingBaseStyle(o.style);
      d *= h.sizeMultiplier;
    }
    if (d > r)
      return o;
  }
  return n[n.length - 1];
}, Ki = function(e, r, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  ru.has(e) ? o = _f : tu.has(e) ? o = au : o = Cf;
  var c = iu(e, r, o, a);
  return c.type === "small" ? vf(e, c.style, n, a, i, s) : c.type === "large" ? Qc(e, c.size, n, a, i, s) : eu(e, r, n, a, i, s);
}, gi = function(e, r, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, c = 901, d = 5 / a.fontMetrics().ptPerEm, h = Math.max(r - o, n + o), f = Math.max(
    // In real TeX, calculations are done using integral values which are
    // 65536 per pt, or 655360 per em. So, the division here truncates in
    // TeX but doesn't here, producing different results. If we wanted to
    // exactly match TeX's calculation, we could do
    //   Math.floor(655360 * maxDistFromAxis / 500) *
    //    delimiterFactor / 655360
    // (To see the difference, compare
    //    x^{x^{\left(\rule{0.1em}{0.68em}\right)}}
    // in TeX and KaTeX)
    h / 500 * c,
    2 * h - d
  );
  return Ki(e, f, !0, a, i, s);
}, fl = {
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
}, Tf = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function pl(t) {
  return "isMiddle" in t;
}
function Wa(t, e) {
  var r = ja(t);
  if (r && Tf.has(r.text))
    return r;
  throw r ? new q("Invalid delimiter '" + r.text + "' after '" + e.funcName + "'", t) : new q("Invalid delimiter type '" + t.type + "'", t);
}
re({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  numArgs: 1,
  argTypes: ["primitive"],
  handler: (t, e) => {
    var r = Wa(e[0], t);
    return {
      type: "delimsizing",
      mode: t.parser.mode,
      size: fl[t.funcName].size,
      mclass: fl[t.funcName].mclass,
      delim: r.text
    };
  },
  htmlBuilder: (t, e) => t.delim === "." ? F([t.mclass]) : nu(t.delim, t.size, e, t.mode, [t.mclass]),
  mathmlBuilder: (t) => {
    var e = [];
    t.delim !== "." && e.push(er(t.delim, t.mode));
    var r = new U("mo", e);
    t.mclass === "mopen" || t.mclass === "mclose" ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r.setAttribute("stretchy", "true");
    var n = G(z0[t.size]);
    return r.setAttribute("minsize", n), r.setAttribute("maxsize", n), r;
  }
});
function ml(t) {
  if (!t.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
re({
  type: "leftright-right",
  names: ["\\right"],
  numArgs: 1,
  primitive: !0,
  handler: (t, e) => {
    var r = t.parser.gullet.macros.get("\\current@color");
    if (r && typeof r != "string")
      throw new q("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: t.parser.mode,
      delim: Wa(e[0], t).text,
      color: r
      // undefined if not set via \color
    };
  }
});
re({
  type: "leftright",
  names: ["\\left"],
  numArgs: 1,
  primitive: !0,
  handler: (t, e) => {
    var r = Wa(e[0], t), n = t.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = $e(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: r.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (t, e) => {
    ml(t);
    for (var r = kt(t.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < r.length; s++) {
      var o = r[s];
      pl(o) ? i = !0 : (n = Math.max(r[s].height, n), a = Math.max(r[s].depth, a));
    }
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var c;
    if (t.left === "." ? c = D0(e, ["mopen"]) : c = gi(t.left, n, a, e, t.mode, ["mopen"]), r.unshift(c), i)
      for (var d = 1; d < r.length; d++) {
        var h = r[d];
        if (pl(h)) {
          var f = h.isMiddle;
          r[d] = gi(f.delim, n, a, f.options, t.mode, []);
        }
      }
    var b;
    if (t.right === ".")
      b = D0(e, ["mclose"]);
    else {
      var v = t.rightColor ? e.withColor(t.rightColor) : e;
      b = gi(t.right, n, a, v, t.mode, ["mclose"]);
    }
    return r.push(b), F(["minner"], r, e);
  },
  mathmlBuilder: (t, e) => {
    ml(t);
    var r = Kt(t.body, e);
    if (t.left !== ".") {
      var n = new U("mo", [er(t.left, t.mode)]);
      n.setAttribute("fence", "true"), r.unshift(n);
    }
    if (t.right !== ".") {
      var a = new U("mo", [er(t.right, t.mode)]);
      a.setAttribute("fence", "true"), t.rightColor && a.setAttribute("mathcolor", t.rightColor), r.push(a);
    }
    return Cs(r);
  }
});
re({
  type: "middle",
  names: ["\\middle"],
  numArgs: 1,
  primitive: !0,
  handler: (t, e) => {
    var r = Wa(e[0], t);
    if (!t.parser.leftrightDepth)
      throw new q("\\middle without preceding \\left", r);
    return {
      type: "middle",
      mode: t.parser.mode,
      delim: r.text
    };
  },
  htmlBuilder: (t, e) => {
    var r;
    return t.delim === "." ? r = D0(e, []) : (r = nu(t.delim, 1, e, t.mode, []), r.isMiddle = {
      delim: t.delim,
      options: e
    }), r;
  },
  mathmlBuilder: (t, e) => {
    var r = t.delim === "\\vert" || t.delim === "|" ? er("|", "text") : er(t.delim, t.mode), n = new U("mo", [r]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var $f = (t, e) => {
  var r = c0(Ve(t.body, e), e), n = t.label.slice(1), a = e.sizeMultiplier, i, s, o = Xr(t.body);
  if (n === "sout")
    i = F(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var c = ct({
      number: 0.6,
      unit: "pt"
    }, e), d = ct({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var f = r.height + r.depth + c + d;
    r.style.paddingLeft = G(f / 2 + c);
    var b = Math.floor(1e3 * f * a), v = wh(b), k = new Kr([new mn("phase", v)], {
      width: "400em",
      height: G(b / 1e3),
      viewBox: "0 0 400000 " + b,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = gn(["hide-tail"], [k], e), i.style.height = G(f), s = r.depth + c + d;
  } else {
    /cancel/.test(n) ? o || r.classes.push("cancel-pad") : n === "angl" ? r.classes.push("anglpad") : r.classes.push("boxpad");
    var $, M, I = 0;
    /box/.test(n) ? (I = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
    ), $ = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : I), M = $) : n === "angl" ? (I = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), $ = 4 * I, M = Math.max(0, 0.25 - r.depth)) : ($ = o ? 0.2 : 0, M = $), i = rf(r, n, $, M, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = G(I)) : n === "angl" && I !== 0.049 && (i.style.borderTopWidth = G(I), i.style.borderRightWidth = G(I)), s = r.depth + M, t.backgroundColor && (i.style.backgroundColor = t.backgroundColor, t.borderColor && (i.style.borderColor = t.borderColor));
  }
  var y;
  if (t.backgroundColor)
    y = Ue({
      positionType: "individualShift",
      children: [
        // Put the color background behind inner;
        {
          type: "elem",
          elem: i,
          shift: s
        },
        {
          type: "elem",
          elem: r,
          shift: 0
        }
      ]
    });
  else {
    var T = /cancel|phase/.test(n) ? ["svg-align"] : [];
    y = Ue({
      positionType: "individualShift",
      children: [
        // Write the \cancel stroke on top of inner.
        {
          type: "elem",
          elem: r,
          shift: 0
        },
        {
          type: "elem",
          elem: i,
          shift: s,
          wrapperClasses: T
        }
      ]
    });
  }
  return /cancel/.test(n) && (y.height = r.height, y.depth = r.depth), /cancel/.test(n) && !o ? F(["mord", "cancel-lap"], [y], e) : F(["mord"], [y], e);
}, Mf = (t, e) => {
  var r, n = new U(t.label.includes("colorbox") ? "mpadded" : "menclose", [et(t.body, e)]);
  switch (t.label) {
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
      if (r = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), t.label === "\\fcolorbox") {
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
        );
        n.setAttribute("style", "border: " + G(a) + " solid " + t.borderColor);
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return t.backgroundColor && n.setAttribute("mathbackground", t.backgroundColor), n;
};
re({
  type: "enclose",
  names: ["\\colorbox"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "hbox"],
  handler(t, e, r) {
    var {
      parser: n,
      funcName: a
    } = t, i = $e(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: s
    };
  },
  htmlBuilder: $f,
  mathmlBuilder: Mf
});
re({
  type: "enclose",
  names: ["\\fcolorbox"],
  numArgs: 3,
  allowedInText: !0,
  argTypes: ["color", "color", "hbox"],
  handler(t, e, r) {
    var {
      parser: n,
      funcName: a
    } = t, i = $e(e[0], "color-token").color, s = $e(e[1], "color-token").color, o = e[2];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: s,
      borderColor: i,
      body: o
    };
  }
});
re({
  type: "enclose",
  names: ["\\fbox"],
  numArgs: 1,
  argTypes: ["hbox"],
  allowedInText: !0,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\fbox",
      body: e[0]
    };
  }
});
re({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
  numArgs: 1,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      body: a
    };
  }
});
re({
  type: "enclose",
  names: ["\\sout"],
  numArgs: 1,
  allowedInText: !0,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t;
    r.mode === "math" && r.settings.reportNonstrict("mathVsSout", "LaTeX's \\sout works only in text mode");
    var a = e[0];
    return {
      type: "enclose",
      mode: r.mode,
      label: n,
      body: a
    };
  }
});
re({
  type: "enclose",
  names: ["\\angl"],
  numArgs: 1,
  argTypes: ["hbox"],
  allowedInText: !1,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "enclose",
      mode: r.mode,
      label: "\\angl",
      body: e[0]
    };
  }
});
var su = {};
function Mr(t) {
  for (var {
    type: e,
    names: r,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: s
  } = t, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, c = 0; c < r.length; ++c)
    su[r[c]] = o;
  i && (O0[e] = i), s && (B0[e] = s);
}
var ou = {};
function m(t, e) {
  ou[t] = e;
}
class Pt {
  // End offset, zero-based exclusive.
  constructor(e, r, n) {
    this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = r, this.end = n;
  }
  /**
   * Merges two `SourceLocation`s from location providers, given they are
   * provided in order of appearance.
   * - Returns the first one's location if only the first is provided.
   * - Returns a merged range of the first and the last if both are provided
   *   and their lexers match.
   * - Otherwise, returns null.
   */
  static range(e, r) {
    return r ? !e || !e.loc || !r.loc || e.loc.lexer !== r.loc.lexer ? null : new Pt(e.loc.lexer, e.loc.start, r.loc.end) : e && e.loc;
  }
}
class jt {
  // used in \noexpand
  constructor(e, r) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = r;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, r) {
    return new jt(r, Pt.range(this, e));
  }
}
function gl(t) {
  var e = [];
  t.consumeSpaces();
  var r = t.fetch().text;
  for (r === "\\relax" && (t.consume(), t.consumeSpaces(), r = t.fetch().text); r === "\\hline" || r === "\\hdashline"; )
    t.consume(), e.push(r === "\\hdashline"), t.consumeSpaces(), r = t.fetch().text;
  return e;
}
var Za = (t) => {
  var e = t.parser.settings;
  if (!e.displayMode)
    throw new q("{" + t.envName + "} can be used only in display mode.");
}, Ef = /* @__PURE__ */ new Set(["gather", "gather*"]);
function $s(t) {
  if (!t.includes("ed"))
    return !t.includes("*");
}
function wn(t, e, r) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: s,
    colSeparationType: o,
    autoTag: c,
    singleRow: d,
    emptySingleRow: h,
    maxNumCols: f,
    leqno: b
  } = e;
  if (t.gullet.beginGroup(), d || t.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var v = t.gullet.expandMacroAsText("\\arraystretch");
    if (v == null)
      s = 1;
    else if (s = parseFloat(v), !s || s < 0)
      throw new q("Invalid \\arraystretch: " + v);
  }
  t.gullet.beginGroup();
  var k = [], $ = [k], M = [], I = [], y = c != null ? [] : void 0;
  function T() {
    c && t.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function B() {
    y && (t.gullet.macros.get("\\df@tag") ? (y.push(t.subparse([new jt("\\df@tag")])), t.gullet.macros.set("\\df@tag", void 0, !0)) : y.push(!!c && t.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (T(), I.push(gl(t)); ; ) {
    var P = t.parseExpression(!1, d ? "\\end" : "\\\\");
    t.gullet.endGroup(), t.gullet.beginGroup();
    var H = {
      type: "ordgroup",
      mode: t.mode,
      body: P
    };
    r && (H = {
      type: "styling",
      mode: t.mode,
      style: r,
      resetFont: !0,
      body: [H]
    }), k.push(H);
    var Q = t.fetch().text;
    if (Q === "&") {
      if (f && k.length === f) {
        if (d || o)
          throw new q("Too many tab characters: &", t.nextToken);
        t.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      t.consume();
    } else if (Q === "\\end") {
      B(), k.length === 1 && H.type === "styling" && H.body.length === 1 && H.body[0].type === "ordgroup" && H.body[0].body.length === 0 && ($.length > 1 || !h) && $.pop(), I.length < $.length + 1 && I.push([]);
      break;
    } else if (Q === "\\\\") {
      t.consume();
      var W = void 0;
      t.gullet.future().text !== " " && (W = t.parseSizeGroup(!0)), M.push(W ? W.value : null), B(), I.push(gl(t)), k = [], $.push(k), T();
    } else
      throw new q("Expected & or \\\\ or \\cr or \\end", t.nextToken);
  }
  return t.gullet.endGroup(), t.gullet.endGroup(), {
    type: "array",
    mode: t.mode,
    addJot: a,
    arraystretch: s,
    body: $,
    cols: i,
    rowGaps: M,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: I,
    colSeparationType: o,
    tags: y,
    leqno: b
  };
}
function Ms(t) {
  return t.slice(0, 1) === "d" ? "display" : "text";
}
var Er = function(e, r) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, c = new Array(i), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    r.fontMetrics().arrayRuleWidth,
    r.minRuleThickness
  ), f = 1 / r.fontMetrics().ptPerEm, b = 5 * f;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = r.havingStyle(Se.SCRIPT).sizeMultiplier;
    b = 0.2778 * (v / r.sizeMultiplier);
  }
  var k = e.colSeparationType === "CD" ? ct({
    number: 3,
    unit: "ex"
  }, r) : 12 * f, $ = 3 * f, M = e.arraystretch * k, I = 0.7 * M, y = 0.3 * M, T = 0;
  function B(Lt) {
    for (var xr = 0; xr < Lt.length; ++xr)
      xr > 0 && (T += 0.25), d.push({
        pos: T,
        isDashed: Lt[xr]
      });
  }
  for (B(s[0]), n = 0; n < e.body.length; ++n) {
    var P = e.body[n], H = I, Q = y;
    o < P.length && (o = P.length);
    var W = {
      cells: new Array(P.length),
      height: 0,
      depth: 0,
      pos: 0
    };
    for (a = 0; a < P.length; ++a) {
      var j = Ve(P[a], r);
      Q < j.depth && (Q = j.depth), H < j.height && (H = j.height), W.cells[a] = j;
    }
    var pe = e.rowGaps[n], Ce = 0;
    pe && (Ce = ct(pe, r), Ce > 0 && (Ce += y, Q < Ce && (Q = Ce), Ce = 0)), e.addJot && n < e.body.length - 1 && (Q += $), W.height = H, W.depth = Q, T += H, W.pos = T, T += Q + Ce, c[n] = W, B(s[n + 1]);
  }
  var Ae = T / 2 + r.fontMetrics().axisHeight, Fe = e.cols || [], ze = [], D, ne, be = [];
  if (e.tags && e.tags.some((Lt) => Lt))
    for (n = 0; n < i; ++n) {
      var J = c[n], le = J.pos - Ae, ie = e.tags[n], Le = void 0;
      ie === !0 ? Le = F(["eqn-num"], [], r) : ie === !1 ? Le = F([], [], r) : Le = F([], kt(ie, r, !0), r), Le.depth = J.depth, Le.height = J.height, be.push({
        type: "elem",
        elem: Le,
        shift: le
      });
    }
  for (
    a = 0, ne = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || ne < Fe.length;
    ++a, ++ne
  ) {
    for (var je, Ee = Fe[ne], ft = !0; ((_t = Ee) == null ? void 0 : _t.type) === "separator"; ) {
      var _t;
      if (ft || (D = F(["arraycolsep"], []), D.style.width = G(r.fontMetrics().doubleRuleSep), ze.push(D)), Ee.separator === "|" || Ee.separator === ":") {
        var zr = Ee.separator === "|" ? "solid" : "dashed", Me = F(["vertical-separator"], [], r);
        Me.style.height = G(T), Me.style.borderRightWidth = G(h), Me.style.borderRightStyle = zr, Me.style.margin = "0 " + G(-h / 2);
        var Re = T - Ae;
        Re && (Me.style.verticalAlign = G(-Re)), ze.push(Me);
      } else
        throw new q("Invalid separator type: " + Ee.separator);
      ne++, Ee = Fe[ne], ft = !1;
    }
    if (!(a >= o)) {
      var Dt = void 0;
      if (a > 0 || e.hskipBeforeAndAfter) {
        var oe, Ct;
        Dt = (oe = (Ct = Ee) == null ? void 0 : Ct.pregap) != null ? oe : b, Dt !== 0 && (D = F(["arraycolsep"], []), D.style.width = G(Dt), ze.push(D));
      }
      var Nr = [];
      for (n = 0; n < i; ++n) {
        var gr = c[n], tr = gr.cells[a];
        if (tr) {
          var xn = gr.pos - Ae;
          tr.depth = gr.depth, tr.height = gr.height, Nr.push({
            type: "elem",
            elem: tr,
            shift: xn
          });
        }
      }
      var Rr = Ue({
        positionType: "individualShift",
        children: Nr
      }), Qr = F(["col-align-" + (((je = Ee) == null ? void 0 : je.align) || "c")], [Rr]);
      if (ze.push(Qr), a < o - 1 || e.hskipBeforeAndAfter) {
        var br, Or;
        Dt = (br = (Or = Ee) == null ? void 0 : Or.postgap) != null ? br : b, Dt !== 0 && (D = F(["arraycolsep"], []), D.style.width = G(Dt), ze.push(D));
      }
    }
  }
  var Mt = F(["mtable"], ze);
  if (d.length > 0) {
    for (var Br = l0("hline", r, h), vr = l0("hdashline", r, h), rr = [{
      type: "elem",
      elem: Mt,
      shift: 0
    }]; d.length > 0; ) {
      var Et = d.pop(), wr = Et.pos - Ae;
      Et.isDashed ? rr.push({
        type: "elem",
        elem: vr,
        shift: wr
      }) : rr.push({
        type: "elem",
        elem: Br,
        shift: wr
      });
    }
    Mt = Ue({
      positionType: "individualShift",
      children: rr
    });
  }
  if (be.length === 0)
    return F(["mord"], [Mt], r);
  var Ht = Ue({
    positionType: "individualShift",
    children: be
  }), nr = F(["tag"], [Ht], r);
  return Jr([Mt, nr]);
}, If = {
  c: "center ",
  l: "left ",
  r: "right "
}, Ir = function(e, r) {
  for (var n = [], a = new U("mtd", [], ["mtr-glue"]), i = new U("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], c = [], d = 0; d < o.length; d++)
      c.push(new U("mtd", [et(o[d], r)]));
    e.tags && e.tags[s] && (c.unshift(a), c.push(a), e.leqno ? c.unshift(i) : c.push(i)), n.push(new U("mtr", c));
  }
  var h = new U("mtable", n), f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", G(f));
  var b = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var k = e.cols, $ = "", M = !1, I = 0, y = k.length;
    k[0].type === "separator" && (b += "top ", I = 1), k[k.length - 1].type === "separator" && (b += "bottom ", y -= 1);
    for (var T = I; T < y; T++) {
      var B = k[T];
      B.type === "align" ? (v += If[B.align], M && ($ += "none "), M = !0) : B.type === "separator" && M && ($ += B.separator === "|" ? "solid " : "dashed ", M = !1);
    }
    h.setAttribute("columnalign", v.trim()), /[sd]/.test($) && h.setAttribute("columnlines", $.trim());
  }
  if (e.colSeparationType === "align") {
    for (var P = e.cols || [], H = "", Q = 1; Q < P.length; Q++)
      H += Q % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", H.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var W = "", j = e.hLinesBeforeRow;
  b += j[0].length > 0 ? "left " : "", b += j[j.length - 1].length > 0 ? "right " : "";
  for (var pe = 1; pe < j.length - 1; pe++)
    W += j[pe].length === 0 ? "none " : j[pe][0] ? "dashed " : "solid ";
  return /[sd]/.test(W) && h.setAttribute("rowlines", W.trim()), b !== "" && (h = new U("menclose", [h]), h.setAttribute("notation", b.trim())), e.arraystretch && e.arraystretch < 1 && (h = new U("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, lu = function(e, r) {
  e.envName.includes("ed") || Za(e);
  var n = [], a = e.envName === "split", i = wn(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: a ? void 0 : $s(e.envName),
    emptySingleRow: !0,
    colSeparationType: e.envName.includes("at") ? "alignat" : "align",
    maxNumCols: a ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s = 0, o = 0, c = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (r[0] && r[0].type === "ordgroup") {
    for (var d = "", h = 0; h < r[0].body.length; h++) {
      var f = $e(r[0].body[h], "textord");
      d += f.text;
    }
    s = Number(d), o = s * 2;
  }
  var b = !o;
  i.body.forEach(function(M) {
    for (var I = 1; I < M.length; I += 2) {
      var y = $e(M[I], "styling"), T = $e(y.body[0], "ordgroup");
      T.body.unshift(c);
    }
    if (b)
      o < M.length && (o = M.length);
    else {
      var B = M.length / 2;
      if (s < B)
        throw new q("Too many math in a row: " + ("expected " + s + ", but got " + B), M[0]);
    }
  });
  for (var v = 0; v < o; ++v) {
    var k = "r", $ = 0;
    v % 2 === 1 ? k = "l" : v > 0 && b && ($ = 1), n[v] = {
      type: "align",
      align: k,
      pregap: $,
      postgap: 0
    };
  }
  return i.colSeparationType = b ? "align" : "alignat", i;
};
Mr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var r = ja(e[0]), n = r ? [e[0]] : $e(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = Va(s), c = o.text;
      if ("lcr".includes(c))
        return {
          type: "align",
          align: c
        };
      if (c === "|")
        return {
          type: "separator",
          separator: "|"
        };
      if (c === ":")
        return {
          type: "separator",
          separator: ":"
        };
      throw new q("Unknown column alignment: " + c, s);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return wn(t.parser, i, Ms(t.envName));
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix", "matrix*", "pmatrix*", "bmatrix*", "Bmatrix*", "vmatrix*", "Vmatrix*"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var e = {
      matrix: null,
      pmatrix: ["(", ")"],
      bmatrix: ["[", "]"],
      Bmatrix: ["\\{", "\\}"],
      vmatrix: ["|", "|"],
      Vmatrix: ["\\Vert", "\\Vert"]
    }[t.envName.replace("*", "")], r = "c", n = {
      hskipBeforeAndAfter: !1,
      cols: [{
        type: "align",
        align: r
      }]
    };
    if (t.envName.charAt(t.envName.length - 1) === "*") {
      var a = t.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), r = a.fetch().text, !"lcr".includes(r))
          throw new q("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: r
        }];
      }
    }
    var i = wn(t.parser, n, Ms(t.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
    return i.cols = new Array(s).fill({
      type: "align",
      align: r
    }), e ? {
      type: "leftright",
      mode: t.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(t) {
    var e = {
      arraystretch: 0.5
    }, r = wn(t.parser, e, "script");
    return r.colSeparationType = "small", r;
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(t, e) {
    var r = ja(e[0]), n = r ? [e[0]] : $e(e[0], "ordgroup").body, a = n.map(function(o) {
      var c = Va(o), d = c.text;
      if ("lc".includes(d))
        return {
          type: "align",
          align: d
        };
      throw new q("Unknown column alignment: " + d, o);
    });
    if (a.length > 1)
      throw new q("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    }, s = wn(t.parser, i, "script");
    if (s.body.length > 0 && s.body[0].length > 1)
      throw new q("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["cases", "dcases", "rcases", "drcases"],
  props: {
    numArgs: 0
  },
  handler(t) {
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
    }, r = wn(t.parser, e, Ms(t.envName));
    return {
      type: "leftright",
      mode: t.mode,
      body: [r],
      left: t.envName.includes("r") ? "." : "\\{",
      right: t.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: lu,
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(t) {
    Ef.has(t.envName) && Za(t);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: $s(t.envName),
      emptySingleRow: !0,
      leqno: t.parser.settings.leqno
    };
    return wn(t.parser, e, "display");
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: lu,
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(t) {
    Za(t);
    var e = {
      autoTag: $s(t.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: t.parser.settings.leqno
    };
    return wn(t.parser, e, "display");
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
Mr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(t) {
    return Za(t), pf(t.parser);
  },
  htmlBuilder: Er,
  mathmlBuilder: Ir
});
m("\\nonumber", "\\gdef\\@eqnsw{0}");
m("\\notag", "\\nonumber");
re({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !0,
  handler(t, e) {
    throw new q(t.funcName + " valid only within array environment");
  }
});
var bl = su;
re({
  type: "environment",
  names: ["\\begin", "\\end"],
  numArgs: 1,
  argTypes: ["text"],
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    if (a.type !== "ordgroup")
      throw new q("Invalid environment name", a);
    for (var i = "", s = 0; s < a.body.length; ++s)
      i += $e(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!bl.hasOwnProperty(i))
        throw new q("No such environment: " + i, a);
      var o = bl[i], {
        args: c,
        optArgs: d
      } = r.parseArguments("\\begin{" + i + "}", o), h = {
        mode: r.mode,
        envName: i,
        parser: r
      }, f = o.handler(h, c, d);
      r.expect("\\end", !1);
      var b = r.nextToken, v = $e(r.parseFunction(), "environment");
      if (v.name !== i)
        throw new q("Mismatch: \\begin{" + i + "} matched by \\end{" + v.name + "}", b);
      return f;
    }
    return {
      type: "environment",
      mode: r.mode,
      name: i,
      nameGroup: a
    };
  }
});
var zf = (t, e) => {
  var r = t.font, n = e.withFont(r);
  return Ve(t.body, n);
}, Nf = (t, e) => {
  var r = t.font, n = e.withFont(r);
  return et(t.body, n);
}, vl = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak"
};
re({
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
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = za(e[0]), i = n in vl ? vl[n] : n;
    return {
      type: "font",
      mode: r.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: zf,
  mathmlBuilder: Nf
});
re({
  type: "mclass",
  names: ["\\boldsymbol", "\\bm"],
  numArgs: 1,
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "mclass",
      mode: r.mode,
      mclass: Ga(n),
      body: [{
        type: "font",
        mode: r.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: Xr(n)
    };
  }
});
re({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  numArgs: 0,
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n,
      breakOnTokenText: a
    } = t, {
      mode: i
    } = r, s = r.parseExpression(!0, a);
    return {
      type: "font",
      mode: i,
      font: "math" + n.slice(1),
      body: {
        type: "ordgroup",
        mode: r.mode,
        body: s
      }
    };
  }
});
var Rf = (t, e) => {
  var r = e.style, n = r.fracNum(), a = r.fracDen(), i;
  i = e.havingStyle(n);
  var s = Ve(t.numer, i, e);
  if (t.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, c = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < c ? c : s.depth;
  }
  i = e.havingStyle(a);
  var d = Ve(t.denom, i, e), h, f, b;
  t.hasBarLine ? (t.barSize ? (f = ct(t.barSize, e), h = l0("frac-line", e, f)) : h = l0("frac-line", e), f = h.height, b = h.height) : (h = null, f = 0, b = e.fontMetrics().defaultRuleThickness);
  var v, k, $;
  r.size === Se.DISPLAY.size ? (v = e.fontMetrics().num1, f > 0 ? k = 3 * b : k = 7 * b, $ = e.fontMetrics().denom1) : (f > 0 ? (v = e.fontMetrics().num2, k = b) : (v = e.fontMetrics().num3, k = 3 * b), $ = e.fontMetrics().denom2);
  var M;
  if (h) {
    var y = e.fontMetrics().axisHeight;
    v - s.depth - (y + 0.5 * f) < k && (v += k - (v - s.depth - (y + 0.5 * f))), y - 0.5 * f - (d.height - $) < k && ($ += k - (y - 0.5 * f - (d.height - $)));
    var T = -(y - 0.5 * f);
    M = Ue({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: $
      }, {
        type: "elem",
        elem: h,
        shift: T
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  } else {
    var I = v - s.depth - (d.height - $);
    I < k && (v += 0.5 * (k - I), $ += 0.5 * (k - I)), M = Ue({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: $
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  }
  i = e.havingStyle(r), M.height *= i.sizeMultiplier / e.sizeMultiplier, M.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var B;
  r.size === Se.DISPLAY.size ? B = e.fontMetrics().delim1 : r.size === Se.SCRIPTSCRIPT.size ? B = e.havingStyle(Se.SCRIPT).fontMetrics().delim2 : B = e.fontMetrics().delim2;
  var P, H;
  return t.leftDelim == null ? P = D0(e, ["mopen"]) : P = Ki(t.leftDelim, B, !0, e.havingStyle(r), t.mode, ["mopen"]), t.continued ? H = F([]) : t.rightDelim == null ? H = D0(e, ["mclose"]) : H = Ki(t.rightDelim, B, !0, e.havingStyle(r), t.mode, ["mclose"]), F(["mord"].concat(i.sizingClasses(e)), [P, F(["mfrac"], [M]), H], e);
}, Of = (t, e) => {
  var r = new U("mfrac", [et(t.numer, e), et(t.denom, e)]);
  if (!t.hasBarLine)
    r.setAttribute("linethickness", "0px");
  else if (t.barSize) {
    var n = ct(t.barSize, e);
    r.setAttribute("linethickness", G(n));
  }
  if (t.leftDelim != null || t.rightDelim != null) {
    var a = [];
    if (t.leftDelim != null) {
      var i = new U("mo", [new bt(t.leftDelim.replace("\\", ""))]);
      i.setAttribute("fence", "true"), a.push(i);
    }
    if (a.push(r), t.rightDelim != null) {
      var s = new U("mo", [new bt(t.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), a.push(s);
    }
    return Cs(a);
  }
  return r;
}, cu = (t, e) => {
  if (!e)
    return t;
  var r = {
    type: "styling",
    mode: t.mode,
    style: e,
    body: [t]
  };
  return r;
};
re({
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
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0], i = e[1], s, o = null, c = null;
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
        s = !1, o = "(", c = ")";
        break;
      case "\\\\bracefrac":
        s = !1, o = "\\{", c = "\\}";
        break;
      case "\\\\brackfrac":
        s = !1, o = "[", c = "]";
        break;
      default:
        throw new Error("Unrecognized genfrac command");
    }
    var d = n === "\\cfrac", h = null;
    return d || n.startsWith("\\d") ? h = "display" : n.startsWith("\\t") && (h = "text"), cu({
      type: "genfrac",
      mode: r.mode,
      numer: a,
      denom: i,
      continued: d,
      hasBarLine: s,
      leftDelim: o,
      rightDelim: c,
      barSize: null
    }, h);
  },
  htmlBuilder: Rf,
  mathmlBuilder: Of
});
re({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  numArgs: 0,
  infix: !0,
  handler(t) {
    var {
      parser: e,
      funcName: r,
      token: n
    } = t, a;
    switch (r) {
      case "\\over":
        a = "\\frac";
        break;
      case "\\choose":
        a = "\\binom";
        break;
      case "\\atop":
        a = "\\\\atopfrac";
        break;
      case "\\brace":
        a = "\\\\bracefrac";
        break;
      case "\\brack":
        a = "\\\\brackfrac";
        break;
      default:
        throw new Error("Unrecognized infix genfrac command");
    }
    return {
      type: "infix",
      mode: e.mode,
      replaceWith: a,
      token: n
    };
  }
});
var wl = ["display", "text", "script", "scriptscript"], xl = function(e) {
  var r = null;
  return e.length > 0 && (r = e, r = r === "." ? null : r), r;
};
re({
  type: "genfrac",
  names: ["\\genfrac"],
  numArgs: 6,
  allowedInArgument: !0,
  argTypes: ["math", "math", "size", "text", "math", "math"],
  handler(t, e) {
    var {
      parser: r
    } = t, n = e[4], a = e[5], i = za(e[0]), s = i.type === "atom" && i.family === "open" ? xl(i.text) : null, o = za(e[1]), c = o.type === "atom" && o.family === "close" ? xl(o.text) : null, d = $e(e[2], "size"), h, f = null;
    d.isBlank ? h = !0 : (f = d.value, h = f.number > 0);
    var b = null, v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var k = $e(v.body[0], "textord");
        b = wl[Number(k.text)];
      }
    } else
      v = $e(v, "textord"), b = wl[Number(v.text)];
    return cu({
      type: "genfrac",
      mode: r.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: f,
      leftDelim: s,
      rightDelim: c
    }, b);
  }
});
re({
  type: "infix",
  names: ["\\above"],
  numArgs: 1,
  argTypes: ["size"],
  infix: !0,
  handler(t, e) {
    var {
      parser: r,
      funcName: n,
      token: a
    } = t;
    return {
      type: "infix",
      mode: r.mode,
      replaceWith: "\\\\abovefrac",
      size: $e(e[0], "size").value,
      token: a
    };
  }
});
re({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  numArgs: 3,
  argTypes: ["math", "size", "math"],
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0], i = $e(e[1], "infix").size;
    if (!i)
      throw new Error("\\\\abovefrac expected size, but got " + String(i));
    var s = e[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: r.mode,
      numer: a,
      denom: s,
      continued: !1,
      hasBarLine: o,
      barSize: i,
      leftDelim: null,
      rightDelim: null
    };
  }
});
var uu = (t, e) => {
  var r = e.style, n, a;
  t.type === "supsub" ? (n = t.sup ? Ve(t.sup, e.havingStyle(r.sup()), e) : Ve(t.sub, e.havingStyle(r.sub()), e), a = $e(t.base, "horizBrace")) : a = $e(t, "horizBrace");
  var i = Ve(a.base, e.havingBaseStyle(Se.DISPLAY)), s = Ua(a, e), o;
  if (a.isOver ? o = Ue({
    positionType: "firstBaseline",
    children: [{
      type: "elem",
      elem: i
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: s,
      wrapperClasses: ["svg-align"]
    }]
  }) : o = Ue({
    positionType: "bottom",
    positionData: i.depth + 0.1 + s.height,
    children: [{
      type: "elem",
      elem: s,
      wrapperClasses: ["svg-align"]
    }, {
      type: "kern",
      size: 0.1
    }, {
      type: "elem",
      elem: i
    }]
  }), n) {
    var c = F(["minner", a.isOver ? "mover" : "munder"], [o], e);
    a.isOver ? o = Ue({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: n
      }]
    }) : o = Ue({
      positionType: "bottom",
      positionData: c.depth + 0.2 + n.height + n.depth,
      children: [{
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 0.2
      }, {
        type: "elem",
        elem: c
      }]
    });
  }
  return F(["minner", a.isOver ? "mover" : "munder"], [o], e);
}, Bf = (t, e) => {
  var r = qa(t.label);
  return new U(t.isOver ? "mover" : "munder", [et(t.base, e), r]);
};
re({
  type: "horizBrace",
  names: ["\\overbrace", "\\underbrace", "\\overbracket", "\\underbracket"],
  numArgs: 1,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t;
    return {
      type: "horizBrace",
      mode: r.mode,
      label: n,
      isOver: n.includes("\\over"),
      base: e[0]
    };
  },
  htmlBuilder: uu,
  mathmlBuilder: Bf
});
re({
  type: "href",
  names: ["\\href"],
  numArgs: 2,
  argTypes: ["url", "original"],
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[1], a = $e(e[0], "url").url;
    return r.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: r.mode,
      href: a,
      body: gt(n)
    } : r.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (t, e) => {
    var r = kt(t.body, e, !1);
    return Fh(t.href, [], r, e);
  },
  mathmlBuilder: (t, e) => {
    var r = bn(t.body, e);
    return r instanceof U || (r = new U("mrow", [r])), r.setAttribute("href", t.href), r;
  }
});
re({
  type: "href",
  names: ["\\url"],
  numArgs: 1,
  argTypes: ["url"],
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = $e(e[0], "url").url;
    if (!r.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return r.formatUnsupportedCmd("\\url");
    for (var a = [], i = 0; i < n.length; i++) {
      var s = n[i];
      s === "~" && (s = "\\textasciitilde"), a.push({
        type: "textord",
        mode: "text",
        text: s
      });
    }
    var o = {
      type: "text",
      mode: r.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: r.mode,
      href: n,
      body: gt(o)
    };
  }
});
re({
  type: "hbox",
  names: ["\\hbox"],
  numArgs: 1,
  argTypes: ["text"],
  allowedInText: !0,
  primitive: !0,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "hbox",
      mode: r.mode,
      body: gt(e[0])
    };
  },
  htmlBuilder(t, e) {
    var r = kt(t.body, e.withFont(""), !1);
    return Jr(r);
  },
  mathmlBuilder(t, e) {
    return new U("mrow", Kt(t.body, e.withFont("")));
  }
});
re({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  numArgs: 2,
  argTypes: ["raw", "original"],
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n,
      token: a
    } = t, i = $e(e[0], "raw").string, s = e[1];
    r.settings.strict && r.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, c = {};
    switch (n) {
      case "\\htmlClass":
        c.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        c.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        c.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var d = i.split(","), h = 0; h < d.length; h++) {
          var f = d[h], b = f.indexOf("=");
          if (b < 0)
            throw new q("\\htmlData key/value '" + f + "' missing equals sign");
          var v = f.slice(0, b), k = f.slice(b + 1);
          c["data-" + v.trim()] = k;
        }
        o = {
          command: "\\htmlData",
          attributes: c
        };
        break;
      }
      default:
        throw new Error("Unrecognized html command");
    }
    return r.settings.isTrusted(o) ? {
      type: "html",
      mode: r.mode,
      attributes: c,
      body: gt(s)
    } : r.formatUnsupportedCmd(n);
  },
  htmlBuilder: (t, e) => {
    var r = kt(t.body, e, !1), n = ["enclosing"];
    t.attributes.class && n.push(...t.attributes.class.trim().split(/\s+/));
    var a = F(n, r, e);
    for (var i in t.attributes)
      i !== "class" && t.attributes.hasOwnProperty(i) && a.setAttribute(i, t.attributes[i]);
    return a;
  },
  mathmlBuilder: (t, e) => bn(t.body, e)
});
re({
  type: "htmlmathml",
  names: ["\\html@mathml"],
  numArgs: 2,
  allowedInArgument: !0,
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t;
    return {
      type: "htmlmathml",
      mode: r.mode,
      html: gt(e[0]),
      mathml: gt(e[1])
    };
  },
  htmlBuilder: (t, e) => {
    var r = kt(t.html, e, !1);
    return Jr(r);
  },
  mathmlBuilder: (t, e) => bn(t.mathml, e)
});
var bi = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!r)
    throw new q("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(r[1] + r[2]),
    // sign + magnitude, cast to number
    unit: r[3]
  };
  if (!Nc(n))
    throw new q("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
re({
  type: "includegraphics",
  names: ["\\includegraphics"],
  numArgs: 1,
  numOptionalArgs: 1,
  argTypes: ["raw", "url"],
  allowedInText: !1,
  handler: (t, e, r) => {
    var {
      parser: n
    } = t, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, s = {
      number: 0,
      unit: "em"
    }, o = "";
    if (r[0])
      for (var c = $e(r[0], "raw").string, d = c.split(","), h = 0; h < d.length; h++) {
        var f = d[h].split("=");
        if (f.length === 2) {
          var b = f[1].trim();
          switch (f[0].trim()) {
            case "alt":
              o = b;
              break;
            case "width":
              a = bi(b);
              break;
            case "height":
              i = bi(b);
              break;
            case "totalheight":
              s = bi(b);
              break;
            default:
              throw new q("Invalid key: '" + f[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = $e(e[0], "url").url;
    return o === "" && (o = v, o = o.replace(/^.*[\\/]/, ""), o = o.substring(0, o.lastIndexOf("."))), n.settings.isTrusted({
      command: "\\includegraphics",
      url: v
    }) ? {
      type: "includegraphics",
      mode: n.mode,
      alt: o,
      width: a,
      height: i,
      totalheight: s,
      src: v
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (t, e) => {
    var r = ct(t.height, e), n = 0;
    t.totalheight.number > 0 && (n = ct(t.totalheight, e) - r);
    var a = 0;
    t.width.number > 0 && (a = ct(t.width, e));
    var i = {
      height: G(r + n)
    };
    a > 0 && (i.width = G(a)), n > 0 && (i.verticalAlign = G(-n));
    var s = new Th(t.src, t.alt, i);
    return s.height = r, s.depth = n, s;
  },
  mathmlBuilder: (t, e) => {
    var r = new U("mglyph", []);
    r.setAttribute("alt", t.alt);
    var n = ct(t.height, e), a = 0;
    if (t.totalheight.number > 0 && (a = ct(t.totalheight, e) - n, r.setAttribute("valign", G(-a))), r.setAttribute("height", G(n + a)), t.width.number > 0) {
      var i = ct(t.width, e);
      r.setAttribute("width", G(i));
    }
    return r.setAttribute("src", t.src), r;
  }
});
re({
  type: "kern",
  names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
  numArgs: 1,
  argTypes: ["size"],
  primitive: !0,
  allowedInText: !0,
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, a = $e(e[0], "size");
    if (r.settings.strict) {
      var i = n[1] === "m", s = a.value.unit === "mu";
      i ? (s || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")), r.mode !== "math" && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : s && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: r.mode,
      dimension: a.value
    };
  },
  htmlBuilder(t, e) {
    return Fc(t.dimension, e);
  },
  mathmlBuilder(t, e) {
    var r = ct(t.dimension, e);
    return new jc(r);
  }
});
re({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  numArgs: 1,
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    return {
      type: "lap",
      mode: r.mode,
      alignment: n.slice(5),
      body: a
    };
  },
  htmlBuilder: (t, e) => {
    var r;
    t.alignment === "clap" ? (r = F([], [Ve(t.body, e)]), r = F(["inner"], [r], e)) : r = F(["inner"], [Ve(t.body, e)]);
    var n = F(["fix"], []), a = F([t.alignment], [r, n], e), i = F(["strut"]);
    return i.style.height = G(a.height + a.depth), a.depth && (i.style.verticalAlign = G(-a.depth)), a.children.unshift(i), a = F(["thinbox"], [a], e), F(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (t, e) => {
    var r = new U("mpadded", [et(t.body, e)]);
    if (t.alignment !== "rlap") {
      var n = t.alignment === "llap" ? "-1" : "-0.5";
      r.setAttribute("lspace", n + "width");
    }
    return r.setAttribute("width", "0px"), r;
  }
});
re({
  type: "styling",
  names: ["\\(", "$"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(t, e) {
    var {
      funcName: r,
      parser: n
    } = t, a = n.mode;
    n.switchMode("math");
    var i = r === "\\(" ? "\\)" : "$", s = n.parseExpression(!1, i);
    return n.expect(i), n.switchMode(a), {
      type: "styling",
      mode: n.mode,
      style: "text",
      resetFont: !0,
      body: s
    };
  }
});
re({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(t, e) {
    throw new q("Mismatched " + t.funcName);
  }
});
var yl = (t, e) => {
  switch (e.style.size) {
    case Se.DISPLAY.size:
      return t.display;
    case Se.TEXT.size:
      return t.text;
    case Se.SCRIPT.size:
      return t.script;
    case Se.SCRIPTSCRIPT.size:
      return t.scriptscript;
    default:
      return t.text;
  }
};
re({
  type: "mathchoice",
  names: ["\\mathchoice"],
  numArgs: 4,
  primitive: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t;
    return {
      type: "mathchoice",
      mode: r.mode,
      display: gt(e[0]),
      text: gt(e[1]),
      script: gt(e[2]),
      scriptscript: gt(e[3])
    };
  },
  htmlBuilder: (t, e) => {
    var r = yl(t, e), n = kt(r, e, !1);
    return Jr(n);
  },
  mathmlBuilder: (t, e) => {
    var r = yl(t, e);
    return bn(r, e);
  }
});
var du = (t, e, r, n, a, i, s) => {
  t = F([], [t]);
  var o = r && Xr(r), c, d;
  if (e) {
    var h = Ve(e, n.havingStyle(a.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (r) {
    var f = Ve(r, n.havingStyle(a.sub()), n);
    c = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height)
    };
  }
  var b;
  if (d && c) {
    var v = n.fontMetrics().bigOpSpacing5 + c.elem.height + c.elem.depth + c.kern + t.depth + s;
    b = Ue({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: G(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: G(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else if (c) {
    var k = t.height - s;
    b = Ue({
      positionType: "top",
      positionData: k,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: c.elem,
        marginLeft: G(-i)
      }, {
        type: "kern",
        size: c.kern
      }, {
        type: "elem",
        elem: t
      }]
    });
  } else if (d) {
    var $ = t.depth + s;
    b = Ue({
      positionType: "bottom",
      positionData: $,
      children: [{
        type: "elem",
        elem: t
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: G(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else
    return t;
  var M = [b];
  if (c && i !== 0 && !o) {
    var I = F(["mspace"], [], n);
    I.style.marginRight = G(i), M.unshift(I);
  }
  return F(["mop", "op-limits"], M, n);
}, hu = /* @__PURE__ */ new Set(["\\smallint"]), fu = (t, e) => {
  var r, n, a = !1, i;
  t.type === "supsub" ? (r = t.sup, n = t.sub, i = $e(t.base, "op"), a = !0) : i = $e(t, "op");
  var s = e.style, o = !1;
  s.size === Se.DISPLAY.size && i.symbol && !hu.has(i.name) && (o = !0);
  var c, d;
  if (i.symbol) {
    var h = o ? "Size2-Regular" : "Size1-Regular", f = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (f = i.name.slice(1), i.name = f === "oiint" ? "\\iint" : "\\iiint"), c = Rt(i.name, h, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), d = c.italic, f.length > 0) {
      var b = Hc(f + "Size" + (o ? "2" : "1"), e);
      c = Ue({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: c,
          shift: 0
        }, {
          type: "elem",
          elem: b,
          shift: o ? 0.08 : 0
        }]
      }), i.name = "\\" + f, c.classes.unshift("mop"), c.italic = d;
    }
  } else if (i.body) {
    var v = kt(i.body, e, !0);
    v.length === 1 && v[0] instanceof Gt ? (c = v[0], c.classes[0] = "mop") : c = F(["mop"], v, e);
  } else {
    for (var k = [], $ = 1; $ < i.name.length; $++)
      k.push(Ss(i.name[$], i.mode, e));
    c = F(["mop"], k, e);
  }
  var M = 0, I = 0;
  if ((c instanceof Gt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift) {
    var y;
    M = (c.height - c.depth) / 2 - e.fontMetrics().axisHeight, I = (y = c.italic) != null ? y : 0;
  }
  return a ? du(c, r, n, e, s, I, M) : (M && (c.style.position = "relative", c.style.top = G(M)), c);
}, Df = (t, e) => {
  var r;
  if (t.symbol)
    r = new U("mo", [er(t.name, t.mode)]), hu.has(t.name) && r.setAttribute("largeop", "false");
  else if (t.body)
    r = new U("mo", Kt(t.body, e));
  else {
    r = new U("mi", [new bt(t.name.slice(1))]);
    var n = new U("mo", [er("⁡", "text")]);
    t.parentIsSupSub ? r = new U("mrow", [r, n]) : r = Vc([r, n]);
  }
  return r;
}, Lf = {
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
re({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  numArgs: 0,
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = n;
    return a.length === 1 && (a = Lf[a]), {
      type: "op",
      mode: r.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: fu,
  mathmlBuilder: Df
});
re({
  type: "op",
  names: ["\\mathop"],
  numArgs: 1,
  primitive: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "op",
      mode: r.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      body: gt(n)
    };
  }
});
var Ff = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
re({
  type: "op",
  names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
  numArgs: 0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t;
    return {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !1,
      name: r
    };
  }
});
re({
  type: "op",
  names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
  numArgs: 0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t;
    return {
      type: "op",
      mode: e.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !1,
      name: r
    };
  }
});
re({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  numArgs: 0,
  allowedInArgument: !0,
  handler(t) {
    var {
      parser: e,
      funcName: r
    } = t, n = r;
    return n.length === 1 && (n = Ff[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  }
});
var pu = (t, e) => {
  var r, n, a = !1, i;
  t.type === "supsub" ? (r = t.sup, n = t.sub, i = $e(t.base, "operatorname"), a = !0) : i = $e(t, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((f) => {
      var b = "text" in f ? f.text : void 0;
      return typeof b == "string" ? {
        type: "textord",
        mode: f.mode,
        text: b
      } : f;
    }), c = kt(o, e.withFont("mathrm"), !0), d = 0; d < c.length; d++) {
      var h = c[d];
      h instanceof Gt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = F(["mop"], c, e);
  } else
    s = F(["mop"], [], e);
  return a ? du(s, r, n, e, e.style, 0, 0) : s;
}, Pf = (t, e) => {
  for (var r = Kt(t.body, e.withFont("mathrm")), n = !0, a = 0; a < r.length; a++) {
    var i = r[a];
    if (!(i instanceof jc)) if (i instanceof U)
      switch (i.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof bt ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
          break;
        }
        default:
          n = !1;
      }
    else
      n = !1;
  }
  if (n) {
    var o = r.map((h) => h.toText()).join("");
    r = [new bt(o)];
  }
  var c = new U("mi", r);
  c.setAttribute("mathvariant", "normal");
  var d = new U("mo", [er("⁡", "text")]);
  return t.parentIsSupSub ? new U("mrow", [c, d]) : Vc([c, d]);
};
re({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  numArgs: 1,
  handler: (t, e) => {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    return {
      type: "operatorname",
      mode: r.mode,
      body: gt(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: pu,
  mathmlBuilder: Pf
});
m("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Dn({
  type: "ordgroup",
  htmlBuilder(t, e) {
    return t.semisimple ? Jr(kt(t.body, e, !1)) : F(["mord"], kt(t.body, e, !0), e);
  },
  mathmlBuilder(t, e) {
    return bn(t.body, e, !0);
  }
});
re({
  type: "overline",
  names: ["\\overline"],
  numArgs: 1,
  handler(t, e) {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "overline",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder(t, e) {
    var r = Ve(t.body, e.havingCrampedStyle()), n = l0("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = Ue({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: a
      }]
    });
    return F(["mord", "overline"], [i], e);
  },
  mathmlBuilder(t, e) {
    var r = new U("mo", [new bt("‾")]);
    r.setAttribute("stretchy", "true");
    var n = new U("mover", [et(t.body, e), r]);
    return n.setAttribute("accent", "true"), n;
  }
});
re({
  type: "phantom",
  names: ["\\phantom"],
  numArgs: 1,
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "phantom",
      mode: r.mode,
      body: gt(n)
    };
  },
  htmlBuilder: (t, e) => {
    var r = kt(t.body, e.withPhantom(), !1);
    return Jr(r);
  },
  mathmlBuilder: (t, e) => {
    var r = Kt(t.body, e);
    return new U("mphantom", r);
  }
});
m("\\hphantom", "\\smash{\\phantom{#1}}");
re({
  type: "vphantom",
  names: ["\\vphantom"],
  numArgs: 1,
  allowedInText: !0,
  handler: (t, e) => {
    var {
      parser: r
    } = t, n = e[0];
    return {
      type: "vphantom",
      mode: r.mode,
      body: n
    };
  },
  htmlBuilder: (t, e) => {
    var r = F(["inner"], [Ve(t.body, e.withPhantom())]), n = F(["fix"], []);
    return F(["mord", "rlap"], [r, n], e);
  },
  mathmlBuilder: (t, e) => {
    var r = Kt(gt(t.body), e), n = new U("mphantom", r), a = new U("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
re({
  type: "raisebox",
  names: ["\\raisebox"],
  numArgs: 2,
  argTypes: ["size", "hbox"],
  allowedInText: !0,
  handler(t, e) {
    var {
      parser: r
    } = t, n = $e(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: r.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(t, e) {
    var r = Ve(t.body, e), n = ct(t.dy, e);
    return Ue({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: r
      }]
    });
  },
  mathmlBuilder(t, e) {
    var r = new U("mpadded", [et(t.body, e)]), n = t.dy.number + t.dy.unit;
    return r.setAttribute("voffset", n), r;
  }
});
re({
  type: "internal",
  names: ["\\relax"],
  numArgs: 0,
  allowedInText: !0,
  allowedInArgument: !0,
  handler(t) {
    var {
      parser: e
    } = t;
    return {
      type: "internal",
      mode: e.mode
    };
  }
});
re({
  type: "rule",
  names: ["\\rule"],
  numArgs: 2,
  numOptionalArgs: 1,
  allowedInText: !0,
  allowedInMath: !0,
  argTypes: ["size", "size", "size"],
  handler(t, e, r) {
    var {
      parser: n
    } = t, a = r[0], i = $e(e[0], "size"), s = $e(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && $e(a, "size").value,
      width: i.value,
      height: s.value
    };
  },
  htmlBuilder(t, e) {
    var r = F(["mord", "rule"], [], e), n = ct(t.width, e), a = ct(t.height, e), i = t.shift ? ct(t.shift, e) : 0;
    return r.style.borderRightWidth = G(n), r.style.borderTopWidth = G(a), r.style.bottom = G(i), r.width = n, r.height = a + i, r.depth = -i, r.maxFontSize = a * 1.125 * e.sizeMultiplier, r;
  },
  mathmlBuilder(t, e) {
    var r = ct(t.width, e), n = ct(t.height, e), a = t.shift ? ct(t.shift, e) : 0, i = e.color && e.getColor() || "black", s = new U("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", G(r)), s.setAttribute("height", G(n));
    var o = new U("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", G(a)) : (o.setAttribute("height", G(a)), o.setAttribute("depth", G(-a))), o.setAttribute("voffset", G(a)), o;
  }
});
function mu(t, e, r) {
  for (var n = kt(t, e, !1), a = e.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(r)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + r.size), n[i].height *= a, n[i].depth *= a;
  }
  return Jr(n);
}
var kl = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Hf = (t, e) => {
  var r = e.havingSize(t.size);
  return mu(t.body, r, e);
};
re({
  type: "sizing",
  names: kl,
  numArgs: 0,
  allowedInText: !0,
  handler: (t, e) => {
    var {
      breakOnTokenText: r,
      funcName: n,
      parser: a
    } = t, i = a.parseExpression(!1, r);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: kl.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: Hf,
  mathmlBuilder: (t, e) => {
    var r = e.havingSize(t.size), n = Kt(t.body, r), a = new U("mstyle", n);
    return a.setAttribute("mathsize", G(r.sizeMultiplier)), a;
  }
});
re({
  type: "smash",
  names: ["\\smash"],
  numArgs: 1,
  numOptionalArgs: 1,
  allowedInText: !0,
  handler: (t, e, r) => {
    var {
      parser: n
    } = t, a = !1, i = !1, s = r[0] && $e(r[0], "ordgroup");
    if (s)
      for (var o, c = 0; c < s.body.length; ++c) {
        var d = s.body[c];
        if (o = Va(d).text, o === "t")
          a = !0;
        else if (o === "b")
          i = !0;
        else {
          a = !1, i = !1;
          break;
        }
      }
    else
      a = !0, i = !0;
    var h = e[0];
    return {
      type: "smash",
      mode: n.mode,
      body: h,
      smashHeight: a,
      smashDepth: i
    };
  },
  htmlBuilder: (t, e) => {
    var r = F([], [Ve(t.body, e)]);
    if (!t.smashHeight && !t.smashDepth)
      return r;
    if (t.smashHeight && (r.height = 0), t.smashDepth && (r.depth = 0), t.smashHeight && t.smashDepth)
      return F(["mord", "smash"], [r], e);
    if (r.children)
      for (var n = 0; n < r.children.length; n++)
        t.smashHeight && (r.children[n].height = 0), t.smashDepth && (r.children[n].depth = 0);
    var a = Ue({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r
      }]
    });
    return F(["mord"], [a], e);
  },
  mathmlBuilder: (t, e) => {
    var r = new U("mpadded", [et(t.body, e)]);
    return t.smashHeight && r.setAttribute("height", "0px"), t.smashDepth && r.setAttribute("depth", "0px"), r;
  }
});
re({
  type: "sqrt",
  names: ["\\sqrt"],
  numArgs: 1,
  numOptionalArgs: 1,
  handler(t, e, r) {
    var {
      parser: n
    } = t, a = r[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(t, e) {
    var r = Ve(t.body, e.havingCrampedStyle());
    r.height === 0 && (r.height = e.fontMetrics().xHeight), r = c0(r, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < Se.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = r.height + r.depth + s + a, {
      span: c,
      ruleWidth: d,
      advanceWidth: h
    } = kf(o, e), f = c.height - d;
    f > r.height + r.depth + s && (s = (s + f - r.height - r.depth) / 2);
    var b = c.height - r.height - s - d;
    r.style.paddingLeft = G(h);
    var v = Ue({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: r,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: -(r.height + b)
      }, {
        type: "elem",
        elem: c
      }, {
        type: "kern",
        size: d
      }]
    });
    if (t.index) {
      var k = e.havingStyle(Se.SCRIPTSCRIPT), $ = Ve(t.index, k, e), M = 0.6 * (v.height - v.depth), I = Ue({
        positionType: "shift",
        positionData: -M,
        children: [{
          type: "elem",
          elem: $
        }]
      }), y = F(["root"], [I]);
      return F(["mord", "sqrt"], [y, v], e);
    } else
      return F(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(t, e) {
    var {
      body: r,
      index: n
    } = t;
    return n ? new U("mroot", [et(r, e), et(n, e)]) : new U("msqrt", [et(r, e)]);
  }
});
var Xi = {
  display: Se.DISPLAY,
  text: Se.TEXT,
  script: Se.SCRIPT,
  scriptscript: Se.SCRIPTSCRIPT
};
function qf(t) {
  return t in Xi;
}
re({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(t, e) {
    var {
      breakOnTokenText: r,
      funcName: n,
      parser: a
    } = t, i = a.parseExpression(!0, r), s = n.slice(1, n.length - 5);
    if (!qf(s))
      throw new Error("Unknown style: " + s);
    return {
      type: "styling",
      mode: a.mode,
      // Figure out what style to use by pulling out the style from
      // the function name
      style: s,
      body: i
    };
  },
  htmlBuilder(t, e) {
    var r = Xi[t.style], n = e.havingStyle(r);
    return t.resetFont && (n = n.withFont("")), mu(t.body, n, e);
  },
  mathmlBuilder(t, e) {
    var r = Xi[t.style], n = e.havingStyle(r);
    t.resetFont && (n = n.withFont(""));
    var a = Kt(t.body, n), i = new U("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[t.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var Uf = function(e, r) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (r.style.size === Se.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? fu : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (r.style.size === Se.DISPLAY.size || n.limits);
      return i ? pu : null;
    } else {
      if (n.type === "accent")
        return Xr(n.base) ? Kc : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? uu : null;
      } else
        return null;
    }
  else return null;
};
Dn({
  type: "supsub",
  htmlBuilder(t, e) {
    var r = Uf(t, e);
    if (r)
      return r(t, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = t, s = Ve(n, e), o, c, d = e.fontMetrics(), h = 0, f = 0, b = n && Xr(n);
    if (a) {
      var v = e.havingStyle(e.style.sup());
      o = Ve(a, v, e), b || (h = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var k = e.havingStyle(e.style.sub());
      c = Ve(i, k, e), b || (f = s.depth + k.fontMetrics().subDrop * k.sizeMultiplier / e.sizeMultiplier);
    }
    var $;
    e.style === Se.DISPLAY ? $ = d.sup1 : e.style.cramped ? $ = d.sup3 : $ = d.sup2;
    var M = e.sizeMultiplier, I = G(0.5 / d.ptPerEm / M), y = null;
    if (c) {
      var T = t.base && t.base.type === "op" && t.base.name && (t.base.name === "\\oiint" || t.base.name === "\\oiiint");
      if (s instanceof Gt || T) {
        var B;
        y = G(-((B = s.italic) != null ? B : 0));
      }
    }
    var P;
    if (o && c) {
      h = Math.max(h, $, o.depth + 0.25 * d.xHeight), f = Math.max(f, d.sub2);
      var H = d.defaultRuleThickness, Q = 4 * H;
      if (h - o.depth - (c.height - f) < Q) {
        f = Q - (h - o.depth) + c.height;
        var W = 0.8 * d.xHeight - (h - o.depth);
        W > 0 && (h += W, f -= W);
      }
      var j = [{
        type: "elem",
        elem: c,
        shift: f,
        marginRight: I,
        marginLeft: y
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: I
      }];
      P = Ue({
        positionType: "individualShift",
        children: j
      });
    } else if (c) {
      f = Math.max(f, d.sub1, c.height - 0.8 * d.xHeight);
      var pe = [{
        type: "elem",
        elem: c,
        marginLeft: y,
        marginRight: I
      }];
      P = Ue({
        positionType: "shift",
        positionData: f,
        children: pe
      });
    } else if (o)
      h = Math.max(h, $, o.depth + 0.25 * d.xHeight), P = Ue({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: I
        }]
      });
    else
      throw new Error("supsub must have either sup or sub.");
    var Ce = ji(s, "right") || "mord";
    return F([Ce], [s, F(["msupsub"], [P])], e);
  },
  mathmlBuilder(t, e) {
    var r = !1, n, a;
    t.base && t.base.type === "horizBrace" && (a = !!t.sup, a === t.base.isOver && (r = !0, n = t.base.isOver)), t.base && (t.base.type === "op" || t.base.type === "operatorname") && (t.base.parentIsSupSub = !0);
    var i = [et(t.base, e)];
    t.sub && i.push(et(t.sub, e)), t.sup && i.push(et(t.sup, e));
    var s;
    if (r)
      s = n ? "mover" : "munder";
    else if (t.sub)
      if (t.sup) {
        var d = t.base;
        d && d.type === "op" && d.limits && e.style === Se.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === Se.DISPLAY || d.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var c = t.base;
        c && c.type === "op" && c.limits && (e.style === Se.DISPLAY || c.alwaysHandleSupSub) || c && c.type === "operatorname" && c.alwaysHandleSupSub && (c.limits || e.style === Se.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = t.base;
      o && o.type === "op" && o.limits && (e.style === Se.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === Se.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new U(s, i);
  }
});
Dn({
  type: "atom",
  htmlBuilder(t, e) {
    return Ss(t.text, t.mode, e, ["m" + t.family]);
  },
  mathmlBuilder(t, e) {
    var r = new U("mo", [er(t.text, t.mode)]);
    if (t.family === "bin") {
      var n = As(t, e);
      n === "bold-italic" && r.setAttribute("mathvariant", n);
    } else t.family === "punct" ? r.setAttribute("separator", "true") : (t.family === "open" || t.family === "close") && r.setAttribute("stretchy", "false");
    return r;
  }
});
var gu = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Dn({
  type: "mathord",
  htmlBuilder(t, e) {
    return Ha(t, e);
  },
  mathmlBuilder(t, e) {
    var r = new U("mi", [er(t.text, t.mode, e)]), n = As(t, e) || "italic";
    return n !== gu[r.type] && r.setAttribute("mathvariant", n), r;
  }
});
Dn({
  type: "textord",
  htmlBuilder(t, e) {
    return Ha(t, e);
  },
  mathmlBuilder(t, e) {
    var r = er(t.text, t.mode, e), n = As(t, e) || "normal", a;
    return t.mode === "text" ? a = new U("mtext", [r]) : /[0-9]/.test(t.text) ? a = new U("mn", [r]) : t.text === "\\prime" ? a = new U("mo", [r]) : a = new U("mi", [r]), n !== gu[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var vi = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, wi = {
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
Dn({
  type: "spacing",
  htmlBuilder(t, e) {
    if (wi.hasOwnProperty(t.text)) {
      var r = wi[t.text].className || "";
      if (t.mode === "text") {
        var n = Ha(t, e);
        return n.classes.push(r), n;
      } else
        return F(["mspace", r], [Ss(t.text, t.mode, e)], e);
    } else {
      if (vi.hasOwnProperty(t.text))
        return F(["mspace", vi[t.text]], [], e);
      throw new q('Unknown type of space "' + t.text + '"');
    }
  },
  mathmlBuilder(t, e) {
    var r;
    if (wi.hasOwnProperty(t.text))
      r = new U("mtext", [new bt(" ")]);
    else {
      if (vi.hasOwnProperty(t.text))
        return new U("mspace");
      throw new q('Unknown type of space "' + t.text + '"');
    }
    return r;
  }
});
var Sl = () => {
  var t = new U("mtd", []);
  return t.setAttribute("width", "50%"), t;
};
Dn({
  type: "tag",
  mathmlBuilder(t, e) {
    var r = new U("mtable", [new U("mtr", [Sl(), new U("mtd", [bn(t.body, e)]), Sl(), new U("mtd", [bn(t.tag, e)])])]);
    return r.setAttribute("width", "100%"), r;
  }
});
var _l = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, Cl = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Vf = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Al = (t, e) => {
  var r = t.font;
  if (r) {
    if (_l[r])
      return e.withTextFontFamily(_l[r]);
    if (Cl[r])
      return e.withTextFontWeight(Cl[r]);
    if (r === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Vf[r]);
};
re({
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
  handler(t, e) {
    var {
      parser: r,
      funcName: n
    } = t, a = e[0];
    return {
      type: "text",
      mode: r.mode,
      body: gt(a),
      font: n
    };
  },
  htmlBuilder(t, e) {
    var r = Al(t, e), n = kt(t.body, r, !0);
    return F(["mord", "text"], n, r);
  },
  mathmlBuilder(t, e) {
    var r = Al(t, e);
    return bn(t.body, r);
  }
});
re({
  type: "underline",
  names: ["\\underline"],
  numArgs: 1,
  allowedInText: !0,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "underline",
      mode: r.mode,
      body: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = Ve(t.body, e), n = l0("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = Ue({
      positionType: "top",
      positionData: r.height,
      children: [{
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: n
      }, {
        type: "kern",
        size: 3 * a
      }, {
        type: "elem",
        elem: r
      }]
    });
    return F(["mord", "underline"], [i], e);
  },
  mathmlBuilder(t, e) {
    var r = new U("mo", [new bt("‾")]);
    r.setAttribute("stretchy", "true");
    var n = new U("munder", [et(t.body, e), r]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
re({
  type: "vcenter",
  names: ["\\vcenter"],
  numArgs: 1,
  argTypes: ["original"],
  // In LaTeX, \vcenter can act only on a box.
  allowedInText: !1,
  handler(t, e) {
    var {
      parser: r
    } = t;
    return {
      type: "vcenter",
      mode: r.mode,
      body: e[0]
    };
  },
  htmlBuilder(t, e) {
    var r = Ve(t.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (r.height - n - (r.depth + n));
    return Ue({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: r
      }]
    });
  },
  mathmlBuilder(t, e) {
    var r = new U("mpadded", [et(t.body, e)], ["vcenter"]);
    return new U("mrow", [r]);
  }
});
re({
  type: "verb",
  names: ["\\verb"],
  numArgs: 0,
  allowedInText: !0,
  handler(t, e, r) {
    throw new q("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(t, e) {
    for (var r = Tl(t), n = [], a = e.havingStyle(e.style.text()), i = 0; i < r.length; i++) {
      var s = r[i];
      s === "~" && (s = "\\textasciitilde"), n.push(Rt(s, "Typewriter-Regular", t.mode, a, ["mord", "texttt"]));
    }
    return F(["mord", "text"].concat(a.sizingClasses(e)), Lc(n), a);
  },
  mathmlBuilder(t, e) {
    var r = new bt(Tl(t)), n = new U("mtext", [r]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var Tl = (t) => t.body.replace(/ /g, t.star ? "␣" : " "), hn = qc, bu = `[ \r
	]`, jf = "\\\\[a-zA-Z@]+", Gf = "\\\\[^\uD800-\uDFFF]", Wf = "(" + jf + ")" + bu + "*", Zf = `\\\\(
|[ \r	]+
?)[ \r	]*`, Yi = "[̀-ͯ]", Kf = new RegExp(Yi + "+$"), Xf = "(" + bu + "+)|" + // whitespace
(Zf + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(Yi + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(Yi + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Wf) + // \macroName + spaces
("|" + Gf + ")");
class $l {
  constructor(e, r) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = r, this.tokenRegex = new RegExp(Xf, "g"), this.catcodes = {
      "%": 14,
      // comment character
      "~": 13
      // active character
    };
  }
  setCatcode(e, r) {
    this.catcodes[e] = r;
  }
  /**
   * This function lexes a single token.
   */
  lex() {
    var e = this.input, r = this.tokenRegex.lastIndex;
    if (r === e.length)
      return new jt("EOF", new Pt(this, r, r));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== r)
      throw new q("Unexpected character: '" + e[r] + "'", new jt(e[r], new Pt(this, r, r + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new jt(a, new Pt(this, r, this.tokenRegex.lastIndex));
  }
}
class Yf {
  /**
   * Both arguments are optional.  The first argument is an object of
   * built-in mappings which never change.  The second argument is an object
   * of initial (global-level) mappings, which will constantly change
   * according to any global/top-level `set`s done.
   */
  constructor(e, r) {
    e === void 0 && (e = {}), r === void 0 && (r = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = r, this.builtins = e, this.undefStack = [];
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
      throw new q("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
    var e = this.undefStack.pop();
    for (var r in e)
      e.hasOwnProperty(r) && (e[r] == null ? delete this.current[r] : this.current[r] = e[r]);
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
  set(e, r, n) {
    if (n === void 0 && (n = !1), n) {
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = r);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    r == null ? delete this.current[e] : this.current[e] = r;
  }
}
var Jf = ou;
m("\\noexpand", function(t) {
  var e = t.popToken();
  return t.isExpandable(e.text) && (e.noexpand = !0, e.treatAsRelax = !0), {
    tokens: [e],
    numArgs: 0
  };
});
m("\\expandafter", function(t) {
  var e = t.popToken();
  return t.expandOnce(!0), {
    tokens: [e],
    numArgs: 0
  };
});
m("\\@firstoftwo", function(t) {
  var e = t.consumeArgs(2);
  return {
    tokens: e[0],
    numArgs: 0
  };
});
m("\\@secondoftwo", function(t) {
  var e = t.consumeArgs(2);
  return {
    tokens: e[1],
    numArgs: 0
  };
});
m("\\@ifnextchar", function(t) {
  var e = t.consumeArgs(3);
  t.consumeSpaces();
  var r = t.future();
  return e[0].length === 1 && e[0][0].text === r.text ? {
    tokens: e[1],
    numArgs: 0
  } : {
    tokens: e[2],
    numArgs: 0
  };
});
m("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
m("\\TextOrMath", function(t) {
  var e = t.consumeArgs(2);
  return t.mode === "text" ? {
    tokens: e[0],
    numArgs: 0
  } : {
    tokens: e[1],
    numArgs: 0
  };
});
var Ml = {
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
m("\\char", function(t) {
  var e = t.popToken(), r, n = 0;
  if (e.text === "'")
    r = 8, e = t.popToken();
  else if (e.text === '"')
    r = 16, e = t.popToken();
  else if (e.text === "`")
    if (e = t.popToken(), e.text[0] === "\\")
      n = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF")
        throw new q("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    r = 10;
  if (r) {
    if (n = Ml[e.text], n == null || n >= r)
      throw new q("Invalid base-" + r + " digit " + e.text);
    for (var a; (a = Ml[t.future().text]) != null && a < r; )
      n *= r, n += a, t.popToken();
  }
  return "\\@char{" + n + "}";
});
var Es = (t, e, r, n) => {
  var a = t.consumeArg().tokens;
  if (a.length !== 1)
    throw new q("\\newcommand's first argument must be a macro name");
  var i = a[0].text, s = t.isDefined(i);
  if (s && !e)
    throw new q("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!s && !r)
    throw new q("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var o = 0;
  if (a = t.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var c = "", d = t.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      c += d.text, d = t.expandNextToken();
    if (!c.match(/^\s*[0-9]+\s*$/))
      throw new q("Invalid number of arguments: " + c);
    o = parseInt(c), a = t.consumeArg().tokens;
  }
  return s && n || t.macros.set(i, {
    tokens: a,
    numArgs: o
  }), "";
};
m("\\newcommand", (t) => Es(t, !1, !0, !1));
m("\\renewcommand", (t) => Es(t, !0, !1, !1));
m("\\providecommand", (t) => Es(t, !0, !0, !0));
m("\\message", (t) => {
  var e = t.consumeArgs(1)[0];
  return console.log(e.reverse().map((r) => r.text).join("")), "";
});
m("\\errmessage", (t) => {
  var e = t.consumeArgs(1)[0];
  return console.error(e.reverse().map((r) => r.text).join("")), "";
});
m("\\show", (t) => {
  var e = t.popToken(), r = e.text;
  return console.log(e, t.macros.get(r), hn[r], st.math[r], st.text[r]), "";
});
m("\\bgroup", "{");
m("\\egroup", "}");
m("~", "\\nobreakspace");
m("\\lq", "`");
m("\\rq", "'");
m("\\aa", "\\r a");
m("\\AA", "\\r A");
m("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`©}");
m("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
m("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");
m("ℬ", "\\mathscr{B}");
m("ℰ", "\\mathscr{E}");
m("ℱ", "\\mathscr{F}");
m("ℋ", "\\mathscr{H}");
m("ℐ", "\\mathscr{I}");
m("ℒ", "\\mathscr{L}");
m("ℳ", "\\mathscr{M}");
m("ℛ", "\\mathscr{R}");
m("ℭ", "\\mathfrak{C}");
m("ℌ", "\\mathfrak{H}");
m("ℨ", "\\mathfrak{Z}");
m("\\Bbbk", "\\Bbb{k}");
m("\\llap", "\\mathllap{\\textrm{#1}}");
m("\\rlap", "\\mathrlap{\\textrm{#1}}");
m("\\clap", "\\mathclap{\\textrm{#1}}");
m("\\mathstrut", "\\vphantom{(}");
m("\\underbar", "\\underline{\\text{#1}}");
m("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
m("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");
m("\\ne", "\\neq");
m("≠", "\\neq");
m("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");
m("∉", "\\notin");
m("≘", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");
m("≙", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");
m("≚", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");
m("≛", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");
m("≝", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");
m("≞", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");
m("≟", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");
m("⟂", "\\perp");
m("‼", "\\mathclose{!\\mkern-0.8mu!}");
m("∌", "\\notni");
m("⌜", "\\ulcorner");
m("⌝", "\\urcorner");
m("⌞", "\\llcorner");
m("⌟", "\\lrcorner");
m("©", "\\copyright");
m("®", "\\textregistered");
m("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
m("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
m("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
m("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
m("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
m("⋮", "\\vdots");
m("\\varGamma", "\\mathit{\\Gamma}");
m("\\varDelta", "\\mathit{\\Delta}");
m("\\varTheta", "\\mathit{\\Theta}");
m("\\varLambda", "\\mathit{\\Lambda}");
m("\\varXi", "\\mathit{\\Xi}");
m("\\varPi", "\\mathit{\\Pi}");
m("\\varSigma", "\\mathit{\\Sigma}");
m("\\varUpsilon", "\\mathit{\\Upsilon}");
m("\\varPhi", "\\mathit{\\Phi}");
m("\\varPsi", "\\mathit{\\Psi}");
m("\\varOmega", "\\mathit{\\Omega}");
m("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
m("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
m("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
m("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
m("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
m("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
m("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
m("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
var El = {
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
}, Qf = /* @__PURE__ */ new Set(["bin", "rel"]);
m("\\dots", function(t) {
  var e = "\\dotso", r = t.expandAfterFuture().text;
  return r in El ? e = El[r] : (r.slice(0, 4) === "\\not" || r in st.math && Qf.has(st.math[r].group)) && (e = "\\dotsb"), e;
});
var Is = {
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
m("\\dotso", function(t) {
  var e = t.future().text;
  return e in Is ? "\\ldots\\," : "\\ldots";
});
m("\\dotsc", function(t) {
  var e = t.future().text;
  return e in Is && e !== "," ? "\\ldots\\," : "\\ldots";
});
m("\\cdots", function(t) {
  var e = t.future().text;
  return e in Is ? "\\@cdots\\," : "\\@cdots";
});
m("\\dotsb", "\\cdots");
m("\\dotsm", "\\cdots");
m("\\dotsi", "\\!\\cdots");
m("\\dotsx", "\\ldots\\,");
m("\\DOTSI", "\\relax");
m("\\DOTSB", "\\relax");
m("\\DOTSX", "\\relax");
m("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
m("\\,", "\\tmspace+{3mu}{.1667em}");
m("\\thinspace", "\\,");
m("\\>", "\\mskip{4mu}");
m("\\:", "\\tmspace+{4mu}{.2222em}");
m("\\medspace", "\\:");
m("\\;", "\\tmspace+{5mu}{.2777em}");
m("\\thickspace", "\\;");
m("\\!", "\\tmspace-{3mu}{.1667em}");
m("\\negthinspace", "\\!");
m("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
m("\\negthickspace", "\\tmspace-{5mu}{.277em}");
m("\\enspace", "\\kern.5em ");
m("\\enskip", "\\hskip.5em\\relax");
m("\\quad", "\\hskip1em\\relax");
m("\\qquad", "\\hskip2em\\relax");
m("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
m("\\tag@paren", "\\tag@literal{({#1})}");
m("\\tag@literal", (t) => {
  if (t.macros.get("\\df@tag"))
    throw new q("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
m("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
m("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
m("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
m("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
m("\\newline", "\\\\\\relax");
m("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var vu = G(Tr["Main-Regular"][84][1] - 0.7 * Tr["Main-Regular"][65][1]);
m("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + vu + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
m("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + vu + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
m("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
m("\\@hspace", "\\hskip #1\\relax");
m("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
m("\\ordinarycolon", ":");
m("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
m("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
m("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
m("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
m("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
m("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
m("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
m("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
m("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
m("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
m("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
m("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
m("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
m("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
m("∷", "\\dblcolon");
m("∹", "\\eqcolon");
m("≔", "\\coloneqq");
m("≕", "\\eqqcolon");
m("⩴", "\\Coloneqq");
m("\\ratio", "\\vcentcolon");
m("\\coloncolon", "\\dblcolon");
m("\\colonequals", "\\coloneqq");
m("\\coloncolonequals", "\\Coloneqq");
m("\\equalscolon", "\\eqqcolon");
m("\\equalscoloncolon", "\\Eqqcolon");
m("\\colonminus", "\\coloneq");
m("\\coloncolonminus", "\\Coloneq");
m("\\minuscolon", "\\eqcolon");
m("\\minuscoloncolon", "\\Eqcolon");
m("\\coloncolonapprox", "\\Colonapprox");
m("\\coloncolonsim", "\\Colonsim");
m("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
m("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
m("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");
m("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
m("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
m("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
m("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
m("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
m("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
m("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
m("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
m("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{≩}");
m("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{≨}");
m("\\ngeqq", "\\html@mathml{\\@ngeqq}{≱}");
m("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{≱}");
m("\\nleqq", "\\html@mathml{\\@nleqq}{≰}");
m("\\nleqslant", "\\html@mathml{\\@nleqslant}{≰}");
m("\\nshortmid", "\\html@mathml{\\@nshortmid}{∤}");
m("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{∦}");
m("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{⊈}");
m("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{⊉}");
m("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{⊊}");
m("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{⫋}");
m("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{⊋}");
m("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{⫌}");
m("\\imath", "\\html@mathml{\\@imath}{ı}");
m("\\jmath", "\\html@mathml{\\@jmath}{ȷ}");
m("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");
m("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");
m("⟦", "\\llbracket");
m("⟧", "\\rrbracket");
m("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");
m("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");
m("⦃", "\\lBrace");
m("⦄", "\\rBrace");
m("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");
m("⦵", "\\minuso");
m("\\darr", "\\downarrow");
m("\\dArr", "\\Downarrow");
m("\\Darr", "\\Downarrow");
m("\\lang", "\\langle");
m("\\rang", "\\rangle");
m("\\uarr", "\\uparrow");
m("\\uArr", "\\Uparrow");
m("\\Uarr", "\\Uparrow");
m("\\N", "\\mathbb{N}");
m("\\R", "\\mathbb{R}");
m("\\Z", "\\mathbb{Z}");
m("\\alef", "\\aleph");
m("\\alefsym", "\\aleph");
m("\\Alpha", "\\mathrm{A}");
m("\\Beta", "\\mathrm{B}");
m("\\bull", "\\bullet");
m("\\Chi", "\\mathrm{X}");
m("\\clubs", "\\clubsuit");
m("\\cnums", "\\mathbb{C}");
m("\\Complex", "\\mathbb{C}");
m("\\Dagger", "\\ddagger");
m("\\diamonds", "\\diamondsuit");
m("\\empty", "\\emptyset");
m("\\Epsilon", "\\mathrm{E}");
m("\\Eta", "\\mathrm{H}");
m("\\exist", "\\exists");
m("\\harr", "\\leftrightarrow");
m("\\hArr", "\\Leftrightarrow");
m("\\Harr", "\\Leftrightarrow");
m("\\hearts", "\\heartsuit");
m("\\image", "\\Im");
m("\\infin", "\\infty");
m("\\Iota", "\\mathrm{I}");
m("\\isin", "\\in");
m("\\Kappa", "\\mathrm{K}");
m("\\larr", "\\leftarrow");
m("\\lArr", "\\Leftarrow");
m("\\Larr", "\\Leftarrow");
m("\\lrarr", "\\leftrightarrow");
m("\\lrArr", "\\Leftrightarrow");
m("\\Lrarr", "\\Leftrightarrow");
m("\\Mu", "\\mathrm{M}");
m("\\natnums", "\\mathbb{N}");
m("\\Nu", "\\mathrm{N}");
m("\\Omicron", "\\mathrm{O}");
m("\\plusmn", "\\pm");
m("\\rarr", "\\rightarrow");
m("\\rArr", "\\Rightarrow");
m("\\Rarr", "\\Rightarrow");
m("\\real", "\\Re");
m("\\reals", "\\mathbb{R}");
m("\\Reals", "\\mathbb{R}");
m("\\Rho", "\\mathrm{P}");
m("\\sdot", "\\cdot");
m("\\sect", "\\S");
m("\\spades", "\\spadesuit");
m("\\sub", "\\subset");
m("\\sube", "\\subseteq");
m("\\supe", "\\supseteq");
m("\\Tau", "\\mathrm{T}");
m("\\thetasym", "\\vartheta");
m("\\weierp", "\\wp");
m("\\Zeta", "\\mathrm{Z}");
m("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
m("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
m("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
m("\\bra", "\\mathinner{\\langle{#1}|}");
m("\\ket", "\\mathinner{|{#1}\\rangle}");
m("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
m("\\Bra", "\\left\\langle#1\\right|");
m("\\Ket", "\\left|#1\\right\\rangle");
var wu = (t) => (e) => {
  var r = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var c = (f) => (b) => {
    t && (b.macros.set("|", s), a.length && b.macros.set("\\|", o));
    var v = f;
    if (!f && a.length) {
      var k = b.future();
      k.text === "|" && (b.popToken(), v = !0);
    }
    return {
      tokens: v ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", c(!1)), a.length && e.macros.set("\\|", c(!0));
  var d = e.consumeArg().tokens, h = e.expandTokens([
    ...i,
    ...d,
    ...r
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
m("\\bra@ket", wu(!1));
m("\\bra@set", wu(!0));
m("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
m("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
m("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
m("\\angln", "{\\angl n}");
m("\\blue", "\\textcolor{##6495ed}{#1}");
m("\\orange", "\\textcolor{##ffa500}{#1}");
m("\\pink", "\\textcolor{##ff00af}{#1}");
m("\\red", "\\textcolor{##df0030}{#1}");
m("\\green", "\\textcolor{##28ae7b}{#1}");
m("\\gray", "\\textcolor{gray}{#1}");
m("\\purple", "\\textcolor{##9d38bd}{#1}");
m("\\blueA", "\\textcolor{##ccfaff}{#1}");
m("\\blueB", "\\textcolor{##80f6ff}{#1}");
m("\\blueC", "\\textcolor{##63d9ea}{#1}");
m("\\blueD", "\\textcolor{##11accd}{#1}");
m("\\blueE", "\\textcolor{##0c7f99}{#1}");
m("\\tealA", "\\textcolor{##94fff5}{#1}");
m("\\tealB", "\\textcolor{##26edd5}{#1}");
m("\\tealC", "\\textcolor{##01d1c1}{#1}");
m("\\tealD", "\\textcolor{##01a995}{#1}");
m("\\tealE", "\\textcolor{##208170}{#1}");
m("\\greenA", "\\textcolor{##b6ffb0}{#1}");
m("\\greenB", "\\textcolor{##8af281}{#1}");
m("\\greenC", "\\textcolor{##74cf70}{#1}");
m("\\greenD", "\\textcolor{##1fab54}{#1}");
m("\\greenE", "\\textcolor{##0d923f}{#1}");
m("\\goldA", "\\textcolor{##ffd0a9}{#1}");
m("\\goldB", "\\textcolor{##ffbb71}{#1}");
m("\\goldC", "\\textcolor{##ff9c39}{#1}");
m("\\goldD", "\\textcolor{##e07d10}{#1}");
m("\\goldE", "\\textcolor{##a75a05}{#1}");
m("\\redA", "\\textcolor{##fca9a9}{#1}");
m("\\redB", "\\textcolor{##ff8482}{#1}");
m("\\redC", "\\textcolor{##f9685d}{#1}");
m("\\redD", "\\textcolor{##e84d39}{#1}");
m("\\redE", "\\textcolor{##bc2612}{#1}");
m("\\maroonA", "\\textcolor{##ffbde0}{#1}");
m("\\maroonB", "\\textcolor{##ff92c6}{#1}");
m("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
m("\\maroonD", "\\textcolor{##ca337c}{#1}");
m("\\maroonE", "\\textcolor{##9e034e}{#1}");
m("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
m("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
m("\\purpleC", "\\textcolor{##aa87ff}{#1}");
m("\\purpleD", "\\textcolor{##7854ab}{#1}");
m("\\purpleE", "\\textcolor{##543b78}{#1}");
m("\\mintA", "\\textcolor{##f5f9e8}{#1}");
m("\\mintB", "\\textcolor{##edf2df}{#1}");
m("\\mintC", "\\textcolor{##e0e5cc}{#1}");
m("\\grayA", "\\textcolor{##f6f7f7}{#1}");
m("\\grayB", "\\textcolor{##f0f1f2}{#1}");
m("\\grayC", "\\textcolor{##e3e5e6}{#1}");
m("\\grayD", "\\textcolor{##d6d8da}{#1}");
m("\\grayE", "\\textcolor{##babec2}{#1}");
m("\\grayF", "\\textcolor{##888d93}{#1}");
m("\\grayG", "\\textcolor{##626569}{#1}");
m("\\grayH", "\\textcolor{##3b3e40}{#1}");
m("\\grayI", "\\textcolor{##21242c}{#1}");
m("\\kaBlue", "\\textcolor{##314453}{#1}");
m("\\kaGreen", "\\textcolor{##71B307}{#1}");
var xu = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class e4 {
  constructor(e, r, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = r, this.expansionCount = 0, this.feed(e), this.macros = new Yf(Jf, r.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new $l(e, this.settings);
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
    var r, n, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      r = this.popToken(), {
        tokens: a,
        end: n
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: r,
        end: n
      } = this.consumeArg());
    return this.pushToken(new jt("EOF", n.loc)), this.pushTokens(a), new jt("", Pt.range(r, n));
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
    var r = [], n = e && e.length > 0;
    n || this.consumeSpaces();
    var a = this.future(), i, s = 0, o = 0;
    do {
      if (i = this.popToken(), r.push(i), i.text === "{")
        ++s;
      else if (i.text === "}") {
        if (--s, s === -1)
          throw new q("Extra }", i);
      } else if (i.text === "EOF")
        throw new q("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", i);
      if (e && n)
        if ((s === 0 || s === 1 && e[o] === "{") && i.text === e[o]) {
          if (++o, o === e.length) {
            r.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (s !== 0 || n);
    return a.text === "{" && r[r.length - 1].text === "}" && (r.pop(), r.shift()), r.reverse(), {
      tokens: r,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, r) {
    if (r) {
      if (r.length !== e + 1)
        throw new q("The length of delimiters doesn't match the number of args!");
      for (var n = r[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new q("Use of the macro doesn't match its definition", i);
      }
    }
    for (var s = [], o = 0; o < e; o++)
      s.push(this.consumeArg(r && r[o + 1]).tokens);
    return s;
  }
  /**
   * Increment `expansionCount` by the specified amount.
   * Throw an error if it exceeds `maxExpand`.
   */
  countExpansion(e) {
    if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand)
      throw new q("Too many expansions: infinite loop or need to increase maxExpand setting");
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
    var r = this.popToken(), n = r.text, a = r.noexpand ? null : this._getExpansion(n);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && n[0] === "\\" && !this.isDefined(n))
        throw new q("Undefined control sequence: " + n);
      return this.pushToken(r), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, s = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o];
        if (c.text === "#") {
          if (o === 0)
            throw new q("Incomplete placeholder at end of macro body", c);
          if (c = i[--o], c.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(c.text))
            i.splice(o, 2, ...s[+c.text - 1]);
          else
            throw new q("Not a valid argument number", c);
        }
      }
    }
    return this.pushTokens(i), i.length;
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
    return this.macros.has(e) ? this.expandTokens([new jt(e)]) : void 0;
  }
  /**
   * Fully expand the given token stream and return the resulting list of
   * tokens.  Note that the input tokens are in reverse order, but the
   * output tokens are in forward order.
   */
  expandTokens(e) {
    var r = [], n = this.stack.length;
    for (this.pushTokens(e); this.stack.length > n; )
      if (this.expandOnce(!0) === !1) {
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), r.push(a);
      }
    return this.countExpansion(r.length), r;
  }
  /**
   * Fully expand the given macro name and return the result as a string,
   * or return `undefined` if no such macro is defined.
   */
  expandMacroAsText(e) {
    var r = this.expandMacro(e);
    return r && r.map((n) => n.text).join("");
  }
  /**
   * Returns the expanded macro as a reversed array of tokens and a macro
   * argument count.  Or returns `null` if no such macro.
   */
  _getExpansion(e) {
    var r = this.macros.get(e);
    if (r == null)
      return r;
    if (e.length === 1) {
      var n = this.lexer.catcodes[e];
      if (n != null && n !== 13)
        return;
    }
    var a = typeof r == "function" ? r(this) : r;
    if (typeof a == "string") {
      var i = 0;
      if (a.includes("#"))
        for (var s = a.replace(/##/g, ""); s.includes("#" + (i + 1)); )
          ++i;
      for (var o = new $l(a, this.settings), c = [], d = o.lex(); d.text !== "EOF"; )
        c.push(d), d = o.lex();
      c.reverse();
      var h = {
        tokens: c,
        numArgs: i
      };
      return h;
    }
    return a;
  }
  /**
   * Determine whether a command is currently "defined" (has some
   * functionality), meaning that it's a macro (in the current group),
   * a function, a symbol, or one of the special commands listed in
   * `implicitCommands`.
   */
  isDefined(e) {
    return this.macros.has(e) || hn.hasOwnProperty(e) || st.math.hasOwnProperty(e) || st.text.hasOwnProperty(e) || xu.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var r = this.macros.get(e);
    return r != null ? typeof r == "string" || typeof r == "function" || !r.unexpandable : hn.hasOwnProperty(e) && !hn[e].primitive;
  }
}
var Il = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, fa = Object.freeze({
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
}), xi = {
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
}, zl = {
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
class Ka {
  constructor(e, r) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new e4(e, r, this.mode), this.settings = r, this.leftrightDepth = 0, this.nextToken = null;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, r) {
    if (r === void 0 && (r = !0), this.fetch().text !== e)
      throw new q("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
    r && this.consume();
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
    var r = this.nextToken;
    this.consume(), this.gullet.pushToken(new jt("}")), this.gullet.pushTokens(e);
    var n = this.parseExpression(!1);
    return this.expect("}"), this.nextToken = r, n;
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
  parseExpression(e, r) {
    for (var n = []; ; ) {
      this.mode === "math" && this.consumeSpaces();
      var a = this.fetch();
      if (Ka.endOfExpression.has(a.text) || r && a.text === r || e && hn[a.text] && hn[a.text].infix)
        break;
      var i = this.parseAtom(r);
      if (i) {
        if (i.type === "internal")
          continue;
      } else break;
      n.push(i);
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
    for (var r = -1, n, a = 0; a < e.length; a++) {
      var i = e[a];
      if (i.type === "infix") {
        if (r !== -1)
          throw new q("only one infix operator per group", i.token);
        r = a, n = i.replaceWith;
      }
    }
    if (r !== -1 && n) {
      var s, o, c = e.slice(0, r), d = e.slice(r + 1);
      c.length === 1 && c[0].type === "ordgroup" ? s = c[0] : s = {
        type: "ordgroup",
        mode: this.mode,
        body: c
      }, d.length === 1 && d[0].type === "ordgroup" ? o = d[0] : o = {
        type: "ordgroup",
        mode: this.mode,
        body: d
      };
      var h;
      return n === "\\\\abovefrac" ? h = this.callFunction(n, [s, e[r], o], []) : h = this.callFunction(n, [s, o], []), [h];
    } else
      return e;
  }
  /**
   * Handle a subscript or superscript with nice errors.
   */
  handleSupSubscript(e) {
    var r = this.fetch(), n = r.text;
    this.consume(), this.consumeSpaces();
    var a;
    do {
      var i;
      a = this.parseGroup(e);
    } while (((i = a) == null ? void 0 : i.type) === "internal");
    if (!a)
      throw new q("Expected group after '" + n + "'", r);
    return a;
  }
  /**
   * Converts the textual input of an unsupported command into a text node
   * contained within a color node whose color is determined by errorColor
   */
  formatUnsupportedCmd(e) {
    for (var r = [], n = 0; n < e.length; n++)
      r.push({
        type: "textord",
        mode: "text",
        text: e[n]
      });
    var a = {
      type: "text",
      mode: this.mode,
      body: r
    }, i = {
      type: "color",
      mode: this.mode,
      color: this.settings.errorColor,
      body: [a]
    };
    return i;
  }
  /**
   * Parses a group with optional super/subscripts.
   */
  parseAtom(e) {
    var r = this.parseGroup("atom", e);
    if ((r == null ? void 0 : r.type) === "internal" || this.mode === "text")
      return r;
    for (var n, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (r && r.type === "op")
          r.limits = i.text === "\\limits", r.alwaysHandleSupSub = !0;
        else if (r && r.type === "operatorname")
          r.alwaysHandleSupSub && (r.limits = i.text === "\\limits");
        else
          throw new q("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n)
          throw new q("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new q("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n)
          throw new q("Double superscript", i);
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
      } else if (fa[i.text]) {
        var c = Il.test(i.text), d = [];
        for (d.push(new jt(fa[i.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!fa[h] || Il.test(h) !== c)
            break;
          d.unshift(new jt(fa[h])), this.consume();
        }
        var f = this.subparse(d);
        c ? a = {
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
    return n && a ? {
      type: "supsub",
      mode: this.mode,
      base: r,
      sup: n,
      sub: a
    } : n ? {
      type: "supsub",
      mode: this.mode,
      base: r,
      sup: n
    } : a ? {
      type: "supsub",
      mode: this.mode,
      base: r,
      sub: a
    } : r;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, r) {
    var n = this.fetch(), a = n.text, i = hn[a];
    if (!i)
      return null;
    if (this.consume(), r && r !== "atom" && !i.allowedInArgument)
      throw new q("Got function '" + a + "' with no arguments" + (r ? " as " + r : ""), n);
    if (this.mode === "text" && !i.allowedInText)
      throw new q("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new q("Can't use function '" + a + "' in math mode", n);
    var {
      args: s,
      optArgs: o
    } = this.parseArguments(a, i);
    return this.callFunction(a, s, o, n, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, r, n, a, i) {
    var s = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, o = hn[e];
    if (o && o.handler)
      return o.handler(s, r, n);
    throw new q("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, r) {
    var n, a = (n = r.numOptionalArgs) != null ? n : 0, i = r.numArgs + a;
    if (i === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var s = [], o = [], c = 0; c < i; c++) {
      var d, h = (d = r.argTypes) == null ? void 0 : d[c], f = c < a;
      ("primitive" in r && r.primitive && h == null || // \sqrt expands into primitive if optional argument doesn't exist
      r.type === "sqrt" && c === 1 && o[0] == null) && (h = "primitive");
      var b = this.parseGroupOfType("argument to '" + e + "'", h, f);
      if (f)
        o.push(b);
      else if (b != null)
        s.push(b);
      else
        throw new q("Null argument, please report this as a bug");
    }
    return {
      args: s,
      optArgs: o
    };
  }
  /**
   * Parses a group when the mode is changing.
   */
  parseGroupOfType(e, r, n) {
    switch (r) {
      case "color":
        return this.parseColorGroup(n);
      case "size":
        return this.parseSizeGroup(n);
      case "url":
        return this.parseUrlGroup(n);
      case "math":
      case "text":
        return this.parseArgumentGroup(n, r);
      case "hbox": {
        var a = this.parseArgumentGroup(n, "text");
        return a != null ? {
          type: "styling",
          mode: a.mode,
          body: [a],
          style: "text",
          // simulate \textstyle
          resetFont: !0
        } : null;
      }
      case "raw": {
        var i = this.parseStringGroup(n);
        return i != null ? {
          type: "raw",
          mode: "text",
          string: i.text
        } : null;
      }
      case "primitive": {
        if (n)
          throw new q("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new q("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new q("Unknown group type as " + e, this.fetch());
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
    var r = this.gullet.scanArgument(e);
    if (r == null)
      return null;
    for (var n = "", a; (a = this.fetch()).text !== "EOF"; )
      n += a.text, this.consume();
    return this.consume(), r.text = n, r;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, r) {
    for (var n = this.fetch(), a = n, i = "", s; (s = this.fetch()).text !== "EOF" && e.test(i + s.text); )
      a = s, i += a.text, this.consume();
    if (i === "")
      throw new q("Invalid " + r + ": '" + n.text + "'", n);
    return n.range(a, i);
  }
  /**
   * Parses a color description.
   */
  parseColorGroup(e) {
    var r = this.parseStringGroup(e);
    if (r == null)
      return null;
    var n = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(r.text);
    if (!n)
      throw new q("Invalid color: '" + r.text + "'", r);
    var a = n[0];
    return /^[0-9a-f]{6}$/i.test(a) && (a = "#" + a), {
      type: "color-token",
      mode: this.mode,
      color: a
    };
  }
  /**
   * Parses a size specification, consisting of magnitude and unit.
   */
  parseSizeGroup(e) {
    var r, n = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? r = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : r = this.parseStringGroup(e), !r)
      return null;
    !e && r.text.length === 0 && (r.text = "0pt", n = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(r.text);
    if (!a)
      throw new q("Invalid size: '" + r.text + "'", r);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!Nc(i))
      throw new q("Invalid unit: '" + i.unit + "'", r);
    return {
      type: "size",
      mode: this.mode,
      value: i,
      isBlank: n
    };
  }
  /**
   * Parses an URL, checking escaped letters and allowed protocols,
   * and setting the catcode of % as an active character (as in \hyperref).
   */
  parseUrlGroup(e) {
    this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
    var r = this.parseStringGroup(e);
    if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), r == null)
      return null;
    var n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
    return {
      type: "url",
      mode: this.mode,
      url: n
    };
  }
  /**
   * Parses an argument with the mode specified.
   */
  parseArgumentGroup(e, r) {
    var n = this.gullet.scanArgument(e);
    if (n == null)
      return null;
    var a = this.mode;
    r && this.switchMode(r), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var s = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: i
    };
    return r && this.switchMode(a), s;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, r) {
    var n = this.fetch(), a = n.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var s = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, s), c = this.fetch();
      this.expect(s), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Pt.range(n, c),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(r, e) || this.parseSymbol(), i == null && a[0] === "\\" && !xu.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new q("Undefined control sequence: " + a, n);
      i = this.formatUnsupportedCmd(a), this.consume();
    }
    return i;
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
    for (var r = e.length - 1, n = 0; n < r; ++n) {
      var a = e[n];
      if (a.type === "textord") {
        var i = a.text, s = e[n + 1];
        if (!(!s || s.type !== "textord")) {
          if (i === "-" && s.text === "-") {
            var o = e[n + 2];
            n + 1 < r && o && o.type === "textord" && o.text === "-" ? (e.splice(n, 3, {
              type: "textord",
              mode: "text",
              loc: Pt.range(a, o),
              text: "---"
            }), r -= 2) : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Pt.range(a, s),
              text: "--"
            }), r -= 1);
          }
          (i === "'" || i === "`") && s.text === i && (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: Pt.range(a, s),
            text: i + i
          }), r -= 1);
        }
      }
    }
  }
  /**
   * Parse a single symbol out of the string. Here, we handle single character
   * symbols and special functions like \verb.
   */
  parseSymbol() {
    var e = this.fetch(), r = e.text;
    if (/^\\verb[^a-zA-Z]/.test(r)) {
      this.consume();
      var n = r.slice(5), a = n.charAt(0) === "*";
      if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1))
        throw new q(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: a
      };
    }
    zl.hasOwnProperty(r[0]) && !st[this.mode][r[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + r[0] + '" used in math mode', e), r = zl[r[0]] + r.slice(1));
    var i = Kf.exec(r);
    i && (r = r.substring(0, i.index), r === "i" ? r = "ı" : r === "j" && (r = "ȷ"));
    var s;
    if (st[this.mode][r]) {
      this.settings.strict && this.mode === "math" && Di.includes(r) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + r[0] + '" used in math mode', e);
      var o = st[this.mode][r].group, c = Pt.range(e), d;
      sf(o) ? d = {
        type: "atom",
        mode: this.mode,
        family: o,
        loc: c,
        text: r
      } : d = {
        type: o,
        mode: this.mode,
        loc: c,
        text: r
      }, s = d;
    } else if (r.charCodeAt(0) >= 128)
      this.settings.strict && (zc(r.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + r[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + r[0] + '"' + (" (" + r.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Pt.range(e),
        text: r
      };
    else
      return null;
    if (this.consume(), i)
      for (var h = 0; h < i[0].length; h++) {
        var f = i[0][h];
        if (!xi[f])
          throw new q("Unknown accent ' " + f + "'", e);
        var b = xi[f][this.mode] || xi[f].text;
        if (!b)
          throw new q("Accent " + f + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Pt.range(e),
          label: b,
          isStretchy: !1,
          isShifty: !0,
          base: s
        };
      }
    return s;
  }
}
Ka.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var zs = function(e, r) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new Ka(e, r);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!r.displayMode)
      throw new q("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new jt("\\df@tag")])
    }];
  }
  return a;
}, yu = function(e, r, n) {
  r.textContent = "";
  var a = Ns(e, n).toNode();
  r.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), yu = function() {
  throw new q("KaTeX doesn't work in quirks mode.");
});
var t4 = function(e, r) {
  var n = Ns(e, r).toMarkup();
  return n;
}, r4 = function(e, r) {
  var n = new ws(r);
  return zs(e, n);
}, ku = function(e, r, n) {
  if (n.throwOnError || !(e instanceof q))
    throw e;
  var a = F(["katex-error"], [new Gt(r)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, Ns = function(e, r) {
  var n = new ws(r);
  try {
    var a = zs(e, n);
    return Yh(a, e, n);
  } catch (i) {
    return ku(i, e, n);
  }
}, n4 = function(e, r) {
  var n = new ws(r);
  try {
    var a = zs(e, n);
    return Jh(a, e, n);
  } catch (i) {
    return ku(i, e, n);
  }
}, a4 = "0.17.0", i4 = {
  Span: f0,
  Anchor: Fa,
  SymbolNode: Gt,
  SvgNode: Kr,
  PathNode: mn,
  LineNode: Bi
}, s4 = {
  /**
   * Current KaTeX version
   */
  version: a4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: yu,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: t4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: q,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Ni,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: r4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Ns,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: n4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: zh,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: l,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: re,
  /**
   * adds a new macro to builtin macro list
   */
  __defineMacro: m,
  /**
   * Expose the dom tree node types, which can be useful for type checking nodes.
   *
   * NOTE: These methods are not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __domTree: i4
};
const o4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, l4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, c4 = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function S2(t = {}) {
  return {
    extensions: [
      u4(t, Nl(t, !1)),
      d4(t, Nl(t, !0))
    ]
  };
}
function Nl(t, e) {
  return (r) => s4.renderToString(r.text, { ...t, displayMode: r.displayMode }) + (e ? `
` : "");
}
function u4(t, e) {
  const r = t && t.nonStandard, n = r ? l4 : o4;
  return {
    name: "inlineKatex",
    level: "inline",
    start(a) {
      let i, s = a;
      for (; s; ) {
        if (i = s.indexOf("$"), i === -1)
          return;
        if ((r ? i > -1 : i === 0 || s.charAt(i - 1) === " ") && s.substring(i).match(n))
          return i;
        s = s.substring(i + 1).replace(/^\$+/, "");
      }
    },
    tokenizer(a, i) {
      const s = a.match(n);
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
function d4(t, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(r, n) {
      const a = r.match(c4);
      if (a)
        return {
          type: "blockKatex",
          raw: a[0],
          text: a[2].trim(),
          displayMode: a[1].length === 2
        };
    },
    renderer: e
  };
}
function _2(t) {
  if (typeof t == "function" && (t = {
    highlight: t
  }), !t || typeof t.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof t.langPrefix != "string" && (t.langPrefix = "language-"), typeof t.emptyLangClass != "string" && (t.emptyLangClass = ""), {
    async: !!t.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const r = Rl(e.lang);
      if (t.async)
        return Promise.resolve(t.highlight(e.text, r, e.lang || "")).then(Ol(e));
      const n = t.highlight(e.text, r, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Ol(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, r, n) {
        typeof e == "object" && (n = e.escaped, r = e.lang, e = e.text);
        const a = Rl(r), i = a ? t.langPrefix + Dl(a) : t.emptyLangClass, s = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : Dl(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Rl(t) {
  return (t || "").match(/\S*/)[0];
}
function Ol(t) {
  return (e) => {
    typeof e == "string" && e !== t.text && (t.escaped = !0, t.text = e);
  };
}
const Su = /[&<>"']/, h4 = new RegExp(Su.source, "g"), _u = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, f4 = new RegExp(_u.source, "g"), p4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Bl = (t) => p4[t];
function Dl(t, e) {
  if (e) {
    if (Su.test(t))
      return t.replace(h4, Bl);
  } else if (_u.test(t))
    return t.replace(f4, Bl);
  return t;
}
var yi, Ll;
function m4() {
  if (Ll) return yi;
  Ll = 1;
  function t(S) {
    return S instanceof Map ? S.clear = S.delete = S.set = function() {
      throw new Error("map is read-only");
    } : S instanceof Set && (S.add = S.clear = S.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(S), Object.getOwnPropertyNames(S).forEach((N) => {
      const Z = S[N], we = typeof Z;
      (we === "object" || we === "function") && !Object.isFrozen(Z) && t(Z);
    }), S;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(N) {
      N.data === void 0 && (N.data = {}), this.data = N.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function r(S) {
    return S.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(S, ...N) {
    const Z = /* @__PURE__ */ Object.create(null);
    for (const we in S)
      Z[we] = S[we];
    return N.forEach(function(we) {
      for (const tt in we)
        Z[tt] = we[tt];
    }), /** @type {T} */
    Z;
  }
  const a = "</span>", i = (S) => !!S.scope, s = (S, { prefix: N }) => {
    if (S.startsWith("language:"))
      return S.replace("language:", "language-");
    if (S.includes(".")) {
      const Z = S.split(".");
      return [
        `${N}${Z.shift()}`,
        ...Z.map((we, tt) => `${we}${"_".repeat(tt + 1)}`)
      ].join(" ");
    }
    return `${N}${S}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(N, Z) {
      this.buffer = "", this.classPrefix = Z.classPrefix, N.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(N) {
      this.buffer += r(N);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(N) {
      if (!i(N)) return;
      const Z = s(
        N.scope,
        { prefix: this.classPrefix }
      );
      this.span(Z);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(N) {
      i(N) && (this.buffer += a);
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
    span(N) {
      this.buffer += `<span class="${N}">`;
    }
  }
  const c = (S = {}) => {
    const N = { children: [] };
    return Object.assign(N, S), N;
  };
  class d {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(N) {
      this.top.children.push(N);
    }
    /** @param {string} scope */
    openNode(N) {
      const Z = c({ scope: N });
      this.add(Z), this.stack.push(Z);
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
    walk(N) {
      return this.constructor._walk(N, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(N, Z) {
      return typeof Z == "string" ? N.addText(Z) : Z.children && (N.openNode(Z), Z.children.forEach((we) => this._walk(N, we)), N.closeNode(Z)), N;
    }
    /**
     * @param {Node} node
     */
    static _collapse(N) {
      typeof N != "string" && N.children && (N.children.every((Z) => typeof Z == "string") ? N.children = [N.children.join("")] : N.children.forEach((Z) => {
        d._collapse(Z);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(N) {
      super(), this.options = N;
    }
    /**
     * @param {string} text
     */
    addText(N) {
      N !== "" && this.add(N);
    }
    /** @param {string} scope */
    startScope(N) {
      this.openNode(N);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(N, Z) {
      const we = N.root;
      Z && (we.scope = `language:${Z}`), this.add(we);
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
  function b(S) {
    return $("(?=", S, ")");
  }
  function v(S) {
    return $("(?:", S, ")*");
  }
  function k(S) {
    return $("(?:", S, ")?");
  }
  function $(...S) {
    return S.map((Z) => f(Z)).join("");
  }
  function M(S) {
    const N = S[S.length - 1];
    return typeof N == "object" && N.constructor === Object ? (S.splice(S.length - 1, 1), N) : {};
  }
  function I(...S) {
    return "(" + (M(S).capture ? "" : "?:") + S.map((we) => f(we)).join("|") + ")";
  }
  function y(S) {
    return new RegExp(S.toString() + "|").exec("").length - 1;
  }
  function T(S, N) {
    const Z = S && S.exec(N);
    return Z && Z.index === 0;
  }
  const B = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function P(S, { joinWith: N }) {
    let Z = 0;
    return S.map((we) => {
      Z += 1;
      const tt = Z;
      let rt = f(we), K = "";
      for (; rt.length > 0; ) {
        const te = B.exec(rt);
        if (!te) {
          K += rt;
          break;
        }
        K += rt.substring(0, te.index), rt = rt.substring(te.index + te[0].length), te[0][0] === "\\" && te[1] ? K += "\\" + String(Number(te[1]) + tt) : (K += te[0], te[0] === "(" && Z++);
      }
      return K;
    }).map((we) => `(${we})`).join(N);
  }
  const H = /\b\B/, Q = "[a-zA-Z]\\w*", W = "[a-zA-Z_]\\w*", j = "\\b\\d+(\\.\\d+)?", pe = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Ce = "\\b(0b[01]+)", Ae = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Fe = (S = {}) => {
    const N = /^#![ ]*\//;
    return S.binary && (S.begin = $(
      N,
      /.*\b/,
      S.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: N,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (Z, we) => {
        Z.index !== 0 && we.ignoreMatch();
      }
    }, S);
  }, ze = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, D = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [ze]
  }, ne = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [ze]
  }, be = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, J = function(S, N, Z = {}) {
    const we = n(
      {
        scope: "comment",
        begin: S,
        end: N,
        contains: []
      },
      Z
    );
    we.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const tt = I(
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
    return we.contains.push(
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
        begin: $(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          tt,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), we;
  }, le = J("//", "$"), ie = J("/\\*", "\\*/"), Le = J("#", "$"), je = {
    scope: "number",
    begin: j,
    relevance: 0
  }, Ee = {
    scope: "number",
    begin: pe,
    relevance: 0
  }, ft = {
    scope: "number",
    begin: Ce,
    relevance: 0
  }, _t = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      ze,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [ze]
      }
    ]
  }, zr = {
    scope: "title",
    begin: Q,
    relevance: 0
  }, Me = {
    scope: "title",
    begin: W,
    relevance: 0
  }, Re = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + W,
    relevance: 0
  };
  var oe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: D,
    BACKSLASH_ESCAPE: ze,
    BINARY_NUMBER_MODE: ft,
    BINARY_NUMBER_RE: Ce,
    COMMENT: J,
    C_BLOCK_COMMENT_MODE: ie,
    C_LINE_COMMENT_MODE: le,
    C_NUMBER_MODE: Ee,
    C_NUMBER_RE: pe,
    END_SAME_AS_BEGIN: function(S) {
      return Object.assign(
        S,
        {
          /** @type {ModeCallback} */
          "on:begin": (N, Z) => {
            Z.data._beginMatch = N[1];
          },
          /** @type {ModeCallback} */
          "on:end": (N, Z) => {
            Z.data._beginMatch !== N[1] && Z.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Le,
    IDENT_RE: Q,
    MATCH_NOTHING_RE: H,
    METHOD_GUARD: Re,
    NUMBER_MODE: je,
    NUMBER_RE: j,
    PHRASAL_WORDS_MODE: be,
    QUOTE_STRING_MODE: ne,
    REGEXP_MODE: _t,
    RE_STARTERS_RE: Ae,
    SHEBANG: Fe,
    TITLE_MODE: zr,
    UNDERSCORE_IDENT_RE: W,
    UNDERSCORE_TITLE_MODE: Me
  });
  function Ct(S, N) {
    S.input[S.index - 1] === "." && N.ignoreMatch();
  }
  function Nr(S, N) {
    S.className !== void 0 && (S.scope = S.className, delete S.className);
  }
  function gr(S, N) {
    N && S.beginKeywords && (S.begin = "\\b(" + S.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", S.__beforeBegin = Ct, S.keywords = S.keywords || S.beginKeywords, delete S.beginKeywords, S.relevance === void 0 && (S.relevance = 0));
  }
  function tr(S, N) {
    Array.isArray(S.illegal) && (S.illegal = I(...S.illegal));
  }
  function xn(S, N) {
    if (S.match) {
      if (S.begin || S.end) throw new Error("begin & end are not supported with match");
      S.begin = S.match, delete S.match;
    }
  }
  function Rr(S, N) {
    S.relevance === void 0 && (S.relevance = 1);
  }
  const Qr = (S, N) => {
    if (!S.beforeMatch) return;
    if (S.starts) throw new Error("beforeMatch cannot be used with starts");
    const Z = Object.assign({}, S);
    Object.keys(S).forEach((we) => {
      delete S[we];
    }), S.keywords = Z.keywords, S.begin = $(Z.beforeMatch, b(Z.begin)), S.starts = {
      relevance: 0,
      contains: [
        Object.assign(Z, { endsParent: !0 })
      ]
    }, S.relevance = 0, delete Z.beforeMatch;
  }, br = [
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
  ], Or = "keyword";
  function Mt(S, N, Z = Or) {
    const we = /* @__PURE__ */ Object.create(null);
    return typeof S == "string" ? tt(Z, S.split(" ")) : Array.isArray(S) ? tt(Z, S) : Object.keys(S).forEach(function(rt) {
      Object.assign(
        we,
        Mt(S[rt], N, rt)
      );
    }), we;
    function tt(rt, K) {
      N && (K = K.map((te) => te.toLowerCase())), K.forEach(function(te) {
        const me = te.split("|");
        we[me[0]] = [rt, Br(me[0], me[1])];
      });
    }
  }
  function Br(S, N) {
    return N ? Number(N) : vr(S) ? 0 : 1;
  }
  function vr(S) {
    return br.includes(S.toLowerCase());
  }
  const rr = {}, Et = (S) => {
    console.error(S);
  }, wr = (S, ...N) => {
    console.log(`WARN: ${S}`, ...N);
  }, Ht = (S, N) => {
    rr[`${S}/${N}`] || (console.log(`Deprecated as of ${S}. ${N}`), rr[`${S}/${N}`] = !0);
  }, nr = new Error();
  function Lt(S, N, { key: Z }) {
    let we = 0;
    const tt = S[Z], rt = {}, K = {};
    for (let te = 1; te <= N.length; te++)
      K[te + we] = tt[te], rt[te + we] = !0, we += y(N[te - 1]);
    S[Z] = K, S[Z]._emit = rt, S[Z]._multi = !0;
  }
  function xr(S) {
    if (Array.isArray(S.begin)) {
      if (S.skip || S.excludeBegin || S.returnBegin)
        throw Et("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), nr;
      if (typeof S.beginScope != "object" || S.beginScope === null)
        throw Et("beginScope must be object"), nr;
      Lt(S, S.begin, { key: "beginScope" }), S.begin = P(S.begin, { joinWith: "" });
    }
  }
  function yn(S) {
    if (Array.isArray(S.end)) {
      if (S.skip || S.excludeEnd || S.returnEnd)
        throw Et("skip, excludeEnd, returnEnd not compatible with endScope: {}"), nr;
      if (typeof S.endScope != "object" || S.endScope === null)
        throw Et("endScope must be object"), nr;
      Lt(S, S.end, { key: "endScope" }), S.end = P(S.end, { joinWith: "" });
    }
  }
  function m0(S) {
    S.scope && typeof S.scope == "object" && S.scope !== null && (S.beginScope = S.scope, delete S.scope);
  }
  function Dr(S) {
    m0(S), typeof S.beginScope == "string" && (S.beginScope = { _wrap: S.beginScope }), typeof S.endScope == "string" && (S.endScope = { _wrap: S.endScope }), xr(S), yn(S);
  }
  function ar(S) {
    function N(K, te) {
      return new RegExp(
        f(K),
        "m" + (S.case_insensitive ? "i" : "") + (S.unicodeRegex ? "u" : "") + (te ? "g" : "")
      );
    }
    class Z {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(te, me) {
        me.position = this.position++, this.matchIndexes[this.matchAt] = me, this.regexes.push([me, te]), this.matchAt += y(te) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const te = this.regexes.map((me) => me[1]);
        this.matcherRe = N(P(te, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(te) {
        this.matcherRe.lastIndex = this.lastIndex;
        const me = this.matcherRe.exec(te);
        if (!me)
          return null;
        const nt = me.findIndex((sr, or) => or > 0 && sr !== void 0), qe = this.matchIndexes[nt];
        return me.splice(0, nt), Object.assign(me, qe);
      }
    }
    class we {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(te) {
        if (this.multiRegexes[te]) return this.multiRegexes[te];
        const me = new Z();
        return this.rules.slice(te).forEach(([nt, qe]) => me.addRule(nt, qe)), me.compile(), this.multiRegexes[te] = me, me;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(te, me) {
        this.rules.push([te, me]), me.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(te) {
        const me = this.getMatcher(this.regexIndex);
        me.lastIndex = this.lastIndex;
        let nt = me.exec(te);
        if (this.resumingScanAtSamePosition() && !(nt && nt.index === this.lastIndex)) {
          const qe = this.getMatcher(0);
          qe.lastIndex = this.lastIndex + 1, nt = qe.exec(te);
        }
        return nt && (this.regexIndex += nt.position + 1, this.regexIndex === this.count && this.considerAll()), nt;
      }
    }
    function tt(K) {
      const te = new we();
      return K.contains.forEach((me) => te.addRule(me.begin, { rule: me, type: "begin" })), K.terminatorEnd && te.addRule(K.terminatorEnd, { type: "end" }), K.illegal && te.addRule(K.illegal, { type: "illegal" }), te;
    }
    function rt(K, te) {
      const me = (
        /** @type CompiledMode */
        K
      );
      if (K.isCompiled) return me;
      [
        Nr,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        xn,
        Dr,
        Qr
      ].forEach((qe) => qe(K, te)), S.compilerExtensions.forEach((qe) => qe(K, te)), K.__beforeBegin = null, [
        gr,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        tr,
        // default to 1 relevance if not specified
        Rr
      ].forEach((qe) => qe(K, te)), K.isCompiled = !0;
      let nt = null;
      return typeof K.keywords == "object" && K.keywords.$pattern && (K.keywords = Object.assign({}, K.keywords), nt = K.keywords.$pattern, delete K.keywords.$pattern), nt = nt || /\w+/, K.keywords && (K.keywords = Mt(K.keywords, S.case_insensitive)), me.keywordPatternRe = N(nt, !0), te && (K.begin || (K.begin = /\B|\b/), me.beginRe = N(me.begin), !K.end && !K.endsWithParent && (K.end = /\B|\b/), K.end && (me.endRe = N(me.end)), me.terminatorEnd = f(me.end) || "", K.endsWithParent && te.terminatorEnd && (me.terminatorEnd += (K.end ? "|" : "") + te.terminatorEnd)), K.illegal && (me.illegalRe = N(
        /** @type {RegExp | string} */
        K.illegal
      )), K.contains || (K.contains = []), K.contains = [].concat(...K.contains.map(function(qe) {
        return kn(qe === "self" ? K : qe);
      })), K.contains.forEach(function(qe) {
        rt(
          /** @type Mode */
          qe,
          me
        );
      }), K.starts && rt(K.starts, te), me.matcher = tt(me), me;
    }
    if (S.compilerExtensions || (S.compilerExtensions = []), S.contains && S.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return S.classNameAliases = n(S.classNameAliases || {}), rt(
      /** @type Mode */
      S
    );
  }
  function yr(S) {
    return S ? S.endsWithParent || yr(S.starts) : !1;
  }
  function kn(S) {
    return S.variants && !S.cachedVariants && (S.cachedVariants = S.variants.map(function(N) {
      return n(S, { variants: null }, N);
    })), S.cachedVariants ? S.cachedVariants : yr(S) ? n(S, { starts: S.starts ? n(S.starts) : null }) : Object.isFrozen(S) ? n(S) : S;
  }
  var Lr = "11.11.1";
  class g0 extends Error {
    constructor(N, Z) {
      super(N), this.name = "HTMLInjectionError", this.html = Z;
    }
  }
  const en = r, Fn = n, Sn = Symbol("nomatch"), wt = 7, tn = function(S) {
    const N = /* @__PURE__ */ Object.create(null), Z = /* @__PURE__ */ Object.create(null), we = [];
    let tt = !0;
    const rt = "Could not find the language '{}', did you forget to load/include a language module?", K = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let te = {
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
    function me(L) {
      return te.noHighlightRe.test(L);
    }
    function nt(L) {
      let ce = L.className + " ";
      ce += L.parentNode ? L.parentNode.className : "";
      const ke = te.languageDetectRe.exec(ce);
      if (ke) {
        const Pe = E(ke[1]);
        return Pe || (wr(rt.replace("{}", ke[1])), wr("Falling back to no-highlight mode for this block.", L)), Pe ? ke[1] : "no-highlight";
      }
      return ce.split(/\s+/).find((Pe) => me(Pe) || E(Pe));
    }
    function qe(L, ce, ke) {
      let Pe = "", ut = "";
      typeof ce == "object" ? (Pe = L, ke = ce.ignoreIllegals, ut = ce.language) : (Ht("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Ht("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), ut = L, Pe = ce), ke === void 0 && (ke = !0);
      const Ut = {
        code: Pe,
        language: ut
      };
      Ze("before:highlight", Ut);
      const cr = Ut.result ? Ut.result : sr(Ut.language, Ut.code, ke);
      return cr.code = Ut.code, Ze("after:highlight", cr), cr;
    }
    function sr(L, ce, ke, Pe) {
      const ut = /* @__PURE__ */ Object.create(null);
      function Ut(ee, he) {
        return ee.keywords[he];
      }
      function cr() {
        if (!ye.keywords) {
          mt.addText(Ke);
          return;
        }
        let ee = 0;
        ye.keywordPatternRe.lastIndex = 0;
        let he = ye.keywordPatternRe.exec(Ke), Te = "";
        for (; he; ) {
          Te += Ke.substring(ee, he.index);
          const He = Yt.case_insensitive ? he[0].toLowerCase() : he[0], xt = Ut(ye, He);
          if (xt) {
            const [ur, ea] = xt;
            if (mt.addText(Te), Te = "", ut[He] = (ut[He] || 0) + 1, ut[He] <= wt && (An += ea), ur.startsWith("_"))
              Te += he[0];
            else {
              const ta = Yt.classNameAliases[ur] || ur;
              Xt(he[0], ta);
            }
          } else
            Te += he[0];
          ee = ye.keywordPatternRe.lastIndex, he = ye.keywordPatternRe.exec(Ke);
        }
        Te += Ke.substring(ee), mt.addText(Te);
      }
      function Vn() {
        if (Ke === "") return;
        let ee = null;
        if (typeof ye.subLanguage == "string") {
          if (!N[ye.subLanguage]) {
            mt.addText(Ke);
            return;
          }
          ee = sr(ye.subLanguage, Ke, !0, Q0[ye.subLanguage]), Q0[ye.subLanguage] = /** @type {CompiledMode} */
          ee._top;
        } else
          ee = at(Ke, ye.subLanguage.length ? ye.subLanguage : null);
        ye.relevance > 0 && (An += ee.relevance), mt.__addSublanguage(ee._emitter, ee.language);
      }
      function At() {
        ye.subLanguage != null ? Vn() : cr(), Ke = "";
      }
      function Xt(ee, he) {
        ee !== "" && (mt.startScope(he), mt.addText(ee), mt.endScope());
      }
      function w0(ee, he) {
        let Te = 1;
        const He = he.length - 1;
        for (; Te <= He; ) {
          if (!ee._emit[Te]) {
            Te++;
            continue;
          }
          const xt = Yt.classNameAliases[ee[Te]] || ee[Te], ur = he[Te];
          xt ? Xt(ur, xt) : (Ke = ur, cr(), Ke = ""), Te++;
        }
      }
      function X0(ee, he) {
        return ee.scope && typeof ee.scope == "string" && mt.openNode(Yt.classNameAliases[ee.scope] || ee.scope), ee.beginScope && (ee.beginScope._wrap ? (Xt(Ke, Yt.classNameAliases[ee.beginScope._wrap] || ee.beginScope._wrap), Ke = "") : ee.beginScope._multi && (w0(ee.beginScope, he), Ke = "")), ye = Object.create(ee, { parent: { value: ye } }), ye;
      }
      function x0(ee, he, Te) {
        let He = T(ee.endRe, Te);
        if (He) {
          if (ee["on:end"]) {
            const xt = new e(ee);
            ee["on:end"](he, xt), xt.isMatchIgnored && (He = !1);
          }
          if (He) {
            for (; ee.endsParent && ee.parent; )
              ee = ee.parent;
            return ee;
          }
        }
        if (ee.endsWithParent)
          return x0(ee.parent, he, Te);
      }
      function Ja(ee) {
        return ye.matcher.regexIndex === 0 ? (Ke += ee[0], 1) : (Wn = !0, 0);
      }
      function Y0(ee) {
        const he = ee[0], Te = ee.rule, He = new e(Te), xt = [Te.__beforeBegin, Te["on:begin"]];
        for (const ur of xt)
          if (ur && (ur(ee, He), He.isMatchIgnored))
            return Ja(he);
        return Te.skip ? Ke += he : (Te.excludeBegin && (Ke += he), At(), !Te.returnBegin && !Te.excludeBegin && (Ke = he)), X0(Te, ee), Te.returnBegin ? 0 : he.length;
      }
      function Qa(ee) {
        const he = ee[0], Te = ce.substring(ee.index), He = x0(ye, ee, Te);
        if (!He)
          return Sn;
        const xt = ye;
        ye.endScope && ye.endScope._wrap ? (At(), Xt(he, ye.endScope._wrap)) : ye.endScope && ye.endScope._multi ? (At(), w0(ye.endScope, ee)) : xt.skip ? Ke += he : (xt.returnEnd || xt.excludeEnd || (Ke += he), At(), xt.excludeEnd && (Ke = he));
        do
          ye.scope && mt.closeNode(), !ye.skip && !ye.subLanguage && (An += ye.relevance), ye = ye.parent;
        while (ye !== He.parent);
        return He.starts && X0(He.starts, ee), xt.returnEnd ? 0 : he.length;
      }
      function y0() {
        const ee = [];
        for (let he = ye; he !== Yt; he = he.parent)
          he.scope && ee.unshift(he.scope);
        ee.forEach((he) => mt.openNode(he));
      }
      let jn = {};
      function k0(ee, he) {
        const Te = he && he[0];
        if (Ke += ee, Te == null)
          return At(), 0;
        if (jn.type === "begin" && he.type === "end" && jn.index === he.index && Te === "") {
          if (Ke += ce.slice(he.index, he.index + 1), !tt) {
            const He = new Error(`0 width match regex (${L})`);
            throw He.languageName = L, He.badRule = jn.rule, He;
          }
          return 1;
        }
        if (jn = he, he.type === "begin")
          return Y0(he);
        if (he.type === "illegal" && !ke) {
          const He = new Error('Illegal lexeme "' + Te + '" for mode "' + (ye.scope || "<unnamed>") + '"');
          throw He.mode = ye, He;
        } else if (he.type === "end") {
          const He = Qa(he);
          if (He !== Sn)
            return He;
        }
        if (he.type === "illegal" && Te === "")
          return Ke += `
`, 1;
        if (Gn > 1e5 && Gn > he.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Ke += Te, Te.length;
      }
      const Yt = E(L);
      if (!Yt)
        throw Et(rt.replace("{}", L)), new Error('Unknown language: "' + L + '"');
      const J0 = ar(Yt);
      let S0 = "", ye = Pe || J0;
      const Q0 = {}, mt = new te.__emitter(te);
      y0();
      let Ke = "", An = 0, Fr = 0, Gn = 0, Wn = !1;
      try {
        if (Yt.__emitTokens)
          Yt.__emitTokens(ce, mt);
        else {
          for (ye.matcher.considerAll(); ; ) {
            Gn++, Wn ? Wn = !1 : ye.matcher.considerAll(), ye.matcher.lastIndex = Fr;
            const ee = ye.matcher.exec(ce);
            if (!ee) break;
            const he = ce.substring(Fr, ee.index), Te = k0(he, ee);
            Fr = ee.index + Te;
          }
          k0(ce.substring(Fr));
        }
        return mt.finalize(), S0 = mt.toHTML(), {
          language: L,
          value: S0,
          relevance: An,
          illegal: !1,
          _emitter: mt,
          _top: ye
        };
      } catch (ee) {
        if (ee.message && ee.message.includes("Illegal"))
          return {
            language: L,
            value: en(ce),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: ee.message,
              index: Fr,
              context: ce.slice(Fr - 100, Fr + 100),
              mode: ee.mode,
              resultSoFar: S0
            },
            _emitter: mt
          };
        if (tt)
          return {
            language: L,
            value: en(ce),
            illegal: !1,
            relevance: 0,
            errorRaised: ee,
            _emitter: mt,
            _top: ye
          };
        throw ee;
      }
    }
    function or(L) {
      const ce = {
        value: en(L),
        illegal: !1,
        relevance: 0,
        _top: K,
        _emitter: new te.__emitter(te)
      };
      return ce._emitter.addText(L), ce;
    }
    function at(L, ce) {
      ce = ce || te.languages || Object.keys(N);
      const ke = or(L), Pe = ce.filter(E).filter(V).map(
        (At) => sr(At, L, !1)
      );
      Pe.unshift(ke);
      const ut = Pe.sort((At, Xt) => {
        if (At.relevance !== Xt.relevance) return Xt.relevance - At.relevance;
        if (At.language && Xt.language) {
          if (E(At.language).supersetOf === Xt.language)
            return 1;
          if (E(Xt.language).supersetOf === At.language)
            return -1;
        }
        return 0;
      }), [Ut, cr] = ut, Vn = Ut;
      return Vn.secondBest = cr, Vn;
    }
    function rn(L, ce, ke) {
      const Pe = ce && Z[ce] || ke;
      L.classList.add("hljs"), L.classList.add(`language-${Pe}`);
    }
    function _n(L) {
      let ce = null;
      const ke = nt(L);
      if (me(ke)) return;
      if (Ze(
        "before:highlightElement",
        { el: L, language: ke }
      ), L.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", L);
        return;
      }
      if (L.children.length > 0 && (te.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(L)), te.throwUnescapedHTML))
        throw new g0(
          "One of your code blocks includes unescaped HTML.",
          L.innerHTML
        );
      ce = L;
      const Pe = ce.textContent, ut = ke ? qe(Pe, { language: ke, ignoreIllegals: !0 }) : at(Pe);
      L.innerHTML = ut.value, L.dataset.highlighted = "yes", rn(L, ke, ut.language), L.result = {
        language: ut.language,
        // TODO: remove with version 11.0
        re: ut.relevance,
        relevance: ut.relevance
      }, ut.secondBest && (L.secondBest = {
        language: ut.secondBest.language,
        relevance: ut.secondBest.relevance
      }), Ze("after:highlightElement", { el: L, result: ut, text: Pe });
    }
    function Cn(L) {
      te = Fn(te, L);
    }
    const Pn = () => {
      qt(), Ht("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Hn() {
      qt(), Ht("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let qn = !1;
    function qt() {
      function L() {
        qt();
      }
      if (document.readyState === "loading") {
        qn || window.addEventListener("DOMContentLoaded", L, !1), qn = !0;
        return;
      }
      document.querySelectorAll(te.cssSelector).forEach(_n);
    }
    function b0(L, ce) {
      let ke = null;
      try {
        ke = ce(S);
      } catch (Pe) {
        if (Et("Language definition for '{}' could not be registered.".replace("{}", L)), tt)
          Et(Pe);
        else
          throw Pe;
        ke = K;
      }
      ke.name || (ke.name = L), N[L] = ke, ke.rawDefinition = ce.bind(null, S), ke.aliases && z(ke.aliases, { languageName: L });
    }
    function Un(L) {
      delete N[L];
      for (const ce of Object.keys(Z))
        Z[ce] === L && delete Z[ce];
    }
    function v0() {
      return Object.keys(N);
    }
    function E(L) {
      return L = (L || "").toLowerCase(), N[L] || N[Z[L]];
    }
    function z(L, { languageName: ce }) {
      typeof L == "string" && (L = [L]), L.forEach((ke) => {
        Z[ke.toLowerCase()] = ce;
      });
    }
    function V(L) {
      const ce = E(L);
      return ce && !ce.disableAutodetect;
    }
    function de(L) {
      L["before:highlightBlock"] && !L["before:highlightElement"] && (L["before:highlightElement"] = (ce) => {
        L["before:highlightBlock"](
          Object.assign({ block: ce.el }, ce)
        );
      }), L["after:highlightBlock"] && !L["after:highlightElement"] && (L["after:highlightElement"] = (ce) => {
        L["after:highlightBlock"](
          Object.assign({ block: ce.el }, ce)
        );
      });
    }
    function fe(L) {
      de(L), we.push(L);
    }
    function Ne(L) {
      const ce = we.indexOf(L);
      ce !== -1 && we.splice(ce, 1);
    }
    function Ze(L, ce) {
      const ke = L;
      we.forEach(function(Pe) {
        Pe[ke] && Pe[ke](ce);
      });
    }
    function lr(L) {
      return Ht("10.7.0", "highlightBlock will be removed entirely in v12.0"), Ht("10.7.0", "Please use highlightElement now."), _n(L);
    }
    Object.assign(S, {
      highlight: qe,
      highlightAuto: at,
      highlightAll: qt,
      highlightElement: _n,
      // TODO: Remove with v12 API
      highlightBlock: lr,
      configure: Cn,
      initHighlighting: Pn,
      initHighlightingOnLoad: Hn,
      registerLanguage: b0,
      unregisterLanguage: Un,
      listLanguages: v0,
      getLanguage: E,
      registerAliases: z,
      autoDetection: V,
      inherit: Fn,
      addPlugin: fe,
      removePlugin: Ne
    }), S.debugMode = function() {
      tt = !1;
    }, S.safeMode = function() {
      tt = !0;
    }, S.versionString = Lr, S.regex = {
      concat: $,
      lookahead: b,
      either: I,
      optional: k,
      anyNumberOfTimes: v
    };
    for (const L in oe)
      typeof oe[L] == "object" && t(oe[L]);
    return Object.assign(S, oe), S;
  }, ir = tn({});
  return ir.newInstance = () => tn({}), yi = ir, ir.HighlightJS = ir, ir.default = ir, yi;
}
var g4 = /* @__PURE__ */ m4();
const Ln = /* @__PURE__ */ Zl(g4), b4 = (t) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: t.C_BLOCK_COMMENT_MODE,
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
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: t.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), v4 = [
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
], w4 = [
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
], x4 = [
  ...v4,
  ...w4
], y4 = [
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
].sort().reverse(), k4 = [
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
].sort().reverse(), S4 = [
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
].sort().reverse(), _4 = [
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
function C4(t) {
  const e = t.regex, r = b4(t), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, a = "and or not only", i = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
    t.APOS_STRING_MODE,
    t.QUOTE_STRING_MODE
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
      r.BLOCK_COMMENT,
      n,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      r.CSS_NUMBER_MODE,
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
      r.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + k4.join("|") + ")" },
          { begin: ":(:)?(" + S4.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      r.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + _4.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          r.BLOCK_COMMENT,
          r.HEXCOLOR,
          r.IMPORTANT,
          r.CSS_NUMBER_MODE,
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
          r.FUNCTION_DISPATCH
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
            begin: i
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: a,
              attribute: y4.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...o,
              r.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + x4.join("|") + ")\\b"
      }
    ]
  };
}
const Fl = "[A-Za-z$_][0-9A-Za-z$_]*", A4 = [
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
], T4 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Cu = [
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
], Au = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Tu = [
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
], $4 = [
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
], M4 = [].concat(
  Tu,
  Cu,
  Au
);
function E4(t) {
  const e = t.regex, r = (J, { after: le }) => {
    const ie = "</" + J[0].slice(1);
    return J.input.indexOf(ie, le) !== -1;
  }, n = Fl, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (J, le) => {
      const ie = J[0].length + J.index, Le = J.input[ie];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Le === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Le === ","
      ) {
        le.ignoreMatch();
        return;
      }
      Le === ">" && (r(J, { after: ie }) || le.ignoreMatch());
      let je;
      const Ee = J.input.substring(ie);
      if (je = Ee.match(/^\s*=/)) {
        le.ignoreMatch();
        return;
      }
      if ((je = Ee.match(/^\s+extends\s+/)) && je.index === 0) {
        le.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Fl,
    keyword: A4,
    literal: T4,
    built_in: M4,
    "variable.language": $4
  }, c = "[0-9](_?[0-9])*", d = `\\.(${c})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b` },
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
  }, b = {
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
        t.BACKSLASH_ESCAPE,
        b
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
        t.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "css"
    }
  }, $ = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        t.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "graphql"
    }
  }, M = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      t.BACKSLASH_ESCAPE,
      b
    ]
  }, y = {
    className: "comment",
    variants: [
      t.COMMENT(
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
      t.C_BLOCK_COMMENT_MODE,
      t.C_LINE_COMMENT_MODE
    ]
  }, T = [
    t.APOS_STRING_MODE,
    t.QUOTE_STRING_MODE,
    v,
    k,
    $,
    M,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  b.contains = T.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(T)
  });
  const B = [].concat(y, b.contains), P = B.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(B)
    }
  ]), H = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: P
  }, Q = {
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
  }, W = {
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
        ...Cu,
        ...Au
      ]
    }
  }, j = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, pe = {
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
    contains: [H],
    illegal: /%/
  }, Ce = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Ae(J) {
    return e.concat("(?!", J.join("|"), ")");
  }
  const Fe = {
    match: e.concat(
      /\b/,
      Ae([
        ...Tu,
        "super",
        "import"
      ].map((J) => `${J}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ze = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, D = {
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
      H
    ]
  }, ne = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + t.UNDERSCORE_IDENT_RE + ")\\s*=>", be = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(ne)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      H
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: P, CLASS_REFERENCE: W },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      j,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      v,
      k,
      $,
      M,
      y,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      W,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      be,
      {
        // "value" container
        begin: "(" + t.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          y,
          t.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: ne,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: t.UNDERSCORE_IDENT_RE,
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
                    contains: P
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
              { begin: a.begin, end: a.end },
              { match: i },
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
      pe,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + t.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          H,
          t.inherit(t.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ze,
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
        contains: [H]
      },
      Fe,
      Ce,
      Q,
      D,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var Qn = "[0-9](_*[0-9])*", pa = `\\.(${Qn})`, ma = "[0-9a-fA-F](_*[0-9a-fA-F])*", Pl = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${Qn})((${pa})|\\.)?|(${pa}))[eE][+-]?(${Qn})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${Qn})((${pa})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${pa})[fFdD]?\\b` },
    { begin: `\\b(${Qn})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${ma})\\.?|(${ma})?\\.(${ma}))[pP][+-]?(${Qn})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${ma})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function $u(t, e, r) {
  return r === -1 ? "" : t.replace(e, (n) => $u(t, e, r - 1));
}
function I4(t) {
  const e = t.regex, r = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = r + $u("(?:<" + r + "~~~(?:\\s*,\\s*" + r + "~~~)*>)?", /~~~/g, 2), c = {
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
    begin: "@" + r,
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
    keywords: c,
    relevance: 0,
    contains: [t.C_BLOCK_COMMENT_MODE],
    endsParent: !0
  };
  return {
    name: "Java",
    aliases: ["jsp"],
    keywords: c,
    illegal: /<\/|#/,
    contains: [
      t.COMMENT(
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
      t.C_LINE_COMMENT_MODE,
      t.C_BLOCK_COMMENT_MODE,
      {
        begin: /"""/,
        end: /"""/,
        className: "string",
        contains: [t.BACKSLASH_ESCAPE]
      },
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      {
        match: [
          /\b(?:class|interface|enum|extends|implements|new)/,
          /\s+/,
          r
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
          e.concat(/(?!else)/, r),
          /\s+/,
          r,
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
          r
        ],
        className: {
          1: "keyword",
          3: "title.class"
        },
        contains: [
          h,
          t.C_LINE_COMMENT_MODE,
          t.C_BLOCK_COMMENT_MODE
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
          t.UNDERSCORE_IDENT_RE,
          /\s*(?=\()/
        ],
        className: { 2: "title.function" },
        keywords: c,
        contains: [
          {
            className: "params",
            begin: /\(/,
            end: /\)/,
            keywords: c,
            relevance: 0,
            contains: [
              d,
              t.APOS_STRING_MODE,
              t.QUOTE_STRING_MODE,
              Pl,
              t.C_BLOCK_COMMENT_MODE
            ]
          },
          t.C_LINE_COMMENT_MODE,
          t.C_BLOCK_COMMENT_MODE
        ]
      },
      Pl,
      d
    ]
  };
}
function z4(t) {
  const e = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, r = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, n = [
    "true",
    "false",
    "null"
  ], a = {
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
      r,
      t.QUOTE_STRING_MODE,
      a,
      t.C_NUMBER_MODE,
      t.C_LINE_COMMENT_MODE,
      t.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const Na = "[A-Za-z$_][0-9A-Za-z$_]*", Mu = [
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
], Eu = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Iu = [
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
], zu = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Nu = [
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
], Ru = [
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
], Ou = [].concat(
  Nu,
  Iu,
  zu
);
function N4(t) {
  const e = t.regex, r = (J, { after: le }) => {
    const ie = "</" + J[0].slice(1);
    return J.input.indexOf(ie, le) !== -1;
  }, n = Na, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (J, le) => {
      const ie = J[0].length + J.index, Le = J.input[ie];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Le === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Le === ","
      ) {
        le.ignoreMatch();
        return;
      }
      Le === ">" && (r(J, { after: ie }) || le.ignoreMatch());
      let je;
      const Ee = J.input.substring(ie);
      if (je = Ee.match(/^\s*=/)) {
        le.ignoreMatch();
        return;
      }
      if ((je = Ee.match(/^\s+extends\s+/)) && je.index === 0) {
        le.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Na,
    keyword: Mu,
    literal: Eu,
    built_in: Ou,
    "variable.language": Ru
  }, c = "[0-9](_?[0-9])*", d = `\\.(${c})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${h})((${d})|\\.)?|(${d}))[eE][+-]?(${c})\\b` },
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
  }, b = {
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
        t.BACKSLASH_ESCAPE,
        b
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
        t.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "css"
    }
  }, $ = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        t.BACKSLASH_ESCAPE,
        b
      ],
      subLanguage: "graphql"
    }
  }, M = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      t.BACKSLASH_ESCAPE,
      b
    ]
  }, y = {
    className: "comment",
    variants: [
      t.COMMENT(
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
      t.C_BLOCK_COMMENT_MODE,
      t.C_LINE_COMMENT_MODE
    ]
  }, T = [
    t.APOS_STRING_MODE,
    t.QUOTE_STRING_MODE,
    v,
    k,
    $,
    M,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  b.contains = T.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(T)
  });
  const B = [].concat(y, b.contains), P = B.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(B)
    }
  ]), H = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: P
  }, Q = {
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
  }, W = {
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
        ...Iu,
        ...zu
      ]
    }
  }, j = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, pe = {
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
    contains: [H],
    illegal: /%/
  }, Ce = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Ae(J) {
    return e.concat("(?!", J.join("|"), ")");
  }
  const Fe = {
    match: e.concat(
      /\b/,
      Ae([
        ...Nu,
        "super",
        "import"
      ].map((J) => `${J}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, ze = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, D = {
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
      H
    ]
  }, ne = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + t.UNDERSCORE_IDENT_RE + ")\\s*=>", be = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(ne)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      H
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: P, CLASS_REFERENCE: W },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      j,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      v,
      k,
      $,
      M,
      y,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      W,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      be,
      {
        // "value" container
        begin: "(" + t.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          y,
          t.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: ne,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: t.UNDERSCORE_IDENT_RE,
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
                    contains: P
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
              { begin: a.begin, end: a.end },
              { match: i },
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
      pe,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + t.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          H,
          t.inherit(t.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      ze,
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
        contains: [H]
      },
      Fe,
      Ce,
      Q,
      D,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function R4(t) {
  const e = t.regex, r = N4(t), n = Na, a = [
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
  ], i = {
    begin: [
      /namespace/,
      /\s+/,
      t.IDENT_RE
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
      built_in: a
    },
    contains: [r.exports.CLASS_REFERENCE]
  }, o = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, c = [
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
    $pattern: Na,
    keyword: Mu.concat(c),
    literal: Eu,
    built_in: Ou.concat(a),
    "variable.language": Ru
  }, h = {
    className: "meta",
    begin: "@" + n
  }, f = ($, M, I) => {
    const y = $.contains.findIndex((T) => T.label === M);
    if (y === -1)
      throw new Error("can not find mode to replace");
    $.contains.splice(y, 1, I);
  };
  Object.assign(r.keywords, d), r.exports.PARAMS_CONTAINS.push(h);
  const b = r.contains.find(($) => $.scope === "attr"), v = Object.assign(
    {},
    b,
    { match: e.concat(n, e.lookahead(/\s*\?:/)) }
  );
  r.exports.PARAMS_CONTAINS.push([
    r.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    b,
    // highlight the params key
    v
    // Added for optional property assignment highlighting
  ]), r.contains = r.contains.concat([
    h,
    i,
    s,
    v
    // Added for optional property assignment highlighting
  ]), f(r, "shebang", t.SHEBANG()), f(r, "use_strict", o);
  const k = r.contains.find(($) => $.label === "func.def");
  return k.relevance = 0, Object.assign(r, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), r;
}
function Bu(t) {
  const e = t.regex, r = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, a = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, i = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, s = t.inherit(i, {
    begin: /\(/,
    end: /\)/
  }), o = t.inherit(t.APOS_STRING_MODE, { className: "string" }), c = t.inherit(t.QUOTE_STRING_MODE, { className: "string" }), d = {
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
                contains: [a]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [a]
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
          i,
          c,
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
                  i,
                  s,
                  c,
                  o
                ]
              }
            ]
          }
        ]
      },
      t.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      a,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              c
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
            r,
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
            begin: r,
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
            r,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: r,
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
const C2 = "0.0.32", O4 = _.ValueIsTextline, Du = {
  h: Wr,
  Fragment: fn,
  render: jr,
  createContext: oc,
  createElement: Wr,
  cloneElement: sc,
  createRef: F1,
  toChildArray: s0,
  createPortal: wc,
  memo: K1,
  forwardRef: Y1,
  useId: fc,
  useRef: Be,
  useState: ht,
  useReducer: uc,
  useEffect: hr,
  useLayoutEffect: G1,
  useCallback: dn,
  useMemo: u0,
  useContext: dc,
  useErrorBoundary: hc
}, { fromLocalTo: B4, fromViewportTo: D4, fromDocumentTo: L4 } = dd;
Ln.registerLanguage("css", C4);
Ln.registerLanguage("javascript", E4);
Ln.registerLanguage("java", I4);
Ln.registerLanguage("json", z4);
Ln.registerLanguage("typescript", R4);
Ln.registerLanguage("html", Bu);
Ln.registerLanguage("xml", Bu);
const Ra = Symbol("Script"), Xa = Symbol("rerender"), vn = Symbol("Console"), L0 = Symbol("Console_CharCount"), F0 = Symbol("Console_LineCount"), Lu = ["left-width", "left-right", "width-right"], Fu = ["top-height", "top-bottom", "height-bottom"], A2 = [
  "thin",
  "extra-light",
  "light",
  "normal",
  "medium",
  "semi-bold",
  "bold",
  "extra-bold",
  "heavy"
], F4 = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  heavy: 900
}, T2 = ["normal", "italic"], P4 = ["none", "underline", "overline", "line-through"], H4 = ["solid", "double", "dotted", "dashed", "wavy"], $2 = ["left", "center", "right", "justify"], q4 = ["normal", "contain", "cover", "fill", "tile"], U4 = [
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
], M2 = [
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
], V4 = ["visible", "hidden", "scroll", "auto"];
function Nn(t) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(t);
  if (e == null)
    throw new Error(t);
  {
    let r = new Error(e[2]);
    throw r.name = e[1], r;
  }
}
function E2(t) {
  Nn(
    "ReadOnlyProperty: property " + _.quoted(t) + " must not be set"
  );
}
const j4 = /^[a-z$_][a-z$_0-9]*$/i;
function Pu(t) {
  return _.ValueIsStringMatching(t, j4);
}
const G4 = _.ValidatorForClassifier(
  Pu,
  _.acceptNil,
  "BC identifier"
), I2 = G4, W4 = _.ValidatorForClassifier(
  Pu,
  _.rejectNil,
  "BC identifier"
), z2 = W4;
function Ya(t) {
  return _.ValueIsString(t) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(t);
}
const Z4 = _.ValidatorForClassifier(
  Ya,
  _.acceptNil,
  "name"
), N2 = Z4, Rs = _.ValidatorForClassifier(
  Ya,
  _.rejectNil,
  "name"
), R2 = Rs;
function Wt(t) {
  return _.ValueIsFiniteNumber(t);
}
const K4 = _.ValidatorForClassifier(
  Wt,
  _.acceptNil,
  "BC coordinate"
), O2 = K4, X4 = _.ValidatorForClassifier(
  Wt,
  _.rejectNil,
  "BC coordinate"
), B2 = X4;
function mr(t) {
  return _.ValueIsFiniteNumber(t) && t >= 0;
}
const Y4 = _.ValidatorForClassifier(
  mr,
  _.acceptNil,
  "BC dimension"
), D2 = Y4, J4 = _.ValidatorForClassifier(
  mr,
  _.rejectNil,
  "BC dimension"
), L2 = J4;
function Hu(t) {
  return _.ValueIsPlainObject(t) && Wt(t.x) && Wt(t.y);
}
const Q4 = _.ValidatorForClassifier(
  Hu,
  _.acceptNil,
  "BC position"
), F2 = Q4, ep = _.ValidatorForClassifier(
  Hu,
  _.rejectNil,
  "BC position"
), P2 = ep;
function qu(t) {
  return _.ValueIsPlainObject(t) && mr(t.Width) && mr(t.Height);
}
const tp = _.ValidatorForClassifier(
  qu,
  _.acceptNil,
  "BC size"
), H2 = tp, rp = _.ValidatorForClassifier(
  qu,
  _.rejectNil,
  "BC size"
), q2 = rp;
function Uu(t) {
  return _.ValueIsPlainObject(t) && Wt(t.x) && mr(t.Width) && Wt(t.y) && mr(t.Height);
}
const np = _.ValidatorForClassifier(
  Uu,
  _.acceptNil,
  "BC geometry"
), U2 = np, ap = _.ValidatorForClassifier(
  Uu,
  _.rejectNil,
  "BC geometry"
), V2 = ap;
function Vu(t) {
  if (!_.ValueIsPlainObject(t))
    return !1;
  for (let e in t)
    if (t.hasOwnProperty(e))
      switch (e) {
        case "x":
        case "y":
          if (t[e] != null && !Wt(t[e]))
            return !1;
          break;
        case "Width":
        case "Height":
          if (t[e] != null && !mr(t[e]))
            return !1;
          break;
        default:
          return !1;
      }
  return !0;
}
_.ValidatorForClassifier(
  Vu,
  _.acceptNil,
  "BC geometry"
);
_.ValidatorForClassifier(
  Vu,
  _.rejectNil,
  "BC geometry"
);
function Os(t) {
  return _.ValueIsList(t) && t.length === 2 && _.ValueIsOneOf(t[0], Lu) && _.ValueIsOneOf(t[1], Fu);
}
const ip = _.ValidatorForClassifier(
  Os,
  _.acceptNil,
  "BC anchors list"
), j2 = ip, sp = _.ValidatorForClassifier(
  Os,
  _.rejectNil,
  "BC anchors list"
), G2 = sp;
function Bs(t) {
  return _.ValueIsListSatisfying(t, _.ValueIsFiniteNumber) && t.length === 4;
}
const op = _.ValidatorForClassifier(
  Bs,
  _.acceptNil,
  "BC offsets list"
), W2 = op, lp = _.ValidatorForClassifier(
  Bs,
  _.rejectNil,
  "BC offsets list"
), Z2 = lp;
function ju(t) {
  return t === "none" || _.ValueIsObject(t) && _.ValueIsBoolean(t.isActive) && _.ValueIsOneOf(t.Line, P4) && (t.Color == null || _.ValueIsColor(t.Color)) && (t.Style == null || _.ValueIsOneOf(t.Style, H4)) && (t.Thickness == null || mr(t.Thickness));
}
const cp = _.ValidatorForClassifier(
  ju,
  _.acceptNil,
  "text decoration"
), K2 = cp, up = _.ValidatorForClassifier(
  ju,
  _.rejectNil,
  "text decoration"
), X2 = up;
function Gu(t) {
  return t === "none" || _.ValueIsObject(t) && _.ValueIsBoolean(t.isActive) && Wt(t.xOffset) && Wt(t.yOffset) && mr(t.BlurRadius) && _.ValueIsColor(t.Color);
}
const dp = _.ValidatorForClassifier(
  Gu,
  _.acceptNil,
  "text shadow specification"
), Y2 = dp, hp = _.ValidatorForClassifier(
  Gu,
  _.rejectNil,
  "text shadow specification"
), J2 = hp;
function Wu(t) {
  return t === "none" || _.ValueIsObject(t) && _.ValueIsBoolean(t.isActive) && _.ValueIsURL(t.ImageURL) && _.ValueIsOneOf(t.Mode, q4) && Wt(t.xOffset) && Wt(t.yOffset);
}
const fp = _.ValidatorForClassifier(
  Wu,
  _.acceptNil,
  "background texture"
), Q2 = fp, pp = _.ValidatorForClassifier(
  Wu,
  _.rejectNil,
  "background texture"
), e5 = pp;
function Zu(t) {
  return _.ValueIsOneOf(t, U4);
}
const mp = _.ValidatorForClassifier(
  Zu,
  _.acceptNil,
  "widget border style"
), t5 = mp, gp = _.ValidatorForClassifier(
  Zu,
  _.rejectNil,
  "widget border style"
), r5 = gp;
function Ku(t) {
  return t === "none" || _.ValueIsObject(t) && _.ValueIsBoolean(t.isActive) && Wt(t.xOffset) && Wt(t.yOffset) && mr(t.BlurRadius) && mr(t.SpreadRadius) && _.ValueIsColor(t.Color);
}
const bp = _.ValidatorForClassifier(
  Ku,
  _.acceptNil,
  "widget box shadow specification"
), n5 = bp, vp = _.ValidatorForClassifier(
  Ku,
  _.rejectNil,
  "widget box shadow specification"
), a5 = vp;
function Xu(t) {
  return _.ValueIsListSatisfying(
    t,
    (e) => _.ValueIsOneOf(e, V4),
    2,
    2
  );
}
const wp = _.ValidatorForClassifier(
  Xu,
  _.acceptNil,
  "BC overflow list"
), i5 = wp, xp = _.ValidatorForClassifier(
  Xu,
  _.rejectNil,
  "BC overflow list"
), s5 = xp;
function P0(t) {
  switch (!0) {
    case t == null:
    // deliberately also allows undefined
    case _.ValueIsBoolean(t):
    case _.ValueIsNumber(t):
    case _.ValueIsString(t):
    case _.ValueIsListSatisfying(t, P0):
      return !0;
    case _.ValueIsPlainObject(t):
      for (let e in t)
        if (t.hasOwnProperty(e) && !P0(t[e]))
          return !1;
      return !0;
  }
  return !1;
}
const yp = _.ValidatorForClassifier(
  P0,
  _.acceptNil,
  "serializable value"
), o5 = yp, kp = _.ValidatorForClassifier(
  P0,
  _.rejectNil,
  "serializable value"
), l5 = kp;
function Yu(t) {
  if (_.ValueIsPlainObject(t)) {
    for (let e in t)
      if (t.hasOwnProperty(e) && !P0(t[e]))
        return !1;
    return !0;
  } else
    return !1;
}
const Sp = _.ValidatorForClassifier(
  Yu,
  _.acceptNil,
  "serializable object"
), c5 = Sp, _p = _.ValidatorForClassifier(
  Yu,
  _.rejectNil,
  "serializable object"
), u5 = _p;
function d5(t, e) {
  const r = e == null ? _.ValueIsTextline : (n) => _.ValueIsStringMatching(n, e);
  return _.ValueIsListSatisfying(t, r);
}
function Cp(t, e, r) {
  return e == null ? e : Tp(t, e, r);
}
const h5 = Cp;
function Ap(t, e, r) {
  if (e == null)
    Nn(`MissingArgument: no ${_.escaped(t)} given`);
  else {
    const n = r == null ? _.ValueIsTextline : (a) => _.ValueIsStringMatching(a, r);
    if (_.ValueIsListSatisfying(e, n))
      return e;
    Nn(`InvalidArgument: the given value is no ${_.escaped(t)}`);
  }
}
const Tp = Ap;
function f5(t, e, r, n, a) {
  const i = e == null && r == null ? _.ValueIsNumber : (s) => _.ValueIsNumberInRange(s, e, r, n, a);
  return _.ValueIsListSatisfying(t, i);
}
function $p(t, e, r, n, a, i) {
  return e == null ? e : Ep(t, e, r, n, a, i);
}
const p5 = $p;
function Mp(t, e, r, n, a, i) {
  if (e == null)
    Nn(`MissingArgument: no ${_.escaped(t)} given`);
  else {
    const s = r == null && n == null ? _.ValueIsNumber : (o) => _.ValueIsNumberInRange(o, r, n, a, i);
    if (_.ValueIsListSatisfying(e, s))
      return e;
    Nn(`InvalidArgument: the given value is no ${_.escaped(t)}`);
  }
}
const Ep = Mp;
function m5(t, e, r) {
  const n = e == null && r == null ? _.ValueIsInteger : (a) => _.ValueIsIntegerInRange(a, e, r);
  return _.ValueIsListSatisfying(t, n);
}
function Ip(t, e, r, n) {
  return e == null ? e : Np(t, e, r, n);
}
const g5 = Ip;
function zp(t, e, r, n) {
  if (e == null)
    Nn(`MissingArgument: no ${_.escaped(t)} given`);
  else {
    const a = r == null && n == null ? _.ValueIsInteger : (i) => _.ValueIsIntegerInRange(i, r, n);
    if (_.ValueIsListSatisfying(e, a))
      return e;
    Nn(`InvalidArgument: the given value is no ${_.escaped(t)}`);
  }
}
const Np = zp;
function b5(t, e) {
  if (_.expectFunction("Validator", e), e(t) === !0)
    return t;
}
function v5(t) {
  switch (!0) {
    case _.ValueIsBoolean(t):
      return t;
    case t === "false":
      return !1;
    case t === "true":
      return !0;
  }
}
function w5(t) {
  if (_.ValueIsNumber(t) || _.ValueIsString(t) && (t = parseFloat(t), !isNaN(t)))
    return t;
}
function x5(t, e, r, n, a) {
  if (!(_.ValueIsString(t) && (t = parseFloat(t), isNaN(t))) && _.ValueIsNumberInRange(t, e, r, n, a))
    return t;
}
function y5(t) {
  if (_.ValueIsInteger(t) || _.ValueIsString(t) && (t = parseFloat(t), _.ValueIsInteger(t)))
    return t;
}
function k5(t, e, r) {
  if (!(_.ValueIsString(t) && (t = parseFloat(t), !_.ValueIsNumber(t))) && _.ValueIsIntegerInRange(t, e, r))
    return t;
}
function S5(t) {
  if (_.ValueIsOrdinal(t) || _.ValueIsString(t) && (t = parseFloat(t), _.ValueIsOrdinal(t)))
    return t;
}
function _5(t) {
  if (_.ValueIsCardinal(t) || _.ValueIsString(t) && (t = parseFloat(t), _.ValueIsCardinal(t)))
    return t;
}
function C5(t) {
  if (_.ValueIsString(t))
    return t;
}
function A5(t, e) {
  if (_.ValueIsStringMatching(t, e))
    return t;
}
function T5(t) {
  if (_.ValueIsText(t))
    return t;
}
function $5(t) {
  if (_.ValueIsTextline(t))
    return t;
}
function M5(t) {
  if (_.ValueIsFunction(t))
    return t;
}
function E5(t) {
  if (_.ValueIsColor(t))
    return t;
}
function I5(t) {
  if (_.ValueIsEMailAddress(t))
    return t;
}
function z5(t) {
  if (O4(t))
    return t;
}
function N5(t) {
  if (_.ValueIsURL(t))
    return t;
}
function R5(t) {
  if (Ya(t))
    return t;
}
function O5(t) {
  if (Ya(t) || _.ValueIsOrdinal(t))
    return t;
}
let Oa = 0;
function ue(t) {
  return Oa += 1, `bc-${t}-${Oa}`;
}
function B5(t) {
  return Rs("name", t), Ju(t);
}
function Ju(t) {
  return t.replaceAll(".", "-");
}
function Rp(t, e, r = !1) {
  Rs("stylesheet name", t), _.expectText("stylesheet", e), _.expectBoolean("mode flag", r);
  const n = "BC-Stylesheet-for-" + Ju(t);
  let a = document.head.querySelector('style[id="' + n + '"]');
  a == null ? (a = document.createElement("style"), a.id = n, a.textContent = e, document.head.append(a)) : r ? a.textContent = e : console.warn('multiple definitions for stylesheet "' + t + '"');
}
const D5 = "\\d{2}:\\d{2}", Op = /\d{2}:\d{2}/;
function L5(t) {
  return _.ValueIsStringMatching(t, Op);
}
const F5 = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", Bp = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function P5(t) {
  return _.ValueIsStringMatching(t, Bp);
}
const H5 = "\\d{4}-\\d{2}-\\d{2}", Dp = /\d{4}-\d{2}-\d{2}/;
function q5(t) {
  return _.ValueIsStringMatching(t, Dp);
}
const U5 = "\\d{4}-W\\d{2}", Lp = /\d{4}-W\d{2}/;
function V5(t) {
  return _.ValueIsStringMatching(t, Lp);
}
const j5 = "\\d{4}-\\d{2}", Fp = /\d{4}-\d{2}/;
function G5(t) {
  return _.ValueIsStringMatching(t, Fp);
}
const W5 = [
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
  "numberlist-input"
], Pp = /* @__PURE__ */ Object.create(null);
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
  (t) => Pp[t] = !0
);
const Ds = 105e4, Ls = 2e4;
function Ba(t) {
  t[vn] = "", t[Xa]();
}
function Hp(t, e) {
  Qu(t, e1(e)), t[Xa]();
}
function qp(t, e) {
  Qu(t, e1(e, !0)), t[Xa]();
}
function Qu(t, e) {
  if (e.length === 0)
    return;
  let r = Hl(e), n = e.length;
  r > (t.Console_LineLimit ?? Ls) || n > (t.Console_CharLimit ?? Ds) ? (Ba(t), e = Vp(e, t, r, n), t[F0] = Hl(e) + 1, t[L0] = e.length, t[vn] = e) : (Up(t, r, n), t[F0] += r, t[L0] += n, t[vn] += e);
}
function Up(t, e, r) {
  let n = t[F0] + e - (t.Console_LineLimit ?? Ls), a = t[L0] + r - (t.Console_CharLimit ?? Ds);
  if (n <= 0 && a <= 0)
    return;
  let i = t[vn];
  for (let s = 0, o = -1; ; ) {
    if (o = i.indexOf(`
`, o + 1), o < 0) {
      Ba(t);
      return;
    }
    if (s += 1, s >= n && o - s * 28 >= a) {
      t[vn] = i.slice(o + 1);
      return;
    }
  }
}
function Vp(t, e, r, n) {
  let a = r - e.Console_LineLimit, i = n - e.Console_CharLimit;
  for (let s = 0, o = -1; ; )
    if (o = t.indexOf(`
`, o + 1), s += 1, s >= a && o >= i)
      return t.slice(o + 1);
}
function Hl(t) {
  let e = t.match(/\n/g);
  return e === null ? 0 : e.length;
}
function e1(t, e = !1) {
  let r = "";
  for (let n = 0; n < t.length; n++) {
    let a = t[n];
    switch (typeof a) {
      case "undefined":
        r += "(undefined)";
        break;
      case "boolean":
        r += a.toString();
        break;
      case "number":
        r += a.toString();
        break;
      case "string":
        r += a;
        break;
      case "function":
        r += "(function)";
        break;
      case "object":
        r += a === null ? "(null)" : a.toString();
        break;
      default:
        r += "(unknown)";
        break;
    }
  }
  return r + (e ? `
` : "");
}
function ql(t) {
  return Gp(() => {
    const { ErrorToShow: e } = t;
    return Y`<div class="bc-error-indicator" onClick=${() => {
      console.warn(e), window.alert(jp(e));
    }}/>`;
  });
}
Rp("bc-error-indicator", `
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
function jp(t) {
  return `${t.Title}

${t.Message}`;
}
const Z5 = ["portrait", "landscape", "any"];
function Gp(t) {
  _.expectFunction("rendering function", t);
  const [e, r] = hc();
  if (e != null)
    return console.warn("rendering error caught by preact: " + e), Y`<${ql} error=${e} resetError=${r}/>`;
  try {
    return t();
  } catch (n) {
    return console.warn("rendering error: " + n), Y`<${ql} error=${n} resetError=${r}/>`;
  }
}
const Ji = 600, Qi = 450, Wp = `
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

  .bc-card-canvas {
    position: absolute;
    top: 0; left: 0;
    background: #fff;
    box-shadow: 0 4px 24px rgba(0,0,0,0.55);
    border-radius: 3px;
    overflow: hidden;
    transform-origin: top left;
  }

  /* ---- objects --------------------------------------------------------- */

  .bc-obj {
    position: absolute;
    overflow: hidden;
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
  .bc-bottom-bar-center { display: flex; gap: 4px; }
  .bc-card-counter {
    font-size: 12px; color: rgba(255,255,255,0.55);
    min-width: 80px; text-align: center;
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
    touch-action: none;     /* let pointer drags work on touch devices */
  }
  .bc-edit-hit.invisible { outline: 1px dashed rgba(0,0,0,0.30); }

  .bc-selection-frame {
    position: absolute;
    outline: 2px solid #0A84FF;
    pointer-events: none;
    z-index: 9500;
  }
  .bc-handle {
    position: absolute;
    background: #fff;
    border: 1px solid #0A84FF;
    border-radius: 2px;
    pointer-events: auto;
    touch-action: none;     /* let pointer drags work on touch devices */
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
var Ur, In, a0;
class Fs {
  constructor() {
    Ft(this, Ur, /* @__PURE__ */ new Map());
    /**** after/every — timers which are cleared automatically on teardown ****/
    Ft(this, In, /* @__PURE__ */ new Set());
    Ft(this, a0, /* @__PURE__ */ new Set());
  }
  /**** on — registers a message handler (called from within a script) ****/
  on(e, r) {
    ae(this, Ur).set(e, r);
  }
  /**** run — evaluates the script asynchronously; clears old handlers first ****/
  async run(e, r, n) {
    if (ae(this, Ur).clear(), !!(e != null && e.trim()))
      try {
        await new Function(...r, `return (async () => {
${e}
})()`)(...n);
      } catch (a) {
        console.warn("[BrowserCard] script error:", a);
      }
  }
  /**** dispatch — asynchronously invokes the named handler ****/
  async dispatch(e, ...r) {
    const n = ae(this, Ur).get(e);
    if (n == null)
      return !1;
    try {
      return await n(...r), !0;
    } catch (a) {
      return console.warn(`[BrowserCard] handler "${e}" error:`, a), !1;
    }
  }
  /**** renderResult — synchronously invokes the 'render' handler ****/
  renderResult() {
    const e = ae(this, Ur).get("render");
    if (e == null)
      return null;
    try {
      return e();
    } catch (r) {
      return console.warn("[BrowserCard] render handler error:", r), null;
    }
  }
  after(e, r) {
    const n = setTimeout(() => {
      ae(this, In).delete(n), r();
    }, e);
    return ae(this, In).add(n), n;
  }
  every(e, r) {
    const n = setInterval(r, e);
    return ae(this, a0).add(n), n;
  }
  /**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/
  async teardown() {
    const e = ae(this, Ur).get("obsolete");
    ae(this, Ur).clear();
    const r = [...ae(this, In)];
    ae(this, In).clear();
    const n = [...ae(this, a0)];
    if (ae(this, a0).clear(), e != null)
      try {
        await e();
      } catch (a) {
        console.warn('[BrowserCard] handler "obsolete" error:', a);
      }
    r.forEach((a) => clearTimeout(a)), n.forEach((a) => clearInterval(a));
  }
}
Ur = new WeakMap(), In = new WeakMap(), a0 = new WeakMap();
const K0 = /* @__PURE__ */ new Map();
function Zp(t, e) {
  return /^https?:\/\//i.test(t) ? t : t.startsWith("/") ? window.location.origin + t : t.includes("/") || t.includes(".") ? new URL(t, window.location.href).href : `https://rozek.github.io/browser-card/behaviors/${e === "deck" ? "decks" : e === "card" ? "cards" : "widgets"}/${t}.js`;
}
function Ps(t, e, r, n) {
  const a = t.on.bind(t), i = t.after.bind(t), s = t.every.bind(t), o = n != null ? Object.keys(n) : [], c = n != null ? Object.values(n) : [], d = {
    on: a,
    me: e.me,
    html: e.html,
    dispatch: (n == null ? void 0 : n.dispatch) ?? (() => {
    })
  }, h = [
    "on",
    "after",
    "every",
    ...Object.keys(e),
    ...o,
    "behaveLike"
  ], f = [
    a,
    i,
    s,
    ...Object.values(e),
    ...c,
    null
  ];
  let b = !1;
  async function v(k) {
    if (b) {
      console.warn("[BrowserCard] behaveLike: only one behavior per Visual allowed");
      return;
    }
    b = !0;
    const $ = K0.get(k);
    if ($ != null) {
      await $(d);
      return;
    }
    const I = await import(Zp(k, r));
    if (typeof I.default == "function") {
      const y = {};
      h.forEach((T, B) => {
        y[T] = f[B];
      }), await I.default(y);
    }
  }
  return f[f.length - 1] = v, { Params: h, Args: f };
}
function Ul(t, e, r, n, a, i, s, o) {
  function c(f, b) {
    return { __navType: f, ...b };
  }
  function d(f) {
    if (typeof f == "string")
      return { type: "card-name", name: f };
    if (typeof f == "number")
      return { type: "card-index", index: f - 1 };
    if (f == null || typeof f != "object")
      return { type: "next" };
    const b = f;
    switch (b.__navType) {
      case "next":
        return { type: "next" };
      case "prev":
        return { type: "prev" };
      case "first":
        return { type: "first" };
      case "last":
        return { type: "last" };
      case "card-name":
        return { type: "card-name", name: b.__name };
      case "card-id":
        return { type: "card-id", id: b.__id };
      case "card-index":
        return { type: "card-index", index: b.__index };
      default:
        return { type: "next" };
    }
  }
  function h(f) {
    var v;
    const b = ((v = r == null ? void 0 : r.Card) == null ? void 0 : v.WidgetList) ?? [];
    return typeof f == "string" ? b.find((k) => k.name === f) ?? null : typeof f == "number" ? b[f - 1] ?? null : null;
  }
  return {
    go(f) {
      n(d(f));
    },
    openURL(f) {
      window.open(f, "_blank", "noopener,noreferrer");
    },
    answer(f, ...b) {
      return new Promise(
        (v) => a(f, b.length ? b : ["OK"], v)
      );
    },
    ask(f, b = "") {
      return new Promise(
        (v) => i(f, b, v)
      );
    },
    card(f) {
      return typeof f == "string" ? e.find((b) => b.name === f) ? c("card-name", { __name: f }) : null : typeof f == "number" && f >= 1 && f <= e.length ? c("card-index", { __index: f - 1 }) : null;
    },
    cardNumber() {
      return o.current + 1;
    },
    cardCount() {
      return e.length;
    },
    widget: h,
    async send(f, b, ...v) {
      const k = typeof f == "string" || typeof f == "number" ? h(f) : f, $ = k == null ? void 0 : k[Ra];
      return $ == null ? !1 : $.dispatch(b, ...v);
    },
    print: s.print,
    println: s.println,
    clearConsole: s.clearConsole,
    me: r,
    my: r,
    nextCard: c("next"),
    prevCard: c("prev"),
    firstCard: c("first"),
    lastCard: c("last"),
    html: Y,
    preact: Du
  };
}
const t1 = {
  id: ue("deck"),
  name: "BrowserCard Demo",
  readOnly: !1,
  swipeToAdjacentCard: !0,
  script: "",
  cards: [
    // card 1: start
    {
      id: ue("card"),
      name: "Start",
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: [
        {
          id: ue("widget"),
          name: "Header",
          number: 1,
          type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          variant: "rectangle",
          fillColor: "#1d3461",
          borderColor: "transparent",
          borderWidth: 0,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Title",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "BrowserCard",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
          script: ""
        },
        {
          id: ue("widget"),
          name: "WelcomeText",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 165],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          text: `Welcome to BrowserCard!

BrowserCard is a browser-based reinterpretation of the classic HyperCard concept. Create interactive card decks with cards, buttons, fields, shapes and widgets.

Click one of the buttons below to learn more.`,
          fontSize: 11,
          fontWeight: "normal",
          textAlign: "left",
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Demo Widgets",
          number: 3,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 116, 263, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(card('Demo Widgets')))"
        },
        {
          id: ue("widget"),
          name: "Script Demo",
          number: 4,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [161, 116, 263, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(card('Script Demo')))"
        },
        {
          id: ue("widget"),
          name: "Widget Demo",
          number: 5,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [293, 116, 263, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(card('Widget Demo')))"
        },
        {
          id: ue("widget"),
          name: "About BrowserCard",
          number: 6,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [424, 146, 263, 33],
          visible: !0,
          variant: "shadow",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(card('About BrowserCard')))"
        }
      ]
    },
    // card 2: demo objects
    {
      id: ue("card"),
      name: "Demo Widgets",
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: [
        {
          id: ue("widget"),
          name: "Header",
          number: 1,
          type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          variant: "rectangle",
          fillColor: "#1d3461",
          borderColor: "transparent",
          borderWidth: 0,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Title",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Demo Widgets",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
          script: ""
        },
        {
          id: ue("widget"),
          name: "BtnLabel",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 225, 51, 20],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Button styles:",
          fontSize: 10,
          fontWeight: "bold",
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Rounded Rect",
          number: 3,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 98, 75, 27],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Rectangle",
          number: 4,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [140, 98, 75, 27],
          visible: !0,
          variant: "rectangle",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Shadow",
          number: 5,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [249, 98, 75, 27],
          visible: !0,
          variant: "shadow",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Standard",
          number: 6,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [359, 98, 75, 27],
          visible: !0,
          variant: "standard",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Transparent",
          number: 7,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [468, 98, 75, 27],
          visible: !0,
          variant: "transparent",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: ""
        },
        {
          id: ue("widget"),
          name: "ShapeLabel",
          number: 8,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 300, 117, 17],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Shapes (filled):",
          fontSize: 10,
          fontWeight: "bold",
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Rectangle",
          number: 9,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 105, 140, 54],
          visible: !0,
          variant: "rectangle",
          fillColor: "#dbeafe",
          borderColor: "#3b82f6",
          borderWidth: 2,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Oval",
          number: 10,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [158, 105, 140, 54],
          visible: !0,
          variant: "oval",
          fillColor: "#fce7f3",
          borderColor: "#ec4899",
          borderWidth: 2,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Rounded Rectangle",
          number: 11,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [285, 150, 140, 54],
          visible: !0,
          variant: "rounded-rectangle",
          fillColor: "#dcfce7",
          borderColor: "#22c55e",
          borderWidth: 2,
          script: ""
        },
        {
          id: ue("widget"),
          name: "ShapeLabel2",
          number: 12,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 300, 203, 17],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Shapes (lines & polygons):",
          fontSize: 10,
          fontWeight: "bold",
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Line",
          number: 13,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 102, 225, 60],
          visible: !0,
          variant: "line",
          borderColor: "#0284c7",
          borderWidth: 2,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Arrow",
          number: 14,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [140, 102, 225, 60],
          visible: !0,
          variant: "line",
          borderColor: "#0369a1",
          borderWidth: 2,
          arrowEnd: !0,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Arc",
          number: 15,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [249, 102, 225, 60],
          visible: !0,
          variant: "arc",
          borderColor: "#9333ea",
          borderWidth: 2,
          arrowEnd: !0,
          curvature: 0.4,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Triangle",
          number: 16,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [359, 84, 225, 60],
          visible: !0,
          variant: "polygon",
          sides: 3,
          fillColor: "#fef9c3",
          borderColor: "#ca8a04",
          borderWidth: 2,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Hexagon",
          number: 17,
          type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [450, 90, 225, 60],
          visible: !0,
          variant: "polygon",
          sides: 6,
          fillColor: "#ede9fe",
          borderColor: "#7c3aed",
          borderWidth: 2,
          script: ""
        },
        {
          id: ue("widget"),
          name: "FieldLabel",
          number: 18,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 225, 297, 17],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Text fields:",
          fontSize: 10,
          fontWeight: "bold",
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "OpaqueField",
          number: 19,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 165, 320, 54],
          visible: !0,
          variant: "opaque",
          lockText: !1,
          scrolling: !0,
          showLines: !0,
          dontSearch: !1,
          sharedText: !1,
          text: `Editable field
(style: opaque, with lines)`,
          fontSize: 10,
          color: "#222",
          script: ""
        },
        {
          id: ue("widget"),
          name: "ShadowField",
          number: 20,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [218, 165, 320, 54],
          visible: !0,
          variant: "shadow",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          text: `Locked text field
(style: shadow)`,
          fontSize: 10,
          color: "#444",
          script: ""
        }
      ]
    },
    // card 3: script demo
    {
      id: ue("card"),
      name: "Script Demo",
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: [
        {
          id: ue("widget"),
          name: "Header",
          number: 1,
          type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          variant: "rectangle",
          fillColor: "#1d3461",
          borderColor: "transparent",
          borderWidth: 0,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Title",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Script Demo",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Info",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 75],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          text: "This card demonstrates scripting. Each button has a script which runs when it is clicked.",
          fontSize: 11,
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "AnswerBtn",
          number: 3,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 143, 150, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => answer('Hello from a script!', 'OK'))"
        },
        {
          id: ue("widget"),
          name: "InputBtn",
          number: 4,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [229, 143, 150, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => ask('What is your name?', ''))"
        },
        {
          id: ue("widget"),
          name: "Open URL",
          number: 5,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [398, 143, 150, 33],
          visible: !0,
          variant: "shadow",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => openURL('https://github.com/rozek/webapp-crafter'))"
        },
        {
          id: ue("widget"),
          name: "NextCardBtn",
          number: 6,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [229, 143, 210, 33],
          visible: !0,
          variant: "standard",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(nextCard))"
        }
      ]
    },
    // card 4: widget demo
    {
      id: ue("card"),
      name: "Widget Demo",
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: [
        {
          id: ue("widget"),
          name: "Header",
          number: 1,
          type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          variant: "rectangle",
          fillColor: "#1d3461",
          borderColor: "transparent",
          borderWidth: 0,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Title",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "Widget Demo",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Info",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 45],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          text: "BC_Widget: objects fully defined in Preact + htm with their own state.",
          fontSize: 11,
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "Counter",
          number: 3,
          type: "generic",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [150, 300, 113, 195],
          visible: !0,
          Configuration: { label: "Clicks" },
          script: `on('render', () => {
  const count = me.count ?? 0
  const label = Configuration.label ?? 'Counter'
  return html\`
    <div style=\${{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', gap: '20px', height: '100%',
      fontFamily: 'system-ui, sans-serif',
      background: '#fff', borderRadius: '12px',
      border: '2px solid #1d3461', boxShadow: '0 2px 12px rgba(0,0,0,.12)',
    }}>
      <div style=\${{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '1px' }}>\${label}</div>
      <div style=\${{ fontSize: '54px', fontWeight: 'bold', color: '#1d3461', lineHeight: 1 }}>\${count}</div>
      <div style=\${{ display: 'flex', gap: '12px' }}>
        <button onClick=\${() => { me.count = count - 1 }}
          style=\${{ padding: '10px 28px', fontSize: '17px', cursor: 'pointer',
            borderRadius: '8px', border: '1px solid #ccc', background: '#f8f8f8' }}>−</button>
        <button onClick=\${() => { me.count = 0 }}
          style=\${{ padding: '10px 18px', fontSize: '11px', cursor: 'pointer',
            borderRadius: '8px', border: '1px solid #ccc', background: '#f8f8f8', color: '#888' }}>Reset</button>
        <button onClick=\${() => { me.count = count + 1 }}
          style=\${{ padding: '10px 28px', fontSize: '17px', cursor: 'pointer',
            borderRadius: '8px', border: '1px solid #ccc', background: '#f8f8f8' }}>+</button>
      </div>
    </div>
  \`
})`
        },
        {
          id: ue("widget"),
          name: "Clock",
          number: 4,
          type: "generic",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 225, 330, 75],
          visible: !0,
          Configuration: {},
          script: `let _timer = null
on('ready', () => { _timer = setInterval(() => { me._time = Date.now() }, 1000) })
on('obsolete', () => { if (_timer != null) { clearInterval(_timer) } })
on('render', () => {
  const now = new Date(me._time ?? Date.now())
  const pad = n => String(n).padStart(2, '0')
  const time = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds())
  return html\`
    <div style=\${{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      height: '100%', fontFamily: 'monospace', fontSize: '27px',
      fontWeight: 'bold', color: '#1d3461', letterSpacing: '4px',
      background: '#fff', borderRadius: '10px', border: '2px solid #1d3461',
    }}>\${time}</div>
  \`
})`
        },
        {
          id: ue("widget"),
          name: "StartBtn",
          number: 5,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [413, 128, 383, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(card('Start')))"
        }
      ]
    },
    // card 5: about BrowserCard
    {
      id: ue("card"),
      name: "About BrowserCard",
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: [
        {
          id: ue("widget"),
          name: "Header",
          number: 1,
          type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          variant: "rectangle",
          fillColor: "#1d3461",
          borderColor: "transparent",
          borderWidth: 0,
          script: ""
        },
        {
          id: ue("widget"),
          name: "Title",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          text: "About BrowserCard",
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "#ffffff",
          script: ""
        },
        {
          id: ue("widget"),
          name: "InfoText",
          number: 2,
          type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 285],
          visible: !0,
          variant: "transparent",
          lockText: !0,
          scrolling: !0,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          text: `BrowserCard (BC) is a browser-based reinterpretation of NovoCard, which itself was a reinterpretation of HyperCard (Apple, 1987).

Concept:
BrowserCard lets you create interactive card decks. Each deck consists of cards which may contain buttons, text fields, shapes, pictures and widgets.

Scripting:
Scripts are plain JavaScript. Event handlers are registered with on('message', () => ...). Available functions include go(), openURL(), answer(), ask(), card(), widget(), send(), print(), after() and every(). Available values: me, nextCard, prevCard, firstCard, lastCard.

Widgets:
BC_Widget is an object fully defined in Preact + htm with its own state. Its script registers on('render', () => html\`...\`) and receives html, Configuration and dispatch in addition to the full script context.

Technology:
- TypeScript + Preact + htm
- custom web elements <bc-designer> and <bc-deck>
- Vite as build tool
- deck data in JSON format
- persistence in IndexedDB (idb-keyval)`,
          fontSize: 11,
          color: "#1d3461",
          script: ""
        },
        {
          id: ue("widget"),
          name: "StartBtn",
          number: 3,
          type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [236, 128, 360, 33],
          visible: !0,
          variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          script: "on('click', () => go(card('Start')))"
        }
      ]
    }
  ]
}, Kp = JSON.stringify(t1), zt = ls("browser-card", "decks"), e0 = "bc-deck:";
async function Xp() {
  try {
    const t = ls("BrowserCard", "Stacks"), e = await xc(t);
    for (const r of e)
      if (typeof r == "string" && r.startsWith("bc-stack:")) {
        const n = e0 + r.slice(9), a = await un(r, t);
        await un(n, zt) == null && await Mi(n, a, zt), await T0(r, t);
      }
  } catch {
  }
}
const Vl = Xp();
function Hs(t) {
  return _.ValueIsPlainObject(t) && _.ValueIsString(t.id) && _.ValueIsString(t.type) && Os(t.Anchors) && Bs(t.Offsets);
}
function qs(t) {
  return _.ValueIsPlainObject(t) && _.ValueIsString(t.id) && _.ValueIsString(t.name) && _.ValueIsArray(t.objects) && t.objects.every(Hs);
}
function on(t) {
  return _.ValueIsPlainObject(t) && _.ValueIsString(t.name) && _.ValueIsArray(t.cards) && t.cards.every(qs);
}
const es = "web application/x-browsercard-card", ts = "web application/x-browsercard-widget";
async function jl(t, e) {
  try {
    const r = t.replace(/^web /, ""), n = new ClipboardItem({
      [t]: new Blob([e], { type: r }),
      "text/plain": new Blob([e], { type: "text/plain" })
    });
    return await navigator.clipboard.write([n]), !0;
  } catch (r) {
    console.warn("[BrowserCard] falling back to a plain text clipboard:", r);
  }
  try {
    return await navigator.clipboard.writeText(e), !0;
  } catch (r) {
    return console.warn("[BrowserCard] could not write to the clipboard:", r), !1;
  }
}
async function Yp() {
  try {
    const t = await navigator.clipboard.read();
    for (const e of t) {
      if (e.types.includes(es))
        return { Kind: "card", Serialization: await (await e.getType(es)).text() };
      if (e.types.includes(ts))
        return { Kind: "widget", Serialization: await (await e.getType(ts)).text() };
    }
  } catch (t) {
    console.warn("[BrowserCard] could not inspect the clipboard - trying plain text:", t);
  }
  try {
    const t = (await navigator.clipboard.readText()).trim(), e = JSON.parse(t);
    switch (!0) {
      case qs(e):
        return { Kind: "card", Serialization: t };
      case Hs(e):
        return { Kind: "widget", Serialization: t };
    }
  } catch (t) {
    console.warn("[BrowserCard] could not read from the clipboard:", t);
  }
  return null;
}
function t0(t) {
  const e = (r) => {
    if (r == null)
      return;
    const n = /-(\d+)$/.exec(r);
    n != null && (Oa = Math.max(Oa, parseInt(n[1], 10)));
  };
  e(t.id), t.cards.forEach((r) => {
    e(r.id), r.objects.forEach((n) => e(n.id));
  });
}
function Jp(t) {
  var r, n;
  const e = {};
  if (t.FontFamily && (e.fontFamily = t.FontFamily), t.FontSize != null && (e.fontSize = `${t.FontSize}px`), t.FontWeight && (e.fontWeight = F4[t.FontWeight]), t.FontStyle && (e.fontStyle = t.FontStyle), t.LineHeight != null && (e.lineHeight = `${t.LineHeight}px`), t.ForegroundColor && (e.color = t.ForegroundColor), t.TextAlignment && (e.textAlign = t.TextAlignment), t.Opacity != null && (e.opacity = t.Opacity), t.Cursor && (e.cursor = t.Cursor), (r = t.TextDecoration) != null && r.isActive) {
    const a = t.TextDecoration;
    let i = a.Line;
    a.Style && (i += ` ${a.Style}`), a.Color && (i += ` ${a.Color}`), a.Thickness != null && (i += ` ${a.Thickness}px`), e.textDecoration = i;
  }
  if ((n = t.TextShadow) != null && n.isActive && t.TextShadow.Color !== "transparent") {
    const a = t.TextShadow;
    e.textShadow = `${a.xOffset}px ${a.yOffset}px ${a.BlurRadius}px ${a.Color}`;
  }
  if (t.hasBackground === !1)
    e.background = "transparent";
  else if (t.BackgroundColor && (e.backgroundColor = t.BackgroundColor), t.BackgroundTexture) {
    const a = t.BackgroundTexture, i = {
      normal: "auto",
      contain: "contain",
      cover: "cover",
      fill: "100% 100%",
      tile: "auto"
    };
    e.backgroundImage = `url(${a.ImageURL})`, e.backgroundSize = i[a.Mode], e.backgroundRepeat = a.Mode === "tile" ? "repeat" : "no-repeat", e.backgroundPosition = `${a.xOffset}px ${a.yOffset}px`;
  }
  return e;
}
function Qp(t) {
  var r;
  const e = {};
  if (t.BorderWidths) {
    const [n, a, i, s] = t.BorderWidths;
    e.borderWidth = `${n}px ${a}px ${i}px ${s}px`;
  }
  if (t.BorderStyles) {
    const [n, a, i, s] = t.BorderStyles;
    e.borderStyle = `${n} ${a} ${i} ${s}`;
  }
  if (t.BorderColors) {
    const [n, a, i, s] = t.BorderColors;
    e.borderColor = `${n} ${a} ${i} ${s}`;
  }
  if (t.BorderRadii) {
    const [n, a, i, s] = t.BorderRadii;
    e.borderRadius = `${n}px ${a}px ${i}px ${s}px`;
  }
  if ((r = t.BoxShadow) != null && r.isActive) {
    const n = t.BoxShadow;
    e.boxShadow = `${n.xOffset}px ${n.yOffset}px ${n.BlurRadius}px ${n.SpreadRadius}px ${n.Color}`;
  }
  return e;
}
function Jt(t, e, r, n) {
  let a = 0, i = 0, s = 0, o = 0;
  switch (t[0]) {
    case "left-width":
      a = e[0], i = e[1];
      break;
    case "left-right":
      a = e[0], i = r - e[0] - e[1];
      break;
    case "width-right":
      i = e[0], a = r - e[0] - e[1];
      break;
  }
  switch (t[1]) {
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
  return { left: a, top: s, width: i, height: o };
}
function H0(t, e, r, n, a, i, s) {
  let o = 0, c = 0, d = 0, h = 0;
  switch (a[0]) {
    case "left-width":
      o = t, c = r;
      break;
    case "left-right":
      o = t, c = i - t - r;
      break;
    case "width-right":
      o = r, c = i - r - t;
      break;
  }
  switch (a[1]) {
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
  return [o, c, d, h];
}
function e2(t, e, r, n, a) {
  let i = null, s = null;
  return new Proxy(t, {
    get(o, c) {
      if (c === Ra)
        return s;
      switch (c) {
        case "own":
          return i ?? (i = {});
        case "Applet":
          return r;
        case "Card":
          return n;
        case "x": {
          const { left: d } = Jt(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "y": {
          const { top: d } = Jt(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "Width": {
          const { width: d } = Jt(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "Height": {
          const { height: d } = Jt(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "changeGeometryTo":
          return (d, h, f, b) => {
            const { W: v, H: k } = e.current, { left: $, top: M, width: I, height: y } = Jt(o.Anchors, o.Offsets, v, k), T = H0(d ?? $, h ?? M, f ?? I, b ?? y, o.Anchors, v, k);
            return o.Offsets = T, a(), T;
          };
        default:
          return Reflect.get(o, c);
      }
    },
    set(o, c, d) {
      return c === Ra ? (s = d, !0) : c === "own" ? (i = d, !0) : (Reflect.set(o, c, d), a(), !0);
    }
  });
}
function t2(t, e, r, n) {
  let a = null, i;
  return i = new Proxy(t, {
    get(s, o) {
      switch (o) {
        case "own":
          return a ?? (a = {});
        case "Applet":
          return e;
        case "Card":
          return i;
        case "WidgetList":
          return r.current;
        default:
          return Reflect.get(s, o);
      }
    },
    set(s, o, c) {
      return o === "own" ? (a = c, !0) : (Reflect.set(s, o, c), n(), !0);
    }
  }), i;
}
function r2(t, e, r) {
  let n = null, a = "", i = 0, s = 0, o;
  return o = new Proxy(t, {
    get(c, d) {
      if (d === Xa)
        return r;
      if (d === vn)
        return a;
      if (d === F0)
        return i;
      if (d === L0)
        return s;
      switch (d) {
        case "own":
          return n ?? (n = {});
        case "Applet":
          return o;
        case "Card":
          return e.current;
        case "Console_LineLimit":
          return Reflect.get(c, d) ?? Ls;
        case "Console_CharLimit":
          return Reflect.get(c, d) ?? Ds;
        default:
          return Reflect.get(c, d);
      }
    },
    set(c, d, h) {
      return d === "own" ? (n = h, !0) : d === vn ? (a = h, !0) : d === F0 ? (i = h, !0) : d === L0 ? (s = h, !0) : (Reflect.set(c, d, h), r(), !0);
    }
  }), o;
}
function n2(t, e, r) {
  const { left: n, top: a, width: i, height: s } = Jt(t.Anchors, t.Offsets, e, r);
  return {
    left: n,
    top: a,
    width: i,
    height: s,
    zIndex: t.zIndex,
    display: t.visible ? void 0 : "none",
    ...Jp(t),
    ...Qp(t)
  };
}
function ga(t, e, r, n, a, i) {
  const s = Math.sqrt(r * r + n * n);
  if (s < 1e-3)
    return "";
  const o = r / s, c = n / s, d = t - a * o, h = e - a * c;
  return `${t},${e} ${d - i * c},${h + i * o} ${d + i * c},${h - i * o}`;
}
function a2(t, e, r) {
  const n = t.borderColor ?? "#333", a = t.borderWidth ?? 2, i = t.fillColor ?? "transparent";
  if (t.variant === "rectangle" || t.variant === "rounded-rectangle" || t.variant === "oval") {
    const M = t.variant === "oval" ? "50%" : t.variant === "rounded-rectangle" ? `${t.cornerRadius ?? 12}px` : void 0;
    return Y`
      <div style=${{
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      background: i,
      border: `${a}px solid ${n}`,
      borderRadius: M
    }}></div>
    `;
  }
  if (t.variant === "polygon") {
    const M = Math.max(3, t.sides ?? 6), I = e / 2, y = r / 2, T = e / 2 - a, B = r / 2 - a, P = Array.from({ length: M }, (H, Q) => {
      const W = 2 * Math.PI * Q / M - Math.PI / 2;
      return `${I + T * Math.cos(W)},${y + B * Math.sin(W)}`;
    }).join(" ");
    return Y`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${r}`}>
        <polygon points=${P}
          fill=${i} stroke=${n} strokeWidth=${a} strokeLinejoin="round"/>
      </svg>
    `;
  }
  const s = t.arrowStart === !0, o = t.arrowEnd === !0, c = Math.max(a * 4, 10), d = c * 0.5, h = {
    stroke: n,
    strokeWidth: a,
    fill: "none",
    strokeLinecap: "round"
  };
  if (t.variant === "line") {
    const M = s ? Y`<polygon
      points=${ga(0, 0, -e, -r, c, d)} fill=${n} stroke="none"/>` : null, I = o ? Y`<polygon
      points=${ga(e, r, e, r, c, d)} fill=${n} stroke="none"/>` : null;
    return Y`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${r}`}>
        <line x1="0" y1="0" x2=${e} y2=${r} ...${h}/>
        ${M}${I}
      </svg>
    `;
  }
  const f = t.curvature ?? 0.4, b = e / 2 - f * r, v = r / 2 + f * e, k = s ? Y`<polygon
    points=${ga(0, 0, -b, -v, c, d)} fill=${n} stroke="none"/>` : null, $ = o ? Y`<polygon
    points=${ga(e, r, e - b, r - v, c, d)} fill=${n} stroke="none"/>` : null;
  return Y`
    <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${r}`}>
      <path d=${`M 0 0 Q ${b} ${v} ${e} ${r}`} ...${h}/>
      ${k}${$}
    </svg>
  `;
}
K0.set("button", async ({ on: t, me: e, html: r, dispatch: n }) => {
  const a = e;
  function i() {
    a.autoHilite === !0 && (a.variant === "checkbox" || a.variant === "radio") && (a.hilite = !a.hilite), n("click");
  }
  t("render", () => {
    const s = (
      // "text" takes precedence over the mere name
      a.text != null && a.text !== "" ? a.text : a.name
    );
    return r`
      <button
        class=${`bc-btn s-${a.variant ?? "default"}${a.hilite ? " hilite" : ""}`}
        disabled=${!a.enabled}
        style=${{ width: "100%", height: "100%" }}
        onClick=${a.enabled ? i : void 0}
        title=${a.name}
      >${a.showName ? s : null}</button>
    `;
  });
});
K0.set("field", async ({ on: t, me: e, html: r }) => {
  const n = e;
  t("render", () => {
    const a = n.scrolling ? " scrollable" : " no-scroll", i = n.showLines ? " show-lines" : "", s = `bc-field s-${n.variant ?? "default"}${a}${i}`, o = {
      fontSize: n.fontSize ?? 14,
      fontWeight: n.fontWeight ?? "normal",
      textAlign: n.textAlign ?? "left",
      color: n.color ?? "#111"
    };
    return n.lockText ? r`
          <div class=${s} style=${{ width: "100%", height: "100%", ...o }}>${n.text}</div>
        ` : r`
          <textarea
            class=${s}
            style=${{ ...o, width: "100%", height: "100%", padding: "4px 6px" }}
            onInput=${(c) => {
      n.text = c.target.value;
    }}
          >${n.text}</textarea>
        `;
  });
});
K0.set("shape", async ({ on: t, me: e, html: r }) => {
  const n = e;
  t("render", () => {
    const a = n.Width ?? 0, i = n.Height ?? 0;
    return r`${a2(n, a, i)}`;
  });
});
K0.set("picture", async ({ on: t, me: e, html: r }) => {
  const n = e;
  t("render", () => r`
    <img
      class=${"bc-picture s-" + (n.variant ?? "default")}
      src=${n.imageData}
      alt=${n.name}
      draggable=${!1}
    />
  `);
});
function i2({
  Obj: t,
  containerW: e,
  containerH: r,
  makeContext: n,
  deckProxy: a,
  cardProxy: i,
  onWidgetProxy: s,
  onReady: o,
  onMessage: c
}) {
  const [, d] = ht(0), h = dn(() => d((W) => W + 1), []), f = Be(null);
  f.current == null && (f.current = new Fs());
  const b = Be({ W: e, H: r });
  b.current = { W: e, H: r };
  const v = Be(null);
  v.current == null && (v.current = e2(t, b, a, i, h));
  const k = v.current, $ = Be(o);
  $.current = o;
  const M = Be(c);
  M.current = c;
  const I = Be(null);
  I.current == null && (I.current = n(k));
  const y = Be(void 0);
  if (y.current == null) {
    const W = f.current;
    y.current = {
      Configuration: t.Configuration ?? {},
      dispatch: (j) => {
        var pe;
        W.dispatch(j), (pe = M.current) == null || pe.call(M, j);
      }
    };
  }
  const B = (/* @__PURE__ */ new Set(["button", "field", "shape", "picture"])).has(t.type) ? `await behaveLike(${JSON.stringify(t.type)})
` : "";
  if (hr(() => {
    const W = f.current, { Params: j, Args: pe } = Ps(W, I.current, "widget", y.current);
    k[Ra] = W, s(t.id, k);
    let Ce = t.script ?? "";
    if (Ce.trim() !== "")
      try {
        new Function(`return (async () => {
${Ce}
})()`);
      } catch (Fe) {
        console.warn("[BrowserCard] syntax error in script of widget " + _.quoted(t.name) + ":", Fe), Ce = "";
      }
    const Ae = B + Ce;
    return W.run(Ae, j, pe).then(async () => {
      h(), await W.dispatch("ready"), $.current(t.id);
    }), () => {
      W.teardown();
    };
  }, [t.script]), !t.visible)
    return null;
  const H = f.current.renderResult() ?? null, Q = t.type === "shape" || t.type === "button" ? { overflow: "visible" } : { overflow: "hidden" };
  return Y`
    <div
      class=${`bc-obj${t.type === "shape" ? " bc-shape" : ""}`}
      style=${{ ...n2(t, e, r), ...Q }}
    >
      ${H}
    </div>
  `;
}
const Yn = 8, s2 = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#e5e7eb"/><circle cx="55" cy="35" r="10" fill="#9ca3af"/><path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/></svg>'
);
function Gl(t, e) {
  let r = t, n = 1;
  for (; e.has(r); )
    n += 1, r = `${t} ${n}`;
  return r;
}
function o2(t, e, r, n) {
  const a = {
    button: { BaseName: "Button", Width: 140, Height: 36 },
    field: { BaseName: "Field", Width: 200, Height: 80 },
    shape: { BaseName: "Shape", Width: 140, Height: 100 },
    picture: { BaseName: "Picture", Width: 160, Height: 120 },
    generic: { BaseName: "Widget", Width: 200, Height: 120 }
  }, { BaseName: i, Width: s, Height: o } = a[t], c = new Set(e.objects.map((v) => v.name));
  let d = i, h = 1;
  for (; c.has(d); )
    h += 1, d = `${i}-${h}`;
  const f = e.objects.reduce((v, k) => Math.max(v, k.zIndex), 0), b = {
    id: ue("widget"),
    name: d,
    number: f + 1,
    type: t,
    zIndex: f + 1,
    Anchors: ["left-width", "top-height"],
    Offsets: [
      Math.round((r - s) / 2),
      s,
      Math.round((n - o) / 2),
      o
    ],
    visible: !0,
    script: ""
  };
  switch (t) {
    case "button":
      Object.assign(b, {
        variant: "rounded-rect",
        showName: !0,
        autoHilite: !0,
        enabled: !0,
        sharedHilite: !1,
        text: ""
      });
      break;
    case "field":
      Object.assign(b, {
        variant: "opaque",
        lockText: !1,
        scrolling: !1,
        showLines: !1,
        dontSearch: !1,
        sharedText: !1,
        text: "Text",
        fontSize: 14
      });
      break;
    case "shape":
      Object.assign(b, {
        variant: "rectangle",
        fillColor: "#dbeafe",
        borderColor: "#3b82f6",
        borderWidth: 2
      });
      break;
    case "picture":
      Object.assign(b, {
        variant: "scale-aspect-fit",
        autoHilite: !1,
        imageData: s2,
        actualWidth: s,
        actualHeight: o
      });
      break;
    default:
      Object.assign(b, {
        Configuration: {},
        script: `on('render', () => html\`
  <div style=\${{
    display:'flex', alignItems:'center', justifyContent:'center',
    width:'100%', height:'100%', background:'#fff',
    border:'2px dashed #1d6fd8', borderRadius:'8px', color:'#1d6fd8',
  }}>new Widget</div>
\`)`
      });
  }
  return b;
}
function l2({
  Objects: t,
  CanvasW: e,
  CanvasH: r,
  Scale: n,
  selectedId: a,
  onSelect: i,
  onEdited: s,
  Grid: o = { isActive: !1, Width: 10, Height: 10 },
  onBeforeEdit: c
}) {
  const d = Be(null);
  function h(y, T, B, P = "") {
    y.stopPropagation(), y.preventDefault(), y.currentTarget.setPointerCapture(y.pointerId), d.current = {
      PointerId: y.pointerId,
      Mode: B,
      Direction: P,
      startX: y.clientX,
      startY: y.clientY,
      Origin: Jt(T.Anchors, T.Offsets, e, r),
      Obj: T,
      captured: !1
    };
  }
  function f(y) {
    const T = d.current;
    if (T == null || y.pointerId !== T.PointerId)
      return;
    T.captured || (T.captured = !0, c == null || c());
    const B = (y.clientX - T.startX) / n, P = (y.clientY - T.startY) / n;
    let { left: H, top: Q, width: W, height: j } = T.Origin;
    T.Mode === "move" ? (H += B, Q += P, o.isActive && (H = Math.round(H / o.Width) * o.Width, Q = Math.round(Q / o.Height) * o.Height)) : (T.Direction.includes("w") && (H += B, W -= B), T.Direction.includes("e") && (W += B), T.Direction.includes("n") && (Q += P, j -= P), T.Direction.includes("s") && (j += P), W < Yn && (T.Direction.includes("w") && (H = T.Origin.left + T.Origin.width - Yn), W = Yn), j < Yn && (T.Direction.includes("n") && (Q = T.Origin.top + T.Origin.height - Yn), j = Yn), o.isActive && (W = Math.max(o.Width, Math.round(W / o.Width) * o.Width), j = Math.max(o.Height, Math.round(j / o.Height) * o.Height), T.Direction.includes("w") && (H = T.Origin.left + T.Origin.width - W), T.Direction.includes("n") && (Q = T.Origin.top + T.Origin.height - j))), T.Obj.Offsets = H0(
      H,
      Q,
      W,
      j,
      T.Obj.Anchors,
      e,
      r
    ), s();
  }
  function b(y) {
    const T = d.current;
    T == null || y.pointerId !== T.PointerId || (y.currentTarget.releasePointerCapture(y.pointerId), d.current = null);
  }
  const v = t.find((y) => y.id === a), k = Math.max(6, 8 / n), $ = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
  function M(y, T) {
    return {
      width: k,
      height: k,
      cursor: y + "-resize",
      left: (y.includes("w") ? 0 : y.includes("e") ? T.width : T.width / 2) - k / 2,
      top: (y.includes("n") ? 0 : y.includes("s") ? T.height : T.height / 2) - k / 2
    };
  }
  const I = o.isActive ? {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
    backgroundSize: `${o.Width}px ${o.Height}px`
  } : {};
  return Y`
      <div class="bc-edit-layer" style=${I} onPointerDown=${() => i(null)}>
        ${t.map((y) => {
    const T = Jt(y.Anchors, y.Offsets, e, r);
    return Y`
            <div key=${y.id}
              class=${`bc-edit-hit${y.visible ? "" : " invisible"}`}
              style=${{ left: T.left, top: T.top, width: T.width, height: T.height, zIndex: y.zIndex }}
              onPointerDown=${(B) => {
      i(y.id), h(B, y, "move");
    }}
              onPointerMove=${f}
              onPointerUp=${b}
            ></div>
          `;
  })}
        ${v != null && (() => {
    const y = Jt(v.Anchors, v.Offsets, e, r);
    return Y`
            <div class="bc-selection-frame"
              style=${{ left: y.left, top: y.top, width: y.width, height: y.height }}>
              ${$.map((T) => Y`
                <div key=${T} class="bc-handle" style=${M(T, y)}
                  onPointerDown=${(B) => h(B, v, "resize", T)}
                  onPointerMove=${f}
                  onPointerUp=${b}
                ></div>
              `)}
            </div>
          `;
  })()}
      </div>
    `;
}
function c2({
  State: t,
  onClose: e
}) {
  const [r, n] = ht(() => ({
    x: Math.max(8, Math.round((window.innerWidth - 560) / 2)),
    y: Math.max(8, Math.round((window.innerHeight - 420) / 2)),
    Width: 560,
    Height: 420
  })), a = Be(t.Value), i = Be(null);
  function s(h, f) {
    h.stopPropagation(), h.preventDefault(), h.currentTarget.setPointerCapture(h.pointerId), i.current = {
      PointerId: h.pointerId,
      Mode: f,
      startX: h.clientX,
      startY: h.clientY,
      Origin: { ...r }
    };
  }
  function o(h) {
    const f = i.current;
    if (f == null || h.pointerId !== f.PointerId)
      return;
    const b = h.clientX - f.startX, v = h.clientY - f.startY;
    f.Mode === "move" ? n((k) => ({
      ...k,
      x: Math.max(0, f.Origin.x + b),
      y: Math.max(0, f.Origin.y + v)
    })) : n((k) => ({
      ...k,
      Width: Math.max(300, f.Origin.Width + b),
      Height: Math.max(200, f.Origin.Height + v)
    }));
  }
  function c(h) {
    const f = i.current;
    f == null || h.pointerId !== f.PointerId || (h.currentTarget.releasePointerCapture(h.pointerId), i.current = null);
  }
  function d() {
    t.onCommit(a.current), e();
  }
  return hr(() => {
    function h(f) {
      f.key === "Escape" && (f.stopPropagation(), e()), f.key === "Enter" && (f.metaKey || f.ctrlKey) && (f.stopPropagation(), d());
    }
    return window.addEventListener("keydown", h, !0), () => window.removeEventListener("keydown", h, !0);
  }, []), Y`
      <div class="bc-editor-backdrop"></div>
      <div class="bc-editor-window"
        style=${{ left: r.x, top: r.y, width: r.Width, height: r.Height }}>
        <div class="bc-editor-header"
          onPointerDown=${(h) => s(h, "move")}
          onPointerMove=${o}
          onPointerUp=${c}
        >${t.Title}</div>
        <textarea class="bc-editor-textarea" spellcheck=${!1}
          ref=${(h) => {
    h != null && h.dataset.focused == null && (h.dataset.focused = "true", h.focus());
  }}
          defaultValue=${t.Value}
          onInput=${(h) => {
    a.current = h.target.value;
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
          onPointerUp=${c}
        ></div>
      </div>
    `;
}
function u2({
  Widget: t,
  CanvasW: e,
  CanvasH: r,
  onEdited: n,
  CardNames: a = [],
  CardIndex: i = 0,
  onDelete: s,
  onReorder: o,
  onMoveTo: c,
  Card: d = null,
  Deck: h = null,
  onOpenEditor: f,
  onBeforeEdit: b,
  onCopy: v
}) {
  if (t == null) {
    let D = function(le, ie) {
      b == null || b(`card:${d.id}:${le}`), d[le] = ie, n();
    }, ne = function(le, ie) {
      h != null && (b == null || b(`deck:${le}`), h[le] = ie, n());
    };
    if (d == null)
      return Y`
          <div class="bc-props-panel">
            <div class="bc-props-empty">
              no widget selected<br/><br/>
              click a widget to inspect and edit its properties<br/><br/>
              use "+ New" in the menu bar to create a new widget
            </div>
          </div>
        `;
    const be = d.color ?? "#ffffff", J = /^#[0-9a-f]{6}$/i.test(be);
    return Y`
        <div class="bc-props-panel">
          <div class="bc-props-title">${d.name}</div>
          <div class="bc-props-subtitle">card · ${d.id}</div>
          <div class="bc-props-hint">
            no widget selected - these are the properties of the card itself
          </div>

          <div class="bc-props-section">General</div>
          <div class="bc-props-row">
            <label>Name</label>
            <input type="text" value=${d.name}
              onInput=${(le) => D("name", le.target.value)}/>
          </div>
          <div class="bc-props-row">
            <label>Color</label>
            <input type="color" value=${J ? be : "#ffffff"}
              onInput=${(le) => D("color", le.target.value)}/>
            <input type="text" value=${be}
              onInput=${(le) => D("color", le.target.value)}/>
          </div>
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${!d.dontSearch}
              onChange=${(le) => D("dontSearch", !le.target.checked)}/>
          </div>

          ${h != null && Y`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${h.CardWidth ?? 600}
                onInput=${(le) => {
      const ie = parseFloat(le.target.value);
      isFinite(ie) && ie >= 50 && ne("CardWidth", ie);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${h.CardHeight ?? 450}
                onInput=${(le) => {
      const ie = parseFloat(le.target.value);
      isFinite(ie) && ie >= 50 && ne("CardHeight", ie);
    }}/>
            </div>

            <div class="bc-props-section">Grid (Deck)</div>
            <div class="bc-props-row">
              <label>snap to grid</label>
              <input type="checkbox" checked=${h.SnapToGrid === !0}
                onChange=${(le) => ne("SnapToGrid", le.target.checked)}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Width</label>
              <input type="number" min="1" value=${h.GridWidth ?? 10}
                onInput=${(le) => {
      const ie = parseFloat(le.target.value);
      isFinite(ie) && ie >= 1 && ne("GridWidth", ie);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${h.GridHeight ?? 10}
                onInput=${(le) => {
      const ie = parseFloat(le.target.value);
      isFinite(ie) && ie >= 1 && ne("GridHeight", ie);
    }}/>
            </div>
          `}

          <div class="bc-props-section">Script</div>
          <div class="bc-props-row column">
            <div class="bc-props-rowheader">
              <label>Script</label>
              ${f != null && Y`
                <button class="bc-props-expand" title="open in editor window"
                  onClick=${() => f(
      `Card "${d.name}" - Script`,
      d.script ?? "",
      (le) => D("script", le)
    )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${!1} defaultValue=${d.script ?? ""}
              onChange=${(le) => D("script", le.target.value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `;
  }
  const k = Jt(t.Anchors, t.Offsets, e, r);
  function $(D, ne) {
    b == null || b(`prop:${t.id}:${D}`), t[D] = ne, n();
  }
  function M(D, ne, be, J) {
    b == null || b(`geo:${t.id}`), t.Offsets = H0(
      D ?? k.left,
      ne ?? k.top,
      be ?? k.width,
      J ?? k.height,
      t.Anchors,
      e,
      r
    ), n();
  }
  function I(D, ne) {
    b == null || b(`anchors:${t.id}`);
    const be = [...t.Anchors];
    be[D] = ne, t.Anchors = be, t.Offsets = H0(
      k.left,
      k.top,
      k.width,
      k.height,
      be,
      e,
      r
    ), n();
  }
  function y(D, ne) {
    return Y`<input type="number" value=${Math.round(D * 100) / 100}
        onInput=${(be) => {
      const J = parseFloat(be.target.value);
      isFinite(J) && ne(J);
    }}/>`;
  }
  function T(D, ne) {
    return Y`<div class="bc-props-row">
        <label>${D}</label>
        <input type="text" value=${t[ne] ?? ""}
          onInput=${(be) => $(ne, be.target.value)}/>
      </div>`;
  }
  function B(D, ne, be = 0) {
    return Y`<div class="bc-props-row">
        <label>${D}</label>
        ${y(
      t[ne] ?? be,
      (J) => $(ne, J)
    )}
      </div>`;
  }
  function P(D, ne) {
    return Y`<div class="bc-props-row">
        <label>${D}</label>
        <input type="checkbox" checked=${!!t[ne]}
          onChange=${(be) => $(ne, be.target.checked)}/>
      </div>`;
  }
  function H(D, ne, be) {
    return Y`<div class="bc-props-row">
        <label>${D}</label>
        <select value=${t[ne] ?? be[0]}
          onChange=${(J) => $(ne, J.target.value)}>
          ${be.map((J) => Y`<option key=${J} value=${J}>${J}</option>`)}
        </select>
      </div>`;
  }
  function Q(D, ne, be) {
    const J = t[ne] ?? be, le = /^#[0-9a-f]{6}$/i.test(J);
    return Y`<div class="bc-props-row">
        <label>${D}</label>
        <input type="color" value=${le ? J : "#000000"}
          onInput=${(ie) => $(ne, ie.target.value)}/>
        <input type="text" value=${J}
          onInput=${(ie) => $(ne, ie.target.value)}/>
      </div>`;
  }
  const W = (
    // user-facing name of the widget's type
    t.type === "generic" ? "custom widget" : t.type
  );
  function j(D, ne, be) {
    return Y`<div class="bc-props-rowheader">
        <label>${D}</label>
        ${f != null && Y`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => f(
      `${W} "${t.name}" - ${D}`,
      ne(),
      be
    )}>⤢</button>
        `}
      </div>`;
  }
  function pe(D, ne, be = 4) {
    return Y`<div class="bc-props-row column">
        ${j(
      D,
      () => String(t[ne] ?? ""),
      (J) => $(ne, J)
    )}
        <textarea rows=${be} defaultValue=${t[ne] ?? ""}
          onInput=${(J) => $(ne, J.target.value)}
        ></textarea>
      </div>`;
  }
  function Ce(D) {
    try {
      $("Configuration", JSON.parse(D));
    } catch (ne) {
      console.warn('[BrowserCard] invalid JSON for "Configuration":', ne), window.alert("The given configuration is no valid JSON and was not applied.");
    }
  }
  function Ae() {
    return Y`<div class="bc-props-row column">
        ${j(
      "Configuration (JSON)",
      () => JSON.stringify(t.Configuration ?? {}, null, 2),
      Ce
    )}
        <textarea rows="5" spellcheck=${!1}
          defaultValue=${JSON.stringify(t.Configuration ?? {}, null, 2)}
          onChange=${(D) => Ce(D.target.value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`;
  }
  function Fe() {
    return Y`<div class="bc-props-row column">
        ${j(
      "Script",
      () => t.script ?? "",
      (D) => $("script", D)
    )}
        <textarea rows="8" spellcheck=${!1} defaultValue=${t.script ?? ""}
          onChange=${(D) => $("script", D.target.value)}
        ></textarea>
        <div class="bc-props-hint">applied when the field loses focus</div>
      </div>`;
  }
  let ze = null;
  switch (t.type) {
    case "button":
      ze = Y`
          ${H("Style", "variant", ["rounded-rect", "rectangle", "oval", "shadow", "checkbox", "radio", "standard", "transparent"])}
          ${T("Text", "text")}
          ${P("show label", "showName")}
          ${P("enabled", "enabled")}
          ${P("auto-hilite", "autoHilite")}
          ${P("hilite", "hilite")}
        `;
      break;
    case "field":
      ze = Y`
          ${H("Style", "variant", ["opaque", "transparent", "shadow", "rectangle"])}
          ${pe("Text", "text")}
          ${P("locked", "lockText")}
          ${P("scrolling", "scrolling")}
          ${P("show lines", "showLines")}
          ${B("Font Size", "fontSize", 14)}
          ${H("Font Weight", "fontWeight", ["normal", "bold"])}
          ${H("Alignment", "textAlign", ["left", "center", "right"])}
          ${Q("Color", "color", "#111111")}
        `;
      break;
    case "shape":
      ze = Y`
          ${H("Style", "variant", ["rectangle", "rounded-rectangle", "oval", "line", "arc", "polygon"])}
          ${Q("Fill Color", "fillColor", "transparent")}
          ${Q("Border Color", "borderColor", "#333333")}
          ${B("Border Width", "borderWidth", 2)}
          ${P("arrow at start", "arrowStart")}
          ${P("arrow at end", "arrowEnd")}
          ${B("Curvature", "curvature", 0.4)}
          ${B("Sides", "sides", 6)}
          ${B("Corner Radius", "cornerRadius", 12)}
        `;
      break;
    case "picture":
      ze = Y`
          ${H("Style", "variant", ["scale-aspect-fill", "scale-aspect-fit", "scale-to-fill", "actual-size", "center"])}
          ${T("Image URL", "imageData")}
        `;
      break;
    default:
      ze = Ae();
  }
  return Y`
      <div class="bc-props-panel">
        <div class="bc-props-title">${t.name}</div>
        <div class="bc-props-subtitle">${W} · ${t.id}</div>

        <div class="bc-props-section">General</div>
        ${T("Name", "name")}
        ${P("visible", "visible")}
        ${B("z-Index", "zIndex", 0)}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${y(k.left, (D) => M(D))}
          ${y(k.top, (D) => M(void 0, D))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${y(k.width, (D) => M(void 0, void 0, D))}
          ${y(k.height, (D) => M(void 0, void 0, void 0, D))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${t.Anchors[0]}
            onChange=${(D) => I(0, D.target.value)}>
            ${Lu.map((D) => Y`<option key=${D} value=${D}>${D}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${t.Anchors[1]}
            onChange=${(D) => I(1, D.target.value)}>
            ${Fu.map((D) => Y`<option key=${D} value=${D}>${D}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">Arrange</div>
        <div class="bc-props-row">
          <label>Order</label>
          <button class="bc-props-btn" title="to back"        onClick=${() => o == null ? void 0 : o("back")}>⤓</button>
          <button class="bc-props-btn" title="send backward"  onClick=${() => o == null ? void 0 : o("backward")}>↓</button>
          <button class="bc-props-btn" title="bring forward"  onClick=${() => o == null ? void 0 : o("forward")}>↑</button>
          <button class="bc-props-btn" title="to front"       onClick=${() => o == null ? void 0 : o("front")}>⤒</button>
        </div>
        <div class="bc-props-row">
          <label>Card</label>
          <select value=${String(i)}
            onChange=${(D) => c == null ? void 0 : c(parseInt(D.target.value, 10))}>
            ${a.map((D, ne) => Y`<option key=${ne} value=${String(ne)}>${D}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">${t.type === "generic" ? "Custom Widget" : "Appearance"}</div>
        ${ze}

        <div class="bc-props-section">Script</div>
        ${Fe()}

        <button class="bc-props-btn copy"   onClick=${v}>Copy Widget</button>
        <button class="bc-props-btn delete" onClick=${s}>Delete Widget</button>
      </div>
    `;
}
function C0(t, e, r) {
  return Math.max(e, Math.min(r, t));
}
function d2({
  Card: t,
  Scale: e,
  CanvasW: r,
  CanvasH: n,
  makeContext: a,
  deckProxy: i,
  onCardProxy: s,
  onCardReady: o,
  onMessage: c,
  isEditing: d = !1,
  selectedId: h = null,
  onSelect: f,
  onEdited: b,
  Grid: v,
  onBeforeEdit: k
}) {
  const [, $] = ht(0), M = dn(() => $((ie) => ie + 1), []), I = Be(null);
  I.current == null && (I.current = new Fs());
  const y = Be(o);
  y.current = o;
  const T = Be(c);
  T.current = c;
  const B = u0(
    () => t.objects,
    [t]
  ), P = Be([]), H = Be(/* @__PURE__ */ new Map()), Q = Be(null);
  Q.current == null && (Q.current = t2(t, i, P, M));
  const W = Q.current, j = Be(/* @__PURE__ */ new Set()), pe = Be(!1), Ce = Be(!1);
  function Ae() {
    Ce.current || pe.current && j.current.size >= B.length && (Ce.current = !0, I.current.dispatch("ready").then(() => y.current()));
  }
  function Fe(ie) {
    j.current.add(ie), Ae();
  }
  function ze(ie, Le) {
    H.current.set(ie, Le), P.current = B.map((je) => H.current.get(je.id)).filter((je) => je != null);
  }
  const D = Be(null);
  D.current == null && (D.current = a(W)), hr(() => {
    s(W);
    const ie = I.current, { Params: Le, Args: je } = Ps(ie, D.current, "card");
    return pe.current = !1, Ce.current = !1, j.current.clear(), ie.run(t.script ?? "", Le, je).then(() => {
      pe.current = !0, M(), Ae();
    }), () => {
      ie.teardown();
    };
  }, [t.script]);
  const ne = I.current, be = ne.renderResult() ?? null, J = {
    width: r,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left",
    background: t.color ?? "#fff"
  }, le = {
    width: r * e,
    height: n * e,
    position: "relative",
    flexShrink: 0
  };
  return Y`
    <div style=${le}>
      <div class="bc-card-canvas" style=${J}>
        ${be}
        ${B.map((ie) => Y`
          <${i2}
            key=${ie.id}
            Obj=${ie}
            containerW=${r}
            containerH=${n}
            makeContext=${a}
            deckProxy=${i}
            cardProxy=${W}
            onWidgetProxy=${ze}
            onReady=${Fe}
            onMessage=${(Le) => {
    var je;
    ne.dispatch(Le), (je = T.current) == null || je.call(T, Le);
  }}
          />
        `)}
        ${d && Y`
          <${l2}
            Objects=${B}
            CanvasW=${r}
            CanvasH=${n}
            Scale=${e}
            selectedId=${h}
            onSelect=${f ?? (() => {
  })}
            onEdited=${b ?? (() => {
  })}
            Grid=${v}
            onBeforeEdit=${k}
          />
        `}
      </div>
    </div>
  `;
}
function h2({
  Card: t,
  CanvasW: e,
  CanvasH: r
}) {
  const a = 88 / Math.max(1, e), i = Math.max(24, Math.round(r * a));
  return Y`
    <div class="bc-card-thumb"
      style=${{ width: 88, height: i, background: t.color ?? "#fff" }}>
      ${t.objects.filter((s) => s.visible).map((s) => {
    const o = Jt(s.Anchors, s.Offsets, e, r), c = s.type === "shape" ? s.fillColor ?? "#9ca3af" : s.type === "button" ? "#1d6fd8" : s.type === "field" ? "rgba(0,0,0,0.15)" : s.type === "picture" ? "#9ca3af" : "#7c3aed";
    return Y`
          <div key=${s.id} style=${{
      position: "absolute",
      left: o.left * a,
      top: o.top * a,
      width: Math.max(1, o.width * a),
      height: Math.max(1, o.height * a),
      background: c,
      borderRadius: "1px"
    }}></div>
        `;
  })}
    </div>
  `;
}
function f2({
  DeckName: t,
  CardIndex: e,
  CardCount: r,
  activeOverlay: n,
  onOverlayToggle: a,
  onGoFirst: i,
  onGoPrev: s,
  onGoNext: o,
  onGoLast: c,
  isReadOnly: d = !0,
  isEditing: h = !1,
  onEditToggle: f,
  onInsert: b,
  onDeckSave: v,
  onDeckRevert: k,
  onDeckReset: $,
  onDeckExport: M,
  onDeckImport: I,
  onDeckEmbed: y,
  onDeckStandalone: T,
  onDeckImportURL: B,
  onCardAdd: P,
  onCardDuplicate: H,
  onCardRename: Q,
  onCardDelete: W,
  onCardMove: j,
  onCardCopy: pe,
  onPaste: Ce,
  canUndo: Ae = !1,
  canRedo: Fe = !1,
  onUndo: ze,
  onRedo: D
}) {
  const ne = e === 0, be = e === r - 1;
  function J(le) {
    a(n === le ? null : le);
  }
  return Y`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => J("decks-panel")} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${n === "cards-panel" ? " active" : ""}`}
        onClick=${() => J("cards-panel")}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "go-menu" ? " active" : ""}`}
          onClick=${() => J("go-menu")}
          title="Navigate"
        >Go ▾</button>
        ${n === "go-menu" && Y`
          <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${ne ? " disabled" : ""}`}
              onClick=${() => {
    i(), a(null);
  }}>First Card</div>
            <div class=${`bc-dropdown-item${ne ? " disabled" : ""}`}
              onClick=${() => {
    s(), a(null);
  }}>Previous Card</div>
            <div class=${`bc-dropdown-item${be ? " disabled" : ""}`}
              onClick=${() => {
    o(), a(null);
  }}>Next Card</div>
            <div class=${`bc-dropdown-item${be ? " disabled" : ""}`}
              onClick=${() => {
    c(), a(null);
  }}>Last Card</div>
          </div>
        `}
      </div>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "deck-menu" ? " active" : ""}`}
          onClick=${() => J("deck-menu")}
          title="deck operations"
        >Deck ▾</button>
        ${n === "deck-menu" && Y`
          <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    v == null || v(), a(null);
  }}>Save Deck</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    k == null || k(), a(null);
  }}>Revert to Saved</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    $ == null || $(), a(null);
  }}>Reset to Original</div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    M == null || M(), a(null);
  }}>Export as JSON</div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    y == null || y(), a(null);
  }}>Export for Embedding…</div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    T == null || T(), a(null);
  }}>Export as Standalone App…</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    I == null || I(), a(null);
  }}>Import from JSON…</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    B == null || B(), a(null);
  }}>Import from URL…</div>
          </div>
        `}
      </div>
      ${h && Y`
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "card-menu" ? " active" : ""}`}
            onClick=${() => J("card-menu")}
            title="card operations"
          >Card ▾</button>
          ${n === "card-menu" && Y`
            <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => {
    P == null || P(), a(null);
  }}>New Card…</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    H == null || H(), a(null);
  }}>Duplicate Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    Q == null || Q(), a(null);
  }}>Rename Card…</div>
              <div class="bc-dropdown-separator"></div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    pe == null || pe(), a(null);
  }}>Copy Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    Ce == null || Ce(), a(null);
  }}>Paste from Clipboard</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${ne ? " disabled" : ""}`}
                onClick=${() => {
    j == null || j(-1), a(null);
  }}>Move Card backward</div>
              <div class=${`bc-dropdown-item${be ? " disabled" : ""}`}
                onClick=${() => {
    j == null || j(1), a(null);
  }}>Move Card forward</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${r <= 1 ? " disabled" : ""}`}
                onClick=${() => {
    W == null || W(), a(null);
  }}>Delete Card…</div>
            </div>
          `}
        </div>
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "insert-menu" ? " active" : ""}`}
            onClick=${() => J("insert-menu")}
            title="insert a new widget"
          >+ New ▾</button>
          ${n === "insert-menu" && Y`
            <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              ${[
    { Type: "button", Label: "Button" },
    { Type: "field", Label: "Field" },
    { Type: "shape", Label: "Shape" },
    { Type: "picture", Label: "Picture" },
    { Type: "generic", Label: "Custom Widget" }
  ].map(({ Type: le, Label: ie }) => Y`
                <div key=${le} class="bc-dropdown-item"
                  onClick=${() => {
    b == null || b(le), a(null);
  }}>${ie}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${!Ae}
          onClick=${ze} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${!Fe}
          onClick=${D} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
      `}
      <div class="bc-menu-bar-title">${t}</div>
      ${!d && Y`
        <button
          class=${`bc-menu-btn${h ? " active" : ""}`}
          onClick=${f}
          title=${h ? "switch to browse mode" : "switch to edit mode"}
        >${h ? "✓ Done" : "✎ Edit"}</button>
      `}
    </div>
  `;
}
function p2({
  CardIndex: t,
  CardCount: e,
  onFirst: r,
  onPrev: n,
  onNext: a,
  onLast: i,
  onBack: s,
  historyLen: o,
  consoleShown: c = !1,
  onConsoleToggle: d,
  onScreenshot: h
}) {
  const f = t === 0, b = t === e - 1;
  return Y`
    <div class="bc-bottom-bar">
      <button class="bc-nav-btn" onClick=${s} disabled=${o === 0} title="Back">◁</button>
      <div class="bc-bottom-bar-center">
        <button class="bc-nav-btn" onClick=${r} disabled=${f} title="First Card">«</button>
        <button class="bc-nav-btn" onClick=${n}  disabled=${f} title="Previous Card">‹</button>
        <span class="bc-card-counter">${t + 1} / ${e}</span>
        <button class="bc-nav-btn" onClick=${a}  disabled=${b}  title="Next Card">›</button>
        <button class="bc-nav-btn" onClick=${i}  disabled=${b}  title="Last Card">»</button>
      </div>
      <button
        class="bc-nav-btn"
        style=${{ fontSize: 13, minWidth: 40 }}
        onClick=${h} title="download a screenshot of this card"
      >📷</button>
      <button
        class=${`bc-nav-btn${c ? " active" : ""}`}
        style=${{ fontSize: 13, minWidth: 40 }}
        onClick=${d} title="toggle console"
      >⌨</button>
    </div>
  `;
}
function m2({ State: t, onClose: e }) {
  if (t == null)
    return null;
  if (t.kind === "answer")
    return Y`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${t.message}</div>
          <div class="bc-dialog-buttons">
            ${t.buttons.map((n) => Y`
              <button key=${n} class="bc-dialog-btn primary" onClick=${() => e(n)}>${n}</button>
            `)}
          </div>
        </div>
      </div>
    `;
  let r = t.defaultValue;
  return Y`
    <div class="bc-dialog-backdrop">
      <div class="bc-dialog">
        <div class="bc-dialog-title">BrowserCard</div>
        <div class="bc-dialog-msg">${t.prompt}</div>
        <input
          ref=${(n) => n == null ? void 0 : n.focus()}
          class="bc-dialog-input" type="text"
          defaultValue=${t.defaultValue}
          onInput=${(n) => {
    r = n.target.value;
  }}
          onKeyDown=${(n) => n.key === "Enter" && e(r)}
        />
        <div class="bc-dialog-buttons">
          <button class="bc-dialog-btn secondary" onClick=${() => e(null)}>Cancel</button>
          <button class="bc-dialog-btn primary"   onClick=${() => e(r)}>OK</button>
        </div>
      </div>
    </div>
  `;
}
function r1({
  deck: t,
  isReadOnly: e,
  withChrome: r = !0,
  StorageKey: n = "",
  onDeckSave: a,
  onDeckRevert: i,
  onDeckReset: s,
  onDeckExport: o,
  onDeckImport: c,
  onDeckList: d,
  onDeckOpen: h,
  onDeckCreate: f,
  onDeckDelete: b,
  onDeckRename: v,
  onDeckEmbed: k,
  onDeckStandalone: $,
  onDeckImportURL: M
}) {
  const I = t ?? t1, [y] = ht(I), [T, B] = ht(0), [P, H] = ht([]), [Q, W] = ht(null), [j, pe] = ht(null), [Ce, Ae] = ht(1), [Fe, ze] = ht(Ji), [D, ne] = ht(Qi), [be, J] = ht(!1), le = Be(null), ie = Be(0);
  ie.current = T;
  const [Le, je] = ht("browse"), [Ee, ft] = ht(null), _t = Le === "edit" && !e;
  function zr() {
    Le === "edit" && (a == null || a()), je((E) => E === "edit" ? "browse" : "edit"), ft(null);
  }
  hr(() => {
    ft(null);
  }, [T]);
  const [Me, Re] = ht(null);
  function Dt() {
    if (d == null) {
      Re([]);
      return;
    }
    d().then(Re);
  }
  hr(() => {
    Q === "decks-panel" && (Re(null), Dt());
  }, [Q]);
  function oe(E, z) {
    return new Promise(
      (V) => pe({ kind: "ask", prompt: E, defaultValue: z, resolve: V })
    );
  }
  function Ct(E, ...z) {
    return new Promise(
      (V) => pe({ kind: "answer", message: E, buttons: z, resolve: V })
    );
  }
  async function Nr() {
    var z;
    const E = (z = await oe("Name of the new deck:", "")) == null ? void 0 : z.trim();
    E == null || E === "" || await (f == null ? void 0 : f(E));
  }
  async function gr(E) {
    var V;
    const z = (V = await oe("New name for this deck:", E.Name)) == null ? void 0 : V.trim();
    z == null || z === "" || z === E.Name || (await (v == null ? void 0 : v(E.Key, z)), Dt());
  }
  async function tr() {
    var z;
    const E = (z = await oe("URL of the deck to import:", "https://")) == null ? void 0 : z.trim();
    E == null || E === "" || E === "https://" || await (M == null ? void 0 : M(E));
  }
  async function xn(E) {
    await Ct(
      `Really delete deck "${E.Name}"?`,
      "Delete",
      "Cancel"
    ) === "Delete" && (await (b == null ? void 0 : b(E.Key)), Dt());
  }
  async function Rr() {
    var V;
    const E = (V = await oe("Name of the new card:", "")) == null ? void 0 : V.trim();
    if (E == null || E === "")
      return;
    if (y.cards.some((de) => de.name === E)) {
      await Ct(`A card named "${E}" already exists.`, "OK");
      return;
    }
    const z = {
      id: ue("card"),
      name: E,
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: []
    };
    wt(), y.cards.splice(T + 1, 0, z), at({ type: "card-index", index: T + 1 }), K();
  }
  function Qr(E) {
    return y.cards.findIndex((z) => z.id === E);
  }
  function br(E) {
    const z = y.cards[E];
    if (z == null)
      return;
    const V = JSON.parse(JSON.stringify(z));
    V.id = ue("card"), V.objects.forEach((Ne) => {
      Ne.id = ue("widget");
    });
    let de = z.name + " Copy", fe = 1;
    for (; y.cards.some((Ne) => Ne.name === de); )
      fe += 1, de = z.name + " Copy " + fe;
    V.name = de, wt(), y.cards.splice(E + 1, 0, V), at({ type: "card-index", index: E + 1 }), K();
  }
  async function Or(E) {
    var de;
    const z = y.cards[E];
    if (z == null)
      return;
    const V = (de = await oe("New name for this card:", z.name)) == null ? void 0 : de.trim();
    if (!(V == null || V === "" || V === z.name)) {
      if (y.cards.some((fe) => fe.name === V)) {
        await Ct(`A card named "${V}" already exists.`, "OK");
        return;
      }
      wt(), z.name = V, K();
    }
  }
  async function Mt(E) {
    const z = y.cards[E];
    if (z == null)
      return;
    if (y.cards.length <= 1) {
      await Ct("The last remaining card cannot be deleted.", "OK");
      return;
    }
    if (await Ct(
      `Really delete card "${z.name}" and all its widgets?`,
      "Delete",
      "Cancel"
    ) !== "Delete")
      return;
    wt();
    const de = y.cards[T].id;
    y.cards.splice(E, 1), H([]), ft(null);
    const fe = Qr(de);
    B(fe >= 0 ? fe : C0(E, 0, y.cards.length - 1)), K();
  }
  function Br(E, z) {
    const V = E + z;
    if (V < 0 || V >= y.cards.length)
      return;
    wt();
    const de = y.cards[T].id, [fe] = y.cards.splice(E, 1);
    y.cards.splice(V, 0, fe), H([]), B(Math.max(0, Qr(de))), K();
  }
  const [vr, rr] = ht(null), [Et, wr] = ht(0);
  function Ht(E, z, V) {
    rr({
      Title: E,
      Value: z,
      onCommit: (de) => {
        V(de), wr((fe) => fe + 1);
      }
    });
  }
  async function nr() {
    await jl(
      es,
      JSON.stringify(y.cards[T])
    ) || await Ct("BrowserCard could not write to the clipboard.", "OK");
  }
  async function Lt() {
    if (Ee == null) {
      await nr();
      return;
    }
    const E = y.cards[T].objects.find((V) => V.id === Ee);
    if (E == null)
      return;
    await jl(ts, JSON.stringify(E)) || await Ct("BrowserCard could not write to the clipboard.", "OK");
  }
  async function xr() {
    await Lt(), Ee != null ? Z() : await Mt(T);
  }
  async function yn() {
    const E = await Yp();
    if (E == null) {
      await Ct(
        "The clipboard does not contain a BrowserCard card or widget - or BrowserCard was not allowed to read the clipboard (please check your browser permissions, the console may have details).",
        "OK"
      );
      return;
    }
    let z;
    try {
      z = JSON.parse(E.Serialization);
    } catch {
      return;
    }
    const V = y.cards[T];
    if (E.Kind === "card") {
      if (!qs(z))
        return;
      const de = z;
      de.id = ue("card"), de.objects.forEach((fe) => {
        fe.id = ue("widget");
      }), de.name = Gl(
        de.name,
        new Set(y.cards.map((fe) => fe.name))
      ), wt(), y.cards.splice(T + 1, 0, de), at({ type: "card-index", index: T + 1 });
    } else {
      if (!Hs(z))
        return;
      const de = V.objects.reduce((Ne, Ze) => Math.max(Ne, Ze.zIndex), 0), fe = z;
      fe.id = ue("widget"), fe.name = Gl(
        fe.name ?? "Widget",
        new Set(V.objects.map((Ne) => Ne.name))
      ), fe.zIndex = de + 1, fe.number = de + 1, wt(), V.objects.push(fe), ft(fe.id);
    }
    K();
  }
  async function m0() {
    var z;
    const E = (z = le.current) == null ? void 0 : z.querySelector(".bc-card-canvas");
    if (E != null)
      try {
        const V = "https://cdn.jsdelivr.net/npm/html-to-image@1/+esm", { toPng: de } = await import(
          // loaded on demand only
          /* @vite-ignore */
          V
        ), fe = await de(E, {
          width: Fe,
          height: D,
          pixelRatio: 1,
          // native card size
          style: { transform: "scale(1)", borderRadius: "0", boxShadow: "none" },
          filter: (lr) => {
            var L;
            return (
              // exclude edit-mode overlays
              !((L = lr.classList) != null && L.contains("bc-edit-layer"))
            );
          }
        }), Ne = y.cards[T], Ze = document.createElement("a");
        Ze.href = fe, Ze.download = `${y.name ?? "Deck"} - ${Ne.name ?? "Card"}.png`, Ze.click();
      } catch (V) {
        console.warn("[BrowserCard] could not create a screenshot:", V), window.alert(
          "BrowserCard could not create a screenshot - the console may have details."
        );
      }
  }
  const Dr = Be(null);
  hr(() => {
    !_t || a == null || (Dr.current != null && window.clearTimeout(Dr.current), Dr.current = window.setTimeout(() => {
      Dr.current = null, a();
    }, 800));
  });
  const ar = Be([]), yr = Be([]), kn = Be(""), Lr = Be(0), [g0, en] = ht(0), Fn = 100, Sn = 1e3, wt = dn((E = "") => {
    const z = Date.now();
    if (E !== "" && E === kn.current && z - Lr.current < Sn) {
      Lr.current = z;
      return;
    }
    kn.current = E, Lr.current = z, ar.current.push(JSON.stringify(y)), ar.current.length > Fn && ar.current.shift(), yr.current = [];
  }, [y]);
  function tn(E) {
    const z = JSON.parse(E);
    Object.keys(y).forEach((V) => delete y[V]), Object.assign(y, z), kn.current = "", ft(null), H([]), B((V) => C0(V, 0, y.cards.length - 1)), en((V) => V + 1), wr((V) => V + 1), K();
  }
  function ir() {
    const E = ar.current.pop();
    E != null && (yr.current.push(JSON.stringify(y)), tn(E));
  }
  function S() {
    const E = yr.current.pop();
    E != null && (ar.current.push(JSON.stringify(y)), tn(E));
  }
  function N(E) {
    const z = y.cards[T], V = o2(E, z, Fe, D);
    wt(), z.objects.push(V), ft(V.id), K();
  }
  function Z() {
    if (Ee == null)
      return;
    const E = y.cards[T], z = E.objects.findIndex((V) => V.id === Ee);
    z >= 0 && (wt(), E.objects.splice(z, 1)), ft(null), K();
  }
  function we(E) {
    if (Ee == null)
      return;
    const V = [...y.cards[T].objects].sort((Ne, Ze) => Ne.zIndex - Ze.zIndex), de = V.findIndex((Ne) => Ne.id === Ee);
    if (de < 0)
      return;
    wt();
    const [fe] = V.splice(de, 1);
    switch (E) {
      case "front":
        V.push(fe);
        break;
      case "back":
        V.unshift(fe);
        break;
      case "forward":
        V.splice(de + 1, 0, fe);
        break;
      case "backward":
        V.splice(Math.max(de - 1, 0), 0, fe);
        break;
    }
    V.forEach((Ne, Ze) => {
      Ne.zIndex = Ze + 1, Ne.number = Ze + 1;
    }), K();
  }
  function tt(E) {
    if (Ee == null || E === T)
      return;
    const z = y.cards[T], V = y.cards[E];
    if (V == null)
      return;
    const de = z.objects.findIndex((Ne) => Ne.id === Ee);
    if (de < 0)
      return;
    wt();
    const [fe] = z.objects.splice(de, 1);
    V.objects.push(fe), ft(null), K();
  }
  const [, rt] = ht(0), K = dn(() => rt((E) => E + 1), []), te = Be(null);
  te.current == null && (te.current = new Fs());
  const me = Be(null), nt = Be(null);
  nt.current == null && (nt.current = r2(y, me, K));
  const qe = nt.current, sr = Be(!1), or = Be(!1);
  hr(() => {
    const E = le.current;
    if (E == null)
      return;
    function z() {
      const { width: de, height: fe } = E.getBoundingClientRect(), Ne = getComputedStyle(E), Ze = parseInt(Ne.getPropertyValue("--canvas-width").trim()), lr = parseInt(Ne.getPropertyValue("--canvas-height").trim()), L = isFinite(Ze) && Ze > 0 ? Ze : y.CardWidth ?? Ji, ce = isFinite(lr) && lr > 0 ? lr : y.CardHeight ?? Qi;
      ze(L), ne(ce);
      const ke = 24, Pe = Math.min((de - ke * 2) / L, (fe - ke * 2) / ce);
      Ae(Math.max(0.1, Pe));
    }
    z();
    const V = new ResizeObserver(z);
    return V.observe(E), () => V.disconnect();
  }, [y.CardWidth, y.CardHeight]);
  const at = dn((E) => {
    const z = y.cards;
    B((V) => {
      const de = (fe) => (fe !== V && (H((Ne) => [...Ne, V]), or.current = !1), fe);
      switch (E.type) {
        case "next":
          return de(C0(V + 1, 0, z.length - 1));
        case "prev":
          return de(C0(V - 1, 0, z.length - 1));
        case "first":
          return de(0);
        case "last":
          return de(z.length - 1);
        case "card-index":
          return de(C0(E.index, 0, z.length - 1));
        case "card-name": {
          const fe = z.findIndex((Ne) => Ne.name === E.name);
          return fe >= 0 ? de(fe) : V;
        }
        case "card-id": {
          const fe = z.findIndex((Ne) => Ne.id === E.id);
          return fe >= 0 ? de(fe) : V;
        }
        default:
          return V;
      }
    });
  }, [y]), rn = u0(() => ({
    print(...E) {
      Hp(qe, E), J(!0);
    },
    println(...E) {
      qp(qe, E), J(!0);
    },
    clearConsole() {
      Ba(qe);
    }
  }), []), _n = dn((E) => Ul(
    y,
    y.cards,
    E,
    at,
    (z, V, de) => pe({ kind: "answer", message: z, buttons: V, resolve: de }),
    (z, V, de) => pe({ kind: "ask", prompt: z, defaultValue: V, resolve: de }),
    rn,
    ie
  ), [y, at, rn]);
  function Cn() {
    sr.current && or.current && te.current.dispatch("ready");
  }
  function Pn(E) {
    me.current = E;
  }
  function Hn() {
    or.current = !0, Cn();
  }
  hr(() => {
    const E = te.current, z = Ul(
      y,
      y.cards,
      qe,
      at,
      (fe, Ne, Ze) => pe({ kind: "answer", message: fe, buttons: Ne, resolve: Ze }),
      (fe, Ne, Ze) => pe({ kind: "ask", prompt: fe, defaultValue: Ne, resolve: Ze }),
      rn,
      ie
    ), { Params: V, Args: de } = Ps(E, z, "deck");
    return sr.current = !1, or.current = !1, E.run(y.script ?? "", V, de).then(() => {
      sr.current = !0, K(), Cn();
    }), () => {
      E.teardown();
    };
  }, [y.script]), hr(() => {
    if (!r)
      return;
    function E(z) {
      if (j != null)
        return;
      const V = z.target;
      if (!(V != null && /^(INPUT|TEXTAREA|SELECT)$/.test(V.tagName))) {
        if (_t) {
          if ((z.key === "z" || z.key === "Z") && (z.metaKey || z.ctrlKey)) {
            z.preventDefault(), z.shiftKey ? S() : ir();
            return;
          }
          if ((z.key === "y" || z.key === "Y") && (z.metaKey || z.ctrlKey)) {
            z.preventDefault(), S();
            return;
          }
          if ((z.metaKey || z.ctrlKey) && !z.shiftKey && !z.altKey)
            switch (z.key) {
              case "c":
                z.preventDefault(), Lt();
                return;
              case "x":
                z.preventDefault(), xr();
                return;
              case "v":
                z.preventDefault(), yn();
                return;
            }
        }
        if (_t && Ee != null) {
          if (z.key === "Escape") {
            ft(null);
            return;
          }
          if (z.key === "Delete" || z.key === "Backspace") {
            z.preventDefault(), Z();
            return;
          }
          const de = y.cards[T].objects.find((Pe) => Pe.id === Ee);
          if (de == null)
            return;
          const fe = z.shiftKey ? 10 : 1, { left: Ne, top: Ze, width: lr, height: L } = Jt(de.Anchors, de.Offsets, Fe, D);
          let ce = Ne, ke = Ze;
          switch (z.key) {
            case "ArrowLeft":
              ce -= fe;
              break;
            case "ArrowRight":
              ce += fe;
              break;
            case "ArrowUp":
              ke -= fe;
              break;
            case "ArrowDown":
              ke += fe;
              break;
            default:
              return;
          }
          z.preventDefault(), wt("nudge:" + Ee), de.Offsets = H0(ce, ke, lr, L, de.Anchors, Fe, D), K();
          return;
        }
        (z.key === "ArrowRight" || z.key === "ArrowDown") && at({ type: "next" }), (z.key === "ArrowLeft" || z.key === "ArrowUp") && at({ type: "prev" });
      }
    }
    return window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E);
  }, [at, j, _t, Ee, T, Fe, D, r]);
  function qn() {
    if (P.length === 0)
      return;
    const E = P[P.length - 1];
    H((z) => z.slice(0, -1)), B(E);
  }
  const qt = y.cards[T], b0 = te.current.renderResult() ?? null, Un = _t && Ee != null ? qt.objects.find((E) => E.id === Ee) ?? null : null, v0 = {
    isActive: y.SnapToGrid === !0,
    Width: y.GridWidth ?? 10,
    Height: y.GridHeight ?? 10
  };
  return Y`
    <${fn}>
      <div class="bc-app">
        ${b0}
        ${r && Y`<${f2}
          DeckName=${y.name}
          CardIndex=${T}
          CardCount=${y.cards.length}
          activeOverlay=${Q}
          onOverlayToggle=${W}
          onGoFirst=${() => at({ type: "first" })}
          onGoPrev=${() => at({ type: "prev" })}
          onGoNext=${() => at({ type: "next" })}
          onGoLast=${() => at({ type: "last" })}
          isReadOnly=${e}
          isEditing=${_t}
          onEditToggle=${zr}
          onInsert=${N}
          onDeckSave=${a}
          onDeckRevert=${i}
          onDeckReset=${s}
          onDeckExport=${o}
          onDeckImport=${c}
          onCardAdd=${() => void Rr()}
          onCardDuplicate=${() => br(T)}
          onCardRename=${() => void Or(T)}
          onCardDelete=${() => void Mt(T)}
          onCardMove=${(E) => Br(T, E)}
          onCardCopy=${() => void nr()}
          onPaste=${() => void yn()}
          canUndo=${ar.current.length > 0}
          canRedo=${yr.current.length > 0}
          onUndo=${ir}
          onRedo=${S}
          onDeckEmbed=${k}
          onDeckStandalone=${$}
          onDeckImportURL=${() => void tr()}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area" ref=${le}>
            <${d2}
              key=${qt.id + ":" + g0}
              Card=${qt}
              Scale=${Ce}
              CanvasW=${Fe}
              CanvasH=${D}
              makeContext=${_n}
              deckProxy=${qe}
              onCardProxy=${Pn}
              onCardReady=${Hn}
              onMessage=${(E) => void te.current.dispatch(E)}
              isEditing=${_t}
              selectedId=${Ee}
              onSelect=${ft}
              onEdited=${K}
              Grid=${v0}
              onBeforeEdit=${() => wt()}
            />
          </div>
          ${_t && Y`
            <${u2}
              key=${(Ee ?? "card:" + qt.id) + ":" + Et}
              Widget=${Un}
              CanvasW=${Fe}
              CanvasH=${D}
              onEdited=${K}
              CardNames=${y.cards.map((E) => E.name)}
              CardIndex=${T}
              onDelete=${Z}
              onReorder=${we}
              onMoveTo=${tt}
              Card=${qt}
              Deck=${y}
              onOpenEditor=${Ht}
              onBeforeEdit=${wt}
              onCopy=${() => void Lt()}
            />
          `}
        </div>
        ${Q === "decks-panel" && Y`
          <div class="bc-dropdown-backdrop" onClick=${() => W(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => W(null)}>×</button>
            </div>
            ${!e && Y`
              <button class="bc-decks-new" onClick=${Nr}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${Me == null ? Y`<div class="bc-decks-empty">loading…</div>` : Me.length === 0 ? Y`<div class="bc-decks-empty">no decks found</div>` : Me.map((E) => Y`
                      <div key=${E.Key}
                        class=${`bc-decks-item${E.Key === n ? " active" : ""}`}>
                        <span class="bc-decks-name"
                          title=${E.Name}
                          onClick=${() => {
    E.Key !== n && (h == null || h(E.Key));
  }}
                        >${E.Name}</span>
                        ${!e && Y`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void gr(E)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void xn(E)}>×</button>
                        `}
                      </div>
                    `)}
            </div>
          </div>
        `}
        ${Q === "cards-panel" && Y`
          <div class="bc-dropdown-backdrop" onClick=${() => W(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => W(null)}>×</button>
            </div>
            ${_t && Y`
              <button class="bc-decks-new" onClick=${() => void Rr()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${y.cards.map((E, z) => Y`
                <div key=${E.id}
                  class=${`bc-cards-item${z === T ? " active" : ""}`}>
                  <div class="bc-cards-main"
                    onClick=${() => {
    z !== T && at({ type: "card-index", index: z });
  }}>
                    <${h2}
                      Card=${E} CanvasW=${Fe} CanvasH=${D}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${E.name}>${E.name}</div>
                      <div class="bc-cards-sub">
                        #${z + 1} · ${E.objects.length}${" "}
                        ${E.objects.length === 1 ? "widget" : "widgets"}
                      </div>
                    </div>
                  </div>
                  ${_t && Y`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move this card backward"
                        disabled=${z === 0}
                        onClick=${() => Br(z, -1)}>↑</button>
                      <button class="bc-console-btn" title="move this card forward"
                        disabled=${z === y.cards.length - 1}
                        onClick=${() => Br(z, 1)}>↓</button>
                      <button class="bc-console-btn" title="duplicate this card"
                        onClick=${() => br(z)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void Or(z)}>✎</button>
                      <button class="bc-console-btn" title="delete this card"
                        disabled=${y.cards.length <= 1}
                        onClick=${() => void Mt(z)}>×</button>
                    </div>
                  `}
                </div>
              `)}
            </div>
          </div>
        `}
        ${be && Y`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => Ba(qe)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => J(!1)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${qe[vn]}</pre>
          </div>
        `}
        ${r && Y`<${p2}
          CardIndex=${T}
          CardCount=${y.cards.length}
          onFirst=${() => at({ type: "first" })}
          onPrev=${() => at({ type: "prev" })}
          onNext=${() => at({ type: "next" })}
          onLast=${() => at({ type: "last" })}
          onBack=${qn}
          historyLen=${P.length}
          consoleShown=${be}
          onConsoleToggle=${() => J((E) => !E)}
          onScreenshot=${() => void m0()}
        />`}
        <${m2}
          State=${j}
          onClose=${(E) => {
    var V, de;
    const z = j;
    if (pe(null), z != null)
      switch (z.kind) {
        case "answer":
          (V = z.resolve) == null || V.call(z, E ?? "");
          break;
        case "ask":
          (de = z.resolve) == null || de.call(z, E);
          break;
      }
  }}
        />
      </div>
      ${vr != null && Y`
        <${c2}
          key=${vr.Title}
          State=${vr}
          onClose=${() => rr(null)}
        />
      `}
    <//>
  `;
}
const Wl = "https://rozek.github.io/browser-card/dist/BrowserCard.js";
function n1() {
  if (document.getElementById("bc-styles") == null) {
    const t = document.createElement("style");
    t.id = "bc-styles", t.textContent = Wp, document.head.appendChild(t);
  }
}
function ki(t, e, r) {
  const n = new Blob([e], { type: r }), a = URL.createObjectURL(n), i = document.createElement("a");
  i.href = a, i.download = t, i.click(), setTimeout(() => URL.revokeObjectURL(a), 1e3);
}
function Jn(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
var Sr, it, Nt, St, _r, q0, _e, Sa, ln, a1, i1, s1, o1, l1, c1, u1, d1, r0, h1, f1, p1, m1;
class g2 extends HTMLElement {
  constructor() {
    super(...arguments);
    Ft(this, _e);
    Ft(this, Sr, null);
    Ft(this, it, null);
    Ft(this, Nt, !1);
    Ft(this, St, "bc-deck:default");
    Ft(this, _r, 0);
    // remount key - bumped whenever the deck is swapped
    Ft(this, q0, 0);
  }
  static get observedAttributes() {
    return ["name", "src", "readonly"];
  }
  // guards against overlapping async mounts
  /**** connectedCallback ****/
  connectedCallback() {
    We(this, _e, Sa).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    ae(this, Sr) != null && jr(null, ae(this, Sr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && We(this, _e, Sa).call(this);
  }
}
Sr = new WeakMap(), it = new WeakMap(), Nt = new WeakMap(), St = new WeakMap(), _r = new WeakMap(), q0 = new WeakMap(), _e = new WeakSet(), Sa = async function() {
  const r = ++wo(this, q0)._;
  n1(), ae(this, Sr) == null && (Je(this, Sr, document.createElement("div")), ae(this, Sr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(ae(this, Sr)));
  const n = this.getAttribute("src") ?? "";
  let a = null;
  if (n.trim())
    try {
      const i = JSON.parse(n);
      on(i) ? a = i : console.warn('[BrowserCard] "src" attribute does not contain a valid deck');
    } catch {
      console.warn('[BrowserCard] invalid JSON in "src" attribute');
    }
  a == null && (a = JSON.parse(Kp)), Je(this, St, "bc-deck:" + (this.getAttribute("name") ?? a.name ?? "default"));
  try {
    await Vl;
    const i = await un(ae(this, St), zt);
    if (r !== ae(this, q0))
      return;
    on(i) ? a = i : i != null && console.warn("[BrowserCard] ignoring invalid persisted deck for key " + _.quoted(ae(this, St)));
  } catch (i) {
    console.warn("[BrowserCard] could not access IndexedDB:", i);
  }
  t0(a), a.id == null && (a.id = ue("deck")), Je(this, it, a), Je(this, Nt, this.hasAttribute("readonly") || (a.readOnly ?? !1)), Je(this, _r, ae(this, _r) + 1), We(this, _e, ln).call(this);
}, /**** #renderDeck ****/
ln = function() {
  jr(Y`<${r1}
      key=${ae(this, _r)}
      deck=${ae(this, it)}
      isReadOnly=${ae(this, Nt)}
      StorageKey=${ae(this, St)}
      onDeckSave=${() => void We(this, _e, r0).call(this)}
      onDeckRevert=${() => void We(this, _e, h1).call(this)}
      onDeckReset=${() => void We(this, _e, f1).call(this)}
      onDeckExport=${() => We(this, _e, p1).call(this)}
      onDeckImport=${() => We(this, _e, m1).call(this)}
      onDeckList=${() => We(this, _e, o1).call(this)}
      onDeckOpen=${(r) => void We(this, _e, l1).call(this, r)}
      onDeckCreate=${(r) => We(this, _e, c1).call(this, r)}
      onDeckDelete=${(r) => We(this, _e, u1).call(this, r)}
      onDeckRename=${(r, n) => We(this, _e, d1).call(this, r, n)}
      onDeckEmbed=${() => We(this, _e, i1).call(this)}
      onDeckStandalone=${() => We(this, _e, s1).call(this)}
      onDeckImportURL=${(r) => We(this, _e, a1).call(this, r)}
    />`, ae(this, Sr));
}, a1 = async function(r) {
  if (!ae(this, Nt))
    try {
      const n = await fetch(r);
      if (!n.ok) {
        window.alert(`The deck could not be loaded (HTTP ${n.status})`);
        return;
      }
      const a = JSON.parse(await n.text());
      if (!on(a)) {
        window.alert("The given URL does not deliver a valid BrowserCard deck.");
        return;
      }
      const i = a;
      t0(i), i.id == null && (i.id = ue("deck")), Je(this, it, i), Je(this, Nt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), await We(this, _e, r0).call(this), Je(this, _r, ae(this, _r) + 1), We(this, _e, ln).call(this);
    } catch (n) {
      window.alert("Import failed: " + n);
    }
}, /**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/
i1 = function() {
  if (ae(this, it) == null)
    return;
  const r = ae(this, it).name ?? "Deck", n = Jn(JSON.stringify(ae(this, it))), a = Wl, i = ae(this, it).CardWidth ?? Ji, s = ae(this, it).CardHeight ?? Qi, o = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Jn(r)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${Jn(a)}"><\/script>

  <bc-deck
    style="display:block; width:${i}px; height:${s}px"
    src="${n}"
  ></bc-deck>
</body>
</html>`;
  ki(r + ".embed.html", o, "text/html");
}, /**** #exportStandalone — complete web app, referencing the public module ****/
s1 = function() {
  if (ae(this, it) == null)
    return;
  const r = ae(this, it).name ?? "Deck", n = Jn(JSON.stringify(ae(this, it))), a = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Jn(r)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${Jn(Wl)}"><\/script>
  <bc-deck style="display:block; width:100%; height:100%" src="${n}"></bc-deck>
</body>
</html>`;
  ki(r + ".html", a, "text/html");
}, o1 = async function() {
  let r = [];
  try {
    await Vl, r = (await xc(zt)).filter((a) => typeof a == "string" && a.startsWith(e0)).map((a) => ({ Key: a, Name: a.slice(e0.length) }));
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
  return r.some((n) => n.Key === ae(this, St)) || r.unshift({
    // current deck was never saved so far
    Key: ae(this, St),
    Name: ae(this, St).slice(e0.length)
  }), r.sort((n, a) => n.Name.localeCompare(a.Name));
}, l1 = async function(r) {
  try {
    const n = await un(r, zt);
    if (!on(n)) {
      window.alert("This deck cannot be loaded (it seems to be damaged).");
      return;
    }
    const a = n;
    t0(a), Je(this, St, r), Je(this, it, a), Je(this, Nt, this.hasAttribute("readonly") || (a.readOnly ?? !1)), Je(this, _r, ae(this, _r) + 1), We(this, _e, ln).call(this);
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
}, c1 = async function(r) {
  if (this.hasAttribute("readonly"))
    return;
  const n = e0 + r;
  try {
    if (await un(n, zt) != null) {
      window.alert(`A deck named "${r}" already exists.`);
      return;
    }
  } catch (i) {
    console.warn("[BrowserCard] could not access IndexedDB:", i);
    return;
  }
  const a = {
    id: ue("deck"),
    name: r,
    readOnly: !1,
    swipeToAdjacentCard: !0,
    script: "",
    cards: [{
      id: ue("card"),
      name: "Card 1",
      color: null,
      alpha: 1,
      dontSearch: !1,
      script: "",
      objects: []
    }]
  };
  Je(this, St, n), Je(this, it, a), Je(this, Nt, !1), await We(this, _e, r0).call(this), Je(this, _r, ae(this, _r) + 1), We(this, _e, ln).call(this);
}, u1 = async function(r) {
  if (!this.hasAttribute("readonly")) {
    if (r === ae(this, St)) {
      window.alert(
        'The currently open deck cannot be deleted - use "Reset to Original" instead.'
      );
      return;
    }
    try {
      await T0(r, zt);
    } catch (n) {
      console.warn("[BrowserCard] could not access IndexedDB:", n);
    }
  }
}, d1 = async function(r, n) {
  if (this.hasAttribute("readonly"))
    return;
  const a = e0 + n;
  if (a !== r)
    try {
      if (await un(a, zt) != null) {
        window.alert(`A deck named "${n}" already exists.`);
        return;
      }
      if (r === ae(this, St))
        ae(this, it).name = n, Je(this, St, a), await We(this, _e, r0).call(this), await T0(r, zt), We(this, _e, ln).call(this);
      else {
        const s = await un(r, zt);
        if (!on(s))
          return;
        s.name = n, await Mi(a, s, zt), await T0(r, zt);
      }
    } catch (i) {
      console.warn("[BrowserCard] could not access IndexedDB:", i);
    }
}, r0 = async function() {
  if (!(ae(this, it) == null || ae(this, Nt)))
    try {
      const r = JSON.parse(JSON.stringify(ae(this, it)));
      await Mi(ae(this, St), r, zt);
    } catch (r) {
      console.warn("[BrowserCard] could not persist deck:", r);
    }
}, h1 = async function() {
  if (!ae(this, Nt))
    try {
      const r = await un(ae(this, St), zt);
      if (!on(r)) {
        window.alert("There is no (valid) saved copy of this deck yet.");
        return;
      }
      const n = r;
      t0(n), Je(this, it, n), Je(this, Nt, this.hasAttribute("readonly") || (n.readOnly ?? !1)), Je(this, _r, ae(this, _r) + 1), We(this, _e, ln).call(this);
    } catch (r) {
      console.warn("[BrowserCard] could not access IndexedDB:", r);
    }
}, f1 = async function() {
  if (!ae(this, Nt)) {
    try {
      await T0(ae(this, St), zt);
    } catch (r) {
      console.warn("[BrowserCard] could not access IndexedDB:", r);
    }
    We(this, _e, Sa).call(this);
  }
}, /**** #exportDeck — downloads the deck as a JSON file ****/
p1 = function() {
  ae(this, it) != null && ki(
    (ae(this, it).name ?? "Deck") + ".json",
    JSON.stringify(ae(this, it), null, 2),
    "application/json"
  );
}, /**** #importDeck — loads a deck from a JSON file and persists it ****/
m1 = function() {
  if (ae(this, Nt))
    return;
  const r = document.createElement("input");
  r.type = "file", r.accept = "application/json,.json,.bc", r.onchange = async () => {
    var a;
    const n = (a = r.files) == null ? void 0 : a[0];
    if (n != null)
      try {
        const i = JSON.parse(await n.text());
        if (!on(i)) {
          window.alert("The chosen file does not contain a valid BrowserCard deck.");
          return;
        }
        const s = i;
        t0(s), s.id == null && (s.id = ue("deck")), Je(this, it, s), Je(this, Nt, this.hasAttribute("readonly") || (s.readOnly ?? !1)), await We(this, _e, r0).call(this), Je(this, _r, ae(this, _r) + 1), We(this, _e, ln).call(this);
      } catch (i) {
        window.alert("Import failed: " + i);
      }
  }, r.click();
};
var dr, U0, V0, rs;
class b2 extends HTMLElement {
  constructor() {
    super(...arguments);
    Ft(this, V0);
    Ft(this, dr, null);
    Ft(this, U0, 0);
  }
  static get observedAttributes() {
    return ["src"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    We(this, V0, rs).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    ae(this, dr) != null && jr(null, ae(this, dr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && We(this, V0, rs).call(this);
  }
}
dr = new WeakMap(), U0 = new WeakMap(), V0 = new WeakSet(), /**** #mount ****/
rs = function() {
  n1(), ae(this, dr) == null && (Je(this, dr, document.createElement("div")), ae(this, dr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(ae(this, dr)));
  const r = this.getAttribute("src") ?? "";
  let n = null;
  if (r.trim())
    try {
      const a = JSON.parse(r);
      on(a) && (n = a);
    } catch {
    }
  if (n == null) {
    console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute'), jr(Y`
        <div style=${{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#888",
      font: "13px/1.4 system-ui, sans-serif"
    }}>this &lt;bc-deck&gt; contains no valid deck</div>
      `, ae(this, dr));
    return;
  }
  t0(n), Je(this, U0, ae(this, U0) + 1), jr(Y`<${r1}
      key=${ae(this, U0)}
      deck=${n}
      isReadOnly=${!0}
      withChrome=${!1}
    />`, ae(this, dr));
};
const v2 = Function("return this")();
v2.BC = {
  render: jr,
  html: Y,
  Preact: Du,
  createContext: oc,
  toChildArray: s0,
  cloneElement: sc,
  createPortal: wc,
  useId: fc,
  useRef: Be,
  useState: ht,
  useEffect: hr,
  useCallback: dn,
  useMemo: u0,
  useContext: dc,
  fromLocalTo: B4,
  fromViewportTo: D4,
  fromDocumentTo: L4,
  Marked: Ic
};
customElements.get("bc-deck") == null && customElements.define("bc-deck", b2);
customElements.get("bc-designer") == null && customElements.define("bc-designer", g2);
const K5 = _.HTMLsafe, X5 = _.ValidatorForClassifier, Y5 = _.ValueIsArray, J5 = _.ValueIsBoolean, Q5 = _.ValueIsCardinal, em = _.ValueIsColor, tm = _.ValueIsEMailAddress, rm = _.ValueIsFiniteNumber, nm = _.ValueIsFunction, am = _.ValueIsInteger, im = _.ValueIsIntegerInRange, sm = _.ValueIsList, om = _.ValueIsListSatisfying, lm = _.ValueIsNumber, cm = _.ValueIsNumberInRange, um = _.ValueIsObject, dm = _.ValueIsOneOf, hm = _.ValueIsOrdinal, fm = _.ValueIsPlainObject, pm = _.ValueIsString, mm = _.ValueIsStringMatching, gm = _.ValueIsText, bm = _.ValueIsTextline, vm = _.ValueIsURL, wm = _.acceptNil, xm = _.escaped, ym = _.expectBoolean, km = _.expectFunction, Sm = _.expectText, _m = _.quoted, Cm = _.rejectNil;
export {
  q4 as BC_BackgroundModes,
  U4 as BC_BorderStyles,
  M2 as BC_Cursors,
  H5 as BC_DatePattern,
  Dp as BC_DateRegExp,
  F5 as BC_DateTimePattern,
  Bp as BC_DateTimeRegExp,
  ql as BC_ErrorIndicator,
  T2 as BC_FontStyles,
  F4 as BC_FontWeightValues,
  A2 as BC_FontWeights,
  j5 as BC_MonthPattern,
  Fp as BC_MonthRegExp,
  V4 as BC_Overflows,
  W5 as BC_PropertyEditorTypes,
  $2 as BC_TextAlignments,
  P4 as BC_TextDecorationLines,
  H4 as BC_TextDecorationStyles,
  D5 as BC_TimePattern,
  Op as BC_TimeRegExp,
  C2 as BC_Version,
  U5 as BC_WeekPattern,
  Lp as BC_WeekRegExp,
  Z5 as BC_expectedOrientations,
  Lu as BC_horizontalAnchorses,
  Fu as BC_verticalAnchorses,
  fn as Fragment,
  K5 as HTMLsafe,
  Ic as Marked,
  Du as Preact,
  X5 as ValidatorForClassifier,
  Os as ValueIsAnchors,
  Y5 as ValueIsArray,
  Wu as ValueIsBackgroundTexture,
  J5 as ValueIsBoolean,
  Zu as ValueIsBorderStyle,
  Ku as ValueIsBoxShadow,
  Q5 as ValueIsCardinal,
  em as ValueIsColor,
  q5 as ValueIsDate,
  P5 as ValueIsDateTime,
  mr as ValueIsDimension,
  tm as ValueIsEMailAddress,
  rm as ValueIsFiniteNumber,
  nm as ValueIsFunction,
  Uu as ValueIsGeometry,
  Pu as ValueIsIdentifier,
  am as ValueIsInteger,
  im as ValueIsIntegerInRange,
  m5 as ValueIsIntegerList,
  d5 as ValueIsLineList,
  sm as ValueIsList,
  om as ValueIsListSatisfying,
  Wt as ValueIsLocation,
  G5 as ValueIsMonth,
  Ya as ValueIsName,
  lm as ValueIsNumber,
  cm as ValueIsNumberInRange,
  f5 as ValueIsNumberList,
  um as ValueIsObject,
  Bs as ValueIsOffsets,
  dm as ValueIsOneOf,
  hm as ValueIsOrdinal,
  Xu as ValueIsOverflowList,
  O4 as ValueIsPhoneNumber,
  fm as ValueIsPlainObject,
  Hu as ValueIsPosition,
  Yu as ValueIsSerializableObject,
  P0 as ValueIsSerializableValue,
  qu as ValueIsSize,
  pm as ValueIsString,
  mm as ValueIsStringMatching,
  gm as ValueIsText,
  ju as ValueIsTextDecoration,
  Gu as ValueIsTextShadow,
  bm as ValueIsTextline,
  L5 as ValueIsTime,
  vm as ValueIsURL,
  V5 as ValueIsWeek,
  wm as acceptNil,
  v5 as acceptableBoolean,
  _5 as acceptableCardinal,
  E5 as acceptableColor,
  I5 as acceptableEMailAddress,
  M5 as acceptableFunction,
  y5 as acceptableInteger,
  k5 as acceptableIntegerInRange,
  R5 as acceptableName,
  O5 as acceptableNameOrIndex,
  w5 as acceptableNumber,
  x5 as acceptableNumberInRange,
  S5 as acceptableOrdinal,
  z5 as acceptablePhoneNumber,
  C5 as acceptableString,
  A5 as acceptableStringMatching,
  T5 as acceptableText,
  $5 as acceptableTextline,
  N5 as acceptableURL,
  b5 as acceptableValue,
  ip as allowAnchors,
  fp as allowBackgroundTexture,
  mp as allowBorderStyle,
  bp as allowBoxShadow,
  Y4 as allowDimension,
  np as allowGeometry,
  G4 as allowIdentifier,
  Ip as allowIntegerList,
  Cp as allowLineList,
  K4 as allowLocation,
  Z4 as allowName,
  $p as allowNumberList,
  op as allowOffsets,
  wp as allowOverflowList,
  Q4 as allowPosition,
  Sp as allowSerializableObject,
  yp as allowSerializableValue,
  tp as allowSize,
  cp as allowTextDecoration,
  dp as allowTextShadow,
  j2 as allowedAnchors,
  Q2 as allowedBackgroundTexture,
  t5 as allowedBorderStyle,
  n5 as allowedBoxShadow,
  D2 as allowedDimension,
  U2 as allowedGeometry,
  I2 as allowedIdentifier,
  g5 as allowedIntegerList,
  h5 as allowedLineList,
  O2 as allowedLocation,
  N2 as allowedName,
  p5 as allowedNumberList,
  W2 as allowedOffsets,
  i5 as allowedOverflowList,
  F2 as allowedPosition,
  c5 as allowedSerializableObject,
  o5 as allowedSerializableValue,
  H2 as allowedSize,
  K2 as allowedTextDecoration,
  Y2 as allowedTextShadow,
  x2 as clear,
  sc as cloneElement,
  oc as createContext,
  Wr as createElement,
  wc as createPortal,
  F1 as createRef,
  ls as createStore,
  T0 as del,
  k2 as entries,
  xm as escaped,
  sp as expectAnchors,
  pp as expectBackgroundTexture,
  ym as expectBoolean,
  gp as expectBorderStyle,
  vp as expectBoxShadow,
  J4 as expectDimension,
  km as expectFunction,
  ap as expectGeometry,
  W4 as expectIdentifier,
  zp as expectIntegerList,
  Ap as expectLineList,
  X4 as expectLocation,
  Rs as expectName,
  Mp as expectNumberList,
  lp as expectOffsets,
  xp as expectOverflowList,
  ep as expectPosition,
  _p as expectSerializableObject,
  kp as expectSerializableValue,
  rp as expectSize,
  Sm as expectText,
  up as expectTextDecoration,
  hp as expectTextShadow,
  G2 as expectedAnchors,
  e5 as expectedBackgroundTexture,
  r5 as expectedBorderStyle,
  a5 as expectedBoxShadow,
  L2 as expectedDimension,
  V2 as expectedGeometry,
  z2 as expectedIdentifier,
  Np as expectedIntegerList,
  Tp as expectedLineList,
  B2 as expectedLocation,
  R2 as expectedName,
  Ep as expectedNumberList,
  Z2 as expectedOffsets,
  s5 as expectedOverflowList,
  P2 as expectedPosition,
  u5 as expectedSerializableObject,
  l5 as expectedSerializableValue,
  q2 as expectedSize,
  X2 as expectedTextDecoration,
  J2 as expectedTextShadow,
  Y1 as forwardRef,
  L4 as fromDocumentTo,
  B4 as fromLocalTo,
  D4 as fromViewportTo,
  un as get,
  Wr as h,
  Y as html,
  Rp as installStylesheetFor,
  xc as keys,
  _2 as markedHighlight,
  S2 as markedKatex,
  K1 as memo,
  B5 as normalizedName,
  _m as quoted,
  Cm as rejectNil,
  jr as render,
  Gp as safelyRendered,
  Mi as set,
  Nn as throwError,
  E2 as throwReadOnlyError,
  s0 as toChildArray,
  dn as useCallback,
  dc as useContext,
  hr as useEffect,
  hc as useErrorBoundary,
  fc as useId,
  G1 as useLayoutEffect,
  u0 as useMemo,
  uc as useReducer,
  Be as useRef,
  ht as useState,
  y2 as values
};
