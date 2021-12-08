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
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Orders from "views/Orders";
import Maps from "views/Maps.js";
import Utility from "views/Utility";
import Products from "./views/Products";
import OrderHandle from "./views/OrderHandle";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    element: <Dashboard/>,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Admin Profile",
    icon: "nc-icon nc-circle-09",
    element: <UserProfile/>,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    element: <TableList/>,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Products",
    icon: "nc-icon nc-paper-2",
    element: <Products/>,
    layout: "/admin",
  },
  {
    path: "/orders",
    name: "Orders",
    icon: "nc-icon nc-atom",
    element: <Orders/>,
    layout: "/admin",
  },
  {
    path: "/handleOrder",
    name: "Handle Order",
    icon: "nc-icon nc-bell-55",
    element: <OrderHandle/>,
    layout: "/admin",
  },
  {
    path: "/utility",
    name: "Utility",
    icon: "nc-icon nc-notes",
    element: <Utility/>,
    layout: "/admin",
  },
];

export default dashboardRoutes;
