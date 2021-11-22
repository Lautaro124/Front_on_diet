import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage  } from 'formik'
import * as Yup from 'yup'
import { getAccount } from '../../../redux/action/action'

export default function Login() {

  const dispatch = useDispatch()
  const initialValue = {
    mail: '',
    password: ''
  }

  const shapeYoup = Yup.object().shape({
    mail: Yup.string().email('No es valido').required('Requerido'),
    password: Yup.string().required('Requerido')
  })
  
  return (
    <div>
      <Link to='/'>Home</Link>
      <Formik
        initialValues={initialValue}
        validationSchema={shapeYoup}
        onSubmit={(e)=> {
          dispatch(getAccount(e))
        }}
      >
        <Form>
          {/* Mail */}
          <label>mail</label>
          <Field name='mail'/>
          <ErrorMessage name='mail'/>

          {/* Contraseña */}
          <label>Constraseña</label>
          <Field name='password'/>
          <ErrorMessage name='password'/>

          <button type='submit'>Iniciar secion</button>
        </Form>
      </Formik>
    </div>
  )
}
