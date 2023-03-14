import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2k3oiuIMoIOOtKTiUAYdFevzBapIT1uo",
  authDomain: "spanishbyhispanics.firebaseapp.com",
  projectId: "spanishbyhispanics",
  storageBucket: "spanishbyhispanics.appspot.com",
  messagingSenderId: "634258876498",
  appId: "1:634258876498:web:c3e79eaba2597a5295d78b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
         <App />
    </ChakraProvider>
    
  </React.StrictMode>,
)
