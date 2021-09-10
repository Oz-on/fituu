import { StorageFile } from "../useStorage";

export type Message = {
  id: number;
  content: string;
  author: number;
  timestamp: string;
  attachment: StorageFile | null;
};
