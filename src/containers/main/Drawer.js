import React from 'react'
import SlideDrawer from '../../components/SlideDrawer'

export default function Drawer({ showDrawer , toggleDrawer }) {

    const toggleBackdrop = () => showDrawer ? <div className="slide-drawer-backdrop" onClick={toggleDrawer}/> : null

    return (
        <section>
            <SlideDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer}/>
            {toggleBackdrop()}
        </section>
    )
}
