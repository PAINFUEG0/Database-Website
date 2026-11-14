/** @format */

import { memo, useState } from "react";
import { keyValueStore } from "../constants/key-value-store.constants";
import { List } from "../components/List";
import { VscSymbolClass } from "react-icons/vsc";
import { CodeBlock, InlineCode } from "../components/CodeBlock";

export const KeyValueStore = memo(() => {
  const [selected, setSelected] = useState<keyof typeof keyValueStore.codes.setup>("Basic");

  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolClass className="shrink-0 text-[#ff8800]" id="code" />
        <span>KeyValueStore</span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="KeyValueStore" />} />
        <span children=" is the storage engine behind " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="DatabaseServer" />} />
        <span children=". It keeps string keys mapped to JSON values, holds them in memory for fast reads, and persists them to a directory of JSON files on disk. It is also exported on its own, so you can use it directly inside a single process with no server, no network and no client. Use it when you want simple, durable local storage without running a database service." />
      </p>

      <p className="mb-5 text-sm font-semibold">
        <span children="Keys are spread across files as " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="data_1.json, data_2.json . . ." />} />
        <span children=" each holding up to " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="keysPerFile" />} />
        <span children=" keys. A write updates the in-memory copy and appends an entry to the write-ahead log. Changed files are then flushed together, after " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="debounceTime" />} />
        <span children=" ms or " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="maxDebounceCount" />} />
        <span children=" writes, whichever comes first. Each file is as a temporary file and renamed into place, so a file is never left half-written." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="Create the store with a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="path" />} />
        <span children=" and call " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="init()" />} />
        <span children=". The promise must resolve before you call any other method, since " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="init()" />} />
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
