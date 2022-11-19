import { createBrowserRouter } from "react-router-dom";
import MyAppointment from "../DashboardPage/SharedPage/MyAppointment";
import DashboardLayOut from "../Layout/DashboardLayOut";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "sign-up",
          element: <SignUp />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "appointment",
          element: <Appointment/>,
        }
      ],
    },
    {path: "/dashboard",
    element: <DashboardLayOut />,
    children : [
      {
        path : '/dashboard',
        element : <MyAppointment />
      },
    ]
  }
  ]);

export default router 