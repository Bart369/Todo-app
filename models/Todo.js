const db = require('../db/config.js')

const Todo = {};

Todo.findAll = () =>{
  return db.query('SELECT * FROM list')
};

Todo.create = todo => db.one(`
  INSERT INTO list (
    name,
    todo,
    status,
    info
    ) VALUES (
    $/name/,
    $/todo/,
    $/status/,
    $/info/
    )
    Returning *`,
    todo)

Todo.findById = id => {
  return db.one(`
    SELECT * FROM list WHERE id = $1`, [id])
}

Todo.update = (todo,id) => {
  return db.one(
    `UPDATE list SET
    name = $1,
    todo = $2,
    status = $3,
    info = $4
    WHERE id = $5
    RETURNING * `,
    [todo.name, todo.todo, todo.status, todo.info, id])
}

Todo.delete = id => {
  return db.none(
    `DELETE FROM list WHERE id = $1`, [id])
}

module.exports = Todo;
