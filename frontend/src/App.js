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

const App = () => {
    return (
        <AuthProvider>
            <Switch>
                <AdminRoute path="/admin">
                    <AdminLayout/>
                </AdminRoute>
            </Switch>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/category/:id/:name" component={TopUp}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/registration" component={Registration}/>
                <Route exact path="/category/:id/:name/conformation" component={Confirmation}/>
                <Route exact path="/confirmation" component={Confirm}/>
            </Switch>
        </AuthProvider>
    )
}
export default App