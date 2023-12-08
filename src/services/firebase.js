import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXtX_Elll0NHUlH5oBbMSVKVUSIkmsfD8",
  authDomain: "simple-crud-6c326.firebaseapp.com",
  projectId: "simple-crud-6c326",
  storageBucket: "simple-crud-6c326.appspot.com",
  messagingSenderId: "157003678732",
  appId: "1:157003678732:web:49aa42f24f08da99999a29",
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
