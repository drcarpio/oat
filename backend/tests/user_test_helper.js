const User = require('../models/user')
const Order = require('../models/order')

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

const ordersInDb = async () => {
    const orders = await Order.find({})
    return orders.map((order) => order.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map((user) => user.toJSON())
}

module.exports = {
    initialUsers,
    nonExistingId,
    ordersInDb,
    usersInDb,
}
