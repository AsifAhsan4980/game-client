import React, {useEffect, useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {Navigate} from "react-router-dom";
import {getOneProducts, getProductImage, updateProductss} from "../../Api/products";
import {isAuthenticated} from "../../utils/auth";


const ProductUpdate = (id) => {
    const productId = id.id
    const [detailsList, setDetailsList] = useState([{
        region: '',
        platform: '',
        publisher: '',
    }]);

    const [inputList, setInputList] = useState([{
        option: "",
        price: ""
    }]);

    const {region, platform, publisher} = detailsList;
    const {option, price} = inputList;


    const [updateProduct, setUpdateProduct] = useState({
        gameName: '',
        categoryName: '',
        image: '',
        details: detailsList,
        topUp: inputList
    });

    const {gameName, categoryName, image, success, details, topUp} = updateProduct;


    const handleDetailChange = (e, index) => {
        const {name, value} = e.target
        const list = [...detailsList];
        list[index][name] = value;
        setDetailsList(list)

    }
    const handleInputChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleChange = (e, index) => {
        setUpdateProduct({
            ...updateProduct,
            [e.target.name]: e.target.value,
        })
    }


    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, {option: "", price: ""}]);
    };


    useEffect(async () => {
        await getOneProducts(productId)
            .then((res) => {  
                let allData = res.data
                setUpdateProduct(allData)
                setDetailsList(allData.details[0])
                setInputList(allData.topUp)
                console.log(allData.image)

            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);
    const getImage = (image) => {
        getProductImage(image)
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(updateProduct)
        updateProductss(productId, updateProduct)
            .then(response => {
                isAuthenticated(response.data.token, () => {
                    setUpdateProduct({
                        gameName: '',
                        categoryName: '',
                        image: '',
                        detail: detailsList,
                        topUp: inputList,
                        success: true,
                    })
                })
            })
            .catch(err => console.log(err))
    }


    const addForm = () => (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="addGame">
                            <Form.Label>Add Game</Form.Label>
                            <Form.Control type="game" name="gameName" placeholder="Game name" value={gameName}
                                          required={true} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="addCategory">
                            <Form.Label>Add Category</Form.Label>
                            <Form.Control type="category" name="categoryName" placeholder="Category name"
                                          value={categoryName} onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <img src={`http://localhost:3001/${updateProduct.images}`} alt="Product Image"/>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" value={image} name="image" onChange={handleChange}/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="addGame">
                            <Form.Label>Region</Form.Label>
                            <Form.Control type="region" name="region" placeholder="Region name"
                                          value={region}
                                          defaultValue={detailsList.region} required={true}
                                          onChange={e => handleDetailChange(e, 0)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="addCategory">
                            <Form.Label>PlatForm</Form.Label>
                            <Form.Control type="platform" name="platform" placeholder="Platform name"
                                          value={platform} onChange={e => handleDetailChange(e, 0)}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="addCategory">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control type="publisher" name="publisher" placeholder="Publisher name"
                                          value={publisher} onChange={e => handleDetailChange(e, 0)}/>
                        </Form.Group>
                    </Col>
                </Row>

                {inputList && inputList.map((x, index) => {
                    return (
                        <Row key={index}>
                            <Col>
                                <Form.Group className="mb-3" controlId="addCategory">
                                    <Form.Label>Product Option</Form.Label>
                                    <Form.Control type="option" name="option" placeholder="option"
                                                  defaultValue={x.option}
                                                  value={option} onChange={e => handleInputChange(e, index)}/>
                                </Form.Group>
                            </Col>
                            <Col className="btn-box">
                                <Form.Group className="mb-3" controlId="addCategory">
                                    <Form.Label>Product price</Form.Label>
                                    <Form.Control type="price" name="price" placeholder="Product price"
                                                  defaultValue={x.price}
                                                  value={price} onChange={e => handleInputChange(e, index)}/>
                                </Form.Group>
                            </Col>
                            <Col className="mt-4">
                                {inputList.length !== 1 && <Button
                                    className="mr10"
                                    onClick={() => handleRemoveClick(index)}>Remove</Button>}
                                {inputList.length - 1 === index && <Button key={index} onClick={handleAddClick}>Add</Button>}
                            </Col>
                        </Row>


                    )
                        ;
                })}

                <div>
                    <Button type="submit" variant="primary">
                        Update product
                    </Button>
                </div>
            </Form>

        </>
    )

    const showSuccess = () => {
        if (success) return (
            <Navigate to='/admin/product'/>
        )
    }


    return (
        <div>
            {showSuccess()}
            {addForm()}
        </div>
    )
}

export default ProductUpdate;