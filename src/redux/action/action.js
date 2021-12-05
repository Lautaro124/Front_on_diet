import axios from 'axios'
import { food, user, combination } from '../../routes.js'
import { GET_FOOD, POST_FOOD, POST_USER, GET_USER, POST_COMBINATION } from './constrain'

/// Function get food
export function getFood(){
  return async function (dispatch) {
    try{
      const foods = await axios.get(food)

      return dispatch({
        type: GET_FOOD,
        payload: foods.data
      })
    }
    catch(err){
      alert(err.message)
    }
  }
}

/// Function post food
export function postFood({Name, Description}){
  return async function (dispatch) {
    try{
      const foods = await axios.post(food,{Name, Description})

      console.log(foods.data)
      return dispatch({
        type: POST_FOOD,
        payload: foods.data
      })
    }
    catch(err){
      alert(err.message)
    }
  }
}


/// Function to create user account
export function createUser({firstName, lastName, mail, password, phone, adress, numeration, postalCode}) {
  return async function (dispatch) {
    try{

      // Envio de informacion a la base de datos
      const info = {firstName, lastName, mail, password, phone, adress: adress+ '-' +numeration, postalCode}
      const newUser = await axios.post(user, info)
  
      // Guardar la informacion del usuario en su propia computadora
      const save = JSON.stringify(newUser.data)
      localStorage.infoUser = save

      alert('Exitoso')
      return dispatch({
        type: POST_USER,
        payload: newUser.data
      })
    }
    catch(err){
      alert(err)
    }
  }
}


/// Function get acount
export function getAccount({mail, password, token}){
  return async function(dispatch){
    try{
      const account = await axios.get(`${user}/${mail}/${password}/${token}`)

      // Guardar la informacion del usuario en su propia computadora
      const local = localStorage && JSON.parse(localStorage.infoUser)
      const save = JSON.stringify({...local, token: account.data})
      localStorage.infoUser = save

      return dispatch({
        type: GET_USER,
        payload: {token: account.data}
      })
    }
    catch(err){
      alert(err)
    }
  }
}

// Function post combination
export function postCombination({Lunch, LunchDessert, Dinner, DinnerDessert}){
  return async function (dispatch) {
    try{
      const info = await axios.post(combination, {Lunch, LunchDessert, Dinner, DinnerDessert})
  
      return dispatch({
        type: POST_COMBINATION,
        payload: info.data
      })
    }
    catch(err){
      alert(err)
    }
  }
}