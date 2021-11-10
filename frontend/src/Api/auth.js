import axios from "axios";

export const login = (user) => {
    return axios.post("http://localhost:3001/admin/login", user, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

export const registration = (user) => {  
    console.log(user)
    return axios.post("http://localhost:3001/admin/register", user, { 
        headers: { 
            'Content-Type': 'application/json'
        }
    })
};