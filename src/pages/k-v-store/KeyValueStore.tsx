/** @format */

import { memo } from "react";
import { FaDotCircle } from "react-icons/fa";
import { CodeBlock } from "../../components/CodeBlock";

const standaloneCode = `
import { KeyValueStore } from "<package>";

const store = new KeyValueStore({ path: "./local-data/users" }); 
await store.init();

await store.set("user-1", { name: "Ada" });
const user = await store.get("user-1");
`;

const overloadsCode = `
import z from "zod";
import { KeyValueStore } from "<package>";

/**
 * No run-time or compile-time (type-level) validations
 * Without a schema or explicit generic, the store defaults to KeyValueStore<unknown>.
 */
const store = new KeyValueStore({ path: "./local-data/users" });

/**
 * No run-time validation only compile-time (type-level) validations
 * Providing an explicit generic type creates a KeyValueStore<T>.
 */
const store = new KeyValueStore<T>({ path: "./local-data/users" });

/**
 * Both run-time and compile-time (type-level) validations
 * Providing a Zod schema automatically infers the store's value type from the schema.
 */
const store = new KeyValueStore({ path: "./local-data/users", schema: z.array(z.number()) }); // KeyValueStore<number[]>
`;

const optionsCode = `
type KVstoreOptions<S = unknown> = {
    path: string; // Directory path where data is stored

    keysPerFile?: number; // Default: 100. Range: 1 - 4096.
    debounceTime?: number; // Default: 250 ms. Range: 1 - 4096.
    maxDebounceCount?: number; // Default: 100. Range: 1 - 4096.

    schema?: S; // zod schema for type inference and run-time data validation
};
`;

export const KeyValueStore = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Key-Value Store</h1>

      <ul className="mb-8 flex flex-col gap-2">
        <li className="text-sm font-medium">
          <FaDotCircle className="inline text-[5px]" />
          <span className="ml-2 rounded-md bg-gray-300 px-1 font-mono">KeyValueStore</span>
          <span className="ml-1">is the core storage engine used by</span>
          <span className="ml-1 rounded-md bg-gray-300 px-1 font-mono">DatabaseServer</span>
          <span className="ml-1">and is also exported for direct local usage without a network layer.</span>
          <span>.</span>
        </li>
      </ul>

      <CodeBlock filename="store.ts" code={standaloneCode.trim()} className="mb-10 w-full" />
      <CodeBlock filename="Store creation overloads" code={overloadsCode.trim()} className="mb-10 w-full" />
      <CodeBlock filename="Key-Value store options" code={optionsCode.trim()} className="mb-10 w-full" />
    </main>
  );
});

KeyValueStore.displayName = "KeyValueStorePage";
