/** @format */

import { memo } from "react";
import { CgNpm } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaGithub, FaDiscord } from "react-icons/fa";

export const Tail = memo(({ theme, setTheme }: { theme: "light" | "dark"; setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">> }) => {
  return (
    <div className="flex h-fit w-full flex-row items-center justify-between gap-3 p-5 opacity-85">
      <button
        children={theme === "dark" ? <FaSun /> : <FaMoon />}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="flex aspect-square h-full cursor-pointer rounded-full p-2 text-sm shadow-md shadow-black/50 transition-all active:scale-90 active:shadow-sm"
      />

      {[
        { icon: <FaGithub />, link: "" },
        { icon: <FaDiscord />, link: "" },
        { icon: <CgNpm />, link: "" },
        { icon: <CgNpm />, link: "" },
      ].map((_) => (
        <Link
          to={_.link}
          target="_blank"
          children={_.icon}
          className="flex aspect-square h-full cursor-pointer rounded-full p-2 text-sm shadow-md shadow-black/50 transition-all active:scale-90 active:shadow-sm"
        />
      ))}
    </div>
  );
});
