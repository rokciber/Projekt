import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Prijava = () => {
  const [email, setEmail] = useState('');
  const [geslo, setGeslo] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Retrieve registration data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === email && userData.geslo === geslo) {
      console.log('Prijava uspešna!');
      navigate.push('/dashboard'); // Redirect to /dashboard on successful login
    } else {
      console.log('Prijava neuspešna. Preverite vaše podatke.');
    }
  };

  return (
    <div>
      <h2>Prijava</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Geslo:</label>
        <input type="password" value={geslo} onChange={(e) => setGeslo(e.target.value)} required />

        <Link to="/dashboard">
            <button type="submit">Prijava</button>
        </Link>
        
      </form>
    </div>
  );
};

export default Prijava;