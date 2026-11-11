/** @format */

export const gettingStarted = {
  codes: {
    server:
      `import { DatabaseServer } from "@xenodb/server";\n` +
      `\n` +
      `const server = new DatabaseServer({ port: 3000, passphrase: "secret" });\n` +
      `await server.boot();`,

    client:
      `import { DatabaseClient } from "@xenodb/client";\n` +
      `\n` +
      `const client = new DatabaseClient({ port: 3000, host: "0.0.0.0", passphrase: "secret" });\n` +
      `await client.connect();\n` +
      `\n` +
      `const db = await client.createDatabase("users");\n` +
      `await db.set("user-1", { name: "Ada", role: "admin" });\n` +
      `\n` +
      `const user = await db.get("user-1");\n` +
      `console.log(user); // { name: "Ada", role: "admin" }`,
  },
};
