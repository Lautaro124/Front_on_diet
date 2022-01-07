import axios from 'axios'
import { food, user, combination, changed, deleted, login } from '../../routes.js'
import { GET_FOOD, POST_FOOD, POST_USER, GET_USER, POST_COMBINATION, LOGOUT } from './constrain'
import {getRoutes} from '../../utils'
const mainRoutes = getRoutes('mainRoutes')

/// Function get food
export function getFood(){
  return async function (dispatch) {
    try {
      const foods = await axios.get(food)
      
      return await dispatch({
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
    try {
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

/// Function put food
export function putFood({Name, Description, _id}){
  return async function (dispatch) {
    try {
      
      await axios.put(changed,{Name, Description, _id})
      
      return dispatch(getFood())
    }
    catch(err){
      alert(err.message)
    }
  }
}

/// Function delete food
export function deleteFood({_id}){
  return async function (dispatch) {
    try {

      await axios.delete(deleted, {data: { _id }})
      
      return dispatch(getFood())
    }
    catch(err){
      alert(err.message)
    }
  }
}


/// Function to create user account
export function createUser({
	firstName,
	lastName,
	mail,
	password,
	phone,
	adress,
	numeration,
	postalCode,
	navigate,
}) {
	return async function (dispatch) {
		try {
			// Envio de informacion a la base de datos
			const info = {
				firstName,
				lastName,
				mail,
				password,
				phone,
				adress: adress + "-" + numeration,
				postalCode,
			}
			const newUser = await axios.post(user, info);

			// Guardar la informacion del usuario en su propia computadora
			const save = JSON.stringify(newUser.data);
			localStorage.infoUser = save

			navigate(mainRoutes.home)

			return dispatch({
				type: POST_USER,
				payload: newUser.data,
			})
		} catch (err) {
			alert(err);
		}
	};
}


/// Function get acount
export function getAccount({values:{mail, password}, navigate}){
  return async function(dispatch){
    try{
      const account = await axios.post(login, {mail, password})

      //Guardar la informacion del usuario en su propia computadora
      const save = JSON.stringify(account.data)

      localStorage.infoUser = save
      navigate(mainRoutes.home)
      return dispatch({
        type: GET_USER,
        payload: account.data
      })
    }
    catch(err){
      alert(err)
    }
  }
}

export function logout({navigate}){
  return async function(dispatch){
    try{
      localStorage.removeItem('infoUser')
      navigate(mainRoutes.home)
      return dispatch({
        type: LOGOUT
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