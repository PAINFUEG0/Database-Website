/** @format */

import { LuCircleAlert } from "react-icons/lu";
import { InlineCode } from "../components/CodeBlock";

export const keyValueStore = {
  /** @format */

  codes: {
    setup: {
      Basic:
        `import { KeyValueStore } from "@xenodb/server";\n` +
        `\n` +
        `const path = path: "./local-data/users";\n` +
        `const storeConfiguration = { path, keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 };\n` +
        `\n` +
        `// No data validation, for validation select 'Typed' or 'Validated' above\n` +
        `\n` +
        `const store = new KeyValueStore(storeConfiguration); // KeyValueStore<unknown>\n` +
        `await store.init(); // must resolve before using any other method\n` +
        `\n` +
        `await store.set("user-1", { name: "Ada", role: "admin" });\n` +
        `const user = await store.get("user-1");`,

      Typed:
        `import { KeyValueStore } from "@xenodb/server";\n` +
        `\n` +
        `const path = path: "./local-data/users";\n` +
        `const storeConfiguration = { path, keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 };\n` +
        `\n` +
        `// This way of usage provides type-level (compile-time) validation only\n` +
        `\n` +
        `type T = { name: string; role: string };\n` +
        `const store = new KeyValueStore<T>(storeConfiguration); // KeyValueStore<T>\n` +
        `await store.init();\n` +
        `\n` +
        `await store.set("user-1", { name: "Ada", role: "admin" });\n` +
        `const user = await store.get("user-1"); // T | null`,

      Validated:
        `import { z } from "zod";\n` +
        `import { KeyValueStore } from "@xenodb/server";\n` +
        `\n` +
        `const path = path: "./local-data/users";\n` +
        `const storeConfiguration = { path, keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 };\n` +
        `\n` +
        `// This way of usage provides type-level (compile-time) and schema based (run-time) validation\n` +
        `\n` +
        `const schema = z.object({ name: z.string(), role: z.string() });\n` +
        `const store = new KeyValueStore({ ...storeConfiguration, schema }); // KeyValueStore<z.infer<typeof schema>>\n` +
        `await store.init();\n` +
        `\n` +
        `await store.set("user-1", { name: "Ada", role: "admin" });\n` +
        `await store.set("user-2", { name: "Bob" }); // throws: 'role' is required`,
    },
  },
  constructorSignature: [
    {
      signature: [
        "new KeyValueStore<T = unknown>(options: type KVstoreOptions): KeyValueStore<T>",
        "new KeyValueStore<T extends z.ZodType>(options: type KVstoreOptions & { schema: T }): KeyValueStore<z.infer<T>>",
      ],
      description:
        "Creates a KeyValueStore instance with optional Zod schema validation and storage configuration. When a Zod schema is provided, the KeyValueStore automatically infers its data type from the schema and validates stored data against it. Alternatively, you can explicitly specify a TypeScript type using the generic parameter. If neither is provided, the database defaults to unknown. Returns an uninitialized KeyValueStore instance.",
    },
  ],
  methods: [
    {
      signature: "init(): Promise<this>",
      description: [
        <p>
          Prepares the store for use and returns the store instance. It creates the storage directory if it does not exist, loads every existing data
          file into memory, and replays the write-ahead log so writes that were never flushed before a crash or shutdown are recovered. Once the
          returned promise resolves, the store is ready and every other method can be used.
        </p>,
        <p className="mt-2">
          Call it once per store. Unlike the client's <InlineCode code="Database.init()" />, it has no guard against repeated calls, so calling it
          again reloads the data from disk and reopens the log. It rejects if the directory cannot be read or created, or if a data file or the
          write-ahead log contains invalid JSON.
        </p>,
        <p id="code" className="mt-4 rounded-md border-2 border-orange-600/30 bg-amber-400/15 px-2 py-1 text-orange-500">
          <LuCircleAlert className="mr-1 mb-0.5 inline" />
          <span>Must call and </span>
          <span className="rounded-md bg-gray-400/50 px-1" id="code" children={<InlineCode code="await" />} />
          <span> for it to resolve before calling any other method. When the store runs inside </span>
          <span className="rounded-md bg-gray-400/50 px-1" id="code" children={<InlineCode code="DatabaseServer" />} />
          <span>, the server calls it for you.</span>
        </p>,
      ],
    },
  ],
  storeOptions: [
    {
      signature: "path: string",
      description: "Directory where the store keeps its files. It is created if it does not exist",
    },
    {
      signature: "keysPerFile?: number;",
      description: "Maximum number of keys stored in each shard file. Defaults to 100.",
    },
    {
      signature: "debounceTime?: number;",
      description: "Delay in milliseconds before pending write operations are flushed to storage. Defaults to 250.",
    },
    {
      signature: "maxDebounceCount?: number;",
      description: "Maximum number of pending write operations before triggering an immediate storage flush. Defaults to 100.",
    },
    {
      signature: "schema?: z.ZodType;",
      description:
        "Zod schema used to validate database values and infer their TypeScript types. Required when using the Zod schema overload of createDatabase(). The schema is converted into JSON Schema and sent to the server during initialization. All data is then validated server-side.",
    },
  ],
};
