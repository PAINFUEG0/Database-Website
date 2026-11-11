/** @format */

import { memo, useState } from "react";
import { CodeBlock } from "../../../components/CodeBlock";
import { gettingStartedClientCode, gettingStartedServerCode } from "./constants";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

export const GettingStarted = memo(() => {
  const [selected, setSelected] = useState("npm");

  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Getting Started</h1>

      <p className="mb-5 text-sm font-semibold lg:mb-2">
        In this guide, you will learn how to create a database server and then, you will learn how to create a client that connects to your database
        server
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="This guide assumes that you already have " />
        <code className="rounded-md bg-gray-300 px-1.25 text-[#3F9640]" children={<span id="code" children="Node.Js" />} />
        <span children=" with " />
        <span className="rounded-md bg-gray-300 px-1.25" children="version &gt;= 22.19.0" />
        <span children=" and " />
        <code className="rounded-md bg-gray-300 px-1.25 text-red-500" children={<span id="code" children="npm" />} />
        <span children=" with " />
        <span className="rounded-md bg-gray-300 px-1.25" children="version &gt;= 11.0.0" />
        <span children=" installed on your system" />
      </p>

      <ul className="flex flex-col gap-5">
        <li>
          <p className="mb-2 align-middle text-sm font-medium">
            <TbCircleNumber1 className="mr-1 mb-0.5 inline text-xl" />
            <span>Start by installing the dependencies first.</span>
          </p>

          <div className="mt-5 mb-5 flex flex-row items-center gap-5 border-b border-black/20 px-5 pb-4">
            {["npm", "yarn", "pnpm"].map((_) => (
              <button
                children={_}
                onClick={() => setSelected(_)}
                id={selected === _ ? "code" : ""}
                style={{
                  opacity: selected === _ ? 1 : 0.5,
                  fontWeight: selected === _ ? 700 : undefined,
                  color: selected === _ ? (_ === "npm" ? "#CB0000" : _ === "yarn" ? "#2B8AB5" : "#F1A800") : undefined,
                }}
                className="w-7 cursor-pointer text-sm"
              />
            ))}
          </div>

          <CodeBlock showLineNumbers={false} code={`${selected} install @xenodb/server @xenodb/client`.trim()} className="mb-2" language="sh" />
        </li>

        <li>
          <p className="mb-5 align-middle text-sm font-medium">
            <TbCircleNumber2 className="mr-1 mb-0.5 inline text-xl" />
            <span>Create an instance of DatabaseServer and call the </span>
            <code className="rounded-md bg-gray-300 px-1">
              <span className="text-cyan-700">server</span>
              <span className="text-slate-600">.</span>
              <span className="text-red-600">boot</span>
              <span className="text-slate-600">()</span>
            </code>
            <span> method and wait for the promise to resolve before connecting to the server.</span>
          </p>
          <CodeBlock code={gettingStartedServerCode} />
        </li>

        <li>
          <p className="mb-5 align-middle text-sm font-medium">
            <TbCircleNumber3 className="mr-1 mb-0.5 inline text-xl" />
            <span>Create an instance of DatabaseClient and call the </span>
            <code className="rounded-md bg-gray-300 px-1">
              <span className="text-cyan-700">client</span>
              <span className="text-slate-600">.</span>
              <span className="text-red-600">connect</span>
              <span className="text-slate-600">()</span>
            </code>
            <span> method and wait for the promise to resolve before creating databases.</span>
          </p>

          <CodeBlock code={gettingStartedClientCode} />
        </li>
      </ul>
    </main>
  );
});

GettingStarted.displayName = "GettingStarted";
