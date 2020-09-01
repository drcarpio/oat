import React, { useState } from 'react'

const LoginForm = ({ loginEvent }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        loginEvent({
            username: username || 'lotad',
            password: password || 'button',
        })
        setUsername('')
        setPassword('')
    }

    return (
        <div>
            <h2>login</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    username
                    <input
                        id="username"
                        type="username"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                </div>
                <div>
                    password
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </div>
                <button id="login-button" type="submit">
                    login
                </button>
                <button id="example-login" type="submit">
                    example login
                </button>
            </form>
        </div>
    )
}

export default LoginForm
