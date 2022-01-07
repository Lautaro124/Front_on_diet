import React from 'react'
import { useNavigate } from "react-router-dom";
import {Container, Grid, Typography} from '@mui/material'
import RegisterForm from '../../components/forms/RegisterForm'
import CardComponent from '../../components/Card'
import {createUser} from '../../redux/action/action'
import { getRoutes } from '../../utils'
import { initialValue, shapeRegister, registerFields } from '.'

const mainRoutes = getRoutes('mainRoutes')


const Register = () => {
	const navigate = useNavigate()
	return (
		<Container my={5}>
			<Grid my={5}>
				<CardComponent
					btnText='Ya tienes cuenta? Inicia sesión'
					uri={mainRoutes.login}
					width={850}
					className='card'
				>
					<Typography variant='h3' my={2}>
						Registro
					</Typography>
					<RegisterForm
						initialValue={initialValue}
						fields={registerFields}
						shape={shapeRegister}
						submitText='Registrarse'
						submitFunc={createUser}
						navigate={navigate}
						captcha
					/>
				</CardComponent>
			</Grid>
		</Container>
	)
}

export default Register
