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
        console.log('bowl model connected to mongoDB')
    })
    .catch((error) => {
        console.log('error connecting to mongoDB: ', error.message)
    })
*/

const bowlSchema = new mongoose.Schema({
    oatType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
    },
    milkType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
    },
    toppings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ingredient',
        },
    ],
    featured: {
        type: Boolean,
        default: false,
    },
    onMenu: {
        type: Boolean,
        default: false,
    },
})

bowlSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Bowl', bowlSchema)
