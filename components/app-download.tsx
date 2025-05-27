"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AppDownload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ladda ner Needz-appen idag
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Få tillgång till pålitliga hantverkstjänster dygnet runt med bara
              några klick. Vår app gör det enkelt att hitta och boka
              certifierade proffs för alla dina behov.
            </p>
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
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Needz App Screenshot"
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
