import React, {useState} from 'react'
import {useField} from 'formik'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const PasswordField = ({ name, ...otherProps }) => {
    const [showPassword, setShowPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword(!showPassword)
	const handleMouseDownPassword = () => setShowPassword(!showPassword)
	const [field, meta] = useField(name)
	const configTextfield = {
		...field,
		...otherProps,
		fullWidth: true,
		variant: 'outlined',
	}
	if (meta && meta.touched && meta.error) {
		configTextfield.error = true
		configTextfield.helperText = meta.error
    }
    
	return (
		<TextField
			{...configTextfield}
			type={showPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton
							aria-label='toggle password visibility'
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
}

export default PasswordField
