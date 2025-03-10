import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast.success("Wiadomość została wysłana. Skontaktujemy się wkrótce.", {
        description: "Dziękujemy za kontakt z Polski Hydraulik.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-plumber-800 to-plumber-700 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 fade-in-up">Kontakt</h1>
            <p className="text-xl max-w-3xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              Skontaktuj się z nami, aby uzyskać więcej informacji lub umówić się na bezpłatną wycenę.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 stagger-fade-in">
              <a href="tel:07960367566" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg">
                <Phone className="h-5 w-5" />
                <span>07960 367 566</span>
              </a>
              <a href="mailto:kontakt@polskihydraulik.uk" className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-lg">
                <Mail className="h-5 w-5" />
                <span>kontakt@polskihydraulik.uk</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative fade-in-up">
                <div className="absolute -top-4 -right-4 bg-accent text-white p-2 rounded-lg shadow-md">
                  <Mail className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-plumber-800">Wyślij wiadomość</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Imię i nazwisko *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-plumber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-plumber-500 focus:border-transparent transition-all duration-300"
                        placeholder="jan@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Numer telefonu *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-plumber-500 focus:border-transparent transition-all duration-300"
                        placeholder="07XXX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-plumber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Opisz swoje potrzeby lub zapytaj o wycenę..."
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-plumber-700 hover:bg-plumber-800 text-white flex items-center justify-center gap-2 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        <span>Wysyłanie...</span>
                      </div>
                    ) : (
                      <>
                        <span>Wyślij wiadomość</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Szybka odpowiedź w ciągu 24 godzin</span>
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Bezpłatna wycena bez zobowiązań</span>
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8 fade-in-up" style={{animationDelay: "0.2s"}}>
                <h2 className="text-2xl font-bold mb-8 text-plumber-800 relative inline-block">
                  Informacje kontaktowe
                  <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-accent"></span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-plumber-600 to-plumber-700 p-3 rounded-full text-white shadow-md">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-plumber-800">Telefon</h3>
                      <p className="text-gray-600 mb-2">Zadzwoń do nas, aby szybko umówić się na usługę</p>
                      <a
                        href="tel:07960367566"
                        className="text-plumber-700 hover:text-plumber-500 font-semibold text-lg inline-flex items-center group"
                      >
                        07960 367 566
                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-plumber-600 to-plumber-700 p-3 rounded-full text-white shadow-md">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-plumber-800">Email</h3>
                      <p className="text-gray-600 mb-2">Napisz do nas, odpowiemy najszybciej jak to możliwe</p>
                      <a
                        href="mailto:kontakt@polskihydraulik.uk"
                        className="text-plumber-700 hover:text-plumber-500 font-semibold inline-flex items-center group"
                      >
                        kontakt@polskihydraulik.uk
                        <ArrowRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex items-start gap-4">
                    <div className="bg-gradient-to-br from-plumber-600 to-plumber-700 p-3 rounded-full text-white shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1 text-plumber-800">Obszar działania</h3>
                      <p className="text-gray-600 mb-3">
                        Oferujemy usługi w promieniu 30 mil od Warrington, obejmując:
                      </p>
                      <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                        {["Warrington", "Liverpool", "Manchester", "Preston", "Chester", "Crewe"].map((city) => (
                          <div key={city} className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-accent rounded-full"></span>
                            <span className="text-gray-700">{city}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-plumber-50 to-plumber-100 p-6 rounded-xl shadow-sm border border-plumber-200 mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-plumber-700" />
                    <h3 className="text-xl font-semibold text-plumber-800">Godziny pracy</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b border-plumber-200">
                      <span className="font-medium text-plumber-700">Poniedziałek - Piątek</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-plumber-800">8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-plumber-200">
                      <span className="font-medium text-plumber-700">Sobota</span>
                      <span className="bg-white px-3 py-1 rounded-full text-sm font-medium text-plumber-800">9:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-plumber-700">Niedziela</span>
                      <span className="bg-accent/90 text-white px-3 py-1 rounded-full text-sm font-medium">Tylko awarie</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded-lg border border-plumber-200">
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-accent mt-0.5">*</span>
                      <span>W nagłych przypadkach jesteśmy dostępni poza standardowymi godzinami pracy.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-plumber-800 mb-3">Nasza lokalizacja</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Jesteśmy zlokalizowani w Warrington, ale świadczymy usługi w promieniu 30 mil, obejmując większe miasta w regionie.
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 overflow-hidden fade-in-up" style={{animationDelay: "0.2s"}}>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76344.13016281403!2d-2.65720565!3d53.39250855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b03d1742c1bc7%3A0xc3263d4f6937a8f0!2sWarrington!5e0!3m2!1sen!2suk!4v1654812947031!5m2!1sen!2suk"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Polski Hydraulik location map"
                ></iframe>
              </div>
            </div>
            <div className="mt-8 text-center fade-in-up" style={{animationDelay: "0.3s"}}>
              <p className="text-gray-600">
                Nie widzisz swojej lokalizacji? <a href="tel:07960367566" className="text-plumber-700 hover:text-plumber-500 font-medium">Zadzwoń do nas</a> i zapytaj o dostępność w Twojej okolicy.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 bg-plumber-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 fade-in-up">Gotowy na profesjonalne usługi hydrauliczne?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto fade-in-up" style={{animationDelay: "0.2s"}}>
              Skontaktuj się z nami już dziś i przekonaj się, dlaczego jesteśmy najlepszym wyborem w regionie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center stagger-fade-in">
              <Button asChild size="lg" className="bg-accent hover:bg-accent-dark text-white hover-lift">
                <a href="tel:07960367566" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <span>Zadzwoń teraz</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
