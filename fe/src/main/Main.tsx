import React, { useEffect, useRef, useState } from "react";
import Nav from "./nav/Nav";
import Aside from "./aside/Aside";
import style from "./Main.module.scss";
import { useNavigate } from "react-router-dom";
import { addMessage, findMessages } from "../net/net";
import { socket } from "../socket";

interface loginDataI {
    id: Number;
    login: string;
}
interface messageDataI {
    id: Number;
    createdAt: Date;
    message: string;
    author: string;
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

    const message = useRef<HTMLInputElement | null>(null);
    const render = async () => {
        let currentLoginData = localStorage.getItem("loginData");

        if (currentLoginData) {
            let Ldata = JSON.parse(currentLoginData);
            setLoginData(Ldata);

            // console.log(data);
            // setMessageData(data);
            if (groupData) {
                socket.emit("loadChat", groupData.groupname as string);
            }

            socket.on("resChat", async (value) => {
                if (groupData) {
                    let { data } = await findMessages(groupData.groupname as string);

                    console.log(data);
                    console.log("AAAAA");
                    console.log(value);
                    if (JSON.stringify(data) == JSON.stringify(value) && data) {
                        setMessageData(value);
                    }
                }
            });
        } else {
            navigate("/");
        }
    };

    const sendMessage = async () => {
        const currentMessage = message.current?.value;
        //  let res = await addMessage(groupData?.groupname as string, loginData?.id as number, currentMessage as string);
        socket.emit(
            "newMessage",
            JSON.stringify({
                groupname: groupData?.groupname as string,
                loginId: loginData?.id as number,
                message: currentMessage as string,
            })
        );

        //  render();
    };

    useEffect(() => {
        // setGroupData({ id: 1, groupname: "grupa1" });

        render();
    }, [groupData]);

    return (
        <>
            <Nav />
            <main className={style.main}>
                <Aside setGroupData={setGroupData} />
                <div className={style.body}>
                    <div className={style.user}>logged in as {loginData?.login}</div>
                    <div className={style.chat}>
                        <div className={style.messages}>
                            {groupData &&
                                messageData?.map((el, i) => (
                                    <div key={i} className={style.message}>
                                        <p>
                                            <b>{el.author}</b>: {el.message}
                                        </p>
                                    </div>
                                ))}
                        </div>

                        <div className={style.form}>
                            <input
                                type="text"
                                ref={message}
                                className={style.input}
                                placeholder="type youre message here"
                            />
                            <button
                                onClick={() => {
                                    sendMessage();
                                }}
                                className={style.button}
                            >
                                send
                            </button>
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
