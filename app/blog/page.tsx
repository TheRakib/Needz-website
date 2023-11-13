import ServicesBanner from "@/components/Services/ServicesBanner";
import React from "react";

export default function page() {
  return (
    <div>
      <ServicesBanner
        title="Blog/Newsletter"
        breadcrumb="Blog/Newsletter page"
        img="/blog/banner.png"
      />
    </div>
  );
}
