import React from "react";
import TextTitle from "../Shared/TextTitle";
import { Button } from "@mui/material";
import Image from "next/image";

export default function LocalElectrician() {
  return (
    <div className="max-w-layout mx-auto mt-[80px] mb-[120px] px-2">
      <div className="bg-primary/10 grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 p-[30px] flex flex-col gap-5  ">
          <TextTitle title="Hitta din lokala snickare" />
          <p className="text-[18px] text-black/70 tracking-tight text-center md:text-left">
            Vi har snickare över hela Stockholmsområdet, redo att hantera alla
            typer av snickeriprojekt. Alla våra snickare är yrkesutbildade och
            har gedigen erfarenhet av både små och stora uppdrag, säkerställande
            högsta kvalitet och expertis i varje projekt.
          </p>
          <div className="flex flex-col gap-7 mt-auto">
            <Button
              className="p-0 m-0 w-[320px] md:w-[383px] h-[92px] border-0 hover:border-0"
              variant="outlined"
            >
              <a
                className="w-full h-full flex items-center justify-center capitalize text-[20px] md:text-[26px] border-2 border-primary/60 rounded-lg "
                href="tel:08302241"
              >
                Elektriker Bromma
              </a>
            </Button>
            <Button
              className="p-0 m-0 w-[320px] md:w-[383px] h-[92px] border-0 hover:border-0"
              variant="outlined"
            >
              <a
                className="w-full h-full flex items-center justify-center capitalize text-[20px] md:text-[26px] border-2 border-primary/60 rounded-lg "
                href="tel:08302241"
              >
                Elektriker Järva
              </a>
            </Button>
            <Button
              className="p-0 m-0 w-[320px] md:w-[383px] h-[92px] border-0 hover:border-0"
              variant="outlined"
            >
              <a
                className="w-full h-full flex items-center justify-center capitalize text-[20px] md:text-[26px] border-2 border-primary/60 rounded-lg "
                href="tel:08302241"
              >
                Elektriker Älvsjö
              </a>
            </Button>
            <Button
              className="p-0 m-0 w-[320px] md:w-[383px] h-[92px] border-0 hover:border-0"
              variant="outlined"
            >
              <a
                className="w-full h-full flex items-center justify-center capitalize text-[20px] md:text-[26px] border-2 border-primary/60 rounded-lg "
                href="tel:08302241"
              >
                Elektriker Kungsholmen
              </a>
            </Button>
          </div>
        </div>
        <div className="col-span-1 md:ml-auto mx-auto w-[340px] h-[350px] md:w-full md:h-full bg-white relative">
          <Image src={"/services/map.jpg"} alt="map" fill />
        </div>
      </div>
    </div>
  );
}
