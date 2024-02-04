"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { sideMenu } from "@/contants";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import LockClockRoundedIcon from "@mui/icons-material/LockClockRounded";
import AccessTimeFilledRoundedIcon from "@mui/icons-material/AccessTimeFilledRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import UnfoldLessIcon from "@mui/icons-material/UnfoldLess";

const SIDE_MENU = () => {
  const [closeSideMenu, setCloseSideMenu] = useState(true);
  const [closeAll, setCloseAll] = useState(false);

  useEffect(() => {
    const handleCtrlKey = (e: any) => {
      if (e.ctrlKey && e.key.toLowerCase() === "q") {
        setCloseSideMenu(!closeSideMenu);
      }
    };

    window.addEventListener("keydown", handleCtrlKey);

    return () => {
      window.removeEventListener("keydown", handleCtrlKey);
    };
  });

  return (
    <>
      <div className=" fixed z-[999]  flex select-none  bg-[#f4f4f4] pt-[20px] ">
        <div
          className="mx-2  cursor-pointer"
          onClick={() => {
            setCloseSideMenu(!closeSideMenu);
          }}
        >
          {closeSideMenu ? (
            <div className="flex h-fit   w-fit rounded-[5px] bg-gray-300 px-[4px] py-[2px] ">
              <LogoutRoundedIcon className="w-[18px] sm:w-[20px] text-gray-700 " />
            </div>
          ) : (
            <div className="flex h-fit w-fit  rotate-180 rounded-[5px] bg-gray-300 px-[4px] py-[2px] ">
              <LogoutRoundedIcon className="w-[18px] sm:w-[20px] text-gray-700 " />
            </div>
          )}
        </div>
        <div
          className={`sideMenuScrollbar h-[100vh] overflow-x-hidden overflow-y-scroll whitespace-nowrap   duration-300  ${closeSideMenu ? " w-0 overflow-hidden  " : "w-[300px] pb-[50px] pl-3 pr-6"}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-medium  text-gray-600">
                <span className="rounded-[3px] bg-gray-200 px-[5px] py-[2px] font-semibold">
                  Ctrl
                </span>
                <span className="px-1">+</span>
                <span className="rounded-[3px] bg-gray-200 px-[5px] py-[2px] font-semibold">
                  q
                </span>
                &nbsp;&nbsp;to toggle
              </span>
            </div>
            <div
              onClick={() => {
                setCloseAll(!closeAll);
              }}
              className="cursor-pointer"
            >
              {closeAll ? (
                <div>
                  <UnfoldMoreIcon className="flex w-[14px] sm:w-[16px] text-gray-600" />
                </div>
              ) : (
                <div>
                  <UnfoldLessIcon className="flex w-[14px] sm:w-[16px] text-gray-600" />
                </div>
              )}
            </div>
          </div>
          {sideMenu.map((sideMenuLinks, index) => (
            <SIDE_MENU_CONTAINER
              key={index}
              index={index}
              sideMenuLinks={sideMenuLinks}
              closeAll={closeAll}
              setCloseSideMenu={setCloseSideMenu}
            />
          ))}
          <div className="h-[100px] w-full" />
        </div>
      </div>
    </>
  );
};

const SIDE_MENU_CONTAINER = ({
  index,
  sideMenuLinks,
  closeAll,
  setCloseSideMenu,
}: {
  index: number;
  sideMenuLinks: {
    category: string;
    links: {
      href: string;
      text: string;
      tag: string;
    }[];
    status: string;
  };
  closeAll: boolean;
  setCloseSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [showLinks, setShowLinks] = useState(index);
  useEffect(() => {
    if (closeAll) {
      setShowLinks(-1);
    } else {
      setShowLinks(index);
    }
  }, [closeAll, index]);
  const handleShowLinks = () => {
    if (showLinks === index) {
      setShowLinks(-1);
      return;
    }
    setShowLinks(index);
  };

  return (
    <>
      <div className="mt-2 first:mt-0">
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={handleShowLinks}
        >
          <div>
            <span className="text-[16px] font-bold ">
              {sideMenuLinks.category}
            </span>
          </div>

          {sideMenuLinks.status === "lock" ? (
            <div className={`flex`}>
              <LockClockRoundedIcon className="w-[14px] sm:w-[16px] text-purple-700" />
            </div>
          ) : (
            <div>
              {sideMenuLinks.status === "available" ? (
                <div
                  className={`${showLinks === index ? "rotate-0" : "-rotate-90"} flex duration-200 `}
                >
                  <KeyboardArrowDownRoundedIcon className="w-[14px] sm:w-[16px] " />
                </div>
              ) : (
                <div
                  className={`${showLinks === index ? "rotate-0" : "-rotate-90"} flex duration-200 `}
                >
                  <AccessTimeFilledRoundedIcon className="w-[14px] sm:w-[16px] text-purple-700" />
                </div>
              )}
            </div>
          )}
        </div>
        {sideMenuLinks.status === "available" && (
          <div
            className={`mt-1 overflow-hidden`}
            style={{
              transitionDuration: "200ms",
              height: `${showLinks === index ? `${sideMenuLinks.links.length * 32}px` : "0px"}`,
            }}
          >
            {sideMenuLinks.links.map((link, index) => (
              <div
                key={index}
                className="relative mb-1 flex h-[28px]  w-fit items-center  gap-1"
                onClick={() => {
                  setCloseSideMenu(true);
                }}
              >
                <Link tabIndex={-1} href={`${link.href}`}>
                  <div className="  max-w-[170px] overflow-hidden text-ellipsis whitespace-nowrap rounded-[7px] px-[10px] font-medium">
                    <span className={`text-[14px]  text-black duration-300`}>
                      {link.text}
                    </span>
                  </div>
                </Link>
                <div>
                  {link.tag != "" && (
                    <div className="  flex h-fit w-fit items-center gap-1  rounded-[5px] bg-purple-200  px-2 py-1">
                      <span className=" overflow-hidden whitespace-nowrap text-[11px] font-semibold leading-none  text-purple-700">
                        {link.tag}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SIDE_MENU;
