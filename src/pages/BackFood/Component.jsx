import React, {useEffect} from 'react'
import {postFood, getFood, putFood, deleteFood} from '../../redux/action/action'

import {useSelector, useDispatch} from 'react-redux'
import TableList from '../../components/TableList'
import {Container, Grid, Box} from '@mui/material'

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
		<Container>
			<Box sx={{ overflow: 'auto'}}>
				<Grid>
					<TableList
						list={foodList}
						columns={columns}
						tableTitle='Editar tus comidas'
						onSubmit={postFood}
						onUpdate={putFood}
						onDelete={deleteFood}
					/>
				</Grid>
			</Box>
		</Container>
	)
}

export default BackFood
