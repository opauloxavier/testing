'use strict';
const TodoModel = require('../model/todo.model');

exports.createTodo = (req, res, next) => {
    const { title, done } = req;
    TodoModel.create(req.body);
};
