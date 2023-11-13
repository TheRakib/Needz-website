import Search from "@/components/Blog/Search";
import Topics from "@/components/Blog/Topics";
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
      <div className="max-w-layout mx-auto mt-10">
        <div className="flex gap-10">
          <div className="w-[370px] flex flex-col gap-5">
            <Search />
            <Topics />
          </div>
          <div className="max-w-[830px]"></div>
        </div>
      </div>
    </div>
  );
}
