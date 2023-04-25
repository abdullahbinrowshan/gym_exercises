import { Box } from '@mui/material';
import React, { createContext, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

export const CategoryContext = createContext('')

const Home = () => {
    const [bodyPart, setBodyPart] = useState('all');
    const [exercises, setExercises] = useState([]);
    return (
        <CategoryContext.Provider value={{ bodyPart, setBodyPart, exercises, setExercises }}>
            <Box>
                <HeroBanner />
                <SearchExercises />
                <Exercises />
            </Box>
        </CategoryContext.Provider>
    );
};

export default Home;