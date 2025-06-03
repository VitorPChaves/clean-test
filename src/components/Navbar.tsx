"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 shadow-md h-[100px] overflow-hidden">
      <div className="flex items-end justify-center">
        <Image
          src="/images/logo-light.jpg"
          alt=""
          width={200}
          height={100}
          className="rounded-[10px]"
        />
      </div>
      <div className="font-bold space-x-6 text-[16px]">
        <Link href="/">Why hire us?</Link>
        <Link href="/">Cleaning Services</Link>
        <Link href="/">Contact Us</Link>
      </div>
      <a
        href="sms:+15551234567?body=Hi%20Lu%20Clean!%20I'm%20interested%20in%20your%20services."
        className="relative w-[180px] inline-block ml-4"
      >
        <p className="absolute top-[-14px] text-[14px] text-[#00000090] font-montserrat">
          Contact for an estimate
        </p>
        <p className="font-lato font-bold text-[22px] text-[#000000] no-underline">
          (240) 643-0808
        </p>
      </a>{" "}
    </nav>
  );
}
