import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import Footer from '../components/Footer';
import Skills from '../pages/Skills';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
           <nav className='w-11/12 mx-auto my-3'>
            <Navbar></Navbar>
           </nav>
           <main className='w-11/12 mx-auto my-3'>
            {/* <Home></Home> */}
            <Outlet></Outlet>
           </main>
           <footer>
            <Footer></Footer>
           </footer>

        </div>
    );
};

export default HomeLayout;