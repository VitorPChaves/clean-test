"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6 shadow-md">
      <div className="flex items-end justify-center gap-2 w-[200px]">
        <Image
          src="/images/logo.png"
          alt=""
          width={40}
          height={40}
          className="rounded-[10px]"
        />
        <span className="text-xl font-bold text-[#000] font-thin">
          Lu Clean
        </span>
      </div>
      <div className="space-x-4 text-sm text-gray-700">
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
        <Link href="/">(240) 643-0808</Link>
      </div>
    </nav>
  );
}
