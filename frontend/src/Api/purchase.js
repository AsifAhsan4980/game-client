import axios from "axios";

export const getAllPurchase = (token,id) => {
    return axios.get(`http://localhost:3001/purchase/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}