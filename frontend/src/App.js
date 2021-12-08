import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRoute from "components/protectedRoutes/AdminRoute";
import AdminLayout from "./layouts/Admin";
import Home from "./layouts/home";
import TopUp from "./layouts/TopUp";
import Login from "./layouts/Login";
import Registration from "./layouts/Registration";
import { AuthProvider } from "./utils/auth";
import HomeRoute from "./HomeRoute";
import Notification from "./components/Main/User/Notification";
import NavBar from "./layouts/NavBar";
import Confirm from "components/Main/Confirmation/Confirm";
import UserProfile from "./components/Main/User/UserProfile";
import UserWallet from "./components/Main/User/UserWallet";
import MyOrder from "./components/Main/User/MyOrder";
import Footer from './components/Main/Footer/index';
import Confirmation from "./views/Confirmation";

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
            <Footer />
        </AuthProvider>
    )
}
export default App