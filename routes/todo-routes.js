const express = require('express');
const todoRoutes = express.Router();

const todoController = require('../controllers/todo-controller.js');

todoRoutes.get('/', todoController.index);
todoRoutes.get('/:id', todoController.show);





module.exports = todoRoutes;


