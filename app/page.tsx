import Banner from "@/components/Home/Banner";
import CallIn from "@/components/Home/CallIn";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-inter min-h-screen">
      <Banner />
      <CallIn />
    </main>
  );
}
