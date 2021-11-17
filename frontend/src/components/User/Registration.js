import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { registration } from '../../Api/auth';
import { isAuthenticated } from '../../utils/auth';
import { Form } from "react-bootstrap";
import { AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import "./reg.css"

const Register = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        phonenumber: '',
        password: '',
        success: false
    });

    const { username, email, password, phonenumber, success } = values;

    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values });
        console.log(values)
        registration({ username, email, phonenumber, password })
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
            {/*<div className="limiter" >*/}
            {/*    <div className="container-login100">*/}
            {/*        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">*/}
            {/*            <div className="login100-form validate-form">*/}
            {/*		<span className="login100-form-title p-b-49">*/}
            {/*			Login*/}
            {/*		</span>*/}
            {/*                <Form onSubmit={handleSubmit}>*/}
            {/*                    <Form.Label>User Name</Form.Label>*/}
            {/*                    <Form.Control type="text" name="username" className="form-control" value={username} required onChange={handleChange}/>*/}
            {/*                    <Form.Label>Email address</Form.Label>*/}
            {/*                    <Form.Control type="email" name="email" className="form-control" value={email} required onChange={handleChange}/>*/}
            {/*                    <Form.Text className="text-muted">*/}
            {/*                        We'll never share your email with anyone else.*/}
            {/*                    </Form.Text>*/}

            {/*                    <Form.Label>Phone Number</Form.Label>*/}
            {/*                    <Form.Control type="phonenumber" name="phonenumber" className="form-control" value={phonenumber} required onChange={handleChange}/>*/}

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
            {/*                                Register*/}
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
            {/*                    <Link to="/login">Sign Up</Link>*/}

            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="mx-auto" data-v-791b20d9>
                <div data-v-791b20d9>
                    <div data-v-791b20d9>
                        <div
                            className="min-w-screen bg-gray-200 flex items-center justify-center md:px-5 py-10 md:py-6">
                            <div className="bg-white text-gray-500 w-full overflow-hidden" >
                                <div className="md:flex w-full">
                                    <div className="hidden md:block w-1/3 bg-primary-500 py-10 px-10">
                                        <svg
                                            id="a87032b8-5b37-4b7e-a4d9-4dbfbe394641" data-name="Layer 1"
                                            xmlns="http://www.w3.org/2000/svg" width="100%" height="auto"
                                            viewBox="0 0 744.84799 747.07702">
                                            <path id="fa3b9e12-7275-481e-bee9-64fd9595a50d" data-name="Path 1"
                                                d="M299.205,705.80851l-6.56-25.872a335.96693,335.96693,0,0,0-35.643-12.788l-.828,12.024-3.358-13.247c-15.021-4.29394-25.24-6.183-25.24-6.183s13.8,52.489,42.754,92.617l33.734,5.926-26.207,3.779a135.92592,135.92592,0,0,0,11.719,12.422c42.115,39.092,89.024,57.028,104.773,40.06s-5.625-62.412-47.74-101.5c-13.056-12.119-29.457-21.844-45.875-29.5Z"
                                                transform="translate(-227.576 -76.46149)" fill="#f2f2f2" />
                                            <path id="bde08021-c30f-4979-a9d8-cb90b72b5ca2" data-name="Path 2"
                                                d="M361.591,677.70647l7.758-25.538a335.93951,335.93951,0,0,0-23.9-29.371l-6.924,9.865,3.972-13.076c-10.641-11.436-18.412-18.335-18.412-18.335s-15.315,52.067-11.275,101.384l25.815,22.51-24.392-10.312a135.91879,135.91879,0,0,0,3.614,16.694c15.846,55.234,46.731,94.835,68.983,88.451s27.446-56.335,11.6-111.569c-4.912-17.123-13.926-33.926-24.023-48.965Z"
                                                transform="translate(-227.576 -76.46149)" fill="#f2f2f2" />
                                            <path id="b3ac2088-de9b-4f7f-bc99-0ed9705c1a9d" data-name="Path 22"
                                                d="M747.327,253.4445h-4.092v-112.1a64.883,64.883,0,0,0-64.883-64.883H440.845a64.883,64.883,0,0,0-64.883,64.883v615a64.883,64.883,0,0,0,64.883,64.883H678.352a64.883,64.883,0,0,0,64.882-64.883v-423.105h4.092Z"
                                                transform="translate(-227.576 -76.46149)" fill="#e6e6e6" />
                                            <path id="b2715b96-3117-487c-acc0-20904544b5b7" data-name="Path 23"
                                                d="M680.97,93.3355h-31a23.02,23.02,0,0,1-21.316,31.714H492.589a23.02,23.02,0,0,1-21.314-31.714H442.319a48.454,48.454,0,0,0-48.454,48.454v614.107a48.454,48.454,0,0,0,48.454,48.454H680.97a48.454,48.454,0,0,0,48.454-48.454h0V141.7885a48.454,48.454,0,0,0-48.454-48.453Z"
                                                transform="translate(-227.576 -76.46149)" fill="#fff" />
                                            <path id="b06d66ec-6c84-45dd-8c27-1263a6253192" data-name="Path 6"
                                                d="M531.234,337.96451a24.437,24.437,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,531.234,337.96451Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ccc" />
                                            <path id="e73810fe-4cf4-40cc-8c7c-ca544ce30bd4" data-name="Path 7"
                                                d="M561.971,337.96451a24.43594,24.43594,0,0,1,12.23-21.174,24.45,24.45,0,1,0,0,42.345A24.43391,24.43391,0,0,1,561.971,337.96451Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ccc" />
                                            <circle id="a4813fcf-056e-4514-bb8b-e6506f49341f" data-name="Ellipse 1"
                                                cx="364.43401"
                                                cy="261.50202" r="24.45" fill="#274F9F" />
                                            <path id="bbe451c3-febc-41ba-8083-4c8307a2e73e" data-name="Path 8"
                                                d="M632.872,414.3305h-142.5a5.123,5.123,0,0,1-5.117-5.117v-142.5a5.123,5.123,0,0,1,5.117-5.117h142.5a5.123,5.123,0,0,1,5.117,5.117v142.5A5.123,5.123,0,0,1,632.872,414.3305Zm-142.5-150.686a3.073,3.073,0,0,0-3.07,3.07v142.5a3.073,3.073,0,0,0,3.07,3.07h142.5a3.073,3.073,0,0,0,3.07-3.07v-142.5a3.073,3.073,0,0,0-3.07-3.07Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ccc" />
                                            <rect id="bb28937d-932f-4fdf-befe-f406e51091fe" data-name="Rectangle 1"
                                                x="218.56201"
                                                y="447.10197" width="218.552" height="2.047" fill="#ccc" />
                                            <circle id="fcef55fc-4968-45b2-93bb-1a1080c85fc7" data-name="Ellipse 2"
                                                cx="225.46401"
                                                cy="427.41999" r="6.902" fill="#274F9F"></circle>
                                            <rect id="ff33d889-4c74-4b91-85ef-b4882cc8fe76" data-name="Rectangle 2"
                                                x="218.56201"
                                                y="516.11803" width="218.552" height="2.047" fill="#ccc"></rect>
                                            <circle id="e8fa0310-b872-4adf-aedd-0c6eda09f3b8" data-name="Ellipse 3"
                                                cx="225.46401"
                                                cy="496.43702" r="6.902" fill="#274F9F"></circle>
                                            <path
                                                d="M660.69043,671.17188H591.62207a4.50493,4.50493,0,0,1-4.5-4.5v-24.208a4.50492,4.50492,0,0,1,4.5-4.5h69.06836a4.50491,4.50491,0,0,1,4.5,4.5v24.208A4.50492,4.50492,0,0,1,660.69043,671.17188Z"
                                                transform="translate(-227.576 -76.46149)" fill="#274F9F"></path>
                                            <circle id="e12ee00d-aa4a-4413-a013-11d20b7f97f7" data-name="Ellipse 7"
                                                cx="247.97799"
                                                cy="427.41999" r="6.902" fill="#274F9F"></circle>
                                            <circle id="f58f497e-6949-45c8-be5f-eee2aa0f6586" data-name="Ellipse 8"
                                                cx="270.492"
                                                cy="427.41999" r="6.902" fill="#274F9F"></circle>
                                            <circle id="b4d4939a-c6e6-4f4d-ba6c-e8b05485017d" data-name="Ellipse 9"
                                                cx="247.97799"
                                                cy="496.43702" r="6.902" fill="#274F9F"></circle>
                                            <circle id="aff120b1-519b-4e96-ac87-836aa55663de" data-name="Ellipse 10"
                                                cx="270.492"
                                                cy="496.43702" r="6.902" fill="#274F9F"></circle>
                                            <path id="f1094013-1297-477a-ac57-08eac07c4bd5" data-name="Path 88"
                                                d="M969.642,823.53851H251.656c-1.537,0-2.782-.546-2.782-1.218s1.245-1.219,2.782-1.219H969.642c1.536,0,2.782.546,2.782,1.219S971.178,823.53851,969.642,823.53851Z"
                                                transform="translate(-227.576 -76.46149)" fill="#3f3d56"></path>
                                            <path
                                                d="M792.25256,565.92292a10.09371,10.09371,0,0,1,1.41075.78731l44.8523-19.14319,1.60093-11.81526,17.92157-.10956-1.05873,27.0982-59.19987,15.65584a10.60791,10.60791,0,0,1-.44749,1.20835,10.2346,10.2346,0,1,1-5.07946-13.68169Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ffb8b8"></path>
                                            <polygon
                                                points="636.98 735.021 624.72 735.021 618.888 687.733 636.982 687.734 636.98 735.021"
                                                fill="#ffb8b8"></polygon>
                                            <path
                                                d="M615.96281,731.51778h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H601.076a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,615.96281,731.51778Z"
                                                fill="#2f2e41"></path>
                                            <polygon
                                                points="684.66 731.557 672.459 732.759 662.018 686.271 680.025 684.497 684.66 731.557"
                                                fill="#ffb8b8"></polygon>
                                            <path
                                                d="M891.68576,806.12757h23.64387a0,0,0,0,1,0,0v14.88687a0,0,0,0,1,0,0H876.7989a0,0,0,0,1,0,0v0A14.88686,14.88686,0,0,1,891.68576,806.12757Z"
                                                transform="translate(-303.00873 15.2906) rotate(-5.62529)"
                                                fill="#2f2e41"></path>
                                            <circle cx="640.3925" cy="384.57375" r="24.56103" fill="#ffb8b8"></circle>
                                            <path
                                                d="M849.55636,801.91945a4.47086,4.47086,0,0,1-4.415-3.69726c-6.34571-35.22559-27.08789-150.40528-27.584-153.59571a1.42684,1.42684,0,0,1-.01562-.22168v-8.58789a1.489,1.489,0,0,1,.27929-.87207l2.74024-3.83789a1.47845,1.47845,0,0,1,1.14355-.625c15.62207-.73242,66.78418-2.8789,69.25586.209h0c2.48242,3.10351,1.60547,12.50683,1.4043,14.36035l.00977.19336,22.98535,146.99512a4.51238,4.51238,0,0,1-3.71485,5.13476l-14.35644,2.36524a4.52127,4.52127,0,0,1-5.02539-3.09278c-4.44043-14.18847-19.3291-61.918-24.48926-80.38672a.49922.49922,0,0,0-.98047.13868c.25781,17.60546.88086,62.52343,1.0957,78.0371l.02344,1.6709a4.51811,4.51811,0,0,1-4.09277,4.53614l-13.84375,1.25781C849.83565,801.91359,849.695,801.91945,849.55636,801.91945Z"
                                                transform="translate(-227.576 -76.46149)" fill="#2f2e41"></path>
                                            <path id="ae7af94f-88d7-4204-9f07-e3651de85c05" data-name="Path 99"
                                                d="M852.38089,495.2538c-4.28634,2.548-6.85116,7.23043-8.32276,11.9951a113.681,113.681,0,0,0-4.88444,27.15943l-1.55553,27.60021-19.25508,73.1699c16.68871,14.1207,26.31542,10.91153,48.78049-.63879s25.03222,3.85117,25.03222,3.85117l4.49236-62.25839,6.41837-68.03232a30.16418,30.16418,0,0,0-4.86143-4.67415,49.65848,49.65848,0,0,0-42.44229-8.99538Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ffffff"></path>
                                            <path
                                                d="M846.12661,580.70047a10.52561,10.52561,0,0,1,1.50061.70389l44.34832-22.1972.736-12.02551,18.2938-1.26127.98041,27.4126L852.7199,592.93235a10.4958,10.4958,0,1,1-6.59329-12.23188Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ffb8b8"></path>
                                            <path id="a6768b0e-63d0-4b31-8462-9b2e0b00f0fd" data-name="Path 101"
                                                d="M902.76552,508.41151c10.91151,3.85117,12.83354,45.57369,12.83354,45.57369-12.8367-7.06036-28.24139,4.49318-28.24139,4.49318s-3.20916-10.91154-7.06034-25.03223a24.52987,24.52987,0,0,1,5.13436-23.10625S891.854,504.558,902.76552,508.41151Z"
                                                transform="translate(-227.576 -76.46149)" fill="#ffffff"></path>
                                            <path id="bfd7963f-0cf8-4885-9d3a-2c00bccda2e3" data-name="Path 102"
                                                d="M889.99122,467.53052c-3.06-2.44837-7.23517,2.00173-7.23517,2.00173l-2.4484-22.03349s-15.30095,1.8329-25.0935-.61161-11.32255,8.87513-11.32255,8.87513a78.57978,78.57978,0,0,1-.30582-13.77092c.61158-5.50838,8.56838-11.01675,22.6451-14.68932S887.6518,439.543,887.6518,439.543C897.44542,444.43877,893.05121,469.97891,889.99122,467.53052Z"
                                                transform="translate(-227.576 -76.46149)" fill="#2f2e41"></path>
                                        </svg>
                                    </div>
                                    <div className="w-full md:w-2/3 py-10 px-5 md:px-10 relative">
                                        <div className="text-center mb-10">
                                            <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900 text-left">
                                                Create new account
                                            </h1>
                                        </div>
                                        <div className="mb-7">
                                            <button type="button"
                                                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                                                <div className="flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                        xmlns="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"
                                                        className="w-6 h-6">
                                                        <defs>
                                                            <path id="a"
                                                                d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z">
                                                            </path>
                                                        </defs>
                                                        <clipPath id="b">
                                                            <use href="#a" overflow="visible"></use>
                                                        </clipPath>
                                                        <path clip-path="url(#b)" fill="#FBBC05"
                                                            d="M0 37V11l17 13z"></path>
                                                        <path clip-path="url(#b)" fill="#EA4335"
                                                            d="M0 11l17 13 7-6.1L48 14V0H0z"></path>
                                                        <path clip-path="url(#b)" fill="#34A853"
                                                            d="M0 37l30-23 7.9 1L48 0v48H0z"></path>
                                                        <path clip-path="url(#b)" fill="#4285F4"
                                                            d="M48 48L17 24l-4-3 35-10z"></path>
                                                    </svg>
                                                    <span className="ml-4"> Log in with Google</span></div>
                                            </button>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex -mx-3 flex-wrap">
                                                <div className="w-full md:w-1/2 px-3 mb-5">
                                                    <div><label className="block text-gray-700">Username</label> <input
                                                        type="text"
                                                        placeholder="Enter Username" autoFocus="autofocus" autoComplete
                                                        name="username"
                                                        value={username}
                                                        className="tw_form_input" required onChange={handleChange}/>
                                                        </div>

                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-5">
                                                    <div><label className="block text-gray-700 mb-1.5">Phone</label>
                                                        <div id="MazPhoneNumberInput"
                                                            className="vue-phone-number-input flex phone_input_style"
                                                            data-v-19c9a1c7>
                                                            <div className="select-country-container" data-v-19c9a1c7>
                                                                <div
                                                                    className="country-selector input-country-selector has-value"
                                                                    data-v-46e105de
                                                                    data-v-19c9a1c7>
                                                                    <div className="country-selector__country-flag"
                                                                        data-v-46e105de>
                                                                        <div className="iti-flag-small iti-flag bd"
                                                                            data-v-46e105de></div>
                                                                    </div>
                                                                    <input
                                                                        id="MazPhoneNumberInput-58735_country_selector"
                                                                        placeholder="Country code" readOnly="readonly"
                                                                        value="+880"
                                                                        className="country-selector__input some-css"

                                                                        data-v-46e105de />
                                                                    <div className="country-selector__toggle"
                                                                        data-v-46e105de>
                                                                        <svg
                                                                            mlns="http://www.w3.org/2000/svg"
                                                                            width="24" height="24"
                                                                            viewBox="0 0 24 24"
                                                                            className="country-selector__toggle__arrow"
                                                                            data-v-46e105de>
                                                                            <path
                                                                                d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                                                                                className="arrow"
                                                                                data-v-46e105de />
                                                                            <path fill="none" d="M0 0h24v24H0V0z"
                                                                                data-v-46e105de />
                                                                        </svg>
                                                                    </div>
                                                                    <label className="country-selector__label"
                                                                        data-v-46e105de> Country code
                                                                    </label>
                                                                    <div className="country-selector__list some-css-two"
                                                                        data-v-46e105de data-v-46e105de>
                                                                        <div
                                                                            className="vue-recycle-scroller direction-vertical"
                                                                            data-v-46e105de>
                                                                            <div
                                                                                className="vue-recycle-scroller__item-wrapper some-css-three"
                                                                            ></div>

                                                                            <div tabIndex="-1"
                                                                                className="resize-observer"
                                                                                data-v-b329ee4c></div>
                                                                        </div>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            <div className="flex-1" data-v-19c9a1c7>
                                                                <div className="input-tel input-phone-number"
                                                                    data-v-e59be3b4 data-v-19c9a1c7><input
                                                                        id="MazPhoneNumberInput-58735_phone_number"
                                                                        placeholder="Phone number"
                                                                        type="tel" value={phonenumber} name="phonenumber" required onChange={handleChange} className="input-tel__input some-css-four"
                                                                        data-v-e59be3b4 /><label
                                                                            htmlFor="MazPhoneNumberInput-58735_phone_number"
                                                                            className="input-tel__label" data-v-e59be3b4> Phone
                                                                        number </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-5">
                                                    <div><label className="block text-gray-700">Email</label> <input
                                                        type="email"
                                                        placeholder="Enter Email" autoComplete value={email} name="email" required onChange={handleChange}
                                                        className="tw_form_input" /></div>

                                                </div>
                                            </div>
                                            <div className="flex flex-wrap -mx-3">
                                                <div className="w-full md:w-1/2 px-3 mb-5">
                                                    <div><label className="block text-gray-700">Password</label> <input
                                                        type="password"
                                                        placeholder="Enter Password" autoComplete value={password} name="password" required onChange={handleChange}
                                                        className="tw_form_input" /></div>

                                                </div>
                                                <div className="w-full md:w-1/2 px-3 mb-5">
                                                    <div><label className="block text-gray-700">Confirm Password</label>
                                                        <input type="password"
                                                            placeholder="Enter Username" autoComplete value=""
                                                            className="tw_form_input" /></div>

                                                </div>
                                            </div>
                                            <div className="flex -mx-3">
                                                <div className="w-full px-3 mb-5">
                                                    <button type="submit" className="w-full block bg-primary-500 hover:bg-primary-400 focus:bg-primary-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">
                                                        REGISTER NOW
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                        <p className="mt-4 text-center">
                                            Have an account?

                                            <Link to='login'
                                               className="text-primary-500 hover:text-primary-700 font-semibold">Login
                                                here</Link>
                                        </p>
                                    </div>
                                </div>
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
            {isAuthenticated() ? <Redirect to="/" /> : ""}
            {showSuccess()}
            {signUpForm()}
            <hr />
        </div>
    );
}

export default Register;