import React from 'react'

import { Route, Switch } from 'react-router-dom'

export default function RouteSwitch({ routes }) {

    const renderRouteSections = () => {
        return (
            routes.map( ({ title, path, component: Component , ...props }) => {
                return <Route exact key={title} path={path} render={(routerProps) => <Component {...routerProps} {...props} /> } />
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