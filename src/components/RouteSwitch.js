import React from 'react'

import { Route, Switch } from 'react-router-dom'

export default function RouteSwitch({ routes }) {

    const renderRouteSections = () => {
        return (
            // routes.map( ({ path, component: Component }) => {
            routes.map( ({ title, path, component }) => {
                return (
                    <Switch key={title}>
                        {/* <Route exact path={path} component={Component}/> */}
                        <Route exact path={path}>
                            {component}
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