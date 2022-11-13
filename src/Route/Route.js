import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/AppointmentBanner";
import AppointmentJust from "../Pages/AppointmentJust/AppointmentJust";
import Home from "../Pages/Home/Home";

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
          path: "appointment",
          element: <Appointment />,
        }
      ],
    },
  ]);

export default router 