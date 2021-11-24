import axios from "axios";
import jwt_decode from "jwt-decode";

export const adminProfile = () => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    const user = jwt_decode(token)
    console.log(user.id, token)
    const userId = user.id;
    return axios.get(`http://localhost:3001/admin/user/find/${userId}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }

    })
};

export const adminProfileUpdate = (token,id,data) => {
    return axios.put(`http://localhost:3001/admin/user/update/${id}`,data,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }

    })
};
