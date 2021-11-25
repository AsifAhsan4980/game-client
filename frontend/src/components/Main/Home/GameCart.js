import React, {useEffect, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import GameList from "./ChildComp/GameList";
import {Link} from "react-router-dom"
import {getProducts} from "../../../Api";


const GameCart = () => {
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

    return (
        <>
            <Row className="mt-4">
                {product.map((product, index) => {
                    return (
                        <Col key={product._id} sm={6} md={4} lg={2} xl={2} className="mb-4 text-decoration-none">
                            <Link to={`category/${index}/${product.gameName}/${product._id}`}><GameList data={product}/></Link>
                        </Col>
                    );
                })}
            </Row>
        </>
    )
}
export default GameCart