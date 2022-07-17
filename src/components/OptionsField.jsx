import { Box } from '@mui/material'
import { FormControl,InputLabel, MenuItem, Select } from '@mui/material'

import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../config/redux/action'

const OptionsField = ({ label, options }) => {

    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setValue(e.target.value)
        switch(label) {
            case 'Categories':
                dispatch(handleCategoryChange(e.target.value))
                break
            case 'Difficulties':
                dispatch(handleDifficultyChange(e.target.value))
                break
            case 'Types':
                dispatch(handleTypeChange(e.target.value))
                break
            default:
                return
        }
    }

    return (
        <Box mt={3} width='100%' >
            <FormControl fullWidth size='medium'>
                <InputLabel>{label}</InputLabel>
                <Select value={value} label={label} onChange={handleChange}>
                    {
                        options.map(({ id, name }) => (
                            <MenuItem value={id} key={id}>{name}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    )
}

export default OptionsField
