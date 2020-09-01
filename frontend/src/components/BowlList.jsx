import React, { useState, useEffect } from 'react'

import NutritionInfo from './NutritionInfo'

import bowlService from '../services/bowls'
import userService from '../services/users'

const PresavedBowl = ({
    bowl,
    ingredients,
    id,
    toggleSaveBowl,
    removeBowl,
    bowlsAfterDelete,
    user,
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

            <div>
                bowl contents:{' '}
                {bowl.map(function (ingredientId, i) {
                    return <div key={i}>{getIngredientName(ingredientId)}</div>
                })}
            </div>
            <div>
                bowl nutrition:{' '}
                <NutritionInfo nutrition={getTotalNutrition()} />
            </div>
            <button onClick={() => removeBowl(id)}>delete bowl</button>
            {user ? (
                !user.savedBowls.includes(id) ? (
                    <button onClick={() => toggleSaveBowl(id)}>
                        add to saved bowls
                    </button>
                ) : (
                    <button onClick={() => toggleSaveBowl(id)}>
                        removed from saved bowls
                    </button>
                )
            ) : null}
        </div>
    )
}

const BowlList = ({
    ingredients,
    user,
    setUser,
    setNotification,
    setIsGoodNotification,
}) => {
    const [bowls, setBowls] = useState([])
    useEffect(() => {
        bowlService.getAll().then((bowls) => setBowls(bowls))
    }, [])

    const removeBowl = (id) => {
        if (window.confirm(`Remove bowl?`)) {
            bowlService
                .deleteBowl(id)
                .then(() => {
                    bowlsAfterDelete(id)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

    const toggleSaveBowl = (id) => {
        let updatedUser = null
        if (user.savedBowls.includes(id)) {
            updatedUser = {
                ...user,
                savedBowls: user.savedBowls.filter((bowl) => bowl !== id),
            }
        } else {
            updatedUser = {
                ...user,
                savedBowls: user.savedBowls.concat(id),
            }
        }

        userService
            .update(user.id, updatedUser)
            .then((response) => {
                setNotification('saved bowls updated successfully')
                setIsGoodNotification(true)
                setTimeout(() => {
                    setNotification(null)
                }, 3000)
                setUser(updatedUser)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const bowlsAfterDelete = (id) => {
        const remainingBowls = bowls.filter((b) => b.id !== id)
        setBowls(remainingBowls)
    }

    return (
        <div>
            <h2>presaved bowls</h2>
            {bowls.map((bowl) => (
                <PresavedBowl
                    bowl={bowl.toppings
                        .concat(bowl.oatType)
                        .concat(bowl.milkType)
                        .map((topping) => topping.id)}
                    ingredients={ingredients}
                    key={bowl.id}
                    id={bowl.id}
                    toggleSaveBowl={toggleSaveBowl}
                    removeBowl={removeBowl}
                    bowlsAfterDelete={bowlsAfterDelete}
                    onMenu={bowl.onMenu}
                    featured={bowl.featured}
                    user={user}
                />
            ))}
        </div>
    )
}

export default BowlList
