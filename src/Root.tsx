/** @format */

import { LuMenu } from "react-icons/lu";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { MobileSidebar } from "./components/sidebar/Mobile";
import { DesktopSidebar } from "./components/sidebar/Desktop";
import { memo, useLayoutEffect, useRef, useState } from "react";

export const Root = memo(() => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const viewPort = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const positions = useRef<Record<string, number>>({});

  useLayoutEffect(() => {
    const target = positions.current[pathname] || 0;
    viewPort.current?.scrollTo(0, target);
    setScrolled(target > 10);
  }, [pathname]);

  useLayoutEffect(() => {
    const VP = viewPort.current!;
    let raf = 0;
    const listener = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setScrolled((positions.current[pathname] = VP.scrollTop) > 10));
    };
    VP.addEventListener("scroll", listener, { passive: true });
    return () => (cancelAnimationFrame(raf), VP.removeEventListener("scroll", listener));
  }, [pathname]);

  const [theme, setTheme] = useState<"light" | "dark">(() => (localStorage.getItem("theme") !== "dark" ? "light" : "dark"));

  useLayoutEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList[theme === "dark" ? "add" : "remove"]("invert");
  }, [theme]);

  return (
    <div className="relative flex h-dvh w-dvw shrink-0 flex-row items-center justify-center overflow-hidden">
      <img
        className="absolute inset-0 h-full w-full opacity-8 blur-sm"
        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVhXX1V9WYPJjuQaXM31yf3BC9CpgjCJ7PIKNL8QUMU0YQzIkMnBiiOF0&s=10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgl3c92tILJ7_c42ZZ8587T222fCESSpDIzahdrf3qA&s=10"
        // src="https://img.magnific.com/free-vector/3d-abstract-circular-paper-layer-texture-graphic_107791-29331.jpg"
      />

      <DesktopSidebar theme={theme} setTheme={setTheme} />
      <MobileSidebar open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />

      <div ref={viewPort} className="relative h-full w-full scrollbar-none overflow-hidden overflow-y-auto lg:backdrop-blur-none">
        <AnimatePresence>
          {!open && (
            <motion.button
              children={<LuMenu />}
              onClick={() => setOpen(true)}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 100, y: -100 }}
              initial={{ opacity: 0, x: 100, y: -100 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed top-3 right-5 z-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] p-1 text-xl shadow-md shadow-black/50 transition-all active:scale-95 lg:hidden"
            />
          )}
        </AnimatePresence>

        <div className="shrink-0 px-3 pt-10 lg:px-10" children={<Outlet />} />

        <Footer />
      </div>

      <ScrollToTop scrolled={scrolled} viewPort={viewPort} />
    </div>
  );
});
