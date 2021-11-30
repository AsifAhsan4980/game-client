import axios from "axios";
import jwt_decode from "jwt-decode";

export const activeAdminProducts = (productId) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    const user = jwt_decode(token)
    const userId = user.id;
    const array=[productId]

    return axios.get(`http://localhost:3001/admin/product/product/list/${userId}?array=${array}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}