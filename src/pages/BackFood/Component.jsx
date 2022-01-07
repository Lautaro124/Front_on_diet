import React, {useEffect} from 'react'
import {postFood, getFood, putFood, deleteFood} from '../../redux/action/action'
import {useSelector, useDispatch} from 'react-redux'
import TableList from '../../components/TableList'
import {Container, Grid} from '@mui/material'


const columns = [
	{title: 'Nombre', field: 'Name', align: 'left', sorting: false},
	{
		title: 'Descripción',
		field: 'Description',
		sorting: false,
		align: 'left',
		emptyValue: () => <em>Sin Descripción</em>,
	},
]

const BackFood = () => {
	const foodList = useSelector(state => state.food)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getFood())
	}, [dispatch])

	return (
		<Container className="tablelist-container">
			<Grid>
				<TableList
					list={foodList}
					columns={columns}
					tableTitle='Editar Comidas'
					onSubmit={postFood}
					onUpdate={putFood}
					onDelete={deleteFood}
				/>
			</Grid>
		</Container>
	)
}

export default BackFood
