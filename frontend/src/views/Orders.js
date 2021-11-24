import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Table } from "react-bootstrap";
import { getAllPurchase } from "../Api/purchase";
import { userInfo } from '../utils/auth';


const Orders = () => {
    const [purchase, setPurchase] = useState([]);
    const userDetails = userInfo();

    useEffect(() => {
        getAllPurchase(userDetails.token)
            .then(response => setPurchase(response.data))
            .catch(console.log('Failed to load!'));
    }, [])

    return (
        <>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <Card.Title as="h4">Active Orders</Card.Title>
                                <p className="card-category">
                                    Due Orders
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">#</th>
                                            <th className="border-0">Date</th>
                                            <th className="border-0">Product Name</th>
                                            <th className="border-0">Payment Number</th>
                                            <th className="border-0">Purchased Package</th>
                                            <th className="border-0">Transaction ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {purchase && purchase.map((purchase, index) => {
                                            if (purchase.isComplete === false) {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{purchase.createdAt}</td>
                                                        <td>{purchase.productId}</td>
                                                        <td>{purchase.Number} ({purchase.accountTye})</td>
                                                        <td>{purchase.product}</td>
                                                        <td>{purchase.transactionID} ({purchase.paymentType})</td>
                                                    </tr>
                                                )
                                            }
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="12">
                        <Card className="card-plain table-plain-bg">
                            <Card.Header>
                                <Card.Title as="h4">Completed Orders</Card.Title>
                                <p className="card-category">
                                    Completed Orders
                                </p>
                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover">
                                    <thead>
                                        <tr>
                                            <th className="border-0">#</th>
                                            <th className="border-0">Date</th>
                                            <th className="border-0">Product Name</th>
                                            <th className="border-0">Payment Number</th>
                                            <th className="border-0">Purchased Package</th>
                                            <th className="border-0">Transaction ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {purchase && purchase.map((purchase, index) => {
                                            if (purchase.isComplete === true) {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{purchase.createdAt}</td>
                                                        <td>{purchase.productId}</td>
                                                        <td>{purchase.Number} ({purchase.accountTye})</td>
                                                        <td>{purchase.product}</td>
                                                        <td>{purchase.transactionID} ({purchase.paymentType})</td>
                                                    </tr>
                                                )
                                            }
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Orders