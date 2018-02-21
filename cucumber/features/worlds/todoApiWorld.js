var request = require('request');

class TodoApiWorld {
    constructor() {
        this._url = null;
        this._cucumberCallback = null;
        this._customCallback = null;

        this._resolveResponses = this._resolveResponses.bind(this);
    }

    GetTodos(url, cucumber_callback, custom_callback) {
        this._url = url;
        this._cucumberCallback = cucumber_callback;
        this._customCallback = custom_callback;
        request({
            uri: url,
            method: 'GET',
        }, this._resolveResponses);
    }

    PostTodo(url, todo, cucumber_callback, custom_callback) {
        this._url = url;
        this._cucumberCallback = cucumber_callback;
        this._customCallback = custom_callback;
        request({
            uri: url,
            method: 'POST',
            json: todo
        }, this._resolveResponses);
    }

    _resolveResponses(error, response, body) {
        if (error) {
            return this._cucumberCallback(error);
        }

        try {
            this._customCallback(response.statusCode, body);
        } catch (e) {
            console.log('Error parsing JSON reply:');
            console.log('url was: ' + this._url);
            console.log('reply is: ', body);
            console.log('--- end of reply ---')
            return this._cucumberCallback(e);
        }
    }
}

module.exports = TodoApiWorld;
