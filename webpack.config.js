const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "less-loader"],
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "./public/index.html"),
            filename: "index.html",
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
};
