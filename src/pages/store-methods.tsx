/** @format */

import { memo } from "react";
import { FaDotCircle } from "react-icons/fa";
import { List } from "../components/List";
import { LuCircleAlert } from "react-icons/lu";
import { coreMethods, arrayMethods, numericMethods, booleanMethods } from "../constants/database-operations.constants";

const lifecycleMethods = [
  {
    signature: "init(): Promise<this>",
    description: [
      <p>Initializes the store, loads existing data from disk & recovers unfinished WAL operations"</p>,
      <p id="code" className="mt-2 rounded-md border-2 border-orange-600/30 bg-amber-400/15 px-2 py-1 text-orange-500">
        <LuCircleAlert className="mr-1 mb-0.5 inline" />
        Must be called and awaited before performing any database operation/s
      </p>,
    ],
  },
];

export const KeyValueStoreMethods = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Key-Value Store</h1>

      <ul className="mb-8 flex flex-col gap-2">
        <li className="text-sm font-medium">
          <FaDotCircle className="inline text-[5px]" />
          <span className="ml-2">KeyValueStore implements the same data manipulation methods as the client Database instance.</span>
        </li>
      </ul>

      <List iterable={lifecycleMethods} title="Lifecycle methods" type="method" />
      <List iterable={coreMethods} title="Core CRUD Operations methods" type="method" />
      <List iterable={arrayMethods} title="Array specific methods" type="method" />
      <List iterable={numericMethods} title="Number specific methods" type="method" />
      <List iterable={booleanMethods} title="Boolean specific methods" type="method" />

      {/* <p className="mb-8 text-xs leading-5 opacity-70">
        Note: Array operations require the stored value to be an array. A missing key is treated as an empty array. Mutating operations update the
        value through set(), while length() and slice() only read it.
      </p> */}
    </main>
  );
});

KeyValueStoreMethods.displayName = "KeyValueStorePage";
