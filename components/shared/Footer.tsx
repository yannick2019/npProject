import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={38}
            height={38}
          />
        </Link>
        <p>&copy;2024 Koniya Event. All right reserved.</p>
      </div>
    </footer>
  );
};
