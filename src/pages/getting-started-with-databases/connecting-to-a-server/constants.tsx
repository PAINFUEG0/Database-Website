/** @format */

import { LuCircleAlert } from "react-icons/lu";
import { InlineCode } from "../../../components/CodeBlock";
export const databaseClientOptions = [
  {
    signature: "host: string;",
    description: "Hostname or IP address of the database server. Must not include the HTTP or HTTPS protocol.",
  },
  {
    signature: "port: number;",
    description: "Port on which the database server is listening.",
  },
  {
    signature: "passphrase: string;",
    description: "Shared authentication secret used to authorize REST requests and WebSocket connections through the Authorization header.",
  },
  {
    signature: 'mode?: "ws" | "rest";',
    description: [
      "Communication mode used to interact with the database server. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code='"ws"' />} />,
      " i.e, websocket connection mode.",
    ],
  },
  {
    signature: "throwOnError?: boolean;",
    description: [
      "Controls whether client errors are thrown or passed to the ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="onError" />} />,
      " callback. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="true" />} />,
      " when ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="onError" />} />,
      " is not provided; but when the callback is provided it defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="false" />} />,
      ".",
    ],
  },
  {
    signature: "throwOnDisconnect?: boolean;",
    description: [
      "Controls whether server disconnection errors are thrown or passed to the ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="onDisconnect" />} />,
      " callback. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="true" />} />,
      " when ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="onDisconnect" />} />,
      " is not provided; but when the callback is provided it defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="false" />} />,
      ".",
    ],
  },
  {
    signature: "onError?: (err: Error) => void;",
    description: [
      "Callback invoked when an error occurs. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="console.error()" />} />,
      ".",
    ],
  },
  {
    signature: "onDisconnect?: (address: string) => void;",
    description: [
      "Callback invoked when the WebSocket connection to the database server is closed. Receives the server address. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="console.error()" />} />,
      ".",
    ],
  },
  {
    signature: "ssl?: type SslConfig;",
    description: "Optional SSL/TLS configuration. When provided, enables secure HTTPS and WSS communication instead of HTTP and WS.",
  },
];

export const clientSslOptions = [
  {
    signature: "ssl.enabled: boolean;",
    description: "Enables or disables SSL/TLS encryption. When true, uses WSS for WebSocket connections or HTTPS for REST requests.",
  },
  {
    signature: "ssl.rejectUnauthorized?: boolean;",
    description: "Controls server certificate verification. Set to false to allow self-signed or otherwise untrusted certificates.",
  },
];

export const databaseClientSetupCode = `
import { DatabaseClient } from "@xenodb/client";

const options = { port: 3000, host: "0.0.0.0", passphrase: "your-secret-passphrase" }
const client = new DatabaseClient(options);
await client.connect();

console.log("Connection established ! Ready to create databases");
`;

/////////////////////////////////////////////////

/** @format */

export const databaseSetupCode = `
import { z } from "zod";
import { DatabaseClient } from "<package>";

const options = { keysPerFile: 100, debounceTime: 250, maxDebounceCount: 100 }

const client = new DatabaseClient({ host: "localhost", port: 3000, passphrase: "secret" });
await client.connect();

const db = await client.createDatabase("users", options); // Without additional options

type User = { name: string; role: string; };
const typedDb = await client.createDatabase<User>("typed-users", options); // With a custom TypeScript type

const userSchema = z.object({ name: z.string(), role: z.string() });
const schemaDb = await client.createDatabase("schema-users", { schema: userSchema, ...options }); // With a Zod schema

`;

export const databaseCreationMethods = [
  {
    signature: "createDatabase<T = unknown>(path: string, options?: type DatabaseOptions): Promise<Database<T>>",
    description:
      "Creates and initializes a database with a custom TypeScript value type. Accepts optional storage configuration and returns a promise that resolves to a Database instance of type T.",
  },
  {
    signature: "createDatabase<T extends z.ZodType>(path: string, options: type DatabaseOptionsWithSchema): Promise<Database<z.infer<T>>>",
    description:
      "Creates and initializes a database using a Zod schema for data validation and type inference. Requires a schema property and optionally accepts storage configuration. Returns a promise that resolves to a Database instance with values inferred from the supplied schema.",
  },
];

export const databaseOptions = [
  {
    signature: "schema?: z.ZodType;",
    description:
      "Zod schema used to validate database values and infer their TypeScript types. Required when using the Zod schema overload of createDatabase(). The schema is converted into JSON Schema and sent to the server during initialization.",
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
];

export const databaseMethods = [
  {
    signature: "database.init(options?)",
    description: [
      <p>
        Initializes the database by sending an initialization request to the server with the storage configuration and optional JSON Schema. Returns
        the database instance. If already initialized, returns the existing instance without initializing it again.
      </p>,
      <p id="code" className="mt-2 rounded-md border-2 border-orange-600/30 bg-amber-400/15 px-2 py-1 text-orange-500">
        <LuCircleAlert className="mr-1 mb-0.5 inline" />
        <span>Auto called and awaited when </span>
        <span className="rounded-md bg-gray-300/40 px-1" children={<InlineCode code="client.createDatabase( . . . )" />} />
        <span> is invoked.</span>
      </p>,
    ],
    // "",
  },
];
