import { hot } from "react-hot-loader/root"

import { FC } from "react"
import "./App.less"

const App: FC = () => (
    <div className="app-container">
        <h1>Hello World!</h1>
        <h3>You are using raw-react!</h3>
        <p>
            色彩来源于<a href="http://zhongguose.com/#meihong">中国色</a>
        </p>
    </div>
)

// HMR
export default hot(App)
