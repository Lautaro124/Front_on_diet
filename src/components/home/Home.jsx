import React from 'react'
import { Link } from 'react-router-dom'
import { viewFood, createFood, createUser, getUser, createCombination } from '../../routes'

export default function Home() {
  return (
    <div>
      <h2>Welcome home</h2>
      
      {/* Cracion de Comida */}
      <Link to={createFood}>
        <button>
          Create food 
        </button> 
      </Link>

      {/* Ver todas las comidas */}
      <Link to={viewFood}>
        <button>
          Show food
        </button> 
      </Link>

      {/* Crear usuarios */}
      <Link to={createUser}>
        <button>
          Create acount
        </button>
      </Link>

      {/* login */}
      <Link to={getUser}>
        <button>
          Login
        </button>
      </Link>

      {/* Crear combinacion */}
      <Link to={createCombination}>
        <button>
          Create combinacion
        </button>
      </Link>
    </div>
  )
}
