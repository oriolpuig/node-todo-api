var request = require('request');

class PostTodoApiWorld {
    PostTodo(url, todo, cucumber_callback, custom_callback) {
        request({
            uri: url,
            method: 'POST',
            json: todo
        }, function (error, response, body) {
            if (error) {
                return cucumber_callback(error);
            }

            try {
                custom_callback(response.statusCode, body);
            } catch (e) {
                console.log('Error parsing JSON reply:');
                console.log('url was: ' + url);
                console.log('reply is: ', body);
                console.log('--- end of reply ---')
                return cucumber_callback(e);
            }
        });
    }
}

module.exports = PostTodoApiWorld;
