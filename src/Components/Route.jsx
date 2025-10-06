import React from 'react';
import { createBrowserRouter, Router } from 'react-router';
import PageNotFound from './PageNotFound';
import RouterMain from './RouterMain';
import Home from '../Pages/Home';
import View from '../Pages/View';

export const Route = createBrowserRouter([
    {
        path: '/',
        Component:RouterMain,
        errorElement:<PageNotFound></PageNotFound>,
        children:[
            {
                index:true,
                loader:()=> fetch('./book.json'),
                path:'/',
                element:<Home></Home>
            }, 
            {
             path:"/view/:id",
             loader:()=> fetch('./book.json'),
             element:<View></View>
            }
        ]
    }
])