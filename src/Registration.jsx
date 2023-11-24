import React, { useState } from 'react';
import axios from 'axios';

function Registration() {
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    password: '',
    email: '',
    language: '',
    level: '',
  });
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/registration', values)
      .then((res) => {
        console.log("Registered!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Registration">
      <h1>Rejestracja</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Imię: </label><br />
        <input type="text" name="name" placeholder="Podaj imię" onChange={handleChange} /><br />
        <label htmlFor="name">Nazwisko: </label><br />
        <input type="text" name="lastName" placeholder="Podaj nazwisko" onChange={handleChange} /><br />
        <label htmlFor="password">Hasło: </label><br />
        <input type="password" name="password" placeholder="Wpisz hasło" onChange={handleChange} /><br />
        <label htmlFor="email">E-mail: </label><br />
        <input type="text" name="email" placeholder="Wpisz e-mail" onChange={handleChange} /><br />
        <label htmlFor="language">Język: </label><br />
        <select name="language" onChange={handleChange}><br />
            <option value="english">Angielski</option>
            <option value="russian">Rosyjski</option>
            <option value="french">Francuski</option>
            <option value="english">Niemiecki</option>
            <option value="spanish">Hiszpański</option>
        </select>
        <br /><br />
        <button type="submit">Zapisz się</button>
      </form>
    </div>
  );
}

export default Registration;