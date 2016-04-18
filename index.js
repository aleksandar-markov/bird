'use strict';

let restify            = require('restify');
let routes             = require('./routes');
let middlewareConfig   = require('./config/middleware');
let serverEventsConfig = require('./config/server-events');
let dbConfig           = require('./config/db');

let server = restify.createServer({
    formatters: null,
    log: null,
    name: 'crucible-api',
    spdy: null,
    version: '0.0.1',
    handleUpgrades: false
});

server.listen(8080, function () {

    console.log('%s listening at %s', server.name, server.url);
});

serverEventsConfig(server);
middlewareConfig(server);
routes(server);
dbConfig();