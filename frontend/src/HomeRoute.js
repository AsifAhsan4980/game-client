import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:id/:name/:productId" component={TopUp}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/category/:id/:name/conformation" component={Confirmation}/>

                <Route exact path="/confirmation" component={Confirm}/>
                <Route exact path="/notification" component={Notification}/>
                <Route exact path="/profile" component={UserProfile}/>
                <Route exact path="/userWallet" component={UserWallet}/>
                <Route exact path="/myOrder" component={MyOrder}/>

            </Switch>
            <Footer/>
        </BrowserRouter>

        </>
    )
}
export default HomeRoute