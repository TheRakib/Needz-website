import React from "react";
import Details from "../Details";
import Image from "next/image";
import TextTitle from "@/components/Shared/TextTitle";
import CallContactButtons from "@/components/Shared/CallContactButtons";

export default function AgreementDescription() {
  return (
    <div className="max-w-layout mx-auto mb-[120px]">
      <Details
        {...detailsProps}
        containerClass="!flex-col-reverse md:!flex-row"
      />
      <div className=" flex flex-col lg:flex-row justify-between gap-[50px] mt-5 px-2">
        <div className="flex flex-col gap-11">
          <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[580px] xl:w-[664px] md:h-[692px] ml-auto mr-auto lg:ml-0 relative ">
            <Image
              src={"/services/agreement/description.png"}
              alt={"description"}
              fill
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col gap-9 text-black/70 text-[18px]">
            <p className="">
              It can be very costly and stressful to call new craftsmen for
              every job. But with the help of a free service agreement, the
              association or company can feel secure. Through a service
              agreement, we can offer favorable prices as well as plumbers and
              electricians available around the clock where no extra costs are
              added.
            </p>
            <p>
              There are several advantages to writing a service agreement. As a
              service contract customer, we prioritize you in time planning and
              also give you discounted prices. Since the craftsmen will work a
              lot in your property, they get to know the property and can thus
              solve problems faster and also anticipate problems before they
              happen.
            </p>
            <p>
              We currently help many BRFs with their service contracts. Welcome
              to Kontakta oss!
            </p>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <CallContactButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

const detailsProps = {
  title:
    "Secure your peace of mind with our complimentary contract for BRF and property owners.",
  description: {
    para1:
      "It is important to maintain any kind of property regularly. But it can be difficult for a condominium association or a property manager to get quick and efficient help without a service agreement.",
    para2: ` Plumbers may be needed for a water leak, pipe replacement, pipe inspection or a smaller job such as changing a faucet. If there is a sudden power outage in an apartment, you may quickly need to have an electrician there or an electrical switchboard may need to be replaced.`,
  },
};
