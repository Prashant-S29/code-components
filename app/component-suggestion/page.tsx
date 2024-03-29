import React from "react";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SUGGESTION_FORM from "@/clientComponents/suggestionForm";
const SUGGESSTION = () => {
  return (
    <>
      <div className="relative mt-2 w-fit  leading-tight pr-[10px]">
        <span className="text-[24px] font-semibold sm:text-[28px]">
          Suggest a Component
        </span>
        <div className="absolute right-5 top-0 -z-10 -m-[25px] sm:right-0">
          <AutoAwesomeIcon className="rotate-12 text-[48px] text-gray-300" />
        </div>
      </div>
      <div className="mt-2 w-full  leading-tight sm:w-[500px]  pr-[10px] md:w-[800px]">
        <span className="text-[14px] sm:text-[16px] ">
          As I build out this website, I{"'"}d love your input on interesting
          animations & interactions we all could use for inspiration.{" "}
          <span className="font-semibold">No guarantees</span>, but if I think
          it{"'"}s a fit, I{"'"}ll build it out and let you know!
        </span>
      </div>
      <div className="mt-4 pr-[10px]">
        <SUGGESTION_FORM />
      </div>
    </>
  );
};

export default SUGGESSTION;
