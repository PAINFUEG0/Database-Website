/** @format */

import { InlineCode } from "../components/CodeBlock";

export const databaseClient = {
  codes: {
    setup:
      `import { DatabaseClient } from "@xenodb/client";\n` +
      `\n` +
      `const options = { port: 3000, host: "localhost", passphrase: "your-secret-passphrase" }\n` +
      `const client = new DatabaseClient(options);\n` +
      `await client.connect();\n` +
      `\n` +
      `console.log("Connection established ! Ready to create databases");`,
  },
  constructorSignature: [
    {
      signature: "new DatabaseClient(options: type DatabaseClientOptions): DatabaseClient",
      description:
        "Creates a DatabaseClient instance for the server at the given host and port. The options are validated immediately and an error is thrown if any of them is invalid, including a host that contains a protocol such as http://. The request mode defaults to 'ws'. throwOnError is enabled unless onError is provided, and throwOnDisconnect is enabled unless onDisconnect is provided. No connection is made yet. In WebSocket mode, call connect() before creating databases. Returns an unconnected DatabaseClient instance.",
    },
  ],
  databaseClientOptions: [
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
  ],
  sslOptions: [
    {
      signature: "ssl.enabled: boolean;",
      description: "Enables or disables SSL/TLS encryption. When true, uses WSS for WebSocket connections or HTTPS for REST requests.",
    },
    {
      signature: "ssl.rejectUnauthorized?: boolean;",
      description: "Controls server certificate verification. Set to false to allow self-signed or otherwise untrusted certificates.",
    },
  ],
  methods: [
    {
      signature: "connect()",
      description: [
        "When using ",
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code='"ws"' />} />,
        " transport, establishes a WebSocket connection to the database server and returns a ",
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<DatabaseClient>" />} />,
        " that resolves once the connection is open. Does nothing in case of ",
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code='"rest"' />} />,
        ".",
      ],
    },
    {
      signature: "createDatabase<T>(path: string, options?: type DatabaseOptions)",
      description: [
        "Creates and initializes a typed database at the specified path and returns a ",
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />,
        " that resolves to a Database instance of type T.",
      ],
    },
  ],
};
