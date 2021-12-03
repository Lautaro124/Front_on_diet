import React from 'react'
import FormComponent from '../../components/forms/Form'
import { postFood } from '../../redux/action/action'
import { initialValue, shapeFood, foodFields } from '.'

const BackFood = () => {
	return (
		<div>
			<h1>Editar Comidas</h1>
			<FormComponent
				fields={foodFields}
				initialValue={initialValue}
				shape={shapeFood}
				submitText="Agregar"
				submitFunc={postFood}
			/>
		</div>
	)
}

export default BackFood
