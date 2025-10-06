import React from 'react';
import { createBrowserRouter, Router } from 'react-router';
import PageNotFound from './PageNotFound';
import RouterMain from './RouterMain';
import Home from '../Pages/Home';

export const Route = createBrowserRouter([
    {
        path: '/',
        Component:RouterMain,
        errorElement:<PageNotFound></PageNotFound>,
        children:[
            {
                index:true,
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])