import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

export default function ServicesBanner() {
  return (
    <div className="max-w-maxLayout mx-auto bg-[url('/services/banner.png')] h-[360px] ">
      <div className="bg-black/5 w-full h-full">
        <div className="max-w-layout mx-auto text-white flex flex-col items-center justify-center h-full">
          <SectionTitle title="Electrician in Stockholm" />
          <Breadcrumbs aria-label="breadcrumb" className="text-white">
            <Link
              color="inherit"
              href="/services"
              className="hover:underline transition-all"
            >
              Our Services
            </Link>
            <Typography>Electrician page</Typography>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}
