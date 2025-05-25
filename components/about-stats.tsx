"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

export default function AboutStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { value: 200, label: "Certifierade Hantverkare", suffix: "+" },
    { value: 15000, label: "Nöjda Kunder", suffix: "+" },
    { value: 98, label: "Kundnöjdhet", suffix: "%" },
    { value: 24, label: "Tillgänglighet", suffix: "/7" },
  ]

  // For animation of numbers
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView) {
      const intervals = stats.map((stat, index) => {
        const duration = 2000 // 2 seconds for the animation
        const steps = 30 // Number of steps in the animation
        const increment = stat.value / steps
        let count = 0

        return setInterval(() => {
          count += increment
          if (count >= stat.value) {
            count = stat.value
            clearInterval(intervals[index])
          }
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = Math.floor(count)
            return newCounts
          })
        }, duration / steps)
      })

      return () => intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isInView, stats])

  return (
    <section className="py-20 bg-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {counts[index]}
                {stat.suffix}
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
