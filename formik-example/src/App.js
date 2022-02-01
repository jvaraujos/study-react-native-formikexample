import './App.css'
import React from 'react'
import { Formik, Field, Form } from 'formik'
import schema from './schema'

function App() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values)
  }

  function validate(values) {
    const errors = {}
    if (!values.name) {
      errors.name = 'Nome e obrigatorio'
    }
    if (!values.email) {
      errors.email = "Email e obrigatorio"
    }
    return errors
  }
  return (
    <div className="App">
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values, errors, touched }) => (
          <Form >
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              {errors.name && touched.name && (<span>{errors.name}</span>)}
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="text" />
              {errors.email && touched.email && (<span>{errors.email}</span>)}
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}>

      </Formik>

    </div>
  )
}

export default App;
