import React from "react";
import TextTitle from "../Shared/TextTitle";
import Image from "next/image";

export default function CertificateDetails() {
  return (
    <div className="px-2 max-w-layout mx-auto my-10 flex flex-col md:flex-row justify-between gap-4">
      <div className="flex flex-col gap-11 w-[350px] h-[444px] md:w-[680px] md:h-[594px] relative mx-auto">
        <Image src={"/services/electrician.png"} alt="worker" fill />
      </div>
      <div className="max-w-[510px] flex flex-col gap-11">
        <div className=" flex flex-col gap-5 ">
          <TextTitle title="Certified electricians" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p className="text-center md:text-left">
              At Jour Eliten, the focus is on the customer. Our experienced
              electricians are all certified and authorized by the Swedish
              Electrical Safety Authority.
            </p>
          </div>
        </div>
        <div className="max-w-[680px] flex flex-col gap-5 ">
          <TextTitle title="Electrical Installations in Stockholm: For Businesses and Homes" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p>
              Are you looking for a reliable and efficient electrical company
              for your home or business electrical installations? Then
              you&apos;ve come to the right place! We at Jour Eliten understand
              the importance of an electrical installation being safe and
              reliable and how important it is that the electricity works as it
              should, at home,
              <span className="text-primary underline">Read more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
