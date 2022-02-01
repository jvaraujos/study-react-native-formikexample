import './App.css';
import React, { useState } from 'react'
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
      <form>
        <div>
          <label>Nome</label>
          <input name="name" type="text" value={values.name} onChange={onChange} />
        </div>
        <div>
          <label>Nome</label>
          <input name="email" type="text" value={values.email} onChange={onChange} />
        </div>
      </form>
    </div>
  );
}

export default App;
