import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const smsMessage = encodeURIComponent(
    "Hello, I visited your website and I would like to know the pricing for your cleaning service."
  );
  return (
    <footer className="min-h-[200px] bg-gradient-to-t from-[#010066] to-gray-50 px-[28px] py-6 text-center text-sm text-[#FFFFFF]">
      <div className="flex flex-row items-center justify-between text-[#FFFFFF]">
        <div className="flex items-end justify-center">
          <Image
            src="/images/logo-footer.png"
            alt="logo"
            width={140}
            height={100}
            className="rounded-[10px]"
          />
        </div>
        <div className="flex flex-col lg:flex-row font-bold gap-[20px] md:text-xl">
          <Link href="#hire">Why hire us?</Link>
          <Link href="#services">Cleaning Services</Link>
          <a href={`sms:+12406430808?body=${smsMessage}`}>Contact Us</a>
        </div>
        <a
          href={`sms:+12406430808?body=${smsMessage}`}
          className="relative inline-block ml-4"
        >
          <p className="absolute top-[-14px] right-[0px] text-[8px] md:text-[10px] text-[#FFFFFF99] font-montserrat">
            CONTACT FOR AN ESTIMATE
          </p>
          <div className="flex flex-row items-center gap-[12px]">
            <img
              alt="msg"
              src="/images/icons/message.png"
              className="hidden md:block w-[22px]"
            />
            <p className="min-w-[120px] md:text-xl font-montblanc font-bold text-[#FFFFFF] no-underline">
              (240) 643-0808
            </p>
          </div>
        </a>{" "}
      </div>
      <div className="mt-[40px] mb-[10px] border-[1px] border-[#FFFFFF99] w-full"></div>{" "}
      <p className="text-[#FFFFFF99]">
        © {new Date().getFullYear()} Shiny Touch. All rights reserved.
      </p>
    </footer>
  );
}
