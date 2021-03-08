import React from 'react'
import RouteSwitch from '../../components/RouteSwitch'

export default function Main({ routes }) {

    return (
        <main>
            <RouteSwitch routes={ routes }/>
        </main>
    )
}
