import React from "react";
import { Route, Routes} from "react-router-dom";
import AdminRoute from "components/protectedRoutes/AdminRoute";
import AdminLayout from "./layouts/Admin";
import Home from "./layouts/home";
import TopUp from "./layouts/TopUp";
import Login from "./layouts/Login";
import Registration from "./layouts/Registration";
import {AuthProvider} from "./utils/auth";
<<<<<<< Updated upstream
import Confirmation from "./views/Confirmation";
=======
import HomeRoute from "./HomeRoute";
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
>>>>>>> Stashed changes

import Confirm from "components/Main/Confirmation/Confirm";

import UserProfile from "./components/Main/User/UserProfile";
import NavBar from "./layouts/NavBar";
import UserWallet from "./components/Main/User/UserWallet";
import MyOrder from "./components/Main/User/MyOrder";
import Footer from './components/Main/Footer/index';
import Notification from './components/Main/User/Notification';

const App = () => {
    return (
        <AuthProvider>
<<<<<<< Updated upstream
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
                <Route exact path="/notification" component={Notification}/>
                <Route exact path="/profile" component={UserProfile}/>
                <Route exact path="/userWallet" component={UserWallet}/>
                <Route exact path="/myOrder" component={MyOrder}/>
                <Footer/>
            </Switch>
=======
            <Routes>
                <Route path="/admin" element={<AdminLayout/>}/>
                    
                
            </Routes>

            <NavBar/>
            <Routes>
                
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/category/:id/:name/:productId" element={TopUp}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/registration" element={Registration}/>
                <Route exact path="/category/:id/:name/conformation" element={Confirmation}/>

                <Route exact path="/confirmation" element={Confirm}/>
                <Route exact path="/notification" element={Notification}/>
                <Route exact path="/profile" element={UserProfile}/>
                <Route exact path="/userWallet" element={UserWallet}/>
                <Route exact path="/myOrder" element={MyOrder}/>

            </Routes>
            <Footer/>
>>>>>>> Stashed changes

        </AuthProvider>
    )
}
export default App