import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="min-h-[200px] bg-[#010066] mt-20 border-t px-6 py-6 text-center text-sm text-[#FFFFFF]">
      <div className="flex flex-row items-center justify-between text-[#FFFFFF]">
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
          <p className="font-montblanc font-bold text-[22px] text-[#000000] no-underline">
            (240) 643-0808
          </p>
        </a>{" "}
      </div>
      <div className="mb-[10px] border-[1px] border-[#FFFFFF90] w-full"></div>{" "}
      <p className="text-[#FFFFFF90]">
        © {new Date().getFullYear()} Shiny Touch. All rights reserved.
      </p>
    </footer>
  );
}
