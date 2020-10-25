import { createLogger, format, transports, Logger } from 'winston';

import { loggerConfig } from '../config';

const logger: Logger = createLogger({
  level: loggerConfig.level,
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  transports: [
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
});

export { logger };
