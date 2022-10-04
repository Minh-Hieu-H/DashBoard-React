import React,{useEffect} from 'react'

import './layout.css'
import { BrowserRouter, Route } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import Routing from '../Routing'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'

import exportDefault from '../redux/actions/ThemeActions'

const Layout = () => {
  const ThemeReducer =  useSelector(state => state.ThemeReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    const themeClass = localStorage.getItem('thememode','theme-mode-light')
    const colorClass = localStorage.getItem('colorMode','color-mode-light')

    dispatch(exportDefault.setMode(themeClass))
    dispatch(exportDefault.setColor(colorClass))
    }
  , [dispatch]);
  return (
    <BrowserRouter>
      <Route render={(props)=> (
        <div className={`layout ${ThemeReducer.mode} ${ThemeReducer.color}`}>
          <Sidebar {...props}/>
          <div className='layout__content'>
            <TopNav/>
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