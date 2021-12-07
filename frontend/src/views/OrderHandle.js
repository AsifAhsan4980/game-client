import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Card, Col, Form, Row, ToggleButton} from "react-bootstrap";
import {adminProfile} from "../Api/userAdmin";
import {getAllProducts} from "../Api/products";

const OrderHandle = () => {

    const [product, setProduct] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const [adminData, setAdminData] = useState([])

    const [inputList, setInputList] = useState([{
        productId: " "
    }]);


    const [getOrder, setGetOrder] = useState({
        adminId: '',
        product: []
    })
    const {productId} = inputList;



    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, {
            productId: ""
        }])
    };
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

    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        setGetOrder({
            ...getOrder,
            product: inputList
        })
    };

    //console.log(product)
    const changeActiveStatus = value => {
        updateUserWallet(value)
    }
    console.log(getOrder)


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
                                                            <option key={index}>{data.gameName} {data.categoryName}</option>
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

                                <Form.Label>Select Category</Form.Label>
                                    {inputList.map((x, i) => {
                                        return (
                                            <Row key={i}>
                                                <Col lg={9}>
                                                    <Form.Group className="mb-3" controlId="addCategory">
                                                        <Form.Control as="select" aria-label="Default select example"
                                                                      defaultValue="State..."
                                                                      name="productId" value={productId} onChange={e => handleInputChange(e, i)}>
                                                            <option>Select your Product</option>
                                                            {
                                                                product && product.map((data, index) => {
                                                                        return (
                                                                            <option id={data._id} key={index} className="text-black">{data._id}</option>
                                                                        )
                                                                    }
                                                                )
                                                            }
                                                        </Form.Control>
                                                    </Form.Group>
                                                </Col>

                                                <Col className="mt-4">
                                                    {inputList.length !== 1 && <Button
                                                        className="mr10"
                                                        onClick={() => handleRemoveClick(i)}>Remove</Button>}
                                                    {inputList.length - 1 === i && <Button key={i} onClick={handleAddClick}>Add</Button>}
                                                </Col>
                                            </Row>
                                        )
                                    })}

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
                                        checked={radioValue === radio.value}
                                        onChange={(e) => setRadioValue(e.currentTarget.value)}
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