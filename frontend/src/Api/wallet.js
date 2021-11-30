import axios from "axios";

export const createWallet = (id) => {
    const data={
        userId:id
    }
    return axios.post(`http://localhost:3001/admin/wallet`,data,{
        headers:{
            "Content-Type":"application/json",
        }
    })
}

export const updateUserWallet = (token,id,walletId) => {
    const data={
        wallet:walletId
    }
    return axios.put(`http://localhost:3001/admin/user/walletUpdate/${id}`,data,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

export const getWalletById = (token,id) => {
    return axios.get(`http://localhost:3001/admin/wallet/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

