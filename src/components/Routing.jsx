import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Tags from '../pages/Tags'
import Sources from '../pages/Sources'
import Contents from '../pages/Contents'
import TagInfo from '../pages/TagInfo'
import SourceInfo from '../pages/SourceInfo'
import ContentInfo from '../pages/ContentInfo'

const Routing = () => {
  return (
    <Switch>
      <Route path = "/" exact component={Dashboard}/>
      <Route path = "/tags" component={Tags}/>
      <Route path = "/sources" component={Sources}/>
      <Route path = "/contents" component={Contents}/>
      <Route path = "/taginfo" component={TagInfo}/>
      <Route path = "/sourceinfo" component={SourceInfo}/>
      <Route path = "/contentinfo" component={ContentInfo}/>
    </Switch>
  )
}

export default Routing