import { GET_FOOD, POST_FOOD } from './action/constrain'

const initialState = {
  food: []
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
    default:
      return state
  }
}