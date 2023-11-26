import React from "react";
import TextTitle from "../Shared/TextTitle";
import { Button } from "@mui/material";
import Image from "next/image";

export default function LocalElectrician() {
  return (
    <div className="max-w-layout mx-auto mt-[80px] mb-[120px] px-2">
      <div className="bg-primary/10 grid grid-cols-1 md:grid-cols-2 ">
        <div className="col-span-1 p-[30px] flex flex-col gap-5  ">
          <TextTitle title="Hitta din lokala elektriker" />
          <p className="text-[18px] text-black/70 tracking-tight text-center md:text-left">
            Här kan du hitta din lokala elektriker i din stad och få hjälp med
            alla typer av elektriskt arbete. Alla våra elektriker är
            certifierade och auktoriserade att utföra både små och stora
            elektriska jobb.
          </p>
          <div className="flex flex-col gap-7 mt-auto">
            <Button
              className="w-[320px] md:w-[383px] h-[92px] capitalize text-[20px] md:text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Elektriker Bromma
            </Button>
            <Button
              className="w-[320px] md:w-[383px] h-[92px] capitalize text-[20px] md:text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Elektriker Järva
            </Button>
            <Button
              className="w-[320px] md:w-[383px] h-[92px] capitalize text-[20px] md:text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Elektriker Älvsjö
            </Button>
            <Button
              className="w-[320px] md:w-[383px] h-[92px] capitalize text-[20px] md:text-[26px] border-2 rounded-lg "
              variant="outlined"
            >
              Elektriker kunsholmen
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
