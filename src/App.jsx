import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reset" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
