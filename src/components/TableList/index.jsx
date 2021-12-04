import * as React from 'react'
import MaterialTable from '@material-table/core'
import {Container, Grid} from '@mui/material'
import {useDispatch} from 'react-redux'

const toolbar = {
	searchPlaceholder: 'Buscar',
	searchTooltip: 'Buscar',
}

const body = {
	addTooltip: 'Agregar',
	deleteTooltip: 'Borrar',
	emptyDataSourceMessage: 'No hay registros para mostrar',
	editTooltip: 'Editar',
	editRow: {
		deleteText: '¿Seguro desea borrar este registro?',
		cancelTooltip: 'Cancelar',
		saveTooltip: 'Guardar',
	},
}

const pagination = {
	labelRowsSelect: 'Filas',
	labelRowsPerPage: 'Filas por página',
	firstAriaLabel: 'Primera página',
	firstTooltip: 'Primera página',
	previousAriaLabel: 'Anterior',
	previousTooltip: 'Anterior',
	nextAriaLabel: 'Próxima',
	nextTooltip: 'Próxima',
	lastAriaLabel: 'Última página',
	lastTooltip: 'Última página',
}

const TableList = ({
	list,
	columns,
	tableTitle,
	onSubmit,
	onUpdate,
	onDelete,
}) => {
	const dispatch = useDispatch()
	const [tableData, setTableData] = React.useState([])
	React.useEffect(() => {
		setTableData(list)
	}, [list, tableData])

	return (
		<Container>
			<Grid>
				<MaterialTable
					columns={columns}
					editable={{
						onRowAdd: newRow =>
							new Promise(async (resolve, reject) => {
								await dispatch(onSubmit(newRow))
								resolve()
							}),
						onRowUpdate: newRow =>
							new Promise(async (resolve, reject) => {
								await dispatch(onUpdate(newRow))
								resolve()
							}),
						onRowDelete: selectedRow =>
							new Promise(async (resolve, reject) => {
								await dispatch(onDelete(selectedRow))
								resolve()
							}),
					}}
					data={tableData}
					localization={{
						toolbar,
						pagination,
						body,
						header: {actions: 'Acciones'},
					}}
					title={tableTitle}
					options={{
						searchAutoFocus: true,
						pageSizeOptions: [10, 20, 50],
						pageSize: 10,
						draggable: false,
						addRowPosition: 'first',
						actionsColumnIndex: -1,
						headerStyle: {background: '#E2ECE9', fontSize: '1.1em'},
					}}
				/>
			</Grid>
		</Container>
	)
}

export default TableList
