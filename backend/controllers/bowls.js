const bowlsRouter = require('express').Router()
const Bowl = require('../models/bowl')

bowlsRouter.get('/', async (request, response) => {
    const bowls = await Bowl.find({})
    response.json(bowls)
})

bowlsRouter.get('/:id', (request, response, next) => {
    Bowl.findById(request.params.id)
        .then((bowl) => {
            if (bowl) {
                response.json(bowl)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

bowlsRouter.post('/', (request, response, next) => {
    const body = request.body

    const bowl = new Bowl({
        oatType: body.oatType,
        milkType: body.milkType,
        toppings: body.toppings,
        featured: body.featured || false,
        onMenu: body.onMenu || false,
    })

    bowl.save()
        .then((savedBowl) => {
            response.json(savedBowl)
        })
        .catch((error) => next(error))
})

bowlsRouter.delete('/:id', (request, response, next) => {
    Bowl.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

// TODO: implement logic for toggling featured / onMenu
bowlsRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const bowl = {
        oatType: body.oatType,
        milkType: body.milkType,
        toppings: body.toppings,
        featured: body.featured,
        onMenu: body.onMenu,
    }

    Bowl.findByIdAndUpdate(request.params.id, bowl, { new: true })
        .then((updatedBowl) => {
            response.json(updatedBowl)
        })
        .catch((error) => next(error))
})

module.exports = bowlsRouter
