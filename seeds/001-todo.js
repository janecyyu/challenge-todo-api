exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        { title: "Shopping", description: "buy 5 apples" },
        { title: "Shopping", description: "buy 2 watermelons" },
        { title: "Studying", description: "Java" },
      ]);
    });
};
