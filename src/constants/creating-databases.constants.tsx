/** @format */

export const database = {
  codes: {
    setup: {
      Basic:
        `import { DatabaseClient } from "@xenodb/client";\n` +
        `\n` +
        `const clientConfiguration = { host: "localhost", port: 3000, passphrase: "secret" }\n` +
        `const databaseConfiguration = { keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 }\n` +
        `\n` +
        `const client = new DatabaseClient(clientConfiguration);\n` +
        `await client.connect();\n` +
        `\n` +
        `// No data validation, for validation select 'Typed' or 'Validated' above\n` +
        `\n` +
        `const db = await client.createDatabase("users", databaseConfiguration); // Database<unknown>`,

      Typed:
        `import { DatabaseClient } from "@xenodb/client";\n` +
        `\n` +
        `const clientConfiguration = { host: "localhost", port: 3000, passphrase: "secret" }\n` +
        `const databaseConfiguration = { keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 }\n` +
        `\n` +
        `const client = new DatabaseClient(clientConfiguration);\n` +
        `await client.connect();\n` +
        `\n` +
        `// This way of usage provides type-level (compile-time) validation\n` +
        `\n` +
        `type T = { name: string; role: string; };\n` +
        `const db = await client.createDatabase<T>("users", databaseConfiguration); // Database<T>`,

      Validated:
        `import { z } from "zod";\n` +
        `import { DatabaseClient } from "@xenodb/client";\n` +
        `\n` +
        `const clientConfiguration = { host: "localhost", port: 3000, passphrase: "secret" }\n` +
        `const databaseConfiguration = { keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 }\n` +
        `\n` +
        `const client = new DatabaseClient(clientConfiguration);\n` +
        `await client.connect();\n` +
        `\n` +
        `// This way of usage provides type-level (compile-time) and server side schema based (run-time) validation\n` +
        `\n` +
        `const schema = z.object({ name: z.string(), role: z.string() });\n` +
        `const db = await client.createDatabase("users", { schema, ...databaseConfiguration }); // Database<z.infer<typeof schema>>`,
    },
  },
  creationMethods: [
    {
      signature: [
        "createDatabase<T = unknown>(path: string, options?: type DatabaseOptions): Promise<Database<T>>",
        "createDatabase<T extends z.ZodType>(path: string, options: type DatabaseOptions & { schema: T }): Promise<Database<z.infer<T>>>",
      ],
      description:
        "Creates and initializes a database instance with optional Zod schema validation and storage configuration. When a Zod schema is provided, the database automatically infers its data type from the schema and validates stored data against it. Alternatively, you can explicitly specify a TypeScript type using the generic parameter. If neither is provided, the database defaults to unknown. Returns a promise that resolves to a fully initialized Database instance.",
    },
  ],
  databaseOptions: [
    {
      signature: "schema?: z.ZodType;",
      description:
        "Zod schema used to validate database values and infer their TypeScript types. Required when using the Zod schema overload of createDatabase(). The schema is converted into JSON Schema and sent to the server during initialization. All data is then validated server-side.",
    },
    {
      signature: "keysPerFile?: number;",
      description: "Maximum number of keys stored in each shard file. Defaults to 100. Range 0 < keysPerFile < 4097.",
    },
    {
      signature: "debounceTime?: number;",
      description: "Delay in milliseconds before pending write operations are flushed to storage. Defaults to 250. Range 0 < debounceTime < 4097.",
    },
    {
      signature: "maxDebounceCount?: number;",
      description:
        "Maximum number of pending write operations before triggering an immediate storage flush. Defaults to 100. Range 0 < maxDebounceCount < 4097.",
    },
  ],
};
