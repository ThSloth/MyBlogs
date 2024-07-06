import m from "vitepress/theme";
import { h } from "vue";
import './style/style.css';
import './style/iconfont-weapp-icon.css';

import { defineComponent as d, h as t } from "vue";
import { useData as y, defineClientComponent as n } from "vitepress";
const b = d({
  setup(g, { slots: i }) {
    var s, l, r, u;
    const o = i, { Layout: c } = m, { site: f } = y(), e = f.value.themeConfig, p = ((s = e.musicBall) == null ? void 0 : s.enable) && (((l = e.musicBall) == null ? void 0 : l.src) || ((u = (r = e.musicBall) == null ? void 0 : r.list) == null ? void 0 : u.length) > 0), h = n(() => import("./js/EscookMusicBall-BkDBnoZh.js"), [
      {
        style: { display: e.musicBall && e.musicBall.visible ? "" : "none" }
      }
    ]), C = n(() => import("./js/EscookHomeFeatureBefore-D_e5sYrO.js")), B = n(() => import("./js/EscookConfetti-BU05OPRV.js"));
    return () => [
      t(c, null, { ...i, "home-features-before": () => {
        var a;
        return [t(C), (a = o["home-features-before"]) == null ? void 0 : a.call(o)];
      } }),
      p && t(h),
      e.confetti && t(B)
    ];
  }
}), D = {
  extends: { ...m },
  Layout: b,
  enhanceApp({}) {
  }
};
export {
  D as default
};