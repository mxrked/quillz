import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2fD5hXGuubYMD-4JVQBxHwEMvx91LXSs",
  authDomain: "quillz-8a7e0.firebaseapp.com",
  projectId: "quillz-8a7e0",
  storageBucket: "quillz-8a7e0.appspot.com",
  messagingSenderId: "88953352670",
  appId: "1:88953352670:web:f127c993365269b1972d4f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
