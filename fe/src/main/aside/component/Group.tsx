import { useState } from "react";

import style from "./Group.module.scss";
import { findUsers } from "../../../net/net";
interface GroupI {
    id: number;
    groupname: string;
}
interface UserI {
    id: number;
    login: string;
}
export default function Group({ group, setCurrentGroup }: any) {
    const [hidden, setHidden] = useState(true);
    const [users, setUsers] = useState<UserI[] | null>(null);
    const { id, groupname } = group;

    const renderUser = async () => {
        const { data } = await findUsers(groupname);
        setUsers(data);
    };

    // console.log(group, setCurrentGroup);

    return (
        <ul
            onClick={() => {
                setHidden(!hidden);
                renderUser();
                // console.log(groupname);
                if (hidden) {
                    setCurrentGroup({ id, groupname });
                } else {
                    setCurrentGroup(null);
                }
                // localStorage.setItem("groupData", JSON.stringify({ id, groupname }));
            }}
            className={style.group}
            key={id}
        >
            {groupname}
            <div style={{ display: hidden ? "none" : "block" }}>
                {users &&
                    users.map(({ id, login }) => (
                        <li key={id} className="user">
                            {login}
                        </li>
                    ))}
            </div>
        </ul>
    );
}
