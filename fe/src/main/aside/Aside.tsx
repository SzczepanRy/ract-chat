import { SetStateAction, useEffect, useState } from "react";
import style from "./Aside.module.scss";
import Group from "./component/Group";
import { findGroups } from "../../net/net";
import { Dispatch } from "@reduxjs/toolkit";
interface GroupI {
    id: number;
    groupname: string;
}

export default function Aside({ setGroupData }: any) {
    const [currentGroups, setCurrentGroups] = useState<GroupI[] | null>(null);
    const [currentGroup, setCurrentGroup] = useState<GroupI | null>(null);

    useEffect(() => {
        setGroupData(currentGroup);
    }, [currentGroup]);

    const renderGroup = async () => {
        const loginData = localStorage.getItem("loginData");
        if (loginData) {
            const Ldata = JSON.parse(loginData);
            const { data } = await findGroups(Ldata.login);
            setCurrentGroups(data);
        }
    };
    useEffect(() => {
        renderGroup();
    }, []);

    return (
        <div className={style.aside}>
            <ol className={style.groups}>
                {currentGroups &&
                    currentGroups.map((group: GroupI, i) => (
                        <Group key={i} group={group} setCurrentGroup={setCurrentGroup} />
                    ))}
            </ol>
        </div>
    );
}
