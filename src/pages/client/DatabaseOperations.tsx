/** @format */

import { memo } from "react";
import { List } from "../../components/List";
import { coreMethods, arrayMethods, numericMethods, booleanMethods } from "../k-v-store/KeyValueStoreMethods";
import { databaseMethods } from "./constants";
import { FaDotCircle } from "react-icons/fa";
// import { databaseSetupCode, databaseCreationMethods, databaseMethods, databaseOptions } from "./constants";

export const DatabaseOperations = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Database Operations</h1>

      {/* <p className="mb-10 text-sm font-semibold">
        <span children="Database provides an interface for interacting with key-value data stored on the database server. It exposes asynchronous methods for retrieving, creating, updating, and deleting entries, along with batch operations and specialized methods for manipulating arrays, booleans, and numbers. A database instance is created through " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.createDatabase()" />} />
        <span children=", which initializes the database at the specified path and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />
        <span children=". It also supports optional Zod schema validation and storage configuration during initialization." />
      </p> */}

      <ul className="mb-8 flex flex-col gap-2">
        <li className="text-sm font-medium">
          <FaDotCircle className="inline text-[5px]" />
          <span className="ml-2">Database&lt;T&gt; implements the same data manipulation methods as the KeyValueStore.</span>
        </li>
      </ul>

      <List type="method" iterable={databaseMethods} title="Lifecycle Methods" />
      <List iterable={coreMethods} title="Core CRUD Operations methods" type="method" />
      <List iterable={arrayMethods} title="Array specific methods" type="method" />
      <List iterable={numericMethods} title="Number specific methods" type="method" />
      <List iterable={booleanMethods} title="Boolean specific methods" type="method" />
    </main>
  );
});
