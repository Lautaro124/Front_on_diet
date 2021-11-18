import axios from 'axios'
import { food } from '../../routes.js'
import { GET_FOOD } from './constrain'

/// Function get food
export function getFood(){
  return async function (dispatch) {
    try{
      const foods = await axios.get(food)

      console.log('food')
      
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