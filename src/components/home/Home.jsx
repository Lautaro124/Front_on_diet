import React from 'react'
import { Link } from 'react-router-dom'
import { viewFood, createFood } from '../../routes'

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
    </div>
  )
}
