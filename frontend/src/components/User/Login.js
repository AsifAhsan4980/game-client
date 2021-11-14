import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {login} from '../../Api/auth'
import {authenticate} from '../../utils/auth';
import {
    AiOutlineGoogle,
    AiFillFacebook,
} from "react-icons/ai";

import google_icon from '../../assets/img/google.png'

import './User.css';
import {Form} from "react-bootstrap";


const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        success: false
    });

    const {email, password, success} = values;

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values})
        login({email, password})
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
                <div data-v-791b20d9>
                    <section class="flex flex-col md:flex-row items-center md:justify-center py-10 md:py-6" data-v-791b20d9>
                        <div class="bg-white w-full md:w-[450px] px-6 lg:px-8 flex items-start py-12 justify-center relative flex-shrink">
                            <div class="w-full h-full">
                                <h1 class="text-xl md:text-2xl font-bold leading-tight">
                                    Log in to your account
                                </h1>
                                <Form onSubmit={handleSubmit} method="post" class="mt-6">
                                    <div><label class="block text-gray-700">Email Address</label>
                                        <input type="email" name="email" className="form-control" placeholder="Enter Email" value={email} required onChange={handleChange} autofocus="autofocus"
                                        autoComplete={true}
                                        class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary-500 focus:bg-white focus:outline-none"/>
                                    </div>

                                    <div class="mt-4"><label class="block text-gray-700">Password</label> <input
                                        type="password" name="password" className="form-control" value={password} required onChange={handleChange} placeholder="Enter Password" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-primary-500
            focus:bg-white focus:outline-none"/></div>

                                    <div class="text-right mt-2"><a href="forgot-password.html"
                                                                    class="text-sm font-semibold text-gray-700 hover:text-primary-700 focus:text-primary-700">Forgot
                                        Password?</a></div>
                                    <button onSubmit={handleSubmit} type="submit" class="w-full block bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6">
                                        Log In
                                    </button>
                                    <div className="flex-c-m">
                                        <a href="#" className="login100-social-item bg1">
                                            <AiFillFacebook/>
                                        </a>
                                        <a href="#" className="login100-social-item bg3">
                                            <AiOutlineGoogle/>
                                        </a>
                                    </div>
                                </Form>
                                <hr class="my-6 border-gray-300 w-full"/>

                                    <p class="mt-5 text-center">
                                        Need an account?
                                        <a href="register.html"
                                           class="text-primary-500 hover:text-primary-700 font-semibold">Create an
                                            account</a>
                                    </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
);

const showSuccess = () =>
    {
        if (success) return (
            <Redirect to='/admin'/>
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