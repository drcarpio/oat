import React, { useState, useEffect } from 'react'

import IngredientList from './components/IngredientList'
import BowlList from './components/BowlList'
import Bowl from './components/Bowl'

import ingredientService from './services/ingredients'
import loginService from './services/login'
import bowlService from './services/bowls'

const App = () => {
    const [bowl, setBowl] = useState([])
    const [oatType, setOatType] = useState(null)
    const [milkType, setMilkType] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        ingredientService
            .getAll()
            .then((ingredients) => setIngredients(ingredients))
    }, [])

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
            // TODO: handle empty bowl
            console.log('need to select oat and milk types')
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
                // TODO: handle this error
                console.log('problem adding bowl')
            }
        }
    }

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({
                username,
                password,
            })

            setUser(user)
            setUsername('')
            setPassword('')
            console.log(user)
        } catch (exception) {
            // TODO: IMPLEMENT NOTIFICATION TO USER
            console.log('wrong credentials')
        }
    }

    return (
        <div>
            <h2>login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input
                        type="text"
                        value={username}
                        name="Username"
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        type="text"
                        value={password}
                        name="Password"
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button type="submit">login</button>
            </form>
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
            <BowlList ingredients={ingredients} user={user} />
        </div>
    )
}

export default App
