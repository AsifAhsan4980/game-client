import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "components/protectedRoutes/AdminRoute";
import AdminLayout from "./layouts/Admin";
import {AuthProvider} from "./utils/auth";

import Confirmation from "./views/Confirmation";

import HomeRoute from "./HomeRoute";
import Notification from "./components/Main/User/Notification";
import NavBar from "./layouts/NavBar";

import HomeRoute from "./HomeRoute";



const App = () => {
    return (
        <AuthProvider>

            
            <Routes>
                <AdminRoute path="/admin" element={<AdminLayout />}>
                </AdminRoute>
            </Routes>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/category/:id/:name/:productId" element={TopUp} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/registration" element={Registration} />
                <Route exact path="/category/:id/:name/conformation" element={Confirmation} />
                <Route exact path="/confirmation" element={Confirm} />
                <Route exact path="/notification" element={Notification} />
                <Route exact path="/profile" element={UserProfile} />
                <Route exact path="/userWallet" element={UserWallet} />
                <Route exact path="/myOrder" element={MyOrder} />
            </Routes>
            <Footer/>


        </AuthProvider>
    )
}
export default App