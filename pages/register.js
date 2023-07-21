import React from 'react';

const register = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px',backgroundColor: 'yellowgreen', fontSize: '30px' }}>
      <h1>Iniciar sesión</h1>
      <form>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />
        </div>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>
            <label htmlFor="apellidos">Apellidos:</label>
            <input type="text" id="apellidos" name="apellidos" required />
        </div>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>
            <label htmlFor="username">Nombre de usuario:</label>
            <input type="text" id="username" name="username" required />
        </div>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>
            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
        </div>
        <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>
            <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required />
        </div>
        <button type="submit" style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}>Iniciar sesión</button>
      </form>
    </div>
  );
};

export default register;

