import dotenv from 'dotenv';
dotenv.config();

export { serverSettings as server } from './server';
export { dbSettings as db } from './database';
export { loggerConfig } from './logger';
