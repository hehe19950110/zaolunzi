const base = require("./webpack.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = Object.assign({}, base, {
  mode: "development", //影响内存提示，development不会压缩代码，注释都会留在里面
  entry: {
    example: "./example.tsx",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "example.html",
    }),
  ], // 包含两个对象的所有属性
});
