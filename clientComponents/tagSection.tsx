"use client";

import React, { useState } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";

import { motion } from "framer-motion";
import { allTags } from "@/contants";
import Link from "next/link";

const TAG_SECTION = () => {
  const [activeTag, setActiveTag] = useState(-1);

  return (
    <>
      <div
        className="flex w-fit flex-wrap items-center gap-2"
        onMouseLeave={() => {
          setActiveTag(-1);
        }}
      >
        {allTags.map((tag, index) => (
          <div
            key={index}
            className="relative  cursor-pointer"
            onMouseEnter={() => {
              setActiveTag(index);
            }}
          >
            <Link href={tag.href}>
              <div className=" flex items-center gap-1 rounded-md bg-purple-200 px-2 py-[4px]">
                <div className="flex leading-none">
                  <span className="text-[12px] font-bold text-purple-600 sm:text-[13px] ">
                    {tag.text}
                  </span>
                </div>
                <div className="flex">
                  <ArrowOutwardRoundedIcon
                    style={{ fontSize: "18px" }}
                    className=" text-purple-600"
                  />
                </div>
              </div>
            </Link>
            {activeTag === index && (
              <motion.div
                layoutId="active-tag"
                className="absolute left-0 top-0 -z-10 -ml-[1px] -mt-[1px] h-[calc(100%+2px)] w-[calc(100%+2px)] rounded-md 
                 border border-purple-600 "
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default TAG_SECTION;
