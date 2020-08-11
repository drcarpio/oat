import React, { useState, useEffect } from 'react'
import Bowl from './Bowl'

import bowlService from '../services/bowls'
import bowls from '../services/bowls'

const UserBowls = ({ targetBowls }) => {
    const [userBowls, setUserBowls] = useState([])

    useEffect(() => {
        bowlService.getAll().then((userBowls) => setUserBowls(userBowls))
    }, [])

    return <div>hello</div>
}
const UserPage = ({ user }) => {
    return (
        <div>
            <p>{user.username} logged in</p>
            <h3>saved bowls</h3>
            <UserBowls targetBowls={user.savedBowls} />
            <h3>order history</h3>
            <UserBowls targetBowls={user.orderHistory} />
            <h3>user stats</h3>
        </div>
    )
}

export default UserPage
