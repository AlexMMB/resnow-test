import { useState } from 'react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-purple-800 text-white fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="index.html" className="flex items-center text-xl font-semibold">
          <img src="logo.png" alt="Bar Elixir Logo" className="mr-2 h-8" />
          Bar Elixir
        </a>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="index.html" className="hover:text-purple-300 transition duration-300">Inicio</a></li>
            <li><a href="menu.html" className="hover:text-purple-300 transition duration-300">Menú</a></li>
            <li><a href="eventos.html" className="hover:text-purple-300 transition duration-300">Eventos</a></li>
            <li><a href="reservas.html" className="hover:text-purple-300 transition duration-300">Reservas</a></li>
            <li><a href="contacto.html" className="hover:text-purple-300 transition duration-300">Contacto</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a href="login-admin.html" className="bg-yellow-500 hover:bg-yellow-600 text-gray-800 font-semibold py-2 px-6 rounded-full transition duration-300">Acceso Administrador</a>
          <a href="login-client.html" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300">Acceso Cliente</a>
        </div>
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-white focus:outline-none" 
            aria-label="Abrir menú móvil"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
          <div 
            className={`absolute top-16 right-0 bg-purple-800 shadow-lg rounded-md py-2 px-4 space-y-2 ${isMobileMenuOpen ? '' : 'hidden'}`}
            id="mobile-menu"
          >
            <a href="index.html" className="block text-white hover:text-purple-300 transition duration-300">Inicio</a>
            <a href="menu.html" className="block text-white hover:text-purple-300 transition duration-300">Menú</a>
            <a href="eventos.html" className="block text-white hover:text-purple-300 transition duration-300">Eventos</a>
            <a href="reservas.html" className="block text-white hover:text-purple-300 transition duration-300">Reservas</a>
            <a href="contacto.html" className="block text-white hover:text-purple-300 transition duration-300">Contacto</a>
            <a href="login-admin.html" className="block text-yellow-300 hover:text-yellow-200 transition duration-300">Acceso Administrador</a>
            <a href="login-client.html" className="block text-pink-300 hover:text-pink-200 transition duration-300">Acceso Cliente</a>
          </div>
        </div>
      </div>
    </header>
  );
}

function HomePage() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <section className="bg-gradient-to-br from-purple-900 to-black text-white text-center py-20 md:py-32 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-8">Bar Elixir</h1>
          <p className="text-xl md:text-2xl mb-8 md:mb-12">Un lugar para disfrutar de momentos inolvidables.</p>
          <a href="reservas.html" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 text-lg">Haz tu reserva</a>
        </div>
      </section>
      <section className="bg-gray-100 text-gray-800 py-16 md:py-24 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">Bienvenidos a Bar Elixir</h2>
            <p className="text-lg md:text-xl">
              En Bar Elixir, te invitamos a sumergirte en una experiencia única donde la magia de la noche cobra vida.
            </p>
            <p className="text-lg md:text-xl mt-4 md:mt-6">
              Nuestro ambiente окутывает con una energía vibrante y sofisticada, ideal para disfrutar de una velada especial con amigos.
            </p>
          </div>
          <div className="hidden md:block">
            <img src="welcome-image.jpg" alt="Interior de Bar Elixir" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
