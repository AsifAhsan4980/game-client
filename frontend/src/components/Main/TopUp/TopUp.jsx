import React from "react";
import {Card, Container} from "react-bootstrap";
import Img1 from "../../../assets/images/cover/3930.jpg"
import GameInfo from "./childs/GameInfo";
import Info from "./childs/Info"
import "./childs/gameinfo.css"


const TopUpComp = () => {
    return (
        <><Container style={{fontWeight: "bold"}} >
            <div className="imageGone" >
                <Card className="bg-dark text-white mt-4 mb-4">
                    <Card.Img src={Img1} alt="Card image"/>
                    <Card.ImgOverlay>
                        <GameInfo/>
                    </Card.ImgOverlay>
                </Card>
            </div>
            <div className="backCard m-4 text-black">
                <GameInfo/>
            </div>
            <Info/>
        </Container></>
    )
}

export default TopUpComp