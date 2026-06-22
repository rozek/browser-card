var Od = Object.defineProperty;
var Do = (r) => {
  throw TypeError(r);
};
var Bd = (r, e, t) => e in r ? Od(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var at = (r, e, t) => Bd(r, typeof e != "symbol" ? e + "" : e, t), gi = (r, e, t) => e.has(r) || Do("Cannot " + t);
var R = (r, e, t) => (gi(r, e, "read from private field"), t ? t.call(r) : e.get(r)), bt = (r, e, t) => e.has(r) ? Do("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), ze = (r, e, t, n) => (gi(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), le = (r, e, t) => (gi(r, e, "access private method"), t);
var Lo = (r, e, t, n) => ({
  set _(a) {
    ze(r, e, a, t);
  },
  get _() {
    return R(r, e, n);
  }
});
function vc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var H0 = { exports: {} }, Dd = H0.exports, Fo;
function Ld() {
  return Fo || (Fo = 1, (function(r, e) {
    (function(t, n) {
      n(e);
    })(Dd, (function(t) {
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
        var P = new Error(_[2]);
        throw P.name = _[1], P;
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
      function p(b) {
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
      var A = /^\s*$/;
      function $(b) {
        return (typeof b == "string" || b instanceof String) && !A.test(b.valueOf());
      }
      function M(b, _) {
        return (typeof b == "string" || b instanceof String) && _.test(b.valueOf());
      }
      var z = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function q(b) {
        return M(b, z);
      }
      var G = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function Y(b) {
        return M(b, G);
      }
      function N(b) {
        return typeof b == "function";
      }
      function ie(b) {
        return typeof b == "function" && (b.name == null || b.name === "");
      }
      function ue(b) {
        return typeof b == "function" && b.name != null && b.name !== "";
      }
      function W(b) {
        return typeof b == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function pe(b) {
        return typeof b == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function _e(b) {
        return b != null && typeof b == "object";
      }
      function ke(b) {
        return b != null && typeof b == "object" && Object.getPrototypeOf(b) === Object.prototype;
      }
      function L(b) {
        return b != null && typeof b == "object" && !(b instanceof Object);
      }
      var V = Array.isArray;
      function re(b, _, P) {
        if (V(b)) {
          for (var ne = 0, ye = b.length; ne < ye; ne++) if (b[ne] === void 0) return !1;
          return !(_ != null && b.length < _) && !(P != null && b.length > P);
        }
        return !1;
      }
      function O(b, _, P, ne) {
        if (V(b)) try {
          for (var ye = 0, qe = b.length; ye < qe; ye++) if (_(b[ye]) == 0) return !1;
          return !(P != null && b.length < P) && !(ne != null && b.length > ne);
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
      function Q(b) {
        return b != null && typeof b.then == "function";
      }
      function Ne(b) {
        return b instanceof RegExp;
      }
      function Me(b, _) {
        return _.indexOf(b) >= 0;
      }
      function He(b) {
        return y(b) && (m0.hasOwnProperty(b) || /^#[a-fA-F0-9]{6}$/.test(b) || /^#[a-fA-F0-9]{8}$/.test(b) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(b) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(b));
      }
      var Ve = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      function Ue(b) {
        return M(b, Ve);
      }
      var jt = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function Ft(b) {
        if (!M(b, jt) || b === "") return !1;
        try {
          return new URL(b, "file://"), !0;
        } catch {
          return !1;
        }
      }
      var we = !1, Re = !0;
      function Pe(b, _, P, ne, ye) {
        if (_ == null) {
          if (ne) return _;
          s("MissingArgument: no ".concat(Qe(b), " given"));
        } else if (P(_)) switch (!0) {
          case _ instanceof Boolean:
          case _ instanceof Number:
          case _ instanceof String:
            return _.valueOf();
          default:
            return _;
        }
        else s("InvalidArgument: the given ".concat(Qe(b), " is no valid ").concat(Qe(ye)));
      }
      function se(b, _, P) {
        var ne = function(qe, Kr) {
          return Pe(qe, Kr, b, _, P);
        }, ye = b.name;
        return ye != null && /^ValueIs/.test(ye) ? Vr(ne, ye.replace(/^ValueIs/, _ ? "allow" : "expect")) : ne;
      }
      function Vr(b, _) {
        if (b == null && s("MissingArgument: no function given"), typeof b != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), _ == null && s("MissingArgument: no desired name given"), typeof _ == "string" || _ instanceof String || s("InvalidArgument: the given desired name is not a string"), b.name === _) return b;
        try {
          if (Object.defineProperty(b, "name", { value: _ }), b.name === _) return b;
        } catch {
        }
        return new Function("originalFunction", "return function " + _ + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(b);
      }
      function Sr(b, _) {
        if (_ != null) return _.valueOf();
        s("MissingArgument: no ".concat(Qe(b), " given"));
      }
      var xt = Sr, Qt = se(o, Re, "boolean value"), Ln = Qt, cn = se(o, we, "boolean value"), Fn = cn, mr = se(l, Re, "numeric value"), _r = mr, er = se(l, we, "numeric value"), Pn = er, un = se(d, Re, "finite numeric value"), ur = un, It = se(d, we, "finite numeric value"), Bt = It, tr = se(h, Re, "NaN value"), Cr = tr, dr = se(h, we, "NaN value"), Ar = dr;
      function l0(b, _, P, ne, ye, qe) {
        return _ == null ? _ : Hn(b, _, P, ne, ye, qe);
      }
      var D0 = l0;
      function Vn(b, _, P, ne, ye, qe) {
        if (er(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Qe(b), " is not-a-number")), ye == null && (ye = !0), qe == null && (qe = !0), P != null && isFinite(P)) {
          if (ne != null && isFinite(ne)) {
            if (_ < P || !ye && _ === P || _ > ne || !qe && _ === ne) throw new RangeError("the given ".concat(Qe(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(P, "...").concat(ne, ")"));
          } else if (_ < P || !ye && _ === P) throw new RangeError("the given ".concat(Qe(b), " is below the allowed ") + "minimum (".concat(_, " ").concat(ye ? "<" : "<=", " ").concat(P, ")"));
        } else if (ne != null && isFinite(ne) && (_ > ne || !qe && _ === ne)) throw new RangeError("the given ".concat(Qe(b), " exceeds the allowed ") + "maximum (".concat(_, " ").concat(qe ? ">" : ">=", " ").concat(ne, ")"));
        return _.valueOf();
      }
      var Hn = Vn, dn = se(p, Re, "integral numeric value"), c0 = dn, Hr = se(p, we, "integral numeric value"), u0 = Hr;
      function $r(b, _, P, ne) {
        return _ == null ? _ : Un(b, _, P, ne);
      }
      var qn = $r;
      function Wn(b, _, P, ne) {
        if (Hr(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Qe(b), " is not-a-number")), P != null && isFinite(P)) {
          if (ne != null && isFinite(ne)) {
            if (_ < P || _ > ne) throw new RangeError("the given ".concat(Qe(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(P, "...").concat(ne, ")"));
          } else if (_ < P) throw new RangeError("the given ".concat(Qe(b), " is below the allowed ") + "minimum (".concat(_, " < ").concat(P, ")"));
        } else if (ne != null && isFinite(ne) && _ > ne) throw new RangeError("the given ".concat(Qe(b), " exceeds the allowed ") + "maximum (".concat(_, " > ").concat(ne, ")"));
        return _.valueOf();
      }
      var Un = Wn, Gn = se(m, Re, "ordinal number"), gr = Gn, k = se(m, we, "ordinal number"), B = k, te = se(v, Re, "cardinal number"), $e = te, tt = se(v, we, "cardinal number"), Je = tt, me = se(y, Re, "literal string"), de = me, xe = se(y, we, "literal string"), gt = xe, ct = se($, Re, "non-empty literal string"), qr = ct, hn = se($, we, "non-empty literal string"), _t = hn;
      function jn(b, _, P) {
        return _ == null ? _ : d0(b, _, P);
      }
      var pn = jn;
      function fn(b, _, P) {
        if (xe(b, _), P.test(_)) return _.valueOf();
        s("InvalidArgument: the given ".concat(Qe(b), " does not match the specified pattern"));
      }
      var d0 = fn, mn = se(q, Re, "literal text"), h0 = mn, Wr = se(q, we, "literal text"), L0 = Wr, yt = se(Y, Re, "single line of text"), Tr = yt, Kt = se(Y, we, "single line of text"), gn = Kt, Pt = se(N, Re, "JavaScript function"), F0 = Pt, bn = se(N, we, "JavaScript function"), vn = bn, rt = se(ie, Re, "anonymous JavaScript function"), wn = rt, K = se(ie, we, "anonymous JavaScript function"), be = K, Oe = se(ue, Re, "named JavaScript function"), Ye = Oe, dt = se(ue, we, "named JavaScript function"), Vt = dt, Rt = se(W, Re, "native JavaScript function"), xn = Rt, zt = se(W, we, "native JavaScript function"), Zt = zt, T = se(pe, Re, "scripted JavaScript function"), I = T, D = se(pe, we, "scripted JavaScript function"), oe = D, ve = se(_e, Re, "JavaScript object"), ce = ve, Fe = se(_e, we, "JavaScript object"), je = Fe, Ke = se(ke, Re, '"plain" JavaScript object'), kt = Ke, Ur = se(ke, we, '"plain" JavaScript object'), Ir = Ur, Ce = se(L, Re, '"vanilla" JavaScript object'), Gr = Ce, Ct = se(L, we, '"vanilla" JavaScript object'), nt = Ct;
      function Kn(b, _) {
        return _ == null ? _ : f0(b, _);
      }
      var jr = Kn;
      function p0(b, _) {
        if (_ == null && s("MissingArgument: no ".concat(Qe(b), " given")), V(_)) return _;
        s("InvalidArgument: the given ".concat(Qe(b), " is no JavaScript array"));
      }
      var f0 = p0;
      function ae(b, _, P, ne, ye) {
        return _ == null ? _ : Ge(b, _, P, ne, ye);
      }
      var ge = ae;
      function Ee(b, _, P, ne, ye) {
        if (_ == null && s("MissingArgument: no ".concat(Qe(b), " given")), re(_, ne, ye)) return _;
        s("InvalidArgument: the given ".concat(Qe(b), " is ") + (P == null ? "either not a list or contains an invalid number of elements" : "no " + Qe(P)));
      }
      var Ge = Ee;
      function Nt(b, _, P, ne, ye, qe) {
        return _ == null ? _ : ha(b, _, P, ne, ye, qe);
      }
      var br = Nt;
      function da(b, _, P, ne, ye, qe) {
        if (_ == null && s("MissingArgument: no ".concat(Qe(b), " given")), O(_, P, ye, qe)) return _;
        s("InvalidArgument: the given ".concat(Qe(b), " is ") + (ne == null ? "either not a list or contains invalid elements" : "no " + Qe(ne)));
      }
      var ha = da;
      function lo(b, _, P, ne) {
        return _ == null ? _ : uo(b, _, P, ne);
      }
      var bd = lo;
      function co(b, _, P, ne) {
        return _ == null && s("MissingArgument: no ".concat(Qe(b), " given")), _ instanceof P || s("InvalidArgument: the given ".concat(Qe(b), " is no ").concat(Qe(ne))), _;
      }
      var uo = co;
      function ho(b, _, P, ne) {
        return _ == null ? _ : fo(b, _, P, ne);
      }
      var vd = ho;
      function po(b, _, P, ne) {
        if (_ == null && s("MissingArgument: no ".concat(Qe(b), " given")), P.isPrototypeOf(_)) return _;
        s("InvalidArgument: the given ".concat(Qe(b), " is no ").concat(Qe(ne)));
      }
      var fo = po, mo = se(j, Re, "JavaScript Date object"), wd = mo, go = se(j, we, "JavaScript Date object"), xd = go, bo = se(E, Re, "JavaScript Error object"), yd = bo, vo = se(E, we, "JavaScript Error object"), kd = vo, wo = se(Q, Re, 'JavaScript Promise (or "Thenable") object'), Sd = wo, xo = se(Q, we, 'JavaScript Promise (or "Thenable") object'), _d = xo, yo = se(Ne, Re, "JavaScript RegExp object"), Cd = yo, ko = se(Ne, we, "JavaScript RegExp object"), Ad = ko;
      function So(b, _, P) {
        return _ == null ? _ : Co(b, _, P);
      }
      var $d = So;
      function _o(b, _, P) {
        if (_ == null && s("MissingArgument: no ".concat(Qe(b), " given")), Me(_, P)) return _ == null || typeof _.valueOf != "function" ? _ : _.valueOf();
        s("InvalidArgument: the given ".concat(Qe(b), " is not among the supported values"));
      }
      var Co = _o, Ao = se(He, Re, "CSS color specification"), Td = Ao, $o = se(He, we, "CSS color specification"), Id = $o, To = se(Ue, Re, "EMail address"), Nd = To, Io = se(Ue, we, "EMail address"), Md = Io, No = se(Ft, Re, "URL"), Ed = No, Mo = se(Ft, we, "URL"), zd = Mo;
      function Qe(b) {
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
              var P = _.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(P.length) + P;
          }
        }));
      }
      function Eo(b, _) {
        return _ === void 0 && (_ = '"'), b.replace(_ === "'" ? /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|'/g : /\\x[0-9a-zA-Z]{2}|\\u[0-9a-zA-Z]{4}|\\[0bfnrtv'"\\\/]?|"/g, (function(P) {
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
              var ne = P.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(ne.length) + ne;
          }
        }));
      }
      function zo(b, _) {
        return _ = (_ || "").trim() || "<br/>", b.replace(/[&<>"'\u0000-\u001F\u007F-\u009F\\]/g, (function(P) {
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
              var ne = P.charCodeAt(0).toString(16);
              return "&#x0000".substring(3, 7 - ne.length) + ne + ";";
          }
        }));
      }
      function pa(b, _, P) {
        if (b === _) return !1;
        var ne = typeof b;
        if (ne !== typeof _) return !0;
        switch (ne) {
          case "undefined":
          case "boolean":
          case "string":
          case "function":
          default:
            return !0;
          case "number":
            return isNaN(b) !== isNaN(_) || Math.abs(b - _) > Number.EPSILON;
          case "object":
            return b == null || _ == null || (P === "by-value" && (b instanceof Boolean || b instanceof Number || b instanceof String) ? b.valueOf() !== _.valueOf() : Array.isArray(b) ? (function(ye, qe, Kr) {
              if (!Array.isArray(qe) || ye.length !== qe.length) return !0;
              for (var rr = 0, Rd = ye.length; rr < Rd; rr++) if (pa(ye[rr], qe[rr], Kr)) return !0;
              return !1;
            })(b, _, P) : P === "by-reference" || (function(ye, qe, Kr) {
              if (Object.getPrototypeOf(ye) !== Object.getPrototypeOf(qe)) return !0;
              for (var rr in ye) if (!(rr in qe)) return !0;
              for (var rr in qe)
                if (!(rr in ye) || pa(ye[rr], qe[rr], Kr)) return !0;
              return !1;
            })(b, _, P));
        }
        return !0;
      }
      function Ro(b) {
        for (var _ in Fe("candidate", b), b) if (a(b, _)) return !1;
        return !0;
      }
      function Oo(b) {
        return /^\s*$/.test(b);
      }
      var m0 = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
      function Bo(b) {
        var _ = b.toLowerCase();
        if (m0.hasOwnProperty(_) && (b = m0[_]), /^#[a-fA-F0-9]{6}$/.test(b)) return b + "FF";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return b;
        var P = "0123456789ABCDEF";
        function ne(qe) {
          return qe > 255 && (qe = 255), P[Math.trunc(qe / 16)] + P[qe % 16];
        }
        var ye = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (ye != null) return "#" + ne(parseInt(ye[1], 10)) + ne(parseInt(ye[2], 10)) + ne(parseInt(ye[3], 10)) + "FF";
        if ((ye = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return "#" + ne(parseInt(ye[1], 10)) + ne(parseInt(ye[2], 10)) + ne(parseInt(ye[3], 10)) + ne(255 * parseFloat(ye[4]));
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }
      t.ColorSet = m0, t.FunctionWithName = Vr, t.HTMLsafe = zo, t.HexColor = Bo, t.MarkDownSafe = function(b, _) {
        return zo(b, _).replace(/:/g, "&#58;");
      }, t.ObjectIsEmpty = Ro, t.ObjectIsNotEmpty = function(b) {
        return !Ro(b);
      }, t.ObjectMergedWith = function(b) {
        for (var _ = [], P = 1; P < arguments.length; P++) _[P - 1] = arguments[P];
        for (var ne = 0, ye = _.length; ne < ye; ne++) {
          var qe = _[ne];
          if (qe != null) if (typeof qe == "object") for (var Kr in qe) {
            var rr = Object.getOwnPropertyDescriptor(qe, Kr);
            rr != null && Object.defineProperty(b, Kr, rr);
          }
          else s("InvalidArgument: argument #" + (ne + 1) + " is not an object");
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
        if (m0.hasOwnProperty(_)) return m0[_];
        if (/^#[a-fA-F0-9]{6}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + ", 1)";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + "," + parseInt(b.slice(7), 16) / 255 + ")";
        var P = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (P != null) return b.slice(0, b.length - 1) + ",1)";
        if ((P = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return b;
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }, t.StringIsEmpty = Oo, t.StringIsNotEmpty = function(b) {
        return !Oo(b);
      }, t.ValidatorForClassifier = se, t.ValueExists = function(b) {
        return b != null;
      }, t.ValueInheritsFrom = function(b, _) {
        return i(_, b);
      }, t.ValueIsAnonymousFunction = ie, t.ValueIsArray = V, t.ValueIsBoolean = o, t.ValueIsCardinal = v, t.ValueIsColor = He, t.ValueIsDate = j, t.ValueIsEMailAddress = Ue, t.ValueIsEmptyString = function(b) {
        return (typeof b == "string" || b instanceof String) && A.test(b.valueOf());
      }, t.ValueIsError = E, t.ValueIsFiniteNumber = d, t.ValueIsFunction = N, t.ValueIsInstanceOf = function(b, _) {
        return b instanceof _;
      }, t.ValueIsInteger = p, t.ValueIsIntegerInRange = function(b, _, P) {
        if (!p(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(P)) {
            if (b < _ || b > P) return !1;
          } else if (b < _) return !1;
        } else if (d(P) && b > P) return !1;
        return !0;
      }, t.ValueIsList = re, t.ValueIsListSatisfying = O, t.ValueIsMissing = function(b) {
        return b == null;
      }, t.ValueIsNaN = h, t.ValueIsNamedFunction = ue, t.ValueIsNativeFunction = W, t.ValueIsNonEmptyString = $, t.ValueIsNumber = l, t.ValueIsNumberInRange = function(b, _, P, ne, ye) {
        if (ne === void 0 && (ne = !0), ye === void 0 && (ye = !0), !l(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(P)) {
            if (b < _ || !ne && b === _ || b > P || !ye && b === P) return !1;
          } else if (b < _ || !ne && b === _) return !1;
        } else if (d(P) && (b > P || !ye && b === P)) return !1;
        return !0;
      }, t.ValueIsObject = _e, t.ValueIsOneOf = Me, t.ValueIsOrdinal = m, t.ValueIsPlainObject = ke, t.ValueIsPromise = Q, t.ValueIsRegExp = Ne, t.ValueIsScriptedFunction = pe, t.ValueIsString = y, t.ValueIsStringMatching = M, t.ValueIsText = q, t.ValueIsTextline = Y, t.ValueIsURL = Ft, t.ValueIsVanillaObject = L, t.ValuesAreEqual = function(b, _, P) {
        return !pa(b, _, P);
      }, t.ValuesDiffer = pa, t.acceptNil = Re, t.allowAnonymousFunction = rt, t.allowArray = Kn, t.allowBoolean = Qt, t.allowCardinal = te, t.allowColor = Ao, t.allowDate = mo, t.allowEMailAddress = To, t.allowError = bo, t.allowFiniteNumber = un, t.allowFunction = Pt, t.allowInstanceOf = lo, t.allowInteger = dn, t.allowIntegerInRange = $r, t.allowList = ae, t.allowListSatisfying = Nt, t.allowNaN = tr, t.allowNamedFunction = Oe, t.allowNativeFunction = Rt, t.allowNonEmptyString = ct, t.allowNumber = mr, t.allowNumberInRange = l0, t.allowObject = ve, t.allowOneOf = So, t.allowOrdinal = Gn, t.allowPlainObject = Ke, t.allowPromise = wo, t.allowRegExp = yo, t.allowScriptedFunction = T, t.allowString = me, t.allowStringMatching = jn, t.allowText = mn, t.allowTextline = yt, t.allowURL = No, t.allowValueInheritingFrom = ho, t.allowVanillaObject = Ce, t.allowedAnonymousFunction = wn, t.allowedArray = jr, t.allowedBoolean = Ln, t.allowedCardinal = $e, t.allowedColor = Td, t.allowedDate = wd, t.allowedEMailAddress = Nd, t.allowedError = yd, t.allowedFiniteNumber = ur, t.allowedFunction = F0, t.allowedInstanceOf = bd, t.allowedInteger = c0, t.allowedIntegerInRange = qn, t.allowedList = ge, t.allowedListSatisfying = br, t.allowedNaN = Cr, t.allowedNamedFunction = Ye, t.allowedNativeFunction = xn, t.allowedNonEmptyString = qr, t.allowedNumber = _r, t.allowedNumberInRange = D0, t.allowedObject = ce, t.allowedOneOf = $d, t.allowedOrdinal = gr, t.allowedPlainObject = kt, t.allowedPromise = Sd, t.allowedRegExp = Cd, t.allowedScriptedFunction = I, t.allowedString = de, t.allowedStringMatching = pn, t.allowedText = h0, t.allowedTextline = Tr, t.allowedURL = Ed, t.allowedValueInheritingFrom = vd, t.allowedVanillaObject = Gr, t.constrained = function(b, _, P) {
        return _ === void 0 && (_ = -1 / 0), P === void 0 && (P = 1 / 0), Math.max(_, Math.min(b, P));
      }, t.escaped = Qe, t.expectAnonymousFunction = K, t.expectArray = p0, t.expectBoolean = cn, t.expectCardinal = tt, t.expectColor = $o, t.expectDate = go, t.expectEMailAddress = Io, t.expectError = vo, t.expectFiniteNumber = It, t.expectFunction = bn, t.expectInstanceOf = co, t.expectInteger = Hr, t.expectIntegerInRange = Wn, t.expectList = Ee, t.expectListSatisfying = da, t.expectNaN = dr, t.expectNamedFunction = dt, t.expectNativeFunction = zt, t.expectNonEmptyString = hn, t.expectNumber = er, t.expectNumberInRange = Vn, t.expectObject = Fe, t.expectOneOf = _o, t.expectOrdinal = k, t.expectPlainObject = Ur, t.expectPromise = xo, t.expectRegExp = ko, t.expectScriptedFunction = D, t.expectString = xe, t.expectStringMatching = fn, t.expectText = Wr, t.expectTextline = Kt, t.expectURL = Mo, t.expectValue = Sr, t.expectValueInheritingFrom = po, t.expectVanillaObject = Ct, t.expectedAnonymousFunction = be, t.expectedArray = f0, t.expectedBoolean = Fn, t.expectedCardinal = Je, t.expectedColor = Id, t.expectedDate = xd, t.expectedEMailAddress = Md, t.expectedError = kd, t.expectedFiniteNumber = Bt, t.expectedFunction = vn, t.expectedInstanceOf = uo, t.expectedInteger = u0, t.expectedIntegerInRange = Un, t.expectedList = Ge, t.expectedListSatisfying = ha, t.expectedNaN = Ar, t.expectedNamedFunction = Vt, t.expectedNativeFunction = Zt, t.expectedNonEmptyString = _t, t.expectedNumber = Pn, t.expectedNumberInRange = Hn, t.expectedObject = je, t.expectedOneOf = Co, t.expectedOrdinal = B, t.expectedPlainObject = Ir, t.expectedPromise = _d, t.expectedRegExp = Ad, t.expectedScriptedFunction = oe, t.expectedString = gt, t.expectedStringMatching = d0, t.expectedText = L0, t.expectedTextline = gn, t.expectedURL = zd, t.expectedValue = xt, t.expectedValueInheritingFrom = fo, t.expectedVanillaObject = nt, t.global = n, t.quotable = Eo, t.quoted = function(b, _) {
        return _ === void 0 && (_ = '"'), _ + Eo(b, _) + _;
      }, t.rejectNil = we, t.shortHexColor = function(b) {
        return Bo(b).slice(0, 7);
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
              var P = parseInt(_.slice(2), 16);
              return String.fromCharCode(P);
          }
        }));
      }, t.validatedArgument = Pe, Object.defineProperty(t, "__esModule", { value: !0 });
    }));
  })(H0, H0.exports)), H0.exports;
}
var S = Ld(), sa, Le, wc, Cn, Po, xc, yc, bi, Ma, G0, kc, Cs, Vi, Hi, Sc, La = {}, Fa = [], Fd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, oa = Array.isArray;
function Or(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function As(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function tn(r, e, t) {
  var n, a, i, s = {};
  for (i in e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : s[i] = e[i];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? sa.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (i in r.defaultProps) s[i] === void 0 && (s[i] = r.defaultProps[i]);
  return j0(r, s, n, a, null);
}
function j0(r, e, t, n, a) {
  var i = { type: r, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: a ?? ++wc, __i: -1, __u: 0 };
  return a == null && Le.vnode != null && Le.vnode(i), i;
}
function Pd() {
  return { current: null };
}
function In(r) {
  return r.children;
}
function Yr(r, e) {
  this.props = r, this.context = e;
}
function A0(r, e) {
  if (e == null) return r.__ ? A0(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? A0(r) : null;
}
function Vd(r) {
  if (r.__P && r.__d) {
    var e = r.__v, t = e.__e, n = [], a = [], i = Or({}, e);
    i.__v = e.__v + 1, Le.vnode && Le.vnode(i), $s(r.__P, i, e, r.__n, r.__P.namespaceURI, 32 & e.__u ? [t] : null, n, t ?? A0(e), !!(32 & e.__u), a), i.__v = e.__v, i.__.__k[i.__i] = i, $c(n, i, a), e.__e = e.__ = null, i.__e != t && _c(i);
  }
}
function _c(r) {
  if ((r = r.__) != null && r.__c != null) return r.__e = r.__c.base = null, r.__k.some(function(e) {
    if (e != null && e.__e != null) return r.__e = r.__c.base = e.__e;
  }), _c(r);
}
function qi(r) {
  (!r.__d && (r.__d = !0) && Cn.push(r) && !Pa.__r++ || Po != Le.debounceRendering) && ((Po = Le.debounceRendering) || xc)(Pa);
}
function Pa() {
  try {
    for (var r, e = 1; Cn.length; ) Cn.length > e && Cn.sort(yc), r = Cn.shift(), e = Cn.length, Vd(r);
  } finally {
    Cn.length = Pa.__r = 0;
  }
}
function Cc(r, e, t, n, a, i, s, o, l, d, h) {
  var p, m, v, y, A, $, M, z = n && n.__k || Fa, q = e.length;
  for (l = Hd(t, e, z, l, q), p = 0; p < q; p++) (v = t.__k[p]) != null && (m = v.__i != -1 && z[v.__i] || La, v.__i = p, $ = $s(r, v, m, a, i, s, o, l, d, h), y = v.__e, v.ref && m.ref != v.ref && (m.ref && Ts(m.ref, null, v), h.push(v.ref, v.__c || y, v)), A == null && y != null && (A = y), (M = !!(4 & v.__u)) || m.__k === v.__k ? (l = Ac(v, l, r, M), M && m.__e && (m.__e = null)) : typeof v.type == "function" && $ !== void 0 ? l = $ : y && (l = y.nextSibling), v.__u &= -7);
  return t.__e = A, l;
}
function Hd(r, e, t, n, a) {
  var i, s, o, l, d, h = t.length, p = h, m = 0;
  for (r.__k = new Array(a), i = 0; i < a; i++) (s = e[i]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = r.__k[i] = j0(null, s, null, null, null) : oa(s) ? s = r.__k[i] = j0(In, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = r.__k[i] = j0(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : r.__k[i] = s, l = i + m, s.__ = r, s.__b = r.__b + 1, o = null, (d = s.__i = qd(s, t, l, p)) != -1 && (p--, (o = t[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (a > h ? m-- : a < h && m++), typeof s.type != "function" && (s.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, s.__u |= 4))) : r.__k[i] = null;
  if (p) for (i = 0; i < h; i++) (o = t[i]) != null && (2 & o.__u) == 0 && (o.__e == n && (n = A0(o)), Ic(o, o));
  return n;
}
function Ac(r, e, t, n) {
  var a, i;
  if (typeof r.type == "function") {
    for (a = r.__k, i = 0; a && i < a.length; i++) a[i] && (a[i].__ = r, e = Ac(a[i], e, t, n));
    return e;
  }
  r.__e != e && (n && (e && r.type && !e.parentNode && (e = A0(r)), t.insertBefore(r.__e, e || null)), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function $0(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (oa(r) ? r.some(function(t) {
    $0(t, e);
  }) : e.push(r)), e;
}
function qd(r, e, t, n) {
  var a, i, s, o = r.key, l = r.type, d = e[t], h = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || h && o == d.key && l == d.type) return t;
  if (n > (h ? 1 : 0)) {
    for (a = t - 1, i = t + 1; a >= 0 || i < e.length; ) if ((d = e[s = a >= 0 ? a-- : i++]) != null && (2 & d.__u) == 0 && o == d.key && l == d.type) return s;
  }
  return -1;
}
function Vo(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || Fd.test(e) ? t : t + "px";
}
function fa(r, e, t, n, a) {
  var i, s;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof n == "string" && (r.style.cssText = n = ""), n) for (e in n) t && e in t || Vo(r.style, e, "");
    if (t) for (e in t) n && t[e] == n[e] || Vo(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") i = e != (e = e.replace(kc, "$1")), s = e.toLowerCase(), e = s in r || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + i] = t, t ? n ? t[G0] = n[G0] : (t[G0] = Cs, r.addEventListener(e, i ? Hi : Vi, i)) : r.removeEventListener(e, i ? Hi : Vi, i);
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
function Ho(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e[Ma] == null) e[Ma] = Cs++;
      else if (e[Ma] < t[G0]) return;
      return t(Le.event ? Le.event(e) : e);
    }
  };
}
function $s(r, e, t, n, a, i, s, o, l, d) {
  var h, p, m, v, y, A, $, M, z, q, G, Y, N, ie, ue, W = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), i = [o = e.__e = t.__e]), (h = Le.__b) && h(e);
  e: if (typeof W == "function") try {
    if (M = e.props, z = W.prototype && W.prototype.render, q = (h = W.contextType) && n[h.__c], G = h ? q ? q.props.value : h.__ : n, t.__c ? $ = (p = e.__c = t.__c).__ = p.__E : (z ? e.__c = p = new W(M, G) : (e.__c = p = new Yr(M, G), p.constructor = W, p.render = Ud), q && q.sub(p), p.state || (p.state = {}), p.__n = n, m = p.__d = !0, p.__h = [], p._sb = []), z && p.__s == null && (p.__s = p.state), z && W.getDerivedStateFromProps != null && (p.__s == p.state && (p.__s = Or({}, p.__s)), Or(p.__s, W.getDerivedStateFromProps(M, p.__s))), v = p.props, y = p.state, p.__v = e, m) z && W.getDerivedStateFromProps == null && p.componentWillMount != null && p.componentWillMount(), z && p.componentDidMount != null && p.__h.push(p.componentDidMount);
    else {
      if (z && W.getDerivedStateFromProps == null && M !== v && p.componentWillReceiveProps != null && p.componentWillReceiveProps(M, G), e.__v == t.__v || !p.__e && p.shouldComponentUpdate != null && p.shouldComponentUpdate(M, p.__s, G) === !1) {
        e.__v != t.__v && (p.props = M, p.state = p.__s, p.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(pe) {
          pe && (pe.__ = e);
        }), Fa.push.apply(p.__h, p._sb), p._sb = [], p.__h.length && s.push(p);
        break e;
      }
      p.componentWillUpdate != null && p.componentWillUpdate(M, p.__s, G), z && p.componentDidUpdate != null && p.__h.push(function() {
        p.componentDidUpdate(v, y, A);
      });
    }
    if (p.context = G, p.props = M, p.__P = r, p.__e = !1, Y = Le.__r, N = 0, z) p.state = p.__s, p.__d = !1, Y && Y(e), h = p.render(p.props, p.state, p.context), Fa.push.apply(p.__h, p._sb), p._sb = [];
    else do
      p.__d = !1, Y && Y(e), h = p.render(p.props, p.state, p.context), p.state = p.__s;
    while (p.__d && ++N < 25);
    p.state = p.__s, p.getChildContext != null && (n = Or(Or({}, n), p.getChildContext())), z && !m && p.getSnapshotBeforeUpdate != null && (A = p.getSnapshotBeforeUpdate(v, y)), ie = h != null && h.type === In && h.key == null ? Tc(h.props.children) : h, o = Cc(r, oa(ie) ? ie : [ie], e, t, n, a, i, s, o, l, d), p.base = e.__e, e.__u &= -161, p.__h.length && s.push(p), $ && (p.__E = p.__ = null);
  } catch (pe) {
    if (e.__v = null, l || i != null) if (pe.then) {
      for (e.__u |= l ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      i[i.indexOf(o)] = null, e.__e = o;
    } else {
      for (ue = i.length; ue--; ) As(i[ue]);
      Wi(e);
    }
    else e.__e = t.__e, e.__k = t.__k, pe.then || Wi(e);
    Le.__e(pe, e, t);
  }
  else i == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : o = e.__e = Wd(t.__e, e, t, n, a, i, s, l, d);
  return (h = Le.diffed) && h(e), 128 & e.__u ? void 0 : o;
}
function Wi(r) {
  r && (r.__c && (r.__c.__e = !0), r.__k && r.__k.some(Wi));
}
function $c(r, e, t) {
  for (var n = 0; n < t.length; n++) Ts(t[n], t[++n], t[++n]);
  Le.__c && Le.__c(e, r), r.some(function(a) {
    try {
      r = a.__h, a.__h = [], r.some(function(i) {
        i.call(a);
      });
    } catch (i) {
      Le.__e(i, a.__v);
    }
  });
}
function Tc(r) {
  return typeof r != "object" || r == null || r.__b > 0 ? r : oa(r) ? r.map(Tc) : r.constructor !== void 0 ? null : Or({}, r);
}
function Wd(r, e, t, n, a, i, s, o, l) {
  var d, h, p, m, v, y, A, $ = t.props || La, M = e.props, z = e.type;
  if (z == "svg" ? a = "http://www.w3.org/2000/svg" : z == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), i != null) {
    for (d = 0; d < i.length; d++) if ((v = i[d]) && "setAttribute" in v == !!z && (z ? v.localName == z : v.nodeType == 3)) {
      r = v, i[d] = null;
      break;
    }
  }
  if (r == null) {
    if (z == null) return document.createTextNode(M);
    r = document.createElementNS(a, z, M.is && M), o && (Le.__m && Le.__m(e, i), o = !1), i = null;
  }
  if (z == null) $ === M || o && r.data == M || (r.data = M);
  else {
    if (i = z == "textarea" && M.defaultValue != null ? null : i && sa.call(r.childNodes), !o && i != null) for ($ = {}, d = 0; d < r.attributes.length; d++) $[(v = r.attributes[d]).name] = v.value;
    for (d in $) v = $[d], d == "dangerouslySetInnerHTML" ? p = v : d == "children" || d in M || d == "value" && "defaultValue" in M || d == "checked" && "defaultChecked" in M || fa(r, d, null, v, a);
    for (d in M) v = M[d], d == "children" ? m = v : d == "dangerouslySetInnerHTML" ? h = v : d == "value" ? y = v : d == "checked" ? A = v : o && typeof v != "function" || $[d] === v || fa(r, d, v, $[d], a);
    if (h) o || p && (h.__html == p.__html || h.__html == r.innerHTML) || (r.innerHTML = h.__html), e.__k = [];
    else if (p && (r.innerHTML = ""), Cc(e.type == "template" ? r.content : r, oa(m) ? m : [m], e, t, n, z == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, i, s, i ? i[0] : t.__k && A0(t, 0), o, l), i != null) for (d = i.length; d--; ) As(i[d]);
    o && z != "textarea" || (d = "value", z == "progress" && y == null ? r.removeAttribute("value") : y != null && (y !== r[d] || z == "progress" && !y || z == "option" && y != $[d]) && fa(r, d, y, $[d], a), d = "checked", A != null && A != r[d] && fa(r, d, A, $[d], a));
  }
  return r;
}
function Ts(r, e, t) {
  try {
    if (typeof r == "function") {
      var n = typeof r.__u == "function";
      n && r.__u(), n && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (a) {
    Le.__e(a, t);
  }
}
function Ic(r, e, t) {
  var n, a;
  if (Le.unmount && Le.unmount(r), (n = r.ref) && (n.current && n.current != r.__e || Ts(n, null, e)), (n = r.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (i) {
      Le.__e(i, e);
    }
    n.base = n.__P = null;
  }
  if (n = r.__k) for (a = 0; a < n.length; a++) n[a] && Ic(n[a], e, t || typeof r.type != "function");
  t || As(r.__e), r.__c = r.__ = r.__e = void 0;
}
function Ud(r, e, t) {
  return this.constructor(r, t);
}
function Qr(r, e, t) {
  var n, a, i, s;
  e == document && (e = document.documentElement), Le.__ && Le.__(r, e), a = (n = typeof t == "function") ? null : t && t.__k || e.__k, i = [], s = [], $s(e, r = (!n && t || e).__k = tn(In, null, [r]), a || La, La, e.namespaceURI, !n && t ? [t] : a ? null : e.firstChild ? sa.call(e.childNodes) : null, i, !n && t ? t : a ? a.__e : e.firstChild, n, s), $c(i, r, s);
}
function Nc(r, e, t) {
  var n, a, i, s, o = Or({}, r.props);
  for (i in r.type && r.type.defaultProps && (s = r.type.defaultProps), e) i == "key" ? n = e[i] : i == "ref" ? a = e[i] : o[i] = e[i] === void 0 && s != null ? s[i] : e[i];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? sa.call(arguments, 2) : t), j0(r.type, o, n || r.key, a || r.ref, null);
}
function Mc(r) {
  function e(t) {
    var n, a;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (a = {})[e.__c] = this, this.getChildContext = function() {
      return a;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(i) {
      this.props.value != i.value && n.forEach(function(s) {
        s.__e = !0, qi(s);
      });
    }, this.sub = function(i) {
      n.add(i);
      var s = i.componentWillUnmount;
      i.componentWillUnmount = function() {
        n && n.delete(i), s && s.call(i);
      };
    }), t.children;
  }
  return e.__c = "__cC" + Sc++, e.__ = r, e.Provider = e.__l = (e.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = e, e;
}
sa = Fa.slice, Le = { __e: function(r, e, t, n) {
  for (var a, i, s; e = e.__; ) if ((a = e.__c) && !a.__) try {
    if ((i = a.constructor) && i.getDerivedStateFromError != null && (a.setState(i.getDerivedStateFromError(r)), s = a.__d), a.componentDidCatch != null && (a.componentDidCatch(r, n || {}), s = a.__d), s) return a.__E = a;
  } catch (o) {
    r = o;
  }
  throw r;
} }, wc = 0, Yr.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Or({}, this.state), typeof r == "function" && (r = r(Or({}, t), this.props)), r && Or(t, r), r != null && this.__v && (e && this._sb.push(e), qi(this));
}, Yr.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), qi(this));
}, Yr.prototype.render = In, Cn = [], xc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yc = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, Pa.__r = 0, bi = Math.random().toString(8), Ma = "__d" + bi, G0 = "__a" + bi, kc = /(PointerCapture)$|Capture$/i, Cs = 0, Vi = Ho(!1), Hi = Ho(!0), Sc = 0;
var Ec = function(r, e, t, n) {
  var a;
  e[0] = 0;
  for (var i = 1; i < e.length; i++) {
    var s = e[i++], o = e[i] ? (e[0] |= s ? 1 : 2, t[e[i++]]) : e[++i];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++i]] = o : s === 6 ? n[1][e[++i]] += o + "" : s ? (a = r.apply(o, Ec(r, o, t, ["", null])), n.push(a), o[0] ? e[0] |= 2 : (e[i - 2] = 0, e[i] = a)) : n.push(o);
  }
  return n;
}, qo = /* @__PURE__ */ new Map();
function Gd(r) {
  var e = qo.get(this);
  return e || (e = /* @__PURE__ */ new Map(), qo.set(this, e)), (e = Ec(this, e.get(r) || (e.set(r, e = (function(t) {
    for (var n, a, i = 1, s = "", o = "", l = [0], d = function(m) {
      i === 1 && (m || (s = s.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, m, s) : i === 3 && (m || s) ? (l.push(3, m, s), i = 2) : i === 2 && s === "..." && m ? l.push(4, m, 0) : i === 2 && s && !m ? l.push(5, 0, !0, s) : i >= 5 && ((s || !m && i === 5) && (l.push(i, 0, s, a), i = 6), m && (l.push(i, m, 0, a), i = 6)), s = "";
    }, h = 0; h < t.length; h++) {
      h && (i === 1 && d(), d(h));
      for (var p = 0; p < t[h].length; p++) n = t[h][p], i === 1 ? n === "<" ? (d(), l = [l], i = 3) : s += n : i === 4 ? s === "--" && n === ">" ? (i = 1, s = "") : s = n + s[0] : o ? n === o ? o = "" : s += n : n === '"' || n === "'" ? o = n : n === ">" ? (d(), i = 1) : i && (n === "=" ? (i = 5, a = s, s = "") : n === "/" && (i < 5 || t[h][p + 1] === ">") ? (d(), i === 3 && (l = l[0]), i = l, (l = l[0]).push(2, 0, i), i = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (d(), i = 2) : s += n), i === 3 && s === "!--" && (i = 4, l = l[0]);
    }
    return d(), l;
  })(r)), e), arguments, [])).length > 1 ? e : e[0];
}
var Z = Gd.bind(tn), rn, ot, vi, Wo, Z0 = 0, zc = [], St = Le, Uo = St.__b, Go = St.__r, jo = St.diffed, Ko = St.__c, Zo = St.unmount, Xo = St.__;
function a0(r, e) {
  St.__h && St.__h(ot, r, Z0 || e), Z0 = 0;
  var t = ot.__H || (ot.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function et(r) {
  return Z0 = 1, Rc(Lc, r);
}
function Rc(r, e, t) {
  var n = a0(rn++, 2);
  if (n.t = r, !n.__c && (n.__ = [t ? t(e) : Lc(void 0, e), function(o) {
    var l = n.__N ? n.__N[0] : n.__[0], d = n.t(l, o);
    l !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = ot, !ot.__f)) {
    var a = function(o, l, d) {
      if (!n.__c.__H) return !0;
      var h = n.__c.__H.__.filter(function(m) {
        return m.__c;
      });
      if (h.every(function(m) {
        return !m.__N;
      })) return !i || i.call(this, o, l, d);
      var p = n.__c.props !== o;
      return h.some(function(m) {
        if (m.__N) {
          var v = m.__[0];
          m.__ = m.__N, m.__N = void 0, v !== m.__[0] && (p = !0);
        }
      }), i && i.call(this, o, l, d) || p;
    };
    ot.__f = !0;
    var i = ot.shouldComponentUpdate, s = ot.componentWillUpdate;
    ot.componentWillUpdate = function(o, l, d) {
      if (this.__e) {
        var h = i;
        i = void 0, a(o, l, d), i = h;
      }
      s && s.call(this, o, l, d);
    }, ot.shouldComponentUpdate = a;
  }
  return n.__N || n.__;
}
function nr(r, e) {
  var t = a0(rn++, 3);
  !St.__s && Is(t.__H, e) && (t.__ = r, t.u = e, ot.__H.__h.push(t));
}
function jd(r, e) {
  var t = a0(rn++, 4);
  !St.__s && Is(t.__H, e) && (t.__ = r, t.u = e, ot.__h.push(t));
}
function De(r) {
  return Z0 = 5, E0(function() {
    return { current: r };
  }, []);
}
function E0(r, e) {
  var t = a0(rn++, 7);
  return Is(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function Wt(r, e) {
  return Z0 = 8, E0(function() {
    return r;
  }, e);
}
function Oc(r) {
  var e = ot.context[r.__c], t = a0(rn++, 9);
  return t.c = r, e ? (t.__ == null && (t.__ = !0, e.sub(ot)), e.props.value) : r.__;
}
function Bc(r) {
  var e = a0(rn++, 10), t = et();
  return e.__ = r, ot.componentDidCatch || (ot.componentDidCatch = function(n, a) {
    e.__ && e.__(n, a), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function Dc() {
  var r = a0(rn++, 11);
  if (!r.__) {
    for (var e = ot.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function Kd() {
  for (var r; r = zc.shift(); ) {
    var e = r.__H;
    if (r.__P && e) try {
      e.__h.some(Ea), e.__h.some(Ui), e.__h = [];
    } catch (t) {
      e.__h = [], St.__e(t, r.__v);
    }
  }
}
St.__b = function(r) {
  ot = null, Uo && Uo(r);
}, St.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), Xo && Xo(r, e);
}, St.__r = function(r) {
  Go && Go(r), rn = 0;
  var e = (ot = r.__c).__H;
  e && (vi === ot ? (e.__h = [], ot.__h = [], e.__.some(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.some(Ea), e.__h.some(Ui), e.__h = [], rn = 0)), vi = ot;
}, St.diffed = function(r) {
  jo && jo(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (zc.push(e) !== 1 && Wo === St.requestAnimationFrame || ((Wo = St.requestAnimationFrame) || Zd)(Kd)), e.__H.__.some(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), vi = ot = null;
}, St.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.some(Ea), t.__h = t.__h.filter(function(n) {
        return !n.__ || Ui(n);
      });
    } catch (n) {
      e.some(function(a) {
        a.__h && (a.__h = []);
      }), e = [], St.__e(n, t.__v);
    }
  }), Ko && Ko(r, e);
}, St.unmount = function(r) {
  Zo && Zo(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.some(function(n) {
    try {
      Ea(n);
    } catch (a) {
      e = a;
    }
  }), t.__H = void 0, e && St.__e(e, t.__v));
};
var Jo = typeof requestAnimationFrame == "function";
function Zd(r) {
  var e, t = function() {
    clearTimeout(n), Jo && cancelAnimationFrame(e), setTimeout(r);
  }, n = setTimeout(t, 35);
  Jo && (e = requestAnimationFrame(t));
}
function Ea(r) {
  var e = ot, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), ot = e;
}
function Ui(r) {
  var e = ot;
  r.__c = r.__(), ot = e;
}
function Is(r, e) {
  return !r || r.length !== e.length || e.some(function(t, n) {
    return t !== r[n];
  });
}
function Lc(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function Fc(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function Gi(r, e) {
  for (var t in r) if (t !== "__source" && !(t in e)) return !0;
  for (var n in e) if (n !== "__source" && r[n] !== e[n]) return !0;
  return !1;
}
function Yo(r, e) {
  this.props = r, this.context = e;
}
function Xd(r, e) {
  function t(a) {
    var i = this.props.ref;
    return i != a.ref && i && (typeof i == "function" ? i(null) : i.current = null), e ? !e(this.props, a) || i != a.ref : Gi(this.props, a);
  }
  function n(a) {
    return this.shouldComponentUpdate = t, tn(r, a);
  }
  return n.displayName = "Memo(" + (r.displayName || r.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = r, n;
}
(Yo.prototype = new Yr()).isPureReactComponent = !0, Yo.prototype.shouldComponentUpdate = function(r, e) {
  return Gi(this.props, r) || Gi(this.state, e);
};
var Qo = Le.__b;
Le.__b = function(r) {
  r.type && r.type.__f && r.ref && (r.props.ref = r.ref, r.ref = null), Qo && Qo(r);
};
var Jd = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function Yd(r) {
  function e(t) {
    var n = Fc({}, t);
    return delete n.ref, r(n, t.ref || null);
  }
  return e.$$typeof = Jd, e.render = r, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", e;
}
var Qd = Le.__e;
Le.__e = function(r, e, t, n) {
  if (r.then) {
    for (var a, i = e; i = i.__; ) if ((a = i.__c) && a.__c) return e.__e == null && (e.__e = t.__e, e.__k = t.__k), a.__c(r, e);
  }
  Qd(r, e, t, n);
};
var el = Le.unmount;
function Pc(r, e, t) {
  return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), r.__c.__H = null), (r = Fc({}, r)).__c != null && (r.__c.__P === t && (r.__c.__P = e), r.__c.__e = !0, r.__c = null), r.__k = r.__k && r.__k.map(function(n) {
    return Pc(n, e, t);
  })), r;
}
function Vc(r, e, t) {
  return r && t && (r.__v = null, r.__k = r.__k && r.__k.map(function(n) {
    return Vc(n, e, t);
  }), r.__c && r.__c.__P === e && (r.__e && t.appendChild(r.__e), r.__c.__e = !0, r.__c.__P = t)), r;
}
function wi() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Hc(r) {
  var e = r.__ && r.__.__c;
  return e && e.__a && e.__a(r);
}
function ma() {
  this.i = null, this.l = null;
}
Le.unmount = function(r) {
  var e = r.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), el && el(r);
}, (wi.prototype = new Yr()).__c = function(r, e) {
  var t = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var a = Hc(n.__v), i = !1, s = function() {
    i || n.__z || (i = !0, t.__R = null, a ? a(l) : l());
  };
  t.__R = s;
  var o = t.__P;
  t.__P = null;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = Vc(d, d.__c.__P, d.__c.__O);
      }
      var h;
      for (n.setState({ __a: n.__b = null }); h = n.o.pop(); ) h.__P = o, h.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), r.then(s, s);
}, wi.prototype.componentWillUnmount = function() {
  this.o = [];
}, wi.prototype.render = function(r, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Pc(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var a = e.__a && tn(In, null, r.fallback);
  return a && (a.__u &= -33), [tn(In, null, e.__a ? null : r.children), a];
};
var tl = function(r, e, t) {
  if (++t[1] === t[0] && r.l.delete(e), r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.l.size)) for (t = r.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    r.i = t = t[2];
  }
};
function eh(r) {
  return this.getChildContext = function() {
    return r.context;
  }, r.children;
}
function th(r) {
  var e = this, t = r.h;
  if (e.componentWillUnmount = function() {
    Qr(null, e.v), e.v = null, e.h = null;
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
  Qr(tn(eh, { context: e.context }, r.__v), e.v);
}
function qc(r, e) {
  var t = tn(th, { __v: r, h: e });
  return t.containerInfo = e, t;
}
(ma.prototype = new Yr()).__a = function(r) {
  var e = this, t = Hc(e.__v), n = e.l.get(r);
  return n[0]++, function(a) {
    var i = function() {
      e.props.revealOrder ? (n.push(a), tl(e, r, n)) : a();
    };
    t ? t(i) : i();
  };
}, ma.prototype.render = function(r) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = $0(r.children);
  r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; ) this.l.set(e[t], this.i = [1, 0, this.i]);
  return r.children;
}, ma.prototype.componentDidUpdate = ma.prototype.componentDidMount = function() {
  var r = this;
  this.l.forEach(function(e, t) {
    tl(r, t, e);
  });
};
var rh = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, nh = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ah = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, ih = /[A-Z0-9]/g, sh = typeof document < "u", oh = function(r) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(r);
};
Yr.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(r) {
  Object.defineProperty(Yr.prototype, r, { configurable: !0, get: function() {
    return this["UNSAFE_" + r];
  }, set: function(e) {
    Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e });
  } });
});
var rl = Le.event;
Le.event = function(r) {
  return rl && (r = rl(r)), r.persist = function() {
  }, r.isPropagationStopped = function() {
    return this.cancelBubble;
  }, r.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, r.nativeEvent = r;
};
var lh = { configurable: !0, get: function() {
  return this.class;
} }, nl = Le.vnode;
Le.vnode = function(r) {
  typeof r.type == "string" && (function(e) {
    var t = e.props, n = e.type, a = {}, i = n.indexOf("-") == -1;
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || sh && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "translate" && o === "no" ? o = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || oh(t.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : ah.test(s) && (s = l) : l = s = "oninput" : i && nh.test(s) ? s = s.replace(ih, "-$&").toLowerCase() : o === null && (o = void 0), l === "oninput" && a[s = l] && (s = "oninputCapture"), a[s] = o;
      }
    }
    n == "select" && (a.multiple && Array.isArray(a.value) && (a.value = $0(t.children).forEach(function(d) {
      d.props.selected = a.value.indexOf(d.props.value) != -1;
    })), a.defaultValue != null && (a.value = $0(t.children).forEach(function(d) {
      d.props.selected = a.multiple ? a.defaultValue.indexOf(d.props.value) != -1 : a.defaultValue == d.props.value;
    }))), t.class && !t.className ? (a.class = t.class, Object.defineProperty(a, "className", lh)) : t.className && (a.class = a.className = t.className), e.props = a;
  })(r), r.$$typeof = rh, nl && nl(r);
};
var al = Le.__r;
Le.__r = function(r) {
  al && al(r), r.__c;
};
var il = Le.diffed;
Le.diffed = function(r) {
  il && il(r);
  var e = r.props, t = r.__e;
  t != null && r.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
function Dr(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function Wc(r, e) {
  let t;
  const n = () => {
    if (t)
      return t;
    const a = indexedDB.open(r);
    return a.onupgradeneeded = () => a.result.createObjectStore(e), t = Dr(a), t.then((i) => {
      i.onclose = () => t = void 0;
    }, () => {
    }), t;
  };
  return (a, i) => n().then((s) => i(s.transaction(e, a).objectStore(e)));
}
let xi;
function i0() {
  return xi || (xi = Wc("keyval-store", "keyval")), xi;
}
function Zn(r, e = i0()) {
  return e("readonly", (t) => Dr(t.get(r)));
}
function sl(r, e, t = i0()) {
  return t("readwrite", (n) => (n.put(e, r), Dr(n.transaction)));
}
function ga(r, e = i0()) {
  return e("readwrite", (t) => (t.delete(r), Dr(t.transaction)));
}
function R5(r = i0()) {
  return r("readwrite", (e) => (e.clear(), Dr(e.transaction)));
}
function Ns(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Dr(r.transaction);
}
function ch(r = i0()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return Dr(e.getAllKeys());
    const t = [];
    return Ns(e, (n) => t.push(n.key)).then(() => t);
  });
}
function O5(r = i0()) {
  return r("readonly", (e) => {
    if (e.getAll)
      return Dr(e.getAll());
    const t = [];
    return Ns(e, (n) => t.push(n.value)).then(() => t);
  });
}
function B5(r = i0()) {
  return r("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        Dr(e.getAllKeys()),
        Dr(e.getAll())
      ]).then(([n, a]) => n.map((i, s) => [i, a[s]]));
    const t = [];
    return Ns(e, (n) => t.push([n.key, n.value])).then(() => t);
  });
}
var za = { exports: {} }, uh = za.exports, ol;
function dh() {
  return ol || (ol = 1, (function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(uh, (function() {
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
  })(za)), za.exports;
}
var hh = dh();
const ph = /* @__PURE__ */ vc(hh), fh = /* @__PURE__ */ new Set([
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
]), mh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Color",
  "Alpha",
  "dontSearch",
  "Script",
  "Widgets",
  "Value"
]), gh = /* @__PURE__ */ new Set([
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
function ll(r, e, t, n) {
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
function cl(r, e, t, n, a, i, s) {
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
function bh(r) {
  let e = 0;
  for (const t of r.Cards) {
    const n = parseInt(t.Id.replace("bc-card-", ""), 10);
    isNaN(n) || (e = Math.max(e, n));
  }
  return `bc-card-${e + 1}`;
}
function vh(r) {
  let e = 0;
  for (const t of r.Cards)
    for (const n of t.Widgets) {
      const a = parseInt(n.Id.replace("bc-widget-", ""), 10);
      isNaN(a) || (e = Math.max(e, a));
    }
  return `bc-widget-${e + 1}`;
}
function yi(r, e) {
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
const wh = {
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
var An, k0, $n, hr, t0, na, F, ji, Ki, it, Uc, Gc, jc, Kc, Zc, Xc, Jc, Yc, Qc, eu, tu, ru, nu, au, iu, su, ou, lu, cu, uu, du, Ra, Zi, hu, pu, fu, mu, gu, bu, vu, wu, xu, q0;
class xh {
  constructor() {
    bt(this, F);
    bt(this, An);
    bt(this, k0);
    bt(this, $n, null);
    bt(this, hr, null);
    bt(this, t0, null);
    bt(this, na, null);
    ze(this, An, localStorage.getItem("bc-mcp-url") ?? ""), ze(this, k0, localStorage.getItem("bc-mcp-token") ?? "");
  }
  /**** setContext — called by DeckView after every render to keep state current ****/
  setContext(e) {
    var t, n;
    if (ze(this, $n, e), e != null && R(this, F, ji)) {
      const a = ((t = e.getDeck().Cards[e.getCardIndex()]) == null ? void 0 : t.Name) ?? null;
      a !== R(this, na) && (ze(this, na, a), (n = R(this, hr)) == null || n.send(JSON.stringify({ type: "notify", event: "card_changed", cardName: a })));
    }
  }
  /**** configure — applies new settings and reconnects (persistence handled by caller) ****/
  configure(e, t) {
    ze(this, An, e), ze(this, k0, t), this.disconnect(), e !== "" && this.connect();
  }
  /**** connect — opens the WebSocket connection if a URL is configured ****/
  connect() {
    R(this, An) !== "" && le(this, F, Ki).call(this);
  }
  /**** disconnect — closes the connection and stops auto-reconnect ****/
  disconnect() {
    R(this, t0) != null && (clearTimeout(R(this, t0)), ze(this, t0, null)), R(this, hr) != null && (R(this, hr).onclose = null, R(this, hr).close(), ze(this, hr, null));
  }
  /**** connectionStatus — returns a snapshot suitable for the status tool ****/
  get connectionStatus() {
    return { connected: R(this, F, ji), url: R(this, An) };
  }
}
An = new WeakMap(), k0 = new WeakMap(), $n = new WeakMap(), hr = new WeakMap(), t0 = new WeakMap(), na = new WeakMap(), F = new WeakSet(), ji = function() {
  return R(this, hr) != null && R(this, hr).readyState === WebSocket.OPEN;
}, /**** #connect — internal: establishes the WebSocket and wires handlers ****/
Ki = function() {
  const e = new WebSocket(R(this, An));
  e.onopen = () => {
    var a, i, s;
    const t = (a = R(this, $n)) == null ? void 0 : a.getDeck(), n = ((i = R(this, $n)) == null ? void 0 : i.getCardIndex()) ?? 0;
    e.send(JSON.stringify({
      type: "hello",
      accessToken: R(this, k0),
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
      a = await le(this, F, Uc).call(this, n.method, n.params ?? {});
    } catch (s) {
      i = s.message;
    }
    e.send(JSON.stringify({ id: n.id, result: a, error: i }));
  }, e.onclose = () => {
    ze(this, hr, null), ze(this, t0, setTimeout(() => le(this, F, Ki).call(this), 3e3));
  }, e.onerror = () => {
    e.close();
  }, ze(this, hr, e);
}, it = function() {
  if (R(this, $n) == null)
    throw new Error("no deck loaded");
  return R(this, $n);
}, Uc = async function(e, t) {
  switch (!0) {
    case e === "deck_get":
      return le(this, F, Gc).call(this);
    case e === "deck_patch":
      return le(this, F, jc).call(this, t);
    case e === "deck_save":
      return le(this, F, Kc).call(this);
    case e === "list_cards":
      return le(this, F, Zc).call(this);
    case e === "list_widgets":
      return le(this, F, Xc).call(this, t);
    case e === "find":
      return le(this, F, Jc).call(this, t);
    case e === "card_get":
      return le(this, F, Yc).call(this, t);
    case e === "card_patch":
      return le(this, F, Qc).call(this, t);
    case e === "card_add":
      return le(this, F, eu).call(this, t);
    case e === "card_delete":
      return le(this, F, tu).call(this, t);
    case e === "card_reorder":
      return le(this, F, ru).call(this, t);
    case e === "widget_get":
      return le(this, F, nu).call(this, t);
    case e === "widget_patch":
      return le(this, F, au).call(this, t);
    case e === "widget_add":
      return le(this, F, iu).call(this, t);
    case e === "widget_delete":
      return le(this, F, su).call(this, t);
    case e === "widget_transfer":
      return le(this, F, ou).call(this, t);
    case e === "widget_get_rect":
      return le(this, F, lu).call(this, t);
    case e === "widget_set_rect":
      return le(this, F, cu).call(this, t);
    case e === "script_get":
      return le(this, F, uu).call(this, t);
    case e === "script_set":
      return le(this, F, du).call(this, t);
    case e === "extras_get":
      return le(this, F, hu).call(this, t);
    case e === "extras_set":
      return le(this, F, pu).call(this, t);
    case e === "extras_delete":
      return le(this, F, fu).call(this, t);
    case e === "live_eval":
      return le(this, F, mu).call(this, t);
    case e === "live_send":
      return le(this, F, gu).call(this, t);
    case e === "live_navigate":
      return le(this, F, bu).call(this, t);
    case e === "live_screenshot":
      return le(this, F, vu).call(this);
    default:
      throw new Error(`unknown method: ${e}`);
  }
}, //--------------------------------------------------------------------------//
//                              deck handlers                                 //
//--------------------------------------------------------------------------//
Gc = function() {
  const e = R(this, F, it).getDeck();
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
}, jc = function(e) {
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
  return R(this, F, it).mutateDeck((a) => {
    for (const i of n)
      i in t && (a[i] = t[i]);
  }), null;
}, Kc = async function() {
  return await R(this, F, it).saveDeck(), null;
}, //--------------------------------------------------------------------------//
//                          navigation handlers                               //
//--------------------------------------------------------------------------//
Zc = function() {
  return R(this, F, it).getDeck().Cards.map((e, t) => ({
    id: e.Id,
    name: e.Name,
    index: t,
    widget_count: e.Widgets.length,
    has_script: e.Script.trim() !== ""
  }));
}, Xc = function(e) {
  const t = R(this, F, it).getDeck(), n = e.card_id, a = t.Cards.find((o) => o.Id === n);
  if (a == null)
    throw new Error(`card not found: ${n}`);
  const i = t.CardWidth ?? 600, s = t.CardHeight ?? 450;
  return a.Widgets.map((o) => {
    const l = ll(
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
}, Jc = function(e) {
  const t = R(this, F, it).getDeck(), n = e.query ?? {}, a = n.scope ?? "all", i = [], s = n.namePattern ? new RegExp(n.namePattern, "i") : null, o = n.scriptContains ? new RegExp(n.scriptContains, "i") : null, l = n.valueContains, d = n.widgetType, h = (m) => (!s || s.test(m.Name)) && (!o || o.test(m.Script)), p = (m) => {
    if (d && m.Type !== d)
      return !1;
    const v = m.Value ?? "";
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
        if (p(v)) {
          const y = v.Value ?? "";
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
Yc = function(e) {
  const t = le(this, F, wu).call(this, e.card_id);
  return {
    Name: t.Name,
    Color: t.Color ?? null,
    Alpha: t.Alpha ?? 1,
    dontSearch: t.dontSearch,
    Script: t.Script
  };
}, Qc = function(e) {
  const t = e.card_id, n = e.props ?? {};
  return R(this, F, it).mutateDeck((a) => {
    const i = a.Cards.find((s) => s.Id === t);
    if (i == null)
      throw new Error(`card not found: ${t}`);
    for (const s of ["Name", "Color", "Alpha", "dontSearch", "Script"])
      s in n && (i[s] = n[s]);
  }), null;
}, eu = function(e) {
  const t = e.props ?? {}, n = e.index;
  let a = "";
  return R(this, F, it).mutateDeck((i) => {
    a = bh(i);
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
}, tu = function(e) {
  const t = e.card_id;
  return R(this, F, it).mutateDeck((n) => {
    const a = n.Cards.findIndex((i) => i.Id === t);
    if (a < 0)
      throw new Error(`card not found: ${t}`);
    n.Cards.splice(a, 1);
  }), null;
}, ru = function(e) {
  const t = e.card_id, n = e.new_index;
  return R(this, F, it).mutateDeck((a) => {
    const i = a.Cards.findIndex((o) => o.Id === t);
    if (i < 0)
      throw new Error(`card not found: ${t}`);
    const [s] = a.Cards.splice(i, 1);
    a.Cards.splice(n, 0, s);
  }), null;
}, //--------------------------------------------------------------------------//
//                             widget handlers                                //
//--------------------------------------------------------------------------//
nu = function(e) {
  const { Widget: t } = le(this, F, xu).call(this, e.card_id, e.widget_id);
  return { ...t };
}, au = function(e) {
  const t = e.props ?? {};
  return R(this, F, it).mutateDeck((n) => {
    const { Widget: a } = le(this, F, q0).call(this, n, e.card_id, e.widget_id);
    for (const [i, s] of Object.entries(t))
      i !== "Type" && (a[i] = s);
  }), null;
}, iu = function(e) {
  const t = e.card_id, n = e.type, a = e.props ?? {}, i = e.rect;
  let s = "";
  return R(this, F, it).mutateDeck((o) => {
    const l = o.Cards.find(($) => $.Id === t);
    if (l == null)
      throw new Error(`card not found: ${t}`);
    s = vh(o);
    const d = o.CardWidth ?? 600, h = o.CardHeight ?? 450, p = ["left-width", "top-height"], m = i ?? { x: d / 4, y: h / 4, width: d / 2, height: h / 2 }, v = cl(
      m.x,
      m.y,
      m.width,
      m.height,
      p,
      d,
      h
    ), y = l.Widgets.reduce(($, M) => Math.max($, M.Number ?? 0), 0), A = {
      ...wh[n] ?? {},
      ...a,
      Id: s,
      Name: a.Name ?? `${n} ${y + 1}`,
      Number: y + 1,
      Type: n,
      zIndex: y + 1,
      Anchors: p,
      Offsets: v,
      visible: a.visible ?? !0,
      Script: a.Script ?? ""
    };
    l.Widgets.push(A);
  }), s;
}, su = function(e) {
  const t = e.card_id, n = e.widget_id;
  return R(this, F, it).mutateDeck((a) => {
    const i = a.Cards.find((o) => o.Id === t);
    if (i == null)
      throw new Error(`card not found: ${t}`);
    const s = i.Widgets.findIndex((o) => o.Id === n);
    if (s < 0)
      throw new Error(`widget not found: ${n}`);
    i.Widgets.splice(s, 1);
  }), null;
}, ou = function(e) {
  return R(this, F, it).mutateDeck((t) => {
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
lu = function(e) {
  const t = R(this, F, it).getDeck(), { Widget: n } = le(this, F, q0).call(this, t, e.card_id, e.widget_id);
  return { ...ll(
    n.Anchors,
    n.Offsets,
    t.CardWidth ?? 600,
    t.CardHeight ?? 450
  ), anchors: n.Anchors };
}, cu = function(e) {
  const t = e.rect, n = e.anchors ?? ["left-width", "top-height"];
  return R(this, F, it).mutateDeck((a) => {
    const { Widget: i } = le(this, F, q0).call(this, a, e.card_id, e.widget_id), s = a.CardWidth ?? 600, o = a.CardHeight ?? 450;
    i.Anchors = n, i.Offsets = cl(t.x, t.y, t.width, t.height, n, s, o);
  }), null;
}, //--------------------------------------------------------------------------//
//                            scripting handlers                              //
//--------------------------------------------------------------------------//
uu = function(e) {
  const t = yi(e.target, R(this, F, it).getDeck());
  if (t == null)
    throw new Error(`target not found: ${e.target}`);
  return t === "deck" ? R(this, F, it).getDeck().Script : "Widget" in t ? t.Widget.Script : t.Card.Script;
}, du = function(e) {
  const t = e.target, n = e.script;
  return R(this, F, it).mutateDeck((a) => {
    const i = yi(t, a);
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
Ra = function(e, t) {
  const n = yi(e, t);
  if (n == null)
    throw new Error(`target not found: ${e}`);
  return n === "deck" ? t : "Widget" in n ? n.Widget : n.Card;
}, Zi = function(e) {
  return e === "deck" ? fh : e.includes("/") ? gh : mh;
}, hu = function(e) {
  const t = e.target, n = le(this, F, Ra).call(this, t, R(this, F, it).getDeck()), a = le(this, F, Zi).call(this, t), i = {};
  for (const [s, o] of Object.entries(n))
    a.has(s) || (i[s] = o);
  return i;
}, pu = function(e) {
  const t = e.target, n = e.key;
  if (le(this, F, Zi).call(this, t).has(n))
    throw new Error(`"${n}" is a reserved schema key`);
  return R(this, F, it).mutateDeck((a) => {
    le(this, F, Ra).call(this, t, a)[n] = e.value;
  }), null;
}, fu = function(e) {
  const t = e.target, n = e.key;
  return R(this, F, it).mutateDeck((a) => {
    delete le(this, F, Ra).call(this, t, a)[n];
  }), null;
}, mu = async function(e) {
  return R(this, F, it).evalInContext(e.expression);
}, gu = async function(e) {
  const t = e.target, n = e.message, a = e.args ?? [], i = a.length > 0 ? ", " + a.map((s) => JSON.stringify(s)).join(", ") : "";
  return R(this, F, it).evalInContext(
    `send(${JSON.stringify(t)}, ${JSON.stringify(n)}${i})`
  );
}, bu = async function(e) {
  return R(this, F, it).navigate(e.card), null;
}, vu = async function() {
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
wu = function(e) {
  const t = R(this, F, it).getDeck().Cards.find((n) => n.Id === e);
  if (t == null)
    throw new Error(`card not found: ${e}`);
  return t;
}, xu = function(e, t) {
  return le(this, F, q0).call(this, R(this, F, it).getDeck(), e, t);
}, q0 = function(e, t, n) {
  const a = e.Cards.find((s) => s.Id === t);
  if (a == null)
    throw new Error(`card not found: ${t}`);
  const i = a.Widgets.find((s) => s.Id === n);
  if (i == null)
    throw new Error(`widget not found: ${n}`);
  return { Card: a, Widget: i };
};
function Ms() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var s0 = Ms();
function yu(r) {
  s0 = r;
}
var Qn = { exec: () => null };
function g0(r) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), a = e[n];
    return a || (a = r(n), e[n] = a), a;
  };
}
function We(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (a, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(Dt.caret, "$1"), t = t.replace(a, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var yh = ((r = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + r);
  } catch {
    return !1;
  }
})(), Dt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: g0((r) => new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: g0((r) => new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: g0((r) => new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)), headingBeginRegex: g0((r) => new RegExp(`^ {0,${r}}#`)), htmlBeginRegex: g0((r) => new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: g0((r) => new RegExp(`^ {0,${r}}>`)) }, kh = /^(?:[ \t]*(?:\n|$))+/, Sh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, _h = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, la = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Ch = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Es = / {0,3}(?:[*+-]|\d{1,9}[.)])/, ku = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Su = We(ku).replace(/bull/g, Es).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), Ah = We(ku).replace(/bull/g, Es).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), zs = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, $h = /^[^\n]+/, Rs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Th = We(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Rs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Ih = We(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Es).getRegex(), ti = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Os = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Nh = We("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Os).replace("tag", ti).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), _u = We(zs).replace("hr", la).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ti).getRegex(), Mh = We(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", _u).getRegex(), Bs = { blockquote: Mh, code: Sh, def: Th, fences: _h, heading: Ch, hr: la, html: Nh, lheading: Su, list: Ih, newline: kh, paragraph: _u, table: Qn, text: $h }, ul = We("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", la).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ti).getRegex(), Eh = { ...Bs, lheading: Ah, table: ul, paragraph: We(zs).replace("hr", la).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", ul).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", ti).getRegex() }, zh = { ...Bs, html: We(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Os).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Qn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: We(zs).replace("hr", la).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Su).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Rh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Oh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Cu = /^( {2,}|\\)\n(?!\s*$)/, Bh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, z0 = /[\p{P}\p{S}]/u, ri = /[\s\p{P}\p{S}]/u, Ds = /[^\s\p{P}\p{S}]/u, Dh = We(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ri).getRegex(), Au = /(?!~)[\p{P}\p{S}]/u, Lh = /(?!~)[\s\p{P}\p{S}]/u, Fh = /(?:[^\s\p{P}\p{S}]|~)/u, Ph = We(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", yh ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), $u = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Vh = We($u, "u").replace(/punct/g, z0).getRegex(), Hh = We($u, "u").replace(/punct/g, Au).getRegex(), Tu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", qh = We(Tu, "gu").replace(/notPunctSpace/g, Ds).replace(/punctSpace/g, ri).replace(/punct/g, z0).getRegex(), Wh = We(Tu, "gu").replace(/notPunctSpace/g, Fh).replace(/punctSpace/g, Lh).replace(/punct/g, Au).getRegex(), Uh = We("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Ds).replace(/punctSpace/g, ri).replace(/punct/g, z0).getRegex(), Gh = We(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, z0).getRegex(), jh = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", Kh = We(jh, "gu").replace(/notPunctSpace/g, Ds).replace(/punctSpace/g, ri).replace(/punct/g, z0).getRegex(), Zh = We(/\\(punct)/, "gu").replace(/punct/g, z0).getRegex(), Xh = We(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), Jh = We(Os).replace("(?:-->|$)", "-->").getRegex(), Yh = We("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Jh).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Va = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, Qh = We(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", Va).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Iu = We(/^!?\[(label)\]\[(ref)\]/).replace("label", Va).replace("ref", Rs).getRegex(), Nu = We(/^!?\[(ref)\](?:\[\])?/).replace("ref", Rs).getRegex(), ep = We("reflink|nolink(?!\\()", "g").replace("reflink", Iu).replace("nolink", Nu).getRegex(), dl = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, Ls = { _backpedal: Qn, anyPunctuation: Zh, autolink: Xh, blockSkip: Ph, br: Cu, code: Oh, del: Qn, delLDelim: Qn, delRDelim: Qn, emStrongLDelim: Vh, emStrongRDelimAst: qh, emStrongRDelimUnd: Uh, escape: Rh, link: Qh, nolink: Nu, punctuation: Dh, reflink: Iu, reflinkSearch: ep, tag: Yh, text: Bh, url: Qn }, tp = { ...Ls, link: We(/^!?\[(label)\]\((.*?)\)/).replace("label", Va).getRegex(), reflink: We(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Va).getRegex() }, Xi = { ...Ls, emStrongRDelimAst: Wh, emStrongLDelim: Hh, delLDelim: Gh, delRDelim: Kh, url: We(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", dl).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: We(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", dl).getRegex() }, rp = { ...Xi, br: We(Cu).replace("{2,}", "*").getRegex(), text: We(Xi.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, ba = { normal: Bs, gfm: Eh, pedantic: zh }, P0 = { normal: Ls, gfm: Xi, breaks: rp, pedantic: tp }, np = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, hl = (r) => np[r];
function Nr(r, e) {
  if (e) {
    if (Dt.escapeTest.test(r)) return r.replace(Dt.escapeReplace, hl);
  } else if (Dt.escapeTestNoEncode.test(r)) return r.replace(Dt.escapeReplaceNoEncode, hl);
  return r;
}
function pl(r) {
  try {
    r = encodeURI(r).replace(Dt.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function fl(r, e) {
  var i;
  let t = r.replace(Dt.findPipe, (s, o, l) => {
    let d = !1, h = o;
    for (; --h >= 0 && l[h] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = t.split(Dt.splitPipe), a = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((i = n.at(-1)) != null && i.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; a < n.length; a++) n[a] = n[a].trim().replace(Dt.slashPipe, "|");
  return n;
}
function yn(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let a = 0;
  for (; a < n && r.charAt(n - a - 1) === e; )
    a++;
  return r.slice(0, n - a);
}
function ml(r) {
  let e = r.split(`
`), t = e.length - 1;
  for (; t >= 0 && Dt.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? r : e.slice(0, t + 1).join(`
`);
}
function ap(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function ip(r, e = 0) {
  let t = e, n = "";
  for (let a of r) if (a === "	") {
    let i = 4 - t % 4;
    n += " ".repeat(i), t += i;
  } else n += a, t++;
  return n;
}
function gl(r, e, t, n, a) {
  let i = e.href, s = e.title || null, o = r[1].replace(a.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, l;
}
function sp(r, e, t) {
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
var Ha = class {
  constructor(r) {
    at(this, "options");
    at(this, "rules");
    at(this, "lexer");
    this.options = r || s0;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = this.options.pedantic ? e[0] : ml(e[0]), n = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: n };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = sp(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = yn(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: yn(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: yn(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = yn(e[0], `
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
        let p = this.lexer.state.top;
        if (this.lexer.state.top = !0, this.lexer.blockTokens(h, i, !0), this.lexer.state.top = p, t.length === 0) break;
        let m = i.at(-1);
        if ((m == null ? void 0 : m.type) === "code") break;
        if ((m == null ? void 0 : m.type) === "blockquote") {
          let v = m, y = v.raw + `
` + t.join(`
`), A = this.blockquote(y);
          i[i.length - 1] = A, n = n.substring(0, n.length - v.raw.length) + A.raw, a = a.substring(0, a.length - v.text.length) + A.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          let v = m, y = v.raw + `
` + t.join(`
`), A = this.list(y);
          i[i.length - 1] = A, n = n.substring(0, n.length - m.raw.length) + A.raw, a = a.substring(0, a.length - v.raw.length) + A.raw, t = y.substring(i.at(-1).raw.length).split(`
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
        let p = ip(e[2].split(`
`, 1)[0], e[1].length), m = r.split(`
`, 1)[0], v = !p.trim(), y = 0;
        if (this.options.pedantic ? (y = 2, h = p.trimStart()) : v ? y = e[1].length + 1 : (y = p.search(this.rules.other.nonSpaceChar), y = y > 4 ? 1 : y, h = p.slice(y), y += e[1].length), v && this.rules.other.blankLine.test(m) && (d += m + `
`, r = r.substring(m.length + 1), l = !0), !l) {
          let A = this.rules.other.nextBulletRegex(y), $ = this.rules.other.hrRegex(y), M = this.rules.other.fencesBeginRegex(y), z = this.rules.other.headingBeginRegex(y), q = this.rules.other.htmlBeginRegex(y), G = this.rules.other.blockquoteBeginRegex(y);
          for (; r; ) {
            let Y = r.split(`
`, 1)[0], N;
            if (m = Y, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), N = m) : N = m.replace(this.rules.other.tabCharGlobal, "    "), M.test(m) || z.test(m) || q.test(m) || G.test(m) || A.test(m) || $.test(m)) break;
            if (N.search(this.rules.other.nonSpaceChar) >= y || !m.trim()) h += `
` + N.slice(y);
            else {
              if (v || p.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || M.test(p) || z.test(p) || $.test(p)) break;
              h += `
` + m;
            }
            v = !m.trim(), d += Y + `
`, r = r.substring(Y.length + 1), p = N.slice(y);
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
          for (let p = this.lexer.inlineQueue.length - 1; p >= 0; p--) if (this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)) {
            this.lexer.inlineQueue[p].src = this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask, "");
            break;
          }
          let h = this.rules.other.listTaskCheckbox.exec(l.raw);
          if (h) {
            let p = { type: "checkbox", raw: h[0] + " ", checked: h[0] !== "[ ]" };
            l.checked = p.checked, a.loose ? l.tokens[0] && ["paragraph", "text"].includes(l.tokens[0].type) && "tokens" in l.tokens[0] && l.tokens[0].tokens ? (l.tokens[0].raw = p.raw + l.tokens[0].raw, l.tokens[0].text = p.raw + l.tokens[0].text, l.tokens[0].tokens.unshift(p)) : l.tokens.unshift({ type: "paragraph", raw: p.raw, text: p.raw, tokens: [p] }) : l.tokens.unshift(p);
          }
        } else l.task && (l.task = !1);
        if (!a.loose) {
          let h = l.tokens.filter((m) => m.type === "space"), p = h.length > 0 && h.some((m) => this.rules.other.anyLine.test(m.raw));
          a.loose = p;
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
      let t = ml(e[0]);
      return { type: "html", block: !0, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", a = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: yn(e[0], `
`), href: n, title: a };
    }
  }
  table(r) {
    var s;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = fl(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), a = (s = e[3]) != null && s.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], i = { type: "table", raw: yn(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? i.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? i.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? i.align.push("left") : i.align.push(null);
      for (let o = 0; o < t.length; o++) i.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: i.align[o] });
      for (let o of a) i.rows.push(fl(o, i.header.length).map((l, d) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: i.align[d] })));
      return i;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: yn(e[0], `
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
        let i = yn(t.slice(0, -1), "\\");
        if ((t.length - i.length) % 2 === 0) return;
      } else {
        let i = ap(e[2], "()");
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
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), gl(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: a && a.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
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
      return gl(t, a, t[0], this.lexer, this.rules);
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
        let h = [...n[0]][0].length, p = r.slice(0, a + n.index + h + s);
        if (Math.min(a, s) % 2) {
          let v = p.slice(1, -1);
          return { type: "em", raw: p, text: v, tokens: this.lexer.inlineTokens(v) };
        }
        let m = p.slice(2, -2);
        return { type: "strong", raw: p, text: m, tokens: this.lexer.inlineTokens(m) };
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
        let d = [...n[0]][0].length, h = r.slice(0, a + n.index + d + s), p = h.slice(a, -a);
        return { type: "del", raw: h, text: p, tokens: this.lexer.inlineTokens(p) };
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
}, xr = class Ji {
  constructor(e) {
    at(this, "tokens");
    at(this, "options");
    at(this, "state");
    at(this, "inlineQueue");
    at(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || s0, this.options.tokenizer = this.options.tokenizer || new Ha(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: Dt, block: ba.normal, inline: P0.normal };
    this.options.pedantic ? (t.block = ba.pedantic, t.inline = P0.pedantic) : this.options.gfm && (t.block = ba.gfm, this.options.breaks ? t.inline = P0.breaks : t.inline = P0.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: ba, inline: P0 };
  }
  static lex(e, t) {
    return new Ji(t).lex(e);
  }
  static lexInline(e, t) {
    return new Ji(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(Dt.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var i, s, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Dt.tabCharGlobal, "    ").replace(Dt.spaceLine, ""));
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
        let h = 1 / 0, p = e.slice(1), m;
        this.options.extensions.startBlock.forEach((v) => {
          m = v.call({ lexer: this }, p), typeof m == "number" && m >= 0 && (h = Math.min(h, m));
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
    var d, h, p, m, v;
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
      if ((m = (p = this.options.extensions) == null ? void 0 : p.inline) != null && m.some(($) => (y = $.call({ lexer: this }, e, t)) ? (e = e.substring(y.raw.length), t.push(y), !0) : !1)) continue;
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
        let $ = t.at(-1);
        y.type === "text" && ($ == null ? void 0 : $.type) === "text" ? ($.raw += y.raw, $.text += y.text) : t.push(y);
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
      let A = e;
      if ((v = this.options.extensions) != null && v.startInline) {
        let $ = 1 / 0, M = e.slice(1), z;
        this.options.extensions.startInline.forEach((q) => {
          z = q.call({ lexer: this }, M), typeof z == "number" && z >= 0 && ($ = Math.min($, z));
        }), $ < 1 / 0 && $ >= 0 && (A = e.substring(0, $ + 1));
      }
      if (y = this.tokenizer.inlineText(A)) {
        e = e.substring(y.raw.length), y.raw.slice(-1) !== "_" && (o = y.raw.slice(-1)), s = !0;
        let $ = t.at(-1);
        ($ == null ? void 0 : $.type) === "text" ? ($.raw += y.raw, $.text += y.text) : t.push(y);
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
}, qa = class {
  constructor(r) {
    at(this, "options");
    at(this, "parser");
    this.options = r || s0;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var i;
    let n = (i = (e || "").match(Dt.notSpaceStart)) == null ? void 0 : i[0], a = r.replace(Dt.endingNewline, "") + `
`;
    return n ? '<pre><code class="language-' + Nr(n) + '">' + (t ? a : Nr(a, !0)) + `</code></pre>
` : "<pre><code>" + (t ? a : Nr(a, !0)) + `</code></pre>
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
    return `<code>${Nr(r, !0)}</code>`;
  }
  br(r) {
    return "<br>";
  }
  del({ tokens: r }) {
    return `<del>${this.parser.parseInline(r)}</del>`;
  }
  link({ href: r, title: e, tokens: t }) {
    let n = this.parser.parseInline(t), a = pl(r);
    if (a === null) return n;
    r = a;
    let i = '<a href="' + r + '"';
    return e && (i += ' title="' + Nr(e) + '"'), i += ">" + n + "</a>", i;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let a = pl(r);
    if (a === null) return Nr(t);
    r = a;
    let i = `<img src="${r}" alt="${Nr(t)}"`;
    return e && (i += ` title="${Nr(e)}"`), i += ">", i;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Nr(r.text);
  }
}, Fs = class {
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
}, yr = class Yi {
  constructor(e) {
    at(this, "options");
    at(this, "renderer");
    at(this, "textRenderer");
    this.options = e || s0, this.options.renderer = this.options.renderer || new qa(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Fs();
  }
  static parse(e, t) {
    return new Yi(t).parse(e);
  }
  static parseInline(e, t) {
    return new Yi(t).parseInline(e);
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
}, Na, W0 = (Na = class {
  constructor(r) {
    at(this, "options");
    at(this, "block");
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
    return r ? xr.lex : xr.lexInline;
  }
  provideParser(r = this.block) {
    return r ? yr.parse : yr.parseInline;
  }
}, at(Na, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), at(Na, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), Na), Mu = class {
  constructor(...r) {
    at(this, "defaults", Ms());
    at(this, "options", this.setOptions);
    at(this, "parse", this.parseMarkdown(!0));
    at(this, "parseInline", this.parseMarkdown(!1));
    at(this, "Parser", yr);
    at(this, "Renderer", qa);
    at(this, "TextRenderer", Fs);
    at(this, "Lexer", xr);
    at(this, "Tokenizer", Ha);
    at(this, "Hooks", W0);
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
        let a = this.defaults.renderer || new qa(this.defaults);
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
        let a = this.defaults.tokenizer || new Ha(this.defaults);
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
        let a = this.defaults.hooks || new W0();
        for (let i in t.hooks) {
          if (!(i in a)) throw new Error(`hook '${i}' does not exist`);
          if (["options", "block"].includes(i)) continue;
          let s = i, o = t.hooks[s], l = a[s];
          W0.passThroughHooks.has(i) ? a[s] = (d) => {
            if (this.defaults.async && W0.passThroughHooksRespectAsync.has(i)) return (async () => {
              let p = await o.call(a, d);
              return l.call(a, p);
            })();
            let h = o.call(a, d);
            return l.call(a, h);
          } : a[s] = (...d) => {
            if (this.defaults.async) return (async () => {
              let p = await o.apply(a, d);
              return p === !1 && (p = await l.apply(a, d)), p;
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
    return xr.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return yr.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, a = { ...this.defaults, ...n }, i = this.onError(!!a.silent, !!a.async);
      if (this.defaults.async === !0 && n.async === !1) return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return i(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return i(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (a.hooks && (a.hooks.options = a, a.hooks.block = r), a.async) return (async () => {
        let s = a.hooks ? await a.hooks.preprocess(e) : e, o = await (a.hooks ? await a.hooks.provideLexer(r) : r ? xr.lex : xr.lexInline)(s, a), l = a.hooks ? await a.hooks.processAllTokens(o) : o;
        a.walkTokens && await Promise.all(this.walkTokens(l, a.walkTokens));
        let d = await (a.hooks ? await a.hooks.provideParser(r) : r ? yr.parse : yr.parseInline)(l, a);
        return a.hooks ? await a.hooks.postprocess(d) : d;
      })().catch(i);
      try {
        a.hooks && (e = a.hooks.preprocess(e));
        let s = (a.hooks ? a.hooks.provideLexer(r) : r ? xr.lex : xr.lexInline)(e, a);
        a.hooks && (s = a.hooks.processAllTokens(s)), a.walkTokens && this.walkTokens(s, a.walkTokens);
        let o = (a.hooks ? a.hooks.provideParser(r) : r ? yr.parse : yr.parseInline)(s, a);
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
        let n = "<p>An error occurred:</p><pre>" + Nr(t.message + "", !0) + "</pre>";
        return e ? Promise.resolve(n) : n;
      }
      if (e) return Promise.reject(t);
      throw t;
    };
  }
}, n0 = new Mu();
function st(r, e) {
  return n0.parse(r, e);
}
st.options = st.setOptions = function(r) {
  return n0.setOptions(r), st.defaults = n0.defaults, yu(st.defaults), st;
};
st.getDefaults = Ms;
st.defaults = s0;
st.use = function(...r) {
  return n0.use(...r), st.defaults = n0.defaults, yu(st.defaults), st;
};
st.walkTokens = function(r, e) {
  return n0.walkTokens(r, e);
};
st.parseInline = n0.parseInline;
st.Parser = yr;
st.parser = yr.parse;
st.Renderer = qa;
st.TextRenderer = Fs;
st.Lexer = xr;
st.lexer = xr.lex;
st.Tokenizer = Ha;
st.Hooks = W0;
st.parse = st;
st.options;
st.setOptions;
st.use;
st.walkTokens;
st.parseInline;
yr.parse;
xr.lex;
class X extends Error {
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
    super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, X.prototype), this.position = a, a != null && i != null && (this.length = i - a), this.rawMessage = e;
  }
}
var op = /([A-Z])/g, lp = (r) => r.replace(op, "-$1").toLowerCase(), cp = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, up = /[&><"']/g, Lt = (r) => String(r).replace(up, (e) => cp[e]), Oa = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? Oa(r.body[0]) : r : r.type === "font" ? Oa(r.body) : r, dp = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), sn = (r) => dp.has(Oa(r).type), hp = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, Qi = {
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
function pp(r) {
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
function fp(r) {
  if (r.default !== void 0)
    return r.default;
  var e = Array.isArray(r.type) ? r.type[0] : r.type;
  return pp(e);
}
function mp(r, e, t, n) {
  var a = t[e];
  r[e] = a !== void 0 ? n.processor ? n.processor(a) : a : fp(n);
}
class Ps {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t of Object.keys(Qi)) {
      var n = Qi[t];
      n && mp(this, t, e, n);
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
        throw new X("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
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
      var t = hp(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class kn {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Rr[gp[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Rr[bp[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Rr[vp[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Rr[wp[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Rr[xp[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Rr[yp[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Vs = 0, Wa = 1, y0 = 2, en = 3, X0 = 4, pr = 5, T0 = 6, Ut = 7, Rr = [new kn(Vs, 0, !1), new kn(Wa, 0, !0), new kn(y0, 1, !1), new kn(en, 1, !0), new kn(X0, 2, !1), new kn(pr, 2, !0), new kn(T0, 3, !1), new kn(Ut, 3, !0)], gp = [X0, pr, X0, pr, T0, Ut, T0, Ut], bp = [pr, pr, pr, pr, Ut, Ut, Ut, Ut], vp = [y0, en, X0, pr, T0, Ut, T0, Ut], wp = [en, en, pr, pr, Ut, Ut, Ut, Ut], xp = [Wa, Wa, en, en, pr, pr, Ut, Ut], yp = [Vs, Wa, y0, en, y0, en, y0, en], Ie = {
  DISPLAY: Rr[Vs],
  TEXT: Rr[y0],
  SCRIPT: Rr[X0],
  SCRIPTSCRIPT: Rr[T0]
}, es = [{
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
function kp(r) {
  for (var e = 0; e < es.length; e++)
    for (var t = es[e], n = 0; n < t.blocks.length; n++) {
      var a = t.blocks[n];
      if (r >= a[0] && r <= a[1])
        return t.name;
    }
  return null;
}
var Ba = [];
es.forEach((r) => r.blocks.forEach((e) => Ba.push(...e)));
function Eu(r) {
  for (var e = 0; e < Ba.length; e += 2)
    if (r >= Ba[e] && r <= Ba[e + 1])
      return !0;
  return !1;
}
var Mt = (r) => r + " " + r, b0 = 80, Sp = function(e, t) {
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
}, _p = function(e, t) {
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
}, Cp = function(e, t) {
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
}, Ap = function(e, t) {
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
}, $p = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Tp = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Ip = function(e, t, n) {
  var a = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + a + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Np = function(e, t, n) {
  t = 1e3 * t;
  var a = "";
  switch (e) {
    case "sqrtMain":
      a = Sp(t, b0);
      break;
    case "sqrtSize1":
      a = _p(t, b0);
      break;
    case "sqrtSize2":
      a = Cp(t, b0);
      break;
    case "sqrtSize3":
      a = Ap(t, b0);
      break;
    case "sqrtSize4":
      a = $p(t, b0);
      break;
    case "sqrtTall":
      a = Ip(t, b0, n);
  }
  return a;
}, Mp = function(e, t) {
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
}, bl = {
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
}, Ep = function(e, t) {
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
function zp(r) {
  return "toText" in r;
}
class R0 {
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
      if (zp(e))
        return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var ts = {
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
}, Rp = {
  ex: !0,
  em: !0,
  mu: !0
}, zu = function(e) {
  return typeof e != "string" && (e = e.unit), e in ts || e in Rp || e === "ex";
}, mt = function(e, t) {
  var n;
  if (e.unit in ts)
    n = ts[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var a;
    if (t.style.isTight() ? a = t.havingStyle(t.style.text()) : a = t, e.unit === "ex")
      n = a.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = a.fontMetrics().quad;
    else
      throw new X("Invalid unit: '" + e.unit + "'");
    a !== t && (n *= a.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, ee = function(e) {
  return +e.toFixed(4) + "em";
}, Nn = function(e) {
  return e.filter((t) => t).join(" ");
}, Hs = function(e) {
  var t = "";
  for (var n of Object.keys(e)) {
    var a = e[n];
    a !== void 0 && (t += lp(n) + ":" + a + ";");
  }
  return t;
}, Ru = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var a = t.getColor();
    a && (this.style.color = a);
  }
}, Ou = function(e) {
  var t = document.createElement(e);
  t.className = Nn(this.classes), Object.assign(t.style, this.style);
  for (var n of Object.keys(this.attributes))
    t.setAttribute(n, this.attributes[n]);
  for (var a = 0; a < this.children.length; a++)
    t.appendChild(this.children[a].toNode());
  return t;
}, Op = /[\s"'>/=\x00-\x1f]/, Bu = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Lt(Nn(this.classes)) + '"');
  var n = Hs(this.style);
  n && (t += ' style="' + Lt(n) + '"');
  for (var a of Object.keys(this.attributes)) {
    if (Op.test(a))
      throw new X("Invalid attribute name '" + a + "'");
    t += " " + a + '="' + Lt(this.attributes[a]) + '"';
  }
  t += ">";
  for (var i = 0; i < this.children.length; i++)
    t += this.children[i].toMarkup();
  return t += "</" + e + ">", t;
};
class O0 {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, Ru.call(this, e, n, a), this.children = t || [];
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
    return Ou.call(this, "span");
  }
  toMarkup() {
    return Bu.call(this, "span");
  }
}
class ni {
  constructor(e, t, n, a) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Ru.call(this, t, a), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Ou.call(this, "a");
  }
  toMarkup() {
    return Bu.call(this, "a");
  }
}
class Bp {
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
    var e = '<img src="' + Lt(this.src) + '"' + (' alt="' + Lt(this.alt) + '"'), t = Hs(this.style);
    return t && (e += ' style="' + Lt(t) + '"'), e += "'/>", e;
  }
}
var Dp = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class sr {
  constructor(e, t, n, a, i, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var d = kp(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Dp[this.text]);
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
    return this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = ee(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = Nn(this.classes)), Object.keys(this.style).length > 0 && (t = t || document.createElement("span"), Object.assign(t.style, this.style)), t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Lt(Nn(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + ee(this.italic) + ";"), n += Hs(this.style), n && (e = !0, t += ' style="' + Lt(n) + '"');
    var a = Lt(this.text);
    return e ? (t += ">", t += a, t += "</span>", t) : a;
  }
}
class nn {
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
      e += " " + t + '="' + Lt(this.attributes[t]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class Mn {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", bl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + Lt(this.alternate) + '"/>' : '<path d="' + Lt(bl[this.pathName]) + '"/>';
  }
}
class rs {
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
function Lp(r) {
  if (r instanceof sr)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function Fp(r) {
  if (r instanceof O0)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var Pp = (r) => r instanceof O0 || r instanceof ni || r instanceof R0, Br = {
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
}, va = {
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
}, vl = {
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
function Vp(r, e) {
  Br[r] = e;
}
function qs(r, e, t) {
  if (!Br[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), a = Br[e][n];
  if (!a && r[0] in vl && (n = vl[r[0]].charCodeAt(0), a = Br[e][n]), !a && t === "text" && Eu(n) && (a = Br[e][77]), a)
    return {
      depth: a[0],
      height: a[1],
      italic: a[2],
      skew: a[3],
      width: a[4]
    };
}
var ki = {};
function Hp(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !ki[e]) {
    var t = ki[e] = {
      cssEmPerMu: va.quad[e] / 18
    };
    for (var n in va)
      va.hasOwnProperty(n) && (t[n] = va[n][e]);
  }
  return ki[e];
}
var ht = {
  math: {},
  text: {}
};
function c(r, e, t, n, a, i) {
  ht[r][a] = {
    font: e,
    group: t,
    replace: n
  }, i && n && (ht[r][n] = ht[r][a]);
}
var u = "math", H = "text", f = "main", w = "ams", pt = "accent-token", fe = "bin", Gt = "close", B0 = "inner", Se = "mathord", Tt = "op-token", lr = "open", ca = "punct", x = "rel", on = "spacing", C = "textord";
c(u, f, x, "≡", "\\equiv", !0);
c(u, f, x, "≺", "\\prec", !0);
c(u, f, x, "≻", "\\succ", !0);
c(u, f, x, "∼", "\\sim", !0);
c(u, f, x, "⊥", "\\perp");
c(u, f, x, "⪯", "\\preceq", !0);
c(u, f, x, "⪰", "\\succeq", !0);
c(u, f, x, "≃", "\\simeq", !0);
c(u, f, x, "∣", "\\mid", !0);
c(u, f, x, "≪", "\\ll", !0);
c(u, f, x, "≫", "\\gg", !0);
c(u, f, x, "≍", "\\asymp", !0);
c(u, f, x, "∥", "\\parallel");
c(u, f, x, "⋈", "\\bowtie", !0);
c(u, f, x, "⌣", "\\smile", !0);
c(u, f, x, "⊑", "\\sqsubseteq", !0);
c(u, f, x, "⊒", "\\sqsupseteq", !0);
c(u, f, x, "≐", "\\doteq", !0);
c(u, f, x, "⌢", "\\frown", !0);
c(u, f, x, "∋", "\\ni", !0);
c(u, f, x, "∝", "\\propto", !0);
c(u, f, x, "⊢", "\\vdash", !0);
c(u, f, x, "⊣", "\\dashv", !0);
c(u, f, x, "∋", "\\owns");
c(u, f, ca, ".", "\\ldotp");
c(u, f, ca, "⋅", "\\cdotp");
c(u, f, ca, "⋅", "·");
c(H, f, C, "⋅", "·");
c(u, f, C, "#", "\\#");
c(H, f, C, "#", "\\#");
c(u, f, C, "&", "\\&");
c(H, f, C, "&", "\\&");
c(u, f, C, "ℵ", "\\aleph", !0);
c(u, f, C, "∀", "\\forall", !0);
c(u, f, C, "ℏ", "\\hbar", !0);
c(u, f, C, "∃", "\\exists", !0);
c(u, f, C, "∇", "\\nabla", !0);
c(u, f, C, "♭", "\\flat", !0);
c(u, f, C, "ℓ", "\\ell", !0);
c(u, f, C, "♮", "\\natural", !0);
c(u, f, C, "♣", "\\clubsuit", !0);
c(u, f, C, "℘", "\\wp", !0);
c(u, f, C, "♯", "\\sharp", !0);
c(u, f, C, "♢", "\\diamondsuit", !0);
c(u, f, C, "ℜ", "\\Re", !0);
c(u, f, C, "♡", "\\heartsuit", !0);
c(u, f, C, "ℑ", "\\Im", !0);
c(u, f, C, "♠", "\\spadesuit", !0);
c(u, f, C, "§", "\\S", !0);
c(H, f, C, "§", "\\S");
c(u, f, C, "¶", "\\P", !0);
c(H, f, C, "¶", "\\P");
c(u, f, C, "†", "\\dag");
c(H, f, C, "†", "\\dag");
c(H, f, C, "†", "\\textdagger");
c(u, f, C, "‡", "\\ddag");
c(H, f, C, "‡", "\\ddag");
c(H, f, C, "‡", "\\textdaggerdbl");
c(u, f, Gt, "⎱", "\\rmoustache", !0);
c(u, f, lr, "⎰", "\\lmoustache", !0);
c(u, f, Gt, "⟯", "\\rgroup", !0);
c(u, f, lr, "⟮", "\\lgroup", !0);
c(u, f, fe, "∓", "\\mp", !0);
c(u, f, fe, "⊖", "\\ominus", !0);
c(u, f, fe, "⊎", "\\uplus", !0);
c(u, f, fe, "⊓", "\\sqcap", !0);
c(u, f, fe, "∗", "\\ast");
c(u, f, fe, "⊔", "\\sqcup", !0);
c(u, f, fe, "◯", "\\bigcirc", !0);
c(u, f, fe, "∙", "\\bullet", !0);
c(u, f, fe, "‡", "\\ddagger");
c(u, f, fe, "≀", "\\wr", !0);
c(u, f, fe, "⨿", "\\amalg");
c(u, f, fe, "&", "\\And");
c(u, f, x, "⟵", "\\longleftarrow", !0);
c(u, f, x, "⇐", "\\Leftarrow", !0);
c(u, f, x, "⟸", "\\Longleftarrow", !0);
c(u, f, x, "⟶", "\\longrightarrow", !0);
c(u, f, x, "⇒", "\\Rightarrow", !0);
c(u, f, x, "⟹", "\\Longrightarrow", !0);
c(u, f, x, "↔", "\\leftrightarrow", !0);
c(u, f, x, "⟷", "\\longleftrightarrow", !0);
c(u, f, x, "⇔", "\\Leftrightarrow", !0);
c(u, f, x, "⟺", "\\Longleftrightarrow", !0);
c(u, f, x, "↦", "\\mapsto", !0);
c(u, f, x, "⟼", "\\longmapsto", !0);
c(u, f, x, "↗", "\\nearrow", !0);
c(u, f, x, "↩", "\\hookleftarrow", !0);
c(u, f, x, "↪", "\\hookrightarrow", !0);
c(u, f, x, "↘", "\\searrow", !0);
c(u, f, x, "↼", "\\leftharpoonup", !0);
c(u, f, x, "⇀", "\\rightharpoonup", !0);
c(u, f, x, "↙", "\\swarrow", !0);
c(u, f, x, "↽", "\\leftharpoondown", !0);
c(u, f, x, "⇁", "\\rightharpoondown", !0);
c(u, f, x, "↖", "\\nwarrow", !0);
c(u, f, x, "⇌", "\\rightleftharpoons", !0);
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
c(u, w, fe, "⊴", "\\unlhd");
c(u, w, fe, "⊵", "\\unrhd");
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
c(H, w, C, "®", "\\circledR");
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
c(H, f, C, "ð", "ð");
c(u, w, C, "╱", "\\diagup");
c(u, w, C, "╲", "\\diagdown");
c(u, w, C, "□", "\\square");
c(u, w, C, "□", "\\Box");
c(u, w, C, "◊", "\\Diamond");
c(u, w, C, "¥", "\\yen", !0);
c(H, w, C, "¥", "\\yen", !0);
c(u, w, C, "✓", "\\checkmark", !0);
c(H, w, C, "✓", "\\checkmark");
c(u, w, C, "ℶ", "\\beth", !0);
c(u, w, C, "ℸ", "\\daleth", !0);
c(u, w, C, "ℷ", "\\gimel", !0);
c(u, w, C, "ϝ", "\\digamma", !0);
c(u, w, C, "ϰ", "\\varkappa");
c(u, w, lr, "┌", "\\@ulcorner", !0);
c(u, w, Gt, "┐", "\\@urcorner", !0);
c(u, w, lr, "└", "\\@llcorner", !0);
c(u, w, Gt, "┘", "\\@lrcorner", !0);
c(u, w, x, "≦", "\\leqq", !0);
c(u, w, x, "⩽", "\\leqslant", !0);
c(u, w, x, "⪕", "\\eqslantless", !0);
c(u, w, x, "≲", "\\lesssim", !0);
c(u, w, x, "⪅", "\\lessapprox", !0);
c(u, w, x, "≊", "\\approxeq", !0);
c(u, w, fe, "⋖", "\\lessdot");
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
c(u, w, fe, "⋗", "\\gtrdot");
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
c(u, w, fe, "⊲", "\\lhd");
c(u, w, fe, "⊳", "\\rhd");
c(u, w, x, "≂", "\\eqsim", !0);
c(u, f, x, "⋈", "\\Join");
c(u, w, x, "≑", "\\Doteq", !0);
c(u, w, fe, "∔", "\\dotplus", !0);
c(u, w, fe, "∖", "\\smallsetminus");
c(u, w, fe, "⋒", "\\Cap", !0);
c(u, w, fe, "⋓", "\\Cup", !0);
c(u, w, fe, "⩞", "\\doublebarwedge", !0);
c(u, w, fe, "⊟", "\\boxminus", !0);
c(u, w, fe, "⊞", "\\boxplus", !0);
c(u, w, fe, "⋇", "\\divideontimes", !0);
c(u, w, fe, "⋉", "\\ltimes", !0);
c(u, w, fe, "⋊", "\\rtimes", !0);
c(u, w, fe, "⋋", "\\leftthreetimes", !0);
c(u, w, fe, "⋌", "\\rightthreetimes", !0);
c(u, w, fe, "⋏", "\\curlywedge", !0);
c(u, w, fe, "⋎", "\\curlyvee", !0);
c(u, w, fe, "⊝", "\\circleddash", !0);
c(u, w, fe, "⊛", "\\circledast", !0);
c(u, w, fe, "⋅", "\\centerdot");
c(u, w, fe, "⊺", "\\intercal", !0);
c(u, w, fe, "⋒", "\\doublecap");
c(u, w, fe, "⋓", "\\doublecup");
c(u, w, fe, "⊠", "\\boxtimes", !0);
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
c(u, f, x, "⊶", "\\origof", !0);
c(u, f, x, "⊷", "\\imageof", !0);
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
c(u, f, C, "‘", "`");
c(u, f, C, "$", "\\$");
c(H, f, C, "$", "\\$");
c(H, f, C, "$", "\\textdollar");
c(u, f, C, "%", "\\%");
c(H, f, C, "%", "\\%");
c(u, f, C, "_", "\\_");
c(H, f, C, "_", "\\_");
c(H, f, C, "_", "\\textunderscore");
c(u, f, C, "∠", "\\angle", !0);
c(u, f, C, "∞", "\\infty", !0);
c(u, f, C, "′", "\\prime");
c(u, f, C, "△", "\\triangle");
c(u, f, C, "Γ", "\\Gamma", !0);
c(u, f, C, "Δ", "\\Delta", !0);
c(u, f, C, "Θ", "\\Theta", !0);
c(u, f, C, "Λ", "\\Lambda", !0);
c(u, f, C, "Ξ", "\\Xi", !0);
c(u, f, C, "Π", "\\Pi", !0);
c(u, f, C, "Σ", "\\Sigma", !0);
c(u, f, C, "Υ", "\\Upsilon", !0);
c(u, f, C, "Φ", "\\Phi", !0);
c(u, f, C, "Ψ", "\\Psi", !0);
c(u, f, C, "Ω", "\\Omega", !0);
c(u, f, C, "A", "Α");
c(u, f, C, "B", "Β");
c(u, f, C, "E", "Ε");
c(u, f, C, "Z", "Ζ");
c(u, f, C, "H", "Η");
c(u, f, C, "I", "Ι");
c(u, f, C, "K", "Κ");
c(u, f, C, "M", "Μ");
c(u, f, C, "N", "Ν");
c(u, f, C, "O", "Ο");
c(u, f, C, "P", "Ρ");
c(u, f, C, "T", "Τ");
c(u, f, C, "X", "Χ");
c(u, f, C, "¬", "\\neg", !0);
c(u, f, C, "¬", "\\lnot");
c(u, f, C, "⊤", "\\top");
c(u, f, C, "⊥", "\\bot");
c(u, f, C, "∅", "\\emptyset");
c(u, w, C, "∅", "\\varnothing");
c(u, f, Se, "α", "\\alpha", !0);
c(u, f, Se, "β", "\\beta", !0);
c(u, f, Se, "γ", "\\gamma", !0);
c(u, f, Se, "δ", "\\delta", !0);
c(u, f, Se, "ϵ", "\\epsilon", !0);
c(u, f, Se, "ζ", "\\zeta", !0);
c(u, f, Se, "η", "\\eta", !0);
c(u, f, Se, "θ", "\\theta", !0);
c(u, f, Se, "ι", "\\iota", !0);
c(u, f, Se, "κ", "\\kappa", !0);
c(u, f, Se, "λ", "\\lambda", !0);
c(u, f, Se, "μ", "\\mu", !0);
c(u, f, Se, "ν", "\\nu", !0);
c(u, f, Se, "ξ", "\\xi", !0);
c(u, f, Se, "ο", "\\omicron", !0);
c(u, f, Se, "π", "\\pi", !0);
c(u, f, Se, "ρ", "\\rho", !0);
c(u, f, Se, "σ", "\\sigma", !0);
c(u, f, Se, "τ", "\\tau", !0);
c(u, f, Se, "υ", "\\upsilon", !0);
c(u, f, Se, "ϕ", "\\phi", !0);
c(u, f, Se, "χ", "\\chi", !0);
c(u, f, Se, "ψ", "\\psi", !0);
c(u, f, Se, "ω", "\\omega", !0);
c(u, f, Se, "ε", "\\varepsilon", !0);
c(u, f, Se, "ϑ", "\\vartheta", !0);
c(u, f, Se, "ϖ", "\\varpi", !0);
c(u, f, Se, "ϱ", "\\varrho", !0);
c(u, f, Se, "ς", "\\varsigma", !0);
c(u, f, Se, "φ", "\\varphi", !0);
c(u, f, fe, "∗", "*", !0);
c(u, f, fe, "+", "+");
c(u, f, fe, "−", "-", !0);
c(u, f, fe, "⋅", "\\cdot", !0);
c(u, f, fe, "∘", "\\circ", !0);
c(u, f, fe, "÷", "\\div", !0);
c(u, f, fe, "±", "\\pm", !0);
c(u, f, fe, "×", "\\times", !0);
c(u, f, fe, "∩", "\\cap", !0);
c(u, f, fe, "∪", "\\cup", !0);
c(u, f, fe, "∖", "\\setminus", !0);
c(u, f, fe, "∧", "\\land");
c(u, f, fe, "∨", "\\lor");
c(u, f, fe, "∧", "\\wedge", !0);
c(u, f, fe, "∨", "\\vee", !0);
c(u, f, C, "√", "\\surd");
c(u, f, lr, "⟨", "\\langle", !0);
c(u, f, lr, "∣", "\\lvert");
c(u, f, lr, "∥", "\\lVert");
c(u, f, Gt, "?", "?");
c(u, f, Gt, "!", "!");
c(u, f, Gt, "⟩", "\\rangle", !0);
c(u, f, Gt, "∣", "\\rvert");
c(u, f, Gt, "∥", "\\rVert");
c(u, f, x, "=", "=");
c(u, f, x, ":", ":");
c(u, f, x, "≈", "\\approx", !0);
c(u, f, x, "≅", "\\cong", !0);
c(u, f, x, "≥", "\\ge");
c(u, f, x, "≥", "\\geq", !0);
c(u, f, x, "←", "\\gets");
c(u, f, x, ">", "\\gt", !0);
c(u, f, x, "∈", "\\in", !0);
c(u, f, x, "", "\\@not");
c(u, f, x, "⊂", "\\subset", !0);
c(u, f, x, "⊃", "\\supset", !0);
c(u, f, x, "⊆", "\\subseteq", !0);
c(u, f, x, "⊇", "\\supseteq", !0);
c(u, w, x, "⊈", "\\nsubseteq", !0);
c(u, w, x, "⊉", "\\nsupseteq", !0);
c(u, f, x, "⊨", "\\models");
c(u, f, x, "←", "\\leftarrow", !0);
c(u, f, x, "≤", "\\le");
c(u, f, x, "≤", "\\leq", !0);
c(u, f, x, "<", "\\lt", !0);
c(u, f, x, "→", "\\rightarrow", !0);
c(u, f, x, "→", "\\to");
c(u, w, x, "≱", "\\ngeq", !0);
c(u, w, x, "≰", "\\nleq", !0);
c(u, f, on, " ", "\\ ");
c(u, f, on, " ", "\\space");
c(u, f, on, " ", "\\nobreakspace");
c(H, f, on, " ", "\\ ");
c(H, f, on, " ", " ");
c(H, f, on, " ", "\\space");
c(H, f, on, " ", "\\nobreakspace");
c(u, f, on, "", "\\nobreak");
c(u, f, on, "", "\\allowbreak");
c(u, f, ca, ",", ",");
c(u, f, ca, ";", ";");
c(u, w, fe, "⊼", "\\barwedge", !0);
c(u, w, fe, "⊻", "\\veebar", !0);
c(u, f, fe, "⊙", "\\odot", !0);
c(u, f, fe, "⊕", "\\oplus", !0);
c(u, f, fe, "⊗", "\\otimes", !0);
c(u, f, C, "∂", "\\partial", !0);
c(u, f, fe, "⊘", "\\oslash", !0);
c(u, w, fe, "⊚", "\\circledcirc", !0);
c(u, w, fe, "⊡", "\\boxdot", !0);
c(u, f, fe, "△", "\\bigtriangleup");
c(u, f, fe, "▽", "\\bigtriangledown");
c(u, f, fe, "†", "\\dagger");
c(u, f, fe, "⋄", "\\diamond");
c(u, f, fe, "⋆", "\\star");
c(u, f, fe, "◃", "\\triangleleft");
c(u, f, fe, "▹", "\\triangleright");
c(u, f, lr, "{", "\\{");
c(H, f, C, "{", "\\{");
c(H, f, C, "{", "\\textbraceleft");
c(u, f, Gt, "}", "\\}");
c(H, f, C, "}", "\\}");
c(H, f, C, "}", "\\textbraceright");
c(u, f, lr, "{", "\\lbrace");
c(u, f, Gt, "}", "\\rbrace");
c(u, f, lr, "[", "\\lbrack", !0);
c(H, f, C, "[", "\\lbrack", !0);
c(u, f, Gt, "]", "\\rbrack", !0);
c(H, f, C, "]", "\\rbrack", !0);
c(u, f, lr, "(", "\\lparen", !0);
c(u, f, Gt, ")", "\\rparen", !0);
c(H, f, C, "<", "\\textless", !0);
c(H, f, C, ">", "\\textgreater", !0);
c(u, f, lr, "⌊", "\\lfloor", !0);
c(u, f, Gt, "⌋", "\\rfloor", !0);
c(u, f, lr, "⌈", "\\lceil", !0);
c(u, f, Gt, "⌉", "\\rceil", !0);
c(u, f, C, "\\", "\\backslash");
c(u, f, C, "∣", "|");
c(u, f, C, "∣", "\\vert");
c(H, f, C, "|", "\\textbar", !0);
c(u, f, C, "∥", "\\|");
c(u, f, C, "∥", "\\Vert");
c(H, f, C, "∥", "\\textbardbl");
c(H, f, C, "~", "\\textasciitilde");
c(H, f, C, "\\", "\\textbackslash");
c(H, f, C, "^", "\\textasciicircum");
c(u, f, x, "↑", "\\uparrow", !0);
c(u, f, x, "⇑", "\\Uparrow", !0);
c(u, f, x, "↓", "\\downarrow", !0);
c(u, f, x, "⇓", "\\Downarrow", !0);
c(u, f, x, "↕", "\\updownarrow", !0);
c(u, f, x, "⇕", "\\Updownarrow", !0);
c(u, f, Tt, "∐", "\\coprod");
c(u, f, Tt, "⋁", "\\bigvee");
c(u, f, Tt, "⋀", "\\bigwedge");
c(u, f, Tt, "⨄", "\\biguplus");
c(u, f, Tt, "⋂", "\\bigcap");
c(u, f, Tt, "⋃", "\\bigcup");
c(u, f, Tt, "∫", "\\int");
c(u, f, Tt, "∫", "\\intop");
c(u, f, Tt, "∬", "\\iint");
c(u, f, Tt, "∭", "\\iiint");
c(u, f, Tt, "∏", "\\prod");
c(u, f, Tt, "∑", "\\sum");
c(u, f, Tt, "⨂", "\\bigotimes");
c(u, f, Tt, "⨁", "\\bigoplus");
c(u, f, Tt, "⨀", "\\bigodot");
c(u, f, Tt, "∮", "\\oint");
c(u, f, Tt, "∯", "\\oiint");
c(u, f, Tt, "∰", "\\oiiint");
c(u, f, Tt, "⨆", "\\bigsqcup");
c(u, f, Tt, "∫", "\\smallint");
c(H, f, B0, "…", "\\textellipsis");
c(u, f, B0, "…", "\\mathellipsis");
c(H, f, B0, "…", "\\ldots", !0);
c(u, f, B0, "…", "\\ldots", !0);
c(u, f, B0, "⋯", "\\@cdots", !0);
c(u, f, B0, "⋱", "\\ddots", !0);
c(u, f, C, "⋮", "\\varvdots");
c(H, f, C, "⋮", "\\varvdots");
c(u, f, pt, "ˊ", "\\acute");
c(u, f, pt, "ˋ", "\\grave");
c(u, f, pt, "¨", "\\ddot");
c(u, f, pt, "~", "\\tilde");
c(u, f, pt, "ˉ", "\\bar");
c(u, f, pt, "˘", "\\breve");
c(u, f, pt, "ˇ", "\\check");
c(u, f, pt, "^", "\\hat");
c(u, f, pt, "⃗", "\\vec");
c(u, f, pt, "˙", "\\dot");
c(u, f, pt, "˚", "\\mathring");
c(u, f, Se, "", "\\@imath");
c(u, f, Se, "", "\\@jmath");
c(u, f, C, "ı", "ı");
c(u, f, C, "ȷ", "ȷ");
c(H, f, C, "ı", "\\i", !0);
c(H, f, C, "ȷ", "\\j", !0);
c(H, f, C, "ß", "\\ss", !0);
c(H, f, C, "æ", "\\ae", !0);
c(H, f, C, "œ", "\\oe", !0);
c(H, f, C, "ø", "\\o", !0);
c(H, f, C, "Æ", "\\AE", !0);
c(H, f, C, "Œ", "\\OE", !0);
c(H, f, C, "Ø", "\\O", !0);
c(H, f, pt, "ˊ", "\\'");
c(H, f, pt, "ˋ", "\\`");
c(H, f, pt, "ˆ", "\\^");
c(H, f, pt, "˜", "\\~");
c(H, f, pt, "ˉ", "\\=");
c(H, f, pt, "˘", "\\u");
c(H, f, pt, "˙", "\\.");
c(H, f, pt, "¸", "\\c");
c(H, f, pt, "˚", "\\r");
c(H, f, pt, "ˇ", "\\v");
c(H, f, pt, "¨", '\\"');
c(H, f, pt, "˝", "\\H");
c(H, f, pt, "◯", "\\textcircled");
var Du = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(H, f, C, "–", "--", !0);
c(H, f, C, "–", "\\textendash");
c(H, f, C, "—", "---", !0);
c(H, f, C, "—", "\\textemdash");
c(H, f, C, "‘", "`", !0);
c(H, f, C, "‘", "\\textquoteleft");
c(H, f, C, "’", "'", !0);
c(H, f, C, "’", "\\textquoteright");
c(H, f, C, "“", "``", !0);
c(H, f, C, "“", "\\textquotedblleft");
c(H, f, C, "”", "''", !0);
c(H, f, C, "”", "\\textquotedblright");
c(u, f, C, "°", "\\degree", !0);
c(H, f, C, "°", "\\degree");
c(H, f, C, "°", "\\textdegree", !0);
c(u, f, C, "£", "\\pounds");
c(u, f, C, "£", "\\mathsterling", !0);
c(H, f, C, "£", "\\pounds");
c(H, f, C, "£", "\\textsterling", !0);
c(u, w, C, "✠", "\\maltese");
c(H, w, C, "✠", "\\maltese");
var wl = '0123456789/@."';
for (var Si = 0; Si < wl.length; Si++) {
  var xl = wl.charAt(Si);
  c(u, f, C, xl, xl);
}
var yl = '0123456789!@*()-=+";:?/.,';
for (var _i = 0; _i < yl.length; _i++) {
  var kl = yl.charAt(_i);
  c(H, f, C, kl, kl);
}
var Ua = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Ci = 0; Ci < Ua.length; Ci++) {
  var wa = Ua.charAt(Ci);
  c(u, f, Se, wa, wa), c(H, f, C, wa, wa);
}
c(u, w, C, "C", "ℂ");
c(H, w, C, "C", "ℂ");
c(u, w, C, "H", "ℍ");
c(H, w, C, "H", "ℍ");
c(u, w, C, "N", "ℕ");
c(H, w, C, "N", "ℕ");
c(u, w, C, "P", "ℙ");
c(H, w, C, "P", "ℙ");
c(u, w, C, "Q", "ℚ");
c(H, w, C, "Q", "ℚ");
c(u, w, C, "R", "ℝ");
c(H, w, C, "R", "ℝ");
c(u, w, C, "Z", "ℤ");
c(H, w, C, "Z", "ℤ");
c(u, f, Se, "h", "ℎ");
c(H, f, Se, "h", "ℎ");
var Te;
for (var Ht = 0; Ht < Ua.length; Ht++) {
  var vt = Ua.charAt(Ht);
  Te = String.fromCharCode(55349, 56320 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56372 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56424 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56580 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56684 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56736 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56788 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56840 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56944 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Ht < 26 && (Te = String.fromCharCode(55349, 56632 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te), Te = String.fromCharCode(55349, 56476 + Ht), c(u, f, Se, vt, Te), c(H, f, C, vt, Te));
}
Te = "𝕜";
c(u, f, Se, "k", Te);
c(H, f, C, "k", Te);
for (var Xn = 0; Xn < 10; Xn++) {
  var Sn = Xn.toString();
  Te = String.fromCharCode(55349, 57294 + Xn), c(u, f, Se, Sn, Te), c(H, f, C, Sn, Te), Te = String.fromCharCode(55349, 57314 + Xn), c(u, f, Se, Sn, Te), c(H, f, C, Sn, Te), Te = String.fromCharCode(55349, 57324 + Xn), c(u, f, Se, Sn, Te), c(H, f, C, Sn, Te), Te = String.fromCharCode(55349, 57334 + Xn), c(u, f, Se, Sn, Te), c(H, f, C, Sn, Te);
}
var ns = "ÐÞþ";
for (var Ai = 0; Ai < ns.length; Ai++) {
  var xa = ns.charAt(Ai);
  c(u, f, Se, xa, xa), c(H, f, C, xa, xa);
}
var as = {
  mathClass: "mathbf",
  textClass: "textbf",
  font: "Main-Bold"
}, Sl = {
  mathClass: "mathnormal",
  textClass: "textit",
  font: "Math-Italic"
}, _l = {
  mathClass: "boldsymbol",
  textClass: "boldsymbol",
  font: "Main-BoldItalic"
}, qp = {
  mathClass: "mathscr",
  textClass: "textscr",
  font: "Script-Regular"
}, e0 = {
  mathClass: "",
  textClass: "",
  font: ""
}, Cl = {
  mathClass: "mathfrak",
  textClass: "textfrak",
  font: "Fraktur-Regular"
}, Al = {
  mathClass: "mathbb",
  textClass: "textbb",
  font: "AMS-Regular"
}, $l = {
  mathClass: "mathboldfrak",
  textClass: "textboldfrak",
  font: "Fraktur-Regular"
}, is = {
  mathClass: "mathsf",
  textClass: "textsf",
  font: "SansSerif-Regular"
}, ss = {
  mathClass: "mathboldsf",
  textClass: "textboldsf",
  font: "SansSerif-Bold"
}, Tl = {
  mathClass: "mathitsf",
  textClass: "textitsf",
  font: "SansSerif-Italic"
}, os = {
  mathClass: "mathtt",
  textClass: "texttt",
  font: "Typewriter-Regular"
}, Il = [
  as,
  as,
  // A-Z, a-z
  Sl,
  Sl,
  // A-Z, a-z
  _l,
  _l,
  // A-Z, a-z
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  qp,
  e0,
  // A-Z script, a-z — no font
  e0,
  e0,
  // A-Z bold script, a-z bold script — no font
  Cl,
  Cl,
  // A-Z, a-z
  Al,
  Al,
  // A-Z double-struck, k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  $l,
  $l,
  // A-Z, a-z
  is,
  is,
  // A-Z, a-z
  ss,
  ss,
  // A-Z, a-z
  Tl,
  Tl,
  // A-Z, a-z
  e0,
  e0,
  // A-Z bold italic sans, a-z bold italic sans - no font
  os,
  os
  // A-Z, a-z
], Wp = [
  as,
  // 0-9
  e0,
  // 0-9 double-struck. No KaTeX font.
  is,
  // 0-9
  ss,
  // 0-9
  os
  // 0-9
], Up = (r) => {
  var e = r.charCodeAt(0), t = r.charCodeAt(1), n = (e - 55296) * 1024 + (t - 56320) + 65536;
  if (119808 <= n && n < 120484) {
    var a = Math.floor((n - 119808) / 26);
    return Il[a];
  } else if (120782 <= n && n <= 120831) {
    var i = Math.floor((n - 120782) / 10);
    return Wp[i];
  } else {
    if (n === 120485 || n === 120486)
      return Il[0];
    if (120486 < n && n < 120782)
      return e0;
    throw new X("Unsupported character: " + r);
  }
}, ai = function(e, t, n) {
  if (ht[n][e]) {
    var a = ht[n][e].replace;
    a && (e = a);
  }
  return {
    value: e,
    metrics: qs(e, t, n)
  };
}, qt = function(e, t, n, a, i) {
  var s = ai(e, t, n), o = s.metrics;
  e = s.value;
  var l;
  if (o) {
    var d = o.italic;
    (n === "text" || a && a.font === "mathit") && (d = 0), l = new sr(e, o.height, o.depth, d, o.skew, o.width, i);
  } else
    typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + t + "' and mode '" + n + "'")), l = new sr(e, 0, 0, 0, 0, 0, i);
  if (a) {
    l.maxFontSize = a.sizeMultiplier, a.style.isTight() && l.classes.push("mtight");
    var h = a.getColor();
    h && (l.style.color = h);
  }
  return l;
}, Ws = function(e, t, n, a) {
  return a === void 0 && (a = []), n.font === "boldsymbol" && ai(e, "Main-Bold", t).metrics ? qt(e, "Main-Bold", t, n, a.concat(["mathbf"])) : e === "\\" || ht[t][e].font === "main" ? qt(e, "Main-Regular", t, n, a) : qt(e, "AMS-Regular", t, n, a.concat(["amsrm"]));
}, Gp = function(e, t, n) {
  return n !== "textord" && ai(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, ii = function(e, t) {
  var n = e.type === "mathord" ? "mathord" : "textord", a = e.mode, i = e.text, s = ["mord"], {
    font: o,
    fontFamily: l,
    fontWeight: d,
    fontShape: h
  } = t, p = a === "math" || a === "text" && !!o, m = p ? o : l, v = "", y = "";
  if (i.charCodeAt(0) === 55349) {
    var A = Up(i);
    v = A.font, y = A[a + "Class"];
  }
  if (v)
    return qt(i, v, a, t, s.concat(y));
  if (m) {
    var $, M;
    if (m === "boldsymbol") {
      var z = Gp(i, a, n);
      $ = z.fontName, M = [z.fontClass];
    } else p ? ($ = ls[o].fontName, M = [o]) : ($ = ya(l, d, h), M = [l, d, h]);
    if (ai(i, $, a).metrics)
      return qt(i, $, a, t, s.concat(M));
    if (Du.hasOwnProperty(i) && $.slice(0, 10) === "Typewriter") {
      for (var q = [], G = 0; G < i.length; G++)
        q.push(qt(i[G], $, a, t, s.concat(M)));
      return ln(q);
    }
  }
  if (n === "mathord")
    return qt(i, "Math-Italic", a, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var Y = ht[a][i] && ht[a][i].font;
    if (Y === "ams") {
      var N = ya("amsrm", d, h);
      return qt(i, N, a, t, s.concat("amsrm", d, h));
    } else if (Y === "main" || !Y) {
      var ie = ya("textrm", d, h);
      return qt(i, ie, a, t, s.concat(d, h));
    } else {
      var ue = ya(Y, d, h);
      return qt(i, ue, a, t, s.concat(ue, d, h));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, jp = (r, e) => {
  if (Nn(r.classes) !== Nn(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal"))
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
}, Lu = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof sr && n instanceof sr && jp(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Us = function(e) {
  for (var t = 0, n = 0, a = 0, i = 0; i < e.children.length; i++) {
    var s = e.children[i];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > a && (a = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = a;
}, U = function(e, t, n, a) {
  var i = new O0(e, t, n, a);
  return Us(i), i;
}, En = (r, e, t, n) => new O0(r, e, t, n), I0 = function(e, t, n) {
  var a = U([e], [], t);
  return a.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), a.style.borderBottomWidth = ee(a.height), a.maxFontSize = 1, a;
}, Kp = function(e, t, n, a) {
  var i = new ni(e, t, n, a);
  return Us(i), i;
}, ln = function(e) {
  var t = new R0(e);
  return Us(t), t;
}, N0 = function(e, t) {
  return e instanceof R0 ? U([], [e], t) : e;
}, Zp = function(e) {
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
    for (var h = e.positionData, p = 0; p < e.children.length; p++) {
      var m = e.children[p];
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
}, Ze = function(e, t) {
  for (var {
    children: n,
    depth: a
  } = Zp(e), i = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      i = Math.max(i, l.maxFontSize, l.height);
    }
  }
  i += 2;
  var d = U(["pstrut"], []);
  d.style.height = ee(i);
  for (var h = [], p = a, m = a, v = a, y = 0; y < n.length; y++) {
    var A = n[y];
    if (A.type === "kern")
      v += A.size;
    else {
      var $ = A.elem, M = A.wrapperClasses || [], z = A.wrapperStyle || {}, q = U(M, [d, $], void 0, z);
      q.style.top = ee(-i - v - $.depth), A.marginLeft && (q.style.marginLeft = A.marginLeft), A.marginRight && (q.style.marginRight = A.marginRight), h.push(q), v += $.height + $.depth;
    }
    p = Math.min(p, v), m = Math.max(m, v);
  }
  var G = U(["vlist"], h);
  G.style.height = ee(m);
  var Y;
  if (p < 0) {
    var N = U([], []), ie = U(["vlist"], [N]);
    ie.style.height = ee(-p);
    var ue = U(["vlist-s"], [new sr("​")]);
    Y = [U(["vlist-r"], [G, ue]), U(["vlist-r"], [ie])];
  } else
    Y = [U(["vlist-r"], [G])];
  var W = U(["vlist-t"], Y);
  return Y.length === 2 && W.classes.push("vlist-t2"), W.height = m, W.depth = -p, W;
}, Fu = (r, e) => {
  var t = U(["mspace"], [], e), n = mt(r, e);
  return t.style.marginRight = ee(n), t;
}, ya = (r, e, t) => {
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
}, ls = {
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
}, Pu = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Vu = function(e, t) {
  var [n, a, i] = Pu[e], s = new Mn(n), o = new nn([s], {
    width: ee(a),
    height: ee(i),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + ee(a),
    viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
    preserveAspectRatio: "xMinYMin"
  }), l = En(["overlay"], [o], t);
  return l.height = i, l.style.height = ee(i), l.style.width = ee(a), l;
}, ft = {
  number: 3,
  unit: "mu"
}, Jn = {
  number: 4,
  unit: "mu"
}, Zr = {
  number: 5,
  unit: "mu"
}, Xp = {
  mord: {
    mop: ft,
    mbin: Jn,
    mrel: Zr,
    minner: ft
  },
  mop: {
    mord: ft,
    mop: ft,
    mrel: Zr,
    minner: ft
  },
  mbin: {
    mord: Jn,
    mop: Jn,
    mopen: Jn,
    minner: Jn
  },
  mrel: {
    mord: Zr,
    mop: Zr,
    mopen: Zr,
    minner: Zr
  },
  mopen: {},
  mclose: {
    mop: ft,
    mbin: Jn,
    mrel: Zr,
    minner: ft
  },
  mpunct: {
    mord: ft,
    mop: ft,
    mrel: Zr,
    mopen: ft,
    mclose: ft,
    mpunct: ft,
    minner: ft
  },
  minner: {
    mord: ft,
    mop: ft,
    mbin: Jn,
    mrel: Zr,
    mopen: ft,
    mpunct: ft,
    minner: ft
  }
}, Jp = {
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
}, Hu = {}, J0 = {}, Y0 = {};
function he(r) {
  for (var {
    type: e,
    names: t,
    htmlBuilder: n,
    mathmlBuilder: a
  } = r, i = 0; i < t.length; ++i)
    Hu[t[i]] = r;
  e && (n && (J0[e] = n), a && (Y0[e] = a));
}
function o0(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  t && (J0[e] = t), n && (Y0[e] = n);
}
var Ga = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, At = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, Yp = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), Qp = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), ef = {
  display: Ie.DISPLAY,
  text: Ie.TEXT,
  script: Ie.SCRIPT,
  scriptscript: Ie.SCRIPTSCRIPT
}, tf = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, Et = function(e, t, n, a) {
  a === void 0 && (a = [null, null]);
  for (var i = [], s = 0; s < e.length; s++) {
    var o = Xe(e[s], t);
    if (o instanceof R0) {
      var l = o.children;
      i.push(...l);
    } else
      i.push(o);
  }
  if (Lu(i), !n)
    return i;
  var d = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = t.havingSize(h.size) : h.type === "styling" && (d = t.havingStyle(ef[h.style]));
  }
  var p = U([a[0] || "leftmost"], [], t), m = U([a[1] || "rightmost"], [], t), v = n === "root";
  return cs(i, (y, A) => {
    var $ = A.classes[0], M = y.classes[0];
    $ === "mbin" && Qp.has(M) ? A.classes[0] = "mord" : M === "mbin" && Yp.has($) && (y.classes[0] = "mord");
  }, {
    node: p
  }, m, v), cs(i, (y, A) => {
    var $, M, z = ds(A), q = ds(y), G = z && q ? y.hasClass("mtight") ? ($ = Jp[z]) == null ? void 0 : $[q] : (M = Xp[z]) == null ? void 0 : M[q] : null;
    if (G)
      return Fu(G, d);
  }, {
    node: p
  }, m, v), i;
}, cs = function(e, t, n, a, i) {
  a && e.push(a);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = qu(o);
    if (l) {
      cs(l.children, t, n, null, i);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = t(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), s++));
    }
    d ? n.node = o : i && o.hasClass("newline") && (n.node = U(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((p) => (m) => {
      e.splice(p + 1, 0, m), s++;
    })(s);
  }
  a && e.pop();
}, qu = function(e) {
  return e instanceof R0 || e instanceof ni || e instanceof O0 && e.hasClass("enclosing") ? e : null;
}, us = function(e, t) {
  var n = qu(e);
  if (n) {
    var a = n.children;
    if (a.length) {
      if (t === "right")
        return us(a[a.length - 1], "right");
      if (t === "left")
        return us(a[0], "left");
    }
  }
  return e;
}, ds = function(e, t) {
  if (!e)
    return null;
  t && (e = us(e, t));
  var n = e.classes[0];
  return tf[n] || null;
}, Q0 = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return U(t.concat(n));
}, Xe = function(e, t, n) {
  if (!e)
    return U();
  if (J0[e.type]) {
    var a = J0[e.type](e, t);
    if (n && t.size !== n.size) {
      a = U(t.sizingClasses(n), [a], t);
      var i = t.sizeMultiplier / n.sizeMultiplier;
      a.height *= i, a.depth *= i;
    }
    return a;
  } else
    throw new X("Got group of unknown type: '" + e.type + "'");
};
function ka(r, e) {
  var t = U(["base"], r, e), n = U(["strut"]);
  return n.style.height = ee(t.height + t.depth), t.depth && (n.style.verticalAlign = ee(-t.depth)), t.children.unshift(n), t;
}
function hs(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = Et(r, e, "root"), a;
  n.length === 2 && n[1].hasClass("tag") && (a = n.pop());
  for (var i = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (i.push(ka(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (i.push(ka(s, e)), s = []), i.push(n[o]));
  s.length > 0 && i.push(ka(s, e));
  var d;
  t ? (d = ka(Et(t, e, !0), e), d.classes = ["tag"], i.push(d)) : a && i.push(a);
  var h = U(["katex-html"], i);
  if (h.setAttribute("aria-hidden", "true"), d) {
    var p = d.children[0];
    p.style.height = ee(h.height + h.depth), h.depth && (p.style.verticalAlign = ee(-h.depth));
  }
  return h;
}
function Wu(r) {
  return new R0(r);
}
class J {
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
    this.classes.length > 0 && (e.className = Nn(this.classes));
    for (var n = 0; n < this.children.length; n++)
      if (this.children[n] instanceof $t && this.children[n + 1] instanceof $t) {
        for (var a = this.children[n].toText() + this.children[++n].toText(); this.children[n + 1] instanceof $t; )
          a += this.children[++n].toText();
        e.appendChild(new $t(a).toNode());
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
    this.classes.length > 0 && (e += ' class ="' + Lt(Nn(this.classes)) + '"'), e += ">";
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
class Uu {
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
    return e.setAttribute("width", ee(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + ee(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var rf = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), nf = /* @__PURE__ */ new Set(["mrow", "mtable"]), fr = function(e, t, n) {
  return ht[t][e] && ht[t][e].replace && e.charCodeAt(0) !== 55349 && !(Du.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = ht[t][e].replace), new $t(e);
}, Gs = function(e) {
  return e.length === 1 ? e[0] : new J("mrow", e);
}, af = {
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
}, js = (r, e) => {
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
  var n = r.mode, a = af[t];
  if (a)
    return typeof a == "function" ? a(r) : a;
  var i = r.text;
  if (rf.has(i))
    return null;
  if (ht[n][i]) {
    var s = ht[n][i].replace;
    s && (i = s);
  }
  var o = ls[t].fontName;
  return qs(i, o, n) ? ls[t].variant : null;
};
function $i(r) {
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
var cr = function(e, t, n) {
  if (e.length === 1) {
    var a = lt(e[0], t);
    return n && a instanceof J && a.type === "mo" && (a.setAttribute("lspace", "0em"), a.setAttribute("rspace", "0em")), [a];
  }
  for (var i = [], s, o = 0; o < e.length; o++) {
    var l = lt(e[o], t);
    if (l instanceof J && s instanceof J) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if ($i(l) && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && $i(s))
        l.children = [...s.children, ...l.children], i.pop();
      else if ((l.type === "msup" || l.type === "msub") && l.children.length >= 1 && (s.type === "mn" || $i(s))) {
        var d = l.children[0];
        d instanceof J && d.type === "mn" && (d.children = [...s.children, ...d.children], i.pop());
      } else if (s.type === "mi" && s.children.length === 1) {
        var h = s.children[0];
        if (h instanceof $t && h.text === "̸" && (l.type === "mo" || l.type === "mi" || l.type === "mn")) {
          var p = l.children[0];
          p instanceof $t && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "̸" + p.text.slice(1), i.pop());
        }
      }
    }
    i.push(l), s = l;
  }
  return i;
}, zn = function(e, t, n) {
  return Gs(cr(e, t, n));
}, lt = function(e, t) {
  if (!e)
    return new J("mrow");
  if (Y0[e.type])
    return Y0[e.type](e, t);
  throw new X("Got group of unknown type: '" + e.type + "'");
};
function Nl(r, e, t, n, a) {
  var i = cr(r, t), s;
  i.length === 1 && i[0] instanceof J && nf.has(i[0].type) ? s = i[0] : s = new J("mrow", i);
  var o = new J("annotation", [new $t(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new J("semantics", [s, o]), d = new J("math", [l]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var h = a ? "katex" : "katex-mathml";
  return U([h], [d]);
}
var sf = [
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
], Ml = [
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
], El = function(e, t) {
  return t.size < 2 ? e : sf[e - 1][t.size - 1];
};
class Jr {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Jr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Ml[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return Object.assign(t, e), new Jr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: El(this.textSize, e)
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
      sizeMultiplier: Ml[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = El(Jr.BASESIZE, e);
    return this.size === t && this.textSize === Jr.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== Jr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Jr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Hp(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Jr.BASESIZE = 6;
var Gu = function(e) {
  return new Jr({
    style: e.displayMode ? Ie.DISPLAY : Ie.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, ju = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = U(n, [e]);
  }
  return e;
}, of = function(e, t, n) {
  var a = Gu(n), i;
  if (n.output === "mathml")
    return Nl(e, t, a, n.displayMode, !0);
  if (n.output === "html") {
    var s = hs(e, a);
    i = U(["katex"], [s]);
  } else {
    var o = Nl(e, t, a, n.displayMode, !1), l = hs(e, a);
    i = U(["katex"], [o, l]);
  }
  return ju(i, n);
}, lf = function(e, t, n) {
  var a = Gu(n), i = hs(e, a), s = U(["katex"], [i]);
  return ju(s, n);
}, cf = {
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
}, si = function(e) {
  var t = new J("mo", [new $t(cf[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, uf = {
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
}, df = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), oi = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (df.has(l) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, h, p, m;
      if (d > 5)
        l === "widehat" || l === "widecheck" ? (h = 420, o = 2364, m = 0.42, p = l + "4") : (h = 312, o = 2340, m = 0.34, p = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][d];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], p = l + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], p = "tilde" + v);
      }
      var y = new Mn(p), A = new nn([y], {
        width: "100%",
        height: ee(m),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: En([], [A], t),
        minWidth: 0,
        height: m
      };
    } else {
      var $ = [], M = uf[l];
      if (!M)
        throw new Error('No SVG data for "' + l + '".');
      var [z, q, G] = M, Y = G / 1e3, N = z.length, ie, ue;
      if (N === 1) {
        if (M.length !== 4)
          throw new Error('Expected 4-tuple for single-path SVG data "' + l + '".');
        ie = ["hide-tail"], ue = [M[3]];
      } else if (N === 2)
        ie = ["halfarrow-left", "halfarrow-right"], ue = ["xMinYMin", "xMaxYMin"];
      else if (N === 3)
        ie = ["brace-left", "brace-center", "brace-right"], ue = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + N + " children.");
      for (var W = 0; W < N; W++) {
        var pe = new Mn(z[W]), _e = new nn([pe], {
          width: "400em",
          height: ee(Y),
          viewBox: "0 0 " + o + " " + G,
          preserveAspectRatio: ue[W] + " slice"
        }), ke = En([ie[W]], [_e], t);
        if (N === 1)
          return {
            span: ke,
            minWidth: q,
            height: Y
          };
        ke.style.height = ee(Y), $.push(ke);
      }
      return {
        span: U(["stretchy"], $, t),
        minWidth: q,
        height: Y
      };
    }
  }
  var {
    span: a,
    minWidth: i,
    height: s
  } = n();
  return a.height = s, a.style.height = ee(s), i > 0 && (a.style.minWidth = ee(i)), a;
}, hf = function(e, t, n, a, i) {
  var s, o = e.height + e.depth + n + a;
  if (/fbox|color|angl/.test(t)) {
    if (s = U(["stretchy", t], [], i), t === "fbox") {
      var l = i.color && i.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new rs({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new rs({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new nn(d, {
      width: "100%",
      height: ee(o)
    });
    s = En([], [h], i);
  }
  return s.height = o, s.style.height = ee(o), s;
}, pf = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, ff = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
function mf(r) {
  return r in pf;
}
function Be(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function li(r) {
  var e = ci(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function ci(r) {
  return r && (r.type === "atom" || ff.hasOwnProperty(r.type)) ? r : null;
}
var Ku = (r) => {
  if (r instanceof sr)
    return r;
  if (Pp(r) && r.children.length === 1)
    return Ku(r.children[0]);
}, Zu = (r, e) => {
  var t, n, a;
  r && r.type === "supsub" ? (n = Be(r.base, "accent"), t = n.base, r.base = t, a = Fp(Xe(r, e)), r.base = n) : (n = Be(r, "accent"), t = n.base);
  var i = Xe(t, e.havingCrampedStyle()), s = n.isShifty && sn(t), o = 0;
  if (s) {
    var l, d;
    o = (l = (d = Ku(i)) == null ? void 0 : d.skew) != null ? l : 0;
  }
  var h = n.label === "\\c", p = h ? i.height + i.depth : Math.min(i.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = oi(n, e), m = Ze({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + ee(2 * o) + ")",
          marginLeft: ee(2 * o)
        } : void 0
      }]
    });
  else {
    var v, y;
    n.label === "\\vec" ? (v = Vu("vec", e), y = Pu.vec[1]) : (v = ii({
      type: "textord",
      mode: n.mode,
      text: n.label
    }, e), v = Lp(v), v.italic = 0, y = v.width, h && (p += v.depth)), m = U(["accent-body"], [v]);
    var A = n.label === "\\textcircled";
    A && (m.classes.push("accent-full"), p = i.height);
    var $ = o;
    A || ($ -= y / 2), m.style.left = ee($), n.label === "\\textcircled" && (m.style.top = ".2em"), m = Ze({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: i
      }, {
        type: "kern",
        size: -p
      }, {
        type: "elem",
        elem: m
      }]
    });
  }
  var M = U(["mord", "accent"], [m], e);
  return a ? (a.children[0] = M, a.height = Math.max(M.height, a.height), a.classes[0] = "mord", a) : M;
}, gf = (r, e) => {
  var t = r.isStretchy ? si(r.label) : new J("mo", [fr(r.label, r.mode)]), n = new J("mover", [lt(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, bf = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
he({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  numArgs: 1,
  handler: (r, e) => {
    var t = Ga(e[0]), n = !bf.test(r.funcName), a = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: a,
      base: t
    };
  },
  htmlBuilder: Zu,
  mathmlBuilder: gf
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
    } = r, a = e[0];
    return {
      type: "accentUnder",
      mode: t.mode,
      label: n,
      base: a
    };
  },
  htmlBuilder: (r, e) => {
    var t = Xe(r.base, e), n = oi(r, e), a = r.label === "\\utilde" ? 0.12 : 0, i = Ze({
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
    return U(["mord", "accentunder"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = si(r.label), n = new J("munder", [lt(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Sa = (r) => {
  var e = new J("mpadded", r ? [r] : []);
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
    var t = e.style, n = e.havingStyle(t.sup()), a = N0(Xe(r.body, n, e), e), i = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    a.classes.push(i + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = N0(Xe(r.below, n, e), e), s.classes.push(i + "-arrow-pad"));
    var o = oi(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (a.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= a.depth);
    var h;
    if (s) {
      var p = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      h = Ze({
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
          shift: p
        }]
      });
    } else
      h = Ze({
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
    return U(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(r, e) {
    var t = si(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var a = Sa(lt(r.body, e));
      if (r.below) {
        var i = Sa(lt(r.below, e));
        n = new J("munderover", [t, i, a]);
      } else
        n = new J("mover", [t, a]);
    } else if (r.below) {
      var s = Sa(lt(r.below, e));
      n = new J("munder", [t, s]);
    } else
      n = Sa(), n = new J("mover", [t, n]);
    return n;
  }
});
function vf(r, e) {
  var t = Et(r.body, e, !0);
  return U([r.mclass], t, e);
}
function wf(r, e) {
  var t, n = cr(r.body, e);
  return r.mclass === "minner" ? t = new J("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new J("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new J("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (r.mclass === "mopen" || r.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t;
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
    } = r, a = e[0];
    return {
      type: "mclass",
      mode: t.mode,
      mclass: "m" + n.slice(5),
      body: At(a),
      isCharacterBox: sn(a)
    };
  },
  htmlBuilder: vf,
  mathmlBuilder: wf
});
var ui = (r) => {
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
      mclass: ui(e[0]),
      body: At(e[1]),
      isCharacterBox: sn(e[1])
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
    } = r, a = e[1], i = e[0], s;
    n !== "\\stackrel" ? s = ui(a) : s = "mrel";
    var o = {
      type: "op",
      mode: a.mode,
      limits: !0,
      alwaysHandleSupSub: !0,
      parentIsSupSub: !1,
      symbol: !1,
      suppressBaseShift: n !== "\\stackrel",
      body: At(a)
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
      isCharacterBox: sn(l)
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
      mclass: ui(e[0]),
      body: At(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = Et(r.body, e, !0), n = U([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = cr(r.body, e), n = new J("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var xf = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, zl = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display",
  resetFont: !0
}), Rl = (r) => r.type === "textord" && r.text === "@", yf = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function kf(r, e, t) {
  var n = xf[r];
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
function Sf(r) {
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
      throw new X("Expected \\\\ or \\cr or \\end", r.nextToken);
  }
  for (var n = [], a = [n], i = 0; i < e.length; i++) {
    for (var s = e[i], o = zl(), l = 0; l < s.length; l++)
      if (!Rl(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var d = li(s[l]).text, h = new Array(2);
        if (h[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, h[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !"=|.".includes(d)) if ("<>AV".includes(d))
          for (var p = 0; p < 2; p++) {
            for (var m = !0, v = l + 1; v < s.length; v++) {
              if (yf(s[v], d)) {
                m = !1, l = v;
                break;
              }
              if (Rl(s[v]))
                throw new X("Missing a " + d + " character to complete a CD arrow.", s[v]);
              h[p].body.push(s[v]);
            }
            if (m)
              throw new X("Missing a " + d + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new X('Expected one of "<>AV=|." after @', s[l]);
        var y = kf(d, h, r), A = {
          type: "styling",
          body: [y],
          mode: "math",
          style: "display",
          // CD is always displaystyle.
          resetFont: !0
        };
        n.push(A), o = zl();
      }
    i % 2 === 0 ? n.push(o) : n.shift(), n = [], a.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var $ = new Array(a[0].length).fill({
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
    cols: $,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(a.length + 1).fill([])
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
    var t = e.havingStyle(e.style.sup()), n = N0(Xe(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = ee(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new J("mrow", [lt(r.label, e)]);
    return t = new J("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new J("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
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
    var t = N0(Xe(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new J("mrow", [lt(r.fragment, e)]);
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
    } = r, n = Be(e[0], "ordgroup"), a = n.body, i = "", s = 0; s < a.length; s++) {
      var o = Be(a[s], "textord");
      i += o.text;
    }
    var l = parseInt(i), d;
    if (isNaN(l))
      throw new X("\\@char has non-numeric argument " + i);
    if (l < 0 || l >= 1114111)
      throw new X("\\@char with invalid code point " + i);
    return l <= 65535 ? d = String.fromCharCode(l) : (l -= 65536, d = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var _f = (r, e) => {
  var t = Et(r.body, e.withColor(r.color), !1);
  return ln(t);
}, Cf = (r, e) => {
  var t = cr(r.body, e.withColor(r.color)), n = new J("mstyle", t);
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
    } = r, n = Be(e[0], "color-token").color, a = e[1];
    return {
      type: "color",
      mode: t.mode,
      color: n,
      body: At(a)
    };
  },
  htmlBuilder: _f,
  mathmlBuilder: Cf
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
    } = r, a = Be(e[0], "color-token").color;
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
he({
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
      size: a && Be(a, "size").value
    };
  },
  // The following builders are called only at the top level,
  // not within tabular/array environments.
  htmlBuilder(r, e) {
    var t = U(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = ee(mt(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new J("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", ee(mt(r.size, e)))), t;
  }
});
var ps = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, Xu = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new X("Expected a control sequence", r);
  return e;
}, Af = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, Ju = (r, e, t, n) => {
  var a = r.gullet.macros.get(t.text);
  a == null && (t.noexpand = !0, a = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, a, n);
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
    if (ps[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = ps[n.text]), Be(e.parseFunction(), "internal");
    throw new X("Invalid token after macro prefix", n);
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
    } = r, n = e.gullet.popToken(), a = n.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(a))
      throw new X("Expected a control sequence", n);
    for (var i = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[i].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new X('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== i + 1)
          throw new X('Argument number "' + n.text + '" out of order');
        i++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new X("Expected a macro definition");
        o[i].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(a, {
      tokens: l,
      numArgs: i,
      delimiters: o
    }, t === ps[t]), {
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
    } = r, n = Xu(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var a = Af(e);
    return Ju(e, n, a, t === "\\\\globallet"), {
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
    } = r, n = Xu(e.gullet.popToken()), a = e.gullet.popToken(), i = e.gullet.popToken();
    return Ju(e, n, i, t === "\\\\globalfuture"), e.gullet.pushToken(i), e.gullet.pushToken(a), {
      type: "internal",
      mode: e.mode
    };
  }
});
var U0 = function(e, t, n) {
  var a = ht.math[e] && ht.math[e].replace, i = qs(a || e, t, n);
  if (!i)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return i;
}, Ks = function(e, t, n, a) {
  var i = n.havingBaseStyle(t), s = U(a.concat(i.sizingClasses(n)), [e], n), o = i.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = i.sizeMultiplier, s;
}, Yu = function(e, t, n) {
  var a = t.havingBaseStyle(n), i = (1 - t.sizeMultiplier / a.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = ee(i), e.height -= i, e.depth += i;
}, $f = function(e, t, n, a, i, s) {
  var o = qt(e, "Main-Regular", i, a), l = Ks(o, t, a, s);
  return Yu(l, a, t), l;
}, Tf = function(e, t, n, a) {
  return qt(e, "Size" + t + "-Regular", n, a);
}, Qu = function(e, t, n, a, i, s) {
  var o = Tf(e, t, i, a), l = Ks(U(["delimsizing", "size" + t], [o], a), Ie.TEXT, a, s);
  return n && Yu(l, a, Ie.TEXT), l;
}, Ti = function(e, t, n) {
  var a;
  t === "Size1-Regular" ? a = "delim-size1" : a = "delim-size4";
  var i = U(["delimsizinginner", a], [U([], [qt(e, t, n)])]);
  return {
    type: "elem",
    elem: i
  };
}, Ii = function(e, t, n) {
  var a = Br["Size4-Regular"][e.charCodeAt(0)] ? Br["Size4-Regular"][e.charCodeAt(0)][4] : Br["Size1-Regular"][e.charCodeAt(0)][4], i = new Mn("inner", Mp(e, Math.round(1e3 * t))), s = new nn([i], {
    width: ee(a),
    height: ee(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + ee(a),
    viewBox: "0 0 " + 1e3 * a + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = En([], [s], n);
  return o.height = t, o.style.height = ee(t), o.style.width = ee(a), {
    type: "elem",
    elem: o
  };
}, fs = 8e-3, _a = {
  type: "kern",
  size: -1 * fs
}, If = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), Nf = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), e1 = function(e, t, n, a, i, s) {
  var o, l, d, h, p = "", m = 0;
  o = d = h = e, l = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : If.has(e) ? (d = "∣", p = "vert", m = 333) : Nf.has(e) ? (d = "∥", p = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", v = "Size4-Regular", p = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", v = "Size4-Regular", p = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", v = "Size4-Regular", p = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", v = "Size4-Regular", p = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", v = "Size4-Regular", p = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", v = "Size4-Regular", p = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", v = "Size4-Regular", p = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", v = "Size4-Regular", p = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", v = "Size4-Regular");
  var y = U0(o, v, i), A = y.height + y.depth, $ = U0(d, v, i), M = $.height + $.depth, z = U0(h, v, i), q = z.height + z.depth, G = 0, Y = 1;
  if (l !== null) {
    var N = U0(l, v, i);
    G = N.height + N.depth, Y = 2;
  }
  var ie = A + q + G, ue = Math.max(0, Math.ceil((t - ie) / (Y * M))), W = ie + ue * Y * M, pe = a.fontMetrics().axisHeight;
  n && (pe *= a.sizeMultiplier);
  var _e = W / 2 - pe, ke = [];
  if (p.length > 0) {
    var L = W - A - q, V = Math.round(W * 1e3), re = Ep(p, Math.round(L * 1e3)), O = new Mn(p, re), j = ee(m / 1e3), E = ee(V / 1e3), Q = new nn([O], {
      width: j,
      height: E,
      viewBox: "0 0 " + m + " " + V
    }), Ne = En([], [Q], a);
    Ne.height = V / 1e3, Ne.style.width = j, Ne.style.height = E, ke.push({
      type: "elem",
      elem: Ne
    });
  } else {
    if (ke.push(Ti(h, v, i)), ke.push(_a), l === null) {
      var Me = W - A - q + 2 * fs;
      ke.push(Ii(d, Me, a));
    } else {
      var He = (W - A - q - G) / 2 + 2 * fs;
      ke.push(Ii(d, He, a)), ke.push(_a), ke.push(Ti(l, v, i)), ke.push(_a), ke.push(Ii(d, He, a));
    }
    ke.push(_a), ke.push(Ti(o, v, i));
  }
  var Ve = a.havingBaseStyle(Ie.TEXT), Ue = Ze({
    positionType: "bottom",
    positionData: _e,
    children: ke
  });
  return Ks(U(["delimsizing", "mult"], [Ue], Ve), Ie.TEXT, a, s);
}, Ni = 80, Mi = 0.08, Ei = function(e, t, n, a, i) {
  var s = Np(e, a, n), o = new Mn(e, s), l = new nn([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: ee(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return En(["hide-tail"], [l], i);
}, Mf = function(e, t) {
  var n = t.havingBaseSizing(), a = i1("\\surd", e * n.sizeMultiplier, a1, n), i = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l, d, h, p;
  return a.type === "small" ? (h = 1e3 + 1e3 * s + Ni, e < 1 ? i = 1 : e < 1.4 && (i = 0.7), l = (1 + s + Mi) / i, d = (1 + s) / i, o = Ei("sqrtMain", l, h, s, t), o.style.minWidth = "0.853em", p = 0.833 / i) : a.type === "large" ? (h = (1e3 + Ni) * K0[a.size], d = (K0[a.size] + s) / i, l = (K0[a.size] + s + Mi) / i, o = Ei("sqrtSize" + a.size, l, h, s, t), o.style.minWidth = "1.02em", p = 1 / i) : (l = e + s + Mi, d = e + s, h = Math.floor(1e3 * e + s) + Ni, o = Ei("sqrtTall", l, h, s, t), o.style.minWidth = "0.742em", p = 1.056), o.height = d, o.style.height = ee(l), {
    span: o,
    advanceWidth: p,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * i
  };
}, t1 = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), Ef = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), r1 = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), K0 = [0, 1.2, 1.8, 2.4, 3], n1 = function(e, t, n, a, i) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), t1.has(e) || r1.has(e))
    return Qu(e, t, !1, n, a, i);
  if (Ef.has(e))
    return e1(e, K0[t], !1, n, a, i);
  throw new X("Illegal delimiter: '" + e + "'");
}, zf = [{
  type: "small",
  style: Ie.SCRIPTSCRIPT
}, {
  type: "small",
  style: Ie.SCRIPT
}, {
  type: "small",
  style: Ie.TEXT
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
}], Rf = [{
  type: "small",
  style: Ie.SCRIPTSCRIPT
}, {
  type: "small",
  style: Ie.SCRIPT
}, {
  type: "small",
  style: Ie.TEXT
}, {
  type: "stack"
}], a1 = [{
  type: "small",
  style: Ie.SCRIPTSCRIPT
}, {
  type: "small",
  style: Ie.SCRIPT
}, {
  type: "small",
  style: Ie.TEXT
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
}], Of = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, i1 = function(e, t, n, a) {
  for (var i = Math.min(2, 3 - a.style.size), s = i; s < n.length; s++) {
    var o = n[s];
    if (o.type === "stack")
      break;
    var l = U0(e, Of(o), "math"), d = l.height + l.depth;
    if (o.type === "small") {
      var h = a.havingBaseStyle(o.style);
      d *= h.sizeMultiplier;
    }
    if (d > t)
      return o;
  }
  return n[n.length - 1];
}, ms = function(e, t, n, a, i, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  r1.has(e) ? o = zf : t1.has(e) ? o = a1 : o = Rf;
  var l = i1(e, t, o, a);
  return l.type === "small" ? $f(e, l.style, n, a, i, s) : l.type === "large" ? Qu(e, l.size, n, a, i, s) : e1(e, t, n, a, i, s);
}, zi = function(e, t, n, a, i, s) {
  var o = a.fontMetrics().axisHeight * a.sizeMultiplier, l = 901, d = 5 / a.fontMetrics().ptPerEm, h = Math.max(t - o, n + o), p = Math.max(
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
  return ms(e, p, !0, a, i, s);
}, Ol = {
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
}, Bf = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function Bl(r) {
  return "isMiddle" in r;
}
function di(r, e) {
  var t = ci(r);
  if (t && Bf.has(t.text))
    return t;
  throw t ? new X("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new X("Invalid delimiter type '" + r.type + "'", r);
}
he({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  numArgs: 1,
  argTypes: ["primitive"],
  handler: (r, e) => {
    var t = di(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Ol[r.funcName].size,
      mclass: Ol[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? U([r.mclass]) : n1(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(fr(r.delim, r.mode));
    var t = new J("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = ee(K0[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function Dl(r) {
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
      throw new X("\\current@color set to non-string in \\right");
    return {
      type: "leftright-right",
      mode: r.parser.mode,
      delim: di(e[0], r).text,
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
    var t = di(e[0], r), n = r.parser;
    ++n.leftrightDepth;
    var a = n.parseExpression(!1);
    --n.leftrightDepth, n.expect("\\right", !1);
    var i = Be(n.parseFunction(), "leftright-right");
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
    Dl(r);
    for (var t = Et(r.body, e, !0, ["mopen", "mclose"]), n = 0, a = 0, i = !1, s = 0; s < t.length; s++) {
      var o = t[s];
      Bl(o) ? i = !0 : (n = Math.max(t[s].height, n), a = Math.max(t[s].depth, a));
    }
    n *= e.sizeMultiplier, a *= e.sizeMultiplier;
    var l;
    if (r.left === "." ? l = Q0(e, ["mopen"]) : l = zi(r.left, n, a, e, r.mode, ["mopen"]), t.unshift(l), i)
      for (var d = 1; d < t.length; d++) {
        var h = t[d];
        if (Bl(h)) {
          var p = h.isMiddle;
          t[d] = zi(p.delim, n, a, p.options, r.mode, []);
        }
      }
    var m;
    if (r.right === ".")
      m = Q0(e, ["mclose"]);
    else {
      var v = r.rightColor ? e.withColor(r.rightColor) : e;
      m = zi(r.right, n, a, v, r.mode, ["mclose"]);
    }
    return t.push(m), U(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    Dl(r);
    var t = cr(r.body, e);
    if (r.left !== ".") {
      var n = new J("mo", [fr(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var a = new J("mo", [fr(r.right, r.mode)]);
      a.setAttribute("fence", "true"), r.rightColor && a.setAttribute("mathcolor", r.rightColor), t.push(a);
    }
    return Gs(t);
  }
});
he({
  type: "middle",
  names: ["\\middle"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = di(e[0], r);
    if (!r.parser.leftrightDepth)
      throw new X("\\middle without preceding \\left", t);
    return {
      type: "middle",
      mode: r.parser.mode,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => {
    var t;
    return r.delim === "." ? t = Q0(e, []) : (t = n1(r.delim, 1, e, r.mode, []), t.isMiddle = {
      delim: r.delim,
      options: e
    }), t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? fr("|", "text") : fr(r.delim, r.mode), n = new J("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Df = (r, e) => {
  var t = N0(Xe(r.body, e), e), n = r.label.slice(1), a = e.sizeMultiplier, i, s, o = sn(r.body);
  if (n === "sout")
    i = U(["stretchy", "sout"]), i.height = e.fontMetrics().defaultRuleThickness / a, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = mt({
      number: 0.6,
      unit: "pt"
    }, e), d = mt({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    a = a / h.sizeMultiplier;
    var p = t.height + t.depth + l + d;
    t.style.paddingLeft = ee(p / 2 + l);
    var m = Math.floor(1e3 * p * a), v = Tp(m), y = new nn([new Mn("phase", v)], {
      width: "400em",
      height: ee(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    i = En(["hide-tail"], [y], e), i.style.height = ee(p), s = t.depth + l + d;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var A, $, M = 0;
    /box/.test(n) ? (M = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
    ), A = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : M), $ = A) : n === "angl" ? (M = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), A = 4 * M, $ = Math.max(0, 0.25 - t.depth)) : (A = o ? 0.2 : 0, $ = A), i = hf(t, n, A, $, e), /fbox|boxed|fcolorbox/.test(n) ? (i.style.borderStyle = "solid", i.style.borderWidth = ee(M)) : n === "angl" && M !== 0.049 && (i.style.borderTopWidth = ee(M), i.style.borderRightWidth = ee(M)), s = t.depth + $, r.backgroundColor && (i.style.backgroundColor = r.backgroundColor, r.borderColor && (i.style.borderColor = r.borderColor));
  }
  var z;
  if (r.backgroundColor)
    z = Ze({
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
    var q = /cancel|phase/.test(n) ? ["svg-align"] : [];
    z = Ze({
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
          wrapperClasses: q
        }
      ]
    });
  }
  return /cancel/.test(n) && (z.height = t.height, z.depth = t.depth), /cancel/.test(n) && !o ? U(["mord", "cancel-lap"], [z], e) : U(["mord"], [z], e);
}, Lf = (r, e) => {
  var t, n = new J(r.label.includes("colorbox") ? "mpadded" : "menclose", [lt(r.body, e)]);
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
        n.setAttribute("style", "border: " + ee(a) + " solid " + r.borderColor);
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
      funcName: a
    } = r, i = Be(e[0], "color-token").color, s = e[1];
    return {
      type: "enclose",
      mode: n.mode,
      label: a,
      backgroundColor: i,
      body: s
    };
  },
  htmlBuilder: Df,
  mathmlBuilder: Lf
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
      funcName: a
    } = r, i = Be(e[0], "color-token").color, s = Be(e[1], "color-token").color, o = e[2];
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
    } = r, a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
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
    var a = e[0];
    return {
      type: "enclose",
      mode: t.mode,
      label: n,
      body: a
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
var s1 = {};
function Lr(r) {
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
    s1[t[l]] = o;
  i && (J0[e] = i), s && (Y0[e] = s);
}
var o1 = {};
function g(r, e) {
  o1[r] = e;
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
class ir {
  // used in \noexpand
  constructor(e, t) {
    this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t;
  }
  /**
   * Given a pair of tokens (this and endToken), compute a `Token` encompassing
   * the whole input range enclosed by these two.
   */
  range(e, t) {
    return new ir(t, Jt.range(this, e));
  }
}
function Ll(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var hi = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new X("{" + r.envName + "} can be used only in display mode.");
}, Ff = /* @__PURE__ */ new Set(["gather", "gather*"]);
function Zs(r) {
  if (!r.includes("ed"))
    return !r.includes("*");
}
function Bn(r, e, t) {
  var {
    hskipBeforeAndAfter: n,
    addJot: a,
    cols: i,
    arraystretch: s,
    colSeparationType: o,
    autoTag: l,
    singleRow: d,
    emptySingleRow: h,
    maxNumCols: p,
    leqno: m
  } = e;
  if (r.gullet.beginGroup(), d || r.gullet.macros.set("\\cr", "\\\\\\relax"), !s) {
    var v = r.gullet.expandMacroAsText("\\arraystretch");
    if (v == null)
      s = 1;
    else if (s = parseFloat(v), !s || s < 0)
      throw new X("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var y = [], A = [y], $ = [], M = [], z = l != null ? [] : void 0;
  function q() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function G() {
    z && (r.gullet.macros.get("\\df@tag") ? (z.push(r.subparse([new ir("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : z.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (q(), M.push(Ll(r)); ; ) {
    var Y = r.parseExpression(!1, d ? "\\end" : "\\\\");
    r.gullet.endGroup(), r.gullet.beginGroup();
    var N = {
      type: "ordgroup",
      mode: r.mode,
      body: Y
    };
    t && (N = {
      type: "styling",
      mode: r.mode,
      style: t,
      resetFont: !0,
      body: [N]
    }), y.push(N);
    var ie = r.fetch().text;
    if (ie === "&") {
      if (p && y.length === p) {
        if (d || o)
          throw new X("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (ie === "\\end") {
      G(), y.length === 1 && N.type === "styling" && N.body.length === 1 && N.body[0].type === "ordgroup" && N.body[0].body.length === 0 && (A.length > 1 || !h) && A.pop(), M.length < A.length + 1 && M.push([]);
      break;
    } else if (ie === "\\\\") {
      r.consume();
      var ue = void 0;
      r.gullet.future().text !== " " && (ue = r.parseSizeGroup(!0)), $.push(ue ? ue.value : null), G(), M.push(Ll(r)), y = [], A.push(y), q();
    } else
      throw new X("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: a,
    arraystretch: s,
    body: A,
    cols: i,
    rowGaps: $,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: M,
    colSeparationType: o,
    tags: z,
    leqno: m
  };
}
function Xs(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var Fr = function(e, t) {
  var n, a, i = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(i), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
  ), p = 1 / t.fontMetrics().ptPerEm, m = 5 * p;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(Ie.SCRIPT).sizeMultiplier;
    m = 0.2778 * (v / t.sizeMultiplier);
  }
  var y = e.colSeparationType === "CD" ? mt({
    number: 3,
    unit: "ex"
  }, t) : 12 * p, A = 3 * p, $ = e.arraystretch * y, M = 0.7 * $, z = 0.3 * $, q = 0;
  function G(dr) {
    for (var Ar = 0; Ar < dr.length; ++Ar)
      Ar > 0 && (q += 0.25), d.push({
        pos: q,
        isDashed: dr[Ar]
      });
  }
  for (G(s[0]), n = 0; n < e.body.length; ++n) {
    var Y = e.body[n], N = M, ie = z;
    o < Y.length && (o = Y.length);
    var ue = {
      cells: new Array(Y.length),
      height: 0,
      depth: 0,
      pos: 0
    };
    for (a = 0; a < Y.length; ++a) {
      var W = Xe(Y[a], t);
      ie < W.depth && (ie = W.depth), N < W.height && (N = W.height), ue.cells[a] = W;
    }
    var pe = e.rowGaps[n], _e = 0;
    pe && (_e = mt(pe, t), _e > 0 && (_e += z, ie < _e && (ie = _e), _e = 0)), e.addJot && n < e.body.length - 1 && (ie += A), ue.height = N, ue.depth = ie, q += N, ue.pos = q, q += ie + _e, l[n] = ue, G(s[n + 1]);
  }
  var ke = q / 2 + t.fontMetrics().axisHeight, L = e.cols || [], V = [], re, O, j = [];
  if (e.tags && e.tags.some((dr) => dr))
    for (n = 0; n < i; ++n) {
      var E = l[n], Q = E.pos - ke, Ne = e.tags[n], Me = void 0;
      Ne === !0 ? Me = U(["eqn-num"], [], t) : Ne === !1 ? Me = U([], [], t) : Me = U([], Et(Ne, t, !0), t), Me.depth = E.depth, Me.height = E.height, j.push({
        type: "elem",
        elem: Me,
        shift: Q
      });
    }
  for (
    a = 0, O = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    a < o || O < L.length;
    ++a, ++O
  ) {
    for (var He, Ve = L[O], Ue = !0; ((jt = Ve) == null ? void 0 : jt.type) === "separator"; ) {
      var jt;
      if (Ue || (re = U(["arraycolsep"], []), re.style.width = ee(t.fontMetrics().doubleRuleSep), V.push(re)), Ve.separator === "|" || Ve.separator === ":") {
        var Ft = Ve.separator === "|" ? "solid" : "dashed", we = U(["vertical-separator"], [], t);
        we.style.height = ee(q), we.style.borderRightWidth = ee(h), we.style.borderRightStyle = Ft, we.style.margin = "0 " + ee(-h / 2);
        var Re = q - ke;
        Re && (we.style.verticalAlign = ee(-Re)), V.push(we);
      } else
        throw new X("Invalid separator type: " + Ve.separator);
      O++, Ve = L[O], Ue = !1;
    }
    if (!(a >= o)) {
      var Pe = void 0;
      if (a > 0 || e.hskipBeforeAndAfter) {
        var se, Vr;
        Pe = (se = (Vr = Ve) == null ? void 0 : Vr.pregap) != null ? se : m, Pe !== 0 && (re = U(["arraycolsep"], []), re.style.width = ee(Pe), V.push(re));
      }
      var Sr = [];
      for (n = 0; n < i; ++n) {
        var xt = l[n], Qt = xt.cells[a];
        if (Qt) {
          var Ln = xt.pos - ke;
          Qt.depth = xt.depth, Qt.height = xt.height, Sr.push({
            type: "elem",
            elem: Qt,
            shift: Ln
          });
        }
      }
      var cn = Ze({
        positionType: "individualShift",
        children: Sr
      }), Fn = U(["col-align-" + (((He = Ve) == null ? void 0 : He.align) || "c")], [cn]);
      if (V.push(Fn), a < o - 1 || e.hskipBeforeAndAfter) {
        var mr, _r;
        Pe = (mr = (_r = Ve) == null ? void 0 : _r.postgap) != null ? mr : m, Pe !== 0 && (re = U(["arraycolsep"], []), re.style.width = ee(Pe), V.push(re));
      }
    }
  }
  var er = U(["mtable"], V);
  if (d.length > 0) {
    for (var Pn = I0("hline", t, h), un = I0("hdashline", t, h), ur = [{
      type: "elem",
      elem: er,
      shift: 0
    }]; d.length > 0; ) {
      var It = d.pop(), Bt = It.pos - ke;
      It.isDashed ? ur.push({
        type: "elem",
        elem: un,
        shift: Bt
      }) : ur.push({
        type: "elem",
        elem: Pn,
        shift: Bt
      });
    }
    er = Ze({
      positionType: "individualShift",
      children: ur
    });
  }
  if (j.length === 0)
    return U(["mord"], [er], t);
  var tr = Ze({
    positionType: "individualShift",
    children: j
  }), Cr = U(["tag"], [tr], t);
  return ln([er, Cr]);
}, Pf = {
  c: "center ",
  l: "left ",
  r: "right "
}, Pr = function(e, t) {
  for (var n = [], a = new J("mtd", [], ["mtr-glue"]), i = new J("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], d = 0; d < o.length; d++)
      l.push(new J("mtd", [lt(o[d], t)]));
    e.tags && e.tags[s] && (l.unshift(a), l.push(a), e.leqno ? l.unshift(i) : l.push(i)), n.push(new J("mtr", l));
  }
  var h = new J("mtable", n), p = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", ee(p));
  var m = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var y = e.cols, A = "", $ = !1, M = 0, z = y.length;
    y[0].type === "separator" && (m += "top ", M = 1), y[y.length - 1].type === "separator" && (m += "bottom ", z -= 1);
    for (var q = M; q < z; q++) {
      var G = y[q];
      G.type === "align" ? (v += Pf[G.align], $ && (A += "none "), $ = !0) : G.type === "separator" && $ && (A += G.separator === "|" ? "solid " : "dashed ", $ = !1);
    }
    h.setAttribute("columnalign", v.trim()), /[sd]/.test(A) && h.setAttribute("columnlines", A.trim());
  }
  if (e.colSeparationType === "align") {
    for (var Y = e.cols || [], N = "", ie = 1; ie < Y.length; ie++)
      N += ie % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", N.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var ue = "", W = e.hLinesBeforeRow;
  m += W[0].length > 0 ? "left " : "", m += W[W.length - 1].length > 0 ? "right " : "";
  for (var pe = 1; pe < W.length - 1; pe++)
    ue += W[pe].length === 0 ? "none " : W[pe][0] ? "dashed " : "solid ";
  return /[sd]/.test(ue) && h.setAttribute("rowlines", ue.trim()), m !== "" && (h = new J("menclose", [h]), h.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (h = new J("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, l1 = function(e, t) {
  e.envName.includes("ed") || hi(e);
  var n = [], a = e.envName === "split", i = Bn(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: a ? void 0 : Zs(e.envName),
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
      var p = Be(t[0].body[h], "textord");
      d += p.text;
    }
    s = Number(d), o = s * 2;
  }
  var m = !o;
  i.body.forEach(function($) {
    for (var M = 1; M < $.length; M += 2) {
      var z = Be($[M], "styling"), q = Be(z.body[0], "ordgroup");
      q.body.unshift(l);
    }
    if (m)
      o < $.length && (o = $.length);
    else {
      var G = $.length / 2;
      if (s < G)
        throw new X("Too many math in a row: " + ("expected " + s + ", but got " + G), $[0]);
    }
  });
  for (var v = 0; v < o; ++v) {
    var y = "r", A = 0;
    v % 2 === 1 ? y = "l" : v > 0 && m && (A = 1), n[v] = {
      type: "align",
      align: y,
      pregap: A,
      postgap: 0
    };
  }
  return i.colSeparationType = m ? "align" : "alignat", i;
};
Lr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = ci(e[0]), n = t ? [e[0]] : Be(e[0], "ordgroup").body, a = n.map(function(s) {
      var o = li(s), l = o.text;
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
      throw new X("Unknown column alignment: " + l, s);
    }), i = {
      cols: a,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: a.length
    };
    return Bn(r.parser, i, Xs(r.envName));
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
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
      var a = r.parser;
      if (a.consumeSpaces(), a.fetch().text === "[") {
        if (a.consume(), a.consumeSpaces(), t = a.fetch().text, !"lcr".includes(t))
          throw new X("Expected l or c or r", a.nextToken);
        a.consume(), a.consumeSpaces(), a.expect("]"), a.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var i = Bn(r.parser, n, Xs(r.envName)), s = Math.max(0, ...i.body.map((o) => o.length));
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
  htmlBuilder: Fr,
  mathmlBuilder: Pr
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
    }, t = Bn(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
});
Lr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = ci(e[0]), n = t ? [e[0]] : Be(e[0], "ordgroup").body, a = n.map(function(o) {
      var l = li(o), d = l.text;
      if ("lc".includes(d))
        return {
          type: "align",
          align: d
        };
      throw new X("Unknown column alignment: " + d, o);
    });
    if (a.length > 1)
      throw new X("{subarray} can contain only one column");
    var i = {
      cols: a,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    }, s = Bn(r.parser, i, "script");
    if (s.body.length > 0 && s.body[0].length > 1)
      throw new X("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
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
    }, t = Bn(r.parser, e, Xs(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.includes("r") ? "." : "\\{",
      right: r.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
});
Lr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: l1,
  htmlBuilder: Fr,
  mathmlBuilder: Pr
});
Lr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Ff.has(r.envName) && hi(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: Zs(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return Bn(r.parser, e, "display");
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
});
Lr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: l1,
  htmlBuilder: Fr,
  mathmlBuilder: Pr
});
Lr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    hi(r);
    var e = {
      autoTag: Zs(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return Bn(r.parser, e, "display");
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
});
Lr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return hi(r), Sf(r.parser);
  },
  htmlBuilder: Fr,
  mathmlBuilder: Pr
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
    throw new X(r.funcName + " valid only within array environment");
  }
});
var Fl = s1;
he({
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
      throw new X("Invalid environment name", a);
    for (var i = "", s = 0; s < a.body.length; ++s)
      i += Be(a.body[s], "textord").text;
    if (n === "\\begin") {
      if (!Fl.hasOwnProperty(i))
        throw new X("No such environment: " + i, a);
      var o = Fl[i], {
        args: l,
        optArgs: d
      } = t.parseArguments("\\begin{" + i + "}", o), h = {
        mode: t.mode,
        envName: i,
        parser: t
      }, p = o.handler(h, l, d);
      t.expect("\\end", !1);
      var m = t.nextToken, v = Be(t.parseFunction(), "environment");
      if (v.name !== i)
        throw new X("Mismatch: \\begin{" + i + "} matched by \\end{" + v.name + "}", m);
      return p;
    }
    return {
      type: "environment",
      mode: t.mode,
      name: i,
      nameGroup: a
    };
  }
});
var Vf = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return Xe(r.body, n);
}, Hf = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return lt(r.body, n);
}, Pl = {
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
    } = r, a = Ga(e[0]), i = n in Pl ? Pl[n] : n;
    return {
      type: "font",
      mode: t.mode,
      font: i.slice(1),
      body: a
    };
  },
  htmlBuilder: Vf,
  mathmlBuilder: Hf
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
      mclass: ui(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: sn(n)
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
var qf = (r, e) => {
  var t = e.style, n = t.fracNum(), a = t.fracDen(), i;
  i = e.havingStyle(n);
  var s = Xe(r.numer, i, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  i = e.havingStyle(a);
  var d = Xe(r.denom, i, e), h, p, m;
  r.hasBarLine ? (r.barSize ? (p = mt(r.barSize, e), h = I0("frac-line", e, p)) : h = I0("frac-line", e), p = h.height, m = h.height) : (h = null, p = 0, m = e.fontMetrics().defaultRuleThickness);
  var v, y, A;
  t.size === Ie.DISPLAY.size ? (v = e.fontMetrics().num1, p > 0 ? y = 3 * m : y = 7 * m, A = e.fontMetrics().denom1) : (p > 0 ? (v = e.fontMetrics().num2, y = m) : (v = e.fontMetrics().num3, y = 3 * m), A = e.fontMetrics().denom2);
  var $;
  if (h) {
    var z = e.fontMetrics().axisHeight;
    v - s.depth - (z + 0.5 * p) < y && (v += y - (v - s.depth - (z + 0.5 * p))), z - 0.5 * p - (d.height - A) < y && (A += y - (z - 0.5 * p - (d.height - A)));
    var q = -(z - 0.5 * p);
    $ = Ze({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: A
      }, {
        type: "elem",
        elem: h,
        shift: q
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  } else {
    var M = v - s.depth - (d.height - A);
    M < y && (v += 0.5 * (y - M), A += 0.5 * (y - M)), $ = Ze({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: A
      }, {
        type: "elem",
        elem: s,
        shift: -v
      }]
    });
  }
  i = e.havingStyle(t), $.height *= i.sizeMultiplier / e.sizeMultiplier, $.depth *= i.sizeMultiplier / e.sizeMultiplier;
  var G;
  t.size === Ie.DISPLAY.size ? G = e.fontMetrics().delim1 : t.size === Ie.SCRIPTSCRIPT.size ? G = e.havingStyle(Ie.SCRIPT).fontMetrics().delim2 : G = e.fontMetrics().delim2;
  var Y, N;
  return r.leftDelim == null ? Y = Q0(e, ["mopen"]) : Y = ms(r.leftDelim, G, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? N = U([]) : r.rightDelim == null ? N = Q0(e, ["mclose"]) : N = ms(r.rightDelim, G, !0, e.havingStyle(t), r.mode, ["mclose"]), U(["mord"].concat(i.sizingClasses(e)), [Y, U(["mfrac"], [$]), N], e);
}, Wf = (r, e) => {
  var t = new J("mfrac", [lt(r.numer, e), lt(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = mt(r.barSize, e);
    t.setAttribute("linethickness", ee(n));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var a = [];
    if (r.leftDelim != null) {
      var i = new J("mo", [new $t(r.leftDelim.replace("\\", ""))]);
      i.setAttribute("fence", "true"), a.push(i);
    }
    if (a.push(t), r.rightDelim != null) {
      var s = new J("mo", [new $t(r.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), a.push(s);
    }
    return Gs(a);
  }
  return t;
}, c1 = (r, e) => {
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
    return d || n.startsWith("\\d") ? h = "display" : n.startsWith("\\t") && (h = "text"), c1({
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
  htmlBuilder: qf,
  mathmlBuilder: Wf
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
var Vl = ["display", "text", "script", "scriptscript"], Hl = function(e) {
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
    } = r, n = e[4], a = e[5], i = Ga(e[0]), s = i.type === "atom" && i.family === "open" ? Hl(i.text) : null, o = Ga(e[1]), l = o.type === "atom" && o.family === "close" ? Hl(o.text) : null, d = Be(e[2], "size"), h, p = null;
    d.isBlank ? h = !0 : (p = d.value, h = p.number > 0);
    var m = null, v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var y = Be(v.body[0], "textord");
        m = Vl[Number(y.text)];
      }
    } else
      v = Be(v, "textord"), m = Vl[Number(v.text)];
    return c1({
      type: "genfrac",
      mode: t.mode,
      numer: n,
      denom: a,
      continued: !1,
      hasBarLine: h,
      barSize: p,
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
      token: a
    } = r;
    return {
      type: "infix",
      mode: t.mode,
      replaceWith: "\\\\abovefrac",
      size: Be(e[0], "size").value,
      token: a
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
    } = r, a = e[0], i = Be(e[1], "infix").size;
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
var u1 = (r, e) => {
  var t = e.style, n, a;
  r.type === "supsub" ? (n = r.sup ? Xe(r.sup, e.havingStyle(t.sup()), e) : Xe(r.sub, e.havingStyle(t.sub()), e), a = Be(r.base, "horizBrace")) : a = Be(r, "horizBrace");
  var i = Xe(a.base, e.havingBaseStyle(Ie.DISPLAY)), s = oi(a, e), o;
  if (a.isOver ? o = Ze({
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
  }) : o = Ze({
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
    var l = U(["minner", a.isOver ? "mover" : "munder"], [o], e);
    a.isOver ? o = Ze({
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
    }) : o = Ze({
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
  return U(["minner", a.isOver ? "mover" : "munder"], [o], e);
}, Uf = (r, e) => {
  var t = si(r.label);
  return new J(r.isOver ? "mover" : "munder", [lt(r.base, e), t]);
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
  htmlBuilder: u1,
  mathmlBuilder: Uf
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
    } = r, n = e[1], a = Be(e[0], "url").url;
    return t.settings.isTrusted({
      command: "\\href",
      url: a
    }) ? {
      type: "href",
      mode: t.mode,
      href: a,
      body: At(n)
    } : t.formatUnsupportedCmd("\\href");
  },
  htmlBuilder: (r, e) => {
    var t = Et(r.body, e, !1);
    return Kp(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = zn(r.body, e);
    return t instanceof J || (t = new J("mrow", [t])), t.setAttribute("href", r.href), t;
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
    } = r, n = Be(e[0], "url").url;
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
    return ln(t);
  },
  mathmlBuilder(r, e) {
    return new J("mrow", cr(r.body, e.withFont("")));
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
      token: a
    } = r, i = Be(e[0], "raw").string, s = e[1];
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
          var p = d[h], m = p.indexOf("=");
          if (m < 0)
            throw new X("\\htmlData key/value '" + p + "' missing equals sign");
          var v = p.slice(0, m), y = p.slice(m + 1);
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
      body: At(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = Et(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var a = U(n, t, e);
    for (var i in r.attributes)
      i !== "class" && r.attributes.hasOwnProperty(i) && a.setAttribute(i, r.attributes[i]);
    return a;
  },
  mathmlBuilder: (r, e) => zn(r.body, e)
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
    return ln(t);
  },
  mathmlBuilder: (r, e) => zn(r.mathml, e)
});
var Ri = function(e) {
  if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e))
    return {
      number: +e,
      unit: "bp"
    };
  var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
  if (!t)
    throw new X("Invalid size: '" + e + "' in \\includegraphics");
  var n = {
    number: +(t[1] + t[2]),
    // sign + magnitude, cast to number
    unit: t[3]
  };
  if (!zu(n))
    throw new X("Invalid unit: '" + n.unit + "' in \\includegraphics.");
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
      for (var l = Be(t[0], "raw").string, d = l.split(","), h = 0; h < d.length; h++) {
        var p = d[h].split("=");
        if (p.length === 2) {
          var m = p[1].trim();
          switch (p[0].trim()) {
            case "alt":
              o = m;
              break;
            case "width":
              a = Ri(m);
              break;
            case "height":
              i = Ri(m);
              break;
            case "totalheight":
              s = Ri(m);
              break;
            default:
              throw new X("Invalid key: '" + p[0] + "' in \\includegraphics.");
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
      width: a,
      height: i,
      totalheight: s,
      src: v
    } : n.formatUnsupportedCmd("\\includegraphics");
  },
  htmlBuilder: (r, e) => {
    var t = mt(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = mt(r.totalheight, e) - t);
    var a = 0;
    r.width.number > 0 && (a = mt(r.width, e));
    var i = {
      height: ee(t + n)
    };
    a > 0 && (i.width = ee(a)), n > 0 && (i.verticalAlign = ee(-n));
    var s = new Bp(r.src, r.alt, i);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new J("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = mt(r.height, e), a = 0;
    if (r.totalheight.number > 0 && (a = mt(r.totalheight, e) - n, t.setAttribute("valign", ee(-a))), t.setAttribute("height", ee(n + a)), r.width.number > 0) {
      var i = mt(r.width, e);
      t.setAttribute("width", ee(i));
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
    } = r, a = Be(e[0], "size");
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
    return Fu(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = mt(r.dimension, e);
    return new Uu(t);
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
    r.alignment === "clap" ? (t = U([], [Xe(r.body, e)]), t = U(["inner"], [t], e)) : t = U(["inner"], [Xe(r.body, e)]);
    var n = U(["fix"], []), a = U([r.alignment], [t, n], e), i = U(["strut"]);
    return i.style.height = ee(a.height + a.depth), a.depth && (i.style.verticalAlign = ee(-a.depth)), a.children.unshift(i), a = U(["thinbox"], [a], e), U(["mord", "vbox"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new J("mpadded", [lt(r.body, e)]);
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
he({
  type: "text",
  // Doesn't matter what this is.
  names: ["\\)", "\\]"],
  numArgs: 0,
  allowedInText: !0,
  allowedInMath: !1,
  handler(r, e) {
    throw new X("Mismatched " + r.funcName);
  }
});
var ql = (r, e) => {
  switch (e.style.size) {
    case Ie.DISPLAY.size:
      return r.display;
    case Ie.TEXT.size:
      return r.text;
    case Ie.SCRIPT.size:
      return r.script;
    case Ie.SCRIPTSCRIPT.size:
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
    var t = ql(r, e), n = Et(t, e, !1);
    return ln(n);
  },
  mathmlBuilder: (r, e) => {
    var t = ql(r, e);
    return zn(t, e);
  }
});
var d1 = (r, e, t, n, a, i, s) => {
  r = U([], [r]);
  var o = t && sn(t), l, d;
  if (e) {
    var h = Xe(e, n.havingStyle(a.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var p = Xe(t, n.havingStyle(a.sub()), n);
    l = {
      elem: p,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - p.height)
    };
  }
  var m;
  if (d && l) {
    var v = n.fontMetrics().bigOpSpacing5 + l.elem.height + l.elem.depth + l.kern + r.depth + s;
    m = Ze({
      positionType: "bottom",
      positionData: v,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: ee(-i)
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
        marginLeft: ee(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else if (l) {
    var y = r.height - s;
    m = Ze({
      positionType: "top",
      positionData: y,
      children: [{
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }, {
        type: "elem",
        elem: l.elem,
        marginLeft: ee(-i)
      }, {
        type: "kern",
        size: l.kern
      }, {
        type: "elem",
        elem: r
      }]
    });
  } else if (d) {
    var A = r.depth + s;
    m = Ze({
      positionType: "bottom",
      positionData: A,
      children: [{
        type: "elem",
        elem: r
      }, {
        type: "kern",
        size: d.kern
      }, {
        type: "elem",
        elem: d.elem,
        marginLeft: ee(i)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else
    return r;
  var $ = [m];
  if (l && i !== 0 && !o) {
    var M = U(["mspace"], [], n);
    M.style.marginRight = ee(i), $.unshift(M);
  }
  return U(["mop", "op-limits"], $, n);
}, h1 = /* @__PURE__ */ new Set(["\\smallint"]), p1 = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = Be(r.base, "op"), a = !0) : i = Be(r, "op");
  var s = e.style, o = !1;
  s.size === Ie.DISPLAY.size && i.symbol && !h1.has(i.name) && (o = !0);
  var l, d;
  if (i.symbol) {
    var h = o ? "Size2-Regular" : "Size1-Regular", p = "";
    if ((i.name === "\\oiint" || i.name === "\\oiiint") && (p = i.name.slice(1), i.name = p === "oiint" ? "\\iint" : "\\iiint"), l = qt(i.name, h, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), d = l.italic, p.length > 0) {
      var m = Vu(p + "Size" + (o ? "2" : "1"), e);
      l = Ze({
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
      }), i.name = "\\" + p, l.classes.unshift("mop"), l.italic = d;
    }
  } else if (i.body) {
    var v = Et(i.body, e, !0);
    v.length === 1 && v[0] instanceof sr ? (l = v[0], l.classes[0] = "mop") : l = U(["mop"], v, e);
  } else {
    for (var y = [], A = 1; A < i.name.length; A++)
      y.push(Ws(i.name[A], i.mode, e));
    l = U(["mop"], y, e);
  }
  var $ = 0, M = 0;
  if ((l instanceof sr || i.name === "\\oiint" || i.name === "\\oiiint") && !i.suppressBaseShift) {
    var z;
    $ = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, M = (z = l.italic) != null ? z : 0;
  }
  return a ? d1(l, t, n, e, s, M, $) : ($ && (l.style.position = "relative", l.style.top = ee($)), l);
}, Gf = (r, e) => {
  var t;
  if (r.symbol)
    t = new J("mo", [fr(r.name, r.mode)]), h1.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new J("mo", cr(r.body, e));
  else {
    t = new J("mi", [new $t(r.name.slice(1))]);
    var n = new J("mo", [fr("⁡", "text")]);
    r.parentIsSupSub ? t = new J("mrow", [t, n]) : t = Wu([t, n]);
  }
  return t;
}, jf = {
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
    } = r, a = n;
    return a.length === 1 && (a = jf[a]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: a
    };
  },
  htmlBuilder: p1,
  mathmlBuilder: Gf
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
var Kf = {
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
    return n.length === 1 && (n = Kf[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  }
});
var f1 = (r, e) => {
  var t, n, a = !1, i;
  r.type === "supsub" ? (t = r.sup, n = r.sub, i = Be(r.base, "operatorname"), a = !0) : i = Be(r, "operatorname");
  var s;
  if (i.body.length > 0) {
    for (var o = i.body.map((p) => {
      var m = "text" in p ? p.text : void 0;
      return typeof m == "string" ? {
        type: "textord",
        mode: p.mode,
        text: m
      } : p;
    }), l = Et(o, e.withFont("mathrm"), !0), d = 0; d < l.length; d++) {
      var h = l[d];
      h instanceof sr && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = U(["mop"], l, e);
  } else
    s = U(["mop"], [], e);
  return a ? d1(s, t, n, e, e.style, 0, 0) : s;
}, Zf = (r, e) => {
  for (var t = cr(r.body, e.withFont("mathrm")), n = !0, a = 0; a < t.length; a++) {
    var i = t[a];
    if (!(i instanceof Uu)) if (i instanceof J)
      switch (i.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        // Do nothing yet.
        case "mo": {
          var s = i.children[0];
          i.children.length === 1 && s instanceof $t ? s.text = s.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
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
  var l = new J("mi", t);
  l.setAttribute("mathvariant", "normal");
  var d = new J("mo", [fr("⁡", "text")]);
  return r.parentIsSupSub ? new J("mrow", [l, d]) : Wu([l, d]);
};
he({
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
      body: At(a),
      alwaysHandleSupSub: n === "\\operatornamewithlimits",
      limits: !1,
      parentIsSupSub: !1
    };
  },
  htmlBuilder: f1,
  mathmlBuilder: Zf
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
o0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? ln(Et(r.body, e, !1)) : U(["mord"], Et(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return zn(r.body, e, !0);
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
    var t = Xe(r.body, e.havingCrampedStyle()), n = I0("overline-line", e), a = e.fontMetrics().defaultRuleThickness, i = Ze({
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
    return U(["mord", "overline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new J("mo", [new $t("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new J("mover", [lt(r.body, e), t]);
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
    return ln(t);
  },
  mathmlBuilder: (r, e) => {
    var t = cr(r.body, e);
    return new J("mphantom", t);
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
    var t = U(["inner"], [Xe(r.body, e.withPhantom())]), n = U(["fix"], []);
    return U(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = cr(At(r.body), e), n = new J("mphantom", t), a = new J("mpadded", [n]);
    return a.setAttribute("width", "0px"), a;
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
    } = r, n = Be(e[0], "size").value, a = e[1];
    return {
      type: "raisebox",
      mode: t.mode,
      dy: n,
      body: a
    };
  },
  htmlBuilder(r, e) {
    var t = Xe(r.body, e), n = mt(r.dy, e);
    return Ze({
      positionType: "shift",
      positionData: -n,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new J("mpadded", [lt(r.body, e)]), n = r.dy.number + r.dy.unit;
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
    } = r, a = t[0], i = Be(e[0], "size"), s = Be(e[1], "size");
    return {
      type: "rule",
      mode: n.mode,
      shift: a && Be(a, "size").value,
      width: i.value,
      height: s.value
    };
  },
  htmlBuilder(r, e) {
    var t = U(["mord", "rule"], [], e), n = mt(r.width, e), a = mt(r.height, e), i = r.shift ? mt(r.shift, e) : 0;
    return t.style.borderRightWidth = ee(n), t.style.borderTopWidth = ee(a), t.style.bottom = ee(i), t.width = n, t.height = a + i, t.depth = -i, t.maxFontSize = a * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = mt(r.width, e), n = mt(r.height, e), a = r.shift ? mt(r.shift, e) : 0, i = e.color && e.getColor() || "black", s = new J("mspace");
    s.setAttribute("mathbackground", i), s.setAttribute("width", ee(t)), s.setAttribute("height", ee(n));
    var o = new J("mpadded", [s]);
    return a >= 0 ? o.setAttribute("height", ee(a)) : (o.setAttribute("height", ee(a)), o.setAttribute("depth", ee(-a))), o.setAttribute("voffset", ee(a)), o;
  }
});
function m1(r, e, t) {
  for (var n = Et(r, e, !1), a = e.sizeMultiplier / t.sizeMultiplier, i = 0; i < n.length; i++) {
    var s = n[i].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[i].classes, e.sizingClasses(t)) : n[i].classes[s + 1] === "reset-size" + e.size && (n[i].classes[s + 1] = "reset-size" + t.size), n[i].height *= a, n[i].depth *= a;
  }
  return ln(n);
}
var Wl = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], Xf = (r, e) => {
  var t = e.havingSize(r.size);
  return m1(r.body, t, e);
};
he({
  type: "sizing",
  names: Wl,
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
      size: Wl.indexOf(n) + 1,
      body: i
    };
  },
  htmlBuilder: Xf,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = cr(r.body, t), a = new J("mstyle", n);
    return a.setAttribute("mathsize", ee(t.sizeMultiplier)), a;
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
    } = r, a = !1, i = !1, s = t[0] && Be(t[0], "ordgroup");
    if (s)
      for (var o, l = 0; l < s.body.length; ++l) {
        var d = s.body[l];
        if (o = li(d).text, o === "t")
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
    var t = U([], [Xe(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth)
      return U(["mord", "smash"], [t], e);
    if (t.children)
      for (var n = 0; n < t.children.length; n++)
        r.smashHeight && (t.children[n].height = 0), r.smashDepth && (t.children[n].depth = 0);
    var a = Ze({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    });
    return U(["mord"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new J("mpadded", [lt(r.body, e)]);
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
    } = r, a = t[0], i = e[0];
    return {
      type: "sqrt",
      mode: n.mode,
      body: i,
      index: a
    };
  },
  htmlBuilder(r, e) {
    var t = Xe(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = N0(t, e);
    var n = e.fontMetrics(), a = n.defaultRuleThickness, i = a;
    e.style.id < Ie.TEXT.id && (i = e.fontMetrics().xHeight);
    var s = a + i / 4, o = t.height + t.depth + s + a, {
      span: l,
      ruleWidth: d,
      advanceWidth: h
    } = Mf(o, e), p = l.height - d;
    p > t.height + t.depth + s && (s = (s + p - t.height - t.depth) / 2);
    var m = l.height - t.height - s - d;
    t.style.paddingLeft = ee(h);
    var v = Ze({
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
      var y = e.havingStyle(Ie.SCRIPTSCRIPT), A = Xe(r.index, y, e), $ = 0.6 * (v.height - v.depth), M = Ze({
        positionType: "shift",
        positionData: -$,
        children: [{
          type: "elem",
          elem: A
        }]
      }), z = U(["root"], [M]);
      return U(["mord", "sqrt"], [z, v], e);
    } else
      return U(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new J("mroot", [lt(t, e), lt(n, e)]) : new J("msqrt", [lt(t, e)]);
  }
});
var gs = {
  display: Ie.DISPLAY,
  text: Ie.TEXT,
  script: Ie.SCRIPT,
  scriptscript: Ie.SCRIPTSCRIPT
};
function Jf(r) {
  return r in gs;
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
      parser: a
    } = r, i = a.parseExpression(!0, t), s = n.slice(1, n.length - 5);
    if (!Jf(s))
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
    var t = gs[r.style], n = e.havingStyle(t);
    return r.resetFont && (n = n.withFont("")), m1(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = gs[r.style], n = e.havingStyle(t);
    r.resetFont && (n = n.withFont(""));
    var a = cr(r.body, n), i = new J("mstyle", a), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i;
  }
});
var Yf = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var a = n.limits && (t.style.size === Ie.DISPLAY.size || n.alwaysHandleSupSub);
      return a ? p1 : null;
    } else if (n.type === "operatorname") {
      var i = n.alwaysHandleSupSub && (t.style.size === Ie.DISPLAY.size || n.limits);
      return i ? f1 : null;
    } else {
      if (n.type === "accent")
        return sn(n.base) ? Zu : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? u1 : null;
      } else
        return null;
    }
  else return null;
};
o0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = Yf(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: a,
      sub: i
    } = r, s = Xe(n, e), o, l, d = e.fontMetrics(), h = 0, p = 0, m = n && sn(n);
    if (a) {
      var v = e.havingStyle(e.style.sup());
      o = Xe(a, v, e), m || (h = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (i) {
      var y = e.havingStyle(e.style.sub());
      l = Xe(i, y, e), m || (p = s.depth + y.fontMetrics().subDrop * y.sizeMultiplier / e.sizeMultiplier);
    }
    var A;
    e.style === Ie.DISPLAY ? A = d.sup1 : e.style.cramped ? A = d.sup3 : A = d.sup2;
    var $ = e.sizeMultiplier, M = ee(0.5 / d.ptPerEm / $), z = null;
    if (l) {
      var q = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      if (s instanceof sr || q) {
        var G;
        z = ee(-((G = s.italic) != null ? G : 0));
      }
    }
    var Y;
    if (o && l) {
      h = Math.max(h, A, o.depth + 0.25 * d.xHeight), p = Math.max(p, d.sub2);
      var N = d.defaultRuleThickness, ie = 4 * N;
      if (h - o.depth - (l.height - p) < ie) {
        p = ie - (h - o.depth) + l.height;
        var ue = 0.8 * d.xHeight - (h - o.depth);
        ue > 0 && (h += ue, p -= ue);
      }
      var W = [{
        type: "elem",
        elem: l,
        shift: p,
        marginRight: M,
        marginLeft: z
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: M
      }];
      Y = Ze({
        positionType: "individualShift",
        children: W
      });
    } else if (l) {
      p = Math.max(p, d.sub1, l.height - 0.8 * d.xHeight);
      var pe = [{
        type: "elem",
        elem: l,
        marginLeft: z,
        marginRight: M
      }];
      Y = Ze({
        positionType: "shift",
        positionData: p,
        children: pe
      });
    } else if (o)
      h = Math.max(h, A, o.depth + 0.25 * d.xHeight), Y = Ze({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: M
        }]
      });
    else
      throw new Error("supsub must have either sup or sub.");
    var _e = ds(s, "right") || "mord";
    return U([_e], [s, U(["msupsub"], [Y])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, a;
    r.base && r.base.type === "horizBrace" && (a = !!r.sup, a === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var i = [lt(r.base, e)];
    r.sub && i.push(lt(r.sub, e)), r.sup && i.push(lt(r.sup, e));
    var s;
    if (t)
      s = n ? "mover" : "munder";
    else if (r.sub)
      if (r.sup) {
        var d = r.base;
        d && d.type === "op" && d.limits && e.style === Ie.DISPLAY || d && d.type === "operatorname" && d.alwaysHandleSupSub && (e.style === Ie.DISPLAY || d.limits) ? s = "munderover" : s = "msubsup";
      } else {
        var l = r.base;
        l && l.type === "op" && l.limits && (e.style === Ie.DISPLAY || l.alwaysHandleSupSub) || l && l.type === "operatorname" && l.alwaysHandleSupSub && (l.limits || e.style === Ie.DISPLAY) ? s = "munder" : s = "msub";
      }
    else {
      var o = r.base;
      o && o.type === "op" && o.limits && (e.style === Ie.DISPLAY || o.alwaysHandleSupSub) || o && o.type === "operatorname" && o.alwaysHandleSupSub && (o.limits || e.style === Ie.DISPLAY) ? s = "mover" : s = "msup";
    }
    return new J(s, i);
  }
});
o0({
  type: "atom",
  htmlBuilder(r, e) {
    return Ws(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new J("mo", [fr(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = js(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var g1 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
o0({
  type: "mathord",
  htmlBuilder(r, e) {
    return ii(r, e);
  },
  mathmlBuilder(r, e) {
    var t = new J("mi", [fr(r.text, r.mode, e)]), n = js(r, e) || "italic";
    return n !== g1[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
o0({
  type: "textord",
  htmlBuilder(r, e) {
    return ii(r, e);
  },
  mathmlBuilder(r, e) {
    var t = fr(r.text, r.mode, e), n = js(r, e) || "normal", a;
    return r.mode === "text" ? a = new J("mtext", [t]) : /[0-9]/.test(r.text) ? a = new J("mn", [t]) : r.text === "\\prime" ? a = new J("mo", [t]) : a = new J("mi", [t]), n !== g1[a.type] && a.setAttribute("mathvariant", n), a;
  }
});
var Oi = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Bi = {
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
    if (Bi.hasOwnProperty(r.text)) {
      var t = Bi[r.text].className || "";
      if (r.mode === "text") {
        var n = ii(r, e);
        return n.classes.push(t), n;
      } else
        return U(["mspace", t], [Ws(r.text, r.mode, e)], e);
    } else {
      if (Oi.hasOwnProperty(r.text))
        return U(["mspace", Oi[r.text]], [], e);
      throw new X('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (Bi.hasOwnProperty(r.text))
      t = new J("mtext", [new $t(" ")]);
    else {
      if (Oi.hasOwnProperty(r.text))
        return new J("mspace");
      throw new X('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Ul = () => {
  var r = new J("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
o0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new J("mtable", [new J("mtr", [Ul(), new J("mtd", [zn(r.body, e)]), Ul(), new J("mtd", [zn(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Gl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, jl = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, Qf = {
  "\\textit": "textit",
  "\\textup": "textup"
}, Kl = (r, e) => {
  var t = r.font;
  if (t) {
    if (Gl[t])
      return e.withTextFontFamily(Gl[t]);
    if (jl[t])
      return e.withTextFontWeight(jl[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(Qf[t]);
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
    } = r, a = e[0];
    return {
      type: "text",
      mode: t.mode,
      body: At(a),
      font: n
    };
  },
  htmlBuilder(r, e) {
    var t = Kl(r, e), n = Et(r.body, t, !0);
    return U(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = Kl(r, e);
    return zn(r.body, t);
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
    var t = Xe(r.body, e), n = I0("underline-line", e), a = e.fontMetrics().defaultRuleThickness, i = Ze({
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
    return U(["mord", "underline"], [i], e);
  },
  mathmlBuilder(r, e) {
    var t = new J("mo", [new $t("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new J("munder", [lt(r.body, e), t]);
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
    var t = Xe(r.body, e), n = e.fontMetrics().axisHeight, a = 0.5 * (t.height - n - (t.depth + n));
    return Ze({
      positionType: "shift",
      positionData: a,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new J("mpadded", [lt(r.body, e)], ["vcenter"]);
    return new J("mrow", [t]);
  }
});
he({
  type: "verb",
  names: ["\\verb"],
  numArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    throw new X("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = Zl(r), n = [], a = e.havingStyle(e.style.text()), i = 0; i < t.length; i++) {
      var s = t[i];
      s === "~" && (s = "\\textasciitilde"), n.push(qt(s, "Typewriter-Regular", r.mode, a, ["mord", "texttt"]));
    }
    return U(["mord", "text"].concat(a.sizingClasses(e)), Lu(n), a);
  },
  mathmlBuilder(r, e) {
    var t = new $t(Zl(r)), n = new J("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var Zl = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Tn = Hu, b1 = `[ \r
	]`, e4 = "\\\\[a-zA-Z@]+", t4 = "\\\\[^\uD800-\uDFFF]", r4 = "(" + e4 + ")" + b1 + "*", n4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, bs = "[̀-ͯ]", a4 = new RegExp(bs + "+$"), i4 = "(" + b1 + "+)|" + // whitespace
(n4 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(bs + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(bs + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + r4) + // \macroName + spaces
("|" + t4 + ")");
class Xl {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(i4, "g"), this.catcodes = {
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
      return new ir("EOF", new Jt(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new X("Unexpected character: '" + e[t] + "'", new ir(e[t], new Jt(this, t, t + 1)));
    var a = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[a] === 14) {
      var i = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return i === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = i + 1, this.lex();
    }
    return new ir(a, new Jt(this, t, this.tokenRegex.lastIndex));
  }
}
class s4 {
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
      throw new X("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
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
var o4 = o1;
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
var Jl = {
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
        throw new X("\\char` missing argument");
      n = e.text.charCodeAt(0);
    }
  else
    t = 10;
  if (t) {
    if (n = Jl[e.text], n == null || n >= t)
      throw new X("Invalid base-" + t + " digit " + e.text);
    for (var a; (a = Jl[r.future().text]) != null && a < t; )
      n *= t, n += a, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var Js = (r, e, t, n) => {
  var a = r.consumeArg().tokens;
  if (a.length !== 1)
    throw new X("\\newcommand's first argument must be a macro name");
  var i = a[0].text, s = r.isDefined(i);
  if (s && !e)
    throw new X("\\newcommand{" + i + "} attempting to redefine " + (i + "; use \\renewcommand"));
  if (!s && !t)
    throw new X("\\renewcommand{" + i + "} when command " + i + " does not yet exist; use \\newcommand");
  var o = 0;
  if (a = r.consumeArg().tokens, a.length === 1 && a[0].text === "[") {
    for (var l = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      l += d.text, d = r.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new X("Invalid number of arguments: " + l);
    o = parseInt(l), a = r.consumeArg().tokens;
  }
  return s && n || r.macros.set(i, {
    tokens: a,
    numArgs: o
  }), "";
};
g("\\newcommand", (r) => Js(r, !1, !0, !1));
g("\\renewcommand", (r) => Js(r, !0, !1, !1));
g("\\providecommand", (r) => Js(r, !0, !0, !0));
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
  return console.log(e, r.macros.get(t), Tn[t], ht.math[t], ht.text[t]), "";
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
var Yl = {
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
}, l4 = /* @__PURE__ */ new Set(["bin", "rel"]);
g("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in Yl ? e = Yl[t] : (t.slice(0, 4) === "\\not" || t in ht.math && l4.has(ht.math[t].group)) && (e = "\\dotsb"), e;
});
var Ys = {
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
  return e in Ys ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(r) {
  var e = r.future().text;
  return e in Ys && e !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(r) {
  var e = r.future().text;
  return e in Ys ? "\\@cdots\\," : "\\@cdots";
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
    throw new X("Multiple \\tag");
  return "\\gdef\\df@tag{\\text{#1}}";
});
g("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
g("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
g("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
g("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
g("\\newline", "\\\\\\relax");
g("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
var v1 = ee(Br["Main-Regular"][84][1] - 0.7 * Br["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + v1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + v1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var w1 = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, a = e.consumeArg().tokens, i = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var l = (p) => (m) => {
    r && (m.macros.set("|", s), a.length && m.macros.set("\\|", o));
    var v = p;
    if (!p && a.length) {
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
g("\\bra@ket", w1(!1));
g("\\bra@set", w1(!0));
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
var x1 = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class c4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new s4(o4, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new Xl(e, this.settings);
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
    return this.pushToken(new ir("EOF", n.loc)), this.pushTokens(a), new ir("", Jt.range(t, n));
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
          throw new X("Extra }", i);
      } else if (i.text === "EOF")
        throw new X("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", i);
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
        throw new X("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], a = 0; a < n.length; a++) {
        var i = this.popToken();
        if (n[a] !== i.text)
          throw new X("Use of the macro doesn't match its definition", i);
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
      throw new X("Too many expansions: infinite loop or need to increase maxExpand setting");
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
        throw new X("Undefined control sequence: " + n);
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
            throw new X("Incomplete placeholder at end of macro body", l);
          if (l = i[--o], l.text === "#")
            i.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            i.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new X("Not a valid argument number", l);
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
    return this.macros.has(e) ? this.expandTokens([new ir(e)]) : void 0;
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
      for (var o = new Xl(a, this.settings), l = [], d = o.lex(); d.text !== "EOF"; )
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
    return this.macros.has(e) || Tn.hasOwnProperty(e) || ht.math.hasOwnProperty(e) || ht.text.hasOwnProperty(e) || x1.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Tn.hasOwnProperty(e) && !Tn[e].primitive;
  }
}
var Ql = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Ca = Object.freeze({
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
}), Di = {
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
}, ec = {
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
class pi {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new c4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
  }
  /**
   * Checks a result to make sure it has the right type, and throws an
   * appropriate error otherwise.
   */
  expect(e, t) {
    if (t === void 0 && (t = !0), this.fetch().text !== e)
      throw new X("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
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
    this.consume(), this.gullet.pushToken(new ir("}")), this.gullet.pushTokens(e);
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
      if (pi.endOfExpression.has(a.text) || t && a.text === t || e && Tn[a.text] && Tn[a.text].infix)
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
          throw new X("only one infix operator per group", i.token);
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
      throw new X("Expected group after '" + n + "'", t);
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
          throw new X("Limit controls must follow a math operator", i);
        this.consume();
      } else if (i.text === "^") {
        if (n)
          throw new X("Double superscript", i);
        n = this.handleSupSubscript("superscript");
      } else if (i.text === "_") {
        if (a)
          throw new X("Double subscript", i);
        a = this.handleSupSubscript("subscript");
      } else if (i.text === "'") {
        if (n)
          throw new X("Double superscript", i);
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
      } else if (Ca[i.text]) {
        var l = Ql.test(i.text), d = [];
        for (d.push(new ir(Ca[i.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!Ca[h] || Ql.test(h) !== l)
            break;
          d.unshift(new ir(Ca[h])), this.consume();
        }
        var p = this.subparse(d);
        l ? a = {
          type: "ordgroup",
          mode: "math",
          body: p
        } : n = {
          type: "ordgroup",
          mode: "math",
          body: p
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
    var n = this.fetch(), a = n.text, i = Tn[a];
    if (!i)
      return null;
    if (this.consume(), t && t !== "atom" && !i.allowedInArgument)
      throw new X("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !i.allowedInText)
      throw new X("Can't use function '" + a + "' in text mode", n);
    if (this.mode === "math" && i.allowedInMath === !1)
      throw new X("Can't use function '" + a + "' in math mode", n);
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
    }, o = Tn[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new X("No function handler for " + e);
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
      var d, h = (d = t.argTypes) == null ? void 0 : d[l], p = l < a;
      ("primitive" in t && t.primitive && h == null || // \sqrt expands into primitive if optional argument doesn't exist
      t.type === "sqrt" && l === 1 && o[0] == null) && (h = "primitive");
      var m = this.parseGroupOfType("argument to '" + e + "'", h, p);
      if (p)
        o.push(m);
      else if (m != null)
        s.push(m);
      else
        throw new X("Null argument, please report this as a bug");
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
          throw new X("A primitive argument cannot be optional");
        var s = this.parseGroup(e);
        if (s == null)
          throw new X("Expected group as " + e, this.fetch());
        return s;
      }
      case "original":
      case void 0:
        return this.parseArgumentGroup(n);
      default:
        throw new X("Unknown group type as " + e, this.fetch());
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
      throw new X("Invalid " + t + ": '" + n.text + "'", n);
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
      throw new X("Invalid color: '" + t.text + "'", t);
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
      throw new X("Invalid size: '" + t.text + "'", t);
    var i = {
      number: +(a[1] + a[2]),
      // sign + magnitude, cast to number
      unit: a[3]
    };
    if (!zu(i))
      throw new X("Invalid unit: '" + i.unit + "'", t);
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
        loc: Jt.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: a === "\\begingroup" || void 0
      };
    } else if (i = this.parseFunction(t, e) || this.parseSymbol(), i == null && a[0] === "\\" && !x1.hasOwnProperty(a)) {
      if (this.settings.throwOnError)
        throw new X("Undefined control sequence: " + a, n);
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
              loc: Jt.range(a, o),
              text: "---"
            }), t -= 2) : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Jt.range(a, s),
              text: "--"
            }), t -= 1);
          }
          (i === "'" || i === "`") && s.text === i && (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: Jt.range(a, s),
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
        throw new X(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: a
      };
    }
    ec.hasOwnProperty(t[0]) && !ht[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = ec[t[0]] + t.slice(1));
    var i = a4.exec(t);
    i && (t = t.substring(0, i.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (ht[this.mode][t]) {
      this.settings.strict && this.mode === "math" && ns.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = ht[this.mode][t].group, l = Jt.range(e), d;
      mf(o) ? d = {
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
      this.settings.strict && (Eu(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Jt.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), i)
      for (var h = 0; h < i[0].length; h++) {
        var p = i[0][h];
        if (!Di[p])
          throw new X("Unknown accent ' " + p + "'", e);
        var m = Di[p][this.mode] || Di[p].text;
        if (!m)
          throw new X("Accent " + p + " unsupported in " + this.mode + " mode", e);
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
pi.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var Qs = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new pi(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var a = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new X("\\tag works only in display equations");
    a = [{
      type: "tag",
      mode: "text",
      body: a,
      tag: n.subparse([new ir("\\df@tag")])
    }];
  }
  return a;
}, y1 = function(e, t, n) {
  t.textContent = "";
  var a = eo(e, n).toNode();
  t.appendChild(a);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), y1 = function() {
  throw new X("KaTeX doesn't work in quirks mode.");
});
var u4 = function(e, t) {
  var n = eo(e, t).toMarkup();
  return n;
}, d4 = function(e, t) {
  var n = new Ps(t);
  return Qs(e, n);
}, k1 = function(e, t, n) {
  if (n.throwOnError || !(e instanceof X))
    throw e;
  var a = U(["katex-error"], [new sr(t)]);
  return a.setAttribute("title", e.toString()), a.setAttribute("style", "color:" + n.errorColor), a;
}, eo = function(e, t) {
  var n = new Ps(t);
  try {
    var a = Qs(e, n);
    return of(a, e, n);
  } catch (i) {
    return k1(i, e, n);
  }
}, h4 = function(e, t) {
  var n = new Ps(t);
  try {
    var a = Qs(e, n);
    return lf(a, e, n);
  } catch (i) {
    return k1(i, e, n);
  }
}, p4 = "0.17.0", f4 = {
  Span: O0,
  Anchor: ni,
  SymbolNode: sr,
  SvgNode: nn,
  PathNode: Mn,
  LineNode: rs
}, m4 = {
  /**
   * Current KaTeX version
   */
  version: p4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: y1,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: u4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: X,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: Qi,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: d4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: eo,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: h4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Vp,
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
  __domTree: f4
};
const g4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, b4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, v4 = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function w4(r = {}) {
  return {
    extensions: [
      x4(r, tc(r, !1)),
      y4(r, tc(r, !0))
    ]
  };
}
function tc(r, e) {
  return (t) => m4.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function x4(r, e) {
  const t = r && r.nonStandard, n = t ? b4 : g4;
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
function y4(r, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(t, n) {
      const a = t.match(v4);
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
function k4(r) {
  if (typeof r == "function" && (r = {
    highlight: r
  }), !r || typeof r.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), {
    async: !!r.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = rc(e.lang);
      if (r.async)
        return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then(nc(e));
      const n = r.highlight(e.text, t, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      nc(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, n) {
        typeof e == "object" && (n = e.escaped, t = e.lang, e = e.text);
        const a = rc(t), i = a ? r.langPrefix + ic(a) : r.emptyLangClass, s = i ? ` class="${i}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : ic(e, !0)}
</code></pre>`;
      }
    }
  };
}
function rc(r) {
  return (r || "").match(/\S*/)[0];
}
function nc(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = !0, r.text = e);
  };
}
const S1 = /[&<>"']/, S4 = new RegExp(S1.source, "g"), _1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, _4 = new RegExp(_1.source, "g"), C4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, ac = (r) => C4[r];
function ic(r, e) {
  if (e) {
    if (S1.test(r))
      return r.replace(S4, ac);
  } else if (_1.test(r))
    return r.replace(_4, ac);
  return r;
}
var Li, sc;
function A4() {
  if (sc) return Li;
  sc = 1;
  function r(k) {
    return k instanceof Map ? k.clear = k.delete = k.set = function() {
      throw new Error("map is read-only");
    } : k instanceof Set && (k.add = k.clear = k.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(k), Object.getOwnPropertyNames(k).forEach((B) => {
      const te = k[B], $e = typeof te;
      ($e === "object" || $e === "function") && !Object.isFrozen(te) && r(te);
    }), k;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(B) {
      B.data === void 0 && (B.data = {}), this.data = B.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(k) {
    return k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(k, ...B) {
    const te = /* @__PURE__ */ Object.create(null);
    for (const $e in k)
      te[$e] = k[$e];
    return B.forEach(function($e) {
      for (const tt in $e)
        te[tt] = $e[tt];
    }), /** @type {T} */
    te;
  }
  const a = "</span>", i = (k) => !!k.scope, s = (k, { prefix: B }) => {
    if (k.startsWith("language:"))
      return k.replace("language:", "language-");
    if (k.includes(".")) {
      const te = k.split(".");
      return [
        `${B}${te.shift()}`,
        ...te.map(($e, tt) => `${$e}${"_".repeat(tt + 1)}`)
      ].join(" ");
    }
    return `${B}${k}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(B, te) {
      this.buffer = "", this.classPrefix = te.classPrefix, B.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(B) {
      this.buffer += t(B);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(B) {
      if (!i(B)) return;
      const te = s(
        B.scope,
        { prefix: this.classPrefix }
      );
      this.span(te);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(B) {
      i(B) && (this.buffer += a);
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
    span(B) {
      this.buffer += `<span class="${B}">`;
    }
  }
  const l = (k = {}) => {
    const B = { children: [] };
    return Object.assign(B, k), B;
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
    add(B) {
      this.top.children.push(B);
    }
    /** @param {string} scope */
    openNode(B) {
      const te = l({ scope: B });
      this.add(te), this.stack.push(te);
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
    walk(B) {
      return this.constructor._walk(B, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(B, te) {
      return typeof te == "string" ? B.addText(te) : te.children && (B.openNode(te), te.children.forEach(($e) => this._walk(B, $e)), B.closeNode(te)), B;
    }
    /**
     * @param {Node} node
     */
    static _collapse(B) {
      typeof B != "string" && B.children && (B.children.every((te) => typeof te == "string") ? B.children = [B.children.join("")] : B.children.forEach((te) => {
        d._collapse(te);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(B) {
      super(), this.options = B;
    }
    /**
     * @param {string} text
     */
    addText(B) {
      B !== "" && this.add(B);
    }
    /** @param {string} scope */
    startScope(B) {
      this.openNode(B);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(B, te) {
      const $e = B.root;
      te && ($e.scope = `language:${te}`), this.add($e);
    }
    toHTML() {
      return new o(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function p(k) {
    return k ? typeof k == "string" ? k : k.source : null;
  }
  function m(k) {
    return A("(?=", k, ")");
  }
  function v(k) {
    return A("(?:", k, ")*");
  }
  function y(k) {
    return A("(?:", k, ")?");
  }
  function A(...k) {
    return k.map((te) => p(te)).join("");
  }
  function $(k) {
    const B = k[k.length - 1];
    return typeof B == "object" && B.constructor === Object ? (k.splice(k.length - 1, 1), B) : {};
  }
  function M(...k) {
    return "(" + ($(k).capture ? "" : "?:") + k.map(($e) => p($e)).join("|") + ")";
  }
  function z(k) {
    return new RegExp(k.toString() + "|").exec("").length - 1;
  }
  function q(k, B) {
    const te = k && k.exec(B);
    return te && te.index === 0;
  }
  const G = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function Y(k, { joinWith: B }) {
    let te = 0;
    return k.map(($e) => {
      te += 1;
      const tt = te;
      let Je = p($e), me = "";
      for (; Je.length > 0; ) {
        const de = G.exec(Je);
        if (!de) {
          me += Je;
          break;
        }
        me += Je.substring(0, de.index), Je = Je.substring(de.index + de[0].length), de[0][0] === "\\" && de[1] ? me += "\\" + String(Number(de[1]) + tt) : (me += de[0], de[0] === "(" && te++);
      }
      return me;
    }).map(($e) => `(${$e})`).join(B);
  }
  const N = /\b\B/, ie = "[a-zA-Z]\\w*", ue = "[a-zA-Z_]\\w*", W = "\\b\\d+(\\.\\d+)?", pe = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", _e = "\\b(0b[01]+)", ke = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", L = (k = {}) => {
    const B = /^#![ ]*\//;
    return k.binary && (k.begin = A(
      B,
      /.*\b/,
      k.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: B,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (te, $e) => {
        te.index !== 0 && $e.ignoreMatch();
      }
    }, k);
  }, V = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, re = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [V]
  }, O = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [V]
  }, j = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, E = function(k, B, te = {}) {
    const $e = n(
      {
        scope: "comment",
        begin: k,
        end: B,
        contains: []
      },
      te
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
    const tt = M(
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
        begin: A(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          tt,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), $e;
  }, Q = E("//", "$"), Ne = E("/\\*", "\\*/"), Me = E("#", "$"), He = {
    scope: "number",
    begin: W,
    relevance: 0
  }, Ve = {
    scope: "number",
    begin: pe,
    relevance: 0
  }, Ue = {
    scope: "number",
    begin: _e,
    relevance: 0
  }, jt = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      V,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [V]
      }
    ]
  }, Ft = {
    scope: "title",
    begin: ie,
    relevance: 0
  }, we = {
    scope: "title",
    begin: ue,
    relevance: 0
  }, Re = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + ue,
    relevance: 0
  };
  var se = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: re,
    BACKSLASH_ESCAPE: V,
    BINARY_NUMBER_MODE: Ue,
    BINARY_NUMBER_RE: _e,
    COMMENT: E,
    C_BLOCK_COMMENT_MODE: Ne,
    C_LINE_COMMENT_MODE: Q,
    C_NUMBER_MODE: Ve,
    C_NUMBER_RE: pe,
    END_SAME_AS_BEGIN: function(k) {
      return Object.assign(
        k,
        {
          /** @type {ModeCallback} */
          "on:begin": (B, te) => {
            te.data._beginMatch = B[1];
          },
          /** @type {ModeCallback} */
          "on:end": (B, te) => {
            te.data._beginMatch !== B[1] && te.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Me,
    IDENT_RE: ie,
    MATCH_NOTHING_RE: N,
    METHOD_GUARD: Re,
    NUMBER_MODE: He,
    NUMBER_RE: W,
    PHRASAL_WORDS_MODE: j,
    QUOTE_STRING_MODE: O,
    REGEXP_MODE: jt,
    RE_STARTERS_RE: ke,
    SHEBANG: L,
    TITLE_MODE: Ft,
    UNDERSCORE_IDENT_RE: ue,
    UNDERSCORE_TITLE_MODE: we
  });
  function Vr(k, B) {
    k.input[k.index - 1] === "." && B.ignoreMatch();
  }
  function Sr(k, B) {
    k.className !== void 0 && (k.scope = k.className, delete k.className);
  }
  function xt(k, B) {
    B && k.beginKeywords && (k.begin = "\\b(" + k.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", k.__beforeBegin = Vr, k.keywords = k.keywords || k.beginKeywords, delete k.beginKeywords, k.relevance === void 0 && (k.relevance = 0));
  }
  function Qt(k, B) {
    Array.isArray(k.illegal) && (k.illegal = M(...k.illegal));
  }
  function Ln(k, B) {
    if (k.match) {
      if (k.begin || k.end) throw new Error("begin & end are not supported with match");
      k.begin = k.match, delete k.match;
    }
  }
  function cn(k, B) {
    k.relevance === void 0 && (k.relevance = 1);
  }
  const Fn = (k, B) => {
    if (!k.beforeMatch) return;
    if (k.starts) throw new Error("beforeMatch cannot be used with starts");
    const te = Object.assign({}, k);
    Object.keys(k).forEach(($e) => {
      delete k[$e];
    }), k.keywords = te.keywords, k.begin = A(te.beforeMatch, m(te.begin)), k.starts = {
      relevance: 0,
      contains: [
        Object.assign(te, { endsParent: !0 })
      ]
    }, k.relevance = 0, delete te.beforeMatch;
  }, mr = [
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
  ], _r = "keyword";
  function er(k, B, te = _r) {
    const $e = /* @__PURE__ */ Object.create(null);
    return typeof k == "string" ? tt(te, k.split(" ")) : Array.isArray(k) ? tt(te, k) : Object.keys(k).forEach(function(Je) {
      Object.assign(
        $e,
        er(k[Je], B, Je)
      );
    }), $e;
    function tt(Je, me) {
      B && (me = me.map((de) => de.toLowerCase())), me.forEach(function(de) {
        const xe = de.split("|");
        $e[xe[0]] = [Je, Pn(xe[0], xe[1])];
      });
    }
  }
  function Pn(k, B) {
    return B ? Number(B) : un(k) ? 0 : 1;
  }
  function un(k) {
    return mr.includes(k.toLowerCase());
  }
  const ur = {}, It = (k) => {
    console.error(k);
  }, Bt = (k, ...B) => {
    console.log(`WARN: ${k}`, ...B);
  }, tr = (k, B) => {
    ur[`${k}/${B}`] || (console.log(`Deprecated as of ${k}. ${B}`), ur[`${k}/${B}`] = !0);
  }, Cr = new Error();
  function dr(k, B, { key: te }) {
    let $e = 0;
    const tt = k[te], Je = {}, me = {};
    for (let de = 1; de <= B.length; de++)
      me[de + $e] = tt[de], Je[de + $e] = !0, $e += z(B[de - 1]);
    k[te] = me, k[te]._emit = Je, k[te]._multi = !0;
  }
  function Ar(k) {
    if (Array.isArray(k.begin)) {
      if (k.skip || k.excludeBegin || k.returnBegin)
        throw It("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Cr;
      if (typeof k.beginScope != "object" || k.beginScope === null)
        throw It("beginScope must be object"), Cr;
      dr(k, k.begin, { key: "beginScope" }), k.begin = Y(k.begin, { joinWith: "" });
    }
  }
  function l0(k) {
    if (Array.isArray(k.end)) {
      if (k.skip || k.excludeEnd || k.returnEnd)
        throw It("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Cr;
      if (typeof k.endScope != "object" || k.endScope === null)
        throw It("endScope must be object"), Cr;
      dr(k, k.end, { key: "endScope" }), k.end = Y(k.end, { joinWith: "" });
    }
  }
  function D0(k) {
    k.scope && typeof k.scope == "object" && k.scope !== null && (k.beginScope = k.scope, delete k.scope);
  }
  function Vn(k) {
    D0(k), typeof k.beginScope == "string" && (k.beginScope = { _wrap: k.beginScope }), typeof k.endScope == "string" && (k.endScope = { _wrap: k.endScope }), Ar(k), l0(k);
  }
  function Hn(k) {
    function B(me, de) {
      return new RegExp(
        p(me),
        "m" + (k.case_insensitive ? "i" : "") + (k.unicodeRegex ? "u" : "") + (de ? "g" : "")
      );
    }
    class te {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(de, xe) {
        xe.position = this.position++, this.matchIndexes[this.matchAt] = xe, this.regexes.push([xe, de]), this.matchAt += z(de) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const de = this.regexes.map((xe) => xe[1]);
        this.matcherRe = B(Y(de, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(de) {
        this.matcherRe.lastIndex = this.lastIndex;
        const xe = this.matcherRe.exec(de);
        if (!xe)
          return null;
        const gt = xe.findIndex((qr, hn) => hn > 0 && qr !== void 0), ct = this.matchIndexes[gt];
        return xe.splice(0, gt), Object.assign(xe, ct);
      }
    }
    class $e {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(de) {
        if (this.multiRegexes[de]) return this.multiRegexes[de];
        const xe = new te();
        return this.rules.slice(de).forEach(([gt, ct]) => xe.addRule(gt, ct)), xe.compile(), this.multiRegexes[de] = xe, xe;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(de, xe) {
        this.rules.push([de, xe]), xe.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(de) {
        const xe = this.getMatcher(this.regexIndex);
        xe.lastIndex = this.lastIndex;
        let gt = xe.exec(de);
        if (this.resumingScanAtSamePosition() && !(gt && gt.index === this.lastIndex)) {
          const ct = this.getMatcher(0);
          ct.lastIndex = this.lastIndex + 1, gt = ct.exec(de);
        }
        return gt && (this.regexIndex += gt.position + 1, this.regexIndex === this.count && this.considerAll()), gt;
      }
    }
    function tt(me) {
      const de = new $e();
      return me.contains.forEach((xe) => de.addRule(xe.begin, { rule: xe, type: "begin" })), me.terminatorEnd && de.addRule(me.terminatorEnd, { type: "end" }), me.illegal && de.addRule(me.illegal, { type: "illegal" }), de;
    }
    function Je(me, de) {
      const xe = (
        /** @type CompiledMode */
        me
      );
      if (me.isCompiled) return xe;
      [
        Sr,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Ln,
        Vn,
        Fn
      ].forEach((ct) => ct(me, de)), k.compilerExtensions.forEach((ct) => ct(me, de)), me.__beforeBegin = null, [
        xt,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Qt,
        // default to 1 relevance if not specified
        cn
      ].forEach((ct) => ct(me, de)), me.isCompiled = !0;
      let gt = null;
      return typeof me.keywords == "object" && me.keywords.$pattern && (me.keywords = Object.assign({}, me.keywords), gt = me.keywords.$pattern, delete me.keywords.$pattern), gt = gt || /\w+/, me.keywords && (me.keywords = er(me.keywords, k.case_insensitive)), xe.keywordPatternRe = B(gt, !0), de && (me.begin || (me.begin = /\B|\b/), xe.beginRe = B(xe.begin), !me.end && !me.endsWithParent && (me.end = /\B|\b/), me.end && (xe.endRe = B(xe.end)), xe.terminatorEnd = p(xe.end) || "", me.endsWithParent && de.terminatorEnd && (xe.terminatorEnd += (me.end ? "|" : "") + de.terminatorEnd)), me.illegal && (xe.illegalRe = B(
        /** @type {RegExp | string} */
        me.illegal
      )), me.contains || (me.contains = []), me.contains = [].concat(...me.contains.map(function(ct) {
        return c0(ct === "self" ? me : ct);
      })), me.contains.forEach(function(ct) {
        Je(
          /** @type Mode */
          ct,
          xe
        );
      }), me.starts && Je(me.starts, de), xe.matcher = tt(xe), xe;
    }
    if (k.compilerExtensions || (k.compilerExtensions = []), k.contains && k.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return k.classNameAliases = n(k.classNameAliases || {}), Je(
      /** @type Mode */
      k
    );
  }
  function dn(k) {
    return k ? k.endsWithParent || dn(k.starts) : !1;
  }
  function c0(k) {
    return k.variants && !k.cachedVariants && (k.cachedVariants = k.variants.map(function(B) {
      return n(k, { variants: null }, B);
    })), k.cachedVariants ? k.cachedVariants : dn(k) ? n(k, { starts: k.starts ? n(k.starts) : null }) : Object.isFrozen(k) ? n(k) : k;
  }
  var Hr = "11.11.1";
  class u0 extends Error {
    constructor(B, te) {
      super(B), this.name = "HTMLInjectionError", this.html = te;
    }
  }
  const $r = t, qn = n, Wn = Symbol("nomatch"), Un = 7, Gn = function(k) {
    const B = /* @__PURE__ */ Object.create(null), te = /* @__PURE__ */ Object.create(null), $e = [];
    let tt = !0;
    const Je = "Could not find the language '{}', did you forget to load/include a language module?", me = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let de = {
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
    function xe(K) {
      return de.noHighlightRe.test(K);
    }
    function gt(K) {
      let be = K.className + " ";
      be += K.parentNode ? K.parentNode.className : "";
      const Oe = de.languageDetectRe.exec(be);
      if (Oe) {
        const Ye = Kt(Oe[1]);
        return Ye || (Bt(Je.replace("{}", Oe[1])), Bt("Falling back to no-highlight mode for this block.", K)), Ye ? Oe[1] : "no-highlight";
      }
      return be.split(/\s+/).find((Ye) => xe(Ye) || Kt(Ye));
    }
    function ct(K, be, Oe) {
      let Ye = "", dt = "";
      typeof be == "object" ? (Ye = K, Oe = be.ignoreIllegals, dt = be.language) : (tr("10.7.0", "highlight(lang, code, ...args) has been deprecated."), tr("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), dt = K, Ye = be), Oe === void 0 && (Oe = !0);
      const Vt = {
        code: Ye,
        language: dt
      };
      rt("before:highlight", Vt);
      const Rt = Vt.result ? Vt.result : qr(Vt.language, Vt.code, Oe);
      return Rt.code = Vt.code, rt("after:highlight", Rt), Rt;
    }
    function qr(K, be, Oe, Ye) {
      const dt = /* @__PURE__ */ Object.create(null);
      function Vt(ae, ge) {
        return ae.keywords[ge];
      }
      function Rt() {
        if (!Ce.keywords) {
          Ct.addText(nt);
          return;
        }
        let ae = 0;
        Ce.keywordPatternRe.lastIndex = 0;
        let ge = Ce.keywordPatternRe.exec(nt), Ee = "";
        for (; ge; ) {
          Ee += nt.substring(ae, ge.index);
          const Ge = kt.case_insensitive ? ge[0].toLowerCase() : ge[0], Nt = Vt(Ce, Ge);
          if (Nt) {
            const [br, da] = Nt;
            if (Ct.addText(Ee), Ee = "", dt[Ge] = (dt[Ge] || 0) + 1, dt[Ge] <= Un && (Kn += da), br.startsWith("_"))
              Ee += ge[0];
            else {
              const ha = kt.classNameAliases[br] || br;
              Zt(ge[0], ha);
            }
          } else
            Ee += ge[0];
          ae = Ce.keywordPatternRe.lastIndex, ge = Ce.keywordPatternRe.exec(nt);
        }
        Ee += nt.substring(ae), Ct.addText(Ee);
      }
      function xn() {
        if (nt === "") return;
        let ae = null;
        if (typeof Ce.subLanguage == "string") {
          if (!B[Ce.subLanguage]) {
            Ct.addText(nt);
            return;
          }
          ae = qr(Ce.subLanguage, nt, !0, Gr[Ce.subLanguage]), Gr[Ce.subLanguage] = /** @type {CompiledMode} */
          ae._top;
        } else
          ae = _t(nt, Ce.subLanguage.length ? Ce.subLanguage : null);
        Ce.relevance > 0 && (Kn += ae.relevance), Ct.__addSublanguage(ae._emitter, ae.language);
      }
      function zt() {
        Ce.subLanguage != null ? xn() : Rt(), nt = "";
      }
      function Zt(ae, ge) {
        ae !== "" && (Ct.startScope(ge), Ct.addText(ae), Ct.endScope());
      }
      function T(ae, ge) {
        let Ee = 1;
        const Ge = ge.length - 1;
        for (; Ee <= Ge; ) {
          if (!ae._emit[Ee]) {
            Ee++;
            continue;
          }
          const Nt = kt.classNameAliases[ae[Ee]] || ae[Ee], br = ge[Ee];
          Nt ? Zt(br, Nt) : (nt = br, Rt(), nt = ""), Ee++;
        }
      }
      function I(ae, ge) {
        return ae.scope && typeof ae.scope == "string" && Ct.openNode(kt.classNameAliases[ae.scope] || ae.scope), ae.beginScope && (ae.beginScope._wrap ? (Zt(nt, kt.classNameAliases[ae.beginScope._wrap] || ae.beginScope._wrap), nt = "") : ae.beginScope._multi && (T(ae.beginScope, ge), nt = "")), Ce = Object.create(ae, { parent: { value: Ce } }), Ce;
      }
      function D(ae, ge, Ee) {
        let Ge = q(ae.endRe, Ee);
        if (Ge) {
          if (ae["on:end"]) {
            const Nt = new e(ae);
            ae["on:end"](ge, Nt), Nt.isMatchIgnored && (Ge = !1);
          }
          if (Ge) {
            for (; ae.endsParent && ae.parent; )
              ae = ae.parent;
            return ae;
          }
        }
        if (ae.endsWithParent)
          return D(ae.parent, ge, Ee);
      }
      function oe(ae) {
        return Ce.matcher.regexIndex === 0 ? (nt += ae[0], 1) : (f0 = !0, 0);
      }
      function ve(ae) {
        const ge = ae[0], Ee = ae.rule, Ge = new e(Ee), Nt = [Ee.__beforeBegin, Ee["on:begin"]];
        for (const br of Nt)
          if (br && (br(ae, Ge), Ge.isMatchIgnored))
            return oe(ge);
        return Ee.skip ? nt += ge : (Ee.excludeBegin && (nt += ge), zt(), !Ee.returnBegin && !Ee.excludeBegin && (nt = ge)), I(Ee, ae), Ee.returnBegin ? 0 : ge.length;
      }
      function ce(ae) {
        const ge = ae[0], Ee = be.substring(ae.index), Ge = D(Ce, ae, Ee);
        if (!Ge)
          return Wn;
        const Nt = Ce;
        Ce.endScope && Ce.endScope._wrap ? (zt(), Zt(ge, Ce.endScope._wrap)) : Ce.endScope && Ce.endScope._multi ? (zt(), T(Ce.endScope, ae)) : Nt.skip ? nt += ge : (Nt.returnEnd || Nt.excludeEnd || (nt += ge), zt(), Nt.excludeEnd && (nt = ge));
        do
          Ce.scope && Ct.closeNode(), !Ce.skip && !Ce.subLanguage && (Kn += Ce.relevance), Ce = Ce.parent;
        while (Ce !== Ge.parent);
        return Ge.starts && I(Ge.starts, ae), Nt.returnEnd ? 0 : ge.length;
      }
      function Fe() {
        const ae = [];
        for (let ge = Ce; ge !== kt; ge = ge.parent)
          ge.scope && ae.unshift(ge.scope);
        ae.forEach((ge) => Ct.openNode(ge));
      }
      let je = {};
      function Ke(ae, ge) {
        const Ee = ge && ge[0];
        if (nt += ae, Ee == null)
          return zt(), 0;
        if (je.type === "begin" && ge.type === "end" && je.index === ge.index && Ee === "") {
          if (nt += be.slice(ge.index, ge.index + 1), !tt) {
            const Ge = new Error(`0 width match regex (${K})`);
            throw Ge.languageName = K, Ge.badRule = je.rule, Ge;
          }
          return 1;
        }
        if (je = ge, ge.type === "begin")
          return ve(ge);
        if (ge.type === "illegal" && !Oe) {
          const Ge = new Error('Illegal lexeme "' + Ee + '" for mode "' + (Ce.scope || "<unnamed>") + '"');
          throw Ge.mode = Ce, Ge;
        } else if (ge.type === "end") {
          const Ge = ce(ge);
          if (Ge !== Wn)
            return Ge;
        }
        if (ge.type === "illegal" && Ee === "")
          return nt += `
`, 1;
        if (p0 > 1e5 && p0 > ge.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return nt += Ee, Ee.length;
      }
      const kt = Kt(K);
      if (!kt)
        throw It(Je.replace("{}", K)), new Error('Unknown language: "' + K + '"');
      const Ur = Hn(kt);
      let Ir = "", Ce = Ye || Ur;
      const Gr = {}, Ct = new de.__emitter(de);
      Fe();
      let nt = "", Kn = 0, jr = 0, p0 = 0, f0 = !1;
      try {
        if (kt.__emitTokens)
          kt.__emitTokens(be, Ct);
        else {
          for (Ce.matcher.considerAll(); ; ) {
            p0++, f0 ? f0 = !1 : Ce.matcher.considerAll(), Ce.matcher.lastIndex = jr;
            const ae = Ce.matcher.exec(be);
            if (!ae) break;
            const ge = be.substring(jr, ae.index), Ee = Ke(ge, ae);
            jr = ae.index + Ee;
          }
          Ke(be.substring(jr));
        }
        return Ct.finalize(), Ir = Ct.toHTML(), {
          language: K,
          value: Ir,
          relevance: Kn,
          illegal: !1,
          _emitter: Ct,
          _top: Ce
        };
      } catch (ae) {
        if (ae.message && ae.message.includes("Illegal"))
          return {
            language: K,
            value: $r(be),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: ae.message,
              index: jr,
              context: be.slice(jr - 100, jr + 100),
              mode: ae.mode,
              resultSoFar: Ir
            },
            _emitter: Ct
          };
        if (tt)
          return {
            language: K,
            value: $r(be),
            illegal: !1,
            relevance: 0,
            errorRaised: ae,
            _emitter: Ct,
            _top: Ce
          };
        throw ae;
      }
    }
    function hn(K) {
      const be = {
        value: $r(K),
        illegal: !1,
        relevance: 0,
        _top: me,
        _emitter: new de.__emitter(de)
      };
      return be._emitter.addText(K), be;
    }
    function _t(K, be) {
      be = be || de.languages || Object.keys(B);
      const Oe = hn(K), Ye = be.filter(Kt).filter(Pt).map(
        (zt) => qr(zt, K, !1)
      );
      Ye.unshift(Oe);
      const dt = Ye.sort((zt, Zt) => {
        if (zt.relevance !== Zt.relevance) return Zt.relevance - zt.relevance;
        if (zt.language && Zt.language) {
          if (Kt(zt.language).supersetOf === Zt.language)
            return 1;
          if (Kt(Zt.language).supersetOf === zt.language)
            return -1;
        }
        return 0;
      }), [Vt, Rt] = dt, xn = Vt;
      return xn.secondBest = Rt, xn;
    }
    function jn(K, be, Oe) {
      const Ye = be && te[be] || Oe;
      K.classList.add("hljs"), K.classList.add(`language-${Ye}`);
    }
    function pn(K) {
      let be = null;
      const Oe = gt(K);
      if (xe(Oe)) return;
      if (rt(
        "before:highlightElement",
        { el: K, language: Oe }
      ), K.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", K);
        return;
      }
      if (K.children.length > 0 && (de.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(K)), de.throwUnescapedHTML))
        throw new u0(
          "One of your code blocks includes unescaped HTML.",
          K.innerHTML
        );
      be = K;
      const Ye = be.textContent, dt = Oe ? ct(Ye, { language: Oe, ignoreIllegals: !0 }) : _t(Ye);
      K.innerHTML = dt.value, K.dataset.highlighted = "yes", jn(K, Oe, dt.language), K.result = {
        language: dt.language,
        // TODO: remove with version 11.0
        re: dt.relevance,
        relevance: dt.relevance
      }, dt.secondBest && (K.secondBest = {
        language: dt.secondBest.language,
        relevance: dt.secondBest.relevance
      }), rt("after:highlightElement", { el: K, result: dt, text: Ye });
    }
    function fn(K) {
      de = qn(de, K);
    }
    const d0 = () => {
      Wr(), tr("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function mn() {
      Wr(), tr("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let h0 = !1;
    function Wr() {
      function K() {
        Wr();
      }
      if (document.readyState === "loading") {
        h0 || window.addEventListener("DOMContentLoaded", K, !1), h0 = !0;
        return;
      }
      document.querySelectorAll(de.cssSelector).forEach(pn);
    }
    function L0(K, be) {
      let Oe = null;
      try {
        Oe = be(k);
      } catch (Ye) {
        if (It("Language definition for '{}' could not be registered.".replace("{}", K)), tt)
          It(Ye);
        else
          throw Ye;
        Oe = me;
      }
      Oe.name || (Oe.name = K), B[K] = Oe, Oe.rawDefinition = be.bind(null, k), Oe.aliases && gn(Oe.aliases, { languageName: K });
    }
    function yt(K) {
      delete B[K];
      for (const be of Object.keys(te))
        te[be] === K && delete te[be];
    }
    function Tr() {
      return Object.keys(B);
    }
    function Kt(K) {
      return K = (K || "").toLowerCase(), B[K] || B[te[K]];
    }
    function gn(K, { languageName: be }) {
      typeof K == "string" && (K = [K]), K.forEach((Oe) => {
        te[Oe.toLowerCase()] = be;
      });
    }
    function Pt(K) {
      const be = Kt(K);
      return be && !be.disableAutodetect;
    }
    function F0(K) {
      K["before:highlightBlock"] && !K["before:highlightElement"] && (K["before:highlightElement"] = (be) => {
        K["before:highlightBlock"](
          Object.assign({ block: be.el }, be)
        );
      }), K["after:highlightBlock"] && !K["after:highlightElement"] && (K["after:highlightElement"] = (be) => {
        K["after:highlightBlock"](
          Object.assign({ block: be.el }, be)
        );
      });
    }
    function bn(K) {
      F0(K), $e.push(K);
    }
    function vn(K) {
      const be = $e.indexOf(K);
      be !== -1 && $e.splice(be, 1);
    }
    function rt(K, be) {
      const Oe = K;
      $e.forEach(function(Ye) {
        Ye[Oe] && Ye[Oe](be);
      });
    }
    function wn(K) {
      return tr("10.7.0", "highlightBlock will be removed entirely in v12.0"), tr("10.7.0", "Please use highlightElement now."), pn(K);
    }
    Object.assign(k, {
      highlight: ct,
      highlightAuto: _t,
      highlightAll: Wr,
      highlightElement: pn,
      // TODO: Remove with v12 API
      highlightBlock: wn,
      configure: fn,
      initHighlighting: d0,
      initHighlightingOnLoad: mn,
      registerLanguage: L0,
      unregisterLanguage: yt,
      listLanguages: Tr,
      getLanguage: Kt,
      registerAliases: gn,
      autoDetection: Pt,
      inherit: qn,
      addPlugin: bn,
      removePlugin: vn
    }), k.debugMode = function() {
      tt = !1;
    }, k.safeMode = function() {
      tt = !0;
    }, k.versionString = Hr, k.regex = {
      concat: A,
      lookahead: m,
      either: M,
      optional: y,
      anyNumberOfTimes: v
    };
    for (const K in se)
      typeof se[K] == "object" && r(se[K]);
    return Object.assign(k, se), k;
  }, gr = Gn({});
  return gr.newInstance = () => Gn({}), Li = gr, gr.HighlightJS = gr, gr.default = gr, Li;
}
var $4 = /* @__PURE__ */ A4();
const Dn = /* @__PURE__ */ vc($4), T4 = (r) => ({
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
}), I4 = [
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
], N4 = [
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
], M4 = [
  ...I4,
  ...N4
], E4 = [
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
].sort().reverse(), z4 = [
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
].sort().reverse(), R4 = [
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
].sort().reverse(), O4 = [
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
function B4(r) {
  const e = r.regex, t = T4(r), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, a = "and or not only", i = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
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
          { begin: ":(" + z4.join("|") + ")" },
          { begin: ":(:)?(" + R4.join("|") + ")" }
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
        begin: "\\b(" + O4.join("|") + ")\\b"
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
              attribute: E4.join(" ")
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
        begin: "\\b(" + M4.join("|") + ")\\b"
      }
    ]
  };
}
const oc = "[A-Za-z$_][0-9A-Za-z$_]*", D4 = [
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
], L4 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], C1 = [
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
], A1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], $1 = [
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
], F4 = [
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
], P4 = [].concat(
  $1,
  C1,
  A1
);
function V4(r) {
  const e = r.regex, t = (E, { after: Q }) => {
    const Ne = "</" + E[0].slice(1);
    return E.input.indexOf(Ne, Q) !== -1;
  }, n = oc, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (E, Q) => {
      const Ne = E[0].length + E.index, Me = E.input[Ne];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Me === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Me === ","
      ) {
        Q.ignoreMatch();
        return;
      }
      Me === ">" && (t(E, { after: Ne }) || Q.ignoreMatch());
      let He;
      const Ve = E.input.substring(Ne);
      if (He = Ve.match(/^\s*=/)) {
        Q.ignoreMatch();
        return;
      }
      if ((He = Ve.match(/^\s+extends\s+/)) && He.index === 0) {
        Q.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: oc,
    keyword: D4,
    literal: L4,
    built_in: P4,
    "variable.language": F4
  }, l = "[0-9](_?[0-9])*", d = `\\.(${l})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = {
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
  }, A = {
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
  }, $ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, z = {
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
  }, q = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    y,
    A,
    $,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    p
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = q.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(q)
  });
  const G = [].concat(z, m.contains), Y = G.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(G)
    }
  ]), N = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: Y
  }, ie = {
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
  }, ue = {
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
        ...C1,
        ...A1
      ]
    }
  }, W = {
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
    contains: [N],
    illegal: /%/
  }, _e = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ke(E) {
    return e.concat("(?!", E.join("|"), ")");
  }
  const L = {
    match: e.concat(
      /\b/,
      ke([
        ...$1,
        "super",
        "import"
      ].map((E) => `${E}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, V = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, re = {
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
      N
    ]
  }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", j = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(O)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      N
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: Y, CLASS_REFERENCE: ue },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      W,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      y,
      A,
      $,
      z,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      p,
      ue,
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
          z,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: O,
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
                    contains: Y
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
        begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          N,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      V,
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
        contains: [N]
      },
      L,
      _e,
      ie,
      re,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var w0 = "[0-9](_*[0-9])*", Aa = `\\.(${w0})`, $a = "[0-9a-fA-F](_*[0-9a-fA-F])*", lc = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${w0})((${Aa})|\\.)?|(${Aa}))[eE][+-]?(${w0})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${w0})((${Aa})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Aa})[fFdD]?\\b` },
    { begin: `\\b(${w0})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${$a})\\.?|(${$a})?\\.(${$a}))[pP][+-]?(${w0})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${$a})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function T1(r, e, t) {
  return t === -1 ? "" : r.replace(e, (n) => T1(r, e, t - 1));
}
function H4(r) {
  const e = r.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = t + T1("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), l = {
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
              lc,
              r.C_BLOCK_COMMENT_MODE
            ]
          },
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      lc,
      d
    ]
  };
}
function q4(r) {
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
const ja = "[A-Za-z$_][0-9A-Za-z$_]*", I1 = [
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
], N1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], M1 = [
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
], E1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], z1 = [
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
], R1 = [
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
], O1 = [].concat(
  z1,
  M1,
  E1
);
function W4(r) {
  const e = r.regex, t = (E, { after: Q }) => {
    const Ne = "</" + E[0].slice(1);
    return E.input.indexOf(Ne, Q) !== -1;
  }, n = ja, a = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (E, Q) => {
      const Ne = E[0].length + E.index, Me = E.input[Ne];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Me === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Me === ","
      ) {
        Q.ignoreMatch();
        return;
      }
      Me === ">" && (t(E, { after: Ne }) || Q.ignoreMatch());
      let He;
      const Ve = E.input.substring(Ne);
      if (He = Ve.match(/^\s*=/)) {
        Q.ignoreMatch();
        return;
      }
      if ((He = Ve.match(/^\s+extends\s+/)) && He.index === 0) {
        Q.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: ja,
    keyword: I1,
    literal: N1,
    built_in: O1,
    "variable.language": R1
  }, l = "[0-9](_?[0-9])*", d = `\\.(${l})`, h = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", p = {
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
  }, A = {
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
  }, $ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, z = {
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
  }, q = [
    r.APOS_STRING_MODE,
    r.QUOTE_STRING_MODE,
    v,
    y,
    A,
    $,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    p
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  m.contains = q.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: o,
    contains: [
      "self"
    ].concat(q)
  });
  const G = [].concat(z, m.contains), Y = G.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(G)
    }
  ]), N = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: o,
    contains: Y
  }, ie = {
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
  }, ue = {
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
        ...M1,
        ...E1
      ]
    }
  }, W = {
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
    contains: [N],
    illegal: /%/
  }, _e = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ke(E) {
    return e.concat("(?!", E.join("|"), ")");
  }
  const L = {
    match: e.concat(
      /\b/,
      ke([
        ...z1,
        "super",
        "import"
      ].map((E) => `${E}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, V = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, re = {
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
      N
    ]
  }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", j = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      e.lookahead(O)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      N
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: o,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: Y, CLASS_REFERENCE: ue },
    illegal: /#(?![$_A-z])/,
    contains: [
      r.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      W,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      y,
      A,
      $,
      z,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      p,
      ue,
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
          z,
          r.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: O,
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
                    contains: Y
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
        begin: "\\b(?!function)" + r.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          N,
          r.inherit(r.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      V,
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
        contains: [N]
      },
      L,
      _e,
      ie,
      re,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function U4(r) {
  const e = r.regex, t = W4(r), n = ja, a = [
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
    $pattern: ja,
    keyword: I1.concat(l),
    literal: N1,
    built_in: O1.concat(a),
    "variable.language": R1
  }, h = {
    className: "meta",
    begin: "@" + n
  }, p = (A, $, M) => {
    const z = A.contains.findIndex((q) => q.label === $);
    if (z === -1)
      throw new Error("can not find mode to replace");
    A.contains.splice(z, 1, M);
  };
  Object.assign(t.keywords, d), t.exports.PARAMS_CONTAINS.push(h);
  const m = t.contains.find((A) => A.scope === "attr"), v = Object.assign(
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
  ]), p(t, "shebang", r.SHEBANG()), p(t, "use_strict", o);
  const y = t.contains.find((A) => A.label === "func.def");
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
function B1(r) {
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
const D5 = "0.0.37", G4 = S.ValueIsTextline, D1 = {
  h: tn,
  Fragment: In,
  render: Qr,
  createContext: Mc,
  createElement: tn,
  cloneElement: Nc,
  createRef: Pd,
  toChildArray: $0,
  createPortal: qc,
  memo: Xd,
  forwardRef: Yd,
  useId: Dc,
  useRef: De,
  useState: et,
  useReducer: Rc,
  useEffect: nr,
  useLayoutEffect: jd,
  useCallback: Wt,
  useMemo: E0,
  useContext: Oc,
  useErrorBoundary: Bc
}, { fromLocalTo: j4, fromViewportTo: K4, fromDocumentTo: Z4 } = ph;
Dn.registerLanguage("css", B4);
Dn.registerLanguage("javascript", V4);
Dn.registerLanguage("java", H4);
Dn.registerLanguage("json", q4);
Dn.registerLanguage("typescript", U4);
Dn.registerLanguage("html", B1);
Dn.registerLanguage("xml", B1);
const Ka = Symbol("Script"), an = Symbol("View"), fi = Symbol("rerender"), Rn = Symbol("Console"), ea = Symbol("Console_CharCount"), ta = Symbol("Console_LineCount"), L1 = ["left-width", "left-right", "width-right"], F1 = ["top-height", "top-bottom", "height-bottom"], L5 = [
  "thin",
  "extra-light",
  "light",
  "normal",
  "medium",
  "semi-bold",
  "bold",
  "extra-bold",
  "heavy"
], X4 = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  heavy: 900
}, F5 = ["normal", "italic"], J4 = ["none", "underline", "overline", "line-through"], Y4 = ["solid", "double", "dotted", "dashed", "wavy"], P5 = ["left", "center", "right", "justify"], Q4 = ["normal", "contain", "cover", "fill", "tile"], e2 = [
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
], V5 = [
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
], t2 = ["visible", "hidden", "scroll", "auto"];
function On(r) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);
  if (e == null)
    throw new Error(r);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function H5(r) {
  On(
    "ReadOnlyProperty: property " + S.quoted(r) + " must not be set"
  );
}
const r2 = /^[a-z$_][a-z$_0-9]*$/i;
function P1(r) {
  return S.ValueIsStringMatching(r, r2);
}
const n2 = S.ValidatorForClassifier(
  P1,
  S.acceptNil,
  "BC identifier"
), q5 = n2, a2 = S.ValidatorForClassifier(
  P1,
  S.rejectNil,
  "BC identifier"
), W5 = a2;
function mi(r) {
  return S.ValueIsString(r) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(r);
}
const i2 = S.ValidatorForClassifier(
  mi,
  S.acceptNil,
  "name"
), U5 = i2, to = S.ValidatorForClassifier(
  mi,
  S.rejectNil,
  "name"
), G5 = to;
function or(r) {
  return S.ValueIsFiniteNumber(r);
}
const s2 = S.ValidatorForClassifier(
  or,
  S.acceptNil,
  "BC coordinate"
), j5 = s2, o2 = S.ValidatorForClassifier(
  or,
  S.rejectNil,
  "BC coordinate"
), K5 = o2;
function kr(r) {
  return S.ValueIsFiniteNumber(r) && r >= 0;
}
const l2 = S.ValidatorForClassifier(
  kr,
  S.acceptNil,
  "BC dimension"
), Z5 = l2, c2 = S.ValidatorForClassifier(
  kr,
  S.rejectNil,
  "BC dimension"
), X5 = c2;
function V1(r) {
  return S.ValueIsPlainObject(r) && or(r.x) && or(r.y);
}
const u2 = S.ValidatorForClassifier(
  V1,
  S.acceptNil,
  "BC position"
), J5 = u2, d2 = S.ValidatorForClassifier(
  V1,
  S.rejectNil,
  "BC position"
), Y5 = d2;
function H1(r) {
  return S.ValueIsPlainObject(r) && kr(r.Width) && kr(r.Height);
}
const h2 = S.ValidatorForClassifier(
  H1,
  S.acceptNil,
  "BC size"
), Q5 = h2, p2 = S.ValidatorForClassifier(
  H1,
  S.rejectNil,
  "BC size"
), em = p2;
function q1(r) {
  return S.ValueIsPlainObject(r) && or(r.x) && kr(r.Width) && or(r.y) && kr(r.Height);
}
const f2 = S.ValidatorForClassifier(
  q1,
  S.acceptNil,
  "BC geometry"
), tm = f2, m2 = S.ValidatorForClassifier(
  q1,
  S.rejectNil,
  "BC geometry"
), rm = m2;
function W1(r) {
  if (!S.ValueIsPlainObject(r))
    return !1;
  for (let e in r)
    if (r.hasOwnProperty(e))
      switch (e) {
        case "x":
        case "y":
          if (r[e] != null && !or(r[e]))
            return !1;
          break;
        case "Width":
        case "Height":
          if (r[e] != null && !kr(r[e]))
            return !1;
          break;
        default:
          return !1;
      }
  return !0;
}
S.ValidatorForClassifier(
  W1,
  S.acceptNil,
  "BC geometry"
);
S.ValidatorForClassifier(
  W1,
  S.rejectNil,
  "BC geometry"
);
function ro(r) {
  return S.ValueIsList(r) && r.length === 2 && S.ValueIsOneOf(r[0], L1) && S.ValueIsOneOf(r[1], F1);
}
const g2 = S.ValidatorForClassifier(
  ro,
  S.acceptNil,
  "BC anchors list"
), nm = g2, b2 = S.ValidatorForClassifier(
  ro,
  S.rejectNil,
  "BC anchors list"
), am = b2;
function no(r) {
  return S.ValueIsListSatisfying(r, S.ValueIsFiniteNumber) && r.length === 4;
}
const v2 = S.ValidatorForClassifier(
  no,
  S.acceptNil,
  "BC offsets list"
), im = v2, w2 = S.ValidatorForClassifier(
  no,
  S.rejectNil,
  "BC offsets list"
), sm = w2;
function U1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsOneOf(r.Line, J4) && (r.Color == null || S.ValueIsColor(r.Color)) && (r.Style == null || S.ValueIsOneOf(r.Style, Y4)) && (r.Thickness == null || kr(r.Thickness));
}
const x2 = S.ValidatorForClassifier(
  U1,
  S.acceptNil,
  "text decoration"
), om = x2, y2 = S.ValidatorForClassifier(
  U1,
  S.rejectNil,
  "text decoration"
), lm = y2;
function G1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && or(r.xOffset) && or(r.yOffset) && kr(r.BlurRadius) && S.ValueIsColor(r.Color);
}
const k2 = S.ValidatorForClassifier(
  G1,
  S.acceptNil,
  "text shadow specification"
), cm = k2, S2 = S.ValidatorForClassifier(
  G1,
  S.rejectNil,
  "text shadow specification"
), um = S2;
function j1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsURL(r.ImageURL) && S.ValueIsOneOf(r.Mode, Q4) && or(r.xOffset) && or(r.yOffset);
}
const _2 = S.ValidatorForClassifier(
  j1,
  S.acceptNil,
  "background texture"
), dm = _2, C2 = S.ValidatorForClassifier(
  j1,
  S.rejectNil,
  "background texture"
), hm = C2;
function K1(r) {
  return S.ValueIsOneOf(r, e2);
}
const A2 = S.ValidatorForClassifier(
  K1,
  S.acceptNil,
  "widget border style"
), pm = A2, $2 = S.ValidatorForClassifier(
  K1,
  S.rejectNil,
  "widget border style"
), fm = $2;
function Z1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && or(r.xOffset) && or(r.yOffset) && kr(r.BlurRadius) && kr(r.SpreadRadius) && S.ValueIsColor(r.Color);
}
const T2 = S.ValidatorForClassifier(
  Z1,
  S.acceptNil,
  "widget box shadow specification"
), mm = T2, I2 = S.ValidatorForClassifier(
  Z1,
  S.rejectNil,
  "widget box shadow specification"
), gm = I2;
function X1(r) {
  return S.ValueIsListSatisfying(
    r,
    (e) => S.ValueIsOneOf(e, t2),
    2,
    2
  );
}
const N2 = S.ValidatorForClassifier(
  X1,
  S.acceptNil,
  "BC overflow list"
), bm = N2, M2 = S.ValidatorForClassifier(
  X1,
  S.rejectNil,
  "BC overflow list"
), vm = M2;
function ra(r) {
  switch (!0) {
    case r == null:
    // deliberately also allows undefined
    case S.ValueIsBoolean(r):
    case S.ValueIsNumber(r):
    case S.ValueIsString(r):
    case S.ValueIsListSatisfying(r, ra):
      return !0;
    case S.ValueIsPlainObject(r):
      for (let e in r)
        if (r.hasOwnProperty(e) && !ra(r[e]))
          return !1;
      return !0;
  }
  return !1;
}
const E2 = S.ValidatorForClassifier(
  ra,
  S.acceptNil,
  "serializable value"
), wm = E2, z2 = S.ValidatorForClassifier(
  ra,
  S.rejectNil,
  "serializable value"
), xm = z2;
function J1(r) {
  if (S.ValueIsPlainObject(r)) {
    for (let e in r)
      if (r.hasOwnProperty(e) && !ra(r[e]))
        return !1;
    return !0;
  } else
    return !1;
}
const R2 = S.ValidatorForClassifier(
  J1,
  S.acceptNil,
  "serializable object"
), ym = R2, O2 = S.ValidatorForClassifier(
  J1,
  S.rejectNil,
  "serializable object"
), km = O2;
function Sm(r, e) {
  const t = e == null ? S.ValueIsTextline : (n) => S.ValueIsStringMatching(n, e);
  return S.ValueIsListSatisfying(r, t);
}
function B2(r, e, t) {
  return e == null ? e : L2(r, e, t);
}
const _m = B2;
function D2(r, e, t) {
  if (e == null)
    On(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const n = t == null ? S.ValueIsTextline : (a) => S.ValueIsStringMatching(a, t);
    if (S.ValueIsListSatisfying(e, n))
      return e;
    On(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const L2 = D2;
function Cm(r, e, t, n, a) {
  const i = e == null && t == null ? S.ValueIsNumber : (s) => S.ValueIsNumberInRange(s, e, t, n, a);
  return S.ValueIsListSatisfying(r, i);
}
function F2(r, e, t, n, a, i) {
  return e == null ? e : V2(r, e, t, n, a, i);
}
const Am = F2;
function P2(r, e, t, n, a, i) {
  if (e == null)
    On(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const s = t == null && n == null ? S.ValueIsNumber : (o) => S.ValueIsNumberInRange(o, t, n, a, i);
    if (S.ValueIsListSatisfying(e, s))
      return e;
    On(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const V2 = P2;
function $m(r, e, t) {
  const n = e == null && t == null ? S.ValueIsInteger : (a) => S.ValueIsIntegerInRange(a, e, t);
  return S.ValueIsListSatisfying(r, n);
}
function H2(r, e, t, n) {
  return e == null ? e : W2(r, e, t, n);
}
const Tm = H2;
function q2(r, e, t, n) {
  if (e == null)
    On(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const a = t == null && n == null ? S.ValueIsInteger : (i) => S.ValueIsIntegerInRange(i, t, n);
    if (S.ValueIsListSatisfying(e, a))
      return e;
    On(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const W2 = q2;
function Im(r, e) {
  if (S.expectFunction("Validator", e), e(r) === !0)
    return r;
}
function Nm(r) {
  switch (!0) {
    case S.ValueIsBoolean(r):
      return r;
    case r === "false":
      return !1;
    case r === "true":
      return !0;
  }
}
function Mm(r) {
  if (S.ValueIsNumber(r) || S.ValueIsString(r) && (r = parseFloat(r), !isNaN(r)))
    return r;
}
function Em(r, e, t, n, a) {
  if (!(S.ValueIsString(r) && (r = parseFloat(r), isNaN(r))) && S.ValueIsNumberInRange(r, e, t, n, a))
    return r;
}
function zm(r) {
  if (S.ValueIsInteger(r) || S.ValueIsString(r) && (r = parseFloat(r), S.ValueIsInteger(r)))
    return r;
}
function Rm(r, e, t) {
  if (!(S.ValueIsString(r) && (r = parseFloat(r), !S.ValueIsNumber(r))) && S.ValueIsIntegerInRange(r, e, t))
    return r;
}
function Om(r) {
  if (S.ValueIsOrdinal(r) || S.ValueIsString(r) && (r = parseFloat(r), S.ValueIsOrdinal(r)))
    return r;
}
function Bm(r) {
  if (S.ValueIsCardinal(r) || S.ValueIsString(r) && (r = parseFloat(r), S.ValueIsCardinal(r)))
    return r;
}
function Dm(r) {
  if (S.ValueIsString(r))
    return r;
}
function Lm(r, e) {
  if (S.ValueIsStringMatching(r, e))
    return r;
}
function Fm(r) {
  if (S.ValueIsText(r))
    return r;
}
function Pm(r) {
  if (S.ValueIsTextline(r))
    return r;
}
function Vm(r) {
  if (S.ValueIsFunction(r))
    return r;
}
function Hm(r) {
  if (S.ValueIsColor(r))
    return r;
}
function qm(r) {
  if (S.ValueIsEMailAddress(r))
    return r;
}
function Wm(r) {
  if (G4(r))
    return r;
}
function Um(r) {
  if (S.ValueIsURL(r))
    return r;
}
function Gm(r) {
  if (mi(r))
    return r;
}
function jm(r) {
  if (mi(r) || S.ValueIsOrdinal(r))
    return r;
}
let Za = 0;
function ar(r) {
  return Za += 1, `bc-${r}-${Za}`;
}
function Km(r) {
  return to("name", r), Y1(r);
}
function Y1(r) {
  return r.replaceAll(".", "-");
}
function U2(r, e, t = !1) {
  to("stylesheet name", r), S.expectText("stylesheet", e), S.expectBoolean("mode flag", t);
  const n = "BC-Stylesheet-for-" + Y1(r);
  let a = document.head.querySelector('style[id="' + n + '"]');
  a == null ? (a = document.createElement("style"), a.id = n, a.textContent = e, document.head.append(a)) : t ? a.textContent = e : console.warn('multiple definitions for stylesheet "' + r + '"');
}
const Zm = "\\d{2}:\\d{2}", G2 = /\d{2}:\d{2}/;
function Xm(r) {
  return S.ValueIsStringMatching(r, G2);
}
const Jm = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", j2 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function Ym(r) {
  return S.ValueIsStringMatching(r, j2);
}
const Qm = "\\d{4}-\\d{2}-\\d{2}", K2 = /\d{4}-\d{2}-\d{2}/;
function eg(r) {
  return S.ValueIsStringMatching(r, K2);
}
const tg = "\\d{4}-W\\d{2}", Z2 = /\d{4}-W\d{2}/;
function rg(r) {
  return S.ValueIsStringMatching(r, Z2);
}
const ng = "\\d{4}-\\d{2}", X2 = /\d{4}-\d{2}/;
function ag(r) {
  return S.ValueIsStringMatching(r, X2);
}
const ig = [
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
], J2 = /* @__PURE__ */ Object.create(null);
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
  (r) => J2[r] = !0
);
const ao = 105e4, io = 2e4;
function Xa(r) {
  r[Rn] = "", r[fi]();
}
function Y2(r, e) {
  Q1(r, ed(e)), r[fi]();
}
function Q2(r, e) {
  Q1(r, ed(e, !0)), r[fi]();
}
function Q1(r, e) {
  if (e.length === 0)
    return;
  let t = cc(e), n = e.length;
  t > (r.Console_LineLimit ?? io) || n > (r.Console_CharLimit ?? ao) ? (Xa(r), e = t5(e, r, t, n), r[ta] = cc(e) + 1, r[ea] = e.length, r[Rn] = e) : (e5(r, t, n), r[ta] += t, r[ea] += n, r[Rn] += e);
}
function e5(r, e, t) {
  let n = r[ta] + e - (r.Console_LineLimit ?? io), a = r[ea] + t - (r.Console_CharLimit ?? ao);
  if (n <= 0 && a <= 0)
    return;
  let i = r[Rn];
  for (let s = 0, o = -1; ; ) {
    if (o = i.indexOf(`
`, o + 1), o < 0) {
      Xa(r);
      return;
    }
    if (s += 1, s >= n && o - s * 28 >= a) {
      r[Rn] = i.slice(o + 1);
      return;
    }
  }
}
function t5(r, e, t, n) {
  let a = t - e.Console_LineLimit, i = n - e.Console_CharLimit;
  for (let s = 0, o = -1; ; )
    if (o = r.indexOf(`
`, o + 1), s += 1, s >= a && o >= i)
      return r.slice(o + 1);
}
function cc(r) {
  let e = r.match(/\n/g);
  return e === null ? 0 : e.length;
}
function ed(r, e = !1) {
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
function uc(r) {
  return n5(() => {
    const { ErrorToShow: e } = r;
    return Z`<div class="bc-error-indicator" onClick=${() => {
      console.warn(e), window.alert(r5(e));
    }}/>`;
  });
}
U2("bc-error-indicator", `
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
function r5(r) {
  return `${r.Title}

${r.Message}`;
}
const sg = ["portrait", "landscape", "any"];
function n5(r) {
  S.expectFunction("rendering function", r);
  const [e, t] = Bc();
  if (e != null)
    return console.warn("rendering error caught by preact: " + e), Z`<${uc} error=${e} resetError=${t}/>`;
  try {
    return r();
  } catch (n) {
    return console.warn("rendering error: " + n), Z`<${uc} error=${n} resetError=${t}/>`;
  }
}
const vs = 800, ws = 600, a5 = `
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
var Er, r0, S0;
class Ja {
  constructor() {
    bt(this, Er, /* @__PURE__ */ new Map());
    /**** after/every — timers which are cleared automatically on teardown ****/
    bt(this, r0, /* @__PURE__ */ new Set());
    bt(this, S0, /* @__PURE__ */ new Set());
  }
  /**** on — registers a message handler (called from within a script) ****/
  on(e, t) {
    R(this, Er).set(e, t);
  }
  /**** run — evaluates the script asynchronously; clears old handlers first ****/
  async run(e, t, n) {
    if (R(this, Er).clear(), !!(e != null && e.trim()))
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
    const n = R(this, Er).get(e);
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
    const e = R(this, Er).get("update");
    if (e != null)
      try {
        e();
      } catch (n) {
        console.warn("[BrowserCard] update handler error:", n);
      }
    const t = R(this, Er).get("render");
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
      R(this, r0).delete(n), t();
    }, e);
    return R(this, r0).add(n), n;
  }
  every(e, t) {
    const n = setInterval(t, e);
    return R(this, S0).add(n), n;
  }
  /**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/
  async teardown() {
    const e = R(this, Er).get("obsolete");
    R(this, Er).clear();
    const t = [...R(this, r0)];
    R(this, r0).clear();
    const n = [...R(this, S0)];
    if (R(this, S0).clear(), e != null)
      try {
        await e();
      } catch (a) {
        console.warn('[BrowserCard] handler "obsolete" error:', a);
      }
    t.forEach((a) => clearTimeout(a)), n.forEach((a) => clearInterval(a));
  }
}
Er = new WeakMap(), r0 = new WeakMap(), S0 = new WeakMap();
const ua = /* @__PURE__ */ new Map();
function i5(r, e) {
  return /^https?:\/\//i.test(r) ? r : r.startsWith("/") ? window.location.origin + r : r.includes("/") || r.includes(".") ? new URL(r, window.location.href).href : `https://rozek.github.io/browser-card/behaviors/${e === "deck" ? "decks" : e === "card" ? "cards" : "widgets"}/${r}.js`;
}
function Ya(r, e, t, n) {
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
  ], p = [
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
    const A = ua.get(y);
    if (A != null) {
      await A(d);
      return;
    }
    const M = await import(i5(y, t));
    if (typeof M.default == "function") {
      const z = {};
      h.forEach((q, G) => {
        z[q] = p[G];
      }), await M.default(z);
    }
  }
  return p[p.length - 1] = v, { Params: h, Args: p };
}
function Fi(r, e, t, n, a, i, s, o, l) {
  function d(m, v) {
    return { __navType: m, ...v };
  }
  function h(m) {
    if (typeof m == "string")
      return { type: "card-name", name: m };
    if (typeof m == "number")
      return { type: "card-index", index: m - 1 };
    if (m == null || typeof m != "object")
      return { type: "next" };
    const v = m;
    switch (v.__navType) {
      case "next":
        return { type: "next" };
      case "prev":
        return { type: "prev" };
      case "first":
        return { type: "first" };
      case "last":
        return { type: "last" };
      case "card-name":
        return { type: "card-name", name: v.__name };
      case "card-id":
        return { type: "card-id", id: v.__id };
      case "card-index":
        return { type: "card-index", index: v.__index };
      default:
        return { type: "next" };
    }
  }
  function p(m) {
    var y;
    const v = ((y = t == null ? void 0 : t.Card) == null ? void 0 : y.WidgetList) ?? [];
    return typeof m == "string" ? v.find((A) => A.Name === m) ?? null : typeof m == "number" ? v[m - 1] ?? null : null;
  }
  return {
    go(m) {
      n(h(m));
    },
    openURL(m) {
      window.open(m, "_blank", "noopener,noreferrer");
    },
    answer(m, ...v) {
      return new Promise(
        (y) => a(m, v.length ? v : ["OK"], y)
      );
    },
    ask(m, v = "") {
      return new Promise(
        (y) => i(m, v, y)
      );
    },
    Card(m) {
      return typeof m == "string" ? e.find((v) => v.Name === m) ? d("card-name", { __name: m }) : null : typeof m == "number" && m >= 1 && m <= e.length ? d("card-index", { __index: m - 1 }) : null;
    },
    CardNumber() {
      return o.current + 1;
    },
    CardCount() {
      return e.length;
    },
    Widget: p,
    async send(m, v, ...y) {
      const A = typeof m == "string" || typeof m == "number" ? p(m) : m, $ = A == null ? void 0 : A[Ka];
      return $ == null ? !1 : $.dispatch(v, ...y);
    },
    print: s.print,
    println: s.println,
    clearConsole: s.clearConsole,
    defineLocalBehavior(m, v) {
      const y = typeof v == "function" ? v.toString() : String(v ?? "");
      return (r.localBehaviors ?? (r.localBehaviors = {}))[m] = y, y;
    },
    localBehavior(m) {
      var y;
      const v = (y = r.localBehaviors) == null ? void 0 : y[m];
      return v == null && On(
        "NoSuchBehavior: no local behavior named " + S.quoted(m) + " has been defined"
      ), "data:text/javascript;charset=utf-8," + encodeURIComponent("export default " + v);
    },
    saveDeck() {
      return Promise.resolve(l == null ? void 0 : l());
    },
    me: t,
    my: t,
    // "me", "my" and "I" are synonyms
    I: t,
    nextCard: d("next"),
    prevCard: d("prev"),
    firstCard: d("first"),
    lastCard: d("last"),
    html: Z,
    // intentionally lowercase (see BC_ScriptContext)
    preact: D1
  };
}
const s5 = `{"Id":"bc-deck-229","Name":"BrowserCard-Pitch","readOnly":false,"swipeToAdjacentCard":true,"Script":"","Cards":[{"Id":"bc-card-230","Name":"Card 1","Color":null,"Alpha":1,"dontSearch":false,"Script":"","Widgets":[{"Id":"bc-widget-231","Name":"TitleView 2","Number":1,"Type":"generic","zIndex":1,"Anchors":["left-width","top-height"],"Offsets":[10,150,10,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"BrowserCard"},{"Id":"bc-widget-232","Name":"Label 2","Number":2,"Type":"generic","zIndex":2,"Anchors":["left-width","top-height"],"Offsets":[10,360,50,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"Play with Code and Data directly in the Browser"},{"Id":"bc-widget-233","Name":"StickyTextNote 2","Number":3,"Type":"generic","zIndex":3,"Anchors":["left-width","top-height"],"Offsets":[10,100,90,70],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/StickyTextNote.js')","Configuration":{},"Value":"Hello, World!"},{"Id":"bc-widget-234","Name":"TextView 2","Number":4,"Type":"generic","zIndex":4,"Anchors":["left-width","top-height"],"Offsets":[120,150,80,80],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"at first, it looks like yet another tool for \\"sticky notes\\", but..."},{"Id":"bc-widget-235","Name":"TextView 3","Number":5,"Type":"generic","zIndex":5,"Anchors":["left-width","top-height"],"Offsets":[10,160,170,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"you can add arbitrary media, such as images..."},{"Id":"bc-widget-236","Name":"Widget 2","Number":6,"Type":"generic","zIndex":6,"Anchors":["left-width","top-height"],"Offsets":[180,40,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"w","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-237","Name":"ImageView 2","Number":7,"Type":"generic","zIndex":7,"Anchors":["left-width","top-height"],"Offsets":[10,100,230,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/ImageView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://rozek.github.io/browser-card/dist/img/Mandelbrot_240x240.png"},{"Id":"bc-widget-238","Name":"TextView 4","Number":8,"Type":"generic","zIndex":8,"Anchors":["left-width","top-height"],"Offsets":[120,160,290,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...complete web pages..."},{"Id":"bc-widget-239","Name":"Widget 3","Number":9,"Type":"generic","zIndex":9,"Anchors":["left-width","top-height"],"Offsets":[120,40,250,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"s","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-240","Name":"TextView 5","Number":10,"Type":"generic","zIndex":10,"Anchors":["left-width","top-height"],"Offsets":[160,140,230,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...dynamic content..."},{"Id":"bc-widget-241","Name":"WebView 2","Number":11,"Type":"generic","zIndex":11,"Anchors":["left-width","top-height"],"Offsets":[10,330,350,240],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/WebView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://www.rozek.de"},{"Id":"bc-widget-242","Name":"Widget 4","Number":12,"Type":"generic","zIndex":12,"Anchors":["left-width","top-height"],"Offsets":[290,30,230,110],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-243","Name":"SubtitleView 2","Number":13,"Type":"generic","zIndex":13,"Anchors":["left-width","top-height"],"Offsets":[270,100,200,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/SubtitleView.js')\\n\\non('ready', () => {\\n  const padded = (n) => String(n).padStart(2,'0')\\n  function updateClock () {\\n    const now = new Date()\\n    my.Value = (\\n      padded(now.getHours())   + ':' + \\n      padded(now.getMinutes()) + ':' + \\n      padded(now.getSeconds())\\n    )\\n  }\\n  updateClock()                          // show immediately, then keep current\\n  every(1000, updateClock)\\n})","Configuration":{},"Value":"08:23:07"},{"Id":"bc-widget-244","Name":"Widget 5","Number":14,"Type":"generic","zIndex":14,"Anchors":["left-width","top-height"],"Offsets":[300,60,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"e","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-245","Name":"TextView 6","Number":15,"Type":"generic","zIndex":15,"Anchors":["left-width","top-height"],"Offsets":[370,170,140,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...and even input controls!"},{"Id":"bc-widget-246","Name":"TextlineInput 2","Number":16,"Type":"generic","zIndex":16,"Anchors":["left-width","top-height"],"Offsets":[370,170,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeTextlineInput.js')\\n\\nmy.Value = undefined\\n\\non('update', () => {\\n  my.Value = my.Card.QRCodeValue\\n})\\n\\non('change', (Value) => {\\n  my.Card.QRCodeValue = Value\\n})\\n","Configuration":{"Placeholder":"(enter text for QR code)"},"Value":""},{"Id":"bc-widget-247","Name":"Widget 6","Number":17,"Type":"generic","zIndex":17,"Anchors":["left-width","top-height"],"Offsets":[370,30,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-248","Name":"TextView 7","Number":18,"Type":"generic","zIndex":18,"Anchors":["left-width","top-height"],"Offsets":[400,160,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Widgets automatically react on state changes"},{"Id":"bc-widget-249","Name":"Widget 7","Number":19,"Type":"generic","zIndex":19,"Anchors":["left-width","top-height"],"Offsets":[550,50,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"e","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-250","Name":"TextView 8","Number":20,"Type":"generic","zIndex":20,"Anchors":["left-width","top-height"],"Offsets":[370,210,280,120],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Use scripting to freely experiment with code and data - a bit like a 2D REPL or like interactive computing notebooks (without the need for a server)"},{"Id":"bc-widget-251","Name":"Widget 8","Number":21,"Type":"generic","zIndex":21,"Anchors":["left-width","top-height"],"Offsets":[370,30,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-252","Name":"TextView 9","Number":22,"Type":"generic","zIndex":22,"Anchors":["left-width","top-height"],"Offsets":[400,140,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Craft complete tools, if you like"},{"Id":"bc-widget-253","Name":"TitleView 3","Number":23,"Type":"generic","zIndex":23,"Anchors":["left-width","top-height"],"Offsets":[360,250,470,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"Temperature Converter"},{"Id":"bc-widget-254","Name":"Label 3","Number":24,"Type":"generic","zIndex":24,"Anchors":["left-width","top-height"],"Offsets":[370,100,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Celsius:"},{"Id":"bc-widget-255","Name":"Label 4","Number":25,"Type":"generic","zIndex":25,"Anchors":["left-width","top-height"],"Offsets":[370,100,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Fahrenheit:"},{"Id":"bc-widget-256","Name":"NumberInput 2","Number":26,"Type":"generic","zIndex":26,"Anchors":["left-width","top-height"],"Offsets":[470,120,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = my.Card.Temperature ?? 0\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = Value\\n})","Configuration":{},"Value":5},{"Id":"bc-widget-257","Name":"NumberInput 3","Number":27,"Type":"generic","zIndex":27,"Anchors":["left-width","top-height"],"Offsets":[470,120,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = (my.Card.Temperature ?? 0) * 9/5 + 32\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = (Value-32) * 5/9\\n})","Configuration":{},"Value":41},{"Id":"bc-widget-258","Name":"Widget","Number":28,"Type":"generic","zIndex":28,"Anchors":["left-width","top-height"],"Offsets":[610,80,480,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-259","Name":"TextView 10","Number":29,"Type":"generic","zIndex":29,"Anchors":["left-width","top-height"],"Offsets":[590,200,380,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Now export your work as a self-contained web page and BrowserCard serves as a low-code application generator!"},{"Id":"bc-widget-260","Name":"Widget-2","Number":30,"Type":"generic","zIndex":30,"Anchors":["left-width","top-height"],"Offsets":[610,160,150,160],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/QRCodeView.js')\\n\\nconst DefaultValue = 'https://github.com/rozek/browser-card'\\n\\nmy.Value = DefaultValue\\n\\non('update', () => {\\n  const Value = my.Card.QRCodeValue\\n  my.Value = (Value == null) || (Value === '') ? DefaultValue : Value\\n})\\n","Configuration":{"ErrorCorrection":"M","Border":4,"Color":"#000000","Background":"#ffffff"},"Value":"https://github.com/rozek/browser-card"},{"Id":"bc-widget-261","Name":"Widget 9","Number":31,"Type":"generic","zIndex":31,"Anchors":["left-width","top-height"],"Offsets":[670,30,320,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-262","Name":"HTMLView","Number":32,"Type":"generic","zIndex":32,"Anchors":["left-width","top-height"],"Offsets":[630,120,340,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/HTMLView.js')","Configuration":{},"Value":"<span style=\\"font-weight:bold; font-size:18px\\">Have &nbsp; &nbsp; Fun!</span>"},{"Id":"bc-widget-263","Name":"TextView 11","Number":33,"Type":"generic","zIndex":33,"Anchors":["left-width","top-height"],"Offsets":[530,260,30,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"BrowserCard started as a small test for Anthropic Fable 5 (while it was available for non-US citizens), but soon turned out to be quite useful - try yourself!"},{"Id":"bc-widget-264","Name":"Widget 10","Number":34,"Type":"generic","zIndex":34,"Anchors":["left-width","top-height"],"Offsets":[280,240,70,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"ne","ArrowHeads":"end","Color":"#000000","Thickness":2}}],"Temperature":5,"QRCodeValue":""}],"SnapToGrid":true,"CardWidth":800,"CardHeight":600}`, td = JSON.parse(s5), o5 = JSON.stringify(td), Xt = Wc("browser-card", "decks"), V0 = "bc-deck:", xs = "bc-remember-deck", Qa = "bc-last-deck";
function so() {
  try {
    return localStorage.getItem(xs) === "1";
  } catch {
    return !1;
  }
}
function l5(r) {
  try {
    so() && r !== "" && localStorage.setItem(Qa, r);
  } catch {
  }
}
function c5(r, e) {
  try {
    r ? (localStorage.setItem(xs, "1"), e !== "" && localStorage.setItem(Qa, e)) : (localStorage.removeItem(xs), localStorage.removeItem(Qa));
  } catch {
  }
}
function ei(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Id) && S.ValueIsString(r.Type) && ro(r.Anchors) && no(r.Offsets);
}
function oo(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Id) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Widgets) && r.Widgets.every(ei);
}
function Mr(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Cards) && r.Cards.every(oo);
}
const ys = "web application/x-browsercard-card", ks = "web application/x-browsercard-widget";
async function dc(r, e) {
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
async function u5() {
  try {
    const r = await navigator.clipboard.read();
    for (const e of r) {
      if (e.types.includes(ys))
        return { Kind: "card", Serialization: await (await e.getType(ys)).text() };
      if (e.types.includes(ks))
        return { Kind: "widget", Serialization: await (await e.getType(ks)).text() };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not inspect the clipboard - trying plain text:", r);
  }
  try {
    const r = (await navigator.clipboard.readText()).trim(), e = JSON.parse(r), t = Array.isArray(e) && e.length > 0 && e.every(ei);
    switch (!0) {
      case oo(e):
        return { Kind: "card", Serialization: r };
      case ei(e):
        return { Kind: "widget", Serialization: r };
      case t:
        return { Kind: "widget", Serialization: r };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not read from the clipboard:", r);
  }
  return null;
}
function Yn(r) {
  const e = (t) => {
    if (t == null)
      return;
    const n = /-(\d+)$/.exec(t);
    n != null && (Za = Math.max(Za, parseInt(n[1], 10)));
  };
  e(r.Id), r.Cards.forEach((t) => {
    e(t.Id), t.Widgets.forEach((n) => e(n.Id));
  });
}
function d5(r) {
  var t, n;
  const e = {};
  if (r.FontFamily && (e.fontFamily = r.FontFamily), r.FontSize != null && (e.fontSize = `${r.FontSize}px`), r.FontWeight && (e.fontWeight = X4[r.FontWeight]), r.FontStyle && (e.fontStyle = r.FontStyle), r.LineHeight != null && (e.lineHeight = `${r.LineHeight}px`), r.ForegroundColor && (e.color = r.ForegroundColor), r.TextAlignment && (e.textAlign = r.TextAlignment), r.Opacity != null && (e.opacity = r.Opacity), r.Cursor && (e.cursor = r.Cursor), (t = r.TextDecoration) != null && t.isActive) {
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
function h5(r) {
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
function Yt(r, e, t, n) {
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
function M0(r, e, t, n, a, i, s) {
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
function p5(r, e, t, n, a) {
  let i = null, s = null, o;
  return new Proxy(r, {
    get(l, d) {
      if (d === Ka)
        return s;
      if (d === an)
        return o;
      switch (d) {
        case "own":
          return i ?? (i = {});
        case "View":
          return o;
        case "Deck":
          return t;
        case "Card":
          return n;
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
          return (h, p, m, v) => {
            const { W: y, H: A } = e.current, { left: $, top: M, width: z, height: q } = Yt(l.Anchors, l.Offsets, y, A), G = M0(h ?? $, p ?? M, m ?? z, v ?? q, l.Anchors, y, A);
            return l.Offsets = G, a(), G;
          };
        case "rerender":
          return a;
        // force a re-render of this widget
        default:
          return Reflect.get(l, d);
      }
    },
    set(l, d, h) {
      return d === Ka ? (s = h, !0) : d === an ? (o = h, !0) : d === "View" ? !0 : d === "own" ? (i = h, !0) : (Object.is(Reflect.get(l, d), h) || (Reflect.set(l, d, h), a()), !0);
    }
  });
}
function f5(r, e, t, n) {
  let a = null, i, s;
  return s = new Proxy(r, {
    get(o, l) {
      if (l === an)
        return i;
      switch (l) {
        case "own":
          return a ?? (a = {});
        case "View":
          return i;
        case "Deck":
          return e;
        case "Card":
          return s;
        case "WidgetList":
          return t.current;
        case "rerender":
          return n;
        // force a re-render of this card and its widgets
        default:
          return Reflect.get(o, l);
      }
    },
    set(o, l, d) {
      return l === an ? (i = d, !0) : l === "View" ? !0 : l === "own" ? (a = d, !0) : (Object.is(Reflect.get(o, l), d) || (Reflect.set(o, l, d), n()), !0);
    }
  }), s;
}
function m5(r, e, t) {
  let n = null, a, i = "", s = 0, o = 0, l;
  return l = new Proxy(r, {
    get(d, h) {
      if (h === fi)
        return t;
      if (h === an)
        return a;
      if (h === Rn)
        return i;
      if (h === ta)
        return s;
      if (h === ea)
        return o;
      switch (h) {
        case "own":
          return n ?? (n = {});
        case "View":
          return a;
        case "Deck":
          return l;
        case "Card":
          return e.current;
        case "Console_LineLimit":
          return Reflect.get(d, h) ?? io;
        case "Console_CharLimit":
          return Reflect.get(d, h) ?? ao;
        default:
          return Reflect.get(d, h);
      }
    },
    set(d, h, p) {
      return h === an ? (a = p, !0) : h === "View" ? !0 : h === "own" ? (n = p, !0) : h === Rn ? (i = p, !0) : h === ta ? (s = p, !0) : h === ea ? (o = p, !0) : (Object.is(Reflect.get(d, h), p) || (Reflect.set(d, h, p), t()), !0);
    }
  }), l;
}
function g5(r, e, t) {
  const { left: n, top: a, width: i, height: s } = Yt(r.Anchors, r.Offsets, e, t);
  return {
    left: n,
    top: a,
    width: i,
    height: s,
    zIndex: r.zIndex,
    display: r.visible ? void 0 : "none",
    ...d5(r),
    ...h5(r)
  };
}
function Ta(r, e, t, n, a, i) {
  const s = Math.sqrt(t * t + n * n);
  if (s < 1e-3)
    return "";
  const o = t / s, l = n / s, d = r - a * o, h = e - a * l;
  return `${r},${e} ${d - i * l},${h + i * o} ${d + i * l},${h - i * o}`;
}
function b5(r, e, t) {
  const n = r.BorderColor ?? "#333", a = r.BorderWidth ?? 2, i = r.FillColor ?? "transparent";
  if (r.Variant === "rectangle" || r.Variant === "rounded-rectangle" || r.Variant === "oval") {
    const $ = r.Variant === "oval" ? "50%" : r.Variant === "rounded-rectangle" ? `${r.CornerRadius ?? 12}px` : void 0;
    return Z`
      <div style=${{
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      background: i,
      border: `${a}px solid ${n}`,
      borderRadius: $
    }}></div>
    `;
  }
  if (r.Variant === "polygon") {
    const $ = Math.max(3, r.Sides ?? 6), M = e / 2, z = t / 2, q = e / 2 - a, G = t / 2 - a, Y = Array.from({ length: $ }, (N, ie) => {
      const ue = 2 * Math.PI * ie / $ - Math.PI / 2;
      return `${M + q * Math.cos(ue)},${z + G * Math.sin(ue)}`;
    }).join(" ");
    return Z`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <polygon points=${Y}
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
    const $ = s ? Z`<polygon
      points=${Ta(0, 0, -e, -t, l, d)} fill=${n} stroke="none"/>` : null, M = o ? Z`<polygon
      points=${Ta(e, t, e, t, l, d)} fill=${n} stroke="none"/>` : null;
    return Z`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <line x1="0" y1="0" x2=${e} y2=${t} ...${h}/>
        ${$}${M}
      </svg>
    `;
  }
  const p = r.Curvature ?? 0.4, m = e / 2 - p * t, v = t / 2 + p * e, y = s ? Z`<polygon
    points=${Ta(0, 0, -m, -v, l, d)} fill=${n} stroke="none"/>` : null, A = o ? Z`<polygon
    points=${Ta(e, t, e - m, t - v, l, d)} fill=${n} stroke="none"/>` : null;
  return Z`
    <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
      <path d=${`M 0 0 Q ${m} ${v} ${e} ${t}`} ...${h}/>
      ${y}${A}
    </svg>
  `;
}
ua.set("button", async ({ on: r, me: e, html: t, dispatch: n }) => {
  const a = e;
  function i() {
    a.autoHilite === !0 && (a.Variant === "checkbox" || a.Variant === "radio") && (a.Hilite = !a.Hilite), n("click");
  }
  r("render", () => {
    const s = (
      // "Value" takes precedence over the mere name
      a.Value != null && a.Value !== "" ? a.Value : a.Name
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
ua.set("field", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const a = n.scrolling ? " scrollable" : " no-scroll", i = n.showLines ? " show-lines" : "", s = `bc-field s-${n.Variant ?? "default"}${a}${i}`, o = {
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
ua.set("shape", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const a = n.Width ?? 0, i = n.Height ?? 0;
    return t`${b5(n, a, i)}`;
  });
});
ua.set("picture", async ({ on: r, me: e, html: t }) => {
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
function v5({
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
  const [, d] = et(0), h = De(!1), p = Wt(() => {
    h.current || d((pe) => pe + 1);
  }, []), m = De(null);
  m.current == null && (m.current = new Ja());
  const v = De({ W: e, H: t });
  v.current = { W: e, H: t };
  const y = De(null);
  y.current == null && (y.current = p5(r, v, a, i, p));
  const A = y.current, $ = Wt(
    (pe) => {
      A[an] = pe ?? void 0;
    },
    [A]
  ), M = De(o);
  M.current = o;
  const z = De(l);
  z.current = l;
  const q = De(null);
  q.current == null && (q.current = n(A));
  const G = De(void 0);
  if (G.current == null) {
    const pe = m.current;
    G.current = {
      Configuration: r.Configuration ?? {},
      dispatch: (_e, ...ke) => {
        var L;
        pe.dispatch(_e, ...ke), (L = z.current) == null || L.call(z, _e);
      }
    };
  }
  const N = (/* @__PURE__ */ new Set(["button", "field", "shape", "picture"])).has(r.Type) ? `await behaveLike(${JSON.stringify(r.Type)})
` : "";
  if (nr(() => {
    const pe = m.current;
    G.current.Configuration = r.Configuration ?? {};
    const { Params: _e, Args: ke } = Ya(pe, q.current, "widget", G.current);
    A[Ka] = pe, s(r.Id, A);
    let L = r.Script ?? "";
    if (L.trim() !== "")
      try {
        new Function(`return (async () => {
${L}
})()`);
      } catch (re) {
        console.warn("[BrowserCard] syntax error in script of widget " + S.quoted(r.Name) + ":", re), L = "";
      }
    const V = N + L;
    return pe.run(V, _e, ke).then(async () => {
      p(), await pe.dispatch("ready"), M.current(r.Id);
    }), () => {
      pe.teardown();
    };
  }, [r.Script, r.Configuration]), !r.visible)
    return null;
  const ie = m.current;
  h.current = !0;
  let ue;
  try {
    ue = ie.renderResult() ?? null;
  } finally {
    h.current = !1;
  }
  const W = r.Type === "shape" || r.Type === "button" ? { overflow: "visible" } : { overflow: "hidden" };
  return Z`
    <div
      ref=${$}
      class=${`bc-widget${r.Type === "shape" ? " bc-shape" : ""}`}
      style=${{ ...g5(r, e, t), ...W }}
    >
      ${ue}
    </div>
  `;
}
const v0 = 8, w5 = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#e5e7eb"/><circle cx="55" cy="35" r="10" fill="#9ca3af"/><path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/></svg>'
);
function Ss(r, e, t = " ") {
  const n = /^(.*?)([ -])(\d+)$/.exec(r);
  let a, i, s;
  n != null ? (a = n[1], i = n[2], s = parseInt(n[3], 10)) : (a = r, i = t, s = 1);
  let o = r;
  for (; e.has(o); )
    s += 1, o = `${a}${i}${s}`;
  return o;
}
function x5(r, e, t, n) {
  const a = {
    button: { BaseName: "Button", Width: 140, Height: 36 },
    field: { BaseName: "Field", Width: 200, Height: 80 },
    shape: { BaseName: "Shape", Width: 140, Height: 100 },
    picture: { BaseName: "Picture", Width: 160, Height: 120 },
    generic: { BaseName: "Widget", Width: 200, Height: 120 }
  }, { BaseName: i, Width: s, Height: o } = a[r], l = new Set(e.Widgets.map((m) => m.Name)), d = Ss(i, l, "-"), h = e.Widgets.reduce((m, v) => Math.max(m, v.zIndex), 0), p = {
    Id: ar("widget"),
    Name: d,
    Number: h + 1,
    Type: r,
    zIndex: h + 1,
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
      Object.assign(p, {
        Variant: "rounded-rect",
        showName: !0,
        autoHilite: !0,
        enabled: !0,
        sharedHilite: !1,
        Value: ""
      });
      break;
    case "field":
      Object.assign(p, {
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
      Object.assign(p, {
        Variant: "rectangle",
        FillColor: "#dbeafe",
        BorderColor: "#3b82f6",
        BorderWidth: 2
      });
      break;
    case "picture":
      Object.assign(p, {
        Variant: "scale-aspect-fit",
        autoHilite: !1,
        ImageData: w5,
        actualWidth: s,
        actualHeight: o
      });
      break;
    default:
      Object.assign(p, {
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
  return p;
}
function y5({
  Objects: r,
  CanvasW: e,
  CanvasH: t,
  Scale: n,
  selectedIds: a,
  onSelect: i,
  onSelectMany: s,
  onEdited: o,
  Grid: l = { isActive: !1, Width: 10, Height: 10 },
  onBeforeEdit: d
}) {
  const h = De(null), p = De(null), m = De(null), [v, y] = et(null);
  function A(L) {
    const V = Math.min(...L.map((E) => E.left)), re = Math.min(...L.map((E) => E.top)), O = Math.max(...L.map((E) => E.left + E.width)), j = Math.max(...L.map((E) => E.top + E.height));
    return { left: V, top: re, width: O - V, height: j - re };
  }
  function $(L, V, re, O) {
    if (O.length === 0)
      return;
    L.stopPropagation(), L.preventDefault(), L.currentTarget.setPointerCapture(L.pointerId);
    const j = O.map((E) => ({
      Obj: E,
      Origin: Yt(E.Anchors, E.Offsets, e, t)
    }));
    p.current = {
      PointerId: L.pointerId,
      Mode: V,
      Direction: re,
      startX: L.clientX,
      startY: L.clientY,
      GroupOrigin: A(j.map((E) => E.Origin)),
      Items: j,
      captured: !1
    };
  }
  function M(L) {
    const V = p.current;
    if (V == null || L.pointerId !== V.PointerId)
      return;
    V.captured || (V.captured = !0, d == null || d());
    let re = (L.clientX - V.startX) / n, O = (L.clientY - V.startY) / n;
    const j = V.GroupOrigin;
    if (V.Mode === "move") {
      l.isActive && (re = Math.round((j.left + re) / l.Width) * l.Width - j.left, O = Math.round((j.top + O) / l.Height) * l.Height - j.top);
      for (const { Obj: E, Origin: Q } of V.Items)
        E.Offsets = M0(
          Q.left + re,
          Q.top + O,
          Q.width,
          Q.height,
          E.Anchors,
          e,
          t
        );
    } else {
      const E = V.Direction;
      l.isActive && (E.includes("w") && (re = Math.round((j.left + re) / l.Width) * l.Width - j.left), E.includes("e") && (re = Math.round((j.left + j.width + re) / l.Width) * l.Width - (j.left + j.width)), E.includes("n") && (O = Math.round((j.top + O) / l.Height) * l.Height - j.top), E.includes("s") && (O = Math.round((j.top + j.height + O) / l.Height) * l.Height - (j.top + j.height)));
      for (const { Obj: Q, Origin: Ne } of V.Items) {
        let { left: Me, top: He, width: Ve, height: Ue } = Ne;
        E.includes("w") && (Me += re, Ve -= re), E.includes("e") && (Ve += re), E.includes("n") && (He += O, Ue -= O), E.includes("s") && (Ue += O), Ve < v0 && (E.includes("w") && (Me = Ne.left + Ne.width - v0), Ve = v0), Ue < v0 && (E.includes("n") && (He = Ne.top + Ne.height - v0), Ue = v0), Q.Offsets = M0(Me, He, Ve, Ue, Q.Anchors, e, t);
      }
    }
    o();
  }
  function z(L) {
    const V = p.current;
    V == null || L.pointerId !== V.PointerId || (L.currentTarget.releasePointerCapture(L.pointerId), p.current = null);
  }
  function q(L) {
    const V = h.current;
    if (V == null)
      return null;
    const re = V.getBoundingClientRect();
    return { x: (L.clientX - re.left) / n, y: (L.clientY - re.top) / n };
  }
  function G(L) {
    if (L.button !== 0)
      return;
    const V = q(L);
    V != null && (L.currentTarget.setPointerCapture(L.pointerId), m.current = {
      PointerId: L.pointerId,
      x0: V.x,
      y0: V.y,
      additive: L.shiftKey || L.metaKey,
      moved: !1,
      box: { left: V.x, top: V.y, width: 0, height: 0 }
    });
  }
  function Y(L) {
    const V = m.current;
    if (V == null || L.pointerId !== V.PointerId)
      return;
    const re = q(L);
    if (re == null)
      return;
    const O = {
      left: Math.min(V.x0, re.x),
      top: Math.min(V.y0, re.y),
      width: Math.abs(re.x - V.x0),
      height: Math.abs(re.y - V.y0)
    };
    (O.width > 3 || O.height > 3) && (V.moved = !0), V.box = O, y(O);
  }
  function N(L) {
    const V = m.current;
    if (V == null || L.pointerId !== V.PointerId)
      return;
    if (L.currentTarget.releasePointerCapture(L.pointerId), m.current = null, y(null), !V.moved) {
      V.additive || i(null, !1);
      return;
    }
    const re = V.box, O = r.filter((j) => {
      const E = Yt(j.Anchors, j.Offsets, e, t);
      return !(E.left > re.left + re.width || E.left + E.width < re.left || E.top > re.top + re.height || E.top + E.height < re.top);
    }).map((j) => j.Id);
    s(O, V.additive);
  }
  const ie = r.filter((L) => a.includes(L.Id)), ue = Math.max(6, 8 / n), W = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], pe = ie.length > 0 ? A(ie.map((L) => Yt(L.Anchors, L.Offsets, e, t))) : null;
  function _e(L, V) {
    return {
      width: ue,
      height: ue,
      cursor: L + "-resize",
      left: (L.includes("w") ? 0 : L.includes("e") ? V.width : V.width / 2) - ue / 2,
      top: (L.includes("n") ? 0 : L.includes("s") ? V.height : V.height / 2) - ue / 2
    };
  }
  const ke = l.isActive ? {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
    backgroundSize: `${l.Width}px ${l.Height}px`
  } : {};
  return Z`
      <div class="bc-edit-layer" ref=${h} style=${ke}
        onPointerDown=${G}
        onPointerMove=${Y}
        onPointerUp=${N}
        onContextMenu=${(L) => L.preventDefault()}>
        ${r.map((L) => {
    const V = Yt(L.Anchors, L.Offsets, e, t);
    return Z`
            <div key=${L.Id}
              class=${`bc-edit-hit${L.visible ? "" : " invisible"}`}
              style=${{ left: V.left, top: V.top, width: V.width, height: V.height, zIndex: L.zIndex }}
              onPointerDown=${(re) => {
      if (re.stopPropagation(), re.shiftKey || re.metaKey) {
        i(L.Id, !0);
        return;
      }
      a.includes(L.Id) ? $(re, "move", "", r.filter((j) => a.includes(j.Id))) : (i(L.Id, !1), $(re, "move", "", [L]));
    }}
              onPointerMove=${M}
              onPointerUp=${z}
              onContextMenu=${(re) => re.preventDefault()}
            ></div>
          `;
  })}
        ${ie.length > 1 && ie.map((L) => {
    const V = Yt(L.Anchors, L.Offsets, e, t);
    return Z`
            <div key=${"member:" + L.Id} class="bc-selection-member"
              style=${{ left: V.left, top: V.top, width: V.width, height: V.height }}></div>
          `;
  })}
        ${pe != null && Z`
          <div class="bc-selection-frame"
            style=${{ left: pe.left, top: pe.top, width: pe.width, height: pe.height }}>
            ${W.map((L) => Z`
              <div key=${L} class="bc-handle" style=${_e(L, pe)}
                onPointerDown=${(V) => $(V, "resize", L, ie)}
                onPointerMove=${M}
                onPointerUp=${z}
                onContextMenu=${(V) => V.preventDefault()}
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
function k5({
  State: r,
  onClose: e
}) {
  const [t, n] = et(() => ({
    x: Math.max(8, Math.round((window.innerWidth - 560) / 2)),
    y: Math.max(8, Math.round((window.innerHeight - 420) / 2)),
    Width: 560,
    Height: 420
  })), a = De(r.Value), i = De(null);
  function s(h, p) {
    h.stopPropagation(), h.preventDefault(), h.currentTarget.setPointerCapture(h.pointerId), i.current = {
      PointerId: h.pointerId,
      Mode: p,
      startX: h.clientX,
      startY: h.clientY,
      Origin: { ...t }
    };
  }
  function o(h) {
    const p = i.current;
    if (p == null || h.pointerId !== p.PointerId)
      return;
    const m = h.clientX - p.startX, v = h.clientY - p.startY;
    p.Mode === "move" ? n((y) => ({
      ...y,
      x: Math.max(0, p.Origin.x + m),
      y: Math.max(0, p.Origin.y + v)
    })) : n((y) => ({
      ...y,
      Width: Math.max(300, p.Origin.Width + m),
      Height: Math.max(200, p.Origin.Height + v)
    }));
  }
  function l(h) {
    const p = i.current;
    p == null || h.pointerId !== p.PointerId || (h.currentTarget.releasePointerCapture(h.pointerId), i.current = null);
  }
  function d() {
    r.onCommit(a.current), e();
  }
  return nr(() => {
    function h(p) {
      p.key === "Escape" && (p.stopPropagation(), e()), p.key === "Enter" && (p.metaKey || p.ctrlKey) && (p.stopPropagation(), d());
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
function S5({
  Widget: r,
  SelectedCount: e = 0,
  CanvasW: t,
  CanvasH: n,
  onEdited: a,
  CardNames: i = [],
  CardIndex: s = 0,
  onDelete: o,
  onReorder: l,
  onMoveTo: d,
  Card: h = null,
  Deck: p = null,
  onOpenEditor: m,
  onBeforeEdit: v,
  onCopy: y
}) {
  if (r == null) {
    let O = function(E, Q) {
      v == null || v(`card:${h.Id}:${E}`), h[E] = Q, a();
    }, j = function(E, Q) {
      p != null && (v == null || v(`deck:${E}`), p[E] = Q, a());
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
                ${i.map((E, Q) => Z`<option key=${Q} value=${String(Q)}>${E}</option>`)}
              </select>
            </div>

            <button class="bc-props-btn copy"   onClick=${y}>Copy Widgets</button>
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
          <div class="bc-props-hint">
            no widget selected - these are the properties of the card itself
          </div>

          <div class="bc-props-section">General</div>
          <div class="bc-props-row">
            <label>Name</label>
            <input type="text" value=${h.Name}
              onInput=${(E) => O("Name", E.target.value)}/>
          </div>
          ${mc("Color", h.Color ?? "#ffffff00", (E) => O("Color", E))}
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${!h.dontSearch}
              onChange=${(E) => O("dontSearch", !E.target.checked)}/>
          </div>

          ${p != null && Z`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${p.CardWidth ?? 800}
                onInput=${(E) => {
      const Q = parseFloat(E.target.value);
      isFinite(Q) && Q >= 50 && j("CardWidth", Q);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${p.CardHeight ?? 600}
                onInput=${(E) => {
      const Q = parseFloat(E.target.value);
      isFinite(Q) && Q >= 50 && j("CardHeight", Q);
    }}/>
            </div>

            <div class="bc-props-section">Grid (Deck)</div>
            <div class="bc-props-row">
              <label>snap to grid</label>
              <input type="checkbox" checked=${p.SnapToGrid === !0}
                onChange=${(E) => j("SnapToGrid", E.target.checked)}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Width</label>
              <input type="number" min="1" value=${p.GridWidth ?? 10}
                onInput=${(E) => {
      const Q = parseFloat(E.target.value);
      isFinite(Q) && Q >= 1 && j("GridWidth", Q);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${p.GridHeight ?? 10}
                onInput=${(E) => {
      const Q = parseFloat(E.target.value);
      isFinite(Q) && Q >= 1 && j("GridHeight", Q);
    }}/>
            </div>

            <div class="bc-props-section">Script (Deck)</div>
            <div class="bc-props-row column">
              <div class="bc-props-rowheader">
                <label>Script</label>
                ${m != null && Z`
                  <button class="bc-props-expand" title="open in editor window"
                    onClick=${() => m(
      `Deck "${p.Name}" - Script`,
      p.Script ?? "",
      (E) => j("Script", E)
    )}>⤢</button>
                `}
              </div>
              <textarea rows="10" spellcheck=${!1} defaultValue=${p.Script ?? ""}
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
      (E) => O("Script", E)
    )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${!1} defaultValue=${h.Script ?? ""}
              onChange=${(E) => O("Script", E.target.value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `;
  }
  const A = Yt(r.Anchors, r.Offsets, t, n);
  function $(O, j) {
    v == null || v(`prop:${r.Id}:${O}`), r[O] = j, a();
  }
  function M(O, j, E, Q) {
    v == null || v(`geo:${r.Id}`), r.Offsets = M0(
      O ?? A.left,
      j ?? A.top,
      E ?? A.width,
      Q ?? A.height,
      r.Anchors,
      t,
      n
    ), a();
  }
  function z(O, j) {
    v == null || v(`anchors:${r.Id}`);
    const E = [...r.Anchors];
    E[O] = j, r.Anchors = E, r.Offsets = M0(
      A.left,
      A.top,
      A.width,
      A.height,
      E,
      t,
      n
    ), a();
  }
  function q(O, j) {
    return Z`<input type="number" value=${Math.round(O * 100) / 100}
        onInput=${(E) => {
      const Q = parseFloat(E.target.value);
      isFinite(Q) && j(Q);
    }}/>`;
  }
  function G(O, j) {
    return Z`<div class="bc-props-row">
        <label>${O}</label>
        <input type="text" value=${r[j] ?? ""}
          onInput=${(E) => $(j, E.target.value)}/>
      </div>`;
  }
  function Y(O, j, E = 0) {
    return Z`<div class="bc-props-row">
        <label>${O}</label>
        ${q(
      r[j] ?? E,
      (Q) => $(j, Q)
    )}
      </div>`;
  }
  function N(O, j) {
    return Z`<div class="bc-props-row">
        <label>${O}</label>
        <input type="checkbox" checked=${!!r[j]}
          onChange=${(E) => $(j, E.target.checked)}/>
      </div>`;
  }
  function ie(O, j, E) {
    return Z`<div class="bc-props-row">
        <label>${O}</label>
        <select value=${r[j] ?? E[0]}
          onChange=${(Q) => $(j, Q.target.value)}>
          ${E.map((Q) => Z`<option key=${Q} value=${Q}>${Q}</option>`)}
        </select>
      </div>`;
  }
  function ue(O, j, E) {
    const Q = r[j] ?? E;
    return mc(O, Q, (Ne) => $(j, Ne));
  }
  const W = (
    // user-facing name of the widget's type
    r.Type === "generic" ? "custom widget" : r.Type
  );
  function pe(O, j, E) {
    return Z`<div class="bc-props-rowheader">
        <label>${O}</label>
        ${m != null && Z`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => m(
      `${W} "${r.Name}" - ${O}`,
      j(),
      E
    )}>⤢</button>
        `}
      </div>`;
  }
  function _e(O, j, E = 4) {
    return Z`<div class="bc-props-row column">
        ${pe(
      O,
      () => String(r[j] ?? ""),
      (Q) => $(j, Q)
    )}
        <textarea rows=${E} defaultValue=${r[j] ?? ""}
          onInput=${(Q) => $(j, Q.target.value)}
        ></textarea>
      </div>`;
  }
  function ke(O) {
    try {
      $("Configuration", JSON.parse(O));
    } catch (j) {
      console.warn('[BrowserCard] invalid JSON for "Configuration":', j), window.alert("The given configuration is no valid JSON and was not applied.");
    }
  }
  function L() {
    return Z`<div class="bc-props-row column">
        ${pe(
      "Configuration (JSON)",
      () => JSON.stringify(r.Configuration ?? {}, null, 2),
      ke
    )}
        <textarea rows="5" spellcheck=${!1}
          defaultValue=${JSON.stringify(r.Configuration ?? {}, null, 2)}
          onChange=${(O) => ke(O.target.value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`;
  }
  function V() {
    return Z`<div class="bc-props-row column">
        ${pe(
      "Script",
      () => r.Script ?? "",
      (O) => $("Script", O)
    )}
        <textarea rows="8" spellcheck=${!1} defaultValue=${r.Script ?? ""}
          onChange=${(O) => $("Script", O.target.value)}
        ></textarea>
        <div class="bc-props-hint">applied when the field loses focus</div>
      </div>`;
  }
  let re = null;
  switch (r.Type) {
    case "button":
      re = Z`
          ${ie("Style", "Variant", ["rounded-rect", "rectangle", "oval", "shadow", "checkbox", "radio", "standard", "transparent"])}
          ${G("Value", "Value")}
          ${N("show label", "showName")}
          ${N("enabled", "enabled")}
          ${N("auto-hilite", "autoHilite")}
          ${N("hilite", "Hilite")}
        `;
      break;
    case "field":
      re = Z`
          ${ie("Style", "Variant", ["opaque", "transparent", "shadow", "rectangle"])}
          ${_e("Value", "Value")}
          ${N("locked", "lockText")}
          ${N("scrolling", "scrolling")}
          ${N("show lines", "showLines")}
          ${Y("Font Size", "FontSize", 14)}
          ${ie("Font Weight", "FontWeight", ["normal", "bold"])}
          ${ie("Alignment", "TextAlign", ["left", "center", "right"])}
          ${ue("Color", "Color", "#111111")}
        `;
      break;
    case "shape":
      re = Z`
          ${ie("Style", "Variant", ["rectangle", "rounded-rectangle", "oval", "line", "arc", "polygon"])}
          ${ue("Fill Color", "FillColor", "transparent")}
          ${ue("Border Color", "BorderColor", "#333333")}
          ${Y("Border Width", "BorderWidth", 2)}
          ${N("arrow at start", "ArrowStart")}
          ${N("arrow at end", "ArrowEnd")}
          ${Y("Curvature", "Curvature", 0.4)}
          ${Y("Sides", "Sides", 6)}
          ${Y("Corner Radius", "CornerRadius", 12)}
        `;
      break;
    case "picture":
      re = Z`
          ${ie("Style", "Variant", ["scale-aspect-fill", "scale-aspect-fit", "scale-to-fill", "actual-size", "center"])}
          ${G("Image URL", "ImageData")}
        `;
      break;
    default:
      re = Z`
          ${_e("Value", "Value")}
          ${L()}
        `;
  }
  return Z`
      <div class="bc-props-panel">
        <div class="bc-props-title">${r.Name}</div>
        <div class="bc-props-subtitle">${W} · ${r.Id}</div>

        <div class="bc-props-section">General</div>
        ${G("Name", "Name")}
        ${N("visible", "visible")}
        ${Y("z-Index", "zIndex", 0)}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${q(A.left, (O) => M(O))}
          ${q(A.top, (O) => M(void 0, O))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${q(A.width, (O) => M(void 0, void 0, O))}
          ${q(A.height, (O) => M(void 0, void 0, void 0, O))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${r.Anchors[0]}
            onChange=${(O) => z(0, O.target.value)}>
            ${L1.map((O) => Z`<option key=${O} value=${O}>${O}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${r.Anchors[1]}
            onChange=${(O) => z(1, O.target.value)}>
            ${F1.map((O) => Z`<option key=${O} value=${O}>${O}</option>`)}
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
            onChange=${(O) => d == null ? void 0 : d(parseInt(O.target.value, 10))}>
            ${i.map((O, j) => Z`<option key=${j} value=${String(j)}>${O}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">${r.Type === "generic" ? "Custom Widget" : "Appearance"}</div>
        ${re}

        <div class="bc-props-section">Script</div>
        ${V()}

        <button class="bc-props-btn copy"   onClick=${y}>Copy Widget</button>
        <button class="bc-props-btn delete" onClick=${o}>Delete Widget</button>
      </div>
    `;
}
function x0(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function hc(r) {
  const e = /^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(r);
  return e == null ? "#ffffff" : "#" + e[1].toLowerCase();
}
function pc(r) {
  if (r == null || r === "transparent")
    return 0;
  const e = /^#[0-9a-f]{6}([0-9a-f]{2})$/i.exec(r);
  if (e != null)
    return Math.round(parseInt(e[1], 16) / 255 * 100);
  const t = /^rgba\([^,]+,[^,]+,[^,]+,\s*([01]|0?\.[0-9]+)\s*\)$/i.exec(r);
  return t != null ? Math.round(parseFloat(t[1]) * 100) : 100;
}
function fc(r, e) {
  const t = /^#?([0-9a-f]{6})$/i.exec(r), n = t == null ? "ffffff" : t[1].toLowerCase(), a = Math.round(x0(e, 0, 100) / 100 * 255).toString(16).padStart(2, "0");
  return "#" + n + a;
}
function mc(r, e, t) {
  return Z`<div class="bc-props-row">
    <label>${r}</label>
    <input type="color" value=${hc(e)}
      onInput=${(n) => t(fc(n.target.value, pc(e)))}/>
    <input class="bc-props-opacity" type="number" min="0" max="100" title="opacity (%)"
      value=${pc(e)}
      onInput=${(n) => {
    const a = parseInt(n.target.value, 10);
    isFinite(a) && t(fc(hc(e), a));
  }}/>
    <input type="text" value=${e}
      onInput=${(n) => t(n.target.value)}/>
  </div>`;
}
function _5({
  Card: r,
  Scale: e,
  CanvasW: t,
  CanvasH: n,
  makeContext: a,
  deckProxy: i,
  onCardProxy: s,
  onCardReady: o,
  onMessage: l,
  deckRenderSlot: d = null,
  isEditing: h = !1,
  selectedIds: p = [],
  onSelect: m,
  onSelectMany: v,
  onEdited: y,
  Grid: A,
  onBeforeEdit: $
}) {
  const [, M] = et(0), z = De(!1), q = Wt(() => {
    z.current || M((we) => we + 1);
  }, []), G = De(null);
  G.current == null && (G.current = new Ja());
  const Y = De(o);
  Y.current = o;
  const N = De(l);
  N.current = l;
  const ie = E0(
    () => r.Widgets,
    [r]
  ), ue = De([]), W = De(/* @__PURE__ */ new Map()), pe = De(null);
  pe.current == null && (pe.current = f5(r, i, ue, q));
  const _e = pe.current, ke = Wt(
    (we) => {
      _e[an] = we ?? void 0;
    },
    [_e]
  ), L = De(/* @__PURE__ */ new Set()), V = De(!1), re = De(!1), O = De(ie);
  O.current = ie;
  const j = De(() => {
  });
  j.current = () => {
    re.current || V.current && L.current.size >= O.current.length && (re.current = !0, G.current.dispatch("ready").then(() => Y.current()));
  };
  const E = Wt((we) => {
    L.current.add(we), j.current();
  }, []), Q = Wt((we, Re) => {
    W.current.set(we, Re), ue.current = O.current.map((Pe) => W.current.get(Pe.Id)).filter((Pe) => Pe != null);
  }, []), Ne = Wt((we) => {
    var Re;
    G.current.dispatch(we), (Re = N.current) == null || Re.call(N, we);
  }, []), Me = De(null);
  Me.current == null && (Me.current = a(_e)), nr(() => {
    s(_e);
    const we = G.current, { Params: Re, Args: Pe } = Ya(we, Me.current, "card");
    return V.current = !1, re.current = !1, L.current.clear(), we.run(r.Script ?? "", Re, Pe).then(() => {
      V.current = !0, q(), j.current();
    }), () => {
      we.teardown();
    };
  }, [r.Script]);
  const He = G.current;
  z.current = !0;
  let Ve;
  try {
    Ve = He.renderResult() ?? null;
  } finally {
    z.current = !1;
  }
  const Ue = {
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left",
    background: r.Color ?? "#ffffff00"
    // transparent white by default so the deck render shows through
  }, jt = {
    // the white "paper" + drop shadow behind the (now transparent) card
    width: t * e,
    height: n * e,
    position: "relative",
    flexShrink: 0,
    background: "#fff",
    borderRadius: 3,
    boxShadow: "0 4px 24px rgba(0,0,0,0.55)"
  }, Ft = {
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
    <div style=${jt}>
      ${d != null && Z`
        <div class="bc-deck-render" style=${Ft}>${d}</div>
      `}
      <div class="bc-card-canvas" style=${Ue} ref=${ke}>
        ${Ve}
        ${ie.map((we) => Z`
          <${v5}
            key=${we.Id}
            Obj=${we}
            containerW=${t}
            containerH=${n}
            makeContext=${a}
            deckProxy=${i}
            cardProxy=${_e}
            onWidgetProxy=${Q}
            onReady=${E}
            onMessage=${Ne}
          />
        `)}
        ${h && Z`
          <${y5}
            Objects=${ie}
            CanvasW=${t}
            CanvasH=${n}
            Scale=${e}
            selectedIds=${p}
            onSelect=${m ?? (() => {
  })}
            onSelectMany=${v ?? (() => {
  })}
            onEdited=${y ?? (() => {
  })}
            Grid=${A}
            onBeforeEdit=${$}
          />
        `}
      </div>
    </div>
  `;
}
function C5({
  Card: r,
  CanvasW: e,
  CanvasH: t
}) {
  const a = 88 / Math.max(1, e), i = Math.max(24, Math.round(t * a));
  return Z`
    <div class="bc-card-thumb"
      style=${{ width: 88, height: i, background: r.Color ?? "#fff" }}>
      ${r.Widgets.filter((s) => s.visible).map((s) => {
    const o = Yt(s.Anchors, s.Offsets, e, t), l = s.Type === "shape" ? s.FillColor ?? "#9ca3af" : s.Type === "button" ? "#1d6fd8" : s.Type === "field" ? "rgba(0,0,0,0.15)" : s.Type === "picture" ? "#9ca3af" : "#7c3aed";
    return Z`
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
function A5({
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
  onEditToggle: p,
  onInsert: m,
  onDeckSave: v,
  onDeckRevert: y,
  onDeckReset: A,
  onDeckExport: $,
  onDeckImport: M,
  onDeckExportText: z,
  onDeckImportText: q,
  onDeckEmbed: G,
  onDeckStandalone: Y,
  onDeckImportURL: N,
  onMCPSettings: ie,
  onCardAdd: ue,
  onCardDuplicate: W,
  onCardRename: pe,
  onCardDelete: _e,
  onCardCopy: ke,
  onPaste: L,
  canUndo: V = !1,
  canRedo: re = !1,
  onUndo: O,
  onRedo: j
}) {
  const E = e === 0, Q = e === t - 1, [Ne, Me] = et(null);
  function He(Ue) {
    Me(null), a(n === Ue ? null : Ue);
  }
  function Ve(Ue) {
    Me(Ne === Ue ? null : Ue);
  }
  return Z`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => He("decks-panel")} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${n === "cards-panel" ? " active" : ""}`}
        onClick=${() => He("cards-panel")}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "go-menu" ? " active" : ""}`}
          onClick=${() => He("go-menu")}
          title="Navigate"
        >Go ▾</button>
        ${n === "go-menu" && Z`
          <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${E ? " disabled" : ""}`}
              onClick=${() => {
    i(), a(null);
  }}>First Card</div>
            <div class=${`bc-dropdown-item${E ? " disabled" : ""}`}
              onClick=${() => {
    s(), a(null);
  }}>Previous Card</div>
            <div class=${`bc-dropdown-item${Q ? " disabled" : ""}`}
              onClick=${() => {
    o(), a(null);
  }}>Next Card</div>
            <div class=${`bc-dropdown-item${Q ? " disabled" : ""}`}
              onClick=${() => {
    l(), a(null);
  }}>Last Card</div>
          </div>
        `}
      </div>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "deck-menu" ? " active" : ""}`}
          onClick=${() => He("deck-menu")}
          title="deck operations"
        >Deck ▾</button>
        ${n === "deck-menu" && Z`
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
    A == null || A(), a(null);
  }}>Reset to Original</div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${d ? " disabled" : ""}${Ne === "import" ? " open" : ""}`}
                onClick=${() => !d && Ve("import")}>Import</div>
              ${Ne === "import" && Z`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    M == null || M(), a(null);
  }}>from JSON File…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    q == null || q(), a(null);
  }}>from JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    N == null || N(), a(null);
  }}>from URL…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${Ne === "export" ? " open" : ""}`}
                onClick=${() => Ve("export")}>Export</div>
              ${Ne === "export" && Z`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    $ == null || $(), a(null);
  }}>as JSON File</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    z == null || z(), a(null);
  }}>as JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    G == null || G(), a(null);
  }}>for Embedding…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    Y == null || Y(), a(null);
  }}>as Standalone App…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    ie == null || ie(), a(null);
  }}>MCP Settings…</div>
          </div>
        `}
      </div>
      ${h && Z`
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "card-menu" ? " active" : ""}`}
            onClick=${() => He("card-menu")}
            title="card operations"
          >Card ▾</button>
          ${n === "card-menu" && Z`
            <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ue == null || ue(), a(null);
  }}>New Card…</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    W == null || W(), a(null);
  }}>Duplicate Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    pe == null || pe(), a(null);
  }}>Rename Card…</div>
              <div class="bc-dropdown-separator"></div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ke == null || ke(), a(null);
  }}>Copy Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    L == null || L(), a(null);
  }}>Paste from Clipboard</div>
              <div class="bc-dropdown-separator"></div>
              <div class=${`bc-dropdown-item${t <= 1 ? " disabled" : ""}`}
                onClick=${() => {
    _e == null || _e(), a(null);
  }}>Delete Card…</div>
            </div>
          `}
        </div>
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "insert-menu" ? " active" : ""}`}
            onClick=${() => He("insert-menu")}
            title="insert a new widget"
          >+ New ▾</button>
          ${n === "insert-menu" && Z`
            <div class="bc-dropdown-backdrop" onClick=${() => a(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              ${[
    { Type: "button", Label: "Button" },
    { Type: "field", Label: "Field" },
    { Type: "shape", Label: "Shape" },
    { Type: "picture", Label: "Picture" },
    { Type: "generic", Label: "Custom Widget" }
  ].map(({ Type: Ue, Label: jt }) => Z`
                <div key=${Ue} class="bc-dropdown-item"
                  onClick=${() => {
    m == null || m(Ue), a(null);
  }}>${jt}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${!V}
          onClick=${O} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${!re}
          onClick=${j} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
      `}
      <div class="bc-menu-bar-title">${r}</div>
      ${!d && Z`
        <button
          class=${`bc-menu-btn${h ? " active" : ""}`}
          onClick=${p}
          title=${h ? "switch to browse mode" : "switch to edit mode"}
        >${h ? "✓ Done" : "✎ Edit"}</button>
      `}
    </div>
  `;
}
function $5({
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
  const p = r === 0, m = r === e - 1;
  return Z`
    <div class="bc-bottom-bar">
      <button class="bc-nav-btn" onClick=${s} disabled=${o === 0} title="Back">◁</button>
      <div class="bc-bottom-bar-center">
        <button class="bc-nav-btn" onClick=${t} disabled=${p} title="First Card">«</button>
        <button class="bc-nav-btn" onClick=${n}  disabled=${p} title="Previous Card">‹</button>
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
function T5({ State: r, onClose: e }) {
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
function I5({
  onClose: r,
  onApply: e
}) {
  const t = localStorage.getItem("bc-mcp-url") ?? "", n = localStorage.getItem("bc-mcp-token") ?? "", [a, i] = et(t), [s, o] = et(n), [l, d] = et(n !== "");
  function h() {
    const p = a.trim(), m = s.trim();
    try {
      localStorage.setItem("bc-mcp-url", p), l ? localStorage.setItem("bc-mcp-token", m) : localStorage.removeItem("bc-mcp-token");
    } catch {
    }
    e == null || e(p, m), r();
  }
  return Z`
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
            onInput=${(p) => i(p.target.value)}
          />
        </div>
        <div style=${{ padding: "8px 0" }}>
          <label style=${{ display: "block", marginBottom: "4px", fontSize: "12px" }}>Access Token</label>
          <input
            class="bc-dialog-input"
            type="password"
            placeholder="secret token"
            value=${s}
            onInput=${(p) => o(p.target.value)}
          />
          <label style=${{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px", fontSize: "12px", cursor: "pointer" }}>
            <input
              type="checkbox"
              checked=${l}
              onChange=${(p) => d(p.target.checked)}
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
function rd({
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
  onDeckList: p,
  onDeckOpen: m,
  onDeckCreate: v,
  onDeckDelete: y,
  onDeckRename: A,
  onDeckEmbed: $,
  onDeckStandalone: M,
  onDeckImportURL: z,
  connector: q,
  onDeckSaveImmediate: G
}) {
  const Y = r ?? td, [N] = et(Y), [, ie] = et(0), ue = () => ie((T) => T + 1), [W, pe] = et(Math.min(a, (Y == null ? void 0 : Y.Cards.length) - 1 || 0)), [_e, ke] = et([]), [L, V] = et(null), [re, O] = et(null), [j, E] = et(1), [Q, Ne] = et(vs), [Me, He] = et(ws), [Ve, Ue] = et(!1), jt = De(null), Ft = De(0);
  Ft.current = W;
  const [we, Re] = et("browse"), [Pe, se] = et([]), [Vr, Sr] = et(!1), xt = we === "edit" && !e, Qt = Pe.length === 1 ? Pe[0] : null;
  function Ln(T, I) {
    if (T == null) {
      I || se([]);
      return;
    }
    se(
      I ? (D) => D.includes(T) ? D.filter((oe) => oe !== T) : [...D, T] : [T]
    );
  }
  function cn(T, I) {
    se((D) => I ? Array.from(/* @__PURE__ */ new Set([...D, ...T])) : T);
  }
  function Fn() {
    we === "edit" && (i == null || i()), Re((T) => T === "edit" ? "browse" : "edit"), se([]);
  }
  nr(() => {
    se([]);
  }, [W]), nr(() => {
    if (n)
      try {
        localStorage.setItem("bc-card-index:" + n, String(W));
      } catch {
      }
  }, [n, W]);
  const [mr, _r] = et(null), [er, Pn] = et(so());
  function un(T) {
    c5(T, n), Pn(T);
  }
  function ur() {
    if (p == null) {
      _r([]);
      return;
    }
    p().then(_r);
  }
  nr(() => {
    L === "decks-panel" && (_r(null), ur());
  }, [L]);
  function It(T, I) {
    return new Promise(
      (D) => O({ kind: "ask", prompt: T, defaultValue: I, resolve: D })
    );
  }
  function Bt(T, ...I) {
    return new Promise(
      (D) => O({ kind: "answer", message: T, buttons: I, resolve: D })
    );
  }
  async function tr() {
    var I;
    const T = (I = await It("Name of the new deck:", "")) == null ? void 0 : I.trim();
    T == null || T === "" || await (v == null ? void 0 : v(T));
  }
  async function Cr(T) {
    var D;
    const I = (D = await It("New name for this deck:", T.Name)) == null ? void 0 : D.trim();
    I == null || I === "" || I === T.Name || (await (A == null ? void 0 : A(T.Key, I)), ur());
  }
  async function dr() {
    var I;
    const T = (I = await It("URL of the deck to import:", "https://")) == null ? void 0 : I.trim();
    T == null || T === "" || T === "https://" || await (z == null ? void 0 : z(T));
  }
  function Ar() {
    O({ kind: "export-json", json: JSON.stringify(N, null, 2) });
  }
  async function l0() {
    const T = await new Promise(
      (I) => O({ kind: "import-json", resolve: I })
    );
    T != null && (h == null || h(T));
  }
  async function D0(T) {
    await Bt(
      `Really delete deck "${T.Name}"?`,
      "Delete",
      "Cancel"
    ) === "Delete" && (await (y == null ? void 0 : y(T.Key)), ur());
  }
  async function Vn() {
    var D;
    const T = (D = await It("Name of the new card:", "")) == null ? void 0 : D.trim();
    if (T == null || T === "")
      return;
    if (N.Cards.some((oe) => oe.Name === T)) {
      await Bt(`A card named "${T}" already exists.`, "OK");
      return;
    }
    const I = {
      Id: ar("card"),
      Name: T,
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    };
    _t(), N.Cards.splice(W + 1, 0, I), rt({ type: "card-index", index: W + 1 }), yt();
  }
  function Hn(T) {
    return N.Cards.findIndex((I) => I.Id === T);
  }
  function dn(T) {
    const I = N.Cards[T];
    if (I == null)
      return;
    const D = JSON.parse(JSON.stringify(I));
    D.Id = ar("card"), D.Widgets.forEach((ce) => {
      ce.Id = ar("widget");
    });
    let oe = I.Name + " Copy", ve = 1;
    for (; N.Cards.some((ce) => ce.Name === oe); )
      ve += 1, oe = I.Name + " Copy " + ve;
    D.Name = oe, _t(), N.Cards.splice(T + 1, 0, D), rt({ type: "card-index", index: T + 1 }), yt();
  }
  async function c0(T) {
    var oe;
    const I = N.Cards[T];
    if (I == null)
      return;
    const D = (oe = await It("New name for this card:", I.Name)) == null ? void 0 : oe.trim();
    if (!(D == null || D === "" || D === I.Name)) {
      if (N.Cards.some((ve) => ve.Name === D)) {
        await Bt(`A card named "${D}" already exists.`, "OK");
        return;
      }
      _t(), I.Name = D, yt();
    }
  }
  async function Hr(T) {
    const I = N.Cards[T];
    if (I == null)
      return;
    if (N.Cards.length <= 1) {
      await Bt("The last remaining card cannot be deleted.", "OK");
      return;
    }
    if (await Bt(
      `Really delete card "${I.Name}" and all its widgets?`,
      "Delete",
      "Cancel"
    ) !== "Delete")
      return;
    _t();
    const oe = N.Cards[W].Id;
    N.Cards.splice(T, 1), ke([]), se([]);
    const ve = Hn(oe);
    pe(ve >= 0 ? ve : x0(T, 0, N.Cards.length - 1)), yt();
  }
  function u0(T, I) {
    const D = T + I;
    if (D < 0 || D >= N.Cards.length)
      return;
    _t();
    const oe = N.Cards[W].Id, [ve] = N.Cards.splice(T, 1);
    N.Cards.splice(D, 0, ve), ke([]), pe(Math.max(0, Hn(oe))), yt();
  }
  const [$r, qn] = et(null), [Wn, Un] = et(0);
  function Gn(T, I, D) {
    qn({
      Title: T,
      Value: I,
      onCommit: (oe) => {
        D(oe), Un((ve) => ve + 1);
      }
    });
  }
  async function gr() {
    await dc(
      ys,
      JSON.stringify(N.Cards[W])
    ) || await Bt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function k() {
    if (Pe.length === 0) {
      await gr();
      return;
    }
    const T = N.Cards[W].Widgets.filter((D) => Pe.includes(D.Id)).sort((D, oe) => D.zIndex - oe.zIndex);
    if (T.length === 0)
      return;
    await dc(ks, JSON.stringify(T)) || await Bt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function B() {
    await k(), Pe.length > 0 ? mn() : await Hr(W);
  }
  async function te() {
    const T = await u5();
    if (T == null) {
      await Bt(
        "The clipboard does not contain a BrowserCard card or widget - or BrowserCard was not allowed to read the clipboard (please check your browser permissions, the console may have details).",
        "OK"
      );
      return;
    }
    let I;
    try {
      I = JSON.parse(T.Serialization);
    } catch {
      return;
    }
    const D = N.Cards[W];
    if (T.Kind === "card") {
      if (!oo(I))
        return;
      const oe = I;
      oe.Id = ar("card"), oe.Widgets.forEach((ve) => {
        ve.Id = ar("widget");
      }), oe.Name = Ss(
        oe.Name,
        new Set(N.Cards.map((ve) => ve.Name))
      ), _t(), N.Cards.splice(W + 1, 0, oe), rt({ type: "card-index", index: W + 1 });
    } else {
      const oe = Array.isArray(I) ? I : [I];
      if (oe.length === 0 || !oe.every(ei))
        return;
      _t();
      let ve = D.Widgets.reduce((je, Ke) => Math.max(je, Ke.zIndex), 0);
      const ce = new Set(D.Widgets.map((je) => je.Name)), Fe = [];
      oe.slice().sort((je, Ke) => (je.zIndex ?? 0) - (Ke.zIndex ?? 0)).forEach((je) => {
        const Ke = je;
        Ke.Id = ar("widget"), Ke.Name = Ss(Ke.Name ?? "Widget", ce), ce.add(Ke.Name), ve += 1, Ke.zIndex = ve, Ke.Number = ve, D.Widgets.push(Ke), Fe.push(Ke.Id);
      }), se(Fe);
    }
    yt();
  }
  async function $e() {
    var I;
    const T = (I = jt.current) == null ? void 0 : I.querySelector(".bc-card-canvas");
    if (T != null)
      try {
        const D = "https://cdn.jsdelivr.net/npm/html-to-image@1/+esm", { toPng: oe } = await import(
          // loaded on demand only
          /* @vite-ignore */
          D
        ), ve = await oe(T, {
          width: Q,
          height: Me,
          pixelRatio: 1,
          // native card size
          style: { transform: "scale(1)", borderRadius: "0", boxShadow: "none" },
          filter: (je) => {
            var Ke;
            return (
              // exclude edit-mode overlays
              !((Ke = je.classList) != null && Ke.contains("bc-edit-layer"))
            );
          }
        }), ce = N.Cards[W], Fe = document.createElement("a");
        Fe.href = ve, Fe.download = `${N.Name ?? "Deck"} - ${ce.Name ?? "Card"}.png`, Fe.click();
      } catch (D) {
        console.warn("[BrowserCard] could not create a screenshot:", D), window.alert(
          "BrowserCard could not create a screenshot - the console may have details."
        );
      }
  }
  const tt = De(null);
  nr(() => {
    !xt || i == null || (tt.current != null && window.clearTimeout(tt.current), tt.current = window.setTimeout(() => {
      tt.current = null, i();
    }, 800));
  }), nr(() => {
    if (q == null)
      return;
    const T = {
      getDeck: () => N,
      getCardIndex: () => Ft.current,
      mutateDeck: (I) => {
        I(N), ue();
      },
      navigate: (I) => {
        if (typeof I == "number")
          rt({ type: "card-index", index: I });
        else {
          const D = N.Cards.findIndex((oe) => oe.Id === I || oe.Name === I);
          D >= 0 && rt({ type: "card-index", index: D });
        }
      },
      saveDeck: () => (G == null ? void 0 : G()) ?? Promise.resolve(),
      evalInContext: async (I) => {
        const D = new Ja(), oe = Fi(
          N,
          N.Cards,
          null,
          rt,
          (je, Ke, kt) => O({ kind: "answer", message: je, buttons: Ke, resolve: kt }),
          (je, Ke, kt) => O({ kind: "ask", prompt: je, defaultValue: Ke, resolve: kt }),
          wn,
          Ft
        ), { Params: ve, Args: ce } = Ya(D, oe, "deck");
        return new Function(...ve, `return (async () => { return (${I}) })()`)(...ce);
      }
    };
    q.setContext(T);
  });
  const Je = De([]), me = De([]), de = De(""), xe = De(0), [gt, ct] = et(0), qr = 100, hn = 1e3, _t = Wt((T = "") => {
    const I = Date.now();
    if (T !== "" && T === de.current && I - xe.current < hn) {
      xe.current = I;
      return;
    }
    de.current = T, xe.current = I, Je.current.push(JSON.stringify(N)), Je.current.length > qr && Je.current.shift(), me.current = [];
  }, [N]);
  function jn(T) {
    const I = JSON.parse(T);
    Object.keys(N).forEach((D) => delete N[D]), Object.assign(N, I), de.current = "", se([]), ke([]), pe((D) => x0(D, 0, N.Cards.length - 1)), ct((D) => D + 1), Un((D) => D + 1), yt();
  }
  function pn() {
    const T = Je.current.pop();
    T != null && (me.current.push(JSON.stringify(N)), jn(T));
  }
  function fn() {
    const T = me.current.pop();
    T != null && (Je.current.push(JSON.stringify(N)), jn(T));
  }
  function d0(T) {
    const I = N.Cards[W], D = x5(T, I, Q, Me);
    _t(), I.Widgets.push(D), se([D.Id]), yt();
  }
  function mn() {
    if (Pe.length === 0)
      return;
    const T = N.Cards[W];
    if (T.Widgets.some((I) => Pe.includes(I.Id))) {
      _t();
      for (let I = T.Widgets.length - 1; I >= 0; I--)
        Pe.includes(T.Widgets[I].Id) && T.Widgets.splice(I, 1);
    }
    se([]), yt();
  }
  function h0(T) {
    if (Pe.length === 0)
      return;
    const D = [...N.Cards[W].Widgets].sort((ce, Fe) => ce.zIndex - Fe.zIndex), oe = (ce) => Pe.includes(ce.Id);
    if (!D.some(oe))
      return;
    _t();
    let ve = D;
    switch (T) {
      case "front":
        ve = [...D.filter((ce) => !oe(ce)), ...D.filter(oe)];
        break;
      case "back":
        ve = [...D.filter(oe), ...D.filter((ce) => !oe(ce))];
        break;
      case "forward":
        for (let ce = D.length - 2; ce >= 0; ce--)
          if (oe(D[ce]) && !oe(D[ce + 1])) {
            const Fe = D[ce];
            D[ce] = D[ce + 1], D[ce + 1] = Fe;
          }
        ve = D;
        break;
      case "backward":
        for (let ce = 1; ce < D.length; ce++)
          if (oe(D[ce]) && !oe(D[ce - 1])) {
            const Fe = D[ce];
            D[ce] = D[ce - 1], D[ce - 1] = Fe;
          }
        ve = D;
        break;
    }
    ve.forEach((ce, Fe) => {
      ce.zIndex = Fe + 1, ce.Number = Fe + 1;
    }), yt();
  }
  function Wr(T) {
    if (Pe.length === 0 || T === W)
      return;
    const I = N.Cards[W], D = N.Cards[T];
    if (D == null)
      return;
    const oe = I.Widgets.filter((ce) => Pe.includes(ce.Id)).sort((ce, Fe) => ce.zIndex - Fe.zIndex);
    if (oe.length === 0)
      return;
    _t();
    for (let ce = I.Widgets.length - 1; ce >= 0; ce--)
      Pe.includes(I.Widgets[ce].Id) && I.Widgets.splice(ce, 1);
    let ve = D.Widgets.reduce((ce, Fe) => Math.max(ce, Fe.zIndex), 0);
    oe.forEach((ce) => {
      ve += 1, ce.zIndex = ve, ce.Number = ve, D.Widgets.push(ce);
    }), se([]), yt();
  }
  const [, L0] = et(0), yt = Wt(() => L0((T) => T + 1), []), Tr = De(null);
  Tr.current == null && (Tr.current = new Ja());
  const Kt = De(null), gn = De(null);
  gn.current == null && (gn.current = m5(N, Kt, yt));
  const Pt = gn.current, F0 = Wt(
    (T) => {
      Pt[an] = T ?? void 0;
    },
    [Pt]
  ), bn = De(!1), vn = De(!1);
  nr(() => {
    const T = jt.current;
    if (T == null)
      return;
    function I() {
      const { width: ve, height: ce } = T.getBoundingClientRect(), Fe = getComputedStyle(T), je = parseInt(Fe.getPropertyValue("--canvas-width").trim()), Ke = parseInt(Fe.getPropertyValue("--canvas-height").trim()), kt = isFinite(je) && je > 0 ? je : N.CardWidth ?? vs, Ur = isFinite(Ke) && Ke > 0 ? Ke : N.CardHeight ?? ws;
      Ne(kt), He(Ur);
      const Ir = 24, Ce = Math.max(0.1, Math.min((ve - Ir * 2) / kt, (ce - Ir * 2) / Ur)), Gr = parseFloat(Fe.getPropertyValue("--canvas-scale").trim());
      isFinite(Gr) && Gr > 0 ? E(xt ? Math.min(Gr, Ce) : Gr) : E(Ce);
    }
    I();
    const D = requestAnimationFrame(I), oe = new ResizeObserver(I);
    return oe.observe(T), () => {
      cancelAnimationFrame(D), oe.disconnect();
    };
  }, [N.CardWidth, N.CardHeight, xt]);
  const rt = Wt((T) => {
    const I = N.Cards;
    pe((D) => {
      const oe = (ve) => (ve !== D && (ke((ce) => [...ce, D]), vn.current = !1), ve);
      switch (T.type) {
        case "next":
          return oe(x0(D + 1, 0, I.length - 1));
        case "prev":
          return oe(x0(D - 1, 0, I.length - 1));
        case "first":
          return oe(0);
        case "last":
          return oe(I.length - 1);
        case "card-index":
          return oe(x0(T.index, 0, I.length - 1));
        case "card-name": {
          const ve = I.findIndex((ce) => ce.Name === T.name);
          return ve >= 0 ? oe(ve) : D;
        }
        case "card-id": {
          const ve = I.findIndex((ce) => ce.Id === T.id);
          return ve >= 0 ? oe(ve) : D;
        }
        default:
          return D;
      }
    });
  }, [N]), wn = E0(() => ({
    print(...T) {
      Y2(Pt, T), Ue(!0);
    },
    println(...T) {
      Q2(Pt, T), Ue(!0);
    },
    clearConsole() {
      Xa(Pt);
    }
  }), []), K = Wt(() => e ? Promise.resolve() : (G == null ? void 0 : G()) ?? Promise.resolve(), [e, G]), be = Wt((T) => Fi(
    N,
    N.Cards,
    T,
    rt,
    (I, D, oe) => O({ kind: "answer", message: I, buttons: D, resolve: oe }),
    (I, D, oe) => O({ kind: "ask", prompt: I, defaultValue: D, resolve: oe }),
    wn,
    Ft,
    K
  ), [N, rt, wn, K]);
  function Oe() {
    bn.current && vn.current && Tr.current.dispatch("ready");
  }
  function Ye(T) {
    Kt.current = T;
  }
  function dt() {
    vn.current = !0, Oe();
  }
  nr(() => {
    const T = Tr.current, I = Fi(
      N,
      N.Cards,
      Pt,
      rt,
      (ve, ce, Fe) => O({ kind: "answer", message: ve, buttons: ce, resolve: Fe }),
      (ve, ce, Fe) => O({ kind: "ask", prompt: ve, defaultValue: ce, resolve: Fe }),
      wn,
      Ft,
      K
    ), { Params: D, Args: oe } = Ya(T, I, "deck");
    return bn.current = !1, vn.current = !1, T.run(N.Script ?? "", D, oe).then(() => {
      bn.current = !0, yt(), Oe();
    }), () => {
      T.teardown();
    };
  }, [N.Script]), nr(() => {
    if (!t)
      return;
    function T(I) {
      if (re != null)
        return;
      const D = I.target;
      if (!(D != null && /^(INPUT|TEXTAREA|SELECT)$/.test(D.tagName))) {
        if (xt) {
          if ((I.key === "z" || I.key === "Z") && (I.metaKey || I.ctrlKey)) {
            I.preventDefault(), I.shiftKey ? fn() : pn();
            return;
          }
          if ((I.key === "y" || I.key === "Y") && (I.metaKey || I.ctrlKey)) {
            I.preventDefault(), fn();
            return;
          }
          if ((I.metaKey || I.ctrlKey) && !I.shiftKey && !I.altKey)
            switch (I.key) {
              case "c":
                I.preventDefault(), k();
                return;
              case "x":
                I.preventDefault(), B();
                return;
              case "v":
                I.preventDefault(), te();
                return;
            }
        }
        if (xt && Pe.length > 0) {
          if (I.key === "Escape") {
            se([]);
            return;
          }
          if (I.key === "Delete" || I.key === "Backspace") {
            I.preventDefault(), mn();
            return;
          }
          const oe = N.Cards[W].Widgets.filter((je) => Pe.includes(je.Id));
          if (oe.length === 0)
            return;
          const ve = I.shiftKey ? 10 : 1;
          let ce = 0, Fe = 0;
          switch (I.key) {
            case "ArrowLeft":
              ce = -ve;
              break;
            case "ArrowRight":
              ce = ve;
              break;
            case "ArrowUp":
              Fe = -ve;
              break;
            case "ArrowDown":
              Fe = ve;
              break;
            default:
              return;
          }
          I.preventDefault(), _t("nudge:" + Pe.join(",")), oe.forEach((je) => {
            const { left: Ke, top: kt, width: Ur, height: Ir } = Yt(je.Anchors, je.Offsets, Q, Me);
            je.Offsets = M0(Ke + ce, kt + Fe, Ur, Ir, je.Anchors, Q, Me);
          }), yt();
          return;
        }
        (I.key === "ArrowRight" || I.key === "ArrowDown") && rt({ type: "next" }), (I.key === "ArrowLeft" || I.key === "ArrowUp") && rt({ type: "prev" });
      }
    }
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [rt, re, xt, Pe, W, Q, Me, t]);
  function Vt() {
    if (_e.length === 0)
      return;
    const T = _e[_e.length - 1];
    ke((I) => I.slice(0, -1)), pe(T);
  }
  const Rt = N.Cards[W], xn = Tr.current.renderResult() ?? null, zt = xt && Qt != null ? Rt.Widgets.find((T) => T.Id === Qt) ?? null : null, Zt = {
    isActive: N.SnapToGrid === !0,
    Width: N.GridWidth ?? 10,
    Height: N.GridHeight ?? 10
  };
  return Z`
    <${In}>
      <div class="bc-app" ref=${F0}>
        ${t && Z`<${A5}
          DeckName=${N.Name}
          CardIndex=${W}
          CardCount=${N.Cards.length}
          activeOverlay=${L}
          onOverlayToggle=${V}
          onGoFirst=${() => rt({ type: "first" })}
          onGoPrev=${() => rt({ type: "prev" })}
          onGoNext=${() => rt({ type: "next" })}
          onGoLast=${() => rt({ type: "last" })}
          isReadOnly=${e}
          isEditing=${xt}
          onEditToggle=${Fn}
          onInsert=${d0}
          onDeckSave=${i}
          onDeckRevert=${s}
          onDeckReset=${o}
          onDeckExport=${l}
          onDeckImport=${d}
          onDeckExportText=${Ar}
          onDeckImportText=${() => void l0()}
          onCardAdd=${() => void Vn()}
          onCardDuplicate=${() => dn(W)}
          onCardRename=${() => void c0(W)}
          onCardDelete=${() => void Hr(W)}
          onCardCopy=${() => void gr()}
          onPaste=${() => void te()}
          canUndo=${Je.current.length > 0}
          canRedo=${me.current.length > 0}
          onUndo=${pn}
          onRedo=${fn}
          onDeckEmbed=${$}
          onDeckStandalone=${M}
          onDeckImportURL=${() => void dr()}
          onMCPSettings=${() => Sr(!0)}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area" ref=${jt}>
            <${_5}
              key=${Rt.Id + ":" + gt}
              Card=${Rt}
              Scale=${j}
              CanvasW=${Q}
              CanvasH=${Me}
              deckRenderSlot=${xn}
              makeContext=${be}
              deckProxy=${Pt}
              onCardProxy=${Ye}
              onCardReady=${dt}
              onMessage=${(T) => void Tr.current.dispatch(T)}
              isEditing=${xt}
              selectedIds=${Pe}
              onSelect=${Ln}
              onSelectMany=${cn}
              onEdited=${yt}
              Grid=${Zt}
              onBeforeEdit=${() => _t()}
            />
          </div>
          ${xt && Z`
            <${S5}
              key=${(Qt ?? (Pe.length > 1 ? "multi" : "card:" + Rt.Id)) + ":" + Wn}
              Widget=${zt}
              SelectedCount=${Pe.length}
              CanvasW=${Q}
              CanvasH=${Me}
              onEdited=${yt}
              CardNames=${N.Cards.map((T) => T.Name)}
              CardIndex=${W}
              onDelete=${mn}
              onReorder=${h0}
              onMoveTo=${Wr}
              Card=${Rt}
              Deck=${N}
              onOpenEditor=${Gn}
              onBeforeEdit=${_t}
              onCopy=${() => void k()}
            />
          `}
        </div>
        ${L === "decks-panel" && Z`
          <div class="bc-dropdown-backdrop" onClick=${() => V(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => V(null)}>×</button>
            </div>
            ${!e && Z`
              <button class="bc-decks-new" onClick=${tr}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${mr == null ? Z`<div class="bc-decks-empty">loading…</div>` : mr.length === 0 ? Z`<div class="bc-decks-empty">no decks found</div>` : mr.map((T) => Z`
                      <div key=${T.Key}
                        class=${`bc-decks-item${T.Key === n ? " active" : ""}`}>
                        <span class="bc-decks-name"
                          title=${T.Name}
                          onClick=${() => {
    T.Key !== n && (m == null || m(T.Key));
  }}
                        >${T.Name}</span>
                        ${!e && Z`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void Cr(T)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void D0(T)}>×</button>
                        `}
                      </div>
                    `)}
            </div>
            <label class="bc-decks-remember"
              title="reopen the deck you last worked on automatically after a page reload">
              <input type="checkbox" checked=${er}
                onChange=${(T) => un(T.target.checked)}/>
              <span>remember last deck on reload</span>
            </label>
          </div>
        `}
        ${L === "cards-panel" && Z`
          <div class="bc-dropdown-backdrop" onClick=${() => V(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => V(null)}>×</button>
            </div>
            ${xt && Z`
              <button class="bc-decks-new" onClick=${() => void Vn()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${N.Cards.map((T, I) => Z`
                <div key=${T.Id}
                  class=${`bc-cards-item${I === W ? " active" : ""}`}>
                  <div class="bc-cards-main"
                    onClick=${() => {
    I !== W && rt({ type: "card-index", index: I });
  }}>
                    <${C5}
                      Card=${T} CanvasW=${Q} CanvasH=${Me}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${T.Name}>${T.Name}</div>
                      <div class="bc-cards-sub">
                        #${I + 1} · ${T.Widgets.length}${" "}
                        ${T.Widgets.length === 1 ? "widget" : "widgets"}
                      </div>
                    </div>
                  </div>
                  ${xt && Z`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move this card backward"
                        disabled=${I === 0}
                        onClick=${() => u0(I, -1)}>↑</button>
                      <button class="bc-console-btn" title="move this card forward"
                        disabled=${I === N.Cards.length - 1}
                        onClick=${() => u0(I, 1)}>↓</button>
                      <button class="bc-console-btn" title="duplicate this card"
                        onClick=${() => dn(I)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void c0(I)}>✎</button>
                      <button class="bc-console-btn" title="delete this card"
                        disabled=${N.Cards.length <= 1}
                        onClick=${() => void Hr(I)}>×</button>
                    </div>
                  `}
                </div>
              `)}
            </div>
          </div>
        `}
        ${Ve && Z`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => Xa(Pt)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => Ue(!1)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${Pt[Rn]}</pre>
          </div>
        `}
        ${t && Z`<${$5}
          CardIndex=${W}
          CardCount=${N.Cards.length}
          onFirst=${() => rt({ type: "first" })}
          onPrev=${() => rt({ type: "prev" })}
          onNext=${() => rt({ type: "next" })}
          onLast=${() => rt({ type: "last" })}
          onBack=${Vt}
          historyLen=${_e.length}
          consoleShown=${Ve}
          onConsoleToggle=${() => Ue((T) => !T)}
          onScreenshot=${() => void $e()}
        />`}
        <${T5}
          State=${re}
          onClose=${(T) => {
    var D, oe;
    const I = re;
    if (O(null), I != null)
      switch (I.kind) {
        case "answer":
          (D = I.resolve) == null || D.call(I, T ?? "");
          break;
        case "ask":
          (oe = I.resolve) == null || oe.call(I, T);
          break;
        case "import-json":
          I.resolve(T);
          break;
      }
  }}
        />
      </div>
      ${$r != null && Z`
        <${k5}
          key=${$r.Title}
          State=${$r}
          onClose=${() => qn(null)}
        />
      `}
      ${Vr && Z`
        <${I5}
          onClose=${() => Sr(!1)}
          onApply=${(T, I) => q == null ? void 0 : q.configure(T, I)}
        />
      `}
    <//>
  `;
}
const gc = "https://rozek.github.io/browser-card/dist/BrowserCard.js";
function nd() {
  if (document.getElementById("bc-styles") == null) {
    const r = document.createElement("style");
    r.id = "bc-styles", r.textContent = a5, document.head.appendChild(r);
  }
}
function Pi(r, e, t) {
  const n = new Blob([e], { type: t }), a = URL.createObjectURL(n), i = document.createElement("a");
  i.href = a, i.download = r, i.click(), setTimeout(() => URL.revokeObjectURL(a), 1e3);
}
function Ia(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function bc(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");
}
var zr, ut, Ot, wt, vr, _0, C0, Ae, Da, Xr, ad, id, sd, od, ld, cd, ud, dd, _n, hd, pd, fd, md, gd;
class N5 extends HTMLElement {
  constructor() {
    super(...arguments);
    bt(this, Ae);
    bt(this, zr, null);
    bt(this, ut, null);
    bt(this, Ot, !1);
    bt(this, wt, "bc-deck:default");
    bt(this, vr, 0);
    // remount key - bumped whenever the deck is swapped
    bt(this, _0, 0);
    // guards against overlapping async mounts
    bt(this, C0, new xh());
  }
  static get observedAttributes() {
    return ["name", "src", "readonly"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    R(this, C0).connect(), le(this, Ae, Da).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    R(this, C0).disconnect(), R(this, zr) != null && Qr(null, R(this, zr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && le(this, Ae, Da).call(this);
  }
}
zr = new WeakMap(), ut = new WeakMap(), Ot = new WeakMap(), wt = new WeakMap(), vr = new WeakMap(), _0 = new WeakMap(), C0 = new WeakMap(), Ae = new WeakSet(), Da = async function() {
  const t = ++Lo(this, _0)._;
  nd(), R(this, zr) == null && (ze(this, zr, document.createElement("div")), R(this, zr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(R(this, zr)));
  const n = this.getAttribute("src") ?? "";
  let a = null;
  if (n.trim())
    try {
      const i = JSON.parse(n);
      Mr(i) ? a = i : console.warn('[BrowserCard] "src" attribute does not contain a valid deck');
    } catch {
      console.warn('[BrowserCard] invalid JSON in "src" attribute');
    }
  if (a == null && (a = JSON.parse(o5)), ze(this, wt, "bc-deck:" + (this.getAttribute("name") ?? a.Name ?? "default")), so())
    try {
      const i = localStorage.getItem(Qa);
      if (i && i !== R(this, wt)) {
        const s = await Zn(i, Xt);
        if (t !== R(this, _0))
          return;
        Mr(s) && ze(this, wt, i);
      }
    } catch {
    }
  try {
    const i = await Zn(R(this, wt), Xt);
    if (t !== R(this, _0))
      return;
    Mr(i) ? a = i : i != null && console.warn("[BrowserCard] ignoring invalid persisted deck for key " + S.quoted(R(this, wt)));
  } catch (i) {
    console.warn("[BrowserCard] could not access IndexedDB:", i);
  }
  Yn(a), a.Id == null && (a.Id = ar("deck")), ze(this, ut, a), ze(this, Ot, this.hasAttribute("readonly") || (a.readOnly ?? !1)), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
}, /**** #renderDeck ****/
Xr = function() {
  l5(R(this, wt));
  let t = 0;
  try {
    const n = localStorage.getItem("bc-card-index:" + R(this, wt));
    n != null && (t = Math.max(0, parseInt(n, 10) || 0));
  } catch {
  }
  Qr(Z`<${rd}
      key=${R(this, vr)}
      deck=${R(this, ut)}
      isReadOnly=${R(this, Ot)}
      StorageKey=${R(this, wt)}
      initialCardIndex=${t}
      onDeckSave=${() => void le(this, Ae, _n).call(this)}
      onDeckRevert=${() => void le(this, Ae, hd).call(this)}
      onDeckReset=${() => void le(this, Ae, pd).call(this)}
      onDeckExport=${() => le(this, Ae, fd).call(this)}
      onDeckImport=${() => le(this, Ae, md).call(this)}
      onDeckImportText=${(n) => void le(this, Ae, gd).call(this, n)}
      onDeckList=${() => le(this, Ae, od).call(this)}
      onDeckOpen=${(n) => void le(this, Ae, ld).call(this, n)}
      onDeckCreate=${(n) => le(this, Ae, cd).call(this, n)}
      onDeckDelete=${(n) => le(this, Ae, ud).call(this, n)}
      onDeckRename=${(n, a) => le(this, Ae, dd).call(this, n, a)}
      onDeckEmbed=${() => le(this, Ae, id).call(this)}
      onDeckStandalone=${() => le(this, Ae, sd).call(this)}
      onDeckImportURL=${(n) => le(this, Ae, ad).call(this, n)}
      connector=${R(this, C0)}
      onDeckSaveImmediate=${() => le(this, Ae, _n).call(this)}
    />`, R(this, zr));
}, ad = async function(t) {
  if (!R(this, Ot))
    try {
      const n = await fetch(t);
      if (!n.ok) {
        window.alert(`The deck could not be loaded (HTTP ${n.status})`);
        return;
      }
      const a = JSON.parse(await n.text());
      if (!Mr(a)) {
        window.alert("The given URL does not deliver a valid BrowserCard deck.");
        return;
      }
      const i = a;
      Yn(i), i.Id == null && (i.Id = ar("deck")), ze(this, ut, i), ze(this, Ot, this.hasAttribute("readonly") || (i.readOnly ?? !1)), await le(this, Ae, _n).call(this), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
    } catch (n) {
      window.alert("Import failed: " + n);
    }
}, /**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/
id = function() {
  if (R(this, ut) == null)
    return;
  const t = R(this, ut).Name ?? "Deck", n = bc(JSON.stringify(R(this, ut))), a = gc, i = R(this, ut).CardWidth ?? vs, s = R(this, ut).CardHeight ?? ws, o = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ia(t)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${Ia(a)}"><\/script>

  <bc-deck
    style="display:block; width:${i}px; height:${s}px"
    src='${n}'
  ></bc-deck>
</body>
</html>`;
  Pi(t + ".embed.html", o, "text/html");
}, /**** #exportStandalone — complete web app, referencing the public module ****/
sd = function() {
  if (R(this, ut) == null)
    return;
  const t = R(this, ut).Name ?? "Deck", n = bc(JSON.stringify(R(this, ut))), a = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ia(t)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${Ia(gc)}"><\/script>
  <bc-deck style="display:block; width:100%; height:100%" src='${n}'></bc-deck>
</body>
</html>`;
  Pi(t + ".html", a, "text/html");
}, od = async function() {
  let t = [];
  try {
    t = (await ch(Xt)).filter((a) => typeof a == "string" && a.startsWith(V0)).map((a) => ({ Key: a, Name: a.slice(V0.length) }));
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
  return t.some((n) => n.Key === R(this, wt)) || t.unshift({
    // current deck was never saved so far
    Key: R(this, wt),
    Name: R(this, wt).slice(V0.length)
  }), t.sort((n, a) => n.Name.localeCompare(a.Name));
}, ld = async function(t) {
  try {
    const n = await Zn(t, Xt);
    if (!Mr(n)) {
      window.alert("This deck cannot be loaded (it seems to be damaged).");
      return;
    }
    const a = n;
    Yn(a), ze(this, wt, t), ze(this, ut, a), ze(this, Ot, this.hasAttribute("readonly") || (a.readOnly ?? !1)), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
}, cd = async function(t) {
  if (this.hasAttribute("readonly"))
    return;
  const n = V0 + t;
  try {
    if (await Zn(n, Xt) != null) {
      window.alert(`A deck named "${t}" already exists.`);
      return;
    }
  } catch (i) {
    console.warn("[BrowserCard] could not access IndexedDB:", i);
    return;
  }
  const a = {
    Id: ar("deck"),
    Name: t,
    readOnly: !1,
    swipeToAdjacentCard: !0,
    Script: "",
    Cards: [{
      Id: ar("card"),
      Name: "Card 1",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    }]
  };
  ze(this, wt, n), ze(this, ut, a), ze(this, Ot, !1), await le(this, Ae, _n).call(this), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
}, ud = async function(t) {
  if (!this.hasAttribute("readonly")) {
    if (t === R(this, wt)) {
      window.alert(
        'The currently open deck cannot be deleted - use "Reset to Original" instead.'
      );
      return;
    }
    try {
      await ga(t, Xt);
    } catch (n) {
      console.warn("[BrowserCard] could not access IndexedDB:", n);
    }
  }
}, dd = async function(t, n) {
  if (this.hasAttribute("readonly"))
    return;
  const a = V0 + n;
  if (a !== t)
    try {
      if (await Zn(a, Xt) != null) {
        window.alert(`A deck named "${n}" already exists.`);
        return;
      }
      if (t === R(this, wt))
        R(this, ut).Name = n, ze(this, wt, a), await le(this, Ae, _n).call(this), await ga(t, Xt), le(this, Ae, Xr).call(this);
      else {
        const s = await Zn(t, Xt);
        if (!Mr(s))
          return;
        s.Name = n, await sl(a, s, Xt), await ga(t, Xt);
      }
    } catch (i) {
      console.warn("[BrowserCard] could not access IndexedDB:", i);
    }
}, _n = async function() {
  if (!(R(this, ut) == null || R(this, Ot)))
    try {
      const t = JSON.parse(JSON.stringify(R(this, ut)));
      await sl(R(this, wt), t, Xt);
    } catch (t) {
      console.warn("[BrowserCard] could not persist deck:", t);
    }
}, hd = async function() {
  if (!R(this, Ot))
    try {
      const t = await Zn(R(this, wt), Xt);
      if (!Mr(t)) {
        window.alert("There is no (valid) saved copy of this deck yet.");
        return;
      }
      const n = t;
      Yn(n), ze(this, ut, n), ze(this, Ot, this.hasAttribute("readonly") || (n.readOnly ?? !1)), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
}, pd = async function() {
  if (!R(this, Ot)) {
    try {
      await ga(R(this, wt), Xt);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
    le(this, Ae, Da).call(this);
  }
}, /**** #exportDeck — downloads the deck as a JSON file ****/
fd = function() {
  R(this, ut) != null && Pi(
    (R(this, ut).Name ?? "Deck") + ".json",
    JSON.stringify(R(this, ut), null, 2),
    "application/json"
  );
}, /**** #importDeck — loads a deck from a JSON file and persists it ****/
md = function() {
  if (R(this, Ot))
    return;
  const t = document.createElement("input");
  t.type = "file", t.accept = "application/json,.json,.bc", t.onchange = async () => {
    var a;
    const n = (a = t.files) == null ? void 0 : a[0];
    if (n != null)
      try {
        const i = JSON.parse(await n.text());
        if (!Mr(i)) {
          window.alert("The chosen file does not contain a valid BrowserCard deck.");
          return;
        }
        const s = i;
        Yn(s), s.Id == null && (s.Id = ar("deck")), ze(this, ut, s), ze(this, Ot, this.hasAttribute("readonly") || (s.readOnly ?? !1)), await le(this, Ae, _n).call(this), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
      } catch (i) {
        window.alert("Import failed: " + i);
      }
  }, t.click();
}, gd = async function(t) {
  if (!R(this, Ot))
    try {
      const n = JSON.parse(t);
      if (!Mr(n)) {
        window.alert("The pasted text does not contain a valid BrowserCard deck.");
        return;
      }
      const a = n;
      Yn(a), a.Id == null && (a.Id = ar("deck")), ze(this, ut, a), ze(this, Ot, this.hasAttribute("readonly") || (a.readOnly ?? !1)), await le(this, Ae, _n).call(this), ze(this, vr, R(this, vr) + 1), le(this, Ae, Xr).call(this);
    } catch (n) {
      window.alert("Import failed: " + n);
    }
};
var wr, aa, ia, _s;
class M5 extends HTMLElement {
  constructor() {
    super(...arguments);
    bt(this, ia);
    bt(this, wr, null);
    bt(this, aa, 0);
  }
  static get observedAttributes() {
    return ["src"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    le(this, ia, _s).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    R(this, wr) != null && Qr(null, R(this, wr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && le(this, ia, _s).call(this);
  }
}
wr = new WeakMap(), aa = new WeakMap(), ia = new WeakSet(), /**** #mount ****/
_s = function() {
  nd(), R(this, wr) == null && (ze(this, wr, document.createElement("div")), R(this, wr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(R(this, wr)));
  const t = this.getAttribute("src") ?? "";
  let n = null;
  if (t.trim())
    try {
      const a = JSON.parse(t);
      Mr(a) && (n = a);
    } catch {
    }
  if (n == null) {
    console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute'), Qr(Z`
        <div style=${{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#888",
      font: "13px/1.4 system-ui, sans-serif"
    }}>this &lt;bc-deck&gt; contains no valid deck</div>
      `, R(this, wr));
    return;
  }
  Yn(n), ze(this, aa, R(this, aa) + 1), Qr(Z`<${rd}
      key=${R(this, aa)}
      deck=${n}
      isReadOnly=${!0}
      withChrome=${!1}
    />`, R(this, wr));
};
const E5 = Function("return this")();
E5.BC = {
  render: Qr,
  html: Z,
  Preact: D1,
  createContext: Mc,
  toChildArray: $0,
  cloneElement: Nc,
  createPortal: qc,
  useId: Dc,
  useRef: De,
  useState: et,
  useEffect: nr,
  useCallback: Wt,
  useMemo: E0,
  useContext: Oc,
  fromLocalTo: j4,
  fromViewportTo: K4,
  fromDocumentTo: Z4,
  Marked: Mu,
  markedHighlight: k4,
  markedKatex: w4,
  hljs: Dn,
  ModuleURL: import.meta.url
  // actual URL of the running BrowserCard.js
};
customElements.get("bc-deck") == null && customElements.define("bc-deck", M5);
customElements.get("bc-designer") == null && customElements.define("bc-designer", N5);
const og = S.HTMLsafe, lg = S.ValidatorForClassifier, cg = S.ValueIsArray, ug = S.ValueIsBoolean, dg = S.ValueIsCardinal, hg = S.ValueIsColor, pg = S.ValueIsEMailAddress, fg = S.ValueIsFiniteNumber, mg = S.ValueIsFunction, gg = S.ValueIsInteger, bg = S.ValueIsIntegerInRange, vg = S.ValueIsList, wg = S.ValueIsListSatisfying, xg = S.ValueIsNumber, yg = S.ValueIsNumberInRange, kg = S.ValueIsObject, Sg = S.ValueIsOneOf, _g = S.ValueIsOrdinal, Cg = S.ValueIsPlainObject, Ag = S.ValueIsString, $g = S.ValueIsStringMatching, Tg = S.ValueIsText, Ig = S.ValueIsTextline, Ng = S.ValueIsURL, Mg = S.acceptNil, Eg = S.escaped, zg = S.expectBoolean, Rg = S.expectFunction, Og = S.expectText, Bg = S.quoted, Dg = S.rejectNil;
export {
  pc as AlphaPercentOf,
  Q4 as BC_BackgroundModes,
  e2 as BC_BorderStyles,
  V5 as BC_Cursors,
  Qm as BC_DatePattern,
  K2 as BC_DateRegExp,
  Jm as BC_DateTimePattern,
  j2 as BC_DateTimeRegExp,
  uc as BC_ErrorIndicator,
  F5 as BC_FontStyles,
  X4 as BC_FontWeightValues,
  L5 as BC_FontWeights,
  ng as BC_MonthPattern,
  X2 as BC_MonthRegExp,
  t2 as BC_Overflows,
  ig as BC_PropertyEditorTypes,
  P5 as BC_TextAlignments,
  J4 as BC_TextDecorationLines,
  Y4 as BC_TextDecorationStyles,
  Zm as BC_TimePattern,
  G2 as BC_TimeRegExp,
  D5 as BC_Version,
  tg as BC_WeekPattern,
  Z2 as BC_WeekRegExp,
  sg as BC_expectedOrientations,
  L1 as BC_horizontalAnchorses,
  F1 as BC_verticalAnchorses,
  fc as ColorFrom,
  cc as EOLCount,
  In as Fragment,
  og as HTMLsafe,
  Mu as Marked,
  D1 as Preact,
  hc as RGBHexOf,
  Ja as ScriptInstance,
  ed as StringFromArguments,
  lg as ValidatorForClassifier,
  ro as ValueIsAnchors,
  cg as ValueIsArray,
  j1 as ValueIsBackgroundTexture,
  ug as ValueIsBoolean,
  K1 as ValueIsBorderStyle,
  Z1 as ValueIsBoxShadow,
  oo as ValueIsCardJSON,
  dg as ValueIsCardinal,
  hg as ValueIsColor,
  eg as ValueIsDate,
  Ym as ValueIsDateTime,
  Mr as ValueIsDeck,
  kr as ValueIsDimension,
  pg as ValueIsEMailAddress,
  fg as ValueIsFiniteNumber,
  mg as ValueIsFunction,
  q1 as ValueIsGeometry,
  P1 as ValueIsIdentifier,
  gg as ValueIsInteger,
  bg as ValueIsIntegerInRange,
  $m as ValueIsIntegerList,
  Sm as ValueIsLineList,
  vg as ValueIsList,
  wg as ValueIsListSatisfying,
  or as ValueIsLocation,
  ag as ValueIsMonth,
  mi as ValueIsName,
  xg as ValueIsNumber,
  yg as ValueIsNumberInRange,
  Cm as ValueIsNumberList,
  kg as ValueIsObject,
  no as ValueIsOffsets,
  Sg as ValueIsOneOf,
  _g as ValueIsOrdinal,
  X1 as ValueIsOverflowList,
  G4 as ValueIsPhoneNumber,
  Cg as ValueIsPlainObject,
  V1 as ValueIsPosition,
  J1 as ValueIsSerializableObject,
  ra as ValueIsSerializableValue,
  H1 as ValueIsSize,
  Ag as ValueIsString,
  $g as ValueIsStringMatching,
  Tg as ValueIsText,
  U1 as ValueIsTextDecoration,
  G1 as ValueIsTextShadow,
  Ig as ValueIsTextline,
  Xm as ValueIsTime,
  Ng as ValueIsURL,
  rg as ValueIsWeek,
  ei as ValueIsWidgetJSON,
  Mg as acceptNil,
  Nm as acceptableBoolean,
  Bm as acceptableCardinal,
  Hm as acceptableColor,
  qm as acceptableEMailAddress,
  Vm as acceptableFunction,
  zm as acceptableInteger,
  Rm as acceptableIntegerInRange,
  Gm as acceptableName,
  jm as acceptableNameOrIndex,
  Mm as acceptableNumber,
  Em as acceptableNumberInRange,
  Om as acceptableOrdinal,
  Wm as acceptablePhoneNumber,
  Dm as acceptableString,
  Lm as acceptableStringMatching,
  Fm as acceptableText,
  Pm as acceptableTextline,
  Um as acceptableURL,
  Im as acceptableValue,
  Yn as adjustIdCounterFor,
  g2 as allowAnchors,
  _2 as allowBackgroundTexture,
  A2 as allowBorderStyle,
  T2 as allowBoxShadow,
  l2 as allowDimension,
  f2 as allowGeometry,
  n2 as allowIdentifier,
  H2 as allowIntegerList,
  B2 as allowLineList,
  s2 as allowLocation,
  i2 as allowName,
  F2 as allowNumberList,
  v2 as allowOffsets,
  N2 as allowOverflowList,
  u2 as allowPosition,
  R2 as allowSerializableObject,
  E2 as allowSerializableValue,
  h2 as allowSize,
  x2 as allowTextDecoration,
  k2 as allowTextShadow,
  nm as allowedAnchors,
  dm as allowedBackgroundTexture,
  pm as allowedBorderStyle,
  mm as allowedBoxShadow,
  Z5 as allowedDimension,
  tm as allowedGeometry,
  q5 as allowedIdentifier,
  Tm as allowedIntegerList,
  _m as allowedLineList,
  j5 as allowedLocation,
  U5 as allowedName,
  Am as allowedNumberList,
  im as allowedOffsets,
  bm as allowedOverflowList,
  J5 as allowedPosition,
  ym as allowedSerializableObject,
  wm as allowedSerializableValue,
  Q5 as allowedSize,
  om as allowedTextDecoration,
  cm as allowedTextShadow,
  Fi as buildContext,
  Ya as buildScriptParams,
  R5 as clear,
  Nc as cloneElement,
  M0 as computeOffsets,
  Mc as createContext,
  tn as createElement,
  qc as createPortal,
  Pd as createRef,
  Wc as createStore,
  so as deckShallBeRemembered,
  ga as del,
  B5 as entries,
  Eg as escaped,
  Ia as escapedForHTML,
  b2 as expectAnchors,
  C2 as expectBackgroundTexture,
  zg as expectBoolean,
  $2 as expectBorderStyle,
  I2 as expectBoxShadow,
  c2 as expectDimension,
  Rg as expectFunction,
  m2 as expectGeometry,
  a2 as expectIdentifier,
  q2 as expectIntegerList,
  D2 as expectLineList,
  o2 as expectLocation,
  to as expectName,
  P2 as expectNumberList,
  w2 as expectOffsets,
  M2 as expectOverflowList,
  d2 as expectPosition,
  O2 as expectSerializableObject,
  z2 as expectSerializableValue,
  p2 as expectSize,
  Og as expectText,
  y2 as expectTextDecoration,
  S2 as expectTextShadow,
  am as expectedAnchors,
  hm as expectedBackgroundTexture,
  fm as expectedBorderStyle,
  gm as expectedBoxShadow,
  X5 as expectedDimension,
  rm as expectedGeometry,
  W5 as expectedIdentifier,
  W2 as expectedIntegerList,
  L2 as expectedLineList,
  K5 as expectedLocation,
  G5 as expectedName,
  V2 as expectedNumberList,
  sm as expectedOffsets,
  vm as expectedOverflowList,
  Y5 as expectedPosition,
  km as expectedSerializableObject,
  xm as expectedSerializableValue,
  em as expectedSize,
  lm as expectedTextDecoration,
  um as expectedTextShadow,
  Yd as forwardRef,
  Z4 as fromDocumentTo,
  j4 as fromLocalTo,
  K4 as fromViewportTo,
  Zn as get,
  tn as h,
  Z as html,
  U2 as installStylesheetFor,
  ch as keys,
  f5 as makeCardProxy,
  m5 as makeDeckProxy,
  p5 as makeWidgetProxy,
  k4 as markedHighlight,
  w4 as markedKatex,
  Xd as memo,
  ar as newInternalId,
  Km as normalizedName,
  Bg as quoted,
  Dg as rejectNil,
  l5 as rememberCurrentDeck,
  Qr as render,
  i5 as resolveBehaviorUrl,
  Yt as resolveGeometry,
  n5 as safelyRendered,
  sl as set,
  c5 as setDeckRemembering,
  On as throwError,
  H5 as throwReadOnlyError,
  $0 as toChildArray,
  Ss as uniqueNameIn,
  Wt as useCallback,
  Oc as useContext,
  nr as useEffect,
  Bc as useErrorBoundary,
  Dc as useId,
  jd as useLayoutEffect,
  E0 as useMemo,
  Rc as useReducer,
  De as useRef,
  et as useState,
  O5 as values
};
