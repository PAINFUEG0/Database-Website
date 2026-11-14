/** @format */

import { memo } from "react";
import { LuCircleAlert } from "react-icons/lu";
import { VscSymbolMethod } from "react-icons/vsc";
import { List } from "../components/List";
import { InlineCode } from "../components/CodeBlock";
import { coreMethods, batchMethods, arrayMethods, numericMethods, booleanMethods } from "../constants/database-operations.constants";

export const DatabaseOperations = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolMethod className="shrink-0 text-[#ff8800]" id="code" />
        <span>Database Methods</span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class Database<T>" />} />
        <span children=" provides an interface for interacting with the data stored on the database server. It exposes asynchronous methods for basic as well as batch CRUD operations, along with specialized methods for manipulating arrays, booleans, and numbers." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class Database<T>" />} />
        <span children=" implements the same data manipulation methods as the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class KeyValueStore<T>" />} />
        <span children=". If the existing value for a key does not satisfy the type constraints for the specialized type specific method, an " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Error" />} />
        <span children=" will be thrown." />
      </p>

      <List
        type="method"
        iterable={[
          {
            signature: "init(options?: type Omit<DatabaseOptions,'schema'>)",
            description: [
              <p>
                Initializes the database by sending an initialization request to the server with the storage configuration and optional JSON Schema.
                Returns the database instance. If already initialized, returns the existing instance without initializing it again.
              </p>,
              <p id="code" className="mt-2 rounded-md border-2 border-orange-600/30 bg-amber-400/15 px-2 py-1 text-orange-500">
                <LuCircleAlert className="mr-1 mb-0.5 inline" />
                <span>Auto called and awaited when </span>
                <span className="rounded-md bg-gray-400/50 px-1" id="code" children={<InlineCode code="client.createDatabase( . . . )" />} />
                <span> is invoked.</span>
              </p>,
            ],
          },
        ]}
        title="Lifecycle Methods"
      />

      <List iterable={coreMethods} title="Basic CRUD Operation Methods" type="method" />
      <List iterable={batchMethods} title="Batch CRUD Operation Methods" type="method" />
      <List iterable={arrayMethods} title="Array Specific Methods" type="method" />
      <List iterable={numericMethods} title="Number Specific Methods" type="method" />
      <List iterable={booleanMethods} title="Boolean Specific Methods" type="method" />
    </main>
  );
});
