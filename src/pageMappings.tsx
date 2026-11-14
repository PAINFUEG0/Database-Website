/** @format */

import { QuickStart } from "./pages/quick-start";
import { Database } from "./pages/creating-databases";
import { KeyValueStore } from "./pages/key-value-store";
import { DatabaseServer } from "./pages/creating-a-server";
import { SchemaValidation } from "./pages/schema-validation";
import { KeyValueStoreOperations } from "./pages/store-opeartions";
import { DatabaseClient } from "./pages/connecting-to-a-server";
import { DatabaseOperations } from "./pages/database-operations";
import { WorkingOfKeyValueStore } from "./pages/how-key-value-store-works";
import { WorkingOfDatabaseServer } from "./pages/how-database-server-works";
import { WorkingOfDatabaseClient } from "./pages/how-database-client-works";

export const pages = {
  Introduction: [{ title: "Quick Start", page: <QuickStart /> }],

  "Getting Started with Databases": [
    { title: "Creating a Server", page: <DatabaseServer /> },
    { title: "Connecting to a Server", page: <DatabaseClient /> },
    { title: "Creating databases", page: <Database /> },
    { title: "Database Operations", page: <DatabaseOperations /> },
    { title: "Schema Validation", page: <SchemaValidation /> },
  ],

  "Key-Value Store": [
    { title: "Introduction and setup", page: <KeyValueStore /> },
    { title: "Store Methods", page: <KeyValueStoreOperations /> },
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
