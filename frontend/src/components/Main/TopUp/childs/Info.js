import React, { useEffect, useState } from "react";
import { Link, useParams, Redirect } from "react-router-dom";
import { Badge, Card, Col, Form, Row, Fl, Modal } from "react-bootstrap";
import { getProducts } from "../../../../Api";
import "./gameinfo.css"
import styled from 'styled-components';
import Confirmation from '../../../../components/Main/Confirmation/Confirm';
import { isAuthenticated } from '../../../../utils/auth';
import { getOneUser } from '../../../../Api/user';
import { userInfo } from '../../../../utils/auth';
import NotificationModal from './NotificationModal';
import { createWallet, updateUserWallet, getWalletById } from '../../../../Api/wallet';

const Button = styled.button`
  background-color: #001651;
  color: whitesmoke;
  font-size: 15px;
  padding: 5px 40px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;

  &:disabled {
    color: #001651;
    background-color: white;
    opacity: 1;
    cursor: default;
  }
`;

const ButtonToggle = styled(Button)`
  color: #001651;
  background-color: white;
  border: 1px solid #001d5f;
  ${({ active }) =>
        active &&
        `
    color: white;
    background-color: #001651;
    
  `}
`;


const account = [
    {
        type: "Facebook"
    },
    {
        type: "Google"
    }
]


const GameInfo = (props) => {
    const [accountSelect, setAccountType] = useState({
        accountType: ''
    }
    )
    const [user, setUser] = useState({})
    const [topUp, setTopUP] = useState([])
    const [active, setActive] = useState(topUp[0]);
    const idData = useParams()
    const sid = idData.id
    const productId = idData.productId
    const { accountName } = account
    const [show, setShow] = useState(false);
    const [msg, setMsg] = useState('');
    const [isWallet, setIsWallet] = useState(false);
    const [walletId, setWalletId] = useState('');
    const [balance, setBalance] = useState({});
    const [recharge, setRecharge] = useState(0);

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true);

    const [values, setValues] = useState({
        productId: productId,
        accountType: '',
        Number: '',
        Password: '',
        backupCode: '',
        product: {},
    });

    const { accountType, Number, Password, backupCode, product } = values;

    function handleOption(e) {
        setAccountType({
            ...accountSelect,
            [e.target.name]: e.target.value,
        })
        console.log(accountSelect)
    }


    function func2(option, price) {
        setValues({
            ...values,
            product: {
                [option]: price
            },
        })
    }

    function createNewWallet() {
        const { token, id } = userInfo();
        createWallet(id)
            .then(response => updateUserWallet(token, id, response.data.wallet._id))
            .then(response => setIsWallet(true))
            .then(response => setMsg('Do You want to recharge your wallet?'))
    }

    function addBalance() {
        window.location = "http://localhost:3000/confirmation";
    }

    useEffect(() => {
        getProducts()
            .then((res) => {
                let allData = res.data[sid]
                let topUpData = allData.topUp;
                setTopUP(topUpData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);

    useEffect(() => {
        if (isAuthenticated()) {
            const { token, id } = userInfo();
            getOneUser(token, id)
                .then(response => { setUser(response.data), setWalletId(response.data.wallet) })
                .catch((err) => {
                    console.log(err.response);
                });
        }

    }, [user]);

    useEffect(() => {
        if (isAuthenticated()) {
            const { token } = userInfo();
            getWalletById(token, walletId)
                .then(response => setBalance(response.data))
                .catch((err) => {
                    console.log(err.response);
                });
        }
    }, [walletId]);

    useEffect(() => {
        localStorage.removeItem('values');
    }, []);

    useEffect(() => {
        getProducts()
            .then((res) => {
                let allData = res.data[sid]
                let topUpData = allData.topUp;
                setTopUP(topUpData)
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, []);


    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        if (!isAuthenticated()) {
            window.location = "http://localhost:3000/login";
        }

        if (user && user.wallet === null) {
            handleShow()
            setMsg('Do You want to create your wallet?')
        }
        let amount = 0
        for (let x in product) {
            amount = product[x]
        }

        if (user && user.wallet != null) {
            if (balance.totalAmount < amount) {
                const due = amount - balance.totalAmount
                setIsWallet(true)
                setMsg(`You Need  BDT ${due} to purchase the product. Do you want to recharge?`)
                handleShow()
            }
        }


        localStorage.setItem('values', JSON.stringify(values))
        //createNewPurchase(token, values)
        //.then(response=>console.log('Response',response.data.purchase._id))

    }

    return (

        <>
            <NotificationModal show={show} msg={msg} handleClose={handleClose} createNewWallet={createNewWallet} addBalance={addBalance} isWallet={isWallet} />
            <div as={Form}>
                <Card className="mb-4">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Form.Label>Account Type</Form.Label>
                                <Form.Control as="select" aria-label="Default select example" defaultValue="State..."
                                    value={accountType} name="accountType" onChange={handleChange}>
                                    <option>Select your account type</option>
                                    {
                                        account.map((data, index) => {
                                            return (
                                                <option key={index}>{data.type}</option>
                                            )
                                        }
                                        )
                                    }
                                </Form.Control>

                            </Col>
                            <Col>
                                <Form.Label>{accountSelect.accountName} Number</Form.Label>
                                <Form.Control placeholder="Last name" name="Number" value={Number} onChange={handleChange} />
                            </Col>
                            <Col>
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Last name" name="Password" value={Password} onChange={handleChange} />
                            </Col>
                        </Row>

                        <Form.Label>Backup Code</Form.Label>
                        <Form.Control placeholder="Last name" name="backupCode" value={backupCode} onChange={handleChange} />

                    </Card.Body>
                </Card>
                <Card className="mb-4">
                    <Card.Body>
                        <Form.Label>Select Recharge</Form.Label>
                        <Row>
                            {topUp && topUp.map((product, index) => {
                                return (
                                    <Col key={index} sm={5} md={6} lg={4} xl={2}>
                                        <ButtonToggle key={product._id}
                                            active={active === product._id}
                                            onClick={function (event) { setActive(product._id); func2(product.option, product.price) }}
                                            variant="outline-primary">{product.option} <Badge
                                                bg="primary">{product.price}</Badge></ButtonToggle>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Form.Label>Select Wallet</Form.Label>
                        <div className="d-flex justify-content-center">
                            <Card>
                                <Card.Body>
                                    CiziShop Wallet
                                </Card.Body>
                            </Card>
                        </div>
                    </Card.Body>
                </Card>
                <div className='d-flex justify-content-lg-end'>
                    <Button data={values} className="d-flex justify-content-center" onClick={handleSubmit}>Submit</Button>
                </div>
            </div>
        </>
    )
}
export default GameInfo