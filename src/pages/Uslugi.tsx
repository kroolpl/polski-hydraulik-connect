
import React from "react";
import { Link } from "react-router-dom";
import { ShowerHead, Thermometer, Wrench, Droplet, Home, SunSnow } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Uslugi = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-plumber-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Nasze Usługi</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Oferujemy szeroki zakres profesjonalnych usług hydraulicznych dostosowanych do Twoich potrzeb.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-16">
              {/* Installations and Repairs */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-plumber-100 p-3 rounded-lg">
                    <ShowerHead className="h-8 w-8 text-plumber-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-plumber-800">Montaż i naprawy</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Montaż i naprawa kranów</h3>
                    <p className="text-gray-600 mb-4">
                      Profesjonalny montaż i naprawa wszelkiego rodzaju kranów w łazience i kuchni.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Montaż umywalek i zlewozmywaków</h3>
                    <p className="text-gray-600 mb-4">
                      Montaż, wymiana i naprawa umywalek, zlewozmywaków i szafek łazienkowych.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Instalacja wanien i pryszniców</h3>
                    <p className="text-gray-600 mb-4">
                      Profesjonalny montaż wanien, kabin prysznicowych i systemów prysznicowych.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Montaż toalet i bidetów</h3>
                    <p className="text-gray-600 mb-4">
                      Instalacja, wymiana i naprawa toalet, spłuczek i bidetów.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Naprawa wycieków</h3>
                    <p className="text-gray-600 mb-4">
                      Szybka i skuteczna naprawa wycieków wody i uszkodzonych rur.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Udrażnianie odpływów</h3>
                    <p className="text-gray-600 mb-4">
                      Profesjonalne udrażnianie zapchanych odpływów i rur kanalizacyjnych.
                    </p>
                  </div>
                </div>
              </div>

              {/* Heating Systems */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-plumber-100 p-3 rounded-lg">
                    <Thermometer className="h-8 w-8 text-plumber-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-plumber-800">Centralne ogrzewanie</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Montaż grzejników</h3>
                    <p className="text-gray-600 mb-4">
                      Instalacja nowych grzejników oraz wymiana starych na bardziej efektywne.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Naprawa systemów ogrzewania</h3>
                    <p className="text-gray-600 mb-4">
                      Diagnostyka i naprawa usterek w systemach centralnego ogrzewania.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Serwisowanie instalacji</h3>
                    <p className="text-gray-600 mb-4">
                      Regularne serwisowanie i konserwacja systemów centralnego ogrzewania.
                    </p>
                  </div>
                </div>
              </div>

              {/* External Elements */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-plumber-100 p-3 rounded-lg">
                    <Home className="h-8 w-8 text-plumber-700" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-plumber-800">Rynny i opierzenie dachowe</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Montaż rynien</h3>
                    <p className="text-gray-600 mb-4">
                      Profesjonalny montaż nowych systemów rynnowych zgodnie z British Standard.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Naprawa rynien</h3>
                    <p className="text-gray-600 mb-4">
                      Naprawa uszkodzonych lub cieknących rynien i systemów odprowadzania wody.
                    </p>
                  </div>
                  <div className="service-card">
                    <h3 className="text-xl font-semibold mb-3">Montaż i naprawa opierzenia</h3>
                    <p className="text-gray-600 mb-4">
                      Profesjonalny montaż i naprawa opierzenia dachowego.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional Services */}
            <div className="mt-16 bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-plumber-800 text-center">Dodatkowe usługi</h3>
              <p className="text-center text-lg mb-8">
                Oferujemy również inne usługi hydrauliczne, takie jak:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <Wrench className="h-6 w-6 text-plumber-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Konsultacje i ekspertyzy</h4>
                    <p className="text-gray-600">
                      Profesjonalne porady i ekspertyzy dotyczące układów hydraulicznych.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <Droplet className="h-6 w-6 text-plumber-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Instalacje zewnętrzne</h4>
                    <p className="text-gray-600">
                      Montaż kranów ogrodowych, systemów nawadniania i innych instalacji zewnętrznych.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <SunSnow className="h-6 w-6 text-plumber-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Instalacje w nowych obiektach</h4>
                    <p className="text-gray-600">
                      Kompleksowe instalacje wodno-kanalizacyjne w nowo budowanych obiektach.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm flex items-start gap-4">
                  <ShowerHead className="h-6 w-6 text-plumber-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Remonty łazienek</h4>
                    <p className="text-gray-600">
                      Kompleksowe remonty łazienek i kuchni - od wymiary instalacji po wykończenie.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-plumber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Potrzebujesz którejś z naszych usług?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś, aby umówić się na bezpłatną wycenę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white">
                <a href="tel:07960367566">
                  <span>Zadzwoń: 07960 367 566</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/kontakt">Formularz kontaktowy</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Uslugi;
