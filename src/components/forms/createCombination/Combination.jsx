import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form, ErrorMessage  } from 'formik'
import * as Yup from 'yup'

export default function Combination() {

  const initialValue = {
    Lunch: '', 
    LunchDessert: '', 
    Dinner: '', 
    DinnerDessert: ''
  }
  
  const foods = useSelector( state => state.food)

  const shapeYup = Yup.object().shape({
    Lunch: Yup.string().required('Requerido'), 
    LunchDessert: Yup.string(), 
    Dinner: Yup.string().required('Requerido'),
    DinnerDessert: Yup.string(), 
  })

  return (
    <div>
      <Link to='/'>Home</Link>
      <Formik 
        initialValues={initialValue}
        validationSchema={shapeYup}
        onSubmit={(e) => {
          console.log(e)
        }}>
        <Form>
          {/* Almuerzo */}
          <select name='Lunch' defaultValue='None'>
            {
              foods?.map(food => <option value={food.Name} >{food.Name}</option>)
            }
          </select>
          <ErrorMessage name='Lunch'/>

          {/* Postre de almuerzo */}
          <select name='LunchDessert' defaultValue='None'>
            {
              foods?.map(food => <option value={food.Name} >{food.Name}</option>)
            }
          </select>
          <ErrorMessage name='LunchDessert'/>

          {/* Cena */}
          <select name='Dinner' defaultValue='None'>
            {
              foods?.map(food => <option value={food.Name} >{food.Name}</option>)
            }
          </select>
          <ErrorMessage name='Dinner'/>

          {/* Postre de cena */}
          <select name='DinnerDessert' defaultValue='None'>
            {
              foods?.map(food => <option value={food.Name} >{food.Name}</option>)
            }
          </select>
          <ErrorMessage name='DinnerDessert'/>

          <button type='submit'>Send</button>
        </Form>
      </Formik>
    </div>
  )
}
