const webpack = require("webpack")
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                use: ["babel-loader", "ts-loader"],
            },
        ],
    },
    resolve: {
        extensions: ["tsx", "ts"],
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: "127.0.0.1",
        port: 3000,
        contentBase: "./build",
        hot: true,
        open: true,
    },
}
