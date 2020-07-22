const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id)
    if (user) {
        response.json(user)
    } else {
        response.status(404).end()
    }
})

usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        name: body.name || '',
        passwordHash,
        savedBowls: [],
        orderHistory: [],
    })

    const savedUser = await user.save()
    response.json(savedUser)
})

usersRouter.delete('/:id', async (request, response) => {
    await User.findByIdAndRemove(request.params.id)
    response.status(204).end()
})

/* TODO eventually: add option to change name and password of user
usersRouter.put('/:id', (request, response) => {
    const body = request.body

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = { name: body.name, passwordHash }

    const updatedUser = await User.findByIdAndUpdate(request.params.id, user, { new: true })
    response.json(updatedUser)
})
*/

module.exports = usersRouter
