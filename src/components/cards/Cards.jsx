import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Food from './food/Food'

export default function Cards() {

  const foods = useSelector(state => state.food)
  const { Type } = useParams()
  return (
    <div>
      {/* Mapeo de informacion correspondiente */}
      {
        Type && Type === 'Food'?
          foods?.map(e => <Food Name={e.Name} Description={e.Description}/>):
          null
      }
    </div>
  )
}
