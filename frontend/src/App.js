import React, { useState, useEffect } from 'react'
import IngredientList from './components/IngredientList'
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
        setBowl(bowl.concat(ingredientId))
    }

    const removeIngredient = (ingredientId) => {
        const remainingIngredients = bowl.filter(
            (ingredient) => ingredient !== ingredientId
        )
        setBowl(remainingIngredients)
    }

    return (
        <div>
            <h2>bowl contents</h2>
            <Bowl
                bowl={bowl}
                ingredients={ingredients}
                removeIngredient={removeIngredient}
            />
            <h2>ingredients</h2>
            <IngredientList
                addIngredient={addIngredient}
                ingredients={ingredients}
            />
        </div>
    )
}

export default App
