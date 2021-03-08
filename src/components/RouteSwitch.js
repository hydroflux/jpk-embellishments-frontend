import React from 'react'

import { Route, Switch } from 'react-router-dom'

export default function RouteSwitch({ routes }) {

    const renderRouteSections = () => {
        return (
            routes.map( route => {
                return (
                    <Switch>
                        <Route exact path={route.path}>
                            {route.component}
                        </Route>
                    </Switch>
                )
            })
        )
    }

    return (
        <div className="route-show">
            {renderRouteSections()}
        </div>
    )
}