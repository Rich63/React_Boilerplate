import React from 'react'
import { Router, Route, Switch } from "react-router-dom"
import { createBrowserHistory } from 'history'

import DashboardPage from "../components/pages/DashboardPage"
import NotFoundPage from "../components/pages/NotFoundPage"
import LoginPage from "../components/pages/LoginPage"
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={ LoginPage } exact={ true } />
        <PrivateRoute path="/dashboard" component={ DashboardPage } />
        <Route component={ NotFoundPage } />} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter
