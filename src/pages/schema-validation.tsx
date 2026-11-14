/** @format */

import { memo } from "react";
import { Link } from "react-router-dom";
import { schemaValidation } from "../constants/schema-validation.constants";
import { List } from "../components/List";
import { LuExternalLink } from "react-icons/lu";
import { VscSymbolVariable } from "react-icons/vsc";
import { CodeBlock, InlineCode } from "../components/CodeBlock";

export const SchemaValidation = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 flex flex-row gap-2 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <VscSymbolVariable className="shrink-0 text-[#ff8800]" id="code" />
        <span>Schema Validation</span>
      </h1>

      <p className="mb-5 text-sm font-semibold">
        <span children="A " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="zod" />} />
        <span children=" schema can be passed to the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="createDatabase()" />} />
        <span children=" method through the " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="schema" />} />
        <span children=" option. The schema is used for validation only, every value written to the database must satisfy it, otherwise the operation is rejected with an error." />
      </p>

      <p className="mb-5 text-sm font-semibold">
        <span children="When a schema is provided, the returned database is typed as " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="Database<z.infer<typeof schema>>" />} />
        <span children=", so " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="set()" />} />
        <span children=", " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="get()" />} />
        <span children=" and the rest of the methods are typed to match without needing to pass a generic yourself." />
      </p>

      <p className="mb-5 text-sm font-semibold">
        <span children=" The schema is converted to JSON Schema on the client using " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="schema.toJSONSchema()" />} />
        <span children=" and then sent to the server during initialization where its rebuilt using " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="z.fromJSONSchema(PL.schema)" />} />
        <span children=". Validation therefore runs on the server, and only rules that can be expressed in JSON Schema survive that trip." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="Zod version " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="4.5.4" />} />
        <span children=" is already used as a dependency in the lib and therefore using zod requires no manual/separate installation." />
      </p>

      <CodeBlock filename="schema.ts" code={schemaValidation.codes.schema} className="mb-10 w-full" />
      <CodeBlock filename="database.ts" code={schemaValidation.codes.setup} className="mb-10 w-full" />

      <p className="mb-5 text-sm font-semibold">
        <span children="Validation runs on every write: " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="set()" />} />
        <span children=", " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="setMany()" />} />
        <span children=" and the methods built on top of them (" />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="toggle()" />} />
        <span children=", " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="increment()" />} />
        <span children=", " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="push()" />} />
        <span children=" and so on). Array methods validate the whole resulting array, not just the added items. Reads are never validated, and data that already exists on disk is not re-checked when a database is opened with a new schema. Values must also be valid JSON." />
      </p>

      <p className="mb-5 text-sm font-semibold">
        <span children="Anything that depends on running your own JavaScript on the server cannot be sent over the wire, so it is not supported. This includes both sync and async refinements and transforms, which are not supported and will never run. Depending on the feature, it is either left out of the JSON Schema silently or the schema fails to convert when the database is created." />
      </p>

      <p className="mb-10 text-sm font-semibold">
        <span children="Stick to structural rules such as types, objects, arrays, enums, unions, literals, optional fields, and built-in checks like min, max, length and regex. If you need custom or async checks, run them in your own code before calling " />
        <span className="rounded-md bg-gray-300 px-1" children={<InlineCode code="set()" />} />
        <span children="." />
      </p>

      <List type="method" iterable={schemaValidation.unsupported} title={<span children="Unsupported schema methods" />} />

      <Link to="https://zod.dev/api" target="_blank">
        <p className="mb-5 cursor-pointer text-sm font-semibold underline-offset-4 hover:underline">
          <span children="For further details on schema refer to the official documentaion for zod." />
          <LuExternalLink className="mx-1 mb-1.25 inline" />
        </p>
      </Link>
    </main>
  );
});
