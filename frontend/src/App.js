import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import BowlBuilder from './components/BowlBuilder'
import BowlList from './components/BowlList'
import Notification from './components/Notification'

import loginService from './services/login'
import bowlService from './services/bowls'
import ingredientService from './services/ingredients'

const Home = ({ notification, isGoodNotification }) => {
    return (
        <div>
            <Notification message={notification} isGood={isGoodNotification} />
            <h2>Oat app</h2>
        </div>
    )
}
const App = () => {
    const [notification, setNotification] = useState(null)
    const [isGoodNotification, setIsGoodNotification] = useState(false)
    const [user, setUser] = useState(null)
    const [ingredients, setIngredients] = useState([])

    const padding = {
        padding: 5,
    }

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
        <Router>
            <div>
                <Link style={padding} to="/">
                    home
                </Link>
                <Link style={padding} to="/build">
                    build
                </Link>
                <Link style={padding} to="/menu">
                    menu
                </Link>
                <Link style={padding} to="/profile">
                    profile
                </Link>
                <Link style={padding} to="/basket">
                    basket
                </Link>
            </div>

            <Switch>
                <Route path="/build">
                    <BowlBuilder
                        setNotification={setNotification}
                        setIsGoodNotification={setIsGoodNotification}
                        ingredients={ingredients}
                    />
                </Route>
                <Route path="/menu">
                    <BowlList ingredients={ingredients} user={user} />
                </Route>
                <Route path="/profile">
                    {user ? (
                        `${user.name} logged in`
                    ) : (
                        <LoginForm loginEvent={handleLogin} />
                    )}
                </Route>
                <Route path="/basket">
                    <div>
                        <h2>your order</h2>
                    </div>
                </Route>
                <Route path="/">
                    <Home
                        notification={notification}
                        isGoodNotification={isGoodNotification}
                    />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
