/** @format */

import { memo } from "react";
import { List } from "../components/List";
import { VscSymbolMethod } from "react-icons/vsc";
import { InlineCode } from "../components/CodeBlock";
import { keyValueStore } from "../constants/key-value-store.constants";
import { coreMethods, arrayMethods, numericMethods, booleanMethods } from "../constants/database-operations.constants";

export const KeyValueStoreOperations = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolMethod className="shrink-0 text-[#ff8800]" id="code" />
        <span>Key-value Store Operations</span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class KeyValueStore<T>" />} />
        <span children=" is the raw storage engine used by the database server. It exposes asynchronous methods for basic as well as batch CRUD operations, along with specialized methods for manipulating arrays, booleans, and numbers." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class KeyValueStore<T>" />} />
        <span children=" implements the same data manipulation methods as the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class Database<T>" />} />
        <span children=". If the existing value for a key does not satisfy the type constraints for the specialized type specific method, an " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Error" />} />
        <span children=" will be thrown." />
      </p>

      <List iterable={keyValueStore.methods} title="Lifecycle methods" type="method" />
      <List iterable={coreMethods} title="Core CRUD Operations methods" type="method" />
      <List iterable={arrayMethods} title="Array specific methods" type="method" />
      <List iterable={numericMethods} title="Number specific methods" type="method" />
      <List iterable={booleanMethods} title="Boolean specific methods" type="method" />
    </main>
  );
});
