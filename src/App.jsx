import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getFood } from './redux/action/action'
import './App.css'
import Home from './components/home/Home'
import Food from './components/forms/createFood/Food'
import Cards from './components/cards/Cards'
import Register from './components/forms/createAcount/Register'
import Login from './components/forms/getAcount/Login'
import Combination from './components/forms/createCombination/Combination'
import Navbar from './components/navbar/Navbar'

function App() {

  const dispatch = useDispatch()

/// Dispatcher all data 
  useEffect(() => {
    dispatch(getFood())
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Food' element={<Food />}/>
          <Route path='/Vew/:Type' element={<Cards />}/>
          <Route path='/RegisterAcount' element={<Register />}/>
          <Route path='/LoginAcount' element={<Login />}/>
          <Route path='/Combination' element={<Combination />}/>
          {/* Rutas no existentes */}
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
