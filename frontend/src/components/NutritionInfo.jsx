import React from 'react'

const NutritionInfo = ({ nutrition }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>nutrition info</td>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(nutrition).map(function (key) {
                        return (
                            <tr key={key}>
                                <td>{key}</td>
                                <td>{nutrition[key]}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default NutritionInfo
