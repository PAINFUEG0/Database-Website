/** @format */

import { memo } from "react";
import { List } from "../../components/List";
import { CodeBlock, InlineCode } from "../../components/CodeBlock";
import { databaseServerOptions, databaseServerSetupCode, sslOptions } from "./constants";

export const DatabaseServer = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Database Server</h1>

      <p className="mb-10 text-sm font-semibold">
        <span children="DatabaseServer exposes a single lifecycle method " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="server.boot()" />} />
        <span children=" which initializes a HTTP/S gateway with endpoint for both a REST api (/rest) as well as WebSocket connections (/ws) on the specified port, and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<number>" />} />
        <span children=" that resolving to the port that the server is listening on for incoming messages/requests" />
      </p>

      <CodeBlock filename="server.ts" code={databaseServerSetupCode} className="mb-10 w-full" />

      <List
        type="method"
        iterable={[
          {
            signature: "server.boot()",
            description: "Initializes a HTTP/S gateway and returns a promise that resolving to the port that the server is listening on",
          },
        ]}
        title="Database Server Methods"
      />

      <List
        type="option"
        iterable={databaseServerOptions}
        title={
          <>
            Database Server configuration ( <InlineCode code="type DatabaseServerOptions" /> )
          </>
        }
      />

      <List
        type="option"
        iterable={sslOptions}
        title={
          <>
            SSL configuration ( <InlineCode code="type SslConfig" /> )
          </>
        }
      />
    </main>
  );
});
