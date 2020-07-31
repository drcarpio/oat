import React, { useState } from 'react'

import Bowl from './Bowl'
import IngredientList from './IngredientList'

import bowlService from '../services/bowls'

const BowlBuilder = ({
    setNotification,
    setIsGoodNotification,
    ingredients,
}) => {
    const [bowl, setBowl] = useState([])
    const [oatType, setOatType] = useState(null)
    const [milkType, setMilkType] = useState(null)

    const addIngredient = (ingredientId) => {
        if (
            ingredients.filter(
                (ingredient) => ingredient.id === ingredientId
            )[0].type === 'oat'
        ) {
            let newBowl = oatType
                ? bowl.filter((ingredient) => ingredient !== oatType)
                : bowl
            setOatType(ingredientId)
            setBowl(newBowl.concat(ingredientId))
        } else if (
            ingredients.filter(
                (ingredient) => ingredient.id === ingredientId
            )[0].type === 'milk'
        ) {
            let newBowl = milkType
                ? bowl.filter((ingredient) => ingredient !== milkType)
                : bowl
            setMilkType(ingredientId)
            setBowl(newBowl.concat(ingredientId))
        } else {
            setBowl(bowl.concat(ingredientId))
        }
    }

    const removeIngredient = (ingredientId) => {
        const remainingIngredients = bowl.filter(
            (ingredient) => ingredient !== ingredientId
        )
        setBowl(remainingIngredients)
    }

    const addBowl = () => {
        console.log(bowl)
        if (!oatType || !milkType) {
            setNotification('need to select oat and milk types')
            setIsGoodNotification(false)
            setTimeout(() => {
                setNotification(null)
            }, 3000)
        } else {
            try {
                const newBowlObject = {
                    oatType: oatType,
                    milkType: milkType,
                    toppings: bowl.filter(
                        (ingredient) =>
                            ingredient !== oatType && ingredient !== milkType
                    ),
                    featured: false,
                    onMenu: true,
                }
                bowlService.create(newBowlObject)
                setOatType(null)
                setMilkType(null)
                setBowl([])
            } catch (exception) {
                setNotification('problem adding bowl')
                setIsGoodNotification(false)
                setTimeout(() => {
                    setNotification(null)
                }, 3000)
            }
        }
    }
    return (
        <div>
            <h2>bowl contents</h2>
            <Bowl
                bowl={bowl}
                ingredients={ingredients}
                removeIngredient={removeIngredient}
                addBowl={addBowl}
            />
            <h2>ingredients</h2>
            <IngredientList
                addIngredient={addIngredient}
                ingredients={ingredients}
            />
        </div>
    )
}

export default BowlBuilder
