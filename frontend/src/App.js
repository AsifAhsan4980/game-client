import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import AdminRoute from "components/protectedRoutes/AdminRoute";
import AdminLayout from "./layouts/Admin";
import {AuthProvider} from "./utils/auth";
import HomeRoute from "./HomeRoute";


const App = () => {
    return (
        <AuthProvider>
            <Switch>
                <AdminRoute path="/admin">
                    <AdminLayout/>
                </AdminRoute>
                <Route><HomeRoute/></Route>
            </Switch>



        </AuthProvider>
    )
}
export default App