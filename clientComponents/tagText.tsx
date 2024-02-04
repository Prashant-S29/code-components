"use client";

import React, { useState } from "react";

const TAG_TEXT = () => {
  const [expandText, setExpandText] = useState(false);
  setTimeout(() => {
    setExpandText(true);
  }, 3300);
  return (
    <>
      <div className="flex gap-2">
        <div>
          <div className="flex items-center justify-end gap-1">
            <div
              className={`h-[33px] ${expandText ? "w-[70px]" : "w-[40px]"} rounded-r-full border-[10px] border-black bg-white duration-300`}
            ></div>
            <div className="leading-none">
              <span className="text-[42px] font-black">ESIGNING</span>
            </div>
          </div>
          <div className=" flex items-center justify-end gap-[2px]">
            <div className="leading-none">
              <span className="text-[42px] font-black">COMP</span>
            </div>
            <div
              className={`h-[31px] ${expandText ? "w-[70px]" : "w-[35px]"} rounded-full border-[10px] border-black bg-white duration-300`}
            ></div>
            <div className="leading-none">
              <span className="text-[42px] font-black">NENTS</span>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <div className="flex  items-start justify-end leading-none">
              <div>
                <span className="text-[42px] font-black">THA</span>
              </div>
              <div className="relative ml-2 mr-3 mt-[6px] flex justify-center">
                <div
                  className={`absolute ${
                    expandText
                      ? "bottom-0 -mb-[20px] h-[15px] w-[15px] translate-y-[0%] rounded-full bg-purple-400"
                      : "bottom-[100%] h-[8px] w-[30px] translate-y-[50%]"
                  } bg-black duration-300`}
                ></div>
                <div className="flex  justify-center">
                  <div className="h-[60px] w-[9px] bg-black"></div>
                </div>
              </div>
            </div>
            <div className="-mb-[6px] -ml-2 text-right">
              <div className="leading-none">
                <span className="text-[42px] font-black">NSPIRES</span>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <div>
            <span>COMPONENTS THAT</span>
          </div>
          <div>
            <span>INSPIRES</span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default TAG_TEXT;
