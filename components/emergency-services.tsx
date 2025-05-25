"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Zap,
  Key,
  Droplet,
  FlameIcon as Fire,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function EmergencyServices() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const emergencyServices = [
    {
      icon: Wrench,
      title: "VVS Jour",
      description:
        "Akut hjälp med vattenläckor, stopp i avlopp, trasiga rör och andra VVS-problem som inte kan vänta.",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/services/plumbing",
    },
    {
      icon: Zap,
      title: "Eljour",
      description:
        "Snabb hjälp vid strömavbrott, elfel, kortslutningar och andra elektriska problem som kräver omedelbar åtgärd.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/services/electrical",
    },
    {
      icon: Key,
      title: "Låssmed Jour",
      description:
        "Låst ute? Vi hjälper dig med låsöppning, låsbyte och andra akuta låsproblem oavsett tid på dygnet.",
      image:
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      link: "/services/#locksmith",
    },
    {
      icon: Droplet,
      title: "Vattenskador",
      description:
        "Akut sanering och åtgärd vid vattenskador för att minimera skadan på din fastighet och förhindra mögelbildning.",
      image:
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/#water-damage",
    },
    {
      icon: Fire,
      title: "Värmejour",
      description:
        "Problem med värmesystemet? Vi hjälper dig med reparation av element, värmepannor och andra värmekällor.",
      image:
        "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/services/#heating",
    },
    {
      icon: Shield,
      title: "Säkerhetsjour",
      description:
        "Akut hjälp med säkerhetssystem, larm och andra säkerhetslösningar för ditt hem eller företag.",
      image:
        "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/#security",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Våra Jourtjänster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Vi erbjuder ett brett utbud av akuta tjänster för att hjälpa dig när
            du behöver det som mest. Alla våra jourtjänster är tillgängliga
            dygnet runt, alla dagar om året.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {emergencyServices.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <Link href={service.link}>
                <Card className="h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex items-center">
                      <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center mr-3">
                        <service.icon className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
