import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../../Api/auth'
import { authenticate } from '../../utils/auth';
import {
    AiOutlineGoogle,
    AiFillFacebook,
} from "react-icons/ai";

import './User.css';
import './reg.css';
import { Form } from "react-bootstrap";


const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        success: false
    });

    const { email, password, success } = values;

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values })
        login({ email, password })
            .then(response => {
                authenticate(response.data.token, () => {
                    setValues({
                        email: '',
                        password: '',
                        success: true,
                    })
                })
            })
            .catch(err => console.log(err))
    }

    const LoginForm = () => (
        <>
            {/*<div className="limiter" >*/}
            {/*    <div className="container-login100">*/}
            {/*        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">*/}
            {/*            <div className="login100-form validate-form">*/}
            {/*		<span className="login100-form-title p-b-49">*/}
            {/*			Login*/}
            {/*		</span>*/}
            {/*                <Form onSubmit={handleSubmit}>*/}
            {/*                    <Form.Label>Email address</Form.Label>*/}
            {/*                    <Form.Control type="email" name="email" className="form-control" value={email} required onChange={handleChange}/>*/}
            {/*                    <Form.Text className="text-muted">*/}
            {/*                        We'll never share your email with anyone else.*/}
            {/*                    </Form.Text>*/}

            {/*                    <Form.Group className="mb-3" controlId="formBasicPassword">*/}
            {/*                        <Form.Label>Password</Form.Label>*/}
            {/*                        <Form.Control type="password" name="password" className="form-control" value={password} required onChange={handleChange}/>*/}
            {/*                    </Form.Group>*/}

            {/*                    <div className="text-center p-t-8 p-b-31">*/}
            {/*                        <Link to="/">*/}
            {/*                            Forgot password?*/}
            {/*                        </Link>*/}
            {/*                    </div>*/}

            {/*                    <div className="container-login100-form-btn">*/}
            {/*                        <div className="wrap-login100-form-btn">*/}
            {/*                            <div className="login100-form-bgbtn"/>*/}
            {/*                            <button type="submit" className="login100-form-btn">*/}
            {/*                                Login*/}
            {/*                            </button>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </Form>*/}
            {/*                <div className="txt1 text-center p-t-54 p-b-20">*/}
            {/*			<span>*/}
            {/*				Or Sign Up Using*/}
            {/*			</span>*/}
            {/*                </div>*/}

            {/*                <div className="flex-c-m">*/}
            {/*                    <a href="#" className="login100-social-item bg1">*/}
            {/*                        <AiFillFacebook/>*/}
            {/*                    </a>*/}
            {/*                    <a href="#" className="login100-social-item bg3">*/}
            {/*                        <AiOutlineGoogle/>*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="flex-col-c p-t-15">*/}
            {/*			<span className="txt1 p-b-17">*/}
            {/*				Do not have an Account?*/}
            {/*			</span>*/}
            {/*                    <Link to="/registration">Sign Up</Link>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div class="mx-auto" data-v-791b20d9>
                <Form onSubmit={handleSubmit}>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" className="form-control" value={email} required onChange={handleChange} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" className="form-control" value={password} required onChange={handleChange} />
                    </Form.Group>

                    <div className="text-center p-t-8 p-b-31">
                        <Link to="/">
                            Forgot password?
                        </Link>
                    </div>

                    <div className="container-login100-form-btn">
                        <div className="wrap-login100-form-btn">
                            <div className="login100-form-bgbtn" />
                            <button type="submit" className="login100-form-btn">
                                Login
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </>
    );

    const showSuccess = () => {
        if (success) return (
            <Redirect to='/admin' />
        )
    }

    return (
        <div>
            {showSuccess()}
            {LoginForm()}
        </div>
    );
}

export default Login;