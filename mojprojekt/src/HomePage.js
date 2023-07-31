import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const HomePage = () => {
  return (
    <div className='container2'>

      <button>
        <span className="span-mother">
            <span>D</span>
            <span>o</span>
            <span>b</span>
            <span>r</span>
            <span>o</span>
            <span>d</span>
            <span>o</span>
            <span>s</span>
            <span>l</span>
            <span>i</span>
        </span>
        
        <span className="span-mother2">
            <span>D</span>
            <span>o</span>
            <span>b</span>
            <span>r</span>
            <span>o</span>
            <span>d</span>
            <span>o</span>
            <span>s</span>
            <span>l</span>
            <span>i</span>
        </span>
</button>



      <div className='container'>

        <Link to="/prijava">
            <button className="gumb">Prijava</button>
        </Link>
        <Link to="/registracija">
            <button className='gumb'>Registracija</button>
        </Link>
        
      </div>
    </div>
  );
};

export default HomePage;