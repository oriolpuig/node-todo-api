import TodoModel from '../models/Todo';

class TodoCtrl {
    GetTodos(req, res, next) {
        TodoModel.find((err, todos) => {
            if (err) {
                res.json({ status: false, error: 'Something went wrong' });
                return;
            }
            res.json({ status: true, todos: todos });
        });
    }

    PostTodo(req, res, next) {
        const newTodo = new TodoModel(req.body);
        newTodo.save((err, todo) => {
            if (err) {
                res.json({ status: false, error: err.message });
                return;
            }
            res.json({ status: true, todo: todo });
        });
    }

    PutTodo(req, res, next) {
        const completed = req.body.completed;

        TodoModel.findById(req.params.todo_id, (err, todo) => {
            todo.completed = completed;
            todo.save((err, todo) => {
                if (err) {
                    res.json({ status: false, error: "Status not updated" });
                }
                res.json({ status: true, message: "Status updated successfully" });
            });
        });
    }

    DeleteTodo(req, res, next) {
        TodoModel.remove({ _id: req.params.todo_id }, (err, result) => {
            if (err) {
                res.json({ status: false, error: "Deleting todo is not successfull" });
            }
            res.json({ status: true, message: "Todo deleted successfully" });
        });
    }
}

export default new TodoCtrl();