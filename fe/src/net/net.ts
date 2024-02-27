export const addGroup = async (groupname: string) => {
    const res = await fetch("http://localhost:3000/group/add", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            groupname,
        }),
    });

    const data = await res.json();

    return data;
};
export const addUser = async (groupname: string, loginId: number, password: string) => {
    const res = await fetch("http://localhost:3000/user/add", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            groupname,
            loginId,
            password,
        }),
    });

    const data = await res.json();

    return data;
};
export const addMessage = async (groupname: string, loginId: number, message: string) => {
    const res = await fetch("http://localhost:3000/message/add", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            groupname,
            loginId,
            message,
        }),
    });

    const data = await res.json();

    return data;
};

export const findGroups = async (login: string) => {
    const res = await fetch("http://localhost:3000/group/findGroupsByLogin", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            login,
        }),
    });

    const data = await res.json();

    // return data;

    return { message: "ok", valid: true, data };
};
export const findMessages = async (groupname: string) => {
    const res = await fetch("http://localhost:3000/message/findMessageByGroup", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            groupname,
        }),
    });

    const data = await res.json();

    // return data;

    return { message: "ok", valid: true, data };
};
export const findUsers = async (groupname: string) => {
    console.log(groupname);

    const res = await fetch("http://localhost:3000/user/findUsersByGroup", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            groupname,
        }),
    });

    const data = await res.json();

    // return data;

    return { message: "ok", valid: true, data };
};

export const fetchLogin = async (login: string, password: string) => {
    const res = await fetch("http://localhost:3000/user/findUser", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            login,
            password,
        }),
    });

    const data = await res.json();

    return data;
    // return { message: "uga buga", valid: true };
};
