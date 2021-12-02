import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage  } from 'formik'
import * as Yup from 'yup'
import ReCAPTCHA from 'react-google-recaptcha'
import { createUser } from '../../../redux/action/action'

export default function Register() {

  const dispatch = useDispatch()
  const captcha = useRef(null)
  const initialValue = {
    firstName: '', 
    lastName: '', 
    mail: '',
    password: '', 
    phone: '', 
    adress: '',
    numeration: '',
    location: ''
  }

  const reCaptcha = () => {
    console.log('Captcha realizado')
  }
  const shapeYup = Yup.object().shape({
    firstName: Yup.string()
    .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, 'No se permiten numeros')
    .min(3, 'Ingrese un minimo de 3 caracteres')
    .required('Requerido'),
    lastName: Yup.string()
    .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, 'No se permiten numeros')
    .min(3, 'Ingrese un minimo de 3 caracteres')
    .required('Requerido'),
    mail: Yup.string().email('Mail no valido').required('Requerido'),
    password: Yup.string().min(6,'Ingrese mas de 6 caracteres').required('Requerido'),
    phone: Yup.string()
    .matches(/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g, 'Ingrese un numero de celular')
    .required('Requerido'),
    adress: Yup.string()
    .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, 'No se permiten numeros')
    .required('Requerido'),
    numeration: Yup.number()
    .min(100,'El numero tiene que tener 3 digitos como minimo')
    .max(9999, 'La numeracion no puede tener mas de 4 digitos').required('Requerido'),
    location: Yup.string()
    .matches(/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u, 'No se permiten numeros')
    .required('Requerido')
  })

  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Crear cuenta</h1>

      <Formik
        initialValues={initialValue}
        validationSchema={shapeYup}
        onSubmit={(e) => {
          if(!captcha.current.getValue()) {
            alert('Se necesita el recapcha hecho para proseguir')
          }
          else{
            dispatch(createUser({...e, phone: '+549-' + e.phone}))
          }
        }}
      >
        <Form>
          {/* Nombres*/}
          <label>Nombre</label>
          <Field name='firstName'/>
          <ErrorMessage name='firstName'/>
          <label>Apellido</label>
          <Field name='lastName'/>
          <ErrorMessage name='lastName'/>

          {/* Mail */}
          <label>mail</label>
          <Field name='mail'/>
          <ErrorMessage name='mail'/>
          
          {/* Direccion */}
          <label>Calle</label>
          <Field name='adress'/>
          <ErrorMessage name='adress'/>
          <label>Numeracion</label>
          <Field name='numeration' type='number'/>
          <ErrorMessage name='numeration'/>
          <label>Partido</label>
          <Field name='location'/>
          <ErrorMessage name='location'/>

          {/* Numero celular */}
          <label>Numero de celular</label>
          <Field name='phone' type='number'/>
          <ErrorMessage name='phone'/>

          {/* Constraseña */}
          <label>Constraseña</label>
          <Field name='password'/>
          <ErrorMessage name='password'/>

          <ReCAPTCHA
            ref={captcha}
            sitekey='6Le_4E0dAAAAAOFuwAH1Xx7ZWP4cvszYTx3lis6W'
            onChange={reCaptcha}
          />
          <button type='submit'>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  )
}
