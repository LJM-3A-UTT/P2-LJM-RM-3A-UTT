import React from 'react';

const Login = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px',backgroundColor: 'yellowgreen', fontSize: '30px' }}>
      <h1>Iniciar sesión</h1>
      <form>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}><label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
        </div>

        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}><label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <div>
            <button type="submit" style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>Iniciar sesión</button>
      </div>
      </form>
    </div>
  );
};

export default Login;

