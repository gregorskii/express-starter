import mongoose from 'mongoose';
import Promise from 'bluebird';
import logger from './logger';

const gracefulShutdown = (reason, done) => {
  mongoose.connection.close(() => {
    logger.info(`Mongoose default connection disconnected through ${reason}`);
    done();
  });
};

export default () => {
  mongoose.Promise = Promise;

  mongoose.connect(process.env.MONGO_DB_URL, {
    user: process.env.MONGO_DB_USER,
    pass: process.env.MONGO_DB_PASS,
    promiseLibrary: Promise
  });

  mongoose.connection
    .on('connected', () => {
      logger.info(`Mongoose default connection open to ${process.env.MONGO_DB_URL}`);
    })
    .on('disconnected', () => {
      logger.info('Mongoose default connection disconnected');
    })
    .on('error', (err) => {
      logger.error(err, 'Mongoose default connection error');
    })
  ;

  process
    .on('SIGINT', () => {
      gracefulShutdown('application termination', () => {
        process.exit(0);
      });
    })
    .once('SIGUSR2', () => {
      gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
      });
    })
  ;

  return mongoose;
};
