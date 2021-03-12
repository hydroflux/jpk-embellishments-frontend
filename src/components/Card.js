import React from 'react'

export default function Card({ card }) {

    const { name , image, title } = card

    return (
        <div className="macrame-card">
            { title
                ? <div className="title-div"><p>{title}</p></div>
                : null 
            }
            <img src={ image } alt={ name }/>
        </div>
    )
}
