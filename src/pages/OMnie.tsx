import React from "react";
import { Link } from "react-router-dom";
import { Award, UserCheck, Clock, Wrench, CheckCircle, MapPin, Phone, Star, Quote, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BSiLogoPng from "@/assets/images/optimized/BSi-logo.png";
import BSiLogoWebp from "@/assets/images/optimized/BSi-logo.webp";
import CityGuildsLogoPng from "@/assets/images/optimized/City-Guilds-Logo-2023.png";
import CityGuildsLogoWebp from "@/assets/images/optimized/City-Guilds-Logo-2023.webp";
import PlumberPng from "@/assets/images/optimized/plumber.png";
import PlumberWebp from "@/assets/images/optimized/plumber.webp";

const OMnie = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumber-800 to-plumber-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">O Mnie</h1>
            <p className="text-xl max-w-3xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              Poznaj wykwalifikowanego hydraulika z długoletnim doświadczeniem w Polsce i UK.
            </p>
          </div>
        </section>

        {/* Introduction Section with Owner Image */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-12 fade-in-up">
                {/* Owner Image - Smaller and in a circular format */}
                <div className="flex-shrink-0">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <picture>
                      <source srcSet={PlumberWebp} type="image/webp" />
                      <source srcSet={PlumberPng} type="image/png" />
                      <img 
                        src={PlumberPng} 
                        alt="Andrzej - Polski Hydraulik" 
                        className="w-full h-full object-cover object-center" 
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </picture>
                  </div>
                </div>
                
                {/* Introduction Text */}
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-plumber-800">
                    Polski Hydraulik - Andrzej
                  </h2>
                  <p className="text-lg mb-4 text-gray-700">
                    Jako wykwalifikowany hydraulik z certyfikatem City&Guilds, oferuję wysokiej jakości usługi hydrauliczne w Warrington i okolicach (w promieniu 30 mil).
                  </p>
                  <p className="text-lg text-gray-700">
                    Moje długoletnie doświadczenie zdobyte zarówno w Polsce jak i w Wielkiej Brytanii pozwala mi świadczyć usługi na najwyższym poziomie, zawsze zgodnie z brytyjskimi standardami.
                  </p>
                </div>
              </div>
              
              {/* Certification Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 py-6 border-t border-b border-gray-200 mb-12 fade-in-up" style={{animationDelay: "0.2s"}}>
                <picture>
                  <source srcSet={CityGuildsLogoWebp} type="image/webp" />
                  <source srcSet={CityGuildsLogoPng} type="image/png" /> 
                  <img 
                    src={CityGuildsLogoPng} 
                    alt="City & Guilds Logo" 
                    className="h-16 object-contain" 
                    loading="lazy"
                    width="240"
                    height="240"
                  />
                </picture>
                
                <picture>
                  <source srcSet={BSiLogoWebp} type="image/webp" />
                  <source srcSet={BSiLogoPng} type="image/png" />
                  <img 
                    src={BSiLogoPng} 
                    alt="BSi Logo" 
                    className="h-14 object-contain" 
                    loading="lazy"
                    width="200"
                    height="88"
                  />
                </picture>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl font-bold mb-4 text-plumber-800">Dlaczego warto mnie wybrać?</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                Specjalizuję się w szerokiej gamie usług hydraulicznych, zawsze stawiając na jakość i zadowolenie klienta.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-fade-in">
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-plumber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-plumber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-plumber-800">Certyfikowane kwalifikacje</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Certyfikat City&Guilds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Pełne kwalifikacje hydrauliczne</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Zgodność z British Standard</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-plumber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Sparkles className="h-7 w-7 text-plumber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-plumber-800">Jakość usług</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Materiały najwyższej jakości</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Dbałość o szczegóły</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Gwarancja na wykonane prace</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="bg-plumber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Clock className="h-7 w-7 text-plumber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-plumber-800">Niezawodność</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Wieloletnie doświadczenie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Terminowość i punktualność</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Uczciwe i przejrzyste ceny</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* My Approach Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 fade-in-up">
                <h2 className="text-3xl font-bold mb-4 text-plumber-800">Moje podejście</h2>
                <p className="text-lg max-w-3xl mx-auto text-gray-700">
                  Każde zlecenie traktuję indywidualnie, zawsze stawiając na jakość i zadowolenie klienta.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-fade-in">
                <div className="bg-gradient-to-br from-plumber-50 to-white p-8 rounded-xl shadow-sm border border-plumber-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-plumber-800">Jakość przede wszystkim</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Każde zlecenie traktuję z najwyższą dbałością o szczegóły, używając materiałów najwyższej jakości. Nie uznaję kompromisów, gdy chodzi o jakość wykonania.
                  </p>
                  <p className="text-gray-700">
                    Dzięki temu moje instalacje są trwałe, bezpieczne i estetyczne, a klienci mogą cieszyć się bezproblemowym użytkowaniem przez długie lata.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-plumber-50 to-white p-8 rounded-xl shadow-sm border border-plumber-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-plumber-800">Uczciwe ceny</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Oferuję konkurencyjne ceny z możliwością negocjacji. Zawsze przedstawiam jasną i szczegółową wycenę przed rozpoczęciem prac, bez ukrytych kosztów.
                  </p>
                  <p className="text-gray-700">
                    Wierzę, że uczciwe podejście do klienta buduje długotrwałe relacje oparte na zaufaniu i wzajemnym szacunku.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-plumber-50 to-white p-8 rounded-xl shadow-sm border border-plumber-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-plumber-800">Niezawodność</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Dotrzymuję terminów i zawsze stawiam się na umówione spotkania. Możesz na mnie polegać w każdej sytuacji, nawet w nagłych przypadkach.
                  </p>
                  <p className="text-gray-700">
                    Rozumiem, jak ważna jest niezawodność, szczególnie w przypadku awarii hydraulicznych, które mogą zakłócić normalne funkcjonowanie domu.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-plumber-50 to-white p-8 rounded-xl shadow-sm border border-plumber-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-full shadow-sm">
                      <Star className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-plumber-800">Profesjonalne doradztwo</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Oferuję fachowe doradztwo w zakresie wyboru odpowiednich rozwiązań hydraulicznych, dostosowanych do indywidualnych potrzeb i budżetu klienta.
                  </p>
                  <p className="text-gray-700">
                    Dzięki mojemu doświadczeniu pomogę wybrać optymalne rozwiązania, które będą służyć przez lata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-gradient-to-br from-plumber-800 to-plumber-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl font-bold mb-4">Co mówią moi klienci</h2>
              <p className="text-lg max-w-3xl mx-auto text-white/80">
                Opinie moich klientów są najlepszym dowodem jakości moich usług.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto stagger-fade-in">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-white/20" />
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "Szybka i profesjonalna usługa. Andrzej naprawił wyciek pod zlewem w ciągu godziny od mojego telefonu. Polecam!"
                </p>
                <div className="font-semibold">- Marta K., Warrington</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-white/20" />
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "Profesjonalna instalacja nowego systemu grzewczego. Cena była konkurencyjna, a jakość pracy doskonała. Zdecydowanie polecam."
                </p>
                <div className="font-semibold">- Tomasz W., Manchester</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-white/20" />
                <div className="flex items-center text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="italic mb-4">
                  "Andrzej wymienił nam całą łazienkę. Praca wykonana perfekcyjnie, w terminie i za uzgodnioną cenę. Bardzo polecam!"
                </p>
                <div className="font-semibold">- Karolina i Marek, Liverpool</div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-3xl font-bold mb-4 text-plumber-800">Obszar działania</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-700">
                Oferuję usługi hydrauliczne w promieniu 30 mil od Warrington, obejmując takie obszary jak:
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                {["Warrington", "Liverpool", "Manchester", "Preston", "Chester", "Crewe"].map((city) => (
                  <div key={city} className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="flex justify-center mb-3">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-plumber-700">{city}</h3>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 bg-plumber-50 p-6 rounded-xl border border-plumber-100 text-center">
                <p className="text-lg text-gray-700 flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span>Nie widzisz swojej lokalizacji?</span>
                  <Link to="/kontakt" className="text-plumber-700 hover:text-plumber-500 font-medium inline-flex items-center group">
                    Skontaktuj się ze mną
                    <Phone className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-plumber-700 to-plumber-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 fade-in-up">Gotowy do współpracy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              Zadzwoń do mnie już teraz lub skorzystaj z formularza kontaktowego, aby umówić się na bezpłatną wycenę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-fade-in">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white hover-lift">
                <a href="tel:07960367566" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Zadzwoń: 07960 367 566</span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 hover-lift">
                <Link to="/kontakt" className="flex items-center gap-2">
                  <span>Formularz kontaktowy</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OMnie; 