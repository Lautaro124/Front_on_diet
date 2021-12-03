import React from 'react'
import { Button } from '@mui/material'
import { useFormikContext } from 'formik'

const SubmitButton = ({children, ...otherProps}) => {
    const { submitForm } = useFormikContext()
    
    const handleSubmit = () => submitForm()
    
    const configButton = {
        ...otherProps,
        onClick: handleSubmit,
        variant: 'contained',
        fullWidth: true
    }
    return (
        <Button
            {...configButton}
        >
            {children}
        </Button>
    )
}

export default SubmitButton