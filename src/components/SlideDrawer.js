import React from 'react'

export default function SlideDrawer({ showDrawer }) {

    const toggleDrawerClass = () => showDrawer ? "slide-drawer open" : "slide-drawer"
    
    return (
        <div className={toggleDrawerClass()} >
            <h1>MY CART</h1>
        </div>
    )
}
