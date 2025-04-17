"use client";

import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center gap-2 w-[200px]">
        <Image
          src="/images/logo.png"
          alt=""
          width={40}
          height={40}
          className="rounded-[10px]"
        />
        <span className="text-xl font-bold text-blue-700">Lu Clean</span>
      </div>
      <div className="space-x-4 text-sm text-gray-700">
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>
        <Link href="/">(XXX) XXX-XXXX</Link>
      </div>
    </nav>
  );
}
