const express = require('express')
const Ingredients = require('./recipes-model')



const router = express.Router()


router.get('/', (req, res, next) => {
    Ingredients.getIngredients()
    .then(ingredients => {
        res.json(ingredients)
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id', (req, res, next) => {
    const { id } = req.params

    Ingredients.getIngredientById(id)
    .then(ingredient => {
        if (ingredient) {
            res.json(ingredient);
        } else {
            res.status(404).json({ message: 'Could not find ingredient with given id.' })
        }
    })
    .catch (err => {
        next(err)
    })
})

router.get('/:id/recipes', (req, res, next) => {
    const { id } = req.params;

    Ingredients.getAllRecipesByIngredient(id)
    .then(recipes => {
        if (recipes.length) {
            res.json(recipes)
        } else {
            res.status(404).json({
                message: 'Could not find recipes for given ingredient'
            })
        }
    })
    .catch(err => {
        console.log(err)
        next(err)
    })
})

module.exports = router;