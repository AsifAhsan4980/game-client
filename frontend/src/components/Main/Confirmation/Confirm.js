import React, { Fragment, useState, useEffect } from "react";
import { Badge, Card, Container, Form } from "react-bootstrap";
import Img1 from "../../../assets/img/payment/selften-1634563869023.png"
import Img2 from "../../../assets/img/payment/selften-1634563895624.jpg"
import Img3 from "../../../assets/img/payment/selften-1634563918489.jpg"
import Img4 from "../../../assets/img/payment/selften-1634563933493.jpg"
import styled from "styled-components";
import { addWallet } from '../../../Api/addWallet';
import { userInfo } from '../../../utils/auth';
import { getOneUser } from '../../../Api/user';
import { createNewPurchase } from '../../../Api/purchase';

const paymentMethod = [

    {
        "id": 1,
        "paymentType": "Bkash",
        "photos": Img1,
        "number": "01234567890",
    },
    {
        "id": 2,
        "paymentType": "Nogod",
        "photos": Img2
    },
    {
        "id": 3,
        "paymentType": "Rocket",
        "photos": Img3
    },
    {
        "id": 4,
        "paymentType": "Upay",
        "photos": Img4
    }
]

const moneySendWay = [
    {
        "how": "টাকা যোগ করবেন কীভাবে?",
        "condition": "(যেকোন পার্সোনাল বিকাশ একাউন্ট হতে হবে)",
        "Step1": [
            {
                "point": "প্রথমে উপরে দেওয়া নাম্বার কপি করুণ।"
            },
            {
                "point": "(bKash,Nagad,Rocket) App অথাবা Ussd কোডের মধ্যেমে"
            },
            {
                "point": "সেন্ড মানি অপশন সিলেক্ট করুণ।"
            },
            {
                "point": "BD GAMES BAZAR WALLET নাম্বার (_) প্রবেশ করুণ।"
            },
            {
                "point": "এম্যাউন্ট অর্থাৎ কত টাকা যোগ করবেন তার পরিমাণ প্রবেশ করুণ।"
            },
            {
                "point": "রেফারেন্সে আপনার সেলফটেন ইউজার আইডি প্রবেশ করুণ।"
            },
            {
                "point": "আপনার বিকাশ পিন নাম্বার প্রবেশ করুণ।"
            },
        ],
        "Step2": [
            {
                "point": "পনিচে যে দুটি বক্স দেখতে পারছেন প্রথম Box এ কত টাকা পাঠিয়েছেন সেটা লিখুন।"
            },
            {
                "point": "দ্বিতীয় বক্সে আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই নাম্বারটি লিখুন।"
            },
            {
                "point": "তারপর Submit অপশনে ক্লিক করুণ।"
            },
            {
                "point": "পাঁচ থেকে দশ মিনিটের মধ্যে টাকা যোগ হয়ে যাবে আপনার সেলফটেন ওয়ালেটে।"
            },
            {
                "point": "এম্যাউন্ট অর্থাৎ কত টাকা যোগ করবেন তার পরিমাণ প্রবেশ করুণ।"
            },
            {
                "point": "অবশ্যই টাকা Send Money করার পর এই কাজটি করবেন।"
            },
        ]
    }
]



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



const Confirm = () => {

    const [user, setUser] = useState({})

    const [values, setValues] = useState({
        walletId: '',
        paymentType: '',
        transactionID: '',
        mobileNumber: '',
        amount: '',
    });

    const { paymentType, transactionID, mobileNumber, amount } = values;


    useEffect(() => {
        getOneUser(token, id)
            .then(response => setUser(response.data))
            .catch((err) => {
                console.log(err.response);
            });
    }, [values]);


    useEffect(() => {
        const data = localStorage.getItem('values')
        console.log(data)
    }, []);

    const [confirmation, setConfirmation] = useState({

    });

    const [active, setActive] = useState({

    });
    const [payMethod, setPayMethod] = useState({
        payMethod: ''
    })

    const { methodName } = payMethod
    const { token, id } = userInfo();

    function func2(paymentType) {
        setValues({
            ...values,
            paymentType: paymentType
        })
    }

    function handleClick(e) {
        setActive({
            ...payMethod,
            [e.target.name]: e.target.value,

        })
        console.log(payMethod)
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            walletId: user.wallet,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('values', values)
        addWallet(token, values)
            .then(response => {
                const data = JSON.parse(localStorage.getItem('values'))
                console.log('amount', values.amount)
                if (data) {
                    let amount = 0
                    for (let x in data.product) {
                        amount = data.product[x]
                    }
                    if (values.amount >= amount) {
                        createNewPurchase(token, data)
                    }
                }
            })
    }

    return (
        <>
            <Container>
                <div className="d-flex justify-content-center">
                    {paymentMethod.map((data, index) => {
                        return (
                            <Fragment key={index}>
                                <ButtonToggle
                                    active={active === data.id}
                                    onClick={() => setActive(data.id)}
                                    onClick={function (event) { setActive(data.id); func2(data.paymentType) }}
                                    variant="outline-primary" name="paymentType" value={paymentType}><img src={data.photos} alt={data.paymentType} /> <div
                                        bg="primary" name="paymentType" value={paymentType} >{data.paymentType}</div></ButtonToggle>
                            </Fragment>
                        )
                    })}
                </div>
                <div>
                    {moneySendWay.map((data, index) => {
                        return (
                            <Fragment key={index}>
                                <div>{ }</div>
                                <div>{data.how}</div>
                            </Fragment>
                        )

                    })}
                </div>
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="amount" name="amount" value={amount} placeholder="Enter Amount" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Sender Number</Form.Label>
                            <Form.Control type="seders_number" name="mobileNumber" value={mobileNumber} placeholder="Sender Number" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Transaction Number</Form.Label>
                            <Form.Control type="transactionNumber" name="transactionID" value={transactionID} placeholder="Transaction Number" onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Confirm