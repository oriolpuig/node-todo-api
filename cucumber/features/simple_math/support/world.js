const { setWorldConstructor } = require('cucumber');

class CustomWorld {
    constructor() {
        this.variable = 0;
    }

    setTo(number) {
        this.variable = number;
    }

    incrementBy(number) {
        this.variable += number;
    }
    PostTodo(url, todo, cucumber_callback, custom_callback) {
        console.log('TESTTT!')
    }

}

setWorldConstructor(CustomWorld);
