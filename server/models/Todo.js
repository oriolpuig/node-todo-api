import mongoose from 'mongoose';
const { Schema } = mongoose;

const TodoSchema = new Schema({
    todo: String,
    completed: { type: Boolean, default: false },
    Date: { type: Date, default: Date.now }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;
