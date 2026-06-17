var Td = Object.defineProperty;
var Mo = (r) => {
  throw TypeError(r);
};
var $d = (r, e, t) => e in r ? Td(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ke = (r, e, t) => $d(r, typeof e != "symbol" ? e + "" : e, t), fi = (r, e, t) => e.has(r) || Mo("Cannot " + t);
var R = (r, e, t) => (fi(r, e, "read from private field"), t ? t.call(r) : e.get(r)), mt = (r, e, t) => e.has(r) ? Mo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Me = (r, e, t, n) => (fi(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), re = (r, e, t) => (fi(r, e, "access private method"), t);
var zo = (r, e, t, n) => ({
  set _(a) {
    Me(r, e, a, t);
  },
  get _() {
    return R(r, e, n);
  }
});
function uc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var B0 = { exports: {} }, Id = B0.exports, Ro;
function Nd() {
  return Ro || (Ro = 1, (function(r, e) {
    (function(t, n) {
      n(e);
    })(Id, (function(t) {
      var n = Function("return this")();
      function a(b, _) {
        return b == null || "hasOwnProperty" in b && typeof b.hasOwnProperty == "function" ? b.hasOwnProperty(_) : Object.prototype.hasOwnProperty.call(b, _);
      }
      function i(b, _) {
        return b == null || "isPrototypeOf" in b && typeof b.isPrototypeOf == "function" ? b.isPrototypeOf(_) : Object.prototype.isPrototypeOf.call(b, _);
      }
      function s(b) {
        var _ = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(b);
        if (_ == null) throw new Error(b);
        var F = new Error(_[2]);
        throw F.name = _[1], F;
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
      function y(b) {
        return typeof b == "string" || b instanceof String;
      }
      var I = /^\s*$/;
      function N(b) {
        return (typeof b == "string" || b instanceof String) && !I.test(b.valueOf());
      }
      function z(b, _) {
        return (typeof b == "string" || b instanceof String) && _.test(b.valueOf());
      }
      var $ = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function M(b) {
        return z(b, $);
      }
      var H = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function q(b) {
        return z(b, H);
      }
      function E(b) {
        return typeof b == "function";
      }
      function ae(b) {
        return typeof b == "function" && (b.name == null || b.name === "");
      }
      function ne(b) {
        return typeof b == "function" && b.name != null && b.name !== "";
      }
      function B(b) {
        return typeof b == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function be(b) {
        return typeof b == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function Ie(b) {
        return b != null && typeof b == "object";
      }
      function me(b) {
        return b != null && typeof b == "object" && Object.getPrototypeOf(b) === Object.prototype;
      }
      function qe(b) {
        return b != null && typeof b == "object" && !(b instanceof Object);
      }
      var Se = Array.isArray;
      function W(b, _, F) {
        if (Se(b)) {
          for (var Q = 0, we = b.length; Q < we; Q++) if (b[Q] === void 0) return !1;
          return !(_ != null && b.length < _) && !(F != null && b.length > F);
        }
        return !1;
      }
      function Y(b, _, F, Q) {
        if (Se(b)) try {
          for (var we = 0, Pe = b.length; we < Pe; we++) if (_(b[we]) == 0) return !1;
          return !(F != null && b.length < F) && !(Q != null && b.length > Q);
        } catch {
        }
        return !1;
      }
      function ye(b) {
        return b instanceof Date;
      }
      function ie(b) {
        return b instanceof Error;
      }
      function se(b) {
        return b != null && typeof b.then == "function";
      }
      function fe(b) {
        return b instanceof RegExp;
      }
      function Re(b, _) {
        return _.indexOf(b) >= 0;
      }
      function rt(b) {
        return y(b) && (o0.hasOwnProperty(b) || /^#[a-fA-F0-9]{6}$/.test(b) || /^#[a-fA-F0-9]{8}$/.test(b) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(b) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(b));
      }
      var Ae = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      function at(b) {
        return z(b, Ae);
      }
      var it = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function zt(b) {
        if (!z(b, it) || b === "") return !1;
        try {
          return new URL(b, "file://"), !0;
        } catch {
          return !1;
        }
      }
      var Oe = !1, Fe = !0;
      function je(b, _, F, Q, we) {
        if (_ == null) {
          if (Q) return _;
          s("MissingArgument: no ".concat(Ge(b), " given"));
        } else if (F(_)) switch (!0) {
          case _ instanceof Boolean:
          case _ instanceof Number:
          case _ instanceof String:
            return _.valueOf();
          default:
            return _;
        }
        else s("InvalidArgument: the given ".concat(Ge(b), " is no valid ").concat(Ge(we)));
      }
      function oe(b, _, F) {
        var Q = function(Pe, Wr) {
          return je(Pe, Wr, b, _, F);
        }, we = b.name;
        return we != null && /^ValueIs/.test(we) ? Dr(Q, we.replace(/^ValueIs/, _ ? "allow" : "expect")) : Q;
      }
      function Dr(b, _) {
        if (b == null && s("MissingArgument: no function given"), typeof b != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), _ == null && s("MissingArgument: no desired name given"), typeof _ == "string" || _ instanceof String || s("InvalidArgument: the given desired name is not a string"), b.name === _) return b;
        try {
          if (Object.defineProperty(b, "name", { value: _ }), b.name === _) return b;
        } catch {
        }
        return new Function("originalFunction", "return function " + _ + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(b);
      }
      function xr(b, _) {
        if (_ != null) return _.valueOf();
        s("MissingArgument: no ".concat(Ge(b), " given"));
      }
      var _t = xr, cr = oe(o, Fe, "boolean value"), Lr = cr, yr = oe(o, Oe, "boolean value"), Fr = yr, Gt = oe(l, Fe, "numeric value"), Rt = Gt, jt = oe(l, Oe, "numeric value"), Cn = jt, nn = oe(d, Fe, "finite numeric value"), kr = nn, Ot = oe(d, Oe, "finite numeric value"), Pr = Ot, Vt = oe(h, Fe, "NaN value"), ur = Vt, Zt = oe(h, Oe, "NaN value"), dr = Zt;
      function an(b, _, F, Q, we, Pe) {
        return _ == null ? _ : Tn(b, _, F, Q, we, Pe);
      }
      var An = an;
      function sn(b, _, F, Q, we, Pe) {
        if (jt(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Ge(b), " is not-a-number")), we == null && (we = !0), Pe == null && (Pe = !0), F != null && isFinite(F)) {
          if (Q != null && isFinite(Q)) {
            if (_ < F || !we && _ === F || _ > Q || !Pe && _ === Q) throw new RangeError("the given ".concat(Ge(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(F, "...").concat(Q, ")"));
          } else if (_ < F || !we && _ === F) throw new RangeError("the given ".concat(Ge(b), " is below the allowed ") + "minimum (".concat(_, " ").concat(we ? "<" : "<=", " ").concat(F, ")"));
        } else if (Q != null && isFinite(Q) && (_ > Q || !Pe && _ === Q)) throw new RangeError("the given ".concat(Ge(b), " exceeds the allowed ") + "maximum (".concat(_, " ").concat(Pe ? ">" : ">=", " ").concat(Q, ")"));
        return _.valueOf();
      }
      var Tn = sn, $n = oe(f, Fe, "integral numeric value"), Jn = $n, In = oe(f, Oe, "integral numeric value"), Yn = In;
      function Sr(b, _, F, Q) {
        return _ == null ? _ : e0(b, _, F, Q);
      }
      var Qn = Sr;
      function on(b, _, F, Q) {
        if (In(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Ge(b), " is not-a-number")), F != null && isFinite(F)) {
          if (Q != null && isFinite(Q)) {
            if (_ < F || _ > Q) throw new RangeError("the given ".concat(Ge(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(F, "...").concat(Q, ")"));
          } else if (_ < F) throw new RangeError("the given ".concat(Ge(b), " is below the allowed ") + "minimum (".concat(_, " < ").concat(F, ")"));
        } else if (Q != null && isFinite(Q) && _ > Q) throw new RangeError("the given ".concat(Ge(b), " exceeds the allowed ") + "maximum (".concat(_, " > ").concat(Q, ")"));
        return _.valueOf();
      }
      var e0 = on, _r = oe(m, Fe, "ordinal number"), Bt = _r, k = oe(m, Oe, "ordinal number"), O = k, X = oe(v, Fe, "cardinal number"), _e = X, nt = oe(v, Oe, "cardinal number"), st = nt, de = oe(y, Fe, "literal string"), J = de, ve = oe(y, Oe, "literal string"), ht = ve, Qe = oe(N, Fe, "non-empty literal string"), Hr = Qe, Cr = oe(N, Oe, "non-empty literal string"), Nn = Cr;
      function t0(b, _, F) {
        return _ == null ? _ : hr(b, _, F);
      }
      var En = t0;
      function bt(b, _, F) {
        if (ve(b, _), F.test(_)) return _.valueOf();
        s("InvalidArgument: the given ".concat(Ge(b), " does not match the specified pattern"));
      }
      var hr = bt, Mn = oe(M, Fe, "literal text"), ln = Mn, Dt = oe(M, Oe, "literal text"), zn = Dt, qr = oe(q, Fe, "single line of text"), ot = qr, Nt = oe(q, Oe, "single line of text"), r0 = Nt, cn = oe(E, Fe, "JavaScript function"), T0 = cn, n0 = oe(E, Oe, "JavaScript function"), $0 = n0, Kt = oe(ae, Fe, "anonymous JavaScript function"), I0 = Kt, U = oe(ae, Oe, "anonymous JavaScript function"), ge = U, A = oe(ne, Fe, "named JavaScript function"), T = A, D = oe(ne, Oe, "named JavaScript function"), ee = D, ue = oe(B, Fe, "native JavaScript function"), Ne = ue, De = oe(B, Oe, "native JavaScript function"), ct = De, $t = oe(be, Fe, "scripted JavaScript function"), Lt = $t, nr = oe(be, Oe, "scripted JavaScript function"), Rn = nr, sa = oe(Ie, Fe, "JavaScript object"), hi = sa, N0 = oe(Ie, Oe, "JavaScript object"), a0 = N0, E0 = oe(me, Fe, '"plain" JavaScript object'), ar = E0, oa = oe(me, Oe, '"plain" JavaScript object'), M0 = oa, Te = oe(qe, Fe, '"vanilla" JavaScript object'), la = Te, xt = oe(qe, Oe, '"vanilla" JavaScript object'), Ze = xt;
      function On(b, _) {
        return _ == null ? _ : s0(b, _);
      }
      var Vr = On;
      function i0(b, _) {
        if (_ == null && s("MissingArgument: no ".concat(Ge(b), " given")), Se(_)) return _;
        s("InvalidArgument: the given ".concat(Ge(b), " is no JavaScript array"));
      }
      var s0 = i0;
      function te(b, _, F, Q, we) {
        return _ == null ? _ : Ve(b, _, F, Q, we);
      }
      var pe = te;
      function Ee(b, _, F, Q, we) {
        if (_ == null && s("MissingArgument: no ".concat(Ge(b), " given")), W(_, Q, we)) return _;
        s("InvalidArgument: the given ".concat(Ge(b), " is ") + (F == null ? "either not a list or contains an invalid number of elements" : "no " + Ge(F)));
      }
      var Ve = Ee;
      function Ct(b, _, F, Q, we, Pe) {
        return _ == null ? _ : ua(b, _, F, Q, we, Pe);
      }
      var fr = Ct;
      function ca(b, _, F, Q, we, Pe) {
        if (_ == null && s("MissingArgument: no ".concat(Ge(b), " given")), Y(_, F, we, Pe)) return _;
        s("InvalidArgument: the given ".concat(Ge(b), " is ") + (Q == null ? "either not a list or contains invalid elements" : "no " + Ge(Q)));
      }
      var ua = ca;
      function no(b, _, F, Q) {
        return _ == null ? _ : io(b, _, F, Q);
      }
      var cd = no;
      function ao(b, _, F, Q) {
        return _ == null && s("MissingArgument: no ".concat(Ge(b), " given")), _ instanceof F || s("InvalidArgument: the given ".concat(Ge(b), " is no ").concat(Ge(Q))), _;
      }
      var io = ao;
      function so(b, _, F, Q) {
        return _ == null ? _ : lo(b, _, F, Q);
      }
      var ud = so;
      function oo(b, _, F, Q) {
        if (_ == null && s("MissingArgument: no ".concat(Ge(b), " given")), F.isPrototypeOf(_)) return _;
        s("InvalidArgument: the given ".concat(Ge(b), " is no ").concat(Ge(Q)));
      }
      var lo = oo, co = oe(ye, Fe, "JavaScript Date object"), dd = co, uo = oe(ye, Oe, "JavaScript Date object"), hd = uo, ho = oe(ie, Fe, "JavaScript Error object"), fd = ho, fo = oe(ie, Oe, "JavaScript Error object"), pd = fo, po = oe(se, Fe, 'JavaScript Promise (or "Thenable") object'), md = po, mo = oe(se, Oe, 'JavaScript Promise (or "Thenable") object'), gd = mo, go = oe(fe, Fe, "JavaScript RegExp object"), bd = go, bo = oe(fe, Oe, "JavaScript RegExp object"), vd = bo;
      function vo(b, _, F) {
        return _ == null ? _ : xo(b, _, F);
      }
      var wd = vo;
      function wo(b, _, F) {
        if (_ == null && s("MissingArgument: no ".concat(Ge(b), " given")), Re(_, F)) return _ == null || typeof _.valueOf != "function" ? _ : _.valueOf();
        s("InvalidArgument: the given ".concat(Ge(b), " is not among the supported values"));
      }
      var xo = wo, yo = oe(rt, Fe, "CSS color specification"), xd = yo, ko = oe(rt, Oe, "CSS color specification"), yd = ko, So = oe(at, Fe, "EMail address"), kd = So, _o = oe(at, Oe, "EMail address"), Sd = _o, Co = oe(zt, Fe, "URL"), _d = Co, Ao = oe(zt, Oe, "URL"), Cd = Ao;
      function Ge(b) {
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
              var F = _.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(F.length) + F;
          }
        }));
      }
      function To(b, _) {
        return _ === void 0 && (_ = '"'), b.replace(_ === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, (function(F) {
          switch (F) {
            case "'":
              return "\\'";
            case '"':
              return '\\"';
            case "\\":
              return "\\\\";
            default:
              return F;
          }
        })).replace(/[\x00-\x1f\x7f-\x9f]/g, (function(F) {
          switch (F) {
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
              var Q = F.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(Q.length) + Q;
          }
        }));
      }
      function $o(b, _) {
        return _ = (_ || "").trim() || "<br/>", b.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, (function(F) {
          switch (F) {
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
              var Q = F.charCodeAt(0).toString(16);
              return "&#x0000".substring(3, 7 - Q.length) + Q + ";";
          }
        }));
      }
      function da(b, _, F) {
        if (b === _) return !1;
        var Q = typeof b;
        if (Q !== typeof _) return !0;
        switch (Q) {
          case "undefined":
          case "boolean":
          case "string":
          case "function":
          default:
            return !0;
          case "number":
            return isNaN(b) !== isNaN(_) || Math.abs(b - _) > Number.EPSILON;
          case "object":
            return b == null || _ == null || (F === "by-value" && (b instanceof Boolean || b instanceof Number || b instanceof String) ? b.valueOf() !== _.valueOf() : Array.isArray(b) ? (function(we, Pe, Wr) {
              if (!Array.isArray(Pe) || we.length !== Pe.length) return !0;
              for (var Xt = 0, Ad = we.length; Xt < Ad; Xt++) if (da(we[Xt], Pe[Xt], Wr)) return !0;
              return !1;
            })(b, _, F) : F === "by-reference" || (function(we, Pe, Wr) {
              if (Object.getPrototypeOf(we) !== Object.getPrototypeOf(Pe)) return !0;
              for (var Xt in we) if (!(Xt in Pe)) return !0;
              for (var Xt in Pe)
                if (!(Xt in we) || da(we[Xt], Pe[Xt], Wr)) return !0;
              return !1;
            })(b, _, F));
        }
        return !0;
      }
      function Io(b) {
        for (var _ in N0("candidate", b), b) if (a(b, _)) return !1;
        return !0;
      }
      function No(b) {
        return /^\s*$/.test(b);
      }
      var o0 = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
      function Eo(b) {
        var _ = b.toLowerCase();
        if (o0.hasOwnProperty(_) && (b = o0[_]), /^#[a-fA-F0-9]{6}$/.test(b)) return b + "FF";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return b;
        var F = "0123456789ABCDEF";
        function Q(Pe) {
          return Pe > 255 && (Pe = 255), F[Math.trunc(Pe / 16)] + F[Pe % 16];
        }
        var we = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (we != null) return "#" + Q(parseInt(we[1], 10)) + Q(parseInt(we[2], 10)) + Q(parseInt(we[3], 10)) + "FF";
        if ((we = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return "#" + Q(parseInt(we[1], 10)) + Q(parseInt(we[2], 10)) + Q(parseInt(we[3], 10)) + Q(255 * parseFloat(we[4]));
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }
      t.ColorSet = o0, t.FunctionWithName = Dr, t.HTMLsafe = $o, t.HexColor = Eo, t.MarkDownSafe = function(b, _) {
        return $o(b, _).replace(/:/g, "&#58;");
      }, t.ObjectIsEmpty = Io, t.ObjectIsNotEmpty = function(b) {
        return !Io(b);
      }, t.ObjectMergedWith = function(b) {
        for (var _ = [], F = 1; F < arguments.length; F++) _[F - 1] = arguments[F];
        for (var Q = 0, we = _.length; Q < we; Q++) {
          var Pe = _[Q];
          if (Pe != null) if (typeof Pe == "object") for (var Wr in Pe) {
            var Xt = Object.getOwnPropertyDescriptor(Pe, Wr);
            Xt != null && Object.defineProperty(b, Wr, Xt);
          }
          else s("InvalidArgument: argument #" + (Q + 1) + " is not an object");
        }
        return b;
      }, t.Object_hasOwnProperty = a, t.Object_isPrototypeOf = i, t.Object_propertyIsEnumerable = function(b, _) {
        return b == null || "propertyIsEnumerable" in b && typeof b.propertyIsEnumerable == "function" ? b.propertyIsEnumerable(_) : Object.prototype.propertyIsEnumerable.call(b, _);
      }, t.Object_toLocaleString = function(b) {
        return b == null || "toLocaleString" in b && typeof b.toLocaleString == "function" ? b.toLocaleString() : Object.prototype.toString.call(b);
      }, t.Object_toString = function(b) {
        return b == null || "toString" in b && typeof b.toString == "function" ? b.toString() : Object.prototype.toString.call(b);
      }, t.Object_valueOf = function(b) {
        return b == null || "valueOf" in b && typeof b.valueOf == "function" ? b.valueOf() : Object.prototype.valueOf.call(b);
      }, t.RGBAColor = function(b) {
        var _ = b.toLowerCase();
        if (o0.hasOwnProperty(_)) return o0[_];
        if (/^#[a-fA-F0-9]{6}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + ", 1)";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + "," + parseInt(b.slice(7), 16) / 255 + ")";
        var F = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (F != null) return b.slice(0, b.length - 1) + ",1)";
        if ((F = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return b;
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }, t.StringIsEmpty = No, t.StringIsNotEmpty = function(b) {
        return !No(b);
      }, t.ValidatorForClassifier = oe, t.ValueExists = function(b) {
        return b != null;
      }, t.ValueInheritsFrom = function(b, _) {
        return i(_, b);
      }, t.ValueIsAnonymousFunction = ae, t.ValueIsArray = Se, t.ValueIsBoolean = o, t.ValueIsCardinal = v, t.ValueIsColor = rt, t.ValueIsDate = ye, t.ValueIsEMailAddress = at, t.ValueIsEmptyString = function(b) {
        return (typeof b == "string" || b instanceof String) && I.test(b.valueOf());
      }, t.ValueIsError = ie, t.ValueIsFiniteNumber = d, t.ValueIsFunction = E, t.ValueIsInstanceOf = function(b, _) {
        return b instanceof _;
      }, t.ValueIsInteger = f, t.ValueIsIntegerInRange = function(b, _, F) {
        if (!f(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(F)) {
            if (b < _ || b > F) return !1;
          } else if (b < _) return !1;
        } else if (d(F) && b > F) return !1;
        return !0;
      }, t.ValueIsList = W, t.ValueIsListSatisfying = Y, t.ValueIsMissing = function(b) {
        return b == null;
      }, t.ValueIsNaN = h, t.ValueIsNamedFunction = ne, t.ValueIsNativeFunction = B, t.ValueIsNonEmptyString = N, t.ValueIsNumber = l, t.ValueIsNumberInRange = function(b, _, F, Q, we) {
        if (Q === void 0 && (Q = !0), we === void 0 && (we = !0), !l(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(F)) {
            if (b < _ || !Q && b === _ || b > F || !we && b === F) return !1;
          } else if (b < _ || !Q && b === _) return !1;
        } else if (d(F) && (b > F || !we && b === F)) return !1;
        return !0;
      }, t.ValueIsObject = Ie, t.ValueIsOneOf = Re, t.ValueIsOrdinal = m, t.ValueIsPlainObject = me, t.ValueIsPromise = se, t.ValueIsRegExp = fe, t.ValueIsScriptedFunction = be, t.ValueIsString = y, t.ValueIsStringMatching = z, t.ValueIsText = M, t.ValueIsTextline = q, t.ValueIsURL = zt, t.ValueIsVanillaObject = qe, t.ValuesAreEqual = function(b, _, F) {
        return !da(b, _, F);
      }, t.ValuesDiffer = da, t.acceptNil = Fe, t.allowAnonymousFunction = Kt, t.allowArray = On, t.allowBoolean = cr, t.allowCardinal = X, t.allowColor = yo, t.allowDate = co, t.allowEMailAddress = So, t.allowError = ho, t.allowFiniteNumber = nn, t.allowFunction = cn, t.allowInstanceOf = no, t.allowInteger = $n, t.allowIntegerInRange = Sr, t.allowList = te, t.allowListSatisfying = Ct, t.allowNaN = Vt, t.allowNamedFunction = A, t.allowNativeFunction = ue, t.allowNonEmptyString = Qe, t.allowNumber = Gt, t.allowNumberInRange = an, t.allowObject = sa, t.allowOneOf = vo, t.allowOrdinal = _r, t.allowPlainObject = E0, t.allowPromise = po, t.allowRegExp = go, t.allowScriptedFunction = $t, t.allowString = de, t.allowStringMatching = t0, t.allowText = Mn, t.allowTextline = qr, t.allowURL = Co, t.allowValueInheritingFrom = so, t.allowVanillaObject = Te, t.allowedAnonymousFunction = I0, t.allowedArray = Vr, t.allowedBoolean = Lr, t.allowedCardinal = _e, t.allowedColor = xd, t.allowedDate = dd, t.allowedEMailAddress = kd, t.allowedError = fd, t.allowedFiniteNumber = kr, t.allowedFunction = T0, t.allowedInstanceOf = cd, t.allowedInteger = Jn, t.allowedIntegerInRange = Qn, t.allowedList = pe, t.allowedListSatisfying = fr, t.allowedNaN = ur, t.allowedNamedFunction = T, t.allowedNativeFunction = Ne, t.allowedNonEmptyString = Hr, t.allowedNumber = Rt, t.allowedNumberInRange = An, t.allowedObject = hi, t.allowedOneOf = wd, t.allowedOrdinal = Bt, t.allowedPlainObject = ar, t.allowedPromise = md, t.allowedRegExp = bd, t.allowedScriptedFunction = Lt, t.allowedString = J, t.allowedStringMatching = En, t.allowedText = ln, t.allowedTextline = ot, t.allowedURL = _d, t.allowedValueInheritingFrom = ud, t.allowedVanillaObject = la, t.constrained = function(b, _, F) {
        return _ === void 0 && (_ = -1 / 0), F === void 0 && (F = 1 / 0), Math.max(_, Math.min(b, F));
      }, t.escaped = Ge, t.expectAnonymousFunction = U, t.expectArray = i0, t.expectBoolean = yr, t.expectCardinal = nt, t.expectColor = ko, t.expectDate = uo, t.expectEMailAddress = _o, t.expectError = fo, t.expectFiniteNumber = Ot, t.expectFunction = n0, t.expectInstanceOf = ao, t.expectInteger = In, t.expectIntegerInRange = on, t.expectList = Ee, t.expectListSatisfying = ca, t.expectNaN = Zt, t.expectNamedFunction = D, t.expectNativeFunction = De, t.expectNonEmptyString = Cr, t.expectNumber = jt, t.expectNumberInRange = sn, t.expectObject = N0, t.expectOneOf = wo, t.expectOrdinal = k, t.expectPlainObject = oa, t.expectPromise = mo, t.expectRegExp = bo, t.expectScriptedFunction = nr, t.expectString = ve, t.expectStringMatching = bt, t.expectText = Dt, t.expectTextline = Nt, t.expectURL = Ao, t.expectValue = xr, t.expectValueInheritingFrom = oo, t.expectVanillaObject = xt, t.expectedAnonymousFunction = ge, t.expectedArray = s0, t.expectedBoolean = Fr, t.expectedCardinal = st, t.expectedColor = yd, t.expectedDate = hd, t.expectedEMailAddress = Sd, t.expectedError = pd, t.expectedFiniteNumber = Pr, t.expectedFunction = $0, t.expectedInstanceOf = io, t.expectedInteger = Yn, t.expectedIntegerInRange = e0, t.expectedList = Ve, t.expectedListSatisfying = ua, t.expectedNaN = dr, t.expectedNamedFunction = ee, t.expectedNativeFunction = ct, t.expectedNonEmptyString = Nn, t.expectedNumber = Cn, t.expectedNumberInRange = Tn, t.expectedObject = a0, t.expectedOneOf = xo, t.expectedOrdinal = O, t.expectedPlainObject = M0, t.expectedPromise = gd, t.expectedRegExp = vd, t.expectedScriptedFunction = Rn, t.expectedString = ht, t.expectedStringMatching = hr, t.expectedText = zn, t.expectedTextline = r0, t.expectedURL = Cd, t.expectedValue = _t, t.expectedValueInheritingFrom = lo, t.expectedVanillaObject = Ze, t.global = n, t.quotable = To, t.quoted = function(b, _) {
        return _ === void 0 && (_ = '"'), _ + To(b, _) + _;
      }, t.rejectNil = Oe, t.shortHexColor = function(b) {
        return Eo(b).slice(0, 7);
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
              var F = parseInt(_.slice(2), 16);
              return String.fromCharCode(F);
          }
        }));
      }, t.validatedArgument = je, Object.defineProperty(t, "__esModule", { value: !0 });
    }));
  })(B0, B0.exports)), B0.exports;
}
var S = Nd(), ta, Be, dc, pn, Oo, hc, fc, pi, Ia, P0, pc, xs, Li, Fi, mc, Ba = {}, Da = [], Ed = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ra = Array.isArray;
function Er(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function ys(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function Jr(r, e, t) {
  var n, a, i, s = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? ta.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (i in r.defaultProps) s[i] === void 0 && (s[i] = r.defaultProps[i]);
  return H0(r, s, n, a, null);
}
function H0(r, e, t, n, a) {
  var i = { type: r, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++dc, __i: -1, __u: 0 };
  return a == null && Be.vnode != null && Be.vnode(i), i;
}
function Md() {
  return { current: null };
}
function vn(r) {
  return r.children;
}
function Zr(r, e) {
  this.props = r, this.context = e;
}
function b0(r, e) {
  if (e == null) return r.__ ? b0(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? b0(r) : null;
}
function zd(r) {
  if (r.__P && r.__d) {
    var e = r.__v, t = e.__e, n = [], a = [], i = Er({}, e);
    i.__v = e.__v + 1, Be.vnode && Be.vnode(i), ks(r.__P, i, e, r.__n, r.__P.namespaceURI, 32 & e.__u ? [t] : null, n, t ?? b0(e), !!(32 & e.__u), a), i.__v = e.__v, i.__.__k[i.__i] = i, wc(n, i, a), e.__e = e.__ = null, i.__e != t && gc(i);
  }
}
function gc(r) {
  if ((r = r.__) != null && r.__c != null) return r.__e = r.__c.base = null, r.__k.some(function(e) {
    if (e != null && e.__e != null) return r.__e = r.__c.base = e.__e;
  }), gc(r);
}
function Pi(r) {
  (!r.__d && (r.__d = !0) && pn.push(r) && !La.__r++ || Oo != Be.debounceRendering) && ((Oo = Be.debounceRendering) || hc)(La);
}
function La() {
  try {
    for (var r, e = 1; pn.length; ) pn.length > e && pn.sort(fc), r = pn.shift(), e = pn.length, zd(r);
  } finally {
    pn.length = La.__r = 0;
  }
}
function bc(r, e, t, n, a, i, s, o, l, d, h) {
  var f, m, v, y, I, N, z, $ = n && n.__k || Da, M = e.length;
  for (l = Rd(t, e, $, l, M), f = 0; f < M; f++) (v = t.__k[f]) != null && (m = v.__i != -1 && $[v.__i] || Ba, v.__i = f, N = ks(r, v, m, a, i, s, o, l, d, h), y = v.__e, v.ref && m.ref != v.ref && (m.ref && Ss(m.ref, null, v), h.push(v.ref, v.__c || y, v)), I == null && y != null && (I = y), (z = !!(4 & v.__u)) || m.__k === v.__k ? (l = vc(v, l, r, z), z && m.__e && (m.__e = null)) : typeof v.type == "function" && N !== void 0 ? l = N : y && (l = y.nextSibling), v.__u &= -7);
  return t.__e = I, l;
}
function Rd(r, e, t, n, a) {
  var i, s, o, l, d, h = t.length, f = h, m = 0;
  for (r.__k = new Array(a), i = 0; i < a; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = r.__k[i] = H0(null, s, null, null, null) : ra(s) ? s = r.__k[i] = H0(vn, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = r.__k[i] = H0(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : r.__k[i] = s, l = i + m, s.__ = r, s.__b = r.__b + 1, o = null, (d = s.__i = Od(s, t, l, f)) != -1 && (f--, (o = t[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (a > h ? m-- : a < h && m++), typeof s.type != "function" && (s.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, s.__u |= 4))) : r.__k[i] = null;
  if (f) for (i = 0; i < h; i++) (o = t[i]) != null && (2 & o.__u) == 0 && (o.__e == n && (n = b0(o)), yc(o, o));
  return n;
}
function vc(r, e, t, n) {
  var a, i;
  if (typeof r.type == "function") {
    for (a = r.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = r, e = vc(a[i], e, t, n));
    return e;
  }
  r.__e != e && (n && (e && r.type && !e.parentNode && (e = b0(r)), t.insertBefore(r.__e, e || null)), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function v0(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (ra(r) ? r.some(function(t) {
    v0(t, e);
  }) : e.push(r)), e;
}
function Od(r, e, t, n) {
  var a, i, s, o = r.key, l = r.type, d = e[t], h = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || h && o == d.key && l == d.type) return t;
  if (n > (h ? 1 : 0)) {
    for (a = t - 1, i = t + 1; a >= 0 || i < e.length; ) if ((d = e[s = a >= 0 ? a-- : i++]) != null && (2 & d.__u) == 0 && o == d.key && l == d.type) return s;
  }
  return -1;
}
function Bo(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || Ed.test(e) ? t : t + "px";
}
function ha(r, e, t, n, a) {
  var i, s;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof n == "string" && (r.style.cssText = n = ""), n) for (e in n) t && e in t || Bo(r.style, e, "");
    if (t) for (e in t) n && t[e] == n[e] || Bo(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(pc, "$1")), s = e.toLowerCase(), e = s in r || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + i] = t, t ? n ? t[P0] = n[P0] : (t[P0] = xs, r.addEventListener(e, i ? Fi : Li, i)) : r.removeEventListener(e, i ? Fi : Li, i);
  else {
    if (a == "http://www.w3.org/2000/svg") e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (e != "width" && e != "height" && e != "href" && e != "list" && e != "form" && e != "tabIndex" && e != "download" && e != "rowSpan" && e != "colSpan" && e != "role" && e != "popover" && e in r) try {
      r[e] = t ?? "";
      break e;
    } catch {
    }
    typeof t == "function" || (t == null || t === !1 && e[4] != "-" ? r.removeAttribute(e) : r.setAttribute(e, e == "popover" && t == 1 ? "" : t));
  }
}
function Do(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e[Ia] == null) e[Ia] = xs++;
      else if (e[Ia] < t[P0]) return;
      return t(Be.event ? Be.event(e) : e);
    }
  };
}
function ks(r, e, t, n, a, i, s, o, l, d) {
  var h, f, m, v, y, I, N, z, $, M, H, q, E, ae, ne, B = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), i = [o = e.__e = t.__e]), (h = Be.__b) && h(e);
  e: if (typeof B == "function") try {
    if (z = e.props, $ = B.prototype && B.prototype.render, M = (h = B.contextType) && n[h.__c], H = h ? M ? M.props.value : h.__ : n, t.__c ? N = (f = e.__c = t.__c).__ = f.__E : ($ ? e.__c = f = new B(z, H) : (e.__c = f = new Zr(z, H), f.constructor = B, f.render = Dd), M && M.sub(f), f.state || (f.state = {}), f.__n = n, m = f.__d = !0, f.__h = [], f._sb = []), $ && f.__s == null && (f.__s = f.state), $ && B.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = Er({}, f.__s)), Er(f.__s, B.getDerivedStateFromProps(z, f.__s))), v = f.props, y = f.state, f.__v = e, m) $ && B.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), $ && f.componentDidMount != null && f.__h.push(f.componentDidMount);
    else {
      if ($ && B.getDerivedStateFromProps == null && z !== v && f.componentWillReceiveProps != null && f.componentWillReceiveProps(z, H), e.__v == t.__v || !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(z, f.__s, H) === !1) {
        e.__v != t.__v && (f.props = z, f.state = f.__s, f.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(be) {
          be && (be.__ = e);
        }), Da.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
        break e;
      }
      f.componentWillUpdate != null && f.componentWillUpdate(z, f.__s, H), $ && f.componentDidUpdate != null && f.__h.push(function() {
        f.componentDidUpdate(v, y, I);
      });
    }
    if (f.context = H, f.props = z, f.__P = r, f.__e = !1, q = Be.__r, E = 0, $) f.state = f.__s, f.__d = !1, q && q(e), h = f.render(f.props, f.state, f.context), Da.push.apply(f.__h, f._sb), f._sb = [];
    else do
      f.__d = !1, q && q(e), h = f.render(f.props, f.state, f.context), f.state = f.__s;
    while (f.__d && ++E < 25);
    f.state = f.__s, f.getChildContext != null && (n = Er(Er({}, n), f.getChildContext())), $ && !m && f.getSnapshotBeforeUpdate != null && (I = f.getSnapshotBeforeUpdate(v, y)), ae = h != null && h.type === vn && h.key == null ? xc(h.props.children) : h, o = bc(r, ra(ae) ? ae : [ae], e, t, n, a, i, s, o, l, d), f.base = e.__e, e.__u &= -161, f.__h.length && s.push(f), N && (f.__E = f.__ = null);
  } catch (be) {
    if (e.__v = null, l || i != null) if (be.then) {
      for (e.__u |= l ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      i[i.indexOf(o)] = null, e.__e = o;
    } else {
      for (ne = i.length; ne--; ) ys(i[ne]);
      Hi(e);
    }
    else e.__e = t.__e, e.__k = t.__k, be.then || Hi(e);
    Be.__e(be, e, t);
  }
  else i == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : o = e.__e = Bd(t.__e, e, t, n, a, i, s, l, d);
  return (h = Be.diffed) && h(e), 128 & e.__u ? void 0 : o;
}
function Hi(r) {
  r && (r.__c && (r.__c.__e = !0), r.__k && r.__k.some(Hi));
}
function wc(r, e, t) {
  for (var n = 0; n < t.length; n++) Ss(t[n], t[++n], t[++n]);
  Be.__c && Be.__c(e, r), r.some(function(a) {
    try {
      r = a.__h, a.__h = [], r.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      Be.__e(i, a.__v);
    }
  });
}
function xc(r) {
  return typeof r != "object" || r == null || r.__b > 0 ? r : ra(r) ? r.map(xc) : r.constructor !== void 0 ? null : Er({}, r);
}
function Bd(r, e, t, n, a, i, s, o, l) {
  var d, h, f, m, v, y, I, N = t.props || Ba, z = e.props, $ = e.type;
  if ($ == "svg" ? a = "http://www.w3.org/2000/svg" : $ == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((v = i[d]) && "setAttribute" in v == !!$ && ($ ? v.localName == $ : v.nodeType == 3)) {
      r = v, i[d] = null;
      break;
    }
  }
  if (r == null) {
    if ($ == null) return document.createTextNode(z);
    r = document.createElementNS(a, $, z.is && z), o && (Be.__m && Be.__m(e, i), o = !1), i = null;
  }
  if ($ == null) N === z || o && r.data == z || (r.data = z);
  else {
    if (i = $ == "textarea" && z.defaultValue != null ? null : i && ta.call(r.childNodes), !o && i != null) for (N = {}, d = 0; d < r.attributes.length; d++) N[(v = r.attributes[d]).name] = v.value;
    for (d in N) v = N[d], d == "dangerouslySetInnerHTML" ? f = v : d == "children" || d in z || d == "value" && "defaultValue" in z || d == "checked" && "defaultChecked" in z || ha(r, d, null, v, a);
    for (d in z) v = z[d], d == "children" ? m = v : d == "dangerouslySetInnerHTML" ? h = v : d == "value" ? y = v : d == "checked" ? I = v : o && typeof v != "function" || N[d] === v || ha(r, d, v, N[d], a);
    if (h) o || f && (h.__html == f.__html || h.__html == r.innerHTML) || (r.innerHTML = h.__html), e.__k = [];
    else if (f && (r.innerHTML = ""), bc(e.type == "template" ? r.content : r, ra(m) ? m : [m], e, t, n, $ == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, s, i ? i[0] : t.__k && b0(t, 0), o, l), i != null) for (d = i.length; d--; ) ys(i[d]);
    o && $ != "textarea" || (d = "value", $ == "progress" && y == null ? r.removeAttribute("value") : y != null && (y !== r[d] || $ == "progress" && !y || $ == "option" && y != N[d]) && ha(r, d, y, N[d], a), d = "checked", I != null && I != r[d] && ha(r, d, I, N[d], a));
  }
  return r;
}
function Ss(r, e, t) {
  try {
    if (typeof r == "function") {
      var n = typeof r.__u == "function";
      n && r.__u(), n && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (a) {
    Be.__e(a, t);
  }
}
function yc(r, e, t) {
  var n, a;
  if (Be.unmount && Be.unmount(r), (n = r.ref) && (n.current && n.current != r.__e || Ss(n, null, e)), (n = r.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      Be.__e(i, e);
    }
    n.base = n.__P = null;
  }
  if (n = r.__k) for (a = 0; a < n.length; a++) n[a] && yc(n[a], e, t || typeof r.type != "function");
  t || ys(r.__e), r.__c = r.__ = r.__e = void 0;
}
function Dd(r, e, t) {
  return this.constructor(r, t);
}
function Kr(r, e, t) {
  var n, a, i, s;
  e == document && (e = document.documentElement), Be.__ && Be.__(r, e), a = (n = typeof t == "function") ? null : t && t.__k || e.__k, i = [], s = [], ks(e, r = (!n && t || e).__k = Jr(vn, null, [r]), a || Ba, Ba, e.namespaceURI, !n && t ? [t] : a ? null : e.firstChild ? ta.call(e.childNodes) : null, i, !n && t ? t : a ? a.__e : e.firstChild, n, s), wc(i, r, s);
}
function kc(r, e, t) {
  var n, a, i, s, o = Er({}, r.props);
  for (i in r.type && r.type.defaultProps && (s = r.type.defaultProps), e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : o[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? ta.call(arguments, 2) : t), H0(r.type, o, n || r.key, a || r.ref, null);
}
function Sc(r) {
  function e(t) {
    var n, a;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (a = {})[e.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(s) {
        s.__e = !0, Pi(s);
      });
    }, this.sub = function(i) {
      n.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), s && s.call(i);
      };
    }), t.children;
  }
  return e.__c = "__cC" + mc++, e.__ = r, e.Provider = e.__l = (e.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = e, e;
}
ta = Da.slice, Be = { __e: function(r, e, t, n) {
  for (var a, i, s; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(r)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(r, n || {}), s = a.__d), s) return a.__E = a;
  } catch (o) {
    r = o;
  }
  throw r;
} }, dc = 0, Zr.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Er({}, this.state), typeof r == "function" && (r = r(Er({}, t), this.props)), r && Er(t, r), r != null && this.__v && (e && this._sb.push(e), Pi(this));
}, Zr.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), Pi(this));
}, Zr.prototype.render = vn, pn = [], hc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, fc = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, La.__r = 0, pi = Math.random().toString(8), Ia = "__d" + pi, P0 = "__a" + pi, pc = /(PointerCapture)$|Capture$/i, xs = 0, Li = Do(!1), Fi = Do(!0), mc = 0;
var _c = function(r, e, t, n) {
  var a;
  e[0] = 0;
  for (var i = 1; i < e.length; i++) {
    var s = e[i++], o = e[i] ? (e[0] |= s ? 1 : 2, t[e[i++]]) : e[++i];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++i]] = o : s === 6 ? n[1][e[++i]] += o + "" : s ? (a = r.apply(o, _c(r, o, t, ["", null])), n.push(a), o[0] ? e[0] |= 2 : (e[i - 2] = 0, e[i] = a)) : n.push(o);
  }
  return n;
}, Lo = /* @__PURE__ */ new Map();
function Ld(r) {
  var e = Lo.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Lo.set(this, e)), (e = _c(this, e.get(r) || (e.set(r, e = (function(t) {
    for (var n, a, i = 1, s = "", o = "", l = [0], d = function(m) {
      i === 1 && (m || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, m, s) : i === 3 && (m || s) ? (l.push(3, m, s), i = 2) : i === 2 && s === "..." && m ? l.push(4, m, 0) : i === 2 && s && !m ? l.push(5, 0, !0, s) : i >= 5 && ((s || !m && i === 5) && (l.push(i, 0, s, a), i = 6), m && (l.push(i, m, 0, a), i = 6)), s = "";
    }, h = 0; h < t.length; h++) {
      h && (i === 1 && d(), d(h));
      for (var f = 0; f < t[h].length; f++) n = t[h][f], i === 1 ? n === "<" ? (d(), l = [l], i = 3) : s += n : i === 4 ? s === "--" && n === ">" ? (i = 1, s = "") : s = n + s[0] : o ? n === o ? o = "" : s += n : n === '"' || n === "'" ? o = n : n === ">" ? (d(), i = 1) : i && (n === "=" ? (i = 5, a = s, s = "") : n === "/" && (i < 5 || t[h][f + 1] === ">") ? (d(), i === 3 && (l = l[0]), i = l, (l = l[0]).push(2, 0, i), i = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (d(), i = 2) : s += n), i === 3 && s === "!--" && (i = 4, l = l[0]);
    }
    return d(), l;
  })(r)), e), arguments, [])).length > 1 ? e : e[0];
}
var K = Ld.bind(Jr), Yr, et, mi, Fo, V0 = 0, Cc = [], wt = Be, Po = wt.__b, Ho = wt.__r, qo = wt.diffed, Vo = wt.__c, Wo = wt.unmount, Uo = wt.__;
function Gn(r, e) {
  wt.__h && wt.__h(et, r, V0 || e), V0 = 0;
  var t = et.__H || (et.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function Je(r) {
  return V0 = 1, Ac(Nc, r);
}
function Ac(r, e, t) {
  var n = Gn(Yr++, 2);
  if (n.t = r, !n.__c && (n.__ = [t ? t(e) : Nc(void 0, e), function(o) {
    var l = n.__N ? n.__N[0] : n.__[0], d = n.t(l, o);
    l !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = et, !et.__f)) {
    var a = function(o, l, d) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (h.every(function(m) {
        return !m.__N;
      })) return !i || i.call(this, o, l, d);
      var f = n.__c.props !== o;
      return h.some(function(m) {
        if (m.__N) {
          var v = m.__[0];
          m.__ = m.__N, m.__N = void 0, v !== m.__[0] && (f = !0);
        }
      }), i && i.call(this, o, l, d) || f;
    };
    et.__f = !0;
    var i = et.shouldComponentUpdate, s = et.componentWillUpdate;
    et.componentWillUpdate = function(o, l, d) {
      if (this.__e) {
        var h = i;
        i = void 0, a(o, l, d), i = h;
      }
      s && s.call(this, o, l, d);
    }, et.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function Jt(r, e) {
  var t = Gn(Yr++, 3);
  !wt.__s && _s(t.__H, e) && (t.__ = r, t.u = e, et.__H.__h.push(t));
}
function Fd(r, e) {
  var t = Gn(Yr++, 4);
  !wt.__s && _s(t.__H, e) && (t.__ = r, t.u = e, et.__h.push(t));
}
function Le(r) {
  return V0 = 5, k0(function() {
    return { current: r };
  }, []);
}
function k0(r, e) {
  var t = Gn(Yr++, 7);
  return _s(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function vr(r, e) {
  return V0 = 8, k0(function() {
    return r;
  }, e);
}
function Tc(r) {
  var e = et.context[r.__c], t = Gn(Yr++, 9);
  return t.c = r, e ? (t.__ == null && (t.__ = !0, e.sub(et)), e.props.value) : r.__;
}
function $c(r) {
  var e = Gn(Yr++, 10), t = Je();
  return e.__ = r, et.componentDidCatch || (et.componentDidCatch = function(n, a) {
    e.__ && e.__(n, a), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function Ic() {
  var r = Gn(Yr++, 11);
  if (!r.__) {
    for (var e = et.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function Pd() {
  for (var r; r = Cc.shift(); ) {
    var e = r.__H;
    if (r.__P && e) try {
      e.__h.some(Na), e.__h.some(qi), e.__h = [];
    } catch (t) {
      e.__h = [], wt.__e(t, r.__v);
    }
  }
}
wt.__b = function(r) {
  et = null, Po && Po(r);
}, wt.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), Uo && Uo(r, e);
}, wt.__r = function(r) {
  Ho && Ho(r), Yr = 0;
  var e = (et = r.__c).__H;
  e && (mi === et ? (e.__h = [], et.__h = [], e.__.some(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.some(Na), e.__h.some(qi), e.__h = [], Yr = 0)), mi = et;
}, wt.diffed = function(r) {
  qo && qo(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (Cc.push(e) !== 1 && Fo === wt.requestAnimationFrame || ((Fo = wt.requestAnimationFrame) || Hd)(Pd)), e.__H.__.some(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), mi = et = null;
}, wt.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.some(Na), t.__h = t.__h.filter(function(n) {
        return !n.__ || qi(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], wt.__e(n, t.__v);
    }
  }), Vo && Vo(r, e);
}, wt.unmount = function(r) {
  Wo && Wo(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.some(function(n) {
    try {
      Na(n);
    } catch (a) {
      e = a;
    }
  }), t.__H = void 0, e && wt.__e(e, t.__v));
};
var Go = typeof requestAnimationFrame == "function";
function Hd(r) {
  var e, t = function() {
    clearTimeout(n), Go && cancelAnimationFrame(e), setTimeout(r);
  }, n = setTimeout(t, 35);
  Go && (e = requestAnimationFrame(t));
}
function Na(r) {
  var e = et, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), et = e;
}
function qi(r) {
  var e = et;
  r.__c = r.__(), et = e;
}
function _s(r, e) {
  return !r || r.length !== e.length || e.some(function(t, n) {
    return t !== r[n];
  });
}
function Nc(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function Ec(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function Vi(r, e) {
  for (var t in r) if (t !== "__source" && !(t in e)) return !0;
  for (var n in e) if (n !== "__source" && r[n] !== e[n]) return !0;
  return !1;
}
function jo(r, e) {
  this.props = r, this.context = e;
}
function qd(r, e) {
  function t(a) {
    var i = this.props.ref;
    return i != a.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, a) || i != a.ref : Vi(this.props, a);
  }
  function n(a) {
    return this.shouldComponentUpdate = t, Jr(r, a);
  }
  return n.displayName = "Memo(" + (r.displayName || r.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = r, n;
}
(jo.prototype = new Zr()).isPureReactComponent = !0, jo.prototype.shouldComponentUpdate = function(r, e) {
  return Vi(this.props, r) || Vi(this.state, e);
};
var Zo = Be.__b;
Be.__b = function(r) {
  r.type && r.type.__f && r.ref && (r.props.ref = r.ref, r.ref = null), Zo && Zo(r);
};
var Vd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Wd(r) {
  function e(t) {
    var n = Ec({}, t);
    return delete n.ref, r(n, t.ref || null);
  }
  return e.$$typeof = Vd, e.render = r, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", e;
}
var Ud = Be.__e;
Be.__e = function(r, e, t, n) {
  if (r.then) {
    for (var a, i = e; i = i.__; ) if ((a = i.__c) && a.__c) return e.__e == null && (e.__e = t.__e, e.__k = t.__k), a.__c(r, e);
  }
  Ud(r, e, t, n);
};
var Ko = Be.unmount;
function Mc(r, e, t) {
  return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), r.__c.__H = null), (r = Ec({}, r)).__c != null && (r.__c.__P === t && (r.__c.__P = e), r.__c.__e = !0, r.__c = null), r.__k = r.__k && r.__k.map(function(n) {
    return Mc(n, e, t);
  })), r;
}
function zc(r, e, t) {
  return r && t && (r.__v = null, r.__k = r.__k && r.__k.map(function(n) {
    return zc(n, e, t);
  }), r.__c && r.__c.__P === e && (r.__e && t.appendChild(r.__e), r.__c.__e = !0, r.__c.__P = t)), r;
}
function gi() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Rc(r) {
  var e = r.__ && r.__.__c;
  return e && e.__a && e.__a(r);
}
function fa() {
  this.i = null, this.l = null;
}
Be.unmount = function(r) {
  var e = r.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), Ko && Ko(r);
}, (gi.prototype = new Zr()).__c = function(r, e) {
  var t = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var a = Rc(n.__v), i = !1, s = function() {
    i || n.__z || (i = !0, t.__R = null, a ? a(l) : l());
  };
  t.__R = s;
  var o = t.__P;
  t.__P = null;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = zc(d, d.__c.__P, d.__c.__O);
      }
      var h;
      for (n.setState({ __a: n.__b = null }); h = n.o.pop(); ) h.__P = o, h.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), r.then(s, s);
}, gi.prototype.componentWillUnmount = function() {
  this.o = [];
}, gi.prototype.render = function(r, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Mc(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var a = e.__a && Jr(vn, null, r.fallback);
  return a && (a.__u &= -33), [Jr(vn, null, e.__a ? null : r.children), a];
};
var Xo = function(r, e, t) {
  if (++t[1] === t[0] && r.l.delete(e), r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.l.size)) for (t = r.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    r.i = t = t[2];
  }
};
function Gd(r) {
  return this.getChildContext = function() {
    return r.context;
  }, r.children;
}
function jd(r) {
  var e = this, t = r.h;
  if (e.componentWillUnmount = function() {
    Kr(null, e.v), e.v = null, e.h = null;
  }, e.h && e.h !== t && e.componentWillUnmount(), !e.v) {
    for (var n = e.__v; n !== null && !n.__m && n.__ !== null; ) n = n.__;
    e.h = t, e.v = { nodeType: 1, parentNode: t, childNodes: [], __k: { __m: n.__m }, contains: function() {
      return !0;
    }, namespaceURI: t.namespaceURI, insertBefore: function(a, i) {
      this.childNodes.push(a), e.h.insertBefore(a, i);
    }, removeChild: function(a) {
      this.childNodes.splice(this.childNodes.indexOf(a) >>> 1, 1), e.h.removeChild(a);
    } };
  }
  Kr(Jr(Gd, { context: e.context }, r.__v), e.v);
}
function Oc(r, e) {
  var t = Jr(jd, { __v: r, h: e });
  return t.containerInfo = e, t;
}
(fa.prototype = new Zr()).__a = function(r) {
  var e = this, t = Rc(e.__v), n = e.l.get(r);
  return n[0]++, function(a) {
    var i = function() {
      e.props.revealOrder ? (n.push(a), Xo(e, r, n)) : a();
    };
    t ? t(i) : i();
  };
}, fa.prototype.render = function(r) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = v0(r.children);
  r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; ) this.l.set(e[t], this.i = [1, 0, this.i]);
  return r.children;
}, fa.prototype.componentDidUpdate = fa.prototype.componentDidMount = function() {
  var r = this;
  this.l.forEach(function(e, t) {
    Xo(r, t, e);
  });
};
var Zd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, Kd = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Xd = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Jd = /[A-Z0-9]/g, Yd = typeof document < "u", Qd = function(r) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(r);
};
Zr.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(r) {
  Object.defineProperty(Zr.prototype, r, { configurable: !0, get: function() {
    return this["UNSAFE_" + r];
  }, set: function(e) {
    Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e });
  } });
});
var Jo = Be.event;
Be.event = function(r) {
  return Jo && (r = Jo(r)), r.persist = function() {
  }, r.isPropagationStopped = function() {
    return this.cancelBubble;
  }, r.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, r.nativeEvent = r;
};
var eh = { configurable: !0, get: function() {
  return this.class;
} }, Yo = Be.vnode;
Be.vnode = function(r) {
  typeof r.type == "string" && (function(e) {
    var t = e.props, n = e.type, a = {}, i = n.indexOf("-") == -1;
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || Yd && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "translate" && o === "no" ? o = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || Qd(t.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : Xd.test(s) && (s = l) : l = s = "oninput" : i && Kd.test(s) ? s = s.replace(Jd, "-$&").toLowerCase() : o === null && (o = void 0), l === "oninput" && a[s = l] && (s = "oninputCapture"), a[s] = o;
      }
    }
    n == "select" && (a.multiple && Array.isArray(a.value) && (a.value = v0(t.children).forEach(function(d) {
      d.props.selected = a.value.indexOf(d.props.value) != -1;
    })), a.defaultValue != null && (a.value = v0(t.children).forEach(function(d) {
      d.props.selected = a.multiple ? a.defaultValue.indexOf(d.props.value) != -1 : a.defaultValue == d.props.value;
    }))), t.class && !t.className ? (a.class = t.class, Object.defineProperty(a, "className", eh)) : t.className && (a.class = a.className = t.className), e.props = a;
  })(r), r.$$typeof = Zd, Yo && Yo(r);
};
var Qo = Be.__r;
Be.__r = function(r) {
  Qo && Qo(r), r.__c;
};
var el = Be.diffed;
Be.diffed = function(r) {
  el && el(r);
  var e = r.props, t = r.__e;
  t != null && r.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
function zr(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function Bc(r, e) {
  let t;
  const n = () => {
    if (t)
      return t;
    const a = indexedDB.open(r);
    return a.onupgradeneeded = () => a.result.createObjectStore(e), t = zr(a), t.then((i) => {
      i.onclose = () => t = void 0;
    }, () => {
    }), t;
  };
  return (a, i) => n().then((s) => i(s.transaction(e, a).objectStore(e)));
}
let bi;
function jn() {
  return bi || (bi = Bc("keyval-store", "keyval")), bi;
}
function Bn(r, e = jn()) {
  return e("readonly", (t) => zr(t.get(r)));
}
function tl(r, e, t = jn()) {
  return t("readwrite", (n) => (n.put(e, r), zr(n.transaction)));
}
function pa(r, e = jn()) {
  return e("readwrite", (t) => (t.delete(r), zr(t.transaction)));
}
function y5(r = jn()) {
  return r("readwrite", (e) => (e.clear(), zr(e.transaction)));
}
function Cs(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, zr(r.transaction);
}
function th(r = jn()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return zr(e.getAllKeys());
    const t = [];
    return Cs(e, (n) => t.push(n.key)).then(() => t);
  });
}
function k5(r = jn()) {
  return r("readonly", (e) => {
    if (e.getAll)
      return zr(e.getAll());
    const t = [];
    return Cs(e, (n) => t.push(n.value)).then(() => t);
  });
}
function S5(r = jn()) {
  return r("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        zr(e.getAllKeys()),
        zr(e.getAll())
      ]).then(([n, a]) => n.map((i, s) => [i, a[s]]));
    const t = [];
    return Cs(e, (n) => t.push([n.key, n.value])).then(() => t);
  });
}
var Ea = { exports: {} }, rh = Ea.exports, rl;
function nh() {
  return rl || (rl = 1, (function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(rh, (function() {
      return { fromViewportTo: function(t, n, a) {
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
              case a == null:
                throw new Error("no target element given");
              case a instanceof Element:
                var i = window.getComputedStyle(a), s = parseFloat(i.borderLeftWidth), o = parseFloat(i.borderTopWidth), l = a.getBoundingClientRect();
                return { left: n.left - l.left - s, top: n.top - l.top - o };
              default:
                throw new Error("invalid target element given");
            }
          default:
            throw new Error("invalid coordinate system given");
        }
      }, fromDocumentTo: function(t, n, a) {
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
              case a == null:
                throw new Error("no target element given");
              case a instanceof Element:
                var i = window.getComputedStyle(a), s = parseFloat(i.borderLeftWidth), o = parseFloat(i.borderTopWidth), l = a.getBoundingClientRect();
                return { left: n.left + window.scrollX - l.left - s, top: n.top + window.scrollY - l.top - o };
              default:
                throw new Error("invalid target element given");
            }
          default:
            throw new Error("invalid coordinate system given");
        }
      }, fromLocalTo: function(t, n, a) {
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
            var l = window.getComputedStyle(a), d = parseFloat(l.borderLeftWidth), h = parseFloat(l.borderTopWidth);
            s = (i = a.getBoundingClientRect()).left + d, o = i.top + h;
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
  })(Ea)), Ea.exports;
}
var ah = nh();
const ih = /* @__PURE__ */ uc(ah), sh = /* @__PURE__ */ new Set([
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
]), oh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Color",
  "Alpha",
  "dontSearch",
  "Script",
  "Widgets",
  "Value"
]), lh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Number",
  "Type",
  "Variant",
  "zIndex",
  "Anchors",
  "Offsets",
  "visible",
  "Script",
  "Value",
  "Text",
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
function nl(r, e, t, n) {
  let a, i, s, o;
  switch (!0) {
    case r[0] === "left-width":
      a = e[0], i = e[1];
      break;
    case r[0] === "left-right":
      a = e[0], i = t - e[0] - e[1];
      break;
    default:
      i = e[0], a = t - e[0] - e[1];
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
  return { x: a, y: s, width: i, height: o };
}
function al(r, e, t, n, a, i, s) {
  let o, l, d, h;
  switch (!0) {
    case a[0] === "left-width":
      o = r, l = t;
      break;
    case a[0] === "left-right":
      o = r, l = i - r - t;
      break;
    default:
      o = t, l = i - r - t;
  }
  switch (!0) {
    case a[1] === "top-height":
      d = e, h = n;
      break;
    case a[1] === "top-bottom":
      d = e, h = s - e - n;
      break;
    default:
      d = n, h = s - e - n;
  }
  return [o, l, d, h];
}
function ch(r) {
  let e = 0;
  for (const t of r.Cards) {
    const n = parseInt(t.Id.replace("bc-card-", ""), 10);
    isNaN(n) || (e = Math.max(e, n));
  }
  return `bc-card-${e + 1}`;
}
function uh(r) {
  let e = 0;
  for (const t of r.Cards)
    for (const n of t.Widgets) {
      const a = parseInt(n.Id.replace("bc-widget-", ""), 10);
      isNaN(a) || (e = Math.max(e, a));
    }
  return `bc-widget-${e + 1}`;
}
function vi(r, e) {
  if (r === "deck")
    return "deck";
  const t = r.split("/"), n = e.Cards.find((i) => i.Id === t[0]) ?? null;
  if (n == null)
    return null;
  if (t.length === 1)
    return { Card: n };
  const a = n.Widgets.find((i) => i.Id === t[1]) ?? null;
  return a == null ? null : { Card: n, Widget: a };
}
const dh = {
  button: { Variant: "rounded-rect", showName: !0, autoHilite: !0, enabled: !0, sharedHilite: !1 },
  field: {
    Variant: "opaque",
    lockText: !1,
    scrolling: !1,
    showLines: !1,
    dontSearch: !1,
    sharedText: !1,
    Text: ""
  },
  shape: { Variant: "rectangle", FillColor: "#ffffff", BorderColor: "#000000", BorderWidth: 1 },
  picture: { Variant: "scale-aspect-fit", ImageData: "", actualWidth: 0, actualHeight: 0, autoHilite: !1 },
  generic: {}
};
var mn, f0, gn, ir, qn, Y0, L, Wi, Ui, Xe, Dc, Lc, Fc, Pc, Hc, qc, Vc, Wc, Uc, Gc, jc, Zc, Kc, Xc, Jc, Yc, Qc, eu, tu, ru, nu, Ma, Gi, au, iu, su, ou, lu, cu, uu, du, hu, D0;
class hh {
  constructor() {
    mt(this, L);
    mt(this, mn);
    mt(this, f0);
    mt(this, gn, null);
    mt(this, ir, null);
    mt(this, qn, null);
    mt(this, Y0, null);
    Me(this, mn, localStorage.getItem("bc-mcp-url") ?? ""), Me(this, f0, localStorage.getItem("bc-mcp-token") ?? "");
  }
  /**** setContext — called by DeckView after every render to keep state current ****/
  setContext(e) {
    var t, n;
    if (Me(this, gn, e), e != null && R(this, L, Wi)) {
      const a = ((t = e.getDeck().Cards[e.getCardIndex()]) == null ? void 0 : t.Name) ?? null;
      a !== R(this, Y0) && (Me(this, Y0, a), (n = R(this, ir)) == null || n.send(JSON.stringify({ type: "notify", event: "card_changed", cardName: a })));
    }
  }
  /**** configure — applies new settings and reconnects (persistence handled by caller) ****/
  configure(e, t) {
    Me(this, mn, e), Me(this, f0, t), this.disconnect(), e !== "" && this.connect();
  }
  /**** connect — opens the WebSocket connection if a URL is configured ****/
  connect() {
    R(this, mn) !== "" && re(this, L, Ui).call(this);
  }
  /**** disconnect — closes the connection and stops auto-reconnect ****/
  disconnect() {
    R(this, qn) != null && (clearTimeout(R(this, qn)), Me(this, qn, null)), R(this, ir) != null && (R(this, ir).onclose = null, R(this, ir).close(), Me(this, ir, null));
  }
  /**** connectionStatus — returns a snapshot suitable for the status tool ****/
  get connectionStatus() {
    return { connected: R(this, L, Wi), url: R(this, mn) };
  }
}
mn = new WeakMap(), f0 = new WeakMap(), gn = new WeakMap(), ir = new WeakMap(), qn = new WeakMap(), Y0 = new WeakMap(), L = new WeakSet(), Wi = function() {
  return R(this, ir) != null && R(this, ir).readyState === WebSocket.OPEN;
}, /**** #connect — internal: establishes the WebSocket and wires handlers ****/
Ui = function() {
  const e = new WebSocket(R(this, mn));
  e.onopen = () => {
    var a, i, s;
    const t = (a = R(this, gn)) == null ? void 0 : a.getDeck(), n = ((i = R(this, gn)) == null ? void 0 : i.getCardIndex()) ?? 0;
    e.send(JSON.stringify({
      type: "hello",
      accessToken: R(this, f0),
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
    let a = null, i = null;
    try {
      a = await re(this, L, Dc).call(this, n.method, n.params ?? {});
    } catch (s) {
      i = s.message;
    }
    e.send(JSON.stringify({ id: n.id, result: a, error: i }));
  }, e.onclose = () => {
    Me(this, ir, null), Me(this, qn, setTimeout(() => re(this, L, Ui).call(this), 3e3));
  }, e.onerror = () => {
    e.close();
  }, Me(this, ir, e);
}, Xe = function() {
  if (R(this, gn) == null)
    throw new Error("no deck loaded");
  return R(this, gn);
}, Dc = async function(e, t) {
  switch (!0) {
    case e === "deck_get":
      return re(this, L, Lc).call(this);
    case e === "deck_patch":
      return re(this, L, Fc).call(this, t);
    case e === "deck_save":
      return re(this, L, Pc).call(this);
    case e === "list_cards":
      return re(this, L, Hc).call(this);
    case e === "list_widgets":
      return re(this, L, qc).call(this, t);
    case e === "find":
      return re(this, L, Vc).call(this, t);
    case e === "card_get":
      return re(this, L, Wc).call(this, t);
    case e === "card_patch":
      return re(this, L, Uc).call(this, t);
    case e === "card_add":
      return re(this, L, Gc).call(this, t);
    case e === "card_delete":
      return re(this, L, jc).call(this, t);
    case e === "card_reorder":
      return re(this, L, Zc).call(this, t);
    case e === "widget_get":
      return re(this, L, Kc).call(this, t);
    case e === "widget_patch":
      return re(this, L, Xc).call(this, t);
    case e === "widget_add":
      return re(this, L, Jc).call(this, t);
    case e === "widget_delete":
      return re(this, L, Yc).call(this, t);
    case e === "widget_transfer":
      return re(this, L, Qc).call(this, t);
    case e === "widget_get_rect":
      return re(this, L, eu).call(this, t);
    case e === "widget_set_rect":
      return re(this, L, tu).call(this, t);
    case e === "script_get":
      return re(this, L, ru).call(this, t);
    case e === "script_set":
      return re(this, L, nu).call(this, t);
    case e === "extras_get":
      return re(this, L, au).call(this, t);
    case e === "extras_set":
      return re(this, L, iu).call(this, t);
    case e === "extras_delete":
      return re(this, L, su).call(this, t);
    case e === "live_eval":
      return re(this, L, ou).call(this, t);
    case e === "live_send":
      return re(this, L, lu).call(this, t);
    case e === "live_navigate":
      return re(this, L, cu).call(this, t);
    case e === "live_screenshot":
      return re(this, L, uu).call(this);
    default:
      throw new Error(`unknown method: ${e}`);
  }
}, //--------------------------------------------------------------------------//
//                              deck handlers                                 //
//--------------------------------------------------------------------------//
Lc = function() {
  const e = R(this, L, Xe).getDeck();
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
}, Fc = function(e) {
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
  return R(this, L, Xe).mutateDeck((a) => {
    for (const i of n)
      i in t && (a[i] = t[i]);
  }), null;
}, Pc = async function() {
  return await R(this, L, Xe).saveDeck(), null;
}, //--------------------------------------------------------------------------//
//                          navigation handlers                               //
//--------------------------------------------------------------------------//
Hc = function() {
  return R(this, L, Xe).getDeck().Cards.map((e, t) => ({
    id: e.Id,
    name: e.Name,
    index: t,
    widget_count: e.Widgets.length,
    has_script: e.Script.trim() !== ""
  }));
}, qc = function(e) {
  const t = R(this, L, Xe).getDeck(), n = e.card_id, a = t.Cards.find((o) => o.Id === n);
  if (a == null)
    throw new Error(`card not found: ${n}`);
  const i = t.CardWidth ?? 600, s = t.CardHeight ?? 450;
  return a.Widgets.map((o) => {
    const l = nl(
      o.Anchors,
      o.Offsets,
      i,
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
}, Vc = function(e) {
  const t = R(this, L, Xe).getDeck(), n = e.query ?? {}, a = n.scope ?? "all", i = [], s = n.namePattern ? new RegExp(n.namePattern, "i") : null, o = n.scriptContains ? new RegExp(n.scriptContains, "i") : null, l = n.textContains, d = n.widgetType, h = (m) => (!s || s.test(m.Name)) && (!o || o.test(m.Script)), f = (m) => {
    if (d && m.Type !== d)
      return !1;
    const v = m.Text ?? "";
    return (!s || s.test(m.Name)) && (!o || o.test(m.Script)) && (!l || v.includes(l));
  };
  if (a !== "widgets")
    for (const m of t.Cards)
      h(m) && i.push({
        target: m.Id,
        type: "card",
        name: m.Name,
        excerpt: m.Script.slice(0, 120)
      });
  if (a !== "cards") {
    for (const m of t.Cards)
      for (const v of m.Widgets)
        if (f(v)) {
          const y = v.Text ?? "";
          i.push({
            target: `${m.Id}/${v.Id}`,
            type: v.Type,
            name: v.Name,
            excerpt: y || v.Script.slice(0, 120)
          });
        }
  }
  return i;
}, //--------------------------------------------------------------------------//
//                              card handlers                                 //
//--------------------------------------------------------------------------//
Wc = function(e) {
  const t = re(this, L, du).call(this, e.card_id);
  return {
    Name: t.Name,
    Color: t.Color ?? null,
    Alpha: t.Alpha ?? 1,
    dontSearch: t.dontSearch,
    Script: t.Script
  };
}, Uc = function(e) {
  const t = e.card_id, n = e.props ?? {};
  return R(this, L, Xe).mutateDeck((a) => {
    const i = a.Cards.find((s) => s.Id === t);
    if (i == null)
      throw new Error(`card not found: ${t}`);
    for (const s of ["Name", "Color", "Alpha", "dontSearch", "Script"])
      s in n && (i[s] = n[s]);
  }), null;
}, Gc = function(e) {
  const t = e.props ?? {}, n = e.index;
  let a = "";
  return R(this, L, Xe).mutateDeck((i) => {
    a = ch(i);
    const s = {
      Id: a,
      Name: t.Name ?? "New Card",
      Color: t.Color ?? null,
      Alpha: t.Alpha ?? 1,
      dontSearch: t.dontSearch ?? !1,
      Script: t.Script ?? "",
      Widgets: []
    };
    n == null ? i.Cards.push(s) : i.Cards.splice(n, 0, s);
  }), a;
}, jc = function(e) {
  const t = e.card_id;
  return R(this, L, Xe).mutateDeck((n) => {
    const a = n.Cards.findIndex((i) => i.Id === t);
    if (a < 0)
      throw new Error(`card not found: ${t}`);
    n.Cards.splice(a, 1);
  }), null;
}, Zc = function(e) {
  const t = e.card_id, n = e.new_index;
  return R(this, L, Xe).mutateDeck((a) => {
    const i = a.Cards.findIndex((o) => o.Id === t);
    if (i < 0)
      throw new Error(`card not found: ${t}`);
    const [s] = a.Cards.splice(i, 1);
    a.Cards.splice(n, 0, s);
  }), null;
}, //--------------------------------------------------------------------------//
//                             widget handlers                                //
//--------------------------------------------------------------------------//
Kc = function(e) {
  const { Widget: t } = re(this, L, hu).call(this, e.card_id, e.widget_id);
  return { ...t };
}, Xc = function(e) {
  const t = e.props ?? {};
  return R(this, L, Xe).mutateDeck((n) => {
    const { Widget: a } = re(this, L, D0).call(this, n, e.card_id, e.widget_id);
    for (const [i, s] of Object.entries(t))
      i !== "Type" && (a[i] = s);
  }), null;
}, Jc = function(e) {
  const t = e.card_id, n = e.type, a = e.props ?? {}, i = e.rect;
  let s = "";
  return R(this, L, Xe).mutateDeck((o) => {
    const l = o.Cards.find((N) => N.Id === t);
    if (l == null)
      throw new Error(`card not found: ${t}`);
    s = uh(o);
    const d = o.CardWidth ?? 600, h = o.CardHeight ?? 450, f = ["left-width", "top-height"], m = i ?? { x: d / 4, y: h / 4, width: d / 2, height: h / 2 }, v = al(
      m.x,
      m.y,
      m.width,
      m.height,
      f,
      d,
      h
    ), y = l.Widgets.reduce((N, z) => Math.max(N, z.Number ?? 0), 0), I = {
      ...dh[n] ?? {},
      ...a,
      Id: s,
      Name: a.Name ?? `${n} ${y + 1}`,
      Number: y + 1,
      Type: n,
      zIndex: y + 1,
      Anchors: f,
      Offsets: v,
      visible: a.visible ?? !0,
      Script: a.Script ?? ""
    };
    l.Widgets.push(I);
  }), s;
}, Yc = function(e) {
  const t = e.card_id, n = e.widget_id;
  return R(this, L, Xe).mutateDeck((a) => {
    const i = a.Cards.find((o) => o.Id === t);
    if (i == null)
      throw new Error(`card not found: ${t}`);
    const s = i.Widgets.findIndex((o) => o.Id === n);
    if (s < 0)
      throw new Error(`widget not found: ${n}`);
    i.Widgets.splice(s, 1);
  }), null;
}, Qc = function(e) {
  return R(this, L, Xe).mutateDeck((t) => {
    const n = t.Cards.find((o) => o.Id === e.src_card_id), a = t.Cards.find((o) => o.Id === e.dst_card_id);
    if (n == null)
      throw new Error(`source card not found: ${e.src_card_id}`);
    if (a == null)
      throw new Error(`destination card not found: ${e.dst_card_id}`);
    const i = n.Widgets.findIndex((o) => o.Id === e.widget_id);
    if (i < 0)
      throw new Error(`widget not found: ${e.widget_id}`);
    const [s] = n.Widgets.splice(i, 1);
    a.Widgets.push(s);
  }), null;
}, //--------------------------------------------------------------------------//
//                            geometry handlers                               //
//--------------------------------------------------------------------------//
eu = function(e) {
  const t = R(this, L, Xe).getDeck(), { Widget: n } = re(this, L, D0).call(this, t, e.card_id, e.widget_id);
  return { ...nl(
    n.Anchors,
    n.Offsets,
    t.CardWidth ?? 600,
    t.CardHeight ?? 450
  ), anchors: n.Anchors };
}, tu = function(e) {
  const t = e.rect, n = e.anchors ?? ["left-width", "top-height"];
  return R(this, L, Xe).mutateDeck((a) => {
    const { Widget: i } = re(this, L, D0).call(this, a, e.card_id, e.widget_id), s = a.CardWidth ?? 600, o = a.CardHeight ?? 450;
    i.Anchors = n, i.Offsets = al(t.x, t.y, t.width, t.height, n, s, o);
  }), null;
}, //--------------------------------------------------------------------------//
//                            scripting handlers                              //
//--------------------------------------------------------------------------//
ru = function(e) {
  const t = vi(e.target, R(this, L, Xe).getDeck());
  if (t == null)
    throw new Error(`target not found: ${e.target}`);
  return t === "deck" ? R(this, L, Xe).getDeck().Script : "Widget" in t ? t.Widget.Script : t.Card.Script;
}, nu = function(e) {
  const t = e.target, n = e.script;
  return R(this, L, Xe).mutateDeck((a) => {
    const i = vi(t, a);
    if (i == null)
      throw new Error(`target not found: ${t}`);
    if (i === "deck") {
      a.Script = n;
      return;
    }
    if (!("Widget" in i)) {
      i.Card.Script = n;
      return;
    }
    i.Widget.Script = n;
  }), null;
}, //--------------------------------------------------------------------------//
//                              extras handlers                               //
//--------------------------------------------------------------------------//
Ma = function(e, t) {
  const n = vi(e, t);
  if (n == null)
    throw new Error(`target not found: ${e}`);
  return n === "deck" ? t : "Widget" in n ? n.Widget : n.Card;
}, Gi = function(e) {
  return e === "deck" ? sh : e.includes("/") ? lh : oh;
}, au = function(e) {
  const t = e.target, n = re(this, L, Ma).call(this, t, R(this, L, Xe).getDeck()), a = re(this, L, Gi).call(this, t), i = {};
  for (const [s, o] of Object.entries(n))
    a.has(s) || (i[s] = o);
  return i;
}, iu = function(e) {
  const t = e.target, n = e.key;
  if (re(this, L, Gi).call(this, t).has(n))
    throw new Error(`"${n}" is a reserved schema key`);
  return R(this, L, Xe).mutateDeck((a) => {
    re(this, L, Ma).call(this, t, a)[n] = e.value;
  }), null;
}, su = function(e) {
  const t = e.target, n = e.key;
  return R(this, L, Xe).mutateDeck((a) => {
    delete re(this, L, Ma).call(this, t, a)[n];
  }), null;
}, ou = async function(e) {
  return R(this, L, Xe).evalInContext(e.expression);
}, lu = async function(e) {
  const t = e.target, n = e.message, a = e.args ?? [], i = a.length > 0 ? ", " + a.map((s) => JSON.stringify(s)).join(", ") : "";
  return R(this, L, Xe).evalInContext(
    `send(${JSON.stringify(t)}, ${JSON.stringify(n)}${i})`
  );
}, cu = async function(e) {
  return R(this, L, Xe).navigate(e.card), null;
}, uu = async function() {
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
du = function(e) {
  const t = R(this, L, Xe).getDeck().Cards.find((n) => n.Id === e);
  if (t == null)
    throw new Error(`card not found: ${e}`);
  return t;
}, hu = function(e, t) {
  return re(this, L, D0).call(this, R(this, L, Xe).getDeck(), e, t);
}, D0 = function(e, t, n) {
  const a = e.Cards.find((s) => s.Id === t);
  if (a == null)
    throw new Error(`card not found: ${t}`);
  const i = a.Widgets.find((s) => s.Id === n);
  if (i == null)
    throw new Error(`widget not found: ${n}`);
  return { Card: a, Widget: i };
};
function As() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var Zn = As();
function fu(r) {
  Zn = r;
}
var Pn = { exec: () => null };
function l0(r) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), a = e[n];
    return a || (a = r(n), e[n] = a), a;
  };
}
function He(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (a, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(Et.caret, "$1"), t = t.replace(a, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var fh = ((r = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + r);
  } catch {
    return !1;
  }
})(), Et = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: l0((r) => new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: l0((r) => new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: l0((r) => new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)), headingBeginRegex: l0((r) => new RegExp(`^ {0,${r}}#`)), htmlBeginRegex: l0((r) => new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: l0((r) => new RegExp(`^ {0,${r}}>`)) }, ph = /^(?:[ \t]*(?:\n|$))+/, mh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, gh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, na = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, bh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ts = / {0,3}(?:[*+-]|\d{1,9}[.)])/, pu = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, mu = He(pu).replace(/bull/g, Ts).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), vh = He(pu).replace(/bull/g, Ts).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), $s = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, wh = /^[^\n]+/, Is = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, xh = He(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Is).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), yh = He(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ts).getRegex(), Ja = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ns = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, kh = He("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ns).replace("tag", Ja).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), gu = He($s).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ja).getRegex(), Sh = He(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", gu).getRegex(), Es = { blockquote: Sh, code: mh, def: xh, fences: gh, heading: bh, hr: na, html: kh, lheading: mu, list: yh, newline: ph, paragraph: gu, table: Pn, text: wh }, il = He("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ja).getRegex(), _h = { ...Es, lheading: vh, table: il, paragraph: He($s).replace("hr", na).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", il).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ja).getRegex() }, Ch = { ...Es, html: He(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ns).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Pn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: He($s).replace("hr", na).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", mu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Ah = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Th = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, bu = /^( {2,}|\\)\n(?!\s*$)/, $h = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, S0 = /[\p{P}\p{S}]/u, Ya = /[\s\p{P}\p{S}]/u, Ms = /[^\s\p{P}\p{S}]/u, Ih = He(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, Ya).getRegex(), vu = /(?!~)[\p{P}\p{S}]/u, Nh = /(?!~)[\s\p{P}\p{S}]/u, Eh = /(?:[^\s\p{P}\p{S}]|~)/u, Mh = He(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", fh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), wu = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, zh = He(wu, "u").replace(/punct/g, S0).getRegex(), Rh = He(wu, "u").replace(/punct/g, vu).getRegex(), xu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Oh = He(xu, "gu").replace(/notPunctSpace/g, Ms).replace(/punctSpace/g, Ya).replace(/punct/g, S0).getRegex(), Bh = He(xu, "gu").replace(/notPunctSpace/g, Eh).replace(/punctSpace/g, Nh).replace(/punct/g, vu).getRegex(), Dh = He("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ms).replace(/punctSpace/g, Ya).replace(/punct/g, S0).getRegex(), Lh = He(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, S0).getRegex(), Fh = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Ph = He(Fh, "gu").replace(/notPunctSpace/g, Ms).replace(/punctSpace/g, Ya).replace(/punct/g, S0).getRegex(), Hh = He(/\\(punct)/, "gu").replace(/punct/g, S0).getRegex(), qh = He(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Vh = He(Ns).replace("(?:-->|$)", "-->").getRegex(), Wh = He("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Vh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Fa = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Uh = He(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", Fa).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), yu = He(/^!?\[(label)\]\[(ref)\]/).replace("label", Fa).replace("ref", Is).getRegex(), ku = He(/^!?\[(ref)\](?:\[\])?/).replace("ref", Is).getRegex(), Gh = He("reflink|nolink(?!\\()", "g").replace("reflink", yu).replace("nolink", ku).getRegex(), sl = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, zs = { _backpedal: Pn, anyPunctuation: Hh, autolink: qh, blockSkip: Mh, br: bu, code: Th, del: Pn, delLDelim: Pn, delRDelim: Pn, emStrongLDelim: zh, emStrongRDelimAst: Oh, emStrongRDelimUnd: Dh, escape: Ah, link: Uh, nolink: ku, punctuation: Ih, reflink: yu, reflinkSearch: Gh, tag: Wh, text: $h, url: Pn }, jh = { ...zs, link: He(/^!?\[(label)\]\((.*?)\)/).replace("label", Fa).getRegex(), reflink: He(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Fa).getRegex() }, ji = { ...zs, emStrongRDelimAst: Bh, emStrongLDelim: Rh, delLDelim: Lh, delRDelim: Ph, url: He(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", sl).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: He(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", sl).getRegex() }, Zh = { ...ji, br: He(bu).replace("{2,}", "*").getRegex(), text: He(ji.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ma = { normal: Es, gfm: _h, pedantic: Ch }, z0 = { normal: zs, gfm: ji, breaks: Zh, pedantic: jh }, Kh = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, ol = (r) => Kh[r];
function Ar(r, e) {
  if (e) {
    if (Et.escapeTest.test(r)) return r.replace(Et.escapeReplace, ol);
  } else if (Et.escapeTestNoEncode.test(r)) return r.replace(Et.escapeReplaceNoEncode, ol);
  return r;
}
function ll(r) {
  try {
    r = encodeURI(r).replace(Et.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function cl(r, e) {
  var i;
  let t = r.replace(Et.findPipe, (s, o, l) => {
    let d = !1, h = o;
    for (; --h >= 0 && l[h] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = t.split(Et.splitPipe), a = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((i = n.at(-1)) != null && i.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; a < n.length; a++) n[a] = n[a].trim().replace(Et.slashPipe, "|");
  return n;
}
function un(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let a = 0;
  for (; a < n && r.charAt(n - a - 1) === e; )
    a++;
  return r.slice(0, n - a);
}
function ul(r) {
  let e = r.split(`
`), t = e.length - 1;
  for (; t >= 0 && Et.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? r : e.slice(0, t + 1).join(`
`);
}
function Xh(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function Jh(r, e = 0) {
  let t = e, n = "";
  for (let a of r) if (a === "	") {
    let i = 4 - t % 4;
    n += " ".repeat(i), t += i;
  } else n += a, t++;
  return n;
}
function dl(r, e, t, n, a) {
  let i = e.href, s = e.title || null, o = r[1].replace(a.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, l;
}
function Yh(r, e, t) {
  let n = r.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let a = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [o] = s;
    return o.length >= a.length ? i.slice(a.length) : i;
  }).join(`
`);
}
var Pa = class {
  constructor(r) {
    Ke(this, "options");
    Ke(this, "rules");
    Ke(this, "lexer");
    this.options = r || Zn;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = this.options.pedantic ? e[0] : ul(e[0]), n = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: n };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = Yh(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = un(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: un(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: un(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = un(e[0], `
`).split(`
`), n = "", a = "", i = [];
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
${d}` : d, a = a ? `${a}
${h}` : h;
        let f = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, i, !0), this.lexer.state.top = f, t.length === 0) break;
        let m = i.at(-1);
        if ((m == null ? void 0 : m.type) === "code") break;
        if ((m == null ? void 0 : m.type) === "blockquote") {
          let v = m, y = v.raw + `
` + t.join(`
`), I = this.blockquote(y);
          i[i.length - 1] = I, n = n.substring(0, n.length - v.raw.length) + I.raw, a = a.substring(0, a.length - v.text.length) + I.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          let v = m, y = v.raw + `
` + t.join(`
`), I = this.list(y);
          i[i.length - 1] = I, n = n.substring(0, n.length - m.raw.length) + I.raw, a = a.substring(0, a.length - v.raw.length) + I.raw, t = y.substring(i.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: n, tokens: i, text: a };
    }
  }
  list(r) {
    let e = this.rules.block.list.exec(r);
    if (e) {
      let t = e[1].trim(), n = t.length > 1, a = { type: "list", raw: "", ordered: n, start: n ? +t.slice(0, -1) : "", loose: !1, items: [] };
      t = n ? `\\d{1,9}\\${t.slice(-1)}` : `\\${t}`, this.options.pedantic && (t = n ? t : "[*+-]");
      let i = this.rules.other.listItemRegex(t), s = !1;
      for (; r; ) {
        let l = !1, d = "", h = "";
        if (!(e = i.exec(r)) || this.rules.block.hr.test(r)) break;
        d = e[0], r = r.substring(d.length);
        let f = Jh(e[2].split(`
`, 1)[0], e[1].length), m = r.split(`
`, 1)[0], v = !f.trim(), y = 0;
        if (this.options.pedantic ? (y = 2, h = f.trimStart()) : v ? y = e[1].length + 1 : (y = f.search(this.rules.other.nonSpaceChar), y = y > 4 ? 1 : y, h = f.slice(y), y += e[1].length), v && this.rules.other.blankLine.test(m) && (d += m + `
`, r = r.substring(m.length + 1), l = !0), !l) {
          let I = this.rules.other.nextBulletRegex(y), N = this.rules.other.hrRegex(y), z = this.rules.other.fencesBeginRegex(y), $ = this.rules.other.headingBeginRegex(y), M = this.rules.other.htmlBeginRegex(y), H = this.rules.other.blockquoteBeginRegex(y);
          for (; r; ) {
            let q = r.split(`
`, 1)[0], E;
            if (m = q, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), E = m) : E = m.replace(this.rules.other.tabCharGlobal, "    "), z.test(m) || $.test(m) || M.test(m) || H.test(m) || I.test(m) || N.test(m)) break;
            if (E.search(this.rules.other.nonSpaceChar) >= y || !m.trim()) h += `
` + E.slice(y);
            else {
              if (v || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || z.test(f) || $.test(f) || N.test(f)) break;
              h += `
` + m;
            }
            v = !m.trim(), d += q + `
`, r = r.substring(q.length + 1), f = E.slice(y);
          }
        }
        a.loose || (s ? a.loose = !0 : this.rules.other.doubleBlankLine.test(d) && (s = !0)), a.items.push({ type: "list_item", raw: d, task: !!this.options.gfm && this.rules.other.listIsTask.test(h), loose: !1, text: h, tokens: [] }), a.raw += d;
      }
      let o = a.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      a.raw = a.raw.trimEnd();
      for (let l of a.items) {
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
            l.checked = f.checked, a.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = f.raw + l.tokens[0].raw, l.tokens[0].text = f.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(f)) : l.tokens.unshift({ type: "paragraph", raw: f.raw, text: f.raw, tokens: [f] }) : l.tokens.unshift(f);
          }
        } else l.task && (l.task = !1);
        if (!a.loose) {
          let h = l.tokens.filter((m) => m.type === "space"), f = h.length > 0 && h.some((m) => this.rules.other.anyLine.test(m.raw));
          a.loose = f;
        }
      }
      if (a.loose) for (let l of a.items) {
        l.loose = !0;
        for (let d of l.tokens) d.type === "text" && (d.type = "paragraph");
      }
      return a;
    }
  }
  html(r) {
    let e = this.rules.block.html.exec(r);
    if (e) {
      let t = ul(e[0]);
      return { type: "html", block: !0, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: un(e[0], `
`), href: n, title: a };
    }
  }
  table(r) {
    var s;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = cl(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (s = e[3]) != null && s.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: un(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0; o < t.length; o++) i.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: i.align[o] });
      for (let o of a) i.rows.push(cl(o, i.header.length).map((l, d) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: i.align[d] })));
      return i;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: un(e[0], `
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
        let i = un(t.slice(0, -1), "\\");
        if ((t.length - i.length) % 2 === 0) return;
      } else {
        let i = Xh(e[2], "()");
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
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), dl(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
    }
  }
  reflink(r, e) {
    let t;
    if ((t = this.rules.inline.reflink.exec(r)) || (t = this.rules.inline.nolink.exec(r))) {
      let n = (t[2] || t[1]).replace(this.rules.other.multipleSpaceGlobal, " "), a = e[n.toLowerCase()];
      if (!a) {
        let i = t[0].charAt(0);
        return { type: "text", raw: i, text: i };
      }
      return dl(t, a, t[0], this.lexer, this.rules);
    }
  }
  emStrong(r, e, t = "") {
    let n = this.rules.inline.emStrongLDelim.exec(r);
    if (!(!n || !n[1] && !n[2] && !n[3] && !n[4] || n[4] && t.match(this.rules.other.unicodeAlphaNumeric)) && (!(n[1] || n[3]) || !t || this.rules.inline.punctuation.exec(t))) {
      let a = [...n[0]].length - 1, i, s, o = a, l = 0, d = n[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (d.lastIndex = 0, e = e.slice(-1 * r.length + a); (n = d.exec(e)) !== null; ) {
        if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i) continue;
        if (s = [...i].length, n[3] || n[4]) {
          o += s;
          continue;
        } else if ((n[5] || n[6]) && a % 3 && !((a + s) % 3)) {
          l += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o + l);
        let h = [...n[0]][0].length, f = r.slice(0, a + n.index + h + s);
        if (Math.min(a, s) % 2) {
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
      let t = e[2].replace(this.rules.other.newLineCharGlobal, " "), n = this.rules.other.nonSpaceChar.test(t), a = this.rules.other.startingSpaceChar.test(t) && this.rules.other.endingSpaceChar.test(t);
      return n && a && (t = t.substring(1, t.length - 1)), { type: "codespan", raw: e[0], text: t };
    }
  }
  br(r) {
    let e = this.rules.inline.br.exec(r);
    if (e) return { type: "br", raw: e[0] };
  }
  del(r, e, t = "") {
    let n = this.rules.inline.delLDelim.exec(r);
    if (n && (!n[1] || !t || this.rules.inline.punctuation.exec(t))) {
      let a = [...n[0]].length - 1, i, s, o = a, l = this.rules.inline.delRDelim;
      for (l.lastIndex = 0, e = e.slice(-1 * r.length + a); (n = l.exec(e)) !== null; ) {
        if (i = n[1] || n[2] || n[3] || n[4] || n[5] || n[6], !i || (s = [...i].length, s !== a)) continue;
        if (n[3] || n[4]) {
          o += s;
          continue;
        }
        if (o -= s, o > 0) continue;
        s = Math.min(s, s + o);
        let d = [...n[0]][0].length, h = r.slice(0, a + n.index + d + s), f = h.slice(a, -a);
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
      let n, a;
      if (e[2] === "@") n = e[0], a = "mailto:" + n;
      else {
        let i;
        do
          i = e[0], e[0] = ((t = this.rules.inline._backpedal.exec(e[0])) == null ? void 0 : t[0]) ?? "";
        while (i !== e[0]);
        n = e[0], e[1] === "www." ? a = "http://" + e[0] : a = e[0];
      }
      return { type: "link", raw: e[0], text: n, href: a, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(r) {
    let e = this.rules.inline.text.exec(r);
    if (e) {
      let t = this.lexer.state.inRawBlock;
      return { type: "text", raw: e[0], text: e[0], escaped: t };
    }
  }
}, gr = class Zi {
  constructor(e) {
    Ke(this, "tokens");
    Ke(this, "options");
    Ke(this, "state");
    Ke(this, "inlineQueue");
    Ke(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || Zn, this.options.tokenizer = this.options.tokenizer || new Pa(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: Et, block: ma.normal, inline: z0.normal };
    this.options.pedantic ? (t.block = ma.pedantic, t.inline = z0.pedantic) : this.options.gfm && (t.block = ma.gfm, this.options.breaks ? t.inline = z0.breaks : t.inline = z0.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: ma, inline: z0 };
  }
  static lex(e, t) {
    return new Zi(t).lex(e);
  }
  static lexInline(e, t) {
    return new Zi(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(Et.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var i, s, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Et.tabCharGlobal, "    ").replace(Et.spaceLine, ""));
    let a = 1 / 0;
    for (; e; ) {
      if (e.length < a) a = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      let l;
      if ((s = (i = this.options.extensions) == null ? void 0 : i.block) != null && s.some((h) => (l = h.call({ lexer: this }, e, t)) ? (e = e.substring(l.raw.length), t.push(l), !0) : !1)) continue;
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
    let n = e, a = null;
    if (this.tokens.links) {
      let y = Object.keys(this.tokens.links);
      if (y.length > 0) for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null; ) y.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(n)) !== null; ) n = n.slice(0, a.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(n)) !== null; ) i = a[2] ? a[2].length : 0, n = n.slice(0, a.index + i) + "[" + "a".repeat(a[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = ((h = (d = this.options.hooks) == null ? void 0 : d.emStrongMask) == null ? void 0 : h.call({ lexer: this }, n)) ?? n;
    let s = !1, o = "", l = 1 / 0;
    for (; e; ) {
      if (e.length < l) l = e.length;
      else {
        this.infiniteLoopError(e.charCodeAt(0));
        break;
      }
      s || (o = ""), s = !1;
      let y;
      if ((m = (f = this.options.extensions) == null ? void 0 : f.inline) != null && m.some((N) => (y = N.call({ lexer: this }, e, t)) ? (e = e.substring(y.raw.length), t.push(y), !0) : !1)) continue;
      if (y = this.tokenizer.escape(e)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.tag(e)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.link(e)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(y.raw.length);
        let N = t.at(-1);
        y.type === "text" && (N == null ? void 0 : N.type) === "text" ? (N.raw += y.raw, N.text += y.text) : t.push(y);
        continue;
      }
      if (y = this.tokenizer.emStrong(e, n, o)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.codespan(e)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.br(e)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.del(e, n, o)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (y = this.tokenizer.autolink(e)) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      if (!this.state.inLink && (y = this.tokenizer.url(e))) {
        e = e.substring(y.raw.length), t.push(y);
        continue;
      }
      let I = e;
      if ((v = this.options.extensions) != null && v.startInline) {
        let N = 1 / 0, z = e.slice(1), $;
        this.options.extensions.startInline.forEach((M) => {
          $ = M.call({ lexer: this }, z), typeof $ == "number" && $ >= 0 && (N = Math.min(N, $));
        }), N < 1 / 0 && N >= 0 && (I = e.substring(0, N + 1));
      }
      if (y = this.tokenizer.inlineText(I)) {
        e = e.substring(y.raw.length), y.raw.slice(-1) !== "_" && (o = y.raw.slice(-1)), s = !0;
        let N = t.at(-1);
        (N == null ? void 0 : N.type) === "text" ? (N.raw += y.raw, N.text += y.text) : t.push(y);
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
}, Ha = class {
  constructor(r) {
    Ke(this, "options");
    Ke(this, "parser");
    this.options = r || Zn;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var i;
    let n = (i = (e || "").match(Et.notSpaceStart)) == null ? void 0 : i[0], a = r.replace(Et.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Ar(n) + '">' + (t ? a : Ar(a, !0)) + `</code></pre>
` : "<pre><code>" + (t ? a : Ar(a, !0)) + `</code></pre>
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
    let a = e ? "ol" : "ul", i = e && t !== 1 ? ' start="' + t + '"' : "";
    return "<" + a + i + `>
` + n + "</" + a + `>
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
    for (let a = 0; a < r.header.length; a++) t += this.tablecell(r.header[a]);
    e += this.tablerow({ text: t });
    let n = "";
    for (let a = 0; a < r.rows.length; a++) {
      let i = r.rows[a];
      t = "";
      for (let s = 0; s < i.length; s++) t += this.tablecell(i[s]);
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
    return `<code>${Ar(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), a = ll(r);
    if (a === null) return n;
    r = a;
    let i = '<a href="' + r + '"';
    return e && (i += ' title="' + Ar(e) + '"'), i += ">" + n + "</a>", i;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let a = ll(r);
    if (a === null) return Ar(t);
    r = a;
    let i = `<img src="${r}" alt="${Ar(t)}"`;
    return e && (i += ` title="${Ar(e)}"`), i += ">", i;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Ar(r.text);
  }
}, Rs = class {
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
}, br = class Ki {
  constructor(e) {
    Ke(this, "options");
    Ke(this, "renderer");
    Ke(this, "textRenderer");
    this.options = e || Zn, this.options.renderer = this.options.renderer || new Ha(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Rs();
  }
  static parse(e, t) {
    return new Ki(t).parse(e);
  }
  static parseInline(e, t) {
    return new Ki(t).parseInline(e);
  }
  parse(e) {
    var n, a;
    this.renderer.parser = this;
    let t = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if ((a = (n = this.options.extensions) == null ? void 0 : n.renderers) != null && a[s.type]) {
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
}, $a, L0 = ($a = class {
  constructor(r) {
    Ke(this, "options");
    Ke(this, "block");
    this.options = r || Zn;
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
    return r ? gr.lex : gr.lexInline;
  }
  provideParser(r = this.block) {
    return r ? br.parse : br.parseInline;
  }
}, Ke($a, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), Ke($a, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), $a), Su = class {
  constructor(...r) {
    Ke(this, "defaults", As());
    Ke(this, "options", this.setOptions);
    Ke(this, "parse", this.parseMarkdown(!0));
    Ke(this, "parseInline", this.parseMarkdown(!1));
    Ke(this, "Parser", br);
    Ke(this, "Renderer", Ha);
    Ke(this, "TextRenderer", Rs);
    Ke(this, "Lexer", gr);
    Ke(this, "Tokenizer", Pa);
    Ke(this, "Hooks", L0);
    this.use(...r);
  }
  walkTokens(r, e) {
    var n, a;
    let t = [];
    for (let i of r) switch (t = t.concat(e.call(this, i)), i.type) {
      case "table": {
        let s = i;
        for (let o of s.header) t = t.concat(this.walkTokens(o.tokens, e));
        for (let o of s.rows) for (let l of o) t = t.concat(this.walkTokens(l.tokens, e));
        break;
      }
      case "list": {
        let s = i;
        t = t.concat(this.walkTokens(s.items, e));
        break;
      }
      default: {
        let s = i;
        (a = (n = this.defaults.extensions) == null ? void 0 : n.childTokens) != null && a[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
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
      if (n.async = this.defaults.async || n.async || !1, t.extensions && (t.extensions.forEach((a) => {
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
      }), n.extensions = e), t.renderer) {
        let a = this.defaults.renderer || new Ha(this.defaults);
        for (let i in t.renderer) {
          if (!(i in a)) throw new Error(`renderer '${i}' does not exist`);
          if (["options", "parser"].includes(i)) continue;
          let s = i, o = t.renderer[s], l = a[s];
          a[s] = (...d) => {
            let h = o.apply(a, d);
            return h === !1 && (h = l.apply(a, d)), h || "";
          };
        }
        n.renderer = a;
      }
      if (t.tokenizer) {
        let a = this.defaults.tokenizer || new Pa(this.defaults);
        for (let i in t.tokenizer) {
          if (!(i in a)) throw new Error(`tokenizer '${i}' does not exist`);
          if (["options", "rules", "lexer"].includes(i)) continue;
          let s = i, o = t.tokenizer[s], l = a[s];
          a[s] = (...d) => {
            let h = o.apply(a, d);
            return h === !1 && (h = l.apply(a, d)), h;
          };
        }
        n.tokenizer = a;
      }
      if (t.hooks) {
        let a = this.defaults.hooks || new L0();
        for (let i in t.hooks) {
          if (!(i in a)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let s = i, o = t.hooks[s], l = a[s];
          L0.passThroughHooks.has(i) ? a[s] = (d) => {
            if (this.defaults.async && L0.passThroughHooksRespectAsync.has(i)) return (async () => {
              let f = await o.call(a, d);
              return l.call(a, f);
            })();
            let h = o.call(a, d);
            return l.call(a, h);
          } : a[s] = (...d) => {
            if (this.defaults.async) return (async () => {
              let f = await o.apply(a, d);
              return f === !1 && (f = await l.apply(a, d)), f;
            })();
            let h = o.apply(a, d);
            return h === !1 && (h = l.apply(a, d)), h;
          };
        }
        n.hooks = a;
      }
      if (t.walkTokens) {
        let a = this.defaults.walkTokens, i = t.walkTokens;
        n.walkTokens = function(s) {
          let o = [];
          return o.push(i.call(this, s)), a && (o = o.concat(a.call(this, s))), o;
        };
      }
      this.defaults = { ...this.defaults, ...n };
    }), this;
  }
  setOptions(r) {
    return this.defaults = { ...this.defaults, ...r }, this;
  }
  lexer(r, e) {
    return gr.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return br.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, a = { ...this.defaults, ...n }, i = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && n.async === !1) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = r), a.async) return (async () => {
        let s = a.hooks ? await a.hooks.preprocess(e) : e, o = await (a.hooks ? await a.hooks.provideLexer(r) : r ? gr.lex : gr.lexInline)(s, a), l = a.hooks ? await a.hooks.processAllTokens(o) : o;
        a.walkTokens && await Promise.all(this.walkTokens(l, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser(r) : r ? br.parse : br.parseInline)(l, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(i);
      try {
        a.hooks && (e = a.hooks.preprocess(e));
        let s = (a.hooks ? a.hooks.provideLexer(r) : r ? gr.lex : gr.lexInline)(e, a);
        a.hooks && (s = a.hooks.processAllTokens(s)), a.walkTokens && this.walkTokens(s, a.walkTokens);
        let o = (a.hooks ? a.hooks.provideParser(r) : r ? br.parse : br.parseInline)(s, a);
        return a.hooks && (o = a.hooks.postprocess(o)), o;
      } catch (s) {
        return i(s);
      }
    };
  }
  onError(r, e) {
    return (t) => {
      if (t.message += `
Please report this to https://github.com/markedjs/marked.`, r) {
        let n = "<p>An error occurred:</p><pre>" + Ar(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, Wn = new Su();
function Ye(r, e) {
  return Wn.parse(r, e);
}
Ye.options = Ye.setOptions = function(r) {
  return Wn.setOptions(r), Ye.defaults = Wn.defaults, fu(Ye.defaults), Ye;
};
Ye.getDefaults = As;
Ye.defaults = Zn;
Ye.use = function(...r) {
  return Wn.use(...r), Ye.defaults = Wn.defaults, fu(Ye.defaults), Ye;
};
Ye.walkTokens = function(r, e) {
  return Wn.walkTokens(r, e);
};
Ye.parseInline = Wn.parseInline;
Ye.Parser = br;
Ye.parser = br.parse;
Ye.Renderer = Ha;
Ye.TextRenderer = Rs;
Ye.Lexer = gr;
Ye.lexer = gr.lex;
Ye.Tokenizer = Pa;
Ye.Hooks = L0;
Ye.parse = Ye;
Ye.options;
Ye.setOptions;
Ye.use;
Ye.walkTokens;
Ye.parseInline;
br.parse;
gr.lex;
class G extends Error {
  // The underlying error message without any context added.
  constructor(e, t) {
    var n = "KaTeX parse error: " + e, a, i, s = t && t.loc;
    if (s && s.start <= s.end) {
      var o = s.lexer.input;
      a = s.start, i = s.end, a === o.length ? n += " at end of input: " : n += " at position " + (a + 1) + ": ";
      var l = o.slice(a, i).replace(/[^]/g, "$&̲"), d;
      a > 15 ? d = "…" + o.slice(a - 15, a) : d = o.slice(0, a);
      var h;
      i + 15 < o.length ? h = o.slice(i, i + 15) + "…" : h = o.slice(i), n += d + l + h;
    }
    super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, G.prototype), this.position = a, a != null && i != null && (this.length = i - a), this.rawMessage = e;
  }
}
var Qh = /([A-Z])/g, ef = (r) => r.replace(Qh, "-$1").toLowerCase(), tf = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, rf = /[&><"']/g, Mt = (r) => String(r).replace(rf, (e) => tf[e]), za = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? za(r.body[0]) : r : r.type === "font" ? za(r.body) : r, nf = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), en = (r) => nf.has(za(r).type), af = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, Xi = {
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
function sf(r) {
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
function of(r) {
  if (r.default !== void 0)
    return r.default;
  var e = Array.isArray(r.type) ? r.type[0] : r.type;
  return sf(e);
}
function lf(r, e, t, n) {
  var a = t[e];
  r[e] = a !== void 0 ? n.processor ? n.processor(a) : a : of(n);
}
class Os {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t of Object.keys(Xi)) {
      var n = Xi[t];
      n && lf(this, t, e, n);
    }
  }
  /**
   * Report nonstrict (non-LaTeX-compatible) input.
   * Can safely not be called if `this.strict` is false in JavaScript.
   */
  reportNonstrict(e, t, n) {
    var a = this.strict;
    if (typeof a == "function" && (a = a(e, t, n)), !(!a || a === "ignore")) {
      if (a === !0 || a === "error")
        throw new G("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
      a === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]"));
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
    var a = this.strict;
    if (typeof a == "function")
      try {
        a = a(e, t, n);
      } catch {
        a = "error";
      }
    return !a || a === "ignore" ? !1 : a === !0 || a === "error" ? !0 : a === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (t + " [" + e + "]")), !1) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + a + "': " + t + " [" + e + "]")), !1);
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
      var t = af(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class dn {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Nr[cf[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Nr[uf[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Nr[df[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Nr[hf[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Nr[ff[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Nr[pf[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Bs = 0, qa = 1, h0 = 2, Xr = 3, W0 = 4, or = 5, w0 = 6, Ht = 7, Nr = [new dn(Bs, 0, !1), new dn(qa, 0, !0), new dn(h0, 1, !1), new dn(Xr, 1, !0), new dn(W0, 2, !1), new dn(or, 2, !0), new dn(w0, 3, !1), new dn(Ht, 3, !0)], cf = [W0, or, W0, or, w0, Ht, w0, Ht], uf = [or, or, or, or, Ht, Ht, Ht, Ht], df = [h0, Xr, W0, or, w0, Ht, w0, Ht], hf = [Xr, Xr, or, or, Ht, Ht, Ht, Ht], ff = [qa, qa, Xr, Xr, or, or, Ht, Ht], pf = [Bs, qa, h0, Xr, h0, Xr, h0, Xr], $e = {
  DISPLAY: Nr[Bs],
  TEXT: Nr[h0],
  SCRIPT: Nr[W0],
  SCRIPTSCRIPT: Nr[w0]
}, Ji = [{
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
function mf(r) {
  for (var e = 0; e < Ji.length; e++)
    for (var t = Ji[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var Ra = [];
Ji.forEach((r) => r.blocks.forEach((e) => Ra.push(...e)));
function _u(r) {
  for (var e = 0; e < Ra.length; e += 2)
    if (r >= Ra[e] && r <= Ra[e + 1])
      return !0;
  return !1;
}
var At = (r) => r + " " + r, c0 = 80, gf = function(e, t) {
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
}, bf = function(e, t) {
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
}, vf = function(e, t) {
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
}, wf = function(e, t) {
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
}, xf = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, yf = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, kf = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Sf = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = gf(t, c0);
      break;
    case "sqrtSize1":
      a = bf(t, c0);
      break;
    case "sqrtSize2":
      a = vf(t, c0);
      break;
    case "sqrtSize3":
      a = wf(t, c0);
      break;
    case "sqrtSize4":
      a = xf(t, c0);
      break;
    case "sqrtTall":
      a = kf(t, c0, n);
  }
  return a;
}, _f = function(e, t) {
  switch (e) {
    case "⎜":
      return At("M291 0 H417 V" + t + " H291z");
    case "∣":
      return At("M145 0 H188 V" + t + " H145z");
    case "∥":
      return At("M145 0 H188 V" + t + " H145z") + At("M367 0 H410 V" + t + " H367z");
    case "⎟":
      return At("M457 0 H583 V" + t + " H457z");
    case "⎢":
      return At("M319 0 H403 V" + t + " H319z");
    case "⎥":
      return At("M263 0 H347 V" + t + " H263z");
    case "⎪":
      return At("M384 0 H504 V" + t + " H384z");
    case "⏐":
      return At("M312 0 H355 V" + t + " H312z");
    case "‖":
      return At("M257 0 H300 V" + t + " H257z") + At("M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, hl = {
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
  leftlinesegment: At("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
  leftbracketunder: At("M0 0 h120 V290 H399995 v120 H0z"),
  leftbracketover: At("M0 440 h120 V150 H399995 v-120 H0z"),
  leftmapsto: At("M40 281 V448H0V74H40V241H400000v40z"),
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: At("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
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
  rightlinesegment: At("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
  rightbracketunder: At("M399995 0 h-120 V290 H0 v120 H400000z"),
  rightbracketover: At("M399995 440 h-120 V150 H0 v-120 H399995z"),
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
}, Cf = function(e, t) {
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
function Af(r) {
  return "toText" in r;
}
class _0 {
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
      if (Af(e))
        return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var Yi = {
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
}, Tf = {
  ex: !0,
  em: !0,
  mu: !0
}, Cu = function(e) {
  return typeof e != "string" && (e = e.unit), e in Yi || e in Tf || e === "ex";
}, pt = function(e, t) {
  var n;
  if (e.unit in Yi)
    n = Yi[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new G("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, Z = function(e) {
  return +e.toFixed(4) + "em";
}, wn = function(e) {
  return e.filter((t) => t).join(" ");
}, Ds = function(e) {
  var t = "";
  for (var n of Object.keys(e)) {
    var a = e[n];
    a !== void 0 && (t += ef(n) + ":" + a + ";");
  }
  return t;
}, Au = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Tu = function(e) {
  var t = document.createElement(e);
  t.className = wn(this.classes), Object.assign(t.style, this.style);
  for (var n of Object.keys(this.attributes))
    t.setAttribute(n, this.attributes[n]);
  for (var a = 0; a < this.children.length; a++)
    t.appendChild(this.children[a].toNode());
  return t;
}, $f = /[\s"'>/=\x00-\x1f]/, $u = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Mt(wn(this.classes)) + '"');
  var n = Ds(this.style);
  n && (t += ' style="' + Mt(n) + '"');
  for (var a of Object.keys(this.attributes)) {
    if ($f.test(a))
      throw new G("Invalid attribute name '" + a + "'");
    t += " " + a + '="' + Mt(this.attributes[a]) + '"';
  }
  t += ">";
  for (var i = 0; i < this.children.length; i++)
    t += this.children[i].toMarkup();
  return t += "</" + e + ">", t;
};
class C0 {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, Au.call(this, e, n, a), this.children = t || [];
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
    return Tu.call(this, "span");
  }
  toMarkup() {
    return $u.call(this, "span");
  }
}
class Qa {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Au.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Tu.call(this, "a");
  }
  toMarkup() {
    return $u.call(this, "a");
  }
}
class If {
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
    var e = '<img src="' + Mt(this.src) + '"' + (' alt="' + Mt(this.alt) + '"'), t = Ds(this.style);
    return t && (e += ' style="' + Mt(t) + '"'), e += "'/>", e;
  }
}
var Nf = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class Qt {
  constructor(e, t, n, a, i, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var d = mf(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Nf[this.text]);
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
    return this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = Z(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = wn(this.classes)), Object.keys(this.style).length > 0 && (t = t || document.createElement("span"), Object.assign(t.style, this.style)), t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Mt(wn(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + Z(this.italic) + ";"), n += Ds(this.style), n && (e = !0, t += ' style="' + Mt(n) + '"');
    var a = Mt(this.text);
    return e ? (t += ">", t += a, t += "</span>", t) : a;
  }
}
class Qr {
  constructor(e, t) {
    this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {};
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "svg");
    for (var n of Object.keys(this.attributes))
      t.setAttribute(n, this.attributes[n]);
    for (var a = 0; a < this.children.length; a++)
      t.appendChild(this.children[a].toNode());
    return t;
  }
  toMarkup() {
    var e = '<svg xmlns="http://www.w3.org/2000/svg"';
    for (var t of Object.keys(this.attributes))
      e += " " + t + '="' + Mt(this.attributes[t]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class xn {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", hl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + Mt(this.alternate) + '"/>' : '<path d="' + Mt(hl[this.pathName]) + '"/>';
  }
}
class Qi {
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
      e += " " + t + '="' + Mt(this.attributes[t]) + '"';
    return e += "/>", e;
  }
}
function Ef(r) {
  if (r instanceof Qt)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Mf(r) {
  if (r instanceof C0)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var zf = (r) => r instanceof C0 || r instanceof Qa || r instanceof _0, Mr = {
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
}, ga = {
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
}, fl = {
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
function Rf(r, e) {
  Mr[r] = e;
}
function Ls(r, e, t) {
  if (!Mr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = Mr[e][n];
  if (!a && r[0] in fl && (n = fl[r[0]].charCodeAt(0), a = Mr[e][n]), !a && t === "text" && _u(n) && (a = Mr[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var wi = {};
function Of(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !wi[e]) {
    var t = wi[e] = {
      cssEmPerMu: ga.quad[e] / 18
    };
    for (var n in ga)
      ga.hasOwnProperty(n) && (t[n] = ga[n][e]);
  }
  return wi[e];
}
var ut = {
  math: {},
  text: {}
};
function c(r, e, t, n, a, i) {
  ut[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (ut[r][n] = ut[r][a]);
}
var u = "math", P = "text", p = "main", w = "ams", dt = "accent-token", ce = "bin", qt = "close", A0 = "inner", xe = "mathord", St = "op-token", tr = "open", aa = "punct", x = "rel", tn = "spacing", C = "textord";
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
c(u, p, aa, ".", "\\ldotp");
c(u, p, aa, "⋅", "\\cdotp");
c(u, p, aa, "⋅", "·");
c(P, p, C, "⋅", "·");
c(u, p, C, "#", "\\#");
c(P, p, C, "#", "\\#");
c(u, p, C, "&", "\\&");
c(P, p, C, "&", "\\&");
c(u, p, C, "ℵ", "\\aleph", !0);
c(u, p, C, "∀", "\\forall", !0);
c(u, p, C, "ℏ", "\\hbar", !0);
c(u, p, C, "∃", "\\exists", !0);
c(u, p, C, "∇", "\\nabla", !0);
c(u, p, C, "♭", "\\flat", !0);
c(u, p, C, "ℓ", "\\ell", !0);
c(u, p, C, "♮", "\\natural", !0);
c(u, p, C, "♣", "\\clubsuit", !0);
c(u, p, C, "℘", "\\wp", !0);
c(u, p, C, "♯", "\\sharp", !0);
c(u, p, C, "♢", "\\diamondsuit", !0);
c(u, p, C, "ℜ", "\\Re", !0);
c(u, p, C, "♡", "\\heartsuit", !0);
c(u, p, C, "ℑ", "\\Im", !0);
c(u, p, C, "♠", "\\spadesuit", !0);
c(u, p, C, "§", "\\S", !0);
c(P, p, C, "§", "\\S");
c(u, p, C, "¶", "\\P", !0);
c(P, p, C, "¶", "\\P");
c(u, p, C, "†", "\\dag");
c(P, p, C, "†", "\\dag");
c(P, p, C, "†", "\\textdagger");
c(u, p, C, "‡", "\\ddag");
c(P, p, C, "‡", "\\ddag");
c(P, p, C, "‡", "\\textdaggerdbl");
c(u, p, qt, "⎱", "\\rmoustache", !0);
c(u, p, tr, "⎰", "\\lmoustache", !0);
c(u, p, qt, "⟯", "\\rgroup", !0);
c(u, p, tr, "⟮", "\\lgroup", !0);
c(u, p, ce, "∓", "\\mp", !0);
c(u, p, ce, "⊖", "\\ominus", !0);
c(u, p, ce, "⊎", "\\uplus", !0);
c(u, p, ce, "⊓", "\\sqcap", !0);
c(u, p, ce, "∗", "\\ast");
c(u, p, ce, "⊔", "\\sqcup", !0);
c(u, p, ce, "◯", "\\bigcirc", !0);
c(u, p, ce, "∙", "\\bullet", !0);
c(u, p, ce, "‡", "\\ddagger");
c(u, p, ce, "≀", "\\wr", !0);
c(u, p, ce, "⨿", "\\amalg");
c(u, p, ce, "&", "\\And");
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
c(u, w, ce, "⊴", "\\unlhd");
c(u, w, ce, "⊵", "\\unrhd");
c(u, w, x, "↚", "\\nleftarrow", !0);
c(u, w, x, "↛", "\\nrightarrow", !0);
c(u, w, x, "⇍", "\\nLeftarrow", !0);
c(u, w, x, "⇏", "\\nRightarrow", !0);
c(u, w, x, "↮", "\\nleftrightarrow", !0);
c(u, w, x, "⇎", "\\nLeftrightarrow", !0);
c(u, w, x, "△", "\\vartriangle");
c(u, w, C, "ℏ", "\\hslash");
c(u, w, C, "▽", "\\triangledown");
c(u, w, C, "◊", "\\lozenge");
c(u, w, C, "Ⓢ", "\\circledS");
c(u, w, C, "®", "\\circledR");
c(P, w, C, "®", "\\circledR");
c(u, w, C, "∡", "\\measuredangle", !0);
c(u, w, C, "∄", "\\nexists");
c(u, w, C, "℧", "\\mho");
c(u, w, C, "Ⅎ", "\\Finv", !0);
c(u, w, C, "⅁", "\\Game", !0);
c(u, w, C, "‵", "\\backprime");
c(u, w, C, "▲", "\\blacktriangle");
c(u, w, C, "▼", "\\blacktriangledown");
c(u, w, C, "■", "\\blacksquare");
c(u, w, C, "⧫", "\\blacklozenge");
c(u, w, C, "★", "\\bigstar");
c(u, w, C, "∢", "\\sphericalangle", !0);
c(u, w, C, "∁", "\\complement", !0);
c(u, w, C, "ð", "\\eth", !0);
c(P, p, C, "ð", "ð");
c(u, w, C, "╱", "\\diagup");
c(u, w, C, "╲", "\\diagdown");
c(u, w, C, "□", "\\square");
c(u, w, C, "□", "\\Box");
c(u, w, C, "◊", "\\Diamond");
c(u, w, C, "¥", "\\yen", !0);
c(P, w, C, "¥", "\\yen", !0);
c(u, w, C, "✓", "\\checkmark", !0);
c(P, w, C, "✓", "\\checkmark");
c(u, w, C, "ℶ", "\\beth", !0);
c(u, w, C, "ℸ", "\\daleth", !0);
c(u, w, C, "ℷ", "\\gimel", !0);
c(u, w, C, "ϝ", "\\digamma", !0);
c(u, w, C, "ϰ", "\\varkappa");
c(u, w, tr, "┌", "\\@ulcorner", !0);
c(u, w, qt, "┐", "\\@urcorner", !0);
c(u, w, tr, "└", "\\@llcorner", !0);
c(u, w, qt, "┘", "\\@lrcorner", !0);
c(u, w, x, "≦", "\\leqq", !0);
c(u, w, x, "⩽", "\\leqslant", !0);
c(u, w, x, "⪕", "\\eqslantless", !0);
c(u, w, x, "≲", "\\lesssim", !0);
c(u, w, x, "⪅", "\\lessapprox", !0);
c(u, w, x, "≊", "\\approxeq", !0);
c(u, w, ce, "⋖", "\\lessdot");
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
c(u, w, ce, "⋗", "\\gtrdot");
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
c(u, w, ce, "⊲", "\\lhd");
c(u, w, ce, "⊳", "\\rhd");
c(u, w, x, "≂", "\\eqsim", !0);
c(u, p, x, "⋈", "\\Join");
c(u, w, x, "≑", "\\Doteq", !0);
c(u, w, ce, "∔", "\\dotplus", !0);
c(u, w, ce, "∖", "\\smallsetminus");
c(u, w, ce, "⋒", "\\Cap", !0);
c(u, w, ce, "⋓", "\\Cup", !0);
c(u, w, ce, "⩞", "\\doublebarwedge", !0);
c(u, w, ce, "⊟", "\\boxminus", !0);
c(u, w, ce, "⊞", "\\boxplus", !0);
c(u, w, ce, "⋇", "\\divideontimes", !0);
c(u, w, ce, "⋉", "\\ltimes", !0);
c(u, w, ce, "⋊", "\\rtimes", !0);
c(u, w, ce, "⋋", "\\leftthreetimes", !0);
c(u, w, ce, "⋌", "\\rightthreetimes", !0);
c(u, w, ce, "⋏", "\\curlywedge", !0);
c(u, w, ce, "⋎", "\\curlyvee", !0);
c(u, w, ce, "⊝", "\\circleddash", !0);
c(u, w, ce, "⊛", "\\circledast", !0);
c(u, w, ce, "⋅", "\\centerdot");
c(u, w, ce, "⊺", "\\intercal", !0);
c(u, w, ce, "⋒", "\\doublecap");
c(u, w, ce, "⋓", "\\doublecup");
c(u, w, ce, "⊠", "\\boxtimes", !0);
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
c(u, p, C, "‘", "`");
c(u, p, C, "$", "\\$");
c(P, p, C, "$", "\\$");
c(P, p, C, "$", "\\textdollar");
c(u, p, C, "%", "\\%");
c(P, p, C, "%", "\\%");
c(u, p, C, "_", "\\_");
c(P, p, C, "_", "\\_");
c(P, p, C, "_", "\\textunderscore");
c(u, p, C, "∠", "\\angle", !0);
c(u, p, C, "∞", "\\infty", !0);
c(u, p, C, "′", "\\prime");
c(u, p, C, "△", "\\triangle");
c(u, p, C, "Γ", "\\Gamma", !0);
c(u, p, C, "Δ", "\\Delta", !0);
c(u, p, C, "Θ", "\\Theta", !0);
c(u, p, C, "Λ", "\\Lambda", !0);
c(u, p, C, "Ξ", "\\Xi", !0);
c(u, p, C, "Π", "\\Pi", !0);
c(u, p, C, "Σ", "\\Sigma", !0);
c(u, p, C, "Υ", "\\Upsilon", !0);
c(u, p, C, "Φ", "\\Phi", !0);
c(u, p, C, "Ψ", "\\Psi", !0);
c(u, p, C, "Ω", "\\Omega", !0);
c(u, p, C, "A", "Α");
c(u, p, C, "B", "Β");
c(u, p, C, "E", "Ε");
c(u, p, C, "Z", "Ζ");
c(u, p, C, "H", "Η");
c(u, p, C, "I", "Ι");
c(u, p, C, "K", "Κ");
c(u, p, C, "M", "Μ");
c(u, p, C, "N", "Ν");
c(u, p, C, "O", "Ο");
c(u, p, C, "P", "Ρ");
c(u, p, C, "T", "Τ");
c(u, p, C, "X", "Χ");
c(u, p, C, "¬", "\\neg", !0);
c(u, p, C, "¬", "\\lnot");
c(u, p, C, "⊤", "\\top");
c(u, p, C, "⊥", "\\bot");
c(u, p, C, "∅", "\\emptyset");
c(u, w, C, "∅", "\\varnothing");
c(u, p, xe, "α", "\\alpha", !0);
c(u, p, xe, "β", "\\beta", !0);
c(u, p, xe, "γ", "\\gamma", !0);
c(u, p, xe, "δ", "\\delta", !0);
c(u, p, xe, "ϵ", "\\epsilon", !0);
c(u, p, xe, "ζ", "\\zeta", !0);
c(u, p, xe, "η", "\\eta", !0);
c(u, p, xe, "θ", "\\theta", !0);
c(u, p, xe, "ι", "\\iota", !0);
c(u, p, xe, "κ", "\\kappa", !0);
c(u, p, xe, "λ", "\\lambda", !0);
c(u, p, xe, "μ", "\\mu", !0);
c(u, p, xe, "ν", "\\nu", !0);
c(u, p, xe, "ξ", "\\xi", !0);
c(u, p, xe, "ο", "\\omicron", !0);
c(u, p, xe, "π", "\\pi", !0);
c(u, p, xe, "ρ", "\\rho", !0);
c(u, p, xe, "σ", "\\sigma", !0);
c(u, p, xe, "τ", "\\tau", !0);
c(u, p, xe, "υ", "\\upsilon", !0);
c(u, p, xe, "ϕ", "\\phi", !0);
c(u, p, xe, "χ", "\\chi", !0);
c(u, p, xe, "ψ", "\\psi", !0);
c(u, p, xe, "ω", "\\omega", !0);
c(u, p, xe, "ε", "\\varepsilon", !0);
c(u, p, xe, "ϑ", "\\vartheta", !0);
c(u, p, xe, "ϖ", "\\varpi", !0);
c(u, p, xe, "ϱ", "\\varrho", !0);
c(u, p, xe, "ς", "\\varsigma", !0);
c(u, p, xe, "φ", "\\varphi", !0);
c(u, p, ce, "∗", "*", !0);
c(u, p, ce, "+", "+");
c(u, p, ce, "−", "-", !0);
c(u, p, ce, "⋅", "\\cdot", !0);
c(u, p, ce, "∘", "\\circ", !0);
c(u, p, ce, "÷", "\\div", !0);
c(u, p, ce, "±", "\\pm", !0);
c(u, p, ce, "×", "\\times", !0);
c(u, p, ce, "∩", "\\cap", !0);
c(u, p, ce, "∪", "\\cup", !0);
c(u, p, ce, "∖", "\\setminus", !0);
c(u, p, ce, "∧", "\\land");
c(u, p, ce, "∨", "\\lor");
c(u, p, ce, "∧", "\\wedge", !0);
c(u, p, ce, "∨", "\\vee", !0);
c(u, p, C, "√", "\\surd");
c(u, p, tr, "⟨", "\\langle", !0);
c(u, p, tr, "∣", "\\lvert");
c(u, p, tr, "∥", "\\lVert");
c(u, p, qt, "?", "?");
c(u, p, qt, "!", "!");
c(u, p, qt, "⟩", "\\rangle", !0);
c(u, p, qt, "∣", "\\rvert");
c(u, p, qt, "∥", "\\rVert");
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
c(u, p, tn, " ", "\\ ");
c(u, p, tn, " ", "\\space");
c(u, p, tn, " ", "\\nobreakspace");
c(P, p, tn, " ", "\\ ");
c(P, p, tn, " ", " ");
c(P, p, tn, " ", "\\space");
c(P, p, tn, " ", "\\nobreakspace");
c(u, p, tn, "", "\\nobreak");
c(u, p, tn, "", "\\allowbreak");
c(u, p, aa, ",", ",");
c(u, p, aa, ";", ";");
c(u, w, ce, "⊼", "\\barwedge", !0);
c(u, w, ce, "⊻", "\\veebar", !0);
c(u, p, ce, "⊙", "\\odot", !0);
c(u, p, ce, "⊕", "\\oplus", !0);
c(u, p, ce, "⊗", "\\otimes", !0);
c(u, p, C, "∂", "\\partial", !0);
c(u, p, ce, "⊘", "\\oslash", !0);
c(u, w, ce, "⊚", "\\circledcirc", !0);
c(u, w, ce, "⊡", "\\boxdot", !0);
c(u, p, ce, "△", "\\bigtriangleup");
c(u, p, ce, "▽", "\\bigtriangledown");
c(u, p, ce, "†", "\\dagger");
c(u, p, ce, "⋄", "\\diamond");
c(u, p, ce, "⋆", "\\star");
c(u, p, ce, "◃", "\\triangleleft");
c(u, p, ce, "▹", "\\triangleright");
c(u, p, tr, "{", "\\{");
c(P, p, C, "{", "\\{");
c(P, p, C, "{", "\\textbraceleft");
c(u, p, qt, "}", "\\}");
c(P, p, C, "}", "\\}");
c(P, p, C, "}", "\\textbraceright");
c(u, p, tr, "{", "\\lbrace");
c(u, p, qt, "}", "\\rbrace");
c(u, p, tr, "[", "\\lbrack", !0);
c(P, p, C, "[", "\\lbrack", !0);
c(u, p, qt, "]", "\\rbrack", !0);
c(P, p, C, "]", "\\rbrack", !0);
c(u, p, tr, "(", "\\lparen", !0);
c(u, p, qt, ")", "\\rparen", !0);
c(P, p, C, "<", "\\textless", !0);
c(P, p, C, ">", "\\textgreater", !0);
c(u, p, tr, "⌊", "\\lfloor", !0);
c(u, p, qt, "⌋", "\\rfloor", !0);
c(u, p, tr, "⌈", "\\lceil", !0);
c(u, p, qt, "⌉", "\\rceil", !0);
c(u, p, C, "\\", "\\backslash");
c(u, p, C, "∣", "|");
c(u, p, C, "∣", "\\vert");
c(P, p, C, "|", "\\textbar", !0);
c(u, p, C, "∥", "\\|");
c(u, p, C, "∥", "\\Vert");
c(P, p, C, "∥", "\\textbardbl");
c(P, p, C, "~", "\\textasciitilde");
c(P, p, C, "\\", "\\textbackslash");
c(P, p, C, "^", "\\textasciicircum");
c(u, p, x, "↑", "\\uparrow", !0);
c(u, p, x, "⇑", "\\Uparrow", !0);
c(u, p, x, "↓", "\\downarrow", !0);
c(u, p, x, "⇓", "\\Downarrow", !0);
c(u, p, x, "↕", "\\updownarrow", !0);
c(u, p, x, "⇕", "\\Updownarrow", !0);
c(u, p, St, "∐", "\\coprod");
c(u, p, St, "⋁", "\\bigvee");
c(u, p, St, "⋀", "\\bigwedge");
c(u, p, St, "⨄", "\\biguplus");
c(u, p, St, "⋂", "\\bigcap");
c(u, p, St, "⋃", "\\bigcup");
c(u, p, St, "∫", "\\int");
c(u, p, St, "∫", "\\intop");
c(u, p, St, "∬", "\\iint");
c(u, p, St, "∭", "\\iiint");
c(u, p, St, "∏", "\\prod");
c(u, p, St, "∑", "\\sum");
c(u, p, St, "⨂", "\\bigotimes");
c(u, p, St, "⨁", "\\bigoplus");
c(u, p, St, "⨀", "\\bigodot");
c(u, p, St, "∮", "\\oint");
c(u, p, St, "∯", "\\oiint");
c(u, p, St, "∰", "\\oiiint");
c(u, p, St, "⨆", "\\bigsqcup");
c(u, p, St, "∫", "\\smallint");
c(P, p, A0, "…", "\\textellipsis");
c(u, p, A0, "…", "\\mathellipsis");
c(P, p, A0, "…", "\\ldots", !0);
c(u, p, A0, "…", "\\ldots", !0);
c(u, p, A0, "⋯", "\\@cdots", !0);
c(u, p, A0, "⋱", "\\ddots", !0);
c(u, p, C, "⋮", "\\varvdots");
c(P, p, C, "⋮", "\\varvdots");
c(u, p, dt, "ˊ", "\\acute");
c(u, p, dt, "ˋ", "\\grave");
c(u, p, dt, "¨", "\\ddot");
c(u, p, dt, "~", "\\tilde");
c(u, p, dt, "ˉ", "\\bar");
c(u, p, dt, "˘", "\\breve");
c(u, p, dt, "ˇ", "\\check");
c(u, p, dt, "^", "\\hat");
c(u, p, dt, "⃗", "\\vec");
c(u, p, dt, "˙", "\\dot");
c(u, p, dt, "˚", "\\mathring");
c(u, p, xe, "", "\\@imath");
c(u, p, xe, "", "\\@jmath");
c(u, p, C, "ı", "ı");
c(u, p, C, "ȷ", "ȷ");
c(P, p, C, "ı", "\\i", !0);
c(P, p, C, "ȷ", "\\j", !0);
c(P, p, C, "ß", "\\ss", !0);
c(P, p, C, "æ", "\\ae", !0);
c(P, p, C, "œ", "\\oe", !0);
c(P, p, C, "ø", "\\o", !0);
c(P, p, C, "Æ", "\\AE", !0);
c(P, p, C, "Œ", "\\OE", !0);
c(P, p, C, "Ø", "\\O", !0);
c(P, p, dt, "ˊ", "\\'");
c(P, p, dt, "ˋ", "\\`");
c(P, p, dt, "ˆ", "\\^");
c(P, p, dt, "˜", "\\~");
c(P, p, dt, "ˉ", "\\=");
c(P, p, dt, "˘", "\\u");
c(P, p, dt, "˙", "\\.");
c(P, p, dt, "¸", "\\c");
c(P, p, dt, "˚", "\\r");
c(P, p, dt, "ˇ", "\\v");
c(P, p, dt, "¨", '\\"');
c(P, p, dt, "˝", "\\H");
c(P, p, dt, "◯", "\\textcircled");
var Iu = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(P, p, C, "–", "--", !0);
c(P, p, C, "–", "\\textendash");
c(P, p, C, "—", "---", !0);
c(P, p, C, "—", "\\textemdash");
c(P, p, C, "‘", "`", !0);
c(P, p, C, "‘", "\\textquoteleft");
c(P, p, C, "’", "'", !0);
c(P, p, C, "’", "\\textquoteright");
c(P, p, C, "“", "``", !0);
c(P, p, C, "“", "\\textquotedblleft");
c(P, p, C, "”", "''", !0);
c(P, p, C, "”", "\\textquotedblright");
c(u, p, C, "°", "\\degree", !0);
c(P, p, C, "°", "\\degree");
c(P, p, C, "°", "\\textdegree", !0);
c(u, p, C, "£", "\\pounds");
c(u, p, C, "£", "\\mathsterling", !0);
c(P, p, C, "£", "\\pounds");
c(P, p, C, "£", "\\textsterling", !0);
c(u, w, C, "✠", "\\maltese");
c(P, w, C, "✠", "\\maltese");
var pl = '0123456789/@."';
for (var xi = 0; xi < pl.length; xi++) {
  var ml = pl.charAt(xi);
  c(u, p, C, ml, ml);
}
var gl = '0123456789!@*()-=+";:?/.,';
for (var yi = 0; yi < gl.length; yi++) {
  var bl = gl.charAt(yi);
  c(P, p, C, bl, bl);
}
var Va = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var ki = 0; ki < Va.length; ki++) {
  var ba = Va.charAt(ki);
  c(u, p, xe, ba, ba), c(P, p, C, ba, ba);
}
c(u, w, C, "C", "ℂ");
c(P, w, C, "C", "ℂ");
c(u, w, C, "H", "ℍ");
c(P, w, C, "H", "ℍ");
c(u, w, C, "N", "ℕ");
c(P, w, C, "N", "ℕ");
c(u, w, C, "P", "ℙ");
c(P, w, C, "P", "ℙ");
c(u, w, C, "Q", "ℚ");
c(P, w, C, "Q", "ℚ");
c(u, w, C, "R", "ℝ");
c(P, w, C, "R", "ℝ");
c(u, w, C, "Z", "ℤ");
c(P, w, C, "Z", "ℤ");
c(u, p, xe, "h", "ℎ");
c(P, p, xe, "h", "ℎ");
var Ce;
for (var Ft = 0; Ft < Va.length; Ft++) {
  var gt = Va.charAt(Ft);
  Ce = String.fromCharCode(55349, 56320 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56372 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56424 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56580 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56684 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56736 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56788 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56840 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56944 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ft < 26 && (Ce = String.fromCharCode(55349, 56632 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce), Ce = String.fromCharCode(55349, 56476 + Ft), c(u, p, xe, gt, Ce), c(P, p, C, gt, Ce));
}
Ce = "𝕜";
c(u, p, xe, "k", Ce);
c(P, p, C, "k", Ce);
for (var Dn = 0; Dn < 10; Dn++) {
  var hn = Dn.toString();
  Ce = String.fromCharCode(55349, 57294 + Dn), c(u, p, xe, hn, Ce), c(P, p, C, hn, Ce), Ce = String.fromCharCode(55349, 57314 + Dn), c(u, p, xe, hn, Ce), c(P, p, C, hn, Ce), Ce = String.fromCharCode(55349, 57324 + Dn), c(u, p, xe, hn, Ce), c(P, p, C, hn, Ce), Ce = String.fromCharCode(55349, 57334 + Dn), c(u, p, xe, hn, Ce), c(P, p, C, hn, Ce);
}
var es = "ÐÞþ";
for (var Si = 0; Si < es.length; Si++) {
  var va = es.charAt(Si);
  c(u, p, xe, va, va), c(P, p, C, va, va);
}
var ts = {
  mathClass: "mathbf",
  textClass: "textbf",
  font: "Main-Bold"
}, vl = {
  mathClass: "mathnormal",
  textClass: "textit",
  font: "Math-Italic"
}, wl = {
  mathClass: "boldsymbol",
  textClass: "boldsymbol",
  font: "Main-BoldItalic"
}, Bf = {
  mathClass: "mathscr",
  textClass: "textscr",
  font: "Script-Regular"
}, Hn = {
  mathClass: "",
  textClass: "",
  font: ""
}, xl = {
  mathClass: "mathfrak",
  textClass: "textfrak",
  font: "Fraktur-Regular"
}, yl = {
  mathClass: "mathbb",
  textClass: "textbb",
  font: "AMS-Regular"
}, kl = {
  mathClass: "mathboldfrak",
  textClass: "textboldfrak",
  font: "Fraktur-Regular"
}, rs = {
  mathClass: "mathsf",
  textClass: "textsf",
  font: "SansSerif-Regular"
}, ns = {
  mathClass: "mathboldsf",
  textClass: "textboldsf",
  font: "SansSerif-Bold"
}, Sl = {
  mathClass: "mathitsf",
  textClass: "textitsf",
  font: "SansSerif-Italic"
}, as = {
  mathClass: "mathtt",
  textClass: "texttt",
  font: "Typewriter-Regular"
}, _l = [
  ts,
  ts,
  // A-Z, a-z
  vl,
  vl,
  // A-Z, a-z
  wl,
  wl,
  // A-Z, a-z
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  Bf,
  Hn,
  // A-Z script, a-z — no font
  Hn,
  Hn,
  // A-Z bold script, a-z bold script — no font
  xl,
  xl,
  // A-Z, a-z
  yl,
  yl,
  // A-Z double-struck, k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  kl,
  kl,
  // A-Z, a-z
  rs,
  rs,
  // A-Z, a-z
  ns,
  ns,
  // A-Z, a-z
  Sl,
  Sl,
  // A-Z, a-z
  Hn,
  Hn,
  // A-Z bold italic sans, a-z bold italic sans - no font
  as,
  as
  // A-Z, a-z
], Df = [
  ts,
  // 0-9
  Hn,
  // 0-9 double-struck. No KaTeX font.
  rs,
  // 0-9
  ns,
  // 0-9
  as
  // 0-9
], Lf = (r) => {
  var e = r.charCodeAt(0), t = r.charCodeAt(1), n = (e - 55296) * 1024 + (t - 56320) + 65536;
  if (119808 <= n && n < 120484) {
    var a = Math.floor((n - 119808) / 26);
    return _l[a];
  } else if (120782 <= n && n <= 120831) {
    var i = Math.floor((n - 120782) / 10);
    return Df[i];
  } else {
    if (n === 120485 || n === 120486)
      return _l[0];
    if (120486 < n && n < 120782)
      return Hn;
    throw new G("Unsupported character: " + r);
  }
}, ei = function(e, t, n) {
  if (ut[n][e]) {
    var a = ut[n][e].replace;
    a && (e = a);
  }
  return {
    value: e,
    metrics: Ls(e, t, n)
  };
}, Pt = function(e, t, n, a, i) {
  var s = ei(e, t, n), o = s.metrics;
  e = s.value;
  var l;
  if (o) {
    var d = o.italic;
    (n === "text" || a && a.font === "mathit") && (d = 0), l = new Qt(e, o.height, o.depth, d, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), l = new Qt(e, 0, 0, 0, 0, 0, i);
  if (a) {
    l.maxFontSize = a.sizeMultiplier, a.style.isTight() && l.classes.push("mtight");
    var h = a.getColor();
    h && (l.style.color = h);
  }
  return l;
}, Fs = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && ei(e, "Main-Bold", t).metrics ? Pt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || ut[t][e].font === "main" ? Pt(e, "Main-Regular", t, n, a) : Pt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, Ff = function(e, t, n) {
  return n !== "textord" && ei(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, ti = function(e, t) {
  var n = e.type === "mathord" ? "mathord" : "textord", a = e.mode, i = e.text, s = ["mord"], {
    font: o,
    fontFamily: l,
    fontWeight: d,
    fontShape: h
  } = t, f = a === "math" || a === "text" && !!o, m = f ? o : l, v = "", y = "";
  if (i.charCodeAt(0) === 55349) {
    var I = Lf(i);
    v = I.font, y = I[a + "Class"];
  }
  if (v)
    return Pt(i, v, a, t, s.concat(y));
  if (m) {
    var N, z;
    if (m === "boldsymbol") {
      var $ = Ff(i, a, n);
      N = $.fontName, z = [$.fontClass];
    } else f ? (N = is[o].fontName, z = [o]) : (N = wa(l, d, h), z = [l, d, h]);
    if (ei(i, N, a).metrics)
      return Pt(i, N, a, t, s.concat(z));
    if (Iu.hasOwnProperty(i) && N.slice(0, 10) === "Typewriter") {
      for (var M = [], H = 0; H < i.length; H++)
        M.push(Pt(i[H], N, a, t, s.concat(z)));
      return rn(M);
    }
  }
  if (n === "mathord")
    return Pt(i, "Math-Italic", a, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var q = ut[a][i] && ut[a][i].font;
    if (q === "ams") {
      var E = wa("amsrm", d, h);
      return Pt(i, E, a, t, s.concat("amsrm", d, h));
    } else if (q === "main" || !q) {
      var ae = wa("textrm", d, h);
      return Pt(i, ae, a, t, s.concat(d, h));
    } else {
      var ne = wa(q, d, h);
      return Pt(i, ne, a, t, s.concat(ne, d, h));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, Pf = (r, e) => {
  if (wn(r.classes) !== wn(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal"))
    return !1;
  if (r.classes.length === 1) {
    var t = r.classes[0];
    if (t === "mbin" || t === "mord")
      return !1;
  }
  for (var n of Object.keys(r.style))
    if (r.style[n] !== e.style[n])
      return !1;
  for (var a of Object.keys(e.style))
    if (r.style[a] !== e.style[a])
      return !1;
  return !0;
}, Nu = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof Qt && n instanceof Qt && Pf(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Ps = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, V = function(e, t, n, a) {
  var i = new C0(e, t, n, a);
  return Ps(i), i;
}, yn = (r, e, t, n) => new C0(r, e, t, n), x0 = function(e, t, n) {
  var a = V([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = Z(a.height), a.maxFontSize = 1, a;
}, Hf = function(e, t, n, a) {
  var i = new Qa(e, t, n, a);
  return Ps(i), i;
}, rn = function(e) {
  var t = new _0(e);
  return Ps(t), t;
}, y0 = function(e, t) {
  return e instanceof _0 ? V([], [e], t) : e;
}, qf = function(e) {
  if (e.positionType === "individualShift") {
    for (var t = e.children, n = [t[0]], a = -t[0].shift - t[0].elem.depth, i = a, s = 1; s < t.length; s++) {
      var o = -t[s].shift - i - t[s].elem.depth, l = o - (t[s - 1].elem.height + t[s - 1].elem.depth);
      i = i + o, n.push({
        type: "kern",
        size: l
      }), n.push(t[s]);
    }
    return {
      children: n,
      depth: a
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
}, We = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = qf(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      i = Math.max(i, l.maxFontSize, l.height);
    }
  }
  i += 2;
  var d = V(["pstrut"], []);
  d.style.height = Z(i);
  for (var h = [], f = a, m = a, v = a, y = 0; y < n.length; y++) {
    var I = n[y];
    if (I.type === "kern")
      v += I.size;
    else {
      var N = I.elem, z = I.wrapperClasses || [], $ = I.wrapperStyle || {}, M = V(z, [d, N], void 0, $);
      M.style.top = Z(-i - v - N.depth), I.marginLeft && (M.style.marginLeft = I.marginLeft), I.marginRight && (M.style.marginRight = I.marginRight), h.push(M), v += N.height + N.depth;
    }
    f = Math.min(f, v), m = Math.max(m, v);
  }
  var H = V(["vlist"], h);
  H.style.height = Z(m);
  var q;
  if (f < 0) {
    var E = V([], []), ae = V(["vlist"], [E]);
    ae.style.height = Z(-f);
    var ne = V(["vlist-s"], [new Qt("​")]);
    q = [V(["vlist-r"], [H, ne]), V(["vlist-r"], [ae])];
  } else
    q = [V(["vlist-r"], [H])];
  var B = V(["vlist-t"], q);
  return q.length === 2 && B.classes.push("vlist-t2"), B.height = m, B.depth = -f, B;
}, Eu = (r, e) => {
  var t = V(["mspace"], [], e), n = pt(r, e);
  return t.style.marginRight = Z(n), t;
}, wa = (r, e, t) => {
  var n, a;
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
  return e === "textbf" && t === "textit" ? a = "BoldItalic" : e === "textbf" ? a = "Bold" : t === "textit" ? a = "Italic" : a = "Regular", n + "-" + a;
}, is = {
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
}, Mu = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, zu = function(e, t) {
  var [n, a, i] = Mu[e], s = new xn(n), o = new Qr([s], {
    width: Z(a),
    height: Z(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), l = yn(["overlay"], [o], t);
  return l.height = i, l.style.height = Z(i), l.style.width = Z(a), l;
}, ft = {
  number: 3,
  unit: "mu"
}, Ln = {
  number: 4,
  unit: "mu"
}, Ur = {
  number: 5,
  unit: "mu"
}, Vf = {
  mord: {
    mop: ft,
    mbin: Ln,
    mrel: Ur,
    minner: ft
  },
  mop: {
    mord: ft,
    mop: ft,
    mrel: Ur,
    minner: ft
  },
  mbin: {
    mord: Ln,
    mop: Ln,
    mopen: Ln,
    minner: Ln
  },
  mrel: {
    mord: Ur,
    mop: Ur,
    mopen: Ur,
    minner: Ur
  },
  mopen: {},
  mclose: {
    mop: ft,
    mbin: Ln,
    mrel: Ur,
    minner: ft
  },
  mpunct: {
    mord: ft,
    mop: ft,
    mrel: Ur,
    mopen: ft,
    mclose: ft,
    mpunct: ft,
    minner: ft
  },
  minner: {
    mord: ft,
    mop: ft,
    mbin: Ln,
    mrel: Ur,
    mopen: ft,
    mpunct: ft,
    minner: ft
  }
}, Wf = {
  mord: {
    mop: ft
  },
  mop: {
    mord: ft,
    mop: ft
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: ft
  },
  mpunct: {},
  minner: {
    mop: ft
  }
}, Ru = {}, U0 = {}, G0 = {};
function le(r) {
  for (var {
    type: e,
    names: t,
    htmlBuilder: n,
    mathmlBuilder: a
  } = r, i = 0; i < t.length; ++i)
    Ru[t[i]] = r;
  e && (n && (U0[e] = n), a && (G0[e] = a));
}
function Kn(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  t && (U0[e] = t), n && (G0[e] = n);
}
var Wa = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, yt = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Uf = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), Gf = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), jf = {
  display: $e.DISPLAY,
  text: $e.TEXT,
  script: $e.SCRIPT,
  scriptscript: $e.SCRIPTSCRIPT
}, Zf = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Tt = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < e.length; s++) {
    var o = Ue(e[s], t);
    if (o instanceof _0) {
      var l = o.children;
      i.push(...l);
    } else
      i.push(o);
  }
  if (Nu(i), !n)
    return i;
  var d = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = t.havingSize(h.size) : h.type === "styling" && (d = t.havingStyle(jf[h.style]));
  }
  var f = V([a[0] || "leftmost"], [], t), m = V([a[1] || "rightmost"], [], t), v = n === "root";
  return ss(i, (y, I) => {
    var N = I.classes[0], z = y.classes[0];
    N === "mbin" && Gf.has(z) ? I.classes[0] = "mord" : z === "mbin" && Uf.has(N) && (y.classes[0] = "mord");
  }, {
    node: f
  }, m, v), ss(i, (y, I) => {
    var N, z, $ = ls(I), M = ls(y), H = $ && M ? y.hasClass("mtight") ? (N = Wf[$]) == null ? void 0 : N[M] : (z = Vf[$]) == null ? void 0 : z[M] : null;
    if (H)
      return Eu(H, d);
  }, {
    node: f
  }, m, v), i;
}, ss = function(e, t, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = Ou(o);
    if (l) {
      ss(l.children, t, n, null, i);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = t(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), s++));
    }
    d ? n.node = o : i && o.hasClass("newline") && (n.node = V(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((f) => (m) => {
      e.splice(f + 1, 0, m), s++;
    })(s);
  }
  a && e.pop();
}, Ou = function(e) {
  return e instanceof _0 || e instanceof Qa || e instanceof C0 && e.hasClass("enclosing") ? e : null;
}, os = function(e, t) {
  var n = Ou(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (t === "right")
        return os(a[a.length - 1], "right");
      if (t === "left")
        return os(a[0], "left");
    }
  }
  return e;
}, ls = function(e, t) {
  if (!e)
    return null;
  t && (e = os(e, t));
  var n = e.classes[0];
  return Zf[n] || null;
}, j0 = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return V(t.concat(n));
}, Ue = function(e, t, n) {
  if (!e)
    return V();
  if (U0[e.type]) {
    var a = U0[e.type](e, t);
    if (n && t.size !== n.size) {
      a = V(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new G("Got group of unknown type: '" + e.type + "'");
};
function xa(r, e) {
  var t = V(["base"], r, e), n = V(["strut"]);
  return n.style.height = Z(t.height + t.depth), t.depth && (n.style.verticalAlign = Z(-t.depth)), t.children.unshift(n), t;
}
function cs(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = Tt(r, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (i.push(xa(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(xa(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(xa(s, e));
  var d;
  t ? (d = xa(Tt(t, e, !0), e), d.classes = ["tag"], i.push(d)) : a && i.push(a);
  var h = V(["katex-html"], i);
  if (h.setAttribute("aria-hidden", "true"), d) {
    var f = d.children[0];
    f.style.height = Z(h.height + h.depth), h.depth && (f.style.verticalAlign = Z(-h.depth));
  }
  return h;
}
function Bu(r) {
  return new _0(r);
}
class j {
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
    this.classes.length > 0 && (e.className = wn(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof kt && this.children[n + 1] instanceof kt) {
        for (var a = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof kt; )
          a += this.children[++n].toText();
        e.appendChild(new kt(a).toNode());
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += Mt(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + Mt(wn(this.classes)) + '"'), e += ">";
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
class kt {
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
    return Mt(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Du {
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
    return e.setAttribute("width", Z(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + Z(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var Kf = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), Xf = /* @__PURE__ */ new Set(["mrow", "mtable"]), lr = function(e, t, n) {
  return ut[t][e] && ut[t][e].replace && e.charCodeAt(0) !== 55349 && !(Iu.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = ut[t][e].replace), new kt(e);
}, Hs = function(e) {
  return e.length === 1 ? e[0] : new j("mrow", e);
}, Jf = {
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
}, qs = (r, e) => {
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
  var n = r.mode, a = Jf[t];
  if (a)
    return typeof a == "function" ? a(r) : a;
  var i = r.text;
  if (Kf.has(i))
    return null;
  if (ut[n][i]) {
    var s = ut[n][i].replace;
    s && (i = s);
  }
  var o = is[t].fontName;
  return Ls(i, o, n) ? is[t].variant : null;
};
function _i(r) {
  if (!r)
    return !1;
  if (r.type === "mi" && r.children.length === 1) {
    var e = r.children[0];
    return e instanceof kt && e.text === ".";
  } else if (r.type === "mo" && r.children.length === 1 && r.getAttribute("separator") === "true" && r.getAttribute("lspace") === "0em" && r.getAttribute("rspace") === "0em") {
    var t = r.children[0];
    return t instanceof kt && t.text === ",";
  } else
    return !1;
}
var rr = function(e, t, n) {
  if (e.length === 1) {
    var a = tt(e[0], t);
    return n && a instanceof j && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, o = 0; o < e.length; o++) {
    var l = tt(e[o], t);
    if (l instanceof j && s instanceof j) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (_i(l) && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && _i(s))
        l.children = [...s.children, ...l.children], i.pop();
      else if ((l.type === "msup" || l.type === "msub") && l.children.length >= 1 && (s.type === "mn" || _i(s))) {
        var d = l.children[0];
        d instanceof j && d.type === "mn" && (d.children = [...s.children, ...d.children], i.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var h = s.children[0];
        if (h instanceof kt && h.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var f = l.children[0];
          f instanceof kt && f.text.length > 0 && (f.text = f.text.slice(0, 1) + "̸" + f.text.slice(1), i.pop());
        }
      }
    }
    i.push(l), s = l;
  }
  return i;
}, kn = function(e, t, n) {
  return Hs(rr(e, t, n));
}, tt = function(e, t) {
  if (!e)
    return new j("mrow");
  if (G0[e.type])
    return G0[e.type](e, t);
  throw new G("Got group of unknown type: '" + e.type + "'");
};
function Cl(r, e, t, n, a) {
  var i = rr(r, t), s;
  i.length === 1 && i[0] instanceof j && Xf.has(i[0].type) ? s = i[0] : s = new j("mrow", i);
  var o = new j("annotation", [new kt(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new j("semantics", [s, o]), d = new j("math", [l]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var h = a ? "katex" : "katex-mathml";
  return V([h], [d]);
}
var Yf = [
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
], Al = [
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
], Tl = function(e, t) {
  return t.size < 2 ? e : Yf[e - 1][t.size - 1];
};
class jr {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || jr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Al[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return Object.assign(t, e), new jr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Tl(this.textSize, e)
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
      sizeMultiplier: Al[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Tl(jr.BASESIZE, e);
    return this.size === t && this.textSize === jr.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== jr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + jr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Of(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
jr.BASESIZE = 6;
var Lu = function(e) {
  return new jr({
    style: e.displayMode ? $e.DISPLAY : $e.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Fu = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = V(n, [e]);
  }
  return e;
}, Qf = function(e, t, n) {
  var a = Lu(n), i;
  if (n.output === "mathml")
    return Cl(e, t, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = cs(e, a);
    i = V(["katex"], [s]);
  } else {
    var o = Cl(e, t, a, n.displayMode, !1), l = cs(e, a);
    i = V(["katex"], [o, l]);
  }
  return Fu(i, n);
}, ep = function(e, t, n) {
  var a = Lu(n), i = cs(e, a), s = V(["katex"], [i]);
  return Fu(s, n);
}, tp = {
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
}, ri = function(e) {
  var t = new j("mo", [new kt(tp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, rp = {
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
}, np = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), ni = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (np.has(l) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, h, f, m;
      if (d > 5)
        l === "widehat" || l === "widecheck" ? (h = 420, o = 2364, m = 0.42, f = l + "4") : (h = 312, o = 2340, m = 0.34, f = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][d];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], f = l + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], f = "tilde" + v);
      }
      var y = new xn(f), I = new Qr([y], {
        width: "100%",
        height: Z(m),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: yn([], [I], t),
        minWidth: 0,
        height: m
      };
    } else {
      var N = [], z = rp[l];
      if (!z)
        throw new Error('No SVG data for "' + l + '".');
      var [$, M, H] = z, q = H / 1e3, E = $.length, ae, ne;
      if (E === 1) {
        if (z.length !== 4)
          throw new Error('Expected 4-tuple for single-path SVG data "' + l + '".');
        ae = ["hide-tail"], ne = [z[3]];
      } else if (E === 2)
        ae = ["halfarrow-left", "halfarrow-right"], ne = ["xMinYMin", "xMaxYMin"];
      else if (E === 3)
        ae = ["brace-left", "brace-center", "brace-right"], ne = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + E + " children.");
      for (var B = 0; B < E; B++) {
        var be = new xn($[B]), Ie = new Qr([be], {
          width: "400em",
          height: Z(q),
          viewBox: "0 0 " + o + " " + H,
          preserveAspectRatio: ne[B] + " slice"
        }), me = yn([ae[B]], [Ie], t);
        if (E === 1)
          return {
            span: me,
            minWidth: M,
            height: q
          };
        me.style.height = Z(q), N.push(me);
      }
      return {
        span: V(["stretchy"], N, t),
        minWidth: M,
        height: q
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = Z(s), i > 0 && (a.style.minWidth = Z(i)), a;
}, ap = function(e, t, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (s = V(["stretchy", t], [], i), t === "fbox") {
      var l = i.color && i.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new Qi({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new Qi({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new Qr(d, {
      width: "100%",
      height: Z(o)
    });
    s = yn([], [h], i);
  }
  return s.height = o, s.style.height = Z(o), s;
}, ip = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, sp = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
function op(r) {
  return r in ip;
}
function ze(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function ai(r) {
  var e = ii(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function ii(r) {
  return r && (r.type === "atom" || sp.hasOwnProperty(r.type)) ? r : null;
}
var Pu = (r) => {
  if (r instanceof Qt)
    return r;
  if (zf(r) && r.children.length === 1)
    return Pu(r.children[0]);
}, Hu = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = ze(r.base, "accent"), t = n.base, r.base = t, a = Mf(Ue(r, e)), r.base = n) : (n = ze(r, "accent"), t = n.base);
  var i = Ue(t, e.havingCrampedStyle()), s = n.isShifty && en(t), o = 0;
  if (s) {
    var l, d;
    o = (l = (d = Pu(i)) == null ? void 0 : d.skew) != null ? l : 0;
  }
  var h = n.label === "\\c", f = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = ni(n, e), m = We({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + Z(2 * o) + ")",
          marginLeft: Z(2 * o)
        } : void 0
      }]
    });
  else {
    var v, y;
    n.label === "\\vec" ? (v = zu("vec", e), y = Mu.vec[1]) : (v = ti({
      type: "textord",
      mode: n.mode,
      text: n.label
    }, e), v = Ef(v), v.italic = 0, y = v.width, h && (f += v.depth)), m = V(["accent-body"], [v]);
    var I = n.label === "\\textcircled";
    I && (m.classes.push("accent-full"), f = i.height);
    var N = o;
    I || (N -= y / 2), m.style.left = Z(N), n.label === "\\textcircled" && (m.style.top = ".2em"), m = We({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -f
      }, {
        type: "elem",
        elem: m
      }]
    });
  }
  var z = V(["mord", "accent"], [m], e);
  return a ? (a.children[0] = z, a.height = Math.max(z.height, a.height), a.classes[0] = "mord", a) : z;
}, lp = (r, e) => {
  var t = r.isStretchy ? ri(r.label) : new j("mo", [lr(r.label, r.mode)]), n = new j("mover", [tt(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, cp = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
le({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  numArgs: 1,
  handler: (r, e) => {
    var t = Wa(e[0]), n = !cp.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Hu,
  mathmlBuilder: lp
});
le({
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
le({
  type: "accentUnder",
  names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
  numArgs: 1,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ue(r.base, e), n = ni(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = We({
      positionType: "top",
      positionData: t.height,
      children: [{
        type: "elem",
        elem: n,
        wrapperClasses: ["svg-align"]
      }, {
        type: "kern",
        size: a
      }, {
        type: "elem",
        elem: t
      }]
    });
    return V(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = ri(r.label), n = new j("munder", [tt(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var ya = (r) => {
  var e = new j("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
le({
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
      funcName: a
    } = r;
    return {
      type: "xArrow",
      mode: n.mode,
      label: a,
      body: e[0],
      below: t[0]
    };
  },
  htmlBuilder(r, e) {
    var t = e.style, n = e.havingStyle(t.sup()), a = y0(Ue(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = y0(Ue(r.below, n, e), e), s.classes.push(i + "-arrow-pad"));
    var o = ni(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= a.depth);
    var h;
    if (s) {
      var f = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      h = We({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
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
      h = We({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: d
        }, {
          type: "elem",
          elem: o,
          shift: l,
          wrapperClasses: ["svg-align"]
        }]
      });
    return V(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(r, e) {
    var t = ri(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = ya(tt(r.body, e));
      if (r.below) {
        var i = ya(tt(r.below, e));
        n = new j("munderover", [t, i, a]);
      } else
        n = new j("mover", [t, a]);
    } else if (r.below) {
      var s = ya(tt(r.below, e));
      n = new j("munder", [t, s]);
    } else
      n = ya(), n = new j("mover", [t, n]);
    return n;
  }
});
function up(r, e) {
  var t = Tt(r.body, e, !0);
  return V([r.mclass], t, e);
}
function dp(r, e) {
  var t, n = rr(r.body, e);
  return r.mclass === "minner" ? t = new j("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new j("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new j("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (r.mclass === "mopen" || r.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t;
}
le({
  type: "mclass",
  names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
  numArgs: 1,
  primitive: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      body: yt(a),
      isCharacterBox: en(a)
    };
  },
  htmlBuilder: up,
  mathmlBuilder: dp
});
var si = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
le({
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
      mclass: si(e[0]),
      body: yt(e[1]),
      isCharacterBox: en(e[1])
    };
  }
});
le({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  numArgs: 2,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[1], i = e[0], s;
    n !== "\\stackrel" ? s = si(a) : s = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: yt(a)
    }, l = n === "\\underset" ? {
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
      mode: t.mode,
      mclass: s,
      body: [l],
      isCharacterBox: en(l)
    };
  }
});
le({
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
      mclass: si(e[0]),
      body: yt(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Tt(r.body, e, !0), n = V([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = rr(r.body, e), n = new j("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var hp = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, $l = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display",
  resetFont: !0
}), Il = (r) => r.type === "textord" && r.text === "@", fp = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function pp(r, e, t) {
  var n = hp[r];
  switch (n) {
    case "\\\\cdrightarrow":
    case "\\\\cdleftarrow":
      return t.callFunction(n, [e[0]], [e[1]]);
    case "\\uparrow":
    case "\\downarrow": {
      var a = t.callFunction("\\\\cdleft", [e[0]], []), i = {
        type: "atom",
        text: n,
        mode: "math",
        family: "rel"
      }, s = t.callFunction("\\Big", [i], []), o = t.callFunction("\\\\cdright", [e[1]], []), l = {
        type: "ordgroup",
        mode: "math",
        body: [a, s, o]
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
function mp(r) {
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
      throw new G("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var s = e[i], o = $l(), l = 0; l < s.length; l++)
      if (!Il(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var d = ai(s[l]).text, h = new Array(2);
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
              if (fp(s[v], d)) {
                m = !1, l = v;
                break;
              }
              if (Il(s[v]))
                throw new G("Missing a " + d + " character to complete a CD arrow.", s[v]);
              h[f].body.push(s[v]);
            }
            if (m)
              throw new G("Missing a " + d + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new G('Expected one of "<>AV=|." after @', s[l]);
        var y = pp(d, h, r), I = {
          type: "styling",
          body: [y],
          mode: "math",
          style: "display",
          // CD is always displaystyle.
          resetFont: !0
        };
        n.push(I), o = $l();
      }
    i % 2 === 0 ? n.push(o) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var N = new Array(a[0].length).fill({
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
    cols: N,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
  };
}
le({
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
    var t = e.havingStyle(e.style.sup()), n = y0(Ue(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = Z(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new j("mrow", [tt(r.label, e)]);
    return t = new j("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new j("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
le({
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
    var t = y0(Ue(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new j("mrow", [tt(r.fragment, e)]);
  }
});
le({
  type: "textord",
  names: ["\\@char"],
  numArgs: 1,
  allowedInText: !0,
  handler(r, e) {
    for (var {
      parser: t
    } = r, n = ze(e[0], "ordgroup"), a = n.body, i = "", s = 0; s < a.length; s++) {
      var o = ze(a[s], "textord");
      i += o.text;
    }
    var l = parseInt(i), d;
    if (isNaN(l))
      throw new G("\\@char has non-numeric argument " + i);
    if (l < 0 || l >= 1114111)
      throw new G("\\@char with invalid code point " + i);
    return l <= 65535 ? d = String.fromCharCode(l) : (l -= 65536, d = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var gp = (r, e) => {
  var t = Tt(r.body, e.withColor(r.color), !1);
  return rn(t);
}, bp = (r, e) => {
  var t = rr(r.body, e.withColor(r.color)), n = new j("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
le({
  type: "color",
  names: ["\\textcolor"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "original"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = ze(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: yt(a)
    };
  },
  htmlBuilder: gp,
  mathmlBuilder: bp
});
le({
  type: "color",
  names: ["\\color"],
  numArgs: 1,
  allowedInText: !0,
  argTypes: ["color"],
  handler(r, e) {
    var {
      parser: t,
      breakOnTokenText: n
    } = r, a = ze(e[0], "color-token").color;
    t.gullet.macros.set("\\current@color", a);
    var i = t.parseExpression(!0, n);
    return {
      type: "color",
      mode: t.mode,
      color: a,
      body: i
    };
  }
});
le({
  type: "cr",
  names: ["\\\\"],
  numArgs: 0,
  numOptionalArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = n.gullet.future().text === "[" ? n.parseSizeGroup(!0) : null, i = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
    return {
      type: "cr",
      mode: n.mode,
      newLine: i,
      size: a && ze(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = V(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = Z(pt(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new j("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", Z(pt(r.size, e)))), t;
  }
});
var us = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, qu = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new G("Expected a control sequence", r);
  return e;
}, vp = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Vu = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
};
le({
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
    if (us[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = us[n.text]), ze(e.parseFunction(), "internal");
    throw new G("Invalid token after macro prefix", n);
  }
});
le({
  type: "internal",
  names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new G("Expected a control sequence", n);
    for (var i = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new G('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new G('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new G("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(a, {
      tokens: l,
      numArgs: i,
      delimiters: o
    }, t === us[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
le({
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
    } = r, n = qu(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = vp(e);
    return Vu(e, n, a, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
le({
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
    } = r, n = qu(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Vu(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var F0 = function(e, t, n) {
  var a = ut.math[e] && ut.math[e].replace, i = Ls(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Vs = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), s = V(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, Wu = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = Z(i), e.height -= i, e.depth += i;
}, wp = function(e, t, n, a, i, s) {
  var o = Pt(e, "Main-Regular", i, a), l = Vs(o, t, a, s);
  return Wu(l, a, t), l;
}, xp = function(e, t, n, a) {
  return Pt(e, "Size" + t + "-Regular", n, a);
}, Uu = function(e, t, n, a, i, s) {
  var o = xp(e, t, i, a), l = Vs(V(["delimsizing", "size" + t], [o], a), $e.TEXT, a, s);
  return n && Wu(l, a, $e.TEXT), l;
}, Ci = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = V(["delimsizinginner", a], [V([], [Pt(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, Ai = function(e, t, n) {
  var a = Mr["Size4-Regular"][e.charCodeAt(0)] ? Mr["Size4-Regular"][e.charCodeAt(0)][4] : Mr["Size1-Regular"][e.charCodeAt(0)][4], i = new xn("inner", _f(e, Math.round(1e3 * t))), s = new Qr([i], {
    width: Z(a),
    height: Z(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Z(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = yn([], [s], n);
  return o.height = t, o.style.height = Z(t), o.style.width = Z(a), {
    type: "elem",
    elem: o
  };
}, ds = 8e-3, ka = {
  type: "kern",
  size: -1 * ds
}, yp = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), kp = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), Gu = function(e, t, n, a, i, s) {
  var o, l, d, h, f = "", m = 0;
  o = d = h = e, l = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : yp.has(e) ? (d = "∣", f = "vert", m = 333) : kp.has(e) ? (d = "∥", f = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", v = "Size4-Regular", f = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", v = "Size4-Regular", f = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", v = "Size4-Regular", f = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", v = "Size4-Regular", f = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", v = "Size4-Regular", f = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", v = "Size4-Regular", f = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", v = "Size4-Regular", f = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", v = "Size4-Regular", f = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", v = "Size4-Regular");
  var y = F0(o, v, i), I = y.height + y.depth, N = F0(d, v, i), z = N.height + N.depth, $ = F0(h, v, i), M = $.height + $.depth, H = 0, q = 1;
  if (l !== null) {
    var E = F0(l, v, i);
    H = E.height + E.depth, q = 2;
  }
  var ae = I + M + H, ne = Math.max(0, Math.ceil((t - ae) / (q * z))), B = ae + ne * q * z, be = a.fontMetrics().axisHeight;
  n && (be *= a.sizeMultiplier);
  var Ie = B / 2 - be, me = [];
  if (f.length > 0) {
    var qe = B - I - M, Se = Math.round(B * 1e3), W = Cf(f, Math.round(qe * 1e3)), Y = new xn(f, W), ye = Z(m / 1e3), ie = Z(Se / 1e3), se = new Qr([Y], {
      width: ye,
      height: ie,
      viewBox: "0 0 " + m + " " + Se
    }), fe = yn([], [se], a);
    fe.height = Se / 1e3, fe.style.width = ye, fe.style.height = ie, me.push({
      type: "elem",
      elem: fe
    });
  } else {
    if (me.push(Ci(h, v, i)), me.push(ka), l === null) {
      var Re = B - I - M + 2 * ds;
      me.push(Ai(d, Re, a));
    } else {
      var rt = (B - I - M - H) / 2 + 2 * ds;
      me.push(Ai(d, rt, a)), me.push(ka), me.push(Ci(l, v, i)), me.push(ka), me.push(Ai(d, rt, a));
    }
    me.push(ka), me.push(Ci(o, v, i));
  }
  var Ae = a.havingBaseStyle($e.TEXT), at = We({
    positionType: "bottom",
    positionData: Ie,
    children: me
  });
  return Vs(V(["delimsizing", "mult"], [at], Ae), $e.TEXT, a, s);
}, Ti = 80, $i = 0.08, Ii = function(e, t, n, a, i) {
  var s = Sf(e, a, n), o = new xn(e, s), l = new Qr([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: Z(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return yn(["hide-tail"], [l], i);
}, Sp = function(e, t) {
  var n = t.havingBaseSizing(), a = Ju("\\surd", e * n.sizeMultiplier, Xu, n), i = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l, d, h, f;
  return a.type === "small" ? (h = 1e3 + 1e3 * s + Ti, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), l = (1 + s + $i) / i, d = (1 + s) / i, o = Ii("sqrtMain", l, h, s, t), o.style.minWidth = "0.853em", f = 0.833 / i) : a.type === "large" ? (h = (1e3 + Ti) * q0[a.size], d = (q0[a.size] + s) / i, l = (q0[a.size] + s + $i) / i, o = Ii("sqrtSize" + a.size, l, h, s, t), o.style.minWidth = "1.02em", f = 1 / i) : (l = e + s + $i, d = e + s, h = Math.floor(1e3 * e + s) + Ti, o = Ii("sqrtTall", l, h, s, t), o.style.minWidth = "0.742em", f = 1.056), o.height = d, o.style.height = Z(l), {
    span: o,
    advanceWidth: f,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * i
  };
}, ju = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), _p = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), Zu = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), q0 = [0, 1.2, 1.8, 2.4, 3], Ku = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), ju.has(e) || Zu.has(e))
    return Uu(e, t, !1, n, a, i);
  if (_p.has(e))
    return Gu(e, q0[t], !1, n, a, i);
  throw new G("Illegal delimiter: '" + e + "'");
}, Cp = [{
  type: "small",
  style: $e.SCRIPTSCRIPT
}, {
  type: "small",
  style: $e.SCRIPT
}, {
  type: "small",
  style: $e.TEXT
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
}], Ap = [{
  type: "small",
  style: $e.SCRIPTSCRIPT
}, {
  type: "small",
  style: $e.SCRIPT
}, {
  type: "small",
  style: $e.TEXT
}, {
  type: "stack"
}], Xu = [{
  type: "small",
  style: $e.SCRIPTSCRIPT
}, {
  type: "small",
  style: $e.SCRIPT
}, {
  type: "small",
  style: $e.TEXT
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
}], Tp = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, Ju = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length; s++) {
    var o = n[s];
    if (o.type === "stack")
      break;
    var l = F0(e, Tp(o), "math"), d = l.height + l.depth;
    if (o.type === "small") {
      var h = a.havingBaseStyle(o.style);
      d *= h.sizeMultiplier;
    }
    if (d > t)
      return o;
  }
  return n[n.length - 1];
}, hs = function(e, t, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  Zu.has(e) ? o = Cp : ju.has(e) ? o = Xu : o = Ap;
  var l = Ju(e, t, o, a);
  return l.type === "small" ? wp(e, l.style, n, a, i, s) : l.type === "large" ? Uu(e, l.size, n, a, i, s) : Gu(e, t, n, a, i, s);
}, Ni = function(e, t, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, l = 901, d = 5 / a.fontMetrics().ptPerEm, h = Math.max(t - o, n + o), f = Math.max(
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
  return hs(e, f, !0, a, i, s);
}, Nl = {
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
}, $p = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function El(r) {
  return "isMiddle" in r;
}
function oi(r, e) {
  var t = ii(r);
  if (t && $p.has(t.text))
    return t;
  throw t ? new G("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new G("Invalid delimiter type '" + r.type + "'", r);
}
le({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  numArgs: 1,
  argTypes: ["primitive"],
  handler: (r, e) => {
    var t = oi(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Nl[r.funcName].size,
      mclass: Nl[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? V([r.mclass]) : Ku(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(lr(r.delim, r.mode));
    var t = new j("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = Z(q0[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Ml(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
le({
  type: "leftright-right",
  names: ["\\right"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = r.parser.gullet.macros.get("\\current@color");
    if (t && typeof t != "string")
      throw new G("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: oi(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
le({
  type: "leftright",
  names: ["\\left"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = oi(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = ze(n.parseFunction(), "leftright-right");
    return {
      type: "leftright",
      mode: n.mode,
      body: a,
      left: t.text,
      right: i.delim,
      rightColor: i.color
    };
  },
  htmlBuilder: (r, e) => {
    Ml(r);
    for (var t = Tt(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < t.length; s++) {
      var o = t[s];
      El(o) ? i = !0 : (n = Math.max(t[s].height, n), a = Math.max(t[s].depth, a));
    }
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var l;
    if (r.left === "." ? l = j0(e, ["mopen"]) : l = Ni(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(l), i)
      for (var d = 1; d < t.length; d++) {
        var h = t[d];
        if (El(h)) {
          var f = h.isMiddle;
          t[d] = Ni(f.delim, n, a, f.options, r.mode, []);
        }
      }
    var m;
    if (r.right === ".")
      m = j0(e, ["mclose"]);
    else {
      var v = r.rightColor ? e.withColor(r.rightColor) : e;
      m = Ni(r.right, n, a, v, r.mode, ["mclose"]);
    }
    return t.push(m), V(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Ml(r);
    var t = rr(r.body, e);
    if (r.left !== ".") {
      var n = new j("mo", [lr(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new j("mo", [lr(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Hs(t);
  }
});
le({
  type: "middle",
  names: ["\\middle"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = oi(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new G("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    return r.delim === "." ? t = j0(e, []) : (t = Ku(r.delim, 1, e, r.mode, []), t.isMiddle = {
      delim: r.delim,
      options: e
    }), t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? lr("|", "text") : lr(r.delim, r.mode), n = new j("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Ip = (r, e) => {
  var t = y0(Ue(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, s, o = en(r.body);
  if (n === "sout")
    i = V(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = pt({
      number: 0.6,
      unit: "pt"
    }, e), d = pt({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var f = t.height + t.depth + l + d;
    t.style.paddingLeft = Z(f / 2 + l);
    var m = Math.floor(1e3 * f * a), v = yf(m), y = new Qr([new xn("phase", v)], {
      width: "400em",
      height: Z(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = yn(["hide-tail"], [y], e), i.style.height = Z(f), s = t.depth + l + d;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var I, N, z = 0;
    /box/.test(n) ? (z = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
    ), I = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : z), N = I) : n === "angl" ? (z = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), I = 4 * z, N = Math.max(0, 0.25 - t.depth)) : (I = o ? 0.2 : 0, N = I), i = ap(t, n, I, N, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = Z(z)) : n === "angl" && z !== 0.049 && (i.style.borderTopWidth = Z(z), i.style.borderRightWidth = Z(z)), s = t.depth + N, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var $;
  if (r.backgroundColor)
    $ = We({
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
          elem: t,
          shift: 0
        }
      ]
    });
  else {
    var M = /cancel|phase/.test(n) ? ["svg-align"] : [];
    $ = We({
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
          elem: i,
          shift: s,
          wrapperClasses: M
        }
      ]
    });
  }
  return /cancel/.test(n) && ($.height = t.height, $.depth = t.depth), /cancel/.test(n) && !o ? V(["mord", "cancel-lap"], [$], e) : V(["mord"], [$], e);
}, Np = (r, e) => {
  var t, n = new j(r.label.includes("colorbox") ? "mpadded" : "menclose", [tt(r.body, e)]);
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
        var a = Math.max(
          e.fontMetrics().fboxrule,
          // default
          e.minRuleThickness
        );
        n.setAttribute("style", "border: " + Z(a) + " solid " + r.borderColor);
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
le({
  type: "enclose",
  names: ["\\colorbox"],
  numArgs: 2,
  allowedInText: !0,
  argTypes: ["color", "hbox"],
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = ze(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: s
    };
  },
  htmlBuilder: Ip,
  mathmlBuilder: Np
});
le({
  type: "enclose",
  names: ["\\fcolorbox"],
  numArgs: 3,
  allowedInText: !0,
  argTypes: ["color", "color", "hbox"],
  handler(r, e, t) {
    var {
      parser: n,
      funcName: a
    } = r, i = ze(e[0], "color-token").color, s = ze(e[1], "color-token").color, o = e[2];
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
le({
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
le({
  type: "enclose",
  names: ["\\cancel", "\\bcancel", "\\xcancel", "\\phase"],
  numArgs: 1,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
    };
  }
});
le({
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
    var a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
    };
  }
});
le({
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
var Yu = {};
function Rr(r) {
  for (var {
    type: e,
    names: t,
    props: n,
    handler: a,
    htmlBuilder: i,
    mathmlBuilder: s
  } = r, o = {
    type: e,
    numArgs: n.numArgs || 0,
    allowedInText: !1,
    numOptionalArgs: 0,
    handler: a
  }, l = 0; l < t.length; ++l)
    Yu[t[l]] = o;
  i && (U0[e] = i), s && (G0[e] = s);
}
var Qu = {};
function g(r, e) {
  Qu[r] = e;
}
class Ut {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Ut(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
  }
}
class Yt {
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new Yt(t, Ut.range(this, e));
  }
}
function zl(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var li = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new G("{" + r.envName + "} can be used only in display mode.");
}, Ep = /* @__PURE__ */ new Set(["gather", "gather*"]);
function Ws(r) {
  if (!r.includes("ed"))
    return !r.includes("*");
}
function _n(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
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
      throw new G("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var y = [], I = [y], N = [], z = [], $ = l != null ? [] : void 0;
  function M() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function H() {
    $ && (r.gullet.macros.get("\\df@tag") ? ($.push(r.subparse([new Yt("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : $.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (M(), z.push(zl(r)); ; ) {
    var q = r.parseExpression(!1, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup();
    var E = {
      type: "ordgroup",
      mode: r.mode,
      body: q
    };
    t && (E = {
      type: "styling",
      mode: r.mode,
      style: t,
      resetFont: !0,
      body: [E]
    }), y.push(E);
    var ae = r.fetch().text;
    if (ae === "&") {
      if (f && y.length === f) {
        if (d || o)
          throw new G("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (ae === "\\end") {
      H(), y.length === 1 && E.type === "styling" && E.body.length === 1 && E.body[0].type === "ordgroup" && E.body[0].body.length === 0 && (I.length > 1 || !h) && I.pop(), z.length < I.length + 1 && z.push([]);
      break;
    } else if (ae === "\\\\") {
      r.consume();
      var ne = void 0;
      r.gullet.future().text !== " " && (ne = r.parseSizeGroup(!0)), N.push(ne ? ne.value : null), H(), z.push(zl(r)), y = [], I.push(y), M();
    } else
      throw new G("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: s,
    body: I,
    cols: i,
    rowGaps: N,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: z,
    colSeparationType: o,
    tags: $,
    leqno: m
  };
}
function Us(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var Or = function(e, t) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(i), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
  ), f = 1 / t.fontMetrics().ptPerEm, m = 5 * f;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle($e.SCRIPT).sizeMultiplier;
    m = 0.2778 * (v / t.sizeMultiplier);
  }
  var y = e.colSeparationType === "CD" ? pt({
    number: 3,
    unit: "ex"
  }, t) : 12 * f, I = 3 * f, N = e.arraystretch * y, z = 0.7 * N, $ = 0.3 * N, M = 0;
  function H(Zt) {
    for (var dr = 0; dr < Zt.length; ++dr)
      dr > 0 && (M += 0.25), d.push({
        pos: M,
        isDashed: Zt[dr]
      });
  }
  for (H(s[0]), n = 0; n < e.body.length; ++n) {
    var q = e.body[n], E = z, ae = $;
    o < q.length && (o = q.length);
    var ne = {
      cells: new Array(q.length),
      height: 0,
      depth: 0,
      pos: 0
    };
    for (a = 0; a < q.length; ++a) {
      var B = Ue(q[a], t);
      ae < B.depth && (ae = B.depth), E < B.height && (E = B.height), ne.cells[a] = B;
    }
    var be = e.rowGaps[n], Ie = 0;
    be && (Ie = pt(be, t), Ie > 0 && (Ie += $, ae < Ie && (ae = Ie), Ie = 0)), e.addJot && n < e.body.length - 1 && (ae += I), ne.height = E, ne.depth = ae, M += E, ne.pos = M, M += ae + Ie, l[n] = ne, H(s[n + 1]);
  }
  var me = M / 2 + t.fontMetrics().axisHeight, qe = e.cols || [], Se = [], W, Y, ye = [];
  if (e.tags && e.tags.some((Zt) => Zt))
    for (n = 0; n < i; ++n) {
      var ie = l[n], se = ie.pos - me, fe = e.tags[n], Re = void 0;
      fe === !0 ? Re = V(["eqn-num"], [], t) : fe === !1 ? Re = V([], [], t) : Re = V([], Tt(fe, t, !0), t), Re.depth = ie.depth, Re.height = ie.height, ye.push({
        type: "elem",
        elem: Re,
        shift: se
      });
    }
  for (
    a = 0, Y = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || Y < qe.length;
    ++a, ++Y
  ) {
    for (var rt, Ae = qe[Y], at = !0; ((it = Ae) == null ? void 0 : it.type) === "separator"; ) {
      var it;
      if (at || (W = V(["arraycolsep"], []), W.style.width = Z(t.fontMetrics().doubleRuleSep), Se.push(W)), Ae.separator === "|" || Ae.separator === ":") {
        var zt = Ae.separator === "|" ? "solid" : "dashed", Oe = V(["vertical-separator"], [], t);
        Oe.style.height = Z(M), Oe.style.borderRightWidth = Z(h), Oe.style.borderRightStyle = zt, Oe.style.margin = "0 " + Z(-h / 2);
        var Fe = M - me;
        Fe && (Oe.style.verticalAlign = Z(-Fe)), Se.push(Oe);
      } else
        throw new G("Invalid separator type: " + Ae.separator);
      Y++, Ae = qe[Y], at = !1;
    }
    if (!(a >= o)) {
      var je = void 0;
      if (a > 0 || e.hskipBeforeAndAfter) {
        var oe, Dr;
        je = (oe = (Dr = Ae) == null ? void 0 : Dr.pregap) != null ? oe : m, je !== 0 && (W = V(["arraycolsep"], []), W.style.width = Z(je), Se.push(W));
      }
      var xr = [];
      for (n = 0; n < i; ++n) {
        var _t = l[n], cr = _t.cells[a];
        if (cr) {
          var Lr = _t.pos - me;
          cr.depth = _t.depth, cr.height = _t.height, xr.push({
            type: "elem",
            elem: cr,
            shift: Lr
          });
        }
      }
      var yr = We({
        positionType: "individualShift",
        children: xr
      }), Fr = V(["col-align-" + (((rt = Ae) == null ? void 0 : rt.align) || "c")], [yr]);
      if (Se.push(Fr), a < o - 1 || e.hskipBeforeAndAfter) {
        var Gt, Rt;
        je = (Gt = (Rt = Ae) == null ? void 0 : Rt.postgap) != null ? Gt : m, je !== 0 && (W = V(["arraycolsep"], []), W.style.width = Z(je), Se.push(W));
      }
    }
  }
  var jt = V(["mtable"], Se);
  if (d.length > 0) {
    for (var Cn = x0("hline", t, h), nn = x0("hdashline", t, h), kr = [{
      type: "elem",
      elem: jt,
      shift: 0
    }]; d.length > 0; ) {
      var Ot = d.pop(), Pr = Ot.pos - me;
      Ot.isDashed ? kr.push({
        type: "elem",
        elem: nn,
        shift: Pr
      }) : kr.push({
        type: "elem",
        elem: Cn,
        shift: Pr
      });
    }
    jt = We({
      positionType: "individualShift",
      children: kr
    });
  }
  if (ye.length === 0)
    return V(["mord"], [jt], t);
  var Vt = We({
    positionType: "individualShift",
    children: ye
  }), ur = V(["tag"], [Vt], t);
  return rn([jt, ur]);
}, Mp = {
  c: "center ",
  l: "left ",
  r: "right "
}, Br = function(e, t) {
  for (var n = [], a = new j("mtd", [], ["mtr-glue"]), i = new j("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], d = 0; d < o.length; d++)
      l.push(new j("mtd", [tt(o[d], t)]));
    e.tags && e.tags[s] && (l.unshift(a), l.push(a), e.leqno ? l.unshift(i) : l.push(i)), n.push(new j("mtr", l));
  }
  var h = new j("mtable", n), f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", Z(f));
  var m = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var y = e.cols, I = "", N = !1, z = 0, $ = y.length;
    y[0].type === "separator" && (m += "top ", z = 1), y[y.length - 1].type === "separator" && (m += "bottom ", $ -= 1);
    for (var M = z; M < $; M++) {
      var H = y[M];
      H.type === "align" ? (v += Mp[H.align], N && (I += "none "), N = !0) : H.type === "separator" && N && (I += H.separator === "|" ? "solid " : "dashed ", N = !1);
    }
    h.setAttribute("columnalign", v.trim()), /[sd]/.test(I) && h.setAttribute("columnlines", I.trim());
  }
  if (e.colSeparationType === "align") {
    for (var q = e.cols || [], E = "", ae = 1; ae < q.length; ae++)
      E += ae % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", E.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var ne = "", B = e.hLinesBeforeRow;
  m += B[0].length > 0 ? "left " : "", m += B[B.length - 1].length > 0 ? "right " : "";
  for (var be = 1; be < B.length - 1; be++)
    ne += B[be].length === 0 ? "none " : B[be][0] ? "dashed " : "solid ";
  return /[sd]/.test(ne) && h.setAttribute("rowlines", ne.trim()), m !== "" && (h = new j("menclose", [h]), h.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (h = new j("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, e1 = function(e, t) {
  e.envName.includes("ed") || li(e);
  var n = [], a = e.envName === "split", i = _n(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: a ? void 0 : Ws(e.envName),
    emptySingleRow: !0,
    colSeparationType: e.envName.includes("at") ? "alignat" : "align",
    maxNumCols: a ? 2 : void 0,
    leqno: e.parser.settings.leqno
  }, "display"), s = 0, o = 0, l = {
    type: "ordgroup",
    mode: e.mode,
    body: []
  };
  if (t[0] && t[0].type === "ordgroup") {
    for (var d = "", h = 0; h < t[0].body.length; h++) {
      var f = ze(t[0].body[h], "textord");
      d += f.text;
    }
    s = Number(d), o = s * 2;
  }
  var m = !o;
  i.body.forEach(function(N) {
    for (var z = 1; z < N.length; z += 2) {
      var $ = ze(N[z], "styling"), M = ze($.body[0], "ordgroup");
      M.body.unshift(l);
    }
    if (m)
      o < N.length && (o = N.length);
    else {
      var H = N.length / 2;
      if (s < H)
        throw new G("Too many math in a row: " + ("expected " + s + ", but got " + H), N[0]);
    }
  });
  for (var v = 0; v < o; ++v) {
    var y = "r", I = 0;
    v % 2 === 1 ? y = "l" : v > 0 && m && (I = 1), n[v] = {
      type: "align",
      align: y,
      pregap: I,
      postgap: 0
    };
  }
  return i.colSeparationType = m ? "align" : "alignat", i;
};
Rr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = ii(e[0]), n = t ? [e[0]] : ze(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = ai(s), l = o.text;
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
      throw new G("Unknown column alignment: " + l, s);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return _n(r.parser, i, Us(r.envName));
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
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
      var a = r.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, !"lcr".includes(t))
          throw new G("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = _n(r.parser, n, Us(r.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
    return i.cols = new Array(s).fill({
      type: "align",
      align: t
    }), e ? {
      type: "leftright",
      mode: r.mode,
      body: [i],
      left: e[0],
      right: e[1],
      rightColor: void 0
      // \right uninfluenced by \color in array
    } : i;
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = _n(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = ii(e[0]), n = t ? [e[0]] : ze(e[0], "ordgroup").body, a = n.map(function(o) {
      var l = ai(o), d = l.text;
      if ("lc".includes(d))
        return {
          type: "align",
          align: d
        };
      throw new G("Unknown column alignment: " + d, o);
    });
    if (a.length > 1)
      throw new G("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    }, s = _n(r.parser, i, "script");
    if (s.body.length > 0 && s.body[0].length > 1)
      throw new G("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
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
    }, t = _n(r.parser, e, Us(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.includes("r") ? "." : "\\{",
      right: r.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: e1,
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Ep.has(r.envName) && li(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Ws(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return _n(r.parser, e, "display");
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: e1,
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    li(r);
    var e = {
      autoTag: Ws(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return _n(r.parser, e, "display");
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
Rr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return li(r), mp(r.parser);
  },
  htmlBuilder: Or,
  mathmlBuilder: Br
});
g("\\nonumber", "\\gdef\\@eqnsw{0}");
g("\\notag", "\\nonumber");
le({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\hline", "\\hdashline"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !0,
  handler(r, e) {
    throw new G(r.funcName + " valid only within array environment");
  }
});
var Rl = Yu;
le({
  type: "environment",
  names: ["\\begin", "\\end"],
  numArgs: 1,
  argTypes: ["text"],
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    if (a.type !== "ordgroup")
      throw new G("Invalid environment name", a);
    for (var i = "", s = 0; s < a.body.length; ++s)
      i += ze(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!Rl.hasOwnProperty(i))
        throw new G("No such environment: " + i, a);
      var o = Rl[i], {
        args: l,
        optArgs: d
      } = t.parseArguments("\\begin{" + i + "}", o), h = {
        mode: t.mode,
        envName: i,
        parser: t
      }, f = o.handler(h, l, d);
      t.expect("\\end", !1);
      var m = t.nextToken, v = ze(t.parseFunction(), "environment");
      if (v.name !== i)
        throw new G("Mismatch: \\begin{" + i + "} matched by \\end{" + v.name + "}", m);
      return f;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var zp = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return Ue(r.body, n);
}, Rp = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return tt(r.body, n);
}, Ol = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak"
};
le({
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
    } = r, a = Wa(e[0]), i = n in Ol ? Ol[n] : n;
    return {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: zp,
  mathmlBuilder: Rp
});
le({
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
      mclass: si(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: en(n)
    };
  }
});
le({
  type: "font",
  names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
  numArgs: 0,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      breakOnTokenText: a
    } = r, {
      mode: i
    } = t, s = t.parseExpression(!0, a);
    return {
      type: "font",
      mode: i,
      font: "math" + n.slice(1),
      body: {
        type: "ordgroup",
        mode: t.mode,
        body: s
      }
    };
  }
});
var Op = (r, e) => {
  var t = e.style, n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var s = Ue(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  i = e.havingStyle(a);
  var d = Ue(r.denom, i, e), h, f, m;
  r.hasBarLine ? (r.barSize ? (f = pt(r.barSize, e), h = x0("frac-line", e, f)) : h = x0("frac-line", e), f = h.height, m = h.height) : (h = null, f = 0, m = e.fontMetrics().defaultRuleThickness);
  var v, y, I;
  t.size === $e.DISPLAY.size ? (v = e.fontMetrics().num1, f > 0 ? y = 3 * m : y = 7 * m, I = e.fontMetrics().denom1) : (f > 0 ? (v = e.fontMetrics().num2, y = m) : (v = e.fontMetrics().num3, y = 3 * m), I = e.fontMetrics().denom2);
  var N;
  if (h) {
    var $ = e.fontMetrics().axisHeight;
    v - s.depth - ($ + 0.5 * f) < y && (v += y - (v - s.depth - ($ + 0.5 * f))), $ - 0.5 * f - (d.height - I) < y && (I += y - ($ - 0.5 * f - (d.height - I)));
    var M = -($ - 0.5 * f);
    N = We({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: I
      }, {
        type: "elem",
        elem: h,
        shift: M
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  } else {
    var z = v - s.depth - (d.height - I);
    z < y && (v += 0.5 * (y - z), I += 0.5 * (y - z)), N = We({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: I
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  }
  i = e.havingStyle(t), N.height *= i.sizeMultiplier / e.sizeMultiplier, N.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var H;
  t.size === $e.DISPLAY.size ? H = e.fontMetrics().delim1 : t.size === $e.SCRIPTSCRIPT.size ? H = e.havingStyle($e.SCRIPT).fontMetrics().delim2 : H = e.fontMetrics().delim2;
  var q, E;
  return r.leftDelim == null ? q = j0(e, ["mopen"]) : q = hs(r.leftDelim, H, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? E = V([]) : r.rightDelim == null ? E = j0(e, ["mclose"]) : E = hs(r.rightDelim, H, !0, e.havingStyle(t), r.mode, ["mclose"]), V(["mord"].concat(i.sizingClasses(e)), [q, V(["mfrac"], [N]), E], e);
}, Bp = (r, e) => {
  var t = new j("mfrac", [tt(r.numer, e), tt(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = pt(r.barSize, e);
    t.setAttribute("linethickness", Z(n));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var a = [];
    if (r.leftDelim != null) {
      var i = new j("mo", [new kt(r.leftDelim.replace("\\", ""))]);
      i.setAttribute("fence", "true"), a.push(i);
    }
    if (a.push(t), r.rightDelim != null) {
      var s = new j("mo", [new kt(r.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), a.push(s);
    }
    return Hs(a);
  }
  return t;
}, t1 = (r, e) => {
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
le({
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
    } = r, a = e[0], i = e[1], s, o = null, l = null;
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
    return d || n.startsWith("\\d") ? h = "display" : n.startsWith("\\t") && (h = "text"), t1({
      type: "genfrac",
      mode: t.mode,
      numer: a,
      denom: i,
      continued: d,
      hasBarLine: s,
      leftDelim: o,
      rightDelim: l,
      barSize: null
    }, h);
  },
  htmlBuilder: Op,
  mathmlBuilder: Bp
});
le({
  type: "infix",
  names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
  numArgs: 0,
  infix: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t,
      token: n
    } = r, a;
    switch (t) {
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
var Bl = ["display", "text", "script", "scriptscript"], Dl = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
le({
  type: "genfrac",
  names: ["\\genfrac"],
  numArgs: 6,
  allowedInArgument: !0,
  argTypes: ["math", "math", "size", "text", "math", "math"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], a = e[5], i = Wa(e[0]), s = i.type === "atom" && i.family === "open" ? Dl(i.text) : null, o = Wa(e[1]), l = o.type === "atom" && o.family === "close" ? Dl(o.text) : null, d = ze(e[2], "size"), h, f = null;
    d.isBlank ? h = !0 : (f = d.value, h = f.number > 0);
    var m = null, v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var y = ze(v.body[0], "textord");
        m = Bl[Number(y.text)];
      }
    } else
      v = ze(v, "textord"), m = Bl[Number(v.text)];
    return t1({
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: f,
      leftDelim: s,
      rightDelim: l
    }, m);
  }
});
le({
  type: "infix",
  names: ["\\above"],
  numArgs: 1,
  argTypes: ["size"],
  infix: !0,
  handler(r, e) {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: ze(e[0], "size").value,
      token: a
    };
  }
});
le({
  type: "genfrac",
  names: ["\\\\abovefrac"],
  numArgs: 3,
  argTypes: ["math", "size", "math"],
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0], i = ze(e[1], "infix").size;
    if (!i)
      throw new Error("\\\\abovefrac expected size, but got " + String(i));
    var s = e[2], o = i.number > 0;
    return {
      type: "genfrac",
      mode: t.mode,
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
var r1 = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? Ue(r.sup, e.havingStyle(t.sup()), e) : Ue(r.sub, e.havingStyle(t.sub()), e), a = ze(r.base, "horizBrace")) : a = ze(r, "horizBrace");
  var i = Ue(a.base, e.havingBaseStyle($e.DISPLAY)), s = ni(a, e), o;
  if (a.isOver ? o = We({
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
  }) : o = We({
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
    var l = V(["minner", a.isOver ? "mover" : "munder"], [o], e);
    a.isOver ? o = We({
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
    }) : o = We({
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
  return V(["minner", a.isOver ? "mover" : "munder"], [o], e);
}, Dp = (r, e) => {
  var t = ri(r.label);
  return new j(r.isOver ? "mover" : "munder", [tt(r.base, e), t]);
};
le({
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
  htmlBuilder: r1,
  mathmlBuilder: Dp
});
le({
  type: "href",
  names: ["\\href"],
  numArgs: 2,
  argTypes: ["url", "original"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = e[1], a = ze(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: yt(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.body, e, !1);
    return Hf(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = kn(r.body, e);
    return t instanceof j || (t = new j("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
le({
  type: "href",
  names: ["\\url"],
  numArgs: 1,
  argTypes: ["url"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t
    } = r, n = ze(e[0], "url").url;
    if (!t.settings.isTrusted({
      command: "\\url",
      url: n
    }))
      return t.formatUnsupportedCmd("\\url");
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
      mode: t.mode,
      font: "\\texttt",
      body: a
    };
    return {
      type: "href",
      mode: t.mode,
      href: n,
      body: yt(o)
    };
  }
});
le({
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
      body: yt(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Tt(r.body, e.withFont(""), !1);
    return rn(t);
  },
  mathmlBuilder(r, e) {
    return new j("mrow", rr(r.body, e.withFont("")));
  }
});
le({
  type: "html",
  names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
  numArgs: 2,
  argTypes: ["raw", "original"],
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n,
      token: a
    } = r, i = ze(e[0], "raw").string, s = e[1];
    t.settings.strict && t.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
    var o, l = {};
    switch (n) {
      case "\\htmlClass":
        l.class = i, o = {
          command: "\\htmlClass",
          class: i
        };
        break;
      case "\\htmlId":
        l.id = i, o = {
          command: "\\htmlId",
          id: i
        };
        break;
      case "\\htmlStyle":
        l.style = i, o = {
          command: "\\htmlStyle",
          style: i
        };
        break;
      case "\\htmlData": {
        for (var d = i.split(","), h = 0; h < d.length; h++) {
          var f = d[h], m = f.indexOf("=");
          if (m < 0)
            throw new G("\\htmlData key/value '" + f + "' missing equals sign");
          var v = f.slice(0, m), y = f.slice(m + 1);
          l["data-" + v.trim()] = y;
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
      body: yt(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = V(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => kn(r.body, e)
});
le({
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
      html: yt(e[0]),
      mathml: yt(e[1])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.html, e, !1);
    return rn(t);
  },
  mathmlBuilder: (r, e) => kn(r.mathml, e)
});
var Ei = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new G("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!Cu(n))
    throw new G("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
le({
  type: "includegraphics",
  names: ["\\includegraphics"],
  numArgs: 1,
  numOptionalArgs: 1,
  argTypes: ["raw", "url"],
  allowedInText: !1,
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = {
      number: 0,
      unit: "em"
    }, i = {
      number: 0.9,
      unit: "em"
    }, s = {
      number: 0,
      unit: "em"
    }, o = "";
    if (t[0])
      for (var l = ze(t[0], "raw").string, d = l.split(","), h = 0; h < d.length; h++) {
        var f = d[h].split("=");
        if (f.length === 2) {
          var m = f[1].trim();
          switch (f[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              a = Ei(m);
              break;
            case "height":
              i = Ei(m);
              break;
            case "totalheight":
              s = Ei(m);
              break;
            default:
              throw new G("Invalid key: '" + f[0] + "' in \\includegraphics.");
          }
        }
      }
    var v = ze(e[0], "url").url;
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
  htmlBuilder: (r, e) => {
    var t = pt(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = pt(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = pt(r.width, e));
    var i = {
      height: Z(t + n)
    };
    a > 0 && (i.width = Z(a)), n > 0 && (i.verticalAlign = Z(-n));
    var s = new If(r.src, r.alt, i);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new j("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = pt(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = pt(r.totalheight, e) - n, t.setAttribute("valign", Z(-a))), t.setAttribute("height", Z(n + a)), r.width.number > 0) {
      var i = pt(r.width, e);
      t.setAttribute("width", Z(i));
    }
    return t.setAttribute("src", r.src), t;
  }
});
le({
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
    } = r, a = ze(e[0], "size");
    if (t.settings.strict) {
      var i = n[1] === "m", s = a.value.unit === "mu";
      i ? (s || t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, " + ("not " + a.value.unit + " units")), t.mode !== "math" && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : s && t.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units");
    }
    return {
      type: "kern",
      mode: t.mode,
      dimension: a.value
    };
  },
  htmlBuilder(r, e) {
    return Eu(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = pt(r.dimension, e);
    return new Du(t);
  }
});
le({
  type: "lap",
  names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
  numArgs: 1,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "lap",
      mode: t.mode,
      alignment: n.slice(5),
      body: a
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    r.alignment === "clap" ? (t = V([], [Ue(r.body, e)]), t = V(["inner"], [t], e)) : t = V(["inner"], [Ue(r.body, e)]);
    var n = V(["fix"], []), a = V([r.alignment], [t, n], e), i = V(["strut"]);
    return i.style.height = Z(a.height + a.depth), a.depth && (i.style.verticalAlign = Z(-a.depth)), a.children.unshift(i), a = V(["thinbox"], [a], e), V(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new j("mpadded", [tt(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
le({
  type: "styling",
  names: ["\\(", "$"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(r, e) {
    var {
      funcName: t,
      parser: n
    } = r, a = n.mode;
    n.switchMode("math");
    var i = t === "\\(" ? "\\)" : "$", s = n.parseExpression(!1, i);
    return n.expect(i), n.switchMode(a), {
      type: "styling",
      mode: n.mode,
      style: "text",
      resetFont: !0,
      body: s
    };
  }
});
le({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(r, e) {
    throw new G("Mismatched " + r.funcName);
  }
});
var Ll = (r, e) => {
  switch (e.style.size) {
    case $e.DISPLAY.size:
      return r.display;
    case $e.TEXT.size:
      return r.text;
    case $e.SCRIPT.size:
      return r.script;
    case $e.SCRIPTSCRIPT.size:
      return r.scriptscript;
    default:
      return r.text;
  }
};
le({
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
      display: yt(e[0]),
      text: yt(e[1]),
      script: yt(e[2]),
      scriptscript: yt(e[3])
    };
  },
  htmlBuilder: (r, e) => {
    var t = Ll(r, e), n = Tt(t, e, !1);
    return rn(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Ll(r, e);
    return kn(t, e);
  }
});
var n1 = (r, e, t, n, a, i, s) => {
  r = V([], [r]);
  var o = t && en(t), l, d;
  if (e) {
    var h = Ue(e, n.havingStyle(a.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var f = Ue(t, n.havingStyle(a.sub()), n);
    l = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height)
    };
  }
  var m;
  if (d && l) {
    var v = n.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + r.depth + s;
    m = We({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: Z(-i)
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
        marginLeft: Z(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else if (l) {
    var y = r.height - s;
    m = We({
      positionType: "top",
      positionData: y,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: Z(-i)
      }, {
        type: "kern",
        size: l.kern
      }, {
        type: "elem",
        elem: r
      }]
    });
  } else if (d) {
    var I = r.depth + s;
    m = We({
      positionType: "bottom",
      positionData: I,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: Z(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else
    return r;
  var N = [m];
  if (l && i !== 0 && !o) {
    var z = V(["mspace"], [], n);
    z.style.marginRight = Z(i), N.unshift(z);
  }
  return V(["mop", "op-limits"], N, n);
}, a1 = /* @__PURE__ */ new Set(["\\smallint"]), i1 = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = ze(r.base, "op"), a = !0) : i = ze(r, "op");
  var s = e.style, o = !1;
  s.size === $e.DISPLAY.size && i.symbol && !a1.has(i.name) && (o = !0);
  var l, d;
  if (i.symbol) {
    var h = o ? "Size2-Regular" : "Size1-Regular", f = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (f = i.name.slice(1), i.name = f === "oiint" ? "\\iint" : "\\iiint"), l = Pt(i.name, h, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), d = l.italic, f.length > 0) {
      var m = zu(f + "Size" + (o ? "2" : "1"), e);
      l = We({
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
      }), i.name = "\\" + f, l.classes.unshift("mop"), l.italic = d;
    }
  } else if (i.body) {
    var v = Tt(i.body, e, !0);
    v.length === 1 && v[0] instanceof Qt ? (l = v[0], l.classes[0] = "mop") : l = V(["mop"], v, e);
  } else {
    for (var y = [], I = 1; I < i.name.length; I++)
      y.push(Fs(i.name[I], i.mode, e));
    l = V(["mop"], y, e);
  }
  var N = 0, z = 0;
  if ((l instanceof Qt || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift) {
    var $;
    N = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, z = ($ = l.italic) != null ? $ : 0;
  }
  return a ? n1(l, t, n, e, s, z, N) : (N && (l.style.position = "relative", l.style.top = Z(N)), l);
}, Lp = (r, e) => {
  var t;
  if (r.symbol)
    t = new j("mo", [lr(r.name, r.mode)]), a1.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new j("mo", rr(r.body, e));
  else {
    t = new j("mi", [new kt(r.name.slice(1))]);
    var n = new j("mo", [lr("⁡", "text")]);
    r.parentIsSupSub ? t = new j("mrow", [t, n]) : t = Bu([t, n]);
  }
  return t;
}, Fp = {
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
le({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  numArgs: 0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = n;
    return a.length === 1 && (a = Fp[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: i1,
  mathmlBuilder: Lp
});
le({
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
      body: yt(n)
    };
  }
});
var Pp = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
le({
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
le({
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
le({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  numArgs: 0,
  allowedInArgument: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = Pp[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  }
});
var s1 = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = ze(r.base, "operatorname"), a = !0) : i = ze(r, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((f) => {
      var m = "text" in f ? f.text : void 0;
      return typeof m == "string" ? {
        type: "textord",
        mode: f.mode,
        text: m
      } : f;
    }), l = Tt(o, e.withFont("mathrm"), !0), d = 0; d < l.length; d++) {
      var h = l[d];
      h instanceof Qt && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = V(["mop"], l, e);
  } else
    s = V(["mop"], [], e);
  return a ? n1(s, t, n, e, e.style, 0, 0) : s;
}, Hp = (r, e) => {
  for (var t = rr(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof Du)) if (i instanceof j)
      switch (i.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof kt ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
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
    t = [new kt(o)];
  }
  var l = new j("mi", t);
  l.setAttribute("mathvariant", "normal");
  var d = new j("mo", [lr("⁡", "text")]);
  return r.parentIsSupSub ? new j("mrow", [l, d]) : Bu([l, d]);
};
le({
  type: "operatorname",
  names: ["\\operatorname@", "\\operatornamewithlimits"],
  numArgs: 1,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, a = e[0];
    return {
      type: "operatorname",
      mode: t.mode,
      body: yt(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: s1,
  mathmlBuilder: Hp
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
Kn({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? rn(Tt(r.body, e, !1)) : V(["mord"], Tt(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return kn(r.body, e, !0);
  }
});
le({
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
    var t = Ue(r.body, e.havingCrampedStyle()), n = x0("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = We({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
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
    return V(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new j("mo", [new kt("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new j("mover", [tt(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
le({
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
      body: yt(n)
    };
  },
  htmlBuilder: (r, e) => {
    var t = Tt(r.body, e.withPhantom(), !1);
    return rn(t);
  },
  mathmlBuilder: (r, e) => {
    var t = rr(r.body, e);
    return new j("mphantom", t);
  }
});
g("\\hphantom", "\\smash{\\phantom{#1}}");
le({
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
    var t = V(["inner"], [Ue(r.body, e.withPhantom())]), n = V(["fix"], []);
    return V(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = rr(yt(r.body), e), n = new j("mphantom", t), a = new j("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
  }
});
le({
  type: "raisebox",
  names: ["\\raisebox"],
  numArgs: 2,
  argTypes: ["size", "hbox"],
  allowedInText: !0,
  handler(r, e) {
    var {
      parser: t
    } = r, n = ze(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = Ue(r.body, e), n = pt(r.dy, e);
    return We({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new j("mpadded", [tt(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
le({
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
le({
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
    } = r, a = t[0], i = ze(e[0], "size"), s = ze(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && ze(a, "size").value,
      width: i.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = V(["mord", "rule"], [], e), n = pt(r.width, e), a = pt(r.height, e), i = r.shift ? pt(r.shift, e) : 0;
    return t.style.borderRightWidth = Z(n), t.style.borderTopWidth = Z(a), t.style.bottom = Z(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = pt(r.width, e), n = pt(r.height, e), a = r.shift ? pt(r.shift, e) : 0, i = e.color && e.getColor() || "black", s = new j("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", Z(t)), s.setAttribute("height", Z(n));
    var o = new j("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", Z(a)) : (o.setAttribute("height", Z(a)), o.setAttribute("depth", Z(-a))), o.setAttribute("voffset", Z(a)), o;
  }
});
function o1(r, e, t) {
  for (var n = Tt(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return rn(n);
}
var Fl = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], qp = (r, e) => {
  var t = e.havingSize(r.size);
  return o1(r.body, t, e);
};
le({
  type: "sizing",
  names: Fl,
  numArgs: 0,
  allowedInText: !0,
  handler: (r, e) => {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!1, t);
    return {
      type: "sizing",
      mode: a.mode,
      // Figure out what size to use based on the list of functions above
      size: Fl.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: qp,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = rr(r.body, t), a = new j("mstyle", n);
    return a.setAttribute("mathsize", Z(t.sizeMultiplier)), a;
  }
});
le({
  type: "smash",
  names: ["\\smash"],
  numArgs: 1,
  numOptionalArgs: 1,
  allowedInText: !0,
  handler: (r, e, t) => {
    var {
      parser: n
    } = r, a = !1, i = !1, s = t[0] && ze(t[0], "ordgroup");
    if (s)
      for (var o, l = 0; l < s.body.length; ++l) {
        var d = s.body[l];
        if (o = ai(d).text, o === "t")
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
  htmlBuilder: (r, e) => {
    var t = V([], [Ue(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth)
      return V(["mord", "smash"], [t], e);
    if (t.children)
      for (var n = 0; n < t.children.length; n++)
        r.smashHeight && (t.children[n].height = 0), r.smashDepth && (t.children[n].depth = 0);
    var a = We({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    });
    return V(["mord"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new j("mpadded", [tt(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
le({
  type: "sqrt",
  names: ["\\sqrt"],
  numArgs: 1,
  numOptionalArgs: 1,
  handler(r, e, t) {
    var {
      parser: n
    } = r, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(r, e) {
    var t = Ue(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = y0(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < $e.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = t.height + t.depth + s + a, {
      span: l,
      ruleWidth: d,
      advanceWidth: h
    } = Sp(o, e), f = l.height - d;
    f > t.height + t.depth + s && (s = (s + f - t.height - t.depth) / 2);
    var m = l.height - t.height - s - d;
    t.style.paddingLeft = Z(h);
    var v = We({
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
      var y = e.havingStyle($e.SCRIPTSCRIPT), I = Ue(r.index, y, e), N = 0.6 * (v.height - v.depth), z = We({
        positionType: "shift",
        positionData: -N,
        children: [{
          type: "elem",
          elem: I
        }]
      }), $ = V(["root"], [z]);
      return V(["mord", "sqrt"], [$, v], e);
    } else
      return V(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new j("mroot", [tt(t, e), tt(n, e)]) : new j("msqrt", [tt(t, e)]);
  }
});
var fs = {
  display: $e.DISPLAY,
  text: $e.TEXT,
  script: $e.SCRIPT,
  scriptscript: $e.SCRIPTSCRIPT
};
function Vp(r) {
  return r in fs;
}
le({
  type: "styling",
  names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
  numArgs: 0,
  allowedInText: !0,
  primitive: !0,
  handler(r, e) {
    var {
      breakOnTokenText: t,
      funcName: n,
      parser: a
    } = r, i = a.parseExpression(!0, t), s = n.slice(1, n.length - 5);
    if (!Vp(s))
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
  htmlBuilder(r, e) {
    var t = fs[r.style], n = e.havingStyle(t);
    return r.resetFont && (n = n.withFont("")), o1(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = fs[r.style], n = e.havingStyle(t);
    r.resetFont && (n = n.withFont(""));
    var a = rr(r.body, n), i = new j("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var Wp = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === $e.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? i1 : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === $e.DISPLAY.size || n.limits);
      return i ? s1 : null;
    } else {
      if (n.type === "accent")
        return en(n.base) ? Hu : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? r1 : null;
      } else
        return null;
    }
  else return null;
};
Kn({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = Wp(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, s = Ue(n, e), o, l, d = e.fontMetrics(), h = 0, f = 0, m = n && en(n);
    if (a) {
      var v = e.havingStyle(e.style.sup());
      o = Ue(a, v, e), m || (h = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var y = e.havingStyle(e.style.sub());
      l = Ue(i, y, e), m || (f = s.depth + y.fontMetrics().subDrop * y.sizeMultiplier / e.sizeMultiplier);
    }
    var I;
    e.style === $e.DISPLAY ? I = d.sup1 : e.style.cramped ? I = d.sup3 : I = d.sup2;
    var N = e.sizeMultiplier, z = Z(0.5 / d.ptPerEm / N), $ = null;
    if (l) {
      var M = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      if (s instanceof Qt || M) {
        var H;
        $ = Z(-((H = s.italic) != null ? H : 0));
      }
    }
    var q;
    if (o && l) {
      h = Math.max(h, I, o.depth + 0.25 * d.xHeight), f = Math.max(f, d.sub2);
      var E = d.defaultRuleThickness, ae = 4 * E;
      if (h - o.depth - (l.height - f) < ae) {
        f = ae - (h - o.depth) + l.height;
        var ne = 0.8 * d.xHeight - (h - o.depth);
        ne > 0 && (h += ne, f -= ne);
      }
      var B = [{
        type: "elem",
        elem: l,
        shift: f,
        marginRight: z,
        marginLeft: $
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: z
      }];
      q = We({
        positionType: "individualShift",
        children: B
      });
    } else if (l) {
      f = Math.max(f, d.sub1, l.height - 0.8 * d.xHeight);
      var be = [{
        type: "elem",
        elem: l,
        marginLeft: $,
        marginRight: z
      }];
      q = We({
        positionType: "shift",
        positionData: f,
        children: be
      });
    } else if (o)
      h = Math.max(h, I, o.depth + 0.25 * d.xHeight), q = We({
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
    var Ie = ls(s, "right") || "mord";
    return V([Ie], [s, V(["msupsub"], [q])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [tt(r.base, e)];
    r.sub && i.push(tt(r.sub, e)), r.sup && i.push(tt(r.sup, e));
    var s;
    if (t)
      s = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var d = r.base;
        d && d.type === "op" && d.limits && e.style === $e.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === $e.DISPLAY || d.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === $e.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === $e.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === $e.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === $e.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new j(s, i);
  }
});
Kn({
  type: "atom",
  htmlBuilder(r, e) {
    return Fs(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new j("mo", [lr(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = qs(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var l1 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
Kn({
  type: "mathord",
  htmlBuilder(r, e) {
    return ti(r, e);
  },
  mathmlBuilder(r, e) {
    var t = new j("mi", [lr(r.text, r.mode, e)]), n = qs(r, e) || "italic";
    return n !== l1[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
Kn({
  type: "textord",
  htmlBuilder(r, e) {
    return ti(r, e);
  },
  mathmlBuilder(r, e) {
    var t = lr(r.text, r.mode, e), n = qs(r, e) || "normal", a;
    return r.mode === "text" ? a = new j("mtext", [t]) : /[0-9]/.test(r.text) ? a = new j("mn", [t]) : r.text === "\\prime" ? a = new j("mo", [t]) : a = new j("mi", [t]), n !== l1[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var Mi = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, zi = {
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
Kn({
  type: "spacing",
  htmlBuilder(r, e) {
    if (zi.hasOwnProperty(r.text)) {
      var t = zi[r.text].className || "";
      if (r.mode === "text") {
        var n = ti(r, e);
        return n.classes.push(t), n;
      } else
        return V(["mspace", t], [Fs(r.text, r.mode, e)], e);
    } else {
      if (Mi.hasOwnProperty(r.text))
        return V(["mspace", Mi[r.text]], [], e);
      throw new G('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (zi.hasOwnProperty(r.text))
      t = new j("mtext", [new kt(" ")]);
    else {
      if (Mi.hasOwnProperty(r.text))
        return new j("mspace");
      throw new G('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Pl = () => {
  var r = new j("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
Kn({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new j("mtable", [new j("mtr", [Pl(), new j("mtd", [kn(r.body, e)]), Pl(), new j("mtd", [kn(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Hl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, ql = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Up = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Vl = (r, e) => {
  var t = r.font;
  if (t) {
    if (Hl[t])
      return e.withTextFontFamily(Hl[t]);
    if (ql[t])
      return e.withTextFontWeight(ql[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Up[t]);
};
le({
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
    } = r, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: yt(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = Vl(r, e), n = Tt(r.body, t, !0);
    return V(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = Vl(r, e);
    return kn(r.body, t);
  }
});
le({
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
    var t = Ue(r.body, e), n = x0("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = We({
      positionType: "top",
      positionData: t.height,
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
        elem: t
      }]
    });
    return V(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new j("mo", [new kt("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new j("munder", [tt(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
le({
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
    var t = Ue(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return We({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new j("mpadded", [tt(r.body, e)], ["vcenter"]);
    return new j("mrow", [t]);
  }
});
le({
  type: "verb",
  names: ["\\verb"],
  numArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    throw new G("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = Wl(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var s = t[i];
      s === "~" && (s = "\\textasciitilde"), n.push(Pt(s, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return V(["mord", "text"].concat(a.sizingClasses(e)), Nu(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new kt(Wl(r)), n = new j("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var Wl = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), bn = Ru, c1 = `[ \r
	]`, Gp = "\\\\[a-zA-Z@]+", jp = "\\\\[^\uD800-\uDFFF]", Zp = "(" + Gp + ")" + c1 + "*", Kp = `\\\\(
|[ \r	]+
?)[ \r	]*`, ps = "[̀-ͯ]", Xp = new RegExp(ps + "+$"), Jp = "(" + c1 + "+)|" + // whitespace
(Kp + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(ps + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(ps + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + Zp) + // \macroName + spaces
("|" + jp + ")");
class Ul {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(Jp, "g"), this.catcodes = {
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
      return new Yt("EOF", new Ut(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new G("Unexpected character: '" + e[t] + "'", new Yt(e[t], new Ut(this, t, t + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new Yt(a, new Ut(this, t, this.tokenRegex.lastIndex));
  }
}
class Yp {
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
      throw new G("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
      for (var a = 0; a < this.undefStack.length; a++)
        delete this.undefStack[a][e];
      this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t);
    } else {
      var i = this.undefStack[this.undefStack.length - 1];
      i && !i.hasOwnProperty(e) && (i[e] = this.current[e]);
    }
    t == null ? delete this.current[e] : this.current[e] = t;
  }
}
var Qp = Qu;
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
var Gl = {
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
        throw new G("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = Gl[e.text], n == null || n >= t)
      throw new G("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Gl[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Gs = (r, e, t, n) => {
  var a = r.consumeArg().tokens;
  if (a.length !== 1)
    throw new G("\\newcommand's first argument must be a macro name");
  var i = a[0].text, s = r.isDefined(i);
  if (s && !e)
    throw new G("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!s && !t)
    throw new G("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var o = 0;
  if (a = r.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var l = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      l += d.text, d = r.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new G("Invalid number of arguments: " + l);
    o = parseInt(l), a = r.consumeArg().tokens;
  }
  return s && n || r.macros.set(i, {
    tokens: a,
    numArgs: o
  }), "";
};
g("\\newcommand", (r) => Gs(r, !1, !0, !1));
g("\\renewcommand", (r) => Gs(r, !0, !1, !1));
g("\\providecommand", (r) => Gs(r, !0, !0, !0));
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
  return console.log(e, r.macros.get(t), bn[t], ut.math[t], ut.text[t]), "";
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
var jl = {
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
}, e4 = /* @__PURE__ */ new Set(["bin", "rel"]);
g("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in jl ? e = jl[t] : (t.slice(0, 4) === "\\not" || t in ut.math && e4.has(ut.math[t].group)) && (e = "\\dotsb"), e;
});
var js = {
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
  return e in js ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(r) {
  var e = r.future().text;
  return e in js && e !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(r) {
  var e = r.future().text;
  return e in js ? "\\@cdots\\," : "\\@cdots";
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
    throw new G("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
g("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
g("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
g("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
g("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
g("\\newline", "\\\\\\relax");
g("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var u1 = Z(Mr["Main-Regular"][84][1] - 0.7 * Mr["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + u1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + u1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var d1 = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var l = (f) => (m) => {
    r && (m.macros.set("|", s), a.length && m.macros.set("\\|", o));
    var v = f;
    if (!f && a.length) {
      var y = m.future();
      y.text === "|" && (m.popToken(), v = !0);
    }
    return {
      tokens: v ? a : n,
      numArgs: 0
    };
  };
  e.macros.set("|", l(!1)), a.length && e.macros.set("\\|", l(!0));
  var d = e.consumeArg().tokens, h = e.expandTokens([
    ...i,
    ...d,
    ...t
    // reversed
  ]);
  return e.macros.endGroup(), {
    tokens: h.reverse(),
    numArgs: 0
  };
};
g("\\bra@ket", d1(!1));
g("\\bra@set", d1(!0));
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
var h1 = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class t4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Yp(Qp, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Ul(e, this.settings);
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
    var t, n, a;
    if (e) {
      if (this.consumeSpaces(), this.future().text !== "[")
        return null;
      t = this.popToken(), {
        tokens: a,
        end: n
      } = this.consumeArg(["]"]);
    } else
      ({
        tokens: a,
        start: t,
        end: n
      } = this.consumeArg());
    return this.pushToken(new Yt("EOF", n.loc)), this.pushTokens(a), new Yt("", Ut.range(t, n));
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
    var a = this.future(), i, s = 0, o = 0;
    do {
      if (i = this.popToken(), t.push(i), i.text === "{")
        ++s;
      else if (i.text === "}") {
        if (--s, s === -1)
          throw new G("Extra }", i);
      } else if (i.text === "EOF")
        throw new G("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", i);
      if (e && n)
        if ((s === 0 || s === 1 && e[o] === "{") && i.text === e[o]) {
          if (++o, o === e.length) {
            t.splice(-o, o);
            break;
          }
        } else
          o = 0;
    } while (s !== 0 || n);
    return a.text === "{" && t[t.length - 1].text === "}" && (t.pop(), t.shift()), t.reverse(), {
      tokens: t,
      start: a,
      end: i
    };
  }
  /**
   * Consume the specified number of (delimited) arguments from the token
   * stream and return the resulting array of arguments.
   */
  consumeArgs(e, t) {
    if (t) {
      if (t.length !== e + 1)
        throw new G("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new G("Use of the macro doesn't match its definition", i);
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
      throw new G("Too many expansions: infinite loop or need to increase maxExpand setting");
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
    var t = this.popToken(), n = t.text, a = t.noexpand ? null : this._getExpansion(n);
    if (a == null || e && a.unexpandable) {
      if (e && a == null && n[0] === "\\" && !this.isDefined(n))
        throw new G("Undefined control sequence: " + n);
      return this.pushToken(t), !1;
    }
    this.countExpansion(1);
    var i = a.tokens, s = this.consumeArgs(a.numArgs, a.delimiters);
    if (a.numArgs) {
      i = i.slice();
      for (var o = i.length - 1; o >= 0; --o) {
        var l = i[o];
        if (l.text === "#") {
          if (o === 0)
            throw new G("Incomplete placeholder at end of macro body", l);
          if (l = i[--o], l.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            i.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new G("Not a valid argument number", l);
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
    return this.macros.has(e) ? this.expandTokens([new Yt(e)]) : void 0;
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
        var a = this.stack.pop();
        a.treatAsRelax && (a.noexpand = !1, a.treatAsRelax = !1), t.push(a);
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
    var a = typeof t == "function" ? t(this) : t;
    if (typeof a == "string") {
      var i = 0;
      if (a.includes("#"))
        for (var s = a.replace(/##/g, ""); s.includes("#" + (i + 1)); )
          ++i;
      for (var o = new Ul(a, this.settings), l = [], d = o.lex(); d.text !== "EOF"; )
        l.push(d), d = o.lex();
      l.reverse();
      var h = {
        tokens: l,
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
    return this.macros.has(e) || bn.hasOwnProperty(e) || ut.math.hasOwnProperty(e) || ut.text.hasOwnProperty(e) || h1.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : bn.hasOwnProperty(e) && !bn[e].primitive;
  }
}
var Zl = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Sa = Object.freeze({
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
}), Ri = {
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
}, Kl = {
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
class ci {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new t4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new G("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
    this.consume(), this.gullet.pushToken(new Yt("}")), this.gullet.pushTokens(e);
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
      var a = this.fetch();
      if (ci.endOfExpression.has(a.text) || t && a.text === t || e && bn[a.text] && bn[a.text].infix)
        break;
      var i = this.parseAtom(t);
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
    for (var t = -1, n, a = 0; a < e.length; a++) {
      var i = e[a];
      if (i.type === "infix") {
        if (t !== -1)
          throw new G("only one infix operator per group", i.token);
        t = a, n = i.replaceWith;
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
    var a;
    do {
      var i;
      a = this.parseGroup(e);
    } while (((i = a) == null ? void 0 : i.type) === "internal");
    if (!a)
      throw new G("Expected group after '" + n + "'", t);
    return a;
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
    var a = {
      type: "text",
      mode: this.mode,
      body: t
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
    var t = this.parseGroup("atom", e);
    if ((t == null ? void 0 : t.type) === "internal" || this.mode === "text")
      return t;
    for (var n, a; ; ) {
      this.consumeSpaces();
      var i = this.fetch();
      if (i.text === "\\limits" || i.text === "\\nolimits") {
        if (t && t.type === "op")
          t.limits = i.text === "\\limits", t.alwaysHandleSupSub = !0;
        else if (t && t.type === "operatorname")
          t.alwaysHandleSupSub && (t.limits = i.text === "\\limits");
        else
          throw new G("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n)
          throw new G("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new G("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n)
          throw new G("Double superscript", i);
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
      } else if (Sa[i.text]) {
        var l = Zl.test(i.text), d = [];
        for (d.push(new Yt(Sa[i.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!Sa[h] || Zl.test(h) !== l)
            break;
          d.unshift(new Yt(Sa[h])), this.consume();
        }
        var f = this.subparse(d);
        l ? a = {
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
      base: t,
      sup: n,
      sub: a
    } : n ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sup: n
    } : a ? {
      type: "supsub",
      mode: this.mode,
      base: t,
      sub: a
    } : t;
  }
  /**
   * Parses an entire function, including its base and all of its arguments.
   */
  parseFunction(e, t) {
    var n = this.fetch(), a = n.text, i = bn[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new G("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !i.allowedInText)
      throw new G("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new G("Can't use function '" + a + "' in math mode", n);
    var {
      args: s,
      optArgs: o
    } = this.parseArguments(a, i);
    return this.callFunction(a, s, o, n, e);
  }
  /**
   * Call a function handler with a suitable context and arguments.
   */
  callFunction(e, t, n, a, i) {
    var s = {
      funcName: e,
      parser: this,
      token: a,
      breakOnTokenText: i
    }, o = bn[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new G("No function handler for " + e);
  }
  /**
   * Parses the arguments of a function or environment
   */
  parseArguments(e, t) {
    var n, a = (n = t.numOptionalArgs) != null ? n : 0, i = t.numArgs + a;
    if (i === 0)
      return {
        args: [],
        optArgs: []
      };
    for (var s = [], o = [], l = 0; l < i; l++) {
      var d, h = (d = t.argTypes) == null ? void 0 : d[l], f = l < a;
      ("primitive" in t && t.primitive && h == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && o[0] == null) && (h = "primitive");
      var m = this.parseGroupOfType("argument to '" + e + "'", h, f);
      if (f)
        o.push(m);
      else if (m != null)
        s.push(m);
      else
        throw new G("Null argument, please report this as a bug");
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
          throw new G("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new G("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new G("Unknown group type as " + e, this.fetch());
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
    for (var n = "", a; (a = this.fetch()).text !== "EOF"; )
      n += a.text, this.consume();
    return this.consume(), t.text = n, t;
  }
  /**
   * Parses a regex-delimited group: the largest sequence of tokens
   * whose concatenated strings match `regex`. Returns the string
   * formed by the tokens plus some position information.
   */
  parseRegexGroup(e, t) {
    for (var n = this.fetch(), a = n, i = "", s; (s = this.fetch()).text !== "EOF" && e.test(i + s.text); )
      a = s, i += a.text, this.consume();
    if (i === "")
      throw new G("Invalid " + t + ": '" + n.text + "'", n);
    return n.range(a, i);
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
      throw new G("Invalid color: '" + t.text + "'", t);
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
    var t, n = !1;
    if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? t = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : t = this.parseStringGroup(e), !t)
      return null;
    !e && t.text.length === 0 && (t.text = "0pt", n = !0);
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
    if (!a)
      throw new G("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!Cu(i))
      throw new G("Invalid unit: '" + i.unit + "'", t);
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
    var a = this.mode;
    t && this.switchMode(t), this.gullet.beginGroup();
    var i = this.parseExpression(!1, "EOF");
    this.expect("EOF"), this.gullet.endGroup();
    var s = {
      type: "ordgroup",
      mode: this.mode,
      loc: n.loc,
      body: i
    };
    return t && this.switchMode(a), s;
  }
  /**
   * Parses an ordinary group, which is either a single nucleus (like "x")
   * or an expression in braces (like "{x+y}") or an implicit group, a group
   * that starts at the current position, and ends right before a higher explicit
   * group ends, or at EOF.
   */
  parseGroup(e, t) {
    var n = this.fetch(), a = n.text, i;
    if (a === "{" || a === "\\begingroup") {
      this.consume();
      var s = a === "{" ? "}" : "\\endgroup";
      this.gullet.beginGroup();
      var o = this.parseExpression(!1, s), l = this.fetch();
      this.expect(s), this.gullet.endGroup(), i = {
        type: "ordgroup",
        mode: this.mode,
        loc: Ut.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !h1.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new G("Undefined control sequence: " + a, n);
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
    for (var t = e.length - 1, n = 0; n < t; ++n) {
      var a = e[n];
      if (a.type === "textord") {
        var i = a.text, s = e[n + 1];
        if (!(!s || s.type !== "textord")) {
          if (i === "-" && s.text === "-") {
            var o = e[n + 2];
            n + 1 < t && o && o.type === "textord" && o.text === "-" ? (e.splice(n, 3, {
              type: "textord",
              mode: "text",
              loc: Ut.range(a, o),
              text: "---"
            }), t -= 2) : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Ut.range(a, s),
              text: "--"
            }), t -= 1);
          }
          (i === "'" || i === "`") && s.text === i && (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: Ut.range(a, s),
            text: i + i
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
      var n = t.slice(5), a = n.charAt(0) === "*";
      if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1))
        throw new G(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: a
      };
    }
    Kl.hasOwnProperty(t[0]) && !ut[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Kl[t[0]] + t.slice(1));
    var i = Xp.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (ut[this.mode][t]) {
      this.settings.strict && this.mode === "math" && es.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = ut[this.mode][t].group, l = Ut.range(e), d;
      op(o) ? d = {
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
      this.settings.strict && (_u(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Ut.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var h = 0; h < i[0].length; h++) {
        var f = i[0][h];
        if (!Ri[f])
          throw new G("Unknown accent ' " + f + "'", e);
        var m = Ri[f][this.mode] || Ri[f].text;
        if (!m)
          throw new G("Accent " + f + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Ut.range(e),
          label: m,
          isStretchy: !1,
          isShifty: !0,
          base: s
        };
      }
    return s;
  }
}
ci.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var Zs = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new ci(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new G("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new Yt("\\df@tag")])
    }];
  }
  return a;
}, f1 = function(e, t, n) {
  t.textContent = "";
  var a = Ks(e, n).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), f1 = function() {
  throw new G("KaTeX doesn't work in quirks mode.");
});
var r4 = function(e, t) {
  var n = Ks(e, t).toMarkup();
  return n;
}, n4 = function(e, t) {
  var n = new Os(t);
  return Zs(e, n);
}, p1 = function(e, t, n) {
  if (n.throwOnError || !(e instanceof G))
    throw e;
  var a = V(["katex-error"], [new Qt(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, Ks = function(e, t) {
  var n = new Os(t);
  try {
    var a = Zs(e, n);
    return Qf(a, e, n);
  } catch (i) {
    return p1(i, e, n);
  }
}, a4 = function(e, t) {
  var n = new Os(t);
  try {
    var a = Zs(e, n);
    return ep(a, e, n);
  } catch (i) {
    return p1(i, e, n);
  }
}, i4 = "0.17.0", s4 = {
  Span: C0,
  Anchor: Qa,
  SymbolNode: Qt,
  SvgNode: Qr,
  PathNode: xn,
  LineNode: Qi
}, o4 = {
  /**
   * Current KaTeX version
   */
  version: i4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: f1,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: r4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: G,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Xi,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: n4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: Ks,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: a4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Rf,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: c,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: le,
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
  __domTree: s4
};
const l4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, c4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, u4 = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function _5(r = {}) {
  return {
    extensions: [
      d4(r, Xl(r, !1)),
      h4(r, Xl(r, !0))
    ]
  };
}
function Xl(r, e) {
  return (t) => o4.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function d4(r, e) {
  const t = r && r.nonStandard, n = t ? c4 : l4;
  return {
    name: "inlineKatex",
    level: "inline",
    start(a) {
      let i, s = a;
      for (; s; ) {
        if (i = s.indexOf("$"), i === -1)
          return;
        if ((t ? i > -1 : i === 0 || s.charAt(i - 1) === " ") && s.substring(i).match(n))
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
function h4(r, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(t, n) {
      const a = t.match(u4);
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
function C5(r) {
  if (typeof r == "function" && (r = {
    highlight: r
  }), !r || typeof r.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), {
    async: !!r.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = Jl(e.lang);
      if (r.async)
        return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then(Yl(e));
      const n = r.highlight(e.text, t, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      Yl(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, n) {
        typeof e == "object" && (n = e.escaped, t = e.lang, e = e.text);
        const a = Jl(t), i = a ? r.langPrefix + ec(a) : r.emptyLangClass, s = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : ec(e, !0)}
</code></pre>`;
      }
    }
  };
}
function Jl(r) {
  return (r || "").match(/\S*/)[0];
}
function Yl(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = !0, r.text = e);
  };
}
const m1 = /[&<>"']/, f4 = new RegExp(m1.source, "g"), g1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, p4 = new RegExp(g1.source, "g"), m4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, Ql = (r) => m4[r];
function ec(r, e) {
  if (e) {
    if (m1.test(r))
      return r.replace(f4, Ql);
  } else if (g1.test(r))
    return r.replace(p4, Ql);
  return r;
}
var Oi, tc;
function g4() {
  if (tc) return Oi;
  tc = 1;
  function r(k) {
    return k instanceof Map ? k.clear = k.delete = k.set = function() {
      throw new Error("map is read-only");
    } : k instanceof Set && (k.add = k.clear = k.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(k), Object.getOwnPropertyNames(k).forEach((O) => {
      const X = k[O], _e = typeof X;
      (_e === "object" || _e === "function") && !Object.isFrozen(X) && r(X);
    }), k;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(O) {
      O.data === void 0 && (O.data = {}), this.data = O.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(k) {
    return k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(k, ...O) {
    const X = /* @__PURE__ */ Object.create(null);
    for (const _e in k)
      X[_e] = k[_e];
    return O.forEach(function(_e) {
      for (const nt in _e)
        X[nt] = _e[nt];
    }), /** @type {T} */
    X;
  }
  const a = "</span>", i = (k) => !!k.scope, s = (k, { prefix: O }) => {
    if (k.startsWith("language:"))
      return k.replace("language:", "language-");
    if (k.includes(".")) {
      const X = k.split(".");
      return [
        `${O}${X.shift()}`,
        ...X.map((_e, nt) => `${_e}${"_".repeat(nt + 1)}`)
      ].join(" ");
    }
    return `${O}${k}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(O, X) {
      this.buffer = "", this.classPrefix = X.classPrefix, O.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(O) {
      this.buffer += t(O);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(O) {
      if (!i(O)) return;
      const X = s(
        O.scope,
        { prefix: this.classPrefix }
      );
      this.span(X);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(O) {
      i(O) && (this.buffer += a);
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
    span(O) {
      this.buffer += `<span class="${O}">`;
    }
  }
  const l = (k = {}) => {
    const O = { children: [] };
    return Object.assign(O, k), O;
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
    add(O) {
      this.top.children.push(O);
    }
    /** @param {string} scope */
    openNode(O) {
      const X = l({ scope: O });
      this.add(X), this.stack.push(X);
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
    walk(O) {
      return this.constructor._walk(O, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(O, X) {
      return typeof X == "string" ? O.addText(X) : X.children && (O.openNode(X), X.children.forEach((_e) => this._walk(O, _e)), O.closeNode(X)), O;
    }
    /**
     * @param {Node} node
     */
    static _collapse(O) {
      typeof O != "string" && O.children && (O.children.every((X) => typeof X == "string") ? O.children = [O.children.join("")] : O.children.forEach((X) => {
        d._collapse(X);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(O) {
      super(), this.options = O;
    }
    /**
     * @param {string} text
     */
    addText(O) {
      O !== "" && this.add(O);
    }
    /** @param {string} scope */
    startScope(O) {
      this.openNode(O);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(O, X) {
      const _e = O.root;
      X && (_e.scope = `language:${X}`), this.add(_e);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(k) {
    return k ? typeof k == "string" ? k : k.source : null;
  }
  function m(k) {
    return I("(?=", k, ")");
  }
  function v(k) {
    return I("(?:", k, ")*");
  }
  function y(k) {
    return I("(?:", k, ")?");
  }
  function I(...k) {
    return k.map((X) => f(X)).join("");
  }
  function N(k) {
    const O = k[k.length - 1];
    return typeof O == "object" && O.constructor === Object ? (k.splice(k.length - 1, 1), O) : {};
  }
  function z(...k) {
    return "(" + (N(k).capture ? "" : "?:") + k.map((_e) => f(_e)).join("|") + ")";
  }
  function $(k) {
    return new RegExp(k.toString() + "|").exec("").length - 1;
  }
  function M(k, O) {
    const X = k && k.exec(O);
    return X && X.index === 0;
  }
  const H = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function q(k, { joinWith: O }) {
    let X = 0;
    return k.map((_e) => {
      X += 1;
      const nt = X;
      let st = f(_e), de = "";
      for (; st.length > 0; ) {
        const J = H.exec(st);
        if (!J) {
          de += st;
          break;
        }
        de += st.substring(0, J.index), st = st.substring(J.index + J[0].length), J[0][0] === "\\" && J[1] ? de += "\\" + String(Number(J[1]) + nt) : (de += J[0], J[0] === "(" && X++);
      }
      return de;
    }).map((_e) => `(${_e})`).join(O);
  }
  const E = /\b\B/, ae = "[a-zA-Z]\\w*", ne = "[a-zA-Z_]\\w*", B = "\\b\\d+(\\.\\d+)?", be = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Ie = "\\b(0b[01]+)", me = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", qe = (k = {}) => {
    const O = /^#![ ]*\//;
    return k.binary && (k.begin = I(
      O,
      /.*\b/,
      k.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: O,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (X, _e) => {
        X.index !== 0 && _e.ignoreMatch();
      }
    }, k);
  }, Se = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, W = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [Se]
  }, Y = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [Se]
  }, ye = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, ie = function(k, O, X = {}) {
    const _e = n(
      {
        scope: "comment",
        begin: k,
        end: O,
        contains: []
      },
      X
    );
    _e.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const nt = z(
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
    return _e.contains.push(
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
        begin: I(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          nt,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), _e;
  }, se = ie("//", "$"), fe = ie("/\\*", "\\*/"), Re = ie("#", "$"), rt = {
    scope: "number",
    begin: B,
    relevance: 0
  }, Ae = {
    scope: "number",
    begin: be,
    relevance: 0
  }, at = {
    scope: "number",
    begin: Ie,
    relevance: 0
  }, it = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      Se,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [Se]
      }
    ]
  }, zt = {
    scope: "title",
    begin: ae,
    relevance: 0
  }, Oe = {
    scope: "title",
    begin: ne,
    relevance: 0
  }, Fe = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + ne,
    relevance: 0
  };
  var oe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: W,
    BACKSLASH_ESCAPE: Se,
    BINARY_NUMBER_MODE: at,
    BINARY_NUMBER_RE: Ie,
    COMMENT: ie,
    C_BLOCK_COMMENT_MODE: fe,
    C_LINE_COMMENT_MODE: se,
    C_NUMBER_MODE: Ae,
    C_NUMBER_RE: be,
    END_SAME_AS_BEGIN: function(k) {
      return Object.assign(
        k,
        {
          /** @type {ModeCallback} */
          "on:begin": (O, X) => {
            X.data._beginMatch = O[1];
          },
          /** @type {ModeCallback} */
          "on:end": (O, X) => {
            X.data._beginMatch !== O[1] && X.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Re,
    IDENT_RE: ae,
    MATCH_NOTHING_RE: E,
    METHOD_GUARD: Fe,
    NUMBER_MODE: rt,
    NUMBER_RE: B,
    PHRASAL_WORDS_MODE: ye,
    QUOTE_STRING_MODE: Y,
    REGEXP_MODE: it,
    RE_STARTERS_RE: me,
    SHEBANG: qe,
    TITLE_MODE: zt,
    UNDERSCORE_IDENT_RE: ne,
    UNDERSCORE_TITLE_MODE: Oe
  });
  function Dr(k, O) {
    k.input[k.index - 1] === "." && O.ignoreMatch();
  }
  function xr(k, O) {
    k.className !== void 0 && (k.scope = k.className, delete k.className);
  }
  function _t(k, O) {
    O && k.beginKeywords && (k.begin = "\\b(" + k.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", k.__beforeBegin = Dr, k.keywords = k.keywords || k.beginKeywords, delete k.beginKeywords, k.relevance === void 0 && (k.relevance = 0));
  }
  function cr(k, O) {
    Array.isArray(k.illegal) && (k.illegal = z(...k.illegal));
  }
  function Lr(k, O) {
    if (k.match) {
      if (k.begin || k.end) throw new Error("begin & end are not supported with match");
      k.begin = k.match, delete k.match;
    }
  }
  function yr(k, O) {
    k.relevance === void 0 && (k.relevance = 1);
  }
  const Fr = (k, O) => {
    if (!k.beforeMatch) return;
    if (k.starts) throw new Error("beforeMatch cannot be used with starts");
    const X = Object.assign({}, k);
    Object.keys(k).forEach((_e) => {
      delete k[_e];
    }), k.keywords = X.keywords, k.begin = I(X.beforeMatch, m(X.begin)), k.starts = {
      relevance: 0,
      contains: [
        Object.assign(X, { endsParent: !0 })
      ]
    }, k.relevance = 0, delete X.beforeMatch;
  }, Gt = [
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
  ], Rt = "keyword";
  function jt(k, O, X = Rt) {
    const _e = /* @__PURE__ */ Object.create(null);
    return typeof k == "string" ? nt(X, k.split(" ")) : Array.isArray(k) ? nt(X, k) : Object.keys(k).forEach(function(st) {
      Object.assign(
        _e,
        jt(k[st], O, st)
      );
    }), _e;
    function nt(st, de) {
      O && (de = de.map((J) => J.toLowerCase())), de.forEach(function(J) {
        const ve = J.split("|");
        _e[ve[0]] = [st, Cn(ve[0], ve[1])];
      });
    }
  }
  function Cn(k, O) {
    return O ? Number(O) : nn(k) ? 0 : 1;
  }
  function nn(k) {
    return Gt.includes(k.toLowerCase());
  }
  const kr = {}, Ot = (k) => {
    console.error(k);
  }, Pr = (k, ...O) => {
    console.log(`WARN: ${k}`, ...O);
  }, Vt = (k, O) => {
    kr[`${k}/${O}`] || (console.log(`Deprecated as of ${k}. ${O}`), kr[`${k}/${O}`] = !0);
  }, ur = new Error();
  function Zt(k, O, { key: X }) {
    let _e = 0;
    const nt = k[X], st = {}, de = {};
    for (let J = 1; J <= O.length; J++)
      de[J + _e] = nt[J], st[J + _e] = !0, _e += $(O[J - 1]);
    k[X] = de, k[X]._emit = st, k[X]._multi = !0;
  }
  function dr(k) {
    if (Array.isArray(k.begin)) {
      if (k.skip || k.excludeBegin || k.returnBegin)
        throw Ot("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), ur;
      if (typeof k.beginScope != "object" || k.beginScope === null)
        throw Ot("beginScope must be object"), ur;
      Zt(k, k.begin, { key: "beginScope" }), k.begin = q(k.begin, { joinWith: "" });
    }
  }
  function an(k) {
    if (Array.isArray(k.end)) {
      if (k.skip || k.excludeEnd || k.returnEnd)
        throw Ot("skip, excludeEnd, returnEnd not compatible with endScope: {}"), ur;
      if (typeof k.endScope != "object" || k.endScope === null)
        throw Ot("endScope must be object"), ur;
      Zt(k, k.end, { key: "endScope" }), k.end = q(k.end, { joinWith: "" });
    }
  }
  function An(k) {
    k.scope && typeof k.scope == "object" && k.scope !== null && (k.beginScope = k.scope, delete k.scope);
  }
  function sn(k) {
    An(k), typeof k.beginScope == "string" && (k.beginScope = { _wrap: k.beginScope }), typeof k.endScope == "string" && (k.endScope = { _wrap: k.endScope }), dr(k), an(k);
  }
  function Tn(k) {
    function O(de, J) {
      return new RegExp(
        f(de),
        "m" + (k.case_insensitive ? "i" : "") + (k.unicodeRegex ? "u" : "") + (J ? "g" : "")
      );
    }
    class X {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(J, ve) {
        ve.position = this.position++, this.matchIndexes[this.matchAt] = ve, this.regexes.push([ve, J]), this.matchAt += $(J) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const J = this.regexes.map((ve) => ve[1]);
        this.matcherRe = O(q(J, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(J) {
        this.matcherRe.lastIndex = this.lastIndex;
        const ve = this.matcherRe.exec(J);
        if (!ve)
          return null;
        const ht = ve.findIndex((Hr, Cr) => Cr > 0 && Hr !== void 0), Qe = this.matchIndexes[ht];
        return ve.splice(0, ht), Object.assign(ve, Qe);
      }
    }
    class _e {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(J) {
        if (this.multiRegexes[J]) return this.multiRegexes[J];
        const ve = new X();
        return this.rules.slice(J).forEach(([ht, Qe]) => ve.addRule(ht, Qe)), ve.compile(), this.multiRegexes[J] = ve, ve;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(J, ve) {
        this.rules.push([J, ve]), ve.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(J) {
        const ve = this.getMatcher(this.regexIndex);
        ve.lastIndex = this.lastIndex;
        let ht = ve.exec(J);
        if (this.resumingScanAtSamePosition() && !(ht && ht.index === this.lastIndex)) {
          const Qe = this.getMatcher(0);
          Qe.lastIndex = this.lastIndex + 1, ht = Qe.exec(J);
        }
        return ht && (this.regexIndex += ht.position + 1, this.regexIndex === this.count && this.considerAll()), ht;
      }
    }
    function nt(de) {
      const J = new _e();
      return de.contains.forEach((ve) => J.addRule(ve.begin, { rule: ve, type: "begin" })), de.terminatorEnd && J.addRule(de.terminatorEnd, { type: "end" }), de.illegal && J.addRule(de.illegal, { type: "illegal" }), J;
    }
    function st(de, J) {
      const ve = (
        /** @type CompiledMode */
        de
      );
      if (de.isCompiled) return ve;
      [
        xr,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Lr,
        sn,
        Fr
      ].forEach((Qe) => Qe(de, J)), k.compilerExtensions.forEach((Qe) => Qe(de, J)), de.__beforeBegin = null, [
        _t,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        cr,
        // default to 1 relevance if not specified
        yr
      ].forEach((Qe) => Qe(de, J)), de.isCompiled = !0;
      let ht = null;
      return typeof de.keywords == "object" && de.keywords.$pattern && (de.keywords = Object.assign({}, de.keywords), ht = de.keywords.$pattern, delete de.keywords.$pattern), ht = ht || /\w+/, de.keywords && (de.keywords = jt(de.keywords, k.case_insensitive)), ve.keywordPatternRe = O(ht, !0), J && (de.begin || (de.begin = /\B|\b/), ve.beginRe = O(ve.begin), !de.end && !de.endsWithParent && (de.end = /\B|\b/), de.end && (ve.endRe = O(ve.end)), ve.terminatorEnd = f(ve.end) || "", de.endsWithParent && J.terminatorEnd && (ve.terminatorEnd += (de.end ? "|" : "") + J.terminatorEnd)), de.illegal && (ve.illegalRe = O(
        /** @type {RegExp | string} */
        de.illegal
      )), de.contains || (de.contains = []), de.contains = [].concat(...de.contains.map(function(Qe) {
        return Jn(Qe === "self" ? de : Qe);
      })), de.contains.forEach(function(Qe) {
        st(
          /** @type Mode */
          Qe,
          ve
        );
      }), de.starts && st(de.starts, J), ve.matcher = nt(ve), ve;
    }
    if (k.compilerExtensions || (k.compilerExtensions = []), k.contains && k.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return k.classNameAliases = n(k.classNameAliases || {}), st(
      /** @type Mode */
      k
    );
  }
  function $n(k) {
    return k ? k.endsWithParent || $n(k.starts) : !1;
  }
  function Jn(k) {
    return k.variants && !k.cachedVariants && (k.cachedVariants = k.variants.map(function(O) {
      return n(k, { variants: null }, O);
    })), k.cachedVariants ? k.cachedVariants : $n(k) ? n(k, { starts: k.starts ? n(k.starts) : null }) : Object.isFrozen(k) ? n(k) : k;
  }
  var In = "11.11.1";
  class Yn extends Error {
    constructor(O, X) {
      super(O), this.name = "HTMLInjectionError", this.html = X;
    }
  }
  const Sr = t, Qn = n, on = Symbol("nomatch"), e0 = 7, _r = function(k) {
    const O = /* @__PURE__ */ Object.create(null), X = /* @__PURE__ */ Object.create(null), _e = [];
    let nt = !0;
    const st = "Could not find the language '{}', did you forget to load/include a language module?", de = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let J = {
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
    function ve(U) {
      return J.noHighlightRe.test(U);
    }
    function ht(U) {
      let ge = U.className + " ";
      ge += U.parentNode ? U.parentNode.className : "";
      const A = J.languageDetectRe.exec(ge);
      if (A) {
        const T = Nt(A[1]);
        return T || (Pr(st.replace("{}", A[1])), Pr("Falling back to no-highlight mode for this block.", U)), T ? A[1] : "no-highlight";
      }
      return ge.split(/\s+/).find((T) => ve(T) || Nt(T));
    }
    function Qe(U, ge, A) {
      let T = "", D = "";
      typeof ge == "object" ? (T = U, A = ge.ignoreIllegals, D = ge.language) : (Vt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Vt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), D = U, T = ge), A === void 0 && (A = !0);
      const ee = {
        code: T,
        language: D
      };
      Kt("before:highlight", ee);
      const ue = ee.result ? ee.result : Hr(ee.language, ee.code, A);
      return ue.code = ee.code, Kt("after:highlight", ue), ue;
    }
    function Hr(U, ge, A, T) {
      const D = /* @__PURE__ */ Object.create(null);
      function ee(te, pe) {
        return te.keywords[pe];
      }
      function ue() {
        if (!Te.keywords) {
          xt.addText(Ze);
          return;
        }
        let te = 0;
        Te.keywordPatternRe.lastIndex = 0;
        let pe = Te.keywordPatternRe.exec(Ze), Ee = "";
        for (; pe; ) {
          Ee += Ze.substring(te, pe.index);
          const Ve = ar.case_insensitive ? pe[0].toLowerCase() : pe[0], Ct = ee(Te, Ve);
          if (Ct) {
            const [fr, ca] = Ct;
            if (xt.addText(Ee), Ee = "", D[Ve] = (D[Ve] || 0) + 1, D[Ve] <= e0 && (On += ca), fr.startsWith("_"))
              Ee += pe[0];
            else {
              const ua = ar.classNameAliases[fr] || fr;
              ct(pe[0], ua);
            }
          } else
            Ee += pe[0];
          te = Te.keywordPatternRe.lastIndex, pe = Te.keywordPatternRe.exec(Ze);
        }
        Ee += Ze.substring(te), xt.addText(Ee);
      }
      function Ne() {
        if (Ze === "") return;
        let te = null;
        if (typeof Te.subLanguage == "string") {
          if (!O[Te.subLanguage]) {
            xt.addText(Ze);
            return;
          }
          te = Hr(Te.subLanguage, Ze, !0, la[Te.subLanguage]), la[Te.subLanguage] = /** @type {CompiledMode} */
          te._top;
        } else
          te = Nn(Ze, Te.subLanguage.length ? Te.subLanguage : null);
        Te.relevance > 0 && (On += te.relevance), xt.__addSublanguage(te._emitter, te.language);
      }
      function De() {
        Te.subLanguage != null ? Ne() : ue(), Ze = "";
      }
      function ct(te, pe) {
        te !== "" && (xt.startScope(pe), xt.addText(te), xt.endScope());
      }
      function $t(te, pe) {
        let Ee = 1;
        const Ve = pe.length - 1;
        for (; Ee <= Ve; ) {
          if (!te._emit[Ee]) {
            Ee++;
            continue;
          }
          const Ct = ar.classNameAliases[te[Ee]] || te[Ee], fr = pe[Ee];
          Ct ? ct(fr, Ct) : (Ze = fr, ue(), Ze = ""), Ee++;
        }
      }
      function Lt(te, pe) {
        return te.scope && typeof te.scope == "string" && xt.openNode(ar.classNameAliases[te.scope] || te.scope), te.beginScope && (te.beginScope._wrap ? (ct(Ze, ar.classNameAliases[te.beginScope._wrap] || te.beginScope._wrap), Ze = "") : te.beginScope._multi && ($t(te.beginScope, pe), Ze = "")), Te = Object.create(te, { parent: { value: Te } }), Te;
      }
      function nr(te, pe, Ee) {
        let Ve = M(te.endRe, Ee);
        if (Ve) {
          if (te["on:end"]) {
            const Ct = new e(te);
            te["on:end"](pe, Ct), Ct.isMatchIgnored && (Ve = !1);
          }
          if (Ve) {
            for (; te.endsParent && te.parent; )
              te = te.parent;
            return te;
          }
        }
        if (te.endsWithParent)
          return nr(te.parent, pe, Ee);
      }
      function Rn(te) {
        return Te.matcher.regexIndex === 0 ? (Ze += te[0], 1) : (s0 = !0, 0);
      }
      function sa(te) {
        const pe = te[0], Ee = te.rule, Ve = new e(Ee), Ct = [Ee.__beforeBegin, Ee["on:begin"]];
        for (const fr of Ct)
          if (fr && (fr(te, Ve), Ve.isMatchIgnored))
            return Rn(pe);
        return Ee.skip ? Ze += pe : (Ee.excludeBegin && (Ze += pe), De(), !Ee.returnBegin && !Ee.excludeBegin && (Ze = pe)), Lt(Ee, te), Ee.returnBegin ? 0 : pe.length;
      }
      function hi(te) {
        const pe = te[0], Ee = ge.substring(te.index), Ve = nr(Te, te, Ee);
        if (!Ve)
          return on;
        const Ct = Te;
        Te.endScope && Te.endScope._wrap ? (De(), ct(pe, Te.endScope._wrap)) : Te.endScope && Te.endScope._multi ? (De(), $t(Te.endScope, te)) : Ct.skip ? Ze += pe : (Ct.returnEnd || Ct.excludeEnd || (Ze += pe), De(), Ct.excludeEnd && (Ze = pe));
        do
          Te.scope && xt.closeNode(), !Te.skip && !Te.subLanguage && (On += Te.relevance), Te = Te.parent;
        while (Te !== Ve.parent);
        return Ve.starts && Lt(Ve.starts, te), Ct.returnEnd ? 0 : pe.length;
      }
      function N0() {
        const te = [];
        for (let pe = Te; pe !== ar; pe = pe.parent)
          pe.scope && te.unshift(pe.scope);
        te.forEach((pe) => xt.openNode(pe));
      }
      let a0 = {};
      function E0(te, pe) {
        const Ee = pe && pe[0];
        if (Ze += te, Ee == null)
          return De(), 0;
        if (a0.type === "begin" && pe.type === "end" && a0.index === pe.index && Ee === "") {
          if (Ze += ge.slice(pe.index, pe.index + 1), !nt) {
            const Ve = new Error(`0 width match regex (${U})`);
            throw Ve.languageName = U, Ve.badRule = a0.rule, Ve;
          }
          return 1;
        }
        if (a0 = pe, pe.type === "begin")
          return sa(pe);
        if (pe.type === "illegal" && !A) {
          const Ve = new Error('Illegal lexeme "' + Ee + '" for mode "' + (Te.scope || "<unnamed>") + '"');
          throw Ve.mode = Te, Ve;
        } else if (pe.type === "end") {
          const Ve = hi(pe);
          if (Ve !== on)
            return Ve;
        }
        if (pe.type === "illegal" && Ee === "")
          return Ze += `
`, 1;
        if (i0 > 1e5 && i0 > pe.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Ze += Ee, Ee.length;
      }
      const ar = Nt(U);
      if (!ar)
        throw Ot(st.replace("{}", U)), new Error('Unknown language: "' + U + '"');
      const oa = Tn(ar);
      let M0 = "", Te = T || oa;
      const la = {}, xt = new J.__emitter(J);
      N0();
      let Ze = "", On = 0, Vr = 0, i0 = 0, s0 = !1;
      try {
        if (ar.__emitTokens)
          ar.__emitTokens(ge, xt);
        else {
          for (Te.matcher.considerAll(); ; ) {
            i0++, s0 ? s0 = !1 : Te.matcher.considerAll(), Te.matcher.lastIndex = Vr;
            const te = Te.matcher.exec(ge);
            if (!te) break;
            const pe = ge.substring(Vr, te.index), Ee = E0(pe, te);
            Vr = te.index + Ee;
          }
          E0(ge.substring(Vr));
        }
        return xt.finalize(), M0 = xt.toHTML(), {
          language: U,
          value: M0,
          relevance: On,
          illegal: !1,
          _emitter: xt,
          _top: Te
        };
      } catch (te) {
        if (te.message && te.message.includes("Illegal"))
          return {
            language: U,
            value: Sr(ge),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: te.message,
              index: Vr,
              context: ge.slice(Vr - 100, Vr + 100),
              mode: te.mode,
              resultSoFar: M0
            },
            _emitter: xt
          };
        if (nt)
          return {
            language: U,
            value: Sr(ge),
            illegal: !1,
            relevance: 0,
            errorRaised: te,
            _emitter: xt,
            _top: Te
          };
        throw te;
      }
    }
    function Cr(U) {
      const ge = {
        value: Sr(U),
        illegal: !1,
        relevance: 0,
        _top: de,
        _emitter: new J.__emitter(J)
      };
      return ge._emitter.addText(U), ge;
    }
    function Nn(U, ge) {
      ge = ge || J.languages || Object.keys(O);
      const A = Cr(U), T = ge.filter(Nt).filter(cn).map(
        (De) => Hr(De, U, !1)
      );
      T.unshift(A);
      const D = T.sort((De, ct) => {
        if (De.relevance !== ct.relevance) return ct.relevance - De.relevance;
        if (De.language && ct.language) {
          if (Nt(De.language).supersetOf === ct.language)
            return 1;
          if (Nt(ct.language).supersetOf === De.language)
            return -1;
        }
        return 0;
      }), [ee, ue] = D, Ne = ee;
      return Ne.secondBest = ue, Ne;
    }
    function t0(U, ge, A) {
      const T = ge && X[ge] || A;
      U.classList.add("hljs"), U.classList.add(`language-${T}`);
    }
    function En(U) {
      let ge = null;
      const A = ht(U);
      if (ve(A)) return;
      if (Kt(
        "before:highlightElement",
        { el: U, language: A }
      ), U.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", U);
        return;
      }
      if (U.children.length > 0 && (J.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(U)), J.throwUnescapedHTML))
        throw new Yn(
          "One of your code blocks includes unescaped HTML.",
          U.innerHTML
        );
      ge = U;
      const T = ge.textContent, D = A ? Qe(T, { language: A, ignoreIllegals: !0 }) : Nn(T);
      U.innerHTML = D.value, U.dataset.highlighted = "yes", t0(U, A, D.language), U.result = {
        language: D.language,
        // TODO: remove with version 11.0
        re: D.relevance,
        relevance: D.relevance
      }, D.secondBest && (U.secondBest = {
        language: D.secondBest.language,
        relevance: D.secondBest.relevance
      }), Kt("after:highlightElement", { el: U, result: D, text: T });
    }
    function bt(U) {
      J = Qn(J, U);
    }
    const hr = () => {
      Dt(), Vt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Mn() {
      Dt(), Vt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let ln = !1;
    function Dt() {
      function U() {
        Dt();
      }
      if (document.readyState === "loading") {
        ln || window.addEventListener("DOMContentLoaded", U, !1), ln = !0;
        return;
      }
      document.querySelectorAll(J.cssSelector).forEach(En);
    }
    function zn(U, ge) {
      let A = null;
      try {
        A = ge(k);
      } catch (T) {
        if (Ot("Language definition for '{}' could not be registered.".replace("{}", U)), nt)
          Ot(T);
        else
          throw T;
        A = de;
      }
      A.name || (A.name = U), O[U] = A, A.rawDefinition = ge.bind(null, k), A.aliases && r0(A.aliases, { languageName: U });
    }
    function qr(U) {
      delete O[U];
      for (const ge of Object.keys(X))
        X[ge] === U && delete X[ge];
    }
    function ot() {
      return Object.keys(O);
    }
    function Nt(U) {
      return U = (U || "").toLowerCase(), O[U] || O[X[U]];
    }
    function r0(U, { languageName: ge }) {
      typeof U == "string" && (U = [U]), U.forEach((A) => {
        X[A.toLowerCase()] = ge;
      });
    }
    function cn(U) {
      const ge = Nt(U);
      return ge && !ge.disableAutodetect;
    }
    function T0(U) {
      U["before:highlightBlock"] && !U["before:highlightElement"] && (U["before:highlightElement"] = (ge) => {
        U["before:highlightBlock"](
          Object.assign({ block: ge.el }, ge)
        );
      }), U["after:highlightBlock"] && !U["after:highlightElement"] && (U["after:highlightElement"] = (ge) => {
        U["after:highlightBlock"](
          Object.assign({ block: ge.el }, ge)
        );
      });
    }
    function n0(U) {
      T0(U), _e.push(U);
    }
    function $0(U) {
      const ge = _e.indexOf(U);
      ge !== -1 && _e.splice(ge, 1);
    }
    function Kt(U, ge) {
      const A = U;
      _e.forEach(function(T) {
        T[A] && T[A](ge);
      });
    }
    function I0(U) {
      return Vt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Vt("10.7.0", "Please use highlightElement now."), En(U);
    }
    Object.assign(k, {
      highlight: Qe,
      highlightAuto: Nn,
      highlightAll: Dt,
      highlightElement: En,
      // TODO: Remove with v12 API
      highlightBlock: I0,
      configure: bt,
      initHighlighting: hr,
      initHighlightingOnLoad: Mn,
      registerLanguage: zn,
      unregisterLanguage: qr,
      listLanguages: ot,
      getLanguage: Nt,
      registerAliases: r0,
      autoDetection: cn,
      inherit: Qn,
      addPlugin: n0,
      removePlugin: $0
    }), k.debugMode = function() {
      nt = !1;
    }, k.safeMode = function() {
      nt = !0;
    }, k.versionString = In, k.regex = {
      concat: I,
      lookahead: m,
      either: z,
      optional: y,
      anyNumberOfTimes: v
    };
    for (const U in oe)
      typeof oe[U] == "object" && r(oe[U]);
    return Object.assign(k, oe), k;
  }, Bt = _r({});
  return Bt.newInstance = () => _r({}), Oi = Bt, Bt.HighlightJS = Bt, Bt.default = Bt, Oi;
}
var b4 = /* @__PURE__ */ g4();
const Xn = /* @__PURE__ */ uc(b4), v4 = (r) => ({
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
}), w4 = [
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
], x4 = [
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
], y4 = [
  ...w4,
  ...x4
], k4 = [
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
].sort().reverse(), S4 = [
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
].sort().reverse(), _4 = [
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
].sort().reverse(), C4 = [
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
function A4(r) {
  const e = r.regex, t = v4(r), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, a = "and or not only", i = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
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
          { begin: ":(" + S4.join("|") + ")" },
          { begin: ":(:)?(" + _4.join("|") + ")" }
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
        begin: "\\b(" + C4.join("|") + ")\\b"
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
              attribute: k4.join(" ")
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
        begin: "\\b(" + y4.join("|") + ")\\b"
      }
    ]
  };
}
const rc = "[A-Za-z$_][0-9A-Za-z$_]*", T4 = [
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
], $4 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], b1 = [
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
], v1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], w1 = [
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
], I4 = [
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
], N4 = [].concat(
  w1,
  b1,
  v1
);
function E4(r) {
  const e = r.regex, t = (ie, { after: se }) => {
    const fe = "</" + ie[0].slice(1);
    return ie.input.indexOf(fe, se) !== -1;
  }, n = rc, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (ie, se) => {
      const fe = ie[0].length + ie.index, Re = ie.input[fe];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Re === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Re === ","
      ) {
        se.ignoreMatch();
        return;
      }
      Re === ">" && (t(ie, { after: fe }) || se.ignoreMatch());
      let rt;
      const Ae = ie.input.substring(fe);
      if (rt = Ae.match(/^\s*=/)) {
        se.ignoreMatch();
        return;
      }
      if ((rt = Ae.match(/^\s+extends\s+/)) && rt.index === 0) {
        se.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: rc,
    keyword: T4,
    literal: $4,
    built_in: N4,
    "variable.language": I4
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
  }, y = {
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
  }, I = {
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
  }, N = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, $ = {
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
  }, M = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    y,
    I,
    N,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = M.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(M)
  });
  const H = [].concat($, m.contains), q = H.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(H)
    }
  ]), E = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: q
  }, ae = {
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
  }, ne = {
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
        ...b1,
        ...v1
      ]
    }
  }, B = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, be = {
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
    contains: [E],
    illegal: /%/
  }, Ie = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function me(ie) {
    return e.concat("(?!", ie.join("|"), ")");
  }
  const qe = {
    match: e.concat(
      /\b/,
      me([
        ...w1,
        "super",
        "import"
      ].map((ie) => `${ie}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Se = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, W = {
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
      E
    ]
  }, Y = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", ye = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(Y)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      E
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: q, CLASS_REFERENCE: ne },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      B,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      y,
      I,
      N,
      $,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      ne,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      ye,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          $,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: Y,
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
                    contains: q
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
      be,
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
          E,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      Se,
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
        contains: [E]
      },
      qe,
      Ie,
      ae,
      W,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var d0 = "[0-9](_*[0-9])*", _a = `\\.(${d0})`, Ca = "[0-9a-fA-F](_*[0-9a-fA-F])*", nc = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${d0})((${_a})|\\.)?|(${_a}))[eE][+-]?(${d0})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${d0})((${_a})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${_a})[fFdD]?\\b` },
    { begin: `\\b(${d0})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Ca})\\.?|(${Ca})?\\.(${Ca}))[pP][+-]?(${d0})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Ca})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function x1(r, e, t) {
  return t === -1 ? "" : r.replace(e, (n) => x1(r, e, t - 1));
}
function M4(r) {
  const e = r.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = t + x1("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), l = {
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
              nc,
              r.C_BLOCK_COMMENT_MODE
            ]
          },
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      nc,
      d
    ]
  };
}
function z4(r) {
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
      t,
      r.QUOTE_STRING_MODE,
      a,
      r.C_NUMBER_MODE,
      r.C_LINE_COMMENT_MODE,
      r.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
const Ua = "[A-Za-z$_][0-9A-Za-z$_]*", y1 = [
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
], k1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], S1 = [
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
], _1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], C1 = [
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
], A1 = [
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
], T1 = [].concat(
  C1,
  S1,
  _1
);
function R4(r) {
  const e = r.regex, t = (ie, { after: se }) => {
    const fe = "</" + ie[0].slice(1);
    return ie.input.indexOf(fe, se) !== -1;
  }, n = Ua, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (ie, se) => {
      const fe = ie[0].length + ie.index, Re = ie.input[fe];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Re === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Re === ","
      ) {
        se.ignoreMatch();
        return;
      }
      Re === ">" && (t(ie, { after: fe }) || se.ignoreMatch());
      let rt;
      const Ae = ie.input.substring(fe);
      if (rt = Ae.match(/^\s*=/)) {
        se.ignoreMatch();
        return;
      }
      if ((rt = Ae.match(/^\s+extends\s+/)) && rt.index === 0) {
        se.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Ua,
    keyword: y1,
    literal: k1,
    built_in: T1,
    "variable.language": A1
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
  }, y = {
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
  }, I = {
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
  }, N = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, $ = {
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
  }, M = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    y,
    I,
    N,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = M.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(M)
  });
  const H = [].concat($, m.contains), q = H.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(H)
    }
  ]), E = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: q
  }, ae = {
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
  }, ne = {
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
        ...S1,
        ..._1
      ]
    }
  }, B = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, be = {
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
    contains: [E],
    illegal: /%/
  }, Ie = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function me(ie) {
    return e.concat("(?!", ie.join("|"), ")");
  }
  const qe = {
    match: e.concat(
      /\b/,
      me([
        ...C1,
        "super",
        "import"
      ].map((ie) => `${ie}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Se = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, W = {
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
      E
    ]
  }, Y = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", ye = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(Y)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      E
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: q, CLASS_REFERENCE: ne },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      B,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      y,
      I,
      N,
      $,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      ne,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      ye,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          $,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: Y,
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
                    contains: q
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
      be,
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
          E,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      Se,
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
        contains: [E]
      },
      qe,
      Ie,
      ae,
      W,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function O4(r) {
  const e = r.regex, t = R4(r), n = Ua, a = [
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
      built_in: a
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
    $pattern: Ua,
    keyword: y1.concat(l),
    literal: k1,
    built_in: T1.concat(a),
    "variable.language": A1
  }, h = {
    className: "meta",
    begin: "@" + n
  }, f = (I, N, z) => {
    const $ = I.contains.findIndex((M) => M.label === N);
    if ($ === -1)
      throw new Error("can not find mode to replace");
    I.contains.splice($, 1, z);
  };
  Object.assign(t.keywords, d), t.exports.PARAMS_CONTAINS.push(h);
  const m = t.contains.find((I) => I.scope === "attr"), v = Object.assign(
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
    i,
    s,
    v
    // Added for optional property assignment highlighting
  ]), f(t, "shebang", r.SHEBANG()), f(t, "use_strict", o);
  const y = t.contains.find((I) => I.label === "func.def");
  return y.relevance = 0, Object.assign(t, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), t;
}
function $1(r) {
  const e = r.regex, t = e.concat(/[\p{L}_]/u, e.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, a = {
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
  }, s = r.inherit(i, {
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
                  i,
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
const A5 = "0.0.35", B4 = S.ValueIsTextline, I1 = {
  h: Jr,
  Fragment: vn,
  render: Kr,
  createContext: Sc,
  createElement: Jr,
  cloneElement: kc,
  createRef: Md,
  toChildArray: v0,
  createPortal: Oc,
  memo: qd,
  forwardRef: Wd,
  useId: Ic,
  useRef: Le,
  useState: Je,
  useReducer: Ac,
  useEffect: Jt,
  useLayoutEffect: Fd,
  useCallback: vr,
  useMemo: k0,
  useContext: Tc,
  useErrorBoundary: $c
}, { fromLocalTo: D4, fromViewportTo: L4, fromDocumentTo: F4 } = ih;
Xn.registerLanguage("css", A4);
Xn.registerLanguage("javascript", E4);
Xn.registerLanguage("java", M4);
Xn.registerLanguage("json", z4);
Xn.registerLanguage("typescript", O4);
Xn.registerLanguage("html", $1);
Xn.registerLanguage("xml", $1);
const Ga = Symbol("Script"), ui = Symbol("rerender"), Sn = Symbol("Console"), Z0 = Symbol("Console_CharCount"), K0 = Symbol("Console_LineCount"), N1 = ["left-width", "left-right", "width-right"], E1 = ["top-height", "top-bottom", "height-bottom"], T5 = [
  "thin",
  "extra-light",
  "light",
  "normal",
  "medium",
  "semi-bold",
  "bold",
  "extra-bold",
  "heavy"
], P4 = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  heavy: 900
}, $5 = ["normal", "italic"], H4 = ["none", "underline", "overline", "line-through"], q4 = ["solid", "double", "dotted", "dashed", "wavy"], I5 = ["left", "center", "right", "justify"], V4 = ["normal", "contain", "cover", "fill", "tile"], W4 = [
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
], N5 = [
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
], U4 = ["visible", "hidden", "scroll", "auto"];
function Un(r) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);
  if (e == null)
    throw new Error(r);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function E5(r) {
  Un(
    "ReadOnlyProperty: property " + S.quoted(r) + " must not be set"
  );
}
const G4 = /^[a-z$_][a-z$_0-9]*$/i;
function M1(r) {
  return S.ValueIsStringMatching(r, G4);
}
const j4 = S.ValidatorForClassifier(
  M1,
  S.acceptNil,
  "BC identifier"
), M5 = j4, Z4 = S.ValidatorForClassifier(
  M1,
  S.rejectNil,
  "BC identifier"
), z5 = Z4;
function di(r) {
  return S.ValueIsString(r) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(r);
}
const K4 = S.ValidatorForClassifier(
  di,
  S.acceptNil,
  "name"
), R5 = K4, Xs = S.ValidatorForClassifier(
  di,
  S.rejectNil,
  "name"
), O5 = Xs;
function er(r) {
  return S.ValueIsFiniteNumber(r);
}
const X4 = S.ValidatorForClassifier(
  er,
  S.acceptNil,
  "BC coordinate"
), B5 = X4, J4 = S.ValidatorForClassifier(
  er,
  S.rejectNil,
  "BC coordinate"
), D5 = J4;
function wr(r) {
  return S.ValueIsFiniteNumber(r) && r >= 0;
}
const Y4 = S.ValidatorForClassifier(
  wr,
  S.acceptNil,
  "BC dimension"
), L5 = Y4, Q4 = S.ValidatorForClassifier(
  wr,
  S.rejectNil,
  "BC dimension"
), F5 = Q4;
function z1(r) {
  return S.ValueIsPlainObject(r) && er(r.x) && er(r.y);
}
const e2 = S.ValidatorForClassifier(
  z1,
  S.acceptNil,
  "BC position"
), P5 = e2, t2 = S.ValidatorForClassifier(
  z1,
  S.rejectNil,
  "BC position"
), H5 = t2;
function R1(r) {
  return S.ValueIsPlainObject(r) && wr(r.Width) && wr(r.Height);
}
const r2 = S.ValidatorForClassifier(
  R1,
  S.acceptNil,
  "BC size"
), q5 = r2, n2 = S.ValidatorForClassifier(
  R1,
  S.rejectNil,
  "BC size"
), V5 = n2;
function O1(r) {
  return S.ValueIsPlainObject(r) && er(r.x) && wr(r.Width) && er(r.y) && wr(r.Height);
}
const a2 = S.ValidatorForClassifier(
  O1,
  S.acceptNil,
  "BC geometry"
), W5 = a2, i2 = S.ValidatorForClassifier(
  O1,
  S.rejectNil,
  "BC geometry"
), U5 = i2;
function B1(r) {
  if (!S.ValueIsPlainObject(r))
    return !1;
  for (let e in r)
    if (r.hasOwnProperty(e))
      switch (e) {
        case "x":
        case "y":
          if (r[e] != null && !er(r[e]))
            return !1;
          break;
        case "Width":
        case "Height":
          if (r[e] != null && !wr(r[e]))
            return !1;
          break;
        default:
          return !1;
      }
  return !0;
}
S.ValidatorForClassifier(
  B1,
  S.acceptNil,
  "BC geometry"
);
S.ValidatorForClassifier(
  B1,
  S.rejectNil,
  "BC geometry"
);
function Js(r) {
  return S.ValueIsList(r) && r.length === 2 && S.ValueIsOneOf(r[0], N1) && S.ValueIsOneOf(r[1], E1);
}
const s2 = S.ValidatorForClassifier(
  Js,
  S.acceptNil,
  "BC anchors list"
), G5 = s2, o2 = S.ValidatorForClassifier(
  Js,
  S.rejectNil,
  "BC anchors list"
), j5 = o2;
function Ys(r) {
  return S.ValueIsListSatisfying(r, S.ValueIsFiniteNumber) && r.length === 4;
}
const l2 = S.ValidatorForClassifier(
  Ys,
  S.acceptNil,
  "BC offsets list"
), Z5 = l2, c2 = S.ValidatorForClassifier(
  Ys,
  S.rejectNil,
  "BC offsets list"
), K5 = c2;
function D1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsOneOf(r.Line, H4) && (r.Color == null || S.ValueIsColor(r.Color)) && (r.Style == null || S.ValueIsOneOf(r.Style, q4)) && (r.Thickness == null || wr(r.Thickness));
}
const u2 = S.ValidatorForClassifier(
  D1,
  S.acceptNil,
  "text decoration"
), X5 = u2, d2 = S.ValidatorForClassifier(
  D1,
  S.rejectNil,
  "text decoration"
), J5 = d2;
function L1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && er(r.xOffset) && er(r.yOffset) && wr(r.BlurRadius) && S.ValueIsColor(r.Color);
}
const h2 = S.ValidatorForClassifier(
  L1,
  S.acceptNil,
  "text shadow specification"
), Y5 = h2, f2 = S.ValidatorForClassifier(
  L1,
  S.rejectNil,
  "text shadow specification"
), Q5 = f2;
function F1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsURL(r.ImageURL) && S.ValueIsOneOf(r.Mode, V4) && er(r.xOffset) && er(r.yOffset);
}
const p2 = S.ValidatorForClassifier(
  F1,
  S.acceptNil,
  "background texture"
), em = p2, m2 = S.ValidatorForClassifier(
  F1,
  S.rejectNil,
  "background texture"
), tm = m2;
function P1(r) {
  return S.ValueIsOneOf(r, W4);
}
const g2 = S.ValidatorForClassifier(
  P1,
  S.acceptNil,
  "widget border style"
), rm = g2, b2 = S.ValidatorForClassifier(
  P1,
  S.rejectNil,
  "widget border style"
), nm = b2;
function H1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && er(r.xOffset) && er(r.yOffset) && wr(r.BlurRadius) && wr(r.SpreadRadius) && S.ValueIsColor(r.Color);
}
const v2 = S.ValidatorForClassifier(
  H1,
  S.acceptNil,
  "widget box shadow specification"
), am = v2, w2 = S.ValidatorForClassifier(
  H1,
  S.rejectNil,
  "widget box shadow specification"
), im = w2;
function q1(r) {
  return S.ValueIsListSatisfying(
    r,
    (e) => S.ValueIsOneOf(e, U4),
    2,
    2
  );
}
const x2 = S.ValidatorForClassifier(
  q1,
  S.acceptNil,
  "BC overflow list"
), sm = x2, y2 = S.ValidatorForClassifier(
  q1,
  S.rejectNil,
  "BC overflow list"
), om = y2;
function X0(r) {
  switch (!0) {
    case r == null:
    // deliberately also allows undefined
    case S.ValueIsBoolean(r):
    case S.ValueIsNumber(r):
    case S.ValueIsString(r):
    case S.ValueIsListSatisfying(r, X0):
      return !0;
    case S.ValueIsPlainObject(r):
      for (let e in r)
        if (r.hasOwnProperty(e) && !X0(r[e]))
          return !1;
      return !0;
  }
  return !1;
}
const k2 = S.ValidatorForClassifier(
  X0,
  S.acceptNil,
  "serializable value"
), lm = k2, S2 = S.ValidatorForClassifier(
  X0,
  S.rejectNil,
  "serializable value"
), cm = S2;
function V1(r) {
  if (S.ValueIsPlainObject(r)) {
    for (let e in r)
      if (r.hasOwnProperty(e) && !X0(r[e]))
        return !1;
    return !0;
  } else
    return !1;
}
const _2 = S.ValidatorForClassifier(
  V1,
  S.acceptNil,
  "serializable object"
), um = _2, C2 = S.ValidatorForClassifier(
  V1,
  S.rejectNil,
  "serializable object"
), dm = C2;
function hm(r, e) {
  const t = e == null ? S.ValueIsTextline : (n) => S.ValueIsStringMatching(n, e);
  return S.ValueIsListSatisfying(r, t);
}
function A2(r, e, t) {
  return e == null ? e : $2(r, e, t);
}
const fm = A2;
function T2(r, e, t) {
  if (e == null)
    Un(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const n = t == null ? S.ValueIsTextline : (a) => S.ValueIsStringMatching(a, t);
    if (S.ValueIsListSatisfying(e, n))
      return e;
    Un(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const $2 = T2;
function pm(r, e, t, n, a) {
  const i = e == null && t == null ? S.ValueIsNumber : (s) => S.ValueIsNumberInRange(s, e, t, n, a);
  return S.ValueIsListSatisfying(r, i);
}
function I2(r, e, t, n, a, i) {
  return e == null ? e : E2(r, e, t, n, a, i);
}
const mm = I2;
function N2(r, e, t, n, a, i) {
  if (e == null)
    Un(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const s = t == null && n == null ? S.ValueIsNumber : (o) => S.ValueIsNumberInRange(o, t, n, a, i);
    if (S.ValueIsListSatisfying(e, s))
      return e;
    Un(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const E2 = N2;
function gm(r, e, t) {
  const n = e == null && t == null ? S.ValueIsInteger : (a) => S.ValueIsIntegerInRange(a, e, t);
  return S.ValueIsListSatisfying(r, n);
}
function M2(r, e, t, n) {
  return e == null ? e : R2(r, e, t, n);
}
const bm = M2;
function z2(r, e, t, n) {
  if (e == null)
    Un(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const a = t == null && n == null ? S.ValueIsInteger : (i) => S.ValueIsIntegerInRange(i, t, n);
    if (S.ValueIsListSatisfying(e, a))
      return e;
    Un(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const R2 = z2;
function vm(r, e) {
  if (S.expectFunction("Validator", e), e(r) === !0)
    return r;
}
function wm(r) {
  switch (!0) {
    case S.ValueIsBoolean(r):
      return r;
    case r === "false":
      return !1;
    case r === "true":
      return !0;
  }
}
function xm(r) {
  if (S.ValueIsNumber(r) || S.ValueIsString(r) && (r = parseFloat(r), !isNaN(r)))
    return r;
}
function ym(r, e, t, n, a) {
  if (!(S.ValueIsString(r) && (r = parseFloat(r), isNaN(r))) && S.ValueIsNumberInRange(r, e, t, n, a))
    return r;
}
function km(r) {
  if (S.ValueIsInteger(r) || S.ValueIsString(r) && (r = parseFloat(r), S.ValueIsInteger(r)))
    return r;
}
function Sm(r, e, t) {
  if (!(S.ValueIsString(r) && (r = parseFloat(r), !S.ValueIsNumber(r))) && S.ValueIsIntegerInRange(r, e, t))
    return r;
}
function _m(r) {
  if (S.ValueIsOrdinal(r) || S.ValueIsString(r) && (r = parseFloat(r), S.ValueIsOrdinal(r)))
    return r;
}
function Cm(r) {
  if (S.ValueIsCardinal(r) || S.ValueIsString(r) && (r = parseFloat(r), S.ValueIsCardinal(r)))
    return r;
}
function Am(r) {
  if (S.ValueIsString(r))
    return r;
}
function Tm(r, e) {
  if (S.ValueIsStringMatching(r, e))
    return r;
}
function $m(r) {
  if (S.ValueIsText(r))
    return r;
}
function Im(r) {
  if (S.ValueIsTextline(r))
    return r;
}
function Nm(r) {
  if (S.ValueIsFunction(r))
    return r;
}
function Em(r) {
  if (S.ValueIsColor(r))
    return r;
}
function Mm(r) {
  if (S.ValueIsEMailAddress(r))
    return r;
}
function zm(r) {
  if (B4(r))
    return r;
}
function Rm(r) {
  if (S.ValueIsURL(r))
    return r;
}
function Om(r) {
  if (di(r))
    return r;
}
function Bm(r) {
  if (di(r) || S.ValueIsOrdinal(r))
    return r;
}
let ja = 0;
function he(r) {
  return ja += 1, `bc-${r}-${ja}`;
}
function Dm(r) {
  return Xs("name", r), W1(r);
}
function W1(r) {
  return r.replaceAll(".", "-");
}
function O2(r, e, t = !1) {
  Xs("stylesheet name", r), S.expectText("stylesheet", e), S.expectBoolean("mode flag", t);
  const n = "BC-Stylesheet-for-" + W1(r);
  let a = document.head.querySelector('style[id="' + n + '"]');
  a == null ? (a = document.createElement("style"), a.id = n, a.textContent = e, document.head.append(a)) : t ? a.textContent = e : console.warn('multiple definitions for stylesheet "' + r + '"');
}
const Lm = "\\d{2}:\\d{2}", B2 = /\d{2}:\d{2}/;
function Fm(r) {
  return S.ValueIsStringMatching(r, B2);
}
const Pm = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", D2 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function Hm(r) {
  return S.ValueIsStringMatching(r, D2);
}
const qm = "\\d{4}-\\d{2}-\\d{2}", L2 = /\d{4}-\d{2}-\d{2}/;
function Vm(r) {
  return S.ValueIsStringMatching(r, L2);
}
const Wm = "\\d{4}-W\\d{2}", F2 = /\d{4}-W\d{2}/;
function Um(r) {
  return S.ValueIsStringMatching(r, F2);
}
const Gm = "\\d{4}-\\d{2}", P2 = /\d{4}-\d{2}/;
function jm(r) {
  return S.ValueIsStringMatching(r, P2);
}
const Zm = [
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
], H2 = /* @__PURE__ */ Object.create(null);
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
  (r) => H2[r] = !0
);
const Qs = 105e4, eo = 2e4;
function Za(r) {
  r[Sn] = "", r[ui]();
}
function q2(r, e) {
  U1(r, G1(e)), r[ui]();
}
function V2(r, e) {
  U1(r, G1(e, !0)), r[ui]();
}
function U1(r, e) {
  if (e.length === 0)
    return;
  let t = ac(e), n = e.length;
  t > (r.Console_LineLimit ?? eo) || n > (r.Console_CharLimit ?? Qs) ? (Za(r), e = U2(e, r, t, n), r[K0] = ac(e) + 1, r[Z0] = e.length, r[Sn] = e) : (W2(r, t, n), r[K0] += t, r[Z0] += n, r[Sn] += e);
}
function W2(r, e, t) {
  let n = r[K0] + e - (r.Console_LineLimit ?? eo), a = r[Z0] + t - (r.Console_CharLimit ?? Qs);
  if (n <= 0 && a <= 0)
    return;
  let i = r[Sn];
  for (let s = 0, o = -1; ; ) {
    if (o = i.indexOf(`
`, o + 1), o < 0) {
      Za(r);
      return;
    }
    if (s += 1, s >= n && o - s * 28 >= a) {
      r[Sn] = i.slice(o + 1);
      return;
    }
  }
}
function U2(r, e, t, n) {
  let a = t - e.Console_LineLimit, i = n - e.Console_CharLimit;
  for (let s = 0, o = -1; ; )
    if (o = r.indexOf(`
`, o + 1), s += 1, s >= a && o >= i)
      return r.slice(o + 1);
}
function ac(r) {
  let e = r.match(/\n/g);
  return e === null ? 0 : e.length;
}
function G1(r, e = !1) {
  let t = "";
  for (let n = 0; n < r.length; n++) {
    let a = r[n];
    switch (typeof a) {
      case "undefined":
        t += "(undefined)";
        break;
      case "boolean":
        t += a.toString();
        break;
      case "number":
        t += a.toString();
        break;
      case "string":
        t += a;
        break;
      case "function":
        t += "(function)";
        break;
      case "object":
        t += a === null ? "(null)" : a.toString();
        break;
      default:
        t += "(unknown)";
        break;
    }
  }
  return t + (e ? `
` : "");
}
function ic(r) {
  return j2(() => {
    const { ErrorToShow: e } = r;
    return K`<div class="bc-error-indicator" onClick=${() => {
      console.warn(e), window.alert(G2(e));
    }}/>`;
  });
}
O2("bc-error-indicator", `
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
function G2(r) {
  return `${r.Title}

${r.Message}`;
}
const Km = ["portrait", "landscape", "any"];
function j2(r) {
  S.expectFunction("rendering function", r);
  const [e, t] = $c();
  if (e != null)
    return console.warn("rendering error caught by preact: " + e), K`<${ic} error=${e} resetError=${t}/>`;
  try {
    return r();
  } catch (n) {
    return console.warn("rendering error: " + n), K`<${ic} error=${n} resetError=${t}/>`;
  }
}
const ms = 600, gs = 450, Z2 = `
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
var $r, Vn, p0;
class Ka {
  constructor() {
    mt(this, $r, /* @__PURE__ */ new Map());
    /**** after/every — timers which are cleared automatically on teardown ****/
    mt(this, Vn, /* @__PURE__ */ new Set());
    mt(this, p0, /* @__PURE__ */ new Set());
  }
  /**** on — registers a message handler (called from within a script) ****/
  on(e, t) {
    R(this, $r).set(e, t);
  }
  /**** run — evaluates the script asynchronously; clears old handlers first ****/
  async run(e, t, n) {
    if (R(this, $r).clear(), !!(e != null && e.trim()))
      try {
        await new Function(...t, `return (async () => {
${e}
})()`)(...n);
      } catch (a) {
        console.warn("[BrowserCard] script error:", a);
      }
  }
  /**** dispatch — asynchronously invokes the named handler ****/
  async dispatch(e, ...t) {
    const n = R(this, $r).get(e);
    if (n == null)
      return !1;
    try {
      return await n(...t), !0;
    } catch (a) {
      return console.warn(`[BrowserCard] handler "${e}" error:`, a), !1;
    }
  }
  /**** renderResult — synchronously invokes the 'render' handler ****/
  renderResult() {
    const e = R(this, $r).get("update");
    if (e != null)
      try {
        e();
      } catch (n) {
        console.warn("[BrowserCard] update handler error:", n);
      }
    const t = R(this, $r).get("render");
    if (t == null)
      return null;
    try {
      return t();
    } catch (n) {
      return console.warn("[BrowserCard] render handler error:", n), null;
    }
  }
  after(e, t) {
    const n = setTimeout(() => {
      R(this, Vn).delete(n), t();
    }, e);
    return R(this, Vn).add(n), n;
  }
  every(e, t) {
    const n = setInterval(t, e);
    return R(this, p0).add(n), n;
  }
  /**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/
  async teardown() {
    const e = R(this, $r).get("obsolete");
    R(this, $r).clear();
    const t = [...R(this, Vn)];
    R(this, Vn).clear();
    const n = [...R(this, p0)];
    if (R(this, p0).clear(), e != null)
      try {
        await e();
      } catch (a) {
        console.warn('[BrowserCard] handler "obsolete" error:', a);
      }
    t.forEach((a) => clearTimeout(a)), n.forEach((a) => clearInterval(a));
  }
}
$r = new WeakMap(), Vn = new WeakMap(), p0 = new WeakMap();
const ia = /* @__PURE__ */ new Map();
function K2(r, e) {
  return /^https?:\/\//i.test(r) ? r : r.startsWith("/") ? window.location.origin + r : r.includes("/") || r.includes(".") ? new URL(r, window.location.href).href : `https://rozek.github.io/browser-card/behaviors/${e === "deck" ? "decks" : e === "card" ? "cards" : "widgets"}/${r}.js`;
}
function Xa(r, e, t, n) {
  const a = r.on.bind(r), i = r.after.bind(r), s = r.every.bind(r), o = n != null ? Object.keys(n) : [], l = n != null ? Object.values(n) : [], d = {
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
    ...l,
    null
  ];
  let m = !1;
  async function v(y) {
    if (m) {
      console.warn("[BrowserCard] behaveLike: only one behavior per Visual allowed");
      return;
    }
    m = !0;
    const I = ia.get(y);
    if (I != null) {
      await I(d);
      return;
    }
    const z = await import(K2(y, t));
    if (typeof z.default == "function") {
      const $ = {};
      h.forEach((M, H) => {
        $[M] = f[H];
      }), await z.default($);
    }
  }
  return f[f.length - 1] = v, { Params: h, Args: f };
}
function Bi(r, e, t, n, a, i, s, o) {
  function l(f, m) {
    return { __navType: f, ...m };
  }
  function d(f) {
    if (typeof f == "string")
      return { type: "card-name", name: f };
    if (typeof f == "number")
      return { type: "card-index", index: f - 1 };
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
    return typeof f == "string" ? m.find((y) => y.Name === f) ?? null : typeof f == "number" ? m[f - 1] ?? null : null;
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
        (v) => a(f, m.length ? m : ["OK"], v)
      );
    },
    ask(f, m = "") {
      return new Promise(
        (v) => i(f, m, v)
      );
    },
    Card(f) {
      return typeof f == "string" ? e.find((m) => m.Name === f) ? l("card-name", { __name: f }) : null : typeof f == "number" && f >= 1 && f <= e.length ? l("card-index", { __index: f - 1 }) : null;
    },
    CardNumber() {
      return o.current + 1;
    },
    CardCount() {
      return e.length;
    },
    Widget: h,
    async send(f, m, ...v) {
      const y = typeof f == "string" || typeof f == "number" ? h(f) : f, I = y == null ? void 0 : y[Ga];
      return I == null ? !1 : I.dispatch(m, ...v);
    },
    print: s.print,
    println: s.println,
    clearConsole: s.clearConsole,
    me: t,
    my: t,
    // "me", "my" and "I" are synonyms
    I: t,
    nextCard: l("next"),
    prevCard: l("prev"),
    firstCard: l("first"),
    lastCard: l("last"),
    html: K,
    // intentionally lowercase (see BC_ScriptContext)
    preact: I1
  };
}
const j1 = {
  Id: he("deck"),
  Name: "BrowserCard Demo",
  readOnly: !1,
  swipeToAdjacentCard: !0,
  Script: "",
  Cards: [
    // card 1: start
    {
      Id: he("card"),
      Name: "Start",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: [
        {
          Id: he("widget"),
          Name: "Header",
          Number: 1,
          Type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          Variant: "rectangle",
          FillColor: "#1d3461",
          BorderColor: "transparent",
          BorderWidth: 0,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Title",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "BrowserCard",
          FontSize: 18,
          FontWeight: "bold",
          TextAlign: "center",
          Color: "#ffffff",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "WelcomeText",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 165],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          Text: `Welcome to BrowserCard!

BrowserCard is a browser-based reinterpretation of the classic HyperCard concept. Create interactive card decks with cards, buttons, fields, shapes and widgets.

Click one of the buttons below to learn more.`,
          FontSize: 11,
          FontWeight: "normal",
          TextAlign: "left",
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Demo Widgets",
          Number: 3,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 116, 263, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(Card('Demo Widgets')))"
        },
        {
          Id: he("widget"),
          Name: "Script Demo",
          Number: 4,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [161, 116, 263, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(Card('Script Demo')))"
        },
        {
          Id: he("widget"),
          Name: "Widget Demo",
          Number: 5,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [293, 116, 263, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(Card('Widget Demo')))"
        },
        {
          Id: he("widget"),
          Name: "About BrowserCard",
          Number: 6,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [424, 146, 263, 33],
          visible: !0,
          Variant: "shadow",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(Card('About BrowserCard')))"
        }
      ]
    },
    // card 2: demo objects
    {
      Id: he("card"),
      Name: "Demo Widgets",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: [
        {
          Id: he("widget"),
          Name: "Header",
          Number: 1,
          Type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          Variant: "rectangle",
          FillColor: "#1d3461",
          BorderColor: "transparent",
          BorderWidth: 0,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Title",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Demo Widgets",
          FontSize: 18,
          FontWeight: "bold",
          TextAlign: "center",
          Color: "#ffffff",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "BtnLabel",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 225, 51, 20],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Button styles:",
          FontSize: 10,
          FontWeight: "bold",
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Rounded Rect",
          Number: 3,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 98, 75, 27],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Rectangle",
          Number: 4,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [140, 98, 75, 27],
          visible: !0,
          Variant: "rectangle",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Shadow",
          Number: 5,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [249, 98, 75, 27],
          visible: !0,
          Variant: "shadow",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Standard",
          Number: 6,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [359, 98, 75, 27],
          visible: !0,
          Variant: "standard",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Transparent",
          Number: 7,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [468, 98, 75, 27],
          visible: !0,
          Variant: "transparent",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "ShapeLabel",
          Number: 8,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 300, 117, 17],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Shapes (filled):",
          FontSize: 10,
          FontWeight: "bold",
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Rectangle",
          Number: 9,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 105, 140, 54],
          visible: !0,
          Variant: "rectangle",
          FillColor: "#dbeafe",
          BorderColor: "#3b82f6",
          BorderWidth: 2,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Oval",
          Number: 10,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [158, 105, 140, 54],
          visible: !0,
          Variant: "oval",
          FillColor: "#fce7f3",
          BorderColor: "#ec4899",
          BorderWidth: 2,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Rounded Rectangle",
          Number: 11,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [285, 150, 140, 54],
          visible: !0,
          Variant: "rounded-rectangle",
          FillColor: "#dcfce7",
          BorderColor: "#22c55e",
          BorderWidth: 2,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "ShapeLabel2",
          Number: 12,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 300, 203, 17],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Shapes (lines & polygons):",
          FontSize: 10,
          FontWeight: "bold",
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Line",
          Number: 13,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 102, 225, 60],
          visible: !0,
          Variant: "line",
          BorderColor: "#0284c7",
          BorderWidth: 2,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Arrow",
          Number: 14,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [140, 102, 225, 60],
          visible: !0,
          Variant: "line",
          BorderColor: "#0369a1",
          BorderWidth: 2,
          ArrowEnd: !0,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Arc",
          Number: 15,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [249, 102, 225, 60],
          visible: !0,
          Variant: "arc",
          BorderColor: "#9333ea",
          BorderWidth: 2,
          ArrowEnd: !0,
          Curvature: 0.4,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Triangle",
          Number: 16,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [359, 84, 225, 60],
          visible: !0,
          Variant: "polygon",
          Sides: 3,
          FillColor: "#fef9c3",
          BorderColor: "#ca8a04",
          BorderWidth: 2,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Hexagon",
          Number: 17,
          Type: "shape",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [450, 90, 225, 60],
          visible: !0,
          Variant: "polygon",
          Sides: 6,
          FillColor: "#ede9fe",
          BorderColor: "#7c3aed",
          BorderWidth: 2,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "FieldLabel",
          Number: 18,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 225, 297, 17],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Text fields:",
          FontSize: 10,
          FontWeight: "bold",
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "OpaqueField",
          Number: 19,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [30, 165, 320, 54],
          visible: !0,
          Variant: "opaque",
          lockText: !1,
          scrolling: !0,
          showLines: !0,
          dontSearch: !1,
          sharedText: !1,
          Text: `Editable field
(style: opaque, with lines)`,
          FontSize: 10,
          Color: "#222",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "ShadowField",
          Number: 20,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [218, 165, 320, 54],
          visible: !0,
          Variant: "shadow",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          Text: `Locked text field
(style: shadow)`,
          FontSize: 10,
          Color: "#444",
          Script: ""
        }
      ]
    },
    // card 3: script demo
    {
      Id: he("card"),
      Name: "Script Demo",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: [
        {
          Id: he("widget"),
          Name: "Header",
          Number: 1,
          Type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          Variant: "rectangle",
          FillColor: "#1d3461",
          BorderColor: "transparent",
          BorderWidth: 0,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Title",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Script Demo",
          FontSize: 18,
          FontWeight: "bold",
          TextAlign: "center",
          Color: "#ffffff",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Info",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 75],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          Text: "This card demonstrates scripting. Each button has a script which runs when it is clicked.",
          FontSize: 11,
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "AnswerBtn",
          Number: 3,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 143, 150, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => answer('Hello from a script!', 'OK'))"
        },
        {
          Id: he("widget"),
          Name: "InputBtn",
          Number: 4,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [229, 143, 150, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => ask('What is your name?', ''))"
        },
        {
          Id: he("widget"),
          Name: "Open URL",
          Number: 5,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [398, 143, 150, 33],
          visible: !0,
          Variant: "shadow",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => openURL('https://github.com/rozek/webapp-crafter'))"
        },
        {
          Id: he("widget"),
          Name: "NextCardBtn",
          Number: 6,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [229, 143, 210, 33],
          visible: !0,
          Variant: "standard",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(nextCard))"
        }
      ]
    },
    // card 4: widget demo
    {
      Id: he("card"),
      Name: "Widget Demo",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: [
        {
          Id: he("widget"),
          Name: "Header",
          Number: 1,
          Type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          Variant: "rectangle",
          FillColor: "#1d3461",
          BorderColor: "transparent",
          BorderWidth: 0,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Title",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "Widget Demo",
          FontSize: 18,
          FontWeight: "bold",
          TextAlign: "center",
          Color: "#ffffff",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Info",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 45],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          Text: "BC_Widget: objects fully defined in Preact + htm with their own state.",
          FontSize: 11,
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Counter",
          Number: 3,
          Type: "generic",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [150, 300, 113, 195],
          visible: !0,
          Configuration: { label: "Clicks" },
          Script: `on('render', () => {
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
          Id: he("widget"),
          Name: "Clock",
          Number: 4,
          Type: "generic",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 225, 330, 75],
          visible: !0,
          Configuration: {},
          Script: `let _timer = null
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
          Id: he("widget"),
          Name: "StartBtn",
          Number: 5,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [413, 128, 383, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(Card('Start')))"
        }
      ]
    },
    // card 5: about BrowserCard
    {
      Id: he("card"),
      Name: "About BrowserCard",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: [
        {
          Id: he("widget"),
          Name: "Header",
          Number: 1,
          Type: "shape",
          zIndex: 1,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 0, 40],
          visible: !0,
          Variant: "rectangle",
          FillColor: "#1d3461",
          BorderColor: "transparent",
          BorderWidth: 0,
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "Title",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [0, 600, 8, 27],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !1,
          showLines: !1,
          dontSearch: !0,
          sharedText: !1,
          Text: "About BrowserCard",
          FontSize: 18,
          FontWeight: "bold",
          TextAlign: "center",
          Color: "#ffffff",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "InfoText",
          Number: 2,
          Type: "field",
          zIndex: 2,
          Anchors: ["left-width", "top-height"],
          Offsets: [60, 480, 56, 285],
          visible: !0,
          Variant: "transparent",
          lockText: !0,
          scrolling: !0,
          showLines: !1,
          dontSearch: !1,
          sharedText: !1,
          Text: `BrowserCard (BC) is a browser-based reinterpretation of NovoCard, which itself was a reinterpretation of HyperCard (Apple, 1987).

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
          FontSize: 11,
          Color: "#1d3461",
          Script: ""
        },
        {
          Id: he("widget"),
          Name: "StartBtn",
          Number: 3,
          Type: "button",
          zIndex: 3,
          Anchors: ["left-width", "top-height"],
          Offsets: [236, 128, 360, 33],
          visible: !0,
          Variant: "rounded-rect",
          showName: !0,
          autoHilite: !0,
          enabled: !0,
          sharedHilite: !1,
          Script: "on('click', () => go(Card('Start')))"
        }
      ]
    }
  ]
}, X2 = JSON.stringify(j1), Wt = Bc("browser-card", "decks"), R0 = "bc-deck:";
function to(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Id) && S.ValueIsString(r.Type) && Js(r.Anchors) && Ys(r.Offsets);
}
function ro(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Id) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Widgets) && r.Widgets.every(to);
}
function Tr(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Cards) && r.Cards.every(ro);
}
const bs = "web application/x-browsercard-card", vs = "web application/x-browsercard-widget";
async function sc(r, e) {
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
async function J2() {
  try {
    const r = await navigator.clipboard.read();
    for (const e of r) {
      if (e.types.includes(bs))
        return { Kind: "card", Serialization: await (await e.getType(bs)).text() };
      if (e.types.includes(vs))
        return { Kind: "widget", Serialization: await (await e.getType(vs)).text() };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not inspect the clipboard - trying plain text:", r);
  }
  try {
    const r = (await navigator.clipboard.readText()).trim(), e = JSON.parse(r);
    switch (!0) {
      case ro(e):
        return { Kind: "card", Serialization: r };
      case to(e):
        return { Kind: "widget", Serialization: r };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not read from the clipboard:", r);
  }
  return null;
}
function Fn(r) {
  const e = (t) => {
    if (t == null)
      return;
    const n = /-(\d+)$/.exec(t);
    n != null && (ja = Math.max(ja, parseInt(n[1], 10)));
  };
  e(r.Id), r.Cards.forEach((t) => {
    e(t.Id), t.Widgets.forEach((n) => e(n.Id));
  });
}
function Y2(r) {
  var t, n;
  const e = {};
  if (r.FontFamily && (e.fontFamily = r.FontFamily), r.FontSize != null && (e.fontSize = `${r.FontSize}px`), r.FontWeight && (e.fontWeight = P4[r.FontWeight]), r.FontStyle && (e.fontStyle = r.FontStyle), r.LineHeight != null && (e.lineHeight = `${r.LineHeight}px`), r.ForegroundColor && (e.color = r.ForegroundColor), r.TextAlignment && (e.textAlign = r.TextAlignment), r.Opacity != null && (e.opacity = r.Opacity), r.Cursor && (e.cursor = r.Cursor), (t = r.TextDecoration) != null && t.isActive) {
    const a = r.TextDecoration;
    let i = a.Line;
    a.Style && (i += ` ${a.Style}`), a.Color && (i += ` ${a.Color}`), a.Thickness != null && (i += ` ${a.Thickness}px`), e.textDecoration = i;
  }
  if ((n = r.TextShadow) != null && n.isActive && r.TextShadow.Color !== "transparent") {
    const a = r.TextShadow;
    e.textShadow = `${a.xOffset}px ${a.yOffset}px ${a.BlurRadius}px ${a.Color}`;
  }
  if (r.hasBackground === !1)
    e.background = "transparent";
  else if (r.BackgroundColor && (e.backgroundColor = r.BackgroundColor), r.BackgroundTexture) {
    const a = r.BackgroundTexture, i = {
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
function Q2(r) {
  var t;
  const e = {};
  if (r.BorderWidths) {
    const [n, a, i, s] = r.BorderWidths;
    e.borderWidth = `${n}px ${a}px ${i}px ${s}px`;
  }
  if (r.BorderStyles) {
    const [n, a, i, s] = r.BorderStyles;
    e.borderStyle = `${n} ${a} ${i} ${s}`;
  }
  if (r.BorderColors) {
    const [n, a, i, s] = r.BorderColors;
    e.borderColor = `${n} ${a} ${i} ${s}`;
  }
  if (r.BorderRadii) {
    const [n, a, i, s] = r.BorderRadii;
    e.borderRadius = `${n}px ${a}px ${i}px ${s}px`;
  }
  if ((t = r.BoxShadow) != null && t.isActive) {
    const n = r.BoxShadow;
    e.boxShadow = `${n.xOffset}px ${n.yOffset}px ${n.BlurRadius}px ${n.SpreadRadius}px ${n.Color}`;
  }
  return e;
}
function sr(r, e, t, n) {
  let a = 0, i = 0, s = 0, o = 0;
  switch (r[0]) {
    case "left-width":
      a = e[0], i = e[1];
      break;
    case "left-right":
      a = e[0], i = t - e[0] - e[1];
      break;
    case "width-right":
      i = e[0], a = t - e[0] - e[1];
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
  return { left: a, top: s, width: i, height: o };
}
function J0(r, e, t, n, a, i, s) {
  let o = 0, l = 0, d = 0, h = 0;
  switch (a[0]) {
    case "left-width":
      o = r, l = t;
      break;
    case "left-right":
      o = r, l = i - r - t;
      break;
    case "width-right":
      o = t, l = i - t - r;
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
  return [o, l, d, h];
}
function e5(r, e, t, n, a) {
  let i = null, s = null;
  return new Proxy(r, {
    get(o, l) {
      if (l === Ga)
        return s;
      switch (l) {
        case "own":
          return i ?? (i = {});
        case "Applet":
          return t;
        case "Card":
          return n;
        case "x": {
          const { left: d } = sr(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "y": {
          const { top: d } = sr(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "Width": {
          const { width: d } = sr(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "Height": {
          const { height: d } = sr(o.Anchors, o.Offsets, e.current.W, e.current.H);
          return d;
        }
        case "changeGeometryTo":
          return (d, h, f, m) => {
            const { W: v, H: y } = e.current, { left: I, top: N, width: z, height: $ } = sr(o.Anchors, o.Offsets, v, y), M = J0(d ?? I, h ?? N, f ?? z, m ?? $, o.Anchors, v, y);
            return o.Offsets = M, a(), M;
          };
        default:
          return Reflect.get(o, l);
      }
    },
    set(o, l, d) {
      return l === Ga ? (s = d, !0) : l === "own" ? (i = d, !0) : (Object.is(Reflect.get(o, l), d) || (Reflect.set(o, l, d), a()), !0);
    }
  });
}
function t5(r, e, t, n) {
  let a = null, i;
  return i = new Proxy(r, {
    get(s, o) {
      switch (o) {
        case "own":
          return a ?? (a = {});
        case "Applet":
          return e;
        case "Card":
          return i;
        case "WidgetList":
          return t.current;
        default:
          return Reflect.get(s, o);
      }
    },
    set(s, o, l) {
      return o === "own" ? (a = l, !0) : (Object.is(Reflect.get(s, o), l) || (Reflect.set(s, o, l), n()), !0);
    }
  }), i;
}
function r5(r, e, t) {
  let n = null, a = "", i = 0, s = 0, o;
  return o = new Proxy(r, {
    get(l, d) {
      if (d === ui)
        return t;
      if (d === Sn)
        return a;
      if (d === K0)
        return i;
      if (d === Z0)
        return s;
      switch (d) {
        case "own":
          return n ?? (n = {});
        case "Applet":
          return o;
        case "Card":
          return e.current;
        case "Console_LineLimit":
          return Reflect.get(l, d) ?? eo;
        case "Console_CharLimit":
          return Reflect.get(l, d) ?? Qs;
        default:
          return Reflect.get(l, d);
      }
    },
    set(l, d, h) {
      return d === "own" ? (n = h, !0) : d === Sn ? (a = h, !0) : d === K0 ? (i = h, !0) : d === Z0 ? (s = h, !0) : (Object.is(Reflect.get(l, d), h) || (Reflect.set(l, d, h), t()), !0);
    }
  }), o;
}
function n5(r, e, t) {
  const { left: n, top: a, width: i, height: s } = sr(r.Anchors, r.Offsets, e, t);
  return {
    left: n,
    top: a,
    width: i,
    height: s,
    zIndex: r.zIndex,
    display: r.visible ? void 0 : "none",
    ...Y2(r),
    ...Q2(r)
  };
}
function Aa(r, e, t, n, a, i) {
  const s = Math.sqrt(t * t + n * n);
  if (s < 1e-3)
    return "";
  const o = t / s, l = n / s, d = r - a * o, h = e - a * l;
  return `${r},${e} ${d - i * l},${h + i * o} ${d + i * l},${h - i * o}`;
}
function a5(r, e, t) {
  const n = r.BorderColor ?? "#333", a = r.BorderWidth ?? 2, i = r.FillColor ?? "transparent";
  if (r.Variant === "rectangle" || r.Variant === "rounded-rectangle" || r.Variant === "oval") {
    const N = r.Variant === "oval" ? "50%" : r.Variant === "rounded-rectangle" ? `${r.CornerRadius ?? 12}px` : void 0;
    return K`
      <div style=${{
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      background: i,
      border: `${a}px solid ${n}`,
      borderRadius: N
    }}></div>
    `;
  }
  if (r.Variant === "polygon") {
    const N = Math.max(3, r.Sides ?? 6), z = e / 2, $ = t / 2, M = e / 2 - a, H = t / 2 - a, q = Array.from({ length: N }, (E, ae) => {
      const ne = 2 * Math.PI * ae / N - Math.PI / 2;
      return `${z + M * Math.cos(ne)},${$ + H * Math.sin(ne)}`;
    }).join(" ");
    return K`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <polygon points=${q}
          fill=${i} stroke=${n} strokeWidth=${a} strokeLinejoin="round"/>
      </svg>
    `;
  }
  const s = r.ArrowStart === !0, o = r.ArrowEnd === !0, l = Math.max(a * 4, 10), d = l * 0.5, h = {
    stroke: n,
    strokeWidth: a,
    fill: "none",
    strokeLinecap: "round"
  };
  if (r.Variant === "line") {
    const N = s ? K`<polygon
      points=${Aa(0, 0, -e, -t, l, d)} fill=${n} stroke="none"/>` : null, z = o ? K`<polygon
      points=${Aa(e, t, e, t, l, d)} fill=${n} stroke="none"/>` : null;
    return K`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <line x1="0" y1="0" x2=${e} y2=${t} ...${h}/>
        ${N}${z}
      </svg>
    `;
  }
  const f = r.Curvature ?? 0.4, m = e / 2 - f * t, v = t / 2 + f * e, y = s ? K`<polygon
    points=${Aa(0, 0, -m, -v, l, d)} fill=${n} stroke="none"/>` : null, I = o ? K`<polygon
    points=${Aa(e, t, e - m, t - v, l, d)} fill=${n} stroke="none"/>` : null;
  return K`
    <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
      <path d=${`M 0 0 Q ${m} ${v} ${e} ${t}`} ...${h}/>
      ${y}${I}
    </svg>
  `;
}
ia.set("button", async ({ on: r, me: e, html: t, dispatch: n }) => {
  const a = e;
  function i() {
    a.autoHilite === !0 && (a.Variant === "checkbox" || a.Variant === "radio") && (a.Hilite = !a.Hilite), n("click");
  }
  r("render", () => {
    const s = (
      // "Text" takes precedence over the mere name
      a.Text != null && a.Text !== "" ? a.Text : a.Name
    );
    return t`
      <button
        class=${`bc-btn s-${a.Variant ?? "default"}${a.Hilite ? " hilite" : ""}`}
        disabled=${!a.enabled}
        style=${{ width: "100%", height: "100%" }}
        onClick=${a.enabled ? i : void 0}
        title=${a.Name}
      >${a.showName ? s : null}</button>
    `;
  });
});
ia.set("field", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const a = n.scrolling ? " scrollable" : " no-scroll", i = n.showLines ? " show-lines" : "", s = `bc-field s-${n.Variant ?? "default"}${a}${i}`, o = {
      fontSize: n.FontSize ?? 14,
      fontWeight: n.FontWeight ?? "normal",
      textAlign: n.TextAlign ?? "left",
      color: n.Color ?? "#111"
    };
    return n.lockText ? t`
          <div class=${s} style=${{ width: "100%", height: "100%", ...o }}>${n.Text}</div>
        ` : t`
          <textarea
            class=${s}
            style=${{ ...o, width: "100%", height: "100%", padding: "4px 6px" }}
            onInput=${(l) => {
      n.Text = l.target.value;
    }}
          >${n.Text}</textarea>
        `;
  });
});
ia.set("shape", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const a = n.Width ?? 0, i = n.Height ?? 0;
    return t`${a5(n, a, i)}`;
  });
});
ia.set("picture", async ({ on: r, me: e, html: t }) => {
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
function i5({
  Obj: r,
  containerW: e,
  containerH: t,
  makeContext: n,
  deckProxy: a,
  cardProxy: i,
  onWidgetProxy: s,
  onReady: o,
  onMessage: l
}) {
  const [, d] = Je(0), h = Le(!1), f = vr(() => {
    h.current || d((B) => B + 1);
  }, []), m = Le(null);
  m.current == null && (m.current = new Ka());
  const v = Le({ W: e, H: t });
  v.current = { W: e, H: t };
  const y = Le(null);
  y.current == null && (y.current = e5(r, v, a, i, f));
  const I = y.current, N = Le(o);
  N.current = o;
  const z = Le(l);
  z.current = l;
  const $ = Le(null);
  $.current == null && ($.current = n(I));
  const M = Le(void 0);
  if (M.current == null) {
    const B = m.current;
    M.current = {
      Configuration: r.Configuration ?? {},
      dispatch: (be, ...Ie) => {
        var me;
        B.dispatch(be, ...Ie), (me = z.current) == null || me.call(z, be);
      }
    };
  }
  const q = (/* @__PURE__ */ new Set(["button", "field", "shape", "picture"])).has(r.Type) ? `await behaveLike(${JSON.stringify(r.Type)})
` : "";
  if (Jt(() => {
    const B = m.current, { Params: be, Args: Ie } = Xa(B, $.current, "widget", M.current);
    I[Ga] = B, s(r.Id, I);
    let me = r.Script ?? "";
    if (me.trim() !== "")
      try {
        new Function(`return (async () => {
${me}
})()`);
      } catch (Se) {
        console.warn("[BrowserCard] syntax error in script of widget " + S.quoted(r.Name) + ":", Se), me = "";
      }
    const qe = q + me;
    return B.run(qe, be, Ie).then(async () => {
      f(), await B.dispatch("ready"), N.current(r.Id);
    }), () => {
      B.teardown();
    };
  }, [r.Script]), !r.visible)
    return null;
  const E = m.current;
  h.current = !0;
  let ae;
  try {
    ae = E.renderResult() ?? null;
  } finally {
    h.current = !1;
  }
  const ne = r.Type === "shape" || r.Type === "button" ? { overflow: "visible" } : { overflow: "hidden" };
  return K`
    <div
      class=${`bc-obj${r.Type === "shape" ? " bc-shape" : ""}`}
      style=${{ ...n5(r, e, t), ...ne }}
    >
      ${ae}
    </div>
  `;
}
const u0 = 8, s5 = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#e5e7eb"/><circle cx="55" cy="35" r="10" fill="#9ca3af"/><path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/></svg>'
);
function oc(r, e) {
  let t = r, n = 1;
  for (; e.has(t); )
    n += 1, t = `${r} ${n}`;
  return t;
}
function o5(r, e, t, n) {
  const a = {
    button: { BaseName: "Button", Width: 140, Height: 36 },
    field: { BaseName: "Field", Width: 200, Height: 80 },
    shape: { BaseName: "Shape", Width: 140, Height: 100 },
    picture: { BaseName: "Picture", Width: 160, Height: 120 },
    generic: { BaseName: "Widget", Width: 200, Height: 120 }
  }, { BaseName: i, Width: s, Height: o } = a[r], l = new Set(e.Widgets.map((v) => v.Name));
  let d = i, h = 1;
  for (; l.has(d); )
    h += 1, d = `${i}-${h}`;
  const f = e.Widgets.reduce((v, y) => Math.max(v, y.zIndex), 0), m = {
    Id: he("widget"),
    Name: d,
    Number: f + 1,
    Type: r,
    zIndex: f + 1,
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
      Object.assign(m, {
        Variant: "rounded-rect",
        showName: !0,
        autoHilite: !0,
        enabled: !0,
        sharedHilite: !1,
        Text: ""
      });
      break;
    case "field":
      Object.assign(m, {
        Variant: "opaque",
        lockText: !1,
        scrolling: !1,
        showLines: !1,
        dontSearch: !1,
        sharedText: !1,
        Text: "Text",
        FontSize: 14
      });
      break;
    case "shape":
      Object.assign(m, {
        Variant: "rectangle",
        FillColor: "#dbeafe",
        BorderColor: "#3b82f6",
        BorderWidth: 2
      });
      break;
    case "picture":
      Object.assign(m, {
        Variant: "scale-aspect-fit",
        autoHilite: !1,
        ImageData: s5,
        actualWidth: s,
        actualHeight: o
      });
      break;
    default:
      Object.assign(m, {
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
  return m;
}
function l5({
  Objects: r,
  CanvasW: e,
  CanvasH: t,
  Scale: n,
  selectedId: a,
  onSelect: i,
  onEdited: s,
  Grid: o = { isActive: !1, Width: 10, Height: 10 },
  onBeforeEdit: l
}) {
  const d = Le(null);
  function h($, M, H, q = "") {
    $.stopPropagation(), $.preventDefault(), $.currentTarget.setPointerCapture($.pointerId), d.current = {
      PointerId: $.pointerId,
      Mode: H,
      Direction: q,
      startX: $.clientX,
      startY: $.clientY,
      Origin: sr(M.Anchors, M.Offsets, e, t),
      Obj: M,
      captured: !1
    };
  }
  function f($) {
    const M = d.current;
    if (M == null || $.pointerId !== M.PointerId)
      return;
    M.captured || (M.captured = !0, l == null || l());
    const H = ($.clientX - M.startX) / n, q = ($.clientY - M.startY) / n;
    let { left: E, top: ae, width: ne, height: B } = M.Origin;
    M.Mode === "move" ? (E += H, ae += q, o.isActive && (E = Math.round(E / o.Width) * o.Width, ae = Math.round(ae / o.Height) * o.Height)) : (M.Direction.includes("w") && (E += H, ne -= H), M.Direction.includes("e") && (ne += H), M.Direction.includes("n") && (ae += q, B -= q), M.Direction.includes("s") && (B += q), ne < u0 && (M.Direction.includes("w") && (E = M.Origin.left + M.Origin.width - u0), ne = u0), B < u0 && (M.Direction.includes("n") && (ae = M.Origin.top + M.Origin.height - u0), B = u0), o.isActive && (ne = Math.max(o.Width, Math.round(ne / o.Width) * o.Width), B = Math.max(o.Height, Math.round(B / o.Height) * o.Height), M.Direction.includes("w") && (E = M.Origin.left + M.Origin.width - ne), M.Direction.includes("n") && (ae = M.Origin.top + M.Origin.height - B))), M.Obj.Offsets = J0(
      E,
      ae,
      ne,
      B,
      M.Obj.Anchors,
      e,
      t
    ), s();
  }
  function m($) {
    const M = d.current;
    M == null || $.pointerId !== M.PointerId || ($.currentTarget.releasePointerCapture($.pointerId), d.current = null);
  }
  const v = r.find(($) => $.Id === a), y = Math.max(6, 8 / n), I = ["nw", "n", "ne", "e", "se", "s", "sw", "w"];
  function N($, M) {
    return {
      width: y,
      height: y,
      cursor: $ + "-resize",
      left: ($.includes("w") ? 0 : $.includes("e") ? M.width : M.width / 2) - y / 2,
      top: ($.includes("n") ? 0 : $.includes("s") ? M.height : M.height / 2) - y / 2
    };
  }
  const z = o.isActive ? {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
    backgroundSize: `${o.Width}px ${o.Height}px`
  } : {};
  return K`
      <div class="bc-edit-layer" style=${z} onPointerDown=${() => i(null)} onContextMenu=${($) => $.preventDefault()}>
        ${r.map(($) => {
    const M = sr($.Anchors, $.Offsets, e, t);
    return K`
            <div key=${$.Id}
              class=${`bc-edit-hit${$.visible ? "" : " invisible"}`}
              style=${{ left: M.left, top: M.top, width: M.width, height: M.height, zIndex: $.zIndex }}
              onPointerDown=${(H) => {
      i($.Id), h(H, $, "move");
    }}
              onPointerMove=${f}
              onPointerUp=${m}
              onContextMenu=${(H) => H.preventDefault()}
            ></div>
          `;
  })}
        ${v != null && (() => {
    const $ = sr(v.Anchors, v.Offsets, e, t);
    return K`
            <div class="bc-selection-frame"
              style=${{ left: $.left, top: $.top, width: $.width, height: $.height }}>
              ${I.map((M) => K`
                <div key=${M} class="bc-handle" style=${N(M, $)}
                  onPointerDown=${(H) => h(H, v, "resize", M)}
                  onPointerMove=${f}
                  onPointerUp=${m}
                  onContextMenu=${(H) => H.preventDefault()}
                ></div>
              `)}
            </div>
          `;
  })()}
      </div>
    `;
}
function c5({
  State: r,
  onClose: e
}) {
  const [t, n] = Je(() => ({
    x: Math.max(8, Math.round((window.innerWidth - 560) / 2)),
    y: Math.max(8, Math.round((window.innerHeight - 420) / 2)),
    Width: 560,
    Height: 420
  })), a = Le(r.Value), i = Le(null);
  function s(h, f) {
    h.stopPropagation(), h.preventDefault(), h.currentTarget.setPointerCapture(h.pointerId), i.current = {
      PointerId: h.pointerId,
      Mode: f,
      startX: h.clientX,
      startY: h.clientY,
      Origin: { ...t }
    };
  }
  function o(h) {
    const f = i.current;
    if (f == null || h.pointerId !== f.PointerId)
      return;
    const m = h.clientX - f.startX, v = h.clientY - f.startY;
    f.Mode === "move" ? n((y) => ({
      ...y,
      x: Math.max(0, f.Origin.x + m),
      y: Math.max(0, f.Origin.y + v)
    })) : n((y) => ({
      ...y,
      Width: Math.max(300, f.Origin.Width + m),
      Height: Math.max(200, f.Origin.Height + v)
    }));
  }
  function l(h) {
    const f = i.current;
    f == null || h.pointerId !== f.PointerId || (h.currentTarget.releasePointerCapture(h.pointerId), i.current = null);
  }
  function d() {
    r.onCommit(a.current), e();
  }
  return Jt(() => {
    function h(f) {
      f.key === "Escape" && (f.stopPropagation(), e()), f.key === "Enter" && (f.metaKey || f.ctrlKey) && (f.stopPropagation(), d());
    }
    return window.addEventListener("keydown", h, !0), () => window.removeEventListener("keydown", h, !0);
  }, []), K`
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
          onPointerUp=${l}
          onContextMenu=${(h) => h.preventDefault()}
        ></div>
      </div>
    `;
}
function u5({
  Widget: r,
  CanvasW: e,
  CanvasH: t,
  onEdited: n,
  CardNames: a = [],
  CardIndex: i = 0,
  onDelete: s,
  onReorder: o,
  onMoveTo: l,
  Card: d = null,
  Deck: h = null,
  onOpenEditor: f,
  onBeforeEdit: m,
  onCopy: v
}) {
  if (r == null) {
    let W = function(se, fe) {
      m == null || m(`card:${d.Id}:${se}`), d[se] = fe, n();
    }, Y = function(se, fe) {
      h != null && (m == null || m(`deck:${se}`), h[se] = fe, n());
    };
    if (d == null)
      return K`
          <div class="bc-props-panel">
            <div class="bc-props-empty">
              no widget selected<br/><br/>
              click a widget to inspect and edit its properties<br/><br/>
              use "+ New" in the menu bar to create a new widget
            </div>
          </div>
        `;
    const ye = d.Color ?? "#ffffff", ie = /^#[0-9a-f]{6}$/i.test(ye);
    return K`
        <div class="bc-props-panel">
          <div class="bc-props-title">${d.Name}</div>
          <div class="bc-props-subtitle">card · ${d.Id}</div>
          <div class="bc-props-hint">
            no widget selected - these are the properties of the card itself
          </div>

          <div class="bc-props-section">General</div>
          <div class="bc-props-row">
            <label>Name</label>
            <input type="text" value=${d.Name}
              onInput=${(se) => W("Name", se.target.value)}/>
          </div>
          <div class="bc-props-row">
            <label>Color</label>
            <input type="color" value=${ie ? ye : "#ffffff"}
              onInput=${(se) => W("Color", se.target.value)}/>
            <input type="text" value=${ye}
              onInput=${(se) => W("Color", se.target.value)}/>
          </div>
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${!d.dontSearch}
              onChange=${(se) => W("dontSearch", !se.target.checked)}/>
          </div>

          ${h != null && K`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${h.CardWidth ?? 600}
                onInput=${(se) => {
      const fe = parseFloat(se.target.value);
      isFinite(fe) && fe >= 50 && Y("CardWidth", fe);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${h.CardHeight ?? 450}
                onInput=${(se) => {
      const fe = parseFloat(se.target.value);
      isFinite(fe) && fe >= 50 && Y("CardHeight", fe);
    }}/>
            </div>

            <div class="bc-props-section">Grid (Deck)</div>
            <div class="bc-props-row">
              <label>snap to grid</label>
              <input type="checkbox" checked=${h.SnapToGrid === !0}
                onChange=${(se) => Y("SnapToGrid", se.target.checked)}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Width</label>
              <input type="number" min="1" value=${h.GridWidth ?? 10}
                onInput=${(se) => {
      const fe = parseFloat(se.target.value);
      isFinite(fe) && fe >= 1 && Y("GridWidth", fe);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${h.GridHeight ?? 10}
                onInput=${(se) => {
      const fe = parseFloat(se.target.value);
      isFinite(fe) && fe >= 1 && Y("GridHeight", fe);
    }}/>
            </div>

            <div class="bc-props-section">Script (Deck)</div>
            <div class="bc-props-row column">
              <div class="bc-props-rowheader">
                <label>Script</label>
                ${f != null && K`
                  <button class="bc-props-expand" title="open in editor window"
                    onClick=${() => f(
      `Deck "${h.Name}" - Script`,
      h.Script ?? "",
      (se) => Y("Script", se)
    )}>⤢</button>
                `}
              </div>
              <textarea rows="10" spellcheck=${!1} defaultValue=${h.Script ?? ""}
                onChange=${(se) => Y("Script", se.target.value)}
              ></textarea>
              <div class="bc-props-hint">applied when the field loses focus</div>
            </div>
          `}

          <div class="bc-props-section">Script</div>
          <div class="bc-props-row column">
            <div class="bc-props-rowheader">
              <label>Script</label>
              ${f != null && K`
                <button class="bc-props-expand" title="open in editor window"
                  onClick=${() => f(
      `Card "${d.Name}" - Script`,
      d.Script ?? "",
      (se) => W("Script", se)
    )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${!1} defaultValue=${d.Script ?? ""}
              onChange=${(se) => W("Script", se.target.value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `;
  }
  const y = sr(r.Anchors, r.Offsets, e, t);
  function I(W, Y) {
    m == null || m(`prop:${r.Id}:${W}`), r[W] = Y, n();
  }
  function N(W, Y, ye, ie) {
    m == null || m(`geo:${r.Id}`), r.Offsets = J0(
      W ?? y.left,
      Y ?? y.top,
      ye ?? y.width,
      ie ?? y.height,
      r.Anchors,
      e,
      t
    ), n();
  }
  function z(W, Y) {
    m == null || m(`anchors:${r.Id}`);
    const ye = [...r.Anchors];
    ye[W] = Y, r.Anchors = ye, r.Offsets = J0(
      y.left,
      y.top,
      y.width,
      y.height,
      ye,
      e,
      t
    ), n();
  }
  function $(W, Y) {
    return K`<input type="number" value=${Math.round(W * 100) / 100}
        onInput=${(ye) => {
      const ie = parseFloat(ye.target.value);
      isFinite(ie) && Y(ie);
    }}/>`;
  }
  function M(W, Y) {
    return K`<div class="bc-props-row">
        <label>${W}</label>
        <input type="text" value=${r[Y] ?? ""}
          onInput=${(ye) => I(Y, ye.target.value)}/>
      </div>`;
  }
  function H(W, Y, ye = 0) {
    return K`<div class="bc-props-row">
        <label>${W}</label>
        ${$(
      r[Y] ?? ye,
      (ie) => I(Y, ie)
    )}
      </div>`;
  }
  function q(W, Y) {
    return K`<div class="bc-props-row">
        <label>${W}</label>
        <input type="checkbox" checked=${!!r[Y]}
          onChange=${(ye) => I(Y, ye.target.checked)}/>
      </div>`;
  }
  function E(W, Y, ye) {
    return K`<div class="bc-props-row">
        <label>${W}</label>
        <select value=${r[Y] ?? ye[0]}
          onChange=${(ie) => I(Y, ie.target.value)}>
          ${ye.map((ie) => K`<option key=${ie} value=${ie}>${ie}</option>`)}
        </select>
      </div>`;
  }
  function ae(W, Y, ye) {
    const ie = r[Y] ?? ye, se = /^#[0-9a-f]{6}$/i.test(ie);
    return K`<div class="bc-props-row">
        <label>${W}</label>
        <input type="color" value=${se ? ie : "#000000"}
          onInput=${(fe) => I(Y, fe.target.value)}/>
        <input type="text" value=${ie}
          onInput=${(fe) => I(Y, fe.target.value)}/>
      </div>`;
  }
  const ne = (
    // user-facing name of the widget's type
    r.Type === "generic" ? "custom widget" : r.Type
  );
  function B(W, Y, ye) {
    return K`<div class="bc-props-rowheader">
        <label>${W}</label>
        ${f != null && K`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => f(
      `${ne} "${r.Name}" - ${W}`,
      Y(),
      ye
    )}>⤢</button>
        `}
      </div>`;
  }
  function be(W, Y, ye = 4) {
    return K`<div class="bc-props-row column">
        ${B(
      W,
      () => String(r[Y] ?? ""),
      (ie) => I(Y, ie)
    )}
        <textarea rows=${ye} defaultValue=${r[Y] ?? ""}
          onInput=${(ie) => I(Y, ie.target.value)}
        ></textarea>
      </div>`;
  }
  function Ie(W) {
    try {
      I("Configuration", JSON.parse(W));
    } catch (Y) {
      console.warn('[BrowserCard] invalid JSON for "Configuration":', Y), window.alert("The given configuration is no valid JSON and was not applied.");
    }
  }
  function me() {
    return K`<div class="bc-props-row column">
        ${B(
      "Configuration (JSON)",
      () => JSON.stringify(r.Configuration ?? {}, null, 2),
      Ie
    )}
        <textarea rows="5" spellcheck=${!1}
          defaultValue=${JSON.stringify(r.Configuration ?? {}, null, 2)}
          onChange=${(W) => Ie(W.target.value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`;
  }
  function qe() {
    return K`<div class="bc-props-row column">
        ${B(
      "Script",
      () => r.Script ?? "",
      (W) => I("Script", W)
    )}
        <textarea rows="8" spellcheck=${!1} defaultValue=${r.Script ?? ""}
          onChange=${(W) => I("Script", W.target.value)}
        ></textarea>
        <div class="bc-props-hint">applied when the field loses focus</div>
      </div>`;
  }
  let Se = null;
  switch (r.Type) {
    case "button":
      Se = K`
          ${E("Style", "Variant", ["rounded-rect", "rectangle", "oval", "shadow", "checkbox", "radio", "standard", "transparent"])}
          ${M("Text", "Text")}
          ${q("show label", "showName")}
          ${q("enabled", "enabled")}
          ${q("auto-hilite", "autoHilite")}
          ${q("hilite", "Hilite")}
        `;
      break;
    case "field":
      Se = K`
          ${E("Style", "Variant", ["opaque", "transparent", "shadow", "rectangle"])}
          ${be("Text", "Text")}
          ${q("locked", "lockText")}
          ${q("scrolling", "scrolling")}
          ${q("show lines", "showLines")}
          ${H("Font Size", "FontSize", 14)}
          ${E("Font Weight", "FontWeight", ["normal", "bold"])}
          ${E("Alignment", "TextAlign", ["left", "center", "right"])}
          ${ae("Color", "Color", "#111111")}
        `;
      break;
    case "shape":
      Se = K`
          ${E("Style", "Variant", ["rectangle", "rounded-rectangle", "oval", "line", "arc", "polygon"])}
          ${ae("Fill Color", "FillColor", "transparent")}
          ${ae("Border Color", "BorderColor", "#333333")}
          ${H("Border Width", "BorderWidth", 2)}
          ${q("arrow at start", "ArrowStart")}
          ${q("arrow at end", "ArrowEnd")}
          ${H("Curvature", "Curvature", 0.4)}
          ${H("Sides", "Sides", 6)}
          ${H("Corner Radius", "CornerRadius", 12)}
        `;
      break;
    case "picture":
      Se = K`
          ${E("Style", "Variant", ["scale-aspect-fill", "scale-aspect-fit", "scale-to-fill", "actual-size", "center"])}
          ${M("Image URL", "ImageData")}
        `;
      break;
    default:
      Se = me();
  }
  return K`
      <div class="bc-props-panel">
        <div class="bc-props-title">${r.Name}</div>
        <div class="bc-props-subtitle">${ne} · ${r.Id}</div>

        <div class="bc-props-section">General</div>
        ${M("Name", "Name")}
        ${q("visible", "visible")}
        ${H("z-Index", "zIndex", 0)}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${$(y.left, (W) => N(W))}
          ${$(y.top, (W) => N(void 0, W))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${$(y.width, (W) => N(void 0, void 0, W))}
          ${$(y.height, (W) => N(void 0, void 0, void 0, W))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${r.Anchors[0]}
            onChange=${(W) => z(0, W.target.value)}>
            ${N1.map((W) => K`<option key=${W} value=${W}>${W}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${r.Anchors[1]}
            onChange=${(W) => z(1, W.target.value)}>
            ${E1.map((W) => K`<option key=${W} value=${W}>${W}</option>`)}
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
            onChange=${(W) => l == null ? void 0 : l(parseInt(W.target.value, 10))}>
            ${a.map((W, Y) => K`<option key=${Y} value=${String(Y)}>${W}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">${r.Type === "generic" ? "Custom Widget" : "Appearance"}</div>
        ${Se}

        <div class="bc-props-section">Script</div>
        ${qe()}

        <button class="bc-props-btn copy"   onClick=${v}>Copy Widget</button>
        <button class="bc-props-btn delete" onClick=${s}>Delete Widget</button>
      </div>
    `;
}
function O0(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function d5({
  Card: r,
  Scale: e,
  CanvasW: t,
  CanvasH: n,
  makeContext: a,
  deckProxy: i,
  onCardProxy: s,
  onCardReady: o,
  onMessage: l,
  isEditing: d = !1,
  selectedId: h = null,
  onSelect: f,
  onEdited: m,
  Grid: v,
  onBeforeEdit: y
}) {
  const [, I] = Je(0), N = Le(!1), z = vr(() => {
    N.current || I((Ae) => Ae + 1);
  }, []), $ = Le(null);
  $.current == null && ($.current = new Ka());
  const M = Le(o);
  M.current = o;
  const H = Le(l);
  H.current = l;
  const q = k0(
    () => r.Widgets,
    [r]
  ), E = Le([]), ae = Le(/* @__PURE__ */ new Map()), ne = Le(null);
  ne.current == null && (ne.current = t5(r, i, E, z));
  const B = ne.current, be = Le(/* @__PURE__ */ new Set()), Ie = Le(!1), me = Le(!1), qe = Le(q);
  qe.current = q;
  const Se = Le(() => {
  });
  Se.current = () => {
    me.current || Ie.current && be.current.size >= qe.current.length && (me.current = !0, $.current.dispatch("ready").then(() => M.current()));
  };
  const W = vr((Ae) => {
    be.current.add(Ae), Se.current();
  }, []), Y = vr((Ae, at) => {
    ae.current.set(Ae, at), E.current = qe.current.map((it) => ae.current.get(it.Id)).filter((it) => it != null);
  }, []), ye = vr((Ae) => {
    var at;
    $.current.dispatch(Ae), (at = H.current) == null || at.call(H, Ae);
  }, []), ie = Le(null);
  ie.current == null && (ie.current = a(B)), Jt(() => {
    s(B);
    const Ae = $.current, { Params: at, Args: it } = Xa(Ae, ie.current, "card");
    return Ie.current = !1, me.current = !1, be.current.clear(), Ae.run(r.Script ?? "", at, it).then(() => {
      Ie.current = !0, z(), Se.current();
    }), () => {
      Ae.teardown();
    };
  }, [r.Script]);
  const se = $.current;
  N.current = !0;
  let fe;
  try {
    fe = se.renderResult() ?? null;
  } finally {
    N.current = !1;
  }
  const Re = {
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left",
    background: r.Color ?? "#fff"
  }, rt = {
    width: t * e,
    height: n * e,
    position: "relative",
    flexShrink: 0
  };
  return K`
    <div style=${rt}>
      <div class="bc-card-canvas" style=${Re}>
        ${fe}
        ${q.map((Ae) => K`
          <${i5}
            key=${Ae.Id}
            Obj=${Ae}
            containerW=${t}
            containerH=${n}
            makeContext=${a}
            deckProxy=${i}
            cardProxy=${B}
            onWidgetProxy=${Y}
            onReady=${W}
            onMessage=${ye}
          />
        `)}
        ${d && K`
          <${l5}
            Objects=${q}
            CanvasW=${t}
            CanvasH=${n}
            Scale=${e}
            selectedId=${h}
            onSelect=${f ?? (() => {
  })}
            onEdited=${m ?? (() => {
  })}
            Grid=${v}
            onBeforeEdit=${y}
          />
        `}
      </div>
    </div>
  `;
}
function h5({
  Card: r,
  CanvasW: e,
  CanvasH: t
}) {
  const a = 88 / Math.max(1, e), i = Math.max(24, Math.round(t * a));
  return K`
    <div class="bc-card-thumb"
      style=${{ width: 88, height: i, background: r.Color ?? "#fff" }}>
      ${r.Widgets.filter((s) => s.visible).map((s) => {
    const o = sr(s.Anchors, s.Offsets, e, t), l = s.Type === "shape" ? s.FillColor ?? "#9ca3af" : s.Type === "button" ? "#1d6fd8" : s.Type === "field" ? "rgba(0,0,0,0.15)" : s.Type === "picture" ? "#9ca3af" : "#7c3aed";
    return K`
          <div key=${s.Id} style=${{
      position: "absolute",
      left: o.left * a,
      top: o.top * a,
      width: Math.max(1, o.width * a),
      height: Math.max(1, o.height * a),
      background: l,
      borderRadius: "1px"
    }}></div>
        `;
  })}
    </div>
  `;
}
function f5({
  DeckName: r,
  CardIndex: e,
  CardCount: t,
  activeOverlay: n,
  onOverlayToggle: a,
  onGoFirst: i,
  onGoPrev: s,
  onGoNext: o,
  onGoLast: l,
  isReadOnly: d = !0,
  isEditing: h = !1,
  onEditToggle: f,
  onInsert: m,
  onDeckSave: v,
  onDeckRevert: y,
  onDeckReset: I,
  onDeckExport: N,
  onDeckImport: z,
  onDeckExportText: $,
  onDeckImportText: M,
  onDeckEmbed: H,
  onDeckStandalone: q,
  onDeckImportURL: E,
  onMCPSettings: ae,
  onCardAdd: ne,
  onCardDuplicate: B,
  onCardRename: be,
  onCardDelete: Ie,
  onCardMove: me,
  onCardCopy: qe,
  onPaste: Se,
  canUndo: W = !1,
  canRedo: Y = !1,
  onUndo: ye,
  onRedo: ie
}) {
  const se = e === 0, fe = e === t - 1, [Re, rt] = Je(null);
  function Ae(it) {
    rt(null), a(n === it ? null : it);
  }
  function at(it) {
    rt(Re === it ? null : it);
  }
  return K`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => Ae("decks-panel")} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${n === "cards-panel" ? " active" : ""}`}
        onClick=${() => Ae("cards-panel")}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "go-menu" ? " active" : ""}`}
          onClick=${() => Ae("go-menu")}
          title="Navigate"
        >Go ▾</button>
        ${n === "go-menu" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${se ? " disabled" : ""}`}
              onClick=${() => {
    i(), a(null);
  }}>First Card</div>
            <div class=${`bc-dropdown-item${se ? " disabled" : ""}`}
              onClick=${() => {
    s(), a(null);
  }}>Previous Card</div>
            <div class=${`bc-dropdown-item${fe ? " disabled" : ""}`}
              onClick=${() => {
    o(), a(null);
  }}>Next Card</div>
            <div class=${`bc-dropdown-item${fe ? " disabled" : ""}`}
              onClick=${() => {
    l(), a(null);
  }}>Last Card</div>
          </div>
        `}
      </div>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "deck-menu" ? " active" : ""}`}
          onClick=${() => Ae("deck-menu")}
          title="deck operations"
        >Deck ▾</button>
        ${n === "deck-menu" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    v == null || v(), a(null);
  }}>Save Deck</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    y == null || y(), a(null);
  }}>Revert to Saved</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    I == null || I(), a(null);
  }}>Reset to Original</div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${d ? " disabled" : ""}${Re === "import" ? " open" : ""}`}
                onClick=${() => !d && at("import")}>Import</div>
              ${Re === "import" && K`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    z == null || z(), a(null);
  }}>from JSON File…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    M == null || M(), a(null);
  }}>from JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    E == null || E(), a(null);
  }}>from URL…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${Re === "export" ? " open" : ""}`}
                onClick=${() => at("export")}>Export</div>
              ${Re === "export" && K`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    N == null || N(), a(null);
  }}>as JSON File</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    $ == null || $(), a(null);
  }}>as JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    H == null || H(), a(null);
  }}>for Embedding…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    q == null || q(), a(null);
  }}>as Standalone App…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    ae == null || ae(), a(null);
  }}>MCP Settings…</div>
          </div>
        `}
      </div>
      ${h && K`
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "card-menu" ? " active" : ""}`}
            onClick=${() => Ae("card-menu")}
            title="card operations"
          >Card ▾</button>
          ${n === "card-menu" && K`
            <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ne == null || ne(), a(null);
  }}>New Card…</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    B == null || B(), a(null);
  }}>Duplicate Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    be == null || be(), a(null);
  }}>Rename Card…</div>
              <div class="bc-dropdown-separator"></div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    qe == null || qe(), a(null);
  }}>Copy Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    Se == null || Se(), a(null);
  }}>Paste from Clipboard</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${se ? " disabled" : ""}`}
                onClick=${() => {
    me == null || me(-1), a(null);
  }}>Move Card backward</div>
              <div class=${`bc-dropdown-item${fe ? " disabled" : ""}`}
                onClick=${() => {
    me == null || me(1), a(null);
  }}>Move Card forward</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${t <= 1 ? " disabled" : ""}`}
                onClick=${() => {
    Ie == null || Ie(), a(null);
  }}>Delete Card…</div>
            </div>
          `}
        </div>
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "insert-menu" ? " active" : ""}`}
            onClick=${() => Ae("insert-menu")}
            title="insert a new widget"
          >+ New ▾</button>
          ${n === "insert-menu" && K`
            <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              ${[
    { Type: "button", Label: "Button" },
    { Type: "field", Label: "Field" },
    { Type: "shape", Label: "Shape" },
    { Type: "picture", Label: "Picture" },
    { Type: "generic", Label: "Custom Widget" }
  ].map(({ Type: it, Label: zt }) => K`
                <div key=${it} class="bc-dropdown-item"
                  onClick=${() => {
    m == null || m(it), a(null);
  }}>${zt}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${!W}
          onClick=${ye} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${!Y}
          onClick=${ie} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
      `}
      <div class="bc-menu-bar-title">${r}</div>
      ${!d && K`
        <button
          class=${`bc-menu-btn${h ? " active" : ""}`}
          onClick=${f}
          title=${h ? "switch to browse mode" : "switch to edit mode"}
        >${h ? "✓ Done" : "✎ Edit"}</button>
      `}
    </div>
  `;
}
function p5({
  CardIndex: r,
  CardCount: e,
  onFirst: t,
  onPrev: n,
  onNext: a,
  onLast: i,
  onBack: s,
  historyLen: o,
  consoleShown: l = !1,
  onConsoleToggle: d,
  onScreenshot: h
}) {
  const f = r === 0, m = r === e - 1;
  return K`
    <div class="bc-bottom-bar">
      <button class="bc-nav-btn" onClick=${s} disabled=${o === 0} title="Back">◁</button>
      <div class="bc-bottom-bar-center">
        <button class="bc-nav-btn" onClick=${t} disabled=${f} title="First Card">«</button>
        <button class="bc-nav-btn" onClick=${n}  disabled=${f} title="Previous Card">‹</button>
        <span class="bc-card-counter">${r + 1} / ${e}</span>
        <button class="bc-nav-btn" onClick=${a}  disabled=${m}  title="Next Card">›</button>
        <button class="bc-nav-btn" onClick=${i}  disabled=${m}  title="Last Card">»</button>
      </div>
      <button
        class="bc-nav-btn"
        style=${{ fontSize: 13, minWidth: 40 }}
        onClick=${h} title="download a screenshot of this card"
      >📷</button>
      <button
        class=${`bc-nav-btn${l ? " active" : ""}`}
        style=${{ fontSize: 13, minWidth: 40 }}
        onClick=${d} title="toggle console"
      >⌨</button>
    </div>
  `;
}
function m5({ State: r, onClose: e }) {
  if (r == null)
    return null;
  if (r.kind === "answer")
    return K`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${r.message}</div>
          <div class="bc-dialog-buttons">
            ${r.buttons.map((n) => K`
              <button key=${n} class="bc-dialog-btn primary" onClick=${() => e(n)}>${n}</button>
            `)}
          </div>
        </div>
      </div>
    `;
  if (r.kind === "ask") {
    let n = r.defaultValue;
    return K`
      <div class="bc-dialog-backdrop">
        <div class="bc-dialog">
          <div class="bc-dialog-title">BrowserCard</div>
          <div class="bc-dialog-msg">${r.prompt}</div>
          <input
            ref=${(a) => a == null ? void 0 : a.focus()}
            class="bc-dialog-input" type="text"
            defaultValue=${r.defaultValue}
            onInput=${(a) => {
      n = a.target.value;
    }}
            onKeyDown=${(a) => a.key === "Enter" && e(n)}
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
    return K`
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
  return K`
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
function g5({
  onClose: r,
  onApply: e
}) {
  const t = localStorage.getItem("bc-mcp-url") ?? "", n = localStorage.getItem("bc-mcp-token") ?? "", [a, i] = Je(t), [s, o] = Je(n), [l, d] = Je(n !== "");
  function h() {
    const f = a.trim(), m = s.trim();
    try {
      localStorage.setItem("bc-mcp-url", f), l ? localStorage.setItem("bc-mcp-token", m) : localStorage.removeItem("bc-mcp-token");
    } catch {
    }
    e == null || e(f, m), r();
  }
  return K`
    <div class="bc-dialog-backdrop">
      <div class="bc-dialog bc-dialog-wide">
        <div class="bc-dialog-title">MCP Broker Settings</div>
        <div style=${{ padding: "8px 0" }}>
          <label style=${{ display: "block", marginBottom: "4px", fontSize: "12px" }}>Broker WebSocket URL</label>
          <input
            class="bc-dialog-input"
            type="text"
            placeholder="ws://localhost:3001/bc"
            value=${a}
            onInput=${(f) => i(f.target.value)}
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
function Z1({
  deck: r,
  isReadOnly: e,
  withChrome: t = !0,
  StorageKey: n = "",
  initialCardIndex: a = 0,
  onDeckSave: i,
  onDeckRevert: s,
  onDeckReset: o,
  onDeckExport: l,
  onDeckImport: d,
  onDeckImportText: h,
  onDeckList: f,
  onDeckOpen: m,
  onDeckCreate: v,
  onDeckDelete: y,
  onDeckRename: I,
  onDeckEmbed: N,
  onDeckStandalone: z,
  onDeckImportURL: $,
  connector: M,
  onDeckSaveImmediate: H
}) {
  const q = r ?? j1, [E] = Je(q), [, ae] = Je(0), ne = () => ae((A) => A + 1), [B, be] = Je(Math.min(a, (q == null ? void 0 : q.Cards.length) - 1 || 0)), [Ie, me] = Je([]), [qe, Se] = Je(null), [W, Y] = Je(null), [ye, ie] = Je(1), [se, fe] = Je(ms), [Re, rt] = Je(gs), [Ae, at] = Je(!1), it = Le(null), zt = Le(0);
  zt.current = B;
  const [Oe, Fe] = Je("browse"), [je, oe] = Je(null), [Dr, xr] = Je(!1), _t = Oe === "edit" && !e;
  function cr() {
    Oe === "edit" && (i == null || i()), Fe((A) => A === "edit" ? "browse" : "edit"), oe(null);
  }
  Jt(() => {
    oe(null);
  }, [B]), Jt(() => {
    if (n)
      try {
        localStorage.setItem("bc-card-index:" + n, String(B));
      } catch {
      }
  }, [n, B]);
  const [Lr, yr] = Je(null);
  function Fr() {
    if (f == null) {
      yr([]);
      return;
    }
    f().then(yr);
  }
  Jt(() => {
    qe === "decks-panel" && (yr(null), Fr());
  }, [qe]);
  function Gt(A, T) {
    return new Promise(
      (D) => Y({ kind: "ask", prompt: A, defaultValue: T, resolve: D })
    );
  }
  function Rt(A, ...T) {
    return new Promise(
      (D) => Y({ kind: "answer", message: A, buttons: T, resolve: D })
    );
  }
  async function jt() {
    var T;
    const A = (T = await Gt("Name of the new deck:", "")) == null ? void 0 : T.trim();
    A == null || A === "" || await (v == null ? void 0 : v(A));
  }
  async function Cn(A) {
    var D;
    const T = (D = await Gt("New name for this deck:", A.Name)) == null ? void 0 : D.trim();
    T == null || T === "" || T === A.Name || (await (I == null ? void 0 : I(A.Key, T)), Fr());
  }
  async function nn() {
    var T;
    const A = (T = await Gt("URL of the deck to import:", "https://")) == null ? void 0 : T.trim();
    A == null || A === "" || A === "https://" || await ($ == null ? void 0 : $(A));
  }
  function kr() {
    Y({ kind: "export-json", json: JSON.stringify(E, null, 2) });
  }
  async function Ot() {
    const A = await new Promise(
      (T) => Y({ kind: "import-json", resolve: T })
    );
    A != null && (h == null || h(A));
  }
  async function Pr(A) {
    await Rt(
      `Really delete deck "${A.Name}"?`,
      "Delete",
      "Cancel"
    ) === "Delete" && (await (y == null ? void 0 : y(A.Key)), Fr());
  }
  async function Vt() {
    var D;
    const A = (D = await Gt("Name of the new card:", "")) == null ? void 0 : D.trim();
    if (A == null || A === "")
      return;
    if (E.Cards.some((ee) => ee.Name === A)) {
      await Rt(`A card named "${A}" already exists.`, "OK");
      return;
    }
    const T = {
      Id: he("card"),
      Name: A,
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    };
    J(), E.Cards.splice(B + 1, 0, T), ot({ type: "card-index", index: B + 1 }), bt();
  }
  function ur(A) {
    return E.Cards.findIndex((T) => T.Id === A);
  }
  function Zt(A) {
    const T = E.Cards[A];
    if (T == null)
      return;
    const D = JSON.parse(JSON.stringify(T));
    D.Id = he("card"), D.Widgets.forEach((Ne) => {
      Ne.Id = he("widget");
    });
    let ee = T.Name + " Copy", ue = 1;
    for (; E.Cards.some((Ne) => Ne.Name === ee); )
      ue += 1, ee = T.Name + " Copy " + ue;
    D.Name = ee, J(), E.Cards.splice(A + 1, 0, D), ot({ type: "card-index", index: A + 1 }), bt();
  }
  async function dr(A) {
    var ee;
    const T = E.Cards[A];
    if (T == null)
      return;
    const D = (ee = await Gt("New name for this card:", T.Name)) == null ? void 0 : ee.trim();
    if (!(D == null || D === "" || D === T.Name)) {
      if (E.Cards.some((ue) => ue.Name === D)) {
        await Rt(`A card named "${D}" already exists.`, "OK");
        return;
      }
      J(), T.Name = D, bt();
    }
  }
  async function an(A) {
    const T = E.Cards[A];
    if (T == null)
      return;
    if (E.Cards.length <= 1) {
      await Rt("The last remaining card cannot be deleted.", "OK");
      return;
    }
    if (await Rt(
      `Really delete card "${T.Name}" and all its widgets?`,
      "Delete",
      "Cancel"
    ) !== "Delete")
      return;
    J();
    const ee = E.Cards[B].Id;
    E.Cards.splice(A, 1), me([]), oe(null);
    const ue = ur(ee);
    be(ue >= 0 ? ue : O0(A, 0, E.Cards.length - 1)), bt();
  }
  function An(A, T) {
    const D = A + T;
    if (D < 0 || D >= E.Cards.length)
      return;
    J();
    const ee = E.Cards[B].Id, [ue] = E.Cards.splice(A, 1);
    E.Cards.splice(D, 0, ue), me([]), be(Math.max(0, ur(ee))), bt();
  }
  const [sn, Tn] = Je(null), [$n, Jn] = Je(0);
  function In(A, T, D) {
    Tn({
      Title: A,
      Value: T,
      onCommit: (ee) => {
        D(ee), Jn((ue) => ue + 1);
      }
    });
  }
  async function Yn() {
    await sc(
      bs,
      JSON.stringify(E.Cards[B])
    ) || await Rt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function Sr() {
    if (je == null) {
      await Yn();
      return;
    }
    const A = E.Cards[B].Widgets.find((D) => D.Id === je);
    if (A == null)
      return;
    await sc(vs, JSON.stringify(A)) || await Rt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function Qn() {
    await Sr(), je != null ? Cr() : await an(B);
  }
  async function on() {
    const A = await J2();
    if (A == null) {
      await Rt(
        "The clipboard does not contain a BrowserCard card or widget - or BrowserCard was not allowed to read the clipboard (please check your browser permissions, the console may have details).",
        "OK"
      );
      return;
    }
    let T;
    try {
      T = JSON.parse(A.Serialization);
    } catch {
      return;
    }
    const D = E.Cards[B];
    if (A.Kind === "card") {
      if (!ro(T))
        return;
      const ee = T;
      ee.Id = he("card"), ee.Widgets.forEach((ue) => {
        ue.Id = he("widget");
      }), ee.Name = oc(
        ee.Name,
        new Set(E.Cards.map((ue) => ue.Name))
      ), J(), E.Cards.splice(B + 1, 0, ee), ot({ type: "card-index", index: B + 1 });
    } else {
      if (!to(T))
        return;
      const ee = D.Widgets.reduce((Ne, De) => Math.max(Ne, De.zIndex), 0), ue = T;
      ue.Id = he("widget"), ue.Name = oc(
        ue.Name ?? "Widget",
        new Set(D.Widgets.map((Ne) => Ne.Name))
      ), ue.zIndex = ee + 1, ue.Number = ee + 1, J(), D.Widgets.push(ue), oe(ue.Id);
    }
    bt();
  }
  async function e0() {
    var T;
    const A = (T = it.current) == null ? void 0 : T.querySelector(".bc-card-canvas");
    if (A != null)
      try {
        const D = "https://cdn.jsdelivr.net/npm/html-to-image@1/+esm", { toPng: ee } = await import(
          // loaded on demand only
          /* @vite-ignore */
          D
        ), ue = await ee(A, {
          width: se,
          height: Re,
          pixelRatio: 1,
          // native card size
          style: { transform: "scale(1)", borderRadius: "0", boxShadow: "none" },
          filter: (ct) => {
            var $t;
            return (
              // exclude edit-mode overlays
              !(($t = ct.classList) != null && $t.contains("bc-edit-layer"))
            );
          }
        }), Ne = E.Cards[B], De = document.createElement("a");
        De.href = ue, De.download = `${E.Name ?? "Deck"} - ${Ne.Name ?? "Card"}.png`, De.click();
      } catch (D) {
        console.warn("[BrowserCard] could not create a screenshot:", D), window.alert(
          "BrowserCard could not create a screenshot - the console may have details."
        );
      }
  }
  const _r = Le(null);
  Jt(() => {
    !_t || i == null || (_r.current != null && window.clearTimeout(_r.current), _r.current = window.setTimeout(() => {
      _r.current = null, i();
    }, 800));
  }), Jt(() => {
    if (M == null)
      return;
    const A = {
      getDeck: () => E,
      getCardIndex: () => zt.current,
      mutateDeck: (T) => {
        T(E), ne();
      },
      navigate: (T) => {
        if (typeof T == "number")
          ot({ type: "card-index", index: T });
        else {
          const D = E.Cards.findIndex((ee) => ee.Id === T || ee.Name === T);
          D >= 0 && ot({ type: "card-index", index: D });
        }
      },
      saveDeck: () => (H == null ? void 0 : H()) ?? Promise.resolve(),
      evalInContext: async (T) => {
        const D = new Ka(), ee = Bi(
          E,
          E.Cards,
          null,
          ot,
          (ct, $t, Lt) => Y({ kind: "answer", message: ct, buttons: $t, resolve: Lt }),
          (ct, $t, Lt) => Y({ kind: "ask", prompt: ct, defaultValue: $t, resolve: Lt }),
          Nt,
          zt
        ), { Params: ue, Args: Ne } = Xa(D, ee, "deck");
        return new Function(...ue, `return (async () => { return (${T}) })()`)(...Ne);
      }
    };
    M.setContext(A);
  });
  const Bt = Le([]), k = Le([]), O = Le(""), X = Le(0), [_e, nt] = Je(0), st = 100, de = 1e3, J = vr((A = "") => {
    const T = Date.now();
    if (A !== "" && A === O.current && T - X.current < de) {
      X.current = T;
      return;
    }
    O.current = A, X.current = T, Bt.current.push(JSON.stringify(E)), Bt.current.length > st && Bt.current.shift(), k.current = [];
  }, [E]);
  function ve(A) {
    const T = JSON.parse(A);
    Object.keys(E).forEach((D) => delete E[D]), Object.assign(E, T), O.current = "", oe(null), me([]), be((D) => O0(D, 0, E.Cards.length - 1)), nt((D) => D + 1), Jn((D) => D + 1), bt();
  }
  function ht() {
    const A = Bt.current.pop();
    A != null && (k.current.push(JSON.stringify(E)), ve(A));
  }
  function Qe() {
    const A = k.current.pop();
    A != null && (Bt.current.push(JSON.stringify(E)), ve(A));
  }
  function Hr(A) {
    const T = E.Cards[B], D = o5(A, T, se, Re);
    J(), T.Widgets.push(D), oe(D.Id), bt();
  }
  function Cr() {
    if (je == null)
      return;
    const A = E.Cards[B], T = A.Widgets.findIndex((D) => D.Id === je);
    T >= 0 && (J(), A.Widgets.splice(T, 1)), oe(null), bt();
  }
  function Nn(A) {
    if (je == null)
      return;
    const D = [...E.Cards[B].Widgets].sort((Ne, De) => Ne.zIndex - De.zIndex), ee = D.findIndex((Ne) => Ne.Id === je);
    if (ee < 0)
      return;
    J();
    const [ue] = D.splice(ee, 1);
    switch (A) {
      case "front":
        D.push(ue);
        break;
      case "back":
        D.unshift(ue);
        break;
      case "forward":
        D.splice(ee + 1, 0, ue);
        break;
      case "backward":
        D.splice(Math.max(ee - 1, 0), 0, ue);
        break;
    }
    D.forEach((Ne, De) => {
      Ne.zIndex = De + 1, Ne.Number = De + 1;
    }), bt();
  }
  function t0(A) {
    if (je == null || A === B)
      return;
    const T = E.Cards[B], D = E.Cards[A];
    if (D == null)
      return;
    const ee = T.Widgets.findIndex((Ne) => Ne.Id === je);
    if (ee < 0)
      return;
    J();
    const [ue] = T.Widgets.splice(ee, 1);
    D.Widgets.push(ue), oe(null), bt();
  }
  const [, En] = Je(0), bt = vr(() => En((A) => A + 1), []), hr = Le(null);
  hr.current == null && (hr.current = new Ka());
  const Mn = Le(null), ln = Le(null);
  ln.current == null && (ln.current = r5(E, Mn, bt));
  const Dt = ln.current, zn = Le(!1), qr = Le(!1);
  Jt(() => {
    const A = it.current;
    if (A == null)
      return;
    function T() {
      const { width: ee, height: ue } = A.getBoundingClientRect(), Ne = getComputedStyle(A), De = parseInt(Ne.getPropertyValue("--canvas-width").trim()), ct = parseInt(Ne.getPropertyValue("--canvas-height").trim()), $t = isFinite(De) && De > 0 ? De : E.CardWidth ?? ms, Lt = isFinite(ct) && ct > 0 ? ct : E.CardHeight ?? gs;
      fe($t), rt(Lt);
      const nr = 24, Rn = Math.min((ee - nr * 2) / $t, (ue - nr * 2) / Lt);
      ie(Math.max(0.1, Rn));
    }
    T();
    const D = new ResizeObserver(T);
    return D.observe(A), () => D.disconnect();
  }, [E.CardWidth, E.CardHeight]);
  const ot = vr((A) => {
    const T = E.Cards;
    be((D) => {
      const ee = (ue) => (ue !== D && (me((Ne) => [...Ne, D]), qr.current = !1), ue);
      switch (A.type) {
        case "next":
          return ee(O0(D + 1, 0, T.length - 1));
        case "prev":
          return ee(O0(D - 1, 0, T.length - 1));
        case "first":
          return ee(0);
        case "last":
          return ee(T.length - 1);
        case "card-index":
          return ee(O0(A.index, 0, T.length - 1));
        case "card-name": {
          const ue = T.findIndex((Ne) => Ne.Name === A.name);
          return ue >= 0 ? ee(ue) : D;
        }
        case "card-id": {
          const ue = T.findIndex((Ne) => Ne.Id === A.id);
          return ue >= 0 ? ee(ue) : D;
        }
        default:
          return D;
      }
    });
  }, [E]), Nt = k0(() => ({
    print(...A) {
      q2(Dt, A), at(!0);
    },
    println(...A) {
      V2(Dt, A), at(!0);
    },
    clearConsole() {
      Za(Dt);
    }
  }), []), r0 = vr((A) => Bi(
    E,
    E.Cards,
    A,
    ot,
    (T, D, ee) => Y({ kind: "answer", message: T, buttons: D, resolve: ee }),
    (T, D, ee) => Y({ kind: "ask", prompt: T, defaultValue: D, resolve: ee }),
    Nt,
    zt
  ), [E, ot, Nt]);
  function cn() {
    zn.current && qr.current && hr.current.dispatch("ready");
  }
  function T0(A) {
    Mn.current = A;
  }
  function n0() {
    qr.current = !0, cn();
  }
  Jt(() => {
    const A = hr.current, T = Bi(
      E,
      E.Cards,
      Dt,
      ot,
      (ue, Ne, De) => Y({ kind: "answer", message: ue, buttons: Ne, resolve: De }),
      (ue, Ne, De) => Y({ kind: "ask", prompt: ue, defaultValue: Ne, resolve: De }),
      Nt,
      zt
    ), { Params: D, Args: ee } = Xa(A, T, "deck");
    return zn.current = !1, qr.current = !1, A.run(E.Script ?? "", D, ee).then(() => {
      zn.current = !0, bt(), cn();
    }), () => {
      A.teardown();
    };
  }, [E.Script]), Jt(() => {
    if (!t)
      return;
    function A(T) {
      if (W != null)
        return;
      const D = T.target;
      if (!(D != null && /^(INPUT|TEXTAREA|SELECT)$/.test(D.tagName))) {
        if (_t) {
          if ((T.key === "z" || T.key === "Z") && (T.metaKey || T.ctrlKey)) {
            T.preventDefault(), T.shiftKey ? Qe() : ht();
            return;
          }
          if ((T.key === "y" || T.key === "Y") && (T.metaKey || T.ctrlKey)) {
            T.preventDefault(), Qe();
            return;
          }
          if ((T.metaKey || T.ctrlKey) && !T.shiftKey && !T.altKey)
            switch (T.key) {
              case "c":
                T.preventDefault(), Sr();
                return;
              case "x":
                T.preventDefault(), Qn();
                return;
              case "v":
                T.preventDefault(), on();
                return;
            }
        }
        if (_t && je != null) {
          if (T.key === "Escape") {
            oe(null);
            return;
          }
          if (T.key === "Delete" || T.key === "Backspace") {
            T.preventDefault(), Cr();
            return;
          }
          const ee = E.Cards[B].Widgets.find((Rn) => Rn.Id === je);
          if (ee == null)
            return;
          const ue = T.shiftKey ? 10 : 1, { left: Ne, top: De, width: ct, height: $t } = sr(ee.Anchors, ee.Offsets, se, Re);
          let Lt = Ne, nr = De;
          switch (T.key) {
            case "ArrowLeft":
              Lt -= ue;
              break;
            case "ArrowRight":
              Lt += ue;
              break;
            case "ArrowUp":
              nr -= ue;
              break;
            case "ArrowDown":
              nr += ue;
              break;
            default:
              return;
          }
          T.preventDefault(), J("nudge:" + je), ee.Offsets = J0(Lt, nr, ct, $t, ee.Anchors, se, Re), bt();
          return;
        }
        (T.key === "ArrowRight" || T.key === "ArrowDown") && ot({ type: "next" }), (T.key === "ArrowLeft" || T.key === "ArrowUp") && ot({ type: "prev" });
      }
    }
    return window.addEventListener("keydown", A), () => window.removeEventListener("keydown", A);
  }, [ot, W, _t, je, B, se, Re, t]);
  function $0() {
    if (Ie.length === 0)
      return;
    const A = Ie[Ie.length - 1];
    me((T) => T.slice(0, -1)), be(A);
  }
  const Kt = E.Cards[B], I0 = hr.current.renderResult() ?? null, U = _t && je != null ? Kt.Widgets.find((A) => A.Id === je) ?? null : null, ge = {
    isActive: E.SnapToGrid === !0,
    Width: E.GridWidth ?? 10,
    Height: E.GridHeight ?? 10
  };
  return K`
    <${vn}>
      <div class="bc-app">
        ${I0}
        ${t && K`<${f5}
          DeckName=${E.Name}
          CardIndex=${B}
          CardCount=${E.Cards.length}
          activeOverlay=${qe}
          onOverlayToggle=${Se}
          onGoFirst=${() => ot({ type: "first" })}
          onGoPrev=${() => ot({ type: "prev" })}
          onGoNext=${() => ot({ type: "next" })}
          onGoLast=${() => ot({ type: "last" })}
          isReadOnly=${e}
          isEditing=${_t}
          onEditToggle=${cr}
          onInsert=${Hr}
          onDeckSave=${i}
          onDeckRevert=${s}
          onDeckReset=${o}
          onDeckExport=${l}
          onDeckImport=${d}
          onDeckExportText=${kr}
          onDeckImportText=${() => void Ot()}
          onCardAdd=${() => void Vt()}
          onCardDuplicate=${() => Zt(B)}
          onCardRename=${() => void dr(B)}
          onCardDelete=${() => void an(B)}
          onCardMove=${(A) => An(B, A)}
          onCardCopy=${() => void Yn()}
          onPaste=${() => void on()}
          canUndo=${Bt.current.length > 0}
          canRedo=${k.current.length > 0}
          onUndo=${ht}
          onRedo=${Qe}
          onDeckEmbed=${N}
          onDeckStandalone=${z}
          onDeckImportURL=${() => void nn()}
          onMCPSettings=${() => xr(!0)}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area" ref=${it}>
            <${d5}
              key=${Kt.Id + ":" + _e}
              Card=${Kt}
              Scale=${ye}
              CanvasW=${se}
              CanvasH=${Re}
              makeContext=${r0}
              deckProxy=${Dt}
              onCardProxy=${T0}
              onCardReady=${n0}
              onMessage=${(A) => void hr.current.dispatch(A)}
              isEditing=${_t}
              selectedId=${je}
              onSelect=${oe}
              onEdited=${bt}
              Grid=${ge}
              onBeforeEdit=${() => J()}
            />
          </div>
          ${_t && K`
            <${u5}
              key=${(je ?? "card:" + Kt.Id) + ":" + $n}
              Widget=${U}
              CanvasW=${se}
              CanvasH=${Re}
              onEdited=${bt}
              CardNames=${E.Cards.map((A) => A.Name)}
              CardIndex=${B}
              onDelete=${Cr}
              onReorder=${Nn}
              onMoveTo=${t0}
              Card=${Kt}
              Deck=${E}
              onOpenEditor=${In}
              onBeforeEdit=${J}
              onCopy=${() => void Sr()}
            />
          `}
        </div>
        ${qe === "decks-panel" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => Se(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => Se(null)}>×</button>
            </div>
            ${!e && K`
              <button class="bc-decks-new" onClick=${jt}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${Lr == null ? K`<div class="bc-decks-empty">loading…</div>` : Lr.length === 0 ? K`<div class="bc-decks-empty">no decks found</div>` : Lr.map((A) => K`
                      <div key=${A.Key}
                        class=${`bc-decks-item${A.Key === n ? " active" : ""}`}>
                        <span class="bc-decks-name"
                          title=${A.Name}
                          onClick=${() => {
    A.Key !== n && (m == null || m(A.Key));
  }}
                        >${A.Name}</span>
                        ${!e && K`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void Cn(A)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void Pr(A)}>×</button>
                        `}
                      </div>
                    `)}
            </div>
          </div>
        `}
        ${qe === "cards-panel" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => Se(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => Se(null)}>×</button>
            </div>
            ${_t && K`
              <button class="bc-decks-new" onClick=${() => void Vt()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${E.Cards.map((A, T) => K`
                <div key=${A.Id}
                  class=${`bc-cards-item${T === B ? " active" : ""}`}>
                  <div class="bc-cards-main"
                    onClick=${() => {
    T !== B && ot({ type: "card-index", index: T });
  }}>
                    <${h5}
                      Card=${A} CanvasW=${se} CanvasH=${Re}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${A.Name}>${A.Name}</div>
                      <div class="bc-cards-sub">
                        #${T + 1} · ${A.Widgets.length}${" "}
                        ${A.Widgets.length === 1 ? "widget" : "widgets"}
                      </div>
                    </div>
                  </div>
                  ${_t && K`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move this card backward"
                        disabled=${T === 0}
                        onClick=${() => An(T, -1)}>↑</button>
                      <button class="bc-console-btn" title="move this card forward"
                        disabled=${T === E.Cards.length - 1}
                        onClick=${() => An(T, 1)}>↓</button>
                      <button class="bc-console-btn" title="duplicate this card"
                        onClick=${() => Zt(T)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void dr(T)}>✎</button>
                      <button class="bc-console-btn" title="delete this card"
                        disabled=${E.Cards.length <= 1}
                        onClick=${() => void an(T)}>×</button>
                    </div>
                  `}
                </div>
              `)}
            </div>
          </div>
        `}
        ${Ae && K`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => Za(Dt)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => at(!1)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${Dt[Sn]}</pre>
          </div>
        `}
        ${t && K`<${p5}
          CardIndex=${B}
          CardCount=${E.Cards.length}
          onFirst=${() => ot({ type: "first" })}
          onPrev=${() => ot({ type: "prev" })}
          onNext=${() => ot({ type: "next" })}
          onLast=${() => ot({ type: "last" })}
          onBack=${$0}
          historyLen=${Ie.length}
          consoleShown=${Ae}
          onConsoleToggle=${() => at((A) => !A)}
          onScreenshot=${() => void e0()}
        />`}
        <${m5}
          State=${W}
          onClose=${(A) => {
    var D, ee;
    const T = W;
    if (Y(null), T != null)
      switch (T.kind) {
        case "answer":
          (D = T.resolve) == null || D.call(T, A ?? "");
          break;
        case "ask":
          (ee = T.resolve) == null || ee.call(T, A);
          break;
        case "import-json":
          T.resolve(A);
          break;
      }
  }}
        />
      </div>
      ${sn != null && K`
        <${c5}
          key=${sn.Title}
          State=${sn}
          onClose=${() => Tn(null)}
        />
      `}
      ${Dr && K`
        <${g5}
          onClose=${() => xr(!1)}
          onApply=${(A, T) => M == null ? void 0 : M.configure(A, T)}
        />
      `}
    <//>
  `;
}
const lc = "https://rozek.github.io/browser-card/dist/BrowserCard.js";
function K1() {
  if (document.getElementById("bc-styles") == null) {
    const r = document.createElement("style");
    r.id = "bc-styles", r.textContent = Z2, document.head.appendChild(r);
  }
}
function Di(r, e, t) {
  const n = new Blob([e], { type: t }), a = URL.createObjectURL(n), i = document.createElement("a");
  i.href = a, i.download = r, i.click(), setTimeout(() => URL.revokeObjectURL(a), 1e3);
}
function Ta(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function cc(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");
}
var Ir, lt, It, vt, pr, m0, g0, ke, Oa, Gr, X1, J1, Y1, Q1, ed, td, rd, nd, fn, ad, id, sd, od, ld;
class b5 extends HTMLElement {
  constructor() {
    super(...arguments);
    mt(this, ke);
    mt(this, Ir, null);
    mt(this, lt, null);
    mt(this, It, !1);
    mt(this, vt, "bc-deck:default");
    mt(this, pr, 0);
    // remount key - bumped whenever the deck is swapped
    mt(this, m0, 0);
    // guards against overlapping async mounts
    mt(this, g0, new hh());
  }
  static get observedAttributes() {
    return ["name", "src", "readonly"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    R(this, g0).connect(), re(this, ke, Oa).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    R(this, g0).disconnect(), R(this, Ir) != null && Kr(null, R(this, Ir));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && re(this, ke, Oa).call(this);
  }
}
Ir = new WeakMap(), lt = new WeakMap(), It = new WeakMap(), vt = new WeakMap(), pr = new WeakMap(), m0 = new WeakMap(), g0 = new WeakMap(), ke = new WeakSet(), Oa = async function() {
  const t = ++zo(this, m0)._;
  K1(), R(this, Ir) == null && (Me(this, Ir, document.createElement("div")), R(this, Ir).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(R(this, Ir)));
  const n = this.getAttribute("src") ?? "";
  let a = null;
  if (n.trim())
    try {
      const i = JSON.parse(n);
      Tr(i) ? a = i : console.warn('[BrowserCard] "src" attribute does not contain a valid deck');
    } catch {
      console.warn('[BrowserCard] invalid JSON in "src" attribute');
    }
  if (a == null && (a = JSON.parse(X2)), Me(this, vt, "bc-deck:" + (this.getAttribute("name") ?? a.Name ?? "default")), !this.hasAttribute("name"))
    try {
      const i = localStorage.getItem("bc-last-deck");
      if (i && i !== R(this, vt)) {
        const s = await Bn(i, Wt);
        if (t !== R(this, m0))
          return;
        Tr(s) && Me(this, vt, i);
      }
    } catch {
    }
  try {
    const i = await Bn(R(this, vt), Wt);
    if (t !== R(this, m0))
      return;
    Tr(i) ? a = i : i != null && console.warn("[BrowserCard] ignoring invalid persisted deck for key " + S.quoted(R(this, vt)));
  } catch (i) {
    console.warn("[BrowserCard] could not access IndexedDB:", i);
  }
  Fn(a), a.Id == null && (a.Id = he("deck")), Me(this, lt, a), Me(this, It, this.hasAttribute("readonly") || (a.readOnly ?? !1)), Me(this, pr, R(this, pr) + 1), re(this, ke, Gr).call(this);
}, /**** #renderDeck ****/
Gr = function() {
  let t = 0;
  try {
    const n = localStorage.getItem("bc-card-index:" + R(this, vt));
    n != null && (t = Math.max(0, parseInt(n, 10) || 0));
  } catch {
  }
  Kr(K`<${Z1}
      key=${R(this, pr)}
      deck=${R(this, lt)}
      isReadOnly=${R(this, It)}
      StorageKey=${R(this, vt)}
      initialCardIndex=${t}
      onDeckSave=${() => void re(this, ke, fn).call(this)}
      onDeckRevert=${() => void re(this, ke, ad).call(this)}
      onDeckReset=${() => void re(this, ke, id).call(this)}
      onDeckExport=${() => re(this, ke, sd).call(this)}
      onDeckImport=${() => re(this, ke, od).call(this)}
      onDeckImportText=${(n) => void re(this, ke, ld).call(this, n)}
      onDeckList=${() => re(this, ke, Q1).call(this)}
      onDeckOpen=${(n) => void re(this, ke, ed).call(this, n)}
      onDeckCreate=${(n) => re(this, ke, td).call(this, n)}
      onDeckDelete=${(n) => re(this, ke, rd).call(this, n)}
      onDeckRename=${(n, a) => re(this, ke, nd).call(this, n, a)}
      onDeckEmbed=${() => re(this, ke, J1).call(this)}
      onDeckStandalone=${() => re(this, ke, Y1).call(this)}
      onDeckImportURL=${(n) => re(this, ke, X1).call(this, n)}
      connector=${R(this, g0)}
      onDeckSaveImmediate=${() => re(this, ke, fn).call(this)}
    />`, R(this, Ir));
}, X1 = async function(t) {
  if (!R(this, It))
    try {
      const n = await fetch(t);
      if (!n.ok) {
        window.alert(`The deck could not be loaded (HTTP ${n.status})`);
        return;
      }
      const a = JSON.parse(await n.text());
      if (!Tr(a)) {
        window.alert("The given URL does not deliver a valid BrowserCard deck.");
        return;
      }
      const i = a;
      Fn(i), i.Id == null && (i.Id = he("deck")), Me(this, lt, i), Me(this, It, this.hasAttribute("readonly") || (i.readOnly ?? !1)), await re(this, ke, fn).call(this), Me(this, pr, R(this, pr) + 1), re(this, ke, Gr).call(this);
    } catch (n) {
      window.alert("Import failed: " + n);
    }
}, /**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/
J1 = function() {
  if (R(this, lt) == null)
    return;
  const t = R(this, lt).Name ?? "Deck", n = cc(JSON.stringify(R(this, lt))), a = lc, i = R(this, lt).CardWidth ?? ms, s = R(this, lt).CardHeight ?? gs, o = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ta(t)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${Ta(a)}"><\/script>

  <bc-deck
    style="display:block; width:${i}px; height:${s}px"
    src='${n}'
  ></bc-deck>
</body>
</html>`;
  Di(t + ".embed.html", o, "text/html");
}, /**** #exportStandalone — complete web app, referencing the public module ****/
Y1 = function() {
  if (R(this, lt) == null)
    return;
  const t = R(this, lt).Name ?? "Deck", n = cc(JSON.stringify(R(this, lt))), a = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ta(t)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${Ta(lc)}"><\/script>
  <bc-deck style="display:block; width:100%; height:100%" src='${n}'></bc-deck>
</body>
</html>`;
  Di(t + ".html", a, "text/html");
}, Q1 = async function() {
  let t = [];
  try {
    t = (await th(Wt)).filter((a) => typeof a == "string" && a.startsWith(R0)).map((a) => ({ Key: a, Name: a.slice(R0.length) }));
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
  return t.some((n) => n.Key === R(this, vt)) || t.unshift({
    // current deck was never saved so far
    Key: R(this, vt),
    Name: R(this, vt).slice(R0.length)
  }), t.sort((n, a) => n.Name.localeCompare(a.Name));
}, ed = async function(t) {
  try {
    const n = await Bn(t, Wt);
    if (!Tr(n)) {
      window.alert("This deck cannot be loaded (it seems to be damaged).");
      return;
    }
    const a = n;
    Fn(a), Me(this, vt, t), Me(this, lt, a), Me(this, It, this.hasAttribute("readonly") || (a.readOnly ?? !1)), Me(this, pr, R(this, pr) + 1);
    try {
      localStorage.setItem("bc-last-deck", t);
    } catch {
    }
    re(this, ke, Gr).call(this);
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
}, td = async function(t) {
  if (this.hasAttribute("readonly"))
    return;
  const n = R0 + t;
  try {
    if (await Bn(n, Wt) != null) {
      window.alert(`A deck named "${t}" already exists.`);
      return;
    }
  } catch (i) {
    console.warn("[BrowserCard] could not access IndexedDB:", i);
    return;
  }
  const a = {
    Id: he("deck"),
    Name: t,
    readOnly: !1,
    swipeToAdjacentCard: !0,
    Script: "",
    Cards: [{
      Id: he("card"),
      Name: "Card 1",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    }]
  };
  Me(this, vt, n), Me(this, lt, a), Me(this, It, !1), await re(this, ke, fn).call(this), Me(this, pr, R(this, pr) + 1), re(this, ke, Gr).call(this);
}, rd = async function(t) {
  if (!this.hasAttribute("readonly")) {
    if (t === R(this, vt)) {
      window.alert(
        'The currently open deck cannot be deleted - use "Reset to Original" instead.'
      );
      return;
    }
    try {
      await pa(t, Wt);
    } catch (n) {
      console.warn("[BrowserCard] could not access IndexedDB:", n);
    }
  }
}, nd = async function(t, n) {
  if (this.hasAttribute("readonly"))
    return;
  const a = R0 + n;
  if (a !== t)
    try {
      if (await Bn(a, Wt) != null) {
        window.alert(`A deck named "${n}" already exists.`);
        return;
      }
      if (t === R(this, vt))
        R(this, lt).Name = n, Me(this, vt, a), await re(this, ke, fn).call(this), await pa(t, Wt), re(this, ke, Gr).call(this);
      else {
        const s = await Bn(t, Wt);
        if (!Tr(s))
          return;
        s.Name = n, await tl(a, s, Wt), await pa(t, Wt);
      }
    } catch (i) {
      console.warn("[BrowserCard] could not access IndexedDB:", i);
    }
}, fn = async function() {
  if (!(R(this, lt) == null || R(this, It)))
    try {
      const t = JSON.parse(JSON.stringify(R(this, lt)));
      await tl(R(this, vt), t, Wt);
    } catch (t) {
      console.warn("[BrowserCard] could not persist deck:", t);
    }
}, ad = async function() {
  if (!R(this, It))
    try {
      const t = await Bn(R(this, vt), Wt);
      if (!Tr(t)) {
        window.alert("There is no (valid) saved copy of this deck yet.");
        return;
      }
      const n = t;
      Fn(n), Me(this, lt, n), Me(this, It, this.hasAttribute("readonly") || (n.readOnly ?? !1)), Me(this, pr, R(this, pr) + 1), re(this, ke, Gr).call(this);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
}, id = async function() {
  if (!R(this, It)) {
    try {
      await pa(R(this, vt), Wt);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
    re(this, ke, Oa).call(this);
  }
}, /**** #exportDeck — downloads the deck as a JSON file ****/
sd = function() {
  R(this, lt) != null && Di(
    (R(this, lt).Name ?? "Deck") + ".json",
    JSON.stringify(R(this, lt), null, 2),
    "application/json"
  );
}, /**** #importDeck — loads a deck from a JSON file and persists it ****/
od = function() {
  if (R(this, It))
    return;
  const t = document.createElement("input");
  t.type = "file", t.accept = "application/json,.json,.bc", t.onchange = async () => {
    var a;
    const n = (a = t.files) == null ? void 0 : a[0];
    if (n != null)
      try {
        const i = JSON.parse(await n.text());
        if (!Tr(i)) {
          window.alert("The chosen file does not contain a valid BrowserCard deck.");
          return;
        }
        const s = i;
        Fn(s), s.Id == null && (s.Id = he("deck")), Me(this, lt, s), Me(this, It, this.hasAttribute("readonly") || (s.readOnly ?? !1)), await re(this, ke, fn).call(this), Me(this, pr, R(this, pr) + 1), re(this, ke, Gr).call(this);
      } catch (i) {
        window.alert("Import failed: " + i);
      }
  }, t.click();
}, ld = async function(t) {
  if (!R(this, It))
    try {
      const n = JSON.parse(t);
      if (!Tr(n)) {
        window.alert("The pasted text does not contain a valid BrowserCard deck.");
        return;
      }
      const a = n;
      Fn(a), a.Id == null && (a.Id = he("deck")), Me(this, lt, a), Me(this, It, this.hasAttribute("readonly") || (a.readOnly ?? !1)), await re(this, ke, fn).call(this), Me(this, pr, R(this, pr) + 1), re(this, ke, Gr).call(this);
    } catch (n) {
      window.alert("Import failed: " + n);
    }
};
var mr, Q0, ea, ws;
class v5 extends HTMLElement {
  constructor() {
    super(...arguments);
    mt(this, ea);
    mt(this, mr, null);
    mt(this, Q0, 0);
  }
  static get observedAttributes() {
    return ["src"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    re(this, ea, ws).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    R(this, mr) != null && Kr(null, R(this, mr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && re(this, ea, ws).call(this);
  }
}
mr = new WeakMap(), Q0 = new WeakMap(), ea = new WeakSet(), /**** #mount ****/
ws = function() {
  K1(), R(this, mr) == null && (Me(this, mr, document.createElement("div")), R(this, mr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(R(this, mr)));
  const t = this.getAttribute("src") ?? "";
  let n = null;
  if (t.trim())
    try {
      const a = JSON.parse(t);
      Tr(a) && (n = a);
    } catch {
    }
  if (n == null) {
    console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute'), Kr(K`
        <div style=${{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#888",
      font: "13px/1.4 system-ui, sans-serif"
    }}>this &lt;bc-deck&gt; contains no valid deck</div>
      `, R(this, mr));
    return;
  }
  Fn(n), Me(this, Q0, R(this, Q0) + 1), Kr(K`<${Z1}
      key=${R(this, Q0)}
      deck=${n}
      isReadOnly=${!0}
      withChrome=${!1}
    />`, R(this, mr));
};
const w5 = Function("return this")();
w5.BC = {
  render: Kr,
  html: K,
  Preact: I1,
  createContext: Sc,
  toChildArray: v0,
  cloneElement: kc,
  createPortal: Oc,
  useId: Ic,
  useRef: Le,
  useState: Je,
  useEffect: Jt,
  useCallback: vr,
  useMemo: k0,
  useContext: Tc,
  fromLocalTo: D4,
  fromViewportTo: L4,
  fromDocumentTo: F4,
  Marked: Su
};
customElements.get("bc-deck") == null && customElements.define("bc-deck", v5);
customElements.get("bc-designer") == null && customElements.define("bc-designer", b5);
const Xm = S.HTMLsafe, Jm = S.ValidatorForClassifier, Ym = S.ValueIsArray, Qm = S.ValueIsBoolean, e3 = S.ValueIsCardinal, t3 = S.ValueIsColor, r3 = S.ValueIsEMailAddress, n3 = S.ValueIsFiniteNumber, a3 = S.ValueIsFunction, i3 = S.ValueIsInteger, s3 = S.ValueIsIntegerInRange, o3 = S.ValueIsList, l3 = S.ValueIsListSatisfying, c3 = S.ValueIsNumber, u3 = S.ValueIsNumberInRange, d3 = S.ValueIsObject, h3 = S.ValueIsOneOf, f3 = S.ValueIsOrdinal, p3 = S.ValueIsPlainObject, m3 = S.ValueIsString, g3 = S.ValueIsStringMatching, b3 = S.ValueIsText, v3 = S.ValueIsTextline, w3 = S.ValueIsURL, x3 = S.acceptNil, y3 = S.escaped, k3 = S.expectBoolean, S3 = S.expectFunction, _3 = S.expectText, C3 = S.quoted, A3 = S.rejectNil;
export {
  V4 as BC_BackgroundModes,
  W4 as BC_BorderStyles,
  N5 as BC_Cursors,
  qm as BC_DatePattern,
  L2 as BC_DateRegExp,
  Pm as BC_DateTimePattern,
  D2 as BC_DateTimeRegExp,
  ic as BC_ErrorIndicator,
  $5 as BC_FontStyles,
  P4 as BC_FontWeightValues,
  T5 as BC_FontWeights,
  Gm as BC_MonthPattern,
  P2 as BC_MonthRegExp,
  U4 as BC_Overflows,
  Zm as BC_PropertyEditorTypes,
  I5 as BC_TextAlignments,
  H4 as BC_TextDecorationLines,
  q4 as BC_TextDecorationStyles,
  Lm as BC_TimePattern,
  B2 as BC_TimeRegExp,
  A5 as BC_Version,
  Wm as BC_WeekPattern,
  F2 as BC_WeekRegExp,
  Km as BC_expectedOrientations,
  N1 as BC_horizontalAnchorses,
  E1 as BC_verticalAnchorses,
  ac as EOLCount,
  vn as Fragment,
  Xm as HTMLsafe,
  Su as Marked,
  I1 as Preact,
  Ka as ScriptInstance,
  G1 as StringFromArguments,
  Jm as ValidatorForClassifier,
  Js as ValueIsAnchors,
  Ym as ValueIsArray,
  F1 as ValueIsBackgroundTexture,
  Qm as ValueIsBoolean,
  P1 as ValueIsBorderStyle,
  H1 as ValueIsBoxShadow,
  ro as ValueIsCardJSON,
  e3 as ValueIsCardinal,
  t3 as ValueIsColor,
  Vm as ValueIsDate,
  Hm as ValueIsDateTime,
  Tr as ValueIsDeck,
  wr as ValueIsDimension,
  r3 as ValueIsEMailAddress,
  n3 as ValueIsFiniteNumber,
  a3 as ValueIsFunction,
  O1 as ValueIsGeometry,
  M1 as ValueIsIdentifier,
  i3 as ValueIsInteger,
  s3 as ValueIsIntegerInRange,
  gm as ValueIsIntegerList,
  hm as ValueIsLineList,
  o3 as ValueIsList,
  l3 as ValueIsListSatisfying,
  er as ValueIsLocation,
  jm as ValueIsMonth,
  di as ValueIsName,
  c3 as ValueIsNumber,
  u3 as ValueIsNumberInRange,
  pm as ValueIsNumberList,
  d3 as ValueIsObject,
  Ys as ValueIsOffsets,
  h3 as ValueIsOneOf,
  f3 as ValueIsOrdinal,
  q1 as ValueIsOverflowList,
  B4 as ValueIsPhoneNumber,
  p3 as ValueIsPlainObject,
  z1 as ValueIsPosition,
  V1 as ValueIsSerializableObject,
  X0 as ValueIsSerializableValue,
  R1 as ValueIsSize,
  m3 as ValueIsString,
  g3 as ValueIsStringMatching,
  b3 as ValueIsText,
  D1 as ValueIsTextDecoration,
  L1 as ValueIsTextShadow,
  v3 as ValueIsTextline,
  Fm as ValueIsTime,
  w3 as ValueIsURL,
  Um as ValueIsWeek,
  to as ValueIsWidgetJSON,
  x3 as acceptNil,
  wm as acceptableBoolean,
  Cm as acceptableCardinal,
  Em as acceptableColor,
  Mm as acceptableEMailAddress,
  Nm as acceptableFunction,
  km as acceptableInteger,
  Sm as acceptableIntegerInRange,
  Om as acceptableName,
  Bm as acceptableNameOrIndex,
  xm as acceptableNumber,
  ym as acceptableNumberInRange,
  _m as acceptableOrdinal,
  zm as acceptablePhoneNumber,
  Am as acceptableString,
  Tm as acceptableStringMatching,
  $m as acceptableText,
  Im as acceptableTextline,
  Rm as acceptableURL,
  vm as acceptableValue,
  Fn as adjustIdCounterFor,
  s2 as allowAnchors,
  p2 as allowBackgroundTexture,
  g2 as allowBorderStyle,
  v2 as allowBoxShadow,
  Y4 as allowDimension,
  a2 as allowGeometry,
  j4 as allowIdentifier,
  M2 as allowIntegerList,
  A2 as allowLineList,
  X4 as allowLocation,
  K4 as allowName,
  I2 as allowNumberList,
  l2 as allowOffsets,
  x2 as allowOverflowList,
  e2 as allowPosition,
  _2 as allowSerializableObject,
  k2 as allowSerializableValue,
  r2 as allowSize,
  u2 as allowTextDecoration,
  h2 as allowTextShadow,
  G5 as allowedAnchors,
  em as allowedBackgroundTexture,
  rm as allowedBorderStyle,
  am as allowedBoxShadow,
  L5 as allowedDimension,
  W5 as allowedGeometry,
  M5 as allowedIdentifier,
  bm as allowedIntegerList,
  fm as allowedLineList,
  B5 as allowedLocation,
  R5 as allowedName,
  mm as allowedNumberList,
  Z5 as allowedOffsets,
  sm as allowedOverflowList,
  P5 as allowedPosition,
  um as allowedSerializableObject,
  lm as allowedSerializableValue,
  q5 as allowedSize,
  X5 as allowedTextDecoration,
  Y5 as allowedTextShadow,
  Bi as buildContext,
  Xa as buildScriptParams,
  y5 as clear,
  kc as cloneElement,
  J0 as computeOffsets,
  Sc as createContext,
  Jr as createElement,
  Oc as createPortal,
  Md as createRef,
  Bc as createStore,
  pa as del,
  S5 as entries,
  y3 as escaped,
  Ta as escapedForHTML,
  o2 as expectAnchors,
  m2 as expectBackgroundTexture,
  k3 as expectBoolean,
  b2 as expectBorderStyle,
  w2 as expectBoxShadow,
  Q4 as expectDimension,
  S3 as expectFunction,
  i2 as expectGeometry,
  Z4 as expectIdentifier,
  z2 as expectIntegerList,
  T2 as expectLineList,
  J4 as expectLocation,
  Xs as expectName,
  N2 as expectNumberList,
  c2 as expectOffsets,
  y2 as expectOverflowList,
  t2 as expectPosition,
  C2 as expectSerializableObject,
  S2 as expectSerializableValue,
  n2 as expectSize,
  _3 as expectText,
  d2 as expectTextDecoration,
  f2 as expectTextShadow,
  j5 as expectedAnchors,
  tm as expectedBackgroundTexture,
  nm as expectedBorderStyle,
  im as expectedBoxShadow,
  F5 as expectedDimension,
  U5 as expectedGeometry,
  z5 as expectedIdentifier,
  R2 as expectedIntegerList,
  $2 as expectedLineList,
  D5 as expectedLocation,
  O5 as expectedName,
  E2 as expectedNumberList,
  K5 as expectedOffsets,
  om as expectedOverflowList,
  H5 as expectedPosition,
  dm as expectedSerializableObject,
  cm as expectedSerializableValue,
  V5 as expectedSize,
  J5 as expectedTextDecoration,
  Q5 as expectedTextShadow,
  Wd as forwardRef,
  F4 as fromDocumentTo,
  D4 as fromLocalTo,
  L4 as fromViewportTo,
  Bn as get,
  Jr as h,
  K as html,
  O2 as installStylesheetFor,
  th as keys,
  t5 as makeCardProxy,
  r5 as makeDeckProxy,
  e5 as makeWidgetProxy,
  C5 as markedHighlight,
  _5 as markedKatex,
  qd as memo,
  he as newInternalId,
  Dm as normalizedName,
  C3 as quoted,
  A3 as rejectNil,
  Kr as render,
  K2 as resolveBehaviorUrl,
  sr as resolveGeometry,
  j2 as safelyRendered,
  tl as set,
  Un as throwError,
  E5 as throwReadOnlyError,
  v0 as toChildArray,
  oc as uniqueNameIn,
  vr as useCallback,
  Tc as useContext,
  Jt as useEffect,
  $c as useErrorBoundary,
  Ic as useId,
  Fd as useLayoutEffect,
  k0 as useMemo,
  Ac as useReducer,
  Le as useRef,
  Je as useState,
  k5 as values
};
