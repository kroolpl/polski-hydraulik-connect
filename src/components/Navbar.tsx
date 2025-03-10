
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Droplet } from "lucide-react";
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
          <Link to="/" className="nav-link font-medium">
            Strona główna
          </Link>
          <Link to="/uslugi" className="nav-link font-medium">
            Usługi
          </Link>
          <Link to="/o-nas" className="nav-link font-medium">
            O nas
          </Link>
          <Link to="/kontakt" className="nav-link font-medium">
            Kontakt
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
              <Link to="/" className="nav-link font-medium" onClick={toggleMenu}>
                Strona główna
              </Link>
              <Link to="/uslugi" className="nav-link font-medium" onClick={toggleMenu}>
                Usługi
              </Link>
              <Link to="/o-nas" className="nav-link font-medium" onClick={toggleMenu}>
                O nas
              </Link>
              <Link to="/kontakt" className="nav-link font-medium" onClick={toggleMenu}>
                Kontakt
              </Link>
              <Button asChild className="bg-accent hover:bg-accent-dark text-white rounded-full w-full flex items-center justify-center gap-2">
                <a href="tel:07960367566">
                  <Phone className="h-4 w-4" />
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
