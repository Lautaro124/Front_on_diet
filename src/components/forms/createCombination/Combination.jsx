import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { postCombination } from '../../../redux/action/action'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage  } from 'formik'
import * as Yup from 'yup'

export default function Combination() {

  const dispatch = useDispatch()
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

  const submitted = (e)=> {
    const combination = {
      Lunch: foods.find(data => data.Name === e.Lunch), 
      LunchDessert: foods.find(data => data.Name === e.LunchDessert), 
      Dinner: foods.find(data => data.Name === e.Dinner), 
      DinnerDessert: foods.find(data => data.Name === e.DinnerDessert)
    }

    console.log(combination)
    if(!combination.LunchDessert && !combination.DinnerDessert){
      dispatch(postCombination({
        Lunch: combination.Lunch._id,
        Dinner: combination.Dinner._id, 
      }))
    }else if(combination.LunchDessert && !combination.DinnerDessert){
      dispatch(postCombination({
        Lunch: combination.Lunch._id,
        LunchDessert: combination.LunchDessert._id,
        Dinner: combination.Dinner._id, 
      }))
    }else if(!combination.LunchDessert && combination.DinnerDessert){
      dispatch(postCombination({
        Lunch: combination.Lunch._id,
        Dinner: combination.Dinner._id, 
        DinnerDessert: combination.DinnerDessert._id,
      }))
    }else{
      dispatch(postCombination({
        Lunch: combination.Lunch._id,
        LunchDessert: combination.LunchDessert._id,
        Dinner: combination.Dinner._id, 
        DinnerDessert: combination.DinnerDessert._id,
      }))
    }
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <Formik 
        initialValues={initialValue}
        validationSchema={shapeYup}
        onSubmit={(e) => {
          submitted(e)
        }}>
        <Form>
          {/* Almuerzo */}
          <label>Almuerzo</label>
          <Field name='Lunch' list='Luncher'/>
          <ErrorMessage name='Lunch'/>

          {/* Postre de almuerzo */}
          <label>Postre de almuerzo</label>
          <Field name='LunchDessert' list='Luncher'/>
          <ErrorMessage name='LunchDessert'/>

          {/* Cena */}
          <label>Cena</label>
          <Field name='Dinner' list='Luncher'/>
          <ErrorMessage name='Dinner'/>

          {/* Postre de cena */}
          <label>Postre de cena</label>
          <Field name='DinnerDessert' list='Luncher'/>
          <ErrorMessage name='DinnerDessert'/>

          {/* Lista de comidas */}
          <datalist id='Luncher'>
            {
              foods?.map(food => <option key={food._id} value={food.Name} />)
            }
          </datalist>
          <button type='submit'>Send</button>
        </Form>
      </Formik>

    </div>
  )
}
