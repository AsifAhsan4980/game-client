import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { addProductss, addProductImage, getOneProducts } from "../../Api/products";


const ProductAdd = () => {
    const [inputList, setInputList] = useState([{
        option: "",
        price: ""
    }]);

    const [detailsList, setDetailsList] = useState([{
        region: '',
        platform: '',
        publisher: '',
    }]);

    const [addProduct, setAddProduct] = useState({
        gameName: '',
        categoryName: '',
        image: '',
        details: [],
        topUp: [],
        formData: '',
    });


    const { region, platform, publisher } = detailsList;
    const { option, price } = inputList;

    const { gameName, categoryName, image, success, details, topUp, formData } = addProduct;

    useEffect(() => {
        setAddProduct({
            ...addProduct,
            formData: new FormData()
        })
    }, [])

    const handleDetailChange = (e, index) => {
        const { name, value } = e.target
        const list = [...detailsList];
        list[index][name] = value;
        setDetailsList(list)
        setAddProduct({
            ...addProduct,
            details: detailsList
        })
    }
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
        setAddProduct({
            ...addProduct,
            topUp: inputList
        })
    };

    const handleChange = (e, index) => {
        const value = e.target.name === 'image' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value);
        setAddProduct({
            ...addProduct,
            [e.target.name]: value,
        })
    }


    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { option: "", price: "" }]);
    };


    const handleSubmit = e => {
        e.preventDefault();
        console.log('addProduct', addProduct)
        addProductImage(formData)
            .then(response => {
                setAddProduct({
                    gameName: '',
                    categoryName: '',
                    image: '',
                })
                addProductss(response.data._id, addProduct)
                    .then(response => {
                        setAddProduct({
                            ...addProduct,
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
                                required={true} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="addCategory">
                            <Form.Label>Add Category</Form.Label>
                            <Form.Control type="category" name="categoryName" placeholder="Category name"
                                value={categoryName} onChange={handleChange} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" name="image" onChange={handleChange} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="addGame">
                            <Form.Label>Region</Form.Label>
                            <Form.Control type="region" name="region" placeholder="Region name" value={region}
                                required={true} onChange={e => handleDetailChange(e, 0)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="addCategory">
                            <Form.Label>PlatForm</Form.Label>
                            <Form.Control type="platform" name="platform" placeholder="Platform name"
                                value={platform} onChange={e => handleDetailChange(e, 0)} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="addCategory">
                            <Form.Label>Publisher</Form.Label>
                            <Form.Control type="publisher" name="publisher" placeholder="Publisher name"
                                value={publisher} onChange={e => handleDetailChange(e, 0)} />
                        </Form.Group>
                    </Col>
                </Row>

                {inputList.map((x, i) => {
                    return (
                        <Row key={i}>
                            <Col>
                                <Form.Group className="mb-3" controlId="addCategory">
                                    <Form.Label>Product Option</Form.Label>
                                    <Form.Control type="option" name="option" placeholder="option"
                                        value={option} onChange={e => handleInputChange(e, i)} />
                                </Form.Group>
                            </Col>
                            <Col className="btn-box">
                                <Form.Group className="mb-3" controlId="addCategory">
                                    <Form.Label>Product price</Form.Label>
                                    <Form.Control type="price" name="price" placeholder="Product price"
                                        value={price} onChange={e => handleInputChange(e, i)} />
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
                        ;
                })}

                <div>
                    <Button type="submit" variant="primary">
                        Add new product
                    </Button>
                </div>
            </Form>

        </>
    )

    const showSuccess = () => {
        if (success) return (
            <Navigate to='/admin/product' />
        )
    }


    return (
        <div>
            {showSuccess()}
            {addForm()}
        </div>
    )
}

export default ProductAdd;