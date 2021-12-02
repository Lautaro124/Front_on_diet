import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getFood } from './redux/action/action'
import './App.css'
import Home from './components/home/Home'
import NewFood from './components/forms/createFood/NewFood'
import Cards from './components/cards/Cards'
import Register from './components/forms/createAcount/Register'
import Login from './components/forms/getAcount/Login'
import Combination from './components/forms/createCombination/Combination'
import Header from './components/header/Header';
import {getRoutes} from './utils';

const mainRoutes = getRoutes('mainRoutes');

function App() {

  const dispatch = useDispatch()

/// Dispatcher all data 
  useEffect(() => {
    dispatch(getFood())
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path={mainRoutes.home} element={<Home />}/>
          <Route path={mainRoutes.createFood} element={<NewFood />}/>
          <Route path={mainRoutes.food} element={<Cards />}/>
          <Route path={mainRoutes.register} element={<Register />}/>
          <Route path={mainRoutes.login} element={<Login />}/>
          <Route path={mainRoutes.createCombination} element={<Combination />}/>
          {/* Rutas no existentes */}
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
