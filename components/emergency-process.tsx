"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { PhoneCall, Clock, UserCheck, CheckCircle } from "lucide-react"

export default function EmergencyProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      icon: PhoneCall,
      title: "1. Ring eller använd appen",
      description: "Kontakta oss via telefon eller Needz-appen. Beskriv ditt problem så vi kan skicka rätt specialist.",
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      icon: Clock,
      title: "2. Snabb utryckning",
      description:
        "Vi skickar en certifierad specialist till din adress så snabbt som möjligt, oftast inom 30-60 minuter.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: UserCheck,
      title: "3. Professionell hjälp",
      description: "Vår specialist diagnostiserar problemet och utför nödvändiga åtgärder för att lösa det omedelbart.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: CheckCircle,
      title: "4. Problemet löst",
      description: "När arbetet är klart får du en detaljerad rapport och garanti på det utförda arbetet.",
      color: "bg-amber-100 text-amber-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Så fungerar vår jourtjänst
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Vi har gjort processen så enkel som möjligt för att du ska få hjälp snabbt när du behöver det som mest.
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className={`h-14 w-14 rounded-full ${step.color} flex items-center justify-center mb-4 mx-auto`}>
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-emerald-600">
            Akut nummer: <span className="text-xl">08-123 45 67</span>
          </p>
        </div>
      </div>
    </section>
  )
}
