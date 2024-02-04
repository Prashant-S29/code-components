"use client";

import React, { useState } from "react";
import TAG_TEXT from "./tagText";

const INTRO_PAGE = () => {
  const [showIntroPage, setShowIntroPage] = useState(true);
  const [showTagText, setShowTagText] = useState(false);
  const [logoPosition, setLogoPosition] = useState(false);

  setTimeout(() => {
    setLogoPosition(true);
    setTimeout(() => {
      setShowTagText(true);
      setTimeout(() => {
        setShowIntroPage(false);
      }, 3000);
    }, 700);
  }, 2000);

  return (
    <>
      <div
        className={` fixed left-0 ${showIntroPage ? "top-0" : "-top-[100%]"} z-[99999] flex min-h-screen w-full items-center justify-center bg-white duration-300 `}
      >
        <div
          className={`absolute ${
            logoPosition
              ? "top-10 translate-y-[0%] scale-[0.40] sm:scale-[0.60]"
              : "top-[50%] -translate-y-[50%] scale-[0.80] sm:scale-[0.90] md:scale-100"
          }  duration-500`}
        >
          <div
            className={`flex h-[100px] w-[200px] translate-x-[25%] items-end justify-center rounded-t-full bg-[#9EFF00]
            pl-1 leading-none`}
          >
            <span
              className={`text -translate-x-[65%] font-bold text-[#000000] ${logoPosition ? "opacity-0" : "opacity-100"} duration-300`}
            >
              CODE
            </span>
          </div>
          <div
            className={`flex h-[100px] w-[200px] -translate-x-[25%] items-start justify-end rounded-b-full bg-[#2B3DE2] pr-1 leading-none `}
          >
            <span
              className={`text-right font-semibold text-[#ffffff] ${logoPosition ? "opacity-0" : "opacity-100"} duration-300`}
            >
              COMPONENTS
            </span>
          </div>
        </div>
        <div
          className={`absolute ${showTagText ? "opacity-100" : "opacity-0"} scale-[0.70] duration-300 sm:scale-[0.80] md:scale-100`}
        >
          <TAG_TEXT />
        </div>
        <div className="absolute bottom-5 flex w-full justify-center px-[10%]">
          <div className=" loading-animation h-[3px] rounded-full bg-black" />
        </div>
      </div>
    </>
  );
};

export default INTRO_PAGE;
