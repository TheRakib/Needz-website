import Image from "next/image";
import React from "react";

export default function page() {
    return (
        <main>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-emerald-700">
                <div className="absolute inset-0 overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Policy"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="container relative mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Integritetspolicy för Needz
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        GDPR-anpassad Integritetspolicy för appen Needz, skriven enligt svenska och europeiska dataskyddsregler.
                    </p>
                </div>
            </section>
        </main>
    );
}
