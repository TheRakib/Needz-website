import React from "react";
import SectionTitle from "../Shared/SectionTitle";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  breadcrumb: string;
  img: string;
  titleClass?: string;
  extraInfo?: React.ReactNode;
  firstItem?: string;
  varient?: "BLOG";
};

export default function ServicesBanner({
  title,
  breadcrumb,
  img,
  titleClass,
  extraInfo,
  firstItem = "våra tjänster",
  varient,
}: Props) {
  return (
    <div
      className={`flex-col overflow-hidden relative flex min-h-[362px] items-center justify-center px-5 max-w-maxLayout mx-auto ${
        varient === "BLOG" && "pt-28 pb-14"
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          alt="bg"
          loading="lazy"
          fill
          src={img}
          className="object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-emerald-600/50"></div>
      </div>

      {/* Content */}
      <div className="max-w-layout mx-auto text-white flex flex-col items-center justify-center h-full relative z-10">
        <SectionTitle title={title} className={titleClass ? titleClass : ""} />
        <Breadcrumbs aria-label="breadcrumb" className="text-white">
          <Link
            color="inherit"
            href="/blog"
            className="hover:underline transition-all text-white/70"
          >
            {firstItem}
          </Link>
          <Typography>{breadcrumb}</Typography>
        </Breadcrumbs>
        {extraInfo ? extraInfo : null}
      </div>
    </div>
  );
}
