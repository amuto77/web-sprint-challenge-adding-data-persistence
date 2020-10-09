exports.seed = function(knex) {
    return knex("projects").insert([
        {
          id: 1,
          project_name: "First",
          project_desc: "1 Filler Text Filler Text Filler Text Filler Text Filler Text"
          completed: false
        },
        {
            id: 2,
            project_name: "Second",
            project_desc: "2 Filler Text Filler Text Filler Text Filler Text Filler Text",
            completed: false
        },
        {
            id: 3,
            project_name: "Third",
            project_desc: "3 Filler Text Filler Text Filler Text Filler Text Filler Text",
            completed: false
        }
    ]);
  };
