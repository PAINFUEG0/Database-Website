/** @format */

import { memo } from "react";
import { FaDotCircle } from "react-icons/fa";

const workingSteps = [
  {
    title: "Initialization",
    description:
      "When a DatabaseClient instance is created, the provided options are validated using Zod. The client requires a host, port, and passphrase, while SSL settings, communication mode, and error-handling callbacks are optional. It initializes the HTTP dispatcher, configures error handling, and prepares the server address based on the selected communication mode.",
  },
  {
    title: "Configuring Communication",
    description:
      "The client supports two communication modes: WebSocket (ws) and REST. WebSocket is the default mode and uses a persistent connection for sending multiple requests. REST uses individual HTTP POST requests for database operations. The server address is automatically constructed using the host, port, selected mode, and SSL configuration.",
  },
  {
    title: "Establishing Connection",
    description:
      "When connect() is called in WebSocket mode, the client creates a WebSocket connection to the database server and sends the passphrase through the Authorization header. It waits until the connection is successfully opened before registering message, error, and close event listeners. Once connected, the client instance is returned and is ready to create databases and perform operations.",
  },
  {
    title: "Creating a Database",
    description:
      "When createDatabase() is called, the provided database path is normalized by trimming whitespace, replacing backslashes, and removing unnecessary trailing slashes. The client checks whether the path has already been initialized. In WebSocket mode, it also ensures that the connection is open before proceeding.",
  },
  {
    title: "Initializing the Database on Server",
    description:
      "The client sends an INIT request containing the database path, optional Zod schema converted into JSON Schema, and storage configuration options such as keysPerFile, debounceTime, and maxDebounceCount. The server validates the path, creates or initializes the corresponding KeyValueStore, loads its existing data, and prepares it for operations. After successful initialization, the path is added to the client's registered paths.",
  },
  {
    title: "Creating a Database Instance",
    description:
      "After successful initialization, createDatabase() returns a Database instance associated with the initialized path. This instance contains methods such as get(), set(), delete(), has(), and their batch equivalents. Each method uses the request function associated with that database path, allowing multiple databases to be accessed independently through the same client.",
  },
  {
    title: "Preparing Database Requests",
    description:
      "Whenever a Database method is called, it creates a request payload containing the operation name and its required arguments. For example, get() sends a GET request with a key, while set() sends a SET request with a key and value. The request is passed to the communication handler configured for the selected mode.",
  },
  {
    title: "Sending Requests Through WebSocket",
    description:
      "In WebSocket mode, the client generates a unique requestId using randomUUID() and creates a Promise associated with that ID. The request, database path, and requestId are serialized into JSON and sent through the existing WebSocket connection. A 60-second timeout is assigned to every request to prevent it from waiting indefinitely.",
  },
  {
    title: "Handling WebSocket Responses",
    description:
      "When a message arrives from the server, the client parses the response and uses its requestId to locate the corresponding pending request in the requests Map. It clears the timeout, removes the request from the Map, and resolves the Promise with the returned data. If the response contains an error, the Promise is rejected with that error instead.",
  },
  {
    title: "Sending Requests Through REST",
    description:
      "In REST mode, each database operation is sent as an HTTP POST request using fetch(). The request body contains the operation payload and database path, while the Content-Type and Authorization headers specify JSON data and the shared passphrase. An HTTP dispatcher handles the configured TLS certificate verification, and requests are assigned a 60-second timeout. The response is parsed as JSON, returning its data or throwing an error if the server reports a failure.",
  },
  {
    title: "Executing Operations on the Server",
    description:
      "The server receives the request, identifies the database using its registered path, and selects the corresponding action using the operation name. The selected action calls the appropriate KeyValueStore method to perform the requested operation. The result is then serialized and returned to the client through either the WebSocket response or REST response.",
  },
  {
    title: "Handling Errors and Disconnections",
    description:
      "The client provides configurable throwOnError and throwOnDisconnect options, along with onError and onDisconnect callbacks. By default, errors and disconnections are thrown when no corresponding callback is provided. If a callback is configured, the error or disconnection is passed to it instead. When a WebSocket connection closes, all pending requests are rejected, their timeouts are cleared, and the requests Map is emptied.",
  },
  {
    title: "Performing Additional Data Operations",
    description:
      "The Database instance also supports operations such as toggle(), increment(), decrement(), push(), pop(), shift(), unshift(), splice(), length(), and slice(). These methods send their respective operation requests to the server just like ordinary database methods. The client does not directly modify stored data; all database operations are executed by the server and the results are returned to the client.",
  },
];

export const WorkingOfDatabaseClient = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How does Database Client work ?</h1>

      <p className="mb-8 text-sm leading-6 font-medium opacity-80">
        DatabaseClient provides a way to communicate with DatabaseServer and perform database operations remotely. It supports persistent WebSocket
        connections as well as HTTP-based REST requests. It handles connection management, request creation, response matching, and error handling,
        while the actual database operations are executed on the server through the KeyValueStore engine.
      </p>

      <ul className="mb-8 flex flex-col gap-5">
        {workingSteps.map(({ title, description }) => (
          <li key={title} className="flex flex-col text-sm">
            <span>
              <FaDotCircle className="inline text-[5px]" />
              <span className="ml-2 font-semibold">{title}</span>
            </span>
            <span className="ml-7 opacity-80">{description}</span>
          </li>
        ))}
      </ul>
    </main>
  );
});
