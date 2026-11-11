/** @format */

export const gettingStartedServerCode = `
import { DatabaseServer } from "@xenodb/server";
            
const server = new DatabaseServer({ port: 3000, passphrase: "secret" });
await server.boot();
`;

export const gettingStartedClientCode = `
import { DatabaseClient } from "@xenodb/client";

const client = new DatabaseClient({ port: 3000, host: "0.0.0.0", passphrase: "secret" });
await client.connect();

const db = await client.createDatabase("users");
await db.set("user-1", { name: "Ada", role: "admin" });

const user = await db.get("user-1");
console.log(user); // { name: "Ada", role: "admin" }
`;
