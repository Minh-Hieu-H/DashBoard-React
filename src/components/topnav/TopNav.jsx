import React from 'react'

import './topnav.css'
const TopNav = () => {
  return (
    <div className='topnav'>
        <div className='topnav__search'>
            <input type='text' placeholder='Search Here...'/>
            <i className='bx bx-search'/>
        </div>
        <div className='topnav__right'>
            <div className='topnav__item'> Item 1</div>
            <div className='topnav__item'>Item 2</div>
            <div className='topnav__item'>Item 3</div>
        </div>
    </div>
  )
}

export default TopNav