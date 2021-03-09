import React from 'react'
import Backdrop from '../../components/Backdrop'
import SlideDrawer from '../../components/SlideDrawer'

export default function Drawer({ showDrawer , toggleDrawer }) {

    const toggleBackdrop = () => showDrawer ? <Backdrop toggleDrawer={toggleDrawer}/> : null

    return (
        <section>
            <SlideDrawer showDrawer={showDrawer}/>
            {toggleBackdrop()}
        </section>
    )
}
