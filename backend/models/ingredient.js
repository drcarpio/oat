const mongoose = require('mongoose')

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
