"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function EmergencyPricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pricingOptions = [
    {
      title: "Standardjour",
      price: "995 kr",
      description: "Utryckning inom 1-2 timmar",
      features: [
        "Tillgänglig dygnet runt",
        "Certifierade tekniker",
        "Fast pris för utryckning",
        "Transparent prissättning",
        "30 dagars garanti",
      ],
      isPopular: false,
    },
    {
      title: "Akut Jour",
      price: "1495 kr",
      description: "Utryckning inom 30-60 minuter",
      features: [
        "Prioriterad utryckning",
        "Certifierade tekniker",
        "Fast pris för utryckning",
        "Transparent prissättning",
        "60 dagars garanti",
        "Uppföljning efter service",
      ],
      isPopular: true,
    },
    {
      title: "Företagsjour",
      price: "Kontakta oss",
      description: "Anpassade lösningar för företag",
      features: [
        "Prioriterad utryckning",
        "Dedikerad kundtjänst",
        "Skräddarsydda serviceavtal",
        "Volymrabatter",
        "90 dagars garanti",
        "Regelbundna underhållskontroller",
      ],
      isPopular: false,
    },
  ]

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
            Priser för jourtjänster
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Transparent prissättning utan överraskningar. Utryckningskostnaden är fast, och du får alltid ett
            prisförslag innan arbetet påbörjas.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card
                className={`h-full border-2 ${
                  option.isPopular ? "border-emerald-500 shadow-lg" : "border-gray-200"
                } relative transition-all duration-300 hover:shadow-xl`}
              >
                {option.isPopular && (
                  <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                    Populärast
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <div className="mt-2 mb-1">
                    <span className="text-3xl font-bold">{option.price}</span>
                    {option.price !== "Kontakta oss" && <span className="text-gray-500 ml-1">/ utryckning</span>}
                  </div>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-4">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-emerald-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Alla priser är inklusive moms. Materialkostnader tillkommer baserat på vad som behövs för att åtgärda
            problemet.
          </p>
        </div>
      </div>
    </section>
  )
}
