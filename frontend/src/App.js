import React, { useState, useEffect } from 'react'

import LoginForm from './components/LoginForm'
import BowlBuilder from './components/BowlBuilder'
import BowlList from './components/BowlList'
import Notification from './components/Notification'

import loginService from './services/login'
import bowlService from './services/bowls'
import ingredientService from './services/ingredients'

const App = () => {
    const [notification, setNotification] = useState(null)
    const [isGoodNotification, setIsGoodNotification] = useState(false)
    const [user, setUser] = useState(null)
    const [ingredients, setIngredients] = useState([])

    useEffect(() => {
        ingredientService
            .getAll()
            .then((ingredients) => setIngredients(ingredients))
    }, [])

    const handleLogin = async (loginObject) => {
        try {
            const user = await loginService.login(loginObject)

            window.localStorage.setItem('loggedOatUser', JSON.stringify(user))
            bowlService.setToken(user.token)
            setUser(user)
        } catch (exception) {
            setNotification('wrong credentials')
            setIsGoodNotification(false)
            setTimeout(() => {
                setNotification(null)
            }, 3000)
        }
    }

    return (
        <div>
            <Notification message={notification} isGood={isGoodNotification} />
            {user ? null : <LoginForm loginEvent={handleLogin} />}
            <BowlBuilder
                setNotification={setNotification}
                setIsGoodNotification={setIsGoodNotification}
                ingredients={ingredients}
            />
            <BowlList ingredients={ingredients} user={user} />
        </div>
    )
}

export default App
