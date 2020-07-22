const bowlsRouter = require('express').Router()
const Bowl = require('../models/bowl')

bowlsRouter.get('/', async (request, response) => {
    const bowls = await Bowl.find({})
    response.json(bowls)
})

bowlsRouter.get('/:id', async (request, response) => {
    const bowl = Bowl.findById(request.params.id)
    if (bowl) {
        response.json(bowl)
    } else {
        response.status(404).end()
    }
})

bowlsRouter.post('/', async (request, response) => {
    const body = request.body

    const bowl = new Bowl({
        oatType: body.oatType,
        milkType: body.milkType,
        toppings: body.toppings,
        featured: body.featured || false,
        onMenu: body.onMenu || false,
    })

    const savedBowl = await bowl.save()
    response.json(savedBowl)
})

bowlsRouter.delete('/:id', async (request, response) => {
    await Bowl.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

// TODO: implement async logic for toggling featured / onMenu
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
