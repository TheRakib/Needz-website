"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import policy from "../../../public/policy.jpg"

export default function Policy() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <main>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-emerald-700">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src={policy}
                        alt="Policy"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Policy
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        GDPR-anpassad Integritetspolicy för appen Needz, skriven enligt svenska och europeiska dataskyddsregler.
                    </p>
                </div>
            </section>

            <section ref={ref} className="text-center py-20 px-4">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-3 py-1 bg-emerald-100 text-emerald-600 text-sm font-medium rounded-full mb-4"
                >
                    Policy
                </motion.span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
                >
                    Integritetspolicy för Needz
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg text-gray-600 max-w-2xl mx-auto"
                >
                    GDPR-anpassad Integritetspolicy för appen Needz, skriven enligt svenska och europeiska dataskyddsregler.
                </motion.p>
            </section>

            <section className="container px-4 mb-20">
                <p className="text-lg mb-8 text-gray-600">
                    Gäller från och med 16 september 2025.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    På Needz AB värnar vi om din integritet. Vi samlar endast in och behandlar de personuppgifter som är nödvändiga för att kunna leverera våra tjänster, förbättra användarupplevelsen och uppfylla lagkrav. Denna integritetspolicy beskriver vilka uppgifter vi behandlar, för vilka syften och rättsliga grunder, hur länge vi sparar dem samt vilka rättigheter du som användare har. Needz AB är personuppgiftsansvarig för den behandling som sker i samband med användningen av våra tjänster och vår app Needz. Du kan kontakta oss via e-post på info@needz.se eller per post till vår bolagsadress.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    När du använder Needz samlar vi in viss information om dig. Det gäller registreringsuppgifter som namn, e-postadress och telefonnummer. I vissa fall kan även personnummer eller födelsedatum behandlas, till exempel för betalningsverifiering. Frilansare kan dessutom lägga till profilbild och beskrivning av sina tjänster. Vi använder Google Firebase för autentisering, kontohantering och drift av appen. Firebase lagrar bland annat användar-ID, visningsnamn, e-postadress, profilbilds-URL om sådan finns, provider-ID (till exempel google.com) samt status för e-postverifiering.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Appen kan samla in platsdata i form av latitud och longitud när du använder platsbaserade funktioner. Informationen används enbart för att visa relevanta uppdrag eller användare i närheten och sparas i vår databas i detta syfte. Platsdata samlas endast in om du aktivt samtycker till det via appen. Vi samlar också in användningsdata, såsom kommunikation i appen (till exempel chattmeddelanden), bilder, videor och annat jobbrelaterat innehåll som du laddar upp, liksom uppdrags- och betalningshistorik. Viss teknisk information som appversion, enhetstyp och operativsystem kan behandlas för att säkerställa drift, prestanda och säkerhet, men dessa uppgifter kan inte användas för att identifiera enskilda användare.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Betalningar hanteras av Klarna och Stripe. Needz AB lagrar inga kortuppgifter, men vi får tillgång till transaktionsinformation som krävs för att bekräfta och hantera betalningar. Vi samlar inte in, lagrar eller använder några så kallade ”Device or Other IDs”, såsom Advertising ID, Android ID, IMEI, BSSID eller MAC-adress.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Personuppgifter behandlas för att leverera, administrera och förbättra våra tjänster, för att hantera betalningar och utbetalningar, förebygga och upptäcka bedrägerier, uppfylla bokförings- och rättsliga krav, kommunicera med användare och analysera användningen av plattformen. Behandlingen grundas på avtal, rättslig förpliktelse, berättigat intresse eller ditt samtycke, beroende på ändamål.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Uppgifter delas endast med de aktörer som behövs för att kunna driva och utveckla våra tjänster, vilket inkluderar Google Firebase för autentisering och drift, Klarna och Stripe för betalningar samt tekniska leverantörer för hosting, analys och support. Vi kan även behöva dela uppgifter med myndigheter när vi är skyldiga enligt lag. I vissa fall kan uppgifter delas med affärspartners vid specifika funktioner eller kampanjer, men då endast med ditt uttryckliga samtycke. Needz AB säljer aldrig personuppgifter till tredje part.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi sparar dina personuppgifter så länge ditt konto är aktivt. Om kontot har varit inaktivt i mer än 24 månader raderas eller anonymiseras uppgifterna. Vissa uppgifter kan sparas längre om det krävs enligt lag, exempelvis enligt bokföringslagen som föreskriver en lagringstid på upp till sju år. Om personuppgifter överförs till länder utanför EU/EES, till exempel via Google Firebase, säkerställer vi att överföringen sker i enlighet med gällande dataskyddslagstiftning och med adekvata skyddsåtgärder såsom EU:s standardavtalsklausuler.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi skyddar dina personuppgifter genom tekniska och organisatoriska säkerhetsåtgärder, bland annat kryptering, åtkomstkontroller, säkerhetsgranskningar och utbildning av personal. Som användare har du flera rättigheter enligt GDPR. Du kan begära tillgång till de uppgifter vi behandlar om dig, begära rättelse av felaktiga uppgifter, radering av uppgifter (rätten att bli bortglömd), begränsning av behandling, invända mot behandling som grundas på berättigat intresse, begära dataportabilitet samt återkalla samtycke när som helst utan att det påverkar lagligheten av tidigare behandling. Om du anser att vi behandlat dina uppgifter felaktigt kan du kontakta Integritetsskyddsmyndigheten (IMY).
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi använder cookies och liknande tekniker för att förbättra användarupplevelsen och analysera trafik. Policyn kan komma att uppdateras, och den senaste versionen finns alltid tillgänglig på vår webbplats och i appen. Vid större förändringar informerar vi dig i förväg via appen, e-post eller på vår webbplats.
                </p>
                <p className="text-lg mb-2 text-gray-600">
                    Om du har frågor om hur vi hanterar dina personuppgifter eller vill utöva dina rättigheter kan du kontakta oss på:
                </p>
                <p className="text-lg">
                    <b className="text-black">Needz AB</b>
                    <br />
                    E-post: info@needz.se
                </p>
                <p className="text-lg mb-8">
                    Adress: Taggsvampsvägen 20, 141 60, Huddinge, Stockholm.
                </p>
            </section>

        </main>
    );
}
