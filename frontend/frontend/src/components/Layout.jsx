import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import CopyRight from './CopyRight';

const Layout = () => {
    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
            <CopyRight/>
        </>
    )
}

export default Layout