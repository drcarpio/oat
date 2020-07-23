import React, { useState, useEffect } from 'react'
import Ingredient from './components/Ingredient'
import Bowl from './components/Bowl'
import ingredientService from './services/ingredients'

const App = () => {
    const [bowl, setBowl] = useState([])
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        ingredientService
            .getAll()
            .then((ingredients) => setIngredients(ingredients))
    }, [])

    const addIngredient = (ingredientId) => {
        console.log(ingredientId)

        setBowl(bowl.concat(ingredientId))
        console.log(bowl)
    }

    return (
        <div>
            <h2>bowl contents</h2>
            <Bowl bowl={bowl} ingredients={ingredients} />
            <h2>ingredients</h2>
            {ingredients.map((ingredient) => (
                <Ingredient
                    key={ingredient.id}
                    addIngredient={() => addIngredient(ingredient.id)}
                    ingredient={ingredient}
                />
            ))}
        </div>
    )
}

export default App
