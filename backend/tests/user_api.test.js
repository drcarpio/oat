const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./user_test_helper')
const app = require('../app')
const api = supertest(app)
const User = require('../models/user')

beforeEach(async () => {
    await User.deleteMany({})

    const userObjects = helper.initialUsers.map((user) => new User(user))
    const promiseArray = userObjects.map((user) => user.save())
    await Promise.all(promiseArray)
})

describe('when there are initially some users saved', () => {
    test('users are returned as json', async () => {
        await api
            .get('/api/users')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all users are returned', async () => {
        const response = await api.get('/api/users')

        expect(response.body).toHaveLength(helper.initialUsers.length)
    })

    test('a specific user is within the returned users', async () => {
        const response = await api.get('/api/users')
        const contents = response.body.map((r) => r.username)

        expect(contents).toContain('Ludicolo')
    })
})

describe('viewing a specific user', () => {
    test('succeeds with a valid id', async () => {
        const usersAtStart = await helper.usersInDb()
        const userToView = usersAtStart[0]

        const resultUser = await api
            .get(`/api/users/${userToView.id}`)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        expect(resultUser.body).toEqual(userToView)
    })

    test('fails with status code 404 if user does not exist', async () => {
        const validNonExistingId = await helper.nonExistingId()
        console.log(validNonExistingId)

        await api.get(`/api/users/${validNonExistingId}`).expect(404)
    })

    test('fails with status code 400 if id is invalid', async () => {
        const invalidId = 'hello'

        await api.get(`/api/users/${invalidId}`).expect(400)
    })
})

describe('adding a new user', () => {
    test('succeeds with valid data', async () => {
        const newUser = {
            username: 'Seedot',
            name: 'Test User',
            password: 'button',
        }
        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(helper.initialUsers.length + 1)

        const contents = usersAtEnd.map((u) => u.username)
        expect(contents).toContain('Seedot')
    })

    test('fails with status code 400 if data invalid', async () => {
        const newUser = {
            name: 'Test User',
            password: 'button',
        }

        await api.post('/api/users').send(newUser).expect(400)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(helper.initialUsers.length)
    })
})

describe('deletion of a user', () => {
    test('succeeds with status code 204 if id is valid', async () => {
        const usersAtStart = await helper.usersInDb()
        const userToDelete = usersAtStart[0]

        await api.delete(`/api/users/${userToDelete.id}`).expect(204)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd).toHaveLength(helper.initialUsers.length - 1)

        const contents = usersAtEnd.map((u) => u.username)

        expect(contents).not.toContain(userToDelete.username)
    })
})

afterAll(() => {
    mongoose.connection.close()
})
