export interface LoggerConfig {
  level: string;
}

export const loggerConfig: LoggerConfig = {
  level: process.env.LOG_LEVEL || 'error',
};
