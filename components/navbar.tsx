import MENU from "@/clientComponents/menu";
import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAVBAR = () => {
  return (
    <>
      <div className="sticky top-0 z-[9999] flex w-full items-center justify-between border-b bg-[#f4f4f4] px-[20px] py-[20px]  ">
        <Link href="/">
          <div className="flex items-center gap-1">
            <div>
              <Image src={logo} alt="logo" className="w-[40px]" />
            </div>
            <div>
              <span className="text-[14px] font-bold sm:text-[16px]">
                Code Components
              </span>
            </div>
          </div>
        </Link>
        <div>
          <MENU />
        </div>
      </div>
    </>
  );
};

export default NAVBAR;
