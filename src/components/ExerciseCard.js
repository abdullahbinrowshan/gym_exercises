import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
            <Stack direction={'row'} gap={'8px'} alignItems={'baseline'} >
                <Button
                    sx={{
                        ml: "21px", color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'
                    }}>
                    {exercise.bodyPart}
                </Button>
                <Button
                    sx={{
                        ml: "21px", color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'
                    }}>
                    {exercise.target}
                </Button>
                <Typography ml={'21px'} color={'#000'} fontWeight={'bold'} fontSize={'22px'} mt={'11px'} pb={'10px'} textTransform={'capitalize'}>
                    {exercise.name}
                </Typography>
            </Stack>
        </Link>
    )
}

export default ExerciseCard