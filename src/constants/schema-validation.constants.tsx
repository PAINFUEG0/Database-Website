/** @format */

export const schemaValidation = {
  codes: {
    schema:
      `import { z } from "zod";\n` +
      `\n` +
      `export const UserSchema = z.object({\n` +
      `  name: z.string().min(1),\n` +
      `  age: z.number().int().min(18).max(60),\n` +
      `})`,
    setup:
      `import { UserSchema } from "./schema.ts";\n` +
      `import { DatabaseClient } from "@xenodb/client";\n` +
      `\n` +
      `const client = new DatabaseClient({ host: "localhost", port: 3000, passphrase: "secret" });\n` +
      `await client.connect();\n` +
      `\n` +
      `const users = await client.createDatabase("users", { schema: UserSchema }); // Typed as { name: string; age: number; }\n` +
      `\n` +
      `await users.set("u1", { name: "Ada", age: 36 }); // Resolved\n` +
      `await users.set("u2", { name: "Bob", age: "old" }); // Rejected - 'age' must be a number\n`,
  },

  unsupported: [
    {
      signature: ["<schema>.custom()", "<schema>.refine((v) => { ... })", "z<schema>superRefine((v, ctx) => { ... })"],
      description:
        "Custom validation and refinement logic, including synchronous and asynchronous checks, are not supported because they rely on executable functions that cannot be serialized and transferred to the server. These checks may be dropped during schema conversion or cause conversion to fail. Use built-in Zod validators for supported constraints and handle additional custom validation separately in your application code.",
    },
    {
      signature: ["<schema>.transform(fn)", "<schema>.pipe(schema)", "<schema>.preprocess(fn, schema)"],
      description:
        "Transformations, preprocessing, and coercion are not supported because they modify or convert values using functions that cannot be serialized. The schema is used to validate data, not to reshape or normalize it. Convert values into the expected format in your application code beforehand.",
    },
    {
      signature: ["z.parseAsync()", "z.safeParseAsync()"],
      description:
        "Asynchronous parsing methods are not supported because schema validation is internally performed synchronously on the server, so you do not need to call Zod parsing methods yourself. Any asynchronous validation must be handled separately in your application before writing data.",
    },
  ],
};
