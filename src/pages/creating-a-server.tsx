/** @format */

import { memo } from "react";
import { serverSetup } from "../constants/creating-a-server.constants";
import { List } from "../components/List";
import { VscSymbolClass } from "react-icons/vsc";
import { CodeBlock, InlineCode } from "../components/CodeBlock";

export const DatabaseServer = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolClass className="shrink-0 text-[#ff8800]" id="code" />
        <span>Database Server</span>
      </h1>

      <p className="mb-10 text-sm font-semibold">
        <span children="The " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="class DatabaseServer" />} />
        <span children=" exposes a single lifecycle method " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="server.boot()" />} />
        <span children=" which initializes a HTTP/S gateway with endpoint for both a REST api (/rest) and WebSocket connections (/ws) on the specified port, and returns a " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Promise<number>" />} />
        <span children=" that resolves to the port that the server is listening on for incoming messages and requests." />
      </p>

      <CodeBlock filename="server.ts" code={serverSetup.codes.setup} className="mb-10 w-full" />

      <List type="constructor" iterable={serverSetup.constructorSignature} title="Construct signatures" />

      <List
        type="option"
        iterable={serverSetup.databaseServerOptions}
        title={<span children={["Database Server configuration ( ", <InlineCode code="type DatabaseServerOptions" />, " )"]} />}
      />

      <List
        type="option"
        iterable={serverSetup.sslOptions}
        title={<span children={["SSL configuration ( ", <InlineCode code="type ServerSslConfig" />, " )"]} />}
      />

      <List
        type="method"
        iterable={[
          {
            signature: "boot()",
            description: "Initializes a HTTP/S gateway and returns a promise that resolves to the port that the server is listening on.",
          },
        ]}
        title="Database Server Methods"
      />
    </main>
  );
});
