/** @format */

import { Database } from "./pages/client/Database";
import { DatabaseClient } from "./pages/client/DatabaseClient";
import { DatabaseServer } from "./pages/server/DatabaseServer";
import { KeyValueStore } from "./pages/k-v-store/KeyValueStore";
import { GettingStarted } from "./pages/introduction/GettingStarted";
import { DatabaseOperations } from "./pages/client/DatabaseOperations";
import { KeyValueStoreMethods } from "./pages/k-v-store/KeyValueStoreMethods";
import { WorkingOfKeyValueStore } from "./pages/k-v-store/WorkingOfKeyValueStore";
import { WorkingOfDatabaseServer } from "./pages/server/WorkingOfDatabaseServer";

export const pages = {
  Introduction: [{ title: "Getting Started", page: <GettingStarted /> }],

  "Getting Started with Databases": [
    { title: "Creating a Server", page: <DatabaseServer /> },
    { title: "Connecting to a Server", page: <DatabaseClient /> },
    { title: "Creating databases", page: <Database /> },
    { title: "Database Operations", page: <DatabaseOperations /> },
    { title: "Schema Validation", page: <></> },
  ],

  "Key-Value Store": [
    { title: "Introduction and setup", page: <KeyValueStore /> },
    { title: "Store Methods", page: <KeyValueStoreMethods /> },
  ],

  "Under the Hood": [
    { title: "How Key-Value Store Works", page: <WorkingOfKeyValueStore /> },
    { title: "How Database Server Works", page: <WorkingOfDatabaseServer /> },
    { title: "How Database Client Works", page: <></> },
  ],

  Resources: [{ title: "FAQ & Support", page: <></> }],
};

export const allPages = Object.values(pages).flatMap((pages) =>
  pages.map(({ title }) => ({ title, path: `/${title.toLowerCase().replaceAll(" ", "-")}` })),
);
