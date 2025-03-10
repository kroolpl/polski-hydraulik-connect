import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Droplet } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-plumber-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Droplet className="h-8 w-8 text-plumber-300" />
              </div>
              <span className="text-xl font-bold">Polski Hydraulik</span>
            </div>
            <p className="text-gray-300 mt-2">
              Wykwalifikowany hydraulik City&Guilds z długoletnim doświadczeniem w Polsce i UK.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Phone className="h-4 w-4 text-plumber-300" />
              <a href="tel:07960367566" className="hover:text-plumber-300 transition-colors">
                07960 367 566
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-plumber-300" />
              <a href="mailto:kontakt@polskihydraulik.uk" className="hover:text-plumber-300 transition-colors">
                kontakt@polskihydraulik.uk
              </a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-plumber-300 mt-1" />
              <p>Warrington, Liverpool, Manchester, Preston, Chester, Crewe</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-plumber-600 pb-2">Szybkie linki</h3>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="hover:text-plumber-300 transition-colors">
                Strona główna
              </Link>
              <Link to="/uslugi" className="hover:text-plumber-300 transition-colors">
                Usługi
              </Link>
              <Link to="/o-mnie" className="hover:text-plumber-300 transition-colors">
                O mnie
              </Link>
              <Link to="/kontakt" className="hover:text-plumber-300 transition-colors">
                Kontakt
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-plumber-600 pb-2">Obszar działania</h3>
            <p className="mb-3">Podejmuję pracę w promieniu 30 mil od Warrington</p>
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-plumber-300" />
                <span>Warrington</span>
              </li>
              <li className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-plumber-300" />
                <span>Liverpool</span>
              </li>
              <li className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-plumber-300" />
                <span>Manchester</span>
              </li>
              <li className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-plumber-300" />
                <span>Preston</span>
              </li>
              <li className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-plumber-300" />
                <span>Chester</span>
              </li>
              <li className="flex items-center gap-1">
                <MapPin className="h-3 w-3 text-plumber-300" />
                <span>Crewe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-plumber-700 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Polski Hydraulik. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
