import axios from "axios";

export const activeAdminProducts = (token) => {
    return axios.get("http://localhost:3001/admin/user/all_user",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}