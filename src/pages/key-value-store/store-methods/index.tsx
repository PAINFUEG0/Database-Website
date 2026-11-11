/** @format */

import { memo } from "react";
import { FaDotCircle } from "react-icons/fa";
import { List } from "../../../components/List";
import { LuCircleAlert } from "react-icons/lu";

const lifecycleMethods = [
  {
    signature: "init(): Promise<this>",
    description: [
      <p>Initializes the store, loads existing data from disk & recovers unfinished WAL operations"</p>,
      <p id="code" className="mt-2 rounded-md border-2 border-orange-600/30 bg-amber-400/15 px-2 py-1 text-orange-500">
        <LuCircleAlert className="mr-1 mb-0.5 inline" />
        Must be called and awaited before performing any database operation/s
      </p>,
    ],
  },
];

export const coreMethods = [
  {
    signature: "all(): { [K: string]: T }",
    description: "Returns an object containing all stored key-value pairs. Empty object when the store is empty.",
  },
  {
    signature: "has(key: string): Promise<boolean>",
    description: "Returns true if the key exists; otherwise false.",
  },
  {
    signature: "hasMany(keys: string[]): Promise<boolean[]>",
    description: "Returns a boolean array in order indicating whether each supplied key exists.",
  },
  {
    signature: "get(key: string): Promise<T | null>",
    description: "Returns value when the key exists; otherwise null.",
  },
  {
    signature: "getMany(keys: string[]): Promise<(Awaited<T> | null)[]>",
    description: "Returns an array of values in order. Missing keys return null.",
  },
  {
    signature: "set(key: string, value: T): Promise<NonNullable<T>>",
    description: "Creates a new entry or updates an existing value. Returns the stored value.",
  },
  {
    signature: "setMany(data: { key: string; value: T }[]): Promise<T[]>",
    description: "Creates or updates multiple entries in one operation. Returns an array of stored values in order.",
  },
  {
    signature: "delete(key: string): Promise<boolean>",
    description: "Deletes the specified entry. Returns true if the key existed and was deleted; otherwise false.",
  },
  {
    signature: "deleteMany(keys: string[]): Promise<boolean[]>",
    description: "Deletes multiple entries and returns a boolean array in order indicating whether each key existed and was deleted.",
  },
];

export const numericMethods = [
  {
    signature: "increment(key: string, count?: number): Promise<number>",
    description: [
      <p>Adds count to the stored number and returns the updated value, throws an error if the existing value or count is not numeric.</p>,
      <p>Missing key defaults to 0. count defaults to 1.</p>,
    ],
  },
  {
    signature: "decrement(key: string, count?: number): Promise<number>",
    description: [
      <p>Subtracts count from the stored number and returns the updated value, throws an error if the existing value or count is not numeric.</p>,
      <p>Missing key defaults to 0. count defaults to 1.</p>,
    ],
  },
];
export const booleanMethods = [
  {
    signature: "toggle(key: string): Promise<boolean>",
    description: [
      <p>Switches a boolean value between true and false and returns the updated value, throws an error if the existing value is not a boolean.</p>,
      <p>A missing key is treated as false, so toggling it creates the key with true.</p>,
    ],
  },
];

export const arrayMethods = [
  {
    signature: "length(key: string): Promise<number>",
    description: "Returns the number of elements in the stored array. A missing key is treated as an empty array and returns 0.",
  },
  {
    signature: "push(key: string, ...items: T[]): Promise<{ elements: T[]; length: number }>",
    description: "Appends items to the end of the array. Returns the inserted elements and the new array length.",
  },
  {
    signature: "unshift(key: string, ...items: T[]): Promise<{ elements: T[]; length: number }>",
    description: "Inserts items at the beginning of the array. Returns the inserted elements and the new array length.",
  },
  {
    signature: "pop(key: string): Promise<{ element: T; length: number }>",
    description: "Removes and returns the last element along with the new array length. If the array is empty, element is undefined and length is 0.",
  },
  {
    signature: "shift(key: string): Promise<{ element: T; length: number }>",
    description:
      "Removes and returns the first element along with the new array length. If the array is empty, element is undefined and length is 0.",
  },
  {
    signature: "slice(key: string, start: number, end?: number): Promise<{ elements: T[] }>",
    description:
      "Returns a new array containing the selected elements without modifying the stored array. Returns an empty elements array when the key does not exist.",
  },
  {
    signature: "splice(key: string, start: number, deleteCount?: number, ...items: T[]): Promise<{ added: T[]; removed: T[]; length: number }>",
    description:
      "Removes elements starting at the specified position and can insert replacement items when deleteCount is provided. Returns the added items, removed items, and resulting array length.",
  },
];

export const KeyValueStoreMethods = memo(() => {
  return (
    <main className="relative flex min-h-dvh w-full shrink-0 flex-col overflow-y-auto px-2">
      <h1 className="mb-10 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Key-Value Store</h1>

      <ul className="mb-8 flex flex-col gap-2">
        <li className="text-sm font-medium">
          <FaDotCircle className="inline text-[5px]" />
          <span className="ml-2">KeyValueStore implements the same data manipulation methods as the client Database instance.</span>
        </li>
      </ul>

      <List iterable={lifecycleMethods} title="Lifecycle methods" type="method" />
      <List iterable={coreMethods} title="Core CRUD Operations methods" type="method" />
      <List iterable={arrayMethods} title="Array specific methods" type="method" />
      <List iterable={numericMethods} title="Number specific methods" type="method" />
      <List iterable={booleanMethods} title="Boolean specific methods" type="method" />

      {/* <p className="mb-8 text-xs leading-5 opacity-70">
        Note: Array operations require the stored value to be an array. A missing key is treated as an empty array. Mutating operations update the
        value through set(), while length() and slice() only read it.
      </p> */}
    </main>
  );
});

KeyValueStoreMethods.displayName = "KeyValueStorePage";
