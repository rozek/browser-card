var Hd = Object.defineProperty;
var qo = (r) => {
  throw TypeError(r);
};
var qd = (r, e, t) => e in r ? Hd(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var rt = (r, e, t) => qd(r, typeof e != "symbol" ? e + "" : e, t), ba = (r, e, t) => e.has(r) || qo("Cannot " + t);
var z = (r, e, t) => (ba(r, e, "read from private field"), t ? t.call(r) : e.get(r)), bt = (r, e, t) => e.has(r) ? qo("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Ee = (r, e, t, n) => (ba(r, e, "write to private field"), n ? n.call(r, t) : e.set(r, t), t), oe = (r, e, t) => (ba(r, e, "access private method"), t);
var Wo = (r, e, t, n) => ({
  set _(i) {
    Ee(r, e, i, t);
  },
  get _() {
    return z(r, e, n);
  }
});
function Sc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var q0 = { exports: {} }, Wd = q0.exports, Uo;
function Ud() {
  return Uo || (Uo = 1, (function(r, e) {
    (function(t, n) {
      n(e);
    })(Wd, (function(t) {
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
      function y(b) {
        return typeof b == "string" || b instanceof String;
      }
      var I = /^\s*$/;
      function $(b) {
        return (typeof b == "string" || b instanceof String) && !I.test(b.valueOf());
      }
      function E(b, _) {
        return (typeof b == "string" || b instanceof String) && _.test(b.valueOf());
      }
      var R = /^[^\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function W(b) {
        return E(b, R);
      }
      var Z = /^[^\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function Y(b) {
        return E(b, Z);
      }
      function N(b) {
        return typeof b == "function";
      }
      function ce(b) {
        return typeof b == "function" && (b.name == null || b.name === "");
      }
      function ue(b) {
        return typeof b == "function" && b.name != null && b.name !== "";
      }
      function P(b) {
        return typeof b == "function" && /^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function ge(b) {
        return typeof b == "function" && !/^function\s*[^(]*\(\)\s*\{\s*\[native code\]\s*\}\s*$/.test(b.toString());
      }
      function Ne(b) {
        return b != null && typeof b == "object";
      }
      function xe(b) {
        return b != null && typeof b == "object" && Object.getPrototypeOf(b) === Object.prototype;
      }
      function U(b) {
        return b != null && typeof b == "object" && !(b instanceof Object);
      }
      var q = Array.isArray;
      function te(b, _, V) {
        if (q(b)) {
          for (var ne = 0, Se = b.length; ne < Se; ne++) if (b[ne] === void 0) return !1;
          return !(_ != null && b.length < _) && !(V != null && b.length > V);
        }
        return !1;
      }
      function O(b, _, V, ne) {
        if (q(b)) try {
          for (var Se = 0, He = b.length; Se < He; Se++) if (_(b[Se]) == 0) return !1;
          return !(V != null && b.length < V) && !(ne != null && b.length > ne);
        } catch {
        }
        return !1;
      }
      function G(b) {
        return b instanceof Date;
      }
      function M(b) {
        return b instanceof Error;
      }
      function re(b) {
        return b != null && typeof b.then == "function";
      }
      function Te(b) {
        return b instanceof RegExp;
      }
      function Me(b, _) {
        return _.indexOf(b) >= 0;
      }
      function Ve(b) {
        return y(b) && (p0.hasOwnProperty(b) || /^#[a-fA-F0-9]{6}$/.test(b) || /^#[a-fA-F0-9]{8}$/.test(b) || /^rgb\([0-9]+,\s*[0-9]+,\s*[0-9]+\)$/.test(b) || /^rgba\([0-9]+,\s*[0-9]+,\s*[0-9]+,([01]|[0]?[.][0-9]+)\)$/.test(b));
      }
      var ze = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      function Ye(b) {
        return E(b, ze);
      }
      var er = /^[^\s\x00-\x1F\x7F-\x9F\u2028\u2029\uFFF9-\uFFFB]*$/;
      function Gt(b) {
        if (!E(b, er) || b === "") return !1;
        try {
          return new URL(b, "file://"), !0;
        } catch {
          return !1;
        }
      }
      var be = !1, Oe = !0;
      function gt(b, _, V, ne, Se) {
        if (_ == null) {
          if (ne) return _;
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
      function me(b, _, V) {
        var ne = function(He, Zr) {
          return gt(He, Zr, b, _, V);
        }, Se = b.name;
        return Se != null && /^ValueIs/.test(Se) ? Ke(ne, Se.replace(/^ValueIs/, _ ? "allow" : "expect")) : ne;
      }
      function Ke(b, _) {
        if (b == null && s("MissingArgument: no function given"), typeof b != "function" && s("InvalidArgument: the given 1st Argument is not a JavaScript function"), _ == null && s("MissingArgument: no desired name given"), typeof _ == "string" || _ instanceof String || s("InvalidArgument: the given desired name is not a string"), b.name === _) return b;
        try {
          if (Object.defineProperty(b, "name", { value: _ }), b.name === _) return b;
        } catch {
        }
        return new Function("originalFunction", "return function " + _ + " () {return originalFunction.apply(this,Array.prototype.slice.apply(arguments))}")(b);
      }
      function ut(b, _) {
        if (_ != null) return _.valueOf();
        s("MissingArgument: no ".concat(Je(b), " given"));
      }
      var $r = ut, or = me(o, Oe, "boolean value"), Nt = or, Tr = me(o, be, "boolean value"), On = Tr, Ur = me(l, Oe, "numeric value"), un = Ur, Bt = me(l, be, "numeric value"), Gr = Bt, dn = me(d, Oe, "finite numeric value"), Ir = dn, Dt = me(d, be, "finite numeric value"), pr = Dt, Et = me(h, Oe, "NaN value"), Lt = Et, lr = me(h, be, "NaN value"), Nr = lr;
      function i0(b, _, V, ne, Se, He) {
        return _ == null ? _ : s0(b, _, V, ne, Se, He);
      }
      var B0 = i0;
      function a0(b, _, V, ne, Se, He) {
        if (Bt(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Je(b), " is not-a-number")), Se == null && (Se = !0), He == null && (He = !0), V != null && isFinite(V)) {
          if (ne != null && isFinite(ne)) {
            if (_ < V || !Se && _ === V || _ > ne || !He && _ === ne) throw new RangeError("the given ".concat(Je(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(V, "...").concat(ne, ")"));
          } else if (_ < V || !Se && _ === V) throw new RangeError("the given ".concat(Je(b), " is below the allowed ") + "minimum (".concat(_, " ").concat(Se ? "<" : "<=", " ").concat(V, ")"));
        } else if (ne != null && isFinite(ne) && (_ > ne || !He && _ === ne)) throw new RangeError("the given ".concat(Je(b), " exceeds the allowed ") + "maximum (".concat(_, " ").concat(He ? ">" : ">=", " ").concat(ne, ")"));
        return _.valueOf();
      }
      var s0 = a0, hn = me(f, Oe, "integral numeric value"), o0 = hn, fn = me(f, be, "integral numeric value"), l0 = fn;
      function Mr(b, _, V, ne) {
        return _ == null ? _ : Dn(b, _, V, ne);
      }
      var Bn = Mr;
      function jr(b, _, V, ne) {
        if (fn(b, _), isNaN(_) && s("InvalidArgument: the given ".concat(Je(b), " is not-a-number")), V != null && isFinite(V)) {
          if (ne != null && isFinite(ne)) {
            if (_ < V || _ > ne) throw new RangeError("the given ".concat(Je(b), " (").concat(_, ") is outside ") + "the allowed range (".concat(V, "...").concat(ne, ")"));
          } else if (_ < V) throw new RangeError("the given ".concat(Je(b), " is below the allowed ") + "minimum (".concat(_, " < ").concat(V, ")"));
        } else if (ne != null && isFinite(ne) && _ > ne) throw new RangeError("the given ".concat(Je(b), " exceeds the allowed ") + "maximum (".concat(_, " > ").concat(ne, ")"));
        return _.valueOf();
      }
      var Dn = jr, Ln = me(m, Oe, "ordinal number"), mr = Ln, k = me(m, be, "ordinal number"), D = k, ee = me(v, Oe, "cardinal number"), Ae = ee, it = me(v, be, "cardinal number"), dt = it, he = me(y, Oe, "literal string"), le = he, ke = me(y, be, "literal string"), ft = ke, at = me($, Oe, "non-empty literal string"), Kr = at, pn = me($, be, "non-empty literal string"), Fn = pn;
      function c0(b, _, V) {
        return _ == null ? _ : Vn(b, _, V);
      }
      var St = c0;
      function Pn(b, _, V) {
        if (ke(b, _), V.test(_)) return _.valueOf();
        s("InvalidArgument: the given ".concat(Je(b), " does not match the specified pattern"));
      }
      var Vn = Pn, mn = me(W, Oe, "literal text"), u0 = mn, gr = me(W, be, "literal text"), D0 = gr, d0 = me(Y, Oe, "single line of text"), L0 = d0, Qe = me(Y, be, "single line of text"), Er = Qe, gn = me(N, Oe, "JavaScript function"), Hn = gn, Ft = me(N, be, "JavaScript function"), F0 = Ft, br = me(ce, Oe, "anonymous JavaScript function"), zr = br, L = me(ce, be, "anonymous JavaScript function"), ve = L, De = me(ue, Oe, "named JavaScript function"), We = De, lt = me(ue, be, "named JavaScript function"), Pt = lt, jt = me(P, Oe, "native JavaScript function"), bn = jt, Mt = me(P, be, "native JavaScript function"), Kt = Mt, qn = me(ge, Oe, "scripted JavaScript function"), Rr = qn, Wn = me(ge, be, "scripted JavaScript function"), P0 = Wn, h0 = me(Ne, Oe, "JavaScript object"), T = h0, A = me(Ne, be, "JavaScript object"), B = A, ae = me(xe, Oe, '"plain" JavaScript object'), fe = ae, ye = me(xe, be, '"plain" JavaScript object'), Le = ye, ie = me(U, Oe, '"vanilla" JavaScript object'), ct = ie, et = me(U, be, '"vanilla" JavaScript object'), Ue = et;
      function cr(b, _) {
        return _ == null ? _ : f0(b, _);
      }
      var Zt = cr;
      function vr(b, _) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), q(_)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is no JavaScript array"));
      }
      var f0 = vr;
      function se(b, _, V, ne, Se) {
        return _ == null ? _ : Ge(b, _, V, ne, Se);
      }
      var we = se;
      function Re(b, _, V, ne, Se) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), te(_, ne, Se)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is ") + (V == null ? "either not a list or contains an invalid number of elements" : "no " + Je(V)));
      }
      var Ge = Re;
      function $t(b, _, V, ne, Se, He) {
        return _ == null ? _ : pi(b, _, V, ne, Se, He);
      }
      var wr = $t;
      function fi(b, _, V, ne, Se, He) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), O(_, V, Se, He)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is ") + (ne == null ? "either not a list or contains invalid elements" : "no " + Je(ne)));
      }
      var pi = fi;
      function mo(b, _, V, ne) {
        return _ == null ? _ : bo(b, _, V, ne);
      }
      var _d = mo;
      function go(b, _, V, ne) {
        return _ == null && s("MissingArgument: no ".concat(Je(b), " given")), _ instanceof V || s("InvalidArgument: the given ".concat(Je(b), " is no ").concat(Je(ne))), _;
      }
      var bo = go;
      function vo(b, _, V, ne) {
        return _ == null ? _ : xo(b, _, V, ne);
      }
      var Cd = vo;
      function wo(b, _, V, ne) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), V.isPrototypeOf(_)) return _;
        s("InvalidArgument: the given ".concat(Je(b), " is no ").concat(Je(ne)));
      }
      var xo = wo, yo = me(G, Oe, "JavaScript Date object"), Ad = yo, ko = me(G, be, "JavaScript Date object"), $d = ko, So = me(M, Oe, "JavaScript Error object"), Td = So, _o = me(M, be, "JavaScript Error object"), Id = _o, Co = me(re, Oe, 'JavaScript Promise (or "Thenable") object'), Nd = Co, Ao = me(re, be, 'JavaScript Promise (or "Thenable") object'), Md = Ao, $o = me(Te, Oe, "JavaScript RegExp object"), Ed = $o, To = me(Te, be, "JavaScript RegExp object"), zd = To;
      function Io(b, _, V) {
        return _ == null ? _ : Mo(b, _, V);
      }
      var Rd = Io;
      function No(b, _, V) {
        if (_ == null && s("MissingArgument: no ".concat(Je(b), " given")), Me(_, V)) return _ == null || typeof _.valueOf != "function" ? _ : _.valueOf();
        s("InvalidArgument: the given ".concat(Je(b), " is not among the supported values"));
      }
      var Mo = No, Eo = me(Ve, Oe, "CSS color specification"), Od = Eo, zo = me(Ve, be, "CSS color specification"), Bd = zo, Ro = me(Ye, Oe, "EMail address"), Dd = Ro, Oo = me(Ye, be, "EMail address"), Ld = Oo, Bo = me(Gt, Oe, "URL"), Fd = Bo, Do = me(Gt, be, "URL"), Pd = Do;
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
      function Lo(b, _) {
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
              var ne = V.charCodeAt(0).toString(16);
              return "\\x" + "00".slice(ne.length) + ne;
          }
        }));
      }
      function Fo(b, _) {
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
              var ne = V.charCodeAt(0).toString(16);
              return "&#x0000".substring(3, 7 - ne.length) + ne + ";";
          }
        }));
      }
      function mi(b, _, V) {
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
            return b == null || _ == null || (V === "by-value" && (b instanceof Boolean || b instanceof Number || b instanceof String) ? b.valueOf() !== _.valueOf() : Array.isArray(b) ? (function(Se, He, Zr) {
              if (!Array.isArray(He) || Se.length !== He.length) return !0;
              for (var tr = 0, Vd = Se.length; tr < Vd; tr++) if (mi(Se[tr], He[tr], Zr)) return !0;
              return !1;
            })(b, _, V) : V === "by-reference" || (function(Se, He, Zr) {
              if (Object.getPrototypeOf(Se) !== Object.getPrototypeOf(He)) return !0;
              for (var tr in Se) if (!(tr in He)) return !0;
              for (var tr in He)
                if (!(tr in Se) || mi(Se[tr], He[tr], Zr)) return !0;
              return !1;
            })(b, _, V));
        }
        return !0;
      }
      function Po(b) {
        for (var _ in A("candidate", b), b) if (i(b, _)) return !1;
        return !0;
      }
      function Vo(b) {
        return /^\s*$/.test(b);
      }
      var p0 = { transparent: "rgba(0,0,0,0,0.0)", aliceblue: "rgba(240,248,255,1.0)", lightpink: "rgba(255,182,193,1.0)", antiquewhite: "rgba(250,235,215,1.0)", lightsalmon: "rgba(255,160,122,1.0)", aqua: "rgba(0,255,255,1.0)", lightseagreen: "rgba(32,178,170,1.0)", aquamarine: "rgba(127,255,212,1.0)", lightskyblue: "rgba(135,206,250,1.0)", azure: "rgba(240,255,255,1.0)", lightslategray: "rgba(119,136,153,1.0)", beige: "rgba(245,245,220,1.0)", lightslategrey: "rgba(119,136,153,1.0)", bisque: "rgba(255,228,196,1.0)", lightsteelblue: "rgba(176,196,222,1.0)", black: "rgba(0,0,0,1.0)", lightyellow: "rgba(255,255,224,1.0)", blanchedalmond: "rgba(255,235,205,1.0)", lime: "rgba(0,255,0,1.0)", blue: "rgba(0,0,255,1.0)", limegreen: "rgba(50,205,50,1.0)", blueviolet: "rgba(138,43,226,1.0)", linen: "rgba(250,240,230,1.0)", brown: "rgba(165,42,42,1.0)", magenta: "rgba(255,0,255,1.0)", burlywood: "rgba(222,184,135,1.0)", maroon: "rgba(128,0,0,1.0)", cadetblue: "rgba(95,158,160,1.0)", mediumaquamarine: "rgba(102,205,170,1.0)", chartreuse: "rgba(127,255,0,1.0)", mediumblue: "rgba(0,0,205,1.0)", chocolate: "rgba(210,105,30,1.0)", mediumorchid: "rgba(186,85,211,1.0)", coral: "rgba(255,127,80,1.0)", mediumpurple: "rgba(147,112,219,1.0)", cornflowerblue: "rgba(100,149,237,1.0)", mediumseagreen: "rgba(60,179,113,1.0)", cornsilk: "rgba(255,248,220,1.0)", mediumslateblue: "rgba(123,104,238,1.0)", crimson: "rgba(220,20,60,1.0)", mediumspringgreen: "rgba(0,250,154,1.0)", cyan: "rgba(0,255,255,1.0)", mediumturquoise: "rgba(72,209,204,1.0)", darkblue: "rgba(0,0,139,1.0)", mediumvioletred: "rgba(199,21,133,1.0)", darkcyan: "rgba(0,139,139,1.0)", midnightblue: "rgba(25,25,112,1.0)", darkgoldenrod: "rgba(184,134,11,1.0)", mintcream: "rgba(245,255,250,1.0)", darkgray: "rgba(169,169,169,1.0)", mistyrose: "rgba(255,228,225,1.0)", darkgreen: "rgba(0,100,0,1.0)", moccasin: "rgba(255,228,181,1.0)", darkgrey: "rgba(169,169,169,1.0)", navajowhite: "rgba(255,222,173,1.0)", darkkhaki: "rgba(189,183,107,1.0)", navy: "rgba(0,0,128,1.0)", darkmagenta: "rgba(139,0,139,1.0)", oldlace: "rgba(253,245,230,1.0)", darkolivegreen: "rgba(85,107,47,1.0)", olive: "rgba(128,128,0,1.0)", darkorange: "rgba(255,140,0,1.0)", olivedrab: "rgba(107,142,35,1.0)", darkorchid: "rgba(153,50,204,1.0)", orange: "rgba(255,165,0,1.0)", darkred: "rgba(139,0,0,1.0)", orangered: "rgba(255,69,0,1.0)", darksalmon: "rgba(233,150,122,1.0)", orchid: "rgba(218,112,214,1.0)", darkseagreen: "rgba(143,188,143,1.0)", palegoldenrod: "rgba(238,232,170,1.0)", darkslateblue: "rgba(72,61,139,1.0)", palegreen: "rgba(152,251,152,1.0)", darkslategray: "rgba(47,79,79,1.0)", paleturquoise: "rgba(175,238,238,1.0)", darkslategrey: "rgba(47,79,79,1.0)", palevioletred: "rgba(219,112,147,1.0)", darkturquoise: "rgba(0,206,209,1.0)", papayawhip: "rgba(255,239,213,1.0)", darkviolet: "rgba(148,0,211,1.0)", peachpuff: "rgba(255,218,185,1.0)", deeppink: "rgba(255,20,147,1.0)", peru: "rgba(205,133,63,1.0)", deepskyblue: "rgba(0,191,255,1.0)", pink: "rgba(255,192,203,1.0)", dimgray: "rgba(105,105,105,1.0)", plum: "rgba(221,160,221,1.0)", dimgrey: "rgba(105,105,105,1.0)", powderblue: "rgba(176,224,230,1.0)", dodgerblue: "rgba(30,144,255,1.0)", purple: "rgba(128,0,128,1.0)", firebrick: "rgba(178,34,34,1.0)", red: "rgba(255,0,0,1.0)", floralwhite: "rgba(255,250,240,1.0)", rosybrown: "rgba(188,143,143,1.0)", forestgreen: "rgba(34,139,34,1.0)", royalblue: "rgba(65,105,225,1.0)", fuchsia: "rgba(255,0,255,1.0)", saddlebrown: "rgba(139,69,19,1.0)", gainsboro: "rgba(220,220,220,1.0)", salmon: "rgba(250,128,114,1.0)", ghostwhite: "rgba(248,248,255,1.0)", sandybrown: "rgba(244,164,96,1.0)", gold: "rgba(255,215,0,1.0)", seagreen: "rgba(46,139,87,1.0)", goldenrod: "rgba(218,165,32,1.0)", seashell: "rgba(255,245,238,1.0)", gray: "rgba(128,128,128,1.0)", sienna: "rgba(160,82,45,1.0)", green: "rgba(0,128,0,1.0)", silver: "rgba(192,192,192,1.0)", greenyellow: "rgba(173,255,47,1.0)", skyblue: "rgba(135,206,235,1.0)", grey: "rgba(128,128,128,1.0)", slateblue: "rgba(106,90,205,1.0)", honeydew: "rgba(240,255,240,1.0)", slategray: "rgba(112,128,144,1.0)", hotpink: "rgba(255,105,180,1.0)", slategrey: "rgba(112,128,144,1.0)", indianred: "rgba(205,92,92,1.0)", snow: "rgba(255,250,250,1.0)", indigo: "rgba(75,0,130,1.0)", springgreen: "rgba(0,255,127,1.0)", ivory: "rgba(255,255,240,1.0)", steelblue: "rgba(70,130,180,1.0)", khaki: "rgba(240,230,140,1.0)", tan: "rgba(210,180,140,1.0)", lavender: "rgba(230,230,250,1.0)", teal: "rgba(0,128,128,1.0)", lavenderblush: "rgba(255,240,245,1.0)", thistle: "rgba(216,191,216,1.0)", lawngreen: "rgba(124,252,0,1.0)", tomato: "rgba(255,99,71,1.0)", lemonchiffon: "rgba(255,250,205,1.0)", turquoise: "rgba(64,224,208,1.0)", lightblue: "rgba(173,216,230,1.0)", violet: "rgba(238,130,238,1.0)", lightcoral: "rgba(240,128,128,1.0)", wheat: "rgba(245,222,179,1.0)", lightcyan: "rgba(224,255,255,1.0)", white: "rgba(255,255,255,1.0)", lightgoldenrodyellow: "rgba(250,250,210,1.0)", whitesmoke: "rgba(245,245,245,1.0)", lightgray: "rgba(211,211,211,1.0)", yellow: "rgba(255,255,0,1.0)", lightgreen: "rgba(144,238,144,1.0)", yellowgreen: "rgba(154,205,50,1.0)", lightgrey: "rgba(211,211,211,1.0)" };
      function Ho(b) {
        var _ = b.toLowerCase();
        if (p0.hasOwnProperty(_) && (b = p0[_]), /^#[a-fA-F0-9]{6}$/.test(b)) return b + "FF";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return b;
        var V = "0123456789ABCDEF";
        function ne(He) {
          return He > 255 && (He = 255), V[Math.trunc(He / 16)] + V[He % 16];
        }
        var Se = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (Se != null) return "#" + ne(parseInt(Se[1], 10)) + ne(parseInt(Se[2], 10)) + ne(parseInt(Se[3], 10)) + "FF";
        if ((Se = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([01]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return "#" + ne(parseInt(Se[1], 10)) + ne(parseInt(Se[2], 10)) + ne(parseInt(Se[3], 10)) + ne(255 * parseFloat(Se[4]));
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }
      t.ColorSet = p0, t.FunctionWithName = Ke, t.HTMLsafe = Fo, t.HexColor = Ho, t.MarkDownSafe = function(b, _) {
        return Fo(b, _).replace(/:/g, "&#58;");
      }, t.ObjectIsEmpty = Po, t.ObjectIsNotEmpty = function(b) {
        return !Po(b);
      }, t.ObjectMergedWith = function(b) {
        for (var _ = [], V = 1; V < arguments.length; V++) _[V - 1] = arguments[V];
        for (var ne = 0, Se = _.length; ne < Se; ne++) {
          var He = _[ne];
          if (He != null) if (typeof He == "object") for (var Zr in He) {
            var tr = Object.getOwnPropertyDescriptor(He, Zr);
            tr != null && Object.defineProperty(b, Zr, tr);
          }
          else s("InvalidArgument: argument #" + (ne + 1) + " is not an object");
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
        if (p0.hasOwnProperty(_)) return p0[_];
        if (/^#[a-fA-F0-9]{6}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + ", 1)";
        if (/^#[a-fA-F0-9]{8}$/.test(b)) return "rgba(" + parseInt(b.slice(1, 3), 16) + "," + parseInt(b.slice(3, 5), 16) + "," + parseInt(b.slice(5, 7), 16) + "," + parseInt(b.slice(7), 16) / 255 + ")";
        var V = /^rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)$/i.exec(b);
        if (V != null) return b.slice(0, b.length - 1) + ",1)";
        if ((V = /^rgba\(([(0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0]?[.][0-9]+|[01])\)$/i.exec(b)) != null) return b;
        s("InvalidArgument: the given Value is not a valid CSS Color specification");
      }, t.StringIsEmpty = Vo, t.StringIsNotEmpty = function(b) {
        return !Vo(b);
      }, t.ValidatorForClassifier = me, t.ValueExists = function(b) {
        return b != null;
      }, t.ValueInheritsFrom = function(b, _) {
        return a(_, b);
      }, t.ValueIsAnonymousFunction = ce, t.ValueIsArray = q, t.ValueIsBoolean = o, t.ValueIsCardinal = v, t.ValueIsColor = Ve, t.ValueIsDate = G, t.ValueIsEMailAddress = Ye, t.ValueIsEmptyString = function(b) {
        return (typeof b == "string" || b instanceof String) && I.test(b.valueOf());
      }, t.ValueIsError = M, t.ValueIsFiniteNumber = d, t.ValueIsFunction = N, t.ValueIsInstanceOf = function(b, _) {
        return b instanceof _;
      }, t.ValueIsInteger = f, t.ValueIsIntegerInRange = function(b, _, V) {
        if (!f(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(V)) {
            if (b < _ || b > V) return !1;
          } else if (b < _) return !1;
        } else if (d(V) && b > V) return !1;
        return !0;
      }, t.ValueIsList = te, t.ValueIsListSatisfying = O, t.ValueIsMissing = function(b) {
        return b == null;
      }, t.ValueIsNaN = h, t.ValueIsNamedFunction = ue, t.ValueIsNativeFunction = P, t.ValueIsNonEmptyString = $, t.ValueIsNumber = l, t.ValueIsNumberInRange = function(b, _, V, ne, Se) {
        if (ne === void 0 && (ne = !0), Se === void 0 && (Se = !0), !l(b) || isNaN(b)) return !1;
        if (d(_)) {
          if (d(V)) {
            if (b < _ || !ne && b === _ || b > V || !Se && b === V) return !1;
          } else if (b < _ || !ne && b === _) return !1;
        } else if (d(V) && (b > V || !Se && b === V)) return !1;
        return !0;
      }, t.ValueIsObject = Ne, t.ValueIsOneOf = Me, t.ValueIsOrdinal = m, t.ValueIsPlainObject = xe, t.ValueIsPromise = re, t.ValueIsRegExp = Te, t.ValueIsScriptedFunction = ge, t.ValueIsString = y, t.ValueIsStringMatching = E, t.ValueIsText = W, t.ValueIsTextline = Y, t.ValueIsURL = Gt, t.ValueIsVanillaObject = U, t.ValuesAreEqual = function(b, _, V) {
        return !mi(b, _, V);
      }, t.ValuesDiffer = mi, t.acceptNil = Oe, t.allowAnonymousFunction = br, t.allowArray = cr, t.allowBoolean = or, t.allowCardinal = ee, t.allowColor = Eo, t.allowDate = yo, t.allowEMailAddress = Ro, t.allowError = So, t.allowFiniteNumber = dn, t.allowFunction = gn, t.allowInstanceOf = mo, t.allowInteger = hn, t.allowIntegerInRange = Mr, t.allowList = se, t.allowListSatisfying = $t, t.allowNaN = Et, t.allowNamedFunction = De, t.allowNativeFunction = jt, t.allowNonEmptyString = at, t.allowNumber = Ur, t.allowNumberInRange = i0, t.allowObject = h0, t.allowOneOf = Io, t.allowOrdinal = Ln, t.allowPlainObject = ae, t.allowPromise = Co, t.allowRegExp = $o, t.allowScriptedFunction = qn, t.allowString = he, t.allowStringMatching = c0, t.allowText = mn, t.allowTextline = d0, t.allowURL = Bo, t.allowValueInheritingFrom = vo, t.allowVanillaObject = ie, t.allowedAnonymousFunction = zr, t.allowedArray = Zt, t.allowedBoolean = Nt, t.allowedCardinal = Ae, t.allowedColor = Od, t.allowedDate = Ad, t.allowedEMailAddress = Dd, t.allowedError = Td, t.allowedFiniteNumber = Ir, t.allowedFunction = Hn, t.allowedInstanceOf = _d, t.allowedInteger = o0, t.allowedIntegerInRange = Bn, t.allowedList = we, t.allowedListSatisfying = wr, t.allowedNaN = Lt, t.allowedNamedFunction = We, t.allowedNativeFunction = bn, t.allowedNonEmptyString = Kr, t.allowedNumber = un, t.allowedNumberInRange = B0, t.allowedObject = T, t.allowedOneOf = Rd, t.allowedOrdinal = mr, t.allowedPlainObject = fe, t.allowedPromise = Nd, t.allowedRegExp = Ed, t.allowedScriptedFunction = Rr, t.allowedString = le, t.allowedStringMatching = St, t.allowedText = u0, t.allowedTextline = L0, t.allowedURL = Fd, t.allowedValueInheritingFrom = Cd, t.allowedVanillaObject = ct, t.constrained = function(b, _, V) {
        return _ === void 0 && (_ = -1 / 0), V === void 0 && (V = 1 / 0), Math.max(_, Math.min(b, V));
      }, t.escaped = Je, t.expectAnonymousFunction = L, t.expectArray = vr, t.expectBoolean = Tr, t.expectCardinal = it, t.expectColor = zo, t.expectDate = ko, t.expectEMailAddress = Oo, t.expectError = _o, t.expectFiniteNumber = Dt, t.expectFunction = Ft, t.expectInstanceOf = go, t.expectInteger = fn, t.expectIntegerInRange = jr, t.expectList = Re, t.expectListSatisfying = fi, t.expectNaN = lr, t.expectNamedFunction = lt, t.expectNativeFunction = Mt, t.expectNonEmptyString = pn, t.expectNumber = Bt, t.expectNumberInRange = a0, t.expectObject = A, t.expectOneOf = No, t.expectOrdinal = k, t.expectPlainObject = ye, t.expectPromise = Ao, t.expectRegExp = To, t.expectScriptedFunction = Wn, t.expectString = ke, t.expectStringMatching = Pn, t.expectText = gr, t.expectTextline = Qe, t.expectURL = Do, t.expectValue = ut, t.expectValueInheritingFrom = wo, t.expectVanillaObject = et, t.expectedAnonymousFunction = ve, t.expectedArray = f0, t.expectedBoolean = On, t.expectedCardinal = dt, t.expectedColor = Bd, t.expectedDate = $d, t.expectedEMailAddress = Ld, t.expectedError = Id, t.expectedFiniteNumber = pr, t.expectedFunction = F0, t.expectedInstanceOf = bo, t.expectedInteger = l0, t.expectedIntegerInRange = Dn, t.expectedList = Ge, t.expectedListSatisfying = pi, t.expectedNaN = Nr, t.expectedNamedFunction = Pt, t.expectedNativeFunction = Kt, t.expectedNonEmptyString = Fn, t.expectedNumber = Gr, t.expectedNumberInRange = s0, t.expectedObject = B, t.expectedOneOf = Mo, t.expectedOrdinal = D, t.expectedPlainObject = Le, t.expectedPromise = Md, t.expectedRegExp = zd, t.expectedScriptedFunction = P0, t.expectedString = ft, t.expectedStringMatching = Vn, t.expectedText = D0, t.expectedTextline = Er, t.expectedURL = Pd, t.expectedValue = $r, t.expectedValueInheritingFrom = xo, t.expectedVanillaObject = Ue, t.global = n, t.quotable = Lo, t.quoted = function(b, _) {
        return _ === void 0 && (_ = '"'), _ + Lo(b, _) + _;
      }, t.rejectNil = be, t.shortHexColor = function(b) {
        return Ho(b).slice(0, 7);
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
      }, t.validatedArgument = gt, Object.defineProperty(t, "__esModule", { value: !0 });
    }));
  })(q0, q0.exports)), q0.exports;
}
var S = Ud(), oi, Pe, _c, kn, Go, Cc, Ac, va, Ri, j0, $c, Is, qa, Wa, Tc, Vi = {}, Hi = [], Gd = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, li = Array.isArray;
function Fr(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function Ns(r) {
  r && r.parentNode && r.parentNode.removeChild(r);
}
function rn(r, e, t) {
  var n, i, a, s = {};
  for (a in e) a == "key" ? n = e[a] : a == "ref" ? i = e[a] : s[a] = e[a];
  if (arguments.length > 2 && (s.children = arguments.length > 3 ? oi.call(arguments, 2) : t), typeof r == "function" && r.defaultProps != null) for (a in r.defaultProps) s[a] === void 0 && (s[a] = r.defaultProps[a]);
  return K0(r, s, n, i, null);
}
function K0(r, e, t, n, i) {
  var a = { type: r, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: i ?? ++_c, __i: -1, __u: 0 };
  return i == null && Pe.vnode != null && Pe.vnode(a), a;
}
function jd() {
  return { current: null };
}
function An(r) {
  return r.children;
}
function Qr(r, e) {
  this.props = r, this.context = e;
}
function C0(r, e) {
  if (e == null) return r.__ ? C0(r.__, r.__i + 1) : null;
  for (var t; e < r.__k.length; e++) if ((t = r.__k[e]) != null && t.__e != null) return t.__e;
  return typeof r.type == "function" ? C0(r) : null;
}
function Kd(r) {
  if (r.__P && r.__d) {
    var e = r.__v, t = e.__e, n = [], i = [], a = Fr({}, e);
    a.__v = e.__v + 1, Pe.vnode && Pe.vnode(a), Ms(r.__P, a, e, r.__n, r.__P.namespaceURI, 32 & e.__u ? [t] : null, n, t ?? C0(e), !!(32 & e.__u), i), a.__v = e.__v, a.__.__k[a.__i] = a, Ec(n, a, i), e.__e = e.__ = null, a.__e != t && Ic(a);
  }
}
function Ic(r) {
  if ((r = r.__) != null && r.__c != null) return r.__e = r.__c.base = null, r.__k.some(function(e) {
    if (e != null && e.__e != null) return r.__e = r.__c.base = e.__e;
  }), Ic(r);
}
function Ua(r) {
  (!r.__d && (r.__d = !0) && kn.push(r) && !qi.__r++ || Go != Pe.debounceRendering) && ((Go = Pe.debounceRendering) || Cc)(qi);
}
function qi() {
  try {
    for (var r, e = 1; kn.length; ) kn.length > e && kn.sort(Ac), r = kn.shift(), e = kn.length, Kd(r);
  } finally {
    kn.length = qi.__r = 0;
  }
}
function Nc(r, e, t, n, i, a, s, o, l, d, h) {
  var f, m, v, y, I, $, E, R = n && n.__k || Hi, W = e.length;
  for (l = Zd(t, e, R, l, W), f = 0; f < W; f++) (v = t.__k[f]) != null && (m = v.__i != -1 && R[v.__i] || Vi, v.__i = f, $ = Ms(r, v, m, i, a, s, o, l, d, h), y = v.__e, v.ref && m.ref != v.ref && (m.ref && Es(m.ref, null, v), h.push(v.ref, v.__c || y, v)), I == null && y != null && (I = y), (E = !!(4 & v.__u)) || m.__k === v.__k ? (l = Mc(v, l, r, E), E && m.__e && (m.__e = null)) : typeof v.type == "function" && $ !== void 0 ? l = $ : y && (l = y.nextSibling), v.__u &= -7);
  return t.__e = I, l;
}
function Zd(r, e, t, n, i) {
  var a, s, o, l, d, h = t.length, f = h, m = 0;
  for (r.__k = new Array(i), a = 0; a < i; a++) (s = e[a]) != null && typeof s != "boolean" && typeof s != "function" ? (typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? s = r.__k[a] = K0(null, s, null, null, null) : li(s) ? s = r.__k[a] = K0(An, { children: s }, null, null, null) : s.constructor === void 0 && s.__b > 0 ? s = r.__k[a] = K0(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : r.__k[a] = s, l = a + m, s.__ = r, s.__b = r.__b + 1, o = null, (d = s.__i = Xd(s, t, l, f)) != -1 && (f--, (o = t[d]) && (o.__u |= 2)), o == null || o.__v == null ? (d == -1 && (i > h ? m-- : i < h && m++), typeof s.type != "function" && (s.__u |= 4)) : d != l && (d == l - 1 ? m-- : d == l + 1 ? m++ : (d > l ? m-- : m++, s.__u |= 4))) : r.__k[a] = null;
  if (f) for (a = 0; a < h; a++) (o = t[a]) != null && (2 & o.__u) == 0 && (o.__e == n && (n = C0(o)), Rc(o, o));
  return n;
}
function Mc(r, e, t, n) {
  var i, a;
  if (typeof r.type == "function") {
    for (i = r.__k, a = 0; i && a < i.length; a++) i[a] && (i[a].__ = r, e = Mc(i[a], e, t, n));
    return e;
  }
  r.__e != e && (n && (e && r.type && !e.parentNode && (e = C0(r)), t.insertBefore(r.__e, e || null)), e = r.__e);
  do
    e = e && e.nextSibling;
  while (e != null && e.nodeType == 8);
  return e;
}
function A0(r, e) {
  return e = e || [], r == null || typeof r == "boolean" || (li(r) ? r.some(function(t) {
    A0(t, e);
  }) : e.push(r)), e;
}
function Xd(r, e, t, n) {
  var i, a, s, o = r.key, l = r.type, d = e[t], h = d != null && (2 & d.__u) == 0;
  if (d === null && o == null || h && o == d.key && l == d.type) return t;
  if (n > (h ? 1 : 0)) {
    for (i = t - 1, a = t + 1; i >= 0 || a < e.length; ) if ((d = e[s = i >= 0 ? i-- : a++]) != null && (2 & d.__u) == 0 && o == d.key && l == d.type) return s;
  }
  return -1;
}
function jo(r, e, t) {
  e[0] == "-" ? r.setProperty(e, t ?? "") : r[e] = t == null ? "" : typeof t != "number" || Gd.test(e) ? t : t + "px";
}
function gi(r, e, t, n, i) {
  var a, s;
  e: if (e == "style") if (typeof t == "string") r.style.cssText = t;
  else {
    if (typeof n == "string" && (r.style.cssText = n = ""), n) for (e in n) t && e in t || jo(r.style, e, "");
    if (t) for (e in t) n && t[e] == n[e] || jo(r.style, e, t[e]);
  }
  else if (e[0] == "o" && e[1] == "n") a = e != (e = e.replace($c, "$1")), s = e.toLowerCase(), e = s in r || e == "onFocusOut" || e == "onFocusIn" ? s.slice(2) : e.slice(2), r.l || (r.l = {}), r.l[e + a] = t, t ? n ? t[j0] = n[j0] : (t[j0] = Is, r.addEventListener(e, a ? Wa : qa, a)) : r.removeEventListener(e, a ? Wa : qa, a);
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
function Ko(r) {
  return function(e) {
    if (this.l) {
      var t = this.l[e.type + r];
      if (e[Ri] == null) e[Ri] = Is++;
      else if (e[Ri] < t[j0]) return;
      return t(Pe.event ? Pe.event(e) : e);
    }
  };
}
function Ms(r, e, t, n, i, a, s, o, l, d) {
  var h, f, m, v, y, I, $, E, R, W, Z, Y, N, ce, ue, P = e.type;
  if (e.constructor !== void 0) return null;
  128 & t.__u && (l = !!(32 & t.__u), a = [o = e.__e = t.__e]), (h = Pe.__b) && h(e);
  e: if (typeof P == "function") try {
    if (E = e.props, R = P.prototype && P.prototype.render, W = (h = P.contextType) && n[h.__c], Z = h ? W ? W.props.value : h.__ : n, t.__c ? $ = (f = e.__c = t.__c).__ = f.__E : (R ? e.__c = f = new P(E, Z) : (e.__c = f = new Qr(E, Z), f.constructor = P, f.render = Yd), W && W.sub(f), f.state || (f.state = {}), f.__n = n, m = f.__d = !0, f.__h = [], f._sb = []), R && f.__s == null && (f.__s = f.state), R && P.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = Fr({}, f.__s)), Fr(f.__s, P.getDerivedStateFromProps(E, f.__s))), v = f.props, y = f.state, f.__v = e, m) R && P.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(), R && f.componentDidMount != null && f.__h.push(f.componentDidMount);
    else {
      if (R && P.getDerivedStateFromProps == null && E !== v && f.componentWillReceiveProps != null && f.componentWillReceiveProps(E, Z), e.__v == t.__v || !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(E, f.__s, Z) === !1) {
        e.__v != t.__v && (f.props = E, f.state = f.__s, f.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.some(function(ge) {
          ge && (ge.__ = e);
        }), Hi.push.apply(f.__h, f._sb), f._sb = [], f.__h.length && s.push(f);
        break e;
      }
      f.componentWillUpdate != null && f.componentWillUpdate(E, f.__s, Z), R && f.componentDidUpdate != null && f.__h.push(function() {
        f.componentDidUpdate(v, y, I);
      });
    }
    if (f.context = Z, f.props = E, f.__P = r, f.__e = !1, Y = Pe.__r, N = 0, R) f.state = f.__s, f.__d = !1, Y && Y(e), h = f.render(f.props, f.state, f.context), Hi.push.apply(f.__h, f._sb), f._sb = [];
    else do
      f.__d = !1, Y && Y(e), h = f.render(f.props, f.state, f.context), f.state = f.__s;
    while (f.__d && ++N < 25);
    f.state = f.__s, f.getChildContext != null && (n = Fr(Fr({}, n), f.getChildContext())), R && !m && f.getSnapshotBeforeUpdate != null && (I = f.getSnapshotBeforeUpdate(v, y)), ce = h != null && h.type === An && h.key == null ? zc(h.props.children) : h, o = Nc(r, li(ce) ? ce : [ce], e, t, n, i, a, s, o, l, d), f.base = e.__e, e.__u &= -161, f.__h.length && s.push(f), $ && (f.__E = f.__ = null);
  } catch (ge) {
    if (e.__v = null, l || a != null) if (ge.then) {
      for (e.__u |= l ? 160 : 128; o && o.nodeType == 8 && o.nextSibling; ) o = o.nextSibling;
      a[a.indexOf(o)] = null, e.__e = o;
    } else {
      for (ue = a.length; ue--; ) Ns(a[ue]);
      Ga(e);
    }
    else e.__e = t.__e, e.__k = t.__k, ge.then || Ga(e);
    Pe.__e(ge, e, t);
  }
  else a == null && e.__v == t.__v ? (e.__k = t.__k, e.__e = t.__e) : o = e.__e = Jd(t.__e, e, t, n, i, a, s, l, d);
  return (h = Pe.diffed) && h(e), 128 & e.__u ? void 0 : o;
}
function Ga(r) {
  r && (r.__c && (r.__c.__e = !0), r.__k && r.__k.some(Ga));
}
function Ec(r, e, t) {
  for (var n = 0; n < t.length; n++) Es(t[n], t[++n], t[++n]);
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
function zc(r) {
  return typeof r != "object" || r == null || r.__b > 0 ? r : li(r) ? r.map(zc) : r.constructor !== void 0 ? null : Fr({}, r);
}
function Jd(r, e, t, n, i, a, s, o, l) {
  var d, h, f, m, v, y, I, $ = t.props || Vi, E = e.props, R = e.type;
  if (R == "svg" ? i = "http://www.w3.org/2000/svg" : R == "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), a != null) {
    for (d = 0; d < a.length; d++) if ((v = a[d]) && "setAttribute" in v == !!R && (R ? v.localName == R : v.nodeType == 3)) {
      r = v, a[d] = null;
      break;
    }
  }
  if (r == null) {
    if (R == null) return document.createTextNode(E);
    r = document.createElementNS(i, R, E.is && E), o && (Pe.__m && Pe.__m(e, a), o = !1), a = null;
  }
  if (R == null) $ === E || o && r.data == E || (r.data = E);
  else {
    if (a = R == "textarea" && E.defaultValue != null ? null : a && oi.call(r.childNodes), !o && a != null) for ($ = {}, d = 0; d < r.attributes.length; d++) $[(v = r.attributes[d]).name] = v.value;
    for (d in $) v = $[d], d == "dangerouslySetInnerHTML" ? f = v : d == "children" || d in E || d == "value" && "defaultValue" in E || d == "checked" && "defaultChecked" in E || gi(r, d, null, v, i);
    for (d in E) v = E[d], d == "children" ? m = v : d == "dangerouslySetInnerHTML" ? h = v : d == "value" ? y = v : d == "checked" ? I = v : o && typeof v != "function" || $[d] === v || gi(r, d, v, $[d], i);
    if (h) o || f && (h.__html == f.__html || h.__html == r.innerHTML) || (r.innerHTML = h.__html), e.__k = [];
    else if (f && (r.innerHTML = ""), Nc(e.type == "template" ? r.content : r, li(m) ? m : [m], e, t, n, R == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, a, s, a ? a[0] : t.__k && C0(t, 0), o, l), a != null) for (d = a.length; d--; ) Ns(a[d]);
    o && R != "textarea" || (d = "value", R == "progress" && y == null ? r.removeAttribute("value") : y != null && (y !== r[d] || R == "progress" && !y || R == "option" && y != $[d]) && gi(r, d, y, $[d], i), d = "checked", I != null && I != r[d] && gi(r, d, I, $[d], i));
  }
  return r;
}
function Es(r, e, t) {
  try {
    if (typeof r == "function") {
      var n = typeof r.__u == "function";
      n && r.__u(), n && e == null || (r.__u = r(e));
    } else r.current = e;
  } catch (i) {
    Pe.__e(i, t);
  }
}
function Rc(r, e, t) {
  var n, i;
  if (Pe.unmount && Pe.unmount(r), (n = r.ref) && (n.current && n.current != r.__e || Es(n, null, e)), (n = r.__c) != null) {
    if (n.componentWillUnmount) try {
      n.componentWillUnmount();
    } catch (a) {
      Pe.__e(a, e);
    }
    n.base = n.__P = null;
  }
  if (n = r.__k) for (i = 0; i < n.length; i++) n[i] && Rc(n[i], e, t || typeof r.type != "function");
  t || Ns(r.__e), r.__c = r.__ = r.__e = void 0;
}
function Yd(r, e, t) {
  return this.constructor(r, t);
}
function en(r, e, t) {
  var n, i, a, s;
  e == document && (e = document.documentElement), Pe.__ && Pe.__(r, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, a = [], s = [], Ms(e, r = (!n && t || e).__k = rn(An, null, [r]), i || Vi, Vi, e.namespaceURI, !n && t ? [t] : i ? null : e.firstChild ? oi.call(e.childNodes) : null, a, !n && t ? t : i ? i.__e : e.firstChild, n, s), Ec(a, r, s);
}
function Oc(r, e, t) {
  var n, i, a, s, o = Fr({}, r.props);
  for (a in r.type && r.type.defaultProps && (s = r.type.defaultProps), e) a == "key" ? n = e[a] : a == "ref" ? i = e[a] : o[a] = e[a] === void 0 && s != null ? s[a] : e[a];
  return arguments.length > 2 && (o.children = arguments.length > 3 ? oi.call(arguments, 2) : t), K0(r.type, o, n || r.key, i || r.ref, null);
}
function Bc(r) {
  function e(t) {
    var n, i;
    return this.getChildContext || (n = /* @__PURE__ */ new Set(), (i = {})[e.__c] = this, this.getChildContext = function() {
      return i;
    }, this.componentWillUnmount = function() {
      n = null;
    }, this.shouldComponentUpdate = function(a) {
      this.props.value != a.value && n.forEach(function(s) {
        s.__e = !0, Ua(s);
      });
    }, this.sub = function(a) {
      n.add(a);
      var s = a.componentWillUnmount;
      a.componentWillUnmount = function() {
        n && n.delete(a), s && s.call(a);
      };
    }), t.children;
  }
  return e.__c = "__cC" + Tc++, e.__ = r, e.Provider = e.__l = (e.Consumer = function(t, n) {
    return t.children(n);
  }).contextType = e, e;
}
oi = Hi.slice, Pe = { __e: function(r, e, t, n) {
  for (var i, a, s; e = e.__; ) if ((i = e.__c) && !i.__) try {
    if ((a = i.constructor) && a.getDerivedStateFromError != null && (i.setState(a.getDerivedStateFromError(r)), s = i.__d), i.componentDidCatch != null && (i.componentDidCatch(r, n || {}), s = i.__d), s) return i.__E = i;
  } catch (o) {
    r = o;
  }
  throw r;
} }, _c = 0, Qr.prototype.setState = function(r, e) {
  var t;
  t = this.__s != null && this.__s != this.state ? this.__s : this.__s = Fr({}, this.state), typeof r == "function" && (r = r(Fr({}, t), this.props)), r && Fr(t, r), r != null && this.__v && (e && this._sb.push(e), Ua(this));
}, Qr.prototype.forceUpdate = function(r) {
  this.__v && (this.__e = !0, r && this.__h.push(r), Ua(this));
}, Qr.prototype.render = An, kn = [], Cc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ac = function(r, e) {
  return r.__v.__b - e.__v.__b;
}, qi.__r = 0, va = Math.random().toString(8), Ri = "__d" + va, j0 = "__a" + va, $c = /(PointerCapture)$|Capture$/i, Is = 0, qa = Ko(!1), Wa = Ko(!0), Tc = 0;
var Dc = function(r, e, t, n) {
  var i;
  e[0] = 0;
  for (var a = 1; a < e.length; a++) {
    var s = e[a++], o = e[a] ? (e[0] |= s ? 1 : 2, t[e[a++]]) : e[++a];
    s === 3 ? n[0] = o : s === 4 ? n[1] = Object.assign(n[1] || {}, o) : s === 5 ? (n[1] = n[1] || {})[e[++a]] = o : s === 6 ? n[1][e[++a]] += o + "" : s ? (i = r.apply(o, Dc(r, o, t, ["", null])), n.push(i), o[0] ? e[0] |= 2 : (e[a - 2] = 0, e[a] = i)) : n.push(o);
  }
  return n;
}, Zo = /* @__PURE__ */ new Map();
function Qd(r) {
  var e = Zo.get(this);
  return e || (e = /* @__PURE__ */ new Map(), Zo.set(this, e)), (e = Dc(this, e.get(r) || (e.set(r, e = (function(t) {
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
var K = Qd.bind(rn), nn, st, wa, Xo, X0 = 0, Lc = [], kt = Pe, Jo = kt.__b, Yo = kt.__r, Qo = kt.diffed, el = kt.__c, tl = kt.unmount, rl = kt.__;
function e0(r, e) {
  kt.__h && kt.__h(st, r, X0 || e), X0 = 0;
  var t = st.__H || (st.__H = { __: [], __h: [] });
  return r >= t.__.length && t.__.push({}), t.__[r];
}
function je(r) {
  return X0 = 1, Fc(Hc, r);
}
function Fc(r, e, t) {
  var n = e0(nn++, 2);
  if (n.t = r, !n.__c && (n.__ = [t ? t(e) : Hc(void 0, e), function(o) {
    var l = n.__N ? n.__N[0] : n.__[0], d = n.t(l, o);
    l !== d && (n.__N = [d, n.__[1]], n.__c.setState({}));
  }], n.__c = st, !st.__f)) {
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
    st.__f = !0;
    var a = st.shouldComponentUpdate, s = st.componentWillUpdate;
    st.componentWillUpdate = function(o, l, d) {
      if (this.__e) {
        var h = a;
        a = void 0, i(o, l, d), a = h;
      }
      s && s.call(this, o, l, d);
    }, st.shouldComponentUpdate = i;
  }
  return n.__N || n.__;
}
function Jt(r, e) {
  var t = e0(nn++, 3);
  !kt.__s && Rs(t.__H, e) && (t.__ = r, t.u = e, st.__H.__h.push(t));
}
function eh(r, e) {
  var t = e0(nn++, 4);
  !kt.__s && Rs(t.__H, e) && (t.__ = r, t.u = e, st.__h.push(t));
}
function Fe(r) {
  return X0 = 5, M0(function() {
    return { current: r };
  }, []);
}
function M0(r, e) {
  var t = e0(nn++, 7);
  return Rs(t.__H, e) && (t.__ = r(), t.__H = e, t.__h = r), t.__;
}
function Ht(r, e) {
  return X0 = 8, M0(function() {
    return r;
  }, e);
}
function Pc(r) {
  var e = st.context[r.__c], t = e0(nn++, 9);
  return t.c = r, e ? (t.__ == null && (t.__ = !0, e.sub(st)), e.props.value) : r.__;
}
function zs(r) {
  var e = e0(nn++, 10), t = je();
  return e.__ = r, st.componentDidCatch || (st.componentDidCatch = function(n, i) {
    e.__ && e.__(n, i), t[1](n);
  }), [t[0], function() {
    t[1](void 0);
  }];
}
function Vc() {
  var r = e0(nn++, 11);
  if (!r.__) {
    for (var e = st.__v; e !== null && !e.__m && e.__ !== null; ) e = e.__;
    var t = e.__m || (e.__m = [0, 0]);
    r.__ = "P" + t[0] + "-" + t[1]++;
  }
  return r.__;
}
function th() {
  for (var r; r = Lc.shift(); ) {
    var e = r.__H;
    if (r.__P && e) try {
      e.__h.some(Oi), e.__h.some(ja), e.__h = [];
    } catch (t) {
      e.__h = [], kt.__e(t, r.__v);
    }
  }
}
kt.__b = function(r) {
  st = null, Jo && Jo(r);
}, kt.__ = function(r, e) {
  r && e.__k && e.__k.__m && (r.__m = e.__k.__m), rl && rl(r, e);
}, kt.__r = function(r) {
  Yo && Yo(r), nn = 0;
  var e = (st = r.__c).__H;
  e && (wa === st ? (e.__h = [], st.__h = [], e.__.some(function(t) {
    t.__N && (t.__ = t.__N), t.u = t.__N = void 0;
  })) : (e.__h.some(Oi), e.__h.some(ja), e.__h = [], nn = 0)), wa = st;
}, kt.diffed = function(r) {
  Qo && Qo(r);
  var e = r.__c;
  e && e.__H && (e.__H.__h.length && (Lc.push(e) !== 1 && Xo === kt.requestAnimationFrame || ((Xo = kt.requestAnimationFrame) || rh)(th)), e.__H.__.some(function(t) {
    t.u && (t.__H = t.u), t.u = void 0;
  })), wa = st = null;
}, kt.__c = function(r, e) {
  e.some(function(t) {
    try {
      t.__h.some(Oi), t.__h = t.__h.filter(function(n) {
        return !n.__ || ja(n);
      });
    } catch (n) {
      e.some(function(i) {
        i.__h && (i.__h = []);
      }), e = [], kt.__e(n, t.__v);
    }
  }), el && el(r, e);
}, kt.unmount = function(r) {
  tl && tl(r);
  var e, t = r.__c;
  t && t.__H && (t.__H.__.some(function(n) {
    try {
      Oi(n);
    } catch (i) {
      e = i;
    }
  }), t.__H = void 0, e && kt.__e(e, t.__v));
};
var nl = typeof requestAnimationFrame == "function";
function rh(r) {
  var e, t = function() {
    clearTimeout(n), nl && cancelAnimationFrame(e), setTimeout(r);
  }, n = setTimeout(t, 35);
  nl && (e = requestAnimationFrame(t));
}
function Oi(r) {
  var e = st, t = r.__c;
  typeof t == "function" && (r.__c = void 0, t()), st = e;
}
function ja(r) {
  var e = st;
  r.__c = r.__(), st = e;
}
function Rs(r, e) {
  return !r || r.length !== e.length || e.some(function(t, n) {
    return t !== r[n];
  });
}
function Hc(r, e) {
  return typeof e == "function" ? e(r) : e;
}
function qc(r, e) {
  for (var t in e) r[t] = e[t];
  return r;
}
function Ka(r, e) {
  for (var t in r) if (t !== "__source" && !(t in e)) return !0;
  for (var n in e) if (n !== "__source" && r[n] !== e[n]) return !0;
  return !1;
}
function il(r, e) {
  this.props = r, this.context = e;
}
function nh(r, e) {
  function t(i) {
    var a = this.props.ref;
    return a != i.ref && a && (typeof a == "function" ? a(null) : a.current = null), e ? !e(this.props, i) || a != i.ref : Ka(this.props, i);
  }
  function n(i) {
    return this.shouldComponentUpdate = t, rn(r, i);
  }
  return n.displayName = "Memo(" + (r.displayName || r.name) + ")", n.__f = n.prototype.isReactComponent = !0, n.type = r, n;
}
(il.prototype = new Qr()).isPureReactComponent = !0, il.prototype.shouldComponentUpdate = function(r, e) {
  return Ka(this.props, r) || Ka(this.state, e);
};
var al = Pe.__b;
Pe.__b = function(r) {
  r.type && r.type.__f && r.ref && (r.props.ref = r.ref, r.ref = null), al && al(r);
};
var ih = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function ah(r) {
  function e(t) {
    var n = qc({}, t);
    return delete n.ref, r(n, t.ref || null);
  }
  return e.$$typeof = ih, e.render = r, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (r.displayName || r.name) + ")", e;
}
var sh = Pe.__e;
Pe.__e = function(r, e, t, n) {
  if (r.then) {
    for (var i, a = e; a = a.__; ) if ((i = a.__c) && i.__c) return e.__e == null && (e.__e = t.__e, e.__k = t.__k), i.__c(r, e);
  }
  sh(r, e, t, n);
};
var sl = Pe.unmount;
function Wc(r, e, t) {
  return r && (r.__c && r.__c.__H && (r.__c.__H.__.forEach(function(n) {
    typeof n.__c == "function" && n.__c();
  }), r.__c.__H = null), (r = qc({}, r)).__c != null && (r.__c.__P === t && (r.__c.__P = e), r.__c.__e = !0, r.__c = null), r.__k = r.__k && r.__k.map(function(n) {
    return Wc(n, e, t);
  })), r;
}
function Uc(r, e, t) {
  return r && t && (r.__v = null, r.__k = r.__k && r.__k.map(function(n) {
    return Uc(n, e, t);
  }), r.__c && r.__c.__P === e && (r.__e && t.appendChild(r.__e), r.__c.__e = !0, r.__c.__P = t)), r;
}
function xa() {
  this.__u = 0, this.o = null, this.__b = null;
}
function Gc(r) {
  var e = r.__ && r.__.__c;
  return e && e.__a && e.__a(r);
}
function bi() {
  this.i = null, this.l = null;
}
Pe.unmount = function(r) {
  var e = r.__c;
  e && (e.__z = !0), e && e.__R && e.__R(), e && 32 & r.__u && (r.type = null), sl && sl(r);
}, (xa.prototype = new Qr()).__c = function(r, e) {
  var t = e.__c, n = this;
  n.o == null && (n.o = []), n.o.push(t);
  var i = Gc(n.__v), a = !1, s = function() {
    a || n.__z || (a = !0, t.__R = null, i ? i(l) : l());
  };
  t.__R = s;
  var o = t.__P;
  t.__P = null;
  var l = function() {
    if (!--n.__u) {
      if (n.state.__a) {
        var d = n.state.__a;
        n.__v.__k[0] = Uc(d, d.__c.__P, d.__c.__O);
      }
      var h;
      for (n.setState({ __a: n.__b = null }); h = n.o.pop(); ) h.__P = o, h.forceUpdate();
    }
  };
  n.__u++ || 32 & e.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), r.then(s, s);
}, xa.prototype.componentWillUnmount = function() {
  this.o = [];
}, xa.prototype.render = function(r, e) {
  if (this.__b) {
    if (this.__v.__k) {
      var t = document.createElement("div"), n = this.__v.__k[0].__c;
      this.__v.__k[0] = Wc(this.__b, t, n.__O = n.__P);
    }
    this.__b = null;
  }
  var i = e.__a && rn(An, null, r.fallback);
  return i && (i.__u &= -33), [rn(An, null, e.__a ? null : r.children), i];
};
var ol = function(r, e, t) {
  if (++t[1] === t[0] && r.l.delete(e), r.props.revealOrder && (r.props.revealOrder[0] !== "t" || !r.l.size)) for (t = r.i; t; ) {
    for (; t.length > 3; ) t.pop()();
    if (t[1] < t[0]) break;
    r.i = t = t[2];
  }
};
function oh(r) {
  return this.getChildContext = function() {
    return r.context;
  }, r.children;
}
function lh(r) {
  var e = this, t = r.h;
  if (e.componentWillUnmount = function() {
    en(null, e.v), e.v = null, e.h = null;
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
  en(rn(oh, { context: e.context }, r.__v), e.v);
}
function jc(r, e) {
  var t = rn(lh, { __v: r, h: e });
  return t.containerInfo = e, t;
}
(bi.prototype = new Qr()).__a = function(r) {
  var e = this, t = Gc(e.__v), n = e.l.get(r);
  return n[0]++, function(i) {
    var a = function() {
      e.props.revealOrder ? (n.push(i), ol(e, r, n)) : i();
    };
    t ? t(a) : a();
  };
}, bi.prototype.render = function(r) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var e = A0(r.children);
  r.revealOrder && r.revealOrder[0] === "b" && e.reverse();
  for (var t = e.length; t--; ) this.l.set(e[t], this.i = [1, 0, this.i]);
  return r.children;
}, bi.prototype.componentDidUpdate = bi.prototype.componentDidMount = function() {
  var r = this;
  this.l.forEach(function(e, t) {
    ol(r, t, e);
  });
};
var ch = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, uh = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, dh = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, hh = /[A-Z0-9]/g, fh = typeof document < "u", ph = function(r) {
  return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(r);
};
Qr.prototype.isReactComponent = !0, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(r) {
  Object.defineProperty(Qr.prototype, r, { configurable: !0, get: function() {
    return this["UNSAFE_" + r];
  }, set: function(e) {
    Object.defineProperty(this, r, { configurable: !0, writable: !0, value: e });
  } });
});
var ll = Pe.event;
Pe.event = function(r) {
  return ll && (r = ll(r)), r.persist = function() {
  }, r.isPropagationStopped = function() {
    return this.cancelBubble;
  }, r.isDefaultPrevented = function() {
    return this.defaultPrevented;
  }, r.nativeEvent = r;
};
var mh = { configurable: !0, get: function() {
  return this.class;
} }, cl = Pe.vnode;
Pe.vnode = function(r) {
  typeof r.type == "string" && (function(e) {
    var t = e.props, n = e.type, i = {}, a = n.indexOf("-") == -1;
    for (var s in t) {
      var o = t[s];
      if (!(s === "value" && "defaultValue" in t && o == null || fh && s === "children" && n === "noscript" || s === "class" || s === "className")) {
        var l = s.toLowerCase();
        s === "defaultValue" && "value" in t && t.value == null ? s = "value" : s === "download" && o === !0 ? o = "" : l === "translate" && o === "no" ? o = !1 : l[0] === "o" && l[1] === "n" ? l === "ondoubleclick" ? s = "ondblclick" : l !== "onchange" || n !== "input" && n !== "textarea" || ph(t.type) ? l === "onfocus" ? s = "onfocusin" : l === "onblur" ? s = "onfocusout" : dh.test(s) && (s = l) : l = s = "oninput" : a && uh.test(s) ? s = s.replace(hh, "-$&").toLowerCase() : o === null && (o = void 0), l === "oninput" && i[s = l] && (s = "oninputCapture"), i[s] = o;
      }
    }
    n == "select" && (i.multiple && Array.isArray(i.value) && (i.value = A0(t.children).forEach(function(d) {
      d.props.selected = i.value.indexOf(d.props.value) != -1;
    })), i.defaultValue != null && (i.value = A0(t.children).forEach(function(d) {
      d.props.selected = i.multiple ? i.defaultValue.indexOf(d.props.value) != -1 : i.defaultValue == d.props.value;
    }))), t.class && !t.className ? (i.class = t.class, Object.defineProperty(i, "className", mh)) : t.className && (i.class = i.className = t.className), e.props = i;
  })(r), r.$$typeof = ch, cl && cl(r);
};
var ul = Pe.__r;
Pe.__r = function(r) {
  ul && ul(r), r.__c;
};
var dl = Pe.diffed;
Pe.diffed = function(r) {
  dl && dl(r);
  var e = r.props, t = r.__e;
  t != null && r.type === "textarea" && "value" in e && e.value !== t.value && (t.value = e.value == null ? "" : e.value);
};
function Vr(r) {
  return new Promise((e, t) => {
    r.oncomplete = r.onsuccess = () => e(r.result), r.onabort = r.onerror = () => t(r.error);
  });
}
function Kc(r, e) {
  let t;
  const n = () => {
    if (t)
      return t;
    const i = indexedDB.open(r);
    return i.onupgradeneeded = () => i.result.createObjectStore(e), t = Vr(i), t.then((a) => {
      a.onclose = () => t = void 0;
    }, () => {
    }), t;
  };
  return (i, a) => n().then((s) => a(s.transaction(e, i).objectStore(e)));
}
let ya;
function t0() {
  return ya || (ya = Kc("keyval-store", "keyval")), ya;
}
function Un(r, e = t0()) {
  return e("readonly", (t) => Vr(t.get(r)));
}
function hl(r, e, t = t0()) {
  return t("readwrite", (n) => (n.put(e, r), Vr(n.transaction)));
}
function vi(r, e = t0()) {
  return e("readwrite", (t) => (t.delete(r), Vr(t.transaction)));
}
function W5(r = t0()) {
  return r("readwrite", (e) => (e.clear(), Vr(e.transaction)));
}
function Os(r, e) {
  return r.openCursor().onsuccess = function() {
    this.result && (e(this.result), this.result.continue());
  }, Vr(r.transaction);
}
function gh(r = t0()) {
  return r("readonly", (e) => {
    if (e.getAllKeys)
      return Vr(e.getAllKeys());
    const t = [];
    return Os(e, (n) => t.push(n.key)).then(() => t);
  });
}
function U5(r = t0()) {
  return r("readonly", (e) => {
    if (e.getAll)
      return Vr(e.getAll());
    const t = [];
    return Os(e, (n) => t.push(n.value)).then(() => t);
  });
}
function G5(r = t0()) {
  return r("readonly", (e) => {
    if (e.getAll && e.getAllKeys)
      return Promise.all([
        Vr(e.getAllKeys()),
        Vr(e.getAll())
      ]).then(([n, i]) => n.map((a, s) => [a, i[s]]));
    const t = [];
    return Os(e, (n) => t.push([n.key, n.value])).then(() => t);
  });
}
var Bi = { exports: {} }, bh = Bi.exports, fl;
function vh() {
  return fl || (fl = 1, (function(r, e) {
    (function(t, n) {
      r.exports = n();
    })(bh, (function() {
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
  })(Bi)), Bi.exports;
}
var wh = vh();
const xh = /* @__PURE__ */ Sc(wh), yh = /* @__PURE__ */ new Set([
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
]), kh = /* @__PURE__ */ new Set([
  "Id",
  "Name",
  "Color",
  "Alpha",
  "dontSearch",
  "Script",
  "Widgets",
  "Value"
]), Sh = /* @__PURE__ */ new Set([
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
function pl(r, e, t, n) {
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
function ml(r, e, t, n, i, a, s) {
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
function _h(r) {
  let e = 0;
  for (const t of r.Cards) {
    const n = parseInt(t.Id.replace("bc-card-", ""), 10);
    isNaN(n) || (e = Math.max(e, n));
  }
  return nd(e + 1), `bc-card-${e + 1}`;
}
function Ch(r) {
  let e = 0;
  for (const t of r.Cards)
    for (const n of t.Widgets) {
      const i = parseInt(n.Id.replace("bc-widget-", ""), 10);
      isNaN(i) || (e = Math.max(e, i));
    }
  return nd(e + 1), `bc-widget-${e + 1}`;
}
function ka(r, e) {
  if (r === "deck")
    return "deck";
  const t = r.split("/"), n = e.Cards.find((a) => a.Id === t[0]) ?? null;
  if (n == null)
    return null;
  if (t.length === 1)
    return { Card: n };
  const i = n.Widgets.find((a) => a.Id === t[1]) ?? null;
  return i == null ? null : { Card: n, Widget: i };
}
const Ah = {
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
var Sn, y0, _n, ur, Jn, ni, F, Za, Xa, tt, Zc, Xc, Jc, Yc, Qc, eu, tu, ru, nu, iu, au, su, ou, lu, cu, uu, du, hu, fu, pu, mu, gu, Di, Ja, bu, vu, wu, xu, yu, ku, Su, _u, Cu, W0;
class $h {
  constructor() {
    bt(this, F);
    bt(this, Sn);
    bt(this, y0);
    bt(this, _n, null);
    bt(this, ur, null);
    bt(this, Jn, null);
    bt(this, ni, null);
    Ee(this, Sn, localStorage.getItem("bc-mcp-url") ?? ""), Ee(this, y0, localStorage.getItem("bc-mcp-token") ?? "");
  }
  /**** setContext — called by DeckView after every render to keep state current ****/
  setContext(e) {
    var t, n;
    if (Ee(this, _n, e), e != null && z(this, F, Za)) {
      const i = ((t = e.getDeck().Cards[e.getCardIndex()]) == null ? void 0 : t.Name) ?? null;
      i !== z(this, ni) && (Ee(this, ni, i), (n = z(this, ur)) == null || n.send(JSON.stringify({ type: "notify", event: "card_changed", cardName: i })));
    }
  }
  /**** configure — applies new settings and reconnects (persistence handled by caller) ****/
  configure(e, t) {
    Ee(this, Sn, e), Ee(this, y0, t), this.disconnect(), e !== "" && this.connect();
  }
  /**** connect — opens the WebSocket connection if a URL is configured ****/
  connect() {
    z(this, Sn) !== "" && oe(this, F, Xa).call(this);
  }
  /**** disconnect — closes the connection and stops auto-reconnect ****/
  disconnect() {
    z(this, Jn) != null && (clearTimeout(z(this, Jn)), Ee(this, Jn, null)), z(this, ur) != null && (z(this, ur).onclose = null, z(this, ur).close(), Ee(this, ur, null));
  }
  /**** connectionStatus — returns a snapshot suitable for the status tool ****/
  get connectionStatus() {
    return { connected: z(this, F, Za), url: z(this, Sn) };
  }
}
Sn = new WeakMap(), y0 = new WeakMap(), _n = new WeakMap(), ur = new WeakMap(), Jn = new WeakMap(), ni = new WeakMap(), F = new WeakSet(), Za = function() {
  return z(this, ur) != null && z(this, ur).readyState === WebSocket.OPEN;
}, /**** #connect — internal: establishes the WebSocket and wires handlers ****/
Xa = function() {
  const e = new WebSocket(z(this, Sn));
  e.onopen = () => {
    var i, a, s;
    const t = (i = z(this, _n)) == null ? void 0 : i.getDeck(), n = ((a = z(this, _n)) == null ? void 0 : a.getCardIndex()) ?? 0;
    e.send(JSON.stringify({
      type: "hello",
      accessToken: z(this, y0),
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
      i = await oe(this, F, Zc).call(this, n.method, n.params ?? {});
    } catch (s) {
      a = s.message;
    }
    e.send(JSON.stringify({ id: n.id, result: i, error: a }));
  }, e.onclose = () => {
    Ee(this, ur, null), Ee(this, Jn, setTimeout(() => oe(this, F, Xa).call(this), 3e3));
  }, e.onerror = () => {
    e.close();
  }, Ee(this, ur, e);
}, tt = function() {
  if (z(this, _n) == null)
    throw new Error("no deck loaded");
  return z(this, _n);
}, Zc = async function(e, t) {
  switch (!0) {
    case e === "deck_get":
      return oe(this, F, Xc).call(this);
    case e === "deck_patch":
      return oe(this, F, Jc).call(this, t);
    case e === "deck_save":
      return oe(this, F, Yc).call(this);
    case e === "list_cards":
      return oe(this, F, Qc).call(this);
    case e === "list_widgets":
      return oe(this, F, eu).call(this, t);
    case e === "find":
      return oe(this, F, tu).call(this, t);
    case e === "card_get":
      return oe(this, F, ru).call(this, t);
    case e === "card_patch":
      return oe(this, F, nu).call(this, t);
    case e === "card_add":
      return oe(this, F, iu).call(this, t);
    case e === "card_delete":
      return oe(this, F, au).call(this, t);
    case e === "card_reorder":
      return oe(this, F, su).call(this, t);
    case e === "widget_get":
      return oe(this, F, ou).call(this, t);
    case e === "widget_patch":
      return oe(this, F, lu).call(this, t);
    case e === "widget_add":
      return oe(this, F, cu).call(this, t);
    case e === "widget_delete":
      return oe(this, F, uu).call(this, t);
    case e === "widget_transfer":
      return oe(this, F, du).call(this, t);
    case e === "widget_reorder":
      return oe(this, F, hu).call(this, t);
    case e === "widget_get_rect":
      return oe(this, F, fu).call(this, t);
    case e === "widget_set_rect":
      return oe(this, F, pu).call(this, t);
    case e === "script_get":
      return oe(this, F, mu).call(this, t);
    case e === "script_set":
      return oe(this, F, gu).call(this, t);
    case e === "extras_get":
      return oe(this, F, bu).call(this, t);
    case e === "extras_set":
      return oe(this, F, vu).call(this, t);
    case e === "extras_delete":
      return oe(this, F, wu).call(this, t);
    case e === "live_eval":
      return oe(this, F, xu).call(this, t);
    case e === "live_send":
      return oe(this, F, yu).call(this, t);
    case e === "live_navigate":
      return oe(this, F, ku).call(this, t);
    case e === "live_screenshot":
      return oe(this, F, Su).call(this);
    default:
      throw new Error(`unknown method: ${e}`);
  }
}, //--------------------------------------------------------------------------//
//                              deck handlers                                 //
//--------------------------------------------------------------------------//
Xc = function() {
  const e = z(this, F, tt).getDeck();
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
}, Jc = function(e) {
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
  return z(this, F, tt).mutateDeck((i) => {
    for (const a of n)
      a in t && (i[a] = t[a]);
  }), null;
}, Yc = async function() {
  return await z(this, F, tt).saveDeck(), null;
}, //--------------------------------------------------------------------------//
//                          navigation handlers                               //
//--------------------------------------------------------------------------//
Qc = function() {
  return z(this, F, tt).getDeck().Cards.map((e) => ({
    // position = array order
    id: e.Id,
    name: e.Name,
    widget_count: e.Widgets.length,
    has_script: e.Script.trim() !== ""
  }));
}, eu = function(e) {
  const t = z(this, F, tt).getDeck(), n = e.card_id, i = t.Cards.find((o) => o.Id === n);
  if (i == null)
    throw new Error(`card not found: ${n}`);
  const a = t.CardWidth ?? 600, s = t.CardHeight ?? 450;
  return i.Widgets.map((o) => {
    const l = pl(
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
}, tu = function(e) {
  const t = z(this, F, tt).getDeck(), n = e.query ?? {}, i = n.scope ?? "all", a = [], s = n.namePattern ? new RegExp(n.namePattern, "i") : null, o = n.scriptContains ? new RegExp(n.scriptContains, "i") : null, l = n.valueContains, d = n.widgetType, h = (m) => (!s || s.test(m.Name)) && (!o || o.test(m.Script)), f = (m) => {
    if (d && m.Type !== d)
      return !1;
    const v = m.Value ?? "";
    return (!s || s.test(m.Name)) && (!o || o.test(m.Script)) && (!l || v.includes(l));
  };
  if (i !== "widgets")
    for (const m of t.Cards)
      h(m) && a.push({
        target: m.Id,
        type: "card",
        name: m.Name,
        excerpt: m.Script.slice(0, 120)
      });
  if (i !== "cards") {
    for (const m of t.Cards)
      for (const v of m.Widgets)
        if (f(v)) {
          const y = v.Value ?? "";
          a.push({
            target: `${m.Id}/${v.Id}`,
            type: v.Type,
            name: v.Name,
            excerpt: y || v.Script.slice(0, 120)
          });
        }
  }
  return a;
}, //--------------------------------------------------------------------------//
//                              card handlers                                 //
//--------------------------------------------------------------------------//
ru = function(e) {
  const t = oe(this, F, _u).call(this, e.card_id);
  return {
    Name: t.Name,
    Color: t.Color ?? null,
    Alpha: t.Alpha ?? 1,
    dontSearch: t.dontSearch,
    Script: t.Script
  };
}, nu = function(e) {
  const t = e.card_id, n = e.props ?? {};
  return z(this, F, tt).mutateDeck((i) => {
    const a = i.Cards.find((s) => s.Id === t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    for (const s of ["Name", "Color", "Alpha", "dontSearch", "Script"])
      s in n && (a[s] = n[s]);
  }), null;
}, iu = function(e) {
  const t = e.props ?? {}, n = e.index;
  let i = "";
  return z(this, F, tt).mutateDeck((a) => {
    i = _h(a);
    const s = {
      Id: i,
      Name: t.Name ?? "New Card",
      Color: t.Color ?? null,
      Alpha: t.Alpha ?? 1,
      dontSearch: t.dontSearch ?? !1,
      Script: t.Script ?? "",
      Widgets: []
    };
    n == null ? a.Cards.push(s) : a.Cards.splice(n, 0, s);
  }), i;
}, au = function(e) {
  const t = e.card_id;
  return z(this, F, tt).mutateDeck((n) => {
    const i = n.Cards.findIndex((a) => a.Id === t);
    if (i < 0)
      throw new Error(`card not found: ${t}`);
    n.Cards.splice(i, 1);
  }), null;
}, su = function(e) {
  const t = e.card_id, n = e.new_index;
  return z(this, F, tt).mutateDeck((i) => {
    const a = i.Cards.findIndex((o) => o.Id === t);
    if (a < 0)
      throw new Error(`card not found: ${t}`);
    const [s] = i.Cards.splice(a, 1);
    i.Cards.splice(n, 0, s);
  }), null;
}, //--------------------------------------------------------------------------//
//                             widget handlers                                //
//--------------------------------------------------------------------------//
ou = function(e) {
  const { Widget: t } = oe(this, F, Cu).call(this, e.card_id, e.widget_id);
  return { ...t };
}, lu = function(e) {
  const t = e.props ?? {};
  return z(this, F, tt).mutateDeck((n) => {
    const { Widget: i } = oe(this, F, W0).call(this, n, e.card_id, e.widget_id);
    for (const [a, s] of Object.entries(t))
      a !== "Type" && (i[a] = s);
  }), null;
}, cu = function(e) {
  const t = e.card_id, n = e.type, i = e.props ?? {}, a = e.rect, s = e.index;
  let o = "";
  return z(this, F, tt).mutateDeck((l) => {
    const d = l.Cards.find(($) => $.Id === t);
    if (d == null)
      throw new Error(`card not found: ${t}`);
    o = Ch(l);
    const h = l.CardWidth ?? 600, f = l.CardHeight ?? 450, m = ["left-width", "top-height"], v = a ?? { x: h / 4, y: f / 4, width: h / 2, height: f / 2 }, y = ml(
      v.x,
      v.y,
      v.width,
      v.height,
      m,
      h,
      f
    ), I = {
      // appended last ⇒ on top of the stack
      ...Ah[n] ?? {},
      ...i,
      Id: o,
      Name: i.Name ?? `${n} ${d.Widgets.length + 1}`,
      Type: n,
      Anchors: m,
      Offsets: y,
      visible: i.visible ?? !0,
      Script: i.Script ?? ""
    };
    s == null ? d.Widgets.push(I) : d.Widgets.splice(Math.max(0, Math.min(d.Widgets.length, Math.round(s))), 0, I);
  }), o;
}, uu = function(e) {
  const t = e.card_id, n = e.widget_id;
  return z(this, F, tt).mutateDeck((i) => {
    const a = i.Cards.find((o) => o.Id === t);
    if (a == null)
      throw new Error(`card not found: ${t}`);
    const s = a.Widgets.findIndex((o) => o.Id === n);
    if (s < 0)
      throw new Error(`widget not found: ${n}`);
    a.Widgets.splice(s, 1);
  }), null;
}, du = function(e) {
  return z(this, F, tt).mutateDeck((t) => {
    const n = t.Cards.find((o) => o.Id === e.src_card_id), i = t.Cards.find((o) => o.Id === e.dst_card_id);
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
}, hu = function(e) {
  const t = e.card_id, n = e.widget_id, i = e.new_index;
  return z(this, F, tt).mutateDeck((a) => {
    const s = a.Cards.find((h) => h.Id === t);
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
fu = function(e) {
  const t = z(this, F, tt).getDeck(), { Widget: n } = oe(this, F, W0).call(this, t, e.card_id, e.widget_id);
  return { ...pl(
    n.Anchors,
    n.Offsets,
    t.CardWidth ?? 600,
    t.CardHeight ?? 450
  ), anchors: n.Anchors };
}, pu = function(e) {
  const t = e.rect, n = e.anchors ?? ["left-width", "top-height"];
  return z(this, F, tt).mutateDeck((i) => {
    const { Widget: a } = oe(this, F, W0).call(this, i, e.card_id, e.widget_id), s = i.CardWidth ?? 600, o = i.CardHeight ?? 450;
    a.Anchors = n, a.Offsets = ml(t.x, t.y, t.width, t.height, n, s, o);
  }), null;
}, //--------------------------------------------------------------------------//
//                            scripting handlers                              //
//--------------------------------------------------------------------------//
mu = function(e) {
  const t = ka(e.target, z(this, F, tt).getDeck());
  if (t == null)
    throw new Error(`target not found: ${e.target}`);
  return t === "deck" ? z(this, F, tt).getDeck().Script : "Widget" in t ? t.Widget.Script : t.Card.Script;
}, gu = function(e) {
  const t = e.target, n = e.script;
  return z(this, F, tt).mutateDeck((i) => {
    const a = ka(t, i);
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
Di = function(e, t) {
  const n = ka(e, t);
  if (n == null)
    throw new Error(`target not found: ${e}`);
  return n === "deck" ? t : "Widget" in n ? n.Widget : n.Card;
}, Ja = function(e) {
  return e === "deck" ? yh : e.includes("/") ? Sh : kh;
}, bu = function(e) {
  const t = e.target, n = oe(this, F, Di).call(this, t, z(this, F, tt).getDeck()), i = oe(this, F, Ja).call(this, t), a = {};
  for (const [s, o] of Object.entries(n))
    i.has(s) || (a[s] = o);
  return a;
}, vu = function(e) {
  const t = e.target, n = e.key;
  if (oe(this, F, Ja).call(this, t).has(n))
    throw new Error(`"${n}" is a reserved schema key`);
  return z(this, F, tt).mutateDeck((i) => {
    oe(this, F, Di).call(this, t, i)[n] = e.value;
  }), null;
}, wu = function(e) {
  const t = e.target, n = e.key;
  return z(this, F, tt).mutateDeck((i) => {
    delete oe(this, F, Di).call(this, t, i)[n];
  }), null;
}, xu = async function(e) {
  return z(this, F, tt).evalInContext(e.expression);
}, yu = async function(e) {
  const t = e.target, n = e.message, i = e.args ?? [], a = i.length > 0 ? ", " + i.map((s) => JSON.stringify(s)).join(", ") : "";
  return z(this, F, tt).evalInContext(
    `Widget(${JSON.stringify(t)})?.triggered(${JSON.stringify(n)}${a})`
  );
}, ku = async function(e) {
  return z(this, F, tt).navigate(e.card), null;
}, Su = async function() {
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
_u = function(e) {
  const t = z(this, F, tt).getDeck().Cards.find((n) => n.Id === e);
  if (t == null)
    throw new Error(`card not found: ${e}`);
  return t;
}, Cu = function(e, t) {
  return oe(this, F, W0).call(this, z(this, F, tt).getDeck(), e, t);
}, W0 = function(e, t, n) {
  const i = e.Cards.find((s) => s.Id === t);
  if (i == null)
    throw new Error(`card not found: ${t}`);
  const a = i.Widgets.find((s) => s.Id === n);
  if (a == null)
    throw new Error(`widget not found: ${n}`);
  return { Card: i, Widget: a };
};
function Bs() {
  return { async: !1, breaks: !1, extensions: null, gfm: !0, hooks: null, pedantic: !1, renderer: null, silent: !1, tokenizer: null, walkTokens: null };
}
var r0 = Bs();
function Au(r) {
  r0 = r;
}
var Zn = { exec: () => null };
function m0(r) {
  let e = [];
  return (t) => {
    let n = Math.max(0, Math.min(3, t - 1)), i = e[n];
    return i || (i = r(n), e[n] = i), i;
  };
}
function qe(r, e = "") {
  let t = typeof r == "string" ? r : r.source, n = { replace: (i, a) => {
    let s = typeof a == "string" ? a : a.source;
    return s = s.replace(Rt.caret, "$1"), t = t.replace(i, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var Th = ((r = "") => {
  try {
    return !!new RegExp("(?<=1)(?<!1)" + r);
  } catch {
    return !1;
  }
})(), Rt = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] +\S/, listReplaceTask: /^\[[ xX]\] +/, listTaskCheckbox: /\[[ xX]\]/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (r) => new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: m0((r) => new RegExp(`^ {0,${r}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)), hrRegex: m0((r) => new RegExp(`^ {0,${r}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)), fencesBeginRegex: m0((r) => new RegExp(`^ {0,${r}}(?:\`\`\`|~~~)`)), headingBeginRegex: m0((r) => new RegExp(`^ {0,${r}}#`)), htmlBeginRegex: m0((r) => new RegExp(`^ {0,${r}}<(?:[a-z].*>|!--)`, "i")), blockquoteBeginRegex: m0((r) => new RegExp(`^ {0,${r}}>`)) }, Ih = /^(?:[ \t]*(?:\n|$))+/, Nh = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/, Mh = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, ci = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, Eh = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, Ds = / {0,3}(?:[*+-]|\d{1,9}[.)])/, $u = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, Tu = qe($u).replace(/bull/g, Ds).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex(), zh = qe($u).replace(/bull/g, Ds).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(), Ls = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, Rh = /^[^\n]+/, Fs = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/, Oh = qe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Fs).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(), Bh = qe(/^(bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, Ds).getRegex(), na = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ps = /<!--(?:-?>|[\s\S]*?(?:-->|$))/, Dh = qe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", Ps).replace("tag", na).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Iu = qe(Ls).replace("hr", ci).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", na).getRegex(), Lh = qe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", Iu).getRegex(), Vs = { blockquote: Lh, code: Nh, def: Oh, fences: Mh, heading: Eh, hr: ci, html: Dh, lheading: Tu, list: Bh, newline: Ih, paragraph: Iu, table: Zn, text: Rh }, gl = qe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", ci).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", na).getRegex(), Fh = { ...Vs, lheading: zh, table: gl, paragraph: qe(Ls).replace("hr", ci).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", gl).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", na).getRegex() }, Ph = { ...Vs, html: qe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", Ps).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Zn, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: qe(Ls).replace("hr", ci).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", Tu).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() }, Vh = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, Hh = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, Nu = /^( {2,}|\\)\n(?!\s*$)/, qh = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, E0 = /[\p{P}\p{S}]/u, ia = /[\s\p{P}\p{S}]/u, Hs = /[^\s\p{P}\p{S}]/u, Wh = qe(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, ia).getRegex(), Mu = /(?!~)[\p{P}\p{S}]/u, Uh = /(?!~)[\s\p{P}\p{S}]/u, Gh = /(?:[^\s\p{P}\p{S}]|~)/u, jh = qe(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", Th ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex(), Eu = /^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/, Kh = qe(Eu, "u").replace(/punct/g, E0).getRegex(), Zh = qe(Eu, "u").replace(/punct/g, Mu).getRegex(), zu = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)", Xh = qe(zu, "gu").replace(/notPunctSpace/g, Hs).replace(/punctSpace/g, ia).replace(/punct/g, E0).getRegex(), Jh = qe(zu, "gu").replace(/notPunctSpace/g, Gh).replace(/punctSpace/g, Uh).replace(/punct/g, Mu).getRegex(), Yh = qe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, Hs).replace(/punctSpace/g, ia).replace(/punct/g, E0).getRegex(), Qh = qe(/^~~?(?:((?!~)punct)|[^\s~])/, "u").replace(/punct/g, E0).getRegex(), ef = "^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)", tf = qe(ef, "gu").replace(/notPunctSpace/g, Hs).replace(/punctSpace/g, ia).replace(/punct/g, E0).getRegex(), rf = qe(/\\(punct)/, "gu").replace(/punct/g, E0).getRegex(), nf = qe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(), af = qe(Ps).replace("(?:-->|$)", "-->").getRegex(), sf = qe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", af).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(), Wi = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/, of = qe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label", Wi).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(), Ru = qe(/^!?\[(label)\]\[(ref)\]/).replace("label", Wi).replace("ref", Fs).getRegex(), Ou = qe(/^!?\[(ref)\](?:\[\])?/).replace("ref", Fs).getRegex(), lf = qe("reflink|nolink(?!\\()", "g").replace("reflink", Ru).replace("nolink", Ou).getRegex(), bl = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/, qs = { _backpedal: Zn, anyPunctuation: rf, autolink: nf, blockSkip: jh, br: Nu, code: Hh, del: Zn, delLDelim: Zn, delRDelim: Zn, emStrongLDelim: Kh, emStrongRDelimAst: Xh, emStrongRDelimUnd: Yh, escape: Vh, link: of, nolink: Ou, punctuation: Wh, reflink: Ru, reflinkSearch: lf, tag: sf, text: qh, url: Zn }, cf = { ...qs, link: qe(/^!?\[(label)\]\((.*?)\)/).replace("label", Wi).getRegex(), reflink: qe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", Wi).getRegex() }, Ya = { ...qs, emStrongRDelimAst: Jh, emStrongLDelim: Zh, delLDelim: Qh, delRDelim: tf, url: qe(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", bl).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: qe(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", bl).getRegex() }, uf = { ...Ya, br: qe(Nu).replace("{2,}", "*").getRegex(), text: qe(Ya.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() }, wi = { normal: Vs, gfm: Fh, pedantic: Ph }, V0 = { normal: qs, gfm: Ya, breaks: uf, pedantic: cf }, df = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, vl = (r) => df[r];
function Or(r, e) {
  if (e) {
    if (Rt.escapeTest.test(r)) return r.replace(Rt.escapeReplace, vl);
  } else if (Rt.escapeTestNoEncode.test(r)) return r.replace(Rt.escapeReplaceNoEncode, vl);
  return r;
}
function wl(r) {
  try {
    r = encodeURI(r).replace(Rt.percentDecode, "%");
  } catch {
    return null;
  }
  return r;
}
function xl(r, e) {
  var a;
  let t = r.replace(Rt.findPipe, (s, o, l) => {
    let d = !1, h = o;
    for (; --h >= 0 && l[h] === "\\"; ) d = !d;
    return d ? "|" : " |";
  }), n = t.split(Rt.splitPipe), i = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !((a = n.at(-1)) != null && a.trim()) && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; i < n.length; i++) n[i] = n[i].trim().replace(Rt.slashPipe, "|");
  return n;
}
function vn(r, e, t) {
  let n = r.length;
  if (n === 0) return "";
  let i = 0;
  for (; i < n && r.charAt(n - i - 1) === e; )
    i++;
  return r.slice(0, n - i);
}
function yl(r) {
  let e = r.split(`
`), t = e.length - 1;
  for (; t >= 0 && Rt.blankLine.test(e[t]); ) t--;
  return e.length - t <= 2 ? r : e.slice(0, t + 1).join(`
`);
}
function hf(r, e) {
  if (r.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < r.length; n++) if (r[n] === "\\") n++;
  else if (r[n] === e[0]) t++;
  else if (r[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function ff(r, e = 0) {
  let t = e, n = "";
  for (let i of r) if (i === "	") {
    let a = 4 - t % 4;
    n += " ".repeat(a), t += a;
  } else n += i, t++;
  return n;
}
function kl(r, e, t, n, i) {
  let a = e.href, s = e.title || null, o = r[1].replace(i.other.outputLinkReplace, "$1");
  n.state.inLink = !0;
  let l = { type: r[0].charAt(0) === "!" ? "image" : "link", raw: t, href: a, title: s, text: o, tokens: n.inlineTokens(o) };
  return n.state.inLink = !1, l;
}
function pf(r, e, t) {
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
var Ui = class {
  constructor(r) {
    rt(this, "options");
    rt(this, "rules");
    rt(this, "lexer");
    this.options = r || r0;
  }
  space(r) {
    let e = this.rules.block.newline.exec(r);
    if (e && e[0].length > 0) return { type: "space", raw: e[0] };
  }
  code(r) {
    let e = this.rules.block.code.exec(r);
    if (e) {
      let t = this.options.pedantic ? e[0] : yl(e[0]), n = t.replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t, codeBlockStyle: "indented", text: n };
    }
  }
  fences(r) {
    let e = this.rules.block.fences.exec(r);
    if (e) {
      let t = e[0], n = pf(t, e[3] || "", this.rules);
      return { type: "code", raw: t, lang: e[2] ? e[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : e[2], text: n };
    }
  }
  heading(r) {
    let e = this.rules.block.heading.exec(r);
    if (e) {
      let t = e[2].trim();
      if (this.rules.other.endingHash.test(t)) {
        let n = vn(t, "#");
        (this.options.pedantic || !n || this.rules.other.endingSpaceChar.test(n)) && (t = n.trim());
      }
      return { type: "heading", raw: vn(e[0], `
`), depth: e[1].length, text: t, tokens: this.lexer.inline(t) };
    }
  }
  hr(r) {
    let e = this.rules.block.hr.exec(r);
    if (e) return { type: "hr", raw: vn(e[0], `
`) };
  }
  blockquote(r) {
    let e = this.rules.block.blockquote.exec(r);
    if (e) {
      let t = vn(e[0], `
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
          let v = m, y = v.raw + `
` + t.join(`
`), I = this.blockquote(y);
          a[a.length - 1] = I, n = n.substring(0, n.length - v.raw.length) + I.raw, i = i.substring(0, i.length - v.text.length) + I.text;
          break;
        } else if ((m == null ? void 0 : m.type) === "list") {
          let v = m, y = v.raw + `
` + t.join(`
`), I = this.list(y);
          a[a.length - 1] = I, n = n.substring(0, n.length - m.raw.length) + I.raw, i = i.substring(0, i.length - v.raw.length) + I.raw, t = y.substring(a.at(-1).raw.length).split(`
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
        let f = ff(e[2].split(`
`, 1)[0], e[1].length), m = r.split(`
`, 1)[0], v = !f.trim(), y = 0;
        if (this.options.pedantic ? (y = 2, h = f.trimStart()) : v ? y = e[1].length + 1 : (y = f.search(this.rules.other.nonSpaceChar), y = y > 4 ? 1 : y, h = f.slice(y), y += e[1].length), v && this.rules.other.blankLine.test(m) && (d += m + `
`, r = r.substring(m.length + 1), l = !0), !l) {
          let I = this.rules.other.nextBulletRegex(y), $ = this.rules.other.hrRegex(y), E = this.rules.other.fencesBeginRegex(y), R = this.rules.other.headingBeginRegex(y), W = this.rules.other.htmlBeginRegex(y), Z = this.rules.other.blockquoteBeginRegex(y);
          for (; r; ) {
            let Y = r.split(`
`, 1)[0], N;
            if (m = Y, this.options.pedantic ? (m = m.replace(this.rules.other.listReplaceNesting, "  "), N = m) : N = m.replace(this.rules.other.tabCharGlobal, "    "), E.test(m) || R.test(m) || W.test(m) || Z.test(m) || I.test(m) || $.test(m)) break;
            if (N.search(this.rules.other.nonSpaceChar) >= y || !m.trim()) h += `
` + N.slice(y);
            else {
              if (v || f.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || E.test(f) || R.test(f) || $.test(f)) break;
              h += `
` + m;
            }
            v = !m.trim(), d += Y + `
`, r = r.substring(Y.length + 1), f = N.slice(y);
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
      let t = yl(e[0]);
      return { type: "html", block: !0, raw: t, pre: e[1] === "pre" || e[1] === "script" || e[1] === "style", text: t };
    }
  }
  def(r) {
    let e = this.rules.block.def.exec(r);
    if (e) {
      let t = e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), n = e[2] ? e[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : e[3];
      return { type: "def", tag: t, raw: vn(e[0], `
`), href: n, title: i };
    }
  }
  table(r) {
    var s;
    let e = this.rules.block.table.exec(r);
    if (!e || !this.rules.other.tableDelimiter.test(e[2])) return;
    let t = xl(e[1]), n = e[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = (s = e[3]) != null && s.trim() ? e[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], a = { type: "table", raw: vn(e[0], `
`), header: [], align: [], rows: [] };
    if (t.length === n.length) {
      for (let o of n) this.rules.other.tableAlignRight.test(o) ? a.align.push("right") : this.rules.other.tableAlignCenter.test(o) ? a.align.push("center") : this.rules.other.tableAlignLeft.test(o) ? a.align.push("left") : a.align.push(null);
      for (let o = 0; o < t.length; o++) a.header.push({ text: t[o], tokens: this.lexer.inline(t[o]), header: !0, align: a.align[o] });
      for (let o of i) a.rows.push(xl(o, a.header.length).map((l, d) => ({ text: l, tokens: this.lexer.inline(l), header: !1, align: a.align[d] })));
      return a;
    }
  }
  lheading(r) {
    let e = this.rules.block.lheading.exec(r);
    if (e) {
      let t = e[1].trim();
      return { type: "heading", raw: vn(e[0], `
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
        let a = vn(t.slice(0, -1), "\\");
        if ((t.length - a.length) % 2 === 0) return;
      } else {
        let a = hf(e[2], "()");
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
      return n = n.trim(), this.rules.other.startAngleBracket.test(n) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(t) ? n = n.slice(1) : n = n.slice(1, -1)), kl(e, { href: n && n.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, e[0], this.lexer, this.rules);
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
      return kl(t, i, t[0], this.lexer, this.rules);
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
}, Sr = class Qa {
  constructor(e) {
    rt(this, "tokens");
    rt(this, "options");
    rt(this, "state");
    rt(this, "inlineQueue");
    rt(this, "tokenizer");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || r0, this.options.tokenizer = this.options.tokenizer || new Ui(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: !1, inRawBlock: !1, top: !0 };
    let t = { other: Rt, block: wi.normal, inline: V0.normal };
    this.options.pedantic ? (t.block = wi.pedantic, t.inline = V0.pedantic) : this.options.gfm && (t.block = wi.gfm, this.options.breaks ? t.inline = V0.breaks : t.inline = V0.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: wi, inline: V0 };
  }
  static lex(e, t) {
    return new Qa(t).lex(e);
  }
  static lexInline(e, t) {
    return new Qa(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(Rt.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = !1) {
    var a, s, o;
    this.tokenizer.lexer = this, this.options.pedantic && (e = e.replace(Rt.tabCharGlobal, "    ").replace(Rt.spaceLine, ""));
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
      let y = Object.keys(this.tokens.links);
      if (y.length > 0) for (; (i = this.tokenizer.rules.inline.reflinkSearch.exec(n)) !== null; ) y.includes(i[0].slice(i[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, i.index) + "[" + "a".repeat(i[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
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
      let y;
      if ((m = (f = this.options.extensions) == null ? void 0 : f.inline) != null && m.some(($) => (y = $.call({ lexer: this }, e, t)) ? (e = e.substring(y.raw.length), t.push(y), !0) : !1)) continue;
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
      let I = e;
      if ((v = this.options.extensions) != null && v.startInline) {
        let $ = 1 / 0, E = e.slice(1), R;
        this.options.extensions.startInline.forEach((W) => {
          R = W.call({ lexer: this }, E), typeof R == "number" && R >= 0 && ($ = Math.min($, R));
        }), $ < 1 / 0 && $ >= 0 && (I = e.substring(0, $ + 1));
      }
      if (y = this.tokenizer.inlineText(I)) {
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
}, Gi = class {
  constructor(r) {
    rt(this, "options");
    rt(this, "parser");
    this.options = r || r0;
  }
  space(r) {
    return "";
  }
  code({ text: r, lang: e, escaped: t }) {
    var a;
    let n = (a = (e || "").match(Rt.notSpaceStart)) == null ? void 0 : a[0], i = r.replace(Rt.endingNewline, "") + `
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
    let n = this.parser.parseInline(t), i = wl(r);
    if (i === null) return n;
    r = i;
    let a = '<a href="' + r + '"';
    return e && (a += ' title="' + Or(e) + '"'), a += ">" + n + "</a>", a;
  }
  image({ href: r, title: e, text: t, tokens: n }) {
    n && (t = this.parser.parseInline(n, this.parser.textRenderer));
    let i = wl(r);
    if (i === null) return Or(t);
    r = i;
    let a = `<img src="${r}" alt="${Or(t)}"`;
    return e && (a += ` title="${Or(e)}"`), a += ">", a;
  }
  text(r) {
    return "tokens" in r && r.tokens ? this.parser.parseInline(r.tokens) : "escaped" in r && r.escaped ? r.text : Or(r.text);
  }
}, Ws = class {
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
}, _r = class es {
  constructor(e) {
    rt(this, "options");
    rt(this, "renderer");
    rt(this, "textRenderer");
    this.options = e || r0, this.options.renderer = this.options.renderer || new Gi(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new Ws();
  }
  static parse(e, t) {
    return new es(t).parse(e);
  }
  static parseInline(e, t) {
    return new es(t).parseInline(e);
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
}, zi, U0 = (zi = class {
  constructor(r) {
    rt(this, "options");
    rt(this, "block");
    this.options = r || r0;
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
    return r ? Sr.lex : Sr.lexInline;
  }
  provideParser(r = this.block) {
    return r ? _r.parse : _r.parseInline;
  }
}, rt(zi, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"])), rt(zi, "passThroughHooksRespectAsync", /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"])), zi), Bu = class {
  constructor(...r) {
    rt(this, "defaults", Bs());
    rt(this, "options", this.setOptions);
    rt(this, "parse", this.parseMarkdown(!0));
    rt(this, "parseInline", this.parseMarkdown(!1));
    rt(this, "Parser", _r);
    rt(this, "Renderer", Gi);
    rt(this, "TextRenderer", Ws);
    rt(this, "Lexer", Sr);
    rt(this, "Tokenizer", Ui);
    rt(this, "Hooks", U0);
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
        let i = this.defaults.renderer || new Gi(this.defaults);
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
        let i = this.defaults.tokenizer || new Ui(this.defaults);
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
        let i = this.defaults.hooks || new U0();
        for (let a in t.hooks) {
          if (!(a in i)) throw new Error(`hook '${a}' does not exist`);
          if (["options", "block"].includes(a)) continue;
          let s = a, o = t.hooks[s], l = i[s];
          U0.passThroughHooks.has(a) ? i[s] = (d) => {
            if (this.defaults.async && U0.passThroughHooksRespectAsync.has(a)) return (async () => {
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
    return Sr.lex(r, e ?? this.defaults);
  }
  parser(r, e) {
    return _r.parse(r, e ?? this.defaults);
  }
  parseMarkdown(r) {
    return (e, t) => {
      let n = { ...t }, i = { ...this.defaults, ...n }, a = this.onError(!!i.silent, !!i.async);
      if (this.defaults.async === !0 && n.async === !1) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof e > "u" || e === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof e != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(e) + ", string expected"));
      if (i.hooks && (i.hooks.options = i, i.hooks.block = r), i.async) return (async () => {
        let s = i.hooks ? await i.hooks.preprocess(e) : e, o = await (i.hooks ? await i.hooks.provideLexer(r) : r ? Sr.lex : Sr.lexInline)(s, i), l = i.hooks ? await i.hooks.processAllTokens(o) : o;
        i.walkTokens && await Promise.all(this.walkTokens(l, i.walkTokens));
        let d = await (i.hooks ? await i.hooks.provideParser(r) : r ? _r.parse : _r.parseInline)(l, i);
        return i.hooks ? await i.hooks.postprocess(d) : d;
      })().catch(a);
      try {
        i.hooks && (e = i.hooks.preprocess(e));
        let s = (i.hooks ? i.hooks.provideLexer(r) : r ? Sr.lex : Sr.lexInline)(e, i);
        i.hooks && (s = i.hooks.processAllTokens(s)), i.walkTokens && this.walkTokens(s, i.walkTokens);
        let o = (i.hooks ? i.hooks.provideParser(r) : r ? _r.parse : _r.parseInline)(s, i);
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
}, Qn = new Bu();
function nt(r, e) {
  return Qn.parse(r, e);
}
nt.options = nt.setOptions = function(r) {
  return Qn.setOptions(r), nt.defaults = Qn.defaults, Au(nt.defaults), nt;
};
nt.getDefaults = Bs;
nt.defaults = r0;
nt.use = function(...r) {
  return Qn.use(...r), nt.defaults = Qn.defaults, Au(nt.defaults), nt;
};
nt.walkTokens = function(r, e) {
  return Qn.walkTokens(r, e);
};
nt.parseInline = Qn.parseInline;
nt.Parser = _r;
nt.parser = _r.parse;
nt.Renderer = Gi;
nt.TextRenderer = Ws;
nt.Lexer = Sr;
nt.lexer = Sr.lex;
nt.Tokenizer = Ui;
nt.Hooks = U0;
nt.parse = nt;
nt.options;
nt.setOptions;
nt.use;
nt.walkTokens;
nt.parseInline;
_r.parse;
Sr.lex;
class X extends Error {
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
    super(n), this.name = "ParseError", this.position = void 0, this.length = void 0, this.rawMessage = void 0, Object.setPrototypeOf(this, X.prototype), this.position = i, i != null && a != null && (this.length = a - i), this.rawMessage = e;
  }
}
var mf = /([A-Z])/g, gf = (r) => r.replace(mf, "-$1").toLowerCase(), bf = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  '"': "&quot;",
  "'": "&#x27;"
}, vf = /[&><"']/g, Ot = (r) => String(r).replace(vf, (e) => bf[e]), Li = (r) => r.type === "ordgroup" || r.type === "color" ? r.body.length === 1 ? Li(r.body[0]) : r : r.type === "font" ? Li(r.body) : r, wf = /* @__PURE__ */ new Set(["mathord", "textord", "atom"]), on = (r) => wf.has(Li(r).type), xf = (r) => {
  var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(r);
  return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
}, ts = {
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
function yf(r) {
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
function kf(r) {
  if (r.default !== void 0)
    return r.default;
  var e = Array.isArray(r.type) ? r.type[0] : r.type;
  return yf(e);
}
function Sf(r, e, t, n) {
  var i = t[e];
  r[e] = i !== void 0 ? n.processor ? n.processor(i) : i : kf(n);
}
class Us {
  constructor(e) {
    e === void 0 && (e = {}), this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {};
    for (var t of Object.keys(ts)) {
      var n = ts[t];
      n && Sf(this, t, e, n);
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
        throw new X("LaTeX-incompatible input and strict mode is set to 'error': " + (t + " [" + e + "]"), n);
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
      var t = xf(e.url);
      if (t == null)
        return !1;
      e.protocol = t;
    }
    var n = typeof this.trust == "function" ? this.trust(e) : this.trust;
    return !!n;
  }
}
class wn {
  constructor(e, t, n) {
    this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = n;
  }
  /**
   * Get the style of a superscript given a base in the current style.
   */
  sup() {
    return Lr[_f[this.id]];
  }
  /**
   * Get the style of a subscript given a base in the current style.
   */
  sub() {
    return Lr[Cf[this.id]];
  }
  /**
   * Get the style of a fraction numerator given the fraction in the current
   * style.
   */
  fracNum() {
    return Lr[Af[this.id]];
  }
  /**
   * Get the style of a fraction denominator given the fraction in the current
   * style.
   */
  fracDen() {
    return Lr[$f[this.id]];
  }
  /**
   * Get the cramped version of a style (in particular, cramping a cramped style
   * doesn't change the style).
   */
  cramp() {
    return Lr[Tf[this.id]];
  }
  /**
   * Get a text or display version of this style.
   */
  text() {
    return Lr[If[this.id]];
  }
  /**
   * Return true if this style is tightly spaced (scriptstyle/scriptscriptstyle)
   */
  isTight() {
    return this.size >= 2;
  }
}
var Gs = 0, ji = 1, x0 = 2, tn = 3, J0 = 4, hr = 5, $0 = 6, Wt = 7, Lr = [new wn(Gs, 0, !1), new wn(ji, 0, !0), new wn(x0, 1, !1), new wn(tn, 1, !0), new wn(J0, 2, !1), new wn(hr, 2, !0), new wn($0, 3, !1), new wn(Wt, 3, !0)], _f = [J0, hr, J0, hr, $0, Wt, $0, Wt], Cf = [hr, hr, hr, hr, Wt, Wt, Wt, Wt], Af = [x0, tn, J0, hr, $0, Wt, $0, Wt], $f = [tn, tn, hr, hr, Wt, Wt, Wt, Wt], Tf = [ji, ji, tn, tn, hr, hr, Wt, Wt], If = [Gs, ji, x0, tn, x0, tn, x0, tn], Ie = {
  DISPLAY: Lr[Gs],
  TEXT: Lr[x0],
  SCRIPT: Lr[J0],
  SCRIPTSCRIPT: Lr[$0]
}, rs = [{
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
function Nf(r) {
  for (var e = 0; e < rs.length; e++)
    for (var t = rs[e], n = 0; n < t.blocks.length; n++) {
      var i = t.blocks[n];
      if (r >= i[0] && r <= i[1])
        return t.name;
    }
  return null;
}
var Fi = [];
rs.forEach((r) => r.blocks.forEach((e) => Fi.push(...e)));
function Du(r) {
  for (var e = 0; e < Fi.length; e += 2)
    if (r >= Fi[e] && r <= Fi[e + 1])
      return !0;
  return !1;
}
var Tt = (r) => r + " " + r, g0 = 80, Mf = function(e, t) {
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
}, Ef = function(e, t) {
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
}, zf = function(e, t) {
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
}, Rf = function(e, t) {
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
}, Of = function(e, t) {
  return "M473," + (2713 + e + t) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z";
}, Bf = function(e) {
  var t = e / 2;
  return "M400000 " + e + " H0 L" + t + " 0 l65 45 L145 " + (e - 80) + " H400000z";
}, Df = function(e, t, n) {
  var i = n - 54 - t - e;
  return "M702 " + (e + t) + "H400000" + (40 + e) + `
H742v` + i + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + t + "H400000v" + (40 + e) + "H742z";
}, Lf = function(e, t, n) {
  t = 1e3 * t;
  var i = "";
  switch (e) {
    case "sqrtMain":
      i = Mf(t, g0);
      break;
    case "sqrtSize1":
      i = Ef(t, g0);
      break;
    case "sqrtSize2":
      i = zf(t, g0);
      break;
    case "sqrtSize3":
      i = Rf(t, g0);
      break;
    case "sqrtSize4":
      i = Of(t, g0);
      break;
    case "sqrtTall":
      i = Df(t, g0, n);
  }
  return i;
}, Ff = function(e, t) {
  switch (e) {
    case "⎜":
      return Tt("M291 0 H417 V" + t + " H291z");
    case "∣":
      return Tt("M145 0 H188 V" + t + " H145z");
    case "∥":
      return Tt("M145 0 H188 V" + t + " H145z") + Tt("M367 0 H410 V" + t + " H367z");
    case "⎟":
      return Tt("M457 0 H583 V" + t + " H457z");
    case "⎢":
      return Tt("M319 0 H403 V" + t + " H319z");
    case "⎥":
      return Tt("M263 0 H347 V" + t + " H263z");
    case "⎪":
      return Tt("M384 0 H504 V" + t + " H384z");
    case "⏐":
      return Tt("M312 0 H355 V" + t + " H312z");
    case "‖":
      return Tt("M257 0 H300 V" + t + " H257z") + Tt("M478 0 H521 V" + t + " H478z");
    default:
      return "";
  }
}, Sl = {
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
  leftlinesegment: Tt("M40 281 V428 H0 V94 H40 V241 H400000 v40z"),
  leftbracketunder: Tt("M0 0 h120 V290 H399995 v120 H0z"),
  leftbracketover: Tt("M0 440 h120 V150 H399995 v-120 H0z"),
  leftmapsto: Tt("M40 281 V448H0V74H40V241H400000v40z"),
  // tofrom is from glyph U+21C4 in font KaTeX AMS Regular
  leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
  longequal: Tt("M0 50 h400000 v40H0z m0 194h40000v40H0z"),
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
  rightlinesegment: Tt("M399960 241 V94 h40 V428 h-40 V281 H0 v-40z"),
  rightbracketunder: Tt("M399995 0 h-120 V290 H0 v120 H400000z"),
  rightbracketover: Tt("M399995 440 h-120 V150 H0 v-120 H399995z"),
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
}, Pf = function(e, t) {
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
function Vf(r) {
  return "toText" in r;
}
class z0 {
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
      if (Vf(e))
        return e.toText();
      throw new Error("Expected MathDomNode with toText, got " + e.constructor.name);
    }).join("");
  }
}
var ns = {
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
}, Hf = {
  ex: !0,
  em: !0,
  mu: !0
}, Lu = function(e) {
  return typeof e != "string" && (e = e.unit), e in ns || e in Hf || e === "ex";
}, wt = function(e, t) {
  var n;
  if (e.unit in ns)
    n = ns[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
  else if (e.unit === "mu")
    n = t.fontMetrics().cssEmPerMu;
  else {
    var i;
    if (t.style.isTight() ? i = t.havingStyle(t.style.text()) : i = t, e.unit === "ex")
      n = i.fontMetrics().xHeight;
    else if (e.unit === "em")
      n = i.fontMetrics().quad;
    else
      throw new X("Invalid unit: '" + e.unit + "'");
    i !== t && (n *= i.sizeMultiplier / t.sizeMultiplier);
  }
  return Math.min(e.number * n, t.maxSize);
}, Q = function(e) {
  return +e.toFixed(4) + "em";
}, $n = function(e) {
  return e.filter((t) => t).join(" ");
}, js = function(e) {
  var t = "";
  for (var n of Object.keys(e)) {
    var i = e[n];
    i !== void 0 && (t += gf(n) + ":" + i + ";");
  }
  return t;
}, Fu = function(e, t, n) {
  if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = n || {}, t) {
    t.style.isTight() && this.classes.push("mtight");
    var i = t.getColor();
    i && (this.style.color = i);
  }
}, Pu = function(e) {
  var t = document.createElement(e);
  t.className = $n(this.classes), Object.assign(t.style, this.style);
  for (var n of Object.keys(this.attributes))
    t.setAttribute(n, this.attributes[n]);
  for (var i = 0; i < this.children.length; i++)
    t.appendChild(this.children[i].toNode());
  return t;
}, qf = /[\s"'>/=\x00-\x1f]/, Vu = function(e) {
  var t = "<" + e;
  this.classes.length && (t += ' class="' + Ot($n(this.classes)) + '"');
  var n = js(this.style);
  n && (t += ' style="' + Ot(n) + '"');
  for (var i of Object.keys(this.attributes)) {
    if (qf.test(i))
      throw new X("Invalid attribute name '" + i + "'");
    t += " " + i + '="' + Ot(this.attributes[i]) + '"';
  }
  t += ">";
  for (var a = 0; a < this.children.length; a++)
    t += this.children[a].toMarkup();
  return t += "</" + e + ">", t;
};
class R0 {
  constructor(e, t, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, this.italic = void 0, Fu.call(this, e, n, i), this.children = t || [];
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
    return Pu.call(this, "span");
  }
  toMarkup() {
    return Vu.call(this, "span");
  }
}
class aa {
  constructor(e, t, n, i) {
    this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, Fu.call(this, t, i), this.children = n || [], this.setAttribute("href", e);
  }
  setAttribute(e, t) {
    this.attributes[e] = t;
  }
  hasClass(e) {
    return this.classes.includes(e);
  }
  toNode() {
    return Pu.call(this, "a");
  }
  toMarkup() {
    return Vu.call(this, "a");
  }
}
class Wf {
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
    var e = '<img src="' + Ot(this.src) + '"' + (' alt="' + Ot(this.alt) + '"'), t = js(this.style);
    return t && (e += ' style="' + Ot(t) + '"'), e += "'/>", e;
  }
}
var Uf = {
  î: "ı̂",
  ï: "ı̈",
  í: "ı́",
  // 'ī': '\u0131\u0304', // enable when we add Extended Latin
  ì: "ı̀"
};
class nr {
  constructor(e, t, n, i, a, s, o, l) {
    this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = n || 0, this.italic = i || 0, this.skew = a || 0, this.width = s || 0, this.classes = o || [], this.style = l || {}, this.maxFontSize = 0;
    var d = Nf(this.text.charCodeAt(0));
    d && this.classes.push(d + "_fallback"), /[îïíì]/.test(this.text) && (this.text = Uf[this.text]);
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
    return this.italic > 0 && (t = document.createElement("span"), t.style.marginRight = Q(this.italic)), this.classes.length > 0 && (t = t || document.createElement("span"), t.className = $n(this.classes)), Object.keys(this.style).length > 0 && (t = t || document.createElement("span"), Object.assign(t.style, this.style)), t ? (t.appendChild(e), t) : e;
  }
  /**
   * Creates markup for a symbol node.
   */
  toMarkup() {
    var e = !1, t = "<span";
    this.classes.length && (e = !0, t += ' class="', t += Ot($n(this.classes)), t += '"');
    var n = "";
    this.italic > 0 && (n += "margin-right:" + Q(this.italic) + ";"), n += js(this.style), n && (e = !0, t += ' style="' + Ot(n) + '"');
    var i = Ot(this.text);
    return e ? (t += ">", t += i, t += "</span>", t) : i;
  }
}
class an {
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
      e += " " + t + '="' + Ot(this.attributes[t]) + '"';
    e += ">";
    for (var n = 0; n < this.children.length; n++)
      e += this.children[n].toMarkup();
    return e += "</svg>", e;
  }
}
class Tn {
  constructor(e, t) {
    this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t;
  }
  toNode() {
    var e = "http://www.w3.org/2000/svg", t = document.createElementNS(e, "path");
    return this.alternate ? t.setAttribute("d", this.alternate) : t.setAttribute("d", Sl[this.pathName]), t;
  }
  toMarkup() {
    return this.alternate ? '<path d="' + Ot(this.alternate) + '"/>' : '<path d="' + Ot(Sl[this.pathName]) + '"/>';
  }
}
class is {
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
      e += " " + t + '="' + Ot(this.attributes[t]) + '"';
    return e += "/>", e;
  }
}
function Gf(r) {
  if (r instanceof nr)
    return r;
  throw new Error("Expected symbolNode but got " + String(r) + ".");
}
function jf(r) {
  if (r instanceof R0)
    return r;
  throw new Error("Expected span<HtmlDomNode> but got " + String(r) + ".");
}
var Kf = (r) => r instanceof R0 || r instanceof aa || r instanceof z0, Pr = {
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
}, xi = {
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
}, _l = {
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
function Zf(r, e) {
  Pr[r] = e;
}
function Ks(r, e, t) {
  if (!Pr[e])
    throw new Error("Font metrics not found for font: " + e + ".");
  var n = r.charCodeAt(0), i = Pr[e][n];
  if (!i && r[0] in _l && (n = _l[r[0]].charCodeAt(0), i = Pr[e][n]), !i && t === "text" && Du(n) && (i = Pr[e][77]), i)
    return {
      depth: i[0],
      height: i[1],
      italic: i[2],
      skew: i[3],
      width: i[4]
    };
}
var Sa = {};
function Xf(r) {
  var e;
  if (r >= 5 ? e = 0 : r >= 3 ? e = 1 : e = 2, !Sa[e]) {
    var t = Sa[e] = {
      cssEmPerMu: xi.quad[e] / 18
    };
    for (var n in xi)
      xi.hasOwnProperty(n) && (t[n] = xi[n][e]);
  }
  return Sa[e];
}
var pt = {
  math: {},
  text: {}
};
function c(r, e, t, n, i, a) {
  pt[r][i] = {
    font: e,
    group: t,
    replace: n
  }, a && n && (pt[r][n] = pt[r][i]);
}
var u = "math", H = "text", p = "main", w = "ams", mt = "accent-token", pe = "bin", Ut = "close", O0 = "inner", _e = "mathord", At = "op-token", ar = "open", ui = "punct", x = "rel", ln = "spacing", C = "textord";
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
c(u, p, ui, ".", "\\ldotp");
c(u, p, ui, "⋅", "\\cdotp");
c(u, p, ui, "⋅", "·");
c(H, p, C, "⋅", "·");
c(u, p, C, "#", "\\#");
c(H, p, C, "#", "\\#");
c(u, p, C, "&", "\\&");
c(H, p, C, "&", "\\&");
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
c(H, p, C, "§", "\\S");
c(u, p, C, "¶", "\\P", !0);
c(H, p, C, "¶", "\\P");
c(u, p, C, "†", "\\dag");
c(H, p, C, "†", "\\dag");
c(H, p, C, "†", "\\textdagger");
c(u, p, C, "‡", "\\ddag");
c(H, p, C, "‡", "\\ddag");
c(H, p, C, "‡", "\\textdaggerdbl");
c(u, p, Ut, "⎱", "\\rmoustache", !0);
c(u, p, ar, "⎰", "\\lmoustache", !0);
c(u, p, Ut, "⟯", "\\rgroup", !0);
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
c(u, w, pe, "⊴", "\\unlhd");
c(u, w, pe, "⊵", "\\unrhd");
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
c(H, p, C, "ð", "ð");
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
c(u, w, ar, "┌", "\\@ulcorner", !0);
c(u, w, Ut, "┐", "\\@urcorner", !0);
c(u, w, ar, "└", "\\@llcorner", !0);
c(u, w, Ut, "┘", "\\@lrcorner", !0);
c(u, w, x, "≦", "\\leqq", !0);
c(u, w, x, "⩽", "\\leqslant", !0);
c(u, w, x, "⪕", "\\eqslantless", !0);
c(u, w, x, "≲", "\\lesssim", !0);
c(u, w, x, "⪅", "\\lessapprox", !0);
c(u, w, x, "≊", "\\approxeq", !0);
c(u, w, pe, "⋖", "\\lessdot");
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
c(u, w, pe, "⋗", "\\gtrdot");
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
c(u, w, pe, "⊲", "\\lhd");
c(u, w, pe, "⊳", "\\rhd");
c(u, w, x, "≂", "\\eqsim", !0);
c(u, p, x, "⋈", "\\Join");
c(u, w, x, "≑", "\\Doteq", !0);
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
c(H, p, C, "$", "\\$");
c(H, p, C, "$", "\\textdollar");
c(u, p, C, "%", "\\%");
c(H, p, C, "%", "\\%");
c(u, p, C, "_", "\\_");
c(H, p, C, "_", "\\_");
c(H, p, C, "_", "\\textunderscore");
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
c(u, p, C, "√", "\\surd");
c(u, p, ar, "⟨", "\\langle", !0);
c(u, p, ar, "∣", "\\lvert");
c(u, p, ar, "∥", "\\lVert");
c(u, p, Ut, "?", "?");
c(u, p, Ut, "!", "!");
c(u, p, Ut, "⟩", "\\rangle", !0);
c(u, p, Ut, "∣", "\\rvert");
c(u, p, Ut, "∥", "\\rVert");
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
c(u, p, ln, " ", "\\ ");
c(u, p, ln, " ", "\\space");
c(u, p, ln, " ", "\\nobreakspace");
c(H, p, ln, " ", "\\ ");
c(H, p, ln, " ", " ");
c(H, p, ln, " ", "\\space");
c(H, p, ln, " ", "\\nobreakspace");
c(u, p, ln, "", "\\nobreak");
c(u, p, ln, "", "\\allowbreak");
c(u, p, ui, ",", ",");
c(u, p, ui, ";", ";");
c(u, w, pe, "⊼", "\\barwedge", !0);
c(u, w, pe, "⊻", "\\veebar", !0);
c(u, p, pe, "⊙", "\\odot", !0);
c(u, p, pe, "⊕", "\\oplus", !0);
c(u, p, pe, "⊗", "\\otimes", !0);
c(u, p, C, "∂", "\\partial", !0);
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
c(H, p, C, "{", "\\{");
c(H, p, C, "{", "\\textbraceleft");
c(u, p, Ut, "}", "\\}");
c(H, p, C, "}", "\\}");
c(H, p, C, "}", "\\textbraceright");
c(u, p, ar, "{", "\\lbrace");
c(u, p, Ut, "}", "\\rbrace");
c(u, p, ar, "[", "\\lbrack", !0);
c(H, p, C, "[", "\\lbrack", !0);
c(u, p, Ut, "]", "\\rbrack", !0);
c(H, p, C, "]", "\\rbrack", !0);
c(u, p, ar, "(", "\\lparen", !0);
c(u, p, Ut, ")", "\\rparen", !0);
c(H, p, C, "<", "\\textless", !0);
c(H, p, C, ">", "\\textgreater", !0);
c(u, p, ar, "⌊", "\\lfloor", !0);
c(u, p, Ut, "⌋", "\\rfloor", !0);
c(u, p, ar, "⌈", "\\lceil", !0);
c(u, p, Ut, "⌉", "\\rceil", !0);
c(u, p, C, "\\", "\\backslash");
c(u, p, C, "∣", "|");
c(u, p, C, "∣", "\\vert");
c(H, p, C, "|", "\\textbar", !0);
c(u, p, C, "∥", "\\|");
c(u, p, C, "∥", "\\Vert");
c(H, p, C, "∥", "\\textbardbl");
c(H, p, C, "~", "\\textasciitilde");
c(H, p, C, "\\", "\\textbackslash");
c(H, p, C, "^", "\\textasciicircum");
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
c(H, p, O0, "…", "\\textellipsis");
c(u, p, O0, "…", "\\mathellipsis");
c(H, p, O0, "…", "\\ldots", !0);
c(u, p, O0, "…", "\\ldots", !0);
c(u, p, O0, "⋯", "\\@cdots", !0);
c(u, p, O0, "⋱", "\\ddots", !0);
c(u, p, C, "⋮", "\\varvdots");
c(H, p, C, "⋮", "\\varvdots");
c(u, p, mt, "ˊ", "\\acute");
c(u, p, mt, "ˋ", "\\grave");
c(u, p, mt, "¨", "\\ddot");
c(u, p, mt, "~", "\\tilde");
c(u, p, mt, "ˉ", "\\bar");
c(u, p, mt, "˘", "\\breve");
c(u, p, mt, "ˇ", "\\check");
c(u, p, mt, "^", "\\hat");
c(u, p, mt, "⃗", "\\vec");
c(u, p, mt, "˙", "\\dot");
c(u, p, mt, "˚", "\\mathring");
c(u, p, _e, "", "\\@imath");
c(u, p, _e, "", "\\@jmath");
c(u, p, C, "ı", "ı");
c(u, p, C, "ȷ", "ȷ");
c(H, p, C, "ı", "\\i", !0);
c(H, p, C, "ȷ", "\\j", !0);
c(H, p, C, "ß", "\\ss", !0);
c(H, p, C, "æ", "\\ae", !0);
c(H, p, C, "œ", "\\oe", !0);
c(H, p, C, "ø", "\\o", !0);
c(H, p, C, "Æ", "\\AE", !0);
c(H, p, C, "Œ", "\\OE", !0);
c(H, p, C, "Ø", "\\O", !0);
c(H, p, mt, "ˊ", "\\'");
c(H, p, mt, "ˋ", "\\`");
c(H, p, mt, "ˆ", "\\^");
c(H, p, mt, "˜", "\\~");
c(H, p, mt, "ˉ", "\\=");
c(H, p, mt, "˘", "\\u");
c(H, p, mt, "˙", "\\.");
c(H, p, mt, "¸", "\\c");
c(H, p, mt, "˚", "\\r");
c(H, p, mt, "ˇ", "\\v");
c(H, p, mt, "¨", '\\"');
c(H, p, mt, "˝", "\\H");
c(H, p, mt, "◯", "\\textcircled");
var Hu = {
  "--": !0,
  "---": !0,
  "``": !0,
  "''": !0
};
c(H, p, C, "–", "--", !0);
c(H, p, C, "–", "\\textendash");
c(H, p, C, "—", "---", !0);
c(H, p, C, "—", "\\textemdash");
c(H, p, C, "‘", "`", !0);
c(H, p, C, "‘", "\\textquoteleft");
c(H, p, C, "’", "'", !0);
c(H, p, C, "’", "\\textquoteright");
c(H, p, C, "“", "``", !0);
c(H, p, C, "“", "\\textquotedblleft");
c(H, p, C, "”", "''", !0);
c(H, p, C, "”", "\\textquotedblright");
c(u, p, C, "°", "\\degree", !0);
c(H, p, C, "°", "\\degree");
c(H, p, C, "°", "\\textdegree", !0);
c(u, p, C, "£", "\\pounds");
c(u, p, C, "£", "\\mathsterling", !0);
c(H, p, C, "£", "\\pounds");
c(H, p, C, "£", "\\textsterling", !0);
c(u, w, C, "✠", "\\maltese");
c(H, w, C, "✠", "\\maltese");
var Cl = '0123456789/@."';
for (var _a = 0; _a < Cl.length; _a++) {
  var Al = Cl.charAt(_a);
  c(u, p, C, Al, Al);
}
var $l = '0123456789!@*()-=+";:?/.,';
for (var Ca = 0; Ca < $l.length; Ca++) {
  var Tl = $l.charAt(Ca);
  c(H, p, C, Tl, Tl);
}
var Ki = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (var Aa = 0; Aa < Ki.length; Aa++) {
  var yi = Ki.charAt(Aa);
  c(u, p, _e, yi, yi), c(H, p, C, yi, yi);
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
c(u, p, _e, "h", "ℎ");
c(H, p, _e, "h", "ℎ");
var $e;
for (var Vt = 0; Vt < Ki.length; Vt++) {
  var xt = Ki.charAt(Vt);
  $e = String.fromCharCode(55349, 56320 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56372 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56424 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56580 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56684 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56736 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56788 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56840 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56944 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), Vt < 26 && ($e = String.fromCharCode(55349, 56632 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e), $e = String.fromCharCode(55349, 56476 + Vt), c(u, p, _e, xt, $e), c(H, p, C, xt, $e));
}
$e = "𝕜";
c(u, p, _e, "k", $e);
c(H, p, C, "k", $e);
for (var Gn = 0; Gn < 10; Gn++) {
  var xn = Gn.toString();
  $e = String.fromCharCode(55349, 57294 + Gn), c(u, p, _e, xn, $e), c(H, p, C, xn, $e), $e = String.fromCharCode(55349, 57314 + Gn), c(u, p, _e, xn, $e), c(H, p, C, xn, $e), $e = String.fromCharCode(55349, 57324 + Gn), c(u, p, _e, xn, $e), c(H, p, C, xn, $e), $e = String.fromCharCode(55349, 57334 + Gn), c(u, p, _e, xn, $e), c(H, p, C, xn, $e);
}
var as = "ÐÞþ";
for (var $a = 0; $a < as.length; $a++) {
  var ki = as.charAt($a);
  c(u, p, _e, ki, ki), c(H, p, C, ki, ki);
}
var ss = {
  mathClass: "mathbf",
  textClass: "textbf",
  font: "Main-Bold"
}, Il = {
  mathClass: "mathnormal",
  textClass: "textit",
  font: "Math-Italic"
}, Nl = {
  mathClass: "boldsymbol",
  textClass: "boldsymbol",
  font: "Main-BoldItalic"
}, Jf = {
  mathClass: "mathscr",
  textClass: "textscr",
  font: "Script-Regular"
}, Xn = {
  mathClass: "",
  textClass: "",
  font: ""
}, Ml = {
  mathClass: "mathfrak",
  textClass: "textfrak",
  font: "Fraktur-Regular"
}, El = {
  mathClass: "mathbb",
  textClass: "textbb",
  font: "AMS-Regular"
}, zl = {
  mathClass: "mathboldfrak",
  textClass: "textboldfrak",
  font: "Fraktur-Regular"
}, os = {
  mathClass: "mathsf",
  textClass: "textsf",
  font: "SansSerif-Regular"
}, ls = {
  mathClass: "mathboldsf",
  textClass: "textboldsf",
  font: "SansSerif-Bold"
}, Rl = {
  mathClass: "mathitsf",
  textClass: "textitsf",
  font: "SansSerif-Italic"
}, cs = {
  mathClass: "mathtt",
  textClass: "texttt",
  font: "Typewriter-Regular"
}, Ol = [
  ss,
  ss,
  // A-Z, a-z
  Il,
  Il,
  // A-Z, a-z
  Nl,
  Nl,
  // A-Z, a-z
  // Map fancy A-Z letters to script, not calligraphic.
  // This aligns with unicode-math and math fonts (except Cambria Math).
  Jf,
  Xn,
  // A-Z script, a-z — no font
  Xn,
  Xn,
  // A-Z bold script, a-z bold script — no font
  Ml,
  Ml,
  // A-Z, a-z
  El,
  El,
  // A-Z double-struck, k double-struck
  // Note that we are using a bold font, but font metrics for regular Fraktur.
  zl,
  zl,
  // A-Z, a-z
  os,
  os,
  // A-Z, a-z
  ls,
  ls,
  // A-Z, a-z
  Rl,
  Rl,
  // A-Z, a-z
  Xn,
  Xn,
  // A-Z bold italic sans, a-z bold italic sans - no font
  cs,
  cs
  // A-Z, a-z
], Yf = [
  ss,
  // 0-9
  Xn,
  // 0-9 double-struck. No KaTeX font.
  os,
  // 0-9
  ls,
  // 0-9
  cs
  // 0-9
], Qf = (r) => {
  var e = r.charCodeAt(0), t = r.charCodeAt(1), n = (e - 55296) * 1024 + (t - 56320) + 65536;
  if (119808 <= n && n < 120484) {
    var i = Math.floor((n - 119808) / 26);
    return Ol[i];
  } else if (120782 <= n && n <= 120831) {
    var a = Math.floor((n - 120782) / 10);
    return Yf[a];
  } else {
    if (n === 120485 || n === 120486)
      return Ol[0];
    if (120486 < n && n < 120782)
      return Xn;
    throw new X("Unsupported character: " + r);
  }
}, sa = function(e, t, n) {
  if (pt[n][e]) {
    var i = pt[n][e].replace;
    i && (e = i);
  }
  return {
    value: e,
    metrics: Ks(e, t, n)
  };
}, qt = function(e, t, n, i, a) {
  var s = sa(e, t, n), o = s.metrics;
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
}, Zs = function(e, t, n, i) {
  return i === void 0 && (i = []), n.font === "boldsymbol" && sa(e, "Main-Bold", t).metrics ? qt(e, "Main-Bold", t, n, i.concat(["mathbf"])) : e === "\\" || pt[t][e].font === "main" ? qt(e, "Main-Regular", t, n, i) : qt(e, "AMS-Regular", t, n, i.concat(["amsrm"]));
}, ep = function(e, t, n) {
  return n !== "textord" && sa(e, "Math-BoldItalic", t).metrics ? {
    fontName: "Math-BoldItalic",
    fontClass: "boldsymbol"
  } : {
    fontName: "Main-Bold",
    fontClass: "mathbf"
  };
}, oa = function(e, t) {
  var n = e.type === "mathord" ? "mathord" : "textord", i = e.mode, a = e.text, s = ["mord"], {
    font: o,
    fontFamily: l,
    fontWeight: d,
    fontShape: h
  } = t, f = i === "math" || i === "text" && !!o, m = f ? o : l, v = "", y = "";
  if (a.charCodeAt(0) === 55349) {
    var I = Qf(a);
    v = I.font, y = I[i + "Class"];
  }
  if (v)
    return qt(a, v, i, t, s.concat(y));
  if (m) {
    var $, E;
    if (m === "boldsymbol") {
      var R = ep(a, i, n);
      $ = R.fontName, E = [R.fontClass];
    } else f ? ($ = us[o].fontName, E = [o]) : ($ = Si(l, d, h), E = [l, d, h]);
    if (sa(a, $, i).metrics)
      return qt(a, $, i, t, s.concat(E));
    if (Hu.hasOwnProperty(a) && $.slice(0, 10) === "Typewriter") {
      for (var W = [], Z = 0; Z < a.length; Z++)
        W.push(qt(a[Z], $, i, t, s.concat(E)));
      return cn(W);
    }
  }
  if (n === "mathord")
    return qt(a, "Math-Italic", i, t, s.concat(["mathnormal"]));
  if (n === "textord") {
    var Y = pt[i][a] && pt[i][a].font;
    if (Y === "ams") {
      var N = Si("amsrm", d, h);
      return qt(a, N, i, t, s.concat("amsrm", d, h));
    } else if (Y === "main" || !Y) {
      var ce = Si("textrm", d, h);
      return qt(a, ce, i, t, s.concat(d, h));
    } else {
      var ue = Si(Y, d, h);
      return qt(a, ue, i, t, s.concat(ue, d, h));
    }
  } else
    throw new Error("unexpected type: " + n + " in makeOrd");
}, tp = (r, e) => {
  if ($n(r.classes) !== $n(e.classes) || r.skew !== e.skew || r.maxFontSize !== e.maxFontSize || r.italic !== 0 && r.hasClass("mathnormal"))
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
}, qu = (r) => {
  for (var e = 0; e < r.length - 1; e++) {
    var t = r[e], n = r[e + 1];
    t instanceof nr && n instanceof nr && tp(t, n) && (t.text += n.text, t.height = Math.max(t.height, n.height), t.depth = Math.max(t.depth, n.depth), t.italic = n.italic, r.splice(e + 1, 1), e--);
  }
  return r;
}, Xs = function(e) {
  for (var t = 0, n = 0, i = 0, a = 0; a < e.children.length; a++) {
    var s = e.children[a];
    s.height > t && (t = s.height), s.depth > n && (n = s.depth), s.maxFontSize > i && (i = s.maxFontSize);
  }
  e.height = t, e.depth = n, e.maxFontSize = i;
}, j = function(e, t, n, i) {
  var a = new R0(e, t, n, i);
  return Xs(a), a;
}, In = (r, e, t, n) => new R0(r, e, t, n), T0 = function(e, t, n) {
  var i = j([e], [], t);
  return i.height = Math.max(n || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), i.style.borderBottomWidth = Q(i.height), i.maxFontSize = 1, i;
}, rp = function(e, t, n, i) {
  var a = new aa(e, t, n, i);
  return Xs(a), a;
}, cn = function(e) {
  var t = new z0(e);
  return Xs(t), t;
}, I0 = function(e, t) {
  return e instanceof z0 ? j([], [e], t) : e;
}, np = function(e) {
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
}, Ze = function(e, t) {
  for (var {
    children: n,
    depth: i
  } = np(e), a = 0, s = 0; s < n.length; s++) {
    var o = n[s];
    if (o.type === "elem") {
      var l = o.elem;
      a = Math.max(a, l.maxFontSize, l.height);
    }
  }
  a += 2;
  var d = j(["pstrut"], []);
  d.style.height = Q(a);
  for (var h = [], f = i, m = i, v = i, y = 0; y < n.length; y++) {
    var I = n[y];
    if (I.type === "kern")
      v += I.size;
    else {
      var $ = I.elem, E = I.wrapperClasses || [], R = I.wrapperStyle || {}, W = j(E, [d, $], void 0, R);
      W.style.top = Q(-a - v - $.depth), I.marginLeft && (W.style.marginLeft = I.marginLeft), I.marginRight && (W.style.marginRight = I.marginRight), h.push(W), v += $.height + $.depth;
    }
    f = Math.min(f, v), m = Math.max(m, v);
  }
  var Z = j(["vlist"], h);
  Z.style.height = Q(m);
  var Y;
  if (f < 0) {
    var N = j([], []), ce = j(["vlist"], [N]);
    ce.style.height = Q(-f);
    var ue = j(["vlist-s"], [new nr("​")]);
    Y = [j(["vlist-r"], [Z, ue]), j(["vlist-r"], [ce])];
  } else
    Y = [j(["vlist-r"], [Z])];
  var P = j(["vlist-t"], Y);
  return Y.length === 2 && P.classes.push("vlist-t2"), P.height = m, P.depth = -f, P;
}, Wu = (r, e) => {
  var t = j(["mspace"], [], e), n = wt(r, e);
  return t.style.marginRight = Q(n), t;
}, Si = (r, e, t) => {
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
}, us = {
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
}, Uu = {
  //   path, width, height
  vec: ["vec", 0.471, 0.714],
  // values from the font glyph
  oiintSize1: ["oiintSize1", 0.957, 0.499],
  // oval to overlay the integrand
  oiintSize2: ["oiintSize2", 1.472, 0.659],
  oiiintSize1: ["oiiintSize1", 1.304, 0.499],
  oiiintSize2: ["oiiintSize2", 1.98, 0.659]
}, Gu = function(e, t) {
  var [n, i, a] = Uu[e], s = new Tn(n), o = new an([s], {
    width: Q(i),
    height: Q(a),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Q(i),
    viewBox: "0 0 " + 1e3 * i + " " + 1e3 * a,
    preserveAspectRatio: "xMinYMin"
  }), l = In(["overlay"], [o], t);
  return l.height = a, l.style.height = Q(a), l.style.width = Q(i), l;
}, vt = {
  number: 3,
  unit: "mu"
}, jn = {
  number: 4,
  unit: "mu"
}, Xr = {
  number: 5,
  unit: "mu"
}, ip = {
  mord: {
    mop: vt,
    mbin: jn,
    mrel: Xr,
    minner: vt
  },
  mop: {
    mord: vt,
    mop: vt,
    mrel: Xr,
    minner: vt
  },
  mbin: {
    mord: jn,
    mop: jn,
    mopen: jn,
    minner: jn
  },
  mrel: {
    mord: Xr,
    mop: Xr,
    mopen: Xr,
    minner: Xr
  },
  mopen: {},
  mclose: {
    mop: vt,
    mbin: jn,
    mrel: Xr,
    minner: vt
  },
  mpunct: {
    mord: vt,
    mop: vt,
    mrel: Xr,
    mopen: vt,
    mclose: vt,
    mpunct: vt,
    minner: vt
  },
  minner: {
    mord: vt,
    mop: vt,
    mbin: jn,
    mrel: Xr,
    mopen: vt,
    mpunct: vt,
    minner: vt
  }
}, ap = {
  mord: {
    mop: vt
  },
  mop: {
    mord: vt,
    mop: vt
  },
  mbin: {},
  mrel: {},
  mopen: {},
  mclose: {
    mop: vt
  },
  mpunct: {},
  minner: {
    mop: vt
  }
}, ju = {}, Y0 = {}, Q0 = {};
function de(r) {
  for (var {
    type: e,
    names: t,
    htmlBuilder: n,
    mathmlBuilder: i
  } = r, a = 0; a < t.length; ++a)
    ju[t[a]] = r;
  e && (n && (Y0[e] = n), i && (Q0[e] = i));
}
function n0(r) {
  var {
    type: e,
    htmlBuilder: t,
    mathmlBuilder: n
  } = r;
  t && (Y0[e] = t), n && (Q0[e] = n);
}
var Zi = function(e) {
  return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
}, _t = function(e) {
  return e.type === "ordgroup" ? e.body : [e];
}, sp = /* @__PURE__ */ new Set(["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"]), op = /* @__PURE__ */ new Set(["rightmost", "mrel", "mclose", "mpunct"]), lp = {
  display: Ie.DISPLAY,
  text: Ie.TEXT,
  script: Ie.SCRIPT,
  scriptscript: Ie.SCRIPTSCRIPT
}, cp = {
  mord: "mord",
  mop: "mop",
  mbin: "mbin",
  mrel: "mrel",
  mopen: "mopen",
  mclose: "mclose",
  mpunct: "mpunct",
  minner: "minner"
}, It = function(e, t, n, i) {
  i === void 0 && (i = [null, null]);
  for (var a = [], s = 0; s < e.length; s++) {
    var o = Xe(e[s], t);
    if (o instanceof z0) {
      var l = o.children;
      a.push(...l);
    } else
      a.push(o);
  }
  if (qu(a), !n)
    return a;
  var d = t;
  if (e.length === 1) {
    var h = e[0];
    h.type === "sizing" ? d = t.havingSize(h.size) : h.type === "styling" && (d = t.havingStyle(lp[h.style]));
  }
  var f = j([i[0] || "leftmost"], [], t), m = j([i[1] || "rightmost"], [], t), v = n === "root";
  return ds(a, (y, I) => {
    var $ = I.classes[0], E = y.classes[0];
    $ === "mbin" && op.has(E) ? I.classes[0] = "mord" : E === "mbin" && sp.has($) && (y.classes[0] = "mord");
  }, {
    node: f
  }, m, v), ds(a, (y, I) => {
    var $, E, R = fs(I), W = fs(y), Z = R && W ? y.hasClass("mtight") ? ($ = ap[R]) == null ? void 0 : $[W] : (E = ip[R]) == null ? void 0 : E[W] : null;
    if (Z)
      return Wu(Z, d);
  }, {
    node: f
  }, m, v), a;
}, ds = function(e, t, n, i, a) {
  i && e.push(i);
  for (var s = 0; s < e.length; s++) {
    var o = e[s], l = Ku(o);
    if (l) {
      ds(l.children, t, n, null, a);
      continue;
    }
    var d = !o.hasClass("mspace");
    if (d) {
      var h = t(o, n.node);
      h && (n.insertAfter ? n.insertAfter(h) : (e.unshift(h), s++));
    }
    d ? n.node = o : a && o.hasClass("newline") && (n.node = j(["leftmost"])), n.insertAfter = /* @__PURE__ */ ((f) => (m) => {
      e.splice(f + 1, 0, m), s++;
    })(s);
  }
  i && e.pop();
}, Ku = function(e) {
  return e instanceof z0 || e instanceof aa || e instanceof R0 && e.hasClass("enclosing") ? e : null;
}, hs = function(e, t) {
  var n = Ku(e);
  if (n) {
    var i = n.children;
    if (i.length) {
      if (t === "right")
        return hs(i[i.length - 1], "right");
      if (t === "left")
        return hs(i[0], "left");
    }
  }
  return e;
}, fs = function(e, t) {
  if (!e)
    return null;
  t && (e = hs(e, t));
  var n = e.classes[0];
  return cp[n] || null;
}, ei = function(e, t) {
  var n = ["nulldelimiter"].concat(e.baseSizingClasses());
  return j(t.concat(n));
}, Xe = function(e, t, n) {
  if (!e)
    return j();
  if (Y0[e.type]) {
    var i = Y0[e.type](e, t);
    if (n && t.size !== n.size) {
      i = j(t.sizingClasses(n), [i], t);
      var a = t.sizeMultiplier / n.sizeMultiplier;
      i.height *= a, i.depth *= a;
    }
    return i;
  } else
    throw new X("Got group of unknown type: '" + e.type + "'");
};
function _i(r, e) {
  var t = j(["base"], r, e), n = j(["strut"]);
  return n.style.height = Q(t.height + t.depth), t.depth && (n.style.verticalAlign = Q(-t.depth)), t.children.unshift(n), t;
}
function ps(r, e) {
  var t = null;
  r.length === 1 && r[0].type === "tag" && (t = r[0].tag, r = r[0].body);
  var n = It(r, e, "root"), i;
  n.length === 2 && n[1].hasClass("tag") && (i = n.pop());
  for (var a = [], s = [], o = 0; o < n.length; o++)
    if (s.push(n[o]), n[o].hasClass("mbin") || n[o].hasClass("mrel") || n[o].hasClass("allowbreak")) {
      for (var l = !1; o < n.length - 1 && n[o + 1].hasClass("mspace") && !n[o + 1].hasClass("newline"); )
        o++, s.push(n[o]), n[o].hasClass("nobreak") && (l = !0);
      l || (a.push(_i(s, e)), s = []);
    } else n[o].hasClass("newline") && (s.pop(), s.length > 0 && (a.push(_i(s, e)), s = []), a.push(n[o]));
  s.length > 0 && a.push(_i(s, e));
  var d;
  t ? (d = _i(It(t, e, !0), e), d.classes = ["tag"], a.push(d)) : i && a.push(i);
  var h = j(["katex-html"], a);
  if (h.setAttribute("aria-hidden", "true"), d) {
    var f = d.children[0];
    f.style.height = Q(h.height + h.depth), h.depth && (f.style.verticalAlign = Q(-h.depth));
  }
  return h;
}
function Zu(r) {
  return new z0(r);
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
    this.classes.length > 0 && (e.className = $n(this.classes));
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
      Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += Ot(this.attributes[t]), e += '"');
    this.classes.length > 0 && (e += ' class ="' + Ot($n(this.classes)) + '"'), e += ">";
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
    return Ot(this.toText());
  }
  /**
   * Converts the text node into a string
   * (representing the text itself).
   */
  toText() {
    return this.text;
  }
}
class Xu {
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
    return e.setAttribute("width", Q(this.width)), e;
  }
  /**
   * Converts the math node into an HTML markup string.
   */
  toMarkup() {
    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + Q(this.width) + '"/>';
  }
  /**
   * Converts the math node into a string, similar to innerText.
   */
  toText() {
    return this.character ? this.character : " ";
  }
}
var up = /* @__PURE__ */ new Set(["\\imath", "\\jmath"]), dp = /* @__PURE__ */ new Set(["mrow", "mtable"]), fr = function(e, t, n) {
  return pt[t][e] && pt[t][e].replace && e.charCodeAt(0) !== 55349 && !(Hu.hasOwnProperty(e) && n && (n.fontFamily && n.fontFamily.slice(4, 6) === "tt" || n.font && n.font.slice(4, 6) === "tt")) && (e = pt[t][e].replace), new Ct(e);
}, Js = function(e) {
  return e.length === 1 ? e[0] : new J("mrow", e);
}, hp = {
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
}, Ys = (r, e) => {
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
  var n = r.mode, i = hp[t];
  if (i)
    return typeof i == "function" ? i(r) : i;
  var a = r.text;
  if (up.has(a))
    return null;
  if (pt[n][a]) {
    var s = pt[n][a].replace;
    s && (a = s);
  }
  var o = us[t].fontName;
  return Ks(a, o, n) ? us[t].variant : null;
};
function Ta(r) {
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
var sr = function(e, t, n) {
  if (e.length === 1) {
    var i = ot(e[0], t);
    return n && i instanceof J && i.type === "mo" && (i.setAttribute("lspace", "0em"), i.setAttribute("rspace", "0em")), [i];
  }
  for (var a = [], s, o = 0; o < e.length; o++) {
    var l = ot(e[o], t);
    if (l instanceof J && s instanceof J) {
      if (l.type === "mtext" && s.type === "mtext" && l.getAttribute("mathvariant") === s.getAttribute("mathvariant")) {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (Ta(l) && s.type === "mn") {
        s.children.push(...l.children);
        continue;
      } else if (l.type === "mn" && Ta(s))
        l.children = [...s.children, ...l.children], a.pop();
      else if ((l.type === "msup" || l.type === "msub") && l.children.length >= 1 && (s.type === "mn" || Ta(s))) {
        var d = l.children[0];
        d instanceof J && d.type === "mn" && (d.children = [...s.children, ...d.children], a.pop());
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
}, Nn = function(e, t, n) {
  return Js(sr(e, t, n));
}, ot = function(e, t) {
  if (!e)
    return new J("mrow");
  if (Q0[e.type])
    return Q0[e.type](e, t);
  throw new X("Got group of unknown type: '" + e.type + "'");
};
function Bl(r, e, t, n, i) {
  var a = sr(r, t), s;
  a.length === 1 && a[0] instanceof J && dp.has(a[0].type) ? s = a[0] : s = new J("mrow", a);
  var o = new J("annotation", [new Ct(e)]);
  o.setAttribute("encoding", "application/x-tex");
  var l = new J("semantics", [s, o]), d = new J("math", [l]);
  d.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && d.setAttribute("display", "block");
  var h = i ? "katex" : "katex-mathml";
  return j([h], [d]);
}
var fp = [
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
], Dl = [
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
], Ll = function(e, t) {
  return t.size < 2 ? e : fp[e - 1][t.size - 1];
};
class Yr {
  constructor(e) {
    this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = e.style, this.color = e.color, this.size = e.size || Yr.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = Dl[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
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
    return Object.assign(t, e), new Yr(t);
  }
  /**
   * Return an options object with the given style. If `this.style === style`,
   * returns `this`.
   */
  havingStyle(e) {
    return this.style === e ? this : this.extend({
      style: e,
      size: Ll(this.textSize, e)
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
      sizeMultiplier: Dl[e - 1]
    });
  }
  /**
   * Like `this.havingSize(BASESIZE).havingStyle(style)`. If `style` is omitted,
   * changes to at least `\textstyle`.
   */
  havingBaseStyle(e) {
    e = e || this.style.text();
    var t = Ll(Yr.BASESIZE, e);
    return this.size === t && this.textSize === Yr.BASESIZE && this.style === e ? this : this.extend({
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
    return this.size !== Yr.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + Yr.BASESIZE] : [];
  }
  /**
   * Return the font metrics for this size.
   */
  fontMetrics() {
    return this._fontMetrics || (this._fontMetrics = Xf(this.size)), this._fontMetrics;
  }
  /**
   * Gets the CSS color of the current options object
   */
  getColor() {
    return this.phantom ? "transparent" : this.color;
  }
}
Yr.BASESIZE = 6;
var Ju = function(e) {
  return new Yr({
    style: e.displayMode ? Ie.DISPLAY : Ie.TEXT,
    maxSize: e.maxSize,
    minRuleThickness: e.minRuleThickness
  });
}, Yu = function(e, t) {
  if (t.displayMode) {
    var n = ["katex-display"];
    t.leqno && n.push("leqno"), t.fleqn && n.push("fleqn"), e = j(n, [e]);
  }
  return e;
}, pp = function(e, t, n) {
  var i = Ju(n), a;
  if (n.output === "mathml")
    return Bl(e, t, i, n.displayMode, !0);
  if (n.output === "html") {
    var s = ps(e, i);
    a = j(["katex"], [s]);
  } else {
    var o = Bl(e, t, i, n.displayMode, !1), l = ps(e, i);
    a = j(["katex"], [o, l]);
  }
  return Yu(a, n);
}, mp = function(e, t, n) {
  var i = Ju(n), a = ps(e, i), s = j(["katex"], [a]);
  return Yu(s, n);
}, gp = {
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
}, la = function(e) {
  var t = new J("mo", [new Ct(gp[e.replace(/^\\/, "")])]);
  return t.setAttribute("stretchy", "true"), t;
}, bp = {
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
}, vp = /* @__PURE__ */ new Set(["widehat", "widecheck", "widetilde", "utilde"]), ca = function(e, t) {
  function n() {
    var o = 4e5, l = e.label.slice(1);
    if (vp.has(l) && "base" in e) {
      var d = e.base.type === "ordgroup" ? e.base.body.length : 1, h, f, m;
      if (d > 5)
        l === "widehat" || l === "widecheck" ? (h = 420, o = 2364, m = 0.42, f = l + "4") : (h = 312, o = 2340, m = 0.34, f = "tilde4");
      else {
        var v = [1, 1, 2, 2, 3, 3][d];
        l === "widehat" || l === "widecheck" ? (o = [0, 1062, 2364, 2364, 2364][v], h = [0, 239, 300, 360, 420][v], m = [0, 0.24, 0.3, 0.3, 0.36, 0.42][v], f = l + v) : (o = [0, 600, 1033, 2339, 2340][v], h = [0, 260, 286, 306, 312][v], m = [0, 0.26, 0.286, 0.3, 0.306, 0.34][v], f = "tilde" + v);
      }
      var y = new Tn(f), I = new an([y], {
        width: "100%",
        height: Q(m),
        viewBox: "0 0 " + o + " " + h,
        preserveAspectRatio: "none"
      });
      return {
        span: In([], [I], t),
        minWidth: 0,
        height: m
      };
    } else {
      var $ = [], E = bp[l];
      if (!E)
        throw new Error('No SVG data for "' + l + '".');
      var [R, W, Z] = E, Y = Z / 1e3, N = R.length, ce, ue;
      if (N === 1) {
        if (E.length !== 4)
          throw new Error('Expected 4-tuple for single-path SVG data "' + l + '".');
        ce = ["hide-tail"], ue = [E[3]];
      } else if (N === 2)
        ce = ["halfarrow-left", "halfarrow-right"], ue = ["xMinYMin", "xMaxYMin"];
      else if (N === 3)
        ce = ["brace-left", "brace-center", "brace-right"], ue = ["xMinYMin", "xMidYMin", "xMaxYMin"];
      else
        throw new Error(`Correct katexImagesData or update code here to support
                    ` + N + " children.");
      for (var P = 0; P < N; P++) {
        var ge = new Tn(R[P]), Ne = new an([ge], {
          width: "400em",
          height: Q(Y),
          viewBox: "0 0 " + o + " " + Z,
          preserveAspectRatio: ue[P] + " slice"
        }), xe = In([ce[P]], [Ne], t);
        if (N === 1)
          return {
            span: xe,
            minWidth: W,
            height: Y
          };
        xe.style.height = Q(Y), $.push(xe);
      }
      return {
        span: j(["stretchy"], $, t),
        minWidth: W,
        height: Y
      };
    }
  }
  var {
    span: i,
    minWidth: a,
    height: s
  } = n();
  return i.height = s, i.style.height = Q(s), a > 0 && (i.style.minWidth = Q(a)), i;
}, wp = function(e, t, n, i, a) {
  var s, o = e.height + e.depth + n + i;
  if (/fbox|color|angl/.test(t)) {
    if (s = j(["stretchy", t], [], a), t === "fbox") {
      var l = a.color && a.getColor();
      l && (s.style.borderColor = l);
    }
  } else {
    var d = [];
    /^[bx]cancel$/.test(t) && d.push(new is({
      x1: "0",
      y1: "0",
      x2: "100%",
      y2: "100%",
      "stroke-width": "0.046em"
    })), /^x?cancel$/.test(t) && d.push(new is({
      x1: "0",
      y1: "100%",
      x2: "100%",
      y2: "0",
      "stroke-width": "0.046em"
    }));
    var h = new an(d, {
      width: "100%",
      height: Q(o)
    });
    s = In([], [h], a);
  }
  return s.height = o, s.style.height = Q(o), s;
}, xp = {
  bin: 1,
  close: 1,
  inner: 1,
  open: 1,
  punct: 1,
  rel: 1
}, yp = {
  "accent-token": 1,
  mathord: 1,
  "op-token": 1,
  spacing: 1,
  textord: 1
};
function kp(r) {
  return r in xp;
}
function Be(r, e) {
  if (!r || r.type !== e)
    throw new Error("Expected node of type " + e + ", but got " + (r ? "node of type " + r.type : String(r)));
  return r;
}
function ua(r) {
  var e = da(r);
  if (!e)
    throw new Error("Expected node of symbol group type, but got " + (r ? "node of type " + r.type : String(r)));
  return e;
}
function da(r) {
  return r && (r.type === "atom" || yp.hasOwnProperty(r.type)) ? r : null;
}
var Qu = (r) => {
  if (r instanceof nr)
    return r;
  if (Kf(r) && r.children.length === 1)
    return Qu(r.children[0]);
}, e1 = (r, e) => {
  var t, n, i;
  r && r.type === "supsub" ? (n = Be(r.base, "accent"), t = n.base, r.base = t, i = jf(Xe(r, e)), r.base = n) : (n = Be(r, "accent"), t = n.base);
  var a = Xe(t, e.havingCrampedStyle()), s = n.isShifty && on(t), o = 0;
  if (s) {
    var l, d;
    o = (l = (d = Qu(a)) == null ? void 0 : d.skew) != null ? l : 0;
  }
  var h = n.label === "\\c", f = h ? a.height + a.depth : Math.min(a.height, e.fontMetrics().xHeight), m;
  if (n.isStretchy)
    m = ca(n, e), m = Ze({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: a
      }, {
        type: "elem",
        elem: m,
        wrapperClasses: ["svg-align"],
        wrapperStyle: o > 0 ? {
          width: "calc(100% - " + Q(2 * o) + ")",
          marginLeft: Q(2 * o)
        } : void 0
      }]
    });
  else {
    var v, y;
    n.label === "\\vec" ? (v = Gu("vec", e), y = Uu.vec[1]) : (v = oa({
      type: "textord",
      mode: n.mode,
      text: n.label
    }, e), v = Gf(v), v.italic = 0, y = v.width, h && (f += v.depth)), m = j(["accent-body"], [v]);
    var I = n.label === "\\textcircled";
    I && (m.classes.push("accent-full"), f = a.height);
    var $ = o;
    I || ($ -= y / 2), m.style.left = Q($), n.label === "\\textcircled" && (m.style.top = ".2em"), m = Ze({
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
  var E = j(["mord", "accent"], [m], e);
  return i ? (i.children[0] = E, i.height = Math.max(E.height, i.height), i.classes[0] = "mord", i) : E;
}, Sp = (r, e) => {
  var t = r.isStretchy ? la(r.label) : new J("mo", [fr(r.label, r.mode)]), n = new J("mover", [ot(r.base, e), t]);
  return n.setAttribute("accent", "true"), n;
}, _p = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((r) => "\\" + r).join("|"));
de({
  type: "accent",
  names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
  numArgs: 1,
  handler: (r, e) => {
    var t = Zi(e[0]), n = !_p.test(r.funcName), i = !n || r.funcName === "\\widehat" || r.funcName === "\\widetilde" || r.funcName === "\\widecheck";
    return {
      type: "accent",
      mode: r.parser.mode,
      label: r.funcName,
      isStretchy: n,
      isShifty: i,
      base: t
    };
  },
  htmlBuilder: e1,
  mathmlBuilder: Sp
});
de({
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
de({
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
    var t = Xe(r.base, e), n = ca(r, e), i = r.label === "\\utilde" ? 0.12 : 0, a = Ze({
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
    return j(["mord", "accentunder"], [a], e);
  },
  mathmlBuilder: (r, e) => {
    var t = la(r.label), n = new J("munder", [ot(r.base, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
var Ci = (r) => {
  var e = new J("mpadded", r ? [r] : []);
  return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
};
de({
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
    var t = e.style, n = e.havingStyle(t.sup()), i = I0(Xe(r.body, n, e), e), a = r.label.slice(0, 2) === "\\x" ? "x" : "cd";
    i.classes.push(a + "-arrow-pad");
    var s;
    r.below && (n = e.havingStyle(t.sub()), s = I0(Xe(r.below, n, e), e), s.classes.push(a + "-arrow-pad"));
    var o = ca(r, e), l = -e.fontMetrics().axisHeight + 0.5 * o.height, d = -e.fontMetrics().axisHeight - 0.5 * o.height - 0.111;
    (i.depth > 0.25 || r.label === "\\xleftequilibrium") && (d -= i.depth);
    var h;
    if (s) {
      var f = -e.fontMetrics().axisHeight + s.height + 0.5 * o.height + 0.111;
      h = Ze({
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
      h = Ze({
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
    return j(["mrel", "x-arrow"], [h], e);
  },
  mathmlBuilder(r, e) {
    var t = la(r.label);
    t.setAttribute("minsize", r.label.charAt(0) === "x" ? "1.75em" : "3.0em");
    var n;
    if (r.body) {
      var i = Ci(ot(r.body, e));
      if (r.below) {
        var a = Ci(ot(r.below, e));
        n = new J("munderover", [t, a, i]);
      } else
        n = new J("mover", [t, i]);
    } else if (r.below) {
      var s = Ci(ot(r.below, e));
      n = new J("munder", [t, s]);
    } else
      n = Ci(), n = new J("mover", [t, n]);
    return n;
  }
});
function Cp(r, e) {
  var t = It(r.body, e, !0);
  return j([r.mclass], t, e);
}
function Ap(r, e) {
  var t, n = sr(r.body, e);
  return r.mclass === "minner" ? t = new J("mpadded", n) : r.mclass === "mord" ? r.isCharacterBox ? (t = n[0], t.type = "mi") : t = new J("mi", n) : (r.isCharacterBox ? (t = n[0], t.type = "mo") : t = new J("mo", n), r.mclass === "mbin" ? (t.attributes.lspace = "0.22em", t.attributes.rspace = "0.22em") : r.mclass === "mpunct" ? (t.attributes.lspace = "0em", t.attributes.rspace = "0.17em") : (r.mclass === "mopen" || r.mclass === "mclose") && (t.attributes.lspace = "0em", t.attributes.rspace = "0em")), t;
}
de({
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
      isCharacterBox: on(i)
    };
  },
  htmlBuilder: Cp,
  mathmlBuilder: Ap
});
var ha = (r) => {
  var e = r.type === "ordgroup" && r.body.length ? r.body[0] : r;
  return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
};
de({
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
      mclass: ha(e[0]),
      body: _t(e[1]),
      isCharacterBox: on(e[1])
    };
  }
});
de({
  type: "mclass",
  names: ["\\stackrel", "\\overset", "\\underset"],
  numArgs: 2,
  handler(r, e) {
    var {
      parser: t,
      funcName: n
    } = r, i = e[1], a = e[0], s;
    n !== "\\stackrel" ? s = ha(i) : s = "mrel";
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
      isCharacterBox: on(l)
    };
  }
});
de({
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
      mclass: ha(e[0]),
      body: _t(e[0])
    };
  },
  htmlBuilder(r, e) {
    var t = It(r.body, e, !0), n = j([r.mclass], t, e);
    return n.style.textShadow = "0.02em 0.01em 0.04px", n;
  },
  mathmlBuilder(r, e) {
    var t = sr(r.body, e), n = new J("mstyle", t);
    return n.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), n;
  }
});
var $p = {
  ">": "\\\\cdrightarrow",
  "<": "\\\\cdleftarrow",
  "=": "\\\\cdlongequal",
  A: "\\uparrow",
  V: "\\downarrow",
  "|": "\\Vert",
  ".": "no arrow"
}, Fl = () => ({
  type: "styling",
  body: [],
  mode: "math",
  style: "display",
  resetFont: !0
}), Pl = (r) => r.type === "textord" && r.text === "@", Tp = (r, e) => (r.type === "mathord" || r.type === "atom") && r.text === e;
function Ip(r, e, t) {
  var n = $p[r];
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
function Np(r) {
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
  for (var n = [], i = [n], a = 0; a < e.length; a++) {
    for (var s = e[a], o = Fl(), l = 0; l < s.length; l++)
      if (!Pl(s[l]))
        o.body.push(s[l]);
      else {
        n.push(o), l += 1;
        var d = ua(s[l]).text, h = new Array(2);
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
              if (Tp(s[v], d)) {
                m = !1, l = v;
                break;
              }
              if (Pl(s[v]))
                throw new X("Missing a " + d + " character to complete a CD arrow.", s[v]);
              h[f].body.push(s[v]);
            }
            if (m)
              throw new X("Missing a " + d + " character to complete a CD arrow.", s[l]);
          }
        else
          throw new X('Expected one of "<>AV=|." after @', s[l]);
        var y = Ip(d, h, r), I = {
          type: "styling",
          body: [y],
          mode: "math",
          style: "display",
          // CD is always displaystyle.
          resetFont: !0
        };
        n.push(I), o = Fl();
      }
    a % 2 === 0 ? n.push(o) : n.shift(), n = [], i.push(n);
  }
  r.gullet.endGroup(), r.gullet.endGroup();
  var $ = new Array(i[0].length).fill({
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
    cols: $,
    colSeparationType: "CD",
    hLinesBeforeRow: new Array(i.length + 1).fill([])
  };
}
de({
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
    var t = e.havingStyle(e.style.sup()), n = I0(Xe(r.label, t, e), e);
    return n.classes.push("cd-label-" + r.side), n.style.bottom = Q(0.8 - n.depth), n.height = 0, n.depth = 0, n;
  },
  mathmlBuilder(r, e) {
    var t = new J("mrow", [ot(r.label, e)]);
    return t = new J("mpadded", [t]), t.setAttribute("width", "0"), r.side === "left" && t.setAttribute("lspace", "-1width"), t.setAttribute("voffset", "0.7em"), t = new J("mstyle", [t]), t.setAttribute("displaystyle", "false"), t.setAttribute("scriptlevel", "1"), t;
  }
});
de({
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
    var t = I0(Xe(r.fragment, e), e);
    return t.classes.push("cd-vert-arrow"), t;
  },
  mathmlBuilder(r, e) {
    return new J("mrow", [ot(r.fragment, e)]);
  }
});
de({
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
      throw new X("\\@char has non-numeric argument " + a);
    if (l < 0 || l >= 1114111)
      throw new X("\\@char with invalid code point " + a);
    return l <= 65535 ? d = String.fromCharCode(l) : (l -= 65536, d = String.fromCharCode((l >> 10) + 55296, (l & 1023) + 56320)), {
      type: "textord",
      mode: t.mode,
      text: d
    };
  }
});
var Mp = (r, e) => {
  var t = It(r.body, e.withColor(r.color), !1);
  return cn(t);
}, Ep = (r, e) => {
  var t = sr(r.body, e.withColor(r.color)), n = new J("mstyle", t);
  return n.setAttribute("mathcolor", r.color), n;
};
de({
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
  htmlBuilder: Mp,
  mathmlBuilder: Ep
});
de({
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
de({
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
    var t = j(["mspace"], [], e);
    return r.newLine && (t.classes.push("newline"), r.size && (t.style.marginTop = Q(wt(r.size, e)))), t;
  },
  mathmlBuilder(r, e) {
    var t = new J("mspace");
    return r.newLine && (t.setAttribute("linebreak", "newline"), r.size && t.setAttribute("height", Q(wt(r.size, e)))), t;
  }
});
var ms = {
  "\\global": "\\global",
  "\\long": "\\\\globallong",
  "\\\\globallong": "\\\\globallong",
  "\\def": "\\gdef",
  "\\gdef": "\\gdef",
  "\\edef": "\\xdef",
  "\\xdef": "\\xdef",
  "\\let": "\\\\globallet",
  "\\futurelet": "\\\\globalfuture"
}, t1 = (r) => {
  var e = r.text;
  if (/^(?:[\\{}$&#^_]|EOF)$/.test(e))
    throw new X("Expected a control sequence", r);
  return e;
}, zp = (r) => {
  var e = r.gullet.popToken();
  return e.text === "=" && (e = r.gullet.popToken(), e.text === " " && (e = r.gullet.popToken())), e;
}, r1 = (r, e, t, n) => {
  var i = r.gullet.macros.get(t.text);
  i == null && (t.noexpand = !0, i = {
    tokens: [t],
    numArgs: 0,
    // reproduce the same behavior in expansion
    unexpandable: !r.gullet.isExpandable(t.text)
  }), r.gullet.macros.set(e, i, n);
};
de({
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
    if (ms[n.text])
      return (t === "\\global" || t === "\\\\globallong") && (n.text = ms[n.text]), Be(e.parseFunction(), "internal");
    throw new X("Invalid token after macro prefix", n);
  }
});
de({
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
      throw new X("Expected a control sequence", n);
    for (var a = 0, s, o = [[]]; e.gullet.future().text !== "{"; )
      if (n = e.gullet.popToken(), n.text === "#") {
        if (e.gullet.future().text === "{") {
          s = e.gullet.future(), o[a].push("{");
          break;
        }
        if (n = e.gullet.popToken(), !/^[1-9]$/.test(n.text))
          throw new X('Invalid argument number "' + n.text + '"');
        if (parseInt(n.text) !== a + 1)
          throw new X('Argument number "' + n.text + '" out of order');
        a++, o.push([]);
      } else {
        if (n.text === "EOF")
          throw new X("Expected a macro definition");
        o[a].push(n.text);
      }
    var {
      tokens: l
    } = e.gullet.consumeArg();
    return s && l.unshift(s), (t === "\\edef" || t === "\\xdef") && (l = e.gullet.expandTokens(l), l.reverse()), e.gullet.macros.set(i, {
      tokens: l,
      numArgs: a,
      delimiters: o
    }, t === ms[t]), {
      type: "internal",
      mode: e.mode
    };
  }
});
de({
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
    } = r, n = t1(e.gullet.popToken());
    e.gullet.consumeSpaces();
    var i = zp(e);
    return r1(e, n, i, t === "\\\\globallet"), {
      type: "internal",
      mode: e.mode
    };
  }
});
de({
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
    } = r, n = t1(e.gullet.popToken()), i = e.gullet.popToken(), a = e.gullet.popToken();
    return r1(e, n, a, t === "\\\\globalfuture"), e.gullet.pushToken(a), e.gullet.pushToken(i), {
      type: "internal",
      mode: e.mode
    };
  }
});
var G0 = function(e, t, n) {
  var i = pt.math[e] && pt.math[e].replace, a = Ks(i || e, t, n);
  if (!a)
    throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
  return a;
}, Qs = function(e, t, n, i) {
  var a = n.havingBaseStyle(t), s = j(i.concat(a.sizingClasses(n)), [e], n), o = a.sizeMultiplier / n.sizeMultiplier;
  return s.height *= o, s.depth *= o, s.maxFontSize = a.sizeMultiplier, s;
}, n1 = function(e, t, n) {
  var i = t.havingBaseStyle(n), a = (1 - t.sizeMultiplier / i.sizeMultiplier) * t.fontMetrics().axisHeight;
  e.classes.push("delimcenter"), e.style.top = Q(a), e.height -= a, e.depth += a;
}, Rp = function(e, t, n, i, a, s) {
  var o = qt(e, "Main-Regular", a, i), l = Qs(o, t, i, s);
  return n1(l, i, t), l;
}, Op = function(e, t, n, i) {
  return qt(e, "Size" + t + "-Regular", n, i);
}, i1 = function(e, t, n, i, a, s) {
  var o = Op(e, t, a, i), l = Qs(j(["delimsizing", "size" + t], [o], i), Ie.TEXT, i, s);
  return n && n1(l, i, Ie.TEXT), l;
}, Ia = function(e, t, n) {
  var i;
  t === "Size1-Regular" ? i = "delim-size1" : i = "delim-size4";
  var a = j(["delimsizinginner", i], [j([], [qt(e, t, n)])]);
  return {
    type: "elem",
    elem: a
  };
}, Na = function(e, t, n) {
  var i = Pr["Size4-Regular"][e.charCodeAt(0)] ? Pr["Size4-Regular"][e.charCodeAt(0)][4] : Pr["Size1-Regular"][e.charCodeAt(0)][4], a = new Tn("inner", Ff(e, Math.round(1e3 * t))), s = new an([a], {
    width: Q(i),
    height: Q(t),
    // Override CSS rule `.katex svg { width: 100% }`
    style: "width:" + Q(i),
    viewBox: "0 0 " + 1e3 * i + " " + Math.round(1e3 * t),
    preserveAspectRatio: "xMinYMin"
  }), o = In([], [s], n);
  return o.height = t, o.style.height = Q(t), o.style.width = Q(i), {
    type: "elem",
    elem: o
  };
}, gs = 8e-3, Ai = {
  type: "kern",
  size: -1 * gs
}, Bp = /* @__PURE__ */ new Set(["|", "\\lvert", "\\rvert", "\\vert"]), Dp = /* @__PURE__ */ new Set(["\\|", "\\lVert", "\\rVert", "\\Vert"]), a1 = function(e, t, n, i, a, s) {
  var o, l, d, h, f = "", m = 0;
  o = d = h = e, l = null;
  var v = "Size1-Regular";
  e === "\\uparrow" ? d = h = "⏐" : e === "\\Uparrow" ? d = h = "‖" : e === "\\downarrow" ? o = d = "⏐" : e === "\\Downarrow" ? o = d = "‖" : e === "\\updownarrow" ? (o = "\\uparrow", d = "⏐", h = "\\downarrow") : e === "\\Updownarrow" ? (o = "\\Uparrow", d = "‖", h = "\\Downarrow") : Bp.has(e) ? (d = "∣", f = "vert", m = 333) : Dp.has(e) ? (d = "∥", f = "doublevert", m = 556) : e === "[" || e === "\\lbrack" ? (o = "⎡", d = "⎢", h = "⎣", v = "Size4-Regular", f = "lbrack", m = 667) : e === "]" || e === "\\rbrack" ? (o = "⎤", d = "⎥", h = "⎦", v = "Size4-Regular", f = "rbrack", m = 667) : e === "\\lfloor" || e === "⌊" ? (d = o = "⎢", h = "⎣", v = "Size4-Regular", f = "lfloor", m = 667) : e === "\\lceil" || e === "⌈" ? (o = "⎡", d = h = "⎢", v = "Size4-Regular", f = "lceil", m = 667) : e === "\\rfloor" || e === "⌋" ? (d = o = "⎥", h = "⎦", v = "Size4-Regular", f = "rfloor", m = 667) : e === "\\rceil" || e === "⌉" ? (o = "⎤", d = h = "⎥", v = "Size4-Regular", f = "rceil", m = 667) : e === "(" || e === "\\lparen" ? (o = "⎛", d = "⎜", h = "⎝", v = "Size4-Regular", f = "lparen", m = 875) : e === ")" || e === "\\rparen" ? (o = "⎞", d = "⎟", h = "⎠", v = "Size4-Regular", f = "rparen", m = 875) : e === "\\{" || e === "\\lbrace" ? (o = "⎧", l = "⎨", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (o = "⎫", l = "⎬", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lgroup" || e === "⟮" ? (o = "⎧", h = "⎩", d = "⎪", v = "Size4-Regular") : e === "\\rgroup" || e === "⟯" ? (o = "⎫", h = "⎭", d = "⎪", v = "Size4-Regular") : e === "\\lmoustache" || e === "⎰" ? (o = "⎧", h = "⎭", d = "⎪", v = "Size4-Regular") : (e === "\\rmoustache" || e === "⎱") && (o = "⎫", h = "⎩", d = "⎪", v = "Size4-Regular");
  var y = G0(o, v, a), I = y.height + y.depth, $ = G0(d, v, a), E = $.height + $.depth, R = G0(h, v, a), W = R.height + R.depth, Z = 0, Y = 1;
  if (l !== null) {
    var N = G0(l, v, a);
    Z = N.height + N.depth, Y = 2;
  }
  var ce = I + W + Z, ue = Math.max(0, Math.ceil((t - ce) / (Y * E))), P = ce + ue * Y * E, ge = i.fontMetrics().axisHeight;
  n && (ge *= i.sizeMultiplier);
  var Ne = P / 2 - ge, xe = [];
  if (f.length > 0) {
    var U = P - I - W, q = Math.round(P * 1e3), te = Pf(f, Math.round(U * 1e3)), O = new Tn(f, te), G = Q(m / 1e3), M = Q(q / 1e3), re = new an([O], {
      width: G,
      height: M,
      viewBox: "0 0 " + m + " " + q
    }), Te = In([], [re], i);
    Te.height = q / 1e3, Te.style.width = G, Te.style.height = M, xe.push({
      type: "elem",
      elem: Te
    });
  } else {
    if (xe.push(Ia(h, v, a)), xe.push(Ai), l === null) {
      var Me = P - I - W + 2 * gs;
      xe.push(Na(d, Me, i));
    } else {
      var Ve = (P - I - W - Z) / 2 + 2 * gs;
      xe.push(Na(d, Ve, i)), xe.push(Ai), xe.push(Ia(l, v, a)), xe.push(Ai), xe.push(Na(d, Ve, i));
    }
    xe.push(Ai), xe.push(Ia(o, v, a));
  }
  var ze = i.havingBaseStyle(Ie.TEXT), Ye = Ze({
    positionType: "bottom",
    positionData: Ne,
    children: xe
  });
  return Qs(j(["delimsizing", "mult"], [Ye], ze), Ie.TEXT, i, s);
}, Ma = 80, Ea = 0.08, za = function(e, t, n, i, a) {
  var s = Lf(e, i, n), o = new Tn(e, s), l = new an([o], {
    // Note: 1000:1 ratio of viewBox to document em width.
    width: "400em",
    height: Q(t),
    viewBox: "0 0 400000 " + n,
    preserveAspectRatio: "xMinYMin slice"
  });
  return In(["hide-tail"], [l], a);
}, Lp = function(e, t) {
  var n = t.havingBaseSizing(), i = u1("\\surd", e * n.sizeMultiplier, c1, n), a = n.sizeMultiplier, s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness), o, l, d, h, f;
  return i.type === "small" ? (h = 1e3 + 1e3 * s + Ma, e < 1 ? a = 1 : e < 1.4 && (a = 0.7), l = (1 + s + Ea) / a, d = (1 + s) / a, o = za("sqrtMain", l, h, s, t), o.style.minWidth = "0.853em", f = 0.833 / a) : i.type === "large" ? (h = (1e3 + Ma) * Z0[i.size], d = (Z0[i.size] + s) / a, l = (Z0[i.size] + s + Ea) / a, o = za("sqrtSize" + i.size, l, h, s, t), o.style.minWidth = "1.02em", f = 1 / a) : (l = e + s + Ea, d = e + s, h = Math.floor(1e3 * e + s) + Ma, o = za("sqrtTall", l, h, s, t), o.style.minWidth = "0.742em", f = 1.056), o.height = d, o.style.height = Q(l), {
    span: o,
    advanceWidth: f,
    // Calculate the actual line width.
    // This actually should depend on the chosen font -- e.g. \boldmath
    // should use the thicker surd symbols from e.g. KaTeX_Main-Bold, and
    // have thicker rules.
    ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * a
  };
}, s1 = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "\\surd"]), Fp = /* @__PURE__ */ new Set(["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱"]), o1 = /* @__PURE__ */ new Set(["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"]), Z0 = [0, 1.2, 1.8, 2.4, 3], l1 = function(e, t, n, i, a) {
  if (e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle"), s1.has(e) || o1.has(e))
    return i1(e, t, !1, n, i, a);
  if (Fp.has(e))
    return a1(e, Z0[t], !1, n, i, a);
  throw new X("Illegal delimiter: '" + e + "'");
}, Pp = [{
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
}], Vp = [{
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
}], c1 = [{
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
}], Hp = function(e) {
  if (e.type === "small")
    return "Main-Regular";
  if (e.type === "large")
    return "Size" + e.size + "-Regular";
  if (e.type === "stack")
    return "Size4-Regular";
  var t = e.type;
  throw new Error("Add support for delim type '" + t + "' here.");
}, u1 = function(e, t, n, i) {
  for (var a = Math.min(2, 3 - i.style.size), s = a; s < n.length; s++) {
    var o = n[s];
    if (o.type === "stack")
      break;
    var l = G0(e, Hp(o), "math"), d = l.height + l.depth;
    if (o.type === "small") {
      var h = i.havingBaseStyle(o.style);
      d *= h.sizeMultiplier;
    }
    if (d > t)
      return o;
  }
  return n[n.length - 1];
}, bs = function(e, t, n, i, a, s) {
  e === "<" || e === "\\lt" || e === "⟨" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "⟩") && (e = "\\rangle");
  var o;
  o1.has(e) ? o = Pp : s1.has(e) ? o = c1 : o = Vp;
  var l = u1(e, t, o, i);
  return l.type === "small" ? Rp(e, l.style, n, i, a, s) : l.type === "large" ? i1(e, l.size, n, i, a, s) : a1(e, t, n, i, a, s);
}, Ra = function(e, t, n, i, a, s) {
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
  return bs(e, f, !0, i, a, s);
}, Vl = {
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
}, qp = /* @__PURE__ */ new Set(["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "⌊", "⌋", "\\lceil", "\\rceil", "⌈", "⌉", "<", ">", "\\langle", "⟨", "\\rangle", "⟩", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "⟮", "⟯", "\\lmoustache", "\\rmoustache", "⎰", "⎱", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."]);
function Hl(r) {
  return "isMiddle" in r;
}
function fa(r, e) {
  var t = da(r);
  if (t && qp.has(t.text))
    return t;
  throw t ? new X("Invalid delimiter '" + t.text + "' after '" + e.funcName + "'", r) : new X("Invalid delimiter type '" + r.type + "'", r);
}
de({
  type: "delimsizing",
  names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
  numArgs: 1,
  argTypes: ["primitive"],
  handler: (r, e) => {
    var t = fa(e[0], r);
    return {
      type: "delimsizing",
      mode: r.parser.mode,
      size: Vl[r.funcName].size,
      mclass: Vl[r.funcName].mclass,
      delim: t.text
    };
  },
  htmlBuilder: (r, e) => r.delim === "." ? j([r.mclass]) : l1(r.delim, r.size, e, r.mode, [r.mclass]),
  mathmlBuilder: (r) => {
    var e = [];
    r.delim !== "." && e.push(fr(r.delim, r.mode));
    var t = new J("mo", e);
    r.mclass === "mopen" || r.mclass === "mclose" ? t.setAttribute("fence", "true") : t.setAttribute("fence", "false"), t.setAttribute("stretchy", "true");
    var n = Q(Z0[r.size]);
    return t.setAttribute("minsize", n), t.setAttribute("maxsize", n), t;
  }
});
function ql(r) {
  if (!r.body)
    throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
}
de({
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
      delim: fa(e[0], r).text,
      color: t
      // undefined if not set via \color
    };
  }
});
de({
  type: "leftright",
  names: ["\\left"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = fa(e[0], r), n = r.parser;
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
    ql(r);
    for (var t = It(r.body, e, !0, ["mopen", "mclose"]), n = 0, i = 0, a = !1, s = 0; s < t.length; s++) {
      var o = t[s];
      Hl(o) ? a = !0 : (n = Math.max(t[s].height, n), i = Math.max(t[s].depth, i));
    }
    n *= e.sizeMultiplier, i *= e.sizeMultiplier;
    var l;
    if (r.left === "." ? l = ei(e, ["mopen"]) : l = Ra(r.left, n, i, e, r.mode, ["mopen"]), t.unshift(l), a)
      for (var d = 1; d < t.length; d++) {
        var h = t[d];
        if (Hl(h)) {
          var f = h.isMiddle;
          t[d] = Ra(f.delim, n, i, f.options, r.mode, []);
        }
      }
    var m;
    if (r.right === ".")
      m = ei(e, ["mclose"]);
    else {
      var v = r.rightColor ? e.withColor(r.rightColor) : e;
      m = Ra(r.right, n, i, v, r.mode, ["mclose"]);
    }
    return t.push(m), j(["minner"], t, e);
  },
  mathmlBuilder: (r, e) => {
    ql(r);
    var t = sr(r.body, e);
    if (r.left !== ".") {
      var n = new J("mo", [fr(r.left, r.mode)]);
      n.setAttribute("fence", "true"), t.unshift(n);
    }
    if (r.right !== ".") {
      var i = new J("mo", [fr(r.right, r.mode)]);
      i.setAttribute("fence", "true"), r.rightColor && i.setAttribute("mathcolor", r.rightColor), t.push(i);
    }
    return Js(t);
  }
});
de({
  type: "middle",
  names: ["\\middle"],
  numArgs: 1,
  primitive: !0,
  handler: (r, e) => {
    var t = fa(e[0], r);
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
    return r.delim === "." ? t = ei(e, []) : (t = l1(r.delim, 1, e, r.mode, []), t.isMiddle = {
      delim: r.delim,
      options: e
    }), t;
  },
  mathmlBuilder: (r, e) => {
    var t = r.delim === "\\vert" || r.delim === "|" ? fr("|", "text") : fr(r.delim, r.mode), n = new J("mo", [t]);
    return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n;
  }
});
var Wp = (r, e) => {
  var t = I0(Xe(r.body, e), e), n = r.label.slice(1), i = e.sizeMultiplier, a, s, o = on(r.body);
  if (n === "sout")
    a = j(["stretchy", "sout"]), a.height = e.fontMetrics().defaultRuleThickness / i, s = -0.5 * e.fontMetrics().xHeight;
  else if (n === "phase") {
    var l = wt({
      number: 0.6,
      unit: "pt"
    }, e), d = wt({
      number: 0.35,
      unit: "ex"
    }, e), h = e.havingBaseSizing();
    i = i / h.sizeMultiplier;
    var f = t.height + t.depth + l + d;
    t.style.paddingLeft = Q(f / 2 + l);
    var m = Math.floor(1e3 * f * i), v = Bf(m), y = new an([new Tn("phase", v)], {
      width: "400em",
      height: Q(m / 1e3),
      viewBox: "0 0 400000 " + m,
      preserveAspectRatio: "xMinYMin slice"
    });
    a = In(["hide-tail"], [y], e), a.style.height = Q(f), s = t.depth + l + d;
  } else {
    /cancel/.test(n) ? o || t.classes.push("cancel-pad") : n === "angl" ? t.classes.push("anglpad") : t.classes.push("boxpad");
    var I, $, E = 0;
    /box/.test(n) ? (E = Math.max(
      e.fontMetrics().fboxrule,
      // default
      e.minRuleThickness
    ), I = e.fontMetrics().fboxsep + (n === "colorbox" ? 0 : E), $ = I) : n === "angl" ? (E = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), I = 4 * E, $ = Math.max(0, 0.25 - t.depth)) : (I = o ? 0.2 : 0, $ = I), a = wp(t, n, I, $, e), /fbox|boxed|fcolorbox/.test(n) ? (a.style.borderStyle = "solid", a.style.borderWidth = Q(E)) : n === "angl" && E !== 0.049 && (a.style.borderTopWidth = Q(E), a.style.borderRightWidth = Q(E)), s = t.depth + $, r.backgroundColor && (a.style.backgroundColor = r.backgroundColor, r.borderColor && (a.style.borderColor = r.borderColor));
  }
  var R;
  if (r.backgroundColor)
    R = Ze({
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
    R = Ze({
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
  return /cancel/.test(n) && (R.height = t.height, R.depth = t.depth), /cancel/.test(n) && !o ? j(["mord", "cancel-lap"], [R], e) : j(["mord"], [R], e);
}, Up = (r, e) => {
  var t, n = new J(r.label.includes("colorbox") ? "mpadded" : "menclose", [ot(r.body, e)]);
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
        n.setAttribute("style", "border: " + Q(i) + " solid " + r.borderColor);
      }
      break;
    case "\\xcancel":
      n.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
      break;
  }
  return r.backgroundColor && n.setAttribute("mathbackground", r.backgroundColor), n;
};
de({
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
  htmlBuilder: Wp,
  mathmlBuilder: Up
});
de({
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
de({
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
de({
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
de({
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
de({
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
var d1 = {};
function Hr(r) {
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
    d1[t[l]] = o;
  a && (Y0[e] = a), s && (Q0[e] = s);
}
var h1 = {};
function g(r, e) {
  h1[r] = e;
}
class Yt {
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
    return t ? !e || !e.loc || !t.loc || e.loc.lexer !== t.loc.lexer ? null : new Yt(e.loc.lexer, e.loc.start, t.loc.end) : e && e.loc;
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
    return new rr(t, Yt.range(this, e));
  }
}
function Wl(r) {
  var e = [];
  r.consumeSpaces();
  var t = r.fetch().text;
  for (t === "\\relax" && (r.consume(), r.consumeSpaces(), t = r.fetch().text); t === "\\hline" || t === "\\hdashline"; )
    r.consume(), e.push(t === "\\hdashline"), r.consumeSpaces(), t = r.fetch().text;
  return e;
}
var pa = (r) => {
  var e = r.parser.settings;
  if (!e.displayMode)
    throw new X("{" + r.envName + "} can be used only in display mode.");
}, Gp = /* @__PURE__ */ new Set(["gather", "gather*"]);
function eo(r) {
  if (!r.includes("ed"))
    return !r.includes("*");
}
function zn(r, e, t) {
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
      throw new X("Invalid \\arraystretch: " + v);
  }
  r.gullet.beginGroup();
  var y = [], I = [y], $ = [], E = [], R = l != null ? [] : void 0;
  function W() {
    l && r.gullet.macros.set("\\@eqnsw", "1", !0);
  }
  function Z() {
    R && (r.gullet.macros.get("\\df@tag") ? (R.push(r.subparse([new rr("\\df@tag")])), r.gullet.macros.set("\\df@tag", void 0, !0)) : R.push(!!l && r.gullet.macros.get("\\@eqnsw") === "1"));
  }
  for (W(), E.push(Wl(r)); ; ) {
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
    var ce = r.fetch().text;
    if (ce === "&") {
      if (f && y.length === f) {
        if (d || o)
          throw new X("Too many tab characters: &", r.nextToken);
        r.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
      }
      r.consume();
    } else if (ce === "\\end") {
      Z(), y.length === 1 && N.type === "styling" && N.body.length === 1 && N.body[0].type === "ordgroup" && N.body[0].body.length === 0 && (I.length > 1 || !h) && I.pop(), E.length < I.length + 1 && E.push([]);
      break;
    } else if (ce === "\\\\") {
      r.consume();
      var ue = void 0;
      r.gullet.future().text !== " " && (ue = r.parseSizeGroup(!0)), $.push(ue ? ue.value : null), Z(), E.push(Wl(r)), y = [], I.push(y), W();
    } else
      throw new X("Expected & or \\\\ or \\cr or \\end", r.nextToken);
  }
  return r.gullet.endGroup(), r.gullet.endGroup(), {
    type: "array",
    mode: r.mode,
    addJot: i,
    arraystretch: s,
    body: I,
    cols: a,
    rowGaps: $,
    hskipBeforeAndAfter: n,
    hLinesBeforeRow: E,
    colSeparationType: o,
    tags: R,
    leqno: m
  };
}
function to(r) {
  return r.slice(0, 1) === "d" ? "display" : "text";
}
var qr = function(e, t) {
  var n, i, a = e.body.length, s = e.hLinesBeforeRow, o = 0, l = new Array(a), d = [], h = Math.max(
    // From LaTeX \showthe\arrayrulewidth. Equals 0.04 em.
    t.fontMetrics().arrayRuleWidth,
    t.minRuleThickness
  ), f = 1 / t.fontMetrics().ptPerEm, m = 5 * f;
  if (e.colSeparationType && e.colSeparationType === "small") {
    var v = t.havingStyle(Ie.SCRIPT).sizeMultiplier;
    m = 0.2778 * (v / t.sizeMultiplier);
  }
  var y = e.colSeparationType === "CD" ? wt({
    number: 3,
    unit: "ex"
  }, t) : 12 * f, I = 3 * f, $ = e.arraystretch * y, E = 0.7 * $, R = 0.3 * $, W = 0;
  function Z(lr) {
    for (var Nr = 0; Nr < lr.length; ++Nr)
      Nr > 0 && (W += 0.25), d.push({
        pos: W,
        isDashed: lr[Nr]
      });
  }
  for (Z(s[0]), n = 0; n < e.body.length; ++n) {
    var Y = e.body[n], N = E, ce = R;
    o < Y.length && (o = Y.length);
    var ue = {
      cells: new Array(Y.length),
      height: 0,
      depth: 0,
      pos: 0
    };
    for (i = 0; i < Y.length; ++i) {
      var P = Xe(Y[i], t);
      ce < P.depth && (ce = P.depth), N < P.height && (N = P.height), ue.cells[i] = P;
    }
    var ge = e.rowGaps[n], Ne = 0;
    ge && (Ne = wt(ge, t), Ne > 0 && (Ne += R, ce < Ne && (ce = Ne), Ne = 0)), e.addJot && n < e.body.length - 1 && (ce += I), ue.height = N, ue.depth = ce, W += N, ue.pos = W, W += ce + Ne, l[n] = ue, Z(s[n + 1]);
  }
  var xe = W / 2 + t.fontMetrics().axisHeight, U = e.cols || [], q = [], te, O, G = [];
  if (e.tags && e.tags.some((lr) => lr))
    for (n = 0; n < a; ++n) {
      var M = l[n], re = M.pos - xe, Te = e.tags[n], Me = void 0;
      Te === !0 ? Me = j(["eqn-num"], [], t) : Te === !1 ? Me = j([], [], t) : Me = j([], It(Te, t, !0), t), Me.depth = M.depth, Me.height = M.height, G.push({
        type: "elem",
        elem: Me,
        shift: re
      });
    }
  for (
    i = 0, O = 0;
    // Continue while either there are more columns or more column
    // descriptions, so trailing separators don't get lost.
    i < o || O < U.length;
    ++i, ++O
  ) {
    for (var Ve, ze = U[O], Ye = !0; ((er = ze) == null ? void 0 : er.type) === "separator"; ) {
      var er;
      if (Ye || (te = j(["arraycolsep"], []), te.style.width = Q(t.fontMetrics().doubleRuleSep), q.push(te)), ze.separator === "|" || ze.separator === ":") {
        var Gt = ze.separator === "|" ? "solid" : "dashed", be = j(["vertical-separator"], [], t);
        be.style.height = Q(W), be.style.borderRightWidth = Q(h), be.style.borderRightStyle = Gt, be.style.margin = "0 " + Q(-h / 2);
        var Oe = W - xe;
        Oe && (be.style.verticalAlign = Q(-Oe)), q.push(be);
      } else
        throw new X("Invalid separator type: " + ze.separator);
      O++, ze = U[O], Ye = !1;
    }
    if (!(i >= o)) {
      var gt = void 0;
      if (i > 0 || e.hskipBeforeAndAfter) {
        var me, Ke;
        gt = (me = (Ke = ze) == null ? void 0 : Ke.pregap) != null ? me : m, gt !== 0 && (te = j(["arraycolsep"], []), te.style.width = Q(gt), q.push(te));
      }
      var ut = [];
      for (n = 0; n < a; ++n) {
        var $r = l[n], or = $r.cells[i];
        if (or) {
          var Nt = $r.pos - xe;
          or.depth = $r.depth, or.height = $r.height, ut.push({
            type: "elem",
            elem: or,
            shift: Nt
          });
        }
      }
      var Tr = Ze({
        positionType: "individualShift",
        children: ut
      }), On = j(["col-align-" + (((Ve = ze) == null ? void 0 : Ve.align) || "c")], [Tr]);
      if (q.push(On), i < o - 1 || e.hskipBeforeAndAfter) {
        var Ur, un;
        gt = (Ur = (un = ze) == null ? void 0 : un.postgap) != null ? Ur : m, gt !== 0 && (te = j(["arraycolsep"], []), te.style.width = Q(gt), q.push(te));
      }
    }
  }
  var Bt = j(["mtable"], q);
  if (d.length > 0) {
    for (var Gr = T0("hline", t, h), dn = T0("hdashline", t, h), Ir = [{
      type: "elem",
      elem: Bt,
      shift: 0
    }]; d.length > 0; ) {
      var Dt = d.pop(), pr = Dt.pos - xe;
      Dt.isDashed ? Ir.push({
        type: "elem",
        elem: dn,
        shift: pr
      }) : Ir.push({
        type: "elem",
        elem: Gr,
        shift: pr
      });
    }
    Bt = Ze({
      positionType: "individualShift",
      children: Ir
    });
  }
  if (G.length === 0)
    return j(["mord"], [Bt], t);
  var Et = Ze({
    positionType: "individualShift",
    children: G
  }), Lt = j(["tag"], [Et], t);
  return cn([Bt, Lt]);
}, jp = {
  c: "center ",
  l: "left ",
  r: "right "
}, Wr = function(e, t) {
  for (var n = [], i = new J("mtd", [], ["mtr-glue"]), a = new J("mtd", [], ["mml-eqn-num"]), s = 0; s < e.body.length; s++) {
    for (var o = e.body[s], l = [], d = 0; d < o.length; d++)
      l.push(new J("mtd", [ot(o[d], t)]));
    e.tags && e.tags[s] && (l.unshift(i), l.push(i), e.leqno ? l.unshift(a) : l.push(a)), n.push(new J("mtr", l));
  }
  var h = new J("mtable", n), f = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
  h.setAttribute("rowspacing", Q(f));
  var m = "", v = "";
  if (e.cols && e.cols.length > 0) {
    var y = e.cols, I = "", $ = !1, E = 0, R = y.length;
    y[0].type === "separator" && (m += "top ", E = 1), y[y.length - 1].type === "separator" && (m += "bottom ", R -= 1);
    for (var W = E; W < R; W++) {
      var Z = y[W];
      Z.type === "align" ? (v += jp[Z.align], $ && (I += "none "), $ = !0) : Z.type === "separator" && $ && (I += Z.separator === "|" ? "solid " : "dashed ", $ = !1);
    }
    h.setAttribute("columnalign", v.trim()), /[sd]/.test(I) && h.setAttribute("columnlines", I.trim());
  }
  if (e.colSeparationType === "align") {
    for (var Y = e.cols || [], N = "", ce = 1; ce < Y.length; ce++)
      N += ce % 2 ? "0em " : "1em ";
    h.setAttribute("columnspacing", N.trim());
  } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? h.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? h.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? h.setAttribute("columnspacing", "0.5em") : h.setAttribute("columnspacing", "1em");
  var ue = "", P = e.hLinesBeforeRow;
  m += P[0].length > 0 ? "left " : "", m += P[P.length - 1].length > 0 ? "right " : "";
  for (var ge = 1; ge < P.length - 1; ge++)
    ue += P[ge].length === 0 ? "none " : P[ge][0] ? "dashed " : "solid ";
  return /[sd]/.test(ue) && h.setAttribute("rowlines", ue.trim()), m !== "" && (h = new J("menclose", [h]), h.setAttribute("notation", m.trim())), e.arraystretch && e.arraystretch < 1 && (h = new J("mstyle", [h]), h.setAttribute("scriptlevel", "1")), h;
}, f1 = function(e, t) {
  e.envName.includes("ed") || pa(e);
  var n = [], i = e.envName === "split", a = zn(e.parser, {
    cols: n,
    addJot: !0,
    autoTag: i ? void 0 : eo(e.envName),
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
  a.body.forEach(function($) {
    for (var E = 1; E < $.length; E += 2) {
      var R = Be($[E], "styling"), W = Be(R.body[0], "ordgroup");
      W.body.unshift(l);
    }
    if (m)
      o < $.length && (o = $.length);
    else {
      var Z = $.length / 2;
      if (s < Z)
        throw new X("Too many math in a row: " + ("expected " + s + ", but got " + Z), $[0]);
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
  return a.colSeparationType = m ? "align" : "alignat", a;
};
Hr({
  type: "array",
  names: ["array", "darray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = da(e[0]), n = t ? [e[0]] : Be(e[0], "ordgroup").body, i = n.map(function(s) {
      var o = ua(s), l = o.text;
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
    }), a = {
      cols: i,
      hskipBeforeAndAfter: !0,
      // \@preamble in lttab.dtx
      maxNumCols: i.length
    };
    return zn(r.parser, a, to(r.envName));
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
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
          throw new X("Expected l or c or r", i.nextToken);
        i.consume(), i.consumeSpaces(), i.expect("]"), i.consume(), n.cols = [{
          type: "align",
          align: t
        }];
      }
    }
    var a = zn(r.parser, n, to(r.envName)), s = Math.max(0, ...a.body.map((o) => o.length));
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
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["smallmatrix"],
  props: {
    numArgs: 0
  },
  handler(r) {
    var e = {
      arraystretch: 0.5
    }, t = zn(r.parser, e, "script");
    return t.colSeparationType = "small", t;
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["subarray"],
  props: {
    numArgs: 1
  },
  handler(r, e) {
    var t = da(e[0]), n = t ? [e[0]] : Be(e[0], "ordgroup").body, i = n.map(function(o) {
      var l = ua(o), d = l.text;
      if ("lc".includes(d))
        return {
          type: "align",
          align: d
        };
      throw new X("Unknown column alignment: " + d, o);
    });
    if (i.length > 1)
      throw new X("{subarray} can contain only one column");
    var a = {
      cols: i,
      hskipBeforeAndAfter: !1,
      arraystretch: 0.5
    }, s = zn(r.parser, a, "script");
    if (s.body.length > 0 && s.body[0].length > 1)
      throw new X("{subarray} can contain only one column");
    return s;
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
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
    }, t = zn(r.parser, e, to(r.envName));
    return {
      type: "leftright",
      mode: r.mode,
      body: [t],
      left: r.envName.includes("r") ? "." : "\\{",
      right: r.envName.includes("r") ? "\\}" : ".",
      rightColor: void 0
    };
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["align", "align*", "aligned", "split"],
  props: {
    numArgs: 0
  },
  handler: f1,
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["gathered", "gather", "gather*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    Gp.has(r.envName) && pa(r);
    var e = {
      cols: [{
        type: "align",
        align: "c"
      }],
      addJot: !0,
      colSeparationType: "gather",
      autoTag: eo(r.envName),
      emptySingleRow: !0,
      leqno: r.parser.settings.leqno
    };
    return zn(r.parser, e, "display");
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["alignat", "alignat*", "alignedat"],
  props: {
    numArgs: 1
  },
  handler: f1,
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["equation", "equation*"],
  props: {
    numArgs: 0
  },
  handler(r) {
    pa(r);
    var e = {
      autoTag: eo(r.envName),
      emptySingleRow: !0,
      singleRow: !0,
      maxNumCols: 1,
      leqno: r.parser.settings.leqno
    };
    return zn(r.parser, e, "display");
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
Hr({
  type: "array",
  names: ["CD"],
  props: {
    numArgs: 0
  },
  handler(r) {
    return pa(r), Np(r.parser);
  },
  htmlBuilder: qr,
  mathmlBuilder: Wr
});
g("\\nonumber", "\\gdef\\@eqnsw{0}");
g("\\notag", "\\nonumber");
de({
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
var Ul = d1;
de({
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
      throw new X("Invalid environment name", i);
    for (var a = "", s = 0; s < i.body.length; ++s)
      a += Be(i.body[s], "textord").text;
    if (n === "\\begin") {
      if (!Ul.hasOwnProperty(a))
        throw new X("No such environment: " + a, i);
      var o = Ul[a], {
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
        throw new X("Mismatch: \\begin{" + a + "} matched by \\end{" + v.name + "}", m);
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
var Kp = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return Xe(r.body, n);
}, Zp = (r, e) => {
  var t = r.font, n = e.withFont(t);
  return ot(r.body, n);
}, Gl = {
  "\\Bbb": "\\mathbb",
  "\\bold": "\\mathbf",
  "\\frak": "\\mathfrak"
};
de({
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
    } = r, i = Zi(e[0]), a = n in Gl ? Gl[n] : n;
    return {
      type: "font",
      mode: t.mode,
      font: a.slice(1),
      body: i
    };
  },
  htmlBuilder: Kp,
  mathmlBuilder: Zp
});
de({
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
      mclass: ha(n),
      body: [{
        type: "font",
        mode: t.mode,
        font: "boldsymbol",
        body: n
      }],
      isCharacterBox: on(n)
    };
  }
});
de({
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
var Xp = (r, e) => {
  var t = e.style, n = t.fracNum(), i = t.fracDen(), a;
  a = e.havingStyle(n);
  var s = Xe(r.numer, a, e);
  if (r.continued) {
    var o = 8.5 / e.fontMetrics().ptPerEm, l = 3.5 / e.fontMetrics().ptPerEm;
    s.height = s.height < o ? o : s.height, s.depth = s.depth < l ? l : s.depth;
  }
  a = e.havingStyle(i);
  var d = Xe(r.denom, a, e), h, f, m;
  r.hasBarLine ? (r.barSize ? (f = wt(r.barSize, e), h = T0("frac-line", e, f)) : h = T0("frac-line", e), f = h.height, m = h.height) : (h = null, f = 0, m = e.fontMetrics().defaultRuleThickness);
  var v, y, I;
  t.size === Ie.DISPLAY.size ? (v = e.fontMetrics().num1, f > 0 ? y = 3 * m : y = 7 * m, I = e.fontMetrics().denom1) : (f > 0 ? (v = e.fontMetrics().num2, y = m) : (v = e.fontMetrics().num3, y = 3 * m), I = e.fontMetrics().denom2);
  var $;
  if (h) {
    var R = e.fontMetrics().axisHeight;
    v - s.depth - (R + 0.5 * f) < y && (v += y - (v - s.depth - (R + 0.5 * f))), R - 0.5 * f - (d.height - I) < y && (I += y - (R - 0.5 * f - (d.height - I)));
    var W = -(R - 0.5 * f);
    $ = Ze({
      positionType: "individualShift",
      children: [{
        type: "elem",
        elem: d,
        shift: I
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
    var E = v - s.depth - (d.height - I);
    E < y && (v += 0.5 * (y - E), I += 0.5 * (y - E)), $ = Ze({
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
  a = e.havingStyle(t), $.height *= a.sizeMultiplier / e.sizeMultiplier, $.depth *= a.sizeMultiplier / e.sizeMultiplier;
  var Z;
  t.size === Ie.DISPLAY.size ? Z = e.fontMetrics().delim1 : t.size === Ie.SCRIPTSCRIPT.size ? Z = e.havingStyle(Ie.SCRIPT).fontMetrics().delim2 : Z = e.fontMetrics().delim2;
  var Y, N;
  return r.leftDelim == null ? Y = ei(e, ["mopen"]) : Y = bs(r.leftDelim, Z, !0, e.havingStyle(t), r.mode, ["mopen"]), r.continued ? N = j([]) : r.rightDelim == null ? N = ei(e, ["mclose"]) : N = bs(r.rightDelim, Z, !0, e.havingStyle(t), r.mode, ["mclose"]), j(["mord"].concat(a.sizingClasses(e)), [Y, j(["mfrac"], [$]), N], e);
}, Jp = (r, e) => {
  var t = new J("mfrac", [ot(r.numer, e), ot(r.denom, e)]);
  if (!r.hasBarLine)
    t.setAttribute("linethickness", "0px");
  else if (r.barSize) {
    var n = wt(r.barSize, e);
    t.setAttribute("linethickness", Q(n));
  }
  if (r.leftDelim != null || r.rightDelim != null) {
    var i = [];
    if (r.leftDelim != null) {
      var a = new J("mo", [new Ct(r.leftDelim.replace("\\", ""))]);
      a.setAttribute("fence", "true"), i.push(a);
    }
    if (i.push(t), r.rightDelim != null) {
      var s = new J("mo", [new Ct(r.rightDelim.replace("\\", ""))]);
      s.setAttribute("fence", "true"), i.push(s);
    }
    return Js(i);
  }
  return t;
}, p1 = (r, e) => {
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
de({
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
    return d || n.startsWith("\\d") ? h = "display" : n.startsWith("\\t") && (h = "text"), p1({
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
  htmlBuilder: Xp,
  mathmlBuilder: Jp
});
de({
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
var jl = ["display", "text", "script", "scriptscript"], Kl = function(e) {
  var t = null;
  return e.length > 0 && (t = e, t = t === "." ? null : t), t;
};
de({
  type: "genfrac",
  names: ["\\genfrac"],
  numArgs: 6,
  allowedInArgument: !0,
  argTypes: ["math", "math", "size", "text", "math", "math"],
  handler(r, e) {
    var {
      parser: t
    } = r, n = e[4], i = e[5], a = Zi(e[0]), s = a.type === "atom" && a.family === "open" ? Kl(a.text) : null, o = Zi(e[1]), l = o.type === "atom" && o.family === "close" ? Kl(o.text) : null, d = Be(e[2], "size"), h, f = null;
    d.isBlank ? h = !0 : (f = d.value, h = f.number > 0);
    var m = null, v = e[3];
    if (v.type === "ordgroup") {
      if (v.body.length > 0) {
        var y = Be(v.body[0], "textord");
        m = jl[Number(y.text)];
      }
    } else
      v = Be(v, "textord"), m = jl[Number(v.text)];
    return p1({
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
de({
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
de({
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
var m1 = (r, e) => {
  var t = e.style, n, i;
  r.type === "supsub" ? (n = r.sup ? Xe(r.sup, e.havingStyle(t.sup()), e) : Xe(r.sub, e.havingStyle(t.sub()), e), i = Be(r.base, "horizBrace")) : i = Be(r, "horizBrace");
  var a = Xe(i.base, e.havingBaseStyle(Ie.DISPLAY)), s = ca(i, e), o;
  if (i.isOver ? o = Ze({
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
  }) : o = Ze({
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
    var l = j(["minner", i.isOver ? "mover" : "munder"], [o], e);
    i.isOver ? o = Ze({
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
  return j(["minner", i.isOver ? "mover" : "munder"], [o], e);
}, Yp = (r, e) => {
  var t = la(r.label);
  return new J(r.isOver ? "mover" : "munder", [ot(r.base, e), t]);
};
de({
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
  htmlBuilder: m1,
  mathmlBuilder: Yp
});
de({
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
    var t = It(r.body, e, !1);
    return rp(r.href, [], t, e);
  },
  mathmlBuilder: (r, e) => {
    var t = Nn(r.body, e);
    return t instanceof J || (t = new J("mrow", [t])), t.setAttribute("href", r.href), t;
  }
});
de({
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
de({
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
    var t = It(r.body, e.withFont(""), !1);
    return cn(t);
  },
  mathmlBuilder(r, e) {
    return new J("mrow", sr(r.body, e.withFont("")));
  }
});
de({
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
            throw new X("\\htmlData key/value '" + f + "' missing equals sign");
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
      body: _t(s)
    } : t.formatUnsupportedCmd(n);
  },
  htmlBuilder: (r, e) => {
    var t = It(r.body, e, !1), n = ["enclosing"];
    r.attributes.class && n.push(...r.attributes.class.trim().split(/\s+/));
    var i = j(n, t, e);
    for (var a in r.attributes)
      a !== "class" && r.attributes.hasOwnProperty(a) && i.setAttribute(a, r.attributes[a]);
    return i;
  },
  mathmlBuilder: (r, e) => Nn(r.body, e)
});
de({
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
    var t = It(r.html, e, !1);
    return cn(t);
  },
  mathmlBuilder: (r, e) => Nn(r.mathml, e)
});
var Oa = function(e) {
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
  if (!Lu(n))
    throw new X("Invalid unit: '" + n.unit + "' in \\includegraphics.");
  return n;
};
de({
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
              i = Oa(m);
              break;
            case "height":
              a = Oa(m);
              break;
            case "totalheight":
              s = Oa(m);
              break;
            default:
              throw new X("Invalid key: '" + f[0] + "' in \\includegraphics.");
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
    var t = wt(r.height, e), n = 0;
    r.totalheight.number > 0 && (n = wt(r.totalheight, e) - t);
    var i = 0;
    r.width.number > 0 && (i = wt(r.width, e));
    var a = {
      height: Q(t + n)
    };
    i > 0 && (a.width = Q(i)), n > 0 && (a.verticalAlign = Q(-n));
    var s = new Wf(r.src, r.alt, a);
    return s.height = t, s.depth = n, s;
  },
  mathmlBuilder: (r, e) => {
    var t = new J("mglyph", []);
    t.setAttribute("alt", r.alt);
    var n = wt(r.height, e), i = 0;
    if (r.totalheight.number > 0 && (i = wt(r.totalheight, e) - n, t.setAttribute("valign", Q(-i))), t.setAttribute("height", Q(n + i)), r.width.number > 0) {
      var a = wt(r.width, e);
      t.setAttribute("width", Q(a));
    }
    return t.setAttribute("src", r.src), t;
  }
});
de({
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
    return Wu(r.dimension, e);
  },
  mathmlBuilder(r, e) {
    var t = wt(r.dimension, e);
    return new Xu(t);
  }
});
de({
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
    r.alignment === "clap" ? (t = j([], [Xe(r.body, e)]), t = j(["inner"], [t], e)) : t = j(["inner"], [Xe(r.body, e)]);
    var n = j(["fix"], []), i = j([r.alignment], [t, n], e), a = j(["strut"]);
    return a.style.height = Q(i.height + i.depth), i.depth && (a.style.verticalAlign = Q(-i.depth)), i.children.unshift(a), i = j(["thinbox"], [i], e), j(["mord", "vbox"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new J("mpadded", [ot(r.body, e)]);
    if (r.alignment !== "rlap") {
      var n = r.alignment === "llap" ? "-1" : "-0.5";
      t.setAttribute("lspace", n + "width");
    }
    return t.setAttribute("width", "0px"), t;
  }
});
de({
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
de({
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
var Zl = (r, e) => {
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
de({
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
    var t = Zl(r, e), n = It(t, e, !1);
    return cn(n);
  },
  mathmlBuilder: (r, e) => {
    var t = Zl(r, e);
    return Nn(t, e);
  }
});
var g1 = (r, e, t, n, i, a, s) => {
  r = j([], [r]);
  var o = t && on(t), l, d;
  if (e) {
    var h = Xe(e, n.havingStyle(i.sup()), n);
    d = {
      elem: h,
      kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - h.depth)
    };
  }
  if (t) {
    var f = Xe(t, n.havingStyle(i.sub()), n);
    l = {
      elem: f,
      kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - f.height)
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
        marginLeft: Q(-a)
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
        marginLeft: Q(a)
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
        marginLeft: Q(-a)
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
    m = Ze({
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
        marginLeft: Q(a)
      }, {
        type: "kern",
        size: n.fontMetrics().bigOpSpacing5
      }]
    });
  } else
    return r;
  var $ = [m];
  if (l && a !== 0 && !o) {
    var E = j(["mspace"], [], n);
    E.style.marginRight = Q(a), $.unshift(E);
  }
  return j(["mop", "op-limits"], $, n);
}, b1 = /* @__PURE__ */ new Set(["\\smallint"]), v1 = (r, e) => {
  var t, n, i = !1, a;
  r.type === "supsub" ? (t = r.sup, n = r.sub, a = Be(r.base, "op"), i = !0) : a = Be(r, "op");
  var s = e.style, o = !1;
  s.size === Ie.DISPLAY.size && a.symbol && !b1.has(a.name) && (o = !0);
  var l, d;
  if (a.symbol) {
    var h = o ? "Size2-Regular" : "Size1-Regular", f = "";
    if ((a.name === "\\oiint" || a.name === "\\oiiint") && (f = a.name.slice(1), a.name = f === "oiint" ? "\\iint" : "\\iiint"), l = qt(a.name, h, "math", e, ["mop", "op-symbol", o ? "large-op" : "small-op"]), d = l.italic, f.length > 0) {
      var m = Gu(f + "Size" + (o ? "2" : "1"), e);
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
      }), a.name = "\\" + f, l.classes.unshift("mop"), l.italic = d;
    }
  } else if (a.body) {
    var v = It(a.body, e, !0);
    v.length === 1 && v[0] instanceof nr ? (l = v[0], l.classes[0] = "mop") : l = j(["mop"], v, e);
  } else {
    for (var y = [], I = 1; I < a.name.length; I++)
      y.push(Zs(a.name[I], a.mode, e));
    l = j(["mop"], y, e);
  }
  var $ = 0, E = 0;
  if ((l instanceof nr || a.name === "\\oiint" || a.name === "\\oiiint") && !a.suppressBaseShift) {
    var R;
    $ = (l.height - l.depth) / 2 - e.fontMetrics().axisHeight, E = (R = l.italic) != null ? R : 0;
  }
  return i ? g1(l, t, n, e, s, E, $) : ($ && (l.style.position = "relative", l.style.top = Q($)), l);
}, Qp = (r, e) => {
  var t;
  if (r.symbol)
    t = new J("mo", [fr(r.name, r.mode)]), b1.has(r.name) && t.setAttribute("largeop", "false");
  else if (r.body)
    t = new J("mo", sr(r.body, e));
  else {
    t = new J("mi", [new Ct(r.name.slice(1))]);
    var n = new J("mo", [fr("⁡", "text")]);
    r.parentIsSupSub ? t = new J("mrow", [t, n]) : t = Zu([t, n]);
  }
  return t;
}, e4 = {
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
de({
  type: "op",
  names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "∏", "∐", "∑", "⋀", "⋁", "⋂", "⋃", "⨀", "⨁", "⨂", "⨄", "⨆"],
  numArgs: 0,
  handler: (r, e) => {
    var {
      parser: t,
      funcName: n
    } = r, i = n;
    return i.length === 1 && (i = e4[i]), {
      type: "op",
      mode: t.mode,
      limits: !0,
      parentIsSupSub: !1,
      symbol: !0,
      name: i
    };
  },
  htmlBuilder: v1,
  mathmlBuilder: Qp
});
de({
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
var t4 = {
  "∫": "\\int",
  "∬": "\\iint",
  "∭": "\\iiint",
  "∮": "\\oint",
  "∯": "\\oiint",
  "∰": "\\oiiint"
};
de({
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
de({
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
de({
  type: "op",
  names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "∫", "∬", "∭", "∮", "∯", "∰"],
  numArgs: 0,
  allowedInArgument: !0,
  handler(r) {
    var {
      parser: e,
      funcName: t
    } = r, n = t;
    return n.length === 1 && (n = t4[n]), {
      type: "op",
      mode: e.mode,
      limits: !1,
      parentIsSupSub: !1,
      symbol: !0,
      name: n
    };
  }
});
var w1 = (r, e) => {
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
    }), l = It(o, e.withFont("mathrm"), !0), d = 0; d < l.length; d++) {
      var h = l[d];
      h instanceof nr && (h.text = h.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
    }
    s = j(["mop"], l, e);
  } else
    s = j(["mop"], [], e);
  return i ? g1(s, t, n, e, e.style, 0, 0) : s;
}, r4 = (r, e) => {
  for (var t = sr(r.body, e.withFont("mathrm")), n = !0, i = 0; i < t.length; i++) {
    var a = t[i];
    if (!(a instanceof Xu)) if (a instanceof J)
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
  var l = new J("mi", t);
  l.setAttribute("mathvariant", "normal");
  var d = new J("mo", [fr("⁡", "text")]);
  return r.parentIsSupSub ? new J("mrow", [l, d]) : Zu([l, d]);
};
de({
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
  htmlBuilder: w1,
  mathmlBuilder: r4
});
g("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
n0({
  type: "ordgroup",
  htmlBuilder(r, e) {
    return r.semisimple ? cn(It(r.body, e, !1)) : j(["mord"], It(r.body, e, !0), e);
  },
  mathmlBuilder(r, e) {
    return Nn(r.body, e, !0);
  }
});
de({
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
    var t = Xe(r.body, e.havingCrampedStyle()), n = T0("overline-line", e), i = e.fontMetrics().defaultRuleThickness, a = Ze({
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
    return j(["mord", "overline"], [a], e);
  },
  mathmlBuilder(r, e) {
    var t = new J("mo", [new Ct("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new J("mover", [ot(r.body, e), t]);
    return n.setAttribute("accent", "true"), n;
  }
});
de({
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
    var t = It(r.body, e.withPhantom(), !1);
    return cn(t);
  },
  mathmlBuilder: (r, e) => {
    var t = sr(r.body, e);
    return new J("mphantom", t);
  }
});
g("\\hphantom", "\\smash{\\phantom{#1}}");
de({
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
    var t = j(["inner"], [Xe(r.body, e.withPhantom())]), n = j(["fix"], []);
    return j(["mord", "rlap"], [t, n], e);
  },
  mathmlBuilder: (r, e) => {
    var t = sr(_t(r.body), e), n = new J("mphantom", t), i = new J("mpadded", [n]);
    return i.setAttribute("width", "0px"), i;
  }
});
de({
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
    var t = Xe(r.body, e), n = wt(r.dy, e);
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
    var t = new J("mpadded", [ot(r.body, e)]), n = r.dy.number + r.dy.unit;
    return t.setAttribute("voffset", n), t;
  }
});
de({
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
de({
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
    var t = j(["mord", "rule"], [], e), n = wt(r.width, e), i = wt(r.height, e), a = r.shift ? wt(r.shift, e) : 0;
    return t.style.borderRightWidth = Q(n), t.style.borderTopWidth = Q(i), t.style.bottom = Q(a), t.width = n, t.height = i + a, t.depth = -a, t.maxFontSize = i * 1.125 * e.sizeMultiplier, t;
  },
  mathmlBuilder(r, e) {
    var t = wt(r.width, e), n = wt(r.height, e), i = r.shift ? wt(r.shift, e) : 0, a = e.color && e.getColor() || "black", s = new J("mspace");
    s.setAttribute("mathbackground", a), s.setAttribute("width", Q(t)), s.setAttribute("height", Q(n));
    var o = new J("mpadded", [s]);
    return i >= 0 ? o.setAttribute("height", Q(i)) : (o.setAttribute("height", Q(i)), o.setAttribute("depth", Q(-i))), o.setAttribute("voffset", Q(i)), o;
  }
});
function x1(r, e, t) {
  for (var n = It(r, e, !1), i = e.sizeMultiplier / t.sizeMultiplier, a = 0; a < n.length; a++) {
    var s = n[a].classes.indexOf("sizing");
    s < 0 ? Array.prototype.push.apply(n[a].classes, e.sizingClasses(t)) : n[a].classes[s + 1] === "reset-size" + e.size && (n[a].classes[s + 1] = "reset-size" + t.size), n[a].height *= i, n[a].depth *= i;
  }
  return cn(n);
}
var Xl = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"], n4 = (r, e) => {
  var t = e.havingSize(r.size);
  return x1(r.body, t, e);
};
de({
  type: "sizing",
  names: Xl,
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
      size: Xl.indexOf(n) + 1,
      body: a
    };
  },
  htmlBuilder: n4,
  mathmlBuilder: (r, e) => {
    var t = e.havingSize(r.size), n = sr(r.body, t), i = new J("mstyle", n);
    return i.setAttribute("mathsize", Q(t.sizeMultiplier)), i;
  }
});
de({
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
        if (o = ua(d).text, o === "t")
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
    var t = j([], [Xe(r.body, e)]);
    if (!r.smashHeight && !r.smashDepth)
      return t;
    if (r.smashHeight && (t.height = 0), r.smashDepth && (t.depth = 0), r.smashHeight && r.smashDepth)
      return j(["mord", "smash"], [t], e);
    if (t.children)
      for (var n = 0; n < t.children.length; n++)
        r.smashHeight && (t.children[n].height = 0), r.smashDepth && (t.children[n].depth = 0);
    var i = Ze({
      positionType: "firstBaseline",
      children: [{
        type: "elem",
        elem: t
      }]
    });
    return j(["mord"], [i], e);
  },
  mathmlBuilder: (r, e) => {
    var t = new J("mpadded", [ot(r.body, e)]);
    return r.smashHeight && t.setAttribute("height", "0px"), r.smashDepth && t.setAttribute("depth", "0px"), t;
  }
});
de({
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
    var t = Xe(r.body, e.havingCrampedStyle());
    t.height === 0 && (t.height = e.fontMetrics().xHeight), t = I0(t, e);
    var n = e.fontMetrics(), i = n.defaultRuleThickness, a = i;
    e.style.id < Ie.TEXT.id && (a = e.fontMetrics().xHeight);
    var s = i + a / 4, o = t.height + t.depth + s + i, {
      span: l,
      ruleWidth: d,
      advanceWidth: h
    } = Lp(o, e), f = l.height - d;
    f > t.height + t.depth + s && (s = (s + f - t.height - t.depth) / 2);
    var m = l.height - t.height - s - d;
    t.style.paddingLeft = Q(h);
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
      var y = e.havingStyle(Ie.SCRIPTSCRIPT), I = Xe(r.index, y, e), $ = 0.6 * (v.height - v.depth), E = Ze({
        positionType: "shift",
        positionData: -$,
        children: [{
          type: "elem",
          elem: I
        }]
      }), R = j(["root"], [E]);
      return j(["mord", "sqrt"], [R, v], e);
    } else
      return j(["mord", "sqrt"], [v], e);
  },
  mathmlBuilder(r, e) {
    var {
      body: t,
      index: n
    } = r;
    return n ? new J("mroot", [ot(t, e), ot(n, e)]) : new J("msqrt", [ot(t, e)]);
  }
});
var vs = {
  display: Ie.DISPLAY,
  text: Ie.TEXT,
  script: Ie.SCRIPT,
  scriptscript: Ie.SCRIPTSCRIPT
};
function i4(r) {
  return r in vs;
}
de({
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
    if (!i4(s))
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
    var t = vs[r.style], n = e.havingStyle(t);
    return r.resetFont && (n = n.withFont("")), x1(r.body, n, e);
  },
  mathmlBuilder(r, e) {
    var t = vs[r.style], n = e.havingStyle(t);
    r.resetFont && (n = n.withFont(""));
    var i = sr(r.body, n), a = new J("mstyle", i), s = {
      display: ["0", "true"],
      text: ["0", "false"],
      script: ["1", "false"],
      scriptscript: ["2", "false"]
    }, o = s[r.style];
    return a.setAttribute("scriptlevel", o[0]), a.setAttribute("displaystyle", o[1]), a;
  }
});
var a4 = function(e, t) {
  var n = e.base;
  if (n)
    if (n.type === "op") {
      var i = n.limits && (t.style.size === Ie.DISPLAY.size || n.alwaysHandleSupSub);
      return i ? v1 : null;
    } else if (n.type === "operatorname") {
      var a = n.alwaysHandleSupSub && (t.style.size === Ie.DISPLAY.size || n.limits);
      return a ? w1 : null;
    } else {
      if (n.type === "accent")
        return on(n.base) ? e1 : null;
      if (n.type === "horizBrace") {
        var s = !e.sub;
        return s === n.isOver ? m1 : null;
      } else
        return null;
    }
  else return null;
};
n0({
  type: "supsub",
  htmlBuilder(r, e) {
    var t = a4(r, e);
    if (t)
      return t(r, e);
    var {
      base: n,
      sup: i,
      sub: a
    } = r, s = Xe(n, e), o, l, d = e.fontMetrics(), h = 0, f = 0, m = n && on(n);
    if (i) {
      var v = e.havingStyle(e.style.sup());
      o = Xe(i, v, e), m || (h = s.height - v.fontMetrics().supDrop * v.sizeMultiplier / e.sizeMultiplier);
    }
    if (a) {
      var y = e.havingStyle(e.style.sub());
      l = Xe(a, y, e), m || (f = s.depth + y.fontMetrics().subDrop * y.sizeMultiplier / e.sizeMultiplier);
    }
    var I;
    e.style === Ie.DISPLAY ? I = d.sup1 : e.style.cramped ? I = d.sup3 : I = d.sup2;
    var $ = e.sizeMultiplier, E = Q(0.5 / d.ptPerEm / $), R = null;
    if (l) {
      var W = r.base && r.base.type === "op" && r.base.name && (r.base.name === "\\oiint" || r.base.name === "\\oiiint");
      if (s instanceof nr || W) {
        var Z;
        R = Q(-((Z = s.italic) != null ? Z : 0));
      }
    }
    var Y;
    if (o && l) {
      h = Math.max(h, I, o.depth + 0.25 * d.xHeight), f = Math.max(f, d.sub2);
      var N = d.defaultRuleThickness, ce = 4 * N;
      if (h - o.depth - (l.height - f) < ce) {
        f = ce - (h - o.depth) + l.height;
        var ue = 0.8 * d.xHeight - (h - o.depth);
        ue > 0 && (h += ue, f -= ue);
      }
      var P = [{
        type: "elem",
        elem: l,
        shift: f,
        marginRight: E,
        marginLeft: R
      }, {
        type: "elem",
        elem: o,
        shift: -h,
        marginRight: E
      }];
      Y = Ze({
        positionType: "individualShift",
        children: P
      });
    } else if (l) {
      f = Math.max(f, d.sub1, l.height - 0.8 * d.xHeight);
      var ge = [{
        type: "elem",
        elem: l,
        marginLeft: R,
        marginRight: E
      }];
      Y = Ze({
        positionType: "shift",
        positionData: f,
        children: ge
      });
    } else if (o)
      h = Math.max(h, I, o.depth + 0.25 * d.xHeight), Y = Ze({
        positionType: "shift",
        positionData: -h,
        children: [{
          type: "elem",
          elem: o,
          marginRight: E
        }]
      });
    else
      throw new Error("supsub must have either sup or sub.");
    var Ne = fs(s, "right") || "mord";
    return j([Ne], [s, j(["msupsub"], [Y])], e);
  },
  mathmlBuilder(r, e) {
    var t = !1, n, i;
    r.base && r.base.type === "horizBrace" && (i = !!r.sup, i === r.base.isOver && (t = !0, n = r.base.isOver)), r.base && (r.base.type === "op" || r.base.type === "operatorname") && (r.base.parentIsSupSub = !0);
    var a = [ot(r.base, e)];
    r.sub && a.push(ot(r.sub, e)), r.sup && a.push(ot(r.sup, e));
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
    return new J(s, a);
  }
});
n0({
  type: "atom",
  htmlBuilder(r, e) {
    return Zs(r.text, r.mode, e, ["m" + r.family]);
  },
  mathmlBuilder(r, e) {
    var t = new J("mo", [fr(r.text, r.mode)]);
    if (r.family === "bin") {
      var n = Ys(r, e);
      n === "bold-italic" && t.setAttribute("mathvariant", n);
    } else r.family === "punct" ? t.setAttribute("separator", "true") : (r.family === "open" || r.family === "close") && t.setAttribute("stretchy", "false");
    return t;
  }
});
var y1 = {
  mi: "italic",
  mn: "normal",
  mtext: "normal"
};
n0({
  type: "mathord",
  htmlBuilder(r, e) {
    return oa(r, e);
  },
  mathmlBuilder(r, e) {
    var t = new J("mi", [fr(r.text, r.mode, e)]), n = Ys(r, e) || "italic";
    return n !== y1[t.type] && t.setAttribute("mathvariant", n), t;
  }
});
n0({
  type: "textord",
  htmlBuilder(r, e) {
    return oa(r, e);
  },
  mathmlBuilder(r, e) {
    var t = fr(r.text, r.mode, e), n = Ys(r, e) || "normal", i;
    return r.mode === "text" ? i = new J("mtext", [t]) : /[0-9]/.test(r.text) ? i = new J("mn", [t]) : r.text === "\\prime" ? i = new J("mo", [t]) : i = new J("mi", [t]), n !== y1[i.type] && i.setAttribute("mathvariant", n), i;
  }
});
var Ba = {
  "\\nobreak": "nobreak",
  "\\allowbreak": "allowbreak"
}, Da = {
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
n0({
  type: "spacing",
  htmlBuilder(r, e) {
    if (Da.hasOwnProperty(r.text)) {
      var t = Da[r.text].className || "";
      if (r.mode === "text") {
        var n = oa(r, e);
        return n.classes.push(t), n;
      } else
        return j(["mspace", t], [Zs(r.text, r.mode, e)], e);
    } else {
      if (Ba.hasOwnProperty(r.text))
        return j(["mspace", Ba[r.text]], [], e);
      throw new X('Unknown type of space "' + r.text + '"');
    }
  },
  mathmlBuilder(r, e) {
    var t;
    if (Da.hasOwnProperty(r.text))
      t = new J("mtext", [new Ct(" ")]);
    else {
      if (Ba.hasOwnProperty(r.text))
        return new J("mspace");
      throw new X('Unknown type of space "' + r.text + '"');
    }
    return t;
  }
});
var Jl = () => {
  var r = new J("mtd", []);
  return r.setAttribute("width", "50%"), r;
};
n0({
  type: "tag",
  mathmlBuilder(r, e) {
    var t = new J("mtable", [new J("mtr", [Jl(), new J("mtd", [Nn(r.body, e)]), Jl(), new J("mtd", [Nn(r.tag, e)])])]);
    return t.setAttribute("width", "100%"), t;
  }
});
var Yl = {
  "\\text": void 0,
  "\\textrm": "textrm",
  "\\textsf": "textsf",
  "\\texttt": "texttt",
  "\\textnormal": "textrm"
}, Ql = {
  "\\textbf": "textbf",
  "\\textmd": "textmd"
}, s4 = {
  "\\textit": "textit",
  "\\textup": "textup"
}, ec = (r, e) => {
  var t = r.font;
  if (t) {
    if (Yl[t])
      return e.withTextFontFamily(Yl[t]);
    if (Ql[t])
      return e.withTextFontWeight(Ql[t]);
    if (t === "\\emph")
      return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
  } else return e;
  return e.withTextFontShape(s4[t]);
};
de({
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
    var t = ec(r, e), n = It(r.body, t, !0);
    return j(["mord", "text"], n, t);
  },
  mathmlBuilder(r, e) {
    var t = ec(r, e);
    return Nn(r.body, t);
  }
});
de({
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
    var t = Xe(r.body, e), n = T0("underline-line", e), i = e.fontMetrics().defaultRuleThickness, a = Ze({
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
    return j(["mord", "underline"], [a], e);
  },
  mathmlBuilder(r, e) {
    var t = new J("mo", [new Ct("‾")]);
    t.setAttribute("stretchy", "true");
    var n = new J("munder", [ot(r.body, e), t]);
    return n.setAttribute("accentunder", "true"), n;
  }
});
de({
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
    var t = Xe(r.body, e), n = e.fontMetrics().axisHeight, i = 0.5 * (t.height - n - (t.depth + n));
    return Ze({
      positionType: "shift",
      positionData: i,
      children: [{
        type: "elem",
        elem: t
      }]
    });
  },
  mathmlBuilder(r, e) {
    var t = new J("mpadded", [ot(r.body, e)], ["vcenter"]);
    return new J("mrow", [t]);
  }
});
de({
  type: "verb",
  names: ["\\verb"],
  numArgs: 0,
  allowedInText: !0,
  handler(r, e, t) {
    throw new X("\\verb ended by end of line instead of matching delimiter");
  },
  htmlBuilder(r, e) {
    for (var t = tc(r), n = [], i = e.havingStyle(e.style.text()), a = 0; a < t.length; a++) {
      var s = t[a];
      s === "~" && (s = "\\textasciitilde"), n.push(qt(s, "Typewriter-Regular", r.mode, i, ["mord", "texttt"]));
    }
    return j(["mord", "text"].concat(i.sizingClasses(e)), qu(n), i);
  },
  mathmlBuilder(r, e) {
    var t = new Ct(tc(r)), n = new J("mtext", [t]);
    return n.setAttribute("mathvariant", "monospace"), n;
  }
});
var tc = (r) => r.body.replace(/ /g, r.star ? "␣" : " "), Cn = ju, k1 = `[ \r
	]`, o4 = "\\\\[a-zA-Z@]+", l4 = "\\\\[^\uD800-\uDFFF]", c4 = "(" + o4 + ")" + k1 + "*", u4 = `\\\\(
|[ \r	]+
?)[ \r	]*`, ws = "[̀-ͯ]", d4 = new RegExp(ws + "+$"), h4 = "(" + k1 + "+)|" + // whitespace
(u4 + "|") + // \whitespace
"([!-\\[\\]-‧‪-퟿豈-￿]" + // single codepoint
(ws + "*") + // ...plus accents
"|[\uD800-\uDBFF][\uDC00-\uDFFF]" + // surrogate pair
(ws + "*") + // ...plus accents
"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + // \verb unstarred
("|" + c4) + // \macroName + spaces
("|" + l4 + ")");
class rc {
  constructor(e, t) {
    this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp(h4, "g"), this.catcodes = {
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
      return new rr("EOF", new Yt(this, t, t));
    var n = this.tokenRegex.exec(e);
    if (n === null || n.index !== t)
      throw new X("Unexpected character: '" + e[t] + "'", new rr(e[t], new Yt(this, t, t + 1)));
    var i = n[6] || n[3] || (n[2] ? "\\ " : " ");
    if (this.catcodes[i] === 14) {
      var a = e.indexOf(`
`, this.tokenRegex.lastIndex);
      return a === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = a + 1, this.lex();
    }
    return new rr(i, new Yt(this, t, this.tokenRegex.lastIndex));
  }
}
class f4 {
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
var p4 = h1;
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
var nc = {
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
    if (n = nc[e.text], n == null || n >= t)
      throw new X("Invalid base-" + t + " digit " + e.text);
    for (var i; (i = nc[r.future().text]) != null && i < t; )
      n *= t, n += i, r.popToken();
  }
  return "\\@char{" + n + "}";
});
var ro = (r, e, t, n) => {
  var i = r.consumeArg().tokens;
  if (i.length !== 1)
    throw new X("\\newcommand's first argument must be a macro name");
  var a = i[0].text, s = r.isDefined(a);
  if (s && !e)
    throw new X("\\newcommand{" + a + "} attempting to redefine " + (a + "; use \\renewcommand"));
  if (!s && !t)
    throw new X("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
  var o = 0;
  if (i = r.consumeArg().tokens, i.length === 1 && i[0].text === "[") {
    for (var l = "", d = r.expandNextToken(); d.text !== "]" && d.text !== "EOF"; )
      l += d.text, d = r.expandNextToken();
    if (!l.match(/^\s*[0-9]+\s*$/))
      throw new X("Invalid number of arguments: " + l);
    o = parseInt(l), i = r.consumeArg().tokens;
  }
  return s && n || r.macros.set(a, {
    tokens: i,
    numArgs: o
  }), "";
};
g("\\newcommand", (r) => ro(r, !1, !0, !1));
g("\\renewcommand", (r) => ro(r, !0, !1, !1));
g("\\providecommand", (r) => ro(r, !0, !0, !0));
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
  return console.log(e, r.macros.get(t), Cn[t], pt.math[t], pt.text[t]), "";
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
var ic = {
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
}, m4 = /* @__PURE__ */ new Set(["bin", "rel"]);
g("\\dots", function(r) {
  var e = "\\dotso", t = r.expandAfterFuture().text;
  return t in ic ? e = ic[t] : (t.slice(0, 4) === "\\not" || t in pt.math && m4.has(pt.math[t].group)) && (e = "\\dotsb"), e;
});
var no = {
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
  return e in no ? "\\ldots\\," : "\\ldots";
});
g("\\dotsc", function(r) {
  var e = r.future().text;
  return e in no && e !== "," ? "\\ldots\\," : "\\ldots";
});
g("\\cdots", function(r) {
  var e = r.future().text;
  return e in no ? "\\@cdots\\," : "\\@cdots";
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
var S1 = Q(Pr["Main-Regular"][84][1] - 0.7 * Pr["Main-Regular"][65][1]);
g("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + S1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
g("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + S1 + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
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
var _1 = (r) => (e) => {
  var t = e.consumeArg().tokens, n = e.consumeArg().tokens, i = e.consumeArg().tokens, a = e.consumeArg().tokens, s = e.macros.get("|"), o = e.macros.get("\\|");
  e.macros.beginGroup();
  var l = (f) => (m) => {
    r && (m.macros.set("|", s), i.length && m.macros.set("\\|", o));
    var v = f;
    if (!f && i.length) {
      var y = m.future();
      y.text === "|" && (m.popToken(), v = !0);
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
g("\\bra@ket", _1(!1));
g("\\bra@set", _1(!0));
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
var C1 = {
  "^": !0,
  // Parser.js
  _: !0,
  // Parser.js
  "\\limits": !0,
  // Parser.js
  "\\nolimits": !0
  // Parser.js
};
class g4 {
  constructor(e, t, n) {
    this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new f4(p4, t.macros), this.mode = n, this.stack = [];
  }
  /**
   * Feed a new input string to the same MacroExpander
   * (with existing macros etc.).
   */
  feed(e) {
    this.lexer = new rc(e, this.settings);
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
    return this.pushToken(new rr("EOF", n.loc)), this.pushTokens(i), new rr("", Yt.range(t, n));
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
          throw new X("Extra }", a);
      } else if (a.text === "EOF")
        throw new X("Unexpected end of input in a macro argument, expected '" + (e && n ? e[o] : "}") + "'", a);
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
        throw new X("The length of delimiters doesn't match the number of args!");
      for (var n = t[0], i = 0; i < n.length; i++) {
        var a = this.popToken();
        if (n[i] !== a.text)
          throw new X("Use of the macro doesn't match its definition", a);
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
    var t = this.popToken(), n = t.text, i = t.noexpand ? null : this._getExpansion(n);
    if (i == null || e && i.unexpandable) {
      if (e && i == null && n[0] === "\\" && !this.isDefined(n))
        throw new X("Undefined control sequence: " + n);
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
            throw new X("Incomplete placeholder at end of macro body", l);
          if (l = a[--o], l.text === "#")
            a.splice(o + 1, 1);
          else if (/^[1-9]$/.test(l.text))
            a.splice(o, 2, ...s[+l.text - 1]);
          else
            throw new X("Not a valid argument number", l);
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
      for (var o = new rc(i, this.settings), l = [], d = o.lex(); d.text !== "EOF"; )
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
    return this.macros.has(e) || Cn.hasOwnProperty(e) || pt.math.hasOwnProperty(e) || pt.text.hasOwnProperty(e) || C1.hasOwnProperty(e);
  }
  /**
   * Determine whether a command is expandable.
   */
  isExpandable(e) {
    var t = this.macros.get(e);
    return t != null ? typeof t == "string" || typeof t == "function" || !t.unexpandable : Cn.hasOwnProperty(e) && !Cn[e].primitive;
  }
}
var ac = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, $i = Object.freeze({
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
}), La = {
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
}, sc = {
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
class ma {
  constructor(e, t) {
    this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new g4(e, t, this.mode), this.settings = t, this.leftrightDepth = 0, this.nextToken = null;
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
      if (ma.endOfExpression.has(i.text) || t && i.text === t || e && Cn[i.text] && Cn[i.text].infix)
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
          throw new X("only one infix operator per group", a.token);
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
      throw new X("Expected group after '" + n + "'", t);
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
          throw new X("Limit controls must follow a math operator", a);
        this.consume();
      } else if (a.text === "^") {
        if (n)
          throw new X("Double superscript", a);
        n = this.handleSupSubscript("superscript");
      } else if (a.text === "_") {
        if (i)
          throw new X("Double subscript", a);
        i = this.handleSupSubscript("subscript");
      } else if (a.text === "'") {
        if (n)
          throw new X("Double superscript", a);
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
      } else if ($i[a.text]) {
        var l = ac.test(a.text), d = [];
        for (d.push(new rr($i[a.text])), this.consume(); ; ) {
          var h = this.fetch().text;
          if (!$i[h] || ac.test(h) !== l)
            break;
          d.unshift(new rr($i[h])), this.consume();
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
    var n = this.fetch(), i = n.text, a = Cn[i];
    if (!a)
      return null;
    if (this.consume(), t && t !== "atom" && !a.allowedInArgument)
      throw new X("Got function '" + i + "' with no arguments" + (t ? " as " + t : ""), n);
    if (this.mode === "text" && !a.allowedInText)
      throw new X("Can't use function '" + i + "' in text mode", n);
    if (this.mode === "math" && a.allowedInMath === !1)
      throw new X("Can't use function '" + i + "' in math mode", n);
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
    }, o = Cn[e];
    if (o && o.handler)
      return o.handler(s, t, n);
    throw new X("No function handler for " + e);
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
      throw new X("Invalid " + t + ": '" + n.text + "'", n);
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
      throw new X("Invalid color: '" + t.text + "'", t);
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
      throw new X("Invalid size: '" + t.text + "'", t);
    var a = {
      number: +(i[1] + i[2]),
      // sign + magnitude, cast to number
      unit: i[3]
    };
    if (!Lu(a))
      throw new X("Invalid unit: '" + a.unit + "'", t);
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
        loc: Yt.range(n, l),
        body: o,
        // A group formed by \begingroup...\endgroup is a semi-simple group
        // which doesn't affect spacing in math mode, i.e., is transparent.
        // https://tex.stackexchange.com/questions/1930/when-should-one-
        // use-begingroup-instead-of-bgroup
        semisimple: i === "\\begingroup" || void 0
      };
    } else if (a = this.parseFunction(t, e) || this.parseSymbol(), a == null && i[0] === "\\" && !C1.hasOwnProperty(i)) {
      if (this.settings.throwOnError)
        throw new X("Undefined control sequence: " + i, n);
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
              loc: Yt.range(i, o),
              text: "---"
            }), t -= 2) : (e.splice(n, 2, {
              type: "textord",
              mode: "text",
              loc: Yt.range(i, s),
              text: "--"
            }), t -= 1);
          }
          (a === "'" || a === "`") && s.text === a && (e.splice(n, 2, {
            type: "textord",
            mode: "text",
            loc: Yt.range(i, s),
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
        throw new X(`\\verb assertion failed --
                    please report what input caused this bug`);
      return n = n.slice(1, -1), {
        type: "verb",
        mode: "text",
        body: n,
        star: i
      };
    }
    sc.hasOwnProperty(t[0]) && !pt[this.mode][t[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = sc[t[0]] + t.slice(1));
    var a = d4.exec(t);
    a && (t = t.substring(0, a.index), t === "i" ? t = "ı" : t === "j" && (t = "ȷ"));
    var s;
    if (pt[this.mode][t]) {
      this.settings.strict && this.mode === "math" && as.includes(t) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
      var o = pt[this.mode][t].group, l = Yt.range(e), d;
      kp(o) ? d = {
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
      this.settings.strict && (Du(t.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '"' + (" (" + t.charCodeAt(0) + ")"), e)), s = {
        type: "textord",
        mode: "text",
        loc: Yt.range(e),
        text: t
      };
    else
      return null;
    if (this.consume(), a)
      for (var h = 0; h < a[0].length; h++) {
        var f = a[0][h];
        if (!La[f])
          throw new X("Unknown accent ' " + f + "'", e);
        var m = La[f][this.mode] || La[f].text;
        if (!m)
          throw new X("Accent " + f + " unsupported in " + this.mode + " mode", e);
        s = {
          type: "accent",
          mode: this.mode,
          loc: Yt.range(e),
          label: m,
          isStretchy: !1,
          isShifty: !0,
          base: s
        };
      }
    return s;
  }
}
ma.endOfExpression = /* @__PURE__ */ new Set(["}", "\\endgroup", "\\end", "\\right", "&"]);
var io = function(e, t) {
  if (!(typeof e == "string" || e instanceof String))
    throw new TypeError("KaTeX can only parse string typed expression");
  var n = new ma(e, t);
  delete n.gullet.macros.current["\\df@tag"];
  var i = n.parse();
  if (delete n.gullet.macros.current["\\current@color"], delete n.gullet.macros.current["\\color"], n.gullet.macros.get("\\df@tag")) {
    if (!t.displayMode)
      throw new X("\\tag works only in display equations");
    i = [{
      type: "tag",
      mode: "text",
      body: i,
      tag: n.subparse([new rr("\\df@tag")])
    }];
  }
  return i;
}, A1 = function(e, t, n) {
  t.textContent = "";
  var i = ao(e, n).toNode();
  t.appendChild(i);
};
typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), A1 = function() {
  throw new X("KaTeX doesn't work in quirks mode.");
});
var b4 = function(e, t) {
  var n = ao(e, t).toMarkup();
  return n;
}, v4 = function(e, t) {
  var n = new Us(t);
  return io(e, n);
}, $1 = function(e, t, n) {
  if (n.throwOnError || !(e instanceof X))
    throw e;
  var i = j(["katex-error"], [new nr(t)]);
  return i.setAttribute("title", e.toString()), i.setAttribute("style", "color:" + n.errorColor), i;
}, ao = function(e, t) {
  var n = new Us(t);
  try {
    var i = io(e, n);
    return pp(i, e, n);
  } catch (a) {
    return $1(a, e, n);
  }
}, w4 = function(e, t) {
  var n = new Us(t);
  try {
    var i = io(e, n);
    return mp(i, e, n);
  } catch (a) {
    return $1(a, e, n);
  }
}, x4 = "0.17.0", y4 = {
  Span: R0,
  Anchor: aa,
  SymbolNode: nr,
  SvgNode: an,
  PathNode: Tn,
  LineNode: is
}, k4 = {
  /**
   * Current KaTeX version
   */
  version: x4,
  /**
   * Renders the given LaTeX into an HTML+MathML combination, and adds
   * it as a child to the specified DOM node.
   */
  render: A1,
  /**
   * Renders the given LaTeX into an HTML+MathML combination string,
   * for sending to the client.
   */
  renderToString: b4,
  /**
   * KaTeX error, usually during parsing.
   */
  ParseError: X,
  /**
   * The schema of Settings
   */
  SETTINGS_SCHEMA: ts,
  /**
   * Parses the given LaTeX into KaTeX's internal parse tree structure,
   * without rendering to HTML or MathML.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __parse: v4,
  /**
   * Renders the given LaTeX into an HTML+MathML internal DOM tree
   * representation, without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToDomTree: ao,
  /**
   * Renders the given LaTeX into an HTML internal DOM tree representation,
   * without MathML and without flattening that representation to a string.
   *
   * NOTE: This method is not currently recommended for public use.
   * The internal tree representation is unstable and is very likely
   * to change. Use at your own risk.
   */
  __renderToHTMLTree: w4,
  /**
   * extends internal font metrics object with a new object
   * each key in the new object represents a font name
  */
  __setFontMetrics: Zf,
  /**
   * adds a new symbol to builtin symbols table
   */
  __defineSymbol: c,
  /**
   * adds a new function to builtin function list,
   * which directly produce parse tree elements
   * and have their own html/mathml builders
   */
  __defineFunction: de,
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
  __domTree: y4
};
const S4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1(?=[\s?!\.,:？！。，：]|$)/, _4 = /^(\${1,2})(?!\$)((?:\\.|[^\\\n])*?(?:\\.|[^\\\n\$]))\1/, C4 = /^(\${1,2})\n((?:\\[^]|[^\\])+?)\n\1(?:\n|$)/;
function A4(r = {}) {
  return {
    extensions: [
      $4(r, oc(r, !1)),
      T4(r, oc(r, !0))
    ]
  };
}
function oc(r, e) {
  return (t) => k4.renderToString(t.text, { ...r, displayMode: t.displayMode }) + (e ? `
` : "");
}
function $4(r, e) {
  const t = r && r.nonStandard, n = t ? _4 : S4;
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
function T4(r, e) {
  return {
    name: "blockKatex",
    level: "block",
    tokenizer(t, n) {
      const i = t.match(C4);
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
function I4(r) {
  if (typeof r == "function" && (r = {
    highlight: r
  }), !r || typeof r.highlight != "function")
    throw new Error("Must provide highlight function");
  return typeof r.langPrefix != "string" && (r.langPrefix = "language-"), typeof r.emptyLangClass != "string" && (r.emptyLangClass = ""), {
    async: !!r.async,
    walkTokens(e) {
      if (e.type !== "code")
        return;
      const t = lc(e.lang);
      if (r.async)
        return Promise.resolve(r.highlight(e.text, t, e.lang || "")).then(cc(e));
      const n = r.highlight(e.text, t, e.lang || "");
      if (n instanceof Promise)
        throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");
      cc(e)(n);
    },
    useNewRenderer: !0,
    renderer: {
      code(e, t, n) {
        typeof e == "object" && (n = e.escaped, t = e.lang, e = e.text);
        const i = lc(t), a = i ? r.langPrefix + dc(i) : r.emptyLangClass, s = a ? ` class="${a}"` : "";
        return e = e.replace(/\n$/, ""), `<pre><code${s}>${n ? e : dc(e, !0)}
</code></pre>`;
      }
    }
  };
}
function lc(r) {
  return (r || "").match(/\S*/)[0];
}
function cc(r) {
  return (e) => {
    typeof e == "string" && e !== r.text && (r.escaped = !0, r.text = e);
  };
}
const T1 = /[&<>"']/, N4 = new RegExp(T1.source, "g"), I1 = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, M4 = new RegExp(I1.source, "g"), E4 = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
}, uc = (r) => E4[r];
function dc(r, e) {
  if (e) {
    if (T1.test(r))
      return r.replace(N4, uc);
  } else if (I1.test(r))
    return r.replace(M4, uc);
  return r;
}
var Fa, hc;
function z4() {
  if (hc) return Fa;
  hc = 1;
  function r(k) {
    return k instanceof Map ? k.clear = k.delete = k.set = function() {
      throw new Error("map is read-only");
    } : k instanceof Set && (k.add = k.clear = k.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(k), Object.getOwnPropertyNames(k).forEach((D) => {
      const ee = k[D], Ae = typeof ee;
      (Ae === "object" || Ae === "function") && !Object.isFrozen(ee) && r(ee);
    }), k;
  }
  class e {
    /**
     * @param {CompiledMode} mode
     */
    constructor(D) {
      D.data === void 0 && (D.data = {}), this.data = D.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function t(k) {
    return k.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(k, ...D) {
    const ee = /* @__PURE__ */ Object.create(null);
    for (const Ae in k)
      ee[Ae] = k[Ae];
    return D.forEach(function(Ae) {
      for (const it in Ae)
        ee[it] = Ae[it];
    }), /** @type {T} */
    ee;
  }
  const i = "</span>", a = (k) => !!k.scope, s = (k, { prefix: D }) => {
    if (k.startsWith("language:"))
      return k.replace("language:", "language-");
    if (k.includes(".")) {
      const ee = k.split(".");
      return [
        `${D}${ee.shift()}`,
        ...ee.map((Ae, it) => `${Ae}${"_".repeat(it + 1)}`)
      ].join(" ");
    }
    return `${D}${k}`;
  };
  class o {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(D, ee) {
      this.buffer = "", this.classPrefix = ee.classPrefix, D.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(D) {
      this.buffer += t(D);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(D) {
      if (!a(D)) return;
      const ee = s(
        D.scope,
        { prefix: this.classPrefix }
      );
      this.span(ee);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(D) {
      a(D) && (this.buffer += i);
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
    span(D) {
      this.buffer += `<span class="${D}">`;
    }
  }
  const l = (k = {}) => {
    const D = { children: [] };
    return Object.assign(D, k), D;
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
    add(D) {
      this.top.children.push(D);
    }
    /** @param {string} scope */
    openNode(D) {
      const ee = l({ scope: D });
      this.add(ee), this.stack.push(ee);
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
    walk(D) {
      return this.constructor._walk(D, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(D, ee) {
      return typeof ee == "string" ? D.addText(ee) : ee.children && (D.openNode(ee), ee.children.forEach((Ae) => this._walk(D, Ae)), D.closeNode(ee)), D;
    }
    /**
     * @param {Node} node
     */
    static _collapse(D) {
      typeof D != "string" && D.children && (D.children.every((ee) => typeof ee == "string") ? D.children = [D.children.join("")] : D.children.forEach((ee) => {
        d._collapse(ee);
      }));
    }
  }
  class h extends d {
    /**
     * @param {*} options
     */
    constructor(D) {
      super(), this.options = D;
    }
    /**
     * @param {string} text
     */
    addText(D) {
      D !== "" && this.add(D);
    }
    /** @param {string} scope */
    startScope(D) {
      this.openNode(D);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(D, ee) {
      const Ae = D.root;
      ee && (Ae.scope = `language:${ee}`), this.add(Ae);
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
    return k.map((ee) => f(ee)).join("");
  }
  function $(k) {
    const D = k[k.length - 1];
    return typeof D == "object" && D.constructor === Object ? (k.splice(k.length - 1, 1), D) : {};
  }
  function E(...k) {
    return "(" + ($(k).capture ? "" : "?:") + k.map((Ae) => f(Ae)).join("|") + ")";
  }
  function R(k) {
    return new RegExp(k.toString() + "|").exec("").length - 1;
  }
  function W(k, D) {
    const ee = k && k.exec(D);
    return ee && ee.index === 0;
  }
  const Z = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function Y(k, { joinWith: D }) {
    let ee = 0;
    return k.map((Ae) => {
      ee += 1;
      const it = ee;
      let dt = f(Ae), he = "";
      for (; dt.length > 0; ) {
        const le = Z.exec(dt);
        if (!le) {
          he += dt;
          break;
        }
        he += dt.substring(0, le.index), dt = dt.substring(le.index + le[0].length), le[0][0] === "\\" && le[1] ? he += "\\" + String(Number(le[1]) + it) : (he += le[0], le[0] === "(" && ee++);
      }
      return he;
    }).map((Ae) => `(${Ae})`).join(D);
  }
  const N = /\b\B/, ce = "[a-zA-Z]\\w*", ue = "[a-zA-Z_]\\w*", P = "\\b\\d+(\\.\\d+)?", ge = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Ne = "\\b(0b[01]+)", xe = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", U = (k = {}) => {
    const D = /^#![ ]*\//;
    return k.binary && (k.begin = I(
      D,
      /.*\b/,
      k.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: D,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (ee, Ae) => {
        ee.index !== 0 && Ae.ignoreMatch();
      }
    }, k);
  }, q = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, te = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [q]
  }, O = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [q]
  }, G = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, M = function(k, D, ee = {}) {
    const Ae = n(
      {
        scope: "comment",
        begin: k,
        end: D,
        contains: []
      },
      ee
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
    const it = E(
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
        begin: I(
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
  }, re = M("//", "$"), Te = M("/\\*", "\\*/"), Me = M("#", "$"), Ve = {
    scope: "number",
    begin: P,
    relevance: 0
  }, ze = {
    scope: "number",
    begin: ge,
    relevance: 0
  }, Ye = {
    scope: "number",
    begin: Ne,
    relevance: 0
  }, er = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      q,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [q]
      }
    ]
  }, Gt = {
    scope: "title",
    begin: ce,
    relevance: 0
  }, be = {
    scope: "title",
    begin: ue,
    relevance: 0
  }, Oe = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + ue,
    relevance: 0
  };
  var me = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: te,
    BACKSLASH_ESCAPE: q,
    BINARY_NUMBER_MODE: Ye,
    BINARY_NUMBER_RE: Ne,
    COMMENT: M,
    C_BLOCK_COMMENT_MODE: Te,
    C_LINE_COMMENT_MODE: re,
    C_NUMBER_MODE: ze,
    C_NUMBER_RE: ge,
    END_SAME_AS_BEGIN: function(k) {
      return Object.assign(
        k,
        {
          /** @type {ModeCallback} */
          "on:begin": (D, ee) => {
            ee.data._beginMatch = D[1];
          },
          /** @type {ModeCallback} */
          "on:end": (D, ee) => {
            ee.data._beginMatch !== D[1] && ee.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Me,
    IDENT_RE: ce,
    MATCH_NOTHING_RE: N,
    METHOD_GUARD: Oe,
    NUMBER_MODE: Ve,
    NUMBER_RE: P,
    PHRASAL_WORDS_MODE: G,
    QUOTE_STRING_MODE: O,
    REGEXP_MODE: er,
    RE_STARTERS_RE: xe,
    SHEBANG: U,
    TITLE_MODE: Gt,
    UNDERSCORE_IDENT_RE: ue,
    UNDERSCORE_TITLE_MODE: be
  });
  function Ke(k, D) {
    k.input[k.index - 1] === "." && D.ignoreMatch();
  }
  function ut(k, D) {
    k.className !== void 0 && (k.scope = k.className, delete k.className);
  }
  function $r(k, D) {
    D && k.beginKeywords && (k.begin = "\\b(" + k.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", k.__beforeBegin = Ke, k.keywords = k.keywords || k.beginKeywords, delete k.beginKeywords, k.relevance === void 0 && (k.relevance = 0));
  }
  function or(k, D) {
    Array.isArray(k.illegal) && (k.illegal = E(...k.illegal));
  }
  function Nt(k, D) {
    if (k.match) {
      if (k.begin || k.end) throw new Error("begin & end are not supported with match");
      k.begin = k.match, delete k.match;
    }
  }
  function Tr(k, D) {
    k.relevance === void 0 && (k.relevance = 1);
  }
  const On = (k, D) => {
    if (!k.beforeMatch) return;
    if (k.starts) throw new Error("beforeMatch cannot be used with starts");
    const ee = Object.assign({}, k);
    Object.keys(k).forEach((Ae) => {
      delete k[Ae];
    }), k.keywords = ee.keywords, k.begin = I(ee.beforeMatch, m(ee.begin)), k.starts = {
      relevance: 0,
      contains: [
        Object.assign(ee, { endsParent: !0 })
      ]
    }, k.relevance = 0, delete ee.beforeMatch;
  }, Ur = [
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
  ], un = "keyword";
  function Bt(k, D, ee = un) {
    const Ae = /* @__PURE__ */ Object.create(null);
    return typeof k == "string" ? it(ee, k.split(" ")) : Array.isArray(k) ? it(ee, k) : Object.keys(k).forEach(function(dt) {
      Object.assign(
        Ae,
        Bt(k[dt], D, dt)
      );
    }), Ae;
    function it(dt, he) {
      D && (he = he.map((le) => le.toLowerCase())), he.forEach(function(le) {
        const ke = le.split("|");
        Ae[ke[0]] = [dt, Gr(ke[0], ke[1])];
      });
    }
  }
  function Gr(k, D) {
    return D ? Number(D) : dn(k) ? 0 : 1;
  }
  function dn(k) {
    return Ur.includes(k.toLowerCase());
  }
  const Ir = {}, Dt = (k) => {
    console.error(k);
  }, pr = (k, ...D) => {
    console.log(`WARN: ${k}`, ...D);
  }, Et = (k, D) => {
    Ir[`${k}/${D}`] || (console.log(`Deprecated as of ${k}. ${D}`), Ir[`${k}/${D}`] = !0);
  }, Lt = new Error();
  function lr(k, D, { key: ee }) {
    let Ae = 0;
    const it = k[ee], dt = {}, he = {};
    for (let le = 1; le <= D.length; le++)
      he[le + Ae] = it[le], dt[le + Ae] = !0, Ae += R(D[le - 1]);
    k[ee] = he, k[ee]._emit = dt, k[ee]._multi = !0;
  }
  function Nr(k) {
    if (Array.isArray(k.begin)) {
      if (k.skip || k.excludeBegin || k.returnBegin)
        throw Dt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Lt;
      if (typeof k.beginScope != "object" || k.beginScope === null)
        throw Dt("beginScope must be object"), Lt;
      lr(k, k.begin, { key: "beginScope" }), k.begin = Y(k.begin, { joinWith: "" });
    }
  }
  function i0(k) {
    if (Array.isArray(k.end)) {
      if (k.skip || k.excludeEnd || k.returnEnd)
        throw Dt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Lt;
      if (typeof k.endScope != "object" || k.endScope === null)
        throw Dt("endScope must be object"), Lt;
      lr(k, k.end, { key: "endScope" }), k.end = Y(k.end, { joinWith: "" });
    }
  }
  function B0(k) {
    k.scope && typeof k.scope == "object" && k.scope !== null && (k.beginScope = k.scope, delete k.scope);
  }
  function a0(k) {
    B0(k), typeof k.beginScope == "string" && (k.beginScope = { _wrap: k.beginScope }), typeof k.endScope == "string" && (k.endScope = { _wrap: k.endScope }), Nr(k), i0(k);
  }
  function s0(k) {
    function D(he, le) {
      return new RegExp(
        f(he),
        "m" + (k.case_insensitive ? "i" : "") + (k.unicodeRegex ? "u" : "") + (le ? "g" : "")
      );
    }
    class ee {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(le, ke) {
        ke.position = this.position++, this.matchIndexes[this.matchAt] = ke, this.regexes.push([ke, le]), this.matchAt += R(le) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const le = this.regexes.map((ke) => ke[1]);
        this.matcherRe = D(Y(le, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(le) {
        this.matcherRe.lastIndex = this.lastIndex;
        const ke = this.matcherRe.exec(le);
        if (!ke)
          return null;
        const ft = ke.findIndex((Kr, pn) => pn > 0 && Kr !== void 0), at = this.matchIndexes[ft];
        return ke.splice(0, ft), Object.assign(ke, at);
      }
    }
    class Ae {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(le) {
        if (this.multiRegexes[le]) return this.multiRegexes[le];
        const ke = new ee();
        return this.rules.slice(le).forEach(([ft, at]) => ke.addRule(ft, at)), ke.compile(), this.multiRegexes[le] = ke, ke;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(le, ke) {
        this.rules.push([le, ke]), ke.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(le) {
        const ke = this.getMatcher(this.regexIndex);
        ke.lastIndex = this.lastIndex;
        let ft = ke.exec(le);
        if (this.resumingScanAtSamePosition() && !(ft && ft.index === this.lastIndex)) {
          const at = this.getMatcher(0);
          at.lastIndex = this.lastIndex + 1, ft = at.exec(le);
        }
        return ft && (this.regexIndex += ft.position + 1, this.regexIndex === this.count && this.considerAll()), ft;
      }
    }
    function it(he) {
      const le = new Ae();
      return he.contains.forEach((ke) => le.addRule(ke.begin, { rule: ke, type: "begin" })), he.terminatorEnd && le.addRule(he.terminatorEnd, { type: "end" }), he.illegal && le.addRule(he.illegal, { type: "illegal" }), le;
    }
    function dt(he, le) {
      const ke = (
        /** @type CompiledMode */
        he
      );
      if (he.isCompiled) return ke;
      [
        ut,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Nt,
        a0,
        On
      ].forEach((at) => at(he, le)), k.compilerExtensions.forEach((at) => at(he, le)), he.__beforeBegin = null, [
        $r,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        or,
        // default to 1 relevance if not specified
        Tr
      ].forEach((at) => at(he, le)), he.isCompiled = !0;
      let ft = null;
      return typeof he.keywords == "object" && he.keywords.$pattern && (he.keywords = Object.assign({}, he.keywords), ft = he.keywords.$pattern, delete he.keywords.$pattern), ft = ft || /\w+/, he.keywords && (he.keywords = Bt(he.keywords, k.case_insensitive)), ke.keywordPatternRe = D(ft, !0), le && (he.begin || (he.begin = /\B|\b/), ke.beginRe = D(ke.begin), !he.end && !he.endsWithParent && (he.end = /\B|\b/), he.end && (ke.endRe = D(ke.end)), ke.terminatorEnd = f(ke.end) || "", he.endsWithParent && le.terminatorEnd && (ke.terminatorEnd += (he.end ? "|" : "") + le.terminatorEnd)), he.illegal && (ke.illegalRe = D(
        /** @type {RegExp | string} */
        he.illegal
      )), he.contains || (he.contains = []), he.contains = [].concat(...he.contains.map(function(at) {
        return o0(at === "self" ? he : at);
      })), he.contains.forEach(function(at) {
        dt(
          /** @type Mode */
          at,
          ke
        );
      }), he.starts && dt(he.starts, le), ke.matcher = it(ke), ke;
    }
    if (k.compilerExtensions || (k.compilerExtensions = []), k.contains && k.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return k.classNameAliases = n(k.classNameAliases || {}), dt(
      /** @type Mode */
      k
    );
  }
  function hn(k) {
    return k ? k.endsWithParent || hn(k.starts) : !1;
  }
  function o0(k) {
    return k.variants && !k.cachedVariants && (k.cachedVariants = k.variants.map(function(D) {
      return n(k, { variants: null }, D);
    })), k.cachedVariants ? k.cachedVariants : hn(k) ? n(k, { starts: k.starts ? n(k.starts) : null }) : Object.isFrozen(k) ? n(k) : k;
  }
  var fn = "11.11.1";
  class l0 extends Error {
    constructor(D, ee) {
      super(D), this.name = "HTMLInjectionError", this.html = ee;
    }
  }
  const Mr = t, Bn = n, jr = Symbol("nomatch"), Dn = 7, Ln = function(k) {
    const D = /* @__PURE__ */ Object.create(null), ee = /* @__PURE__ */ Object.create(null), Ae = [];
    let it = !0;
    const dt = "Could not find the language '{}', did you forget to load/include a language module?", he = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let le = {
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
    function ke(L) {
      return le.noHighlightRe.test(L);
    }
    function ft(L) {
      let ve = L.className + " ";
      ve += L.parentNode ? L.parentNode.className : "";
      const De = le.languageDetectRe.exec(ve);
      if (De) {
        const We = Qe(De[1]);
        return We || (pr(dt.replace("{}", De[1])), pr("Falling back to no-highlight mode for this block.", L)), We ? De[1] : "no-highlight";
      }
      return ve.split(/\s+/).find((We) => ke(We) || Qe(We));
    }
    function at(L, ve, De) {
      let We = "", lt = "";
      typeof ve == "object" ? (We = L, De = ve.ignoreIllegals, lt = ve.language) : (Et("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Et("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), lt = L, We = ve), De === void 0 && (De = !0);
      const Pt = {
        code: We,
        language: lt
      };
      br("before:highlight", Pt);
      const jt = Pt.result ? Pt.result : Kr(Pt.language, Pt.code, De);
      return jt.code = Pt.code, br("after:highlight", jt), jt;
    }
    function Kr(L, ve, De, We) {
      const lt = /* @__PURE__ */ Object.create(null);
      function Pt(se, we) {
        return se.keywords[we];
      }
      function jt() {
        if (!ie.keywords) {
          et.addText(Ue);
          return;
        }
        let se = 0;
        ie.keywordPatternRe.lastIndex = 0;
        let we = ie.keywordPatternRe.exec(Ue), Re = "";
        for (; we; ) {
          Re += Ue.substring(se, we.index);
          const Ge = fe.case_insensitive ? we[0].toLowerCase() : we[0], $t = Pt(ie, Ge);
          if ($t) {
            const [wr, fi] = $t;
            if (et.addText(Re), Re = "", lt[Ge] = (lt[Ge] || 0) + 1, lt[Ge] <= Dn && (cr += fi), wr.startsWith("_"))
              Re += we[0];
            else {
              const pi = fe.classNameAliases[wr] || wr;
              Kt(we[0], pi);
            }
          } else
            Re += we[0];
          se = ie.keywordPatternRe.lastIndex, we = ie.keywordPatternRe.exec(Ue);
        }
        Re += Ue.substring(se), et.addText(Re);
      }
      function bn() {
        if (Ue === "") return;
        let se = null;
        if (typeof ie.subLanguage == "string") {
          if (!D[ie.subLanguage]) {
            et.addText(Ue);
            return;
          }
          se = Kr(ie.subLanguage, Ue, !0, ct[ie.subLanguage]), ct[ie.subLanguage] = /** @type {CompiledMode} */
          se._top;
        } else
          se = Fn(Ue, ie.subLanguage.length ? ie.subLanguage : null);
        ie.relevance > 0 && (cr += se.relevance), et.__addSublanguage(se._emitter, se.language);
      }
      function Mt() {
        ie.subLanguage != null ? bn() : jt(), Ue = "";
      }
      function Kt(se, we) {
        se !== "" && (et.startScope(we), et.addText(se), et.endScope());
      }
      function qn(se, we) {
        let Re = 1;
        const Ge = we.length - 1;
        for (; Re <= Ge; ) {
          if (!se._emit[Re]) {
            Re++;
            continue;
          }
          const $t = fe.classNameAliases[se[Re]] || se[Re], wr = we[Re];
          $t ? Kt(wr, $t) : (Ue = wr, jt(), Ue = ""), Re++;
        }
      }
      function Rr(se, we) {
        return se.scope && typeof se.scope == "string" && et.openNode(fe.classNameAliases[se.scope] || se.scope), se.beginScope && (se.beginScope._wrap ? (Kt(Ue, fe.classNameAliases[se.beginScope._wrap] || se.beginScope._wrap), Ue = "") : se.beginScope._multi && (qn(se.beginScope, we), Ue = "")), ie = Object.create(se, { parent: { value: ie } }), ie;
      }
      function Wn(se, we, Re) {
        let Ge = W(se.endRe, Re);
        if (Ge) {
          if (se["on:end"]) {
            const $t = new e(se);
            se["on:end"](we, $t), $t.isMatchIgnored && (Ge = !1);
          }
          if (Ge) {
            for (; se.endsParent && se.parent; )
              se = se.parent;
            return se;
          }
        }
        if (se.endsWithParent)
          return Wn(se.parent, we, Re);
      }
      function P0(se) {
        return ie.matcher.regexIndex === 0 ? (Ue += se[0], 1) : (f0 = !0, 0);
      }
      function h0(se) {
        const we = se[0], Re = se.rule, Ge = new e(Re), $t = [Re.__beforeBegin, Re["on:begin"]];
        for (const wr of $t)
          if (wr && (wr(se, Ge), Ge.isMatchIgnored))
            return P0(we);
        return Re.skip ? Ue += we : (Re.excludeBegin && (Ue += we), Mt(), !Re.returnBegin && !Re.excludeBegin && (Ue = we)), Rr(Re, se), Re.returnBegin ? 0 : we.length;
      }
      function T(se) {
        const we = se[0], Re = ve.substring(se.index), Ge = Wn(ie, se, Re);
        if (!Ge)
          return jr;
        const $t = ie;
        ie.endScope && ie.endScope._wrap ? (Mt(), Kt(we, ie.endScope._wrap)) : ie.endScope && ie.endScope._multi ? (Mt(), qn(ie.endScope, se)) : $t.skip ? Ue += we : ($t.returnEnd || $t.excludeEnd || (Ue += we), Mt(), $t.excludeEnd && (Ue = we));
        do
          ie.scope && et.closeNode(), !ie.skip && !ie.subLanguage && (cr += ie.relevance), ie = ie.parent;
        while (ie !== Ge.parent);
        return Ge.starts && Rr(Ge.starts, se), $t.returnEnd ? 0 : we.length;
      }
      function A() {
        const se = [];
        for (let we = ie; we !== fe; we = we.parent)
          we.scope && se.unshift(we.scope);
        se.forEach((we) => et.openNode(we));
      }
      let B = {};
      function ae(se, we) {
        const Re = we && we[0];
        if (Ue += se, Re == null)
          return Mt(), 0;
        if (B.type === "begin" && we.type === "end" && B.index === we.index && Re === "") {
          if (Ue += ve.slice(we.index, we.index + 1), !it) {
            const Ge = new Error(`0 width match regex (${L})`);
            throw Ge.languageName = L, Ge.badRule = B.rule, Ge;
          }
          return 1;
        }
        if (B = we, we.type === "begin")
          return h0(we);
        if (we.type === "illegal" && !De) {
          const Ge = new Error('Illegal lexeme "' + Re + '" for mode "' + (ie.scope || "<unnamed>") + '"');
          throw Ge.mode = ie, Ge;
        } else if (we.type === "end") {
          const Ge = T(we);
          if (Ge !== jr)
            return Ge;
        }
        if (we.type === "illegal" && Re === "")
          return Ue += `
`, 1;
        if (vr > 1e5 && vr > we.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Ue += Re, Re.length;
      }
      const fe = Qe(L);
      if (!fe)
        throw Dt(dt.replace("{}", L)), new Error('Unknown language: "' + L + '"');
      const ye = s0(fe);
      let Le = "", ie = We || ye;
      const ct = {}, et = new le.__emitter(le);
      A();
      let Ue = "", cr = 0, Zt = 0, vr = 0, f0 = !1;
      try {
        if (fe.__emitTokens)
          fe.__emitTokens(ve, et);
        else {
          for (ie.matcher.considerAll(); ; ) {
            vr++, f0 ? f0 = !1 : ie.matcher.considerAll(), ie.matcher.lastIndex = Zt;
            const se = ie.matcher.exec(ve);
            if (!se) break;
            const we = ve.substring(Zt, se.index), Re = ae(we, se);
            Zt = se.index + Re;
          }
          ae(ve.substring(Zt));
        }
        return et.finalize(), Le = et.toHTML(), {
          language: L,
          value: Le,
          relevance: cr,
          illegal: !1,
          _emitter: et,
          _top: ie
        };
      } catch (se) {
        if (se.message && se.message.includes("Illegal"))
          return {
            language: L,
            value: Mr(ve),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: se.message,
              index: Zt,
              context: ve.slice(Zt - 100, Zt + 100),
              mode: se.mode,
              resultSoFar: Le
            },
            _emitter: et
          };
        if (it)
          return {
            language: L,
            value: Mr(ve),
            illegal: !1,
            relevance: 0,
            errorRaised: se,
            _emitter: et,
            _top: ie
          };
        throw se;
      }
    }
    function pn(L) {
      const ve = {
        value: Mr(L),
        illegal: !1,
        relevance: 0,
        _top: he,
        _emitter: new le.__emitter(le)
      };
      return ve._emitter.addText(L), ve;
    }
    function Fn(L, ve) {
      ve = ve || le.languages || Object.keys(D);
      const De = pn(L), We = ve.filter(Qe).filter(gn).map(
        (Mt) => Kr(Mt, L, !1)
      );
      We.unshift(De);
      const lt = We.sort((Mt, Kt) => {
        if (Mt.relevance !== Kt.relevance) return Kt.relevance - Mt.relevance;
        if (Mt.language && Kt.language) {
          if (Qe(Mt.language).supersetOf === Kt.language)
            return 1;
          if (Qe(Kt.language).supersetOf === Mt.language)
            return -1;
        }
        return 0;
      }), [Pt, jt] = lt, bn = Pt;
      return bn.secondBest = jt, bn;
    }
    function c0(L, ve, De) {
      const We = ve && ee[ve] || De;
      L.classList.add("hljs"), L.classList.add(`language-${We}`);
    }
    function St(L) {
      let ve = null;
      const De = ft(L);
      if (ke(De)) return;
      if (br(
        "before:highlightElement",
        { el: L, language: De }
      ), L.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", L);
        return;
      }
      if (L.children.length > 0 && (le.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(L)), le.throwUnescapedHTML))
        throw new l0(
          "One of your code blocks includes unescaped HTML.",
          L.innerHTML
        );
      ve = L;
      const We = ve.textContent, lt = De ? at(We, { language: De, ignoreIllegals: !0 }) : Fn(We);
      L.innerHTML = lt.value, L.dataset.highlighted = "yes", c0(L, De, lt.language), L.result = {
        language: lt.language,
        // TODO: remove with version 11.0
        re: lt.relevance,
        relevance: lt.relevance
      }, lt.secondBest && (L.secondBest = {
        language: lt.secondBest.language,
        relevance: lt.secondBest.relevance
      }), br("after:highlightElement", { el: L, result: lt, text: We });
    }
    function Pn(L) {
      le = Bn(le, L);
    }
    const Vn = () => {
      gr(), Et("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function mn() {
      gr(), Et("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let u0 = !1;
    function gr() {
      function L() {
        gr();
      }
      if (document.readyState === "loading") {
        u0 || window.addEventListener("DOMContentLoaded", L, !1), u0 = !0;
        return;
      }
      document.querySelectorAll(le.cssSelector).forEach(St);
    }
    function D0(L, ve) {
      let De = null;
      try {
        De = ve(k);
      } catch (We) {
        if (Dt("Language definition for '{}' could not be registered.".replace("{}", L)), it)
          Dt(We);
        else
          throw We;
        De = he;
      }
      De.name || (De.name = L), D[L] = De, De.rawDefinition = ve.bind(null, k), De.aliases && Er(De.aliases, { languageName: L });
    }
    function d0(L) {
      delete D[L];
      for (const ve of Object.keys(ee))
        ee[ve] === L && delete ee[ve];
    }
    function L0() {
      return Object.keys(D);
    }
    function Qe(L) {
      return L = (L || "").toLowerCase(), D[L] || D[ee[L]];
    }
    function Er(L, { languageName: ve }) {
      typeof L == "string" && (L = [L]), L.forEach((De) => {
        ee[De.toLowerCase()] = ve;
      });
    }
    function gn(L) {
      const ve = Qe(L);
      return ve && !ve.disableAutodetect;
    }
    function Hn(L) {
      L["before:highlightBlock"] && !L["before:highlightElement"] && (L["before:highlightElement"] = (ve) => {
        L["before:highlightBlock"](
          Object.assign({ block: ve.el }, ve)
        );
      }), L["after:highlightBlock"] && !L["after:highlightElement"] && (L["after:highlightElement"] = (ve) => {
        L["after:highlightBlock"](
          Object.assign({ block: ve.el }, ve)
        );
      });
    }
    function Ft(L) {
      Hn(L), Ae.push(L);
    }
    function F0(L) {
      const ve = Ae.indexOf(L);
      ve !== -1 && Ae.splice(ve, 1);
    }
    function br(L, ve) {
      const De = L;
      Ae.forEach(function(We) {
        We[De] && We[De](ve);
      });
    }
    function zr(L) {
      return Et("10.7.0", "highlightBlock will be removed entirely in v12.0"), Et("10.7.0", "Please use highlightElement now."), St(L);
    }
    Object.assign(k, {
      highlight: at,
      highlightAuto: Fn,
      highlightAll: gr,
      highlightElement: St,
      // TODO: Remove with v12 API
      highlightBlock: zr,
      configure: Pn,
      initHighlighting: Vn,
      initHighlightingOnLoad: mn,
      registerLanguage: D0,
      unregisterLanguage: d0,
      listLanguages: L0,
      getLanguage: Qe,
      registerAliases: Er,
      autoDetection: gn,
      inherit: Bn,
      addPlugin: Ft,
      removePlugin: F0
    }), k.debugMode = function() {
      it = !1;
    }, k.safeMode = function() {
      it = !0;
    }, k.versionString = fn, k.regex = {
      concat: I,
      lookahead: m,
      either: E,
      optional: y,
      anyNumberOfTimes: v
    };
    for (const L in me)
      typeof me[L] == "object" && r(me[L]);
    return Object.assign(k, me), k;
  }, mr = Ln({});
  return mr.newInstance = () => Ln({}), Fa = mr, mr.HighlightJS = mr, mr.default = mr, Fa;
}
var R4 = /* @__PURE__ */ z4();
const Rn = /* @__PURE__ */ Sc(R4), O4 = (r) => ({
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
}), B4 = [
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
], D4 = [
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
], L4 = [
  ...B4,
  ...D4
], F4 = [
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
].sort().reverse(), P4 = [
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
].sort().reverse(), V4 = [
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
].sort().reverse(), H4 = [
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
function q4(r) {
  const e = r.regex, t = O4(r), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", a = /@-?\w[\w]*(-\w+)*/, s = "[a-zA-Z-][a-zA-Z0-9_-]*", o = [
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
          { begin: ":(" + P4.join("|") + ")" },
          { begin: ":(:)?(" + V4.join("|") + ")" }
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
        begin: "\\b(" + H4.join("|") + ")\\b"
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
              attribute: F4.join(" ")
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
        begin: "\\b(" + L4.join("|") + ")\\b"
      }
    ]
  };
}
const fc = "[A-Za-z$_][0-9A-Za-z$_]*", W4 = [
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
], U4 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], N1 = [
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
], M1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], E1 = [
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
], G4 = [
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
], j4 = [].concat(
  E1,
  N1,
  M1
);
function K4(r) {
  const e = r.regex, t = (M, { after: re }) => {
    const Te = "</" + M[0].slice(1);
    return M.input.indexOf(Te, re) !== -1;
  }, n = fc, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (M, re) => {
      const Te = M[0].length + M.index, Me = M.input[Te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Me === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Me === ","
      ) {
        re.ignoreMatch();
        return;
      }
      Me === ">" && (t(M, { after: Te }) || re.ignoreMatch());
      let Ve;
      const ze = M.input.substring(Te);
      if (Ve = ze.match(/^\s*=/)) {
        re.ignoreMatch();
        return;
      }
      if ((Ve = ze.match(/^\s+extends\s+/)) && Ve.index === 0) {
        re.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: fc,
    keyword: W4,
    literal: U4,
    built_in: j4,
    "variable.language": G4
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
  }, $ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, R = {
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
    y,
    I,
    $,
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
  const Z = [].concat(R, m.contains), Y = Z.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(Z)
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
  }, ce = {
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
        ...N1,
        ...M1
      ]
    }
  }, P = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, ge = {
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
  }, Ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function xe(M) {
    return e.concat("(?!", M.join("|"), ")");
  }
  const U = {
    match: e.concat(
      /\b/,
      xe([
        ...E1,
        "super",
        "import"
      ].map((M) => `${M}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, te = {
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
  }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", G = {
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
      P,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      y,
      I,
      $,
      R,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      ue,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      G,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          R,
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
      ge,
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
      q,
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
      U,
      Ne,
      ce,
      te,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
var v0 = "[0-9](_*[0-9])*", Ti = `\\.(${v0})`, Ii = "[0-9a-fA-F](_*[0-9a-fA-F])*", pc = {
  className: "number",
  variants: [
    // DecimalFloatingPointLiteral
    // including ExponentPart
    { begin: `(\\b(${v0})((${Ti})|\\.)?|(${Ti}))[eE][+-]?(${v0})[fFdD]?\\b` },
    // excluding ExponentPart
    { begin: `\\b(${v0})((${Ti})[fFdD]?\\b|\\.([fFdD]\\b)?)` },
    { begin: `(${Ti})[fFdD]?\\b` },
    { begin: `\\b(${v0})[fFdD]\\b` },
    // HexadecimalFloatingPointLiteral
    { begin: `\\b0[xX]((${Ii})\\.?|(${Ii})?\\.(${Ii}))[pP][+-]?(${v0})[fFdD]?\\b` },
    // DecimalIntegerLiteral
    { begin: "\\b(0|[1-9](_*[0-9])*)[lL]?\\b" },
    // HexIntegerLiteral
    { begin: `\\b0[xX](${Ii})[lL]?\\b` },
    // OctalIntegerLiteral
    { begin: "\\b0(_*[0-7])*[lL]?\\b" },
    // BinaryIntegerLiteral
    { begin: "\\b0[bB][01](_*[01])*[lL]?\\b" }
  ],
  relevance: 0
};
function z1(r, e, t) {
  return t === -1 ? "" : r.replace(e, (n) => z1(r, e, t - 1));
}
function Z4(r) {
  const e = r.regex, t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*", n = t + z1("(?:<" + t + "~~~(?:\\s*,\\s*" + t + "~~~)*>)?", /~~~/g, 2), l = {
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
              pc,
              r.C_BLOCK_COMMENT_MODE
            ]
          },
          r.C_LINE_COMMENT_MODE,
          r.C_BLOCK_COMMENT_MODE
        ]
      },
      pc,
      d
    ]
  };
}
function X4(r) {
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
const Xi = "[A-Za-z$_][0-9A-Za-z$_]*", R1 = [
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
], O1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], B1 = [
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
], D1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], L1 = [
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
], F1 = [
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
], P1 = [].concat(
  L1,
  B1,
  D1
);
function J4(r) {
  const e = r.regex, t = (M, { after: re }) => {
    const Te = "</" + M[0].slice(1);
    return M.input.indexOf(Te, re) !== -1;
  }, n = Xi, i = {
    begin: "<>",
    end: "</>"
  }, a = /<[A-Za-z0-9\\._:-]+\s*\/>/, s = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (M, re) => {
      const Te = M[0].length + M.index, Me = M.input[Te];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Me === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Me === ","
      ) {
        re.ignoreMatch();
        return;
      }
      Me === ">" && (t(M, { after: Te }) || re.ignoreMatch());
      let Ve;
      const ze = M.input.substring(Te);
      if (Ve = ze.match(/^\s*=/)) {
        re.ignoreMatch();
        return;
      }
      if ((Ve = ze.match(/^\s+extends\s+/)) && Ve.index === 0) {
        re.ignoreMatch();
        return;
      }
    }
  }, o = {
    $pattern: Xi,
    keyword: R1,
    literal: O1,
    built_in: P1,
    "variable.language": F1
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
  }, $ = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      r.BACKSLASH_ESCAPE,
      m
    ]
  }, R = {
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
    y,
    I,
    $,
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
  const Z = [].concat(R, m.contains), Y = Z.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: o,
      contains: ["self"].concat(Z)
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
  }, ce = {
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
        ...B1,
        ...D1
      ]
    }
  }, P = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, ge = {
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
  }, Ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function xe(M) {
    return e.concat("(?!", M.join("|"), ")");
  }
  const U = {
    match: e.concat(
      /\b/,
      xe([
        ...L1,
        "super",
        "import"
      ].map((M) => `${M}\\s*\\(`)),
      n,
      e.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, q = {
    begin: e.concat(/\./, e.lookahead(
      e.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, te = {
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
  }, O = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + r.UNDERSCORE_IDENT_RE + ")\\s*=>", G = {
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
      P,
      r.APOS_STRING_MODE,
      r.QUOTE_STRING_MODE,
      v,
      y,
      I,
      $,
      R,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      ue,
      {
        scope: "attr",
        match: n + e.lookahead(":"),
        relevance: 0
      },
      G,
      {
        // "value" container
        begin: "(" + r.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          R,
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
      ge,
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
      q,
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
      U,
      Ne,
      ce,
      te,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Y4(r) {
  const e = r.regex, t = J4(r), n = Xi, i = [
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
    $pattern: Xi,
    keyword: R1.concat(l),
    literal: O1,
    built_in: P1.concat(i),
    "variable.language": F1
  }, h = {
    className: "meta",
    begin: "@" + n
  }, f = (I, $, E) => {
    const R = I.contains.findIndex((W) => W.label === $);
    if (R === -1)
      throw new Error("can not find mode to replace");
    I.contains.splice(R, 1, E);
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
    a,
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
function V1(r) {
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
const j5 = "0.0.38", Q4 = S.ValueIsTextline, H1 = {
  h: rn,
  Fragment: An,
  render: en,
  createContext: Bc,
  createElement: rn,
  cloneElement: Oc,
  createRef: jd,
  toChildArray: A0,
  createPortal: jc,
  memo: nh,
  forwardRef: ah,
  useId: Vc,
  useRef: Fe,
  useState: je,
  useReducer: Fc,
  useEffect: Jt,
  useLayoutEffect: eh,
  useCallback: Ht,
  useMemo: M0,
  useContext: Pc,
  useErrorBoundary: zs
}, { fromLocalTo: e2, fromViewportTo: t2, fromDocumentTo: r2 } = xh;
Rn.registerLanguage("css", q4);
Rn.registerLanguage("javascript", K4);
Rn.registerLanguage("java", Z4);
Rn.registerLanguage("json", X4);
Rn.registerLanguage("typescript", Y4);
Rn.registerLanguage("html", V1);
Rn.registerLanguage("xml", V1);
const Cr = Symbol("Script"), sn = Symbol("View"), ga = Symbol("rerender"), Mn = Symbol("Console"), ti = Symbol("Console_CharCount"), ri = Symbol("Console_LineCount"), q1 = ["left-width", "left-right", "width-right"], W1 = ["top-height", "top-bottom", "height-bottom"], K5 = [
  "thin",
  "extra-light",
  "light",
  "normal",
  "medium",
  "semi-bold",
  "bold",
  "extra-bold",
  "heavy"
], n2 = {
  thin: 100,
  "extra-light": 200,
  light: 300,
  normal: 400,
  medium: 500,
  "semi-bold": 600,
  bold: 700,
  "extra-bold": 800,
  heavy: 900
}, Z5 = ["normal", "italic"], i2 = ["none", "underline", "overline", "line-through"], a2 = ["solid", "double", "dotted", "dashed", "wavy"], X5 = ["left", "center", "right", "justify"], s2 = ["normal", "contain", "cover", "fill", "tile"], o2 = [
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
], J5 = [
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
], l2 = ["visible", "hidden", "scroll", "auto"];
function En(r) {
  debugger;
  let e = /^([$a-zA-Z][$a-zA-Z0-9]*):\s*(\S.+)\s*$/.exec(r);
  if (e == null)
    throw new Error(r);
  {
    let t = new Error(e[2]);
    throw t.name = e[1], t;
  }
}
function Y5(r) {
  En(
    "ReadOnlyProperty: property " + S.quoted(r) + " must not be set"
  );
}
const c2 = /^[a-z$_][a-z$_0-9]*$/i;
function U1(r) {
  return S.ValueIsStringMatching(r, c2);
}
const u2 = S.ValidatorForClassifier(
  U1,
  S.acceptNil,
  "BC identifier"
), Q5 = u2, d2 = S.ValidatorForClassifier(
  U1,
  S.rejectNil,
  "BC identifier"
), em = d2;
function di(r) {
  return S.ValueIsString(r) && /^[a-zA-Z][a-zA-Z0-9_-]*$/.test(r);
}
const h2 = S.ValidatorForClassifier(
  di,
  S.acceptNil,
  "name"
), tm = h2, so = S.ValidatorForClassifier(
  di,
  S.rejectNil,
  "name"
), rm = so;
function ir(r) {
  return S.ValueIsFiniteNumber(r);
}
const f2 = S.ValidatorForClassifier(
  ir,
  S.acceptNil,
  "BC coordinate"
), nm = f2, p2 = S.ValidatorForClassifier(
  ir,
  S.rejectNil,
  "BC coordinate"
), im = p2;
function Ar(r) {
  return S.ValueIsFiniteNumber(r) && r >= 0;
}
const m2 = S.ValidatorForClassifier(
  Ar,
  S.acceptNil,
  "BC dimension"
), am = m2, g2 = S.ValidatorForClassifier(
  Ar,
  S.rejectNil,
  "BC dimension"
), sm = g2;
function G1(r) {
  return S.ValueIsPlainObject(r) && ir(r.x) && ir(r.y);
}
const b2 = S.ValidatorForClassifier(
  G1,
  S.acceptNil,
  "BC position"
), om = b2, v2 = S.ValidatorForClassifier(
  G1,
  S.rejectNil,
  "BC position"
), lm = v2;
function j1(r) {
  return S.ValueIsPlainObject(r) && Ar(r.Width) && Ar(r.Height);
}
const w2 = S.ValidatorForClassifier(
  j1,
  S.acceptNil,
  "BC size"
), cm = w2, x2 = S.ValidatorForClassifier(
  j1,
  S.rejectNil,
  "BC size"
), um = x2;
function K1(r) {
  return S.ValueIsPlainObject(r) && ir(r.x) && Ar(r.Width) && ir(r.y) && Ar(r.Height);
}
const y2 = S.ValidatorForClassifier(
  K1,
  S.acceptNil,
  "BC geometry"
), dm = y2, k2 = S.ValidatorForClassifier(
  K1,
  S.rejectNil,
  "BC geometry"
), hm = k2;
function Z1(r) {
  if (!S.ValueIsPlainObject(r))
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
          if (r[e] != null && !Ar(r[e]))
            return !1;
          break;
        default:
          return !1;
      }
  return !0;
}
S.ValidatorForClassifier(
  Z1,
  S.acceptNil,
  "BC geometry"
);
S.ValidatorForClassifier(
  Z1,
  S.rejectNil,
  "BC geometry"
);
function oo(r) {
  return S.ValueIsList(r) && r.length === 2 && S.ValueIsOneOf(r[0], q1) && S.ValueIsOneOf(r[1], W1);
}
const S2 = S.ValidatorForClassifier(
  oo,
  S.acceptNil,
  "BC anchors list"
), fm = S2, _2 = S.ValidatorForClassifier(
  oo,
  S.rejectNil,
  "BC anchors list"
), pm = _2;
function lo(r) {
  return S.ValueIsListSatisfying(r, S.ValueIsFiniteNumber) && r.length === 4;
}
const C2 = S.ValidatorForClassifier(
  lo,
  S.acceptNil,
  "BC offsets list"
), mm = C2, A2 = S.ValidatorForClassifier(
  lo,
  S.rejectNil,
  "BC offsets list"
), gm = A2;
function X1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsOneOf(r.Line, i2) && (r.Color == null || S.ValueIsColor(r.Color)) && (r.Style == null || S.ValueIsOneOf(r.Style, a2)) && (r.Thickness == null || Ar(r.Thickness));
}
const $2 = S.ValidatorForClassifier(
  X1,
  S.acceptNil,
  "text decoration"
), bm = $2, T2 = S.ValidatorForClassifier(
  X1,
  S.rejectNil,
  "text decoration"
), vm = T2;
function J1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && ir(r.xOffset) && ir(r.yOffset) && Ar(r.BlurRadius) && S.ValueIsColor(r.Color);
}
const I2 = S.ValidatorForClassifier(
  J1,
  S.acceptNil,
  "text shadow specification"
), wm = I2, N2 = S.ValidatorForClassifier(
  J1,
  S.rejectNil,
  "text shadow specification"
), xm = N2;
function Y1(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && S.ValueIsURL(r.ImageURL) && S.ValueIsOneOf(r.Mode, s2) && ir(r.xOffset) && ir(r.yOffset);
}
const M2 = S.ValidatorForClassifier(
  Y1,
  S.acceptNil,
  "background texture"
), ym = M2, E2 = S.ValidatorForClassifier(
  Y1,
  S.rejectNil,
  "background texture"
), km = E2;
function Q1(r) {
  return S.ValueIsOneOf(r, o2);
}
const z2 = S.ValidatorForClassifier(
  Q1,
  S.acceptNil,
  "widget border style"
), Sm = z2, R2 = S.ValidatorForClassifier(
  Q1,
  S.rejectNil,
  "widget border style"
), _m = R2;
function ed(r) {
  return r === "none" || S.ValueIsObject(r) && S.ValueIsBoolean(r.isActive) && ir(r.xOffset) && ir(r.yOffset) && Ar(r.BlurRadius) && Ar(r.SpreadRadius) && S.ValueIsColor(r.Color);
}
const O2 = S.ValidatorForClassifier(
  ed,
  S.acceptNil,
  "widget box shadow specification"
), Cm = O2, B2 = S.ValidatorForClassifier(
  ed,
  S.rejectNil,
  "widget box shadow specification"
), Am = B2;
function td(r) {
  return S.ValueIsListSatisfying(
    r,
    (e) => S.ValueIsOneOf(e, l2),
    2,
    2
  );
}
const D2 = S.ValidatorForClassifier(
  td,
  S.acceptNil,
  "BC overflow list"
), $m = D2, L2 = S.ValidatorForClassifier(
  td,
  S.rejectNil,
  "BC overflow list"
), Tm = L2;
function co(r) {
  return xs(r, /* @__PURE__ */ new WeakSet());
}
function xs(r, e) {
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
        if (!xs(t, e))
          return !1;
      return e.delete(r), !0;
    case S.ValueIsPlainObject(r):
      if (e.has(r))
        return !1;
      e.add(r);
      for (let t in r)
        if (r.hasOwnProperty(t) && !xs(r[t], e))
          return !1;
      return e.delete(r), !0;
  }
  return !1;
}
const F2 = S.ValidatorForClassifier(
  co,
  S.acceptNil,
  "serializable value"
), Im = F2, P2 = S.ValidatorForClassifier(
  co,
  S.rejectNil,
  "serializable value"
), Nm = P2;
function rd(r) {
  if (S.ValueIsPlainObject(r)) {
    for (let e in r)
      if (r.hasOwnProperty(e) && !co(r[e]))
        return !1;
    return !0;
  } else
    return !1;
}
const V2 = S.ValidatorForClassifier(
  rd,
  S.acceptNil,
  "serializable object"
), Mm = V2, H2 = S.ValidatorForClassifier(
  rd,
  S.rejectNil,
  "serializable object"
), Em = H2;
function zm(r, e) {
  const t = e == null ? S.ValueIsTextline : (n) => S.ValueIsStringMatching(n, e);
  return S.ValueIsListSatisfying(r, t);
}
function q2(r, e, t) {
  return e == null ? e : U2(r, e, t);
}
const Rm = q2;
function W2(r, e, t) {
  if (e == null)
    En(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const n = t == null ? S.ValueIsTextline : (i) => S.ValueIsStringMatching(i, t);
    if (S.ValueIsListSatisfying(e, n))
      return e;
    En(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const U2 = W2;
function Om(r, e, t, n, i) {
  const a = e == null && t == null ? S.ValueIsNumber : (s) => S.ValueIsNumberInRange(s, e, t, n, i);
  return S.ValueIsListSatisfying(r, a);
}
function G2(r, e, t, n, i, a) {
  return e == null ? e : K2(r, e, t, n, i, a);
}
const Bm = G2;
function j2(r, e, t, n, i, a) {
  if (e == null)
    En(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const s = t == null && n == null ? S.ValueIsNumber : (o) => S.ValueIsNumberInRange(o, t, n, i, a);
    if (S.ValueIsListSatisfying(e, s))
      return e;
    En(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const K2 = j2;
function Dm(r, e, t) {
  const n = e == null && t == null ? S.ValueIsInteger : (i) => S.ValueIsIntegerInRange(i, e, t);
  return S.ValueIsListSatisfying(r, n);
}
function Z2(r, e, t, n) {
  return e == null ? e : J2(r, e, t, n);
}
const Lm = Z2;
function X2(r, e, t, n) {
  if (e == null)
    En(`MissingArgument: no ${S.escaped(r)} given`);
  else {
    const i = t == null && n == null ? S.ValueIsInteger : (a) => S.ValueIsIntegerInRange(a, t, n);
    if (S.ValueIsListSatisfying(e, i))
      return e;
    En(`InvalidArgument: the given value is no ${S.escaped(r)}`);
  }
}
const J2 = X2;
function Fm(r, e) {
  if (S.expectFunction("Validator", e), e(r) === !0)
    return r;
}
function Pm(r) {
  switch (!0) {
    case S.ValueIsBoolean(r):
      return r;
    case r === "false":
      return !1;
    case r === "true":
      return !0;
  }
}
function Vm(r) {
  if (S.ValueIsNumber(r) || S.ValueIsString(r) && (r = parseFloat(r), !isNaN(r)))
    return r;
}
function Hm(r, e, t, n, i) {
  if (!(S.ValueIsString(r) && (r = parseFloat(r), isNaN(r))) && S.ValueIsNumberInRange(r, e, t, n, i))
    return r;
}
function qm(r) {
  if (S.ValueIsInteger(r))
    return r;
  if (S.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), S.ValueIsInteger(r))
      return r;
  }
}
function Wm(r, e, t) {
  if (S.ValueIsString(r)) {
    const n = r.trim();
    if (r = n === "" ? NaN : Number(n), !S.ValueIsNumber(r))
      return;
  }
  if (S.ValueIsIntegerInRange(r, e, t))
    return r;
}
function Um(r) {
  if (S.ValueIsOrdinal(r))
    return r;
  if (S.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), S.ValueIsOrdinal(r))
      return r;
  }
}
function Gm(r) {
  if (S.ValueIsCardinal(r))
    return r;
  if (S.ValueIsString(r)) {
    const e = r.trim();
    if (r = e === "" ? NaN : Number(e), S.ValueIsCardinal(r))
      return r;
  }
}
function jm(r) {
  if (S.ValueIsString(r))
    return r;
}
function Km(r, e) {
  if (S.ValueIsStringMatching(r, e))
    return r;
}
function Zm(r) {
  if (S.ValueIsText(r))
    return r;
}
function Xm(r) {
  if (S.ValueIsTextline(r))
    return r;
}
function Jm(r) {
  if (S.ValueIsFunction(r))
    return r;
}
function Ym(r) {
  if (S.ValueIsColor(r))
    return r;
}
function Qm(r) {
  if (S.ValueIsEMailAddress(r))
    return r;
}
function eg(r) {
  if (Q4(r))
    return r;
}
function tg(r) {
  if (S.ValueIsURL(r))
    return r;
}
function rg(r) {
  if (di(r))
    return r;
}
function ng(r) {
  if (di(r) || S.ValueIsOrdinal(r))
    return r;
}
let Ji = 0;
function dr(r) {
  return Ji += 1, `bc-${r}-${Ji}`;
}
function nd(r) {
  r > Ji && (Ji = r);
}
function ig(r) {
  return so("name", r), id(r);
}
function id(r) {
  return r.replaceAll(".", "-");
}
function Y2(r, e, t = !1) {
  so("stylesheet name", r), S.expectText("stylesheet", e), S.expectBoolean("mode flag", t);
  const n = "BC-Stylesheet-for-" + id(r);
  let i = document.head.querySelector('style[id="' + n + '"]');
  i == null ? (i = document.createElement("style"), i.id = n, i.textContent = e, document.head.append(i)) : t ? i.textContent = e : console.warn('multiple definitions for stylesheet "' + r + '"');
}
const ag = "\\d{2}:\\d{2}", Q2 = /\d{2}:\d{2}/;
function sg(r) {
  return S.ValueIsStringMatching(r, Q2);
}
const og = "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", e5 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
function lg(r) {
  return S.ValueIsStringMatching(r, e5);
}
const cg = "\\d{4}-\\d{2}-\\d{2}", t5 = /\d{4}-\d{2}-\d{2}/;
function ug(r) {
  return S.ValueIsStringMatching(r, t5);
}
const dg = "\\d{4}-W\\d{2}", r5 = /\d{4}-W\d{2}/;
function hg(r) {
  return S.ValueIsStringMatching(r, r5);
}
const fg = "\\d{4}-\\d{2}", n5 = /\d{4}-\d{2}/;
function pg(r) {
  return S.ValueIsStringMatching(r, n5);
}
const mg = [
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
], i5 = /* @__PURE__ */ Object.create(null);
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
  (r) => i5[r] = !0
);
const uo = 105e4, ho = 2e4;
function Yi(r) {
  r[Mn] = "", r[ga]();
}
function a5(r, e) {
  ad(r, sd(e)), r[ga]();
}
function s5(r, e) {
  ad(r, sd(e, !0)), r[ga]();
}
function ad(r, e) {
  if (e.length === 0)
    return;
  let t = mc(e), n = e.length;
  t > (r.Console_LineLimit ?? ho) || n > (r.Console_CharLimit ?? uo) ? (Yi(r), e = l5(e, r, t, n), r[ri] = mc(e) + 1, r[ti] = e.length, r[Mn] = e) : (o5(r, t, n), r[ri] += t, r[ti] += n, r[Mn] += e);
}
function o5(r, e, t) {
  let n = r[ri] + e - (r.Console_LineLimit ?? ho), i = r[ti] + t - (r.Console_CharLimit ?? uo);
  if (n <= 0 && i <= 0)
    return;
  let a = r[Mn];
  for (let s = 0, o = -1; ; ) {
    if (o = a.indexOf(`
`, o + 1), o < 0) {
      Yi(r);
      return;
    }
    if (s += 1, s >= n && o - s * 28 >= i) {
      r[Mn] = a.slice(o + 1);
      return;
    }
  }
}
function l5(r, e, t, n) {
  let i = t - e.Console_LineLimit, a = n - e.Console_CharLimit;
  for (let s = 0, o = -1; ; ) {
    if (o = r.indexOf(`
`, o + 1), o < 0)
      return r;
    if (s += 1, s >= i && o >= a)
      return r.slice(o + 1);
  }
}
function mc(r) {
  let e = r.match(/\n/g);
  return e === null ? 0 : e.length;
}
function sd(r, e = !1) {
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
function Pa(r) {
  return u5(() => {
    const { ErrorToShow: e } = r;
    return K`<div class="bc-error-indicator" onClick=${() => {
      console.warn(e), window.alert(c5(e));
    }}/>`;
  });
}
Y2("bc-error-indicator", `
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
function c5(r) {
  return `${r.Title}

${r.Message}`;
}
function ys(r) {
  const [e] = zs();
  if (e != null) {
    console.warn("[BrowserCard] render error:", e);
    const t = (e == null ? void 0 : e.message) ?? String(e);
    return K`<div class="bc-error-indicator" title=${"render error: " + t}/>`;
  }
  return r.children;
}
const gg = ["portrait", "landscape", "any"];
function u5(r) {
  S.expectFunction("rendering function", r);
  const [e, t] = zs(), [n, i] = je(void 0);
  function a() {
    i(void 0), t();
  }
  if (e != null)
    return console.warn("rendering error caught by preact: " + e), K`<${Pa} error=${e} resetError=${a}/>`;
  if (n != null)
    return K`<${Pa} error=${n} resetError=${a}/>`;
  try {
    return r();
  } catch (s) {
    return console.warn("rendering error: " + s), i(s), K`<${Pa} error=${s} resetError=${a}/>`;
  }
}
const ks = 800, Ss = 600, d5 = `
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
var xr, ii, Yn, k0;
class Qi {
  constructor() {
    bt(this, xr, /* @__PURE__ */ new Map());
    /**** linkToParent — registers a provider of the next Visual up the hierarchy ****/
    //    the provider is evaluated lazily (on every "triggered" call), so the parent
    //    Instance need not exist yet at the time the link is established
    bt(this, ii, null);
    /**** after/every — timers which are cleared automatically on teardown ****/
    bt(this, Yn, /* @__PURE__ */ new Set());
    bt(this, k0, /* @__PURE__ */ new Set());
  }
  /**** on — registers a message handler (called from within a script) ****/
  on(e, t) {
    z(this, xr).set(e, t);
  }
  /**** run — evaluates the script asynchronously; clears old handlers first ****/
  async run(e, t, n) {
    if (z(this, xr).clear(), !!(e != null && e.trim()))
      try {
        await new Function(...t, `return (async () => {
${e}
})()`)(...n);
      } catch (i) {
        console.warn("[BrowserCard] script error:", i);
      }
  }
  linkToParent(e) {
    Ee(this, ii, e);
  }
  /**** triggered — invokes the matching handler, bubbling up if none is found ****/
  //    a matching handler is first looked for in the current Visual - if present,
  //    it is called and its result returned. otherwise the search continues (recur-
  //    sively) one level up (widgets search in the active card, cards in the deck).
  //    without any handler the result is "undefined". an exception thrown by a
  //    handler is forwarded to the original trigger
  async triggered(e, ...t) {
    var a;
    const n = z(this, xr).get(e);
    if (n != null)
      return await n(...t);
    const i = (a = z(this, ii)) == null ? void 0 : a.call(this);
    if (i != null)
      return await i.triggered(e, ...t);
  }
  /**** trigger — synonym for "triggered" ****/
  trigger(e, ...t) {
    return this.triggered(e, ...t);
  }
  /**** fireLocal — invokes a local handler only (no bubbling); used for lifecycle ****/
  async fireLocal(e, ...t) {
    const n = z(this, xr).get(e);
    if (n != null)
      try {
        await n(...t);
      } catch (i) {
        console.warn(`[BrowserCard] handler "${e}" error:`, i);
      }
  }
  /**** renderResult — synchronously invokes the 'render' handler ****/
  renderResult() {
    const e = z(this, xr).get("update");
    if (e != null)
      try {
        e();
      } catch (n) {
        console.warn("[BrowserCard] update handler error:", n);
      }
    const t = z(this, xr).get("render");
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
      z(this, Yn).delete(n), t();
    }, e);
    return z(this, Yn).add(n), n;
  }
  every(e, t) {
    const n = setInterval(t, e);
    return z(this, k0).add(n), n;
  }
  /**** teardown — synchronously clears all handlers, then runs 'obsolete' ****/
  async teardown() {
    const e = z(this, xr).get("obsolete");
    z(this, xr).clear();
    const t = [...z(this, Yn)];
    z(this, Yn).clear();
    const n = [...z(this, k0)];
    if (z(this, k0).clear(), t.forEach((i) => clearTimeout(i)), n.forEach((i) => clearInterval(i)), e != null)
      try {
        await e();
      } catch (i) {
        console.warn('[BrowserCard] handler "obsolete" error:', i);
      }
  }
}
xr = new WeakMap(), ii = new WeakMap(), Yn = new WeakMap(), k0 = new WeakMap();
const hi = /* @__PURE__ */ new Map();
function h5(r, e) {
  return /^https?:\/\//i.test(r) ? r : r.startsWith("/") ? window.location.origin + r : r.includes("/") || r.includes(".") ? new URL(r, window.location.href).href : `https://rozek.github.io/browser-card/behaviors/${e === "deck" ? "decks" : e === "card" ? "cards" : "widgets"}/${r}.js`;
}
function ea(r, e, t, n) {
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
  let y = !1;
  async function I($) {
    if (y) {
      console.warn("[BrowserCard] behaveLike: only one behavior per Visual allowed");
      return;
    }
    y = !0;
    try {
      const E = hi.get($);
      if (E != null) {
        await E(f);
        return;
      }
      const W = await import(h5($, t));
      if (typeof W.default == "function") {
        const Z = {};
        m.forEach((Y, N) => {
          Z[Y] = v[N];
        }), await W.default(Z);
      }
    } catch (E) {
      throw y = !1, E;
    }
  }
  return v[v.length - 1] = I, { Params: m, Args: v };
}
function Va(r, e, t, n, i, a, s, o) {
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
    return typeof f == "string" ? m.find((y) => y.Name === f) ?? null : typeof f == "number" ? m[f] ?? null : null;
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
      return m == null && En(
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
    html: K,
    // intentionally lowercase (see BC_ScriptContext)
    preact: H1
  };
}
const f5 = `{"Id":"bc-deck-229","Name":"BrowserCard-Pitch","readOnly":false,"swipeToAdjacentCard":true,"Script":"","Cards":[{"Id":"bc-card-230","Name":"Card 1","Color":null,"Alpha":1,"dontSearch":false,"Script":"","Widgets":[{"Id":"bc-widget-231","Name":"TitleView 2","Number":1,"Type":"generic","zIndex":1,"Anchors":["left-width","top-height"],"Offsets":[10,150,10,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"BrowserCard"},{"Id":"bc-widget-232","Name":"Label 2","Number":2,"Type":"generic","zIndex":2,"Anchors":["left-width","top-height"],"Offsets":[10,360,50,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"Play with Code and Data directly in the Browser"},{"Id":"bc-widget-233","Name":"StickyTextNote 2","Number":3,"Type":"generic","zIndex":3,"Anchors":["left-width","top-height"],"Offsets":[10,100,90,70],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/StickyTextNote.js')","Configuration":{},"Value":"Hello, World!"},{"Id":"bc-widget-234","Name":"TextView 2","Number":4,"Type":"generic","zIndex":4,"Anchors":["left-width","top-height"],"Offsets":[120,150,80,80],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"at first, it looks like yet another tool for \\"sticky notes\\", but..."},{"Id":"bc-widget-235","Name":"TextView 3","Number":5,"Type":"generic","zIndex":5,"Anchors":["left-width","top-height"],"Offsets":[10,160,170,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"you can add arbitrary media, such as images..."},{"Id":"bc-widget-236","Name":"Widget 2","Number":6,"Type":"generic","zIndex":6,"Anchors":["left-width","top-height"],"Offsets":[180,40,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"w","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-237","Name":"ImageView 2","Number":7,"Type":"generic","zIndex":7,"Anchors":["left-width","top-height"],"Offsets":[10,100,230,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/ImageView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://rozek.github.io/browser-card/dist/img/Mandelbrot_240x240.png"},{"Id":"bc-widget-238","Name":"TextView 4","Number":8,"Type":"generic","zIndex":8,"Anchors":["left-width","top-height"],"Offsets":[120,160,290,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...complete web pages..."},{"Id":"bc-widget-239","Name":"Widget 3","Number":9,"Type":"generic","zIndex":9,"Anchors":["left-width","top-height"],"Offsets":[120,40,250,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"s","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-240","Name":"TextView 5","Number":10,"Type":"generic","zIndex":10,"Anchors":["left-width","top-height"],"Offsets":[160,140,230,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...dynamic content..."},{"Id":"bc-widget-241","Name":"WebView 2","Number":11,"Type":"generic","zIndex":11,"Anchors":["left-width","top-height"],"Offsets":[10,330,350,240],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/WebView.js')","Configuration":{"scaling":"cover","alignment":"center center"},"Value":"https://www.rozek.de"},{"Id":"bc-widget-242","Name":"Widget 4","Number":12,"Type":"generic","zIndex":12,"Anchors":["left-width","top-height"],"Offsets":[290,30,230,110],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-243","Name":"SubtitleView 2","Number":13,"Type":"generic","zIndex":13,"Anchors":["left-width","top-height"],"Offsets":[270,100,200,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/SubtitleView.js')\\n\\non('ready', () => {\\n  const padded = (n) => String(n).padStart(2,'0')\\n  function updateClock () {\\n    const now = new Date()\\n    my.Value = (\\n      padded(now.getHours())   + ':' + \\n      padded(now.getMinutes()) + ':' + \\n      padded(now.getSeconds())\\n    )\\n  }\\n  updateClock()                          // show immediately, then keep current\\n  every(1000, updateClock)\\n})","Configuration":{},"Value":"08:23:07"},{"Id":"bc-widget-244","Name":"Widget 5","Number":14,"Type":"generic","zIndex":14,"Anchors":["left-width","top-height"],"Offsets":[300,60,160,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"e","clockwise":true,"ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-245","Name":"TextView 6","Number":15,"Type":"generic","zIndex":15,"Anchors":["left-width","top-height"],"Offsets":[370,170,140,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"...and even input controls!"},{"Id":"bc-widget-246","Name":"TextlineInput 2","Number":16,"Type":"generic","zIndex":16,"Anchors":["left-width","top-height"],"Offsets":[370,170,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeTextlineInput.js')\\n\\nmy.Value = undefined\\n\\non('update', () => {\\n  my.Value = my.Card.QRCodeValue\\n})\\n\\non('change', (Value) => {\\n  my.Card.QRCodeValue = Value\\n})\\n","Configuration":{"Placeholder":"(enter text for QR code)"},"Value":""},{"Id":"bc-widget-247","Name":"Widget 6","Number":17,"Type":"generic","zIndex":17,"Anchors":["left-width","top-height"],"Offsets":[370,30,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-248","Name":"TextView 7","Number":18,"Type":"generic","zIndex":18,"Anchors":["left-width","top-height"],"Offsets":[400,160,220,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Widgets automatically react on state changes"},{"Id":"bc-widget-249","Name":"Widget 7","Number":19,"Type":"generic","zIndex":19,"Anchors":["left-width","top-height"],"Offsets":[550,50,180,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"e","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-250","Name":"TextView 8","Number":20,"Type":"generic","zIndex":20,"Anchors":["left-width","top-height"],"Offsets":[370,210,280,120],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Use scripting to freely experiment with code and data - a bit like a 2D REPL or like interactive computing notebooks (without the need for a server)"},{"Id":"bc-widget-251","Name":"Widget 8","Number":21,"Type":"generic","zIndex":21,"Anchors":["left-width","top-height"],"Offsets":[370,30,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"s","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-252","Name":"TextView 9","Number":22,"Type":"generic","zIndex":22,"Anchors":["left-width","top-height"],"Offsets":[400,140,400,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Craft complete tools, if you like"},{"Id":"bc-widget-253","Name":"TitleView 3","Number":23,"Type":"generic","zIndex":23,"Anchors":["left-width","top-height"],"Offsets":[360,250,470,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/TitleView.js')","Configuration":{},"Value":"Temperature Converter"},{"Id":"bc-widget-254","Name":"Label 3","Number":24,"Type":"generic","zIndex":24,"Anchors":["left-width","top-height"],"Offsets":[370,100,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Celsius:"},{"Id":"bc-widget-255","Name":"Label 4","Number":25,"Type":"generic","zIndex":25,"Anchors":["left-width","top-height"],"Offsets":[370,100,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/Label.js')","Configuration":{},"Value":"°Fahrenheit:"},{"Id":"bc-widget-256","Name":"NumberInput 2","Number":26,"Type":"generic","zIndex":26,"Anchors":["left-width","top-height"],"Offsets":[470,120,510,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = my.Card.Temperature ?? 0\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = Value\\n})","Configuration":{},"Value":5},{"Id":"bc-widget-257","Name":"NumberInput 3","Number":27,"Type":"generic","zIndex":27,"Anchors":["left-width","top-height"],"Offsets":[470,120,540,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/nativeNumberInput.js')\\n\\nmy.Value = 0\\n\\non('update', () => {\\n  my.Value = (my.Card.Temperature ?? 0) * 9/5 + 32\\n})\\n\\non('change', (Value) => {\\n  my.Card.Temperature = (Value-32) * 5/9\\n})","Configuration":{},"Value":41},{"Id":"bc-widget-258","Name":"Widget","Number":28,"Type":"generic","zIndex":28,"Anchors":["left-width","top-height"],"Offsets":[610,80,480,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/curvedLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-259","Name":"TextView 10","Number":29,"Type":"generic","zIndex":29,"Anchors":["left-width","top-height"],"Offsets":[590,200,380,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"Now export your work as a self-contained web page and BrowserCard serves as a low-code application generator!"},{"Id":"bc-widget-260","Name":"Widget-2","Number":30,"Type":"generic","zIndex":30,"Anchors":["left-width","top-height"],"Offsets":[610,160,150,160],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/QRCodeView.js')\\n\\nconst DefaultValue = 'https://github.com/rozek/browser-card'\\n\\nmy.Value = DefaultValue\\n\\non('update', () => {\\n  const Value = my.Card.QRCodeValue\\n  my.Value = (Value == null) || (Value === '') ? DefaultValue : Value\\n})\\n","Configuration":{"ErrorCorrection":"M","Border":4,"Color":"#000000","Background":"#ffffff"},"Value":"https://github.com/rozek/browser-card"},{"Id":"bc-widget-261","Name":"Widget 9","Number":31,"Type":"generic","zIndex":31,"Anchors":["left-width","top-height"],"Offsets":[670,30,320,60],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"n","ArrowHeads":"end","Color":"#000000","Thickness":2}},{"Id":"bc-widget-262","Name":"HTMLView","Number":32,"Type":"generic","zIndex":32,"Anchors":["left-width","top-height"],"Offsets":[630,120,340,30],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/HTMLView.js')","Configuration":{},"Value":"<span style=\\"font-weight:bold; font-size:18px\\">Have &nbsp; &nbsp; Fun!</span>"},{"Id":"bc-widget-263","Name":"TextView 11","Number":33,"Type":"generic","zIndex":33,"Anchors":["left-width","top-height"],"Offsets":[530,260,30,100],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/MarkdownView.js')","Configuration":{},"Value":"BrowserCard started as a small test for Anthropic Fable 5 (while it was available for non-US citizens), but soon turned out to be quite useful - try yourself!"},{"Id":"bc-widget-264","Name":"Widget 10","Number":34,"Type":"generic","zIndex":34,"Anchors":["left-width","top-height"],"Offsets":[280,240,70,40],"visible":true,"Script":"await behaveLike('https://rozek.github.io/browser-card/behaviors/widgets/straightLine.js')","Configuration":{"Direction":"ne","ArrowHeads":"end","Color":"#000000","Thickness":2}}],"Temperature":5,"QRCodeValue":""}],"SnapToGrid":true,"CardWidth":800,"CardHeight":600}`, od = JSON.parse(f5), p5 = JSON.stringify(od), Xt = Kc("browser-card", "decks"), H0 = "bc-deck:", _s = "bc-remember-deck", ta = "bc-last-deck";
function fo() {
  try {
    return localStorage.getItem(_s) === "1";
  } catch {
    return !1;
  }
}
function m5(r) {
  try {
    fo() && r !== "" && localStorage.setItem(ta, r);
  } catch {
  }
}
function g5(r, e) {
  try {
    r ? (localStorage.setItem(_s, "1"), e !== "" && localStorage.setItem(ta, e)) : (localStorage.removeItem(_s), localStorage.removeItem(ta));
  } catch {
  }
}
function ra(r) {
  return (
    // "Id" is runtime-only - assigned on load
    S.ValueIsPlainObject(r) && S.ValueIsString(r.Type) && oo(r.Anchors) && lo(r.Offsets)
  );
}
function po(r) {
  return (
    // "Id" is runtime-only - assigned on load
    S.ValueIsPlainObject(r) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Widgets) && r.Widgets.every(ra)
  );
}
function Br(r) {
  return S.ValueIsPlainObject(r) && S.ValueIsString(r.Name) && S.ValueIsArray(r.Cards) && r.Cards.length >= 1 && // a deck must have at least one card
  r.Cards.every(po);
}
const Cs = "web application/x-browsercard-card", As = "web application/x-browsercard-widget";
async function gc(r, e) {
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
async function b5() {
  try {
    const r = await navigator.clipboard.read();
    for (const e of r) {
      if (e.types.includes(Cs))
        return { Kind: "card", Serialization: await (await e.getType(Cs)).text() };
      if (e.types.includes(As))
        return { Kind: "widget", Serialization: await (await e.getType(As)).text() };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not inspect the clipboard - trying plain text:", r);
  }
  try {
    const r = (await navigator.clipboard.readText()).trim(), e = JSON.parse(r), t = Array.isArray(e) && e.length > 0 && e.every(ra);
    switch (!0) {
      case po(e):
        return { Kind: "card", Serialization: r };
      case ra(e):
        return { Kind: "widget", Serialization: r };
      case t:
        return { Kind: "widget", Serialization: r };
    }
  } catch (r) {
    console.warn("[BrowserCard] could not read from the clipboard:", r);
  }
  return null;
}
function v5(r) {
  var t;
  const e = JSON.parse(JSON.stringify(r));
  return delete e.Id, (t = e.Cards) == null || t.forEach((n) => {
    var i;
    delete n.Id, (i = n.Widgets) == null || i.forEach((a) => {
      delete a.Id;
    });
  }), e;
}
const w5 = [
  "x",
  "y",
  "Width",
  "Height",
  "Position",
  "Size",
  "Geometry",
  "changeGeometryTo"
];
function ld(r) {
  var e;
  (e = r.Cards) == null || e.forEach((t) => {
    var n;
    (n = t.Widgets) == null || n.forEach((i) => {
      w5.forEach((a) => {
        delete i[a];
      });
    });
  });
}
function Ni(r) {
  const e = v5(r);
  return ld(e), e;
}
function x5(r) {
  var e;
  (e = r.Cards) == null || e.forEach((t) => {
    const n = t.Widgets;
    if (n == null)
      return;
    n.some((a) => typeof a.zIndex == "number") && n.sort((a, s) => (a.zIndex ?? 0) - (s.zIndex ?? 0)), n.forEach((a) => {
      delete a.zIndex, delete a.Number;
    });
  });
}
function Kn(r) {
  ld(r), x5(r), r.Id = dr("deck"), r.Cards.forEach((e) => {
    e.Id = dr("card"), e.Widgets.forEach((t) => {
      t.Id = dr("widget");
    });
  });
}
function y5(r) {
  var t, n;
  const e = {};
  if (r.FontFamily && (e.fontFamily = r.FontFamily), r.FontSize != null && (e.fontSize = `${r.FontSize}px`), r.FontWeight && (e.fontWeight = n2[r.FontWeight]), r.FontStyle && (e.fontStyle = r.FontStyle), r.LineHeight != null && (e.lineHeight = `${r.LineHeight}px`), r.ForegroundColor && (e.color = r.ForegroundColor), r.TextAlignment && (e.textAlign = r.TextAlignment), r.Opacity != null && (e.opacity = r.Opacity), r.Cursor && (e.cursor = r.Cursor), (t = r.TextDecoration) != null && t.isActive) {
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
function k5(r) {
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
function Qt(r, e, t, n) {
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
function N0(r, e, t, n, i, a, s) {
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
function S5(r, e, t, n, i) {
  let a = null, s = null, o;
  return new Proxy(r, {
    get(l, d) {
      if (d === Cr)
        return s;
      if (d === sn)
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
          const { left: h } = Qt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "y": {
          const { top: h } = Qt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "Width": {
          const { width: h } = Qt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "Height": {
          const { height: h } = Qt(l.Anchors, l.Offsets, e.current.W, e.current.H);
          return h;
        }
        case "changeGeometryTo":
          return (h, f, m, v) => {
            const { W: y, H: I } = e.current, { left: $, top: E, width: R, height: W } = Qt(l.Anchors, l.Offsets, y, I), Z = N0(h ?? $, f ?? E, m ?? R, v ?? W, l.Anchors, y, I);
            return l.Offsets = Z, i(), Z;
          };
        case "rerender":
          return i;
        // force a re-render of this widget
        default:
          return Reflect.get(l, d);
      }
    },
    set(l, d, h) {
      if (d === Cr)
        return s = h, !0;
      if (d === sn)
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
      return Object.is(Reflect.get(l, d), h) || (Reflect.set(l, d, h), i()), !0;
    }
  });
}
function _5(r, e, t, n, i) {
  let a = null, s = null, o, l;
  return l = new Proxy(r, {
    get(d, h) {
      if (h === Cr)
        return s;
      if (h === sn)
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
          return n;
        // force a re-render of this card and its widgets
        case "Index":
          return e.Cards.indexOf(d);
        default:
          return Reflect.get(d, h);
      }
    },
    set(d, h, f) {
      return h === Cr ? (s = f, !0) : h === sn ? (o = f, !0) : h === "View" ? !0 : h === "own" ? (a = f, !0) : h === "Index" ? (i == null || i(d, Number(f)), !0) : (Object.is(Reflect.get(d, h), f) || (Reflect.set(d, h, f), n()), !0);
    }
  }), l;
}
function C5(r, e, t) {
  let n = null, i = null, a, s = "", o = 0, l = 0, d;
  return d = new Proxy(r, {
    get(h, f) {
      if (f === Cr)
        return i;
      if (f === ga)
        return t;
      if (f === sn)
        return a;
      if (f === Mn)
        return s;
      if (f === ri)
        return o;
      if (f === ti)
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
          return Reflect.get(h, f) ?? ho;
        case "Console_CharLimit":
          return Reflect.get(h, f) ?? uo;
        default:
          return Reflect.get(h, f);
      }
    },
    set(h, f, m) {
      return f === Cr ? (i = m, !0) : f === sn ? (a = m, !0) : f === "View" ? !0 : f === "own" ? (n = m, !0) : f === Mn ? (s = m, !0) : f === ri ? (o = m, !0) : f === ti ? (l = m, !0) : (Object.is(Reflect.get(h, f), m) || (Reflect.set(h, f, m), t()), !0);
    }
  }), d;
}
function A5(r, e, t, n) {
  const { left: i, top: a, width: s, height: o } = Qt(r.Anchors, r.Offsets, t, n);
  return {
    left: i,
    top: a,
    width: s,
    height: o,
    zIndex: e,
    // derived from the widget's array position
    display: r.visible ? void 0 : "none",
    ...y5(r),
    ...k5(r)
  };
}
function Mi(r, e, t, n, i, a) {
  const s = Math.sqrt(t * t + n * n);
  if (s < 1e-3)
    return "";
  const o = t / s, l = n / s, d = r - i * o, h = e - i * l;
  return `${r},${e} ${d - a * l},${h + a * o} ${d + a * l},${h - a * o}`;
}
function $5(r, e, t) {
  const n = r.BorderColor ?? "#333", i = r.BorderWidth ?? 2, a = r.FillColor ?? "transparent";
  if (r.Variant === "rectangle" || r.Variant === "rounded-rectangle" || r.Variant === "oval") {
    const $ = r.Variant === "oval" ? "50%" : r.Variant === "rounded-rectangle" ? `${r.CornerRadius ?? 12}px` : void 0;
    return K`
      <div style=${{
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      background: a,
      border: `${i}px solid ${n}`,
      borderRadius: $
    }}></div>
    `;
  }
  if (r.Variant === "polygon") {
    const $ = Math.max(3, r.Sides ?? 6), E = e / 2, R = t / 2, W = e / 2 - i, Z = t / 2 - i, Y = Array.from({ length: $ }, (N, ce) => {
      const ue = 2 * Math.PI * ce / $ - Math.PI / 2;
      return `${E + W * Math.cos(ue)},${R + Z * Math.sin(ue)}`;
    }).join(" ");
    return K`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <polygon points=${Y}
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
    const $ = s ? K`<polygon
      points=${Mi(0, 0, -e, -t, l, d)} fill=${n} stroke="none"/>` : null, E = o ? K`<polygon
      points=${Mi(e, t, e, t, l, d)} fill=${n} stroke="none"/>` : null;
    return K`
      <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
        <line x1="0" y1="0" x2=${e} y2=${t} ...${h}/>
        ${$}${E}
      </svg>
    `;
  }
  const f = r.Curvature ?? 0.4, m = e / 2 - f * t, v = t / 2 + f * e, y = s ? K`<polygon
    points=${Mi(0, 0, -m, -v, l, d)} fill=${n} stroke="none"/>` : null, I = o ? K`<polygon
    points=${Mi(e, t, e - m, t - v, l, d)} fill=${n} stroke="none"/>` : null;
  return K`
    <svg width="100%" height="100%" viewBox=${`0 0 ${e} ${t}`}>
      <path d=${`M 0 0 Q ${m} ${v} ${e} ${t}`} ...${h}/>
      ${y}${I}
    </svg>
  `;
}
hi.set("button", async ({ on: r, me: e, html: t, trigger: n }) => {
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
hi.set("field", async ({ on: r, me: e, html: t }) => {
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
hi.set("shape", async ({ on: r, me: e, html: t }) => {
  const n = e;
  r("render", () => {
    const i = n.Width ?? 0, a = n.Height ?? 0;
    return t`${$5(n, i, a)}`;
  });
});
hi.set("picture", async ({ on: r, me: e, html: t }) => {
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
function T5({
  Obj: r,
  containerW: e,
  containerH: t,
  makeContext: n,
  deckProxy: i,
  cardProxy: a,
  onWidgetProxy: s,
  onReady: o
}) {
  const [, l] = je(0), d = Fe(!1), h = Ht(() => {
    d.current || l((P) => P + 1);
  }, []), f = Fe(null);
  f.current == null && (f.current = new Qi());
  const m = Fe({ W: e, H: t });
  m.current = { W: e, H: t };
  const v = Fe(null);
  v.current == null && (v.current = S5(r, m, i, a, h));
  const y = v.current, I = Ht(
    (P) => {
      y[sn] = P ?? void 0;
    },
    [y]
  ), $ = Fe(o);
  $.current = o;
  const E = Fe(null);
  E.current == null && (E.current = n(y));
  const R = Fe(void 0);
  R.current == null && (R.current = {
    Configuration: r.Configuration ?? {}
  });
  const Z = (/* @__PURE__ */ new Set(["button", "field", "shape", "picture"])).has(r.Type) ? `await behaveLike(${JSON.stringify(r.Type)})
` : "";
  if (Jt(() => {
    const P = f.current;
    R.current.Configuration = r.Configuration ?? {};
    const { Params: ge, Args: Ne } = ea(P, E.current, "widget", R.current);
    y[Cr] = P, P.linkToParent(
      // bubble unhandled events up
      () => a[Cr] ?? null
    ), s(r.Id, y);
    const xe = r.Script ?? "";
    let U = !0;
    if (xe.trim() !== "")
      try {
        new Function(`return (async () => {
${xe}
})()`);
      } catch (te) {
        console.warn("[BrowserCard] syntax error in script of widget " + S.quoted(r.Name) + " - ignored:", te), U = !1;
      }
    const q = U ? Z + xe : "";
    return P.run(q, ge, Ne).catch((te) => {
      console.warn("[BrowserCard] widget script error:", te);
    }).then(async () => {
      h(), await P.fireLocal("ready"), $.current(r.Id);
    }), () => {
      P.teardown();
    };
  }, [r.Script, r.Configuration]), !r.visible)
    return null;
  const Y = f.current;
  d.current = !0;
  let N;
  try {
    N = Y.renderResult() ?? null;
  } finally {
    d.current = !1;
  }
  const ce = r.Type === "shape" || r.Type === "button" ? { overflow: "visible" } : { overflow: "hidden" }, ue = a.Widgets.indexOf(r) + 1;
  return K`
    <div
      ref=${I}
      class=${`bc-widget${r.Type === "shape" ? " bc-shape" : ""}`}
      style=${{ ...A5(r, ue, e, t), ...ce }}
    >
      <${ys} key=${"safe:" + String(r.Script)}>${N}<//>
    </div>
  `;
}
const b0 = 8, I5 = "data:image/svg+xml," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="120"><rect width="160" height="120" fill="#e5e7eb"/><circle cx="55" cy="35" r="10" fill="#9ca3af"/><path d="M30 90 L65 50 L90 75 L110 60 L130 90 Z" fill="#9ca3af"/></svg>'
);
function $s(r, e, t = " ") {
  const n = /^(.*?)([ -])(\d+)$/.exec(r);
  let i, a, s;
  n != null ? (i = n[1], a = n[2], s = parseInt(n[3], 10)) : (i = r, a = t, s = 1);
  let o = r;
  for (; e.has(o); )
    s += 1, o = `${i}${a}${s}`;
  return o;
}
function N5(r, e, t, n) {
  const i = {
    button: { BaseName: "Button", Width: 140, Height: 36 },
    field: { BaseName: "Field", Width: 200, Height: 80 },
    shape: { BaseName: "Shape", Width: 140, Height: 100 },
    picture: { BaseName: "Picture", Width: 160, Height: 120 },
    generic: { BaseName: "Widget", Width: 200, Height: 120 }
  }, { BaseName: a, Width: s, Height: o } = i[r], l = new Set(e.Widgets.map((f) => f.Name)), d = $s(a, l, "-"), h = {
    // appended last ⇒ on top of the stack
    Id: dr("widget"),
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
        ImageData: I5,
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
function M5({
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
  const h = Fe(null), f = Fe(null), m = Fe(null), [v, y] = je(null);
  function I(U) {
    const q = Math.min(...U.map((M) => M.left)), te = Math.min(...U.map((M) => M.top)), O = Math.max(...U.map((M) => M.left + M.width)), G = Math.max(...U.map((M) => M.top + M.height));
    return { left: q, top: te, width: O - q, height: G - te };
  }
  function $(U, q, te, O) {
    if (O.length === 0)
      return;
    U.stopPropagation(), U.preventDefault(), U.currentTarget.setPointerCapture(U.pointerId);
    const G = O.map((M) => ({
      Obj: M,
      Origin: Qt(M.Anchors, M.Offsets, e, t)
    }));
    f.current = {
      PointerId: U.pointerId,
      Mode: q,
      Direction: te,
      startX: U.clientX,
      startY: U.clientY,
      GroupOrigin: I(G.map((M) => M.Origin)),
      Items: G,
      captured: !1
    };
  }
  function E(U) {
    const q = f.current;
    if (q == null || U.pointerId !== q.PointerId)
      return;
    q.captured || (q.captured = !0, d == null || d());
    let te = (U.clientX - q.startX) / n, O = (U.clientY - q.startY) / n;
    const G = q.GroupOrigin;
    if (q.Mode === "move") {
      l.isActive && (te = Math.round((G.left + te) / l.Width) * l.Width - G.left, O = Math.round((G.top + O) / l.Height) * l.Height - G.top);
      for (const { Obj: M, Origin: re } of q.Items)
        M.Offsets = N0(
          re.left + te,
          re.top + O,
          re.width,
          re.height,
          M.Anchors,
          e,
          t
        );
    } else {
      const M = q.Direction;
      l.isActive && (M.includes("w") && (te = Math.round((G.left + te) / l.Width) * l.Width - G.left), M.includes("e") && (te = Math.round((G.left + G.width + te) / l.Width) * l.Width - (G.left + G.width)), M.includes("n") && (O = Math.round((G.top + O) / l.Height) * l.Height - G.top), M.includes("s") && (O = Math.round((G.top + G.height + O) / l.Height) * l.Height - (G.top + G.height)));
      for (const { Obj: re, Origin: Te } of q.Items) {
        let { left: Me, top: Ve, width: ze, height: Ye } = Te;
        M.includes("w") && (Me += te, ze -= te), M.includes("e") && (ze += te), M.includes("n") && (Ve += O, Ye -= O), M.includes("s") && (Ye += O), ze < b0 && (M.includes("w") && (Me = Te.left + Te.width - b0), ze = b0), Ye < b0 && (M.includes("n") && (Ve = Te.top + Te.height - b0), Ye = b0), re.Offsets = N0(Me, Ve, ze, Ye, re.Anchors, e, t);
      }
    }
    o();
  }
  function R(U) {
    const q = f.current;
    q == null || U.pointerId !== q.PointerId || (U.currentTarget.releasePointerCapture(U.pointerId), f.current = null);
  }
  function W(U) {
    const q = h.current;
    if (q == null)
      return null;
    const te = q.getBoundingClientRect();
    return { x: (U.clientX - te.left) / n, y: (U.clientY - te.top) / n };
  }
  function Z(U) {
    if (U.button !== 0)
      return;
    const q = W(U);
    q != null && (U.currentTarget.setPointerCapture(U.pointerId), m.current = {
      PointerId: U.pointerId,
      x0: q.x,
      y0: q.y,
      additive: U.shiftKey || U.metaKey,
      moved: !1,
      box: { left: q.x, top: q.y, width: 0, height: 0 }
    });
  }
  function Y(U) {
    const q = m.current;
    if (q == null || U.pointerId !== q.PointerId)
      return;
    const te = W(U);
    if (te == null)
      return;
    const O = {
      left: Math.min(q.x0, te.x),
      top: Math.min(q.y0, te.y),
      width: Math.abs(te.x - q.x0),
      height: Math.abs(te.y - q.y0)
    };
    (O.width > 3 || O.height > 3) && (q.moved = !0), q.box = O, y(O);
  }
  function N(U) {
    const q = m.current;
    if (q == null || U.pointerId !== q.PointerId)
      return;
    if (U.currentTarget.releasePointerCapture(U.pointerId), m.current = null, y(null), !q.moved) {
      q.additive || a(null, !1);
      return;
    }
    const te = q.box, O = r.filter((G) => {
      const M = Qt(G.Anchors, G.Offsets, e, t);
      return !(M.left > te.left + te.width || M.left + M.width < te.left || M.top > te.top + te.height || M.top + M.height < te.top);
    }).map((G) => G.Id);
    s(O, q.additive);
  }
  const ce = r.filter((U) => i.includes(U.Id)), ue = Math.max(6, 8 / n), P = ["nw", "n", "ne", "e", "se", "s", "sw", "w"], ge = ce.length > 0 ? I(ce.map((U) => Qt(U.Anchors, U.Offsets, e, t))) : null;
  function Ne(U, q) {
    return {
      width: ue,
      height: ue,
      cursor: U + "-resize",
      left: (U.includes("w") ? 0 : U.includes("e") ? q.width : q.width / 2) - ue / 2,
      top: (U.includes("n") ? 0 : U.includes("s") ? q.height : q.height / 2) - ue / 2
    };
  }
  const xe = l.isActive ? {
    backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.22) 1px, transparent 1px)",
    backgroundSize: `${l.Width}px ${l.Height}px`
  } : {};
  return K`
      <div class="bc-edit-layer" ref=${h} style=${xe}
        onPointerDown=${Z}
        onPointerMove=${Y}
        onPointerUp=${N}
        onContextMenu=${(U) => U.preventDefault()}>
        ${r.map((U, q) => {
    const te = Qt(U.Anchors, U.Offsets, e, t);
    return K`
            <div key=${U.Id}
              class=${`bc-edit-hit${U.visible ? "" : " invisible"}`}
              style=${{ left: te.left, top: te.top, width: te.width, height: te.height, zIndex: q + 1 }}
              onPointerDown=${(O) => {
      if (O.stopPropagation(), O.shiftKey || O.metaKey) {
        a(U.Id, !0);
        return;
      }
      i.includes(U.Id) ? $(O, "move", "", r.filter((M) => i.includes(M.Id))) : (a(U.Id, !1), $(O, "move", "", [U]));
    }}
              onPointerMove=${E}
              onPointerUp=${R}
              onContextMenu=${(O) => O.preventDefault()}
            ></div>
          `;
  })}
        ${ce.length > 1 && ce.map((U) => {
    const q = Qt(U.Anchors, U.Offsets, e, t);
    return K`
            <div key=${"member:" + U.Id} class="bc-selection-member"
              style=${{ left: q.left, top: q.top, width: q.width, height: q.height }}></div>
          `;
  })}
        ${ge != null && K`
          <div class="bc-selection-frame"
            style=${{ left: ge.left, top: ge.top, width: ge.width, height: ge.height }}>
            ${P.map((U) => K`
              <div key=${U} class="bc-handle" style=${Ne(U, ge)}
                onPointerDown=${(q) => $(q, "resize", U, ce)}
                onPointerMove=${E}
                onPointerUp=${R}
                onContextMenu=${(q) => q.preventDefault()}
              ></div>
            `)}
          </div>
        `}
        ${v != null && K`
          <div class="bc-marquee"
            style=${{ left: v.left, top: v.top, width: v.width, height: v.height }}></div>
        `}
      </div>
    `;
}
function E5({
  State: r,
  onClose: e
}) {
  const [t, n] = je(() => ({
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
    const f = a.current;
    f == null || h.pointerId !== f.PointerId || (h.currentTarget.releasePointerCapture(h.pointerId), a.current = null);
  }
  function d() {
    r.onCommit(i.current), e();
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
function z5({
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
  onCopy: y
}) {
  if (r == null) {
    let O = function(M, re) {
      v == null || v(`card:${h.Id}:${M}`), h[M] = re, i();
    }, G = function(M, re) {
      f != null && (v == null || v(`deck:${M}`), f[M] = re, i());
    };
    return e > 1 ? K`
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
                onChange=${(M) => d == null ? void 0 : d(parseInt(M.target.value, 10))}>
                ${a.map((M, re) => K`<option key=${re} value=${String(re)}>${M}</option>`)}
              </select>
            </div>

            <button class="bc-props-btn copy"   onClick=${y}>Copy Widgets</button>
            <button class="bc-props-btn delete" onClick=${o}>Delete Widgets</button>
          </div>
        ` : h == null ? K`
          <div class="bc-props-panel">
            <div class="bc-props-empty">
              no widget selected<br/><br/>
              click a widget to inspect and edit its properties<br/><br/>
              use "+ New" in the menu bar to create a new widget
            </div>
          </div>
        ` : K`
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
              onInput=${(M) => O("Name", M.target.value)}/>
          </div>
          ${xc("Color", h.Color ?? "#ffffff00", (M) => O("Color", M))}
          <div class="bc-props-row">
            <label>searchable</label>
            <input type="checkbox" checked=${!h.dontSearch}
              onChange=${(M) => O("dontSearch", !M.target.checked)}/>
          </div>

          ${f != null && K`
            <div class="bc-props-section">Card Size (Deck)</div>
            <div class="bc-props-row">
              <label>Width</label>
              <input type="number" min="50" value=${f.CardWidth ?? 800}
                onInput=${(M) => {
      const re = parseFloat(M.target.value);
      isFinite(re) && re >= 50 && G("CardWidth", re);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Height</label>
              <input type="number" min="50" value=${f.CardHeight ?? 600}
                onInput=${(M) => {
      const re = parseFloat(M.target.value);
      isFinite(re) && re >= 50 && G("CardHeight", re);
    }}/>
            </div>

            <div class="bc-props-section">Grid (Deck)</div>
            <div class="bc-props-row">
              <label>snap to grid</label>
              <input type="checkbox" checked=${f.SnapToGrid === !0}
                onChange=${(M) => G("SnapToGrid", M.target.checked)}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Width</label>
              <input type="number" min="1" value=${f.GridWidth ?? 10}
                onInput=${(M) => {
      const re = parseFloat(M.target.value);
      isFinite(re) && re >= 1 && G("GridWidth", re);
    }}/>
            </div>
            <div class="bc-props-row">
              <label>Grid Height</label>
              <input type="number" min="1" value=${f.GridHeight ?? 10}
                onInput=${(M) => {
      const re = parseFloat(M.target.value);
      isFinite(re) && re >= 1 && G("GridHeight", re);
    }}/>
            </div>

            <div class="bc-props-section">Script (Deck)</div>
            <div class="bc-props-row column">
              <div class="bc-props-rowheader">
                <label>Script</label>
                ${m != null && K`
                  <button class="bc-props-expand" title="open in editor window"
                    onClick=${() => m(
      `Deck "${f.Name}" - Script`,
      f.Script ?? "",
      (M) => G("Script", M)
    )}>⤢</button>
                `}
              </div>
              <textarea rows="10" spellcheck=${!1} defaultValue=${f.Script ?? ""}
                onChange=${(M) => G("Script", M.target.value)}
              ></textarea>
              <div class="bc-props-hint">applied when the field loses focus</div>
            </div>
          `}

          <div class="bc-props-section">Script</div>
          <div class="bc-props-row column">
            <div class="bc-props-rowheader">
              <label>Script</label>
              ${m != null && K`
                <button class="bc-props-expand" title="open in editor window"
                  onClick=${() => m(
      `Card "${h.Name}" - Script`,
      h.Script ?? "",
      (M) => O("Script", M)
    )}>⤢</button>
              `}
            </div>
            <textarea rows="10" spellcheck=${!1} defaultValue=${h.Script ?? ""}
              onChange=${(M) => O("Script", M.target.value)}
            ></textarea>
            <div class="bc-props-hint">applied when the field loses focus</div>
          </div>
        </div>
      `;
  }
  const I = Qt(r.Anchors, r.Offsets, t, n);
  function $(O, G) {
    v == null || v(`prop:${r.Id}:${O}`), r[O] = G, i();
  }
  function E(O, G, M, re) {
    v == null || v(`geo:${r.Id}`), r.Offsets = N0(
      O ?? I.left,
      G ?? I.top,
      M ?? I.width,
      re ?? I.height,
      r.Anchors,
      t,
      n
    ), i();
  }
  function R(O, G) {
    v == null || v(`anchors:${r.Id}`);
    const M = [...r.Anchors];
    M[O] = G, r.Anchors = M, r.Offsets = N0(
      I.left,
      I.top,
      I.width,
      I.height,
      M,
      t,
      n
    ), i();
  }
  function W(O, G) {
    return K`<input type="number" value=${Math.round(O * 100) / 100}
        onInput=${(M) => {
      const re = parseFloat(M.target.value);
      isFinite(re) && G(re);
    }}/>`;
  }
  function Z(O, G) {
    return K`<div class="bc-props-row">
        <label>${O}</label>
        <input type="text" value=${r[G] ?? ""}
          onInput=${(M) => $(G, M.target.value)}/>
      </div>`;
  }
  function Y(O, G, M = 0) {
    return K`<div class="bc-props-row">
        <label>${O}</label>
        ${W(
      r[G] ?? M,
      (re) => $(G, re)
    )}
      </div>`;
  }
  function N(O, G) {
    return K`<div class="bc-props-row">
        <label>${O}</label>
        <input type="checkbox" checked=${!!r[G]}
          onChange=${(M) => $(G, M.target.checked)}/>
      </div>`;
  }
  function ce(O, G, M) {
    return K`<div class="bc-props-row">
        <label>${O}</label>
        <select value=${r[G] ?? M[0]}
          onChange=${(re) => $(G, re.target.value)}>
          ${M.map((re) => K`<option key=${re} value=${re}>${re}</option>`)}
        </select>
      </div>`;
  }
  function ue(O, G, M) {
    const re = r[G] ?? M;
    return xc(O, re, (Te) => $(G, Te));
  }
  const P = (
    // user-facing name of the widget's type
    r.Type === "generic" ? "custom widget" : r.Type
  );
  function ge(O, G, M) {
    return K`<div class="bc-props-rowheader">
        <label>${O}</label>
        ${m != null && K`
          <button class="bc-props-expand" title="open in editor window"
            onClick=${() => m(
      `${P} "${r.Name}" - ${O}`,
      G(),
      M
    )}>⤢</button>
        `}
      </div>`;
  }
  function Ne(O, G, M = 4) {
    return K`<div class="bc-props-row column">
        ${ge(
      O,
      () => String(r[G] ?? ""),
      (re) => $(G, re)
    )}
        <textarea rows=${M} defaultValue=${r[G] ?? ""}
          onInput=${(re) => $(G, re.target.value)}
        ></textarea>
      </div>`;
  }
  function xe(O) {
    try {
      $("Configuration", JSON.parse(O));
    } catch (G) {
      console.warn('[BrowserCard] invalid JSON for "Configuration":', G), window.alert("The given configuration is no valid JSON and was not applied.");
    }
  }
  function U() {
    return K`<div class="bc-props-row column">
        ${ge(
      "Configuration (JSON)",
      () => JSON.stringify(r.Configuration ?? {}, null, 2),
      xe
    )}
        <textarea rows="5" spellcheck=${!1}
          defaultValue=${JSON.stringify(r.Configuration ?? {}, null, 2)}
          onChange=${(O) => xe(O.target.value)}
        ></textarea>
        <div class="bc-props-hint">read in the script via the "Configuration" object · applied on blur</div>
      </div>`;
  }
  function q() {
    return K`<div class="bc-props-row column">
        ${ge(
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
  let te = null;
  switch (r.Type) {
    case "button":
      te = K`
          ${ce("Style", "Variant", ["rounded-rect", "rectangle", "oval", "shadow", "checkbox", "radio", "standard", "transparent"])}
          ${Z("Value", "Value")}
          ${N("show label", "showName")}
          ${N("enabled", "enabled")}
          ${N("auto-hilite", "autoHilite")}
          ${N("hilite", "Hilite")}
        `;
      break;
    case "field":
      te = K`
          ${ce("Style", "Variant", ["opaque", "transparent", "shadow", "rectangle"])}
          ${Ne("Value", "Value")}
          ${N("locked", "lockText")}
          ${N("scrolling", "scrolling")}
          ${N("show lines", "showLines")}
          ${Y("Font Size", "FontSize", 14)}
          ${ce("Font Weight", "FontWeight", ["normal", "bold"])}
          ${ce("Alignment", "TextAlign", ["left", "center", "right"])}
          ${ue("Color", "Color", "#111111")}
        `;
      break;
    case "shape":
      te = K`
          ${ce("Style", "Variant", ["rectangle", "rounded-rectangle", "oval", "line", "arc", "polygon"])}
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
      te = K`
          ${ce("Style", "Variant", ["scale-aspect-fill", "scale-aspect-fit", "scale-to-fill", "actual-size", "center"])}
          ${Z("Image URL", "ImageData")}
        `;
      break;
    default:
      te = K`
          ${Ne("Value", "Value")}
          ${U()}
        `;
  }
  return K`
      <div class="bc-props-panel">
        <div class="bc-props-title">${r.Name}</div>
        <div class="bc-props-subtitle">${P} · ${r.Id}</div>

        <div class="bc-props-section">General</div>
        ${Z("Name", "Name")}
        ${N("visible", "visible")}

        <div class="bc-props-section">Geometry</div>
        <div class="bc-props-row">
          <label>Position</label>
          ${W(I.left, (O) => E(O))}
          ${W(I.top, (O) => E(void 0, O))}
        </div>
        <div class="bc-props-row">
          <label>Size</label>
          ${W(I.width, (O) => E(void 0, void 0, O))}
          ${W(I.height, (O) => E(void 0, void 0, void 0, O))}
        </div>
        <div class="bc-props-row">
          <label>Anchors (h)</label>
          <select value=${r.Anchors[0]}
            onChange=${(O) => R(0, O.target.value)}>
            ${q1.map((O) => K`<option key=${O} value=${O}>${O}</option>`)}
          </select>
        </div>
        <div class="bc-props-row">
          <label>Anchors (v)</label>
          <select value=${r.Anchors[1]}
            onChange=${(O) => R(1, O.target.value)}>
            ${W1.map((O) => K`<option key=${O} value=${O}>${O}</option>`)}
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
            ${a.map((O, G) => K`<option key=${G} value=${String(G)}>${O}</option>`)}
          </select>
        </div>

        <div class="bc-props-section">${r.Type === "generic" ? "Custom Widget" : "Appearance"}</div>
        ${te}

        <div class="bc-props-section">Script</div>
        ${q()}

        <button class="bc-props-btn copy"   onClick=${y}>Copy Widget</button>
        <button class="bc-props-btn delete" onClick=${o}>Delete Widget</button>
      </div>
    `;
}
function w0(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function bc(r) {
  const e = /^#([0-9a-f]{6})(?:[0-9a-f]{2})?$/i.exec(r);
  return e == null ? "#ffffff" : "#" + e[1].toLowerCase();
}
function vc(r) {
  if (r == null || r === "transparent")
    return 0;
  const e = /^#[0-9a-f]{6}([0-9a-f]{2})$/i.exec(r);
  if (e != null)
    return Math.round(parseInt(e[1], 16) / 255 * 100);
  const t = /^rgba\([^,]+,[^,]+,[^,]+,\s*([01]|0?\.[0-9]+)\s*\)$/i.exec(r);
  return t != null ? Math.round(parseFloat(t[1]) * 100) : 100;
}
function wc(r, e) {
  const t = /^#?([0-9a-f]{6})$/i.exec(r), n = t == null ? "ffffff" : t[1].toLowerCase(), i = Math.round(w0(e, 0, 100) / 100 * 255).toString(16).padStart(2, "0");
  return "#" + n + i;
}
function xc(r, e, t) {
  return K`<div class="bc-props-row">
    <label>${r}</label>
    <input type="color" value=${bc(e)}
      onInput=${(n) => t(wc(n.target.value, vc(e)))}/>
    <input class="bc-props-opacity" type="number" min="0" max="100" title="opacity (%)"
      value=${vc(e)}
      onInput=${(n) => {
    const i = parseInt(n.target.value, 10);
    isFinite(i) && t(wc(bc(e), i));
  }}/>
    <input type="text" value=${e}
      onChange=${(n) => {
    const i = n.target.value.trim();
    S.ValueIsColor(i) && t(i);
  }}/>
  </div>`;
}
function R5({
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
  onSelectMany: y,
  onEdited: I,
  Grid: $,
  onBeforeEdit: E,
  withChrome: R = !0
}) {
  const [, W] = je(0), Z = Fe(!1), Y = Ht(() => {
    Z.current || W((be) => be + 1);
  }, []), N = Fe(null);
  N.current == null && (N.current = new Qi());
  const ce = Fe(o);
  ce.current = o;
  const ue = M0(
    () => r.Widgets,
    [r]
  ), P = Fe([]), ge = Fe(/* @__PURE__ */ new Map()), Ne = Fe(null);
  Ne.current == null && (Ne.current = _5(r, a, P, Y, l));
  const xe = Ne.current, U = Ht(
    (be) => {
      xe[sn] = be ?? void 0;
    },
    [xe]
  ), q = Fe(/* @__PURE__ */ new Set()), te = Fe(!1), O = Fe(!1), G = Fe(ue);
  G.current = ue;
  const M = Fe(() => {
  });
  M.current = () => {
    if (O.current || !te.current)
      return;
    const be = q.current;
    G.current.map((gt) => gt.Id).every((gt) => be.has(gt)) && (O.current = !0, N.current.fireLocal("ready").then(() => ce.current()));
  };
  const re = Ht((be) => {
    q.current.add(be), M.current();
  }, []), Te = Ht((be, Oe) => {
    ge.current.set(be, Oe), P.current = G.current.map((gt) => ge.current.get(gt.Id)).filter((gt) => gt != null);
  }, []), Me = Fe(null);
  Me.current == null && (Me.current = i(xe)), Jt(() => {
    s(xe);
    const be = N.current;
    xe[Cr] = be, be.linkToParent(
      // and this card up to the deck
      () => a[Cr] ?? null
    );
    const { Params: Oe, Args: gt } = ea(be, Me.current, "card");
    te.current = !1, O.current = !1, q.current.clear();
    const me = r.Script ?? "";
    let Ke = !0;
    if (me.trim() !== "")
      try {
        new Function(`return (async () => {
${me}
})()`);
      } catch (ut) {
        console.warn("[BrowserCard] syntax error in card script - ignored:", ut), Ke = !1;
      }
    return be.run(Ke ? me : "", Oe, gt).catch((ut) => {
      console.warn("[BrowserCard] card script error:", ut);
    }).then(() => {
      te.current = !0, Y(), M.current();
    }), () => {
      be.teardown();
    };
  }, [r.Script]);
  const Ve = N.current;
  Z.current = !0;
  let ze;
  try {
    ze = Ve.renderResult() ?? null;
  } finally {
    Z.current = !1;
  }
  const Ye = {
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left",
    background: r.Color ?? "#ffffff00"
    // transparent white by default so the deck render shows through
  }, er = R ? {
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
  }, Gt = {
    // matches the canvas geometry so it aligns with the card
    position: "absolute",
    top: 0,
    left: 0,
    width: t,
    height: n,
    transform: `scale(${e})`,
    transformOrigin: "top left"
  };
  return K`
    <div style=${er}>
      ${d != null && K`
        <div class="bc-deck-render" style=${Gt}>
          <${ys} key=${"safe:" + String(h)}>${d}<//>
        </div>
      `}
      <div class="bc-card-canvas" style=${Ye} ref=${U}>
        <${ys} key=${"safe:" + String(r.Script)}>${ze}<//>
        ${ue.map((be) => K`
          <${T5}
            key=${be.Id}
            Obj=${be}
            containerW=${t}
            containerH=${n}
            makeContext=${i}
            deckProxy=${a}
            cardProxy=${xe}
            onWidgetProxy=${Te}
            onReady=${re}
          />
        `)}
        ${f && K`
          <${M5}
            Objects=${ue}
            CanvasW=${t}
            CanvasH=${n}
            Scale=${e}
            selectedIds=${m}
            onSelect=${v ?? (() => {
  })}
            onSelectMany=${y ?? (() => {
  })}
            onEdited=${I ?? (() => {
  })}
            Grid=${$}
            onBeforeEdit=${E}
          />
        `}
      </div>
    </div>
  `;
}
function O5({
  Card: r,
  CanvasW: e,
  CanvasH: t
}) {
  const i = 88 / Math.max(1, e), a = Math.max(24, Math.round(t * i));
  return K`
    <div class="bc-card-thumb"
      style=${{ width: 88, height: a, background: r.Color ?? "#fff" }}>
      ${r.Widgets.filter((s) => s.visible).map((s) => {
    const o = Qt(s.Anchors, s.Offsets, e, t), l = s.Type === "shape" ? s.FillColor ?? "#9ca3af" : s.Type === "button" ? "#1d6fd8" : s.Type === "field" ? "rgba(0,0,0,0.15)" : s.Type === "picture" ? "#9ca3af" : "#7c3aed";
    return K`
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
function B5({
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
  onDeckRevert: y,
  onDeckReset: I,
  onDeckExport: $,
  onDeckImport: E,
  onDeckExportText: R,
  onDeckImportText: W,
  onDeckEmbed: Z,
  onDeckStandalone: Y,
  onDeckImportURL: N,
  onMCPSettings: ce,
  onCardAdd: ue,
  onCardDuplicate: P,
  onCardRename: ge,
  onCardDelete: Ne,
  onCardCopy: xe,
  onPaste: U,
  canUndo: q = !1,
  canRedo: te = !1,
  onUndo: O,
  onRedo: G
}) {
  const M = e === 0, re = e === t - 1, [Te, Me] = je(null);
  function Ve(Ye) {
    Me(null), i(n === Ye ? null : Ye);
  }
  function ze(Ye) {
    Me(Te === Ye ? null : Ye);
  }
  return K`
    <div class="bc-menu-bar">
      <button class="bc-menu-btn" onClick=${() => Ve("decks-panel")} title="Decks">
        ☰ Decks
      </button>
      <button
        class=${`bc-menu-btn${n === "cards-panel" ? " active" : ""}`}
        onClick=${() => Ve("cards-panel")}
        title="card browser"
      >▦ Cards</button>
      <div style=${{ position: "relative" }}>
        <button
          class=${`bc-menu-btn${n === "go-menu" ? " active" : ""}`}
          onClick=${() => Ve("go-menu")}
          title="Navigate"
        >Go ▾</button>
        ${n === "go-menu" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${M ? " disabled" : ""}`}
              onClick=${() => {
    a(), i(null);
  }}>First Card</div>
            <div class=${`bc-dropdown-item${M ? " disabled" : ""}`}
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
          onClick=${() => Ve("deck-menu")}
          title="deck operations"
        >Deck ▾</button>
        ${n === "deck-menu" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
          <div class="bc-dropdown" style=${{ left: 0 }}>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    v == null || v(), i(null);
  }}>Save Deck</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    y == null || y(), i(null);
  }}>Revert to Saved</div>
            <div class=${`bc-dropdown-item${d ? " disabled" : ""}`}
              onClick=${() => {
    I == null || I(), i(null);
  }}>Reset to Original</div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${d ? " disabled" : ""}${Te === "import" ? " open" : ""}`}
                onClick=${() => !d && ze("import")}>Import</div>
              ${Te === "import" && K`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    E == null || E(), i(null);
  }}>from JSON File…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    W == null || W(), i(null);
  }}>from JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    N == null || N(), i(null);
  }}>from URL…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-submenu">
              <div class=${`bc-dropdown-item has-submenu${Te === "export" ? " open" : ""}`}
                onClick=${() => ze("export")}>Export</div>
              ${Te === "export" && K`
                <div class="bc-submenu">
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    $ == null || $(), i(null);
  }}>as JSON File</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    R == null || R(), i(null);
  }}>as JSON Text…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    Z == null || Z(), i(null);
  }}>for Embedding…</div>
                  <div class="bc-dropdown-item"
                    onClick=${() => {
    Y == null || Y(), i(null);
  }}>as Standalone App…</div>
                </div>
              `}
            </div>
            <div class="bc-dropdown-separator"></div>
            <div class="bc-dropdown-item"
              onClick=${() => {
    ce == null || ce(), i(null);
  }}>MCP Settings…</div>
          </div>
        `}
      </div>
      ${h && K`
        <div style=${{ position: "relative" }}>
          <button
            class=${`bc-menu-btn${n === "card-menu" ? " active" : ""}`}
            onClick=${() => Ve("card-menu")}
            title="card operations"
          >Card ▾</button>
          ${n === "card-menu" && K`
            <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ue == null || ue(), i(null);
  }}>New Card…</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    P == null || P(), i(null);
  }}>Duplicate Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    ge == null || ge(), i(null);
  }}>Rename Card…</div>
              <div class="bc-dropdown-separator"></div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    xe == null || xe(), i(null);
  }}>Copy Card</div>
              <div class="bc-dropdown-item"
                onClick=${() => {
    U == null || U(), i(null);
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
            onClick=${() => Ve("insert-menu")}
            title="insert a new widget"
          >+ New ▾</button>
          ${n === "insert-menu" && K`
            <div class="bc-dropdown-backdrop" onClick=${() => i(null)}></div>
            <div class="bc-dropdown" style=${{ left: 0 }}>
              ${[
    { Type: "button", Label: "Button" },
    { Type: "field", Label: "Field" },
    { Type: "shape", Label: "Shape" },
    { Type: "picture", Label: "Picture" },
    { Type: "generic", Label: "Custom Widget" }
  ].map(({ Type: Ye, Label: er }) => K`
                <div key=${Ye} class="bc-dropdown-item"
                  onClick=${() => {
    m == null || m(Ye), i(null);
  }}>${er}</div>
              `)}
            </div>
          `}
        </div>
        <button class="bc-menu-btn" disabled=${!q}
          onClick=${O} title="undo (Ctrl/Cmd+Z)">↶</button>
        <button class="bc-menu-btn" disabled=${!te}
          onClick=${G} title="redo (Ctrl/Cmd+Shift+Z)">↷</button>
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
function D5({
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
  const y = r === 0, I = r === e - 1, $ = {
    inactive: { Color: "#8e8e93", Title: "MCP Broker: not configured" },
    connecting: { Color: "#ff9500", Title: "MCP Broker: connecting…" },
    connected: { Color: "#34c759", Title: "MCP Broker: connected" }
  }[v];
  return K`
    <div class="bc-bottom-bar">
      <div class="bc-bottom-bar-history">
        <button class="bc-nav-btn" onClick=${s}    disabled=${o === 0} title="Back">◁</button>
        <button class="bc-nav-btn" onClick=${l} disabled=${d === 0}  title="Forward">▷</button>
      </div>
      <div class="bc-bottom-bar-center">
        <button class="bc-nav-btn" onClick=${t} disabled=${y} title="First Card">«</button>
        <button class="bc-nav-btn" onClick=${n}  disabled=${y} title="Previous Card">‹</button>
        <span class="bc-card-counter">${r + 1} / ${e}</span>
        <button class="bc-nav-btn" onClick=${i}  disabled=${I}  title="Next Card">›</button>
        <button class="bc-nav-btn" onClick=${a}  disabled=${I}  title="Last Card">»</button>
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
        title=${$.Title}
        style=${{ background: $.Color }}
      />
    </div>
  `;
}
function L5({ State: r, onClose: e }) {
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
function F5({
  onClose: r,
  onApply: e
}) {
  const t = localStorage.getItem("bc-mcp-url") ?? "", n = localStorage.getItem("bc-mcp-token") ?? "", [i, a] = je(t), [s, o] = je(n), [l, d] = je(n !== "");
  function h() {
    const f = i.trim(), m = s.trim();
    try {
      localStorage.setItem("bc-mcp-url", f), l ? localStorage.setItem("bc-mcp-token", m) : localStorage.removeItem("bc-mcp-token");
    } catch {
    }
    e == null || e(f, m), r();
  }
  return K`
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
function cd({
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
  onDeckDelete: y,
  onDeckRename: I,
  onDeckEmbed: $,
  onDeckStandalone: E,
  onDeckImportURL: R,
  connector: W,
  onDeckSaveImmediate: Z
}) {
  const Y = r ?? od, [N] = je(Y), [, ce] = je(0), ue = () => ce((T) => T + 1), [P, ge] = je(Math.min(i, (Y == null ? void 0 : Y.Cards.length) - 1 || 0)), [Ne, xe] = je([]), [U, q] = je([]), [te, O] = je(null), [G, M] = je(null), [re, Te] = je(1), [Me, Ve] = je(ks), [ze, Ye] = je(Ss), [er, Gt] = je(!1), be = Fe(null), Oe = Fe(0);
  Oe.current = P;
  const [gt, me] = je("browse"), [Ke, ut] = je([]), [$r, or] = je(!1), Nt = gt === "edit" && !e, Tr = Ke.length === 1 ? Ke[0] : null;
  function On(T, A) {
    if (T == null) {
      A || ut([]);
      return;
    }
    ut(
      A ? (B) => B.includes(T) ? B.filter((ae) => ae !== T) : [...B, T] : [T]
    );
  }
  function Ur(T, A) {
    ut((B) => A ? Array.from(/* @__PURE__ */ new Set([...B, ...T])) : T);
  }
  function un() {
    gt === "edit" && (a == null || a()), me((T) => T === "edit" ? "browse" : "edit"), ut([]);
  }
  Jt(() => {
    ut([]);
  }, [P]), Jt(() => {
    if (n)
      try {
        localStorage.setItem("bc-card-index:" + n, String(P));
      } catch {
      }
  }, [n, P]);
  const [Bt, Gr] = je(null), [dn, Ir] = je(fo());
  function Dt(T) {
    g5(T, n), Ir(T);
  }
  function pr() {
    if (f == null) {
      Gr([]);
      return;
    }
    f().then(Gr);
  }
  Jt(() => {
    te === "decks-panel" && (Gr(null), pr());
  }, [te]);
  function Et(T, A) {
    return new Promise(
      (B) => M({ kind: "ask", prompt: T, defaultValue: A, resolve: B })
    );
  }
  function Lt(T, ...A) {
    return new Promise(
      (B) => M({ kind: "answer", message: T, buttons: A, resolve: B })
    );
  }
  async function lr() {
    var A;
    const T = (A = await Et("Name of the new deck:", "")) == null ? void 0 : A.trim();
    T == null || T === "" || await (v == null ? void 0 : v(T));
  }
  async function Nr(T) {
    var B;
    const A = (B = await Et("New name for this deck:", T.Name)) == null ? void 0 : B.trim();
    A == null || A === "" || A === T.Name || (await (I == null ? void 0 : I(T.Key, A)), pr());
  }
  async function i0() {
    var A;
    const T = (A = await Et("URL of the deck to import:", "https://")) == null ? void 0 : A.trim();
    T == null || T === "" || T === "https://" || await (R == null ? void 0 : R(T));
  }
  function B0() {
    M({ kind: "export-json", json: JSON.stringify(N, null, 2) });
  }
  async function a0() {
    const T = await new Promise(
      (A) => M({ kind: "import-json", resolve: A })
    );
    T != null && (h == null || h(T));
  }
  async function s0(T) {
    await Lt(
      `Really delete deck "${T.Name}"?`,
      "Delete",
      "Cancel"
    ) === "Delete" && (await (y == null ? void 0 : y(T.Key)), pr());
  }
  async function hn() {
    var B;
    const T = (B = await Et("Name of the new card:", "")) == null ? void 0 : B.trim();
    if (T == null || T === "")
      return;
    const A = {
      Id: dr("card"),
      Name: T,
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    };
    St(), N.Cards.splice(P + 1, 0, A), L({ type: "card-index", index: P + 1 }), Qe();
  }
  function o0(T) {
    return N.Cards.findIndex((A) => A.Id === T);
  }
  function fn(T) {
    const A = N.Cards[T];
    if (A == null)
      return;
    const B = JSON.parse(JSON.stringify(A));
    B.Id = dr("card"), B.Widgets.forEach((ye) => {
      ye.Id = dr("widget");
    });
    let ae = A.Name + " Copy", fe = 1;
    for (; N.Cards.some((ye) => ye.Name === ae); )
      fe += 1, ae = A.Name + " Copy " + fe;
    B.Name = ae, St(), N.Cards.splice(T + 1, 0, B), L({ type: "card-index", index: T + 1 }), Qe();
  }
  async function l0(T) {
    var ae;
    const A = N.Cards[T];
    if (A == null)
      return;
    const B = (ae = await Et("New name for this card:", A.Name)) == null ? void 0 : ae.trim();
    B == null || B === "" || B === A.Name || (St(), A.Name = B, Qe());
  }
  async function Mr(T) {
    const A = N.Cards[T];
    if (A == null)
      return;
    if (N.Cards.length <= 1) {
      await Lt("The last remaining card cannot be deleted.", "OK");
      return;
    }
    if (await Lt(
      `Really delete card "${A.Name}" and all its widgets?`,
      "Delete",
      "Cancel"
    ) !== "Delete")
      return;
    St();
    const ae = N.Cards[P].Id;
    N.Cards.splice(T, 1), xe([]), q([]), ut([]);
    const fe = o0(ae);
    ge(fe >= 0 ? fe : w0(T, 0, N.Cards.length - 1)), Qe();
  }
  function Bn(T, A) {
    const B = T + A;
    if (B < 0 || B >= N.Cards.length)
      return;
    St();
    const ae = N.Cards[P].Id, [fe] = N.Cards.splice(T, 1);
    N.Cards.splice(B, 0, fe), xe([]), q([]), ge(Math.max(0, o0(ae))), Qe();
  }
  const [jr, Dn] = je(null), [Ln, mr] = je(0);
  function k(T, A, B) {
    Dn({
      Title: T,
      Value: A,
      onCommit: (ae) => {
        B(ae), mr((fe) => fe + 1);
      }
    });
  }
  async function D() {
    await gc(
      Cs,
      JSON.stringify(N.Cards[P])
    ) || await Lt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function ee() {
    if (Ke.length === 0) {
      await D();
      return;
    }
    const T = N.Cards[P].Widgets.filter((B) => Ke.includes(B.Id));
    if (T.length === 0)
      return;
    await gc(As, JSON.stringify(T)) || await Lt("BrowserCard could not write to the clipboard.", "OK");
  }
  async function Ae() {
    await ee(), Ke.length > 0 ? gr() : await Mr(P);
  }
  async function it() {
    const T = await b5();
    if (T == null) {
      await Lt(
        "The clipboard does not contain a BrowserCard card or widget - or BrowserCard was not allowed to read the clipboard (please check your browser permissions, the console may have details).",
        "OK"
      );
      return;
    }
    let A;
    try {
      A = JSON.parse(T.Serialization);
    } catch {
      return;
    }
    const B = N.Cards[P];
    if (T.Kind === "card") {
      if (!po(A))
        return;
      const ae = A;
      ae.Id = dr("card"), ae.Widgets.forEach((fe) => {
        fe.Id = dr("widget");
      }), ae.Name = $s(
        ae.Name,
        new Set(N.Cards.map((fe) => fe.Name))
      ), St(), N.Cards.splice(P + 1, 0, ae), L({ type: "card-index", index: P + 1 });
    } else {
      if (B == null)
        return;
      const ae = Array.isArray(A) ? A : [A];
      if (ae.length === 0 || !ae.every(ra))
        return;
      St();
      const fe = new Set(B.Widgets.map((Le) => Le.Name)), ye = [];
      ae.forEach((Le) => {
        const ie = Le;
        ie.Id = dr("widget"), ie.Name = $s(ie.Name ?? "Widget", fe), fe.add(ie.Name), B.Widgets.push(ie), ye.push(ie.Id);
      }), ut(ye);
    }
    Qe();
  }
  async function dt() {
    var A;
    const T = (A = be.current) == null ? void 0 : A.querySelector(".bc-card-canvas");
    if (T != null)
      try {
        const B = "https://cdn.jsdelivr.net/npm/html-to-image@1/+esm", { toPng: ae } = await import(
          // loaded on demand only
          /* @vite-ignore */
          B
        ), fe = await ae(T, {
          width: Me,
          height: ze,
          pixelRatio: 1,
          // native card size
          style: { transform: "scale(1)", borderRadius: "0", boxShadow: "none" },
          filter: (ie) => {
            var ct;
            return (
              // exclude edit-mode overlays
              !((ct = ie.classList) != null && ct.contains("bc-edit-layer"))
            );
          }
        }), ye = N.Cards[P], Le = document.createElement("a");
        Le.href = fe, Le.download = `${N.Name ?? "Deck"} - ${ye.Name ?? "Card"}.png`, Le.click();
      } catch (B) {
        console.warn("[BrowserCard] could not create a screenshot:", B), window.alert(
          "BrowserCard could not create a screenshot - the console may have details."
        );
      }
  }
  const he = Fe(null);
  Jt(() => {
    !Nt || a == null || (he.current != null && window.clearTimeout(he.current), he.current = window.setTimeout(() => {
      he.current = null, a();
    }, 800));
  }), Jt(() => () => {
    he.current != null && window.clearTimeout(he.current);
  }, []), Jt(() => {
    if (W == null)
      return;
    const T = {
      getDeck: () => N,
      getCardIndex: () => Oe.current,
      mutateDeck: (A) => {
        A(N), ue();
      },
      navigate: (A) => {
        if (typeof A == "number")
          L({ type: "card-index", index: A });
        else {
          const B = N.Cards.findIndex((ae) => ae.Id === A || ae.Name === A);
          B >= 0 && L({ type: "card-index", index: B });
        }
      },
      saveDeck: () => (Z == null ? void 0 : Z()) ?? Promise.resolve(),
      evalInContext: async (A) => {
        const B = new Qi(), ae = Va(
          N,
          N.Cards,
          null,
          L,
          (ie, ct, et) => M({ kind: "answer", message: ie, buttons: ct, resolve: et }),
          (ie, ct, et) => M({ kind: "ask", prompt: ie, defaultValue: ct, resolve: et }),
          We
        ), { Params: fe, Args: ye } = ea(B, ae, "deck");
        let Le;
        try {
          Le = new Function(
            ...fe,
            `return (async () => { return (${A}) })()`
          );
        } catch (ie) {
          throw new Error("invalid expression: " + ((ie == null ? void 0 : ie.message) ?? String(ie)));
        }
        return Le(...ye);
      }
    };
    W.setContext(T);
  });
  const le = Fe([]), ke = Fe([]), ft = Fe(""), at = Fe(0), [Kr, pn] = je(0), Fn = 100, c0 = 1e3, St = Ht((T = "") => {
    const A = Date.now();
    if (T !== "" && T === ft.current && A - at.current < c0) {
      at.current = A;
      return;
    }
    ft.current = T, at.current = A, le.current.push(JSON.stringify(N)), le.current.length > Fn && le.current.shift(), ke.current = [];
  }, [N]);
  function Pn(T) {
    const A = JSON.parse(T);
    Object.assign(N, A);
    for (const B of Object.keys(N))
      B in A || delete N[B];
    ft.current = "", ut([]), xe([]), q([]), ge((B) => w0(B, 0, N.Cards.length - 1)), pn((B) => B + 1), mr((B) => B + 1), Qe();
  }
  function Vn() {
    const T = le.current.pop();
    T != null && (ke.current.push(JSON.stringify(N)), Pn(T));
  }
  function mn() {
    const T = ke.current.pop();
    T != null && (le.current.push(JSON.stringify(N)), Pn(T));
  }
  function u0(T) {
    const A = N.Cards[P], B = N5(T, A, Me, ze);
    St(), A.Widgets.push(B), ut([B.Id]), Qe();
  }
  function gr() {
    if (Ke.length === 0)
      return;
    const T = N.Cards[P];
    if (T.Widgets.some((A) => Ke.includes(A.Id))) {
      St();
      for (let A = T.Widgets.length - 1; A >= 0; A--)
        Ke.includes(T.Widgets[A].Id) && T.Widgets.splice(A, 1);
    }
    ut([]), Qe();
  }
  function D0(T) {
    if (Ke.length === 0)
      return;
    const A = N.Cards[P], B = [...A.Widgets], ae = (ye) => Ke.includes(ye.Id);
    if (!B.some(ae))
      return;
    St();
    let fe = B;
    switch (T) {
      case "front":
        fe = [...B.filter((ye) => !ae(ye)), ...B.filter(ae)];
        break;
      case "back":
        fe = [...B.filter(ae), ...B.filter((ye) => !ae(ye))];
        break;
      case "forward":
        for (let ye = B.length - 2; ye >= 0; ye--)
          if (ae(B[ye]) && !ae(B[ye + 1])) {
            const Le = B[ye];
            B[ye] = B[ye + 1], B[ye + 1] = Le;
          }
        fe = B;
        break;
      case "backward":
        for (let ye = 1; ye < B.length; ye++)
          if (ae(B[ye]) && !ae(B[ye - 1])) {
            const Le = B[ye];
            B[ye] = B[ye - 1], B[ye - 1] = Le;
          }
        fe = B;
        break;
    }
    A.Widgets.splice(0, A.Widgets.length, ...fe), Qe();
  }
  function d0(T) {
    if (Ke.length === 0 || T === P)
      return;
    const A = N.Cards[P], B = N.Cards[T];
    if (B == null)
      return;
    const ae = A.Widgets.filter((fe) => Ke.includes(fe.Id));
    if (ae.length !== 0) {
      St();
      for (let fe = A.Widgets.length - 1; fe >= 0; fe--)
        Ke.includes(A.Widgets[fe].Id) && A.Widgets.splice(fe, 1);
      ae.forEach((fe) => {
        B.Widgets.push(fe);
      }), ut([]), Qe();
    }
  }
  const [, L0] = je(0), Qe = Ht(() => L0((T) => T + 1), []), Er = Fe(null);
  Er.current == null && (Er.current = new Qi());
  const gn = Fe(null), Hn = Fe(null);
  Hn.current == null && (Hn.current = C5(N, gn, Qe));
  const Ft = Hn.current, F0 = Ht(
    (T) => {
      Ft[sn] = T ?? void 0;
    },
    [Ft]
  ), br = Fe(!1), zr = Fe(!1);
  Jt(() => {
    const T = be.current;
    if (T == null)
      return;
    function A() {
      const { width: fe, height: ye } = T.getBoundingClientRect(), Le = getComputedStyle(T), ie = parseInt(Le.getPropertyValue("--canvas-width").trim()), ct = parseInt(Le.getPropertyValue("--canvas-height").trim()), et = isFinite(ie) && ie > 0 ? ie : N.CardWidth ?? ks, Ue = isFinite(ct) && ct > 0 ? ct : N.CardHeight ?? Ss;
      Ve(et), Ye(Ue);
      const cr = t ? 24 : 0, Zt = Math.max(0.1, Math.min((fe - cr * 2) / et, (ye - cr * 2) / Ue)), vr = parseFloat(Le.getPropertyValue("--canvas-scale").trim());
      isFinite(vr) && vr > 0 ? Te(Nt ? Math.min(vr, Zt) : vr) : Te(Zt);
    }
    A();
    const B = requestAnimationFrame(A), ae = new ResizeObserver(A);
    return ae.observe(T), () => {
      cancelAnimationFrame(B), ae.disconnect();
    };
  }, [N.CardWidth, N.CardHeight, Nt]);
  const L = Ht((T) => {
    const A = N.Cards;
    ge((B) => {
      const ae = (fe) => (fe !== B && (xe((ye) => [...ye, B]), q([]), zr.current = !1), fe);
      switch (T.type) {
        case "next":
          return ae(w0(B + 1, 0, A.length - 1));
        case "prev":
          return ae(w0(B - 1, 0, A.length - 1));
        case "first":
          return ae(0);
        case "last":
          return ae(A.length - 1);
        case "card-index":
          return ae(w0(T.index, 0, A.length - 1));
        case "card-name": {
          const fe = A.findIndex((ye) => ye.Name === T.name);
          return fe >= 0 ? ae(fe) : B;
        }
        case "card-id": {
          const fe = A.findIndex((ye) => ye.Id === T.id);
          return fe >= 0 ? ae(fe) : B;
        }
        default:
          return B;
      }
    });
  }, [N]), ve = Fe(() => {
  });
  ve.current = (T, A) => {
    var Le;
    const B = N.Cards, ae = B.indexOf(T);
    if (ae < 0)
      return;
    const fe = Math.max(0, Math.min(B.length - 1, Math.round(A)));
    if (fe === ae)
      return;
    const ye = (Le = B[Oe.current]) == null ? void 0 : Le.Id;
    B.splice(ae, 1), B.splice(fe, 0, T), ge(Math.max(0, B.findIndex((ie) => ie.Id === ye))), Qe();
  };
  const De = Ht(
    (T, A) => ve.current(T, A),
    []
  ), We = M0(() => ({
    print(...T) {
      a5(Ft, T), Gt(!0);
    },
    println(...T) {
      s5(Ft, T), Gt(!0);
    },
    clearConsole() {
      Yi(Ft);
    }
  }), []), lt = Ht(() => e ? Promise.resolve() : (Z == null ? void 0 : Z()) ?? Promise.resolve(), [e, Z]), Pt = Ht((T) => Va(
    N,
    N.Cards,
    T,
    L,
    (A, B, ae) => M({ kind: "answer", message: A, buttons: B, resolve: ae }),
    (A, B, ae) => M({ kind: "ask", prompt: A, defaultValue: B, resolve: ae }),
    We,
    lt
  ), [N, L, We, lt]);
  function jt() {
    br.current && zr.current && Er.current.fireLocal("ready");
  }
  function bn(T) {
    gn.current = T;
  }
  function Mt() {
    zr.current = !0, jt();
  }
  Jt(() => {
    const T = Er.current;
    Ft[Cr] = T;
    const A = Va(
      N,
      N.Cards,
      Ft,
      L,
      (Le, ie, ct) => M({ kind: "answer", message: Le, buttons: ie, resolve: ct }),
      (Le, ie, ct) => M({ kind: "ask", prompt: Le, defaultValue: ie, resolve: ct }),
      We,
      lt
    ), { Params: B, Args: ae } = ea(T, A, "deck");
    br.current = !1, zr.current = !1;
    const fe = N.Script ?? "";
    let ye = !0;
    if (fe.trim() !== "")
      try {
        new Function(`return (async () => {
${fe}
})()`);
      } catch (Le) {
        console.warn("[BrowserCard] syntax error in deck script - ignored:", Le), ye = !1;
      }
    return T.run(ye ? fe : "", B, ae).catch((Le) => {
      console.warn("[BrowserCard] deck script error:", Le);
    }).then(() => {
      br.current = !0, Qe(), jt();
    }), () => {
      T.teardown();
    };
  }, [N.Script]), Jt(() => {
    if (!t)
      return;
    function T(A) {
      if (G != null)
        return;
      const B = A.target;
      if (!(B != null && /^(INPUT|TEXTAREA|SELECT)$/.test(B.tagName))) {
        if (Nt) {
          if ((A.key === "z" || A.key === "Z") && (A.metaKey || A.ctrlKey)) {
            A.preventDefault(), A.shiftKey ? mn() : Vn();
            return;
          }
          if ((A.key === "y" || A.key === "Y") && (A.metaKey || A.ctrlKey)) {
            A.preventDefault(), mn();
            return;
          }
          if ((A.metaKey || A.ctrlKey) && !A.shiftKey && !A.altKey)
            switch (A.key) {
              case "c":
                A.preventDefault(), ee();
                return;
              case "x":
                A.preventDefault(), Ae();
                return;
              case "v":
                A.preventDefault(), it();
                return;
            }
        }
        if (Nt && Ke.length > 0) {
          if (A.key === "Escape") {
            ut([]);
            return;
          }
          if (A.key === "Delete" || A.key === "Backspace") {
            A.preventDefault(), gr();
            return;
          }
          const ae = N.Cards[P];
          if (ae == null)
            return;
          const fe = ae.Widgets.filter((ct) => Ke.includes(ct.Id));
          if (fe.length === 0)
            return;
          const ye = A.shiftKey ? 10 : 1;
          let Le = 0, ie = 0;
          switch (A.key) {
            case "ArrowLeft":
              Le = -ye;
              break;
            case "ArrowRight":
              Le = ye;
              break;
            case "ArrowUp":
              ie = -ye;
              break;
            case "ArrowDown":
              ie = ye;
              break;
            default:
              return;
          }
          A.preventDefault(), St("nudge:" + Ke.join(",")), fe.forEach((ct) => {
            const { left: et, top: Ue, width: cr, height: Zt } = Qt(ct.Anchors, ct.Offsets, Me, ze);
            ct.Offsets = N0(et + Le, Ue + ie, cr, Zt, ct.Anchors, Me, ze);
          }), Qe();
          return;
        }
        (A.key === "ArrowRight" || A.key === "ArrowDown") && L({ type: "next" }), (A.key === "ArrowLeft" || A.key === "ArrowUp") && L({ type: "prev" });
      }
    }
    return window.addEventListener("keydown", T), () => window.removeEventListener("keydown", T);
  }, [L, G, Nt, Ke, P, Me, ze, t]);
  function Kt() {
    if (Ne.length === 0)
      return;
    const T = Ne[Ne.length - 1];
    xe((A) => A.slice(0, -1)), q((A) => [...A, P]), zr.current = !1, ge(T);
  }
  function qn() {
    if (U.length === 0)
      return;
    const T = U[U.length - 1];
    q((A) => A.slice(0, -1)), xe((A) => [...A, P]), zr.current = !1, ge(T);
  }
  const Rr = N.Cards[P], Wn = Er.current.renderResult() ?? null, P0 = Nt && Tr != null ? Rr.Widgets.find((T) => T.Id === Tr) ?? null : null, h0 = {
    isActive: N.SnapToGrid === !0,
    Width: N.GridWidth ?? 10,
    Height: N.GridHeight ?? 10
  };
  return K`
    <${An}>
      <div class="bc-app${t ? "" : " bare"}" ref=${F0}>
        ${t && K`<${B5}
          DeckName=${N.Name}
          CardIndex=${P}
          CardCount=${N.Cards.length}
          activeOverlay=${te}
          onOverlayToggle=${O}
          onGoFirst=${() => L({ type: "first" })}
          onGoPrev=${() => L({ type: "prev" })}
          onGoNext=${() => L({ type: "next" })}
          onGoLast=${() => L({ type: "last" })}
          isReadOnly=${e}
          isEditing=${Nt}
          onEditToggle=${un}
          onInsert=${u0}
          onDeckSave=${a}
          onDeckRevert=${s}
          onDeckReset=${o}
          onDeckExport=${l}
          onDeckImport=${d}
          onDeckExportText=${B0}
          onDeckImportText=${() => void a0()}
          onCardAdd=${() => void hn()}
          onCardDuplicate=${() => fn(P)}
          onCardRename=${() => void l0(P)}
          onCardDelete=${() => void Mr(P)}
          onCardCopy=${() => void D()}
          onPaste=${() => void it()}
          canUndo=${le.current.length > 0}
          canRedo=${ke.current.length > 0}
          onUndo=${Vn}
          onRedo=${mn}
          onDeckEmbed=${$}
          onDeckStandalone=${E}
          onDeckImportURL=${() => void i0()}
          onMCPSettings=${() => or(!0)}
        />`}
        <div class="bc-main-area">
          <div class="bc-card-area${t ? "" : " bare"}" ref=${be}>
            <${R5}
              key=${Rr.Id + ":" + Kr}
              Card=${Rr}
              Scale=${re}
              CanvasW=${Me}
              CanvasH=${ze}
              withChrome=${t}
              deckRenderSlot=${Wn}
              deckScript=${N.Script ?? ""}
              makeContext=${Pt}
              deckProxy=${Ft}
              onCardProxy=${bn}
              onCardReady=${Mt}
              reorderCard=${De}
              isEditing=${Nt}
              selectedIds=${Ke}
              onSelect=${On}
              onSelectMany=${Ur}
              onEdited=${Qe}
              Grid=${h0}
              onBeforeEdit=${() => St()}
            />
          </div>
          ${Nt && K`
            <${z5}
              key=${(Tr ?? (Ke.length > 1 ? "multi" : "card:" + Rr.Id)) + ":" + Ln}
              Widget=${P0}
              SelectedCount=${Ke.length}
              CanvasW=${Me}
              CanvasH=${ze}
              onEdited=${Qe}
              CardNames=${N.Cards.map((T) => T.Name)}
              CardIndex=${P}
              onDelete=${gr}
              onReorder=${D0}
              onMoveTo=${d0}
              Card=${Rr}
              Deck=${N}
              onOpenEditor=${k}
              onBeforeEdit=${St}
              onCopy=${() => void ee()}
            />
          `}
        </div>
        ${te === "decks-panel" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => O(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Decks</span>
              <button class="bc-console-btn" onClick=${() => O(null)}>×</button>
            </div>
            ${!e && K`
              <button class="bc-decks-new" onClick=${lr}>+ New Deck</button>
            `}
            <div class="bc-decks-list">
              ${Bt == null ? K`<div class="bc-decks-empty">loading…</div>` : Bt.length === 0 ? K`<div class="bc-decks-empty">no decks found</div>` : Bt.map((T) => K`
                      <div key=${T.Key}
                        class=${`bc-decks-item${T.Key === n ? " active" : ""}`}>
                        <span class="bc-decks-name"
                          title=${T.Name}
                          onClick=${() => {
    T.Key !== n && (m == null || m(T.Key));
  }}
                        >${T.Name}</span>
                        ${!e && K`
                          <button class="bc-console-btn" title="rename this deck"
                            onClick=${() => void Nr(T)}>✎</button>
                          <button class="bc-console-btn" title="delete this deck"
                            onClick=${() => void s0(T)}>×</button>
                        `}
                      </div>
                    `)}
            </div>
            <label class="bc-decks-remember"
              title="reopen the deck you last worked on automatically after a page reload">
              <input type="checkbox" checked=${dn}
                onChange=${(T) => Dt(T.target.checked)}/>
              <span>remember last deck on reload</span>
            </label>
          </div>
        `}
        ${te === "cards-panel" && K`
          <div class="bc-dropdown-backdrop" onClick=${() => O(null)}></div>
          <div class="bc-decks-panel">
            <div class="bc-decks-header">
              <span>Cards</span>
              <button class="bc-console-btn" onClick=${() => O(null)}>×</button>
            </div>
            ${Nt && K`
              <button class="bc-decks-new" onClick=${() => void hn()}>+ New Card</button>
            `}
            <div class="bc-decks-list">
              ${N.Cards.map((T, A) => K`
                <div key=${T.Id}
                  class=${`bc-cards-item${A === P ? " active" : ""}`}>
                  <div class="bc-cards-main"
                    onClick=${() => {
    A !== P && L({ type: "card-index", index: A });
  }}>
                    <${O5}
                      Card=${T} CanvasW=${Me} CanvasH=${ze}
                    />
                    <div class="bc-cards-info">
                      <div class="bc-cards-name" title=${T.Name}>${T.Name}</div>
                      <div class="bc-cards-sub">
                        #${A + 1} · ${T.Widgets.length}${" "}
                        ${T.Widgets.length === 1 ? "widget" : "widgets"}
                      </div>
                    </div>
                  </div>
                  ${Nt && K`
                    <div class="bc-cards-actions">
                      <button class="bc-console-btn" title="move this card backward"
                        disabled=${A === 0}
                        onClick=${() => Bn(A, -1)}>↑</button>
                      <button class="bc-console-btn" title="move this card forward"
                        disabled=${A === N.Cards.length - 1}
                        onClick=${() => Bn(A, 1)}>↓</button>
                      <button class="bc-console-btn" title="duplicate this card"
                        onClick=${() => fn(A)}>⧉</button>
                      <button class="bc-console-btn" title="rename this card"
                        onClick=${() => void l0(A)}>✎</button>
                      <button class="bc-console-btn" title="delete this card"
                        disabled=${N.Cards.length <= 1}
                        onClick=${() => void Mr(A)}>×</button>
                    </div>
                  `}
                </div>
              `)}
            </div>
          </div>
        `}
        ${er && K`
          <div class="bc-console">
            <div class="bc-console-header">
              <span>Console</span>
              <div>
                <button class="bc-console-btn" onClick=${() => Yi(Ft)}>Clear</button>
                <button class="bc-console-btn" onClick=${() => Gt(!1)}>×</button>
              </div>
            </div>
            <pre class="bc-console-output">${Ft[Mn]}</pre>
          </div>
        `}
        ${t && K`<${D5}
          CardIndex=${P}
          CardCount=${N.Cards.length}
          onFirst=${() => L({ type: "first" })}
          onPrev=${() => L({ type: "prev" })}
          onNext=${() => L({ type: "next" })}
          onLast=${() => L({ type: "last" })}
          onBack=${Kt}
          historyLen=${Ne.length}
          onForward=${qn}
          futureLen=${U.length}
          consoleShown=${er}
          onConsoleToggle=${() => Gt((T) => !T)}
          onScreenshot=${() => void dt()}
          mcpStatus=${W == null || W.connectionStatus.url === "" ? "inactive" : W.connectionStatus.connected ? "connected" : "connecting"}
        />`}
        <${L5}
          State=${G}
          onClose=${(T) => {
    var B, ae;
    const A = G;
    if (M(null), A != null)
      switch (A.kind) {
        case "answer":
          (B = A.resolve) == null || B.call(A, T ?? "");
          break;
        case "ask":
          (ae = A.resolve) == null || ae.call(A, T);
          break;
        case "import-json":
          A.resolve(T);
          break;
      }
  }}
        />
      </div>
      ${jr != null && K`
        <${E5}
          key=${jr.Title}
          State=${jr}
          onClose=${() => Dn(null)}
        />
      `}
      ${$r && K`
        <${F5}
          onClose=${() => or(!1)}
          onApply=${(T, A) => W == null ? void 0 : W.configure(T, A)}
        />
      `}
    <//>
  `;
}
const yc = "https://rozek.github.io/browser-card/dist/BrowserCard.js";
function ud() {
  if (document.getElementById("bc-styles") == null) {
    const r = document.createElement("style");
    r.id = "bc-styles", r.textContent = d5, document.head.appendChild(r);
  }
}
function Ha(r, e, t) {
  const n = new Blob([e], { type: t }), i = URL.createObjectURL(n), a = document.createElement("a");
  a.href = i, a.download = r, a.click(), setTimeout(() => URL.revokeObjectURL(i), 1e3);
}
function Ei(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
function kc(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;");
}
var Dr, ht, zt, yt, yr, S0, _0, Ce, Pi, Jr, dd, hd, fd, pd, md, gd, bd, vd, yn, wd, xd, yd, kd, Sd;
class P5 extends HTMLElement {
  constructor() {
    super(...arguments);
    bt(this, Ce);
    bt(this, Dr, null);
    bt(this, ht, null);
    bt(this, zt, !1);
    bt(this, yt, "bc-deck:default");
    bt(this, yr, 0);
    // remount key - bumped whenever the deck is swapped
    bt(this, S0, 0);
    // guards against overlapping async mounts
    bt(this, _0, new $h());
  }
  static get observedAttributes() {
    return ["name", "src", "readonly"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    z(this, _0).connect(), oe(this, Ce, Pi).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    z(this, _0).disconnect(), z(this, Dr) != null && en(null, z(this, Dr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && oe(this, Ce, Pi).call(this);
  }
}
Dr = new WeakMap(), ht = new WeakMap(), zt = new WeakMap(), yt = new WeakMap(), yr = new WeakMap(), S0 = new WeakMap(), _0 = new WeakMap(), Ce = new WeakSet(), Pi = async function() {
  const t = ++Wo(this, S0)._;
  ud(), z(this, Dr) == null && (Ee(this, Dr, document.createElement("div")), z(this, Dr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(z(this, Dr)));
  const n = this.getAttribute("src") ?? "";
  let i = null;
  if (n.trim())
    try {
      const s = JSON.parse(n);
      Br(s) ? i = s : console.warn('[BrowserCard] "src" attribute does not contain a valid deck');
    } catch {
      console.warn('[BrowserCard] invalid JSON in "src" attribute');
    }
  if (i == null && (i = JSON.parse(p5)), !i.Name) {
    const s = this.getAttribute("id") ?? "";
    s && di(s) && (i.Name = s);
  }
  Ee(this, yt, "bc-deck:" + (this.getAttribute("name") ?? i.Name ?? "default"));
  let a = null;
  if (fo())
    try {
      const s = localStorage.getItem(ta);
      if (s && s !== z(this, yt)) {
        const o = await Un(s, Xt);
        if (t !== z(this, S0))
          return;
        Br(o) && (Ee(this, yt, s), a = o);
      }
    } catch {
    }
  try {
    const s = a ?? await Un(z(this, yt), Xt);
    if (t !== z(this, S0))
      return;
    Br(s) ? i = s : s != null && console.warn("[BrowserCard] ignoring invalid persisted deck for key " + S.quoted(z(this, yt)));
  } catch (s) {
    console.warn("[BrowserCard] could not access IndexedDB:", s);
  }
  Kn(i), Ee(this, ht, i), Ee(this, zt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
}, /**** #renderDeck ****/
Jr = function() {
  m5(z(this, yt));
  let t = 0;
  try {
    const n = localStorage.getItem("bc-card-index:" + z(this, yt));
    n != null && (t = Math.max(0, parseInt(n, 10) || 0));
  } catch {
  }
  en(K`<${cd}
      key=${z(this, yr)}
      deck=${z(this, ht)}
      isReadOnly=${z(this, zt)}
      StorageKey=${z(this, yt)}
      initialCardIndex=${t}
      onDeckSave=${() => void oe(this, Ce, yn).call(this)}
      onDeckRevert=${() => void oe(this, Ce, wd).call(this)}
      onDeckReset=${() => void oe(this, Ce, xd).call(this)}
      onDeckExport=${() => oe(this, Ce, yd).call(this)}
      onDeckImport=${() => oe(this, Ce, kd).call(this)}
      onDeckImportText=${(n) => void oe(this, Ce, Sd).call(this, n)}
      onDeckList=${() => oe(this, Ce, pd).call(this)}
      onDeckOpen=${(n) => void oe(this, Ce, md).call(this, n)}
      onDeckCreate=${(n) => oe(this, Ce, gd).call(this, n)}
      onDeckDelete=${(n) => oe(this, Ce, bd).call(this, n)}
      onDeckRename=${(n, i) => oe(this, Ce, vd).call(this, n, i)}
      onDeckEmbed=${() => oe(this, Ce, hd).call(this)}
      onDeckStandalone=${() => oe(this, Ce, fd).call(this)}
      onDeckImportURL=${(n) => oe(this, Ce, dd).call(this, n)}
      connector=${z(this, _0)}
      onDeckSaveImmediate=${() => oe(this, Ce, yn).call(this)}
    />`, z(this, Dr));
}, dd = async function(t) {
  if (!z(this, zt))
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
      Kn(a), Ee(this, ht, a), Ee(this, zt, this.hasAttribute("readonly") || (a.readOnly ?? !1)), await oe(this, Ce, yn).call(this), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
    } catch (n) {
      window.alert("Import failed: " + (n instanceof Error ? n.message : String(n)));
    }
}, /**** #exportEmbeddable — HTML snippet with <bc-deck> for other web pages ****/
hd = function() {
  if (z(this, ht) == null)
    return;
  const t = z(this, ht).Name ?? "Deck", n = kc(JSON.stringify(Ni(z(this, ht)))), i = yc, a = z(this, ht).CardWidth ?? ks, s = z(this, ht).CardHeight ?? Ss, o = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ei(t)}</title>
</head>
<body>
  <!-- copy the following two elements into any web page. The deck uses its -->
  <!-- native size here - feel free to choose any other element size or to   -->
  <!-- override the card canvas size via "--canvas-width"/"--canvas-height"  -->

  <script type="module" src="${Ei(i)}"><\/script>

  <bc-deck
    style="display:block; width:${a}px; height:${s}px"
    src='${n}'
  ></bc-deck>
</body>
</html>`;
  Ha(t + ".embed.html", o, "text/html");
}, /**** #exportStandalone — complete web app, referencing the public module ****/
fd = function() {
  if (z(this, ht) == null)
    return;
  const t = z(this, ht).Name ?? "Deck", n = kc(JSON.stringify(Ni(z(this, ht)))), i = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${Ei(t)}</title>
  <style>
    html, body { margin:0; padding:0; width:100%; height:100%; overflow:hidden }
  </style>
</head>
<body>
  <script type="module" src="${Ei(yc)}"><\/script>
  <bc-deck style="display:block; width:100%; height:100%" src='${n}'></bc-deck>
</body>
</html>`;
  Ha(t + ".html", i, "text/html");
}, pd = async function() {
  let t = [];
  try {
    t = (await gh(Xt)).filter((i) => typeof i == "string" && i.startsWith(H0)).map((i) => ({ Key: i, Name: i.slice(H0.length) }));
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
  return t.some((n) => n.Key === z(this, yt)) || t.unshift({
    // current deck was never saved so far
    Key: z(this, yt),
    Name: z(this, yt).slice(H0.length)
  }), t.sort((n, i) => n.Name.localeCompare(i.Name));
}, md = async function(t) {
  try {
    const n = await Un(t, Xt);
    if (!Br(n)) {
      window.alert("This deck cannot be loaded (it seems to be damaged).");
      return;
    }
    const i = n;
    Kn(i), Ee(this, yt, t), Ee(this, ht, i), Ee(this, zt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
  } catch (n) {
    console.warn("[BrowserCard] could not access IndexedDB:", n);
  }
}, gd = async function(t) {
  if (this.hasAttribute("readonly"))
    return;
  const n = H0 + t;
  try {
    if (await Un(n, Xt) != null) {
      window.alert(`A deck named "${t}" already exists.`);
      return;
    }
  } catch (a) {
    console.warn("[BrowserCard] could not access IndexedDB:", a);
    return;
  }
  const i = {
    Id: dr("deck"),
    Name: t,
    readOnly: !1,
    swipeToAdjacentCard: !0,
    Script: "",
    Cards: [{
      Id: dr("card"),
      Name: "Card 1",
      Color: null,
      Alpha: 1,
      dontSearch: !1,
      Script: "",
      Widgets: []
    }]
  };
  Ee(this, yt, n), Ee(this, ht, i), Ee(this, zt, !1), await oe(this, Ce, yn).call(this), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
}, bd = async function(t) {
  if (!this.hasAttribute("readonly")) {
    if (t === z(this, yt)) {
      window.alert(
        'The currently open deck cannot be deleted - use "Reset to Original" instead.'
      );
      return;
    }
    try {
      await vi(t, Xt);
    } catch (n) {
      console.warn("[BrowserCard] could not access IndexedDB:", n);
    }
  }
}, vd = async function(t, n) {
  if (this.hasAttribute("readonly"))
    return;
  const i = H0 + n;
  if (i !== t)
    try {
      if (await Un(i, Xt) != null) {
        window.alert(`A deck named "${n}" already exists.`);
        return;
      }
      if (t === z(this, yt))
        z(this, ht).Name = n, Ee(this, yt, i), await oe(this, Ce, yn).call(this), await vi(t, Xt), oe(this, Ce, Jr).call(this);
      else {
        const s = await Un(t, Xt);
        if (!Br(s))
          return;
        s.Name = n, await hl(i, s, Xt), await vi(t, Xt);
      }
    } catch (a) {
      console.warn("[BrowserCard] could not access IndexedDB:", a);
    }
}, yn = async function() {
  if (!(z(this, ht) == null || z(this, zt)))
    try {
      const t = Ni(z(this, ht));
      await hl(z(this, yt), t, Xt);
    } catch (t) {
      console.warn("[BrowserCard] could not persist deck:", t);
    }
}, wd = async function() {
  if (!z(this, zt))
    try {
      const t = await Un(z(this, yt), Xt);
      if (!Br(t)) {
        window.alert("There is no (valid) saved copy of this deck yet.");
        return;
      }
      const n = t;
      Kn(n), Ee(this, ht, n), Ee(this, zt, this.hasAttribute("readonly") || (n.readOnly ?? !1)), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
}, xd = async function() {
  if (!z(this, zt)) {
    try {
      await vi(z(this, yt), Xt);
    } catch (t) {
      console.warn("[BrowserCard] could not access IndexedDB:", t);
    }
    oe(this, Ce, Pi).call(this);
  }
}, /**** #exportDeck — downloads the deck as a JSON file ****/
yd = function() {
  z(this, ht) != null && Ha(
    (z(this, ht).Name ?? "Deck") + ".json",
    JSON.stringify(Ni(z(this, ht)), null, 2),
    "application/json"
  );
}, /**** #importDeck — loads a deck from a JSON file and persists it ****/
kd = function() {
  if (z(this, zt))
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
        Kn(s), Ee(this, ht, s), Ee(this, zt, this.hasAttribute("readonly") || (s.readOnly ?? !1)), await oe(this, Ce, yn).call(this), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
      } catch (a) {
        window.alert("Import failed: " + (a instanceof Error ? a.message : String(a)));
      }
  }, t.click();
}, Sd = async function(t) {
  if (!z(this, zt))
    try {
      const n = JSON.parse(t);
      if (!Br(n)) {
        window.alert("The pasted text does not contain a valid BrowserCard deck.");
        return;
      }
      const i = n;
      Kn(i), Ee(this, ht, i), Ee(this, zt, this.hasAttribute("readonly") || (i.readOnly ?? !1)), await oe(this, Ce, yn).call(this), Ee(this, yr, z(this, yr) + 1), oe(this, Ce, Jr).call(this);
    } catch (n) {
      window.alert("Import failed: " + (n instanceof Error ? n.message : String(n)));
    }
};
var kr, ai, si, Ts;
class V5 extends HTMLElement {
  constructor() {
    super(...arguments);
    bt(this, si);
    bt(this, kr, null);
    bt(this, ai, 0);
  }
  static get observedAttributes() {
    return ["src"];
  }
  /**** connectedCallback ****/
  connectedCallback() {
    oe(this, si, Ts).call(this);
  }
  /**** disconnectedCallback ****/
  disconnectedCallback() {
    z(this, kr) != null && en(null, z(this, kr));
  }
  /**** attributeChangedCallback ****/
  attributeChangedCallback() {
    this.isConnected && oe(this, si, Ts).call(this);
  }
}
kr = new WeakMap(), ai = new WeakMap(), si = new WeakSet(), /**** #mount ****/
Ts = function() {
  ud(), z(this, kr) == null && (Ee(this, kr, document.createElement("div")), z(this, kr).style.cssText = "width:100%;height:100%;display:block;", this.appendChild(z(this, kr)));
  const t = this.getAttribute("src") ?? "";
  let n = null;
  if (t.trim())
    try {
      const i = JSON.parse(t);
      Br(i) && (n = i);
    } catch {
    }
  if (n == null) {
    console.warn('[BrowserCard] <bc-deck> got no valid deck in its "src" attribute'), en(K`
        <div style=${{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#888",
      font: "13px/1.4 system-ui, sans-serif"
    }}>this &lt;bc-deck&gt; contains no valid deck</div>
      `, z(this, kr));
    return;
  }
  Kn(n), Ee(this, ai, z(this, ai) + 1), en(K`<${cd}
      key=${z(this, ai)}
      deck=${n}
      isReadOnly=${!0}
      withChrome=${!1}
    />`, z(this, kr));
};
const H5 = Function("return this")();
H5.BC = {
  render: en,
  html: K,
  Preact: H1,
  createContext: Bc,
  toChildArray: A0,
  cloneElement: Oc,
  createPortal: jc,
  useId: Vc,
  useRef: Fe,
  useState: je,
  useEffect: Jt,
  useCallback: Ht,
  useMemo: M0,
  useContext: Pc,
  fromLocalTo: e2,
  fromViewportTo: t2,
  fromDocumentTo: r2,
  Marked: Bu,
  markedHighlight: I4,
  markedKatex: A4,
  hljs: Rn,
  ModuleURL: import.meta.url
  // actual URL of the running BrowserCard.js
};
customElements.get("bc-deck") == null && customElements.define("bc-deck", V5);
customElements.get("bc-designer") == null && customElements.define("bc-designer", P5);
const bg = S.HTMLsafe, vg = S.ValidatorForClassifier, wg = S.ValueIsArray, xg = S.ValueIsBoolean, yg = S.ValueIsCardinal, kg = S.ValueIsColor, Sg = S.ValueIsEMailAddress, _g = S.ValueIsFiniteNumber, Cg = S.ValueIsFunction, Ag = S.ValueIsInteger, $g = S.ValueIsIntegerInRange, Tg = S.ValueIsList, Ig = S.ValueIsListSatisfying, Ng = S.ValueIsNumber, Mg = S.ValueIsNumberInRange, Eg = S.ValueIsObject, zg = S.ValueIsOneOf, Rg = S.ValueIsOrdinal, Og = S.ValueIsPlainObject, Bg = S.ValueIsString, Dg = S.ValueIsStringMatching, Lg = S.ValueIsText, Fg = S.ValueIsTextline, Pg = S.ValueIsURL, Vg = S.acceptNil, Hg = S.escaped, qg = S.expectBoolean, Wg = S.expectFunction, Ug = S.expectText, Gg = S.quoted, jg = S.rejectNil;
export {
  vc as AlphaPercentOf,
  s2 as BC_BackgroundModes,
  o2 as BC_BorderStyles,
  J5 as BC_Cursors,
  cg as BC_DatePattern,
  t5 as BC_DateRegExp,
  og as BC_DateTimePattern,
  e5 as BC_DateTimeRegExp,
  Pa as BC_ErrorIndicator,
  Z5 as BC_FontStyles,
  n2 as BC_FontWeightValues,
  K5 as BC_FontWeights,
  fg as BC_MonthPattern,
  n5 as BC_MonthRegExp,
  l2 as BC_Overflows,
  mg as BC_PropertyEditorTypes,
  ys as BC_SafeSlot,
  X5 as BC_TextAlignments,
  i2 as BC_TextDecorationLines,
  a2 as BC_TextDecorationStyles,
  ag as BC_TimePattern,
  Q2 as BC_TimeRegExp,
  j5 as BC_Version,
  dg as BC_WeekPattern,
  r5 as BC_WeekRegExp,
  gg as BC_expectedOrientations,
  q1 as BC_horizontalAnchorses,
  W1 as BC_verticalAnchorses,
  wc as ColorFrom,
  mc as EOLCount,
  An as Fragment,
  bg as HTMLsafe,
  Bu as Marked,
  H1 as Preact,
  bc as RGBHexOf,
  Qi as ScriptInstance,
  sd as StringFromArguments,
  vg as ValidatorForClassifier,
  oo as ValueIsAnchors,
  wg as ValueIsArray,
  Y1 as ValueIsBackgroundTexture,
  xg as ValueIsBoolean,
  Q1 as ValueIsBorderStyle,
  ed as ValueIsBoxShadow,
  po as ValueIsCardJSON,
  yg as ValueIsCardinal,
  kg as ValueIsColor,
  ug as ValueIsDate,
  lg as ValueIsDateTime,
  Br as ValueIsDeck,
  Ar as ValueIsDimension,
  Sg as ValueIsEMailAddress,
  _g as ValueIsFiniteNumber,
  Cg as ValueIsFunction,
  K1 as ValueIsGeometry,
  U1 as ValueIsIdentifier,
  Ag as ValueIsInteger,
  $g as ValueIsIntegerInRange,
  Dm as ValueIsIntegerList,
  zm as ValueIsLineList,
  Tg as ValueIsList,
  Ig as ValueIsListSatisfying,
  ir as ValueIsLocation,
  pg as ValueIsMonth,
  di as ValueIsName,
  Ng as ValueIsNumber,
  Mg as ValueIsNumberInRange,
  Om as ValueIsNumberList,
  Eg as ValueIsObject,
  lo as ValueIsOffsets,
  zg as ValueIsOneOf,
  Rg as ValueIsOrdinal,
  td as ValueIsOverflowList,
  Q4 as ValueIsPhoneNumber,
  Og as ValueIsPlainObject,
  G1 as ValueIsPosition,
  rd as ValueIsSerializableObject,
  co as ValueIsSerializableValue,
  j1 as ValueIsSize,
  Bg as ValueIsString,
  Dg as ValueIsStringMatching,
  Lg as ValueIsText,
  X1 as ValueIsTextDecoration,
  J1 as ValueIsTextShadow,
  Fg as ValueIsTextline,
  sg as ValueIsTime,
  Pg as ValueIsURL,
  hg as ValueIsWeek,
  ra as ValueIsWidgetJSON,
  Vg as acceptNil,
  Pm as acceptableBoolean,
  Gm as acceptableCardinal,
  Ym as acceptableColor,
  Qm as acceptableEMailAddress,
  Jm as acceptableFunction,
  qm as acceptableInteger,
  Wm as acceptableIntegerInRange,
  rg as acceptableName,
  ng as acceptableNameOrIndex,
  Vm as acceptableNumber,
  Hm as acceptableNumberInRange,
  Um as acceptableOrdinal,
  eg as acceptablePhoneNumber,
  jm as acceptableString,
  Km as acceptableStringMatching,
  Zm as acceptableText,
  Xm as acceptableTextline,
  tg as acceptableURL,
  Fm as acceptableValue,
  S2 as allowAnchors,
  M2 as allowBackgroundTexture,
  z2 as allowBorderStyle,
  O2 as allowBoxShadow,
  m2 as allowDimension,
  y2 as allowGeometry,
  u2 as allowIdentifier,
  Z2 as allowIntegerList,
  q2 as allowLineList,
  f2 as allowLocation,
  h2 as allowName,
  G2 as allowNumberList,
  C2 as allowOffsets,
  D2 as allowOverflowList,
  b2 as allowPosition,
  V2 as allowSerializableObject,
  F2 as allowSerializableValue,
  w2 as allowSize,
  $2 as allowTextDecoration,
  I2 as allowTextShadow,
  fm as allowedAnchors,
  ym as allowedBackgroundTexture,
  Sm as allowedBorderStyle,
  Cm as allowedBoxShadow,
  am as allowedDimension,
  dm as allowedGeometry,
  Q5 as allowedIdentifier,
  Lm as allowedIntegerList,
  Rm as allowedLineList,
  nm as allowedLocation,
  tm as allowedName,
  Bm as allowedNumberList,
  mm as allowedOffsets,
  $m as allowedOverflowList,
  om as allowedPosition,
  Mm as allowedSerializableObject,
  Im as allowedSerializableValue,
  cm as allowedSize,
  bm as allowedTextDecoration,
  wm as allowedTextShadow,
  Va as buildContext,
  ea as buildScriptParams,
  W5 as clear,
  Oc as cloneElement,
  N0 as computeOffsets,
  Bc as createContext,
  rn as createElement,
  jc as createPortal,
  jd as createRef,
  Kc as createStore,
  fo as deckShallBeRemembered,
  vi as del,
  G5 as entries,
  Hg as escaped,
  Ei as escapedForHTML,
  _2 as expectAnchors,
  E2 as expectBackgroundTexture,
  qg as expectBoolean,
  R2 as expectBorderStyle,
  B2 as expectBoxShadow,
  g2 as expectDimension,
  Wg as expectFunction,
  k2 as expectGeometry,
  d2 as expectIdentifier,
  X2 as expectIntegerList,
  W2 as expectLineList,
  p2 as expectLocation,
  so as expectName,
  j2 as expectNumberList,
  A2 as expectOffsets,
  L2 as expectOverflowList,
  v2 as expectPosition,
  H2 as expectSerializableObject,
  P2 as expectSerializableValue,
  x2 as expectSize,
  Ug as expectText,
  T2 as expectTextDecoration,
  N2 as expectTextShadow,
  pm as expectedAnchors,
  km as expectedBackgroundTexture,
  _m as expectedBorderStyle,
  Am as expectedBoxShadow,
  sm as expectedDimension,
  hm as expectedGeometry,
  em as expectedIdentifier,
  J2 as expectedIntegerList,
  U2 as expectedLineList,
  im as expectedLocation,
  rm as expectedName,
  K2 as expectedNumberList,
  gm as expectedOffsets,
  Tm as expectedOverflowList,
  lm as expectedPosition,
  Em as expectedSerializableObject,
  Nm as expectedSerializableValue,
  um as expectedSize,
  vm as expectedTextDecoration,
  xm as expectedTextShadow,
  ah as forwardRef,
  r2 as fromDocumentTo,
  e2 as fromLocalTo,
  t2 as fromViewportTo,
  Un as get,
  rn as h,
  K as html,
  Y2 as installStylesheetFor,
  gh as keys,
  _5 as makeCardProxy,
  C5 as makeDeckProxy,
  S5 as makeWidgetProxy,
  I4 as markedHighlight,
  A4 as markedKatex,
  nh as memo,
  dr as newInternalId,
  x5 as normalizeWidgetOrder,
  ig as normalizedName,
  Kn as prepareLoadedDeck,
  Gg as quoted,
  nd as raiseIdCounterTo,
  jg as rejectNil,
  m5 as rememberCurrentDeck,
  en as render,
  h5 as resolveBehaviorUrl,
  Qt as resolveGeometry,
  u5 as safelyRendered,
  Ni as serializableDeck,
  hl as set,
  g5 as setDeckRemembering,
  ld as stripComputedGeometry,
  v5 as stripInternalIds,
  En as throwError,
  Y5 as throwReadOnlyError,
  A0 as toChildArray,
  $s as uniqueNameIn,
  Ht as useCallback,
  Pc as useContext,
  Jt as useEffect,
  zs as useErrorBoundary,
  Vc as useId,
  eh as useLayoutEffect,
  M0 as useMemo,
  Fc as useReducer,
  Fe as useRef,
  je as useState,
  U5 as values
};
