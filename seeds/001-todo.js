exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("todos").insert([
        { id: "1", title: "Shopping", description: "buy 5 apples" },
        { id: "2", title: "Shopping", description: "buy 2 watermelons" },
        { id: "3", title: "Studying", description: "Java" },
      ]);
    });
};
