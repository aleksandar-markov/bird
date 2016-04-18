'use strict';
let codeRoutes = require('./code');

module.exports = function routes(server) {

    codeRoutes(server);
};
