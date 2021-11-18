import React, {useEffect, useState} from "react";
import {ButtonGroup, Card, Col, Form, Row, ToggleButton} from "react-bootstrap";
import {adminProfile} from "../Api/userAdmin";
import {getAllProducts} from "../Api/products";

const OrderHandle = () => {

    const [product, setProduct] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const [adminData, setAdminData] = useState([])

    const radios = [
        {name: 'InActive', value: '1'},
        {name: 'Active', value: '2'},
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
    }, []);

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
    console.log(product)
    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col lg={3} className='text-center'>
                            <h1>Hello {adminData.username} </h1>
                        </Col>
                        <Col className="text-center" lg={6}>
                            <Form>
                                <Form.Label>Order Category</Form.Label>
                                <Form.Control as="select" aria-label="Default select example" defaultValue="State..." name="type" >
                                    <option>Select your account type</option>
                                    {
                                       product && product.map((data, index) => {
                                                return (
                                                    <option key={index}>{data.gameName} {data.categoryName}</option>
                                                )
                                            }
                                        )
                                    }
                                </Form.Control>
                            </Form>

                        </Col>
                        <Col><ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton
                                    key={idx}
                                    id={`radio-${idx}`}
                                    type="radio"
                                    variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                    name="radio"
                                    value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default OrderHandle