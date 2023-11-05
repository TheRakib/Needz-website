import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Emergencies from "@/components/Home/Emergencies";
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
    </main>
  );
}
