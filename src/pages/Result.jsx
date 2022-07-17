import { Box, Button, CircularProgress, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmountChange, handleScoreChange } from '../config/redux/action'

const Result = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { result_score } = useSelector(state => state)

    const handleResartGame = () => {
        dispatch(handleScoreChange(0))
        dispatch(handleAmountChange(20))
        
        navigate('/setup')
    }

    return (
        <Box mt={30}>
            <Typography mb={2} variant='h4'>Your Final Score</Typography>
            <Typography mb={4} forntWeight='bold' variant='h2'>{result_score}</Typography>

            <Button 
                size='medium'
                fullWidth 
                variant='contained'
                onClick={handleResartGame}
            >
                Restart Quiz
            </Button>
        </Box>
    )
}

export default Result
