import React, { useState } from 'react';

const Prijava = () => {
  const [email, setEmail] = useState('');
  const [geslo, setGeslo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tukaj lahko obdelate prijavo na strežniku ali pa samo izpišete vrednosti za testiranje
    console.log('Email:', email, 'Geslo:', geslo);
  };

  return (
    <div>
      <h2>Prijava</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Geslo:</label>
        <input type="password" value={geslo} onChange={(e) => setGeslo(e.target.value)} required />
        <button type="submit">Prijava</button>
      </form>
    </div>
  );
};

export default Prijava;
