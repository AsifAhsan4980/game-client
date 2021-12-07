import axios from "axios";


export const createNewPurchase = (token,data) => {
    console.log('Data',data)
    return axios.post(`http://localhost:3001/admin/purchase/`,data,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

export const getAllPurchaseById = (token,id) => {
    return axios.get(`http://localhost:3001/admin/purchase/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

export const getAllPurchase = (token) => {
    return axios.get("http://localhost:3001/admin/purchase/",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}