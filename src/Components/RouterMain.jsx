import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';

const RouterMain = () => {
    return (
       <div>
         <div className='flex flex-col container mx-auto '>
              <Navbar></Navbar>
            <div className='min-h-screen'>
                
                <Outlet></Outlet>
            </div>
        </div>
        <Footer></Footer>
       </div>
        
    );
};

export default RouterMain;