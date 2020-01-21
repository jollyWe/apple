const path = require("path");

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.module
      .rule("svg-sprite")
      .use("svgo-loader")
      .loader("svgo-loader");
    // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@apis", resolve("src/apis"))
      .set("@assets", resolve("src/assets"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@components", resolve("src/components"))
      .set("@middlewares", resolve("src/middlewares"))
      .set("@mixins", resolve("src/mixins"))
      .set("@plugins", resolve("src/plugins"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@utils", resolve("src/utils"))
      .set("@views", resolve("src/views"))
      .set("@layouts", resolve("src/layouts"));
  },
  devServer: {
    port: 8036,
    hot: true,
    open: "Google Chrome"
  }
};
