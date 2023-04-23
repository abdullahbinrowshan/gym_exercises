import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/exercise/:id',
                element: <ExerciseDetail />
            }
        ]
    }
])

const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;