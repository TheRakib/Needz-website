import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Emergencies from "@/components/Home/Emergencies";
import FAQ from "@/components/Home/FAQ";
import Features from "@/components/Home/Features";
import Feedback from "@/components/Home/Feedback";
import Join from "@/components/Home/Join";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-inter min-h-screen">
      <Banner />
      <CallIn />
      <Emergencies />
      <Feedback />
      <Join />
      <Features />
      <FAQ />
    </main>
  );
}
