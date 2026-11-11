/** @format */

import { memo } from "react";
import { FaDotCircle } from "react-icons/fa";

const workingSteps = [
  {
    title: "Starting the Server",
    description:
      "A DatabaseServer instance is created with a port, authentication passphrase, and optional SSL configuration. Its options are validated using Zod, and SSL credentials are loaded if provided. When boot() is called, the server starts an HTTP or HTTPS server and attaches a WebSocket server to it, making both communication protocols available through a single server.",
  },
  {
    title: "Connecting to the Database",
    description:
      "Clients communicate with the server through either REST or WebSocket endpoints. Every connection is authenticated using the configured passphrase, ensuring that only clients with valid credentials can access the database.",
  },
  {
    title: "Initializing a Database",
    description:
      "Before performing database operations, a client sends an INIT request containing a database path and storage options. The server validates and normalizes the path, resolves it inside its storage directory, and creates a KeyValueStore instance. The store initializes its storage, restores existing data, and registers itself in the server's database registry.",
  },
  {
    title: "Routing Incoming Requests",
    description:
      "Once a database is initialized, clients can send requests specifying a database path, an operation, and the required parameters. The server uses the database path to locate the corresponding KeyValueStore and determines which operation needs to be executed.",
  },
  {
    title: "Executing Database Operations",
    description:
      "The server maintains a centralized collection of supported database actions. Each request is dispatched to its corresponding KeyValueStore method, allowing clients to perform operations such as reading, writing, deleting, checking keys, modifying arrays, and incrementing or decrementing values. Both REST and WebSocket requests use the same action handlers.",
  },
  {
    title: "Returning Results",
    description:
      "After an operation completes, the server serializes its result into JSON and sends it back to the client. REST responses contain the result under a data property, while WebSocket responses also include the original request ID so clients can match responses with their requests.",
  },
  {
    title: "Handling Errors and Logging",
    description:
      "If authentication, database lookup, or an operation fails, the server handles the error and returns an appropriate response to the client. Errors and connection events are reported through configurable stdout and stderr callbacks, allowing applications to customize server logging.",
  },
  {
    title: "Keeping the Server Available",
    description:
      "The server continues accepting REST requests and WebSocket messages while the underlying KeyValueStore manages data in memory and persists changes to disk. This separates network communication from storage management, allowing clients to interact with the database without directly accessing its files.",
  },
];

export const WorkingOfDatabaseClient = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How does Database Server work ?</h1>

      <p className="mb-8 text-sm leading-6 font-medium opacity-80">
        DatabaseServer provides a network interface for accessing KeyValueStore instances through REST and WebSocket connections. It handles client
        authentication, database initialization, request routing, and response handling, allowing multiple clients to perform database operations
        remotely through a single server.
      </p>

      <ul className="mb-8 flex flex-col gap-5">
        {workingSteps.map(({ title, description }) => (
          <li key={title} className="flex flex-col text-sm">
            <span>
              <FaDotCircle className="inline text-[5px]" />
              <span className="ml-2 font-semibold">{title}</span>
            </span>
            <span className="opacity ml-7">{description}</span>
          </li>
        ))}
      </ul>
    </main>
  );
});
