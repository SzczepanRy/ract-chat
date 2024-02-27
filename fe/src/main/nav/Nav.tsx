import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./Nav.module.scss";
import { socket } from "../../socket";
export default function Nav() {
    const navigate = useNavigate();
    function disconnect() {
        socket.disconnect();
    }
    function logout() {
        localStorage.clear();
        disconnect();
        navigate("/");
    }

    return (
        <div className={style.nav}>
            <div className={style.title}>title</div>
            <ol className={style.ol}>
                <li className={style.el}>element</li>
                <li className={style.el}>element</li>
                <li className={style.el}>element</li>
                <li className={style.el} onClick={logout}>
                    logout
                </li>
            </ol>
        </div>
    );
}
