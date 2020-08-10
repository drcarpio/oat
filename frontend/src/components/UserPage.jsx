import React from 'react'
import Bowl from './Bowl'

const UserPage = ({ user }) => {
    return (
        <div>
            <p>{user.username} logged in</p>
            <h3>saved bowls</h3>
            {user.savedBowls.map((bowl) => (
                <div key={bowl} id={bowl}>
                    {bowl}
                </div>
            ))}
            <h3>order history</h3>
            {user.orderHistory.map((bowl) => (
                <div key={bowl} id={bowl}>
                    {bowl}
                </div>
            ))}
            <h3>user stats</h3>
        </div>
    )
}

export default UserPage
