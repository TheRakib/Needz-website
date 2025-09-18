import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "On Call Services",
    description: "Akut hjälp när du behöver det som mest. Våra certifierade proffs är redo att hjälpa dig dygnet runt, alla dagar om året.",
};

export default function layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
