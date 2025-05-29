"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function AboutMission() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4">
              Vår Historia
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Vår mission och vision</h2>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-800">Vision</h3>
              <p className="text-lg text-gray-600 mb-4">
                Att bli den ledande självförsörjande och hållbar tjänster förmedlingsplattform. Med det
                menar jag att vi tränar efter att låta klivet samt freelancer självständigt genomföra implementationen
                av behovet som efterfrågas.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">Mission</h3>
              <p className="text-lg text-gray-600">
                Att att förmedla exceptionella tjänsteleverantörer med fokus på kvalitet, noggrannhet och kundnöjdhet.
                Plattformen prioriterar inte enbart att uppfylla kundens behov, utan strävar även att överträffa kundens
                förväntningar vid varje enskilt uppdrag.
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Needz Team"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-emerald-100 rounded-full z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-emerald-100 rounded-full z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
