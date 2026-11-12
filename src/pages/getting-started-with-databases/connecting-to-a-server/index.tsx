/** @format */

import { memo } from "react";
import { databaseClient } from "./constants";
import { List } from "../../../components/List";
import { VscSymbolClass } from "react-icons/vsc";
import { CodeBlock, InlineCode } from "../../../components/CodeBlock";

export const DatabaseClient = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolClass className="shrink-0 text-[#ff8800]" id="code" />
        <span>Database Client</span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <span children="The class " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="DatabaseClient" />} />
        <span children=" exposes two methods " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.connect()" />} />
        <span children=" and " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="client.createDatabase()" />} />
        <span children=" ." />
      </p>

      <p className="mb-5 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="connect()" />} />
        <span children=" method establishes a WebSocket connection to the database server when using WebSocket mode, while REST mode requires no persistent connection. This method must be called and the returned promise be waited to resolve before trying to create any database instances using the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="createDatabase()" />} />
        <span children=" method." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="createDatabase()" />} />
        <span children=" method initializes a database at the specified path and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />
        <span children=" . The returned promise resolves to an instance of the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class Database<T>" />} />
        <span children="  which contains methods for database (CRUD) operations." />
      </p>

      <CodeBlock filename="client.ts" code={databaseClient.codes.setup} className="mb-10 w-full" />

      <List
        type="method"
        iterable={[
          {
            signature: "connect()",
            description: [
              "Establishes a WebSocket connection to the database server and returns a ",
              <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<DatabaseClient>" />} />,
              " that resolves to once the connection is open.",
            ],
          },
          {
            signature: "createDatabase<T>(path:string, options?: type DatabaseCreationOptions)",
            description: [
              "Creates and initializes a typed database at the specified path and returns a ",
              ,
              <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<Database<T>>" />} />,
              " that resolves to a Database instance of type T.",
            ],
          },
        ]}
        title="Database Client Methods"
      />

      <List
        type="option"
        iterable={databaseClient.constructorOptions}
        title={<span children={["Database Client configuration ( ", <InlineCode code="type DatabaseClientOptions" />, " )"]} />}
      />

      <List
        type="option"
        iterable={databaseClient.sslOptions}
        title={<span children={["SSL configuration ( ", <InlineCode code="type ClientSslConfig" />, " )"]} />}
      />
    </main>
  );
});
