const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

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
