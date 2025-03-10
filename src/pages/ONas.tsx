
import React from "react";
import { Link } from "react-router-dom";
import { Award, UserCheck, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ONas = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-plumber-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">O Nas</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Poznaj wykwalifikowanego hydraulika z długoletnim doświadczeniem w Polsce i UK.
            </p>
          </div>
        </section>

        {/* About Us Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-plumber-800">Polski Hydraulik - Andrzej</h2>
                <p className="text-lg mb-4 text-gray-700">
                  Jako wykwalifikowany hydraulik z certyfikatem City&Guilds, oferuję wysokiej jakości usługi hydrauliczne w Warrington i okolicach (w promieniu 30 mil).
                </p>
                <p className="text-lg mb-4 text-gray-700">
                  Moje długoletnie doświadczenie zdobyte zarówno w Polsce jak i w Wielkiej Brytanii pozwala mi świadczyć usługi na najwyższym poziomie, zawsze zgodnie z brytyjskimi standardami.
                </p>
                <p className="text-lg mb-6 text-gray-700">
                  Specjalizuję się w szerokiej gamie usług - od napraw i montażu urządzeń wodno-kanalizacyjnych, przez instalacje centralnego ogrzewania, po montaż rynien i opierzenia dachowego.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-plumber-600" />
                    <span className="font-medium">Certyfikat City&Guilds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UserCheck className="h-5 w-5 text-plumber-600" />
                    <span className="font-medium">Pełne kwalifikacje</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-plumber-600" />
                    <span className="font-medium">Wieloletnie doświadczenie</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-plumber-600" />
                    <span className="font-medium">Zgodność z British Standard</span>
                  </div>
                </div>
                <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white">
                  <Link to="/kontakt">Skontaktuj się z nami</Link>
                </Button>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6 text-plumber-800">Nasze podejście</h3>
                <div className="space-y-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2 text-plumber-700">Jakość przede wszystkim</h4>
                    <p className="text-gray-700">
                      Każde zlecenie traktujemy z najwyższą dbałością o szczegóły, używając materiałów najwyższej jakości.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2 text-plumber-700">Uczciwe ceny</h4>
                    <p className="text-gray-700">
                      Oferujemy konkurencyjne ceny z możliwością negocjacji. Zawsze przedstawiamy jasną i szczegółową wycenę przed rozpoczęciem prac.
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="text-xl font-semibold mb-2 text-plumber-700">Niezawodność</h4>
                    <p className="text-gray-700">
                      Dotrzymujemy terminów i zawsze stawiamy się na umówione spotkania. Możesz na nas polegać w każdej sytuacji.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-plumber-800">Obszar działania</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-center mb-8">
                Oferujemy usługi hydrauliczne w promieniu 30 mil od Warrington, obejmując takie obszary jak:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-plumber-700">Warrington</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-plumber-700">Liverpool</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-plumber-700">Manchester</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-plumber-700">Preston</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-plumber-700">Chester</h3>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-plumber-700">Crewe</h3>
                </div>
              </div>
              <p className="text-lg text-center mt-8">
                Nie widzisz swojej lokalizacji? Skontaktuj się z nami, aby sprawdzić, czy możemy świadczyć usługi w Twojej okolicy.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-plumber-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Gotowy do współpracy?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Zadzwoń do nas już teraz lub skorzystaj z formularza kontaktowego, aby umówić się na bezpłatną wycenę.
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

export default ONas;
