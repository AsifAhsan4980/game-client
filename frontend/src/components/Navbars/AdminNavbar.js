/*!

=========================================================
* Light Bootstrap Dashboard React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import  React from "react";
import {Link, useLocation} from "react-router-dom";
import {Navbar, Container, Nav, Dropdown, Button} from "react-bootstrap";

import routes from "routes.js";
import {deleteOneProducts} from "../../Api/products";
import {adminProfileUpdate} from "../../Api/userAdmin";
import {isAuthenticated} from "../../utils/auth";
import {logOut} from "../../Api";


function Header() {
    const location = useLocation();
    const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        const node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    };

    const getBrandText = () => {
        for (let i = 0; i < routes.length; i++) {
            if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    const logout = (e) => {
        e.preventDefault()
        localStorage.clear()
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    <Button
                        variant="dark"
                        className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                        onClick={mobileSidebarToggle}
                    >
                        <i className="fas fa-ellipsis-v"/>
                    </Button>
                    <Navbar.Brand
                        href="#home"
                        onClick={(e) => e.preventDefault()}
                        className="mr-2"
                    >
                        {getBrandText()}
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
                    <span className="navbar-toggler-bar burger-lines"/>
                    <span className="navbar-toggler-bar burger-lines"/>
                    <span className="navbar-toggler-bar burger-lines"/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav mr-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                data-toggle="dropdown"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                                className="m-0"
                            >
                                <i className="nc-icon nc-palette"/>
                                <span className="d-lg-none ml-1">Dashboard</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle
                                as={Nav.Link}
                                data-toggle="dropdown"
                                id="dropdown-67443507"
                                variant="default"
                                className="m-0"
                            >
                                <i className="nc-icon nc-planet"/>
                                <span className="notification">5</span>
                                <span className="d-lg-none ml-1">Notification</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 1
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 2
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 3
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Notification 4
                                </Dropdown.Item>
                                <Dropdown.Item
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    Another notification
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="nc-icon nc-zoom-split"/>
                                <span className="d-lg-block">??Search</span>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <span className="no-icon">Account</span>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                className="m-0"
                                onClick={(e) => logout(e)}

                            >
                                <Link end to="/login" className="no-icon">Log out</Link>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
