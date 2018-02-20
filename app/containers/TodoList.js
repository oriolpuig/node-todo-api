/* eslint-disable import/no-extraneous-dependencies */
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import { addNewTodo, getTodos, removeTodo, updateTodo } from '../redux/reducers/todos';

const mapStateToProps = (state) => ({
    todos: state.todos.list,
});

export default connect(mapStateToProps, { addNewTodo, getTodos, removeTodo, updateTodo })(TodoList);
