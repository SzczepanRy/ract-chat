import React from "react";
import { useNavigate } from "react-router-dom";

import style from "./Nav.module.scss";
export default function Nav() {
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
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
