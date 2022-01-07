import { GET_FOOD, POST_FOOD, POST_USER, GET_USER, LOGOUT } from './action/constrain'
import { getRoutes } from '../utils';
const mainRoutes = getRoutes('mainRoutes');

const initialState = {
	food: [],
  user: {},
  isAuthenticate: false,
	navigationHeader: [
		{
			name: 'home',
			label: 'Inicio',
			uri: mainRoutes.home,
			id: 'home',
		},
		{
			name: 'editFood',
			label: 'Editar Comidas',
			uri: mainRoutes.editFood,
			id: 'createFood',
		},
		{
			name: 'food',
			label: 'Ver Comidas',
			uri: mainRoutes.food,
			id: 'food',
		},
		{
			name: 'createCombinations',
			label: 'Crear Combinaciones',
			uri: mainRoutes.createCombination,
			id: 'createCombinations',
		},
	],
};

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
        user: action.payload,
        isAuthenticate: true
      }
    
    case GET_USER:
      return{
        ...state,
        user: action.payload,
        isAuthenticate: true
      }
    case LOGOUT:
      return{
        ...state,
        user: {},
        isAuthenticate: false
      }

    default:
      return state
  }
}
