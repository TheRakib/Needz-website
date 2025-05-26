"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialState = () => ({
  name: "",
  email: "",
  subject: "",
  message: "",
});

export default function AboutContact() {
  const [formData, setFormData] = useState<FormState>(initialState());
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adress",
      details: ["Sveavägen 31", "113 34 Stockholm"],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["08-123 45 67", "070-123 45 67"],
    },
    {
      icon: Mail,
      title: "E-post",
      details: ["info@needz.se", "support@needz.se"],
    },
    {
      icon: Clock,
      title: "Öppettider",
      details: ["Mån-Fre: 08:00-18:00", "Jour: Dygnet runt"],
    },
  ];

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuccessMessage("");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file || null,
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    let isValid = true;

    // Check required fields
    if (!formData.name.trim()) {
      newErrors.name = "Namn krävs";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-post krävs";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Ogiltig e-postadress";
        isValid = false;
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Ämne krävs";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Meddelande krävs";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return toast.error("Vänligen fyll i alla obligatoriska fält korrekt");
    }

    try {
      const res = await axios.post("/api/mail", formData);
      if (res.status === 200) {
        setSuccessMessage("E-post skickad");
        setFormData(initialState());
        toast.success("Meddelande skickat!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Något gick fel. Försök igen.");
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4"
          >
            Kontakta Oss
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Vi vill höra från dig
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Har du frågor, feedback eller vill du veta mer om våra tjänster?
            Kontakta oss så återkommer vi så snart som möjligt.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <form
                  className="space-y-6"
                  onSubmit={(e) => handleSubscribe(e)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Namn
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ditt namn"
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        E-post
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Din e-postadress"
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Ämne
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Vad handlar ditt meddelande om?"
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Meddelande
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Skriv ditt meddelande här..."
                      rows={5}
                      className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    // onClick={handleSubscribe}
                    type="submit"
                    disabled={!!successMessage}
                  >
                    Skicka meddelande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex">
                  <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Följ oss
              </h3>
              <p className="text-gray-600 mb-4">
                Håll dig uppdaterad med våra senaste nyheter och uppdateringar
                genom att följa oss på sociala medier.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white hover:bg-emerald-700 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
