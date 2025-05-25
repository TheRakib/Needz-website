"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useMobile } from "@/hooks/use-mobile";
import { services } from "@/Constants";
import AppLogo from "./Shared/AppLogo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pages = [
    {
      id: 1,
      title: "Hem",
      link: "/",
    },
    {
      id: 2,
      title: "Tjänster",
      link: "/#services",
      hasDropdown: true,
    },
    {
      id: 3,
      title: "Jourtjänster",
      link: "/services",
    },
    {
      id: 4,
      title: "Blogg",
      link: "/blog",
    },
    {
      id: 5,
      title: "Om Needz",
      link: "/about-us",
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* <Link href="/" className="flex items-center">
          <div className="relative h-12 w-32">
            <Image
              src="/social/playStore.png"
              alt="Needz Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link> */}
        <AppLogo className="hidden md:block" />

        <AppLogo className="flex md:hidden w-[120px] h-[40px]" />

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            {pages.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.link}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 hover:text-emerald-600 relative group flex items-center",
                    scrolled ? "text-gray-800" : "text-white"
                  )}
                >
                  {item.title}
                  {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                {item.hasDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        href={service.link}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex space-x-2">
              <Link
                href="https://play.google.com/store/apps/details?id=com.needz.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/playStore.png"
                  alt="Get it on Google Play"
                  className="lg:h-10 lg:w-28 h-10 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                  width={250}
                  height={80}
                />
              </Link>
              <Link
                href="https://apps.apple.com/se/app/needz/id1446307369"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/appleStore2.png"
                  alt="Download on the App Store"
                  className="lg:h-10 lg:w-28 h-10 w-34 hover:opacity-90 transform hover:scale-105 ease-in duration-200"
                  width={250}
                  height={80}
                />
              </Link>
            </div>
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "p-2 rounded-md transition-colors",
              scrolled ? "text-gray-800" : "text-white"
            )}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 transition-all duration-300 ease-in-out">
          <nav className="flex flex-col space-y-4">
            {pages.map((item) => (
              <div key={item.id}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <div className="text-gray-800 text-sm font-medium">
                      {item.title}
                    </div>
                    <div className="pl-4 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.link}
                          className="block text-gray-600 text-sm hover:text-emerald-600"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.link}
                    className="text-gray-800 text-sm font-medium hover:text-emerald-600 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="flex space-x-2 pt-2">
              <Link
                href="https://play.google.com/store/apps/details?id=com.needz.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/playStore.png"
                  alt="get app on play store"
                  className="h-8 w-auto"
                  width={100}
                  height={30}
                />
              </Link>
              <Link
                href="https://apps.apple.com/se/app/needz/id1446307369"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/appleStore2.png"
                  alt="get app on play store"
                  className="h-8 w-auto"
                  width={100}
                  height={30}
                />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
