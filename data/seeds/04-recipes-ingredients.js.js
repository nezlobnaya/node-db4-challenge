

exports.seed = function(knex, Promise) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 1, quantity: '24 Oz' },
    { recipe_id: 1, ingredient_id: 2, quantity: '1.5 tablespoons' },
    { recipe_id: 1, ingredient_id: 3, quantity: '1.5 tablespoons' },
    { recipe_id: 2, ingredient_id: 4, quantity: '2 slices' },
    { recipe_id: 2, ingredient_id: 5, quantity: '1' },
    { recipe_id: 2, ingredient_id: 6, quantity: '1/4' },
    { recipe_id: 2, ingredient_id: 7, quantity: '1 slice' },
    { recipe_id: 2, ingredient_id: 8, quantity: '1 slice' },
    { recipe_id: 2, ingredient_id: 9, quantity: '3 slices' },
    { recipe_id: 2, ingredient_id: 10, quantity: '2 tsp' },
    { recipe_id: 2, ingredient_id: 11, quantity: 'to taste' },
    { recipe_id: 2, ingredient_id: 12, quantity: 'to taste' },
  ]);
};
