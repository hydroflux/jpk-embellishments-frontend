import React from 'react'

export default function Card({ card }) {

    const { name , image } = card

    return (
        <div className="macrame-card">
            <img src={ image } alt={ name }/>
        </div>
    )
}
