import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  title: string;
  breadcrumb: string;
  img: string;
};

export default function ServicesBanner({ title, breadcrumb, img }: Props) {
  const backgroundImageStyle = {
    backgroundImage: `url(${img})`, // Set the image dynamically
  };

  return (
    <div
      className="max-w-maxLayout mx-auto  h-[360px] "
      style={backgroundImageStyle}
    >
      <div className="bg-black/5 w-full h-full">
        <div className="max-w-layout mx-auto text-white flex flex-col items-center justify-center h-full">
          <SectionTitle title={title} />
          <Breadcrumbs aria-label="breadcrumb" className="text-white">
            <Link
              color="inherit"
              href="/services"
              className="hover:underline transition-all"
            >
              Our Services
            </Link>
            <Typography>{breadcrumb}</Typography>
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
}
