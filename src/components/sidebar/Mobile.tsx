/** @format */

import { Tail } from "./Tail";
import { SidebarHead } from "./Head";
import { SidebarBody } from "./Body";
import { motion } from "framer-motion";
import React, { memo, useEffect, useRef } from "react";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  theme: "light" | "dark";
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const MobileSidebar = memo(({ open, setOpen, theme, setTheme }: Props) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handlePointerDown = (e: PointerEvent) => menuRef?.current && !menuRef.current.contains(e.target as Node) && setOpen(false);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <motion.div
      ref={menuRef}
      initial={false}
      animate={{ width: open ? "calc(var(--spacing) * 65)" : "calc(var(--spacing) * 0)" }}
      className="absolute inset-0 z-10 flex h-full shrink-0 scrollbar-none flex-col gap-2 overflow-x-hidden overflow-y-auto bg-white/70 shadow-2xl backdrop-blur-3xl lg:hidden"
    >
      <SidebarHead setOpen={setOpen} />
      <SidebarBody />
      <Tail theme={theme} setTheme={setTheme} />
    </motion.div>
  );
});
