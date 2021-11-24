import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { findAllBanner } from '../../../Api/utility';


const Carousol = () => {
    const [index, setIndex] = useState(0);
    const [banners, setBanners] = useState([]);
    
    
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        findAllBanner()
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