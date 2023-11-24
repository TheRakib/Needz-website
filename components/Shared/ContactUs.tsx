"use client";
import React, { ChangeEvent, useState } from "react";
import SectionTitle from "./SectionTitle";
import { Button, InputBase } from "@mui/material";
import Image from "next/image";
import { IoMdAttach } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { toast } from "react-toastify";

type Props = {
  semiTitle?: string;
  helperText?: string;
  disabledHelperText?: boolean;
};
interface FormState {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipCode: string;
  postalCode: string;
  message: string;
  photo: File | null;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const initialState = () => ({
  name: "",
  email: "",
  phoneNumber: "",
  address: "",
  zipCode: "",
  postalCode: "",
  message: "",
  photo: null,
});

export default function ContactUs({
  semiTitle = "Need Any Services",
  helperText = "Fill out the form for a free quote. You can also call 08-30 22 41 between 08:00 and 16:00 on weekdays. On-call and urgent matters 24 hours a day, 365 days a year.",
  disabledHelperText = false,
}: Props) {
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

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      photo: file || null,
    }));
  };

  const handleSubscribe = async () => {
    if (!formData.email) {
      return toast.error("Email is required");
    }
    try {
      const res = await axios.post("/api/mail", formData);
      console.log(res);
      if (res.status === 200) {
        setSuccessMessage("Email send successfully..");
        setFormData(initialState());
      }
    } catch (error) {
      console.log(error);
      setSuccessMessage("Something went wrong. Try again");
    }
  };

  return (
    <div className="bg-primary text-white py-[80px] max-w-maxLayout mx-auto px-2">
      <div className="max-w-layout mx-auto">
        <div className="flex justify-between items-center flex-col md:flex-row">
          <div className="flex flex-col gap-2">
            <h3 className="text-[18px] font-semibold text-center md:text-left ">
              {semiTitle}
            </h3>
            <SectionTitle title="Contact Us" />
          </div>
          {!disabledHelperText ? (
            <p className="text-white/70 text-[18px] max-w-[580px] text-center md:text-left mt-6 md:mt-0">
              {helperText}
            </p>
          ) : null}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 w-full">
            <div className="w-full flex flex-col gap-5 items-center  justify-center mt-7">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
                <div className="col-span-1 flex flex-col gap-[30px]">
                  <InputBase
                    onChange={handleChange}
                    name="name"
                    id="outlined-basic"
                    placeholder="Name"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
                  />
                  <InputBase
                    onChange={handleChange}
                    name="phoneNumber"
                    id="phone-_number"
                    type="number"
                    placeholder="Phone Number"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                  <InputBase
                    onChange={handleChange}
                    name="zipCode"
                    id="zip_code"
                    type={"number"}
                    placeholder="Zip Code"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                </div>
                <div className="col-span-1 flex flex-col gap-[30px]">
                  <InputBase
                    onChange={handleChange}
                    name="email"
                    id="email"
                    type="email"
                    required
                    placeholder="Email"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
                  />
                  <InputBase
                    onChange={handleChange}
                    name="address"
                    id="address"
                    placeholder="Address"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                  <InputBase
                    onChange={handleChange}
                    name="postalCode"
                    id="postal_code"
                    type="number"
                    placeholder="Postal Code"
                    className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                  />
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  id=""
                  onChange={handleChange}
                  rows={7}
                  placeholder="Your Message"
                  className="text-[18px] pt-6 pl-5 w-full text-black focus:outline-none "
                />
              </div>
              <Button
                component="label"
                variant="outlined"
                startIcon={
                  <IoMdAttach className="mr-1 text-3xl font-semibold" />
                }
                className="bg-transparent  border-white w-full text-white text-[16px] md:text-[18px] h-[81px] capitalize hover:border-white "
              >
                Attach your picture and other relevant files
                <VisuallyHiddenInput
                  name="photo"
                  onChange={handlePhotoChange}
                  type="file"
                />
              </Button>
              {successMessage && (
                <p className="text-lg text-yellow font-bold text-center">
                  {successMessage}
                </p>
              )}
              <div className="mt-6 w-[286px] mx-auto md:mr-auto ">
                <Button
                  className="bg-white w-full text-primary text-2xl h-[92px] capitalize hover:bg-primary hover:text-white rounded-xl hover:border-white disabled:bg-white/60"
                  variant="outlined"
                  onClick={handleSubscribe}
                  disabled={!!successMessage}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-auto md:ml-auto relative w-[300px] h-[466px] md:w-[340px]  xl:w-[580px] md:h-[666px] ">
            <Image src={"/home/contactUs.png"} alt="Contact" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
