import React from 'react';
import Navbar from './Navba';
import Footer from './Footer';

const Layout = (props) => {
    return (
        <>
            <Navbar/>


            {props.children}

         


            <Footer/>
        </>
    );
};

export default Layout;