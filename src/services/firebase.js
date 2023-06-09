import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpq9gvvZAj2IvfE7DHRdOxf6IcCf3VTiQ",
  authDomain: "meu-projeto-704c7.firebaseapp.com",
  projectId: "meu-projeto-704c7",
  storageBucket: "meu-projeto-704c7.appspot.com",
  messagingSenderId: "726012811637",
  appId: "1:726012811637:web:2957946e42272e1b681b3c",
  measurementId: "G-6GJ3JX91XD",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
