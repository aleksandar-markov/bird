'use strict';
var Sequelize = require('sequelize');
var sequelize = new Sequelize('mydb', 'edgar', 'helloworld1234', {
    host: '127.0.0.1',
    dialect: 'postgres'
});

module.exports = function dbConfig() {

    var User = sequelize.define('user', {
        username: Sequelize.STRING,
        birthday: Sequelize.DATE
    });

    sequelize.sync().then(function () {
        return User.create({
            username: 'janedoe',
            birthday: new Date(1980, 6, 20)
        });
    }).then(function (jane) {
        console.log(jane.get({
            plain: true
        }));
    });

};