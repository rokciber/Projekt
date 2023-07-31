import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registracija = () => {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [geslo, setGeslo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tukaj lahko obdelate registracijo na strežniku ali pa samo izpišete vrednosti za testiranje
    console.log('Ime:', ime, 'Email:', email, 'Geslo:', geslo);

    const userData = { ime, email, geslo };
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log("Registracija uspešna! Podatki: ", userData);

  };

  return (
    <div>
      <h2>Registracija</h2>
      <form onSubmit={handleSubmit}>
        <label>Ime:</label>
        <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} required />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Geslo:</label>
        <input type="password" value={geslo} onChange={(e) => setGeslo(e.target.value)} required />

        <Link to="/">
            <button type="submit">Registracija</button>
        </Link>
        
      </form>
    </div>
  );
};

export default Registracija;
