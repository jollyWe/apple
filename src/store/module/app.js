export default {
  state: {
    appName: "Kitty Platform", // 应用名称
    isCollapse: false, // 导航栏收缩状态
    menuRouteLoaded: false // 菜单和路由是否已经加载
  },
  // getters: {
  //   collapse(state) {
  //     // 对应着上面state
  //     return state.isCollapse;
  //   }
  // },
  mutations: {
    onCollapse(state) {
      // 改变收缩状态
      state.isCollapse = !state.isCollapse;
    }
  },
  actions: {}
};
