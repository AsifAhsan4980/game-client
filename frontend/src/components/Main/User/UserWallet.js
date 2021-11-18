import React from "react";
import {Card, Container, ListGroup, ListGroupItem, Table} from "react-bootstrap";

const UserWallet = () => {
    return(
        <Container>
            <Card>
                <Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><div>৳ 0</div><div>Available Balance</div></ListGroupItem>
                    </ListGroup>
                    <div className='d-flex  justify-content-around'>
                        <div>
                            <div>
                                0
                            </div>
                            <div>
                                Total Orders
                            </div>
                        </div>
                        <div>
                            <div>
                                0
                            </div>
                            <div>
                                Spend Total
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        </Container>
    )
}
export default UserWallet