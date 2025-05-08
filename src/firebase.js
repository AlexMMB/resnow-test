import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Para autenticación
import { getFirestore } from "firebase/firestore";  // Para base de datos Firestore (si lo necesitas)
import { getStorage } from "firebase/storage";  // Para almacenamiento (si lo necesitas)

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCH2RP7MSFhWQwPz6WI5wFFes3KgBm350E",
    authDomain: "resnow-3998b.firebaseapp.com",
    projectId: "resnow-3998b",
    storageBucket: "resnow-3998b.firebasestorage.app",
    messagingSenderId: "1084679101696",
    appId: "1:1084679101696:web:bd26959da11912db31e7e5",
    measurementId: "G-JLWW7G9TZ8"
  };

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar las funcionalidades de Firebase que necesites
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
