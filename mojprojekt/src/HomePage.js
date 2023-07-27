import React from 'react';


const HomePage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dobrodošli</h1>
      <div style={styles.buttonsContainer}>
        <button style={styles.button}>
          Prijavi se
        </button>
        
        <button style={styles.button}>
          Registracija
          </button>
        
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





