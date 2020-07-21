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
        console.log('user model connected to mongoDB')
    })
    .catch((error) => {
        console.log('error connecting to mongoDB: ', error.message)
    })
*/

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name: String,
    /*passwordHash: {
        type: String,
        minlength: 4,
        required: true,
    },*/
    savedBowls: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Bowl',
        },
    ],
    orderHistory: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Order',
        },
    ],
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    },
})

module.exports = mongoose.model('User', userSchema)
