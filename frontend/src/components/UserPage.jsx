import React, { useState, useEffect } from 'react'
import Bowl from './Bowl'

import bowlService from '../services/bowls'
import bowls from '../services/bowls'

const UserBowls = ({ targetBowls }) => {
    const [userBowls, setUserBowls] = useState([])

    useEffect(() => {
        bowlService.getAll().then((userBowls) => setUserBowls(userBowls))
    }, [])

    return <div>the component that displays the user's saved bowls is in progress</div>
}
const UserPage = ({ user }) => {
    return (
        <div>
            <p>{user.username} logged in</p>
            <h3>saved bowls</h3>
            <UserBowls targetBowls={user.savedBowls} />
        </div>
    )
}

export default UserPage
