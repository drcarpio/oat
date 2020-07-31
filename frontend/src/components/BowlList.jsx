import React, { useState, useEffect } from 'react'
import Bowl from '../components/Bowl'
import bowlService from '../services/bowls'

const BowlList = ({ ingredients, user }) => {
    const [bowls, setBowls] = useState([])
    useEffect(() => {
        bowlService.getAll().then((bowls) => setBowls(bowls))
    }, [])

    const bowlsAfterDelete = (id) => {
        const remainingBowls = bowls.filter((b) => b.id !== id)
        setBowls(remainingBowls)
    }

    return (
        <div>
            {bowls.map((bowl) => (
                <Bowl
                    bowl={bowl.toppings
                        .concat(bowl.oatType)
                        .concat(bowl.milkType)
                        .map((topping) => topping.id)}
                    ingredients={ingredients}
                    key={bowl.id}
                    bowlsAfterDelete={bowlsAfterDelete}
                />
            ))}
        </div>
    )
}

export default BowlList
