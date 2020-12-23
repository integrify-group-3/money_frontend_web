import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={(props: any) => <Login {...props} />} />
      <Route exact path="/dashboard" component={(props: any) => <Dashboard {...props} />} />
    </Switch>
  </>
)

export default Routes
