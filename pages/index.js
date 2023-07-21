import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '40px',backgroundColor: 'yellowgreen', fontSize: '30px' }}>
      <h1>Bienvenido a Mi Aplicación</h1>
      <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}><Link href="/login">Iniciar sesión</Link></div>
      <div style={{ textAlign: 'center',margin: '40px', fontSize: '30px' }}><Link href="/register">Registro de usuarios</Link></div>
    </div>
  );
};

export default Home;
