/** @format */

import { memo } from "react";
import { pages } from "../../pageMappings";
import { Link, useLocation } from "react-router-dom";

export const SidebarBody = memo(() => {
  const location = useLocation();
  return (
    <div className="flex h-full w-65 scrollbar-none flex-col gap-3 overflow-auto p-5">
      {Object.entries(pages).map(([K, V]) => (
        <div className="flex h-fit w-full flex-col gap-1">
          <div className="mb-1 text-xs font-bold text-black/30 lg:text-sm" children={K} />
          {V.map((item) => (
            <Link
              children={item.title}
              to={item.title.toLowerCase().replaceAll(" ", "-")}
              className={
                "flex h-fit w-full cursor-pointer items-center rounded-sm py-1 pl-5 text-xs font-medium text-nowrap transition-all hover:scale-104 active:scale-98 " +
                (location.pathname.endsWith(item.title.toLowerCase().replaceAll(" ", "-")) ? "bg-black/7" : "hover:bg-black/4")
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
});
