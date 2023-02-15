import React from 'react'
import { useHistory } from 'react-router-dom';
import './contentcard.css'

const ContentCard = (props) => {
  const history = useHistory();
  const viewContentDetails = (item) => history.push('/contentinfo');
  return (
    <div className='content-card' >
      <div className='row'>
        <div className='content-card_icon pl-0-5'>
            <i className={props.type == 'danger' ? 'bx bxl-youtube' : 'bx bxl-facebook-circle'}></i>
          </div>
        <div className='content-card_type pl-0-5'>
          <p>
            {props.type == 'danger' ? 'Youtube channel' : 'Facebook fanpage'}</p>
        </div>
        <div className='content-card_id'>
          <p className="mb-0-5">{props.id}</p>
        </div>
      </div>
      <div className="row">
        <div className='content-card_content'>
            <p>{props.content}</p>
        </div>
      </div>
      <div className="row justify-div">
        <a href={props.url}>
          <button className='content-card_button' type='button' >
              Link
          </button>
        </a>
        <button className='content-card_button' onClick={viewContentDetails}>
            <p className="mb-0-5"></p><i className="bx bx-search-alt mr-0-5"></i><span>Details</span>
        </button>
      </div>
    </div>
  )
}

export default ContentCard