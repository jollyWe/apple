import Mock from "mockjs";
import articleAPI from "./module/article";
import loginAPI from "./module/login";
// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
  timeout: "300-600"
});

// 文章相关
Mock.mock(/\/article\/list/, "get", articleAPI.getList);

// 登录相关
Mock.mock(/\/login/, "get", loginAPI.loginByName);
