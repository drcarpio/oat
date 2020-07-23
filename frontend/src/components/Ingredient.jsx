import React from 'react'

const NutritionInfo = ({ nutrition }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>nutrition info</tr>
                </thead>
                <tbody>
                    <tr>
                        <td>calories</td>
                        <td>{nutrition.calories}</td>
                    </tr>
                    <tr>
                        <td>calories from fat</td>
                        <td>{nutrition.fatCalories}</td>
                    </tr>
                    <tr>
                        <td>fat grams</td>
                        <td>{nutrition.fatGrams}</td>
                    </tr>
                    <tr>
                        <td>saturated fat</td>
                        <td>{nutrition.saturatedFat}</td>
                    </tr>
                    <tr>
                        <td>cholesterol</td>
                        <td>{nutrition.cholesterol}</td>
                    </tr>
                    <tr>
                        <td>sodium</td>
                        <td>{nutrition.sodium}</td>
                    </tr>
                    <tr>
                        <td>potassium</td>
                        <td>{nutrition.potassium}</td>
                    </tr>
                    <tr>
                        <td>total carbs</td>
                        <td>{nutrition.totalCarbs}</td>
                    </tr>
                    <tr>
                        <td>fiber</td>
                        <td>{nutrition.fiber}</td>
                    </tr>
                    <tr>
                        <td>sugar</td>
                        <td>{nutrition.sugar}</td>
                    </tr>
                    <tr>
                        <td>protein</td>
                        <td>{nutrition.protein}</td>
                    </tr>
                    <tr>
                        <td>vitA %</td>
                        <td>{nutrition.vitA}</td>
                    </tr>
                    <tr>
                        <td>vitC %</td>
                        <td>{nutrition.vitC}</td>
                    </tr>
                    <tr>
                        <td>vitD %</td>
                        <td>{nutrition.vitD}</td>
                    </tr>
                    <tr>
                        <td>calcium %</td>
                        <td>{nutrition.calcium}</td>
                    </tr>
                    <tr>
                        <td>iron %</td>
                        <td>{nutrition.iron}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
const Ingredient = ({ addIngredient, ingredient }) => {
    return (
        <div>
            <p>{ingredient.name}</p>
            <p>{ingredient.type}</p>
            <p>{ingredient.pricePerUnit}</p>
            <p>{ingredient.id}</p>
            <NutritionInfo nutrition={ingredient.nutritionInfo} />
            <button onClick={addIngredient}>add to bowl</button>
        </div>
    )
}

export default Ingredient
