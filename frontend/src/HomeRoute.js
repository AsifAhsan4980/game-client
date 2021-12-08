import React from "react";

import {BrowserRouter, Route, Routes} from "react-router-dom";


import Home from "./layouts/home";
import TopUp from "./layouts/TopUp";
import Login from "./layouts/Login";
import Registration from "./layouts/Registration";
import Confirmation from "./views/Confirmation";
import Confirm from "./components/Main/Confirmation/Confirm";
import Notification from "./components/Main/User/Notification";
import UserProfile from "./components/Main/User/UserProfile";
import UserWallet from "./components/Main/User/UserWallet";
import MyOrder from "./components/Main/User/MyOrder";
import Footer from "./components/Main/Footer";
import NavBar from "./layouts/NavBar";

const HomeRoute = () => {
    return (
        <><BrowserRouter>

        </BrowserRouter>

        </>
    )
}
export default HomeRoute