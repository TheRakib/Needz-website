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
};

export default function ServicesBanner({
  title,
  breadcrumb,
  img,
  titleClass,
}: Props) {
  return (
    <div className="flex-col blur-[0.5px] overflow-hidden relative flex min-h-[362px] items-center justify-center px-5 max-w-maxLayout mx-auto">
      <div className="w-full h-full">
        <Image
          alt="bg"
          loading="lazy"
          fill
          src={img}
          className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
        />
      </div>
      <div className="max-w-layout mx-auto text-white flex flex-col items-center justify-center h-full">
        <SectionTitle title={title} className={titleClass ? titleClass : ""} />
        <Breadcrumbs aria-label="breadcrumb" className=" text-white">
          <Link
            color="inherit"
            href="/services"
            className="hover:underline transition-all text-white/70"
          >
            Our Services
          </Link>
          <Typography>{breadcrumb}</Typography>
        </Breadcrumbs>
      </div>
    </div>
  );
}
