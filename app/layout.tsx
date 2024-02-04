import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NAVBAR from "@/components/navbar";
// import FOOTER from "@/components/footer";
import SIDE_MENU from "@/clientComponents/sideMenu";
import NextBreadcrumb from "@/clientComponents/breadCrumb";
import INTRO_PAGE from "@/clientComponents/introPage";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code-Components",
  description: "Awesome components made in React & NextJS",
  
};


export default function WITH_NAV_ROOT_LAYOUT({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#f4f4f4] `}>
        <div>
          <INTRO_PAGE />
          <NAVBAR />
          <div className="flex h-screen w-full ">
            <div className="block  max-[350px]:hidden ">
              <SIDE_MENU />
            </div>
            <div className="ml-[50px]  h-screen w-full overflow-y-scroll px-2 pt-7  max-[350px]:ml-0">
              <NextBreadcrumb />
              {children}
              {/* <div className="w-full h-[100px]" /> */}
            </div>
          </div>
          {/* <FOOTER /> */}
        </div>
      </body>
    </html>
  );
}
