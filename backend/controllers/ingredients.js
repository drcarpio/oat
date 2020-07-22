const ingredientsRouter = require('express').Router()
const Ingredient = require('../models/ingredient')

ingredientsRouter.get('/', async (request, response) => {
    const ingredients = await Ingredient.find({})
    response.json(ingredients)
})

ingredientsRouter.get('/:id', async (request, response) => {
    const ingredient = await Ingredient.findById(request.params.id)
    if (ingredient) {
        response.json(ingredient)
    } else {
        response.status(404).end()
    }
})

module.exports = ingredientsRouter
