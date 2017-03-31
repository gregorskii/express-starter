process.env.NODE_ENV = 'test';

const path = require('path');

module.exports = (wallaby) => {
  process.env.NODE_PATH += path.delimiter +
    path.join(wallaby.projectCacheDir, 'server') +
    path.delimiter +
    path.join(wallaby.projectCacheDir
  );

  return {
    debug: true,
    testFramework: 'mocha',
    files: [
      'server/**/*.js?(x)',
      'server/**/*.json',
      'test/unit/spec/helpers/**/*.js?(x)',
      '!server/**/*-spec.js?(x)'
    ],
    tests: [
      'server/**/*-spec.js?(x)'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel()
    },
    setup: () => {
      // eslint-disable-next-line global-require
      require('./test/unit/spec/helpers');
    }
  };
};
