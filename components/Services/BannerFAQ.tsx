"use client";
import React from "react";
import FAQ from "../Shared/FAQ";
import { Button } from "@mui/material";
import { BiPhoneCall } from "react-icons/bi";
import { useRouter } from "next/navigation";

export default function BannerFAQ() {
  const router = useRouter();
  return (
    <div className="max-w-layout mx-auto mt-[50px]">
      <FAQ
        variant="services"
        titleClass="mb-6 !text-center"
        faqItems={faqItems}
      />
      <div className="flex items-center justify-center gap-7 flex-col md:flex-row mt-20">
        <Button
          className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-primary hover:bg-primary/70 text-white flex-nowrap whitespace-nowrap "
          size="large"
        >
          <a href="tel:08302241">
            <BiPhoneCall className="mr-2" />
            Ring: 08-302241
          </a>
        </Button>
        <Button
          onClick={() => router.push("/contact-us")}
          className="capitalize text-xl md:text-2xl md:py-7 md:px-12 px-10 py-4 rounded-xl bg-white hover:bg-primary/5 text-black flex-nowrap whitespace-nowrap "
          size="large"
        >
          Kontakta oss
        </Button>
      </div>
    </div>
  );
}

const faqItems = [
  {
    id: 1,
    title: "Vad kostar en elektriker?",
    description:
      "Akuta elfel kan inträffa vid obekväma tider. Om en olycka inträffar på kvällen, natten eller under helgen när många företag är stängda kan kostnaden för att få en jour elektriker att komma ut vara högre än normalt. Priset för Jour el, Jour spol, Jour rörmokare kan variera beroende på olika faktorer. Det bästa är att kontakta vår jourtelefon på 08–302241, som är öppen dygnet runt, så att vi kan få mer information om din specifika situation.",
  },
  {
    id: 2,
    title: "När kan in vara på plats?",
    description:
      "Vi strävar alltid efter att vara på plats inom en timme efter att du har ringt vår eljour och om du befinner dig i Stockholmsområdet. Vi garanterar att vi kan hjälpa dig samma dag som du kontaktar oss",
  },
  {
    id: 3,
    title: "Är det nödvändigt med jordade eluttag?",
    description:
      "Jordade eluttag är en viktig säkerhetsåtgärd i elektriska installationer. De hjälper till att förhindra elektriska stötar och skyddar människor och elektroniska enheter från farliga spänningar. Jordade uttag har en extra jordledare som är ansluten till jord, vilket gör det möjligt att leda bort överskottselektricitet om det skulle uppstå en felström. Detta minskar risken för elektriska olyckor och bränder. I många länder är det obligatoriskt att använda jordade uttag i vissa applikationer och områden för att uppfylla säkerhetsstandarder och byggregler. Det är viktigt att rådgöra med en kvalificerad elektriker för att säkerställa att din elektriska installation är korrekt jordad och uppfyller de lokala kraven och säkerhetsföreskrifterna.",
  },
];
