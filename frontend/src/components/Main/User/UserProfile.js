import React, {Fragment} from "react";
import {Button, Card, Col, Container, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import {AiOutlineUser} from "react-icons/ai"
import "./userinfo.css"
import {userInfo} from '../../../utils/auth';

const UserProfile = () => {
    const {username,email,phonenumber}=userInfo(); 

    return(
        <Fragment>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={4} >
                        <Card>
                            <Card.Body >
                                <div className='d-inline justify-content-center'>
                                    <AiOutlineUser className="icon_style justify-content-center"/>
                                    <div><h3>{username}</h3></div>
                                    <div>{phonenumber}</div>
                                    <Button variant="outline-primary">৳   0</Button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>User Info</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <div>{username}</div>
                                <div>{email}</div>
                                <div>{phonenumber}</div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default UserProfile