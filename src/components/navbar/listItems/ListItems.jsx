import React from 'react'
import {
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography,
	Box,
} from '@mui/material'
import {useSelector} from 'react-redux'
import PropTypes from 'prop-types'
import get from 'lodash/get'
import map from 'lodash/map'

export default function ListItems({handleNavMenuClick, activeTab}) {
	const navigationHeader = useSelector(state => state.navigationHeader)
	// Estilos de la lista
	const style = {
		width: '35vh',
		height: '100%',
		paddingTop: '0',
		bgcolor: 'background.paper',
		gap: 3,
	}

	// Variable local la cual contiene la informacion del usuario
	let local = null
	if (get(localStorage, 'infoUser')) {
		return (local = JSON.parse(get(localStorage, 'infoUser')))
	}

	return (
		<List
			key='nav-list'
			className='nav-list'
			sx={style}
			component='nav'
			aria-label='mailbox folders'
		>
			{local && (
				<Box key='user-info'>
					<Typography variant='span'>
						{get(localStorage, 'firstName')}
					</Typography>
					<Typography variant='span'>
						{' '}
						{get(localStorage, 'lastName')}
					</Typography>
				</Box>
			)}
			{map(navigationHeader, page => (
				<>
					<Divider key={`${get(page, 'id')}Divider`} />
					<ListItem
						key={`${get(page, 'id')}ListItem`}
						button
						onClick={() => handleNavMenuClick(get(page, 'uri'))}
					>
						<ListItemText
							key={`${get(page, 'id')}Text`}
							title={get(page, 'label')}
							primary={get(page, 'label')}
							className={
								page.uri === activeTab ? 'active link' : ''
							}
						/>
					</ListItem>
					<Divider />
				</>
			))}
		</List>
	)
}

ListItems.propTypes = {
	handleNavMenuClick: PropTypes.func.isRequired,
	activeTab: PropTypes.string.isRequired
}