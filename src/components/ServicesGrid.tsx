"use client";
import Image from "next/image";

export default function ServicesGrid() {
  const services = [
    {
      title: "Residential Cleaning",
      img: "/images/clean-house-2.png",
      desc: "Enjoy peace of mind with a cozy, fresh home. Our expert team handles every room with precision and care.",
    },
    {
      title: "Commercial Cleaning",
      img: "/images/clean-office.png",
      desc: "Boost productivity with a pristine office. We provide reliable, discreet, and consistent cleaning for your business space.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#f8fdfd]">
      <h2 className="text-center text-4xl font-bold text-primary font-elegante mb-12">
        Our Services
      </h2>

      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <Image
              src={s.img}
              alt={s.title}
              width={600}
              height={400}
              className="w-full h-[280px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-primary font-elegante mb-2">
                {s.title}
              </h3>
              <p className="text-[#00000090] text-lg font-poppins leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
