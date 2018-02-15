import TodoModel from '../models/Todo';

class TodoCtrl {
    GetTodos(req, res, next) {
        TodoModel.find((err, todos) => {
            if (err) {
                res.json({ status: false, error: 'Something went wrong' });
                return;
            }
            res.json({ status: true, todo: todos });
        });
    }
}

export default new TodoCtrl();