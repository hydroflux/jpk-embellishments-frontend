import React from 'react'
import CardContainer from './CardContainer'

export default function Home({ cards }) {

    console.log(cards)
    const cards_2 = [
        { title: "Wall Hangings", name: "gemstone wall hanging" , image: "https://i.ibb.co/c2t7VFm/wall-hanging-5.jpg" },
        { title: "Custom Orders", name: "snake pattern wall hanging" , image: "https://i.ibb.co/cCcfKy9/purple-teal-wall-hanging.jpg" },
        { title: "Coasters", name: "heart coasters", image: "https://i.ibb.co/C9JwHF8/heart-coasters.png" },
        { title: "Mirrors", name: "yellow mirror", image: "https://i.ibb.co/tz6tV4w/yellow-mirror.jpg" },
        { title: "Keychains & Wristlets", name: "keychains" , image: "https://i.ibb.co/ZxYZB5r/keychains-2.jpg"},
        { title: "Plant Hangers", name: "plant hangers", image: "https://i.ibb.co/k8K106d/plant-hangers-4.jpg"},
        { title: "Artist", name: "the artist", image: "https://i.ibb.co/HVYnwrT/the-artist-2-5.jpg" },
    ]

    return (
        <section>
            {/* <h2>Welcome to JP&K Embellishments!!!</h2> */}
            <CardContainer cards={cards_2}/>
        </section>
    )
}
