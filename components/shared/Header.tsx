import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <Link href="/">
          <div className="w-36 flex flex-row items-center gap-2">
            <Image
              src="/assets/images/logo.svg"
              alt="Koniya-event logo"
              width={36}
              height={36}
            />
            Koniya Event
          </div>
          <div className="flex w-32 justify-end gap-3"></div>
        </Link>
      </div>
    </header>
  );
};
