import BaseService from './baseService';

class TodoService extends BaseService {
    constructor() {
        super();
    }

    addNewTodo(newTodo) {
        const body = JSON.stringify(newTodo);

        return fetch(`${this.BaseAPIUrl}todos`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    getTodos() {
        return fetch(`${this.BaseAPIUrl}todos`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    removeTodo(id) {
        return fetch(`${this.BaseAPIUrl}todos/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }

    updateTodo(id, isCompleted) {
        const body = JSON.stringify({ completed: isCompleted });

        return fetch(`${this.BaseAPIUrl}todos/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body,
        })
            .then(this.checkStatus)
            .then(this.parseJSON)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error));
    }
}

export default new TodoService();