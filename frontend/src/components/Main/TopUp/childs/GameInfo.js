import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, Col, Row} from "react-bootstrap";
import {getProducts} from "../../../../Api";
import "./gameinfo.css"

const GameProdInfo = () => {
    const heardData = useParams()
    const sid = heardData.id

    const [product, setProduct] = useState([])
    const [productDetails, setProductDetails] = useState([])


    useEffect(() => {
        getProducts()
            .then((res) => {
                let allData = res.data[sid];
                let detailsData = allData.details[0]
                setProduct(allData);
                setProductDetails(detailsData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);


    return (
        <>
            <Row>
                <Col sm={6} md={4} xl={4} className="image_prop">
                    <Card className='text-center' style={{width: '65%', backgroundColor: ""}}>
                        <Card.Img src={product.images}/>
                    </Card>
                </Col>
                <Col sm={6} md={8} lg={8} xl={8} className="info_prop justify-content-center">
                    <div className="info_prop">
                        <div>
                            Name: {product.gameName} {product.categoryName}
                        </div>
                        <div>
                            Region :
                            {productDetails.region}
                        </div>
                        <div>
                            Platform :
                            {productDetails.platform}
                        </div>
                        <div>
                            Publisher :
                            {productDetails.publisher}
                        </div>
                    </div>
                </Col>
            </Row>

        </>
    )
}
export default GameProdInfo