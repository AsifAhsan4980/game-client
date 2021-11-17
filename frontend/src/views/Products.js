import React, {useEffect, useState} from "react";
import {getProducts} from "../Api";
import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import ProductList from "./ProductList";
import ProductAdd from "../components/product/ProductAdd";
import "./product.css"

const Products = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [product, setProduct] = useState([])
    useEffect(() => {
        getProducts()
            .then((res) => {
                let allData = res.data
                setProduct(allData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    console.log('product',product)
    return (
        <>
            <Button variant="primary" className="mb-4" onClick={handleShow}>
                Add Products
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><ProductAdd/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Card>
                <Card.Body>
                    <Card.Title className="text-center">Product List</Card.Title>
                    <Row>
                        {product.map((product, index) => {
                            return (
                                    <Col key={index}
                                         lg="12" sm="12"
                                         className=" text-decoration-none">
                                        <div to={`category/${index}/${product.gameName}`}><ProductList key={index} data={product}/>
                                        </div>
                                    </Col>
                            );
                        })}
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
export default Products;