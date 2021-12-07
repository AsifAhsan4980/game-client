import axios from "axios";
import jwt_decode from "jwt-decode";

export const getAllUser = (token) => {
    return axios.get("http://localhost:3001/admin/user/all_user",{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}


export const getOneUser = (token,id) => {
    return axios.get(`http://localhost:3001/admin/user/find/${id}`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

export const deleteUser = (token,id) => {
    return axios.put(`http://localhost:3001/admin/user/delete/${id}`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

export const updateUserRole = (token,role) => {
    return axios.put(`http://localhost:3001/admin/user/roleUpdate/${role._id}`, role, {
        headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}

export const updateUserActiveStatus = (activeStatus) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    const user = jwt_decode(token)
    const id = user.id;
    console.log('ID',id)
    const data={
        activeStatus:activeStatus
    }
    return axios.put(`http://localhost:3001/admin/user/activeStatusUpdate/${id}`,data,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${token}`
        }
    })
}