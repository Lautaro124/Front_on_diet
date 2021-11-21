import axios from 'axios'
import { food } from '../../routes.js'
import { GET_FOOD, POST_FOOD } from './constrain'

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