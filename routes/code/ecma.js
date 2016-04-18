'use strict';
let hopperJs = require('hopperjs');
let fs       = require('fs');

module.exports = function ecmaRoutes(server) {

    let PATH = '/ecma/:repoId';
    server.get({path: PATH, version: '0.0.1'}, ecmaV1);

};

function ecmaV1(req, resp) {

    let path = '/Users/EdgarWork/WebstormProjects/hopper-sample/sample.json';

    let rStream = fs.createReadStream(path);
    rStream.pipe(resp);
}
