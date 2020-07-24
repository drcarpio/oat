const mongoose = require('mongoose')
const fs = require('fs')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const ingredientSchema = new mongoose.Schema({
    name: String,
    type: String,
    pricePerUnit: {
        type: Number,
        default: 0,
    },
    nutritionInfo: {
        calories: Number,
        fatGrams: Number,
        saturatedFat: Number,
        cholesterol: Number,
        sodium: Number,
        potassium: Number,
        totalCarbs: Number,
        fiber: Number,
        sugar: Number,
        protein: Number,
        vitA: Number,
        vitC: Number,
        vitD: Number,
        calcium: Number,
        iron: Number,
    },
})

const Ingredient = mongoose.model('Ingredient', ingredientSchema)
fs.readFile('./dbinfo/toppingsList.json', 'utf8', function (err, data) {
    data = JSON.parse(data)
    for (var item of data) {
        const newIngredient = new Ingredient(item)
        newIngredient.save().then(() => {
            console.log(`${newIngredient.name} saved to db`)
        })
    }
})

fs.readFile('./dbinfo/milkList.json', 'utf8', function (err, data) {
    data = JSON.parse(data)
    for (var item of data) {
        const newIngredient = new Ingredient(item)
        newIngredient.save().then(() => {
            console.log(`${newIngredient.name} saved to db`)
        })
    }
})

fs.readFile('./dbinfo/oatList.json', 'utf8', function (err, data) {
    data = JSON.parse(data)
    for (var item of data) {
        const newIngredient = new Ingredient(item)
        newIngredient.save().then(() => {
            console.log(`${newIngredient.name} saved to db`)
        })
    }
})

/* for adding test users to db
const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    savedBowls: Array,
    orderHistory: Array,
})

const User = mongoose.model('User', userSchema)

const user = new User({
    username: 'Ludicolo',
    name: 'Third User',
    password: 'button',
    savedBowls: [],
    orderHistory: [],
})

user.save().then((result) => {
    console.log('user saved')
    mongoose.connection.close()
})
*/
