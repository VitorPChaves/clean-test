"use client";
import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      title: "Residential Cleaning",
      img: "/images/clean-house-2.png",
      desc: "Your home cleaned with care and precision.",
    },
    {
      title: "Commercial Cleaning",
      img: "/images/clean-office.png",
      desc: "Professional cleaning for your workspace.",
    },
    {
      title: "Post-Construction",
      img: "/images/clean-construction.png",
      desc: "Remove dust and debris after renovations.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-blue-600 mb-10">
        Our Services
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="bg-white p-4 rounded shadow">
            <Image
              src={s.img}
              alt={s.title}
              width={600}
              height={400}
              className="rounded mb-4 w-full h-auto object-cover"
            />
            <h3 className="text-lg font-semibold text-blue-700">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
