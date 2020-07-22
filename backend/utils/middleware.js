const logger = require('./logger')
const morgan = require('morgan')
const jwt = require('jsonwebtoken')

morgan.token('body', function (request, response) {
    if (request.method === 'POST') {
        return JSON.stringify({ ...request.body, password: '' })
    } else {
        return ''
    }
})

const requestLogger = morgan(
    ':method :url :status :res[content-length] - :response-time ms :body'
)

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = jwt.verify(
            authorization.substring(7),
            process.env.SECRET
        )
    } else {
        request.token = null
    }
    next()
}

const unknownEndpoint = (request, response, next) => {
    response.status(404).send({ error: 'unknown endpoint' })
    next()
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    } else if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token',
        })
    }

    logger.error(error.message)
    next(error)
}

module.exports = {
    requestLogger,
    tokenExtractor,
    unknownEndpoint,
    errorHandler,
}
