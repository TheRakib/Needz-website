"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CaseStudies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const caseStudies = [
    {
      title: "Transforming E-commerce Experience",
      description: "How we helped an online retailer increase conversions by 35% through UX improvements.",
      image: "/placeholder.svg?height=400&width=600",
      category: "E-commerce",
    },
    {
      title: "Streamlining Financial Services",
      description: "Modernizing legacy systems for a financial institution, resulting in 50% faster processing times.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Finance",
    },
    {
      title: "Revolutionizing Healthcare Communication",
      description:
        "Creating a secure platform for patient-doctor communication that improved satisfaction rates by 40%.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Healthcare",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Success Stories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Explore how we've helped businesses across industries achieve their goals.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((study, index) => (
            <motion.div key={index} variants={itemVariants} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-[3/2] relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium">{study.category}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {study.title}
              </h3>
              <p className="text-gray-600 mb-4">{study.description}</p>
              <div className="flex items-center text-primary font-medium group-hover:underline">
                <span>Read case study</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            View All Case Studies
          </Button>
        </div>
      </div>
    </section>
  )
}
