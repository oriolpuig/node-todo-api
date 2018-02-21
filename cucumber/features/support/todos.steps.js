const { BeforeAll, Given, When, Then } = require('cucumber');
const { expect } = require('chai');
const World = require('../worlds/todoApiWorld');

var _url = 'http://localhost:2000/api/todos';
var _reply_body;
var _reply_statusCode;
var _world = null;

BeforeAll(function () {
    _world = new World();
});

Given('the API server is running', function (callback) {
    callback();
});

Given('the API server is running and has todos', function (callback) {
    _world.GetTodos(_url, callback, function (statusCode, json) {
        _reply_body = JSON.parse(json);
        _reply_statusCode = statusCode;

        callback();
    });
});

When('I request the server with:', function (dataTable, callback) {
    var json = {};
    dataTable.raw().forEach(function (i) {
        json[i[0]] = i[1];
    });

    _world.PostTodo(_url, json, callback, function (statusCode, json) {
        _reply_body = json;
        _reply_statusCode = statusCode;
        callback();
    });
});

When('I request the server with {string}', function (string, callback) {
    _world.PostTodo(_url, { todo: string }, callback, function (statusCode, json) {
        _reply_body = json;
        _reply_statusCode = statusCode;
        callback();
    });
});

When('I request the server with null', function (callback) {
    _world.PostTodo(_url, null, callback, function (statusCode, json) {
        _reply_body = json;
        _reply_statusCode = statusCode;

        callback();
    });
});

When('I request the server with HttpGet', function (callback) {
    _world.GetTodos(_url, callback, function (statusCode, json) {
        _reply_body = JSON.parse(json);
        _reply_statusCode = statusCode;

        callback();
    });
});

When('I request the server with HttpPut', function (callback) {
    console.log(_reply_body);
    var first = _reply_body.todos[0];
    first.completed = !first.completed;

    _world.UpdateTodo(_url, first, callback, function (statusCode, json) {
        console.log(json);
        _reply_body = JSON.parse(json);
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
        expect(_reply_statusCode).to.eql(200);
    }

    callback();
});
