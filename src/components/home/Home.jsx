import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>Welcom home</h2>
      <Link to='/Food'>
        <button>
          Create food 
        </button> 
      </Link>
    </div>
  )
}
