import React from 'react'
import { Route,Switch } from 'react-router-dom'

import Dashboard from './Dashboard'
import Customers from './Customers'


const Routing = () => {
  return (
    <Switch>
        <Route path = "/" exact component={Dashboard}/>
        <Route path= "/customers" component={Customers}/>
    </Switch>
  )
}

export default Routing