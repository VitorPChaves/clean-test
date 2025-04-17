"use client";
import Image from "next/image";

export default function FeatureBlock() {
  return (
    <>
      <section className="grid gap-10 px-6 py-16 sm:grid-cols-2 items-center bg-white">
        <Image
          src="/images/woman-clean.png"
          alt="Cleaner working"
          width={800}
          height={500}
          className="rounded-lg shadow w-full h-auto object-cover"
        />

        <div>
          <h2 className="text-[40px] font-bold text-blue-600">
            Why Choose Lu Clean?
          </h2>
          <p className="mt-4 text-gray-700 max-w-[80%]">
            We’re committed to delivering high-quality, reliable cleaning
            services with exceptional attention to detail.
          </p>
        </div>
      </section>
      <section className="grid gap-10 px-6 py-16 sm:grid-cols-2 items-center bg-white">
        <div className="order-2 sm:order-1">
          <h2 className="text-[40px] font-bold text-blue-600 text-end">
            A fresh and cozy home for you to rest.
          </h2>
          <p className="mt-4 text-gray-700 text-end">
            A tidy home promotes relaxation and well-being, and our residential
            cleaning services make it easy to maintain a spotless space. From
            dusting and vacuuming to sanitizing kitchens and bathrooms, our
            professional team handles every detail with care. We customize our
            services to fit your needs, ensuring your home stays fresh and
            inviting.
          </p>
        </div>

        <Image
          src="/images/clean-house.png"
          alt="Cleaner working"
          width={800}
          height={500}
          className="order-1 sm:order-2 rounded-lg shadow w-full h-auto object-cover"
        />
      </section>
    </>
  );
}
