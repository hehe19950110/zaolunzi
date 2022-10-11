const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  //webpack共有属性保留：
  entry: {
    index: "./lib/index.tsx",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "dist/lib"),
    library: "FUI", //输出的文件名
    libraryTarget: "umd", //输出的文件格式，即library在全部环境都可以使用
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader",
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader", // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader", // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: "sass-loader", // 将 Sass 编译成 CSS
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: "file-loader",
      },
    ],
  },
};
