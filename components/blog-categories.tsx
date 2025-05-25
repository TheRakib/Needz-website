"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const categories = [
    { name: "VVS", count: 12 },
    { name: "Elektricitet", count: 9 },
    { name: "Snickeri", count: 7 },
    { name: "Underhåll", count: 15 },
    { name: "DIY", count: 8 },
    { name: "Energi", count: 6 },
    { name: "Säkerhet", count: 5 },
    { name: "Inredning", count: 10 },
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <Card className="border-0 shadow-md">
        <CardHeader className="pb-2">
          <CardTitle>Kategorier</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category, index) => (
              <li key={index} className="flex justify-between items-center">
                <Link
                  href={`/blogg/kategori/${category.name.toLowerCase()}`}
                  className="text-gray-700 hover:text-emerald-600 transition-colors"
                >
                  {category.name}
                </Link>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{category.count}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  )
}
