import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/layout/Layout.vue"),
    children: [
      {
        path: "/user",
        name: "用户管理",
        component: () => import("../views/User.vue")
      },
      {
        path: "/menu",
        name: "菜单管理",
        component: () => import("../views/Menu.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login/Login.vue")
  }
];

const router = new VueRouter({
  routes
});

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to：将要访问的路径
  // from：代表从那个路径跳转而来
  // next是一个函数,表示放行;  next() 放行    next('/login') 强制跳转

  // 如果用户访问的登录页，直接放行
  if (to.path === "/login") return next();
  // 从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem("token");
  // 没有token 强制跳转到登录页
  if (!tokenStr) return next("/login");
  next();
});

export default router;
