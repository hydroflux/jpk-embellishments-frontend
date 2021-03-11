import React from 'react'

export default function SlideDrawer({ showDrawer , toggleDrawer }) {

    const toggleDrawerClass = () => showDrawer ? "slide-drawer open" : "slide-drawer"
    
    return (
        <div className={toggleDrawerClass()} >
            <i class="material-icons" onClick={toggleDrawer}>exit_to_app</i>
            <h1>MY CART</h1>
        </div>
    )
}
