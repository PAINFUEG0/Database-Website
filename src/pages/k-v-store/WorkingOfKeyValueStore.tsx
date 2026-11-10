/** @format */

import { memo } from "react";
import { FaDotCircle } from "react-icons/fa";

const workingSteps = [
  {
    title: "Initialization",
    description:
      "When init() is called, the store resolves the storage path, creates the directory if needed, removes leftover temporary files, and loads existing data_<n>.json files into memory. It also restores unfinished operations from the WAL and saves the recovered data.",
  },
  {
    title: "Organizing Data",
    description:
      "Data is stored in separate JSON shard files, with each file holding up to keysPerFile entries. The store maintains an in-memory Map for these shards, an index to track the keys in each shard, and a reverse index to quickly find which shard contains a particular key. It reuses files with available space or creates a new shard when needed.",
  },
  {
    title: "Reading Data",
    description:
      "When get(), getMany(), or has() is called, the reverse index identifies the correct shard and the value is retrieved directly from memory. This avoids reading JSON files for every request. Returned values are cloned so changes made outside the store do not directly modify its cached data.",
  },
  {
    title: "Validating and Recording Changes",
    description:
      "Before saving, keys are checked to ensure they are valid strings, within the allowed length, and not reserved object property names. If a Zod schema is provided, values are validated against it and checked for JSON compatibility. Each set or delete operation is then recorded as a timestamped JSON line in write-ahead-log.jsonl before the in-memory data is changed.",
  },
  {
    title: "Updating Memory",
    description:
      "After recording the operation in the WAL, the store updates the appropriate shard in its Map cache. It also updates the key indexes and adds the modified shard to a Set-based write queue, preventing the same shard from being queued multiple times.",
  },
  {
    title: "Debouncing Writes",
    description:
      "Instead of writing to disk after every operation, the store waits for debounceTime milliseconds after the latest write batch. The timer is refreshed when another batch arrives. If maxDebounceCount is reached, a disk flush is triggered immediately, provided another flush is not already running.",
  },
  {
    title: "Flushing Data to Disk",
    description:
      "When a flush starts, the store takes the queued shards and creates JSON snapshots of their current cached data. It rotates the active WAL into _write-ahead-log.jsonl and opens a fresh WAL, allowing new operations to be recorded while the previous changes are being saved. The shard snapshots are written to temporary files and renamed to their final JSON filenames after successful writes.",
  },
  {
    title: "Handling Failed Writes",
    description:
      "If a shard cannot be saved, it is added back to the write queue. The previous WAL and the new WAL are merged so that recorded operations are preserved, and another flush is scheduled. Successfully saved shards are kept on disk.",
  },
  {
    title: "Crash Recovery and Repeating the Cycle",
    description:
      "If the application crashes before all changes are saved, the WAL contains the operations needed to restore the data. During the next initialization, the store merges any leftover WAL files, replays set and delete operations in order, and flushes the recovered state. The store then continues accepting reads and writes through the same cycle.",
  },
  {
    title: "Additional Data Operations",
    description:
      "Methods such as toggle(), increment(), decrement(), push(), pop(), shift(), unshift(), and splice() modify values in memory and use the same set() pipeline to record and queue their changes. Read-only operations such as length() and slice() access the cached data directly.",
  },
];

export const WorkingOfKeyValueStore = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">How does Key-Value Store work ?</h1>

      <p className="mb-8 text-sm leading-6 font-medium opacity-80">
        KeyValueStore keeps frequently accessed data in memory for fast operations while using sharded JSON files for permanent storage. A Write-Ahead
        Log (WAL) records changes before they are applied, allowing unfinished operations to be recovered after a crash. Changes are collected and
        written to disk in batches instead of saving every operation individually.
      </p>

      <ul className="mb-8 flex flex-col gap-5">
        {workingSteps.map(({ title, description }) => (
          <li key={title} className="flex flex-col text-sm">
            <span>
              <FaDotCircle className="inline text-[5px]" />
              <span className="ml-2 font-semibold">{title}</span>
            </span>
            <span className="opacity ml-7">{description}</span>
          </li>
        ))}
      </ul>
    </main>
  );
});

WorkingOfKeyValueStore.displayName = "KeyValueStorePage";
