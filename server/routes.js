import TodoCtrl from './controllers/TodoCtrl';

export default app => {
    app.get('/api/todos', TodoCtrl.GetTodos);
} 
