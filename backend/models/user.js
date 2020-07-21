const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const url = process.env.MONGODB_URI

console.log('connecting to ', url)

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('user model connected to mongoDB')
    })
    .catch((error) => {
        console.log('error connecting to mongoDB: ', error.message)
    })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    name: String,
    password: {
        type: String,
        minlength: 4,
        required: true,
    },
    savedBowls: {
        type: Array,
        default: [],
    },
    orderHistory: {
        type: Array,
        default: [],
    },
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('User', userSchema)
