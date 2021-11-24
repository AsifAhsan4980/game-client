import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Modal,
} from "react-bootstrap";
import { getOneUser } from "../Api/user";
import { adminProfileUpdate } from "../Api/userAdmin";
import { userInfo } from '../utils/auth';

function User() {
    const [remove, setRemove] = useState(false);
    const handleCloseRemove = () => setRemove(false);
    const handleShowRemove = () => setRemove(true);
    const { token, id } = userInfo();

    const [admin, setAdmin] = useState({
        username: '',
        email: '',
        password: '',
        phonenumber: '',
        formData: '',
    })

    const { username, email, password, phonenumber, formData } = admin

    useEffect(() => {
        getOneUser(token, id)
            .then(response => setAdmin(response.data))
            .then(response=>setAdmin({formData: new FormData()}))
    }, []);

    useEffect(() => {
        setAdmin({
            ...admin,
            formData: new FormData()
        })
    }, [])

    const handleChange = (e) => {
        const value = e.target.name === 'image' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value);
        setAdmin({
            ...admin,
            [e.target.name]: value,
        })
        
    }

    const handleSubmit = e => {
        e.preventDefault();
        adminProfileUpdate(token, id, formData)
    }

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="8">
                        <Form onSubmit={handleSubmit}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control type="username" name='username'
                                                    placeholder="Enter Full Name" value={username}
                                                    onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" name='email' placeholder="Enter Email"
                                                    value={email} onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="phonenumber" name='phonenumber'
                                                    placeholder="Enter Phone Number" value={phonenumber}
                                                    onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control type="file" name="image" onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='password'
                                                    placeholder="Enter password" value={password}
                                                    onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" name='password'
                                                    placeholder="Enter password" value={password}
                                                    onChange={handleChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <Button className="m-4" onClick={handleShowRemove}
                                                variant="outline-primary">Delete</Button>
                                        </div>
                                        <div>
                                            <Button type="submit" className="m-4" variant="outline-primary">Update</Button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>

                        </Form>
                    </Col>
                    <Col md="4">
                        <Card className="card-user">
                            <div className="card-image">
                                <img
                                    alt="..."
                                    src={
                                        require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                                            .default
                                    }
                                />
                            </div>
                            <Card.Body>
                                <div className="author">
                                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                        <img
                                            alt="..."
                                            className="avatar border-gray"
                                            src={require("assets/img/faces/face-3.jpg").default}
                                        />
                                        {/*<h5 className="title">{admin.username}</h5>*/}
                                    </a>
                                    <p className="description">Hi {username}</p>
                                </div>
                            </Card.Body>
                            <hr />
                            <div className="button-container mr-auto ml-auto">
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-facebook-square" />
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-twitter" />
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-google-plus-square" />
                                </Button>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Modal show={remove} onHide={handleCloseRemove}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Delete this Account?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseRemove}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleCloseRemove}>
                        Yes Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default User;