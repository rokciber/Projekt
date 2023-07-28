import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const HomePage = () => {
  return (
    <div style={styles.container}>

      <button>
        <span class="span-mother">
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
        
        <span class="span-mother2">
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



      <div style={styles.buttonsContainer}>

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

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: "#36454F",
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: '15px 30px',
    margin: '10px',
    backgroundColor: 'red',
    color: '#FFF',
    textDecoration: 'none',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

export default HomePage;