import { routes } from 'routing/routes'
import React from 'react'
import { Route } from 'react-router-dom'

/**
 * Create routing
 *
 * @returns {*[]}
 * @constructor
 */
export const Routes = () => (
    routes.map(route => (
        <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ))
)
