const db = require("../db/db-config");

module.exports = { find, add };

async function add(todo) {
  await db("todos").insert(todo);

  return todo;
}

function find() {
  return db("todos");
}

// async function remove(address) {
//   await db("vac").where({ address: address }).del();
//   return db("students").where({ address }).del();
// }
