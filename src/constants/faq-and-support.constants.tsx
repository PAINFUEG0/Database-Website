/** @format */

export const QA = [
  {
    Q: "What is Xeno?",
    A: "Xeno is a key-value database for Node.js. It comes as a server with REST and WebSocket endpoints, a typed client, and an embeddable KeyValueStore you can use directly in your own process.",
  },
  {
    Q: "Do I need to run a server to use it?",
    A: "No. KeyValueStore works on its own inside a single process, with no server, network or client. Run a DatabaseServer and connect with DatabaseClient when several processes or machines need to share the same data.",
  },
  {
    Q: "Which Node.js version do I need?",
    A: "Node.js 22 or newer.",
  },
  {
    Q: "Should I use WebSocket or REST mode?",
    A: "WebSocket is the default. It keeps one connection open, which suits many small operations, and you call connect() once before creating databases. REST sends every operation as a separate HTTP request, so there is no connection to maintain and connect() does nothing. The throwOnError, onError, throwOnDisconnect and onDisconnect options only apply to WebSocket mode.",
  },
  {
    Q: "How is my data stored?",
    A: "Keys are spread across numbered JSON files (data_1.json, data_2.json and so on), each holding up to keysPerFile keys (100 by default). Everything is also kept in memory, so reads never touch the disk after startup.",
  },
  {
    Q: "Will I lose data if the process crashes?",
    A: "Every write is appended to a write-ahead log before it is acknowledged, and the log is replayed the next time the store starts, so a crashed process does not lose acknowledged writes. The log is not fsynced, so the most recent writes could still be lost if the whole machine loses power.",
  },
  {
    Q: "How much data can I store?",
    A: "The whole store is loaded into memory, so your data should comfortably fit in RAM. There is no fixed limit on the number of keys.",
  },
  {
    Q: "What can I store as values and keys?",
    A: "Values must be valid JSON, so no undefined, functions or class instances. Keys must be non-empty strings of at most 255 characters, and names that clash with built-in object properties, such as constructor, are rejected.",
  },
  {
    Q: "How do I validate my data?",
    A: "Pass a Zod schema in the schema option. Every write is checked against it, and the value type is inferred from the schema. Types, min, max, regex and similar built-in checks are enforced, and unknown keys on objects are rejected.",
  },
  {
    Q: "Why is my refine, transform or async validation not working?",
    A: "The schema is converted to JSON Schema and rebuilt on the server, so anything that needs your own JavaScript cannot be sent. refine and superRefine are ignored, transform and z.custom throw when the database is created, and async refinements are not supported. Run custom or async checks in your own code before writing.",
  },
  {
    Q: "Can several clients share one database?",
    A: "Yes. Clients that create a database at the same path share one store on the server. The options and schema of whichever client initialized it first stay in effect.",
  },
  {
    Q: "Where does the server keep its files?",
    A: "In a storage directory inside the server's working directory, with one folder per database path. Start the server from the same directory every time, or your data will look like it has disappeared.",
  },
  {
    Q: "What rules apply to database paths?",
    A: "A path must be relative, at most 256 characters, and must stay inside the storage directory. Paths such as an absolute path or ../outside are rejected. One client cannot create two databases at the same path.",
  },
  {
    Q: "How do I secure the server?",
    A: "Every request needs the passphrase in the Authorization header. The passphrase is sent as-is, so give the server an SSL key and certificate when it is reachable over a network you do not control. To connect to a server with a self-signed certificate, set ssl.rejectUnauthorized to false on the client.",
  },
  {
    Q: "What happens if the connection drops?",
    A: "In WebSocket mode, every request that is still waiting is rejected, and the client throws or calls onDisconnect, depending on your options. It does not reconnect on its own, so handle the disconnect and call connect() again.",
  },
  {
    Q: "How long can a request take?",
    A: "Requests time out after 60 seconds in both WebSocket and REST mode.",
  },
  {
    Q: "Can I use the client in a browser?",
    A: "No. The client is built for Node.js.",
  },
];
