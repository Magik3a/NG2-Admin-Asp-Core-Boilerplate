// Look in ./config folder for webpack.dev.js

"use strict";

var fs = require('fs');
var gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(fs);
switch (process.env.NODE_ENV) {
    case 'prod':
    case 'production':
        module.exports = require('./config/webpack.prod')({ env: 'production' });
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.dev')({ env: 'development' });
}
