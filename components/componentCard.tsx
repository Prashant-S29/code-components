import VIDEO_PLAYER from "@/clientComponents/videoPlayer";
import Link from "next/link";
import React from "react";

const COMPONENT_CARD = ({
  componentDetails,
  index,
}: {
  componentDetails: {
    componentId: string;
    introVideo: string;
    thumbNail: string;
    demoLink: string;
    sourceCode: string;
    date: string;
    tags: string[];
    difficulty: "Easy" | "Intermediate" | "Advanced";
    title: string;
    description: string;
  };
  index: number;
}) => {
  return (
    <>
      <div key={index} className="rounded-[20px]  py-3">
        <div className="mt-0 pb-0 duration-300 hover:-mt-2 hover:pb-2">
          <VIDEO_PLAYER
            videoLink={componentDetails.introVideo}
            thumgNail={componentDetails.thumbNail}
            sourceCodeLink={componentDetails.sourceCode}
            seeLiveLink={componentDetails.demoLink}
            componentId={componentDetails.componentId}
          />
        </div>
        <div className="px-2">
          <div className="mt-[2px]">
            <span className="text-[12px] font-semibold text-gray-500">
              {componentDetails.date}
            </span>
          </div>
          <div className="noScrollBar my-1  flex   w-[280px] sm:w-[324px] cursor-default select-none gap-1 overflow-x-scroll">
            {componentDetails.tags.map((tag, index) => (
              <div
                key={index}
                className=" flex h-fit w-fit items-center gap-1  rounded-[5px] bg-gray-300  px-2 py-1"
              >
                <span className=" overflow-hidden whitespace-nowrap text-[11px] font-semibold leading-none  text-gray-700">
                  {tag}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 leading-tight">
            <span className="text-[18px] font-bold">
              {componentDetails.title}
            </span>
          </div>

          <div className="line-clamp-3 w-[284px] leading-tight">
            <span className="text-[13px] ">{componentDetails.description}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default COMPONENT_CARD;
