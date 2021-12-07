import React, { useState, useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { addBanners } from "../../../Api/utility";
import { userInfo } from '../../../utils/auth';

const AddBanner = () => {
    const [addBanner, setAddBanner] = useState({
        firstTitle: '',
        secondTitle: '',
        formData: '',
        success: false
    });

    const { firstTitle, secondTitle, formData } = addBanner

    useEffect(() => {
        setAddBanner({
            ...addBanner,
            formData: new FormData()
        })
    }, [])

    const handleChange = (e, index) => {
        const value = e.target.name === 'image' ? e.target.files[0] : e.target.value;
        formData.set(e.target.name, value);
        setAddBanner({
            ...addBanner,
            [e.target.name]: value,
        })
    }


    const handleSubmit = e => {
        e.preventDefault();
        setAddBanner({
            ...addBanner
        })
        const { token } = userInfo();
        addBanners(token, formData)
            .then(response => {
                setAddBanner({
                    firstTitle: '',
                    secondTitle: '',
                    success: true,
                })
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Default file input example</Form.Label>
                            <Form.Control type="file" name="image" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>First Title</Form.Label>
                            <Form.Control placeholder="firstTitle" type="firstTitle" name="firstTitle"
                                value={firstTitle} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Second Title</Form.Label>
                            <Form.Control placeholder="Second Title" type="secondTitle" name="secondTitle"
                                value={secondTitle} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}

export default AddBanner