import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Badge, Card, Col, Form, Row, Fl} from "react-bootstrap";
import {getProducts} from "../../../../Api";
import "./gameinfo.css"
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: whitesmoke;
  font-size: 20px;
  padding: 5px 40px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:disabled {
    color: white;
    background-color: white;
    opacity: 0.7;
    cursor: default;
  }
`;

const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({active}) =>
          active &&
          `
    opacity: 1;
  `}
`;


const GameInfo = () => {

    const [topUp, setTopUP] = useState([])
    const [active, setActive] = useState(topUp[0]);
    const idData = useParams()
    const sid = idData.id

    useEffect(() => {
        getProducts()
            .then((res) => {
                let allData = res.data[sid]
                let topUpData = allData.topUp;
                setTopUP(topUpData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);


    return (
        <>
            <Card className="mb-4">
                <Card.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group  controlId="formGridState">
                                    <Form.Label>Account Type</Form.Label>
                                    {/*<Form.select className="form-select" aria-label="Default select example">*/}
                                    {/*    <option selected>Open this select menu</option>*/}
                                    {/*    <option value="1">One</option>*/}
                                    {/*    <option value="2">Two</option>*/}
                                    {/*    <option value="3">Three</option>*/}
                                    {/*</Form.select>*/}
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Label>Facebook Number</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                            <Col>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Col>
                            <Form.Label>Email</Form.Label>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Form>
                </Card.Body>
            </Card>
            <Card className="mb-4">
                <Card.Body>
                    <Row>
                        {topUp && topUp.map((product, index) => {
                            return (
                                <Col key={index} sm={5} md={6} lg={4} xl={2}>
                                    <ButtonToggle key={product._id}
                                                  active={active === product._id}
                                                  onClick={() => setActive(product._id)}
                                                  variant="outline-primary">{product.option} <Badge
                                        bg="primary">{product.price}</Badge></ButtonToggle>
                                </Col>
                            )
                        })}
                    </Row>
                </Card.Body>
            </Card>
            <Card>
                <Button className="d-flex justify-content-center">Submit</Button>
            </Card>

        </>
    )
}
export default GameInfo