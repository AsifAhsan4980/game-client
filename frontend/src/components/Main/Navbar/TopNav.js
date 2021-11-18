import React, {useState} from "react";
import "./search.css"
import {AiOutlineUser} from "react-icons/ai"
import {Link} from "react-router-dom";
import {Dropdown, FormControl} from "react-bootstrap";



const TopNav = () => {
    // The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
    const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
        <a
            href=""
            ref={ref}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
            &#x25bc;
        </a>
    ));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            const [value, setValue] = useState('');

            return (
                <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <FormControl
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                    <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                            (child) =>
                                !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                    </ul>
                </div>
            );
        },
    );


    return (
        <>
            <div data-v-70c6da4e data-v-791b20d9>
                <header className="bg-white md:bg-white md:pb-0 md:mb-0 sticky top-0 left-0 w-full z-[9999999]"
                        data-v-70c6da4e>

                    <div className="container mx-auto" data-v-70c6da4e>
                        <div className="flex items-center py-2 justify-between" data-v-70c6da4e>
                            <div className="w-[130px] md:w-[160px]" data-v-70c6da4e><Link to='/' href="index.html"
                                                                                       className="nuxt-link-active"
                                                                                       data-v-70c6da4e><img
                                src="_nuxt/img/bd-games-bazar.4dd5bce.png" alt="Cizishop"
                                className="md:block max-w-full h-auto object-cover" data-v-70c6da4e/></Link>
                            </div>
                            <div className="flex-grow px-12 hidden md:block" data-v-70c6da4e>
                                <div className="w-full" data-v-70c6da4e>
                                    <form data-v-70c6da4e>
                                        <div className="relative overflow-hidden" data-v-70c6da4e><input type="text"
                                                                                                         placeholder="Search.."
                                                                                                         className="
                    w-full
                    border-[3px] border-primary-500
                    rounded
                    text-lg text-gray-800
                    font-normal
                    py-1.5
                    px-4
                    pr-[110px]
                    focus:outline-none
                    focus:border-primary-300
                  " data-v-70c6da4e/> <input type="submit" value="Search" className="
                    absolute
                    top-1/2
                    right-[2px]
                    -translate-y-1/2
                    w-[100px]
                    bg-primary-500
                    duration-100
                    hover:bg-primary-400
                    flex
                    items-center
                    justify-center
                    text-white
                    font-normal
                    text-lg
                    cursor-pointer
                    abc
                  "  data-v-70c6da4e/></div>
                                    </form>
                                </div>
                            </div>
                            <div data-v-70c6da4e>
                                <ul className="flex flex-nowrap items-center header_top_right_ul" data-v-70c6da4e>
                                    <li className="hidden xs:block" data-v-70c6da4e><Link to='login'
                                                                                       aria-current="page"
                                                                                       className="nuxt-link-exact-active nuxt-link-active"
                                                                                       data-v-70c6da4e>Login </Link></li>
                                    <li data-v-70c6da4e><Link to='registration' data-v-70c6da4e>Sign Up </Link>

                                    </li>
                                    <li>
                                        <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                                            <AiOutlineUser/>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu as={CustomMenu}>
                                            <Dropdown.Item eventKey="1"><Link to='profile'>My Profile</Link></Dropdown.Item>
                                            <Dropdown.Item eventKey="2"><Link to='userWallet'>  My Wallet</Link></Dropdown.Item>

                                            <Dropdown.Item eventKey="3"><Link to='userWallet'>Add Wallet</Link></Dropdown.Item>
                                            <Dropdown.Item eventKey="4"><Link to='myOrder'>My Order</Link> </Dropdown.Item>
                                            <Dropdown.Item eventKey="5">Support</Dropdown.Item>
                                            <Dropdown.Item eventKey="6">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>,
                                    </li>
                                    <div id="sidebar_overly"
                                         className="flex fixed top-0 left-0 z-[9999999] bg-black/40 w-full h-screen items-start justify-start mobile_sidebar_wrapper"
                                         data-v-70c6da4e>
                                        <div className="w-[75%] h-full bg-white pb-4 mobile_sidebar_content_wrapper"
                                             data-v-70c6da4e>

                                            <ul className="user_dropdown_ul" data-v-70c6da4e>
                                                <li data-v-c42a92a2 data-v-70c6da4e><a href="profile.html"
                                                                                       data-v-c42a92a2>
                                                    <div className="li_style" data-v-c42a92a2>
                                                        <div className="w-5 h-5 mr-3" data-v-c42a92a2>
                                                            <v-icon name="user" data-v-c42a92a2></v-icon>
                                                        </div>
                                                        My profile
                                                    </div>
                                                </a></li>
                                                <li data-v-c42a92a2 data-v-70c6da4e><a href="login.html"
                                                                                       data-v-c42a92a2>
                                                    <div className="li_style" data-v-c42a92a2>
                                                        <div className="w-5 h-5 mr-3" data-v-c42a92a2>
                                                            <v-icon name="credit-card" data-v-c42a92a2>
                                                            </v-icon>
                                                        </div>
                                                        My wallet
                                                    </div>
                                                </a></li>
                                                <li data-v-c42a92a2 data-v-70c6da4e><a href="login.html"
                                                                                       data-v-c42a92a2>
                                                    <div className="li_style" data-v-c42a92a2>
                                                        <div className="w-5 h-5 mr-3" data-v-c42a92a2>
                                                            <v-icon name="plus-circle" data-v-c42a92a2>
                                                            </v-icon>
                                                        </div>
                                                        Add wallet
                                                    </div>
                                                </a></li>
                                                <li data-v-c42a92a2 data-v-70c6da4e><a href="profile/order.html"
                                                                                       data-v-c42a92a2>
                                                    <div className="li_style" data-v-c42a92a2>
                                                        <div className="w-5 h-5 mr-3" data-v-c42a92a2>
                                                            <v-icon name="bar-chart-2" data-v-c42a92a2>
                                                            </v-icon>
                                                        </div>
                                                        My order
                                                    </div>
                                                </a></li>
                                                <li data-v-c42a92a2 data-v-70c6da4e><a href="contact.html"
                                                                                       data-v-c42a92a2>
                                                    <div className="li_style" data-v-c42a92a2>
                                                        <div className="w-5 h-5 mr-3" data-v-c42a92a2>
                                                            <v-icon name="phone" data-v-c42a92a2></v-icon>
                                                        </div>
                                                        Support
                                                    </div>
                                                </a></li>
                                                <li data-v-c42a92a2 data-v-70c6da4e>
                                                    <div className="li_style" data-v-c42a92a2>
                                                        <div className="w-5 h-5 mr-3" data-v-c42a92a2>
                                                            <v-icon name="log-out" data-v-c42a92a2></v-icon>
                                                        </div>
                                                        Logout
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </>
    )
}

export default TopNav