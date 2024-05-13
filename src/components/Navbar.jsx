import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const renderLoginButton = () => {
    if (location.pathname !== "/home") {
      return (
        <Link to="/login" className="text-white">
          Login
        </Link>
      );
    }
  };

  const renderLogoutButton = () => {
    if (location.pathname === "/home") {
      return (
        <button onClick={logout} className="text-white">
          Logout
        </button>
      );
    }
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link to="/" className="text-white">
              Register
            </Link>
            <Link to="/home" className="text-white">
              Home
            </Link>
            {renderLoginButton()}
            {renderLogoutButton()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
