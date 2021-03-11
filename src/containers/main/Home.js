import React from 'react'
import CardContainer from './CardContainer'

export default function Home({ cards }) {

    return (
        <section>
            <h2>Welcome to JP&K Embellishments!!!</h2>
            <CardContainer cards={cards}/>
        </section>
    )
}
