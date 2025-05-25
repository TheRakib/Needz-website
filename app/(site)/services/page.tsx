import React from "react";
import Image from "next/image";
import EmergencyServices from "@/components/emergency-services";
import EmergencyProcess from "@/components/emergency-process";
import EmergencyPricing from "@/components/emergency-pricing";
import EmergencyFAQ from "@/components/emergency-faq";
import EmergencyCallToAction from "@/components/emergency-call-to-action";

export default function page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-emerald-600">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Emergency Services"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Jour Tjänster 24/7
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Akut hjälp när du behöver det som mest. Våra certifierade proffs är
            redo att hjälpa dig dygnet runt, alla dagar om året.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
            <p className="text-white font-bold">Akut nummer: 08-123 45 67</p>
          </div>
        </div>
      </section>

      <EmergencyServices />
      <EmergencyProcess />
      <EmergencyPricing />
      <EmergencyFAQ />
      <EmergencyCallToAction />
    </main>
  );
}
