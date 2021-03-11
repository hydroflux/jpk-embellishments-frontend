import React from 'react'
import Card from '../../components/Card'

export default function CardContainer({ cards }) {

    const displayCards = () => {
        return cards.map( card => <Card key={ card } card={ card } /> )
    }

    return (
        <div className="macrame-container">
            {displayCards()}
        </div>
    )
}
