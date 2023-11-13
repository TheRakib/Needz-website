import React from "react";
import Details from "../Details";
import Image from "next/image";
import CallContactButtons from "@/components/Shared/CallContactButtons";
import TextTitle from "@/components/Shared/TextTitle";

export default function Description() {
  return (
    <div className="max-w-layout mx-auto mb-[120px]">
      <Details
        {...detailsProps}
        containerClass="!flex-col-reverse md:!flex-row"
      />
      <div className=" flex flex-col lg:flex-row justify-between gap-[50px] mt-5">
        <div className="flex flex-col gap-11">
          <p className="text-black/70 text-[18px]">
            We carry out both large and small projects. We undertake everything
            from
            <a
              href="https://www.joureliten.se/byta-eluttag-sjalv/"
              className="underline"
            >
              {" "}
              replacing electrical outlets{" "}
            </a>
            or
            <a
              href="https://www.joureliten.se/installera-ny-diskmaskin/"
              className="underline"
            >
              {" "}
              installing white goods
            </a>
            , to installing smart home solutions in an entire building
            throughout Stockholm. Our experienced electricians visit you with
            our well-equipped service vans and carry out a fault finding and
            review on site.
          </p>
          <div className="w-[310px] h-[392px] md:w-[560px] lg:w-[580px] xl:w-[664px] md:h-[692px] ml-auto mr-auto md:ml-0 relative ">
            <Image
              src={"/services/washing-machine/description.png"}
              alt={"description"}
              fill
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[45px]">
          <div className="flex flex-col gap-9">
            <TextTitle title="Solid experience in new building, rebuilding, and new electrical installation" />
            <p className="text-black/70 text-[18px]">
              Are you renovating or rebuilding? We undertake assignments in new
              construction, remodeling and new installation throughout Greater
              Stockholm and the surrounding area. The size of your project is of
              no importance to Jour Eliten. We help you develop proposals for a
              modern, efficient and energy-saving solution. With us, you get a
              clear and concise picture of the costs and scope of the renovation
              work.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <TextTitle title="Quality and safety" />
            <div className="text-black/70 text-[18px] flex flex-col gap-7">
              <p>
                We are responsive to your views and strive to not only meet, but
                also exceed your expectations. All work is therefore carried out
                by professional electricians who are approved by the Swedish
                Electrical Safety Authority with extensive experience who
                possess adequate, up-to-date and verified knowledge in relevant
                areas.
              </p>
              <p>
                We protect the environment and also strive to design
                energy-efficient solutions, as well as to choose materials and
                products that are environmentally friendly and facilitate
                recycling.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-10 mt-[100px]">
        <CallContactButtons />
      </div>
    </div>
  );
}

const detailsProps = {
  description: {
    para1:
      "With our broad competence in electricity, we can take on assignments in everything from electrical installations in villas and holiday homes to larger undertakings.",
    para2: ` Our knowledgeable <a href="#" class="underline">electricians</a> help both companies and private individuals with everything from minor electrical services to more extensive contracting projects.`,
  },
  title2: "All types of electrical installations",
  title2Class: "justify-between",
};
