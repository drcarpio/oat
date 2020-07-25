import React, { useState } from 'react'

const NutritionInfo = ({ nutrition }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>nutrition info</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(nutrition).map(function (key) {
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{nutrition[key]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const Ingredient = ({ addIngredient, ingredient }) => {
    return (
        <div>
            <p>{ingredient.name.replace(/_/g, ' ').toLowerCase()}</p>
            <p>price: ${ingredient.pricePerUnit}</p>
            <NutritionInfo nutrition={ingredient.nutritionInfo} />
            <button onClick={addIngredient}>add to bowl</button>
        </div>
    )
}

const IngredientType = ({ name, ingredients, addIngredient }) => {
    const [visible, setVisible] = useState(false)

    const hideWhenVisible = { display: visible ? 'none' : '' }
    const showWhenVisible = { display: visible ? '' : 'none' }
    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <div style={hideWhenVisible}>
                <h3>{name}</h3>
                <button onClick={toggleVisibility}>show {name} options</button>
            </div>
            <div style={showWhenVisible}>
                <h3>{name}</h3>
                <button onClick={toggleVisibility}>hide {name} options</button>
                {ingredients.map((ingredient) => (
                    <Ingredient
                        key={ingredient.id}
                        addIngredient={() => addIngredient(ingredient.id)}
                        ingredient={ingredient}
                    />
                ))}
            </div>
        </div>
    )
}

const IngredientList = ({ ingredients, addIngredient }) => {
    return (
        <div>
            <IngredientType
                addIngredient={addIngredient}
                name="oat"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'oat'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="milk"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'milk'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="nut"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'nut'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="nut butter"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'nut_butter'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="fresh fruit"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'fresh_fruit'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="dried fruit"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'dried_fruit'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="sweetener"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'sweetener'
                )}
            />
            <IngredientType
                addIngredient={addIngredient}
                name="spice"
                ingredients={ingredients.filter(
                    (ingredient) => ingredient.type === 'spice'
                )}
            />
        </div>
    )
}

export default IngredientList
