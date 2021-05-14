const db = require("../db/db-config");

module.exports = { find, add, update, remove };

async function add(todo) {
  await db("todos").insert(todo);
  return todo;
}

function find() {
  return db("todos");
}

function update(id, changes) {
  return db("todos").where({ id }).update(changes);
}

function remove(id) {
  return db("todos").where({ id }).del();
}
