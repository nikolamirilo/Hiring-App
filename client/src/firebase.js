import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyB9oynl6jz6hJywOgwLH4NRKTmTVN3ICeU",
    authDomain: "hiring-app-1231d.firebaseapp.com",
    projectId: "hiring-app-1231d",
    storageBucket: "hiring-app-1231d.appspot.com",
    messagingSenderId: "48402983800",
    appId: "1:48402983800:web:ee818e8f02d1a78285768d",
  })
  .auth();
