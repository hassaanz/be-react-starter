import { DB_TYPES } from './dbTypes';

export const ENV = process.env.NODE_ENV || 'development';

export const DB_TYPE = process.env.DB_TYPE || DB_TYPES.MONGO;

export default {
  ENV,
  DB_TYPE
};
