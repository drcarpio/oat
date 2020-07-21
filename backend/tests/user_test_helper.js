const User = require('../models/user')

const initialUsers = [
    {
        username: 'Lotad',
        name: 'First User',
        password: 'button',
    },
    {
        username: 'Lombre',
        name: 'Second User',
        password: 'button',
    },
    {
        username: 'Ludicolo',
        name: 'Third User',
        password: 'button',
    },
]

const nonExistingId = async () => {
    const user = new User({
        username: 'seedot',
        name: 'nuzleaf',
        password: 'shiftry',
    })
    await user.save()
    await user.remove()

    return user._id.toString()
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map((user) => user.toJSON())
}

module.exports = {
    initialUsers,
    nonExistingId,
    usersInDb,
}
