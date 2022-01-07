import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import {useDispatch} from 'react-redux'
import {Formik, Form} from 'formik'
import { Container, Grid, Typography } from '@mui/material'
import PasswordField from '../../formsUI/PasswordField'
import ReCAPTCHA from 'react-google-recaptcha'
import Textfield from '../../formsUI/TextField'
import SelectField from '../../formsUI/SelectField'
import DatePicker from '../../formsUI/DatePicker'
import map from 'lodash/map'
import SubmitButton from '../../formsUI/SubmitButton'

export default function RegisterForm({
	initialValue,
	fields,
	shape,
	options,
	submitText,
	submitFunc,
	captcha,
	navigate
}) {
	const reCaptcha = () => {
		console.log('Captcha realizado')
	}
	const dispatch = useDispatch()
	const captchaRef = useRef(null)
	return (
		<Container>
			<div>
				<Formik
					initialValues={initialValue}
					validationSchema={shape}
					onSubmit={values => {
						 if (!captchaRef.current.getValue()) {
								alert(
									'Se necesita el recapcha hecho para proseguir'
								)
							} else {
								dispatch(
									submitFunc({...values, phone: '+549-' + values.phone, navigate})
								)
							}
					}}
				>
					<Form>
						<Grid container spacing={2} key='mainGrid'>
							{map(fields, field => (
								<>
									{field.typography && (
										<Grid item xs={field.colSizeTypo}>
											<Typography>
												{field.typography}
											</Typography>
										</Grid>
									)}
									<Grid
										item
										xs={field.colSize}
										key={`${field.id}Grid`}
										className='field-grid'
									>
										{field.type === 'text' && (
											<Textfield
												name={field.name}
												id={field.id}
												key={`${field.id}Field`}
												label={field.label}
											/>
										)}
										{field.type === 'password' && (
											<PasswordField
												name={field.name}
												id={field.id}
												key={`${field.id}Field`}
												label={field.label}
											/>
										)}
										{field.type === 'select' && (
											<SelectField
												name={field.name}
												id={field.id}
												key={`${field.id}Select`}
												label={field.label}
												options={options}
											/>
										)}
										{field.type === 'date' && (
											<DatePicker
												name={field.name}
												id={field.id}
												key={`${field.id}DatePicker`}
												label={field.label}
											/>
										)}
										{field.type === 'textarea' && (
											<Textfield
												name={field.name}
												id={field.id}
												key={`${field.id}TextArea`}
												label={field.label}
												multiline={true}
												rows={4}
											/>
										)}
									</Grid>
								</>
							))}
						</Grid>
						<Grid item xs={12}>
							<SubmitButton className='btn-submit'>
								{submitText}
							</SubmitButton>
						</Grid>
						{captcha && (
							<div className="captcha-container">
								<ReCAPTCHA
									ref={captchaRef}
									sitekey='6Le_4E0dAAAAAOFuwAH1Xx7ZWP4cvszYTx3lis6W'
									onChange={reCaptcha}
									className='captcha'
								/>
							</div>
						)}
					</Form>
				</Formik>
			</div>
		</Container>
	)
}

RegisterForm.propTypes = {
	initialValue: PropTypes.object.isRequired,
	fields: PropTypes.array.isRequired,
	shape: PropTypes.object.isRequired,
	submitText: PropTypes.string.isRequired,
	submitFunc: PropTypes.func.isRequired,
	options: PropTypes.object,
}
