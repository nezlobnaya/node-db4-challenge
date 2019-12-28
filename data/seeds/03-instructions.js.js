
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('instructions').insert([
    { step: 'Spread peanut butter on one slice of bread, and applesauce on the other slice', recipe_id: 1 },
    { step: 'Place them together, cut in half, and serve. Enjoy!', recipe_id: 1 },
    { step: 'Toast bread and heat a frying pan over medium high', recipe_id: 2 },
    { step: 'Spray with non-stick cooking spray and add egg', recipe_id: 2 },
    { step: 'After about 2 minutes, flip the egg and turn off the heat', recipe_id: 2 },
    { step: 'Season with salt and pepper to taste and top with cheese slice', recipe_id: 2 },
    { step: 'Remove from pan and place pan back on medium-high heat', recipe_id: 2 },
    { step: 'Cook the ham for about 60 seconds per side then place on top of the egg/cheese', recipe_id: 2 },
    { step: 'Spread avocado on one side of the toast and top with onion slices', recipe_id: 2 },
    { step: 'Spread mayo on the other piece of toast and top with egg/cheese/ham. Enjoy!', recipe_id: 2 },
  ])
};
