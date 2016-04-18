'use strict';
module.exports = function serverEventsConfig(server) {

    server.on('NotFound', function (request, response, cb) {
    });

    server.on('MethodNotAllowed', function (request, response, cb) {
    });

    server.on('VersionNotAllowed', function (request, response, cb) {
    });

    server.on('UnsupportedMediaType', function (request, response, cb) {
    });

    server.on('after', function (request, response, route, error) {
    });

    server.on('uncaughtException', function (request, response, route, error) {
    });
};