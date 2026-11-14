/** @format */

import { memo, useState } from "react";
import { List } from "../../../components/List";
import { VscSymbolClass } from "react-icons/vsc";
import { CodeBlock, InlineCode } from "../../../components/CodeBlock";
import { keyValueStore } from "./constants";

const Code = ({ code }: { code: string }) => <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code={code} />} />;

const setupCode = `
import { KeyValueStore } from "<package>";

const store = new KeyValueStore({ path: "./local-data/users" });

// Must be awaited before any other method is used
await store.init();

await store.set("user-1", { name: "Ada" });
const user = await store.get("user-1"); // { name: "Ada" }
`;

const overloadsCode = `
import z from "zod";
import { KeyValueStore } from "<package>";

/**
 * No run-time or compile-time validation.
 * Without a schema or generic, the store is a KeyValueStore<unknown>.
 */
const untyped = new KeyValueStore({ path: "./local-data/a" });

/**
 * Compile-time (type-level) validation only.
 * An explicit generic creates a KeyValueStore<User>.
 */
const typed = new KeyValueStore<User>({ path: "./local-data/b" });

/**
 * Run-time and compile-time validation.
 * The value type is inferred from the zod schema.
 */
const validated = new KeyValueStore({
  path: "./local-data/c",
  schema: z.array(z.number()),
}); // KeyValueStore<number[]>
`;

const layoutCode = `
local-data/users/
├── data_1.json            # up to keysPerFile keys
├── data_2.json
├── data_3.json
└── write-ahead-log.jsonl  # writes not yet flushed to the files above
`;

const options = [];

export const KeyValueStore = memo(() => {
  const [selected, setSelected] = useState<keyof typeof keyValueStore.codes.setup>("Basic");

  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolClass className="shrink-0 text-[#ff8800]" id="key-value-store" />
        <span>KeyValueStore</span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <Code code="KeyValueStore" />
        <span children=" is the storage engine behind " />
        <Code code="DatabaseServer" />
        <span children=". It keeps string keys mapped to JSON values, holds them in memory for fast reads, and persists them to a directory of JSON files on disk. It is also exported on its own, so you can use it directly inside a single process with no server, no network and no client. Use it when you want simple, durable local storage without running a database service." />
      </p>

      <p className="mb-5 text-sm font-semibold">
        <span children="Keys are spread across files as " />
        <Code code="data_1.json, data_2.json . . ." />
        <span children=" each holding up to " />
        <Code code="keysPerFile" />
        <span children=" keys. A write updates the in-memory copy and appends an entry to the write-ahead log. Changed files are then flushed together, after " />
        <Code code="debounceTime" />
        <span children=" ms or " />
        <Code code="maxDebounceCount" />
        <span children=" writes, whichever comes first. Each file is as a temporary file and renamed into place, so a file is never left half-written." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="Create the store with a " />
        <Code code="path" />
        <span children=" and call " />
        <Code code="init()" />
        <span children=". The promise must resolve before you call any other method, since " />
        <Code code="init()" />
        <span children=" creates the directory, loads existing data and replays the write-ahead log. Do not point two stores or two processes at the same directory." />
      </p>

      <div className="mb-5 flex flex-row items-center justify-end gap-0 border-b border-black/20 pb-2">
        {Object.keys(keyValueStore.codes.setup).map((_) => (
          <button
            children={_}
            onClick={() => setSelected(_ as keyof typeof keyValueStore.codes.setup)}
            className={
              "cursor-pointer rounded-md px-3 py-1 text-sm font-medium text-nowrap transition-all active:scale-95 " +
              (selected === _ ? "bg-gray-300 opacity-100" : "opacity-50")
            }
          />
        ))}
      </div>

      <CodeBlock filename="store.ts" code={keyValueStore.codes.setup[selected]} className="mb-10 w-full" />

      <List type="constructor" iterable={keyValueStore.constructorSignature} title="Construct signatures" />

      <List
        type="option"
        iterable={keyValueStore.storeOptions}
        title={<span children={["KeyValueStore configuration ( ", <InlineCode code="type KVstoreOptions" />, " )"]} />}
      />

      <List type="method" title="KeyValueStore methods " iterable={keyValueStore.methods} />
    </main>
  );
});

KeyValueStore.displayName = "KeyValueStorePage";
