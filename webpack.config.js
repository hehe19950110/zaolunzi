const path = require("path");
module.exports = {
  mode: "production",
  entry: {
    index: "./lib/index.tsx",
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
  ],
};
