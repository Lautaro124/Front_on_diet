import React from 'react';
import {
	List,
	ListItem,
	ListItemText,
	Divider,
	Typography,
	Box,
} from '@mui/material';
import {useSelector} from 'react-redux';
import get from 'lodash/get';

export default function ListItems({handleNavMenuClick, activeTab}) {
	const navigationHeader = useSelector(state => state.navigationHeader);
	// Estilos de la lista
	const style = {
    width: '35vh',
    height: '100%',
    paddingTop: '0',
		bgcolor: 'background.paper',
		gap: 3,
	};

	// Variable local la cual contiene la informacion del usuario
	let local = null;
	if (get(localStorage, 'infoUser')) {
		return (local = JSON.parse(get(localStorage, 'infoUser')));
	}

	return (
		<List
			className='nav-list'
			sx={style}
			component='nav'
			aria-label='mailbox folders'
		>
			{local && (
				<Box>
					<Typography variant='span'>
						{get(localStorage, 'firstName')}
					</Typography>
					<Typography variant='span'>
						{' '}
						{get(localStorage, 'lastName')}
					</Typography>
				</Box>
			)}
			{navigationHeader.map(page => (
				<>
					<Divider />
					<ListItem
						button
						onClick={() => handleNavMenuClick(get(page, 'uri'))}
					>
						<ListItemText
							title={get(page, 'label')}
							primary={get(page, 'label')}
							key={get(page, 'name')}
							className={
								page.uri === activeTab ? 'active link' : ''
							}
						/>
					</ListItem>
					<Divider />
				</>
			))}
		</List>
	);
}
