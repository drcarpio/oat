import React from 'react'

const Notification = ({ message, isGood }) => {
    if (message === null) {
        return null
    }

    if (isGood) {
        return <div className="good">{message}</div>
    } else {
        return <div className="error">{message}</div>
    }
}

export default Notification
