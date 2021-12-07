import React, {Fragment, useState} from "react";
import {
    AiOutlineDelete,
    AiOutlineEdit, AiOutlineUpload,
} from "react-icons/ai";
import {Card, Row, Col, Button, Form, Modal} from "react-bootstrap";
import ProductUpdate from "../components/product/ProductUpdate";
import {addProductss, deleteOneProducts} from "../Api/products";
import {isAuthenticated} from "../utils/auth";
import {deleteUser} from "../Api/user";
import {showSuccess} from "../utils/message";

const ProductList = ({data}) => {

    const id = data._id
    const [update, setUpdate] = useState(false);
    const [remove, setRemove] = useState(false);
    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const handleClose = () => setUpdate(false);
    const handleShow = () => setUpdate(true);

    const handleSubmit = () => {
        deleteOneProducts(id)
            .then((response) => {
                setSuccess(true),
                    setMessage('User Delete Successfully')
            })

    }
    const handleCloseDelete = () => {
        setRemove(false)
    }
    const handleShowDelete = () => setRemove(true);


    function updateProduct(e) {
        handleShow(id)
    }

    return (
        <Fragment>
            {showSuccess(success, message)}
            <Row>
                <Col sm={12} md={6} lg={4} xl={3}>
                    <Card>
                        <Card.Img
                            variant="top"
                            className="cart_image"
                            //src={data.images}
                            src={`http://localhost:3001/${data.images}`}
                        />
                        <Card.Body>
                            <Card.Title className="text-dark bg-white text-center">
                                {data.gameName} {data.categoryName}
                            </Card.Title>
                            <Row className='mt-4'>
                                <Col className="text-center text-lg">
                                    <Button variant="light">
                                        <AiOutlineEdit onClick={e => updateProduct(e)} size={24}/>
                                    </Button>
                                </Col>
                                <Col className="text-center">
                                    <Button variant="light">
                                        <AiOutlineDelete onClick={e => handleShowDelete(e)} size={24}/>
                                    </Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={8} xl={9}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    Game Name
                                    <Card>
                                        <Card.Body>
                                            {data.gameName}
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    Category Name
                                    <Card>
                                        <Card.Body>
                                            {data.categoryName}
                                        </Card.Body>
                                    </Card>
                                </Col>
                                Image
                                <Col>
                                    <Card>
                                        <Card.Body>
                                            {data.image}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    Region
                                    <Card>
                                        <Card.Body>
                                            {data.details[0].region}
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    Platform
                                    <Card>
                                        <Card.Body>
                                            {data.details[0].platform}
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    Publisher
                                    <Card>
                                        <Card.Body>
                                            {data.details[0].publisher}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>

                                {data.topUp.map((product, index) => {
                                    return (
                                        <Col key={index}>
                                            <Card>
                                                <Card.Body className="d-flex justify-content-between">
                                                    <div>{product.option}</div>
                                                    <div>{product.price}</div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Row>
                            <Form>
                                <Modal size="lg" show={update} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Update Product</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body><ProductUpdate id={id}/></Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary"  onClick={handleClose}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Form>

                            <Modal  show={remove} onHide={handleCloseDelete}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Delete Item</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <div className="d-flex justify-content-around">
                                            <Form.Label>Do you want to delete this item?    </Form.Label>
                                            <Button  type="submit" variant="primary">
                                                Yes Delete
                                            </Button>
                                        </div>

                                    </Form>
                                        </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleCloseDelete}>
                                        No
                                    </Button>
                                    <Button onSubmit={handleSubmit} type="submit" variant="primary"
                                           >
                                        Done
                                    </Button>
                                </Modal.Footer>
                            </Modal>


                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
};

export default ProductList