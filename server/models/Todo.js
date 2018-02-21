import mongoose from 'mongoose';
const { Schema } = mongoose;

const TodoSchema = new Schema({
    todo: { type: String, required: true },
    completed: { type: Boolean, default: false },
    Date: { type: Date, default: Date.now }
});

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;
