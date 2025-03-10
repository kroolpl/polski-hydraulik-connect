import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Droplet, Home, Wrench, User, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative">
            <Droplet className="h-8 w-8 text-plumber-600" />
            <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
              <div className="water-drop"></div>
              <div className="water-drop"></div>
              <div className="water-drop"></div>
            </div>
          </div>
          <span className="text-xl font-bold text-plumber-800">Polski Hydraulik</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-plumber-800"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link font-medium flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Strona główna</span>
          </Link>
          <Link to="/uslugi" className="nav-link font-medium flex items-center gap-1">
            <Wrench className="h-4 w-4" />
            <span>Usługi</span>
          </Link>
          <Link to="/o-mnie" className="nav-link font-medium flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>O mnie</span>
          </Link>
          <Link to="/kontakt" className="nav-link font-medium flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            <span>Kontakt</span>
          </Link>
          <Button asChild className="bg-accent hover:bg-accent-dark text-white rounded-full flex items-center gap-2">
            <a href="tel:07960367566">
              <Phone className="h-4 w-4" />
              <span>07960 367 566</span>
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-20 px-4 md:hidden">
            <nav className="flex flex-col items-center gap-8 text-lg">
              <Link to="/" className="nav-link font-medium flex items-center gap-2" onClick={toggleMenu}>
                <Home className="h-5 w-5" />
                <span>Strona główna</span>
              </Link>
              <Link to="/uslugi" className="nav-link font-medium flex items-center gap-2" onClick={toggleMenu}>
                <Wrench className="h-5 w-5" />
                <span>Usługi</span>
              </Link>
              <Link to="/o-mnie" className="nav-link font-medium flex items-center gap-2" onClick={toggleMenu}>
                <User className="h-5 w-5" />
                <span>O mnie</span>
              </Link>
              <Link to="/kontakt" className="nav-link font-medium flex items-center gap-2" onClick={toggleMenu}>
                <MessageCircle className="h-5 w-5" />
                <span>Kontakt</span>
              </Link>
              <Button asChild className="bg-accent hover:bg-accent-dark text-white rounded-full w-full flex items-center justify-center gap-2">
                <a href="tel:07960367566">
                  <Phone className="h-5 w-5" />
                  <span>07960 367 566</span>
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
