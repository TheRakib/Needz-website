"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function EmergencyFAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const faqs = [
    {
      question: "Hur snabbt kan ni vara på plats vid en akut situation?",
      answer:
        "Vid akuta situationer strävar vi efter att vara på plats inom 30-60 minuter i Stockholmsområdet. För standardjour är utryckningstiden 1-2 timmar. Exakt tid beror på din plats och aktuell belastning.",
    },
    {
      question: "Vad kostar det att anlita er jourtjänst?",
      answer:
        "Våra utryckningspriser börjar från 995 kr för standardjour och 1495 kr för akut jour. Efter att vår tekniker har bedömt problemet får du ett fast pris innan arbetet påbörjas. Vi har inga dolda avgifter.",
    },
    {
      question: "Är era tekniker certifierade?",
      answer:
        "Ja, alla våra tekniker är certifierade och har omfattande erfarenhet inom sina respektive områden. Vi säkerställer att de har rätt kompetens och behörighet för att utföra arbetet säkert och professionellt.",
    },
    {
      question: "Vilka områden i Stockholm täcker ni?",
      answer:
        "Vi täcker hela Stockholms län, inklusive förorter och närliggande kommuner. Oavsett om du befinner dig i innerstaden, Nacka, Solna, Huddinge eller andra områden kan vi hjälpa dig.",
    },
    {
      question: "Ger ni någon garanti på utfört arbete?",
      answer:
        "Ja, vi erbjuder 30 dagars garanti på standardjour och 60 dagars garanti på akut jour. För företagskunder erbjuder vi 90 dagars garanti. Garantin täcker både arbete och material som vi har installerat.",
    },
    {
      question: "Hur betalar jag för tjänsten?",
      answer:
        "Du kan betala med kort, Swish, faktura eller via vår app. För företagskunder erbjuder vi även möjligheten att betala mot faktura med 30 dagars betalningsvillkor.",
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
            Vanliga frågor
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Här hittar du svar på de vanligaste frågorna om våra jourtjänster. Hittar du inte svaret på din fråga?
            Kontakta oss direkt.
          </motion.p>
        </div>

        <div ref={ref} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-gray-200">
                  <AccordionTrigger className="text-left font-medium py-4 hover:text-emerald-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-2 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
