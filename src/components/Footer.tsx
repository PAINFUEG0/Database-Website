/** @format */

import { memo } from "react";
import { allPages } from "../pageMappings";
import { useLocation, Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Footer = memo(() => {
  const { pathname } = useLocation();
  const index = allPages.findIndex((page) => page.path === pathname);

  const next = allPages[index + 1];
  const previous = allPages[index - 1];

  return (
    <footer className="flex h-fit w-full flex-row items-center justify-end gap-2 px-7 py-10 lg:gap-5 lg:px-20">
      {previous && (
        <Link to={previous.path} className="flex flex-row items-center gap-2 opacity-50 transition-all hover:opacity-100">
          <FaArrowLeft className="text-xs" />
          <span className="text-xs font-medium">{previous.title}</span>
        </Link>
      )}

      {previous && <span className="text-sm font-medium opacity-30">|</span>}

      {next && (
        <Link to={next.path} className="flex flex-row items-center gap-2 opacity-50 transition-all hover:opacity-100">
          <span className="text-xs font-medium">{next.title}</span>
          <FaArrowRight className="text-xs" />
        </Link>
      )}
    </footer>
  );
});
