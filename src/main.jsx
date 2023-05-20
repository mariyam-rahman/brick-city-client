import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../src/Layout/Main";
import AllToys from "../src/pages/AllToys/AllToys";
import Home from "../src/pages/Home/Home/index";
import AddToys from "./pages/AddToys/AddToys";
import MyToys from "./pages/MyToys/MyToys";
import Blog from "./pages/Blog/Blog";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ToyDetails from "./pages/Toydetails/ToyDetails";
import FourOfFour from "./pages/FourOfFour";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/add-toys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/toy-details",
        element: <ToyDetails></ToyDetails>,
      },
    ],
  },

  {
    path: "*",
    element: <FourOfFour></FourOfFour>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="container mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
