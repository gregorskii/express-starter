import bunyan from 'bunyan';
import bformat from 'bunyan-format';

const formatOut = bformat({
  outputMode: 'short'
});

const logger = bunyan.createLogger({
  name: 'LOCAL',
  stream: formatOut
});

export default logger;
