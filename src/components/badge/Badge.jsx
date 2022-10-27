
import React from 'react'
import './badge.css'
import { useHistory } from "react-router-dom";

const Badge = (props) => {
  const history = useHistory();
  const handleClickBadge = (item) => history.push('/taginfo');
  return (
    <span className={`badge badge-${props.type} ${props.className}`} onClick={handleClickBadge} style={props.clickable === "none" ? {pointerEvents: "none"} : {}}>
      {props.content}
    </span>
  )
}

export default Badge