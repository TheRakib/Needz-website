"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogNewsletter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="border-0 shadow-md bg-emerald-50">
        <CardHeader className="pb-2">
          <CardTitle>Prenumerera på vårt nyhetsbrev</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">Få de senaste artiklarna, tipsen och erbjudandena direkt i din inkorg.</p>
          <form className="space-y-3">
            <Input
              type="email"
              placeholder="Din e-postadress"
              className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
            />
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Prenumerera</Button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Vi respekterar din integritet. Avregistrera dig när som helst.</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
