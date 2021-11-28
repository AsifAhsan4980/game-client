import axios from "axios";


export const addWallet = (token,data) => {
    return axios.post(`http://localhost:3001/admin/addwallet`,data,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}