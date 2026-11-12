/** @format */

import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { InlineCode } from "./CodeBlock";
import { VscSymbolMethod, VscSymbolVariable } from "react-icons/vsc";

type Props = {
  title: ReactNode;
  className?: string;
  type: "method" | "option";
  iterable: { signature: string | string[]; description: ReactNode }[];
};

export const List = ({ iterable, title, className, type }: Props) => {
  const Icon =
    type === "method" ? (
      <VscSymbolMethod className="shrink-0 text-[#ff8800]" id="code" />
    ) : (
      <VscSymbolVariable className="shrink-0 text-[#ff8800]" id="code" />
    );

  return (
    <div
      className={twMerge("mb-10 flex h-full w-full flex-col overflow-hidden rounded-xl border border-black/20 shadow-md backdrop-blur-xl", className)}
    >
      <div className="border-b border-black/20 bg-black/5 p-3 text-xs font-medium opacity-80">{title}</div>

      {iterable.map((_) => (
        <li className="flex scrollbar-none flex-col gap-2 overflow-auto border-b border-black/20 px-5 py-5">
          {(Array.isArray(_.signature) ? _.signature : [_.signature]).map((signature, i) => (
            <span className={"flex flex-row items-center gap-2 " + (i !== 0 ? "-mt-2" : "")}>
              {Icon}
              <InlineCode code={signature} className="flex lg:mb-0.5" />
            </span>
          ))}
          <span className="text-[13px]" children={_.description} />
        </li>
      ))}
    </div>
  );
};
