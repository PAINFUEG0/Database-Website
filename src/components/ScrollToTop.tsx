/** @format */

import { memo, RefObject } from "react";
import { FaAngleUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

export const ScrollToTop = memo(({ viewPort, scrolled }: { viewPort: RefObject<HTMLDivElement | null>; scrolled: boolean }) => {
  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          children={<FaAngleUp />}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 100, y: 100 }}
          initial={{ opacity: 0, x: 100, y: 100 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onClick={() => viewPort.current?.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed right-3 bottom-3 z-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#fafafa] p-1.75 text-sm shadow-md shadow-black/50 transition-all active:scale-95"
        />
      )}
    </AnimatePresence>
  );
});
