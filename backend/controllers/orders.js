const ordersRouter = require('express').Router()
const Order = require('../models/order')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

ordersRouter.get('/', async (request, response) => {
    const orders = await Order.find({}).populate('user', {
        username: 1,
        name: 1,
    })
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

    if (!request.token || !request.token.id) {
        return response.status(401).json({ error: 'token missing or invalid ' })
    }
    const user = await User.findById(request.token.id)

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
