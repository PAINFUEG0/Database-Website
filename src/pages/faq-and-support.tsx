/** @format */

import { memo } from "react";
import { motion } from "framer-motion";
import { VscSymbolKeyword } from "react-icons/vsc";
import { QA } from "../constants/faq-and-support.constants";

export const FaqAndSupport = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolKeyword className="shrink-0 text-[#ff8800]" id="code" />
        <span>Frequently Asked Questions</span>
      </h1>

      <div className="flex flex-col gap-5">
        {QA.map(({ Q, A }, i) => (
          <div className="flex h-fit cursor-pointer flex-col gap-1">
            <h2 className="font-semibold">
              <span className="inline-block w-10 text-center">{i + 1}. </span>
              <span>{Q}</span>
            </h2>
            <motion.p children={A} className="ml-12 h-fit overflow-hidden text-sm leading-relaxed font-medium opacity-80" />
          </div>
        ))}
      </div>
    </main>
  );
});
