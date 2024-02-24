export const fetchLogin = async (login: string, password: string) => {
    // const res = await fetch("http://localhost:3000/login", {
    //     method: "post",
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         login,
    //         password,
    //     }),
    // });

    // const data = await res.json();

    // return data;
    return { message: "uga buga", valid: true };
};
export const fetchGroups = async (login: string) => {
    // const res = await fetch("http://localhost:3000/group/findByUser", {
    //     method: "post",
    //     headers: {
    //         "content-type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         login,
    //     }),
    // });

    // const data = await res.json();

    // return data;

    return { message: "uga buga", valid: true, data: [] };
};
