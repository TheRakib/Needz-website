"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Stockholm city"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-600/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 bg-white text-emerald-600 text-sm font-medium rounded-full mb-4">
            Jour Tjänster 24/7
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tjänster när du behöver dem
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Needz kopplar ihop dig med kvalificerade hantverkare i Stockholm, dygnet runt.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="rounded-full px-8 bg-emerald-600 hover:bg-emerald-700 text-white">
                Ladda ner appen
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-transparent text-white border-white hover:bg-white hover:text-emerald-600"
              >
                Läs mer
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* App Store Badges */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="https://play.google.com/store/apps/details?id=com.needz.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://needz.se/wp-content/uploads/2023/03/google-play-badge.png"
              alt="Get it on Google Play"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="https://apps.apple.com/se/app/needz/id1446307369" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://needz.se/wp-content/uploads/2023/03/app-store-badge.png"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
