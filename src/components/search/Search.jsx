import React, { useState } from "react";

import "./search.css"

const Search = (props) => 
 (
        <div className="search">
            <input type="text" value={props.value} onChange={props.onChange?(e)=> props.onChange(e):null} placeholder={props.placeholder} />
            <i onClick={props.handleEvent ? props.handleEvent:null} className="bx bx-search" />
        </div>
    )


export default Search;