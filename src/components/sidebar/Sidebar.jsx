import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import './sidebar.css'

const SidebarItem =(props)=> {
  const active = props.active ? 'active' : ''
  return (
    <div className='sidebar__item'>
      <div className={`sidebar__item-inner ${active}`}>
          <i className={props.icon}></i>
          <span>{props.title}</span>
      </div>
    </div>
  ) 
}
const Sidebar = () => {
  const locationPath = useLocation()
  console.log(locationPath.pathname)
  const activeItem = sidebar_items.findIndex((item)=> item.route ===locationPath.pathname)
  console.log(activeItem)
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <img src={logo}/>
      </div>
      {
        sidebar_items.map((item,index)=> (
          <Link to = {item.route} key={index}>
            <SidebarItem
              title = {item.display_name}
              icon = {item.icon}
              active = {index=== activeItem}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar