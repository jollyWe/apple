import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "@assets/css/base/base.scss";

import mixins from "./mixins";
//引入svg组件
import SvgIcon from "@/components/SvgIcon.vue";
import api from "./api"; // 导入api接口
import i18n from "./i18n";

Vue.prototype.$api = api; // 将api挂载到vue的原型上

Vue.mixin(mixins);
//全局注册icon-svg
Vue.component("SvgIcon", SvgIcon);
Vue.config.productionTip = false;

// 生产环境拦截（不是生产环境的时候引入mock）
if (process.env.NODE_ENV !== "production") require("./mock");

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
