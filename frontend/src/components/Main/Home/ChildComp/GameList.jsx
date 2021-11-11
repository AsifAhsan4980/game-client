import React from "react";


import {
    AiOutlineLike,
    AiOutlineShareAlt,
} from "react-icons/ai";
import {Card, Row, Col, Button} from "react-bootstrap";


const GameList = ({data}) => {
    return (
        <Card sm={6} md={6} lg={4} xl={3} style={{width: "auto"}} key={data.id}>
            <Card.Img
                variant="top"
                className="cart_image"
                src={data.images}
            />
            <Card.Body>
                <Card.Title className="text-dark bg-white text-center">
                    {data.gameName} {data.categoryName}
                </Card.Title>
            </Card.Body>
        </Card>
    );
};

export default GameList;