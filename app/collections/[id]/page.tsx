"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { allComponents } from "@/contants";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import Link from "next/link";
import Image from "next/image";
import { prashantImage } from "@/public";

const COMPONENT = () => {
  const [id, setId] = useState("");
  const pathName = usePathname();

  useEffect(() => {
    const getId = pathName.split("/");
    setId(getId[getId.length - 1]);
  }, [pathName]);

  return (
    <>
      <div className="mt-5">
        {allComponents.map((component, index) => (
          <div key={index}>
            {component.componentId === id && (
              <div>
                <div className="flex items-center gap-x-2 ">
                  <div className="aspect-square w-[40px] rounded-full">
                    <Image
                      src={prashantImage}
                      alt="prashant"
                      className="aspect-square w-[40px] rounded-full"
                    />
                  </div>
                  <div className="-mt-1">
                    <div className="leading-none">
                      <span className="text-[13px] font-semibold sm:text-[14px]">
                        Prashant Singh
                      </span>
                    </div>
                    <div className="mt-[4px] flex items-center text-[11px] font-medium leading-none text-gray-600 sm:text-[12px]">
                      <div>
                        <span>{component.date}</span>
                      </div>
                      <div className="mx-1">/</div>
                      <div className="flex items-center gap-[2px]">
                        {component.difficulty === "Easy" && (
                          <div
                            className={`aspect-square w-[8px] rounded-full bg-green-600 sm:w-[10px]`}
                          />
                        )}
                        {component.difficulty === "Intermediate" && (
                          <div
                            className={`aspect-square w-[8px] rounded-full bg-amber-400 sm:w-[10px]`}
                          />
                        )}
                        {component.difficulty === "Advanced" && (
                          <div
                            className={`aspect-square w-[8px] rounded-full bg-red-600 sm:w-[10px]`}
                          />
                        )}
                        <div>
                          <span>{component.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 ">
                  <span className="text-[22px] font-semibold sm:text-[28px] ">
                    {component.title}
                  </span>
                </div>
                <div className="my-1 leading-tight">
                  <span className="text-[14px] sm:text-[16px] ">
                    {component.description}
                  </span>
                </div>
                <div className="my-3 flex gap-2">
                  {component.demoLink != "" && (
                    <Link href={component.demoLink} target="_blank">
                      <div className=" flex items-center gap-1 rounded-md bg-purple-200 px-2 py-1 ">
                        <div className="flex leading-none">
                          <span className="text-[13px] font-bold text-purple-600 ">
                            Live Demo
                          </span>
                        </div>
                        <div className="flex">
                          <ArrowOutwardRoundedIcon
                            className=" text-purple-600"
                            style={{ fontSize: "14px" }}
                          />
                        </div>
                      </div>
                    </Link>
                  )}
                  <Link href={component.sourceCode}>
                    <div className=" flex items-center gap-1 rounded-md bg-purple-200 px-2 py-1 ">
                      <div className="flex leading-none">
                        <span className="text-[13px] font-bold text-purple-600 ">
                          Source Code
                        </span>
                      </div>
                      <div className="flex">
                        <ArrowOutwardRoundedIcon
                          className=" text-purple-600"
                          style={{ fontSize: "14px" }}
                        />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="py-4">
                  <video
                    autoPlay
                    muted
                    loop
                    className=" w-[100%] rounded-[10px] object-cover sm:w-[80%] sm:rounded-[20px]"
                  >
                    <source src={component.introVideo} />
                  </video>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-[200px] w-full" />
    </>
  );
};

export default COMPONENT;
