const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

// 抽离CSS插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    mode: "development",
    entry: { index: "./src/index" },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "react-dom": "@hot-loader/react-dom",
        },
    },
    module: {
        rules: [
            // 支持tsx
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            // 支持css
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use:
                    process.env.NODE_ENV === "development"
                        ? ["style-loader", "css-loader", "less-loader"]
                        : [MiniCssExtractPlugin.loader, "css-loader"],
            },
            // 支持less
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use:
                    process.env.NODE_ENV === "development"
                        ? ["style-loader", "css-loader", "less-loader"]
                        : [
                              MiniCssExtractPlugin.loader,
                              "css-loader",
                              "less-loader",
                          ],
            },
            // 支持图片
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // 支持字体文件
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        // 加载模板文件
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
            filename: "index.html",
        }),
        new MiniCssExtractPlugin(),
        new ESLintPlugin({
            context: "src",
            extensions: ["ts", "tsx"],
            exclude: ["node_modules", "build"],
        }),
    ],
    devServer: {
        host: "127.0.0.1",
        port: 3000,
        contentBase: "build",
        inline: true,
        open: true,
        hot: true,
    },
}
