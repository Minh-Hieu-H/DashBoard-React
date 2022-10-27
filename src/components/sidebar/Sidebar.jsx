import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import './sidebar.css'

const SidebarItem = (props) => {
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
  const locationPath = useLocation();
  const handleLocation = () => {
    switch(locationPath.pathname) {
      case "/tags": 
        return "/tags";
      case "/sources": 
        return "/sources";
      case "/taginfo": 
        return "/tags";
      case "/sourceinfo": 
        return "/sources";
      case "/contentinfo": 
        return "/contents";
      case "/contents": 
        return "/contents";
      case "/about": 
        return "/about";
      case "/settings": 
        return "/settings";
      default:
        return "/";
    };
  }
  const activeItem = sidebar_items.findIndex((item) => item.route === handleLocation())
  return (
    <div className='sidebar'>
      <div className='sidebar__logo'>
        <div id="logo-img" class="light-logo"></div>
      </div>
      {
        sidebar_items.map((item, index)=> (
          <Link to = {item.route} key={index}>
            <SidebarItem
              title = {item.display_name}
              icon = {item.icon}
              active = {index === activeItem}
            />
          </Link>
        ))
      }
    </div>
  )
}

export default Sidebar