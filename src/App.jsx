import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {getFood} from './redux/action/action'
import './App.css'
import Home from './components/home/Home'
import Cards from './components/cards/Cards'
import Register from './components/forms/createAcount/Register'
import Login from './components/forms/getAcount/Login'
import Combination from './components/forms/createCombination/Combination'
import Header from './components/header/Header'
import BackFood from './pages/BackFood/Component'
import {getRoutes} from './utils'
import {Container} from '@mui/material'
import {
	ThemeProvider,
	createTheme,
	responsiveFontSizes,
} from '@mui/material/styles'

let theme = createTheme()
theme = responsiveFontSizes(theme)

const mainRoutes = getRoutes('mainRoutes')

function App() {
	const dispatch = useDispatch()

	/// Dispatcher all data
	useEffect(() => {
		dispatch(getFood())
	}, [dispatch])

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Container disableGutters maxWidth='xxl' className='App'>
					<Header />
					<main>
						<Routes>
							<Route path={mainRoutes.home} element={<Home />} />
							<Route
								path={mainRoutes.editFood}
								element={<BackFood />}
							/>
							<Route path={mainRoutes.food} element={<Cards />} />
							<Route
								path={mainRoutes.register}
								element={<Register />}
							/>
							<Route
								path={mainRoutes.login}
								element={<Login />}
							/>
							<Route
								path={mainRoutes.createCombination}
								element={<Combination />}
							/>
							{/* Rutas no existentes */}
							<Route path='*' element={<h1>Not Found</h1>} />
						</Routes>
					</main>
				</Container>
			</ThemeProvider>
		</BrowserRouter>
	)
}

export default App
