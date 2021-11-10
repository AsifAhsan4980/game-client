import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {registration} from '../../Api/auth';
import {isAuthenticated} from '../../utils/auth';
import {Form} from "react-bootstrap";
import {AiFillFacebook, AiOutlineGoogle} from "react-icons/ai";

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        phonenumber: '',
        password: '',
        success: false
    });

    const {username, email, password, phonenumber, success} = values;

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues({...values});
        console.log(values)
        registration({username, email, phonenumber, password})
            .then(response => {
                setValues({
                    username: '',
                    email: '',
                    phonenumber: '',
                    password: '',
                    success: true
                })
            })
            .catch(err => console.log(err))
    }

    const signUpForm = () => (
        <>
            {/*<form onSubmit={handleSubmit}>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-muted">Name:</label>*/}
            {/*        <input type="text" name="username" className="form-control"*/}
            {/*               value={username} required onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-muted">Email:</label>*/}
            {/*        <input type="email" name="email" className="form-control"*/}
            {/*               value={email} required onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-muted">Phone Number:</label>*/}
            {/*        <input type="phonenumber" name="phonenumber" className="form-control"*/}
            {/*               value={phonenumber} required onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <div className="form-group">*/}
            {/*        <label className="text-muted">Password:</label>*/}
            {/*        <input type="password" name="password" className="form-control"*/}
            {/*               value={password} required onChange={handleChange}/>*/}
            {/*    </div>*/}
            {/*    <button type="submit" className="btn btn-primary">Create Account</button>*/}
            {/*</form>*/}
            <div className="limiter" >
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <div className="login100-form validate-form">
					<span className="login100-form-title p-b-49">
						Login
					</span>
                            <Form onSubmit={handleSubmit}>
                                <Form.Label>User Name</Form.Label>
                                <Form.Control type="text" name="username" className="form-control" value={username} required onChange={handleChange}/>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" className="form-control" value={email} required onChange={handleChange}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>

                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="phonenumber" name="phonenumber" className="form-control" value={phonenumber} required onChange={handleChange}/>

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
                                            Register
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
                                <Link to="/login">Sign Up</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    const showSuccess = () => {
        if (success) return (
            <div className="alert alert-primary">
                New Account Created. Please <Link to="/login">Login</Link>.
            </div>
        )
    }

    return (
        <div>
            {isAuthenticated() ? <Redirect to="/"/> : ""}
            {showSuccess()}
            {signUpForm()}
            <hr/>
        </div>
    );
}

export default Register;