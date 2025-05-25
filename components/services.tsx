"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Wrench, Zap, Truck, ShoppingBag, Gift, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Truck,
      title: "Flytta och leverera",
      description:
        "Professionell hjälp med flyttning och leverans av möbler, varor och andra föremål.",
      image:
        "https://images.unsplash.com/photo-1600125693229-a4c43bf9e124?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/services/move-delivery",
    },
    {
      icon: ShoppingBag,
      title: "Köp åt mig",
      description:
        "Låt någon handla och leverera det du behöver, när du inte har tid eller möjlighet.",
      image:
        "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/services/buy-for-me",
    },
    {
      icon: Gift,
      title: "Bortskänkes",
      description:
        "Hitta eller ge bort saker du inte längre behöver till någon som kan använda dem.",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80",
      link: "/services/giveaway",
    },
    {
      icon: Recycle,
      title: "Återvinning",
      description:
        "Hjälp med att transportera och återvinna möbler, elektronik och andra föremål.",
      image:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      link: "/services/recycle",
    },
    {
      icon: Wrench,
      title: "VVS",
      description:
        "Akut hjälp med rörläggning, läckage, avlopp och andra VVS-problem dygnet runt.",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      link: "/services/plumbing",
    },
    {
      icon: Zap,
      title: "Elektriskt arbete",
      description:
        "Certifierade elektriker för säkra och professionella elektriska installationer och reparationer.",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      link: "/services/electrical",
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
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4"
          >
            Våra Tjänster
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            24/7 Jourtjänster i Stockholm
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Alla våra proffs är certifierade, erfarna och redo att leverera
            snabb, högkvalitativ service direkt till din dörr.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
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
