import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dobrodošli</h1>
      <div style={styles.buttonsContainer}>
        <Link to="/prijava">
            <button>Prijava</button>
        </Link>
        <Link to="/registracija">
            <button>Registracija</button>
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
    backgroundColor: "#0CAFFF",
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
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