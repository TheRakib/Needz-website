"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function Professionals() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const benefits = [
    "Certifierade och erfarna yrkesmän",
    "Snabb responstid, även för akuta ärenden",
    "Transparent prissättning utan dolda avgifter",
    "Kvalitetsgaranti på utfört arbete",
    "Tillgängliga dygnet runt, alla dagar",
    "Enkelt att boka och betala via appen",
  ]

  return (
    <section className="py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
              Våra Proffs
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Varför välja Needz?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Vi samarbetar endast med de bästa yrkesmännen i Sverige för att säkerställa att du får högsta kvalitet
              på alla tjänster.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=659&q=80"
                  alt="Professional Plumber"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=659&q=80"
                  alt="Professional Electrician"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=659&q=80"
                  alt="Professional Carpenter"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=659&q=80"
                  alt="Professional Cleaner"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
