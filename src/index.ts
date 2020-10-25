import * as config from './config';
import { app, logger } from './core';

try {
  app.listen(config.server.port, () => {
    logger.info(`Express server running on port ${config.server.port}`);
  });
} catch (err) {
  logger.error('There was an error starting the server. ', err);
}
