import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getFood } from './redux/action/action'
import './App.css'
import Home from './components/home/Home'

function App() {

  const dispatch = useDispatch()

  dispatch(getFood())

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
