import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
// import "./assets/css/base/base.scss";
import "@assets/css/common.scss";
import mixins from "./mixins";
//引入svg组件
import SvgIcon from "@/components/SvgIcon.vue";

Vue.mixin(mixins);
//全局注册icon-svg
Vue.component("SvgIcon", SvgIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
