import axios from "axios";

export const addProductss = (id,addProduct) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    return axios.put(`http://localhost:3001/admin/product/add/${id}`, addProduct, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export const addProductImage = (addProduct) => {
    const token = JSON.parse(localStorage.getItem('jwt'))
    return axios.post("http://localhost:3001/admin/product/addProductImage", addProduct, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export const getOneProducts = (id) => {
    console.log(id)
    return axios.get(
        `http://localhost:3001/admin/product/${id}`
    );
};

export const getAllProducts = () => {

    return axios.get(
        `http://localhost:3001/admin/product/`
    );
};

export const updateProductss = (id, addProduct) => {

    const token = JSON.parse(localStorage.getItem('jwt'))
    return axios.put(`http://localhost:3001/admin/product/${id}`, addProduct, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
};

export const deleteOneProducts = (id) => {
    console.log(id)
    const token = JSON.parse(localStorage.getItem('jwt'))
    return axios.delete(
        `http://localhost:3001/admin/product/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    );
};

export const getProductImage =  (image)=> {
    console.log(image)
    const token = JSON.parse(localStorage.getItem('jwt'))
}