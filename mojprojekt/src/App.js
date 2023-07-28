import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Uporabili smo Routes namesto Switch

import Homepage from './HomePage';
import Prijava from './prijava';
import Registracija from './registracija';

const App = () => {
  return (
    <Router>
      <Routes> {/* Tukaj uporabimo Routes namesto Switch */}
        <Route path="/" element={<Homepage />} /> {/* element namesto component */}
        <Route path="/prijava" element={<Prijava />} /> {/* element namesto component */}
        <Route path="/registracija" element={<Registracija />} /> {/* element namesto component */}
      </Routes> {/* Tukaj uporabimo Routes namesto Switch */}
    </Router>
  );
};

export default App;
