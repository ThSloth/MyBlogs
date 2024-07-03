import Theme from "vitepress/theme";
import { h } from "vue";
import homeHeroInfo from "./components/homeHeroInfo.vue";
import './style/style.css';

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      "home-hero-info": () => h(homeHeroInfo),
    });
  },
};

