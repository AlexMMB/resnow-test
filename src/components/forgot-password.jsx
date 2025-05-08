import React, { useState, useEffect } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setEmailError('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();

    if (isEmailValid) {
      console.log('Solicitud de restablecimiento de contraseña para:', email);
      setMessage('Se ha enviado un enlace a tu correo electrónico para restablecer tu contraseña.');
      setEmail('');
      setTimeout(() => setMessage(''), 5000);
    } else {
      console.log('Formulario de restablecimiento de contraseña con errores.');
    }
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 py-10"
      style={{
        fontFamily: "'Montserrat', sans-serif",
        backgroundColor: '#0c0c0c',
        color: '#ffffff',
        backgroundImage: `url('https://images.unsplash.com/photo-1514933685816-1668dcd9a774?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="form-container bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg p-10 w-full max-w-md animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-6 text-center text-white">Olvidé mi Contraseña</h2>
        <p className="text-white mb-4 text-center">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-bold mb-2 text-white">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field shadow appearance-none border rounded w-full py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={handleInputChange}
              required
              style={{
                borderRadius: '0.75rem',
                boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)',
                padding: '0.875rem 1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#ffffff',
              }}
            />
            {emailError && <div className="text-red-500 text-xs italic mt-1">{emailError}</div>}
          </div>
          <button
            type="submit"
            className="login-button bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 px-6 rounded-lg w-full transition-all"
          >
            Enviar enlace de restablecimiento
          </button>
          {message && <div className="text-center text-white mt-4">{message}</div>}
        </form>
        <div className="mt-6 text-center">
          <a
            href="login-client.html"
            className="admin-login-button inline-block w-full text-center py-3 rounded-lg border border-white border-opacity-10 text-white hover:bg-white hover:bg-opacity-20 transition"
          >
            Volver al inicio de sesión
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
