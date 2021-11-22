import { GET_FOOD, POST_FOOD, POST_USER, GET_USER } from './action/constrain'

const initialState = {
  food: [],
  user: {}
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case GET_FOOD:
      return {
        ...state,
        food: action.payload
      }

    case POST_FOOD:
      return{
        ...state,
        food: [...state.food, action.payload]
      }
    
    case POST_USER:
      return{
        ...state,
        user: action.payload
      }
    
    case GET_USER:
      return{
        ...state,
        user: action.payload
      }

    default:
      return state
  }
}