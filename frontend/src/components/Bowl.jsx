import React, { useState } from 'react'
import NutritionInfo from './NutritionInfo'
import bowlService from '../services/bowls'

const Bowl = ({
    bowl,
    ingredients,
    removeIngredient,
    addBowl,
    bowlsAfterDelete,
}) => {
    const getIngredientName = (ingredientId) => {
        const name = ingredients.filter(
            (ingredient) => ingredient.id === ingredientId
        )[0].name

        return name.replace(/_/g, ' ').toLowerCase()
    }

    const getTotalPrice = () => {
        const ingredientObjects = bowl.map(
            (ingredientId) =>
                ingredients.filter(
                    (ingredient) => ingredient.id === ingredientId
                )[0]
        )
        return ingredientObjects.reduce(function (a, b) {
            return a + b['pricePerUnit']
        }, 0)
    }

    const getTotalNutrition = () => {
        const nutritionObjects = bowl.map(
            (ingredientId) =>
                ingredients.filter(
                    (ingredient) => ingredient.id === ingredientId
                )[0]['nutritionInfo']
        )
        return nutritionObjects.reduce((a, b) => {
            for (let k in b) {
                if (b.hasOwnProperty(k)) {
                    a[k] = (a[k] || 0) + b[k]
                }
            }
            return a
        }, {})
    }

    return (
        <div>
            <p>total price: {getTotalPrice()}</p>
            {addBowl ? <button onClick={addBowl}>add bowl</button> : null}
            <div>
                bowl contents:{' '}
                {bowl.map(function (ingredientId, i) {
                    return (
                        <div key={i}>
                            {getIngredientName(ingredientId)}
                            {removeIngredient ? (
                                <button
                                    onClick={() =>
                                        removeIngredient(ingredientId)
                                    }
                                >
                                    remove
                                </button>
                            ) : null}
                        </div>
                    )
                })}
            </div>
            <div>
                bowl nutrition:{' '}
                <NutritionInfo nutrition={getTotalNutrition()} />
            </div>
        </div>
    )
}

export default Bowl
