import React, { useState, useEffect } from 'react'
import IngredientList from './components/IngredientList'
import Bowl from './components/Bowl'
import ingredientService from './services/ingredients'
import loginService from './services/login'

const App = () => {
    const [bowl, setBowl] = useState([])
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
        setBowl(bowl.concat(ingredientId))
    }

    const removeIngredient = (ingredientId) => {
        const remainingIngredients = bowl.filter(
            (ingredient) => ingredient !== ingredientId
        )
        setBowl(remainingIngredients)
    }

    const addBowl = () => {
        console.log(bowl)
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
        </div>
    )
}

export default App
