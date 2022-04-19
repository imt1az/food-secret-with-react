// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt1H4qWiin1dj-MkC0C2gegvCav5pV5Q4",
  authDomain: "home-delivery-web-app.firebaseapp.com",
  projectId: "home-delivery-web-app",
  storageBucket: "home-delivery-web-app.appspot.com",
  messagingSenderId: "486611502392",
  appId: "1:486611502392:web:e09a9c68e3a497a92c2dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;