import React from "react";
import { Navigate, useNavigate, useRoutes } from "react-router-dom";
import DashBoardLayout from "./Layout/dashboard/DashboardLayout";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/Contactus/ContactUs";

export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <DashBoardLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contact-us", element: <ContactUs /> },
      ],
    },
  ]);
  return routes;
}
