const express = require('express');
const todoRoutes = express.Router();

const todoController = require('../controllers/todo-controller.js');

todoRoutes.get('/', todoController.index);
todoRoutes.get('/add', (req,res) =>{
  res.render('todo-add.ejs')
});
todoRoutes.post('/', todoController.create)


todoRoutes.get('/:id', todoController.show);
todoRoutes.get('/:id/edit', todoController.edit)
todoRoutes.put('/:id/edit', todoController.update);
todoRoutes.delete('/', todoController.destroy)
todoRoutes.delete('/:id', todoController.destroy)





module.exports = todoRoutes;




