import TodoCtrl from './controllers/TodoCtrl';

export default app => {
    app.get('/api/todos', TodoCtrl.GetTodos);
    app.post('/api/todos', TodoCtrl.PostTodo);
    app.put('/api/todos/:todo_id', TodoCtrl.PutTodo);
    app.delete('/api/todos/:todo_id', TodoCtrl.DeleteTodo);
} 
