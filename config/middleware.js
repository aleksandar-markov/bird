'use strict';

let restify = require('restify');

module.exports = function middlewareConfig(server) {

    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.authorizationParser());
    server.use(restify.CORS());
    server.use(restify.dateParser());
    server.use(restify.queryParser());
    server.use(restify.gzipResponse());
    server.use(restify.bodyParser());
    server.use(restify.requestLogger());
    //server.use(restify.throttle());
    server.use(restify.conditionalRequest());
    server.use(restify.fullResponse());
    server.use(restify.bodyParser());

    //add headers to all the app responses
    server.use(function (req, res, next) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        next();
    });
};