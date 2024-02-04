"use client";

import { navLinks } from "@/contants";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MENU = () => {
  const [showMenuWidget, setShowMenuWidget] = useState(false);
  const [showMenuLinkBox, setShowMenuLinkBox] = useState(false);
  const [menuLinkAnimation, setMenuLinkAnimation] = useState([-1, -1]);

  const handleMenuClick = () => {
    if (showMenuWidget) {
      setShowMenuLinkBox(false);
      setShowMenuWidget(false);
      return;
    }
    setShowMenuWidget(true);
    setTimeout(() => {
      setShowMenuLinkBox(true);
    }, 300);
  };

  const handleMenuLinkInteraction = () => {
    handleMenuClick();
  };

  useEffect(() => {
    const handleEscKey = (e: any) => {
      if (e.key === "Escape") {
        handleMenuClick();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  });

  return (
    <>
      {showMenuWidget && (
        <div
          className={`absolute left-0 top-0 min-h-screen w-full `}
          style={{
            backgroundColor: `${showMenuWidget ? "#00000035" : "#00000000"}`,
            transitionDuration: "200ms",
          }}
          onClick={handleMenuLinkInteraction}
        />
      )}
      <div className="relative flex w-full select-none items-start justify-end">
        <div
          className={`z-30 flex h-[29px] cursor-pointer items-center justify-center   
          overflow-hidden rounded-full bg-black  px-[15px] py-[4px] duration-200 sm:h-[34px] sm:px-[20px]`}
          onClick={handleMenuClick}
        >
          <div className="-mt-1 h-[15px] overflow-hidden sm:mt-0 sm:h-[20px]">
            <div
              className={`duration-200 ${showMenuWidget ? "-translate-y-[15px] sm:-translate-y-[19px]" : "translate-y-[1px]"}`}
              // style={{
              //   transform: `${showMenuWidget ? "translateY(-19px)" : "translateY(1px)"}`,
              // }}
            >
              <div className="h-[15px] leading-none sm:h-[20px]">
                <span className="text-[12px] font-medium text-[#ffffff] sm:text-[14px]">
                  Menu
                </span>
              </div>
              <div className="h-[15px] leading-none sm:h-[20px]">
                <span className="text-[12px] font-medium text-white sm:text-[14px]">
                  Close
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`absolute z-20  ${
            showMenuWidget
              ? "-mr-[10px] -mt-[10px] h-[500px] w-[300px] shadow-md bg-white"
              : "mr-0 mt-0 h-[34px] w-[80px] bg-transparent"
          } rounded-[20px] duration-[400ms] `}
        >
          <div
            className={`flex h-full w-full  overflow-hidden rounded-[10px] duration-200
            ${showMenuLinkBox ? "opacity-100" : "opacity-0"}`}
          >
            <div className="mb-[70px] mt-[50px] w-full">
              {/* <div className="w-full">
                <div className="mb-2 bg-black px-[1px] ">
                  <div className="flex w-fit items-center gap-1 rounded-full  px-[10px]  py-[5px] ">
                    <div className="aspect-square w-[7px] rounded-full bg-white" />
                    <div className="flex leading-none">
                      <span className="text-[13px] font-medium text-white">
                        Actions
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-1">
                  <span className="text-[18px] font-semibold">Go Dark</span>
                </div>
              </div> */}
              {navLinks.map((allLinks, indexOne) => (
                <div key={indexOne} className="mt-3 w-full">
                  <div className="mb-2 bg-black px-[1px]">
                    <div className="flex w-fit items-center gap-1 rounded-full  px-[10px]  py-[3px] ">
                      <div className="aspect-square w-[5px] rounded-full bg-white" />
                      <div className="flex">
                        <span className="text-[11px] sm:text-[12px] font-normal sm:font-medium text-white">
                          {allLinks.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    {allLinks.links.map((link, indexTwo) => (
                      <Link
                      tabIndex={-1}
                        href={link.href}
                        key={indexTwo}
                        onClick={handleMenuLinkInteraction}
                      >
                        <div
                          className="h-[40px] overflow-hidden px-5 py-1"
                          onMouseEnter={() => {
                            setMenuLinkAnimation([indexOne, indexTwo]);
                          }}
                          onMouseLeave={() => {
                            setMenuLinkAnimation([-1, -1]);
                          }}
                        >
                          <div className="duration-300 ">
                            <div className="flex h-[20px] sm:h-[25px] overflow-hidden">
                              {link.text.split("").map((char, index) => (
                                <div
                                  key={index}
                                  className=" h-[20px] sm:h-[25px] overflow-hidden"
                                >
                                  <div
                                    className="text-[16px] sm:text-[18px] font-semibold text-[#000000]"
                                    style={{
                                      transform: `${
                                        menuLinkAnimation[0] === indexOne &&
                                        menuLinkAnimation[1] === indexTwo
                                          ? "translateY(-30px)"
                                          : "translateY(0px)"
                                      }`,
                                      transitionDuration: `${300 + index * 40}ms`,
                                    }}
                                  >
                                    {char}
                                  </div>
                                  <div
                                    className="text-[16px] sm:text-[18px] font-semibold text-[#000000]"
                                    style={{
                                      transform: `${
                                        menuLinkAnimation[0] === indexOne &&
                                        menuLinkAnimation[1] === indexTwo
                                          ? "translateY(-30px)"
                                          : "translateY(0px)"
                                      }`,
                                      transitionDuration: `${300 + index * 40}ms`,
                                    }}
                                  >
                                    {char}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="absolute bottom-0 m-5">
                <span className="text-[11px] font-medium  text-gray-600">
                  <span className="rounded-[3px] bg-gray-200 px-[5px] py-[2px] font-semibold">
                    Esc
                  </span>{" "}
                  to toggle
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MENU;
