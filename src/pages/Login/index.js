import * as Yup from 'yup'

export const loginFields = [
	{
		label: 'Email',
		placeholder: 'Email',
		type: 'text',
		id: 'mail',
		name: 'mail',
		colSize: 12,
	},
	{
		label: 'Contraseña',
		placeholder: 'Contraseña',
		type: 'password',
		id: 'password',
		name: 'password',
		colSize: 12,
	},
]

export const initialValue = {
	mail: '',
	password: '',
}

export const shapeLogin = Yup.object().shape({
	mail: Yup.string().email('Email no válido').required('Requerido'),
	password: Yup.string()
		.min(6, 'Mínimo 6 caracteres')
		.max(24, 'Máximo 24 caracteres')
		.required('Requerido'),
})
