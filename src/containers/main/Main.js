import React from 'react'
import RouteSwitch from '../../components/RouteSwitch'
import Drawer from './Drawer'

export default function Main({ routes , showDrawer , toggleDrawer }) {

    return (
        <main>
            <Drawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
            <RouteSwitch routes={ routes }/>
        </main>
    )
}
