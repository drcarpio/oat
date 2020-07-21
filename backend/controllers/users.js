const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', (request, response) => {
    User.find({}).then((users) => {
        response.json(users)
    })
})

usersRouter.get('/:id', (request, response, next) => {
    User.findById(request.params.id)
        .then((user) => {
            if (user) {
                response.json(user)
            } else {
                response.status(404).end()
            }
        })
        .catch((error) => next(error))
})

usersRouter.post('/', (request, response, next) => {
    const body = request.body

    const user = new User({
        username: body.username,
        name: body.name || '',
        password: body.password,
        savedBowls: [],
        orderHistory: [],
    })

    user.save()
        .then((savedUser) => {
            response.json(savedUser)
        })
        .catch((error) => next(error))
})

usersRouter.delete('/:id', (request, response, next) => {
    User.findByIdAndRemove(request.params.id)
        .then(() => {
            response.status(204).end()
        })
        .catch((error) => next(error))
})

usersRouter.put('/:id', (request, response, next) => {
    const body = request.body

    const user = {
        name: body.name,
    }

    User.findByIdAndUpdate(request.params.id, user, { new: true })
        .then((updatedUser) => {
            response.json(updatedUser)
        })
        .catch((error) => next(error))
})

module.exports = usersRouter
