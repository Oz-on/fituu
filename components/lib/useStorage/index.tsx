
export type StorageFile = {
  id: string;
  name: string;
  type: string;
  file: {
    url: string;
    expiresIn: string;
  },
};
