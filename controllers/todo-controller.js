const  Todo = require('../models/todo.js');
const todoController = {};

todoController.index = (req,res) => {
  Todo.findAll()
  .then((todo) => {
    console.log(todo);
    res.render('todo-index.ejs', {todo});
  }).catch(err => {
    console.log(err);
    res.status(500).json({
      message: 'Not Found!',
      error: err
    })
  })
}

todoController.show = (req,res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      console.log(todo);
      res.status(200).render('todo-single.ejs', {data : todo})
     }).catch(err => {
    console.log(err).json({error:err})
  })
}

module.exports = todoController;
