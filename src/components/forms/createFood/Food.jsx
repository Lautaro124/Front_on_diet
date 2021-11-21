import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage  } from 'formik'
import * as Yup from 'yup'
import { postFood } from '../../../redux/action/action'

export default function Food() {

  const dispatch = useDispatch()
  const initialValue = {
    Name: '',
    Description: ''
  }

  // Validador de informacion
  const shapeFood = Yup.object().shape({
    Name: Yup.string().required('Required'),
    Description: Yup.string()
  })

  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Crear Cominda</h1>
      <Formik
        initialValues = {initialValue}
        validationSchema={shapeFood}
        onSubmit={(e) => {
          dispatch(postFood(e))
        }}
      >
        <Form>
          {/* Nombre de la comida */}
          <Field name='Name' />
          <ErrorMessage name='Name'/>
          {/* Descripcion de la comida */}
          <Field name='Description' />
          <ErrorMessage name='Description'/>

          <input type='submit' placeholder='Create'/>
        </Form>
      </Formik>
    </div>
  )
}
