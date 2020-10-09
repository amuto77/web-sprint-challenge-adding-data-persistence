exports.seed = function(knex) {
    return knex("resources").insert([
        {
            id: 1,
            resource_name: "Filler",
            resource_desc: "Filler Text Filler Text Filler Text"
        {
            id: 2,
            resource_name: "Text",
            resource_desc: "Filler Text Filler Text Filler Text"
        },
    ]);
  };