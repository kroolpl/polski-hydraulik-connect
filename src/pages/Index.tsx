
import React from "react";
import { Link } from "react-router-dom";
import { Wrench, Droplet, ShowerHead, Thermometer, PiggyBank, Award, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-plumber-800 to-plumber-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">
                  Polski Hydraulik - Profesjonalne Usługi Hydrauliczne
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200">
                  Wykwalifikowany hydraulik City&Guilds z długoletnim doświadczeniem w Polsce i UK. 
                  Wysokiej jakości usługi w przystępnych cenach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white">
                    <Link to="/kontakt">Skontaktuj się</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                    <Link to="/uslugi">Poznaj nasze usługi</Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="relative bg-white/10 rounded-lg p-6 backdrop-blur">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-white/10 rounded p-3">
                      <Wrench className="h-8 w-8 text-accent" />
                      <span>Montaż i naprawa</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded p-3">
                      <ShowerHead className="h-8 w-8 text-accent" />
                      <span>Łazienki i kuchnie</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded p-3">
                      <Thermometer className="h-8 w-8 text-accent" />
                      <span>Centralne ogrzewanie</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 rounded p-3">
                      <Droplet className="h-8 w-8 text-accent" />
                      <span>Usuwanie wycieków</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-plumber-800">Dlaczego warto nas wybrać?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-plumber-100 text-plumber-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certyfikowane Kwalifikacje</h3>
                <p className="text-gray-600">Posiadamy certyfikaty City&Guilds, gwarantujące profesjonalizm i wiedzę.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-plumber-100 text-plumber-600 mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Wieloletnie Doświadczenie</h3>
                <p className="text-gray-600">Długoletnie doświadczenie w branży zarówno w Polsce jak i w UK.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-plumber-100 text-plumber-600 mb-4">
                  <PiggyBank className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Konkurencyjne Ceny</h3>
                <p className="text-gray-600">Oferujemy rozsądne ceny oraz możliwość ich negocjacji.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-plumber-100 text-plumber-600 mb-4">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Brytyjskie Standardy</h3>
                <p className="text-gray-600">Wszystkie prace wykonywane zgodnie z British Standard.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-plumber-800">Nasze Usługi</h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Oferujemy kompleksowe usługi hydrauliczne dostosowane do Twoich potrzeb.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="service-card">
                <ShowerHead className="h-10 w-10 text-plumber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Montaż i naprawa</h3>
                <p className="text-gray-600 mb-4">
                  Profesjonalny montaż, naprawa i wymiana urządzeń wodno-kanalizacyjnych.
                </p>
                <Link to="/uslugi" className="text-plumber-600 hover:text-plumber-800 font-medium inline-flex items-center">
                  Więcej informacji
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="service-card">
                <Thermometer className="h-10 w-10 text-plumber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Centralne ogrzewanie</h3>
                <p className="text-gray-600 mb-4">
                  Instalacja, naprawa i serwisowanie systemów centralnego ogrzewania.
                </p>
                <Link to="/uslugi" className="text-plumber-600 hover:text-plumber-800 font-medium inline-flex items-center">
                  Więcej informacji
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
              
              <div className="service-card">
                <Droplet className="h-10 w-10 text-plumber-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Rynny i opierzenie</h3>
                <p className="text-gray-600 mb-4">
                  Montaż i naprawa rynien oraz opierzenia dachowego.
                </p>
                <Link to="/uslugi" className="text-plumber-600 hover:text-plumber-800 font-medium inline-flex items-center">
                  Więcej informacji
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-plumber-700 hover:bg-plumber-800">
                <Link to="/uslugi">Zobacz wszystkie usługi</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-plumber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Potrzebujesz hydraulika?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś! Oferujemy darmową wycenę i szybką realizację zleceń.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white">
              <a href="tel:07960367566" className="inline-flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>Zadzwoń teraz: 07960 367 566</span>
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
