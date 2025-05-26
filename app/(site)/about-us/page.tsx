import Image from "next/image";
import AboutMission from "@/components/about-mission";
import AboutTeam from "@/components/about-team";
import AboutValues from "@/components/about-values";
import AboutStats from "@/components/about-stats";
import AboutTestimonials from "@/components/about-testimonials";
import AboutContact from "@/components/about-contact";
import { Metadata } from "next";
import React from "react";
import OnCall from "@/components/About/OnCall";
import ContactUs from "@/components/Shared/ContactUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "needz: 24/7 VVS & EL nödtjänster i Stockholm, erbjuder planerade arbeten för individer & företag med certifierade rörmokare & elektriker.",
};

export default function page() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-emerald-700">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="About Us"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Om Needz
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Vi kopplar ihop kvalificerade hantverkare med kunder som behöver
            hjälp, dygnet runt i Stockholm.
          </p>
        </div>
      </section>

      <AboutMission />
      <AboutValues />
      <AboutTeam />
      <AboutStats />
      <AboutTestimonials />
      <AboutContact />
    </main>
    // <div>
    //   <ServicesBanner
    //     title="JOUR I HELA STOCKHOLM, DYGNET RUNT!"
    //     breadcrumb="om oss sida"
    //     img="/about-us.jpg"
    //   />
    //   <OnCall />
    //   <Features />
    //   <ContactUs />
    // </div>
  );
}
