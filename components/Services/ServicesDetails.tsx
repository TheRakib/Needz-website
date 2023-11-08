import React from "react";
import TextTitle from "../Shared/TextTitle";
import { PiCheckBold } from "react-icons/pi";

export default function ServicesDetails() {
  return (
    <div className="max-w-layout mx-auto mt-5 px-2">
      <div className="flex flex-col gap-5 ">
        <div className="max-w-[680px] mr-auto flex flex-col gap-5">
          <TextTitle title="Electrical Services for Every Need" />
          <div className="flex flex-col gap-5 text-[18px] text-black/70 ">
            <p>
              We understand that everyone has unique needs and circumstances.
              Therefore, we offer a wide range of services that can be adapted
              to your wishes in order to provide our customers with the best
              possible service and results.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-[18px] font-semibold">
            Our electrical services include, for example:
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 justify-between gap-y-[10px] gap-x-14 ">
            {serviceItems.map((item) => (
              <li
                key={item.id}
                className=" col-span-1 w-full text-[18px] flex items-center md:whitespace-nowrap gap-2"
              >
                <span>
                  <PiCheckBold className="text-primary text-lg " />
                </span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-secondary text-[20px] text-center mt-12">
        Need help with an electrical problem? Call us now at 08 – 23 55 20!
      </p>
    </div>
  );
}

const serviceItems = [
  {
    id: 1,
    text: "New installations of, for example, electrical outlets and lighting",
  },
  {
    id: 2,
    text: "Electricity for the heating system.",
  },
  {
    id: 3,
    text: "Troubleshooting of pre-existing electrical systems",
  },
  {
    id: 4,
    text: "Replacement of power station",
  },
  {
    id: 5,
    text: "Service and maintenance of electrical all types of electrical installations",
  },
  {
    id: 6,
    text: "Pull cables",
  },
  {
    id: 7,
    text: "Electricity measurement for e.g. overload",
  },
  {
    id: 8,
    text: "Short circuit",
  },
  {
    id: 9,
    text: "Earth fault circuit breaker that trips",
  },
  {
    id: 10,
    text: "Mount solar cells",
  },
  {
    id: 11,
    text: "Charging posts",
  },
];
