import React, { useEffect, useState } from "react";
import Nav from "./nav/Nav";
import Aside from "./aside/Aside";
import style from "./Main.module.scss";
import { useNavigate } from "react-router-dom";
import { findMessages } from "../net/net";

interface loginDataI {
    id: Number;
    login: string;
}
interface messageDataI {
    id: Number;
    createdAt: Date;
    message: string;
    authorId: Number;
    groupId: number;
}
interface groupDataI {
    id: Number;
    groupname: string;
}

export default function Main() {
    const [loginData, setLoginData] = useState<loginDataI | null>(null);

    const [groupData, setGroupData] = useState<groupDataI | null>(null);
    const [messageData, setMessageData] = useState<messageDataI[] | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        setGroupData({ id: 1, groupname: "grupa1" });
        const render = async () => {
            let currentLoginData = localStorage.getItem("loginData");
            let currentGroupData = localStorage.getItem("groupData");

            if (currentLoginData) {
                let Ldata = JSON.parse(currentLoginData);
                setLoginData(Ldata);
                let { data } = await findMessages(groupData?.groupname as string);

                setMessageData(data);
            } else {
                navigate("/");
            }
        };
        render();
    }, []);

    return (
        <>
            <Nav />
            <main className={style.main}>
                <Aside />
                <div className={style.body}>
                    <div className={style.user}>logged in as {loginData?.login}</div>
                    <div className={style.chat}>
                        <div className={style.messages}>
                            {groupData && (
                                <>
                                    <div className={style.message}>message</div>
                                    <div className={style.message}>message</div>
                                    <div className={style.message}>message</div>
                                    <div className={style.message}>message</div>
                                    <div className={style.message}>message</div>
                                </>
                            )}
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
