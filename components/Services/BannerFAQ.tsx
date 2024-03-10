"use client";
import React from "react";
import FAQ from "../Shared/FAQ";
import { Button } from "@mui/material";
import { BiPhoneCall } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function BannerFAQ() {
  const router = useRouter();
  return (
    <div className="max-w-layout mx-auto mt-[50px]">
      <FAQ
        variant="services"
        titleClass="mb-6 !text-center"
        faqItems={faqItems}
      />
      <div className="flex items-center justify-center gap-7 flex-col md:flex-row mt-20">
        <Link href={"#"}>
          <Image
            src={"/social/playStore.png"}
            alt="get app on play store"
            className="lg:h-16 lg:w-52 h-12 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
            width={250}
            height={80}
          />
        </Link>

        <Link href={"#"}>
          <Image
            src={"/social/appleStore2.png"}
            alt="get app on play store"
            className="lg:h-16 lg:w-52 h-12 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
            width={250}
            height={80}
          />
        </Link>
      </div>
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Hur snabbt kan ni påbörja ett snickeriarbete?",
    description:
      "Vi siktar på att starta projekt så snabbt som möjligt, ofta inom samma dag. Vi är alltid redo att möta dina snickeribehov i Stockholm, oavsett tid på dygnet.",
  },
  {
    id: 2,
    title: "snickeritjänster erbjuder ni?",
    description:
      "Våra tjänster omfattar allt från anpassade möbler och inbyggda skåp till större renoveringsprojekt och nybyggnationer, allt utfört med skicklighet och precision.",
  },
  {
    id: 3,
    title: "Är era snickare kvalificerade och erfarna?",
    description:
      "Absolut, vårt team består av yrkesutbildade snickare med omfattande erfarenhet, säkerställande arbete av högsta kvalitet och hantverksmässig expertis.",
  },

  {
    id: 4,
    title: "Kan ni skapa anpassade snickerilösningar?",
    description:
      "Ja, vi specialiserar oss på att anpassa vårt arbete för att matcha dina specifika önskemål och behov, oavsett projektets storlek eller komplexitet.",
  },
  {
    id: 5,
    title: "Erbjuder ni garantier på ert arbete?",
    description:
      "Vi står fullt ut bakom kvaliteten på vårt arbete med en omfattande garanti, vilket försäkrar dig om långvarig tillfredsställelse med våra snickerilösningar.",
  },
];
