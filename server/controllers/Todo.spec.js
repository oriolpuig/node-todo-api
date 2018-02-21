import "babel-polyfill";
import should from 'should';
import request from 'supertest';
import mongoose from 'mongoose';
import { server } from '../index';

const Todo = mongoose.model('Todo');
const agent = request.agent(server);

describe('Todo CRUD integration test', () => {
    after(function (done) {
        server.close();
        done();
    });

    describe('Get all todos', () => {
        before(done => {
            var newTodo = { todo: "Todo from hooks for GetAll" };
            agent
                .post('/api/todos')
                .send(newTodo)
                .end(() => done());
        });

        it('Should get status equal success and array of todo', done => {
            agent
                .get('/api/todos')
                .expect(200)
                .end((err, results) => {
                    results.body.status.should.equal(true);
                    done();
                });
        });
    });

    describe('Post a todo', () => {
        var id = 0;

        it('Should allow post a todo and return _id', done => {
            const params = { todo: 'Todo for testing' };
            agent
                .post('/api/todos')
                .send(params)
                .expect(200)
                .end((err, result) => {
                    id = result.body.todo._id;
                    result.body.todo.completed.should.equal(false);
                    result.body.todo.should.have.property('_id');
                    done();
                });
        });

        after(done => {
            agent
                .delete(`/api/todos/${id}`)
                .end(done);
        });
    });

    describe('Delete a todo', () => {
        let id = null;
        before(done => {
            const params = { todo: 'Todo from hooks to delete' };
            agent
                .post('/api/todos')
                .send(params)
                .end((err, result) => {
                    id = result.body.todo._id;
                    done();
                })
        });

        it('Should delete the todo by _id', done => {
            agent
                .delete(`/api/todos/${id}`)
                .end((err, result) => {
                    result.body.status.should.equal(true);
                    done();
                });
        });
    })

    describe('Update a todo', () => {
        let id = 0;
        before(done => {
            const newTodo = { todo: 'Todo from hooks to update' };
            agent
                .post('/api/todos')
                .send(newTodo)
                .end((err, result) => {
                    id = result.body.todo._id;
                    done();
                });
        });

        it('Should update the completed status of todo by _id to true', done => {
            const params = { completed: true };
            agent
                .put(`/api/todos/${id}`)
                .send(params)
                .end((err, result) => {
                    result.body.status.should.equal(true);
                    done();
                });
        });

        after(done => {
            agent
                .delete(`/api/todos/${id}`)
                .end(done);
        });
    })
});