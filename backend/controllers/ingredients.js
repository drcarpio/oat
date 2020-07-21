const ingredientsRouter = require('express').Router()
const Ingredient = require('../models/ingredient')

ingredientsRouter.get('/', (request, response) => {
    Ingredient.find({}).then((ingredients) => {
        response.json(ingredients)
    })
})

ingredientsRouter.get('/:id', (request, response, next) => {
    Ingredient.findById(request.params.id)
        .then((ingredient) => {
            if (ingredient) {
                response.json(ingredient)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

module.exports = ingredientsRouter
