import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { decode } from 'html-entities'

import { Box, Button, Typography, CircularProgress } from '@mui/material'

import useAxios from '../config/hooks/useAxios'
import { handleScoreChange } from '../config/redux/action'

const generateRandomSeq = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
}

const Questions = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [questionIdx, setQuestionIdx] = useState(0)
    const [ansOptions, setAnsOptions] = useState([])
    const { 
        quiz_categories,
        quiz_difficulties,
        quiz_types,
        amount_numb_of_quest,
        result_score,
    } = useSelector((state) => state)
    
    let byOptionAPIUrl = `/api.php?amount=${amount_numb_of_quest}`
    if(quiz_categories) {
        byOptionAPIUrl = byOptionAPIUrl.concat(`&category=${quiz_categories}`)
    }
    if(quiz_difficulties) {
        byOptionAPIUrl = byOptionAPIUrl.concat(`&difficulty=${quiz_difficulties}`)
    }
    if(quiz_types) {
        byOptionAPIUrl = byOptionAPIUrl.concat(`&type=${quiz_types}`)
    }
    
    const { responseRecieved, loading } = useAxios({ url: byOptionAPIUrl })

    useEffect(() => {
        if(responseRecieved?.results.length) {
            const question = responseRecieved.results[questionIdx]
            let answers = [...question.incorrect_answers]
            answers.splice(generateRandomSeq(question.incorrect_answers.length), 0, question.correct_answer)

            setAnsOptions(answers)
        }
    }, [responseRecieved, questionIdx])

    if(loading) {
        return (
            <Box mt={20}>
                <CircularProgress />
            </Box>
        )
    }

    const handleChosenAnswer = (e) => {
        const question = responseRecieved.results[questionIdx]
        if(e.target.textContent === question.correct_answer) {
            dispatch(handleScoreChange(result_score + 1))
        }

        if(questionIdx + 1 < responseRecieved.results.length) {
            setQuestionIdx(questionIdx + 1)
        }
        else {
            navigate('/score')
        }
    }
    

    return (
        <Box>
            <Typography variant='h4'>Question #{questionIdx + 1}</Typography>
            <Typography mt={6}>{decode(responseRecieved.results[questionIdx].question)}</Typography>

            {
                ansOptions.map((data, id) => (
                    <Box mt={3} key={id}>
                        <Button 
                            fullWidth 
                            variant='contained' 
                            onClick={handleChosenAnswer}
                        >
                            {decode(data)}
                        </Button>
                    </Box>
                ))
            }

            <Box mt={6}>
                Score: {result_score}/{responseRecieved.results.length}
            </Box>
        </Box>
    )
}

export default Questions
