const express = require('express')

const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params

    Recipes.getRecipeById(id)
    .then(recipe => {
        if (recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({ message: 'Could not find recipe with given id.' })
        }
    })
    .catch (err => {
        next(err)
    })
})

router.get('/:id/ingredients', (req, res, next) => {
    const { id } = req.params;

    Recipes.getShoppingList(id)
    .then(ingredients => {
        if (ingredients.length) {
            res.json(ingredients)
        } else {
            res.status(404).json({
                message: 'Could not find ingredients for given recipe'
            })
        }
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
})

router.get('/:id/instructions', (req, res, next) => {
    const { id } = req.params;

    Recipes.getInstructions(id)
    .then(instructions => {
        if (instructions.length) {
            res.json(instructions)
        } else {
            res.status(404).json({
                message: 'Could not find instructions for given recipe'
            })
        }
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
})

module.exports = router;