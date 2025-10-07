import React from 'react';
import { createBrowserRouter, Router } from 'react-router';
import PageNotFound from './PageNotFound';
import RouterMain from './RouterMain';
import Home from '../Pages/Home';
import View from '../Pages/View';
import About from '../Pages/About';
import ReadList from '../Pages/ReadList';

export const Route = createBrowserRouter([
    {
        path: '/',
        Component:RouterMain,
        errorElement:<PageNotFound></PageNotFound>,
        children:[
            {
                index:true,
                loader:()=> fetch('/book.json'),
                path:'/',
                element:<Home></Home>
            }, 
            {
             path:"/bookDetails/:id",
             loader:()=> fetch('/book.json'),
             element:<View></View>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/readList',
                loader:()=> fetch('/book.json'),
                element:<ReadList></ReadList>
            }
        ]
    }
])