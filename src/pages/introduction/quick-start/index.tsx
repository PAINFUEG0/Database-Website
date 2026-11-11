/** @format */

import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { gettingStarted } from "./constants";
import { CodeBlock, InlineCode } from "../../../components/CodeBlock";
import { TbCircleNumber1, TbCircleNumber2, TbCircleNumber3 } from "react-icons/tb";

export const QuickStart = memo(() => {
  const [selected, setSelected] = useState("npm");

  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Quick Start</h1>

      <p className="mb-5 text-sm font-semibold">
        <span>Xeno follows a client-server architecture but, also provides a</span>
        <Link
          id="code"
          to="/introduction-and-setup"
          children="standalone storage engine"
          className="mx-1 text-blue-500 underline-offset-3 hover:underline"
        />
        <span>for local data storage without a network connection.</span>
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span>
          In this guide, you will learn how to create a database server and then, you will learn how to create a client that connects to your database
          server for CRUD operations. This guide assumes that you already have
        </span>
        <code className="mx-1 rounded-md bg-gray-300 px-1.25 text-[#3F9640]" children={<span id="code" children="Node.Js" />} />
        <span children="with" />
        <span className="mx-1 rounded-md bg-gray-300 px-1.25" children="version &gt;= 22.19.0" />
        <span children="and" />
        <code className="mx-1 rounded-md bg-gray-300 px-1.25 text-red-500" children={<span id="code" children="npm" />} />
        <span children="with" />
        <span className="mx-1 rounded-md bg-gray-300 px-1.25" children="version &gt;= 10.9.3" />
        <span children="installed on your system." />
      </p>

      <ul className="flex flex-col gap-5">
        <li>
          <p className="mb-2 align-middle text-sm leading-relaxed font-medium">
            <TbCircleNumber1 className="mr-1 mb-0.5 inline text-xl" />
            <span>Start by installing the dependencies first.</span>
          </p>

          <div className="mt-5 mb-5 flex flex-row items-center gap-5 border-b border-black/20 px-5 pb-4">
            {["npm", "yarn", "pnpm"].map((_) => (
              <button
                children={_}
                onClick={() => setSelected(_)}
                id={selected === _ ? "code" : ""}
                className="w-7 cursor-pointer text-sm"
                style={{
                  opacity: selected === _ ? 1 : 0.5,
                  fontWeight: selected === _ ? 700 : undefined,
                  color: selected === _ ? (_ === "npm" ? "#CB0000" : _ === "yarn" ? "#2B8AB5" : "#F1A800") : undefined,
                }}
              />
            ))}
          </div>

          <CodeBlock showLineNumbers={false} code={`${selected} install @xenodb/server @xenodb/client`.trim()} language="sh" />
        </li>

        <li>
          <p className="mb-5 align-middle text-sm leading-relaxed font-medium">
            <TbCircleNumber2 className="mr-1 mb-0.5 inline text-xl" />
            <span>Create an instance of DatabaseServer and call the </span>
            <code className="rounded-md bg-gray-300 px-1" children={<InlineCode code="server.boot()" />} />
            <span> method and wait for the promise to resolve.</span>
          </p>
          <CodeBlock code={gettingStarted.codes.server} />
        </li>

        <li>
          <p className="mb-5 align-middle text-sm leading-relaxed font-medium">
            <TbCircleNumber3 className="mr-1 mb-0.5 inline text-xl" />
            <span>Create an instance of DatabaseClient and call the </span>
            <code className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.connect()" />} />
            <span> method. Once the client establishes a connection and the promise resolves, use the </span>
            <code className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.createDatabase()" />} />
            <span> method to create database instances for operations.</span>
          </p>
          <CodeBlock code={gettingStarted.codes.client} />
        </li>
      </ul>
    </main>
  );
});
