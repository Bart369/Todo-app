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

todoController.create = (req,res) => {
  Todo.create({
    name: req.body.name,
    todo: req.body.todo,
    status: req.body.status,
    info: req.body.info
  }).then(todo =>{
    res.redirect(`/todo/${todo.id}`)
  }).catch(err =>{
    console.log(err).json({error:err})
  })
}



//The whole point of this is to redirect if the user goes straight to todo/id/edit
todoController.edit = (req,res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.status(200).render('todo-edit.ejs', {data: todo});
    }).catch(err => {
      console.log(err);
      res.status(500).json({error:err})
    })
}

todoController.update = (req,res) => {
  Todo.update({
    //the name of our inputs (in the todo-editse.ejs) is assigning the value to the properties (left of the colon)
    name: req.body.name,
    todo: req.body.todo,
    status: req.body.status,
    info: req.body.info
  }, req.params.id)
  .then(todo => {
    res.redirect(`/todo/${todo.id}`)
  }).catch(err => {
    console.log(err);
    res.status(500).json({error:err})
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

todoController.destroy = (req,res) => {
  Todo.delete(req.params.id)
    .then(() =>{
      res.redirect('/todo')
    }).catch(err =>{
      console.log(err).json({error:err})
    })
}

module.exports = todoController;
