"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPosts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const blogPosts = [
    {
      title: "5 vanliga VVS-problem och hur du löser dem",
      excerpt:
        "Lär dig hur du identifierar och åtgärdar de vanligaste VVS-problemen i ditt hem innan du behöver ringa en rörmokare.",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      date: "15 mars 2023",
      author: "Erik Johansson",
      category: "VVS",
      slug: "5-vanliga-vvs-problem",
    },
    {
      title: "Så förbereder du ditt hem för vintern",
      excerpt:
        "Med rätt förberedelser kan du undvika dyra reparationer och säkerställa att ditt hem är varmt och säkert under de kalla månaderna.",
      image:
        "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1926&q=80",
      date: "2 oktober 2023",
      author: "Maria Svensson",
      category: "Underhåll",
      slug: "forbered-ditt-hem-for-vintern",
    },
    {
      title: "Energibesparande tips för ditt hem",
      excerpt:
        "Enkla men effektiva sätt att minska din energiförbrukning och spara pengar på dina räkningar samtidigt som du bidrar till en bättre miljö.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "18 september 2023",
      author: "Anders Lindberg",
      category: "Energi",
      slug: "energibesparande-tips",
    },
    {
      title: "Så väljer du rätt elektriker för ditt projekt",
      excerpt:
        "Att hitta en pålitlig och kvalificerad elektriker är avgörande för säkerheten i ditt hem. Här är vad du bör tänka på.",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45249ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "5 augusti 2023",
      author: "Sofia Berg",
      category: "Elektricitet",
      slug: "valja-ratt-elektriker",
    },
    {
      title: "DIY-projekt som ökar värdet på ditt hem",
      excerpt:
        "Dessa enkla hemförbättringsprojekt kan du göra själv och de kan avsevärt öka värdet på din bostad inför en eventuell försäljning.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2531&q=80",
      date: "22 juli 2023",
      author: "Johan Nilsson",
      category: "DIY",
      slug: "diy-projekt-oka-varde",
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-8"
    >
      {blogPosts.map((post, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="aspect-[4/3] md:h-full relative">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.date}</span>
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 hover:text-emerald-600 transition-colors">
                    <Link href={`/blogg/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blogg/${post.slug}`}
                    className="inline-flex items-center text-emerald-600 font-medium hover:underline"
                  >
                    Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
