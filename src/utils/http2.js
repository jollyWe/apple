import axios from "axios";
// eslint-disable-next-line no-unused-vars
import store from "../store"; // 这里做loading会调用store
// import { getToken } from "@/utils/auth"; // 这个不重要，就是一个获取tooken的
import { messages } from "@assets/js/common.js"; //封装的提示文件

// 创建axios实例
const service = axios.create({
  // api的base_url，本地配置的代理，理论上可以不用baseURL
  // baseURL: process.env.BASE_API,
  timeout: 15000 // 请求超时时间
  // headers 可以通过在这里设置，也可以在request拦截器里创建
  // headers: {'X-Custom-Header': 'foobar'}
});

// request拦截器
service.interceptors.request.use(
  config => {
    // !!! 这里开始触发 loading 效果 !!!
    // store.dispatch("SetLoading", true);

    // 设置 token header
    // eslint-disable-next-line no-undef
    // getToken() && (config.headers["token"] = token);

    // 这个是微信登录中需要用到 header
    config.headers["deviceType"] = "school_admin_web";
    return config;
  },
  error => {
    // eslint-disable-next-line no-unused-vars
    const { response } = error;
    // 这里可以根据自己的业务做一些操作，比如说全局提示

    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    // !!! 关闭 loading !!!
    // store.dispatch("SetLoading", false);

    const res = response.data;
    if (res.code !== 200) {
      // 这里可以做一些全局性的错误提示，这样就没必要在每个请求都再写一个else,再重复代码提示
      // alert(res.message);
      messages("error", res.message);
      // 不是真的alert啊
    }
    return response.data;
  },
  error => {
    // !!! 关闭 loading !!!
    // store.dispatch("SetLoading", false);

    // eslint-disable-next-line no-unused-vars
    const { response } = error;
    // 这里可以根据自己的业务做一些操作，比如说强制登出

    return Promise.reject(error);
  }
);

export default service;
