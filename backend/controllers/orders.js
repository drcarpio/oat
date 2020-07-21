const ordersRouter = require('express').Router()
const Order = require('../models/order')

ordersRouter.get('/', (request, response) => {
    Order.find({}).then((orders) => {
        response.json(orders)
    })
})

ordersRouter.get('/:id', (request, response, next) => {
    Order.findById(request.params.id)
        .then((order) => {
            if (order) {
                response.json(order)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

ordersRouter.post('/', (request, response, next) => {
    const body = request.body

    const order = new Order({
        date: new Date(),
        price: body.price, // || TODO: calculate from body.array values OR implement that on frontend and just send that value with request
        bowls: body.bowls,
        user: body.user,
    })

    order
        .save()
        .then((savedOrder) => {
            response.json(savedOrder)
        })
        .catch((error) => next(error))
})

ordersRouter.delete('/:id', (request, response, next) => {
    Order.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

// no reason to add put functionality for orders

module.exports = ordersRouter
