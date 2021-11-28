import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

const NotificationModal = (props) => {
    return (
        <>
            <Modal show={props.show} >
                <Modal.Body>
                    <div className='text-center'>{props.msg}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.isWallet === false ? props.createNewWallet : props.addBalance}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default NotificationModal;