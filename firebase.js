// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC37pzY6MdlY0RL8ibIKvDiv212gFx7MOY",
  authDomain: "movie-app-b4d56.firebaseapp.com",
  projectId: "movie-app-b4d56",
  storageBucket: "movie-app-b4d56.appspot.com",
  messagingSenderId: "715354635795",
  appId: "1:715354635795:web:YOUR_APP_ID_HERE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
