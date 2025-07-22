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
            At Care Touch, we bring trust and care to every home we clean. We
            know that choosing a company to service your home is a very
            important decision. <br />
            <br />
            Our professional and dedicated cleaners ensure your space is always
            clean, cozy, and with that caring touch. <br />
            <br />
            Based in Silver Spring, we proudly serve homes in Maryland and the
            Washington, D.C., metropolitan area.
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
            We offer high-quality cleaning solutions for homes and businesses.
            With attention to detail, we ensure every space is spotless and
            inviting. Leave the cleaning to us so you can focus on what really
            matters!
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

      {/* Why Hire Us */}
      <section
        id="hire"
        className="grid gap-16 px-8 py-24 lg:grid-cols-2 items-center "
      >
        <Image
          src="/images/liberty-mutual.webp"
          alt="Liberty Mutual Insurance"
          width={200}
          height={200}
          className="rounded-xl w-full h-auto"
        />

        <div>
          <h2 className="text-[42px] leading-tight font-bold text-primary font-poppins mb-4">
            Insurance
          </h2>
          <p className="font-elegante text-[#00000090] text-xl max-w-[90%]">
            At Care Touch, your peace of mind is our priority. We are fully
            insured through Liberty Mutual, so you can feel completely confident
            when welcoming us into your home. <br />
            No matter what happens during our service, you won’t have to worry.
            Our insurance ensures that you and your home are always protected.
            <br />
            Your trust means everything to us, and we take every step to provide
            not only exceptional cleaning, but also the security and assurance
            you deserve.
          </p>
        </div>
      </section>
    </>
  );
}
