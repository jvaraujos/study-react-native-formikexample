import './App.css'
import React from 'react'
import { Formik, Field, Form } from 'formik'


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
        validate={validate}
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values, errors }) => (
          <Form >
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
              {errors.name && (<span>{errors.name}</span>)}
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="text" />
              {errors.email && (<span>{errors.email}</span>)}
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}>

      </Formik>

    </div>
  )
}

export default App;
