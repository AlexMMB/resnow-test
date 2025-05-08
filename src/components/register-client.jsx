import React from 'react';

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <div className="form-container w-full">
        <div id="image-container">
          <img src="image_c24e63.png" alt="Imagen de Registro" />
        </div>
        <h1 className="text-4xl font-semibold text-white mb-6 text-center tracking-wider">Registro</h1>
        <form id="sign-up-form" className="space-y-6">
          <div>
            <label htmlFor="first-name" className="block text-gray-300 text-sm font-medium mb-2 opacity-90 transition-opacity duration-300">Nombre</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              className="input-field appearance-none border rounded w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Ingrese su nombre"
              required
              autoComplete="given-name"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-gray-300 text-sm font-medium mb-2 opacity-90 transition-opacity duration-300">Apellido</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              className="input-field appearance-none border rounded w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Ingrese su apellido"
              required
              autoComplete="family-name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2 opacity-90 transition-opacity duration-300">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field appearance-none border rounded w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Ingrese su correo electrónico"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2 opacity-90 transition-opacity duration-300">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field appearance-none border rounded w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Ingrese su contraseña"
              required
              autoComplete="new-password"
            />
          </div>
          <div>
            <label htmlFor="gender" className="block text-gray-300 text-sm font-medium mb-3 opacity-90 transition-opacity duration-300">Género</label>
            <div className="radio-group">
              <label className="radio-label">
                <input type="radio" name="gender" value="male" className="radio-input" required />
                Hombre
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" value="female" className="radio-input" required />
                Mujer
              </label>
              <label className="radio-label">
                <input type="radio" name="gender" value="other" className="radio-input" required />
                Otro
              </label>
            </div>
          </div>
          <div id="error-message" className="text-red-500 text-sm italic mt-4 transition-opacity duration-300" style={{ display: 'none' }}></div>
          <button type="submit" className="sign-up-button">
            <span className="transition-all duration-300">Registrarse</span>
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            ¿Ya tienes una cuenta?
            <a href="#" id="login-link" className="login-link">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
