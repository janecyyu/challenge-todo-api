exports.up = function (knex) {
  return knex.schema.createTable("todos", (tbl) => {
    tbl.increments();
    tbl.string("title").notNullable();
    tbl.string("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todos");
};
