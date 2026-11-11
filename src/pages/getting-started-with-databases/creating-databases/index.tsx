/** @format */

import { memo } from "react";
import { List } from "../../../components/List";
import { CodeBlock, InlineCode } from "../../../components/CodeBlock";
import { databaseSetupCode, databaseCreationMethods, databaseOptions, databaseMethods } from "../connecting-to-a-server/constants";
// import { databaseSetupCode, databaseCreationMethods, databaseMethods, databaseOptions } from "./constants";

export const Database = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Database</h1>

      <p className="mb-10 text-sm font-semibold">
        <span children="Database provides an interface for interacting with key-value data stored on the database server. It exposes asynchronous methods for retrieving, creating, updating, and deleting entries, along with batch operations and specialized methods for manipulating arrays, booleans, and numbers. A database instance is created through " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.createDatabase()" />} />
        <span children=", which initializes the database at the specified path and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />
        <span children=". It also supports optional Zod schema validation and storage configuration during initialization." />
      </p>

      <CodeBlock filename="database.ts" code={databaseSetupCode} className="mb-10 w-full" />

      <List type="method" iterable={databaseCreationMethods} title="Database Creation Methods" />
      <List type="option" iterable={databaseOptions} title="Database Creation Options" />
      <List type="method" iterable={databaseMethods} title="Database Methods" />
    </main>
  );
});
