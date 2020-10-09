exports.seed = function(knex) {
    return knex("resources").insert([
        {
            id: 1,
            task_name: "Fi11er",
            task_desc: "Filler Text Filler Text Filler Text",
            project_id: 1
            task_completed: false
        },
        {
            id: 2,
            resource_name: "2ext",
            resource_desc: "Filler Text Filler Text Filler Text",
            project_id: 2
            task_completed: false
        },
    ]);
  };
