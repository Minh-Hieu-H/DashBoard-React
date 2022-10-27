import React from 'react'
import './statuscard.css'

const StatusCard = (props) => {
  return (
    <div className='status-card'>
      <div className="row pr-0-5">
        <div className='status-card_icon'>
          <i className={props.icon}></i>
        </div>
        <div className="status-card_title cut-text">
          <p>{props.title}</p>
        </div>
      </div>
      <div className="row">
        <div className='status-card_info'>
          <div className="justify-div">
            <p className="mb-0-5">Scanned contents:</p><span>{props.count}</span>
          </div>
          <div className="justify-div">
            <p className="mb-0-5">New contents:</p><span>{props.new}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusCard