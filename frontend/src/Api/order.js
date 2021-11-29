import axios from "axios";


export const createNewOrder = (token,data) => {
    console.log('ID',data)

    return axios.post(`http://localhost:3001/admin/order/`,data,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}