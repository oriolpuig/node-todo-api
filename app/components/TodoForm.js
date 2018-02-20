import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        const newTodo = {};
        newTodo.todo = document.getElementById('todo-name').value;
        if (newTodo.todo !== '') {
            this.props.onSubmitClick(newTodo);
        }
    }

    render() {
        return (
            <div style={{ display: 'table' }}>
                <input id="todo-name" type="text" />
                <button
                    onClick={() => this.handleSubmit()}
                >SAVE</button>
            </div>
        );
    }
}

export default TodoForm;
