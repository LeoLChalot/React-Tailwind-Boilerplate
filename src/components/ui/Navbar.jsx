import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Home, LogIn } from 'lucide-react';
import Logo from '@Assets/react.svg';


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();


  // Fonction utilitaire pour gérer les classes actives
  const getLinkClass = (path) => {
    const baseClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center gap-2";
    const activeClass = "bg-blue-100 text-blue-700";
    const inactiveClass = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

    return location.pathname === path ? `${baseClass} ${activeClass}` : `${baseClass} ${inactiveClass}`;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">

          {/* --- LOGO / TITRE --- */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600 flex items-center gap-2">
              <img src={Logo} alt="Logo" className="h-8 w-8" />
              ReactBoilerplate
            </Link>
          </div>

          {/* --- MENU DESKTOP --- */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className={getLinkClass('/')}>
              <Home size={18} /> Accueil
            </Link>

            <Link to="/signin" className={getLinkClass('/signin')}>
              <LogIn size={18} /> Connexion
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              Inscription
            </Link>
          </div>

          {/* --- BOUTON MENU MOBILE --- */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MENU MOBILE (Dropdown) --- */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Accueil
            </Link>


            <Link
              to="/signin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Connexion
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              Inscription
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}