import React from "react";
import { Link } from "react-router-dom";
import { ShowerHead, Thermometer, Wrench, Droplet, Home, SunSnow, ArrowRight, Bath, Toilet, Pipette, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ServiceCard = ({ title, description, className = "", icon = ArrowRight }) => {
  const IconComponent = icon;
  return (
    <div className={`service-card group hover-lift ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 bg-plumber-100 rounded-lg text-plumber-600 group-hover:bg-plumber-600 group-hover:text-white transition-colors duration-300">
          <IconComponent className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-plumber-800 group-hover:text-plumber-600 transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-600 mb-5">{description}</p>
      <div className="w-full flex justify-end">
        <span className="text-sm font-medium text-plumber-600 flex items-center gap-1.5 opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
          Dowiedz się więcej
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
};

const CategoryHeader = ({ icon, title }) => {
  const IconComponent = icon;
  return (
    <div className="flex items-center gap-4 mb-8 fade-in-up">
      <div className="bg-plumber-100 p-3 rounded-lg">
        <IconComponent className="h-8 w-8 text-plumber-700" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold text-plumber-800">{title}</h2>
    </div>
  );
};

const Uslugi = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumber-800 to-plumber-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3TEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">Nasze Usługi</h1>
            <p className="text-xl max-w-3xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              Oferujemy szeroki zakres profesjonalnych usług hydraulicznych dostosowanych do Twoich potrzeb.
            </p>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-20">
              {/* Installations and Repairs */}
              <div>
                <CategoryHeader icon={ShowerHead} title="Montaż i naprawy" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-fade-in">
                  <ServiceCard 
                    title="Montaż i naprawa kranów" 
                    description="Profesjonalny montaż i naprawa wszelkiego rodzaju kranów w łazience i kuchni."
                    icon={Wrench}
                  />
                  <ServiceCard 
                    title="Montaż umywalek i zlewozmywaków" 
                    description="Montaż, wymiana i naprawa umywalek, zlewozmywaków i szafek łazienkowych."
                    icon={Droplet}
                  />
                  <ServiceCard 
                    title="Instalacja wanien i pryszniców" 
                    description="Profesjonalny montaż wanien, kabin prysznicowych i systemów prysznicowych."
                    icon={Bath}
                  />
                  <ServiceCard 
                    title="Montaż toalet i bidetów" 
                    description="Instalacja, wymiana i naprawa toalet, spłuczek i bidetów."
                    icon={Toilet}
                  />
                  <ServiceCard 
                    title="Naprawa wycieków" 
                    description="Szybka i skuteczna naprawa wycieków wody i uszkodzonych rur."
                    icon={Pipette}
                  />
                  <ServiceCard 
                    title="Udrażnianie odpływów" 
                    description="Profesjonalne udrażnianie zapchanych odpływów i rur kanalizacyjnych."
                    icon={Waves}
                  />
                </div>
              </div>

              {/* Heating Systems */}
              <div>
                <CategoryHeader icon={Thermometer} title="Centralne ogrzewanie" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-fade-in">
                  <ServiceCard 
                    title="Montaż grzejników" 
                    description="Instalacja nowych grzejników oraz wymiana starych na bardziej efektywne."
                    icon={Thermometer}
                  />
                  <ServiceCard 
                    title="Naprawa systemów ogrzewania" 
                    description="Diagnostyka i naprawa usterek w systemach centralnego ogrzewania."
                    icon={Wrench}
                  />
                  <ServiceCard 
                    title="Serwisowanie instalacji" 
                    description="Regularne serwisowanie i konserwacja systemów centralnego ogrzewania."
                    icon={SunSnow}
                  />
                </div>
              </div>

              {/* External Elements */}
              <div>
                <CategoryHeader icon={Home} title="Rynny i opierzenie dachowe" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-fade-in">
                  <ServiceCard 
                    title="Montaż rynien" 
                    description="Profesjonalny montaż nowych systemów rynnowych zgodnie z British Standard."
                    icon={Home}
                  />
                  <ServiceCard 
                    title="Naprawa rynien" 
                    description="Naprawa uszkodzonych lub cieknących rynien i systemów odprowadzania wody."
                    icon={Droplet}
                  />
                  <ServiceCard 
                    title="Montaż i naprawa opierzenia" 
                    description="Profesjonalny montaż i naprawa opierzenia dachowego."
                    icon={Wrench}
                  />
                </div>
              </div>
            </div>
            
            {/* Additional Services */}
            <div className="mt-24 bg-gradient-to-br from-plumber-50 to-plumber-100 p-8 md:p-12 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-plumber-800 text-center fade-in-up">Dodatkowe usługi</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto stagger-fade-in">
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-3 bg-plumber-100 rounded-lg">
                    <Wrench className="h-6 w-6 text-plumber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Konsultacje i ekspertyzy</h4>
                    <p className="text-gray-600">
                      Profesjonalne porady i ekspertyzy dotyczące układów hydraulicznych.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-3 bg-plumber-100 rounded-lg">
                    <Droplet className="h-6 w-6 text-plumber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Instalacje zewnętrzne</h4>
                    <p className="text-gray-600">
                      Montaż kranów ogrodowych, systemów nawadniania i innych instalacji zewnętrznych.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-3 bg-plumber-100 rounded-lg">
                    <SunSnow className="h-6 w-6 text-plumber-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Instalacje w nowych obiektach</h4>
                    <p className="text-gray-600">
                      Kompleksowe instalacje wodno-kanalizacyjne w nowo budowanych obiektach.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md flex items-start gap-4 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="p-3 bg-plumber-100 rounded-lg">
                    <ShowerHead className="h-6 w-6 text-plumber-600" />
                  </div>
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
        <section className="py-16 bg-gradient-to-br from-plumber-700 to-plumber-800 text-white">
          <div className="container mx-auto px-4 text-center relative">
            <div className="absolute top-0 left-0 w-full h-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMCwwdjQ2LjI5YzQ3Ljc5LDIyLjIsMTAwLjA4LDQ1LjIzLDE1NS4xNCw0NS4yM2M2MS4yMywwLDgxLjU3LTI3Ljk1LDE0My4wMS0yNy45NWM1OS41LDAsMTE3LjQ5LDY4LjA0LDE5MC41Nyw2OC4wNFM2ODIuMzIsODQuMDEsNzY4LjEsODQuMDFjODMuNzUsMCw5My43OS00NS4yLDE3MS41Mi00NS4yYzc4LjA0LDAsMTI0LjksMzUuOTEsMTczLjM5LDM4LjF2LTcyLjZMMCwweiIvPjwvc3ZnPg==')]"></div>
            <div className="absolute bottom-0 left-0 w-full h-12 rotate-180 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMjAwIDEyMCI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1IiBkPSJNMCwwdjQ2LjI5YzQ3Ljc5LDIyLjIsMTAwLjA4LDQ1LjIzLDE1NS4xNCw0NS4yM2M2MS4yMywwLDgxLjU3LTI3Ljk1LDE0My4wMS0yNy45NWM1OS41LDAsMTE3LjQ5LDY4LjA0LDE5MC41Nyw2OC4wNFM2ODIuMzIsODQuMDEsNzY4LjEsODQuMDFjODMuNzUsMCw5My43OS00NS4yLDE3MS41Mi00NS4yYzc4LjA0LDAsMTI0LjksMzUuOTEsMTczLjM5LDM4LjF2LTcyLjZMMCwweiIvPjwvc3ZnPg==')]"></div>
            <h2 className="text-3xl font-bold mb-6 fade-in-up">Potrzebujesz którejś z naszych usług?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              Skontaktuj się z nami już dziś, aby umówić się na bezpłatną wycenę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-fade-in">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white">
                <a href="tel:07960367566" className="flex items-center gap-2">
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
