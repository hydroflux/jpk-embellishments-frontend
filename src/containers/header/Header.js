import { NavLink } from 'react-router-dom'

export default function Header({ routes , toggleDrawer }) {

    // const [ activeTab, toggleActiveTab ] = useState()

    const logoURL = "https://i.ibb.co/JxN3MG8/jpk-embellishments-logo.png"

    const renderRouteLinks = () => routes.map( ({ title , path }) => {
        return (
            <NavLink exact to={path} className="navigation-link" activeClassName="active" key={title}>{title}</NavLink>
        )
    })

    return (
        <header>
            <nav className="navigation">
                <img src={logoURL} alt="logo" />
                {renderRouteLinks()}
                <i className="material-icons" onClick={toggleDrawer}>shopping_cart</i>
            </nav>
        </header>
    )
}
