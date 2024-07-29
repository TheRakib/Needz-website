import CallContactButtons from "@/components/Shared/CallContactButtons";
import SecondTitle from "@/components/Shared/SecondTitle";
import React from "react";

export default function Agreement() {
  return (
    <div className="max-w-layout mx-auto">
      <div className="flex flex-col gap-5">
        <SecondTitle
          title="Serviceavtal med högtryckstvätt"
          className="!text-center"
        />
        <div className="flex flex-col gap-7 text-[20px] max-w-[1005px] mx-auto ">
          <p className="text-center">
            Gå med i needz:s serviceavtal för exklusiva förmåner! Våra partners
            får prioriterad service, rabatter, en personlig manager och mer –
            allt helt kostnadsfritt.
          </p>
          <p className="text-secondary text-center">
            Kontakta needz nu för detaljer om våra tjänster och avtal.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-[70px]">
        <CallContactButtons />
      </div>
    </div>
  );
}
