import './App.css';
import React, { useState } from 'react'
import { Formik } from 'formik';


function App() {

  const [values, setValues] = useState({
    name: '',
  })

  function onChange(ev) {
    setValues({
      ...values,
      [ev.target.name]: ev.target.value,
    })
  }

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
              <input name="name" type="text" value={values.name} onChange={handleChange} />
            </div>
            <div>
              <label>Email</label>
              <input name="email" type="text" value={values.email} onChange={handleChange} />
            </div>
          </form>
        )}>

      </Formik>

    </div>
  );
}

export default App;
