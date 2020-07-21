const logger = require('./logger')
const morgan = require('morgan')

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

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
}
