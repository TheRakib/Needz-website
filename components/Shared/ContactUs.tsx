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
  helperText = "Fyll i formuläret nedan för att få en kostnadsfri offert. Vårt team är redo att assistera dig med service dygnet runt, året om. För brådskande behov är vår jourtjänst tillgänglig 24/7, varje dag på året.",
  disabledHelperText = false,
}: Props) {
  const [formData, setFormData] = useState<FormState>(initialState());
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errors, setErrors] = useState<Partial<FormState>>({});

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

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    let isValid = true;

    // Check required fields
    Object.keys(formData).forEach((key) => {
      const formKey = key as keyof FormState;
      const value = formData[formKey];

      if (value === "" && key !== "photo") {
        // @ts-ignore
        newErrors[formKey] = `${
          (key.charAt(0).toUpperCase() + key.slice(1)) as Extract<
            keyof FormState,
            string
          >
        } is required`;
        isValid = false;
      }
    });

    // Check email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubscribe = async () => {
    if (!validateForm()) {
      return toast.error("Please fill in all required fields correctly");
    }

    try {
      const res = await axios.post("/api/mail", formData);
      console.log(res);
      if (res.status === 200) {
        setSuccessMessage("Email sent successfully");
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
            {/* <h3 className="text-[18px] font-semibold text-center md:text-left ">
              {semiTitle}
            </h3> */}
            <SectionTitle title="Kontakta oss" />
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
                  <div>
                    <InputBase
                      onChange={handleChange}
                      name="name"
                      value={formData.name}
                      id="outlined-basic"
                      placeholder="Namn"
                      className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
                    />

                    {Object.entries(errors).map(
                      ([key, error]) =>
                        key === "name" && (
                          <p key={key} className=" text-secondary">
                            {error as string}
                          </p>
                        )
                    )}
                  </div>
                  {/* {console.log(Object.entries(errors))} */}
                  <div>
                    <InputBase
                      onChange={handleChange}
                      name="phoneNumber"
                      id="phone-_number"
                      value={formData.phoneNumber}
                      type="tel"
                      placeholder="Nummer"
                      className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                    />

                    {Object.entries(errors).map(
                      ([key, error]) =>
                        key === "phoneNumber" && (
                          <p key={key} className=" text-secondary">
                            {error as string}
                          </p>
                        )
                    )}
                  </div>
                  <div>
                    <InputBase
                      onChange={handleChange}
                      name="zipCode"
                      id="zip_code"
                      value={formData.zipCode}
                      type={"number"}
                      placeholder="Postkod"
                      className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                    />

                    {Object.entries(errors).map(
                      ([key, error]) =>
                        key === "zipCode" && (
                          <p key={key} className=" text-secondary">
                            {error as string}
                          </p>
                        )
                    )}
                  </div>
                </div>
                <div className="col-span-1 flex flex-col gap-[30px]">
                  <div>
                    <InputBase
                      onChange={handleChange}
                      name="email"
                      value={formData.email}
                      id="email"
                      type="email"
                      required
                      placeholder="E-post"
                      className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px] w-full `}
                    />

                    {Object.entries(errors).map(
                      ([key, error]) =>
                        key === "email" && (
                          <p key={key} className=" text-secondary">
                            {error as string}
                          </p>
                        )
                    )}
                  </div>
                  <div className="">
                    <InputBase
                      onChange={handleChange}
                      name="address"
                      value={formData.address}
                      id="address"
                      placeholder="Adress"
                      className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                    />

                    {Object.entries(errors).map(
                      ([key, error]) =>
                        key === "address" && (
                          <p key={key} className=" text-secondary">
                            {error as string}
                          </p>
                        )
                    )}
                  </div>
                  <div className="">
                    <InputBase
                      onChange={handleChange}
                      name="postalCode"
                      value={formData.postalCode}
                      id="postal_code"
                      placeholder="Stad"
                      className={` rounded-none border border-black/40 h-[40px] pl-5 py-9 bg-white text-black/800 text-[18px]  w-full`}
                    />

                    {Object.entries(errors).map(
                      ([key, error]) =>
                        key === "postalCode" && (
                          <p key={key} className=" text-secondary">
                            {error as string}
                          </p>
                        )
                    )}
                  </div>
                </div>
              </div>

              <div className="w-full">
                <textarea
                  name="message"
                  id=""
                  value={formData.message}
                  onChange={handleChange}
                  rows={7}
                  placeholder="Ditt meddelande"
                  className="text-[18px] pt-6 pl-5 w-full text-black focus:outline-none "
                />

                {Object.entries(errors).map(
                  ([key, error]) =>
                    key === "message" && (
                      <p key={key} className=" text-secondary">
                        {error as string}
                      </p>
                    )
                )}
              </div>
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
                  Skicka meddelande
                </Button>
              </div>
            </div>
          </div>
          <div className="col-span-1 mx-auto md:ml-auto relative w-[300px] h-[466px] md:w-[340px]  xl:w-[580px] md:h-[666px] ">
            <Image src={"/home/contact-us.jpg"} alt="Contact" fill />
          </div>
        </div>
      </div>
    </div>
  );
}
