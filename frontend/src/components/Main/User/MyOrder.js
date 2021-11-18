import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { getAllPurchase } from "../../../Api/purchase";
import { userInfo } from '../../../utils/auth';

const MyOrder = () => {
    const [purchase, setPurchase] = useState([]);
    const userDetails = userInfo();

    useEffect(() => {
        getAllPurchase(userDetails.token,userDetails.id)
            .then(response => setPurchase(response.data))
            .catch(console.log('Failed to load!'));
    }, [])

    
    return (
        <Container>
            <div className="d-flex justify-content-center"><h1>My Order</h1></div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Product Name</th>
                        <th>Payment Number</th>
                        <th>Purchased Package</th>
                        <th>Transaction ID</th>
                    </tr>
                </thead>
                <tbody>
                    {purchase && purchase.map((purchase,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{purchase.createdAt}</td>
                            <td>{purchase.productId.gameName}</td>
                            <td>{purchase.Number} ({purchase.accountTye})</td>
                            <td>{purchase.product}</td>
                            <td>{purchase.transactionID} ({purchase.paymentType})</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}
export default MyOrder