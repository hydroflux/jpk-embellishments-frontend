import React from 'react'
import { Link } from 'react-router-dom'

export default function Header({ routes }) {

    const renderRouteLinks = () => {
        return routes.map( route => <Link to={route.path}>{route.title}</Link> )
    }

    return (
        <header>
            <nav className="navigation"> 
                {/* <Link to="/">Home</Link> |
                <Link to="/shop">Shop</Link> |
                <Link to="/supplies"> Supplies</Link> |
                <Link to="/tutorials"> Tutorials</Link> |
                <Link to="/contact"> About</Link> |
                <Link to="/questions"> FAQ's</Link> |
                <Link to="/about"> Contact</Link> | */}
                {renderRouteLinks()}
            </nav>
        </header>
    )
}
