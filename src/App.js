import React from "react";
import ReactDOM from "react-dom/client";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

// pages
import Home from './pages/Home'
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";




const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />}>
    <Route index element={<Home />}></Route>
    <Route path="/profile" element={<Profile />}></Route>
    <Route path="/sign-in" element={<SignIn />}></Route>
    <Route path="/sign-up" element={<SignUp />}></Route>
    <Route path="/forgot-password" element={<ForgotPassword />}></Route>
    <Route path="/offers" element={<Offers />}></Route>
  </Route>
))

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;


