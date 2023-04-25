import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollBar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    // console.log(targetMuscleExercises);
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant='h3' mb={5}>
                Exercises that target the same muscle group
            </Typography>
            <Stack direction={'row'} sx={{ p: '20px', position: 'relative' }}>
                {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
            </Stack>
            <Typography variant='h3' mb={5}>
                Exercises that target the same equipment
            </Typography>
            <Stack direction={'row'} sx={{ p: '20px', position: 'relative' }}>
                {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
            </Stack>
        </Box>
    )
}

export default SimilarExercises