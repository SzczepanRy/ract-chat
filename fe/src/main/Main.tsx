import React from "react";
import Nav from "./nav/Nav";
import Aside from "./aside/Aside";
import style from "./Main.module.scss";

export default function Main() {
    return (
        <>
            <Nav />
            <main className={style.main}>
                <Aside />
                <div className={style.body}>
                    <div className={style.user}>logged in as [username]</div>
                    <div className={style.chat}>
                        <div className={style.messages}>
                            <div className={style.message}>message</div>
                            <div className={style.message}>message</div>
                            <div className={style.message}>message</div>
                            <div className={style.message}>message</div>
                            <div className={style.message}>message</div>
                        </div>
                        <div className={style.form}>
                            <input type="text" className={style.input} placeholder="type youre message here" />
                            <button className={style.button}>send</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export function mainLoader() {
    console.log("mainLoader");

    return "mainLoader";
}
