import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Routes = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/navbar" component={Navbar} />
    </Switch>
  </>
)

export default Routes
