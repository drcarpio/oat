const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

/*
let url = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
    url = process.env.TEST_MONGODB_URI
}

console.log('connecting to ', url)

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('order model connected to mongoDB')
    })
    .catch((error) => {
        console.log('error connecting to mongoDB: ', error.message)
    })
*/

const orderSchema = new mongoose.Schema({
    date: Date,
    price: Number,
    bowls: {
        type: Array,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Order', orderSchema)
