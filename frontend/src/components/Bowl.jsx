import React from 'react'

const Bowl = ({ bowl, ingredients }) => {
    const getIngredientName = (ingredientId) => {
        const name = ingredients.filter(
            (ingredient) => ingredient.id === ingredientId
        )[0].name

        return name
    }

    return (
        <div>
            {bowl.map((ingredientId) => {
                getIngredientName(ingredientId)
            })}
        </div>
    )
}

export default Bowl
