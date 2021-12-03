import * as Yup from 'yup'

export const foodFields = [
	{
		label: 'Nombre',
		placeholder: 'Nombre',
		type: 'text',
		id: 'Name',
		name: 'Name',
		colSize: 6,
	},
	{
		label: 'Descripción',
		placeholder: 'Descripción',
		type: 'text',
		id: 'Description',
		name: 'Description',
		colSize: 6,
	},
]

export const initialValue = {
	Name: '',
	Description: '',
}

export const shapeFood = Yup.object().shape({
	Name: Yup.string().required('Requerido'),
	Description: Yup.string(),
})
