import COMPONENT_CARD from "@/components/componentCard";
import { allComponents } from "@/contants";
import React from "react";

const COLLECTIONS = () => {
  return (
    <>
      <div className="mt-2">
        <span className="text-[24px] sm:text-[28px] font-bold leading-tight">
        Component Collections
        </span>
      </div>
      <div>
        <span className="text-[14px] sm:text-[16px]">
          Explore the beautifully designed components that are tailored to
          latest design trends, fully build in React using NextJs
        </span>
      </div>
      <div className="mt-2 flex flex-wrap gap-3 ">
        {allComponents.map((componentDetails, index) => (
          <COMPONENT_CARD
            key={index}
            componentDetails={componentDetails}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-[300px]" />
    </>
  );
};

export default COLLECTIONS;
