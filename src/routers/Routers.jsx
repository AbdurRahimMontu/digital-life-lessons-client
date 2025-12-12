import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login/Login';


const Routers = createBrowserRouter([
    {
        path:"/",
        errorElement:<ErrorPage></ErrorPage>,
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]

    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    },

    {
        path:"*",
        element:<ErrorPage></ErrorPage>
    }
])

export default Routers;