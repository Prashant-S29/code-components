import { allComponents } from "@/contants";
import React from "react";
import COMPONENT_CARD from "./componentCard";
import Link from "next/link";

const RECENT_COMPONENTS = () => {
  return (
    <>
      <div className="w-fit ">
        <div className="flex items-center justify-between">
          <div className="text-[20px] font-bold leading-none">
            <span>✨ Popular Builds</span>
          </div>
          <Link href="/collections">
            <div className="leading-none">
              <span className="text-[12px] font-bold underline sm:text-[13px]">
                See All
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-2 flex flex-wrap gap-3 overscroll-none lg:overflow-x-scroll ">
          {allComponents.slice(0, 3).map((componentDetails, index) => (
            <COMPONENT_CARD
              key={index}
              componentDetails={componentDetails}
              index={index}
            />
          ))}
          {/* <div
            className="mt-3 flex  w-[150px]   items-center justify-center rounded-[15px] border-2 border-dashed
         border-purple-500 bg-purple-200"
          >
            <span className="text-[14px] font-bold ">See All</span>
          </div> */}
        </div>
      <div className="h-[100px] w-full" />
      </div>
    </>
  );
};

export default RECENT_COMPONENTS;
