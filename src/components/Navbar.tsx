"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const smsMessage = encodeURIComponent(
    "Hello, I visited your website and I would like to know the pricing for your cleaning service."
  );

  return (
    <>
      <nav className="flex items-center justify-between bg-[#FFFFFF] px-10 py-6 h-[140px] z-[11]">
        <Link href="/" className="relative flex items-end justify-center">
          <div className="absolute right-[-84px] top-[-18px] flex items-end justify-start gap-[4px]">
            <img
              alt="Liberty Mutual"
              src="/images/icons/insurance.png"
              className="w-[22px] mb-[8px]"
            />
            <p className="font-bold font-elegante text-[#01006699]">Insured</p>
          </div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={200}
            height={100}
            className="rounded-[10px]"
          />
        </Link>
        <div className="hidden lg:flex font-bold space-x-6 text-[16px">
          <Link href="#hire" className="smooth-transition hover:scale-[1.08]">
            Why hire us?
          </Link>
          <Link
            href="#services"
            className="smooth-transition hover:scale-[1.08]"
          >
            Cleaning Services
          </Link>
          <a
            href={`sms:+12406430808?body=${smsMessage}`}
            onClick={() => setMenuOpen(false)}
            className="block smooth-transition hover:scale-[1.08]"
          >
            Contact Us
          </a>
        </div>
        <a
          href={`sms:+12406430808?body=${smsMessage}`}
          className="hidden md:flex relative inline-block bg-gradient-to-r from-[#00000020] to-transparent p-[10px]"
        >
          <p className="absolute top-[-18px] text-[10px] text-[#00000099] font-semibold font-montserrat">
            CONTACT FOR AN ESTIMATE
          </p>
          <div className="absolute top-0 bottom-0 m-0 left-[-80px] flex flex-row items-center justify-center gap-[10px]">
            <img
              alt="facebook"
              src="/images/icons/face-icon.png"
              className="w-[28px] bg-[#00000020] rounded-full p-[3px] smooth-transition hover:scale-[1.2]"
            />
            <img
              alt="instagram"
              src="/images/icons/insta-icon.png"
              className="w-[28px] bg-[#00000020] rounded-full p-[3px] smooth-transition hover:scale-[1.2]"
            />
          </div>
          <div className="flex flex-row items-center gap-[12px]">
            <img
              alt="msg"
              src="/images/icons/message.png"
              className="w-[22px]"
            />
            <p className="font-montblanc font-bold text-[24px] text-[#000000] no-underline">
              (240) 643-0808
            </p>
          </div>
        </a>
        {/* Hamburger button for mobile */}
        <button
          className="lg:hidden flex flex-col justify-between h-[20px] w-[26px]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-[3px] w-full bg-black transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[3px] w-full bg-black transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-30 px-6 py-10 flex flex-col justify-between">
          {/* Top row with logo and close button */}
          <div className="flex justify-between items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={160}
              height={70}
              className="rounded-[10px]"
            />
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="text-[28px] font-bold"
            >
              ×
            </button>
          </div>
          {/* Navigation links */}
          <div className="flex flex-col items-start space-y-6 mt-10 font-bold text-[18px]">
            <Link href="#hire" onClick={() => setMenuOpen(false)}>
              Why hire us?
            </Link>
            <Link href="#services" onClick={() => setMenuOpen(false)}>
              Cleaning Services
            </Link>
            <a
              href={`sms:+12406430808?body=${smsMessage}`}
              onClick={() => setMenuOpen(false)}
              className="block"
            >
              Contact Us
            </a>
          </div>
          {/* Phone number */}
          <a
            href={`sms:+12406430808?body=${smsMessage}`}
            className="relative inline-block bg-gradient-to-r from-[#00af94] to-transparent p-[10px]"
          >
            <div className="absolute left-0 top-[-60px] flex flex-row items-center justify-center gap-[10px]">
              <img
                alt="facebook"
                src="/images/icons/face-icon.png"
                className="w-[28px] bg-[#00000020] rounded-full p-[3px]"
              />
              <img
                alt="instagram"
                src="/images/icons/insta-icon.png"
                className="w-[28px] bg-[#00000020] rounded-full p-[3px]"
              />
            </div>
            <p className="absolute top-[-18px] text-[12px] text-[#00000099] font-semibold font-montserrat">
              CONTACT FOR AN ESTIMATE
            </p>
            <div className="flex flex-row items-center gap-[12px]">
              <img
                alt="msg"
                src="/images/icons/message.png"
                className="w-[22px]"
              />
              <p className="font-montblanc font-bold text-[28px] text-[#FFFFFF] no-underline">
                (240) 643-0808
              </p>
            </div>
          </a>{" "}
        </div>
      )}
    </>
  );
}
