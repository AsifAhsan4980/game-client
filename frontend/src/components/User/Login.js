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
import './util.css'
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
            {/*<div className='form-body'>*/}
            {/*    <div style={{*/}
            {/*        border: "1px solid rgb(219, 216, 216)",*/}
            {/*        textAlign: "center",*/}
            {/*        padding: "10px",*/}
            {/*        fontWeight: "bold",*/}
            {/*        color: "grey",*/}
            {/*        fontSize: ".8rem"*/}
            {/*    }}>*/}
            {/*        Login with <a href="http://localhost:3001/auth/google"><img src={google_icon} style={{*/}
            {/*        width: "20px",*/}
            {/*        marginRight: "5px"*/}
            {/*    }}/></a>*/}
            {/*    </div>*/}
            {/*    <div className="text-center m-3">*/}
            {/*        <hr style={{width: "45%", float: "left"}}/>*/}
            {/*        OR <hr style={{width: "45%", float: "right"}}/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <form onSubmit={handleSubmit}>*/}
            {/*            <h4 style={{color: "#3A4856", fontWeight: "bold"}}>Sign In</h4>*/}
            {/*            <div className="form-group">*/}
            {/*                <label className="text-muted">Email:</label>*/}
            {/*                <input type="email" name="email" className="form-control"*/}
            {/*                       value={email} required onChange={handleChange}/>*/}
            {/*            </div>*/}
            {/*            <div className="form-group">*/}
            {/*                <label className="text-muted">Password:</label>*/}
            {/*                <input type="password" name="password" className="form-control"*/}
            {/*                       value={password} required onChange={handleChange}/>*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                <button type="submit" className="btn btn-primary">Login</button>*/}
            {/*            </div>*/}

            {/*            <div style={{textAlign: "center", margin: "10px"}} className="text-muted">*/}
            {/*                Don't have an Account? <Link to="/register"*/}
            {/*                                             style={{color: "#1C3C6B", fontWeight: "bold"}}> Sign Up </Link>*/}

            {/*                <div style={{textAlign: "center", margin: "10px"}} className="text-muted"> Don't have an*/}
            {/*                    Account? <Link to="/registration" tyle={{color: "#1C3C6B", fontWeight: "bold"}}> Sign*/}
            {/*                        Up </Link>*/}

            {/*                    Don't have an Account? <Link to="/registration"*/}
            {/*                                                 style={{color: "#1C3C6B", fontWeight: "bold"}}> Sign*/}
            {/*                        Up </Link>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </form>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className="limiter" >
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <div className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Login
					</span>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" className="form-control" value={email} required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" className="form-control" value={password} required onChange={handleChange}/>
                                </Form.Group>

                                <div className="text-center p-t-8 p-b-31">
                                    <Link to="/">
                                        Forgot password?
                                    </Link>
                                </div>

                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"/>
                                        <button type="submit" className="login100-form-btn">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </Form>
                            <div className="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
                            </div>

                            <div className="flex-c-m">
                                <a href="#" className="login100-social-item bg1">
                                    <AiFillFacebook/>
                                </a>
                                <a href="#" className="login100-social-item bg3">
                                    <AiOutlineGoogle/>
                                </a>
                            </div>
                            <div className="flex-col-c p-t-15">
						<span className="txt1 p-b-17">
							Do not have an Account?
						</span>
                                <Link to="/registration">Sign Up</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const showSuccess = () => {
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