import React from 'react';
import { createBrowserRouter } from 'react-router';
import NotFound from '../pages/NotFoundPage';
import Home from '../pages/Home/Home';
import MainLayout from '../layouts/MainLayout';


const Routers = createBrowserRouter([
    {
        path:"/",
        errorElement:<NotFound></NotFound>,
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]

    }
])

export default Routers;