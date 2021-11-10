import React, {useState} from "react";
import Navbar from "../components/Main/Navbar";
import Sidebar from "../components/Main/SideBar";
import TopNav from "../components/Main/Navbar/TopNav";
import "./Navbar.css"

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className="hide"><TopNav/></div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>


        </>
    )
}
export default NavBar