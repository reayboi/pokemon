import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./pages/Menu";
import Play from "./pages/Play";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, connectAuthEmulator } from "firebase/auth";

import SignIn from "./pages/SignIn";

const firebaseConfig = {
  apiKey: "AIzaSyAxD1HK6TkL84i3HbNDnWKIb8tncoL9aKA",
  authDomain: "pokemon-tcg-467f9.firebaseapp.com",
  projectId: "pokemon-tcg-467f9",
  storageBucket: "pokemon-tcg-467f9.appspot.com",
  messagingSenderId: "929696168707",
  appId: "1:929696168707:web:d8048c631fb23b71610736",
  databaseURL: "http://127.0.0.1:9000/?ns=pokemon-tcg-467f9",
  // databaseURL:
  //   "https://pokemon-tcg-467f9-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
connectAuthEmulator(auth, "http://localhost:9099");
// const firestore = getFirxestore();

const database = getDatabase(app);
console.log(database);
set(ref(database, "users/" + "user1"), {
  username: "Brandon",
  email: "brandon.reay@and,digital",
});

// database

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "play",
    element: <Play />,
  },
  {
    path: "SignIn",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
