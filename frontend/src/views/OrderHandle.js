import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, Col, Form, Row, ToggleButton } from "react-bootstrap";
import { adminProfile } from "../Api/userAdmin";
import { getAllProducts } from "../Api/products";
import { updateUserWallet } from "../Api/user";
import { activeAdminProducts } from "../Api/user";

const OrderHandle = () => {

    const [product, setProduct] = useState(false);
    const [radioValue, setRadioValue] = useState('inActive');
    const [adminData, setAdminData] = useState([])
    

    const radios = [
        { name: 'InActive', value: 'inActive' },
        { name: 'Active', value: 'active' },
    ];

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

    //console.log(product)
    const changeActiveStatus = value => {
        updateUserWallet(value)
    }

    const setId=id=>{
        
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col lg={3} className='text-center'>
                            <h1>Hello {adminData.username} </h1>
                        </Col>
                        <Col className="text-center" lg={7}>
                            <Form>
                                <Row>
                                    <Col lg={10}>
                                        <Form.Label>Order Category</Form.Label>
                                        <Form.Control as="select" aria-label="Default select example"
                                            defaultValue="State..."
                                            name="type">
                                            {
                                                product && product.map((data, index) => {
                                                    return (
                                                        <option onClick={setId(data.id)} key={index}>{data.gameName} {data.categoryName} </option>
                                                    )
                                                }
                                                )
                                            }
                                        </Form.Control>
                                    </Col>
                                    <Col className="p-3">
                                        <Button>Add</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                        <Col>
                            <div className='text-center'><Form.Label>Active Order Status</Form.Label></div>
                            <div><ButtonGroup>
                                {radios.map((radio, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        id={`radio-${idx}`}
                                        type="radio"
                                        variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                        name="radio"
                                        value={radio.value}
                                        checked={adminData.activeStatus === radio.value}
                                        onChange={(e) => changeActiveStatus(e.currentTarget.value)}
                                    >
                                        {radio.name}
                                    </ToggleButton>
                                ))}
                            </ButtonGroup></div>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default OrderHandle