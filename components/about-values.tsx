"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Clock, Award, Heart, Users, Lightbulb } from "lucide-react"

export default function AboutValues() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const values = [
    {
      icon: Shield,
      title: "Kvalitet",
      description: "Vi kompromissar aldrig med kvaliteten på våra tjänster och arbetar endast med certifierade proffs.",
    },
    {
      icon: Clock,
      title: "Tillgänglighet",
      description: "Vi finns här för dig dygnet runt, alla dagar om året, för att hjälpa dig när du behöver det.",
    },
    {
      icon: Award,
      title: "Pålitlighet",
      description: "Vi håller våra löften och levererar alltid enligt överenskommelse, varje gång.",
    },
    {
      icon: Heart,
      title: "Kundnöjdhet",
      description: "Din tillfredsställelse är vår högsta prioritet, och vi går alltid den extra milen för våra kunder.",
    },
    {
      icon: Users,
      title: "Samarbete",
      description: "Vi tror på att bygga starka relationer med både våra kunder och våra hantverkare.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Vi strävar ständigt efter att förbättra vår plattform och tjänster genom ny teknik och idéer.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4"
          >
            Våra Värderingar
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Vad vi står för
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Våra kärnvärderingar vägleder allt vi gör och hjälper oss att leverera den bästa möjliga upplevelsen för
            våra kunder och partners.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
