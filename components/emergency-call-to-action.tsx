"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";

export default function EmergencyCallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-20 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Behöver du akut hjälp?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Ladda ner vår app eller ring oss direkt för snabb hjälp med ditt
              akuta problem. Våra certifierade tekniker är redo att hjälpa dig
              dygnet runt.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button
                size="lg"
                className="rounded-full px-8 bg-white text-emerald-600 hover:bg-gray-100 flex items-center gap-2"
              >
                <PhoneCall className="h-5 w-5" />
                Ring 08-123 45 67
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 bg-transparent text-white border-white hover:bg-white hover:text-emerald-600"
              >
                Ladda ner appen
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.needz.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/playStore.png"
                  alt="Get it on Google Play"
                  width={160}
                  height={48}
                  className="h-14 w-auto"
                />
              </Link>
              <Link
                href="https://apps.apple.com/se/app/needz/id1446307369"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/appleStore2.png"
                  alt="Download on the App Store"
                  width={160}
                  height={48}
                  className="h-14 w-auto"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[300px]">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1611095973362-88e8e2557e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  alt="Emergency Service App"
                  width={300}
                  height={600}
                  className="rounded-[36px] shadow-2xl border-[8px] border-white"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-300 rounded-full opacity-70 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-300 rounded-full opacity-70 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
