import { FormControl, TextField, Box } from '@mui/material'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../config/redux/action'

const TextsField = () => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(handleAmountChange(e.target.value))
    }

    return (
        <div>
            <Box mt={3} width='100%'>
                <FormControl fullWidth size='small'>
                    <TextField
                        onChange={handleChange}
                        variant='outlined'
                        label='Amount Number of Questions'
                        size='medium'
                        type='number'
                    />
                </FormControl>
            </Box>
        </div>
    )
}

export default TextsField
