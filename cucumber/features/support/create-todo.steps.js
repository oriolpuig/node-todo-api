const { BeforeAll, Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const World = require('../worlds/todoApiWorld');

var _url = 'http://localhost:2000/api/todos';
var _reply_body;
var _reply_statusCode;
var _world = null;

BeforeAll(function() {
    _world = new World();
})

Given('the API server is running', function (callback) {
    callback();
});

When('I request the server with:', function (dataTable, callback) {
    var json = {};
    dataTable.raw().forEach(function (i) {
        json[i[0]] = i[1];
    });

    _world.PostTodo(_url, json, callback, function (statusCode, json) {
        console.log('STATUS CODE: ' + statusCode);
        console.log('STATUS CODE: ' + JSON.stringify(json));
        _reply_body = json;
        _reply_statusCode = statusCode;
        callback();
    });
});

When('I request the server with {string}', function (string, callback) {
    _world.PostTodo(_url, { todo: string }, callback, function (statusCode, json) {
        console.log('STATUS CODE: ' + statusCode);
        console.log('STATUS CODE: ' + JSON.stringify(json));
        _reply_body = json;
        _reply_statusCode = statusCode;
        callback();
    });
});

When('I request the server with null', function (callback) {
    _world.PostTodo(_url, null, callback, function (statusCode, json) {
        console.log('STATUS CODE: ' + statusCode);
        console.log('STATUS CODE: ' + JSON.stringify(json));
        _reply_body = json;
        _reply_statusCode = statusCode;

        callback();
    });
});

Then('the reply status parameter should be {int}', function (int, callback) {
    if (int === 0) {
        expect(_reply_body.status).not.to.true;
    }
    if (int === 1) {
        expect(_reply_body.status).to.true;
    }

    callback();
});

Then('the reply should contain a status {int}', function (status, callback) {
    if (status === 200) {
        expect(_reply_statusCode).to.eql(200);
    }
    else {
        console.log('ERRORRRRRRR: ' + _reply_statusCode)
        expect(_reply_statusCode).to.eql(200);
    }

    callback();
});
