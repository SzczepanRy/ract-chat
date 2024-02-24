import { useState } from "react";
import "./App.module.scss";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./_global.scss";
function App() {
    // const [count, setCount/] = useState(0);

    return (
        <>
            <h1>APP</h1>
        </>
    );
}

export function appLoader() {
    console.log("appLoader");
    return "appLoader";
}

export default App;
