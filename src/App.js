import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Box } from '@mui/material';

const router = createBrowserRouter([
    {
        path: '/',
        element: ''
    }
])

const App = () => {
    return (
        <Box width={`400px`}>
            <RouterProvider router={router} />
        </Box>
    );
};

export default App;