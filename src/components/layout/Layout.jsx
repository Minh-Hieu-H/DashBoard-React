import React from 'react'

import './layout.css'
import { BrowserRouter, Route } from 'react-router-dom'

import Routing from '../Routing'
import Sidebar from '../sidebar/Sidebar'

const Layout = () => {
  return (
    <BrowserRouter>
      <Route render={(props)=> (
        <div className='layout'>
          <Sidebar {...props}/>
          <div className='layout__content'>
            <div className='layout__content-main'>
              <Routing/>
            </div>
          </div>
        </div>
      )} />
    </BrowserRouter>
  )
}

export default Layout