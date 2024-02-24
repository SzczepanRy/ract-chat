import React, { useRef, useState } from "react";
import { fetchLogin } from "../net/net";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
export default function Login() {
    const [validCheck, setValidCheck] = useState("");
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    async function handleLogin() {
        const login = loginRef.current?.value as string;
        const password = passwordRef.current?.value as string;

        const { message, valid } = await fetchLogin(login, password);

        if (valid) {
            //redirect
            navigate("/main");
        } else {
            setValidCheck(message);
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.modal}>
                <div className={styles.p}>{validCheck}</div>
                <input type="text" className={styles.input} ref={loginRef} placeholder="login" />
                <input type="text" ref={passwordRef} className={styles.input} placeholder="password" />

                <button
                    className={styles.button}
                    onClick={() => {
                        handleLogin();
                    }}
                >
                    send
                </button>
            </div>
        </div>
    );
}
