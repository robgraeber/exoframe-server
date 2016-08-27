// our packages
import logger from './logger';
import app from './app';
import {getConfig} from './config';

// start server
app.listen(3000, function() {
  const host = this.address().address;
  const port = this.address().port;
  logger.info(`Exoframe server is running on ${host}:${port}`);
  logger.info('Running with user config:', getConfig());
});

// output all uncaught exceptions
process.on('uncaughtException', err => logger.error('Uncaught exception:', err));
process.on('unhandledRejection', error => logger.error('Unhandled rejection:', error));
