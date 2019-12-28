
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { name: 'farm Sourdough Bread' },
    { name: 'creamy Peanut Butter' },
    { name: 'applesauce' },
    { name: 'whole wheat bread' },
    { name: 'whole egg' },
    { name: 'avocado' },
    { name: 'sharp cheddar' },
    { name: 'ham' },
    { name: 'onion' },
    { name: 'mayonnaise' },
    { name: 'salt' },
    { name: 'pepper' },
  ])
};