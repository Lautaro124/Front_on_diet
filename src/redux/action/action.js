import axios from 'axios'
import { food, user } from '../../routes.js'
import { GET_FOOD, POST_FOOD, POST_USER, GET_USER } from './constrain'

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
export function createUser({firstName, lastName, mail, password, phone, adress, numeration}) {
  return async function (dispatch) {
    try{

      // Envio de informacion a la base de datos
      const info = {firstName, lastName, mail, password, phone, adress: adress+ '-' +numeration}
      await axios.post(user, info)
  
      // Guardar la informacion del usuario en su propia computadora
      const save = JSON.stringify({firstName, lastName, mail, password, phone, adress, numeration})
      localStorage.infoUser = save

      alert('Exitoso')
      return dispatch({
        type: POST_USER,
        payload: {mail}
      })
    }
    catch(err){
      console.error(err)
    }
  }
}


/// Function get acount
export function getAccount({mail, password}){
  return async function(dispatch){
    try{
      const account = await axios.get(user, {mail, password})

      // Guardar la informacion del usuario en su propia computadora
      const save = JSON.stringify(account.data)
      localStorage.infoUser = save

      return dispatch({
        type: GET_USER,
        payload: {mail: account.data.mail}
      })
    }
    catch(err){
      console.error(err)
    }
  }
}