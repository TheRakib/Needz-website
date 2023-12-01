"use client";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import SectionTitle from "../Shared/SectionTitle";
import {
  Button,
  InputBase,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { BsArrowRightCircle } from "react-icons/bs";
import { services } from "@/Constants";
import { toast } from "react-toastify";
import axios from "axios";

interface FormState {
  email: string;
  name: string;
  phoneNumber: string;
  service: string;
}

const initialState = () => ({
  email: "service@contact.com",
  name: "",
  phoneNumber: "",
  service: "",
});

export default function Emergencies() {
  const [formData, setFormData] = useState<FormState>(initialState());
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSuccessMessage("");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setSuccessMessage("");
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name as string]: value,
    }));
  };

  const handleSubscribe = async () => {
    console.log(formData);
    if (!formData.name) {
      return toast.error("Name is required");
    } else if (!formData.service) {
      return toast.error("Please select a service");
    } else if (!formData.phoneNumber) {
      return toast.error("please enter phone number");
    }

    try {
      // console.log(formData);
      const res = await axios.post("/api/mail", formData);
      console.log(res);
      if (res.status === 200) {
        setSuccessMessage("E-post skickades ");
        setFormData(initialState());
      }
      setSuccessMessage("E-post skickades ");
      setFormData(initialState());
    } catch (error) {
      console.log(error);
      setSuccessMessage("Something went wrong. Try again");
    }
  };

  return (
    <div className="bg-primary max-w-maxLayout mx-auto px-2">
      <div className="max-w-layout mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-1 flex flex-col">
            <SectionTitle
              title="Akutbehov av rörmokare eller elektriker? Vi finns här för jour hjälp."
              className="text-white font-semibold  tracking-tight"
            />
            {/* <div className="flex gap-4 mt-8 mb-9">
              <Image
                src={"/home/icon1.png"}
                alt="achievement"
                height={104}
                width={104}
              />
              <Image
                src={"/home/icon2.png"}
                alt="achievement"
                height={104}
                width={104}
              />
              <Image
                src={"/home/icon3.png"}
                alt="achievement"
                height={104}
                width={104}
              />
            </div> */}
            <p className="md:text-[35px] text-[25px] mt-5 text-white text-center md:text-left ">
              <a href="callto:08302241">
                {" "}
                Ring: <span className="font-bold">08-30 22 41</span>
              </a>
            </p>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col text-white">
              <h3 className="font-semibold text-[20px] md:text-[25px] text-center">
                Kontakta oss nu
              </h3>
              <p className=" text-[16px] md:text-[18px] text-white/60 text-center ">
                Snabb Respons på Din Förfrågan
              </p>
            </div>
            <div className="flex flex-col gap-5 items-center  justify-center mt-7 w-[310px] lg:w-[420px] mx-auto">
              <InputBase
                id="name"
                name="name"
                value={formData.name}
                onChange={(text) => handleChange(text)}
                placeholder="Fullständigt Namn"
                className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
              />
              <InputBase
                id="phone"
                name="phoneNumber"
                type="number"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Telefon Nummer"
                className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
              />
              <div className="w-full">
                <Select
                  variant="standard"
                  labelId="our-services-select"
                  id="service"
                  value={formData.service}
                  name="service"
                  displayEmpty
                  onChange={handleSelectChange}
                  className="text-black/40 bg-white w-full py-[20px] px-5 "
                  sx={{
                    minWidth: "120px",
                  }}
                >
                  <MenuItem value="" disabled>
                    Välj Tjänst
                  </MenuItem>
                  {services.map((item) => (
                    <MenuItem
                      key={item.id}
                      value={item.title}
                      className="py-[15px] pl-[20px]"
                    >
                      {item.title}
                    </MenuItem>
                  ))}
                </Select>
              </div>

              {successMessage && (
                <p className="text-lg text-yellow font-bold text-center">
                  {successMessage}
                </p>
              )}
              <div className="mt-6 w-full">
                <Button
                  onClick={handleSubscribe}
                  className="bg-white w-full text-primary text-2xl h-[80px] capitalize hover:bg-transparent hover:text-white hover:!border-2 hover:!border-white disabled:bg-white/60"
                  variant="outlined"
                  disabled={!!successMessage}
                >
                  <BsArrowRightCircle className="mr-3 font-semibold" /> Skicka
                  Nu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
