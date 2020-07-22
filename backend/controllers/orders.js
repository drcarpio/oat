const ordersRouter = require('express').Router()
const Order = require('../models/order')
const User = require('../models/user')

ordersRouter.get('/', async (request, response) => {
    const orders = await Order.find({})
    response.json(orders)
})

ordersRouter.get('/:id', async (request, response) => {
    const order = await Order.findById(request.params.id)
    if (order) {
        response.json(order)
    } else {
        response.status(404).end()
    }
})

ordersRouter.post('/', async (request, response) => {
    const body = request.body

    const user = await User.findById(body.userId)

    const order = new Order({
        date: new Date(),
        price: body.price,
        bowls: body.bowls || [],
        user: user._id,
    })

    const savedOrder = await order.save()
    user.orderHistory = user.orderHistory.concat(savedOrder._id)
    await user.save()
    response.json(savedOrder)
})

ordersRouter.delete('/:id', async (request, response) => {
    await Order.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

// no reason to add put functionality for orders

module.exports = ordersRouter
