
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { recipe_name: 'Peanut butter sandwich', prep_time: '2 min'},
    { recipe_name: 'Avocado egg sandwich', prep_time: '5 min'},
  ])
};
