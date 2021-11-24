import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Img1 from "../../../assets/images/cover/CALL_OF_DUTY_BLACK_OPS_2_facebook_cover_1339098052.jpg"
import Img2 from "../../../assets/images/cover/Devil_May_Cry_facebook_cover_1346751753.jpg"
import Img3 from "../../../assets/images/cover/Ridge_Racer_3D_facebook_cover_1344793520.jpg"
import { findAllBanner } from '../../../Api/utility';
import { userInfo } from '../../../utils/auth';

const Carousol = () => {
    const [index, setIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    const userDetails = userInfo();
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        findAllBanner(userDetails.token)
            .then(response => setBanners(response.data))
    }, [])

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {banners && banners.map(banner => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`http://localhost:3001/${banner.image}`}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{banner.firstTitle}</h3>
                        <p>{banner.secondTitle}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}

        </Carousel>
    );
}
export default Carousol