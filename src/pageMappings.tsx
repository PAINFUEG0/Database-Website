/** @format */

import { QuickStart } from "./pages/quick-start";
import { Database } from "./pages/creating-databases";
import { FaqAndSupport } from "./pages/faq-and-support";
import { KeyValueStore } from "./pages/key-value-store";
import { DatabaseServer } from "./pages/creating-a-server";
import { SchemaValidation } from "./pages/schema-validation";
import { DatabaseClient } from "./pages/connecting-to-a-server";
import { DatabaseOperations } from "./pages/database-operations";
import { KeyValueStoreOperations } from "./pages/store-operations";
import { WorkingOfKeyValueStore } from "./pages/how-key-value-store-works";
import { WorkingOfDatabaseServer } from "./pages/how-database-server-works";
import { WorkingOfDatabaseClient } from "./pages/how-database-client-works";

export const pages = {
  Introduction: [
    {
      page: <QuickStart />,
      title: "Quick Start",
      description: "Install the package, start a database server, connect a client, and read and write your first key-value data in a few minutes.",
    },
  ],

  "Getting Started with Databases": [
    {
      page: <DatabaseServer />,
      title: "Creating a Server",
      description:
        "Create and boot a DatabaseServer with a port, passphrase and optional SSL. Covers the REST and WebSocket endpoints and logging callbacks.",
    },
    {
      page: <DatabaseClient />,
      title: "Connecting to a Server",
      description:
        "Connect to a DatabaseServer with DatabaseClient over WebSocket or REST. Covers client options, SSL, and error and disconnect handling.",
    },
    {
      page: <Database />,
      title: "Creating Databases",
      description:
        "Create typed or schema-validated databases with createDatabase(), including storage options such as keysPerFile and the debounce settings.",
    },
    {
      page: <DatabaseOperations />,
      title: "Database Operations",
      description: "Reference for the Database<T> methods: get, set, delete, batch operations, and helpers for array, number and boolean values.",
    },
    {
      page: <SchemaValidation />,
      title: "Schema Validation",
      description:
        "Validate every write with a Zod schema. Learn what the server enforces and which Zod features, such as async refinements, are not supported.",
    },
  ],

  "Key-Value Store": [
    {
      page: <KeyValueStore />,
      title: "Introduction and Setup",
      description:
        "Use KeyValueStore directly for durable local storage without a server. Covers setup, typing, validation and configuration options.",
    },
    {
      page: <KeyValueStoreOperations />,
      title: "Key-Value Store Operations",
      description:
        "Reference for the KeyValueStore methods: init, get, set, delete, batch operations, and helpers for array, number and boolean values.",
    },
  ],

  "Under the Hood": [
    {
      page: <WorkingOfKeyValueStore />,
      title: "How Key-Value Store Works",
      description:
        "How KeyValueStore keeps data in memory, shards it across JSON files, and uses a write-ahead log and atomic writes to stay durable.",
    },
    {
      page: <WorkingOfDatabaseServer />,
      title: "How Database Server Works",
      description: "How DatabaseServer authenticates requests, routes REST and WebSocket messages, and manages the databases behind them.",
    },
    {
      page: <WorkingOfDatabaseClient />,
      title: "How Database Client Works",
      description:
        "How DatabaseClient builds requests, matches WebSocket responses by id, handles timeouts, and talks to the server over REST or WebSocket.",
    },
  ],

  Resources: [
    {
      page: <FaqAndSupport />,
      title: "FAQ and Support",
      description: "Answers to common questions and ways to get help with Xeno.",
    },
  ],
};

export const allPages = Object.values(pages).flatMap((pages) =>
  pages.map(({ title }) => ({ title, path: `/${title.toLowerCase().replaceAll(" ", "-")}` })),
);
