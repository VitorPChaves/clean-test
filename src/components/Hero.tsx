"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/clean-house-2.png",
  "/images/houses/clean-home-bright.jpg",
  "/images/clean-house.png",
  "/images/houses/clean-home-bright2.webp",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const smsMessage = encodeURIComponent(
    "Hello, I visited your website and I would like to know the pricing for your cleaning service."
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[100vh] overflow-hidden z-[-1]">
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#FFFFFF] tracking-[0.025em]">
            Reliable House <br /> Cleaning Services
          </h1>
          <p className="mt-[10px] sm:text-lg sm:text-xl font-thin bg-[#00000070] px-6 pt-2 pb-[-2px]">
            Enjoy a fresh clean home for you to rest.
          </p>
          <p className="sm:text-lg sm:text-xl font-thin bg-[#00000070] px-6 pb-2 pt-[-2px]">
            <b className="flex">Maryland, Silver Spring quotes open.</b> Get
            pricings below.
          </p>
          <a
            href={`sms:+12406430808?body=${smsMessage}`}
            className="flex items-center justify-center gap-[10px] mt-6 px-8 py-4 font-semibold rounded-[8px] text-[#FFFFFF] bg-gradient-to-t from-[#00af94] to-transparent"
          >
            <img
              alt="msg"
              src="/images/icons/message.png"
              className="w-[24px]"
            />
            Get Pricing
          </a>{" "}
        </div>
      </div>
    </section>
  );
}
