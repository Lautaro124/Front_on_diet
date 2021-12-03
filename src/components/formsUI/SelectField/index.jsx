import React from 'react'
import PropTypes from 'prop-types'
import {TextField, MenuItem} from '@mui/material'
import {useField, useFormikContext} from 'formik'
import map from 'lodash/map'

const SelectField = ({name, options, ...otherProps}) => {
	const {setFieldValue} = useFormikContext()
	const [field, meta] = useField(name)

	const handleChange = e => {
		const {value} = e.target
		setFieldValue(name, value)
	}
	const configSelect = {
		...field,
		...otherProps,
		select: true,
		variant: 'outlined',
		fullWidth: true,
		onChange: handleChange,
	}

	if (meta && meta.touched && meta.error) {
		configSelect.error = true
		configSelect.helperText = meta.error
	}
	return (
		<TextField {...configSelect}>
			{map(Object.keys(options), (item, index) => {
				return (
					<MenuItem key={index} value={item}>
						{options[item]}
					</MenuItem>
				)
			})}
		</TextField>
	)
}

export default SelectField

SelectField.propTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.object.isRequired,
	otherProps: PropTypes.object.isRequired,
}
