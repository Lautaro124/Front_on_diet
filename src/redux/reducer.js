import { GET_FOOD, POST_FOOD, POST_USER, GET_USER } from './action/constrain'
import { getRoutes } from '../utils';
const mainRoutes = getRoutes('mainRoutes');

const initialState = {
	food: [],
	user: {},
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
	navigationSettings: [
		{
			name: 'myAccount',
			label: 'Mi Cuenta',
			uri: mainRoutes.user,
			id: 'myAccount',
		},
		{
			name: 'logout',
			label: 'Salir',
			uri: mainRoutes.home,
			id: 'logout',
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