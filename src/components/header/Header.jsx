import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import ListItems from '../navbar/listItems/ListItems';
import { getRoutes } from '../../utils';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import get from 'lodash/get'

const mainRoutes = getRoutes('mainRoutes');

const Header = props => {
    const navigate = useNavigate()
	const location = useLocation()
	const navigationHeader = useSelector(state => state.navigationHeader);
	const navigationSettings = useSelector(state => state.navigationSettings);
	const [open, setOpen] = React.useState(false);

	const [activeTab, setActiveTab] = React.useState(location.pathname);
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = event => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = event => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
    };
    
    const handleNavMenuClick = (uri, type) => {
        if (type === "nav") {
            handleCloseNavMenu();
		}
		else {
            handleCloseUserMenu();
		}
		setOpen(false)
        setActiveTab(uri)
        return navigate(uri)

    }

	return (
		<header>
			<AppBar position='static' className='navbar'>
				<Container maxWidth='xxl'>
					<Toolbar disableGutters>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							className='nav-burger'
							aria-label='menu'
							sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
						>
							<MenuIcon onClick={() => setOpen(true)} />
							<SwipeableDrawer
								anchor='left'
								open={open}
								onOpen={() => setOpen(true)}
								onClose={() => setOpen(false)}
							>
								<ListItems
									handleNavMenuClick={handleNavMenuClick}
									activeTab={activeTab}
								/>
							</SwipeableDrawer>
						</IconButton>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{mr: 2, display: {xs: 'none', md: 'flex'}}}
							onClick={() => handleNavMenuClick(mainRoutes.home)}
							className='navbar-logo'
							title='Inicio'
						>
							On Diet
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: {xs: 'flex', md: 'none'},
							}}
						>
							<IconButton
								size='large'
								aria-label='account of current user'
								aria-controls='menu-appbar'
								aria-haspopup='true'
								className='nav-burger'
								onClick={handleOpenNavMenu}
								color='inherit'
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id='menu-appbar'
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: {xs: 'block', md: 'none'},
								}}
							>
								{navigationHeader.map(page => (
									<MenuItem
										key={get(page, 'name')}
										onClick={() =>
											handleNavMenuClick(
												get(page, 'uri'),
												'nav'
											)
										}
									>
										<Typography
											textAlign='center'
											className={
												get(page, 'uri') === activeTab
													? 'active'
													: ''
											}
											title={get(page, 'label')}
										>
											{get(page, 'label')}
										</Typography>
									</MenuItem>
								))}
								<MenuItem
									onClick={() =>
										handleNavMenuClick(
											mainRoutes.login,
											'nav'
										)
									}
								>
									<Typography
										textAlign='center'
										className={
											mainRoutes.login === activeTab
												? 'active'
												: ''
										}
									>
										Iniciar Sesión
									</Typography>
								</MenuItem>
								<MenuItem
									onClick={() =>
										handleNavMenuClick(
											mainRoutes.register,
											'nav'
										)
									}
								>
									<Typography
										textAlign='center'
										className={
											mainRoutes.register === activeTab
												? 'active'
												: ''
										}
									>
										Registrarse
									</Typography>
								</MenuItem>
							</Menu>
						</Box>

						{/* Despliegue de menu hamnburguesa */}
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{
								flexGrow: 1,
								display: {xs: 'flex', md: 'none', justifyContent:'center'},
							}}
							onClick={() => handleNavMenuClick(mainRoutes.home)}
							className='navbar-logo'
						>
							On Diet
						</Typography>

						{/* <Box
							sx={{
								flexGrow: 1,
								display: {
									xs: 'flex',
									justifyContent: 'flex-end',
								},
							}}
						>
							<Tooltip title='Opciones de Usuario'>
								<IconButton
									onClick={handleOpenUserMenu}
									sx={{p: 0}}
								>
									<Avatar
										alt='Opciones de Usuario'
										src='/static/images/avatar/2.jpg'
									/>
								</IconButton>
							</Tooltip>
							<Menu
								sx={{mt: '45px'}}
								id='menu-appbar'
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{navigationSettings.map(page => (
									<MenuItem
										key={get(page, 'name')}
										onClick={() =>
											handleNavMenuClick(get(page, 'uri'))
										}
									>
										<Typography
											title={get(page, 'label')}
											textAlign='center'
											className={
												get(page, 'uri') === activeTab
													? 'active'
													: ''
											}
										>
											{get(page, 'label')}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box> */}
						<Box
						sx={{
							flexGrow: 1,
							display: {
								xs: 'none',
								md: 'flex',
								justifyContent: 'flex-end',
							},
						}}
					>
						<Button
							onClick={() => handleNavMenuClick(mainRoutes.login)}
							sx={{m: 2, color: 'white', display: 'block'}}
							color='secondary'
							className='btn-login'
							variant='contained'
						>
							Iniciar
						</Button>
						<Button
							onClick={() =>
								handleNavMenuClick(mainRoutes.register)
							}
							sx={{my: 2, color: 'white', display: 'block'}}
								color='primary'
								className="btn-register"
							variant='contained'
						>
							Registrar
						</Button>
					</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</header>
	);
};
export default Header;
