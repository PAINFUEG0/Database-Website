/** @format */

import { memo } from "react";
import { List } from "../../components/List";
import { CodeBlock, InlineCode } from "../../components/CodeBlock";
import { databaseClientSetupCode, clientSslOptions, databaseClientOptions } from "./constants";

export const DatabaseClient = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Database Client</h1>

      <p className="mb-10 text-sm font-semibold">
        <span children="DatabaseClient exposes two methods " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.connect()" />} />
        <span children=" and " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.createDatabase()" />} />
        <span children=". The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="connect()" />} />
        <span children=" method establishes a WebSocket connection to the database server when using WebSocket mode, while REST mode requires no persistent connection. The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="createDatabase()" />} />
        <span children=" method initializes a database at the specified path and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />
        <span children=" that resolves to a database instance for operations." />
      </p>

      <CodeBlock filename="client.ts" code={databaseClientSetupCode} className="mb-10 w-full" />

      <List
        type="method"
        iterable={[
          {
            signature: "client.connect()",
            description:
              "Establishes a WebSocket connection to the database server and returns a promise that resolves to the client instance once the connection is open",
          },
          {
            signature: "client.createDatabase<T>(path:string, options?: type DatabaseCreationOptions)",
            description:
              "Creates and initializes a typed database at the specified path and returns a promise that resolves to a Database instance of type T",
          },
        ]}
        title="Database Client Methods"
      />

      <List
        type="option"
        iterable={databaseClientOptions}
        title={
          <>
            Database Client configuration ( <InlineCode code="type DatabaseClientOptions" /> )
          </>
        }
      />

      <List
        type="option"
        iterable={clientSslOptions}
        title={
          <>
            SSL configuration ( <InlineCode code="type SslConfig" /> )
          </>
        }
      />
    </main>
  );
});
