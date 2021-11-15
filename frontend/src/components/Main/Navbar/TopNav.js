import React from "react";
import "./search.css"
import {Container, Navbar, Nav} from "react-bootstrap";
import Search from "./search";
import {Link} from "react-router-dom";

const TopNav = () => {
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
                                    <li data-v-70c6da4e><Link to='registration' href="register.html" data-v-70c6da4e>Sign Up </Link>
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