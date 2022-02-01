import './App.css';
import React from 'react'
import { Formik, Field, Form } from 'formik';


function App() {
  function onSubmit(values, actions) {
    console.log('SUBMIT', values)
  }

  return (
    <div className="App">
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values }) => (
          <Form >
            <div>
              <label>Nome</label>
              <Field name="name" type="text" />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="text" />
            </div>
            <button type="submit">Enviar</button>
          </Form>
        )}>

      </Formik>

    </div>
  );
}

export default App;
