const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
  mode: "development", //影响内存提示，development不会压缩代码，注释都会留在里面
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ], // 包含两个对象的所有属性
});
