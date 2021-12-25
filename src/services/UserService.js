

//Phần BE test thử, không cần quan tâm

import axios from "axios";
import React from "react";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'content-type': 'application/json',
    }
})

class UserService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    }

    getAll() {
        const url = `/api/user`;
        return axiosClient.get(url);
    }

    get(id) {
        const url = `/${id}/`;
        return axiosClient.get(url);
    }

    add(data) {
        const url = `/api/user`;
        return axiosClient.post(url, data);
    }

    update(data) {
        const url = `/${data.id}/`;
        return axiosClient.patch(url, data);
    }

    remove(id) {
        const url = `/${id}/`;
        return axiosClient.delete(url);
    }
}

export default new UserService();