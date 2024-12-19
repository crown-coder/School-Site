import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const WithNavbarLayout = () => (
    <>
        <Navbar />
        <Outlet />
    </>
);

const WithoutNavbarLayout = () => (
    <>
        <Outlet />
    </>
);

export { WithNavbarLayout, WithoutNavbarLayout };
