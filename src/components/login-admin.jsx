import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import './login-admin.css'; // Asegúrate de tener este archivo CSS


// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;
      const docSnap = await getDoc(doc(db, 'users', uid));
      if (docSnap.exists() && docSnap.data().role === 'admin') {
        console.log('Admin logged in');
        // redirige o cambia estado
      } else {
        setErrorMessage('No tienes permisos de administrador');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Acceso exitoso
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center overflow-hidden">
      <div className="form-container w-full max-w-md">
        <h1 className="text-4xl font-semibold text-white mb-6 text-center tracking-wider">Acceso Administrador</h1>
        <form onSubmit={handleLogin} className="space-y-8">
          <div>
            <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2 opacity-90">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input-field"
              placeholder="Ingrese su correo electrónico"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300 text-sm font-medium mb-2 opacity-90">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Ingrese su contraseña"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errorMessage && (
            <div className="text-red-500 text-sm italic mt-4 animate__animated animate__shakeX">{errorMessage}</div>
          )}
          <button type="submit" className="login-button">
            <span>Iniciar Sesión</span>
          </button>
        </form>
        <div className="mt-10 text-center space-y-6">
          <a href="#" className="text-pink-300 hover:text-pink-200 font-semibold transition-colors inline-flex items-center">
            ¿Olvidaste tu contraseña?
          </a>
          <button className="admin-login-button">
            <span>Acceso cliente</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.613 12.817H7.901a.75.75 0 01-.75-.75v-1.73c0-.414.336-.75.75-.75h1.712a.75.75 0 01.75.75v1.73a.75.75 0 01-.75.75z" />
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11a1 1 0 102 0v3a1 1 0 10-2 0v-3zm3.793 8.547a.75.75 0 01-.96-.96l-3.5-3.5a.75.75 0 011.06-1.06l2.97 2.97 2.97-2.97a.75.75 0 011.06 1.06l-3.5 3.5a.75.75 0 01-.53.22z" clipRule="evenodd" />
            </svg>
          </button>
          <button onClick={handleGoogleLogin} className="google-login-button">
            <img src="/google-icon.svg" alt="Google" className="google-icon" />
            Iniciar sesión con Google
          </button>
        </div>
      </div>
    </div>
  );
}
