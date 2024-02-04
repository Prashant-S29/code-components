"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NextBreadcrumb = () => {
  const paths = usePathname();
  const pathNames: string[] = paths.split("/").filter((path) => path);

  return (
    <div className="h-[20px] w-full">
      <ul className="flex items-center">
        <li className=" text-[12px] sm:text-[14px] text-gray-500">
          <Link href={"/"} className="font-semibold">
            Home
          </Link>
        </li>
        {pathNames.length > 0 && (
          <span className="mx-1 text-[12px] sm:text-[14px] text-gray-500">/</span>
        )}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? `text-gray-600   text-[12px] sm:text-[14px]`
              : `  text-[12px] sm:text-[14px] text-gray-500`;
          let itemLink = link[0].toUpperCase() + link.slice(1, link.length);
          return (
            <React.Fragment key={index}>
              {index === pathNames.length - 1 ? (
                <li className={itemClasses}>
                  <Link href={href} className="font-semibold">
                    {itemLink.split("-").map((item,index)=>(
                      <span key={index} className="capitalize pr-1">{item}</span>
                    ))}
                  </Link>
                  {pathNames.length !== index + 1 && (
                    <span className="mx-1 text-[12px] sm:text-[14px] text-gray-500">/</span>
                  )}
                </li>
              ) : (
                <li className={itemClasses}>
                  <Link href={href} className="font-semibold">
                    {itemLink}
                  </Link>
                  {pathNames.length !== index + 1 && (
                    <span className="mx-1 text-[12px] sm:text-[14px] text-gray-500">/</span>
                  )}
                </li>
              )}
              {/* <li className={itemClasses}>
                <Link href={href} className="font-semibold">
                  {itemLink}
                </Link>
                {pathNames.length !== index + 1 && (
                  <span className="mx-1 text-[14px] text-gray-500">/</span>
                )}
              </li> */}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default NextBreadcrumb;
