import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'; // Importa tu archivo CSS

function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    const email = event.target.email.value;
    const password = event.target.password.value;

    const auth = getAuth();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Redirige al usuario (puedes usar useNavigate de react-router-dom si estás usando React Router)
      window.location.href = '/dashboard';
    } catch (error) {
      setError('Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-body">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Inicio de sesión</h2>

        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Contraseña</label>
        <input type="password" id="password" name="password" required />

        {error && <p className="login-error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Ingresar'}
        </button>
      </form>
    </div>
  );
}

export default Login;
