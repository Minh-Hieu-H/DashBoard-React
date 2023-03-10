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
      <Route path = "/tag/:tagid" component={TagInfo}/>
      <Route path = "/tag" component={Tags}/>
      <Route path = "/source/:sourceid" component={SourceInfo}/>
      <Route path = "/source" component={Sources}/>
      <Route path = "/video/:videoid" component={ContentInfo}/>
      <Route path = "/video" component={Contents}/>
    </Switch>
  )
}

export default Routing