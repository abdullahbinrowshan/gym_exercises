import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from '../components/Footer';


const Main = () => {
    return (
        <div>
            <Box width={`400px`} sx={{ width: { xl: '1488px' } }} m={`auto`}>
                <Navbar />
                <Outlet />
                <Footer />
            </Box>
        </div>
    );
};

export default Main;