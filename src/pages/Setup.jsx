import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import OptionsField from "../components/OptionsField"
import TextsField from "../components/TextsField"
import useAxios from '../config/hooks/useAxios'
import { LogoutButton } from './Auth'

const Setup = () => {
    const navigate = useNavigate()

    const { responseRecieved, errorRecieved, loading } = useAxios({ url: '/api_category.php'})
    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }
    if(errorRecieved) {
        return (
            <Typography mt={30} variant='h5'>
                Something went wrong. 😟
            </Typography>
        )
    }

    const difficultyLevels = [
        {
            id: 'easy',
            name: 'Easy'
        },
        {
            id: 'medium',
            name: 'Medium'
        },
        {
            id: 'hard',
            name: 'Hard'
        },
    ]

    const triviaTypes = [
        {
            id: 'multiple',
            name: 'Multiple Choises'
        },
        {
            id: 'boolean',
            name: 'True/ False'
        },
    ]
    
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/questions')
    }

    return ( 
        <>
            <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
            <form onSubmit={handleSubmit}>
                <OptionsField label="Categories" options={responseRecieved.trivia_categories}/>
                <OptionsField label="Difficulties" options={difficultyLevels}/>
                <OptionsField label="Types" options={triviaTypes}/>
                <TextsField />

                <Box mt={3} width='100%'>
                    <Button fullWidth variant='contained' size='medium' type='submit'>
                        Start Quiz
                    </Button>
                    <LogoutButton />
                </Box>
            </form>
        </>
    )
}

export default Setup
