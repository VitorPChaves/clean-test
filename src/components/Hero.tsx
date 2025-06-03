"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/houses/clean-home-fire2.jpg",
  "/images/cleaners/aspirator-cleaner.png",
  "/images/woman-clean.png",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            fill
            className={`
              object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${
                index === current
                  ? "opacity-100 z-10 animate-zoomOut"
                  : "opacity-0 z-0"
              }
            `}
            priority={index === 0}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="relative z-20 flex items-center justify-center h-full bg-black/40 px-4">
        <div className="flex flex-col items-center justify-center text-center text-white max-w-3xl">
          <Image
            src="/images/logo-transparent.png"
            alt=""
            width={100}
            height={100}
            className="mb-[10px]"
          />
          <h1 className="text-4xl md:text-6xl font-semibold text-[#FFFFFF] tracking-[0.025em]">
            Reliable house <br /> cleaning services
          </h1>
          <p className="mt-[10px] text-xl font-thin">
            Enjoy a fresh and cozy home for you to rest.
          </p>
          <p className="text-xl font-thin">
            Maryland, Silver Spring quotes open. Get your pricing below.
          </p>
          <button className="flex items-center justify-center gap-[10px] mt-6 px-6 py-3 font-semibold rounded-[6px] text-[#FFFFFF] bg-[#00af94]">
            <img
              alt="msg"
              src="/images/icons/message.png"
              className="w-[24px]"
            />
            Get Pricing
          </button>
        </div>
      </div>
    </section>
  );
}
