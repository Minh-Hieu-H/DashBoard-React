import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Dashboard from './Dashboard'
import Customer from './Customer'


const Routing = () => {
  return (
    <Switch>
        <Route path = "/" exact component={Dashboard}/>
        <Route path= "customer" component={Customer}/>
    </Switch>
  )
}

export default Routing