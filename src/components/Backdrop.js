import React from 'react'

export default function Backdrop({ toggleDrawer }) {

    return (
        <div className="backdrop" onClick={toggleDrawer}/>
    )
}
