import React, {useEffect, useState} from "react";

// react-bootstrap components
import {
    Button,
    Card,
    Form,
    Container,
    Row,
    Col, Modal,
} from "react-bootstrap";
import {adminProfile, adminProfileUpdate} from "../Api/userAdmin";
import {addProductss} from "../Api/products";
import {isAuthenticated} from "../utils/auth";

function User() {


    const [remove, setRemove] = useState(false);

    const handleCloseRemove = () => setRemove(false);
    const handleShowRemove = () => setRemove(true);


    const [admin, setAdmin] = useState({
        username: '',
        email: '',
        password: '',
        // image: '',
        phonenumber: ''
    })
    const {username, email, password, phonenumber, image} = admin
    const handleChange = (e, index) => {
        setAdmin({
            ...admin,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        adminProfile()
            .then((res) => {
                let allData = res.data
                setAdmin(allData)
                localStorage.setItem('alldata', JSON.stringify(allData))
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    useEffect(() => {
        const data = localStorage.getItem('alldata')
        if (data) {
            setAdmin(JSON.parse(data))
        }
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        setAdmin({...admin})
        console.log(admin)
        adminProfileUpdate({username, email, password, image, phonenumber })
            .then(response => {
                isAuthenticated(response.data.token, () => {
                    setAdmin({
                        username: '',
                        email: '',
                        password: '',
                        image: '',
                        phonenumber: '',
                        success: true,
                    })
                })
            })
            .catch(err => console.log(err))
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
                                                              onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" name='email' placeholder="Enter Email"
                                                              value={email} onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="phonenumber" name='phonenumber'
                                                              placeholder="Enter Phone Number" value={phonenumber}
                                                              onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control type="file" value={image} name="file"/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password" name='password'
                                                              placeholder="Enter password" value={password}
                                                              onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                        <Col>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <Form.Control type="password" name='password'
                                                              placeholder="Enter password" value={password}
                                                              onChange={handleChange}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <div className="d-flex justify-content-center">
                                        <div>
                                            <Button className="m-4" onClick={handleShowRemove}
                                                    variant="outline-primary">Delete</Button>
                                        </div>
                                        <div>
                                            <Button type="submit" className="m-4"   variant="outline-primary">Update</Button>
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
                                    <p className="description">michael24</p>
                                </div>
                                <p className="description text-center">
                                    "Lamborghini Mercy <br/>
                                    Your chick she so thirsty <br/>
                                    I'm in that two seat Lambo"
                                </p>
                            </Card.Body>
                            <hr/>
                            <div className="button-container mr-auto ml-auto">
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-facebook-square"/>
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-twitter"/>
                                </Button>
                                <Button
                                    className="btn-simple btn-icon"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    variant="link"
                                >
                                    <i className="fab fa-google-plus-square"/>
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
