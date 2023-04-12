import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import Courses from "../Pages/Courses";
import Home from "../Pages/Home";
import Maintenance from "../Pages/Maintenance";
import ErrorPage from "../Pages/ErrorPage";


export const routing = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/courses',
                element: <Courses/>
            },
            {
                path: '/maintenance',
                element: <Maintenance/>
            }
        ]
    }
])