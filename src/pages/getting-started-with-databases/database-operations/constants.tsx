/** @format */

export const coreMethods = [
  {
    signature: "has(key: string): Promise<boolean>",
    description: "Returns true if the key exists; otherwise false.",
  },
  {
    signature: "get(key: string): Promise<T | null>",
    description: "Returns value when the key exists; otherwise null.",
  },
  {
    signature: "set(key: string, value: T): Promise<T>",
    description: "Creates a new entry or updates an existing value. Returns the stored value.",
  },
  {
    signature: "delete(key: string): Promise<boolean>",
    description: "Deletes the specified entry. Returns true if the key existed otherwise false.",
  },
  {
    signature: "all(): Promise<{ [K: string]: T }>",
    description: "Returns an object containing all stored key-value pairs. Empty object when the store is empty.",
  },
];

export const batchMethods = [
  {
    signature: "hasMany(keys: string[]): Promise<boolean[]>",
    description: "Returns a boolean array in order indicating whether each supplied key exists.",
  },
  {
    signature: "getMany(keys: string[]): Promise<(T | null)[]>",
    description: "Returns an array of values in order. Missing keys return null.",
  },
  {
    signature: "setMany(data: { key: string; value: T }[]): Promise<T[]>",
    description: "Creates or updates multiple entries in one operation. Returns an array of stored values in order.",
  },
  {
    signature: "deleteMany(keys: string[]): Promise<boolean[]>",
    description: "Deletes multiple entries and returns a boolean array in order indicating whether each key existed and was deleted.",
  },
];

export const numericMethods = [
  {
    signature: "increment(key: string, count?: number): Promise<number>",
    description: "Adds count to the stored number and returns the updated value. Missing key defaults to 0. count defaults to 1.",
  },
  {
    signature: "decrement(key: string, count?: number): Promise<number>",
    description: "Subtracts count from the stored number and returns the updated value. Missing key defaults to 0. count defaults to 1.",
  },
];
export const booleanMethods = [
  {
    signature: "toggle(key: string): Promise<boolean>",
    description: "Toggles a boolean value and returns the updated value. A missing key is treated as false, so toggling creates it with true.",
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
