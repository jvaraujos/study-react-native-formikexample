import './App.css';
import React, { useState } from 'react'
import { Formik, Field } from 'formik';


function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{
          name: '',
          email: ''
        }}
        render={({ values, handleChange }) => (
          <form>
            <div>
              <label>Nome</label>
              <Field name="name" type="text" value={values.name} />
            </div>
            <div>
              <label>Email</label>
              <Field name="email" type="text" value={values.email} />
            </div>
          </form>
        )}>

      </Formik>

    </div>
  );
}

export default App;
