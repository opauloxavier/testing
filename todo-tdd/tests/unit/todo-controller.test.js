const TodoController = require('../../controller/todo-controller');
const TodoModel = require('../../model/todo.model');
const httpMocks = require('node-mocks-http');
const newTodo = require('../mock-data/new-todo.json');

TodoModel.create = jest.fn();

describe('TodoController.createTodo', () => {
    it('should have a  createTodo', () => {
        expect(typeof TodoController.createTodo).toBe('function');
    });
    it('should call Todomodel.create', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = null;
        req.body = newTodo;

        TodoController.createTodo(req, res, next);
        expect(TodoModel.create).toBeCalledWith(newTodo);
    });
});
