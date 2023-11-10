import SecondTitle from "@/components/Shared/SecondTitle";
import Image from "next/image";
import React from "react";

const TEXT_LENGTH = 140;
export default function PlumberServices() {
  const truncateDescription = (description: string) => {
    const maxLength = TEXT_LENGTH;
    return description.length > maxLength
      ? description.slice(0, maxLength) + "..."
      : description;
  };
  return (
    <div className="max-w-maxLayout bg-primary text-white py-[90px] my-[120px] mx-auto">
      <div className="max-w-layout mx-auto">
        <div className="">
          <p className="text-[18px] capitalize text-center text-white/70">
            Plumbing Services We Offer
          </p>
          <SecondTitle
            title="Trusted plumbers, here to help when you need us most. We adapt our services to meet your unique needs, 24/7."
            className="max-w-[1000px] mx-auto tracking-tighter !leading-[54px] "
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] lg:grid-cols-4 mt-[50px]">
          {serviceCardItems.map((item) => (
            <div
              key={item.id}
              className="col-span-1 min-h-[368px] max-w-[300px] min-w-[300px] md:min-w-full mx-auto flex flex-col justify-between p-[30px] bg-white text-black rounded-xl"
            >
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="flex h-16 w-16 p-3 shadow-lg shadow-primary/70 rounded-full">
                    <Image
                      src={item.img}
                      width={44}
                      height={44}
                      // className="object-cover w-full h-full rounded-full"
                      alt="service-icon"
                    />
                  </div>
                </div>
                <h3 className="text-[24px] font-semibold">{item.title}</h3>
              </div>
              <div className="flex flex-col">
                <p className="text-black/70 max-w-[217px]">
                  {truncateDescription(item.description)}{" "}
                  {item.description.length > TEXT_LENGTH && (
                    <span className="text-primary underline whitespace-nowrap">
                      Read More
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
          <div className="col-span-1 min-h-[368px] flex flex-col items-center justify-center p-[30px] text-white rounded-xl text-[30px] ">
            <p className="text-center">Call now</p>
            <p className="font-semibold text-center">08-235520</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const serviceCardItems = [
  {
    id: 1,
    title: "Water Heater",
    img: "/home/services/plumber/icon1.svg",
    description:
      "Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
  {
    id: 2,
    title: "Heat Pumps",
    img: "/home/services/plumber/icon2.svg",
    description:
      "We service and install all types of heat pumps. Choosing a heat pump as a heat source in your home is an investment, not only for your wallet. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
  {
    id: 3,
    title: "Radiators and elements",
    img: "/home/services/plumber/icon3.svg",
    description:
      "Are all your radiators cold? Or do they work flawlessly in some rooms and not at all in others? Then you need a plumbing technician!. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
  {
    id: 3,
    title: "Ventilation",
    img: "/home/services/plumber/icon4.svg",
    description:
      "Did you know that it is a plumber who fixes the ventilation? The correct term for plumbing technician actually means heating. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
  {
    id: 4,
    title: "Pipe Service",
    img: "/home/services/plumber/icon5.svg",
    description:
      "Maintenance or repairs of the pipes? No job is too small or too big for us. We also offer service and maintenance agreements for housing. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
  {
    id: 5,
    title: "Planning",
    img: "/home/services/plumber/icon6.svg",
    description:
      "Do you have plans to install new pipes? Do you need to upgrade your heating system, or run a drain to your new attic? We help you from start to finish!. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
  {
    id: 6,
    title: "Renovations and new builds",
    img: "/home/services/plumber/icon7.svg",
    description:
      "We help you plan for the replacement of everything from mixers to new pipes. When renovating all types of rooms with water and. Are you not getting any hot water into the property? Then it is most likely your water heater that is creating problems for you. ",
  },
];
