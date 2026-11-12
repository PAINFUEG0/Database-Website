/** @format */

import { database } from "./constants";
import { memo, useState } from "react";
import { List } from "../../../components/List";
import { VscSymbolClass } from "react-icons/vsc";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { CodeBlock, InlineCode } from "../../../components/CodeBlock";

export const Database = memo(() => {
  const [selected, setSelected] = useState<"Basic setup" | "Typed database" | "Schema validated database">("Basic setup");

  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolClass className="shrink-0 text-[#ff8800]" id="code" />
        <span>
          Database
          <span className="-mr-2 -ml-1 text-blue-300" id="code" children={<FaAngleLeft className="inline" />} />
          <span className="text-amber-600" id="code" children="T" />
          <span className="-ml-2 text-blue-300" id="code" children={<FaAngleRight className="inline" />} />
        </span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class Database" />} />
        <span children=" provides an interface for interacting with the data stored on the database server. It exposes asynchronous methods for basic as well as batch CRUD operations, along with specialized methods for manipulating arrays, booleans, and numbers." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="A database instance is created using " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.createDatabase()" />} />
        <span children=", which initializes a database instance at the specified path and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />
        <span children=". The returned promise resolves to an instance of the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class Database<T>" />} />
        <span children=". It also supports optional Zod schema validation and storage configuration during initialization." />
      </p>

      <div className="mb-5 flex flex-row items-center justify-end gap-0 border-b border-black/20 pb-2">
        {(["Basic setup", "Typed database", "Schema validated database"] as const).map((_) => (
          <button
            children={_}
            onClick={() => setSelected(_)}
            className={
              "cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-nowrap transition-all active:scale-95 " +
              (selected === _ ? "bg-gray-300 opacity-100" : "opacity-50")
            }
          />
        ))}
      </div>

      <CodeBlock filename="database.ts" code={database.codes.setup[selected]} className="mb-10 w-full" />

      <List type="method" iterable={database.creationMethods} title="Database Creation Methods" />
      <List
        type="option"
        iterable={database.databaseOptions}
        title={<span children={["Database Creation Options ( ", <InlineCode code="type DatabaseOptions" />, " )"]} />}
      />
      <List type="method" iterable={database.methods} title="Database Methods" />
    </main>
  );
});
