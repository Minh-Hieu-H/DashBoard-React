import React, { useState } from "react";

import "./search.css"

const Search = ({ search, handleChangeKey, placeholder }) => {
    const [searchKey, setSearchKey] = useState(search);
    const handleChange = (event) => {
        const value = event.target.value;
        setSearchKey(value);
        handleChangeKey(value);
    };

    return (
        <div className="search">
            <input type="text" value={searchKey} onChange={handleChange} placeholder={placeholder} />
            <i className="bx bx-search" />
        </div>
    )
}

export default Search;