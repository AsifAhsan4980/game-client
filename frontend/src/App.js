import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import AdminRoute from "components/protectedRoutes/AdminRoute";
import AdminLayout from "./layouts/Admin";
import Home from "./layouts/home";
import TopUp from "./layouts/TopUp";
import Login from "./layouts/Login";
import Registration from "./layouts/Registration";
import {AuthProvider} from "./utils/auth";
import Confirmation from "./views/Confirmation";

import Confirm from "components/Main/Confirmation/Confirm";

import UserProfile from "./components/Main/User/UserProfile";
import NavBar from "./layouts/NavBar";
import UserWallet from "./components/Main/User/UserWallet";
import MyOrder from "./components/Main/User/MyOrder";
import Footer from './components/Main/Footer/index'

const App = () => {
    return (
        <AuthProvider>
            <Switch>
                <AdminRoute path="/admin">
                    <AdminLayout/>
                </AdminRoute>
            </Switch>
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:id/:name/:productId" component={TopUp}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/category/:id/:name/conformation" component={Confirmation}/>

                <Route exact path="/confirmation" component={Confirm}/>

                <Route exact path="/profile" component={UserProfile}/>
                <Route exact path="/userWallet" component={UserWallet}/>
                <Route exact path="/myOrder" component={MyOrder}/>

            </Switch>
            <Footer/>
        </AuthProvider>
    )
}
export default App