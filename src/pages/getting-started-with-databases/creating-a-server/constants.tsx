/** @format */

import { InlineCode } from "../../../components/CodeBlock";

export const databaseServerOptions = [
  {
    signature: "port: number;",
    description: "Port on which the HTTP/HTTPS server listens. Use 0 to let the operating system assign an available port.",
  },
  {
    signature: "passphrase: string;",
    description: "Shared authentication secret used to authorize incoming REST requests and WebSocket connections through the Authorization header.",
  },
  {
    signature: "onStderr?: (err: string) => void;",
    description: [
      "Callback invoked to report database execution errors and connection errors. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="console.error()" />} />,
      ".",
    ],
  },
  {
    signature: "onStdout?: (data: string) => void;",
    description: [
      "Callback invoked for server status messages, endpoint information, and client connection events. Defaults to ",
      <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="console.log()" />} />,
      ".",
    ],
  },
  {
    signature: "ssl?: type SslConfig;",
    description: "Optional SSL/TLS configuration. When provided, enables secure HTTPS and WSS communication instead of HTTP and WS.",
  },
];

export const sslOptions = [
  {
    signature: "ssl.key: string;",
    description: "Path to the PEM-encoded private key file ( .key or .pem ) used by the server for TLS encryption and authentication.",
  },
  {
    signature: "ssl.cert: string;",
    description: "Path to the PEM-encoded SSL/TLS certificate file ( .crt or .pem ) containing the server's public key and identity information.",
  },
  {
    signature: "ssl.rejectUnauthorized?: boolean;",
    description: "Controls certificate verification. Set to false to allow self-signed certificates.",
  },
];

export const databaseServerSetupCode = `
import { DatabaseServer } from "@xenodb/server";

const options = { port: 3443, passphrase: "your-secret-passphrase" }
const server = new DatabaseServer(options);
const port = await server.boot();

console.log(\`Server listening on port \${port}\`); // Useful when binding to port 0
`;
