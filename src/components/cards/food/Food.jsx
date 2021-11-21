import React from 'react'

export default function Food({Name, Description}) {
  return (
    <div>
      <h4>{Name}</h4>
      <p>{Description}</p>
    </div>
  )
}