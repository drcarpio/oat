const mongoose = require('mongoose')

/*
let url = process.env.MONGODB_URI

if (process.env.NODE_ENV === 'test') {
    url = process.env.TEST_MONGODB_URI
}

console.log('connecting to ', url)

mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('ingredient model connected to mongoDB')
    })
    .catch((error) => {
        console.log('error connecting to mongoDB: ', error.message)
    })
*/

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    pricePerUnit: {
        type: Number,
        default: 0,
    },
    nutritionInfo: {
        calories: {
            type: Number,
            default: 0,
        },
        fatCalories: {
            type: Number,
            default: 0,
        },
        fatGrams: {
            type: Number,
            default: 0,
        },
        saturatedFat: {
            type: Number,
            default: 0,
        },
        cholesterol: {
            type: Number,
            default: 0,
        },
        sodium: {
            type: Number,
            default: 0,
        },
        potassium: {
            type: Number,
            default: 0,
        },
        totalCarbs: {
            type: Number,
            default: 0,
        },
        fiber: {
            type: Number,
            default: 0,
        },
        sugar: {
            type: Number,
            default: 0,
        },
        protein: {
            type: Number,
            default: 0,
        },
        vitA: {
            type: Number,
            default: 0,
        },
        vitC: {
            type: Number,
            default: 0,
        },
        vitD: {
            type: Number,
            default: 0,
        },
        calcium: {
            type: Number,
            default: 0,
        },
        iron: {
            type: Number,
            default: 0,
        },
    },
})

ingredientSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

module.exports = mongoose.model('Ingredient', ingredientSchema)
