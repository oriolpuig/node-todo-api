import TodoService from '../../services/todoService';

/* ACTION TYPES
================================================================================================= */

const ADD_TODO = 'todos/ADD_TODO';
const ADD_TODO_SUCCESS = 'todos/ADD_TODO_SUCCESS';
const ADD_TODO_FAIL = 'todos/ADD_TODO_FAIL';

const GET_TODOS = 'todos/GET_TODOS';
const GET_TODOS_SUCCESS = 'todos/GET_TODOS_SUCCESS';
const GET_TODOS_FAIL = 'todos/GET_TODOS_FAIL';

const REMOVE_TODO = 'todos/REMOVE_TODO';
const REMOVE_TODO_SUCCESS = 'todos/REMOVE_TODO_SUCCESS';
const REMOVE_TODO_FAIL = 'todos/REMOVE_TODO_FAIL';

const UPDATE_TODO = 'todos/UPDATE_TODO';
const UPDATE_TODO_SUCCESS = 'todos/UPDATE_TODO_SUCCESS';
const UPDATE_TODO_FAIL = 'todos/UPDATE_TODO_FAIL';

/* REDUCER
================================================================================================= */

const initialState = {
    isLoading: false,
    list: [],
    current: null,
    error: '',
};

export default function reducer(state = initialState, action = {}) {
    const { type } = action;

    switch (type) {
        case ADD_TODO:
            return { ...state, isLoading: true };
        case ADD_TODO_SUCCESS:
            return { ...state, isLoading: false };
        case ADD_TODO_FAIL:
            return { ...state, isLoading: false, error: action.error };

        case GET_TODOS:
            return { ...state, isLoading: true, list: [], current: null, error: '' };
        case GET_TODOS_SUCCESS:
            return { ...state, isLoading: false, list: action.result.todos };
        case GET_TODOS_FAIL:
            return { ...state, isLoading: false, error: action.error };

        case UPDATE_TODO:
            return { ...state, isLoading: true, error: '' };
        case UPDATE_TODO_SUCCESS:
            return { ...state, isLoading: false };
        case UPDATE_TODO_FAIL:
            return { ...state, isLoading: false, error: action.error };

        case REMOVE_TODO:
            return { ...state, isLoading: true, error: '' };
        case REMOVE_TODO_SUCCESS:
            return { ...state, isLoading: false };
        case REMOVE_TODO_FAIL:
            return { ...state, isLoading: false, error: action.error };


        default:
            return state;
    }
}

/* ACTIONS
================================================================================================= */

export function addNewTodo(newTodo) {
    return {
        types: [ADD_TODO, ADD_TODO_SUCCESS, ADD_TODO_FAIL],
        promise: () => TodoService.addNewTodo(newTodo),
    }
}

export function getTodos() {
    return {
        types: [GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_FAIL],
        promise: () => TodoService.getTodos(),
    }
}

export function removeTodo(id) {
    return {
        types: [REMOVE_TODO, REMOVE_TODO_SUCCESS, REMOVE_TODO_FAIL],
        promise: () => TodoService.removeTodo(id),
    }
}

export function updateTodo(id, isCompleted) {
    return {
        types: [UPDATE_TODO, UPDATE_TODO_SUCCESS, UPDATE_TODO_FAIL],
        promise: () => TodoService.updateTodo(id, isCompleted),
    }
}
