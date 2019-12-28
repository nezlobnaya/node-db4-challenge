const db = require('../data/dbConfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeById,
}

function getRecipes() {
    return db('recipes')
}

function getRecipeById(id) {
    return db('recipes').where({ id }).first()
}

function getShoppingList(recipe_id) {
    return db('ingredients as i')
        .select('i.name', 'ri.quantity')
        .join('recipes_ingredients as ri', 'ri.ingredient_id', 'i.id' )
        .where('ri.recipe_id', recipe_id)
}

function getInstructions(recipe_id) {
    return db('instructions as ins')
        .select('ins.step' )
        .join('recipes as r', 'r.id', 'ins.recipe_id')
        .where('r.id', recipe_id)
}
