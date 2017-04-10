import express from 'express';
import http from 'http';

import { logger } from './interfaces';
import routes from './routes';
import services from './services';

const app = express();

// App Setup
services(app);
routes(app);

// Server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`Server listening at ${port}`);
});
