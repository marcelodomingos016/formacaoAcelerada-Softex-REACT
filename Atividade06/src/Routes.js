import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Config from './pages/config'

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                Página Inicial
            </Route>
            <Route exact path="config">
                Página de configurações
            </Route>
        </Switch>
    )
}