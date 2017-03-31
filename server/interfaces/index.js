import logger from './logger';
import mongooseInit from './mongoose';

const mongoose = mongooseInit();

export { mongoose, logger };
