import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoForm from './TodoForm';

class TodoList extends Component {
    constructor() {
        super();
        this.addNewTodo = this.addNewTodo.bind(this);
        this.handleListItemClick = this.handleListItemClick.bind(this);
        this.renderTodos = this.renderTodos.bind(this);
        this.handleNewTodoClick = this.handleNewTodoClick.bind(this);
    }

    componentWillMount() {
        this.props.getTodos();
    }

    handleListItemClick(id, isCompleted) {
        this.props.updateTodo(id, isCompleted)
            .then(() => {
                this.props.getTodos();
            });
    }

    handleListItemRemoveClick(id) {
        this.props.removeTodo(id)
            .then(() => {
                this.props.getTodos();
            });
    }

    handleNewTodoClick(todo) {
        this.props.addNewTodo(todo)
            .then(() => {
                this.props.getTodos();
            });
    }

    renderTodos() {
        return this.props.todos.map((todo, idx) => {
            return (
                <TodoListItem
                    key={idx} {...todo}
                    onItemClick={(id, isCompleted) => this.handleListItemClick(id, isCompleted)}
                    onRemoveClick={(id) => this.handleListItemRemoveClick(id)}
                />
            );
        });
    }

    addNewTodo() {
        return <TodoForm onSubmitClick={(todo) => this.handleNewTodoClick(todo)} />
    }

    render() {
        return (
            <div style={{ display: 'table' }}>
                <div style={{ display: 'table' }}>
                    {this.props.todos.length > 0 && this.renderTodos()}
                </div>
                <div style={{ display: 'table' }}>
                    {this.addNewTodo()}
                </div>
            </div>
        );
    }
}

export default TodoList;
