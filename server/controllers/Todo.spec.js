import "babel-polyfill";
import should from 'should';
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../';

const Todo = mongoose.model('Todo');
const agent = request.agent(app);

describe('Todo CRUD integration test', () => {
    describe('Get all todo', () => {

        before(done => {
            var newTodo = { todo: "Todo from hooks for GetAll" };
            agent
                .post('/api/todos')
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
});