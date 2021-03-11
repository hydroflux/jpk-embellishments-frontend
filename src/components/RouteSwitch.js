import React from 'react'

import { Route, Switch } from 'react-router-dom'

export default function RouteSwitch({ routes }) {

    const renderRouteSections = () => {
        return (
            routes.map( ({ title, path, cards, component: Component }) => {
                return <Route exact key={title} path={path} render={(routerProps) => <Component {...routerProps} cards={ cards } /> } />
            })
        )
    }

    return (
        <div className="route-show">
            <Switch>
                {renderRouteSections()}
            </Switch>
        </div>
    )
}