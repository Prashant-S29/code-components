"use client";

import Image from "next/image";
import React, { useState } from "react";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";

const VIDEO_PLAYER = ({
  videoLink,
  thumgNail,
  sourceCodeLink,
  seeLiveLink,
  componentId,
}: {
  videoLink: string;
  thumgNail: string;
  sourceCodeLink: string;
  seeLiveLink: string;
  componentId: string;
}) => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <>
      <div
        id="videoPlayer"
        className="relative h-[190px]  w-[280px] sm:w-[340px]"
        onMouseEnter={() => {
          setPlayVideo(true);
        }}
        onMouseLeave={() => {
          setPlayVideo(false);
        }}
      >
        {playVideo && (
          <div>
            <Link href={`collections/${componentId}`}>
              <video
                autoPlay
                muted
                loop
                className="absolute left-0 top-0 z-10 h-[190px] w-[280px] rounded-[10px] object-cover sm:w-[340px]"
              >
                <source src={videoLink} />
              </video>
            </Link>

            <div className="demoButton-aniamtion absolute bottom-0 right-0 z-20 m-2 flex gap-2 ">
              <Link href={sourceCodeLink} target="_blank">
                <div className=" flex cursor-pointer items-center gap-1 rounded-[5px] bg-gray-200 px-2 py-[4px]">
                  <div className="flex leading-none">
                    <span className="text-[12px] font-bold text-black ">
                      Source Code
                    </span>
                  </div>
                  <div className="flex">
                    <ArrowOutwardRoundedIcon className="text-[13px] text-black" />
                  </div>
                </div>
              </Link>
              {seeLiveLink === "" ? (
                ""
              ) : (
                <Link href={seeLiveLink} target="_blank">
                  <div className=" flex cursor-pointer items-center gap-1 rounded-[5px] bg-gray-200 px-2 py-[4px]">
                    <div className="flex leading-none">
                      <span className="text-[12px] font-bold text-black ">
                        See Live
                      </span>
                    </div>
                    <div className="flex">
                      <ArrowOutwardRoundedIcon className="text-[13px] text-black" />
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        )}
        <div className="absolute left-0 top-0 h-[190px] w-[280px] rounded-[10px] bg-gray-400 sm:w-[340px]">
          <Image
            src={thumgNail}
            alt="thumbnail"
            unoptimized
            className=" h-[190px] w-[280px] rounded-[10px] object-cover sm:w-[340px]"
            width={300}
            height={170}
          />
        </div>
      </div>
    </>
  );
};

export default VIDEO_PLAYER;
