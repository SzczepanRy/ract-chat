import { useState } from "react";

import style from "./Group.module.scss";

export default function Group() {
    const [hidden, setHidden] = useState(true);
    return (
        <ul
            onClick={() => {
                setHidden(!hidden);
            }}
            className={style.group}
        >
            group
            <div style={{ display: hidden ? "none" : "block" }}>
                <li className="user">user</li>
                <li className="user">user</li>
                <li className="user">user</li>
                <li className="user">user</li>
            </div>
        </ul>
    );
}
