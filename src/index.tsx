import "react-hot-loader"
import React from "react"
import ReactDOM from "react-dom"
// 样式表
import "./index.less"
// 应用根节点
import App from "./App"

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
