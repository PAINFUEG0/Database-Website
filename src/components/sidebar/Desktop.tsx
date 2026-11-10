/** @format */

import React, { memo } from "react";
import { SidebarHead } from "./Head";
import { SidebarBody } from "./Body";
import { Tail } from "./Tail";

export const DesktopSidebar = memo(
  ({ theme, setTheme }: { theme: "light" | "dark"; setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">> }) => {
    return (
      <div className="hidden h-full w-65 shrink-0 scrollbar-none flex-col gap-2 overflow-x-hidden overflow-y-auto border-r-2 border-[#ebebeb] shadow-xl shadow-black/20 backdrop-blur-md lg:flex">
        <SidebarHead />
        <SidebarBody />
        <Tail theme={theme} setTheme={setTheme} />
      </div>
    );
  },
);
