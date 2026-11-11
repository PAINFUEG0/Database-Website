/** @format */

import { GettingStarted } from "./pages/introduction/getting-started";
import { WorkingOfDatabaseServer } from "./pages/under-the-hood/how-database-server-works";
import { WorkingOfKeyValueStore } from "./pages/under-the-hood/how-key-value-store-works";
import { Database } from "./pages/getting-started-with-databases/creating-databases";
import { DatabaseServer } from "./pages/getting-started-with-databases/creating-a-server";
import { DatabaseClient } from "./pages/getting-started-with-databases/connecting-to-a-server";
import { DatabaseOperations } from "./pages/getting-started-with-databases/database-operations";
import { KeyValueStore } from "./pages/key-value-store/introduction-and-setup";
import { KeyValueStoreMethods } from "./pages/key-value-store/store-methods";
import { WorkingOfDatabaseClient } from "./pages/under-the-hood/how-database-client-works";
import { SchemaValidation } from "./pages/getting-started-with-databases/schema-validation";

export const pages = {
  Introduction: [{ title: "Getting Started", page: <GettingStarted /> }],

  "Getting Started with Databases": [
    { title: "Creating a Server", page: <DatabaseServer /> },
    { title: "Connecting to a Server", page: <DatabaseClient /> },
    { title: "Creating databases", page: <Database /> },
    { title: "Database Operations", page: <DatabaseOperations /> },
    { title: "Schema Validation", page: <SchemaValidation /> },
  ],

  "Key-Value Store": [
    { title: "Introduction and setup", page: <KeyValueStore /> },
    { title: "Store Methods", page: <KeyValueStoreMethods /> },
  ],

  "Under the Hood": [
    { title: "How Key-Value Store Works", page: <WorkingOfKeyValueStore /> },
    { title: "How Database Server Works", page: <WorkingOfDatabaseServer /> },
    { title: "How Database Client Works", page: <WorkingOfDatabaseClient /> },
  ],

  Resources: [{ title: "FAQ & Support", page: <></> }],
};

export const allPages = Object.values(pages).flatMap((pages) =>
  pages.map(({ title }) => ({ title, path: `/${title.toLowerCase().replaceAll(" ", "-")}` })),
);
