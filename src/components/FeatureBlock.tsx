"use client";
import Image from "next/image";

export default function FeatureBlock() {
  return (
    <>
      {/* Why Hire Us */}
      <section
        id="hire"
        className="grid gap-16 px-8 py-24 lg:grid-cols-2 items-center "
      >
        <Image
          src="/images/woman-clean.png"
          alt="Cleaner working"
          width={800}
          height={500}
          className="rounded-xl shadow-xl w-full h-auto object-cover"
        />

        <div>
          <h2 className="text-[42px] leading-tight font-bold text-primary font-poppins mb-4">
            Why Hire Us?
          </h2>
          <p className="font-elegante text-[#00000090] text-xl max-w-[90%]">
            At Care Touch, we bring trust, and care to every home we clean. Our
            professional dedicated cleaning maids ensure your space feels fresh,
            cozy, and sparkling — every time. Based in Silver Spring, we proudly
            serve homes across Maryland and the DC metro area.
          </p>
        </div>
      </section>

      {/* Cozy Home Section */}
      <section className="grid gap-16 px-8 py-24 lg:grid-cols-2 items-center bg-white">
        <div className="flex flex-col items-end sm:items-end justify-center order-2 sm:order-1">
          <h2 className="text-5xl font-bold text-primary text-end font-poppins mb-4 leading-tight">
            A Cozy, Clean Space <br /> to Call Your Own
          </h2>
          <p className="text-[#00000090] text-xl text-end font-elegante max-w-[90%]">
            Our team transforms your space into a calming haven — from dusting
            to deep-cleaning kitchens and bathrooms, we tailor every service to
            your home’s unique needs. Relax knowing every corner is cared for.
          </p>
        </div>

        <Image
          src="/images/clean-house.png"
          alt="Home looking clean"
          width={800}
          height={500}
          className="order-1 sm:order-2 rounded-xl shadow-xl w-full h-auto object-cover"
        />
      </section>
    </>
  );
}
