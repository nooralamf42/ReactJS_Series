import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";
import NotFound from "./components/NotFound.jsx";


const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    children : [
      {
        path : 'login',
        element : <Login/>
      },
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'signup',
        element : <Signup/>
      },
    ], 
  },
  {
    path : '*',
    element : <NotFound/>
  }
])


ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}/>
);
