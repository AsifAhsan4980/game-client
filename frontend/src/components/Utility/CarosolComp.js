import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import AddBanner from "./Child/Add Banner";

const CarouselComp = () => {

    const [lgShow, setLgShow] = useState(false);


    return (
        <>
            <Button onClick={() => setLgShow(true)}>Large modal</Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                                <AddBanner/>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
            </Modal>
        </>
    )
}


export default CarouselComp