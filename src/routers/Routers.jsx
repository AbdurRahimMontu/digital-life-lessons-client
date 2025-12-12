import React from 'react';
import { createBrowserRouter } from 'react-router';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home/Home';

const Routers = createBrowserRouter([
    {
        path:"/",
        errorElement:<NotFound></NotFound>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]

    }
])

export default Routers;