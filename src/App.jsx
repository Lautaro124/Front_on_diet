import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getFood } from './redux/action/action'
import './App.css'
import Home from './components/home/Home'
import Food from './components/forms/createFood/Food'
import Cards from './components/cards/Cards'

function App() {

  const dispatch = useDispatch()

/// Dispatcher all data 
  useEffect(() => {
    dispatch(getFood())
  },[dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Food' element={<Food />}/>
          <Route path='/Vew/:Type' element={<Cards />}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
