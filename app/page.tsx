import TAG_SECTION from "@/clientComponents/tagSection";
import RECENT_COMPONENTS from "@/components/recentComponents";
import React from "react";

const HOME = () => {
  return (
    <>
      <div className=" w-full ">
        <div className="mt-2">
          <span className="text-[24px] sm:text-[28px] font-semibold leading-tight">
            Welcome to my blog,{" "}
            <span className="text-gray-600">
              I am Prashant Singh and here I document my latest explorations
            </span>
          </span>
        </div>
        <div className="mt-5 ">
          <TAG_SECTION />
        </div>
        <div className="mt-8">
          <RECENT_COMPONENTS />
        </div>
      </div>
    </>
  );
};

export default HOME;
