exports.up = function (knex) {
  return knex.schema.createTable("todos", (tbl) => {
    tbl.integer("id").unique();
    tbl.string("title").notNullable();
    tbl.string("description").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todos");
};
