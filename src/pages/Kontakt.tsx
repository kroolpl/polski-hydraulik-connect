
import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
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
        <section className="bg-plumber-800 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Skontaktuj się z nami, aby uzyskać więcej informacji lub umówić się na bezpłatną wycenę.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6 text-plumber-800">Wyślij wiadomość</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-plumber-500"
                    />
                  </div>
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-plumber-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-plumber-500"
                    />
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-plumber-500"
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-plumber-700 hover:bg-plumber-800 text-white flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      "Wysyłanie..."
                    ) : (
                      <>
                        <span>Wyślij wiadomość</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-plumber-800">Informacje kontaktowe</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-plumber-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-plumber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                      <p className="text-gray-700 mb-2">Zadzwoń do nas, aby szybko umówić się na usługę</p>
                      <a
                        href="tel:07960367566"
                        className="text-plumber-700 hover:text-plumber-500 font-semibold text-lg inline-flex items-center"
                      >
                        07960 367 566
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-plumber-100 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-plumber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <p className="text-gray-700 mb-2">Napisz do nas, odpowiemy najszybciej jak to możliwe</p>
                      <a
                        href="mailto:kontakt@polskihydraulik.uk"
                        className="text-plumber-700 hover:text-plumber-500 font-semibold inline-flex items-center"
                      >
                        kontakt@polskihydraulik.uk
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-plumber-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-plumber-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Obszar działania</h3>
                      <p className="text-gray-700 mb-2">
                        Oferujemy usługi w promieniu 30 mil od Warrington, obejmując:
                      </p>
                      <ul className="grid grid-cols-2 gap-2">
                        <li className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-plumber-500 rounded-full"></span>
                          <span>Warrington</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-plumber-500 rounded-full"></span>
                          <span>Liverpool</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-plumber-500 rounded-full"></span>
                          <span>Manchester</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-plumber-500 rounded-full"></span>
                          <span>Preston</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-plumber-500 rounded-full"></span>
                          <span>Chester</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-plumber-500 rounded-full"></span>
                          <span>Crewe</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-12 bg-plumber-50 p-6 rounded-lg border border-plumber-100">
                  <h3 className="text-xl font-semibold mb-4 text-plumber-800">Godziny pracy</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Poniedziałek - Piątek</span>
                      <span>8:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sobota</span>
                      <span>9:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Niedziela</span>
                      <span>Tylko awarie</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    * W nagłych przypadkach jesteśmy dostępni poza standardowymi godzinami pracy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-plumber-800 text-center">Nasza lokalizacja</h2>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;
