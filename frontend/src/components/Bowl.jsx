import React from 'react'

const Bowl = ({ bowl, ingredients, removeIngredient }) => {
    const getIngredientName = (ingredientId) => {
        const name = ingredients.filter(
            (ingredient) => ingredient.id === ingredientId
        )[0].name

        return name.replace(/_/g, ' ').toLowerCase()
    }

    return (
        <div>
            {bowl.map(function (ingredientId, i) {
                return (
                    <p key={i}>
                        {getIngredientName(ingredientId)}
                        <button onClick={() => removeIngredient(ingredientId)}>
                            remove
                        </button>
                    </p>
                )
            })}
        </div>
    )
}

export default Bowl
