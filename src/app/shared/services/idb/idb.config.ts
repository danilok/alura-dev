import { DBConfig, ObjectStoreMeta } from 'ngx-indexed-db';

const DATABASE_NAME = 'AluraDev';
const DATABASE_VERSION = 1;
const CODIGOS_METADATA: ObjectStoreMeta = {
  store: 'codigos',
  storeConfig: { keyPath: 'id', autoIncrement: true },
  storeSchema: [
    { name: 'usuario', keypath: 'usuario', options: { unique: false } }
  ],
};

export const dbConfig: DBConfig = {
  name: DATABASE_NAME,
  version: DATABASE_VERSION,
  objectStoresMeta: [
    CODIGOS_METADATA
  ]
};
