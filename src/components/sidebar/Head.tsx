/** @format */

import { memo } from "react";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const SidebarHead = memo(({ setOpen }: { setOpen?: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="relative flex h-fit w-65 shrink-0 flex-col items-center justify-center gap-2 p-5 pb-0">
      <Link to="/" className="w-full cursor-pointer text-sm font-medium" children="Xeno" />
      <p className="w-full text-[0.70rem] leading-tight opacity-70">A simple JSON backed in-memory K-V store with disk persistence</p>
      <p className="w-full text-[0.70rem] leading-tight opacity-70">Latest : version 1.0.0</p>

      {setOpen && (
        <button
          children={<FaX />}
          onClick={() => setOpen(false)}
          className="absolute top-3 right-2 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-black/20 text-[8px] transition-all active:scale-95"
        />
      )}
    </div>
  );
});
