import React from 'react'

import { Route, Switch } from 'react-router-dom'

export default function RouteSwitch({ routes }) {

    const renderRouteSections = () => {
        return (
            routes.map( ({ title, path, component: Component }) => {
                return <Route exact path={path} render={(routerProps) => <Component {...routerProps} /> } />
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