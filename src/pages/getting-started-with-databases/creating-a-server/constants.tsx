/** @format */

import { InlineCode } from "../../../components/CodeBlock";

export const serverSetup = {
  codes: {
    setup:
      `import { DatabaseServer } from "@xenodb/server";\n` +
      `\n` +
      `const options = { port: 3443, passphrase: "your-secret-passphrase" }\n` +
      `const server = new DatabaseServer(options);\n` +
      `const port = await server.boot();\n` +
      `\n` +
      `console.log(\`Server listening on port \${port}\`); // Useful when binding to port 0\n`,
  },
  constructorOptions: [
    {
      signature: "port: number;",
      description: "Port for the server to listen on. Use 0 to let the operating system assign an available port.",
    },
    {
      signature: "passphrase: string;",
      description: "Authentication secret used to authorize incoming REST requests and WebSocket connections.",
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
      signature: "ssl?: type ServerSslConfig;",
      description: "Optional SSL/TLS configuration. When provided, enables secure HTTPS and WSS communication instead of HTTP and WS.",
    },
  ],
  sslOptions: [
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
  ],
  methods: [
    {
      signature: "boot()",
      description: "Initializes a HTTP/S gateway and returns a promise that resolves to the port that the server is listening on",
    },
  ],
};
