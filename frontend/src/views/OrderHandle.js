import React, { useEffect, useState } from "react";
import { adminProfile } from "../Api/userAdmin";
import { getAllProducts } from "../Api/products";
import { updateUserActiveStatus } from "../Api/user";
import { activeAdminProducts } from "../Api/productArray";
import {Button, Card, Select, Radio} from "antd";


const OrderHandle = () => {

    const [product, setProduct] = useState(false);
    const [adminData, setAdminData] = useState([])


    const [productId, setProductId] = useState({
        productId: ''
    });



    useEffect(() => {
        adminProfile()
            .then((res) => {
                let allData = res.data
                setAdminData(allData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [adminData]);

    useEffect(() => {
        getAllProducts()
            .then((res) => {
                let allData = res.data
                setProduct(allData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    const changeActiveStatus = value => {
        updateUserActiveStatus(value)
        if (value === 'active') {
            activeAdminProducts(productId.productId)
        }

    }

    const handleChanges = (e) => {
        setProductId({
            ...productId,
            [e.target.name]: e.target.value
        })
    }

    const { Option } = Select;

    const children = [];
    for (let i = 0; i < product.length; i++) {
        children.push(<Option key={i} >{product[i].gameName} {product[i].categoryName}</Option>);
    }

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    const [value, setValue] = React.useState(1);

    const onChange = e => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    console.log(adminData)
    const handleSubmit = () => {
        for (let i = 0; i<value.length; i++){

        }
    }
    return (
        <>
            <Card title={`Hello ${adminData.username}`} extra={<p href="#">Pick A Category</p>} >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Please select"
                    onChange={handleChange}
                >
                    {children}
                </Select>
                <div className="pt-4 d-flex justify-content-center">
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>InActive Order Status</Radio>
                        <Radio value={2} onClick={handleSubmit} >Active Receiving Order</Radio>
                    </Radio.Group>
                </div>

            </Card>

        </>
    )
}
export default OrderHandle