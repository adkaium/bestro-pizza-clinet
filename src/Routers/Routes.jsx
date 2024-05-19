import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/Allusers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminsRoute from '../Routers/AdminsRoute'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu></Menu>,
      },
      {
        path: "order/:category",
        element: <Order></Order>,
      },
      {
        path: "/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashBoard></DashBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // addmin routes
      {
        path: "users",
        element: (
          <AdminsRoute>
            <AllUsers></AllUsers>
          </AdminsRoute>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminsRoute>
            <AddItems></AddItems>
          </AdminsRoute>
        ),
      },
    ],
  },
]);
