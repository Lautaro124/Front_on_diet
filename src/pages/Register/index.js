import * as Yup from 'yup'

export const registerFields = [
	{
		label: 'Nombre',
		placeholder: 'Nombre',
		type: 'text',
		id: 'firstName',
		name: 'firstName',
		colSize: 6,
	},
	{
		label: 'Apellido',
		placeholder: 'Apellido',
		type: 'text',
		id: 'lastName',
		name: 'lastName',
		colSize: 6,
	},
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
	{
		label: 'Teléfono',
		placeholder: 'Teléfono',
		type: 'text',
		id: 'phone',
		name: 'phone',
		colSize: 12,
	},
	{
		label: 'Dirección',
		placeholder: 'Dirección',
		type: 'text',
		id: 'adress',
		name: 'adress',
		colSize: 6,
	},
	{
		label: 'Altura',
		placeholder: 'Altura',
		type: 'text',
		id: 'numeration',
		name: 'numeration',
		colSize: 6,
	},
	{
		label: 'Locación',
		placeholder: 'Locación',
		type: 'text',
		id: 'location',
		name: 'location',
		colSize: 6,
	},
	{
		label: 'Código Postal',
		placeholder: 'Código Postal',
		type: 'text',
		id: 'postalCode',
		name: 'postalCode',
		colSize: 6,
	},
]

export const initialValue = {
	firstName: '',
	lastName: '',
	mail: '',
	password: '',
	phone: '',
	adress: '',
	numeration: '',
	location: '',
	postalCode: '',
}

export const shapeRegister = Yup.object().shape({
	firstName: Yup.string()
		.matches(
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
			'No se permiten numeros'
		)
		.min(3, 'Ingrese un minimo de 3 caracteres')
		.required('Requerido'),
	lastName: Yup.string()
		.matches(
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
			'No se permiten numeros'
		)
		.min(3, 'Ingrese un minimo de 3 caracteres')
		.required('Requerido'),
	mail: Yup.string().email('Mail no valido').required('Requerido'),
	password: Yup.string()
		.min(6, 'Ingrese mas de 6 caracteres')
		.required('Requerido'),
	phone: Yup.string()
		.matches(
			/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g,
			'Ingrese un numero de celular'
		)
		.required('Requerido'),
	adress: Yup.string()
		.matches(
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
			'No se permiten numeros'
		)
		.required('Requerido'),
	numeration: Yup.number()
		.min(100, 'El numero tiene que tener 3 digitos como minimo')
		.max(9999, 'La numeracion no puede tener mas de 4 digitos')
		.required('Requerido'),
	location: Yup.string()
		.matches(
			/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
			'No se permiten numeros'
		)
		.required('Requerido'),
	postalCode: Yup.string()
		.matches(/^[0-9]+$/, 'Deben ser números')
		.min(4, 'El código postal debe tener 4 números')
		.max(4, 'El código postal debe tener 4 números')
		.required('Requerido'),
})
