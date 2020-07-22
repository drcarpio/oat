const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const orderSchema = new mongoose.Schema({
    date: Date,
    price: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    bowls: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bowl',
        },
    ],
})

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Order', orderSchema)
