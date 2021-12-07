import React from 'react'
import {Container, Grid, Typography} from '@mui/material'
import FormComponent from '../../components/forms/FormComponent'
import CardComponent from '../../components/Card'
import { getAccount } from '../../redux/action/action'
import { getRoutes } from '../../utils'
import {loginFields, shapeLogin, initialValue} from '.'

const mainRoutes = getRoutes('mainRoutes')

const Login = () => {
	return (
		<Container>
			<Grid my={5}>
				<CardComponent
					btnText='Registrate'
					uri={mainRoutes.register}
					width={700}
					className='card'
				>
					<Typography variant='h3' my={3}>
						Iniciar Sesión
					</Typography>
					<FormComponent
						initialValue={initialValue}
						fields={loginFields}
						shape={shapeLogin}
						submitText='Iniciar'
						submitFunc={getAccount}
					/>
				</CardComponent>
			</Grid>
		</Container>
	)
}

export default Login
