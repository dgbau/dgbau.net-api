import { hostname } from 'os';

interface DbSettings {
  postgres: {
    hostname: string;
    port: string | number;
    username: string;
    password: string;
  };
}

export const dbSettings: DbSettings = {
  postgres: {
    hostname: process.env.POSTGRES_HOSTNAME || 'localhost',
    port: process.env.POSTGRES_PORT || '5439',
    username: process.env.POSTGRES_USERNAME || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'password!',
  },
};
