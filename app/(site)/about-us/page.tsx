import OnCall from "@/components/About/OnCall";
import Features from "@/components/Home/Features";
import Join from "@/components/Home/Join";
import ServicesBanner from "@/components/Services/ServicesBanner";
import ContactUs from "@/components/Shared/ContactUs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Us",
  // description: "Blog page",
};

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Om oss"
        breadcrumb="om oss sida"
        img="/about/banner.png"
      />
      <OnCall />
      <Join />
      <Features />
      <ContactUs />
    </div>
  );
}
