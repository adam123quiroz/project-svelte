(() => {
  "use strict";

  function t() {
  }

  function e(t) {
    return t()
  }

  function n() {
    return Object.create(null)
  }

  function o(t) {
    t.forEach(e)
  }

  function s(t) {
    return "function" == typeof t
  }

  function r(t, e) {
    return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
  }

  function l(t) {
    return 0 === Object.keys(t).length
  }

  function c(t) {
    t.parentNode.removeChild(t)
  }

  function i(t) {
    return document.createElement(t)
  }

  let a;

  function u(t) {
    a = t
  }

  new Set, new Set;
  const d = [], f = [], h = [], $ = [], p = Promise.resolve();
  let m = !1;

  function g(t) {
    h.push(t)
  }

  let y = !1;
  const b = new Set;

  function _() {
    if (!y) {
      y = !0;
      do {
        for (let t = 0; t < d.length; t += 1) {
          const e = d[t];
          u(e), k(e.$$)
        }
        for (u(null), d.length = 0; f.length;) f.pop()();
        for (let t = 0; t < h.length; t += 1) {
          const e = h[t];
          b.has(e) || (b.add(e), e())
        }
        h.length = 0
      } while (d.length);
      for (; $.length;) $.pop()();
      m = !1, y = !1, b.clear()
    }
  }

  function k(t) {
    if (null !== t.fragment) {
      t.update(), o(t.before_update);
      const e = t.dirty;
      t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(g)
    }
  }

  const w = new Set;
  let x;

  function v(t, e) {
    const n = t.$$;
    null !== n.fragment && (o(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = [])
  }

  function E(r, l, i, f, h, $, y = [-1]) {
    const b = a;
    u(r);
    const k = r.$$ = {
      fragment: null,
      ctx: null,
      props: $,
      update: t,
      not_equal: h,
      bound: n(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(b ? b.$$.context : []),
      callbacks: n(),
      dirty: y,
      skip_bound: !1
    };
    let x = !1;
    if (k.ctx = i ? i(r, l.props || {}, ((t, e, ...n) => {
      const o = n.length ? n[0] : e;
      return k.ctx && h(k.ctx[t], k.ctx[t] = o) && (!k.skip_bound && k.bound[t] && k.bound[t](o), x && function (t, e) {
        -1 === t.$$.dirty[0] && (d.push(t), m || (m = !0, p.then(_)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
      }(r, t)), e
    })) : [], k.update(), x = !0, o(k.before_update), k.fragment = !!f && f(k.ctx), l.target) {
      if (l.hydrate) {
        const t = (C = l.target, Array.from(C.childNodes));
        k.fragment && k.fragment.l(t), t.forEach(c)
      } else k.fragment && k.fragment.c();
      l.intro && ((v = r.$$.fragment) && v.i && (w.delete(v), v.i(E))), function (t, n, r, l) {
        const {fragment: c, on_mount: i, on_destroy: a, after_update: u} = t.$$;
        c && c.m(n, r), l || g((() => {
          const n = i.map(e).filter(s);
          a ? a.push(...n) : o(n), t.$$.on_mount = []
        })), u.forEach(g)
      }(r, l.target, l.anchor, l.customElement), _()
    }
    var v, E, C;
    u(b)
  }

  "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : global, new Set(["allowfullscreen", "allowpaymentrequest", "async", "autofocus", "autoplay", "checked", "controls", "default", "defer", "disabled", "formnovalidate", "hidden", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "selected"]), "function" == typeof HTMLElement && (x = class extends HTMLElement {
    constructor() {
      super(), this.attachShadow({mode: "open"})
    }

    connectedCallback() {
      const {on_mount: t} = this.$$;
      this.$$.on_disconnect = t.map(e).filter(s);
      for (const t in this.$$.slotted) this.appendChild(this.$$.slotted[t])
    }

    attributeChangedCallback(t, e, n) {
      this[t] = n
    }

    disconnectedCallback() {
      o(this.$$.on_disconnect)
    }

    $destroy() {
      v(this, 1), this.$destroy = t
    }

    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return n.push(e), () => {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1)
      }
    }

    $set(t) {
      this.$$set && !l(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
  });

  function C(e) {
    let n;
    return {
      c() {
        var t, e, o;
        n = i("div"), n.innerHTML = "<h1>Hello Pugstagram</h1>", t = n, e = "class", null == (o = "main") ? t.removeAttribute(e) : t.getAttribute(e) !== o && t.setAttribute(e, o)
      }, m(t, e) {
        !function (t, e, n) {
          t.insertBefore(e, n || null)
        }(t, n, e)
      }, p: t, i: t, o: t, d(t) {
        t && c(n)
      }
    }
  }

  new class extends class {
    $destroy() {
      v(this, 1), this.$destroy = t
    }

    $on(t, e) {
      const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return n.push(e), () => {
        const t = n.indexOf(e);
        -1 !== t && n.splice(t, 1)
      }
    }

    $set(t) {
      this.$$set && !l(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
  } {
    constructor(t) {
      var e, n, o;
      super(), document.getElementById("svelte-27diyp-style") || ((e = i("style")).id = "svelte-27diyp-style", e.textContent = "body{background-color:#676778;color:white}", n = document.head, o = e, n.appendChild(o)), E(this, t, null, C, r, {})
    }
  }({target: document.querySelector("main")})
})();