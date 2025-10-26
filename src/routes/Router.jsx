import { Component } from "react";
import { createBrowserRouter } from "react-router";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import HomeLayout from "../layout/HomeLayout";
import Skills from "../pages/Skills";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AuthLayout from "../layout/AuthLayout";
import ProfilePage from "../pages/ProfilePage";
import SkillDetails from "../pages/SkillDetails";
import PrivateRoute from "../provider/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/skills/:id",
       element: (<PrivateRoute><Skills></Skills></PrivateRoute>),
        loader: () => fetch("/skills.json"),
      },
      {
        path: "/profile",
        element: (<PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>),
      },
      {
        path:'/skillDetails/:id',
        // Component:SkillDetails,
        element:(<PrivateRoute><SkillDetails></SkillDetails></PrivateRoute>),
        loader: () => fetch("/skills.json"),
      }
    ],
  },
  {
    path: "/navbar",
    Component: Navbar,
  },
  {},
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
       Component:Login
      },
      {
        path: "/auth/signup",
       Component:SignUp
      },
    ],
  },
]);

export default router;
