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
                        Politik
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
                    Politik
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

            <section className="container px-4">
                <p className="text-lg mb-8 text-gray-600">
                    Gäller från och med 16 september 2025.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    På Needz värnar vi om din integritet och tar skyddet av dina personuppgifter på största allvar. När du använder vår app och våra tjänster vill vi att du ska känna dig trygg med hur vi hanterar din information. Denna integritetspolicy förklarar på ett tydligt sätt vilka uppgifter vi samlar in, varför vi samlar in dem, hur vi använder dem och vilka rättigheter du har. Policyn är anpassad efter den europeiska dataskyddsförordningen (GDPR) och gällande svensk lagstiftning.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    När du registrerar ett konto i Needz samlar vi in grundläggande information om dig, som namn, e-postadress och telefonnummer. Om du är frilansare (handyman/handywoman) kan du också lägga till en profilbild och en beskrivning av dina tjänster. För att klienter ska kunna boka dig behöver du dessutom registrera dig via Stripe, som hanterar dina utbetalningar. Om du är klient samlar vi in de betalningsuppgifter som krävs för att kunna genomföra köp via Klarna. Själva betalningarna hanteras alltid direkt av Klarna och Stripe - vi på Needz lagrar aldrig några kortuppgifter.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Utöver registreringsuppgifter samlar vi också in information som skapas när du använder appen. Det kan till exempel vara chattmeddelanden mellan klienter och frilansare, bilder och videor som laddas upp för att beskriva ett jobb, samt uppdrags- och betalningshistorik. Vi kan även samla in viss teknisk information, som enhetstyp, operativsystem och IP-adress, för att säkerställa driften av appen och för att kunna förebygga missbruk.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi använder dessa uppgifter för att kunna leverera våra tjänster till dig, det vill säga för att klienter och frilansare ska kunna hitta varandra, kommunicera och genomföra trygga betalningar. Uppgifterna används också för att skicka notifikationer, påminnelser och serviceinformation, samt för att förbättra användarupplevelsen och utveckla vår plattform. I vissa fall behandlar vi personuppgifter för att uppfylla rättsliga skyldigheter, exempelvis i samband med bokföring.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi delar aldrig dina personuppgifter med tredje parter för kommersiella syften. De enda aktörer som kan ta del av dina uppgifter är våra betaltjänstleverantörer Klarna och Stripe, samt de tekniska leverantörer som behövs för drift, hosting och support av appen. Vid behov kan vi även lämna ut uppgifter till myndigheter om vi är skyldiga enligt lag.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi sparar inte dina personuppgifter längre än nödvändigt. Dina uppgifter finns kvar så länge du har ett aktivt konto hos oss. Om du väljer att avsluta ditt konto raderas eller anonymiseras dina personuppgifter enligt våra rutiner, förutom i de fall där vi måste spara viss information för att följa lagkrav, exempelvis bokföringslagen.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Säkerhet är viktigt för oss. Vi arbetar med både tekniska och organisatoriska skyddsåtgärder för att förhindra obehörig åtkomst, förlust eller missbruk av personuppgifter. Det inkluderar bland annat kryptering, åtkomstkontroller och regelbundna säkerhetsgranskningar.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Som användare har du flera rättigheter enligt GDPR. Du kan begära att få ta del av de personuppgifter vi behandlar om dig, få felaktiga uppgifter rättade eller få dina uppgifter raderade. Du har även rätt att begränsa behandlingen, invända mot viss behandling eller begära att dina uppgifter överförs till en annan aktör (dataportabilitet). Om du har lämnat samtycke till viss behandling, exempelvis för marknadsföring, kan du när som helst återkalla detta samtycke. Om du anser att vi har behandlat dina personuppgifter på ett felaktigt sätt har du rätt att lämna in klagomål till Integritetsskyddsmyndigheten (IMY).
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Vi kan ibland behöva uppdatera denna policy, till exempel om vi utvecklar nya funktioner eller ändrar hur vi hanterar data. Vid större förändringar kommer vi att informera dig via appen, vår webbplats <b className="text-black">needz.se</b> eller e-post. Den senaste versionen av policyn finns alltid tillgänglig på vår webbplats.
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    Om du har frågor om hur vi behandlar dina personuppgifter är du alltid välkommen att kontakta oss:
                </p>
                <p className="text-lg mb-8 text-gray-600">
                    <b className="text-black">Needz AB</b>
                    <br />
                    E-post: info@needz.se
                </p>
            </section>

        </main>
    );
}
