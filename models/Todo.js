const db = require('../db/config.js')

const Todo = {};

Todo.findAll = () =>{
  return db.query('SELECT * FROM list')
};

Todo.findById = id => {
  return db.one(`
    SELECT * FROM list WHERE id = $1`, [id])
}

module.exports = Todo;
