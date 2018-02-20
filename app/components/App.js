import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import TodoListContainer from '../containers/TodoList';

const App = props => (
    <Router history={props.history}>
        <Switch>
            <Route path="/" component={TodoListContainer} />
        </Switch>
    </Router>
);

export default App;
