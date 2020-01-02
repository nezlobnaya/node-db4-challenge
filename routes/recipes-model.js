const db = require('../data/dbConfig')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeById,
    getAllRecipesByIngredient,
    getIngredients,
    getIngredientById,
}

function getRecipes() {
    return db('recipes')
}

function getIngredients() {
    return db('ingredients')
}

function getIngredientById(id) {
    return db('ingredients').where({ id }).first()
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

function getAllRecipesByIngredient(ingredient_id) {
    return db('recipes as r')
        .select('r.recipe_name')
        .join('ingredients as i', 'i.id', 'ri.ingredient_id')
        .join('recipes_ingredients as ri', 'ri.recipe_id', 'r.id' )
        .where('ri.ingredient_id', ingredient_id)
}


